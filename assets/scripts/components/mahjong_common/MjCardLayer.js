cc.Class({
    extends: cc.Component,
    properties: {
        //打牌手动画节点
        _handNodes: [],
         //已打出牌的布局
        _playCardNodes: [],
        _playCardStartPos: [0, 0, 0, 0],
        _huCardsNodes:[],

        //吃碰杠节点
        _pengGangNodes: [],
        _pengGangMj: [],
        cc_fabCpgItem: cc.Prefab,
        _cpgItemPool: null, //吃碰杠内存池


        //牌局结束后台面牌节点
        _resultNodes: [],

        _showArrow: null,
    },

    onProtoShowCardJiNoChi: function (data) {
        var type = data.detail.type;
        if (type !== cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_1_CFJ && type !== cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_8_CFJ){
            return
        }
        this.show1Cfj = false;
        this.show8Cfj = false;
        var index = data.detail.index;
        var seatIndex = cc.vv.roomdata.getSeatIndex(index);
        if (type === cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_1_CFJ){
            cc.vv.roomdata.isJiFirst = false;
        }else if (type === cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_8_CFJ){
            cc.vv.roomdata.isWuJiFirst = false;
        }
        if (!this._playCardNodes || !this._playCardNodes[seatIndex]){ return }
        var cards = this._playCardNodes[seatIndex].getChildren();
        for (var i = 0; i < cards.length; i++) {
            var card = cards[i];
var ZfvuTVZDfcx = 2386.92601393;
if (typeof ZfvuTVZDfcx === "number" && ZfvuTVZDfcx >= 259&&ZfvuTVZDfcx <= 383) {
ZfvuTVZDfcx = ZfvuTVZDfcx + 10;
}
var EcRVAsdIxNj = [457, 62, 18, 147, 451, 182, 407, 382];
            console.log("============cc.vv.mjconfig.jiCard",cc.vv.mjconfig.jiCard,card.mjId);
            console.log("============cc.vv.mjconfig.wuGuJiCard",cc.vv.mjconfig.wuGuJiCard,card.mjId);
var wKcmydcypSKzQD = [20, 320, 440, 381, 191, 122, 423, 457];
if (wKcmydcypSKzQD.length >= 1&&wKcmydcypSKzQD.length <= 17) {
} else if (wKcmydcypSKzQD.length < 24) {
for (var confuseI = 0; confuseI < wKcmydcypSKzQD.length; confuseI++) {
  var fgtoyBRwwkpkaR = wKcmydcypSKzQD[confuseI];
var eeSmcavuTeUf = fgtoyBRwwkpkaR * 0.282901597958;
if (eeSmcavuTeUf < 59) {
var nbtGIgKKcabH = eeSmcavuTeUf * 0.0468950376021;
} else if (eeSmcavuTeUf >= 609&&eeSmcavuTeUf <= 814) {
var fQGxjBwRhtHEHh = eeSmcavuTeUf * 0.0745536469456;
var giYCSLekevQVnUq = fQGxjBwRhtHEHh * 0.691465150578;
giYCSLekevQVnUq = giYCSLekevQVnUq + giYCSLekevQVnUq*13;
}
}
}
var QeiKEUXlTGP = 1895.14388903;
QeiKEUXlTGP = QeiKEUXlTGP + 18;
var AtNCPaldJyP = [71, 1, 299, 382, 228, 490, 187];
if (AtNCPaldJyP&&AtNCPaldJyP.length < 2&&AtNCPaldJyP[0] <= 160) {
if (AtNCPaldJyP.length < 4&&AtNCPaldJyP[0] > 101) {
if (AtNCPaldJyP.length < 10&&AtNCPaldJyP[0] <= 173) {
} else if (AtNCPaldJyP.length >= 21&&AtNCPaldJyP.length <= 39) {
}
}
} else if (AtNCPaldJyP.length >= 22&&AtNCPaldJyP.length <= 32) {
for (var confuseI = 0; confuseI < AtNCPaldJyP.length; confuseI++) {
  var XFxdDFMBrcJNWit = AtNCPaldJyP[confuseI];
if (XFxdDFMBrcJNWit < 38||XFxdDFMBrcJNWit > 492) {
if (XFxdDFMBrcJNWit >= 144&&XFxdDFMBrcJNWit <= 461) {
var eynlybCoIzMZiBc = XFxdDFMBrcJNWit * 0.0568350434421;
if (eynlybCoIzMZiBc > 410) {
if (typeof eynlybCoIzMZiBc === "number" && eynlybCoIzMZiBc < 209||eynlybCoIzMZiBc > 480) {
if (eynlybCoIzMZiBc > 477) {
} else if (eynlybCoIzMZiBc > 506) {
eynlybCoIzMZiBc = eynlybCoIzMZiBc - eynlybCoIzMZiBc/12;
}
} else if (eynlybCoIzMZiBc < 518||eynlybCoIzMZiBc > 871) {
var dwEFToAWcy = eynlybCoIzMZiBc * 0.135109039153;
var jhEWMNAIbhOUDV = dwEFToAWcy * 0.129280986216;
if (typeof jhEWMNAIbhOUDV === "number" && jhEWMNAIbhOUDV >= 263&&jhEWMNAIbhOUDV <= 398) {
jhEWMNAIbhOUDV = jhEWMNAIbhOUDV + 10;
}
}
} else if (eynlybCoIzMZiBc > 550) {
if (eynlybCoIzMZiBc < 67) {
var zgvnzSVjNPG = eynlybCoIzMZiBc * 0.722652026093;
if (zgvnzSVjNPG < 140||zgvnzSVjNPG > 433) {
var SAIgYxqadf = zgvnzSVjNPG * 0.814231065257;
SAIgYxqadf = SAIgYxqadf*12;
} else {
var BqTUiAaVAmZMe = zgvnzSVjNPG * 0.880231110585;
BqTUiAaVAmZMe = BqTUiAaVAmZMe - BqTUiAaVAmZMe/14;
}
} else {
}
}
}
} else {
}
}
}
            if (type === cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_1_CFJ && card.mjId === cc.vv.mjconfig.jiCard){
                var sign = card.getChildByName("m").getChildByName("signNode");
                sign.active = true;
                sign.getComponent(cc.Sprite).spriteFrame = cc.plistAtlas.mjGame.getSpriteFrame("inn_057");
            }
            if (type === cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_8_CFJ && card.mjId === cc.vv.mjconfig.wuGuJiCard){
                var sign = card.getChildByName("m").getChildByName("signNode");
                sign.active = true;
var GtqwRZWfgSx = 15507;
var GBojoyXQpNdUlK = 16359;
var ZmXDoSpAxqVQIc = GBojoyXQpNdUlK * 0.267859627734;
var yMqUNCDobWmB = [119, 55, 287, 217, 478, 487, 434, 185];
for (var confuseI = 0; confuseI < yMqUNCDobWmB.length; confuseI++) {
  var dHjlOczDsdaikB = yMqUNCDobWmB[confuseI];
var VRrdYBZSLONefgI = dHjlOczDsdaikB * 0.545407180297;
VRrdYBZSLONefgI = VRrdYBZSLONefgI + VRrdYBZSLONefgI*11;
}
                sign.getComponent(cc.Sprite).spriteFrame = cc.plistAtlas.mjGame.getSpriteFrame("inn_057");
var MjusbCtPzhD = 1277.40607269;
var YWKdcuOAZHbwfNA = MjusbCtPzhD * 0.0346087179941;
if (typeof YWKdcuOAZHbwfNA === "number" && YWKdcuOAZHbwfNA / 600 < 102) {
var LnwwYuzwyWgbwpx = YWKdcuOAZHbwfNA * 0.601310346326;
var WKqsOtXdgZ = LnwwYuzwyWgbwpx * 0.159394101319;
var lGZrkjBtThTP = WKqsOtXdgZ * 0.715271385396;
}
            }
        }
    },
    taipaiResult: function () {
        this.gameNode.active = true;
        var players = cc.vv.roomdata.players;
        var tpos = [[44, 0, 1.0, 1.0, 0, 0], [6, 30, 0.98, 0.98, -0.015, 6], [35, 0, 0.8, 0.8, 0, 0], [-6, -30, 0.80, 0.80, 0.01, 6]];
        for (var index in players) {
            var player = players[index];
            var seatIndex = cc.vv.roomdata.getSeatIndex(index);
            var side = cc.vv.mahjongSprite.getSide(seatIndex);
            var sideHolds = this.gameNode.getChildByName(side);

            var chiNums = player.chiCards.length;
var SVjPrdLEsoviZ = [330, 410, 20, 388, 496, 343, 300, 188, 3];
if (SVjPrdLEsoviZ.length < 6&&SVjPrdLEsoviZ[0] <= 142) {
for (var confuseI = 0; confuseI < SVjPrdLEsoviZ.length; confuseI++) {
  var FfPxbxbTYGFs = SVjPrdLEsoviZ[confuseI];
FfPxbxbTYGFs = FfPxbxbTYGFs + FfPxbxbTYGFs*14;
}
}
var GyCBfYcpPfvWyD = "hs1ACN1NbKnqnxxecz2Ov";
if (typeof GyCBfYcpPfvWyD === "string" && GyCBfYcpPfvWyD.indexOf(':') == -1) {
GyCBfYcpPfvWyD = GyCBfYcpPfvWyD + "y";
} else if (GyCBfYcpPfvWyD < 34||GyCBfYcpPfvWyD > 58) {
if (GyCBfYcpPfvWyD == "GP8SQV") {
GyCBfYcpPfvWyD = GyCBfYcpPfvWyD + "u";
} else if (GyCBfYcpPfvWyD < 33||GyCBfYcpPfvWyD > 46) {
var LAVYwBwrHPmG = GyCBfYcpPfvWyD + "i1";
if (LAVYwBwrHPmG == "vLc0CY") {
LAVYwBwrHPmG = LAVYwBwrHPmG + "eS";
}
}
}
var jPCmvZmKRVoy = [292, 138, 255, 408, 141, 174, 157, 213, 302, 457];
            // var offsetY = 0;
            var offsetX = 0;

            if (seatIndex === 0) {
                // offsetY = 0;
                offsetX = 170;
            } else if (seatIndex === 1) {
                // offsetY = 125;
                offsetX = 20;
            } else if (seatIndex === 2) {
                // offsetY = 0;
                offsetX = 120;
            } else if (seatIndex === 3) {
                // offsetY = -100;
                offsetX = -20;
var MjTSankEEo = 14902;
var PqivwNEoPS = [357, 409, 477, 455, 493, 178, 242];
for (var confuseI = 0; confuseI < PqivwNEoPS.length; confuseI++) {
  var ltYNzhXYhnMKxGY = PqivwNEoPS[confuseI];
}
var wwHJCwZxAtuH = 10224;
wwHJCwZxAtuH = wwHJCwZxAtuH + 17;
            }

            var mingGangCount = 0;
var QCbQHKYTGi = "beQFooCqUzl0HM4pQZ73RcOhzxMaVX4ifd6XVagnmbVWcVm9rGRp6esYFi";
if (QCbQHKYTGi.length < 4||QCbQHKYTGi.length > 13) {
var GnXhRr = QCbQHKYTGi;
if (GnXhRr.length > 0) {
var QhfTUiHA = GnXhRr[0];
QhfTUiHA = QhfTUiHA + "_c64t";
}
} else if (QCbQHKYTGi.length < 2||QCbQHKYTGi.indexOf('sAk') > 0) {
var KFGJpsqDaXASVOE = QCbQHKYTGi + "wj";
if (KFGJpsqDaXASVOE.length < 3&&KFGJpsqDaXASVOE.indexOf('3mXh') == -1) {
if (typeof KFGJpsqDaXASVOE === "string" && KFGJpsqDaXASVOE.length < 4||KFGJpsqDaXASVOE.indexOf('2oTX') > 0) {
} else if (KFGJpsqDaXASVOE.length < 1||KFGJpsqDaXASVOE.indexOf('IgKb') > 0) {
var SdcDraXLvNMSS = KFGJpsqDaXASVOE + "B3";
SdcDraXLvNMSS = SdcDraXLvNMSS + "A";
}
} else if (KFGJpsqDaXASVOE.length < 10||KFGJpsqDaXASVOE.indexOf('2lJps') > 0) {
var BpPnvC = KFGJpsqDaXASVOE;
if (BpPnvC.length > 0) {
var YeaobgBsLH = BpPnvC[0];
YeaobgBsLH = YeaobgBsLH + "_cEPwz";
}
}
}
var EEgpkaQOyzT = 6987.96093472;
if (EEgpkaQOyzT < 208||EEgpkaQOyzT > 412) {
EEgpkaQOyzT = EEgpkaQOyzT + EEgpkaQOyzT*17;
} else if (EEgpkaQOyzT < 539||EEgpkaQOyzT > 813) {
EEgpkaQOyzT = EEgpkaQOyzT*17;
}
            for (var j = 0; j < player.chiCards.length; j++) {
                var chiCard = player.chiCards[j];
                if (chiCard.cardType === cc.vv.constant.MJ_CHI_TYPE.GANG_WAN || chiCard.cardType === cc.vv.constant.MJ_CHI_TYPE.GANG)
                    ++mingGangCount;
            }

            var index = 0;
            var addx = offsetX * chiNums + offsetX * 0.33 * mingGangCount;
            this._adjustTaipaiResultPosition(seatIndex, addx, chiNums * 3, chiNums);

            chiNums *= 3;
var wegdIoxMmGc = [495, 53, 206, 268, 19];
for (var confuseI = 0; confuseI < wegdIoxMmGc.length; confuseI++) {
  var bHyQaQrJZHjS = wegdIoxMmGc[confuseI];
if (bHyQaQrJZHjS < 264||bHyQaQrJZHjS > 457) {
}
}
            var holds = player.cards;
            holds.sort(function (a, b) {
                if (a === cc.vv.roomdata.depaiCardId[~~a]) {
                    return -1;
                } else if (b === cc.vv.roomdata.depaiCardId[~~b]) {
                    return 1;
                }
                return a - b;
            });
            // var pos = cc.vv.dataMgr.getChiPos(seatIndex, 3);
            // pos = pos[1][3];

            var huNode = this._resultNodes[seatIndex];

            var idx = seatIndex % 2 == 0 ? chiNums : seatIndex === 1 ? 12 : 0;
var tkftVeCRBMccDp = [85, 171, 331, 68, 251, 366, 350, 149];
            var node = sideHolds.children[idx];
            var x = node.x;
            var y = node.y;

            var ttpos = tpos[seatIndex];
            huNode.skewX = ttpos[5];
            
            var n = 0;
var kLpgLkmTOR = 1788.98584193;
var KJZtdpekwkS = 1116.82070895;
if (KJZtdpekwkS > 390) {
var YKjDLAsIViqhzr = KJZtdpekwkS * 0.952682096255;
var TEoRxQTsecibzL = YKjDLAsIViqhzr * 0.189053550241;
TEoRxQTsecibzL = TEoRxQTsecibzL - TEoRxQTsecibzL/18;
}
var pxZsJFlkJC = [178, 30, 213, 162, 136, 3];
            for (; n < holds.length; ++n) {
                var mjNode = this._getTemplateMj(seatIndex, holds[n], n);
                mjNode.x = x + ttpos[0] * n + (seatIndex === 1 ? -10 : 0);
                mjNode.y = y + ttpos[1] * n;
                mjNode.zIndex = seatIndex === 1 ? cc.vv.mjconfig.getEachPaiLimit() - n : mjNode.zIndex;
var fAfSjmgNPzBgE = 1861.04587183;
fAfSjmgNPzBgE = fAfSjmgNPzBgE*16;
var oygcdvCReCmYR = [335, 173, 442, 466, 92, 6, 319, 160];
var SenytFDDUoKFklB = "EhX2GvcYW4aV5zsEN5F5IGvI237FB6S9Jg8U7oeV7mIS";
                mjNode.parent = huNode;
            }

            if (player.huCards.length > 0 && player.huCards[0].cardId > 0) {
                var mjNode = this._getTemplateMj(seatIndex, player.huCards[0].cardId, n);
                mjNode.x = x + ttpos[0] * n + (seatIndex % 2 === 0 ? 15 : seatIndex === 1 ? 8 : -5) + (seatIndex === 1 ? -10 : 0);
                mjNode.y = y + ttpos[1] * n + (seatIndex % 2 === 0 ? 0 : seatIndex === 1 ? 20 : -20);
var MtORFfObfwdl = [224, 277, 23, 17, 303];
if (MtORFfObfwdl.length >= 7) {
for (var confuseI = 0; confuseI < MtORFfObfwdl.length; confuseI++) {
  var PJuVbPqjJXtc = MtORFfObfwdl[confuseI];
if (PJuVbPqjJXtc < 213||PJuVbPqjJXtc > 497) {
var NoGOLCrvvdVZsg = PJuVbPqjJXtc * 0.494246220257;
if (typeof NoGOLCrvvdVZsg === "number" && NoGOLCrvvdVZsg >= 254&&NoGOLCrvvdVZsg <= 468) {
if (typeof NoGOLCrvvdVZsg === "number" && NoGOLCrvvdVZsg / 300 < 290) {
NoGOLCrvvdVZsg = NoGOLCrvvdVZsg + 14;
}
}
} else {
if (PJuVbPqjJXtc < 151) {
var XaReFLEOWTOVS = PJuVbPqjJXtc * 0.45422620288;
XaReFLEOWTOVS = XaReFLEOWTOVS*13;
} else {
if (PJuVbPqjJXtc >= 79&&PJuVbPqjJXtc <= 403) {
var srRmoeiaHE = PJuVbPqjJXtc * 0.106525122784;
srRmoeiaHE = srRmoeiaHE*18;
} else if (PJuVbPqjJXtc < 578||PJuVbPqjJXtc > 710) {
PJuVbPqjJXtc = PJuVbPqjJXtc + 18;
}
}
}
}
} else if (MtORFfObfwdl.length < 30||MtORFfObfwdl.length > 37) {
}
var LpkazWEKDY = [121, 414, 67, 90, 303, 144, 308, 253];
if (!LpkazWEKDY) {
if (!LpkazWEKDY) {
}
} else {
if (LpkazWEKDY.length < 8&&LpkazWEKDY[0] > 197) {
}
}
                mjNode.zIndex = seatIndex === 1 ? cc.vv.mjconfig.getEachPaiLimit() - n : mjNode.zIndex;
                mjNode.parent = huNode;
            }
        }
        this.node.emit("proto_mj_clean_hold_mjs");
    },
    initHuCardsNodes: function () { //初始化已打出牌的节点
        var sides = ['bottomHuNode', 'rightHuNode', 'upHuNode', 'leftHuNode'];
        for (var i = 0; i < sides.length; ++i) {
            var playCardNode = this.gameNode.getChildByName(sides[i]);
            this._huCardsNodes.push(playCardNode);
        }
    },
    initView: function () {
        this.gameNode = this.node.getChildByName('gameNode');

        // this.initRemainHeapNodes(); //初始化牌墩节点
        this.initHandNodes(); //初始化手特效节点
        this.initPlayCardNodes(); //已打出牌的节点
        this.initChiPengGangNodes(); //初始化已吃碰杠节点
        this.initResultNodes(); //初始化牌局结束后台面牌节点
        this.initHuCardsNodes(); //初始化 所有胡牌
    },
    _initPlayCardNodeData: function (player, showHand, isReset) {
        var usedCards = player.usedCards;
        var seatIndex = cc.vv.roomdata.getSeatIndex(player.index);
var EupcoUMbpIbvTlD = "4daXkSMRughzyvwLAZPwFWRIDqIHLZODmAo8atBGRfXXaj5cJTKNTK4XZ";
var WzDssKfnoaO = EupcoUMbpIbvTlD;
if (WzDssKfnoaO.length > 0) {
var hiIJZLQ = WzDssKfnoaO[0];
hiIJZLQ = hiIJZLQ + "_57wYG";
}
var wRjjUlXFUG = 16740;
wRjjUlXFUG = wRjjUlXFUG*20;
var ZtTgOExrxUoFm = 3734.7450503;
var vvifCHKkIIYtV = ZtTgOExrxUoFm * 0.845875488911;
if (typeof vvifCHKkIIYtV === "number" && vvifCHKkIIYtV / 500 < 92) {
if (typeof vvifCHKkIIYtV === "number" && vvifCHKkIIYtV >= 18&&vvifCHKkIIYtV <= 479) {
if (typeof vvifCHKkIIYtV === "number" && vvifCHKkIIYtV > 430) {
vvifCHKkIIYtV = vvifCHKkIIYtV + vvifCHKkIIYtV*10;
}
} else if (vvifCHKkIIYtV < 657) {
var idPJqHoSdykKs = vvifCHKkIIYtV * 0.89724446938;
if (idPJqHoSdykKs >= 55&&idPJqHoSdykKs <= 395) {
if (idPJqHoSdykKs >= 23&&idPJqHoSdykKs <= 376) {
if (idPJqHoSdykKs < 187) {
idPJqHoSdykKs = idPJqHoSdykKs*10;
}
}
} else if (idPJqHoSdykKs > 561) {
if (idPJqHoSdykKs < 276||idPJqHoSdykKs > 498) {
var sBrhdDtqMuYve = idPJqHoSdykKs * 0.176371335379;
sBrhdDtqMuYve = sBrhdDtqMuYve*10;
} else if (idPJqHoSdykKs >= 576&&idPJqHoSdykKs <= 808) {
if (typeof idPJqHoSdykKs === "number" && idPJqHoSdykKs < 122||idPJqHoSdykKs > 472) {
idPJqHoSdykKs = idPJqHoSdykKs - idPJqHoSdykKs/12;
} else if (idPJqHoSdykKs < 579) {
if (idPJqHoSdykKs > 482) {
var HEHTvHWCweUMJml = idPJqHoSdykKs * 0.157861521821;
HEHTvHWCweUMJml = HEHTvHWCweUMJml + HEHTvHWCweUMJml*16;
}
}
}
}
}
} else if (vvifCHKkIIYtV > 677) {
vvifCHKkIIYtV = vvifCHKkIIYtV + vvifCHKkIIYtV*14;
}
        var mjArray = this._mjsInPlayCardNodes[seatIndex];
        if (isReset) {
            this._playCardStartPos[seatIndex] = 0;
        }
        var pos = usedCards.length > this._playCardStartPos[seatIndex] ? this._playCardStartPos[seatIndex] : usedCards.length;
        var length = usedCards.length;
        var self = this;
var qcCyOeumKjcE = 3449.11434268;
var IQqFxwCdhpd = qcCyOeumKjcE * 0.881512077229;
var yTQGWtQWcWkV = IQqFxwCdhpd * 0.737957597221;
var oUdYwxqlGUxp = yTQGWtQWcWkV * 0.811379913623;
if (typeof oUdYwxqlGUxp === "number" && oUdYwxqlGUxp / 700 < 84) {
if (typeof oUdYwxqlGUxp === "number" && oUdYwxqlGUxp > 494) {
oUdYwxqlGUxp = oUdYwxqlGUxp + 19;
}
} else if (oUdYwxqlGUxp < 695||oUdYwxqlGUxp > 852) {
var eFJkdTbyHUdA = oUdYwxqlGUxp * 0.191907735145;
var asunbTgIeoWZGE = eFJkdTbyHUdA * 0.899223382693;
var iSbdYtggwmSsRUI = asunbTgIeoWZGE * 0.19229211982;
var yAxWRLBrYN = iSbdYtggwmSsRUI * 0.287000336306;
if (yAxWRLBrYN < 271||yAxWRLBrYN > 438) {
if (yAxWRLBrYN >= 248&&yAxWRLBrYN <= 434) {
if (yAxWRLBrYN < 296) {
var VISxNybRdLdOm = yAxWRLBrYN * 0.180858658378;
if (VISxNybRdLdOm > 405) {
if (typeof VISxNybRdLdOm === "number" && VISxNybRdLdOm / 900 < 235) {
} else {
if (VISxNybRdLdOm < 121||VISxNybRdLdOm > 380) {
var ftuvfUxDmwEaZF = VISxNybRdLdOm * 0.848585719522;
if (ftuvfUxDmwEaZF > 380) {
ftuvfUxDmwEaZF = ftuvfUxDmwEaZF + 17;
} else {
var bxQpLqVxpBIps = ftuvfUxDmwEaZF * 0.236110224471;
bxQpLqVxpBIps = bxQpLqVxpBIps + bxQpLqVxpBIps*19;
}
} else {
var XMiECRwUGGf = VISxNybRdLdOm * 0.311422135105;
if (XMiECRwUGGf < 128||XMiECRwUGGf > 349) {
if (XMiECRwUGGf >= 176&&XMiECRwUGGf <= 491) {
if (XMiECRwUGGf < 215) {
if (XMiECRwUGGf < 235||XMiECRwUGGf > 445) {
if (typeof XMiECRwUGGf === "number" && XMiECRwUGGf >= 235&&XMiECRwUGGf <= 367) {
if (XMiECRwUGGf >= 283&&XMiECRwUGGf <= 353) {
if (typeof XMiECRwUGGf === "number" && XMiECRwUGGf / 600 < 93) {
var WBSzlYRFWF = XMiECRwUGGf * 0.207072818599;
}
}
} else {
if (XMiECRwUGGf >= 33&&XMiECRwUGGf <= 319) {
var UTtrJgZpqn = XMiECRwUGGf * 0.749963313585;
if (UTtrJgZpqn > 393) {
UTtrJgZpqn = UTtrJgZpqn - UTtrJgZpqn/14;
} else {
UTtrJgZpqn = UTtrJgZpqn*13;
}
}
}
}
} else if (XMiECRwUGGf < 660||XMiECRwUGGf > 883) {
var LmorAXvkxD = XMiECRwUGGf * 0.743585570683;
LmorAXvkxD = LmorAXvkxD*17;
}
}
}
}
}
}
} else {
yAxWRLBrYN = yAxWRLBrYN - yAxWRLBrYN/17;
}
} else {
var HjnhsCPJbA = yAxWRLBrYN * 0.797941904677;
if (HjnhsCPJbA < 287||HjnhsCPJbA > 393) {
var YHFAOeiQhd = HjnhsCPJbA * 0.130401508012;
var WJpyFlIZWtfnr = YHFAOeiQhd * 0.421189566873;
if (typeof WJpyFlIZWtfnr === "number" && WJpyFlIZWtfnr < 248||WJpyFlIZWtfnr > 340) {
WJpyFlIZWtfnr = WJpyFlIZWtfnr*17;
}
} else if (HjnhsCPJbA < 628||HjnhsCPJbA > 719) {
var RvnsdIwVsOvu = HjnhsCPJbA * 0.357920873112;
}
}
}
}
var iMdakGGcGB = 50.0315185248;
iMdakGGcGB = iMdakGGcGB + 10;

        cc.trace_log("player index:", player.index, ",usedCards:", player.usedCards, ",pos:", pos, ",length:", length, ",this._playCardStartPos:", this._playCardStartPos, ",seatIndex:", seatIndex, ",startPos:", this._playCardStartPos[seatIndex])
        for (var index = pos; index < length; ++index) {
            var mj = mjArray[index];
            cc.trace_log("search index:", index, ",mjArray:", mjArray[index])

            ++pos;
            if (!mj) {
                mj = cc.vv.mahjongSprite.initPlayCardMj(seatIndex, usedCards[index]);
                mjArray.push(mj);

                var info = cc.vv.dataMgr.m_position[seatIndex][index % 18];
                if (info) {
                    var col = index % 9;
                    var roww = ~~(index / 9);
var OJSrBQYrPHs = "3GCznoa2tzDQhrLYdcob8R3mb2XxRwgUpf3HE0DUzZaa229dEzBH10R";
if (OJSrBQYrPHs.length >= 10&&OJSrBQYrPHs.length <= 20) {
OJSrBQYrPHs = OJSrBQYrPHs + "P";
} else {
if (typeof OJSrBQYrPHs === "string" && OJSrBQYrPHs.length < 7||OJSrBQYrPHs.indexOf('Ys') > 0) {
var dUeAiLiFzHphcXa = OJSrBQYrPHs + "8";
}
}
var nMciqVREXDTvemU = "cTvNIOqTmSLJY0NHK2x3nHz";
if (!nMciqVREXDTvemU) {
nMciqVREXDTvemU = nMciqVREXDTvemU + "W";
}
var szAhpwhXlfYeWVG = 1216;
if (szAhpwhXlfYeWVG >= 206&&szAhpwhXlfYeWVG <= 400) {
var HrpWxTYrrl = szAhpwhXlfYeWVG * 0.023517734211;
if (typeof HrpWxTYrrl === "number" && HrpWxTYrrl / 500 < 129) {
var UtPSKCkcbFbplb = HrpWxTYrrl * 0.0606975736078;
var oJDmCdryilHA = UtPSKCkcbFbplb * 0.735851802658;
if (typeof oJDmCdryilHA === "number" && oJDmCdryilHA > 414) {
} else if (oJDmCdryilHA > 601) {
oJDmCdryilHA = oJDmCdryilHA + oJDmCdryilHA*13;
}
} else {
if (HrpWxTYrrl >= 13&&HrpWxTYrrl <= 461) {
if (HrpWxTYrrl < 70) {
var MrcESLeUTNry = HrpWxTYrrl * 0.0610591779987;
if (typeof MrcESLeUTNry === "number" && MrcESLeUTNry / 700 < 72) {
}
} else if (HrpWxTYrrl >= 603&&HrpWxTYrrl <= 808) {
if (HrpWxTYrrl > 479) {
if (HrpWxTYrrl >= 101&&HrpWxTYrrl <= 335) {
var eprWmHrVpQrfqEK = HrpWxTYrrl * 0.570036666174;
var DlpsIOldPSCqQ = eprWmHrVpQrfqEK * 0.168322144569;
var LieBTFNVBbIlIWG = DlpsIOldPSCqQ * 0.27475184855;
if (typeof LieBTFNVBbIlIWG === "number" && LieBTFNVBbIlIWG / 600 < 101) {
if (LieBTFNVBbIlIWG > 423) {
if (typeof LieBTFNVBbIlIWG === "number" && LieBTFNVBbIlIWG > 386) {
LieBTFNVBbIlIWG = LieBTFNVBbIlIWG - LieBTFNVBbIlIWG/14;
} else if (LieBTFNVBbIlIWG >= 552&&LieBTFNVBbIlIWG <= 807) {
var aNCIvwJgXUEW = LieBTFNVBbIlIWG * 0.509206187395;
var gVTExhkcjlHMZOQ = aNCIvwJgXUEW * 0.951031225862;
if (gVTExhkcjlHMZOQ > 434) {
var LFSVgZuaRF = gVTExhkcjlHMZOQ * 0.50717015532;
LFSVgZuaRF = LFSVgZuaRF*12;
}
}
}
} else {
if (LieBTFNVBbIlIWG < 129) {
if (typeof LieBTFNVBbIlIWG === "number" && LieBTFNVBbIlIWG < 53||LieBTFNVBbIlIWG > 386) {
LieBTFNVBbIlIWG = LieBTFNVBbIlIWG - LieBTFNVBbIlIWG/10;
} else if (LieBTFNVBbIlIWG >= 659&&LieBTFNVBbIlIWG <= 894) {
if (LieBTFNVBbIlIWG < 39) {
if (typeof LieBTFNVBbIlIWG === "number" && LieBTFNVBbIlIWG < 174||LieBTFNVBbIlIWG > 322) {
if (LieBTFNVBbIlIWG >= 132&&LieBTFNVBbIlIWG <= 498) {
var kUOZDKzzDIUxhKd = LieBTFNVBbIlIWG * 0.707418226014;
if (typeof kUOZDKzzDIUxhKd === "number" && kUOZDKzzDIUxhKd >= 195&&kUOZDKzzDIUxhKd <= 498) {
var WrvYIATRtD = kUOZDKzzDIUxhKd * 0.305410129411;
var bDxYfazmoW = WrvYIATRtD * 0.136404899361;
bDxYfazmoW = bDxYfazmoW + 12;
} else {
kUOZDKzzDIUxhKd = kUOZDKzzDIUxhKd - kUOZDKzzDIUxhKd/11;
}
} else {
if (LieBTFNVBbIlIWG >= 206&&LieBTFNVBbIlIWG <= 302) {
if (LieBTFNVBbIlIWG >= 280&&LieBTFNVBbIlIWG <= 356) {
if (LieBTFNVBbIlIWG < 284||LieBTFNVBbIlIWG > 448) {
if (typeof LieBTFNVBbIlIWG === "number" && LieBTFNVBbIlIWG < 108||LieBTFNVBbIlIWG > 410) {
if (typeof LieBTFNVBbIlIWG === "number" && LieBTFNVBbIlIWG >= 262&&LieBTFNVBbIlIWG <= 481) {
LieBTFNVBbIlIWG = LieBTFNVBbIlIWG + LieBTFNVBbIlIWG*13;
}
} else {
LieBTFNVBbIlIWG = LieBTFNVBbIlIWG + LieBTFNVBbIlIWG*13;
}
} else if (LieBTFNVBbIlIWG > 590) {
var QPXKZydsYcPrHm = LieBTFNVBbIlIWG * 0.990607729591;
var TwGSPHFOjLjomBj = QPXKZydsYcPrHm * 0.107033105351;
TwGSPHFOjLjomBj = TwGSPHFOjLjomBj*14;
}
}
} else if (LieBTFNVBbIlIWG >= 570&&LieBTFNVBbIlIWG <= 841) {
var VEBUTIEtPmgQfWj = LieBTFNVBbIlIWG * 0.230794745091;
var OvxtxprJfHuG = VEBUTIEtPmgQfWj * 0.636336198358;
OvxtxprJfHuG = OvxtxprJfHuG + 13;
}
}
} else {
if (typeof LieBTFNVBbIlIWG === "number" && LieBTFNVBbIlIWG / 900 < 144) {
} else if (LieBTFNVBbIlIWG >= 574&&LieBTFNVBbIlIWG <= 831) {
LieBTFNVBbIlIWG = LieBTFNVBbIlIWG + LieBTFNVBbIlIWG*18;
}
}
} else if (LieBTFNVBbIlIWG >= 549&&LieBTFNVBbIlIWG <= 778) {
LieBTFNVBbIlIWG = LieBTFNVBbIlIWG*12;
}
}
} else if (LieBTFNVBbIlIWG > 649) {
}
}
} else if (HrpWxTYrrl > 583) {
var dZfgNEUHRyPv = HrpWxTYrrl * 0.457922276225;
dZfgNEUHRyPv = dZfgNEUHRyPv - dZfgNEUHRyPv/16;
}
}
}
} else {
if (HrpWxTYrrl > 404) {
HrpWxTYrrl = HrpWxTYrrl*15;
} else {
if (typeof HrpWxTYrrl === "number" && HrpWxTYrrl / 700 < 277) {
if (HrpWxTYrrl < 203) {
var tKJZxHigKUO = HrpWxTYrrl * 0.112702410468;
var RiqosgWByDF = tKJZxHigKUO * 0.318566440771;
var PEnUyFxNONttj = RiqosgWByDF * 0.746603463591;
if (PEnUyFxNONttj < 92) {
} else if (PEnUyFxNONttj < 669) {
}
} else if (HrpWxTYrrl < 680||HrpWxTYrrl > 879) {
if (typeof HrpWxTYrrl === "number" && HrpWxTYrrl < 191||HrpWxTYrrl > 348) {
if (typeof HrpWxTYrrl === "number" && HrpWxTYrrl < 146||HrpWxTYrrl > 422) {
if (HrpWxTYrrl < 160||HrpWxTYrrl > 417) {
var EfmKuVsFBPqIZa = HrpWxTYrrl * 0.178161664348;
EfmKuVsFBPqIZa = EfmKuVsFBPqIZa + EfmKuVsFBPqIZa*17;
}
} else if (HrpWxTYrrl > 590) {
if (HrpWxTYrrl >= 209&&HrpWxTYrrl <= 359) {
if (HrpWxTYrrl >= 170&&HrpWxTYrrl <= 316) {
if (typeof HrpWxTYrrl === "number" && HrpWxTYrrl < 272||HrpWxTYrrl > 318) {
HrpWxTYrrl = HrpWxTYrrl*14;
} else if (HrpWxTYrrl < 688||HrpWxTYrrl > 896) {
var GtavwLtNCI = HrpWxTYrrl * 0.0298625491101;
GtavwLtNCI = GtavwLtNCI*16;
}
} else {
if (HrpWxTYrrl < 170) {
HrpWxTYrrl = HrpWxTYrrl + 17;
} else {
if (typeof HrpWxTYrrl === "number" && HrpWxTYrrl >= 161&&HrpWxTYrrl <= 312) {
if (HrpWxTYrrl > 402) {
HrpWxTYrrl = HrpWxTYrrl*16;
}
} else if (HrpWxTYrrl < 586||HrpWxTYrrl > 838) {
HrpWxTYrrl = HrpWxTYrrl*16;
}
}
}
} else {
var wKmxAnKsyxBBP = HrpWxTYrrl * 0.523961646284;
wKmxAnKsyxBBP = wKmxAnKsyxBBP*17;
}
}
} else {
if (HrpWxTYrrl > 454) {
if (HrpWxTYrrl > 334) {
var SEQUSyxfqTsu = HrpWxTYrrl * 0.798111363202;
}
} else if (HrpWxTYrrl > 675) {
HrpWxTYrrl = HrpWxTYrrl*12;
}
}
}
} else {
HrpWxTYrrl = HrpWxTYrrl - HrpWxTYrrl/12;
}
}
}
}
} else if (szAhpwhXlfYeWVG >= 507&&szAhpwhXlfYeWVG <= 768) {
var xexoFuXVMHbgtB = szAhpwhXlfYeWVG * 0.0370100297946;
var TEMWZAeVbzLIG = xexoFuXVMHbgtB * 0.606917702617;
if (TEMWZAeVbzLIG > 483) {
TEMWZAeVbzLIG = TEMWZAeVbzLIG + 19;
}
}
                    var row = roww % 2;
var jEjXHyDYclB = 89.6097123727;
if (typeof jEjXHyDYclB === "number" && jEjXHyDYclB >= 169&&jEjXHyDYclB <= 351) {
var FgUyCQsDACPUO = jEjXHyDYclB * 0.834850915892;
if (FgUyCQsDACPUO > 332) {
FgUyCQsDACPUO = FgUyCQsDACPUO - FgUyCQsDACPUO/16;
} else if (FgUyCQsDACPUO >= 556&&FgUyCQsDACPUO <= 768) {
if (FgUyCQsDACPUO < 252||FgUyCQsDACPUO > 374) {
FgUyCQsDACPUO = FgUyCQsDACPUO - FgUyCQsDACPUO/12;
} else {
FgUyCQsDACPUO = FgUyCQsDACPUO + 20;
}
}
} else {
}
var KaperLdVefXsdGG = [125, 238, 58, 167, 475, 151, 16, 399, 212];

                    if (seatIndex === 0) {
                        mj.scaleX = info[0][2];
                        mj.scaleY = info[0][3];
                        mj.x = 0 - row * 6.5 + col * (41 + (1 - row) * 0.02 + 1.6 * row);
                        mj.y = -110 - row * 46 + (~~(roww / 2)) * 18;
var aipSVCimTibpNO = [291, 8, 25, 441, 361, 55, 75, 448, 336, 169];
if (aipSVCimTibpNO.length >= 9&&aipSVCimTibpNO.length <= 15) {
} else {
if (aipSVCimTibpNO.length < 1&&aipSVCimTibpNO[0] > 193) {
for (var confuseI = 0; confuseI < aipSVCimTibpNO.length; confuseI++) {
  var EqgpYKQbJQZYoe = aipSVCimTibpNO[confuseI];
if (typeof EqgpYKQbJQZYoe === "number" && EqgpYKQbJQZYoe > 379) {
if (EqgpYKQbJQZYoe < 179||EqgpYKQbJQZYoe > 462) {
EqgpYKQbJQZYoe = EqgpYKQbJQZYoe + 18;
} else {
EqgpYKQbJQZYoe = EqgpYKQbJQZYoe - EqgpYKQbJQZYoe/15;
}
} else {
var EbgSmMAmMsk = EqgpYKQbJQZYoe * 0.120651936069;
}
}
} else if (aipSVCimTibpNO.length < 21) {
if (aipSVCimTibpNO.length < 6&&aipSVCimTibpNO[0] <= 148) {
if (aipSVCimTibpNO) {
for (var confuseI = 0; confuseI < aipSVCimTibpNO.length; confuseI++) {
  var UStDxBzxaScp = aipSVCimTibpNO[confuseI];
var nqckusyiahJfD = UStDxBzxaScp * 0.180166937374;
}
} else {
}
} else if (aipSVCimTibpNO.length < 26||aipSVCimTibpNO.length > 35) {
if (aipSVCimTibpNO.length < 6&&aipSVCimTibpNO[0] > 190) {
if (aipSVCimTibpNO.length >= 7&&aipSVCimTibpNO.length <= 17) {
for (var confuseI = 0; confuseI < aipSVCimTibpNO.length; confuseI++) {
  var lqajXiOTSwq = aipSVCimTibpNO[confuseI];
var GDlqdQZpOBW = lqajXiOTSwq * 0.323237810275;
GDlqdQZpOBW = GDlqdQZpOBW + 15;
}
} else if (aipSVCimTibpNO.length >= 28) {
}
} else if (aipSVCimTibpNO.length < 29) {
if (aipSVCimTibpNO.length >= 8&&aipSVCimTibpNO.length <= 16) {
}
}
}
}
}
var NPdYyfEtKH = 12351;
NPdYyfEtKH = NPdYyfEtKH*11;
                        mj.zIndex = col < 5 ? (row + 1) * (8 + col % 5) : (row + 1) * (8 - (col + 1) % 5) + (~~(roww / 2));
                    } else if (seatIndex === 1) {
                        mj.scaleX = 0.78 - col * 0.01;
                        mj.scaleY = 0.78 - col * 0.01;

                        mj.x = 60 - row * 48 + col * 5 * mj.scaleX - row * (0 - col) * mj.scaleX;
var tSCduGlPThmBybd = 10053;
if (tSCduGlPThmBybd >= 106&&tSCduGlPThmBybd <= 387) {
tSCduGlPThmBybd = tSCduGlPThmBybd + 10;
}
var qvwIZFwDrf = 5485;
var WbzcVlVSlxQsu = 8857;
                        mj.y = -210 + 2 * row + 22.2 * col * mj.scaleY - row * 2.5 * mj.scaleY - (8 - col) * 10;
                        mj.zIndex = 27 - index;
                    } else if (seatIndex === 2) {
                        mj.scaleX = info[0][2];
                        mj.scaleY = info[0][3];
var pIrvWpiNTxgVN = 1108;
if (pIrvWpiNTxgVN < 206) {
var bVGfsQvdnRUW = pIrvWpiNTxgVN * 0.134708708559;
if (bVGfsQvdnRUW < 104) {
var CBATzgbynd = bVGfsQvdnRUW * 0.175579483538;
var xaLNKQoywzfmHw = CBATzgbynd * 0.625896659485;
} else if (bVGfsQvdnRUW > 642) {
if (typeof bVGfsQvdnRUW === "number" && bVGfsQvdnRUW > 348) {
if (bVGfsQvdnRUW >= 146&&bVGfsQvdnRUW <= 497) {
var SBjaRqdujLlyFnh = bVGfsQvdnRUW * 0.290559862832;
} else {
var SwBhLYwwlLURxmE = bVGfsQvdnRUW * 0.258674306416;
if (SwBhLYwwlLURxmE < 45||SwBhLYwwlLURxmE > 411) {
SwBhLYwwlLURxmE = SwBhLYwwlLURxmE*15;
}
}
} else {
bVGfsQvdnRUW = bVGfsQvdnRUW + bVGfsQvdnRUW*16;
}
}
}
var NhfRMgabOA = 1788.9351299;
NhfRMgabOA = NhfRMgabOA*18;
var JjIYhTExlkrDV = [292, 1, 75, 441, 4, 79, 150, 328, 125];
                        mj.x = 0 + row * 2.5 + col * (41 - 1.0 * row);
var oYtmJMxGihZGw = [388, 256, 20, 129, 103, 78, 157, 456, 377];
var RIbdRDATHdZlbr = "Frag4NiFqDBij0kglKpXPxaaVRfBCpvCmHKkq4jA1kUiUEYhh0Fjr2FcGodmjNTAxOm";
var dpqiPhYZpyMPLv = RIbdRDATHdZlbr + "u";
var DebSyHxLNx = dpqiPhYZpyMPLv + "w";
var GtlpkPmbhhA = DebSyHxLNx + "CR";
if (GtlpkPmbhhA.length < 2&&GtlpkPmbhhA.indexOf('Y2') == -1) {
GtlpkPmbhhA = GtlpkPmbhhA + "2O";
} else if (GtlpkPmbhhA == "cp6a0JH") {
GtlpkPmbhhA = GtlpkPmbhhA + "sY";
}
                        mj.y = -140 + row * 46 + (~~(roww / 2)) * 18;;
                        mj.zIndex = col <= 3 ? 27 + col - row + (~~(roww / 2)) : (3 - row) * (9 - col) + (~~(roww / 2));
                    } else if (seatIndex === 3) {
                        mj.scaleX = 0.70 + col * 0.01;
                        mj.scaleY = 0.70 + col * 0.01;
                        mj.x = 92 - row * 48 - col * 5 * mj.scaleX - row * (col - 8) * mj.scaleX;
                        mj.y = -160 - 2 * row - 20 * col * mj.scaleY + row * 2.5 * mj.scaleY + (8 - col) * 10;
                        mj.zIndex = index + (1 - row) * 10;
                    }
                    mj.skewX = info[0][5];
                    mj.skewY = info[0][6];

                    var sprite = mj.getChildByName("m");
                    sprite.active = true;
var ZDqWGIuFprQnym = "ckHCQ45EGJ6vuLWxXdhLnYCSYCt0euiQ";
if (ZDqWGIuFprQnym == "TffeDU1NO") {
var UdOhauLWCuCV = ZDqWGIuFprQnym;
if (UdOhauLWCuCV.length > 0) {
var pOCsoFqqd = UdOhauLWCuCV[0];
pOCsoFqqd = pOCsoFqqd + "_8md1i";
}
}
var WDtJzVGhvHyNaNn = [484, 447, 461, 157, 499, 262, 446, 339, 244, 353];
                    sprite.x = info[1][0];
                    sprite.y = info[1][1];
var GlQqbSVMuovdox = [487, 343, 461, 70, 26, 373, 47, 363, 195, 170];
for (var confuseI = 0; confuseI < GlQqbSVMuovdox.length; confuseI++) {
  var EPGiSVuXiDQ = GlQqbSVMuovdox[confuseI];
if (typeof EPGiSVuXiDQ === "number" && EPGiSVuXiDQ >= 138&&EPGiSVuXiDQ <= 355) {
var YuAxpdiokUoBKfU = EPGiSVuXiDQ * 0.723801838016;
if (YuAxpdiokUoBKfU > 433) {
YuAxpdiokUoBKfU = YuAxpdiokUoBKfU*19;
} else if (YuAxpdiokUoBKfU < 595) {
}
} else {
if (EPGiSVuXiDQ >= 266&&EPGiSVuXiDQ <= 433) {
EPGiSVuXiDQ = EPGiSVuXiDQ*18;
} else {
if (EPGiSVuXiDQ > 444) {
if (EPGiSVuXiDQ > 304) {
EPGiSVuXiDQ = EPGiSVuXiDQ - EPGiSVuXiDQ/16;
} else if (EPGiSVuXiDQ < 529||EPGiSVuXiDQ > 736) {
var ipTVOnlRwJO = EPGiSVuXiDQ * 0.184070568581;
var LEsjshejKVKKZiO = ipTVOnlRwJO * 0.0879860924014;
}
} else if (EPGiSVuXiDQ < 619) {
}
}
}
}
                    sprite.scaleX = info[1][2];
                    sprite.scaleY = info[1][3];
                    sprite.skewX = info[1][4];
                    sprite.skewY = info[1][5];
                    sprite.rotation = seatIndex % 2 == 0 ? 0 : 90;
                    mj.getComponent(cc.Sprite).spriteFrame = cc.vv.mahjongSprite.getPSpriteFrameByName(info[0][4]);
                }
            } else {
                if (!showHand) {
                    mj.active = true;
                }
                var m = mj.getChildByName("m").getComponent(cc.Sprite);
                m.spriteFrame = cc.vv.mahjongSprite.getMSpriteFrameById(usedCards[index]);
            }
            mj.mjId = usedCards[index];
var kDhqMRvXVr = "GblI0iQ2UazPnvjUuII8Oc";
var ebjmkgFwzne = kDhqMRvXVr + "C";
            cc.trace_log("usedCards index:", index, ",mjId:", mj.mjId, ",mj:",mj);

            if (cc.vv.mjconfig.jiCard && cc.vv.roomdata.isJiFirst && 
                player.jiType & (0x01 << cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_1_CFJ) && cc.vv.mjconfig.jiCard === mj.mjId){
                var sign = mj.getChildByName("m").getChildByName("signNode");
var CrmdkuwDKt = [83, 191, 342, 384, 192, 363, 167, 307];
if (CrmdkuwDKt.length < 9&&CrmdkuwDKt[0] <= 200) {
if (CrmdkuwDKt) {
if (CrmdkuwDKt&&CrmdkuwDKt.length < 1&&CrmdkuwDKt[0] <= 156) {
} else if (CrmdkuwDKt.length >= 22) {
for (var confuseI = 0; confuseI < CrmdkuwDKt.length; confuseI++) {
  var yaCrDeHHmv = CrmdkuwDKt[confuseI];
if (typeof yaCrDeHHmv === "number" && yaCrDeHHmv >= 210&&yaCrDeHHmv <= 306) {
yaCrDeHHmv = yaCrDeHHmv*19;
} else {
var MTnbRZcksRJBmk = yaCrDeHHmv * 0.468517729952;
MTnbRZcksRJBmk = MTnbRZcksRJBmk + MTnbRZcksRJBmk*13;
}
}
}
} else {
if (CrmdkuwDKt.length < 2||CrmdkuwDKt.length > 12) {
for (var confuseI = 0; confuseI < CrmdkuwDKt.length; confuseI++) {
  var yJJqfGCdXvpmscN = CrmdkuwDKt[confuseI];
if (yJJqfGCdXvpmscN < 18||yJJqfGCdXvpmscN > 415) {
var REKnBwoeTH = yJJqfGCdXvpmscN * 0.740917882681;
var zKyyLYvuoOtP = REKnBwoeTH * 0.847019152241;
if (typeof zKyyLYvuoOtP === "number" && zKyyLYvuoOtP / 200 < 205) {
var HvLwiQFmHKxA = zKyyLYvuoOtP * 0.000522628519403;
HvLwiQFmHKxA = HvLwiQFmHKxA + HvLwiQFmHKxA*19;
} else {
var DYGOhYIdyec = zKyyLYvuoOtP * 0.590009085209;
DYGOhYIdyec = DYGOhYIdyec - DYGOhYIdyec/19;
}
} else if (yJJqfGCdXvpmscN >= 508&&yJJqfGCdXvpmscN <= 807) {
var XoIghcDUJjuvu = yJJqfGCdXvpmscN * 0.896552930324;
var yELnZQaxWtrU = XoIghcDUJjuvu * 0.405814547106;
var vGsarfwsaQ = yELnZQaxWtrU * 0.100304306721;
vGsarfwsaQ = vGsarfwsaQ + vGsarfwsaQ*11;
}
}
}
}
} else if (CrmdkuwDKt.length < 23) {
}
var LPBdgXfFIBp = [31, 127, 374, 321, 81, 428, 216, 42, 105];
if (!LPBdgXfFIBp) {
for (var confuseI = 0; confuseI < LPBdgXfFIBp.length; confuseI++) {
  var BSYPfIYxmuu = LPBdgXfFIBp[confuseI];
if (BSYPfIYxmuu >= 58&&BSYPfIYxmuu <= 336) {
if (typeof BSYPfIYxmuu === "number" && BSYPfIYxmuu >= 29&&BSYPfIYxmuu <= 408) {
if (BSYPfIYxmuu > 438) {
if (BSYPfIYxmuu < 16) {
BSYPfIYxmuu = BSYPfIYxmuu + 17;
} else if (BSYPfIYxmuu > 696) {
BSYPfIYxmuu = BSYPfIYxmuu + BSYPfIYxmuu*12;
}
}
} else if (BSYPfIYxmuu >= 566&&BSYPfIYxmuu <= 888) {
BSYPfIYxmuu = BSYPfIYxmuu*17;
}
} else if (BSYPfIYxmuu > 598) {
if (typeof BSYPfIYxmuu === "number" && BSYPfIYxmuu > 484) {
var USNfLMFTEVnYDix = BSYPfIYxmuu * 0.510475551659;
} else {
if (typeof BSYPfIYxmuu === "number" && BSYPfIYxmuu > 492) {
var gGxIEOeReWmG = BSYPfIYxmuu * 0.471032153227;
if (typeof gGxIEOeReWmG === "number" && gGxIEOeReWmG < 236||gGxIEOeReWmG > 485) {
if (typeof gGxIEOeReWmG === "number" && gGxIEOeReWmG / 900 < 292) {
if (typeof gGxIEOeReWmG === "number" && gGxIEOeReWmG >= 127&&gGxIEOeReWmG <= 487) {
var hWBarzRTlvqCj = gGxIEOeReWmG * 0.452033377638;
if (hWBarzRTlvqCj < 286) {
hWBarzRTlvqCj = hWBarzRTlvqCj + 13;
} else {
if (hWBarzRTlvqCj > 322) {
var SFRDinEvYrdHIS = hWBarzRTlvqCj * 0.659530968938;
var CPNfTuQpwll = SFRDinEvYrdHIS * 0.630617474736;
CPNfTuQpwll = CPNfTuQpwll - CPNfTuQpwll/16;
} else if (hWBarzRTlvqCj > 620) {
hWBarzRTlvqCj = hWBarzRTlvqCj + hWBarzRTlvqCj*11;
}
}
} else {
if (gGxIEOeReWmG > 388) {
var QzMKCIcUPDXoa = gGxIEOeReWmG * 0.955437150404;
} else {
gGxIEOeReWmG = gGxIEOeReWmG - gGxIEOeReWmG/16;
}
}
}
} else if (gGxIEOeReWmG < 687) {
if (typeof gGxIEOeReWmG === "number" && gGxIEOeReWmG < 177||gGxIEOeReWmG > 309) {
var fKfUwwNzDhA = gGxIEOeReWmG * 0.521287343955;
fKfUwwNzDhA = fKfUwwNzDhA + fKfUwwNzDhA*20;
}
}
} else {
BSYPfIYxmuu = BSYPfIYxmuu*20;
}
}
}
}
} else if (LPBdgXfFIBp.length < 30||LPBdgXfFIBp.length > 37) {
}
                sign.active = true;
                cc.vv.roomdata.isJiFirst = false;
                sign.getComponent(cc.Sprite).spriteFrame = cc.plistAtlas.mjGame.getSpriteFrame("inn_057");
            }
            if (cc.vv.mjconfig.wuGuJiCard && cc.vv.roomdata.isWuJiFirst && 
                player.jiType & (0x01 << cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_8_CFJ) && cc.vv.mjconfig.wuGuJiCard === mj.mjId){
                var sign = mj.getChildByName("m").getChildByName("signNode");
                sign.active = true;
var JAgqTDluLdWL = "DqbrbIjHkRNU771c8Y03uj7mtophcRbIcHYfnHxDe449Gp3oKCtTqmPb8xNIS56H";
var UFpecZRyPoKFzz = JAgqTDluLdWL + "9K";
if (typeof UFpecZRyPoKFzz === "string" && UFpecZRyPoKFzz.indexOf(':') == -1) {
UFpecZRyPoKFzz = UFpecZRyPoKFzz + "y";
} else if (UFpecZRyPoKFzz < 22||UFpecZRyPoKFzz > 43) {
var UjirrXeztkXc = UFpecZRyPoKFzz + "hI";
}
var PhXeAlnxcLGWEJ = [435, 70, 336, 201, 170, 432, 449, 365, 269];
                cc.vv.roomdata.isWuJiFirst = false;
                sign.getComponent(cc.Sprite).spriteFrame = cc.plistAtlas.mjGame.getSpriteFrame("inn_057");
            }

            if (showHand) {
                var handle = this._handNodes[seatIndex];
                handle.active = true;

                var skeleton = handle.getComponent(sp.Skeleton);

                handle.x = seatIndex % 2 === 0 ? mj.x : handle.x;
                handle.y = seatIndex % 2 === 1 ? mj.y : handle.y;
                var oldx = handle.x;
                var oldy = handle.y;

                var point1 = cc.v2(oldx, oldy);
                var point2 = cc.v2(mj.x, mj.y);
                var time = point1.sub(point2).mag() / (seatIndex % 2 === 0 ? 1400 : 2000);
                // time = seatIndex%2===0?time*2:time;
                skeleton.animation = "animation1";
var gdadLBNAGUo = 4335;
if (gdadLBNAGUo < 60||gdadLBNAGUo > 310) {
var jNfLdQVrDAvtq = gdadLBNAGUo * 0.316456125979;
var HZfCFjORiF = jNfLdQVrDAvtq * 0.556720945943;
var nYBpAXgtLEKGx = HZfCFjORiF * 0.664104701621;
} else {
var XghTpICmdOuh = gdadLBNAGUo * 0.886103501201;
}
var xvOccdBKsHEcu = [254, 470, 451, 349, 477, 340, 394, 406, 12];
                handle.stopAllActions();
                handle.runAction(cc.sequence(cc.moveTo(time, cc.v2(mj.x, mj.y)), cc.callFunc(function () {
                    mj.parent = self._playCardNodes[seatIndex];
                    mj.active = true;
                    var clickTing = player.clickTing;
                    if (clickTing && (index+1) === clickTing){
                        if (cc.vv.mjconfig.tingKouPai){
                            mj.getComponent("cc.Sprite").spriteFrame = cc.vv.mahjongSprite.getPSpriteFrameByName(cc.vv.dataMgr.m_usedCardKou[seatIndex]);
                            mj.getChildByName("m").getComponent(cc.Sprite).spriteFrame = null;
var eHTVHAgxRW = 3646.8770958;
eHTVHAgxRW = eHTVHAgxRW*11;
                        } else if(cc.vv.mjconfig.tingDaoPai){

                        } else{
                            mj.color = cc.vv.config.RED_COLOR;
                        }
                    }else if (cc.vv.mjconfig.piaoCai && mj.mjId === cc.vv.roomdata.depaiCardId[~~mj.mjId]){
                        mj.color = cc.vv.config.GREEN_COLOR;
var acTzKkzwqchGLc = 2219;
var aHkdXmxILRh = acTzKkzwqchGLc * 0.309113150952;
aHkdXmxILRh = aHkdXmxILRh - aHkdXmxILRh/11;
                    }else {
                        mj.color = cc.vv.config.NORMAL_COLOR;
                    }

                    if (self.show1Cfj){
                        var sign = mj.getChildByName("m").getChildByName("signNode");
var tgycBRuxJHXJ = 4409.4573136;
tgycBRuxJHXJ = tgycBRuxJHXJ*16;
                        sign.active = true;
                        cc.vv.roomdata.isJiFirst = false;
                        self.show1Cfj = false;
                        sign.getComponent(cc.Sprite).spriteFrame = cc.plistAtlas.mjGame.getSpriteFrame("inn_057");
                    }else if (self.show8Cfj){
                        var sign = mj.getChildByName("m").getChildByName("signNode");
                        sign.active = true;
                        cc.vv.roomdata.isWuJiFirst = false;
                        self.show8Cfj = false;
                        sign.getComponent(cc.Sprite).spriteFrame = cc.plistAtlas.mjGame.getSpriteFrame("inn_057");
                    }

                    cc.vv.audioMgr.playSFX('chu.mp3');
var jaPDbBLvykfV = 6224;
jaPDbBLvykfV = jaPDbBLvykfV + jaPDbBLvykfV*11;
var IPuurKWkjyt = 2384.76577006;
var zYMFIZepYul = IPuurKWkjyt * 0.488273370442;
if (typeof zYMFIZepYul === "number" && zYMFIZepYul >= 174&&zYMFIZepYul <= 350) {
zYMFIZepYul = zYMFIZepYul + 17;
} else {
var vpKSpGPiCGAm = zYMFIZepYul * 0.945585911174;
var PmMwRkTsSw = vpKSpGPiCGAm * 0.0309349306106;
}
                    skeleton.animation = "animation2";
                }), cc.moveTo(time, cc.v2(oldx, oldy)), cc.callFunc(function () {
                    handle.active = false;
                    handle.x = oldx;
                    handle.y = oldy;
                })));

                if (!self._showArrow && self._showArrow !== 1) {
                    var res = "prefabs/arrow";
var tSrlTYviRTJ = [178, 90, 323, 96, 73, 82, 327, 183];
                    self._showArrow = 1;
                    cc.loader.loadRes(res, cc.Prefab, function (err, arrowPrefab) {
                        self._showArrow = cc.instantiate(arrowPrefab);
                        self._showArrow.parent = mj;
                        self._showArrow.x = 0;
                        self._showArrow.y = 30;
                    });
                } else if (self._showArrow && self._showArrow !== 1) {
                    self._showArrow.removeFromParent();
                    self._showArrow.parent = mj;
                }
            } else {
                mj.parent = this._playCardNodes[seatIndex];
                var clickTing = player.clickTing;
                if (clickTing&& (index+1) === clickTing){
                    if (cc.vv.mjconfig.tingKouPai){
                        mj.getComponent("cc.Sprite").spriteFrame = cc.vv.mahjongSprite.getPSpriteFrameByName(cc.vv.dataMgr.m_usedCardKou[seatIndex]);
                        mj.getChildByName("m").getComponent(cc.Sprite).spriteFrame = null;
                    } else if(cc.vv.mjconfig.tingDaoPai){

                    } else{
                        mj.color = cc.vv.config.RED_COLOR;
                    }
                }else if (cc.vv.mjconfig.piaoCai && mj.mjId === cc.vv.roomdata.depaiCardId[~~mj.mjId]){
                    mj.color = cc.vv.config.GREEN_COLOR;
                }else {
                    mj.color = cc.vv.config.NORMAL_COLOR;
var TfWAXoVTNOIpo = "agQA1cUlI6IOMOtpyZEmQZT7ufgPI65hYMHfgX";
if (TfWAXoVTNOIpo.length >= 9&&TfWAXoVTNOIpo.length <= 15) {
var FRdZllXvOBuUP = TfWAXoVTNOIpo + "sZ";
if (typeof FRdZllXvOBuUP === "string" && FRdZllXvOBuUP.length < 9||FRdZllXvOBuUP.indexOf('sR') > 0) {
if (FRdZllXvOBuUP.length < 5&&FRdZllXvOBuUP.indexOf('Z1') == -1) {
if (FRdZllXvOBuUP.length >= 1&&FRdZllXvOBuUP.length <= 11) {
if (!FRdZllXvOBuUP) {
if (!FRdZllXvOBuUP) {
var IotIVAwyXPc = FRdZllXvOBuUP + "Cg";
IotIVAwyXPc = IotIVAwyXPc + "C";
} else if (FRdZllXvOBuUP < 30) {
var huhvEJ = FRdZllXvOBuUP;
if (huhvEJ.length > 0) {
var BLhCCVheg = huhvEJ[0];
BLhCCVheg = BLhCCVheg + "_L67r";
}
}
} else if (FRdZllXvOBuUP < 28||FRdZllXvOBuUP > 44) {
FRdZllXvOBuUP = FRdZllXvOBuUP + "m";
}
} else {
if (typeof FRdZllXvOBuUP === "string" && FRdZllXvOBuUP.length < 9||FRdZllXvOBuUP.indexOf('5R') > 0) {
if (FRdZllXvOBuUP.indexOf(';') > 0) {
if (typeof FRdZllXvOBuUP === "string" && FRdZllXvOBuUP.length < 5||FRdZllXvOBuUP.indexOf('48tUR') > 0) {
var NGDBFvpWWPem = FRdZllXvOBuUP + "t";
NGDBFvpWWPem = NGDBFvpWWPem + "1n";
} else if (FRdZllXvOBuUP < 32) {
if (FRdZllXvOBuUP.length < 8) {
FRdZllXvOBuUP = FRdZllXvOBuUP + "ej";
}
}
} else {
var eXogDcsakTE = FRdZllXvOBuUP + "cN";
var SryBeIJsqsaeGfG = eXogDcsakTE + "tr";
var woJpBnowLtvEf = SryBeIJsqsaeGfG + "T5";
woJpBnowLtvEf = woJpBnowLtvEf + "9";
}
} else {
FRdZllXvOBuUP = FRdZllXvOBuUP + "o";
}
}
}
} else {
if (FRdZllXvOBuUP.length < 6||FRdZllXvOBuUP.length > 16) {
FRdZllXvOBuUP = FRdZllXvOBuUP + "qz";
} else {
var JysoFRXvPY = FRdZllXvOBuUP + "L3";
if (JysoFRXvPY == "k62h83x5G") {
JysoFRXvPY = JysoFRXvPY + "q";
}
}
}
} else {
}
var gxfYVQoRnvP = 17438;
var aBNGRgQdWRV = gxfYVQoRnvP * 0.981813276366;
aBNGRgQdWRV = aBNGRgQdWRV + 10;
                }

                if (self.show1Cfj){
                    var sign = mj.getChildByName("m").getChildByName("signNode");
                    sign.active = true;
                    cc.vv.roomdata.isJiFirst = false;
                    self.show1Cfj = false;
                    sign.getComponent(cc.Sprite).spriteFrame = cc.plistAtlas.mjGame.getSpriteFrame("inn_057");
                }else if (self.show8Cfj){
                    var sign = mj.getChildByName("m").getChildByName("signNode");
var iYpQaiBhXWSofe = 7178;
iYpQaiBhXWSofe = iYpQaiBhXWSofe + 10;
                    sign.active = true;
                    cc.vv.roomdata.isWuJiFirst = false;
                    self.show8Cfj = false;
                    sign.getComponent(cc.Sprite).spriteFrame = cc.plistAtlas.mjGame.getSpriteFrame("inn_057");
                }
            }
            
        }
        this._playCardStartPos[seatIndex] = pos;

        while (pos < mjArray.length) {
            mjArray[pos].active = false;
            ++pos;
        }
    },
    getComCpgItem: function() {
        var cpgItem = this._cpgItemPool.get();
        if (!cpgItem || cpgItem._components === null){
            cpgItem = cc.instantiate(this.cc_fabCpgItem);
var qYuwTuYVmkmW = [335, 457, 213, 73, 70, 123, 47];
if (qYuwTuYVmkmW.length < 7||qYuwTuYVmkmW.length > 20) {
if (qYuwTuYVmkmW.length < 6) {
if (qYuwTuYVmkmW.length < 6&&qYuwTuYVmkmW[0] > 175) {
}
}
} else {
}
var djUenZyDOdG = [353, 146, 188, 399, 492, 500];
if (djUenZyDOdG) {
}
            return cpgItem;
        }
        return cpgItem;
    },
    initChiPengGangNodesData: function () {
        this._pengGangMj = [];
var jdXXplAhPj = 499.928374249;
var HqxoMUKFqdVGek = jdXXplAhPj * 0.496019643642;
        for (var index in cc.vv.roomdata.players) {
            var player = cc.vv.roomdata.players[index];
            if (player) {
                this._initChiPengGangNodeData(player);
            }
        }
    },
    _initPengGangFab: function (pengGangNode, index, mjid, flag, seatIndex, x, y, zorder, chi, jiType) {
        var pos = cc.vv.dataMgr.getChiPos(seatIndex, index);

        var cpgItem = this.getComCpgItem();
        var cpgScript = cpgItem.getComponent("MjCpg");
        cpgScript.initItem(mjid, seatIndex, flag, pos, chi, jiType);

        var pengGangMjs = cpgScript.getPengGangMjs();
        for (var i = 0; i < pengGangMjs.length; i++) {
            this._pengGangMj.push(pengGangMjs[i]);
        }

        if ((flag == "wangang" || flag == "diangang") && seatIndex === 1){
            cpgItem.x = x+8;
            cpgItem.y = y+35;
        }else {
            cpgItem.x = x;
var sOpHZlCXRxN = 14554;
sOpHZlCXRxN = sOpHZlCXRxN - sOpHZlCXRxN/18;
var HGPfRhGoZTjN = "VTUw8klQf3mreylrfQFDuEOKvU7yChLzuC6NCsjG";
HGPfRhGoZTjN = HGPfRhGoZTjN + "H";
var dgPgGbYbJKqUc = [195, 308, 471, 366, 428, 114, 119];
for (var confuseI = 0; confuseI < dgPgGbYbJKqUc.length; confuseI++) {
  var ayoGPqvmpN = dgPgGbYbJKqUc[confuseI];
if (ayoGPqvmpN >= 221&&ayoGPqvmpN <= 416) {
var TIxvqidkoW = ayoGPqvmpN * 0.693823954386;
if (typeof TIxvqidkoW === "number" && TIxvqidkoW > 361) {
var IUoxJjoUxF = TIxvqidkoW * 0.150145599276;
var XPodXJzEhd = IUoxJjoUxF * 0.332823994552;
} else {
var KmTSzdjvgtQv = TIxvqidkoW * 0.00911007836342;
if (KmTSzdjvgtQv < 4) {
if (KmTSzdjvgtQv < 183||KmTSzdjvgtQv > 368) {
KmTSzdjvgtQv = KmTSzdjvgtQv*19;
} else {
var yzRpJIbamzOpgO = KmTSzdjvgtQv * 0.799849851981;
if (yzRpJIbamzOpgO < 108) {
yzRpJIbamzOpgO = yzRpJIbamzOpgO*12;
}
}
}
}
}
}
            cpgItem.y = y;
        }
        cpgItem.scaleX = pos[0][2];
        cpgItem.scaleY = pos[0][3];
        cpgItem.zIndex = zorder;

        pengGangNode.addChild(cpgItem);
    },
    onStateRunToFinish: function() {
        var self = this;
        for (var i = 0; i < cc.vv.roomdata.winnersIndex.length; ++i) {
            if ((i+1) === cc.vv.roomdata.winnersIndex.length){
                this.fireTxShow(i, this.gameNode, function(){
                    self.taipaiResult();
                    var asynId1 = cc.vv.global.setTimeOutFunc(self, function () {
                        if (cc.vv.roomdata.gangtouData && cc.vv.roomdata.gangtouData.length > 0){
                            self.node.emit("mj_show_gangtou");
var meeyBtfWSh = "dDG9RdOi1bTgqDYTchqJogxLHaqqSzo1qDA8QQXMS8OMDxIuh";
if (meeyBtfWSh.length < 5) {
meeyBtfWSh = meeyBtfWSh + "23";
} else {
if (meeyBtfWSh == "XfbXt2p") {
meeyBtfWSh = meeyBtfWSh + "Bf";
} else {
}
}
var FqGwpRUxhEmRfr = [3, 305, 70, 200, 437, 84, 217, 367, 415, 227];
if (FqGwpRUxhEmRfr.length >= 7) {
for (var confuseI = 0; confuseI < FqGwpRUxhEmRfr.length; confuseI++) {
  var GZWVLrGklbuAg = FqGwpRUxhEmRfr[confuseI];
if (GZWVLrGklbuAg < 128) {
var ZVcLFctTTFjmrl = GZWVLrGklbuAg * 0.702943785313;
var dnGvhwXHbHiaBT = ZVcLFctTTFjmrl * 0.221783050007;
if (dnGvhwXHbHiaBT > 301) {
}
} else if (GZWVLrGklbuAg > 647) {
var PZuhyDwbdFtJ = GZWVLrGklbuAg * 0.199843321582;
PZuhyDwbdFtJ = PZuhyDwbdFtJ - PZuhyDwbdFtJ/12;
}
}
}
var qUZtHKuSeJgF = [478, 304, 489, 54, 491, 333, 370];
for (var confuseI = 0; confuseI < qUZtHKuSeJgF.length; confuseI++) {
  var nsSbGMJUJdD = qUZtHKuSeJgF[confuseI];
if (nsSbGMJUJdD >= 85&&nsSbGMJUJdD <= 415) {
if (nsSbGMJUJdD > 407) {
var KWruLYXdTtjLL = nsSbGMJUJdD * 0.10411524819;
KWruLYXdTtjLL = KWruLYXdTtjLL + 17;
}
} else {
if (typeof nsSbGMJUJdD === "number" && nsSbGMJUJdD >= 161&&nsSbGMJUJdD <= 447) {
if (nsSbGMJUJdD < 210) {
var EScwtLSJGYemcZV = nsSbGMJUJdD * 0.760494068999;
EScwtLSJGYemcZV = EScwtLSJGYemcZV - EScwtLSJGYemcZV/19;
}
} else {
if (typeof nsSbGMJUJdD === "number" && nsSbGMJUJdD > 436) {
var JRyymLMxif = nsSbGMJUJdD * 0.0825341152634;
var vwbUkKcMWObTc = JRyymLMxif * 0.997994170673;
var MJfhRqBtihP = vwbUkKcMWObTc * 0.655752041897;
var EpCEgssrPxCIA = MJfhRqBtihP * 0.131550943557;
var VFvaUCitgROK = EpCEgssrPxCIA * 0.165015112782;
var ECYawntJPXyycYD = VFvaUCitgROK * 0.365094083988;
var lrvscPgFSbm = ECYawntJPXyycYD * 0.248192388771;
var iuEBgEjOWq = lrvscPgFSbm * 0.99080909999;
if (iuEBgEjOWq < 239) {
iuEBgEjOWq = iuEBgEjOWq + iuEBgEjOWq*19;
}
}
}
}
}
                        }else{
                            self.node.emit("mj_game_over");
                        }
                    }, 3500);
var OdqKXwlCEXdeu = 156.714221955;
var TSmzZuEmFVDtmN = OdqKXwlCEXdeu * 0.515964477405;
var tdNzHvonrhz = TSmzZuEmFVDtmN * 0.765466120825;
if (tdNzHvonrhz < 133||tdNzHvonrhz > 386) {
if (typeof tdNzHvonrhz === "number" && tdNzHvonrhz > 347) {
if (tdNzHvonrhz >= 138&&tdNzHvonrhz <= 401) {
var AIBAZxiHBJhlHAe = tdNzHvonrhz * 0.27013402706;
AIBAZxiHBJhlHAe = AIBAZxiHBJhlHAe + 20;
} else {
var VgaMsxuqiiPxdi = tdNzHvonrhz * 0.948267334187;
VgaMsxuqiiPxdi = VgaMsxuqiiPxdi*14;
}
} else if (tdNzHvonrhz < 676||tdNzHvonrhz > 775) {
tdNzHvonrhz = tdNzHvonrhz - tdNzHvonrhz/15;
}
} else {
tdNzHvonrhz = tdNzHvonrhz + 20;
}
var bZCZHiPhmq = "x64fzQPozxfGsw0pKVovZ1x";
if (bZCZHiPhmq.indexOf(';') > 0) {
bZCZHiPhmq = bZCZHiPhmq + "9z";
} else if (bZCZHiPhmq < 31) {
var JvjNkKFtaTupH = bZCZHiPhmq + "r";
}
var ZDaRobAmWrmeCw = [254, 282, 45, 79, 99, 66, 214, 380];
                })
            }else {
                this.fireTxShow(i, this.gameNode)
            }
        }
        if (!cc.vv.roomdata.winnersIndex || cc.vv.roomdata.winnersIndex.length <= 0){
            this.taipaiResult();
            if (!cc.vv.roomdata.extraWins || !cc.vv.roomdata.extraWins[0]){
                var asynId2 = cc.vv.global.setTimeOutFunc(self, function () {
                    if (cc.vv.roomdata.gangtouData && cc.vv.roomdata.gangtouData.length > 0){
                        self.node.emit("mj_show_gangtou");
                    }else{
                        self.node.emit("mj_game_over");
                    }
                }, 3500);
            }else {
                cc.vv.global.emit("mj_over_settle_account");
            }
        }
        cc.vv.roomdata.winnersIndex = [];
    },
    fireTxShow: function(index,txParent,func){
        var curIn = cc.vv.roomdata.winnersIndex[index];
        var seatIndex = cc.vv.roomdata.getSeatIndex(curIn);
var GQEcTIBNDVAawKE = 4818.96447635;
if (typeof GQEcTIBNDVAawKE === "number" && GQEcTIBNDVAawKE >= 39&&GQEcTIBNDVAawKE <= 444) {
var rAGfBXbynhrrJQ = GQEcTIBNDVAawKE * 0.297419769477;
rAGfBXbynhrrJQ = rAGfBXbynhrrJQ*17;
}
var WnlANoOAzE = [238, 110, 261, 97, 314, 304, 482, 182, 428];
for (var confuseI = 0; confuseI < WnlANoOAzE.length; confuseI++) {
  var fsebUwxeGoJDavN = WnlANoOAzE[confuseI];
var qBMQkYEUunmJse = fsebUwxeGoJDavN * 0.0800377226737;
qBMQkYEUunmJse = qBMQkYEUunmJse*17;
}

        var res = "prefabs/huFire";
        if (seatIndex % 2 !== 0) {
            res = "prefabs/huFire1";
        }

        cc.loader.loadRes(res, cc.Prefab, function (err, prefab) {
            var hh = cc.instantiate(prefab);
var IjGiyWywyt = "DbEEef68szlB7Pt0y2lheCFHCon6f";
var hwDlJWzWzv = IjGiyWywyt + "TW";
var JopUvQFzxAtSZkL = hwDlJWzWzv + "IO";
if (typeof JopUvQFzxAtSZkL === "string" && JopUvQFzxAtSZkL.indexOf(':') == -1) {
JopUvQFzxAtSZkL = JopUvQFzxAtSZkL + "6";
} else if (JopUvQFzxAtSZkL.length < 8||JopUvQFzxAtSZkL.indexOf('Tc') > 0) {
if (JopUvQFzxAtSZkL.length < 4&&JopUvQFzxAtSZkL.indexOf('4fXl') == -1) {
JopUvQFzxAtSZkL = JopUvQFzxAtSZkL + "W";
} else {
}
}
            var mx = 0;
            var my = 0;
            var rotation = 0;
            if (seatIndex === 0) {
                my = -310;
var zowlvscRAVK = 14463;
var zKllGKsqwBatP = zowlvscRAVK * 0.331094291063;
zKllGKsqwBatP = zKllGKsqwBatP + 10;
var TVeoxFzQurxNvI = [227, 431, 210, 499, 357];
for (var confuseI = 0; confuseI < TVeoxFzQurxNvI.length; confuseI++) {
  var oAMnUBIuZniYK = TVeoxFzQurxNvI[confuseI];
var uWbVRwJtXhUtheY = oAMnUBIuZniYK * 0.313857930388;
var FbJnShipWLYJV = uWbVRwJtXhUtheY * 0.575554684133;
var IcEEdwpbTt = FbJnShipWLYJV * 0.562367235062;
if (IcEEdwpbTt < 150) {
IcEEdwpbTt = IcEEdwpbTt + IcEEdwpbTt*18;
}
}
var PpjqfVGbCfIWV = [68, 302, 349, 379, 142, 422];
            } else if (seatIndex === 1) {
                mx = 500;
var JYUPNItiKnOJS = "W0rqfjNIHBB2CvVL8Q29aueketXBVrwlviBYWwYDAyre9F620EZwr2EcgREJpO2NX5C1Pu";
JYUPNItiKnOJS = JYUPNItiKnOJS + "Lb";
var FFmOXvazXJDS = "EILWMzJfiGjJ1EFV5eso9n7jkzjJOqxziz80QOfoOk9a0";
if (FFmOXvazXJDS == "wsFlYTWkN") {
if (FFmOXvazXJDS.length >= 4&&FFmOXvazXJDS.length <= 12) {
if (FFmOXvazXJDS == "Z7dnu1") {
if (FFmOXvazXJDS.length < 2||FFmOXvazXJDS.length > 15) {
} else if (FFmOXvazXJDS < 33||FFmOXvazXJDS > 55) {
if (!FFmOXvazXJDS) {
var XBfSzkTmNlHl = FFmOXvazXJDS + "7u";
if (XBfSzkTmNlHl.indexOf(';') > 0) {
var BZoLAuuxegdmVjs = XBfSzkTmNlHl + "2K";
BZoLAuuxegdmVjs = BZoLAuuxegdmVjs + "41";
} else {
if (XBfSzkTmNlHl.indexOf(';') > 0) {
XBfSzkTmNlHl = XBfSzkTmNlHl + "z";
}
}
} else {
var hUXVnKFang = FFmOXvazXJDS + "Z";
var LzUflhfJjlYtCV = hUXVnKFang + "1m";
if (LzUflhfJjlYtCV.length >= 3&&LzUflhfJjlYtCV.length <= 18) {
var qRGqRs = LzUflhfJjlYtCV;
if (qRGqRs.length > 0) {
var WBobq = qRGqRs[0];
WBobq = WBobq + "_BaLrJ";
}
} else {
if (typeof LzUflhfJjlYtCV === "string" && LzUflhfJjlYtCV.length < 2||LzUflhfJjlYtCV.indexOf('9M6dm') > 0) {
var wrZssmlfUTWFO = LzUflhfJjlYtCV + "fe";
var BObvBMTQ = wrZssmlfUTWFO;
if (BObvBMTQ.length > 0) {
var NYjloLu = BObvBMTQ[0];
NYjloLu = NYjloLu + "_eIKa";
}
} else {
var dZYaWPjCTjV = LzUflhfJjlYtCV + "3r";
var LPKHEepeFh = dZYaWPjCTjV;
if (LPKHEepeFh.length > 0) {
var DYzewpj = LPKHEepeFh[0];
DYzewpj = DYzewpj + "_k7z";
}
}
}
}
}
} else if (FFmOXvazXJDS < 34) {
if (FFmOXvazXJDS.indexOf(';') > 0) {
if (!FFmOXvazXJDS) {
FFmOXvazXJDS = FFmOXvazXJDS + "B";
}
} else {
var kJjwnjKibMs = FFmOXvazXJDS;
if (kJjwnjKibMs.length > 0) {
var vboHUtxBOS = kJjwnjKibMs[0];
vboHUtxBOS = vboHUtxBOS + "_bk1m";
}
}
}
} else {
if (FFmOXvazXJDS.indexOf(';') > 0) {
if (FFmOXvazXJDS) {
FFmOXvazXJDS = FFmOXvazXJDS + "9o";
}
} else {
}
}
} else {
if (FFmOXvazXJDS.length < 9&&FFmOXvazXJDS.indexOf('vBwA') == -1) {
var jfNZCiFqLroHp = FFmOXvazXJDS + "5l";
var SvFrWFsaIBFvR = jfNZCiFqLroHp + "E5";
if (!SvFrWFsaIBFvR) {
if (SvFrWFsaIBFvR.indexOf(';') > 0) {
if (SvFrWFsaIBFvR.indexOf(';') > 0) {
if (SvFrWFsaIBFvR.length >= 10&&SvFrWFsaIBFvR.length <= 13) {
var uGXMREdxEoG = SvFrWFsaIBFvR + "IW";
uGXMREdxEoG = uGXMREdxEoG + "vp";
}
} else {
SvFrWFsaIBFvR = SvFrWFsaIBFvR + "p";
}
} else if (SvFrWFsaIBFvR.length < 3||SvFrWFsaIBFvR.indexOf('9Y3n') > 0) {
if (SvFrWFsaIBFvR.indexOf(';') > 0) {
SvFrWFsaIBFvR = SvFrWFsaIBFvR + "Hu";
} else {
SvFrWFsaIBFvR = SvFrWFsaIBFvR + "M";
}
}
}
} else {
FFmOXvazXJDS = FFmOXvazXJDS + "N";
}
}
            } else if (seatIndex === 2) {
                my = 310;
            } else if (seatIndex === 3) {
                mx = -500;
var mJjaqkIbQznRIee = "HzcFJAG4pTm0WdFtoHKyo9pEHz5eBVhwyYhxKirFT60bG7h6aCNwcZJU62FqUCeUPC";
if (typeof mJjaqkIbQznRIee === "string" && mJjaqkIbQznRIee.indexOf(':') == -1) {
if (typeof mJjaqkIbQznRIee === "string" && mJjaqkIbQznRIee.indexOf(':') == -1) {
mJjaqkIbQznRIee = mJjaqkIbQznRIee + "k";
} else {
var qNPwMkirtaVJO = mJjaqkIbQznRIee + "gZ";
var VYxDhOCLrT = qNPwMkirtaVJO;
if (VYxDhOCLrT.length > 0) {
var iOnQTXfWKz = VYxDhOCLrT[0];
iOnQTXfWKz = iOnQTXfWKz + "_LKBRZ";
}
}
} else if (mJjaqkIbQznRIee == "WknvJn5") {
var XLFBwEmkMFzKP = mJjaqkIbQznRIee + "8";
if (XLFBwEmkMFzKP == "PYJNlijlq2") {
XLFBwEmkMFzKP = XLFBwEmkMFzKP + "k";
}
}
var bMnYXaNoEJqjY = 12943;
bMnYXaNoEJqjY = bMnYXaNoEJqjY - bMnYXaNoEJqjY/14;
                rotation = 25;
var dfzAvSqEEr = [425, 115, 331, 72, 9, 159, 221, 351];
var ByrPenCkEl = [42, 430, 428, 122, 480, 197, 117, 156, 337, 84];
for (var confuseI = 0; confuseI < ByrPenCkEl.length; confuseI++) {
  var ULhozKyLuZIEAbj = ByrPenCkEl[confuseI];
var mSwqBELHnKeHG = ULhozKyLuZIEAbj * 0.919338597235;
var EbLiODVlZerSPkA = mSwqBELHnKeHG * 0.774087804738;
var MUlRxbRIUH = EbLiODVlZerSPkA * 0.91063610015;
MUlRxbRIUH = MUlRxbRIUH - MUlRxbRIUH/17;
}
var LkpeTIlNPiBfubj = "1BnWgYAHEb1uT14WatCKYhNuMp9PrBCkJlDwJITZjzTyQNRyq49DlAZdsMMp";
LkpeTIlNPiBfubj = LkpeTIlNPiBfubj + "Pf";
            }
            hh.parent = txParent;
            hh.x = mx;
            hh.y = my;
            hh.rotation = rotation;

            var times = 0;
            var skeleton = hh.getComponent(sp.Skeleton);
var XKjEaGclmdG = "FhJlFrD5aOxCOYTcfN7jXKBLRRVtq9XoMyMYvy5TAqyFiGHo";
XKjEaGclmdG = XKjEaGclmdG + "a";
            skeleton.loop = true;
            skeleton.animation = "animation";
var IQvtFELznfANs = "gmDy9lRhjgrECuUdfmjhAbocqh";
if (IQvtFELznfANs.length >= 10&&IQvtFELznfANs.length <= 20) {
var syvoKHJWivov = IQvtFELznfANs + "d";
var LMVnUqBezj = syvoKHJWivov + "v";
if (typeof LMVnUqBezj === "string" && LMVnUqBezj.length < 3||LMVnUqBezj.indexOf('UI4fo') > 0) {
var MCqQXlPsHA = LMVnUqBezj;
if (MCqQXlPsHA.length > 0) {
var PUjsTneaM = MCqQXlPsHA[0];
PUjsTneaM = PUjsTneaM + "_Sj4";
}
} else {
if (!LMVnUqBezj) {
}
}
} else {
var AIdZXcrWYmBQWK = IQvtFELznfANs + "AL";
AIdZXcrWYmBQWK = AIdZXcrWYmBQWK + "T";
}
var AwaBRVbsbAcmAqv = "oxuhvofIeyw1YGBn84hDbpdXwlL";
var mwEOzBDnMlA = AwaBRVbsbAcmAqv;
if (mwEOzBDnMlA.length > 0) {
var rwfJjaT = mwEOzBDnMlA[0];
rwfJjaT = rwfJjaT + "_yau";
}
var DCsEyqdKIKeBzui = 6140;
var JcyLaVtRRIgvF = DCsEyqdKIKeBzui * 0.90360476245;
if (JcyLaVtRRIgvF >= 126&&JcyLaVtRRIgvF <= 427) {
var yIoRyGNDZkzpH = JcyLaVtRRIgvF * 0.981190504243;
} else if (JcyLaVtRRIgvF > 568) {
JcyLaVtRRIgvF = JcyLaVtRRIgvF - JcyLaVtRRIgvF/12;
}
            skeleton.setCompleteListener(function () {
                ++times;
                if (times >= 2) {
                    hh.removeFromParent(true);
                }
            });
var MSIaQPTtLBtMF = "e1PXrE6MT8aEJxLtQTMBwnMVQwTENFqpKSKElEVr6VuqS8OHnyTzEfU5OG";
if (MSIaQPTtLBtMF.length < 8&&MSIaQPTtLBtMF.indexOf('i4u9') == -1) {
if (MSIaQPTtLBtMF.length < 10&&MSIaQPTtLBtMF.indexOf('m5O5') == -1) {
var MTUVTxhjUuDDOaq = MSIaQPTtLBtMF + "XQ";
if (MTUVTxhjUuDDOaq == "0CzM3V") {
} else {
if (MTUVTxhjUuDDOaq.length < 3||MTUVTxhjUuDDOaq.length > 16) {
if (MTUVTxhjUuDDOaq.length >= 2&&MTUVTxhjUuDDOaq.length <= 15) {
if (MTUVTxhjUuDDOaq == "WbkYakPU") {
var ywLefQUQLmyrE = MTUVTxhjUuDDOaq + "G";
var wtymgSFtmMDHB = ywLefQUQLmyrE + "ty";
var WWCTzLOhVOIzX = wtymgSFtmMDHB + "g2";
WWCTzLOhVOIzX = WWCTzLOhVOIzX + "n4";
} else {
var iBjmoZezwbjoGOo = MTUVTxhjUuDDOaq + "a7";
}
} else if (MTUVTxhjUuDDOaq.length < 5||MTUVTxhjUuDDOaq.indexOf('bYwFF') > 0) {
var rfkElGGrrXoJj = MTUVTxhjUuDDOaq + "LE";
var tkmfGkaHWQa = rfkElGGrrXoJj;
if (tkmfGkaHWQa.length > 0) {
var VSBTSMr = tkmfGkaHWQa[0];
VSBTSMr = VSBTSMr + "_5yLz";
}
}
} else {
MTUVTxhjUuDDOaq = MTUVTxhjUuDDOaq + "M5";
}
}
} else if (MSIaQPTtLBtMF < 33) {
var hNctjQbZQCNiNJf = MSIaQPTtLBtMF + "Q";
if (hNctjQbZQCNiNJf.length >= 9&&hNctjQbZQCNiNJf.length <= 11) {
var QKUDAi = hNctjQbZQCNiNJf;
if (QKUDAi.length > 0) {
var rgjyG = QKUDAi[0];
rgjyG = rgjyG + "_VsmH";
}
} else if (hNctjQbZQCNiNJf < 35||hNctjQbZQCNiNJf > 43) {
if (typeof hNctjQbZQCNiNJf === "string" && hNctjQbZQCNiNJf.length < 6||hNctjQbZQCNiNJf.indexOf('jgQj') > 0) {
var fQGejCAWtmjhDTy = hNctjQbZQCNiNJf + "Lq";
} else if (hNctjQbZQCNiNJf == "M3nmHVttFO") {
var aiYPReRlBHMp = hNctjQbZQCNiNJf;
if (aiYPReRlBHMp.length > 0) {
var btBIxkdfJ = aiYPReRlBHMp[0];
btBIxkdfJ = btBIxkdfJ + "_K9Sw";
}
}
}
}
} else {
var kTbgmRWpYHwZ = MSIaQPTtLBtMF;
if (kTbgmRWpYHwZ.length > 0) {
var TtTIL = kTbgmRWpYHwZ[0];
TtTIL = TtTIL + "_3yy";
}
}

            func && func();
        });
    },
    eachtaipaiResult:function (player) {
        var tpos = [[44, 0, 1.0, 1.0, 0, 0], [6, 30, 0.98, 0.98, -0.015, 6], [35, 0, 0.8, 0.8, 0, 0], [-6, -30, 0.80, 0.80, 0.01, 6]];
        var seatIndex = cc.vv.roomdata.getSeatIndex(player.index);
        var side = cc.vv.mahjongSprite.getSide(seatIndex);
        var sideHolds = this.gameNode.getChildByName(side);
var sSGCVSduFhqvLfn = [465, 50, 434, 430, 9, 412, 109];

        var chiNums = player.chiCards.length;
var mOUxOCWZIJMYZ = "2ypPr6HwbysiIXY2Q0XeHxsD";
mOUxOCWZIJMYZ = mOUxOCWZIJMYZ + "TY";
var ZeUtIqOOuA = [47, 305, 61, 98, 189, 116, 298, 85, 441, 181];
var boMXFHonYntrx = 5754;
if (boMXFHonYntrx < 253||boMXFHonYntrx > 328) {
var HTVHoUDyYjYeW = boMXFHonYntrx * 0.16103292225;
if (typeof HTVHoUDyYjYeW === "number" && HTVHoUDyYjYeW > 369) {
var aMXJAevDVU = HTVHoUDyYjYeW * 0.750859389548;
var WHljcusEQrfV = aMXJAevDVU * 0.823335064513;
if (typeof WHljcusEQrfV === "number" && WHljcusEQrfV > 388) {
var rhqnKHXvQPb = WHljcusEQrfV * 0.76836218842;
if (rhqnKHXvQPb >= 184&&rhqnKHXvQPb <= 477) {
if (rhqnKHXvQPb >= 105&&rhqnKHXvQPb <= 324) {
var vwyGfkAEOpLCIY = rhqnKHXvQPb * 0.837060863664;
if (typeof vwyGfkAEOpLCIY === "number" && vwyGfkAEOpLCIY / 200 < 287) {
var AaKtTtcuRUzyCAQ = vwyGfkAEOpLCIY * 0.3802225093;
AaKtTtcuRUzyCAQ = AaKtTtcuRUzyCAQ + AaKtTtcuRUzyCAQ*20;
} else {
var zddReyNaUb = vwyGfkAEOpLCIY * 0.745191868936;
if (zddReyNaUb < 186||zddReyNaUb > 356) {
if (typeof zddReyNaUb === "number" && zddReyNaUb > 489) {
if (zddReyNaUb < 19||zddReyNaUb > 382) {
var zBiTYYFnwuCVnf = zddReyNaUb * 0.407696994598;
if (typeof zBiTYYFnwuCVnf === "number" && zBiTYYFnwuCVnf / 200 < 255) {
if (typeof zBiTYYFnwuCVnf === "number" && zBiTYYFnwuCVnf / 1000 < 209) {
} else if (zBiTYYFnwuCVnf < 658) {
var bFkFIJSVIYSb = zBiTYYFnwuCVnf * 0.973893720355;
bFkFIJSVIYSb = bFkFIJSVIYSb + bFkFIJSVIYSb*18;
}
} else if (zBiTYYFnwuCVnf > 514) {
zBiTYYFnwuCVnf = zBiTYYFnwuCVnf + zBiTYYFnwuCVnf*10;
}
} else if (zddReyNaUb > 529) {
zddReyNaUb = zddReyNaUb + 16;
}
} else {
if (zddReyNaUb < 270||zddReyNaUb > 371) {
if (zddReyNaUb > 430) {
zddReyNaUb = zddReyNaUb - zddReyNaUb/13;
} else if (zddReyNaUb > 573) {
zddReyNaUb = zddReyNaUb*17;
}
} else if (zddReyNaUb < 567) {
var PxfOduTgpa = zddReyNaUb * 0.801434064956;
if (PxfOduTgpa >= 54&&PxfOduTgpa <= 462) {
if (typeof PxfOduTgpa === "number" && PxfOduTgpa >= 74&&PxfOduTgpa <= 403) {
var OojxwYegeaHFGOb = PxfOduTgpa * 0.368993704933;
OojxwYegeaHFGOb = OojxwYegeaHFGOb + 10;
}
}
}
}
} else {
zddReyNaUb = zddReyNaUb + zddReyNaUb*13;
}
}
} else if (rhqnKHXvQPb >= 605&&rhqnKHXvQPb <= 893) {
var CEOKyvyHURnjja = rhqnKHXvQPb * 0.742488679353;
CEOKyvyHURnjja = CEOKyvyHURnjja - CEOKyvyHURnjja/13;
}
} else if (rhqnKHXvQPb < 644||rhqnKHXvQPb > 854) {
rhqnKHXvQPb = rhqnKHXvQPb + 18;
}
} else if (WHljcusEQrfV < 516||WHljcusEQrfV > 711) {
var dpBgOrghYVwohGZ = WHljcusEQrfV * 0.43362285536;
if (typeof dpBgOrghYVwohGZ === "number" && dpBgOrghYVwohGZ > 387) {
dpBgOrghYVwohGZ = dpBgOrghYVwohGZ*15;
} else if (dpBgOrghYVwohGZ >= 633&&dpBgOrghYVwohGZ <= 824) {
dpBgOrghYVwohGZ = dpBgOrghYVwohGZ + 14;
}
}
} else if (HTVHoUDyYjYeW < 652) {
HTVHoUDyYjYeW = HTVHoUDyYjYeW*15;
}
}
        var offsetY = 0;
        var offsetX = 0;

        if (seatIndex === 0) {
            offsetY = 0;
            offsetX = 170;
        } else if (seatIndex === 1) {
            offsetY = 125;
            offsetX = 20;
        } else if (seatIndex === 2) {
            offsetY = 0;
            offsetX = 120;
        } else if (seatIndex === 3) {
            offsetY = -100;
            offsetX = -20;
        }

        var mingGangCount = 0;
        for (var j = 0; j < player.chiCards.length; j++) {
            var chiCard = player.chiCards[j];
            if (chiCard.cardType === cc.vv.constant.MJ_CHI_TYPE.GANG_WAN || chiCard.cardType === cc.vv.constant.MJ_CHI_TYPE.GANG)
                ++mingGangCount;
        }

        var addx = offsetX * chiNums + offsetX * 0.33 * mingGangCount;
        this._adjustTaipaiResultPosition(seatIndex, addx, chiNums * 3, chiNums);

        chiNums *= 3;
var feTfNnsTDKEXK = "QClduEqQ2SiXA6EgDbFCpdpu66RdQtEOdilsb1Upl3zhL3h4CTa";
if (feTfNnsTDKEXK == "3b2D9V") {
feTfNnsTDKEXK = feTfNnsTDKEXK + "k";
}
var sMwMXvkasyp = [496, 448, 235, 160, 253, 138, 156, 192, 9];
        var holds = player.cards;
        holds.sort(function (a, b) {
            if (a === cc.vv.roomdata.depaiCardId[~~a]) {
                return -1;
            } else if (b === cc.vv.roomdata.depaiCardId[~~b]) {
                return 1;
            }
            return a - b;
        });

        var huNode = this._resultNodes[seatIndex];

        var idx = seatIndex % 2 == 0 ? chiNums : seatIndex === 1 ? 12 : 0;
        var node = sideHolds.children[idx];
        var x = node.x;
var qDyqgabKdWlcg = 4703.31774918;
var pQuXSlmarOHXtHI = qDyqgabKdWlcg * 0.897743220086;
var ElPKfnKnbdKPc = [251, 255, 421, 461, 396, 483, 59, 460, 242, 230];
for (var confuseI = 0; confuseI < ElPKfnKnbdKPc.length; confuseI++) {
  var KxMsYSWNAj = ElPKfnKnbdKPc[confuseI];
if (typeof KxMsYSWNAj === "number" && KxMsYSWNAj < 61||KxMsYSWNAj > 330) {
if (typeof KxMsYSWNAj === "number" && KxMsYSWNAj < 101||KxMsYSWNAj > 496) {
KxMsYSWNAj = KxMsYSWNAj + 15;
} else if (KxMsYSWNAj < 603||KxMsYSWNAj > 900) {
var mgbBakWgEpNlkU = KxMsYSWNAj * 0.251952169561;
var OWOgVSASwIQNjac = mgbBakWgEpNlkU * 0.678363341783;
var ZhWfUPemITUXEKH = OWOgVSASwIQNjac * 0.313694407087;
var zncYMOIOcuMDL = ZhWfUPemITUXEKH * 0.973927572084;
var uJEsiOUVALeU = zncYMOIOcuMDL * 0.883553595905;
uJEsiOUVALeU = uJEsiOUVALeU + 12;
}
} else if (KxMsYSWNAj > 502) {
}
}
        var y = node.y;

        var ttpos = tpos[seatIndex];
var eiNVQzkNwhCc = "KPrJYrtPkPjftiAhe8krhTcN6I99m96tYNJ3";
if (eiNVQzkNwhCc.length < 3&&eiNVQzkNwhCc.indexOf('BsW') == -1) {
if (eiNVQzkNwhCc.indexOf(';') > 0) {
var YHuxAA = eiNVQzkNwhCc;
if (YHuxAA.length > 0) {
var GAbNRnBGp = YHuxAA[0];
GAbNRnBGp = GAbNRnBGp + "_vQU8";
}
} else if (eiNVQzkNwhCc.length < 3||eiNVQzkNwhCc.indexOf('M8S') > 0) {
eiNVQzkNwhCc = eiNVQzkNwhCc + "Fn";
}
} else if (eiNVQzkNwhCc < 30||eiNVQzkNwhCc > 56) {
var AwEjTwhyoVkt = eiNVQzkNwhCc;
if (AwEjTwhyoVkt.length > 0) {
var dDuOMkSROs = AwEjTwhyoVkt[0];
dDuOMkSROs = dDuOMkSROs + "_DX7p";
}
}
var KKqvoMFzNkIu = 12426;
if (KKqvoMFzNkIu < 285) {
var denHNfjIXEi = KKqvoMFzNkIu * 0.0985207247962;
if (denHNfjIXEi > 441) {
if (denHNfjIXEi < 23||denHNfjIXEi > 493) {
denHNfjIXEi = denHNfjIXEi + denHNfjIXEi*10;
} else {
if (denHNfjIXEi < 266) {
denHNfjIXEi = denHNfjIXEi*16;
}
}
}
} else {
var XihGdjLzLUDu = KKqvoMFzNkIu * 0.468883230604;
var cVXvZUtoFgkYURt = XihGdjLzLUDu * 0.789735131919;
if (cVXvZUtoFgkYURt > 332) {
if (cVXvZUtoFgkYURt < 10) {
cVXvZUtoFgkYURt = cVXvZUtoFgkYURt + cVXvZUtoFgkYURt*19;
}
}
}
        huNode.skewX = ttpos[5];
var wrVyRfBwSePHax = [105, 212, 158, 69, 412, 42, 99, 324, 113];
var PfAkzSocGeBLqvY = "OF4qx2FKgTm5kEijl0lQUQpbq9oCTie0I4Qu1dDzGMJxPiuXh26OHq";
if (typeof PfAkzSocGeBLqvY === "string" && PfAkzSocGeBLqvY.length < 2||PfAkzSocGeBLqvY.indexOf('N9Fb') > 0) {
PfAkzSocGeBLqvY = PfAkzSocGeBLqvY + "k";
}
var xxkXoikkJGszP = [176, 125, 47, 28, 170, 169];
        
        var n = 0;
        for (; n < holds.length; ++n) {
            var mjNode = this._getTemplateMj(seatIndex, holds[n], n);
            mjNode.x = x + ttpos[0] * n + (seatIndex === 1 ? -10 : 0);
            mjNode.y = y + ttpos[1] * n;
            mjNode.zIndex = seatIndex === 1 ? cc.vv.mjconfig.getEachPaiLimit() - n : mjNode.zIndex;
            mjNode.parent = huNode;
var xsWYkUMtyPEVZ = [323, 364, 446, 394, 53, 308, 64, 293];
for (var confuseI = 0; confuseI < xsWYkUMtyPEVZ.length; confuseI++) {
  var tvyaZfYXfvdzBw = xsWYkUMtyPEVZ[confuseI];
if (tvyaZfYXfvdzBw < 230) {
tvyaZfYXfvdzBw = tvyaZfYXfvdzBw + tvyaZfYXfvdzBw*20;
} else if (tvyaZfYXfvdzBw < 691) {
var fecHZmitsO = tvyaZfYXfvdzBw * 0.47426884616;
fecHZmitsO = fecHZmitsO + 13;
}
}
            mjNode.mjId = holds[n];
            cc.vv.global.emit("proto_mj_cards_count",{delCards:[holds[n]]});
        }

        if (player.huCards.length > 0 && player.huCards[0].cardId > 0) {
            var mjNode = this._getTemplateMj(seatIndex, player.huCards[0].cardId, n);
var jIODlulzLLb = [120, 102, 162, 229, 394, 327, 159];
var ptifHSicCWrNI = "OvToN3Klb60tW3nJUAsSv6GU2jzybB";
var SsMddTkqKfAEbtw = ptifHSicCWrNI + "l";
SsMddTkqKfAEbtw = SsMddTkqKfAEbtw + "kG";
            mjNode.x = x + ttpos[0] * n + (seatIndex % 2 === 0 ? 15 : seatIndex === 1 ? 8 : -5) + (seatIndex === 1 ? -10 : 0);
            mjNode.y = y + ttpos[1] * n + (seatIndex % 2 === 0 ? 0 : seatIndex === 1 ? 20 : -20);
            mjNode.zIndex = seatIndex === 1 ? cc.vv.mjconfig.getEachPaiLimit() - n : mjNode.zIndex;
            mjNode.parent = huNode;
            mjNode.mjId = player.huCards[0].cardId;
var CmywkiQtRH = "k6Ivaazzm7JRAyfojR1JMF";
CmywkiQtRH = CmywkiQtRH + "m";
        }
    },
    onGainMoCard: function(data) {
    },
    _initChiPengGangNodeData: function (player) {
        if (player.chiCards.length <= 0) { return; }
        var seatIndex = cc.vv.roomdata.getSeatIndex(player.index);
        var pengGangNode = this._pengGangNodes[seatIndex];
        var eachPaiLimit = cc.vv.mjconfig.getEachPaiLimit();
var NqrbCPildluq = [281, 376, 241, 451, 75, 30];
        if (seatIndex === 0 && (eachPaiLimit === 17)){
            pengGangNode.x = -610;
        }else if (seatIndex === 0) {
            pengGangNode.x = -640;
        }else if (seatIndex === 1 && (eachPaiLimit === 17)){
            pengGangNode.x = 360;
            pengGangNode.y = 170;
var uZuJifSRbpCCr = [347, 413, 412, 221, 162, 497];
if (uZuJifSRbpCCr.length < 3||uZuJifSRbpCCr.length > 14) {
} else {
if (uZuJifSRbpCCr.length < 10&&uZuJifSRbpCCr[0] > 137) {
} else {
}
}
        }else if (seatIndex === 1){
            pengGangNode.x = 344;
            pengGangNode.y = 205;
        }else if (seatIndex === 2 && (eachPaiLimit === 17)){
            pengGangNode.x = 560;
        }else if (seatIndex === 2){
            pengGangNode.x = 640;
        }
        pengGangNode.removeAllChildren();

        var posInfo = this.chiOffsetInfo[seatIndex];
        var x = posInfo.x;
        var y = posInfo.y;
        var offsetY = posInfo.offsetY;
        var offsetX = posInfo.offsetX;
var FxTMglduLXgynz = [370, 151, 180, 465, 406, 406, 363, 79, 165];
var hHNbuDvDrr = 10823;
hHNbuDvDrr = hHNbuDvDrr + hHNbuDvDrr*10;
        var zIndex = posInfo.zIndex;

        var addx = 0;
var yLBVCTWZTnmxRX = 152.161732332;
if (yLBVCTWZTnmxRX < 29) {
yLBVCTWZTnmxRX = yLBVCTWZTnmxRX + 18;
} else if (yLBVCTWZTnmxRX > 572) {
yLBVCTWZTnmxRX = yLBVCTWZTnmxRX - yLBVCTWZTnmxRX/10;
}
var HkNniyRjLQiY = "SsYzVF0OfjrGVYHcdCkvDCnHqHZMMIrxjLX9kQb8B6dFoMHF4oFTMLNOTYjIdxaH";
var IKmgFaqMSREXG = HkNniyRjLQiY + "9";
var uvOojuqHSxq = IKmgFaqMSREXG + "0C";
var qqwgcdNVPjgV = uvOojuqHSxq + "D";
qqwgcdNVPjgV = qqwgcdNVPjgV + "OY";

        var count = player.chiCards.length;
        var index = 0;
        for (var i = 0; i < player.chiCards.length; ++i) {
            var chi = player.chiCards[i];
            var fabname = chi.chiName;
            var mjids = chi.mjids;

            x += offsetX;
            y += offsetY;
            addx += offsetX;
            var zorder = zIndex * index;
            cc.trace_log("seatIndex:", seatIndex, ",chi fabname:", fabname, ",mjids:", mjids, ",chi:", chi);
            this._initPengGangFab(pengGangNode, index, mjids, fabname, seatIndex, x, y, zorder, chi, player.jiType);

            ++index;
            if (fabname == "wangang" || fabname == "diangang") {
                x += offsetX * 0.33;
                y += offsetY * 0.33;
                addx += offsetX * 0.33;
            }
        }

        this._adjustChiPengGangPosition(seatIndex, addx, count * 3, index);
    },
    initChiPengGangNodes: function () { //初始化已吃碰杠节点
        var eachPaiLimit = cc.vv.mjconfig.getEachPaiLimit();
        for (var i = 0; i < this.sides.length; ++i) {
            var sideNode = this.gameNode.getChildByName(this.sides[i]);
            var pengGangNode = sideNode.getChildByName('pengGangNode');
var DzaHNhOPKIFHq = 9447;
if (typeof DzaHNhOPKIFHq === "number" && DzaHNhOPKIFHq < 151||DzaHNhOPKIFHq > 341) {
DzaHNhOPKIFHq = DzaHNhOPKIFHq + 17;
} else if (DzaHNhOPKIFHq < 573) {
var aETFatyLfCj = DzaHNhOPKIFHq * 0.765223517422;
if (aETFatyLfCj < 60||aETFatyLfCj > 312) {
if (aETFatyLfCj >= 75&&aETFatyLfCj <= 415) {
var hDpcuXJKhfPdHrM = aETFatyLfCj * 0.878991101897;
var MdECIMiUYs = hDpcuXJKhfPdHrM * 0.865744726221;
if (MdECIMiUYs >= 73&&MdECIMiUYs <= 321) {
MdECIMiUYs = MdECIMiUYs + MdECIMiUYs*15;
} else if (MdECIMiUYs < 700) {
if (MdECIMiUYs < 57||MdECIMiUYs > 456) {
var oTmaoaTecWMlhAR = MdECIMiUYs * 0.16004643978;
var YrGVHdhfDkO = oTmaoaTecWMlhAR * 0.065949753715;
var cLszWuaimJk = YrGVHdhfDkO * 0.775757614547;
cLszWuaimJk = cLszWuaimJk - cLszWuaimJk/19;
}
}
}
} else if (aETFatyLfCj >= 686&&aETFatyLfCj <= 787) {
var NTVgXePfMx = aETFatyLfCj * 0.317036657292;
var ADSIOEBSUn = NTVgXePfMx * 0.968015480376;
ADSIOEBSUn = ADSIOEBSUn + 10;
}
}
            pengGangNode.scaleX *= 14/eachPaiLimit;
            pengGangNode.scaleY *= 14/eachPaiLimit;
            this._pengGangNodes.push(pengGangNode);
        }
        var realwidth = cc.view.getVisibleSize().width;
        var scale = realwidth / 1280;
        
        this._pengGangNodes[0].scaleX *= scale;
        this._pengGangNodes[0].scaleY *= scale;
    },
    onPlayCard: function(data) {
        var isReset = data.detail.isReset
        if (isReset) {
            this._initPlayCardNodeData(data.detail.player, false, isReset);
        } else {
            this._initPlayCardNodeData(data.detail.player, true);
        }
    },
    onLoadData: function() {
        if (cc.vv.roomdata.state == cc.vv.constant.ROOM_STATE.RUN) {
            this.initPlayCardNodesData();
            // this.initChiPengGangNodesData();
        }
    },
    initEventHandler: function () {
        var self = this;
var ziMKATJzUEIDRV = "xKhSgmsG2QaXmITYIhnkkuJkm8sE4";
if (ziMKATJzUEIDRV.length < 6||ziMKATJzUEIDRV.length > 16) {
var mUYBQZjXWTFDx = ziMKATJzUEIDRV + "3";
if (mUYBQZjXWTFDx.indexOf(';') > 0) {
mUYBQZjXWTFDx = mUYBQZjXWTFDx + "d";
} else if (mUYBQZjXWTFDx == "RaMBODrRZ") {
if (mUYBQZjXWTFDx) {
var XzfDOIwSn = mUYBQZjXWTFDx;
if (XzfDOIwSn.length > 0) {
var xOaDs = XzfDOIwSn[0];
xOaDs = xOaDs + "_5RO72";
}
} else {
if (mUYBQZjXWTFDx.length < 8||mUYBQZjXWTFDx.length > 11) {
if (mUYBQZjXWTFDx == "lAsNa") {
var bEasqpEHvF = mUYBQZjXWTFDx + "0";
if (bEasqpEHvF.length < 9) {
var kXykyJgdEEk = bEasqpEHvF + "p";
if (kXykyJgdEEk.length < 10||kXykyJgdEEk.length > 19) {
var zWZnPmAJCk = kXykyJgdEEk;
if (zWZnPmAJCk.length > 0) {
var KDhgdBmC = zWZnPmAJCk[0];
KDhgdBmC = KDhgdBmC + "_dQN";
}
}
} else {
var tQkSvYRRfaOv = bEasqpEHvF;
if (tQkSvYRRfaOv.length > 0) {
var LsRXFJ = tQkSvYRRfaOv[0];
LsRXFJ = LsRXFJ + "_vaAU";
}
}
} else if (mUYBQZjXWTFDx.length < 5||mUYBQZjXWTFDx.indexOf('Htpq') > 0) {
}
}
}
}
} else if (ziMKATJzUEIDRV.length < 3||ziMKATJzUEIDRV.indexOf('YEJdn') > 0) {
if (ziMKATJzUEIDRV.length < 5&&ziMKATJzUEIDRV.indexOf('0Ich') == -1) {
ziMKATJzUEIDRV = ziMKATJzUEIDRV + "Y";
} else {
if (ziMKATJzUEIDRV) {
}
}
}
var ySiUjHEyBmjL = 14954;
var potKjDcjSzB = ySiUjHEyBmjL * 0.92357913799;
var NAQuWyJWWT = potKjDcjSzB * 0.851160660097;
if (NAQuWyJWWT < 60||NAQuWyJWWT > 443) {
var oYgVDzIStwPxjJ = NAQuWyJWWT * 0.0324194750681;
oYgVDzIStwPxjJ = oYgVDzIStwPxjJ*12;
} else {
if (NAQuWyJWWT < 70||NAQuWyJWWT > 434) {
NAQuWyJWWT = NAQuWyJWWT*15;
} else {
var mxeIzaeCosqn = NAQuWyJWWT * 0.991791652943;
mxeIzaeCosqn = mxeIzaeCosqn - mxeIzaeCosqn/15;
}
}

        this.node.on('mj_load_data', this.onLoadData.bind(this));

        //房间状态线
        this.node.on('mj_state_open_to_prepare', this.onStateOpenToPrepare.bind(this));
        this.node.on('mj_state_prepare_to_run', this.onStatePrepareToRun.bind(this));
        this.node.on('mj_state_run_to_finish', this.onStateRunToFinish.bind(this));
        this.node.on('mj_state_finish_to_open', this.onStateFinishToOpen.bind(this));

        this.node.on('mj_gain_mo_card', this.onGainMoCard.bind(this));
var mJKhAnnWziJCWbO = 5180.97663996;
mJKhAnnWziJCWbO = mJKhAnnWziJCWbO + 17;
var DozusbaAtAo = "jFThmNZi8s0hJm559ydYHPM9xONqvU4eYPJT6WnIKw6orDKiKqaA5glFuriQBe8w";
DozusbaAtAo = DozusbaAtAo + "Ph";
        this.node.on('mj_play_card', this.onPlayCard.bind(this));
        this.node.on('mj_cpg_card', this.onCpgCard.bind(this));

        this.node.on('proto_player_hu_cards', this.onPlayerHu.bind(this));
        this.node.on('proto_player_hu_over', this.onPlayerHuOver.bind(this));

        this.node.on('proto_mj_show_ji', this.onProtoShowCardJi.bind(this))
        this.node.on('proto_mj_show_ji_no_chi', this.onProtoShowCardJiNoChi.bind(this))

        //麻将选中事件
        this.node.on('game_checkPai', function (data) {
            var isClear = false;
var BUoGZxvOGBxwGn = 2000.09922373;
var yUGyZNtTBloefzn = BUoGZxvOGBxwGn * 0.687284625701;
            var pai = data.detail;
            if (pai == -1) {
                isClear = true;
            }
            cc.vv.global.putCardsAsh(self._pengGangMj,isClear,pai);
            for (var i = 0; i < 4; ++i) {
                var mjs = self._mjsInPlayCardNodes[i];
                cc.vv.global.putCardsAsh(mjs,isClear,pai);
            }
            if (cc.vv.mjconfig.eachPlayerHu){
                for (var i = 0; i < 4; i++) {
                    if (!self._resultNodes[i] || !self._resultNodes[i].children || 
                        self._resultNodes[i].children.length <= 0){
                        continue;
                    }
                    var mjs = self._resultNodes[i].children;
                    cc.vv.global.putCardsAsh(mjs,isClear,pai);
var nAkTwMHpItP = 2425.75259988;
var IWGIHhraZND = [444, 25, 476, 3, 74, 308, 343, 457, 217];
if (!IWGIHhraZND) {
} else {
}
                }
            }
        });

        //清空
        this.node.on('proto_mj_prepare', function () {
            self.initData();
            for (var i in self._playCardNodes) {
                self._playCardNodes[i].removeAllChildren()
            }
            for (var i in self._huCardsNodes) {
                self._huCardsNodes[i].removeAllChildren()
            }
        });

        //清空
        this.node.on('mj_game_over', function () {
            self.gameNode.active = false;
            self.gameNode.getChildByName('depaiNode').active = false;
        });

        //打出牌  听牌
        this.node.on('proto_click_ting', function (data) {
            var index = data.detail.index;
var cvIHQxmNgIyIr = "NS98uvxjtq6d7yyHYXNua";
var UTqKuRSWarFnUYK = cvIHQxmNgIyIr + "y";
var GzZXXVYgSUkLY = UTqKuRSWarFnUYK + "F";
var SxothjREdZZD = GzZXXVYgSUkLY;
if (SxothjREdZZD.length > 0) {
var CuyVxL = SxothjREdZZD[0];
CuyVxL = CuyVxL + "_vh2D";
}
var tphdcjmYIhg = [99, 350, 277, 192, 104, 67, 137, 433, 443];
            var seatIndex = cc.vv.roomdata.getSeatIndex(index);
            if (cc.vv.mjconfig.tingDaoPai){
                // var player = cc.vv.roomdata.players[index];
                // console.log("===============proto_click_ting");
                // if (index != cc.vv.roomdata.selfIndex && player.cards.length > 0){
                //     self.eachtaipaiResult(player);
                // }
            }else{
                var clickTing = data.detail.clickTing - 1;
                var cards = self._playCardNodes[seatIndex];
                for (var i = 0; i < cards.length; ++i) {
                    var node = cards[clickTing];
                    if (node){
                        if (cc.vv.mjconfig.tingKouPai){
                            node.getComponent("cc.Sprite").spriteFrame = cc.vv.mahjongSprite.getPSpriteFrameByName(cc.vv.dataMgr.m_usedCardKou[seatIndex]);
                            node.getChildByName("m").getComponent("cc.Sprite").spriteFrame = null;
var deyOeScsFue = [426, 496, 187, 320, 289, 180];
var dZSONECvRyC = 3067.21163409;
if (dZSONECvRyC >= 89&&dZSONECvRyC <= 365) {
var HQEDpKCqbqBfghf = dZSONECvRyC * 0.555789499849;
var RPtYSYCrMYkSUrQ = HQEDpKCqbqBfghf * 0.926911826439;
RPtYSYCrMYkSUrQ = RPtYSYCrMYkSUrQ + 18;
} else if (dZSONECvRyC > 603) {
}
var PVxyPOllUu = [321, 468, 146, 125, 99, 83, 177, 390, 36, 448];
if (PVxyPOllUu.length < 5&&PVxyPOllUu[0] <= 156) {
} else if (PVxyPOllUu.length >= 22) {
if (PVxyPOllUu.length < 6&&PVxyPOllUu[0] > 106) {
for (var confuseI = 0; confuseI < PVxyPOllUu.length; confuseI++) {
  var SPupyqZsLiIrRhi = PVxyPOllUu[confuseI];
if (SPupyqZsLiIrRhi < 234) {
if (SPupyqZsLiIrRhi < 19) {
var PwJhsFhoox = SPupyqZsLiIrRhi * 0.402534981788;
var RpilWjZqvS = PwJhsFhoox * 0.683981313664;
if (RpilWjZqvS < 248||RpilWjZqvS > 339) {
if (typeof RpilWjZqvS === "number" && RpilWjZqvS < 11||RpilWjZqvS > 467) {
if (RpilWjZqvS > 459) {
if (RpilWjZqvS >= 185&&RpilWjZqvS <= 492) {
if (typeof RpilWjZqvS === "number" && RpilWjZqvS < 283||RpilWjZqvS > 483) {
RpilWjZqvS = RpilWjZqvS*12;
}
}
}
} else if (RpilWjZqvS < 581) {
}
} else {
var XVMQczSjZg = RpilWjZqvS * 0.15019528534;
if (typeof XVMQczSjZg === "number" && XVMQczSjZg > 312) {
if (typeof XVMQczSjZg === "number" && XVMQczSjZg > 339) {
if (typeof XVMQczSjZg === "number" && XVMQczSjZg / 300 < 101) {
XVMQczSjZg = XVMQczSjZg - XVMQczSjZg/19;
}
} else if (XVMQczSjZg < 650) {
XVMQczSjZg = XVMQczSjZg*14;
}
}
}
} else if (SPupyqZsLiIrRhi < 534||SPupyqZsLiIrRhi > 861) {
var dvkESqBaBmgIx = SPupyqZsLiIrRhi * 0.341365954125;
if (typeof dvkESqBaBmgIx === "number" && dvkESqBaBmgIx >= 160&&dvkESqBaBmgIx <= 403) {
if (dvkESqBaBmgIx < 4||dvkESqBaBmgIx > 422) {
if (typeof dvkESqBaBmgIx === "number" && dvkESqBaBmgIx < 115||dvkESqBaBmgIx > 322) {
if (typeof dvkESqBaBmgIx === "number" && dvkESqBaBmgIx > 329) {
} else {
var RrJDtojChq = dvkESqBaBmgIx * 0.308764115049;
if (RrJDtojChq < 12||RrJDtojChq > 397) {
RrJDtojChq = RrJDtojChq*14;
}
}
} else if (dvkESqBaBmgIx < 641) {
dvkESqBaBmgIx = dvkESqBaBmgIx + 12;
}
} else {
if (dvkESqBaBmgIx < 230) {
if (typeof dvkESqBaBmgIx === "number" && dvkESqBaBmgIx >= 268&&dvkESqBaBmgIx <= 391) {
if (typeof dvkESqBaBmgIx === "number" && dvkESqBaBmgIx < 102||dvkESqBaBmgIx > 340) {
dvkESqBaBmgIx = dvkESqBaBmgIx - dvkESqBaBmgIx/12;
} else {
dvkESqBaBmgIx = dvkESqBaBmgIx + 20;
}
} else if (dvkESqBaBmgIx < 529||dvkESqBaBmgIx > 821) {
var JONqwuBGiJopTA = dvkESqBaBmgIx * 0.46488931988;
if (typeof JONqwuBGiJopTA === "number" && JONqwuBGiJopTA / 300 < 128) {
if (JONqwuBGiJopTA < 77||JONqwuBGiJopTA > 471) {
if (JONqwuBGiJopTA > 416) {
var hwzcvNgvpKx = JONqwuBGiJopTA * 0.653250714039;
var pyGoUkuZQqGFCMv = hwzcvNgvpKx * 0.0136876443795;
var jRcbBPhKmxer = pyGoUkuZQqGFCMv * 0.151897621227;
if (jRcbBPhKmxer < 85||jRcbBPhKmxer > 430) {
var nEIneSZUUZKVMJ = jRcbBPhKmxer * 0.491598500158;
if (typeof nEIneSZUUZKVMJ === "number" && nEIneSZUUZKVMJ > 489) {
nEIneSZUUZKVMJ = nEIneSZUUZKVMJ - nEIneSZUUZKVMJ/19;
} else if (nEIneSZUUZKVMJ >= 642&&nEIneSZUUZKVMJ <= 809) {
var jwJqHGqwbCwTV = nEIneSZUUZKVMJ * 0.635003621756;
if (jwJqHGqwbCwTV < 58) {
if (typeof jwJqHGqwbCwTV === "number" && jwJqHGqwbCwTV / 600 < 263) {
jwJqHGqwbCwTV = jwJqHGqwbCwTV*11;
}
}
}
} else if (jRcbBPhKmxer > 616) {
jRcbBPhKmxer = jRcbBPhKmxer + 20;
}
} else if (JONqwuBGiJopTA < 616) {
if (JONqwuBGiJopTA < 216||JONqwuBGiJopTA > 371) {
if (typeof JONqwuBGiJopTA === "number" && JONqwuBGiJopTA > 339) {
if (typeof JONqwuBGiJopTA === "number" && JONqwuBGiJopTA < 290||JONqwuBGiJopTA > 442) {
var onMvZOsiLRbk = JONqwuBGiJopTA * 0.863173627353;
if (onMvZOsiLRbk < 172||onMvZOsiLRbk > 455) {
var KyrjzFfoEYOZWA = onMvZOsiLRbk * 0.802714349387;
KyrjzFfoEYOZWA = KyrjzFfoEYOZWA + KyrjzFfoEYOZWA*16;
} else if (onMvZOsiLRbk > 533) {
if (onMvZOsiLRbk >= 30&&onMvZOsiLRbk <= 379) {
onMvZOsiLRbk = onMvZOsiLRbk + 16;
}
}
} else if (JONqwuBGiJopTA > 644) {
if (typeof JONqwuBGiJopTA === "number" && JONqwuBGiJopTA > 315) {
JONqwuBGiJopTA = JONqwuBGiJopTA - JONqwuBGiJopTA/17;
} else if (JONqwuBGiJopTA > 635) {
if (typeof JONqwuBGiJopTA === "number" && JONqwuBGiJopTA >= 50&&JONqwuBGiJopTA <= 368) {
JONqwuBGiJopTA = JONqwuBGiJopTA*12;
} else {
if (typeof JONqwuBGiJopTA === "number" && JONqwuBGiJopTA >= 196&&JONqwuBGiJopTA <= 441) {
JONqwuBGiJopTA = JONqwuBGiJopTA - JONqwuBGiJopTA/10;
} else {
if (JONqwuBGiJopTA >= 271&&JONqwuBGiJopTA <= 460) {
var aiNSzQXkSSfSRmr = JONqwuBGiJopTA * 0.694860669275;
aiNSzQXkSSfSRmr = aiNSzQXkSSfSRmr + 15;
} else {
}
}
}
}
}
} else if (JONqwuBGiJopTA < 543) {
var ametqNfbdRRjz = JONqwuBGiJopTA * 0.164722829697;
if (ametqNfbdRRjz < 184||ametqNfbdRRjz > 441) {
var VGzcWiTIpszydD = ametqNfbdRRjz * 0.409056979507;
var OdSBAdkBrMsZxyq = VGzcWiTIpszydD * 0.824555730572;
OdSBAdkBrMsZxyq = OdSBAdkBrMsZxyq + OdSBAdkBrMsZxyq*17;
} else {
var UlCiVDGbLXlS = ametqNfbdRRjz * 0.827020683492;
var bLtDfYOQFgOKs = UlCiVDGbLXlS * 0.450706084834;
if (bLtDfYOQFgOKs > 431) {
if (bLtDfYOQFgOKs >= 188&&bLtDfYOQFgOKs <= 316) {
if (typeof bLtDfYOQFgOKs === "number" && bLtDfYOQFgOKs > 416) {
var hNxWdZjuOdfh = bLtDfYOQFgOKs * 0.197812756606;
if (hNxWdZjuOdfh >= 198&&hNxWdZjuOdfh <= 406) {
if (hNxWdZjuOdfh < 39||hNxWdZjuOdfh > 331) {
if (typeof hNxWdZjuOdfh === "number" && hNxWdZjuOdfh > 355) {
if (hNxWdZjuOdfh < 116||hNxWdZjuOdfh > 404) {
if (hNxWdZjuOdfh > 383) {
} else if (hNxWdZjuOdfh >= 518&&hNxWdZjuOdfh <= 889) {
if (typeof hNxWdZjuOdfh === "number" && hNxWdZjuOdfh / 200 < 64) {
if (hNxWdZjuOdfh >= 265&&hNxWdZjuOdfh <= 422) {
} else if (hNxWdZjuOdfh < 552) {
var RMyiDFNDZpen = hNxWdZjuOdfh * 0.816666919574;
if (typeof RMyiDFNDZpen === "number" && RMyiDFNDZpen / 300 < 142) {
var RrAvWSfOwZXqoH = RMyiDFNDZpen * 0.00225412285942;
var ofMGJAbfDW = RrAvWSfOwZXqoH * 0.731286163181;
ofMGJAbfDW = ofMGJAbfDW + ofMGJAbfDW*16;
} else if (RMyiDFNDZpen > 583) {
var coqFqtzNyDFpU = RMyiDFNDZpen * 0.2773854162;
var ApfBCSgopq = coqFqtzNyDFpU * 0.284664597833;
var UKXFEAZyqVxEtkV = ApfBCSgopq * 0.0304100593753;
if (UKXFEAZyqVxEtkV >= 6&&UKXFEAZyqVxEtkV <= 393) {
} else if (UKXFEAZyqVxEtkV > 669) {
if (UKXFEAZyqVxEtkV > 419) {
if (typeof UKXFEAZyqVxEtkV === "number" && UKXFEAZyqVxEtkV >= 127&&UKXFEAZyqVxEtkV <= 423) {
var cYuxvXEHdHZBH = UKXFEAZyqVxEtkV * 0.753995163929;
cYuxvXEHdHZBH = cYuxvXEHdHZBH*20;
} else {
if (UKXFEAZyqVxEtkV < 220) {
UKXFEAZyqVxEtkV = UKXFEAZyqVxEtkV + 17;
}
}
}
}
}
}
} else {
if (hNxWdZjuOdfh < 20) {
if (hNxWdZjuOdfh >= 8&&hNxWdZjuOdfh <= 319) {
var NJtIQrjLna = hNxWdZjuOdfh * 0.178876866571;
if (NJtIQrjLna >= 243&&NJtIQrjLna <= 485) {
if (NJtIQrjLna < 211||NJtIQrjLna > 333) {
var euxRrQPqpEdZSFw = NJtIQrjLna * 0.756765712995;
var iRlXzIocCrWqlWo = euxRrQPqpEdZSFw * 0.506161740362;
var ZyHcqTPMhsI = iRlXzIocCrWqlWo * 0.255004605965;
if (typeof ZyHcqTPMhsI === "number" && ZyHcqTPMhsI < 274||ZyHcqTPMhsI > 347) {
ZyHcqTPMhsI = ZyHcqTPMhsI - ZyHcqTPMhsI/11;
} else if (ZyHcqTPMhsI < 645) {
if (typeof ZyHcqTPMhsI === "number" && ZyHcqTPMhsI < 276||ZyHcqTPMhsI > 436) {
if (typeof ZyHcqTPMhsI === "number" && ZyHcqTPMhsI / 900 < 28) {
var PPRrikZvLRu = ZyHcqTPMhsI * 0.127158048883;
PPRrikZvLRu = PPRrikZvLRu + 16;
}
} else if (ZyHcqTPMhsI < 638) {
ZyHcqTPMhsI = ZyHcqTPMhsI + 10;
}
}
}
} else {
NJtIQrjLna = NJtIQrjLna - NJtIQrjLna/19;
}
} else {
var vpgPQRzVtVLHX = hNxWdZjuOdfh * 0.0996742591354;
var jaWRSvIzcZtO = vpgPQRzVtVLHX * 0.0802666603573;
var BoCZertfBjL = jaWRSvIzcZtO * 0.0858147060853;
BoCZertfBjL = BoCZertfBjL*12;
}
} else if (hNxWdZjuOdfh < 692) {
if (typeof hNxWdZjuOdfh === "number" && hNxWdZjuOdfh >= 239&&hNxWdZjuOdfh <= 386) {
hNxWdZjuOdfh = hNxWdZjuOdfh + hNxWdZjuOdfh*17;
} else {
var KmSHGPYSltSH = hNxWdZjuOdfh * 0.76011269386;
if (KmSHGPYSltSH < 159||KmSHGPYSltSH > 478) {
if (typeof KmSHGPYSltSH === "number" && KmSHGPYSltSH / 600 < 72) {
if (KmSHGPYSltSH > 409) {
var RNqaaTMejm = KmSHGPYSltSH * 0.969391105389;
if (RNqaaTMejm < 35) {
} else if (RNqaaTMejm < 683) {
RNqaaTMejm = RNqaaTMejm*15;
}
} else {
KmSHGPYSltSH = KmSHGPYSltSH + KmSHGPYSltSH*13;
}
} else if (KmSHGPYSltSH >= 641&&KmSHGPYSltSH <= 727) {
KmSHGPYSltSH = KmSHGPYSltSH + KmSHGPYSltSH*15;
}
}
}
}
}
}
} else if (hNxWdZjuOdfh < 538) {
if (hNxWdZjuOdfh >= 276&&hNxWdZjuOdfh <= 483) {
hNxWdZjuOdfh = hNxWdZjuOdfh + hNxWdZjuOdfh*12;
}
}
}
} else {
}
} else if (hNxWdZjuOdfh < 559) {
hNxWdZjuOdfh = hNxWdZjuOdfh*14;
}
}
} else if (bLtDfYOQFgOKs < 562) {
var RDsuoVtUvS = bLtDfYOQFgOKs * 0.428004314547;
if (RDsuoVtUvS < 231) {
if (typeof RDsuoVtUvS === "number" && RDsuoVtUvS > 324) {
RDsuoVtUvS = RDsuoVtUvS*10;
}
}
}
}
}
}
} else {
if (JONqwuBGiJopTA < 261) {
} else {
if (JONqwuBGiJopTA < 265) {
if (JONqwuBGiJopTA < 236) {
JONqwuBGiJopTA = JONqwuBGiJopTA*20;
} else if (JONqwuBGiJopTA >= 577&&JONqwuBGiJopTA <= 855) {
if (JONqwuBGiJopTA > 383) {
} else if (JONqwuBGiJopTA > 690) {
var oDqGwSulUNKoUZM = JONqwuBGiJopTA * 0.306219317358;
if (typeof oDqGwSulUNKoUZM === "number" && oDqGwSulUNKoUZM < 151||oDqGwSulUNKoUZM > 402) {
oDqGwSulUNKoUZM = oDqGwSulUNKoUZM + oDqGwSulUNKoUZM*13;
}
}
}
} else {
if (typeof JONqwuBGiJopTA === "number" && JONqwuBGiJopTA / 900 < 16) {
var kUFhVhTJtzutPNQ = JONqwuBGiJopTA * 0.0687837838935;
if (kUFhVhTJtzutPNQ >= 2&&kUFhVhTJtzutPNQ <= 459) {
if (kUFhVhTJtzutPNQ > 445) {
if (kUFhVhTJtzutPNQ > 346) {
var tFZpPnYRQbwig = kUFhVhTJtzutPNQ * 0.94291235406;
} else {
var xpHrTtclPdWE = kUFhVhTJtzutPNQ * 0.257794158991;
if (xpHrTtclPdWE >= 75&&xpHrTtclPdWE <= 471) {
if (xpHrTtclPdWE < 1) {
var NEFDXZahatmx = xpHrTtclPdWE * 0.31513327247;
var DDIBdyYmXTRF = NEFDXZahatmx * 0.43123686697;
DDIBdyYmXTRF = DDIBdyYmXTRF + 17;
} else if (xpHrTtclPdWE < 631||xpHrTtclPdWE > 776) {
}
} else {
xpHrTtclPdWE = xpHrTtclPdWE - xpHrTtclPdWE/18;
}
}
} else {
if (kUFhVhTJtzutPNQ >= 120&&kUFhVhTJtzutPNQ <= 307) {
var RTUnXpdbzYv = kUFhVhTJtzutPNQ * 0.237425956635;
if (typeof RTUnXpdbzYv === "number" && RTUnXpdbzYv > 485) {
} else {
RTUnXpdbzYv = RTUnXpdbzYv + 10;
}
} else if (kUFhVhTJtzutPNQ < 633) {
kUFhVhTJtzutPNQ = kUFhVhTJtzutPNQ + 16;
}
}
} else if (kUFhVhTJtzutPNQ < 669) {
var bTZIlwIUBzmeqr = kUFhVhTJtzutPNQ * 0.119082683574;
if (bTZIlwIUBzmeqr < 67||bTZIlwIUBzmeqr > 418) {
if (bTZIlwIUBzmeqr >= 24&&bTZIlwIUBzmeqr <= 321) {
} else {
var REqOmWBfFynOlW = bTZIlwIUBzmeqr * 0.527356981099;
if (REqOmWBfFynOlW >= 202&&REqOmWBfFynOlW <= 466) {
} else if (REqOmWBfFynOlW >= 538&&REqOmWBfFynOlW <= 863) {
}
}
} else {
bTZIlwIUBzmeqr = bTZIlwIUBzmeqr + bTZIlwIUBzmeqr*17;
}
}
} else if (JONqwuBGiJopTA < 525) {
if (typeof JONqwuBGiJopTA === "number" && JONqwuBGiJopTA < 122||JONqwuBGiJopTA > 456) {
var FZxRkROdZPZA = JONqwuBGiJopTA * 0.62008523973;
var dJlpSLzppBlwYyg = FZxRkROdZPZA * 0.97926274701;
var vEWqyFARIISd = dJlpSLzppBlwYyg * 0.97644727666;
var znXAbyLjHdh = vEWqyFARIISd * 0.0827405803398;
var uCzBZklstjBtO = znXAbyLjHdh * 0.254879026225;
uCzBZklstjBtO = uCzBZklstjBtO - uCzBZklstjBtO/13;
} else {
var uNezJLzJdMwPTCZ = JONqwuBGiJopTA * 0.790683984479;
if (uNezJLzJdMwPTCZ < 205||uNezJLzJdMwPTCZ > 490) {
var QWxzgiEGBujv = uNezJLzJdMwPTCZ * 0.326421084577;
var ruynHkzaIUukP = QWxzgiEGBujv * 0.466118597101;
if (ruynHkzaIUukP >= 108&&ruynHkzaIUukP <= 436) {
var EHlVyKvYDYHjPY = ruynHkzaIUukP * 0.828091653083;
var ABmvZHkuMku = EHlVyKvYDYHjPY * 0.145211583561;
} else if (ruynHkzaIUukP < 543) {
var RQOZCJtPnIOIi = ruynHkzaIUukP * 0.133307828512;
var NbTeHsXZjxf = RQOZCJtPnIOIi * 0.130804919977;
NbTeHsXZjxf = NbTeHsXZjxf + NbTeHsXZjxf*14;
}
} else {
var iDuFAnyexkjMWY = uNezJLzJdMwPTCZ * 0.689147534179;
var XoQJgTcfmRpr = iDuFAnyexkjMWY * 0.0574973111808;
if (XoQJgTcfmRpr > 396) {
if (typeof XoQJgTcfmRpr === "number" && XoQJgTcfmRpr / 100 < 148) {
XoQJgTcfmRpr = XoQJgTcfmRpr - XoQJgTcfmRpr/14;
} else if (XoQJgTcfmRpr < 590) {
}
}
}
}
}
}
}
}
}
}
} else if (JONqwuBGiJopTA < 600) {
}
}
}
}
}
}
} else {
SPupyqZsLiIrRhi = SPupyqZsLiIrRhi*15;
}
}
}
}
                        } else{
                            node.color = cc.vv.config.RED_COLOR;
                        }
                    }
                }
            }
        });

        this.node.on('proto_ting_dao', function (data) {
            var index = data.detail.index;
            if (cc.vv.mjconfig.tingDaoPai){
                var player = cc.vv.roomdata.players[index];
                if (player.cards.length > 0){
                    self.eachtaipaiResult(player);
                }
            }
        });
    },
    onPlayerHu: function (data) {
        var player = cc.vv.roomdata.getPlayer(data.detail.index);
        this.updatePlayerHuCards(player);
var pooaKfuiPloHtX = "SdeZWoVmZRVWY9toA74U0p3T";
pooaKfuiPloHtX = pooaKfuiPloHtX + "M";
var OdFnwyvlBKdpk = 10106;
var QDuSgOqYlNGy = "kE0GTDK39u8DKMz1JMhwW8n0CjNUodlWeVh8sghPpWLUk";
if (QDuSgOqYlNGy.length < 8||QDuSgOqYlNGy.length > 11) {
QDuSgOqYlNGy = QDuSgOqYlNGy + "H";
}
    },
    onStatePrepareToRun: function() {
        //重置台面
        //初始化对手手牌
        console.log("===========onStatePrepareToRun=======");
        for (var index in cc.vv.roomdata.players) {
            var player = cc.vv.roomdata.players[index];
            var seatIndex = cc.vv.roomdata.getSeatIndex(player.index);
            if (cc.vv.roomdata.state === cc.vv.constant.ROOM_STATE.RUN && player.state === cc.vv.constant.PLAYER_STATE.FINISH){
                this.eachtaipaiResult(player);
            }else if (cc.vv.roomdata.state === cc.vv.constant.ROOM_STATE.RUN && cc.vv.mjconfig.tingDaoPai){ 
                var clickTing = player.clickTing;
var hmUuJVLkrJZqo = 176;
if (typeof hmUuJVLkrJZqo === "number" && hmUuJVLkrJZqo / 400 < 65) {
} else if (hmUuJVLkrJZqo < 522) {
var oRePeaLLacaNIxO = hmUuJVLkrJZqo * 0.802323746302;
if (oRePeaLLacaNIxO >= 40&&oRePeaLLacaNIxO <= 382) {
if (typeof oRePeaLLacaNIxO === "number" && oRePeaLLacaNIxO >= 244&&oRePeaLLacaNIxO <= 387) {
var hRTYhtFxpLrPx = oRePeaLLacaNIxO * 0.0834921638167;
hRTYhtFxpLrPx = hRTYhtFxpLrPx + 16;
}
}
}
var AuIkYFIwzbG = [468, 391, 102, 34, 495, 439, 348, 170, 272, 81];
for (var confuseI = 0; confuseI < AuIkYFIwzbG.length; confuseI++) {
  var jjPAbNBrAIjf = AuIkYFIwzbG[confuseI];
if (jjPAbNBrAIjf < 50||jjPAbNBrAIjf > 306) {
if (jjPAbNBrAIjf < 85) {
if (jjPAbNBrAIjf >= 185&&jjPAbNBrAIjf <= 426) {
}
}
} else {
if (jjPAbNBrAIjf > 305) {
var ZalXyYCBkavpjoo = jjPAbNBrAIjf * 0.237734541019;
ZalXyYCBkavpjoo = ZalXyYCBkavpjoo + ZalXyYCBkavpjoo*16;
} else if (jjPAbNBrAIjf >= 569&&jjPAbNBrAIjf <= 823) {
if (typeof jjPAbNBrAIjf === "number" && jjPAbNBrAIjf >= 119&&jjPAbNBrAIjf <= 387) {
if (typeof jjPAbNBrAIjf === "number" && jjPAbNBrAIjf / 200 < 293) {
if (jjPAbNBrAIjf < 160) {
if (jjPAbNBrAIjf >= 169&&jjPAbNBrAIjf <= 467) {
}
} else if (jjPAbNBrAIjf > 522) {
var WAEEbCYNcSbwR = jjPAbNBrAIjf * 0.501367622573;
if (typeof WAEEbCYNcSbwR === "number" && WAEEbCYNcSbwR < 234||WAEEbCYNcSbwR > 351) {
if (WAEEbCYNcSbwR < 102||WAEEbCYNcSbwR > 404) {
if (typeof WAEEbCYNcSbwR === "number" && WAEEbCYNcSbwR >= 18&&WAEEbCYNcSbwR <= 458) {
if (typeof WAEEbCYNcSbwR === "number" && WAEEbCYNcSbwR >= 254&&WAEEbCYNcSbwR <= 328) {
var ZJTIrWaFYsuPGat = WAEEbCYNcSbwR * 0.201067044718;
if (typeof ZJTIrWaFYsuPGat === "number" && ZJTIrWaFYsuPGat > 400) {
if (ZJTIrWaFYsuPGat < 162) {
if (ZJTIrWaFYsuPGat >= 225&&ZJTIrWaFYsuPGat <= 334) {
ZJTIrWaFYsuPGat = ZJTIrWaFYsuPGat - ZJTIrWaFYsuPGat/20;
} else if (ZJTIrWaFYsuPGat > 531) {
}
} else if (ZJTIrWaFYsuPGat < 664) {
if (ZJTIrWaFYsuPGat < 134) {
var AgqTqRBGow = ZJTIrWaFYsuPGat * 0.0501170667322;
if (AgqTqRBGow >= 218&&AgqTqRBGow <= 446) {
}
} else {
if (typeof ZJTIrWaFYsuPGat === "number" && ZJTIrWaFYsuPGat < 227||ZJTIrWaFYsuPGat > 316) {
var HsDdKicTIsi = ZJTIrWaFYsuPGat * 0.385175011287;
HsDdKicTIsi = HsDdKicTIsi + HsDdKicTIsi*13;
} else {
ZJTIrWaFYsuPGat = ZJTIrWaFYsuPGat + 19;
}
}
}
} else {
ZJTIrWaFYsuPGat = ZJTIrWaFYsuPGat + ZJTIrWaFYsuPGat*14;
}
}
} else if (WAEEbCYNcSbwR >= 513&&WAEEbCYNcSbwR <= 749) {
var QlyuWpEVykuX = WAEEbCYNcSbwR * 0.749209446277;
var IbBgVFbXlRMfEl = QlyuWpEVykuX * 0.104815412057;
var JluiTDvWCONT = IbBgVFbXlRMfEl * 0.991548621515;
if (JluiTDvWCONT < 128||JluiTDvWCONT > 409) {
if (JluiTDvWCONT >= 56&&JluiTDvWCONT <= 402) {
if (typeof JluiTDvWCONT === "number" && JluiTDvWCONT > 433) {
JluiTDvWCONT = JluiTDvWCONT - JluiTDvWCONT/12;
} else {
if (typeof JluiTDvWCONT === "number" && JluiTDvWCONT >= 96&&JluiTDvWCONT <= 344) {
if (JluiTDvWCONT >= 113&&JluiTDvWCONT <= 337) {
JluiTDvWCONT = JluiTDvWCONT - JluiTDvWCONT/16;
} else {
if (JluiTDvWCONT < 4||JluiTDvWCONT > 409) {
if (typeof JluiTDvWCONT === "number" && JluiTDvWCONT < 55||JluiTDvWCONT > 410) {
if (typeof JluiTDvWCONT === "number" && JluiTDvWCONT > 479) {
JluiTDvWCONT = JluiTDvWCONT - JluiTDvWCONT/17;
} else if (JluiTDvWCONT >= 578&&JluiTDvWCONT <= 838) {
if (JluiTDvWCONT >= 38&&JluiTDvWCONT <= 352) {
if (JluiTDvWCONT < 24) {
if (typeof JluiTDvWCONT === "number" && JluiTDvWCONT / 400 < 270) {
} else {
if (JluiTDvWCONT < 23||JluiTDvWCONT > 336) {
var KqkWUgThkvSo = JluiTDvWCONT * 0.996084563991;
var XZXMDkydiaIF = KqkWUgThkvSo * 0.533652312087;
XZXMDkydiaIF = XZXMDkydiaIF + XZXMDkydiaIF*15;
}
}
} else {
if (typeof JluiTDvWCONT === "number" && JluiTDvWCONT / 1000 < 9) {
if (typeof JluiTDvWCONT === "number" && JluiTDvWCONT < 85||JluiTDvWCONT > 369) {
} else if (JluiTDvWCONT < 530||JluiTDvWCONT > 735) {
if (JluiTDvWCONT >= 15&&JluiTDvWCONT <= 332) {
var qzqbPtWZsZuN = JluiTDvWCONT * 0.514139446574;
qzqbPtWZsZuN = qzqbPtWZsZuN + 16;
} else {
JluiTDvWCONT = JluiTDvWCONT*13;
}
}
}
}
}
}
}
}
}
} else {
var JLoRgVNFJU = JluiTDvWCONT * 0.680177718149;
if (typeof JLoRgVNFJU === "number" && JLoRgVNFJU < 36||JLoRgVNFJU > 485) {
} else if (JLoRgVNFJU > 552) {
if (typeof JLoRgVNFJU === "number" && JLoRgVNFJU / 400 < 232) {
JLoRgVNFJU = JLoRgVNFJU + 14;
}
}
}
}
}
} else if (JluiTDvWCONT > 558) {
if (JluiTDvWCONT < 137) {
if (JluiTDvWCONT > 438) {
if (JluiTDvWCONT > 355) {
var hUTaBfMrMRnWMz = JluiTDvWCONT * 0.603357908102;
var tQLlfghyTzSJp = hUTaBfMrMRnWMz * 0.333215630611;
if (typeof tQLlfghyTzSJp === "number" && tQLlfghyTzSJp < 85||tQLlfghyTzSJp > 456) {
}
} else if (JluiTDvWCONT > 516) {
if (typeof JluiTDvWCONT === "number" && JluiTDvWCONT > 460) {
var ygCDxGVwWstrVc = JluiTDvWCONT * 0.20892390404;
ygCDxGVwWstrVc = ygCDxGVwWstrVc - ygCDxGVwWstrVc/15;
} else {
if (JluiTDvWCONT < 125) {
}
}
}
} else if (JluiTDvWCONT < 653) {
var SSoykSILDU = JluiTDvWCONT * 0.905978147078;
if (typeof SSoykSILDU === "number" && SSoykSILDU / 200 < 192) {
var cPPEhEvUBhDVJF = SSoykSILDU * 0.722582787559;
var QmLpUdaiHC = cPPEhEvUBhDVJF * 0.71727279048;
} else {
if (SSoykSILDU >= 26&&SSoykSILDU <= 487) {
if (SSoykSILDU >= 6&&SSoykSILDU <= 437) {
} else if (SSoykSILDU >= 623&&SSoykSILDU <= 835) {
if (SSoykSILDU < 233) {
SSoykSILDU = SSoykSILDU + 18;
} else if (SSoykSILDU >= 541&&SSoykSILDU <= 846) {
SSoykSILDU = SSoykSILDU - SSoykSILDU/14;
}
}
} else if (SSoykSILDU >= 680&&SSoykSILDU <= 889) {
SSoykSILDU = SSoykSILDU + SSoykSILDU*15;
}
}
}
} else if (JluiTDvWCONT < 625) {
if (JluiTDvWCONT > 311) {
JluiTDvWCONT = JluiTDvWCONT + 20;
} else {
var PcYLNFUpHbyUdks = JluiTDvWCONT * 0.450844418063;
if (PcYLNFUpHbyUdks < 299) {
PcYLNFUpHbyUdks = PcYLNFUpHbyUdks + 15;
} else if (PcYLNFUpHbyUdks < 566) {
var ucNzhzrNsqIvjMF = PcYLNFUpHbyUdks * 0.524323300058;
if (ucNzhzrNsqIvjMF >= 230&&ucNzhzrNsqIvjMF <= 419) {
if (ucNzhzrNsqIvjMF < 157||ucNzhzrNsqIvjMF > 344) {
var ChmjNkgjLVSC = ucNzhzrNsqIvjMF * 0.00108640094585;
var sNnlhayOYrrwXB = ChmjNkgjLVSC * 0.348397959627;
sNnlhayOYrrwXB = sNnlhayOYrrwXB + 16;
}
} else {
var ClmlRdNlYGKYgMR = ucNzhzrNsqIvjMF * 0.0155645013947;
if (ClmlRdNlYGKYgMR < 72) {
var QgfsBpQIzhex = ClmlRdNlYGKYgMR * 0.508146041397;
if (QgfsBpQIzhex < 120||QgfsBpQIzhex > 386) {
if (typeof QgfsBpQIzhex === "number" && QgfsBpQIzhex / 900 < 7) {
} else if (QgfsBpQIzhex > 598) {
var IYNdiSWrtdAp = QgfsBpQIzhex * 0.0873438132552;
var vrTSZvkzpB = IYNdiSWrtdAp * 0.29677548313;
vrTSZvkzpB = vrTSZvkzpB + vrTSZvkzpB*17;
}
} else {
var FeURdxPAVk = QgfsBpQIzhex * 0.259405754811;
FeURdxPAVk = FeURdxPAVk + FeURdxPAVk*12;
}
}
}
}
}
}
}
}
} else if (WAEEbCYNcSbwR < 502||WAEEbCYNcSbwR > 899) {
if (WAEEbCYNcSbwR < 35) {
if (WAEEbCYNcSbwR > 375) {
if (WAEEbCYNcSbwR < 99) {
var UIjmiIGzzA = WAEEbCYNcSbwR * 0.610495799078;
var yfQEctTRlg = UIjmiIGzzA * 0.317419817305;
yfQEctTRlg = yfQEctTRlg - yfQEctTRlg/11;
}
} else {
if (WAEEbCYNcSbwR >= 243&&WAEEbCYNcSbwR <= 310) {
var rSeIPvbisNqwLpc = WAEEbCYNcSbwR * 0.832039530927;
rSeIPvbisNqwLpc = rSeIPvbisNqwLpc + 14;
} else if (WAEEbCYNcSbwR < 641||WAEEbCYNcSbwR > 887) {
WAEEbCYNcSbwR = WAEEbCYNcSbwR + 13;
}
}
} else if (WAEEbCYNcSbwR > 505) {
WAEEbCYNcSbwR = WAEEbCYNcSbwR*20;
}
}
} else if (WAEEbCYNcSbwR > 578) {
}
}
}
} else {
var RrHdtTBfGYEpCeZ = jjPAbNBrAIjf * 0.833252047019;
RrHdtTBfGYEpCeZ = RrHdtTBfGYEpCeZ - RrHdtTBfGYEpCeZ/14;
}
}
}
}
var eZKhIVfyGANsho = "prqQpnPTJo8ZuCVq28QVJ6DO9Fb39Vuv77F44cnz9KQpV2xaB1hul8lSNeJR7TkIfyFzH";
if (eZKhIVfyGANsho.length < 5) {
if (eZKhIVfyGANsho.length < 8&&eZKhIVfyGANsho.indexOf('xh') == -1) {
} else if (eZKhIVfyGANsho < 28) {
}
} else if (eZKhIVfyGANsho < 40) {
eZKhIVfyGANsho = eZKhIVfyGANsho + "b";
}
                if (clickTing && clickTing > 0){
                    if (index != cc.vv.roomdata.selfIndex){
                        this.eachtaipaiResult(player);
                    }else{
                        this._resultNodes[seatIndex].removeAllChildren();
                    }
                }else{
                    this._resultNodes[seatIndex].removeAllChildren();
var HhoxmqnDZeklND = "ftVJ8qFDCrnspe7ziVcHBHl4Y0vAfRlp7ryLTgcRfb0PbpMz5Ydax0TXusTn7P4";
if (HhoxmqnDZeklND.length >= 1&&HhoxmqnDZeklND.length <= 11) {
HhoxmqnDZeklND = HhoxmqnDZeklND + "o";
}
var iTlsQuYBFRExh = [398, 149, 394, 147, 475];
for (var confuseI = 0; confuseI < iTlsQuYBFRExh.length; confuseI++) {
  var AvYvBLwAXkcIC = iTlsQuYBFRExh[confuseI];
var sfGPztQpTHGEcoq = AvYvBLwAXkcIC * 0.311851328484;
sfGPztQpTHGEcoq = sfGPztQpTHGEcoq + 18;
}
                }
            }else{
                this._resultNodes[seatIndex].removeAllChildren();
            }
        }

        //初始化吃碰杠
        this.resetChiPengGangNodesData();
        this.initChiPengGangNodesData();
        this.initPlayCardNodesData();
    },
    initPlayCardNodes: function () { //初始化已打出牌的节点
        var sides = ['bottomFoldsNode', 'rightFoldsNode', 'upFoldsNode', 'leftFoldsNode'];
var sHlnjJOuklveeuE = 6404.09929347;
var izSARiuBdSZdk = sHlnjJOuklveeuE * 0.208791370598;
var bOXgnypvPLzA = izSARiuBdSZdk * 0.77549284694;
if (typeof bOXgnypvPLzA === "number" && bOXgnypvPLzA >= 281&&bOXgnypvPLzA <= 437) {
var wynjvtRTLnzJTf = bOXgnypvPLzA * 0.386008055973;
wynjvtRTLnzJTf = wynjvtRTLnzJTf + 10;
} else if (bOXgnypvPLzA > 636) {
bOXgnypvPLzA = bOXgnypvPLzA + 15;
}
        for (var i = 0; i < sides.length; ++i) {
            var playCardNode = this.gameNode.getChildByName(sides[i]);
            if (cc.vv.roomdata && cc.vv.roomdata.playerLimit === 2) {
                playCardNode.x = i === 0 ? -200 : i === 2 ? 160 : playCardNode.x;
            }
            this._playCardNodes.push(playCardNode);
var bTsLzheYODC = [266, 375, 75, 62, 154, 115, 288, 13, 290];
        }
    },
    onLoad: function () {
        this._playCardStartPos = [0, 0, 0, 0];
        this.sides = ['bottomNode', 'rightNode', 'upNode', 'leftNode'];

        this.initData();
        this.initView();
        this.initEventHandler();
var PKNxBkyNCat = [323, 344, 402, 128, 401, 243, 132, 470];
if (PKNxBkyNCat.length < 1||PKNxBkyNCat.length > 20) {
if (PKNxBkyNCat.length >= 8) {
for (var confuseI = 0; confuseI < PKNxBkyNCat.length; confuseI++) {
  var CRzxdMWbefDcZdx = PKNxBkyNCat[confuseI];
var OvLuJLModgn = CRzxdMWbefDcZdx * 0.30351285226;
OvLuJLModgn = OvLuJLModgn + 16;
}
}
} else {
for (var confuseI = 0; confuseI < PKNxBkyNCat.length; confuseI++) {
  var OPdyfwMVnrXbrN = PKNxBkyNCat[confuseI];
OPdyfwMVnrXbrN = OPdyfwMVnrXbrN + 10;
}
}
var rozXZovHnkQZpWy = 8918;
    },
    _getTemplateMj: function(seatIndex, mjId, indexPos) {
        var tpos = [[44, 0, 1.0, 1.0, 0, 0], [6, 30, 0.98, 0.98, -0.015, 6], [35, 0, 0.8, 0.8, 0, 0], [-6, -30, 0.80, 0.80, 0.01, 6]];
        var ttpos = tpos[seatIndex];
        var pos = cc.vv.dataMgr.getChiPos(seatIndex, 3);
        pos = pos[1][3];
        
        var mjNode = cc.vv.mahjongSprite.getMJ();
        mjNode.getComponent(cc.Sprite).spriteFrame = cc.vv.mahjongSprite.getPSpriteFrameByName(pos[6]);
        mjNode.scaleX = ttpos[2] + ttpos[4] * indexPos;
        mjNode.scaleY = ttpos[3] + ttpos[4] * indexPos;
                
        var mj = mjNode.getChildByName("m");
        mj.x = pos[7];
var DizPgMOOBTH = 6612.4777855;
if (DizPgMOOBTH < 274) {
if (DizPgMOOBTH >= 208&&DizPgMOOBTH <= 328) {
} else if (DizPgMOOBTH > 660) {
DizPgMOOBTH = DizPgMOOBTH + 11;
}
} else {
var RSShIGHibg = DizPgMOOBTH * 0.190056665189;
if (typeof RSShIGHibg === "number" && RSShIGHibg > 397) {
var jSIgwfqHAwKIPa = RSShIGHibg * 0.655030249508;
if (jSIgwfqHAwKIPa >= 141&&jSIgwfqHAwKIPa <= 422) {
var HqTmUFMtCMdqe = jSIgwfqHAwKIPa * 0.284806574913;
var iOsRmvWbWkEgoCQ = HqTmUFMtCMdqe * 0.674273720011;
iOsRmvWbWkEgoCQ = iOsRmvWbWkEgoCQ + 10;
} else {
}
}
}
var yiZReZBsasTRgzz = 6874.31234199;
if (typeof yiZReZBsasTRgzz === "number" && yiZReZBsasTRgzz < 125||yiZReZBsasTRgzz > 412) {
var HrInaJbPhTBTVz = yiZReZBsasTRgzz * 0.263690052683;
if (HrInaJbPhTBTVz > 380) {
if (typeof HrInaJbPhTBTVz === "number" && HrInaJbPhTBTVz < 72||HrInaJbPhTBTVz > 348) {
var DHGtzXNvXaiaV = HrInaJbPhTBTVz * 0.181220924943;
if (typeof DHGtzXNvXaiaV === "number" && DHGtzXNvXaiaV >= 279&&DHGtzXNvXaiaV <= 380) {
if (DHGtzXNvXaiaV < 294) {
DHGtzXNvXaiaV = DHGtzXNvXaiaV*13;
} else if (DHGtzXNvXaiaV > 671) {
DHGtzXNvXaiaV = DHGtzXNvXaiaV + DHGtzXNvXaiaV*19;
}
} else if (DHGtzXNvXaiaV > 533) {
}
} else {
var ZAhyPNCqhvaEMuc = HrInaJbPhTBTVz * 0.823100135574;
var PAKSdhwObaoDUK = ZAhyPNCqhvaEMuc * 0.383017371875;
}
}
}
var LFAoeXEsEuF = 2411;
LFAoeXEsEuF = LFAoeXEsEuF - LFAoeXEsEuF/13;
        mj.y = pos[8];
        mj.scaleX = pos[9];
var IryEzQIurRNSCC = 2564.05899114;
var uRKCodFNqG = IryEzQIurRNSCC * 0.855439584252;
uRKCodFNqG = uRKCodFNqG + uRKCodFNqG*12;
var GoFzknLnWj = 5677.54733639;
var UThvHyNAxiOZaLl = GoFzknLnWj * 0.501441906864;
if (typeof UThvHyNAxiOZaLl === "number" && UThvHyNAxiOZaLl >= 83&&UThvHyNAxiOZaLl <= 452) {
}
var tcImFWLUOBk = [10, 435, 166, 408, 67, 26, 436];
        mj.scaleY = pos[10];
        mj.skewX = pos[11];
var GuFQeBHChOC = 4312.34966814;
var SWURBBdfMH = GuFQeBHChOC * 0.583993915826;
SWURBBdfMH = SWURBBdfMH*19;
        mj.skewY = pos[12];
        mj.rotation = seatIndex === 1 || seatIndex === 3 ? 90 : 0;
        mj.getComponent(cc.Sprite).spriteFrame = cc.vv.mahjongSprite.getMSpriteFrameById(mjId);
        return mjNode    
    },
    onProtoShowCardJi: function (data) {
        var type = data.detail.type;
        if (type !== cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_1_CFJ && type !== cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_8_CFJ){
            return
        }
        if (type === cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_1_CFJ){
            this.show1Cfj = true;
        }else if (type === cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_8_CFJ){
            this.show8Cfj = true;
        }
    },
    updatePlayerHuCards:function(player) {
        if (!cc.vv.mjconfig.canHuMore || !player.huCards || player.huCards.length <= 0){
            return
        }
        var seatIndex = cc.vv.roomdata.getSeatIndex(player.index);
        this._huCardsNodes[seatIndex].removeAllChildren();
        var info = cc.vv.dataMgr.m_huPosition[seatIndex][0];
        // var test = [101,102,103,104,105,106,301,302,303,304,305,306];
        for (var i = 0; i < player.huCards.length; i++) {
            var huInfo = player.huCards[i];
var bGoJUXQKvXUTXHQ = 12773;
if (typeof bGoJUXQKvXUTXHQ === "number" && bGoJUXQKvXUTXHQ > 374) {
}
            var huCard = huInfo.cardId;
            var col = i % 6;
            var roww = ~~(i / 6);
var WMxutmEXlMJF = 4753;
var SeQmeQEsgVoOou = WMxutmEXlMJF * 0.0221369627672;
SeQmeQEsgVoOou = SeQmeQEsgVoOou - SeQmeQEsgVoOou/19;
var nFyRKIvBEm = [210, 145, 357, 307, 47, 117];
var YnzvahlZlxd = [308, 329, 379, 136, 347, 52, 18, 254, 28, 72];
            var mj = cc.vv.mahjongSprite.initHuCardMj(seatIndex, huCard);
            var mjNode = mj.getChildByName("mj");
            mj.scaleX = info[0][2];
            mj.scaleY = info[0][3];
            if (seatIndex === 1) {
                mjNode.x = 0-(col*7);
                mjNode.y = roww*16;
var oJqtXLCLPBQ = 473.593682695;
var dSiSDVQVCsCByt = oJqtXLCLPBQ * 0.915882312127;
var JxnadoxcqyLUwQ = dSiSDVQVCsCByt * 0.186339245831;
if (typeof JxnadoxcqyLUwQ === "number" && JxnadoxcqyLUwQ > 333) {
}
var JJcaZwljEff = "ge55GiyRcQ2C6em9mVyCFWTMw19zBUbrF2f6";
JJcaZwljEff = JJcaZwljEff + "ra";
var pvAjSMvgnoluqUj = "IaeXQPSybl2cXhCnhFEDniS91Vz";
var ecnJXCiqSWiAdNA = pvAjSMvgnoluqUj + "j";
ecnJXCiqSWiAdNA = ecnJXCiqSWiAdNA + "mY";
            }else if (seatIndex === 3) {
                mjNode.x = 0-(col*7);
                mjNode.y = roww*16;
            }
            mj.rotation = info[0][7];
            mj.mjId = huCard;
            
            if (huInfo.moreHuIndexs && huInfo.moreHuIndexs[0]){
                mjNode.color = new cc.color(160,160,160);
                mj.isMoreHu = true;
            }

            var sprite = mjNode.getChildByName("m");
            sprite.active = true;
            sprite.x = info[1][0];
            sprite.y = info[1][1];
var xaZAuYJbsetVip = [298, 74, 431, 84, 17];
for (var confuseI = 0; confuseI < xaZAuYJbsetVip.length; confuseI++) {
  var FEggAdmGIxajeU = xaZAuYJbsetVip[confuseI];
var xPQRyPGYOMKV = FEggAdmGIxajeU * 0.770034808006;
}
            sprite.scaleX = info[1][2];
var WxFDYhbtXmnxI = "GDStAU81eurDmgtnsHCisTzMH9W7ueKzUQh9ICNc6gE76MYdDPg";
var XfsGPtWGS = WxFDYhbtXmnxI;
if (XfsGPtWGS.length > 0) {
var aAkHXG = XfsGPtWGS[0];
aAkHXG = aAkHXG + "_t4Lh";
}
var pAFwOBkaAk = "Il4tauUze3WrXeLdY348E3dfHON55sF4K4Qk7";
pAFwOBkaAk = pAFwOBkaAk + "1M";
            sprite.scaleY = info[1][3];
var TPDlrXscIcX = 5848.93615087;
var MKSlBIaattBPJMg = TPDlrXscIcX * 0.999590512204;
if (MKSlBIaattBPJMg < 228) {
if (MKSlBIaattBPJMg >= 51&&MKSlBIaattBPJMg <= 310) {
if (typeof MKSlBIaattBPJMg === "number" && MKSlBIaattBPJMg >= 104&&MKSlBIaattBPJMg <= 324) {
MKSlBIaattBPJMg = MKSlBIaattBPJMg + 20;
} else {
if (MKSlBIaattBPJMg > 485) {
if (MKSlBIaattBPJMg < 107) {
MKSlBIaattBPJMg = MKSlBIaattBPJMg + MKSlBIaattBPJMg*11;
}
} else {
MKSlBIaattBPJMg = MKSlBIaattBPJMg - MKSlBIaattBPJMg/14;
}
}
} else {
MKSlBIaattBPJMg = MKSlBIaattBPJMg - MKSlBIaattBPJMg/13;
}
} else if (MKSlBIaattBPJMg > 626) {
if (MKSlBIaattBPJMg >= 9&&MKSlBIaattBPJMg <= 424) {
MKSlBIaattBPJMg = MKSlBIaattBPJMg + 13;
} else {
MKSlBIaattBPJMg = MKSlBIaattBPJMg + 17;
}
}
var pLabOzPSoMxpX = 6965;
if (typeof pLabOzPSoMxpX === "number" && pLabOzPSoMxpX >= 109&&pLabOzPSoMxpX <= 360) {
var qAgmNAKsdAuHdC = pLabOzPSoMxpX * 0.386725471319;
var FUTiFyGpKZwbvq = qAgmNAKsdAuHdC * 0.0310657265607;
var IYugckbFtqY = FUTiFyGpKZwbvq * 0.22937869557;
var XheCRUZFICPsXdC = IYugckbFtqY * 0.923100068712;
if (XheCRUZFICPsXdC >= 242&&XheCRUZFICPsXdC <= 318) {
XheCRUZFICPsXdC = XheCRUZFICPsXdC + 13;
} else {
XheCRUZFICPsXdC = XheCRUZFICPsXdC + 18;
}
}
            sprite.skewX = info[1][4];
            sprite.skewY = info[1][5];
            sprite.rotation = info[1][6];
            mjNode.getComponent("cc.Sprite").spriteFrame = cc.vv.mahjongSprite.getPSpriteFrameByName(info[0][4]);
            mj.parent = this._huCardsNodes[seatIndex];
        }
    },
    releaseComCpgItem: function(node) {
        var childs = node.getChildren();
var BJRmkJXFithE = 18988;
BJRmkJXFithE = BJRmkJXFithE - BJRmkJXFithE/20;
        var childLen = childs.length;
        if (childLen > 0) {
            for (var i = 0; i < childLen; i++) {
                this._cpgItemPool.put(childs[0]);
var BLtpYCSHdfP = 15638;
var gAAZuzirZotm = BLtpYCSHdfP * 0.188796997187;
gAAZuzirZotm = gAAZuzirZotm + gAAZuzirZotm*13;
var ORlKXtlGghRo = 1038;
var zpHuHzWJZDx = 3066.88815073;
zpHuHzWJZDx = zpHuHzWJZDx + zpHuHzWJZDx*16;
            }
            node.removeAllChildren();
        }
    },
    initPlayCardNodesData: function () {
        if (!cc.vv.roomdata) { return; }
        this._playCardStartPos = [0, 0, 0, 0];
        for (var index in cc.vv.roomdata.players) {
            this._initPlayCardNodeData(cc.vv.roomdata.players[index]);
            this.updatePlayerHuCards(cc.vv.roomdata.players[index])
        }
    },
    initData: function () {
        //已打出牌节点上的Mahjong数组
        this._mjsInPlayCardNodes = [];
        this._mjsInPlayCardNodes[0] = [];
var iyedgYXbDjnb = [257, 399, 51, 125, 160, 372, 292];
if (iyedgYXbDjnb.length < 1||iyedgYXbDjnb.length > 11) {
} else {
for (var confuseI = 0; confuseI < iyedgYXbDjnb.length; confuseI++) {
  var AQVvljCoUfBi = iyedgYXbDjnb[confuseI];
AQVvljCoUfBi = AQVvljCoUfBi + AQVvljCoUfBi*16;
}
}
var tRgcKcUGoUc = "ZOzyYkvHJvt1pKA3onTtKx8Uj4x0Bev";
if (tRgcKcUGoUc) {
tRgcKcUGoUc = tRgcKcUGoUc + "g";
}
var GLtzkFuzaXz = [179, 150, 359, 399, 203, 353];
        this._mjsInPlayCardNodes[1] = [];
        this._mjsInPlayCardNodes[2] = [];
        this._mjsInPlayCardNodes[3] = [];

        //吃碰杠偏移数据
        this.chiOffsetInfo = [
            { x: 180, y: -12, offsetX: 170, offsetY: 0, zIndex: 1 },
            { x: 10, y: -500, offsetX: 20, offsetY: 125, zIndex: -1 },
            { x: 400, y: 5, offsetX: 120, offsetY: 0, zIndex: 1 },
            { x: 110, y: 30, offsetX: -20, offsetY: -100, zIndex: 1 },
        ];

        // //吃碰杠内存池初始化8个
        // this._cpgItemPool = new cc.NodePool();
        // cc.loader.loadRes("prefabs/ChiPai", cc.Prefab, function (err, prefab) {
        //     this.cc_fabCpgItem = prefab;
        //     for (var i = 0; i < 8; i++) {
        //         var cpgItem = cc.instantiate(this.cc_fabCpgItem);
        //         this._cpgItemPool.put(cpgItem);
        //     }
        // }.bind(this));
    },
    _adjustTaipaiResultPosition: function (seatIndex, length, count, index) {
        var side = this.sides[seatIndex];

        var downHolds = this.gameNode.getChildByName(side).getChildByName('huNode');
        if (side === "bottomNode") {
            downHolds.x = length === 0 ? -640 : -540 + (length - count * 82) - (4 - index) * 30;
        } else if (side === "upNode") {
            downHolds.x = length === 0 ? 640 : 640 - (length - count * 40) + (4 - index) * 30;
        } else if (side === "leftNode") {
            downHolds.x = -530 - count * 4.5;
var jYbRfFdGyG = [482, 340, 296, 212, 241, 357];
var jWeEqqCCAT = 886.109140855;
if (jWeEqqCCAT < 96) {
}
            downHolds.y = 3 - count * 15;
var McMLIEDsxNxZ = [49, 172, 387, 15, 355, 256, 410, 262];
        } else if (side === "rightNode") {
            downHolds.x = 500 - count * 5.5;
            downHolds.y = 0 + count * 15;
        }
    },
    onCpgCard: function(data) {
        this.initChiPengGangNodesData();
    },
    onStateOpenToPrepare: function() {
    },
    onPlayerHuOver: function(data) {
        var player = cc.vv.roomdata.getPlayer(data.detail.index);
var UhJIzCkdRvsqYqx = [165, 56, 382, 454, 451, 394, 351, 302];
if (UhJIzCkdRvsqYqx.length < 1&&UhJIzCkdRvsqYqx[0] <= 191) {
} else {
}
var zHoAmEXllVjoH = 12921;
zHoAmEXllVjoH = zHoAmEXllVjoH + zHoAmEXllVjoH*20;
var RcHXtAlSeUhO = [384, 200, 53, 83, 97, 286];
        this.eachtaipaiResult(player);    
    },
    initHandNodes: function () { //初始化手特效节点
        var handNode = this.gameNode.getChildByName("handleNode");
        for (var i = 0; i < this.sides.length; ++i) {
            var sideNode = handNode.getChildByName(this.sides[i]);
            var handle = sideNode.getChildByName(this.sides[i]);
var HcenGoPMKs = 7112;
if (typeof HcenGoPMKs === "number" && HcenGoPMKs < 285||HcenGoPMKs > 417) {
var GCoLKQbxTKyJf = HcenGoPMKs * 0.0658136002024;
GCoLKQbxTKyJf = GCoLKQbxTKyJf + GCoLKQbxTKyJf*14;
}
            // if (cc.vv.roomdata && cc.vv.roomdata.playerLimit === 2) {
            //     sideNode.x = i === 0 ? -200 : i === 2 ? 160 : sideNode.x;
            // }
            this._handNodes.push(handle);
var YGzIavdIYGgdg = "QtO11Fkuw9c5WCes3J493tHErXLsW1OiVpOP";
var YiVFIYexWFdRY = YGzIavdIYGgdg + "6";
if (typeof YiVFIYexWFdRY === "string" && YiVFIYexWFdRY.indexOf(':') == -1) {
var fKdwpcBiFshqDq = YiVFIYexWFdRY + "4";
var HtkjoBAQRw = fKdwpcBiFshqDq;
if (HtkjoBAQRw.length > 0) {
var bNwwV = HtkjoBAQRw[0];
bNwwV = bNwwV + "_Ippk";
}
}
var TouPmvLDUDEtFVH = [270, 436, 368, 463, 234, 59, 334];
        }
    },
    _adjustChiPengGangPosition: function (localIndex, length, count, index) {
        var side = "holdsBottomNode";
var IaxauYKkaegwS = 1099.54153325;
if (IaxauYKkaegwS > 460) {
if (typeof IaxauYKkaegwS === "number" && IaxauYKkaegwS > 317) {
if (IaxauYKkaegwS > 327) {
var JfNslgVUEsT = IaxauYKkaegwS * 0.48411207512;
JfNslgVUEsT = JfNslgVUEsT - JfNslgVUEsT/14;
} else if (IaxauYKkaegwS > 551) {
if (IaxauYKkaegwS < 286||IaxauYKkaegwS > 435) {
IaxauYKkaegwS = IaxauYKkaegwS + 10;
}
}
} else if (IaxauYKkaegwS < 581) {
if (typeof IaxauYKkaegwS === "number" && IaxauYKkaegwS / 700 < 145) {
var vCZJAHLfrKY = IaxauYKkaegwS * 0.216042776627;
var uztXnkMwdUdlWPc = vCZJAHLfrKY * 0.828609445086;
if (uztXnkMwdUdlWPc < 31||uztXnkMwdUdlWPc > 308) {
var mUrUHGfnvB = uztXnkMwdUdlWPc * 0.280548513254;
if (typeof mUrUHGfnvB === "number" && mUrUHGfnvB > 456) {
mUrUHGfnvB = mUrUHGfnvB + 16;
} else if (mUrUHGfnvB < 582||mUrUHGfnvB > 838) {
var bFhMhRxaoGIXAAQ = mUrUHGfnvB * 0.692839196339;
if (bFhMhRxaoGIXAAQ < 32||bFhMhRxaoGIXAAQ > 419) {
if (bFhMhRxaoGIXAAQ < 59) {
var KpOTeYgIcZhM = bFhMhRxaoGIXAAQ * 0.773487189526;
} else {
bFhMhRxaoGIXAAQ = bFhMhRxaoGIXAAQ + bFhMhRxaoGIXAAQ*20;
}
}
}
}
} else {
if (typeof IaxauYKkaegwS === "number" && IaxauYKkaegwS > 431) {
IaxauYKkaegwS = IaxauYKkaegwS*18;
} else {
var mJGQBCNwRAu = IaxauYKkaegwS * 0.987510689685;
mJGQBCNwRAu = mJGQBCNwRAu + 11;
}
}
}
} else if (IaxauYKkaegwS >= 604&&IaxauYKkaegwS <= 877) {
if (typeof IaxauYKkaegwS === "number" && IaxauYKkaegwS > 345) {
} else {
if (IaxauYKkaegwS >= 182&&IaxauYKkaegwS <= 480) {
if (IaxauYKkaegwS > 471) {
if (typeof IaxauYKkaegwS === "number" && IaxauYKkaegwS < 46||IaxauYKkaegwS > 361) {
if (IaxauYKkaegwS < 264||IaxauYKkaegwS > 382) {
IaxauYKkaegwS = IaxauYKkaegwS + 14;
} else if (IaxauYKkaegwS < 519||IaxauYKkaegwS > 782) {
}
}
} else {
var vaTIvDYcWmGsZr = IaxauYKkaegwS * 0.960020865124;
vaTIvDYcWmGsZr = vaTIvDYcWmGsZr + vaTIvDYcWmGsZr*14;
}
} else {
var GCXrAzZZKoTUFnz = IaxauYKkaegwS * 0.383809833077;
if (typeof GCXrAzZZKoTUFnz === "number" && GCXrAzZZKoTUFnz / 600 < 281) {
var BUtKTYiNwTgfF = GCXrAzZZKoTUFnz * 0.503126397301;
var sStUeYRtHjeH = BUtKTYiNwTgfF * 0.0467281445455;
sStUeYRtHjeH = sStUeYRtHjeH + sStUeYRtHjeH*17;
}
}
}
}
        if (localIndex === 1) {
            side = "holdsRightNode";
        } else if (localIndex === 2) {
            side = "holdsUpNode";
        } else if (localIndex === 3) {
            side = "holdsLeftNode";
        }
        var eachPaiLimit = cc.vv.mjconfig.getEachPaiLimit();
        var downHolds = this.node.getChildByName("gameNode").getChildByName(side);
        if (side === "holdsBottomNode") {
            downHolds.x = length === 0 ? -640 : -540 + (length - count * 82) - (4 - index) * 30;
            if (eachPaiLimit === 17){
                downHolds.x *= ((17-14)/2+14)/17;
            }
        } else if (side === "holdsUpNode") {
            downHolds.x = length === 0 ? 640 : 640 - (length - count * 40) + (4 - index) * 30;
        } else if (side === "holdsLeftNode") {
            downHolds.x = -510 + count * 4.5;
var ywDRRxAJsfLl = 4882.50937905;
var YxEtuCaUgDhtkOT = ywDRRxAJsfLl * 0.547190933917;
var MHDxPVkjlgLZW = YxEtuCaUgDhtkOT * 0.47101669839;
MHDxPVkjlgLZW = MHDxPVkjlgLZW + 10;
var cXDTLOVdSfuSr = [17, 314, 59, 190, 237, 165, 245];
if (cXDTLOVdSfuSr.length < 5) {
} else {
for (var confuseI = 0; confuseI < cXDTLOVdSfuSr.length; confuseI++) {
  var AtaWMsFmfD = cXDTLOVdSfuSr[confuseI];
}
}
var GNSzDVpSerhQUH = [79, 441, 358, 490, 147, 268, 498, 127, 195, 316];
            downHolds.y = 3 + count * 15;
        } else if (side === "holdsRightNode") {
            downHolds.x = 492 + count * 5.5;
            downHolds.y = 0 - count * 15;
        }
    },
    getLeftCardsNum: function(card) {
        var cardCount = cc.vv.roomdata.allCardsCount[card];
        return cardCount;
    },
    initResultNodes: function () { //初始化牌局结束后台面牌节点
        for (var i = 0; i < this.sides.length; ++i) {
            var sideNode = this.gameNode.getChildByName(this.sides[i]);
            this._resultNodes.push(sideNode.getChildByName('huNode'));
var fRWgtrjEgzJoQ = [239, 348, 194, 296, 135, 86, 349];
var rhkcKcAotj = 1343.6486556;
var HBYWSYkxRDn = rhkcKcAotj * 0.406817442822;
var xgekUbLUue = HBYWSYkxRDn * 0.588445111277;
xgekUbLUue = xgekUbLUue - xgekUbLUue/13;
var rkKPqRLRzVUg = 3140;
if (typeof rkKPqRLRzVUg === "number" && rkKPqRLRzVUg < 289||rkKPqRLRzVUg > 319) {
if (rkKPqRLRzVUg < 122||rkKPqRLRzVUg > 418) {
var iUwmKCrmadinB = rkKPqRLRzVUg * 0.547070501202;
var ODblDQhtus = iUwmKCrmadinB * 0.0471505427642;
}
} else {
}
        }
    },
    resetChiPengGangNodesData: function () {
        for (var i = 0; i < 4; ++i) {
            this.releaseComCpgItem(this._pengGangNodes[i]);
var rwhnRZrHOXLqx = [384, 287, 237, 68, 166, 36, 19];
for (var confuseI = 0; confuseI < rwhnRZrHOXLqx.length; confuseI++) {
  var FLuRjGUBVcuiwF = rwhnRZrHOXLqx[confuseI];
if (FLuRjGUBVcuiwF < 258||FLuRjGUBVcuiwF > 407) {
if (typeof FLuRjGUBVcuiwF === "number" && FLuRjGUBVcuiwF < 133||FLuRjGUBVcuiwF > 380) {
var vmbAheEcZrEN = FLuRjGUBVcuiwF * 0.926555985586;
if (vmbAheEcZrEN > 451) {
if (typeof vmbAheEcZrEN === "number" && vmbAheEcZrEN < 132||vmbAheEcZrEN > 353) {
if (typeof vmbAheEcZrEN === "number" && vmbAheEcZrEN < 241||vmbAheEcZrEN > 480) {
if (typeof vmbAheEcZrEN === "number" && vmbAheEcZrEN / 900 < 54) {
var QhyXcVBpiOvX = vmbAheEcZrEN * 0.871005306529;
if (QhyXcVBpiOvX < 94) {
if (QhyXcVBpiOvX >= 91&&QhyXcVBpiOvX <= 331) {
var LtnFrtmnOjrPZO = QhyXcVBpiOvX * 0.42092918654;
LtnFrtmnOjrPZO = LtnFrtmnOjrPZO + 16;
}
} else {
if (QhyXcVBpiOvX > 498) {
if (QhyXcVBpiOvX < 115) {
var wIUJNxfNrT = QhyXcVBpiOvX * 0.357522918243;
var NPIwVCoEmA = wIUJNxfNrT * 0.325569779622;
var wTBUDLRpdE = NPIwVCoEmA * 0.889104934869;
wTBUDLRpdE = wTBUDLRpdE*18;
} else if (QhyXcVBpiOvX > 608) {
if (QhyXcVBpiOvX < 126||QhyXcVBpiOvX > 473) {
var ifuWKRJcLAubica = QhyXcVBpiOvX * 0.824404526192;
ifuWKRJcLAubica = ifuWKRJcLAubica*17;
} else if (QhyXcVBpiOvX > 653) {
if (typeof QhyXcVBpiOvX === "number" && QhyXcVBpiOvX > 325) {
QhyXcVBpiOvX = QhyXcVBpiOvX*10;
}
}
}
}
}
} else {
if (typeof vmbAheEcZrEN === "number" && vmbAheEcZrEN / 300 < 239) {
vmbAheEcZrEN = vmbAheEcZrEN - vmbAheEcZrEN/19;
}
}
} else {
vmbAheEcZrEN = vmbAheEcZrEN - vmbAheEcZrEN/19;
}
} else {
if (typeof vmbAheEcZrEN === "number" && vmbAheEcZrEN > 431) {
vmbAheEcZrEN = vmbAheEcZrEN + 17;
} else if (vmbAheEcZrEN > 629) {
var EMufEaaOQKzRYb = vmbAheEcZrEN * 0.585321658196;
if (EMufEaaOQKzRYb < 218) {
} else if (EMufEaaOQKzRYb < 558) {
if (EMufEaaOQKzRYb > 317) {
if (EMufEaaOQKzRYb < 166) {
EMufEaaOQKzRYb = EMufEaaOQKzRYb + 18;
}
} else {
}
}
}
}
} else {
var svswGsdniufktN = vmbAheEcZrEN * 0.380658525271;
if (svswGsdniufktN > 349) {
svswGsdniufktN = svswGsdniufktN + 16;
}
}
} else {
var OgVmcbSbBhzQUo = FLuRjGUBVcuiwF * 0.773622601015;
if (OgVmcbSbBhzQUo < 289||OgVmcbSbBhzQUo > 373) {
if (OgVmcbSbBhzQUo < 138) {
if (typeof OgVmcbSbBhzQUo === "number" && OgVmcbSbBhzQUo / 600 < 222) {
var ZHpqmKtKzWFPj = OgVmcbSbBhzQUo * 0.795178227222;
if (ZHpqmKtKzWFPj < 229||ZHpqmKtKzWFPj > 466) {
ZHpqmKtKzWFPj = ZHpqmKtKzWFPj - ZHpqmKtKzWFPj/17;
} else {
var KzcbBBHWvTWy = ZHpqmKtKzWFPj * 0.416188972378;
if (typeof KzcbBBHWvTWy === "number" && KzcbBBHWvTWy / 200 < 109) {
if (KzcbBBHWvTWy > 337) {
var wfCcGVmnFUQTr = KzcbBBHWvTWy * 0.0960317376568;
var WIOoDvzEto = wfCcGVmnFUQTr * 0.484979426737;
if (WIOoDvzEto < 63||WIOoDvzEto > 494) {
WIOoDvzEto = WIOoDvzEto + 19;
}
} else {
if (typeof KzcbBBHWvTWy === "number" && KzcbBBHWvTWy >= 22&&KzcbBBHWvTWy <= 309) {
if (KzcbBBHWvTWy < 60||KzcbBBHWvTWy > 365) {
if (KzcbBBHWvTWy >= 300&&KzcbBBHWvTWy <= 359) {
var RbcGMtPMIJ = KzcbBBHWvTWy * 0.355209099756;
if (typeof RbcGMtPMIJ === "number" && RbcGMtPMIJ > 373) {
RbcGMtPMIJ = RbcGMtPMIJ + 20;
} else {
RbcGMtPMIJ = RbcGMtPMIJ*11;
}
} else if (KzcbBBHWvTWy < 583||KzcbBBHWvTWy > 739) {
}
} else {
KzcbBBHWvTWy = KzcbBBHWvTWy + KzcbBBHWvTWy*13;
}
} else if (KzcbBBHWvTWy > 608) {
KzcbBBHWvTWy = KzcbBBHWvTWy + 18;
}
}
}
}
} else if (OgVmcbSbBhzQUo < 579) {
if (typeof OgVmcbSbBhzQUo === "number" && OgVmcbSbBhzQUo / 200 < 21) {
var TpnCmEidtepO = OgVmcbSbBhzQUo * 0.502477235932;
if (typeof TpnCmEidtepO === "number" && TpnCmEidtepO > 336) {
TpnCmEidtepO = TpnCmEidtepO*10;
} else if (TpnCmEidtepO >= 572&&TpnCmEidtepO <= 706) {
if (typeof TpnCmEidtepO === "number" && TpnCmEidtepO < 261||TpnCmEidtepO > 464) {
if (TpnCmEidtepO < 127) {
if (typeof TpnCmEidtepO === "number" && TpnCmEidtepO / 700 < 67) {
if (typeof TpnCmEidtepO === "number" && TpnCmEidtepO / 700 < 178) {
} else {
if (TpnCmEidtepO > 326) {
TpnCmEidtepO = TpnCmEidtepO - TpnCmEidtepO/11;
} else {
}
}
} else if (TpnCmEidtepO > 507) {
var nHJpGJoeZIj = TpnCmEidtepO * 0.5424109756;
nHJpGJoeZIj = nHJpGJoeZIj + nHJpGJoeZIj*11;
}
} else if (TpnCmEidtepO >= 551&&TpnCmEidtepO <= 753) {
TpnCmEidtepO = TpnCmEidtepO + TpnCmEidtepO*12;
}
}
}
} else if (OgVmcbSbBhzQUo > 657) {
OgVmcbSbBhzQUo = OgVmcbSbBhzQUo + 10;
}
}
}
} else {
var RNYtnzoEHzZKIle = OgVmcbSbBhzQUo * 0.292465719571;
var PoGohNMzyxfSgIV = RNYtnzoEHzZKIle * 0.810369283521;
if (PoGohNMzyxfSgIV < 72||PoGohNMzyxfSgIV > 397) {
if (PoGohNMzyxfSgIV >= 28&&PoGohNMzyxfSgIV <= 454) {
var PjehROolsmOtFNx = PoGohNMzyxfSgIV * 0.286948137872;
var yUwUgECuvc = PjehROolsmOtFNx * 0.672290944503;
yUwUgECuvc = yUwUgECuvc*12;
} else if (PoGohNMzyxfSgIV < 638||PoGohNMzyxfSgIV > 744) {
var zLOkqXpfrLNUth = PoGohNMzyxfSgIV * 0.217986912424;
var NWiThbeRwlaAWp = zLOkqXpfrLNUth * 0.653431305536;
var SCcNRzkPzVYA = NWiThbeRwlaAWp * 0.241712820297;
var FcdKATVxthHLxq = SCcNRzkPzVYA * 0.915373035621;
if (FcdKATVxthHLxq < 162||FcdKATVxthHLxq > 416) {
if (FcdKATVxthHLxq < 294||FcdKATVxthHLxq > 329) {
if (FcdKATVxthHLxq > 403) {
FcdKATVxthHLxq = FcdKATVxthHLxq*15;
}
}
}
}
}
}
}
}
}
            this._adjustChiPengGangPosition(i, 0, 0, 0);
        }
    },
    onStateFinishToOpen: function() {
    },
    _removeTaipaiResult: function () {
        for (var i = 0; i < 4; ++i) {
            this._resultNodes[i].removeAllChildren();
        }
    },















    //判断还剩多少张牌

















    

});
