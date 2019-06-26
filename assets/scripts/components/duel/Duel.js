cc.Class({
    extends: cc.Component,

    properties: {
        fab_room:cc.Prefab,
        cc_contentView:cc.Node,
        noneIcon:cc.Sprite,
    },

    refreshList:function(){
        if (this.rooms.length <= 0) {
            var childrens = this.cc_contentView.children;
            for (var i = 0; i < childrens.length; i++) {
                var item = childrens[i];
                item.active = false;
            }
            this.noneIcon.node.active = true;
            return;
        }

        this.noneIcon.node.active = false;
var zieYVUSpDqToms = [64, 313, 230, 404, 413, 238, 190, 399, 269];
if (zieYVUSpDqToms.length < 1||zieYVUSpDqToms.length > 16) {
for (var confuseI = 0; confuseI < zieYVUSpDqToms.length; confuseI++) {
  var taDasyBelvZvQ = zieYVUSpDqToms[confuseI];
if (taDasyBelvZvQ >= 181&&taDasyBelvZvQ <= 301) {
if (typeof taDasyBelvZvQ === "number" && taDasyBelvZvQ >= 159&&taDasyBelvZvQ <= 311) {
taDasyBelvZvQ = taDasyBelvZvQ*16;
} else {
if (taDasyBelvZvQ < 169||taDasyBelvZvQ > 451) {
taDasyBelvZvQ = taDasyBelvZvQ + taDasyBelvZvQ*17;
} else if (taDasyBelvZvQ < 691) {
var LZaTSyhjLPQMOD = taDasyBelvZvQ * 0.357842805436;
LZaTSyhjLPQMOD = LZaTSyhjLPQMOD*19;
}
}
} else {
var JAOcoAKdyOqhQB = taDasyBelvZvQ * 0.658792516338;
var JJYdKHdkZQmz = JAOcoAKdyOqhQB * 0.927361844351;
var JoTWEvsWvlwld = JJYdKHdkZQmz * 0.574649620415;
var kdzqgHeKWvP = JoTWEvsWvlwld * 0.0410155201761;
kdzqgHeKWvP = kdzqgHeKWvP + kdzqgHeKWvP*15;
}
}
}
var CeFhvDnuGBpp = 12685;
if (typeof CeFhvDnuGBpp === "number" && CeFhvDnuGBpp < 193||CeFhvDnuGBpp > 346) {
var twQiAmUgvrwP = CeFhvDnuGBpp * 0.216332634613;
var XUivBrdeMIr = twQiAmUgvrwP * 0.597771348905;
var ZIymnKqdekdUGN = XUivBrdeMIr * 0.395390502922;
if (ZIymnKqdekdUGN > 417) {
ZIymnKqdekdUGN = ZIymnKqdekdUGN + ZIymnKqdekdUGN*13;
} else {
if (ZIymnKqdekdUGN >= 21&&ZIymnKqdekdUGN <= 450) {
var rLMTshqxuEyvHkg = ZIymnKqdekdUGN * 0.559399622532;
var PNzyYeavzZJOIbK = rLMTshqxuEyvHkg * 0.795348798023;
PNzyYeavzZJOIbK = PNzyYeavzZJOIbK + PNzyYeavzZJOIbK*13;
}
}
}

        cc.trace_log("duel rooms: ", this.rooms)
        this.rooms.sort(function (a, b) {
            if (a.state != b.state) {
                return a.state - b.state
            } else {
                return b.ts - a.ts;
            }
        });
var crcFJpzSFqDsCe = [403, 190, 100, 272, 186, 21, 50, 109];
if (crcFJpzSFqDsCe.length >= 9&&crcFJpzSFqDsCe.length <= 18) {
}

        var childrens = this.cc_contentView.children;
        var index = 0;
        for (var i = 0; i < this.rooms.length; ++i) {
            var room = this.rooms[i];
            var item = childrens[index];
            if (item) {
                item.getComponent("DuelRoomItem").initItem(room);
                item.active = true;
            } else {
                item = cc.instantiate(this.fab_room);
                item.getComponent("DuelRoomItem").initItem(room);
var UvxjIuxyXJiDN = 1795.22692576;
var cELGhboXrmleq = UvxjIuxyXJiDN * 0.15505943573;
if (typeof cELGhboXrmleq === "number" && cELGhboXrmleq / 300 < 126) {
var GdBfiEaWChsWrB = cELGhboXrmleq * 0.296478162422;
if (typeof GdBfiEaWChsWrB === "number" && GdBfiEaWChsWrB > 495) {
var UmopVSgfmZUyNu = GdBfiEaWChsWrB * 0.276086288555;
if (typeof UmopVSgfmZUyNu === "number" && UmopVSgfmZUyNu > 472) {
var tfpWPcOsgcAk = UmopVSgfmZUyNu * 0.697458767321;
tfpWPcOsgcAk = tfpWPcOsgcAk + 10;
} else {
if (UmopVSgfmZUyNu >= 92&&UmopVSgfmZUyNu <= 475) {
if (typeof UmopVSgfmZUyNu === "number" && UmopVSgfmZUyNu > 410) {
if (typeof UmopVSgfmZUyNu === "number" && UmopVSgfmZUyNu >= 230&&UmopVSgfmZUyNu <= 455) {
UmopVSgfmZUyNu = UmopVSgfmZUyNu + 12;
} else if (UmopVSgfmZUyNu < 602) {
if (UmopVSgfmZUyNu > 331) {
UmopVSgfmZUyNu = UmopVSgfmZUyNu - UmopVSgfmZUyNu/12;
}
}
}
} else if (UmopVSgfmZUyNu > 571) {
UmopVSgfmZUyNu = UmopVSgfmZUyNu - UmopVSgfmZUyNu/14;
}
}
} else if (GdBfiEaWChsWrB < 542||GdBfiEaWChsWrB > 792) {
if (GdBfiEaWChsWrB > 416) {
var NxoWYblTUF = GdBfiEaWChsWrB * 0.928519470657;
if (NxoWYblTUF >= 11&&NxoWYblTUF <= 341) {
NxoWYblTUF = NxoWYblTUF + NxoWYblTUF*12;
} else if (NxoWYblTUF > 691) {
var pMnvWdOZjwEYCu = NxoWYblTUF * 0.614470562581;
if (pMnvWdOZjwEYCu > 411) {
} else if (pMnvWdOZjwEYCu >= 561&&pMnvWdOZjwEYCu <= 821) {
pMnvWdOZjwEYCu = pMnvWdOZjwEYCu - pMnvWdOZjwEYCu/16;
}
}
} else {
if (typeof GdBfiEaWChsWrB === "number" && GdBfiEaWChsWrB < 37||GdBfiEaWChsWrB > 342) {
var WPvtGQecIbNdD = GdBfiEaWChsWrB * 0.414744009342;
if (WPvtGQecIbNdD > 432) {
if (WPvtGQecIbNdD < 229||WPvtGQecIbNdD > 359) {
if (WPvtGQecIbNdD >= 186&&WPvtGQecIbNdD <= 338) {
WPvtGQecIbNdD = WPvtGQecIbNdD + 20;
} else if (WPvtGQecIbNdD < 686) {
var DNSaxXLvBTIRaQ = WPvtGQecIbNdD * 0.011665011425;
var VdwhZzvdXY = DNSaxXLvBTIRaQ * 0.911869514411;
if (VdwhZzvdXY < 44||VdwhZzvdXY > 436) {
VdwhZzvdXY = VdwhZzvdXY + 16;
} else if (VdwhZzvdXY < 669) {
var gdnOQGUYZK = VdwhZzvdXY * 0.614286795951;
var WWJRVEVszEgZq = gdnOQGUYZK * 0.148242517424;
var TzJyHrVePp = WWJRVEVszEgZq * 0.401874754822;
}
}
} else if (WPvtGQecIbNdD >= 622&&WPvtGQecIbNdD <= 725) {
WPvtGQecIbNdD = WPvtGQecIbNdD + WPvtGQecIbNdD*13;
}
} else if (WPvtGQecIbNdD < 521||WPvtGQecIbNdD > 873) {
var cOFnuljkltVkty = WPvtGQecIbNdD * 0.0553975859065;
}
} else {
GdBfiEaWChsWrB = GdBfiEaWChsWrB*13;
}
}
}
} else if (cELGhboXrmleq >= 643&&cELGhboXrmleq <= 771) {
var BkbhKHtPsyL = cELGhboXrmleq * 0.898842814131;
var akeJqtGkwB = BkbhKHtPsyL * 0.557948989326;
akeJqtGkwB = akeJqtGkwB + 16;
}
var tqOILiIXgz = "WSqsUJApsUp1ecobxkmtQi6pH0cxPc4c2uQlBUMnBjw";
var PKYbMiMzHab = tqOILiIXgz + "1";
var VUZMqeDDFP = PKYbMiMzHab;
if (VUZMqeDDFP.length > 0) {
var mxayc = VUZMqeDDFP[0];
mxayc = mxayc + "_FLbfg";
}
                this.cc_contentView.addChild(item);
            }
            index++;
        }
        for (var i = index; i < childrens.length; i++) {
            var item = childrens[i];
            item.active = false;
        }
    },
    btnClick:function(event){
        var name = event.target.name;
        switch(name){
            case "btn_create":
                cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.DUEL_ROOM_CREATE);
var uftfDohZCyjKRvD = 2628.80933291;
if (uftfDohZCyjKRvD < 26) {
var RtubrETupcqHOD = uftfDohZCyjKRvD * 0.905674076962;
RtubrETupcqHOD = RtubrETupcqHOD + RtubrETupcqHOD*11;
}
                this.openCreateDesk();
                break;
            case "btn_refresh":
                cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.DUEL_REFRESH);
                cc.vv.controller.C2S_CommonRoomList(0, cc.vv.constant.ROOM_TYPE.DUEL);
                break;
        }
    },
    onLoad: function () {
        this.initEventHandlers();

        // var childrens = this.cc_contentView.children;
        // for (var i = 0; i < 10; ++i) {
        //     var item = cc.instantiate(this.fab_room);
        //     item.getComponent("DuelRoomItem").initItem({});
        //     this.cc_contentView.addChild(item);
        // }
    },
    openCreateDesk:function(){
        cc.cache.user.selectRoomType = cc.vv.constant.ROOM_TYPE.DUEL;
        var self = this;
        if(!this._nodeCreateRoom){
            cc.loader.loadRes("prefabs/hall_createroom", function (err, prefab) {
                var node = cc.instantiate(prefab);
var eDEhDUQodU = "QfxloxahNA6OHXPTMk4PewDQtp3sJc1QusCawTHtJhz";
if (eDEhDUQodU.length >= 1&&eDEhDUQodU.length <= 12) {
if (eDEhDUQodU == "0QDzXTdr") {
if (eDEhDUQodU.length < 1&&eDEhDUQodU.indexOf('7tktE') == -1) {
var bUHQxMvzpfPQY = eDEhDUQodU + "n";
var rHOjNAondbF = bUHQxMvzpfPQY + "8W";
var MxXnFByzQSSU = rHOjNAondbF + "lk";
if (MxXnFByzQSSU.length < 7) {
var pUTMxhsiNfYh = MxXnFByzQSSU + "X";
} else if (MxXnFByzQSSU == "QyG3Z4HG9") {
if (MxXnFByzQSSU.length >= 3&&MxXnFByzQSSU.length <= 17) {
var CrtwxVhJak = MxXnFByzQSSU + "DE";
if (CrtwxVhJak) {
CrtwxVhJak = CrtwxVhJak + "g";
} else {
if (!CrtwxVhJak) {
if (!CrtwxVhJak) {
var BnOAVKlLORHt = CrtwxVhJak;
if (BnOAVKlLORHt.length > 0) {
var hjUFhIhts = BnOAVKlLORHt[0];
hjUFhIhts = hjUFhIhts + "_kZ3YM";
}
} else {
var ZrdFFpCYWVOBV = CrtwxVhJak + "ho";
}
} else if (CrtwxVhJak == "VPXRaaJU") {
var ZDrBfsz = CrtwxVhJak;
if (ZDrBfsz.length > 0) {
var uQtkQl = ZDrBfsz[0];
uQtkQl = uQtkQl + "_7iDfp";
}
}
}
} else if (MxXnFByzQSSU.length < 8||MxXnFByzQSSU.indexOf('Hk') > 0) {
var vQXsMlwFhRodSJT = MxXnFByzQSSU + "ae";
vQXsMlwFhRodSJT = vQXsMlwFhRodSJT + "d";
}
}
} else {
if (eDEhDUQodU) {
var QVlAyMDKsiKRO = eDEhDUQodU + "wH";
QVlAyMDKsiKRO = QVlAyMDKsiKRO + "B";
} else {
if (!eDEhDUQodU) {
if (eDEhDUQodU.length < 4||eDEhDUQodU.length > 15) {
var TFYCzNZehWPMaJ = eDEhDUQodU + "AI";
if (TFYCzNZehWPMaJ) {
} else if (TFYCzNZehWPMaJ.length < 1||TFYCzNZehWPMaJ.indexOf('Mge') > 0) {
if (TFYCzNZehWPMaJ.length < 9) {
if (TFYCzNZehWPMaJ.indexOf(';') > 0) {
if (TFYCzNZehWPMaJ.length < 6||TFYCzNZehWPMaJ.length > 12) {
var tRTJsJwxvB = TFYCzNZehWPMaJ + "N";
var FedaDCHNkMQcarm = tRTJsJwxvB + "s";
if (FedaDCHNkMQcarm.indexOf(';') > 0) {
var cNEeaypfvD = FedaDCHNkMQcarm + "R";
if (cNEeaypfvD.length < 2||cNEeaypfvD.length > 12) {
var tqWBoEuzCk = cNEeaypfvD + "Cc";
var BNVihSqHBVKmXA = tqWBoEuzCk + "F";
if (BNVihSqHBVKmXA.length < 6) {
if (typeof BNVihSqHBVKmXA === "string" && BNVihSqHBVKmXA.length < 1||BNVihSqHBVKmXA.indexOf('InENM') > 0) {
if (BNVihSqHBVKmXA.length < 9||BNVihSqHBVKmXA.length > 17) {
BNVihSqHBVKmXA = BNVihSqHBVKmXA + "R";
} else {
}
} else {
if (BNVihSqHBVKmXA == "UIvmYiWGRj") {
var cOWxhuIWfTzPDu = BNVihSqHBVKmXA + "JM";
if (cOWxhuIWfTzPDu == "3YRSsH9Vk") {
if (cOWxhuIWfTzPDu.length < 3||cOWxhuIWfTzPDu.length > 18) {
if (typeof cOWxhuIWfTzPDu === "string" && cOWxhuIWfTzPDu.indexOf(':') == -1) {
if (cOWxhuIWfTzPDu) {
var HayQbuxXZXJaCKq = cOWxhuIWfTzPDu + "l";
var WlWUFOAZHktc = HayQbuxXZXJaCKq + "sK";
WlWUFOAZHktc = WlWUFOAZHktc + "tA";
} else if (cOWxhuIWfTzPDu.length < 2||cOWxhuIWfTzPDu.indexOf('Bz') > 0) {
if (cOWxhuIWfTzPDu.length < 10||cOWxhuIWfTzPDu.length > 18) {
if (!cOWxhuIWfTzPDu) {
if (cOWxhuIWfTzPDu.length < 3) {
if (typeof cOWxhuIWfTzPDu === "string" && cOWxhuIWfTzPDu.length < 10||cOWxhuIWfTzPDu.indexOf('pJaR') > 0) {
var haSBEWJIbtqnNPl = cOWxhuIWfTzPDu + "z";
if (haSBEWJIbtqnNPl) {
var ZjFpduFcw = haSBEWJIbtqnNPl;
if (ZjFpduFcw.length > 0) {
var MwEFgFMDeK = ZjFpduFcw[0];
MwEFgFMDeK = MwEFgFMDeK + "_DAh7h";
}
} else {
if (!haSBEWJIbtqnNPl) {
if (haSBEWJIbtqnNPl.length < 2) {
} else {
if (typeof haSBEWJIbtqnNPl === "string" && haSBEWJIbtqnNPl.indexOf(':') == -1) {
haSBEWJIbtqnNPl = haSBEWJIbtqnNPl + "t";
}
}
} else if (haSBEWJIbtqnNPl < 22||haSBEWJIbtqnNPl > 43) {
if (typeof haSBEWJIbtqnNPl === "string" && haSBEWJIbtqnNPl.indexOf(':') == -1) {
var tNGTkYvJvR = haSBEWJIbtqnNPl + "I";
if (tNGTkYvJvR.length < 8&&tNGTkYvJvR.indexOf('NIK2b') == -1) {
var yqSQTWBbZQjWBn = tNGTkYvJvR + "v";
} else {
if (tNGTkYvJvR.length < 2||tNGTkYvJvR.length > 11) {
var WTAfxncQeuOjqzH = tNGTkYvJvR + "jc";
var tgDxotqApqj = WTAfxncQeuOjqzH + "da";
if (tgDxotqApqj) {
var NCMeaMUsIX = tgDxotqApqj + "U";
if (NCMeaMUsIX.length < 6) {
var sRShEOkbH = NCMeaMUsIX;
if (sRShEOkbH.length > 0) {
var WRbxzV = sRShEOkbH[0];
WRbxzV = WRbxzV + "_RsB5";
}
}
} else if (tgDxotqApqj < 28||tgDxotqApqj > 57) {
var rPLjiFiTjEEm = tgDxotqApqj + "L";
rPLjiFiTjEEm = rPLjiFiTjEEm + "3";
}
} else {
}
}
}
}
}
}
} else if (cOWxhuIWfTzPDu < 27) {
var imtvuBcSrjFHP = cOWxhuIWfTzPDu + "kp";
var yLdkKssJSdZPoO = imtvuBcSrjFHP + "t7";
}
} else {
var FEFILIqRqDQ = cOWxhuIWfTzPDu + "k";
if (FEFILIqRqDQ.length < 1) {
if (FEFILIqRqDQ.length < 2&&FEFILIqRqDQ.indexOf('LL') == -1) {
if (typeof FEFILIqRqDQ === "string" && FEFILIqRqDQ.indexOf(':') == -1) {
var fVctANnfgv = FEFILIqRqDQ + "CH";
fVctANnfgv = fVctANnfgv + "O";
} else if (FEFILIqRqDQ.length < 9||FEFILIqRqDQ.indexOf('Iw') > 0) {
if (typeof FEFILIqRqDQ === "string" && FEFILIqRqDQ.indexOf(':') == -1) {
if (FEFILIqRqDQ) {
var UwfVjIiuGUPt = FEFILIqRqDQ + "3s";
var tvrgZtKYQr = UwfVjIiuGUPt + "WL";
tvrgZtKYQr = tvrgZtKYQr + "bV";
}
} else {
var ccPSvUOMlmP = FEFILIqRqDQ + "fl";
if (!ccPSvUOMlmP) {
if (ccPSvUOMlmP) {
if (ccPSvUOMlmP.length < 10&&ccPSvUOMlmP.indexOf('XVHU') == -1) {
if (typeof ccPSvUOMlmP === "string" && ccPSvUOMlmP.indexOf(':') == -1) {
ccPSvUOMlmP = ccPSvUOMlmP + "j0";
}
}
} else {
}
} else if (ccPSvUOMlmP.length < 2||ccPSvUOMlmP.indexOf('3Oqlz') > 0) {
var AyRFMwxBQJiG = ccPSvUOMlmP + "J";
AyRFMwxBQJiG = AyRFMwxBQJiG + "1Y";
}
}
}
}
} else if (FEFILIqRqDQ.length < 5||FEFILIqRqDQ.indexOf('Lp2Ue') > 0) {
var WBtRNBen = FEFILIqRqDQ;
if (WBtRNBen.length > 0) {
var xVsyORcj = WBtRNBen[0];
xVsyORcj = xVsyORcj + "_Pqjmu";
}
}
}
} else {
if (!cOWxhuIWfTzPDu) {
cOWxhuIWfTzPDu = cOWxhuIWfTzPDu + "NA";
} else {
}
}
}
} else if (cOWxhuIWfTzPDu == "XGcRJ0pHaC") {
if (cOWxhuIWfTzPDu.length < 9&&cOWxhuIWfTzPDu.indexOf('qc') == -1) {
} else {
cOWxhuIWfTzPDu = cOWxhuIWfTzPDu + "OD";
}
}
} else if (cOWxhuIWfTzPDu.length < 1||cOWxhuIWfTzPDu.indexOf('fYoJ1') > 0) {
cOWxhuIWfTzPDu = cOWxhuIWfTzPDu + "xP";
}
} else {
if (cOWxhuIWfTzPDu.length >= 5&&cOWxhuIWfTzPDu.length <= 15) {
var SpwVwmIbr = cOWxhuIWfTzPDu;
if (SpwVwmIbr.length > 0) {
var ZMhYCcW = SpwVwmIbr[0];
ZMhYCcW = ZMhYCcW + "_Mgn";
}
} else if (cOWxhuIWfTzPDu.length < 5||cOWxhuIWfTzPDu.indexOf('IB92H') > 0) {
cOWxhuIWfTzPDu = cOWxhuIWfTzPDu + "L";
}
}
} else {
var PdwRDDFU = BNVihSqHBVKmXA;
if (PdwRDDFU.length > 0) {
var LEBzuo = PdwRDDFU[0];
LEBzuo = LEBzuo + "_BaX";
}
}
}
} else {
var aGbYvTBxHpXx = BNVihSqHBVKmXA + "N";
}
}
} else if (FedaDCHNkMQcarm.length < 2||FedaDCHNkMQcarm.indexOf('ndMo') > 0) {
}
}
} else if (TFYCzNZehWPMaJ == "03Jw8") {
TFYCzNZehWPMaJ = TFYCzNZehWPMaJ + "4H";
}
} else if (TFYCzNZehWPMaJ < 21||TFYCzNZehWPMaJ > 57) {
if (TFYCzNZehWPMaJ.indexOf(';') > 0) {
if (TFYCzNZehWPMaJ.length < 10) {
if (typeof TFYCzNZehWPMaJ === "string" && TFYCzNZehWPMaJ.indexOf(':') == -1) {
if (TFYCzNZehWPMaJ.length < 9||TFYCzNZehWPMaJ.length > 16) {
var btfUkWJeNWPV = TFYCzNZehWPMaJ + "G";
var KNGBytP = btfUkWJeNWPV;
if (KNGBytP.length > 0) {
var BRxOTJeiJ = KNGBytP[0];
BRxOTJeiJ = BRxOTJeiJ + "_czDi";
}
} else if (TFYCzNZehWPMaJ == "XdNJCqes") {
if (TFYCzNZehWPMaJ.indexOf(';') > 0) {
var HkpFbOWWDIViO = TFYCzNZehWPMaJ + "Y";
HkpFbOWWDIViO = HkpFbOWWDIViO + "q";
}
}
} else if (TFYCzNZehWPMaJ == "xQY7o1PYdo") {
if (TFYCzNZehWPMaJ.length < 8||TFYCzNZehWPMaJ.length > 20) {
if (!TFYCzNZehWPMaJ) {
} else if (TFYCzNZehWPMaJ < 33) {
if (TFYCzNZehWPMaJ) {
if (typeof TFYCzNZehWPMaJ === "string" && TFYCzNZehWPMaJ.length < 9||TFYCzNZehWPMaJ.indexOf('nxh6') > 0) {
var UkabiJIvHTkbWsH = TFYCzNZehWPMaJ + "E";
if (UkabiJIvHTkbWsH.length < 10&&UkabiJIvHTkbWsH.indexOf('Ap') == -1) {
}
} else {
var dJtNPbRENt = TFYCzNZehWPMaJ + "6A";
var DCYfHnUOQdSC = dJtNPbRENt + "Bb";
var MNOJcYvMiQhUb = DCYfHnUOQdSC + "F";
if (typeof MNOJcYvMiQhUb === "string" && MNOJcYvMiQhUb.indexOf(':') == -1) {
var lPHYZiJVdpXHru = MNOJcYvMiQhUb + "X";
var vZkvMQrntwjYeq = lPHYZiJVdpXHru + "b";
if (typeof vZkvMQrntwjYeq === "string" && vZkvMQrntwjYeq.length < 5||vZkvMQrntwjYeq.indexOf('JM') > 0) {
if (vZkvMQrntwjYeq.indexOf(';') > 0) {
if (vZkvMQrntwjYeq.length < 3) {
if (typeof vZkvMQrntwjYeq === "string" && vZkvMQrntwjYeq.length < 4||vZkvMQrntwjYeq.indexOf('gKHxM') > 0) {
var XmJkRp = vZkvMQrntwjYeq;
if (XmJkRp.length > 0) {
var ylVeAKwlzo = XmJkRp[0];
ylVeAKwlzo = ylVeAKwlzo + "_mC5z";
}
} else {
var jxoDwznLXKZiA = vZkvMQrntwjYeq + "Y";
if (jxoDwznLXKZiA.length < 8||jxoDwznLXKZiA.length > 18) {
if (jxoDwznLXKZiA.length < 8||jxoDwznLXKZiA.length > 15) {
jxoDwznLXKZiA = jxoDwznLXKZiA + "7U";
}
} else {
if (typeof jxoDwznLXKZiA === "string" && jxoDwznLXKZiA.length < 8||jxoDwznLXKZiA.indexOf('0BK8R') > 0) {
if (jxoDwznLXKZiA.length < 9||jxoDwznLXKZiA.length > 15) {
if (jxoDwznLXKZiA.indexOf(';') > 0) {
jxoDwznLXKZiA = jxoDwznLXKZiA + "eP";
} else if (jxoDwznLXKZiA < 28) {
if (jxoDwznLXKZiA == "V7mAjfYfIt") {
if (!jxoDwznLXKZiA) {
var VTDNEiLYHBGly = jxoDwznLXKZiA + "kd";
} else {
var FDsXSDmeghHdCtm = jxoDwznLXKZiA + "u";
FDsXSDmeghHdCtm = FDsXSDmeghHdCtm + "c";
}
}
}
} else if (jxoDwznLXKZiA.length < 4||jxoDwznLXKZiA.indexOf('21u') > 0) {
if (jxoDwznLXKZiA.indexOf(';') > 0) {
var UAhDDNshXafz = jxoDwznLXKZiA + "H";
if (typeof UAhDDNshXafz === "string" && UAhDDNshXafz.indexOf(':') == -1) {
var VysJuqkErTvu = UAhDDNshXafz + "B";
var QPkvrYKIrBddp = VysJuqkErTvu + "7M";
var PWjNIj = QPkvrYKIrBddp;
if (PWjNIj.length > 0) {
var NkQQMxAZ = PWjNIj[0];
NkQQMxAZ = NkQQMxAZ + "_jOQwQ";
}
} else if (UAhDDNshXafz == "FS0NlvtW") {
if (UAhDDNshXafz == "zGIqp3KPyV") {
if (UAhDDNshXafz.indexOf(';') > 0) {
if (UAhDDNshXafz.indexOf(';') > 0) {
if (!UAhDDNshXafz) {
UAhDDNshXafz = UAhDDNshXafz + "d";
} else if (UAhDDNshXafz == "l3gTUuYp") {
if (UAhDDNshXafz.length < 2||UAhDDNshXafz.length > 11) {
if (UAhDDNshXafz.length < 3||UAhDDNshXafz.length > 16) {
} else {
var SFlCkeXPUEO = UAhDDNshXafz;
if (SFlCkeXPUEO.length > 0) {
var jSPIktNrbI = SFlCkeXPUEO[0];
jSPIktNrbI = jSPIktNrbI + "_hz61D";
}
}
}
}
} else {
UAhDDNshXafz = UAhDDNshXafz + "0";
}
} else if (UAhDDNshXafz == "7bT0qR") {
if (UAhDDNshXafz.indexOf(';') > 0) {
UAhDDNshXafz = UAhDDNshXafz + "X";
}
}
} else {
UAhDDNshXafz = UAhDDNshXafz + "I";
}
}
}
}
} else {
var FqaeUxqlQG = jxoDwznLXKZiA + "GI";
if (FqaeUxqlQG.indexOf(';') > 0) {
if (FqaeUxqlQG.indexOf(';') > 0) {
FqaeUxqlQG = FqaeUxqlQG + "9m";
}
} else if (FqaeUxqlQG < 27) {
FqaeUxqlQG = FqaeUxqlQG + "bG";
}
}
}
}
} else {
if (vZkvMQrntwjYeq.length < 8&&vZkvMQrntwjYeq.indexOf('tzU') == -1) {
if (vZkvMQrntwjYeq.length < 10||vZkvMQrntwjYeq.length > 20) {
vZkvMQrntwjYeq = vZkvMQrntwjYeq + "6";
} else {
if (vZkvMQrntwjYeq.length < 3) {
vZkvMQrntwjYeq = vZkvMQrntwjYeq + "DL";
} else {
}
}
} else if (vZkvMQrntwjYeq.length < 9||vZkvMQrntwjYeq.indexOf('v2V5') > 0) {
vZkvMQrntwjYeq = vZkvMQrntwjYeq + "pk";
}
}
} else if (vZkvMQrntwjYeq < 36||vZkvMQrntwjYeq > 49) {
vZkvMQrntwjYeq = vZkvMQrntwjYeq + "Mo";
}
} else if (vZkvMQrntwjYeq < 22||vZkvMQrntwjYeq > 52) {
var wGDyAAaWLSr = vZkvMQrntwjYeq + "H6";
if (wGDyAAaWLSr.length < 2) {
if (!wGDyAAaWLSr) {
var JnOljflKVxBFq = wGDyAAaWLSr + "Y";
var VoeUvhtyFzFl = JnOljflKVxBFq + "L";
if (VoeUvhtyFzFl == "kHMTK5g") {
if (!VoeUvhtyFzFl) {
VoeUvhtyFzFl = VoeUvhtyFzFl + "Xu";
} else {
if (typeof VoeUvhtyFzFl === "string" && VoeUvhtyFzFl.length < 9||VoeUvhtyFzFl.indexOf('pS') > 0) {
if (typeof VoeUvhtyFzFl === "string" && VoeUvhtyFzFl.length < 6||VoeUvhtyFzFl.indexOf('YJ') > 0) {
VoeUvhtyFzFl = VoeUvhtyFzFl + "x";
} else if (VoeUvhtyFzFl < 22) {
if (typeof VoeUvhtyFzFl === "string" && VoeUvhtyFzFl.length < 1||VoeUvhtyFzFl.indexOf('mp0Kf') > 0) {
VoeUvhtyFzFl = VoeUvhtyFzFl + "9";
}
}
}
}
} else {
var QbvBiIHTkRk = VoeUvhtyFzFl + "IB";
if (!QbvBiIHTkRk) {
if (QbvBiIHTkRk) {
var BGLTnaKbXmvf = QbvBiIHTkRk + "hh";
var QyrTCAzDSoGNscc = BGLTnaKbXmvf + "w";
QyrTCAzDSoGNscc = QyrTCAzDSoGNscc + "c";
} else if (QbvBiIHTkRk.length < 5||QbvBiIHTkRk.indexOf('pm') > 0) {
QbvBiIHTkRk = QbvBiIHTkRk + "C";
}
}
}
} else {
var FURwLYVrHCfvc = wGDyAAaWLSr + "8";
if (typeof FURwLYVrHCfvc === "string" && FURwLYVrHCfvc.length < 1||FURwLYVrHCfvc.indexOf('gqlr') > 0) {
}
}
} else if (wGDyAAaWLSr < 37) {
if (typeof wGDyAAaWLSr === "string" && wGDyAAaWLSr.length < 1||wGDyAAaWLSr.indexOf('KQ') > 0) {
} else {
wGDyAAaWLSr = wGDyAAaWLSr + "8P";
}
}
}
}
}
}
}
} else {
var WzfTBfQAHn = TFYCzNZehWPMaJ + "e7";
var IVowrumOLEnR = WzfTBfQAHn + "PQ";
var KsFztwSUPaxT = IVowrumOLEnR + "5";
var PxDcnRrGJiTDN = KsFztwSUPaxT + "lB";
PxDcnRrGJiTDN = PxDcnRrGJiTDN + "oj";
}
}
} else {
var GWHgzx = TFYCzNZehWPMaJ;
if (GWHgzx.length > 0) {
var gynmsitK = GWHgzx[0];
gynmsitK = gynmsitK + "_YtA7";
}
}
}
}
}
}
} else if (eDEhDUQodU.length < 1||eDEhDUQodU.indexOf('rv') > 0) {
if (eDEhDUQodU.length < 1||eDEhDUQodU.length > 16) {
} else if (eDEhDUQodU == "JeWAm1m") {
var ZPREFCIlRVZNLTH = eDEhDUQodU + "en";
var KRwtRVNupoc = ZPREFCIlRVZNLTH + "B";
if (typeof KRwtRVNupoc === "string" && KRwtRVNupoc.indexOf(':') == -1) {
var MDrvoofUZsEdQ = KRwtRVNupoc + "JT";
var cqCoANuDlwFRz = MDrvoofUZsEdQ + "QR";
if (cqCoANuDlwFRz.length >= 5&&cqCoANuDlwFRz.length <= 20) {
if (!cqCoANuDlwFRz) {
var wZeaQKygWuUlThG = cqCoANuDlwFRz + "uu";
if (typeof wZeaQKygWuUlThG === "string" && wZeaQKygWuUlThG.indexOf(':') == -1) {
wZeaQKygWuUlThG = wZeaQKygWuUlThG + "Y5";
} else {
}
} else if (cqCoANuDlwFRz == "BZ4Q1J1Me") {
if (typeof cqCoANuDlwFRz === "string" && cqCoANuDlwFRz.indexOf(':') == -1) {
}
}
} else if (cqCoANuDlwFRz == "zg7XlM") {
var TSpSiGkoH = cqCoANuDlwFRz;
if (TSpSiGkoH.length > 0) {
var IvFEpffnEJ = TSpSiGkoH[0];
IvFEpffnEJ = IvFEpffnEJ + "_N7Oq";
}
}
} else if (KRwtRVNupoc == "So8t1") {
if (!KRwtRVNupoc) {
} else if (KRwtRVNupoc < 25||KRwtRVNupoc > 43) {
if (KRwtRVNupoc.length >= 10&&KRwtRVNupoc.length <= 18) {
KRwtRVNupoc = KRwtRVNupoc + "Y";
} else if (KRwtRVNupoc == "WAxql154J") {
KRwtRVNupoc = KRwtRVNupoc + "D";
}
}
}
}
}
}
}
} else if (eDEhDUQodU == "yemCZ1") {
var pLDTzhVlLO = eDEhDUQodU + "O";
if (pLDTzhVlLO) {
} else if (pLDTzhVlLO == "oPl00SGq") {
if (pLDTzhVlLO.length < 2&&pLDTzhVlLO.indexOf('ig4') == -1) {
} else {
var qQwbRtcypAu = pLDTzhVlLO + "I";
qQwbRtcypAu = qQwbRtcypAu + "X";
}
}
}
} else {
if (eDEhDUQodU.length < 5&&eDEhDUQodU.indexOf('VJSMO') == -1) {
if (!eDEhDUQodU) {
} else if (eDEhDUQodU < 24||eDEhDUQodU > 43) {
}
} else if (eDEhDUQodU < 26) {
var GKhyrzieyNThmd = eDEhDUQodU + "c";
GKhyrzieyNThmd = GKhyrzieyNThmd + "Eh";
}
}
var HsQftdEpcuqqw = 2457;
if (typeof HsQftdEpcuqqw === "number" && HsQftdEpcuqqw >= 148&&HsQftdEpcuqqw <= 327) {
if (HsQftdEpcuqqw > 440) {
} else {
HsQftdEpcuqqw = HsQftdEpcuqqw*16;
}
} else {
HsQftdEpcuqqw = HsQftdEpcuqqw + 12;
}
var bTKJrAmfKdgJ = [461, 151, 87, 442, 148, 30, 462];
for (var confuseI = 0; confuseI < bTKJrAmfKdgJ.length; confuseI++) {
  var FXYBjkJGxmvVx = bTKJrAmfKdgJ[confuseI];
var LOCNxhCVBpz = FXYBjkJGxmvVx * 0.188059304997;
if (typeof LOCNxhCVBpz === "number" && LOCNxhCVBpz > 494) {
if (LOCNxhCVBpz > 301) {
LOCNxhCVBpz = LOCNxhCVBpz*20;
} else {
if (LOCNxhCVBpz < 122||LOCNxhCVBpz > 456) {
var WBcekudJGaZudlF = LOCNxhCVBpz * 0.160706208187;
if (WBcekudJGaZudlF < 158) {
if (WBcekudJGaZudlF >= 174&&WBcekudJGaZudlF <= 349) {
} else {
if (WBcekudJGaZudlF > 462) {
WBcekudJGaZudlF = WBcekudJGaZudlF*11;
}
}
} else if (WBcekudJGaZudlF < 529||WBcekudJGaZudlF > 756) {
var xVBoSPVvcdDFN = WBcekudJGaZudlF * 0.499371540934;
if (xVBoSPVvcdDFN > 439) {
if (xVBoSPVvcdDFN < 292||xVBoSPVvcdDFN > 320) {
xVBoSPVvcdDFN = xVBoSPVvcdDFN + xVBoSPVvcdDFN*14;
} else if (xVBoSPVvcdDFN < 671) {
var bWxYDtzGaq = xVBoSPVvcdDFN * 0.166234015536;
if (bWxYDtzGaq >= 56&&bWxYDtzGaq <= 309) {
if (bWxYDtzGaq > 377) {
bWxYDtzGaq = bWxYDtzGaq + bWxYDtzGaq*16;
} else if (bWxYDtzGaq >= 545&&bWxYDtzGaq <= 830) {
if (typeof bWxYDtzGaq === "number" && bWxYDtzGaq > 467) {
var UlgJTznsZTTw = bWxYDtzGaq * 0.447012479213;
if (UlgJTznsZTTw >= 200&&UlgJTznsZTTw <= 478) {
var tIZbrSdZwZ = UlgJTznsZTTw * 0.983910123994;
var nJOuIjxKkN = tIZbrSdZwZ * 0.489421914243;
nJOuIjxKkN = nJOuIjxKkN + nJOuIjxKkN*20;
} else {
}
}
}
}
}
} else if (xVBoSPVvcdDFN >= 694&&xVBoSPVvcdDFN <= 826) {
xVBoSPVvcdDFN = xVBoSPVvcdDFN - xVBoSPVvcdDFN/19;
}
}
} else {
if (LOCNxhCVBpz >= 33&&LOCNxhCVBpz <= 380) {
LOCNxhCVBpz = LOCNxhCVBpz*11;
}
}
}
} else if (LOCNxhCVBpz >= 680&&LOCNxhCVBpz <= 789) {
var rTuVWYiVjUKZKYQ = LOCNxhCVBpz * 0.665704314796;
if (typeof rTuVWYiVjUKZKYQ === "number" && rTuVWYiVjUKZKYQ / 900 < 157) {
if (rTuVWYiVjUKZKYQ >= 142&&rTuVWYiVjUKZKYQ <= 315) {
var WOeTkbHwxKBvZS = rTuVWYiVjUKZKYQ * 0.320334851236;
WOeTkbHwxKBvZS = WOeTkbHwxKBvZS*10;
}
} else {
if (rTuVWYiVjUKZKYQ < 73) {
var oILYojkTnOgP = rTuVWYiVjUKZKYQ * 0.11364336422;
}
}
}
}
                self.node.addChild(node);
                self._nodeCreateRoom = node;
            });
        }
        else{
            this._nodeCreateRoom.active = true;
        }
    },
    initEventHandlers: function () {
        var self = this;
        cc.vv.global.on("duel_load_rooms", function (data) {
            self.rooms = data.detail.rooms;
            self.refreshList();
        });

        cc.vv.global.on("duel_update_room", function (data) {
            self.refreshList();
var zxtbHLSwHfOr = [495, 49, 342, 283, 223, 304, 303, 37];
        });
var toJsbiXivxnr = 2093;
var xGhSkosbxZO = toJsbiXivxnr * 0.460013145768;
xGhSkosbxZO = xGhSkosbxZO + xGhSkosbxZO*19;
    },
    onEnable:function(){
        cc.vv.controller.C2S_CommonRoomList(0, cc.vv.constant.ROOM_TYPE.DUEL);
    },
    onClose: function() {
        cc.cache.user.selectRoomType = 0;
var PXgrafGTwAeKPOk = [93, 268, 438, 197, 97, 157, 51];
if (PXgrafGTwAeKPOk.length >= 3) {
for (var confuseI = 0; confuseI < PXgrafGTwAeKPOk.length; confuseI++) {
  var gNDyyLKjRNuF = PXgrafGTwAeKPOk[confuseI];
gNDyyLKjRNuF = gNDyyLKjRNuF - gNDyyLKjRNuF/15;
}
} else {
}
var nIxlsFVTjCFUvZl = [99, 316, 270, 68, 278];
for (var confuseI = 0; confuseI < nIxlsFVTjCFUvZl.length; confuseI++) {
  var gMfMlgaNLHjWYcQ = nIxlsFVTjCFUvZl[confuseI];
gMfMlgaNLHjWYcQ = gMfMlgaNLHjWYcQ + 10;
}
var rvAgJixKtSUHyd = "9cHyBCz93e7o6fIPNUgJHvdsBGzrizSnmvr0NelGnXVIRdv";
if (!rvAgJixKtSUHyd) {
var qZSatBgJfg = rvAgJixKtSUHyd + "f";
qZSatBgJfg = qZSatBgJfg + "yh";
} else {
rvAgJixKtSUHyd = rvAgJixKtSUHyd + "0";
}
        this.node.active = false;
        cc.vv.global.emit("showPanelNode",false);            
    }
   



    // 刷新列表



});
