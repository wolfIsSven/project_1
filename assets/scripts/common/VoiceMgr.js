// import { setTimeout } from "timers";

var radix = 12;
var base = 128 - radix;
function crypto(value) {
    value -= base;
    var h = Math.floor(value / radix) + base;
    var l = value % radix + base;
    return String.fromCharCode(h) + String.fromCharCode(l);
}

var encodermap = {}
var decodermap = {}
for(var i = 0; i < 256; ++i){
    var code = null;
    var v = i + 1;
    if(v >= base){
        code = crypto(v);
    }
    else{
        code = String.fromCharCode(v);    
    }
    
    encodermap[i] = code;
    decodermap[code] = i;
}

function encode(data){
    var content = "";
    var len = data.length;
    var a = (len >> 24) & 0xff;
    var b = (len >> 16) & 0xff;
    var c = (len >> 8) & 0xff;
    var d = len & 0xff;
    content += encodermap[a];
    content += encodermap[b];
    content += encodermap[c];
    content += encodermap[d];
    for(var i = 0; i < data.length; ++i){
        content += encodermap[data[i]];
    }
    return content;
}

function getCode(content,index){
    var c = content.charCodeAt(index);
    if(c >= base){
        c = content.charAt(index) + content.charAt(index + 1);
    }
    else{
        c = content.charAt(index);
    }
    return c;
}
function decode(content){
    var index = 0;
    var len = 0;
    for(var i = 0; i < 4; ++i){
        var c = getCode(content,index);
        index += c.length;
        var v = decodermap[c];
        len |= v << (3-i)*8;
    }
    
    var newData = new Uint8Array(len);
    var cnt = 0;
    while(index < content.length){
        var c = getCode(content,index);
        index += c.length;
        newData[cnt] = decodermap[c];
        cnt++;
    }
    return newData;
}

cc.Class({
    extends: cc.Component,

    properties: {
        onPlayCallback:null,
        _voiceMediaPath:null,
        _weixinList: [],
        _isPlayWeixinRecord: false,
    },

    // use this for initialization
    stop:function(){
        if(!cc.sys.isNative){
            return;
        }
        cc.vv.audioMgr.resumeAll();
        if(cc.sys.os == cc.sys.OS_ANDROID){
            jsb.reflection.callStaticMethod("com/babykylin/VoicePlayer", "stop", "()V"); 
        }
        else if(cc.sys.os == cc.sys.OS_IOS){
            jsb.reflection.callStaticMethod("VoiceSDK", "stopPlay");
        }
        else{
        }
    },
    release:function(){
        if(!cc.sys.isNative){
            return;
        }
        cc.vv.audioMgr.resumeAll();
        if(cc.sys.os == cc.sys.OS_ANDROID){
            jsb.reflection.callStaticMethod("com/babykylin/VoiceRecorder", "release", "()V");
        }
        else if(cc.sys.os == cc.sys.OS_IOS){
            jsb.reflection.callStaticMethod("VoiceSDK", "finishRecord");
        }
    },
    getVoiceData:function(filename){
        if(cc.sys.isNative){
            var url = this._voiceMediaPath + filename;
            cc.log("getVoiceData:" + url);
            var fileData = jsb.fileUtils.getDataFromFile(url);
            if(fileData){
                var content = encode(fileData);
                return content;
            }
        }
        return "";
    },
    init: function () {
        if(cc.sys.isNative){
            this._voiceMediaPath = jsb.fileUtils.getWritablePath() + "/voicemsgs/";
            this.setStorageDir(this._voiceMediaPath);
        }
        var self = this;
        window.addEventListener("message",function(e){
            if(typeof(e.data) === "object" && e.data){
                 var data = e.data;//JSON.parse(e.data);
                 var api = data["api"];
                 var params = data["params"];
                 if(api === "downloadVoice"){
                     params = params.split(";");
                    var localId = params[0]; // 返回音频的本地ID
                    self._weixinList.push({localId: localId, userId: params[1],serverId:params[2]});
                    self.playWixinRecord();
                 }else if(api === "onWixinRecordComplete"){
                    cc.vv.voiceMgr.onWixinRecordComplete();
                 }else if(api === "sendServerId"){
                     params = params.split(";");
                     var localId = params[0];
                    var serverId = params[1]; // 返回音频的服务器端ID
                    if(cc.vv.global.gamestate === "MJGame"){
                        var info = {type:1,data:serverId};
                        cc.vv.protobuf.sendMessage(1201,{type:1201,data:JSON.stringify(info)});
                    }else{
                        var message = JSON.stringify({type:3,message:"",voice:serverId});
                        cc.vv.protobuf.sendMessage(1613,{type:1613,receivedRoleId:cc.vv.friendMgr._curFriendRoleId,message:message});
                    }
                }
            }
        });


    },
    setStorageDir:function(dir){
        if(!cc.sys.isNative){
            return;
        }
        if(cc.sys.os == cc.sys.OS_ANDROID){ 
            jsb.reflection.callStaticMethod("com/babykylin/VoiceRecorder", "setStorageDir", "(Ljava/lang/String;)V",dir);    
        }
        else if(cc.sys.os == cc.sys.OS_IOS){
            jsb.reflection.callStaticMethod("VoiceSDK", "setStorageDir:",dir);
            if(!jsb.fileUtils.isDirectoryExist(dir)){
                jsb.fileUtils.createDirectory(dir);
            }
        }
    },
    clearCache:function(filename){
        if(cc.sys.isNative){
            var url = this._voiceMediaPath + filename;
            if(jsb.fileUtils.isFileExist(url)){
                jsb.fileUtils.removeFile(url);
            }
            if(jsb.fileUtils.isFileExist(url + ".wav")){
                jsb.fileUtils.removeFile(url + ".wav");
            }   
        }
    },
    getVoiceLevel:function(maxLevel){
        return Math.floor(Math.random() * maxLevel + 1);
        if(cc.sys.os == cc.sys.OS_ANDROID){ 
            return jsb.reflection.callStaticMethod("com/babykylin/VoiceRecorder", "getVoiceLevel", "(I)I",maxLevel);
        }
        else if(cc.sys.os == cc.sys.OS_IOS){
        }
        else{
            return Math.floor(Math.random() * maxLevel + 1);
        }
    },
    downloadWixinRecord: function (serverId, userId) {
        if (cc.vv.WEIXIN) {
            window.top.postMessage({"api":"downloadVoice","params":{"userId":userId,"serverId":serverId}},"*")
        } else if(cc.vv.config.PLATFORM.type === 2){
            var self = this;
            wx.downloadVoice({
                serverId: serverId, // 需要下载的音频的服务器端ID，由uploadVoice接口获得
                isShowProgressTips: 0,// 默认为1，显示进度提示
                success: function (res) {
                    var localId = res.localId; // 返回音频的本地ID
                    self._weixinList.push({localId: localId, userId: userId});
                    self.playWixinRecord();
                    // setTimeout(self.playWixinRecord, 1000);
                }
            });
        }
        
    },
    prepare:function(filename){
        if(!cc.sys.isNative){
            return;
        }
        cc.vv.audioMgr.pauseAll();
        this.clearCache(filename);
        if(cc.sys.os == cc.sys.OS_ANDROID){
            jsb.reflection.callStaticMethod("com/babykylin/VoiceRecorder", "prepare", "(Ljava/lang/String;)V",filename);
        }
        else if(cc.sys.os == cc.sys.OS_IOS){
            jsb.reflection.callStaticMethod("VoiceSDK", "prepareRecord:",filename);
        }
    },
    play:function(filename){
        if(!cc.sys.isNative){
            return;
        }
        cc.vv.audioMgr.pauseAll();
        if(cc.sys.os == cc.sys.OS_ANDROID){
            jsb.reflection.callStaticMethod("com/babykylin/VoicePlayer", "play", "(Ljava/lang/String;)V",filename); 
        }
        else if(cc.sys.os == cc.sys.OS_IOS){
            jsb.reflection.callStaticMethod("VoiceSDK", "play:",filename);
        }
        else{
        }
    },
    playWixinRecord: function () {
        if (this._isPlayWeixinRecord || this._weixinList.length == 0) return;
        // else alert ('end');
        this._isPlayWeixinRecord = true;
        var data = this._weixinList.shift();
        var localId = data.localId;
        var userId = data.userId;
        var serverId = data.serverId;
        if (cc.vv.WEIXIN) {
            window.top.postMessage({"api":"playVoice","params":{"localId":localId,"serverId":serverId}},"*");
        }else if(cc.vv.config.PLATFORM.type === 2){
            wx.playVoice({
                localId: localId // 需要播放的音频的本地ID，由stopRecord接口获得
            });
        }
        
        if (cc.vv.audioMgr.isBgmOn()) {
            cc.vv.audioMgr.setBGMVolume(0.1);
        }
        cc.vv.global.emit('show_voice', userId);
    },
    writeVoice:function(filename,voiceData){
        if(!cc.sys.isNative){
            return;
        }
        if(voiceData && voiceData.length > 0){
            var fileData = decode(voiceData);
            var url = this._voiceMediaPath + filename;
            this.clearCache(filename);
            jsb.fileUtils.writeDataToFile(fileData,url); 
        }
    },
    download:function(){
        
    },
    cancel:function(){
        if(!cc.sys.isNative){
            return;
        }
        cc.vv.audioMgr.resumeAll();
        if(cc.sys.os == cc.sys.OS_ANDROID){
            jsb.reflection.callStaticMethod("com/babykylin/VoiceRecorder", "cancel", "()V");
        }
        else if(cc.sys.os == cc.sys.OS_IOS){
            jsb.reflection.callStaticMethod("VoiceSDK", "cancelRecord");
        }
    },
    onWixinRecordComplete: function () {
        if (cc.vv.audioMgr.isBgmOn()) {
            cc.vv.audioMgr.setBgm(true);
        }
        cc.vv.global.emit('hide_voice');
        this._isPlayWeixinRecord = false;
        this.playWixinRecord();
    }
    
    
    

    
    
    
    
    
    
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
    



});