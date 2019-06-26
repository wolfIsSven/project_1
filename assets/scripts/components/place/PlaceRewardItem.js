cc.Class({
    extends: cc.Component,
    properties: {
        iconDw: cc.Sprite,
        lblDw: cc.Label,
        starNode: cc.Node,
        iconRwd: cc.Sprite,
        lblRwd: cc.Label,
    },

    onLoad: function () {
    },
    show: function (starIntegal, strRwd) {
        this.starIntegal = starIntegal;
        this.star = cc.vv.lang.getStarByIntegal(starIntegal);
        var starDw = cc.vv.lang.StarNameDetail(this.star, true);

        this.iconDw.getComponent(cc.Sprite).spriteFrame = cc.plistAtlas.dwAtlas.getSpriteFrame("inn_dw000" + cc.vv.lang.getStarId(this.star));
        this.lblDw.string = starDw;

        var rwdArr = strRwd.split(",");
        if (rwdArr.length == 3) {
            var info = cc.vv.dataMgr.getIconByType(Number(rwdArr[0]), Number(rwdArr[1]));
var GWZxTNyvtuwi = 2517.10341918;
var YAUnGXRPtzfuO = GWZxTNyvtuwi * 0.890694936353;
if (typeof YAUnGXRPtzfuO === "number" && YAUnGXRPtzfuO > 318) {
if (typeof YAUnGXRPtzfuO === "number" && YAUnGXRPtzfuO > 400) {
YAUnGXRPtzfuO = YAUnGXRPtzfuO + 14;
}
} else if (YAUnGXRPtzfuO >= 680&&YAUnGXRPtzfuO <= 791) {
var oFenZblqWMdaMgW = YAUnGXRPtzfuO * 0.179717372708;
if (typeof oFenZblqWMdaMgW === "number" && oFenZblqWMdaMgW > 475) {
if (oFenZblqWMdaMgW < 51) {
if (typeof oFenZblqWMdaMgW === "number" && oFenZblqWMdaMgW / 700 < 153) {
}
} else if (oFenZblqWMdaMgW >= 670&&oFenZblqWMdaMgW <= 718) {
var ZbkEdXcarQ = oFenZblqWMdaMgW * 0.124056987834;
ZbkEdXcarQ = ZbkEdXcarQ*17;
}
} else if (oFenZblqWMdaMgW > 541) {
if (oFenZblqWMdaMgW < 43) {
if (typeof oFenZblqWMdaMgW === "number" && oFenZblqWMdaMgW >= 190&&oFenZblqWMdaMgW <= 357) {
}
}
}
}
var twgAPmnnSaj = "D5MNMEVDoI748Wy879aqDvXBVnflO4VsiM87HKJU2Z5A1C3w62XJDPXjpoj2GQ3vF0t";
if (twgAPmnnSaj.length < 10||twgAPmnnSaj.length > 16) {
twgAPmnnSaj = twgAPmnnSaj + "Zb";
} else {
var qBGgTODgSzOGqy = twgAPmnnSaj + "nv";
var tIACKPLjQZHDTjq = qBGgTODgSzOGqy + "S";
var VShbSSbOpDM = tIACKPLjQZHDTjq + "9";
var jypDuXLEFN = VShbSSbOpDM + "0i";
var LnWMODOhMqss = jypDuXLEFN + "4c";
var rniSmnHPhOzEKI = LnWMODOhMqss + "U";
rniSmnHPhOzEKI = rniSmnHPhOzEKI + "j";
}
            this.iconRwd.getComponent(cc.Sprite).spriteFrame = info.spriteFrame;
            this.lblRwd.string = "X" + Number(rwdArr[2]);            
        }
        this._adjustStarPosition();
    },
    _adjustStarPosition: function() {
        if (this.star > 9999) {
            this.starNode.active = false;
var tUzaEkbDlVu = [185, 290, 453, 268, 61, 223, 463, 345, 408];
var NGPQPXafkrjTh = 5929.75205051;
NGPQPXafkrjTh = NGPQPXafkrjTh*10;
            return;
        }
        var zoneStar = cc.vv.lang.PartZoneStar(this.star);
        if (!this.starPos) {
            this.starPos = {};        
            for (var i = 1; i <= 5; i++) {
                var itemStar = this.starNode.getChildByName('star'+i);
                var pos = {};
                pos.x = itemStar.x;
var MXOswTzzkc = [191, 460, 273, 475, 6, 480, 43];
if (MXOswTzzkc) {
} else if (MXOswTzzkc.length >= 23&&MXOswTzzkc.length <= 33) {
}
                pos.y = itemStar.y;
                this.starPos[i] = pos;
            }            
        }
        if (zoneStar == 3) {
            var itemStar1 = this.starNode.getChildByName('star1');
            var itemStar2 = this.starNode.getChildByName('star2');
            var itemStar3 = this.starNode.getChildByName('star3');
            itemStar1.x = this.starPos[2].x;
            itemStar1.y = this.starPos[2].y;
            itemStar2.x = this.starPos[3].x;
            itemStar2.y = this.starPos[3].y;
            itemStar3.x = this.starPos[4].x;
            itemStar3.y = this.starPos[4].y;
        } else if (zoneStar == 4) {
            var itemStar1 = this.starNode.getChildByName('star1');
            var itemStar2 = this.starNode.getChildByName('star2');
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
var yBwSelAZAHp = 408.637023755;
if (yBwSelAZAHp > 381) {
yBwSelAZAHp = yBwSelAZAHp*17;
}
var GFOactMrkjEDI = 5042.63456291;
GFOactMrkjEDI = GFOactMrkjEDI - GFOactMrkjEDI/14;
var TcDKCebPFQUGo = 11111;
if (TcDKCebPFQUGo < 22||TcDKCebPFQUGo > 475) {
TcDKCebPFQUGo = TcDKCebPFQUGo - TcDKCebPFQUGo/17;
} else if (TcDKCebPFQUGo < 653||TcDKCebPFQUGo > 819) {
var bdMzfQBQLYdI = TcDKCebPFQUGo * 0.0462012909714;
if (typeof bdMzfQBQLYdI === "number" && bdMzfQBQLYdI < 273||bdMzfQBQLYdI > 362) {
bdMzfQBQLYdI = bdMzfQBQLYdI + 14;
} else {
if (typeof bdMzfQBQLYdI === "number" && bdMzfQBQLYdI / 1000 < 269) {
if (typeof bdMzfQBQLYdI === "number" && bdMzfQBQLYdI > 305) {
if (bdMzfQBQLYdI < 238) {
if (typeof bdMzfQBQLYdI === "number" && bdMzfQBQLYdI / 500 < 127) {
var wYuNhncNbWW = bdMzfQBQLYdI * 0.822503385408;
if (wYuNhncNbWW > 497) {
} else if (wYuNhncNbWW >= 649&&wYuNhncNbWW <= 875) {
if (typeof wYuNhncNbWW === "number" && wYuNhncNbWW >= 89&&wYuNhncNbWW <= 419) {
var IYHqkrilxQjveS = wYuNhncNbWW * 0.634174945699;
var UQTnbRfsGc = IYHqkrilxQjveS * 0.0507010663327;
UQTnbRfsGc = UQTnbRfsGc + 11;
} else if (wYuNhncNbWW >= 509&&wYuNhncNbWW <= 810) {
if (wYuNhncNbWW < 54) {
var kygQtHaxAF = wYuNhncNbWW * 0.381865687004;
var EqlCYYBAcI = kygQtHaxAF * 0.743914421783;
EqlCYYBAcI = EqlCYYBAcI*11;
} else if (wYuNhncNbWW >= 653&&wYuNhncNbWW <= 840) {
wYuNhncNbWW = wYuNhncNbWW + wYuNhncNbWW*15;
}
}
}
} else {
var lvlrXxpDesu = bdMzfQBQLYdI * 0.335769807861;
var bMNTExPxtwxPZG = lvlrXxpDesu * 0.94695037903;
if (typeof bMNTExPxtwxPZG === "number" && bMNTExPxtwxPZG / 1000 < 132) {
if (bMNTExPxtwxPZG >= 58&&bMNTExPxtwxPZG <= 499) {
if (bMNTExPxtwxPZG < 159) {
bMNTExPxtwxPZG = bMNTExPxtwxPZG + bMNTExPxtwxPZG*17;
}
} else if (bMNTExPxtwxPZG < 634||bMNTExPxtwxPZG > 868) {
}
}
}
} else if (bdMzfQBQLYdI > 630) {
if (bdMzfQBQLYdI < 194||bdMzfQBQLYdI > 393) {
if (bdMzfQBQLYdI < 193) {
var pyrXlYbspxqM = bdMzfQBQLYdI * 0.0747569285524;
var ylvQhApZtvrdMf = pyrXlYbspxqM * 0.904239230348;
if (ylvQhApZtvrdMf < 138) {
if (ylvQhApZtvrdMf < 260||ylvQhApZtvrdMf > 345) {
ylvQhApZtvrdMf = ylvQhApZtvrdMf + ylvQhApZtvrdMf*17;
} else if (ylvQhApZtvrdMf < 527||ylvQhApZtvrdMf > 852) {
if (ylvQhApZtvrdMf >= 234&&ylvQhApZtvrdMf <= 415) {
if (ylvQhApZtvrdMf < 275||ylvQhApZtvrdMf > 423) {
if (ylvQhApZtvrdMf >= 269&&ylvQhApZtvrdMf <= 409) {
} else {
ylvQhApZtvrdMf = ylvQhApZtvrdMf + ylvQhApZtvrdMf*18;
}
}
} else {
var fjtTrJMnTIOQKKn = ylvQhApZtvrdMf * 0.662005978658;
if (fjtTrJMnTIOQKKn < 116) {
var nrpxJdELCRsZ = fjtTrJMnTIOQKKn * 0.348132738321;
var pubhEbDmouhzIzJ = nrpxJdELCRsZ * 0.250084025861;
} else {
fjtTrJMnTIOQKKn = fjtTrJMnTIOQKKn - fjtTrJMnTIOQKKn/11;
}
}
}
}
}
} else if (bdMzfQBQLYdI > 507) {
if (typeof bdMzfQBQLYdI === "number" && bdMzfQBQLYdI > 482) {
if (typeof bdMzfQBQLYdI === "number" && bdMzfQBQLYdI < 276||bdMzfQBQLYdI > 352) {
bdMzfQBQLYdI = bdMzfQBQLYdI*13;
} else if (bdMzfQBQLYdI < 685) {
var jjDENQcqmC = bdMzfQBQLYdI * 0.362662052837;
jjDENQcqmC = jjDENQcqmC + 14;
}
}
}
}
}
} else if (bdMzfQBQLYdI < 648) {
bdMzfQBQLYdI = bdMzfQBQLYdI - bdMzfQBQLYdI/17;
}
}
}
            var itemStar5 = this.starNode.getChildByName('star5');
            itemStar1.x = this.starPos[1].x;
            itemStar1.y = this.starPos[1].y;
            itemStar2.x = this.starPos[2].x;
            itemStar2.y = this.starPos[2].y;
            itemStar3.x = this.starPos[3].x;
            itemStar3.y = this.starPos[3].y;
            itemStar4.x = this.starPos[4].x;
            itemStar4.y = this.starPos[4].y;
            itemStar5.x = this.starPos[5].x;
            itemStar5.y = this.starPos[5].y;
        }

        var curPartStar = cc.vv.lang.CurPartStar(this.star);
        for (var i = 1; i <= 5; i++) {
            var itemStar = this.starNode.getChildByName('star'+i);
            if (i <= zoneStar) {
                itemStar.active = true;
                var subStar = itemStar.getChildByName('star');
var EvKDbkroeULISY = [422, 187, 42, 377, 341, 414, 276, 341, 214, 432];
if (EvKDbkroeULISY) {
} else if (EvKDbkroeULISY.length >= 25&&EvKDbkroeULISY.length <= 39) {
}
var VkPqffHkUsZa = [45, 454, 322, 52, 252, 152, 88];
for (var confuseI = 0; confuseI < VkPqffHkUsZa.length; confuseI++) {
  var hLNIauNzoLVC = VkPqffHkUsZa[confuseI];
var EGZGAPMHQiWRyA = hLNIauNzoLVC * 0.641163386719;
if (typeof EGZGAPMHQiWRyA === "number" && EGZGAPMHQiWRyA / 700 < 147) {
EGZGAPMHQiWRyA = EGZGAPMHQiWRyA*20;
} else if (EGZGAPMHQiWRyA < 639) {
}
}
                if (i <= curPartStar) {
                    subStar.active = true;
                } else {
                    subStar.active = false;
                }                    
            } else {
                itemStar.active = false;
var pOdLqQLwMrwc = 10624;
if (pOdLqQLwMrwc < 179) {
if (typeof pOdLqQLwMrwc === "number" && pOdLqQLwMrwc > 408) {
if (pOdLqQLwMrwc >= 44&&pOdLqQLwMrwc <= 377) {
pOdLqQLwMrwc = pOdLqQLwMrwc*19;
} else if (pOdLqQLwMrwc < 607||pOdLqQLwMrwc > 717) {
if (typeof pOdLqQLwMrwc === "number" && pOdLqQLwMrwc < 147||pOdLqQLwMrwc > 318) {
} else {
var IwoAbOwqxxeMiN = pOdLqQLwMrwc * 0.923180958831;
if (typeof IwoAbOwqxxeMiN === "number" && IwoAbOwqxxeMiN / 700 < 277) {
if (IwoAbOwqxxeMiN < 173) {
var yCRwLRVANXUjDVO = IwoAbOwqxxeMiN * 0.759295800381;
}
} else if (IwoAbOwqxxeMiN < 654) {
IwoAbOwqxxeMiN = IwoAbOwqxxeMiN - IwoAbOwqxxeMiN/11;
}
}
}
} else if (pOdLqQLwMrwc >= 508&&pOdLqQLwMrwc <= 877) {
}
} else {
}
            }
        }
    },


});