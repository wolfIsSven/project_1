cc.Class({
    extends: cc.Component,
    properties: {
        _pengGangMj:[],
    },

    onLoad: function () {
    },
    initItem: function(mjid, seatIndex, flag, pos, cpgData, jiType) {
        this._pengGangMj = [];
        
        var childrens = this.node.children;
        var length = childrens.length;
        // var x = 0;
        // var y = 0;
        
        if ((cc.vv.mjconfig.jiCard && cc.vv.mjconfig.jiCard == mjid[0]) || 
            (cc.vv.mjconfig.wuGuJiCard && cc.vv.mjconfig.wuGuJiCard == mjid[0])){
            if (jiType & (0x01 << cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_1_ZRJ_PG) || 
                jiType & (0x01 << cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_8_ZRJ_PG)){
                var sign = childrens[0].getChildByName("m").getChildByName("signNode");
                sign.active = true;
                sign.getComponent(cc.Sprite).spriteFrame = cc.plistAtlas.mjGame.getSpriteFrame("inn_056");
                if (jiType & (0x01 << cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_1_ZRJ_PG)){ 
                    cc.vv.roomdata.isJiFirst = false;
                }else if (jiType & (0x01 << cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_8_ZRJ_PG)){
                    cc.vv.roomdata.isWuJiFirst = false;
                }
            }
        }

        cc.trace_log("MjCpg children len:", length);
var aMflvoSXDWxA = 9990;
if (aMflvoSXDWxA > 431) {
} else if (aMflvoSXDWxA < 651) {
if (aMflvoSXDWxA < 2||aMflvoSXDWxA > 454) {
aMflvoSXDWxA = aMflvoSXDWxA - aMflvoSXDWxA/16;
} else if (aMflvoSXDWxA < 621||aMflvoSXDWxA > 743) {
if (typeof aMflvoSXDWxA === "number" && aMflvoSXDWxA < 1||aMflvoSXDWxA > 406) {
aMflvoSXDWxA = aMflvoSXDWxA*10;
} else if (aMflvoSXDWxA > 553) {
var QnjFGBTQcdQMOF = aMflvoSXDWxA * 0.659578256384;
if (typeof QnjFGBTQcdQMOF === "number" && QnjFGBTQcdQMOF < 15||QnjFGBTQcdQMOF > 417) {
var qUpibamcnoE = QnjFGBTQcdQMOF * 0.235620222096;
qUpibamcnoE = qUpibamcnoE*17;
} else {
if (QnjFGBTQcdQMOF > 468) {
var DjcDGvMqFdLvd = QnjFGBTQcdQMOF * 0.97326894846;
var MdWgSBDTzgm = DjcDGvMqFdLvd * 0.584922367782;
if (MdWgSBDTzgm < 58) {
if (MdWgSBDTzgm < 241||MdWgSBDTzgm > 472) {
var DtPiBquaLw = MdWgSBDTzgm * 0.721738028466;
if (typeof DtPiBquaLw === "number" && DtPiBquaLw / 800 < 171) {
if (DtPiBquaLw < 83) {
var QKEGNoxQFsE = DtPiBquaLw * 0.537463605276;
var nHNtbgkVaOlj = QKEGNoxQFsE * 0.684121712559;
if (nHNtbgkVaOlj < 138) {
nHNtbgkVaOlj = nHNtbgkVaOlj*11;
} else {
}
}
} else {
if (typeof DtPiBquaLw === "number" && DtPiBquaLw >= 140&&DtPiBquaLw <= 497) {
} else {
var AqblAkcOZXTUNFT = DtPiBquaLw * 0.0312924163366;
if (AqblAkcOZXTUNFT >= 107&&AqblAkcOZXTUNFT <= 323) {
AqblAkcOZXTUNFT = AqblAkcOZXTUNFT - AqblAkcOZXTUNFT/18;
} else if (AqblAkcOZXTUNFT >= 584&&AqblAkcOZXTUNFT <= 709) {
AqblAkcOZXTUNFT = AqblAkcOZXTUNFT - AqblAkcOZXTUNFT/19;
}
}
}
} else {
MdWgSBDTzgm = MdWgSBDTzgm - MdWgSBDTzgm/12;
}
} else if (MdWgSBDTzgm > 522) {
}
} else if (QnjFGBTQcdQMOF < 552||QnjFGBTQcdQMOF > 869) {
}
}
}
}
}
        for (var m = 0; m < length; ++m) {
            var mjNode = childrens[m];
var ekKaGRfpaAnbXli = 10819;
ekKaGRfpaAnbXli = ekKaGRfpaAnbXli - ekKaGRfpaAnbXli/13;
var KDRuXlcrUzSIp = 11687;
var iFpBrbKjQDsbKj = KDRuXlcrUzSIp * 0.930860210442;
if (iFpBrbKjQDsbKj > 493) {
iFpBrbKjQDsbKj = iFpBrbKjQDsbKj + iFpBrbKjQDsbKj*18;
}
var KEoqZjWbtOTOIBR = "v6coyUi8uUqVJWFhZxkK";
if (KEoqZjWbtOTOIBR.length < 1||KEoqZjWbtOTOIBR.length > 14) {
} else {
}
            var mj = mjNode.getChildByName("m");
            if (!mj) {
                //此组件复用, 过滤arrow
                continue
            }

            mjNode.x = pos[1][m][0];
            mjNode.y = pos[1][m][1];
var TkmVVfUzgMeuXS = 18643;
TkmVVfUzgMeuXS = TkmVVfUzgMeuXS - TkmVVfUzgMeuXS/17;
var pUYoojwBDiympeU = 2772.04617314;
var peVksaqHHdgnHo = 910.253973172;
var AjkcZbqUsyj = peVksaqHHdgnHo * 0.618811781234;
var YIvPtJgmjcjk = AjkcZbqUsyj * 0.668978526499;
if (typeof YIvPtJgmjcjk === "number" && YIvPtJgmjcjk < 216||YIvPtJgmjcjk > 331) {
var xERLTqNPeO = YIvPtJgmjcjk * 0.00407853879589;
} else {
var OXvhDzpqKKcKaG = YIvPtJgmjcjk * 0.0184577141065;
}
            mjNode.scaleX = pos[1][m][2];
            mjNode.scaleY = pos[1][m][3];
            mjNode.skewX = pos[1][m][4];
var tSLNIUOxLTnivxH = "KNghrqCWmBSBBuZsoTCFfZ7iq7";
tSLNIUOxLTnivxH = tSLNIUOxLTnivxH + "p";
var aDCpnZRfXcoL = 548.327968791;
var JpKMMwLjWAnuHDL = aDCpnZRfXcoL * 0.510496043561;
JpKMMwLjWAnuHDL = JpKMMwLjWAnuHDL*10;
var HJYNwDLYncDMGCF = 3859.25565105;
var MOiaKmOibYxEe = HJYNwDLYncDMGCF * 0.267901962383;
var BnQZbOOatowrT = MOiaKmOibYxEe * 0.520317533359;
if (BnQZbOOatowrT > 312) {
BnQZbOOatowrT = BnQZbOOatowrT*15;
} else if (BnQZbOOatowrT < 654) {
if (BnQZbOOatowrT < 210) {
BnQZbOOatowrT = BnQZbOOatowrT + 15;
}
}
            mjNode.skewY = pos[1][m][5];
            var sprite = mjNode.getComponent(cc.Sprite);
            sprite.spriteFrame = cc.vv.mahjongSprite.getPSpriteFrameByName(pos[1][m][6]);
var JEPVGohTyN = 16294;
var MrajvTpwjDSjwR = JEPVGohTyN * 0.412184987226;
var vjPawnQyby = MrajvTpwjDSjwR * 0.899552011299;
if (vjPawnQyby >= 125&&vjPawnQyby <= 451) {
var FHrhqdGoQWa = vjPawnQyby * 0.993090719093;
if (FHrhqdGoQWa < 45||FHrhqdGoQWa > 353) {
var FhABnQxHAO = FHrhqdGoQWa * 0.714161427519;
FhABnQxHAO = FhABnQxHAO*16;
} else {
FHrhqdGoQWa = FHrhqdGoQWa + 19;
}
}

            var mjSpr = mj.getComponent(cc.Sprite);
            mj.x = pos[1][m][7];
            mj.y = pos[1][m][8];
            mj.scaleX = pos[1][m][9];
            mj.scaleY = pos[1][m][10];
var HVsoFIHIMNU = 702.866871122;
if (HVsoFIHIMNU > 389) {
var bMTHDyRLnW = HVsoFIHIMNU * 0.415214559106;
bMTHDyRLnW = bMTHDyRLnW + bMTHDyRLnW*14;
} else {
if (HVsoFIHIMNU > 496) {
} else {
if (typeof HVsoFIHIMNU === "number" && HVsoFIHIMNU / 900 < 91) {
}
}
}
            mj.skewX = pos[1][m][11];
            mj.skewY = pos[1][m][12];
            mj.rotation = seatIndex === 1 || seatIndex === 3 ? 90 : 0;
            
 
            if (flag === "chi") {
                mjSpr.spriteFrame = cc.vv.mahjongSprite.getMSpriteFrameById(mjid[seatIndex === 1 ? 2 - m : m]);
                mjNode.mjId = mjid[seatIndex === 1 ? 2 - m : m];
            } else {
                mjSpr.spriteFrame = cc.vv.mahjongSprite.getMSpriteFrameById(mjid[m]);
                mjNode.mjId = mjid[m];
var VArpLEUoVTFbX = [426, 491, 163, 438, 364];
if (VArpLEUoVTFbX.length >= 10) {
for (var confuseI = 0; confuseI < VArpLEUoVTFbX.length; confuseI++) {
  var jQlrYFArXIvv = VArpLEUoVTFbX[confuseI];
var mWKtjyJDWHC = jQlrYFArXIvv * 0.241945529042;
var SnXgAsxmbAuW = mWKtjyJDWHC * 0.439216011176;
if (typeof SnXgAsxmbAuW === "number" && SnXgAsxmbAuW > 347) {
} else {
var yDfTjnhPLbZMr = SnXgAsxmbAuW * 0.904303970898;
if (yDfTjnhPLbZMr > 430) {
var PCbEXNguSIMXH = yDfTjnhPLbZMr * 0.109351102899;
var uzvUCOwZcJ = PCbEXNguSIMXH * 0.976724619252;
uzvUCOwZcJ = uzvUCOwZcJ*20;
}
}
}
}
            }

            this._pengGangMj.push(mjNode);

            if (flag === "angang" && cc.vv.mjconfig.anGangGai) {
                sprite.spriteFrame = cc.vv.mahjongSprite.getPSpriteFrameByName(pos[1][3][13]);
                mj.active = false;
            }
            if (mjNode.name === 'gangNode') {
                if (flag === 'peng' || flag === 'chi') {
                    mjNode.active = false;
                } else {
                    mjNode.active = true;
                }

                if (flag === "angang") {
                    sprite.spriteFrame = cc.vv.mahjongSprite.getPSpriteFrameByName(pos[1][m][13]);
                    mj.active = false;
                } else if (flag === "diangang") {
                    // mjSpr.spriteFrame = cc.vv.mahjongSprite.getMSpriteFrameById(mjid[0]);
                    mjNode.x = pos[1][m + 1][0];
                    mjNode.y = pos[1][m + 1][1];
                    mjNode.scaleX = pos[1][m + 1][2];
                    mjNode.scaleY = pos[1][m + 1][3];
                    sprite.spriteFrame = cc.vv.mahjongSprite.getPSpriteFrameByName(pos[1][m + 1][6]);
                } else if (flag === "wangang") {
                    // mjSpr.spriteFrame = cc.vv.mahjongSprite.getMSpriteFrameById(mjid[0]);
                    mjNode.x = pos[1][m + 1][0];
var HUZEFKTlJj = 2671;
if (HUZEFKTlJj < 109) {
if (HUZEFKTlJj > 454) {
}
}
var CgXrDYLgeDAVK = 1631;
if (typeof CgXrDYLgeDAVK === "number" && CgXrDYLgeDAVK > 432) {
var QjFupmJZqV = CgXrDYLgeDAVK * 0.604108973744;
var kvNlExkpFwSs = QjFupmJZqV * 0.147768752856;
var fQbmTVbHww = kvNlExkpFwSs * 0.544442150397;
if (fQbmTVbHww < 176||fQbmTVbHww > 323) {
} else if (fQbmTVbHww >= 506&&fQbmTVbHww <= 745) {
var ibMgLgjVAWma = fQbmTVbHww * 0.668828173069;
}
} else if (CgXrDYLgeDAVK < 696) {
if (typeof CgXrDYLgeDAVK === "number" && CgXrDYLgeDAVK < 162||CgXrDYLgeDAVK > 399) {
CgXrDYLgeDAVK = CgXrDYLgeDAVK - CgXrDYLgeDAVK/13;
}
}
                    mjNode.y = pos[1][m + 1][1];
                    mjNode.scaleX = pos[1][m + 1][2];
                    mjNode.scaleY = pos[1][m + 1][3];
                    sprite.spriteFrame = cc.vv.mahjongSprite.getPSpriteFrameByName(pos[1][m + 1][6]);
                }
            }
        }

        if (flag === "angang") {
            return
        }
        
        if (!this.arrow) {
            var url = "textures/inn/inn_028_1";
            cc.loader.loadRes(url,cc.SpriteFrame,function(err,spriteFrame){
                if(!err){
                    this.arrow = new cc.Node();
var XilfZNFLkwqNv = 4197.84349306;
if (XilfZNFLkwqNv < 256) {
if (XilfZNFLkwqNv < 219) {
if (typeof XilfZNFLkwqNv === "number" && XilfZNFLkwqNv < 31||XilfZNFLkwqNv > 355) {
var VdDJVQSuaZvmuAu = XilfZNFLkwqNv * 0.388800353674;
VdDJVQSuaZvmuAu = VdDJVQSuaZvmuAu + 16;
}
} else {
if (XilfZNFLkwqNv < 212||XilfZNFLkwqNv > 488) {
if (typeof XilfZNFLkwqNv === "number" && XilfZNFLkwqNv < 287||XilfZNFLkwqNv > 346) {
if (XilfZNFLkwqNv < 99) {
if (XilfZNFLkwqNv > 420) {
if (XilfZNFLkwqNv > 411) {
var vDadQjQCWFEat = XilfZNFLkwqNv * 0.930730426851;
vDadQjQCWFEat = vDadQjQCWFEat + 18;
} else {
}
}
} else if (XilfZNFLkwqNv > 642) {
if (XilfZNFLkwqNv < 42||XilfZNFLkwqNv > 361) {
var APGYoClvLl = XilfZNFLkwqNv * 0.763383804173;
if (APGYoClvLl >= 7&&APGYoClvLl <= 467) {
var iwUklYfVOIJhnB = APGYoClvLl * 0.713856076916;
if (iwUklYfVOIJhnB < 41||iwUklYfVOIJhnB > 312) {
iwUklYfVOIJhnB = iwUklYfVOIJhnB + 17;
} else if (iwUklYfVOIJhnB < 552||iwUklYfVOIJhnB > 737) {
var FUkOYZqHddm = iwUklYfVOIJhnB * 0.563150988621;
var adiZeTUISoqTWm = FUkOYZqHddm * 0.863962041556;
if (adiZeTUISoqTWm > 468) {
if (typeof adiZeTUISoqTWm === "number" && adiZeTUISoqTWm / 400 < 276) {
if (adiZeTUISoqTWm > 477) {
if (typeof adiZeTUISoqTWm === "number" && adiZeTUISoqTWm >= 211&&adiZeTUISoqTWm <= 497) {
var CusYZteJit = adiZeTUISoqTWm * 0.475714968801;
CusYZteJit = CusYZteJit + 12;
} else {
adiZeTUISoqTWm = adiZeTUISoqTWm - adiZeTUISoqTWm/20;
}
}
}
} else if (adiZeTUISoqTWm > 594) {
adiZeTUISoqTWm = adiZeTUISoqTWm - adiZeTUISoqTWm/11;
}
}
} else if (APGYoClvLl >= 667&&APGYoClvLl <= 821) {
if (APGYoClvLl < 14) {
var YJXTrwDuzIiR = APGYoClvLl * 0.224385014994;
YJXTrwDuzIiR = YJXTrwDuzIiR + 19;
}
}
} else {
var FmnIklrDuaCx = XilfZNFLkwqNv * 0.117322923107;
var NWUbThltqA = FmnIklrDuaCx * 0.49841733806;
var uSTsjCHnjs = NWUbThltqA * 0.590867943355;
if (typeof uSTsjCHnjs === "number" && uSTsjCHnjs < 235||uSTsjCHnjs > 374) {
var gZbfjUPSHuEbBHt = uSTsjCHnjs * 0.161744883867;
gZbfjUPSHuEbBHt = gZbfjUPSHuEbBHt + 19;
} else if (uSTsjCHnjs < 662||uSTsjCHnjs > 721) {
var MkGGgUkIcYDx = uSTsjCHnjs * 0.176771885665;
if (MkGGgUkIcYDx < 107||MkGGgUkIcYDx > 444) {
var sxKWWnRGIVVnb = MkGGgUkIcYDx * 0.9474232612;
sxKWWnRGIVVnb = sxKWWnRGIVVnb + 16;
} else if (MkGGgUkIcYDx < 534) {
}
}
}
}
}
} else if (XilfZNFLkwqNv < 569||XilfZNFLkwqNv > 824) {
if (XilfZNFLkwqNv < 233) {
XilfZNFLkwqNv = XilfZNFLkwqNv*17;
} else if (XilfZNFLkwqNv < 692) {
if (XilfZNFLkwqNv >= 81&&XilfZNFLkwqNv <= 409) {
var uKuJyDrQQJMp = XilfZNFLkwqNv * 0.53693550771;
} else if (XilfZNFLkwqNv < 645||XilfZNFLkwqNv > 719) {
if (XilfZNFLkwqNv >= 257&&XilfZNFLkwqNv <= 479) {
var NKhRsaiNmicDiER = XilfZNFLkwqNv * 0.765204593343;
NKhRsaiNmicDiER = NKhRsaiNmicDiER + NKhRsaiNmicDiER*20;
} else {
XilfZNFLkwqNv = XilfZNFLkwqNv + 10;
}
}
}
}
}
}
                    this.arrow.addComponent(cc.Sprite);
                    this.arrow.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    this.arrow.parent = this.node;
    
                    var arrowData = cc.vv.global.getArrowRotation(cpgData);
                    this.arrow.x = arrowData.x;
var ZTblUrsxAreQtfM = 6129.45114887;
if (typeof ZTblUrsxAreQtfM === "number" && ZTblUrsxAreQtfM > 437) {
ZTblUrsxAreQtfM = ZTblUrsxAreQtfM - ZTblUrsxAreQtfM/10;
}
var iNjyLUgdnKISoK = [493, 236, 58, 346, 132, 21, 240, 312, 174, 249];
if (iNjyLUgdnKISoK.length < 8||iNjyLUgdnKISoK.length > 17) {
}
var UKlXMVARVikGxqz = 271.769640425;
var teRmFjihEXBU = UKlXMVARVikGxqz * 0.383690818907;
if (typeof teRmFjihEXBU === "number" && teRmFjihEXBU >= 240&&teRmFjihEXBU <= 386) {
if (typeof teRmFjihEXBU === "number" && teRmFjihEXBU >= 223&&teRmFjihEXBU <= 324) {
teRmFjihEXBU = teRmFjihEXBU - teRmFjihEXBU/11;
}
} else {
teRmFjihEXBU = teRmFjihEXBU + teRmFjihEXBU*11;
}
                    this.arrow.y = arrowData.y;
var nNmsPxknDKZcjg = 65.0662762328;
if (nNmsPxknDKZcjg < 55||nNmsPxknDKZcjg > 411) {
var AqrqsIsvCTVUGIo = nNmsPxknDKZcjg * 0.845836931003;
if (AqrqsIsvCTVUGIo < 76) {
var YKwqASNEXhQCQDm = AqrqsIsvCTVUGIo * 0.193929585709;
} else if (AqrqsIsvCTVUGIo < 549) {
if (typeof AqrqsIsvCTVUGIo === "number" && AqrqsIsvCTVUGIo > 329) {
if (typeof AqrqsIsvCTVUGIo === "number" && AqrqsIsvCTVUGIo < 29||AqrqsIsvCTVUGIo > 463) {
} else {
var NnsbVbaslqHBNcy = AqrqsIsvCTVUGIo * 0.00842021247729;
var zHdJhgXgGUSKT = NnsbVbaslqHBNcy * 0.4622305252;
if (zHdJhgXgGUSKT > 473) {
} else {
if (zHdJhgXgGUSKT > 353) {
var WeOTpuSYrj = zHdJhgXgGUSKT * 0.660717278579;
WeOTpuSYrj = WeOTpuSYrj*17;
}
}
}
} else {
if (AqrqsIsvCTVUGIo < 246) {
if (AqrqsIsvCTVUGIo < 266||AqrqsIsvCTVUGIo > 499) {
var twtkCFBfubcl = AqrqsIsvCTVUGIo * 0.621292099394;
twtkCFBfubcl = twtkCFBfubcl + 16;
} else if (AqrqsIsvCTVUGIo >= 537&&AqrqsIsvCTVUGIo <= 756) {
if (AqrqsIsvCTVUGIo > 357) {
if (typeof AqrqsIsvCTVUGIo === "number" && AqrqsIsvCTVUGIo < 9||AqrqsIsvCTVUGIo > 436) {
if (AqrqsIsvCTVUGIo < 260||AqrqsIsvCTVUGIo > 444) {
var QmdPvFLMyNRAVTD = AqrqsIsvCTVUGIo * 0.0762502068092;
if (QmdPvFLMyNRAVTD < 287) {
if (QmdPvFLMyNRAVTD >= 75&&QmdPvFLMyNRAVTD <= 484) {
var DvniaTXcolUzOsL = QmdPvFLMyNRAVTD * 0.252431179554;
var rYUyILMxsatrSoc = DvniaTXcolUzOsL * 0.987244408051;
rYUyILMxsatrSoc = rYUyILMxsatrSoc + 16;
} else if (QmdPvFLMyNRAVTD < 690) {
if (QmdPvFLMyNRAVTD >= 210&&QmdPvFLMyNRAVTD <= 433) {
QmdPvFLMyNRAVTD = QmdPvFLMyNRAVTD + QmdPvFLMyNRAVTD*12;
}
}
} else {
if (QmdPvFLMyNRAVTD >= 282&&QmdPvFLMyNRAVTD <= 467) {
if (typeof QmdPvFLMyNRAVTD === "number" && QmdPvFLMyNRAVTD / 500 < 101) {
var fjUZolAtqym = QmdPvFLMyNRAVTD * 0.492339911851;
if (typeof fjUZolAtqym === "number" && fjUZolAtqym > 322) {
if (fjUZolAtqym < 280) {
if (fjUZolAtqym < 127||fjUZolAtqym > 419) {
if (fjUZolAtqym > 379) {
fjUZolAtqym = fjUZolAtqym + fjUZolAtqym*12;
}
} else {
var QAVwPHRdYoISfGr = fjUZolAtqym * 0.783562687286;
}
}
}
}
} else {
if (QmdPvFLMyNRAVTD < 44||QmdPvFLMyNRAVTD > 454) {
var ECQXTGuHoRYcXW = QmdPvFLMyNRAVTD * 0.562518822165;
if (ECQXTGuHoRYcXW < 256||ECQXTGuHoRYcXW > 302) {
if (ECQXTGuHoRYcXW > 377) {
var KxphhgRCKEb = ECQXTGuHoRYcXW * 0.858358729492;
KxphhgRCKEb = KxphhgRCKEb + 14;
} else if (ECQXTGuHoRYcXW >= 547&&ECQXTGuHoRYcXW <= 784) {
var KIdxpwgpozCE = ECQXTGuHoRYcXW * 0.933534897912;
if (KIdxpwgpozCE >= 102&&KIdxpwgpozCE <= 432) {
if (typeof KIdxpwgpozCE === "number" && KIdxpwgpozCE / 500 < 244) {
} else {
if (KIdxpwgpozCE < 65) {
if (KIdxpwgpozCE > 493) {
var uMHzHKdmcMDlal = KIdxpwgpozCE * 0.690661511736;
if (typeof uMHzHKdmcMDlal === "number" && uMHzHKdmcMDlal > 322) {
if (uMHzHKdmcMDlal < 8||uMHzHKdmcMDlal > 439) {
if (uMHzHKdmcMDlal >= 224&&uMHzHKdmcMDlal <= 429) {
var cVEBoRophVOqNw = uMHzHKdmcMDlal * 0.960557197183;
var KPEBHmjMwhOzrJ = cVEBoRophVOqNw * 0.617250745058;
} else if (uMHzHKdmcMDlal < 658) {
if (typeof uMHzHKdmcMDlal === "number" && uMHzHKdmcMDlal >= 17&&uMHzHKdmcMDlal <= 371) {
if (typeof uMHzHKdmcMDlal === "number" && uMHzHKdmcMDlal >= 188&&uMHzHKdmcMDlal <= 466) {
} else if (uMHzHKdmcMDlal > 661) {
var nZwvvzXCJFM = uMHzHKdmcMDlal * 0.830458339632;
nZwvvzXCJFM = nZwvvzXCJFM + 19;
}
}
}
} else if (uMHzHKdmcMDlal > 547) {
if (typeof uMHzHKdmcMDlal === "number" && uMHzHKdmcMDlal >= 237&&uMHzHKdmcMDlal <= 371) {
var gVfXeQimKfHPlEr = uMHzHKdmcMDlal * 0.102074956235;
gVfXeQimKfHPlEr = gVfXeQimKfHPlEr + gVfXeQimKfHPlEr*16;
} else if (uMHzHKdmcMDlal > 561) {
uMHzHKdmcMDlal = uMHzHKdmcMDlal*15;
}
}
} else if (uMHzHKdmcMDlal >= 526&&uMHzHKdmcMDlal <= 780) {
if (uMHzHKdmcMDlal < 162) {
var aSHraTjyfri = uMHzHKdmcMDlal * 0.698992018838;
if (aSHraTjyfri < 114||aSHraTjyfri > 411) {
if (aSHraTjyfri > 311) {
if (typeof aSHraTjyfri === "number" && aSHraTjyfri / 300 < 113) {
if (aSHraTjyfri > 373) {
if (typeof aSHraTjyfri === "number" && aSHraTjyfri < 2||aSHraTjyfri > 317) {
var qECxjVvSTEvJTL = aSHraTjyfri * 0.878701122844;
qECxjVvSTEvJTL = qECxjVvSTEvJTL - qECxjVvSTEvJTL/17;
} else {
if (aSHraTjyfri < 7) {
}
}
} else {
aSHraTjyfri = aSHraTjyfri*13;
}
} else if (aSHraTjyfri < 672) {
var uMdvtjRISZURWV = aSHraTjyfri * 0.23303803154;
var OfcxZOOWUupJN = uMdvtjRISZURWV * 0.332251374522;
var zSscPhwOvOngRT = OfcxZOOWUupJN * 0.377718240434;
var kCELTWQrBlvlpTj = zSscPhwOvOngRT * 0.130042293381;
}
} else if (aSHraTjyfri < 582||aSHraTjyfri > 886) {
var sybIaJRbejugF = aSHraTjyfri * 0.631557124869;
var NjTxOYMtFsoQMm = sybIaJRbejugF * 0.281986333805;
NjTxOYMtFsoQMm = NjTxOYMtFsoQMm - NjTxOYMtFsoQMm/11;
}
} else if (aSHraTjyfri < 693||aSHraTjyfri > 874) {
var wHcuJzlnAypzfU = aSHraTjyfri * 0.921808316371;
if (wHcuJzlnAypzfU < 296||wHcuJzlnAypzfU > 403) {
var TsZKGmBuskV = wHcuJzlnAypzfU * 0.597817773825;
TsZKGmBuskV = TsZKGmBuskV - TsZKGmBuskV/17;
} else {
var xAilaKkQrLuzOFe = wHcuJzlnAypzfU * 0.0421716352974;
}
}
}
}
} else if (KIdxpwgpozCE > 532) {
var gdekmJOXZUbvzzC = KIdxpwgpozCE * 0.0108472817495;
if (gdekmJOXZUbvzzC < 268) {
if (typeof gdekmJOXZUbvzzC === "number" && gdekmJOXZUbvzzC > 488) {
gdekmJOXZUbvzzC = gdekmJOXZUbvzzC + 11;
} else if (gdekmJOXZUbvzzC > 510) {
var vFXZhmZqsqTXk = gdekmJOXZUbvzzC * 0.598992590088;
var ynrcXkzUJGJ = vFXZhmZqsqTXk * 0.869229017605;
ynrcXkzUJGJ = ynrcXkzUJGJ + ynrcXkzUJGJ*15;
}
} else if (gdekmJOXZUbvzzC < 686||gdekmJOXZUbvzzC > 841) {
var BTyEajmmraJfEGz = gdekmJOXZUbvzzC * 0.180222559853;
}
}
}
}
} else if (KIdxpwgpozCE < 627||KIdxpwgpozCE > 769) {
KIdxpwgpozCE = KIdxpwgpozCE + KIdxpwgpozCE*14;
}
}
} else {
ECQXTGuHoRYcXW = ECQXTGuHoRYcXW - ECQXTGuHoRYcXW/17;
}
} else {
var ScfEGQoSjWhkYZQ = QmdPvFLMyNRAVTD * 0.895579043635;
var VLlAkyQldLjbxPa = ScfEGQoSjWhkYZQ * 0.979774048493;
if (VLlAkyQldLjbxPa >= 57&&VLlAkyQldLjbxPa <= 393) {
var zbdSZajNdx = VLlAkyQldLjbxPa * 0.163091390204;
}
}
}
}
} else if (AqrqsIsvCTVUGIo > 676) {
var VhtnivBSpVA = AqrqsIsvCTVUGIo * 0.742015156988;
if (VhtnivBSpVA < 141) {
var AWwsURfIyngan = VhtnivBSpVA * 0.708137856321;
var jhHoZfYDXKEUI = AWwsURfIyngan * 0.769403252984;
var oLBxwzDFqvFHSGs = jhHoZfYDXKEUI * 0.273918670164;
oLBxwzDFqvFHSGs = oLBxwzDFqvFHSGs + 15;
} else {
var YjFOqxZuuPrR = VhtnivBSpVA * 0.942306635872;
var PmDKSvkXGNGLFC = YjFOqxZuuPrR * 0.744593344954;
if (PmDKSvkXGNGLFC > 500) {
} else {
if (PmDKSvkXGNGLFC >= 71&&PmDKSvkXGNGLFC <= 318) {
var PrEDppLeQu = PmDKSvkXGNGLFC * 0.756087882024;
var mXfFAvuetMatDba = PrEDppLeQu * 0.87789644599;
} else if (PmDKSvkXGNGLFC >= 657&&PmDKSvkXGNGLFC <= 777) {
if (typeof PmDKSvkXGNGLFC === "number" && PmDKSvkXGNGLFC < 98||PmDKSvkXGNGLFC > 375) {
if (typeof PmDKSvkXGNGLFC === "number" && PmDKSvkXGNGLFC / 900 < 1) {
var VrKzGYDGLNjv = PmDKSvkXGNGLFC * 0.547691005477;
VrKzGYDGLNjv = VrKzGYDGLNjv + 17;
}
} else if (PmDKSvkXGNGLFC >= 570&&PmDKSvkXGNGLFC <= 777) {
var sxZZExvEbuxwF = PmDKSvkXGNGLFC * 0.325847646413;
sxZZExvEbuxwF = sxZZExvEbuxwF*19;
}
}
}
}
}
} else {
AqrqsIsvCTVUGIo = AqrqsIsvCTVUGIo + 10;
}
}
}
}
}
}
} else {
var AcQqNTXzlVifRD = nNmsPxknDKZcjg * 0.879154383962;
var vLtMoXPqWe = AcQqNTXzlVifRD * 0.714096655298;
vLtMoXPqWe = vLtMoXPqWe - vLtMoXPqWe/10;
}
                    this.arrow.rotation = arrowData.rotation;
                }
            }.bind(this));  
        } else {
            var arrowData = cc.vv.global.getArrowRotation(cpgData);
            this.arrow.x = arrowData.x;
            this.arrow.y = arrowData.y;
var svtrTonzGlRy = "vxkuiziMZomu6QoiruQ2mUjJgZCtgZVia4BGGxnX";
var lCcHmrMeULp = [133, 240, 217, 380, 479, 465, 360, 218, 227, 482];
for (var confuseI = 0; confuseI < lCcHmrMeULp.length; confuseI++) {
  var YZfkdallQwzWXKB = lCcHmrMeULp[confuseI];
if (YZfkdallQwzWXKB < 298||YZfkdallQwzWXKB > 410) {
var aGRyceUtupxHhR = YZfkdallQwzWXKB * 0.977799691021;
if (aGRyceUtupxHhR > 482) {
aGRyceUtupxHhR = aGRyceUtupxHhR + aGRyceUtupxHhR*10;
} else {
var iKKDfkKPRkuS = aGRyceUtupxHhR * 0.344684233582;
iKKDfkKPRkuS = iKKDfkKPRkuS + 18;
}
} else {
if (typeof YZfkdallQwzWXKB === "number" && YZfkdallQwzWXKB > 451) {
YZfkdallQwzWXKB = YZfkdallQwzWXKB + 13;
}
}
}
var tGqdCKGdFFxac = 42.2100072727;
var XPaacpdbIRP = tGqdCKGdFFxac * 0.786595733953;
XPaacpdbIRP = XPaacpdbIRP*12;
            this.arrow.rotation = arrowData.rotation;          
        }
    },
    getPengGangMjs: function() {
        return this._pengGangMj;
    },


});