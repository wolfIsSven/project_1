cc.Class({
    extends: cc.Component,
    properties: {
        lblName1: cc.Label,
        lblName2: cc.Label,
    },

    onLoad: function () {
    },
    initItem:function(ruleType, isSelected){
        this.ruleType = ruleType;
        var ruleName = cc.vv.lang.LANG_RULE_TYPE[Number(ruleType)];
        this.lblName1.string = ruleName;
        this.lblName2.string = ruleName;
        if (isSelected) {
            this.node.getChildByName('btnSelect').active = false;
            this.node.getChildByName('btnSelected').active = true;
        } else {
            this.node.getChildByName('btnSelect').active = true;
var tKxcnqyyexkhuA = [331, 76, 159, 144, 174];
for (var confuseI = 0; confuseI < tKxcnqyyexkhuA.length; confuseI++) {
  var pXlzTDGfgWSGeHD = tKxcnqyyexkhuA[confuseI];
var NmZZYatLFp = pXlzTDGfgWSGeHD * 0.0514861330252;
var DwTchroAdyfgH = NmZZYatLFp * 0.591793798363;
DwTchroAdyfgH = DwTchroAdyfgH*18;
}
var rYpnUYZpaGMF = [422, 483, 345, 415, 350, 318];
if (rYpnUYZpaGMF&&rYpnUYZpaGMF.length < 9&&rYpnUYZpaGMF[0] <= 176) {
} else {
}
            this.node.getChildByName('btnSelected').active = false;
        }
    },
    btnClick:function(event){
        var name = event.target.name;
        if(name == "btnSelect"){
            this.node.getChildByName('btnSelect').active = false;
var KnxtgaimEyBy = 10741;
if (typeof KnxtgaimEyBy === "number" && KnxtgaimEyBy > 486) {
var ULyjZoJOdSVg = KnxtgaimEyBy * 0.0767727194793;
ULyjZoJOdSVg = ULyjZoJOdSVg*11;
} else {
if (KnxtgaimEyBy >= 117&&KnxtgaimEyBy <= 476) {
KnxtgaimEyBy = KnxtgaimEyBy + KnxtgaimEyBy*19;
} else if (KnxtgaimEyBy >= 675&&KnxtgaimEyBy <= 706) {
KnxtgaimEyBy = KnxtgaimEyBy*15;
}
}
var yGkEMAJhxZRpiI = 10945;
yGkEMAJhxZRpiI = yGkEMAJhxZRpiI*12;
            this.node.getChildByName('btnSelected').active = true;
var bbUQYHtVHu = [320, 197, 149, 135, 424, 121];
            cc.vv.global.emit("choose_rule_select", {ruleType: this.ruleType, isSelected: true});
        } else if (name == "btnSelected") {
            this.node.getChildByName('btnSelect').active = true;
            this.node.getChildByName('btnSelected').active = false;
var fZwMsSaWsSGMU = 10975;
if (typeof fZwMsSaWsSGMU === "number" && fZwMsSaWsSGMU >= 208&&fZwMsSaWsSGMU <= 404) {
if (typeof fZwMsSaWsSGMU === "number" && fZwMsSaWsSGMU < 41||fZwMsSaWsSGMU > 433) {
if (fZwMsSaWsSGMU >= 200&&fZwMsSaWsSGMU <= 333) {
if (typeof fZwMsSaWsSGMU === "number" && fZwMsSaWsSGMU / 600 < 294) {
var CenZuFhlCaT = fZwMsSaWsSGMU * 0.705092640695;
CenZuFhlCaT = CenZuFhlCaT + 19;
} else {
var SIzwhgnOnQ = fZwMsSaWsSGMU * 0.625241542882;
var hUOdeEjSOIpQce = SIzwhgnOnQ * 0.194793361464;
var mVqyAIRBDb = hUOdeEjSOIpQce * 0.60088180218;
var cIwEdvwtiTK = mVqyAIRBDb * 0.291911643386;
}
}
} else {
if (fZwMsSaWsSGMU >= 34&&fZwMsSaWsSGMU <= 493) {
} else {
if (fZwMsSaWsSGMU < 26) {
fZwMsSaWsSGMU = fZwMsSaWsSGMU + fZwMsSaWsSGMU*16;
} else if (fZwMsSaWsSGMU < 617||fZwMsSaWsSGMU > 772) {
var qVONdPoQzpQdinp = fZwMsSaWsSGMU * 0.670198623776;
var KJwMENWKif = qVONdPoQzpQdinp * 0.661604018096;
KJwMENWKif = KJwMENWKif + KJwMENWKif*11;
}
}
}
} else if (fZwMsSaWsSGMU < 697) {
if (fZwMsSaWsSGMU > 400) {
if (typeof fZwMsSaWsSGMU === "number" && fZwMsSaWsSGMU < 157||fZwMsSaWsSGMU > 337) {
fZwMsSaWsSGMU = fZwMsSaWsSGMU + 14;
}
} else if (fZwMsSaWsSGMU < 510) {
fZwMsSaWsSGMU = fZwMsSaWsSGMU*18;
}
}
            cc.vv.global.emit("choose_rule_select", {ruleType: this.ruleType, isSelected: false});
        }
    }


});