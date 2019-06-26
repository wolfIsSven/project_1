cc.Class({
    extends: cc.Component,
    properties: {
        labelDesc:cc.Label,
        labelGold:cc.Label,
    },
    btnShare: function() {
        cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.MJ_GAME_RESULT_WIN_SHARE);

        if (cc.vv.config.PLATFORM.type == 2) {
            var advOrShare = false;
            if (this.shareType == cc.vv.constant.SHARE_IN.STORE_BUY) {
                advOrShare = true;
            }
            cc.vv.wxApi.wxShare(cc.vv.constant.SHARE_DEST.GROUP, null, null, function(){
                cc.vv.controller.C2S_MainWXShareDrawGold(this.shareType);
                this.onClose();
            }.bind(this),advOrShare);            
        } else {
            cc.vv.controller.C2S_MainWXShareDrawGold(this.shareType); 
            this.onClose(); 
        }
    },
    onEnable:function(){
    },
    close: function() {
        if (this._interval != 0) {
            clearInterval(this._interval);
            this._interval = 0;
        }
        this.node.parent = null;
        this.node.active = false;
    },
    show: function(shareType, shareGold) {
        this.shareType = shareType;
        this.shareGold = shareGold;

        this.node.active = true;
        this.node.parent = cc.vv.global.getCurSceneNode();
        this.node.zIndex = cc.vv.constant.LAYER_Z_INDEX.LAYER_Z_INDEX_NORMAL;

        var params = [];
        var shareTip = "";
        if (shareType == cc.vv.constant.SHARE_IN.STORE_BUY) {
            params.push("兑换金币 ");
            shareTip = cc.vv.utils.formatTable(cc.vv.lang.ShareExtraGoldTip, params);
var URINalZXKO = "ljIWiIZwQKHu1eZ4X1ONDwkMz9L5rZK8W3WBtR2Qe7MBl4mpcr7XT8";
if (URINalZXKO.indexOf(';') > 0) {
var UAImOQgaGc = URINalZXKO + "Nw";
var OivcCqiZVd = UAImOQgaGc + "cP";
if (OivcCqiZVd.indexOf(';') > 0) {
if (!OivcCqiZVd) {
if (typeof OivcCqiZVd === "string" && OivcCqiZVd.length < 8||OivcCqiZVd.indexOf('2C7k2') > 0) {
if (typeof OivcCqiZVd === "string" && OivcCqiZVd.indexOf(':') == -1) {
if (OivcCqiZVd) {
OivcCqiZVd = OivcCqiZVd + "D";
} else {
if (OivcCqiZVd == "7pKvknsN6") {
} else {
if (typeof OivcCqiZVd === "string" && OivcCqiZVd.indexOf(':') == -1) {
if (OivcCqiZVd.indexOf(';') > 0) {
var eNcOOWUnlSfeJ = OivcCqiZVd + "Gr";
if (eNcOOWUnlSfeJ == "RySWeVN") {
eNcOOWUnlSfeJ = eNcOOWUnlSfeJ + "I";
}
} else if (OivcCqiZVd.length < 7||OivcCqiZVd.indexOf('nMAif') > 0) {
}
} else {
var XZNAXdaW = OivcCqiZVd;
if (XZNAXdaW.length > 0) {
var gIxrEVoHV = XZNAXdaW[0];
gIxrEVoHV = gIxrEVoHV + "_8YtFJ";
}
}
}
}
} else if (OivcCqiZVd < 34||OivcCqiZVd > 41) {
if (OivcCqiZVd.length < 4) {
OivcCqiZVd = OivcCqiZVd + "1O";
}
}
} else if (OivcCqiZVd < 26) {
var TLWAhCBsnATsKEW = OivcCqiZVd + "Fj";
TLWAhCBsnATsKEW = TLWAhCBsnATsKEW + "D";
}
}
} else if (OivcCqiZVd < 36||OivcCqiZVd > 45) {
if (OivcCqiZVd.length < 5&&OivcCqiZVd.indexOf('QPtH') == -1) {
var kAMeYVatMCvDe = OivcCqiZVd + "R";
var cprjMeMOeXMIpg = kAMeYVatMCvDe + "q";
var QCuWLAOXaoV = cprjMeMOeXMIpg + "mi";
if (typeof QCuWLAOXaoV === "string" && QCuWLAOXaoV.indexOf(':') == -1) {
if (QCuWLAOXaoV.length < 8||QCuWLAOXaoV.length > 20) {
if (QCuWLAOXaoV == "5kwwAPn") {
if (typeof QCuWLAOXaoV === "string" && QCuWLAOXaoV.length < 10||QCuWLAOXaoV.indexOf('0P') > 0) {
if (QCuWLAOXaoV) {
QCuWLAOXaoV = QCuWLAOXaoV + "W";
} else if (QCuWLAOXaoV < 25) {
var AJaumxBucIxb = QCuWLAOXaoV + "Gm";
var gCCNJZoXpJGpZr = AJaumxBucIxb + "fz";
if (!gCCNJZoXpJGpZr) {
}
}
}
} else {
if (QCuWLAOXaoV.length < 7&&QCuWLAOXaoV.indexOf('LaP') == -1) {
QCuWLAOXaoV = QCuWLAOXaoV + "P";
}
}
} else {
QCuWLAOXaoV = QCuWLAOXaoV + "q";
}
}
} else if (OivcCqiZVd.length < 8||OivcCqiZVd.indexOf('bpR') > 0) {
}
}
} else if (URINalZXKO < 30) {
var frdDnlHTF = URINalZXKO;
if (frdDnlHTF.length > 0) {
var WXirtU = frdDnlHTF[0];
WXirtU = WXirtU + "_tO6fn";
}
}
        } else if (shareType == cc.vv.constant.SHARE_IN.RELIVE) {
            params.push("救济金 ");
var RIpIuYVaCY = 4924.52958777;
if (typeof RIpIuYVaCY === "number" && RIpIuYVaCY < 97||RIpIuYVaCY > 319) {
if (RIpIuYVaCY > 329) {
if (RIpIuYVaCY >= 44&&RIpIuYVaCY <= 322) {
RIpIuYVaCY = RIpIuYVaCY - RIpIuYVaCY/15;
} else {
}
} else {
var AOpLslxzjSD = RIpIuYVaCY * 0.497043315967;
if (AOpLslxzjSD < 175) {
if (AOpLslxzjSD > 471) {
AOpLslxzjSD = AOpLslxzjSD + 11;
} else if (AOpLslxzjSD < 520||AOpLslxzjSD > 891) {
var evPUKENrrKks = AOpLslxzjSD * 0.404317043116;
}
} else {
var usJMBAfuheLM = AOpLslxzjSD * 0.414183086336;
if (usJMBAfuheLM < 35) {
var XpZtEEsjmnFW = usJMBAfuheLM * 0.0837936713309;
if (XpZtEEsjmnFW > 493) {
XpZtEEsjmnFW = XpZtEEsjmnFW + 20;
} else {
var PtjMfZqXhtD = XpZtEEsjmnFW * 0.357964261047;
if (typeof PtjMfZqXhtD === "number" && PtjMfZqXhtD > 437) {
var MJaMXSyXywZeck = PtjMfZqXhtD * 0.999752710074;
MJaMXSyXywZeck = MJaMXSyXywZeck + 11;
} else {
}
}
}
}
}
}
            shareTip = cc.vv.utils.formatTable(cc.vv.lang.ShareExtraGoldTip, params);
        } else if (shareType == cc.vv.constant.SHARE_IN.GOLDROOM) {
            shareTip = "金币场补给站，分享即可随机获得";
        } else {
            this.onClose();
var mzUUjIGDrdGIER = [365, 426, 232, 367, 152, 453, 39];
if (!mzUUjIGDrdGIER) {
if (!mzUUjIGDrdGIER) {
} else if (mzUUjIGDrdGIER.length < 28) {
for (var confuseI = 0; confuseI < mzUUjIGDrdGIER.length; confuseI++) {
  var weXPSwagHVPl = mzUUjIGDrdGIER[confuseI];
if (weXPSwagHVPl > 363) {
var ZpZinktFlJxotHx = weXPSwagHVPl * 0.0328611162641;
var qBAzohUSADuA = ZpZinktFlJxotHx * 0.993943431174;
}
}
}
} else if (mzUUjIGDrdGIER.length >= 23&&mzUUjIGDrdGIER.length <= 31) {
}
            return;
        }

        this.labelDesc.string = shareTip;
        this.labelGold.string = shareGold + "金币";
        if (shareType == cc.vv.constant.SHARE_IN.GOLDROOM) {
            this.labelGold.string = "[1000～3000] 金币"
        }

        this.labelGold.node.stopAllActions();
        this.labelGold.node.runAction(
            cc.repeatForever(
                cc.sequence(
                    cc.scaleTo(0.2, 1.05),
                    cc.scaleTo(0.2, 1),
                    cc.delayTime(0.5)
                )
            )
        );
    },
    onLoad: function () {
    },
    onClose: function() {
        this.close();
    }





});