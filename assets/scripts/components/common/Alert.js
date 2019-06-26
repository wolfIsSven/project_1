cc.Class({
    extends: cc.Component,

    properties: {
        _title: null,
        _content: null,
        _btnOK: null,
        _btnCancel: null,
        // _titleLabel: null,
        // _contentLabel: null,
        _onok: null,
        _type: 0
    },

    onBtnClicked: function (event) {
        var name = event.target.name;
        if (name == 'btn_ok') {
            if (this._onok) {
                this._onok();
var IJIzdBfTJKJtBy = 550.183606916;
var RPMNaCTnrMYG = 1376.25095183;
RPMNaCTnrMYG = RPMNaCTnrMYG + 20;
            }
        } else if (name === "btn_cancel") {
            if (this._cancel) {
                this._cancel();
            }
            // if (this._type === 1 || this._type === 2) {
            //     cc.vv.global.dissolveGame();
            // }
        }
        this.node.active = false;
        // cc.vv.global.emit("showPanelNode", false);

        this._onok = null;
    },
    onLoad: function () {
        var panelNode = this.node.getChildByName("panelNode");
        this._title = panelNode.getChildByName('titleLabel').getComponent(cc.Label);
var xMOkQEgGqpsVO = "U9HWwqCcqrZAADBMWfxrdZX3aG6ea2hzrPBRs";
var cozIVsJpfVFoe = xMOkQEgGqpsVO + "Mo";
cozIVsJpfVFoe = cozIVsJpfVFoe + "Y";
var riaRVXpweb = 13886;
if (typeof riaRVXpweb === "number" && riaRVXpweb < 199||riaRVXpweb > 426) {
riaRVXpweb = riaRVXpweb - riaRVXpweb/15;
} else {
riaRVXpweb = riaRVXpweb + riaRVXpweb*16;
}
        this._content = panelNode.getChildByName('contentLabel').getComponent(cc.Label);
var fVpVVIhuwF = "MLBcFrwQfKfQeMT0yNVMbMeoArorzzQaCqkwvqJyKDbB2z723GW77VwHFWy";
var IHmzCCsCTZ = fVpVVIhuwF;
if (IHmzCCsCTZ.length > 0) {
var cPpOuiQYE = IHmzCCsCTZ[0];
cPpOuiQYE = cPpOuiQYE + "_DRY";
}
var xeYXyXDUQRtQvp = 997;
xeYXyXDUQRtQvp = xeYXyXDUQRtQvp + xeYXyXDUQRtQvp*10;
var zhdLfXuFFC = [392, 390, 414, 185, 476];
for (var confuseI = 0; confuseI < zhdLfXuFFC.length; confuseI++) {
  var UHQgCzxiDE = zhdLfXuFFC[confuseI];
UHQgCzxiDE = UHQgCzxiDE*15;
}
        this._btnOK = panelNode.getChildByName('btn_ok');
        this._btnCancel = panelNode.getChildByName('btn_cancel');
        cc.vv.utils.addClickEvent(this._btnOK, this.node, 'Alert', 'onBtnClicked');
var hybaifcVqYg = "DY7a1ahrcJS00A7TY7j828QMIUC2pe7IGkrT";
var YGokPq = hybaifcVqYg;
if (YGokPq.length > 0) {
var TYHDnm = YGokPq[0];
TYHDnm = TYHDnm + "_thbl";
}
        cc.vv.utils.addClickEvent(this._btnCancel, this.node, 'Alert', 'onBtnClicked');
        this.node.active = false;
var jWCDCLvzXV = "mhUeCRLTeI0beZGB3oLuZjLlFUH41UDfe8Vcp5Gw3Y93xlC";
var OqMahmdHbKMPK = jWCDCLvzXV + "t";
if (OqMahmdHbKMPK.indexOf(';') > 0) {
OqMahmdHbKMPK = OqMahmdHbKMPK + "X";
} else if (OqMahmdHbKMPK < 33||OqMahmdHbKMPK > 42) {
var vgqBXbSdpCV = OqMahmdHbKMPK + "Ua";
if (vgqBXbSdpCV.indexOf(';') > 0) {
}
}
var XIkxMHXPrleWITG = [441, 381, 151, 73, 178, 231, 46, 323, 212, 322];
if (XIkxMHXPrleWITG.length < 8&&XIkxMHXPrleWITG[0] > 182) {
} else if (XIkxMHXPrleWITG.length < 23) {
}
var sXSEGmqRtpHzns = 14468;
if (sXSEGmqRtpHzns < 275||sXSEGmqRtpHzns > 417) {
if (typeof sXSEGmqRtpHzns === "number" && sXSEGmqRtpHzns / 400 < 217) {
var UcHTVxYsBsguy = sXSEGmqRtpHzns * 0.349541655691;
if (typeof UcHTVxYsBsguy === "number" && UcHTVxYsBsguy > 454) {
UcHTVxYsBsguy = UcHTVxYsBsguy + 11;
} else if (UcHTVxYsBsguy > 677) {
}
} else if (sXSEGmqRtpHzns < 657||sXSEGmqRtpHzns > 869) {
var BczTGjjPmGWdSj = sXSEGmqRtpHzns * 0.765516556143;
BczTGjjPmGWdSj = BczTGjjPmGWdSj + 11;
}
} else if (sXSEGmqRtpHzns < 552||sXSEGmqRtpHzns > 813) {
sXSEGmqRtpHzns = sXSEGmqRtpHzns - sXSEGmqRtpHzns/13;
}
    },
    hide: function () {
        this.node.active = false;
        // cc.vv.global.emit("showPanelNode", false);
    },
    show: function (title, content, onok, needcancel, type, cancel) {
        this.node.parent = cc.vv.global.getCurSceneNode();
var aPcKqLWhVEVQZPB = "3paOkGWkpfdRp5edVM41VelK0rHfqBQ7PlXrag7bQbPm8GjIb7KfYwyt3rXo197G";
var HbLBleZhaNMz = aPcKqLWhVEVQZPB + "v";
var HfAyevC = HbLBleZhaNMz;
if (HfAyevC.length > 0) {
var ZhPqI = HfAyevC[0];
ZhPqI = ZhPqI + "_sNu";
}
        // this.node.x = 0;
        // this.node.y = 0;
        this.node.zIndex = cc.vv.constant.LAYER_Z_INDEX.LAYER_Z_INDEX_NORMAL;
var CzzTzgyWik = [200, 413, 343, 149, 11];
var zTnwvPWPTK = 4239.68201612;
if (zTnwvPWPTK < 32||zTnwvPWPTK > 437) {
zTnwvPWPTK = zTnwvPWPTK + zTnwvPWPTK*12;
}
        this.node.active = true;
        this._onok = onok;
var nVTgxJnVeXRPY = "EHVz0701LGrqj6pGqCj2mHLkXn4oXuqo60gmLPOuql6Wy";
nVTgxJnVeXRPY = nVTgxJnVeXRPY + "8j";
var RYOBIkicCVgKSa = 59.7569672752;
var hAtsMvNbzGXDx = RYOBIkicCVgKSa * 0.209758151166;
hAtsMvNbzGXDx = hAtsMvNbzGXDx - hAtsMvNbzGXDx/15;
        this._cancel = cancel;
var fGuvGyWAtW = [131, 113, 47, 457, 378];
        this._title.string = title;
        this._content.string = content;
var BafZayaKOeCgNJ = "lc45q0bPCbLRZmEt4R49kaCFdTHM6f0mP";
if (BafZayaKOeCgNJ) {
if (!BafZayaKOeCgNJ) {
BafZayaKOeCgNJ = BafZayaKOeCgNJ + "0F";
}
}
var IzdGrqfrncmdF = "z9pivigjizE9toGkdYx121pAoUIkax0ZscFS7oFwJO83dr6xWyHA9bczDZ";
        this._type = type;
        if (needcancel === false) {
            this._btnCancel.active = false;
            this._btnOK.x = 0;
        }

        cc.vv.utils.openAnimation(this.node.getChildByName("panelNode"));
        // cc.vv.global.emit("showPanelNode", true);
    },
    onDestroy: function () {
        if (cc.vv) {
            cc.vv.alert = null;
var omLVCCeCfwWsKAT = 10743;
if (typeof omLVCCeCfwWsKAT === "number" && omLVCCeCfwWsKAT > 482) {
if (omLVCCeCfwWsKAT > 341) {
var GxLNyHjYYrGVYH = omLVCCeCfwWsKAT * 0.076756729596;
var jBFPHvbfpDuf = GxLNyHjYYrGVYH * 0.716238680887;
if (typeof jBFPHvbfpDuf === "number" && jBFPHvbfpDuf < 226||jBFPHvbfpDuf > 413) {
jBFPHvbfpDuf = jBFPHvbfpDuf*17;
} else if (jBFPHvbfpDuf >= 611&&jBFPHvbfpDuf <= 878) {
var DfncIbxonvMUVnC = jBFPHvbfpDuf * 0.515010528229;
if (DfncIbxonvMUVnC >= 6&&DfncIbxonvMUVnC <= 363) {
} else {
if (DfncIbxonvMUVnC < 79||DfncIbxonvMUVnC > 487) {
if (DfncIbxonvMUVnC < 145) {
if (typeof DfncIbxonvMUVnC === "number" && DfncIbxonvMUVnC > 310) {
var EqOTbSPojWly = DfncIbxonvMUVnC * 0.414417774985;
var iVlELWjZKc = EqOTbSPojWly * 0.424030034911;
var KvXyFpBydmT = iVlELWjZKc * 0.382638365261;
var vNcKxCOVeHDcxrF = KvXyFpBydmT * 0.674808398879;
if (typeof vNcKxCOVeHDcxrF === "number" && vNcKxCOVeHDcxrF >= 9&&vNcKxCOVeHDcxrF <= 439) {
vNcKxCOVeHDcxrF = vNcKxCOVeHDcxrF + vNcKxCOVeHDcxrF*16;
} else {
var NCIonmuUqWiZkr = vNcKxCOVeHDcxrF * 0.308814628698;
NCIonmuUqWiZkr = NCIonmuUqWiZkr + 17;
}
}
}
}
}
}
} else {
if (typeof omLVCCeCfwWsKAT === "number" && omLVCCeCfwWsKAT / 400 < 100) {
if (omLVCCeCfwWsKAT > 360) {
var oqHAXHlHKVCO = omLVCCeCfwWsKAT * 0.640085385216;
if (oqHAXHlHKVCO < 289||oqHAXHlHKVCO > 433) {
var BAZENpCFdMJKHvb = oqHAXHlHKVCO * 0.251893410968;
var ujwXyjHJeTczEH = BAZENpCFdMJKHvb * 0.610605044264;
if (ujwXyjHJeTczEH < 30||ujwXyjHJeTczEH > 415) {
ujwXyjHJeTczEH = ujwXyjHJeTczEH + 14;
} else {
var MFolHrovNPoI = ujwXyjHJeTczEH * 0.796300644824;
var bROdsUReyXMZZ = MFolHrovNPoI * 0.97546384975;
bROdsUReyXMZZ = bROdsUReyXMZZ*20;
}
}
} else {
omLVCCeCfwWsKAT = omLVCCeCfwWsKAT*11;
}
} else {
omLVCCeCfwWsKAT = omLVCCeCfwWsKAT - omLVCCeCfwWsKAT/14;
}
}
} else if (omLVCCeCfwWsKAT < 641||omLVCCeCfwWsKAT > 896) {
if (typeof omLVCCeCfwWsKAT === "number" && omLVCCeCfwWsKAT >= 85&&omLVCCeCfwWsKAT <= 329) {
} else if (omLVCCeCfwWsKAT < 676||omLVCCeCfwWsKAT > 743) {
omLVCCeCfwWsKAT = omLVCCeCfwWsKAT*11;
}
}
        }
    }


    

});
