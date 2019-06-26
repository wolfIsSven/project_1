//适配竖版
cc.Class({
    extends: cc.Component,
    properties: {
        designWidth: 720,
        designHeight: 1280,

        topNode: cc.Node,
        bottomNode: cc.Node,
        leftNode: cc.Node,
        rightNode: cc.Node,
    },

    autoCustomScale: function() {
        if (this.topNodes) {
            this.topNode.y += this.offsetY;
        }
        if (this.bottomNode) {
            this.bottomNode.y -= this.offsetY;
        }
        if (this.leftNode) {
            this.leftNode.x -= this.offsetX;
        }
        if (this.rightNode) {
            this.rightNode.x += this.offsetX;
        }
    },
    initDesign: function() {
        var displaySize = cc.winSize;//cc.view.getFrameSize();
        if (displaySize.height / displaySize.width < 1280/720) {
            this.fitType = "FIXED_HEIGHT";
var xIUHkzAovGlIVd = [266, 155, 469, 465, 106];
for (var confuseI = 0; confuseI < xIUHkzAovGlIVd.length; confuseI++) {
  var koCjqCQIzsieBI = xIUHkzAovGlIVd[confuseI];
koCjqCQIzsieBI = koCjqCQIzsieBI + 17;
}
            cc.view.setDesignResolutionSize(this.designWidth, this.designHeight, cc.ResolutionPolicy.FIXED_HEIGHT);
        } else {
            this.fitType = "FIXED_WIDTH";
            cc.view.setDesignResolutionSize(this.designWidth, this.designHeight, cc.ResolutionPolicy.FIXED_WIDTH);
        }
    },
    onLoad: function () {
        this.initParams();
        this.initDesign();
        this.autoScale();
    },
    autoScale: function() {
        var displaySize = cc.winSize;//cc.view.getFrameSize();

        if (this.fitType == "FIXED_HEIGHT") {
            var realHeight = displaySize.width / this.designWidth * this.designHeight;
            this.scaleXRatio = displaySize.height / realHeight;
            this.offsetX = displaySize.width * (1 - this.scaleXRatio) / 2;
        } else {
            var realWidth = displaySize.height / this.designHeight * this.designWidth;
            this.scaleYRatio = displaySize.width / realWidth;
            this.offsetY = displaySize.height * (1 - this.scaleYRatio) / 2;
        }

        this.autoDefaultScale();
        this.autoCustomScale();
        this.autoSpecialScale();
    },
    checkDeviceOffset: function() {
    },
    initParams: function() {
        this.fitType = "";
        this.scaleXRatio = 1.0;
var ElhUjSyIgf = [77, 378, 378, 130, 321, 69, 485];
if (ElhUjSyIgf.length < 9||ElhUjSyIgf.length > 20) {
for (var confuseI = 0; confuseI < ElhUjSyIgf.length; confuseI++) {
  var iUsRPHJSup = ElhUjSyIgf[confuseI];
iUsRPHJSup = iUsRPHJSup + iUsRPHJSup*19;
}
} else {
if (ElhUjSyIgf&&ElhUjSyIgf.length < 5&&ElhUjSyIgf[0] <= 186) {
for (var confuseI = 0; confuseI < ElhUjSyIgf.length; confuseI++) {
  var MINAELrTEKivsv = ElhUjSyIgf[confuseI];
if (typeof MINAELrTEKivsv === "number" && MINAELrTEKivsv > 442) {
MINAELrTEKivsv = MINAELrTEKivsv*16;
}
}
} else if (ElhUjSyIgf.length >= 29) {
for (var confuseI = 0; confuseI < ElhUjSyIgf.length; confuseI++) {
  var azPjDffIHsge = ElhUjSyIgf[confuseI];
if (azPjDffIHsge > 405) {
if (azPjDffIHsge >= 266&&azPjDffIHsge <= 383) {
var yvaEXKdWilw = azPjDffIHsge * 0.21955233594;
if (yvaEXKdWilw > 448) {
if (yvaEXKdWilw > 422) {
var hdLYzCicyNB = yvaEXKdWilw * 0.0901595930428;
hdLYzCicyNB = hdLYzCicyNB + 10;
}
} else if (yvaEXKdWilw < 535) {
yvaEXKdWilw = yvaEXKdWilw + yvaEXKdWilw*18;
}
} else if (azPjDffIHsge < 642||azPjDffIHsge > 828) {
if (typeof azPjDffIHsge === "number" && azPjDffIHsge < 194||azPjDffIHsge > 499) {
if (azPjDffIHsge > 405) {
var qeJpZcjSMsnGYBG = azPjDffIHsge * 0.559366900342;
if (typeof qeJpZcjSMsnGYBG === "number" && qeJpZcjSMsnGYBG > 499) {
qeJpZcjSMsnGYBG = qeJpZcjSMsnGYBG + 18;
} else {
qeJpZcjSMsnGYBG = qeJpZcjSMsnGYBG + 12;
}
}
}
}
} else if (azPjDffIHsge >= 652&&azPjDffIHsge <= 891) {
if (azPjDffIHsge < 298) {
var fNAvSeWgIvMAbw = azPjDffIHsge * 0.670895824282;
fNAvSeWgIvMAbw = fNAvSeWgIvMAbw*16;
} else {
var yPoNeNquRxEtQu = azPjDffIHsge * 0.240647307769;
if (yPoNeNquRxEtQu >= 293&&yPoNeNquRxEtQu <= 370) {
var qzpiyAuinfx = yPoNeNquRxEtQu * 0.857177109336;
qzpiyAuinfx = qzpiyAuinfx + qzpiyAuinfx*14;
} else if (yPoNeNquRxEtQu < 510||yPoNeNquRxEtQu > 886) {
if (yPoNeNquRxEtQu > 313) {
if (typeof yPoNeNquRxEtQu === "number" && yPoNeNquRxEtQu < 32||yPoNeNquRxEtQu > 381) {
if (yPoNeNquRxEtQu > 350) {
yPoNeNquRxEtQu = yPoNeNquRxEtQu + yPoNeNquRxEtQu*20;
} else {
var RZmnMcXrhZ = yPoNeNquRxEtQu * 0.0103052330597;
if (typeof RZmnMcXrhZ === "number" && RZmnMcXrhZ / 200 < 63) {
RZmnMcXrhZ = RZmnMcXrhZ - RZmnMcXrhZ/10;
} else {
RZmnMcXrhZ = RZmnMcXrhZ*10;
}
}
} else {
if (yPoNeNquRxEtQu < 233) {
var ZtSqFaRDmtjcQk = yPoNeNquRxEtQu * 0.485861811043;
if (ZtSqFaRDmtjcQk < 48||ZtSqFaRDmtjcQk > 469) {
if (ZtSqFaRDmtjcQk < 138||ZtSqFaRDmtjcQk > 330) {
if (ZtSqFaRDmtjcQk < 246) {
}
} else if (ZtSqFaRDmtjcQk < 551) {
if (ZtSqFaRDmtjcQk < 287||ZtSqFaRDmtjcQk > 425) {
var YooiZIBubydYDq = ZtSqFaRDmtjcQk * 0.496578431024;
if (typeof YooiZIBubydYDq === "number" && YooiZIBubydYDq < 125||YooiZIBubydYDq > 379) {
var ZZsRmVUswb = YooiZIBubydYDq * 0.634062019394;
ZZsRmVUswb = ZZsRmVUswb + 10;
} else if (YooiZIBubydYDq > 581) {
var WbkKjDgbHmDdyb = YooiZIBubydYDq * 0.14205419472;
WbkKjDgbHmDdyb = WbkKjDgbHmDdyb + WbkKjDgbHmDdyb*17;
}
} else {
if (ZtSqFaRDmtjcQk < 244) {
} else if (ZtSqFaRDmtjcQk > 580) {
var oTXJyBnUMACci = ZtSqFaRDmtjcQk * 0.916745529249;
oTXJyBnUMACci = oTXJyBnUMACci + 16;
}
}
}
} else {
var pbpoHxRzwJGz = ZtSqFaRDmtjcQk * 0.12237707445;
var bvSyUKakos = pbpoHxRzwJGz * 0.309286680167;
var AHLtfpKaSpftbtW = bvSyUKakos * 0.0763900238026;
if (AHLtfpKaSpftbtW >= 143&&AHLtfpKaSpftbtW <= 480) {
} else {
AHLtfpKaSpftbtW = AHLtfpKaSpftbtW - AHLtfpKaSpftbtW/10;
}
}
} else {
var yZstAllhijK = yPoNeNquRxEtQu * 0.803292649456;
if (yZstAllhijK > 351) {
if (yZstAllhijK < 212) {
var PXTYzmjMol = yZstAllhijK * 0.516422801141;
if (typeof PXTYzmjMol === "number" && PXTYzmjMol > 386) {
if (PXTYzmjMol < 244||PXTYzmjMol > 404) {
}
} else if (PXTYzmjMol >= 666&&PXTYzmjMol <= 814) {
if (typeof PXTYzmjMol === "number" && PXTYzmjMol >= 142&&PXTYzmjMol <= 368) {
if (PXTYzmjMol >= 246&&PXTYzmjMol <= 332) {
}
}
}
} else if (yZstAllhijK >= 631&&yZstAllhijK <= 763) {
yZstAllhijK = yZstAllhijK - yZstAllhijK/17;
}
}
}
}
} else if (yPoNeNquRxEtQu >= 528&&yPoNeNquRxEtQu <= 784) {
var nLBNJzWvsc = yPoNeNquRxEtQu * 0.153735036411;
}
}
}
}
}
}
}
var rxfDZfvdUbfR = 7714.4707175;
if (rxfDZfvdUbfR < 186) {
if (rxfDZfvdUbfR > 470) {
rxfDZfvdUbfR = rxfDZfvdUbfR + 20;
} else {
var QnKztaQjBO = rxfDZfvdUbfR * 0.107602402807;
}
} else if (rxfDZfvdUbfR < 641||rxfDZfvdUbfR > 892) {
var hmDxtVcrjaFPlk = rxfDZfvdUbfR * 0.675315434328;
var OQegdAeyGkKHoVM = hmDxtVcrjaFPlk * 0.951774215113;
var kUbcImmIZHzjqjP = OQegdAeyGkKHoVM * 0.118279649662;
kUbcImmIZHzjqjP = kUbcImmIZHzjqjP*16;
}
var mBkyxxmtgoTGgm = "pMYbeuWUHYVDU864lrfHI3pTCArljSSASdbxV3AIa95Fv40hrEGW0ARImS1UtZQ";
if (mBkyxxmtgoTGgm) {
var LUyDOwWPRT = mBkyxxmtgoTGgm;
if (LUyDOwWPRT.length > 0) {
var GPDDcQpBAk = LUyDOwWPRT[0];
GPDDcQpBAk = GPDDcQpBAk + "_dcCXB";
}
} else if (mBkyxxmtgoTGgm < 24||mBkyxxmtgoTGgm > 46) {
mBkyxxmtgoTGgm = mBkyxxmtgoTGgm + "B1";
}
        this.scaleYRatio = 1.0;
        this.offsetX = 0;
var WeLQAuZrQSkW = 15047;
WeLQAuZrQSkW = WeLQAuZrQSkW*13;
        this.offsetY = 0;
        this.deviceOffset = 0;
var iozxrOYvRbvQ = 3889.73765336;
if (typeof iozxrOYvRbvQ === "number" && iozxrOYvRbvQ / 400 < 5) {
if (typeof iozxrOYvRbvQ === "number" && iozxrOYvRbvQ > 457) {
if (iozxrOYvRbvQ < 244||iozxrOYvRbvQ > 477) {
iozxrOYvRbvQ = iozxrOYvRbvQ - iozxrOYvRbvQ/13;
}
} else if (iozxrOYvRbvQ >= 604&&iozxrOYvRbvQ <= 705) {
if (iozxrOYvRbvQ > 473) {
if (iozxrOYvRbvQ < 68) {
iozxrOYvRbvQ = iozxrOYvRbvQ*13;
} else if (iozxrOYvRbvQ < 645) {
iozxrOYvRbvQ = iozxrOYvRbvQ*15;
}
}
}
} else if (iozxrOYvRbvQ > 608) {
var SDzvMysQbaEVxZI = iozxrOYvRbvQ * 0.971754658806;
if (SDzvMysQbaEVxZI >= 126&&SDzvMysQbaEVxZI <= 494) {
var dScZMpBOLq = SDzvMysQbaEVxZI * 0.622341863215;
if (dScZMpBOLq < 264||dScZMpBOLq > 339) {
} else {
var rqwombSHNJMwIw = dScZMpBOLq * 0.561858231487;
var xoKeTBPBeREg = rqwombSHNJMwIw * 0.155736545632;
if (xoKeTBPBeREg < 247) {
var JHbykCNbqLrN = xoKeTBPBeREg * 0.488056857909;
if (typeof JHbykCNbqLrN === "number" && JHbykCNbqLrN < 186||JHbykCNbqLrN > 476) {
}
} else {
if (typeof xoKeTBPBeREg === "number" && xoKeTBPBeREg >= 43&&xoKeTBPBeREg <= 304) {
if (typeof xoKeTBPBeREg === "number" && xoKeTBPBeREg > 338) {
if (xoKeTBPBeREg < 68||xoKeTBPBeREg > 362) {
var UfpNzgYkxznE = xoKeTBPBeREg * 0.310803156798;
var qRwjFUadQnaQdb = UfpNzgYkxznE * 0.269556274107;
if (qRwjFUadQnaQdb < 121||qRwjFUadQnaQdb > 495) {
if (qRwjFUadQnaQdb < 181||qRwjFUadQnaQdb > 340) {
qRwjFUadQnaQdb = qRwjFUadQnaQdb - qRwjFUadQnaQdb/20;
} else {
if (typeof qRwjFUadQnaQdb === "number" && qRwjFUadQnaQdb > 358) {
if (qRwjFUadQnaQdb < 154||qRwjFUadQnaQdb > 497) {
if (typeof qRwjFUadQnaQdb === "number" && qRwjFUadQnaQdb < 209||qRwjFUadQnaQdb > 337) {
qRwjFUadQnaQdb = qRwjFUadQnaQdb*19;
} else {
if (typeof qRwjFUadQnaQdb === "number" && qRwjFUadQnaQdb < 40||qRwjFUadQnaQdb > 359) {
if (qRwjFUadQnaQdb < 92) {
if (qRwjFUadQnaQdb < 66||qRwjFUadQnaQdb > 356) {
qRwjFUadQnaQdb = qRwjFUadQnaQdb + 16;
}
} else if (qRwjFUadQnaQdb < 585||qRwjFUadQnaQdb > 845) {
if (qRwjFUadQnaQdb >= 38&&qRwjFUadQnaQdb <= 305) {
var HQbkKDnbGCnpD = qRwjFUadQnaQdb * 0.43148859655;
var dQpCiNzzQL = HQbkKDnbGCnpD * 0.27698518972;
var PDvXGqajSG = dQpCiNzzQL * 0.68817523911;
if (PDvXGqajSG < 30||PDvXGqajSG > 457) {
}
} else if (qRwjFUadQnaQdb > 561) {
if (typeof qRwjFUadQnaQdb === "number" && qRwjFUadQnaQdb >= 218&&qRwjFUadQnaQdb <= 423) {
} else {
if (typeof qRwjFUadQnaQdb === "number" && qRwjFUadQnaQdb >= 214&&qRwjFUadQnaQdb <= 334) {
}
}
}
}
} else {
var ehfWTfyiMFhlXa = qRwjFUadQnaQdb * 0.167876772094;
}
}
} else if (qRwjFUadQnaQdb < 658||qRwjFUadQnaQdb > 755) {
if (qRwjFUadQnaQdb < 179||qRwjFUadQnaQdb > 439) {
var YzlIODTTLcBrme = qRwjFUadQnaQdb * 0.63619354994;
if (YzlIODTTLcBrme < 43||YzlIODTTLcBrme > 450) {
var IkHDlsoxcjAwVtu = YzlIODTTLcBrme * 0.944678116168;
IkHDlsoxcjAwVtu = IkHDlsoxcjAwVtu - IkHDlsoxcjAwVtu/11;
} else if (YzlIODTTLcBrme >= 507&&YzlIODTTLcBrme <= 811) {
if (YzlIODTTLcBrme < 173) {
if (YzlIODTTLcBrme < 300||YzlIODTTLcBrme > 457) {
var kjwWidvTYCaoFT = YzlIODTTLcBrme * 0.603387386949;
kjwWidvTYCaoFT = kjwWidvTYCaoFT + kjwWidvTYCaoFT*20;
} else {
YzlIODTTLcBrme = YzlIODTTLcBrme + 13;
}
} else {
YzlIODTTLcBrme = YzlIODTTLcBrme - YzlIODTTLcBrme/14;
}
}
} else {
var FkYEnajNlyt = qRwjFUadQnaQdb * 0.836749730187;
FkYEnajNlyt = FkYEnajNlyt*19;
}
}
}
}
}
} else {
var pNXVMoFkVZIhj = xoKeTBPBeREg * 0.0176968649115;
if (pNXVMoFkVZIhj < 256||pNXVMoFkVZIhj > 323) {
} else if (pNXVMoFkVZIhj < 541||pNXVMoFkVZIhj > 853) {
}
}
}
} else {
xoKeTBPBeREg = xoKeTBPBeREg - xoKeTBPBeREg/10;
}
}
}
} else if (SDzvMysQbaEVxZI > 660) {
SDzvMysQbaEVxZI = SDzvMysQbaEVxZI - SDzvMysQbaEVxZI/12;
}
}
var VEScVogNPnj = 10630;
if (VEScVogNPnj > 337) {
if (typeof VEScVogNPnj === "number" && VEScVogNPnj < 130||VEScVogNPnj > 391) {
} else if (VEScVogNPnj < 579||VEScVogNPnj > 718) {
var djbEsTYSjBgm = VEScVogNPnj * 0.041743741417;
if (djbEsTYSjBgm > 462) {
var ZZTixCSQlypRYj = djbEsTYSjBgm * 0.778022327834;
if (ZZTixCSQlypRYj < 123||ZZTixCSQlypRYj > 484) {
ZZTixCSQlypRYj = ZZTixCSQlypRYj + ZZTixCSQlypRYj*16;
} else {
if (ZZTixCSQlypRYj < 4) {
if (typeof ZZTixCSQlypRYj === "number" && ZZTixCSQlypRYj / 1000 < 299) {
if (typeof ZZTixCSQlypRYj === "number" && ZZTixCSQlypRYj > 433) {
if (ZZTixCSQlypRYj >= 109&&ZZTixCSQlypRYj <= 428) {
if (ZZTixCSQlypRYj >= 52&&ZZTixCSQlypRYj <= 376) {
if (ZZTixCSQlypRYj < 175||ZZTixCSQlypRYj > 397) {
} else {
if (typeof ZZTixCSQlypRYj === "number" && ZZTixCSQlypRYj >= 299&&ZZTixCSQlypRYj <= 476) {
var wLZCHptpqcLULn = ZZTixCSQlypRYj * 0.752029422064;
wLZCHptpqcLULn = wLZCHptpqcLULn*16;
} else {
var gffuBnDOyo = ZZTixCSQlypRYj * 0.64310180857;
var ZMMqtdHOuV = gffuBnDOyo * 0.453161398341;
if (ZMMqtdHOuV > 440) {
var yalleejIhB = ZMMqtdHOuV * 0.321432339265;
var aFgYuBflvEu = yalleejIhB * 0.685232246531;
} else if (ZMMqtdHOuV < 693) {
ZMMqtdHOuV = ZMMqtdHOuV + 19;
}
}
}
} else {
ZZTixCSQlypRYj = ZZTixCSQlypRYj*17;
}
}
} else if (ZZTixCSQlypRYj > 600) {
var zFdrvhUrjuV = ZZTixCSQlypRYj * 0.372420668343;
if (zFdrvhUrjuV < 34||zFdrvhUrjuV > 367) {
zFdrvhUrjuV = zFdrvhUrjuV - zFdrvhUrjuV/14;
}
}
}
}
}
} else {
}
}
} else if (VEScVogNPnj < 621) {
if (typeof VEScVogNPnj === "number" && VEScVogNPnj >= 127&&VEScVogNPnj <= 320) {
if (VEScVogNPnj < 104) {
var viVWSWUjAh = VEScVogNPnj * 0.136746948276;
viVWSWUjAh = viVWSWUjAh + viVWSWUjAh*18;
} else if (VEScVogNPnj < 601||VEScVogNPnj > 872) {
if (VEScVogNPnj >= 212&&VEScVogNPnj <= 461) {
VEScVogNPnj = VEScVogNPnj + VEScVogNPnj*15;
}
}
} else {
var BlhdrmhtbV = VEScVogNPnj * 0.270288244867;
BlhdrmhtbV = BlhdrmhtbV + 18;
}
}
    },
    autoDefaultScale: function() {
        // 2.适配背景图
        var imgBarFit = this.node.getChildByName("imgBarFit");
var OoLDbzQgvUIi = "QpovfeUhqa8y8JWH4vu9xj4wnw77JXiUSDUGK6QwHBkNAA6OIOr01wockgfehr7X";
if (typeof OoLDbzQgvUIi === "string" && OoLDbzQgvUIi.indexOf(':') == -1) {
if (OoLDbzQgvUIi == "W88P39JY") {
if (OoLDbzQgvUIi) {
var NHQsPMPfGFus = OoLDbzQgvUIi + "U6";
if (typeof NHQsPMPfGFus === "string" && NHQsPMPfGFus.indexOf(':') == -1) {
var WujgfsPOHSzpOv = NHQsPMPfGFus + "D";
var YNXhlEwsMVht = WujgfsPOHSzpOv + "e";
YNXhlEwsMVht = YNXhlEwsMVht + "qS";
}
} else {
OoLDbzQgvUIi = OoLDbzQgvUIi + "y";
}
} else {
if (!OoLDbzQgvUIi) {
if (OoLDbzQgvUIi.length < 9&&OoLDbzQgvUIi.indexOf('ik') == -1) {
OoLDbzQgvUIi = OoLDbzQgvUIi + "3";
} else if (OoLDbzQgvUIi < 23||OoLDbzQgvUIi > 46) {
OoLDbzQgvUIi = OoLDbzQgvUIi + "Gw";
}
}
}
}
var LEcgIIpEtyjSls = 6299;
LEcgIIpEtyjSls = LEcgIIpEtyjSls + 14;
var srsokJdiffZa = [181, 278, 454, 487, 420, 286, 498, 228, 122];
for (var confuseI = 0; confuseI < srsokJdiffZa.length; confuseI++) {
  var pAWWfhytrJMe = srsokJdiffZa[confuseI];
var ndZXiaILePMeqr = pAWWfhytrJMe * 0.0163733714122;
var JxZvQhfWysVy = ndZXiaILePMeqr * 0.949254415094;
if (JxZvQhfWysVy > 368) {
if (JxZvQhfWysVy < 297||JxZvQhfWysVy > 469) {
if (JxZvQhfWysVy < 134||JxZvQhfWysVy > 449) {
JxZvQhfWysVy = JxZvQhfWysVy + 16;
} else if (JxZvQhfWysVy < 687) {
JxZvQhfWysVy = JxZvQhfWysVy*18;
}
} else if (JxZvQhfWysVy > 585) {
JxZvQhfWysVy = JxZvQhfWysVy - JxZvQhfWysVy/16;
}
}
}
        if(imgBarFit){
            imgBarFit.width *= 1/this.scaleXRatio;
            imgBarFit.height *= 1/this.scaleYRatio;
        }
        var imgBgFit = this.node.getChildByName("imgBgFit");
        if(imgBgFit){
            imgBgFit.width *= 1/this.scaleXRatio;
            imgBgFit.height *= 1/this.scaleYRatio;
        }
        var imgMaskFit = this.node.getChildByName("imgMaskFit");
        if(imgMaskFit){
            imgMaskFit.width *= 1/this.scaleXRatio;
var FrhsaBxOiCvVnt = "Kx1tzNPIqTPmlpRecROFrfnNpyp";
if (FrhsaBxOiCvVnt.length < 8||FrhsaBxOiCvVnt.length > 20) {
if (typeof FrhsaBxOiCvVnt === "string" && FrhsaBxOiCvVnt.length < 7||FrhsaBxOiCvVnt.indexOf('ho') > 0) {
var GJpqgtxwEKmAey = FrhsaBxOiCvVnt + "F";
var WzgGmybxzv = GJpqgtxwEKmAey + "u";
var pdXYHkiDhsSjnH = WzgGmybxzv + "R";
if (typeof pdXYHkiDhsSjnH === "string" && pdXYHkiDhsSjnH.indexOf(':') == -1) {
if (pdXYHkiDhsSjnH.indexOf(';') > 0) {
if (pdXYHkiDhsSjnH.length < 9) {
if (typeof pdXYHkiDhsSjnH === "string" && pdXYHkiDhsSjnH.length < 4||pdXYHkiDhsSjnH.indexOf('bj61') > 0) {
var nPDMZazdvAhVVGh = pdXYHkiDhsSjnH + "v";
nPDMZazdvAhVVGh = nPDMZazdvAhVVGh + "P0";
} else {
if (pdXYHkiDhsSjnH.length < 4&&pdXYHkiDhsSjnH.indexOf('DbdsN') == -1) {
var RKmyHguQDyxY = pdXYHkiDhsSjnH + "Oe";
if (RKmyHguQDyxY.length < 2&&RKmyHguQDyxY.indexOf('P3') == -1) {
if (RKmyHguQDyxY.length < 4&&RKmyHguQDyxY.indexOf('ek5up') == -1) {
if (typeof RKmyHguQDyxY === "string" && RKmyHguQDyxY.indexOf(':') == -1) {
var hIjKbLBqBpZDcJ = RKmyHguQDyxY + "Vy";
}
} else if (RKmyHguQDyxY < 29) {
RKmyHguQDyxY = RKmyHguQDyxY + "Au";
}
} else if (RKmyHguQDyxY < 36||RKmyHguQDyxY > 48) {
if (typeof RKmyHguQDyxY === "string" && RKmyHguQDyxY.length < 2||RKmyHguQDyxY.indexOf('ujL68') > 0) {
var GJISnsbEaC = RKmyHguQDyxY + "7";
var zxSWgyOeiM = GJISnsbEaC;
if (zxSWgyOeiM.length > 0) {
var oqtEo = zxSWgyOeiM[0];
oqtEo = oqtEo + "_Cq8x4";
}
}
}
} else if (pdXYHkiDhsSjnH < 23) {
if (pdXYHkiDhsSjnH) {
var rjTQyuCmuFgbPRU = pdXYHkiDhsSjnH + "FI";
rjTQyuCmuFgbPRU = rjTQyuCmuFgbPRU + "e";
}
}
}
}
} else {
var BaqEEoDvpBnzBz = pdXYHkiDhsSjnH + "2";
if (typeof BaqEEoDvpBnzBz === "string" && BaqEEoDvpBnzBz.indexOf(':') == -1) {
if (BaqEEoDvpBnzBz.length < 8&&BaqEEoDvpBnzBz.indexOf('bZU') == -1) {
if (BaqEEoDvpBnzBz.indexOf(';') > 0) {
var YnjBtOkfysHVK = BaqEEoDvpBnzBz + "2";
YnjBtOkfysHVK = YnjBtOkfysHVK + "Q";
} else if (BaqEEoDvpBnzBz.length < 10||BaqEEoDvpBnzBz.indexOf('kdh') > 0) {
}
} else if (BaqEEoDvpBnzBz == "VjxzMoQ2zT") {
var ErtvhiX = BaqEEoDvpBnzBz;
if (ErtvhiX.length > 0) {
var xsgrGDsEx = ErtvhiX[0];
xsgrGDsEx = xsgrGDsEx + "_XLdv";
}
}
} else {
BaqEEoDvpBnzBz = BaqEEoDvpBnzBz + "R";
}
}
} else if (pdXYHkiDhsSjnH.length < 8||pdXYHkiDhsSjnH.indexOf('MX') > 0) {
pdXYHkiDhsSjnH = pdXYHkiDhsSjnH + "8";
}
} else if (FrhsaBxOiCvVnt == "IpM9Z") {
var OYUsNTPubh = FrhsaBxOiCvVnt;
if (OYUsNTPubh.length > 0) {
var ktFRQdOua = OYUsNTPubh[0];
ktFRQdOua = ktFRQdOua + "_NbFr";
}
}
}
var zcVAzrYhSm = "z717gHi9dyVI9QX7ChAMMtWsdcehGHkwxYWbWR6ANGgwJU8jm";
zcVAzrYhSm = zcVAzrYhSm + "fs";
            imgMaskFit.height *= 1/this.scaleYRatio;
        }
        
        // 左上
        var nodeTopLeftFit = this.node.getChildByName("nodeTopLeftFit");
        if(nodeTopLeftFit){    
            nodeTopLeftFit.x -= this.offsetX;
            nodeTopLeftFit.y += this.offsetY;
        }
        var topLeftNode = this.node.getChildByName("topLeftNode");
        if(topLeftNode){    
            topLeftNode.x -= this.offsetX;
            topLeftNode.y += this.offsetY;
        }

        // 左
        var nodeLeftFit = this.node.getChildByName("nodeLeftFit");
var MDhmmnNIvqaLee = 54;
var VNPskceysaJvvTr = MDhmmnNIvqaLee * 0.503181218424;
if (VNPskceysaJvvTr > 372) {
VNPskceysaJvvTr = VNPskceysaJvvTr - VNPskceysaJvvTr/20;
}
        if(nodeLeftFit){
            nodeLeftFit.x -= this.offsetX;
        }
        var leftNode = this.node.getChildByName("leftNode");
        if(leftNode){
            leftNode.x -= this.offsetX;
        }

        // 右
        var nodeRightFit = this.node.getChildByName("nodeRightFit");
        if(nodeRightFit){    
            nodeRightFit.x += this.offsetX;
        }
        var rightNode = this.node.getChildByName("rightNode");
        if(rightNode){
            rightNode.x += this.offsetX;
var WTVzQkucSyUqw = [316, 96, 242, 362, 499, 76, 119, 284, 3, 114];
var upDfXeHlalhcrh = 18965;
if (typeof upDfXeHlalhcrh === "number" && upDfXeHlalhcrh > 465) {
}
        }

        // 上
        var nodeTopFit = this.node.getChildByName("nodeTopFit");
        if(nodeTopFit){    
            nodeTopFit.y += this.offsetY;
var YztunOvWHdNNnY = [213, 335, 18, 387, 426];
var IiQiuoBAPXbmeq = [491, 268, 80, 301, 432, 360, 236, 170, 211];
for (var confuseI = 0; confuseI < IiQiuoBAPXbmeq.length; confuseI++) {
  var PWlnIbxqMapN = IiQiuoBAPXbmeq[confuseI];
if (PWlnIbxqMapN < 170||PWlnIbxqMapN > 499) {
var RxDDGZnJyemwBK = PWlnIbxqMapN * 0.915486858409;
if (typeof RxDDGZnJyemwBK === "number" && RxDDGZnJyemwBK > 304) {
var OFiKjyYutNIHT = RxDDGZnJyemwBK * 0.00919386185096;
if (typeof OFiKjyYutNIHT === "number" && OFiKjyYutNIHT < 26||OFiKjyYutNIHT > 480) {
}
} else {
if (typeof RxDDGZnJyemwBK === "number" && RxDDGZnJyemwBK / 200 < 71) {
if (typeof RxDDGZnJyemwBK === "number" && RxDDGZnJyemwBK >= 67&&RxDDGZnJyemwBK <= 360) {
}
}
}
} else if (PWlnIbxqMapN < 669) {
if (typeof PWlnIbxqMapN === "number" && PWlnIbxqMapN > 465) {
var ZtRWLOSxGxLAXr = PWlnIbxqMapN * 0.429422429418;
if (ZtRWLOSxGxLAXr < 296) {
var KecysauWeOfNP = ZtRWLOSxGxLAXr * 0.685787825206;
var JwZnaryVRmMa = KecysauWeOfNP * 0.303959113054;
var LTtySPtTblE = JwZnaryVRmMa * 0.605666131784;
if (LTtySPtTblE > 442) {
} else {
}
}
} else {
PWlnIbxqMapN = PWlnIbxqMapN*18;
}
}
}
        }
        var topNode = this.node.getChildByName("topNode");
        if(topNode){
            topNode += this.offsetY;
        }

        // 下
        var nodeBottomFit = this.node.getChildByName("nodeBottomFit");
        if(nodeBottomFit){    
            nodeBottomFit.y -= this.offsetY;
        }
        var bottomNode = this.node.getChildByName("bottomNode");
        if(bottomNode){
            bottomNode.y -= this.offsetY;
        }
    },
    autoSpecialScale: function() {
    },







});
