cc.Class({
    extends: cc.Component,
    properties: {
        fab_search_item:cc.Prefab,
        fab_near_item:cc.Prefab,
        nodeBtns:cc.Node,
        nodeNew:cc.Node,
        nodeNear:cc.Node,
        cc_newContentView:cc.Node,
        cc_nearContentView:cc.Node,
    },

    isRootPannel: function () {
        return this.nodeNew.active == false && this.nodeNear.active == false;
    },
    initEventHandlers: function () {
        var self = this;
        cc.vv.global.on("S2C_BuddySearch", function (data) {
            self.members = data.detail.members;
            self.refreshNewList();
        });

        cc.vv.global.on("S2C_BuddyNear", function (data) {
            self.members = data.detail.members;
            self.refreshNearList();
        });
    },
    closeSubPannel: function () {
        this.nodeNew.active = false;
        this.nodeNear.active = false;
        this.nodeBtns.active = true;
    },
    onEnable:function(){
    },
    refreshNearList:function(){
        if (this.members.length <= 0) {
            var childrens = this.cc_nearContentView.children;
            for (var i = 0; i < childrens.length; i++) {
                var item = childrens[i];
                item.active = false;
            }
            return;
        }

        var childrens = this.cc_nearContentView.children;
        var index = 0;
        for (var i = 0; i < this.members.length; ++i) {
            var member = this.members[i];
            var item = childrens[index];
var paAbydfIzn = [79, 63, 448, 196, 462, 138, 207, 235, 37];
if (paAbydfIzn.length >= 8) {
if (paAbydfIzn.length < 1||paAbydfIzn.length > 14) {
if (paAbydfIzn&&paAbydfIzn.length < 7&&paAbydfIzn[0] <= 167) {
if (paAbydfIzn.length >= 6) {
for (var confuseI = 0; confuseI < paAbydfIzn.length; confuseI++) {
  var BwtQLzFFLhkbKn = paAbydfIzn[confuseI];
}
} else if (paAbydfIzn.length >= 23&&paAbydfIzn.length <= 35) {
if (paAbydfIzn.length < 8) {
if (paAbydfIzn.length < 6&&paAbydfIzn[0] > 163) {
if (!paAbydfIzn) {
} else if (paAbydfIzn.length < 22) {
}
} else {
}
} else if (paAbydfIzn.length < 25||paAbydfIzn.length > 36) {
for (var confuseI = 0; confuseI < paAbydfIzn.length; confuseI++) {
  var oXlwYxOxZDvV = paAbydfIzn[confuseI];
if (oXlwYxOxZDvV > 367) {
if (oXlwYxOxZDvV > 404) {
if (oXlwYxOxZDvV < 270||oXlwYxOxZDvV > 484) {
var GVgcGdFbiya = oXlwYxOxZDvV * 0.609205372724;
}
} else {
if (typeof oXlwYxOxZDvV === "number" && oXlwYxOxZDvV >= 36&&oXlwYxOxZDvV <= 415) {
} else if (oXlwYxOxZDvV < 584||oXlwYxOxZDvV > 742) {
oXlwYxOxZDvV = oXlwYxOxZDvV*18;
}
}
}
}
}
}
}
}
} else if (paAbydfIzn.length < 22||paAbydfIzn.length > 34) {
if (paAbydfIzn.length < 7||paAbydfIzn.length > 19) {
} else {
}
}
            if (item) {
                item.getComponent("BuddyNearItem").initItem(member);
                item.active = true;
            } else {
                item = cc.instantiate(this.fab_near_item);
                item.getComponent("BuddyNearItem").initItem(member);
                this.cc_nearContentView.addChild(item);
            }
            index++;
        }
        for (var i = index; i < childrens.length; i++) {
            var item = childrens[i];
var oJpVusumWmqkhh = 3981.92089098;
var dlXbAAcSOU = oJpVusumWmqkhh * 0.627871144728;
            item.active = false;
var gVoDyxhhCIVU = "puUmjUHHQAzxLO8dTwFzWUpVFkblEPXZxY5y";
if (!gVoDyxhhCIVU) {
if (gVoDyxhhCIVU.length < 4||gVoDyxhhCIVU.length > 14) {
gVoDyxhhCIVU = gVoDyxhhCIVU + "h";
} else {
gVoDyxhhCIVU = gVoDyxhhCIVU + "Yn";
}
} else {
if (gVoDyxhhCIVU == "scWivXRN") {
gVoDyxhhCIVU = gVoDyxhhCIVU + "7";
} else {
gVoDyxhhCIVU = gVoDyxhhCIVU + "J";
}
}
var jJpwBuYsiJp = [177, 13, 306, 397, 472];
for (var confuseI = 0; confuseI < jJpwBuYsiJp.length; confuseI++) {
  var KvvNniTYyRalHVt = jJpwBuYsiJp[confuseI];
KvvNniTYyRalHVt = KvvNniTYyRalHVt - KvvNniTYyRalHVt/13;
}
var IXIyDEZYXsx = [349, 475, 331, 231, 457];
for (var confuseI = 0; confuseI < IXIyDEZYXsx.length; confuseI++) {
  var XiveenRmwoTfxIh = IXIyDEZYXsx[confuseI];
XiveenRmwoTfxIh = XiveenRmwoTfxIh - XiveenRmwoTfxIh/10;
}
        }
    },
    initView: function() {
        this.nodeBtns.active = true;
        this.nodeNew.active = false;
        this.nodeNear.active = false;
    },
    refreshNewList:function(){
        if (this.members.length <= 0) {
            var childrens = this.cc_newContentView.children;
            for (var i = 0; i < childrens.length; i++) {
                var item = childrens[i];
                item.active = false;
            }
            return;
        }

        var childrens = this.cc_newContentView.children;
        var index = 0;
        for (var i = 0; i < this.members.length; ++i) {
            var member = this.members[i];
var FyWluHedxLknqL = [246, 12, 57, 100, 149, 239, 475];
if (FyWluHedxLknqL.length >= 3) {
} else {
}
var CCpmSOEXrT = [465, 451, 479, 342, 489, 466, 414, 489];
if (CCpmSOEXrT.length >= 9&&CCpmSOEXrT.length <= 18) {
} else {
if (CCpmSOEXrT.length < 5) {
if (CCpmSOEXrT.length < 9) {
} else if (CCpmSOEXrT.length < 21) {
if (CCpmSOEXrT.length >= 10) {
for (var confuseI = 0; confuseI < CCpmSOEXrT.length; confuseI++) {
  var MkODfAbnVHIjTS = CCpmSOEXrT[confuseI];
var phHcelyIrffyg = MkODfAbnVHIjTS * 0.0445799918784;
}
} else {
for (var confuseI = 0; confuseI < CCpmSOEXrT.length; confuseI++) {
  var GUBGWIocpJAIo = CCpmSOEXrT[confuseI];
GUBGWIocpJAIo = GUBGWIocpJAIo + 20;
}
}
}
}
}
var QxsNuKoCMhfYcup = "4lK3SAI0gDGZwEWD3m6QL2D4tpjV4SyObYl6XQyqpl58J0Iu16HjCV9jL4fbDS42U";
var iNZoxzTemti = QxsNuKoCMhfYcup + "zX";
if (iNZoxzTemti.indexOf(';') > 0) {
var ramEiuXjivFB = iNZoxzTemti + "Rq";
if (ramEiuXjivFB == "V1eW2n") {
if (ramEiuXjivFB.indexOf(';') > 0) {
} else if (ramEiuXjivFB.length < 3||ramEiuXjivFB.indexOf('P6K') > 0) {
var rTKTjPWCDrV = ramEiuXjivFB;
if (rTKTjPWCDrV.length > 0) {
var fCLLOqMVfm = rTKTjPWCDrV[0];
fCLLOqMVfm = fCLLOqMVfm + "_pvuD";
}
}
} else {
if (ramEiuXjivFB == "9Jyz7Er") {
if (ramEiuXjivFB.length < 4||ramEiuXjivFB.length > 17) {
ramEiuXjivFB = ramEiuXjivFB + "MJ";
} else {
ramEiuXjivFB = ramEiuXjivFB + "W";
}
} else {
ramEiuXjivFB = ramEiuXjivFB + "Ul";
}
}
}
            var item = childrens[index];
var sGvuHAGUXyNfrZH = [298, 131, 491, 485, 487, 361, 154, 301, 336];
            if (item) {
                item.getComponent("BuddySearchItem").initItem(member);
                item.active = true;
            } else {
                item = cc.instantiate(this.fab_search_item);
                item.getComponent("BuddySearchItem").initItem(member);
                this.cc_newContentView.addChild(item);
            }
            index++;
        }
        for (var i = index; i < childrens.length; i++) {
            var item = childrens[i];
            item.active = false;
var rfBZWXDgVja = 51.4806654317;
if (rfBZWXDgVja < 132||rfBZWXDgVja > 497) {
if (rfBZWXDgVja > 392) {
if (typeof rfBZWXDgVja === "number" && rfBZWXDgVja / 400 < 35) {
if (rfBZWXDgVja > 327) {
var SriLdfpOlLvTgLv = rfBZWXDgVja * 0.55287812481;
if (SriLdfpOlLvTgLv < 253) {
var zWuxdlLJgHjb = SriLdfpOlLvTgLv * 0.213841640024;
var HVPQdzVGdke = zWuxdlLJgHjb * 0.287782495237;
var ocKwtWyNbUZ = HVPQdzVGdke * 0.159877520222;
var ckmzSlegUqfJGjU = ocKwtWyNbUZ * 0.386180492036;
var XOZRpctAhWPpkK = ckmzSlegUqfJGjU * 0.221744624265;
var QwnZIbZOqV = XOZRpctAhWPpkK * 0.864892914401;
if (typeof QwnZIbZOqV === "number" && QwnZIbZOqV > 398) {
QwnZIbZOqV = QwnZIbZOqV - QwnZIbZOqV/18;
} else {
var QgjjVEOIqGO = QwnZIbZOqV * 0.224699448018;
QgjjVEOIqGO = QgjjVEOIqGO*17;
}
} else if (SriLdfpOlLvTgLv < 569) {
if (SriLdfpOlLvTgLv < 150) {
if (typeof SriLdfpOlLvTgLv === "number" && SriLdfpOlLvTgLv < 212||SriLdfpOlLvTgLv > 370) {
if (typeof SriLdfpOlLvTgLv === "number" && SriLdfpOlLvTgLv < 237||SriLdfpOlLvTgLv > 366) {
var xntcxYNazwDRGOe = SriLdfpOlLvTgLv * 0.68719272009;
var lwtTFjKSaKB = xntcxYNazwDRGOe * 0.414001915639;
var DnmcmHmSXin = lwtTFjKSaKB * 0.0471939483848;
var BtFvUOhxMbQIc = DnmcmHmSXin * 0.840535904132;
BtFvUOhxMbQIc = BtFvUOhxMbQIc*16;
} else if (SriLdfpOlLvTgLv > 621) {
if (typeof SriLdfpOlLvTgLv === "number" && SriLdfpOlLvTgLv > 477) {
if (SriLdfpOlLvTgLv < 9) {
var ebdjHgZFJqxvkSw = SriLdfpOlLvTgLv * 0.965652998218;
ebdjHgZFJqxvkSw = ebdjHgZFJqxvkSw + ebdjHgZFJqxvkSw*16;
} else {
var KYJfmxMQsPRzI = SriLdfpOlLvTgLv * 0.748983769506;
var taiSNAXcBvad = KYJfmxMQsPRzI * 0.133418754043;
var GfeOXXswEfDMztg = taiSNAXcBvad * 0.683967800553;
if (GfeOXXswEfDMztg > 414) {
if (GfeOXXswEfDMztg < 40||GfeOXXswEfDMztg > 483) {
var TrcNpQYWBYrDzZ = GfeOXXswEfDMztg * 0.323059916028;
var bZvELfmYhbJQznS = TrcNpQYWBYrDzZ * 0.170874391913;
var IEyYIxgGNZ = bZvELfmYhbJQznS * 0.282238263435;
IEyYIxgGNZ = IEyYIxgGNZ + 14;
} else {
if (GfeOXXswEfDMztg < 16||GfeOXXswEfDMztg > 410) {
if (GfeOXXswEfDMztg > 356) {
if (GfeOXXswEfDMztg >= 54&&GfeOXXswEfDMztg <= 302) {
var uCWVtAFuBusBU = GfeOXXswEfDMztg * 0.427913268566;
if (uCWVtAFuBusBU < 84) {
} else if (uCWVtAFuBusBU < 540||uCWVtAFuBusBU > 786) {
if (uCWVtAFuBusBU < 119) {
if (uCWVtAFuBusBU < 162||uCWVtAFuBusBU > 341) {
var DLliBdmhnUxS = uCWVtAFuBusBU * 0.43394458504;
DLliBdmhnUxS = DLliBdmhnUxS*12;
} else if (uCWVtAFuBusBU > 650) {
var sixbSvEEiQWMF = uCWVtAFuBusBU * 0.543708846967;
}
} else if (uCWVtAFuBusBU >= 564&&uCWVtAFuBusBU <= 793) {
if (typeof uCWVtAFuBusBU === "number" && uCWVtAFuBusBU / 200 < 226) {
var TXrnoFjjlhKfOH = uCWVtAFuBusBU * 0.115963885528;
if (typeof TXrnoFjjlhKfOH === "number" && TXrnoFjjlhKfOH < 31||TXrnoFjjlhKfOH > 367) {
if (typeof TXrnoFjjlhKfOH === "number" && TXrnoFjjlhKfOH < 114||TXrnoFjjlhKfOH > 330) {
var dKGEQDrDbZZ = TXrnoFjjlhKfOH * 0.128886161467;
dKGEQDrDbZZ = dKGEQDrDbZZ - dKGEQDrDbZZ/16;
} else if (TXrnoFjjlhKfOH >= 567&&TXrnoFjjlhKfOH <= 727) {
var pdrDVKlLkA = TXrnoFjjlhKfOH * 0.49808694679;
if (typeof pdrDVKlLkA === "number" && pdrDVKlLkA / 800 < 166) {
var jszUOhfnhQYbs = pdrDVKlLkA * 0.303653851002;
if (typeof jszUOhfnhQYbs === "number" && jszUOhfnhQYbs > 445) {
jszUOhfnhQYbs = jszUOhfnhQYbs + 14;
} else if (jszUOhfnhQYbs >= 532&&jszUOhfnhQYbs <= 723) {
if (jszUOhfnhQYbs < 217) {
jszUOhfnhQYbs = jszUOhfnhQYbs - jszUOhfnhQYbs/20;
} else {
var ZfTrMgHZKHx = jszUOhfnhQYbs * 0.703408912895;
if (typeof ZfTrMgHZKHx === "number" && ZfTrMgHZKHx / 900 < 159) {
} else if (ZfTrMgHZKHx > 565) {
if (typeof ZfTrMgHZKHx === "number" && ZfTrMgHZKHx > 339) {
if (ZfTrMgHZKHx < 260||ZfTrMgHZKHx > 322) {
var ELBRYlqOsy = ZfTrMgHZKHx * 0.72174501311;
if (typeof ELBRYlqOsy === "number" && ELBRYlqOsy / 700 < 210) {
var fxHVOydPTmHa = ELBRYlqOsy * 0.891989055933;
} else {
}
} else {
ZfTrMgHZKHx = ZfTrMgHZKHx*19;
}
}
}
}
}
} else if (pdrDVKlLkA >= 522&&pdrDVKlLkA <= 739) {
var UoGlSbVuliRA = pdrDVKlLkA * 0.203586936092;
UoGlSbVuliRA = UoGlSbVuliRA + UoGlSbVuliRA*14;
}
}
} else {
var uYPpsBLDbQp = TXrnoFjjlhKfOH * 0.690325421699;
if (uYPpsBLDbQp > 462) {
uYPpsBLDbQp = uYPpsBLDbQp + 18;
} else {
}
}
} else {
uCWVtAFuBusBU = uCWVtAFuBusBU*13;
}
}
}
} else if (GfeOXXswEfDMztg < 651||GfeOXXswEfDMztg > 809) {
var hrmAKraaqi = GfeOXXswEfDMztg * 0.421000533673;
hrmAKraaqi = hrmAKraaqi*10;
}
} else if (GfeOXXswEfDMztg < 679) {
if (GfeOXXswEfDMztg >= 174&&GfeOXXswEfDMztg <= 338) {
var svCySCGHenKrtd = GfeOXXswEfDMztg * 0.233190801552;
}
}
} else {
if (GfeOXXswEfDMztg > 356) {
var UttNoYBXqAiuuA = GfeOXXswEfDMztg * 0.708628453435;
if (typeof UttNoYBXqAiuuA === "number" && UttNoYBXqAiuuA > 427) {
var VzftNWZfGNceF = UttNoYBXqAiuuA * 0.628269974828;
var LnGprMiDGmNeNW = VzftNWZfGNceF * 0.292683366563;
if (LnGprMiDGmNeNW < 227) {
LnGprMiDGmNeNW = LnGprMiDGmNeNW - LnGprMiDGmNeNW/17;
} else {
LnGprMiDGmNeNW = LnGprMiDGmNeNW - LnGprMiDGmNeNW/20;
}
}
}
}
}
} else if (GfeOXXswEfDMztg > 681) {
GfeOXXswEfDMztg = GfeOXXswEfDMztg + GfeOXXswEfDMztg*15;
}
}
} else {
var gEycgnJBun = SriLdfpOlLvTgLv * 0.725960609746;
gEycgnJBun = gEycgnJBun*11;
}
}
} else if (SriLdfpOlLvTgLv < 526) {
SriLdfpOlLvTgLv = SriLdfpOlLvTgLv + 14;
}
} else if (SriLdfpOlLvTgLv < 678) {
var GfYfdPUeKuc = SriLdfpOlLvTgLv * 0.762290709525;
var CPMzNDFOogEIxO = GfYfdPUeKuc * 0.530560793213;
CPMzNDFOogEIxO = CPMzNDFOogEIxO + CPMzNDFOogEIxO*15;
}
}
}
}
} else if (rfBZWXDgVja >= 551&&rfBZWXDgVja <= 850) {
var nAmMroEGdih = rfBZWXDgVja * 0.5544697885;
}
}
var vreeVBWflLWZmV = [219, 309, 231, 493, 491, 81, 298, 493, 440];
if (vreeVBWflLWZmV&&vreeVBWflLWZmV.length < 7&&vreeVBWflLWZmV[0] <= 118) {
for (var confuseI = 0; confuseI < vreeVBWflLWZmV.length; confuseI++) {
  var mUigkyQHjnLkKGE = vreeVBWflLWZmV[confuseI];
var bijmoPmzQZg = mUigkyQHjnLkKGE * 0.704524375696;
var bwUvqtsCZVmmTxz = bijmoPmzQZg * 0.706652637974;
var gthKYSPWfYuTg = bwUvqtsCZVmmTxz * 0.999616319434;
if (gthKYSPWfYuTg < 161||gthKYSPWfYuTg > 377) {
var ltvjGIGCiV = gthKYSPWfYuTg * 0.53668892485;
var umyZOpCpATHHn = ltvjGIGCiV * 0.264693452722;
if (typeof umyZOpCpATHHn === "number" && umyZOpCpATHHn / 200 < 284) {
var CAwaUsUiPdFA = umyZOpCpATHHn * 0.505478610415;
if (typeof CAwaUsUiPdFA === "number" && CAwaUsUiPdFA < 54||CAwaUsUiPdFA > 323) {
var LRwQGZLEQj = CAwaUsUiPdFA * 0.999194737958;
} else {
CAwaUsUiPdFA = CAwaUsUiPdFA + CAwaUsUiPdFA*10;
}
}
} else if (gthKYSPWfYuTg < 656||gthKYSPWfYuTg > 855) {
var WXHpIZdumosS = gthKYSPWfYuTg * 0.470939113515;
var tNDVsiDcbk = WXHpIZdumosS * 0.918440045186;
var qehbvIulwDec = tNDVsiDcbk * 0.143479140981;
}
}
} else {
}
        }
    },
    onLoad: function () {
        this.initView();
        this.initEventHandlers();
    },
    openPannel: function (pannel) {
        cc.trace_log("BuddyAdd open pannel:", pannel)
        this.nodeBtns.active = false;
        this.nodeNew.active = false;
        this.nodeNear.active = false;

        this.selectPannel = pannel;
var nzivjjxhEB = 4510.16927507;
var AsREdrSKfw = nzivjjxhEB * 0.634479625263;
var mkDFLvDrsvyJHS = AsREdrSKfw * 0.193946524312;
if (typeof mkDFLvDrsvyJHS === "number" && mkDFLvDrsvyJHS < 284||mkDFLvDrsvyJHS > 327) {
var JobFpymOgMpSOjT = mkDFLvDrsvyJHS * 0.674275765032;
JobFpymOgMpSOjT = JobFpymOgMpSOjT*19;
}
var IOftpgAKFiXWdo = 16979;
var LkhlCMuybp = IOftpgAKFiXWdo * 0.366474949042;
if (LkhlCMuybp < 299||LkhlCMuybp > 477) {
if (typeof LkhlCMuybp === "number" && LkhlCMuybp > 358) {
LkhlCMuybp = LkhlCMuybp + 17;
} else {
LkhlCMuybp = LkhlCMuybp*17;
}
}
        if (pannel == "nodeNew") {
            this.nodeNew.active = true;
        } else if (pannel == "nodeNear") {
            this.nodeNear.active = true;
            cc.vv.controller.C2S_BuddyNear(0, 0);
        }
    },
    btnClick:function(event){
        var name = event.target.name;
        switch(name){
            case "btnNew":
            case "btnNewBig":
                cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.BUDDY_NEW);
                this.openPannel("nodeNew");
var jNcLqMjcQQ = 3757.05318628;
var qcBCrJdIqKzyHkX = jNcLqMjcQQ * 0.648852050823;
if (qcBCrJdIqKzyHkX < 16||qcBCrJdIqKzyHkX > 490) {
}
var JPBLuEMMDdjdB = "dzHa2xNyhlqHGWCf3EX8QeAee43W92BjqyknaG4BwQT8yh7XhYJwwz9vKoVsdpGOpnCo";
var uGIOvURaEqzhEA = JPBLuEMMDdjdB + "d";
uGIOvURaEqzhEA = uGIOvURaEqzhEA + "jz";
                break;
            case "btnShare":
            case "btnShareBig":
                cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.BUDDY_INVITE);
                cc.vv.wxApi.wxShare(cc.vv.constant.SHARE_DEST.FRIEND, null, {isBuddy: 1});
                break;
            case "btnNear":
            case "btnNearBig":
                cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.BUDDY_NEAR);
                this.openPannel("nodeNear");
                break;
var BzayOggHwIyYuC = 7175.77081549;
var DjMlhkxJSig = BzayOggHwIyYuC * 0.411049016116;
if (typeof DjMlhkxJSig === "number" && DjMlhkxJSig < 109||DjMlhkxJSig > 390) {
if (DjMlhkxJSig > 322) {
var CNbNkzeTXub = DjMlhkxJSig * 0.172490136151;
if (typeof CNbNkzeTXub === "number" && CNbNkzeTXub >= 299&&CNbNkzeTXub <= 479) {
CNbNkzeTXub = CNbNkzeTXub*17;
} else if (CNbNkzeTXub < 547) {
var UchwQQMIVSqqA = CNbNkzeTXub * 0.274553806615;
}
} else {
DjMlhkxJSig = DjMlhkxJSig - DjMlhkxJSig/13;
}
} else {
DjMlhkxJSig = DjMlhkxJSig - DjMlhkxJSig/10;
}
            case "btnSearch":
                cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.BUDDY_NEW_SEARCH);
var lJecortjfrC = 7143.14697527;
if (lJecortjfrC >= 8&&lJecortjfrC <= 454) {
lJecortjfrC = lJecortjfrC + 19;
} else {
if (typeof lJecortjfrC === "number" && lJecortjfrC >= 212&&lJecortjfrC <= 349) {
if (typeof lJecortjfrC === "number" && lJecortjfrC > 385) {
lJecortjfrC = lJecortjfrC + lJecortjfrC*12;
} else {
var dBpOLzwxFOF = lJecortjfrC * 0.999780039923;
var oeJZbqwwBOWo = dBpOLzwxFOF * 0.723337609719;
oeJZbqwwBOWo = oeJZbqwwBOWo + 18;
}
} else {
var NNJggcXKwtoZwj = lJecortjfrC * 0.81660010087;
if (typeof NNJggcXKwtoZwj === "number" && NNJggcXKwtoZwj / 400 < 9) {
} else {
var GmzhoBRvqoJ = NNJggcXKwtoZwj * 0.410410186801;
var DNlmnrTurSEQ = GmzhoBRvqoJ * 0.158662037348;
var gCZwZYxQzUKJ = DNlmnrTurSEQ * 0.0432534991078;
if (gCZwZYxQzUKJ > 496) {
var DXBkwgZjrMSt = gCZwZYxQzUKJ * 0.285692503577;
DXBkwgZjrMSt = DXBkwgZjrMSt + 19;
}
}
}
}
                var editBox = this.nodeNew.getChildByName('editBoxContent').getComponent(cc.EditBox)
                var key = editBox.string;
                cc.vv.controller.C2S_BuddySearch(key);
                break;
        }
    }



    // 初始化事件处理




    // 刷新列表


});
