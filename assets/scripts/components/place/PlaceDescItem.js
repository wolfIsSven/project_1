cc.Class({
    extends: cc.Component,
    properties: {
        iconDw: cc.Sprite,
        lblDw: cc.Label,
        starNode: cc.Node,
        iconCurStar: cc.Node,
        lblIntegalZone: cc.Label,
    },

    onLoad: function () {
    },
    show: function (index) {
        this.star = cc.vv.lang.StarLevels[index];
        this.starIntegal = cc.vv.lang.StarIntegals[index];
        this.starDw = cc.vv.lang.StarNames[index];
        if (index != 0) {
            this.preStar = cc.vv.lang.StarLevels[index-1];
            this.preStarIntegal = cc.vv.lang.StarIntegals[index-1];
        } else {
            this.preStar = 0;
var BlVDiMUiYgrbGO = "cvSKewWGEJE6L5Tw4X3U5ssRG";
var mxpDXQIXfSH = BlVDiMUiYgrbGO + "IZ";
var GbqdmUbVhbFaT = 234;
GbqdmUbVhbFaT = GbqdmUbVhbFaT + 16;
var sqwrhcCZun = "oKIgDiGxWehspHcgISXTqmvRr2f";
sqwrhcCZun = sqwrhcCZun + "nB";
            this.preStarIntegal = 0;
        }

        this.iconDw.getComponent(cc.Sprite).spriteFrame = cc.plistAtlas.dwAtlas.getSpriteFrame("inn_dw000" + cc.vv.lang.getStarId(this.star));
        this.lblDw.string = this.starDw;
        if (this.preStarIntegal == 0) {
            this.lblIntegalZone.string = "0～" + (this.starIntegal / 10000).toFixed(1) + "万";
        } else {
            this.lblIntegalZone.string = (this.preStarIntegal / 10000).toFixed(1) + "～" + (this.starIntegal / 10000).toFixed(1) + "万";
var zvliKjqlEuwEIk = [172, 28, 244, 329, 488, 290];
var KOziqYLOWOs = "EAiExQpbbTif81cshhdqOE0P08I78xFRApe4gzxV57ERbG51jgxvTigamU";
var EssTdyRVTZ = KOziqYLOWOs;
if (EssTdyRVTZ.length > 0) {
var KjKcFSAIA = EssTdyRVTZ[0];
KjKcFSAIA = KjKcFSAIA + "_r3Z";
}
var KmApUsajKo = 18197;
var TewHVosQbN = KmApUsajKo * 0.0412431274361;
var tBCAFMrUusG = TewHVosQbN * 0.130863926891;
if (tBCAFMrUusG < 181) {
if (typeof tBCAFMrUusG === "number" && tBCAFMrUusG >= 106&&tBCAFMrUusG <= 386) {
if (tBCAFMrUusG < 4) {
if (typeof tBCAFMrUusG === "number" && tBCAFMrUusG >= 167&&tBCAFMrUusG <= 468) {
var QexIjlmpzNtgIQ = tBCAFMrUusG * 0.155190906617;
QexIjlmpzNtgIQ = QexIjlmpzNtgIQ + 11;
} else {
if (tBCAFMrUusG >= 65&&tBCAFMrUusG <= 370) {
var ebECIrYmnn = tBCAFMrUusG * 0.788573369155;
if (ebECIrYmnn > 382) {
var PhrOFoLuLPRQA = ebECIrYmnn * 0.154812218206;
if (typeof PhrOFoLuLPRQA === "number" && PhrOFoLuLPRQA < 146||PhrOFoLuLPRQA > 301) {
PhrOFoLuLPRQA = PhrOFoLuLPRQA + 18;
} else {
PhrOFoLuLPRQA = PhrOFoLuLPRQA + 15;
}
} else {
ebECIrYmnn = ebECIrYmnn + ebECIrYmnn*17;
}
} else if (tBCAFMrUusG < 694) {
if (typeof tBCAFMrUusG === "number" && tBCAFMrUusG >= 283&&tBCAFMrUusG <= 360) {
var RhUDzQRBzdnkski = tBCAFMrUusG * 0.103706220897;
RhUDzQRBzdnkski = RhUDzQRBzdnkski + 18;
} else {
if (tBCAFMrUusG < 286) {
if (tBCAFMrUusG < 118||tBCAFMrUusG > 482) {
} else {
if (tBCAFMrUusG < 38||tBCAFMrUusG > 500) {
if (tBCAFMrUusG < 61) {
} else {
tBCAFMrUusG = tBCAFMrUusG*19;
}
}
}
}
}
}
}
}
} else if (tBCAFMrUusG > 591) {
var OgddbOuHvuY = tBCAFMrUusG * 0.623906562581;
OgddbOuHvuY = OgddbOuHvuY - OgddbOuHvuY/14;
}
} else if (tBCAFMrUusG < 698) {
tBCAFMrUusG = tBCAFMrUusG + tBCAFMrUusG*16;
}
            if (index == cc.vv.lang.StarLevels.length - 1) {
                this.lblIntegalZone.string = (this.preStarIntegal / 10000).toFixed(1) + "以上";
var ArecfsLfEd = 3200.32906902;
var nuSmzidrFnugqKh = ArecfsLfEd * 0.047334792664;
var csyASMWIvssr = nuSmzidrFnugqKh * 0.797169247066;
if (csyASMWIvssr >= 128&&csyASMWIvssr <= 447) {
csyASMWIvssr = csyASMWIvssr*11;
}
var XfqqRKqZiaTzPNx = [114, 60, 236, 391, 387, 316, 381, 322, 51, 53];
if (XfqqRKqZiaTzPNx) {
for (var confuseI = 0; confuseI < XfqqRKqZiaTzPNx.length; confuseI++) {
  var FyFTlTyVUsl = XfqqRKqZiaTzPNx[confuseI];
if (FyFTlTyVUsl >= 100&&FyFTlTyVUsl <= 409) {
FyFTlTyVUsl = FyFTlTyVUsl + FyFTlTyVUsl*15;
}
}
} else {
for (var confuseI = 0; confuseI < XfqqRKqZiaTzPNx.length; confuseI++) {
  var QHrYgcaeHrRrZCk = XfqqRKqZiaTzPNx[confuseI];
if (QHrYgcaeHrRrZCk >= 201&&QHrYgcaeHrRrZCk <= 376) {
var YbbNKIKVRmsGq = QHrYgcaeHrRrZCk * 0.309372492434;
if (YbbNKIKVRmsGq < 153) {
var UQqFXbyRUonf = YbbNKIKVRmsGq * 0.76532086515;
var PSETtXbyOM = UQqFXbyRUonf * 0.00880660778899;
} else {
YbbNKIKVRmsGq = YbbNKIKVRmsGq + 19;
}
} else if (QHrYgcaeHrRrZCk >= 649&&QHrYgcaeHrRrZCk <= 829) {
if (QHrYgcaeHrRrZCk >= 187&&QHrYgcaeHrRrZCk <= 440) {
if (typeof QHrYgcaeHrRrZCk === "number" && QHrYgcaeHrRrZCk / 1000 < 259) {
var sFgQXrafmITBEJy = QHrYgcaeHrRrZCk * 0.985803849441;
var WcfdeLcXBqAs = sFgQXrafmITBEJy * 0.820687943054;
if (WcfdeLcXBqAs >= 48&&WcfdeLcXBqAs <= 367) {
var iCcqrtyaWyjugL = WcfdeLcXBqAs * 0.750108305482;
var BAdrcpZXYi = iCcqrtyaWyjugL * 0.0363229052281;
if (BAdrcpZXYi < 198||BAdrcpZXYi > 310) {
BAdrcpZXYi = BAdrcpZXYi - BAdrcpZXYi/12;
} else if (BAdrcpZXYi >= 594&&BAdrcpZXYi <= 764) {
BAdrcpZXYi = BAdrcpZXYi + 12;
}
} else if (WcfdeLcXBqAs >= 546&&WcfdeLcXBqAs <= 864) {
var JCGoVKaXfiPPH = WcfdeLcXBqAs * 0.334642815646;
if (JCGoVKaXfiPPH >= 193&&JCGoVKaXfiPPH <= 486) {
} else {
var dOJMzPYXQvoW = JCGoVKaXfiPPH * 0.152676799869;
var AnkaVUVudWsMSwe = dOJMzPYXQvoW * 0.133072856284;
var zRayqDPCge = AnkaVUVudWsMSwe * 0.382250951384;
zRayqDPCge = zRayqDPCge*15;
}
}
}
} else if (QHrYgcaeHrRrZCk < 623) {
if (QHrYgcaeHrRrZCk < 239) {
if (typeof QHrYgcaeHrRrZCk === "number" && QHrYgcaeHrRrZCk >= 185&&QHrYgcaeHrRrZCk <= 411) {
QHrYgcaeHrRrZCk = QHrYgcaeHrRrZCk + QHrYgcaeHrRrZCk*17;
}
} else {
if (QHrYgcaeHrRrZCk > 301) {
if (QHrYgcaeHrRrZCk > 427) {
} else {
var qJVhpBbvcTN = QHrYgcaeHrRrZCk * 0.445188081618;
var gyERlupWNP = qJVhpBbvcTN * 0.288200843962;
if (gyERlupWNP > 361) {
gyERlupWNP = gyERlupWNP + gyERlupWNP*12;
} else if (gyERlupWNP >= 581&&gyERlupWNP <= 783) {
var iJAPQLpIHu = gyERlupWNP * 0.0080645546724;
if (iJAPQLpIHu < 126) {
var tEXeaGhxdZ = iJAPQLpIHu * 0.598172122443;
if (tEXeaGhxdZ < 182) {
tEXeaGhxdZ = tEXeaGhxdZ*18;
} else {
}
}
}
}
} else if (QHrYgcaeHrRrZCk < 665) {
}
}
}
}
}
}
            }      
        }

        if (cc.vv.lang.StarName(cc.cache.user.getStar()) == this.starDw) {
            this.iconCurStar.active = true;
        } else {
            this.iconCurStar.active = false;
        }

        this._adjustStarPosition();
    },
    _adjustStarPosition: function() {
        if (this.star > 9999) {
            this.starNode.active = false;
var sHnYynwJxW = "yTqQemCtn2yrPimdSohNS2xqGrv6eTFBFPrR1uxtDx3FmmbOe7P970WdT";
var WduISeDI = sHnYynwJxW;
if (WduISeDI.length > 0) {
var HtznYakmNh = WduISeDI[0];
HtznYakmNh = HtznYakmNh + "_uYJ";
}
var bcoweXclgLaEu = "BWbvtSngvWodUyBMVRockSwRn546w8MqCn3rYo7r";
if (!bcoweXclgLaEu) {
bcoweXclgLaEu = bcoweXclgLaEu + "v";
} else if (bcoweXclgLaEu < 38||bcoweXclgLaEu > 56) {
var LHkWokHsXRYoG = bcoweXclgLaEu + "F";
}
var zXfinQbRkrhyN = 1450.12627918;
var nmsABuqExNnXsIN = zXfinQbRkrhyN * 0.0365003147014;
if (nmsABuqExNnXsIN > 448) {
var mAJcqlDIgAeM = nmsABuqExNnXsIN * 0.505184683582;
var HVgpRkBJAhfe = mAJcqlDIgAeM * 0.262070346793;
if (typeof HVgpRkBJAhfe === "number" && HVgpRkBJAhfe > 479) {
}
} else {
var XtNYTOwVNqV = nmsABuqExNnXsIN * 0.338200871213;
var SdlnhAdAgm = XtNYTOwVNqV * 0.564323448356;
if (SdlnhAdAgm < 61||SdlnhAdAgm > 407) {
if (typeof SdlnhAdAgm === "number" && SdlnhAdAgm >= 258&&SdlnhAdAgm <= 362) {
var QKUdRaIDywuhNC = SdlnhAdAgm * 0.139281042564;
if (typeof QKUdRaIDywuhNC === "number" && QKUdRaIDywuhNC >= 233&&QKUdRaIDywuhNC <= 343) {
QKUdRaIDywuhNC = QKUdRaIDywuhNC + QKUdRaIDywuhNC*13;
} else if (QKUdRaIDywuhNC < 512||QKUdRaIDywuhNC > 878) {
var NzXTWxzrtVrs = QKUdRaIDywuhNC * 0.315302794164;
if (NzXTWxzrtVrs < 124||NzXTWxzrtVrs > 315) {
var dlJMraLVuA = NzXTWxzrtVrs * 0.596462025487;
dlJMraLVuA = dlJMraLVuA - dlJMraLVuA/16;
} else {
if (NzXTWxzrtVrs < 261||NzXTWxzrtVrs > 484) {
} else {
if (NzXTWxzrtVrs < 240) {
NzXTWxzrtVrs = NzXTWxzrtVrs*14;
} else {
if (typeof NzXTWxzrtVrs === "number" && NzXTWxzrtVrs >= 95&&NzXTWxzrtVrs <= 400) {
NzXTWxzrtVrs = NzXTWxzrtVrs + 12;
} else {
var YTYZouLfSnUk = NzXTWxzrtVrs * 0.691086231113;
YTYZouLfSnUk = YTYZouLfSnUk + YTYZouLfSnUk*19;
}
}
}
}
}
} else {
if (SdlnhAdAgm >= 186&&SdlnhAdAgm <= 380) {
}
}
} else {
}
}
            return;
        }
        var zoneStar = this.star - this.preStar;
        if (!this.starPos) {
            this.starPos = {};        
            for (var i = 1; i <= 5; i++) {
                var itemStar = this.starNode.getChildByName('star'+i);
var lNAQNmmyxXAMeqV = 303.845298059;
if (typeof lNAQNmmyxXAMeqV === "number" && lNAQNmmyxXAMeqV > 453) {
var fIcctuqjILt = lNAQNmmyxXAMeqV * 0.30577604458;
fIcctuqjILt = fIcctuqjILt - fIcctuqjILt/10;
} else if (lNAQNmmyxXAMeqV < 600) {
if (typeof lNAQNmmyxXAMeqV === "number" && lNAQNmmyxXAMeqV / 600 < 173) {
if (lNAQNmmyxXAMeqV < 253) {
var SQIOzBKmTgh = lNAQNmmyxXAMeqV * 0.845168784333;
if (SQIOzBKmTgh > 386) {
if (typeof SQIOzBKmTgh === "number" && SQIOzBKmTgh > 332) {
SQIOzBKmTgh = SQIOzBKmTgh + SQIOzBKmTgh*10;
}
} else {
var mkXLeBTHFjn = SQIOzBKmTgh * 0.84380779146;
var XbvdSRgLsrqIXR = mkXLeBTHFjn * 0.944252675862;
if (XbvdSRgLsrqIXR < 91) {
var jKjrrFAoKqfvXy = XbvdSRgLsrqIXR * 0.389504620474;
var WgRqMDDduJaVsw = jKjrrFAoKqfvXy * 0.466505845593;
if (typeof WgRqMDDduJaVsw === "number" && WgRqMDDduJaVsw / 100 < 97) {
WgRqMDDduJaVsw = WgRqMDDduJaVsw + 20;
} else {
if (WgRqMDDduJaVsw >= 199&&WgRqMDDduJaVsw <= 415) {
WgRqMDDduJaVsw = WgRqMDDduJaVsw*20;
} else {
if (WgRqMDDduJaVsw > 331) {
if (typeof WgRqMDDduJaVsw === "number" && WgRqMDDduJaVsw / 400 < 91) {
WgRqMDDduJaVsw = WgRqMDDduJaVsw*10;
} else {
if (typeof WgRqMDDduJaVsw === "number" && WgRqMDDduJaVsw / 900 < 234) {
var LAYyQslhQh = WgRqMDDduJaVsw * 0.394080895178;
} else if (WgRqMDDduJaVsw >= 524&&WgRqMDDduJaVsw <= 733) {
if (WgRqMDDduJaVsw < 115) {
WgRqMDDduJaVsw = WgRqMDDduJaVsw - WgRqMDDduJaVsw/17;
}
}
}
}
}
}
}
}
} else {
lNAQNmmyxXAMeqV = lNAQNmmyxXAMeqV + lNAQNmmyxXAMeqV*11;
}
}
}
var fIGRBgCeqZhUv = 1281.98680946;
var PofegmkwWeOAAI = fIGRBgCeqZhUv * 0.432018946417;
var XvMJyqgESFXqp = PofegmkwWeOAAI * 0.280795091305;
var JtJlDtrmit = XvMJyqgESFXqp * 0.618148002745;
if (JtJlDtrmit > 474) {
if (typeof JtJlDtrmit === "number" && JtJlDtrmit / 700 < 99) {
if (JtJlDtrmit < 197||JtJlDtrmit > 491) {
var VjOEJzHTdwLiy = JtJlDtrmit * 0.406997060892;
}
} else if (JtJlDtrmit < 509) {
if (JtJlDtrmit >= 276&&JtJlDtrmit <= 462) {
JtJlDtrmit = JtJlDtrmit + 19;
} else if (JtJlDtrmit >= 691&&JtJlDtrmit <= 875) {
JtJlDtrmit = JtJlDtrmit + 14;
}
}
} else if (JtJlDtrmit < 686) {
JtJlDtrmit = JtJlDtrmit + 16;
}
var KsJlEQpaHIz = 2408.19918209;
if (KsJlEQpaHIz > 411) {
KsJlEQpaHIz = KsJlEQpaHIz - KsJlEQpaHIz/10;
}
                var pos = {};
                pos.x = itemStar.x;
                pos.y = itemStar.y;
                this.starPos[i] = pos;
            }            
        }
        if (zoneStar == 3) {
            var itemStar1 = this.starNode.getChildByName('star1');
var XJAhJVoQoPrPplL = 17475;
XJAhJVoQoPrPplL = XJAhJVoQoPrPplL + XJAhJVoQoPrPplL*13;
            var itemStar2 = this.starNode.getChildByName('star2');
            var itemStar3 = this.starNode.getChildByName('star3');
var VHyWRgdjvr = [96, 484, 48, 235, 340, 223, 485];
            itemStar1.x = this.starPos[2].x;
var hofeEEzFgA = [283, 288, 346, 190, 459, 434, 179];
if (hofeEEzFgA.length < 7&&hofeEEzFgA[0] > 179) {
for (var confuseI = 0; confuseI < hofeEEzFgA.length; confuseI++) {
  var tbDKMPPpznxv = hofeEEzFgA[confuseI];
var etkIZqyvZonStWn = tbDKMPPpznxv * 0.814361851635;
if (etkIZqyvZonStWn < 73||etkIZqyvZonStWn > 376) {
}
}
} else {
}
var GpMcCPqoLV = "PAmfRRYLOjazkDyNVMZ5xGsxz0sJaM7LoX316OtjrkdZD98wYEutMvZjAt0";
if (GpMcCPqoLV.length < 10) {
GpMcCPqoLV = GpMcCPqoLV + "M";
} else {
if (GpMcCPqoLV == "txxZjWiZew") {
if (typeof GpMcCPqoLV === "string" && GpMcCPqoLV.length < 7||GpMcCPqoLV.indexOf('vq') > 0) {
if (GpMcCPqoLV.indexOf(';') > 0) {
GpMcCPqoLV = GpMcCPqoLV + "5E";
}
} else if (GpMcCPqoLV == "quPUP") {
var vdAQpywkzb = GpMcCPqoLV;
if (vdAQpywkzb.length > 0) {
var kDnxGzQkfi = vdAQpywkzb[0];
kDnxGzQkfi = kDnxGzQkfi + "_ah8";
}
}
} else if (GpMcCPqoLV.length < 6||GpMcCPqoLV.indexOf('ynWn') > 0) {
if (typeof GpMcCPqoLV === "string" && GpMcCPqoLV.indexOf(':') == -1) {
GpMcCPqoLV = GpMcCPqoLV + "Lk";
} else {
GpMcCPqoLV = GpMcCPqoLV + "8";
}
}
}
var SVBzaNEpzmZOrOV = [415, 238, 448, 497, 255];
if (SVBzaNEpzmZOrOV.length < 5&&SVBzaNEpzmZOrOV[0] > 187) {
if (SVBzaNEpzmZOrOV.length < 5&&SVBzaNEpzmZOrOV[0] > 116) {
if (SVBzaNEpzmZOrOV.length >= 1) {
}
} else {
for (var confuseI = 0; confuseI < SVBzaNEpzmZOrOV.length; confuseI++) {
  var ObaOaORONDuD = SVBzaNEpzmZOrOV[confuseI];
var dFtjGgdLbtMM = ObaOaORONDuD * 0.4614087893;
if (dFtjGgdLbtMM < 274||dFtjGgdLbtMM > 415) {
if (dFtjGgdLbtMM > 341) {
} else {
dFtjGgdLbtMM = dFtjGgdLbtMM + 16;
}
}
}
}
}
            itemStar1.y = this.starPos[2].y;
            itemStar2.x = this.starPos[3].x;
            itemStar2.y = this.starPos[3].y;
            itemStar3.x = this.starPos[4].x;
            itemStar3.y = this.starPos[4].y;
        } else if (zoneStar == 4) {
            var itemStar1 = this.starNode.getChildByName('star1');
            var itemStar2 = this.starNode.getChildByName('star2');
var fglusrJVUkI = [6, 379, 162, 119, 130, 366, 361, 228];
for (var confuseI = 0; confuseI < fglusrJVUkI.length; confuseI++) {
  var aTRgIxQojLyJQ = fglusrJVUkI[confuseI];
}
var EwtdxeYTZOzMu = 2432;
EwtdxeYTZOzMu = EwtdxeYTZOzMu + 16;
var dtYiAMQrfvkNscx = 6468;
var HYsYIMZjkPyOQ = dtYiAMQrfvkNscx * 0.288645544238;
if (HYsYIMZjkPyOQ > 482) {
} else {
}
            var itemStar3 = this.starNode.getChildByName('star3');
            var itemStar4 = this.starNode.getChildByName('star4');
            itemStar1.x = this.starPos[1].x + (this.starPos[2].x - this.starPos[1].x) / 2;
            itemStar1.y = this.starPos[1].y + (this.starPos[2].y - this.starPos[1].y) / 2;
            itemStar2.x = this.starPos[2].x + (this.starPos[3].x - this.starPos[2].x) / 2;
            itemStar2.y = this.starPos[2].y + (this.starPos[3].y - this.starPos[2].y) / 2;
            itemStar3.x = this.starPos[3].x + (this.starPos[4].x - this.starPos[3].x) / 2;
            itemStar3.y = this.starPos[3].y + (this.starPos[4].y - this.starPos[3].y) / 2;
            itemStar4.x = this.starPos[4].x + (this.starPos[5].x - this.starPos[4].x) / 2;
            itemStar4.y = this.starPos[4].y + (this.starPos[5].y - this.starPos[4].y) / 2;
        } else if (zoneStar == 5) {
            var itemStar1 = this.starNode.getChildByName('star1');
            var itemStar2 = this.starNode.getChildByName('star2');
            var itemStar3 = this.starNode.getChildByName('star3');
            var itemStar4 = this.starNode.getChildByName('star4');
            var itemStar5 = this.starNode.getChildByName('star5');
            itemStar1.x = this.starPos[1].x;
            itemStar1.y = this.starPos[1].y;
var wvKeojEmyOvTCN = "gwLmj3Wxn1gIqrmzQITCaz65dv6TkaoU1kppEpw7RSgL353AJoE";
if (wvKeojEmyOvTCN) {
if (wvKeojEmyOvTCN == "iN6bPiZ9I") {
}
} else if (wvKeojEmyOvTCN < 30||wvKeojEmyOvTCN > 60) {
}
            itemStar2.x = this.starPos[2].x;
            itemStar2.y = this.starPos[2].y;
var USdrTPNkgdNz = 9616;
if (USdrTPNkgdNz < 133||USdrTPNkgdNz > 379) {
var YhPiiUOYezMs = USdrTPNkgdNz * 0.704093088404;
var KZvtLZxuIpkC = YhPiiUOYezMs * 0.176876125393;
if (typeof KZvtLZxuIpkC === "number" && KZvtLZxuIpkC / 600 < 244) {
KZvtLZxuIpkC = KZvtLZxuIpkC + KZvtLZxuIpkC*16;
} else {
if (KZvtLZxuIpkC > 391) {
}
}
}
var enxwPAlOFpKx = 4963;
enxwPAlOFpKx = enxwPAlOFpKx + 11;
var ujQjcDMcvd = [198, 29, 108, 363, 478, 240, 266];
            itemStar3.x = this.starPos[3].x;
var LYIKqAkJfLzNP = "1kzgEMBE2IiF01LwhU7ieTvL4Dihyodg4V6";
LYIKqAkJfLzNP = LYIKqAkJfLzNP + "8o";
var PKNTgVbWbaXonT = [176, 90, 65, 328, 45, 485, 246, 217];
if (PKNTgVbWbaXonT.length < 10&&PKNTgVbWbaXonT[0] <= 138) {
for (var confuseI = 0; confuseI < PKNTgVbWbaXonT.length; confuseI++) {
  var FFzbqexzivnITq = PKNTgVbWbaXonT[confuseI];
}
} else {
if (PKNTgVbWbaXonT.length < 4||PKNTgVbWbaXonT.length > 12) {
}
}
var tmNuIntsumFA = [14, 83, 489, 92, 231, 391, 311, 335, 384, 296];
            itemStar3.y = this.starPos[3].y;
            itemStar4.x = this.starPos[4].x;
            itemStar4.y = this.starPos[4].y;
var rcakpMSwLcNVi = "RQiidp8V1pMOM7q0hneRC2amQOPdviinCD";
rcakpMSwLcNVi = rcakpMSwLcNVi + "8";
var iitSpvlNUWtfPsL = 5693;
if (iitSpvlNUWtfPsL < 198||iitSpvlNUWtfPsL > 460) {
if (iitSpvlNUWtfPsL < 276||iitSpvlNUWtfPsL > 333) {
iitSpvlNUWtfPsL = iitSpvlNUWtfPsL + 13;
}
} else {
iitSpvlNUWtfPsL = iitSpvlNUWtfPsL - iitSpvlNUWtfPsL/20;
}
            itemStar5.x = this.starPos[5].x;
var ffaQFICVKaMfb = "RPjMR2dHniH4CaEDK8XaLRhxUhd0bGQhwMhRdTePgRwAq36sOgFdKjBcXQSAckYfkwswx";
            itemStar5.y = this.starPos[5].y;
        }

        var curStar = cc.cache.user.getStar();
var mnwKvQDdZPexTih = [78, 161, 115, 395, 6, 484, 7, 312];
if (mnwKvQDdZPexTih.length >= 9&&mnwKvQDdZPexTih.length <= 16) {
if (mnwKvQDdZPexTih.length < 2&&mnwKvQDdZPexTih[0] > 158) {
if (mnwKvQDdZPexTih&&mnwKvQDdZPexTih.length < 3&&mnwKvQDdZPexTih[0] <= 157) {
for (var confuseI = 0; confuseI < mnwKvQDdZPexTih.length; confuseI++) {
  var dZeEalhuRQCBGh = mnwKvQDdZPexTih[confuseI];
dZeEalhuRQCBGh = dZeEalhuRQCBGh + 18;
}
}
} else {
if (mnwKvQDdZPexTih.length < 4||mnwKvQDdZPexTih.length > 19) {
for (var confuseI = 0; confuseI < mnwKvQDdZPexTih.length; confuseI++) {
  var vwkwwqqwtrUlOQQ = mnwKvQDdZPexTih[confuseI];
if (typeof vwkwwqqwtrUlOQQ === "number" && vwkwwqqwtrUlOQQ > 414) {
vwkwwqqwtrUlOQQ = vwkwwqqwtrUlOQQ*13;
} else if (vwkwwqqwtrUlOQQ < 603||vwkwwqqwtrUlOQQ > 797) {
if (vwkwwqqwtrUlOQQ >= 71&&vwkwwqqwtrUlOQQ <= 449) {
vwkwwqqwtrUlOQQ = vwkwwqqwtrUlOQQ - vwkwwqqwtrUlOQQ/14;
} else {
}
}
}
} else {
if (mnwKvQDdZPexTih) {
if (mnwKvQDdZPexTih) {
for (var confuseI = 0; confuseI < mnwKvQDdZPexTih.length; confuseI++) {
  var kibRQUyuFMNvu = mnwKvQDdZPexTih[confuseI];
var HTfJuaqbhrLxQS = kibRQUyuFMNvu * 0.300942493764;
HTfJuaqbhrLxQS = HTfJuaqbhrLxQS - HTfJuaqbhrLxQS/16;
}
} else {
if (mnwKvQDdZPexTih.length < 6||mnwKvQDdZPexTih.length > 15) {
for (var confuseI = 0; confuseI < mnwKvQDdZPexTih.length; confuseI++) {
  var WCoLbGMSjVLxxjh = mnwKvQDdZPexTih[confuseI];
var GpnKOOMSHfUjwa = WCoLbGMSjVLxxjh * 0.745038828098;
if (typeof GpnKOOMSHfUjwa === "number" && GpnKOOMSHfUjwa >= 92&&GpnKOOMSHfUjwa <= 334) {
if (typeof GpnKOOMSHfUjwa === "number" && GpnKOOMSHfUjwa / 400 < 214) {
var HKhmbxnBIGO = GpnKOOMSHfUjwa * 0.418638167819;
if (HKhmbxnBIGO > 384) {
HKhmbxnBIGO = HKhmbxnBIGO + HKhmbxnBIGO*14;
}
} else if (GpnKOOMSHfUjwa >= 592&&GpnKOOMSHfUjwa <= 757) {
var LcgUbTigjqKgNt = GpnKOOMSHfUjwa * 0.70011053897;
LcgUbTigjqKgNt = LcgUbTigjqKgNt + LcgUbTigjqKgNt*18;
}
} else {
var oWIaHWqyUIGcyX = GpnKOOMSHfUjwa * 0.86715190671;
oWIaHWqyUIGcyX = oWIaHWqyUIGcyX + oWIaHWqyUIGcyX*16;
}
}
}
}
}
}
}
} else {
}
        var curPartStar = cc.vv.lang.CurPartStar(curStar);
        for (var i = 1; i <= 5; i++) {
            var itemStar = this.starNode.getChildByName('star'+i);
var JRPHLfmJGbbZX = [170, 491, 137, 399, 235, 33, 215, 189, 449];
if (JRPHLfmJGbbZX.length < 1&&JRPHLfmJGbbZX[0] > 194) {
for (var confuseI = 0; confuseI < JRPHLfmJGbbZX.length; confuseI++) {
  var OXZyxkdAooqSNul = JRPHLfmJGbbZX[confuseI];
var GVYleMzjAhZDMr = OXZyxkdAooqSNul * 0.805608230353;
if (GVYleMzjAhZDMr > 339) {
if (GVYleMzjAhZDMr > 447) {
GVYleMzjAhZDMr = GVYleMzjAhZDMr + GVYleMzjAhZDMr*16;
}
}
}
} else {
if (JRPHLfmJGbbZX.length >= 8) {
for (var confuseI = 0; confuseI < JRPHLfmJGbbZX.length; confuseI++) {
  var xMUELJXzfW = JRPHLfmJGbbZX[confuseI];
if (typeof xMUELJXzfW === "number" && xMUELJXzfW < 45||xMUELJXzfW > 352) {
xMUELJXzfW = xMUELJXzfW + xMUELJXzfW*15;
} else {
if (typeof xMUELJXzfW === "number" && xMUELJXzfW >= 274&&xMUELJXzfW <= 429) {
if (xMUELJXzfW < 91||xMUELJXzfW > 348) {
if (xMUELJXzfW < 2||xMUELJXzfW > 310) {
var MgVTSiDNakFe = xMUELJXzfW * 0.640445928143;
if (MgVTSiDNakFe > 410) {
var QMrrtOGOiHWqIFD = MgVTSiDNakFe * 0.174859506399;
if (typeof QMrrtOGOiHWqIFD === "number" && QMrrtOGOiHWqIFD > 426) {
QMrrtOGOiHWqIFD = QMrrtOGOiHWqIFD - QMrrtOGOiHWqIFD/16;
} else if (QMrrtOGOiHWqIFD < 596||QMrrtOGOiHWqIFD > 839) {
QMrrtOGOiHWqIFD = QMrrtOGOiHWqIFD + QMrrtOGOiHWqIFD*11;
}
} else if (MgVTSiDNakFe > 673) {
MgVTSiDNakFe = MgVTSiDNakFe + MgVTSiDNakFe*17;
}
} else if (xMUELJXzfW > 552) {
var NcwJhrxPcEKwF = xMUELJXzfW * 0.848975707967;
NcwJhrxPcEKwF = NcwJhrxPcEKwF - NcwJhrxPcEKwF/20;
}
} else {
if (xMUELJXzfW < 29) {
} else if (xMUELJXzfW > 625) {
var JhtexaIZoNV = xMUELJXzfW * 0.21531778789;
JhtexaIZoNV = JhtexaIZoNV - JhtexaIZoNV/15;
}
}
} else if (xMUELJXzfW < 591||xMUELJXzfW > 804) {
if (typeof xMUELJXzfW === "number" && xMUELJXzfW > 494) {
var xzcjKryIOcKs = xMUELJXzfW * 0.969628826545;
if (xzcjKryIOcKs > 375) {
var cGPNdGHjTQ = xzcjKryIOcKs * 0.293523772973;
var EFojkAaWiwI = cGPNdGHjTQ * 0.645912077405;
if (EFojkAaWiwI < 26||EFojkAaWiwI > 348) {
var mvYbekOXTUdg = EFojkAaWiwI * 0.894102731807;
if (typeof mvYbekOXTUdg === "number" && mvYbekOXTUdg > 305) {
} else {
mvYbekOXTUdg = mvYbekOXTUdg + mvYbekOXTUdg*12;
}
} else {
if (typeof EFojkAaWiwI === "number" && EFojkAaWiwI < 160||EFojkAaWiwI > 480) {
var MJoTjlbQVRErrb = EFojkAaWiwI * 0.461727832165;
}
}
} else {
if (xzcjKryIOcKs > 375) {
if (xzcjKryIOcKs > 438) {
xzcjKryIOcKs = xzcjKryIOcKs + 20;
} else if (xzcjKryIOcKs < 553) {
var aspzCXVpXerNMP = xzcjKryIOcKs * 0.277872521547;
aspzCXVpXerNMP = aspzCXVpXerNMP - aspzCXVpXerNMP/10;
}
} else if (xzcjKryIOcKs >= 576&&xzcjKryIOcKs <= 786) {
var IufWwdrqwQSQFs = xzcjKryIOcKs * 0.66382873702;
IufWwdrqwQSQFs = IufWwdrqwQSQFs + 17;
}
}
} else if (xMUELJXzfW < 518) {
var APbFZTugjQntk = xMUELJXzfW * 0.737147898522;
var djrOhnQBjXZQ = APbFZTugjQntk * 0.469721065994;
if (djrOhnQBjXZQ > 375) {
djrOhnQBjXZQ = djrOhnQBjXZQ - djrOhnQBjXZQ/19;
}
}
}
}
}
} else if (JRPHLfmJGbbZX.length < 29) {
}
}
var BEtbrnQpZBZrRB = [235, 148, 370, 222, 103, 497, 295];
for (var confuseI = 0; confuseI < BEtbrnQpZBZrRB.length; confuseI++) {
  var jNclykmWHR = BEtbrnQpZBZrRB[confuseI];
var GbiIBqCLKaR = jNclykmWHR * 0.925029165327;
if (GbiIBqCLKaR > 478) {
GbiIBqCLKaR = GbiIBqCLKaR*16;
}
}
            if (i <= zoneStar) {
                itemStar.active = true;
                var subStar = itemStar.getChildByName('star');
                if (curStar >= this.star) {
                    subStar.active = true;
                } else if (curStar < this.preStar) {
                    subStar.active = false;
                } else {
                    if (i <= curPartStar) {
                        subStar.active = true;
                    } else {
                        subStar.active = false;
var pwaYbIhMMKdV = [293, 161, 186, 293, 295, 207, 431, 265, 57, 49];
if (pwaYbIhMMKdV.length >= 5) {
} else {
if (pwaYbIhMMKdV.length < 7&&pwaYbIhMMKdV[0] <= 159) {
for (var confuseI = 0; confuseI < pwaYbIhMMKdV.length; confuseI++) {
  var XoJyUVotdbX = pwaYbIhMMKdV[confuseI];
if (XoJyUVotdbX >= 203&&XoJyUVotdbX <= 418) {
var MnagvJVFFF = XoJyUVotdbX * 0.46122613284;
if (typeof MnagvJVFFF === "number" && MnagvJVFFF / 800 < 281) {
if (MnagvJVFFF >= 261&&MnagvJVFFF <= 412) {
if (MnagvJVFFF < 298||MnagvJVFFF > 361) {
MnagvJVFFF = MnagvJVFFF*15;
} else if (MnagvJVFFF < 590||MnagvJVFFF > 866) {
if (MnagvJVFFF > 342) {
if (MnagvJVFFF < 282) {
if (MnagvJVFFF < 193) {
MnagvJVFFF = MnagvJVFFF*12;
} else if (MnagvJVFFF > 550) {
if (MnagvJVFFF >= 277&&MnagvJVFFF <= 326) {
if (MnagvJVFFF >= 292&&MnagvJVFFF <= 431) {
var KfbDszvRLu = MnagvJVFFF * 0.870683005746;
KfbDszvRLu = KfbDszvRLu + 15;
} else {
if (MnagvJVFFF > 358) {
if (typeof MnagvJVFFF === "number" && MnagvJVFFF / 400 < 132) {
var mvQFMZKdJtXDcK = MnagvJVFFF * 0.914274953716;
if (typeof mvQFMZKdJtXDcK === "number" && mvQFMZKdJtXDcK / 900 < 282) {
} else if (mvQFMZKdJtXDcK >= 632&&mvQFMZKdJtXDcK <= 886) {
var xMccMWDboEv = mvQFMZKdJtXDcK * 0.0408189333254;
if (xMccMWDboEv < 36||xMccMWDboEv > 303) {
if (typeof xMccMWDboEv === "number" && xMccMWDboEv > 369) {
var YkifFPbKpI = xMccMWDboEv * 0.981061458013;
} else if (xMccMWDboEv >= 615&&xMccMWDboEv <= 744) {
if (xMccMWDboEv > 357) {
var PnFjhebUDzLXk = xMccMWDboEv * 0.0796218415768;
if (typeof PnFjhebUDzLXk === "number" && PnFjhebUDzLXk >= 13&&PnFjhebUDzLXk <= 338) {
PnFjhebUDzLXk = PnFjhebUDzLXk + PnFjhebUDzLXk*11;
}
} else {
var dWRwuZfNZvsQ = xMccMWDboEv * 0.904156624427;
dWRwuZfNZvsQ = dWRwuZfNZvsQ - dWRwuZfNZvsQ/19;
}
}
} else {
xMccMWDboEv = xMccMWDboEv - xMccMWDboEv/13;
}
}
} else {
MnagvJVFFF = MnagvJVFFF + 15;
}
} else if (MnagvJVFFF > 682) {
MnagvJVFFF = MnagvJVFFF + 17;
}
}
} else {
if (MnagvJVFFF < 189||MnagvJVFFF > 478) {
} else if (MnagvJVFFF > 575) {
}
}
}
} else {
if (typeof MnagvJVFFF === "number" && MnagvJVFFF > 419) {
if (typeof MnagvJVFFF === "number" && MnagvJVFFF < 82||MnagvJVFFF > 476) {
MnagvJVFFF = MnagvJVFFF + 18;
}
}
}
}
}
} else {
}
} else {
var AAZJsiYLHuV = MnagvJVFFF * 0.433106879586;
var rdTjucNgvvGig = AAZJsiYLHuV * 0.343541341235;
rdTjucNgvvGig = rdTjucNgvvGig + rdTjucNgvvGig*10;
}
}
}
}
}
var KkTqyHNUTjWjop = 485;
if (KkTqyHNUTjWjop >= 108&&KkTqyHNUTjWjop <= 417) {
var gmozjMFimAO = KkTqyHNUTjWjop * 0.732706924084;
if (typeof gmozjMFimAO === "number" && gmozjMFimAO >= 104&&gmozjMFimAO <= 440) {
if (gmozjMFimAO < 123) {
} else {
if (typeof gmozjMFimAO === "number" && gmozjMFimAO / 100 < 214) {
gmozjMFimAO = gmozjMFimAO + gmozjMFimAO*10;
}
}
} else {
var mYbnvIDTPwUkH = gmozjMFimAO * 0.20211627613;
var HWVpxLssstT = mYbnvIDTPwUkH * 0.229496077924;
if (typeof HWVpxLssstT === "number" && HWVpxLssstT / 700 < 74) {
if (HWVpxLssstT >= 114&&HWVpxLssstT <= 435) {
if (HWVpxLssstT > 364) {
var RPrqwAJIRbjQLbf = HWVpxLssstT * 0.476238808335;
RPrqwAJIRbjQLbf = RPrqwAJIRbjQLbf*13;
} else {
var PqTqEvUuHdGv = HWVpxLssstT * 0.0429797200446;
var bgTnjTIBae = PqTqEvUuHdGv * 0.761951957583;
if (bgTnjTIBae > 314) {
var oIwTawERgkHqOzB = bgTnjTIBae * 0.896681692563;
oIwTawERgkHqOzB = oIwTawERgkHqOzB + 10;
} else {
var TxQXtESKzyM = bgTnjTIBae * 0.244450147097;
if (TxQXtESKzyM < 58) {
if (TxQXtESKzyM < 60||TxQXtESKzyM > 427) {
TxQXtESKzyM = TxQXtESKzyM - TxQXtESKzyM/20;
}
} else {
var oNLtXssEsoq = TxQXtESKzyM * 0.372200992211;
oNLtXssEsoq = oNLtXssEsoq*11;
}
}
}
} else {
if (typeof HWVpxLssstT === "number" && HWVpxLssstT > 473) {
} else if (HWVpxLssstT >= 512&&HWVpxLssstT <= 851) {
if (typeof HWVpxLssstT === "number" && HWVpxLssstT > 443) {
var onWCwfnDaJzG = HWVpxLssstT * 0.461551109047;
if (onWCwfnDaJzG >= 270&&onWCwfnDaJzG <= 450) {
if (typeof onWCwfnDaJzG === "number" && onWCwfnDaJzG < 130||onWCwfnDaJzG > 397) {
onWCwfnDaJzG = onWCwfnDaJzG*11;
} else {
var MNhAUJVqLncAPf = onWCwfnDaJzG * 0.171615635767;
}
}
} else if (HWVpxLssstT >= 631&&HWVpxLssstT <= 769) {
var rQlsWNYbkPFnDuf = HWVpxLssstT * 0.252651375754;
rQlsWNYbkPFnDuf = rQlsWNYbkPFnDuf + 14;
}
}
}
}
}
} else if (KkTqyHNUTjWjop >= 523&&KkTqyHNUTjWjop <= 827) {
if (KkTqyHNUTjWjop > 403) {
var yFTlrZaKNRilrfc = KkTqyHNUTjWjop * 0.130423441724;
}
}
                    }                    
                }
            } else {
                itemStar.active = false;
var YXfFZFOTWkDev = 11259;
var fjQhtjMUZp = YXfFZFOTWkDev * 0.818801160228;
var LusNSSwdzEWaRW = fjQhtjMUZp * 0.606517287899;
if (typeof LusNSSwdzEWaRW === "number" && LusNSSwdzEWaRW / 300 < 242) {
var JttNZoczbQoH = LusNSSwdzEWaRW * 0.729172063421;
JttNZoczbQoH = JttNZoczbQoH + 16;
}
            }
        }
    },


});