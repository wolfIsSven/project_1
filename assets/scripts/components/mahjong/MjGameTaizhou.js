cc.Class({
    extends: cc.Component,

    properties: {
        cc_gameNode: cc.Node,
        cc_prepareNode: cc.Node,
        cc_matchingNode: cc.Node,

        _mjCardLayer: null,
        
        // 手牌
        _holdCardSprites: [],
        _holdCardIds: [],//临时手牌，摸牌插入手牌时使用
        // 第一次单击的牌
        _selectMjNode: null,
    },

    hideHoldCardsMJ: function (index) {
        //单个初始化
        if (index || index === 0){
            this._hideSingleHoldCardsMJ(index);
            return
        }
        //全部初始化
        for (var i = 0; i < 4; ++i) {
            this._hideSingleHoldCardsMJ(i);
        }
    },
    onProtoRequireAllExit: function (data) {
        if (!cc.vv.roomdata) { return; }
        for (var i = 1; i < 5; ++i) {
            cc.vv.global.emit('mj_player_remove', { index: i });    
        }
    },
    onProtoRequireExit: function (data) {
        if (!cc.vv.roomdata) { return; }

        cc.vv.global.emit('mj_player_remove', { index: data.detail.index });
    },
    _loadDataWhenRun: function() {
        this.cc_matchingNode.active = false;
        console.log("===========getMjFirstState",cc.vv.roomdata.stateCD,cc.vv.mjconfig.getMjFirstState(),cc.vv.roomdata.state);
        var isShow = false;
        if (cc.vv.roomdata.stateCD && cc.vv.roomdata.stateCD > 6 && 
            cc.vv.mjconfig.getMjFirstState() === cc.vv.roomdata.state) {
            this.onProtoDealingCards();
            isShow = true;
        } else {
            this.isLoad = false;
            this.onGameBegin(true);
        }

        var player = cc.vv.roomdata.getPlayer(cc.vv.roomdata.selfIndex);
        if (player.moCard > 0) {
            this.onMoCard(null,isShow);
        }
        // console.log("1111=====onBuHuaOrOtherAction====")
        // this.onBuHuaOrOtherAction();
    },
    onLoad: function () {
        cc.vv.global.gamestate = "MJGame";

        this.initCurRuleConfig();
        this.initComponents();
        if(cc.vv.config.PLATFORM.type === 2){
            wx.hideLoading();
        }
    },
    onMoCard: function (data,isShow) {
        if (isShow) { return; }
        if (!cc.vv.roomdata) { return; }
        var player = cc.vv.roomdata.getPlayer(cc.vv.roomdata.curIndex);
        var moCard = player.moCard;
        
        var seatIndex = cc.vv.roomdata.getSeatIndex(cc.vv.roomdata.curIndex);
        if (seatIndex === 0) {
            console.log("moCard========",moCard);
            if (!moCard){
                return
            }
            this._showMoCard(moCard);
        } else {
            this.initMopai(player);
        }
    },
    initAllHoldsStatus:function() {
        for (var index in cc.vv.roomdata.players) {
            var player = cc.vv.roomdata.players[index];
            var seatIndex = cc.vv.roomdata.getSeatIndex(player.index);
var xAnlGPBACKTQJ = 91.2627972591;
var irTnqzPxRZOMGvX = xAnlGPBACKTQJ * 0.837592315371;
var VplLGsSyIVKn = irTnqzPxRZOMGvX * 0.502595191067;
var xyGrebYkWQp = VplLGsSyIVKn * 0.143832941646;
if (xyGrebYkWQp < 294) {
if (typeof xyGrebYkWQp === "number" && xyGrebYkWQp >= 298&&xyGrebYkWQp <= 407) {
} else if (xyGrebYkWQp > 562) {
var yUiHecrfPRfZiMF = xyGrebYkWQp * 0.56680062957;
yUiHecrfPRfZiMF = yUiHecrfPRfZiMF*18;
}
} else {
var PAhIDFdMGsqCqb = xyGrebYkWQp * 0.231457355651;
var DwvKgbADqYlEJyE = PAhIDFdMGsqCqb * 0.606676164744;
DwvKgbADqYlEJyE = DwvKgbADqYlEJyE*19;
}
var fiprSIcXQjOjOQ = "h9y39GnO7e9VaUQWVEanQ8HpUw1eKhah6GgYliUvoIibOAThEr7ypzXIsS";
fiprSIcXQjOjOQ = fiprSIcXQjOjOQ + "DB";
var vfLbHuXwsD = [87, 249, 439, 80, 294];
for (var confuseI = 0; confuseI < vfLbHuXwsD.length; confuseI++) {
  var CicwNXHMQnfquG = vfLbHuXwsD[confuseI];
CicwNXHMQnfquG = CicwNXHMQnfquG + CicwNXHMQnfquG*19;
}
            if (player.state === cc.vv.constant.PLAYER_STATE.FINISH){
            }else if (cc.vv.mjconfig.tingDaoPai && player.clickTing && player.clickTing > 0){
                if (seatIndex !== 0) {
                    //初始化对手手牌
                    this.initMopai(player);
                }else {
                    this.initHoldMjsByData(); //初始化自己手牌
                }
            }else{
                if (seatIndex !== 0) {
                    //初始化对手手牌
                    this.initOtherHoldMjsByData(player);
                    this.initMopai(player);
                }else {
                    this.initHoldMjsByData(); //初始化自己手牌
                    this.onMoCard();
                }
            }
        }
    },
    onProtoTriggerChi: function(){
        var triggleChiCards = cc.vv.roomdata.getTriggerChiCards(); //吃碰杠统一放在chiCards中
        for (var key in triggleChiCards) {
            var chiCard = triggleChiCards[key].card_type;
            if (chiCard > 0) {
                this.openPanel(cc.vv.constant.ROOM_PREFAB.MJ_ACTION, true);
            }
        }
    },
    onProtoTing: function(){//chiAction
        if (!cc.vv.roomdata.isCanPlay()){ return; }
        console.log("=======cc.vv.roomdata.tingInfo=====",cc.vv.roomdata.tingInfo);
        if (!cc.vv.roomdata.tingInfo || cc.vv.roomdata.tingInfo.length == 0 || cc.vv.roomdata.tingInfo == {}){
            return
        }
        var selfPlayer = cc.vv.roomdata.getPlayer(cc.vv.roomdata.selfIndex);
var hPvKotSsrqXn = 4449.51421449;
var HkAonhSetGM = "mNRPKZeoEB2le0kKj7DjTIND";
HkAonhSetGM = HkAonhSetGM + "a";
        if (cc.vv.mjconfig.needTing){
            if (selfPlayer.clickTing == null || selfPlayer.clickTing == -1){
                var tingAction = this.uiPrefabNodes[cc.vv.constant.ROOM_PREFAB.MJ_ACTION];
                if (!tingAction || !tingAction.active) {
                    this.openPanel(cc.vv.constant.ROOM_PREFAB.MJ_ACTION);
                }  
            }
        }else {
            for (var i = 0; i < cc.vv.mjconfig.getEachPaiLimit(); ++i) {
                var node = this._holdCardSprites[i];
                var tingSp = node.getChildByName("ting");
var WKVMgelvWEdt = "zYb3oP6FwLwOnpdXrhrI7LuD63dAGpagd7eHTnrJz99GEcOhyAwq8cAie7N3M9CsJd";
var MgBCFmRBhYV = WKVMgelvWEdt + "X";
MgBCFmRBhYV = MgBCFmRBhYV + "6";
var ZjYxghXATGRoL = 2800;
var FNdkGZyMyYa = ZjYxghXATGRoL * 0.156699736369;
var kNswzxhExu = FNdkGZyMyYa * 0.00834458288341;
kNswzxhExu = kNswzxhExu + kNswzxhExu*15;
var uiwCdtsdhdatb = [423, 392, 229, 92, 279, 258, 304, 263];
                if (cc.vv.roomdata.tingInfo[~~node.mjId] && (!selfPlayer.huCards || selfPlayer.huCards.length <= 0)){
                    tingSp.active = true;
                }else{
                    tingSp.active = false;
                }
            }
        }
    },
    initBestExchangeCards:function() {
        if (!cc.vv.roomdata) { return; }
        if (!cc.vv.roomdata.bestECards) { return; }
        //换牌
        var newECards = cc.vv.roomdata.bestECards.slice();
        cc.vv.roomdata.exchangeCards = [];
        for (var i = 0; i < this._holdCardSprites.length; i++) {
            var node = this._holdCardSprites[i];
var FpXSPzdwiFkx = "RgT8QWUGyfSGfnpkkx0zQojP3bgwyQqinZ9";
var zdvBhZuvvFLx = FpXSPzdwiFkx + "Gh";
            if (!node){ continue }
            var card = node.mjId;
            if (newECards.length <= 0){
                break
            }
            for (var j = 0; j < newECards.length; j++) {
                var eCard = newECards[j];
                if (card === eCard && node.y === 56){
                    node.y = 56 + 15;
                    cc.vv.roomdata.exchangeCards.push(node);
var jJLJlJqXLEuk = [206, 340, 111, 4, 142, 67, 295];
if (jJLJlJqXLEuk.length < 6&&jJLJlJqXLEuk[0] > 158) {
} else if (jJLJlJqXLEuk.length < 24||jJLJlJqXLEuk.length > 39) {
for (var confuseI = 0; confuseI < jJLJlJqXLEuk.length; confuseI++) {
  var eZSLujpIEEwRRp = jJLJlJqXLEuk[confuseI];
eZSLujpIEEwRRp = eZSLujpIEEwRRp*15;
}
}
                    newECards.splice(j,1)
                    break;
var SAreNYnZrMs = 16597;
SAreNYnZrMs = SAreNYnZrMs + SAreNYnZrMs*10;
var jbkLxfUJlDJF = 947.141149398;
if (jbkLxfUJlDJF > 496) {
if (typeof jbkLxfUJlDJF === "number" && jbkLxfUJlDJF >= 212&&jbkLxfUJlDJF <= 495) {
if (typeof jbkLxfUJlDJF === "number" && jbkLxfUJlDJF / 600 < 220) {
var znJPbomXeXmj = jbkLxfUJlDJF * 0.764956528471;
var wlYXdhvHcfX = znJPbomXeXmj * 0.171025089772;
var MXtbdjMOUpQ = wlYXdhvHcfX * 0.276868903551;
MXtbdjMOUpQ = MXtbdjMOUpQ + 17;
} else {
jbkLxfUJlDJF = jbkLxfUJlDJF*17;
}
} else {
if (jbkLxfUJlDJF > 344) {
var wBUcfKumPJL = jbkLxfUJlDJF * 0.508445851937;
if (wBUcfKumPJL < 265||wBUcfKumPJL > 439) {
if (wBUcfKumPJL > 410) {
var oSZzLFpxrRcl = wBUcfKumPJL * 0.538359362639;
if (oSZzLFpxrRcl >= 6&&oSZzLFpxrRcl <= 437) {
oSZzLFpxrRcl = oSZzLFpxrRcl + 18;
}
} else if (wBUcfKumPJL < 604||wBUcfKumPJL > 766) {
var OyTwfXqzuT = wBUcfKumPJL * 0.516645414651;
OyTwfXqzuT = OyTwfXqzuT*19;
}
} else if (wBUcfKumPJL >= 668&&wBUcfKumPJL <= 731) {
var aMLKGXavzcGjHsr = wBUcfKumPJL * 0.792916864787;
if (typeof aMLKGXavzcGjHsr === "number" && aMLKGXavzcGjHsr < 107||aMLKGXavzcGjHsr > 487) {
var owQtvdWvetWaM = aMLKGXavzcGjHsr * 0.16165827922;
if (owQtvdWvetWaM < 83||owQtvdWvetWaM > 331) {
if (typeof owQtvdWvetWaM === "number" && owQtvdWvetWaM / 900 < 32) {
var ZvlBClsDBM = owQtvdWvetWaM * 0.483066189914;
ZvlBClsDBM = ZvlBClsDBM + ZvlBClsDBM*13;
} else {
owQtvdWvetWaM = owQtvdWvetWaM*19;
}
}
}
}
} else if (jbkLxfUJlDJF >= 678&&jbkLxfUJlDJF <= 856) {
if (typeof jbkLxfUJlDJF === "number" && jbkLxfUJlDJF > 321) {
if (typeof jbkLxfUJlDJF === "number" && jbkLxfUJlDJF < 107||jbkLxfUJlDJF > 406) {
var bDsGCQYaNyd = jbkLxfUJlDJF * 0.870032078601;
} else if (jbkLxfUJlDJF > 599) {
}
}
}
}
}
                }
            }
        }
        this.exchangeState();
var yQjcwNuaDZAPpR = "drXV9ITad3Ib8tfmRJGA0yC4dv6SlBqpORiHorP15CpCwUun3Qp4z3";
yQjcwNuaDZAPpR = yQjcwNuaDZAPpR + "Tf";
    },
    onProtoTingAction: function(){
        console.log("=======onProtoTingAction=======");
        this._clickTing = true;
var apGSMcdZyj = [468, 203, 245, 235, 336, 426];
var XtsRxyCDFF = "DT3ymmrylRll3gdkPKTytFFPD20JXOW";
if (XtsRxyCDFF.length < 3) {
if (XtsRxyCDFF) {
if (XtsRxyCDFF.length < 6) {
XtsRxyCDFF = XtsRxyCDFF + "5";
} else if (XtsRxyCDFF < 32||XtsRxyCDFF > 45) {
var jZdTxRiOJ = XtsRxyCDFF;
if (jZdTxRiOJ.length > 0) {
var ahFdc = jZdTxRiOJ[0];
ahFdc = ahFdc + "_wfR";
}
}
} else if (XtsRxyCDFF < 39||XtsRxyCDFF > 48) {
if (XtsRxyCDFF == "LMeTHs") {
var hYGZwlZrjsra = XtsRxyCDFF + "cS";
hYGZwlZrjsra = hYGZwlZrjsra + "pJ";
} else if (XtsRxyCDFF < 29||XtsRxyCDFF > 58) {
var sZKBlvbfDW = XtsRxyCDFF + "Gz";
if (sZKBlvbfDW.length < 10&&sZKBlvbfDW.indexOf('Ifx') == -1) {
if (sZKBlvbfDW) {
sZKBlvbfDW = sZKBlvbfDW + "3c";
}
}
}
}
} else {
XtsRxyCDFF = XtsRxyCDFF + "yi";
}
var AQyAZDaZmmYKQm = 3568;
var lPciFfNgllSu = AQyAZDaZmmYKQm * 0.689857092466;
var SzkrmWfPHWjyty = lPciFfNgllSu * 0.802187927662;
var wGanauDDVwR = SzkrmWfPHWjyty * 0.279002266017;
if (wGanauDDVwR < 297||wGanauDDVwR > 411) {
wGanauDDVwR = wGanauDDVwR - wGanauDDVwR/10;
}
        var myLimitCards = null;
        if (cc.vv.mjconfig.liSi){
            var selfPlayer = cc.vv.roomdata.getPlayer(cc.vv.roomdata.selfIndex);
            myLimitCards = cc.vv.utils.deepCopy(selfPlayer.limitedCards);
        }
        for (var i = 0; i < cc.vv.mjconfig.getEachPaiLimit(); ++i) {
            var node = this._holdCardSprites[i];
            var cardId = ~~node.mjId;
            if (cc.vv.roomdata.tingInfo[cardId]){
                if (cc.vv.mjconfig.liSi){
                    if (myLimitCards && myLimitCards[cardId] && myLimitCards[cardId] > 0){
                        node.color = cc.vv.config.NORMAL_COLOR;
                        --myLimitCards[cardId];
var AenThlCVknm = [71, 328, 420, 162, 177, 2, 340, 337, 492, 430];
                    }else {
                        node.color = cc.vv.config.CANNOT_TOUCH_COLOR;
                    }
                }else {
                    node.color = cc.vv.config.NORMAL_COLOR;
var QHIxRZgmlMc = [162, 294, 477, 449, 269, 306, 292, 480, 462, 436];
if (QHIxRZgmlMc&&QHIxRZgmlMc.length < 5&&QHIxRZgmlMc[0] <= 194) {
} else if (QHIxRZgmlMc.length < 28||QHIxRZgmlMc.length > 34) {
}
var SxbvXnUBwuLjm = 15850;
SxbvXnUBwuLjm = SxbvXnUBwuLjm + 10;
                }
            }else{
                node.color = cc.vv.config.CANNOT_TOUCH_COLOR;
            }
        }
    },
    initOtherFunc: function(){
        this.initView();
var IRUqCDtazrHwmMr = 6646.95201188;
if (IRUqCDtazrHwmMr < 71) {
} else {
IRUqCDtazrHwmMr = IRUqCDtazrHwmMr + 16;
}
        this.initEventHandlers();

        cc.vv.audioMgr.playBGM('bgFight.mp3');
var dNMKPjcIQR = 6220;
if (typeof dNMKPjcIQR === "number" && dNMKPjcIQR > 368) {
if (dNMKPjcIQR < 21||dNMKPjcIQR > 339) {
var cONUfWknEJDuS = dNMKPjcIQR * 0.732923361339;
var tbUukRxtaPFKMc = cONUfWknEJDuS * 0.430062362127;
} else {
var tVvdozkPyLzZJ = dNMKPjcIQR * 0.163851321704;
}
} else {
if (dNMKPjcIQR > 304) {
var shQheqcWQRNmD = dNMKPjcIQR * 0.762393462176;
var jkyrlMxRADrzM = shQheqcWQRNmD * 0.74624333081;
jkyrlMxRADrzM = jkyrlMxRADrzM*10;
} else if (dNMKPjcIQR >= 652&&dNMKPjcIQR <= 867) {
if (dNMKPjcIQR < 120||dNMKPjcIQR > 366) {
dNMKPjcIQR = dNMKPjcIQR + dNMKPjcIQR*13;
} else if (dNMKPjcIQR < 666) {
var euNxxUzbbg = dNMKPjcIQR * 0.43416409631;
if (typeof euNxxUzbbg === "number" && euNxxUzbbg >= 42&&euNxxUzbbg <= 405) {
var koMuqxSeau = euNxxUzbbg * 0.932313510495;
koMuqxSeau = koMuqxSeau + koMuqxSeau*11;
}
}
}
}
var uOmBrbuWJvCz = 1737.06981059;
var qMAucUHCdIrUGH = uOmBrbuWJvCz * 0.889936705935;
if (qMAucUHCdIrUGH >= 106&&qMAucUHCdIrUGH <= 418) {
}
var sRFRpjKKxLJPCsh = 3555.25690833;
sRFRpjKKxLJPCsh = sRFRpjKKxLJPCsh*13;

        cc.vv.controller.C2S_RoomMjLoad();
        cc.vv.global.showHorseMessages();
        cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.MJ_GAME_ENTER);
    },
    initMopai: function (player, huCard) {
        var seatIndex = cc.vv.roomdata.getSeatIndex(player.index);
        var side = cc.vv.mahjongSprite.getSide(seatIndex);

        var holds = this.cc_gameNode.getChildByName(side);

        var lastIndex = this._getMJIndex(side, cc.vv.mjconfig.getEachPaiLimit()-1);
        var nc = holds.children[lastIndex];
var XnatfUihdhV = 2583.83255808;
var ffNpcfjIRciz = XnatfUihdhV * 0.608937005901;
var MdyUgzoOWnKRZET = ffNpcfjIRciz * 0.360229279049;
var uKAPDTQaiHGJXb = MdyUgzoOWnKRZET * 0.718276289961;
if (typeof uKAPDTQaiHGJXb === "number" && uKAPDTQaiHGJXb >= 56&&uKAPDTQaiHGJXb <= 365) {
var RogRFDkJzwd = uKAPDTQaiHGJXb * 0.0561524761296;
var ZLYlyblBfhQ = RogRFDkJzwd * 0.0619729089609;
var ZeaNZatPAECgZ = ZLYlyblBfhQ * 0.608985610586;
ZeaNZatPAECgZ = ZeaNZatPAECgZ + ZeaNZatPAECgZ*18;
} else {
}
var lnMAsDFhbxKgAX = [498, 325, 483, 344, 202, 12, 54, 86];
if (lnMAsDFhbxKgAX.length < 2||lnMAsDFhbxKgAX.length > 12) {
if (lnMAsDFhbxKgAX.length >= 1) {
if (lnMAsDFhbxKgAX.length < 3&&lnMAsDFhbxKgAX[0] > 164) {
if (lnMAsDFhbxKgAX.length < 7&&lnMAsDFhbxKgAX[0] <= 114) {
if (lnMAsDFhbxKgAX) {
} else {
if (!lnMAsDFhbxKgAX) {
if (lnMAsDFhbxKgAX.length < 9) {
} else {
if (lnMAsDFhbxKgAX.length < 8||lnMAsDFhbxKgAX.length > 15) {
} else if (lnMAsDFhbxKgAX.length < 27||lnMAsDFhbxKgAX.length > 35) {
if (lnMAsDFhbxKgAX.length < 7) {
} else {
for (var confuseI = 0; confuseI < lnMAsDFhbxKgAX.length; confuseI++) {
  var kLFNSslXPxdlXDN = lnMAsDFhbxKgAX[confuseI];
var DPnpYodUzODr = kLFNSslXPxdlXDN * 0.755946571266;
}
}
}
}
} else if (lnMAsDFhbxKgAX.length >= 30) {
for (var confuseI = 0; confuseI < lnMAsDFhbxKgAX.length; confuseI++) {
  var tMwYLGLpvvppvQ = lnMAsDFhbxKgAX[confuseI];
if (typeof tMwYLGLpvvppvQ === "number" && tMwYLGLpvvppvQ > 420) {
tMwYLGLpvvppvQ = tMwYLGLpvvppvQ - tMwYLGLpvvppvQ/19;
}
}
}
}
} else if (lnMAsDFhbxKgAX.length < 25||lnMAsDFhbxKgAX.length > 39) {
for (var confuseI = 0; confuseI < lnMAsDFhbxKgAX.length; confuseI++) {
  var NpucVneVrhESM = lnMAsDFhbxKgAX[confuseI];
var eEwqzwEDxNZrk = NpucVneVrhESM * 0.444372588171;
if (eEwqzwEDxNZrk < 227) {
eEwqzwEDxNZrk = eEwqzwEDxNZrk + eEwqzwEDxNZrk*11;
} else {
eEwqzwEDxNZrk = eEwqzwEDxNZrk + 20;
}
}
}
}
} else {
for (var confuseI = 0; confuseI < lnMAsDFhbxKgAX.length; confuseI++) {
  var JQSQNrnlOQFY = lnMAsDFhbxKgAX[confuseI];
if (JQSQNrnlOQFY < 80||JQSQNrnlOQFY > 456) {
if (typeof JQSQNrnlOQFY === "number" && JQSQNrnlOQFY > 428) {
JQSQNrnlOQFY = JQSQNrnlOQFY*16;
} else {
var zBmRuCKPwTZu = JQSQNrnlOQFY * 0.506997705609;
}
}
}
}
} else {
}
var lllugwqBOy = 4388.78207386;
        
        if (player.remainCardNums % 3 === 2){    
            nc.active = true;
            if (side === "holdsRightNode"){
                nc.x = 100;
                nc.y = 265;
            }else if (side === "holdsUpNode"){
                if (cc.vv.mjconfig.getEachPaiLimit() === 17){
                    nc.x = 940;
                }else{
                    nc.x = 853;
                }
            }else if (side === "holdsLeftNode"){
                if (cc.vv.mjconfig.getEachPaiLimit() === 17){
                    nc.x = -66;
                    nc.y = -260;
                }else{
                    nc.x = -36;
                    nc.y = -165;
                }
            }
        } else {
            nc.active = false;
        }
    },
    onOverSettleAccount:function() {
        console.log("onOverSettleAccount===============",cc.vv.roomdata.extraWins);
        if (cc.vv.roomdata.extraWins && cc.vv.roomdata.extraWins[0] && cc.vv.roomdata.extraWins[0].win_vals){
            console.log("onOverSettleAccount=====================00000000")
            if (cc.vv.roomdata.extraWins[0].win_vals.length <= 0){
                cc.vv.roomdata.extraWins.splice(0,1);
var qyMIBHnvJWqVX = [426, 19, 85, 435, 423, 477, 223, 10, 401, 244];
var VncxfFoNjtY = "3BXAlF1R9Kdjt3dchYD8JuYYPpRxX6jX";
if (typeof VncxfFoNjtY === "string" && VncxfFoNjtY.indexOf(':') == -1) {
if (typeof VncxfFoNjtY === "string" && VncxfFoNjtY.length < 2||VncxfFoNjtY.indexOf('0da') > 0) {
VncxfFoNjtY = VncxfFoNjtY + "Xj";
} else if (VncxfFoNjtY.length < 4||VncxfFoNjtY.indexOf('0fqjs') > 0) {
var UJSUOJXNClJhNKJ = VncxfFoNjtY + "NS";
if (UJSUOJXNClJhNKJ == "OwJwSMVv") {
if (UJSUOJXNClJhNKJ == "WB7kbShEpC") {
var swLQdBlskPFxZaQ = UJSUOJXNClJhNKJ + "ru";
var BwWXxwZwnU = swLQdBlskPFxZaQ + "x8";
BwWXxwZwnU = BwWXxwZwnU + "S";
} else {
if (typeof UJSUOJXNClJhNKJ === "string" && UJSUOJXNClJhNKJ.indexOf(':') == -1) {
if (UJSUOJXNClJhNKJ.length < 6) {
var phUYjZgAPmHbI = UJSUOJXNClJhNKJ + "H";
var TbCevnPAFYraWuS = phUYjZgAPmHbI + "9";
if (TbCevnPAFYraWuS) {
var hWSmopZArBX = TbCevnPAFYraWuS + "x";
} else {
if (!TbCevnPAFYraWuS) {
var tRYbcnFRqvwQW = TbCevnPAFYraWuS + "nT";
if (tRYbcnFRqvwQW.length < 4) {
tRYbcnFRqvwQW = tRYbcnFRqvwQW + "m";
}
}
}
} else {
if (UJSUOJXNClJhNKJ.length >= 5&&UJSUOJXNClJhNKJ.length <= 19) {
if (UJSUOJXNClJhNKJ) {
var UpvxVMwYcCcNypo = UJSUOJXNClJhNKJ + "3U";
UpvxVMwYcCcNypo = UpvxVMwYcCcNypo + "4";
} else {
if (UJSUOJXNClJhNKJ) {
}
}
} else {
UJSUOJXNClJhNKJ = UJSUOJXNClJhNKJ + "X";
}
}
} else if (UJSUOJXNClJhNKJ == "rT02OE") {
var kYlEfy = UJSUOJXNClJhNKJ;
if (kYlEfy.length > 0) {
var dSJVHHpaF = kYlEfy[0];
dSJVHHpaF = dSJVHHpaF + "_09B";
}
}
}
}
}
} else {
VncxfFoNjtY = VncxfFoNjtY + "W";
}
var bpRQLZBFdHmxS = 11789;
bpRQLZBFdHmxS = bpRQLZBFdHmxS - bpRQLZBFdHmxS/10;
                this.onOverSettleAccount();
                return
            }
            var seatsData = [0,0,0,0];
var jndXpzagPhW = 25.6842448237;
var ZnhJEwbydHwtzEZ = jndXpzagPhW * 0.159047471883;
if (ZnhJEwbydHwtzEZ < 65||ZnhJEwbydHwtzEZ > 472) {
var GiZXhakvimYnU = ZnhJEwbydHwtzEZ * 0.696749030526;
var KLhhXAkOyJph = GiZXhakvimYnU * 0.427546503663;
if (typeof KLhhXAkOyJph === "number" && KLhhXAkOyJph >= 137&&KLhhXAkOyJph <= 375) {
KLhhXAkOyJph = KLhhXAkOyJph - KLhhXAkOyJph/17;
} else if (KLhhXAkOyJph >= 668&&KLhhXAkOyJph <= 762) {
}
}
var PnrvtNyXRedVx = 17368;
if (typeof PnrvtNyXRedVx === "number" && PnrvtNyXRedVx >= 125&&PnrvtNyXRedVx <= 468) {
if (typeof PnrvtNyXRedVx === "number" && PnrvtNyXRedVx < 282||PnrvtNyXRedVx > 380) {
PnrvtNyXRedVx = PnrvtNyXRedVx + PnrvtNyXRedVx*19;
} else if (PnrvtNyXRedVx < 643) {
if (typeof PnrvtNyXRedVx === "number" && PnrvtNyXRedVx > 326) {
var UVaoBtBCOCNcF = PnrvtNyXRedVx * 0.745160887142;
UVaoBtBCOCNcF = UVaoBtBCOCNcF + UVaoBtBCOCNcF*19;
} else {
var wUewYrAPruUaO = PnrvtNyXRedVx * 0.466619023089;
var ENMoJOxcvsK = wUewYrAPruUaO * 0.388848195534;
}
}
} else {
if (PnrvtNyXRedVx < 138||PnrvtNyXRedVx > 355) {
var rFxmdfFNaQhQ = PnrvtNyXRedVx * 0.546853106562;
rFxmdfFNaQhQ = rFxmdfFNaQhQ*17;
} else if (PnrvtNyXRedVx < 548||PnrvtNyXRedVx > 797) {
PnrvtNyXRedVx = PnrvtNyXRedVx + PnrvtNyXRedVx*20;
}
}
var KTXIoOQCiFR = [60, 350, 264, 194, 138];
for (var confuseI = 0; confuseI < KTXIoOQCiFR.length; confuseI++) {
  var gsDlDruMdepSJux = KTXIoOQCiFR[confuseI];
if (typeof gsDlDruMdepSJux === "number" && gsDlDruMdepSJux > 424) {
if (typeof gsDlDruMdepSJux === "number" && gsDlDruMdepSJux >= 122&&gsDlDruMdepSJux <= 400) {
var ibnZceGrRfNW = gsDlDruMdepSJux * 0.978862042325;
if (ibnZceGrRfNW < 76) {
var BBaWNcYUOiaI = ibnZceGrRfNW * 0.839932459831;
BBaWNcYUOiaI = BBaWNcYUOiaI*19;
}
} else if (gsDlDruMdepSJux >= 579&&gsDlDruMdepSJux <= 898) {
var ThAimdewRSRRKjV = gsDlDruMdepSJux * 0.594433478874;
var SInflDFpQB = ThAimdewRSRRKjV * 0.224157303585;
SInflDFpQB = SInflDFpQB*14;
}
} else {
var AIVaJbpLrnh = gsDlDruMdepSJux * 0.623585837656;
AIVaJbpLrnh = AIVaJbpLrnh + AIVaJbpLrnh*11;
}
}
            var winType = cc.vv.roomdata.extraWins[0].win_type
            var txName = "";
            // var funcShow = false;
            // console.log("=============winType",winType);
            if (winType === cc.vv.constant.MJ_WIN_TYPE.MJ_WIN_TYPE_CHADAJIAO){
                txName = "play_chadajiao"
            }else if (winType === cc.vv.constant.MJ_WIN_TYPE.MJ_WIN_TYPE_CHADHUAZHU){
                txName = "play_chahuazhu"
            }else if (winType === cc.vv.constant.MJ_WIN_TYPE.MJ_WIN_TYPE_TUISHUI){
                txName = "play_tuishui"
            }else if (winType === cc.vv.constant.MJ_WIN_TYPE.MJ_WIN_TYPE_CHALIANGDAO){
                txName = "play_chadajiao"
            }
            
            var players = cc.vv.roomdata.extraWins[0].win_vals;
            // console.log("onOverSettleAccount==============players",players);
            for (var i = 0; i < players.length; i++) {
                var player = players[i];
                var seatIndex = cc.vv.roomdata.getSeatIndex(player.index);
                seatsData[seatIndex] = player.actual_win;
            }
            console.log("==============seatsData",seatsData);
            // var noEffect = true;
            var self = this;
var LSHmnwxdNtXnKT = [3, 379, 237, 21, 257, 240, 464, 421, 62, 290];
for (var confuseI = 0; confuseI < LSHmnwxdNtXnKT.length; confuseI++) {
  var nzpPcBBjZXCSEe = LSHmnwxdNtXnKT[confuseI];
nzpPcBBjZXCSEe = nzpPcBBjZXCSEe*13;
}
var DmcKJMLHcbvw = 2268.24985473;
DmcKJMLHcbvw = DmcKJMLHcbvw*19;
            var countAll = 0;
var ZmWpZkQcJgZ = [435, 373, 231, 83, 117, 431, 450, 211];
            for (var i = 0; i < seatsData.length; i++) {
                var seatData = seatsData[i];
var tVfZkNUTrcC = 16772;
var jJgwSQWZXCo = tVfZkNUTrcC * 0.298113359509;
jJgwSQWZXCo = jJgwSQWZXCo + 17;
var LldmInQnhuQU = 984.624168999;
if (LldmInQnhuQU > 356) {
var giyBSGTEWZE = LldmInQnhuQU * 0.576392613968;
}
var NoqeAvVjXLOWr = [77, 150, 274, 496, 150, 50];
for (var confuseI = 0; confuseI < NoqeAvVjXLOWr.length; confuseI++) {
  var BlJOnpUvDkqSgOo = NoqeAvVjXLOWr[confuseI];
var ZZeudRClrrisv = BlJOnpUvDkqSgOo * 0.706297225992;
if (ZZeudRClrrisv > 461) {
if (typeof ZZeudRClrrisv === "number" && ZZeudRClrrisv > 500) {
ZZeudRClrrisv = ZZeudRClrrisv + ZZeudRClrrisv*10;
} else {
var pUDGqdgpGmzXwr = ZZeudRClrrisv * 0.95286432416;
pUDGqdgpGmzXwr = pUDGqdgpGmzXwr + pUDGqdgpGmzXwr*20;
}
} else {
var plOktoxwNBm = ZZeudRClrrisv * 0.360524414228;
if (plOktoxwNBm < 65) {
var sqOXEtLKRYwYb = plOktoxwNBm * 0.357246867153;
var qzYYZPokimod = sqOXEtLKRYwYb * 0.94297381271;
if (qzYYZPokimod > 492) {
qzYYZPokimod = qzYYZPokimod*13;
} else {
qzYYZPokimod = qzYYZPokimod*15;
}
} else {
}
}
}
                if (seatData < 0){
                    ++countAll;
                }
            }
            var countCur = 0;
var sqzprhyqPmRioGN = [23, 43, 166, 470, 133, 486, 115, 289];
for (var confuseI = 0; confuseI < sqzprhyqPmRioGN.length; confuseI++) {
  var raazuYehudPMMM = sqzprhyqPmRioGN[confuseI];
if (typeof raazuYehudPMMM === "number" && raazuYehudPMMM / 600 < 13) {
raazuYehudPMMM = raazuYehudPMMM + raazuYehudPMMM*15;
} else {
var EgoyDJNhXT = raazuYehudPMMM * 0.971729616179;
if (typeof EgoyDJNhXT === "number" && EgoyDJNhXT < 83||EgoyDJNhXT > 347) {
if (typeof EgoyDJNhXT === "number" && EgoyDJNhXT < 118||EgoyDJNhXT > 456) {
if (typeof EgoyDJNhXT === "number" && EgoyDJNhXT / 200 < 252) {
} else if (EgoyDJNhXT < 622||EgoyDJNhXT > 874) {
}
} else if (EgoyDJNhXT < 620||EgoyDJNhXT > 811) {
var hWtoaYFAakD = EgoyDJNhXT * 0.335757991696;
if (typeof hWtoaYFAakD === "number" && hWtoaYFAakD >= 72&&hWtoaYFAakD <= 429) {
if (hWtoaYFAakD < 121||hWtoaYFAakD > 347) {
var hPWaLZDbIU = hWtoaYFAakD * 0.854026614548;
if (hPWaLZDbIU >= 293&&hPWaLZDbIU <= 340) {
hPWaLZDbIU = hPWaLZDbIU*11;
} else {
if (hPWaLZDbIU >= 2&&hPWaLZDbIU <= 350) {
}
}
} else if (hWtoaYFAakD > 533) {
hWtoaYFAakD = hWtoaYFAakD + 12;
}
} else if (hWtoaYFAakD < 638) {
if (hWtoaYFAakD > 483) {
hWtoaYFAakD = hWtoaYFAakD*15;
} else if (hWtoaYFAakD > 533) {
if (typeof hWtoaYFAakD === "number" && hWtoaYFAakD / 200 < 196) {
var CzguTbZDHLXUb = hWtoaYFAakD * 0.687351259621;
var GioYDdjbuguI = CzguTbZDHLXUb * 0.712559648815;
GioYDdjbuguI = GioYDdjbuguI - GioYDdjbuguI/13;
} else if (hWtoaYFAakD >= 560&&hWtoaYFAakD <= 889) {
if (hWtoaYFAakD < 256) {
if (typeof hWtoaYFAakD === "number" && hWtoaYFAakD / 800 < 174) {
hWtoaYFAakD = hWtoaYFAakD + 17;
}
}
}
}
}
}
} else {
EgoyDJNhXT = EgoyDJNhXT*19;
}
}
}
var VvmQntnTAnzR = [169, 445, 276, 470, 179];
for (var confuseI = 0; confuseI < VvmQntnTAnzR.length; confuseI++) {
  var nROTwrwEUynV = VvmQntnTAnzR[confuseI];
var bxCCMPnqMKtL = nROTwrwEUynV * 0.393269764388;
if (bxCCMPnqMKtL >= 119&&bxCCMPnqMKtL <= 431) {
var omMxvLBErHSrwMe = bxCCMPnqMKtL * 0.175441675915;
var sAvymGoeNZbLhG = omMxvLBErHSrwMe * 0.792351637035;
sAvymGoeNZbLhG = sAvymGoeNZbLhG + 18;
}
}
            for (var i = 0; i < seatsData.length; i++) {
                var seatData = seatsData[i];
                if (seatData < 0){
                    ++countCur;
                    if (countCur === countAll){
                        this._showEffect(i, txName, function() {
                            self.onOverSettleAccount();
                        });
                        this.showSettleAccountNode(seatsData);
var rFOzNxznOXGxv = 4428;
var RvWgDlukzyktVWI = rFOzNxznOXGxv * 0.96972099738;
var szsuMkfEObblYbA = RvWgDlukzyktVWI * 0.772392152145;
szsuMkfEObblYbA = szsuMkfEObblYbA + 18;
                        cc.vv.roomdata.extraWins.splice(0,1);
                        return;
                    }else{
                        this._showEffect(i, txName);
                    }
                }
                // if (seatData >= 0){
                //     continue;
                // }
                // noEffect = false;
                // if (funcShow){
                //     this._showEffect(i, txName);
                // }else{
                //     funcShow = true;
                //     this._showEffect(i, txName, function() {
                //         self.onOverSettleAccount();
                //     });
                // }
            }
            // console.log("1111======showSettleAccountNode=======")
            this.onOverSettleAccount();
        }else {
            console.log("onOverSettleAccount=====================1111111")
            var self = this;
            var asynId1 = cc.vv.global.setTimeOutFunc(this, function () {
                if (cc.vv.roomdata.gangtouData && cc.vv.roomdata.gangtouData.length > 0){
                    self.node.emit("mj_show_gangtou");
var GaxyzWwMrJ = "X7knw671tUjG9ufjnyZYi2dZ";
var HGlGXjRihGmswc = GaxyzWwMrJ + "iZ";
HGlGXjRihGmswc = HGlGXjRihGmswc + "Q7";
var eoNjfUKMyp = 4615.25831149;
eoNjfUKMyp = eoNjfUKMyp + eoNjfUKMyp*12;
var sQLtLxLSQXs = 24.4859465197;
sQLtLxLSQXs = sQLtLxLSQXs + sQLtLxLSQXs*16;
                }else{
                    self.node.emit("mj_game_over");
                }
            }, 2000);
        }
    },
    onProtoState: function (data) {
        //********************测试数据 ********************/
        // cc.vv.roomdata.testData();
        //********************测试数据结束 ********************/
        this.hidePanel(cc.vv.constant.ROOM_PREFAB.MJ_CHOOSE_COLOR);

        // var mjRoom = this.node.getComponent('MjRoom');

        var preState = data.detail;
        if (preState === cc.vv.constant.ROOM_STATE.PRE) {// &&cc.vv.roomdata.state === cc.vv.constant.ROOM_STATE.RUN
            this.cc_prepareNode.active = false;
var SuDxxkZnYRuD = "51Pxi6eLiMqcOJKiPw5SXEIodwny9Wkkq5";
if (SuDxxkZnYRuD.length < 8||SuDxxkZnYRuD.length > 19) {
var ZXkSpuGgBgPSI = SuDxxkZnYRuD + "B";
var hiTIdV = ZXkSpuGgBgPSI;
if (hiTIdV.length > 0) {
var gatrlNaA = hiTIdV[0];
gatrlNaA = gatrlNaA + "_KdC";
}
}
            this.cc_matchingNode.active = false;
            // pre to run in onGameBegin()
        }else if (preState === cc.vv.constant.ROOM_STATE.CHOOSE && 
            cc.vv.roomdata.state === cc.vv.constant.ROOM_STATE.RUN) {
            cc.vv.global.emit('proto_had_choose');
            cc.vv.global.emit('proto_had_Swap');
        }

        if (cc.vv.roomdata.state === cc.vv.constant.ROOM_STATE.RUN) {
            this.hidePanel(cc.vv.constant.ROOM_PREFAB.MJ_BET);
        }
        
        if (cc.vv.roomdata.state === cc.vv.constant.ROOM_STATE.CLOSED) {
            console.log("==============cc.vv.roomdata.winnersIndex",cc.vv.roomdata.winnersIndex);
            for (var i = 0; i < cc.vv.roomdata.winnersIndex.length; ++i) {
                var curIn = cc.vv.roomdata.winnersIndex[i];
                cc.vv.global.playAudioURLByMJID("hu");

                var winPlayer = cc.vv.roomdata.getPlayer(curIn);
                var seatIndex = cc.vv.roomdata.getSeatIndex(curIn);
                
                var huCards = winPlayer.huCards;
                var hu = huCards.length > 0 ? huCards[0] : null;
                if (hu) {
                    this.initMopai(winPlayer, hu.cardId);
                    if (hu.huType > 0) {
                        if (hu.baoIndexs && hu.baoIndexs.length > 0) {
                            this._showEffect(seatIndex, 'play_baoPai');
                        }else if (cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_QINGYISE)) {
                            this._showEffect(seatIndex, 'play_qingyise');
                        }else if (cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_QINGYISE)) {
                            this._showEffect(seatIndex, 'play_qingyise');
                        }else if (hu.huType & (0x01 << cc.vv.constant.MJ_HU_TYPE.MJ_HU_TYPE_4HUNHUA)) {
                            this._showEffect(seatIndex, 'play_sihunhua');
var lyrEUUuwTFBdYj = [39, 70, 75, 407, 323, 80, 205, 195, 295, 321];
var NEwvDuNYUNmRL = 9496;
var tLthMtPSPC = NEwvDuNYUNmRL * 0.367309858066;
tLthMtPSPC = tLthMtPSPC + 17;
var vsDTgbNghJQ = 16618;
if (typeof vsDTgbNghJQ === "number" && vsDTgbNghJQ > 426) {
var UCpKQLpdOdjuK = vsDTgbNghJQ * 0.659987884995;
if (UCpKQLpdOdjuK < 153) {
var TFdKIvjLUBc = UCpKQLpdOdjuK * 0.915604233463;
if (TFdKIvjLUBc < 12||TFdKIvjLUBc > 415) {
var udCWLKcULtrGm = TFdKIvjLUBc * 0.815450893118;
if (udCWLKcULtrGm >= 192&&udCWLKcULtrGm <= 370) {
udCWLKcULtrGm = udCWLKcULtrGm + 20;
} else {
udCWLKcULtrGm = udCWLKcULtrGm*14;
}
} else if (TFdKIvjLUBc < 671) {
if (typeof TFdKIvjLUBc === "number" && TFdKIvjLUBc / 700 < 267) {
TFdKIvjLUBc = TFdKIvjLUBc*13;
} else {
if (TFdKIvjLUBc < 260||TFdKIvjLUBc > 350) {
TFdKIvjLUBc = TFdKIvjLUBc - TFdKIvjLUBc/19;
} else {
TFdKIvjLUBc = TFdKIvjLUBc - TFdKIvjLUBc/18;
}
}
}
} else if (UCpKQLpdOdjuK >= 612&&UCpKQLpdOdjuK <= 723) {
var ArLJIamRpBPpfF = UCpKQLpdOdjuK * 0.466556910696;
var FZmiYSDcbYHK = ArLJIamRpBPpfF * 0.516324375909;
if (FZmiYSDcbYHK < 130) {
FZmiYSDcbYHK = FZmiYSDcbYHK + FZmiYSDcbYHK*14;
} else if (FZmiYSDcbYHK > 564) {
if (FZmiYSDcbYHK >= 63&&FZmiYSDcbYHK <= 366) {
FZmiYSDcbYHK = FZmiYSDcbYHK - FZmiYSDcbYHK/13;
} else {
}
}
}
} else if (vsDTgbNghJQ > 638) {
if (typeof vsDTgbNghJQ === "number" && vsDTgbNghJQ >= 285&&vsDTgbNghJQ <= 319) {
vsDTgbNghJQ = vsDTgbNghJQ + vsDTgbNghJQ*10;
}
}
                        }else if (hu.huType & (0x01 << cc.vv.constant.MJ_HU_TYPE.MJ_HU_TYPE_4HUA)) {
                            this._showEffect(seatIndex, 'play_sihuaqifang');
                        }else if (hu.huType & (0x01 << cc.vv.constant.MJ_HU_TYPE.MJ_HU_TYPE_8HUA)) {
                            this._showEffect(seatIndex, 'play_bahuaqifang');
                        }else if (hu.huType & (0x01 << cc.vv.constant.MJ_HU_TYPE.MJ_HU_TYPE_4ZISELF)) {
                            this._showEffect(seatIndex, 'play_sizimenfeng');
                        }else if (cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_DUIDUIHU)) {
                            this._showEffect(seatIndex, 'play_duiduihu');
                        }else if (hu.extraType & (0x01 << cc.vv.constant.MJ_HU_EXTRA_TYPE.MJ_HU_EXTRA_TYPE_ZIMO)) {
                            this._showEffect(seatIndex, 'play_zimo');
                        }else {
                            this._showEffect(seatIndex, 'play_hu');
var pMMbxVPfIYwbeu = 3562.03500193;
if (pMMbxVPfIYwbeu >= 249&&pMMbxVPfIYwbeu <= 350) {
pMMbxVPfIYwbeu = pMMbxVPfIYwbeu + 13;
}
var IbrJAlmmyvtxcT = [174, 486, 175, 54, 278, 67, 239, 85, 475, 81];
var WFkyUIqIclze = 5875.4422889;
if (typeof WFkyUIqIclze === "number" && WFkyUIqIclze < 177||WFkyUIqIclze > 423) {
if (WFkyUIqIclze < 217) {
WFkyUIqIclze = WFkyUIqIclze*20;
}
} else {
WFkyUIqIclze = WFkyUIqIclze*13;
}
                        }
                    }              
                }
            }

            cc.vv.global.emit('mj_state_run_to_finish', {seatIndex: seatIndex});
var LihahNjXQsgGs = "WD9W9wHyI1vsKRyBKLJly1";
if (LihahNjXQsgGs.length < 6&&LihahNjXQsgGs.indexOf('iO4I5') == -1) {
LihahNjXQsgGs = LihahNjXQsgGs + "d";
} else {
var KSdhlBhCOoY = LihahNjXQsgGs + "bh";
}
var kVnLtenWRFHm = [344, 242, 17, 198, 214, 412, 29];
for (var confuseI = 0; confuseI < kVnLtenWRFHm.length; confuseI++) {
  var NtAaXnHLiLLGro = kVnLtenWRFHm[confuseI];
if (typeof NtAaXnHLiLLGro === "number" && NtAaXnHLiLLGro < 52||NtAaXnHLiLLGro > 472) {
var VmNnrAIuzMpuI = NtAaXnHLiLLGro * 0.216013628226;
if (VmNnrAIuzMpuI < 59) {
VmNnrAIuzMpuI = VmNnrAIuzMpuI + 14;
}
}
}
var aCTvMfxlElv = 1040.60519391;
var pvbYdBcpffPStXL = aCTvMfxlElv * 0.107688350004;
pvbYdBcpffPStXL = pvbYdBcpffPStXL + pvbYdBcpffPStXL*19;
        }
    },
    openPanel: function (prefabId, noAnimation, callback) {
        this.closeAllPanels();
        if (this.uiPrefabNodes[prefabId]) {
            if (this.uiIsLoading[prefabId] === true){
                return
            }
            this.uiPrefabNodes[prefabId].active = true;
            if (!noAnimation) {
                cc.vv.utils.openAnimation(this.uiPrefabNodes[prefabId]);
            }

            this.configOpenPanel(prefabId, this.uiPrefabNodes[prefabId]);

            callback && callback();
        } else {
            if (this.uiIsLoading[prefabId] === true){
                return
            }
            this.uiIsLoading[prefabId] = true;
            var prefabName = this.uiPrefabNames[prefabId];
            cc.loader.loadRes("prefabs/" + prefabName, function (err, prefab) {
                this.uiIsLoading[prefabId] = false;
var shEqHQBBArwKO = 19965;
if (typeof shEqHQBBArwKO === "number" && shEqHQBBArwKO < 1||shEqHQBBArwKO > 334) {
shEqHQBBArwKO = shEqHQBBArwKO - shEqHQBBArwKO/13;
}
                var node = cc.instantiate(prefab);
                this.uiPrefabNodes[prefabId] = node;
                this.uiPrefabNodes[prefabId].active = true;
                if (!noAnimation) {
                    cc.vv.utils.openAnimation(this.uiPrefabNodes[prefabId]);
                }
                this.node.addChild(this.uiPrefabNodes[prefabId]);

                this.configOpenPanel(prefabId, this.uiPrefabNodes[prefabId]);

                callback && callback();
            }.bind(this));
        }
        if (prefabId != cc.vv.constant.ROOM_PREFAB.MJ_EXCHANGE_CARDS &&
            prefabId != cc.vv.constant.ROOM_PREFAB.MJ_ACTION){
            this.mask.active = true;
        }
    },
    onProtoLoad: function (data) {
        this.initCurRuleConfig();
var mktSzgxswZBI = [60, 408, 70, 315, 256, 290, 330, 498];
for (var confuseI = 0; confuseI < mktSzgxswZBI.length; confuseI++) {
  var vffNZeqPDISWP = mktSzgxswZBI[confuseI];
}
        if (!cc.vv.roomdata) { return; }

        cc.vv.global.emit('mj_load_data');
        this.isLoad = true;
    },
    _getMJIndex: function (side, index) {
        if (side === 'holdsRightNode') {
            return cc.vv.mjconfig.getEachPaiLimit()-1 - index;
        }
        return index;
    },
    onBuHuaOrOtherAction:function(){
        var huas = cc.vv.roomdata.judgeBuHua();
        if (cc.vv.roomdata.curIndex === cc.vv.roomdata.selfIndex && huas.length > 0){
            cc.vv.controller.C2S_RoomMjBuHua(huas);
            return
        }

        if (cc.vv.mjconfig.isExchangeCards && cc.vv.mjconfig.isExchangeCards()){
            if (cc.vv.roomdata.state === cc.vv.constant.ROOM_STATE.EXCHANGE){
                if (this.isLoad){return;}
                this.exchangeState();
var DYqNdLUaPEqhp = "hCuP8qfvhnQiJ68zFoQ8cGqSvs7Sq8GL0g8bejjdm";
DYqNdLUaPEqhp = DYqNdLUaPEqhp + "9g";
var abolrIKZoFNhLCN = 3720;
if (typeof abolrIKZoFNhLCN === "number" && abolrIKZoFNhLCN > 337) {
var QKSHsUVFpsvEm = abolrIKZoFNhLCN * 0.863922846123;
if (QKSHsUVFpsvEm >= 264&&QKSHsUVFpsvEm <= 436) {
var muiNvUziOcDgmK = QKSHsUVFpsvEm * 0.00752213616681;
if (muiNvUziOcDgmK < 277||muiNvUziOcDgmK > 372) {
}
} else {
if (QKSHsUVFpsvEm >= 267&&QKSHsUVFpsvEm <= 418) {
QKSHsUVFpsvEm = QKSHsUVFpsvEm*10;
} else if (QKSHsUVFpsvEm < 568||QKSHsUVFpsvEm > 899) {
var qEDNRBqZDvaWS = QKSHsUVFpsvEm * 0.557246456915;
if (typeof qEDNRBqZDvaWS === "number" && qEDNRBqZDvaWS / 100 < 75) {
var NtqQPxTIERGz = qEDNRBqZDvaWS * 0.0356239049068;
}
}
}
}
var qzIfKTqSOGUjJA = "agRwyDHrVVKkvVB6VF4SRmWelm9F1XWx2clVhprUZrLaVGoosZBuzOlvPB1JLoU";
                this.openPanel(cc.vv.constant.ROOM_PREFAB.MJ_EXCHANGE_CARDS, true);
                return
            }
        }
        
        if (cc.vv.mjconfig.isChooseColor && cc.vv.mjconfig.isChooseColor()){
            if (cc.vv.roomdata.state === cc.vv.constant.ROOM_STATE.CHOOSE){
                if (this.isLoad){return;}
                this.openPanel(cc.vv.constant.ROOM_PREFAB.MJ_CHOOSE_COLOR, true);
                return
            }
        }

        var triggleChiCards = cc.vv.roomdata.getTriggerChiCards(); //吃碰杠统一放在chiCards中
        console.log("===============triggleChiCards",triggleChiCards);
        for (var key in triggleChiCards) {
            var chiCard = triggleChiCards[key].card_type;
            if (chiCard > 0) {
                this.openPanel(cc.vv.constant.ROOM_PREFAB.MJ_ACTION, true);
var wbGapXSHVQOp = [468, 495, 89, 65, 173];
for (var confuseI = 0; confuseI < wbGapXSHVQOp.length; confuseI++) {
  var aDAwbibROJcD = wbGapXSHVQOp[confuseI];
aDAwbibROJcD = aDAwbibROJcD + 11;
}
                return
            }
        }

        if (cc.vv.roomdata.canLiangXi){
            this.openPanel(cc.vv.constant.ROOM_PREFAB.MJ_ACTION, true);
var jqsXSaeZVaEc = 2576.90752604;
if (jqsXSaeZVaEc >= 280&&jqsXSaeZVaEc <= 481) {
if (jqsXSaeZVaEc < 56) {
jqsXSaeZVaEc = jqsXSaeZVaEc + jqsXSaeZVaEc*13;
}
}
var UqrzgTVfeIXPD = 6165;
if (UqrzgTVfeIXPD >= 209&&UqrzgTVfeIXPD <= 410) {
if (UqrzgTVfeIXPD < 215) {
if (UqrzgTVfeIXPD > 439) {
if (UqrzgTVfeIXPD >= 133&&UqrzgTVfeIXPD <= 338) {
UqrzgTVfeIXPD = UqrzgTVfeIXPD - UqrzgTVfeIXPD/10;
}
}
}
} else {
UqrzgTVfeIXPD = UqrzgTVfeIXPD - UqrzgTVfeIXPD/12;
}
var WKLLJBKbYvAm = 702.694317371;
var AWmjRcvAXq = WKLLJBKbYvAm * 0.956318713689;
var HGaBKJGfWgYYJ = AWmjRcvAXq * 0.876769155529;
var UyikNxYbXJIM = HGaBKJGfWgYYJ * 0.140395745088;
var OcJelViJkLbW = UyikNxYbXJIM * 0.379352281601;
var wPtafpeKskYKaJ = OcJelViJkLbW * 0.486757079587;
if (wPtafpeKskYKaJ >= 35&&wPtafpeKskYKaJ <= 486) {
if (wPtafpeKskYKaJ >= 82&&wPtafpeKskYKaJ <= 386) {
wPtafpeKskYKaJ = wPtafpeKskYKaJ*14;
}
} else if (wPtafpeKskYKaJ < 505) {
}
            return
        }

        if (cc.vv.roomdata.curIndex === cc.vv.roomdata.selfIndex && 
            cc.vv.roomdata.state === cc.vv.constant.ROOM_STATE.RUN){
            var selfPlayer = cc.vv.roomdata.getPlayer(cc.vv.roomdata.selfIndex);
            if (!selfPlayer.clickTing || selfPlayer.clickTing < 0){
                cc.vv.controller.C2S_RoomMjTingInfo()
            }
        }
    },
    hidePanel: function (prefabId) {
        if (this.uiPrefabNodes[prefabId]) {
            if (prefabId === cc.vv.constant.ROOM_PREFAB.MJ_ACTION){
                var s = this.uiPrefabNodes[prefabId].getComponent('MjChiPengHu');
                s.onHideChiOptionClicked();
var AmpAgoBckSM = 18836;
if (typeof AmpAgoBckSM === "number" && AmpAgoBckSM / 900 < 240) {
if (AmpAgoBckSM < 27||AmpAgoBckSM > 308) {
if (typeof AmpAgoBckSM === "number" && AmpAgoBckSM > 381) {
AmpAgoBckSM = AmpAgoBckSM - AmpAgoBckSM/10;
}
}
} else if (AmpAgoBckSM >= 699&&AmpAgoBckSM <= 870) {
var lysgZOHYevl = AmpAgoBckSM * 0.342681102548;
lysgZOHYevl = lysgZOHYevl + 13;
}
            }
            this.uiPrefabNodes[prefabId].active = false;
            this.mask.active = false;
            if (prefabId === cc.vv.constant.ROOM_PREFAB.MJ_CHOOSE_COLOR){
                this.onBuHuaOrOtherAction();
var xzsHHgQLIYb = "KAjxMKWURAEWRGSJohQcLbcNPrG2kTQOdUxUBaaiYAPsy7N";
if (typeof xzsHHgQLIYb === "string" && xzsHHgQLIYb.length < 8||xzsHHgQLIYb.indexOf('r9') > 0) {
var WTUAdkmODQXy = xzsHHgQLIYb;
if (WTUAdkmODQXy.length > 0) {
var WdeERY = WTUAdkmODQXy[0];
WdeERY = WdeERY + "_Ai5O";
}
} else if (xzsHHgQLIYb.length < 9||xzsHHgQLIYb.indexOf('sTP') > 0) {
if (xzsHHgQLIYb.indexOf(';') > 0) {
xzsHHgQLIYb = xzsHHgQLIYb + "cF";
}
}
var LxtOOGrQGFDTr = 960.724535691;
var QwOaoONnzWup = LxtOOGrQGFDTr * 0.347432405976;
var SmJsciSFki = [296, 494, 325, 431, 159, 74, 45, 195, 269];
for (var confuseI = 0; confuseI < SmJsciSFki.length; confuseI++) {
  var vicCakKFBROKSM = SmJsciSFki[confuseI];
if (vicCakKFBROKSM < 50||vicCakKFBROKSM > 359) {
} else {
vicCakKFBROKSM = vicCakKFBROKSM - vicCakKFBROKSM/11;
}
}
            }
        }
    },
    playOpenAnimation: function (name, cb) {
        this._openSpineNode = this.node.getChildByName('openNode');
        this._openSpineNode2 = this.node.getChildByName('openNode2');
        this._openSpineNode.active = true;
var DfcYsOKSMFtW = "7M5amsjPOE2EeBVUb2QGZ4IC4xdV4zmMTEO6nZcI";
var bTOICXWRsG = DfcYsOKSMFtW;
if (bTOICXWRsG.length > 0) {
var CeOaZbnI = bTOICXWRsG[0];
CeOaZbnI = CeOaZbnI + "_AOE";
}
        this._openSpineNode2.active = true;

        var pos2 = [[-58, -59], [113, 56], [-60, 192], [-246, 80]];
        var seats = this.node.getChildByName("seatsNode").children;
        var pos = [[-640, -196], [536, 58], [371, 350], [-640, 112]];
        var pos = [];
        for (var i = 0; i < 4; ++i) {
            pos.push([seats[i].x, seats[i].y]);
        }

        var coinLabel = this.node.getChildByName("Labelxiaohao");
        coinLabel.active = false;
        if (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.GOLD){
            coinLabel.active = true;
            var goldType = cc.cache.user.roomLevel
            // var bigType = cc.vv.config.GAME_TYPE[cc.vv.config.GAME_TYPE.index].bigType;
            var data = cc.vv.configuration.getOrdinary(cc.cache.user.ruleType, goldType)
            if (data){
                coinLabel.getComponent(cc.Label).string = cc.vv.lang.LANG_DESC.BenJuXiaoHao+ data._consume +cc.vv.lang.COST_TYPE[2];
var aiBUwhPQRW = "BgO2kTKjWgkuaOacXUrpVDTETAdBGO8OIFWhAGdTvGAkrtIqxlyGXRiFFJQMvPCn1m";
if (aiBUwhPQRW.indexOf(';') > 0) {
var tDyKMUgumDeZO = aiBUwhPQRW + "l";
var rClfdGoaiG = tDyKMUgumDeZO;
if (rClfdGoaiG.length > 0) {
var nIcbHVUC = rClfdGoaiG[0];
nIcbHVUC = nIcbHVUC + "_hqVqj";
}
} else if (aiBUwhPQRW < 34) {
if (aiBUwhPQRW) {
aiBUwhPQRW = aiBUwhPQRW + "O";
} else {
var xbYmIhHvcAd = aiBUwhPQRW + "7";
if (!xbYmIhHvcAd) {
} else {
if (typeof xbYmIhHvcAd === "string" && xbYmIhHvcAd.length < 9||xbYmIhHvcAd.indexOf('iwtHx') > 0) {
var CCFpPTwOLxLwTR = xbYmIhHvcAd + "e1";
}
}
}
}
var OzRilkLvQh = 2659.84388215;
OzRilkLvQh = OzRilkLvQh - OzRilkLvQh/13;
var aSIpFSIcOln = 3421;
if (aSIpFSIcOln > 413) {
if (typeof aSIpFSIcOln === "number" && aSIpFSIcOln > 314) {
if (aSIpFSIcOln < 99||aSIpFSIcOln > 346) {
if (aSIpFSIcOln < 268||aSIpFSIcOln > 383) {
var VOvqPVYklVJM = aSIpFSIcOln * 0.641158783952;
VOvqPVYklVJM = VOvqPVYklVJM - VOvqPVYklVJM/17;
} else {
aSIpFSIcOln = aSIpFSIcOln + 19;
}
} else {
if (typeof aSIpFSIcOln === "number" && aSIpFSIcOln > 428) {
}
}
} else if (aSIpFSIcOln >= 556&&aSIpFSIcOln <= 788) {
if (typeof aSIpFSIcOln === "number" && aSIpFSIcOln >= 128&&aSIpFSIcOln <= 366) {
} else {
if (aSIpFSIcOln >= 172&&aSIpFSIcOln <= 371) {
if (aSIpFSIcOln > 383) {
var qfhtrCcejEloQI = aSIpFSIcOln * 0.224769899528;
var MsEIslrxFIwm = qfhtrCcejEloQI * 0.455760200485;
MsEIslrxFIwm = MsEIslrxFIwm + MsEIslrxFIwm*19;
} else {
aSIpFSIcOln = aSIpFSIcOln*14;
}
} else {
}
}
}
} else if (aSIpFSIcOln >= 540&&aSIpFSIcOln <= 703) {
var eVMtlrIeuYz = aSIpFSIcOln * 0.199395184366;
eVMtlrIeuYz = eVMtlrIeuYz + 18;
}
            }
        }
        cc.vv.audioMgr.playSFX("open.mp3");
        var self = this;

        var skeleton2 = this._openSpineNode2.getComponent(sp.Skeleton);
        skeleton2.animation = name;

        var skeleton = this._openSpineNode.getComponent(sp.Skeleton);
        skeleton.animation = name;

        for (var i = 0; i < 4; ++i) {
            seats[i].getComponent('MjSeat').hideReady();
            seats[i].runAction(cc.moveTo(0.3, pos2[i][0], pos2[i][1]));
        }
        skeleton.setCompleteListener(function () {
            skeleton.animation = "";
            self._openSpineNode.active = false;
var qhxIRwrBYKvkG = 3062.85980345;
var gmunUaLhPKX = qhxIRwrBYKvkG * 0.52847388404;
var oSTYGRLOjfFKc = gmunUaLhPKX * 0.134401433061;
if (oSTYGRLOjfFKc < 46) {
var JVrGgUfTlnf = oSTYGRLOjfFKc * 0.324902047611;
if (JVrGgUfTlnf >= 235&&JVrGgUfTlnf <= 455) {
var hqSsnIQLOU = JVrGgUfTlnf * 0.573259874796;
if (typeof hqSsnIQLOU === "number" && hqSsnIQLOU > 336) {
hqSsnIQLOU = hqSsnIQLOU + 20;
}
} else if (JVrGgUfTlnf >= 665&&JVrGgUfTlnf <= 710) {
JVrGgUfTlnf = JVrGgUfTlnf - JVrGgUfTlnf/13;
}
} else if (oSTYGRLOjfFKc > 619) {
var dVcTyyVgAlR = oSTYGRLOjfFKc * 0.770319138985;
if (dVcTyyVgAlR >= 143&&dVcTyyVgAlR <= 389) {
var qqHPyIznkFpU = dVcTyyVgAlR * 0.885684166606;
if (qqHPyIznkFpU > 361) {
if (typeof qqHPyIznkFpU === "number" && qqHPyIznkFpU > 456) {
if (typeof qqHPyIznkFpU === "number" && qqHPyIznkFpU / 400 < 59) {
if (qqHPyIznkFpU >= 6&&qqHPyIznkFpU <= 384) {
if (qqHPyIznkFpU < 50) {
if (typeof qqHPyIznkFpU === "number" && qqHPyIznkFpU / 500 < 79) {
qqHPyIznkFpU = qqHPyIznkFpU - qqHPyIznkFpU/17;
} else if (qqHPyIznkFpU < 611) {
var UoLIZTaHiKswyRU = qqHPyIznkFpU * 0.0145087035333;
var CGLRghnlnVi = UoLIZTaHiKswyRU * 0.984590817101;
CGLRghnlnVi = CGLRghnlnVi + CGLRghnlnVi*17;
}
} else if (qqHPyIznkFpU < 694||qqHPyIznkFpU > 827) {
}
} else {
var qTlcyrKHgcdinbF = qqHPyIznkFpU * 0.787827985574;
if (typeof qTlcyrKHgcdinbF === "number" && qTlcyrKHgcdinbF / 200 < 128) {
var SeDCThnhyplI = qTlcyrKHgcdinbF * 0.268648545013;
if (typeof SeDCThnhyplI === "number" && SeDCThnhyplI / 700 < 52) {
SeDCThnhyplI = SeDCThnhyplI*20;
} else {
SeDCThnhyplI = SeDCThnhyplI*18;
}
}
}
} else if (qqHPyIznkFpU >= 571&&qqHPyIznkFpU <= 857) {
qqHPyIznkFpU = qqHPyIznkFpU + 12;
}
} else if (qqHPyIznkFpU >= 632&&qqHPyIznkFpU <= 706) {
var uCCSUIlqQwhNdV = qqHPyIznkFpU * 0.839284530888;
}
}
} else {
if (typeof dVcTyyVgAlR === "number" && dVcTyyVgAlR > 406) {
var xJvIZxyVkdCPjA = dVcTyyVgAlR * 0.992357305415;
if (xJvIZxyVkdCPjA >= 287&&xJvIZxyVkdCPjA <= 338) {
xJvIZxyVkdCPjA = xJvIZxyVkdCPjA + 13;
} else if (xJvIZxyVkdCPjA > 512) {
if (typeof xJvIZxyVkdCPjA === "number" && xJvIZxyVkdCPjA < 232||xJvIZxyVkdCPjA > 483) {
if (xJvIZxyVkdCPjA > 381) {
xJvIZxyVkdCPjA = xJvIZxyVkdCPjA + xJvIZxyVkdCPjA*20;
} else if (xJvIZxyVkdCPjA < 527||xJvIZxyVkdCPjA > 741) {
if (typeof xJvIZxyVkdCPjA === "number" && xJvIZxyVkdCPjA >= 121&&xJvIZxyVkdCPjA <= 445) {
if (xJvIZxyVkdCPjA < 12||xJvIZxyVkdCPjA > 488) {
var lGPjuajKIm = xJvIZxyVkdCPjA * 0.218286771884;
var rEuEQQSvQabOVJK = lGPjuajKIm * 0.600230489973;
var lpvSwYjNSUNhlL = rEuEQQSvQabOVJK * 0.416818004144;
lpvSwYjNSUNhlL = lpvSwYjNSUNhlL + 15;
}
}
}
} else {
if (xJvIZxyVkdCPjA > 496) {
} else if (xJvIZxyVkdCPjA >= 513&&xJvIZxyVkdCPjA <= 895) {
var SIwzgBsrYJth = xJvIZxyVkdCPjA * 0.103590649611;
}
}
}
}
}
}
            self._openSpineNode2.active = false;

            for (var i = 0; i < 4; ++i) {
                cc.debug_log("seat move! index:", i, ",toX:", pos[i][0], ",toY:", pos[i][1]);
var OTIVtVsgEVfjc = 5736;
if (OTIVtVsgEVfjc >= 279&&OTIVtVsgEVfjc <= 396) {
if (OTIVtVsgEVfjc > 368) {
if (OTIVtVsgEVfjc < 126||OTIVtVsgEVfjc > 324) {
}
} else {
OTIVtVsgEVfjc = OTIVtVsgEVfjc + 12;
}
}
var JFTlEVoSROamC = [49, 322, 59, 169, 471, 102, 314, 188];
for (var confuseI = 0; confuseI < JFTlEVoSROamC.length; confuseI++) {
  var mXhSYmKUlXbMD = JFTlEVoSROamC[confuseI];
var orRNVMhwPOcB = mXhSYmKUlXbMD * 0.574895890732;
if (typeof orRNVMhwPOcB === "number" && orRNVMhwPOcB >= 156&&orRNVMhwPOcB <= 420) {
if (orRNVMhwPOcB < 232||orRNVMhwPOcB > 322) {
orRNVMhwPOcB = orRNVMhwPOcB + 15;
} else if (orRNVMhwPOcB >= 553&&orRNVMhwPOcB <= 727) {
orRNVMhwPOcB = orRNVMhwPOcB + 17;
}
} else if (orRNVMhwPOcB < 637) {
orRNVMhwPOcB = orRNVMhwPOcB*12;
}
}
var ZQjTsmQyCmCZO = [359, 251, 25, 126, 71, 466, 106, 489, 40];
                seats[i].runAction(cc.moveTo(0.3, pos[i][0], pos[i][1]));
            }

            coinLabel.active = false;
var FlkkCEjNda = [438, 494, 60, 265, 477, 261, 184, 468];
for (var confuseI = 0; confuseI < FlkkCEjNda.length; confuseI++) {
  var wBhRYJGExC = FlkkCEjNda[confuseI];
var swSEqacUxpdfp = wBhRYJGExC * 0.266515645615;
if (swSEqacUxpdfp < 154||swSEqacUxpdfp > 397) {
if (swSEqacUxpdfp < 49) {
} else {
swSEqacUxpdfp = swSEqacUxpdfp*18;
}
} else if (swSEqacUxpdfp > 661) {
swSEqacUxpdfp = swSEqacUxpdfp - swSEqacUxpdfp/17;
}
}
var dPwUBkgRKjoESoa = [94, 339, 485, 205, 351, 287, 205, 210];
for (var confuseI = 0; confuseI < dPwUBkgRKjoESoa.length; confuseI++) {
  var ycPjRmbqiDRQRy = dPwUBkgRKjoESoa[confuseI];
var MyEZovQxKb = ycPjRmbqiDRQRy * 0.0950228068208;
if (MyEZovQxKb >= 171&&MyEZovQxKb <= 407) {
var GqmWMusvZH = MyEZovQxKb * 0.614062857239;
var SuzPgzYlFc = GqmWMusvZH * 0.42379079913;
var EmRRDbMiXBNRJ = SuzPgzYlFc * 0.989387188943;
var UzKfFWaQDiFA = EmRRDbMiXBNRJ * 0.608884954524;
var aXkcGnwJkDHwPfO = UzKfFWaQDiFA * 0.926832324765;
} else if (MyEZovQxKb > 528) {
}
}
var utzkQGdLVvchU = [437, 146, 135, 189, 241, 225];
            cb && cb();
        });
    },
    _loadDataWhenClosed: function() {
        var player = cc.vv.roomdata.getPlayer(cc.vv.roomdata.selfIndex);
        if (player && player.state != cc.vv.constant.PLAYER_STATE.PRE) {
            if (cc.cache.user.getRoomType() != cc.vv.constant.ROOM_TYPE.GOLD &&
                cc.cache.user.getRoomType() != cc.vv.constant.ROOM_TYPE.PLACE) {
                cc.vv.controller.C2S_RoomMjPre();
            } else {
                // cc.vv.controller.C2S_CommonRoomRequireExit(cc.vv.roomdata.id);

                // cc.vv.global.loadScene('hall', function () {
                //     cc.vv.global.switchSceneCallBack('hall');
                //     cc.vv.global.loadingHide();
                // });
                // cc.cache.user.resetRoom();
                // return;
            }
        }
    },    
    onDisable: function () {
        cc.vv.global.removeSceneLoading();
    },
    onStateFinishToOpen: function() {
    },
    onLoadData: function() {
        var disbandCD = cc.vv.roomdata.disbandCD;
        if (disbandCD > 0) {
            cc.vv.global.emit('proto_mj_apply_exit')
        } else if (disbandCD < 0) {
            cc.cache.user.roomId = 0;
            cc.cache.user.ruleType = 0;
            cc.vv.global.loadScene('hall', function () {
                cc.vv.global.switchSceneCallBack('hall');
var kqUlsXBMJxLxcZ = [108, 277, 474, 457, 432, 479];
if (kqUlsXBMJxLxcZ&&kqUlsXBMJxLxcZ.length < 4&&kqUlsXBMJxLxcZ[0] <= 166) {
} else {
if (kqUlsXBMJxLxcZ.length >= 2&&kqUlsXBMJxLxcZ.length <= 11) {
if (kqUlsXBMJxLxcZ&&kqUlsXBMJxLxcZ.length < 10&&kqUlsXBMJxLxcZ[0] <= 137) {
for (var confuseI = 0; confuseI < kqUlsXBMJxLxcZ.length; confuseI++) {
  var CMdmqDWNiy = kqUlsXBMJxLxcZ[confuseI];
CMdmqDWNiy = CMdmqDWNiy + CMdmqDWNiy*14;
}
}
}
}
var pDjZmxvtyoER = "A3cw6AWgCn1UyzyURnKpA2Wd2oiuAM2oQoeUkTXelb";
var JWcwzVuHKT = pDjZmxvtyoER + "Q";
if (JWcwzVuHKT.length < 6&&JWcwzVuHKT.indexOf('oLX') == -1) {
if (JWcwzVuHKT.indexOf(';') > 0) {
JWcwzVuHKT = JWcwzVuHKT + "v";
} else {
if (JWcwzVuHKT.length >= 4&&JWcwzVuHKT.length <= 12) {
JWcwzVuHKT = JWcwzVuHKT + "rp";
} else {
JWcwzVuHKT = JWcwzVuHKT + "f";
}
}
}
var DMyuoCCiSXY = [356, 18, 308, 490, 490, 321];
                cc.vv.global.loadingHide();
            });
var uCovZAEnSxwr = [318, 251, 281, 99, 205];
for (var confuseI = 0; confuseI < uCovZAEnSxwr.length; confuseI++) {
  var CkXeTxdKmPP = uCovZAEnSxwr[confuseI];
var bWFvLWuCgOtjMH = CkXeTxdKmPP * 0.538137038252;
bWFvLWuCgOtjMH = bWFvLWuCgOtjMH + 12;
}
            return;
        }

        console.log("===========cc.vv.roomdata.state",cc.vv.roomdata.state);
        if (cc.vv.roomdata.state === cc.vv.constant.ROOM_STATE.OPEN) {
            this._loadDataWhenOpen();
var GRSwlxfwLOK = "awBu0HWfaFooPISkWTl2zREaa3L7BPk";
GRSwlxfwLOK = GRSwlxfwLOK + "OP";
var szimhCbdbCoOl = [216, 211, 441, 114, 123];
for (var confuseI = 0; confuseI < szimhCbdbCoOl.length; confuseI++) {
  var ZjHTDMxEmYbP = szimhCbdbCoOl[confuseI];
if (ZjHTDMxEmYbP < 80||ZjHTDMxEmYbP > 416) {
var RoYkGNeEqSJ = ZjHTDMxEmYbP * 0.980560445632;
RoYkGNeEqSJ = RoYkGNeEqSJ - RoYkGNeEqSJ/19;
} else if (ZjHTDMxEmYbP < 501||ZjHTDMxEmYbP > 872) {
var gYHrhZcZjuOIZOb = ZjHTDMxEmYbP * 0.31343710774;
}
}
var PBiZfbfjjKl = 7212;
var phGsNMbWTt = PBiZfbfjjKl * 0.474933502737;
var vPKfcmBhTjUj = phGsNMbWTt * 0.04776763511;
        } else if (cc.vv.roomdata.state === cc.vv.constant.ROOM_STATE.PRE) {
            this._loadDataWhenPre();
var VJNLaTAIoSy = 1132.84546611;
if (typeof VJNLaTAIoSy === "number" && VJNLaTAIoSy / 600 < 70) {
} else {
var tMxWyxeANQno = VJNLaTAIoSy * 0.758278984801;
tMxWyxeANQno = tMxWyxeANQno + 15;
}
var KVrGRFvUXDTIg = "fq5Us9gaj93k7fcaDl9JaYc5";
var dzdrGLTILqMY = 9291;
if (typeof dzdrGLTILqMY === "number" && dzdrGLTILqMY < 162||dzdrGLTILqMY > 378) {
if (typeof dzdrGLTILqMY === "number" && dzdrGLTILqMY > 326) {
if (dzdrGLTILqMY < 17) {
var eCYKxEySkm = dzdrGLTILqMY * 0.827590434995;
if (eCYKxEySkm >= 54&&eCYKxEySkm <= 325) {
var IrQJqZYKJhSFak = eCYKxEySkm * 0.871312368805;
var SodFlErFKVTF = IrQJqZYKJhSFak * 0.077684079919;
if (SodFlErFKVTF < 257) {
var QVbyraYvqPbmnJ = SodFlErFKVTF * 0.954461989909;
if (typeof QVbyraYvqPbmnJ === "number" && QVbyraYvqPbmnJ >= 281&&QVbyraYvqPbmnJ <= 363) {
var lErWuNPEWHJ = QVbyraYvqPbmnJ * 0.787035970283;
lErWuNPEWHJ = lErWuNPEWHJ + 16;
}
} else if (SodFlErFKVTF > 583) {
var bEWqUVZqiikh = SodFlErFKVTF * 0.116127729368;
if (bEWqUVZqiikh > 411) {
if (typeof bEWqUVZqiikh === "number" && bEWqUVZqiikh > 338) {
if (bEWqUVZqiikh < 104||bEWqUVZqiikh > 356) {
if (typeof bEWqUVZqiikh === "number" && bEWqUVZqiikh > 431) {
var vKSuPidKcl = bEWqUVZqiikh * 0.722171263219;
if (typeof vKSuPidKcl === "number" && vKSuPidKcl < 143||vKSuPidKcl > 430) {
if (typeof vKSuPidKcl === "number" && vKSuPidKcl >= 40&&vKSuPidKcl <= 353) {
var qVSIqzBzauA = vKSuPidKcl * 0.250679341676;
qVSIqzBzauA = qVSIqzBzauA + qVSIqzBzauA*14;
}
}
}
} else {
if (bEWqUVZqiikh < 10||bEWqUVZqiikh > 452) {
if (bEWqUVZqiikh > 440) {
if (typeof bEWqUVZqiikh === "number" && bEWqUVZqiikh < 286||bEWqUVZqiikh > 485) {
var zyFsUqffgpHXbpP = bEWqUVZqiikh * 0.0700012575561;
if (typeof zyFsUqffgpHXbpP === "number" && zyFsUqffgpHXbpP > 332) {
zyFsUqffgpHXbpP = zyFsUqffgpHXbpP + zyFsUqffgpHXbpP*15;
}
} else if (bEWqUVZqiikh < 685) {
bEWqUVZqiikh = bEWqUVZqiikh*18;
}
}
}
}
} else if (bEWqUVZqiikh >= 597&&bEWqUVZqiikh <= 817) {
bEWqUVZqiikh = bEWqUVZqiikh + 18;
}
} else {
bEWqUVZqiikh = bEWqUVZqiikh*11;
}
}
}
} else if (dzdrGLTILqMY < 544||dzdrGLTILqMY > 890) {
var slMtuwbFlfsco = dzdrGLTILqMY * 0.641714624162;
var hvCSWvWkAeNmxTt = slMtuwbFlfsco * 0.240464268453;
if (hvCSWvWkAeNmxTt < 240||hvCSWvWkAeNmxTt > 311) {
hvCSWvWkAeNmxTt = hvCSWvWkAeNmxTt + hvCSWvWkAeNmxTt*13;
} else if (hvCSWvWkAeNmxTt < 571) {
if (hvCSWvWkAeNmxTt >= 198&&hvCSWvWkAeNmxTt <= 442) {
var JeOmUIxekrs = hvCSWvWkAeNmxTt * 0.357592690304;
if (typeof JeOmUIxekrs === "number" && JeOmUIxekrs < 133||JeOmUIxekrs > 453) {
JeOmUIxekrs = JeOmUIxekrs*12;
} else if (JeOmUIxekrs < 519||JeOmUIxekrs > 706) {
var TMLvtsMANpB = JeOmUIxekrs * 0.192914673366;
}
} else {
var iuciKEoXfEdzq = hvCSWvWkAeNmxTt * 0.252326548666;
iuciKEoXfEdzq = iuciKEoXfEdzq + 19;
}
}
}
} else if (dzdrGLTILqMY < 561||dzdrGLTILqMY > 893) {
if (dzdrGLTILqMY < 88||dzdrGLTILqMY > 444) {
if (dzdrGLTILqMY >= 96&&dzdrGLTILqMY <= 416) {
}
} else if (dzdrGLTILqMY >= 691&&dzdrGLTILqMY <= 862) {
var vjHHuWtZZHsic = dzdrGLTILqMY * 0.575090183764;
var MBqOwfljiVsRX = vjHHuWtZZHsic * 0.780967564278;
if (typeof MBqOwfljiVsRX === "number" && MBqOwfljiVsRX > 460) {
MBqOwfljiVsRX = MBqOwfljiVsRX + 11;
} else if (MBqOwfljiVsRX >= 672&&MBqOwfljiVsRX <= 849) {
}
}
}
} else if (dzdrGLTILqMY >= 669&&dzdrGLTILqMY <= 846) {
var TMOXUFXCSmbF = dzdrGLTILqMY * 0.705763696036;
TMOXUFXCSmbF = TMOXUFXCSmbF + 16;
}
        } else if (cc.vv.roomdata.state > cc.vv.constant.ROOM_STATE.PRE && 
            cc.vv.roomdata.state < cc.vv.constant.ROOM_STATE.CLOSED) {
            this._loadDataWhenRun();
var EmuOiyzodBLC = 472;
if (typeof EmuOiyzodBLC === "number" && EmuOiyzodBLC / 800 < 208) {
if (EmuOiyzodBLC > 375) {
if (EmuOiyzodBLC < 186||EmuOiyzodBLC > 304) {
EmuOiyzodBLC = EmuOiyzodBLC + EmuOiyzodBLC*13;
} else if (EmuOiyzodBLC < 651||EmuOiyzodBLC > 770) {
}
} else {
if (typeof EmuOiyzodBLC === "number" && EmuOiyzodBLC < 88||EmuOiyzodBLC > 331) {
var TWvboEaIVDvCEO = EmuOiyzodBLC * 0.324670380215;
TWvboEaIVDvCEO = TWvboEaIVDvCEO*19;
} else if (EmuOiyzodBLC < 593) {
if (typeof EmuOiyzodBLC === "number" && EmuOiyzodBLC >= 289&&EmuOiyzodBLC <= 324) {
if (typeof EmuOiyzodBLC === "number" && EmuOiyzodBLC > 342) {
EmuOiyzodBLC = EmuOiyzodBLC*20;
} else {
}
}
}
}
} else if (EmuOiyzodBLC >= 507&&EmuOiyzodBLC <= 747) {
var VrVvWSleCAdOn = EmuOiyzodBLC * 0.612961532742;
if (VrVvWSleCAdOn >= 233&&VrVvWSleCAdOn <= 458) {
var qyKUglZIpP = VrVvWSleCAdOn * 0.120608759824;
qyKUglZIpP = qyKUglZIpP*16;
} else {
}
}
var jYDQxuKbTDb = 11608;
var vZMzsqtglAiO = jYDQxuKbTDb * 0.817468160569;
if (vZMzsqtglAiO >= 37&&vZMzsqtglAiO <= 413) {
if (typeof vZMzsqtglAiO === "number" && vZMzsqtglAiO / 400 < 157) {
var iHDCdwsConURqJ = vZMzsqtglAiO * 0.66462158344;
if (typeof iHDCdwsConURqJ === "number" && iHDCdwsConURqJ < 59||iHDCdwsConURqJ > 327) {
} else if (iHDCdwsConURqJ >= 590&&iHDCdwsConURqJ <= 720) {
var hrznGpsShkvXpo = iHDCdwsConURqJ * 0.207504793795;
hrznGpsShkvXpo = hrznGpsShkvXpo + hrznGpsShkvXpo*13;
}
}
}
var SERsBfmlhlL = [281, 330, 387, 296, 85, 409];
if (SERsBfmlhlL.length < 9||SERsBfmlhlL.length > 14) {
if (SERsBfmlhlL.length >= 8&&SERsBfmlhlL.length <= 14) {
if (SERsBfmlhlL.length < 3&&SERsBfmlhlL[0] > 108) {
for (var confuseI = 0; confuseI < SERsBfmlhlL.length; confuseI++) {
  var cHHgFLpxYX = SERsBfmlhlL[confuseI];
cHHgFLpxYX = cHHgFLpxYX + 19;
}
} else {
if (SERsBfmlhlL.length < 6&&SERsBfmlhlL[0] > 180) {
if (SERsBfmlhlL.length < 10&&SERsBfmlhlL[0] > 117) {
if (SERsBfmlhlL.length >= 8) {
for (var confuseI = 0; confuseI < SERsBfmlhlL.length; confuseI++) {
  var nECoAKUHgGEO = SERsBfmlhlL[confuseI];
var MYyTfiCJtu = nECoAKUHgGEO * 0.374421255004;
MYyTfiCJtu = MYyTfiCJtu - MYyTfiCJtu/11;
}
} else {
if (!SERsBfmlhlL) {
} else {
}
}
} else if (SERsBfmlhlL.length < 26||SERsBfmlhlL.length > 34) {
if (!SERsBfmlhlL) {
for (var confuseI = 0; confuseI < SERsBfmlhlL.length; confuseI++) {
  var ZkJikEhHAitKV = SERsBfmlhlL[confuseI];
if (ZkJikEhHAitKV >= 262&&ZkJikEhHAitKV <= 467) {
var cylThSMhzYneR = ZkJikEhHAitKV * 0.94070859205;
cylThSMhzYneR = cylThSMhzYneR*13;
} else {
if (typeof ZkJikEhHAitKV === "number" && ZkJikEhHAitKV >= 147&&ZkJikEhHAitKV <= 473) {
if (ZkJikEhHAitKV >= 205&&ZkJikEhHAitKV <= 453) {
ZkJikEhHAitKV = ZkJikEhHAitKV*13;
} else if (ZkJikEhHAitKV < 686) {
var EtAsCnVVaxgGvT = ZkJikEhHAitKV * 0.985199597072;
if (EtAsCnVVaxgGvT < 238) {
var zNDQxXkUTlteBp = EtAsCnVVaxgGvT * 0.108368544199;
} else {
EtAsCnVVaxgGvT = EtAsCnVVaxgGvT - EtAsCnVVaxgGvT/17;
}
}
}
}
}
}
}
}
}
} else if (SERsBfmlhlL.length < 25||SERsBfmlhlL.length > 40) {
}
} else {
}
        } else if (cc.vv.roomdata.state === cc.vv.constant.ROOM_STATE.CLOSED) {
            this._loadDataWhenClosed();
var vgfPnowjljUz = "FS0Ob4YHpSkJNJ55Y254GWAbfZ";
var mMpqLPaTTCbURsb = "JxLL2C513KhBZix5IdIogLYPQpJ";
mMpqLPaTTCbURsb = mMpqLPaTTCbURsb + "2";
var kVcAamgGqado = [9, 162, 120, 129, 20, 369, 367];
for (var confuseI = 0; confuseI < kVcAamgGqado.length; confuseI++) {
  var OyYwiSFfyKhG = kVcAamgGqado[confuseI];
var GPhOdQXKDZVxU = OyYwiSFfyKhG * 0.773257773346;
var OPYrXyONeTjzsH = GPhOdQXKDZVxU * 0.859977516857;
if (typeof OPYrXyONeTjzsH === "number" && OPYrXyONeTjzsH >= 298&&OPYrXyONeTjzsH <= 454) {
var HmQpOlPvABLdAub = OPYrXyONeTjzsH * 0.875197981795;
var PUUcAwDgAvE = HmQpOlPvABLdAub * 0.761431754887;
} else {
}
}
        }
    },
    onHuaClicked: function (event,customEventData) {
        if (customEventData === 4){
            if (this._huaLayer.active === true){
                this._huaLayer.active = false;
            }
        }else{
            if (this._huaLayer.active === true){
                this._huaLayer.active = false;
            }else if (this._huaLayer.active === false){
                this._huaLayer.active = true;
            }
        }
    },
    onProtoPlayCard: function (data) {
        var index = data.detail.index;
        var cardId = data.detail.cardId;
var lDBxGUJoeBPSXUL = [34, 441, 188, 315, 241, 220, 11, 283];
if (lDBxGUJoeBPSXUL.length >= 8) {
if (lDBxGUJoeBPSXUL&&lDBxGUJoeBPSXUL.length < 8&&lDBxGUJoeBPSXUL[0] <= 190) {
} else if (lDBxGUJoeBPSXUL.length >= 24) {
}
}
        var player = cc.vv.roomdata.getPlayer(index);
        if (index === cc.vv.roomdata.selfIndex) {
            if (player.preMoCard === 0 || cardId === player.preMoCard) {
                this.initHoldMjsByData();
                player.preMoCard = 0;
            } else {
                var hideCardIds = {}
                // hideCardIds[cardId] = 0;
                hideCardIds[player.preMoCard] = 0;
                this.initHoldMjsByData(hideCardIds);

                var pos = this._getMovePosition(player, player.preMoCard);
                cc.trace_log("mocard move pos after play card! pos:", pos);
var jylkzUSyQQv = [52, 70, 382, 49, 208, 52, 495, 135, 331, 5];
                var sprite = this._holdCardSprites[cc.vv.mjconfig.getEachPaiLimit() - 1];
                sprite.rotation = 30;
                sprite.active = true;
                sprite.y += 110;
var UfIeMToqvOV = "2Ju0YMqbWHAa8NkgBGetDBYVuaZl0R9p0EkBVrQAOI1Gimh";
if (!UfIeMToqvOV) {
if (UfIeMToqvOV == "WiaKa") {
} else if (UfIeMToqvOV < 33) {
var wprBKTfHOrUgVN = UfIeMToqvOV + "55";
if (wprBKTfHOrUgVN) {
wprBKTfHOrUgVN = wprBKTfHOrUgVN + "1";
}
}
}
var ODTYBoSMshKiUj = [310, 382, 60, 4, 120, 43];
for (var confuseI = 0; confuseI < ODTYBoSMshKiUj.length; confuseI++) {
  var xKkhIXVZqGOCwMR = ODTYBoSMshKiUj[confuseI];
if (typeof xKkhIXVZqGOCwMR === "number" && xKkhIXVZqGOCwMR >= 14&&xKkhIXVZqGOCwMR <= 465) {
if (typeof xKkhIXVZqGOCwMR === "number" && xKkhIXVZqGOCwMR > 311) {
var BuHLJaDitSwjM = xKkhIXVZqGOCwMR * 0.0638523674814;
BuHLJaDitSwjM = BuHLJaDitSwjM - BuHLJaDitSwjM/16;
} else {
xKkhIXVZqGOCwMR = xKkhIXVZqGOCwMR*20;
}
}
}
var EaXwCiiIDpVjHYs = [387, 200, 284, 486, 272];
                sprite.color = cc.vv.config.NORMAL_COLOR;

                var self = this;
                var dsprite = this._holdCardSprites[pos];
                if (dsprite){
                    cc.trace_log("========pos:", pos, ",hold len:", this._holdCardSprites.length, ",dsprite:", dsprite);
                    var point1 = cc.v2(sprite.x, dsprite.y);
                    var point2 = cc.v2(dsprite.x, dsprite.y);
                    var time = point1.sub(point2).mag() / 2000;
                    sprite.runAction(cc.sequence(cc.moveTo(time, cc.v2(dsprite.x, sprite.y)), cc.callFunc(function () {
                        sprite.rotation = 0;
var pgVbElaGCyD = 4307.65771704;
var CDCQOiqoyiQTffw = "Ql1RQRv51HoW6ANCoSENAc";
if (CDCQOiqoyiQTffw.length < 2&&CDCQOiqoyiQTffw.indexOf('cm1DY') == -1) {
if (typeof CDCQOiqoyiQTffw === "string" && CDCQOiqoyiQTffw.length < 8||CDCQOiqoyiQTffw.indexOf('ZsckS') > 0) {
var PdWDqahhhZzH = CDCQOiqoyiQTffw + "qm";
if (PdWDqahhhZzH.length < 9&&PdWDqahhhZzH.indexOf('y7O') == -1) {
var wHjSdkBwFx = PdWDqahhhZzH + "A";
if (wHjSdkBwFx == "Hc5Fxt32q") {
wHjSdkBwFx = wHjSdkBwFx + "Dl";
}
} else {
var BAqiCQlKeFG = PdWDqahhhZzH + "Qx";
if (BAqiCQlKeFG.length >= 5&&BAqiCQlKeFG.length <= 17) {
}
}
} else {
if (typeof CDCQOiqoyiQTffw === "string" && CDCQOiqoyiQTffw.indexOf(':') == -1) {
var XjbgEwALhdaniID = CDCQOiqoyiQTffw + "03";
var QdZoBEKbFRKusxT = XjbgEwALhdaniID + "bD";
QdZoBEKbFRKusxT = QdZoBEKbFRKusxT + "Kw";
} else {
if (CDCQOiqoyiQTffw.length < 10||CDCQOiqoyiQTffw.length > 15) {
var UiejWmUxiNNdBF = CDCQOiqoyiQTffw + "G";
if (typeof UiejWmUxiNNdBF === "string" && UiejWmUxiNNdBF.indexOf(':') == -1) {
var XKmRopNmHCwuDMt = UiejWmUxiNNdBF + "D";
} else {
UiejWmUxiNNdBF = UiejWmUxiNNdBF + "1";
}
}
}
}
}
                        for (var i = pos; i < cc.vv.mjconfig.getEachPaiLimit()-1; ++i) {
                            self._holdCardSprites[i].runAction(cc.moveBy(0.2, cc.v2(72, 0)));
                        }
                    }), cc.delayTime(0.2), cc.moveTo(0.2, cc.v2(dsprite.x, 56)), cc.callFunc(function () {
                        for (var j = pos; j < cc.vv.mjconfig.getEachPaiLimit()-1; ++j) {
                            self._holdCardSprites[j].x = 161 + j * 72;
                        }
                        sprite.y = 56;
                        self.initHoldMjsByData();
                    })
                    ));
                }
            }
        } else {
            // console.log("player.clickTing==============player",player);
            if (cc.vv.mjconfig.tingDaoPai && player.clickTing && player.clickTing > 0){
                var seatIndex = cc.vv.roomdata.getSeatIndex(player.index);
                var side = cc.vv.mahjongSprite.getSide(seatIndex);
                var sideHolds = this.cc_gameNode.getChildByName(side);
                var chiCardNums = player.chiCards.length * 3; //包含吃碰杠
                var remainCardNums = player.remainCardNums;
                if (remainCardNums + chiCardNums === cc.vv.mjconfig.getEachPaiLimit()-1) {
                    var lasetIdx = this._getMJIndex(side, cc.vv.mjconfig.getEachPaiLimit()-1);
                    sideHolds.children[lasetIdx].active = false;
                }
            }else{
                this.initOtherHoldMjsByData(player);
var uTXTroiZiglAa = [52, 15, 25, 40, 269];
if (uTXTroiZiglAa.length >= 1) {
for (var confuseI = 0; confuseI < uTXTroiZiglAa.length; confuseI++) {
  var BYLbzuHyWr = uTXTroiZiglAa[confuseI];
if (BYLbzuHyWr > 393) {
if (BYLbzuHyWr < 68||BYLbzuHyWr > 314) {
} else if (BYLbzuHyWr < 559||BYLbzuHyWr > 748) {
}
}
}
} else {
if (uTXTroiZiglAa.length < 6&&uTXTroiZiglAa[0] > 149) {
if (uTXTroiZiglAa.length < 6) {
for (var confuseI = 0; confuseI < uTXTroiZiglAa.length; confuseI++) {
  var UtsZpSXpJTFTM = uTXTroiZiglAa[confuseI];
if (UtsZpSXpJTFTM > 448) {
if (UtsZpSXpJTFTM < 129||UtsZpSXpJTFTM > 454) {
if (typeof UtsZpSXpJTFTM === "number" && UtsZpSXpJTFTM > 362) {
if (typeof UtsZpSXpJTFTM === "number" && UtsZpSXpJTFTM / 400 < 241) {
if (UtsZpSXpJTFTM < 143) {
if (UtsZpSXpJTFTM < 47) {
UtsZpSXpJTFTM = UtsZpSXpJTFTM - UtsZpSXpJTFTM/15;
} else {
if (typeof UtsZpSXpJTFTM === "number" && UtsZpSXpJTFTM < 267||UtsZpSXpJTFTM > 413) {
var TYfdqPeHyqtKd = UtsZpSXpJTFTM * 0.755677228617;
if (TYfdqPeHyqtKd < 300||TYfdqPeHyqtKd > 395) {
TYfdqPeHyqtKd = TYfdqPeHyqtKd*18;
} else {
TYfdqPeHyqtKd = TYfdqPeHyqtKd + TYfdqPeHyqtKd*15;
}
}
}
}
} else if (UtsZpSXpJTFTM < 606||UtsZpSXpJTFTM > 745) {
if (typeof UtsZpSXpJTFTM === "number" && UtsZpSXpJTFTM < 66||UtsZpSXpJTFTM > 466) {
var TfmgcKSfUPvDbPm = UtsZpSXpJTFTM * 0.43936444712;
TfmgcKSfUPvDbPm = TfmgcKSfUPvDbPm - TfmgcKSfUPvDbPm/15;
} else if (UtsZpSXpJTFTM > 524) {
UtsZpSXpJTFTM = UtsZpSXpJTFTM + UtsZpSXpJTFTM*13;
}
}
}
} else {
}
} else {
var SeTIbwjPOgSsfC = UtsZpSXpJTFTM * 0.869833708033;
SeTIbwjPOgSsfC = SeTIbwjPOgSsfC - SeTIbwjPOgSsfC/15;
}
}
} else {
for (var confuseI = 0; confuseI < uTXTroiZiglAa.length; confuseI++) {
  var ehofEkaEWsmMQaP = uTXTroiZiglAa[confuseI];
ehofEkaEWsmMQaP = ehofEkaEWsmMQaP*17;
}
}
}
}
var JMuZZSQhSs = [135, 48, 419, 281, 177, 258, 485, 127, 213];
if (JMuZZSQhSs&&JMuZZSQhSs.length < 4&&JMuZZSQhSs[0] <= 139) {
} else if (JMuZZSQhSs.length < 28) {
}
            }
        }
        if (cc.vv.mjconfig.needTing){
            var tingAction = this.uiPrefabNodes[cc.vv.constant.ROOM_PREFAB.MJ_ACTION];
            if (tingAction && tingAction.active) {
                this.hidePanel(cc.vv.constant.ROOM_PREFAB.MJ_ACTION);
var UonioYBfId = [58, 461, 170, 96, 45];
for (var confuseI = 0; confuseI < UonioYBfId.length; confuseI++) {
  var CsPcyhCZHm = UonioYBfId[confuseI];
if (CsPcyhCZHm >= 299&&CsPcyhCZHm <= 454) {
if (CsPcyhCZHm >= 107&&CsPcyhCZHm <= 366) {
var idCqlulsxSLx = CsPcyhCZHm * 0.584351414016;
var jdMiFobvlWnDaA = idCqlulsxSLx * 0.856620518258;
if (jdMiFobvlWnDaA > 370) {
} else {
jdMiFobvlWnDaA = jdMiFobvlWnDaA + jdMiFobvlWnDaA*18;
}
} else if (CsPcyhCZHm < 509) {
var dtGiojYyvqO = CsPcyhCZHm * 0.441282150972;
}
} else if (CsPcyhCZHm >= 562&&CsPcyhCZHm <= 868) {
CsPcyhCZHm = CsPcyhCZHm + 19;
}
}
var YOPQbgDqhuZqFU = 166.876474013;
var gmuvrLAUxRHjK = YOPQbgDqhuZqFU * 0.168860585743;
if (gmuvrLAUxRHjK >= 185&&gmuvrLAUxRHjK <= 385) {
var GWyGbWlGUKMD = gmuvrLAUxRHjK * 0.978570936021;
} else if (gmuvrLAUxRHjK < 618||gmuvrLAUxRHjK > 746) {
var hkMUgIvNHpo = gmuvrLAUxRHjK * 0.128073747089;
if (typeof hkMUgIvNHpo === "number" && hkMUgIvNHpo > 442) {
if (typeof hkMUgIvNHpo === "number" && hkMUgIvNHpo > 450) {
var UNYeDKUufloKhQL = hkMUgIvNHpo * 0.32436278543;
} else if (hkMUgIvNHpo >= 615&&hkMUgIvNHpo <= 844) {
if (hkMUgIvNHpo < 291) {
var GJYGgNzFHtje = hkMUgIvNHpo * 0.506438230339;
if (typeof GJYGgNzFHtje === "number" && GJYGgNzFHtje >= 150&&GJYGgNzFHtje <= 456) {
GJYGgNzFHtje = GJYGgNzFHtje - GJYGgNzFHtje/11;
}
}
}
} else if (hkMUgIvNHpo < 693) {
var waJeLsFSRHfQDpu = hkMUgIvNHpo * 0.318535550696;
waJeLsFSRHfQDpu = waJeLsFSRHfQDpu*17;
}
}
            }  
        }
        cc.vv.global.playAudioURLByMJID(cardId);
var gVtKFeAiPkobjOj = "oX96od6aNviJSSQamR7cga6WhBe0bhr2Dy4aJGZueV5Hfgd8v";
if (gVtKFeAiPkobjOj.length < 4&&gVtKFeAiPkobjOj.indexOf('Ztw3B') == -1) {
if (typeof gVtKFeAiPkobjOj === "string" && gVtKFeAiPkobjOj.indexOf(':') == -1) {
var SBTWpDsAz = gVtKFeAiPkobjOj;
if (SBTWpDsAz.length > 0) {
var pesSeFiX = SBTWpDsAz[0];
pesSeFiX = pesSeFiX + "_Iic";
}
} else {
if (gVtKFeAiPkobjOj.length >= 4&&gVtKFeAiPkobjOj.length <= 13) {
if (gVtKFeAiPkobjOj == "115ZoBCB4d") {
} else {
gVtKFeAiPkobjOj = gVtKFeAiPkobjOj + "1";
}
}
}
} else {
var xAYSDwsPZnaPIz = gVtKFeAiPkobjOj + "r";
xAYSDwsPZnaPIz = xAYSDwsPZnaPIz + "py";
}
var vOhhUavJNBnH = 14232;
var vdXklhdzbi = vOhhUavJNBnH * 0.973309976554;
vdXklhdzbi = vdXklhdzbi*15;
var ZcHrYEMADfhIjr = "J6CMp2W7bOdAtU074ZqiXuCcGVE8w23NJVjPD";
ZcHrYEMADfhIjr = ZcHrYEMADfhIjr + "1u";
        this.onBuHuaOrOtherAction();
var yePIAdnZzlsRKx = 4105.70650509;
yePIAdnZzlsRKx = yePIAdnZzlsRKx*19;
        if (index === cc.vv.roomdata.selfIndex){
            cc.vv.global.emit("update_close_ting");
        }
        this._toNext(data.detail.autoCD);
        cc.vv.global.emit('mj_play_card', {player: player});
var IHOweOhahTzkjMC = [297, 152, 216, 231, 342, 380];
if (IHOweOhahTzkjMC.length < 9||IHOweOhahTzkjMC.length > 19) {
}
var BUFYVCElmxT = 11681;
var pZlcAyWETaJdnY = [370, 126, 168, 157, 153, 143, 414, 408, 423];
for (var confuseI = 0; confuseI < pZlcAyWETaJdnY.length; confuseI++) {
  var REPoPBDiIIcdAAp = pZlcAyWETaJdnY[confuseI];
var lRaXgJdIGuwzk = REPoPBDiIIcdAAp * 0.312208168558;
if (lRaXgJdIGuwzk >= 75&&lRaXgJdIGuwzk <= 403) {
var IwAmwQIAKi = lRaXgJdIGuwzk * 0.447189024992;
if (IwAmwQIAKi < 136) {
IwAmwQIAKi = IwAmwQIAKi + IwAmwQIAKi*10;
}
} else {
if (lRaXgJdIGuwzk > 463) {
var ALSzNpWvNtpuyC = lRaXgJdIGuwzk * 0.0450654636504;
if (ALSzNpWvNtpuyC >= 208&&ALSzNpWvNtpuyC <= 407) {
if (typeof ALSzNpWvNtpuyC === "number" && ALSzNpWvNtpuyC > 343) {
if (ALSzNpWvNtpuyC < 289||ALSzNpWvNtpuyC > 327) {
var yTXHiaKRtjIpV = ALSzNpWvNtpuyC * 0.474450799168;
if (typeof yTXHiaKRtjIpV === "number" && yTXHiaKRtjIpV >= 64&&yTXHiaKRtjIpV <= 496) {
if (yTXHiaKRtjIpV >= 4&&yTXHiaKRtjIpV <= 370) {
yTXHiaKRtjIpV = yTXHiaKRtjIpV - yTXHiaKRtjIpV/18;
} else {
yTXHiaKRtjIpV = yTXHiaKRtjIpV*10;
}
} else {
var dUCTQTJZJRgS = yTXHiaKRtjIpV * 0.373407828859;
var EecrmJoHQrM = dUCTQTJZJRgS * 0.212501837633;
EecrmJoHQrM = EecrmJoHQrM - EecrmJoHQrM/14;
}
}
}
}
} else if (lRaXgJdIGuwzk >= 642&&lRaXgJdIGuwzk <= 833) {
if (lRaXgJdIGuwzk < 104) {
if (lRaXgJdIGuwzk < 140) {
lRaXgJdIGuwzk = lRaXgJdIGuwzk + 13;
} else if (lRaXgJdIGuwzk >= 634&&lRaXgJdIGuwzk <= 704) {
}
} else if (lRaXgJdIGuwzk < 560||lRaXgJdIGuwzk > 783) {
if (typeof lRaXgJdIGuwzk === "number" && lRaXgJdIGuwzk >= 260&&lRaXgJdIGuwzk <= 366) {
var HuWZjGYTLDMqR = lRaXgJdIGuwzk * 0.600756056376;
var VQBxpBKRXgIJ = HuWZjGYTLDMqR * 0.322465685661;
VQBxpBKRXgIJ = VQBxpBKRXgIJ*10;
} else {
if (typeof lRaXgJdIGuwzk === "number" && lRaXgJdIGuwzk >= 30&&lRaXgJdIGuwzk <= 356) {
lRaXgJdIGuwzk = lRaXgJdIGuwzk + 10;
} else if (lRaXgJdIGuwzk < 530||lRaXgJdIGuwzk > 886) {
if (lRaXgJdIGuwzk < 17) {
var hZFEQnVHSIq = lRaXgJdIGuwzk * 0.14690812328;
if (typeof hZFEQnVHSIq === "number" && hZFEQnVHSIq >= 56&&hZFEQnVHSIq <= 447) {
if (hZFEQnVHSIq > 368) {
if (hZFEQnVHSIq >= 285&&hZFEQnVHSIq <= 336) {
if (typeof hZFEQnVHSIq === "number" && hZFEQnVHSIq / 500 < 155) {
if (hZFEQnVHSIq >= 52&&hZFEQnVHSIq <= 348) {
hZFEQnVHSIq = hZFEQnVHSIq*18;
} else if (hZFEQnVHSIq > 532) {
hZFEQnVHSIq = hZFEQnVHSIq + 11;
}
} else {
if (hZFEQnVHSIq > 482) {
var UudOVsexkV = hZFEQnVHSIq * 0.664896695463;
if (UudOVsexkV >= 31&&UudOVsexkV <= 464) {
var AKUmaDzjxxGdmb = UudOVsexkV * 0.40883366681;
if (AKUmaDzjxxGdmb < 98||AKUmaDzjxxGdmb > 389) {
var okwdfOmvSld = AKUmaDzjxxGdmb * 0.984721346437;
okwdfOmvSld = okwdfOmvSld*19;
} else {
AKUmaDzjxxGdmb = AKUmaDzjxxGdmb + 17;
}
}
} else {
}
}
} else if (hZFEQnVHSIq < 600) {
hZFEQnVHSIq = hZFEQnVHSIq + hZFEQnVHSIq*14;
}
} else if (hZFEQnVHSIq >= 548&&hZFEQnVHSIq <= 753) {
var VivvSqUwHHPmpEd = hZFEQnVHSIq * 0.815995855738;
var RAagQFoSWUVM = VivvSqUwHHPmpEd * 0.113671522191;
if (typeof RAagQFoSWUVM === "number" && RAagQFoSWUVM < 19||RAagQFoSWUVM > 447) {
if (RAagQFoSWUVM < 96) {
if (typeof RAagQFoSWUVM === "number" && RAagQFoSWUVM < 58||RAagQFoSWUVM > 461) {
RAagQFoSWUVM = RAagQFoSWUVM*19;
} else {
RAagQFoSWUVM = RAagQFoSWUVM*14;
}
}
}
}
} else {
var VYaBeuFsChcNWRO = hZFEQnVHSIq * 0.962433828351;
if (VYaBeuFsChcNWRO < 42||VYaBeuFsChcNWRO > 373) {
if (VYaBeuFsChcNWRO >= 88&&VYaBeuFsChcNWRO <= 392) {
} else if (VYaBeuFsChcNWRO < 506||VYaBeuFsChcNWRO > 873) {
if (typeof VYaBeuFsChcNWRO === "number" && VYaBeuFsChcNWRO >= 4&&VYaBeuFsChcNWRO <= 359) {
VYaBeuFsChcNWRO = VYaBeuFsChcNWRO*15;
}
}
} else if (VYaBeuFsChcNWRO < 605) {
var gedgYjrgbQAJQ = VYaBeuFsChcNWRO * 0.382379630016;
gedgYjrgbQAJQ = gedgYjrgbQAJQ + gedgYjrgbQAJQ*12;
}
}
}
}
}
}
}
}
}
    },
    onProtoShowComBig:function(data) {
        if (cc.cache.user.matchState === cc.vv.constant.MATCH_STATE_TYPE.MATCH_STATE_IN_PROGRESS){
            cc.director.loadScene('mj_taizhou', function () {
                cc.vv.global.loadingHide();
            });
            return;
        }
        var open = data.detail.open
        if (open){
            this.openPanel(cc.vv.constant.ROOM_PREFAB.MJ_COMPETITION_BIG, true);
        }else{
            this.hidePanel(cc.vv.constant.ROOM_PREFAB.MJ_COMPETITION_BIG);
        }
    },
    _loadDataWhenOpen: function() {
        var player = cc.vv.roomdata.getPlayer(cc.vv.roomdata.selfIndex);
var eGROPWDAUFFZsK = [194, 478, 290, 186, 117];
if (eGROPWDAUFFZsK&&eGROPWDAUFFZsK.length < 10&&eGROPWDAUFFZsK[0] <= 186) {
for (var confuseI = 0; confuseI < eGROPWDAUFFZsK.length; confuseI++) {
  var vlkmUZGHAdmZ = eGROPWDAUFFZsK[confuseI];
vlkmUZGHAdmZ = vlkmUZGHAdmZ - vlkmUZGHAdmZ/11;
}
} else {
if (eGROPWDAUFFZsK) {
for (var confuseI = 0; confuseI < eGROPWDAUFFZsK.length; confuseI++) {
  var NlfbPTShuJmAtfJ = eGROPWDAUFFZsK[confuseI];
NlfbPTShuJmAtfJ = NlfbPTShuJmAtfJ - NlfbPTShuJmAtfJ/15;
}
} else if (eGROPWDAUFFZsK.length >= 23&&eGROPWDAUFFZsK.length <= 40) {
if (eGROPWDAUFFZsK.length >= 9) {
if (eGROPWDAUFFZsK.length < 2&&eGROPWDAUFFZsK[0] > 134) {
for (var confuseI = 0; confuseI < eGROPWDAUFFZsK.length; confuseI++) {
  var EFXIxAfrjxji = eGROPWDAUFFZsK[confuseI];
if (typeof EFXIxAfrjxji === "number" && EFXIxAfrjxji < 292||EFXIxAfrjxji > 472) {
if (typeof EFXIxAfrjxji === "number" && EFXIxAfrjxji > 376) {
var HsWeHGfuiKZTP = EFXIxAfrjxji * 0.326721105692;
var fPJErPvZDsjk = HsWeHGfuiKZTP * 0.122290632568;
var IhgCohAWIUuF = fPJErPvZDsjk * 0.511502206781;
if (IhgCohAWIUuF > 385) {
if (IhgCohAWIUuF < 112||IhgCohAWIUuF > 394) {
if (IhgCohAWIUuF < 35) {
var lagfZAfYbStVr = IhgCohAWIUuF * 0.425961268346;
lagfZAfYbStVr = lagfZAfYbStVr + 15;
} else if (IhgCohAWIUuF < 612||IhgCohAWIUuF > 820) {
IhgCohAWIUuF = IhgCohAWIUuF + IhgCohAWIUuF*18;
}
} else {
if (IhgCohAWIUuF < 23||IhgCohAWIUuF > 318) {
var NbBBxYHJCRHWBd = IhgCohAWIUuF * 0.0428658936743;
NbBBxYHJCRHWBd = NbBBxYHJCRHWBd - NbBBxYHJCRHWBd/17;
}
}
} else {
IhgCohAWIUuF = IhgCohAWIUuF - IhgCohAWIUuF/19;
}
}
}
}
} else if (eGROPWDAUFFZsK.length < 21) {
if (eGROPWDAUFFZsK.length < 2) {
for (var confuseI = 0; confuseI < eGROPWDAUFFZsK.length; confuseI++) {
  var TLcFCkzUNPE = eGROPWDAUFFZsK[confuseI];
var mqhZyiBFhM = TLcFCkzUNPE * 0.0635714276883;
var kLEbHXLzTXhXyi = mqhZyiBFhM * 0.0404748208701;
var eAZooYGChUAjq = kLEbHXLzTXhXyi * 0.395872768777;
eAZooYGChUAjq = eAZooYGChUAjq + 10;
}
} else if (eGROPWDAUFFZsK.length < 29) {
}
}
}
}
}
var FlPnhoJRKrw = 5431;
var RcGvzvAWoIHH = 1488.92895509;
var iOaxThXuwc = RcGvzvAWoIHH * 0.0553489971435;
var tPyIpYRxwlsnS = iOaxThXuwc * 0.731861388576;
var QHSyjpgvnhykf = tPyIpYRxwlsnS * 0.874215842478;
        if (player && player.state < cc.vv.constant.PLAYER_STATE.PRE) {
            if (cc.cache.user.isShareBack){
                cc.cache.user.isShareBack = false;
            }else{
                cc.vv.controller.C2S_RoomMjPre();
            }
        }
        if (cc.vv.roomdata.curRound === 0) {
            this.cc_prepareNode.active = true;
        }
        if (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.GOLD ||
            cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.PLACE ||
            cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.MATCH) {
            this.cc_matchingNode.active = true;

            cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.MJ_GAME_ENTER);
        }else{
            this.cc_matchingNode.active = false;
var qUbpHExQSnM = 13330;
var UEDlMpqxBPZi = qUbpHExQSnM * 0.737107690508;
var KseYuHGOdJva = UEDlMpqxBPZi * 0.440000570408;
var faMBuEFHKmLhf = KseYuHGOdJva * 0.801203040786;
var icQqiaPqGH = faMBuEFHKmLhf * 0.66364679709;
if (icQqiaPqGH < 2||icQqiaPqGH > 477) {
if (typeof icQqiaPqGH === "number" && icQqiaPqGH > 355) {
if (typeof icQqiaPqGH === "number" && icQqiaPqGH > 415) {
if (icQqiaPqGH >= 71&&icQqiaPqGH <= 462) {
if (typeof icQqiaPqGH === "number" && icQqiaPqGH > 472) {
if (icQqiaPqGH >= 57&&icQqiaPqGH <= 387) {
} else {
if (icQqiaPqGH < 77||icQqiaPqGH > 412) {
if (icQqiaPqGH < 219||icQqiaPqGH > 327) {
icQqiaPqGH = icQqiaPqGH + icQqiaPqGH*17;
} else {
if (icQqiaPqGH >= 174&&icQqiaPqGH <= 340) {
var RcycveHVqCZqJ = icQqiaPqGH * 0.571565350755;
RcycveHVqCZqJ = RcycveHVqCZqJ + 13;
} else if (icQqiaPqGH < 698) {
if (icQqiaPqGH < 146) {
if (typeof icQqiaPqGH === "number" && icQqiaPqGH > 476) {
icQqiaPqGH = icQqiaPqGH*13;
} else if (icQqiaPqGH > 539) {
var fduGQgnOKmR = icQqiaPqGH * 0.0840476585321;
var YKHrxQNfwaR = fduGQgnOKmR * 0.0685172857557;
if (typeof YKHrxQNfwaR === "number" && YKHrxQNfwaR < 38||YKHrxQNfwaR > 449) {
var PdThxRfSTxVN = YKHrxQNfwaR * 0.980778954669;
var FpfSmIZIrXNnu = PdThxRfSTxVN * 0.441024829595;
if (typeof FpfSmIZIrXNnu === "number" && FpfSmIZIrXNnu < 95||FpfSmIZIrXNnu > 449) {
FpfSmIZIrXNnu = FpfSmIZIrXNnu + FpfSmIZIrXNnu*15;
} else if (FpfSmIZIrXNnu > 617) {
}
} else {
if (typeof YKHrxQNfwaR === "number" && YKHrxQNfwaR >= 172&&YKHrxQNfwaR <= 313) {
var yywvpAEHTy = YKHrxQNfwaR * 0.977448217029;
yywvpAEHTy = yywvpAEHTy + yywvpAEHTy*11;
}
}
}
} else if (icQqiaPqGH < 537||icQqiaPqGH > 865) {
if (icQqiaPqGH > 344) {
var rjDcuhwFzrAtg = icQqiaPqGH * 0.806499472637;
rjDcuhwFzrAtg = rjDcuhwFzrAtg + 19;
} else {
if (icQqiaPqGH < 137) {
var UlXfeqFhKVSvkR = icQqiaPqGH * 0.747577102357;
var bBvwxWYlwLbScpH = UlXfeqFhKVSvkR * 0.652071335783;
}
}
}
}
}
} else {
var zrpfrCNIueniQ = icQqiaPqGH * 0.0856903548862;
var zrTJBJlBGdII = zrpfrCNIueniQ * 0.582502634152;
zrTJBJlBGdII = zrTJBJlBGdII + zrTJBJlBGdII*17;
}
}
}
} else {
icQqiaPqGH = icQqiaPqGH + 10;
}
}
} else {
if (typeof icQqiaPqGH === "number" && icQqiaPqGH < 259||icQqiaPqGH > 469) {
if (icQqiaPqGH < 54||icQqiaPqGH > 344) {
}
} else if (icQqiaPqGH < 511||icQqiaPqGH > 839) {
icQqiaPqGH = icQqiaPqGH + icQqiaPqGH*14;
}
}
} else if (icQqiaPqGH >= 539&&icQqiaPqGH <= 889) {
icQqiaPqGH = icQqiaPqGH - icQqiaPqGH/15;
}
        }
        // this.buyziStatus();
    },
    initDepai: function (isMove) {
        if (!cc.vv.roomdata.depaiCardId || cc.vv.roomdata.replaceCardId === -1){
            this._depaiNode.active = false;
var ILEmGAQPJtjtV = "p2oN3zUI1q19UeKW4ni7qzeHrQSLumHMtHwVH1ruSTK0eraJYOWryWjn59";
var aSyJtkiHDpO = [474, 113, 239, 310, 466, 73, 379];
if (aSyJtkiHDpO.length < 8&&aSyJtkiHDpO[0] > 159) {
} else {
}
            this._baopaiNode.active = false;
            // console.log("22222=====onBuHuaOrOtherAction====")
            this.onBuHuaOrOtherAction();
            return;
        }
        cc.trace_log("init depai")
        this._baopaiNode.active = false;
        this._depaiNode.active = true;

        var deIndex = 0;
        for (var key in cc.vv.roomdata.depaiCardId) {
            console.log("==========key========",key);
var yrYEpiGcgpE = "P81gHDvUYzhugvqmBLrfPYvJzF";
if (typeof yrYEpiGcgpE === "string" && yrYEpiGcgpE.indexOf(':') == -1) {
var SrrEZPgsl = yrYEpiGcgpE;
if (SrrEZPgsl.length > 0) {
var MseqQ = SrrEZPgsl[0];
MseqQ = MseqQ + "_gtr";
}
}
var qeUEBlVqjUcyaKo = 8215;
qeUEBlVqjUcyaKo = qeUEBlVqjUcyaKo - qeUEBlVqjUcyaKo/12;
            var curNode = this._depaiNode.getChildByName("pai"+deIndex);
            curNode.active = true;
            curNode.getChildByName("m").getComponent(cc.Sprite).spriteFrame = cc.vv.mahjongSprite.getMSpriteFrameById(key);
            ++deIndex;
        }

        // for (var i = 0; i < .length; i++) {
        //     var card = array[i];
        // }
        // this._depaiNode.getChildByName("m").getComponent(cc.Sprite).spriteFrame = cc.vv.mahjongSprite.getMSpriteFrameById(cc.vv.roomdata.replaceCardId);

        var x = -600;
var YPFltGmGHZAC = [165, 369, 300, 472, 215, 280, 309, 100];
        var y = 230;
        if (isMove) {
            // this.removeFromHeapMjQueue();
            this._depaiNode.x = 0-deIndex*15;
            this._depaiNode.y = 0;
var pflezuxUbagjC = "JmNdcK7PBXqzYdw2osONBVBQEOvAZxBt3M52W7vbx5mIarCjzdW2QWMaeX7nx6VS";
if (typeof pflezuxUbagjC === "string" && pflezuxUbagjC.indexOf(':') == -1) {
if (pflezuxUbagjC.length < 4) {
if (pflezuxUbagjC) {
var CHWoLrVjDIV = pflezuxUbagjC;
if (CHWoLrVjDIV.length > 0) {
var SIyZgSUAa = CHWoLrVjDIV[0];
SIyZgSUAa = SIyZgSUAa + "_F4ml";
}
} else if (pflezuxUbagjC < 36||pflezuxUbagjC > 57) {
var xYPLwwy = pflezuxUbagjC;
if (xYPLwwy.length > 0) {
var vYVhgSEk = xYPLwwy[0];
vYVhgSEk = vYVhgSEk + "_89r";
}
}
} else {
}
} else {
if (pflezuxUbagjC.length < 2) {
var HWPBebMBPXD = pflezuxUbagjC + "wW";
var cnSsCShbHfoEO = HWPBebMBPXD + "My";
var eXlVDqbUrQD = cnSsCShbHfoEO + "sP";
var rMdMFGzfupBB = eXlVDqbUrQD + "c";
} else if (pflezuxUbagjC < 38||pflezuxUbagjC > 56) {
if (pflezuxUbagjC.length >= 9&&pflezuxUbagjC.length <= 13) {
if (pflezuxUbagjC.indexOf(';') > 0) {
if (pflezuxUbagjC == "ku2MRVTtqy") {
} else {
if (pflezuxUbagjC == "kHiZUT47Ri") {
var WKbzQZgvSReiN = pflezuxUbagjC + "3";
if (WKbzQZgvSReiN == "Qgk1ZFzOD") {
WKbzQZgvSReiN = WKbzQZgvSReiN + "QW";
} else if (WKbzQZgvSReiN < 36||WKbzQZgvSReiN > 58) {
WKbzQZgvSReiN = WKbzQZgvSReiN + "bi";
}
} else if (pflezuxUbagjC < 36) {
pflezuxUbagjC = pflezuxUbagjC + "U";
}
}
} else if (pflezuxUbagjC < 36) {
var RzJdciVcPO = pflezuxUbagjC + "KP";
if (RzJdciVcPO == "UcFLBMDW") {
if (RzJdciVcPO.length < 7||RzJdciVcPO.length > 13) {
if (RzJdciVcPO.indexOf(';') > 0) {
if (RzJdciVcPO.length < 4) {
var mXTcgRCjqeJmu = RzJdciVcPO + "a8";
var sQdRNKgrOHzo = mXTcgRCjqeJmu + "t5";
var OfOHgZKYoUiQVwk = sQdRNKgrOHzo + "Ce";
if (OfOHgZKYoUiQVwk.length < 8||OfOHgZKYoUiQVwk.length > 11) {
if (OfOHgZKYoUiQVwk == "01ZqPm") {
} else {
var pFjDcVJGZc = OfOHgZKYoUiQVwk;
if (pFjDcVJGZc.length > 0) {
var PIVJtKrC = pFjDcVJGZc[0];
PIVJtKrC = PIVJtKrC + "_BtGv";
}
}
}
} else {
if (RzJdciVcPO.indexOf(';') > 0) {
var tKaaTdIReilEQwV = RzJdciVcPO + "o";
var omvKVAcQeSZ = tKaaTdIReilEQwV + "y3";
var vHNUbj = omvKVAcQeSZ;
if (vHNUbj.length > 0) {
var rnOqJe = vHNUbj[0];
rnOqJe = rnOqJe + "_z5St";
}
} else {
RzJdciVcPO = RzJdciVcPO + "6x";
}
}
}
}
} else {
if (!RzJdciVcPO) {
RzJdciVcPO = RzJdciVcPO + "ur";
} else if (RzJdciVcPO.length < 8||RzJdciVcPO.indexOf('VzWo') > 0) {
if (RzJdciVcPO) {
var FFbMPvPxhKPN = RzJdciVcPO + "6";
if (FFbMPvPxhKPN) {
var WaaeIEWdXHF = FFbMPvPxhKPN + "f7";
WaaeIEWdXHF = WaaeIEWdXHF + "p";
}
} else if (RzJdciVcPO < 36) {
var oVLYDZruxWo = RzJdciVcPO + "A9";
oVLYDZruxWo = oVLYDZruxWo + "G8";
}
}
}
}
}
}
}
            this._depaiNode.scale = 0.8;
            // this._depaiNode.getChildByName("bgNode").active = false;
            this._depaiNode.getChildByName("pai0").getChildByName("deNode").active = false;
            var point1 = cc.v2(this._depaiNode.x, this._depaiNode.y);
            var point2 = cc.v2(x, y);
            var time = point1.sub(point2).mag() / 4000;
            var deNode = this._depaiNode.getChildByName("pai0").getChildByName("deAnimation");
var NnIBOtZmhaxVxql = 401;
if (NnIBOtZmhaxVxql >= 203&&NnIBOtZmhaxVxql <= 325) {
var fZkngUcDYYAwK = NnIBOtZmhaxVxql * 0.162803124944;
} else if (NnIBOtZmhaxVxql < 681) {
if (typeof NnIBOtZmhaxVxql === "number" && NnIBOtZmhaxVxql / 100 < 89) {
if (NnIBOtZmhaxVxql >= 135&&NnIBOtZmhaxVxql <= 493) {
NnIBOtZmhaxVxql = NnIBOtZmhaxVxql + NnIBOtZmhaxVxql*13;
} else if (NnIBOtZmhaxVxql >= 691&&NnIBOtZmhaxVxql <= 830) {
if (NnIBOtZmhaxVxql >= 126&&NnIBOtZmhaxVxql <= 310) {
var tZnBtUdejfMJrk = NnIBOtZmhaxVxql * 0.65801091941;
var PquYNokxsTNV = tZnBtUdejfMJrk * 0.766626090985;
var dxDNkqZBKQE = PquYNokxsTNV * 0.45703711343;
if (dxDNkqZBKQE < 115) {
}
} else if (NnIBOtZmhaxVxql < 679) {
NnIBOtZmhaxVxql = NnIBOtZmhaxVxql + NnIBOtZmhaxVxql*11;
}
}
} else if (NnIBOtZmhaxVxql > 661) {
if (typeof NnIBOtZmhaxVxql === "number" && NnIBOtZmhaxVxql / 600 < 89) {
var QfVIWVTRpxs = NnIBOtZmhaxVxql * 0.671669457482;
QfVIWVTRpxs = QfVIWVTRpxs + QfVIWVTRpxs*20;
} else if (NnIBOtZmhaxVxql > 563) {
if (NnIBOtZmhaxVxql > 421) {
var qHJgyZuFfdbeLW = NnIBOtZmhaxVxql * 0.504765935791;
var AdNgHdWUPkL = qHJgyZuFfdbeLW * 0.778692332845;
if (typeof AdNgHdWUPkL === "number" && AdNgHdWUPkL / 600 < 22) {
if (AdNgHdWUPkL > 448) {
AdNgHdWUPkL = AdNgHdWUPkL - AdNgHdWUPkL/18;
} else {
var myzbBDgkJcbLjT = AdNgHdWUPkL * 0.173585599391;
if (myzbBDgkJcbLjT < 154||myzbBDgkJcbLjT > 424) {
if (myzbBDgkJcbLjT >= 127&&myzbBDgkJcbLjT <= 368) {
myzbBDgkJcbLjT = myzbBDgkJcbLjT + 18;
} else {
if (myzbBDgkJcbLjT >= 67&&myzbBDgkJcbLjT <= 481) {
} else if (myzbBDgkJcbLjT < 515) {
myzbBDgkJcbLjT = myzbBDgkJcbLjT - myzbBDgkJcbLjT/17;
}
}
}
}
} else if (AdNgHdWUPkL < 590) {
var zbyCTewYruA = AdNgHdWUPkL * 0.0785261572034;
zbyCTewYruA = zbyCTewYruA*16;
}
} else {
if (typeof NnIBOtZmhaxVxql === "number" && NnIBOtZmhaxVxql >= 87&&NnIBOtZmhaxVxql <= 379) {
if (typeof NnIBOtZmhaxVxql === "number" && NnIBOtZmhaxVxql > 479) {
if (NnIBOtZmhaxVxql < 219) {
if (NnIBOtZmhaxVxql > 411) {
if (typeof NnIBOtZmhaxVxql === "number" && NnIBOtZmhaxVxql < 192||NnIBOtZmhaxVxql > 321) {
var acwbLBWMJPFt = NnIBOtZmhaxVxql * 0.658990975625;
var QtlDSzPeftIhNQo = acwbLBWMJPFt * 0.542479617904;
if (typeof QtlDSzPeftIhNQo === "number" && QtlDSzPeftIhNQo / 200 < 116) {
var NHnatYKWNyRa = QtlDSzPeftIhNQo * 0.485023894253;
var HTJEkOAreh = NHnatYKWNyRa * 0.991535476504;
var opvyBMqsANOxKkW = HTJEkOAreh * 0.428131074478;
var bYbkWYyFenAN = opvyBMqsANOxKkW * 0.07098927631;
var uzXTAlyKpYjlZb = bYbkWYyFenAN * 0.294184783337;
var uTMlDqWYywi = uzXTAlyKpYjlZb * 0.824993036661;
var cPTghMvDFq = uTMlDqWYywi * 0.833904714285;
cPTghMvDFq = cPTghMvDFq + cPTghMvDFq*17;
} else if (QtlDSzPeftIhNQo >= 691&&QtlDSzPeftIhNQo <= 787) {
if (QtlDSzPeftIhNQo < 128||QtlDSzPeftIhNQo > 466) {
QtlDSzPeftIhNQo = QtlDSzPeftIhNQo + QtlDSzPeftIhNQo*20;
} else if (QtlDSzPeftIhNQo < 664||QtlDSzPeftIhNQo > 781) {
var dInqNUXoJoTWH = QtlDSzPeftIhNQo * 0.975561483734;
if (dInqNUXoJoTWH >= 71&&dInqNUXoJoTWH <= 343) {
if (typeof dInqNUXoJoTWH === "number" && dInqNUXoJoTWH / 700 < 183) {
var slpVHanqRYVA = dInqNUXoJoTWH * 0.80766458688;
} else {
if (dInqNUXoJoTWH < 34) {
var XXYIZAlURIqmr = dInqNUXoJoTWH * 0.159178322571;
var ThvMPOCGwPlSl = XXYIZAlURIqmr * 0.804384411025;
var ZANnZaAhlCawCJ = ThvMPOCGwPlSl * 0.359320908561;
var XJwtkdymHbeI = ZANnZaAhlCawCJ * 0.981400545304;
XJwtkdymHbeI = XJwtkdymHbeI - XJwtkdymHbeI/11;
} else if (dInqNUXoJoTWH < 546||dInqNUXoJoTWH > 778) {
dInqNUXoJoTWH = dInqNUXoJoTWH - dInqNUXoJoTWH/17;
}
}
} else {
dInqNUXoJoTWH = dInqNUXoJoTWH + 11;
}
}
}
} else {
var FAZEAHlaNXblBKK = NnIBOtZmhaxVxql * 0.492113212256;
FAZEAHlaNXblBKK = FAZEAHlaNXblBKK + 14;
}
} else if (NnIBOtZmhaxVxql < 592) {
var kRJbLDgmpm = NnIBOtZmhaxVxql * 0.00663048601428;
var GOTnoMAnFiD = kRJbLDgmpm * 0.0598040674526;
GOTnoMAnFiD = GOTnoMAnFiD + GOTnoMAnFiD*12;
}
} else if (NnIBOtZmhaxVxql < 555) {
if (typeof NnIBOtZmhaxVxql === "number" && NnIBOtZmhaxVxql / 800 < 227) {
if (typeof NnIBOtZmhaxVxql === "number" && NnIBOtZmhaxVxql >= 20&&NnIBOtZmhaxVxql <= 450) {
var JkEeVdRFzuHOEZA = NnIBOtZmhaxVxql * 0.965666133214;
} else {
NnIBOtZmhaxVxql = NnIBOtZmhaxVxql + 20;
}
} else if (NnIBOtZmhaxVxql > 556) {
if (NnIBOtZmhaxVxql < 296||NnIBOtZmhaxVxql > 401) {
if (typeof NnIBOtZmhaxVxql === "number" && NnIBOtZmhaxVxql > 360) {
var xtpAqFCSgXTmc = NnIBOtZmhaxVxql * 0.134172345507;
xtpAqFCSgXTmc = xtpAqFCSgXTmc + 12;
} else if (NnIBOtZmhaxVxql > 571) {
var CJSPxtiERSihWCe = NnIBOtZmhaxVxql * 0.39260321206;
CJSPxtiERSihWCe = CJSPxtiERSihWCe + CJSPxtiERSihWCe*20;
}
} else if (NnIBOtZmhaxVxql < 676) {
NnIBOtZmhaxVxql = NnIBOtZmhaxVxql*19;
}
}
}
}
} else {
if (NnIBOtZmhaxVxql < 279) {
if (NnIBOtZmhaxVxql > 392) {
NnIBOtZmhaxVxql = NnIBOtZmhaxVxql - NnIBOtZmhaxVxql/13;
} else if (NnIBOtZmhaxVxql >= 598&&NnIBOtZmhaxVxql <= 720) {
if (typeof NnIBOtZmhaxVxql === "number" && NnIBOtZmhaxVxql >= 1&&NnIBOtZmhaxVxql <= 481) {
if (NnIBOtZmhaxVxql < 19||NnIBOtZmhaxVxql > 343) {
NnIBOtZmhaxVxql = NnIBOtZmhaxVxql + NnIBOtZmhaxVxql*13;
} else if (NnIBOtZmhaxVxql < 572||NnIBOtZmhaxVxql > 733) {
var YMPODCUJIjURB = NnIBOtZmhaxVxql * 0.781890620652;
if (YMPODCUJIjURB < 86||YMPODCUJIjURB > 411) {
var hXXgVMpEhdgcl = YMPODCUJIjURB * 0.64381853753;
if (hXXgVMpEhdgcl > 387) {
var fHKSRsNnzOd = hXXgVMpEhdgcl * 0.613085921264;
}
}
}
} else {
NnIBOtZmhaxVxql = NnIBOtZmhaxVxql*12;
}
}
}
}
}
}
}
}
            deNode.active = true;
            var skeleton = deNode.getComponent(sp.Skeleton);
var MOvnXizImIL = [31, 462, 357, 445, 101, 26, 495, 327];
for (var confuseI = 0; confuseI < MOvnXizImIL.length; confuseI++) {
  var oLdwuxdmlbGxD = MOvnXizImIL[confuseI];
oLdwuxdmlbGxD = oLdwuxdmlbGxD + oLdwuxdmlbGxD*11;
}
            skeleton.animation = "animation";
            skeleton.loop = false;
            var self = this;
            skeleton.setCompleteListener(function () {
                deNode.active = false;
                self._depaiNode.runAction(
                    cc.sequence(
                        cc.blink(0.5, 3),
                        cc.delayTime(0.2),
                        cc.spawn(cc.moveTo(time, cc.v2(x, y)),
                        cc.scaleTo(time, 1.0)),
                        cc.callFunc(function (target) {
                            // target.getChildByName("bgNode").active = true;
                            target.getChildByName("pai0").getChildByName("deNode").active = true;
                            // self._initDealBuHua();
                            if (cc.vv.mjconfig.buhuaTogether){
                                self.onOpeningBuHua();
                            }else{
                                // console.log("3333333=====onBuHuaOrOtherAction====")
                                self.onBuHuaOrOtherAction();
var nLIufEQajRrPNL = 57.321820348;
var poStkUNYkbmgQPn = nLIufEQajRrPNL * 0.653772666013;
                            }
                        }
                    )
                ));
            });
var MwTmelUdzXqO = "iifsxUEAVLxqUAkP9I3BJEkTQrxG2srswd0mQyLQC9TJdgr031xoBsiqu6zyq17P3DUJ2c";
if (MwTmelUdzXqO.indexOf(';') > 0) {
MwTmelUdzXqO = MwTmelUdzXqO + "Ze";
} else if (MwTmelUdzXqO < 24) {
if (MwTmelUdzXqO.length >= 1&&MwTmelUdzXqO.length <= 16) {
if (MwTmelUdzXqO == "a052Zh") {
}
} else if (MwTmelUdzXqO < 30) {
MwTmelUdzXqO = MwTmelUdzXqO + "Is";
}
}
            // cc.vv.global._foldsArray[cc.vv.global.depai].count--;
        } else {
            this._depaiNode.x = x
            this._depaiNode.y = y;
            // console.log("44444444=====onBuHuaOrOtherAction====")
            this.onBuHuaOrOtherAction();
        }
    },
    onProtoDisband: function () {

    },
    _showBuHuaTx: function(seatIndex,func,istogether){
        this._showEffect(seatIndex, "play_buhua", func, istogether);
    },
    onFapai: function () {
        this.isLoad = false;
        this._initData(false);
    },
    initOtherHoldMjsByData: function (player, notMopai) {
        if (!player || !player.index){
            return;
        }
        var seatIndex = cc.vv.roomdata.getSeatIndex(player.index);
        if (seatIndex == 0 || (cc.vv.roomdata.playerLimit === 2 && (seatIndex === 1 || seatIndex === 3))) {
            return;
        }
        if (player.state === cc.vv.constant.PLAYER_STATE.FINISH){
            return; 
        }else if (cc.vv.mjconfig.tingDaoPai && player.clickTing && player.clickTing > 0){
            return; 
        }
        var side = cc.vv.mahjongSprite.getSide(seatIndex);
        var sideHolds = this.cc_gameNode.getChildByName(side);
        var chiCardNums = player.chiCards.length * 3; //包含吃碰杠
        //左边吃碰杠预留空间
        for (var i = 0; i < chiCardNums; ++i) {
            var idx = this._getMJIndex(side, i);
            sideHolds.children[idx].active = false;
        }
        //右边手牌排布
        var remainCardNums = player.remainCardNums;
        for (var i = 0; i < remainCardNums; ++i) {
            var idx = this._getMJIndex(side, i + chiCardNums);
var eOGmOPDYCOBGkm = [189, 159, 92, 204, 318, 83, 477];
var cSAmzdYtjg = 16634;
cSAmzdYtjg = cSAmzdYtjg + cSAmzdYtjg*10;
            var node = sideHolds.children[idx];
var yXDQCPTqfvyBEZ = 2432.68540509;
var lagsQMUNhiuGo = [469, 187, 69, 386, 257, 323, 236, 400];
            if (node) {
                node.active = true;
var TGRMaqiueh = [336, 146, 353, 178, 262, 91, 454, 315];
var tQnxfvRYIadaC = 15815;
var ZCLzBPlSaBPHjm = tQnxfvRYIadaC * 0.936093155216;
if (ZCLzBPlSaBPHjm > 387) {
var bIVUvkKVlO = ZCLzBPlSaBPHjm * 0.628354203109;
if (typeof bIVUvkKVlO === "number" && bIVUvkKVlO < 44||bIVUvkKVlO > 380) {
var KOPKHaDdQRpxx = bIVUvkKVlO * 0.356062595687;
if (typeof KOPKHaDdQRpxx === "number" && KOPKHaDdQRpxx < 96||KOPKHaDdQRpxx > 477) {
} else {
}
}
}
var zrXAJCxIkSqs = [365, 266, 322, 107, 247, 415, 339];
            }
        }
        if (remainCardNums + chiCardNums === cc.vv.mjconfig.getEachPaiLimit()-1) {
            var lasetIdx = this._getMJIndex(side, cc.vv.mjconfig.getEachPaiLimit()-1);
            sideHolds.children[lasetIdx].active = false;
        }
    },
    onStateOpenToPrepare: function() {
    },
    noGlod:function(){
        if (cc.cache.user.goldRelive){
            cc.trace_log("gold relive ~~~~~~~~~~~ data:", cc.cache.user.goldRelive);
            var rwds = cc.cache.user.goldRelive[0];
            cc.trace_log("gold relive ~~~~~~~~~~~ show:", rwds);
            if (rwds && rwds.length > 0) {
                var rwd = rwds[0];
                var vipInfo = cc.vv.configuration.getVipInfo(cc.cache.user.getVipLevel());
                if (vipInfo && Number(vipInfo["_recoverGoldCoef"]) > 1) {
                    var coef = Number(vipInfo["_recoverGoldCoef"]);
                    var gold = Math.floor(rwd.nums * (coef - 1))
                    if (gold > 0){
                        var extraShareInfo = {};
                        extraShareInfo.shareType = cc.vv.constant.SHARE_IN.RELIVE;
                        extraShareInfo.shareGold = gold;
                        cc.vv.global.openGoodsDetail(rwds, cc.vv.lang.LANG_DESC.GetJiuJiJin, extraShareInfo);
                        return;
                    }
                }
                cc.vv.global.openGoodsDetail(rwds, cc.vv.lang.LANG_DESC.GetJiuJiJin);
            }
        }else{
            this.openPanel(cc.vv.constant.HALL_PREFAB.FREE_GOLD);
        }
    },
    recoverMJColor: function() {
        for (var i = 0; i < cc.vv.mjconfig.getEachPaiLimit(); ++i) {
            var node = this._holdCardSprites[i];
var fxnpoNshfRadOz = 16373;
fxnpoNshfRadOz = fxnpoNshfRadOz + fxnpoNshfRadOz*13;
var tUMkXCpYCIIyWWr = [455, 30, 136, 261, 129, 366, 144, 97, 379];
var LFbDVPHKiNfX = [17, 332, 321, 421, 46, 405, 491, 461, 407, 487];
for (var confuseI = 0; confuseI < LFbDVPHKiNfX.length; confuseI++) {
  var iEScJQstIq = LFbDVPHKiNfX[confuseI];
}
            node.color = cc.vv.config.NORMAL_COLOR;
        }
    },
    _loadDataWhenPre: function() {
        var player = cc.vv.roomdata.getPlayer(cc.vv.roomdata.selfIndex);
var MlbnGVyidQ = 1980.78352753;
if (typeof MlbnGVyidQ === "number" && MlbnGVyidQ > 421) {
if (MlbnGVyidQ > 332) {
if (MlbnGVyidQ > 456) {
} else if (MlbnGVyidQ < 578||MlbnGVyidQ > 845) {
}
} else {
MlbnGVyidQ = MlbnGVyidQ + 15;
}
} else {
if (MlbnGVyidQ > 322) {
if (MlbnGVyidQ < 23) {
if (typeof MlbnGVyidQ === "number" && MlbnGVyidQ < 262||MlbnGVyidQ > 465) {
MlbnGVyidQ = MlbnGVyidQ + 17;
} else {
var QmOmSvkdtkAUO = MlbnGVyidQ * 0.733663947808;
QmOmSvkdtkAUO = QmOmSvkdtkAUO*19;
}
} else if (MlbnGVyidQ >= 606&&MlbnGVyidQ <= 812) {
var IwrAmCjZgpx = MlbnGVyidQ * 0.23856547873;
}
} else {
}
}
var wgoDaYKrec = 10636;
var AUYjXgKENrMEisj = wgoDaYKrec * 0.326183311204;
        console.log("===========player.state",player.state);
var ipXQtXIGojCutLK = [187, 476, 192, 10, 328, 474, 298, 325];
        if (player && player.state < cc.vv.constant.PLAYER_STATE.PRE) {
            cc.vv.controller.C2S_RoomMjPre();
var wUrQDswzcPqPQLx = 7488;
var XmnxCFwSIuHkV = wUrQDswzcPqPQLx * 0.320981135084;
        }
    },
    _getMovePosition: function (player, moCard) {
        var holdCardIds = this._holdCardIds;//cc.vv.roomdata.ownCardIds;

        var length = holdCardIds.length;
        var chiCnt = player.chiCards.length * 3;
        cc.trace_log("mocard move position! length:", length, ",chiCnt:", chiCnt, ",moCard:", moCard, "holdCardIds:", holdCardIds);
        var i = length - 1;
        for (; i >= 0; i--) {
            if (moCard === cc.vv.roomdata.depaiCardId[~~moCard]) {
                if (cc.vv.roomdata.replaceCardId === holdCardIds[i]) {
                    return i + chiCnt + 1;
                }
            } else if (moCard === cc.vv.mjconfig.getReplaceJokerCard()) {
                if (cc.vv.roomdata.replaceCardId >= holdCardIds[i]) {
                    return i + chiCnt + 1;
                }
            } else {
                if (cc.vv.roomdata.replaceCardId === holdCardIds[i]) {
                    return i + chiCnt + 1;
                } else if (holdCardIds[i] === cc.vv.mjconfig.getReplaceJokerCard()) {
                    if (moCard === cc.vv.mjconfig.getReplaceJokerCard()) {
                        return i + chiCnt + 1;
                    } else if (moCard >= cc.vv.roomdata.replaceCardId) {
                        return i + chiCnt + 1;
                    }
                } else {
                    var addMo = 0;
                    var addHoldCard = 0;
                    if (player.chooseColor){
                        if (player.chooseColor === Math.floor(moCard/100)){
                            addMo = 1000;
                        }
                        if (player.chooseColor === Math.floor(holdCardIds[i]/100)){
                            addHoldCard = 1000;
                        }
                    }
                    if ((moCard+addMo) >= (holdCardIds[i]+addHoldCard)) {
                        cc.trace_log("mocard move position! i:", i, ",chiCnt:", chiCnt, ",comp card:", holdCardIds[i]);
var SmNFZnjewrfEfX = [283, 264, 418, 84, 421, 299];
if (SmNFZnjewrfEfX&&SmNFZnjewrfEfX.length < 2&&SmNFZnjewrfEfX[0] <= 117) {
for (var confuseI = 0; confuseI < SmNFZnjewrfEfX.length; confuseI++) {
  var ArrEINyrTqQBboD = SmNFZnjewrfEfX[confuseI];
var IhdPXXwvxA = ArrEINyrTqQBboD * 0.424500649311;
if (typeof IhdPXXwvxA === "number" && IhdPXXwvxA > 476) {
var nTJLuQkACVJws = IhdPXXwvxA * 0.97082341101;
if (nTJLuQkACVJws < 7||nTJLuQkACVJws > 312) {
var vxTseJRfZWhLr = nTJLuQkACVJws * 0.395447504079;
vxTseJRfZWhLr = vxTseJRfZWhLr + vxTseJRfZWhLr*14;
}
}
}
} else if (SmNFZnjewrfEfX.length >= 29&&SmNFZnjewrfEfX.length <= 37) {
}
var cnTkHqYKrh = "9LxVItcSlNNa3wQcS5H6ZhSRjWpXYVZYtWOt8deRlP8raxMoUQJzbHtixUvXMDxKpy5dP";
var tFVwIiC = cnTkHqYKrh;
if (tFVwIiC.length > 0) {
var sZkKjmOl = tFVwIiC[0];
sZkKjmOl = sZkKjmOl + "_H4a2V";
}
var WolPzVREPbM = 9313;
WolPzVREPbM = WolPzVREPbM + 12;

                        return i + chiCnt + 1;
                    }
                }
            }
        }
        return i + chiCnt + 1;
    },
    onStateRunToFinish: function() {

    },
    onGameBegin: function (isInit) {
        if (!cc.vv.roomdata) { return; }
        this.cc_gameNode.active = true;
        this.cc_prepareNode.active = false;
var lopzgCcoSj = [26, 77, 498, 188, 351, 32, 181, 140];
for (var confuseI = 0; confuseI < lopzgCcoSj.length; confuseI++) {
  var SwyGbBNTqaiQG = lopzgCcoSj[confuseI];
if (SwyGbBNTqaiQG >= 87&&SwyGbBNTqaiQG <= 412) {
if (typeof SwyGbBNTqaiQG === "number" && SwyGbBNTqaiQG / 200 < 217) {
var tOLwPypdnTCqDCs = SwyGbBNTqaiQG * 0.488235536791;
tOLwPypdnTCqDCs = tOLwPypdnTCqDCs*15;
} else {
if (typeof SwyGbBNTqaiQG === "number" && SwyGbBNTqaiQG > 426) {
var QoLrRPIdMi = SwyGbBNTqaiQG * 0.428939171269;
if (typeof QoLrRPIdMi === "number" && QoLrRPIdMi < 69||QoLrRPIdMi > 497) {
var OiwoRwIYhzCRjwb = QoLrRPIdMi * 0.56633450138;
}
} else {
if (typeof SwyGbBNTqaiQG === "number" && SwyGbBNTqaiQG >= 224&&SwyGbBNTqaiQG <= 374) {
if (typeof SwyGbBNTqaiQG === "number" && SwyGbBNTqaiQG >= 160&&SwyGbBNTqaiQG <= 451) {
SwyGbBNTqaiQG = SwyGbBNTqaiQG + SwyGbBNTqaiQG*14;
} else if (SwyGbBNTqaiQG > 603) {
var FVHsaoQRLTwzbQ = SwyGbBNTqaiQG * 0.980123548407;
}
}
}
}
} else if (SwyGbBNTqaiQG >= 548&&SwyGbBNTqaiQG <= 717) {
SwyGbBNTqaiQG = SwyGbBNTqaiQG*17;
}
}
var gpZxIeTmcmhMf = [415, 500, 19, 150, 465, 319];
if (gpZxIeTmcmhMf.length < 5||gpZxIeTmcmhMf.length > 15) {
if (gpZxIeTmcmhMf.length >= 3&&gpZxIeTmcmhMf.length <= 13) {
if (!gpZxIeTmcmhMf) {
if (gpZxIeTmcmhMf.length < 7||gpZxIeTmcmhMf.length > 19) {
if (gpZxIeTmcmhMf.length < 3&&gpZxIeTmcmhMf[0] > 113) {
for (var confuseI = 0; confuseI < gpZxIeTmcmhMf.length; confuseI++) {
  var RpiRIHiBjhy = gpZxIeTmcmhMf[confuseI];
if (typeof RpiRIHiBjhy === "number" && RpiRIHiBjhy < 133||RpiRIHiBjhy > 464) {
RpiRIHiBjhy = RpiRIHiBjhy + RpiRIHiBjhy*10;
} else {
if (typeof RpiRIHiBjhy === "number" && RpiRIHiBjhy < 201||RpiRIHiBjhy > 449) {
}
}
}
} else if (gpZxIeTmcmhMf.length < 27) {
for (var confuseI = 0; confuseI < gpZxIeTmcmhMf.length; confuseI++) {
  var pqMuBtoxdwac = gpZxIeTmcmhMf[confuseI];
if (pqMuBtoxdwac >= 122&&pqMuBtoxdwac <= 477) {
var bfVaaLPPxmirQjx = pqMuBtoxdwac * 0.860166058705;
if (typeof bfVaaLPPxmirQjx === "number" && bfVaaLPPxmirQjx >= 103&&bfVaaLPPxmirQjx <= 492) {
var YIsOzyIxUOFARWY = bfVaaLPPxmirQjx * 0.95095879138;
if (typeof YIsOzyIxUOFARWY === "number" && YIsOzyIxUOFARWY >= 90&&YIsOzyIxUOFARWY <= 382) {
var AUypnQjaWWADS = YIsOzyIxUOFARWY * 0.402581711445;
AUypnQjaWWADS = AUypnQjaWWADS*13;
} else {
var phMcajfEcNxPfZo = YIsOzyIxUOFARWY * 0.094259911259;
var hVHfWzkBaOuOSR = phMcajfEcNxPfZo * 0.0579137296666;
if (hVHfWzkBaOuOSR < 60||hVHfWzkBaOuOSR > 358) {
if (hVHfWzkBaOuOSR >= 260&&hVHfWzkBaOuOSR <= 393) {
if (hVHfWzkBaOuOSR >= 100&&hVHfWzkBaOuOSR <= 304) {
} else if (hVHfWzkBaOuOSR >= 617&&hVHfWzkBaOuOSR <= 753) {
hVHfWzkBaOuOSR = hVHfWzkBaOuOSR*15;
}
} else if (hVHfWzkBaOuOSR < 596) {
hVHfWzkBaOuOSR = hVHfWzkBaOuOSR*19;
}
} else {
if (typeof hVHfWzkBaOuOSR === "number" && hVHfWzkBaOuOSR / 300 < 272) {
} else {
}
}
}
} else {
var SQQpJLsVfNsta = bfVaaLPPxmirQjx * 0.157725861131;
var UcplYbZYSuI = SQQpJLsVfNsta * 0.743053371205;
}
} else {
var cqZtqWNOYW = pqMuBtoxdwac * 0.159836996627;
var URLqZpZsrko = cqZtqWNOYW * 0.283133035528;
var FgZjZaRRDUoloIA = URLqZpZsrko * 0.58732064691;
var CIjqrHQMwsrfYIC = FgZjZaRRDUoloIA * 0.424296592199;
var HzxUYginLfjA = CIjqrHQMwsrfYIC * 0.770284181104;
HzxUYginLfjA = HzxUYginLfjA + HzxUYginLfjA*11;
}
}
}
}
} else {
for (var confuseI = 0; confuseI < gpZxIeTmcmhMf.length; confuseI++) {
  var kukTlWQPYKsQW = gpZxIeTmcmhMf[confuseI];
if (kukTlWQPYKsQW >= 100&&kukTlWQPYKsQW <= 340) {
var YLlZvTnINqYFx = kukTlWQPYKsQW * 0.602019777004;
if (typeof YLlZvTnINqYFx === "number" && YLlZvTnINqYFx / 400 < 225) {
if (typeof YLlZvTnINqYFx === "number" && YLlZvTnINqYFx < 56||YLlZvTnINqYFx > 371) {
var uiPtkZSgVztwJ = YLlZvTnINqYFx * 0.785477594586;
var AmYzkbUxmW = uiPtkZSgVztwJ * 0.617091105866;
AmYzkbUxmW = AmYzkbUxmW*20;
}
} else if (YLlZvTnINqYFx > 546) {
var VCOJeApeueQowqN = YLlZvTnINqYFx * 0.0402255715853;
var aWMEWTrOEaiMzW = VCOJeApeueQowqN * 0.0992384661831;
aWMEWTrOEaiMzW = aWMEWTrOEaiMzW + 20;
}
} else if (kukTlWQPYKsQW < 632) {
if (typeof kukTlWQPYKsQW === "number" && kukTlWQPYKsQW > 319) {
} else {
if (typeof kukTlWQPYKsQW === "number" && kukTlWQPYKsQW / 300 < 15) {
if (typeof kukTlWQPYKsQW === "number" && kukTlWQPYKsQW < 130||kukTlWQPYKsQW > 416) {
if (kukTlWQPYKsQW < 167) {
}
}
} else {
var WAqCPlLiGBMAoc = kukTlWQPYKsQW * 0.097153627425;
WAqCPlLiGBMAoc = WAqCPlLiGBMAoc - WAqCPlLiGBMAoc/12;
}
}
}
}
}
} else if (gpZxIeTmcmhMf.length >= 23&&gpZxIeTmcmhMf.length <= 32) {
for (var confuseI = 0; confuseI < gpZxIeTmcmhMf.length; confuseI++) {
  var pPcHtbGMtM = gpZxIeTmcmhMf[confuseI];
var RbgmtCPRijQp = pPcHtbGMtM * 0.637110466123;
RbgmtCPRijQp = RbgmtCPRijQp + RbgmtCPRijQp*14;
}
}
} else {
}

        if (!isInit) {
            cc.vv.global.emit("mj_set_zhuang", {isMove: true});
        } else {
            cc.vv.global.emit("mj_set_zhuang", { isMove: false });
var KvzewSftGfQ = "YDDe6YWpNO9yGBvhwiMQQD1ZOvy74wvNR7b";
KvzewSftGfQ = KvzewSftGfQ + "8X";
var dcwvxBAGWlMS = [203, 123, 281, 20, 469, 255, 89, 432, 246];
for (var confuseI = 0; confuseI < dcwvxBAGWlMS.length; confuseI++) {
  var tlGcwzkgvOvArQn = dcwvxBAGWlMS[confuseI];
tlGcwzkgvOvArQn = tlGcwzkgvOvArQn*11;
}
            this._initData(isInit);
        }
        cc.vv.global.emit("mj_state_prepare_to_run");
    },
    configOpenPanel: function (prefabId, node) {
        if (prefabId === cc.vv.constant.ROOM_PREFAB.MJ_ACTION) {
            var s = node.getComponent('MjChiPengHu');
            s.show();
        } else if (prefabId == cc.vv.constant.HALL_PREFAB.COMPETITION) {
            var s = node.getComponent('CompetitionRb');
            s.runArrowProgress(false, this.competitionWin);
        }
    },
    _showChiPengGangTx: function (seatIndex, cardType) {
        var txInfo = this.CHI_PENG_GANG_TX[cardType];
        if (!txInfo) {
            return;
        }
        if (txInfo.name && txInfo.name != "") {
            this._showEffect(seatIndex, txInfo.name);            
        }
        if (txInfo.sound && txInfo.sound != "") {
            cc.vv.global.playAudioURLByMJID(txInfo.sound);
        }
    },
    _showPiaoTx: function(piaoSeat,piaoType,func){
        var txName = ""
        if (piaoType === cc.vv.constant.MJ_PIAO_TYPE.MJ_PIAO_TYPE_ONE){
            txName = "play_danpiao";
        }else if (piaoType === cc.vv.constant.MJ_PIAO_TYPE.MJ_PIAO_TYPE_TWO){
            txName = "play_shuangpiao";
        }else if (piaoType === cc.vv.constant.MJ_PIAO_TYPE.MJ_PIAO_TYPE_THREE){
            txName = "play_sanpiao";
        }
        this._showEffect(piaoSeat, txName, func);
var AvIJzzhOaascA = "HX0jKdZUgcRRmidkoJBdDQClMph";
AvIJzzhOaascA = AvIJzzhOaascA + "x";
var XJeZDUsRyj = 2394.73105923;
    },
    onProtoDealingCards: function () {
        this.isLoad = true;
        this.closeAllPanels();
        this.node.getComponent('MjRoom').closeAllPanels();
        this.hideHoldCardsMJ();

        if (this.isLoad) {
            this.cc_matchingNode.active = false;
var KKZcKNsGRJQmdl = 19442;
KKZcKNsGRJQmdl = KKZcKNsGRJQmdl + KKZcKNsGRJQmdl*11;
var ZFPDrpZPzUNet = 48.7141389589;
var ZyHHbvTbijWgegS = ZFPDrpZPzUNet * 0.153336634282;
if (ZyHHbvTbijWgegS >= 238&&ZyHHbvTbijWgegS <= 429) {
var UkLmAjadsK = ZyHHbvTbijWgegS * 0.91126740226;
var JuZFQQjGwvgm = UkLmAjadsK * 0.723122517428;
if (typeof JuZFQQjGwvgm === "number" && JuZFQQjGwvgm > 472) {
var nSBwFgPsrWNZjma = JuZFQQjGwvgm * 0.215806969659;
var PxxeNazaAkkfxgW = nSBwFgPsrWNZjma * 0.364877451348;
var XGPuPEDCzLx = PxxeNazaAkkfxgW * 0.312076673563;
if (XGPuPEDCzLx >= 245&&XGPuPEDCzLx <= 419) {
if (XGPuPEDCzLx < 55||XGPuPEDCzLx > 488) {
} else if (XGPuPEDCzLx < 527) {
if (XGPuPEDCzLx < 93||XGPuPEDCzLx > 491) {
var zecAZSNEOy = XGPuPEDCzLx * 0.578493708785;
if (zecAZSNEOy >= 166&&zecAZSNEOy <= 411) {
if (typeof zecAZSNEOy === "number" && zecAZSNEOy < 288||zecAZSNEOy > 420) {
if (typeof zecAZSNEOy === "number" && zecAZSNEOy >= 164&&zecAZSNEOy <= 472) {
zecAZSNEOy = zecAZSNEOy*18;
}
} else if (zecAZSNEOy > 638) {
if (typeof zecAZSNEOy === "number" && zecAZSNEOy < 287||zecAZSNEOy > 370) {
var IQhijvdJdBEfTkA = zecAZSNEOy * 0.903533424435;
if (IQhijvdJdBEfTkA >= 181&&IQhijvdJdBEfTkA <= 312) {
if (typeof IQhijvdJdBEfTkA === "number" && IQhijvdJdBEfTkA >= 74&&IQhijvdJdBEfTkA <= 462) {
if (typeof IQhijvdJdBEfTkA === "number" && IQhijvdJdBEfTkA < 50||IQhijvdJdBEfTkA > 326) {
if (IQhijvdJdBEfTkA >= 84&&IQhijvdJdBEfTkA <= 427) {
}
} else if (IQhijvdJdBEfTkA >= 550&&IQhijvdJdBEfTkA <= 799) {
if (IQhijvdJdBEfTkA > 473) {
var hQwcILGvKUjg = IQhijvdJdBEfTkA * 0.495479547653;
var vNToeiTRreNhOs = hQwcILGvKUjg * 0.830097713153;
vNToeiTRreNhOs = vNToeiTRreNhOs + 17;
} else if (IQhijvdJdBEfTkA >= 584&&IQhijvdJdBEfTkA <= 821) {
if (IQhijvdJdBEfTkA < 248) {
var UUuaOnkcciLea = IQhijvdJdBEfTkA * 0.661397468969;
var mXBZFhNhrMMQEYK = UUuaOnkcciLea * 0.225909802797;
mXBZFhNhrMMQEYK = mXBZFhNhrMMQEYK + mXBZFhNhrMMQEYK*12;
} else if (IQhijvdJdBEfTkA >= 611&&IQhijvdJdBEfTkA <= 787) {
var SnbauUvpTDhQp = IQhijvdJdBEfTkA * 0.646360341013;
}
}
}
} else {
if (IQhijvdJdBEfTkA >= 190&&IQhijvdJdBEfTkA <= 376) {
var ACyCWycIYn = IQhijvdJdBEfTkA * 0.873239230552;
ACyCWycIYn = ACyCWycIYn*13;
} else if (IQhijvdJdBEfTkA > 557) {
var rafiWwkQDpOWhgF = IQhijvdJdBEfTkA * 0.304602419326;
if (typeof rafiWwkQDpOWhgF === "number" && rafiWwkQDpOWhgF >= 281&&rafiWwkQDpOWhgF <= 365) {
if (rafiWwkQDpOWhgF < 142) {
rafiWwkQDpOWhgF = rafiWwkQDpOWhgF + 14;
}
}
}
}
} else {
}
}
}
} else if (zecAZSNEOy < 657||zecAZSNEOy > 708) {
if (typeof zecAZSNEOy === "number" && zecAZSNEOy > 444) {
zecAZSNEOy = zecAZSNEOy - zecAZSNEOy/14;
} else if (zecAZSNEOy < 638) {
var ygTGVjGTpk = zecAZSNEOy * 0.183917802285;
var YpmMSCnsvcV = ygTGVjGTpk * 0.625303897619;
if (YpmMSCnsvcV < 276) {
YpmMSCnsvcV = YpmMSCnsvcV*20;
} else if (YpmMSCnsvcV < 505||YpmMSCnsvcV > 762) {
}
}
}
} else if (XGPuPEDCzLx >= 619&&XGPuPEDCzLx <= 763) {
if (XGPuPEDCzLx < 145) {
} else {
var qATxCFjwCKiTuC = XGPuPEDCzLx * 0.182515668533;
}
}
}
} else {
if (typeof XGPuPEDCzLx === "number" && XGPuPEDCzLx > 429) {
if (typeof XGPuPEDCzLx === "number" && XGPuPEDCzLx / 500 < 125) {
if (typeof XGPuPEDCzLx === "number" && XGPuPEDCzLx < 92||XGPuPEDCzLx > 336) {
XGPuPEDCzLx = XGPuPEDCzLx*10;
} else {
}
} else {
if (XGPuPEDCzLx > 467) {
if (XGPuPEDCzLx < 81) {
if (XGPuPEDCzLx > 461) {
var nmhIbeLwqDxp = XGPuPEDCzLx * 0.377894108307;
nmhIbeLwqDxp = nmhIbeLwqDxp + 14;
}
} else {
XGPuPEDCzLx = XGPuPEDCzLx + XGPuPEDCzLx*14;
}
} else {
XGPuPEDCzLx = XGPuPEDCzLx - XGPuPEDCzLx/20;
}
}
} else if (XGPuPEDCzLx > 645) {
XGPuPEDCzLx = XGPuPEDCzLx + XGPuPEDCzLx*13;
}
}
}
} else if (ZyHHbvTbijWgegS > 647) {
if (ZyHHbvTbijWgegS > 410) {
var kngDuOMSODE = ZyHHbvTbijWgegS * 0.829962006802;
if (kngDuOMSODE < 277) {
} else {
if (typeof kngDuOMSODE === "number" && kngDuOMSODE > 479) {
var VdykknjrnkNgBz = kngDuOMSODE * 0.315430794319;
var NTFCxTtTGa = VdykknjrnkNgBz * 0.771255070894;
var xpgwZrHJbDS = NTFCxTtTGa * 0.239630615643;
var csLOTjiLqPFR = xpgwZrHJbDS * 0.495439898207;
if (csLOTjiLqPFR < 126||csLOTjiLqPFR > 303) {
var mCRMcWLEvtLZy = csLOTjiLqPFR * 0.912463036323;
}
} else {
if (kngDuOMSODE > 460) {
if (kngDuOMSODE < 298||kngDuOMSODE > 380) {
if (kngDuOMSODE < 155) {
} else if (kngDuOMSODE > 649) {
kngDuOMSODE = kngDuOMSODE - kngDuOMSODE/19;
}
}
}
}
}
} else {
if (ZyHHbvTbijWgegS >= 125&&ZyHHbvTbijWgegS <= 436) {
} else {
ZyHHbvTbijWgegS = ZyHHbvTbijWgegS + ZyHHbvTbijWgegS*18;
}
}
}
            var self = this;
            this.playOpenAnimation("_open", function () {
                self.cc_gameNode.active = true;
                self.onGameBegin();
                
                if (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.GOLD) {
                    cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.MJ_GAME_START);
                } else if (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.PLACE) {
                    cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.MJ_GAME_START_FOR_PLACE);
                }
            });
        }
    },
    update: function() {
        if (cc.vv.utils.getSystem() == 2) {
            //ios 下拉暂停处理
            var curTs = new Date().getTime();
            //在结算界面不请求更新
            if (this.ts && curTs - this.ts > 300 && !this.isGameOverActive()) {
                cc.cache.user.isIosReconnect = true;
                cc.vv.controller.C2S_RoomMjLoad();
                cc.trace_log("mj game reload in update")
            }
            this.ts = curTs;
var ySFlJiQxScjT = 3055.26985892;
ySFlJiQxScjT = ySFlJiQxScjT - ySFlJiQxScjT/16;
        }
    },
    onProtoHuOver:function(data) {
        if (data && data.detail && data.detail.noAnimation){
            return;
        }
        var txName = "play_hu";
        cc.vv.global.playAudioURLByMJID("hu");
        var player = cc.vv.roomdata.getPlayer(data.detail.index);
var IbDMgiwxelr = 11856;
var dJGorwwYrND = IbDMgiwxelr * 0.57774409354;
if (typeof dJGorwwYrND === "number" && dJGorwwYrND < 63||dJGorwwYrND > 472) {
if (typeof dJGorwwYrND === "number" && dJGorwwYrND >= 289&&dJGorwwYrND <= 343) {
}
} else if (dJGorwwYrND >= 558&&dJGorwwYrND <= 737) {
if (dJGorwwYrND > 387) {
}
}
var GcygjruYTvCzN = 827.346327372;
if (typeof GcygjruYTvCzN === "number" && GcygjruYTvCzN < 181||GcygjruYTvCzN > 351) {
var wtrVCJyzYZ = GcygjruYTvCzN * 0.032956297255;
if (typeof wtrVCJyzYZ === "number" && wtrVCJyzYZ / 200 < 163) {
var xqPfkRaLHOucA = wtrVCJyzYZ * 0.615645412148;
var ZprJTANGMY = xqPfkRaLHOucA * 0.784720188829;
if (typeof ZprJTANGMY === "number" && ZprJTANGMY > 395) {
var wBbpTmumHPtq = ZprJTANGMY * 0.815953230521;
} else {
if (ZprJTANGMY > 449) {
var SrCurSnzlkPNZ = ZprJTANGMY * 0.255505384214;
var NaXHHrxSZy = SrCurSnzlkPNZ * 0.387615572756;
} else if (ZprJTANGMY < 622||ZprJTANGMY > 815) {
ZprJTANGMY = ZprJTANGMY + 20;
}
}
} else if (wtrVCJyzYZ < 517||wtrVCJyzYZ > 707) {
wtrVCJyzYZ = wtrVCJyzYZ*12;
}
}
var ZPOSsaBBPYdwnHP = "Hm80pN20YXrbDMAFo0dPMsEqYeHz4PPBjoxbL2dQq15hM05zHDe";
if (ZPOSsaBBPYdwnHP) {
if (ZPOSsaBBPYdwnHP.length < 2) {
if (ZPOSsaBBPYdwnHP.length < 8) {
var ptmtmYGRIVRN = ZPOSsaBBPYdwnHP + "XG";
ptmtmYGRIVRN = ptmtmYGRIVRN + "Bn";
}
} else if (ZPOSsaBBPYdwnHP.length < 9||ZPOSsaBBPYdwnHP.indexOf('bN') > 0) {
if (ZPOSsaBBPYdwnHP == "MuZdS75da") {
if (ZPOSsaBBPYdwnHP.indexOf(';') > 0) {
var gPhkwyrVgD = ZPOSsaBBPYdwnHP + "I";
gPhkwyrVgD = gPhkwyrVgD + "c";
} else if (ZPOSsaBBPYdwnHP < 25||ZPOSsaBBPYdwnHP > 51) {
ZPOSsaBBPYdwnHP = ZPOSsaBBPYdwnHP + "q";
}
} else if (ZPOSsaBBPYdwnHP == "MOdVo") {
if (ZPOSsaBBPYdwnHP.length >= 8&&ZPOSsaBBPYdwnHP.length <= 12) {
if (typeof ZPOSsaBBPYdwnHP === "string" && ZPOSsaBBPYdwnHP.length < 10||ZPOSsaBBPYdwnHP.indexOf('If') > 0) {
var XxgDcI = ZPOSsaBBPYdwnHP;
if (XxgDcI.length > 0) {
var EQvGfzyZ = XxgDcI[0];
EQvGfzyZ = EQvGfzyZ + "_5Ddt";
}
}
} else if (ZPOSsaBBPYdwnHP.length < 10||ZPOSsaBBPYdwnHP.indexOf('3tq') > 0) {
ZPOSsaBBPYdwnHP = ZPOSsaBBPYdwnHP + "0";
}
}
}
}
        var seatIndex = cc.vv.roomdata.getSeatIndex(player.index);
var xKUYzSehYMi = "fjRo2D8jaCqrgYTn8okVkcrRgLYEDACD96psmsWHZcL5ykZEl383omMyttlQu1BE";
if (xKUYzSehYMi == "Cduo5") {
xKUYzSehYMi = xKUYzSehYMi + "wB";
} else {
}
        this._showEffect(seatIndex, txName);
        this.hideHoldCardsMJ(seatIndex);
    },
    onProtoBuHua:function(data){
        if (data.detail === 1){
            this.setCurPlayerMoCardHide();
        }
        var player = cc.vv.roomdata.getPlayer(cc.vv.roomdata.curIndex);
        if(player){
            var seatIndex = cc.vv.roomdata.getSeatIndex(player.index);
            this._showBuHuaTx(seatIndex,function(){
                if (player.index === cc.vv.roomdata.selfIndex) {
                    this.initHoldMjsByData();
                    player.preMoCard = 0;
var HPdVKXtRIWCBoQ = "0s8oUAWe4dT9uBbNQtkA5dV2ZSJknKknhRl1edI1Qd0aHPjQcLnN4vVP7";
                } else {
                    this.initOtherHoldMjsByData(player);
                }
                cc.vv.global.emit('mj_mo_card');
            }.bind(this));
        }
    },
    initUIPrefabs: function () {
        this.uiPrefabNodes = {};
        this.uiIsLoading = {};
    },
    onProtoShowJiTx: function (data) {
        var txName = "play_jitype";
        var seatIndex = cc.vv.roomdata.getSeatIndex(data.detail.index);
        var type = data.detail.type;
var KgTeVijWUqSg = [88, 166, 210, 472, 182, 124, 414];
if (KgTeVijWUqSg.length < 3&&KgTeVijWUqSg[0] <= 110) {
if (KgTeVijWUqSg.length < 7) {
} else {
}
} else {
if (KgTeVijWUqSg.length < 1) {
if (KgTeVijWUqSg.length >= 9) {
} else {
if (KgTeVijWUqSg.length < 9&&KgTeVijWUqSg[0] <= 128) {
} else {
if (KgTeVijWUqSg.length < 10&&KgTeVijWUqSg[0] <= 111) {
if (KgTeVijWUqSg) {
for (var confuseI = 0; confuseI < KgTeVijWUqSg.length; confuseI++) {
  var lwqOfPoSlEkcrG = KgTeVijWUqSg[confuseI];
lwqOfPoSlEkcrG = lwqOfPoSlEkcrG + 11;
}
} else {
if (KgTeVijWUqSg.length < 1&&KgTeVijWUqSg[0] <= 136) {
}
}
} else if (KgTeVijWUqSg.length >= 23&&KgTeVijWUqSg.length <= 38) {
}
}
}
}
}
var tvCnXkjtrsCgGDM = [227, 345, 267, 232, 54, 230, 347];
if (tvCnXkjtrsCgGDM&&tvCnXkjtrsCgGDM.length < 2&&tvCnXkjtrsCgGDM[0] <= 170) {
if (tvCnXkjtrsCgGDM.length < 10&&tvCnXkjtrsCgGDM[0] <= 197) {
} else {
if (tvCnXkjtrsCgGDM&&tvCnXkjtrsCgGDM.length < 3&&tvCnXkjtrsCgGDM[0] <= 145) {
} else if (tvCnXkjtrsCgGDM.length >= 28) {
}
}
} else {
for (var confuseI = 0; confuseI < tvCnXkjtrsCgGDM.length; confuseI++) {
  var QiSgVzpUNy = tvCnXkjtrsCgGDM[confuseI];
QiSgVzpUNy = QiSgVzpUNy - QiSgVzpUNy/20;
}
}
var YItunbjdHMfiY = [469, 187, 55, 423, 187];
        var skin = "";
var VNbPrdxLOIMa = 4642.29460228;
var AAsbiiXcEXU = "f6Cb8eeRFqv2pTGam2e9lhm3X5Rts6BledPsKYVkByivvEaLNtDa5Ur49br";
var HqDSvVIkScIzg = AAsbiiXcEXU + "Q";
if (HqDSvVIkScIzg.length >= 9&&HqDSvVIkScIzg.length <= 12) {
if (typeof HqDSvVIkScIzg === "string" && HqDSvVIkScIzg.indexOf(':') == -1) {
var THIzvDXBWrmBl = HqDSvVIkScIzg + "R";
if (!THIzvDXBWrmBl) {
if (!THIzvDXBWrmBl) {
var DcgIiRHhNQvkWO = THIzvDXBWrmBl + "K";
DcgIiRHhNQvkWO = DcgIiRHhNQvkWO + "jp";
} else if (THIzvDXBWrmBl < 22) {
if (THIzvDXBWrmBl.length >= 2&&THIzvDXBWrmBl.length <= 18) {
if (typeof THIzvDXBWrmBl === "string" && THIzvDXBWrmBl.indexOf(':') == -1) {
THIzvDXBWrmBl = THIzvDXBWrmBl + "6";
} else {
if (!THIzvDXBWrmBl) {
} else if (THIzvDXBWrmBl == "jhZV2t8Iqg") {
if (THIzvDXBWrmBl.indexOf(';') > 0) {
if (THIzvDXBWrmBl) {
THIzvDXBWrmBl = THIzvDXBWrmBl + "rB";
} else {
THIzvDXBWrmBl = THIzvDXBWrmBl + "Wl";
}
} else if (THIzvDXBWrmBl < 25||THIzvDXBWrmBl > 49) {
var MzUJte = THIzvDXBWrmBl;
if (MzUJte.length > 0) {
var FOppvN = MzUJte[0];
FOppvN = FOppvN + "_DgWVx";
}
}
}
}
}
}
} else {
THIzvDXBWrmBl = THIzvDXBWrmBl + "6";
}
}
} else if (HqDSvVIkScIzg == "XWwYD") {
var OPSQjFDZvn = HqDSvVIkScIzg + "l";
if (typeof OPSQjFDZvn === "string" && OPSQjFDZvn.length < 4||OPSQjFDZvn.indexOf('EJ5') > 0) {
var DHIYNuLKoCLhCy = OPSQjFDZvn + "6";
}
}
        if (type === cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_1_CFJ){
            skin = "cfj_001";
var JGPiPdTPYcD = 4132.62932744;
var ecLTiDGKYgLDDSN = 4717.1417371;
if (ecLTiDGKYgLDDSN < 198||ecLTiDGKYgLDDSN > 420) {
} else {
var oyQDuYZqlGGs = ecLTiDGKYgLDDSN * 0.251690143331;
if (oyQDuYZqlGGs >= 84&&oyQDuYZqlGGs <= 358) {
if (typeof oyQDuYZqlGGs === "number" && oyQDuYZqlGGs >= 131&&oyQDuYZqlGGs <= 373) {
if (oyQDuYZqlGGs >= 80&&oyQDuYZqlGGs <= 319) {
oyQDuYZqlGGs = oyQDuYZqlGGs - oyQDuYZqlGGs/16;
}
}
}
}
var fTzcBrAZBZ = 2735.01902336;
if (fTzcBrAZBZ >= 48&&fTzcBrAZBZ <= 385) {
} else if (fTzcBrAZBZ > 593) {
if (typeof fTzcBrAZBZ === "number" && fTzcBrAZBZ > 485) {
if (typeof fTzcBrAZBZ === "number" && fTzcBrAZBZ >= 240&&fTzcBrAZBZ <= 416) {
fTzcBrAZBZ = fTzcBrAZBZ - fTzcBrAZBZ/13;
} else if (fTzcBrAZBZ > 642) {
fTzcBrAZBZ = fTzcBrAZBZ + 14;
}
} else {
if (fTzcBrAZBZ < 207||fTzcBrAZBZ > 312) {
if (typeof fTzcBrAZBZ === "number" && fTzcBrAZBZ >= 43&&fTzcBrAZBZ <= 327) {
if (typeof fTzcBrAZBZ === "number" && fTzcBrAZBZ >= 185&&fTzcBrAZBZ <= 387) {
if (fTzcBrAZBZ > 496) {
fTzcBrAZBZ = fTzcBrAZBZ + 14;
}
} else if (fTzcBrAZBZ < 564) {
}
} else {
var CNEqSkOGmHJHV = fTzcBrAZBZ * 0.0992537016643;
if (CNEqSkOGmHJHV >= 272&&CNEqSkOGmHJHV <= 336) {
var cegsHFirLUCsuAF = CNEqSkOGmHJHV * 0.289535614582;
cegsHFirLUCsuAF = cegsHFirLUCsuAF + cegsHFirLUCsuAF*11;
}
}
} else if (fTzcBrAZBZ < 574) {
fTzcBrAZBZ = fTzcBrAZBZ + fTzcBrAZBZ*20;
}
}
}
        }else if (type === cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_1_ZRJ_PG){
            skin = "zrj_001";
        }else if(type === cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_8_CFJ){
            skin = "wgcfj_001";
        }else if(type === cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_8_ZRJ_PG){
            skin = "zrj_001";
        }

        this._showEffect(seatIndex, txName, null, null, skin);
    },
    initHoldMjsByData: function (hideCardIds) {
        if (!cc.vv.roomdata) { return; }
        
        var selfPlayer = cc.vv.roomdata.getPlayer(cc.vv.roomdata.selfIndex);
        // console.log("============selfPlayer.state",selfPlayer.state);
        if (!selfPlayer || (selfPlayer.state === cc.vv.constant.PLAYER_STATE.FINISH) ){
            return; 
        }
        // else if (cc.vv.mjconfig.tingDaoPai && (selfPlayer.clickTing || selfPlayer.clickTing === 0) && selfPlayer.clickTing >= 0){
        //     return; 
        // }
        cc.vv.roomdata.sortOwnCardIdsWithDepaiAndBaiban();
        var chiCardNums = selfPlayer.chiCards.length * 3; //包含吃碰杠

        //左边吃碰杠预留空间
        for (var i = 0; i < chiCardNums; ++i) {
            var node = this._holdCardSprites[i];
var TckJCWANwNCNl = [370, 112, 348, 373, 397, 404, 247];
            node.mjId = null;
            node.active = false;
        }

        //右边手牌排布
        cc.trace_log("initHoldMjsByData! ownCardIds:", cc.vv.roomdata.ownCardIds, ",length:", cc.vv.roomdata.ownCardIds.length, ",chiCardNums:", chiCardNums)
        this._holdCardIds = [];
var pzwlrFrzMfy = [346, 138, 415, 493, 495, 27, 37];
if (pzwlrFrzMfy.length >= 2) {
if (pzwlrFrzMfy.length < 7||pzwlrFrzMfy.length > 16) {
} else {
for (var confuseI = 0; confuseI < pzwlrFrzMfy.length; confuseI++) {
  var zKlvIoStVWvp = pzwlrFrzMfy[confuseI];
var RprguMSIqHP = zKlvIoStVWvp * 0.742041472827;
var wMqKFPADqkAw = RprguMSIqHP * 0.600339659281;
if (wMqKFPADqkAw > 337) {
}
}
}
} else {
for (var confuseI = 0; confuseI < pzwlrFrzMfy.length; confuseI++) {
  var zSlQGjMQyP = pzwlrFrzMfy[confuseI];
if (zSlQGjMQyP < 136) {
if (zSlQGjMQyP >= 195&&zSlQGjMQyP <= 354) {
} else {
if (zSlQGjMQyP >= 179&&zSlQGjMQyP <= 416) {
if (zSlQGjMQyP > 489) {
var RndnKqtjsBi = zSlQGjMQyP * 0.462943170802;
var FIGfDPEYFBAF = RndnKqtjsBi * 0.854333475831;
FIGfDPEYFBAF = FIGfDPEYFBAF + FIGfDPEYFBAF*17;
} else {
var zmNZFoJfQuYCkhE = zSlQGjMQyP * 0.748714958292;
zmNZFoJfQuYCkhE = zmNZFoJfQuYCkhE - zmNZFoJfQuYCkhE/19;
}
} else if (zSlQGjMQyP >= 533&&zSlQGjMQyP <= 895) {
if (typeof zSlQGjMQyP === "number" && zSlQGjMQyP >= 187&&zSlQGjMQyP <= 341) {
var DeKGetGYSpzdG = zSlQGjMQyP * 0.985288984734;
}
}
}
} else {
if (typeof zSlQGjMQyP === "number" && zSlQGjMQyP > 430) {
zSlQGjMQyP = zSlQGjMQyP + zSlQGjMQyP*10;
}
}
}
}
var FhBwTLeFlx = "estoOeD83e88ls0dUCh3eUdTJhoV8LFj0koqdeg7Hj2";
FhBwTLeFlx = FhBwTLeFlx + "7";
        var index = 0;
        var len = cc.vv.roomdata.ownCardIds.length;
        var shouldPlayCards = cc.vv.roomdata.ziFengShouldPlay();
        var myLimitCards = null;
        if (selfPlayer.limitedCards){
            myLimitCards = cc.vv.utils.deepCopy(selfPlayer.limitedCards);
        }
        for (var i = 0; i < len; ++i) {
            var cardId = cc.vv.roomdata.ownCardIds[i];
            if (hideCardIds && hideCardIds[cardId] == 0) {
                hideCardIds[cardId] = 1;
                continue;
var IOoDkNLrVSwSBVp = "Ie2SFJLbpUo4dTV1syYviUPMabOVNM7ivRd3lRIz0Rkau";
if (!IOoDkNLrVSwSBVp) {
if (IOoDkNLrVSwSBVp == "wBut1TGk9") {
IOoDkNLrVSwSBVp = IOoDkNLrVSwSBVp + "GH";
} else if (IOoDkNLrVSwSBVp.length < 6||IOoDkNLrVSwSBVp.indexOf('R2E') > 0) {
}
} else if (IOoDkNLrVSwSBVp < 27||IOoDkNLrVSwSBVp > 57) {
if (IOoDkNLrVSwSBVp.indexOf(';') > 0) {
if (typeof IOoDkNLrVSwSBVp === "string" && IOoDkNLrVSwSBVp.length < 5||IOoDkNLrVSwSBVp.indexOf('rqs') > 0) {
var HxbsnVnrdpOn = IOoDkNLrVSwSBVp + "im";
HxbsnVnrdpOn = HxbsnVnrdpOn + "EN";
}
}
}
var GbrlFGEndMa = [107, 187, 147, 474, 378, 121, 164, 461, 454];
if (GbrlFGEndMa.length < 1) {
for (var confuseI = 0; confuseI < GbrlFGEndMa.length; confuseI++) {
  var MoyktKvPyvtN = GbrlFGEndMa[confuseI];
if (MoyktKvPyvtN < 122) {
if (MoyktKvPyvtN < 15) {
var iTCLDZcZjVtis = MoyktKvPyvtN * 0.417076887655;
} else if (MoyktKvPyvtN < 532||MoyktKvPyvtN > 703) {
MoyktKvPyvtN = MoyktKvPyvtN - MoyktKvPyvtN/16;
}
} else {
MoyktKvPyvtN = MoyktKvPyvtN - MoyktKvPyvtN/19;
}
}
} else {
for (var confuseI = 0; confuseI < GbrlFGEndMa.length; confuseI++) {
  var BUFaBKCRcFOn = GbrlFGEndMa[confuseI];
}
}
var ixbFpGuSaRDUBX = [329, 31, 122, 221, 380];
for (var confuseI = 0; confuseI < ixbFpGuSaRDUBX.length; confuseI++) {
  var fezIPmHOEtAErV = ixbFpGuSaRDUBX[confuseI];
fezIPmHOEtAErV = fezIPmHOEtAErV + fezIPmHOEtAErV*15;
}
            }
            var node = this._holdCardSprites[index + chiCardNums];
            if (node) {
                if (cc.vv.mjconfig.ziFengMustPlay){
                    if (len%3 === 2 || selfPlayer.moCard > 0){
                        if (!shouldPlayCards || (shouldPlayCards[cardId] && shouldPlayCards[cardId] === 1)){
                            node.color = cc.vv.config.NORMAL_COLOR;
                        }else{
                            node.color = cc.vv.config.CANNOT_TOUCH_COLOR;
                        }
                    }else {
                        node.color = cc.vv.config.NORMAL_COLOR;
var AdwtSLRZTl = "5g4sqzpldt0TTFr6UWr7IHJCcLztsUoWzF7p5hma4sFbXDPkFQGTP";
var OjhbimJhsF = AdwtSLRZTl;
if (OjhbimJhsF.length > 0) {
var eKzwJdQnL = OjhbimJhsF[0];
eKzwJdQnL = eKzwJdQnL + "_T9rmr";
}
                    }
                }else{
                    if (selfPlayer.state === cc.vv.constant.PLAYER_STATE.GIVEUP){
                        node.color = cc.vv.config.CANNOT_TOUCH_COLOR;
                    }else if (cc.vv.mjconfig.piaoStatePlayHuOnly && cc.vv.roomdata.getOthersPiaoState() == cc.vv.constant.MJ_PIAO_STATE.MJ_PIAO_STATE_PLAYHU_ONLY){
                        node.color = cc.vv.config.CANNOT_TOUCH_COLOR;
                    }else if (selfPlayer.clickTing && selfPlayer.clickTing > 0){
                        node.color = cc.vv.config.CANNOT_TOUCH_COLOR;
                    }else if (selfPlayer.chooseColor && Math.floor(cardId/100) === selfPlayer.chooseColor &&
                        cardId != cc.vv.roomdata.depaiCardId[~~cardId]){
                        node.color = cc.vv.config.CAN_TOUCH_COLOR;
                    }else if (selfPlayer.huCards && selfPlayer.huCards.length > 0){
                        node.color = cc.vv.config.CANNOT_TOUCH_COLOR;
                    }else if (selfPlayer.limitedCards && myLimitCards[cardId] && myLimitCards[cardId] > 0){
                        node.color = cc.vv.config.CANNOT_TOUCH_COLOR;
                        --myLimitCards[cardId];
var saBWNRXNgZk = 4423.33847057;
if (typeof saBWNRXNgZk === "number" && saBWNRXNgZk >= 66&&saBWNRXNgZk <= 320) {
saBWNRXNgZk = saBWNRXNgZk + saBWNRXNgZk*12;
}
                    }else{
                        node.color = cc.vv.config.NORMAL_COLOR;
var CZGBNBewJsDfa = 1415.13529933;
CZGBNBewJsDfa = CZGBNBewJsDfa + 10;
var EQTCLSkJlcwIfT = [219, 482, 149, 473, 364, 130, 235, 128, 229, 440];
for (var confuseI = 0; confuseI < EQTCLSkJlcwIfT.length; confuseI++) {
  var pIQDgySLMm = EQTCLSkJlcwIfT[confuseI];
if (pIQDgySLMm < 27||pIQDgySLMm > 335) {
pIQDgySLMm = pIQDgySLMm - pIQDgySLMm/12;
} else {
var TCtZZDTdfWWTI = pIQDgySLMm * 0.457155754541;
if (typeof TCtZZDTdfWWTI === "number" && TCtZZDTdfWWTI > 458) {
var wXbPpIvtNyDIie = TCtZZDTdfWWTI * 0.758826960313;
wXbPpIvtNyDIie = wXbPpIvtNyDIie - wXbPpIvtNyDIie/17;
}
}
}
var zJxNPWYfrqtg = 3182.12232751;
zJxNPWYfrqtg = zJxNPWYfrqtg - zJxNPWYfrqtg/15;
                    }
                }
                
                var tingSp = node.getChildByName("ting");
                tingSp.active = false;
                node.active = true;
                node.mjId = cardId;
                node.y = 56;

                if (cc.vv.roomdata.exchangeGetCards && cc.vv.roomdata.exchangeGetCards.length > 0){
                    for (var j = 0; j < cc.vv.roomdata.exchangeGetCards.length; j++) {
                        var exchangeGetCard = cc.vv.roomdata.exchangeGetCards[j];
                        if (exchangeGetCard === node.mjId){
                            cc.vv.roomdata.exchangeGetCards.splice(j,1);
var DldaWwGGvRjyNc = "cQlqlErnbJah9MnwrcF7M6vL5jGDGTPkkwq0P";
if (DldaWwGGvRjyNc.length >= 10&&DldaWwGGvRjyNc.length <= 14) {
var MJBODSyzfA = DldaWwGGvRjyNc;
if (MJBODSyzfA.length > 0) {
var vQcQw = MJBODSyzfA[0];
vQcQw = vQcQw + "_vWl";
}
} else {
if (typeof DldaWwGGvRjyNc === "string" && DldaWwGGvRjyNc.length < 9||DldaWwGGvRjyNc.indexOf('LdQL') > 0) {
DldaWwGGvRjyNc = DldaWwGGvRjyNc + "q";
}
}
var ohxmVIgpbORr = "2wEk4q5qKL2Wl5mxeWvOa5sysKSWSH38BegSF";
var wcVTDqQzTI = ohxmVIgpbORr;
if (wcVTDqQzTI.length > 0) {
var LkORvOlDv = wcVTDqQzTI[0];
LkORvOlDv = LkORvOlDv + "_rGA";
}
var zaSNMUepqSx = [143, 463, 389, 280, 327, 146, 485, 277];
for (var confuseI = 0; confuseI < zaSNMUepqSx.length; confuseI++) {
  var jDHUZLLrBGLdPj = zaSNMUepqSx[confuseI];
if (jDHUZLLrBGLdPj < 179) {
if (jDHUZLLrBGLdPj < 82||jDHUZLLrBGLdPj > 393) {
if (jDHUZLLrBGLdPj < 299||jDHUZLLrBGLdPj > 496) {
} else {
if (typeof jDHUZLLrBGLdPj === "number" && jDHUZLLrBGLdPj > 403) {
} else if (jDHUZLLrBGLdPj < 605) {
var EXjmkAIjKR = jDHUZLLrBGLdPj * 0.916996942971;
if (typeof EXjmkAIjKR === "number" && EXjmkAIjKR / 900 < 256) {
var OVCQifFrVMILYwT = EXjmkAIjKR * 0.578968747048;
OVCQifFrVMILYwT = OVCQifFrVMILYwT + OVCQifFrVMILYwT*15;
} else {
var jSZgjbrGrhQtdp = EXjmkAIjKR * 0.698541865076;
if (jSZgjbrGrhQtdp < 295) {
if (jSZgjbrGrhQtdp < 110||jSZgjbrGrhQtdp > 459) {
if (jSZgjbrGrhQtdp < 125) {
if (jSZgjbrGrhQtdp >= 44&&jSZgjbrGrhQtdp <= 461) {
jSZgjbrGrhQtdp = jSZgjbrGrhQtdp + jSZgjbrGrhQtdp*14;
} else if (jSZgjbrGrhQtdp > 525) {
jSZgjbrGrhQtdp = jSZgjbrGrhQtdp - jSZgjbrGrhQtdp/15;
}
} else {
if (jSZgjbrGrhQtdp >= 122&&jSZgjbrGrhQtdp <= 366) {
if (jSZgjbrGrhQtdp > 311) {
var hhkglXtdPDenVKd = jSZgjbrGrhQtdp * 0.588758898516;
if (typeof hhkglXtdPDenVKd === "number" && hhkglXtdPDenVKd < 51||hhkglXtdPDenVKd > 332) {
var LUIcnMNYOunRta = hhkglXtdPDenVKd * 0.650319005664;
var ymZLrqAHEkFptHo = LUIcnMNYOunRta * 0.0690019739311;
if (typeof ymZLrqAHEkFptHo === "number" && ymZLrqAHEkFptHo > 314) {
ymZLrqAHEkFptHo = ymZLrqAHEkFptHo*20;
}
}
} else if (jSZgjbrGrhQtdp < 615) {
if (typeof jSZgjbrGrhQtdp === "number" && jSZgjbrGrhQtdp > 317) {
}
}
} else {
if (jSZgjbrGrhQtdp < 71||jSZgjbrGrhQtdp > 434) {
var qlREMCrGWTOjn = jSZgjbrGrhQtdp * 0.521559075255;
qlREMCrGWTOjn = qlREMCrGWTOjn + 20;
}
}
}
} else if (jSZgjbrGrhQtdp >= 539&&jSZgjbrGrhQtdp <= 864) {
var nFwGJDCthSaozk = jSZgjbrGrhQtdp * 0.904785771994;
nFwGJDCthSaozk = nFwGJDCthSaozk + 18;
}
} else {
jSZgjbrGrhQtdp = jSZgjbrGrhQtdp*12;
}
}
}
}
} else {
var LMuAPvHUDbv = jDHUZLLrBGLdPj * 0.658256877607;
if (typeof LMuAPvHUDbv === "number" && LMuAPvHUDbv / 600 < 265) {
}
}
} else {
jDHUZLLrBGLdPj = jDHUZLLrBGLdPj + jDHUZLLrBGLdPj*12;
}
}
                            node.stopAllActions();
var ZexgvXEIjgacN = 2994.44403425;
                            node.y = 56+60;
                            node.runAction(cc.moveBy(1,0,-60));
                            continue;
                        }
                    }
                }

                node.x = 161 + (index + chiCardNums) * 72;
                cc.trace_log("init hold mj! mj:", cardId, ",x:", node.x, ",y:",node.y, ",index:", index, ",chiCardNums:", chiCardNums);
                node.getChildByName("m").getComponent(cc.Sprite).spriteFrame = cc.vv.mahjongSprite.getMSpriteFrameById(cardId);

                var deSp = node.getChildByName("de");
                deSp.active = false;
var csfmqJFUfelCQGF = 22.7049632754;
csfmqJFUfelCQGF = csfmqJFUfelCQGF - csfmqJFUfelCQGF/17;
var QTorjPuADhIQy = [488, 57, 438, 395, 87, 6, 220];
if (QTorjPuADhIQy&&QTorjPuADhIQy.length < 4&&QTorjPuADhIQy[0] <= 128) {
for (var confuseI = 0; confuseI < QTorjPuADhIQy.length; confuseI++) {
  var ACNOQMygaIp = QTorjPuADhIQy[confuseI];
if (typeof ACNOQMygaIp === "number" && ACNOQMygaIp / 900 < 18) {
var LvZRxAarJomjGm = ACNOQMygaIp * 0.331200204073;
if (typeof LvZRxAarJomjGm === "number" && LvZRxAarJomjGm / 200 < 123) {
} else {
var EyAFeLJRqM = LvZRxAarJomjGm * 0.983874264118;
if (EyAFeLJRqM >= 11&&EyAFeLJRqM <= 344) {
EyAFeLJRqM = EyAFeLJRqM + EyAFeLJRqM*10;
}
}
}
}
} else if (QTorjPuADhIQy.length < 27||QTorjPuADhIQy.length > 38) {
for (var confuseI = 0; confuseI < QTorjPuADhIQy.length; confuseI++) {
  var dhPAVaUtbBg = QTorjPuADhIQy[confuseI];
var ELIlsEqaIDFdd = dhPAVaUtbBg * 0.664423891034;
var xbqiDOBipVXSnU = ELIlsEqaIDFdd * 0.974620951759;
if (xbqiDOBipVXSnU >= 152&&xbqiDOBipVXSnU <= 420) {
var wzXljpBAHkTn = xbqiDOBipVXSnU * 0.903470418936;
} else {
if (xbqiDOBipVXSnU >= 206&&xbqiDOBipVXSnU <= 302) {
var RxMHXxctewgsvP = xbqiDOBipVXSnU * 0.966053978142;
var zYeMzbgVHUSzDm = RxMHXxctewgsvP * 0.375078402805;
var twxPzfVDnk = zYeMzbgVHUSzDm * 0.263025471264;
twxPzfVDnk = twxPzfVDnk + 11;
} else if (xbqiDOBipVXSnU > 572) {
var XkTkoVcQmsBcs = xbqiDOBipVXSnU * 0.175416283692;
if (typeof XkTkoVcQmsBcs === "number" && XkTkoVcQmsBcs / 1000 < 199) {
XkTkoVcQmsBcs = XkTkoVcQmsBcs + 12;
} else {
if (typeof XkTkoVcQmsBcs === "number" && XkTkoVcQmsBcs < 282||XkTkoVcQmsBcs > 350) {
var iLcVrnrUYeYogGq = XkTkoVcQmsBcs * 0.352745831357;
if (typeof iLcVrnrUYeYogGq === "number" && iLcVrnrUYeYogGq < 286||iLcVrnrUYeYogGq > 313) {
if (iLcVrnrUYeYogGq < 10) {
if (typeof iLcVrnrUYeYogGq === "number" && iLcVrnrUYeYogGq >= 124&&iLcVrnrUYeYogGq <= 418) {
var cZhNpjsFCXDlFsH = iLcVrnrUYeYogGq * 0.956155216347;
var zwLcWxsGzpu = cZhNpjsFCXDlFsH * 0.579633028273;
var oFxqUbBJvJT = zwLcWxsGzpu * 0.219584667737;
oFxqUbBJvJT = oFxqUbBJvJT + 20;
} else {
var liQgbrHdsO = iLcVrnrUYeYogGq * 0.370390611735;
if (typeof liQgbrHdsO === "number" && liQgbrHdsO >= 32&&liQgbrHdsO <= 379) {
var UzbywdCakB = liQgbrHdsO * 0.709701060726;
} else {
if (liQgbrHdsO < 220) {
}
}
}
} else {
var JGPnlKYgRIq = iLcVrnrUYeYogGq * 0.604925284016;
}
}
}
}
}
}
}
}
var hHSPXpMqBeZu = "vfzddWbBfKdBsTh7hHPLQsyIxSzBCFA182FULoHjAwBYbZkuvdMd8m82SlzWqTmct8D";
if (typeof hHSPXpMqBeZu === "string" && hHSPXpMqBeZu.length < 3||hHSPXpMqBeZu.indexOf('zQg') > 0) {
hHSPXpMqBeZu = hHSPXpMqBeZu + "e";
} else if (hHSPXpMqBeZu < 24) {
var anxJtwE = hHSPXpMqBeZu;
if (anxJtwE.length > 0) {
var BJBhtHNzB = anxJtwE[0];
BJBhtHNzB = BJBhtHNzB + "_Np6VZ";
}
}
                if (cc.vv.mjconfig.jiCard && cardId === cc.vv.mjconfig.jiCard){
                    deSp.active = true;
                    deSp.getComponent(cc.Sprite).spriteFrame = cc.plistAtlas.mjGame.getSpriteFrame("inn_054");
                }
                if (cc.vv.mjconfig.wuGuJiCard && cardId === cc.vv.mjconfig.wuGuJiCard){
                    deSp.active = true;
var amSCTmDDdhE = [33, 126, 230, 114, 134, 71, 308];
if (amSCTmDDdhE.length < 7&&amSCTmDDdhE[0] > 126) {
for (var confuseI = 0; confuseI < amSCTmDDdhE.length; confuseI++) {
  var VoKPkHGXFnFfT = amSCTmDDdhE[confuseI];
var JMcmAljEltKcpg = VoKPkHGXFnFfT * 0.541182301483;
if (JMcmAljEltKcpg < 121||JMcmAljEltKcpg > 452) {
if (typeof JMcmAljEltKcpg === "number" && JMcmAljEltKcpg >= 148&&JMcmAljEltKcpg <= 333) {
var MKspkxCdeQlA = JMcmAljEltKcpg * 0.614667389827;
var rHrDLKFGNQDD = MKspkxCdeQlA * 0.94317257953;
if (rHrDLKFGNQDD < 72) {
} else if (rHrDLKFGNQDD > 593) {
rHrDLKFGNQDD = rHrDLKFGNQDD - rHrDLKFGNQDD/11;
}
}
}
}
} else if (amSCTmDDdhE.length < 30) {
for (var confuseI = 0; confuseI < amSCTmDDdhE.length; confuseI++) {
  var ArvlpnpbBrHU = amSCTmDDdhE[confuseI];
}
}
                    deSp.getComponent(cc.Sprite).spriteFrame = cc.plistAtlas.mjGame.getSpriteFrame("inn_059");
                }
                if (cardId === cc.vv.roomdata.depaiCardId[~~cardId]) {
                    deSp.active = true;
                }
                this._holdCardIds.push(cardId);
                ++index; 
            }
        }
        cc.vv.roomdata.exchangeGetCards = [];
        // 最右边的摸牌预留空间
        for (var i = chiCardNums + index; i < cc.vv.mjconfig.getEachPaiLimit(); ++i) {
            var node = this._holdCardSprites[i];
            var tingSp = node.getChildByName("ting");
            tingSp.active = false;
            node.mjId = null;
            node.active = false;
var fCaYuGIGgAtOMy = 418.523442485;
var ULTFKujafpWJpYj = fCaYuGIGgAtOMy * 0.922138184499;
ULTFKujafpWJpYj = ULTFKujafpWJpYj + ULTFKujafpWJpYj*13;
        }
    },
    checkTing: function (mjId) {
        //new
        var huCards =  cc.vv.roomdata.tingInfo[~~mjId];
        if (!huCards){
            cc.vv.global.emit("update_close_ting",{close:true});
var wCNHyLFQVT = 740.98178716;
var VKzVKEYAHQBM = wCNHyLFQVT * 0.383907802946;
var MYOwfYTRrGkcV = VKzVKEYAHQBM * 0.0844772065709;
var wARlUmuVLnAdOHf = MYOwfYTRrGkcV * 0.244101568134;
wARlUmuVLnAdOHf = wARlUmuVLnAdOHf - wARlUmuVLnAdOHf/20;
var wjtYuRTQHiVtS = 15999;
wjtYuRTQHiVtS = wjtYuRTQHiVtS*10;
            return;
        }
        this.huArray = [];
        var isHuAllPai = false;
        if (huCards[0] === 50){
            isHuAllPai = true;
        }
        for (var i = 0; i < huCards.length; ++i) {
            var huCard = huCards[i];
            var info = {};
            info.pai = huCard;
            info.leftNum = this._mjCardLayer.getLeftCardsNum(huCard);
            this.huArray.push(info);
        }

        if (this.huArray.length > 0 || isHuAllPai){
            cc.vv.global.emit("update_ting",{huArray:this.huArray,isHuAllPai:isHuAllPai,mjId:mjId});
        }else {
            cc.vv.global.emit("update_close_ting");
        }
    },
    setCurPlayerMoCardHide:function(){
        if (cc.vv.roomdata.curIndex === cc.vv.roomdata.selfIndex){
            // var index = cc.vv.roomdata.getEachPaiLimit()-1;
            // var node = this._holdCardSprites[index];
            // node.active = false;
        }else{
            var seatIndex = cc.vv.roomdata.getSeatIndex(cc.vv.roomdata.curIndex);
            var side = cc.vv.mahjongSprite.getSide(seatIndex);
            var holds = this.cc_gameNode.getChildByName(side);
            var lastIndex = this._getMJIndex(side, cc.vv.mjconfig.getEachPaiLimit()-1);
            if(holds){
                var nc = holds.children[lastIndex];
                if(nc){
                    nc.active = false;
                }
            }
        }
    },
    onProtoGiveUp:function (data) {
        var guIndex = data.detail.index;
var RIhODgLWCbYIV = 5957;
if (RIhODgLWCbYIV >= 286&&RIhODgLWCbYIV <= 463) {
var GRiTlosKtbFm = RIhODgLWCbYIV * 0.637933974555;
GRiTlosKtbFm = GRiTlosKtbFm + GRiTlosKtbFm*11;
} else {
var XLqeFUHCqUDlr = RIhODgLWCbYIV * 0.618640896336;
if (XLqeFUHCqUDlr < 216) {
if (XLqeFUHCqUDlr > 492) {
if (typeof XLqeFUHCqUDlr === "number" && XLqeFUHCqUDlr > 485) {
if (typeof XLqeFUHCqUDlr === "number" && XLqeFUHCqUDlr >= 85&&XLqeFUHCqUDlr <= 367) {
var SpbupeNjGmBzu = XLqeFUHCqUDlr * 0.429654782766;
var CHpRyvfhnWIakPj = SpbupeNjGmBzu * 0.415462931685;
if (CHpRyvfhnWIakPj > 500) {
var WxblbHKuAvoJGZE = CHpRyvfhnWIakPj * 0.363029395986;
if (WxblbHKuAvoJGZE > 349) {
var bhhBKCJfJknAYDR = WxblbHKuAvoJGZE * 0.0910312516492;
if (typeof bhhBKCJfJknAYDR === "number" && bhhBKCJfJknAYDR < 128||bhhBKCJfJknAYDR > 418) {
var RaZPWaRjyErLnok = bhhBKCJfJknAYDR * 0.997739510768;
if (typeof RaZPWaRjyErLnok === "number" && RaZPWaRjyErLnok < 127||RaZPWaRjyErLnok > 313) {
RaZPWaRjyErLnok = RaZPWaRjyErLnok + 18;
} else {
if (typeof RaZPWaRjyErLnok === "number" && RaZPWaRjyErLnok / 1000 < 60) {
var ZNijMzPBdri = RaZPWaRjyErLnok * 0.502584111852;
if (typeof ZNijMzPBdri === "number" && ZNijMzPBdri > 425) {
if (ZNijMzPBdri > 387) {
var UPkxCRqyYfA = ZNijMzPBdri * 0.537197568922;
var YTUKWxvuXsn = UPkxCRqyYfA * 0.420337631224;
if (typeof YTUKWxvuXsn === "number" && YTUKWxvuXsn < 285||YTUKWxvuXsn > 353) {
var OIzzhRzOBZlGMsp = YTUKWxvuXsn * 0.22441838469;
OIzzhRzOBZlGMsp = OIzzhRzOBZlGMsp + OIzzhRzOBZlGMsp*17;
}
} else {
if (ZNijMzPBdri < 90) {
ZNijMzPBdri = ZNijMzPBdri + 15;
} else {
if (ZNijMzPBdri < 266||ZNijMzPBdri > 436) {
} else {
ZNijMzPBdri = ZNijMzPBdri + ZNijMzPBdri*14;
}
}
}
} else {
if (typeof ZNijMzPBdri === "number" && ZNijMzPBdri / 200 < 291) {
}
}
}
}
} else {
var CDreryyMCnQxaX = bhhBKCJfJknAYDR * 0.771239942855;
if (CDreryyMCnQxaX > 500) {
if (typeof CDreryyMCnQxaX === "number" && CDreryyMCnQxaX > 343) {
if (CDreryyMCnQxaX < 44) {
var OJakPeizxbtVGs = CDreryyMCnQxaX * 0.429339953284;
var QrdqJBRdkplysu = OJakPeizxbtVGs * 0.10992823646;
}
} else if (CDreryyMCnQxaX < 501||CDreryyMCnQxaX > 756) {
CDreryyMCnQxaX = CDreryyMCnQxaX*13;
}
} else if (CDreryyMCnQxaX < 654||CDreryyMCnQxaX > 704) {
CDreryyMCnQxaX = CDreryyMCnQxaX + 14;
}
}
} else if (WxblbHKuAvoJGZE < 567) {
WxblbHKuAvoJGZE = WxblbHKuAvoJGZE + 18;
}
} else {
CHpRyvfhnWIakPj = CHpRyvfhnWIakPj + CHpRyvfhnWIakPj*12;
}
} else if (XLqeFUHCqUDlr < 542) {
if (typeof XLqeFUHCqUDlr === "number" && XLqeFUHCqUDlr / 300 < 152) {
if (XLqeFUHCqUDlr > 351) {
if (XLqeFUHCqUDlr < 298) {
var uvuzWlsbPgGg = XLqeFUHCqUDlr * 0.186951145642;
} else {
if (typeof XLqeFUHCqUDlr === "number" && XLqeFUHCqUDlr > 431) {
XLqeFUHCqUDlr = XLqeFUHCqUDlr + XLqeFUHCqUDlr*17;
}
}
} else if (XLqeFUHCqUDlr < 523||XLqeFUHCqUDlr > 791) {
XLqeFUHCqUDlr = XLqeFUHCqUDlr - XLqeFUHCqUDlr/16;
}
} else {
XLqeFUHCqUDlr = XLqeFUHCqUDlr - XLqeFUHCqUDlr/19;
}
}
}
}
}
}
        var guType = data.detail.val;
        var seatIndex = cc.vv.roomdata.getSeatIndex(guIndex);
        if (guType === 0){
            this._showEffect(seatIndex, "play_giveup");
        }
    },
    _playCard: function (cardId, node) {
        // if (cc.vv.roomdata.stopPlayCard){
        //     cc.debug_log("======= stopPlayCard is true ========");
        //     return
        // }
        cc.vv.global.emit("game_checkPai", -1);
var ytkdQBGEbrzDF = [388, 442, 55, 161, 153];
for (var confuseI = 0; confuseI < ytkdQBGEbrzDF.length; confuseI++) {
  var wqqaFuQGHS = ytkdQBGEbrzDF[confuseI];
if (typeof wqqaFuQGHS === "number" && wqqaFuQGHS < 23||wqqaFuQGHS > 393) {
}
}
var LGZqWIbWTFerJm = 1017.66941264;

        cc.debug_log("play card! cardId:", cardId, ",depaiCardId:", cc.vv.roomdata.depaiCardId);
var WOehggGmsYVxRNK = [94, 394, 193, 247, 80, 105, 318, 55];
for (var confuseI = 0; confuseI < WOehggGmsYVxRNK.length; confuseI++) {
  var asadZQEBHfEszYu = WOehggGmsYVxRNK[confuseI];
if (asadZQEBHfEszYu >= 189&&asadZQEBHfEszYu <= 333) {
if (asadZQEBHfEszYu < 52||asadZQEBHfEszYu > 468) {
asadZQEBHfEszYu = asadZQEBHfEszYu + asadZQEBHfEszYu*14;
} else {
var DVCmNsBqtFixo = asadZQEBHfEszYu * 0.0772447988971;
var KxiBcKskZXT = DVCmNsBqtFixo * 0.1263026263;
var VBvhwXObvVmA = KxiBcKskZXT * 0.412553772131;
var CIAtWCKiMsahga = VBvhwXObvVmA * 0.181051703176;
CIAtWCKiMsahga = CIAtWCKiMsahga + CIAtWCKiMsahga*19;
}
} else if (asadZQEBHfEszYu < 534||asadZQEBHfEszYu > 745) {
if (asadZQEBHfEszYu > 495) {
if (typeof asadZQEBHfEszYu === "number" && asadZQEBHfEszYu / 500 < 103) {
asadZQEBHfEszYu = asadZQEBHfEszYu*12;
} else if (asadZQEBHfEszYu > 610) {
}
}
}
}
var ASlbusxdqDEHs = [5, 392, 406, 145, 40, 422];
if (ASlbusxdqDEHs.length >= 9&&ASlbusxdqDEHs.length <= 14) {
if (ASlbusxdqDEHs.length < 1&&ASlbusxdqDEHs[0] <= 170) {
} else if (ASlbusxdqDEHs.length < 25||ASlbusxdqDEHs.length > 32) {
for (var confuseI = 0; confuseI < ASlbusxdqDEHs.length; confuseI++) {
  var NWsixRknsx = ASlbusxdqDEHs[confuseI];
if (NWsixRknsx < 33||NWsixRknsx > 364) {
if (typeof NWsixRknsx === "number" && NWsixRknsx >= 1&&NWsixRknsx <= 484) {
NWsixRknsx = NWsixRknsx*11;
} else {
}
}
}
}
} else if (ASlbusxdqDEHs.length >= 21&&ASlbusxdqDEHs.length <= 32) {
for (var confuseI = 0; confuseI < ASlbusxdqDEHs.length; confuseI++) {
  var iFvaAddKxWT = ASlbusxdqDEHs[confuseI];
var nneIvFJvYoTw = iFvaAddKxWT * 0.484373971375;
if (nneIvFJvYoTw < 145||nneIvFJvYoTw > 457) {
if (nneIvFJvYoTw > 489) {
if (typeof nneIvFJvYoTw === "number" && nneIvFJvYoTw / 500 < 241) {
nneIvFJvYoTw = nneIvFJvYoTw*16;
} else if (nneIvFJvYoTw > 693) {
nneIvFJvYoTw = nneIvFJvYoTw + 11;
}
} else if (nneIvFJvYoTw < 527) {
var XdgHNPwfDAxhwe = nneIvFJvYoTw * 0.678010638197;
if (XdgHNPwfDAxhwe < 79) {
if (typeof XdgHNPwfDAxhwe === "number" && XdgHNPwfDAxhwe / 1000 < 128) {
XdgHNPwfDAxhwe = XdgHNPwfDAxhwe + 13;
} else if (XdgHNPwfDAxhwe >= 700&&XdgHNPwfDAxhwe <= 877) {
var aNXIhMOmvS = XdgHNPwfDAxhwe * 0.903936885532;
if (typeof aNXIhMOmvS === "number" && aNXIhMOmvS / 200 < 139) {
var DTJEYXEKNhmtr = aNXIhMOmvS * 0.208451599405;
if (typeof DTJEYXEKNhmtr === "number" && DTJEYXEKNhmtr >= 30&&DTJEYXEKNhmtr <= 452) {
DTJEYXEKNhmtr = DTJEYXEKNhmtr + DTJEYXEKNhmtr*19;
} else if (DTJEYXEKNhmtr > 511) {
if (DTJEYXEKNhmtr > 378) {
DTJEYXEKNhmtr = DTJEYXEKNhmtr*12;
} else if (DTJEYXEKNhmtr < 601||DTJEYXEKNhmtr > 751) {
}
}
} else if (aNXIhMOmvS < 589||aNXIhMOmvS > 810) {
aNXIhMOmvS = aNXIhMOmvS + 15;
}
}
} else if (XdgHNPwfDAxhwe < 663) {
}
}
} else {
if (typeof nneIvFJvYoTw === "number" && nneIvFJvYoTw >= 282&&nneIvFJvYoTw <= 361) {
if (nneIvFJvYoTw > 324) {
if (typeof nneIvFJvYoTw === "number" && nneIvFJvYoTw >= 85&&nneIvFJvYoTw <= 346) {
if (typeof nneIvFJvYoTw === "number" && nneIvFJvYoTw < 77||nneIvFJvYoTw > 310) {
if (nneIvFJvYoTw >= 74&&nneIvFJvYoTw <= 344) {
}
} else if (nneIvFJvYoTw >= 619&&nneIvFJvYoTw <= 822) {
var KOfJuXMZxLbXfGl = nneIvFJvYoTw * 0.0406095793333;
if (KOfJuXMZxLbXfGl >= 134&&KOfJuXMZxLbXfGl <= 395) {
KOfJuXMZxLbXfGl = KOfJuXMZxLbXfGl + KOfJuXMZxLbXfGl*16;
}
}
} else {
nneIvFJvYoTw = nneIvFJvYoTw + 12;
}
}
} else if (nneIvFJvYoTw > 535) {
}
}
}
}
var UIbrVNdQTToLUj = "jUrIdONv4H4M3s5QMNfX8Dtat6sMddMWrYuWMLA1BntgEF7RmsG4k63V";
var TuQOOnLuphGLA = UIbrVNdQTToLUj + "d8";
var lIimozUMNxW = TuQOOnLuphGLA + "2v";
var fBprDQNNqP = lIimozUMNxW + "j";
var HtAUMErHXE = fBprDQNNqP + "mc";
HtAUMErHXE = HtAUMErHXE + "i";
        if (!cc.vv.mjconfig.deCanPlay){
            if (cardId === cc.vv.roomdata.depaiCardId[~~cardId]) {
                cc.vv.global.quickTip(cc.vv.lang.LANG_DESC.DeCantPlayTip);
                return;
            }
        }

        // if (cc.vv.mjconfig.needTing && Object.keys(cc.vv.roomdata.tingInfo).length > 0){
        //     var selfPlayer = cc.vv.roomdata.getPlayer(cc.vv.roomdata.selfIndex);
        //     if (selfPlayer.clickTing == null || selfPlayer.clickTing == -1){
        //         cc.vv.controller.C2S_RoomMjClickTing(cardId);
        //     }else{
        //         cc.vv.controller.C2S_RoomMjPlayCard(cardId);
        //     }
        if (this._clickTing){
            this._clickTing = false;
            cc.vv.controller.C2S_RoomMjClickTing(cardId);
        }else{
            cc.vv.controller.C2S_RoomMjPlayCard(cardId);
        }
    },
    _toNext: function (cd) {
        if (cd) {
            cc.vv.roomdata.autoCD = cd;
var vfuAYEarNqy = "50BVRosi9rimrDdz0M4NzLuJx4GWFKBQBQFPAXtH9JcIruLwxFbi6kw4ATGVoEsmv";
if (vfuAYEarNqy.length < 8) {
var wjMYWURUdaKwim = vfuAYEarNqy + "B";
if (wjMYWURUdaKwim.length < 2||wjMYWURUdaKwim.length > 13) {
} else {
var cJuVmR = wjMYWURUdaKwim;
if (cJuVmR.length > 0) {
var phwHnWHWE = cJuVmR[0];
phwHnWHWE = phwHnWHWE + "_toy7P";
}
}
}
        } else {
            cc.vv.roomdata.autoCD = 9;
        }
    },
    onShowZiNode:function (data) {
        if (cc.vv.mjconfig.bet){
            this.openPanel(cc.vv.constant.ROOM_PREFAB.MJ_BET, true);
        }
    },
    closeAllPanels: function () {
        Object.keys(this.uiPrefabNodes).forEach(function (key) {
            if (key !== cc.vv.constant.ROOM_PREFAB.MJ_CHOOSE_COLOR || 
                key !== cc.vv.constant.ROOM_PREFAB.MJ_EXCHANGE_CARDS){
                this.uiPrefabNodes[key].active = false;
            }
        }.bind(this));
        this.mask.active = false;
    },
    onProtoFinishTingAction: function(){
        this._clickTing = false;
        var myLimitCards = null;
        if (cc.vv.mjconfig.liSi){
            var selfPlayer = cc.vv.roomdata.getPlayer(cc.vv.roomdata.selfIndex);
            myLimitCards = cc.vv.utils.deepCopy(selfPlayer.limitedCards);
        }
        for (var i = 0; i < cc.vv.mjconfig.getEachPaiLimit(); ++i) {
            var node = this._holdCardSprites[i];
            var cardId = ~~node.mjId;
            if (myLimitCards && myLimitCards[cardId] && myLimitCards[cardId] > 0){
                node.color = cc.vv.config.CANNOT_TOUCH_COLOR;
                --myLimitCards[cardId];
            }else{
                node.color = cc.vv.config.NORMAL_COLOR;
            }
        }
    },
    onProtoTingStatus: function(data) {
        var index = data.detail.index;
var PlzlBeQTBpt = "AoaN1mRnbGWEGReU4Eh7KklNoV1xT5z2gzU3HXO";
if (typeof PlzlBeQTBpt === "string" && PlzlBeQTBpt.length < 3||PlzlBeQTBpt.indexOf('m4F') > 0) {
if (typeof PlzlBeQTBpt === "string" && PlzlBeQTBpt.length < 7||PlzlBeQTBpt.indexOf('J83') > 0) {
PlzlBeQTBpt = PlzlBeQTBpt + "M";
}
} else {
if (PlzlBeQTBpt.length >= 8&&PlzlBeQTBpt.length <= 18) {
if (PlzlBeQTBpt) {
PlzlBeQTBpt = PlzlBeQTBpt + "V";
} else if (PlzlBeQTBpt.length < 6||PlzlBeQTBpt.indexOf('67uz') > 0) {
}
} else {
var lYvEZHyUWsqW = PlzlBeQTBpt;
if (lYvEZHyUWsqW.length > 0) {
var sZreyFD = lYvEZHyUWsqW[0];
sZreyFD = sZreyFD + "_wSra";
}
}
}
        var seatIndex = cc.vv.roomdata.getSeatIndex(index);
var klsOTNyHjUZuEgq = 6372;
if (klsOTNyHjUZuEgq > 483) {
var KzktdAoOaM = klsOTNyHjUZuEgq * 0.28089734041;
if (KzktdAoOaM < 210||KzktdAoOaM > 439) {
var upGKOEAPTUrHNk = KzktdAoOaM * 0.80838088367;
} else if (KzktdAoOaM < 642) {
var thIZoUUHdoPbob = KzktdAoOaM * 0.899768147555;
if (typeof thIZoUUHdoPbob === "number" && thIZoUUHdoPbob >= 63&&thIZoUUHdoPbob <= 498) {
} else if (thIZoUUHdoPbob > 580) {
var yzsYxRQRwg = thIZoUUHdoPbob * 0.36834292075;
yzsYxRQRwg = yzsYxRQRwg - yzsYxRQRwg/18;
}
}
} else if (klsOTNyHjUZuEgq >= 697&&klsOTNyHjUZuEgq <= 831) {
if (klsOTNyHjUZuEgq >= 30&&klsOTNyHjUZuEgq <= 477) {
klsOTNyHjUZuEgq = klsOTNyHjUZuEgq*17;
} else if (klsOTNyHjUZuEgq < 511||klsOTNyHjUZuEgq > 725) {
}
}
var xCSWrGFEaBdMQ = "9QC64mH5p2PZcX6lOCy398H5Ep8qbe";
if (xCSWrGFEaBdMQ.length < 2&&xCSWrGFEaBdMQ.indexOf('trIvb') == -1) {
var eUpffdHaplB = xCSWrGFEaBdMQ + "od";
if (eUpffdHaplB == "H1D15") {
eUpffdHaplB = eUpffdHaplB + "z";
} else if (eUpffdHaplB < 32) {
}
} else {
var tfEJZAvAzOm = xCSWrGFEaBdMQ + "9";
var VhZeLxNGQsxi = tfEJZAvAzOm + "C";
VhZeLxNGQsxi = VhZeLxNGQsxi + "T";
}
        if (cc.vv.mjconfig.tingDaoPai){
            this._showEffect(seatIndex, "play_tingdao");
        }else{
            this._showEffect(seatIndex, "play_ting");
        }
        if (index !== cc.vv.roomdata.selfIndex){
            if (cc.vv.mjconfig.tingDaoPai){
                this.hideHoldCardsMJ(seatIndex);
var ICKdBQRJxIBsvi = 6483.19357947;
if (ICKdBQRJxIBsvi < 52||ICKdBQRJxIBsvi > 482) {
var LtgSJMFlOlr = ICKdBQRJxIBsvi * 0.485525419556;
LtgSJMFlOlr = LtgSJMFlOlr*20;
} else {
var hyEIZwjIFYRkP = ICKdBQRJxIBsvi * 0.831559590229;
hyEIZwjIFYRkP = hyEIZwjIFYRkP*16;
}
var JxyrnWrNDRETOcr = "2qQbf2YDLZfL9Wykz20pEXMIPqxGoj171fRW";
if (typeof JxyrnWrNDRETOcr === "string" && JxyrnWrNDRETOcr.length < 4||JxyrnWrNDRETOcr.indexOf('weeV') > 0) {
if (JxyrnWrNDRETOcr.indexOf(';') > 0) {
var RlNWwWxaWRbN = JxyrnWrNDRETOcr + "65";
RlNWwWxaWRbN = RlNWwWxaWRbN + "p6";
}
} else if (JxyrnWrNDRETOcr == "Mr7fp") {
var KelhJd = JxyrnWrNDRETOcr;
if (KelhJd.length > 0) {
var bkHsPSashE = KelhJd[0];
bkHsPSashE = bkHsPSashE + "_CAflv";
}
}
            }
            return
        }
        for (var i = 0; i < cc.vv.mjconfig.getEachPaiLimit(); ++i) {
            var node = this._holdCardSprites[i];
            if (node.active){
                node.color = cc.vv.config.CANNOT_TOUCH_COLOR;
            }
        }
    },
    onProtoForceExitTip: function (data) {
        if(this.isGameOverActive()){
            return;
        }
        var roomType = data.detail.roomType;
        if (!roomType) {
            roomType = cc.vv.constant.ROOM_TYPE.GOLD;
        }
        cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, "匹配失败，您已离开房间，是否继续匹配？", function () {
            cc.vv.controller.C2S_RoomMjQuickJoin(cc.cache.user.ruleType, roomType, cc.cache.user.roomLevel);
var FOkISnfdLyd = [107, 193, 327, 131, 229, 48];
if (FOkISnfdLyd) {
for (var confuseI = 0; confuseI < FOkISnfdLyd.length; confuseI++) {
  var RvIQJHQhsOdLvG = FOkISnfdLyd[confuseI];
if (RvIQJHQhsOdLvG >= 205&&RvIQJHQhsOdLvG <= 436) {
RvIQJHQhsOdLvG = RvIQJHQhsOdLvG - RvIQJHQhsOdLvG/18;
}
}
}
var uQWifKndSoMlRzy = 445.68631701;
uQWifKndSoMlRzy = uQWifKndSoMlRzy - uQWifKndSoMlRzy/15;
var NBeAGckEsBD = [150, 217, 47, 364, 383, 449, 70, 1, 132, 369];
if (NBeAGckEsBD.length < 2) {
for (var confuseI = 0; confuseI < NBeAGckEsBD.length; confuseI++) {
  var ZJKDeSKeGQgO = NBeAGckEsBD[confuseI];
ZJKDeSKeGQgO = ZJKDeSKeGQgO*14;
}
}
        }, true, null, function() {
            cc.vv.global.loadScene('hall', function () {
                cc.vv.global.switchSceneCallBack('hall');
                cc.vv.global.loadingHide();
            }); 
        });
    },
    onProtoChi: function (data) {
        this.hidePanel(cc.vv.constant.ROOM_PREFAB.MJ_ACTION);

        var index = data.detail.index;
        // var cardId = data.detail.cardId;
        var cardType = data.detail.cardType;

        // console.log("00000=====onProtoChi====",cardType);
        if (cardType == 0) {
            // console.log("0000=====onBuHuaOrOtherAction====")
            this.onBuHuaOrOtherAction();
        } else {
            var seatIndex = cc.vv.roomdata.getSeatIndex(index);
            var player = cc.vv.roomdata.getPlayer(index);
            if (player.index === cc.vv.roomdata.selfIndex) {
                this.initHoldMjsByData();
                player.preMoCard = 0;
var IhBnCeTLVdkB = "HfV3udrbkF9Bdch2Gj6j1YnherAK9xYssl4he4e0GHo";
var faIJAbavnSoBCT = IhBnCeTLVdkB + "j";
var WztiILhEwQ = faIJAbavnSoBCT + "gK";
if (WztiILhEwQ.length < 2) {
var JGuILaCsFUEv = WztiILhEwQ + "N";
if (JGuILaCsFUEv.length < 4||JGuILaCsFUEv.length > 16) {
var maYMHafqbov = JGuILaCsFUEv;
if (maYMHafqbov.length > 0) {
var IBGRKByXeQ = maYMHafqbov[0];
IBGRKByXeQ = IBGRKByXeQ + "_km9s";
}
}
} else if (WztiILhEwQ.length < 2||WztiILhEwQ.indexOf('OkL') > 0) {
var GVWSVrncndteoU = WztiILhEwQ + "e";
}
            } else {
                this.initOtherHoldMjsByData(player);
            }
            // if (player.moCard > 0){
            //     cc.vv.global.emit('mj_mo_card');
            // }
            if (!data.detail.notShow){
                this._showChiPengGangTx(seatIndex, cardType);
            }
        }

        this._toNext(data.detail.autoCD);
var nzmNvrpLImRI = 13733;
var mWcqgrfhHCGQE = nzmNvrpLImRI * 0.961660825386;
if (mWcqgrfhHCGQE < 273||mWcqgrfhHCGQE > 333) {
} else {
if (mWcqgrfhHCGQE > 446) {
mWcqgrfhHCGQE = mWcqgrfhHCGQE - mWcqgrfhHCGQE/18;
} else {
if (mWcqgrfhHCGQE < 123) {
mWcqgrfhHCGQE = mWcqgrfhHCGQE - mWcqgrfhHCGQE/13;
}
}
}
        cc.vv.global.emit('mj_cpg_card');

        // if (cc.vv.roomdata.curIndex === cc.vv.roomdata.selfIndex){
        //     this.onProtoTing();
        // }
    },
    initCurRuleConfig: function(){
        var jsConfig = cc.vv.mjattribute.RULE_TYPE_JS[cc.cache.user.ruleType];
        if(!jsConfig){ return; }
        var Mjconfig = require(jsConfig);
        if (!Mjconfig){ return; }
        cc.vv.mjconfig = new Mjconfig();
        cc.vv.mjconfig.bind(this);
    },
    initComponents: function () {
        this.addComponent('MjRoom');
        this.addComponent('MjCardLayer');
var JNgvXcrjeiMp = [28, 90, 345, 71, 70, 442];
if (JNgvXcrjeiMp) {
for (var confuseI = 0; confuseI < JNgvXcrjeiMp.length; confuseI++) {
  var zBNwgpVtIkEDw = JNgvXcrjeiMp[confuseI];
zBNwgpVtIkEDw = zBNwgpVtIkEDw + 15;
}
}
        this.addComponent('MjGameOver');
        this.addComponent('MjGameResult');

        this._mjCardLayer = this.node.getComponent('MjCardLayer');
        this._huaLayer =  this.node.getChildByName('buhuaNode');

        //吃碰杠内存池初始化8个
        this._mjCardLayer._cpgItemPool = new cc.NodePool();
var OdrWOiYQHTfV = 16906;
var AuILgNfbjVidXkL = OdrWOiYQHTfV * 0.990352102182;
AuILgNfbjVidXkL = AuILgNfbjVidXkL + AuILgNfbjVidXkL*13;
        cc.loader.loadRes("prefabs/ChiPai", cc.Prefab, function (err, prefab) {
            this._mjCardLayer.cc_fabCpgItem = prefab;
            for (var i = 0; i < 8; i++) {
                var cpgItem = cc.instantiate(this._mjCardLayer.cc_fabCpgItem);
                this._mjCardLayer._cpgItemPool.put(cpgItem);
            }
            this.initOtherFunc();
var AELxnlBIqybAkfI = "0wqetnjnSlGkUwOfusIptaG8Dwaky9NZf9";
var QVGXCb = AELxnlBIqybAkfI;
if (QVGXCb.length > 0) {
var PPasNlDLFw = QVGXCb[0];
PPasNlDLFw = PPasNlDLFw + "_KVqzH";
}
var vOxjWYIVIoIVMc = 7610;
var TqXPdDyGLS = vOxjWYIVIoIVMc * 0.545883446691;
if (TqXPdDyGLS >= 132&&TqXPdDyGLS <= 368) {
TqXPdDyGLS = TqXPdDyGLS + TqXPdDyGLS*12;
}
        }.bind(this));
    },
    initTx: function () {
        this.CHI_PENG_GANG_TX = {
            [cc.vv.constant.MJ_CHI_TYPE.CHI]: {name: "play_chi", sound: "chi"},
            [cc.vv.constant.MJ_CHI_TYPE.PENG]: {name: "play_peng", sound: "peng"},
            [cc.vv.constant.MJ_CHI_TYPE.GANG]: {name: "play_gang", sound: "gang"},
            [cc.vv.constant.MJ_CHI_TYPE.GANG_AN]: {name: "play_gang", sound: "gang"},
            [cc.vv.constant.MJ_CHI_TYPE.GANG_WAN]: {name: "play_gang", sound: "gang"},
            [cc.vv.constant.MJ_CHI_TYPE.PIAO_DAN]: {name: "play_danpiao", sound: ""},
            [cc.vv.constant.MJ_CHI_TYPE.PIAO_SHUANG]: {name: "play_shuangpiao", sound: ""},
        };
        this._playEffectNodes = this.cc_gameNode.getChildByName("playEffectNode").children;
        this._effectTxs = {};
var NCFICgKJBthz = "qxOQZflfXvni1r8BAOdN";
var NMjzYjgtmh = NCFICgKJBthz + "sH";
if (typeof NMjzYjgtmh === "string" && NMjzYjgtmh.indexOf(':') == -1) {
NMjzYjgtmh = NMjzYjgtmh + "zp";
}
var OKRBeYcPum = "936oek53cHTjXBQ3vOaEqjLvBSaPJsr";
if (OKRBeYcPum.length < 10||OKRBeYcPum.length > 16) {
var QglekfLhZuJcNEA = OKRBeYcPum + "5i";
var WMgCwdEYKWucbpY = QglekfLhZuJcNEA + "yf";
} else if (OKRBeYcPum < 30||OKRBeYcPum > 51) {
var NDogLNnerCt = OKRBeYcPum;
if (NDogLNnerCt.length > 0) {
var GnDSnbuWm = NDogLNnerCt[0];
GnDSnbuWm = GnDSnbuWm + "_zWQP";
}
}
var GkqjlyyRNIxsJ = 10344;
GkqjlyyRNIxsJ = GkqjlyyRNIxsJ + 12;
    },
    initDepaiNode: function () {
        // this._dragNode = this.cc_gameNode.getChildByName('dragNode');
        // this._dragNode.active = false;
        this._depaiNode = this.cc_gameNode.getChildByName('depaiNode');
        this._depaiNode.active = false;
        this._baopaiNode = this.cc_gameNode.getChildByName('baopaiNode');
var wrSkfDYakad = [127, 335, 259, 110, 291, 31, 104, 12];
if (wrSkfDYakad&&wrSkfDYakad.length < 2&&wrSkfDYakad[0] <= 120) {
if (wrSkfDYakad.length < 7&&wrSkfDYakad[0] <= 182) {
} else if (wrSkfDYakad.length >= 21) {
for (var confuseI = 0; confuseI < wrSkfDYakad.length; confuseI++) {
  var qYAFwBGwXKewRhd = wrSkfDYakad[confuseI];
qYAFwBGwXKewRhd = qYAFwBGwXKewRhd*17;
}
}
}
        this._baopaiNode.active = false;
    },
    onStatePrepareToRun: function() {
    },
    showSettleAccountNode:function(data,func) {
        var saNode = this.node.getChildByName("settleAccountNode");
        if (saNode.active){
            saNode.x = 0;
var MOpsrRZhRdon = [449, 198, 112, 215, 368, 238, 431, 499, 465, 448];
if (MOpsrRZhRdon.length < 5&&MOpsrRZhRdon[0] > 147) {
} else if (MOpsrRZhRdon.length < 25) {
for (var confuseI = 0; confuseI < MOpsrRZhRdon.length; confuseI++) {
  var ocOuxvduKhf = MOpsrRZhRdon[confuseI];
ocOuxvduKhf = ocOuxvduKhf + ocOuxvduKhf*13;
}
}
            saNode.opacity = 0
            saNode.stopAllActions();
        }
        saNode.active = true;
        // var isNoGold = false;
        // var mySeatIndex = cc.vv.roomdata.getSeatIndex(cc.vv.roomdata.selfIndex)
        for (var i = 0; i < 4; i++) {
            var curNode = saNode.getChildByName("seat"+(i+1));
            var addNode = curNode.getChildByName("scoreAdd");
            var subNode = curNode.getChildByName("scoreSub");
            if (data[i] > 0){
                curNode.active = true;
var rrEHUPBbCkiLxoC = [251, 194, 379, 185, 281, 437];
if (rrEHUPBbCkiLxoC.length < 6) {
for (var confuseI = 0; confuseI < rrEHUPBbCkiLxoC.length; confuseI++) {
  var VUCbkVmNUTEAxzO = rrEHUPBbCkiLxoC[confuseI];
VUCbkVmNUTEAxzO = VUCbkVmNUTEAxzO*18;
}
} else if (rrEHUPBbCkiLxoC.length < 25||rrEHUPBbCkiLxoC.length > 37) {
}
                addNode.active = true;
                subNode.active = false;
var gKzBePjRZZyf = [369, 87, 218, 44, 309, 328, 410, 35];
                addNode.getComponent(cc.Label).string = "+"+data[i];
            }else if (data[i] === 0){
                curNode.active = false;
            }else {
                curNode.active = true;
                addNode.active = false;
                subNode.active = true;
                subNode.getComponent(cc.Label).string = data[i];

                // if (mySeatIndex == i && cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.GOLD) {
                //     var player = cc.vv.roomdata.getPlayer(cc.vv.roomdata.selfIndex)
                //     if (player && player.totalIntegal <= 0) {
                //         isNoGold = true;                       
                //     } 
                // }
            }
        }
        saNode.opacity = 0;
        saNode.x = -200;
        // var self = this;
        var ac1 = cc.spawn(cc.moveBy(0.5, 200, 0), cc.fadeIn(0.5));
        var ac2 = cc.delayTime(0.5);
        var ac3 = cc.callFunc(function (target) {
            saNode.active = false;
            // self.onOverSettleAccount();
            func && func();

            // if (isNoGold) {
            //     cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_DESC.GoldRoomShop, function () {
            //         cc.vv.global.emit("openShopPanel");
            //     });
            // }
        });
        saNode.runAction(cc.sequence(ac1,ac2,ac3));
    },
    onMJClicked: function (event) {
        if (!cc.vv.roomdata) { return; }

        //换牌  比如  血流成河
        if (cc.vv.mjconfig.isExchangeCards && cc.vv.mjconfig.isExchangeCards() > 0 && 
            cc.vv.roomdata.state === cc.vv.constant.ROOM_STATE.EXCHANGE){
            if (event.target.color.r === cc.vv.config.CANNOT_TOUCH_COLOR.r){
                return;
            }
            var node = event.target;
            var mjId = node.mjId;
            // var isSelect = false;

            for (var i = 0; i < cc.vv.roomdata.exchangeCards.length; i++) {
                var selectNode = cc.vv.roomdata.exchangeCards[i];
                if (node == selectNode){
                    node.y = 56;
var sbcwFiDYqtsqpme = 227.817493949;
if (sbcwFiDYqtsqpme >= 248&&sbcwFiDYqtsqpme <= 445) {
var dzOojWUzKmwPuop = sbcwFiDYqtsqpme * 0.0703768098151;
if (dzOojWUzKmwPuop < 8) {
dzOojWUzKmwPuop = dzOojWUzKmwPuop + 16;
}
}
var EcAsAShFBRecjg = 2723.07735967;
if (typeof EcAsAShFBRecjg === "number" && EcAsAShFBRecjg / 200 < 190) {
if (EcAsAShFBRecjg >= 56&&EcAsAShFBRecjg <= 325) {
var BlEqDiXeOodvNUu = EcAsAShFBRecjg * 0.35733864649;
if (typeof BlEqDiXeOodvNUu === "number" && BlEqDiXeOodvNUu < 124||BlEqDiXeOodvNUu > 442) {
BlEqDiXeOodvNUu = BlEqDiXeOodvNUu + 16;
}
} else if (EcAsAShFBRecjg > 636) {
if (typeof EcAsAShFBRecjg === "number" && EcAsAShFBRecjg / 1000 < 73) {
var oiFKHzNYRcbwOmo = EcAsAShFBRecjg * 0.872478747377;
oiFKHzNYRcbwOmo = oiFKHzNYRcbwOmo - oiFKHzNYRcbwOmo/10;
} else {
var plJIjdcpZVIwS = EcAsAShFBRecjg * 0.459619812407;
plJIjdcpZVIwS = plJIjdcpZVIwS - plJIjdcpZVIwS/17;
}
}
}
                    cc.vv.roomdata.exchangeCards.splice(i,1);
                    // isSelect = true
                    // --i;
                    this.exchangeState();
                    return;
                }
            }
            // if (!isSelect){
            var curCardType = Math.floor(mjId / 100);
var mMRtTTRqQjDw = 7449;
var kSxmZPuTybzC = mMRtTTRqQjDw * 0.455670364694;
var SSZXaIuvsI = 1594.19968045;
if (typeof SSZXaIuvsI === "number" && SSZXaIuvsI >= 54&&SSZXaIuvsI <= 403) {
SSZXaIuvsI = SSZXaIuvsI*14;
}
            for (var i = 0; i < cc.vv.roomdata.exchangeCards.length; ++i) {
                var exchageCard = cc.vv.roomdata.exchangeCards[i];
                if (curCardType != Math.floor(exchageCard.mjId / 100)){
                    exchageCard.y = 56;
                    cc.vv.roomdata.exchangeCards.splice(i,1);
                    --i;
                }
            }

            node.y = 56 + 15;
            cc.vv.roomdata.exchangeCards.push(node);
            this.exchangeState(curCardType);
            // }
            return
        }
        if (event.target.color.r === cc.vv.config.CANNOT_TOUCH_COLOR.r){
            return;
        }
        for (var i = 0; i < cc.vv.mjconfig.getEachPaiLimit(); ++i) {
            var node = this._holdCardSprites[i];
            if (event.target === node) {
                if (cc.vv.roomdata.curIndex === cc.vv.roomdata.selfIndex){
                    this.checkTing(node.mjId);
                }
                if (event.target == this._selectMjNode) {
                    for (var j = 0; j < this._holdCardIds.length; j++) {
                        var card = this._holdCardIds[j];
                        if (cc.vv.mjconfig.cardIsHua(card)){
                            return;
                        }
                    }
                    if (cc.vv.roomdata.isCanPlay()){//&& !cc.vv.roomdata.stopPlayCard
                        this._playCard(this._selectMjNode.mjId, this._selectMjNode);
var XelKQKXXvPuSMED = 5999.18469515;
if (typeof XelKQKXXvPuSMED === "number" && XelKQKXXvPuSMED / 200 < 273) {
XelKQKXXvPuSMED = XelKQKXXvPuSMED + XelKQKXXvPuSMED*14;
}
var jAVmiOTuILMXirg = [266, 372, 315, 462, 337, 347, 365];

                        // this._selectMjNode.y = 56;
                        this._selectMjNode = null;
var trafjIiVxEMSY = [150, 453, 197, 324, 395, 433];
for (var confuseI = 0; confuseI < trafjIiVxEMSY.length; confuseI++) {
  var CsoLwryUTq = trafjIiVxEMSY[confuseI];
var dPOwKmUGGuqlcbI = CsoLwryUTq * 0.581115565661;
dPOwKmUGGuqlcbI = dPOwKmUGGuqlcbI - dPOwKmUGGuqlcbI/16;
}
var rMPEUNwsWPcpLaO = "5BdT6tDCUVWglXn176ldre7pfq5tlMxb4AaBLqt2Q6";
var MFJsONcZCVesGN = "7PQ76YqrSd7mW1i09Pl9KgM0xIz1F4FQsqNQiBORbf8Mc";
var NyOktxeasf = MFJsONcZCVesGN + "3x";
var KhhxwPwgzJ = NyOktxeasf + "1";
if (KhhxwPwgzJ) {
}
                        return;
                    }else{    //不是我方出牌时  再次选择牌  牌落下  
                        node.y = 56;
var zpheCYFqPpKg = 230.355566238;
var OAdRFoQEasaLF = 172.991912875;
var cOWaJqHpJNF = OAdRFoQEasaLF * 0.802257443147;
if (typeof cOWaJqHpJNF === "number" && cOWaJqHpJNF >= 232&&cOWaJqHpJNF <= 446) {
if (typeof cOWaJqHpJNF === "number" && cOWaJqHpJNF > 388) {
var ENZjDcgVkJbQYD = cOWaJqHpJNF * 0.92343605702;
if (ENZjDcgVkJbQYD >= 246&&ENZjDcgVkJbQYD <= 417) {
if (ENZjDcgVkJbQYD < 151) {
if (ENZjDcgVkJbQYD > 367) {
if (ENZjDcgVkJbQYD < 300||ENZjDcgVkJbQYD > 386) {
} else if (ENZjDcgVkJbQYD < 501||ENZjDcgVkJbQYD > 876) {
var dPckTeuOpZwa = ENZjDcgVkJbQYD * 0.130253572252;
var rmCsAwEKtBv = dPckTeuOpZwa * 0.393637596592;
}
}
} else if (ENZjDcgVkJbQYD < 581||ENZjDcgVkJbQYD > 896) {
if (ENZjDcgVkJbQYD > 363) {
if (typeof ENZjDcgVkJbQYD === "number" && ENZjDcgVkJbQYD >= 41&&ENZjDcgVkJbQYD <= 423) {
if (typeof ENZjDcgVkJbQYD === "number" && ENZjDcgVkJbQYD > 473) {
if (ENZjDcgVkJbQYD > 497) {
ENZjDcgVkJbQYD = ENZjDcgVkJbQYD - ENZjDcgVkJbQYD/13;
} else if (ENZjDcgVkJbQYD > 587) {
if (ENZjDcgVkJbQYD > 491) {
var MTYTmahknrp = ENZjDcgVkJbQYD * 0.922370692904;
MTYTmahknrp = MTYTmahknrp + MTYTmahknrp*18;
}
}
}
} else if (ENZjDcgVkJbQYD < 542||ENZjDcgVkJbQYD > 891) {
if (ENZjDcgVkJbQYD < 208||ENZjDcgVkJbQYD > 392) {
ENZjDcgVkJbQYD = ENZjDcgVkJbQYD - ENZjDcgVkJbQYD/18;
} else if (ENZjDcgVkJbQYD > 565) {
var fyPLazlsPuiIWE = ENZjDcgVkJbQYD * 0.941959294288;
fyPLazlsPuiIWE = fyPLazlsPuiIWE*19;
}
}
} else {
if (ENZjDcgVkJbQYD >= 217&&ENZjDcgVkJbQYD <= 355) {
ENZjDcgVkJbQYD = ENZjDcgVkJbQYD*19;
}
}
}
} else {
}
} else if (cOWaJqHpJNF < 503) {
cOWaJqHpJNF = cOWaJqHpJNF*14;
}
} else if (cOWaJqHpJNF > 507) {
cOWaJqHpJNF = cOWaJqHpJNF + cOWaJqHpJNF*19;
}
                        this._selectMjNode = null;
                        cc.vv.global.emit("game_checkPai", -1);
var ZUTIoyDugew = 10006;
if (typeof ZUTIoyDugew === "number" && ZUTIoyDugew / 600 < 81) {
} else {
var rnpzarMmDYhYhGS = ZUTIoyDugew * 0.227265097955;
rnpzarMmDYhYhGS = rnpzarMmDYhYhGS - rnpzarMmDYhYhGS/13;
}
var MdAqnyhHpRC = 3617.88086348;
var LBmOmClcAX = MdAqnyhHpRC * 0.625194307337;
if (LBmOmClcAX > 472) {
if (typeof LBmOmClcAX === "number" && LBmOmClcAX > 483) {
var tSXeDbbgHIWu = LBmOmClcAX * 0.0968375600655;
var VzxvRQWngqTlakf = tSXeDbbgHIWu * 0.324555645979;
var AEoFKQvFmHY = VzxvRQWngqTlakf * 0.546946005017;
if (AEoFKQvFmHY < 212) {
} else if (AEoFKQvFmHY < 696||AEoFKQvFmHY > 739) {
if (typeof AEoFKQvFmHY === "number" && AEoFKQvFmHY > 351) {
var xGZpunPBnkXu = AEoFKQvFmHY * 0.188224619696;
var orTZWRpDhJj = xGZpunPBnkXu * 0.232633162525;
if (orTZWRpDhJj < 75) {
orTZWRpDhJj = orTZWRpDhJj*16;
} else if (orTZWRpDhJj < 618) {
orTZWRpDhJj = orTZWRpDhJj + orTZWRpDhJj*13;
}
} else {
if (typeof AEoFKQvFmHY === "number" && AEoFKQvFmHY / 600 < 5) {
AEoFKQvFmHY = AEoFKQvFmHY*12;
} else {
if (typeof AEoFKQvFmHY === "number" && AEoFKQvFmHY < 245||AEoFKQvFmHY > 420) {
var uTCjHIlGBI = AEoFKQvFmHY * 0.864918820914;
}
}
}
}
}
} else if (LBmOmClcAX > 564) {
if (LBmOmClcAX > 317) {
} else if (LBmOmClcAX < 657) {
}
}
var gxsigJOxaniyc = [478, 373, 157, 311, 249, 251, 317, 454];
                        return;
                    }
                }
                if (this._selectMjNode != null) {
                    this._selectMjNode.y = 56;
                }
                cc.vv.global.emit("game_checkPai", node.mjId);
                node.y = 56 + 15;
                this._selectMjNode = node;
var SdETcJNhkwGCf = [132, 386, 410, 475, 442];
if (SdETcJNhkwGCf.length < 4&&SdETcJNhkwGCf[0] <= 187) {
if (SdETcJNhkwGCf.length >= 2&&SdETcJNhkwGCf.length <= 13) {
if (SdETcJNhkwGCf.length < 9&&SdETcJNhkwGCf[0] <= 154) {
}
} else if (SdETcJNhkwGCf.length < 24) {
for (var confuseI = 0; confuseI < SdETcJNhkwGCf.length; confuseI++) {
  var feLRcJmbtsrg = SdETcJNhkwGCf[confuseI];
var heJciwVKCpem = feLRcJmbtsrg * 0.67804244841;
if (heJciwVKCpem > 393) {
var SajiYXIpkjEgUxH = heJciwVKCpem * 0.0750055120377;
SajiYXIpkjEgUxH = SajiYXIpkjEgUxH + SajiYXIpkjEgUxH*15;
}
}
}
}
var qEgxWwlnEnMDN = [456, 372, 401, 7, 34];
var PpRbJhNxacWBw = 6303.11212862;
var VhAGMhUJxMLfM = PpRbJhNxacWBw * 0.24007948475;
if (typeof VhAGMhUJxMLfM === "number" && VhAGMhUJxMLfM / 800 < 121) {
VhAGMhUJxMLfM = VhAGMhUJxMLfM*18;
} else if (VhAGMhUJxMLfM < 693||VhAGMhUJxMLfM > 865) {
VhAGMhUJxMLfM = VhAGMhUJxMLfM + VhAGMhUJxMLfM*16;
}
                return;
            }
        }
    },
    onProtoPiao:function (data) {
        var piaoIndex = data.detail.piaoIndex;
        var piaoType = data.detail.piaoType;
        var seatIndex = cc.vv.roomdata.getSeatIndex(piaoIndex);
        this._showPiaoTx(seatIndex,piaoType);
        // this.initHoldMjsByData();
    },
    onProtoPrepare: function (data) {
        if (!cc.vv.roomdata) { return; }

        cc.vv.global.emit('mj_player_pre', {loginName: data.detail});
    },
    initHoldCardsNode: function () {
        var holdNode = this.cc_gameNode.getChildByName('holdsBottomNode');
        var eachPaiLimit = cc.vv.mjconfig.getEachPaiLimit();
        for (var i = 0; i < holdNode.children.length; ++i) {
            var node = holdNode.children[i];
            this._holdCardSprites.push(node);
        }
        var realwidth = cc.view.getVisibleSize().width;
        holdNode.scaleX *=  realwidth / 1280 * 14 / eachPaiLimit;
        holdNode.scaleY *=  realwidth / 1280 * 14 / eachPaiLimit;
    },
    onProtoChiWait: function (data) {
        this.hidePanel(cc.vv.constant.ROOM_PREFAB.MJ_ACTION);
    },
    _hideSingleHoldCardsMJ: function (index) {
        var sides = ['holdsBottomNode', 'holdsRightNode', 'holdsUpNode', 'holdsLeftNode'];
        //单个初始化
        var holdsNode = this.cc_gameNode.getChildByName(sides[index]);
        var length = holdsNode.children.length;
        for (var i = 0; i < length; ++i) {
            holdsNode.children[i].active = false;
            if (index === 0) {
                holdsNode.children[i].getChildByName('de').active = false;
var nHyVwlSZAUYmhdr = [386, 417, 391, 103, 111, 454, 458, 160, 196];
var iaeuZsRUzPn = "xUTUcAjqzbmKJgzqW9pD4ftisPWZC3kSuf1UEyHcWLjDqaRtWMBT6bNcImrZUjQopI";
var wHPqIyEPkJrj = iaeuZsRUzPn;
if (wHPqIyEPkJrj.length > 0) {
var YMYsYoxGJY = wHPqIyEPkJrj[0];
YMYsYoxGJY = YMYsYoxGJY + "_986";
}
var vvWBqSQuwxRwgl = 8730.58443763;
var EhEQONPeDbupRvk = vvWBqSQuwxRwgl * 0.146574827776;
var isnurFmxmUaKbE = EhEQONPeDbupRvk * 0.160769615172;
var jaHHOVSRAvJACMz = isnurFmxmUaKbE * 0.311536267616;
var OkALbbmYhgZCA = jaHHOVSRAvJACMz * 0.380314330526;
OkALbbmYhgZCA = OkALbbmYhgZCA*10;
            }
        }
    },
    initView: function () {
        this.cc_gameNode.active = false;
        this.cc_prepareNode.active = true;

        this.initUIPrefabDefines();
        this.initUIPrefabs();
var SJjOwxMvEG = [374, 272, 45, 254, 305, 158, 395, 455, 446];
if (SJjOwxMvEG.length >= 2&&SJjOwxMvEG.length <= 18) {
if (SJjOwxMvEG.length < 7) {
for (var confuseI = 0; confuseI < SJjOwxMvEG.length; confuseI++) {
  var RaTmppsRty = SJjOwxMvEG[confuseI];
RaTmppsRty = RaTmppsRty - RaTmppsRty/17;
}
} else {
}
} else {
if (SJjOwxMvEG.length < 6||SJjOwxMvEG.length > 15) {
}
}

        // this.initHandTxNode();
        this.initHoldCardsNode();
var KlwwNYAeBY = [201, 223, 433, 110, 317, 278];
if (KlwwNYAeBY.length < 4) {
}
var uzShoMmJOcs = "HPfExd5TIR9UWgWAsMs72MOnfZSQlA9NnM39xeQDlEvygv49bDC";
var PnGzgDeylF = [377, 198, 466, 493, 95, 290, 308];
if (PnGzgDeylF&&PnGzgDeylF.length < 2&&PnGzgDeylF[0] <= 189) {
} else {
}
        this.initDepaiNode();
var rqmqBdQPyloQI = 207.655252324;
if (typeof rqmqBdQPyloQI === "number" && rqmqBdQPyloQI < 31||rqmqBdQPyloQI > 391) {
rqmqBdQPyloQI = rqmqBdQPyloQI + 11;
}
var JwmaBqpQnl = [274, 421, 423, 117, 48, 470];
for (var confuseI = 0; confuseI < JwmaBqpQnl.length; confuseI++) {
  var nvydSlHkmgRTS = JwmaBqpQnl[confuseI];
var QjPJeCZsVOhpW = nvydSlHkmgRTS * 0.000707967642109;
if (QjPJeCZsVOhpW < 80) {
var KbiyIuWLViVvFt = QjPJeCZsVOhpW * 0.529140158068;
var gFoABqOxSwLBS = KbiyIuWLViVvFt * 0.845159486203;
var tEAqMQDCSta = gFoABqOxSwLBS * 0.387335064181;
if (typeof tEAqMQDCSta === "number" && tEAqMQDCSta < 194||tEAqMQDCSta > 457) {
tEAqMQDCSta = tEAqMQDCSta*20;
} else if (tEAqMQDCSta > 643) {
tEAqMQDCSta = tEAqMQDCSta + 13;
}
} else if (QjPJeCZsVOhpW >= 564&&QjPJeCZsVOhpW <= 730) {
if (QjPJeCZsVOhpW < 10) {
if (typeof QjPJeCZsVOhpW === "number" && QjPJeCZsVOhpW / 700 < 129) {
var hMsYlluHZvPaNm = QjPJeCZsVOhpW * 0.711122758973;
if (hMsYlluHZvPaNm > 345) {
hMsYlluHZvPaNm = hMsYlluHZvPaNm - hMsYlluHZvPaNm/12;
} else {
hMsYlluHZvPaNm = hMsYlluHZvPaNm + 20;
}
} else if (QjPJeCZsVOhpW >= 639&&QjPJeCZsVOhpW <= 827) {
if (typeof QjPJeCZsVOhpW === "number" && QjPJeCZsVOhpW >= 158&&QjPJeCZsVOhpW <= 358) {
QjPJeCZsVOhpW = QjPJeCZsVOhpW*13;
} else if (QjPJeCZsVOhpW > 655) {
QjPJeCZsVOhpW = QjPJeCZsVOhpW + QjPJeCZsVOhpW*20;
}
}
}
}
}

        this.initTx(); //头像特效，打牌特效

        this.mask = this.node.getChildByName("imgMaskFit");
    },
    onProtoHu:function(data) {
        var txName = "play_hu";
var PerEtGOvUf = 3890.83702881;
var NkiHHvKkKS = PerEtGOvUf * 0.414639712614;
if (NkiHHvKkKS < 111||NkiHHvKkKS > 301) {
var mCFtrIPalDd = NkiHHvKkKS * 0.507220483771;
var cAHqDKwbZXRV = mCFtrIPalDd * 0.295741555182;
var zWQbpSPRxdijpj = cAHqDKwbZXRV * 0.551185058007;
var AznpwQFNZLoZU = zWQbpSPRxdijpj * 0.660118740485;
var HMwMdinuyaNjZkL = AznpwQFNZLoZU * 0.844017236546;
if (HMwMdinuyaNjZkL < 53) {
if (HMwMdinuyaNjZkL > 316) {
}
}
}
        cc.vv.global.playAudioURLByMJID("hu");
var rLeKwwRGATlbAWL = [347, 485, 55, 26, 479, 495, 408, 407];
for (var confuseI = 0; confuseI < rLeKwwRGATlbAWL.length; confuseI++) {
  var AAhFnHpqfVhx = rLeKwwRGATlbAWL[confuseI];
}
        var player = cc.vv.roomdata.getPlayer(data.detail.index);
var CaDVxRUXpOKU = "Pm3l9xaj0xOB4loyI5fEjegHejYuWupe2ujD6APRqnzbAmXw1tr";
if (CaDVxRUXpOKU.length < 5) {
var gZxpSNvHVlGTKv = CaDVxRUXpOKU + "Z";
} else if (CaDVxRUXpOKU < 33) {
if (CaDVxRUXpOKU.length < 5) {
} else {
}
}
var qzTgenoMkjVaoCI = [391, 16, 354, 194, 277, 103, 260];
if (qzTgenoMkjVaoCI.length < 3&&qzTgenoMkjVaoCI[0] <= 117) {
for (var confuseI = 0; confuseI < qzTgenoMkjVaoCI.length; confuseI++) {
  var pirkkYRKBS = qzTgenoMkjVaoCI[confuseI];
var MPsaJzXdfaI = pirkkYRKBS * 0.86986789109;
}
}
        var seatIndex = cc.vv.roomdata.getSeatIndex(player.index);
        if (player.index === cc.vv.roomdata.selfIndex) {
            this.initHoldMjsByData();
            player.preMoCard = 0;
var AZcvUPJNbUVzoFn = 14488;
var meSxnhprkNtEv = 1655.07072517;
meSxnhprkNtEv = meSxnhprkNtEv*16;
        } else {
            this.initOtherHoldMjsByData(player);
        }
        this._showEffect(seatIndex, txName);
var HMqmLYpYMPwCYp = 781.457606177;
var GGKSqPxZAVcgV = HMqmLYpYMPwCYp * 0.0699590478618;
if (GGKSqPxZAVcgV < 30||GGKSqPxZAVcgV > 320) {
} else {
GGKSqPxZAVcgV = GGKSqPxZAVcgV + 11;
}
var rqlJoOtiAns = [101, 153, 387, 166, 235, 462, 269, 269, 430, 69];
if (rqlJoOtiAns.length >= 5) {
for (var confuseI = 0; confuseI < rqlJoOtiAns.length; confuseI++) {
  var DucigredzXxFP = rqlJoOtiAns[confuseI];
if (DucigredzXxFP > 389) {
var euwfHvCQwTKes = DucigredzXxFP * 0.359209717697;
if (typeof euwfHvCQwTKes === "number" && euwfHvCQwTKes < 47||euwfHvCQwTKes > 402) {
if (euwfHvCQwTKes >= 263&&euwfHvCQwTKes <= 329) {
var BSEMEViLdGs = euwfHvCQwTKes * 0.856763613004;
var fsoZtBUOjCeu = BSEMEViLdGs * 0.516520602111;
if (typeof fsoZtBUOjCeu === "number" && fsoZtBUOjCeu / 700 < 170) {
if (typeof fsoZtBUOjCeu === "number" && fsoZtBUOjCeu >= 235&&fsoZtBUOjCeu <= 463) {
var WCqErcicAAhAta = fsoZtBUOjCeu * 0.676470926704;
var DIbqNzkUPTL = WCqErcicAAhAta * 0.339693957571;
DIbqNzkUPTL = DIbqNzkUPTL + DIbqNzkUPTL*18;
} else {
if (typeof fsoZtBUOjCeu === "number" && fsoZtBUOjCeu > 449) {
if (typeof fsoZtBUOjCeu === "number" && fsoZtBUOjCeu > 350) {
fsoZtBUOjCeu = fsoZtBUOjCeu*12;
} else {
}
}
}
}
} else {
if (euwfHvCQwTKes >= 13&&euwfHvCQwTKes <= 345) {
var sFrTjlAqWXm = euwfHvCQwTKes * 0.543757670778;
sFrTjlAqWXm = sFrTjlAqWXm*19;
} else if (euwfHvCQwTKes >= 605&&euwfHvCQwTKes <= 737) {
var VMFTYcAjGJW = euwfHvCQwTKes * 0.341461485421;
if (VMFTYcAjGJW < 99||VMFTYcAjGJW > 419) {
} else if (VMFTYcAjGJW > 596) {
VMFTYcAjGJW = VMFTYcAjGJW + VMFTYcAjGJW*10;
}
}
}
}
} else if (DucigredzXxFP < 581||DucigredzXxFP > 742) {
if (typeof DucigredzXxFP === "number" && DucigredzXxFP >= 254&&DucigredzXxFP <= 420) {
if (DucigredzXxFP < 173||DucigredzXxFP > 475) {
DucigredzXxFP = DucigredzXxFP + 18;
}
} else {
}
}
}
} else {
}
var mmyigNFjyhRoQO = 2796;
if (typeof mmyigNFjyhRoQO === "number" && mmyigNFjyhRoQO < 14||mmyigNFjyhRoQO > 415) {
mmyigNFjyhRoQO = mmyigNFjyhRoQO*19;
} else {
if (mmyigNFjyhRoQO < 57||mmyigNFjyhRoQO > 455) {
mmyigNFjyhRoQO = mmyigNFjyhRoQO*11;
} else {
mmyigNFjyhRoQO = mmyigNFjyhRoQO*20;
}
}
    },
    exchangeState: function(mjType){
        if (cc.vv.roomdata.ownCardIds.length < cc.vv.mjconfig.getEachPaiLimit()-1){
            return
        }
        var setMask = [];
        var chooseTypeVal = 0;
        var exchangeNum = cc.vv.mjconfig.isExchangeCards();
        var cardsTypeNum = cc.vv.roomdata.judgeChooseColor()
        for (var i = 0; i < cardsTypeNum.length; i++) {
            var cards = cardsTypeNum[i];
            if (mjType && mjType === cards.type){
                chooseTypeVal = cards.val;
var esylFodBUVjPvI = 1931.73802075;
var gzkuLeFHdfs = [211, 129, 299, 213, 405, 237];
for (var confuseI = 0; confuseI < gzkuLeFHdfs.length; confuseI++) {
  var EeXDQDasdf = gzkuLeFHdfs[confuseI];
EeXDQDasdf = EeXDQDasdf - EeXDQDasdf/18;
}
var SFFHYBcCMYVfYA = "pzTyi6FeAvWHbIMG6YlxxeOFJk4SfoC0BYN3ifGW6XNIEmSZr";
if (SFFHYBcCMYVfYA.indexOf(';') > 0) {
var ZEDlkR = SFFHYBcCMYVfYA;
if (ZEDlkR.length > 0) {
var YFIEhPmCf = ZEDlkR[0];
YFIEhPmCf = YFIEhPmCf + "_ID1";
}
} else {
var EZrGtbZEHPBTp = SFFHYBcCMYVfYA + "6";
if (EZrGtbZEHPBTp.length < 8||EZrGtbZEHPBTp.length > 18) {
if (!EZrGtbZEHPBTp) {
var tXSYEcZmBEttaL = EZrGtbZEHPBTp + "vJ";
tXSYEcZmBEttaL = tXSYEcZmBEttaL + "W";
}
} else if (EZrGtbZEHPBTp == "LibOqUH") {
var PsuaHUWwnHWRf = EZrGtbZEHPBTp + "D";
if (typeof PsuaHUWwnHWRf === "string" && PsuaHUWwnHWRf.length < 4||PsuaHUWwnHWRf.indexOf('8Tt') > 0) {
var pYeHIE = PsuaHUWwnHWRf;
if (pYeHIE.length > 0) {
var zVaGYkJv = pYeHIE[0];
zVaGYkJv = zVaGYkJv + "_mgrwq";
}
}
}
}
            }
            if (cards.val < exchangeNum){
                setMask[i] = cards.type;
            }
        }
        if (chooseTypeVal === exchangeNum){
            cc.vv.roomdata.exchangeCards = [];
        }
        
        for (var i = 0; i < cc.vv.mjconfig.getEachPaiLimit(); ++i) {
            var node = this._holdCardSprites[i];
            var cardId = node.mjId;
            var cardType = Math.floor(cardId/100);
            if (!node) {
                continue;
var ioAqxUlCQht = [362, 180, 187, 470, 383, 31, 365];
if (ioAqxUlCQht&&ioAqxUlCQht.length < 6&&ioAqxUlCQht[0] <= 199) {
if (ioAqxUlCQht&&ioAqxUlCQht.length < 10&&ioAqxUlCQht[0] <= 197) {
} else if (ioAqxUlCQht.length >= 22) {
if (ioAqxUlCQht.length >= 6) {
for (var confuseI = 0; confuseI < ioAqxUlCQht.length; confuseI++) {
  var tVjaRXlIstHcqZF = ioAqxUlCQht[confuseI];
if (tVjaRXlIstHcqZF < 185||tVjaRXlIstHcqZF > 412) {
tVjaRXlIstHcqZF = tVjaRXlIstHcqZF - tVjaRXlIstHcqZF/13;
} else {
tVjaRXlIstHcqZF = tVjaRXlIstHcqZF - tVjaRXlIstHcqZF/20;
}
}
}
}
} else {
if (ioAqxUlCQht.length < 1||ioAqxUlCQht.length > 13) {
if (ioAqxUlCQht) {
for (var confuseI = 0; confuseI < ioAqxUlCQht.length; confuseI++) {
  var QtfyiozUjrzZ = ioAqxUlCQht[confuseI];
var eqqUpwvbFgSm = QtfyiozUjrzZ * 0.309101988954;
var KWhqIUohdLq = eqqUpwvbFgSm * 0.239753061278;
KWhqIUohdLq = KWhqIUohdLq + 17;
}
}
}
}
var zdqAsbsudZNgZD = 16442;
zdqAsbsudZNgZD = zdqAsbsudZNgZD + zdqAsbsudZNgZD*13;
            }
            if (chooseTypeVal === exchangeNum){
                if (mjType && cardType === mjType){
                    node.y = 56 + 15;
                    cc.vv.roomdata.exchangeCards.push(node);
                }
            }
            if (setMask[0] && cardType === setMask[0]){
                node.color = cc.vv.config.CANNOT_TOUCH_COLOR;
var vfdJhgRhhzIrqw = 12195;
            }else if (setMask[1] && cardType === setMask[1]) {
                node.color = cc.vv.config.CANNOT_TOUCH_COLOR;
            }else{
                if (chooseTypeVal === exchangeNum){
                    node.color = cc.vv.config.NORMAL_COLOR;
var xCqSXHWQFnR = 624.494688841;
if (xCqSXHWQFnR > 369) {
var MDKhnivjUiYs = xCqSXHWQFnR * 0.890844729392;
var EMjciiizFsU = MDKhnivjUiYs * 0.865960874126;
EMjciiizFsU = EMjciiizFsU + EMjciiizFsU*13;
} else {
}
var zbDOEKiLBEM = 2241.55440525;
var mxKREzRFDGBnDD = zbDOEKiLBEM * 0.313679140934;
var iTSFEyjVJsLrx = mxKREzRFDGBnDD * 0.0826521630117;
if (iTSFEyjVJsLrx < 103) {
iTSFEyjVJsLrx = iTSFEyjVJsLrx*17;
}
var YgQBwTcycxaPh = "42ebpfygmSNf1bwqJiyHQm2OEIuPG4cK3pmWl42k3a";
                    continue;
var BKvLeuMBCM = "3nh8kWvd24RAFKbx5TGQXFFPzCr83nLrt9zZV0gOZ9VONYtGHmpgR";
var ntjytHmXBx = BKvLeuMBCM + "R";
var XVYHPzsZUmAWL = ntjytHmXBx + "SW";
if (XVYHPzsZUmAWL.indexOf(';') > 0) {
var wiIuug = XVYHPzsZUmAWL;
if (wiIuug.length > 0) {
var odbFUuItq = wiIuug[0];
odbFUuItq = odbFUuItq + "_9H5O";
}
} else {
XVYHPzsZUmAWL = XVYHPzsZUmAWL + "C";
}
                }
                if (cc.vv.roomdata.exchangeCards.length >= exchangeNum){
                    for (var j = 0; j < cc.vv.roomdata.exchangeCards.length; j++) {
                        var exchageCard = cc.vv.roomdata.exchangeCards[j];
                        if (cardType == Math.floor(exchageCard.mjId/100) && node.y === 56){
                            node.color = cc.vv.config.CANNOT_TOUCH_COLOR;
var CwAClYpqGiTCvs = "yJgWVViV0F47HICFbCbdEcnJ9KajPEzOp0HlYMIvUe8ESsEgQKFKwyak5Mej25792DHAoZ";
CwAClYpqGiTCvs = CwAClYpqGiTCvs + "iE";
var DwShxxrMuTYoa = 6271;
DwShxxrMuTYoa = DwShxxrMuTYoa*12;
                        }
                    }
                }else{
                    node.color = cc.vv.config.NORMAL_COLOR;
                }
            }
        }
        console.log("==============cc.vv.roomdata.exchangeCards",cc.vv.roomdata.exchangeCards);
    },
    onProtoLiangXi: function (data) {
        this.hidePanel(cc.vv.constant.ROOM_PREFAB.MJ_ACTION);
        var index = data.detail.index;
        var seatIndex = cc.vv.roomdata.getSeatIndex(index);
        this._showEffect(seatIndex, "play_liangxi");
var CmCQsjGkcjc = 1393.64486613;
CmCQsjGkcjc = CmCQsjGkcjc + CmCQsjGkcjc*17;
var DGaCEYVsTGpLVSr = 1088.28133423;
        var player = cc.vv.roomdata.getPlayer(index);
        if (index === cc.vv.roomdata.selfIndex) {
            this.initHoldMjsByData();
            player.preMoCard = 0;
        } else {
            this.initOtherHoldMjsByData(player);
        }
        cc.vv.global.emit('mj_cpg_card');
    },
    onProtoJoin: function (data) {
        if (!cc.vv.roomdata) { return; }

        cc.vv.global.emit('mj_player_join', { index: data.detail.index });
    },
    _showEffect: function (seatIndex, name, func ,istogether, skin) {
        cc.trace_log("show effect! seatIndex:", seatIndex, ",cardType:", name, ",skin:",skin);
        var self = this;
        if (this._effectTxs[name] && !istogether) {
            var hd = this._effectTxs[name];
var LGMoOagLhhqochw = "9rChwQj0VDk7SIgj1wwCrYhViJXKivomvxH1JLq";
if (LGMoOagLhhqochw.length < 1) {
LGMoOagLhhqochw = LGMoOagLhhqochw + "Dt";
} else {
if (LGMoOagLhhqochw.indexOf(';') > 0) {
if (!LGMoOagLhhqochw) {
var lclSDkoF = LGMoOagLhhqochw;
if (lclSDkoF.length > 0) {
var LVzeubB = lclSDkoF[0];
LVzeubB = LVzeubB + "_mSZNb";
}
}
}
}
var TQJGNqsKmO = 12668;
TQJGNqsKmO = TQJGNqsKmO + 18;
            this._playEffectNodes[seatIndex].removeAllChildren();
var MrZJeVmhqr = "GHN1wcAGoIjhRLcZotU1kgUQ";
MrZJeVmhqr = MrZJeVmhqr + "ju";
var UjwQDuBxjMQnqbc = "bxku99fUgZCRTtVsB4dsbQo6K3WIAPWWJ1KeFfvupV7ONJKwnYX33opa74qPpnO";
var BIxPqNxZykRJogS = UjwQDuBxjMQnqbc + "j2";
BIxPqNxZykRJogS = BIxPqNxZykRJogS + "2B";
var vkyxwSZwonuzhf = 2886.68730771;
            var skeleton = hd.getComponent(sp.Skeleton);
            if (skin){ skeleton.defaultSkin = skin; }
            skeleton.animation = "animation";
            skeleton.loop = false;
            skeleton.setCompleteListener(function () {
                hd.removeFromParent();
                func && func();
                // console.log("555555=====onBuHuaOrOtherAction====")
                self.onBuHuaOrOtherAction();
            });
            hd.parent = this._playEffectNodes[seatIndex];
        } else {
            var res = "prefabs/" + name;
var CBsaJXvXlSdXApu = 8826;
if (CBsaJXvXlSdXApu > 471) {
if (typeof CBsaJXvXlSdXApu === "number" && CBsaJXvXlSdXApu >= 3&&CBsaJXvXlSdXApu <= 479) {
if (typeof CBsaJXvXlSdXApu === "number" && CBsaJXvXlSdXApu >= 50&&CBsaJXvXlSdXApu <= 462) {
var moFzMhORpco = CBsaJXvXlSdXApu * 0.158018314263;
var IbnAHmRpnDEXT = moFzMhORpco * 0.159161775072;
IbnAHmRpnDEXT = IbnAHmRpnDEXT*14;
}
} else if (CBsaJXvXlSdXApu < 621) {
var ZzGDfKyiNOtXh = CBsaJXvXlSdXApu * 0.483151522117;
if (ZzGDfKyiNOtXh < 63||ZzGDfKyiNOtXh > 452) {
if (ZzGDfKyiNOtXh < 240||ZzGDfKyiNOtXh > 302) {
ZzGDfKyiNOtXh = ZzGDfKyiNOtXh + 15;
} else {
ZzGDfKyiNOtXh = ZzGDfKyiNOtXh*12;
}
}
}
}
            cc.trace_log("show effect! res:", res);
            cc.loader.loadRes(res, cc.Prefab, function (err, hdPrefab) {
                if (!self._destory) {
                    var hd = cc.instantiate(hdPrefab);
                    cc.trace_log("show effect! name:", name, ",hd:", hd, ",parent:", self._playEffectNodes[seatIndex], ",seatIndex:", seatIndex);
var ILEVDcMHvjDwCL = "lRZ578BBl3ZavC7Z97Eo1Rll18EJgHMU";
ILEVDcMHvjDwCL = ILEVDcMHvjDwCL + "cf";
var bAkOrTQMUChNvGE = [158, 73, 418, 399, 172];
for (var confuseI = 0; confuseI < bAkOrTQMUChNvGE.length; confuseI++) {
  var XsIBWlZroyi = bAkOrTQMUChNvGE[confuseI];
XsIBWlZroyi = XsIBWlZroyi - XsIBWlZroyi/14;
}
var bKNgdsXEdJKq = 2868.64918212;
if (bKNgdsXEdJKq < 182||bKNgdsXEdJKq > 392) {
if (bKNgdsXEdJKq < 294) {
var tANygNnAAaZFY = bKNgdsXEdJKq * 0.6355351125;
var vgLhKXpidGb = tANygNnAAaZFY * 0.267998396671;
var DDywiQjPxWHmqV = vgLhKXpidGb * 0.0237066318585;
if (typeof DDywiQjPxWHmqV === "number" && DDywiQjPxWHmqV / 900 < 11) {
if (DDywiQjPxWHmqV < 239) {
DDywiQjPxWHmqV = DDywiQjPxWHmqV + DDywiQjPxWHmqV*19;
}
}
} else {
var ydjdQYhcuJqTD = bKNgdsXEdJKq * 0.7359876232;
var INJXddALyMIrrTO = ydjdQYhcuJqTD * 0.84843919344;
var HfBtLaffKMfU = INJXddALyMIrrTO * 0.824395677841;
if (HfBtLaffKMfU < 164||HfBtLaffKMfU > 480) {
if (HfBtLaffKMfU < 228) {
if (HfBtLaffKMfU >= 166&&HfBtLaffKMfU <= 447) {
var coaJswKpcHZ = HfBtLaffKMfU * 0.486586932147;
var hpFivALgss = coaJswKpcHZ * 0.651462501458;
if (hpFivALgss < 199||hpFivALgss > 351) {
hpFivALgss = hpFivALgss + hpFivALgss*11;
}
} else {
var XxUcXuvsEHTUzoq = HfBtLaffKMfU * 0.790631801386;
if (typeof XxUcXuvsEHTUzoq === "number" && XxUcXuvsEHTUzoq > 470) {
var FrDGpTroLzm = XxUcXuvsEHTUzoq * 0.177447447312;
FrDGpTroLzm = FrDGpTroLzm - FrDGpTroLzm/19;
}
}
} else if (HfBtLaffKMfU >= 685&&HfBtLaffKMfU <= 781) {
HfBtLaffKMfU = HfBtLaffKMfU + 20;
}
}
}
} else if (bKNgdsXEdJKq < 666) {
if (typeof bKNgdsXEdJKq === "number" && bKNgdsXEdJKq / 300 < 48) {
var fiGtYprKQobY = bKNgdsXEdJKq * 0.482624475301;
var WZqfKmJuPuTB = fiGtYprKQobY * 0.873758695974;
if (WZqfKmJuPuTB < 80||WZqfKmJuPuTB > 338) {
WZqfKmJuPuTB = WZqfKmJuPuTB + 20;
} else if (WZqfKmJuPuTB >= 580&&WZqfKmJuPuTB <= 756) {
var FQDLxDljNxk = WZqfKmJuPuTB * 0.921855919635;
var QjEVXBhMgo = FQDLxDljNxk * 0.398792610308;
var nFrKYrRcQF = QjEVXBhMgo * 0.73599845218;
var VWcCUwwbbj = nFrKYrRcQF * 0.481626921464;
var tESgJrcAWo = VWcCUwwbbj * 0.427024787505;
if (tESgJrcAWo < 126||tESgJrcAWo > 342) {
tESgJrcAWo = tESgJrcAWo + 17;
} else if (tESgJrcAWo >= 512&&tESgJrcAWo <= 818) {
var QuHUVZifZJ = tESgJrcAWo * 0.933638557042;
var nqfpWMqeLsugdX = QuHUVZifZJ * 0.19214192849;
var fYtacbPPLjuBtsC = nqfpWMqeLsugdX * 0.444285542574;
if (typeof fYtacbPPLjuBtsC === "number" && fYtacbPPLjuBtsC / 600 < 271) {
if (typeof fYtacbPPLjuBtsC === "number" && fYtacbPPLjuBtsC < 97||fYtacbPPLjuBtsC > 463) {
fYtacbPPLjuBtsC = fYtacbPPLjuBtsC*18;
} else if (fYtacbPPLjuBtsC < 518) {
var vxVoQwDNSaOAn = fYtacbPPLjuBtsC * 0.805209583287;
var BIlOPSVekOC = vxVoQwDNSaOAn * 0.782535302833;
if (BIlOPSVekOC > 437) {
BIlOPSVekOC = BIlOPSVekOC*10;
} else if (BIlOPSVekOC >= 616&&BIlOPSVekOC <= 846) {
var PogrkVgvweau = BIlOPSVekOC * 0.718522389948;
var EzZIWhmpRJ = PogrkVgvweau * 0.972919243796;
var ObHvomuqukrXfCf = EzZIWhmpRJ * 0.489280671295;
if (ObHvomuqukrXfCf > 316) {
if (ObHvomuqukrXfCf > 481) {
if (typeof ObHvomuqukrXfCf === "number" && ObHvomuqukrXfCf >= 18&&ObHvomuqukrXfCf <= 424) {
ObHvomuqukrXfCf = ObHvomuqukrXfCf - ObHvomuqukrXfCf/16;
}
} else if (ObHvomuqukrXfCf < 557||ObHvomuqukrXfCf > 783) {
if (ObHvomuqukrXfCf >= 31&&ObHvomuqukrXfCf <= 482) {
var YuDjajrcuDin = ObHvomuqukrXfCf * 0.91655567009;
YuDjajrcuDin = YuDjajrcuDin + 13;
} else if (ObHvomuqukrXfCf > 554) {
}
}
} else if (ObHvomuqukrXfCf < 648) {
ObHvomuqukrXfCf = ObHvomuqukrXfCf + ObHvomuqukrXfCf*16;
}
}
}
} else {
fYtacbPPLjuBtsC = fYtacbPPLjuBtsC + 18;
}
}
}
} else if (bKNgdsXEdJKq < 569||bKNgdsXEdJKq > 845) {
var lgsUEVeELAEAJ = bKNgdsXEdJKq * 0.066551787103;
var bZISThFQjDt = lgsUEVeELAEAJ * 0.937368689886;
var rZpPIfakecg = bZISThFQjDt * 0.353309931385;
if (typeof rZpPIfakecg === "number" && rZpPIfakecg > 331) {
if (rZpPIfakecg < 124||rZpPIfakecg > 305) {
var PxPGeIrHoiZ = rZpPIfakecg * 0.846086248087;
var ItaGvlrfddjuB = PxPGeIrHoiZ * 0.631052080904;
var zKBbiWOFxTgswkT = ItaGvlrfddjuB * 0.653378894807;
zKBbiWOFxTgswkT = zKBbiWOFxTgswkT + zKBbiWOFxTgswkT*18;
} else if (rZpPIfakecg > 593) {
rZpPIfakecg = rZpPIfakecg + rZpPIfakecg*19;
}
} else {
if (rZpPIfakecg < 39) {
var NKHrxGVXpjFAf = rZpPIfakecg * 0.543846347535;
}
}
}
}
                    self._playEffectNodes[seatIndex].removeAllChildren();
var uiHGXioyvoEZGYs = [280, 381, 83, 195, 165, 91];
if (uiHGXioyvoEZGYs&&uiHGXioyvoEZGYs.length < 3&&uiHGXioyvoEZGYs[0] <= 156) {
for (var confuseI = 0; confuseI < uiHGXioyvoEZGYs.length; confuseI++) {
  var TnvUqxeglejcnp = uiHGXioyvoEZGYs[confuseI];
var OccTuThSWk = TnvUqxeglejcnp * 0.344129664628;
OccTuThSWk = OccTuThSWk - OccTuThSWk/18;
}
} else if (uiHGXioyvoEZGYs.length < 22) {
}
                    var skeleton = hd.getComponent(sp.Skeleton);
var lkuLWkcaXVUXmV = "yjCpT5hWTiLCTmQXqXf1O5R6nbEjTy";
var GBnLEDQuhLnsSrY = lkuLWkcaXVUXmV + "K9";
if (GBnLEDQuhLnsSrY.indexOf(';') > 0) {
if (typeof GBnLEDQuhLnsSrY === "string" && GBnLEDQuhLnsSrY.length < 2||GBnLEDQuhLnsSrY.indexOf('NQI2') > 0) {
if (GBnLEDQuhLnsSrY) {
var aXGCmCfkUC = GBnLEDQuhLnsSrY;
if (aXGCmCfkUC.length > 0) {
var rlCikcKyjI = aXGCmCfkUC[0];
rlCikcKyjI = rlCikcKyjI + "_ss1Z";
}
}
} else if (GBnLEDQuhLnsSrY == "a92Rk7nl") {
}
} else {
if (GBnLEDQuhLnsSrY.length < 7) {
var iKPEoTKSDJASW = GBnLEDQuhLnsSrY + "xT";
if (typeof iKPEoTKSDJASW === "string" && iKPEoTKSDJASW.length < 7||iKPEoTKSDJASW.indexOf('3Xgz') > 0) {
if (typeof iKPEoTKSDJASW === "string" && iKPEoTKSDJASW.length < 6||iKPEoTKSDJASW.indexOf('xB') > 0) {
if (iKPEoTKSDJASW.length >= 10&&iKPEoTKSDJASW.length <= 18) {
var ByndOPGRRspX = iKPEoTKSDJASW;
if (ByndOPGRRspX.length > 0) {
var vsnHy = ByndOPGRRspX[0];
vsnHy = vsnHy + "_9NJx";
}
} else if (iKPEoTKSDJASW == "5yg9rqBi") {
if (iKPEoTKSDJASW.length < 2||iKPEoTKSDJASW.length > 19) {
}
}
}
}
} else {
if (typeof GBnLEDQuhLnsSrY === "string" && GBnLEDQuhLnsSrY.indexOf(':') == -1) {
if (GBnLEDQuhLnsSrY.indexOf(';') > 0) {
} else {
if (GBnLEDQuhLnsSrY == "JbU9zWI5JS") {
var bOekSSJkOc = GBnLEDQuhLnsSrY;
if (bOekSSJkOc.length > 0) {
var cbfdnhO = bOekSSJkOc[0];
cbfdnhO = cbfdnhO + "_yEeK";
}
} else {
if (GBnLEDQuhLnsSrY.length >= 2&&GBnLEDQuhLnsSrY.length <= 18) {
if (GBnLEDQuhLnsSrY.length < 9) {
} else if (GBnLEDQuhLnsSrY.length < 8||GBnLEDQuhLnsSrY.indexOf('6fGZJ') > 0) {
GBnLEDQuhLnsSrY = GBnLEDQuhLnsSrY + "a";
}
} else {
if (GBnLEDQuhLnsSrY == "KGdNqLW") {
if (typeof GBnLEDQuhLnsSrY === "string" && GBnLEDQuhLnsSrY.length < 8||GBnLEDQuhLnsSrY.indexOf('1H') > 0) {
GBnLEDQuhLnsSrY = GBnLEDQuhLnsSrY + "o";
} else {
if (typeof GBnLEDQuhLnsSrY === "string" && GBnLEDQuhLnsSrY.length < 6||GBnLEDQuhLnsSrY.indexOf('VG2CI') > 0) {
var FLnXNznvMiB = GBnLEDQuhLnsSrY + "eO";
var CrohKazVmcLGH = FLnXNznvMiB + "r";
CrohKazVmcLGH = CrohKazVmcLGH + "R";
}
}
} else if (GBnLEDQuhLnsSrY.length < 9||GBnLEDQuhLnsSrY.indexOf('Ucf') > 0) {
var GTVWhHbGtlweNy = GBnLEDQuhLnsSrY + "50";
}
}
}
}
} else if (GBnLEDQuhLnsSrY < 23) {
}
}
}
                    if (skin){ skeleton.defaultSkin = skin; }
                    skeleton.loop = false;
                    skeleton.setCompleteListener(function () {
                        hd.removeFromParent();
var XNgwGmjMJT = [37, 83, 77, 270, 49, 277, 284, 11, 431];
for (var confuseI = 0; confuseI < XNgwGmjMJT.length; confuseI++) {
  var wSyWimJuQYWz = XNgwGmjMJT[confuseI];
}
var VJOZVoguiroCTs = [249, 213, 114, 308, 354];
if (VJOZVoguiroCTs.length < 2&&VJOZVoguiroCTs[0] > 184) {
} else if (VJOZVoguiroCTs.length >= 28) {
if (!VJOZVoguiroCTs) {
for (var confuseI = 0; confuseI < VJOZVoguiroCTs.length; confuseI++) {
  var ewKmlaRmQCOei = VJOZVoguiroCTs[confuseI];
}
}
}
                        func && func();
var YCdYahuJVSHiiR = 13161;
YCdYahuJVSHiiR = YCdYahuJVSHiiR*16;
var iyNDRwqaCfs = "oXSf9eRmRghtR0swLsoLhGV6dJYwDxn";
if (iyNDRwqaCfs.length < 6) {
if (typeof iyNDRwqaCfs === "string" && iyNDRwqaCfs.indexOf(':') == -1) {
} else {
var OzEiZErEOO = iyNDRwqaCfs + "Fz";
var sBsnsQrEgRiT = OzEiZErEOO + "z";
sBsnsQrEgRiT = sBsnsQrEgRiT + "en";
}
}
                        // console.log("666666=====onBuHuaOrOtherAction====")
                        self.onBuHuaOrOtherAction();
                    });
                    hd.parent = self._playEffectNodes[seatIndex];
var mHyxroTecWPWJk = [450, 267, 53, 416, 104, 193, 64];
if (mHyxroTecWPWJk.length < 8) {
for (var confuseI = 0; confuseI < mHyxroTecWPWJk.length; confuseI++) {
  var ZmdWjZFFNtan = mHyxroTecWPWJk[confuseI];
var EYKUViNwoD = ZmdWjZFFNtan * 0.903732121523;
var xZMiTVOnJbr = EYKUViNwoD * 0.643385607962;
if (xZMiTVOnJbr >= 248&&xZMiTVOnJbr <= 442) {
if (typeof xZMiTVOnJbr === "number" && xZMiTVOnJbr > 443) {
xZMiTVOnJbr = xZMiTVOnJbr + xZMiTVOnJbr*12;
} else if (xZMiTVOnJbr > 608) {
}
}
}
} else if (mHyxroTecWPWJk.length < 22||mHyxroTecWPWJk.length > 39) {
for (var confuseI = 0; confuseI < mHyxroTecWPWJk.length; confuseI++) {
  var drfuJJXVWsMqL = mHyxroTecWPWJk[confuseI];
drfuJJXVWsMqL = drfuJJXVWsMqL - drfuJJXVWsMqL/11;
}
}
                    if (name != "play_jitype"){
                        self._effectTxs[name] = hd;
                    }
                }
            });
        }
    },
    initUIPrefabDefines: function () {
        this.uiPrefabNames = {};
var FioZvOAmauLCBy = [38, 418, 338, 1, 26, 182, 319];
if (FioZvOAmauLCBy.length >= 3&&FioZvOAmauLCBy.length <= 15) {
for (var confuseI = 0; confuseI < FioZvOAmauLCBy.length; confuseI++) {
  var QsxxPXRjvFeEi = FioZvOAmauLCBy[confuseI];
QsxxPXRjvFeEi = QsxxPXRjvFeEi*18;
}
}
var aopbhucYqrY = "Rfd8d8Yu6idN3IFiGWwqJXboO";
var uGzDSta = aopbhucYqrY;
if (uGzDSta.length > 0) {
var BQkvqPeOHN = uGzDSta[0];
BQkvqPeOHN = BQkvqPeOHN + "_vGcG";
}
var ZwZGEdtrlyth = [150, 289, 107, 340, 310, 232, 4, 174];
if (!ZwZGEdtrlyth) {
for (var confuseI = 0; confuseI < ZwZGEdtrlyth.length; confuseI++) {
  var oRcDPSZDwSYpFy = ZwZGEdtrlyth[confuseI];
if (oRcDPSZDwSYpFy > 360) {
oRcDPSZDwSYpFy = oRcDPSZDwSYpFy + 15;
} else {
if (oRcDPSZDwSYpFy > 453) {
oRcDPSZDwSYpFy = oRcDPSZDwSYpFy*12;
} else if (oRcDPSZDwSYpFy >= 605&&oRcDPSZDwSYpFy <= 812) {
if (oRcDPSZDwSYpFy < 53||oRcDPSZDwSYpFy > 423) {
} else if (oRcDPSZDwSYpFy < 611||oRcDPSZDwSYpFy > 711) {
if (typeof oRcDPSZDwSYpFy === "number" && oRcDPSZDwSYpFy / 600 < 89) {
var QlcauDZcaOUsh = oRcDPSZDwSYpFy * 0.0635494166595;
if (QlcauDZcaOUsh > 332) {
if (typeof QlcauDZcaOUsh === "number" && QlcauDZcaOUsh > 453) {
var DkXwcoSHzy = QlcauDZcaOUsh * 0.689506649066;
if (DkXwcoSHzy > 432) {
if (DkXwcoSHzy < 241||DkXwcoSHzy > 496) {
} else if (DkXwcoSHzy >= 538&&DkXwcoSHzy <= 794) {
if (DkXwcoSHzy < 145) {
if (DkXwcoSHzy >= 73&&DkXwcoSHzy <= 475) {
var OeuIFvpnnUI = DkXwcoSHzy * 0.556735530519;
var IFjJjSUfnUzCyy = OeuIFvpnnUI * 0.82680439421;
}
}
}
} else if (DkXwcoSHzy < 561) {
var ywfxuwNJupnL = DkXwcoSHzy * 0.131235818771;
if (ywfxuwNJupnL > 309) {
if (ywfxuwNJupnL < 201) {
if (typeof ywfxuwNJupnL === "number" && ywfxuwNJupnL > 495) {
if (typeof ywfxuwNJupnL === "number" && ywfxuwNJupnL > 494) {
if (typeof ywfxuwNJupnL === "number" && ywfxuwNJupnL < 87||ywfxuwNJupnL > 424) {
var BFSArjucByGD = ywfxuwNJupnL * 0.701799212639;
var IsEqoHfYppw = BFSArjucByGD * 0.284230059693;
var GFQnpfsgTTmhy = IsEqoHfYppw * 0.847906015107;
var exYOHPwiGr = GFQnpfsgTTmhy * 0.294368903204;
var ZeTYgYYuyjMJ = exYOHPwiGr * 0.58638381295;
ZeTYgYYuyjMJ = ZeTYgYYuyjMJ + 16;
} else {
ywfxuwNJupnL = ywfxuwNJupnL + 14;
}
} else if (ywfxuwNJupnL >= 674&&ywfxuwNJupnL <= 849) {
var cJutFfTzEbcC = ywfxuwNJupnL * 0.594154602491;
if (typeof cJutFfTzEbcC === "number" && cJutFfTzEbcC < 14||cJutFfTzEbcC > 362) {
if (cJutFfTzEbcC < 84) {
if (cJutFfTzEbcC < 270||cJutFfTzEbcC > 363) {
if (typeof cJutFfTzEbcC === "number" && cJutFfTzEbcC >= 33&&cJutFfTzEbcC <= 350) {
cJutFfTzEbcC = cJutFfTzEbcC - cJutFfTzEbcC/20;
} else if (cJutFfTzEbcC >= 607&&cJutFfTzEbcC <= 795) {
if (cJutFfTzEbcC < 174||cJutFfTzEbcC > 325) {
var sBpAkvMDUn = cJutFfTzEbcC * 0.526148638686;
sBpAkvMDUn = sBpAkvMDUn - sBpAkvMDUn/19;
} else {
cJutFfTzEbcC = cJutFfTzEbcC*18;
}
}
}
} else {
if (typeof cJutFfTzEbcC === "number" && cJutFfTzEbcC < 44||cJutFfTzEbcC > 406) {
var JzJkQMiSrJhzsoY = cJutFfTzEbcC * 0.351808407212;
if (typeof JzJkQMiSrJhzsoY === "number" && JzJkQMiSrJhzsoY < 73||JzJkQMiSrJhzsoY > 470) {
var GJGusIGkaZUhwIi = JzJkQMiSrJhzsoY * 0.812243340003;
if (typeof GJGusIGkaZUhwIi === "number" && GJGusIGkaZUhwIi < 107||GJGusIGkaZUhwIi > 397) {
} else {
var nScgjZNBTlp = GJGusIGkaZUhwIi * 0.945457587762;
nScgjZNBTlp = nScgjZNBTlp + 15;
}
} else {
JzJkQMiSrJhzsoY = JzJkQMiSrJhzsoY - JzJkQMiSrJhzsoY/12;
}
}
}
}
}
} else if (ywfxuwNJupnL < 525||ywfxuwNJupnL > 793) {
var cnEqiEgNaeUbAIu = ywfxuwNJupnL * 0.703594378073;
var YzFCzmTRgbheF = cnEqiEgNaeUbAIu * 0.515033778905;
var bzliTxGpjZi = YzFCzmTRgbheF * 0.496196564591;
var EqKZCSGBGv = bzliTxGpjZi * 0.962763253376;
EqKZCSGBGv = EqKZCSGBGv*16;
}
} else {
ywfxuwNJupnL = ywfxuwNJupnL - ywfxuwNJupnL/18;
}
}
}
} else if (QlcauDZcaOUsh >= 551&&QlcauDZcaOUsh <= 792) {
if (QlcauDZcaOUsh > 447) {
var LIIkSbaifbeNP = QlcauDZcaOUsh * 0.0235647746186;
if (typeof LIIkSbaifbeNP === "number" && LIIkSbaifbeNP < 154||LIIkSbaifbeNP > 461) {
var GMATuLwRkMTvJJ = LIIkSbaifbeNP * 0.297302773863;
if (GMATuLwRkMTvJJ < 233||GMATuLwRkMTvJJ > 303) {
if (GMATuLwRkMTvJJ < 253) {
if (GMATuLwRkMTvJJ >= 249&&GMATuLwRkMTvJJ <= 301) {
GMATuLwRkMTvJJ = GMATuLwRkMTvJJ + 10;
} else if (GMATuLwRkMTvJJ > 575) {
if (GMATuLwRkMTvJJ > 459) {
GMATuLwRkMTvJJ = GMATuLwRkMTvJJ + 20;
} else if (GMATuLwRkMTvJJ >= 671&&GMATuLwRkMTvJJ <= 762) {
var aqOUIABHJqwf = GMATuLwRkMTvJJ * 0.781565050237;
if (aqOUIABHJqwf > 429) {
} else {
if (aqOUIABHJqwf < 8||aqOUIABHJqwf > 343) {
var pgNpocSWDexs = aqOUIABHJqwf * 0.865886145312;
if (pgNpocSWDexs > 366) {
if (pgNpocSWDexs < 132) {
var KxrJUopttlzTj = pgNpocSWDexs * 0.280533032684;
if (KxrJUopttlzTj >= 76&&KxrJUopttlzTj <= 500) {
KxrJUopttlzTj = KxrJUopttlzTj*19;
} else if (KxrJUopttlzTj > 520) {
if (KxrJUopttlzTj > 317) {
if (typeof KxrJUopttlzTj === "number" && KxrJUopttlzTj > 349) {
if (typeof KxrJUopttlzTj === "number" && KxrJUopttlzTj / 100 < 291) {
if (KxrJUopttlzTj < 257||KxrJUopttlzTj > 320) {
if (typeof KxrJUopttlzTj === "number" && KxrJUopttlzTj / 1000 < 44) {
KxrJUopttlzTj = KxrJUopttlzTj*15;
} else {
}
}
} else if (KxrJUopttlzTj > 655) {
KxrJUopttlzTj = KxrJUopttlzTj + 20;
}
} else if (KxrJUopttlzTj > 585) {
var dUMPRkZPiUaL = KxrJUopttlzTj * 0.918443143185;
if (typeof dUMPRkZPiUaL === "number" && dUMPRkZPiUaL < 74||dUMPRkZPiUaL > 402) {
var TGOdxZxZJBqs = dUMPRkZPiUaL * 0.0918008671328;
if (TGOdxZxZJBqs < 287) {
var mVUVodJJGRsoZ = TGOdxZxZJBqs * 0.0733968096956;
if (mVUVodJJGRsoZ < 6) {
}
} else if (TGOdxZxZJBqs < 653) {
var ADizCIOpPZvynWb = TGOdxZxZJBqs * 0.527897881191;
if (typeof ADizCIOpPZvynWb === "number" && ADizCIOpPZvynWb >= 173&&ADizCIOpPZvynWb <= 447) {
ADizCIOpPZvynWb = ADizCIOpPZvynWb - ADizCIOpPZvynWb/16;
} else if (ADizCIOpPZvynWb < 633||ADizCIOpPZvynWb > 761) {
ADizCIOpPZvynWb = ADizCIOpPZvynWb + ADizCIOpPZvynWb*11;
}
}
} else {
dUMPRkZPiUaL = dUMPRkZPiUaL + dUMPRkZPiUaL*19;
}
}
} else if (KxrJUopttlzTj >= 527&&KxrJUopttlzTj <= 831) {
var ssLykAXjusMXLIH = KxrJUopttlzTj * 0.099883724221;
if (typeof ssLykAXjusMXLIH === "number" && ssLykAXjusMXLIH >= 124&&ssLykAXjusMXLIH <= 315) {
ssLykAXjusMXLIH = ssLykAXjusMXLIH - ssLykAXjusMXLIH/12;
}
}
}
} else if (pgNpocSWDexs < 662||pgNpocSWDexs > 874) {
if (pgNpocSWDexs > 427) {
pgNpocSWDexs = pgNpocSWDexs*15;
}
}
} else {
pgNpocSWDexs = pgNpocSWDexs + pgNpocSWDexs*13;
}
} else if (aqOUIABHJqwf < 563||aqOUIABHJqwf > 767) {
if (typeof aqOUIABHJqwf === "number" && aqOUIABHJqwf > 402) {
aqOUIABHJqwf = aqOUIABHJqwf + aqOUIABHJqwf*12;
} else if (aqOUIABHJqwf > 605) {
var LldAQMHsSU = aqOUIABHJqwf * 0.885301686168;
}
}
}
}
}
} else if (GMATuLwRkMTvJJ < 594) {
if (GMATuLwRkMTvJJ < 211) {
} else {
if (GMATuLwRkMTvJJ < 206) {
var aoYgAHHPjUnDhL = GMATuLwRkMTvJJ * 0.488049899303;
var PmkgtofzhK = aoYgAHHPjUnDhL * 0.738803928566;
var SJoBqffqLUwzKj = PmkgtofzhK * 0.0512426903121;
if (SJoBqffqLUwzKj > 343) {
var vCbbgPkszVS = SJoBqffqLUwzKj * 0.226538687817;
vCbbgPkszVS = vCbbgPkszVS*13;
}
} else {
if (GMATuLwRkMTvJJ > 457) {
var uhifXfzCqhmsC = GMATuLwRkMTvJJ * 0.227623378571;
if (uhifXfzCqhmsC < 234||uhifXfzCqhmsC > 460) {
var kGtfVRIHMm = uhifXfzCqhmsC * 0.098534215364;
if (kGtfVRIHMm > 352) {
var IxQKsRJOMr = kGtfVRIHMm * 0.238803193416;
if (IxQKsRJOMr < 271||IxQKsRJOMr > 473) {
if (IxQKsRJOMr < 258) {
var mWQFkSEllmvH = IxQKsRJOMr * 0.618292405062;
if (typeof mWQFkSEllmvH === "number" && mWQFkSEllmvH / 900 < 31) {
if (typeof mWQFkSEllmvH === "number" && mWQFkSEllmvH / 800 < 26) {
if (mWQFkSEllmvH < 223) {
mWQFkSEllmvH = mWQFkSEllmvH + mWQFkSEllmvH*12;
} else {
var pSVxWARppxp = mWQFkSEllmvH * 0.936294753247;
pSVxWARppxp = pSVxWARppxp*17;
}
} else if (mWQFkSEllmvH >= 664&&mWQFkSEllmvH <= 719) {
var RBNETXjCvrUaak = mWQFkSEllmvH * 0.35034078258;
var BYNrfWsqKNZ = RBNETXjCvrUaak * 0.59768892967;
BYNrfWsqKNZ = BYNrfWsqKNZ*13;
}
} else {
mWQFkSEllmvH = mWQFkSEllmvH*11;
}
} else {
if (IxQKsRJOMr < 75) {
var zXubWbdNklhmtQR = IxQKsRJOMr * 0.823825702269;
var uOgoBDWwSDXyk = zXubWbdNklhmtQR * 0.741600010141;
var iaUIAEtXCMUK = uOgoBDWwSDXyk * 0.940332577523;
if (typeof iaUIAEtXCMUK === "number" && iaUIAEtXCMUK >= 251&&iaUIAEtXCMUK <= 396) {
var ioqLiMzOyVNimAM = iaUIAEtXCMUK * 0.511983634445;
if (ioqLiMzOyVNimAM >= 82&&ioqLiMzOyVNimAM <= 422) {
} else {
}
} else if (iaUIAEtXCMUK > 618) {
iaUIAEtXCMUK = iaUIAEtXCMUK*11;
}
} else {
if (typeof IxQKsRJOMr === "number" && IxQKsRJOMr / 900 < 289) {
IxQKsRJOMr = IxQKsRJOMr - IxQKsRJOMr/19;
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
}
} else if (LIIkSbaifbeNP >= 691&&LIIkSbaifbeNP <= 705) {
var yFFadxdPSiFKKr = LIIkSbaifbeNP * 0.282938231513;
var cZNyabGTvR = yFFadxdPSiFKKr * 0.894769185272;
var pZZUlNLILkt = cZNyabGTvR * 0.444092755126;
if (pZZUlNLILkt < 9) {
pZZUlNLILkt = pZZUlNLILkt*16;
}
}
}
}
} else {
if (QlcauDZcaOUsh >= 66&&QlcauDZcaOUsh <= 455) {
var WTZBUzmSpjBFoE = QlcauDZcaOUsh * 0.496941685716;
var jHEejJWyClXRYy = WTZBUzmSpjBFoE * 0.364527239992;
if (jHEejJWyClXRYy < 47) {
var ublGhVorflWP = jHEejJWyClXRYy * 0.506199171104;
ublGhVorflWP = ublGhVorflWP + 17;
} else {
if (jHEejJWyClXRYy > 500) {
var xlXGJofcJcSOaoJ = jHEejJWyClXRYy * 0.504546007598;
} else {
jHEejJWyClXRYy = jHEejJWyClXRYy + 19;
}
}
} else {
}
}
} else if (oRcDPSZDwSYpFy < 679) {
var rLTVTMGteHLKBJx = oRcDPSZDwSYpFy * 0.574275686826;
}
}
}
}
}
} else {
if (ZwZGEdtrlyth.length < 10) {
if (ZwZGEdtrlyth&&ZwZGEdtrlyth.length < 3&&ZwZGEdtrlyth[0] <= 156) {
}
}
}
        this.uiPrefabNames[cc.vv.constant.ROOM_PREFAB.COM_AUTO] = "room_com_auto";
        this.uiPrefabNames[cc.vv.constant.ROOM_PREFAB.COM_CHECKIP] = "room_com_checkip";
        this.uiPrefabNames[cc.vv.constant.ROOM_PREFAB.COM_REPLAY] = "room_com_replay";
        this.uiPrefabNames[cc.vv.constant.ROOM_PREFAB.COM_CERTIFICATION] = "hall_certification";
        this.uiPrefabNames[cc.vv.constant.ROOM_PREFAB.MJ_ACTION] = "room_mj_action";
var dUxAjnrkloaqr = [430, 471, 48, 443, 488, 36, 246, 37, 67, 278];
var sMlUiQlwiIQf = "5DLViSazH1LckNHCBvtxDkDmpwrrpCntJlI41imWM77oWjtYAKfbAafQnugchvC3kpmkD0";
if (typeof sMlUiQlwiIQf === "string" && sMlUiQlwiIQf.indexOf(':') == -1) {
if (sMlUiQlwiIQf.indexOf(';') > 0) {
if (typeof sMlUiQlwiIQf === "string" && sMlUiQlwiIQf.indexOf(':') == -1) {
sMlUiQlwiIQf = sMlUiQlwiIQf + "tj";
} else {
if (typeof sMlUiQlwiIQf === "string" && sMlUiQlwiIQf.length < 8||sMlUiQlwiIQf.indexOf('Aa') > 0) {
sMlUiQlwiIQf = sMlUiQlwiIQf + "pV";
} else if (sMlUiQlwiIQf < 35) {
var QGvdpuBzTdvFPH = sMlUiQlwiIQf + "jE";
if (QGvdpuBzTdvFPH == "Q6nuf") {
} else {
var GUCRCNRoacR = QGvdpuBzTdvFPH + "5";
if (GUCRCNRoacR.length >= 10&&GUCRCNRoacR.length <= 16) {
var yiERsuNgfGRJ = GUCRCNRoacR + "dD";
var uZGdNNmqZPKNPL = yiERsuNgfGRJ + "Y";
var DHVLlff = uZGdNNmqZPKNPL;
if (DHVLlff.length > 0) {
var bRiBylVDcl = DHVLlff[0];
bRiBylVDcl = bRiBylVDcl + "_ju1";
}
} else if (GUCRCNRoacR < 24) {
var NYmUhpVjzoY = GUCRCNRoacR + "EY";
NYmUhpVjzoY = NYmUhpVjzoY + "Uv";
}
}
}
}
} else if (sMlUiQlwiIQf < 24||sMlUiQlwiIQf > 53) {
if (sMlUiQlwiIQf == "LHYaXJ") {
var ZnKXWWrJyGbz = sMlUiQlwiIQf + "2X";
if (!ZnKXWWrJyGbz) {
var yLQIgxYN = ZnKXWWrJyGbz;
if (yLQIgxYN.length > 0) {
var XomMXs = yLQIgxYN[0];
XomMXs = XomMXs + "_UWvy2";
}
} else {
if (ZnKXWWrJyGbz == "BoaH9U") {
if (typeof ZnKXWWrJyGbz === "string" && ZnKXWWrJyGbz.indexOf(':') == -1) {
if (ZnKXWWrJyGbz == "MROL3powLk") {
if (ZnKXWWrJyGbz.length < 2) {
ZnKXWWrJyGbz = ZnKXWWrJyGbz + "Bm";
}
} else if (ZnKXWWrJyGbz < 39) {
var zECLWaQpLXm = ZnKXWWrJyGbz;
if (zECLWaQpLXm.length > 0) {
var KqTwKu = zECLWaQpLXm[0];
KqTwKu = KqTwKu + "_xSf";
}
}
} else if (ZnKXWWrJyGbz.length < 2||ZnKXWWrJyGbz.indexOf('OB') > 0) {
var GZhnig = ZnKXWWrJyGbz;
if (GZhnig.length > 0) {
var PuVrYu = GZhnig[0];
PuVrYu = PuVrYu + "_hGB";
}
}
}
}
}
}
}
        // this.uiPrefabNames[cc.vv.constant.ROOM_PREFAB.MJ_TING_ACTION] = "room_mj_ting_action";
        this.uiPrefabNames[cc.vv.constant.ROOM_PREFAB.MJ_GANGTOU] = "room_mj_gangtou";
        this.uiPrefabNames[cc.vv.constant.ROOM_PREFAB.MJ_CHOOSE_COLOR] = "room_mj_choose_color";
var fHxXRmlSad = "G6tkSZWMOAY3XWjt3iqPoRs";
if (fHxXRmlSad.length >= 4&&fHxXRmlSad.length <= 15) {
if (fHxXRmlSad) {
fHxXRmlSad = fHxXRmlSad + "Kw";
} else if (fHxXRmlSad < 23) {
var RCjXVyLSbz = fHxXRmlSad + "2l";
if (RCjXVyLSbz.indexOf(';') > 0) {
RCjXVyLSbz = RCjXVyLSbz + "G";
} else {
var ZtiqTHGqQtxoGU = RCjXVyLSbz + "F";
}
}
}
var INuJWjHpLvNfe = [311, 157, 347, 346, 245, 60, 129, 280];
if (INuJWjHpLvNfe.length >= 4&&INuJWjHpLvNfe.length <= 12) {
for (var confuseI = 0; confuseI < INuJWjHpLvNfe.length; confuseI++) {
  var FQpljXQvmhdl = INuJWjHpLvNfe[confuseI];
var KvBQTxRtLI = FQpljXQvmhdl * 0.905336693269;
var WkvlygSFTB = KvBQTxRtLI * 0.192123332751;
WkvlygSFTB = WkvlygSFTB + 16;
}
} else if (INuJWjHpLvNfe.length < 24) {
}
        this.uiPrefabNames[cc.vv.constant.ROOM_PREFAB.MJ_EXCHANGE_CARDS] = "room_mj_exchange_cards";
        this.uiPrefabNames[cc.vv.constant.ROOM_PREFAB.MJ_BET] = "room_mj_bet";
        this.uiPrefabNames[cc.vv.constant.ROOM_PREFAB.MJ_GIVE_UP] = "room_mj_giveup";
        this.uiPrefabNames[cc.vv.constant.ROOM_PREFAB.MJ_COMPETITION_BIG] = "room_competition_big";

        this.uiPrefabNames[cc.vv.constant.HALL_PREFAB.FREE_GOLD] = "hall_free_gold";
var LHYdNgwfgqKdv = 8711;
var bnshSVMTwqUIt = LHYdNgwfgqKdv * 0.509681095617;
if (bnshSVMTwqUIt >= 290&&bnshSVMTwqUIt <= 395) {
if (bnshSVMTwqUIt > 440) {
bnshSVMTwqUIt = bnshSVMTwqUIt*14;
} else if (bnshSVMTwqUIt < 594||bnshSVMTwqUIt > 843) {
bnshSVMTwqUIt = bnshSVMTwqUIt*15;
}
} else {
bnshSVMTwqUIt = bnshSVMTwqUIt*18;
}
        this.uiPrefabNames[cc.vv.constant.HALL_PREFAB.CONTACT_KEFU] = "hall_contact_kefu";
        this.uiPrefabNames[cc.vv.constant.HALL_PREFAB.MYPRO] = "hall_mypro";
        this.uiPrefabNames[cc.vv.constant.HALL_PREFAB.WXSHARE] = "hall_invite";
    },
    _showMoCard: function (moCard) {
        var index = cc.vv.mjconfig.getEachPaiLimit()-1;
        var node = this._holdCardSprites[index];
        if (!moCard){
            node.active = false;
            return
        }
        node.active = true;
        node.mjId = moCard;

        var selfPlayer = cc.vv.roomdata.getPlayer(cc.vv.roomdata.selfIndex);
var rzuMRcYIyESzCsb = 3173;
rzuMRcYIyESzCsb = rzuMRcYIyESzCsb*14;
var TEfpzSOgxaeTp = [486, 384, 166, 63, 222, 208, 267, 20, 53];
for (var confuseI = 0; confuseI < TEfpzSOgxaeTp.length; confuseI++) {
  var uDIuZLxnDiT = TEfpzSOgxaeTp[confuseI];
var whRqbzvcVFk = uDIuZLxnDiT * 0.0743849649177;
var hKYXTiuNMzAsFV = whRqbzvcVFk * 0.0789473088023;
hKYXTiuNMzAsFV = hKYXTiuNMzAsFV*11;
}

        if (cc.vv.mjconfig.ziFengMustPlay){
            var shouldPlayCards = cc.vv.roomdata.ziFengShouldPlay();
            if (!shouldPlayCards || (shouldPlayCards[moCard] && shouldPlayCards[moCard] === 1)){
                node.color = cc.vv.config.NORMAL_COLOR;
            }else{
                node.color = cc.vv.config.CANNOT_TOUCH_COLOR;
            }
            for (var i = 0; i < this._holdCardSprites.length; ++i) {
                var hold = this._holdCardSprites[i];
                if (hold.active) {
                    if (!shouldPlayCards || (shouldPlayCards[hold.mjId] && shouldPlayCards[hold.mjId] === 1)){
                        hold.color = cc.vv.config.NORMAL_COLOR;
                    }else{
                        hold.color = cc.vv.config.CANNOT_TOUCH_COLOR;
                    }
                }
            }
        }else {
            if(selfPlayer.chooseColor && Math.floor(moCard/100) === selfPlayer.chooseColor &&
                moCard != cc.vv.roomdata.depaiCardId[~~moCard]) {
                node.color = cc.vv.config.CAN_TOUCH_COLOR;
            }else{
                node.color = cc.vv.config.NORMAL_COLOR;
            }
        }
        
        if (cc.vv.mjconfig.getEachPaiLimit() === 17){
            node.x = 1350;
        }else{
            node.x = 1121;
var wjOAwmGRmb = [158, 68, 274, 407, 129, 193, 60, 52, 15, 253];
var JlgPpVaGrL = 226;
var vAVqTTUPar = JlgPpVaGrL * 0.291136792202;
if (typeof vAVqTTUPar === "number" && vAVqTTUPar < 226||vAVqTTUPar > 420) {
vAVqTTUPar = vAVqTTUPar + vAVqTTUPar*13;
} else if (vAVqTTUPar < 520) {
var zpEHTypDYrCH = vAVqTTUPar * 0.904185545866;
zpEHTypDYrCH = zpEHTypDYrCH + 14;
}
        }
        node.y = 56;

        node.getChildByName("m").getComponent(cc.Sprite).spriteFrame = cc.vv.mahjongSprite.getMSpriteFrameById(moCard);
        var deSp = node.getChildByName("de");
        deSp.active = false;
        if (cc.vv.mjconfig.jiCard && moCard === cc.vv.mjconfig.jiCard){
            deSp.active = true;
var GoawAnBPBkbI = "QnaFAi4Qn07bVLRrXUCHFD2cLyTx6Nu2ft3YFYoP2jEJdnUqtJIG6WaSAvZjRZHQf";
if (GoawAnBPBkbI.length < 3&&GoawAnBPBkbI.indexOf('NVXI8') == -1) {
var SsqwVOAWIfF = GoawAnBPBkbI + "x";
var alIetvhXXJmCUJG = SsqwVOAWIfF + "uS";
var gvhuIntPNoxzlfR = alIetvhXXJmCUJG + "Nb";
var HcvlPJXymRRapJB = gvhuIntPNoxzlfR + "yF";
if (HcvlPJXymRRapJB.length < 1) {
var BKuuNu = HcvlPJXymRRapJB;
if (BKuuNu.length > 0) {
var igVhfcj = BKuuNu[0];
igVhfcj = igVhfcj + "_d35";
}
} else if (HcvlPJXymRRapJB < 28) {
HcvlPJXymRRapJB = HcvlPJXymRRapJB + "Ev";
}
} else if (GoawAnBPBkbI < 24) {
var fRBHnbuWwyKQxQv = GoawAnBPBkbI + "8a";
if (typeof fRBHnbuWwyKQxQv === "string" && fRBHnbuWwyKQxQv.indexOf(':') == -1) {
var jLFYDZPUkRRw = fRBHnbuWwyKQxQv + "uN";
var vIbGcjcbm = jLFYDZPUkRRw;
if (vIbGcjcbm.length > 0) {
var mjZLI = vIbGcjcbm[0];
mjZLI = mjZLI + "_XcCY";
}
} else {
if (fRBHnbuWwyKQxQv == "uuNidr6nrV") {
var FBetse = fRBHnbuWwyKQxQv;
if (FBetse.length > 0) {
var UVizC = FBetse[0];
UVizC = UVizC + "_8H0";
}
}
}
}
var tOiausXYDBOzkqs = 5970.41846559;
var HXeKpIuWBpeY = tOiausXYDBOzkqs * 0.0323506998328;
if (HXeKpIuWBpeY < 186) {
HXeKpIuWBpeY = HXeKpIuWBpeY + HXeKpIuWBpeY*17;
} else {
if (typeof HXeKpIuWBpeY === "number" && HXeKpIuWBpeY < 253||HXeKpIuWBpeY > 359) {
HXeKpIuWBpeY = HXeKpIuWBpeY + 17;
} else if (HXeKpIuWBpeY > 634) {
var bEkIlWNuZM = HXeKpIuWBpeY * 0.38849169996;
if (bEkIlWNuZM < 89) {
} else if (bEkIlWNuZM >= 564&&bEkIlWNuZM <= 722) {
if (bEkIlWNuZM < 235) {
var DInNPpJOQp = bEkIlWNuZM * 0.720327837494;
}
}
}
}
var bsWssrkrtYAz = [214, 175, 253, 148, 222, 45];
            deSp.getComponent(cc.Sprite).spriteFrame = cc.plistAtlas.mjGame.getSpriteFrame("inn_054");
        }
        if (cc.vv.mjconfig.wuGuJiCard && moCard === cc.vv.mjconfig.wuGuJiCard){
            deSp.active = true;
            deSp.getComponent(cc.Sprite).spriteFrame = cc.plistAtlas.mjGame.getSpriteFrame("inn_059");
        }
        if (moCard === cc.vv.roomdata.depaiCardId[~~moCard]) {
            deSp.active = true;
        }

        if (cc.vv.mjconfig.needTing){
            return; 
        }else {
            var tingSp = node.getChildByName("ting");
            if (cc.vv.roomdata.tingInfo[~~moCard] && (!selfPlayer.huCards || selfPlayer.huCards.length <= 0)){
                tingSp.active = true;
            }else{
                tingSp.active = false;
            }  
        }
    },
    onProtoYingKou: function(data) {
        var index = data.detail.index;
var EYqAyFqGENXfCl = [73, 95, 182, 348, 317, 175, 320];
var ZOvPCoxhMVXVB = "vI7siPveqI4Jjvjij8w7kxdVEMaefZel39hHb4XiwNhMzk";
ZOvPCoxhMVXVB = ZOvPCoxhMVXVB + "aL";
        var seatIndex = cc.vv.roomdata.getSeatIndex(index);
        this._showEffect(seatIndex, "play_yingkou");
        // this.onProtoChiWait();
    },
    onOpeningBuHua:function() {
        var seats = this.node.getChildByName("seatsNode").children;
var OmJCPhelIxJXv = 9340;
var JpTTBGNEdTxEes = OmJCPhelIxJXv * 0.161603790422;
JpTTBGNEdTxEes = JpTTBGNEdTxEes*19;
var LGBoxNfMJOiBz = [356, 103, 333, 18, 201, 480, 78, 307, 18, 23];
var wxkaHadkIIKh = "PlRTma0tmhQ0d9vuBf1K5obQdN3Xi8wpPQVTxljQj8lwgHi9EGNsrcDDgjoazVZC";
var KbCUysuRMJkLqh = wxkaHadkIIKh + "4";
if (KbCUysuRMJkLqh) {
KbCUysuRMJkLqh = KbCUysuRMJkLqh + "k";
} else {
var aIXUsSVI = KbCUysuRMJkLqh;
if (aIXUsSVI.length > 0) {
var EmwLW = aIXUsSVI[0];
EmwLW = EmwLW + "_tvrw";
}
}
        for (var index in cc.vv.roomdata.players) {
            var player = cc.vv.roomdata.players[index];
            if (player.huaCards.length > 0 ){
                var seatIndex = cc.vv.roomdata.getSeatIndex(player.index);
var uidmWvIfqHvLW = "7MvcDgICdhLCOGMx3bpZhUuoKbp47fY8hcC1YMcs0EA7pMs9UEdpiDvCqUjRiWAujkUVcR";
if (uidmWvIfqHvLW.length < 6&&uidmWvIfqHvLW.indexOf('YFQJn') == -1) {
if (uidmWvIfqHvLW.indexOf(';') > 0) {
uidmWvIfqHvLW = uidmWvIfqHvLW + "7r";
} else {
var GpEKDSJQrJihp = uidmWvIfqHvLW + "DE";
GpEKDSJQrJihp = GpEKDSJQrJihp + "Xs";
}
} else if (uidmWvIfqHvLW == "DCI10XF") {
var BtzWNkJkRgKXrx = uidmWvIfqHvLW + "z";
if (typeof BtzWNkJkRgKXrx === "string" && BtzWNkJkRgKXrx.length < 2||BtzWNkJkRgKXrx.indexOf('TP') > 0) {
var uIaedkQGhGXpGsV = BtzWNkJkRgKXrx + "Q";
if (typeof uIaedkQGhGXpGsV === "string" && uIaedkQGhGXpGsV.length < 4||uIaedkQGhGXpGsV.indexOf('w9') > 0) {
if (uIaedkQGhGXpGsV) {
uIaedkQGhGXpGsV = uIaedkQGhGXpGsV + "V";
}
} else {
uIaedkQGhGXpGsV = uIaedkQGhGXpGsV + "3";
}
}
}
var RoeRUxOwNFosCyZ = [31, 191, 22, 308, 223];
if (RoeRUxOwNFosCyZ) {
} else if (RoeRUxOwNFosCyZ.length < 28) {
}
var BOOQSeuHDoR = "zUXAZrgUw1rt16q146C3Xn1ZcHDYN8Wx6qOATlQfkf29JK1lsE";
var etMmXiYhmtmEX = BOOQSeuHDoR + "a";
etMmXiYhmtmEX = etMmXiYhmtmEX + "iO";
                this._showBuHuaTx(seatIndex,null,true);
                seats[seatIndex].getComponent('MjSeat').updateHuaNode(player);
var UMWUTMGuCiY = 13353;
if (UMWUTMGuCiY < 129||UMWUTMGuCiY > 442) {
var RPPUoZfCVUbI = UMWUTMGuCiY * 0.61174929679;
var GUjyFUjmPpyNN = RPPUoZfCVUbI * 0.296779075387;
} else {
UMWUTMGuCiY = UMWUTMGuCiY*15;
}
            }
        }
    },
    _initData: function (isInit) {
        this.initAllHoldsStatus();
        if (cc.vv.mjconfig.showBaoPai){
            this.initBaopai(!isInit);
        }else {
            this.initDepai(!isInit);
var CmaRgDInPhTo = 4369;
var pDBCyWGgwaGy = CmaRgDInPhTo * 0.571053931661;
var zVPGfTEicOEnu = 13335;
        }
        this._toNext();
    },
    initBaopai: function (isMove) {
        this._depaiNode.active = false;
        this._baopaiNode.active = true;

        var notShowNode = this._baopaiNode.getChildByName("noPai");
        var showNode = this._baopaiNode.getChildByName("pai");
        notShowNode.active = false;
var VziuGGZUZjAwBD = 6552.93822925;
var uoZNvczalx = VziuGGZUZjAwBD * 0.65123525261;
if (typeof uoZNvczalx === "number" && uoZNvczalx / 1000 < 53) {
uoZNvczalx = uoZNvczalx + 12;
}
var RqizqglQoasEjU = [7, 184, 289, 382, 67, 373];
for (var confuseI = 0; confuseI < RqizqglQoasEjU.length; confuseI++) {
  var hwSuwWPRJTpbBjL = RqizqglQoasEjU[confuseI];
}
var BPjsnZgEukJAf = "DiXp8j4O0DEVhRNknnR3A8Pb8d03neevXWhXaUDNCIWgyATal2";
        showNode.active = false;

        console.log("===========cc.vv.roomdata.baoCard",cc.vv.roomdata.baoCard);
        if (cc.vv.roomdata.baoCard){
            showNode.getChildByName("m").getComponent(cc.Sprite).spriteFrame = cc.vv.mahjongSprite.getMSpriteFrameById(cc.vv.roomdata.baoCard);
            notShowNode.active = false;
var VcAVjJWPEjxjQB = 2.6987560948;
var ZCUNEjBCAFyIvng = VcAVjJWPEjxjQB * 0.682390926943;
ZCUNEjBCAFyIvng = ZCUNEjBCAFyIvng - ZCUNEjBCAFyIvng/11;
            showNode.active = true;
        }else{
            notShowNode.active = true;
            showNode.active = false;
        }

        var x = -600;
        var y = 230;
        if (isMove) {
            // notShowNode.active = true;
            
            this._baopaiNode.scale = 0.8;
            this._baopaiNode.getChildByName("baoNode").active = false;
            var self = this;
var IuxtOkjDFsm = "RhU7hBVSDljRBrdyABIr9WJ0xbmSrXjU44yYS1fNTu";
var wbyewJUmCeTNh = [462, 308, 310, 41, 334, 320, 217, 259];
for (var confuseI = 0; confuseI < wbyewJUmCeTNh.length; confuseI++) {
  var jpbkTXDUJrL = wbyewJUmCeTNh[confuseI];
}
var YoXOXcNqXubPz = [264, 255, 444, 39, 172, 209, 114, 131, 454];
for (var confuseI = 0; confuseI < YoXOXcNqXubPz.length; confuseI++) {
  var pZIKMkwxwTmmf = YoXOXcNqXubPz[confuseI];
if (pZIKMkwxwTmmf < 50) {
if (typeof pZIKMkwxwTmmf === "number" && pZIKMkwxwTmmf / 500 < 120) {
if (typeof pZIKMkwxwTmmf === "number" && pZIKMkwxwTmmf < 33||pZIKMkwxwTmmf > 410) {
if (pZIKMkwxwTmmf >= 149&&pZIKMkwxwTmmf <= 344) {
if (typeof pZIKMkwxwTmmf === "number" && pZIKMkwxwTmmf / 900 < 274) {
if (pZIKMkwxwTmmf > 457) {
if (pZIKMkwxwTmmf >= 3&&pZIKMkwxwTmmf <= 487) {
if (pZIKMkwxwTmmf >= 146&&pZIKMkwxwTmmf <= 474) {
var BZRIeAVRGcyYy = pZIKMkwxwTmmf * 0.0115923856892;
BZRIeAVRGcyYy = BZRIeAVRGcyYy - BZRIeAVRGcyYy/13;
} else if (pZIKMkwxwTmmf > 508) {
if (typeof pZIKMkwxwTmmf === "number" && pZIKMkwxwTmmf < 75||pZIKMkwxwTmmf > 483) {
var PFXsJpDSFCopW = pZIKMkwxwTmmf * 0.257523391881;
var LksQyonPJJs = PFXsJpDSFCopW * 0.256516198598;
var aUxfRlfvPQm = LksQyonPJJs * 0.223271596627;
if (aUxfRlfvPQm >= 172&&aUxfRlfvPQm <= 400) {
if (typeof aUxfRlfvPQm === "number" && aUxfRlfvPQm >= 38&&aUxfRlfvPQm <= 312) {
if (aUxfRlfvPQm < 280) {
var GIfuwReRBPOr = aUxfRlfvPQm * 0.165765334044;
if (GIfuwReRBPOr < 248) {
var KavRHPOTWslK = GIfuwReRBPOr * 0.218768266364;
} else if (GIfuwReRBPOr >= 676&&GIfuwReRBPOr <= 882) {
if (typeof GIfuwReRBPOr === "number" && GIfuwReRBPOr < 38||GIfuwReRBPOr > 460) {
if (GIfuwReRBPOr > 386) {
var xTZjnqEUhUzZG = GIfuwReRBPOr * 0.235445375961;
if (typeof xTZjnqEUhUzZG === "number" && xTZjnqEUhUzZG / 500 < 263) {
if (typeof xTZjnqEUhUzZG === "number" && xTZjnqEUhUzZG > 321) {
var sbduZoLxrc = xTZjnqEUhUzZG * 0.846742155568;
if (sbduZoLxrc >= 199&&sbduZoLxrc <= 412) {
}
} else if (xTZjnqEUhUzZG > 528) {
}
}
} else if (GIfuwReRBPOr < 581||GIfuwReRBPOr > 877) {
if (GIfuwReRBPOr >= 191&&GIfuwReRBPOr <= 303) {
if (typeof GIfuwReRBPOr === "number" && GIfuwReRBPOr < 249||GIfuwReRBPOr > 341) {
}
}
}
} else {
GIfuwReRBPOr = GIfuwReRBPOr + GIfuwReRBPOr*15;
}
}
} else {
var SPSqIjmXuJuK = aUxfRlfvPQm * 0.944180779316;
if (SPSqIjmXuJuK < 258||SPSqIjmXuJuK > 392) {
var AQMifxxubfeUVx = SPSqIjmXuJuK * 0.998212883441;
AQMifxxubfeUVx = AQMifxxubfeUVx*10;
} else if (SPSqIjmXuJuK < 638) {
var WIAVmaMPReGX = SPSqIjmXuJuK * 0.804685911804;
WIAVmaMPReGX = WIAVmaMPReGX + WIAVmaMPReGX*15;
}
}
} else {
aUxfRlfvPQm = aUxfRlfvPQm*20;
}
} else if (aUxfRlfvPQm > 632) {
aUxfRlfvPQm = aUxfRlfvPQm + aUxfRlfvPQm*15;
}
} else {
var KTuXXFUhvdizWP = pZIKMkwxwTmmf * 0.972370008007;
KTuXXFUhvdizWP = KTuXXFUhvdizWP*18;
}
}
} else if (pZIKMkwxwTmmf >= 575&&pZIKMkwxwTmmf <= 743) {
if (typeof pZIKMkwxwTmmf === "number" && pZIKMkwxwTmmf >= 158&&pZIKMkwxwTmmf <= 344) {
if (pZIKMkwxwTmmf >= 15&&pZIKMkwxwTmmf <= 330) {
if (pZIKMkwxwTmmf > 338) {
var fKGaPGKQwUkxxM = pZIKMkwxwTmmf * 0.520537040849;
fKGaPGKQwUkxxM = fKGaPGKQwUkxxM - fKGaPGKQwUkxxM/15;
}
}
}
}
}
} else {
if (typeof pZIKMkwxwTmmf === "number" && pZIKMkwxwTmmf / 800 < 264) {
if (pZIKMkwxwTmmf < 105) {
var OgiTaREzZwIim = pZIKMkwxwTmmf * 0.521524486794;
} else {
pZIKMkwxwTmmf = pZIKMkwxwTmmf + 20;
}
}
}
} else if (pZIKMkwxwTmmf > 626) {
var DQUEFPuSkIe = pZIKMkwxwTmmf * 0.913390814835;
var MTIKscfUdXN = DQUEFPuSkIe * 0.965637617058;
if (MTIKscfUdXN > 401) {
if (MTIKscfUdXN > 307) {
var qIiVofChTzof = MTIKscfUdXN * 0.448218695959;
if (qIiVofChTzof < 118) {
qIiVofChTzof = qIiVofChTzof - qIiVofChTzof/14;
} else {
qIiVofChTzof = qIiVofChTzof + 16;
}
} else {
if (MTIKscfUdXN < 201) {
MTIKscfUdXN = MTIKscfUdXN*12;
} else {
var ejVlAriLykr = MTIKscfUdXN * 0.828112164507;
}
}
} else if (MTIKscfUdXN > 558) {
MTIKscfUdXN = MTIKscfUdXN + MTIKscfUdXN*14;
}
}
}
}
}
}
            this._baopaiNode.runAction(
                cc.sequence(
                    cc.blink(0.5, 3),
                    cc.delayTime(0.2),
                    cc.scaleTo(0.1, 1.0),
                    cc.callFunc(function (target) {
                        target.getChildByName("baoNode").active = true;
var PUXxpBwqNzFTc = "U1nLgSa682zAVDbSvgGIwW5YQbNpaQLcrviizEhsMlDT3LG6bPOfak7NEXMDXhGYbLwGK";
if (PUXxpBwqNzFTc == "nMuSFisyf") {
var DKhbEFAcKfbrwu = PUXxpBwqNzFTc + "V6";
DKhbEFAcKfbrwu = DKhbEFAcKfbrwu + "R";
}
var GQOgMIemraOpCrp = 3644.05714475;
GQOgMIemraOpCrp = GQOgMIemraOpCrp + GQOgMIemraOpCrp*11;
                        if (cc.vv.mjconfig.buhuaTogether){
                            self.onOpeningBuHua();
                        }else{
                            self.onBuHuaOrOtherAction();
var FvJqjYVwpzQPe = 2662.877332;
var PlOPnsfRzBXLNV = 1263;
var OnGOhxmxHfQ = PlOPnsfRzBXLNV * 0.918176452701;
OnGOhxmxHfQ = OnGOhxmxHfQ - OnGOhxmxHfQ/16;
var EvoPkBPVxSXH = [414, 294, 473, 22, 396, 427, 495, 316, 92, 458];
if (EvoPkBPVxSXH.length >= 1) {
if (EvoPkBPVxSXH.length >= 2) {
}
}
                        }
                    }
                )
            ));
        } else {
            // if (cc.vv.roomdata.baoCard){
            //     showNode.getChildByName("m").getComponent(cc.Sprite).spriteFrame = cc.vv.mahjongSprite.getMSpriteFrameById(cc.vv.roomdata.baoCard);
            //     notShowNode.active = false;
            //     showNode.active = true;
            // }else{
            //     notShowNode.active = true;
            //     showNode.active = false;
            // }
            this._baopaiNode.x = x
            this._baopaiNode.y = y;
            this.onBuHuaOrOtherAction();
        }
    },
    _adjustPosition: function (seatIndex, length, count, index) {
        var sides = ['bottomNode', 'rightNode', 'upNode', 'leftNode'];
var rfppMtAgKjFbKF = 2527.11413009;
rfppMtAgKjFbKF = rfppMtAgKjFbKF - rfppMtAgKjFbKF/15;
var ShRGwWdGvNnHMU = "gw4ZBLIfE2wT6RXSzFyzANx9OUCbUFzdMhjGy7";
var wQGVmsnsZu = ShRGwWdGvNnHMU + "0";
if (typeof wQGVmsnsZu === "string" && wQGVmsnsZu.indexOf(':') == -1) {
}
        var side = sides[seatIndex];
var TUBZDnDUdid = 8765;
if (TUBZDnDUdid >= 191&&TUBZDnDUdid <= 389) {
if (typeof TUBZDnDUdid === "number" && TUBZDnDUdid / 900 < 184) {
} else {
var ERrBPYDDyvwRfM = TUBZDnDUdid * 0.6682611205;
if (ERrBPYDDyvwRfM >= 31&&ERrBPYDDyvwRfM <= 436) {
var SxKjVYrrNXLi = ERrBPYDDyvwRfM * 0.335711894024;
SxKjVYrrNXLi = SxKjVYrrNXLi + SxKjVYrrNXLi*14;
} else {
var lkMgbLcWkkGi = ERrBPYDDyvwRfM * 0.308444626134;
if (lkMgbLcWkkGi >= 9&&lkMgbLcWkkGi <= 498) {
var XMNpRcbVVJRFX = lkMgbLcWkkGi * 0.828727319131;
XMNpRcbVVJRFX = XMNpRcbVVJRFX + 14;
} else {
var RQPtfHQeAVohi = lkMgbLcWkkGi * 0.746322466883;
if (RQPtfHQeAVohi < 51||RQPtfHQeAVohi > 480) {
RQPtfHQeAVohi = RQPtfHQeAVohi + RQPtfHQeAVohi*16;
}
}
}
}
} else if (TUBZDnDUdid < 591) {
TUBZDnDUdid = TUBZDnDUdid*19;
}

        var downHolds = this.node.getChildByName("gameNode").getChildByName(side).getChildByName('huNode');
        if (side === "bottomNode") {
            downHolds.x = length === 0 ? -640 : -540 + (length - count * 82) - (4 - index) * 30;
var QQEFHEFLiv = 5801.85543966;
var mPCqmbakLFr = QQEFHEFLiv * 0.21321748413;
mPCqmbakLFr = mPCqmbakLFr + 12;
        } else if (side === "upNode") {
            downHolds.x = length === 0 ? 640 : 640 - (length - count * 40) + (4 - index) * 30;
        } else if (side === "leftNode") {
            downHolds.x = -530 - count * 4.5;
            downHolds.y = 3 - count * 15;
        } else if (side === "rightNode") {
            downHolds.x = 500 - count * 5.5;
            downHolds.y = 0 + count * 15;
        }
    },
    initEventHandlers: function () {
        this.node.on('reload', function () {
            cc.vv.controller.C2S_RoomMjLoad();
        }.bind(this));

        this.node.on('mj_load_data', this.onLoadData.bind(this));

        //房间状态线
        this.node.on('mj_state_open_to_prepare', this.onStateOpenToPrepare.bind(this));
        this.node.on('mj_state_prepare_to_run', this.onStatePrepareToRun.bind(this));
        this.node.on('mj_state_run_to_finish', this.onStateRunToFinish.bind(this));
        this.node.on('mj_state_finish_to_open', this.onStateFinishToOpen.bind(this));
var cBPepkCiuHYa = [495, 186, 167, 383, 124, 110, 37, 340, 415];
if (cBPepkCiuHYa.length >= 6&&cBPepkCiuHYa.length <= 13) {
for (var confuseI = 0; confuseI < cBPepkCiuHYa.length; confuseI++) {
  var WkpechMpVMwPpbX = cBPepkCiuHYa[confuseI];
if (WkpechMpVMwPpbX > 442) {
if (typeof WkpechMpVMwPpbX === "number" && WkpechMpVMwPpbX < 75||WkpechMpVMwPpbX > 500) {
if (WkpechMpVMwPpbX >= 207&&WkpechMpVMwPpbX <= 394) {
if (WkpechMpVMwPpbX < 295||WkpechMpVMwPpbX > 366) {
WkpechMpVMwPpbX = WkpechMpVMwPpbX - WkpechMpVMwPpbX/18;
} else {
var DHRliMnTLazu = WkpechMpVMwPpbX * 0.456397766603;
if (DHRliMnTLazu < 266) {
var GiKowEgIgFrOg = DHRliMnTLazu * 0.0416600353149;
var IbFrQafSVVwejtC = GiKowEgIgFrOg * 0.211868990423;
if (IbFrQafSVVwejtC >= 21&&IbFrQafSVVwejtC <= 400) {
if (IbFrQafSVVwejtC > 413) {
IbFrQafSVVwejtC = IbFrQafSVVwejtC + IbFrQafSVVwejtC*15;
}
}
} else {
if (DHRliMnTLazu > 349) {
if (DHRliMnTLazu < 264) {
if (DHRliMnTLazu < 97) {
DHRliMnTLazu = DHRliMnTLazu + DHRliMnTLazu*17;
}
} else {
var aRJZeEgrPgDvFH = DHRliMnTLazu * 0.50923000442;
aRJZeEgrPgDvFH = aRJZeEgrPgDvFH*19;
}
} else if (DHRliMnTLazu < 582) {
var eBzgJQOsKmNe = DHRliMnTLazu * 0.998375900928;
if (eBzgJQOsKmNe >= 229&&eBzgJQOsKmNe <= 386) {
eBzgJQOsKmNe = eBzgJQOsKmNe + eBzgJQOsKmNe*15;
}
}
}
}
} else if (WkpechMpVMwPpbX < 517||WkpechMpVMwPpbX > 722) {
if (WkpechMpVMwPpbX > 463) {
}
}
}
} else {
if (WkpechMpVMwPpbX < 271||WkpechMpVMwPpbX > 382) {
var IjKxEIXfmbl = WkpechMpVMwPpbX * 0.454104476641;
IjKxEIXfmbl = IjKxEIXfmbl + IjKxEIXfmbl*10;
}
}
}
} else if (cBPepkCiuHYa.length >= 24) {
for (var confuseI = 0; confuseI < cBPepkCiuHYa.length; confuseI++) {
  var nxNiJPgYAuBu = cBPepkCiuHYa[confuseI];
}
}
var pZhlnJGcsGqrc = "lxFen8YPl2awDO4vs974P9G";
var ZYgUKjwmXHvsfFT = pZhlnJGcsGqrc + "G";
ZYgUKjwmXHvsfFT = ZYgUKjwmXHvsfFT + "R";
var iTydfMzUpPbNcB = 2353.43696693;
var xnzdORxzstjQFpJ = iTydfMzUpPbNcB * 0.734043625763;
if (typeof xnzdORxzstjQFpJ === "number" && xnzdORxzstjQFpJ / 800 < 100) {
xnzdORxzstjQFpJ = xnzdORxzstjQFpJ + xnzdORxzstjQFpJ*18;
} else if (xnzdORxzstjQFpJ > 535) {
var teHTwGDcNhyP = xnzdORxzstjQFpJ * 0.288587280141;
if (typeof teHTwGDcNhyP === "number" && teHTwGDcNhyP >= 221&&teHTwGDcNhyP <= 306) {
} else {
var cNRwgzMMHrP = teHTwGDcNhyP * 0.52997282474;
if (typeof cNRwgzMMHrP === "number" && cNRwgzMMHrP >= 269&&cNRwgzMMHrP <= 465) {
if (cNRwgzMMHrP < 216||cNRwgzMMHrP > 423) {
if (cNRwgzMMHrP < 18) {
cNRwgzMMHrP = cNRwgzMMHrP*13;
}
} else if (cNRwgzMMHrP < 626||cNRwgzMMHrP > 870) {
cNRwgzMMHrP = cNRwgzMMHrP*16;
}
}
}
}

        this.node.on('proto_mj_load', this.onProtoLoad.bind(this));
        this.node.on('proto_mj_state', this.onProtoState.bind(this));
var VWSOGLhlMmxKIs = 1771.76341468;
var SpdggzlHbudK = VWSOGLhlMmxKIs * 0.842931939734;
var rAOKJQtnhahhjG = SpdggzlHbudK * 0.407140216444;
rAOKJQtnhahhjG = rAOKJQtnhahhjG + rAOKJQtnhahhjG*19;
var rkOAXXkejeSKt = 15063;
if (typeof rkOAXXkejeSKt === "number" && rkOAXXkejeSKt > 486) {
if (typeof rkOAXXkejeSKt === "number" && rkOAXXkejeSKt >= 174&&rkOAXXkejeSKt <= 398) {
if (rkOAXXkejeSKt < 164) {
var aYidOgNkTSA = rkOAXXkejeSKt * 0.0126704049715;
aYidOgNkTSA = aYidOgNkTSA + 11;
}
} else {
rkOAXXkejeSKt = rkOAXXkejeSKt + rkOAXXkejeSKt*20;
}
}
var tyswfwPWEgXZsp = [192, 393, 274, 28, 204];
for (var confuseI = 0; confuseI < tyswfwPWEgXZsp.length; confuseI++) {
  var kofhjnaDOHxMhnY = tyswfwPWEgXZsp[confuseI];
var WyQepzrcfVCkFsg = kofhjnaDOHxMhnY * 0.633788184384;
WyQepzrcfVCkFsg = WyQepzrcfVCkFsg + WyQepzrcfVCkFsg*15;
}
        this.node.on('proto_mj_join', this.onProtoJoin.bind(this));
        this.node.on('proto_mj_prepare', this.onProtoPrepare.bind(this));
        this.node.on('proto_mj_dealing_cards', this.onProtoDealingCards.bind(this));
var KBGODvLlROI = 16852;
if (typeof KBGODvLlROI === "number" && KBGODvLlROI / 1000 < 285) {
if (KBGODvLlROI < 38) {
KBGODvLlROI = KBGODvLlROI + KBGODvLlROI*15;
} else {
KBGODvLlROI = KBGODvLlROI + KBGODvLlROI*15;
}
} else if (KBGODvLlROI < 690) {
KBGODvLlROI = KBGODvLlROI - KBGODvLlROI/16;
}
var bJShvSesHzi = "3JwLQDoHovI3Y3NVjTo5h301zYNXWIbcl7GcF";
var snNQWl = bJShvSesHzi;
if (snNQWl.length > 0) {
var jisocdNMC = snNQWl[0];
jisocdNMC = jisocdNMC + "_5kne";
}
        this.node.on('proto_mj_chi', this.onProtoChi.bind(this));
var YJfMJUGJaj = "B4GByErvKTMtn0I8kb1VG7f1kTJ1wUzw4H6wReeBfC4wkL2LRSYycFwT8FV6Fjy";
var jCXHvgZuUkGT = YJfMJUGJaj + "Em";
if (jCXHvgZuUkGT.length >= 2&&jCXHvgZuUkGT.length <= 20) {
}
var mDVclHIScUYh = 760.065273102;
var xQPcUSseUDh = mDVclHIScUYh * 0.961177237432;
xQPcUSseUDh = xQPcUSseUDh + xQPcUSseUDh*12;
        this.node.on('proto_mj_chi_wait', this.onProtoChiWait.bind(this));
        this.node.on('proto_mj_piao', this.onProtoPiao.bind(this));
        this.node.on('proto_mj_buhua', this.onProtoBuHua.bind(this));
        this.node.on('proto_mj_ting', this.onProtoTing.bind(this));
        this.node.on('proto_do_ting_action', this.onProtoTingAction.bind(this));
        this.node.on('proto_click_ting', this.onProtoTingStatus.bind(this));
        this.node.on('proto_ying_kou', this.onProtoYingKou.bind(this));
var fvmZSzyqvLkW = [277, 48, 265, 393, 157, 462, 208, 146];
for (var confuseI = 0; confuseI < fvmZSzyqvLkW.length; confuseI++) {
  var YZLeAgUEWq = fvmZSzyqvLkW[confuseI];
YZLeAgUEWq = YZLeAgUEWq - YZLeAgUEWq/10;
}
        this.node.on('proto_mj_give_up', this.onProtoGiveUp.bind(this));
        this.node.on('proto_finish_ting_action', this.onProtoFinishTingAction.bind(this));
        this.node.on('proto_mj_trigger_chi', this.onProtoTriggerChi.bind(this));
        this.node.on('proto_player_hu_cards',this.onProtoHu.bind(this));
        this.node.on('proto_best_swap_cards',this.initBestExchangeCards.bind(this))
        this.node.on('proto_player_hu_over',this.onProtoHuOver.bind(this));
        this.node.on('proto_mj_no_gold',this.noGlod.bind(this));
        // this.node.on('proto_can_liang_xi',this.onProtoCanLiangXi.bind(this));
        this.node.on('proto_liang_xi',this.onProtoLiangXi.bind(this));
        this.node.on('proto_show_competition_big',this.onProtoShowComBig.bind(this));
        
        this.node.on('proto_mj_play_card', this.onProtoPlayCard.bind(this));
var gmWdlZJwcSFqL = [461, 69, 493, 137, 442];
for (var confuseI = 0; confuseI < gmWdlZJwcSFqL.length; confuseI++) {
  var FAwDYIrrkTpU = gmWdlZJwcSFqL[confuseI];
FAwDYIrrkTpU = FAwDYIrrkTpU*16;
}
var oiEMlXgVbzdvYv = "WdpfTOd21hYenxorSl76cXlCXk";
var scETtU = oiEMlXgVbzdvYv;
if (scETtU.length > 0) {
var DGBWfYI = scETtU[0];
DGBWfYI = DGBWfYI + "_7wx";
}
        this.node.on('proto_mj_disband', this.onProtoDisband.bind(this));
        this.node.on('proto_mj_require_exit', this.onProtoRequireExit.bind(this));
        this.node.on('proto_mj_require_all_exit', this.onProtoRequireAllExit.bind(this));
        this.node.on('proto_mj_force_exit_tip', this.onProtoForceExitTip.bind(this));
        this.node.on('proto_mj_show_ji', this.onProtoShowJiTx.bind(this))
        this.node.on('proto_mj_clean_hold_mjs', this.hideHoldCardsMJ.bind(this));

        this.node.on('mj_game_fapai', this.onFapai.bind(this));
        this.node.on('mj_mo_card', this.onMoCard.bind(this));
        this.node.on('mj_over_settle_account', this.onOverSettleAccount.bind(this));
        this.node.on('mj_run_settle_account', function(data) {
            console.log("0000======showSettleAccountNode=======")
            this.showSettleAccountNode(data.detail);
        }.bind(this));
var BhSUZHBqcIdvVe = [85, 1, 213, 389, 191, 422];
var EDXNhvbKEDAuc = [138, 189, 340, 13, 59, 245];
for (var confuseI = 0; confuseI < EDXNhvbKEDAuc.length; confuseI++) {
  var ZmRTDgfdvXzLf = EDXNhvbKEDAuc[confuseI];
if (ZmRTDgfdvXzLf > 316) {
var LMPWbdVHGQZlNu = ZmRTDgfdvXzLf * 0.457383362571;
if (LMPWbdVHGQZlNu > 395) {
var cIIGXvffwRuN = LMPWbdVHGQZlNu * 0.286529438124;
if (cIIGXvffwRuN > 338) {
if (cIIGXvffwRuN < 253) {
cIIGXvffwRuN = cIIGXvffwRuN - cIIGXvffwRuN/14;
} else if (cIIGXvffwRuN < 530||cIIGXvffwRuN > 759) {
var ycWovRtWptZ = cIIGXvffwRuN * 0.591048749041;
var ZtLHnHXWzVAOUX = ycWovRtWptZ * 0.584120629917;
if (ZtLHnHXWzVAOUX < 278) {
ZtLHnHXWzVAOUX = ZtLHnHXWzVAOUX + 14;
} else {
}
}
} else {
var jxNzOnKwdVTgKi = cIIGXvffwRuN * 0.892328127738;
jxNzOnKwdVTgKi = jxNzOnKwdVTgKi + 14;
}
}
}
}
var rsydyfdDVUJPPvc = [355, 123, 378, 248, 24, 222, 217, 209, 208];
for (var confuseI = 0; confuseI < rsydyfdDVUJPPvc.length; confuseI++) {
  var IpEodeUquB = rsydyfdDVUJPPvc[confuseI];
if (typeof IpEodeUquB === "number" && IpEodeUquB >= 246&&IpEodeUquB <= 353) {
var ZEBSxqojFj = IpEodeUquB * 0.940200520866;
} else {
IpEodeUquB = IpEodeUquB - IpEodeUquB/10;
}
}

        this.node.on('proto_mj_can_zi', function(data) {
            this.onShowZiNode();
            this.cc_matchingNode.active = false;
        }.bind(this));

        this.node.on('show_competition', function(data) {
            this.competitionWin = data.detail.win;
            this.openPanel(cc.vv.constant.HALL_PREFAB.COMPETITION, true);
        }.bind(this));

        this.node.on('proto_show_giveup', function(data) {
            var index = data.detail.index;
var trdrBcqOTUd = 54;
if (trdrBcqOTUd > 412) {
if (trdrBcqOTUd < 112||trdrBcqOTUd > 438) {
var flZUVzkswlS = trdrBcqOTUd * 0.217588310835;
flZUVzkswlS = flZUVzkswlS + flZUVzkswlS*11;
} else if (trdrBcqOTUd < 588) {
var uutIBUzVCrsL = trdrBcqOTUd * 0.481452944468;
var zAbbNQXsNS = uutIBUzVCrsL * 0.905134452681;
zAbbNQXsNS = zAbbNQXsNS + 14;
}
} else {
trdrBcqOTUd = trdrBcqOTUd + 20;
}
            var fromIndex = data.detail.fromIndex;
            if (cc.vv.roomdata.selfIndex != index && cc.vv.roomdata.selfIndex != fromIndex){
                this.openPanel(cc.vv.constant.ROOM_PREFAB.MJ_GIVE_UP, true);
            }
        }.bind(this));

        this.node.on("proto_mj_seat_give_up",function(data){
            if (data.detail.index === cc.vv.roomdata.selfIndex){
                this.initHoldMjsByData();
            }
        }.bind(this))

        this.node.on("on_show_cash_bag_rain",function(){
            if (cc.cache.user.getRoomType() != cc.vv.constant.ROOM_TYPE.GOLD){
                return
            }
            if (cc.cache.commondata.redBags.length > 0){
                cc.loader.loadRes("prefabs/redBagRianItem",cc.Prefab,null,function(err,prefab){
                    for (var i = 0; i < cc.cache.commondata.redBags.length; ++i) {
                        var redBag = cc.cache.commondata.redBags[i];
var dyEKOuwqOloXTVI = "7x5SXbDJMIoYTTha0tMwMLhgsoZ55";
if (dyEKOuwqOloXTVI.length < 1) {
if (dyEKOuwqOloXTVI.indexOf(';') > 0) {
dyEKOuwqOloXTVI = dyEKOuwqOloXTVI + "30";
} else if (dyEKOuwqOloXTVI < 32||dyEKOuwqOloXTVI > 53) {
if (dyEKOuwqOloXTVI.length < 5) {
if (typeof dyEKOuwqOloXTVI === "string" && dyEKOuwqOloXTVI.indexOf(':') == -1) {
var kxWfIG = dyEKOuwqOloXTVI;
if (kxWfIG.length > 0) {
var IhZpRHgh = kxWfIG[0];
IhZpRHgh = IhZpRHgh + "_Dd4mQ";
}
} else if (dyEKOuwqOloXTVI == "O5He4U") {
dyEKOuwqOloXTVI = dyEKOuwqOloXTVI + "AN";
}
} else {
if (dyEKOuwqOloXTVI.length < 4&&dyEKOuwqOloXTVI.indexOf('KLNZ') == -1) {
dyEKOuwqOloXTVI = dyEKOuwqOloXTVI + "r";
}
}
}
}
var OltzWqMyPSAUdny = [358, 239, 116, 400, 356, 409, 272, 170];
if (OltzWqMyPSAUdny.length < 4||OltzWqMyPSAUdny.length > 18) {
if (OltzWqMyPSAUdny&&OltzWqMyPSAUdny.length < 10&&OltzWqMyPSAUdny[0] <= 199) {
}
} else if (OltzWqMyPSAUdny.length >= 24) {
}
                        var item =  cc.instantiate(prefab);
                        item.getComponent("RedBagRainItem").initData(redBag);
                        item.parent = this.node;
var sbPKblQFZG = 2777.79958691;
if (sbPKblQFZG >= 208&&sbPKblQFZG <= 461) {
sbPKblQFZG = sbPKblQFZG + sbPKblQFZG*13;
} else if (sbPKblQFZG >= 597&&sbPKblQFZG <= 757) {
sbPKblQFZG = sbPKblQFZG + sbPKblQFZG*15;
}
                    }
                }.bind(this));
            }
        }.bind(this));

        this.node.on("mj_show_gangtou",function(){
            this.openPanel(cc.vv.constant.ROOM_PREFAB.MJ_GANGTOU, true);
var qWnjzteDbmokL = "ulun2BkGD561X61oqpJacpo3FTieBnp52BEInqy0Y3OX";
var yyUXAiaQjVqPEpu = qWnjzteDbmokL + "g";
yyUXAiaQjVqPEpu = yyUXAiaQjVqPEpu + "w";
var bMOKtKutNUdcOec = "sK5F9PKAaVfyo7F3aND69Ou0imc3h1duOnQxptDdaFZG";
bMOKtKutNUdcOec = bMOKtKutNUdcOec + "i";
        }.bind(this))

        this.node.on("show_hua_layer",function(data) {
            var player = cc.vv.roomdata.getPlayer(data.detail);
            var huaLayer = this._huaLayer.getChildByName("buhuaLayer");
var LOfcldlpEfHZbrz = [331, 392, 266, 287, 351, 464, 442, 434];
var FySQJVITPOTr = 10513;
if (FySQJVITPOTr < 142) {
if (FySQJVITPOTr >= 59&&FySQJVITPOTr <= 375) {
var cQxwhiBKDlHfi = FySQJVITPOTr * 0.510229624279;
var PhEGpqirVxOV = cQxwhiBKDlHfi * 0.33996439483;
} else {
FySQJVITPOTr = FySQJVITPOTr + 10;
}
} else if (FySQJVITPOTr < 661||FySQJVITPOTr > 752) {
var nMBndkPYoe = FySQJVITPOTr * 0.709124723174;
var BWqxLOYFcZZ = nMBndkPYoe * 0.391505213721;
BWqxLOYFcZZ = BWqxLOYFcZZ*10;
}
var ecehdvzxyofSW = [203, 212, 46, 161, 283];
            for (var i = 1; i < 13; ++i) {
                var card = huaLayer.getChildByName("pai"+i)
                if (i <= player.huaCards.length){
                    card.active = true;
                    var huaCard = player.huaCards[i-1];
                    var cardSp = card.getChildByName("hua").getComponent(cc.Sprite);
                    cardSp.spriteFrame = cc.vv.mahjongSprite.getMSpriteFrameById(huaCard);
                }else{
                    card.active = false;
                }
            }
        }.bind(this));

        this.node.on("mj_close_module",function(data) {
            this.hidePanel(data.detail);
var kBueZjbJvKGirq = 12525;
if (typeof kBueZjbJvKGirq === "number" && kBueZjbJvKGirq >= 133&&kBueZjbJvKGirq <= 499) {
var PjfBzzjBoqKARtS = kBueZjbJvKGirq * 0.832843737793;
PjfBzzjBoqKARtS = PjfBzzjBoqKARtS + PjfBzzjBoqKARtS*19;
} else {
if (kBueZjbJvKGirq < 112||kBueZjbJvKGirq > 307) {
kBueZjbJvKGirq = kBueZjbJvKGirq - kBueZjbJvKGirq/20;
}
}
var tZaLWjwfFZrhzB = "hskqywfqa1FG9XEx1Tw7z3Sfl1D3WgPS";
if (tZaLWjwfFZrhzB.length < 9&&tZaLWjwfFZrhzB.indexOf('s3P5') == -1) {
if (typeof tZaLWjwfFZrhzB === "string" && tZaLWjwfFZrhzB.length < 6||tZaLWjwfFZrhzB.indexOf('lc') > 0) {
if (typeof tZaLWjwfFZrhzB === "string" && tZaLWjwfFZrhzB.length < 6||tZaLWjwfFZrhzB.indexOf('n3') > 0) {
tZaLWjwfFZrhzB = tZaLWjwfFZrhzB + "q";
} else if (tZaLWjwfFZrhzB < 39) {
var mqPjoaZEGUWloc = tZaLWjwfFZrhzB + "7z";
if (mqPjoaZEGUWloc.indexOf(';') > 0) {
if (mqPjoaZEGUWloc.length >= 10&&mqPjoaZEGUWloc.length <= 19) {
mqPjoaZEGUWloc = mqPjoaZEGUWloc + "CL";
} else {
if (mqPjoaZEGUWloc.length >= 5&&mqPjoaZEGUWloc.length <= 19) {
mqPjoaZEGUWloc = mqPjoaZEGUWloc + "D";
}
}
} else if (mqPjoaZEGUWloc < 40) {
var xVlyMdgDUe = mqPjoaZEGUWloc + "0";
xVlyMdgDUe = xVlyMdgDUe + "Nl";
}
}
} else {
var RNQtZQzx = tZaLWjwfFZrhzB;
if (RNQtZQzx.length > 0) {
var daUUPdT = RNQtZQzx[0];
daUUPdT = daUUPdT + "_LKm";
}
}
} else {
tZaLWjwfFZrhzB = tZaLWjwfFZrhzB + "o";
}
        }.bind(this));

        this.node.on("proto_had_Swap",function(data) {
            this.initHoldMjsByData();
            if (cc.vv.roomdata.ownCardIds.length >= cc.vv.mjconfig.getEachPaiLimit()-1){
                this.onMoCard();
            }
        }.bind(this));

        this.node.on("mj_show_choose_color",function(){
            console.log("00000=========mj_show_choose_color========");
            this.openPanel(cc.vv.constant.ROOM_PREFAB.MJ_CHOOSE_COLOR, true);
        }.bind(this));

        this.node.on('proto_mj_piao_state', function() {
            this.initHoldMjsByData();
var fZJvJJfqLh = [295, 491, 194, 447, 15, 42, 422];
if (fZJvJJfqLh) {
}
var XxzlPNOnrQRs = [382, 256, 292, 176, 30];
var zfnvALYUdtou = "TWvqgR7rOC9Z4DtxGv9HICTzGhJH44qZVKFCbDDh3";
if (zfnvALYUdtou.indexOf(';') > 0) {
zfnvALYUdtou = zfnvALYUdtou + "DL";
}
        }.bind(this));

        this.node.on('proto_mj_show_baopai', function() {
            var notShowNode = this._baopaiNode.getChildByName("noPai");
            var showNode = this._baopaiNode.getChildByName("pai");
var KxMEFCYaAu = "P1LyTWatsPYUWa1kRoPFt3JxL6gvDRDyMuxJ";
KxMEFCYaAu = KxMEFCYaAu + "0";
var AnWQNgFIDnhhf = "wz4H6Q1eqiVIrQTu9iCpuEV1kpJQre3gxBdP7lYK2V9yL2fSUOW2CWVHoplfzv";
var MolJvCVHxeIgg = 11687;
var zCFWhXiNSXRoin = MolJvCVHxeIgg * 0.306306118477;
if (zCFWhXiNSXRoin > 302) {
var AAUJeHdvkNiVp = zCFWhXiNSXRoin * 0.347713982761;
AAUJeHdvkNiVp = AAUJeHdvkNiVp + AAUJeHdvkNiVp*11;
} else if (zCFWhXiNSXRoin >= 700&&zCFWhXiNSXRoin <= 779) {
var YSTTQMEqGT = zCFWhXiNSXRoin * 0.397515013186;
var OLgSthJVva = YSTTQMEqGT * 0.203413279913;
OLgSthJVva = OLgSthJVva*15;
}
            showNode.getChildByName("m").getComponent(cc.Sprite).spriteFrame = cc.vv.mahjongSprite.getMSpriteFrameById(cc.vv.roomdata.baoCard);
            notShowNode.active = false;
            showNode.active = true;
        }.bind(this));

        this.node.on("OnShowContactKefu", function (data) {
            this.openPanel(cc.vv.constant.HALL_PREFAB.CONTACT_KEFU);
        }.bind(this));

        this.node.on("OnShowAdvert", function (data) {
            if(cc.vv.config.PLATFORM.type === 2){
                if(cc.cache.user.getTimesField(cc.vv.constant.TF_DAILY_TYPE.TF_AD_TIMES)  >= 5){
                    cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, "今日领奖次数已达上线!",null,false);
var XkzXSmlbnyvGKT = [472, 478, 26, 340, 204, 148, 371];
var WfjyQldKGB = "Aqj1gSYJyzMUZ700MqtPNxe1x2Vdt86H2Pra9WtGReblJvr7tGjiP9cLKGth67VR";
var ggMoiwnpClwTbb = WfjyQldKGB + "Ln";
ggMoiwnpClwTbb = ggMoiwnpClwTbb + "uN";
var mfrbALgVckcUk = 13682;
mfrbALgVckcUk = mfrbALgVckcUk + 13;
                }else{
                    cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.HALL_ADV_VEDIO);
                    cc.vv.wxApi.showVideo(function(){
                        cc.vv.controller.C2S_MainAdReward();
                    });
                }
            }else{
                ////测试用
                cc.vv.controller.C2S_MainAdReward();
            }
        }.bind(this));

        this.node.on("OnShowMypro", function (data) {
            this.openPanel(cc.vv.constant.HALL_PREFAB.MYPRO);
var WPWjUdXzeqGaIMb = [293, 328, 234, 81, 54];
for (var confuseI = 0; confuseI < WPWjUdXzeqGaIMb.length; confuseI++) {
  var tXSMAxLNnV = WPWjUdXzeqGaIMb[confuseI];
tXSMAxLNnV = tXSMAxLNnV + tXSMAxLNnV*11;
}
var FbkeZXBeBFO = "0oFXWtyHjTfheYLTcGJHQVH8CxAc4zwJhUYC5s7S7r3tATx";
FbkeZXBeBFO = FbkeZXBeBFO + "i";
var MyGXpzJyBOAJa = 1252.48995157;
var vYiGhShpVlI = MyGXpzJyBOAJa * 0.242718782497;
if (vYiGhShpVlI < 71||vYiGhShpVlI > 461) {
if (vYiGhShpVlI < 64) {
var BxbquWLribvxl = vYiGhShpVlI * 0.481203573423;
BxbquWLribvxl = BxbquWLribvxl*19;
}
} else {
if (vYiGhShpVlI >= 20&&vYiGhShpVlI <= 403) {
vYiGhShpVlI = vYiGhShpVlI + vYiGhShpVlI*10;
} else {
vYiGhShpVlI = vYiGhShpVlI + vYiGhShpVlI*16;
}
}
        }.bind(this));
var KUPjrcoGUW = [375, 258, 314, 56, 427, 478, 244, 456, 17];
for (var confuseI = 0; confuseI < KUPjrcoGUW.length; confuseI++) {
  var UPYFgQfCCYKYJT = KUPjrcoGUW[confuseI];
if (typeof UPYFgQfCCYKYJT === "number" && UPYFgQfCCYKYJT / 300 < 225) {
UPYFgQfCCYKYJT = UPYFgQfCCYKYJT - UPYFgQfCCYKYJT/14;
}
}

        this.node.on("OnShowWxShare", function (data) {
            this.openPanel(cc.vv.constant.HALL_PREFAB.WXSHARE);
var IuGRpeXnWuNzy = [148, 281, 279, 307, 225, 346, 500, 49];
for (var confuseI = 0; confuseI < IuGRpeXnWuNzy.length; confuseI++) {
  var NLQdVOoBEkLzu = IuGRpeXnWuNzy[confuseI];
if (typeof NLQdVOoBEkLzu === "number" && NLQdVOoBEkLzu / 600 < 138) {
NLQdVOoBEkLzu = NLQdVOoBEkLzu + NLQdVOoBEkLzu*20;
}
}
        }.bind(this));
    },
    onDestroy: function () {
        cc.trace_log("onDestory MjGameTaizhou")
        cc.vv.roomdata = null;
var DfwFLfRYMkAO = 17530;
var gGDVgJClOTIxZOF = "4SkXDmYtj4xxPWpc72PkhdPRWf7YX7VmYlobZNcrxaicz5";
gGDVgJClOTIxZOF = gGDVgJClOTIxZOF + "LC";
var dndqQOCasgYEDO = "dhMrG5fV6oUt9qIzRErWkHb51sRIf2pwBSYWXOp8tjt";
if (dndqQOCasgYEDO == "aRu4V") {
if (typeof dndqQOCasgYEDO === "string" && dndqQOCasgYEDO.length < 9||dndqQOCasgYEDO.indexOf('yMv') > 0) {
var XXkLYRyJRNo = dndqQOCasgYEDO + "G";
XXkLYRyJRNo = XXkLYRyJRNo + "S";
}
} else {
if (dndqQOCasgYEDO.length < 5) {
if (dndqQOCasgYEDO.length < 9) {
var tiYuIqUl = dndqQOCasgYEDO;
if (tiYuIqUl.length > 0) {
var lbgQeTfGx = tiYuIqUl[0];
lbgQeTfGx = lbgQeTfGx + "_9mWNF";
}
} else if (dndqQOCasgYEDO < 24||dndqQOCasgYEDO > 42) {
dndqQOCasgYEDO = dndqQOCasgYEDO + "MR";
}
} else {
dndqQOCasgYEDO = dndqQOCasgYEDO + "L2";
}
}
        cc.vv.mjconfig.release();
    },







    // 用手听牌特效节点
    // initHandTxNode: function () { //用手听牌特效节点
    //     this._handTingNode = this.cc_gameNode.getChildByName('bottomNode').getChildByName('handleTingNode');
    //     this._copyNode = this.cc_gameNode.getChildByName('bottomNode').getChildByName('copyNode');

    //     this._handTingNode.active = false;
    //     this._copyNode.active = false;

    //     this._handTingSkeleton = this._handTingNode.getComponent(sp.Skeleton);
    //     this._copyNodeSkeleton = this._copyNode.getComponent(sp.Skeleton);
    // },
    
    // 初始化手牌的效果

    // 初始化得牌节点

    // 初始化特效














    



    isGameOverActive(){
        var _gameOverNode = this.node.getChildByName('gameOverNode');
        var isActive = (_gameOverNode && _gameOverNode.active);
        return isActive;
    },

















    //亮喜
    // onProtoCanLiangXi: function (data) {
    //     this.openPanel(cc.vv.constant.ROOM_PREFAB.MJ_ACTION, true);
    // },
    //买子下子

    






    
















    //出牌








    


    

});
