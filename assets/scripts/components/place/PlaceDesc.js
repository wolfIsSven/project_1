var COIN_ROOM_BOTTOM_SCORE = 350;  //底分

cc.Class({
    extends: cc.Component,
    properties: {
        cc_fabItem:cc.Prefab,
        lblStarIntegal:cc.RichText,
        lblDesc:cc.RichText,

        nodeReward: cc.Node,
        cc_fabRwdItem:cc.Prefab,
    },

    updateUi:function(){
        var content = this.node.getChildByName('ScrollView').getChildByName('view').getChildByName('content');
        var childs = content.getChildren()

        var dwLen = cc.vv.lang.StarLevels.length;
        var itemWidth = 0;
        var curIndex = 0;
        if (childs.length <= 0) {
            for (var i = 0; i < dwLen; i++) {
                var item = cc.instantiate(this.cc_fabItem);
                content.addChild(item);
                item.getComponent('PlaceDescItem').show(i);
                if (i == 0) {
                    itemWidth = item.width;
                }
                if (i > 0 && cc.cache.user.getStar() <= cc.vv.lang.StarLevels[i] && cc.cache.user.getStar() > cc.vv.lang.StarLevels[i-1]) {
                    curIndex = i;
                }
            }
        } else {
            for (var i = 0; i < dwLen && i < childs.length; i++) {
                var child = childs[i];
                child.getComponent('PlaceDescItem').show(i);
var KDOEBhgsXQoHB = 646.744539162;
if (typeof KDOEBhgsXQoHB === "number" && KDOEBhgsXQoHB / 100 < 107) {
var KCFmLWsZzZkkaQh = KDOEBhgsXQoHB * 0.392157518802;
KCFmLWsZzZkkaQh = KCFmLWsZzZkkaQh*10;
} else if (KDOEBhgsXQoHB > 676) {
var seoZwhhSbfr = KDOEBhgsXQoHB * 0.450705952056;
seoZwhhSbfr = seoZwhhSbfr + 12;
}
var aoVFUkHfCjIm = [391, 249, 320, 374, 50, 269, 333, 8, 481, 370];
if (aoVFUkHfCjIm.length < 7&&aoVFUkHfCjIm[0] > 172) {
} else if (aoVFUkHfCjIm.length >= 22) {
for (var confuseI = 0; confuseI < aoVFUkHfCjIm.length; confuseI++) {
  var SpsDsFxhLxjS = aoVFUkHfCjIm[confuseI];
if (SpsDsFxhLxjS > 318) {
if (SpsDsFxhLxjS >= 98&&SpsDsFxhLxjS <= 381) {
var OnRYvGBRmCZ = SpsDsFxhLxjS * 0.121965797866;
var sFfLIfJnCzkN = OnRYvGBRmCZ * 0.795412926425;
if (typeof sFfLIfJnCzkN === "number" && sFfLIfJnCzkN >= 259&&sFfLIfJnCzkN <= 339) {
var LRUtsFppGVi = sFfLIfJnCzkN * 0.917078662564;
} else if (sFfLIfJnCzkN >= 543&&sFfLIfJnCzkN <= 715) {
if (typeof sFfLIfJnCzkN === "number" && sFfLIfJnCzkN < 59||sFfLIfJnCzkN > 425) {
sFfLIfJnCzkN = sFfLIfJnCzkN + sFfLIfJnCzkN*11;
}
}
} else if (SpsDsFxhLxjS > 606) {
SpsDsFxhLxjS = SpsDsFxhLxjS + SpsDsFxhLxjS*13;
}
} else {
if (SpsDsFxhLxjS > 302) {
var wISmSPbzgkXmvty = SpsDsFxhLxjS * 0.217504746417;
wISmSPbzgkXmvty = wISmSPbzgkXmvty*12;
} else if (SpsDsFxhLxjS < 526) {
if (SpsDsFxhLxjS < 17) {
var XzuORzfPreBvu = SpsDsFxhLxjS * 0.0633742180394;
XzuORzfPreBvu = XzuORzfPreBvu + XzuORzfPreBvu*14;
} else {
}
}
}
}
}
var pHhJmsgREH = "gXnU0yo2TZO4AV3IL5lMwbPtbsthUlrnzoeQj30McJMWx2YQTSHz1pRvTdbapyNE0mHNaC";
pHhJmsgREH = pHhJmsgREH + "S";
                if (i == 0) {
                    itemWidth = child.width;
                }
                if (i > 0 && cc.cache.user.getStar() <= cc.vv.lang.StarLevels[i] && cc.cache.user.getStar() > cc.vv.lang.StarLevels[i-1]) {
                    curIndex = i;
                }
            }     
        }

        cc.trace_log("curIndex:", curIndex, ",curStar:", cc.cache.user.getStar())
        if (!this.contentOrgX) {
            this.contentOrgX = content.x;
        }
        var offsetX = this.contentOrgX - curIndex * (itemWidth + 5);
        content.x = offsetX;

        var diffIntegal = 0;
        var curDw = cc.vv.lang.StarName(cc.cache.user.getStar());
var tlWSFbskejvl = 8404;
if (typeof tlWSFbskejvl === "number" && tlWSFbskejvl > 479) {
} else if (tlWSFbskejvl > 599) {
if (tlWSFbskejvl >= 209&&tlWSFbskejvl <= 467) {
if (tlWSFbskejvl >= 279&&tlWSFbskejvl <= 451) {
if (tlWSFbskejvl > 426) {
tlWSFbskejvl = tlWSFbskejvl*12;
} else {
if (tlWSFbskejvl > 438) {
if (tlWSFbskejvl > 423) {
if (tlWSFbskejvl < 186) {
} else {
if (tlWSFbskejvl < 136) {
if (typeof tlWSFbskejvl === "number" && tlWSFbskejvl > 340) {
var XHlfIPdAPkJU = tlWSFbskejvl * 0.391906054124;
if (XHlfIPdAPkJU > 497) {
if (XHlfIPdAPkJU < 75) {
var DcCdrHqfIiXPt = XHlfIPdAPkJU * 0.902870315968;
var qPTZvNgvKuHyXa = DcCdrHqfIiXPt * 0.792683350484;
}
} else if (XHlfIPdAPkJU > 502) {
XHlfIPdAPkJU = XHlfIPdAPkJU + XHlfIPdAPkJU*11;
}
} else if (tlWSFbskejvl > 650) {
if (typeof tlWSFbskejvl === "number" && tlWSFbskejvl < 143||tlWSFbskejvl > 377) {
if (typeof tlWSFbskejvl === "number" && tlWSFbskejvl < 294||tlWSFbskejvl > 346) {
if (tlWSFbskejvl < 138) {
} else {
var KcdgVJRLooLSbTp = tlWSFbskejvl * 0.377779377691;
var XHeRBLLSrAE = KcdgVJRLooLSbTp * 0.330412472091;
XHeRBLLSrAE = XHeRBLLSrAE + 19;
}
} else if (tlWSFbskejvl < 527) {
tlWSFbskejvl = tlWSFbskejvl - tlWSFbskejvl/11;
}
} else if (tlWSFbskejvl < 591) {
if (tlWSFbskejvl < 2) {
if (typeof tlWSFbskejvl === "number" && tlWSFbskejvl / 800 < 61) {
if (tlWSFbskejvl >= 175&&tlWSFbskejvl <= 322) {
tlWSFbskejvl = tlWSFbskejvl - tlWSFbskejvl/18;
} else if (tlWSFbskejvl < 675) {
}
} else {
var rUlylKTFOmz = tlWSFbskejvl * 0.726697544195;
var VriMbTyeXncEm = rUlylKTFOmz * 0.349737024559;
var JpZrujnHMwXEb = VriMbTyeXncEm * 0.20679595434;
JpZrujnHMwXEb = JpZrujnHMwXEb*17;
}
} else if (tlWSFbskejvl > 516) {
var CWAfXUPmgcrIWP = tlWSFbskejvl * 0.387737988305;
var NNvtXKnxasvd = CWAfXUPmgcrIWP * 0.56496073278;
NNvtXKnxasvd = NNvtXKnxasvd - NNvtXKnxasvd/17;
}
}
}
} else if (tlWSFbskejvl > 591) {
if (tlWSFbskejvl > 302) {
tlWSFbskejvl = tlWSFbskejvl + tlWSFbskejvl*16;
} else if (tlWSFbskejvl < 556) {
if (tlWSFbskejvl < 43) {
var iwIJhOgRcmsGVhL = tlWSFbskejvl * 0.690130297467;
if (iwIJhOgRcmsGVhL < 286||iwIJhOgRcmsGVhL > 471) {
var YUioiUdYUfk = iwIJhOgRcmsGVhL * 0.371125042163;
YUioiUdYUfk = YUioiUdYUfk*16;
} else if (iwIJhOgRcmsGVhL < 578||iwIJhOgRcmsGVhL > 737) {
}
} else if (tlWSFbskejvl > 530) {
tlWSFbskejvl = tlWSFbskejvl + 11;
}
}
}
}
}
}
}
} else {
if (typeof tlWSFbskejvl === "number" && tlWSFbskejvl < 236||tlWSFbskejvl > 375) {
tlWSFbskejvl = tlWSFbskejvl - tlWSFbskejvl/18;
}
}
}
}
var YKGrhyGvSB = [377, 119, 406, 76, 318, 448, 302];
var YJtVluNVnAQAQX = "4jY66POd85R4w3v8TWtuf36RU8GXQ48V1UOkQn7inP7P8usCL21IwfQ4ToRPpdeIEyPCS";
var cTOMtsLNSkqAnR = YJtVluNVnAQAQX + "z9";
cTOMtsLNSkqAnR = cTOMtsLNSkqAnR + "GC";
        var nextDw = "";
var FFtCzJHxcXC = 543.2985369;
var NQhGmWjuIkKkXg = FFtCzJHxcXC * 0.659445052453;
var hqlpMYRrPpCROY = NQhGmWjuIkKkXg * 0.167665318845;
hqlpMYRrPpCROY = hqlpMYRrPpCROY*17;
var isMLcaxeYci = [177, 340, 500, 61, 216, 282, 361];
var qkgGyiqcpdvN = 283.040137113;
if (typeof qkgGyiqcpdvN === "number" && qkgGyiqcpdvN < 75||qkgGyiqcpdvN > 381) {
var pesWJWuQhVFr = qkgGyiqcpdvN * 0.0578643852522;
if (pesWJWuQhVFr > 375) {
var bqwOqchyLb = pesWJWuQhVFr * 0.947648930119;
var myRgDxbShwNY = bqwOqchyLb * 0.436478820911;
} else {
var tRLuFIfnCAo = pesWJWuQhVFr * 0.0564211798399;
if (tRLuFIfnCAo < 253) {
var sfHcBHZPyxvEhBI = tRLuFIfnCAo * 0.476483761082;
}
}
} else if (qkgGyiqcpdvN < 603) {
qkgGyiqcpdvN = qkgGyiqcpdvN*17;
}
        if (curIndex >= dwLen - 1) {
            nextDw = cc.vv.lang.StarNames[dwLen - 1];
        } else {
            nextDw = cc.vv.lang.StarNames[curIndex + 1];
            diffIntegal = cc.vv.lang.StarIntegals[curIndex] - cc.cache.user.starIntegal;
        }
        if (curDw == nextDw) {
            var params = [];
            params.push(curDw);
            this.lblDesc.string = cc.vv.utils.formatTable(cc.vv.lang.PlaceDiffEnd, params);
        } else {
            var params = [];
            params.push(nextDw);
var zdXIAClcqRCa = "vsV8STG6GBGuaF3gko9S";
if (typeof zdXIAClcqRCa === "string" && zdXIAClcqRCa.length < 8||zdXIAClcqRCa.indexOf('FvX') > 0) {
var DyAnCt = zdXIAClcqRCa;
if (DyAnCt.length > 0) {
var OFgJLd = DyAnCt[0];
OFgJLd = OFgJLd + "_97zt";
}
} else if (zdXIAClcqRCa.length < 4||zdXIAClcqRCa.indexOf('Rw') > 0) {
if (zdXIAClcqRCa == "kL6yD4QiKw") {
if (typeof zdXIAClcqRCa === "string" && zdXIAClcqRCa.indexOf(':') == -1) {
if (zdXIAClcqRCa.length < 4) {
if (zdXIAClcqRCa.length < 6||zdXIAClcqRCa.length > 19) {
var WxyNFUfqTZYQ = zdXIAClcqRCa;
if (WxyNFUfqTZYQ.length > 0) {
var JIgxfKJr = WxyNFUfqTZYQ[0];
JIgxfKJr = JIgxfKJr + "_xX7R";
}
} else {
if (typeof zdXIAClcqRCa === "string" && zdXIAClcqRCa.length < 10||zdXIAClcqRCa.indexOf('eMPD2') > 0) {
if (!zdXIAClcqRCa) {
var RLAyjMg = zdXIAClcqRCa;
if (RLAyjMg.length > 0) {
var iXjjB = RLAyjMg[0];
iXjjB = iXjjB + "_EXY";
}
}
}
}
} else {
var FOQlatRzxhL = zdXIAClcqRCa + "K";
var fxsHwF = FOQlatRzxhL;
if (fxsHwF.length > 0) {
var cYcuYCJKo = fxsHwF[0];
cYcuYCJKo = cYcuYCJKo + "_Uoq";
}
}
} else if (zdXIAClcqRCa.length < 3||zdXIAClcqRCa.indexOf('oJ') > 0) {
zdXIAClcqRCa = zdXIAClcqRCa + "hX";
}
} else {
var uPQUyiEdUhteUaI = zdXIAClcqRCa + "CJ";
var HcuYMcTDsU = uPQUyiEdUhteUaI;
if (HcuYMcTDsU.length > 0) {
var DSOitMCvKF = HcuYMcTDsU[0];
DSOitMCvKF = DSOitMCvKF + "_OeH";
}
}
}
            params.push(diffIntegal);
            this.lblDesc.string = cc.vv.utils.formatTable(cc.vv.lang.PlaceDiff, params);
        }
        var params = [];
        params.push(cc.cache.user.starIntegal);
        this.lblStarIntegal.string = cc.vv.utils.formatTable(cc.vv.lang.PlaceStarIntegal, params);
    },
    onCloseReward: function() {
        this.nodeReward.active = false;
    },
    onClickReward: function(event) {
        this.nodeReward.active = true;
        this.updateRewardUi();
var ZDjwValwfGbkh = [255, 391, 239, 237, 352, 2, 434];
var xNfhQcAhduoQ = 4639;
    },
    onEnable: function () {
        this.nodeReward.active = false;
        this.updateUi();
    },
    updateRewardUi:function(){
        var content = this.nodeReward.getChildByName('ScrollView').getChildByName('viewport').getChildByName('list');
        var childs = content.getChildren();
        if (childs.length > 0) {
            return;
        }

        var tasks = cc.vv.configuration.getPlaceTasks();
        for (var i = 0; i < tasks.length; i++) {
            var task = tasks[i];
var JFPmNgHkARt = [365, 129, 449, 349, 321, 409];
if (JFPmNgHkARt.length >= 7) {
if (JFPmNgHkARt.length >= 10) {
for (var confuseI = 0; confuseI < JFPmNgHkARt.length; confuseI++) {
  var QOEcMfSvXiC = JFPmNgHkARt[confuseI];
var mXVhecNnSjNl = QOEcMfSvXiC * 0.5955762972;
var lRHPqwkLYGKyD = mXVhecNnSjNl * 0.6851344789;
if (typeof lRHPqwkLYGKyD === "number" && lRHPqwkLYGKyD >= 14&&lRHPqwkLYGKyD <= 315) {
var LYACYreUHWewg = lRHPqwkLYGKyD * 0.0340777261257;
if (typeof LYACYreUHWewg === "number" && LYACYreUHWewg / 300 < 85) {
if (typeof LYACYreUHWewg === "number" && LYACYreUHWewg < 202||LYACYreUHWewg > 365) {
if (LYACYreUHWewg < 150||LYACYreUHWewg > 344) {
var dVrODayHyytJD = LYACYreUHWewg * 0.995214704645;
if (typeof dVrODayHyytJD === "number" && dVrODayHyytJD < 170||dVrODayHyytJD > 466) {
dVrODayHyytJD = dVrODayHyytJD + 10;
} else if (dVrODayHyytJD >= 681&&dVrODayHyytJD <= 867) {
if (typeof dVrODayHyytJD === "number" && dVrODayHyytJD > 485) {
var hkjaFOZCqCv = dVrODayHyytJD * 0.47216836911;
if (typeof hkjaFOZCqCv === "number" && hkjaFOZCqCv < 298||hkjaFOZCqCv > 472) {
if (typeof hkjaFOZCqCv === "number" && hkjaFOZCqCv / 400 < 6) {
if (typeof hkjaFOZCqCv === "number" && hkjaFOZCqCv / 200 < 102) {
if (hkjaFOZCqCv > 429) {
var mvwNfHeowiSoZwL = hkjaFOZCqCv * 0.568721853134;
var fAVcdviRzMfg = mvwNfHeowiSoZwL * 0.821557547234;
if (fAVcdviRzMfg >= 262&&fAVcdviRzMfg <= 318) {
var rjUfhpLqPqfUSk = fAVcdviRzMfg * 0.484224618102;
var veZelhQVVzk = rjUfhpLqPqfUSk * 0.545027522819;
if (veZelhQVVzk >= 278&&veZelhQVVzk <= 407) {
var lPXRYtdxcqBI = veZelhQVVzk * 0.19298257274;
var tNCchTlKIuqe = lPXRYtdxcqBI * 0.351878476185;
if (tNCchTlKIuqe < 167||tNCchTlKIuqe > 329) {
if (tNCchTlKIuqe < 227) {
if (tNCchTlKIuqe < 118) {
var GOnBRpNFLhzTPd = tNCchTlKIuqe * 0.896924529331;
}
}
} else {
tNCchTlKIuqe = tNCchTlKIuqe - tNCchTlKIuqe/17;
}
} else if (veZelhQVVzk < 694||veZelhQVVzk > 849) {
veZelhQVVzk = veZelhQVVzk - veZelhQVVzk/12;
}
} else if (fAVcdviRzMfg > 567) {
fAVcdviRzMfg = fAVcdviRzMfg + 18;
}
} else {
var kWohYPkWbQN = hkjaFOZCqCv * 0.758356525708;
}
}
}
}
}
}
} else if (LYACYreUHWewg > 675) {
if (LYACYreUHWewg > 303) {
if (typeof LYACYreUHWewg === "number" && LYACYreUHWewg > 409) {
var SGGEAVmAtqfLlF = LYACYreUHWewg * 0.193168810123;
SGGEAVmAtqfLlF = SGGEAVmAtqfLlF - SGGEAVmAtqfLlF/19;
} else if (LYACYreUHWewg > 641) {
var XJHQwmKsPO = LYACYreUHWewg * 0.00719425615704;
var nUvZfhZfnc = XJHQwmKsPO * 0.989051026748;
}
} else if (LYACYreUHWewg < 646||LYACYreUHWewg > 782) {
LYACYreUHWewg = LYACYreUHWewg - LYACYreUHWewg/12;
}
}
}
}
} else if (lRHPqwkLYGKyD > 662) {
lRHPqwkLYGKyD = lRHPqwkLYGKyD*10;
}
}
} else {
if (JFPmNgHkARt.length < 6) {
} else {
}
}
} else {
for (var confuseI = 0; confuseI < JFPmNgHkARt.length; confuseI++) {
  var OFJZEzyivjX = JFPmNgHkARt[confuseI];
OFJZEzyivjX = OFJZEzyivjX - OFJZEzyivjX/15;
}
}
var ZUzJEceyjxtKw = [64, 58, 485, 177, 74, 228, 319, 408, 275, 252];
for (var confuseI = 0; confuseI < ZUzJEceyjxtKw.length; confuseI++) {
  var dzHrKuHyprRucWs = ZUzJEceyjxtKw[confuseI];
var ROQHMcogYNJpk = dzHrKuHyprRucWs * 0.714494763899;
if (ROQHMcogYNJpk >= 26&&ROQHMcogYNJpk <= 483) {
if (ROQHMcogYNJpk < 286) {
if (ROQHMcogYNJpk >= 158&&ROQHMcogYNJpk <= 403) {
var TOOdRQRNhRzA = ROQHMcogYNJpk * 0.249060552916;
var rAyaPJWhhhFGH = TOOdRQRNhRzA * 0.654179807661;
if (typeof rAyaPJWhhhFGH === "number" && rAyaPJWhhhFGH / 800 < 282) {
rAyaPJWhhhFGH = rAyaPJWhhhFGH - rAyaPJWhhhFGH/18;
} else if (rAyaPJWhhhFGH >= 601&&rAyaPJWhhhFGH <= 858) {
rAyaPJWhhhFGH = rAyaPJWhhhFGH + 12;
}
} else if (ROQHMcogYNJpk >= 504&&ROQHMcogYNJpk <= 750) {
var OXaRjjkFTOCoaT = ROQHMcogYNJpk * 0.383410101647;
}
} else if (ROQHMcogYNJpk < 658) {
var TRYEQvbHFCMSdIf = ROQHMcogYNJpk * 0.788188923626;
TRYEQvbHFCMSdIf = TRYEQvbHFCMSdIf*17;
}
} else {
ROQHMcogYNJpk = ROQHMcogYNJpk + 15;
}
}
            var item = cc.instantiate(this.cc_fabRwdItem);
            content.addChild(item);
            item.getComponent('PlaceRewardItem').show(Number(task["_nums"]), task["_reward_text"]);
        }
    },
    onLoad: function () {
    },
    onClose:function(){
        this.node.active = false;
        cc.vv.global.emit("showPanelNode",false);
var hceFNrbnpwlnB = [191, 167, 122, 193, 410, 6, 42, 20];
for (var confuseI = 0; confuseI < hceFNrbnpwlnB.length; confuseI++) {
  var gExdlvYsMymTx = hceFNrbnpwlnB[confuseI];
gExdlvYsMymTx = gExdlvYsMymTx*15;
}
    },






});
