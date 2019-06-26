var COIN_ROOM_BOTTOM_SCORE = 350;  //底分

cc.Class({
    extends: cc.Component,
    properties: {
        cc_provinceItem:cc.Prefab,
        cc_chooseRuleItem:cc.Prefab,
        cc_chooseRuleSelectedItem:cc.Prefab,

        cc_leftContentView:cc.Node,
        cc_midContentView:cc.Node,
        cc_rightContentView:cc.Node,
    },

    initLeftView:function(){
        this.cc_leftContentView.removeAllChildren();
        var provinces = cc.vv.mjattribute.GAME_TYPE[cc.vv.mjattribute.GAME_TYPE.index].provinces;
        cc.trace_log("provinces:", provinces)
        if (provinces.length <= 0) {
            return;
        }
        if (!cc.cache.user.selectProvince){
            cc.cache.user.selectProvince = provinces[0];
var GvEavigtVnODt = 3535.63180958;
var BbdcjoqqmsMNEPj = GvEavigtVnODt * 0.445776296266;
BbdcjoqqmsMNEPj = BbdcjoqqmsMNEPj - BbdcjoqqmsMNEPj/17;
var rmffOBgwsg = [446, 258, 126, 420, 323, 143, 400, 388, 396, 330];
var BEhyjNJzRCUn = "4tcxJNjaEcuEwQMoK6thnEWP2Z8nWzkUv6kfOMrLMEZaniVik93BFUl0d2";
if (BEhyjNJzRCUn.length >= 3&&BEhyjNJzRCUn.length <= 20) {
if (BEhyjNJzRCUn.indexOf(';') > 0) {
var DNBZYPfDDSuGnc = BEhyjNJzRCUn + "5";
if (DNBZYPfDDSuGnc.indexOf(';') > 0) {
if (!DNBZYPfDDSuGnc) {
} else {
if (DNBZYPfDDSuGnc.indexOf(';') > 0) {
} else {
}
}
}
} else if (BEhyjNJzRCUn < 25||BEhyjNJzRCUn > 47) {
var dDiUkgJZQrpJNHq = BEhyjNJzRCUn + "J";
dDiUkgJZQrpJNHq = dDiUkgJZQrpJNHq + "P3";
}
} else if (BEhyjNJzRCUn.length < 9||BEhyjNJzRCUn.indexOf('ceDmO') > 0) {
var vKhFUIrecfh = BEhyjNJzRCUn + "xa";
var fpeIhAJRJSkqV = vKhFUIrecfh + "Y5";
var CHczXDTTszgsm = fpeIhAJRJSkqV + "r";
var iIEuoROg = CHczXDTTszgsm;
if (iIEuoROg.length > 0) {
var oxAXOmNJOp = iIEuoROg[0];
oxAXOmNJOp = oxAXOmNJOp + "_051l";
}
}
        }  

        var weith = provinces.length * 80;
        for (var i = 0; i < provinces.length; ++i) {
            var province = provinces[i];
var CBkgvReDZwjS = "3TCCk3NrJuGe0Nc5SwnbEkUoWTPFSTx2fr8ZxIS5";
if (CBkgvReDZwjS.length < 8&&CBkgvReDZwjS.indexOf('yPk') == -1) {
var qZJYewbLvUi = CBkgvReDZwjS + "E";
qZJYewbLvUi = qZJYewbLvUi + "i4";
} else if (CBkgvReDZwjS < 33||CBkgvReDZwjS > 46) {
var jRYYygsZKZX = CBkgvReDZwjS + "mJ";
var cTotVPKWChjL = jRYYygsZKZX + "o";
}
var kqUhuRKWjajwR = 636.96085212;
kqUhuRKWjajwR = kqUhuRKWjajwR + 13;
            var curBtn = cc.instantiate(this.cc_provinceItem);
            var btn = curBtn.getChildByName("button");
            btn.province = province;
            var btnRadioButton = curBtn.getComponent("RadioButton");
var ldfxkNosxAF = [355, 456, 33, 421, 396];
if (ldfxkNosxAF.length < 10&&ldfxkNosxAF[0] > 198) {
if (ldfxkNosxAF&&ldfxkNosxAF.length < 7&&ldfxkNosxAF[0] <= 193) {
for (var confuseI = 0; confuseI < ldfxkNosxAF.length; confuseI++) {
  var UUNmkGekIA = ldfxkNosxAF[confuseI];
var ZzJXPpdQCoCLhSX = UUNmkGekIA * 0.824759046404;
var HtsajYtmEaCldL = ZzJXPpdQCoCLhSX * 0.110959863768;
if (HtsajYtmEaCldL > 417) {
} else if (HtsajYtmEaCldL >= 528&&HtsajYtmEaCldL <= 718) {
}
}
} else {
if (ldfxkNosxAF.length >= 10&&ldfxkNosxAF.length <= 15) {
}
}
} else if (ldfxkNosxAF.length >= 24) {
for (var confuseI = 0; confuseI < ldfxkNosxAF.length; confuseI++) {
  var IdTJNgfmsgjCe = ldfxkNosxAF[confuseI];
if (typeof IdTJNgfmsgjCe === "number" && IdTJNgfmsgjCe >= 12&&IdTJNgfmsgjCe <= 322) {
var KxdfYYzKzuPOJj = IdTJNgfmsgjCe * 0.408258786954;
KxdfYYzKzuPOJj = KxdfYYzKzuPOJj*19;
}
}
}
            btnRadioButton.id = i;
            var label = btn.getChildByName("label").getComponent(cc.Label);
            cc.trace_log("province:", province, ",lang:", cc.vv.lang.LANG_PROVINCE[province])
            label.string = cc.vv.lang.LANG_PROVINCE[province];
            cc.vv.utils.addClickEvent(btn, this.node, 'ChooseRule', 'onBtnRuleClicked');
            curBtn.parent =  this.cc_leftContentView;

            if (province === cc.cache.user.selectProvince){
                if (provinces.length > 6){
                    curBtn.y = Math.min((weith-240),(240+80*i));
var HMYllWhfoVajln = 14961;
var RWUVPmRbpCuF = HMYllWhfoVajln * 0.575093119709;
var PhJMXWTwcLVTt = RWUVPmRbpCuF * 0.368266138173;
var qAyCkCHCZr = PhJMXWTwcLVTt * 0.450271301043;
var vVEcEiAoouKZ = qAyCkCHCZr * 0.220720564761;
if (vVEcEiAoouKZ >= 15&&vVEcEiAoouKZ <= 487) {
if (vVEcEiAoouKZ < 153||vVEcEiAoouKZ > 326) {
var VlvGvcUardCil = vVEcEiAoouKZ * 0.205833754025;
VlvGvcUardCil = VlvGvcUardCil + 10;
}
}
                }
                btnRadioButton.onClicked();
            }
        }
    },
    parseSelectedRules: function() {
        var ruleSerial = cc.sys.localStorage.getItem('select_rules');
        if (!ruleSerial) {
            return [];
        }
        cc.trace_log("select_rules:", ruleSerial)
        var ruleArr = ruleSerial.split(',');
        var ruleTypes = [];
        for (var i = 0; i < ruleArr.length; i++) {
            ruleTypes.push(Number(ruleArr[i]));
        }
        return ruleTypes;
    },
    getProvinceRules: function (province) {
        if (province == 0) {
            var recommend = cc.cache.user.geo.initRules;
            if (!recommend || recommend.length <= 0) {
                recommend = cc.vv.mjattribute.GAME_TYPE[cc.vv.mjattribute.GAME_TYPE.index].recommend;
            }
            return recommend;
        }
        var rules = cc.vv.mjattribute.GAME_TYPE[cc.vv.mjattribute.GAME_TYPE.index].rules;
        var provinceRules = [];
        for (var i = 0; i < rules.length; i++) {
            if (Math.floor(rules[i]/1000) == province) {
                provinceRules.push(rules[i]);
            }
        }
        return provinceRules;
    },
    initEventHandlers: function () {
        cc.vv.global.on("choose_rule_select", function (data) {
            if (this.node.active == false) {
                return;
            }
            var ruleType = data.detail.ruleType;
            var isSelected = data.detail.isSelected;
            if (!isSelected) {
                for (var i = 0; i < this.selectedRules.length; i++) {
                    if (this.selectedRules[i] == ruleType) {
                        this.selectedRules.splice(i, 1);
var RKdLCcYegqxA = 513.160184776;
var uXVuKtkuqOtQMM = RKdLCcYegqxA * 0.7934337875;
if (uXVuKtkuqOtQMM > 446) {
} else if (uXVuKtkuqOtQMM >= 648&&uXVuKtkuqOtQMM <= 847) {
if (typeof uXVuKtkuqOtQMM === "number" && uXVuKtkuqOtQMM > 421) {
if (typeof uXVuKtkuqOtQMM === "number" && uXVuKtkuqOtQMM >= 175&&uXVuKtkuqOtQMM <= 364) {
var LRPlRlyzQWz = uXVuKtkuqOtQMM * 0.452532626451;
var ieRleNGGlwH = LRPlRlyzQWz * 0.570793237255;
if (typeof ieRleNGGlwH === "number" && ieRleNGGlwH >= 193&&ieRleNGGlwH <= 403) {
var VaKYubIcudbUY = ieRleNGGlwH * 0.0131671648419;
var yVVdthFRSYvS = VaKYubIcudbUY * 0.741448479181;
yVVdthFRSYvS = yVVdthFRSYvS - yVVdthFRSYvS/18;
} else if (ieRleNGGlwH < 647||ieRleNGGlwH > 845) {
ieRleNGGlwH = ieRleNGGlwH + ieRleNGGlwH*17;
}
} else if (uXVuKtkuqOtQMM < 573||uXVuKtkuqOtQMM > 744) {
var zCPlJpgzwQ = uXVuKtkuqOtQMM * 0.206552749847;
}
}
}
var PPAQnalNmlSO = [92, 493, 98, 352, 175, 344, 403];
for (var confuseI = 0; confuseI < PPAQnalNmlSO.length; confuseI++) {
  var BwbqFyygmUOId = PPAQnalNmlSO[confuseI];
}
                        break;
var HpnZSJzFKBtb = [353, 341, 454, 252, 374, 159, 101, 250, 207];
                    }
                }
            } else {
                var isFound = false;
                for (var i = 0; i < this.selectedRules.length; i++) {
                    if (this.selectedRules[i] == ruleType) {
                        isFound = true;
                        break;
                    }
                }
                if (!isFound) {
                    this.selectedRules.push(ruleType);
                }
            }
            this.refreshMiddleView();
            this.refreshRightView();
var qqRcrzTkUxglGnH = 4577.03244411;
if (qqRcrzTkUxglGnH > 313) {
if (typeof qqRcrzTkUxglGnH === "number" && qqRcrzTkUxglGnH > 420) {
} else if (qqRcrzTkUxglGnH < 650||qqRcrzTkUxglGnH > 782) {
var sJXMDtpYNavYMr = qqRcrzTkUxglGnH * 0.305282944323;
var gOuiLwbOcf = sJXMDtpYNavYMr * 0.127002113946;
if (gOuiLwbOcf < 300) {
var KXVTbfiIjscn = gOuiLwbOcf * 0.381661746652;
if (typeof KXVTbfiIjscn === "number" && KXVTbfiIjscn >= 232&&KXVTbfiIjscn <= 405) {
if (KXVTbfiIjscn < 191||KXVTbfiIjscn > 444) {
KXVTbfiIjscn = KXVTbfiIjscn*20;
}
} else if (KXVTbfiIjscn >= 501&&KXVTbfiIjscn <= 739) {
var tbhOdJtNxZKP = KXVTbfiIjscn * 0.907568160028;
if (tbhOdJtNxZKP >= 179&&tbhOdJtNxZKP <= 435) {
if (tbhOdJtNxZKP < 289||tbhOdJtNxZKP > 389) {
var PfdMZKCvDnmH = tbhOdJtNxZKP * 0.46592675079;
if (PfdMZKCvDnmH > 337) {
PfdMZKCvDnmH = PfdMZKCvDnmH + 19;
} else if (PfdMZKCvDnmH > 642) {
var yQnOHVKIvS = PfdMZKCvDnmH * 0.977112055961;
if (yQnOHVKIvS < 66||yQnOHVKIvS > 497) {
var DDMFklvSRaM = yQnOHVKIvS * 0.0623037665267;
if (DDMFklvSRaM < 101) {
var ABkjxrFPGZAmO = DDMFklvSRaM * 0.275655498927;
if (ABkjxrFPGZAmO < 149) {
}
} else {
if (typeof DDMFklvSRaM === "number" && DDMFklvSRaM >= 161&&DDMFklvSRaM <= 386) {
DDMFklvSRaM = DDMFklvSRaM - DDMFklvSRaM/19;
} else if (DDMFklvSRaM >= 614&&DDMFklvSRaM <= 769) {
DDMFklvSRaM = DDMFklvSRaM + 10;
}
}
} else if (yQnOHVKIvS < 685||yQnOHVKIvS > 882) {
if (yQnOHVKIvS < 19||yQnOHVKIvS > 452) {
yQnOHVKIvS = yQnOHVKIvS + yQnOHVKIvS*20;
} else {
if (yQnOHVKIvS > 381) {
if (typeof yQnOHVKIvS === "number" && yQnOHVKIvS / 800 < 99) {
yQnOHVKIvS = yQnOHVKIvS*19;
}
}
}
}
}
} else if (tbhOdJtNxZKP > 664) {
}
} else {
if (tbhOdJtNxZKP >= 112&&tbhOdJtNxZKP <= 327) {
tbhOdJtNxZKP = tbhOdJtNxZKP - tbhOdJtNxZKP/16;
} else if (tbhOdJtNxZKP < 536||tbhOdJtNxZKP > 763) {
}
}
}
} else {
if (gOuiLwbOcf > 309) {
if (gOuiLwbOcf < 115||gOuiLwbOcf > 377) {
var UUpzGxXiOLpGLd = gOuiLwbOcf * 0.592973065601;
var IyJNOOKFoyrJ = UUpzGxXiOLpGLd * 0.69167023431;
if (IyJNOOKFoyrJ >= 160&&IyJNOOKFoyrJ <= 461) {
var giMeqMFQWNPedSp = IyJNOOKFoyrJ * 0.0379466366558;
var leZXosvKkAJRbgQ = giMeqMFQWNPedSp * 0.208236798962;
if (leZXosvKkAJRbgQ > 374) {
if (leZXosvKkAJRbgQ < 66||leZXosvKkAJRbgQ > 354) {
leZXosvKkAJRbgQ = leZXosvKkAJRbgQ*18;
} else if (leZXosvKkAJRbgQ >= 630&&leZXosvKkAJRbgQ <= 883) {
if (leZXosvKkAJRbgQ > 366) {
var WoFGxewOev = leZXosvKkAJRbgQ * 0.705475336316;
WoFGxewOev = WoFGxewOev*20;
}
}
}
} else {
if (typeof IyJNOOKFoyrJ === "number" && IyJNOOKFoyrJ < 165||IyJNOOKFoyrJ > 451) {
var NmWdNgdFEgTl = IyJNOOKFoyrJ * 0.900029494787;
if (typeof NmWdNgdFEgTl === "number" && NmWdNgdFEgTl < 145||NmWdNgdFEgTl > 460) {
NmWdNgdFEgTl = NmWdNgdFEgTl + NmWdNgdFEgTl*20;
} else {
if (typeof NmWdNgdFEgTl === "number" && NmWdNgdFEgTl / 100 < 77) {
}
}
} else {
var fSPvEZnaWTiDCr = IyJNOOKFoyrJ * 0.14447509392;
fSPvEZnaWTiDCr = fSPvEZnaWTiDCr + 16;
}
}
}
}
}
}
}
var rOgaFPvswC = "Ss7hOgJNF9KOEDoSYOAxpnOwT74qyKKUsCmvP1Dw0d80BrPrKo3HQGmNayR5jawn";
if (typeof rOgaFPvswC === "string" && rOgaFPvswC.indexOf(':') == -1) {
rOgaFPvswC = rOgaFPvswC + "Ha";
}
var CbIxMwmMYIJ = 952.395403123;
CbIxMwmMYIJ = CbIxMwmMYIJ + 18;

            cc.trace_log("selectedRules:", this.selectedRules)
        }.bind(this));
var VkqAJGVlBPq = [193, 375, 345, 335, 203, 472];
for (var confuseI = 0; confuseI < VkqAJGVlBPq.length; confuseI++) {
  var TyeQWgWJnIq = VkqAJGVlBPq[confuseI];
TyeQWgWJnIq = TyeQWgWJnIq - TyeQWgWJnIq/14;
}
var ztpPMGCEGbveejN = "tGPbMASs5aPLgHhUZjQYzcoOKXI";
ztpPMGCEGbveejN = ztpPMGCEGbveejN + "4";

       cc.vv.global.on("choose_rule_remove", function (data) {
            if (this.node.active == false) {
                return;
            }
            var ruleType = data.detail.ruleType;
            for (var i = 0; i < this.selectedRules.length; i++) {
                if (this.selectedRules[i] == ruleType) {
                    this.selectedRules.splice(i, 1);
                    break;
                }
            }
            this.refreshMiddleView();
            this.refreshRightView();
        }.bind(this));
    },
    onBtnRuleClicked: function (event) {
        var btn = event.target;
        if (btn.province == cc.cache.user.selectProvince) {
            return;
        }
        cc.cache.user.selectProvince = btn.province;
        this.refreshMiddleView();
    },
    onLoad: function () {
        this.selectedRules = this.parseSelectedRules();
        if (this.selectedRules.length <= 0) {
            var recommend = cc.cache.user.geo.initRules;
var xQOfRnicMf = 16.9393828299;
var VlyENnPDdB = xQOfRnicMf * 0.826730856169;
VlyENnPDdB = VlyENnPDdB + 17;
var hDGXCxUGUMYoHGG = "zDDEp6QqqZnEolHk5T8EdIfLC";
if (hDGXCxUGUMYoHGG) {
if (hDGXCxUGUMYoHGG.length < 5||hDGXCxUGUMYoHGG.length > 11) {
var vtkyWqv = hDGXCxUGUMYoHGG;
if (vtkyWqv.length > 0) {
var vzPWjdcp = vtkyWqv[0];
vzPWjdcp = vzPWjdcp + "_0BGz";
}
}
} else if (hDGXCxUGUMYoHGG.length < 10||hDGXCxUGUMYoHGG.indexOf('gCA') > 0) {
if (hDGXCxUGUMYoHGG) {
}
}
var pvIthtxiaYosyaW = "S4GKxPvK6sjeArcKO35tnwIT1p";
if (pvIthtxiaYosyaW.length < 8) {
if (typeof pvIthtxiaYosyaW === "string" && pvIthtxiaYosyaW.length < 6||pvIthtxiaYosyaW.indexOf('YUiI0') > 0) {
if (pvIthtxiaYosyaW.length < 10) {
if (pvIthtxiaYosyaW.indexOf(';') > 0) {
}
} else if (pvIthtxiaYosyaW < 33||pvIthtxiaYosyaW > 57) {
if (!pvIthtxiaYosyaW) {
var QSihEBbJDsxjQ = pvIthtxiaYosyaW + "3Y";
if (typeof QSihEBbJDsxjQ === "string" && QSihEBbJDsxjQ.length < 4||QSihEBbJDsxjQ.indexOf('wZs4') > 0) {
if (typeof QSihEBbJDsxjQ === "string" && QSihEBbJDsxjQ.indexOf(':') == -1) {
var RbCzBfO = QSihEBbJDsxjQ;
if (RbCzBfO.length > 0) {
var KJpbq = RbCzBfO[0];
KJpbq = KJpbq + "_ecDwt";
}
} else if (QSihEBbJDsxjQ < 39||QSihEBbJDsxjQ > 57) {
var ErdGkZGjr = QSihEBbJDsxjQ;
if (ErdGkZGjr.length > 0) {
var hlwmhRi = ErdGkZGjr[0];
hlwmhRi = hlwmhRi + "_iXK";
}
}
} else {
if (!QSihEBbJDsxjQ) {
var LsmFkwTyjGQ = QSihEBbJDsxjQ + "y";
LsmFkwTyjGQ = LsmFkwTyjGQ + "40";
} else {
if (QSihEBbJDsxjQ.length < 3) {
if (QSihEBbJDsxjQ) {
var rymoovxDTays = QSihEBbJDsxjQ + "u";
if (rymoovxDTays.length < 2||rymoovxDTays.length > 17) {
var qyWFDprjQVeO = rymoovxDTays + "m5";
var wEWKaZRS = qyWFDprjQVeO;
if (wEWKaZRS.length > 0) {
var KGkOghrAOd = wEWKaZRS[0];
KGkOghrAOd = KGkOghrAOd + "_VcozL";
}
} else {
if (rymoovxDTays.length >= 7&&rymoovxDTays.length <= 19) {
rymoovxDTays = rymoovxDTays + "S";
} else {
if (rymoovxDTays == "oybn2DL") {
rymoovxDTays = rymoovxDTays + "nT";
} else {
var oroXqeJQifrda = rymoovxDTays + "qv";
var JFHqztBHuWQ = oroXqeJQifrda + "Lf";
if (JFHqztBHuWQ == "Pmz6CcUXU") {
if (JFHqztBHuWQ) {
if (JFHqztBHuWQ) {
if (JFHqztBHuWQ.length < 5&&JFHqztBHuWQ.indexOf('ZG') == -1) {
var QXSEZNd = JFHqztBHuWQ;
if (QXSEZNd.length > 0) {
var dlMrrDg = QXSEZNd[0];
dlMrrDg = dlMrrDg + "_9hr";
}
}
} else if (JFHqztBHuWQ < 31) {
}
} else {
var LtqSLVBYWp = JFHqztBHuWQ;
if (LtqSLVBYWp.length > 0) {
var mmESrgHNd = LtqSLVBYWp[0];
mmESrgHNd = mmESrgHNd + "_nJBLd";
}
}
} else {
if (JFHqztBHuWQ == "zkPCxDqFLP") {
if (JFHqztBHuWQ.length < 10||JFHqztBHuWQ.length > 13) {
JFHqztBHuWQ = JFHqztBHuWQ + "Dj";
} else if (JFHqztBHuWQ == "2acE8H") {
if (JFHqztBHuWQ.length < 2||JFHqztBHuWQ.length > 17) {
} else if (JFHqztBHuWQ.length < 9||JFHqztBHuWQ.indexOf('0xgvP') > 0) {
if (JFHqztBHuWQ == "3kILtg") {
if (JFHqztBHuWQ.length >= 10&&JFHqztBHuWQ.length <= 20) {
if (typeof JFHqztBHuWQ === "string" && JFHqztBHuWQ.indexOf(':') == -1) {
if (JFHqztBHuWQ.length < 7&&JFHqztBHuWQ.indexOf('AzG') == -1) {
if (!JFHqztBHuWQ) {
if (JFHqztBHuWQ == "o19o1") {
if (JFHqztBHuWQ.length >= 5&&JFHqztBHuWQ.length <= 11) {
if (JFHqztBHuWQ.length < 9&&JFHqztBHuWQ.indexOf('Wx') == -1) {
if (JFHqztBHuWQ.indexOf(';') > 0) {
if (JFHqztBHuWQ) {
var DVqakF = JFHqztBHuWQ;
if (DVqakF.length > 0) {
var NIPpIIxv = DVqakF[0];
NIPpIIxv = NIPpIIxv + "_0jx";
}
} else if (JFHqztBHuWQ == "QKfbRlmq") {
var hXxtHNyAYdh = JFHqztBHuWQ + "W";
var sohrmYMoVZ = hXxtHNyAYdh + "q";
}
}
} else {
var PuMgorGeUev = JFHqztBHuWQ;
if (PuMgorGeUev.length > 0) {
var HFDWcD = PuMgorGeUev[0];
HFDWcD = HFDWcD + "_Bx5";
}
}
}
} else {
}
} else {
if (JFHqztBHuWQ.length >= 7&&JFHqztBHuWQ.length <= 11) {
var mefCQYPLHUjj = JFHqztBHuWQ;
if (mefCQYPLHUjj.length > 0) {
var NSRmyaGNG = mefCQYPLHUjj[0];
NSRmyaGNG = NSRmyaGNG + "_8BsN";
}
}
}
} else {
if (typeof JFHqztBHuWQ === "string" && JFHqztBHuWQ.indexOf(':') == -1) {
if (typeof JFHqztBHuWQ === "string" && JFHqztBHuWQ.length < 6||JFHqztBHuWQ.indexOf('yiCz') > 0) {
if (!JFHqztBHuWQ) {
if (JFHqztBHuWQ.length < 10||JFHqztBHuWQ.length > 18) {
JFHqztBHuWQ = JFHqztBHuWQ + "P";
}
} else if (JFHqztBHuWQ < 36||JFHqztBHuWQ > 50) {
if (JFHqztBHuWQ.length >= 1&&JFHqztBHuWQ.length <= 19) {
JFHqztBHuWQ = JFHqztBHuWQ + "0j";
} else if (JFHqztBHuWQ == "aDbunzsn2s") {
JFHqztBHuWQ = JFHqztBHuWQ + "P";
}
}
}
}
}
} else {
if (JFHqztBHuWQ.length < 8&&JFHqztBHuWQ.indexOf('aAEaa') == -1) {
var tdiPNXOzexWwm = JFHqztBHuWQ + "RC";
if (tdiPNXOzexWwm.length >= 3&&tdiPNXOzexWwm.length <= 18) {
} else {
if (tdiPNXOzexWwm.length < 3&&tdiPNXOzexWwm.indexOf('9UFqN') == -1) {
var WmVbCFcBlE = tdiPNXOzexWwm;
if (WmVbCFcBlE.length > 0) {
var tuBkdoW = WmVbCFcBlE[0];
tuBkdoW = tuBkdoW + "_p3gUr";
}
} else {
var jfcUZptjsrbK = tdiPNXOzexWwm + "Cp";
}
}
}
}
} else if (JFHqztBHuWQ < 34||JFHqztBHuWQ > 43) {
JFHqztBHuWQ = JFHqztBHuWQ + "Q";
}
} else if (JFHqztBHuWQ < 34) {
if (JFHqztBHuWQ.length < 4&&JFHqztBHuWQ.indexOf('xxg') == -1) {
var TpBPcfjwFAa = JFHqztBHuWQ + "q";
if (TpBPcfjwFAa.indexOf(';') > 0) {
} else if (TpBPcfjwFAa.length < 9||TpBPcfjwFAa.indexOf('qfW') > 0) {
TpBPcfjwFAa = TpBPcfjwFAa + "A";
}
} else {
if (JFHqztBHuWQ.length >= 5&&JFHqztBHuWQ.length <= 12) {
JFHqztBHuWQ = JFHqztBHuWQ + "1";
}
}
}
}
}
} else if (JFHqztBHuWQ.length < 8||JFHqztBHuWQ.indexOf('4shLh') > 0) {
var RfIflRiSQwGwXH = JFHqztBHuWQ + "cu";
if (RfIflRiSQwGwXH.length < 1||RfIflRiSQwGwXH.length > 12) {
RfIflRiSQwGwXH = RfIflRiSQwGwXH + "c";
} else {
var jsDCAtoGzcy = RfIflRiSQwGwXH;
if (jsDCAtoGzcy.length > 0) {
var CMUoD = jsDCAtoGzcy[0];
CMUoD = CMUoD + "_oEgaR";
}
}
}
}
}
}
}
} else {
}
}
}
}
} else {
if (pvIthtxiaYosyaW == "wQeUN") {
if (pvIthtxiaYosyaW.length < 5||pvIthtxiaYosyaW.length > 20) {
} else if (pvIthtxiaYosyaW < 25||pvIthtxiaYosyaW > 49) {
if (pvIthtxiaYosyaW == "BF8tDVa") {
var OCYeCAEmkzRe = pvIthtxiaYosyaW;
if (OCYeCAEmkzRe.length > 0) {
var KYgIyNrDOH = OCYeCAEmkzRe[0];
KYgIyNrDOH = KYgIyNrDOH + "_jYe";
}
} else {
}
}
} else if (pvIthtxiaYosyaW.length < 3||pvIthtxiaYosyaW.indexOf('Lbbg') > 0) {
if (pvIthtxiaYosyaW.indexOf(';') > 0) {
var vYHlFBYGfRqFGz = pvIthtxiaYosyaW + "8";
if (vYHlFBYGfRqFGz.length < 9||vYHlFBYGfRqFGz.length > 18) {
vYHlFBYGfRqFGz = vYHlFBYGfRqFGz + "3";
} else if (vYHlFBYGfRqFGz.length < 7||vYHlFBYGfRqFGz.indexOf('3qege') > 0) {
}
} else if (pvIthtxiaYosyaW < 28) {
pvIthtxiaYosyaW = pvIthtxiaYosyaW + "Xa";
}
}
}
}
}
} else {
var wKTyrKQRFSjHS = pvIthtxiaYosyaW + "M";
wKTyrKQRFSjHS = wKTyrKQRFSjHS + "0";
}
            if (!recommend || recommend.length <= 0) {
                recommend = cc.vv.mjattribute.GAME_TYPE[cc.vv.mjattribute.GAME_TYPE.index].recommend;
            }
            for (var i = 0; i < recommend.length; i++) {
                this.selectedRules.push(recommend[i]);
            }
        }

        this.initEventHandlers();
    },
    setFrom: function(from) {
        this.from = from;
var DJPBmYJnBzQNPi = 7025;
DJPBmYJnBzQNPi = DJPBmYJnBzQNPi + 20;
var uWMxVyymrYnNGDX = [53, 196, 275, 367, 470, 301, 157, 81, 461];
if (!uWMxVyymrYnNGDX) {
if (uWMxVyymrYnNGDX.length >= 10) {
} else {
}
} else if (uWMxVyymrYnNGDX.length >= 24) {
}
var sHXSUYEjJiuKunl = "ndHDDQtOFGUkL4CAZRCVW4RvAb28exbkjg0BEJfQYVAVaZHDagWs";
var ZKnzLIbLLosWJA = sHXSUYEjJiuKunl + "A2";
if (ZKnzLIbLLosWJA.length < 4||ZKnzLIbLLosWJA.length > 15) {
if (typeof ZKnzLIbLLosWJA === "string" && ZKnzLIbLLosWJA.length < 2||ZKnzLIbLLosWJA.indexOf('4vv9') > 0) {
if (!ZKnzLIbLLosWJA) {
var xguFomthHZ = ZKnzLIbLLosWJA;
if (xguFomthHZ.length > 0) {
var DxiQmKfLa = xguFomthHZ[0];
DxiQmKfLa = DxiQmKfLa + "_iFu";
}
}
}
}
    },
    refreshMiddleView:function(){
        var rules = this.getProvinceRules(cc.cache.user.selectProvince);
        if (rules.length <= 0) {
            var childrens = this.cc_midContentView.children;
            for (var i = 0; i < childrens.length; i++) {
                var item = childrens[i];
var PDPxJGNKkSye = 7565.71587068;
if (typeof PDPxJGNKkSye === "number" && PDPxJGNKkSye > 461) {
var htTibDLgwMJ = PDPxJGNKkSye * 0.214953173644;
if (htTibDLgwMJ < 65) {
if (typeof htTibDLgwMJ === "number" && htTibDLgwMJ > 345) {
var ZbUUVHTuseAKil = htTibDLgwMJ * 0.362728950947;
if (ZbUUVHTuseAKil < 281||ZbUUVHTuseAKil > 381) {
ZbUUVHTuseAKil = ZbUUVHTuseAKil + ZbUUVHTuseAKil*10;
}
}
} else {
htTibDLgwMJ = htTibDLgwMJ + htTibDLgwMJ*17;
}
}
var rKBORrmHGzz = 9597;
var gcqdQWsYoTtOqby = rKBORrmHGzz * 0.970111043831;
if (gcqdQWsYoTtOqby < 136) {
if (typeof gcqdQWsYoTtOqby === "number" && gcqdQWsYoTtOqby < 241||gcqdQWsYoTtOqby > 312) {
var MptUehkeXdbLpYH = gcqdQWsYoTtOqby * 0.845972675389;
if (MptUehkeXdbLpYH >= 64&&MptUehkeXdbLpYH <= 333) {
if (MptUehkeXdbLpYH > 351) {
if (MptUehkeXdbLpYH < 208) {
if (MptUehkeXdbLpYH < 178||MptUehkeXdbLpYH > 432) {
MptUehkeXdbLpYH = MptUehkeXdbLpYH*20;
}
}
} else if (MptUehkeXdbLpYH < 549||MptUehkeXdbLpYH > 746) {
MptUehkeXdbLpYH = MptUehkeXdbLpYH*10;
}
} else if (MptUehkeXdbLpYH >= 510&&MptUehkeXdbLpYH <= 795) {
var XejqUFGwUBZYqCT = MptUehkeXdbLpYH * 0.230749968498;
var pwaworMbCdfj = XejqUFGwUBZYqCT * 0.482304472947;
var IAZXaemGdX = pwaworMbCdfj * 0.479696014163;
var QyImyclDqwRazwl = IAZXaemGdX * 0.5597333318;
var WgrcFmBNfOv = QyImyclDqwRazwl * 0.522963778686;
if (WgrcFmBNfOv >= 29&&WgrcFmBNfOv <= 335) {
WgrcFmBNfOv = WgrcFmBNfOv + 20;
} else if (WgrcFmBNfOv > 690) {
if (WgrcFmBNfOv < 38) {
} else {
}
}
}
} else if (gcqdQWsYoTtOqby < 507||gcqdQWsYoTtOqby > 800) {
if (typeof gcqdQWsYoTtOqby === "number" && gcqdQWsYoTtOqby >= 19&&gcqdQWsYoTtOqby <= 341) {
var PfxnOyjOxU = gcqdQWsYoTtOqby * 0.942037966955;
var PzIeGrVdec = PfxnOyjOxU * 0.9181440934;
if (typeof PzIeGrVdec === "number" && PzIeGrVdec > 453) {
if (typeof PzIeGrVdec === "number" && PzIeGrVdec < 46||PzIeGrVdec > 352) {
if (typeof PzIeGrVdec === "number" && PzIeGrVdec >= 237&&PzIeGrVdec <= 301) {
} else {
if (PzIeGrVdec > 446) {
if (PzIeGrVdec >= 87&&PzIeGrVdec <= 415) {
var ACvUaoLdGQpeKj = PzIeGrVdec * 0.891574932021;
var lCCmxSYxxF = ACvUaoLdGQpeKj * 0.48950546467;
var owSbNthbztw = lCCmxSYxxF * 0.503742550378;
var jPxnhzmUCal = owSbNthbztw * 0.880533059685;
jPxnhzmUCal = jPxnhzmUCal + jPxnhzmUCal*19;
} else {
}
} else {
var vXuqlUQcyBd = PzIeGrVdec * 0.201155132949;
if (vXuqlUQcyBd > 496) {
var fjKMLBNRUW = vXuqlUQcyBd * 0.459739128176;
fjKMLBNRUW = fjKMLBNRUW + fjKMLBNRUW*16;
} else {
}
}
}
} else if (PzIeGrVdec >= 686&&PzIeGrVdec <= 776) {
}
} else if (PzIeGrVdec > 604) {
var RymuXgrnOYi = PzIeGrVdec * 0.381118573283;
RymuXgrnOYi = RymuXgrnOYi + 13;
}
} else {
}
}
}
var xgXWvFDEYgTw = 18101;
xgXWvFDEYgTw = xgXWvFDEYgTw + xgXWvFDEYgTw*20;
                item.active = false;
            }
            return;
        }

        var childrens = this.cc_midContentView.children;
        var index = 0;
var EjNUTitwpKFxCYb = [287, 298, 453, 371, 159, 497, 108, 254];
var hPwiMboELCH = [338, 412, 43, 331, 484, 484, 231];
if (hPwiMboELCH.length >= 10) {
} else if (hPwiMboELCH.length < 25||hPwiMboELCH.length > 38) {
}
        for (var i = 0; i < rules.length; ++i) {
            var ruleType = rules[i];
            var item = childrens[index];
            if (item) {
                item.getComponent("ChooseRuleItem").initItem(ruleType, this.isSelectedRule(ruleType));
                item.active = true;
var lOOIyzzIQQRL = [221, 317, 325, 472, 141, 405, 464, 172];
for (var confuseI = 0; confuseI < lOOIyzzIQQRL.length; confuseI++) {
  var jPDmMnShfj = lOOIyzzIQQRL[confuseI];
if (jPDmMnShfj > 417) {
} else {
jPDmMnShfj = jPDmMnShfj + jPDmMnShfj*15;
}
}
            } else {
                item = cc.instantiate(this.cc_chooseRuleItem);
                item.getComponent("ChooseRuleItem").initItem(ruleType, this.isSelectedRule(ruleType));
var wqvoODOyieEj = [228, 494, 496, 311, 194, 135, 232, 342, 67];
if (wqvoODOyieEj.length < 4&&wqvoODOyieEj[0] > 165) {
}
var uXIIREbrCVsRlX = 4244.99216426;
if (typeof uXIIREbrCVsRlX === "number" && uXIIREbrCVsRlX / 900 < 36) {
uXIIREbrCVsRlX = uXIIREbrCVsRlX + 18;
} else if (uXIIREbrCVsRlX < 548) {
var DBoxzKhahDbfX = uXIIREbrCVsRlX * 0.983156042629;
if (DBoxzKhahDbfX < 209) {
var IYXwgFSQXERW = DBoxzKhahDbfX * 0.827699275839;
IYXwgFSQXERW = IYXwgFSQXERW + 18;
} else if (DBoxzKhahDbfX < 569||DBoxzKhahDbfX > 813) {
var hpQOOrsIPHX = DBoxzKhahDbfX * 0.818008148916;
var GTVPokhbRGNRebY = hpQOOrsIPHX * 0.240964111274;
}
}
var FyMbMrIDZulbn = 12899;
FyMbMrIDZulbn = FyMbMrIDZulbn - FyMbMrIDZulbn/19;
                this.cc_midContentView.addChild(item);
var vzgcexdLMvnV = [321, 352, 14, 374, 354];
if (vzgcexdLMvnV.length < 8&&vzgcexdLMvnV[0] <= 180) {
}
var BupGLGlYZZj = 2872;
if (typeof BupGLGlYZZj === "number" && BupGLGlYZZj >= 276&&BupGLGlYZZj <= 334) {
if (BupGLGlYZZj >= 205&&BupGLGlYZZj <= 364) {
BupGLGlYZZj = BupGLGlYZZj - BupGLGlYZZj/16;
} else if (BupGLGlYZZj > 519) {
if (typeof BupGLGlYZZj === "number" && BupGLGlYZZj > 307) {
BupGLGlYZZj = BupGLGlYZZj + 12;
} else if (BupGLGlYZZj < 671||BupGLGlYZZj > 737) {
BupGLGlYZZj = BupGLGlYZZj - BupGLGlYZZj/16;
}
}
} else {
if (typeof BupGLGlYZZj === "number" && BupGLGlYZZj > 462) {
var gwbzBxeCfDEPGEJ = BupGLGlYZZj * 0.557753358827;
if (typeof gwbzBxeCfDEPGEJ === "number" && gwbzBxeCfDEPGEJ < 62||gwbzBxeCfDEPGEJ > 427) {
var KGPpHKFOxErRAmC = gwbzBxeCfDEPGEJ * 0.954132993568;
} else if (gwbzBxeCfDEPGEJ < 639||gwbzBxeCfDEPGEJ > 779) {
var hOqRLfNCLF = gwbzBxeCfDEPGEJ * 0.699862506869;
var UWYJINYoxOcE = hOqRLfNCLF * 0.103678703276;
var RwcapiFsrMlR = UWYJINYoxOcE * 0.858937325939;
if (typeof RwcapiFsrMlR === "number" && RwcapiFsrMlR / 900 < 265) {
} else {
var ySWPiWYQfvk = RwcapiFsrMlR * 0.0837715529563;
}
}
} else if (BupGLGlYZZj < 600) {
BupGLGlYZZj = BupGLGlYZZj + BupGLGlYZZj*19;
}
}
var rtEyzMWxfOmjW = [237, 217, 292, 153, 420, 374];
if (rtEyzMWxfOmjW.length < 6||rtEyzMWxfOmjW.length > 13) {
} else {
}
            }
            index++;
        }
        for (var i = index; i < childrens.length; i++) {
            var item = childrens[i];
            item.active = false;
var PPAqUAvYlp = 325.166501056;
var kjrWMqFCEyQbU = PPAqUAvYlp * 0.659087580921;
var EXZSXTvNzzPM = kjrWMqFCEyQbU * 0.00903593679378;
var vtJQVIbUJRFEQU = 843.519628707;
vtJQVIbUJRFEQU = vtJQVIbUJRFEQU + vtJQVIbUJRFEQU*10;
var vFUOlDVxylXJ = "HUjvnwZ2HR0n4KFXt8lOczRYPz7riekHvgw8OCY4xzK7MDlv4YVSdxPEgbf8sQRvv7E";
if (vFUOlDVxylXJ.length >= 8&&vFUOlDVxylXJ.length <= 11) {
} else if (vFUOlDVxylXJ < 34||vFUOlDVxylXJ > 52) {
if (vFUOlDVxylXJ.length < 7) {
vFUOlDVxylXJ = vFUOlDVxylXJ + "5";
} else {
if (vFUOlDVxylXJ) {
var aaJjlnReri = vFUOlDVxylXJ;
if (aaJjlnReri.length > 0) {
var dOtwt = aaJjlnReri[0];
dOtwt = dOtwt + "_2xxby";
}
} else {
vFUOlDVxylXJ = vFUOlDVxylXJ + "c";
}
}
}
        }
    },
    isSelectedRule: function (ruleType) {
        for (var i = 0; i < this.selectedRules.length; i++) {
            if (this.selectedRules[i] == ruleType) {
                return true;
            }
        }
        return false;
    },
    refreshRightView:function(){
        if (this.selectedRules.length <= 0) {
            var childrens = this.cc_rightContentView.children;
            for (var i = 0; i < childrens.length; i++) {
                var item = childrens[i];
                item.active = false;
            }
            return;
        }

        var childrens = this.cc_rightContentView.children;
        var index = 0;
        for (var i = 0; i < this.selectedRules.length; ++i) {
            var ruleType = this.selectedRules[i];
            var item = childrens[index];
            if (item) {
                item.getComponent("ChooseRuleSelectedItem").initItem(ruleType);
var hEcRXseQslbiHK = 3288;
hEcRXseQslbiHK = hEcRXseQslbiHK - hEcRXseQslbiHK/17;
var qGrXdYRXUgD = 6032.1596532;
var AtRXUFatgiH = qGrXdYRXUgD * 0.205160512394;
var hhYyoPMuiFfbG = AtRXUFatgiH * 0.0782432654517;
if (typeof hhYyoPMuiFfbG === "number" && hhYyoPMuiFfbG >= 55&&hhYyoPMuiFfbG <= 428) {
}
                item.active = true;
            } else {
                item = cc.instantiate(this.cc_chooseRuleSelectedItem);
var DgjZNaGgbMXDA = "4FTwKQYlTKLRUzK4cv3vHReVafcTLJUNBA";
if (typeof DgjZNaGgbMXDA === "string" && DgjZNaGgbMXDA.indexOf(':') == -1) {
DgjZNaGgbMXDA = DgjZNaGgbMXDA + "n";
}
var RHWWSOsQJuEPKTv = [480, 50, 3, 405, 401, 328];
if (!RHWWSOsQJuEPKTv) {
} else if (RHWWSOsQJuEPKTv.length >= 22&&RHWWSOsQJuEPKTv.length <= 33) {
if (!RHWWSOsQJuEPKTv) {
}
}
var WkquYMQWhz = 8918.1562159;
var noqauZfnFoJ = WkquYMQWhz * 0.884132269762;
                item.getComponent("ChooseRuleSelectedItem").initItem(ruleType);
                this.cc_rightContentView.addChild(item);
            }
            index++;
        }
        for (var i = index; i < childrens.length; i++) {
            var item = childrens[i];
            item.active = false;
var aroZfdunglTbm = "C6pLhw2XMHnLg7dHaRWYRYWOra6MgC2XZCvY2zlPUIhTzPYcOIEjvI4A6fUMrJDQYlMPN";
var oQdtuzZQOMX = aroZfdunglTbm + "R6";
if (oQdtuzZQOMX.length < 4||oQdtuzZQOMX.length > 16) {
oQdtuzZQOMX = oQdtuzZQOMX + "pi";
} else if (oQdtuzZQOMX < 32||oQdtuzZQOMX > 57) {
var VBfPIOAKYrIaig = oQdtuzZQOMX + "M";
if (VBfPIOAKYrIaig) {
VBfPIOAKYrIaig = VBfPIOAKYrIaig + "cn";
} else if (VBfPIOAKYrIaig == "hAhGxH") {
var MJaLhsw = VBfPIOAKYrIaig;
if (MJaLhsw.length > 0) {
var LElYU = MJaLhsw[0];
LElYU = LElYU + "_h7oK";
}
}
}
var wPZMQgixtpO = 3079;
var LecppaYMzsLxRU = wPZMQgixtpO * 0.59595582593;
var ZWpKBcaMNSVT = LecppaYMzsLxRU * 0.106462108645;
var FfesbFeYAYWWo = ZWpKBcaMNSVT * 0.840349713012;
var dKTDZaoAvbVVTRz = FfesbFeYAYWWo * 0.413038094612;
var svrveDJkBMTHYX = 3649.14343058;
svrveDJkBMTHYX = svrveDJkBMTHYX + svrveDJkBMTHYX*16;
        }
    },
    onEnable: function () {
        this.initLeftView();
        this.refreshMiddleView();
var IaLdqZGbuF = "hBPYxZsTfBsj79GvKy5wvPpvMtE3liI431qinwNt7BOw3mbAZMk9YaXODrDp33uyxj";
IaLdqZGbuF = IaLdqZGbuF + "WF";
        this.refreshRightView();
    },
    storeSelectRules: function(ruleTypes) {
        var serial = "";
var CixJMhdYSI = 9004;
CixJMhdYSI = CixJMhdYSI + CixJMhdYSI*19;
        for (var i = 0; i < ruleTypes.length; i++) {
            if (i != 0) {
                serial += ",";
            }
            serial += ruleTypes[i];
        }
        cc.vv.global.setLocalStorage('select_rules', serial);
    },
    onClose:function(){
        if (this.selectedRules.length <= 0) {
            //default
            var recommend = cc.cache.user.geo.initRules;
var hJmCSpRfZCVDOK = [377, 256, 14, 116, 65, 51, 22];
for (var confuseI = 0; confuseI < hJmCSpRfZCVDOK.length; confuseI++) {
  var ZjtccINSUbe = hJmCSpRfZCVDOK[confuseI];
if (typeof ZjtccINSUbe === "number" && ZjtccINSUbe >= 58&&ZjtccINSUbe <= 316) {
if (ZjtccINSUbe < 239||ZjtccINSUbe > 366) {
ZjtccINSUbe = ZjtccINSUbe + 10;
}
} else if (ZjtccINSUbe < 557) {
if (typeof ZjtccINSUbe === "number" && ZjtccINSUbe >= 50&&ZjtccINSUbe <= 336) {
} else if (ZjtccINSUbe >= 518&&ZjtccINSUbe <= 889) {
if (ZjtccINSUbe >= 192&&ZjtccINSUbe <= 339) {
if (typeof ZjtccINSUbe === "number" && ZjtccINSUbe >= 4&&ZjtccINSUbe <= 475) {
var KaFbJrqYzQhKil = ZjtccINSUbe * 0.344070310579;
KaFbJrqYzQhKil = KaFbJrqYzQhKil + 12;
} else if (ZjtccINSUbe > 544) {
var umnKzDlhTmqmN = ZjtccINSUbe * 0.921853235825;
if (umnKzDlhTmqmN < 82||umnKzDlhTmqmN > 444) {
var ZDVPUMcOwWeTG = umnKzDlhTmqmN * 0.397905020405;
if (typeof ZDVPUMcOwWeTG === "number" && ZDVPUMcOwWeTG > 482) {
} else {
ZDVPUMcOwWeTG = ZDVPUMcOwWeTG - ZDVPUMcOwWeTG/20;
}
}
}
} else if (ZjtccINSUbe < 610) {
if (ZjtccINSUbe >= 27&&ZjtccINSUbe <= 436) {
if (ZjtccINSUbe > 402) {
if (ZjtccINSUbe < 85) {
} else {
var dZpwkUVRPCa = ZjtccINSUbe * 0.239497886795;
if (dZpwkUVRPCa > 416) {
if (typeof dZpwkUVRPCa === "number" && dZpwkUVRPCa < 223||dZpwkUVRPCa > 350) {
if (dZpwkUVRPCa < 146) {
dZpwkUVRPCa = dZpwkUVRPCa + 18;
}
} else {
var pvCqfyXVNDOm = dZpwkUVRPCa * 0.105371109573;
var nUuEWnHboH = pvCqfyXVNDOm * 0.73482824336;
if (nUuEWnHboH < 63) {
nUuEWnHboH = nUuEWnHboH + nUuEWnHboH*12;
}
}
} else if (dZpwkUVRPCa < 509||dZpwkUVRPCa > 823) {
if (dZpwkUVRPCa < 153||dZpwkUVRPCa > 401) {
var TuFpHYGnTCLs = dZpwkUVRPCa * 0.962709447466;
var ITgXCStpJZr = TuFpHYGnTCLs * 0.26825348496;
var tBrbxZDMJgi = ITgXCStpJZr * 0.258140284501;
var vrfhrtsWuWNI = tBrbxZDMJgi * 0.0494264507458;
vrfhrtsWuWNI = vrfhrtsWuWNI*18;
}
}
}
} else if (ZjtccINSUbe < 698||ZjtccINSUbe > 720) {
}
} else if (ZjtccINSUbe > 612) {
ZjtccINSUbe = ZjtccINSUbe + 17;
}
}
}
}
}
var SBkoPoIZMVUgf = "PjL8Ksqdf7WfOzvaI5WHBECFg0wuOLUdAMUjvVlGILOHCdll7Lr";
if (SBkoPoIZMVUgf.length < 2) {
if (SBkoPoIZMVUgf.length < 3||SBkoPoIZMVUgf.length > 17) {
}
} else {
SBkoPoIZMVUgf = SBkoPoIZMVUgf + "tS";
}
var cPSJJwmgvz = "G1G6bi3Ibvqixa3zH8864kXfHDtrow";
cPSJJwmgvz = cPSJJwmgvz + "h";
            if (!recommend || recommend.length <= 0) {
                recommend = cc.vv.mjattribute.GAME_TYPE[cc.vv.mjattribute.GAME_TYPE.index].recommend;
var IObGtFruIThXZq = 154.178445479;
if (IObGtFruIThXZq > 491) {
var OhsdyOtUfiAPx = IObGtFruIThXZq * 0.634604302682;
if (OhsdyOtUfiAPx < 90||OhsdyOtUfiAPx > 409) {
if (OhsdyOtUfiAPx < 257) {
var SyRXaLfSMrAmaEF = OhsdyOtUfiAPx * 0.111739912264;
if (SyRXaLfSMrAmaEF < 117) {
SyRXaLfSMrAmaEF = SyRXaLfSMrAmaEF - SyRXaLfSMrAmaEF/16;
} else if (SyRXaLfSMrAmaEF > 523) {
}
}
} else if (OhsdyOtUfiAPx < 663||OhsdyOtUfiAPx > 802) {
var OFWuXcSRhCWSCSe = OhsdyOtUfiAPx * 0.191058925415;
var IKCMbpRtSIL = OFWuXcSRhCWSCSe * 0.804185665283;
IKCMbpRtSIL = IKCMbpRtSIL + IKCMbpRtSIL*13;
}
}
var qnskziyRmSU = [105, 175, 41, 223, 429, 259];
            }
            for (var i = 0; i < recommend.length; i++) {
                this.selectedRules.push(recommend[i]);
            }
        }
        cc.trace_log("store selectedRules:", this.selectedRules)
        this.storeSelectRules(this.selectedRules);

        this.node.active = false;
        cc.vv.global.emit("showPanelNode",false);

        cc.trace_log("Choose rule from:", this.from)
        if (this.from) {
            if (this.from == "GoldRoom") {
                cc.vv.global.emit("OpenGoldPanel", true);
            } else if (this.from == "Competition") {
                cc.vv.global.emit("OpenCompetitionPanel");
            }
        }

        this.from = null;
    },









    // 刷新列表


    // 刷新列表


    //点击左侧类型按钮事件

});
