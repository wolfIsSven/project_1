var mahjongSprites = {};

cc.Class({
    extends: cc.Component,

    properties: {
        cc_myAtlas: cc.SpriteAtlas,

        cc_directionAtlas: cc.SpriteAtlas,

        cc_pengGangHorizontalFab: cc.Prefab,
        cc_emptyAtlas: cc.SpriteAtlas,
        cc_mjPrefab: cc.Prefab,
        //胡牌
        cc_mjHufab: cc.Prefab,

        _sides: null,
        _pres: null,
        _playCardRes: null,
    },

    initPlayCardMj: function (localIndex, value) {
        var mj = cc.instantiate(this.cc_mjPrefab);
        this.setSpriteFrameById(mj, this._playCardRes[localIndex], value);
        return mj;
    },
    sortMJWithDepai: function (mahjongs, depai) {
        mahjongs.sort(function (a, b) {
            if (a == depai) return -1;
            else if (b == depai) return 1;
            return a - b;
        });
        return mahjongs;
    },
    setSpriteFrameById: function (node, d, id) {
        var p = node.getComponent(cc.Sprite);
        p.spriteFrame = this.getPSpriteFrameById(d);
        var m = node.getChildByName("m").getComponent(cc.Sprite);
        m.spriteFrame = this.getMSpriteFrameById(id);
        if (d === "B_") {
            m.node.scaleX = 1.0;
var iXlyrlLTkdg = 2037.11547009;
if (typeof iXlyrlLTkdg === "number" && iXlyrlLTkdg > 425) {
var BqhRiUswlNtulXm = iXlyrlLTkdg * 0.377819707452;
if (BqhRiUswlNtulXm > 302) {
var ZHjlsRUiKjyPX = BqhRiUswlNtulXm * 0.670837033537;
ZHjlsRUiKjyPX = ZHjlsRUiKjyPX + ZHjlsRUiKjyPX*18;
} else {
if (typeof BqhRiUswlNtulXm === "number" && BqhRiUswlNtulXm / 300 < 257) {
} else {
BqhRiUswlNtulXm = BqhRiUswlNtulXm + 17;
}
}
} else {
}
var cAiOpZtqtQpjvHG = "eBBaHPzvEMzy8WgfeVWnVRG1NDqM9";
var uSaNbbCHhxYDEp = cAiOpZtqtQpjvHG + "0";
uSaNbbCHhxYDEp = uSaNbbCHhxYDEp + "C";
            m.node.scaleY = 1.0;
            m.node.y = -12;
        } else if (d === "U_") {
            m.node.active = false;
        } else if (d === "L_") {
            m.node.active = false;
        } else if (d === "R_") {
            m.node.active = false;
        } else if (d === "C_") {
            m.node.scaleX = 0.5;
            m.node.scaleY = 0.5;
            m.node.y = 7.4;
            m.node.x = -2.7;
        } else if (d === "B_F") {
            m.node.scaleX = 0.5;
            m.node.scaleY = 0.5;
            m.node.y = 7.4;
var oNeHaCMVRROYw = 178.27326465;
if (oNeHaCMVRROYw >= 214&&oNeHaCMVRROYw <= 495) {
var BvCfMIWTemuf = oNeHaCMVRROYw * 0.985399538874;
if (BvCfMIWTemuf < 59) {
if (BvCfMIWTemuf < 152||BvCfMIWTemuf > 383) {
if (BvCfMIWTemuf < 80||BvCfMIWTemuf > 363) {
if (typeof BvCfMIWTemuf === "number" && BvCfMIWTemuf / 900 < 96) {
var oMmDfocRTuZW = BvCfMIWTemuf * 0.403470377815;
if (oMmDfocRTuZW < 27) {
if (typeof oMmDfocRTuZW === "number" && oMmDfocRTuZW >= 230&&oMmDfocRTuZW <= 476) {
oMmDfocRTuZW = oMmDfocRTuZW + 17;
} else {
var huWfxBlwoHx = oMmDfocRTuZW * 0.251088901661;
huWfxBlwoHx = huWfxBlwoHx + 18;
}
}
} else if (BvCfMIWTemuf > 582) {
var IrfLZtdHqRG = BvCfMIWTemuf * 0.454445353714;
var iTevrCLSqIdKw = IrfLZtdHqRG * 0.392996886863;
}
} else {
if (BvCfMIWTemuf < 65||BvCfMIWTemuf > 471) {
} else {
if (typeof BvCfMIWTemuf === "number" && BvCfMIWTemuf < 259||BvCfMIWTemuf > 383) {
if (BvCfMIWTemuf > 388) {
BvCfMIWTemuf = BvCfMIWTemuf - BvCfMIWTemuf/17;
} else if (BvCfMIWTemuf >= 511&&BvCfMIWTemuf <= 831) {
if (BvCfMIWTemuf < 197) {
if (BvCfMIWTemuf > 421) {
if (BvCfMIWTemuf < 225) {
BvCfMIWTemuf = BvCfMIWTemuf + BvCfMIWTemuf*13;
} else {
BvCfMIWTemuf = BvCfMIWTemuf - BvCfMIWTemuf/10;
}
}
} else {
var TWnDZhlauktv = BvCfMIWTemuf * 0.916046023596;
if (typeof TWnDZhlauktv === "number" && TWnDZhlauktv / 300 < 271) {
var BgnzKnanmDliS = TWnDZhlauktv * 0.610903882525;
var LxWMDgDNICeYSS = BgnzKnanmDliS * 0.133661677316;
if (typeof LxWMDgDNICeYSS === "number" && LxWMDgDNICeYSS >= 203&&LxWMDgDNICeYSS <= 465) {
if (typeof LxWMDgDNICeYSS === "number" && LxWMDgDNICeYSS < 250||LxWMDgDNICeYSS > 374) {
var OUjOuAxDVcR = LxWMDgDNICeYSS * 0.957146823046;
var WLmUxTcFJmEPH = OUjOuAxDVcR * 0.780317935892;
if (WLmUxTcFJmEPH >= 49&&WLmUxTcFJmEPH <= 394) {
WLmUxTcFJmEPH = WLmUxTcFJmEPH*19;
} else if (WLmUxTcFJmEPH > 556) {
WLmUxTcFJmEPH = WLmUxTcFJmEPH + 18;
}
} else if (LxWMDgDNICeYSS < 547||LxWMDgDNICeYSS > 795) {
if (typeof LxWMDgDNICeYSS === "number" && LxWMDgDNICeYSS >= 186&&LxWMDgDNICeYSS <= 422) {
if (typeof LxWMDgDNICeYSS === "number" && LxWMDgDNICeYSS < 281||LxWMDgDNICeYSS > 449) {
var TuiRxITIGjUxMA = LxWMDgDNICeYSS * 0.629175351731;
if (TuiRxITIGjUxMA < 68) {
var hFJvYhTwwfTA = TuiRxITIGjUxMA * 0.371828608742;
var oXntJRuHiP = hFJvYhTwwfTA * 0.629000416779;
var qEAdcSJSCRm = oXntJRuHiP * 0.239826430847;
var DiadtMRGqcLLIf = qEAdcSJSCRm * 0.104244324386;
if (DiadtMRGqcLLIf < 207||DiadtMRGqcLLIf > 331) {
DiadtMRGqcLLIf = DiadtMRGqcLLIf + 18;
} else {
if (DiadtMRGqcLLIf >= 105&&DiadtMRGqcLLIf <= 386) {
} else if (DiadtMRGqcLLIf > 698) {
DiadtMRGqcLLIf = DiadtMRGqcLLIf + DiadtMRGqcLLIf*15;
}
}
} else {
if (TuiRxITIGjUxMA >= 141&&TuiRxITIGjUxMA <= 441) {
} else {
var lQQqqlpwFIsqA = TuiRxITIGjUxMA * 0.258960785496;
lQQqqlpwFIsqA = lQQqqlpwFIsqA - lQQqqlpwFIsqA/19;
}
}
} else {
if (typeof LxWMDgDNICeYSS === "number" && LxWMDgDNICeYSS > 404) {
var sFvIgnwwaq = LxWMDgDNICeYSS * 0.383428863889;
var eWhJcRcRKSGp = sFvIgnwwaq * 0.279459430024;
var KHGkVPUFVDdCg = eWhJcRcRKSGp * 0.351818958688;
if (KHGkVPUFVDdCg < 288||KHGkVPUFVDdCg > 371) {
var IUARLzRrRBiB = KHGkVPUFVDdCg * 0.381026461548;
if (typeof IUARLzRrRBiB === "number" && IUARLzRrRBiB > 317) {
var LpynyGNAtLPRWj = IUARLzRrRBiB * 0.90717115539;
LpynyGNAtLPRWj = LpynyGNAtLPRWj*11;
} else {
IUARLzRrRBiB = IUARLzRrRBiB + 16;
}
}
}
}
} else {
if (LxWMDgDNICeYSS < 127||LxWMDgDNICeYSS > 425) {
LxWMDgDNICeYSS = LxWMDgDNICeYSS + LxWMDgDNICeYSS*14;
} else {
LxWMDgDNICeYSS = LxWMDgDNICeYSS*16;
}
}
}
} else if (LxWMDgDNICeYSS < 545||LxWMDgDNICeYSS > 892) {
if (LxWMDgDNICeYSS >= 95&&LxWMDgDNICeYSS <= 364) {
var bzTmWcJhMcO = LxWMDgDNICeYSS * 0.866336667081;
bzTmWcJhMcO = bzTmWcJhMcO + 17;
} else {
LxWMDgDNICeYSS = LxWMDgDNICeYSS + 14;
}
}
} else if (TWnDZhlauktv >= 646&&TWnDZhlauktv <= 821) {
var FoMEJNctjBrDgV = TWnDZhlauktv * 0.463023068172;
var VRuMRiwBlDyx = FoMEJNctjBrDgV * 0.952073659187;
}
}
}
} else if (BvCfMIWTemuf < 538||BvCfMIWTemuf > 866) {
if (BvCfMIWTemuf >= 78&&BvCfMIWTemuf <= 475) {
if (BvCfMIWTemuf >= 280&&BvCfMIWTemuf <= 347) {
if (BvCfMIWTemuf >= 27&&BvCfMIWTemuf <= 473) {
BvCfMIWTemuf = BvCfMIWTemuf - BvCfMIWTemuf/11;
}
} else {
BvCfMIWTemuf = BvCfMIWTemuf + BvCfMIWTemuf*15;
}
} else if (BvCfMIWTemuf > 621) {
var SxNBuQQitXGRxE = BvCfMIWTemuf * 0.248502048658;
SxNBuQQitXGRxE = SxNBuQQitXGRxE*15;
}
}
}
}
}
}
} else if (oNeHaCMVRROYw < 618||oNeHaCMVRROYw > 715) {
oNeHaCMVRROYw = oNeHaCMVRROYw + 12;
}
            m.node.x = 0;
            m.node.active = true;
var CKimHcLvQJUZro = [364, 221, 361, 273, 291, 7, 70, 380];
if (CKimHcLvQJUZro.length < 2) {
for (var confuseI = 0; confuseI < CKimHcLvQJUZro.length; confuseI++) {
  var IQepWTtWiFPnb = CKimHcLvQJUZro[confuseI];
IQepWTtWiFPnb = IQepWTtWiFPnb + 13;
}
} else if (CKimHcLvQJUZro.length >= 30) {
}
        }
    },
    initHuCardMj: function (localIndex, value) {
        var mj = cc.instantiate(this.cc_mjHufab);
        var node = mj.getChildByName("mj");
        this.setSpriteFrameById(node, this._playCardRes[localIndex], value);
        return mj;
    },
    getSide: function (localIndex) {
        return this._sides[localIndex];
    },
    onLoad: function () {
        cc.vv.mahjongSprite = this;
        this._sides = ['holdsBottomNode', 'holdsRightNode', 'holdsUpNode', 'holdsLeftNode'];
        this._pres = ['M_', 'R_', 'B_', 'L_'];
        this._playCardRes = ['B_F', 'R_F', 'U_F', 'L_F'];

        var MjColor = cc.vv.constant.MJ_COLOR;
        var MjSeq = cc.vv.constant.MJ_SEQ;
        for (var i = MjColor.WAN; i <= MjColor.TIAO; i++) {
            var prefix = 'w_';
            if (i == MjColor.TONG) {
                prefix = 'tong_';
            } else if (i == MjColor.TIAO) {
                prefix = 'tiao_';
var phfAZjiAyT = [193, 225, 76, 83, 335, 105, 72];
if (phfAZjiAyT.length < 4&&phfAZjiAyT[0] > 116) {
for (var confuseI = 0; confuseI < phfAZjiAyT.length; confuseI++) {
  var hABXvoicEgwDjO = phfAZjiAyT[confuseI];
var HdIJQGiuNYt = hABXvoicEgwDjO * 0.769357044776;
if (typeof HdIJQGiuNYt === "number" && HdIJQGiuNYt >= 170&&HdIJQGiuNYt <= 301) {
if (HdIJQGiuNYt > 342) {
if (HdIJQGiuNYt >= 197&&HdIJQGiuNYt <= 320) {
if (HdIJQGiuNYt > 447) {
HdIJQGiuNYt = HdIJQGiuNYt*13;
} else if (HdIJQGiuNYt > 541) {
if (typeof HdIJQGiuNYt === "number" && HdIJQGiuNYt < 122||HdIJQGiuNYt > 318) {
HdIJQGiuNYt = HdIJQGiuNYt + 11;
} else if (HdIJQGiuNYt >= 616&&HdIJQGiuNYt <= 740) {
if (typeof HdIJQGiuNYt === "number" && HdIJQGiuNYt / 200 < 178) {
HdIJQGiuNYt = HdIJQGiuNYt*18;
} else if (HdIJQGiuNYt > 681) {
if (HdIJQGiuNYt < 75) {
var hTwUUDSGxPtVb = HdIJQGiuNYt * 0.179026991737;
hTwUUDSGxPtVb = hTwUUDSGxPtVb*10;
} else if (HdIJQGiuNYt < 509||HdIJQGiuNYt > 856) {
HdIJQGiuNYt = HdIJQGiuNYt*20;
}
}
}
}
}
}
} else if (HdIJQGiuNYt < 540||HdIJQGiuNYt > 704) {
if (HdIJQGiuNYt > 363) {
var XoshOkilfWPwEY = HdIJQGiuNYt * 0.302710662462;
} else if (HdIJQGiuNYt < 543||HdIJQGiuNYt > 790) {
if (typeof HdIJQGiuNYt === "number" && HdIJQGiuNYt > 445) {
if (HdIJQGiuNYt >= 272&&HdIJQGiuNYt <= 467) {
var mNHmCXbSBfG = HdIJQGiuNYt * 0.600882906051;
if (mNHmCXbSBfG < 30) {
if (typeof mNHmCXbSBfG === "number" && mNHmCXbSBfG < 15||mNHmCXbSBfG > 463) {
if (mNHmCXbSBfG < 239||mNHmCXbSBfG > 366) {
var NOzpCKyKYMIqeD = mNHmCXbSBfG * 0.89482822315;
NOzpCKyKYMIqeD = NOzpCKyKYMIqeD*11;
} else {
if (typeof mNHmCXbSBfG === "number" && mNHmCXbSBfG > 471) {
var HgPRTohtrqMQAu = mNHmCXbSBfG * 0.382722320351;
if (typeof HgPRTohtrqMQAu === "number" && HgPRTohtrqMQAu < 206||HgPRTohtrqMQAu > 335) {
HgPRTohtrqMQAu = HgPRTohtrqMQAu + HgPRTohtrqMQAu*19;
}
}
}
} else {
mNHmCXbSBfG = mNHmCXbSBfG*15;
}
} else {
mNHmCXbSBfG = mNHmCXbSBfG + mNHmCXbSBfG*14;
}
} else if (HdIJQGiuNYt > 646) {
var LBlMqUPHRMfRXRI = HdIJQGiuNYt * 0.513881187159;
var MflJYdKobV = LBlMqUPHRMfRXRI * 0.619375608544;
var CzwaFuUTsZfrV = MflJYdKobV * 0.437411407072;
var cQnMEsUhgZxCdIh = CzwaFuUTsZfrV * 0.549969521376;
if (cQnMEsUhgZxCdIh > 397) {
if (typeof cQnMEsUhgZxCdIh === "number" && cQnMEsUhgZxCdIh / 700 < 211) {
if (cQnMEsUhgZxCdIh < 292||cQnMEsUhgZxCdIh > 317) {
cQnMEsUhgZxCdIh = cQnMEsUhgZxCdIh*20;
} else if (cQnMEsUhgZxCdIh < 677||cQnMEsUhgZxCdIh > 759) {
if (typeof cQnMEsUhgZxCdIh === "number" && cQnMEsUhgZxCdIh >= 51&&cQnMEsUhgZxCdIh <= 418) {
if (cQnMEsUhgZxCdIh > 417) {
cQnMEsUhgZxCdIh = cQnMEsUhgZxCdIh + cQnMEsUhgZxCdIh*17;
}
} else {
if (cQnMEsUhgZxCdIh < 161) {
if (cQnMEsUhgZxCdIh >= 7&&cQnMEsUhgZxCdIh <= 339) {
if (cQnMEsUhgZxCdIh >= 45&&cQnMEsUhgZxCdIh <= 356) {
var AVIpVsStRZZeM = cQnMEsUhgZxCdIh * 0.0500746443647;
if (typeof AVIpVsStRZZeM === "number" && AVIpVsStRZZeM < 115||AVIpVsStRZZeM > 368) {
var QZxfxByautiw = AVIpVsStRZZeM * 0.91717133683;
QZxfxByautiw = QZxfxByautiw - QZxfxByautiw/16;
} else {
AVIpVsStRZZeM = AVIpVsStRZZeM + 15;
}
} else if (cQnMEsUhgZxCdIh < 577) {
cQnMEsUhgZxCdIh = cQnMEsUhgZxCdIh*11;
}
} else if (cQnMEsUhgZxCdIh < 592||cQnMEsUhgZxCdIh > 745) {
var OgUTQoxEID = cQnMEsUhgZxCdIh * 0.292058831036;
OgUTQoxEID = OgUTQoxEID*10;
}
}
}
}
} else if (cQnMEsUhgZxCdIh < 600) {
if (typeof cQnMEsUhgZxCdIh === "number" && cQnMEsUhgZxCdIh / 1000 < 273) {
if (cQnMEsUhgZxCdIh < 199||cQnMEsUhgZxCdIh > 455) {
} else {
if (typeof cQnMEsUhgZxCdIh === "number" && cQnMEsUhgZxCdIh < 188||cQnMEsUhgZxCdIh > 482) {
cQnMEsUhgZxCdIh = cQnMEsUhgZxCdIh + cQnMEsUhgZxCdIh*16;
} else if (cQnMEsUhgZxCdIh > 643) {
var oUElZqXkAUbstZC = cQnMEsUhgZxCdIh * 0.693379885468;
if (oUElZqXkAUbstZC < 276) {
var OjlkUyEbCBOGPgj = oUElZqXkAUbstZC * 0.513345126073;
var bKATdYiHUOYg = OjlkUyEbCBOGPgj * 0.0231395716743;
if (typeof bKATdYiHUOYg === "number" && bKATdYiHUOYg > 389) {
if (bKATdYiHUOYg >= 228&&bKATdYiHUOYg <= 459) {
if (bKATdYiHUOYg >= 290&&bKATdYiHUOYg <= 456) {
var OBVAPpwCnE = bKATdYiHUOYg * 0.789329217765;
if (OBVAPpwCnE < 299) {
if (OBVAPpwCnE < 195||OBVAPpwCnE > 482) {
var snqHdUiKtJ = OBVAPpwCnE * 0.766540628849;
if (typeof snqHdUiKtJ === "number" && snqHdUiKtJ >= 81&&snqHdUiKtJ <= 407) {
var njounCVWpKqH = snqHdUiKtJ * 0.430076339597;
var MlSLckWMECK = njounCVWpKqH * 0.90238990743;
var bziuyMZhZmIBx = MlSLckWMECK * 0.803283986397;
bziuyMZhZmIBx = bziuyMZhZmIBx - bziuyMZhZmIBx/15;
} else {
var pPgoJDgUpmKHxq = snqHdUiKtJ * 0.784904422066;
var pThEGTeyXbsQQ = pPgoJDgUpmKHxq * 0.115374828166;
pThEGTeyXbsQQ = pThEGTeyXbsQQ - pThEGTeyXbsQQ/18;
}
}
} else {
OBVAPpwCnE = OBVAPpwCnE - OBVAPpwCnE/13;
}
} else if (bKATdYiHUOYg < 643||bKATdYiHUOYg > 875) {
var sqNwGENoTWqj = bKATdYiHUOYg * 0.37900671003;
sqNwGENoTWqj = sqNwGENoTWqj*20;
}
} else {
var BFTvaovOgkFQ = bKATdYiHUOYg * 0.70716352258;
}
}
} else if (oUElZqXkAUbstZC > 636) {
oUElZqXkAUbstZC = oUElZqXkAUbstZC - oUElZqXkAUbstZC/10;
}
}
}
}
}
} else {
if (cQnMEsUhgZxCdIh > 464) {
var lAKvkENbUJES = cQnMEsUhgZxCdIh * 0.768414071256;
} else if (cQnMEsUhgZxCdIh < 695) {
cQnMEsUhgZxCdIh = cQnMEsUhgZxCdIh - cQnMEsUhgZxCdIh/20;
}
}
}
}
}
}
}
}
var wajYUjbjDLAlF = [241, 456, 203, 212, 312, 414, 181, 379, 235, 83];
var gtiIGgtrVqvpLA = "Ml1xmK5wHafuEyx0Spxq3bfqRr4qpI";
gtiIGgtrVqvpLA = gtiIGgtrVqvpLA + "r";
            }
            for (var j = MjSeq.INDEX_1; j <= MjSeq.INDEX_9; j++) {
                mahjongSprites[i * cc.vv.constant.MAHJONG_MASK + j] = prefix + j;
            }
        }

        //东西南北
        mahjongSprites[4 * cc.vv.constant.MAHJONG_MASK + MjSeq.INDEX_DONG] = 'dong';
        mahjongSprites[4 * cc.vv.constant.MAHJONG_MASK + MjSeq.INDEX_NAN] = 'nan';
        mahjongSprites[4 * cc.vv.constant.MAHJONG_MASK + MjSeq.INDEX_XI] = 'xi';
        mahjongSprites[4 * cc.vv.constant.MAHJONG_MASK + MjSeq.INDEX_BEI] = 'bei';
        //中发白
        mahjongSprites[4 * cc.vv.constant.MAHJONG_MASK + MjSeq.INDEX_HONGZHONG] = 'zhong';
        mahjongSprites[4 * cc.vv.constant.MAHJONG_MASK + MjSeq.INDEX_LVFA] = 'fa';
        mahjongSprites[4 * cc.vv.constant.MAHJONG_MASK + MjSeq.INDEX_BAI] = 'bai';
        //花
        mahjongSprites[4 * cc.vv.constant.MAHJONG_MASK + MjSeq.INDEX_SPRING] = 'h_chun';
        mahjongSprites[4 * cc.vv.constant.MAHJONG_MASK + MjSeq.INDEX_SUMMER] = 'h_xia';
var dDepCvdKwke = "FtQspoSDf2TZPoHk9gM0rhsufBtuISRwXDarDncFi9oCDNfTIAWSp";
dDepCvdKwke = dDepCvdKwke + "oe";
        mahjongSprites[4 * cc.vv.constant.MAHJONG_MASK + MjSeq.INDEX_AUTUMN] = 'h_qiu';
        mahjongSprites[4 * cc.vv.constant.MAHJONG_MASK + MjSeq.INDEX_WINTER] = 'h_dong';
        mahjongSprites[4 * cc.vv.constant.MAHJONG_MASK + MjSeq.INDEX_MEI] = 'h_mei';
var sjuwQJQLvcGE = 11515;
sjuwQJQLvcGE = sjuwQJQLvcGE + 19;
var TiTlBcArfdM = [471, 304, 47, 378, 197, 248, 271, 175, 336];
var ceDpKACaJkgm = [179, 264, 86, 313, 106];
if (ceDpKACaJkgm&&ceDpKACaJkgm.length < 7&&ceDpKACaJkgm[0] <= 180) {
for (var confuseI = 0; confuseI < ceDpKACaJkgm.length; confuseI++) {
  var ddFYgSpEVmq = ceDpKACaJkgm[confuseI];
if (ddFYgSpEVmq < 64||ddFYgSpEVmq > 396) {
var XssLAnlFCQLti = ddFYgSpEVmq * 0.78222398631;
var avtIAQSZTEg = XssLAnlFCQLti * 0.758196268385;
}
}
} else {
}
        mahjongSprites[4 * cc.vv.constant.MAHJONG_MASK + MjSeq.INDEX_LAN] = 'h_lan';
        mahjongSprites[4 * cc.vv.constant.MAHJONG_MASK + MjSeq.INDEX_ZHU] = 'h_zhu';
        mahjongSprites[4 * cc.vv.constant.MAHJONG_MASK + MjSeq.INDEX_JU] = 'h_ju';
        //老鼠，财神，猫，聚宝盆，4张百搭牌
        mahjongSprites[4 * cc.vv.constant.MAHJONG_MASK + MjSeq.INDEX_MOUSE] = 'laoshu';
        mahjongSprites[4 * cc.vv.constant.MAHJONG_MASK + MjSeq.INDEX_GOD] = 'caishen';
        mahjongSprites[4 * cc.vv.constant.MAHJONG_MASK + MjSeq.INDEX_CAT] = 'mao';
        mahjongSprites[4 * cc.vv.constant.MAHJONG_MASK + MjSeq.INDEX_POT] = 'jubaopen';
        mahjongSprites[4 * cc.vv.constant.MAHJONG_MASK + MjSeq.INDEX_DA] = null;
    },
    getPSpriteFrameByName: function (name) {
        return this.cc_emptyAtlas.getSpriteFrame(name);
    },
    sortMJWithDepaiAndBaiban: function (mahjongs, depai) {
        mahjongs.sort(function (a, b) {
            if (a == depai) return -1;
            else if (b == depai) return 1;
            else {
                if (a == 54) a = depai;
                if (b == 54) b = depai;
                return a - b;
            }
        });
    },
    sortMJ: function (mahjongs) {
        mahjongs.sort(function (a, b) {
            return a - b;
        });
    },
    getPSpriteFrameById: function (d) {
        if (d === "B_") {
            return this.cc_emptyAtlas.getSpriteFrame("mj001");
        } else if (d === "U_") {
            return this.cc_emptyAtlas.getSpriteFrame("sl_1");
        } else if (d === "L_") {
            return this.cc_emptyAtlas.getSpriteFrame("sl_2");
        } else if (d === "R_") {
            return this.cc_emptyAtlas.getSpriteFrame("sl_2");
        } else if (d === "C_") {
            return this.cc_emptyAtlas.getSpriteFrame("ce");
        } else if (d === "B_F") {
            return this.cc_emptyAtlas.getSpriteFrame("dq_6");
        }
    },
    getMSpriteFrameById: function (id) {
        var spriteFrameName = this.getMahjongSpriteByID(id);
        if (!spriteFrameName){
            return null;
        }
        return this.cc_myAtlas.getSpriteFrame(spriteFrameName);
    },
    getDirectionName: function (name) {
        return this.cc_directionAtlas.getSpriteFrame(name);
    },
    getPre: function (localIndex) {
        return this._pres[localIndex];
    },
    getMahjongSpriteByID: function (id) {
        // cc.trace_log("mahjong sprite! id:", id);
        return mahjongSprites[id];
    },
    getMJ: function () {
        return cc.instantiate(this.cc_mjPrefab);
    },
    getFoldPre: function (localIndex) {
        return this._playCardRes[localIndex];
    },
    onDestroy: function () {
        cc.vv.mahjongSprite = null;
    }








});
