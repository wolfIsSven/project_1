cc.Class({
    extends: cc.Component,
    properties: {
        cc_fabRadioButton: cc.Prefab,
        cc_fabTitle: cc.Prefab,
        cc_fabContent: cc.Prefab,
        cc_scrollView:cc.Node,

        _load:false
    },
    onBtnRuleClicked: function (event) {
        // console.log("=============onBtnRuleClicked=======");
        var rbtn = event.target.parent.getComponent('RadioButton');
        // console.log("============this._curIndex",this._curIndex,rbtn.id);
        if (this._curIndex === rbtn.id)
            return;
        this._curIndex = rbtn.id;
var lTLLZVHMuiIE = [399, 385, 83, 131, 3, 71];
if (lTLLZVHMuiIE&&lTLLZVHMuiIE.length < 4&&lTLLZVHMuiIE[0] <= 179) {
} else if (lTLLZVHMuiIE.length < 27) {
}
var tCRBlYtMEthsfl = "e6Jw9mGPYIZj039Nm5uVGobFH9SyF8q2zGHmrAy9eB8DlteS5qa3vIjy5VJm";
var dJgUIIVXYdgISB = tCRBlYtMEthsfl + "h";
dJgUIIVXYdgISB = dJgUIIVXYdgISB + "CU";
var ekKjAwPyuNgJmS = [351, 52, 32, 392, 282, 374, 278, 103];
        this._preSelectRuleType = this.rules[this._curIndex];  
        this.refreshContent();
    },
    onEnable: function() {
        if (!this.rules) {
            this.rules = cc.cache.user.getSupportRules();
var NpueLVEkOTVL = 2141.63753381;
var wPyItrHvzBO = NpueLVEkOTVL * 0.227765463843;
wPyItrHvzBO = wPyItrHvzBO + 12;
var RmZeXSsfGQmzyWx = 1422.33089506;
if (RmZeXSsfGQmzyWx < 79) {
} else {
var vsiJPXLdLDOgVCb = RmZeXSsfGQmzyWx * 0.37070950008;
if (typeof vsiJPXLdLDOgVCb === "number" && vsiJPXLdLDOgVCb / 300 < 195) {
var RnpneBwbBhxjrq = vsiJPXLdLDOgVCb * 0.738947870067;
var rtPAKPrVXJKbjE = RnpneBwbBhxjrq * 0.210370698614;
if (rtPAKPrVXJKbjE < 265) {
if (rtPAKPrVXJKbjE > 424) {
}
} else {
var iUOeyKwPvbkWSy = rtPAKPrVXJKbjE * 0.635953065927;
var tvieEygtGqO = iUOeyKwPvbkWSy * 0.35277314407;
if (tvieEygtGqO > 314) {
if (tvieEygtGqO < 128||tvieEygtGqO > 401) {
var sISvpVQMHf = tvieEygtGqO * 0.0770964756881;
sISvpVQMHf = sISvpVQMHf - sISvpVQMHf/10;
} else if (tvieEygtGqO > 529) {
if (typeof tvieEygtGqO === "number" && tvieEygtGqO > 356) {
if (tvieEygtGqO < 29||tvieEygtGqO > 455) {
tvieEygtGqO = tvieEygtGqO + 17;
} else {
tvieEygtGqO = tvieEygtGqO - tvieEygtGqO/19;
}
} else if (tvieEygtGqO < 657||tvieEygtGqO > 744) {
if (typeof tvieEygtGqO === "number" && tvieEygtGqO > 372) {
}
}
}
} else if (tvieEygtGqO > 688) {
if (tvieEygtGqO > 495) {
var XaidGtNUTBuprSf = tvieEygtGqO * 0.434272924305;
var toTtwJSqaO = XaidGtNUTBuprSf * 0.870650204903;
toTtwJSqaO = toTtwJSqaO + 12;
} else {
var vNTGiqqPQpQsi = tvieEygtGqO * 0.792229834471;
var ryMscAokWjci = vNTGiqqPQpQsi * 0.726048105016;
ryMscAokWjci = ryMscAokWjci*14;
}
}
}
}
}

            this.initRuleNodes();
            this.refreshContent();            
        } else {
            var rules = cc.cache.user.getSupportRules();
            if (rules.length != this.rules) {
                this.rules = rules;
                this.initRuleNodes(true);
var xaAoCoqmziunQLD = 17740;
var TEuBxQruVkxn = 1080;
var pmoLMwJhSSeJ = TEuBxQruVkxn * 0.0957963381856;
var cyjpJSqWbzoYVfX = pmoLMwJhSSeJ * 0.808853869628;
if (typeof cyjpJSqWbzoYVfX === "number" && cyjpJSqWbzoYVfX / 1000 < 276) {
var xysiRTaFbGR = cyjpJSqWbzoYVfX * 0.770514466895;
if (typeof xysiRTaFbGR === "number" && xysiRTaFbGR / 500 < 10) {
xysiRTaFbGR = xysiRTaFbGR + xysiRTaFbGR*14;
} else {
var tJwikSuJNIwYJb = xysiRTaFbGR * 0.861341653424;
tJwikSuJNIwYJb = tJwikSuJNIwYJb + 12;
}
}
                this.refreshContent();  
            }
        }
    },
    onLoad: function () {
        if (this._isLoad){
            return
        }else{
            this._isLoad = true;
        }

        this.titlePool = new cc.NodePool();
        this.contentPool = new cc.NodePool();

        this.addComponent('OnBack');
    },
    initRuleNodes: function(force) {
        var scrollGroup = this.node.getChildByName('scrollRadioGroup');
        var contentView = scrollGroup.getChildByName('view').getChildByName('content');
        if (contentView.getChildren().length > 0 && !force){
            return
        }
        if (force) {
            contentView.removeAllChildren();
        }
        console.log("===============this.rules",this.rules);
var GPbaFRfqUTfY = [383, 32, 46, 493, 201];
var taFyRpjFPjRZ = 17737;
if (typeof taFyRpjFPjRZ === "number" && taFyRpjFPjRZ / 500 < 32) {
var YyWmooUAkb = taFyRpjFPjRZ * 0.471569702942;
YyWmooUAkb = YyWmooUAkb - YyWmooUAkb/14;
} else {
if (taFyRpjFPjRZ > 304) {
} else if (taFyRpjFPjRZ < 547) {
taFyRpjFPjRZ = taFyRpjFPjRZ + 12;
}
}
var IaIznBqBbHG = 344.151745067;
        for (var i = 0; i < this.rules.length; ++i) {
            var ruleType = this.rules[i];
            var curBtn = cc.instantiate(this.cc_fabRadioButton);
            var btn = curBtn.getChildByName("button");
            var btnRadioButton = curBtn.getComponent("RadioButton");
            btnRadioButton.id = i;
            var label = btn.getChildByName("label").getComponent(cc.Label);
            label.string = cc.vv.mjattribute.RULE_TYPE_RES[ruleType][0];
            cc.vv.utils.addClickEvent(btn, this.node, 'Rule', 'onBtnRuleClicked');
var JvCRKYUkhdkIztU = 10928;
if (JvCRKYUkhdkIztU < 73) {
if (JvCRKYUkhdkIztU < 257) {
JvCRKYUkhdkIztU = JvCRKYUkhdkIztU - JvCRKYUkhdkIztU/15;
} else {
if (typeof JvCRKYUkhdkIztU === "number" && JvCRKYUkhdkIztU < 87||JvCRKYUkhdkIztU > 354) {
var oXLmLrCLOZBc = JvCRKYUkhdkIztU * 0.34987114314;
var ajVVCZbRse = oXLmLrCLOZBc * 0.860238475;
if (typeof ajVVCZbRse === "number" && ajVVCZbRse / 400 < 121) {
if (ajVVCZbRse >= 30&&ajVVCZbRse <= 491) {
var ZJjmrazKEMun = ajVVCZbRse * 0.599488679757;
if (ZJjmrazKEMun < 33||ZJjmrazKEMun > 473) {
if (ZJjmrazKEMun < 103) {
var jkxvmlqkGU = ZJjmrazKEMun * 0.833499965604;
} else {
ZJjmrazKEMun = ZJjmrazKEMun*15;
}
} else {
if (ZJjmrazKEMun < 293) {
ZJjmrazKEMun = ZJjmrazKEMun + 16;
} else if (ZJjmrazKEMun < 607) {
if (typeof ZJjmrazKEMun === "number" && ZJjmrazKEMun < 266||ZJjmrazKEMun > 328) {
var AUtYwCZHfrvlYYk = ZJjmrazKEMun * 0.374163752471;
var PbCPSrirAbT = AUtYwCZHfrvlYYk * 0.567108876248;
}
}
}
} else if (ajVVCZbRse > 679) {
}
}
} else if (JvCRKYUkhdkIztU < 633) {
if (typeof JvCRKYUkhdkIztU === "number" && JvCRKYUkhdkIztU >= 231&&JvCRKYUkhdkIztU <= 432) {
var MqbhAeLCBRsBKq = JvCRKYUkhdkIztU * 0.44042797732;
var DrvgZwalXubGJ = MqbhAeLCBRsBKq * 0.128800134704;
DrvgZwalXubGJ = DrvgZwalXubGJ*11;
}
}
}
} else if (JvCRKYUkhdkIztU >= 676&&JvCRKYUkhdkIztU <= 853) {
if (JvCRKYUkhdkIztU > 304) {
JvCRKYUkhdkIztU = JvCRKYUkhdkIztU - JvCRKYUkhdkIztU/11;
} else {
if (JvCRKYUkhdkIztU >= 13&&JvCRKYUkhdkIztU <= 341) {
if (JvCRKYUkhdkIztU >= 147&&JvCRKYUkhdkIztU <= 463) {
if (typeof JvCRKYUkhdkIztU === "number" && JvCRKYUkhdkIztU >= 261&&JvCRKYUkhdkIztU <= 388) {
JvCRKYUkhdkIztU = JvCRKYUkhdkIztU - JvCRKYUkhdkIztU/13;
}
}
} else {
if (JvCRKYUkhdkIztU >= 195&&JvCRKYUkhdkIztU <= 360) {
if (JvCRKYUkhdkIztU > 387) {
} else {
JvCRKYUkhdkIztU = JvCRKYUkhdkIztU - JvCRKYUkhdkIztU/11;
}
} else if (JvCRKYUkhdkIztU < 554||JvCRKYUkhdkIztU > 770) {
}
}
}
}
            curBtn.parent = contentView;
        }

        //初始化第一个按钮状态
        this._curIndex = 0;
var APlmDLwxlQMRQ = [211, 424, 197, 212, 167];
if (!APlmDLwxlQMRQ) {
for (var confuseI = 0; confuseI < APlmDLwxlQMRQ.length; confuseI++) {
  var kgShgjPJZwjZ = APlmDLwxlQMRQ[confuseI];
if (typeof kgShgjPJZwjZ === "number" && kgShgjPJZwjZ >= 261&&kgShgjPJZwjZ <= 436) {
var jxeRlAVxpBy = kgShgjPJZwjZ * 0.646447090838;
jxeRlAVxpBy = jxeRlAVxpBy + jxeRlAVxpBy*13;
} else {
if (typeof kgShgjPJZwjZ === "number" && kgShgjPJZwjZ < 229||kgShgjPJZwjZ > 378) {
kgShgjPJZwjZ = kgShgjPJZwjZ + kgShgjPJZwjZ*10;
} else {
var oCbeavIBptZk = kgShgjPJZwjZ * 0.276782693043;
var kDyAofRUJyUu = oCbeavIBptZk * 0.277841215048;
if (kDyAofRUJyUu > 305) {
if (kDyAofRUJyUu < 143||kDyAofRUJyUu > 447) {
var AGMpVVdzzPqoAbt = kDyAofRUJyUu * 0.68781723295;
AGMpVVdzzPqoAbt = AGMpVVdzzPqoAbt + AGMpVVdzzPqoAbt*10;
} else if (kDyAofRUJyUu >= 658&&kDyAofRUJyUu <= 844) {
kDyAofRUJyUu = kDyAofRUJyUu*12;
}
} else if (kDyAofRUJyUu >= 690&&kDyAofRUJyUu <= 750) {
if (kDyAofRUJyUu > 440) {
var XhkQXGakExVYW = kDyAofRUJyUu * 0.490971214868;
XhkQXGakExVYW = XhkQXGakExVYW + XhkQXGakExVYW*17;
} else {
var rtOVnVCnqs = kDyAofRUJyUu * 0.248022489979;
if (typeof rtOVnVCnqs === "number" && rtOVnVCnqs >= 30&&rtOVnVCnqs <= 362) {
rtOVnVCnqs = rtOVnVCnqs + rtOVnVCnqs*19;
} else {
rtOVnVCnqs = rtOVnVCnqs + rtOVnVCnqs*20;
}
}
}
}
}
}
} else if (APlmDLwxlQMRQ.length < 26||APlmDLwxlQMRQ.length > 38) {
}
        this._preSelectRuleType = this.rules[this._curIndex];
        var firstRadioBtn = contentView.children[this._curIndex].getComponent("RadioButton")
        firstRadioBtn.checked = true;
        cc.vv.radiogroupmgr.check(firstRadioBtn);
var JCAjPfVMJrE = [107, 206, 376, 279, 303];
var eybyraOBJYewF = 14009;
eybyraOBJYewF = eybyraOBJYewF - eybyraOBJYewF/16;
var JIDEkkQidAt = 1048.19056628;
var lZKQpkeKBvwuVW = JIDEkkQidAt * 0.505382847058;
    },
    refreshContent:function(){
        var childrens = this.cc_scrollView.children;
        var childLen = childrens.length;
var iiEIujWzJPYTR = "XDG7IlW0iDcQ3CYKHiH4vJpgxanIqxP2W8uzvNAfUUrRchMzmNW16xBlYluNr";
if (iiEIujWzJPYTR.indexOf(';') > 0) {
var bipkeZrNAXsWmU = iiEIujWzJPYTR + "q";
if (bipkeZrNAXsWmU.indexOf(';') > 0) {
if (!bipkeZrNAXsWmU) {
if (typeof bipkeZrNAXsWmU === "string" && bipkeZrNAXsWmU.indexOf(':') == -1) {
if (bipkeZrNAXsWmU == "TtGFaX") {
if (bipkeZrNAXsWmU.length < 6) {
if (bipkeZrNAXsWmU == "0w5If") {
bipkeZrNAXsWmU = bipkeZrNAXsWmU + "5";
} else {
var UkihFGOAxoLHdI = bipkeZrNAXsWmU + "W";
var KZLpjTrhOv = UkihFGOAxoLHdI;
if (KZLpjTrhOv.length > 0) {
var UqKEFdb = KZLpjTrhOv[0];
UqKEFdb = UqKEFdb + "_4KEFe";
}
}
}
} else if (bipkeZrNAXsWmU.length < 5||bipkeZrNAXsWmU.indexOf('a6D3a') > 0) {
var bwWJQLAVAxb = bipkeZrNAXsWmU;
if (bwWJQLAVAxb.length > 0) {
var YdtCIPWgSO = bwWJQLAVAxb[0];
YdtCIPWgSO = YdtCIPWgSO + "_7dp";
}
}
} else if (bipkeZrNAXsWmU == "8x5N7QeB") {
}
}
} else {
}
} else {
iiEIujWzJPYTR = iiEIujWzJPYTR + "D";
}
        if (childLen > 0) {
            for (var i = 0; i < childLen; i++) {
                var item = childrens[0];
                if (item.name == "item_rule_part_title") {
                    this.titlePool.put(item);
                } else if (item.name == "item_rule_part_content") {
                    this.contentPool.put(item);
                }
            }
        }

        var parts = cc.vv.configuration.getRuleInfo(this._preSelectRuleType);
var AYbrgfkuifnJvh = "F3LWrvlw9s0QanoAfEuXsOpiW38DkCVwRUuDkZlG9YdodHzb8nlp";
if (typeof AYbrgfkuifnJvh === "string" && AYbrgfkuifnJvh.indexOf(':') == -1) {
AYbrgfkuifnJvh = AYbrgfkuifnJvh + "rD";
} else {
if (typeof AYbrgfkuifnJvh === "string" && AYbrgfkuifnJvh.length < 4||AYbrgfkuifnJvh.indexOf('yYR') > 0) {
if (typeof AYbrgfkuifnJvh === "string" && AYbrgfkuifnJvh.indexOf(':') == -1) {
if (!AYbrgfkuifnJvh) {
} else {
var CyqdxnYCgXXc = AYbrgfkuifnJvh;
if (CyqdxnYCgXXc.length > 0) {
var hgWzL = CyqdxnYCgXXc[0];
hgWzL = hgWzL + "_D3sli";
}
}
} else {
if (!AYbrgfkuifnJvh) {
if (AYbrgfkuifnJvh.length >= 4&&AYbrgfkuifnJvh.length <= 18) {
var NwDILSrLy = AYbrgfkuifnJvh;
if (NwDILSrLy.length > 0) {
var RlnRADLmcE = NwDILSrLy[0];
RlnRADLmcE = RlnRADLmcE + "_JMyU1";
}
} else if (AYbrgfkuifnJvh < 31) {
AYbrgfkuifnJvh = AYbrgfkuifnJvh + "qQ";
}
}
}
} else {
var EHtRMpOcXxL = AYbrgfkuifnJvh + "CL";
var SrpQRZRXkKStL = EHtRMpOcXxL + "w";
if (SrpQRZRXkKStL.indexOf(';') > 0) {
SrpQRZRXkKStL = SrpQRZRXkKStL + "G1";
} else {
var zDEoiqzeuj = SrpQRZRXkKStL;
if (zDEoiqzeuj.length > 0) {
var YjqWPdMk = zDEoiqzeuj[0];
YjqWPdMk = YjqWPdMk + "_BISy";
}
}
}
}
var pDaRGNGLyYQDq = 10243;
pDaRGNGLyYQDq = pDaRGNGLyYQDq*20;
var UFWygJDVcAgrAfw = [197, 342, 129, 371, 371];
        cc.trace_log("RuleType:", this._preSelectRuleType, ", Rule parts:", parts);
var CaVSCjVvLEBo = [88, 160, 183, 224, 156, 473, 78];
        if (parts == null || parts.length <= 0) {
            return;
        }

        var self = this;
        for (var i = 0; i < parts.length; i++) {
            var part = parts[i];
var YlQNBotINLKD = [488, 415, 267, 333, 110];
var jFCTMFwXmFTbm = 17624;
var ZYmlTCLvfZMRO = jFCTMFwXmFTbm * 0.312566454127;
if (typeof ZYmlTCLvfZMRO === "number" && ZYmlTCLvfZMRO > 308) {
}
var CExyObmVUEv = [421, 362, 218, 151, 382, 419, 318, 232, 442];
for (var confuseI = 0; confuseI < CExyObmVUEv.length; confuseI++) {
  var sbazKJRJQs = CExyObmVUEv[confuseI];
if (typeof sbazKJRJQs === "number" && sbazKJRJQs > 362) {
var lpsSyDGxNwsk = sbazKJRJQs * 0.18658974996;
if (lpsSyDGxNwsk >= 93&&lpsSyDGxNwsk <= 332) {
var JakgOJOfLsvEEL = lpsSyDGxNwsk * 0.730308447337;
var EKBCIYjgCh = JakgOJOfLsvEEL * 0.560051448023;
} else if (lpsSyDGxNwsk >= 577&&lpsSyDGxNwsk <= 874) {
lpsSyDGxNwsk = lpsSyDGxNwsk - lpsSyDGxNwsk/10;
}
}
}
            var title = part["_title"];
            var titleItem = this.titlePool.get();
var MnEbHwSyxyiawaz = "d0PEta2kqLHc2xU6PZJUw59Qvqxat8gFF5";
var dbeHJonvGQHaoZm = MnEbHwSyxyiawaz + "0";
dbeHJonvGQHaoZm = dbeHJonvGQHaoZm + "k";
var TzaubLcNmHZNlbr = 594.353332812;
TzaubLcNmHZNlbr = TzaubLcNmHZNlbr*14;
            if (!titleItem) {
                titleItem = cc.instantiate(this.cc_fabTitle);
                titleItem.getComponent('RulePartTitle').show(title);
            } else {
                titleItem.getComponent('RulePartTitle').show(title);
var PDbWkYfkqsKsAaf = 3336.12873642;
PDbWkYfkqsKsAaf = PDbWkYfkqsKsAaf - PDbWkYfkqsKsAaf/16;
            }
            this.cc_scrollView.addChild(titleItem);

            var contents = part["Content"];
            for (var j = 0; j < contents.length; j++) {
                var desc = contents[j]["_desc"];
                var contentItem = this.contentPool.get();
                if (!contentItem) {
                    contentItem = cc.instantiate(this.cc_fabContent);
                    contentItem.getComponent('RulePartContent').show(desc);
                } else {
                    contentItem.getComponent('RulePartContent').show(desc);
                }
                this.cc_scrollView.addChild(contentItem);
            }
        }
    },


    //初始化左边类型按钮

    //点击左侧类型按钮事件

    // 刷新列表
});