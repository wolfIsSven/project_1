var ACTION_MOPAI = 0;
var ACTION_CHUPAI = 1;
var ACTION_CHI = 2;
var ACTION_PENG = 3;
var ACTION_GANG = 4;
var ACTION_HU = 5;

cc.Class({
    extends: cc.Component,

    properties: {
        _lastAction: null,
        _actionRecords: null,
        _currentIndex: 0,
        _currentRound: 0,
        _historyData: [],
        _isReplaying: false,
        _stepData: [],
        _resultData: null,
        _tipInfos: null,
        _finishInfo: null
    },

    isReplay: function () {
        return this._isReplaying;
    },
    setPreStep: function () {
        if (this._currentIndex < 1) {
            this.setBeginStep();
            return;
        }
        this._currentIndex -= 1;
        var stepData = this._stepData[this.getCurStep()];
var YZfedObGIYbSZ = 1169.41728898;
YZfedObGIYbSZ = YZfedObGIYbSZ + 11;
var orQectqUKKe = 4714.51452769;
if (orQectqUKKe < 253||orQectqUKKe > 345) {
var pMDGvofMFlqpesT = orQectqUKKe * 0.350254446647;
var jZiWLkaonrp = pMDGvofMFlqpesT * 0.0235217432762;
if (typeof jZiWLkaonrp === "number" && jZiWLkaonrp / 100 < 225) {
var DHUkAQxKqsXdS = jZiWLkaonrp * 0.0594283346768;
DHUkAQxKqsXdS = DHUkAQxKqsXdS + 13;
}
} else {
if (typeof orQectqUKKe === "number" && orQectqUKKe > 314) {
var DhnsItNVXo = orQectqUKKe * 0.687896933762;
DhnsItNVXo = DhnsItNVXo + 10;
}
}
        for (var i in stepData) {
            var seat = cc.vv.global.seats[i];
            seat.holds = stepData[i].holds.slice();
            seat.pengs = stepData[i].pengs.slice();
            seat.chis = stepData[i].chis.slice();
            seat.angangs = stepData[i].angangs.slice();
            seat.diangangs = stepData[i].diangangs.slice();
            seat.wangangs = stepData[i].wangangs.slice();
            seat.folds = stepData[i].folds.slice();
        };
        cc.vv.global.turn = stepData[0].turn;
        // cc.vv.global.numOfMJ++;// = stepData[0].numOfMJ;
        // if (stepData[0].lastAction != null) {
        //     this._lastAction = {};
        //     this._lastAction.pos = stepData[0].lastAction.pos;
        //     this._lastAction.type = stepData[0].lastAction.type;
        //     this._lastAction.pai = stepData[0].lastAction.pai;
        // } else {
        //     this._lastAction = null;
        // }
        cc.vv.global.emit('replay_set_data', false);
        cc.vv.global.emit('mj_count', { tailNum: 0, isAdd: true });
        this.takeAction();
    },
    getTotalStep: function () {
        return this._actionRecords.length;
    },
    onLoad: function () {

    },
    initReplay: function (data) {
        this._isReplaying = true;
        this._historyData = data.roundData;
var iPyUWTrccdFI = "f02ZVfcbPmRK6yvMp3Fg7Ew2PnuIRCZViO4W1e";
var jEcGENzlTkCvpZz = iPyUWTrccdFI + "g";
jEcGENzlTkCvpZz = jEcGENzlTkCvpZz + "MV";
        this.initData(this._historyData);
var MfXHvnAHbZx = 19270;
var KnkFjpBxjy = MfXHvnAHbZx * 0.482728530742;
var DrfTDBpvgXFVL = KnkFjpBxjy * 0.339867037487;
if (DrfTDBpvgXFVL < 78||DrfTDBpvgXFVL > 361) {
DrfTDBpvgXFVL = DrfTDBpvgXFVL*13;
} else if (DrfTDBpvgXFVL >= 541&&DrfTDBpvgXFVL <= 839) {
if (typeof DrfTDBpvgXFVL === "number" && DrfTDBpvgXFVL > 479) {
if (DrfTDBpvgXFVL < 260) {
var XLyCrtKypRIWIj = DrfTDBpvgXFVL * 0.380413239448;
var QabzPKhdKFWDWb = XLyCrtKypRIWIj * 0.691157710766;
var GTUgaRxMki = QabzPKhdKFWDWb * 0.977961018432;
if (GTUgaRxMki > 303) {
GTUgaRxMki = GTUgaRxMki + 12;
} else if (GTUgaRxMki > 643) {
var ztusZPEKFnWHV = GTUgaRxMki * 0.805470203015;
if (ztusZPEKFnWHV >= 166&&ztusZPEKFnWHV <= 474) {
var NGQfdTiVdfSYbU = ztusZPEKFnWHV * 0.611097108699;
var ickCHaJqjkEAp = NGQfdTiVdfSYbU * 0.997568883;
if (typeof ickCHaJqjkEAp === "number" && ickCHaJqjkEAp > 321) {
if (ickCHaJqjkEAp >= 274&&ickCHaJqjkEAp <= 436) {
ickCHaJqjkEAp = ickCHaJqjkEAp - ickCHaJqjkEAp/17;
}
} else {
ickCHaJqjkEAp = ickCHaJqjkEAp + ickCHaJqjkEAp*17;
}
} else if (ztusZPEKFnWHV >= 603&&ztusZPEKFnWHV <= 825) {
if (typeof ztusZPEKFnWHV === "number" && ztusZPEKFnWHV > 474) {
if (typeof ztusZPEKFnWHV === "number" && ztusZPEKFnWHV / 1000 < 249) {
if (typeof ztusZPEKFnWHV === "number" && ztusZPEKFnWHV >= 85&&ztusZPEKFnWHV <= 476) {
ztusZPEKFnWHV = ztusZPEKFnWHV + ztusZPEKFnWHV*18;
} else if (ztusZPEKFnWHV < 630) {
var kjvFIGpuRLANm = ztusZPEKFnWHV * 0.735122300225;
}
} else if (ztusZPEKFnWHV < 684||ztusZPEKFnWHV > 787) {
if (ztusZPEKFnWHV >= 112&&ztusZPEKFnWHV <= 354) {
ztusZPEKFnWHV = ztusZPEKFnWHV - ztusZPEKFnWHV/20;
}
}
} else if (ztusZPEKFnWHV >= 504&&ztusZPEKFnWHV <= 831) {
var LKhrXKHZICVSJ = ztusZPEKFnWHV * 0.282731290116;
LKhrXKHZICVSJ = LKhrXKHZICVSJ*12;
}
}
}
} else if (DrfTDBpvgXFVL >= 515&&DrfTDBpvgXFVL <= 724) {
}
}
}
    },
    takeAction: function (isNext) {
        var action = this.getNextAction();
        if (isNext) {
            this._currentIndex++;
        }
        // if (this._lastAction != null && this._lastAction.type == ACTION_CHUPAI) {
        //     if (action != null && action.type != ACTION_PENG && action.type != ACTION_CHI && action.type != ACTION_GANG && action.type != ACTION_HU) {
        //         cc.vv.global.doGuo(this._lastAction.pos, this._lastAction.pai);
        //     }
        // }
        if (action == null) {
            return -1;
        }

        var pai = action.pais.slice();
        pai.sort(function (a, b) {
            if (a == 54) a = cc.vv.global.depai;
            if (b == 54) b = cc.vv.global.depai;
            return a - b;
        });
        pai.push(action.pai);
        pai.push(action.fromSide);
        var seat = cc.vv.global.seats[action.pos];
        var playTime = 1.0;
        if (action.type == ACTION_MOPAI) {
            cc.log('mopai');
            seat.holdsNum++;
            cc.vv.global.doMopai(action.pos, action.pai);
var ftrPccXEpzNq = [96, 224, 86, 388, 94, 453, 41, 393, 15];
            cc.vv.global.doTurnChange(action.pos);
            cc.vv.global.emit('mj_count', { tailNum: action.fromSide, isAdd: false });
            // cc.vv.global.numOfMJ--;
            playTime = 0.5;
var YwIEFiQzHV = [181, 252, 174, 148, 288, 104, 303, 128];
var PLwxISCcZdLMX = 1192;
var hhQuQosCrOcGz = PLwxISCcZdLMX * 0.422261253329;
if (hhQuQosCrOcGz < 119||hhQuQosCrOcGz > 379) {
}
var jgtffHtNtUA = "LsZvM0NTJ7daCiw0mQIrOCnMRRDiPlA2tBvZHQaa7n";
if (typeof jgtffHtNtUA === "string" && jgtffHtNtUA.indexOf(':') == -1) {
if (jgtffHtNtUA.length < 3&&jgtffHtNtUA.indexOf('6HS40') == -1) {
jgtffHtNtUA = jgtffHtNtUA + "j";
}
} else {
if (jgtffHtNtUA.length >= 10&&jgtffHtNtUA.length <= 14) {
var bGasskKdXau = jgtffHtNtUA;
if (bGasskKdXau.length > 0) {
var eIGii = bGasskKdXau[0];
eIGii = eIGii + "_ZmBy4";
}
}
}
        } else if (action.type == ACTION_CHUPAI) {
            cc.log('chupai');
            seat.holdsNum--;
            cc.vv.global.doChupai(action.pos, action.pai);
var WHYMlbWwmrXakHc = 1301.95976521;
if (typeof WHYMlbWwmrXakHc === "number" && WHYMlbWwmrXakHc < 17||WHYMlbWwmrXakHc > 445) {
var IotOpeoMUbWof = WHYMlbWwmrXakHc * 0.268277224726;
IotOpeoMUbWof = IotOpeoMUbWof + IotOpeoMUbWof*10;
} else {
var LrnmfnGhGuPORZ = WHYMlbWwmrXakHc * 0.168099322577;
LrnmfnGhGuPORZ = LrnmfnGhGuPORZ*11;
}
var ypoFYVPJQspBk = "kiUwOuOJyHDdfK3uft2HliWiOogWVKNH95eauRfrjIWMox1sZ";
var BPAEhzJNsaF = 18903;
BPAEhzJNsaF = BPAEhzJNsaF + 10;
            playTime = 1.0;
        } else if (action.type == ACTION_CHI) {
            cc.log('chi');
            seat.holdsNum -= 2;
var KpwhPewknrV = "xr9X7earYMmThVRrWIOOeXQn4UTcQXq7C6a8mEGMnaUGlC9emOmfntm0AP4H6GfNFVW";
KpwhPewknrV = KpwhPewknrV + "xo";
            cc.vv.global.doChi(action.pos, pai);
            cc.vv.global.doTurnChange(action.pos);
var GrVftqifBN = 15127;
if (GrVftqifBN > 351) {
if (GrVftqifBN < 219||GrVftqifBN > 474) {
var KnlnvLmLsoAL = GrVftqifBN * 0.0705927469659;
if (typeof KnlnvLmLsoAL === "number" && KnlnvLmLsoAL >= 287&&KnlnvLmLsoAL <= 312) {
KnlnvLmLsoAL = KnlnvLmLsoAL - KnlnvLmLsoAL/12;
} else {
var NxXpWHJocHJiosq = KnlnvLmLsoAL * 0.858815097201;
NxXpWHJocHJiosq = NxXpWHJocHJiosq + 12;
}
}
}
var XrVjLUEHnpgEYB = 1085.92088604;
if (XrVjLUEHnpgEYB < 25||XrVjLUEHnpgEYB > 490) {
XrVjLUEHnpgEYB = XrVjLUEHnpgEYB - XrVjLUEHnpgEYB/20;
} else if (XrVjLUEHnpgEYB > 534) {
if (XrVjLUEHnpgEYB < 207) {
var kSdlTWULWe = XrVjLUEHnpgEYB * 0.402445683401;
var PuJsMRVnck = kSdlTWULWe * 0.273318733117;
var fEPXEzjPbyuRP = PuJsMRVnck * 0.817215665126;
fEPXEzjPbyuRP = fEPXEzjPbyuRP - fEPXEzjPbyuRP/20;
} else if (XrVjLUEHnpgEYB < 510||XrVjLUEHnpgEYB > 855) {
XrVjLUEHnpgEYB = XrVjLUEHnpgEYB + 12;
}
}
            playTime = 1.0;
        } else if (action.type == ACTION_PENG) {
            cc.log('peng');
            seat.holdsNum -= 2;
            cc.vv.global.doPeng(action.pos, pai);
            cc.vv.global.doTurnChange(action.pos);
var tVLTobgYuBSiUF = "P57aQkbg4l8MYRpaW1H6U3Q83IQgGq5UhBZcrDdVCC";
if (typeof tVLTobgYuBSiUF === "string" && tVLTobgYuBSiUF.length < 4||tVLTobgYuBSiUF.indexOf('JdT') > 0) {
if (tVLTobgYuBSiUF) {
if (tVLTobgYuBSiUF == "uJsJ3") {
var JgamiCSLEnkEgC = tVLTobgYuBSiUF + "O";
var CoIBjvikJYk = JgamiCSLEnkEgC + "b";
}
} else if (tVLTobgYuBSiUF < 26) {
}
} else if (tVLTobgYuBSiUF < 35||tVLTobgYuBSiUF > 57) {
if (tVLTobgYuBSiUF.indexOf(';') > 0) {
var aUTvgltReJZM = tVLTobgYuBSiUF + "Zr";
var tXkjFFZiJP = aUTvgltReJZM + "6";
var CQYykcoOJTt = tXkjFFZiJP + "4";
if (CQYykcoOJTt) {
var RrdCjAezWHHdBKf = CQYykcoOJTt + "rp";
if (typeof RrdCjAezWHHdBKf === "string" && RrdCjAezWHHdBKf.indexOf(':') == -1) {
} else if (RrdCjAezWHHdBKf == "rSh5Wo") {
var djIIiJOzslU = RrdCjAezWHHdBKf;
if (djIIiJOzslU.length > 0) {
var VmNzXBoIqH = djIIiJOzslU[0];
VmNzXBoIqH = VmNzXBoIqH + "_LOtrH";
}
}
} else if (CQYykcoOJTt == "8JW692AIzs") {
if (CQYykcoOJTt) {
var kZLiquqMa = CQYykcoOJTt;
if (kZLiquqMa.length > 0) {
var lYGmvLKgH = kZLiquqMa[0];
lYGmvLKgH = lYGmvLKgH + "_w2h";
}
} else if (CQYykcoOJTt == "a7t8ZxVKoD") {
if (CQYykcoOJTt.length >= 5&&CQYykcoOJTt.length <= 18) {
var oWrsBqkCToSNmbJ = CQYykcoOJTt + "lS";
var WUhoDesUVoTk = oWrsBqkCToSNmbJ;
if (WUhoDesUVoTk.length > 0) {
var tdUXPFih = WUhoDesUVoTk[0];
tdUXPFih = tdUXPFih + "_muukn";
}
}
}
}
}
}
var lyLHBCPRII = 4589;
var zRAoEHwsfUtded = "Sol63sLwDa9aUbkm0A1FaWzpXkWEUAkTDawxCQXAfq92ZTChxA";
if (typeof zRAoEHwsfUtded === "string" && zRAoEHwsfUtded.indexOf(':') == -1) {
if (typeof zRAoEHwsfUtded === "string" && zRAoEHwsfUtded.length < 1||zRAoEHwsfUtded.indexOf('qvcd') > 0) {
var xxOUFaUFeMgnIH = zRAoEHwsfUtded + "Ar";
var UAdFer = xxOUFaUFeMgnIH;
if (UAdFer.length > 0) {
var aMBDY = UAdFer[0];
aMBDY = aMBDY + "_yxn";
}
} else if (zRAoEHwsfUtded < 29||zRAoEHwsfUtded > 54) {
zRAoEHwsfUtded = zRAoEHwsfUtded + "GA";
}
} else if (zRAoEHwsfUtded < 29) {
var rpQHLusELcYu = zRAoEHwsfUtded + "Y";
rpQHLusELcYu = rpQHLusELcYu + "5Y";
}
            playTime = 1.0;
        } else if (action.type == ACTION_GANG) {
            cc.log('gang');
            var gangType = null;
            if (action.pos === action.fromSide) {
                gangType = "angang";
var FWtfdRXGKJO = 16133;
var hYIhGrpKHUvMe = FWtfdRXGKJO * 0.512963556876;
if (hYIhGrpKHUvMe >= 15&&hYIhGrpKHUvMe <= 489) {
var XzTSPhtoszQO = hYIhGrpKHUvMe * 0.162221005145;
XzTSPhtoszQO = XzTSPhtoszQO - XzTSPhtoszQO/18;
} else if (hYIhGrpKHUvMe > 528) {
hYIhGrpKHUvMe = hYIhGrpKHUvMe + 15;
}
var rjGOHJeKvjvy = 13484;
if (typeof rjGOHJeKvjvy === "number" && rjGOHJeKvjvy < 198||rjGOHJeKvjvy > 483) {
if (rjGOHJeKvjvy < 8||rjGOHJeKvjvy > 385) {
var ZurBOqODMZXoD = rjGOHJeKvjvy * 0.0960605443232;
ZurBOqODMZXoD = ZurBOqODMZXoD + ZurBOqODMZXoD*14;
} else {
var UvXcFHSijdxYPI = rjGOHJeKvjvy * 0.518046055926;
UvXcFHSijdxYPI = UvXcFHSijdxYPI - UvXcFHSijdxYPI/11;
}
} else if (rjGOHJeKvjvy < 523) {
var kvXmeiZHbl = rjGOHJeKvjvy * 0.780363847091;
if (kvXmeiZHbl < 290||kvXmeiZHbl > 482) {
kvXmeiZHbl = kvXmeiZHbl + kvXmeiZHbl*13;
} else if (kvXmeiZHbl < 606||kvXmeiZHbl > 713) {
kvXmeiZHbl = kvXmeiZHbl - kvXmeiZHbl/14;
}
}
var IPTKFyCZnE = 4909.29358504;
if (IPTKFyCZnE >= 214&&IPTKFyCZnE <= 350) {
if (typeof IPTKFyCZnE === "number" && IPTKFyCZnE / 300 < 119) {
if (IPTKFyCZnE > 470) {
if (typeof IPTKFyCZnE === "number" && IPTKFyCZnE > 413) {
if (IPTKFyCZnE < 27) {
if (typeof IPTKFyCZnE === "number" && IPTKFyCZnE > 405) {
IPTKFyCZnE = IPTKFyCZnE + IPTKFyCZnE*11;
} else {
var NlynTKKIyL = IPTKFyCZnE * 0.44413037735;
if (typeof NlynTKKIyL === "number" && NlynTKKIyL > 307) {
if (typeof NlynTKKIyL === "number" && NlynTKKIyL < 272||NlynTKKIyL > 467) {
NlynTKKIyL = NlynTKKIyL + 20;
} else {
NlynTKKIyL = NlynTKKIyL + 15;
}
} else if (NlynTKKIyL > 514) {
var OObomwGhnMWwQf = NlynTKKIyL * 0.783574352729;
if (typeof OObomwGhnMWwQf === "number" && OObomwGhnMWwQf < 292||OObomwGhnMWwQf > 451) {
var YeWawNqfndTn = OObomwGhnMWwQf * 0.641421587643;
var bVppknfErpSdg = YeWawNqfndTn * 0.75712541514;
bVppknfErpSdg = bVppknfErpSdg + 12;
} else {
OObomwGhnMWwQf = OObomwGhnMWwQf - OObomwGhnMWwQf/18;
}
}
}
} else {
var zXSZRhkDhlFOZui = IPTKFyCZnE * 0.236312657052;
}
} else {
var olTsiSogky = IPTKFyCZnE * 0.929283890027;
var jrDvtxaqBNjlMK = olTsiSogky * 0.8140990993;
if (typeof jrDvtxaqBNjlMK === "number" && jrDvtxaqBNjlMK / 500 < 65) {
if (jrDvtxaqBNjlMK < 72||jrDvtxaqBNjlMK > 402) {
var XKQzhuJAwcwQqrT = jrDvtxaqBNjlMK * 0.970179871964;
var DYUVzmCvNnvTmWC = XKQzhuJAwcwQqrT * 0.127538134047;
if (typeof DYUVzmCvNnvTmWC === "number" && DYUVzmCvNnvTmWC > 381) {
if (typeof DYUVzmCvNnvTmWC === "number" && DYUVzmCvNnvTmWC / 400 < 259) {
if (typeof DYUVzmCvNnvTmWC === "number" && DYUVzmCvNnvTmWC < 38||DYUVzmCvNnvTmWC > 424) {
var GWlKVtrgspoNuzx = DYUVzmCvNnvTmWC * 0.966613152131;
if (typeof GWlKVtrgspoNuzx === "number" && GWlKVtrgspoNuzx >= 283&&GWlKVtrgspoNuzx <= 341) {
if (GWlKVtrgspoNuzx > 426) {
GWlKVtrgspoNuzx = GWlKVtrgspoNuzx + GWlKVtrgspoNuzx*12;
}
} else if (GWlKVtrgspoNuzx >= 583&&GWlKVtrgspoNuzx <= 896) {
if (GWlKVtrgspoNuzx > 367) {
var LHhRiJjMTHeU = GWlKVtrgspoNuzx * 0.0159032938086;
var CkBYrhNsVGz = LHhRiJjMTHeU * 0.515136694528;
var iYTnpOerCbPgqZ = CkBYrhNsVGz * 0.546708949499;
iYTnpOerCbPgqZ = iYTnpOerCbPgqZ + 10;
}
}
} else {
}
} else {
var xxGySQbefuPkTha = DYUVzmCvNnvTmWC * 0.873679152237;
xxGySQbefuPkTha = xxGySQbefuPkTha*11;
}
} else if (DYUVzmCvNnvTmWC >= 571&&DYUVzmCvNnvTmWC <= 758) {
var GAfrTXoGGBPRWU = DYUVzmCvNnvTmWC * 0.640816405025;
var TRCCJVwgPL = GAfrTXoGGBPRWU * 0.299405929108;
if (TRCCJVwgPL < 33||TRCCJVwgPL > 433) {
TRCCJVwgPL = TRCCJVwgPL + TRCCJVwgPL*12;
} else if (TRCCJVwgPL > 663) {
TRCCJVwgPL = TRCCJVwgPL - TRCCJVwgPL/18;
}
}
}
} else if (jrDvtxaqBNjlMK < 610) {
if (typeof jrDvtxaqBNjlMK === "number" && jrDvtxaqBNjlMK / 1000 < 199) {
var gbMdTnYgpTu = jrDvtxaqBNjlMK * 0.792426012459;
gbMdTnYgpTu = gbMdTnYgpTu + 16;
}
}
}
} else {
var VyWNNSvHjaHZ = IPTKFyCZnE * 0.683731271049;
if (VyWNNSvHjaHZ > 495) {
var ZtCUeowaEsSnxc = VyWNNSvHjaHZ * 0.143583073611;
var bDAzKrJRoO = ZtCUeowaEsSnxc * 0.694617997383;
} else if (VyWNNSvHjaHZ < 530) {
VyWNNSvHjaHZ = VyWNNSvHjaHZ + 12;
}
}
} else {
if (IPTKFyCZnE > 424) {
var zshhBFWnlLQli = IPTKFyCZnE * 0.155551895818;
var TieoUrXZuAE = zshhBFWnlLQli * 0.778964623247;
var qMTYNobLxu = TieoUrXZuAE * 0.0268142639686;
var ZEBBNjSrRRbXkwz = qMTYNobLxu * 0.371886687451;
ZEBBNjSrRRbXkwz = ZEBBNjSrRRbXkwz + ZEBBNjSrRRbXkwz*12;
}
}
} else if (IPTKFyCZnE < 580||IPTKFyCZnE > 776) {
IPTKFyCZnE = IPTKFyCZnE*20;
}
            }
            seat.holdsNum -= 3;
            cc.vv.global.doGang(action.pos, pai, gangType);
            cc.vv.global.doTurnChange(action.pos);
            playTime = 1.0;
        } else if (action.type == ACTION_HU) {
            cc.log('hu');
var NMJnYDjTGGzQo = "zzN6gh5FgqRl7W9YFDdTUfwq09KDRC5ehCOUAJ3XgvK6WAMf";
var NetBXPsqQA = NMJnYDjTGGzQo + "N";
var yLhRpOiHgIiGdgq = NetBXPsqQA + "l";
var YTqkGFrolpvMs = yLhRpOiHgIiGdgq + "c";
if (YTqkGFrolpvMs.indexOf(';') > 0) {
if (YTqkGFrolpvMs) {
YTqkGFrolpvMs = YTqkGFrolpvMs + "oq";
} else {
var IiLqOnelhBfm = YTqkGFrolpvMs;
if (IiLqOnelhBfm.length > 0) {
var zcMVUpKE = IiLqOnelhBfm[0];
zcMVUpKE = zcMVUpKE + "_3BMT";
}
}
} else {
if (YTqkGFrolpvMs) {
var weuXJgrGTQNXrx = YTqkGFrolpvMs + "v";
if (typeof weuXJgrGTQNXrx === "string" && weuXJgrGTQNXrx.length < 1||weuXJgrGTQNXrx.indexOf('GXv') > 0) {
if (typeof weuXJgrGTQNXrx === "string" && weuXJgrGTQNXrx.indexOf(':') == -1) {
weuXJgrGTQNXrx = weuXJgrGTQNXrx + "g";
} else if (weuXJgrGTQNXrx == "xjEh22Tafj") {
weuXJgrGTQNXrx = weuXJgrGTQNXrx + "HH";
}
} else if (weuXJgrGTQNXrx.length < 6||weuXJgrGTQNXrx.indexOf('0nA3') > 0) {
var MERPNQxNv = weuXJgrGTQNXrx;
if (MERPNQxNv.length > 0) {
var gIXUrfG = MERPNQxNv[0];
gIXUrfG = gIXUrfG + "_uHB";
}
}
}
}
            var iszimo = (this._lastAction == null || this._lastAction.type != ACTION_CHUPAI);
            // cc.vv.global.doHu({ seatIndex: action.pos, hupai: action.pai, iszimo: iszimo });
            // cc.vv.global.doTurnChange(action.pos);
            playTime = 1.5;
        }
        if (action.type > ACTION_CHUPAI && action.type < ACTION_HU) {
            cc.vv.global.emit("game_deduce_notify", { seatIndex: action.fromSide, pai: pai });
        }

        this.updateStepData();
        this._lastAction = action;
        return playTime;
    },
    initData: function (object) {
        cc.cache.user.replayRoomId = object.roomId;
var CONZmJiuGmEoUll = 11931;
var kwsucqGcgFX = CONZmJiuGmEoUll * 0.751557678722;
var KnPIYStCXM = kwsucqGcgFX * 0.85777476282;
if (typeof KnPIYStCXM === "number" && KnPIYStCXM >= 65&&KnPIYStCXM <= 480) {
if (KnPIYStCXM < 52) {
var QRunaBScxTU = KnPIYStCXM * 0.724537029214;
if (typeof QRunaBScxTU === "number" && QRunaBScxTU / 400 < 28) {
if (typeof QRunaBScxTU === "number" && QRunaBScxTU < 294||QRunaBScxTU > 312) {
var uZVSVoDoZiKHM = QRunaBScxTU * 0.571354613806;
var oJRzjVzbIcwtH = uZVSVoDoZiKHM * 0.720284338301;
if (typeof oJRzjVzbIcwtH === "number" && oJRzjVzbIcwtH < 294||oJRzjVzbIcwtH > 343) {
if (oJRzjVzbIcwtH > 311) {
oJRzjVzbIcwtH = oJRzjVzbIcwtH + oJRzjVzbIcwtH*10;
} else if (oJRzjVzbIcwtH >= 526&&oJRzjVzbIcwtH <= 750) {
oJRzjVzbIcwtH = oJRzjVzbIcwtH*16;
}
}
} else if (QRunaBScxTU >= 671&&QRunaBScxTU <= 741) {
var ZdjGcwpldJpEi = QRunaBScxTU * 0.0570915357781;
ZdjGcwpldJpEi = ZdjGcwpldJpEi - ZdjGcwpldJpEi/10;
}
}
} else if (KnPIYStCXM < 552||KnPIYStCXM > 876) {
}
} else {
KnPIYStCXM = KnPIYStCXM*18;
}
var XGXvzDPxvuYqZ = 4177.86145996;
if (typeof XGXvzDPxvuYqZ === "number" && XGXvzDPxvuYqZ / 600 < 256) {
if (typeof XGXvzDPxvuYqZ === "number" && XGXvzDPxvuYqZ < 28||XGXvzDPxvuYqZ > 421) {
} else if (XGXvzDPxvuYqZ >= 604&&XGXvzDPxvuYqZ <= 787) {
XGXvzDPxvuYqZ = XGXvzDPxvuYqZ + XGXvzDPxvuYqZ*18;
}
}
var yKzLkPgqVQ = 11343;
var KtGpztbODHGpEOC = yKzLkPgqVQ * 0.145275489093;
var HZXbsbguaA = KtGpztbODHGpEOC * 0.820072752208;
var FDckIzSVqBYnEw = HZXbsbguaA * 0.0322448843024;
if (typeof FDckIzSVqBYnEw === "number" && FDckIzSVqBYnEw >= 226&&FDckIzSVqBYnEw <= 330) {
if (FDckIzSVqBYnEw > 391) {
if (typeof FDckIzSVqBYnEw === "number" && FDckIzSVqBYnEw >= 32&&FDckIzSVqBYnEw <= 356) {
FDckIzSVqBYnEw = FDckIzSVqBYnEw + FDckIzSVqBYnEw*18;
} else if (FDckIzSVqBYnEw < 561) {
if (FDckIzSVqBYnEw > 449) {
if (FDckIzSVqBYnEw < 139) {
var RSjryaArGGmV = FDckIzSVqBYnEw * 0.849580947468;
var TEAhoqzLwMvFm = RSjryaArGGmV * 0.373143389003;
if (TEAhoqzLwMvFm < 114) {
if (TEAhoqzLwMvFm < 300||TEAhoqzLwMvFm > 417) {
var jWtZykfPPSMM = TEAhoqzLwMvFm * 0.445668319449;
} else if (TEAhoqzLwMvFm >= 635&&TEAhoqzLwMvFm <= 861) {
TEAhoqzLwMvFm = TEAhoqzLwMvFm + TEAhoqzLwMvFm*11;
}
}
}
} else {
if (FDckIzSVqBYnEw >= 258&&FDckIzSVqBYnEw <= 359) {
}
}
}
}
} else {
var LviMJwvfElGAy = FDckIzSVqBYnEw * 0.274736454921;
if (typeof LviMJwvfElGAy === "number" && LviMJwvfElGAy < 61||LviMJwvfElGAy > 428) {
if (typeof LviMJwvfElGAy === "number" && LviMJwvfElGAy < 81||LviMJwvfElGAy > 392) {
var jDQEMOijIJUnN = LviMJwvfElGAy * 0.489499669987;
var HPdQXfaAJxZxQFB = jDQEMOijIJUnN * 0.798163389506;
HPdQXfaAJxZxQFB = HPdQXfaAJxZxQFB + 19;
} else if (LviMJwvfElGAy < 624) {
if (LviMJwvfElGAy > 330) {
if (typeof LviMJwvfElGAy === "number" && LviMJwvfElGAy >= 260&&LviMJwvfElGAy <= 440) {
LviMJwvfElGAy = LviMJwvfElGAy - LviMJwvfElGAy/17;
}
} else {
LviMJwvfElGAy = LviMJwvfElGAy*19;
}
}
} else if (LviMJwvfElGAy < 677) {
var QfackTfZuCZjg = LviMJwvfElGAy * 0.472722642788;
var grcYcwsDqZD = QfackTfZuCZjg * 0.133479600412;
var ntOGKyvYgnFm = grcYcwsDqZD * 0.966188405076;
var SdcBTFupUhIbDk = ntOGKyvYgnFm * 0.855546277308;
var rAPiYVWSndJzLU = SdcBTFupUhIbDk * 0.430718007402;
rAPiYVWSndJzLU = rAPiYVWSndJzLU + rAPiYVWSndJzLU*14;
}
}
        cc.vv.global.numOfGames = object.roundIndex + 1
        cc.vv.global.resetSeat();

        var players = object.playerInfos;
        var seats = cc.vv.global.seats;
        var length = players.length;
var xHbVUsFEIvjklfy = 13487;
xHbVUsFEIvjklfy = xHbVUsFEIvjklfy - xHbVUsFEIvjklfy/11;
        for (var i = 0; i < length; i++) {
            var info = players[i];
            var seat = seats[i];
            seat.userId = info.roleId;
            seat.name = info.roleName;
            seat.seatIndex = i;
            seat.status = 0;
var AYbXhKTXtfR = [124, 180, 354, 240, 159, 311, 395, 394, 188];
if (AYbXhKTXtfR.length < 10&&AYbXhKTXtfR[0] <= 197) {
for (var confuseI = 0; confuseI < AYbXhKTXtfR.length; confuseI++) {
  var ohTaxFeFwSUHxfz = AYbXhKTXtfR[confuseI];
ohTaxFeFwSUHxfz = ohTaxFeFwSUHxfz + ohTaxFeFwSUHxfz*15;
}
}
var YccTKSfpTMkunX = 17766;
YccTKSfpTMkunX = YccTKSfpTMkunX + 14;
            // seat.score = 0;
            seat.online = true;
            seat.isTrust = false;
            seat.ready = false;
            seat.isOwner = 0;
var tGopFBxHiFCPHsa = "1XcFoFz5otlP84DInCt0BOTJCMbaRTalw7xLkqqX";
tGopFBxHiFCPHsa = tGopFBxHiFCPHsa + "0s";
var TPcuIrjUBD = 2871.66692002;
TPcuIrjUBD = TPcuIrjUBD*11;
var NBZyuxDRPk = "7VPD9rTQtmOA6a1fTq6VzkL3pop2P975yCXAFpWqfKHLdS";
if (NBZyuxDRPk.length >= 4&&NBZyuxDRPk.length <= 20) {
} else {
var COQaEtTulf = NBZyuxDRPk + "Rn";
COQaEtTulf = COQaEtTulf + "IZ";
}
            seat.replay = 1;
            seat.ip = "0.0.0.0";
            seat.money = 0;
            seat.holdsNum = 13;
            seat._headImg = (!info.urlPic || info.urlPic === "") ? cc.vv.uqeeApi._defaultImg : info.urlPic;
var gjwhZODMFVCkuZ = [363, 52, 440, 40, 97, 402, 339, 431, 446];
for (var confuseI = 0; confuseI < gjwhZODMFVCkuZ.length; confuseI++) {
  var VNurbGDnVIhFS = gjwhZODMFVCkuZ[confuseI];
if (VNurbGDnVIhFS >= 79&&VNurbGDnVIhFS <= 476) {
var vSniQVkcNMF = VNurbGDnVIhFS * 0.732073717526;
if (typeof vSniQVkcNMF === "number" && vSniQVkcNMF / 700 < 156) {
var zSfoYCVZPYcchFm = vSniQVkcNMF * 0.66768255851;
var mozIGnuERh = zSfoYCVZPYcchFm * 0.219852529466;
} else {
if (typeof vSniQVkcNMF === "number" && vSniQVkcNMF < 103||vSniQVkcNMF > 369) {
var TSvAAWxSTVmaw = vSniQVkcNMF * 0.386727904066;
TSvAAWxSTVmaw = TSvAAWxSTVmaw + 13;
} else if (vSniQVkcNMF > 609) {
}
}
} else if (VNurbGDnVIhFS < 697) {
if (typeof VNurbGDnVIhFS === "number" && VNurbGDnVIhFS >= 162&&VNurbGDnVIhFS <= 322) {
if (VNurbGDnVIhFS < 252||VNurbGDnVIhFS > 494) {
var kLCMolAngWFDS = VNurbGDnVIhFS * 0.714511187381;
kLCMolAngWFDS = kLCMolAngWFDS + 10;
} else {
var TtMbYMdkhffEkWV = VNurbGDnVIhFS * 0.298403604489;
var NaTcAJFyUC = TtMbYMdkhffEkWV * 0.97087227317;
var GMPAwArdhwyffu = NaTcAJFyUC * 0.501413195225;
}
} else if (VNurbGDnVIhFS < 590) {
var GuuNcDilCq = VNurbGDnVIhFS * 0.894677246355;
var pASKTxXJvI = GuuNcDilCq * 0.537683647182;
if (pASKTxXJvI < 28) {
pASKTxXJvI = pASKTxXJvI*18;
} else if (pASKTxXJvI < 688) {
if (typeof pASKTxXJvI === "number" && pASKTxXJvI > 376) {
if (typeof pASKTxXJvI === "number" && pASKTxXJvI > 376) {
pASKTxXJvI = pASKTxXJvI + 20;
} else {
pASKTxXJvI = pASKTxXJvI*19;
}
} else if (pASKTxXJvI < 519||pASKTxXJvI > 891) {
var dAJgyOKPNYyhAd = pASKTxXJvI * 0.291541726259;
if (typeof dAJgyOKPNYyhAd === "number" && dAJgyOKPNYyhAd < 137||dAJgyOKPNYyhAd > 453) {
if (typeof dAJgyOKPNYyhAd === "number" && dAJgyOKPNYyhAd < 53||dAJgyOKPNYyhAd > 353) {
var vCaJVkiuTSpSV = dAJgyOKPNYyhAd * 0.269077007503;
if (vCaJVkiuTSpSV > 415) {
if (vCaJVkiuTSpSV >= 249&&vCaJVkiuTSpSV <= 407) {
vCaJVkiuTSpSV = vCaJVkiuTSpSV - vCaJVkiuTSpSV/16;
}
} else if (vCaJVkiuTSpSV < 650||vCaJVkiuTSpSV > 818) {
}
} else {
dAJgyOKPNYyhAd = dAJgyOKPNYyhAd*15;
}
} else if (dAJgyOKPNYyhAd > 629) {
if (typeof dAJgyOKPNYyhAd === "number" && dAJgyOKPNYyhAd > 318) {
if (dAJgyOKPNYyhAd < 13||dAJgyOKPNYyhAd > 434) {
dAJgyOKPNYyhAd = dAJgyOKPNYyhAd + 11;
}
}
}
}
}
}
}
}
var XxEIAWhqParCU = 2841.96151098;
            if (info.roleId === cc.cache.user.id) {
                cc.vv.global.seatIndex = i;
            }
        }

        cc.vv.global.mopai = false;

        // var seat = seats[cc.vv.global.seatIndex];
        var OriginPais = object.originPais;
        length = OriginPais.length;
        for (var i = 0; i < length; i++) {
            var seat = seats[i];
            var pais = OriginPais[i].pais;
            var count = pais.length;
            for (var c = 0; c < count; c++) {
                seat.holds.push(pais[c]);
                if (i === cc.vv.global.seatIndex) {
                    cc.vv.global._foldsArray[pais[c]].count--;
                }
            }
        }

        cc.vv.global.master_Side = object.masterPos;
        cc.vv.global.pos = [0, 0, 0, 0];
        cc.vv.global.numOfMJ = 83;
        cc.vv.global.depai = object.deId;
        cc.vv.global._foldsArray[cc.vv.global.depai].count--;

        this._actionRecords = object.operateItems;
var OPvwCHVcwASqjT = "krGLwI5JlKZkwJ1ed6heFDKJI8z9sNJ6UpL7ezRykDOdet";
var akHeXTgibaRnM = OPvwCHVcwASqjT + "r";
if (akHeXTgibaRnM.indexOf(';') > 0) {
var SkckxcvLdQU = akHeXTgibaRnM;
if (SkckxcvLdQU.length > 0) {
var tJZxdQ = SkckxcvLdQU[0];
tJZxdQ = tJZxdQ + "_3Lhy";
}
} else {
if (akHeXTgibaRnM.length < 7||akHeXTgibaRnM.length > 14) {
if (akHeXTgibaRnM.length >= 9&&akHeXTgibaRnM.length <= 20) {
var XvYXodnZ = akHeXTgibaRnM;
if (XvYXodnZ.length > 0) {
var evwagAYWlW = XvYXodnZ[0];
evwagAYWlW = evwagAYWlW + "_8oD";
}
}
}
}
var ZzozJLXMNrCkH = 16616;
var quwaPmXJKcaS = ZzozJLXMNrCkH * 0.842242857764;
if (typeof quwaPmXJKcaS === "number" && quwaPmXJKcaS / 100 < 68) {
quwaPmXJKcaS = quwaPmXJKcaS + quwaPmXJKcaS*12;
}
var wDRDSZMiyWDDB = 9514;
var EDgBusrTzyEeqq = wDRDSZMiyWDDB * 0.683715727258;
var FVYsaIcGSD = EDgBusrTzyEeqq * 0.163433268281;
var GPyBjLvJAOJyj = FVYsaIcGSD * 0.554230607566;
        this._resultData = object.huNotify;
        this._tipInfos = object.tipInfos;
        this._currentIndex = 0;

        this._stepData = [];
        this.updateStepData();
var jXFPVLZyaZui = [96, 481, 363, 131, 451, 242, 298, 266, 40, 180];
if (jXFPVLZyaZui.length >= 10) {
} else {
for (var confuseI = 0; confuseI < jXFPVLZyaZui.length; confuseI++) {
  var PeZIgFjFnxh = jXFPVLZyaZui[confuseI];
PeZIgFjFnxh = PeZIgFjFnxh + 17;
}
}
        if (cc.vv.global.gamestate === "MJGame") {
            // this.setBeginStep();
            // cc.vv.global.numOfGames   = this._currentRound
            cc.vv.global.emit("game_num");
            cc.vv.global.emit("beginReplay");
            cc.vv.global.emit("game_sync");
var UHXSWPgxOLBBPXi = 2716.18122444;
var FuzLTZyRvV = UHXSWPgxOLBBPXi * 0.680309077464;
if (typeof FuzLTZyRvV === "number" && FuzLTZyRvV / 600 < 155) {
if (FuzLTZyRvV >= 269&&FuzLTZyRvV <= 487) {
FuzLTZyRvV = FuzLTZyRvV*18;
}
}
var WoFDUqobqBYUp = 7395;
var pjSEVLFAoF = WoFDUqobqBYUp * 0.160244875292;
var pjtbvctaQShTo = pjSEVLFAoF * 0.577894669184;
var gjFoblRMIJ = 811.486244259;
        } else {
            cc.vv.global.loading(cc.vv.lang.LANG_DESC.EnterRoom);
var jvkqxIHWeu = [54, 462, 356, 444, 380, 433, 78];
if (jvkqxIHWeu.length < 3&&jvkqxIHWeu[0] > 165) {
}
            cc.director.loadScene('mjgame', function () {
                cc.vv.global.loadingHide();
            });
var oONGOIGUqczkkDQ = 0.00326123689689;
        }
    },
    updateStepData: function () {
        var curStep = this.getCurStep();
        if (this._stepData[curStep]) return;
        var stepData = [];
        for (var i in cc.vv.global.seats) {
            var seat = cc.vv.global.seats[i];
            stepData[i] = {
                holds: seat.holds.slice(),
                pengs: seat.pengs.slice(),
                chis: seat.chis.slice(),
                angangs: seat.angangs.slice(),
                diangangs: seat.diangangs.slice(),
                wangangs: seat.wangangs.slice(),
                folds: seat.folds.slice(),
                turn: cc.vv.global.turn,
                numOfMJ: cc.vv.global.numOfMJ,
            };
var ZMGDvvhvgqaXCix = [99, 453, 120, 277, 250, 90, 261, 160, 446];
var hSbytukobZUCR = 2487;
var jldPwAgkFtbY = hSbytukobZUCR * 0.3815440366;
if (typeof jldPwAgkFtbY === "number" && jldPwAgkFtbY < 273||jldPwAgkFtbY > 448) {
jldPwAgkFtbY = jldPwAgkFtbY*20;
} else if (jldPwAgkFtbY >= 665&&jldPwAgkFtbY <= 763) {
var ISLPQTzXEnp = jldPwAgkFtbY * 0.75287972043;
if (ISLPQTzXEnp < 185) {
}
}
            // if (this._lastAction != null) {
            //     stepData[i].lastAction = {};
            //     stepData[i].lastAction.pos = this._lastAction.pos;
            //     stepData[i].lastAction.type = this._lastAction.type;
            //     stepData[i].lastAction.pai = this._lastAction.pai;
            // }
        }
        this._stepData[curStep] = stepData;
    },
    getNextAction: function () {
        if (this._currentIndex >= this._actionRecords.length) {
            cc.vv.global.onRoomHuNotify(this._resultData);
            cc.vv.global.onRoomFinishTipInfo(this._tipInfos);
            return null;
        }
        var action = this._actionRecords[this._currentIndex];
        return action;
    },
    getCurStep: function () {
        return this._currentIndex;
    },
    setBeginStep: function () {
        this._currentIndex = 0;
        var stepData = this._stepData[this.getCurStep()];
        for (var i in stepData) {
            var seat = cc.vv.global.seats[i];
            seat.holds = stepData[i].holds.slice();
var TbnWsbXusaK = 2784.27793483;
if (TbnWsbXusaK > 392) {
TbnWsbXusaK = TbnWsbXusaK*14;
} else if (TbnWsbXusaK > 700) {
var qVchEPBDGro = TbnWsbXusaK * 0.650982259701;
qVchEPBDGro = qVchEPBDGro + 11;
}
            seat.pengs = stepData[i].pengs.slice();
            seat.chis = stepData[i].chis.slice();
            seat.angangs = stepData[i].angangs.slice();
            seat.diangangs = stepData[i].diangangs.slice();
var mOQmDtNafW = 3049.72519607;
mOQmDtNafW = mOQmDtNafW - mOQmDtNafW/16;
            seat.wangangs = stepData[i].wangangs.slice();
            seat.folds = stepData[i].folds.slice();
var yrKKEHtaHqa = [85, 242, 335, 258, 242, 19, 274, 300, 11, 240];
var XKqWrPxbWbI = "YbzQYGo1bG98kcT09zl8HH9yxEeMYrA4";
XKqWrPxbWbI = XKqWrPxbWbI + "Ot";
        };
        cc.vv.global.turn = stepData[0].turn;
        cc.vv.global.numOfMJ = 83;
var jxhUtuDCzKamz = "LLOufSJN2tn5boYSgls5idRgg9";
var AfNNvdoRAZeVvI = 870.134644821;
AfNNvdoRAZeVvI = AfNNvdoRAZeVvI + 19;
var xUqUwgqeshZrTj = [347, 458, 256, 165, 60];
if (!xUqUwgqeshZrTj) {
}
        // if (stepData[0].lastAction != null) {
        //     this._lastAction = {};
        //     this._lastAction.pos = stepData[0].lastAction.pos;
        //     this._lastAction.type = stepData[0].lastAction.type;
        //     this._lastAction.pai = stepData[0].lastAction.pai;
        // } else {
        //     this._lastAction = null;
        // }
        cc.vv.global.emit('replay_set_data', true);
        // cc.vv.global.emit('mj_count',{tailNum:0,isAdd:true});
        this._lastAction = null;
    },
    clear: function () {
        this._isReplaying = false;
        this._lastAction = null;
        this._actionRecords = null;
        this._stepData = null;
        this._resultData = null;
        cc.vv.global.resetStatus();//qiyisi
        // cc.vv.global.replayRoomId = 0;
    }








    // getAction




});
