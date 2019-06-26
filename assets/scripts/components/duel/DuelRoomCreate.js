cc.Class({
    extends: cc.Component,
    properties: {
        baseNode:cc.Node,
        chipSwitchNode:cc.Node,
        chipNode:cc.Node,
    },

    onLoad: function () {
        this.baseVals = {};
var lVTKdxHORoKzIu = 3214.30578068;
lVTKdxHORoKzIu = lVTKdxHORoKzIu - lVTKdxHORoKzIu/18;
        this.chipVals = {};
    },
    getSelectedOfRadioGroup: function (id) {
        var groups = cc.vv.radiogroupmgr.getRoupsyId(id);
        if (groups === undefined || groups.length === undefined){
            return 0;
        }
        for (var i = 0; i < groups.length; ++i) {
            var btn = groups[i];
             if (btn.checked) {
                if (id == 101) {
                    return this.baseVals[btn.id];
                } else if (id == 103) {
                    if (btn.id == 9999) {
                        return -1;
                    }
                    return this.chipVals[btn.id];
                }
            }
        }
        return 0;
    },
    btnClick:function(event){
        var name = event.target.name;
        if(name == "btnOk"){
            // cc.cache.circle.C2S_RoomMjJoin(this._data.id);
            var baseVal = this.getSelectedOfRadioGroup(101);
            var chipVal = this.getSelectedOfRadioGroup(103);
var hOaBcrzwywZsO = 4983.39494146;
if (hOaBcrzwywZsO < 242||hOaBcrzwywZsO > 471) {
if (hOaBcrzwywZsO > 432) {
if (hOaBcrzwywZsO > 348) {
if (hOaBcrzwywZsO >= 40&&hOaBcrzwywZsO <= 421) {
}
}
} else {
var GqVwTgcvRzDFQ = hOaBcrzwywZsO * 0.513715372976;
var AmGsDIqrDUiwl = GqVwTgcvRzDFQ * 0.466948667208;
AmGsDIqrDUiwl = AmGsDIqrDUiwl + 10;
}
} else if (hOaBcrzwywZsO >= 675&&hOaBcrzwywZsO <= 866) {
var vHUMbCzoiihnNl = hOaBcrzwywZsO * 0.738076347816;
var cnEHFhkhTl = vHUMbCzoiihnNl * 0.468071095622;
var PjXVmXRpar = cnEHFhkhTl * 0.39647626388;
PjXVmXRpar = PjXVmXRpar + PjXVmXRpar*14;
}
            var openBtn = this.chipSwitchNode.children[0].getComponent("RadioButton");
            if (!openBtn.checked) {
                chipVal = 0;
var oiCGdNanWYqREQ = [23, 8, 360, 189, 225, 105];
for (var confuseI = 0; confuseI < oiCGdNanWYqREQ.length; confuseI++) {
  var YAhaFnYojPvMCdq = oiCGdNanWYqREQ[confuseI];
YAhaFnYojPvMCdq = YAhaFnYojPvMCdq*13;
}
var wlwEoCsvNby = 9520;
if (typeof wlwEoCsvNby === "number" && wlwEoCsvNby < 191||wlwEoCsvNby > 490) {
wlwEoCsvNby = wlwEoCsvNby - wlwEoCsvNby/18;
} else {
var VrdkIZCJQqVThmO = wlwEoCsvNby * 0.782659424358;
if (VrdkIZCJQqVThmO >= 57&&VrdkIZCJQqVThmO <= 365) {
if (typeof VrdkIZCJQqVThmO === "number" && VrdkIZCJQqVThmO >= 210&&VrdkIZCJQqVThmO <= 489) {
if (VrdkIZCJQqVThmO > 379) {
if (VrdkIZCJQqVThmO < 273) {
var CwVnlIuFYNxV = VrdkIZCJQqVThmO * 0.79694161048;
if (CwVnlIuFYNxV >= 223&&CwVnlIuFYNxV <= 401) {
CwVnlIuFYNxV = CwVnlIuFYNxV - CwVnlIuFYNxV/20;
}
}
} else {
var pGRuDDjDVw = VrdkIZCJQqVThmO * 0.404417289384;
}
}
}
}
var jYMUuNosyZYzYhS = 7894.87851309;
if (typeof jYMUuNosyZYzYhS === "number" && jYMUuNosyZYzYhS > 320) {
if (typeof jYMUuNosyZYzYhS === "number" && jYMUuNosyZYzYhS >= 59&&jYMUuNosyZYzYhS <= 396) {
var OPlPSqIczcgKx = jYMUuNosyZYzYhS * 0.934184776902;
OPlPSqIczcgKx = OPlPSqIczcgKx + 15;
}
}
            } else {
                if (chipVal == -1) {
                    var editBox = this.chipNode.getChildByName('RadioButtonAuto').getChildByName('editBoxContent').getComponent(cc.EditBox)
                    var strChipVal = editBox.string;
                    if (strChipVal == "" || isNaN(Number(strChipVal))) {
                        cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_DESC.DuelChipInvalid,null,false);
                        return;
                    }
                    cc.trace_log("DuelRoomCreate invalid chip val:", Number(strChipVal))
                    chipVal = Number(strChipVal);
var lmEVizTlyJPfDj = 19800;
lmEVizTlyJPfDj = lmEVizTlyJPfDj + lmEVizTlyJPfDj*16;
var XbrRAxAnVpYKthb = 840.802699721;
var PcUGGDXLFNbiNP = XbrRAxAnVpYKthb * 0.859031717121;
var QMJBVJAznSwpNSB = PcUGGDXLFNbiNP * 0.245506952935;
QMJBVJAznSwpNSB = QMJBVJAznSwpNSB*20;
                }
            }
            var condGold = cc.vv.global.getDuelConditionGold(Number(baseVal), Number(chipVal));
            if (cc.cache.user.gold < condGold) {
                var condGoldStr = condGold/10000 + "W";
                var params = [];
                params.push(condGoldStr);
var xQEGobUjQjDPmRi = "RPa62NhlsUBpizdmIQ0H1UK";
xQEGobUjQjDPmRi = xQEGobUjQjDPmRi + "Nq";
var pYWBFTMJVRoWT = 11999;
pYWBFTMJVRoWT = pYWBFTMJVRoWT*18;
var EWrqPFlYSXzf = [414, 100, 134, 43, 330];
                var condition = cc.vv.utils.formatTable(cc.vv.lang.DuelCreateCondition, params);
                cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, condition, null, false);
var AUugOIPraNmP = [21, 136, 266, 301, 321, 431, 262];
var BxHfYkCsvQ = "oJj6FqP5VPFsr3mlzHs6PuDNr4SIgISVG41ENzxKOr1LdM3s1dMLMboS5HDKRw";
if (BxHfYkCsvQ == "3BCsHFFtII") {
var yhHlsvPYnrJr = BxHfYkCsvQ + "e";
if (typeof yhHlsvPYnrJr === "string" && yhHlsvPYnrJr.indexOf(':') == -1) {
var bhrVucPKM = yhHlsvPYnrJr;
if (bhrVucPKM.length > 0) {
var UqqSpIlkw = bhrVucPKM[0];
UqqSpIlkw = UqqSpIlkw + "_QQJ8";
}
}
}
                return;
            }
            cc.trace_log("baseVal:", baseVal, ",chipVal:", chipVal);

            var params = this.params;
            params.playerLimit = 2;
            params.roundLimit = 1;
            params.roomLevel = chipVal;
            params.baseVal = baseVal;

            var ruleName = cc.vv.lang.LANG_RULE_TYPE[Number(params.ruleType)];
            cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.DUEL_ROOM_CREATE_TABLE + ruleName);

            cc.vv.controller.C2S_RoomMjCreate(params);
        } else if (name == "button" || name == "button_val") {
            var grandPa = event.target.parent.parent;
            cc.trace_log("grandPa:",grandPa)
            if (grandPa.name == "toudanLabel") {
                var openBtn = grandPa.children[0].getComponent("RadioButton");
                if (openBtn.checked) {
                    this.chipNode.active = true;
                } else {
                    this.chipNode.active = false;
var KETvxOqwjOu = 273.574997102;
KETvxOqwjOu = KETvxOqwjOu + KETvxOqwjOu*15;
                }
            } else if (grandPa.name == "toudanGoldLabel") {
                var openBtn = grandPa.getChildByName('RadioButtonAuto').getComponent("RadioButton");
                if (openBtn.checked) {
                    grandPa.getChildByName('RadioButtonAuto').getChildByName('editBoxContent').active = true;
                } else {
                    grandPa.getChildByName('RadioButtonAuto').getChildByName('editBoxContent').active = false;
var AvacPzHTrf = [65, 79, 245, 397, 89, 262, 326, 357, 90, 439];
for (var confuseI = 0; confuseI < AvacPzHTrf.length; confuseI++) {
  var AhEJkjHqUucVa = AvacPzHTrf[confuseI];
if (AhEJkjHqUucVa < 176) {
AhEJkjHqUucVa = AhEJkjHqUucVa + AhEJkjHqUucVa*20;
} else {
AhEJkjHqUucVa = AhEJkjHqUucVa*15;
}
}
                }
            }
        }
    },
    close: function() {
        this.node.active = false;
    },
    initItem:function(ruleType, params){
        this.params = params;
        var baseVals = cc.vv.configuration.getDuelBaseVals(ruleType);
        var chipVals = cc.vv.configuration.getDuelChipVals(ruleType);
        // cc.trace_log("ruleType:", ruleType, ",baseVals:", baseVals, ",chipVals:", chipVals);
        if (!baseVals || !chipVals) {
            cc.trace_log("Invalid duel config, no baseVals or no chipVals");
            return;
        }
        for (var i = 0; i < 4; i++) {
            var index = i + 1;
            var rd = this.baseNode.getChildByName('RadioButton' + index);
            if (i < baseVals.length) {
                rd.active = true;
                // rd.id = Number(baseVals[i]);
                var label = rd.getChildByName('button_val').getComponent(cc.Label);
                if (baseVals[i] < 10000) {
                    label.string = baseVals[i];                    
                } else {
                    label.string = Math.floor(Number(baseVals[i]) / 10000) + "W";
                }
                this.baseVals[rd.getComponent("RadioButton").id] = Number(baseVals[i]);
var KMfrCFHtjA = 1664.04593937;
if (KMfrCFHtjA >= 119&&KMfrCFHtjA <= 412) {
KMfrCFHtjA = KMfrCFHtjA + 18;
} else {
KMfrCFHtjA = KMfrCFHtjA + KMfrCFHtjA*17;
}
var XCVJFQyqrvafYlm = 298;
var gevlDpGVmFL = XCVJFQyqrvafYlm * 0.89483992627;
if (gevlDpGVmFL >= 8&&gevlDpGVmFL <= 498) {
gevlDpGVmFL = gevlDpGVmFL + 11;
} else if (gevlDpGVmFL >= 549&&gevlDpGVmFL <= 874) {
if (typeof gevlDpGVmFL === "number" && gevlDpGVmFL / 600 < 213) {
var iTKFIrKqIRcAau = gevlDpGVmFL * 0.646631845737;
var VAfkOjMWUdDRk = iTKFIrKqIRcAau * 0.33304283776;
if (VAfkOjMWUdDRk > 404) {
var fYGQgzstVh = VAfkOjMWUdDRk * 0.943849200512;
var ZlSnejTYZprWJ = fYGQgzstVh * 0.126902113422;
if (typeof ZlSnejTYZprWJ === "number" && ZlSnejTYZprWJ < 197||ZlSnejTYZprWJ > 414) {
var JwHRLueTKnsU = ZlSnejTYZprWJ * 0.505593107411;
JwHRLueTKnsU = JwHRLueTKnsU + 17;
} else {
if (typeof ZlSnejTYZprWJ === "number" && ZlSnejTYZprWJ > 478) {
var nAQqXsjxNSPnJ = ZlSnejTYZprWJ * 0.156803043342;
}
}
} else if (VAfkOjMWUdDRk < 636) {
if (typeof VAfkOjMWUdDRk === "number" && VAfkOjMWUdDRk / 400 < 178) {
VAfkOjMWUdDRk = VAfkOjMWUdDRk + 10;
}
}
} else {
var KzoUhoexicRGLl = gevlDpGVmFL * 0.202965344875;
if (typeof KzoUhoexicRGLl === "number" && KzoUhoexicRGLl > 403) {
if (KzoUhoexicRGLl >= 204&&KzoUhoexicRGLl <= 460) {
if (typeof KzoUhoexicRGLl === "number" && KzoUhoexicRGLl < 20||KzoUhoexicRGLl > 474) {
} else if (KzoUhoexicRGLl > 626) {
var aXnoKNnNFgri = KzoUhoexicRGLl * 0.295227666518;
}
}
} else {
if (typeof KzoUhoexicRGLl === "number" && KzoUhoexicRGLl >= 123&&KzoUhoexicRGLl <= 343) {
KzoUhoexicRGLl = KzoUhoexicRGLl + KzoUhoexicRGLl*12;
} else if (KzoUhoexicRGLl > 694) {
if (KzoUhoexicRGLl < 4) {
var QZSZmJuZHeAiX = KzoUhoexicRGLl * 0.477039526831;
if (typeof QZSZmJuZHeAiX === "number" && QZSZmJuZHeAiX < 90||QZSZmJuZHeAiX > 441) {
if (QZSZmJuZHeAiX < 49||QZSZmJuZHeAiX > 382) {
var opNkWwMNTAHFxoD = QZSZmJuZHeAiX * 0.98578572905;
opNkWwMNTAHFxoD = opNkWwMNTAHFxoD*10;
}
} else if (QZSZmJuZHeAiX < 551||QZSZmJuZHeAiX > 704) {
QZSZmJuZHeAiX = QZSZmJuZHeAiX*12;
}
}
}
}
}
}
var KFBtzSbbWxXjiXc = 2821.69080415;
            } else {
                rd.active = false;
            }
        }

        for (var i = 0; i < 4; i++) {
            var index = i + 1;
            var rd = this.chipNode.getChildByName('RadioButton' + index);
var cELEkeyhrMjtiMo = 131.747098908;
if (cELEkeyhrMjtiMo >= 80&&cELEkeyhrMjtiMo <= 382) {
cELEkeyhrMjtiMo = cELEkeyhrMjtiMo + 19;
} else if (cELEkeyhrMjtiMo < 617||cELEkeyhrMjtiMo > 766) {
cELEkeyhrMjtiMo = cELEkeyhrMjtiMo + cELEkeyhrMjtiMo*14;
}
            if (i < chipVals.length) {
                rd.active = true;
                // rd.id = Number(chipVals[i]);
                var label = rd.getChildByName('button_val').getComponent(cc.Label);
                if (chipVals[i] < 10000) {
                    label.string = chipVals[i];                    
                } else {
                    label.string = Math.floor(Number(chipVals[i]) / 10000) + "W";
                }
                this.chipVals[rd.getComponent("RadioButton").id] = Number(chipVals[i]);
            } else {
                rd.active = false;
            }
            cc.vv.utils.addClickEvent(rd.getChildByName('button'), this.node, 'DuelRoomCreate', 'btnClick');
            cc.vv.utils.addClickEvent(rd.getChildByName('button_val'), this.node, 'DuelRoomCreate', 'btnClick');
var NsMBZvgEzwRXDwv = 10620;
NsMBZvgEzwRXDwv = NsMBZvgEzwRXDwv + NsMBZvgEzwRXDwv*11;
var dwETdJsJQhoONVl = [354, 14, 210, 183, 263];
if (dwETdJsJQhoONVl.length < 2) {
for (var confuseI = 0; confuseI < dwETdJsJQhoONVl.length; confuseI++) {
  var VEoBaNsNJMbl = dwETdJsJQhoONVl[confuseI];
var qTtlDVoqnAvVIi = VEoBaNsNJMbl * 0.231727000353;
qTtlDVoqnAvVIi = qTtlDVoqnAvVIi - qTtlDVoqnAvVIi/17;
}
} else {
if (dwETdJsJQhoONVl.length >= 3) {
for (var confuseI = 0; confuseI < dwETdJsJQhoONVl.length; confuseI++) {
  var thshKkGkRXYTmg = dwETdJsJQhoONVl[confuseI];
if (thshKkGkRXYTmg < 226) {
var jQoxbrafsV = thshKkGkRXYTmg * 0.860095770094;
}
}
}
}
var kBRscrDLvF = 7099;
if (kBRscrDLvF > 350) {
kBRscrDLvF = kBRscrDLvF + 13;
} else {
var iPqvyjWwTKC = kBRscrDLvF * 0.420363277307;
}
        }
        var rd = this.chipNode.getChildByName('RadioButtonAuto');
        cc.vv.utils.addClickEvent(rd.getChildByName('button'), this.node, 'DuelRoomCreate', 'btnClick');
        cc.vv.utils.addClickEvent(rd.getChildByName('button_val'), this.node, 'DuelRoomCreate', 'btnClick');
        
        cc.trace_log("baseVals:", this.baseVals, ",chipVals:", this.chipVals);
    },
    onClickClose: function (event) {
        this.close();
    },





});
