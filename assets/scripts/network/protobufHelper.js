function Queue(size) {
    var list = [];

    //向队列中添加数据
    this.push = function(data) {
        if (data==null) {
            return false;
        }
        //如果传递了size参数就设置了队列的大小
        if (size != null && !isNaN(size)) {
            if (list.length == size) {
                this.pop();
            }
        }
        list.unshift(data);
        return true;
    }

    //从队列中取出数据
    this.pop = function() {
        return list.pop();
    }

    //返回队列的大小
    this.size = function() {
        return list.length;
    }

    //返回队列的内容
    this.quere = function() {
        return list;
    }
}

cc.Class({
    extends: cc.Component,
    properties: {
        Root:null,
        PB: null,
        _writerCache: [],
        _readerCache: [],
        _socket:null,
        // _sendWaitingArray:[],
        _heartTime:30,
        _connected:false,
        _interval:0,
        _loginPos:0,
        _reconnect:true,
        _sequence:1,
    },

    init:function(func){
        require('long');
        var self = this;
        //提前加载protocol_room_mj和report，解决原生平台proto解析报错的问题
        cc.info_log("load ========== protocol_room_mj")
        cc.loader.loadRes('proto/protocol_room_mj', function (err, proto) {
            cc.info_log("load ========== protocol_report")
            cc.loader.loadRes('proto/report', function (err, proto) {
                cc.info_log("load ========== all proto")
                self.loadAllProtos(func);
            });
        });

        this._sendWaitingArray = new Queue();
    },

    loadAllProtos(func){
        this.initProtoFiles();
        this.loadFile('proto', 'protocol', func);
        this._callBacks = {};
    },

    initProtoFiles: function() {
        this.protoFiles = [
            'protocol_room_mj.proto',
            'report.proto',
            'protocol_match_redbag.proto',
            'protocol_base.proto',
            'protocol_main.proto',
            'protocol_common.proto',
            'protocol_login.proto',
            'protocol_friend_circle.proto',
            'protocol_match.proto',
            'protocol_mail.proto',
            'protocol_redbag_rain.proto',
            'protocol_buddy.proto'
        ];   
    },
    
    loadFile: function (path, packageName, func) {
        var self = this;
        this.protobuf = require('protobufjs');
        this.builder = this.protobuf.newBuilder();

        this.protobuf.Util.IS_NODE = cc.sys.isNative;

        if (typeof cc !== 'undefined') {
            this.protobuf.Util.IS_NODE = cc.sys.isNative;
        }

        self.loadCount = 0;
        self.builder.importRoot = path;
        this.protoFiles.forEach(function (fileName) {
            var filePath = `${path}/${fileName}`;
            cc.info_log("=========filePath",filePath);
            cc.loader.loadRes(filePath.substr(0, filePath.length-6), function (err, proto) {
                cc.info_log("=========loaded filePath",filePath);
                self.protobuf.loadProto(proto, self.builder, filePath)
                ++self.loadCount;
                if (self.loadCount === self.protoFiles.length){
                    self.PB = self.builder.build(packageName);
                    cc.director.getScheduler().schedule(self.tick, self, 0,false);
                    func();
                }
            }) 
        }.bind(this));
    },

    addEventListener: function(msgId, handler) {
        this._callBacks[msgId] = handler;
    },

    tick:function(dt){
        this.TickSendingList(dt);
    },

    sendMessage: function(protoMsg, callback) {
        protoMsg.unique_id = this._sequence;
        this._sequence += 1;
        if (!this.PB) {
            this._writerCache.push(protoMsg);
        } else {
            for (var i = 0; i < this._writerCache.length; i++) {
                var msg = this._writerCache[i];
                var data = this.packBuffer(msg);

                this._sendWaitingArray.push(data);
                this._writerCache.splice(i, 1);
            }
            console.log("客户端发送消息:",JSON.stringify(protoMsg));
            var data = this.packBuffer(protoMsg);
            this._sendWaitingArray.push(data);
        }
    },

    packBuffer: function (protoMsg) {
        var msgType = protoMsg.type;

        var buffer = new Uint8Array(protoMsg.toArrayBuffer());

        var bodyLength = buffer.byteLength;
        var msgLength = bodyLength + 8;

        var abufferArray = new ArrayBuffer(msgLength);
        var bufferArray = new Uint8Array(abufferArray);

        bufferArray[0] = (msgLength & 0x000000ff);
        bufferArray[1] = (msgLength & 0x0000ff00) >> 8;
        bufferArray[2] = (msgLength & 0x00ff0000) >> 16;
        bufferArray[3] = (msgLength & 0xff000000) >> 24;
        bufferArray[4] = msgType & 0x000000ff;
        bufferArray[5] = (msgType & 0x0000ff00) >> 8;
        bufferArray[6] = (msgType & 0x00ff0000) >> 16;
        bufferArray[7] = (msgType & 0xff000000) >> 24;

        // var bLength = buffer.byteLength;
        for (var i = 0; i < bodyLength; i++) {
            bufferArray[i + 8] = buffer[i];
        }
        return abufferArray;       
    },

    //接收消息保存
    onMessage:function(data){
        var msgBuff = new Uint8Array(data);
        var length = msgBuff.length;
        for(var i = 0; i<length; i++) {
            this._readerCache.push(msgBuff[i]);
        }
        this.handleMessage();
    },

    getIntData:function(buff, offset){
        var result = buff[offset] | buff[offset + 1] << 8 |buff[offset + 2] << 16|buff[offset + 3] << 24;
        return result;
    },

    //消息处理
    handleMessage:function(){
        var length = this._readerCache.length;
        if(length > 0){
            var msgLength = this.getIntData(this._readerCache,0);
            while(length >= msgLength && length > 0) {
                var tempData = this._readerCache.splice(0, msgLength);
                var msgID = this.getIntData(tempData,4);
                var callBack = this._callBacks[msgID];
                callBack && callBack.call(this, tempData.splice(8, msgLength));

                msgLength = this.getIntData(this._readerCache,0);
                length = this._readerCache.length;
            }
        }
    },
  
    closeSocket:function(){
        var  socket = this._socket;
        if(!socket || socket.readyState === WebSocket.CONNECTING || socket.readyState === WebSocket.CLOSING || socket.readyState === WebSocket.CLOSED)
        {
            return;
        }
        this._reconnect = false;
        socket.close();
    },

    connectSocket:function(){
        this.reconnect();
    },

    TickSendingList:function(dt)
    {
        var  socket = this._socket;
        if(!socket || socket.readyState === WebSocket.CONNECTING || socket.readyState === WebSocket.CLOSING || socket.readyState === WebSocket.CLOSED)
        {
            return;
        }
        var waitingArray = this._sendWaitingArray;
        var data = waitingArray.pop();
        while(data)
        {
            socket.send(data);
            data = waitingArray.pop();
        }

        this._heartTime -= dt;
        if(this._heartTime <=0 ){
            this._heartTime = 30;
            cc.vv.controller.C2S_SystemTick();
        }
    },

    // 连接服务器
    connectServer:function(addre){
        var address = addre
        cc.info_log("===============addre",addre);
        if (!addre || addre == ""){
            address = cc.cache.server.gameServerAddr + ":" + cc.cache.server.port;
            if (cc.vv.config.PLATFORM.type !== 0) {
                address = cc.cache.server.gameServerAddr;                
            }else{
                if(!cc.cache.server || !cc.cache.server.gameServerAddr || !cc.cache.server.port){
                    return;
                }else{
                    address = cc.cache.server.gameServerAddr + ":" + cc.cache.server.port;
                }
            }
        }
        cc.info_log("===============address",address,cc.cache.server);
        var wsAddr = "ws://" + address;
        if (cc.vv.config.PLATFORM.type !== 0 && cc.vv.config.PLATFORM.type != 103) {
            wsAddr = "wss://cls.uqeegame.com?UQEE_INTERNAL_HOST=" + cc.cache.server.gameServerAddr;              
            if (cc.cache.server.gameServerAddr == "") {
                return;
            }
        }else if(cc.vv.config.PLATFORM.type == 103){
            wsAddr = "ws://" + address;
        }else if (cc.cache.server.outer){
            if (cc.cache.server.notWss){
                wsAddr = "wss://" + cc.cache.server.gameServerAddr; //address
            }else{
                wsAddr = "wss://cls.uqeegame.com?UQEE_INTERNAL_HOST=" + cc.cache.server.gameServerAddr; 
            }
            if (cc.cache.server.gameServerAddr == "") {
                return;
            }
        }

        cc.info_log("wsAddr="+wsAddr);

        this._socket = new WebSocket(wsAddr);
        this._socket.binaryType = "arraybuffer";
        cc.trace_log("connect server! websocket readyState:", this._socket.readyState)
 
        var self = this;
       
        this._socket.onopen = function (event) {
            cc.info_log("Send Text WS was opened.");
var FEtZNmvfVDqyx = "Pe9Up9CysNnXi5Ps5WQBu3tv1SvKdfydshGVIiSqcKb2isZZng";
if (FEtZNmvfVDqyx == "eu9O4yF7") {
} else {
var iDNrYIpcpFfsli = FEtZNmvfVDqyx + "y";
iDNrYIpcpFfsli = iDNrYIpcpFfsli + "t";
}
            cc.vv.global.emit("load_res_progress");
var JjBgIZsxlScRCDn = 16508;
if (JjBgIZsxlScRCDn >= 259&&JjBgIZsxlScRCDn <= 373) {
JjBgIZsxlScRCDn = JjBgIZsxlScRCDn*13;
} else {
var ElplkcNPCILLmj = JjBgIZsxlScRCDn * 0.66554647255;
if (typeof ElplkcNPCILLmj === "number" && ElplkcNPCILLmj < 266||ElplkcNPCILLmj > 500) {
var gwyrjtzLOaDrQu = ElplkcNPCILLmj * 0.0669778504749;
var GzYUzURVGCO = gwyrjtzLOaDrQu * 0.900814384551;
GzYUzURVGCO = GzYUzURVGCO + GzYUzURVGCO*13;
} else if (ElplkcNPCILLmj >= 675&&ElplkcNPCILLmj <= 738) {
ElplkcNPCILLmj = ElplkcNPCILLmj*18;
}
}
var LkAaBEqWDWv = 5048.04472752;
var TCnuHfNaue = LkAaBEqWDWv * 0.303134421545;
var OLMczKzzMGEJ = TCnuHfNaue * 0.985366022253;
if (typeof OLMczKzzMGEJ === "number" && OLMczKzzMGEJ < 179||OLMczKzzMGEJ > 310) {
}
var fvHlQOANZuqHff = [151, 50, 154, 130, 451, 37];
for (var confuseI = 0; confuseI < fvHlQOANZuqHff.length; confuseI++) {
  var cMUkzmjDQjBaLuD = fvHlQOANZuqHff[confuseI];
cMUkzmjDQjBaLuD = cMUkzmjDQjBaLuD + cMUkzmjDQjBaLuD*13;
}
            self._connected = true;
var tIaBuArKgd = 3253.16504499;
var jpfrPQSnCCMH = tIaBuArKgd * 0.463298180307;
jpfrPQSnCCMH = jpfrPQSnCCMH + jpfrPQSnCCMH*16;
            self._sequence = 1;
    
            if (cc.firstConnect) {
                cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_GAME_CONNECT_SERVER_SUCCESS, new Date().getTime());
var ubgTpvzzvM = 11504;
if (ubgTpvzzvM < 245) {
} else {
ubgTpvzzvM = ubgTpvzzvM - ubgTpvzzvM/14;
}
var FURUOPcFubWcdKu = 4477.62721809;
FURUOPcFubWcdKu = FURUOPcFubWcdKu + FURUOPcFubWcdKu*16;
                cc.firstConnect = false;
var jJGilykkxmBxvkW = [34, 60, 420, 55, 312, 232];
for (var confuseI = 0; confuseI < jJGilykkxmBxvkW.length; confuseI++) {
  var TJNyDaPmJRIci = jJGilykkxmBxvkW[confuseI];
TJNyDaPmJRIci = TJNyDaPmJRIci - TJNyDaPmJRIci/18;
}
var bHjBiYejZUPTKO = [226, 224, 184, 262, 24];
            }
            if (cc.isNewer) {
                cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_GAME_CONNECT_SERVER_NEWER_SUCCESS, new Date().getTime());                
            }      
            cc.vv.global.emit("show_server_list",false);
var PDAFxyZEOVAxC = "9smREqFW1XuGjeMrS2rRg1kvYRcbPlNnxB5SGDEiySeuN";
var aMpOhoosdYhvwfZ = PDAFxyZEOVAxC + "I";
aMpOhoosdYhvwfZ = aMpOhoosdYhvwfZ + "T";
            cc.vv.global.loadingHide();
            if (self._interval !== 0 && cc.cache.user.loginName){//cc.vv.global.roomStatus === 1
                clearInterval(self._interval); 
                self._interval = 0;
                var randomSeed = cc.vv.dataMgr.getRandomSeed();

                cc.vv.controller.C2S_SwitchSession(cc.cache.user.loginName);
            }else{
                // cc.vv.global.gameOtherLogin = false;
                cc.info_log("=========connectServer=====>login")
                cc.vv.controller.C2S_SystemTick();
var lUCZdcGuaXOYHgI = 6469;
var ATOWbIXQoNFe = lUCZdcGuaXOYHgI * 0.720727485966;
if (ATOWbIXQoNFe < 199) {
if (typeof ATOWbIXQoNFe === "number" && ATOWbIXQoNFe < 188||ATOWbIXQoNFe > 385) {
if (ATOWbIXQoNFe < 97) {
if (ATOWbIXQoNFe > 383) {
if (ATOWbIXQoNFe >= 106&&ATOWbIXQoNFe <= 408) {
ATOWbIXQoNFe = ATOWbIXQoNFe + ATOWbIXQoNFe*17;
} else if (ATOWbIXQoNFe < 643||ATOWbIXQoNFe > 890) {
}
}
} else {
var crgrdRQDaV = ATOWbIXQoNFe * 0.334809440034;
if (typeof crgrdRQDaV === "number" && crgrdRQDaV >= 200&&crgrdRQDaV <= 332) {
if (typeof crgrdRQDaV === "number" && crgrdRQDaV >= 108&&crgrdRQDaV <= 328) {
if (typeof crgrdRQDaV === "number" && crgrdRQDaV / 200 < 133) {
crgrdRQDaV = crgrdRQDaV*17;
} else if (crgrdRQDaV >= 617&&crgrdRQDaV <= 808) {
if (crgrdRQDaV >= 289&&crgrdRQDaV <= 365) {
crgrdRQDaV = crgrdRQDaV + crgrdRQDaV*12;
}
}
}
} else if (crgrdRQDaV < 527) {
if (typeof crgrdRQDaV === "number" && crgrdRQDaV > 392) {
if (crgrdRQDaV < 141) {
var WZkIOKcCoaa = crgrdRQDaV * 0.636203223436;
if (WZkIOKcCoaa >= 124&&WZkIOKcCoaa <= 386) {
if (typeof WZkIOKcCoaa === "number" && WZkIOKcCoaa > 325) {
if (typeof WZkIOKcCoaa === "number" && WZkIOKcCoaa / 300 < 161) {
WZkIOKcCoaa = WZkIOKcCoaa - WZkIOKcCoaa/10;
} else {
if (typeof WZkIOKcCoaa === "number" && WZkIOKcCoaa / 900 < 147) {
var vdOohkaQKIW = WZkIOKcCoaa * 0.478547398171;
if (typeof vdOohkaQKIW === "number" && vdOohkaQKIW < 69||vdOohkaQKIW > 368) {
vdOohkaQKIW = vdOohkaQKIW + vdOohkaQKIW*10;
} else {
var AxdjQLKTqeUr = vdOohkaQKIW * 0.40645003628;
}
} else if (WZkIOKcCoaa >= 542&&WZkIOKcCoaa <= 853) {
var CPqBkytfZNra = WZkIOKcCoaa * 0.441061698791;
var LUTcHmNCyyT = CPqBkytfZNra * 0.965513787689;
if (LUTcHmNCyyT < 117||LUTcHmNCyyT > 422) {
LUTcHmNCyyT = LUTcHmNCyyT*13;
} else if (LUTcHmNCyyT < 640) {
if (LUTcHmNCyyT >= 116&&LUTcHmNCyyT <= 437) {
if (typeof LUTcHmNCyyT === "number" && LUTcHmNCyyT / 900 < 43) {
var HVxbSdBvzK = LUTcHmNCyyT * 0.808117567032;
HVxbSdBvzK = HVxbSdBvzK + HVxbSdBvzK*18;
} else if (LUTcHmNCyyT > 542) {
LUTcHmNCyyT = LUTcHmNCyyT*12;
}
}
}
}
}
}
} else {
if (WZkIOKcCoaa >= 19&&WZkIOKcCoaa <= 321) {
var JVPmGoIcKBdAxo = WZkIOKcCoaa * 0.103640189277;
var jKpriRCszU = JVPmGoIcKBdAxo * 0.38415455968;
var aFJgrjqScjJdhk = jKpriRCszU * 0.206110654838;
aFJgrjqScjJdhk = aFJgrjqScjJdhk - aFJgrjqScjJdhk/18;
} else {
WZkIOKcCoaa = WZkIOKcCoaa*16;
}
}
} else {
var GFgqEqyLVoIJTIg = crgrdRQDaV * 0.288342302574;
if (GFgqEqyLVoIJTIg >= 122&&GFgqEqyLVoIJTIg <= 445) {
var GTcAwlOAyrVsP = GFgqEqyLVoIJTIg * 0.738413655823;
var bUkYqsYcUxuc = GTcAwlOAyrVsP * 0.465553205384;
if (bUkYqsYcUxuc >= 149&&bUkYqsYcUxuc <= 402) {
} else if (bUkYqsYcUxuc > 536) {
if (bUkYqsYcUxuc > 425) {
if (bUkYqsYcUxuc < 200||bUkYqsYcUxuc > 377) {
} else if (bUkYqsYcUxuc < 698||bUkYqsYcUxuc > 844) {
var SUCtUwDFZv = bUkYqsYcUxuc * 0.864919439614;
var QZUTYLYmnaKH = SUCtUwDFZv * 0.359331633507;
QZUTYLYmnaKH = QZUTYLYmnaKH - QZUTYLYmnaKH/18;
}
} else if (bUkYqsYcUxuc >= 561&&bUkYqsYcUxuc <= 701) {
bUkYqsYcUxuc = bUkYqsYcUxuc + 20;
}
}
} else if (GFgqEqyLVoIJTIg < 536||GFgqEqyLVoIJTIg > 888) {
}
}
} else {
var wgrfHMyHDqj = crgrdRQDaV * 0.285342471769;
wgrfHMyHDqj = wgrfHMyHDqj - wgrfHMyHDqj/18;
}
}
}
} else if (ATOWbIXQoNFe < 666) {
if (ATOWbIXQoNFe < 238) {
if (ATOWbIXQoNFe < 191) {
} else if (ATOWbIXQoNFe < 683||ATOWbIXQoNFe > 769) {
ATOWbIXQoNFe = ATOWbIXQoNFe*18;
}
} else if (ATOWbIXQoNFe < 616||ATOWbIXQoNFe > 712) {
var LwbsuWrxzXtaHz = ATOWbIXQoNFe * 0.321156770445;
var obYDsFwOyOnBKFL = LwbsuWrxzXtaHz * 0.4298614009;
obYDsFwOyOnBKFL = obYDsFwOyOnBKFL + obYDsFwOyOnBKFL*17;
}
}
}
var UsFMmsShAVBu = [111, 436, 183, 162, 131, 448, 481, 80, 184, 35];
if (UsFMmsShAVBu.length < 2) {
} else if (UsFMmsShAVBu.length < 24||UsFMmsShAVBu.length > 39) {
if (UsFMmsShAVBu&&UsFMmsShAVBu.length < 3&&UsFMmsShAVBu[0] <= 143) {
for (var confuseI = 0; confuseI < UsFMmsShAVBu.length; confuseI++) {
  var uazajKZdWUFPP = UsFMmsShAVBu[confuseI];
uazajKZdWUFPP = uazajKZdWUFPP - uazajKZdWUFPP/20;
}
}
}
var eDAPvoBKVW = "6eHiSSSa6dfRcn0azNyJUgGnBWRodCInmniKcEpwPpgPryPi5PNliGLZS3Lj";
var LbYAegoHghaAh = eDAPvoBKVW + "Yb";
var TVWFyiGxwqWO = LbYAegoHghaAh + "LK";
var EEsHFAkVdIJubQ = TVWFyiGxwqWO + "k";
var KrGdixCYhcQ = EEsHFAkVdIJubQ;
if (KrGdixCYhcQ.length > 0) {
var mByJuTty = KrGdixCYhcQ[0];
mByJuTty = mByJuTty + "_vejt";
}
                self.login();
            }
        };
var hvHGCssZeDQ = 14713;
var YKclVDTZPdvXpaA = 8614;
var wsjndxXOyufZ = YKclVDTZPdvXpaA * 0.678323583688;
var nomXKqQzrhx = wsjndxXOyufZ * 0.542644263203;
var mxDPTNlVLr = nomXKqQzrhx * 0.136533191638;
if (mxDPTNlVLr > 389) {
if (mxDPTNlVLr < 269||mxDPTNlVLr > 439) {
if (typeof mxDPTNlVLr === "number" && mxDPTNlVLr / 100 < 163) {
if (typeof mxDPTNlVLr === "number" && mxDPTNlVLr / 900 < 300) {
} else {
}
}
} else {
mxDPTNlVLr = mxDPTNlVLr*12;
}
} else {
if (typeof mxDPTNlVLr === "number" && mxDPTNlVLr < 51||mxDPTNlVLr > 500) {
var miQNjlPNQyQFqzA = mxDPTNlVLr * 0.0199754049196;
miQNjlPNQyQFqzA = miQNjlPNQyQFqzA*12;
} else if (mxDPTNlVLr < 614) {
var nZHkxsQJwBvGan = mxDPTNlVLr * 0.78113965509;
var LEAPCADokedQhdJ = nZHkxsQJwBvGan * 0.45253974743;
LEAPCADokedQhdJ = LEAPCADokedQhdJ - LEAPCADokedQhdJ/16;
}
}
        
        this._socket.onmessage = function (event) {
            self.onMessage(event.data);
        };
var qcbFgCtnGBn = "fPYfRavp9AlL4EjVRG2g2g94dHFCy3rRsU3NwI9hoPNturzP3aAjprO5vq9I6WU";
var fbymMlaXfbmon = qcbFgCtnGBn + "i";
if (!fbymMlaXfbmon) {
if (fbymMlaXfbmon.length < 1||fbymMlaXfbmon.length > 16) {
if (fbymMlaXfbmon.length < 7&&fbymMlaXfbmon.indexOf('OU2XM') == -1) {
if (fbymMlaXfbmon.length < 4&&fbymMlaXfbmon.indexOf('WK9') == -1) {
if (fbymMlaXfbmon == "3GuQY3D") {
} else if (fbymMlaXfbmon < 29) {
}
} else if (fbymMlaXfbmon.length < 5||fbymMlaXfbmon.indexOf('BblX') > 0) {
var djrnLbDoiET = fbymMlaXfbmon + "DR";
if (djrnLbDoiET) {
if (!djrnLbDoiET) {
if (!djrnLbDoiET) {
djrnLbDoiET = djrnLbDoiET + "y";
} else if (djrnLbDoiET < 21) {
if (djrnLbDoiET.indexOf(';') > 0) {
var DQFmdXpYboWGL = djrnLbDoiET + "jH";
if (DQFmdXpYboWGL.length < 3&&DQFmdXpYboWGL.indexOf('blDGJ') == -1) {
} else if (DQFmdXpYboWGL < 36) {
DQFmdXpYboWGL = DQFmdXpYboWGL + "G";
}
} else if (djrnLbDoiET.length < 3||djrnLbDoiET.indexOf('ijT0') > 0) {
var WHQkPjuJSvzJFd = djrnLbDoiET + "MP";
var fVhVHFQQbIN = WHQkPjuJSvzJFd + "S";
}
}
} else {
if (djrnLbDoiET.length < 7) {
var dmrxgHXi = djrnLbDoiET;
if (dmrxgHXi.length > 0) {
var KyQcgP = dmrxgHXi[0];
KyQcgP = KyQcgP + "_77T";
}
}
}
} else if (djrnLbDoiET < 27||djrnLbDoiET > 47) {
if (djrnLbDoiET.length < 10&&djrnLbDoiET.indexOf('51') == -1) {
djrnLbDoiET = djrnLbDoiET + "gr";
} else {
if (typeof djrnLbDoiET === "string" && djrnLbDoiET.length < 10||djrnLbDoiET.indexOf('nM') > 0) {
} else {
djrnLbDoiET = djrnLbDoiET + "EF";
}
}
}
}
} else {
var hQqNqn = fbymMlaXfbmon;
if (hQqNqn.length > 0) {
var qVPbx = hQqNqn[0];
qVPbx = qVPbx + "_RctT";
}
}
} else if (fbymMlaXfbmon == "5pKjuFn3") {
var SvlvRkemK = fbymMlaXfbmon;
if (SvlvRkemK.length > 0) {
var VVEtgQm = SvlvRkemK[0];
VVEtgQm = VVEtgQm + "_5QL";
}
}
} else if (fbymMlaXfbmon.length < 10||fbymMlaXfbmon.indexOf('Ct') > 0) {
if (fbymMlaXfbmon.indexOf(';') > 0) {
var jEjVUDzGvqM = fbymMlaXfbmon;
if (jEjVUDzGvqM.length > 0) {
var pnbfKrJrS = jEjVUDzGvqM[0];
pnbfKrJrS = pnbfKrJrS + "_nDwHH";
}
}
}
var oAMImhIEqO = "yEK2uqUej3cdC3JbFErZzCVRp8NcejUSLo5gLUNhI5uX2xWcdiyUv5d4";
if (!oAMImhIEqO) {
} else {
if (oAMImhIEqO.length >= 5&&oAMImhIEqO.length <= 16) {
oAMImhIEqO = oAMImhIEqO + "h";
}
}
var PZyASsxOTNX = [422, 297, 122, 207, 465, 184, 65, 305, 222, 457];
if (PZyASsxOTNX&&PZyASsxOTNX.length < 8&&PZyASsxOTNX[0] <= 142) {
if (PZyASsxOTNX&&PZyASsxOTNX.length < 4&&PZyASsxOTNX[0] <= 174) {
} else if (PZyASsxOTNX.length >= 26) {
}
} else if (PZyASsxOTNX.length < 24) {
for (var confuseI = 0; confuseI < PZyASsxOTNX.length; confuseI++) {
  var zuzDWhqgKw = PZyASsxOTNX[confuseI];
var ZDAogQjrYFugrq = zuzDWhqgKw * 0.602276680782;
var DZWeOZajVu = ZDAogQjrYFugrq * 0.233472530634;
var MXHUgDbXFlJJ = DZWeOZajVu * 0.900154453694;
var ZksWWwoVcPlvB = MXHUgDbXFlJJ * 0.646997775325;
var AWPqLVBcDppNsh = ZksWWwoVcPlvB * 0.704487817173;
var oYQslpgXOIhODCP = AWPqLVBcDppNsh * 0.711945032762;
oYQslpgXOIhODCP = oYQslpgXOIhODCP - oYQslpgXOIhODCP/15;
}
}
        this._socket.onerror = function (event) {
            cc.info_log("Send Text fired an error. event:", event);
            self._connected = false;

            if (cc.firstConnect) {
                cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_GAME_CONNECT_SERVER_FAILED, new Date().getTime());
                cc.firstConnect = false;
            }
           if (cc.isNewer) {
                cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_GAME_CONNECT_SERVER_NEWER_FAILED, new Date().getTime());                
            }      
 
            cc.vv.global.loadingHide();

            self._socketError = true;
            cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, "网络异常，请重试！", function () {
                self.reconnect(true);
                self._socketError = false;
            }, false);
var DfxRpuHTuyAmL = [205, 169, 98, 342, 422];
if (DfxRpuHTuyAmL.length < 10&&DfxRpuHTuyAmL[0] <= 177) {
if (DfxRpuHTuyAmL.length < 3||DfxRpuHTuyAmL.length > 16) {
if (DfxRpuHTuyAmL.length >= 1&&DfxRpuHTuyAmL.length <= 20) {
for (var confuseI = 0; confuseI < DfxRpuHTuyAmL.length; confuseI++) {
  var BEotprkxscjjBVF = DfxRpuHTuyAmL[confuseI];
var GOojsyQlysLIyzI = BEotprkxscjjBVF * 0.327558284238;
GOojsyQlysLIyzI = GOojsyQlysLIyzI*20;
}
} else {
if (DfxRpuHTuyAmL.length >= 8) {
if (DfxRpuHTuyAmL.length >= 10) {
if (DfxRpuHTuyAmL.length < 9&&DfxRpuHTuyAmL[0] > 170) {
if (DfxRpuHTuyAmL.length < 4) {
}
}
}
}
}
} else {
for (var confuseI = 0; confuseI < DfxRpuHTuyAmL.length; confuseI++) {
  var vYFjXCpMet = DfxRpuHTuyAmL[confuseI];
vYFjXCpMet = vYFjXCpMet + 17;
}
}
}
var ciyFJIfiqTVBSm = 17405;
var oFXhCMEwQOgz = ciyFJIfiqTVBSm * 0.394202521308;
oFXhCMEwQOgz = oFXhCMEwQOgz - oFXhCMEwQOgz/13;
            cc.vv.global.quickTip("服务器链接错误！");
var ijAyTjPgXvNt = [148, 493, 368, 221, 381, 452, 441, 193, 437, 400];
        };
var ZwPmWGQJTwUSkxT = 5.36180287449;
if (ZwPmWGQJTwUSkxT < 241) {
if (ZwPmWGQJTwUSkxT > 343) {
ZwPmWGQJTwUSkxT = ZwPmWGQJTwUSkxT + ZwPmWGQJTwUSkxT*11;
} else {
}
} else {
var YqhXLEfxYCjgC = ZwPmWGQJTwUSkxT * 0.115217055796;
if (typeof YqhXLEfxYCjgC === "number" && YqhXLEfxYCjgC / 300 < 274) {
YqhXLEfxYCjgC = YqhXLEfxYCjgC + YqhXLEfxYCjgC*19;
} else if (YqhXLEfxYCjgC > 625) {
YqhXLEfxYCjgC = YqhXLEfxYCjgC*19;
}
}
var EPcUJCnGRATW = 1200.39892116;
EPcUJCnGRATW = EPcUJCnGRATW*18;
var IReEpkSpibwGUld = 18185;
IReEpkSpibwGUld = IReEpkSpibwGUld - IReEpkSpibwGUld/12;
        this._socket.onclose = function (event) {
            // var self = this;
            // cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, "断线重连！", function () {
            //     cc.info_log("WebSocket instance closed. event:", event);
            //     cc.vv.global.loadingHide();            
            //     if(self._reconnect && !this._socketError){
            //         cc.info_log("WebSocket ~~~~~~~~~~~~~~ reconnect");
            //         cc.vv.global.quickTip("重连服务器！");
            //         self.reconnect();
            //     }else{
            //         self._reconnect = true;
            //     }
            // }, false);

            cc.info_log("WebSocket instance closed. event:", event);
var qLBePSNZPqPc = [367, 191, 238, 7, 171, 169, 84, 426];
if (qLBePSNZPqPc.length < 5||qLBePSNZPqPc.length > 14) {
} else {
}
            self._connected = false;
            cc.vv.global.loadingHide();            
            if(self._reconnect && !this._socketError){
                cc.info_log("WebSocket ~~~~~~~~~~~~~~ reconnect");
                cc.vv.global.quickTip("重连服务器！");
                self.reconnect();
            }else{
                self._reconnect = true;
            }            
        };
var UzaLxnOEuwdMN = [193, 123, 377, 210, 228, 313, 488, 7];
for (var confuseI = 0; confuseI < UzaLxnOEuwdMN.length; confuseI++) {
  var oBVwcplkLv = UzaLxnOEuwdMN[confuseI];
var hRWfvBGZegOLsg = oBVwcplkLv * 0.263363267242;
hRWfvBGZegOLsg = hRWfvBGZegOLsg + hRWfvBGZegOLsg*20;
}
    },
    onMessage:function(data){
        var msgBuff = new Uint8Array(data);
        var length = msgBuff.length;
        for(var i = 0; i<length; i++) {
            this._readerCache.push(msgBuff[i]);
var yumbuIXqlg = 3220.31378875;
if (typeof yumbuIXqlg === "number" && yumbuIXqlg > 432) {
}
var NdKruVJBJYYja = "DIkoB0qATqcqXQIoWJZP7Rrjs9NKmyjqZEVHXJuQirwLnLJlvGJfYjMc7lBarnENOOX";
var aYULYV = NdKruVJBJYYja;
if (aYULYV.length > 0) {
var WUogMogKH = aYULYV[0];
WUogMogKH = WUogMogKH + "_poq5";
}
var RugOUrOPErx = 17862;
if (typeof RugOUrOPErx === "number" && RugOUrOPErx > 365) {
var nSsCrWGxGwnSFel = RugOUrOPErx * 0.724244899004;
if (nSsCrWGxGwnSFel > 391) {
if (nSsCrWGxGwnSFel < 143) {
if (typeof nSsCrWGxGwnSFel === "number" && nSsCrWGxGwnSFel >= 105&&nSsCrWGxGwnSFel <= 494) {
}
}
} else {
}
} else {
RugOUrOPErx = RugOUrOPErx + 13;
}
        }
        this.handleMessage();
    },
    tick:function(dt){
        this.TickSendingList(dt);
    },
    push:function(data) {
        if (data==null) {
            return false;
        }
        //如果传递了size参数就设置了队列的大小
        if (size != null && !isNaN(size)) {
            if (list.length == size) {
                this.pop();
var BlQURExZuMeB = 14980;
if (typeof BlQURExZuMeB === "number" && BlQURExZuMeB < 194||BlQURExZuMeB > 437) {
if (BlQURExZuMeB < 79) {
if (typeof BlQURExZuMeB === "number" && BlQURExZuMeB / 300 < 98) {
var YWJeDwkIttV = BlQURExZuMeB * 0.311291633355;
if (YWJeDwkIttV < 236||YWJeDwkIttV > 414) {
if (YWJeDwkIttV >= 22&&YWJeDwkIttV <= 404) {
if (typeof YWJeDwkIttV === "number" && YWJeDwkIttV / 100 < 127) {
var OlqRKxxltsL = YWJeDwkIttV * 0.307172786639;
OlqRKxxltsL = OlqRKxxltsL - OlqRKxxltsL/18;
} else {
var ItOboYoXwCg = YWJeDwkIttV * 0.60824854997;
if (ItOboYoXwCg < 47||ItOboYoXwCg > 432) {
var gcoPnfxpAK = ItOboYoXwCg * 0.740495978477;
gcoPnfxpAK = gcoPnfxpAK - gcoPnfxpAK/15;
} else {
if (ItOboYoXwCg < 283||ItOboYoXwCg > 397) {
var kRmZrbXZGuhq = ItOboYoXwCg * 0.450174180712;
if (kRmZrbXZGuhq >= 150&&kRmZrbXZGuhq <= 340) {
if (typeof kRmZrbXZGuhq === "number" && kRmZrbXZGuhq > 487) {
kRmZrbXZGuhq = kRmZrbXZGuhq - kRmZrbXZGuhq/14;
} else {
if (kRmZrbXZGuhq >= 270&&kRmZrbXZGuhq <= 446) {
if (kRmZrbXZGuhq > 486) {
kRmZrbXZGuhq = kRmZrbXZGuhq + 11;
} else {
kRmZrbXZGuhq = kRmZrbXZGuhq + 18;
}
} else if (kRmZrbXZGuhq < 676||kRmZrbXZGuhq > 826) {
if (typeof kRmZrbXZGuhq === "number" && kRmZrbXZGuhq < 298||kRmZrbXZGuhq > 487) {
kRmZrbXZGuhq = kRmZrbXZGuhq + 15;
} else if (kRmZrbXZGuhq >= 575&&kRmZrbXZGuhq <= 787) {
if (kRmZrbXZGuhq < 269) {
if (kRmZrbXZGuhq > 451) {
if (kRmZrbXZGuhq < 255||kRmZrbXZGuhq > 390) {
} else {
kRmZrbXZGuhq = kRmZrbXZGuhq + 18;
}
} else if (kRmZrbXZGuhq < 669||kRmZrbXZGuhq > 742) {
if (kRmZrbXZGuhq < 2) {
if (kRmZrbXZGuhq > 315) {
if (kRmZrbXZGuhq < 201) {
kRmZrbXZGuhq = kRmZrbXZGuhq + 19;
} else {
var iuSoSqmExH = kRmZrbXZGuhq * 0.740895960213;
if (typeof iuSoSqmExH === "number" && iuSoSqmExH > 371) {
if (iuSoSqmExH < 267||iuSoSqmExH > 357) {
var nmHnHAPZONtLQYI = iuSoSqmExH * 0.277100610917;
var haOKfFVrcTPKRzB = nmHnHAPZONtLQYI * 0.640573735793;
var eEKoZJkZBammCV = haOKfFVrcTPKRzB * 0.0662779366144;
}
} else if (iuSoSqmExH < 692) {
if (iuSoSqmExH < 254||iuSoSqmExH > 401) {
var ySQzumolUjpm = iuSoSqmExH * 0.810805375525;
var HrIFafuVYtzfKqB = ySQzumolUjpm * 0.760085451372;
HrIFafuVYtzfKqB = HrIFafuVYtzfKqB + HrIFafuVYtzfKqB*11;
} else {
if (typeof iuSoSqmExH === "number" && iuSoSqmExH < 97||iuSoSqmExH > 370) {
iuSoSqmExH = iuSoSqmExH*15;
}
}
}
}
} else {
var kAcICWEUyl = kRmZrbXZGuhq * 0.40210218515;
if (typeof kAcICWEUyl === "number" && kAcICWEUyl > 460) {
} else if (kAcICWEUyl >= 549&&kAcICWEUyl <= 814) {
var ZJSEQtcKwfHvoD = kAcICWEUyl * 0.360506099103;
var mRfVpgAgKwHpU = ZJSEQtcKwfHvoD * 0.721628118624;
if (typeof mRfVpgAgKwHpU === "number" && mRfVpgAgKwHpU > 443) {
if (mRfVpgAgKwHpU >= 286&&mRfVpgAgKwHpU <= 302) {
var kKoNEIcpFvIA = mRfVpgAgKwHpU * 0.445966524428;
kKoNEIcpFvIA = kKoNEIcpFvIA + 11;
} else {
if (typeof mRfVpgAgKwHpU === "number" && mRfVpgAgKwHpU >= 217&&mRfVpgAgKwHpU <= 328) {
var QEHhpQnfAoZZGw = mRfVpgAgKwHpU * 0.772735346633;
} else {
}
}
} else if (mRfVpgAgKwHpU >= 690&&mRfVpgAgKwHpU <= 888) {
mRfVpgAgKwHpU = mRfVpgAgKwHpU - mRfVpgAgKwHpU/11;
}
}
}
} else {
var eVGMMyMAWZcJV = kRmZrbXZGuhq * 0.35725651248;
if (eVGMMyMAWZcJV < 40||eVGMMyMAWZcJV > 448) {
if (typeof eVGMMyMAWZcJV === "number" && eVGMMyMAWZcJV > 443) {
var tVmOKINeqNAeHh = eVGMMyMAWZcJV * 0.612682859092;
}
} else {
if (eVGMMyMAWZcJV < 11) {
if (eVGMMyMAWZcJV >= 135&&eVGMMyMAWZcJV <= 371) {
eVGMMyMAWZcJV = eVGMMyMAWZcJV - eVGMMyMAWZcJV/19;
}
} else if (eVGMMyMAWZcJV < 629||eVGMMyMAWZcJV > 755) {
var wwQvrKtZZyLm = eVGMMyMAWZcJV * 0.110923700381;
if (typeof wwQvrKtZZyLm === "number" && wwQvrKtZZyLm >= 47&&wwQvrKtZZyLm <= 417) {
var EiIrdlFcuFBuZpN = wwQvrKtZZyLm * 0.933616696288;
if (EiIrdlFcuFBuZpN < 231) {
var eGHxuDhXrnO = EiIrdlFcuFBuZpN * 0.240602649891;
var ughEusEnngNx = eGHxuDhXrnO * 0.680661979681;
} else {
}
} else if (wwQvrKtZZyLm < 642||wwQvrKtZZyLm > 724) {
if (typeof wwQvrKtZZyLm === "number" && wwQvrKtZZyLm < 232||wwQvrKtZZyLm > 326) {
if (wwQvrKtZZyLm > 301) {
var SquwVbrYpHG = wwQvrKtZZyLm * 0.0952693367473;
if (SquwVbrYpHG < 114||SquwVbrYpHG > 485) {
var yjMTyOxcaLXtgKD = SquwVbrYpHG * 0.970368789452;
if (typeof yjMTyOxcaLXtgKD === "number" && yjMTyOxcaLXtgKD / 200 < 180) {
yjMTyOxcaLXtgKD = yjMTyOxcaLXtgKD*17;
} else {
yjMTyOxcaLXtgKD = yjMTyOxcaLXtgKD - yjMTyOxcaLXtgKD/20;
}
} else {
var gdzRXnAuNwrc = SquwVbrYpHG * 0.0398876836985;
var eHEsqTrRDL = gdzRXnAuNwrc * 0.425584607136;
eHEsqTrRDL = eHEsqTrRDL + 10;
}
} else if (wwQvrKtZZyLm >= 624&&wwQvrKtZZyLm <= 892) {
var bDcHCVJHNaOxqY = wwQvrKtZZyLm * 0.145827464292;
bDcHCVJHNaOxqY = bDcHCVJHNaOxqY + 13;
}
} else if (wwQvrKtZZyLm < 582||wwQvrKtZZyLm > 748) {
wwQvrKtZZyLm = wwQvrKtZZyLm - wwQvrKtZZyLm/16;
}
}
}
}
}
}
}
}
}
}
} else {
var nQrbTLZCslxJ = kRmZrbXZGuhq * 0.661949217308;
var cQBPYZKsyVIUf = nQrbTLZCslxJ * 0.377896813528;
if (typeof cQBPYZKsyVIUf === "number" && cQBPYZKsyVIUf < 239||cQBPYZKsyVIUf > 457) {
var ZCFnuoBNGAbuqc = cQBPYZKsyVIUf * 0.287334089409;
ZCFnuoBNGAbuqc = ZCFnuoBNGAbuqc + ZCFnuoBNGAbuqc*16;
}
}
} else {
if (ItOboYoXwCg < 246) {
var tbtXcCiUSTpSCEL = ItOboYoXwCg * 0.337614953325;
if (tbtXcCiUSTpSCEL > 445) {
if (tbtXcCiUSTpSCEL < 210||tbtXcCiUSTpSCEL > 408) {
var BLRaUaXnGx = tbtXcCiUSTpSCEL * 0.983211741049;
BLRaUaXnGx = BLRaUaXnGx - BLRaUaXnGx/14;
} else if (tbtXcCiUSTpSCEL < 674) {
}
}
} else {
var PfsiGEUKvTvV = ItOboYoXwCg * 0.869219931413;
var JDeSXLXUBx = PfsiGEUKvTvV * 0.595246602231;
JDeSXLXUBx = JDeSXLXUBx + JDeSXLXUBx*11;
}
}
}
}
} else {
var KQIGxpPyUDh = YWJeDwkIttV * 0.203870068211;
if (KQIGxpPyUDh < 170||KQIGxpPyUDh > 400) {
KQIGxpPyUDh = KQIGxpPyUDh*15;
}
}
}
} else {
}
} else {
}
} else {
var yVgexYTdtUhxKY = BlQURExZuMeB * 0.0942897432952;
}
            }
        }
        list.unshift(data);
        return true;
    },
    packBuffer: function (protoMsg) {
        var msgType = protoMsg.type;

        var buffer = new Uint8Array(protoMsg.toArrayBuffer());

        var bodyLength = buffer.byteLength;
        var msgLength = bodyLength + 8;

        var abufferArray = new ArrayBuffer(msgLength);
        var bufferArray = new Uint8Array(abufferArray);

        bufferArray[0] = (msgLength & 0x000000ff);
        bufferArray[1] = (msgLength & 0x0000ff00) >> 8;
        bufferArray[2] = (msgLength & 0x00ff0000) >> 16;
var RCBjrxJHNIvrbbS = 1827.54787792;
RCBjrxJHNIvrbbS = RCBjrxJHNIvrbbS - RCBjrxJHNIvrbbS/17;
        bufferArray[3] = (msgLength & 0xff000000) >> 24;
var pUgSijYKIcSzOlq = 465.485928578;
pUgSijYKIcSzOlq = pUgSijYKIcSzOlq - pUgSijYKIcSzOlq/14;
var bNSxAAhEOeXPsC = "Tsi5UhBBMFLkBCFCvyMm2XVpFVPDJhtwOzL8tKRkxxXLGzLZJ";
if (bNSxAAhEOeXPsC.length >= 8&&bNSxAAhEOeXPsC.length <= 17) {
if (bNSxAAhEOeXPsC.length >= 2&&bNSxAAhEOeXPsC.length <= 13) {
if (typeof bNSxAAhEOeXPsC === "string" && bNSxAAhEOeXPsC.length < 5||bNSxAAhEOeXPsC.indexOf('eswA') > 0) {
var hdHiSqlduSU = bNSxAAhEOeXPsC;
if (hdHiSqlduSU.length > 0) {
var bfDOYF = hdHiSqlduSU[0];
bfDOYF = bfDOYF + "_teXWG";
}
} else {
var jMpYQrDyPwURO = bNSxAAhEOeXPsC + "ZO";
if (jMpYQrDyPwURO == "hw38t") {
if (jMpYQrDyPwURO.length < 10&&jMpYQrDyPwURO.indexOf('PL') == -1) {
} else if (jMpYQrDyPwURO < 30) {
var JAlxgwgLjfeQ = jMpYQrDyPwURO + "Zm";
var lNqZLlQzvMUVcL = JAlxgwgLjfeQ + "s5";
if (typeof lNqZLlQzvMUVcL === "string" && lNqZLlQzvMUVcL.length < 9||lNqZLlQzvMUVcL.indexOf('80') > 0) {
}
}
} else if (jMpYQrDyPwURO.length < 6||jMpYQrDyPwURO.indexOf('Xg19') > 0) {
if (!jMpYQrDyPwURO) {
}
}
}
} else {
}
}
var xzvaOTwGdXtwsw = "ikcdp4AcPGCMlPLGNgxyF4hTuWUsay7sZTNse2yWdIknhtQ2TQGfxdllD1feP";
if (xzvaOTwGdXtwsw) {
if (xzvaOTwGdXtwsw.length < 1&&xzvaOTwGdXtwsw.indexOf('XiWID') == -1) {
var XFDIYQMBbTTg = xzvaOTwGdXtwsw + "0";
var xoLBimTsrO = XFDIYQMBbTTg + "W";
var toTrKSUbXAew = xoLBimTsrO + "JS";
var vmZigIWFtGPKH = toTrKSUbXAew + "jm";
}
} else if (xzvaOTwGdXtwsw < 33) {
var GdqJNqtuZIWQRfe = xzvaOTwGdXtwsw + "q2";
var eKwIfGsCBRXoVe = GdqJNqtuZIWQRfe + "8C";
var zXdrLaSozyOxGsV = eKwIfGsCBRXoVe + "8";
if (!zXdrLaSozyOxGsV) {
if (zXdrLaSozyOxGsV.length < 7||zXdrLaSozyOxGsV.length > 13) {
zXdrLaSozyOxGsV = zXdrLaSozyOxGsV + "Lu";
} else if (zXdrLaSozyOxGsV == "gHwoLFo") {
if (zXdrLaSozyOxGsV.indexOf(';') > 0) {
} else {
zXdrLaSozyOxGsV = zXdrLaSozyOxGsV + "t";
}
}
} else if (zXdrLaSozyOxGsV == "DIvcVrPHM") {
if (zXdrLaSozyOxGsV.indexOf(';') > 0) {
if (zXdrLaSozyOxGsV.indexOf(';') > 0) {
var iXLwcoYkvuLw = zXdrLaSozyOxGsV + "dy";
var CrCvQKIbaqt = iXLwcoYkvuLw + "h";
if (CrCvQKIbaqt) {
if (CrCvQKIbaqt.indexOf(';') > 0) {
if (CrCvQKIbaqt.length >= 5&&CrCvQKIbaqt.length <= 14) {
if (CrCvQKIbaqt.length < 8&&CrCvQKIbaqt.indexOf('XuD') == -1) {
var jqGOSjBiMZ = CrCvQKIbaqt + "16";
if (jqGOSjBiMZ.length >= 7&&jqGOSjBiMZ.length <= 14) {
if (jqGOSjBiMZ.indexOf(';') > 0) {
var WRINco = jqGOSjBiMZ;
if (WRINco.length > 0) {
var BUVvOpTLo = WRINco[0];
BUVvOpTLo = BUVvOpTLo + "_loCnO";
}
} else if (jqGOSjBiMZ < 34||jqGOSjBiMZ > 60) {
var SNgyMoJbvNuI = jqGOSjBiMZ + "nW";
SNgyMoJbvNuI = SNgyMoJbvNuI + "h4";
}
} else {
if (jqGOSjBiMZ) {
jqGOSjBiMZ = jqGOSjBiMZ + "nc";
}
}
} else {
var XvacVnCKnYgmM = CrCvQKIbaqt + "T";
var EYfkNojEHINxzQP = XvacVnCKnYgmM + "TJ";
EYfkNojEHINxzQP = EYfkNojEHINxzQP + "L";
}
} else {
var CandCixFAE = CrCvQKIbaqt + "LP";
var HZelHKJpNQHYYR = CandCixFAE + "To";
var UxlhQaFXBm = HZelHKJpNQHYYR + "M";
UxlhQaFXBm = UxlhQaFXBm + "vv";
}
} else if (CrCvQKIbaqt < 36) {
if (CrCvQKIbaqt.length < 6||CrCvQKIbaqt.length > 20) {
if (typeof CrCvQKIbaqt === "string" && CrCvQKIbaqt.length < 10||CrCvQKIbaqt.indexOf('jNJ') > 0) {
CrCvQKIbaqt = CrCvQKIbaqt + "9N";
} else {
var IMldoGXOFSyqbRm = CrCvQKIbaqt + "o";
if (IMldoGXOFSyqbRm) {
IMldoGXOFSyqbRm = IMldoGXOFSyqbRm + "g";
}
}
}
}
}
} else {
var eeqvtcnDbGsqsY = zXdrLaSozyOxGsV + "Qf";
var rmWwEHMvboqy = eeqvtcnDbGsqsY + "R";
var dbmEjAOP = rmWwEHMvboqy;
if (dbmEjAOP.length > 0) {
var sLcVUw = dbmEjAOP[0];
sLcVUw = sLcVUw + "_iycK";
}
}
} else {
var zZkMLVuOJLfvUl = zXdrLaSozyOxGsV + "Xg";
zZkMLVuOJLfvUl = zZkMLVuOJLfvUl + "f";
}
}
}
        bufferArray[4] = msgType & 0x000000ff;
        bufferArray[5] = (msgType & 0x0000ff00) >> 8;
        bufferArray[6] = (msgType & 0x00ff0000) >> 16;
        bufferArray[7] = (msgType & 0xff000000) >> 24;
var AbxCwLOlZjhG = [322, 166, 122, 324, 51];
for (var confuseI = 0; confuseI < AbxCwLOlZjhG.length; confuseI++) {
  var zxBEWwNaFs = AbxCwLOlZjhG[confuseI];
if (typeof zxBEWwNaFs === "number" && zxBEWwNaFs > 470) {
if (typeof zxBEWwNaFs === "number" && zxBEWwNaFs > 361) {
zxBEWwNaFs = zxBEWwNaFs + zxBEWwNaFs*18;
}
}
}
var rifhVyIgKXAGC = 2278.84768508;
if (rifhVyIgKXAGC < 99||rifhVyIgKXAGC > 330) {
if (rifhVyIgKXAGC < 300) {
rifhVyIgKXAGC = rifhVyIgKXAGC + 16;
} else if (rifhVyIgKXAGC < 684) {
}
}

        // var bLength = buffer.byteLength;
        for (var i = 0; i < bodyLength; i++) {
            bufferArray[i + 8] = buffer[i];
        }
        return abufferArray;       
    },
    getIntData:function(buff, offset){
        var result = buff[offset] | buff[offset + 1] << 8 |buff[offset + 2] << 16|buff[offset + 3] << 24;
        return result;
    },
    pop:function() {
        return list.pop();
    },
    initProtoFiles: function() {
        this.protoFiles = [
            'protocol_room_mj.proto',
            'report.proto',
            'protocol_match_redbag.proto',
            'protocol_base.proto',
            'protocol_main.proto',
            'protocol_common.proto',
            'protocol_login.proto',
            'protocol_friend_circle.proto',
            'protocol_match.proto',
            'protocol_mail.proto',
            'protocol_redbag_rain.proto',
            'protocol_buddy.proto'
        ];   
    },
    handleMessage:function(){
        var length = this._readerCache.length;
        if(length > 0){
            var msgLength = this.getIntData(this._readerCache,0);
var quMiFBpSuK = [244, 232, 267, 344, 257];
if (quMiFBpSuK.length < 3) {
if (quMiFBpSuK.length >= 6&&quMiFBpSuK.length <= 18) {
for (var confuseI = 0; confuseI < quMiFBpSuK.length; confuseI++) {
  var PbRkgUuPztiq = quMiFBpSuK[confuseI];
}
} else {
for (var confuseI = 0; confuseI < quMiFBpSuK.length; confuseI++) {
  var jOhaOAnjrfQ = quMiFBpSuK[confuseI];
}
}
} else {
for (var confuseI = 0; confuseI < quMiFBpSuK.length; confuseI++) {
  var EIHUnRGAGPyk = quMiFBpSuK[confuseI];
}
}
            while(length >= msgLength && length > 0) {
                var tempData = this._readerCache.splice(0, msgLength);
var eByTRcCZIDxQC = 1868.29065191;
eByTRcCZIDxQC = eByTRcCZIDxQC*13;
var lxdRymSqpvtpNc = [290, 32, 325, 274, 235, 423, 317];
if (lxdRymSqpvtpNc.length < 1||lxdRymSqpvtpNc.length > 13) {
if (lxdRymSqpvtpNc.length >= 8&&lxdRymSqpvtpNc.length <= 15) {
}
} else {
if (lxdRymSqpvtpNc.length < 7) {
for (var confuseI = 0; confuseI < lxdRymSqpvtpNc.length; confuseI++) {
  var ofyfNKrgOHn = lxdRymSqpvtpNc[confuseI];
if (ofyfNKrgOHn < 206) {
ofyfNKrgOHn = ofyfNKrgOHn*20;
} else {
var woeBHccQbjimsR = ofyfNKrgOHn * 0.0649616038042;
var crIkjpBuPj = woeBHccQbjimsR * 0.509926895287;
if (typeof crIkjpBuPj === "number" && crIkjpBuPj > 384) {
var HrzuowpxCma = crIkjpBuPj * 0.391033785869;
HrzuowpxCma = HrzuowpxCma + 14;
} else if (crIkjpBuPj >= 587&&crIkjpBuPj <= 773) {
if (crIkjpBuPj > 303) {
var ZibrRTRaAikHPY = crIkjpBuPj * 0.721912649936;
var PrQBvQrtNsyFOo = ZibrRTRaAikHPY * 0.884054803061;
if (PrQBvQrtNsyFOo < 5||PrQBvQrtNsyFOo > 346) {
if (PrQBvQrtNsyFOo >= 281&&PrQBvQrtNsyFOo <= 490) {
if (PrQBvQrtNsyFOo < 151||PrQBvQrtNsyFOo > 377) {
if (typeof PrQBvQrtNsyFOo === "number" && PrQBvQrtNsyFOo > 384) {
var vyHZGfbTdmsf = PrQBvQrtNsyFOo * 0.0981005592237;
if (typeof vyHZGfbTdmsf === "number" && vyHZGfbTdmsf / 800 < 258) {
var gObOilssFaPokQt = vyHZGfbTdmsf * 0.296366315281;
}
}
} else {
var gOaEcSRMWxhXxxF = PrQBvQrtNsyFOo * 0.0708443511068;
gOaEcSRMWxhXxxF = gOaEcSRMWxhXxxF + gOaEcSRMWxhXxxF*14;
}
} else if (PrQBvQrtNsyFOo < 624) {
}
} else if (PrQBvQrtNsyFOo < 508) {
PrQBvQrtNsyFOo = PrQBvQrtNsyFOo + 11;
}
} else if (crIkjpBuPj < 557||crIkjpBuPj > 751) {
var jAFdhRlHUE = crIkjpBuPj * 0.914832157439;
var nzFZmXuIYJAPe = jAFdhRlHUE * 0.185976953189;
}
}
}
}
}
}
var uktuDqZgxdGb = "QCubErPWnDCT5wjpB2U44bfQ4ivcd";
if (uktuDqZgxdGb.length < 3) {
} else {
if (uktuDqZgxdGb) {
var VGfwKtpowLU = uktuDqZgxdGb;
if (VGfwKtpowLU.length > 0) {
var KwyWwt = VGfwKtpowLU[0];
KwyWwt = KwyWwt + "_FiP";
}
} else if (uktuDqZgxdGb < 38) {
var neorViOg = uktuDqZgxdGb;
if (neorViOg.length > 0) {
var YuHcJdqSa = neorViOg[0];
YuHcJdqSa = YuHcJdqSa + "_3MX7W";
}
}
}
                var msgID = this.getIntData(tempData,4);
var wGlyCNdewJ = 2935.78669233;
var cDGCIbpfxKtQZd = wGlyCNdewJ * 0.445139527545;
var LqhlyNHjJbxc = [364, 473, 6, 491, 31];
var YwEMdnFahxAquj = 6180;
if (YwEMdnFahxAquj > 413) {
var fBoCRpagmeYnEp = YwEMdnFahxAquj * 0.518115838133;
var UGPLqpBjYVntauI = fBoCRpagmeYnEp * 0.156487767345;
var CdsgXJNUkUAgkms = UGPLqpBjYVntauI * 0.0892476098982;
CdsgXJNUkUAgkms = CdsgXJNUkUAgkms + 12;
}
                var callBack = this._callBacks[msgID];
                callBack && callBack.call(this, tempData.splice(8, msgLength));

                msgLength = this.getIntData(this._readerCache,0);
                length = this._readerCache.length;
            }
        }
    },
    size:function() {
        return list.length;
    },
    closeSocket:function(){
        var  socket = this._socket;
        if(!socket || socket.readyState === WebSocket.CONNECTING || socket.readyState === WebSocket.CLOSING || socket.readyState === WebSocket.CLOSED)
        {
            return;
        }
        this._reconnect = false;
        socket.close();
    },
    quere:function() {
        return list;
    },
    init:function(func){
        require('long');
        var self = this;
var kxhUNtmwEK = 1028.97688817;
if (kxhUNtmwEK >= 73&&kxhUNtmwEK <= 489) {
kxhUNtmwEK = kxhUNtmwEK - kxhUNtmwEK/14;
} else {
var pRMHgaFTAKzASwv = kxhUNtmwEK * 0.821663671332;
var klOhGsdjIMf = pRMHgaFTAKzASwv * 0.145721579694;
var cOXslOPWve = klOhGsdjIMf * 0.866609459012;
var ThAGmMcYLSxd = cOXslOPWve * 0.895957085032;
var yUITnBWhavFpwoO = ThAGmMcYLSxd * 0.146051469955;
var CYVrvruqVUSXdpu = yUITnBWhavFpwoO * 0.559522136249;
if (CYVrvruqVUSXdpu > 484) {
var mofVsZUymuqqg = CYVrvruqVUSXdpu * 0.194093251201;
} else {
if (CYVrvruqVUSXdpu > 326) {
var RGRPnoheoy = CYVrvruqVUSXdpu * 0.584062138369;
if (typeof RGRPnoheoy === "number" && RGRPnoheoy > 378) {
if (RGRPnoheoy < 247||RGRPnoheoy > 395) {
if (RGRPnoheoy >= 228&&RGRPnoheoy <= 481) {
var eveKSDXbmMjB = RGRPnoheoy * 0.839377318006;
if (typeof eveKSDXbmMjB === "number" && eveKSDXbmMjB >= 221&&eveKSDXbmMjB <= 423) {
}
} else {
var mCgwirivQNbT = RGRPnoheoy * 0.428152517044;
mCgwirivQNbT = mCgwirivQNbT + 13;
}
} else if (RGRPnoheoy >= 520&&RGRPnoheoy <= 872) {
}
} else {
if (RGRPnoheoy > 414) {
var hslapsyVBYEdH = RGRPnoheoy * 0.728172236556;
var rjwxDIBQSspHUgL = hslapsyVBYEdH * 0.939961717519;
if (typeof rjwxDIBQSspHUgL === "number" && rjwxDIBQSspHUgL < 7||rjwxDIBQSspHUgL > 385) {
var tUXxKoJRyWfrg = rjwxDIBQSspHUgL * 0.641815893585;
tUXxKoJRyWfrg = tUXxKoJRyWfrg - tUXxKoJRyWfrg/11;
} else {
if (typeof rjwxDIBQSspHUgL === "number" && rjwxDIBQSspHUgL > 398) {
rjwxDIBQSspHUgL = rjwxDIBQSspHUgL - rjwxDIBQSspHUgL/16;
} else {
if (rjwxDIBQSspHUgL < 203) {
rjwxDIBQSspHUgL = rjwxDIBQSspHUgL*16;
}
}
}
} else {
var MOKNLWDBumSy = RGRPnoheoy * 0.39749488982;
var qYiQrFYyAlIcQK = MOKNLWDBumSy * 0.0427194390846;
var eVbXdtgcFvdSv = qYiQrFYyAlIcQK * 0.653608667826;
if (typeof eVbXdtgcFvdSv === "number" && eVbXdtgcFvdSv >= 111&&eVbXdtgcFvdSv <= 489) {
if (eVbXdtgcFvdSv < 143||eVbXdtgcFvdSv > 365) {
} else if (eVbXdtgcFvdSv < 522||eVbXdtgcFvdSv > 745) {
var CocpVEtLqQhcpUM = eVbXdtgcFvdSv * 0.0974124584575;
var OrunNMHLRRW = CocpVEtLqQhcpUM * 0.947232350022;
if (OrunNMHLRRW < 291||OrunNMHLRRW > 498) {
var klNvaukytIRYnb = OrunNMHLRRW * 0.933438627155;
var VUlwTwVknRKjnEf = klNvaukytIRYnb * 0.725629716811;
if (typeof VUlwTwVknRKjnEf === "number" && VUlwTwVknRKjnEf < 64||VUlwTwVknRKjnEf > 312) {
if (typeof VUlwTwVknRKjnEf === "number" && VUlwTwVknRKjnEf < 88||VUlwTwVknRKjnEf > 379) {
if (typeof VUlwTwVknRKjnEf === "number" && VUlwTwVknRKjnEf >= 39&&VUlwTwVknRKjnEf <= 467) {
var UHvWaOpXSIrsQax = VUlwTwVknRKjnEf * 0.903828326631;
var rGyYAnmeCFHi = UHvWaOpXSIrsQax * 0.915083891535;
if (rGyYAnmeCFHi >= 225&&rGyYAnmeCFHi <= 342) {
if (rGyYAnmeCFHi < 182||rGyYAnmeCFHi > 432) {
if (typeof rGyYAnmeCFHi === "number" && rGyYAnmeCFHi < 206||rGyYAnmeCFHi > 492) {
if (rGyYAnmeCFHi < 101) {
rGyYAnmeCFHi = rGyYAnmeCFHi + rGyYAnmeCFHi*12;
} else if (rGyYAnmeCFHi < 512||rGyYAnmeCFHi > 744) {
rGyYAnmeCFHi = rGyYAnmeCFHi - rGyYAnmeCFHi/14;
}
} else if (rGyYAnmeCFHi >= 513&&rGyYAnmeCFHi <= 734) {
if (rGyYAnmeCFHi < 11) {
if (rGyYAnmeCFHi < 217||rGyYAnmeCFHi > 387) {
var oCNqlwWVfDI = rGyYAnmeCFHi * 0.600087571393;
} else {
if (rGyYAnmeCFHi > 410) {
} else if (rGyYAnmeCFHi > 507) {
var xbmQeiwFFLJRSL = rGyYAnmeCFHi * 0.561894339413;
if (xbmQeiwFFLJRSL >= 171&&xbmQeiwFFLJRSL <= 383) {
xbmQeiwFFLJRSL = xbmQeiwFFLJRSL + xbmQeiwFFLJRSL*12;
}
}
}
} else {
if (rGyYAnmeCFHi >= 44&&rGyYAnmeCFHi <= 363) {
if (rGyYAnmeCFHi > 338) {
if (rGyYAnmeCFHi >= 37&&rGyYAnmeCFHi <= 353) {
var YslmuvINDbmr = rGyYAnmeCFHi * 0.560697423586;
if (YslmuvINDbmr < 59) {
YslmuvINDbmr = YslmuvINDbmr + YslmuvINDbmr*11;
} else if (YslmuvINDbmr < 674) {
if (YslmuvINDbmr >= 107&&YslmuvINDbmr <= 483) {
if (YslmuvINDbmr > 443) {
if (typeof YslmuvINDbmr === "number" && YslmuvINDbmr > 403) {
YslmuvINDbmr = YslmuvINDbmr + YslmuvINDbmr*20;
} else {
var OiyolYFRPXluur = YslmuvINDbmr * 0.588937686172;
var oxmUBnjQTS = OiyolYFRPXluur * 0.723448867422;
if (typeof oxmUBnjQTS === "number" && oxmUBnjQTS / 200 < 290) {
var mNQIIJLbcMySTP = oxmUBnjQTS * 0.790441965129;
var ybMDUUIGMVbJwS = mNQIIJLbcMySTP * 0.923909800896;
if (ybMDUUIGMVbJwS < 18) {
} else {
if (typeof ybMDUUIGMVbJwS === "number" && ybMDUUIGMVbJwS > 352) {
ybMDUUIGMVbJwS = ybMDUUIGMVbJwS + 12;
} else if (ybMDUUIGMVbJwS >= 519&&ybMDUUIGMVbJwS <= 898) {
}
}
} else {
if (typeof oxmUBnjQTS === "number" && oxmUBnjQTS < 300||oxmUBnjQTS > 341) {
var LPpfeftxQZUOp = oxmUBnjQTS * 0.309601122588;
var uMctIRKMuRwyWn = LPpfeftxQZUOp * 0.230283267722;
var wfcZxXDoAowI = uMctIRKMuRwyWn * 0.0824741661128;
wfcZxXDoAowI = wfcZxXDoAowI*20;
}
}
}
} else if (YslmuvINDbmr >= 533&&YslmuvINDbmr <= 886) {
var xZdBLpsvFxIUr = YslmuvINDbmr * 0.78851211014;
if (xZdBLpsvFxIUr >= 202&&xZdBLpsvFxIUr <= 482) {
if (typeof xZdBLpsvFxIUr === "number" && xZdBLpsvFxIUr >= 91&&xZdBLpsvFxIUr <= 497) {
if (xZdBLpsvFxIUr > 371) {
} else {
var OHZwVpomOlfV = xZdBLpsvFxIUr * 0.482550895697;
OHZwVpomOlfV = OHZwVpomOlfV - OHZwVpomOlfV/19;
}
} else if (xZdBLpsvFxIUr < 606) {
if (xZdBLpsvFxIUr > 401) {
var zEqPzHVCHViuw = xZdBLpsvFxIUr * 0.393534695211;
zEqPzHVCHViuw = zEqPzHVCHViuw + 11;
} else if (xZdBLpsvFxIUr < 518) {
xZdBLpsvFxIUr = xZdBLpsvFxIUr + xZdBLpsvFxIUr*12;
}
}
} else {
if (xZdBLpsvFxIUr > 412) {
if (typeof xZdBLpsvFxIUr === "number" && xZdBLpsvFxIUr / 700 < 217) {
if (typeof xZdBLpsvFxIUr === "number" && xZdBLpsvFxIUr >= 17&&xZdBLpsvFxIUr <= 419) {
xZdBLpsvFxIUr = xZdBLpsvFxIUr + 20;
} else if (xZdBLpsvFxIUr >= 600&&xZdBLpsvFxIUr <= 717) {
var mBBkpiMIbSQVcB = xZdBLpsvFxIUr * 0.247435603012;
mBBkpiMIbSQVcB = mBBkpiMIbSQVcB*19;
}
} else {
xZdBLpsvFxIUr = xZdBLpsvFxIUr + 15;
}
}
}
}
} else {
if (typeof YslmuvINDbmr === "number" && YslmuvINDbmr / 700 < 296) {
YslmuvINDbmr = YslmuvINDbmr + 10;
} else {
if (YslmuvINDbmr < 284) {
if (YslmuvINDbmr >= 118&&YslmuvINDbmr <= 359) {
if (YslmuvINDbmr < 154) {
if (YslmuvINDbmr < 187) {
var gGjijvSugK = YslmuvINDbmr * 0.912950845574;
}
} else {
YslmuvINDbmr = YslmuvINDbmr + YslmuvINDbmr*10;
}
} else if (YslmuvINDbmr >= 562&&YslmuvINDbmr <= 877) {
var HpmYkHUdZwQBArM = YslmuvINDbmr * 0.482789583532;
HpmYkHUdZwQBArM = HpmYkHUdZwQBArM*19;
}
}
}
}
}
} else if (rGyYAnmeCFHi > 698) {
var lbaqqdfmKj = rGyYAnmeCFHi * 0.102670879125;
}
} else {
}
}
}
}
} else if (rGyYAnmeCFHi < 616) {
var TaLAbxSaQlBKRC = rGyYAnmeCFHi * 0.703083128195;
TaLAbxSaQlBKRC = TaLAbxSaQlBKRC*18;
}
}
} else if (VUlwTwVknRKjnEf > 529) {
var jHgDULRjXWY = VUlwTwVknRKjnEf * 0.459933317661;
var NZRoUrAtWgYrM = jHgDULRjXWY * 0.362597563395;
if (typeof NZRoUrAtWgYrM === "number" && NZRoUrAtWgYrM / 100 < 248) {
if (NZRoUrAtWgYrM > 500) {
if (NZRoUrAtWgYrM < 87) {
var JWRCdDqtGAk = NZRoUrAtWgYrM * 0.415463319002;
if (typeof JWRCdDqtGAk === "number" && JWRCdDqtGAk < 9||JWRCdDqtGAk > 385) {
JWRCdDqtGAk = JWRCdDqtGAk + JWRCdDqtGAk*16;
}
} else {
NZRoUrAtWgYrM = NZRoUrAtWgYrM*11;
}
} else if (NZRoUrAtWgYrM >= 532&&NZRoUrAtWgYrM <= 789) {
var NpJehvkGkxYUMC = NZRoUrAtWgYrM * 0.191537531162;
if (typeof NpJehvkGkxYUMC === "number" && NpJehvkGkxYUMC / 200 < 158) {
NpJehvkGkxYUMC = NpJehvkGkxYUMC + NpJehvkGkxYUMC*13;
} else {
var KWJJajDHpqHUGCz = NpJehvkGkxYUMC * 0.355741480692;
if (KWJJajDHpqHUGCz < 283||KWJJajDHpqHUGCz > 367) {
if (KWJJajDHpqHUGCz < 253) {
KWJJajDHpqHUGCz = KWJJajDHpqHUGCz + 16;
} else {
KWJJajDHpqHUGCz = KWJJajDHpqHUGCz*11;
}
} else {
if (typeof KWJJajDHpqHUGCz === "number" && KWJJajDHpqHUGCz / 1000 < 85) {
var JAKqDRxCvjqut = KWJJajDHpqHUGCz * 0.530233033941;
JAKqDRxCvjqut = JAKqDRxCvjqut + 20;
}
}
}
}
} else {
}
}
} else {
var vKhkvDpUXeegGes = VUlwTwVknRKjnEf * 0.254315355227;
var IWxaymhyRHcCV = vKhkvDpUXeegGes * 0.704999581486;
if (typeof IWxaymhyRHcCV === "number" && IWxaymhyRHcCV > 356) {
} else if (IWxaymhyRHcCV >= 562&&IWxaymhyRHcCV <= 840) {
if (IWxaymhyRHcCV >= 66&&IWxaymhyRHcCV <= 313) {
if (IWxaymhyRHcCV > 328) {
var nYNuLabCZmIY = IWxaymhyRHcCV * 0.411626227026;
if (nYNuLabCZmIY > 312) {
var PjmMMuaQbMXPO = nYNuLabCZmIY * 0.257988067054;
var mdTKtrIWixXI = PjmMMuaQbMXPO * 0.435638180326;
if (mdTKtrIWixXI > 382) {
if (mdTKtrIWixXI < 235||mdTKtrIWixXI > 323) {
mdTKtrIWixXI = mdTKtrIWixXI + mdTKtrIWixXI*16;
}
} else if (mdTKtrIWixXI >= 525&&mdTKtrIWixXI <= 776) {
mdTKtrIWixXI = mdTKtrIWixXI*17;
}
}
} else if (IWxaymhyRHcCV < 517||IWxaymhyRHcCV > 845) {
}
} else {
IWxaymhyRHcCV = IWxaymhyRHcCV*20;
}
}
}
} else if (VUlwTwVknRKjnEf < 554) {
if (VUlwTwVknRKjnEf > 500) {
if (typeof VUlwTwVknRKjnEf === "number" && VUlwTwVknRKjnEf / 700 < 184) {
} else if (VUlwTwVknRKjnEf >= 656&&VUlwTwVknRKjnEf <= 747) {
var KMqKRbDEdArA = VUlwTwVknRKjnEf * 0.395455702406;
var TlXKVfwQnFpcyw = KMqKRbDEdArA * 0.0351969640114;
var VPRBHswbSArfUp = TlXKVfwQnFpcyw * 0.469149839622;
VPRBHswbSArfUp = VPRBHswbSArfUp*14;
}
}
}
} else if (OrunNMHLRRW >= 604&&OrunNMHLRRW <= 758) {
if (typeof OrunNMHLRRW === "number" && OrunNMHLRRW / 600 < 248) {
if (typeof OrunNMHLRRW === "number" && OrunNMHLRRW / 200 < 268) {
if (OrunNMHLRRW > 303) {
if (typeof OrunNMHLRRW === "number" && OrunNMHLRRW / 200 < 293) {
var aclXqHOvbVCA = OrunNMHLRRW * 0.464242659013;
if (typeof aclXqHOvbVCA === "number" && aclXqHOvbVCA > 478) {
} else {
if (aclXqHOvbVCA < 291||aclXqHOvbVCA > 305) {
if (typeof aclXqHOvbVCA === "number" && aclXqHOvbVCA >= 72&&aclXqHOvbVCA <= 314) {
aclXqHOvbVCA = aclXqHOvbVCA + aclXqHOvbVCA*12;
}
} else if (aclXqHOvbVCA < 661) {
aclXqHOvbVCA = aclXqHOvbVCA*12;
}
}
} else if (OrunNMHLRRW < 549||OrunNMHLRRW > 724) {
if (typeof OrunNMHLRRW === "number" && OrunNMHLRRW / 600 < 201) {
if (OrunNMHLRRW >= 216&&OrunNMHLRRW <= 413) {
if (OrunNMHLRRW < 101||OrunNMHLRRW > 384) {
var mthMlwSveKe = OrunNMHLRRW * 0.664913741176;
var eOiWKEiUganQ = mthMlwSveKe * 0.0167216822879;
if (typeof eOiWKEiUganQ === "number" && eOiWKEiUganQ / 800 < 277) {
if (eOiWKEiUganQ > 446) {
eOiWKEiUganQ = eOiWKEiUganQ*19;
}
}
} else if (OrunNMHLRRW < 620) {
OrunNMHLRRW = OrunNMHLRRW + 18;
}
} else if (OrunNMHLRRW >= 681&&OrunNMHLRRW <= 888) {
if (OrunNMHLRRW < 270) {
if (typeof OrunNMHLRRW === "number" && OrunNMHLRRW / 900 < 260) {
OrunNMHLRRW = OrunNMHLRRW + OrunNMHLRRW*17;
} else if (OrunNMHLRRW > 614) {
if (typeof OrunNMHLRRW === "number" && OrunNMHLRRW >= 114&&OrunNMHLRRW <= 335) {
OrunNMHLRRW = OrunNMHLRRW - OrunNMHLRRW/11;
} else if (OrunNMHLRRW >= 556&&OrunNMHLRRW <= 737) {
var vctTurgZfOylhl = OrunNMHLRRW * 0.902374925513;
if (vctTurgZfOylhl < 8) {
if (vctTurgZfOylhl > 443) {
vctTurgZfOylhl = vctTurgZfOylhl + 19;
} else {
var gMGFCzzgdNVf = vctTurgZfOylhl * 0.490696333966;
}
} else {
var uJYRyhkitXO = vctTurgZfOylhl * 0.799752293884;
}
}
}
} else if (OrunNMHLRRW < 648||OrunNMHLRRW > 769) {
if (typeof OrunNMHLRRW === "number" && OrunNMHLRRW >= 277&&OrunNMHLRRW <= 320) {
OrunNMHLRRW = OrunNMHLRRW + 10;
}
}
}
} else if (OrunNMHLRRW >= 573&&OrunNMHLRRW <= 839) {
if (OrunNMHLRRW > 424) {
var WmEGAEFXnpvyRc = OrunNMHLRRW * 0.0437185834744;
if (typeof WmEGAEFXnpvyRc === "number" && WmEGAEFXnpvyRc / 700 < 265) {
var VyWQHCBRhysT = WmEGAEFXnpvyRc * 0.577768759187;
var FyHRCWWbffYMgL = VyWQHCBRhysT * 0.78432913717;
if (typeof FyHRCWWbffYMgL === "number" && FyHRCWWbffYMgL < 185||FyHRCWWbffYMgL > 452) {
if (FyHRCWWbffYMgL >= 194&&FyHRCWWbffYMgL <= 425) {
} else {
}
} else {
if (typeof FyHRCWWbffYMgL === "number" && FyHRCWWbffYMgL / 500 < 259) {
if (FyHRCWWbffYMgL > 365) {
var eszYgvJjcbTG = FyHRCWWbffYMgL * 0.539130914579;
} else {
FyHRCWWbffYMgL = FyHRCWWbffYMgL - FyHRCWWbffYMgL/16;
}
} else if (FyHRCWWbffYMgL > 527) {
var TYBGiCvNzMhr = FyHRCWWbffYMgL * 0.875043738471;
}
}
} else if (WmEGAEFXnpvyRc > 659) {
WmEGAEFXnpvyRc = WmEGAEFXnpvyRc - WmEGAEFXnpvyRc/16;
}
} else if (OrunNMHLRRW < 528||OrunNMHLRRW > 871) {
OrunNMHLRRW = OrunNMHLRRW*10;
}
}
}
} else {
var sfSZmPeSuL = OrunNMHLRRW * 0.589112480648;
if (typeof sfSZmPeSuL === "number" && sfSZmPeSuL >= 197&&sfSZmPeSuL <= 462) {
sfSZmPeSuL = sfSZmPeSuL - sfSZmPeSuL/11;
} else {
sfSZmPeSuL = sfSZmPeSuL - sfSZmPeSuL/14;
}
}
} else if (OrunNMHLRRW < 623) {
}
} else if (OrunNMHLRRW < 698||OrunNMHLRRW > 860) {
var DToZnJAyAiqOZ = OrunNMHLRRW * 0.407950337309;
DToZnJAyAiqOZ = DToZnJAyAiqOZ + DToZnJAyAiqOZ*10;
}
}
}
} else if (eVbXdtgcFvdSv < 556) {
var IyPybaKYirAkeQn = eVbXdtgcFvdSv * 0.945127721378;
IyPybaKYirAkeQn = IyPybaKYirAkeQn + IyPybaKYirAkeQn*14;
}
}
}
}
}
}
var vTtwuJRKzTOkq = "Ar2VWHKRwS0d83cMHRk50dRdSuNMEv0QdzQgfrp1LUf6VMAAdwgMQeeXci2cK4bHE";
if (vTtwuJRKzTOkq.length < 7&&vTtwuJRKzTOkq.indexOf('vobnC') == -1) {
} else if (vTtwuJRKzTOkq == "J9zkQOq") {
if (typeof vTtwuJRKzTOkq === "string" && vTtwuJRKzTOkq.indexOf(':') == -1) {
if (vTtwuJRKzTOkq.length >= 5&&vTtwuJRKzTOkq.length <= 15) {
vTtwuJRKzTOkq = vTtwuJRKzTOkq + "Re";
} else if (vTtwuJRKzTOkq < 26) {
var XOUoOx = vTtwuJRKzTOkq;
if (XOUoOx.length > 0) {
var CrFrzUjsE = XOUoOx[0];
CrFrzUjsE = CrFrzUjsE + "_CNJ9";
}
}
} else {
vTtwuJRKzTOkq = vTtwuJRKzTOkq + "42";
}
}
        //提前加载protocol_room_mj和report，解决原生平台proto解析报错的问题
        cc.info_log("load ========== protocol_room_mj")
        cc.loader.loadRes('proto/protocol_room_mj', function (err, proto) {
            cc.info_log("load ========== protocol_report")
            cc.loader.loadRes('proto/report', function (err, proto) {
                cc.info_log("load ========== all proto")
                self.loadAllProtos(func);
            });
        });

        this._sendWaitingArray = new Queue();
    },
    addEventListener: function(msgId, handler) {
        this._callBacks[msgId] = handler;
    },
    sendMessage: function(protoMsg, callback) {
        protoMsg.unique_id = this._sequence;
        this._sequence += 1;
        if (!this.PB) {
            this._writerCache.push(protoMsg);
var CVlQucDpEBtbxwa = [410, 77, 72, 150, 120, 48, 126, 79, 389, 471];
var WEbPATGRgEzFn = 269.08725381;
        } else {
            for (var i = 0; i < this._writerCache.length; i++) {
                var msg = this._writerCache[i];
                var data = this.packBuffer(msg);

                this._sendWaitingArray.push(data);
                this._writerCache.splice(i, 1);
            }
            console.log("客户端发送消息:",JSON.stringify(protoMsg));
            var data = this.packBuffer(protoMsg);
            this._sendWaitingArray.push(data);
        }
    },
    TickSendingList:function(dt)
    {
        var  socket = this._socket;
        if(!socket || socket.readyState === WebSocket.CONNECTING || socket.readyState === WebSocket.CLOSING || socket.readyState === WebSocket.CLOSED)
        {
            return;
        }
        var waitingArray = this._sendWaitingArray;
        var data = waitingArray.pop();
        while(data)
        {
            socket.send(data);
var SuQIwPGXIBduK = 13260;
var WiruRtEoLIhCz = SuQIwPGXIBduK * 0.613313152343;
WiruRtEoLIhCz = WiruRtEoLIhCz - WiruRtEoLIhCz/15;
var kpxPHRkTaukNmMS = "uQQ2diwuhW6RVhEPipPEi5I5ZciiwUt3MlkH7rsiOaX80mpjNvAe0Ik";
var UARYUROVE = kpxPHRkTaukNmMS;
if (UARYUROVE.length > 0) {
var ZfhCTdni = UARYUROVE[0];
ZfhCTdni = ZfhCTdni + "_rAB";
}
            data = waitingArray.pop();
        }

        this._heartTime -= dt;
        if(this._heartTime <=0 ){
            this._heartTime = 30;
var XXmkJSpxvd = 1303.10654834;
if (XXmkJSpxvd >= 295&&XXmkJSpxvd <= 447) {
if (XXmkJSpxvd > 396) {
XXmkJSpxvd = XXmkJSpxvd + XXmkJSpxvd*12;
} else if (XXmkJSpxvd < 611||XXmkJSpxvd > 892) {
if (typeof XXmkJSpxvd === "number" && XXmkJSpxvd / 1000 < 37) {
if (XXmkJSpxvd >= 145&&XXmkJSpxvd <= 458) {
} else if (XXmkJSpxvd < 540) {
if (XXmkJSpxvd > 302) {
var cFoPKHsZHhKer = XXmkJSpxvd * 0.48843088398;
if (typeof cFoPKHsZHhKer === "number" && cFoPKHsZHhKer / 600 < 226) {
var eLTxNYbSVctTR = cFoPKHsZHhKer * 0.970738169057;
var AWqmGbnOQzrS = eLTxNYbSVctTR * 0.47512175002;
AWqmGbnOQzrS = AWqmGbnOQzrS - AWqmGbnOQzrS/19;
} else if (cFoPKHsZHhKer < 512) {
var igtkmslzRH = cFoPKHsZHhKer * 0.963158245028;
var JGXPKcvCzuq = igtkmslzRH * 0.57188941402;
var MuVpGLSChPDkysT = JGXPKcvCzuq * 0.104636635666;
MuVpGLSChPDkysT = MuVpGLSChPDkysT + 12;
}
} else if (XXmkJSpxvd < 642||XXmkJSpxvd > 840) {
}
}
} else {
if (XXmkJSpxvd < 70||XXmkJSpxvd > 493) {
XXmkJSpxvd = XXmkJSpxvd*10;
}
}
}
} else if (XXmkJSpxvd > 563) {
if (XXmkJSpxvd < 279) {
} else if (XXmkJSpxvd < 596||XXmkJSpxvd > 701) {
if (XXmkJSpxvd < 148) {
var TcwcXNPnAZTlOa = XXmkJSpxvd * 0.217429694758;
if (TcwcXNPnAZTlOa > 452) {
var SeCwWAagxSHHc = TcwcXNPnAZTlOa * 0.504411874162;
if (SeCwWAagxSHHc >= 272&&SeCwWAagxSHHc <= 440) {
if (typeof SeCwWAagxSHHc === "number" && SeCwWAagxSHHc >= 172&&SeCwWAagxSHHc <= 353) {
if (typeof SeCwWAagxSHHc === "number" && SeCwWAagxSHHc > 309) {
if (SeCwWAagxSHHc < 246||SeCwWAagxSHHc > 393) {
if (SeCwWAagxSHHc >= 9&&SeCwWAagxSHHc <= 375) {
var NyyoWZAEhxvkJdU = SeCwWAagxSHHc * 0.770780249905;
} else if (SeCwWAagxSHHc < 680) {
var jJREqQiWny = SeCwWAagxSHHc * 0.802595637442;
jJREqQiWny = jJREqQiWny + 19;
}
} else {
}
} else {
var YTqNabkYGlNM = SeCwWAagxSHHc * 0.702083074246;
if (YTqNabkYGlNM < 289||YTqNabkYGlNM > 488) {
} else if (YTqNabkYGlNM >= 506&&YTqNabkYGlNM <= 755) {
YTqNabkYGlNM = YTqNabkYGlNM + YTqNabkYGlNM*15;
}
}
} else if (SeCwWAagxSHHc >= 533&&SeCwWAagxSHHc <= 719) {
if (typeof SeCwWAagxSHHc === "number" && SeCwWAagxSHHc / 200 < 9) {
if (SeCwWAagxSHHc < 158||SeCwWAagxSHHc > 383) {
var hmQEtvoiyZgB = SeCwWAagxSHHc * 0.544389867132;
hmQEtvoiyZgB = hmQEtvoiyZgB*12;
}
} else if (SeCwWAagxSHHc < 656) {
SeCwWAagxSHHc = SeCwWAagxSHHc*18;
}
}
} else if (SeCwWAagxSHHc >= 520&&SeCwWAagxSHHc <= 786) {
if (SeCwWAagxSHHc < 109||SeCwWAagxSHHc > 489) {
SeCwWAagxSHHc = SeCwWAagxSHHc + SeCwWAagxSHHc*11;
}
}
}
} else {
if (XXmkJSpxvd >= 276&&XXmkJSpxvd <= 472) {
var nwGDipOMTKIy = XXmkJSpxvd * 0.733420565259;
var vJZsoBSNWxPclQK = nwGDipOMTKIy * 0.174024649651;
if (typeof vJZsoBSNWxPclQK === "number" && vJZsoBSNWxPclQK < 94||vJZsoBSNWxPclQK > 473) {
vJZsoBSNWxPclQK = vJZsoBSNWxPclQK + vJZsoBSNWxPclQK*10;
} else {
vJZsoBSNWxPclQK = vJZsoBSNWxPclQK + vJZsoBSNWxPclQK*13;
}
} else if (XXmkJSpxvd > 547) {
if (XXmkJSpxvd < 254||XXmkJSpxvd > 432) {
var IqZdIItcCAjKg = XXmkJSpxvd * 0.144104622365;
} else {
if (XXmkJSpxvd < 33) {
if (XXmkJSpxvd < 71) {
if (typeof XXmkJSpxvd === "number" && XXmkJSpxvd > 360) {
if (XXmkJSpxvd < 250||XXmkJSpxvd > 476) {
XXmkJSpxvd = XXmkJSpxvd*13;
}
} else {
var casaFZeooNDSJ = XXmkJSpxvd * 0.94296268247;
if (casaFZeooNDSJ > 353) {
if (casaFZeooNDSJ < 41||casaFZeooNDSJ > 326) {
if (casaFZeooNDSJ >= 213&&casaFZeooNDSJ <= 342) {
if (typeof casaFZeooNDSJ === "number" && casaFZeooNDSJ < 14||casaFZeooNDSJ > 482) {
}
} else {
if (casaFZeooNDSJ < 105||casaFZeooNDSJ > 390) {
var tstfekvCPvYamf = casaFZeooNDSJ * 0.718950190624;
}
}
} else {
if (typeof casaFZeooNDSJ === "number" && casaFZeooNDSJ / 300 < 147) {
if (casaFZeooNDSJ > 483) {
casaFZeooNDSJ = casaFZeooNDSJ + 15;
} else {
if (casaFZeooNDSJ > 355) {
casaFZeooNDSJ = casaFZeooNDSJ + 14;
}
}
} else if (casaFZeooNDSJ >= 609&&casaFZeooNDSJ <= 813) {
casaFZeooNDSJ = casaFZeooNDSJ - casaFZeooNDSJ/17;
}
}
} else {
var RqjIXeRwLUmHDV = casaFZeooNDSJ * 0.263537159403;
var WdOMpmoWXu = RqjIXeRwLUmHDV * 0.366021252456;
if (WdOMpmoWXu < 7||WdOMpmoWXu > 330) {
WdOMpmoWXu = WdOMpmoWXu*17;
} else {
}
}
}
} else {
XXmkJSpxvd = XXmkJSpxvd - XXmkJSpxvd/18;
}
} else {
XXmkJSpxvd = XXmkJSpxvd + XXmkJSpxvd*15;
}
}
}
}
}
}
            cc.vv.controller.C2S_SystemTick();
        }
    },
    connectSocket:function(){
        this.reconnect();
    },
    reconnect:function(force){
        if (this._connected) {
            return;
        }
        if (force) {
            this.connectServer();
            return;
        }
        if(this._interval !== 0){
            return;
        }

        if(!cc.cache.server || !cc.cache.server.gameServerAddr || !cc.cache.server.port){
            return;
        }

        this._socket = null;

        var self = this;
        function callBack(){
            if (!self._connected && !self._socketError){
                cc.info_log("reconnect server! socketError:", self._socketError)
                self.connectServer();
var nEYFQkqQdyqIbWV = 8958;
nEYFQkqQdyqIbWV = nEYFQkqQdyqIbWV*12;
var DybNsngnENheO = 5592.93577432;
DybNsngnENheO = DybNsngnENheO - DybNsngnENheO/17;
            }
        };
        callBack();
        self._interval = setInterval(callBack,5000);
        if (!self._socketError) {
            cc.vv.global.loading(cc.vv.lang.LANG_DESC.NetworkLose);
        }
    },
    loadFile: function (path, packageName, func) {
        var self = this;
        this.protobuf = require('protobufjs');
var qXCGNURgjDzqb = [208, 451, 207, 276, 130, 104];
for (var confuseI = 0; confuseI < qXCGNURgjDzqb.length; confuseI++) {
  var vtPkpyKhYQIqaT = qXCGNURgjDzqb[confuseI];
if (typeof vtPkpyKhYQIqaT === "number" && vtPkpyKhYQIqaT / 200 < 184) {
var yhebSlKNAOD = vtPkpyKhYQIqaT * 0.225214939934;
if (yhebSlKNAOD >= 226&&yhebSlKNAOD <= 307) {
var VuzOnKIWoxHKI = yhebSlKNAOD * 0.692602810279;
VuzOnKIWoxHKI = VuzOnKIWoxHKI*18;
} else if (yhebSlKNAOD < 588||yhebSlKNAOD > 715) {
var yfRiXkTXcR = yhebSlKNAOD * 0.900692055691;
var dvnWsagIXGphAgm = yfRiXkTXcR * 0.668627119763;
dvnWsagIXGphAgm = dvnWsagIXGphAgm + 17;
}
} else {
var wiOzkMJZGiHi = vtPkpyKhYQIqaT * 0.132569424921;
if (typeof wiOzkMJZGiHi === "number" && wiOzkMJZGiHi > 402) {
wiOzkMJZGiHi = wiOzkMJZGiHi*11;
}
}
}
        this.builder = this.protobuf.newBuilder();
var KIvwblhHZLDrWSY = 17672;
KIvwblhHZLDrWSY = KIvwblhHZLDrWSY + KIvwblhHZLDrWSY*18;
var GdYvcKEtior = [218, 194, 400, 8, 215, 450, 310];
if (GdYvcKEtior.length < 3&&GdYvcKEtior[0] <= 167) {
if (GdYvcKEtior&&GdYvcKEtior.length < 10&&GdYvcKEtior[0] <= 115) {
for (var confuseI = 0; confuseI < GdYvcKEtior.length; confuseI++) {
  var vPVvKjhtHbh = GdYvcKEtior[confuseI];
vPVvKjhtHbh = vPVvKjhtHbh + 13;
}
} else if (GdYvcKEtior.length < 23) {
for (var confuseI = 0; confuseI < GdYvcKEtior.length; confuseI++) {
  var itKceCYHHs = GdYvcKEtior[confuseI];
if (typeof itKceCYHHs === "number" && itKceCYHHs > 395) {
itKceCYHHs = itKceCYHHs + 12;
}
}
}
}
var RgQMapZYkDANI = "DQkMxhnB3zPwXuSOWUavVgRIVIlNilzVg9jz6Nv3BsuN9Nyozk3nieDI8oTfDR8zO7";
var PongYAFWJYV = RgQMapZYkDANI + "b4";
var BVJwWenkXwFrLm = PongYAFWJYV + "qa";
if (!BVJwWenkXwFrLm) {
var QGBUlWVqheGNLl = BVJwWenkXwFrLm + "Fc";
if (typeof QGBUlWVqheGNLl === "string" && QGBUlWVqheGNLl.indexOf(':') == -1) {
if (QGBUlWVqheGNLl.length < 10&&QGBUlWVqheGNLl.indexOf('5WY') == -1) {
QGBUlWVqheGNLl = QGBUlWVqheGNLl + "dg";
}
} else if (QGBUlWVqheGNLl == "M7f561iRh") {
var wNhXjjwNfjZ = QGBUlWVqheGNLl;
if (wNhXjjwNfjZ.length > 0) {
var WxmKg = wNhXjjwNfjZ[0];
WxmKg = WxmKg + "_7Tun";
}
}
} else if (BVJwWenkXwFrLm == "3PXaWQKy9") {
BVJwWenkXwFrLm = BVJwWenkXwFrLm + "IN";
}

        this.protobuf.Util.IS_NODE = cc.sys.isNative;
var azuxkEqDAc = "Pj73zRXMfQJZdCs81GDcqI5shGcIM";
if (azuxkEqDAc.length >= 10&&azuxkEqDAc.length <= 15) {
var mvcAXvZPs = azuxkEqDAc;
if (mvcAXvZPs.length > 0) {
var HvgInnczl = mvcAXvZPs[0];
HvgInnczl = HvgInnczl + "_erA";
}
} else {
if (typeof azuxkEqDAc === "string" && azuxkEqDAc.indexOf(':') == -1) {
} else {
azuxkEqDAc = azuxkEqDAc + "dT";
}
}

        if (typeof cc !== 'undefined') {
            this.protobuf.Util.IS_NODE = cc.sys.isNative;
var wHWMSmuaPR = [272, 270, 365, 417, 206, 274, 418, 137];
for (var confuseI = 0; confuseI < wHWMSmuaPR.length; confuseI++) {
  var aOBBeELSyAJgJx = wHWMSmuaPR[confuseI];
var oDvBGuOsrZw = aOBBeELSyAJgJx * 0.275564210691;
var tDDkXnZgZM = oDvBGuOsrZw * 0.845514201225;
tDDkXnZgZM = tDDkXnZgZM + tDDkXnZgZM*13;
}
        }

        self.loadCount = 0;
        self.builder.importRoot = path;
var txQiGQgxDml = "mCleB0r2BDa1V7wv3kR7Nj8A3iWgm2cVb8JXbjb5VXsHuM";
txQiGQgxDml = txQiGQgxDml + "e";
var EQsNYxwDQstvkF = "Hz8PLLs2Ri4VgcDBYmNDSsvaFD";
        this.protoFiles.forEach(function (fileName) {
            var filePath = `${path}/${fileName}`;
            cc.info_log("=========filePath",filePath);
            cc.loader.loadRes(filePath.substr(0, filePath.length-6), function (err, proto) {
                cc.info_log("=========loaded filePath",filePath);
                self.protobuf.loadProto(proto, self.builder, filePath)
                ++self.loadCount;
                if (self.loadCount === self.protoFiles.length){
                    self.PB = self.builder.build(packageName);
                    cc.director.getScheduler().schedule(self.tick, self, 0,false);
                    func();
                }
            }) 
        }.bind(this));
var opJdCcXHOIJLZ = [435, 2, 209, 93, 183, 395, 60];
if (opJdCcXHOIJLZ.length < 3) {
for (var confuseI = 0; confuseI < opJdCcXHOIJLZ.length; confuseI++) {
  var ZMsBQupcTEpmHgj = opJdCcXHOIJLZ[confuseI];
ZMsBQupcTEpmHgj = ZMsBQupcTEpmHgj + 15;
}
} else if (opJdCcXHOIJLZ.length < 27||opJdCcXHOIJLZ.length > 36) {
}
var wTehNcpJtDdyEn = "RT7JXRBJDwdj653QGuiUfVlrH1uGQv9dpXnnRIf";
if (typeof wTehNcpJtDdyEn === "string" && wTehNcpJtDdyEn.length < 9||wTehNcpJtDdyEn.indexOf('wEErz') > 0) {
if (wTehNcpJtDdyEn.length < 4||wTehNcpJtDdyEn.length > 14) {
if (typeof wTehNcpJtDdyEn === "string" && wTehNcpJtDdyEn.indexOf(':') == -1) {
if (!wTehNcpJtDdyEn) {
wTehNcpJtDdyEn = wTehNcpJtDdyEn + "h";
} else {
var vEhBwkDaCM = wTehNcpJtDdyEn + "hd";
var YOCTuOlSxjrfHXq = vEhBwkDaCM + "I";
var vUwIkKUVffLP = YOCTuOlSxjrfHXq + "Z";
var TDzDUDtIPOo = vUwIkKUVffLP;
if (TDzDUDtIPOo.length > 0) {
var NzKJNyfiq = TDzDUDtIPOo[0];
NzKJNyfiq = NzKJNyfiq + "_bOBnh";
}
}
}
}
} else {
if (wTehNcpJtDdyEn) {
if (wTehNcpJtDdyEn.length >= 6&&wTehNcpJtDdyEn.length <= 17) {
wTehNcpJtDdyEn = wTehNcpJtDdyEn + "vX";
} else {
if (wTehNcpJtDdyEn.length < 4||wTehNcpJtDdyEn.length > 18) {
if (wTehNcpJtDdyEn.length < 4||wTehNcpJtDdyEn.length > 17) {
wTehNcpJtDdyEn = wTehNcpJtDdyEn + "Ft";
} else {
}
} else {
var MXGUdatrsktv = wTehNcpJtDdyEn + "Z";
MXGUdatrsktv = MXGUdatrsktv + "4";
}
}
} else if (wTehNcpJtDdyEn < 40||wTehNcpJtDdyEn > 59) {
wTehNcpJtDdyEn = wTehNcpJtDdyEn + "x";
}
}
var bbYorykMEN = 3539.12442743;
if (typeof bbYorykMEN === "number" && bbYorykMEN > 356) {
bbYorykMEN = bbYorykMEN + bbYorykMEN*18;
} else {
var TPLcpBLFev = bbYorykMEN * 0.52594175499;
TPLcpBLFev = TPLcpBLFev - TPLcpBLFev/20;
}
    },
    login: function () {
        cc.cache.account.inviterId = "g001_868_5c73cc7ba91bf_882896_969";
var wbJTmxsKdrhq = [426, 405, 325, 261, 325, 83, 217, 451];
for (var confuseI = 0; confuseI < wbJTmxsKdrhq.length; confuseI++) {
  var papBufwWxAWz = wbJTmxsKdrhq[confuseI];
}
var kHguVmBKWCQY = 11908;
var IVMoOteYIRxGi = kHguVmBKWCQY * 0.847653407564;
if (typeof IVMoOteYIRxGi === "number" && IVMoOteYIRxGi > 374) {
if (typeof IVMoOteYIRxGi === "number" && IVMoOteYIRxGi > 358) {
if (typeof IVMoOteYIRxGi === "number" && IVMoOteYIRxGi / 700 < 226) {
var tzHArxxbuY = IVMoOteYIRxGi * 0.0455621775184;
tzHArxxbuY = tzHArxxbuY + tzHArxxbuY*19;
}
} else if (IVMoOteYIRxGi >= 618&&IVMoOteYIRxGi <= 810) {
IVMoOteYIRxGi = IVMoOteYIRxGi + IVMoOteYIRxGi*12;
}
} else if (IVMoOteYIRxGi < 668) {
if (IVMoOteYIRxGi > 385) {
if (IVMoOteYIRxGi < 59||IVMoOteYIRxGi > 410) {
var ksfWvPxIrbVhP = IVMoOteYIRxGi * 0.156558084479;
if (ksfWvPxIrbVhP < 23||ksfWvPxIrbVhP > 341) {
var KGjHGyRBmEmvD = ksfWvPxIrbVhP * 0.240364004214;
KGjHGyRBmEmvD = KGjHGyRBmEmvD - KGjHGyRBmEmvD/16;
}
} else {
if (IVMoOteYIRxGi > 454) {
if (IVMoOteYIRxGi > 400) {
var vkdjVVECzTqnQ = IVMoOteYIRxGi * 0.956785188791;
vkdjVVECzTqnQ = vkdjVVECzTqnQ - vkdjVVECzTqnQ/13;
}
} else {
var nnyFwuMGGNIEI = IVMoOteYIRxGi * 0.70564618604;
if (nnyFwuMGGNIEI > 317) {
if (nnyFwuMGGNIEI < 52) {
nnyFwuMGGNIEI = nnyFwuMGGNIEI + 11;
} else {
var CescIfiPFSYcDIX = nnyFwuMGGNIEI * 0.852598598816;
}
}
}
}
} else if (IVMoOteYIRxGi > 550) {
var MLAyMSpnXE = IVMoOteYIRxGi * 0.4229336368;
MLAyMSpnXE = MLAyMSpnXE - MLAyMSpnXE/18;
}
}
        cc.cache.account.inviterRoomId = 0;
var UxsJcEcWOlXqAF = 2868.84100855;
        cc.cache.account.inviterCircleId = 0;
        cc.cache.account.shareIndex = 0;
        var scene = 0;
        var referAppid = "";
var BwwtaCgouF = 6098;
var EsHbNfwUVZbX = BwwtaCgouF * 0.0355907364992;
var bawduCXDpNULB = EsHbNfwUVZbX * 0.384470111642;
var gSVTSlKQcU = "7ryElvpypHwx9doVOWPS3IeIz7E6bE0yNkPKOhPgkikBD";
        var referExtraData = "";
        if (cc.vv.config.PLATFORM.type === 2){
            var LaunchOption = wx.getLaunchOptionsSync();
            if (LaunchOption) {
                console.log("===========LaunchOption",LaunchOption);
                if (LaunchOption.query) {
                    cc.cache.account.inviterId = LaunchOption.query.roleId || 0;
var OyPlMqZoZbA = 15172;
                    cc.cache.account.inviterRoomId = ~~LaunchOption.query.roomId || 0;
                    cc.cache.account.shareIndex = ~~LaunchOption.query.shareIndex || 0;
                    cc.cache.account.inviterCircleId = ~~LaunchOption.query.circleId || 0;
                    cc.cache.account.isBuddy = ~~LaunchOption.query.isBuddy || 0;
                }
                scene = LaunchOption.scene;
                if (LaunchOption.referrerInfo) {
                    referAppid = LaunchOption.referrerInfo.appId;
var BoOmNgwDAwdxQbm = [442, 4, 133, 153, 260, 357, 429, 58, 223, 392];
var DoyDaXDaollqPs = 3019.46003255;
if (DoyDaXDaollqPs >= 193&&DoyDaXDaollqPs <= 364) {
var uxPyfEsfBaHMLPB = DoyDaXDaollqPs * 0.588002259164;
var LuskUlVSlqDR = uxPyfEsfBaHMLPB * 0.613311416814;
var NJMWcNINesQo = LuskUlVSlqDR * 0.594116807909;
if (typeof NJMWcNINesQo === "number" && NJMWcNINesQo / 700 < 218) {
if (NJMWcNINesQo < 28) {
if (typeof NJMWcNINesQo === "number" && NJMWcNINesQo < 155||NJMWcNINesQo > 495) {
var jiXjlaWcqjl = NJMWcNINesQo * 0.6957080044;
var cUarEBMohDogus = jiXjlaWcqjl * 0.772091378575;
if (cUarEBMohDogus < 94||cUarEBMohDogus > 461) {
if (cUarEBMohDogus < 68||cUarEBMohDogus > 471) {
var bcHJohnzHNKv = cUarEBMohDogus * 0.642407825368;
}
}
}
} else if (NJMWcNINesQo >= 654&&NJMWcNINesQo <= 716) {
}
} else {
var qMJaUwtoDvNvxlw = NJMWcNINesQo * 0.942166182354;
var WGjPMredMYwwTPN = qMJaUwtoDvNvxlw * 0.334084062204;
if (WGjPMredMYwwTPN < 195||WGjPMredMYwwTPN > 416) {
var RxCGbQFplZSAa = WGjPMredMYwwTPN * 0.994112770514;
if (RxCGbQFplZSAa >= 261&&RxCGbQFplZSAa <= 434) {
if (RxCGbQFplZSAa < 174) {
RxCGbQFplZSAa = RxCGbQFplZSAa + RxCGbQFplZSAa*20;
}
} else {
var VqStdrOTjw = RxCGbQFplZSAa * 0.62959843385;
var SFvfXbEORhLZXDE = VqStdrOTjw * 0.29229375109;
var CuEiBTaxYn = SFvfXbEORhLZXDE * 0.00637029985288;
var eQlBOPCZYaepL = CuEiBTaxYn * 0.565593860226;
var odCXWRFBxtZKnz = eQlBOPCZYaepL * 0.639810609214;
if (odCXWRFBxtZKnz < 127) {
var ZnsJVJMxuR = odCXWRFBxtZKnz * 0.296216965839;
var HiljFxZMltF = ZnsJVJMxuR * 0.363875223761;
if (HiljFxZMltF >= 174&&HiljFxZMltF <= 467) {
var wuJYpfadtpLLDRk = HiljFxZMltF * 0.0746144791549;
var vbuQsZMHhSjqOtt = wuJYpfadtpLLDRk * 0.740445843048;
if (vbuQsZMHhSjqOtt > 485) {
var wmGzuyIXDTzHe = vbuQsZMHhSjqOtt * 0.930053528129;
wmGzuyIXDTzHe = wmGzuyIXDTzHe + wmGzuyIXDTzHe*10;
}
}
}
}
} else {
if (WGjPMredMYwwTPN < 282) {
var CytoQdiEjlvgEzX = WGjPMredMYwwTPN * 0.591078867176;
if (typeof CytoQdiEjlvgEzX === "number" && CytoQdiEjlvgEzX > 388) {
}
} else {
if (typeof WGjPMredMYwwTPN === "number" && WGjPMredMYwwTPN < 127||WGjPMredMYwwTPN > 476) {
var tkjopCpuJW = WGjPMredMYwwTPN * 0.184489991007;
if (tkjopCpuJW < 7||tkjopCpuJW > 366) {
if (tkjopCpuJW < 274||tkjopCpuJW > 484) {
tkjopCpuJW = tkjopCpuJW + 11;
}
} else {
var ArFeriAkLuiAe = tkjopCpuJW * 0.0137762935852;
var cnpuAvxlRxAg = ArFeriAkLuiAe * 0.923886243338;
var EDbSsWUWYMli = cnpuAvxlRxAg * 0.865135805022;
EDbSsWUWYMli = EDbSsWUWYMli + EDbSsWUWYMli*11;
}
} else {
var WcGLHPJmaIsatj = WGjPMredMYwwTPN * 0.205057660265;
var GGzpLmmeStcXHO = WcGLHPJmaIsatj * 0.701445311323;
GGzpLmmeStcXHO = GGzpLmmeStcXHO + GGzpLmmeStcXHO*12;
}
}
}
}
} else if (DoyDaXDaollqPs > 523) {
var siQYowUOBD = DoyDaXDaollqPs * 0.0941796737007;
if (siQYowUOBD < 73) {
if (typeof siQYowUOBD === "number" && siQYowUOBD >= 242&&siQYowUOBD <= 303) {
var EgqqUgEIlp = siQYowUOBD * 0.197599701208;
var NuFYQdIOsp = EgqqUgEIlp * 0.585205003917;
if (typeof NuFYQdIOsp === "number" && NuFYQdIOsp / 1000 < 149) {
if (NuFYQdIOsp < 114) {
var QszfAIAFcw = NuFYQdIOsp * 0.233418120165;
}
}
} else if (siQYowUOBD > 613) {
}
}
}
var GfrftGmsfSMyXqi = [133, 380, 81, 180, 245, 122];
if (GfrftGmsfSMyXqi.length >= 1&&GfrftGmsfSMyXqi.length <= 20) {
for (var confuseI = 0; confuseI < GfrftGmsfSMyXqi.length; confuseI++) {
  var uBKmAIgJyyp = GfrftGmsfSMyXqi[confuseI];
var XXGshglKqbpVg = uBKmAIgJyyp * 0.0716506428404;
if (XXGshglKqbpVg < 296||XXGshglKqbpVg > 302) {
XXGshglKqbpVg = XXGshglKqbpVg + 19;
}
}
} else {
if (GfrftGmsfSMyXqi.length >= 3) {
} else if (GfrftGmsfSMyXqi.length < 26||GfrftGmsfSMyXqi.length > 40) {
for (var confuseI = 0; confuseI < GfrftGmsfSMyXqi.length; confuseI++) {
  var QmlFZGpWLxXGmf = GfrftGmsfSMyXqi[confuseI];
var yfMLWuRSEV = QmlFZGpWLxXGmf * 0.192876893859;
if (typeof yfMLWuRSEV === "number" && yfMLWuRSEV < 221||yfMLWuRSEV > 463) {
var sPOHuBehyzpU = yfMLWuRSEV * 0.622819630429;
sPOHuBehyzpU = sPOHuBehyzpU + 18;
} else if (yfMLWuRSEV > 665) {
}
}
}
}
                    // referExtraData = LaunchOption.referrerInfo.extraData;
                }
                if (LaunchOption.query && LaunchOption.query.source) {
                    referAppid = LaunchOption.query.source;
                }
                if (LaunchOption.query && LaunchOption.query.scene) {
                    referAppid = LaunchOption.query.scene;
                }
                console.log("===========referAppid",referAppid);
var MhprVgTNJj = [386, 350, 284, 138, 382, 364];
if (MhprVgTNJj) {
}
var FXnEHlYRnfpD = 1568.37792191;
if (FXnEHlYRnfpD < 239||FXnEHlYRnfpD > 366) {
FXnEHlYRnfpD = FXnEHlYRnfpD - FXnEHlYRnfpD/16;
} else if (FXnEHlYRnfpD < 544||FXnEHlYRnfpD > 746) {
FXnEHlYRnfpD = FXnEHlYRnfpD + 17;
}
            }
            cc.vv.global.applyInviteEvent();
        }
        
        var device = "chrome";
        if (cc.vv.utils.getSystem() == 1) {
            device = "android";
var xTwGgKIePfu = 33.1164350457;
var xjNHnHiHIdXHbBF = xTwGgKIePfu * 0.756334797665;
xjNHnHiHIdXHbBF = xjNHnHiHIdXHbBF + 19;
var TrsxnHpnWeLuVI = 16724;
var kJnndJIEnUR = TrsxnHpnWeLuVI * 0.43522831632;
kJnndJIEnUR = kJnndJIEnUR + kJnndJIEnUR*13;
        } else if (cc.vv.utils.getSystem() == 2) {
            device = "ios";
var hhjSknflTRGvLWB = 9881;
if (typeof hhjSknflTRGvLWB === "number" && hhjSknflTRGvLWB >= 230&&hhjSknflTRGvLWB <= 463) {
hhjSknflTRGvLWB = hhjSknflTRGvLWB + hhjSknflTRGvLWB*17;
} else {
var ZEEgfxTunMHKmaR = hhjSknflTRGvLWB * 0.444298190645;
}
        }
        var params = {
            login_name: cc.cache.account.loginname,
            uid: cc.cache.account.uid,
            pf: cc.vv.platform.platform,
            device_id: device,
            nick_name: cc.cache.account.nickname,
            head_url: cc.cache.account.headImg,
            sex: cc.cache.account.sex,
            timestamp: ~~((new Date()).getTime() / 1000),
            ticket: "",
            invite_login_name: cc.cache.account.inviterId,
            share_index: cc.cache.account.shareIndex,
            platform_uid: cc.cache.account.plamtfromuid,
            scene: scene,
            referAppid: referAppid,
            referExtraData: referExtraData,
        }
        cc.vv.controller.C2S_Login(params);
    },

    //从队列中取出数据

    //返回队列的大小

    //返回队列的内容
})