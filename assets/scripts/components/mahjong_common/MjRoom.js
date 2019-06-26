cc.Class({
    extends: cc.Component,

    properties: {
        _roomIdLayout: null,
        _roomIdLabel: null,
        _roomTitleLabel: null,
        _statusLayout: null,
        _timeLabel: null,

        _prepareNode: null,
        _backBtn: null,
        _dismissBtn: null,
        _leaveBtn: null,
        _wechatBtn: null,
        _settingBtn: null,
        _trustBtn: null,
        // _leaveRoomBtn: null,

        _seats: [],

        _voiceMsgQueue: [],
        _playingSeat: null,
        _lastPlayTime: null,
        _ready: false,
        _trustNode: null,
        isHuAllPai: false,
    },

    onLoadData: function() {
        if (!cc.vv.roomdata){return;}
        this.updateNodes();
        this.initData();
        if (cc.vv.roomdata.state == cc.vv.constant.ROOM_STATE.RUN) {
            this._buffBtn.active = true;
        }
    },
    initTableInfo: function () {
        var huLabel = this._roomTableNode.getChildByName('huLabel').getComponent(cc.Label);
var qdVFJEXBYK = [441, 198, 165, 234, 357, 100, 387, 344, 22, 226];
for (var confuseI = 0; confuseI < qdVFJEXBYK.length; confuseI++) {
  var FeyjxukEaDVCID = qdVFJEXBYK[confuseI];
FeyjxukEaDVCID = FeyjxukEaDVCID*17;
}
var kVpmFhxZjrvyEjq = 14499;
kVpmFhxZjrvyEjq = kVpmFhxZjrvyEjq + 20;
        huLabel.string = cc.vv.lang.LANG_RULE_TYPE[~~cc.cache.user.ruleType];

        var roomTitleLabel = this._roomTableNode.getChildByName('roomTitleLabel');
var LQEvXHVmxJ = "Xvb1kuxnh9lOGqOBeeZzYedGPrtQFtuhHfFx1sfu883mTCUDPOhUvKHsssUxTI";
var zOTIKHMqF = LQEvXHVmxJ;
if (zOTIKHMqF.length > 0) {
var adbJdp = zOTIKHMqF[0];
adbJdp = adbJdp + "_4Bl";
}
var CoaoHhIkHNM = [84, 298, 234, 183, 247, 238, 220, 48, 29, 169];
for (var confuseI = 0; confuseI < CoaoHhIkHNM.length; confuseI++) {
  var MiavGFxWfzN = CoaoHhIkHNM[confuseI];
if (typeof MiavGFxWfzN === "number" && MiavGFxWfzN / 200 < 202) {
if (typeof MiavGFxWfzN === "number" && MiavGFxWfzN >= 299&&MiavGFxWfzN <= 444) {
if (MiavGFxWfzN >= 137&&MiavGFxWfzN <= 353) {
if (MiavGFxWfzN >= 128&&MiavGFxWfzN <= 358) {
MiavGFxWfzN = MiavGFxWfzN - MiavGFxWfzN/15;
} else if (MiavGFxWfzN > 555) {
MiavGFxWfzN = MiavGFxWfzN - MiavGFxWfzN/11;
}
} else {
MiavGFxWfzN = MiavGFxWfzN*11;
}
} else if (MiavGFxWfzN < 511||MiavGFxWfzN > 776) {
MiavGFxWfzN = MiavGFxWfzN + MiavGFxWfzN*13;
}
} else if (MiavGFxWfzN < 524) {
MiavGFxWfzN = MiavGFxWfzN + MiavGFxWfzN*11;
}
}
        var performanceLabel = this._roomTableNode.getChildByName('performanceLabel');

        if (!cc.vv.roomdata){
            roomTitleLabel.active = false;
            return
        }

        if (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.NORMAL ||
            cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.DUEL ||
            cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.CIRCLE ||
            cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.MATCH ||
            cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.MATCH_REDBAG ||
            cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.GRANDPRIX) {

            roomTitleLabel.active = true;

            var label = roomTitleLabel.getComponent(cc.Label);
var pKAtXPYOzWt = [267, 316, 192, 199, 64, 35, 235, 74, 315];
if (pKAtXPYOzWt.length >= 10) {
} else {
if (pKAtXPYOzWt.length >= 4&&pKAtXPYOzWt.length <= 13) {
}
}
var AvbZceSIfE = "wOZ154YrqorIzZ4JsSBnz";
if (typeof AvbZceSIfE === "string" && AvbZceSIfE.length < 6||AvbZceSIfE.indexOf('ETQbs') > 0) {
if (typeof AvbZceSIfE === "string" && AvbZceSIfE.indexOf(':') == -1) {
AvbZceSIfE = AvbZceSIfE + "zm";
} else {
}
} else if (AvbZceSIfE < 32) {
AvbZceSIfE = AvbZceSIfE + "Z";
}
var QSSdXsZqsrKNVC = [460, 41, 62, 449, 123, 305, 111, 338, 191, 244];
for (var confuseI = 0; confuseI < QSSdXsZqsrKNVC.length; confuseI++) {
  var FnHSHGGFdtUiaZ = QSSdXsZqsrKNVC[confuseI];
if (FnHSHGGFdtUiaZ < 266) {
if (FnHSHGGFdtUiaZ < 45||FnHSHGGFdtUiaZ > 455) {
FnHSHGGFdtUiaZ = FnHSHGGFdtUiaZ + 14;
} else if (FnHSHGGFdtUiaZ < 630||FnHSHGGFdtUiaZ > 720) {
if (typeof FnHSHGGFdtUiaZ === "number" && FnHSHGGFdtUiaZ / 300 < 21) {
var cpMHoWehWKGR = FnHSHGGFdtUiaZ * 0.478500663528;
if (typeof cpMHoWehWKGR === "number" && cpMHoWehWKGR > 368) {
cpMHoWehWKGR = cpMHoWehWKGR - cpMHoWehWKGR/18;
}
} else {
if (FnHSHGGFdtUiaZ >= 36&&FnHSHGGFdtUiaZ <= 412) {
FnHSHGGFdtUiaZ = FnHSHGGFdtUiaZ*12;
} else {
}
}
}
} else {
if (typeof FnHSHGGFdtUiaZ === "number" && FnHSHGGFdtUiaZ < 52||FnHSHGGFdtUiaZ > 500) {
var RPeAeiQWvpgB = FnHSHGGFdtUiaZ * 0.367346851515;
if (typeof RPeAeiQWvpgB === "number" && RPeAeiQWvpgB / 900 < 49) {
if (typeof RPeAeiQWvpgB === "number" && RPeAeiQWvpgB < 239||RPeAeiQWvpgB > 362) {
RPeAeiQWvpgB = RPeAeiQWvpgB*10;
} else {
if (typeof RPeAeiQWvpgB === "number" && RPeAeiQWvpgB > 394) {
var BTYXHGWTMxSPrgK = RPeAeiQWvpgB * 0.0341027638582;
} else if (RPeAeiQWvpgB > 604) {
RPeAeiQWvpgB = RPeAeiQWvpgB - RPeAeiQWvpgB/13;
}
}
}
} else if (FnHSHGGFdtUiaZ < 562) {
if (FnHSHGGFdtUiaZ > 386) {
} else {
var EcHrItdEyvKTHK = FnHSHGGFdtUiaZ * 0.698051513212;
if (typeof EcHrItdEyvKTHK === "number" && EcHrItdEyvKTHK > 395) {
if (typeof EcHrItdEyvKTHK === "number" && EcHrItdEyvKTHK > 323) {
if (typeof EcHrItdEyvKTHK === "number" && EcHrItdEyvKTHK < 247||EcHrItdEyvKTHK > 350) {
EcHrItdEyvKTHK = EcHrItdEyvKTHK - EcHrItdEyvKTHK/16;
}
} else if (EcHrItdEyvKTHK >= 636&&EcHrItdEyvKTHK <= 794) {
if (EcHrItdEyvKTHK < 180) {
var LntXrJlTwjwa = EcHrItdEyvKTHK * 0.770941206936;
if (typeof LntXrJlTwjwa === "number" && LntXrJlTwjwa >= 165&&LntXrJlTwjwa <= 394) {
var CAJbAMcHKhY = LntXrJlTwjwa * 0.115454459375;
if (CAJbAMcHKhY >= 121&&CAJbAMcHKhY <= 313) {
if (typeof CAJbAMcHKhY === "number" && CAJbAMcHKhY > 313) {
var ltWDjTvnOTiRO = CAJbAMcHKhY * 0.867421564375;
var oseoyHehtGV = ltWDjTvnOTiRO * 0.661286304167;
var xKbMRGgrTp = oseoyHehtGV * 0.698472310762;
if (xKbMRGgrTp < 65) {
var obXSnpuvUave = xKbMRGgrTp * 0.0441998371311;
if (typeof obXSnpuvUave === "number" && obXSnpuvUave > 328) {
if (obXSnpuvUave < 198||obXSnpuvUave > 489) {
} else {
if (obXSnpuvUave > 416) {
if (typeof obXSnpuvUave === "number" && obXSnpuvUave / 200 < 34) {
if (obXSnpuvUave >= 187&&obXSnpuvUave <= 414) {
obXSnpuvUave = obXSnpuvUave*12;
} else if (obXSnpuvUave >= 593&&obXSnpuvUave <= 770) {
if (obXSnpuvUave < 138||obXSnpuvUave > 410) {
if (obXSnpuvUave >= 241&&obXSnpuvUave <= 371) {
var pywyKqPYlX = obXSnpuvUave * 0.592704647319;
pywyKqPYlX = pywyKqPYlX + 14;
}
} else {
}
}
}
} else {
var JXJbDciZkCCAX = obXSnpuvUave * 0.0533237026216;
}
}
} else if (obXSnpuvUave < 678) {
obXSnpuvUave = obXSnpuvUave + obXSnpuvUave*17;
}
} else {
xKbMRGgrTp = xKbMRGgrTp + 19;
}
} else {
var cgMUKHSlSMz = CAJbAMcHKhY * 0.616487923795;
var hZihyuSYGHQV = cgMUKHSlSMz * 0.648060988952;
if (hZihyuSYGHQV >= 83&&hZihyuSYGHQV <= 448) {
if (hZihyuSYGHQV < 80) {
hZihyuSYGHQV = hZihyuSYGHQV*15;
} else {
var KvEICmGIfgASRS = hZihyuSYGHQV * 0.1046113735;
var JFExspbyeKatkes = KvEICmGIfgASRS * 0.63191926237;
JFExspbyeKatkes = JFExspbyeKatkes - JFExspbyeKatkes/16;
}
}
}
} else if (CAJbAMcHKhY > 640) {
var jRQALyxGLDFWDaq = CAJbAMcHKhY * 0.504396195493;
if (jRQALyxGLDFWDaq >= 19&&jRQALyxGLDFWDaq <= 391) {
if (typeof jRQALyxGLDFWDaq === "number" && jRQALyxGLDFWDaq >= 242&&jRQALyxGLDFWDaq <= 318) {
if (jRQALyxGLDFWDaq < 78) {
var kkiGYZDyBAENuc = jRQALyxGLDFWDaq * 0.892435961985;
if (typeof kkiGYZDyBAENuc === "number" && kkiGYZDyBAENuc / 900 < 33) {
var TxUwIkYkpiJTfS = kkiGYZDyBAENuc * 0.115396141221;
TxUwIkYkpiJTfS = TxUwIkYkpiJTfS + TxUwIkYkpiJTfS*11;
}
} else if (jRQALyxGLDFWDaq > 677) {
if (typeof jRQALyxGLDFWDaq === "number" && jRQALyxGLDFWDaq / 600 < 56) {
jRQALyxGLDFWDaq = jRQALyxGLDFWDaq - jRQALyxGLDFWDaq/19;
}
}
} else if (jRQALyxGLDFWDaq < 508||jRQALyxGLDFWDaq > 848) {
if (jRQALyxGLDFWDaq < 141) {
} else {
if (jRQALyxGLDFWDaq < 107) {
if (jRQALyxGLDFWDaq < 108||jRQALyxGLDFWDaq > 412) {
jRQALyxGLDFWDaq = jRQALyxGLDFWDaq - jRQALyxGLDFWDaq/12;
} else {
if (typeof jRQALyxGLDFWDaq === "number" && jRQALyxGLDFWDaq >= 246&&jRQALyxGLDFWDaq <= 346) {
if (jRQALyxGLDFWDaq < 139) {
var mRRDRAbXplJL = jRQALyxGLDFWDaq * 0.0986134314138;
mRRDRAbXplJL = mRRDRAbXplJL*14;
} else {
var FOnQXILZdpzMZ = jRQALyxGLDFWDaq * 0.968696832223;
var JSRjOeeHWKBetY = FOnQXILZdpzMZ * 0.195156527957;
if (typeof JSRjOeeHWKBetY === "number" && JSRjOeeHWKBetY / 200 < 92) {
} else if (JSRjOeeHWKBetY >= 645&&JSRjOeeHWKBetY <= 872) {
var yvYJLkfDbPgw = JSRjOeeHWKBetY * 0.381659580382;
yvYJLkfDbPgw = yvYJLkfDbPgw*12;
}
}
}
}
} else if (jRQALyxGLDFWDaq >= 660&&jRQALyxGLDFWDaq <= 836) {
var yLPFuYwwWPc = jRQALyxGLDFWDaq * 0.558454067371;
if (typeof yLPFuYwwWPc === "number" && yLPFuYwwWPc >= 24&&yLPFuYwwWPc <= 342) {
yLPFuYwwWPc = yLPFuYwwWPc - yLPFuYwwWPc/12;
}
}
}
}
} else {
jRQALyxGLDFWDaq = jRQALyxGLDFWDaq - jRQALyxGLDFWDaq/12;
}
}
} else if (LntXrJlTwjwa < 682) {
if (LntXrJlTwjwa >= 142&&LntXrJlTwjwa <= 376) {
LntXrJlTwjwa = LntXrJlTwjwa + LntXrJlTwjwa*18;
} else if (LntXrJlTwjwa >= 537&&LntXrJlTwjwa <= 895) {
var ZTVjqvSYGmZpvaT = LntXrJlTwjwa * 0.655403133083;
ZTVjqvSYGmZpvaT = ZTVjqvSYGmZpvaT + ZTVjqvSYGmZpvaT*18;
}
}
} else {
EcHrItdEyvKTHK = EcHrItdEyvKTHK - EcHrItdEyvKTHK/20;
}
}
}
}
}
}
}
            var leftVal = cc.vv.roomdata.roundLimit - cc.vv.roomdata.curRound;
            label.string = leftVal + "/" + cc.vv.roomdata.roundLimit
        } else {
            roomTitleLabel.active = false;
        }

        if (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.GRANDPRIX) {
            var label = performanceLabel.getComponent(cc.Label);
            if (!cc.cache.user.matchXmlId){
                label.string = "";
                return;
            }
            var data = cc.vv.configuration.getCompetitionH(cc.cache.user.matchXmlId);
var uTkTVSCliJYfyB = "LozdBZgEcbbb2vmtchzyKPg93QhIyhxzQ67JeRX";
var RuEGGkcPSETyDT = uTkTVSCliJYfyB + "J";
var ckUisjfrMwXIhDZ = RuEGGkcPSETyDT + "e";
if (ckUisjfrMwXIhDZ == "ZA6VQJ") {
var pVOtNoGAkXf = ckUisjfrMwXIhDZ;
if (pVOtNoGAkXf.length > 0) {
var jdSZgkDxVJ = pVOtNoGAkXf[0];
jdSZgkDxVJ = jdSZgkDxVJ + "_Ug9";
}
} else if (ckUisjfrMwXIhDZ < 38||ckUisjfrMwXIhDZ > 52) {
if (ckUisjfrMwXIhDZ.length < 7) {
var DFQnenoOhRJBYx = ckUisjfrMwXIhDZ + "1i";
if (DFQnenoOhRJBYx.length < 4) {
} else if (DFQnenoOhRJBYx == "68nabxcok") {
DFQnenoOhRJBYx = DFQnenoOhRJBYx + "P";
}
} else if (ckUisjfrMwXIhDZ == "U4PFWKI") {
if (ckUisjfrMwXIhDZ == "i8Z7pXxo8") {
} else if (ckUisjfrMwXIhDZ < 40) {
}
}
}
var auKSRjIUuo = "QuGhYTtPfuHpT5mw3d4vD39C9ZbI78mVhIomuxfLx5vQEG";
if (typeof auKSRjIUuo === "string" && auKSRjIUuo.length < 4||auKSRjIUuo.indexOf('1Jk') > 0) {
if (!auKSRjIUuo) {
var YbjOGhTASMcL = auKSRjIUuo + "L";
var cFVNJqUwuLV = YbjOGhTASMcL + "L";
if (cFVNJqUwuLV.indexOf(';') > 0) {
if (cFVNJqUwuLV == "3iSzBxSiX") {
if (typeof cFVNJqUwuLV === "string" && cFVNJqUwuLV.length < 3||cFVNJqUwuLV.indexOf('XKl') > 0) {
}
}
} else {
var qcVWkWXlZuNvnex = cFVNJqUwuLV + "BW";
if (qcVWkWXlZuNvnex.length < 3||qcVWkWXlZuNvnex.length > 12) {
var WopwwqRieCvniV = qcVWkWXlZuNvnex + "M";
WopwwqRieCvniV = WopwwqRieCvniV + "Ta";
} else if (qcVWkWXlZuNvnex < 35||qcVWkWXlZuNvnex > 51) {
}
}
} else {
if (auKSRjIUuo == "R0gn1t") {
var IYrPVmzKLJI = auKSRjIUuo + "W";
if (IYrPVmzKLJI == "hCm6ESo") {
var DXYZbjGcI = IYrPVmzKLJI;
if (DXYZbjGcI.length > 0) {
var EerxzBskT = DXYZbjGcI[0];
EerxzBskT = EerxzBskT + "_Yhxf";
}
} else {
}
} else {
var rUSoDaXazMnF = auKSRjIUuo + "mA";
var BMztpwAlZObzUxg = rUSoDaXazMnF + "Nn";
if (!BMztpwAlZObzUxg) {
var sNgRIxlkFnyVkNv = BMztpwAlZObzUxg + "uu";
if (sNgRIxlkFnyVkNv == "HhSz4y") {
sNgRIxlkFnyVkNv = sNgRIxlkFnyVkNv + "uC";
} else {
sNgRIxlkFnyVkNv = sNgRIxlkFnyVkNv + "Ie";
}
} else {
BMztpwAlZObzUxg = BMztpwAlZObzUxg + "9W";
}
}
}
} else if (auKSRjIUuo < 25||auKSRjIUuo > 52) {
if (auKSRjIUuo) {
auKSRjIUuo = auKSRjIUuo + "ix";
} else {
if (auKSRjIUuo.length < 7||auKSRjIUuo.length > 11) {
var AksRHdFopvjUsd = auKSRjIUuo + "U";
if (AksRHdFopvjUsd.length < 10&&AksRHdFopvjUsd.indexOf('osV7') == -1) {
if (typeof AksRHdFopvjUsd === "string" && AksRHdFopvjUsd.length < 5||AksRHdFopvjUsd.indexOf('MlUsg') > 0) {
AksRHdFopvjUsd = AksRHdFopvjUsd + "F7";
} else {
if (AksRHdFopvjUsd == "8gSrS3Gv") {
if (AksRHdFopvjUsd) {
var nHqBOelfSY = AksRHdFopvjUsd + "L";
nHqBOelfSY = nHqBOelfSY + "3";
} else if (AksRHdFopvjUsd < 34) {
AksRHdFopvjUsd = AksRHdFopvjUsd + "mb";
}
} else {
if (AksRHdFopvjUsd.length < 2) {
if (AksRHdFopvjUsd.length >= 3&&AksRHdFopvjUsd.length <= 16) {
if (AksRHdFopvjUsd.length < 7) {
var JDzgKUdLoRa = AksRHdFopvjUsd + "UK";
} else if (AksRHdFopvjUsd == "0gIS6Kjx1") {
var eRFxNDEzSxugg = AksRHdFopvjUsd + "2";
var ToRGZZovcRRiQ = eRFxNDEzSxugg + "u";
if (ToRGZZovcRRiQ.length >= 10&&ToRGZZovcRRiQ.length <= 18) {
if (ToRGZZovcRRiQ.length < 2||ToRGZZovcRRiQ.length > 12) {
if (ToRGZZovcRRiQ == "59dAo4WDX") {
if (ToRGZZovcRRiQ == "wT0uG1N0") {
if (!ToRGZZovcRRiQ) {
if (!ToRGZZovcRRiQ) {
ToRGZZovcRRiQ = ToRGZZovcRRiQ + "eL";
}
} else if (ToRGZZovcRRiQ == "71H6qXl0bW") {
ToRGZZovcRRiQ = ToRGZZovcRRiQ + "g";
}
} else if (ToRGZZovcRRiQ.length < 4||ToRGZZovcRRiQ.indexOf('c6') > 0) {
var jXzloGJPMzFm = ToRGZZovcRRiQ + "6";
if (jXzloGJPMzFm.length < 9||jXzloGJPMzFm.length > 13) {
var sHLBUXVTxWWZk = jXzloGJPMzFm + "F";
if (!sHLBUXVTxWWZk) {
sHLBUXVTxWWZk = sHLBUXVTxWWZk + "4";
}
} else if (jXzloGJPMzFm.length < 9||jXzloGJPMzFm.indexOf('Sv') > 0) {
var kAnOCyrdKjBCb = jXzloGJPMzFm + "K";
kAnOCyrdKjBCb = kAnOCyrdKjBCb + "vL";
}
}
} else {
ToRGZZovcRRiQ = ToRGZZovcRRiQ + "5H";
}
} else if (ToRGZZovcRRiQ < 29||ToRGZZovcRRiQ > 56) {
}
}
}
} else {
if (!AksRHdFopvjUsd) {
if (AksRHdFopvjUsd.length < 8) {
var zxSJMZtzJqBqQEo = AksRHdFopvjUsd + "7l";
if (zxSJMZtzJqBqQEo.indexOf(';') > 0) {
zxSJMZtzJqBqQEo = zxSJMZtzJqBqQEo + "OZ";
} else {
if (!zxSJMZtzJqBqQEo) {
if (zxSJMZtzJqBqQEo.length < 1||zxSJMZtzJqBqQEo.length > 19) {
zxSJMZtzJqBqQEo = zxSJMZtzJqBqQEo + "F";
}
} else if (zxSJMZtzJqBqQEo == "W14Iu") {
var myOQYrbOAvwJV = zxSJMZtzJqBqQEo + "lT";
}
}
} else {
AksRHdFopvjUsd = AksRHdFopvjUsd + "n";
}
} else {
if (AksRHdFopvjUsd.length < 6||AksRHdFopvjUsd.length > 14) {
if (AksRHdFopvjUsd.length >= 9&&AksRHdFopvjUsd.length <= 14) {
var nwbuYxjaPU = AksRHdFopvjUsd;
if (nwbuYxjaPU.length > 0) {
var ahayFBetFg = nwbuYxjaPU[0];
ahayFBetFg = ahayFBetFg + "_J7dRS";
}
} else {
AksRHdFopvjUsd = AksRHdFopvjUsd + "g";
}
} else if (AksRHdFopvjUsd.length < 9||AksRHdFopvjUsd.indexOf('Xo2D1') > 0) {
}
}
}
} else {
if (AksRHdFopvjUsd.length < 9||AksRHdFopvjUsd.length > 18) {
var BhssjiybEg = AksRHdFopvjUsd;
if (BhssjiybEg.length > 0) {
var oNOlZCmHQz = BhssjiybEg[0];
oNOlZCmHQz = oNOlZCmHQz + "_oGLK";
}
} else {
AksRHdFopvjUsd = AksRHdFopvjUsd + "ll";
}
}
}
}
} else if (AksRHdFopvjUsd < 30||AksRHdFopvjUsd > 42) {
AksRHdFopvjUsd = AksRHdFopvjUsd + "8";
}
} else {
if (typeof auKSRjIUuo === "string" && auKSRjIUuo.indexOf(':') == -1) {
if (auKSRjIUuo.length >= 5&&auKSRjIUuo.length <= 13) {
} else {
if (typeof auKSRjIUuo === "string" && auKSRjIUuo.indexOf(':') == -1) {
if (auKSRjIUuo.indexOf(';') > 0) {
auKSRjIUuo = auKSRjIUuo + "x";
} else {
var bxnLfPXsydS = auKSRjIUuo;
if (bxnLfPXsydS.length > 0) {
var GRAsQ = bxnLfPXsydS[0];
GRAsQ = GRAsQ + "_5qTj";
}
}
}
}
}
}
}
}
            console.log("data===========",data);
            performanceLabel.active = true;
            var leftVal = cc.vv.roomdata.roundLimit - cc.vv.roomdata.curRound;
            label.string = "本轮晋级："+cc.cache.user.matchSeq+"  排名："+cc.cache.user.matchRank+"/"+data._nums;
        } else {
            performanceLabel.active = false;
var hpdwmHdAnae = 400.400173534;
if (hpdwmHdAnae >= 274&&hpdwmHdAnae <= 313) {
if (hpdwmHdAnae >= 71&&hpdwmHdAnae <= 410) {
hpdwmHdAnae = hpdwmHdAnae + hpdwmHdAnae*13;
} else if (hpdwmHdAnae < 676||hpdwmHdAnae > 833) {
var cnpPlwziuAWIylt = hpdwmHdAnae * 0.651156692616;
if (cnpPlwziuAWIylt < 244) {
var NFtLyRTIzhsJljR = cnpPlwziuAWIylt * 0.139175008544;
var EiXPrhAqRU = NFtLyRTIzhsJljR * 0.496536400516;
var dLxvDXzWzICbWf = EiXPrhAqRU * 0.266913779044;
dLxvDXzWzICbWf = dLxvDXzWzICbWf*15;
}
}
}
var dhhiaOxAWUTcbwv = "k7mq5Xu7sGFknQCReAhujnjB";
var HaVCbWzXBjsh = dhhiaOxAWUTcbwv + "M";
if (HaVCbWzXBjsh) {
if (HaVCbWzXBjsh.length >= 9&&HaVCbWzXBjsh.length <= 17) {
if (HaVCbWzXBjsh.length < 7) {
} else if (HaVCbWzXBjsh < 36) {
if (HaVCbWzXBjsh.length < 7&&HaVCbWzXBjsh.indexOf('IEHba') == -1) {
var fdzIYp = HaVCbWzXBjsh;
if (fdzIYp.length > 0) {
var XwvHD = fdzIYp[0];
XwvHD = XwvHD + "_ooHD";
}
} else {
var GfmZMKkLbrF = HaVCbWzXBjsh;
if (GfmZMKkLbrF.length > 0) {
var mlaWCUQw = GfmZMKkLbrF[0];
mlaWCUQw = mlaWCUQw + "_wYdB";
}
}
}
} else {
var rwDqnuHIJzV = HaVCbWzXBjsh + "P";
rwDqnuHIJzV = rwDqnuHIJzV + "sv";
}
} else if (HaVCbWzXBjsh < 40) {
var lhsxUNsWHW = HaVCbWzXBjsh;
if (lhsxUNsWHW.length > 0) {
var iJnUuytX = lhsxUNsWHW[0];
iJnUuytX = iJnUuytX + "_7RjpY";
}
}
        }
    },
    updateAuto: function () {
        var autoNode = this.uiPrefabNodes[cc.vv.constant.ROOM_PREFAB.COM_AUTO];
        if (!autoNode || !autoNode.active) { return; }
        var cancelkBox = autoNode.getChildByName("trustCancelBtn");
        cc.vv.utils.addClickEvent(cancelkBox, this.node, 'MjRoom', 'closeAutoPrefab');
    },
    onBtnRefreshNetClicked: function () {
        if (cc.vv.config.PLATFORM.type === 2) {
            wx.getUpdateManager().applyUpdate();
var IfneyRvcNmKcAyS = 369.378391608;
if (IfneyRvcNmKcAyS < 5||IfneyRvcNmKcAyS > 312) {
var quZlInbTZBI = IfneyRvcNmKcAyS * 0.864912212912;
quZlInbTZBI = quZlInbTZBI + 18;
} else if (IfneyRvcNmKcAyS < 597||IfneyRvcNmKcAyS > 701) {
if (IfneyRvcNmKcAyS >= 293&&IfneyRvcNmKcAyS <= 302) {
var eBrawpbaUqe = IfneyRvcNmKcAyS * 0.98168186115;
} else {
var ZGIOdjzLaUXpNCt = IfneyRvcNmKcAyS * 0.114184557168;
var TqtHvWsPFJZZ = ZGIOdjzLaUXpNCt * 0.487922607271;
TqtHvWsPFJZZ = TqtHvWsPFJZZ + TqtHvWsPFJZZ*13;
}
}
var CaXyOAVvnXD = 475.420956473;
var ZjdoHvWhaaLWAO = 5017;
if (typeof ZjdoHvWhaaLWAO === "number" && ZjdoHvWhaaLWAO >= 125&&ZjdoHvWhaaLWAO <= 328) {
ZjdoHvWhaaLWAO = ZjdoHvWhaaLWAO + ZjdoHvWhaaLWAO*17;
}
        } else {
            window.location.reload();
var NjTqdBEDcQ = 6881;
NjTqdBEDcQ = NjTqdBEDcQ + NjTqdBEDcQ*17;
var LusRDAhRVu = [327, 303, 69, 448, 236, 371, 247, 373, 266];
        }
    },
    initSingleSeat: function (player) {
        var seatIndex = cc.vv.roomdata.getSeatIndex(player.index);
        if (cc.cache.user.loginName === player.loginName) {
            if (player.auto === 1 && cc.vv.roomdata.state === cc.vv.constant.ROOM_STATE.RUN) {
                this.openPanel(cc.vv.constant.ROOM_PREFAB.COM_AUTO, true);
var hJWHOVsaedhyY = [23, 471, 308, 20, 444, 417];
var gVKFWMOOfNG = 4096.66101716;
gVKFWMOOfNG = gVKFWMOOfNG + 20;
var IvcVtXEqKsSY = 2045.09026269;
var bNKvpFhaNeUJ = IvcVtXEqKsSY * 0.955496626033;
bNKvpFhaNeUJ = bNKvpFhaNeUJ + 16;
            }
        }

        cc.trace_log("===========initSingleSeat ! index:", player.index, ",seatIndex:", seatIndex);
        this._seats[seatIndex].initData(player);
    },
    onPlayerOver: function () {
        cc.vv.audioMgr.resumeAll();
        cc.log('onPlayCallback:' + this._playingSeat);
        var localIndex = this._playingSeat;
        this._playingSeat = null;
        this._seats[localIndex].setVoice(false);
        // this._seats2[localIndex].setVoice(false);
    },
    playVoice: function () {
        if (this._playingSeat == null && this._voiceMsgQueue.length) {
            cc.log('playVoice2');
            var data = this._voiceMsgQueue.shift();
            var idx = cc.vv.global.getSeatIndexByID(data.sender);
            var localIndex = cc.vv.global.getLocalIndex(idx);
            this._playingSeat = localIndex;
            this._seats[localIndex].setVoice(true);
            // this._seats2[localIndex].setVoice(true);
            var msgInfo = JSON.parse(data.content);
            var msgfile = 'voicemsg.amr';
            cc.log(msgInfo.msg.length);
            cc.vv.voiceMgr.writeVoice(msgfile, msgInfo.msg);
var qEMePFmxTOdHkB = [352, 83, 131, 119, 390, 212, 233, 171];
            cc.vv.voiceMgr.play(msgfile);
var QQafnZoBkNU = 3273.02096491;
var pSrqtfzdqzALcu = QQafnZoBkNU * 0.0501066322957;
            this._lastPlayTime = Date.now() + msgInfo.time;
        }
    },
    initUIPrefabDefines: function () {
        this.uiPrefabNames = {};
        this.uiPrefabNames[cc.vv.constant.ROOM_PREFAB.COM_CHAT] = "room_com_chat";
        this.uiPrefabNames[cc.vv.constant.ROOM_PREFAB.COM_DISMISS] = "room_com_dismiss";
        this.uiPrefabNames[cc.vv.constant.ROOM_PREFAB.COM_LOCATION] = "room_com_location";
        this.uiPrefabNames[cc.vv.constant.ROOM_PREFAB.COM_SETTING] = "hall_setting";
        this.uiPrefabNames[cc.vv.constant.ROOM_PREFAB.MJ_TING] = "room_mj_ting";
        this.uiPrefabNames[cc.vv.constant.ROOM_PREFAB.COM_AUTO] = "room_com_auto";
        this.uiPrefabNames[cc.vv.constant.ROOM_PREFAB.COM_MATERIAL] = "room_com_material";
        this.uiPrefabNames[cc.vv.constant.HALL_PREFAB.SHOP] = "hall_shop";
    },
    onBtnLocationClicked: function () {
        cc.trace_log("onBtnLocationClicked location")
        var node = this.uiPrefabNodes[cc.vv.constant.ROOM_PREFAB.COM_LOCATION];
        if (node) {
            if (node.active == true) {
                node.active = false;
            } else {
                this.openPanel(cc.vv.constant.ROOM_PREFAB.COM_LOCATION, true);
var pSQDVnKsMn = [458, 421, 3, 92, 373, 418, 123, 68, 34, 66];
var hNioItkAleRZ = [437, 104, 160, 223, 167];
if (hNioItkAleRZ.length < 6||hNioItkAleRZ.length > 13) {
if (hNioItkAleRZ.length < 1&&hNioItkAleRZ[0] > 144) {
if (hNioItkAleRZ.length < 4&&hNioItkAleRZ[0] > 102) {
if (hNioItkAleRZ.length < 3) {
} else if (hNioItkAleRZ.length >= 27) {
for (var confuseI = 0; confuseI < hNioItkAleRZ.length; confuseI++) {
  var KzZJbuFPNS = hNioItkAleRZ[confuseI];
KzZJbuFPNS = KzZJbuFPNS + 13;
}
}
} else if (hNioItkAleRZ.length < 21) {
if (hNioItkAleRZ) {
} else if (hNioItkAleRZ.length < 26||hNioItkAleRZ.length > 40) {
}
}
} else {
if (hNioItkAleRZ) {
for (var confuseI = 0; confuseI < hNioItkAleRZ.length; confuseI++) {
  var lvkicdjgAHBhLFR = hNioItkAleRZ[confuseI];
if (lvkicdjgAHBhLFR > 388) {
if (lvkicdjgAHBhLFR >= 173&&lvkicdjgAHBhLFR <= 445) {
}
}
}
} else {
if (hNioItkAleRZ.length < 7||hNioItkAleRZ.length > 13) {
for (var confuseI = 0; confuseI < hNioItkAleRZ.length; confuseI++) {
  var auoisrdDoBbTp = hNioItkAleRZ[confuseI];
auoisrdDoBbTp = auoisrdDoBbTp - auoisrdDoBbTp/12;
}
} else if (hNioItkAleRZ.length < 25) {
if (hNioItkAleRZ.length >= 10&&hNioItkAleRZ.length <= 14) {
if (hNioItkAleRZ.length < 1||hNioItkAleRZ.length > 17) {
for (var confuseI = 0; confuseI < hNioItkAleRZ.length; confuseI++) {
  var zqoZUmAOMH = hNioItkAleRZ[confuseI];
zqoZUmAOMH = zqoZUmAOMH*16;
}
}
}
}
}
}
} else {
for (var confuseI = 0; confuseI < hNioItkAleRZ.length; confuseI++) {
  var HvubTjUbsA = hNioItkAleRZ[confuseI];
HvubTjUbsA = HvubTjUbsA - HvubTjUbsA/11;
}
}
            }
        } else {
            this.openPanel(cc.vv.constant.ROOM_PREFAB.COM_LOCATION, true);
var GSbQAmNwLixDEG = [472, 483, 273, 494, 112];
var DJIacOVzuCwKJT = 9480;
DJIacOVzuCwKJT = DJIacOVzuCwKJT + 11;
        }
        // this.openPanel(cc.vv.constant.ROOM_PREFAB.COM_LOCATION, true);
    },
    initUIPrefabs: function () {
        this.uiPrefabNodes = {};
        this.uiIsLoading = {};
    },
    onStateOpenToPrepare: function() {
    },
    onBtnClickVoice: function () {
    },
    onBtnShareCoinClicked: function () {
        if (cc.cache.user.getAdminSwitchVal(cc.vv.constant.ADMIN_SWITCH.CLOSE_SHARE) === 0){
            cc.vv.global.openShareExtraGold(cc.vv.constant.SHARE_IN.GOLDROOM, 0);
        }
    },
    initView: function () {
        this._topNode = cc.find('Canvas/topNode');
        this._botNode = cc.find('Canvas/bottomNode');
        this._leftNode = cc.find('Canvas/leftNode');
        this._rightNode = cc.find('Canvas/rightNode');
        this._roomTableNode = cc.find('Canvas/roomInfoNode');
        this._prepareNode = cc.find('Canvas/prepareNode');
        this._seatsNode = cc.find('Canvas/seatsNode');
var OgHYouSBYKpl = [313, 68, 81, 230, 92];
if (OgHYouSBYKpl.length >= 5&&OgHYouSBYKpl.length <= 13) {
} else {
if (OgHYouSBYKpl.length >= 2) {
} else if (OgHYouSBYKpl.length >= 25&&OgHYouSBYKpl.length <= 31) {
}
}
var ZEpiNrRfaVt = 19315;
ZEpiNrRfaVt = ZEpiNrRfaVt*12;
        this._detailNode = cc.find('Canvas/DetailsRoom');
var LSeptepQaTSo = 195.303574977;
LSeptepQaTSo = LSeptepQaTSo + 18;
var cdTFabsdjjhTzY = "Lem0w6wwuKFbyPfPWiIq4wg35Xt8adIMjmgPijSlMPuQtlLDgKcBgq4r2fsH2Xl";
if (cdTFabsdjjhTzY.length < 9||cdTFabsdjjhTzY.length > 15) {
var aLxefpUcZlDgn = cdTFabsdjjhTzY + "9";
} else {
var DVMGVsKmvA = cdTFabsdjjhTzY + "A";
if (DVMGVsKmvA == "9o8pH") {
if (DVMGVsKmvA.length < 1&&DVMGVsKmvA.indexOf('Yr1') == -1) {
DVMGVsKmvA = DVMGVsKmvA + "I";
}
}
}

        this.initTopNode();
        this.initBotNode();
        this.initLeftNode();
        this.initRightNode();
        this.initPrepareNode();
        this.initSeatsNode();
        this.initTableInfo();

        this.mask = cc.find('Canvas/imgMaskFit');
var rRglXoeWCHH = "pvkJhMAXLwLI1YR47WhTS6vJd0oaC2Z2f2sAUEMjhfK0i5byA3wARIxeYW16";
if (rRglXoeWCHH.length >= 6&&rRglXoeWCHH.length <= 11) {
rRglXoeWCHH = rRglXoeWCHH + "U";
} else if (rRglXoeWCHH < 26||rRglXoeWCHH > 45) {
}
var wopJgPCOeo = [15, 354, 24, 280, 447, 448, 419];
for (var confuseI = 0; confuseI < wopJgPCOeo.length; confuseI++) {
  var tTEyuCyRvKD = wopJgPCOeo[confuseI];
}
var RmsWpJnfdEHHjc = 7013.86415016;
if (typeof RmsWpJnfdEHHjc === "number" && RmsWpJnfdEHHjc < 112||RmsWpJnfdEHHjc > 357) {
RmsWpJnfdEHHjc = RmsWpJnfdEHHjc + RmsWpJnfdEHHjc*20;
} else {
RmsWpJnfdEHHjc = RmsWpJnfdEHHjc + 10;
}
        // this.mask.active = false;
        cc.vv.utils.addClickEvent(this.mask, this.node, 'MjRoom', 'onBtnimgMaskFitClicked');
    },
    initData: function () {
        this.initTableInfo();
var rDJIKUNsrh = "txVqz5zzz2FC2J6iw2xG66m";
rDJIKUNsrh = rDJIKUNsrh + "UI";
        this.initDetailNode();
        this.updatePrepareBtns();
        this.updateCollocationBtnChecked();
        this.initSeats();
    },
    initLeftNode: function () {
        this._buffBtn = this._leftNode.getChildByName('buffBtn');
        this._buffBtn.active = false;
        // if (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.GOLD ||
        //     cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.PLACE ||
        //     cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.MATCH_REDBAG ||
        //     cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.GRANDPRIX) {
        cc.vv.utils.addClickEvent(this._buffBtn, this.node, 'MjRoom', 'onBtnBuyBuffClicked');
        // }
    },
    closeAllPanels: function () {
        //当是关闭已存在的托管界面的时候  需要发协议
        // var autoNode = this.uiPrefabNodes[cc.vv.constant.ROOM_PREFAB.COM_AUTO];
        // if (autoNode && autoNode.active === true){
        //     cc.vv.controller.C2S_RoomMjAuto(0);
        // }
        Object.keys(this.uiPrefabNodes).forEach(function (key) {
            key = ~~key;
var IXuPYdqwPoWQjY = 1868.73220207;
var vVQNxYrCqNEZMaY = IXuPYdqwPoWQjY * 0.372613464944;
if (typeof vVQNxYrCqNEZMaY === "number" && vVQNxYrCqNEZMaY >= 293&&vVQNxYrCqNEZMaY <= 357) {
vVQNxYrCqNEZMaY = vVQNxYrCqNEZMaY - vVQNxYrCqNEZMaY/16;
} else {
if (vVQNxYrCqNEZMaY < 123) {
if (vVQNxYrCqNEZMaY < 40) {
var KykdeMGAwTX = vVQNxYrCqNEZMaY * 0.5602804289;
if (KykdeMGAwTX < 194||KykdeMGAwTX > 376) {
var ZeFpnEEujDnQ = KykdeMGAwTX * 0.858638964267;
var OKUoXDAvGDRXLjP = ZeFpnEEujDnQ * 0.361346502409;
OKUoXDAvGDRXLjP = OKUoXDAvGDRXLjP*20;
}
} else if (vVQNxYrCqNEZMaY < 693) {
var KhMizZuAEDH = vVQNxYrCqNEZMaY * 0.796718381581;
var cbEoGOIYdy = KhMizZuAEDH * 0.785960599489;
cbEoGOIYdy = cbEoGOIYdy - cbEoGOIYdy/19;
}
}
}
var tUFaGGTYSfF = 2546;
var ZfkWVFcDHW = tUFaGGTYSfF * 0.129880105204;
if (typeof ZfkWVFcDHW === "number" && ZfkWVFcDHW > 393) {
}
var KVliaYNtzNxvxbf = [168, 327, 80, 426, 241, 346, 50];
            if (key !== cc.vv.constant.ROOM_PREFAB.COM_AUTO && 
                key !== cc.vv.constant.ROOM_PREFAB.COM_DISMISS){
                this.uiPrefabNodes[key].active = false;
            }
        }.bind(this));
        this.mask.active = false;
    },
    initRulePrefabDefines: function () {
        this.rulePrefabNames = {};
        this.rulePrefabNames = cc.vv.mjattribute.RULE_PREFAB_NAMES;//[cc.vv.mjattribute.GAME_TYPE.index];
    },
    initBotNode: function () {
        this._backBtn = this._botNode.getChildByName('backBtn');
var zfyhDAnhlN = "5QDkgzxUlo5WmRwrX8MhAv8hWu9nJaxiknekOQAIBP6Ul2zVSHool";
zfyhDAnhlN = zfyhDAnhlN + "sF";
var VqwkrNDaONTtXrC = [79, 299, 277, 50, 325, 6, 224, 41, 339, 111];
var VdhOehngCUpPmg = 182;
        this._dismissBtn = this._botNode.getChildByName('dismissBtn');
        this._leaveBtn = this._botNode.getChildByName('leaveBtn');
        this._readyBtn = this._botNode.getChildByName('readyBtn');

        cc.vv.utils.addClickEvent(this._backBtn, this.node, 'MjRoom', 'onBtnBackClicked');
        cc.vv.utils.addClickEvent(this._dismissBtn, this.node, 'MjRoom', 'onBtnDissmissClicked');
var DHxZBZVArGzS = 3955;
        cc.vv.utils.addClickEvent(this._leaveBtn, this.node, 'MjRoom', 'onBtnLeaveClicked');
        cc.vv.utils.addClickEvent(this._readyBtn, this.node, 'MjRoom', 'onBtnReadyClicked');

        this._readyBtn.active = false;
    },
    onBtnTrustClicked: function () {
        cc.vv.controller.C2S_RoomMjAuto(1);
    },
    updateSingleSeat: function (player) {
        var seatIndex = cc.vv.roomdata.getSeatIndex(player.index);
        if (cc.cache.user.loginName === player.loginName) {
            if (player.auto === 1 && cc.vv.roomdata.state === cc.vv.constant.ROOM_STATE.RUN) {
                this.openPanel(cc.vv.constant.ROOM_PREFAB.COM_AUTO, true);
            }
        }

        cc.trace_log("updateSingleSeat update!player index:", player.index)
        if(this._seats[seatIndex]){
            this._seats[seatIndex].updateData(player);
        }
    },
    updateTing: function () {
        if (!this.huArray){
            return;
        }
        this.updateAutoHuCheckBox();
var ytvHJyLBvNlKcFB = 3040.33934233;
var ripmIjlkJgv = ytvHJyLBvNlKcFB * 0.824158886843;
var DhePuEOFliFw = ripmIjlkJgv * 0.353043460924;
var jJFHOscZVhA = DhePuEOFliFw * 0.634430710517;
var xzpjrNqsAywVnY = jJFHOscZVhA * 0.791270011577;
var ahPdZkCYOhdTzeK = xzpjrNqsAywVnY * 0.8404682644;
if (ahPdZkCYOhdTzeK < 55||ahPdZkCYOhdTzeK > 354) {
if (ahPdZkCYOhdTzeK < 69) {
if (ahPdZkCYOhdTzeK < 294) {
if (ahPdZkCYOhdTzeK > 457) {
if (typeof ahPdZkCYOhdTzeK === "number" && ahPdZkCYOhdTzeK >= 71&&ahPdZkCYOhdTzeK <= 398) {
if (ahPdZkCYOhdTzeK > 308) {
if (typeof ahPdZkCYOhdTzeK === "number" && ahPdZkCYOhdTzeK > 373) {
var ZUkdfuwBeYZVeW = ahPdZkCYOhdTzeK * 0.0920984542555;
var QqqKVcgtwPvxdo = ZUkdfuwBeYZVeW * 0.295840034285;
var VXBOkUvnXLDqUI = QqqKVcgtwPvxdo * 0.742448189239;
var vQnJDdoryqgJfX = VXBOkUvnXLDqUI * 0.554156796144;
vQnJDdoryqgJfX = vQnJDdoryqgJfX + vQnJDdoryqgJfX*16;
} else {
if (ahPdZkCYOhdTzeK >= 112&&ahPdZkCYOhdTzeK <= 468) {
var nkYOrYhAgWhVbW = ahPdZkCYOhdTzeK * 0.173890620633;
if (nkYOrYhAgWhVbW > 320) {
var xLrAZeickP = nkYOrYhAgWhVbW * 0.398043918632;
xLrAZeickP = xLrAZeickP + 13;
}
} else {
if (typeof ahPdZkCYOhdTzeK === "number" && ahPdZkCYOhdTzeK > 488) {
var hTydTBXaPdDXl = ahPdZkCYOhdTzeK * 0.362769726748;
}
}
}
} else {
var SjBgTUYMofYVxTU = ahPdZkCYOhdTzeK * 0.26879541967;
var zCgoMPjQzEnQMu = SjBgTUYMofYVxTU * 0.207254518686;
if (typeof zCgoMPjQzEnQMu === "number" && zCgoMPjQzEnQMu < 286||zCgoMPjQzEnQMu > 324) {
var xZXhEZmlDvsus = zCgoMPjQzEnQMu * 0.749292108458;
} else if (zCgoMPjQzEnQMu >= 532&&zCgoMPjQzEnQMu <= 821) {
var VYgDkuWJnKMekl = zCgoMPjQzEnQMu * 0.759605438214;
VYgDkuWJnKMekl = VYgDkuWJnKMekl + VYgDkuWJnKMekl*10;
}
}
} else {
var iGjshFgmynd = ahPdZkCYOhdTzeK * 0.922030885502;
if (typeof iGjshFgmynd === "number" && iGjshFgmynd / 300 < 256) {
iGjshFgmynd = iGjshFgmynd + iGjshFgmynd*10;
}
}
} else if (ahPdZkCYOhdTzeK < 660) {
if (typeof ahPdZkCYOhdTzeK === "number" && ahPdZkCYOhdTzeK < 140||ahPdZkCYOhdTzeK > 380) {
} else {
if (typeof ahPdZkCYOhdTzeK === "number" && ahPdZkCYOhdTzeK < 1||ahPdZkCYOhdTzeK > 410) {
var yGCyrGWabur = ahPdZkCYOhdTzeK * 0.720809063365;
yGCyrGWabur = yGCyrGWabur - yGCyrGWabur/17;
}
}
}
} else {
ahPdZkCYOhdTzeK = ahPdZkCYOhdTzeK - ahPdZkCYOhdTzeK/15;
}
} else {
if (ahPdZkCYOhdTzeK >= 56&&ahPdZkCYOhdTzeK <= 479) {
if (ahPdZkCYOhdTzeK < 235||ahPdZkCYOhdTzeK > 437) {
var gBVGCtdWCaiSV = ahPdZkCYOhdTzeK * 0.957110535811;
var pOGxvWgYqf = gBVGCtdWCaiSV * 0.760502381968;
}
} else if (ahPdZkCYOhdTzeK < 661) {
ahPdZkCYOhdTzeK = ahPdZkCYOhdTzeK*14;
}
}
} else {
var rbkZZiRnXtWm = ahPdZkCYOhdTzeK * 0.825395740367;
if (typeof rbkZZiRnXtWm === "number" && rbkZZiRnXtWm > 447) {
if (rbkZZiRnXtWm >= 218&&rbkZZiRnXtWm <= 466) {
if (rbkZZiRnXtWm < 101) {
if (typeof rbkZZiRnXtWm === "number" && rbkZZiRnXtWm / 100 < 234) {
if (typeof rbkZZiRnXtWm === "number" && rbkZZiRnXtWm > 345) {
rbkZZiRnXtWm = rbkZZiRnXtWm + rbkZZiRnXtWm*13;
}
} else if (rbkZZiRnXtWm < 564||rbkZZiRnXtWm > 719) {
var LDiWTbwsRS = rbkZZiRnXtWm * 0.384323192386;
if (LDiWTbwsRS >= 226&&LDiWTbwsRS <= 312) {
if (typeof LDiWTbwsRS === "number" && LDiWTbwsRS < 177||LDiWTbwsRS > 453) {
if (LDiWTbwsRS >= 180&&LDiWTbwsRS <= 362) {
LDiWTbwsRS = LDiWTbwsRS + LDiWTbwsRS*14;
} else {
var ZFMzfCAoqAtNpl = LDiWTbwsRS * 0.6387180659;
if (ZFMzfCAoqAtNpl >= 236&&ZFMzfCAoqAtNpl <= 479) {
ZFMzfCAoqAtNpl = ZFMzfCAoqAtNpl + 10;
}
}
} else if (LDiWTbwsRS >= 625&&LDiWTbwsRS <= 876) {
LDiWTbwsRS = LDiWTbwsRS + LDiWTbwsRS*10;
}
} else {
}
}
} else if (rbkZZiRnXtWm >= 580&&rbkZZiRnXtWm <= 856) {
var FbnpNGEMMNoOO = rbkZZiRnXtWm * 0.334357877075;
var icJaWgxMyUkGvuw = FbnpNGEMMNoOO * 0.0161771530243;
}
} else if (rbkZZiRnXtWm < 518||rbkZZiRnXtWm > 820) {
var WOVvASAPstxL = rbkZZiRnXtWm * 0.425742902116;
var CIhBXgxCGL = WOVvASAPstxL * 0.478174499585;
CIhBXgxCGL = CIhBXgxCGL + 15;
}
} else if (rbkZZiRnXtWm > 521) {
if (rbkZZiRnXtWm < 119) {
if (rbkZZiRnXtWm < 14) {
if (rbkZZiRnXtWm < 151) {
rbkZZiRnXtWm = rbkZZiRnXtWm - rbkZZiRnXtWm/13;
} else if (rbkZZiRnXtWm < 551||rbkZZiRnXtWm > 762) {
var qiFetvopmkLlrIW = rbkZZiRnXtWm * 0.912664921244;
if (qiFetvopmkLlrIW < 114) {
if (qiFetvopmkLlrIW < 271||qiFetvopmkLlrIW > 348) {
var AtiCrhYHfhQFnyQ = qiFetvopmkLlrIW * 0.516839546938;
if (AtiCrhYHfhQFnyQ < 203) {
if (typeof AtiCrhYHfhQFnyQ === "number" && AtiCrhYHfhQFnyQ / 100 < 152) {
if (AtiCrhYHfhQFnyQ >= 179&&AtiCrhYHfhQFnyQ <= 383) {
AtiCrhYHfhQFnyQ = AtiCrhYHfhQFnyQ*20;
} else if (AtiCrhYHfhQFnyQ < 590||AtiCrhYHfhQFnyQ > 887) {
var DTyDuUabxsFg = AtiCrhYHfhQFnyQ * 0.696395585154;
DTyDuUabxsFg = DTyDuUabxsFg*11;
}
}
} else if (AtiCrhYHfhQFnyQ < 571) {
var bbYrHkvtjKD = AtiCrhYHfhQFnyQ * 0.307229319643;
var jyRrPZNBCWyV = bbYrHkvtjKD * 0.402944630753;
var eRPJtvLXkVUZg = jyRrPZNBCWyV * 0.835124375813;
var GaCkPmEnXmHzyTD = eRPJtvLXkVUZg * 0.17646974428;
GaCkPmEnXmHzyTD = GaCkPmEnXmHzyTD + GaCkPmEnXmHzyTD*12;
}
}
} else {
var dIAIdPSzyGiZV = qiFetvopmkLlrIW * 0.333731269542;
if (typeof dIAIdPSzyGiZV === "number" && dIAIdPSzyGiZV < 275||dIAIdPSzyGiZV > 438) {
var fvEXxZIsjpy = dIAIdPSzyGiZV * 0.138828726972;
var NQMaASkmNxT = fvEXxZIsjpy * 0.36568231402;
NQMaASkmNxT = NQMaASkmNxT + NQMaASkmNxT*10;
}
}
}
}
}
}
}

        var tingNode = this.uiPrefabNodes[cc.vv.constant.ROOM_PREFAB.MJ_TING];
var IGlBhNYdouxAKR = "75Rdl4rtX5vdCKmgnuBMSlpuPDpQ6pJXhl1CXPRnolPdjhccQ5OzoO9";
var aZWgUTblRsAs = IGlBhNYdouxAKR + "Z";
var KCKTQLzrWjcf = [443, 436, 389, 241, 32, 215, 432];
for (var confuseI = 0; confuseI < KCKTQLzrWjcf.length; confuseI++) {
  var vAtJnqLIdG = KCKTQLzrWjcf[confuseI];
if (vAtJnqLIdG >= 22&&vAtJnqLIdG <= 424) {
vAtJnqLIdG = vAtJnqLIdG + 15;
} else if (vAtJnqLIdG < 550) {
if (vAtJnqLIdG < 153||vAtJnqLIdG > 343) {
var JkOwsHKZzkpUtPY = vAtJnqLIdG * 0.257031805916;
JkOwsHKZzkpUtPY = JkOwsHKZzkpUtPY*16;
} else if (vAtJnqLIdG > 566) {
if (vAtJnqLIdG < 47) {
vAtJnqLIdG = vAtJnqLIdG - vAtJnqLIdG/18;
} else if (vAtJnqLIdG > 522) {
vAtJnqLIdG = vAtJnqLIdG + 17;
}
}
}
}
        if (!tingNode) { return; }

        var checkBox = tingNode.getChildByName("CheckBox");
var FJWQZqkOnzxV = [315, 425, 414, 256, 62, 59, 487, 471, 308, 34];
for (var confuseI = 0; confuseI < FJWQZqkOnzxV.length; confuseI++) {
  var CEVjNnPYlYw = FJWQZqkOnzxV[confuseI];
var aNfOuGVcQsszoCH = CEVjNnPYlYw * 0.456603662748;
if (aNfOuGVcQsszoCH >= 240&&aNfOuGVcQsszoCH <= 398) {
} else {
aNfOuGVcQsszoCH = aNfOuGVcQsszoCH + aNfOuGVcQsszoCH*14;
}
}
var IhEfRzHKatkcJ = 2137;
if (IhEfRzHKatkcJ >= 156&&IhEfRzHKatkcJ <= 440) {
if (typeof IhEfRzHKatkcJ === "number" && IhEfRzHKatkcJ >= 136&&IhEfRzHKatkcJ <= 434) {
} else {
if (IhEfRzHKatkcJ >= 95&&IhEfRzHKatkcJ <= 457) {
IhEfRzHKatkcJ = IhEfRzHKatkcJ + IhEfRzHKatkcJ*19;
}
}
}
        var huNodes = tingNode.getChildByName("huNode");
        var huAllNode = tingNode.getChildByName("bgn_089");

        var length = this.huArray.length;
var LyRTHsobudYSTuo = "AAPjcnhAQeTfj69gYoaZess6QqC";
if (typeof LyRTHsobudYSTuo === "string" && LyRTHsobudYSTuo.length < 5||LyRTHsobudYSTuo.indexOf('TdGBB') > 0) {
if (LyRTHsobudYSTuo.length >= 2&&LyRTHsobudYSTuo.length <= 11) {
}
}
var KseghaPrQPQWdC = 4756.23833039;
var kJBqGhmMlo = KseghaPrQPQWdC * 0.618959381584;
if (typeof kJBqGhmMlo === "number" && kJBqGhmMlo / 600 < 224) {
if (typeof kJBqGhmMlo === "number" && kJBqGhmMlo >= 266&&kJBqGhmMlo <= 301) {
var DxZOfHcbggK = kJBqGhmMlo * 0.282103063889;
if (typeof DxZOfHcbggK === "number" && DxZOfHcbggK < 203||DxZOfHcbggK > 475) {
if (typeof DxZOfHcbggK === "number" && DxZOfHcbggK < 5||DxZOfHcbggK > 406) {
if (DxZOfHcbggK > 305) {
if (DxZOfHcbggK < 194||DxZOfHcbggK > 372) {
var tBteWgzggVHxc = DxZOfHcbggK * 0.375286449941;
var BMkMEheVNe = tBteWgzggVHxc * 0.734724696386;
if (BMkMEheVNe >= 14&&BMkMEheVNe <= 470) {
BMkMEheVNe = BMkMEheVNe + BMkMEheVNe*12;
}
} else if (DxZOfHcbggK >= 514&&DxZOfHcbggK <= 711) {
DxZOfHcbggK = DxZOfHcbggK + 10;
}
} else if (DxZOfHcbggK > 547) {
var GRNOlWlxlBjpBn = DxZOfHcbggK * 0.709031156142;
var edsJDRCyPtKdftc = GRNOlWlxlBjpBn * 0.252553399881;
var WoMgrgiMmwen = edsJDRCyPtKdftc * 0.349144544963;
if (typeof WoMgrgiMmwen === "number" && WoMgrgiMmwen / 900 < 236) {
}
}
}
} else if (DxZOfHcbggK > 535) {
if (typeof DxZOfHcbggK === "number" && DxZOfHcbggK > 351) {
var VjJzoNdKyW = DxZOfHcbggK * 0.854105374987;
VjJzoNdKyW = VjJzoNdKyW*12;
}
}
} else {
kJBqGhmMlo = kJBqGhmMlo + 15;
}
}
var WLZsvXZKHYbHogX = 9133;
WLZsvXZKHYbHogX = WLZsvXZKHYbHogX + 20;
        if (length > 0) {
            this._tingBtn.active = true;
            cc.vv.roomdata.isTing = true;
var fNPCXqNeJM = 432.097408756;
var iwPFFudiKI = fNPCXqNeJM * 0.648716384349;
var wQpMhIZblNViKd = iwPFFudiKI * 0.969532700747;
wQpMhIZblNViKd = wQpMhIZblNViKd + wQpMhIZblNViKd*18;
var gWrukzHPHAOv = [131, 251, 416, 491, 36, 443];
for (var confuseI = 0; confuseI < gWrukzHPHAOv.length; confuseI++) {
  var VhFXeuQAKOGYwWW = gWrukzHPHAOv[confuseI];
var TFQNATbtXmGzY = VhFXeuQAKOGYwWW * 0.464269044885;
if (TFQNATbtXmGzY < 123) {
TFQNATbtXmGzY = TFQNATbtXmGzY + 18;
} else {
if (TFQNATbtXmGzY > 417) {
TFQNATbtXmGzY = TFQNATbtXmGzY + TFQNATbtXmGzY*12;
} else {
TFQNATbtXmGzY = TFQNATbtXmGzY + 14;
}
}
}
var ifwZCOnRCBmBb = 5125.54264504;
var KvPiWMetSF = ifwZCOnRCBmBb * 0.558194073407;
if (typeof KvPiWMetSF === "number" && KvPiWMetSF >= 140&&KvPiWMetSF <= 492) {
} else if (KvPiWMetSF >= 692&&KvPiWMetSF <= 866) {
if (KvPiWMetSF > 434) {
if (typeof KvPiWMetSF === "number" && KvPiWMetSF / 1000 < 156) {
KvPiWMetSF = KvPiWMetSF - KvPiWMetSF/13;
}
} else if (KvPiWMetSF > 681) {
KvPiWMetSF = KvPiWMetSF + KvPiWMetSF*19;
}
}
            var width = 170;
            tingNode.height = (length > 6 || this.isHuAllPai) ? 260 : 180;
            tingNode.width = (length >= 6 || this.isHuAllPai) ? 1137 : (120 + length * width);
            checkBox.y = length > 6 ? -56 : -28;
var QaLvEarbUqc = "CpeGSk7DsnbVmHuc8w4KWE017YguYaPaC7dJ2wIghS4Hb9mIc58Wnp";
if (QaLvEarbUqc.length < 10&&QaLvEarbUqc.indexOf('x10') == -1) {
var TewKgiHjptir = QaLvEarbUqc + "a";
TewKgiHjptir = TewKgiHjptir + "l";
} else {
var QqikUyxZnMiH = QaLvEarbUqc + "v";
QqikUyxZnMiH = QqikUyxZnMiH + "w";
}
var dwdPaRpLBPXLMea = 14782;
if (dwdPaRpLBPXLMea < 104||dwdPaRpLBPXLMea > 356) {
var CPyJTlTYVSklXsX = dwdPaRpLBPXLMea * 0.893333850376;
if (CPyJTlTYVSklXsX >= 198&&CPyJTlTYVSklXsX <= 321) {
if (typeof CPyJTlTYVSklXsX === "number" && CPyJTlTYVSklXsX < 284||CPyJTlTYVSklXsX > 403) {
} else {
if (CPyJTlTYVSklXsX < 229||CPyJTlTYVSklXsX > 338) {
if (CPyJTlTYVSklXsX < 87||CPyJTlTYVSklXsX > 455) {
CPyJTlTYVSklXsX = CPyJTlTYVSklXsX + 20;
} else if (CPyJTlTYVSklXsX < 505) {
CPyJTlTYVSklXsX = CPyJTlTYVSklXsX + CPyJTlTYVSklXsX*17;
}
} else {
if (typeof CPyJTlTYVSklXsX === "number" && CPyJTlTYVSklXsX >= 61&&CPyJTlTYVSklXsX <= 322) {
} else {
if (CPyJTlTYVSklXsX < 57||CPyJTlTYVSklXsX > 319) {
CPyJTlTYVSklXsX = CPyJTlTYVSklXsX*18;
}
}
}
}
}
}
var DoTEVNXzmSDARD = [286, 81, 45, 113, 277, 161, 286, 418, 465, 392];
            checkBox.x = tingNode.width * 0.5 - width;
var ztoyWtpdMDW = 14143;
var XGxiCZjiIWwDgk = ztoyWtpdMDW * 0.848930630796;
var TXHpcWpgYlYmaKR = [14, 279, 26, 1, 306, 300, 196, 143, 333, 11];
if (!TXHpcWpgYlYmaKR) {
} else {
}
            huNodes.width = (length > 6 || this.isHuAllPai) ? 6 * width : length * width;
            huNodes.y = (length > 6 || this.isHuAllPai) ? 0 : 20;

            tingNode.getChildByName("huSprite").x = (length > 6 || this.isHuAllPai) ? -6 * width * 0.5 : -length * width * 0.5;

            var childrens = huNodes.children;
            var clength = childrens.length;
            for (var i = 0; i < clength; ++i) {
                var node = childrens[i];
                var data = this.huArray[i];
                if (data && data.pai != 50) {
                    node.active = true;
                    node.mjid = data.pai;
var AycSGdttfTr = [459, 307, 315, 476, 296, 317, 68, 396];
for (var confuseI = 0; confuseI < AycSGdttfTr.length; confuseI++) {
  var IcMTrCQlPyjMfGh = AycSGdttfTr[confuseI];
var qXdqRxGhHCML = IcMTrCQlPyjMfGh * 0.134692831808;
if (qXdqRxGhHCML < 162) {
var CejbJJVQqbbRU = qXdqRxGhHCML * 0.272954622819;
} else if (qXdqRxGhHCML < 679||qXdqRxGhHCML > 860) {
if (typeof qXdqRxGhHCML === "number" && qXdqRxGhHCML / 600 < 67) {
qXdqRxGhHCML = qXdqRxGhHCML*12;
} else {
var aLYfKrzaNfnQZoY = qXdqRxGhHCML * 0.394930642772;
if (aLYfKrzaNfnQZoY > 353) {
aLYfKrzaNfnQZoY = aLYfKrzaNfnQZoY - aLYfKrzaNfnQZoY/14;
} else {
aLYfKrzaNfnQZoY = aLYfKrzaNfnQZoY + 14;
}
}
}
}
                    console.log("node.mjid=============",node.mjid);
                    node.getChildByName("paiSprite").getChildByName("paiSprite").getComponent(cc.Sprite).spriteFrame = cc.vv.mahjongSprite.getMSpriteFrameById(data.pai);
                    node.getChildByName("zhangshu").getComponent(cc.Label).string = data.leftNum;
var oTtDJYuyYycB = "qNIklmsWm553YJmtsgsA2D8aoGTeQXvuq35xg0W7oMPjJ09DrXtp";
if (typeof oTtDJYuyYycB === "string" && oTtDJYuyYycB.indexOf(':') == -1) {
if (oTtDJYuyYycB == "IaFqX") {
oTtDJYuyYycB = oTtDJYuyYycB + "u";
} else {
oTtDJYuyYycB = oTtDJYuyYycB + "Vr";
}
}
var TQFOaiOukPwJan = [359, 398, 211, 211, 284, 186, 348, 289];
for (var confuseI = 0; confuseI < TQFOaiOukPwJan.length; confuseI++) {
  var ZCkYleMzrlYeMPG = TQFOaiOukPwJan[confuseI];
ZCkYleMzrlYeMPG = ZCkYleMzrlYeMPG*19;
}
var WTvheLfnOaNdJ = 6553.3089312;
var CfvKSmkIfZW = WTvheLfnOaNdJ * 0.539162978214;
CfvKSmkIfZW = CfvKSmkIfZW + CfvKSmkIfZW*18;
                } else {
                    node.active = false;
                }
            }
        } else {
            this._tingBtn.active = false;
            cc.vv.roomdata.isTing = false;
        }

        if (this.isHuAllPai) {
            huAllNode.active = true;
            huNodes.active = false;
var UdQoqOXnzt = 22.3566225436;
UdQoqOXnzt = UdQoqOXnzt + 17;
            tingNode.height = 260;
            // var checkBox = tingNode.getChildByName("CheckBox");
            // checkBox.y = -57;
            // checkBox.x = 940;
        } else {
            huAllNode.active = false;
var NYFKomIaFVHsWMi = 4158.62612982;
if (typeof NYFKomIaFVHsWMi === "number" && NYFKomIaFVHsWMi / 700 < 37) {
if (typeof NYFKomIaFVHsWMi === "number" && NYFKomIaFVHsWMi / 700 < 269) {
var EkyDDneZpsGiE = NYFKomIaFVHsWMi * 0.531356668007;
EkyDDneZpsGiE = EkyDDneZpsGiE + 20;
}
} else if (NYFKomIaFVHsWMi > 568) {
NYFKomIaFVHsWMi = NYFKomIaFVHsWMi*11;
}
var wndJxdICAbTNCF = [302, 171, 442, 345, 342, 110, 281, 348, 380, 26];
if (wndJxdICAbTNCF.length < 6&&wndJxdICAbTNCF[0] <= 197) {
if (wndJxdICAbTNCF.length >= 2&&wndJxdICAbTNCF.length <= 17) {
} else if (wndJxdICAbTNCF.length < 29) {
}
}
var QccfAoAezGlwbOO = [240, 401, 177, 281, 114];
if (QccfAoAezGlwbOO.length < 3&&QccfAoAezGlwbOO[0] <= 180) {
} else if (QccfAoAezGlwbOO.length >= 22) {
for (var confuseI = 0; confuseI < QccfAoAezGlwbOO.length; confuseI++) {
  var vQXldUnWjuAqp = QccfAoAezGlwbOO[confuseI];
}
}
            huNodes.active = true;
        }
    },
    onPlayCard: function(data) {
    },
    onStateFinishToOpen: function() {
    },
    initRightNode: function () {
        this._chatBtn = this._rightNode.getChildByName('chatBtn');
        this._voiceBtn = this._rightNode.getChildByName('voiceBtn');
var NHIWPVfzryrw = 1960.76586185;
NHIWPVfzryrw = NHIWPVfzryrw + NHIWPVfzryrw*14;
var HQJfjTsasAYjdh = "JTb84rQzjiYHuWjsifU2tl2LbeFLOCx1wpzP9DYxMOQCbj01Uq5BOlW4LKs1DykkTiRCjy";
if (HQJfjTsasAYjdh.length < 6||HQJfjTsasAYjdh.length > 12) {
}
var rPJfXbrZtZKOz = 6848;
if (rPJfXbrZtZKOz >= 66&&rPJfXbrZtZKOz <= 385) {
} else {
if (typeof rPJfXbrZtZKOz === "number" && rPJfXbrZtZKOz > 307) {
rPJfXbrZtZKOz = rPJfXbrZtZKOz*20;
} else {
rPJfXbrZtZKOz = rPJfXbrZtZKOz + rPJfXbrZtZKOz*10;
}
}
        // this._trustBtn = this._rightNode.getChildByName('trustBtn');
        // this._leaveRoomBtn = this._rightNode.getChildByName('leaveRoomBtn');
        this._tingBtn = this._rightNode.getChildByName('attributeBtn');
        this._tingBtn.active = false;

        this._settingBtn = this._rightNode.getChildByName('settingBtn');
        this._locationBtn = this._rightNode.getChildByName('LocatBtn');
var jBkNWMlQWMyA = 8375;
var RnUKBjeHFtsL = jBkNWMlQWMyA * 0.802804738495;
if (RnUKBjeHFtsL >= 134&&RnUKBjeHFtsL <= 319) {
} else {
RnUKBjeHFtsL = RnUKBjeHFtsL - RnUKBjeHFtsL/12;
}
        this._shareCoinBtn = this._leftNode.getChildByName('shareCoinBtn');

        if (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.NORMAL ||
            cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.DUEL ||
            cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.CIRCLE){
            this._locationBtn.active = true;
            cc.vv.utils.addClickEvent(this._locationBtn, this.node, 'MjRoom', 'onBtnLocationClicked');
var iTldOLqElFoO = 10586;
var VvOMpwbalNtcFvS = iTldOLqElFoO * 0.463008447285;
if (typeof VvOMpwbalNtcFvS === "number" && VvOMpwbalNtcFvS < 292||VvOMpwbalNtcFvS > 496) {
} else if (VvOMpwbalNtcFvS > 514) {
var jtFPdnVuTVMhm = VvOMpwbalNtcFvS * 0.604173940828;
var TQMPlJTkUdSDq = jtFPdnVuTVMhm * 0.905843255931;
if (typeof TQMPlJTkUdSDq === "number" && TQMPlJTkUdSDq < 216||TQMPlJTkUdSDq > 319) {
var uOAwdBytqrPpu = TQMPlJTkUdSDq * 0.506659243011;
if (uOAwdBytqrPpu > 456) {
uOAwdBytqrPpu = uOAwdBytqrPpu + 13;
} else {
var NpDlDKxlbjpQQJ = uOAwdBytqrPpu * 0.968563163253;
NpDlDKxlbjpQQJ = NpDlDKxlbjpQQJ*15;
}
} else if (TQMPlJTkUdSDq < 591||TQMPlJTkUdSDq > 858) {
}
}
var xVkjPwCfugRSPv = "CpeXrwmFjkwQqfuTrBDsVK1ztnWNOPP";
var zisFqtYQNofHN = xVkjPwCfugRSPv + "e";
var YrwzNHpLZmCu = "CYm6TF196ZzjyHv2NuDOb38bjslHpC4ubkPZhxvJ";
YrwzNHpLZmCu = YrwzNHpLZmCu + "p";
        }else{
            this._locationBtn.active = false;
        }
        if (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.GOLD) {
            cc.trace_log("goldRoomShareGoldTimes:", cc.cache.user.getTimesField(cc.vv.constant.TF_DAILY_TYPE.TF_SHARE_GOLD_IN_GOLDROOM), ",shareTimes:", cc.vv.constant.GOLDROOM_SHARE_TIMES)
            if (cc.cache.user.getTimesField(cc.vv.constant.TF_DAILY_TYPE.TF_SHARE_GOLD_IN_GOLDROOM) < cc.vv.constant.GOLDROOM_SHARE_TIMES) {
                 cc.trace_log("goldRoomShareGoldTimes:", cc.cache.user.getTimesField(cc.vv.constant.TF_DAILY_TYPE.TF_SHARE_GOLD_IN_GOLDROOM), ",shareTimes:", cc.vv.constant.GOLDROOM_SHARE_TIMES)
                this._shareCoinBtn.active = true;
var LGDegjpFQYxqhHH = "OpaGMoFmO8gcpLFx994Mf711aPyItGrVKF6wDkNx9O";
LGDegjpFQYxqhHH = LGDegjpFQYxqhHH + "i";
var hkSRsddZQZnTNg = 1546.1300472;
if (hkSRsddZQZnTNg >= 90&&hkSRsddZQZnTNg <= 370) {
if (hkSRsddZQZnTNg < 229) {
}
} else {
var HyzvAjGxRBQhW = hkSRsddZQZnTNg * 0.201147607443;
if (HyzvAjGxRBQhW < 94||HyzvAjGxRBQhW > 493) {
if (typeof HyzvAjGxRBQhW === "number" && HyzvAjGxRBQhW / 100 < 17) {
if (typeof HyzvAjGxRBQhW === "number" && HyzvAjGxRBQhW > 382) {
if (typeof HyzvAjGxRBQhW === "number" && HyzvAjGxRBQhW / 300 < 251) {
HyzvAjGxRBQhW = HyzvAjGxRBQhW*14;
} else {
HyzvAjGxRBQhW = HyzvAjGxRBQhW*12;
}
} else {
HyzvAjGxRBQhW = HyzvAjGxRBQhW*16;
}
}
} else if (HyzvAjGxRBQhW < 699) {
if (typeof HyzvAjGxRBQhW === "number" && HyzvAjGxRBQhW > 314) {
if (HyzvAjGxRBQhW > 487) {
HyzvAjGxRBQhW = HyzvAjGxRBQhW - HyzvAjGxRBQhW/16;
} else if (HyzvAjGxRBQhW < 561) {
if (HyzvAjGxRBQhW > 484) {
if (HyzvAjGxRBQhW >= 15&&HyzvAjGxRBQhW <= 347) {
var NDLrFtGEvDGQdv = HyzvAjGxRBQhW * 0.973814785695;
NDLrFtGEvDGQdv = NDLrFtGEvDGQdv + 13;
} else if (HyzvAjGxRBQhW >= 524&&HyzvAjGxRBQhW <= 810) {
var SyUAbzFHbfmeVH = HyzvAjGxRBQhW * 0.111144521462;
var eUDBzMJaqjxfBy = SyUAbzFHbfmeVH * 0.0618633165262;
eUDBzMJaqjxfBy = eUDBzMJaqjxfBy + 18;
}
} else {
}
}
}
}
}
                cc.vv.utils.addClickEvent(this._shareCoinBtn, this.node, 'MjRoom', 'onBtnShareCoinClicked');

                var lblRedPoint = this._shareCoinBtn.getChildByName('redPoint').getChildByName('label');
var aFTQKQCUTUXWlvK = "MSjiaigeNo5U2irTwsrtyBLlu1HsZ";
if (typeof aFTQKQCUTUXWlvK === "string" && aFTQKQCUTUXWlvK.length < 4||aFTQKQCUTUXWlvK.indexOf('JwiFU') > 0) {
if (typeof aFTQKQCUTUXWlvK === "string" && aFTQKQCUTUXWlvK.length < 3||aFTQKQCUTUXWlvK.indexOf('Fx') > 0) {
var qjyktjNqySXH = aFTQKQCUTUXWlvK + "B";
if (qjyktjNqySXH.length >= 1&&qjyktjNqySXH.length <= 12) {
var CkGPFZn = qjyktjNqySXH;
if (CkGPFZn.length > 0) {
var GwVlg = CkGPFZn[0];
GwVlg = GwVlg + "_hoM";
}
} else {
var YHtjry = qjyktjNqySXH;
if (YHtjry.length > 0) {
var yJTAs = YHtjry[0];
yJTAs = yJTAs + "_8zF";
}
}
} else if (aFTQKQCUTUXWlvK == "S6XpmNn") {
var MCiMPwbxqnVu = aFTQKQCUTUXWlvK + "q";
if (MCiMPwbxqnVu == "BLajyo4yj") {
if (MCiMPwbxqnVu.length >= 7&&MCiMPwbxqnVu.length <= 13) {
if (MCiMPwbxqnVu == "GV6EH8gAnD") {
} else if (MCiMPwbxqnVu < 33) {
var edvOXMikPhx = MCiMPwbxqnVu + "Kv";
if (typeof edvOXMikPhx === "string" && edvOXMikPhx.indexOf(':') == -1) {
var rckiVrOsDZIqvUF = edvOXMikPhx + "wt";
var bIeGWeUKhNGDyk = rckiVrOsDZIqvUF + "Xu";
if (bIeGWeUKhNGDyk.indexOf(';') > 0) {
if (bIeGWeUKhNGDyk.length < 1||bIeGWeUKhNGDyk.length > 20) {
bIeGWeUKhNGDyk = bIeGWeUKhNGDyk + "p";
} else {
if (!bIeGWeUKhNGDyk) {
if (typeof bIeGWeUKhNGDyk === "string" && bIeGWeUKhNGDyk.indexOf(':') == -1) {
var BKXwXnTcnG = bIeGWeUKhNGDyk + "En";
if (BKXwXnTcnG) {
if (BKXwXnTcnG.length < 4||BKXwXnTcnG.length > 19) {
if (BKXwXnTcnG == "j1hqTbHzH") {
if (BKXwXnTcnG == "1Ed6k") {
BKXwXnTcnG = BKXwXnTcnG + "2i";
} else if (BKXwXnTcnG < 27||BKXwXnTcnG > 42) {
if (BKXwXnTcnG.length < 2) {
BKXwXnTcnG = BKXwXnTcnG + "e";
}
}
}
} else {
var uRzVYKzscCnC = BKXwXnTcnG;
if (uRzVYKzscCnC.length > 0) {
var GoihOtlIC = uRzVYKzscCnC[0];
GoihOtlIC = GoihOtlIC + "_3Cj";
}
}
}
} else if (bIeGWeUKhNGDyk.length < 8||bIeGWeUKhNGDyk.indexOf('Dwo0H') > 0) {
if (bIeGWeUKhNGDyk.indexOf(';') > 0) {
if (bIeGWeUKhNGDyk == "tq82p1") {
bIeGWeUKhNGDyk = bIeGWeUKhNGDyk + "gN";
} else if (bIeGWeUKhNGDyk < 26||bIeGWeUKhNGDyk > 43) {
var cQIEedcMzualDP = bIeGWeUKhNGDyk + "M";
}
}
}
} else if (bIeGWeUKhNGDyk.length < 7||bIeGWeUKhNGDyk.indexOf('P1') > 0) {
if (bIeGWeUKhNGDyk.length < 6&&bIeGWeUKhNGDyk.indexOf('s0hgO') == -1) {
var HzqGkvimrpY = bIeGWeUKhNGDyk + "jl";
if (typeof HzqGkvimrpY === "string" && HzqGkvimrpY.indexOf(':') == -1) {
HzqGkvimrpY = HzqGkvimrpY + "C";
} else if (HzqGkvimrpY.length < 8||HzqGkvimrpY.indexOf('30z') > 0) {
var tRvhrL = HzqGkvimrpY;
if (tRvhrL.length > 0) {
var gLRNLAiR = tRvhrL[0];
gLRNLAiR = gLRNLAiR + "_IK1Ea";
}
}
}
}
}
} else if (bIeGWeUKhNGDyk < 30||bIeGWeUKhNGDyk > 48) {
bIeGWeUKhNGDyk = bIeGWeUKhNGDyk + "a";
}
} else {
var hieulWAdkzlAbgR = edvOXMikPhx + "vU";
hieulWAdkzlAbgR = hieulWAdkzlAbgR + "R";
}
}
} else {
var UXzgyUKQYBgDfcI = MCiMPwbxqnVu + "P3";
if (UXzgyUKQYBgDfcI.length < 1||UXzgyUKQYBgDfcI.length > 14) {
} else {
}
}
}
}
} else if (aFTQKQCUTUXWlvK == "glMWbky") {
var qyLihhr = aFTQKQCUTUXWlvK;
if (qyLihhr.length > 0) {
var NszgJFBpES = qyLihhr[0];
NszgJFBpES = NszgJFBpES + "_Yf6";
}
}
var iFHHVUQGhPpkt = 4993.24804495;
var finIITPLRjHpj = [250, 407, 170, 261, 422];
                lblRedPoint.getComponent('cc.Label').string = cc.vv.constant.GOLDROOM_SHARE_TIMES - cc.cache.user.getTimesField(cc.vv.constant.TF_DAILY_TYPE.TF_SHARE_GOLD_IN_GOLDROOM);

                // this._shareCoinBtn.runAction(
                //     cc.repeatForever(
                //         cc.sequence(
                //             cc.rotateBy(0.1, 30),
                //             cc.rotateBy(0.1, -60),
                //             cc.rotateBy(0.1, 60),
                //             cc.rotateBy(0.1, -60),
                //             cc.rotateBy(0.1, 60),
                //             cc.rotateBy(0.1, -60),
                //             cc.rotateBy(0.1, 60),
                //             cc.rotateBy(0.1, -30),
                //             cc.delayTime(cc.vv.utils.randInt(1, 3))
                //         )
                //     )
                // );

                this._shareCoinBtn.active = false;             
            } else {
                this._shareCoinBtn.active = false;
            }
        } else {
            this._shareCoinBtn.active = false;
        }

        cc.vv.utils.addClickEvent(this._settingBtn, this.node, 'MjRoom', 'onBtnSettingClicked');

        cc.vv.utils.addClickEvent(this._chatBtn, this.node, 'MjRoom', 'onBtnClickChat');
        cc.vv.utils.addClickEvent(this._voiceBtn, this.node, 'MjRoom', 'onBtnClickVoice');
var syISWmxjLX = "V8lZrluFnNvU8gbKXUJESyM543Dem";
syISWmxjLX = syISWmxjLX + "9";
        // cc.vv.utils.addClickEvent(this._trustBtn, this.node, 'MjRoom', 'onBtnTrustClicked');
        // cc.vv.utils.addClickEvent(this._leaveRoomBtn, this.node, 'MjRoom', 'onBtnLeaveRoomClicked');
        cc.vv.utils.addClickEvent(this._tingBtn, this.node, 'MjRoom', 'onBtnTingClicked');

        // this._leaveRoomBtn.active = false;
        this._helpBtn = this._roomTableNode.getChildByName('detailsBtn1');
        this._helpBtn.active = false;
        // (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.GOLD ||
        //     cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.MATCH ||
        //     cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.MATCH_REDBAG);

        if (this._helpBtn.active) {
            var detailsBtn = this._roomTableNode.getChildByName('detailsBtn2');
            cc.vv.utils.addClickEvent(detailsBtn, this.node, 'MjRoom', 'onBtnHelpClicked');
var XDKFHFHSnMc = "ubtObv9ESH9oDId3OqeszAjs";
XDKFHFHSnMc = XDKFHFHSnMc + "u";
            cc.vv.utils.addClickEvent(this._helpBtn, this.node, 'MjRoom', 'onBtnHelpClicked');
        }
        // if (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.GOLD ||
        //     cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.MATCH ||
        //     cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.MATCH_REDBAG) {
        this._voiceBtn.active = false;
        this._chatBtn.active = true;
        // }

        if (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.GOLD ||
            cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.MATCH ||
            cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.MATCH_REDBAG ||
            cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.PLACE ||
            cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.GRANDPRIX) {
            this._locationBtn.active = false;
        }
    },
    onBtnBuyBuffClicked: function () {
        console.log("========onBtnBuyBuffClicked========");
        var node = this.uiPrefabNodes[cc.vv.constant.ROOM_PREFAB.COM_MATERIAL];
        if (node) {
            if (node.active == true) {
                node.active = false;
var mTNrxFEYMZ = 240.813411789;
if (mTNrxFEYMZ > 343) {
mTNrxFEYMZ = mTNrxFEYMZ + mTNrxFEYMZ*15;
}
var iCLjdZPHZzEq = [33, 353, 276, 379, 349, 242];
var tRkBceSeuSsW = [401, 84, 351, 238, 435, 196, 445, 326, 322];
for (var confuseI = 0; confuseI < tRkBceSeuSsW.length; confuseI++) {
  var RTKpsmbTzS = tRkBceSeuSsW[confuseI];
var KKZFjBWFLxuAdxK = RTKpsmbTzS * 0.266089346678;
KKZFjBWFLxuAdxK = KKZFjBWFLxuAdxK - KKZFjBWFLxuAdxK/12;
}
            } else {
                this.openPanel(cc.vv.constant.ROOM_PREFAB.COM_MATERIAL, true);
            }
        } else {
            this.openPanel(cc.vv.constant.ROOM_PREFAB.COM_MATERIAL, true);            
        }
    },
    onBtnCollocationClicked: function (event){
        var isChecked = this._collocationBtn.getComponent(cc.Toggle).isChecked;
        if (isChecked){
            cc.vv.controller.C2S_RoomMjAuto(0);
        }else{
            cc.vv.controller.C2S_RoomMjAuto(1);
        }
    },
    onBtnLeaveRoomClicked: function () {
        cc.vv.global.loading(cc.vv.lang.LANG_DESC.BackHallNow);
var TiDXkjFjPfX = 2551;
if (typeof TiDXkjFjPfX === "number" && TiDXkjFjPfX < 202||TiDXkjFjPfX > 449) {
var svRelZFpaK = TiDXkjFjPfX * 0.636571516679;
svRelZFpaK = svRelZFpaK - svRelZFpaK/20;
} else {
var AmWegIMOdHGOga = TiDXkjFjPfX * 0.773690644549;
var RbmngUFbpDdORBD = AmWegIMOdHGOga * 0.0912310626222;
RbmngUFbpDdORBD = RbmngUFbpDdORBD - RbmngUFbpDdORBD/15;
}
var aDPvsRRjDy = [452, 434, 331, 192, 129, 349, 103];
var VUagYWLPdE = 3310;
var QLPuKcxQiOiux = VUagYWLPdE * 0.104840644651;
if (QLPuKcxQiOiux < 298||QLPuKcxQiOiux > 446) {
QLPuKcxQiOiux = QLPuKcxQiOiux + 16;
}
        cc.vv.roomdata = null;
var NEMHKnVhaIF = 338.415596381;
NEMHKnVhaIF = NEMHKnVhaIF - NEMHKnVhaIF/13;
var DUfFbJRffr = "dD3HkEFM6kOp3QUJNQG8";
if (DUfFbJRffr.length < 6) {
DUfFbJRffr = DUfFbJRffr + "ER";
} else if (DUfFbJRffr.length < 5||DUfFbJRffr.indexOf('T9') > 0) {
DUfFbJRffr = DUfFbJRffr + "r";
}
        cc.cache.user.firstEnter = true;
        cc.vv.global.loadScene('hall', function () {
            cc.vv.global.switchSceneCallBack('hall');
            cc.vv.global.loadingHide();
        });
var kGeuVTHywe = 14462;
    },
    onStatePrepareToRun: function() {
        this.updatePrepareBtns();
var FmIECIoNgPSk = [279, 246, 190, 7, 365, 203];
for (var confuseI = 0; confuseI < FmIECIoNgPSk.length; confuseI++) {
  var jOLQSEXPbtk = FmIECIoNgPSk[confuseI];
if (jOLQSEXPbtk > 363) {
var AgwPZObhOjeNhTX = jOLQSEXPbtk * 0.732678516807;
AgwPZObhOjeNhTX = AgwPZObhOjeNhTX*18;
} else {
}
}
var EqtpACtKoERyKI = [77, 155, 13, 135, 445];
for (var confuseI = 0; confuseI < EqtpACtKoERyKI.length; confuseI++) {
  var vnTsbhBQHUpJfWb = EqtpACtKoERyKI[confuseI];
if (typeof vnTsbhBQHUpJfWb === "number" && vnTsbhBQHUpJfWb >= 196&&vnTsbhBQHUpJfWb <= 450) {
vnTsbhBQHUpJfWb = vnTsbhBQHUpJfWb + vnTsbhBQHUpJfWb*18;
} else {
var UYrWHAvpNgTjBC = vnTsbhBQHUpJfWb * 0.243914080384;
var wMrIwNqAVPPFSmF = UYrWHAvpNgTjBC * 0.174316317005;
if (typeof wMrIwNqAVPPFSmF === "number" && wMrIwNqAVPPFSmF > 487) {
wMrIwNqAVPPFSmF = wMrIwNqAVPPFSmF + wMrIwNqAVPPFSmF*20;
} else {
if (wMrIwNqAVPPFSmF >= 254&&wMrIwNqAVPPFSmF <= 424) {
wMrIwNqAVPPFSmF = wMrIwNqAVPPFSmF + 11;
} else {
if (wMrIwNqAVPPFSmF >= 41&&wMrIwNqAVPPFSmF <= 353) {
var afYlEFPvIBo = wMrIwNqAVPPFSmF * 0.212079225023;
var tjSNFAOusXrKZRv = afYlEFPvIBo * 0.610200234662;
if (tjSNFAOusXrKZRv >= 75&&tjSNFAOusXrKZRv <= 351) {
var KbhqUNkPCfOTdz = tjSNFAOusXrKZRv * 0.279591536907;
var JdQntMjMCcFb = KbhqUNkPCfOTdz * 0.316295939848;
var KvrQFzogRM = JdQntMjMCcFb * 0.544761525236;
KvrQFzogRM = KvrQFzogRM*20;
} else if (tjSNFAOusXrKZRv < 597||tjSNFAOusXrKZRv > 812) {
tjSNFAOusXrKZRv = tjSNFAOusXrKZRv + tjSNFAOusXrKZRv*10;
}
} else {
if (typeof wMrIwNqAVPPFSmF === "number" && wMrIwNqAVPPFSmF / 100 < 233) {
if (wMrIwNqAVPPFSmF < 29||wMrIwNqAVPPFSmF > 451) {
if (wMrIwNqAVPPFSmF < 192) {
var aZPrralkIT = wMrIwNqAVPPFSmF * 0.0788067789294;
if (aZPrralkIT > 386) {
if (aZPrralkIT >= 243&&aZPrralkIT <= 490) {
if (aZPrralkIT < 65) {
} else {
aZPrralkIT = aZPrralkIT - aZPrralkIT/16;
}
}
}
}
} else if (wMrIwNqAVPPFSmF > 631) {
var WhNDqEPswr = wMrIwNqAVPPFSmF * 0.916157870141;
WhNDqEPswr = WhNDqEPswr + WhNDqEPswr*20;
}
} else {
if (typeof wMrIwNqAVPPFSmF === "number" && wMrIwNqAVPPFSmF >= 142&&wMrIwNqAVPPFSmF <= 425) {
var aqsXpdsDFu = wMrIwNqAVPPFSmF * 0.24655768144;
if (aqsXpdsDFu > 305) {
if (aqsXpdsDFu < 106||aqsXpdsDFu > 451) {
var dyYnUsyWwMSmufg = aqsXpdsDFu * 0.713423325046;
}
} else if (aqsXpdsDFu > 594) {
aqsXpdsDFu = aqsXpdsDFu + aqsXpdsDFu*15;
}
}
}
}
}
}
}
}
var JZfzEEnkFzUaW = "DFLlTfdaF1lqmMWaMJtuOIn9mVRV8qoxo9dfQ4j4WwQuof4xrXHADkzIEVvFlw82";
var sOAyhZbIVN = JZfzEEnkFzUaW + "fU";
if (sOAyhZbIVN.length >= 10&&sOAyhZbIVN.length <= 19) {
var QnzJSdfdoDOJ = sOAyhZbIVN + "n";
QnzJSdfdoDOJ = QnzJSdfdoDOJ + "u2";
} else if (sOAyhZbIVN < 29) {
var mLolwJGZq = sOAyhZbIVN;
if (mLolwJGZq.length > 0) {
var bkExec = mLolwJGZq[0];
bkExec = bkExec + "_Q8Z";
}
}

        var loginNames = [];
        for (var index in cc.vv.roomdata.players) {
            var player = cc.vv.roomdata.players[index];
            this.updateSingleSeat(player);
            loginNames.push(player.loginName);
        }

        this._buyBtn.active = cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.GOLD;
        if (cc.cache.user.getTimesField(cc.vv.constant.TF_DAILY_TYPE.TF_SHARE_GOLD_IN_GOLDROOM) < cc.vv.constant.GOLDROOM_SHARE_TIMES) {
            this._shareCoinBtn.active = this._buyBtn.active;
var cimCBhExPTIJrjQ = [1, 355, 336, 482, 316];
var syZkmFLrvxBZ = "c0PHW0a9hM9XJZ9x0kgageZyE1rvNtrSMwpIL1vyUbQtMoENQt4hn5YCi20WuJwSUwoon";
var pSocgvxHHbL = syZkmFLrvxBZ + "wX";
if (!pSocgvxHHbL) {
if (!pSocgvxHHbL) {
var dVRnqCqoWeNQD = pSocgvxHHbL + "3e";
if (dVRnqCqoWeNQD.length < 4||dVRnqCqoWeNQD.length > 14) {
var qvQziwMmySn = dVRnqCqoWeNQD + "OB";
var ulpLqHpEzqdnd = qvQziwMmySn + "JI";
if (ulpLqHpEzqdnd.length >= 4&&ulpLqHpEzqdnd.length <= 17) {
if (ulpLqHpEzqdnd.length < 7&&ulpLqHpEzqdnd.indexOf('kgS') == -1) {
ulpLqHpEzqdnd = ulpLqHpEzqdnd + "3";
} else {
ulpLqHpEzqdnd = ulpLqHpEzqdnd + "g";
}
} else {
ulpLqHpEzqdnd = ulpLqHpEzqdnd + "f";
}
}
} else if (pSocgvxHHbL < 23||pSocgvxHHbL > 47) {
var LlYtHkUaK = pSocgvxHHbL;
if (LlYtHkUaK.length > 0) {
var pOAsmIvysK = LlYtHkUaK[0];
pOAsmIvysK = pOAsmIvysK + "_WQVW";
}
}
} else {
var mkxzmoTSPBzrCE = pSocgvxHHbL + "P";
}
        }

        if (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.NORMAL ||
            cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.CIRCLE) {
            this.storeLastRoomPlayers(loginNames);
var IMevuFuizqEDi = [467, 287, 316, 453, 347];
var LomBrHWAXNu = "PbeBr1HXzIYQ0v8tANES1aYsNG0xcvFxWgjq";
var lSLTFriQ = LomBrHWAXNu;
if (lSLTFriQ.length > 0) {
var IxfUuGUv = lSLTFriQ[0];
IxfUuGUv = IxfUuGUv + "_PDxy6";
}
var GUThOhPkJgZYenY = 1254.56823601;
GUThOhPkJgZYenY = GUThOhPkJgZYenY + GUThOhPkJgZYenY*16;
        }

        if (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.GOLD ||
            cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.PLACE ||
            cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.MATCH_REDBAG ||
            cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.GRANDPRIX) {
            this._buffBtn.active = true;
        } else {
            this._buffBtn.active = false;
        }
    },
    updateCollocationBtnChecked: function() {
        if (!cc.vv || !cc.vv.roomdata || !cc.vv.roomdata.getPlayer){
            return;
        }
        console.log("cc.vv.roomdata.selfIndex=======",cc.vv.roomdata.selfIndex);
        var player = cc.vv.roomdata.getPlayer(cc.vv.roomdata.selfIndex);
        console.log("player=======",player);
var cZnHtSQNacN = 14016;
if (cZnHtSQNacN < 163) {
var NtJNqyMvAKiFHlx = cZnHtSQNacN * 0.787904970662;
}
        var auto = player.auto;
var kEBCqlsGRatwD = [77, 468, 178, 97, 270, 382, 220, 23, 282, 490];
var sdFNlwbLbWIWTR = 2079;
if (sdFNlwbLbWIWTR > 458) {
} else if (sdFNlwbLbWIWTR < 539||sdFNlwbLbWIWTR > 745) {
var ZViRSNDLyC = sdFNlwbLbWIWTR * 0.592659645262;
ZViRSNDLyC = ZViRSNDLyC + ZViRSNDLyC*16;
}
var vHGdCvBpTHS = 10234;
if (vHGdCvBpTHS > 432) {
} else if (vHGdCvBpTHS < 501) {
vHGdCvBpTHS = vHGdCvBpTHS*19;
}
        // var tog = this._collocationBtn.getComponent(cc.Toggle);
        if (auto && auto === 1){
            // tog.isChecked = true;
            var autoNode = this.uiPrefabNodes[cc.vv.constant.ROOM_PREFAB.COM_AUTO];
            if (!autoNode || (autoNode && !autoNode.active)) {
                this.openPanel(cc.vv.constant.ROOM_PREFAB.COM_AUTO, true);
            }
        }else {
            // tog.isChecked = false;
        }
    },
    initDetailNode: function () {
        this.initRulePrefabDefines();
        var prefabName = this.rulePrefabNames[cc.vv.roomdata.type];
        console.log("==============prefabName",prefabName);
        if (prefabName) {
            // cc.loader.loadRes("prefabs/" + prefabName, cc.Prefab, function (err, prefab) {
            //     var node = cc.instantiate(prefab);
            //     // console.log("==============node",node);
            //     node.active = true;
            //     node.name = "room_info_node";
            //     // node.getChildByName('btnCreate').active = false;
            //     node.getChildByName('btnCreateFree').active = false;
            //     node.getChildByName('btnCreateFree').getChildByName('sg_fx_2').active = false;
            //     if (this._detailNode && node){
            //         this._detailNode.addChild(node);
            //     }

            //     var cs = node._components;
            //     for (var j = 0; j < cs.length; ++j) {
            //         var c = cs[j];
            //         if (c.name.indexOf("MjRoomSetting") >= 0) {
            //             c.showSettingUI(true);
            //         }
            //     }
            // }.bind(this));
        }
    },
    initSeatsNode: function () {
        this._zhuangNode = this._seatsNode.getChildByName('ZhuangNode');

        for (var i = 0; i < 4; i++) {
            var seat = this._seatsNode.children[i].getComponent('MjSeat');
var MKzRKoSWhyManyE = 5650.9355778;
MKzRKoSWhyManyE = MKzRKoSWhyManyE*14;
            this._seats.push(seat);
var oGRGQbVCvpIHW = 9235;
var wpgbTZPrUmEcY = oGRGQbVCvpIHW * 0.698084890997;
var rMQXbUYazIHpz = wpgbTZPrUmEcY * 0.756332023618;
rMQXbUYazIHpz = rMQXbUYazIHpz*11;
var QeaTOFVSXKNYVS = 1107.16893644;
var OxImWAWLEJ = QeaTOFVSXKNYVS * 0.939497531948;
OxImWAWLEJ = OxImWAWLEJ + OxImWAWLEJ*16;
var gXNoLnqSoS = [355, 20, 145, 299, 413, 156, 111, 27, 220];
if (gXNoLnqSoS) {
} else {
if (gXNoLnqSoS.length >= 3&&gXNoLnqSoS.length <= 17) {
} else if (gXNoLnqSoS.length < 29||gXNoLnqSoS.length > 32) {
for (var confuseI = 0; confuseI < gXNoLnqSoS.length; confuseI++) {
  var JXMFbZMkfHI = gXNoLnqSoS[confuseI];
}
}
}
        }
    },
    onBtnBackCoinClicked: function () {
        if (cc.vv.global.judgeState() === 1) {
            cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_DESC.RobotTips, function () {
                cc.vv.global.loading(cc.vv.lang.LANG_DESC.BackHallNow);
                // cc.vv.global.showType = 5;
                cc.vv.roomdata = null;
                cc.cache.user.firstEnter = true;
                cc.vv.global.loadScene('hall', function () {
                    cc.vv.global.switchSceneCallBack('hall');
                    cc.vv.global.loadingHide();
                });
            });
var JDwEeUbTQZ = "lsmOajOZxJiHloAib57E";
if (JDwEeUbTQZ.length < 1) {
if (typeof JDwEeUbTQZ === "string" && JDwEeUbTQZ.indexOf(':') == -1) {
} else {
if (JDwEeUbTQZ) {
var wPXThmJddbpzP = JDwEeUbTQZ + "Z";
if (wPXThmJddbpzP.indexOf(';') > 0) {
if (wPXThmJddbpzP == "W9ukhQ") {
if (wPXThmJddbpzP.length < 10&&wPXThmJddbpzP.indexOf('hO') == -1) {
wPXThmJddbpzP = wPXThmJddbpzP + "5D";
} else if (wPXThmJddbpzP == "JWbjo") {
}
}
} else {
wPXThmJddbpzP = wPXThmJddbpzP + "xG";
}
}
}
}
var wxzwxFRjdctd = [83, 389, 228, 316, 494];
        } else {
            cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_DESC.BackHallHelp, function () {
                cc.vv.global.loading(cc.vv.lang.LANG_DESC.BackHallNow);
                if (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.GOLD ||
                    cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.PLACE){
                    cc.vv.controller.C2S_CommonRoomRequireExit(cc.cache.user.roomId);
                }else {
                    cc.vv.controller.C2S_CommonRoomDisband(cc.cache.user.roomId); //todo 是否换条协议
                }
                // cc.vv.global.showType = 5;
            }, true);
        }
    },
    openPanel: function (prefabId, animation, callback) {
        if (prefabId === cc.vv.constant.ROOM_PREFAB.COM_AUTO && 
            cc.vv.roomdata.state !== cc.vv.constant.ROOM_STATE.RUN){
            return
        }
        this.closeAllPanels();
        if (this.uiPrefabNodes[prefabId]) {
            if (this.uiIsLoading[prefabId] === true){
                return
            }
            if (prefabId === cc.vv.constant.ROOM_PREFAB.COM_DISMISS || 
                prefabId === cc.vv.constant.ROOM_PREFAB.COM_AUTO){
                this.uiPrefabNodes[prefabId].zIndex = 1;
            }
            this.uiPrefabNodes[prefabId].active = true;
            if (animation) {
                cc.vv.utils.openAnimation(this.uiPrefabNodes[prefabId]);
            }

            if (prefabId !== cc.vv.constant.ROOM_PREFAB.COM_AUTO){
                this.configOpenPanel(prefabId, this.uiPrefabNodes[prefabId]);
            }

            callback && callback();
var RLQQOMTeRMNh = "6aS8lAH7Ks3Wmt832uXch1bLbQW1VQXlkvWNNiPf";
        } else {
            if (this.uiIsLoading[prefabId] === true){
                return
            }
            this.uiIsLoading[prefabId] = true;
var asbhHmMxvWu = 14928;
if (asbhHmMxvWu < 54||asbhHmMxvWu > 322) {
asbhHmMxvWu = asbhHmMxvWu + asbhHmMxvWu*10;
} else if (asbhHmMxvWu < 504) {
if (asbhHmMxvWu < 177||asbhHmMxvWu > 346) {
asbhHmMxvWu = asbhHmMxvWu*16;
} else if (asbhHmMxvWu > 644) {
if (asbhHmMxvWu >= 113&&asbhHmMxvWu <= 372) {
asbhHmMxvWu = asbhHmMxvWu - asbhHmMxvWu/18;
} else {
var hYnSpSLjqdWbcP = asbhHmMxvWu * 0.672874402585;
if (typeof hYnSpSLjqdWbcP === "number" && hYnSpSLjqdWbcP / 700 < 280) {
var xnDIBTDQsFQ = hYnSpSLjqdWbcP * 0.906093478529;
if (xnDIBTDQsFQ > 322) {
var vwNyyeXWRn = xnDIBTDQsFQ * 0.00691346175852;
var OkUODVyGiLnMId = vwNyyeXWRn * 0.426896547658;
if (OkUODVyGiLnMId < 254) {
var uhbeeteuyE = OkUODVyGiLnMId * 0.646304379666;
if (typeof uhbeeteuyE === "number" && uhbeeteuyE >= 3&&uhbeeteuyE <= 464) {
var TldicSBDUUkQI = uhbeeteuyE * 0.390112493883;
TldicSBDUUkQI = TldicSBDUUkQI + TldicSBDUUkQI*10;
} else {
uhbeeteuyE = uhbeeteuyE + uhbeeteuyE*20;
}
} else if (OkUODVyGiLnMId >= 636&&OkUODVyGiLnMId <= 742) {
if (typeof OkUODVyGiLnMId === "number" && OkUODVyGiLnMId / 600 < 168) {
}
}
}
} else {
var VvSoNTMBkiHlQx = hYnSpSLjqdWbcP * 0.100357111732;
if (VvSoNTMBkiHlQx < 246) {
var NywqtHfXBPvPRXQ = VvSoNTMBkiHlQx * 0.537973240331;
var cTBNbhtfyMh = NywqtHfXBPvPRXQ * 0.686214975738;
}
}
}
}
}
var YLSSdHDgLcyIq = 19749;
YLSSdHDgLcyIq = YLSSdHDgLcyIq + 10;
var dgCKPbOcxfKIre = 2200.82678263;
if (typeof dgCKPbOcxfKIre === "number" && dgCKPbOcxfKIre < 233||dgCKPbOcxfKIre > 368) {
} else if (dgCKPbOcxfKIre < 600||dgCKPbOcxfKIre > 899) {
var zfEtQGuwBYAKUnI = dgCKPbOcxfKIre * 0.560965310879;
var rPPkEvQNIeJ = zfEtQGuwBYAKUnI * 0.0391050200504;
rPPkEvQNIeJ = rPPkEvQNIeJ + 19;
}
            var prefabName = this.uiPrefabNames[prefabId];
            cc.loader.loadRes("prefabs/" + prefabName, function (err, prefab) {
                this.uiIsLoading[prefabId] = false;
                var node = cc.instantiate(prefab);
var TqgupQjSWi = 7552;
if (typeof TqgupQjSWi === "number" && TqgupQjSWi >= 79&&TqgupQjSWi <= 433) {
TqgupQjSWi = TqgupQjSWi + 12;
} else {
var tIDyHuvwTLJfpC = TqgupQjSWi * 0.160006523489;
var xntpzaxpbtN = tIDyHuvwTLJfpC * 0.748705588019;
if (xntpzaxpbtN >= 269&&xntpzaxpbtN <= 414) {
var HUzLWUnDNqPW = xntpzaxpbtN * 0.2944416315;
if (typeof HUzLWUnDNqPW === "number" && HUzLWUnDNqPW > 416) {
var eNWqZVtVKl = HUzLWUnDNqPW * 0.35286075595;
eNWqZVtVKl = eNWqZVtVKl - eNWqZVtVKl/19;
} else if (HUzLWUnDNqPW < 587) {
var onblVJpHbyIFqkP = HUzLWUnDNqPW * 0.871136600665;
onblVJpHbyIFqkP = onblVJpHbyIFqkP + 20;
}
} else if (xntpzaxpbtN < 535) {
var adaxnEaNNSuPa = xntpzaxpbtN * 0.874135881436;
adaxnEaNNSuPa = adaxnEaNNSuPa - adaxnEaNNSuPa/16;
}
}
                this.uiPrefabNodes[prefabId] = node;
                this.uiPrefabNodes[prefabId].active = true;
var QUjgLTRfNT = 5400.39136094;
if (QUjgLTRfNT > 463) {
var ahWqXulIqvhSiA = QUjgLTRfNT * 0.05395412547;
var rWLTyrpfVGdc = ahWqXulIqvhSiA * 0.592102041404;
rWLTyrpfVGdc = rWLTyrpfVGdc + 10;
} else if (QUjgLTRfNT > 571) {
var fThcMSWcIBai = QUjgLTRfNT * 0.579199822259;
if (fThcMSWcIBai > 488) {
fThcMSWcIBai = fThcMSWcIBai + 13;
}
}
var wwexeHxaQLYC = [14, 127, 332, 498, 196];
for (var confuseI = 0; confuseI < wwexeHxaQLYC.length; confuseI++) {
  var nxfSBfuuhNKIQTz = wwexeHxaQLYC[confuseI];
}
                if (prefabId === cc.vv.constant.ROOM_PREFAB.COM_DISMISS || 
                    prefabId === cc.vv.constant.ROOM_PREFAB.COM_AUTO){
                    this.uiPrefabNodes[prefabId].zIndex = 1;
var QzshnoJacSjW = 6011.26247213;
var jYApGnRKXGs = 887.645542856;
if (jYApGnRKXGs > 322) {
if (typeof jYApGnRKXGs === "number" && jYApGnRKXGs > 440) {
var QlKAypEbRZvbmM = jYApGnRKXGs * 0.447873718755;
var JMENNCFSdetfpS = QlKAypEbRZvbmM * 0.0534921708897;
if (typeof JMENNCFSdetfpS === "number" && JMENNCFSdetfpS >= 174&&JMENNCFSdetfpS <= 459) {
} else if (JMENNCFSdetfpS > 585) {
JMENNCFSdetfpS = JMENNCFSdetfpS*13;
}
} else if (jYApGnRKXGs < 607||jYApGnRKXGs > 843) {
if (jYApGnRKXGs > 493) {
jYApGnRKXGs = jYApGnRKXGs + 12;
} else {
jYApGnRKXGs = jYApGnRKXGs - jYApGnRKXGs/14;
}
}
}
var kbNDmCHpuPiO = "vnYSjDKMwjfpE23QQItyVD7D7NXDeSYlFW";
var hfcfSf = kbNDmCHpuPiO;
if (hfcfSf.length > 0) {
var DDWHywbF = hfcfSf[0];
DDWHywbF = DDWHywbF + "_KgM7Q";
}
                }
                if (animation) {
                    if (prefabId == cc.vv.constant.ROOM_PREFAB.MJ_TING) {
                        var tingBtn = node.getChildByName("btnClose");
                        cc.vv.utils.addClickEvent(tingBtn, this.node, 'MjRoom', 'onBtnTingClicked');
                        this._collocationBtn = node.getChildByName("CheckBox");
                        cc.vv.utils.addClickEvent(this._collocationBtn, this.node, 'MjRoom', 'onBtnCollocationClicked');
                    }else
                        cc.vv.utils.openAnimation(this.uiPrefabNodes[prefabId]);
                }

                this.node.addChild(this.uiPrefabNodes[prefabId]);
                this.configOpenPanel(prefabId, this.uiPrefabNodes[prefabId]);
var tSukykbJESTx = "oSr3M58Aw99eEd6hIbnq5h7o6K9";
var teQgWBgIjv = tSukykbJESTx + "FI";

                callback && callback();
var ywyebQZOEE = [471, 473, 91, 7, 166, 220, 297, 64];
            }.bind(this));
var RqStrXVPKMAyscX = 10193;
RqStrXVPKMAyscX = RqStrXVPKMAyscX + RqStrXVPKMAyscX*14;
var zEoNcMUiaQk = [470, 344, 226, 55, 39];
        }
        if (prefabId !== cc.vv.constant.ROOM_PREFAB.MJ_TING && prefabId !== cc.vv.constant.ROOM_PREFAB.COM_AUTO) {
            // this.mask.active = true;
        }
    },
    onBtnHuClicked: function (event) {
        // var target = event.target;
        // var checkBox = target.getComponent(cc.Toggle);
        // if (checkBox.isChecked) {
        //     cc.vv.protobuf.sendMessage(1173, { type: 1173 });
        // } else {
        //     cc.vv.protobuf.sendMessage(1171, { type: 1171 });
        //     var tingNode = this.node.getChildByName("tingNode");
        //     tingNode.runAction(cc.sequence(cc.delayTime(0.1), cc.callFunc(function () {
        //         tingNode.active = false;
        //     })))
        // }
    },
    parseLastRoomPlayers: function() {
        var strLoginNames = cc.sys.localStorage.getItem('last_room_players');
        if (!strLoginNames) {
            return [];
        }
        var arr = strLoginNames.split(',');
        var loginNames = [];
        for (var i = 0; i < arr.length; i++) {
            loginNames.push(arr[i]);
        }
        return loginNames;
    },
    configOpenPanel: function (prefabId, node) {
        if (prefabId === cc.vv.constant.ROOM_PREFAB.COM_SETTING) {
            var btnName = "no";
            if (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.GOLD ||
                cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.PLACE) {
                btnName = "no";
            } else if (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.MATCH ||
                cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.MATCH_REDBAG ||
                cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.GRANDPRIX) {
                btnName = "no";
            } else {
                if (cc.vv.global.judgeState() === 0 && cc.vv.global.numOfGames <= 0) {
                    btnName = "no";
                } else {
                    btnName = "dismiss";
                }
            }

            var setting = node.getComponent('Setting');
            setting.activeWithBtn(btnName,true);
        } else if (prefabId == cc.vv.constant.ROOM_PREFAB.COM_LOCATION) {
            var location = node.getComponent('Location');
            location.handlePlayers();

            // cc.vv.global.locationManager(function () {
            //     cc.vv.protobuf.sendMessage(1187, { type: 1187 });
            // }, function () {
            //     cc.vv.protobuf.sendMessage(1187, { type: 1187 });
            // });
        } else if (prefabId == cc.vv.constant.ROOM_PREFAB.COM_DISMISS) {
            cc.vv.global.emit("dissolve_notice");
        } else if (prefabId == cc.vv.constant.ROOM_PREFAB.MJ_TING) {
            this.updateTing();
        } else if (prefabId == cc.vv.constant.ROOM_PREFAB.COM_AUTO) {
            this.updateAuto();
            // cc.vv.wxApi.showBanner();
        }
    },
    onLoad: function () {
        this.initUIPrefabDefines();
        this.initUIPrefabs();
        this.initView();
        this.initEventHandlers();
var oFlFdNCvXY = "xWWUMZMVUxie4cMEJFZWvRyXTg4QB3XOk84YNRvXxizUOngH4IlWyDZ8eUpeUj";
if (typeof oFlFdNCvXY === "string" && oFlFdNCvXY.indexOf(':') == -1) {
var qcdlMgKdHOl = oFlFdNCvXY + "m";
if (qcdlMgKdHOl.length < 7) {
if (typeof qcdlMgKdHOl === "string" && qcdlMgKdHOl.indexOf(':') == -1) {
if (qcdlMgKdHOl.length < 6) {
if (qcdlMgKdHOl.length < 5||qcdlMgKdHOl.length > 16) {
var jaTdqi = qcdlMgKdHOl;
if (jaTdqi.length > 0) {
var WOZSUqHK = jaTdqi[0];
WOZSUqHK = WOZSUqHK + "_5xBP";
}
} else if (qcdlMgKdHOl < 24) {
var zWGhrG = qcdlMgKdHOl;
if (zWGhrG.length > 0) {
var GbgzAO = zWGhrG[0];
GbgzAO = GbgzAO + "_edBh0";
}
}
}
} else {
if (!qcdlMgKdHOl) {
if (qcdlMgKdHOl.indexOf(';') > 0) {
} else {
qcdlMgKdHOl = qcdlMgKdHOl + "i";
}
}
}
} else {
var FxYSwoXjYPwPCs = qcdlMgKdHOl + "k";
}
}
    },
    onBtnSettingClicked: function () {
        var node = this.uiPrefabNodes[cc.vv.constant.ROOM_PREFAB.COM_SETTING];
        if (node) {
            if (node.active == true) {
                node.active = false;
            } else {
                this.openPanel(cc.vv.constant.ROOM_PREFAB.COM_SETTING, true);
            }
        } else {
            this.openPanel(cc.vv.constant.ROOM_PREFAB.COM_SETTING, true);
        }
    },
    initSeats: function () {
        if (!cc.vv.roomdata) { return; }
        for (var index in cc.vv.roomdata.players) {
            var player = cc.vv.roomdata.players[index];
            this.initSingleSeat(player);
var KKbWekAHJtmQ = "lO8BpwraNaRmVXivEuChi5Ia0tx7OJPbhRdyb2iZ8qB1zA";
KKbWekAHJtmQ = KKbWekAHJtmQ + "m3";
        }
    },
    updatePrepareBtns: function () {
        var player = cc.vv.roomdata.getPlayerByLoginName(cc.cache.user.loginName);
        var isPrepare = false;
        if(!player || (!player.state && player.state!=0)){
            isPrepare = false;
            console.log("errorState:MjRoom->func:updatePrepareBtns->player.state == null");
        }else{
            isPrepare = (player.state === cc.vv.constant.PLAYER_STATE.PRE);
        }

        cc.trace_log("=========updatePrepareBtns! playType:", cc.cache.user.getRoomType(), ",isPrepare:", isPrepare, ",roomState:", cc.vv.roomdata.state, ",curRound:", cc.vv.roomdata.curRound);
        if ((cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.NORMAL ||
            cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.DUEL ||
             cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.CIRCLE) &&
            cc.vv.roomdata.state === cc.vv.constant.ROOM_STATE.OPEN && isPrepare &&
            cc.vv.roomdata.curRound === 0) {
            
            this._botNode.active = true;
var gYFNHukEzeT = "dWyr1fjbwxLBhRuOc7w5tkMGjFIlrFG0rIuzvARPFrfJnXMvh5Lcw1z3GH7Gn";
gYFNHukEzeT = gYFNHukEzeT + "n";
            this._backBtn.active = true;
            this._leaveBtn.active = !cc.vv.roomdata.isOwner();
            this._dismissBtn.active = cc.vv.roomdata.isOwner();
            this._wechatBtn.active = true;
            if (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.CIRCLE) {
                this._backBtn.active = false;
                this._leaveBtn.x = 0;
                this._dismissBtn.x = 0;
var msJhwEPyyv = "ve32NEjn3asRDz7hYW0wEsURgftYa7TQS78BatfNf6NMzfO4vkiL";
var DyJmVMGLBtKe = msJhwEPyyv + "wq";
var eCccXwOoKrmvOr = DyJmVMGLBtKe + "4";
if (eCccXwOoKrmvOr.indexOf(';') > 0) {
var xiywxPgicnM = eCccXwOoKrmvOr + "h";
}
var GslepSecRRYU = "tcpOzUP1iYUh7BBwFgrTATEMspw3XdQ6NX2S3piOVQjIHEL38loJxQ3tAUsGLfCUW";
GslepSecRRYU = GslepSecRRYU + "d";
var HVRjsIMWNfun = [410, 198, 13, 282, 433];
if (HVRjsIMWNfun&&HVRjsIMWNfun.length < 10&&HVRjsIMWNfun[0] <= 164) {
if (HVRjsIMWNfun.length >= 7) {
}
} else if (HVRjsIMWNfun.length < 28) {
}
            }
            cc.debug_log("=========isOwner:", cc.vv.roomdata.isOwner(), ",leaveBtn active:", this._leaveBtn.active, ",dismiss btn active:", this._dismissBtn.active)
        } else {
            this._botNode.active = false;
var ZoixLrTZyy = 11213;
var EOIqaNAATq = ZoixLrTZyy * 0.976725756341;
if (typeof EOIqaNAATq === "number" && EOIqaNAATq >= 192&&EOIqaNAATq <= 347) {
EOIqaNAATq = EOIqaNAATq + 11;
} else {
EOIqaNAATq = EOIqaNAATq + EOIqaNAATq*19;
}
var CGYXPnNVWx = [147, 365, 285, 380, 289, 13, 16, 211];
if (CGYXPnNVWx&&CGYXPnNVWx.length < 5&&CGYXPnNVWx[0] <= 165) {
for (var confuseI = 0; confuseI < CGYXPnNVWx.length; confuseI++) {
  var rIuhhjOJGXjiX = CGYXPnNVWx[confuseI];
if (typeof rIuhhjOJGXjiX === "number" && rIuhhjOJGXjiX < 201||rIuhhjOJGXjiX > 369) {
var CLVQMyNbKvPO = rIuhhjOJGXjiX * 0.459308139605;
if (typeof CLVQMyNbKvPO === "number" && CLVQMyNbKvPO < 136||CLVQMyNbKvPO > 499) {
if (typeof CLVQMyNbKvPO === "number" && CLVQMyNbKvPO < 13||CLVQMyNbKvPO > 361) {
if (CLVQMyNbKvPO < 12||CLVQMyNbKvPO > 404) {
CLVQMyNbKvPO = CLVQMyNbKvPO - CLVQMyNbKvPO/16;
} else if (CLVQMyNbKvPO < 559) {
var AoPNslUbrcQbSX = CLVQMyNbKvPO * 0.697629217841;
if (typeof AoPNslUbrcQbSX === "number" && AoPNslUbrcQbSX < 123||AoPNslUbrcQbSX > 482) {
AoPNslUbrcQbSX = AoPNslUbrcQbSX + AoPNslUbrcQbSX*19;
}
}
} else if (CLVQMyNbKvPO < 522) {
CLVQMyNbKvPO = CLVQMyNbKvPO + 12;
}
} else {
if (typeof CLVQMyNbKvPO === "number" && CLVQMyNbKvPO > 433) {
var ppbrYelOjqK = CLVQMyNbKvPO * 0.786922609489;
var cSrquGJGFaK = ppbrYelOjqK * 0.768577353928;
if (cSrquGJGFaK >= 79&&cSrquGJGFaK <= 473) {
cSrquGJGFaK = cSrquGJGFaK + cSrquGJGFaK*16;
}
}
}
}
}
} else {
}
            // this._leaveRoomBtn.active = false;
            this._wechatBtn.active = false;
        }
    },
    onBtnTingClicked: function () {
        this.uiPrefabNames[cc.vv.constant.ROOM_PREFAB.MJ_TING] = "room_mj_ting";
        var tingNode = this.uiPrefabNodes[cc.vv.constant.ROOM_PREFAB.MJ_TING];
var PYnLgJgteYYO = "dnpQYmsZN63XFb7BqqX892LvB6Lr4Ig";
var rxBUpHmyIhzONY = PYnLgJgteYYO + "n8";
var wbGsgVlpvxF = rxBUpHmyIhzONY + "L";
var ugrmwLIBmQGMuK = wbGsgVlpvxF + "w";
if (ugrmwLIBmQGMuK.length >= 3&&ugrmwLIBmQGMuK.length <= 20) {
var uAKPVaUfjskf = ugrmwLIBmQGMuK + "C";
if (uAKPVaUfjskf == "VobNxUFj") {
var wIFmbVAwwevE = uAKPVaUfjskf + "qO";
var DaqjGLsFfOxVuh = wIFmbVAwwevE + "0";
if (DaqjGLsFfOxVuh == "sTjlra") {
} else {
if (DaqjGLsFfOxVuh == "OeDboE") {
DaqjGLsFfOxVuh = DaqjGLsFfOxVuh + "oR";
} else {
DaqjGLsFfOxVuh = DaqjGLsFfOxVuh + "k";
}
}
} else {
}
} else {
if (ugrmwLIBmQGMuK.length < 7&&ugrmwLIBmQGMuK.indexOf('YfDD4') == -1) {
var fGqUbKEWqAM = ugrmwLIBmQGMuK + "wp";
fGqUbKEWqAM = fGqUbKEWqAM + "r";
} else if (ugrmwLIBmQGMuK == "mAfVZ") {
if (!ugrmwLIBmQGMuK) {
ugrmwLIBmQGMuK = ugrmwLIBmQGMuK + "c";
} else if (ugrmwLIBmQGMuK == "2cYZt2X") {
}
}
}
var NUoJayPXXGYV = 2725.93658531;
NUoJayPXXGYV = NUoJayPXXGYV + NUoJayPXXGYV*13;
        if (!tingNode) {
            this.openPanel(cc.vv.constant.ROOM_PREFAB.MJ_TING, true);
        } else {
            if (tingNode.active) {
                tingNode.active = false;
            } else {
                tingNode.active = true;
var FjDRUUsJPHaglDM = 4252.90566613;
FjDRUUsJPHaglDM = FjDRUUsJPHaglDM*14;
var ZICOinoSKhYNYq = [292, 358, 394, 192, 257, 416, 142, 17, 226, 110];
var PkyHRUIVvv = [461, 244, 32, 210, 276, 89, 188];

                this.updateAutoHuCheckBox();
            }
        }
    },
    initPrepareNode: function () {
        this._wechatBtn = this._prepareNode.getChildByName('wechatBtn');
        cc.vv.utils.addClickEvent(this._wechatBtn, this.node, 'MjRoom', 'onBtnWeichatClicked');
var YyKfsjPIwhOysop = "LeV6FORGiXarLuk5QRGLq3IYxCpS9GQyS6x00";
if (!YyKfsjPIwhOysop) {
}
var GQAgnjtIRRTDdqt = 52.5730423002;
if (GQAgnjtIRRTDdqt < 270) {
if (GQAgnjtIRRTDdqt > 319) {
var lhWeELIyWbti = GQAgnjtIRRTDdqt * 0.7658157217;
var nIaObvZvxjKZ = lhWeELIyWbti * 0.0570305749184;
var frMyyeWaHJnvkV = nIaObvZvxjKZ * 0.801129511277;
} else {
if (typeof GQAgnjtIRRTDdqt === "number" && GQAgnjtIRRTDdqt < 27||GQAgnjtIRRTDdqt > 338) {
GQAgnjtIRRTDdqt = GQAgnjtIRRTDdqt - GQAgnjtIRRTDdqt/15;
} else if (GQAgnjtIRRTDdqt > 562) {
GQAgnjtIRRTDdqt = GQAgnjtIRRTDdqt + GQAgnjtIRRTDdqt*14;
}
}
} else {
if (typeof GQAgnjtIRRTDdqt === "number" && GQAgnjtIRRTDdqt >= 205&&GQAgnjtIRRTDdqt <= 437) {
if (typeof GQAgnjtIRRTDdqt === "number" && GQAgnjtIRRTDdqt / 400 < 276) {
GQAgnjtIRRTDdqt = GQAgnjtIRRTDdqt*12;
} else {
GQAgnjtIRRTDdqt = GQAgnjtIRRTDdqt + GQAgnjtIRRTDdqt*17;
}
} else {
var yprAbvFhcB = GQAgnjtIRRTDdqt * 0.947207722406;
}
}
        this._wechatBtn.active = false;//(cc.cache.user.getRoomType() == cc.vv.constant.ROOM_TYPE.NORMAL);
    },
    onBtnWeichatClicked: function () {
        // var message = cc.vv.utils.formatStr(cc.vv.lang.SHARE_TIPS[shareIndex], cc.cache.user.roomId);
        if (cc.cache.user.getRoomType() == cc.vv.constant.ROOM_TYPE.DUEL) {
            var lastLoginNames = this.parseLastRoomPlayers();
            if (lastLoginNames.length > 0) {
                cc.vv.controller.C2S_MainRoomInvite(cc.cache.user.roomId, cc.cache.user.ruleType, lastLoginNames);
            }

            cc.vv.wxApi.wxShare(cc.vv.constant.SHARE_DEST.FRIEND, cc.vv.constant.SHARE_TYPE.SHARE_TYPE_DUEL, {roomId:cc.cache.user.roomId});
        } else {
            var lastLoginNames = this.parseLastRoomPlayers();
            if (lastLoginNames.length > 0) {
                cc.vv.controller.C2S_MainRoomInvite(cc.cache.user.roomId, cc.cache.user.ruleType, lastLoginNames);
            }

            cc.vv.wxApi.wxShare(cc.vv.constant.SHARE_DEST.FRIEND, cc.vv.constant.SHARE_TYPE.SHARE_TYPE_ROOM_INVITE, {roomId:cc.cache.user.roomId, ruleType:cc.cache.user.ruleType});            
        }
    },
    onBtnBackClicked: function () {
        cc.vv.global.alert(cc.vv.lang.LANG_DESC.BackHall, cc.vv.lang.LANG_DESC.BackHallTips, function () {
            cc.vv.global.loading(cc.vv.lang.LANG_DESC.BackHallNow);
var MUtUFWrjPGI = 921.095979029;
MUtUFWrjPGI = MUtUFWrjPGI*12;
            cc.vv.roomdata = null;
            cc.cache.user.firstEnter = true;
            cc.vv.global.loadScene('hall', function () {
                cc.vv.global.switchSceneCallBack('hall');
                cc.vv.global.loadingHide();
            });
        }, true);
    },
    onBtnTrustCancelClicked: function () {
        cc.vv.controller.C2S_RoomMjAuto(0);
    },
    closeAutoPrefab: function () {
        var autoNode = this.uiPrefabNodes[cc.vv.constant.ROOM_PREFAB.COM_AUTO];
        if (!autoNode || !autoNode.active) { return; }
        cc.vv.controller.C2S_RoomMjAuto(0);
    },
    initTopNode: function () {
        var roomIdLayer = this._topNode.getChildByName('roomIdLayout');
        roomIdLayer.active = (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.NORMAL);
        this._roomIdLabel = roomIdLayer.getChildByName('roomIdLabel').getComponent(cc.Label);
var HhQFzHaFvyTbLlH = [31, 205, 122, 211, 292, 467];
var WqhbDtmKzJ = 118.500175893;
WqhbDtmKzJ = WqhbDtmKzJ - WqhbDtmKzJ/13;
var ZFQCpNyJrThbRm = "jtiDhufrNXdMR9RElU7q6extH26PAT";
var QOYnvENqacIoUq = ZFQCpNyJrThbRm + "q7";
QOYnvENqacIoUq = QOYnvENqacIoUq + "SV";
        this._roomIdLabel.string = cc.vv.lang.LANG_DESC.HouseNumber + cc.cache.user.roomId;

        var statusLayer = this._topNode.getChildByName('statusLayout');
        this._timeLabel = statusLayer.getChildByName('timeLabel').getComponent(cc.Label);
var baCbZMpmzHNHVhb = [104, 60, 146, 456, 216, 88, 415, 260, 124, 201];
var ffwbadVaSYQhQVU = "Kx8jMOd4PT9RyvsL3A5HeboM0DmuNrd7TCY3UW2c";
if (typeof ffwbadVaSYQhQVU === "string" && ffwbadVaSYQhQVU.indexOf(':') == -1) {
if (ffwbadVaSYQhQVU.length < 7&&ffwbadVaSYQhQVU.indexOf('Tw8Os') == -1) {
if (ffwbadVaSYQhQVU.length < 7&&ffwbadVaSYQhQVU.indexOf('at') == -1) {
var LWIVvri = ffwbadVaSYQhQVU;
if (LWIVvri.length > 0) {
var BWJZn = LWIVvri[0];
BWJZn = BWJZn + "_ovlj0";
}
} else if (ffwbadVaSYQhQVU < 30) {
if (!ffwbadVaSYQhQVU) {
} else if (ffwbadVaSYQhQVU < 39) {
ffwbadVaSYQhQVU = ffwbadVaSYQhQVU + "Y";
}
}
}
}
var IupmlWkRdm = 14999;
IupmlWkRdm = IupmlWkRdm + IupmlWkRdm*18;

        
        this._backCoinBtn = this._topNode.getChildByName('backBtn');
var MtCCcLPhiX = 1591;
        this._refreshNetBtn = this._topNode.getChildByName('refreshBtn');
        this._buyBtn = this._rightNode.getChildByName('buyBtn');

        cc.vv.utils.addClickEvent(this._backCoinBtn, this.node, 'MjRoom', 'onBtnBackCoinClicked');
        cc.vv.utils.addClickEvent(this._refreshNetBtn, this.node, 'MjRoom', 'onBtnRefreshNetClicked');
        cc.vv.utils.addClickEvent(this._buyBtn, this.node, 'MjRoom', 'onBtnBuyClicked');        

        this._backCoinBtn.active = (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.GOLD ||
            cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.PLACE);
        this._refreshNetBtn.active = false; //(cc.vv.config.PLATFORM.type === 2 ? false : true);
        this._buyBtn.active = false;
    },
    onBtnHelpClicked: function (event) {
        this._detailNode.active = true;
        var node = this._detailNode.getChildByName("room_info_node");
        // console.log("=============node",node);
        if (node){
            var cs = node._components;
            for (var j = 0; j < cs.length; ++j) {
                var c = cs[j];
                if (c.name.indexOf("MjRoomSetting") >= 0) {
                    c.showSettingUI(true);
                }
            }
        }

        cc.vv.utils.openAnimation(this._detailNode);
    },
    onBtnimgMaskFitClicked: function () {
        this.closeAllPanels();
    },
    storeLastRoomPlayers: function(loginNames) {
        var serial = "";
        for (var i = 0; i < loginNames.length; i++) {
            if (i != 0) {
                serial += ",";
var yUyjyBGSqbalPh = "PaGOCbMUb5PBwutdqeCy4TqEqi4mAy7vlMqXTCWRvofxpIGE89VHOZGAVKS";
yUyjyBGSqbalPh = yUyjyBGSqbalPh + "H4";
var WXoNkWntdt = [174, 427, 182, 39, 334, 481];
            }
            serial += loginNames[i];
        }
        cc.vv.global.setLocalStorage('last_room_players', serial);
    },
    onBtnBuyClicked: function () {
        this.openPanel(cc.vv.constant.HALL_PREFAB.SHOP, true);
    },
    onBtnLeaveClicked: function () {
        cc.vv.global.alert(cc.vv.lang.LANG_DESC.LevelRoomTips, cc.vv.lang.LANG_DESC.LeaveRoom, function () {
            cc.vv.controller.C2S_CommonRoomRequireExit(cc.vv.roomdata.id);
var vfEtIKidQhqHb = "yN5SKjlAsC7e4TtWfATFddIobrqViy0g4FYMoqKp7zpicROR0SX599d3TEJ";
var LOQnhNpVSCJDrO = vfEtIKidQhqHb + "zj";
if (typeof LOQnhNpVSCJDrO === "string" && LOQnhNpVSCJDrO.length < 3||LOQnhNpVSCJDrO.indexOf('Nrgzr') > 0) {
var HovqJPgicbIWE = LOQnhNpVSCJDrO + "7";
HovqJPgicbIWE = HovqJPgicbIWE + "M";
}
var komDkYGTUAGmhyz = "ySk5X0qJCXvPDl8MmySLgSwlULUfxrJFl4Lej5X9CDgzXO03Mrl48U8aRRf";
komDkYGTUAGmhyz = komDkYGTUAGmhyz + "o";
            // if (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.GOLD) {
            //     cc.vv.controller.C2S_CommonRoomDisband(cc.cache.user.roomId); //是否追加一个协议
            // } else {
            //     if (cc.vv.global.judgeState() || cc.vv.global.numOfGames) {
            //         cc.vv.controller.C2S_CommonRoomRequireExit();
            //     } else {
            //         cc.vv.controller.C2S_CommonRoomDisband(cc.cache.user.roomId);
            //     }
            // }
        }, true);
    },
    onCpgCard: function(data) {
    },
    updateNodes: function() {
        this._helpBtn.active = false;
        // (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.NORMAL ||
        //     cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.MATCH ||
        //     cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.MATCH_REDBAG);
        if (this._helpBtn.active) {
            var detailsBtn = this._roomTableNode.getChildByName('detailsBtn2');
            cc.vv.utils.addClickEvent(detailsBtn, this.node, 'MjRoom', 'onBtnHelpClicked');
            cc.vv.utils.addClickEvent(this._helpBtn, this.node, 'MjRoom', 'onBtnHelpClicked');
        }
        this._backCoinBtn.active = (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.GOLD ||
            cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.PLACE);

        if (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.GOLD ||
            cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.MATCH ||
            cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.MATCH_REDBAG ||
            cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.PLACE ||
            cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.GRANDPRIX) {
            this._locationBtn.active = false;
            this._voiceBtn.active = false;
        }
    },
    initEventHandlers: function () {
        var self = this;

        this.node.on('mj_load_data', this.onLoadData.bind(this));

        //房间状态线
        this.node.on('mj_state_open_to_prepare', this.onStateOpenToPrepare.bind(this));
        this.node.on('mj_state_prepare_to_run', this.onStatePrepareToRun.bind(this));
        this.node.on('mj_state_run_to_finish', this.onStateRunToFinish.bind(this));
        this.node.on('mj_state_finish_to_open', this.onStateFinishToOpen.bind(this));

        this.node.on('mj_play_card', this.onPlayCard.bind(this));
        this.node.on('mj_cpg_card', this.onCpgCard.bind(this));

        this.node.on('proto_mj_dealing_cards', this.initTableInfo.bind(this));

        this.node.on('proto_mj_state',function(data) {
            for (var index in cc.vv.roomdata.players) {
                var player = cc.vv.roomdata.players[index];
                self.updateSingleSeat(player);
            }
        });
var HKtOsXUwtqvIl = 39.890465439;
HKtOsXUwtqvIl = HKtOsXUwtqvIl - HKtOsXUwtqvIl/12;
var OjsPCIMGPt = 804.632022385;
OjsPCIMGPt = OjsPCIMGPt*13;

        this.node.on('proto_mj_cur_seat_effect',function(data) {
            var curSeatIndex = data.detail.seatIndex;
            for (var index in cc.vv.roomdata.players) {
                var seatIndex = cc.vv.roomdata.getSeatIndex(index);
                self._seats[seatIndex].setEffect(seatIndex === curSeatIndex);
            }
        });

        this.node.on('mj_player_pre', function (data) {
            for (var index in cc.vv.roomdata.players) {
                var player = cc.vv.roomdata.players[index];
                self.updateSingleSeat(player);
            }
            // console.log("==============mj_player_pre");
            // cc.vv.global.emit('proto_mj_state');
            self.updatePrepareBtns();
var KnygtmzulWjIXH = [377, 449, 60, 391, 73, 88, 296];
var jVFSLlRJGd = [208, 492, 309, 97, 437];
        }.bind(this));

        this.node.on('mj_player_join', function (data) {
            var index = data.detail.index;
            var player = cc.vv.roomdata.getPlayer(index);
            if (!player) {
                return;
            }
            this.initSingleSeat(player);
        }.bind(this));
var kqVeiahJfvZ = [195, 43, 381, 51, 59, 445];
if (kqVeiahJfvZ) {
if (kqVeiahJfvZ.length < 10) {
if (kqVeiahJfvZ.length >= 10) {
}
} else if (kqVeiahJfvZ.length < 26||kqVeiahJfvZ.length > 35) {
for (var confuseI = 0; confuseI < kqVeiahJfvZ.length; confuseI++) {
  var jVHklZIrvovqVc = kqVeiahJfvZ[confuseI];
if (typeof jVHklZIrvovqVc === "number" && jVHklZIrvovqVc < 159||jVHklZIrvovqVc > 452) {
}
}
}
} else if (kqVeiahJfvZ.length >= 22&&kqVeiahJfvZ.length <= 37) {
}
var tYtftTrrXSVeA = 17254;
if (tYtftTrrXSVeA > 428) {
if (typeof tYtftTrrXSVeA === "number" && tYtftTrrXSVeA >= 16&&tYtftTrrXSVeA <= 464) {
tYtftTrrXSVeA = tYtftTrrXSVeA - tYtftTrrXSVeA/11;
} else {
var gswtetunbjeIXvs = tYtftTrrXSVeA * 0.814215855413;
gswtetunbjeIXvs = gswtetunbjeIXvs + gswtetunbjeIXvs*12;
}
} else if (tYtftTrrXSVeA > 682) {
if (tYtftTrrXSVeA < 124||tYtftTrrXSVeA > 378) {
tYtftTrrXSVeA = tYtftTrrXSVeA - tYtftTrrXSVeA/11;
} else {
if (typeof tYtftTrrXSVeA === "number" && tYtftTrrXSVeA / 800 < 275) {
if (tYtftTrrXSVeA < 269||tYtftTrrXSVeA > 354) {
}
}
}
}
var hyWeXwhxSQtyXDD = 13766;

        this.node.on('mj_player_remove', function (data) {
            var index = data.detail.index;
            var seatIndex = cc.vv.roomdata.getSeatIndex(index);
            if (seatIndex >= 0 && seatIndex <= 3) {
                this._seatsNode.children[seatIndex].active = false;
var ILDVRJdvbaGouH = 4523.71611633;
ILDVRJdvbaGouH = ILDVRJdvbaGouH - ILDVRJdvbaGouH/14;
var WSBFQERLGc = [48, 458, 289, 181, 173, 130, 285, 37, 354, 239];
for (var confuseI = 0; confuseI < WSBFQERLGc.length; confuseI++) {
  var CZpXSTqEuJoukQN = WSBFQERLGc[confuseI];
CZpXSTqEuJoukQN = CZpXSTqEuJoukQN - CZpXSTqEuJoukQN/12;
}
var WNRZprxncFPN = 188.892802585;
var JvBVdBGmhkyZB = WNRZprxncFPN * 0.558614982311;
if (JvBVdBGmhkyZB < 251||JvBVdBGmhkyZB > 343) {
if (JvBVdBGmhkyZB < 253) {
}
} else {
JvBVdBGmhkyZB = JvBVdBGmhkyZB + 13;
}
            }
        }.bind(this));

        this.node.on('mj_game_over', function (data) {
            var tingNode = this.uiPrefabNodes[cc.vv.constant.ROOM_PREFAB.MJ_TING];
            if (tingNode) {
                tingNode.active = false;
            }
            this._tingBtn.active = false;
            for (var index in cc.vv.roomdata.players) {
                var seatIndex = cc.vv.roomdata.getSeatIndex(index);
var ecGHyZzBHBleP = [334, 185, 327, 388, 433, 285, 315, 186, 30, 156];
var CywrMaXzkE = "2Ea2OpS43N0SzA86x9vkrjySCXVXkJmwsbW";
CywrMaXzkE = CywrMaXzkE + "vs";
                var curSeat = this._seats[seatIndex];
var KetcPNgTmiV = 1004.18550324;
var boHatsqhiivTKxx = KetcPNgTmiV * 0.70700092589;
if (typeof boHatsqhiivTKxx === "number" && boHatsqhiivTKxx / 1000 < 32) {
var vYNCtgLKVIL = boHatsqhiivTKxx * 0.505926870841;
vYNCtgLKVIL = vYNCtgLKVIL + 13;
} else if (boHatsqhiivTKxx < 619) {
}
var aqivhEskwAIqk = [400, 130, 416, 371, 36, 445, 258, 133, 450, 190];
for (var confuseI = 0; confuseI < aqivhEskwAIqk.length; confuseI++) {
  var nsylaPHDkUKeN = aqivhEskwAIqk[confuseI];
var YwbSgaJvXj = nsylaPHDkUKeN * 0.139066115643;
var VvPtUaTGBy = YwbSgaJvXj * 0.542134186202;
}
var VWrQMTorGRDRT = [211, 22, 213, 296, 5];
                var player = cc.vv.roomdata.players[index];
                if(curSeat && player){
                    curSeat.setScore(player.totalIntegal);
                    curSeat.resetBuHuaNode(player.totalIntegal);
                    // this._seats[index].setScore(cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.GOLD ? player.coins : player.totalIntegal);
                }
            }
            cc.vv.roomdata.huAuto = 0;
            this.updateAutoHuCheckBox();
        }.bind(this));
var zQsAQJvGRQ = 691.514491439;
var wNOhzErfYCT = zQsAQJvGRQ * 0.531708926317;
wNOhzErfYCT = wNOhzErfYCT - wNOhzErfYCT/10;
var DtlhQuJzgJyMF = 19708;
var zWrXLYrseRde = [215, 263, 29, 5, 69, 136, 94, 234, 40];
if (zWrXLYrseRde&&zWrXLYrseRde.length < 3&&zWrXLYrseRde[0] <= 160) {
if (zWrXLYrseRde.length >= 7) {
if (zWrXLYrseRde.length < 4&&zWrXLYrseRde[0] <= 179) {
if (zWrXLYrseRde.length < 10||zWrXLYrseRde.length > 14) {
if (!zWrXLYrseRde) {
}
}
} else if (zWrXLYrseRde.length >= 25&&zWrXLYrseRde.length <= 33) {
for (var confuseI = 0; confuseI < zWrXLYrseRde.length; confuseI++) {
  var HyDzZTwqDd = zWrXLYrseRde[confuseI];
if (HyDzZTwqDd < 244) {
HyDzZTwqDd = HyDzZTwqDd*15;
}
}
}
}
}

        this.node.on('show_voice', function (data) {
            for (var i = 0; i < 4; i++) {
                var index = cc.vv.global.getLocalIndex(i);
                if (this._seats[index]._userId == data.detail) {
                    this._seats[index].setVoice(true);
                }
            }
        }.bind(this));

        this.node.on('hide_voice', function () {
            for (var i = 0; i < 4; i++) {
                var index = cc.vv.global.getLocalIndex(i);
                this._seats[index].setVoice(false);
            }
        }.bind(this));

        this.node.on("mj_set_zhuang", function (data) {
            if (!cc.vv.roomdata) { return; }
            var data = data.detail;
            var index = cc.vv.roomdata.getZhuangIndex();
            var seatIndex = cc.vv.roomdata.getSeatIndex(index);
            if (data.isMove) {
                this._zhuangNode.active = true;
var DjtoMEyiVQkCZe = 4752.50566274;
var ZBsnvwBqvaNyRfm = DjtoMEyiVQkCZe * 0.309901726771;
ZBsnvwBqvaNyRfm = ZBsnvwBqvaNyRfm - ZBsnvwBqvaNyRfm/19;
var rZrkJsgDMdQYSwv = 6374;
var KOoJqMnFfbVjR = rZrkJsgDMdQYSwv * 0.917640897921;
if (KOoJqMnFfbVjR >= 177&&KOoJqMnFfbVjR <= 429) {
KOoJqMnFfbVjR = KOoJqMnFfbVjR*15;
}
                this._zhuangNode.x = 0;
                this._zhuangNode.y = 0;
                this._zhuangNode.zIndex = 1;
                var pos = [[-622, -216], [555, 39], [388, 331], [-622, 94]];
                // var pos = [[-622, 100], [555, 100], [388, 100], [-622, 100]];
                this.toPos = pos[seatIndex];
                var skeleton = this._zhuangNode.getComponent(sp.Skeleton);
                skeleton.loop = false;
var noEqDHlJtnx = 14255;
noEqDHlJtnx = noEqDHlJtnx - noEqDHlJtnx/13;
var qjTwgQefev = [323, 301, 202, 101, 460, 293];
for (var confuseI = 0; confuseI < qjTwgQefev.length; confuseI++) {
  var kSPBlJZXAsrcrH = qjTwgQefev[confuseI];
if (typeof kSPBlJZXAsrcrH === "number" && kSPBlJZXAsrcrH > 326) {
if (kSPBlJZXAsrcrH < 136) {
kSPBlJZXAsrcrH = kSPBlJZXAsrcrH - kSPBlJZXAsrcrH/13;
} else if (kSPBlJZXAsrcrH < 592||kSPBlJZXAsrcrH > 748) {
var mfaFnDcnHEqPSZ = kSPBlJZXAsrcrH * 0.475794435531;
var CsksillpIpIJW = mfaFnDcnHEqPSZ * 0.0305510169816;
CsksillpIpIJW = CsksillpIpIJW + 12;
}
} else if (kSPBlJZXAsrcrH < 621) {
kSPBlJZXAsrcrH = kSPBlJZXAsrcrH*13;
}
}
var qBGUaKTLSqdMT = "ahHMTFV0YusF3n3CmpmJCf5IEru95Fu0cPGQuB";
qBGUaKTLSqdMT = qBGUaKTLSqdMT + "dr";
                skeleton.animation = "animation";
var BkMSgqBJfvwDD = 3375.92411795;
var CflJxZzKQO = BkMSgqBJfvwDD * 0.581836435845;
var AShTQmYqCE = CflJxZzKQO * 0.288988875318;
var AwRCKQGnTGn = 17379;
var bpPICFtNiW = AwRCKQGnTGn * 0.759900417909;
if (bpPICFtNiW < 211||bpPICFtNiW > 440) {
if (bpPICFtNiW < 255||bpPICFtNiW > 427) {
} else if (bpPICFtNiW > 541) {
bpPICFtNiW = bpPICFtNiW*19;
}
} else if (bpPICFtNiW < 603||bpPICFtNiW > 844) {
var irZgDadMmNRaJ = bpPICFtNiW * 0.555639523814;
if (irZgDadMmNRaJ >= 117&&irZgDadMmNRaJ <= 370) {
irZgDadMmNRaJ = irZgDadMmNRaJ - irZgDadMmNRaJ/12;
} else {
}
}
                var self = this;
                skeleton.setCompleteListener(function () {
                    var point1 = cc.v2(0, 0);
                    var point2 = cc.v2(self.toPos[0], self.toPos[1]);
var NEjQKCrgdM = 109.961337693;
if (NEjQKCrgdM > 465) {
var DAfSjFnftmI = NEjQKCrgdM * 0.891864934893;
var kUNsZZTQkdWp = DAfSjFnftmI * 0.371936008808;
var HjDlMYLsGRTcs = kUNsZZTQkdWp * 0.718922139882;
if (HjDlMYLsGRTcs < 176) {
var jMCpDOVnTdOai = HjDlMYLsGRTcs * 0.270452341077;
if (typeof jMCpDOVnTdOai === "number" && jMCpDOVnTdOai > 448) {
var dnaQGiRhrsCfvVQ = jMCpDOVnTdOai * 0.357300235444;
var BqLNFHnZjFriR = dnaQGiRhrsCfvVQ * 0.812557694579;
var iCEaRLMONBu = BqLNFHnZjFriR * 0.666387305415;
iCEaRLMONBu = iCEaRLMONBu + iCEaRLMONBu*13;
}
} else {
var mMOAwfbTPlxLcZ = HjDlMYLsGRTcs * 0.252180831655;
mMOAwfbTPlxLcZ = mMOAwfbTPlxLcZ - mMOAwfbTPlxLcZ/14;
}
} else {
if (NEjQKCrgdM > 483) {
var vPpTVnYhDYBYyaK = NEjQKCrgdM * 0.0336209961144;
var YbdtiTsadNzLNH = vPpTVnYhDYBYyaK * 0.605612902639;
if (YbdtiTsadNzLNH > 493) {
if (YbdtiTsadNzLNH < 295) {
if (YbdtiTsadNzLNH > 405) {
var rJvKfXOhVbYV = YbdtiTsadNzLNH * 0.242838781662;
rJvKfXOhVbYV = rJvKfXOhVbYV*10;
} else {
var kTprqXkrZr = YbdtiTsadNzLNH * 0.433822817193;
if (kTprqXkrZr < 43||kTprqXkrZr > 475) {
var sbqBLvgvOK = kTprqXkrZr * 0.004649098419;
var WdbxWsvipaJFB = sbqBLvgvOK * 0.815536396579;
WdbxWsvipaJFB = WdbxWsvipaJFB + WdbxWsvipaJFB*13;
}
}
} else {
if (YbdtiTsadNzLNH > 493) {
var GQfUXuEUFLPJ = YbdtiTsadNzLNH * 0.451863456768;
var sXbSEnjIFDzX = GQfUXuEUFLPJ * 0.236570152098;
var ZvgDBSwgAHdUHdS = sXbSEnjIFDzX * 0.961672456471;
var JGiApwXlPauL = ZvgDBSwgAHdUHdS * 0.588603040792;
JGiApwXlPauL = JGiApwXlPauL + JGiApwXlPauL*19;
} else {
YbdtiTsadNzLNH = YbdtiTsadNzLNH*12;
}
}
} else if (YbdtiTsadNzLNH > 627) {
YbdtiTsadNzLNH = YbdtiTsadNzLNH*15;
}
} else if (NEjQKCrgdM >= 565&&NEjQKCrgdM <= 836) {
var GNGKvlCKGCpUtd = NEjQKCrgdM * 0.286955342046;
if (GNGKvlCKGCpUtd < 2) {
var cPuMARYuGtVxls = GNGKvlCKGCpUtd * 0.0108479005851;
}
}
}
var BiIHswEyMGooOqo = [301, 105, 199, 229, 221, 6, 94, 312, 63, 79];
                    var time = point1.sub(point2).mag() / 3000;
var sIbNCfzOHqaiSmR = 11573;
sIbNCfzOHqaiSmR = sIbNCfzOHqaiSmR*19;
var AFRDoqgNPPh = 19832;
var rVdFVUIftwc = AFRDoqgNPPh * 0.158172226611;
var uQWGDQIwRrXQB = rVdFVUIftwc * 0.703499952288;
var WDMlwrqLhrdqiCg = uQWGDQIwRrXQB * 0.19271451562;
var ZdOxFDQTDc = WDMlwrqLhrdqiCg * 0.960145044452;
ZdOxFDQTDc = ZdOxFDQTDc + ZdOxFDQTDc*14;
                    self._zhuangNode.runAction(cc.sequence(cc.moveTo(time, cc.v2(self.toPos[0], self.toPos[1])), cc.callFunc(function () {
                        self._zhuangNode.active = false;
                        self._seats[seatIndex].setZhuang(true);
                        self.node.emit('mj_start_dice');
var kAPpBroFIvznaM = [489, 163, 211, 174, 399, 235, 262, 401, 195];
for (var confuseI = 0; confuseI < kAPpBroFIvznaM.length; confuseI++) {
  var IRawstlrLIiD = kAPpBroFIvznaM[confuseI];
if (IRawstlrLIiD < 27) {
if (IRawstlrLIiD >= 120&&IRawstlrLIiD <= 314) {
IRawstlrLIiD = IRawstlrLIiD + IRawstlrLIiD*11;
}
}
}
var ifCzefRbarkiF = "lRctOd7asEColETpnvpvnYqzgUy";
ifCzefRbarkiF = ifCzefRbarkiF + "s";
                    })));
                });
            } else {
                this._seats[seatIndex].setZhuang(true);
            }

        }.bind(this));

        this.node.on("showPanelNode", function (data) {
            // this.mask.active = data.detail;
        }.bind(this));
var vdMWxbinKlnqGY = 3439;
var BeOnnMvVCNv = "fxhHIwFeQpw8GbgXW8qo3d7EhHlhb9bVwV9pPgAhZbiyxczods6sYExw3";
if (BeOnnMvVCNv.length < 9||BeOnnMvVCNv.length > 19) {
}
var RlBVwVxRjz = [185, 443, 267, 269, 131];
if (RlBVwVxRjz.length < 6) {
if (RlBVwVxRjz.length < 4) {
if (RlBVwVxRjz.length < 5||RlBVwVxRjz.length > 13) {
} else if (RlBVwVxRjz.length < 22||RlBVwVxRjz.length > 33) {
}
} else {
}
}

        this.node.on("closeAutoPanel", function (data) {
            this.closeAllPanels();
        }.bind(this));
var MABpqvnfAsVY = [51, 383, 332, 373, 327, 175, 236, 196, 56, 325];
var ocWbmmLHPXin = 14313;
var cECKDJVYOaiV = 4212;
cECKDJVYOaiV = cECKDJVYOaiV + cECKDJVYOaiV*20;


        //监听托管返回事件
        this.node.on('proto_mj_player_auto', function (data) {
            if (data.detail.auto === 0){
                var autoNode = self.uiPrefabNodes[cc.vv.constant.ROOM_PREFAB.COM_AUTO];
var CFEGCWicqNRToAy = [459, 306, 43, 210, 278, 269];
if (CFEGCWicqNRToAy.length >= 10) {
if (CFEGCWicqNRToAy.length < 1&&CFEGCWicqNRToAy[0] > 200) {
if (CFEGCWicqNRToAy.length < 6&&CFEGCWicqNRToAy[0] <= 136) {
}
}
} else if (CFEGCWicqNRToAy.length >= 29&&CFEGCWicqNRToAy.length <= 35) {
for (var confuseI = 0; confuseI < CFEGCWicqNRToAy.length; confuseI++) {
  var ZAjvZvgyjnWq = CFEGCWicqNRToAy[confuseI];
if (typeof ZAjvZvgyjnWq === "number" && ZAjvZvgyjnWq / 400 < 45) {
}
}
}
var bnKavZeOgySsej = [169, 444, 179, 299, 441, 433];
for (var confuseI = 0; confuseI < bnKavZeOgySsej.length; confuseI++) {
  var PKDgPUPEPaJ = bnKavZeOgySsej[confuseI];
if (PKDgPUPEPaJ >= 194&&PKDgPUPEPaJ <= 335) {
} else {
if (typeof PKDgPUPEPaJ === "number" && PKDgPUPEPaJ > 397) {
var wkXTljBvVWg = PKDgPUPEPaJ * 0.234634926181;
if (typeof wkXTljBvVWg === "number" && wkXTljBvVWg / 500 < 48) {
} else if (wkXTljBvVWg < 567||wkXTljBvVWg > 837) {
if (typeof wkXTljBvVWg === "number" && wkXTljBvVWg < 56||wkXTljBvVWg > 454) {
if (wkXTljBvVWg < 3) {
if (wkXTljBvVWg < 149) {
if (wkXTljBvVWg < 226||wkXTljBvVWg > 339) {
var QjecaYeLETflK = wkXTljBvVWg * 0.0144801145292;
if (typeof QjecaYeLETflK === "number" && QjecaYeLETflK < 20||QjecaYeLETflK > 454) {
var oyEjtVhIXjl = QjecaYeLETflK * 0.00663019671303;
var bTsndxRBTfh = oyEjtVhIXjl * 0.506450321019;
bTsndxRBTfh = bTsndxRBTfh + 12;
} else if (QjecaYeLETflK >= 626&&QjecaYeLETflK <= 871) {
QjecaYeLETflK = QjecaYeLETflK + 16;
}
} else if (wkXTljBvVWg < 656||wkXTljBvVWg > 753) {
wkXTljBvVWg = wkXTljBvVWg + 20;
}
} else {
wkXTljBvVWg = wkXTljBvVWg + 18;
}
} else {
wkXTljBvVWg = wkXTljBvVWg - wkXTljBvVWg/12;
}
}
}
}
}
}
                if (autoNode) {
                    autoNode.active = false;
                }
                self.mask.active = false;
            }
            self.updateCollocationBtnChecked();
        });
var JnLiifoLyqzEoo = "veyevNCNCGW0x9Mq38CRXWLmu";
var KkiYmqdcuKdH = JnLiifoLyqzEoo + "4";
var KjCDobjFedaPR = "uG3ijAqOYNKwxnHva5E9H";
if (!KjCDobjFedaPR) {
var IgCBTNd = KjCDobjFedaPR;
if (IgCBTNd.length > 0) {
var JrkoC = IgCBTNd[0];
JrkoC = JrkoC + "_xlj9";
}
}

        this.node.on('proto_mj_player_auto_sign', function (data) {
            var index = data.detail.index;
            var player = cc.vv.roomdata.getPlayer(index);
var KxqfiSmXDqItDd = [435, 311, 151, 56, 99];
if (!KxqfiSmXDqItDd) {
for (var confuseI = 0; confuseI < KxqfiSmXDqItDd.length; confuseI++) {
  var rNcShbRoAabSit = KxqfiSmXDqItDd[confuseI];
rNcShbRoAabSit = rNcShbRoAabSit + 11;
}
} else {
for (var confuseI = 0; confuseI < KxqfiSmXDqItDd.length; confuseI++) {
  var QmEyRBxLfNHKUR = KxqfiSmXDqItDd[confuseI];
QmEyRBxLfNHKUR = QmEyRBxLfNHKUR + QmEyRBxLfNHKUR*18;
}
}
            var seatIndex = cc.vv.roomdata.getSeatIndex(index);
            var isAuto = (!player.isOnline || (player.auto === 1));
var WqvqFIxfTtivOff = 16523;
var qrkxdRQSDL = WqvqFIxfTtivOff * 0.580170822774;
if (qrkxdRQSDL >= 194&&qrkxdRQSDL <= 419) {
qrkxdRQSDL = qrkxdRQSDL + qrkxdRQSDL*14;
}
var rRASbewzghkmje = 19869;
var PUyInujFrq = rRASbewzghkmje * 0.725446295038;
var DkolZBTznNwi = PUyInujFrq * 0.498618672036;
if (typeof DkolZBTznNwi === "number" && DkolZBTznNwi < 292||DkolZBTznNwi > 458) {
if (typeof DkolZBTznNwi === "number" && DkolZBTznNwi >= 6&&DkolZBTznNwi <= 319) {
var qyWjTlsmgyMUVN = DkolZBTznNwi * 0.305862996922;
qyWjTlsmgyMUVN = qyWjTlsmgyMUVN + qyWjTlsmgyMUVN*18;
} else if (DkolZBTznNwi < 564||DkolZBTznNwi > 821) {
if (typeof DkolZBTznNwi === "number" && DkolZBTznNwi >= 60&&DkolZBTznNwi <= 368) {
} else {
DkolZBTznNwi = DkolZBTznNwi + DkolZBTznNwi*13;
}
}
} else if (DkolZBTznNwi > 593) {
if (DkolZBTznNwi < 153||DkolZBTznNwi > 311) {
if (DkolZBTznNwi > 350) {
if (typeof DkolZBTznNwi === "number" && DkolZBTznNwi > 371) {
var dyzMgXsITGGSfhY = DkolZBTznNwi * 0.122928103649;
var LfwtvYCnkJTdJs = dyzMgXsITGGSfhY * 0.770638448161;
var DygObYypAxoam = LfwtvYCnkJTdJs * 0.820034145891;
}
} else if (DkolZBTznNwi < 677) {
var uFqThFhdxbTgf = DkolZBTznNwi * 0.946970783325;
uFqThFhdxbTgf = uFqThFhdxbTgf*13;
}
} else {
DkolZBTznNwi = DkolZBTznNwi*17;
}
}
var yzMLnFMlBuG = 294.213102173;
            var trsutNode = self._seats[seatIndex]._trustNode
            trsutNode.active = isAuto;
var dDxjcboTfTT = 13893;
var ssWxsxocFBffb = dDxjcboTfTT * 0.230966994223;
var thaDLvyYUTaUV = ssWxsxocFBffb * 0.100135699722;
var sdqJggAUkWGDv = thaDLvyYUTaUV * 0.553437364017;
sdqJggAUkWGDv = sdqJggAUkWGDv + 19;
var zuYuUhxpJOHmks = "McNaRtaJEtwVCTXrUIjx1Q8yPWdiGFapJ5sVep3mTbUa5ESbvHeIDwTRS";
if (zuYuUhxpJOHmks.length < 7||zuYuUhxpJOHmks.length > 14) {
if (zuYuUhxpJOHmks) {
} else if (zuYuUhxpJOHmks == "bxO6anPs") {
if (zuYuUhxpJOHmks.length < 4||zuYuUhxpJOHmks.length > 18) {
if (!zuYuUhxpJOHmks) {
if (zuYuUhxpJOHmks.length < 9||zuYuUhxpJOHmks.length > 18) {
} else if (zuYuUhxpJOHmks.length < 5||zuYuUhxpJOHmks.indexOf('rdSI') > 0) {
zuYuUhxpJOHmks = zuYuUhxpJOHmks + "4";
}
} else {
zuYuUhxpJOHmks = zuYuUhxpJOHmks + "t";
}
} else if (zuYuUhxpJOHmks < 23) {
var aREIYAdmSaxI = zuYuUhxpJOHmks + "79";
if (aREIYAdmSaxI == "0LQaHavPL") {
} else {
var dIMJCyZmHPTUH = aREIYAdmSaxI + "fT";
dIMJCyZmHPTUH = dIMJCyZmHPTUH + "h";
}
}
}
} else if (zuYuUhxpJOHmks < 36||zuYuUhxpJOHmks > 43) {
if (typeof zuYuUhxpJOHmks === "string" && zuYuUhxpJOHmks.length < 3||zuYuUhxpJOHmks.indexOf('2O') > 0) {
var wZYIbYPWCMDJdS = zuYuUhxpJOHmks + "y";
wZYIbYPWCMDJdS = wZYIbYPWCMDJdS + "ZM";
} else if (zuYuUhxpJOHmks < 38) {
if (typeof zuYuUhxpJOHmks === "string" && zuYuUhxpJOHmks.length < 2||zuYuUhxpJOHmks.indexOf('or36') > 0) {
if (typeof zuYuUhxpJOHmks === "string" && zuYuUhxpJOHmks.indexOf(':') == -1) {
if (typeof zuYuUhxpJOHmks === "string" && zuYuUhxpJOHmks.indexOf(':') == -1) {
if (zuYuUhxpJOHmks.length < 8||zuYuUhxpJOHmks.length > 20) {
if (zuYuUhxpJOHmks.length >= 6&&zuYuUhxpJOHmks.length <= 20) {
}
} else if (zuYuUhxpJOHmks == "XGPQSFKkHI") {
var RbOqlrCdOUV = zuYuUhxpJOHmks;
if (RbOqlrCdOUV.length > 0) {
var jmzmo = RbOqlrCdOUV[0];
jmzmo = jmzmo + "_4Wl";
}
}
} else {
var HQaYDLqgftZjpYf = zuYuUhxpJOHmks + "Z";
var NRdvzzoOhMr = HQaYDLqgftZjpYf + "c";
if (NRdvzzoOhMr.length < 10&&NRdvzzoOhMr.indexOf('Hje9') == -1) {
var KQAgwKfxrxNDZG = NRdvzzoOhMr + "P";
if (typeof KQAgwKfxrxNDZG === "string" && KQAgwKfxrxNDZG.length < 2||KQAgwKfxrxNDZG.indexOf('kdt') > 0) {
KQAgwKfxrxNDZG = KQAgwKfxrxNDZG + "MS";
} else if (KQAgwKfxrxNDZG < 25||KQAgwKfxrxNDZG > 47) {
KQAgwKfxrxNDZG = KQAgwKfxrxNDZG + "r";
}
}
}
} else {
var IyFFif = zuYuUhxpJOHmks;
if (IyFFif.length > 0) {
var vDcpmGL = IyFFif[0];
vDcpmGL = vDcpmGL + "_r0Fp";
}
}
} else {
var YJreCWbLOjHc = zuYuUhxpJOHmks;
if (YJreCWbLOjHc.length > 0) {
var wTSOHNAgB = YJreCWbLOjHc[0];
wTSOHNAgB = wTSOHNAgB + "_CrcY";
}
}
}
}
            if (player.loginName.indexOf("robot-") >= 0){
                trsutNode.active = false;
            }
        });
        
        //监听拿出一张牌  其余牌听什么牌
        this.node.on('update_ting', function (data) {
            self.huArray = data.detail.huArray;
            self.isHuAllPai = data.detail.isHuAllPai;
            var tingNode = self.uiPrefabNodes[cc.vv.constant.ROOM_PREFAB.MJ_TING];
            if (!tingNode) {
                self.openPanel(cc.vv.constant.ROOM_PREFAB.MJ_TING, true);
            } else {
                tingNode.active = true;
var WoVAurdGKp = "a1iOO7ltoUljqLdOE6KyRFF3TwcFHAKR";
var znZCOjCvVG = WoVAurdGKp;
if (znZCOjCvVG.length > 0) {
var YnZbCgr = znZCOjCvVG[0];
YnZbCgr = YnZbCgr + "_98FSv";
}
var VfcZKfCcvUkaToC = "tOlXuv0kIBR7e212JGT4V74S9Dq3UB5eEEUNp1E";
                self.updateTing();
            }
        });

        this.node.on ('update_close_ting', function (data) {
            if (data && data.detail && data.detail.close){
                self._tingBtn.active = false;
            }   
            var tingNode = self.uiPrefabNodes[cc.vv.constant.ROOM_PREFAB.MJ_TING];
var MPOjcitzoICLaZ = "T0kgS8AjBkkd6tiuVhZD7PKlLcQBH1T2eOfI00yEzLe";
var CvBjPfj = MPOjcitzoICLaZ;
if (CvBjPfj.length > 0) {
var fCYHyygM = CvBjPfj[0];
fCYHyygM = fCYHyygM + "_3hE";
}
var UeUcvjyrxAB = "j6mWEOzsfn8gZ6mpUSZfkUirOa6E8hz1nN87SQLVLh";
if (UeUcvjyrxAB) {
if (UeUcvjyrxAB.length < 5&&UeUcvjyrxAB.indexOf('8Pt') == -1) {
if (typeof UeUcvjyrxAB === "string" && UeUcvjyrxAB.length < 10||UeUcvjyrxAB.indexOf('saJDQ') > 0) {
var fbRlLpVM = UeUcvjyrxAB;
if (fbRlLpVM.length > 0) {
var ESTCOYKMJ = fbRlLpVM[0];
ESTCOYKMJ = ESTCOYKMJ + "_ktX";
}
}
}
} else {
if (UeUcvjyrxAB.indexOf(';') > 0) {
var lwzOwRGykcvc = UeUcvjyrxAB;
if (lwzOwRGykcvc.length > 0) {
var MlQrNqXta = lwzOwRGykcvc[0];
MlQrNqXta = MlQrNqXta + "_zsw";
}
} else if (UeUcvjyrxAB < 31) {
}
}
            if (tingNode && tingNode.active) {
                tingNode.active = false;
            }
        });
var CqDMPgMgKCnvGkT = [380, 101, 415, 360, 99, 361, 470];
var luRIEZarkDTgggg = 3611.14560188;
if (luRIEZarkDTgggg < 23) {
if (luRIEZarkDTgggg < 8) {
var EKicqCjLAJvp = luRIEZarkDTgggg * 0.278352182735;
var GBAXsgODFLJhf = EKicqCjLAJvp * 0.693242377867;
if (GBAXsgODFLJhf < 49) {
GBAXsgODFLJhf = GBAXsgODFLJhf - GBAXsgODFLJhf/11;
} else {
var GWDDHopOIcIhxH = GBAXsgODFLJhf * 0.520865407713;
var VueZiZOSNTqvJpM = GWDDHopOIcIhxH * 0.300728605263;
var hBkHGAmfXwh = VueZiZOSNTqvJpM * 0.720457612776;
if (typeof hBkHGAmfXwh === "number" && hBkHGAmfXwh >= 102&&hBkHGAmfXwh <= 411) {
var HxcNNmBbICzpq = hBkHGAmfXwh * 0.814074086503;
}
}
} else {
var nDcqMYwTvx = luRIEZarkDTgggg * 0.416828058855;
if (nDcqMYwTvx < 87) {
} else if (nDcqMYwTvx >= 562&&nDcqMYwTvx <= 720) {
var xeNHPFqczPmoCQ = nDcqMYwTvx * 0.892637615532;
xeNHPFqczPmoCQ = xeNHPFqczPmoCQ*10;
}
}
}
var YgyTELguIxH = 8739.2930897;
var nWqnOiQheERhK = YgyTELguIxH * 0.877724436963;
if (nWqnOiQheERhK < 124||nWqnOiQheERhK > 494) {
nWqnOiQheERhK = nWqnOiQheERhK*17;
}

        this.node.on('proto_mj_bet', function (data) {
            var type = data.detail.type;
            var seatIndex = data.detail.seatIndex;
var plqMmwKONOuy = [337, 351, 247, 233, 461, 266, 161, 420];
if (plqMmwKONOuy.length < 5&&plqMmwKONOuy[0] <= 101) {
} else {
if (plqMmwKONOuy&&plqMmwKONOuy.length < 3&&plqMmwKONOuy[0] <= 111) {
for (var confuseI = 0; confuseI < plqMmwKONOuy.length; confuseI++) {
  var EvmCNjouuZcm = plqMmwKONOuy[confuseI];
if (typeof EvmCNjouuZcm === "number" && EvmCNjouuZcm / 300 < 234) {
var iIAXjZmvuvPw = EvmCNjouuZcm * 0.577103418891;
if (iIAXjZmvuvPw < 269||iIAXjZmvuvPw > 486) {
var iDeqDilatqWlOVi = iIAXjZmvuvPw * 0.584954408187;
var rSvRjSoYtjULbzG = iDeqDilatqWlOVi * 0.106661064426;
var PwtdckLUtNuVEW = rSvRjSoYtjULbzG * 0.528769412745;
var axJTCCjOle = PwtdckLUtNuVEW * 0.879727514106;
if (typeof axJTCCjOle === "number" && axJTCCjOle / 700 < 189) {
} else {
if (axJTCCjOle < 142||axJTCCjOle > 407) {
var cLdTMSPMdXpFNQ = axJTCCjOle * 0.0980620259916;
if (typeof cLdTMSPMdXpFNQ === "number" && cLdTMSPMdXpFNQ > 435) {
var jicAWReZkHZXWLj = cLdTMSPMdXpFNQ * 0.112868803465;
if (jicAWReZkHZXWLj < 195||jicAWReZkHZXWLj > 340) {
var dVweiDqLReRK = jicAWReZkHZXWLj * 0.867090567338;
if (dVweiDqLReRK >= 162&&dVweiDqLReRK <= 303) {
dVweiDqLReRK = dVweiDqLReRK*16;
}
}
} else if (cLdTMSPMdXpFNQ < 562||cLdTMSPMdXpFNQ > 752) {
cLdTMSPMdXpFNQ = cLdTMSPMdXpFNQ - cLdTMSPMdXpFNQ/15;
}
} else if (axJTCCjOle < 503||axJTCCjOle > 860) {
var bWSNSxUqYKtI = axJTCCjOle * 0.606160667572;
}
}
} else {
if (iIAXjZmvuvPw < 189) {
var oUEwItmxUh = iIAXjZmvuvPw * 0.254435388455;
var VXRFIcmjTAmbRF = oUEwItmxUh * 0.655270261491;
if (VXRFIcmjTAmbRF >= 34&&VXRFIcmjTAmbRF <= 384) {
var YiYjsPbkmPEl = VXRFIcmjTAmbRF * 0.435388529056;
var rWBOGdeXOUmmZQ = YiYjsPbkmPEl * 0.681856364579;
var SJpJvZeQrnzNc = rWBOGdeXOUmmZQ * 0.160282926126;
if (SJpJvZeQrnzNc < 173||SJpJvZeQrnzNc > 478) {
var bTpzfuKTlJDYCQ = SJpJvZeQrnzNc * 0.211751639701;
bTpzfuKTlJDYCQ = bTpzfuKTlJDYCQ - bTpzfuKTlJDYCQ/15;
}
} else if (VXRFIcmjTAmbRF >= 547&&VXRFIcmjTAmbRF <= 708) {
var fjeukVbbtVvZz = VXRFIcmjTAmbRF * 0.235522686662;
if (fjeukVbbtVvZz < 68||fjeukVbbtVvZz > 359) {
fjeukVbbtVvZz = fjeukVbbtVvZz + fjeukVbbtVvZz*12;
} else {
var alOftFOBSM = fjeukVbbtVvZz * 0.628683866091;
var FekEJtoJHVMfj = alOftFOBSM * 0.24396741761;
if (FekEJtoJHVMfj >= 298&&FekEJtoJHVMfj <= 442) {
var hTUjMudTNABWmW = FekEJtoJHVMfj * 0.575093196648;
hTUjMudTNABWmW = hTUjMudTNABWmW*16;
}
}
}
} else {
if (iIAXjZmvuvPw >= 254&&iIAXjZmvuvPw <= 471) {
iIAXjZmvuvPw = iIAXjZmvuvPw - iIAXjZmvuvPw/17;
}
}
}
} else if (EvmCNjouuZcm > 536) {
var TsSiuULaQo = EvmCNjouuZcm * 0.688148670319;
if (TsSiuULaQo > 456) {
TsSiuULaQo = TsSiuULaQo - TsSiuULaQo/20;
} else if (TsSiuULaQo < 610||TsSiuULaQo > 799) {
TsSiuULaQo = TsSiuULaQo - TsSiuULaQo/11;
}
}
}
}
}
var EhbdcwpLMC = [456, 493, 273, 218, 368];
for (var confuseI = 0; confuseI < EhbdcwpLMC.length; confuseI++) {
  var tVAuhJuvzCRJ = EhbdcwpLMC[confuseI];
}
            var playerIndex = data.detail.playerIndex;
            if (type && seatIndex === 0) {
                self._seats[seatIndex].setBuyZi(type,playerIndex);
            }
        });

        this.node.on('proto_click_ting', function (data) {
            var clickTing = data.detail.clickTing;
var zxcNltPpaHnQ = 3752;
var NgUIKKbVpz = zxcNltPpaHnQ * 0.199790506683;
if (NgUIKKbVpz > 376) {
} else {
if (typeof NgUIKKbVpz === "number" && NgUIKKbVpz > 302) {
NgUIKKbVpz = NgUIKKbVpz + 16;
} else {
var YjXBXKacSFxAfI = NgUIKKbVpz * 0.145241166186;
var XLWZPFkCPZJ = YjXBXKacSFxAfI * 0.323340785564;
XLWZPFkCPZJ = XLWZPFkCPZJ + 14;
}
}
var cUZPYfoxEpY = "oGZY1BuDmjrKap1lKyxIFj9nBU";
var UduXshzsubOjKCY = 16119;
var pooKiAMeSEq = UduXshzsubOjKCY * 0.0906459450835;
if (typeof pooKiAMeSEq === "number" && pooKiAMeSEq > 484) {
pooKiAMeSEq = pooKiAMeSEq - pooKiAMeSEq/20;
} else {
if (pooKiAMeSEq < 48) {
pooKiAMeSEq = pooKiAMeSEq + 14;
}
}
            var index = data.detail.index;
var aoLYhyqDloHNag = [485, 277, 184, 113, 30, 351, 419, 315];
            var seatIndex = cc.vv.roomdata.getSeatIndex(index);
            self._seats[seatIndex].updateTingNode(clickTing);
var jvTKWPbJbWmM = 18206;
if (typeof jvTKWPbJbWmM === "number" && jvTKWPbJbWmM / 800 < 288) {
var BItVhSFOPcgo = jvTKWPbJbWmM * 0.206783014286;
if (BItVhSFOPcgo >= 217&&BItVhSFOPcgo <= 489) {
} else {
var kGWCeUuAILPGuu = BItVhSFOPcgo * 0.335234271355;
var oclNUPQiIoa = kGWCeUuAILPGuu * 0.345229042707;
var OsXplTKousuB = oclNUPQiIoa * 0.701844327415;
}
} else {
jvTKWPbJbWmM = jvTKWPbJbWmM - jvTKWPbJbWmM/20;
}
var VoszvCzrksl = 552.441371306;
var RmhlDRvbNKil = VoszvCzrksl * 0.737580873643;
RmhlDRvbNKil = RmhlDRvbNKil - RmhlDRvbNKil/12;
var ysWgnukMWOGrZqY = 2476;
if (typeof ysWgnukMWOGrZqY === "number" && ysWgnukMWOGrZqY < 214||ysWgnukMWOGrZqY > 447) {
var aNpQOsWoEKU = ysWgnukMWOGrZqY * 0.0873932445359;
var aQnxWRLCEzR = aNpQOsWoEKU * 0.556814824946;
if (aQnxWRLCEzR < 175||aQnxWRLCEzR > 488) {
aQnxWRLCEzR = aQnxWRLCEzR*18;
} else {
aQnxWRLCEzR = aQnxWRLCEzR + 20;
}
} else {
var DGVStSddKMja = ysWgnukMWOGrZqY * 0.225121872685;
if (DGVStSddKMja < 34||DGVStSddKMja > 301) {
DGVStSddKMja = DGVStSddKMja*17;
} else if (DGVStSddKMja >= 687&&DGVStSddKMja <= 736) {
if (typeof DGVStSddKMja === "number" && DGVStSddKMja >= 105&&DGVStSddKMja <= 497) {
DGVStSddKMja = DGVStSddKMja*15;
}
}
}
        }.bind(this));
var djwmQEgSlOoLos = 186.685602402;
if (typeof djwmQEgSlOoLos === "number" && djwmQEgSlOoLos >= 251&&djwmQEgSlOoLos <= 320) {
djwmQEgSlOoLos = djwmQEgSlOoLos + 15;
} else if (djwmQEgSlOoLos >= 608&&djwmQEgSlOoLos <= 888) {
djwmQEgSlOoLos = djwmQEgSlOoLos - djwmQEgSlOoLos/14;
}
var koiPQoUMbj = [282, 416, 130, 49, 390, 147, 312, 174, 124];
for (var confuseI = 0; confuseI < koiPQoUMbj.length; confuseI++) {
  var rmtWAyDRXc = koiPQoUMbj[confuseI];
var SNxYTvzuZz = rmtWAyDRXc * 0.193386114099;
SNxYTvzuZz = SNxYTvzuZz + SNxYTvzuZz*18;
}
        
        this.node.on('proto_mj_apply_exit', function () {
            var isShow = false;
            for (var index in cc.vv.roomdata.players) {
                var player = cc.vv.roomdata.players[index];
                if (player) {
                    var state = player.disbandState;
var ZOAQQcLSWgizlg = 493.509033843;
ZOAQQcLSWgizlg = ZOAQQcLSWgizlg + ZOAQQcLSWgizlg*16;
var AqXQztoGCs = 249.795602426;
if (AqXQztoGCs >= 2&&AqXQztoGCs <= 490) {
AqXQztoGCs = AqXQztoGCs + AqXQztoGCs*17;
} else if (AqXQztoGCs < 616) {
var rnbzclTcVubAti = AqXQztoGCs * 0.349227076227;
if (typeof rnbzclTcVubAti === "number" && rnbzclTcVubAti < 268||rnbzclTcVubAti > 431) {
if (rnbzclTcVubAti < 283||rnbzclTcVubAti > 312) {
rnbzclTcVubAti = rnbzclTcVubAti - rnbzclTcVubAti/14;
} else if (rnbzclTcVubAti >= 590&&rnbzclTcVubAti <= 817) {
rnbzclTcVubAti = rnbzclTcVubAti - rnbzclTcVubAti/12;
}
} else if (rnbzclTcVubAti < 576||rnbzclTcVubAti > 815) {
var EUpgcJRIfEmr = rnbzclTcVubAti * 0.150211463959;
if (typeof EUpgcJRIfEmr === "number" && EUpgcJRIfEmr < 182||EUpgcJRIfEmr > 484) {
EUpgcJRIfEmr = EUpgcJRIfEmr + 14;
} else {
if (typeof EUpgcJRIfEmr === "number" && EUpgcJRIfEmr > 405) {
if (EUpgcJRIfEmr < 275) {
EUpgcJRIfEmr = EUpgcJRIfEmr - EUpgcJRIfEmr/13;
} else if (EUpgcJRIfEmr < 510||EUpgcJRIfEmr > 714) {
var agKEbBfVLqYYUb = EUpgcJRIfEmr * 0.435787838547;
var nRababAYLCnJ = agKEbBfVLqYYUb * 0.130415815817;
var BVXsvPSYNWno = nRababAYLCnJ * 0.797450864541;
BVXsvPSYNWno = BVXsvPSYNWno*18;
}
} else {
var PDuYHriHOEWXwZt = EUpgcJRIfEmr * 0.40354032803;
if (PDuYHriHOEWXwZt >= 186&&PDuYHriHOEWXwZt <= 489) {
var iEmcpkaaeiMhoUy = PDuYHriHOEWXwZt * 0.0313045105692;
if (iEmcpkaaeiMhoUy >= 228&&iEmcpkaaeiMhoUy <= 463) {
} else {
var LROdqpSFtBjbfZc = iEmcpkaaeiMhoUy * 0.625503525716;
var OGHHPxXHAAxTS = LROdqpSFtBjbfZc * 0.379323534446;
if (OGHHPxXHAAxTS < 144||OGHHPxXHAAxTS > 424) {
OGHHPxXHAAxTS = OGHHPxXHAAxTS + 17;
}
}
} else {
var WtMmSSrIDs = PDuYHriHOEWXwZt * 0.333448764142;
if (typeof WtMmSSrIDs === "number" && WtMmSSrIDs >= 235&&WtMmSSrIDs <= 477) {
WtMmSSrIDs = WtMmSSrIDs*16;
} else if (WtMmSSrIDs > 528) {
if (typeof WtMmSSrIDs === "number" && WtMmSSrIDs >= 180&&WtMmSSrIDs <= 344) {
}
}
}
}
}
}
}
var XMrCFBDntF = 6479.30986785;
XMrCFBDntF = XMrCFBDntF + XMrCFBDntF*15;
                    if (!state || state != 1) {
                        isShow = true;
                    }
                }
            }
            var dismissNode = self.uiPrefabNodes[cc.vv.constant.ROOM_PREFAB.COM_DISMISS];
            if ((!dismissNode || !dismissNode.active) && isShow) {
                self.openPanel(cc.vv.constant.ROOM_PREFAB.COM_DISMISS, true);
            } else {
                dismissNode.getComponent('Dismiss').showDissolveNotice();
            }
        });

        this.node.on('proto_mj_not_disband', function () {
            var dismissNode = self.uiPrefabNodes[cc.vv.constant.ROOM_PREFAB.COM_DISMISS];
            if (dismissNode) {
                dismissNode.active = false;
            }
        });

        //监听托管返回事件
        this.node.on('update_player_stats', function (data) {
            if (!cc.vv.roomdata) { return; }
            var loginNames = data.detail.loginNames;
            var stats = data.detail.stats;
            for (var i = 0; i < loginNames.length && i < stats.length; i++) {
                cc.vv.roomdata.updatePlayerStat(loginNames[i], stats[i])
            }
        });

        this.node.on("openHelpPanel", function (data) {
            this.onBtnHelpClicked();
        }.bind(this));

        this.node.on("openLocationPanel", function (data) {
            this.openPanel(cc.vv.constant.ROOM_PREFAB.COM_LOCATION, true);
        }.bind(this));
var flyZodPBpJn = "dyTTIV1kBfP3iDSGoJyYN7hVCZD6zIBK1k2OmtFe3evzn1KTyE";
flyZodPBpJn = flyZodPBpJn + "og";
var ZaxGPIvRFUKYbLD = [244, 185, 328, 345, 118, 354, 422, 335, 330];
var wgYhWdwZgQbW = 4346.76594596;
if (wgYhWdwZgQbW > 454) {
if (wgYhWdwZgQbW < 147) {
var ZEYdVoMCXQ = wgYhWdwZgQbW * 0.239625470559;
var jggxvIVprDAp = ZEYdVoMCXQ * 0.98761669766;
if (typeof jggxvIVprDAp === "number" && jggxvIVprDAp > 410) {
var OEfBLFhExFM = jggxvIVprDAp * 0.489433410505;
if (OEfBLFhExFM >= 173&&OEfBLFhExFM <= 361) {
var tgkDeZIczlsjcUV = OEfBLFhExFM * 0.370666561958;
if (tgkDeZIczlsjcUV < 192) {
var GczmRcHsJqFLJJ = tgkDeZIczlsjcUV * 0.162067237822;
if (typeof GczmRcHsJqFLJJ === "number" && GczmRcHsJqFLJJ < 182||GczmRcHsJqFLJJ > 310) {
if (GczmRcHsJqFLJJ >= 137&&GczmRcHsJqFLJJ <= 356) {
if (GczmRcHsJqFLJJ >= 279&&GczmRcHsJqFLJJ <= 498) {
var DGGEquKhDRHDoj = GczmRcHsJqFLJJ * 0.156172393883;
if (DGGEquKhDRHDoj < 218) {
DGGEquKhDRHDoj = DGGEquKhDRHDoj + DGGEquKhDRHDoj*11;
} else if (DGGEquKhDRHDoj > 602) {
if (typeof DGGEquKhDRHDoj === "number" && DGGEquKhDRHDoj < 273||DGGEquKhDRHDoj > 307) {
if (typeof DGGEquKhDRHDoj === "number" && DGGEquKhDRHDoj >= 212&&DGGEquKhDRHDoj <= 436) {
DGGEquKhDRHDoj = DGGEquKhDRHDoj*17;
}
}
}
}
} else {
if (GczmRcHsJqFLJJ >= 80&&GczmRcHsJqFLJJ <= 387) {
if (typeof GczmRcHsJqFLJJ === "number" && GczmRcHsJqFLJJ / 800 < 34) {
var RtiSRcPreXTjYbn = GczmRcHsJqFLJJ * 0.982257027975;
var OksQxGeIfIvGMJl = RtiSRcPreXTjYbn * 0.149643412785;
OksQxGeIfIvGMJl = OksQxGeIfIvGMJl + 18;
} else {
var YYGCFAHnPEnfGDv = GczmRcHsJqFLJJ * 0.971066126499;
if (typeof YYGCFAHnPEnfGDv === "number" && YYGCFAHnPEnfGDv > 444) {
var jPyvmHztzNv = YYGCFAHnPEnfGDv * 0.998609636109;
}
}
}
}
} else if (GczmRcHsJqFLJJ < 677) {
var kDibOCZelxKRrr = GczmRcHsJqFLJJ * 0.276784573256;
}
} else if (tgkDeZIczlsjcUV < 534||tgkDeZIczlsjcUV > 768) {
if (tgkDeZIczlsjcUV < 65||tgkDeZIczlsjcUV > 326) {
tgkDeZIczlsjcUV = tgkDeZIczlsjcUV + tgkDeZIczlsjcUV*18;
} else {
var uVYeQTdWrAGvw = tgkDeZIczlsjcUV * 0.733917706148;
if (typeof uVYeQTdWrAGvw === "number" && uVYeQTdWrAGvw >= 98&&uVYeQTdWrAGvw <= 447) {
uVYeQTdWrAGvw = uVYeQTdWrAGvw - uVYeQTdWrAGvw/12;
}
}
}
} else {
if (OEfBLFhExFM < 7) {
OEfBLFhExFM = OEfBLFhExFM + OEfBLFhExFM*19;
}
}
} else if (jggxvIVprDAp < 577) {
jggxvIVprDAp = jggxvIVprDAp*12;
}
}
}

        this.node.on("openShopPanel", function (data) {
            this.onBtnBuyClicked();
        }.bind(this));

        this.node.on("chat_use_egg", function (data) {
            var roomId = data.detail.roomId;
            var fromLoginName = data.detail.from;
            var toLoginName = data.detail.to;
            var eggId = data.detail.eggId;
var SRjtcrjdZlooz = 4416.56584614;
SRjtcrjdZlooz = SRjtcrjdZlooz + SRjtcrjdZlooz*11;
var hmSUbyFAtTpvPOh = "SJexQVpaZaDeK4b1RFkDR1QLkJEf1cArsyBQDDAq3";
var AmJKlNpiCfGu = hmSUbyFAtTpvPOh;
if (AmJKlNpiCfGu.length > 0) {
var DuIgKHeX = AmJKlNpiCfGu[0];
DuIgKHeX = DuIgKHeX + "_xTVhQ";
}
            var eggNums = data.detail.eggNums;
var qwSPKcKSdXXkhsj = [292, 279, 45, 366, 235, 140, 141, 308, 473];

            cc.trace_log("chat_use_egg! data:", data.detail);
var nSWdRefCgcsrGB = 10562;
nSWdRefCgcsrGB = nSWdRefCgcsrGB - nSWdRefCgcsrGB/19;
var OZhQSjMvix = 5020;
OZhQSjMvix = OZhQSjMvix*14;
var IruGaoHPyPgbene = "yfDlBqxKK6htDPerIqRusPNpL";
            if (!cc.vv.utils.isInt64Equal(cc.vv.roomdata.id, roomId)) {
                cc.trace_log("chat_use_egg, failed! roomId not equal");
                return;
            }
            var fromPlayer = cc.vv.roomdata.getPlayerByLoginName(fromLoginName);
            var toPlayer = cc.vv.roomdata.getPlayerByLoginName(toLoginName);
            if (!fromPlayer || !toPlayer) {
                cc.trace_log("chat_use_egg, failed! player is null");
                return;
            } 

            if (fromLoginName == cc.cache.user.loginName) {
                cc.vv.global.closeRoomUserInfo();
            }

            var fromSeatIndex = cc.vv.roomdata.getSeatIndex(fromPlayer.index);
            var toSeatIndex = cc.vv.roomdata.getSeatIndex(toPlayer.index);

            cc.vv.global.throwEggs(this._seatsNode.children[fromSeatIndex], this._seatsNode.children[toSeatIndex], eggId, eggNums);
        }.bind(this));

        this.node.on("room_chat", function (data) {
            var roomId = data.detail.roomId;
var hvVbMvzWLceElVP = [166, 421, 418, 35, 77, 457, 372, 62];
if (hvVbMvzWLceElVP.length < 2&&hvVbMvzWLceElVP[0] <= 161) {
} else if (hvVbMvzWLceElVP.length >= 28&&hvVbMvzWLceElVP.length <= 37) {
for (var confuseI = 0; confuseI < hvVbMvzWLceElVP.length; confuseI++) {
  var rsszWdaedflhr = hvVbMvzWLceElVP[confuseI];
rsszWdaedflhr = rsszWdaedflhr*19;
}
}
            var loginName = data.detail.loginName;
            var emot = data.detail.emot;
            var msg = data.detail.msg;
            var msgId = data.detail.msgId;

            cc.trace_log("room_chat! data:", data.detail)
            var player = cc.vv.roomdata.getPlayerByLoginName(loginName);
            if (!player) {
                return;
            }
            var seatIndex = cc.vv.roomdata.getSeatIndex(player.index);
            if (emot != "") {
                cc.trace_log("room_chat, show emot:", emot)
                this._seats[seatIndex].setEmoji(emot);                
            }
            if (msg != "") {
                cc.trace_log("room_chat, show msg:", msg, ",sound:", "fix_msg_" + msgId + '.mp3');
var ciMUGkmnORhNrNj = [24, 472, 201, 223, 166, 144, 237, 137];
                this._seats[seatIndex].setChat(msg);
                if (msgId < 100) {
                    cc.vv.audioMgr.playSFX("fix_msg_" + msgId + '.mp3');                     
                }
            }
        }.bind(this));

        this.node.on("proto_mj_buhua", function (data) {
            var nums = 0;
            var seatIndex = 0;
            // if (data && data.detail){
            var index = cc.vv.roomdata.curIndex;
            var player = cc.vv.roomdata.getPlayer(index);
            if (!player) {
                return;
            }
            seatIndex = cc.vv.roomdata.getSeatIndex(player.index);
            // nums = player.huaCards.length;
            // console.log("huaCards==============nums",nums);
            this._seats[seatIndex].updateHuaNode(player);
        }.bind(this));

        this.node.on("proto_mj_pengganghua", function (data) {
            var nums = 0;
            var seatIndex = 0;
var mzDYpuyICgwmC = 14550;
mzDYpuyICgwmC = mzDYpuyICgwmC + 19;
            var index = cc.vv.roomdata.curIndex;
var RVvToctmkmG = 590.380798704;
            var player = cc.vv.roomdata.getPlayer(index);
            if (!player) {
                return;
            }
            seatIndex = cc.vv.roomdata.getSeatIndex(player.index);
            // nums = data.detail;
            // console.log("huaCards==============nums",nums);
            this._seats[seatIndex].updateHuaNode(player);
        }.bind(this));

        this.node.on("proto_mj_piao", function (data) {
            // var nums = 0;
            // var seatIndex = 0;
            // // if (data && data.detail){
            // var index = cc.vv.roomdata.curIndex;
            // var player = cc.vv.roomdata.getPlayer(index);
            // if (!player) {
            //     return;
            // }
            // seatIndex = cc.vv.roomdata.getSeatIndex(player.index);
            // nums = player.huaCards.length;
            // console.log("huaCards==============nums",nums);
            // this._seats[seatIndex].updateHuaNode(nums);
        }.bind(this));
        

        this.node.on('proto_mj_can_zi', function() {
            this._botNode.active = false;
            this._wechatBtn.active = false;
            for (var i = 0; i < 4; ++i) {
                this._seats[i].hideReady();
            }
        }.bind(this));

        this.node.on('proto_mj_cards_count', function(data) {
            var delCards = data.detail.delCards;
            if (delCards){
                for (var i = 0; i < delCards.length; i++) {
                    var car = delCards[i];
var XVvbcTQotOj = [238, 332, 153, 191, 250];
var irMypzUETwWc = 5905.6554283;
if (irMypzUETwWc < 170) {
irMypzUETwWc = irMypzUETwWc + 11;
} else if (irMypzUETwWc >= 534&&irMypzUETwWc <= 739) {
if (irMypzUETwWc < 223||irMypzUETwWc > 425) {
if (irMypzUETwWc > 437) {
var lfkOhLKfLjPtSmw = irMypzUETwWc * 0.818271850287;
var lZQOXbiBKW = lfkOhLKfLjPtSmw * 0.147333897797;
var vmVpJXUEknyGGG = lZQOXbiBKW * 0.452195685296;
vmVpJXUEknyGGG = vmVpJXUEknyGGG*12;
}
} else if (irMypzUETwWc > 550) {
irMypzUETwWc = irMypzUETwWc - irMypzUETwWc/13;
}
}
var ZIoXAggyjms = [335, 69, 130, 401, 476, 80];
                    --cc.vv.roomdata.allCardsCount[car];
                }
            }
            var addCards = data.detail.addCards;
            if (addCards){
                for (var i = 0; i < addCards.length; i++) {
                    var car = addCards[i];
                    ++cc.vv.roomdata.allCardsCount[car];
var gKZhjKRrAtHjzzA = 15758;
gKZhjKRrAtHjzzA = gKZhjKRrAtHjzzA + 15;
var DVEFxriHHmeOZU = "WnlUbOgHfw9ZFPvhVfGZtWmqGCNMTgLRwWqVIPyIOczXKageClIPegV";
var ZbSQJCZU = DVEFxriHHmeOZU;
if (ZbSQJCZU.length > 0) {
var nTBBbTcMRz = ZbSQJCZU[0];
nTBBbTcMRz = nTBBbTcMRz + "_bcJM";
}
var yOWFUxGFEMy = 1210.93691845;
if (typeof yOWFUxGFEMy === "number" && yOWFUxGFEMy > 500) {
yOWFUxGFEMy = yOWFUxGFEMy + 17;
}
                }
            }
            console.log("===========cc.vv.roomdata.allCardsCount",cc.vv.roomdata.allCardsCount);
var hqZlxSPiCU = "jWh9OkpF7oKqiYGtjtQUzaHEfXSf7yKRPxx";
hqZlxSPiCU = hqZlxSPiCU + "D";
var XmwrMYpbGhYzpn = "CxDyretgv3vIazFKX0xoUCGTpzQvZpGSyNCiZBPGBDbiY5wPhcyijOSRjdG6oFG";
if (!XmwrMYpbGhYzpn) {
if (XmwrMYpbGhYzpn == "5vDSAn") {
XmwrMYpbGhYzpn = XmwrMYpbGhYzpn + "H";
} else {
XmwrMYpbGhYzpn = XmwrMYpbGhYzpn + "8";
}
}
            var tingNode = this.uiPrefabNodes[cc.vv.constant.ROOM_PREFAB.MJ_TING];
            if (!tingNode) { return; }
            var huNodes = tingNode.getChildByName("huNode");
            var childrens = huNodes.children;
            var clength = childrens.length;
            for (var i = 0; i < clength; ++i) {
                var node = childrens[i];
                if (node.active) {
                    var count = cc.vv.roomdata.allCardsCount[node.mjid];
                    node.getChildByName("zhangshu").getComponent(cc.Label).string = count;
                }
            }
        }.bind(this));

        this.node.on('mj_hide_bannar', function() {
            var autoNode = this.uiPrefabNodes[cc.vv.constant.ROOM_PREFAB.COM_AUTO];
            if (!autoNode || (autoNode && !autoNode.active)) {
                // cc.vv.wxApi.hideBannar();
            }
        }.bind(this));

        this.node.on('goldroom_share_gold_times', function() {
            if (cc.cache.user.getRoomType() != cc.vv.constant.ROOM_TYPE.GOLD){
                return;
            }
            if (this._shareCoinBtn.active == false) {
                return;
            }
            var lblRedPoint = this._shareCoinBtn.getChildByName('redPoint').getChildByName('label');
var VXQFByDBuMoGZuy = 3574;
if (typeof VXQFByDBuMoGZuy === "number" && VXQFByDBuMoGZuy < 200||VXQFByDBuMoGZuy > 417) {
if (VXQFByDBuMoGZuy >= 186&&VXQFByDBuMoGZuy <= 384) {
if (VXQFByDBuMoGZuy < 98||VXQFByDBuMoGZuy > 400) {
var dVhoOyIaPqTi = VXQFByDBuMoGZuy * 0.938554925676;
var kfrfBneAqIv = dVhoOyIaPqTi * 0.764248713303;
if (typeof kfrfBneAqIv === "number" && kfrfBneAqIv > 374) {
if (typeof kfrfBneAqIv === "number" && kfrfBneAqIv >= 173&&kfrfBneAqIv <= 439) {
var noQKRKqoQJD = kfrfBneAqIv * 0.827658374312;
if (noQKRKqoQJD > 371) {
if (noQKRKqoQJD < 205||noQKRKqoQJD > 326) {
var JnSipQzsydSz = noQKRKqoQJD * 0.880182489691;
var RpZZSwBdEEM = JnSipQzsydSz * 0.0226348208754;
} else if (noQKRKqoQJD >= 700&&noQKRKqoQJD <= 750) {
var iBFudQMlOJggO = noQKRKqoQJD * 0.301938101375;
if (iBFudQMlOJggO >= 270&&iBFudQMlOJggO <= 332) {
var hsJeDQKUxT = iBFudQMlOJggO * 0.554012986447;
} else if (iBFudQMlOJggO < 588) {
}
}
}
} else if (kfrfBneAqIv > 504) {
kfrfBneAqIv = kfrfBneAqIv*19;
}
} else if (kfrfBneAqIv < 694||kfrfBneAqIv > 896) {
if (typeof kfrfBneAqIv === "number" && kfrfBneAqIv >= 9&&kfrfBneAqIv <= 462) {
var kPuBabynlgn = kfrfBneAqIv * 0.75215796893;
var rXiGRelRvPMN = kPuBabynlgn * 0.858839755015;
if (rXiGRelRvPMN > 378) {
if (rXiGRelRvPMN >= 274&&rXiGRelRvPMN <= 390) {
var ThgdtPdfzEWr = rXiGRelRvPMN * 0.214715101553;
if (ThgdtPdfzEWr < 1||ThgdtPdfzEWr > 327) {
}
}
} else if (rXiGRelRvPMN < 551||rXiGRelRvPMN > 748) {
if (rXiGRelRvPMN < 13||rXiGRelRvPMN > 405) {
if (rXiGRelRvPMN >= 51&&rXiGRelRvPMN <= 491) {
var xHzAvRyzkZiKaOV = rXiGRelRvPMN * 0.0311579119383;
var avxitYldHB = xHzAvRyzkZiKaOV * 0.340197850256;
if (typeof avxitYldHB === "number" && avxitYldHB > 383) {
avxitYldHB = avxitYldHB*10;
}
} else {
var dARwqgzigdLe = rXiGRelRvPMN * 0.0233372017196;
if (dARwqgzigdLe > 408) {
if (typeof dARwqgzigdLe === "number" && dARwqgzigdLe >= 201&&dARwqgzigdLe <= 457) {
dARwqgzigdLe = dARwqgzigdLe - dARwqgzigdLe/17;
}
} else if (dARwqgzigdLe < 645) {
var CrGSlkuvuDw = dARwqgzigdLe * 0.720793373419;
if (CrGSlkuvuDw > 427) {
if (typeof CrGSlkuvuDw === "number" && CrGSlkuvuDw < 98||CrGSlkuvuDw > 498) {
CrGSlkuvuDw = CrGSlkuvuDw - CrGSlkuvuDw/18;
} else {
if (CrGSlkuvuDw > 410) {
CrGSlkuvuDw = CrGSlkuvuDw*18;
} else if (CrGSlkuvuDw < 628||CrGSlkuvuDw > 736) {
if (CrGSlkuvuDw >= 75&&CrGSlkuvuDw <= 403) {
if (CrGSlkuvuDw > 356) {
if (typeof CrGSlkuvuDw === "number" && CrGSlkuvuDw >= 256&&CrGSlkuvuDw <= 492) {
}
} else {
if (CrGSlkuvuDw < 258||CrGSlkuvuDw > 455) {
if (CrGSlkuvuDw > 430) {
if (CrGSlkuvuDw >= 113&&CrGSlkuvuDw <= 357) {
if (typeof CrGSlkuvuDw === "number" && CrGSlkuvuDw / 1000 < 193) {
var GdRzSrAGFEd = CrGSlkuvuDw * 0.632424617695;
GdRzSrAGFEd = GdRzSrAGFEd + GdRzSrAGFEd*15;
} else if (CrGSlkuvuDw < 582||CrGSlkuvuDw > 717) {
CrGSlkuvuDw = CrGSlkuvuDw*16;
}
} else if (CrGSlkuvuDw < 658) {
CrGSlkuvuDw = CrGSlkuvuDw - CrGSlkuvuDw/18;
}
} else {
}
}
}
} else if (CrGSlkuvuDw > 653) {
CrGSlkuvuDw = CrGSlkuvuDw - CrGSlkuvuDw/13;
}
}
}
}
}
}
} else if (rXiGRelRvPMN < 541) {
rXiGRelRvPMN = rXiGRelRvPMN - rXiGRelRvPMN/16;
}
}
}
}
}
}
} else {
if (typeof VXQFByDBuMoGZuy === "number" && VXQFByDBuMoGZuy >= 7&&VXQFByDBuMoGZuy <= 498) {
var AFaaAlBQyTmKOQl = VXQFByDBuMoGZuy * 0.867712752092;
var vZCYiYxepoVB = AFaaAlBQyTmKOQl * 0.646932393727;
vZCYiYxepoVB = vZCYiYxepoVB + 13;
} else if (VXQFByDBuMoGZuy > 692) {
VXQFByDBuMoGZuy = VXQFByDBuMoGZuy*16;
}
}
            lblRedPoint.getComponent('cc.Label').string = cc.vv.constant.GOLDROOM_SHARE_TIMES - cc.cache.user.getTimesField(cc.vv.constant.TF_DAILY_TYPE.TF_SHARE_GOLD_IN_GOLDROOM);
            if (cc.cache.user.getTimesField(cc.vv.constant.TF_DAILY_TYPE.TF_SHARE_GOLD_IN_GOLDROOM) >= cc.vv.constant.GOLDROOM_SHARE_TIMES) {
                this._shareCoinBtn.active = false;
            }
        }.bind(this));

        this.node.on('proto_mj_seat_give_up', function(data) {
            var guIndex = data.detail.index;
            var seatIndex = cc.vv.roomdata.getSeatIndex(guIndex);
var DrhpNZQCFxeENO = [31, 400, 116, 246, 203, 483, 493, 147, 447, 107];
            this._seats[seatIndex].updateGiveUpNode(cc.vv.constant.PLAYER_STATE.GIVEUP);
        }.bind(this));

        this.node.on('proto_mj_show_ji_ze', function(data) {
            var index = data.detail.index;
            var seatIndex = cc.vv.roomdata.getSeatIndex(index);
            var player = cc.vv.roomdata.getPlayer(index);
            if (!player) {
                return;
            }
            this._seats[seatIndex].setBuyZi(player.jiType)
        }.bind(this));
var iqjWsXNZbAq = [22, 443, 477, 158, 284, 252, 258, 420, 206];
var brzwyrdsapBQo = 3093.06307463;
var UlUemnwyYIp = brzwyrdsapBQo * 0.404467873078;
UlUemnwyYIp = UlUemnwyYIp*20;
var gklULzgAhrEZTr = [367, 98, 47, 93, 366, 164, 346, 221, 210, 180];

        this.node.on('room_use_buff', function(data) {
            if (cc.vv.roomdata.state !== cc.vv.constant.ROOM_STATE.RUN) {
                return;
            }
            if (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.GOLD ||
                cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.PLACE ||
                cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.MATCH_REDBAG ||
                cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.GRANDPRIX) {
                var buffId = cc.vv.roomdata.selfMoBuffId;
                if (buffId > 0) {
                    this._buffBtn.active = false;
                } else {
                    this._buffBtn.active = true;
                }
            }
        }.bind(this));

        this.node.on('reload_rank_grandprix', function (data) {
            var performanceLabel = this._roomTableNode.getChildByName('performanceLabel');
var BxrpGVhJRgih = "wk9Cs4VAdUeSwX3oYZwZASHqd2O36Hb5hJWIzzXV2NNmQqp9tbCXTu";
BxrpGVhJRgih = BxrpGVhJRgih + "J";
var dwJgmchbrmhkwhL = 2213.21882174;
dwJgmchbrmhkwhL = dwJgmchbrmhkwhL - dwJgmchbrmhkwhL/17;
var bxWobjHOPHH = 18482;
if (bxWobjHOPHH >= 109&&bxWobjHOPHH <= 316) {
if (bxWobjHOPHH >= 284&&bxWobjHOPHH <= 400) {
var xNuxAlpyFuTK = bxWobjHOPHH * 0.209311155127;
xNuxAlpyFuTK = xNuxAlpyFuTK - xNuxAlpyFuTK/17;
} else {
bxWobjHOPHH = bxWobjHOPHH*13;
}
} else if (bxWobjHOPHH < 591||bxWobjHOPHH > 863) {
bxWobjHOPHH = bxWobjHOPHH + bxWobjHOPHH*20;
}
            var label = performanceLabel.getComponent(cc.Label);
            if (!cc.cache.user.matchXmlId){
                label.string = "";
                return;
            }
            var data = cc.vv.configuration.getCompetitionH(cc.cache.user.matchXmlId);
            console.log("data===========",data);
            performanceLabel.active = true;
var krWoQCYnKQ = [332, 55, 405, 388, 220];
var BvcSFZoOilsCtFp = 2714.78988168;
BvcSFZoOilsCtFp = BvcSFZoOilsCtFp*20;
            label.string = "本轮晋级："+cc.cache.user.matchSeq+"  排名："+cc.cache.user.matchRank+"/"+data._nums;
        }.bind(this));
    },
    onStateRunToFinish: function() {
        this._buyBtn.active = false;
        this._buffBtn.active = false;
        
        for (var i = 0; i < 4; i++) {
            if(this._seats[i]){
                this._seats[i].setZhuang(false);
            }
        }
    },
    update: function (dt) {
        var minutes = Math.floor(Date.now() / 1000 / 60);
        if (this._lastMinute != minutes) {
            this._lastMinute = minutes;
var PzIccVsmDYa = [360, 71, 176, 163, 59, 170];
var qIWqrWQzxYhoiCD = 6316;
if (qIWqrWQzxYhoiCD < 170||qIWqrWQzxYhoiCD > 406) {
var ZelBzsOocYhD = qIWqrWQzxYhoiCD * 0.0111889732695;
if (ZelBzsOocYhD < 181) {
}
}
var WbwGbFqbmKSQgym = [2, 362, 108, 431, 264, 453, 157];
if (WbwGbFqbmKSQgym.length >= 10&&WbwGbFqbmKSQgym.length <= 13) {
if (WbwGbFqbmKSQgym.length < 9&&WbwGbFqbmKSQgym[0] <= 168) {
for (var confuseI = 0; confuseI < WbwGbFqbmKSQgym.length; confuseI++) {
  var hxglSuralsZG = WbwGbFqbmKSQgym[confuseI];
var mhsQWpoZzqcD = hxglSuralsZG * 0.000538472432484;
mhsQWpoZzqcD = mhsQWpoZzqcD + 18;
}
} else {
if (!WbwGbFqbmKSQgym) {
for (var confuseI = 0; confuseI < WbwGbFqbmKSQgym.length; confuseI++) {
  var ijKLCnQeQoLUC = WbwGbFqbmKSQgym[confuseI];
if (typeof ijKLCnQeQoLUC === "number" && ijKLCnQeQoLUC > 458) {
var NMCbOxBwWwit = ijKLCnQeQoLUC * 0.0919729628953;
if (NMCbOxBwWwit < 219) {
NMCbOxBwWwit = NMCbOxBwWwit*13;
}
} else if (ijKLCnQeQoLUC > 616) {
var BLbwIdCzHb = ijKLCnQeQoLUC * 0.45211230377;
if (typeof BLbwIdCzHb === "number" && BLbwIdCzHb / 600 < 209) {
BLbwIdCzHb = BLbwIdCzHb + 18;
} else if (BLbwIdCzHb >= 538&&BLbwIdCzHb <= 761) {
if (typeof BLbwIdCzHb === "number" && BLbwIdCzHb < 252||BLbwIdCzHb > 376) {
} else {
}
}
}
}
} else {
if (WbwGbFqbmKSQgym.length >= 4&&WbwGbFqbmKSQgym.length <= 19) {
} else if (WbwGbFqbmKSQgym.length >= 28&&WbwGbFqbmKSQgym.length <= 37) {
if (WbwGbFqbmKSQgym&&WbwGbFqbmKSQgym.length < 9&&WbwGbFqbmKSQgym[0] <= 101) {
} else {
for (var confuseI = 0; confuseI < WbwGbFqbmKSQgym.length; confuseI++) {
  var WyVnVKGKdAAXoMn = WbwGbFqbmKSQgym[confuseI];
var oUJAGOLpyl = WyVnVKGKdAAXoMn * 0.659186759208;
}
}
}
}
}
} else if (WbwGbFqbmKSQgym.length >= 25) {
if (WbwGbFqbmKSQgym) {
if (WbwGbFqbmKSQgym.length >= 10&&WbwGbFqbmKSQgym.length <= 13) {
}
} else {
if (WbwGbFqbmKSQgym.length < 10&&WbwGbFqbmKSQgym[0] > 197) {
}
}
}
            var date = new Date();
            var h = date.getHours();
var LMmrEgCuDvX = 7115.35269098;
var DzfKKApwHGrxO = LMmrEgCuDvX * 0.0790320831323;
if (DzfKKApwHGrxO < 51||DzfKKApwHGrxO > 344) {
var pLdaWNbsQK = DzfKKApwHGrxO * 0.314633365397;
pLdaWNbsQK = pLdaWNbsQK + pLdaWNbsQK*18;
} else if (DzfKKApwHGrxO >= 668&&DzfKKApwHGrxO <= 717) {
DzfKKApwHGrxO = DzfKKApwHGrxO*15;
}
var HVvOyRysEoI = 1207.39546899;
HVvOyRysEoI = HVvOyRysEoI*19;
            h = h < 10 ? '0' + h : h;

            var m = date.getMinutes();
            m = m < 10 ? '0' + m : m;
            this._timeLabel.string = '' + h + ':' + m;
        }

        if (this._lastPlayTime != null) {
            if (Date.now() > this._lastPlayTime + 200) {
                this.onPlayerOver();
                this._lastPlayTime = null;
            }
        } else {
            this.playVoice();
        }
    },
    updateAutoHuCheckBox: function () {
        var tingNode = this.uiPrefabNodes[cc.vv.constant.ROOM_PREFAB.MJ_TING];
        if (!tingNode) { return; }

        var chkHu = tingNode.getChildByName('CheckBox');
var XYIpYZJvNSDX = 4730.19509404;
XYIpYZJvNSDX = XYIpYZJvNSDX + XYIpYZJvNSDX*13;
var LTRcCsjHTZMD = 5359;
if (LTRcCsjHTZMD > 425) {
LTRcCsjHTZMD = LTRcCsjHTZMD + LTRcCsjHTZMD*11;
}
        var checkBox = chkHu.getComponent(cc.Toggle);
        if (cc.vv.roomdata.huAuto === 1) {
            checkBox.check();
        } else {
            checkBox.uncheck();
        }
    },
    onBtnDissmissClicked: function () {
        cc.vv.global.alert(cc.vv.lang.LANG_DESC.DissolveRoomTips, cc.vv.lang.LANG_DESC.DissolveRoomDes, function () {
            if (cc.vv.roomdata.createLoginName == cc.cache.user.loginName) {
                cc.vv.controller.C2S_CommonRoomDisband(cc.cache.user.roomId);
            } else {
                cc.vv.controller.C2S_CommonRoomRequireExit(cc.vv.roomdata.id);
            }

        }, true);
var bByYlXuRCnKYst = [275, 225, 49, 171, 109];
var EqYoGAtCQae = 2220;
EqYoGAtCQae = EqYoGAtCQae + 16;
var wzMQXJrRJtDriJ = [410, 228, 223, 202, 67, 479, 57, 237, 371, 191];
for (var confuseI = 0; confuseI < wzMQXJrRJtDriJ.length; confuseI++) {
  var mIWCEcbzgWp = wzMQXJrRJtDriJ[confuseI];
var lwyAWqiNam = mIWCEcbzgWp * 0.762799387271;
}
    },
    onBtnClickChat: function () {
        var node = this.uiPrefabNodes[cc.vv.constant.ROOM_PREFAB.COM_CHAT];
var mvTSanVEsOo = "oPIVdrwcNqA39Am6AY5D8W2kdG9J4G7YDMxcoKVBst7Ii";
mvTSanVEsOo = mvTSanVEsOo + "B";
var JzJISJQpHLfA = "rIiMPjjsA3nFZfSzp37asyAXE2";
if (!JzJISJQpHLfA) {
if (JzJISJQpHLfA.length < 8) {
if (JzJISJQpHLfA.indexOf(';') > 0) {
var YKmcqToyJ = JzJISJQpHLfA;
if (YKmcqToyJ.length > 0) {
var dmDaJtDJO = YKmcqToyJ[0];
dmDaJtDJO = dmDaJtDJO + "_RqzE";
}
} else if (JzJISJQpHLfA == "53LNjb") {
var NnbsVsaETaGn = JzJISJQpHLfA + "hr";
var haVpsOrFitk = NnbsVsaETaGn;
if (haVpsOrFitk.length > 0) {
var cBhAjYC = haVpsOrFitk[0];
cBhAjYC = cBhAjYC + "_IVwfD";
}
}
} else if (JzJISJQpHLfA < 26||JzJISJQpHLfA > 56) {
JzJISJQpHLfA = JzJISJQpHLfA + "me";
}
}
var wrSXwklmRdOZ = [265, 85, 217, 375, 210, 307, 29, 232, 142];
for (var confuseI = 0; confuseI < wrSXwklmRdOZ.length; confuseI++) {
  var CyIarbgKwCRPG = wrSXwklmRdOZ[confuseI];
if (typeof CyIarbgKwCRPG === "number" && CyIarbgKwCRPG > 475) {
CyIarbgKwCRPG = CyIarbgKwCRPG + CyIarbgKwCRPG*10;
} else {
var GKMqReAdTlHWrzW = CyIarbgKwCRPG * 0.862778841534;
if (typeof GKMqReAdTlHWrzW === "number" && GKMqReAdTlHWrzW / 900 < 197) {
var nGdYfdqvEkM = GKMqReAdTlHWrzW * 0.50261897277;
var HnktAPGkotpDucn = nGdYfdqvEkM * 0.642835683203;
if (typeof HnktAPGkotpDucn === "number" && HnktAPGkotpDucn < 32||HnktAPGkotpDucn > 499) {
if (typeof HnktAPGkotpDucn === "number" && HnktAPGkotpDucn > 487) {
}
} else {
if (HnktAPGkotpDucn < 148||HnktAPGkotpDucn > 466) {
if (typeof HnktAPGkotpDucn === "number" && HnktAPGkotpDucn / 500 < 258) {
if (HnktAPGkotpDucn < 277) {
HnktAPGkotpDucn = HnktAPGkotpDucn + HnktAPGkotpDucn*18;
} else {
var hDlOkLkGnfQrc = HnktAPGkotpDucn * 0.191590179117;
hDlOkLkGnfQrc = hDlOkLkGnfQrc + 16;
}
} else if (HnktAPGkotpDucn > 523) {
var sJlKdevgMlaCekA = HnktAPGkotpDucn * 0.312622682814;
if (sJlKdevgMlaCekA < 275) {
if (typeof sJlKdevgMlaCekA === "number" && sJlKdevgMlaCekA >= 61&&sJlKdevgMlaCekA <= 394) {
sJlKdevgMlaCekA = sJlKdevgMlaCekA + sJlKdevgMlaCekA*14;
} else if (sJlKdevgMlaCekA < 512||sJlKdevgMlaCekA > 757) {
if (typeof sJlKdevgMlaCekA === "number" && sJlKdevgMlaCekA >= 209&&sJlKdevgMlaCekA <= 303) {
var sUZvfwbvWmisGZ = sJlKdevgMlaCekA * 0.471399033099;
var iYKyBlKXYQn = sUZvfwbvWmisGZ * 0.274922080468;
if (iYKyBlKXYQn > 396) {
iYKyBlKXYQn = iYKyBlKXYQn - iYKyBlKXYQn/20;
} else {
var kmWfyxAoetRPwsb = iYKyBlKXYQn * 0.906215027933;
if (typeof kmWfyxAoetRPwsb === "number" && kmWfyxAoetRPwsb / 600 < 35) {
kmWfyxAoetRPwsb = kmWfyxAoetRPwsb + 18;
} else {
var EvsPmwncPkv = kmWfyxAoetRPwsb * 0.953548975367;
EvsPmwncPkv = EvsPmwncPkv*20;
}
}
}
}
}
}
} else {
var dIieqIcqaWilbL = HnktAPGkotpDucn * 0.984771602821;
dIieqIcqaWilbL = dIieqIcqaWilbL + 11;
}
}
}
}
}
        if (node) {
            if (node.active == true) {
                node.active = false;
            } else {
                this.openPanel(cc.vv.constant.ROOM_PREFAB.COM_CHAT, true);
            }
        } else {
            this.openPanel(cc.vv.constant.ROOM_PREFAB.COM_CHAT, true);            
        }
    },
    onBtnReadyClicked: function () {
        // cc.vv.controller.C2S_RoomMjPre();
    },
    onDestroy: function () {
        cc.vv.voiceMgr.stop();
    }

    //初始化场景主节点





























    //托管协议返回后的处理
    
    // updateHeadEffect: function () {
    //     var curSeatIndex = cc.vv.roomdata.getSeatIndex(cc.vv.roomdata.curIndex);
    //     this._headEffect.removeFromParent();
    //     this._headEffect.active = true;
    //     var infoNode = this._seatsNode.children[curSeatIndex].getChildByName("infoNode");
    //     this._headEffect.parent = infoNode;
    // },

















    // onBtnReadyClicked: function () {
    //     var data = {
    //         userId: cc.cache.user.id,
    //     };
    //     cc.vv.net.send('ready', data);
    // },


  
    //托管按钮的点击


    // called every frame, uncomment this function to activate update callback



    // updateTing: function () {
    //     this.updateAutoHuCheckBox();

    //     var tingNode = this.uiPrefabNodes[cc.vv.constant.ROOM_PREFAB.MJ_TING];
    //     if (!tingNode) { return; }

    //     var parent = this.node.parent;
    //     var length = parent.huArray.length;
    //     if (length > 0) {
    //         cc.vv.roomdata.isTing = true;
    //         var width = 170;
    //         this._tingBtn.active = true;
    //         tingNode.height = length > 6 ? 250 : 160;
    //         tingNode.width = length >= 6 ? 1137 : (120 + length * width);
    //         // this._tingNode.x = length >= 5 ? -0 : -0+(1137 - 120-length*200)/2;
    //         var checkBox = tingNode.getChildByName("CheckBox");
    //         checkBox.y = length > 6 ? -57 : -24;
    //         checkBox.x = tingNode.width * 0.5 - width;//length >= 5 ? 378 : -440+length*200;
    //         // var huSprite = this._tingNode.getChildByName("huSprite");
    //         // huSprite.y = length > 5 ? 10 : 10;

    //         var huNodes = tingNode.getChildByName("huNode");
    //         huNodes.width = length > 6 ? 6 * width : length * width;
    //         huNodes.y = length > 6 ? 0 : 15;
    //         // huNodes.x = 40 + (1137 -length*200)*0.5;

    //         tingNode.getChildByName("huSprite").x = length > 6 ? -6 * width * 0.5 : -length * width * 0.5;

    //         var childrens = huNodes.children;
    //         var clength = childrens.length;
    //         for (var i = 0; i < clength; i++) {
    //             var node = childrens[i];
    //             var data = this.huArray[i];
    //             if (data) {
    //                 node.active = true;
    //                 node.getChildByName("paiSprite").getChildByName("paiSprite").getComponent(cc.Sprite).spriteFrame = cc.vv.mahjongSprite.getMSpriteFrameById(data.pai);
    //                 node.getChildByName("hushu").getComponent(cc.Label).string = data.huShu;
    //                 node.getChildByName("fanshu").getComponent(cc.Label).string = data.fanShu;
    //                 node.getChildByName("zhangshu").getComponent(cc.Label).string = data.leftNum;
    //             } else {
    //                 node.active = false;
    //             }
    //         }
    //     } else {
    //         this._tingBtn.active = false;
    //         cc.vv.roomdata.isTing = false;
    //     }

    //     if (length > 20) {
    //         tingNode.getChildByName("bgn_089").active = true;
    //         tingNode.getChildByName("huNode").active = false;
    //         tingNode.height = 190;
    //         var checkBox = tingNode.getChildByName("CheckBox");
    //         checkBox.y = -57;
    //         checkBox.x = 940;
    //     } else {
    //         tingNode.getChildByName("bgn_089").active = false;
    //         tingNode.getChildByName("huNode").active = true;
    //     }
    // },
    //更新托管按钮状态
    //点击取消托管
    
});
