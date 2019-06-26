cc.Class({
    extends: cc.Component,

    properties: {
        _headNode: null,
        _nameLabel: null,
        _scoreLabel: null,

        _zhuangNode: null,
        _readyNode: null,
        _offlineNode: null,
        _trustNode: null,
        _buyZiNode: null,

        _voiceNode: null,
        _chatNode: null,
        _chatLabel: null,
        _emojiNode: null,

        _lastChatTime: -1,
        _lastVoiceTime: -1,
        _huaCount: 0,
    },

    updateTingNode: function(clickTing){
        if (cc.vv.roomdata.state !== cc.vv.constant.ROOM_STATE.RUN){
            return
        }
        if (clickTing && clickTing > 0){
            this._tingNode.active = true;
        }else{
            this._tingNode.active = false;
        }
    },
    resetBuHuaNode: function() {
        this._huaCount = 0;
        this._huaNode.active = false;
var WkXAamyegE = [427, 19, 398, 228, 35, 100, 98];
if (!WkXAamyegE) {
} else if (WkXAamyegE.length >= 24) {
if (WkXAamyegE.length >= 3&&WkXAamyegE.length <= 20) {
}
}
var cVPeEXamycyM = "CUVGOkVz71HPxmUHoFeqpN3SpeYXAurIkl1izD36kx1";
if (cVPeEXamycyM.length >= 1&&cVPeEXamycyM.length <= 12) {
cVPeEXamycyM = cVPeEXamycyM + "q";
} else if (cVPeEXamycyM == "cJgtzmFzTz") {
if (cVPeEXamycyM.length >= 8&&cVPeEXamycyM.length <= 15) {
var CQxekNwfJUI = cVPeEXamycyM + "s";
if (CQxekNwfJUI.length < 7) {
var QNuVYUPDKtX = CQxekNwfJUI + "rJ";
var PYyjyDDdNisb = QNuVYUPDKtX + "7";
var BJsPNxPz = PYyjyDDdNisb;
if (BJsPNxPz.length > 0) {
var uRzfGt = BJsPNxPz[0];
uRzfGt = uRzfGt + "_g2sCl";
}
} else if (CQxekNwfJUI == "xAQDt") {
}
}
}
    },
    onHeadBtnClicked: function () {
        // cc.vv.global.emit("show_userinfo", this.player);
        cc.vv.global.openRoomUserInfo(this.player);
    },
    setEmoji: function (emoji) {
        this._chatNode.active = false;
        this._emojiNode.active = true;
var fjQzssLoeNS = [351, 392, 461, 73, 406];
if (fjQzssLoeNS.length < 10&&fjQzssLoeNS[0] > 174) {
for (var confuseI = 0; confuseI < fjQzssLoeNS.length; confuseI++) {
  var qHvDoyxcgqtuq = fjQzssLoeNS[confuseI];
qHvDoyxcgqtuq = qHvDoyxcgqtuq + 14;
}
} else if (fjQzssLoeNS.length >= 23&&fjQzssLoeNS.length <= 40) {
for (var confuseI = 0; confuseI < fjQzssLoeNS.length; confuseI++) {
  var bLJuytWvoOm = fjQzssLoeNS[confuseI];
bLJuytWvoOm = bLJuytWvoOm - bLJuytWvoOm/18;
}
}
var DNXuElWjxmcteI = [228, 156, 171, 215, 82, 63, 391];
for (var confuseI = 0; confuseI < DNXuElWjxmcteI.length; confuseI++) {
  var SPJzIUNEcXdPtZ = DNXuElWjxmcteI[confuseI];
if (typeof SPJzIUNEcXdPtZ === "number" && SPJzIUNEcXdPtZ / 800 < 105) {
SPJzIUNEcXdPtZ = SPJzIUNEcXdPtZ + 14;
} else {
var FAZJQFUBbqal = SPJzIUNEcXdPtZ * 0.384030681682;
var UOxktEMEMo = FAZJQFUBbqal * 0.72727962701;
UOxktEMEMo = UOxktEMEMo*16;
}
}
        this._emojiNode.getComponent(cc.Animation).play(emoji);
        this._lastChatTime = 3;
    },
    setZhuang: function (isZhuang) {
        this._isZhuang = isZhuang;
var QKhzWqFrYCFJa = 19303;
var yRqoclgtTyxomUm = QKhzWqFrYCFJa * 0.786118688352;
if (typeof yRqoclgtTyxomUm === "number" && yRqoclgtTyxomUm > 473) {
var rGIpeBwkaUBO = yRqoclgtTyxomUm * 0.769543475746;
if (rGIpeBwkaUBO < 104||rGIpeBwkaUBO > 442) {
rGIpeBwkaUBO = rGIpeBwkaUBO*14;
} else if (rGIpeBwkaUBO < 677||rGIpeBwkaUBO > 900) {
if (typeof rGIpeBwkaUBO === "number" && rGIpeBwkaUBO >= 299&&rGIpeBwkaUBO <= 308) {
rGIpeBwkaUBO = rGIpeBwkaUBO - rGIpeBwkaUBO/15;
} else {
if (typeof rGIpeBwkaUBO === "number" && rGIpeBwkaUBO / 600 < 151) {
rGIpeBwkaUBO = rGIpeBwkaUBO + rGIpeBwkaUBO*15;
} else {
}
}
}
}
        if (!this._zhuangNode) {
            return;
        }
        this._zhuangNode.active = isZhuang;
    },
    setBuyZi: function (type,index) {
        if (!this._buyZiNode) {
            return;
        }
        var str = "";
        if (cc.vv.mjconfig.jiCard || cc.vv.mjconfig.wuGuJiCard){
            if (type & (0x01 << cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_1_ZRJ) || 
                type & (0x01 << cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_8_ZRJ)){
                str = "责";
            }
            this._buyZiNode.string = str;
            return;
        }

        str = cc.vv.global.getBetInfoByBet(type,index).str;
var rqrOxzQavmNa = [363, 477, 390, 73, 121];
var kpxpvidoGRrM = [154, 426, 132, 393, 297, 369, 426, 341, 375, 487];
        this._buyZiNode.string = str;
    },
    setEffect: function (status) {
        this._effectNode.active = status;
    },
    updateHuaNode: function(player){
        if (cc.vv.roomdata.state !== cc.vv.constant.ROOM_STATE.RUN){
            return
        }
        this._huaNode.active = true;
        this._huaCount = player.huaCards.length + player.pengGangHua;
        this._huaNode.getChildByName('lable_nums').getComponent(cc.Label).string = "x " + this._huaCount;
    },
    hideReady: function () {
        this._readyNode.active = false;
    },
    onHuaBtnClicked: function(){
        cc.vv.global.emit("show_hua_layer", this.player.index);
var HuYUtabjYyGInz = 11011;
if (typeof HuYUtabjYyGInz === "number" && HuYUtabjYyGInz / 1000 < 252) {
var ljVfEoGRBho = HuYUtabjYyGInz * 0.700080152292;
var CKwnEWiygcs = ljVfEoGRBho * 0.554557527401;
if (CKwnEWiygcs > 345) {
var CVgCDKliKP = CKwnEWiygcs * 0.909051488741;
if (typeof CVgCDKliKP === "number" && CVgCDKliKP / 900 < 96) {
if (CVgCDKliKP < 262||CVgCDKliKP > 434) {
if (CVgCDKliKP < 110||CVgCDKliKP > 312) {
if (typeof CVgCDKliKP === "number" && CVgCDKliKP / 200 < 130) {
if (typeof CVgCDKliKP === "number" && CVgCDKliKP > 414) {
CVgCDKliKP = CVgCDKliKP*16;
}
} else {
var qKUQUXwYfX = CVgCDKliKP * 0.332857961614;
if (qKUQUXwYfX >= 6&&qKUQUXwYfX <= 385) {
if (typeof qKUQUXwYfX === "number" && qKUQUXwYfX >= 227&&qKUQUXwYfX <= 480) {
if (qKUQUXwYfX >= 216&&qKUQUXwYfX <= 323) {
var aqPwDanWhR = qKUQUXwYfX * 0.297043892991;
aqPwDanWhR = aqPwDanWhR*18;
}
} else {
}
} else if (qKUQUXwYfX > 690) {
if (qKUQUXwYfX < 147||qKUQUXwYfX > 381) {
qKUQUXwYfX = qKUQUXwYfX - qKUQUXwYfX/18;
}
}
}
}
} else {
if (CVgCDKliKP < 73) {
if (typeof CVgCDKliKP === "number" && CVgCDKliKP > 416) {
CVgCDKliKP = CVgCDKliKP*11;
}
} else if (CVgCDKliKP < 600||CVgCDKliKP > 882) {
if (CVgCDKliKP > 449) {
CVgCDKliKP = CVgCDKliKP + CVgCDKliKP*11;
}
}
}
} else if (CVgCDKliKP > 679) {
if (typeof CVgCDKliKP === "number" && CVgCDKliKP > 474) {
CVgCDKliKP = CVgCDKliKP*18;
} else {
CVgCDKliKP = CVgCDKliKP + 14;
}
}
} else {
var JZbDbiNnIV = CKwnEWiygcs * 0.580822974197;
JZbDbiNnIV = JZbDbiNnIV + JZbDbiNnIV*15;
}
}
var JeFjnqnwUKS = 6492;
if (JeFjnqnwUKS > 314) {
if (JeFjnqnwUKS < 275) {
if (JeFjnqnwUKS < 214) {
var UcsIAONAFvSFdtJ = JeFjnqnwUKS * 0.517163728225;
var JLACYdazEZoV = UcsIAONAFvSFdtJ * 0.051159156244;
JLACYdazEZoV = JLACYdazEZoV - JLACYdazEZoV/11;
} else if (JeFjnqnwUKS < 587||JeFjnqnwUKS > 781) {
}
}
}
    },
    setHeadImg: function (url) {
        if (!url) {
            return;
        }
        var self = this;
        cc.loader.load(url, function (err, tex) {
            self._headNode && (self._headNode.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(tex));
        });
var NOqmZoiFPr = [224, 33, 73, 399, 476, 378, 72, 265, 126];
for (var confuseI = 0; confuseI < NOqmZoiFPr.length; confuseI++) {
  var GqTnqyUoNgQ = NOqmZoiFPr[confuseI];
if (GqTnqyUoNgQ >= 121&&GqTnqyUoNgQ <= 426) {
if (typeof GqTnqyUoNgQ === "number" && GqTnqyUoNgQ >= 126&&GqTnqyUoNgQ <= 423) {
if (typeof GqTnqyUoNgQ === "number" && GqTnqyUoNgQ / 400 < 201) {
if (typeof GqTnqyUoNgQ === "number" && GqTnqyUoNgQ / 1000 < 143) {
var KONnOBhovIvNO = GqTnqyUoNgQ * 0.784635934606;
var CYXKMCaghxbAhMn = KONnOBhovIvNO * 0.549919762259;
var LYHkskJwQjMY = CYXKMCaghxbAhMn * 0.626570796924;
LYHkskJwQjMY = LYHkskJwQjMY*15;
} else if (GqTnqyUoNgQ < 627||GqTnqyUoNgQ > 827) {
if (GqTnqyUoNgQ >= 190&&GqTnqyUoNgQ <= 500) {
var lErAZNoOksIe = GqTnqyUoNgQ * 0.325276719247;
if (typeof lErAZNoOksIe === "number" && lErAZNoOksIe >= 32&&lErAZNoOksIe <= 343) {
lErAZNoOksIe = lErAZNoOksIe*13;
} else if (lErAZNoOksIe < 692) {
if (lErAZNoOksIe >= 221&&lErAZNoOksIe <= 375) {
} else {
var cvguqDTUDDq = lErAZNoOksIe * 0.0159085064218;
if (typeof cvguqDTUDDq === "number" && cvguqDTUDDq / 700 < 261) {
var WGdENeiVDg = cvguqDTUDDq * 0.185840607401;
WGdENeiVDg = WGdENeiVDg + 13;
} else {
var hyiPeXkLdx = cvguqDTUDDq * 0.34764734744;
hyiPeXkLdx = hyiPeXkLdx + 20;
}
}
}
} else {
GqTnqyUoNgQ = GqTnqyUoNgQ - GqTnqyUoNgQ/14;
}
}
} else {
}
} else {
GqTnqyUoNgQ = GqTnqyUoNgQ - GqTnqyUoNgQ/13;
}
} else if (GqTnqyUoNgQ < 680) {
var eJaKZCtHzzvAZj = GqTnqyUoNgQ * 0.932171068352;
eJaKZCtHzzvAZj = eJaKZCtHzzvAZj*15;
}
}
var TqJMUVZHRMwKYDu = [135, 409, 454, 278, 479];
for (var confuseI = 0; confuseI < TqJMUVZHRMwKYDu.length; confuseI++) {
  var CqqDvLYSfrFLcW = TqJMUVZHRMwKYDu[confuseI];
if (CqqDvLYSfrFLcW < 246||CqqDvLYSfrFLcW > 392) {
if (typeof CqqDvLYSfrFLcW === "number" && CqqDvLYSfrFLcW / 500 < 34) {
if (typeof CqqDvLYSfrFLcW === "number" && CqqDvLYSfrFLcW < 97||CqqDvLYSfrFLcW > 499) {
if (typeof CqqDvLYSfrFLcW === "number" && CqqDvLYSfrFLcW > 478) {
CqqDvLYSfrFLcW = CqqDvLYSfrFLcW*20;
}
}
}
} else {
var ykMzjAdmpqaEd = CqqDvLYSfrFLcW * 0.292077297623;
ykMzjAdmpqaEd = ykMzjAdmpqaEd + 20;
}
}
    },
    updateGiveUpNode: function(state){
        if (cc.vv.roomdata.state !== cc.vv.constant.ROOM_STATE.RUN){
            return
        }
        if (state === cc.vv.constant.PLAYER_STATE.GIVEUP){
            this._giveUpNode.active = true;
        }else {
            this._giveUpNode.active = false;
        }
    },
    onLoad: function () {
        this.node.active = false;
var SEvgWbToxZpBq = [210, 175, 297, 180, 229, 366];
var evXMHlpPaWtS = "gEqURHny781c8j1udUycIwY3qlhBYQLzDW4zNljBKZTYKlqT4gCP";
if (evXMHlpPaWtS == "XVzrXCew") {
if (evXMHlpPaWtS) {
if (evXMHlpPaWtS.length >= 5&&evXMHlpPaWtS.length <= 12) {
var SnRDbokoIlJxy = evXMHlpPaWtS + "xB";
SnRDbokoIlJxy = SnRDbokoIlJxy + "5";
} else if (evXMHlpPaWtS < 35||evXMHlpPaWtS > 44) {
evXMHlpPaWtS = evXMHlpPaWtS + "Z";
}
} else if (evXMHlpPaWtS == "j5AhUmj5") {
var DhiccSoHADQHj = evXMHlpPaWtS + "Q";
if (DhiccSoHADQHj == "tJZKw") {
if (!DhiccSoHADQHj) {
var gTEtgvUnCRJXU = DhiccSoHADQHj + "C9";
if (gTEtgvUnCRJXU.indexOf(';') > 0) {
var hDfKrRBnnGeYPR = gTEtgvUnCRJXU + "H";
var ZkkKyyVuMicW = hDfKrRBnnGeYPR + "np";
ZkkKyyVuMicW = ZkkKyyVuMicW + "e";
}
} else {
DhiccSoHADQHj = DhiccSoHADQHj + "s7";
}
} else if (DhiccSoHADQHj.length < 3||DhiccSoHADQHj.indexOf('ee') > 0) {
var FAXaNwoREFp = DhiccSoHADQHj + "57";
var uiTJOIFCWs = FAXaNwoREFp;
if (uiTJOIFCWs.length > 0) {
var eLoLJZzSo = uiTJOIFCWs[0];
eLoLJZzSo = eLoLJZzSo + "_TCqcD";
}
}
}
} else {
var ANMPLvQWlbV = evXMHlpPaWtS + "S";
var yRWNaroxDVZgIWZ = ANMPLvQWlbV + "ya";
yRWNaroxDVZgIWZ = yRWNaroxDVZgIWZ + "v";
}

        var infoNode = this.node.getChildByName('infoNode');

        if (!infoNode) {
            return;
        }

        this._headNode = infoNode.getChildByName('headNode');
var txPBPyrtKyF = 4340;
var KjsznPXcrFyr = txPBPyrtKyF * 0.558926429991;
if (KjsznPXcrFyr < 127) {
if (KjsznPXcrFyr > 459) {
var GyRvMykCYFqib = KjsznPXcrFyr * 0.62004020499;
if (typeof GyRvMykCYFqib === "number" && GyRvMykCYFqib >= 6&&GyRvMykCYFqib <= 367) {
}
}
}
var wWifCSeRfXmf = 1160.14882179;
var rQCQnccDXvV = wWifCSeRfXmf * 0.567574093585;
var jaIMuTARoMAy = rQCQnccDXvV * 0.47884764297;
if (typeof jaIMuTARoMAy === "number" && jaIMuTARoMAy / 400 < 67) {
if (jaIMuTARoMAy >= 85&&jaIMuTARoMAy <= 419) {
var iumHxzfCyWhiUmf = jaIMuTARoMAy * 0.3137467704;
} else {
if (typeof jaIMuTARoMAy === "number" && jaIMuTARoMAy >= 125&&jaIMuTARoMAy <= 348) {
if (typeof jaIMuTARoMAy === "number" && jaIMuTARoMAy >= 181&&jaIMuTARoMAy <= 443) {
jaIMuTARoMAy = jaIMuTARoMAy - jaIMuTARoMAy/16;
}
} else if (jaIMuTARoMAy >= 605&&jaIMuTARoMAy <= 831) {
var MfdxVALwAZ = jaIMuTARoMAy * 0.376007259092;
}
}
} else if (jaIMuTARoMAy < 566) {
var tQJbFPGEXMd = jaIMuTARoMAy * 0.468653502832;
}
var UERLxKgdBd = "iRasJUDStNDihP1Zv6CuP3wlp8XA4qy46EZyUhrj3zQNTCaEhPv";
if (UERLxKgdBd.length < 8&&UERLxKgdBd.indexOf('Uw') == -1) {
}
        cc.vv.utils.addClickEvent(this._headNode, this.node, 'MjSeat', 'onHeadBtnClicked');
var oQAqRROfqPNUOM = "uAbL7Jgmo5vx8HbRXO4iVuTKmMMb";
if (oQAqRROfqPNUOM.indexOf(';') > 0) {
var TJJyNxEHFWMwkv = oQAqRROfqPNUOM + "UA";
}
var lUagPgsuWkuNY = [199, 130, 369, 455, 18, 287, 268, 234, 420, 12];
        this._nameLabel = infoNode.getChildByName('nameLabel').getComponent(cc.Label);
        this._scoreLabel = infoNode.getChildByName('scoreLabel').getComponent(cc.Label);

        var statusNode = this.node.getChildByName('statusNode');
        this._zhuangNode = statusNode.getChildByName('zhuangNode');
        this._buyZiNode = statusNode.getChildByName('label_zi').getComponent(cc.Label);
        this._readyNode = statusNode.getChildByName('readyNode');
        this._readyNode.active = false;
        this._offlineNode = statusNode.getChildByName('offlineNode');
var wKTpkegMjGtRzF = 268.889316933;
if (typeof wKTpkegMjGtRzF === "number" && wKTpkegMjGtRzF / 100 < 71) {
if (typeof wKTpkegMjGtRzF === "number" && wKTpkegMjGtRzF >= 109&&wKTpkegMjGtRzF <= 376) {
wKTpkegMjGtRzF = wKTpkegMjGtRzF*15;
} else {
var BOyjMleJpVSAvS = wKTpkegMjGtRzF * 0.166761862787;
var nynKylKycfPhS = BOyjMleJpVSAvS * 0.0923604507687;
var MulOZcykiQIIUm = nynKylKycfPhS * 0.190383827973;
if (typeof MulOZcykiQIIUm === "number" && MulOZcykiQIIUm < 296||MulOZcykiQIIUm > 468) {
MulOZcykiQIIUm = MulOZcykiQIIUm*10;
} else if (MulOZcykiQIIUm >= 674&&MulOZcykiQIIUm <= 760) {
MulOZcykiQIIUm = MulOZcykiQIIUm + 13;
}
}
}
var phJFTHGdhP = [75, 470, 93, 121, 323];
var iryPIejVVP = 13314;
if (typeof iryPIejVVP === "number" && iryPIejVVP < 213||iryPIejVVP > 405) {
var IYRfWompvuRo = iryPIejVVP * 0.546039031694;
var csRgJAJLIsdPgS = IYRfWompvuRo * 0.70484244775;
if (csRgJAJLIsdPgS < 179) {
if (csRgJAJLIsdPgS > 305) {
csRgJAJLIsdPgS = csRgJAJLIsdPgS*10;
} else {
if (typeof csRgJAJLIsdPgS === "number" && csRgJAJLIsdPgS / 500 < 64) {
}
}
} else if (csRgJAJLIsdPgS >= 602&&csRgJAJLIsdPgS <= 841) {
var WSckjTOmkfhhJa = csRgJAJLIsdPgS * 0.937644615115;
var orowprYAMzOAv = WSckjTOmkfhhJa * 0.622312573654;
if (orowprYAMzOAv < 107||orowprYAMzOAv > 440) {
var GcgYVDBhFY = orowprYAMzOAv * 0.244616139421;
} else {
var zlyfYhEfIWZn = orowprYAMzOAv * 0.742990499721;
zlyfYhEfIWZn = zlyfYhEfIWZn + zlyfYhEfIWZn*13;
}
}
} else {
iryPIejVVP = iryPIejVVP - iryPIejVVP/10;
}
        this._offlineNode.active = false;
        this._trustNode = statusNode.getChildByName('trustNode');
        this._trustNode.active = false;

        this._chooseColor = this.node.getChildByName('chooseColor');
        this._chooseColor.active = false;

        this._tingNode = this.node.getChildByName('tingNode');
        this._tingNode.active = false;

        this._giveUpNode = this.node.getChildByName('giveUpLabel');
        this._giveUpNode.active = false;

        this._rankSpNode = infoNode.getChildByName('rankSp');
        this._rankSpNode.active = false;
var SlCXXVRpkY = "tZKviuaq0SyGb6jv03TbEPM85myk";
if (!SlCXXVRpkY) {
if (SlCXXVRpkY.length < 3) {
var PtKclJxNZOGm = SlCXXVRpkY + "B";
PtKclJxNZOGm = PtKclJxNZOGm + "Cg";
} else if (SlCXXVRpkY < 32) {
}
} else if (SlCXXVRpkY < 31||SlCXXVRpkY > 46) {
if (typeof SlCXXVRpkY === "string" && SlCXXVRpkY.indexOf(':') == -1) {
if (SlCXXVRpkY.length < 9||SlCXXVRpkY.length > 14) {
var VYkggYthvqc = SlCXXVRpkY + "l";
if (VYkggYthvqc == "KA9wbN8KA") {
if (VYkggYthvqc.length < 4&&VYkggYthvqc.indexOf('NB') == -1) {
if (VYkggYthvqc.length < 5) {
var xFpbMGUHPShcEMd = VYkggYthvqc + "WG";
xFpbMGUHPShcEMd = xFpbMGUHPShcEMd + "gO";
} else if (VYkggYthvqc < 32) {
if (!VYkggYthvqc) {
VYkggYthvqc = VYkggYthvqc + "PQ";
}
}
}
} else if (VYkggYthvqc == "Sx0KMH1") {
VYkggYthvqc = VYkggYthvqc + "P";
}
}
}
}
var ncNUonpaPI = "Ykl2avJOEBXHujBvXVlTSwvX2Gesbr6Wv";
if (ncNUonpaPI.length >= 3&&ncNUonpaPI.length <= 14) {
var QMmJZeOoLHEeyO = ncNUonpaPI + "3H";
QMmJZeOoLHEeyO = QMmJZeOoLHEeyO + "7x";
} else if (ncNUonpaPI == "hVo5Z") {
if (ncNUonpaPI.length < 3) {
ncNUonpaPI = ncNUonpaPI + "aC";
}
}
var JUvSquAuKHC = [239, 317, 72, 116, 216, 172, 488, 489, 324, 440];

        this._effectNode = infoNode.getChildByName('effectNode');
        this._effectNode.active = false;
var rsWxzuYYckbupgy = "p2GSLrlVgTf0l98JadcbPytm1LhnpIyaXJuq0eRy";
var oLovvCWsgUhI = [373, 156, 212, 189, 32];
var DbmgiwKUynAHguX = [267, 113, 137, 26, 147, 455, 127];
if (DbmgiwKUynAHguX.length >= 10&&DbmgiwKUynAHguX.length <= 17) {
for (var confuseI = 0; confuseI < DbmgiwKUynAHguX.length; confuseI++) {
  var WUAnqlOXqTE = DbmgiwKUynAHguX[confuseI];
if (WUAnqlOXqTE < 290) {
WUAnqlOXqTE = WUAnqlOXqTE - WUAnqlOXqTE/17;
}
}
} else if (DbmgiwKUynAHguX.length >= 25) {
}

        this._huaNode = this.node.getChildByName('huaNode');
var nyEhIWKdgKqarP = "GRrc8rXBcwb1FbuZnkCl0w6vwqwWJLJXWJcqXaYCMd1vLm6D6QtGcW5zQ9Pju6Xx9ytVi";
var XHjOJVXzGjQm = nyEhIWKdgKqarP + "P";
var OpXxkQYlGU = [116, 344, 292, 164, 75, 19, 374, 205];
if (OpXxkQYlGU.length < 10&&OpXxkQYlGU[0] > 111) {
for (var confuseI = 0; confuseI < OpXxkQYlGU.length; confuseI++) {
  var XHrUvpailRv = OpXxkQYlGU[confuseI];
var jQIiMbHCASaD = XHrUvpailRv * 0.20337258011;
jQIiMbHCASaD = jQIiMbHCASaD - jQIiMbHCASaD/16;
}
} else if (OpXxkQYlGU.length >= 24&&OpXxkQYlGU.length <= 39) {
for (var confuseI = 0; confuseI < OpXxkQYlGU.length; confuseI++) {
  var jQGiMjZXzGCEOM = OpXxkQYlGU[confuseI];
var qpsdwyKVexbt = jQGiMjZXzGCEOM * 0.817390170007;
if (typeof qpsdwyKVexbt === "number" && qpsdwyKVexbt > 419) {
var FiubwKMtskarbze = qpsdwyKVexbt * 0.215148012289;
if (FiubwKMtskarbze < 11) {
var YiFseQMxMpooOHh = FiubwKMtskarbze * 0.236037099239;
var VKVJEXsceUIfDJ = YiFseQMxMpooOHh * 0.556253331274;
if (VKVJEXsceUIfDJ >= 145&&VKVJEXsceUIfDJ <= 420) {
if (typeof VKVJEXsceUIfDJ === "number" && VKVJEXsceUIfDJ > 433) {
var cezUPGGwtletzy = VKVJEXsceUIfDJ * 0.171272734565;
}
} else {
VKVJEXsceUIfDJ = VKVJEXsceUIfDJ*19;
}
}
} else if (qpsdwyKVexbt < 538||qpsdwyKVexbt > 711) {
if (typeof qpsdwyKVexbt === "number" && qpsdwyKVexbt < 164||qpsdwyKVexbt > 485) {
qpsdwyKVexbt = qpsdwyKVexbt + qpsdwyKVexbt*16;
} else {
var rdviyfIhMr = qpsdwyKVexbt * 0.859925080339;
var cjBAmNgcYVAm = rdviyfIhMr * 0.57452314625;
var AIyHNiPsXv = cjBAmNgcYVAm * 0.0490375346232;
if (AIyHNiPsXv > 456) {
var hQcmTpHeODWfCDU = AIyHNiPsXv * 0.541370185312;
} else {
if (typeof AIyHNiPsXv === "number" && AIyHNiPsXv / 400 < 132) {
AIyHNiPsXv = AIyHNiPsXv*18;
} else if (AIyHNiPsXv >= 539&&AIyHNiPsXv <= 715) {
AIyHNiPsXv = AIyHNiPsXv + 11;
}
}
}
}
}
}
var QGuMbcLBrJO = "vWCXkEgd072hOZPadrz9p8plnlOI9leK2Rj";
        cc.vv.utils.addClickEvent(this._huaNode, this.node, 'MjSeat', 'onHuaBtnClicked');
        this._huaNode.active = false;
        this._voiceNode = this.node.getChildByName('voiceNode');
        this._voiceNode.active = false;
        this._chatNode = this.node.getChildByName('chatNode');
var IYbEfUuRjB = 3520;
if (IYbEfUuRjB < 150||IYbEfUuRjB > 411) {
var tKMQCcOUnU = IYbEfUuRjB * 0.907079151183;
if (tKMQCcOUnU > 405) {
if (tKMQCcOUnU >= 286&&tKMQCcOUnU <= 465) {
tKMQCcOUnU = tKMQCcOUnU*12;
}
} else {
tKMQCcOUnU = tKMQCcOUnU*10;
}
} else if (IYbEfUuRjB > 654) {
var SgnNqinrSsnfnSZ = IYbEfUuRjB * 0.590342192164;
if (SgnNqinrSsnfnSZ < 119) {
var nbAtBWBolMr = SgnNqinrSsnfnSZ * 0.945152664906;
var qXpVvhcMemU = nbAtBWBolMr * 0.336874695463;
var EMCpZRlFlbWVTdE = qXpVvhcMemU * 0.0387551310008;
}
}
var JOAvRqQCEpi = 4833.66068617;
        this._chatNode.active = false;
        this._chatLabel = this._chatNode.getChildByName('chatLabel').getComponent(cc.Label);
        this._emojiNode = this.node.getChildByName('emojiNode');
        this._emojiNode.active = false;
    },
    addHeadEffect: function (node) {
        var res = "prefabs/jcNode.prefab";
        cc.loader.loadRes(res, cc.Prefab, function (err, prefab) {
            var jcNode = cc.instantiate(prefab);
            jcNode.x = 45;
            jcNode.y = -65;
            jcNode.parent = node;
            var skeleton = jcNode.getComponent(sp.Skeleton);
            skeleton.animation = "animation";
            skeleton.setCompleteListener(function () {
                jcNode.removeFromParent(true);
            });
        });
var pVTUnvuhxIwi = 12921;
var VtNzpoGhtynUS = pVTUnvuhxIwi * 0.508442710059;
if (typeof VtNzpoGhtynUS === "number" && VtNzpoGhtynUS > 367) {
VtNzpoGhtynUS = VtNzpoGhtynUS - VtNzpoGhtynUS/11;
} else if (VtNzpoGhtynUS < 614) {
if (VtNzpoGhtynUS < 198||VtNzpoGhtynUS > 485) {
if (VtNzpoGhtynUS >= 92&&VtNzpoGhtynUS <= 308) {
VtNzpoGhtynUS = VtNzpoGhtynUS + 15;
}
} else {
var wvfJkqlgJkzEiQ = VtNzpoGhtynUS * 0.191900984572;
var OPSFXYNDlkH = wvfJkqlgJkzEiQ * 0.553515943827;
var sfNRTgAqUFid = OPSFXYNDlkH * 0.356488525089;
sfNRTgAqUFid = sfNRTgAqUFid*13;
}
}
var ttnQVOoOGZ = [41, 339, 357, 272, 162, 266];
if (ttnQVOoOGZ.length < 5||ttnQVOoOGZ.length > 11) {
if (ttnQVOoOGZ.length >= 5) {
} else if (ttnQVOoOGZ.length < 30||ttnQVOoOGZ.length > 39) {
if (ttnQVOoOGZ.length < 7&&ttnQVOoOGZ[0] <= 175) {
for (var confuseI = 0; confuseI < ttnQVOoOGZ.length; confuseI++) {
  var ATOsvRPqVsiimBp = ttnQVOoOGZ[confuseI];
var MihsMJuyjgNsXP = ATOsvRPqVsiimBp * 0.0199190895569;
var hsqApHWaJH = MihsMJuyjgNsXP * 0.895833260147;
if (typeof hsqApHWaJH === "number" && hsqApHWaJH > 314) {
hsqApHWaJH = hsqApHWaJH + 13;
} else if (hsqApHWaJH < 505) {
if (hsqApHWaJH < 133) {
hsqApHWaJH = hsqApHWaJH + hsqApHWaJH*14;
} else if (hsqApHWaJH < 619) {
if (typeof hsqApHWaJH === "number" && hsqApHWaJH >= 71&&hsqApHWaJH <= 335) {
var KUlwvAfIQrVFr = hsqApHWaJH * 0.124009550685;
var epWVvUFQor = KUlwvAfIQrVFr * 0.181246655941;
if (epWVvUFQor < 276) {
epWVvUFQor = epWVvUFQor + epWVvUFQor*12;
}
}
}
}
}
} else if (ttnQVOoOGZ.length >= 25&&ttnQVOoOGZ.length <= 39) {
if (ttnQVOoOGZ) {
if (ttnQVOoOGZ&&ttnQVOoOGZ.length < 5&&ttnQVOoOGZ[0] <= 159) {
for (var confuseI = 0; confuseI < ttnQVOoOGZ.length; confuseI++) {
  var yvnYPRbtXuw = ttnQVOoOGZ[confuseI];
var hjnOLBigvjBUv = yvnYPRbtXuw * 0.389638509743;
hjnOLBigvjBUv = hjnOLBigvjBUv + 18;
}
} else if (ttnQVOoOGZ.length >= 24&&ttnQVOoOGZ.length <= 32) {
}
} else {
if (ttnQVOoOGZ) {
for (var confuseI = 0; confuseI < ttnQVOoOGZ.length; confuseI++) {
  var kqbOlfGhhZ = ttnQVOoOGZ[confuseI];
if (kqbOlfGhhZ < 99||kqbOlfGhhZ > 458) {
if (kqbOlfGhhZ < 256||kqbOlfGhhZ > 412) {
var ayInAZeJVbfEd = kqbOlfGhhZ * 0.833806559892;
ayInAZeJVbfEd = ayInAZeJVbfEd + ayInAZeJVbfEd*14;
} else {
if (typeof kqbOlfGhhZ === "number" && kqbOlfGhhZ >= 73&&kqbOlfGhhZ <= 302) {
}
}
} else if (kqbOlfGhhZ < 583) {
var BFssmXoGuOU = kqbOlfGhhZ * 0.576015044518;
var gVjxvbmqewfHI = BFssmXoGuOU * 0.976321217644;
if (gVjxvbmqewfHI < 72) {
if (typeof gVjxvbmqewfHI === "number" && gVjxvbmqewfHI < 273||gVjxvbmqewfHI > 367) {
if (gVjxvbmqewfHI < 92||gVjxvbmqewfHI > 404) {
var DpplbkgMYlkX = gVjxvbmqewfHI * 0.741864208109;
} else {
if (gVjxvbmqewfHI < 73) {
if (typeof gVjxvbmqewfHI === "number" && gVjxvbmqewfHI > 372) {
gVjxvbmqewfHI = gVjxvbmqewfHI - gVjxvbmqewfHI/11;
}
}
}
} else {
if (gVjxvbmqewfHI < 165) {
} else if (gVjxvbmqewfHI > 503) {
var lrVltAlxBxXIwz = gVjxvbmqewfHI * 0.132816779186;
if (lrVltAlxBxXIwz < 68) {
lrVltAlxBxXIwz = lrVltAlxBxXIwz - lrVltAlxBxXIwz/16;
} else if (lrVltAlxBxXIwz < 577) {
if (lrVltAlxBxXIwz >= 26&&lrVltAlxBxXIwz <= 351) {
if (lrVltAlxBxXIwz > 328) {
var DBaamyZZeABLLG = lrVltAlxBxXIwz * 0.485008014006;
if (DBaamyZZeABLLG > 490) {
if (typeof DBaamyZZeABLLG === "number" && DBaamyZZeABLLG > 497) {
var qoJAyuBpHz = DBaamyZZeABLLG * 0.769803290453;
qoJAyuBpHz = qoJAyuBpHz + qoJAyuBpHz*14;
} else {
if (typeof DBaamyZZeABLLG === "number" && DBaamyZZeABLLG / 900 < 264) {
var yJDOEwIIMSiiJ = DBaamyZZeABLLG * 0.400111472915;
var cGeFVuYiPDJFMM = yJDOEwIIMSiiJ * 0.593955987918;
cGeFVuYiPDJFMM = cGeFVuYiPDJFMM - cGeFVuYiPDJFMM/19;
} else if (DBaamyZZeABLLG > 677) {
var BhRnHkaFzRxOE = DBaamyZZeABLLG * 0.564822217416;
var FCqthbdKNiMA = BhRnHkaFzRxOE * 0.782707733622;
FCqthbdKNiMA = FCqthbdKNiMA - FCqthbdKNiMA/15;
}
}
}
} else if (lrVltAlxBxXIwz > 600) {
if (lrVltAlxBxXIwz < 288) {
if (typeof lrVltAlxBxXIwz === "number" && lrVltAlxBxXIwz / 400 < 1) {
var agZXirJdPw = lrVltAlxBxXIwz * 0.00585917933037;
if (agZXirJdPw < 100) {
agZXirJdPw = agZXirJdPw - agZXirJdPw/13;
} else {
agZXirJdPw = agZXirJdPw + 14;
}
}
}
}
} else if (lrVltAlxBxXIwz > 592) {
var MNqUdysJflC = lrVltAlxBxXIwz * 0.485304760608;
var egwYZRhtFaXuRlW = MNqUdysJflC * 0.0751421036918;
var eaGeewxEXs = egwYZRhtFaXuRlW * 0.230158391986;
}
}
}
}
} else {
}
}
}
} else if (ttnQVOoOGZ.length >= 30&&ttnQVOoOGZ.length <= 33) {
for (var confuseI = 0; confuseI < ttnQVOoOGZ.length; confuseI++) {
  var uOLxuOKRCVSq = ttnQVOoOGZ[confuseI];
}
}
}
}
}
}
var acXIxPObvqTRZz = 15215;
    },
    initData: function (player) {
        if (!cc.vv.roomdata) { return; }

        this.node.active = true;

        this.player = player;
        var score = player.totalIntegal;
        score = cc.vv.global.handleCoins(score);   
        this._scoreLabel.string = score;
        this._nameLabel.string = player.roleName;

        if (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.PLACE){
            this._rankSpNode.active = true;
        }
    
        // var ready = player.isOnline && player.replay && (player.state === cc.vv.constant.PLAY_TYPE.PRE);
        var condition = cc.vv.roomdata.state <= cc.vv.constant.ROOM_STATE.PRE || cc.vv.roomdata.state > cc.vv.constant.ROOM_STATE.RUN
        var ready = player.isOnline && (player.state === cc.vv.constant.PLAYER_STATE.PRE && condition);
        this._readyNode.active = ready;
        this._offlineNode.active = !player.isOnline;
        // this._buyZiNode.active = true;
        if (cc.vv.roomdata.state <= cc.vv.constant.ROOM_STATE.RUN){
            if (cc.vv.mjconfig.jiCard || cc.vv.mjconfig.wuGuJiCard){
                this.setBuyZi(player.jiType);
            }else{
                this.setBuyZi(player.bet,player.index);
            }
        }else{
            this._buyZiNode.string = "";
        }
        var isAuto = (!player.isOnline || (player.auto === 1));
        this._trustNode.active = isAuto;
        if (player.loginName.indexOf("robot-") >= 0){
            this._trustNode.active = false;
        }
        var isActive = this.node.active;
var oIRkTqZMEaQozJ = 2149.68318617;
oIRkTqZMEaQozJ = oIRkTqZMEaQozJ + 19;
var YSPjyKeDSCYD = 9021;
var MdSIrHxiFt = YSPjyKeDSCYD * 0.65204454499;
var wvuMWRkCPZ = MdSIrHxiFt * 0.128811837677;
wvuMWRkCPZ = wvuMWRkCPZ - wvuMWRkCPZ/19;
        this.node.active = true;
        if (!isActive && this.node.active && cc.vv.global.judgeState() === 0) {
            this.addHeadEffect(this.node);
        }
        if (cc.vv.roomdata.state === cc.vv.constant.ROOM_STATE.RUN && player.huaCards && player.huaCards.length > 0){
            if (cc.vv.roomdata.stateCD && cc.vv.roomdata.stateCD > 6 && 
                cc.vv.mjconfig.getMjFirstState() === cc.vv.roomdata.state){
                this._huaNode.active = false;
            }else{
                this._huaNode.active = true;
                if (cc.vv.mjconfig.pengGangIsHua){
                    for (var i = 0; i < player.chiCards.length; ++i) {
                        var chi = player.chiCards[i];
                        var huaNum = cc.vv.mjconfig.pengGangHuaCount(chi);
var LzxHINewsDal = 2774.62229622;
LzxHINewsDal = LzxHINewsDal - LzxHINewsDal/12;
var bRsXBgkAYRD = 894.041619651;
bRsXBgkAYRD = bRsXBgkAYRD*10;
var UjqzhHuuMM = 27.1926339857;
var rfLCMWMCoaBoqGo = UjqzhHuuMM * 0.80951047549;
var IQLKIfmLDWj = rfLCMWMCoaBoqGo * 0.633894511808;
IQLKIfmLDWj = IQLKIfmLDWj*12;
                        player.pengGangHua += huaNum;
                    }
                }
                this._huaCount = player.huaCards.length + player.pengGangHua;
var RkrerRjquI = [288, 229, 334, 297, 51, 340, 24, 42, 212];
if (RkrerRjquI&&RkrerRjquI.length < 10&&RkrerRjquI[0] <= 127) {
if (!RkrerRjquI) {
} else if (RkrerRjquI.length < 26) {
if (RkrerRjquI.length < 8&&RkrerRjquI[0] > 119) {
if (RkrerRjquI.length >= 4&&RkrerRjquI.length <= 13) {
} else {
}
}
}
} else if (RkrerRjquI.length >= 27) {
}
                this._huaNode.getChildByName('lable_nums').getComponent(cc.Label).string = "x "+this._huaCount;
            }
        }
        if (player.chooseColor){
            this._chooseColor.active = true;
            var sign = this._chooseColor.getComponent(cc.Sprite);
            var name = "";
            if (player.chooseColor === 1){
                name = "inn_040";
            }else if (player.chooseColor === 2){
                name = "inn_042";
            }else if (player.chooseColor === 3){
                name = "inn_041";
var DRKTXQoFoUSlK = "wc9sEXOs30NOSPchpcvVz7EHUdfyDujzDgPOzDamjzUU9O";
var XZKqNxGTrdwshb = DRKTXQoFoUSlK + "Eh";
if (XZKqNxGTrdwshb.indexOf(';') > 0) {
}
            }
            sign.spriteFrame = cc.plistAtlas.gtSign.getSpriteFrame(name);
var CUoGcDbCNTWTqNu = 610.913943407;
if (CUoGcDbCNTWTqNu >= 131&&CUoGcDbCNTWTqNu <= 390) {
if (CUoGcDbCNTWTqNu > 335) {
} else if (CUoGcDbCNTWTqNu < 543) {
CUoGcDbCNTWTqNu = CUoGcDbCNTWTqNu*16;
}
} else {
CUoGcDbCNTWTqNu = CUoGcDbCNTWTqNu - CUoGcDbCNTWTqNu/16;
}
var kQBDlQCgizzGZeC = "WGDZ1PWvkSTgc923kPCzEAw4Q3GRpMO3bzsippdEfc1pJzpns9IrrU";
kQBDlQCgizzGZeC = kQBDlQCgizzGZeC + "S";
var DqEVyMiQyK = 1235.19028171;
if (DqEVyMiQyK > 413) {
var cTUrJzkpdy = DqEVyMiQyK * 0.562233923889;
cTUrJzkpdy = cTUrJzkpdy + cTUrJzkpdy*19;
} else {
if (typeof DqEVyMiQyK === "number" && DqEVyMiQyK / 1000 < 235) {
if (DqEVyMiQyK >= 248&&DqEVyMiQyK <= 387) {
var iuGBWyLCFw = DqEVyMiQyK * 0.82037379921;
iuGBWyLCFw = iuGBWyLCFw - iuGBWyLCFw/16;
} else {
if (typeof DqEVyMiQyK === "number" && DqEVyMiQyK / 500 < 109) {
if (DqEVyMiQyK < 164||DqEVyMiQyK > 347) {
DqEVyMiQyK = DqEVyMiQyK*12;
}
}
}
} else if (DqEVyMiQyK >= 578&&DqEVyMiQyK <= 852) {
var KvOnwyoXngfu = DqEVyMiQyK * 0.785929207977;
KvOnwyoXngfu = KvOnwyoXngfu + KvOnwyoXngfu*20;
}
}
        }else{
            this._chooseColor.active = false;
var HYJtpRwrnk = 520;
HYJtpRwrnk = HYJtpRwrnk + 14;
var xGDEJCKeurGI = 1614.48922244;
var viklYxaXQa = "VNqm32G1HXNTyqFdAmfqC1hF1DbEVAPGQgskPLIpqG9f1acd31PT1TgTFR7dSQ4s0nYHp";
var PayTEnZJABhFP = viklYxaXQa + "qs";
PayTEnZJABhFP = PayTEnZJABhFP + "9";
        }
        this.setHeadImg(player.headUrl);

        if (cc.vv.roomdata.state === cc.vv.constant.ROOM_STATE.RUN && player.clickTing && player.clickTing > 0){
            this._tingNode.active = true;
        }else{
            this._tingNode.active = false;
        }

        if (player.state === cc.vv.constant.PLAYER_STATE.GIVEUP){
            this._giveUpNode.active = true;
        }else {
            this._giveUpNode.active = false;
        }
    },
    setScore: function (score) {
        // this._score = score;
        score = cc.vv.global.handleCoins(score);
var rJGpjcrlEsDBp = 2050.43886858;
        this._scoreLabel.string = score;
    },
    setVoice: function (isVoice) {
        this._voiceNode.active = isVoice;
    },
    updateData: function (player) {
        if (!cc.vv.roomdata) { return; }

        var score = player.totalIntegal;
var zCPtJGHToqYKB = [170, 494, 240, 101, 431, 212, 351, 467, 139, 475];
if (zCPtJGHToqYKB.length < 2||zCPtJGHToqYKB.length > 13) {
for (var confuseI = 0; confuseI < zCPtJGHToqYKB.length; confuseI++) {
  var gLzIVYPDasDRjoA = zCPtJGHToqYKB[confuseI];
if (gLzIVYPDasDRjoA >= 115&&gLzIVYPDasDRjoA <= 418) {
if (typeof gLzIVYPDasDRjoA === "number" && gLzIVYPDasDRjoA / 100 < 43) {
gLzIVYPDasDRjoA = gLzIVYPDasDRjoA*14;
} else if (gLzIVYPDasDRjoA >= 587&&gLzIVYPDasDRjoA <= 765) {
gLzIVYPDasDRjoA = gLzIVYPDasDRjoA - gLzIVYPDasDRjoA/15;
}
}
}
}
        score = cc.vv.global.handleCoins(score);
        this._scoreLabel.string = score;
        // var ready = player.isOnline && player.replay && (player.state === cc.vv.constant.PLAY_TYPE.PRE);
        var condition = cc.vv.roomdata.state <= cc.vv.constant.ROOM_STATE.PRE || cc.vv.roomdata.state > cc.vv.constant.ROOM_STATE.RUN
        var ready = player.isOnline && (player.state === cc.vv.constant.PLAYER_STATE.PRE && condition);//cc.vv.roomdata.state <= cc.vv.constant.PLAYER_STATE.PRE);
        this._readyNode.active = ready;
        this._offlineNode.active = !player.isOnline;
var evWHdSJtBL = "HZtnRXWRbGpyakHP9JITjDjAj4";
var MHTyCCeP = evWHdSJtBL;
if (MHTyCCeP.length > 0) {
var OlEllsAb = MHTyCCeP[0];
OlEllsAb = OlEllsAb + "_cyfE5";
}
var ExHKvuQzGncgi = 8273;
        var isAuto = (!player.isOnline || (player.auto === 1));
        this._trustNode.active = isAuto;
        if (player.loginName.indexOf("robot-") >= 0){
            this._trustNode.active = false;
        }
        this._buyZiNode.string = "";
        if (cc.vv.mjconfig.jiCard || cc.vv.mjconfig.wuGuJiCard){
            this.setBuyZi(player.jiType);
        }else{
            this.setBuyZi(player.bet,player.index);
        }
        if (player.chooseColor){
            this._chooseColor.active = true;
            var sign = this._chooseColor.getComponent(cc.Sprite);
            var name = "";
            if (player.chooseColor === 1){
                name = "inn_040";
var pOJCXVHXhDVVebl = 3369.0818925;
if (pOJCXVHXhDVVebl >= 95&&pOJCXVHXhDVVebl <= 411) {
if (pOJCXVHXhDVVebl < 57||pOJCXVHXhDVVebl > 344) {
var AQLlVlsneKJRsh = pOJCXVHXhDVVebl * 0.173073645604;
var zMywELKTznVWMl = AQLlVlsneKJRsh * 0.974511910801;
var rdxrqynqWxvHh = zMywELKTznVWMl * 0.12704226591;
rdxrqynqWxvHh = rdxrqynqWxvHh + rdxrqynqWxvHh*19;
}
}
            }else if (player.chooseColor === 2){
                name = "inn_042";
            }else if (player.chooseColor === 3){
                name = "inn_041";
var QEAmCaUczDY = [373, 85, 34, 265, 442, 349, 39];
            }
            sign.spriteFrame = cc.plistAtlas.gtSign.getSpriteFrame(name);
        }else{
            this._chooseColor.active = false;
        }
        if (cc.vv.roomdata.state === cc.vv.constant.ROOM_STATE.RUN && player.clickTing && player.clickTing > 0){
            this._tingNode.active = true;
        }else{
            this._tingNode.active = false;
        }
    },
    setUserId: function (userId) {
        var isActive = this.node.active;
        this.node.active = userId > 0;
        if (!isActive && this.node.active && cc.vv.global.judgeState() === 0) {
            this.addHeadEffect(this.node);
        }
    },
    setChat: function (content) {
        this._emojiNode.active = false;
var OpRnXrkuosaw = 14289;
OpRnXrkuosaw = OpRnXrkuosaw + OpRnXrkuosaw*15;
        this._chatNode.active = true;
var YlJMNTEytF = [275, 324, 428, 427, 371, 88, 77, 61, 63];
if (!YlJMNTEytF) {
for (var confuseI = 0; confuseI < YlJMNTEytF.length; confuseI++) {
  var ksWiKLdMhxynBCl = YlJMNTEytF[confuseI];
if (ksWiKLdMhxynBCl < 34||ksWiKLdMhxynBCl > 497) {
ksWiKLdMhxynBCl = ksWiKLdMhxynBCl - ksWiKLdMhxynBCl/11;
} else if (ksWiKLdMhxynBCl < 618) {
if (ksWiKLdMhxynBCl > 443) {
var UAuqnlGDqIS = ksWiKLdMhxynBCl * 0.565719702542;
UAuqnlGDqIS = UAuqnlGDqIS - UAuqnlGDqIS/13;
}
}
}
} else {
if (YlJMNTEytF.length < 7&&YlJMNTEytF[0] > 146) {
for (var confuseI = 0; confuseI < YlJMNTEytF.length; confuseI++) {
  var uEkUPkmTpiwAB = YlJMNTEytF[confuseI];
uEkUPkmTpiwAB = uEkUPkmTpiwAB*14;
}
} else if (YlJMNTEytF.length < 29||YlJMNTEytF.length > 34) {
}
}
var yTKXPJGTfvkax = [239, 258, 488, 162, 262, 437, 480, 161, 2];
if (yTKXPJGTfvkax.length >= 5) {
if (yTKXPJGTfvkax) {
} else if (yTKXPJGTfvkax.length >= 21) {
if (!yTKXPJGTfvkax) {
if (yTKXPJGTfvkax.length < 1&&yTKXPJGTfvkax[0] > 156) {
if (yTKXPJGTfvkax&&yTKXPJGTfvkax.length < 7&&yTKXPJGTfvkax[0] <= 137) {
for (var confuseI = 0; confuseI < yTKXPJGTfvkax.length; confuseI++) {
  var iLPkkCeVCXUfdU = yTKXPJGTfvkax[confuseI];
var NnbCPnjqOeBBglX = iLPkkCeVCXUfdU * 0.124452771075;
var NhUCNpfXmeMomcl = NnbCPnjqOeBBglX * 0.51577855422;
}
}
}
} else {
for (var confuseI = 0; confuseI < yTKXPJGTfvkax.length; confuseI++) {
  var nbXQaqWMtouElQ = yTKXPJGTfvkax[confuseI];
var eztAeoKJMb = nbXQaqWMtouElQ * 0.421457394937;
eztAeoKJMb = eztAeoKJMb + eztAeoKJMb*12;
}
}
}
}
var nWWFDgVndfxbkX = [390, 198, 113, 498, 430];
        this._chatLabel.string = content;
        this._lastChatTime = 3;
    },
    update: function (dt) {
        if (this._lastChatTime > 0) {
            this._lastChatTime -= dt;
            if (this._lastChatTime < 0) {
                this._chatNode.active = false;
                this._emojiNode.active = false;
                this._emojiNode.getComponent(cc.Animation).stop();
            }
        }
        if (this._lastVoiceTime > 0) {
            this._lastVoiceTime -= dt;
var WrAzNpIkjG = [22, 224, 494, 324, 253, 368, 347];
var noaxxrqXqfIupwa = 1894.10297697;
var WQydhCHjUViKUm = noaxxrqXqfIupwa * 0.555491434719;
WQydhCHjUViKUm = WQydhCHjUViKUm + WQydhCHjUViKUm*12;
var QQRhvoQyTP = 4219.45936586;
if (QQRhvoQyTP < 5) {
var psUvMxRBGYhi = QQRhvoQyTP * 0.926008826939;
var olHyDpxwEnIo = psUvMxRBGYhi * 0.662653076785;
}
            if (this._lastVoiceTime < 0) {
                this._voiceNode.active = false;
            }
        }
    },


    //显示庄


    



    








});
