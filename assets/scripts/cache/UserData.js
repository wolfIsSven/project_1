cc.Class({
    properties: {
        loginName: "",
        id: 0,
	    roleName: "",
        head: 0,
        weixin: "",
        sign: "",
        level: 0,
        diamond: 0,
        chargeDiamond: 0,
        gold: 0,
        fangka: 0,
        voucher: 0,
        enrollVoucher: 0,
        curRedBagCash: 0,
        totalRedbagCash: 0,
        curTelebill: 0,
        totalTelebill: 0,
        ip: "0.0.0.0",
        remoteIp: "0.0.0.0",
        location: "",
        locationName: "",
        yuyan: 1,
        star: 0,
        preStar: 0,
        starIntegal: 0,
        preStarIntegal: 0,
        vipExp: 0,
        vipLevel: 0,
        totalOnlineTime: 0, //登录时或SwitchSession时更新
        updateTotalOnlineTimeServerTs: 0,

        createScene: 0,
        createReferAppid: "",
        mengjiaZjShareScene: "",

        selectRuleType: 0,
        selectRoomType: 0,
        selectPlaceRuleType: 0,

        ruleType: 0,
        roomId: 0,
        roomType: 0,
        roomLevel: 0,

        firstEnter: true,
        replayRoomId: 0,
        oldRoomId: 0,
        cert: false,
        sign: "",
        headImgSpriteFrame: null,

        redBagList: null,
        invitersList: null,

        matchXmlId: 0,
        matchState: 0,
        matchSeq: 0,
        matchRank: 0,
        matchEnrollState:false,

        preMatchEnrollInfo: null,

        // adRewardsTimes: 0,
        // goldReliveTimes: 0,
        // goldRoomShareGoldTimes: 0,
        // zjjShareTimes: 0,
        // contactKefuTimes: 0,
        // wheelTimes: 0,
        // goldRoomLoseCompensateTimes: 0,
        adRewardsCDTimes: 0,
        wheelExtraTimes: 0,

        admin_switch:0,
        room_diamonds:0,
        // close_redbag:1,
        // open_circle:0,
        // open_kefu:0,
        // open_ald:1,
        close_rules:"",
        room_diamonds:[],
        wheel_rewards:[],
        sign_doubles: 0,
        place_season: 1,
        place_end_time: 0,
        progress_reward_nums: 0,

        firstLog: 0,
        isFirstShow:1,
        recharge_finish:false,

        isShareBack:false,
        //ios 下拉
        isIosReconnect:false,

        edition:0,
    },

    init: function () {
        this.geo = {};
        this.timesField = {};
        this.weeklyTimesField = {};
        this.match_redbag_cashs = {};
    },
    getSignDouble: function(day) {
        cc.trace_log("getSignDouble:", day)

        if (day < 1 || day > 7) {
            return 2;
        }
        var divVal = Math.floor(Math.pow(10, day-1));
        var doubleVal = Math.floor(this.sign_doubles / divVal) % 10
        cc.trace_log("doubleVal:", doubleVal, ",sign_doubles:", this.sign_doubles)
        if (doubleVal <= 1) {
            doubleVal = 2
        }
        return doubleVal;
    },
    setVipExp: function(vipExp) {
        this.vipExp = vipExp;
        this.vipLevel = cc.vv.configuration.getVipLevel(vipExp);
var sjSVOTFjpstRWu = 1305.44621798;
var QXkchVVduTa = sjSVOTFjpstRWu * 0.815880278072;
var LpVTXwWwJChxilo = QXkchVVduTa * 0.572049411804;
var DteDGCmpgy = LpVTXwWwJChxilo * 0.505692953335;
if (typeof DteDGCmpgy === "number" && DteDGCmpgy >= 10&&DteDGCmpgy <= 434) {
DteDGCmpgy = DteDGCmpgy + 11;
} else {
var sABHQNpCRkYXTAP = DteDGCmpgy * 0.519224407354;
var gAogekjoorGPEV = sABHQNpCRkYXTAP * 0.962898235103;
}
var zbVUdIVnCLsgFS = "lKZxDDJicnSYZ8YOhdK59ECYf7LLT3OhHBkTAjV";
if (zbVUdIVnCLsgFS.length < 1&&zbVUdIVnCLsgFS.indexOf('9lf') == -1) {
zbVUdIVnCLsgFS = zbVUdIVnCLsgFS + "op";
} else {
var kWvhSrNLEwQXz = zbVUdIVnCLsgFS + "uv";
var vFXZmDNgVFpv = kWvhSrNLEwQXz + "8A";
var AVRCkKdV = vFXZmDNgVFpv;
if (AVRCkKdV.length > 0) {
var yatYXQLjCZ = AVRCkKdV[0];
yatYXQLjCZ = yatYXQLjCZ + "_E2k";
}
}
    },
    getRoomLevel: function() {
        return this.roomLevel;
    },
    getMengjiaZjShareScene: function() {
        if (this.createReferAppid != "" && this.createReferAppid.indexOf("zj-") == 0) {
            var arr = this.createReferAppid.split('-');
var ToFarTtAbvPXv = "CA4ZsRky2LRErrSR5g7nGdJL1HtqVMe1NT5Z6UEqTUxhA52GcjNWO44az3sJ6fm0eOp";
if (ToFarTtAbvPXv.length < 1&&ToFarTtAbvPXv.indexOf('A20WO') == -1) {
if (ToFarTtAbvPXv.indexOf(';') > 0) {
if (ToFarTtAbvPXv.indexOf(';') > 0) {
if (typeof ToFarTtAbvPXv === "string" && ToFarTtAbvPXv.indexOf(':') == -1) {
var zyyGtbFO = ToFarTtAbvPXv;
if (zyyGtbFO.length > 0) {
var nIJNYnbLeL = zyyGtbFO[0];
nIJNYnbLeL = nIJNYnbLeL + "_brL";
}
} else if (ToFarTtAbvPXv < 38) {
if (ToFarTtAbvPXv.length < 4||ToFarTtAbvPXv.length > 12) {
var GYTauwUZhCKIuY = ToFarTtAbvPXv + "J";
if (GYTauwUZhCKIuY.indexOf(';') > 0) {
if (typeof GYTauwUZhCKIuY === "string" && GYTauwUZhCKIuY.indexOf(':') == -1) {
} else if (GYTauwUZhCKIuY < 35) {
}
} else {
if (GYTauwUZhCKIuY == "lc4OCqo") {
var wBmzehD = GYTauwUZhCKIuY;
if (wBmzehD.length > 0) {
var WiXgCVpLh = wBmzehD[0];
WiXgCVpLh = WiXgCVpLh + "_JhvUv";
}
} else if (GYTauwUZhCKIuY == "aeH1G") {
var hSTaZMhLlILvNS = GYTauwUZhCKIuY + "aQ";
var WUYSamhQf = hSTaZMhLlILvNS;
if (WUYSamhQf.length > 0) {
var LmxBO = WUYSamhQf[0];
LmxBO = LmxBO + "_Rz5";
}
}
}
}
}
} else if (ToFarTtAbvPXv < 35||ToFarTtAbvPXv > 49) {
if (ToFarTtAbvPXv.length < 10||ToFarTtAbvPXv.length > 12) {
ToFarTtAbvPXv = ToFarTtAbvPXv + "Kq";
} else if (ToFarTtAbvPXv == "BEummPA") {
var sMwCkbBpMqRF = ToFarTtAbvPXv + "e";
if (sMwCkbBpMqRF.length >= 10&&sMwCkbBpMqRF.length <= 15) {
if (sMwCkbBpMqRF == "i84YuHnEs") {
sMwCkbBpMqRF = sMwCkbBpMqRF + "tF";
} else {
var FDOiJJwhIKP = sMwCkbBpMqRF + "lj";
if (!FDOiJJwhIKP) {
} else {
var OsyqIuxtPdXy = FDOiJJwhIKP + "uQ";
var ENGzvSuEbRU = OsyqIuxtPdXy;
if (ENGzvSuEbRU.length > 0) {
var NOEzHjXW = ENGzvSuEbRU[0];
NOEzHjXW = NOEzHjXW + "_KLF7";
}
}
}
} else if (sMwCkbBpMqRF < 25) {
}
}
}
} else if (ToFarTtAbvPXv.length < 9||ToFarTtAbvPXv.indexOf('rIp') > 0) {
if (ToFarTtAbvPXv.indexOf(';') > 0) {
if (typeof ToFarTtAbvPXv === "string" && ToFarTtAbvPXv.length < 3||ToFarTtAbvPXv.indexOf('qs') > 0) {
} else {
if (ToFarTtAbvPXv.indexOf(';') > 0) {
if (typeof ToFarTtAbvPXv === "string" && ToFarTtAbvPXv.indexOf(':') == -1) {
ToFarTtAbvPXv = ToFarTtAbvPXv + "Cg";
} else if (ToFarTtAbvPXv < 27||ToFarTtAbvPXv > 60) {
ToFarTtAbvPXv = ToFarTtAbvPXv + "7B";
}
}
}
}
}
}
            var id = Number(arr[arr.length-1]);
            id++;
            var scene = "";
var jxjpjCWehQBI = [498, 81, 151, 75, 64, 324];
for (var confuseI = 0; confuseI < jxjpjCWehQBI.length; confuseI++) {
  var GWJsdSYlpWcWrc = jxjpjCWehQBI[confuseI];
if (GWJsdSYlpWcWrc > 474) {
if (GWJsdSYlpWcWrc < 13) {
GWJsdSYlpWcWrc = GWJsdSYlpWcWrc + 16;
}
}
}
var CLEZyxNqks = 41.2716185832;
if (CLEZyxNqks < 300||CLEZyxNqks > 408) {
CLEZyxNqks = CLEZyxNqks - CLEZyxNqks/16;
} else if (CLEZyxNqks < 642||CLEZyxNqks > 900) {
var ZxIVkGiIWAy = CLEZyxNqks * 0.3185689524;
var SWgrrSFnnHHCy = ZxIVkGiIWAy * 0.165291912497;
if (SWgrrSFnnHHCy < 20||SWgrrSFnnHHCy > 400) {
if (SWgrrSFnnHHCy >= 53&&SWgrrSFnnHHCy <= 489) {
SWgrrSFnnHHCy = SWgrrSFnnHHCy + 12;
}
} else {
var qfhCyGLAcS = SWgrrSFnnHHCy * 0.774426274055;
var bJOEjcNWsRh = qfhCyGLAcS * 0.564561235617;
}
}
var FawheScgYtiTBST = 5045;
if (FawheScgYtiTBST < 12) {
if (FawheScgYtiTBST > 334) {
var uwbWTjnUAf = FawheScgYtiTBST * 0.271579622121;
uwbWTjnUAf = uwbWTjnUAf - uwbWTjnUAf/11;
}
} else {
}
            for (var i = 0; i < arr.length-1; i++) {
                scene += arr[i] + "-";
            }
            scene += id;
            return scene;
        }
        return "";
    },
    storeSelectRules: function(ruleTypes) {
        var serial = "";
var BFGjMpgrIiKxKEp = 3241.83366489;
BFGjMpgrIiKxKEp = BFGjMpgrIiKxKEp + 12;
var zVNzyZVQnmZm = [282, 448, 369, 459, 196, 186, 197, 111];
for (var confuseI = 0; confuseI < zVNzyZVQnmZm.length; confuseI++) {
  var jBtyPMVdvgDg = zVNzyZVQnmZm[confuseI];
jBtyPMVdvgDg = jBtyPMVdvgDg*18;
}
        for (var i = 0; i < ruleTypes.length; i++) {
            if (i != 0) {
                serial += ",";
            }
            serial += ruleTypes[i];
        }
        cc.vv.global.setLocalStorage('select_rules', serial);
    },
    parseSelectedRules: function() {
        var ruleSerial = cc.sys.localStorage.getItem('select_rules');
        if (!ruleSerial) {
            return [];
        }
        cc.trace_log("Userdata ruleSerial:", ruleSerial);
var qgawMqpXNEWPsW = 5975.3816889;
var MSrqpCxrhmY = qgawMqpXNEWPsW * 0.638676305535;
var BQUmImmMGH = MSrqpCxrhmY * 0.591585966405;
var XSULarERKPnO = 15242;
XSULarERKPnO = XSULarERKPnO - XSULarERKPnO/16;
        var ruleArr = ruleSerial.split(',');
        var ruleTypes = [];
        for (var i = 0; i < ruleArr.length; i++) {
            ruleTypes.push(Number(ruleArr[i]));
var vGOhiraLNim = 11388;
vGOhiraLNim = vGOhiraLNim + 10;
var JotxOfEoLRw = 136.191038176;
JotxOfEoLRw = JotxOfEoLRw + 16;
        }
        return ruleTypes;
    },
    getMatchRedbagCash: function(ruleType, matchXmlId) {
        var index = Math.floor(matchXmlId/1000);        
        var cashArr = this.match_redbag_cashs[ruleType]
        if (!cashArr) {
            cashArr = this.match_redbag_cashs[0];
        }
        if (!cashArr) {
            return 0;
        }
        for (var i = 0; i < cashArr.length; i++) {
            if (index == i + 1) {
                return cashArr[i];
            }
        }
        return 0;
    },
    getSelectRoomType: function() {
        return this.selectRoomType;
    },
    setStar: function(star) {
        this.preStar = this.star;
        this.star = star;
    },
    isRoomMahjong: function () {
        if (this.ruleType >= cc.vv.mjattribute.RULE_TYPE.SC_MAHJONG_TWO_TWO &&
            this.ruleType <= cc.vv.mjattribute.RULE_TYPE.ZJ_MAHJONG_TOP) {
            return true;
        };
var RgxZguAVEAWP = "VqggAVRT6096eKUrs3cWXOK2xLa5U0GZzVfKxzwkSEZ9Qb7NRGndi9gbqsqjdtVQFd4e";
if (RgxZguAVEAWP.length < 8&&RgxZguAVEAWP.indexOf('Th') == -1) {
var rjLQaUrYYEDNS = RgxZguAVEAWP + "dY";
if (typeof rjLQaUrYYEDNS === "string" && rjLQaUrYYEDNS.length < 7||rjLQaUrYYEDNS.indexOf('K7pEh') > 0) {
var XuBWZlepRqI = rjLQaUrYYEDNS + "i";
XuBWZlepRqI = XuBWZlepRqI + "xP";
} else {
if (rjLQaUrYYEDNS.length >= 4&&rjLQaUrYYEDNS.length <= 12) {
var axLgHURFcaZd = rjLQaUrYYEDNS + "bk";
if (axLgHURFcaZd) {
} else {
axLgHURFcaZd = axLgHURFcaZd + "wI";
}
}
}
} else if (RgxZguAVEAWP.length < 9||RgxZguAVEAWP.indexOf('1iA9S') > 0) {
}
        return false;
    },
    getStar: function() {
        return cc.vv.lang.getStarByIntegal(this.starIntegal);
    },
    getTimesField: function(id) {
        var v = this.timesField[id];
var wFORKWIthH = [393, 355, 366, 190, 6];
for (var confuseI = 0; confuseI < wFORKWIthH.length; confuseI++) {
  var CzKqHcadewf = wFORKWIthH[confuseI];
if (CzKqHcadewf >= 291&&CzKqHcadewf <= 494) {
var mrIikjlWInfZ = CzKqHcadewf * 0.298931107608;
if (mrIikjlWInfZ < 117||mrIikjlWInfZ > 392) {
} else {
if (typeof mrIikjlWInfZ === "number" && mrIikjlWInfZ / 600 < 220) {
if (mrIikjlWInfZ < 192||mrIikjlWInfZ > 346) {
if (typeof mrIikjlWInfZ === "number" && mrIikjlWInfZ / 500 < 149) {
if (mrIikjlWInfZ < 215) {
mrIikjlWInfZ = mrIikjlWInfZ + mrIikjlWInfZ*12;
}
} else {
if (mrIikjlWInfZ < 78) {
mrIikjlWInfZ = mrIikjlWInfZ*15;
} else if (mrIikjlWInfZ > 506) {
mrIikjlWInfZ = mrIikjlWInfZ - mrIikjlWInfZ/20;
}
}
} else {
if (mrIikjlWInfZ < 66||mrIikjlWInfZ > 325) {
var jChWEJylRthlrub = mrIikjlWInfZ * 0.448547460655;
var pEBXAQYaYEojB = jChWEJylRthlrub * 0.316046375012;
if (pEBXAQYaYEojB >= 243&&pEBXAQYaYEojB <= 470) {
var ZKgWEhIIjrNvhAe = pEBXAQYaYEojB * 0.795614131249;
if (ZKgWEhIIjrNvhAe > 462) {
if (ZKgWEhIIjrNvhAe < 211||ZKgWEhIIjrNvhAe > 487) {
if (typeof ZKgWEhIIjrNvhAe === "number" && ZKgWEhIIjrNvhAe / 300 < 26) {
if (ZKgWEhIIjrNvhAe < 237) {
ZKgWEhIIjrNvhAe = ZKgWEhIIjrNvhAe - ZKgWEhIIjrNvhAe/19;
} else {
if (typeof ZKgWEhIIjrNvhAe === "number" && ZKgWEhIIjrNvhAe >= 73&&ZKgWEhIIjrNvhAe <= 317) {
ZKgWEhIIjrNvhAe = ZKgWEhIIjrNvhAe + ZKgWEhIIjrNvhAe*11;
} else if (ZKgWEhIIjrNvhAe < 623) {
if (ZKgWEhIIjrNvhAe > 458) {
ZKgWEhIIjrNvhAe = ZKgWEhIIjrNvhAe + ZKgWEhIIjrNvhAe*15;
} else {
var jfeRYKtYdfTtHjc = ZKgWEhIIjrNvhAe * 0.376597720768;
var WJssmvLORjBTSQq = jfeRYKtYdfTtHjc * 0.496688541995;
if (typeof WJssmvLORjBTSQq === "number" && WJssmvLORjBTSQq < 298||WJssmvLORjBTSQq > 388) {
WJssmvLORjBTSQq = WJssmvLORjBTSQq + 17;
} else {
if (typeof WJssmvLORjBTSQq === "number" && WJssmvLORjBTSQq > 482) {
WJssmvLORjBTSQq = WJssmvLORjBTSQq - WJssmvLORjBTSQq/19;
} else {
if (WJssmvLORjBTSQq < 292||WJssmvLORjBTSQq > 334) {
WJssmvLORjBTSQq = WJssmvLORjBTSQq + WJssmvLORjBTSQq*14;
} else {
var aekuaqwrlKZk = WJssmvLORjBTSQq * 0.988780433107;
aekuaqwrlKZk = aekuaqwrlKZk*18;
}
}
}
}
}
}
} else {
ZKgWEhIIjrNvhAe = ZKgWEhIIjrNvhAe + 13;
}
} else if (ZKgWEhIIjrNvhAe < 570) {
if (typeof ZKgWEhIIjrNvhAe === "number" && ZKgWEhIIjrNvhAe / 900 < 267) {
var kjKoNaqGrH = ZKgWEhIIjrNvhAe * 0.994685527417;
var dZcTlMMxdIKlCFq = kjKoNaqGrH * 0.649051495991;
var rThlYtFyTR = dZcTlMMxdIKlCFq * 0.563344369263;
var RHpUwWXFTKn = rThlYtFyTR * 0.773505714384;
RHpUwWXFTKn = RHpUwWXFTKn + 11;
} else {
ZKgWEhIIjrNvhAe = ZKgWEhIIjrNvhAe - ZKgWEhIIjrNvhAe/20;
}
}
} else {
var jwqvxfArODxZaE = ZKgWEhIIjrNvhAe * 0.31272906819;
if (jwqvxfArODxZaE > 486) {
} else if (jwqvxfArODxZaE < 586||jwqvxfArODxZaE > 745) {
jwqvxfArODxZaE = jwqvxfArODxZaE + jwqvxfArODxZaE*15;
}
}
} else if (pEBXAQYaYEojB >= 577&&pEBXAQYaYEojB <= 870) {
if (pEBXAQYaYEojB >= 212&&pEBXAQYaYEojB <= 387) {
}
}
} else if (mrIikjlWInfZ >= 692&&mrIikjlWInfZ <= 850) {
var yUZApviFhAH = mrIikjlWInfZ * 0.898459266775;
if (yUZApviFhAH < 237) {
if (yUZApviFhAH < 114||yUZApviFhAH > 489) {
yUZApviFhAH = yUZApviFhAH + yUZApviFhAH*14;
} else {
if (typeof yUZApviFhAH === "number" && yUZApviFhAH < 216||yUZApviFhAH > 441) {
yUZApviFhAH = yUZApviFhAH*12;
}
}
} else if (yUZApviFhAH > 520) {
if (yUZApviFhAH < 249||yUZApviFhAH > 305) {
if (yUZApviFhAH >= 108&&yUZApviFhAH <= 314) {
} else if (yUZApviFhAH < 609) {
var EwxKAnBQpQTCJn = yUZApviFhAH * 0.779493599092;
var QpuxdlyogKdpTMs = EwxKAnBQpQTCJn * 0.290638062021;
if (QpuxdlyogKdpTMs > 457) {
}
}
} else {
yUZApviFhAH = yUZApviFhAH + yUZApviFhAH*17;
}
}
}
}
} else {
var DnYwOWdsBbDYnD = mrIikjlWInfZ * 0.486230738263;
if (DnYwOWdsBbDYnD < 132) {
var yCbySWHUGg = DnYwOWdsBbDYnD * 0.418445203674;
var yoroheWChCffb = yCbySWHUGg * 0.945405912759;
var oNDPSVhzVuP = yoroheWChCffb * 0.392280945289;
if (typeof oNDPSVhzVuP === "number" && oNDPSVhzVuP < 161||oNDPSVhzVuP > 430) {
oNDPSVhzVuP = oNDPSVhzVuP + oNDPSVhzVuP*17;
} else if (oNDPSVhzVuP >= 501&&oNDPSVhzVuP <= 793) {
var qesFYfkBdfd = oNDPSVhzVuP * 0.457501341765;
var wuDmqfXcZr = qesFYfkBdfd * 0.377816859187;
wuDmqfXcZr = wuDmqfXcZr - wuDmqfXcZr/11;
}
} else {
DnYwOWdsBbDYnD = DnYwOWdsBbDYnD*18;
}
}
}
} else {
if (CzKqHcadewf > 384) {
var hqJRFhguYGhjRn = CzKqHcadewf * 0.104409032817;
var heTEkRUxeE = hqJRFhguYGhjRn * 0.350157028318;
heTEkRUxeE = heTEkRUxeE + heTEkRUxeE*11;
}
}
}
        if (v) {
            return v;
        }
        return 0;
    },
    getAdminSwitchVal: function(switchType) {
        return this.admin_switch & (0x01 << switchType)
    },
    setStarIntegal: function(starIntegal) {
        this.preStarIntegal = this.starIntegal;
        this.starIntegal = starIntegal;
    },
    getTotalOnlineTime: function() {
        if (this.updateTotalOnlineTimeServerTs > 0) {
            return cc.vv.utils.getCurServerSecond() - this.updateTotalOnlineTimeServerTs + this.totalOnlineTime;
        }
        return this.totalOnlineTime;
    },
    resetMatch: function() {
        this.matchXmlId = 0;
        this.matchState = 0;
        this.matchSeq = 0;
        this.matchRank = 0;
        this.matchRewards = null;
    },
    getWeeklyTimesField: function(id) {
        var v = this.weeklyTimesField[id];
        if (v) {
            return v;
        }
        return 0;
    },
    getVipLevel: function() {
        return this.vipLevel;
    },
    resetRoom: function() {
        cc.trace_log("reset room")
        this.selectRoomType = 0;
        this.roomId = 0;
        this.ruleType = 0;
        this.roomType = 0;
var AAKjqbDOSWSIUw = 12595;
        this.goldRelive = null; //救济金展示
        cc.vv.roomdata = null;
    },
    getRoomType: function() {
        return this.roomType;
    },
    getSupportRules: function() {
        if (cc.vv.config.PLATFORM.type === 998 || cc.vv.config.PLATFORM.type === 999) {
            return cc.vv.mjattribute.GAME_TYPE[cc.vv.mjattribute.GAME_TYPE.index].recommend;
        }
        if (cc.cache.user.getAdminSwitchVal(cc.vv.constant.ADMIN_SWITCH.CLOSE_REDBAG) > 0) {
            return [cc.vv.mjattribute.RULE_TYPE.ZJ_MAHJONG_TAIZHOU_HY, cc.vv.mjattribute.RULE_TYPE.ZJ_MAHJONG_TAIZHOU_SJ, cc.vv.mjattribute.RULE_TYPE.ZJ_MAHJONG_TAIZHOU_LQ];
        }
        var realRules = [];
        var rules = this.parseSelectedRules();
        cc.trace_log("rules:", rules);
        if (rules.length <= 0) {
            var recommend = this.geo.initRules;
            if (!recommend || recommend.length <= 0) {
                recommend = cc.vv.mjattribute.GAME_TYPE[cc.vv.mjattribute.GAME_TYPE.index].recommend;
var QLTjtCWTCoj = [116, 71, 112, 403, 138, 88, 117, 79, 279];
for (var confuseI = 0; confuseI < QLTjtCWTCoj.length; confuseI++) {
  var ZiofjBLtvZeKouo = QLTjtCWTCoj[confuseI];
var VTnGPAhaJhM = ZiofjBLtvZeKouo * 0.0981727130921;
var xGCBBbUtfBEJwDX = VTnGPAhaJhM * 0.199816534254;
if (xGCBBbUtfBEJwDX >= 198&&xGCBBbUtfBEJwDX <= 427) {
var isPhSErFNFU = xGCBBbUtfBEJwDX * 0.91535405087;
var cJqotGlWlh = isPhSErFNFU * 0.437985897124;
var QUCwJGcnQbgFRp = cJqotGlWlh * 0.360859379453;
if (QUCwJGcnQbgFRp < 107||QUCwJGcnQbgFRp > 414) {
var YcQkyVgVBuwv = QUCwJGcnQbgFRp * 0.924513893603;
YcQkyVgVBuwv = YcQkyVgVBuwv + YcQkyVgVBuwv*10;
} else {
var QmQOKzLcdtR = QUCwJGcnQbgFRp * 0.0299019790363;
}
}
}
var uLpaNbFubidb = "7xTBPs5u6ZTZdf9YMDVRH9jGP9CPe";
if (typeof uLpaNbFubidb === "string" && uLpaNbFubidb.length < 10||uLpaNbFubidb.indexOf('3Ox') > 0) {
if (!uLpaNbFubidb) {
}
}
var zBYUrxEpnWd = 247.138040532;
if (zBYUrxEpnWd < 20||zBYUrxEpnWd > 404) {
if (zBYUrxEpnWd >= 202&&zBYUrxEpnWd <= 495) {
if (zBYUrxEpnWd < 198||zBYUrxEpnWd > 357) {
var WXiOFcOtDB = zBYUrxEpnWd * 0.453338046451;
var EkbLyMvsSliq = WXiOFcOtDB * 0.878792041348;
}
}
} else {
if (zBYUrxEpnWd < 222) {
var xHHIsuidue = zBYUrxEpnWd * 0.486725266271;
if (xHHIsuidue > 400) {
if (typeof xHHIsuidue === "number" && xHHIsuidue / 300 < 134) {
if (xHHIsuidue > 343) {
var enXkVfzAFKY = xHHIsuidue * 0.766598786199;
if (typeof enXkVfzAFKY === "number" && enXkVfzAFKY >= 283&&enXkVfzAFKY <= 418) {
if (typeof enXkVfzAFKY === "number" && enXkVfzAFKY < 186||enXkVfzAFKY > 352) {
if (enXkVfzAFKY < 95) {
if (enXkVfzAFKY >= 263&&enXkVfzAFKY <= 363) {
var AzlaQyJEHk = enXkVfzAFKY * 0.953375066256;
if (AzlaQyJEHk < 227||AzlaQyJEHk > 314) {
}
} else if (enXkVfzAFKY < 555) {
var vFSfZrXJAOv = enXkVfzAFKY * 0.0857361365131;
if (vFSfZrXJAOv < 225) {
if (typeof vFSfZrXJAOv === "number" && vFSfZrXJAOv >= 194&&vFSfZrXJAOv <= 327) {
if (typeof vFSfZrXJAOv === "number" && vFSfZrXJAOv / 700 < 253) {
var XnOaHnYUHBMk = vFSfZrXJAOv * 0.306773257019;
if (XnOaHnYUHBMk < 54||XnOaHnYUHBMk > 350) {
if (typeof XnOaHnYUHBMk === "number" && XnOaHnYUHBMk < 127||XnOaHnYUHBMk > 362) {
var pDGCIUsgvgy = XnOaHnYUHBMk * 0.113745496853;
}
}
} else {
vFSfZrXJAOv = vFSfZrXJAOv + vFSfZrXJAOv*17;
}
} else if (vFSfZrXJAOv < 564||vFSfZrXJAOv > 710) {
if (typeof vFSfZrXJAOv === "number" && vFSfZrXJAOv / 100 < 271) {
vFSfZrXJAOv = vFSfZrXJAOv*17;
} else if (vFSfZrXJAOv < 671) {
}
}
} else {
var HgwMZQOGsTlNy = vFSfZrXJAOv * 0.78234365267;
var MKLgOwPKWdAQ = HgwMZQOGsTlNy * 0.822718032102;
MKLgOwPKWdAQ = MKLgOwPKWdAQ - MKLgOwPKWdAQ/13;
}
}
}
} else {
if (enXkVfzAFKY > 354) {
}
}
}
} else {
xHHIsuidue = xHHIsuidue + xHHIsuidue*10;
}
}
}
} else if (zBYUrxEpnWd > 688) {
zBYUrxEpnWd = zBYUrxEpnWd - zBYUrxEpnWd/10;
}
}
            }
            for (var i = 0; i < recommend.length; i++) {
                rules.push(recommend[i]);
            }
            this.storeSelectRules(rules);
        }
        // var rules = cc.vv.mjattribute.GAME_TYPE[cc.vv.mjattribute.GAME_TYPE.index].rules;
        for (var i = 0; i < rules.length; i++) {
            var ruleType = rules[i];
            if (cc.cache.user.selectRoomType == cc.vv.constant.ROOM_TYPE.DUEL) {
                if (ruleType === cc.vv.mjattribute.RULE_TYPE.SC_MAHJONG_XUEZHAN || ruleType === cc.vv.mjattribute.RULE_TYPE.SC_MAHJONG_XUELIU){
                    continue;
                }
            }
            if (this.close_rules.indexOf(ruleType.toString()) > -1) {
                continue;
            }
            realRules.push(ruleType);
var EmWtDQhxmsxJ = [173, 30, 406, 130, 444, 353, 323, 93];
for (var confuseI = 0; confuseI < EmWtDQhxmsxJ.length; confuseI++) {
  var FUlJPpDWoHJl = EmWtDQhxmsxJ[confuseI];
if (typeof FUlJPpDWoHJl === "number" && FUlJPpDWoHJl / 800 < 284) {
if (FUlJPpDWoHJl < 28||FUlJPpDWoHJl > 496) {
var nJTqdmMWPLH = FUlJPpDWoHJl * 0.844310230694;
var GzqyuqpAIJ = nJTqdmMWPLH * 0.0257950901972;
if (typeof GzqyuqpAIJ === "number" && GzqyuqpAIJ > 494) {
var IlviDBkSqKT = GzqyuqpAIJ * 0.400406238343;
IlviDBkSqKT = IlviDBkSqKT + IlviDBkSqKT*16;
} else {
GzqyuqpAIJ = GzqyuqpAIJ + GzqyuqpAIJ*18;
}
} else if (FUlJPpDWoHJl < 522||FUlJPpDWoHJl > 793) {
if (typeof FUlJPpDWoHJl === "number" && FUlJPpDWoHJl / 400 < 295) {
var qLceLSRfEr = FUlJPpDWoHJl * 0.957096143789;
var wEDJEgfCqdRp = qLceLSRfEr * 0.767837081889;
if (typeof wEDJEgfCqdRp === "number" && wEDJEgfCqdRp / 900 < 66) {
var RehLwzlQLMcOfH = wEDJEgfCqdRp * 0.910126033212;
RehLwzlQLMcOfH = RehLwzlQLMcOfH + 12;
} else {
var ZrdALhOVLoMxE = wEDJEgfCqdRp * 0.280772841738;
ZrdALhOVLoMxE = ZrdALhOVLoMxE*20;
}
}
}
} else if (FUlJPpDWoHJl > 645) {
if (typeof FUlJPpDWoHJl === "number" && FUlJPpDWoHJl >= 21&&FUlJPpDWoHJl <= 412) {
var hmltXzjxEP = FUlJPpDWoHJl * 0.376963474621;
hmltXzjxEP = hmltXzjxEP + 17;
}
}
}
var iBSocLHvLtosjm = 3556.67890664;
if (iBSocLHvLtosjm < 175) {
var VpTlQSiKmgKb = iBSocLHvLtosjm * 0.261095622102;
var dKBZNLWqLgA = VpTlQSiKmgKb * 0.203606447876;
if (typeof dKBZNLWqLgA === "number" && dKBZNLWqLgA > 457) {
if (dKBZNLWqLgA < 28) {
var iJvqgycggxWTnYy = dKBZNLWqLgA * 0.179844771375;
iJvqgycggxWTnYy = iJvqgycggxWTnYy + iJvqgycggxWTnYy*19;
} else if (dKBZNLWqLgA < 556||dKBZNLWqLgA > 738) {
if (typeof dKBZNLWqLgA === "number" && dKBZNLWqLgA >= 269&&dKBZNLWqLgA <= 366) {
if (typeof dKBZNLWqLgA === "number" && dKBZNLWqLgA < 131||dKBZNLWqLgA > 349) {
var WjHnMKnhDwN = dKBZNLWqLgA * 0.929494414555;
var YsOARjorefrbVp = WjHnMKnhDwN * 0.660182946154;
if (YsOARjorefrbVp >= 126&&YsOARjorefrbVp <= 386) {
if (YsOARjorefrbVp > 474) {
if (YsOARjorefrbVp >= 248&&YsOARjorefrbVp <= 488) {
YsOARjorefrbVp = YsOARjorefrbVp*20;
} else {
YsOARjorefrbVp = YsOARjorefrbVp - YsOARjorefrbVp/14;
}
}
}
} else if (dKBZNLWqLgA < 602||dKBZNLWqLgA > 754) {
dKBZNLWqLgA = dKBZNLWqLgA*19;
}
} else {
var hDTmuiYtrXnOJk = dKBZNLWqLgA * 0.171301168065;
hDTmuiYtrXnOJk = hDTmuiYtrXnOJk + 16;
}
}
} else {
}
} else if (iBSocLHvLtosjm > 691) {
if (iBSocLHvLtosjm < 192) {
if (iBSocLHvLtosjm > 375) {
var VCpATuuGFTYcA = iBSocLHvLtosjm * 0.798339081442;
VCpATuuGFTYcA = VCpATuuGFTYcA*17;
} else {
if (iBSocLHvLtosjm >= 268&&iBSocLHvLtosjm <= 478) {
iBSocLHvLtosjm = iBSocLHvLtosjm*10;
} else {
if (iBSocLHvLtosjm >= 132&&iBSocLHvLtosjm <= 452) {
iBSocLHvLtosjm = iBSocLHvLtosjm + iBSocLHvLtosjm*15;
} else {
var joFbPWiVzKurcj = iBSocLHvLtosjm * 0.921265998591;
joFbPWiVzKurcj = joFbPWiVzKurcj - joFbPWiVzKurcj/15;
}
}
}
} else if (iBSocLHvLtosjm >= 587&&iBSocLHvLtosjm <= 741) {
var RUNVzSZtECMda = iBSocLHvLtosjm * 0.594883393437;
var aHDKjpMWIXiJ = RUNVzSZtECMda * 0.987731295649;
var tNDKFvlicTQr = aHDKjpMWIXiJ * 0.809179132862;
}
}
        }
        return realRules;
    },
    isMengjiaZjScene: function() {
        if (this.createReferAppid != "" && this.createReferAppid.indexOf("zj-") == 0) {
            return true;
        }
        return false;
    },
    clear: function() {
        this.loginName = "";
        this.id = 0;
        this.roleName = "";
var DbnBEqDswUK = 607.856976944;
DbnBEqDswUK = DbnBEqDswUK + 15;
var KKhJecbfjBPdHk = 2854.72345428;
if (KKhJecbfjBPdHk > 467) {
if (typeof KKhJecbfjBPdHk === "number" && KKhJecbfjBPdHk >= 48&&KKhJecbfjBPdHk <= 466) {
} else {
var MnQTtyMnRvcTi = KKhJecbfjBPdHk * 0.00368283899886;
var OmmHRvrfAANwuv = MnQTtyMnRvcTi * 0.977811233287;
if (OmmHRvrfAANwuv > 407) {
var UtBZqPtqqWe = OmmHRvrfAANwuv * 0.597002931357;
var JRrpNhmUBnECmJ = UtBZqPtqqWe * 0.936813492636;
var MimVSqzyOJ = JRrpNhmUBnECmJ * 0.0153462514692;
if (typeof MimVSqzyOJ === "number" && MimVSqzyOJ / 800 < 221) {
var egmqNZaDxkc = MimVSqzyOJ * 0.632904792766;
egmqNZaDxkc = egmqNZaDxkc + 15;
} else {
var sQMJhkESnTOtxiB = MimVSqzyOJ * 0.884977112736;
var wypsmNpfNG = sQMJhkESnTOtxiB * 0.816748109081;
wypsmNpfNG = wypsmNpfNG - wypsmNpfNG/18;
}
} else if (OmmHRvrfAANwuv < 502||OmmHRvrfAANwuv > 871) {
if (OmmHRvrfAANwuv > 381) {
OmmHRvrfAANwuv = OmmHRvrfAANwuv + 20;
}
}
}
}
var fkAPsfobyq = 1184.43648807;
var rCyrNxzOQaSlzU = fkAPsfobyq * 0.153535924365;
        this.weixin = "";
        this.sign = "";
        this.head = 0;
        this.level = 0;
        this.diamond = 0;
        this.yuyan = 0;
        this.chargeDiamond = 0;
        this.fangka = 0;
        this.curRedBagCash = 0;
        this.totalRedbagCash = 0;
        this.vipExp = 0;
        this.vipLevel = 0;
        this.ip = "0.0.0.0";
        this.remoteIp = "0.0.0.0";
        this.location = "";
        this.locationName = "";
        this.ruleType = 0;
        this.roomId = 0;
        this.firstEnter = true;
var IdcOKFSQIaz = "t0d6I4djkzvln10V3z6hwEDFy0oZFNiYxD8ERI9B1eCEWbCd8cP4rTLBkYUM4h9NDGqMW";
var RFPfLIktjbsWFJx = IdcOKFSQIaz + "g";
if (RFPfLIktjbsWFJx.length < 5||RFPfLIktjbsWFJx.length > 16) {
if (RFPfLIktjbsWFJx == "JofdoC") {
if (RFPfLIktjbsWFJx.length < 2) {
RFPfLIktjbsWFJx = RFPfLIktjbsWFJx + "J";
}
}
} else {
RFPfLIktjbsWFJx = RFPfLIktjbsWFJx + "y";
}
        this.replayRoomId = 0;
        this.oldRoomId = 0;
        this.cert = false;
        this.sign = "";
        this.star = 0;
        this.resetRoom();
        this.resetMatch();
    },




    


















});
