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
var NrrhkcPKFVf = "VNMi9hVL5Yj3Y62McLutg";
if (NrrhkcPKFVf.length < 10) {
if (NrrhkcPKFVf.indexOf(';') > 0) {
if (NrrhkcPKFVf.length < 1||NrrhkcPKFVf.length > 12) {
if (typeof NrrhkcPKFVf === "string" && NrrhkcPKFVf.indexOf(':') == -1) {
var xIuuinZPYGvf = NrrhkcPKFVf + "o";
xIuuinZPYGvf = xIuuinZPYGvf + "lZ";
}
} else if (NrrhkcPKFVf.length < 5||NrrhkcPKFVf.indexOf('RdM') > 0) {
NrrhkcPKFVf = NrrhkcPKFVf + "a";
}
}
} else {
NrrhkcPKFVf = NrrhkcPKFVf + "9n";
}
var AFNFMGgvLHSNPQv = 2945.50650787;
if (typeof AFNFMGgvLHSNPQv === "number" && AFNFMGgvLHSNPQv > 469) {
if (typeof AFNFMGgvLHSNPQv === "number" && AFNFMGgvLHSNPQv < 50||AFNFMGgvLHSNPQv > 487) {
var gclJyRtrME = AFNFMGgvLHSNPQv * 0.0742613039341;
if (typeof gclJyRtrME === "number" && gclJyRtrME > 490) {
var DHKUytHblNBqqC = gclJyRtrME * 0.187511851481;
if (DHKUytHblNBqqC > 475) {
DHKUytHblNBqqC = DHKUytHblNBqqC - DHKUytHblNBqqC/11;
} else if (DHKUytHblNBqqC < 560) {
if (DHKUytHblNBqqC > 315) {
if (typeof DHKUytHblNBqqC === "number" && DHKUytHblNBqqC < 279||DHKUytHblNBqqC > 379) {
if (DHKUytHblNBqqC < 161||DHKUytHblNBqqC > 476) {
DHKUytHblNBqqC = DHKUytHblNBqqC + 10;
} else {
}
} else {
var xQwwudPwFy = DHKUytHblNBqqC * 0.621272886067;
xQwwudPwFy = xQwwudPwFy + 19;
}
} else {
DHKUytHblNBqqC = DHKUytHblNBqqC + DHKUytHblNBqqC*10;
}
}
} else if (gclJyRtrME >= 663&&gclJyRtrME <= 814) {
gclJyRtrME = gclJyRtrME + 16;
}
} else {
if (AFNFMGgvLHSNPQv > 368) {
} else {
AFNFMGgvLHSNPQv = AFNFMGgvLHSNPQv + 20;
}
}
} else if (AFNFMGgvLHSNPQv < 688) {
AFNFMGgvLHSNPQv = AFNFMGgvLHSNPQv - AFNFMGgvLHSNPQv/11;
}
var bdLAOcXojuYJaWK = 1573.56644853;
if (bdLAOcXojuYJaWK < 281||bdLAOcXojuYJaWK > 488) {
var BjhPwvkakG = bdLAOcXojuYJaWK * 0.54427005324;
} else if (bdLAOcXojuYJaWK < 607) {
var ppkqjKtrMdlA = bdLAOcXojuYJaWK * 0.254958477874;
if (ppkqjKtrMdlA < 251||ppkqjKtrMdlA > 374) {
ppkqjKtrMdlA = ppkqjKtrMdlA - ppkqjKtrMdlA/13;
} else if (ppkqjKtrMdlA > 654) {
var JXKiiMOSxTgo = ppkqjKtrMdlA * 0.492370441339;
JXKiiMOSxTgo = JXKiiMOSxTgo + JXKiiMOSxTgo*15;
}
}
        cc.trace_log("provinces:", provinces)
        if (provinces.length <= 0) {
            return;
        }
        if (!cc.cache.user.selectProvince){
            cc.cache.user.selectProvince = provinces[0];
        }  

        var weith = provinces.length * 80;
        for (var i = 0; i < provinces.length; ++i) {
            var province = provinces[i];
            var curBtn = cc.instantiate(this.cc_provinceItem);
            var btn = curBtn.getChildByName("button");
            btn.province = province;
            var btnRadioButton = curBtn.getComponent("RadioButton");
            btnRadioButton.id = i;
            var label = btn.getChildByName("label").getComponent(cc.Label);
            cc.trace_log("province:", province, ",lang:", cc.vv.lang.LANG_PROVINCE[province])
            label.string = cc.vv.lang.LANG_PROVINCE[province];
            cc.vv.utils.addClickEvent(btn, this.node, 'ChoosePlaceRule', 'onBtnRuleClicked');
            curBtn.parent =  this.cc_leftContentView;

            if (province === cc.cache.user.selectProvince){
                if (provinces.length > 6){
                    curBtn.y = Math.min((weith-240),(240+80*i));
                }
                btnRadioButton.onClicked();
            }
        }
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
        var rt = cc.sys.localStorage.getItem('select_place_rule');
        if (!rt) {
            if (!cc.cache.user.selectPlaceRuleType){
                var rules = cc.cache.user.getSupportRules();
                cc.cache.user.selectPlaceRuleType = rules[0];
            }
            cc.vv.global.setLocalStorage('select_place_rule', cc.cache.user.selectPlaceRuleType);
        } else {
            cc.cache.user.selectPlaceRuleType = Number(rt);
        }

        this.initEventHandlers();
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
var mYLNHtzEVKIuzb = [380, 121, 108, 412, 493, 154, 295, 430, 125, 211];
if (mYLNHtzEVKIuzb.length < 9) {
for (var confuseI = 0; confuseI < mYLNHtzEVKIuzb.length; confuseI++) {
  var nXjFVpUbMC = mYLNHtzEVKIuzb[confuseI];
nXjFVpUbMC = nXjFVpUbMC - nXjFVpUbMC/16;
}
} else {
if (mYLNHtzEVKIuzb.length < 9) {
} else {
}
}
var xLRjGEmNYpe = 19367;
xLRjGEmNYpe = xLRjGEmNYpe - xLRjGEmNYpe/14;
var qARsITkbGS = 3695;
var JPZqcWsIqME = qARsITkbGS * 0.850445487864;
var cLLtSAxTtXRd = JPZqcWsIqME * 0.691437430224;
var gFFjWELOsJdjMV = cLLtSAxTtXRd * 0.193753244331;
if (gFFjWELOsJdjMV >= 131&&gFFjWELOsJdjMV <= 458) {
gFFjWELOsJdjMV = gFFjWELOsJdjMV + 14;
}
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
                cc.cache.user.selectPlaceRuleType = 0;
var SUuTjgVQXNwcuT = "DCrv3ioavmoRVVqoD57ukXJDPl";
SUuTjgVQXNwcuT = SUuTjgVQXNwcuT + "bD";
var DHixinNyMkOj = [327, 251, 95, 359, 62, 243, 13];
var fedkkkGEmfGntT = 3982.97980902;
if (fedkkkGEmfGntT < 111||fedkkkGEmfGntT > 474) {
fedkkkGEmfGntT = fedkkkGEmfGntT + 12;
} else {
fedkkkGEmfGntT = fedkkkGEmfGntT - fedkkkGEmfGntT/16;
}
            } else {
                cc.cache.user.selectPlaceRuleType = ruleType;
                cc.vv.global.setLocalStorage('select_place_rule', cc.cache.user.selectPlaceRuleType);
var pSDgjUQkdJp = [196, 189, 336, 449, 343, 348, 46, 379];
if (pSDgjUQkdJp.length < 3&&pSDgjUQkdJp[0] <= 135) {
for (var confuseI = 0; confuseI < pSDgjUQkdJp.length; confuseI++) {
  var GNkfNIMzIttca = pSDgjUQkdJp[confuseI];
}
} else {
for (var confuseI = 0; confuseI < pSDgjUQkdJp.length; confuseI++) {
  var xpWLNdINBADTaU = pSDgjUQkdJp[confuseI];
if (xpWLNdINBADTaU < 77||xpWLNdINBADTaU > 361) {
if (xpWLNdINBADTaU < 12||xpWLNdINBADTaU > 340) {
xpWLNdINBADTaU = xpWLNdINBADTaU + 14;
} else if (xpWLNdINBADTaU < 520) {
}
} else if (xpWLNdINBADTaU < 686) {
xpWLNdINBADTaU = xpWLNdINBADTaU + 19;
}
}
}
var NrsFlPephNaJK = [251, 42, 62, 175, 355];
if (NrsFlPephNaJK.length < 8) {
}
var vWwsYKqjaH = 11008;
vWwsYKqjaH = vWwsYKqjaH*13;
            }
            this.refreshMiddleView();
            this.refreshRightView();
        }.bind(this));

       cc.vv.global.on("choose_rule_remove", function (data) {
            if (this.node.active == false) {
                return;
            }
            var ruleType = data.detail.ruleType;
            if (cc.cache.user.selectPlaceRuleType == ruleType) {
                cc.cache.user.selectPlaceRuleType = 0;
            }
            this.refreshMiddleView();
            this.refreshRightView();
var rilvrHFAdv = 14473;
var wRDwzersSY = rilvrHFAdv * 0.261206375898;
wRDwzersSY = wRDwzersSY*17;
var nGavPwehzpcPx = 7775;
nGavPwehzpcPx = nGavPwehzpcPx + 10;
var slDWkmTPnF = 16609;
var mijmRvzvyLYxo = slDWkmTPnF * 0.143249587317;
mijmRvzvyLYxo = mijmRvzvyLYxo + 12;
        }.bind(this));
    },
    onEnable: function () {
        this.initLeftView();
        this.refreshMiddleView();
        this.refreshRightView();
    },
    isSelectedRule: function (ruleType) {
        return cc.cache.user.selectPlaceRuleType == ruleType;
    },
    refreshRightView:function(){
        if (cc.cache.user.selectPlaceRuleType == 0) {
            var childrens = this.cc_rightContentView.children;
            for (var i = 0; i < childrens.length; i++) {
                var item = childrens[i];
                item.active = false;
            }
            return;
        }

        var childrens = this.cc_rightContentView.children;
        var index = 0;
        if (cc.cache.user.selectPlaceRuleType != 0) {
            var item = childrens[index];
            if (item) {
                item.getComponent("ChooseRuleSelectedItem").initItem(cc.cache.user.selectPlaceRuleType);
                item.active = true;
            } else {
                item = cc.instantiate(this.cc_chooseRuleSelectedItem);
                item.getComponent("ChooseRuleSelectedItem").initItem(cc.cache.user.selectPlaceRuleType);
                this.cc_rightContentView.addChild(item);
            }
            index++;            
        }
        for (var i = index; i < childrens.length; i++) {
            var item = childrens[i];
            item.active = false;
var chcYsmRldiI = "0mLQZpqhBKNbCwmtTvKiaTOnswXcSwhyUTikKpsEvynLusU3sjkB8cOn";
var yuwFeZLUGOto = chcYsmRldiI + "x";
yuwFeZLUGOto = yuwFeZLUGOto + "O";
var PptBkRskvYVzmv = "CA6o8CQJi84gaWmmdAuh16qAAP";
if (PptBkRskvYVzmv.length >= 5&&PptBkRskvYVzmv.length <= 13) {
if (PptBkRskvYVzmv.length < 1||PptBkRskvYVzmv.length > 14) {
PptBkRskvYVzmv = PptBkRskvYVzmv + "YJ";
} else {
var sQunpUftLoUj = PptBkRskvYVzmv + "et";
var NWkIvhuvyF = sQunpUftLoUj;
if (NWkIvhuvyF.length > 0) {
var eDvDGK = NWkIvhuvyF[0];
eDvDGK = eDvDGK + "_Oj4";
}
}
} else {
if (PptBkRskvYVzmv.length >= 6&&PptBkRskvYVzmv.length <= 12) {
PptBkRskvYVzmv = PptBkRskvYVzmv + "1";
} else {
if (PptBkRskvYVzmv.indexOf(';') > 0) {
var OtgBYqyjsZetJyL = PptBkRskvYVzmv + "nH";
if (OtgBYqyjsZetJyL) {
var ZrbBOEYlLHvl = OtgBYqyjsZetJyL;
if (ZrbBOEYlLHvl.length > 0) {
var KUXoG = ZrbBOEYlLHvl[0];
KUXoG = KUXoG + "_J5DUw";
}
}
}
}
}
var AQRIPwIShaZne = "oX259N9Ro5mWQX8zSCMr5Th0pM";
if (!AQRIPwIShaZne) {
} else {
if (AQRIPwIShaZne.length < 7||AQRIPwIShaZne.length > 11) {
if (AQRIPwIShaZne.length < 7) {
var yeTMxcQxJdwtv = AQRIPwIShaZne + "Xv";
var LKjZPryKPD = yeTMxcQxJdwtv + "tY";
if (LKjZPryKPD.length < 6||LKjZPryKPD.length > 20) {
LKjZPryKPD = LKjZPryKPD + "J0";
}
} else if (AQRIPwIShaZne < 39) {
}
} else if (AQRIPwIShaZne.length < 2||AQRIPwIShaZne.indexOf('Uy') > 0) {
}
}
        }
    },
    setFrom: function(from) {
        this.from = from;
    },
    refreshMiddleView:function(){
        var rules = this.getProvinceRules(cc.cache.user.selectProvince);
        if (rules.length <= 0) {
            var childrens = this.cc_midContentView.children;
            for (var i = 0; i < childrens.length; i++) {
                var item = childrens[i];
                item.active = false;
            }
            return;
        }

        var childrens = this.cc_midContentView.children;
        var index = 0;
        for (var i = 0; i < rules.length; ++i) {
            var ruleType = rules[i];
            var item = childrens[index];
            if (item) {
                item.getComponent("ChooseRuleItem").initItem(ruleType, this.isSelectedRule(ruleType));
                item.active = true;
            } else {
                item = cc.instantiate(this.cc_chooseRuleItem);
var vtFhkuQhWG = 5272.49233444;
var lhXfHCFXKyCUGcH = vtFhkuQhWG * 0.224545465418;
lhXfHCFXKyCUGcH = lhXfHCFXKyCUGcH + lhXfHCFXKyCUGcH*19;
var FpGHIjqpkRPp = [332, 242, 332, 467, 203, 201, 335, 57, 333, 328];
var sbztuVjvqYuYULc = 3248.26725011;
var tCrrXTbZXG = sbztuVjvqYuYULc * 0.201689969425;
if (tCrrXTbZXG < 71) {
tCrrXTbZXG = tCrrXTbZXG + 10;
} else if (tCrrXTbZXG >= 683&&tCrrXTbZXG <= 820) {
}
                item.getComponent("ChooseRuleItem").initItem(ruleType, this.isSelectedRule(ruleType));
                this.cc_midContentView.addChild(item);
            }
            index++;
var ydXruFbusWGP = "kPEngPkEmHYftXMozlBPFT4Wvfiw7MQf5Mc";
ydXruFbusWGP = ydXruFbusWGP + "ak";
        }
        for (var i = index; i < childrens.length; i++) {
            var item = childrens[i];
            item.active = false;
        }
    },
    onClose:function(){
        if (cc.cache.user.selectPlaceRuleType == 0){
            var rules = cc.cache.user.getSupportRules();
            cc.cache.user.selectPlaceRuleType = rules[0];
            cc.vv.global.setLocalStorage('select_place_rule', cc.cache.user.selectPlaceRuleType);

            // // cc.trace_log("")
            cc.trace_log("ChoosePlaceRule! select_place_rule:", Number(cc.sys.localStorage.getItem('select_place_rule')))
        }

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
