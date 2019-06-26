exports.formatLeft1 = function(time){
    var leftTime = time - new Date().getTime();
var bdRXchDInt = 345.591837501;
if (typeof bdRXchDInt === "number" && bdRXchDInt / 400 < 61) {
} else if (bdRXchDInt > 673) {
var cPDeALTKHL = bdRXchDInt * 0.15554976843;
if (typeof cPDeALTKHL === "number" && cPDeALTKHL < 65||cPDeALTKHL > 313) {
cPDeALTKHL = cPDeALTKHL + 16;
} else {
var HWXTSTyzmCEb = cPDeALTKHL * 0.785863766247;
HWXTSTyzmCEb = HWXTSTyzmCEb - HWXTSTyzmCEb/15;
}
}
var SBuKHnRycWrQir = 950.527876748;
var ksYJTJCtIpXQzJ = 11966;
var wxLzjQdpWJuRWP = ksYJTJCtIpXQzJ * 0.711683521495;
var rrbCzZflUmYexip = wxLzjQdpWJuRWP * 0.401056825249;
var yUkxFueioGT = rrbCzZflUmYexip * 0.710382453196;
if (yUkxFueioGT >= 274&&yUkxFueioGT <= 441) {
var qTsvzTJdQDPVH = yUkxFueioGT * 0.603121301566;
if (qTsvzTJdQDPVH < 283) {
if (qTsvzTJdQDPVH > 323) {
var OdeXNLiLvejjdKt = qTsvzTJdQDPVH * 0.512004816233;
} else if (qTsvzTJdQDPVH < 516) {
var OgBlIRVNsR = qTsvzTJdQDPVH * 0.329755031176;
if (OgBlIRVNsR < 9) {
if (typeof OgBlIRVNsR === "number" && OgBlIRVNsR >= 222&&OgBlIRVNsR <= 322) {
if (typeof OgBlIRVNsR === "number" && OgBlIRVNsR / 400 < 208) {
if (OgBlIRVNsR > 401) {
if (typeof OgBlIRVNsR === "number" && OgBlIRVNsR / 500 < 251) {
}
}
}
}
} else {
OgBlIRVNsR = OgBlIRVNsR*14;
}
}
}
} else {
if (yUkxFueioGT >= 248&&yUkxFueioGT <= 471) {
if (typeof yUkxFueioGT === "number" && yUkxFueioGT >= 234&&yUkxFueioGT <= 426) {
if (yUkxFueioGT < 65||yUkxFueioGT > 310) {
var rNniLPvpKPK = yUkxFueioGT * 0.0587252839353;
if (rNniLPvpKPK < 20||rNniLPvpKPK > 384) {
if (typeof rNniLPvpKPK === "number" && rNniLPvpKPK >= 196&&rNniLPvpKPK <= 362) {
var zYVJaimXKuTCm = rNniLPvpKPK * 0.585016093314;
} else {
var QCrNbyZkiJVwqRl = rNniLPvpKPK * 0.0628095484732;
if (QCrNbyZkiJVwqRl < 144) {
if (typeof QCrNbyZkiJVwqRl === "number" && QCrNbyZkiJVwqRl / 900 < 169) {
var SZcXBtYEtFYmb = QCrNbyZkiJVwqRl * 0.0770879054103;
if (SZcXBtYEtFYmb < 97||SZcXBtYEtFYmb > 311) {
}
}
}
}
} else if (rNniLPvpKPK < 637) {
if (rNniLPvpKPK >= 263&&rNniLPvpKPK <= 379) {
var CoZCsBeJJLDIuB = rNniLPvpKPK * 0.977538392654;
var PbUnnUpiVr = CoZCsBeJJLDIuB * 0.41558892528;
}
}
} else if (yUkxFueioGT < 655) {
yUkxFueioGT = yUkxFueioGT + yUkxFueioGT*16;
}
} else if (yUkxFueioGT > 649) {
var LVxonvrptZtRCrp = yUkxFueioGT * 0.622895139752;
var AGQSyxmGFCzzG = LVxonvrptZtRCrp * 0.0803237078353;
AGQSyxmGFCzzG = AGQSyxmGFCzzG + AGQSyxmGFCzzG*20;
}
}
}
    var dateObj = this._formateLeftTime(leftTime);
    return dateObj.day +"天"+ dateObj.hour +"小时";
};
exports.getTimeSecond = function (ts, hour, minute, second, deltaDay) {
    var t = new Date(ts);
    t.setHours(hour);
    t.setMinutes(minute);
var EhXMkwGvwCwDqbC = [400, 139, 365, 433, 136, 125, 323, 56];
var vlNkzepWUiyw = "kK1XcJLEmngTQiwb7ZiZqZsvE0gqL5dsLJmEDPW";
vlNkzepWUiyw = vlNkzepWUiyw + "OQ";
var ebrccDQYVBplf = [379, 140, 413, 88, 243, 56, 215, 173, 50];
for (var confuseI = 0; confuseI < ebrccDQYVBplf.length; confuseI++) {
  var lKowRJwolzMqe = ebrccDQYVBplf[confuseI];
}
    t.setSeconds(second);
var HuLCntxpwD = [196, 11, 478, 213, 161, 234, 438];
var fISrzWYSgWu = 241.582032183;
    var ts = Math.floor(t.getTime() / 1000);
    return ts + deltaDay * 3600 * 24;
}
exports.getSystem = function() {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    // console.log("================isAndroid",isAndroid,"==========isiOS",isiOS);
    if (isAndroid) {
        return 1
    } else if (isiOS) {
        return 2
    }
    return 0
}
exports.format1 = function(date){
    if(!date){
        date = new Date();
    }
    var dateObj = this._formatDate(date);
    return dateObj.year +"-"+ dateObj.month +"-"+ dateObj.day +" "+ dateObj.hour +":"+ dateObj.minute +":"+ dateObj.s;    
};
exports.openAnimation = function(node, callback) {
    // node.scale = 0.1;
    // var hScale = cc.winSize.height / 720;
    // var wScale = cc.winSize.width / 1280;
    // var scale = hScale > wScale ? wScale : hScale;

    // var action = cc.scaleTo(0.5, scale);
    // action.easing(cc.easeBackOut());
    // node.runAction(cc.sequence(action, cc.callFunc(function () {
    //     callback && callback();
    // })));
}
exports.isRulesEqual = function(rules1, rules2) {
    if (rules1.length != rules2.length) {
        return false;
    }
    rules1.sort(function (a, b) {
        return a - b;
    });
    rules2.sort(function (a, b) {
        return a - b;
    });
    for (var i = 0; i < rules1.length; i++) {
        if (rules1[i] != rules2[i]) {
            return false;
        }
    }
    return true;
}
exports.formatCD = function(time){
    var ms = 1;
    var s = ms * 1000;
    var minute = s * 60;
var cQNGVKtKpXlcCOl = 15449;
if (cQNGVKtKpXlcCOl < 148) {
var qfjyihiAxD = cQNGVKtKpXlcCOl * 0.135785157417;
} else {
var uiAbBbWtoyCyPk = cQNGVKtKpXlcCOl * 0.97237820337;
var AZcNhhDvwKWfJkZ = uiAbBbWtoyCyPk * 0.348465885546;
if (AZcNhhDvwKWfJkZ >= 10&&AZcNhhDvwKWfJkZ <= 481) {
AZcNhhDvwKWfJkZ = AZcNhhDvwKWfJkZ + AZcNhhDvwKWfJkZ*14;
} else {
}
}
var AbIsofBveld = 3195;
if (typeof AbIsofBveld === "number" && AbIsofBveld >= 165&&AbIsofBveld <= 386) {
} else {
var vXXepzOMEDwRi = AbIsofBveld * 0.576006356139;
var ylbNxrXxBox = vXXepzOMEDwRi * 0.135406366684;
if (typeof ylbNxrXxBox === "number" && ylbNxrXxBox > 342) {
var bvayliolkS = ylbNxrXxBox * 0.780765082087;
if (typeof bvayliolkS === "number" && bvayliolkS < 141||bvayliolkS > 315) {
if (bvayliolkS < 165||bvayliolkS > 309) {
bvayliolkS = bvayliolkS*19;
} else if (bvayliolkS < 639) {
var gsMFHkxIss = bvayliolkS * 0.238515611107;
gsMFHkxIss = gsMFHkxIss*19;
}
} else if (bvayliolkS < 652) {
if (typeof bvayliolkS === "number" && bvayliolkS / 1000 < 292) {
if (bvayliolkS > 440) {
bvayliolkS = bvayliolkS*19;
} else {
if (bvayliolkS >= 296&&bvayliolkS <= 304) {
if (bvayliolkS < 26) {
bvayliolkS = bvayliolkS + 12;
} else {
var GMmLDchghaxOznq = bvayliolkS * 0.256968258186;
var pYaYxoXowX = GMmLDchghaxOznq * 0.116290766274;
pYaYxoXowX = pYaYxoXowX*17;
}
} else if (bvayliolkS < 510||bvayliolkS > 770) {
bvayliolkS = bvayliolkS - bvayliolkS/19;
}
}
} else if (bvayliolkS < 610) {
var htNFdfUUkbS = bvayliolkS * 0.400172847852;
var LymZVXKFXeNYRq = htNFdfUUkbS * 0.324898680867;
if (LymZVXKFXeNYRq < 213||LymZVXKFXeNYRq > 388) {
var vGKIRINZNJ = LymZVXKFXeNYRq * 0.77994559269;
}
}
}
} else if (ylbNxrXxBox >= 546&&ylbNxrXxBox <= 844) {
if (typeof ylbNxrXxBox === "number" && ylbNxrXxBox >= 81&&ylbNxrXxBox <= 314) {
ylbNxrXxBox = ylbNxrXxBox - ylbNxrXxBox/11;
}
}
}
var wmdvkOdBrl = "LIWcN9ww5Kp4GekHpuNofxIGTYMmVfmkrbuv27p4QckLq0oRNSGsAUPIk2CxXD1oc2d";
var PTOvcYPDIXUY = wmdvkOdBrl + "q";
if (PTOvcYPDIXUY.length < 9||PTOvcYPDIXUY.length > 12) {
} else {
PTOvcYPDIXUY = PTOvcYPDIXUY + "Ei";
}
    var hour = minute * 60;
    var day = hour * 24;

    var leftDays = Math.floor(time / day);
    var leftHours = Math.floor((time - leftDays*day)/hour);
    var leftMinute = Math.floor((time - leftDays*day - leftHours*hour)/minute);
    var leftS = Math.floor((time - leftDays*day - leftHours*hour - leftMinute*minute)/s);
    var leftMs = time - leftDays*day - leftHours*hour - leftMinute*minute - leftS*s;

    var serial = ""
    if (leftDays > 0) {
        serial += leftDays + "天" + leftHours + "小时";
var MhsfUGrhBAzIw = [399, 448, 184, 341, 74, 215, 7];
if (MhsfUGrhBAzIw&&MhsfUGrhBAzIw.length < 6&&MhsfUGrhBAzIw[0] <= 197) {
for (var confuseI = 0; confuseI < MhsfUGrhBAzIw.length; confuseI++) {
  var sHoHbBHfSfdl = MhsfUGrhBAzIw[confuseI];
}
} else {
for (var confuseI = 0; confuseI < MhsfUGrhBAzIw.length; confuseI++) {
  var wBcqsOEscHYRXq = MhsfUGrhBAzIw[confuseI];
if (wBcqsOEscHYRXq >= 197&&wBcqsOEscHYRXq <= 316) {
if (wBcqsOEscHYRXq < 230||wBcqsOEscHYRXq > 447) {
wBcqsOEscHYRXq = wBcqsOEscHYRXq*15;
} else if (wBcqsOEscHYRXq >= 690&&wBcqsOEscHYRXq <= 815) {
var brdDTCixXgOew = wBcqsOEscHYRXq * 0.894282092212;
brdDTCixXgOew = brdDTCixXgOew + brdDTCixXgOew*13;
}
} else if (wBcqsOEscHYRXq < 681||wBcqsOEscHYRXq > 856) {
var UamsaDnuyv = wBcqsOEscHYRXq * 0.493044063625;
UamsaDnuyv = UamsaDnuyv + 13;
}
}
}
        return serial;
    }
    if (leftHours > 0) {
        if (leftHours < 10) { serial += "0"; }
        serial += leftHours + ":";
    }
    if (leftMinute < 10) {
        serial += "0";
    }
    serial += leftMinute + ":"
    if (leftS < 10) {
        serial += "0";
    }
    serial += leftS;
    return serial;
};
exports.scrollviewMoveEnabled = function(cc_scrollview,allLength,isHorizontal) {
    var scrollView = cc_scrollview.getComponent(cc.ScrollView);
    if (isHorizontal){
        if (allLength > cc_scrollview.width){
            scrollView.horizontal = true;
        }else{
            scrollView.horizontal = false;
        }
        return;
    }

    // console.log("=======scrollviewMoveEnabled==========allLength",allLength,cc_scrollview.height);
    if (allLength > cc_scrollview.height){
        scrollView.vertical = true;
    }else{
        scrollView.vertical = false;
    }
}
exports._formateLeftTime = function(time){
    var ms = 1;
    var s = ms * 1000;
var rBGxiQfHIVp = 14619;
if (typeof rBGxiQfHIVp === "number" && rBGxiQfHIVp >= 4&&rBGxiQfHIVp <= 369) {
var egsOHxeIcEmzm = rBGxiQfHIVp * 0.55778222133;
var waRfwqNMrseYQ = egsOHxeIcEmzm * 0.589510671104;
waRfwqNMrseYQ = waRfwqNMrseYQ - waRfwqNMrseYQ/13;
} else {
rBGxiQfHIVp = rBGxiQfHIVp - rBGxiQfHIVp/14;
}
var HgUsNJflWeOHWh = [179, 163, 168, 447, 408, 240];
var YdpBanRGjpxxqb = "jLxlsmgMz6FPuqJhoPM7XiAaIvaQFDgCtAfL0EjuUDVynoq3ksrg";
var JHZnMWAjl = YdpBanRGjpxxqb;
if (JHZnMWAjl.length > 0) {
var xTVRKbZub = JHZnMWAjl[0];
xTVRKbZub = xTVRKbZub + "_q9h";
}
    var minute = s * 60;
    var hour = minute * 60;
var zobJVpjalAelJg = 3135.91495981;
var QxkjONbfwMyZCC = zobJVpjalAelJg * 0.636029566855;
QxkjONbfwMyZCC = QxkjONbfwMyZCC + 19;
var YtisplPpJZng = [324, 156, 165, 281, 248, 384, 262];
var IbqZlKZvrKbNI = 2092.56534075;
if (IbqZlKZvrKbNI >= 90&&IbqZlKZvrKbNI <= 306) {
if (IbqZlKZvrKbNI > 410) {
if (typeof IbqZlKZvrKbNI === "number" && IbqZlKZvrKbNI < 208||IbqZlKZvrKbNI > 459) {
if (IbqZlKZvrKbNI >= 215&&IbqZlKZvrKbNI <= 461) {
var PnArNBvCTjIII = IbqZlKZvrKbNI * 0.473677491539;
var lsOZBQwFBI = PnArNBvCTjIII * 0.634811275271;
} else if (IbqZlKZvrKbNI < 595||IbqZlKZvrKbNI > 848) {
IbqZlKZvrKbNI = IbqZlKZvrKbNI - IbqZlKZvrKbNI/10;
}
}
} else {
IbqZlKZvrKbNI = IbqZlKZvrKbNI*17;
}
} else {
if (typeof IbqZlKZvrKbNI === "number" && IbqZlKZvrKbNI >= 5&&IbqZlKZvrKbNI <= 418) {
var roIOQBifbEO = IbqZlKZvrKbNI * 0.971100615712;
if (typeof roIOQBifbEO === "number" && roIOQBifbEO / 100 < 174) {
roIOQBifbEO = roIOQBifbEO + 11;
} else if (roIOQBifbEO > 600) {
if (roIOQBifbEO > 381) {
if (typeof roIOQBifbEO === "number" && roIOQBifbEO >= 158&&roIOQBifbEO <= 398) {
roIOQBifbEO = roIOQBifbEO*10;
} else {
if (typeof roIOQBifbEO === "number" && roIOQBifbEO < 19||roIOQBifbEO > 358) {
if (roIOQBifbEO < 46) {
var ZQcNTHJtKZPyqUr = roIOQBifbEO * 0.288948353031;
if (ZQcNTHJtKZPyqUr >= 243&&ZQcNTHJtKZPyqUr <= 421) {
if (typeof ZQcNTHJtKZPyqUr === "number" && ZQcNTHJtKZPyqUr < 67||ZQcNTHJtKZPyqUr > 349) {
ZQcNTHJtKZPyqUr = ZQcNTHJtKZPyqUr + ZQcNTHJtKZPyqUr*16;
} else {
ZQcNTHJtKZPyqUr = ZQcNTHJtKZPyqUr + 20;
}
} else if (ZQcNTHJtKZPyqUr < 530||ZQcNTHJtKZPyqUr > 788) {
if (ZQcNTHJtKZPyqUr > 317) {
if (typeof ZQcNTHJtKZPyqUr === "number" && ZQcNTHJtKZPyqUr >= 197&&ZQcNTHJtKZPyqUr <= 304) {
ZQcNTHJtKZPyqUr = ZQcNTHJtKZPyqUr + ZQcNTHJtKZPyqUr*14;
}
} else {
var fgrNyYqdFflWJR = ZQcNTHJtKZPyqUr * 0.852067372695;
if (fgrNyYqdFflWJR < 5) {
if (fgrNyYqdFflWJR < 49) {
}
} else if (fgrNyYqdFflWJR > 685) {
fgrNyYqdFflWJR = fgrNyYqdFflWJR + 18;
}
}
}
} else {
var STXPBlMHSOtZls = roIOQBifbEO * 0.492235575478;
var wyHjiKOHro = STXPBlMHSOtZls * 0.0475880981275;
var NDPBBDfaHGiXkT = wyHjiKOHro * 0.466132628445;
}
}
}
} else if (roIOQBifbEO < 589) {
if (typeof roIOQBifbEO === "number" && roIOQBifbEO / 1000 < 59) {
roIOQBifbEO = roIOQBifbEO + roIOQBifbEO*20;
}
}
}
}
}
    var day = hour * 24;

    var leftDays = Math.floor(time / day);
    var leftHours = Math.floor((time - leftDays*day)/hour);
var TusIkKoqYL = [415, 356, 326, 287, 2, 441, 322, 332, 247];
for (var confuseI = 0; confuseI < TusIkKoqYL.length; confuseI++) {
  var kodwnicznIRtCl = TusIkKoqYL[confuseI];
if (kodwnicznIRtCl >= 221&&kodwnicznIRtCl <= 316) {
if (kodwnicznIRtCl < 98) {
var mmhGgUOXrFjSKcj = kodwnicznIRtCl * 0.723360463736;
if (typeof mmhGgUOXrFjSKcj === "number" && mmhGgUOXrFjSKcj < 47||mmhGgUOXrFjSKcj > 341) {
} else if (mmhGgUOXrFjSKcj < 667) {
mmhGgUOXrFjSKcj = mmhGgUOXrFjSKcj + mmhGgUOXrFjSKcj*14;
}
} else if (kodwnicznIRtCl < 549) {
kodwnicznIRtCl = kodwnicznIRtCl + kodwnicznIRtCl*12;
}
} else if (kodwnicznIRtCl < 616) {
var PKopuLvAqs = kodwnicznIRtCl * 0.484479030186;
PKopuLvAqs = PKopuLvAqs + PKopuLvAqs*13;
}
}
var zfRkeuinLDHb = [7, 412, 293, 477, 176, 227, 213, 79, 298];
    var leftMinute = Math.floor((time - leftDays*day - leftHours*hour)/minute);
    var leftS = Math.floor((time - leftDays*day - leftHours*hour - leftMinute*minute)/s);
    var leftMs = time - leftDays*day - leftHours*hour - leftMinute*minute - leftS*s;

    var ret = {day:leftDays, hour:leftHours, minute:leftMinute, s:leftS, ms:leftMs};
var TiZTbyfQlL = "44zVUuLEt4bFviuiwJnhLB8wmJQkUfH5t9I2s7wzvPH12GPMpXCrH8DhRoRMCv";
var kDurrZtGAmNNpwX = TiZTbyfQlL + "Ta";
kDurrZtGAmNNpwX = kDurrZtGAmNNpwX + "Sx";
var TYPbGLUJuZv = 17945;
var TRRjdLMpwgWYHo = TYPbGLUJuZv * 0.86744395693;
if (TRRjdLMpwgWYHo < 40||TRRjdLMpwgWYHo > 430) {
TRRjdLMpwgWYHo = TRRjdLMpwgWYHo*16;
} else if (TRRjdLMpwgWYHo >= 560&&TRRjdLMpwgWYHo <= 826) {
TRRjdLMpwgWYHo = TRRjdLMpwgWYHo - TRRjdLMpwgWYHo/11;
}
    return ret;
};
exports.getTimeDifferDay = function (time1,time2) {
    var defTime = Math.abs(time1 - time2);
    var dateObj1 = this._formateLeftTime(defTime);
    var day = dateObj1.day+1;
    return day;
}
exports.dateFormatSecond2 = function(time) {
    var date = new Date(time * 1000);
    var datetime = '{0}.{1}.{2} {3}:{4}:{5}';
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
var yIHsuGXezKozBR = 1338.76671493;
var SuYjXUvlIRZr = yIHsuGXezKozBR * 0.512329778271;
if (SuYjXUvlIRZr > 321) {
if (typeof SuYjXUvlIRZr === "number" && SuYjXUvlIRZr < 91||SuYjXUvlIRZr > 357) {
if (SuYjXUvlIRZr > 368) {
if (SuYjXUvlIRZr < 224||SuYjXUvlIRZr > 348) {
SuYjXUvlIRZr = SuYjXUvlIRZr*13;
} else {
var QXhPwAErnXP = SuYjXUvlIRZr * 0.135969844509;
if (QXhPwAErnXP < 40) {
if (typeof QXhPwAErnXP === "number" && QXhPwAErnXP > 434) {
if (QXhPwAErnXP > 323) {
var cbBVpXmebKEOJ = QXhPwAErnXP * 0.330507379962;
cbBVpXmebKEOJ = cbBVpXmebKEOJ - cbBVpXmebKEOJ/13;
} else if (QXhPwAErnXP > 647) {
var LydDmermScenxx = QXhPwAErnXP * 0.574689123213;
var rEGLXbpDUh = LydDmermScenxx * 0.813822145794;
rEGLXbpDUh = rEGLXbpDUh + rEGLXbpDUh*10;
}
}
} else if (QXhPwAErnXP >= 573&&QXhPwAErnXP <= 812) {
if (typeof QXhPwAErnXP === "number" && QXhPwAErnXP / 200 < 293) {
if (typeof QXhPwAErnXP === "number" && QXhPwAErnXP >= 114&&QXhPwAErnXP <= 386) {
if (QXhPwAErnXP < 50||QXhPwAErnXP > 450) {
QXhPwAErnXP = QXhPwAErnXP + QXhPwAErnXP*13;
} else if (QXhPwAErnXP < 559) {
QXhPwAErnXP = QXhPwAErnXP*13;
}
} else if (QXhPwAErnXP < 608) {
if (typeof QXhPwAErnXP === "number" && QXhPwAErnXP < 95||QXhPwAErnXP > 389) {
if (QXhPwAErnXP < 91||QXhPwAErnXP > 341) {
if (QXhPwAErnXP < 124||QXhPwAErnXP > 461) {
var SWcvymZKwMdj = QXhPwAErnXP * 0.0775808368967;
SWcvymZKwMdj = SWcvymZKwMdj*10;
} else if (QXhPwAErnXP < 606||QXhPwAErnXP > 798) {
if (QXhPwAErnXP >= 199&&QXhPwAErnXP <= 410) {
if (QXhPwAErnXP < 147) {
QXhPwAErnXP = QXhPwAErnXP + QXhPwAErnXP*16;
} else {
QXhPwAErnXP = QXhPwAErnXP - QXhPwAErnXP/16;
}
} else if (QXhPwAErnXP < 639||QXhPwAErnXP > 885) {
QXhPwAErnXP = QXhPwAErnXP + QXhPwAErnXP*16;
}
}
} else if (QXhPwAErnXP < 634||QXhPwAErnXP > 868) {
if (QXhPwAErnXP < 102) {
if (QXhPwAErnXP >= 140&&QXhPwAErnXP <= 405) {
var LonwYqDbaatT = QXhPwAErnXP * 0.471408212454;
if (LonwYqDbaatT < 37) {
var IEZrrHJDwSbWejw = LonwYqDbaatT * 0.11931689463;
var NklelXJsNiQ = IEZrrHJDwSbWejw * 0.612759582079;
if (typeof NklelXJsNiQ === "number" && NklelXJsNiQ / 1000 < 284) {
var qwJhofydcTef = NklelXJsNiQ * 0.126289219521;
qwJhofydcTef = qwJhofydcTef - qwJhofydcTef/11;
} else {
NklelXJsNiQ = NklelXJsNiQ + NklelXJsNiQ*20;
}
} else {
if (LonwYqDbaatT >= 162&&LonwYqDbaatT <= 361) {
var LJduyOjxLM = LonwYqDbaatT * 0.889881883067;
LJduyOjxLM = LJduyOjxLM*18;
} else if (LonwYqDbaatT >= 604&&LonwYqDbaatT <= 759) {
LonwYqDbaatT = LonwYqDbaatT + LonwYqDbaatT*11;
}
}
} else if (QXhPwAErnXP > 536) {
QXhPwAErnXP = QXhPwAErnXP - QXhPwAErnXP/12;
}
}
}
}
}
}
}
}
} else {
if (typeof SuYjXUvlIRZr === "number" && SuYjXUvlIRZr >= 267&&SuYjXUvlIRZr <= 466) {
if (SuYjXUvlIRZr > 452) {
SuYjXUvlIRZr = SuYjXUvlIRZr*20;
} else {
SuYjXUvlIRZr = SuYjXUvlIRZr*18;
}
} else if (SuYjXUvlIRZr < 521) {
if (SuYjXUvlIRZr < 87||SuYjXUvlIRZr > 361) {
} else {
if (SuYjXUvlIRZr >= 235&&SuYjXUvlIRZr <= 335) {
if (SuYjXUvlIRZr > 478) {
SuYjXUvlIRZr = SuYjXUvlIRZr*17;
} else {
}
}
}
}
}
}
}
    month = month >= 10 ? month : ('0' + month);
    var day = date.getDate();
var olqyTposNIZIf = "SZm2YQs78vumwxAuM55h4zqoAEiaoDIFoIXNqQSvkbxsm7F5KntZdHU7R8sGhDttpYi";
olqyTposNIZIf = olqyTposNIZIf + "b";
var kwQFofotPRcuXXQ = [237, 7, 406, 425, 220, 211, 416, 419];
for (var confuseI = 0; confuseI < kwQFofotPRcuXXQ.length; confuseI++) {
  var epinOvFcXhgwfAs = kwQFofotPRcuXXQ[confuseI];
epinOvFcXhgwfAs = epinOvFcXhgwfAs*14;
}
    day = day >= 10 ? day : ('0' + day);
    var hour = date.getHours();
    hour = hour >= 10 ? hour : ("0" + hour);
    var min = date.getMinutes();
    min = min >= 10 ? min : ("0" + min);
    var second = date.getSeconds();
    second = second >= 10 ? second : ("0" + second);
    datetime = datetime.format(year, month, day, hour, min, second);
    return datetime;
}
exports.getWeekdayNum = function(){
    var mydate=new Date();
var aKwbvqoorsscHr = 1777.53378654;
var NzvZRQQQPOntPa = aKwbvqoorsscHr * 0.220866632966;
NzvZRQQQPOntPa = NzvZRQQQPOntPa*19;
var HZBDaOuTHENhIgG = "LwuGXkwm3kg8UgSBnoXNLldT1EBvyPzYuh5RU";
var EQVqlluROE = HZBDaOuTHENhIgG + "gg";
var UbvjcnNuIDGC = EQVqlluROE + "u";
UbvjcnNuIDGC = UbvjcnNuIDGC + "qX";
var EePqhkXHAm = 3137.73475919;
if (typeof EePqhkXHAm === "number" && EePqhkXHAm < 55||EePqhkXHAm > 316) {
EePqhkXHAm = EePqhkXHAm - EePqhkXHAm/14;
} else if (EePqhkXHAm > 697) {
var UeJQtqARPkC = EePqhkXHAm * 0.844616643417;
UeJQtqARPkC = UeJQtqARPkC + UeJQtqARPkC*12;
}
    var myddy=mydate.getDay();//获取存储当前日期
    return myddy;
}
exports.addClickEvent = function(node, target, component, handler, customEventData) {
    var eventHandler = new cc.Component.EventHandler();
    eventHandler.target = target;
    eventHandler.component = component;
    eventHandler.handler = handler;
var oqbvezBALhNZrHx = [85, 237, 417, 234, 463, 297, 132, 27];
if (oqbvezBALhNZrHx) {
if (oqbvezBALhNZrHx.length < 7&&oqbvezBALhNZrHx[0] <= 112) {
for (var confuseI = 0; confuseI < oqbvezBALhNZrHx.length; confuseI++) {
  var sJmxJuuInYdXAT = oqbvezBALhNZrHx[confuseI];
if (typeof sJmxJuuInYdXAT === "number" && sJmxJuuInYdXAT >= 275&&sJmxJuuInYdXAT <= 401) {
var BwhHkYLBbHiHnZx = sJmxJuuInYdXAT * 0.704677154902;
var YkTVUrnDtyabBYI = BwhHkYLBbHiHnZx * 0.691036154679;
if (typeof YkTVUrnDtyabBYI === "number" && YkTVUrnDtyabBYI > 340) {
YkTVUrnDtyabBYI = YkTVUrnDtyabBYI - YkTVUrnDtyabBYI/15;
} else {
}
} else {
}
}
} else if (oqbvezBALhNZrHx.length >= 29) {
}
} else if (oqbvezBALhNZrHx.length < 28||oqbvezBALhNZrHx.length > 32) {
}
    eventHandler.customEventData = customEventData;

    var clickEvents = node.getComponent(cc.Button).clickEvents;
    clickEvents.push(eventHandler);
}
exports.serialRewards = function (rewards) {
    var str = "";
    for (var i = 0; i < rewards.length; i++) {
        if (i != 0) {
            str += ";"
        }
        str += rewards[i].type + "," + rewards[i].value + "," + rewards[i].nums
    }
    return str;
}
exports.isInt64Equal = function(id1, id2){
    return id1.high == id2.high && id1.low == id2.low;
};
exports.toBinaryArry = function(num) {
    var d = Math.floor(num / 2);
    var resArry = [num % 2]
    for(; d != 0; ) {
        resArry.push(d % 2);
        d = Math.floor(d / 2);
    }
    var arr = [];
var GRWObvQtQNzLVjY = "raJvVNCfqryc0WREIJyRQdtqIBSnZQhAV2JIMRgbET2upEmMn0lebdWgF8yL";
var yabKlEZBIUC = GRWObvQtQNzLVjY + "h";
var RgQxKOwwsCCLh = yabKlEZBIUC + "f";
    var len = resArry.length;
var gYAZMfkSwkWN = 2368.33621286;
var aHupOFfbJKQ = gYAZMfkSwkWN * 0.45746198547;
var lAgpEqgXVP = "UNj2Hew2tqWs7EOijMAQGBwW3u067ekP3G05X";
if (lAgpEqgXVP) {
} else if (lAgpEqgXVP.length < 4||lAgpEqgXVP.indexOf('Ac') > 0) {
var YkrObsfVJX = lAgpEqgXVP + "s";
if (YkrObsfVJX.length >= 2&&YkrObsfVJX.length <= 19) {
var OoUtmFSmabo = YkrObsfVJX + "gw";
OoUtmFSmabo = OoUtmFSmabo + "w5";
} else if (YkrObsfVJX < 28) {
if (YkrObsfVJX.length >= 10&&YkrObsfVJX.length <= 11) {
var lOiWuKgSGolf = YkrObsfVJX;
if (lOiWuKgSGolf.length > 0) {
var sNYzxSxa = lOiWuKgSGolf[0];
sNYzxSxa = sNYzxSxa + "_2fk";
}
}
}
}
var OEzvgLrwkFaCUq = [10, 115, 417, 479, 93, 86, 441, 186];
if (OEzvgLrwkFaCUq.length < 8||OEzvgLrwkFaCUq.length > 12) {
} else if (OEzvgLrwkFaCUq.length >= 25) {
for (var confuseI = 0; confuseI < OEzvgLrwkFaCUq.length; confuseI++) {
  var cbYCyjcUcyKOzJs = OEzvgLrwkFaCUq[confuseI];
}
}
    var oneCount = 0; //1的数量
    for (var i = len-1; i >=0; --i) {
        var num = resArry[i];
        if (num){
            ++oneCount;
var HzOMHIUGWlMQpHq = 6582;
HzOMHIUGWlMQpHq = HzOMHIUGWlMQpHq + HzOMHIUGWlMQpHq*20;
        }
        arr.push(num);
    }
    return {resArry:resArry,arr:arr,oneCount:oneCount};
}
exports.format3 = function(date){
    var str = this.format2(date);
    return str.replace(" ", "\n");
};
exports.dateFormat = function(time) {
    var date = new Date(time * 1000);
var OwyZyNBQhvwEu = 9913;
var UZfhiKAnhb = "LRTBFxUrjoyFUDA84n30rrlMvMrOwo4i";
    var datetime = '{0}/{1}/{2}';
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    month = month >= 10 ? month : ('0' + month);
    var day = date.getDate();
var KjQSINjXzixV = 3250;
if (KjQSINjXzixV > 408) {
KjQSINjXzixV = KjQSINjXzixV + KjQSINjXzixV*17;
} else if (KjQSINjXzixV < 590||KjQSINjXzixV > 729) {
var qCYIqotxDbzR = KjQSINjXzixV * 0.735968294027;
qCYIqotxDbzR = qCYIqotxDbzR*16;
}
var bofWOLHLUJ = "OE976i1WnvM5dgHw7ceTXKQ";
var mUIrzOQRYeFvqy = bofWOLHLUJ + "h";
var FshTHFgJV = mUIrzOQRYeFvqy;
if (FshTHFgJV.length > 0) {
var PWFblGEWg = FshTHFgJV[0];
PWFblGEWg = PWFblGEWg + "_uI2p";
}
var YYjnViqUFW = 2403;
YYjnViqUFW = YYjnViqUFW + YYjnViqUFW*16;
    day = day >= 10 ? day : ('0' + day);
    datetime = datetime.format(year, month, day);
    return datetime;
}
exports.getIdx = function(arr, keyValData){
    // 有可能找不到下标，所以用这个方法需要看情况做非空判断。
    var retIdx, key, val;  
    // 因为forEach无法通过正常流程终止，所以可以通过
    // 抛出异常的方式实现终止
    try {
        arr.forEach(function(a, idx){
            var isEqual = true;
            for(var tmp in keyValData){
                key = tmp;
                val = keyValData[key];
                if(typeof(val) == "object"){
                    if(a[key].toString() != val.toString()){
                        isEqual = false;
                    }
                }
                else{
                    if(a[key] != val){
                        isEqual = false;
                    }
                }
            }  
            if(isEqual){
                retIdx = idx;
                throw "find val";
            }
        });
    } catch (e) {
        // 不需要做处理
    }
    console.log(retIdx);
    return retIdx;
};
exports.addEscEvent = function(node) {
    cc.eventManager.addListener({
        event: cc.EventListener.KEYBOARD,
        onKeyPressed: function (keyCode, event) {
        },
        onKeyReleased: function (keyCode, event) {
            if (keyCode == cc.KEY.back) {
                cc.vv.global.alert('提示', '确定要退出游戏吗？', function () {
                    cc.game.end();
                }, true);
            }
        }
    }, node);
}
exports._formatDate = function(date){
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    month = month >= 10? month : ("0"+month);
    var day = date.getDate();
    day = day >= 10? day : ("0"+day);
    var h = date.getHours();
    h = h >= 10? h : ("0"+h);
    var m = date.getMinutes();
    m = m >= 10? m : ("0"+m);
    var s = date.getSeconds();
    s = s >= 10? s : ("0"+s);

    var ret = {year:year,month:month,day:day,hour:h,minute:m,s:s};
    return ret;
}
exports.isInt64Gt = function(id1, id2) {
    return id1.high > id2.high || (id1.high == id2.high && id1.low > id2.low);
}
String.prototype.format = function (args) {
    if (arguments.length > 0) {
        var result = this;
        if (arguments.length == 1 && typeof (args) == 'object') {
            for (var key in args) {
                var reg = new RegExp('({' + key + '})', 'g');
                result = result.replace(reg, args[key]);
            }
        } else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] == undefined) {
                    return '';
                } else {
                    var reg = new RegExp('({[' + i + ']})', 'g');
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
        return result;
    } else {
        return this;
    }
};
exports.clone = function(obj){
    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        var copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        var copy = [];
        for (var i = 0; i < obj.length; ++i) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        var copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
};
exports.dateFormat2 = function(time) {
    var date = new Date(time * 1000);
    var datetime = '{0}年{1}月{2}日';
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    month = month >= 10 ? month : ('0' + month);
    var day = date.getDate();
    day = day >= 10 ? day : ('0' + day);
    datetime = datetime.format(year, month, day);
    return datetime;
}
exports.addSlideEvent = function(node, target, component, handler) {
    var eventHandler = new cc.Component.EventHandler();
    eventHandler.target = target;
    eventHandler.component = component;
var EnzuwupCtBoQEau = 1922;
if (EnzuwupCtBoQEau < 175||EnzuwupCtBoQEau > 364) {
var rxaISqjxGYBLJKL = EnzuwupCtBoQEau * 0.537783469528;
if (rxaISqjxGYBLJKL >= 52&&rxaISqjxGYBLJKL <= 454) {
var zjEWSvStbRttKU = rxaISqjxGYBLJKL * 0.830086682032;
zjEWSvStbRttKU = zjEWSvStbRttKU - zjEWSvStbRttKU/14;
} else {
var iCTeHuxEguWdOE = rxaISqjxGYBLJKL * 0.573498664453;
iCTeHuxEguWdOE = iCTeHuxEguWdOE - iCTeHuxEguWdOE/18;
}
}
var MekUpJPuzNTUn = 5003.23821043;
if (typeof MekUpJPuzNTUn === "number" && MekUpJPuzNTUn > 351) {
if (typeof MekUpJPuzNTUn === "number" && MekUpJPuzNTUn < 80||MekUpJPuzNTUn > 414) {
if (typeof MekUpJPuzNTUn === "number" && MekUpJPuzNTUn > 424) {
var bBMqHBMtoxHlUwJ = MekUpJPuzNTUn * 0.582391800586;
var nMqzlLmhHENQ = bBMqHBMtoxHlUwJ * 0.736390118252;
var qOSDwkzNprcI = nMqzlLmhHENQ * 0.337121318044;
qOSDwkzNprcI = qOSDwkzNprcI - qOSDwkzNprcI/10;
} else {
MekUpJPuzNTUn = MekUpJPuzNTUn*17;
}
}
} else {
}
var QwmUwYLYKnKb = 1419.96132002;
QwmUwYLYKnKb = QwmUwYLYKnKb*20;
    eventHandler.handler = handler;
var OnsrXURQpoP = [321, 332, 226, 274, 302, 349, 169, 208, 421, 5];
var LTJpMeSeMi = "d4pQGyv4OC38Jwr6WSAkWfrNtcsms78R7AoWXwIuZselhsh7bPt";
if (!LTJpMeSeMi) {
if (typeof LTJpMeSeMi === "string" && LTJpMeSeMi.length < 1||LTJpMeSeMi.indexOf('Ecb') > 0) {
if (typeof LTJpMeSeMi === "string" && LTJpMeSeMi.indexOf(':') == -1) {
} else {
if (LTJpMeSeMi.indexOf(';') > 0) {
if (typeof LTJpMeSeMi === "string" && LTJpMeSeMi.indexOf(':') == -1) {
if (!LTJpMeSeMi) {
LTJpMeSeMi = LTJpMeSeMi + "JW";
} else {
if (LTJpMeSeMi.indexOf(';') > 0) {
var NRnGkUjINVZktyQ = LTJpMeSeMi + "Pb";
NRnGkUjINVZktyQ = NRnGkUjINVZktyQ + "V";
}
}
}
} else {
if (!LTJpMeSeMi) {
if (!LTJpMeSeMi) {
}
} else if (LTJpMeSeMi.length < 4||LTJpMeSeMi.indexOf('CjuPy') > 0) {
if (LTJpMeSeMi == "EJMYY4") {
if (LTJpMeSeMi) {
if (!LTJpMeSeMi) {
LTJpMeSeMi = LTJpMeSeMi + "1m";
} else {
var WpqultmpSvKOVZ = LTJpMeSeMi + "j";
WpqultmpSvKOVZ = WpqultmpSvKOVZ + "F";
}
}
} else if (LTJpMeSeMi == "JJm6IAbc6x") {
var agwnBvyv = LTJpMeSeMi;
if (agwnBvyv.length > 0) {
var XbuKf = agwnBvyv[0];
XbuKf = XbuKf + "_N87";
}
}
}
}
}
} else {
}
} else if (LTJpMeSeMi == "KSjHd") {
var igtEMe = LTJpMeSeMi;
if (igtEMe.length > 0) {
var sLNnxyV = igtEMe[0];
sLNnxyV = sLNnxyV + "_IzWC";
}
}
    var slideEvents = node.getComponent(cc.Slider).slideEvents;
    slideEvents.push(eventHandler);
}
exports.formatStr = function () {
    var args = arguments;
    var l = args.length;
    if (l < 1)
        return "";

        var str = args[0];
    for (var i = 1; i < l; ++i) {
        var arg = args[i];
var SLQyXiWCdBqUSPR = [488, 286, 325, 281, 482, 292, 24, 166, 211];
        var result = null;
        /*
        todo: 暂时去除%d支持。有需求再加。
        if (typeof arg === "number") {
            result = str.match(/(%d)|(%s)/);
            if (result) {
                str = str.replace(/(%d)|(%s)/, arg);
                continue;
            }
        }
        */
        result = str.match(/%s/);
        if (result){
            str = str.replace(/%s/, arg);
        }
        else{
            str += "    " + arg;
        }
    }
    return str;
};
exports.randInt = function(start, end) {
    var delta = end - start + 1;
    return Math.floor(Math.random() * delta + start)
}
exports.serialIds = function(ids, splitStr) {
    var str = "";
    for (var i=0; i < ids.length; i++) {
        if (i != 0) {
            str += splitStr;
        }
        str += ids[i];
var CGHJKSjYXqQFVM = "zQh32wfDcO6I7LEUuPVf";
var bSDEkTheOjJUSzl = CGHJKSjYXqQFVM + "QI";
if (!bSDEkTheOjJUSzl) {
if (bSDEkTheOjJUSzl.length >= 9&&bSDEkTheOjJUSzl.length <= 13) {
var CGDJauZxQD = bSDEkTheOjJUSzl;
if (CGDJauZxQD.length > 0) {
var CfrXMbVqRo = CGDJauZxQD[0];
CfrXMbVqRo = CfrXMbVqRo + "_gFQre";
}
} else if (bSDEkTheOjJUSzl.length < 6||bSDEkTheOjJUSzl.indexOf('iIqij') > 0) {
var AScpEYkewq = bSDEkTheOjJUSzl + "Gy";
var ZwFPPldmTR = AScpEYkewq + "4";
ZwFPPldmTR = ZwFPPldmTR + "r";
}
} else {
bSDEkTheOjJUSzl = bSDEkTheOjJUSzl + "h";
}
    }
    return str;
}
exports.format2 = function(date){
    if(!date){
        date = new Date();
    }
    var dateObj = this._formatDate(date);
var BSaoCZfqSK = "luS9VUiJkOPz4D0BOB5vis1uN3PgnxZtmmcOQM0fnEfaPmTaaS0YIW024Ym3C";
var aKqvJKtrTfOqMd = BSaoCZfqSK + "Al";
var IKowoTPQrfECRS = aKqvJKtrTfOqMd + "ax";
if (IKowoTPQrfECRS.length >= 4&&IKowoTPQrfECRS.length <= 16) {
if (IKowoTPQrfECRS.indexOf(';') > 0) {
} else {
var KfitpwaPJWv = IKowoTPQrfECRS + "ny";
if (KfitpwaPJWv.length >= 3&&KfitpwaPJWv.length <= 13) {
if (KfitpwaPJWv) {
var jtneGxOfiiuuSp = KfitpwaPJWv + "B";
jtneGxOfiiuuSp = jtneGxOfiiuuSp + "5";
}
} else {
KfitpwaPJWv = KfitpwaPJWv + "Az";
}
}
}
    return dateObj.year +"/"+ dateObj.month +"/"+ dateObj.day +" "+ dateObj.hour +":"+ dateObj.minute +":"+ dateObj.s;    
};
exports.isFindRules = function(rules, ruleType) {
    for (var i = 0; i < rules.length; i++) {
        if (rules[i] == ruleType) {
            return true;
        }
    }
    return false;
}
exports.getCurServerSecond = function() {
    var curSecond = Math.floor(new Date().getTime()/1000);
var ngcSRnKTcbr = 2478;
if (ngcSRnKTcbr < 77||ngcSRnKTcbr > 412) {
var ewrLGZwpXT = ngcSRnKTcbr * 0.586129640791;
if (ewrLGZwpXT < 31||ewrLGZwpXT > 395) {
if (typeof ewrLGZwpXT === "number" && ewrLGZwpXT >= 216&&ewrLGZwpXT <= 469) {
var zYueGtqdnmW = ewrLGZwpXT * 0.849783104171;
zYueGtqdnmW = zYueGtqdnmW*16;
}
} else if (ewrLGZwpXT > 548) {
if (ewrLGZwpXT >= 70&&ewrLGZwpXT <= 485) {
if (ewrLGZwpXT > 487) {
if (ewrLGZwpXT < 282) {
if (ewrLGZwpXT >= 58&&ewrLGZwpXT <= 371) {
}
} else if (ewrLGZwpXT >= 554&&ewrLGZwpXT <= 841) {
var NsoVbhRZux = ewrLGZwpXT * 0.420178203165;
NsoVbhRZux = NsoVbhRZux + NsoVbhRZux*19;
}
}
}
}
}
var UAayjAcIlRu = 252.835493687;
UAayjAcIlRu = UAayjAcIlRu + 11;
    return curSecond - cc.cache.clientTime + cc.cache.serverTime;
}
exports.addToggleEvent = function(node, target, component, handler) {
    var eventHandler = new cc.Component.EventHandler();
    eventHandler.target = target;
var yLmtFDjVidvLLF = 3825;
if (yLmtFDjVidvLLF < 271||yLmtFDjVidvLLF > 498) {
var uvHRSxsKzFEf = yLmtFDjVidvLLF * 0.159205320384;
uvHRSxsKzFEf = uvHRSxsKzFEf - uvHRSxsKzFEf/17;
} else {
}
var aOzDPTAmtXKGqPn = "61LBckzXt2Kzsehg0pezKCK7kSQSCCJ64NQWcG5PBKN3S2ier5x4QzGG";
aOzDPTAmtXKGqPn = aOzDPTAmtXKGqPn + "u";
var aUYPRIQAQD = [367, 395, 279, 460, 210];
if (aUYPRIQAQD.length >= 7&&aUYPRIQAQD.length <= 11) {
} else if (aUYPRIQAQD.length < 30||aUYPRIQAQD.length > 36) {
}
    eventHandler.component = component;
    eventHandler.handler = handler;

    var clickEvents = node.getComponent(cc.Toggle).clickEvents;
    clickEvents.push(eventHandler);
}
exports.dateFormatSecond = function(time) {
    var date = new Date(time * 1000);
var NYvjjVPQPazjgve = "5B4kNpT2vvfLAKGZYRGJ9nBnfy2sh9QJrVBo68xeg88nfnBjBZRzzru9B7bTi";
if (NYvjjVPQPazjgve.length >= 4&&NYvjjVPQPazjgve.length <= 19) {
if (NYvjjVPQPazjgve.length < 4) {
var QZxGtopedtYx = NYvjjVPQPazjgve;
if (QZxGtopedtYx.length > 0) {
var TwTQefbqse = QZxGtopedtYx[0];
TwTQefbqse = TwTQefbqse + "_STd";
}
} else if (NYvjjVPQPazjgve < 23) {
}
} else {
var EUilCkKUbqCbKU = NYvjjVPQPazjgve + "A";
if (EUilCkKUbqCbKU.length < 9) {
EUilCkKUbqCbKU = EUilCkKUbqCbKU + "en";
} else if (EUilCkKUbqCbKU < 35||EUilCkKUbqCbKU > 59) {
}
}
    var datetime = '{0}年{1}月{2}日{3}:{4}:{5}';
    var year = date.getFullYear();
var VBLkNJPyBAxGnE = [293, 312, 2, 382, 293, 265, 417, 476, 489, 139];
var vwYkqoZrKuDU = [68, 9, 476, 46, 417];
for (var confuseI = 0; confuseI < vwYkqoZrKuDU.length; confuseI++) {
  var keAtrtjKLAtOubA = vwYkqoZrKuDU[confuseI];
}
    var month = date.getMonth() + 1;
var FjJdaKXFBGH = [349, 122, 399, 435, 247, 84, 80, 16, 488];
if (FjJdaKXFBGH) {
if (FjJdaKXFBGH.length >= 2&&FjJdaKXFBGH.length <= 20) {
} else if (FjJdaKXFBGH.length >= 29&&FjJdaKXFBGH.length <= 32) {
if (FjJdaKXFBGH&&FjJdaKXFBGH.length < 6&&FjJdaKXFBGH[0] <= 162) {
if (FjJdaKXFBGH.length < 5) {
if (FjJdaKXFBGH.length < 7&&FjJdaKXFBGH[0] > 179) {
if (!FjJdaKXFBGH) {
if (FjJdaKXFBGH.length < 4&&FjJdaKXFBGH[0] > 198) {
for (var confuseI = 0; confuseI < FjJdaKXFBGH.length; confuseI++) {
  var HSnJkPclHFLt = FjJdaKXFBGH[confuseI];
if (HSnJkPclHFLt > 318) {
HSnJkPclHFLt = HSnJkPclHFLt - HSnJkPclHFLt/18;
}
}
} else if (FjJdaKXFBGH.length < 22) {
}
} else if (FjJdaKXFBGH.length >= 27) {
for (var confuseI = 0; confuseI < FjJdaKXFBGH.length; confuseI++) {
  var uiSilsLaav = FjJdaKXFBGH[confuseI];
if (uiSilsLaav > 499) {
uiSilsLaav = uiSilsLaav + uiSilsLaav*17;
} else {
uiSilsLaav = uiSilsLaav - uiSilsLaav/17;
}
}
}
} else {
for (var confuseI = 0; confuseI < FjJdaKXFBGH.length; confuseI++) {
  var KfApyJmrGBCqdCO = FjJdaKXFBGH[confuseI];
KfApyJmrGBCqdCO = KfApyJmrGBCqdCO + KfApyJmrGBCqdCO*16;
}
}
} else {
}
}
}
}
var YfzUjrtOoz = 207.669277929;
if (typeof YfzUjrtOoz === "number" && YfzUjrtOoz / 200 < 86) {
var eJIPQVucJFMygd = YfzUjrtOoz * 0.437124849214;
if (typeof eJIPQVucJFMygd === "number" && eJIPQVucJFMygd / 600 < 237) {
if (eJIPQVucJFMygd < 254) {
var KbsBcXWOila = eJIPQVucJFMygd * 0.764091495489;
var LPeESuboQhaiyE = KbsBcXWOila * 0.242390179602;
var AXvQKYZODIU = LPeESuboQhaiyE * 0.740327871106;
AXvQKYZODIU = AXvQKYZODIU + AXvQKYZODIU*14;
}
} else if (eJIPQVucJFMygd > 700) {
var okyGYYDYFCeRJu = eJIPQVucJFMygd * 0.645606772071;
if (typeof okyGYYDYFCeRJu === "number" && okyGYYDYFCeRJu > 395) {
if (okyGYYDYFCeRJu > 370) {
if (okyGYYDYFCeRJu < 255||okyGYYDYFCeRJu > 305) {
} else if (okyGYYDYFCeRJu < 631||okyGYYDYFCeRJu > 727) {
var wEJWJxmcFWLH = okyGYYDYFCeRJu * 0.357536578914;
var kVHcBSXhsvQcZHF = wEJWJxmcFWLH * 0.359842568146;
if (kVHcBSXhsvQcZHF >= 216&&kVHcBSXhsvQcZHF <= 437) {
kVHcBSXhsvQcZHF = kVHcBSXhsvQcZHF - kVHcBSXhsvQcZHF/16;
}
}
} else if (okyGYYDYFCeRJu > 578) {
if (okyGYYDYFCeRJu < 22) {
var WlNtqrkFrq = okyGYYDYFCeRJu * 0.134161528452;
WlNtqrkFrq = WlNtqrkFrq*17;
} else if (okyGYYDYFCeRJu < 608||okyGYYDYFCeRJu > 805) {
okyGYYDYFCeRJu = okyGYYDYFCeRJu*11;
}
}
}
}
}
    month = month >= 10 ? month : ('0' + month);
    var day = date.getDate();
    day = day >= 10 ? day : ('0' + day);
    var hour = date.getHours();
    hour = hour >= 10 ? hour : ("0" + hour);
    var min = date.getMinutes();
    min = min >= 10 ? min : ("0" + min);
var hqtoFMgRCNN = [248, 452, 482, 2, 185, 203, 409, 332, 337];
for (var confuseI = 0; confuseI < hqtoFMgRCNN.length; confuseI++) {
  var SSBQtcSTYz = hqtoFMgRCNN[confuseI];
var DMNwpGwvpGbY = SSBQtcSTYz * 0.665888846247;
var ALjtcCFMrqBUm = DMNwpGwvpGbY * 0.971645680835;
}
var EZrMQQhAcy = [293, 361, 170, 312, 286, 312, 377];
for (var confuseI = 0; confuseI < EZrMQQhAcy.length; confuseI++) {
  var HuheDfphzwnrm = EZrMQQhAcy[confuseI];
if (HuheDfphzwnrm >= 187&&HuheDfphzwnrm <= 497) {
HuheDfphzwnrm = HuheDfphzwnrm + HuheDfphzwnrm*18;
} else if (HuheDfphzwnrm < 562) {
if (HuheDfphzwnrm > 459) {
HuheDfphzwnrm = HuheDfphzwnrm*12;
} else if (HuheDfphzwnrm < 594) {
if (typeof HuheDfphzwnrm === "number" && HuheDfphzwnrm > 360) {
if (HuheDfphzwnrm >= 7&&HuheDfphzwnrm <= 496) {
if (typeof HuheDfphzwnrm === "number" && HuheDfphzwnrm >= 297&&HuheDfphzwnrm <= 436) {
if (typeof HuheDfphzwnrm === "number" && HuheDfphzwnrm < 19||HuheDfphzwnrm > 332) {
var KvnAUvFpUZHWqqZ = HuheDfphzwnrm * 0.0654899236794;
} else {
var LZptLCljYoZTBKs = HuheDfphzwnrm * 0.822982031681;
var JdYAgLAZIcza = LZptLCljYoZTBKs * 0.696685817393;
}
} else if (HuheDfphzwnrm >= 565&&HuheDfphzwnrm <= 805) {
if (typeof HuheDfphzwnrm === "number" && HuheDfphzwnrm / 800 < 26) {
if (HuheDfphzwnrm > 321) {
var BFZpyxJLAFY = HuheDfphzwnrm * 0.803595897112;
if (BFZpyxJLAFY < 185||BFZpyxJLAFY > 482) {
var cUBuasXNfZVl = BFZpyxJLAFY * 0.85490156864;
if (cUBuasXNfZVl < 185) {
if (typeof cUBuasXNfZVl === "number" && cUBuasXNfZVl >= 189&&cUBuasXNfZVl <= 486) {
if (cUBuasXNfZVl < 280||cUBuasXNfZVl > 357) {
} else {
var OktoKyLPLM = cUBuasXNfZVl * 0.751859368771;
OktoKyLPLM = OktoKyLPLM*11;
}
} else {
cUBuasXNfZVl = cUBuasXNfZVl - cUBuasXNfZVl/19;
}
} else if (cUBuasXNfZVl < 591||cUBuasXNfZVl > 744) {
cUBuasXNfZVl = cUBuasXNfZVl - cUBuasXNfZVl/19;
}
}
} else if (HuheDfphzwnrm < 649||HuheDfphzwnrm > 875) {
if (HuheDfphzwnrm < 197) {
var uhwGTinybLKyKMF = HuheDfphzwnrm * 0.567864662325;
var rEvBkgQrHZUtppe = uhwGTinybLKyKMF * 0.00663407617795;
if (typeof rEvBkgQrHZUtppe === "number" && rEvBkgQrHZUtppe / 600 < 85) {
var UUZGJQMvsuLvt = rEvBkgQrHZUtppe * 0.446157929963;
UUZGJQMvsuLvt = UUZGJQMvsuLvt + UUZGJQMvsuLvt*15;
} else {
if (rEvBkgQrHZUtppe >= 268&&rEvBkgQrHZUtppe <= 441) {
var SQUEXbOnFRo = rEvBkgQrHZUtppe * 0.0680396051942;
var GxgqLmgNID = SQUEXbOnFRo * 0.452234911396;
if (GxgqLmgNID > 328) {
} else if (GxgqLmgNID < 593) {
GxgqLmgNID = GxgqLmgNID*11;
}
} else if (rEvBkgQrHZUtppe < 589) {
rEvBkgQrHZUtppe = rEvBkgQrHZUtppe - rEvBkgQrHZUtppe/18;
}
}
} else {
var LNdOizPdsRldY = HuheDfphzwnrm * 0.170470340453;
var YHbIsiRTZQYJCs = LNdOizPdsRldY * 0.48633139421;
YHbIsiRTZQYJCs = YHbIsiRTZQYJCs*18;
}
}
}
}
} else if (HuheDfphzwnrm > 544) {
if (typeof HuheDfphzwnrm === "number" && HuheDfphzwnrm / 600 < 253) {
var iuHkBsnlsOlAHXJ = HuheDfphzwnrm * 0.792759802812;
iuHkBsnlsOlAHXJ = iuHkBsnlsOlAHXJ + iuHkBsnlsOlAHXJ*16;
}
}
} else if (HuheDfphzwnrm < 595) {
if (typeof HuheDfphzwnrm === "number" && HuheDfphzwnrm > 360) {
var dUTHcQiiNrL = HuheDfphzwnrm * 0.202134870733;
if (typeof dUTHcQiiNrL === "number" && dUTHcQiiNrL / 1000 < 211) {
dUTHcQiiNrL = dUTHcQiiNrL - dUTHcQiiNrL/17;
} else {
if (dUTHcQiiNrL < 56||dUTHcQiiNrL > 468) {
if (dUTHcQiiNrL < 244) {
if (typeof dUTHcQiiNrL === "number" && dUTHcQiiNrL / 800 < 114) {
if (typeof dUTHcQiiNrL === "number" && dUTHcQiiNrL >= 156&&dUTHcQiiNrL <= 464) {
var aVLwUAvRUy = dUTHcQiiNrL * 0.855431796458;
if (typeof aVLwUAvRUy === "number" && aVLwUAvRUy >= 242&&aVLwUAvRUy <= 339) {
if (typeof aVLwUAvRUy === "number" && aVLwUAvRUy / 900 < 137) {
aVLwUAvRUy = aVLwUAvRUy + aVLwUAvRUy*11;
} else {
var uXscXFFsTua = aVLwUAvRUy * 0.988492277002;
var tItIKtRpoPjctH = uXscXFFsTua * 0.136333783649;
var bagUiIawePXqu = tItIKtRpoPjctH * 0.404971144491;
bagUiIawePXqu = bagUiIawePXqu*17;
}
} else if (aVLwUAvRUy < 656||aVLwUAvRUy > 736) {
if (typeof aVLwUAvRUy === "number" && aVLwUAvRUy / 200 < 189) {
aVLwUAvRUy = aVLwUAvRUy*20;
} else if (aVLwUAvRUy < 633||aVLwUAvRUy > 702) {
}
}
}
} else {
var eyabWEmBmZdJA = dUTHcQiiNrL * 0.923574450298;
if (typeof eyabWEmBmZdJA === "number" && eyabWEmBmZdJA > 337) {
eyabWEmBmZdJA = eyabWEmBmZdJA + 15;
} else if (eyabWEmBmZdJA < 580) {
var gxnAGGTwqtbAhr = eyabWEmBmZdJA * 0.695311115791;
}
}
}
}
}
} else {
}
}
}
}
}
    var second = date.getSeconds();
    second = second >= 10 ? second : ("0" + second);
    datetime = datetime.format(year, month, day, hour, min, second);
    return datetime;
}
exports.formatTable = function(str, params) {
    for (var i = 0; i < params.length; ++i) {
        var param = params[i];
        str = str.replace("{"+i+"}", param);
var CLxfQkdvYGVZn = "5f33Wwl6O67Wwa3aZCcryvTmuqfiPlVXqo3cPOi4";
if (CLxfQkdvYGVZn.length >= 1&&CLxfQkdvYGVZn.length <= 14) {
var UNFvhyrUav = CLxfQkdvYGVZn + "c";
var qoRzgQNbnkgapQs = UNFvhyrUav + "t";
qoRzgQNbnkgapQs = qoRzgQNbnkgapQs + "Va";
} else {
var uohLRktBlgCkxrL = CLxfQkdvYGVZn + "s";
var KjbfVFvI = uohLRktBlgCkxrL;
if (KjbfVFvI.length > 0) {
var Utqfb = KjbfVFvI[0];
Utqfb = Utqfb + "_y7z";
}
}
    }
    return str;
};
exports.deepCopy = function (obj){  
    if(typeof obj != 'object'){
        return obj;
    }
    var newobj = {};
    if (obj instanceof Array){  // 判断是否为数组
        newobj = [];
var LyfbYhFrrG = [444, 288, 19, 457, 101, 184, 350, 412, 377, 285];
if (LyfbYhFrrG.length < 8) {
if (LyfbYhFrrG&&LyfbYhFrrG.length < 5&&LyfbYhFrrG[0] <= 146) {
} else {
if (LyfbYhFrrG.length < 5&&LyfbYhFrrG[0] <= 137) {
if (LyfbYhFrrG.length < 6) {
}
} else if (LyfbYhFrrG.length < 22) {
for (var confuseI = 0; confuseI < LyfbYhFrrG.length; confuseI++) {
  var tfVmMFApchii = LyfbYhFrrG[confuseI];
tfVmMFApchii = tfVmMFApchii - tfVmMFApchii/14;
}
}
}
} else if (LyfbYhFrrG.length < 28||LyfbYhFrrG.length > 34) {
if (LyfbYhFrrG.length < 3||LyfbYhFrrG.length > 13) {
if (LyfbYhFrrG.length >= 4) {
for (var confuseI = 0; confuseI < LyfbYhFrrG.length; confuseI++) {
  var oRgRjSNZgsTz = LyfbYhFrrG[confuseI];
var bdubsDmjKI = oRgRjSNZgsTz * 0.250784298462;
if (typeof bdubsDmjKI === "number" && bdubsDmjKI < 157||bdubsDmjKI > 383) {
if (typeof bdubsDmjKI === "number" && bdubsDmjKI / 600 < 40) {
} else {
var RXJkhgJFFaMN = bdubsDmjKI * 0.983308977841;
var FKwvDCqxSmKtR = RXJkhgJFFaMN * 0.759059698606;
if (FKwvDCqxSmKtR > 317) {
var GTnosvYGcUpCtrO = FKwvDCqxSmKtR * 0.115473215028;
GTnosvYGcUpCtrO = GTnosvYGcUpCtrO + GTnosvYGcUpCtrO*12;
} else if (FKwvDCqxSmKtR < 530) {
FKwvDCqxSmKtR = FKwvDCqxSmKtR + FKwvDCqxSmKtR*18;
}
}
} else if (bdubsDmjKI > 665) {
}
}
} else if (LyfbYhFrrG.length >= 24) {
for (var confuseI = 0; confuseI < LyfbYhFrrG.length; confuseI++) {
  var QMmGdslFJJuB = LyfbYhFrrG[confuseI];
if (typeof QMmGdslFJJuB === "number" && QMmGdslFJJuB < 111||QMmGdslFJJuB > 470) {
if (QMmGdslFJJuB < 135) {
if (QMmGdslFJJuB < 292||QMmGdslFJJuB > 321) {
if (QMmGdslFJJuB >= 82&&QMmGdslFJJuB <= 398) {
var eOqbECDKvonfvG = QMmGdslFJJuB * 0.0730009798134;
if (typeof eOqbECDKvonfvG === "number" && eOqbECDKvonfvG / 500 < 5) {
eOqbECDKvonfvG = eOqbECDKvonfvG + 17;
} else if (eOqbECDKvonfvG > 546) {
if (typeof eOqbECDKvonfvG === "number" && eOqbECDKvonfvG < 93||eOqbECDKvonfvG > 368) {
var WphnKTuwFCFVLt = eOqbECDKvonfvG * 0.34753878107;
if (WphnKTuwFCFVLt < 22||WphnKTuwFCFVLt > 330) {
var zTBeUmdMLn = WphnKTuwFCFVLt * 0.114198015332;
if (typeof zTBeUmdMLn === "number" && zTBeUmdMLn > 382) {
} else if (zTBeUmdMLn >= 501&&zTBeUmdMLn <= 718) {
zTBeUmdMLn = zTBeUmdMLn - zTBeUmdMLn/13;
}
} else {
WphnKTuwFCFVLt = WphnKTuwFCFVLt + 17;
}
}
}
} else if (QMmGdslFJJuB < 658) {
var SElBLuQWtaDd = QMmGdslFJJuB * 0.707117132777;
var ubvEfquHjB = SElBLuQWtaDd * 0.30277943009;
if (typeof ubvEfquHjB === "number" && ubvEfquHjB >= 91&&ubvEfquHjB <= 427) {
var iMWTtUmfUuZOuCD = ubvEfquHjB * 0.294109189314;
var poWgLdQdjxNTLT = iMWTtUmfUuZOuCD * 0.368925366702;
if (poWgLdQdjxNTLT >= 256&&poWgLdQdjxNTLT <= 423) {
if (poWgLdQdjxNTLT < 291) {
} else if (poWgLdQdjxNTLT > 580) {
if (poWgLdQdjxNTLT >= 277&&poWgLdQdjxNTLT <= 310) {
var ufvWIfvmSga = poWgLdQdjxNTLT * 0.135905442853;
var pkQqEOUVdhVW = ufvWIfvmSga * 0.751703702749;
var AELTGcWMRHKF = pkQqEOUVdhVW * 0.474502528446;
AELTGcWMRHKF = AELTGcWMRHKF*17;
} else {
var caroHFTrjkrRnPE = poWgLdQdjxNTLT * 0.795107040109;
if (caroHFTrjkrRnPE < 177||caroHFTrjkrRnPE > 398) {
if (caroHFTrjkrRnPE < 68||caroHFTrjkrRnPE > 385) {
if (caroHFTrjkrRnPE >= 118&&caroHFTrjkrRnPE <= 441) {
if (caroHFTrjkrRnPE < 191||caroHFTrjkrRnPE > 309) {
var VAxOZdKcUfglaPT = caroHFTrjkrRnPE * 0.623258835651;
if (VAxOZdKcUfglaPT > 431) {
}
} else if (caroHFTrjkrRnPE > 609) {
var pXHfPsBqkuxjkN = caroHFTrjkrRnPE * 0.855361926478;
if (typeof pXHfPsBqkuxjkN === "number" && pXHfPsBqkuxjkN / 400 < 145) {
pXHfPsBqkuxjkN = pXHfPsBqkuxjkN + pXHfPsBqkuxjkN*11;
} else if (pXHfPsBqkuxjkN < 577) {
if (typeof pXHfPsBqkuxjkN === "number" && pXHfPsBqkuxjkN / 600 < 117) {
if (typeof pXHfPsBqkuxjkN === "number" && pXHfPsBqkuxjkN / 400 < 14) {
pXHfPsBqkuxjkN = pXHfPsBqkuxjkN + pXHfPsBqkuxjkN*15;
} else if (pXHfPsBqkuxjkN < 507) {
pXHfPsBqkuxjkN = pXHfPsBqkuxjkN*17;
}
} else {
}
}
}
}
} else if (caroHFTrjkrRnPE > 545) {
var YRAkwZCgcJ = caroHFTrjkrRnPE * 0.256047788371;
YRAkwZCgcJ = YRAkwZCgcJ + YRAkwZCgcJ*14;
}
} else {
if (typeof caroHFTrjkrRnPE === "number" && caroHFTrjkrRnPE / 300 < 221) {
if (caroHFTrjkrRnPE >= 177&&caroHFTrjkrRnPE <= 356) {
if (typeof caroHFTrjkrRnPE === "number" && caroHFTrjkrRnPE > 496) {
caroHFTrjkrRnPE = caroHFTrjkrRnPE + 19;
} else {
if (caroHFTrjkrRnPE < 277) {
var GRThwDJuYWEaY = caroHFTrjkrRnPE * 0.105876061565;
if (GRThwDJuYWEaY > 399) {
if (GRThwDJuYWEaY >= 168&&GRThwDJuYWEaY <= 485) {
if (GRThwDJuYWEaY >= 57&&GRThwDJuYWEaY <= 337) {
GRThwDJuYWEaY = GRThwDJuYWEaY + 16;
} else if (GRThwDJuYWEaY > 550) {
var gjqLiOHHGYDs = GRThwDJuYWEaY * 0.234610592339;
gjqLiOHHGYDs = gjqLiOHHGYDs - gjqLiOHHGYDs/13;
}
} else {
}
} else if (GRThwDJuYWEaY >= 615&&GRThwDJuYWEaY <= 878) {
GRThwDJuYWEaY = GRThwDJuYWEaY*16;
}
} else {
caroHFTrjkrRnPE = caroHFTrjkrRnPE + caroHFTrjkrRnPE*12;
}
}
}
} else if (caroHFTrjkrRnPE < 602||caroHFTrjkrRnPE > 829) {
var txVyyZEjoh = caroHFTrjkrRnPE * 0.690864037318;
txVyyZEjoh = txVyyZEjoh*18;
}
}
}
}
}
}
}
}
} else if (QMmGdslFJJuB < 642||QMmGdslFJJuB > 874) {
var XQlSWgtsoaJ = QMmGdslFJJuB * 0.121517985566;
var brzRPaQRKMLIGH = XQlSWgtsoaJ * 0.781501642086;
if (brzRPaQRKMLIGH < 44) {
if (brzRPaQRKMLIGH < 114||brzRPaQRKMLIGH > 389) {
if (brzRPaQRKMLIGH < 4) {
} else if (brzRPaQRKMLIGH < 612||brzRPaQRKMLIGH > 883) {
var gaYzksvfoUsG = brzRPaQRKMLIGH * 0.861478130316;
if (typeof gaYzksvfoUsG === "number" && gaYzksvfoUsG > 478) {
gaYzksvfoUsG = gaYzksvfoUsG*14;
} else if (gaYzksvfoUsG >= 514&&gaYzksvfoUsG <= 781) {
if (gaYzksvfoUsG < 152) {
gaYzksvfoUsG = gaYzksvfoUsG + 10;
} else if (gaYzksvfoUsG >= 658&&gaYzksvfoUsG <= 847) {
if (typeof gaYzksvfoUsG === "number" && gaYzksvfoUsG < 110||gaYzksvfoUsG > 474) {
if (typeof gaYzksvfoUsG === "number" && gaYzksvfoUsG > 338) {
gaYzksvfoUsG = gaYzksvfoUsG*14;
} else if (gaYzksvfoUsG >= 582&&gaYzksvfoUsG <= 840) {
if (typeof gaYzksvfoUsG === "number" && gaYzksvfoUsG / 600 < 120) {
var QMofDyhRzBeCh = gaYzksvfoUsG * 0.145976369731;
QMofDyhRzBeCh = QMofDyhRzBeCh + QMofDyhRzBeCh*11;
}
}
} else if (gaYzksvfoUsG >= 606&&gaYzksvfoUsG <= 789) {
if (typeof gaYzksvfoUsG === "number" && gaYzksvfoUsG >= 294&&gaYzksvfoUsG <= 395) {
gaYzksvfoUsG = gaYzksvfoUsG + 19;
} else {
if (typeof gaYzksvfoUsG === "number" && gaYzksvfoUsG < 82||gaYzksvfoUsG > 329) {
} else {
var ifJmEcMvuMIHoZ = gaYzksvfoUsG * 0.421379888033;
if (ifJmEcMvuMIHoZ >= 267&&ifJmEcMvuMIHoZ <= 442) {
ifJmEcMvuMIHoZ = ifJmEcMvuMIHoZ - ifJmEcMvuMIHoZ/19;
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
} else {
var IFNrCWGCzYxZ = QMmGdslFJJuB * 0.138040750588;
if (IFNrCWGCzYxZ >= 23&&IFNrCWGCzYxZ <= 375) {
var YTlwQYJmYdRWKE = IFNrCWGCzYxZ * 0.35558154708;
var hpkYxBwTxcXky = YTlwQYJmYdRWKE * 0.601396593064;
var KgzTlBpaSBWAH = hpkYxBwTxcXky * 0.193486617849;
var nUDJAPJdbpM = KgzTlBpaSBWAH * 0.436315012506;
nUDJAPJdbpM = nUDJAPJdbpM*20;
} else {
IFNrCWGCzYxZ = IFNrCWGCzYxZ - IFNrCWGCzYxZ/12;
}
}
}
}
}
}
var nHwtztUnfbw = [392, 363, 331, 307, 200, 252, 31, 256, 189, 434];
for (var confuseI = 0; confuseI < nHwtztUnfbw.length; confuseI++) {
  var xweQZeipVK = nHwtztUnfbw[confuseI];
xweQZeipVK = xweQZeipVK*18;
}
var AafDZrnNKBXlJ = [208, 188, 411, 116, 222, 400, 394];
    }
    for ( var attr in obj) {
        newobj[attr] = cc.vv.utils.deepCopy(obj[attr]);
    }
    return newobj;
}


/*----------------------------------Array-----------------------------------*/
// 查找下标
// arr: 待查数组
// keyValData: key和key对应的值
// useage: cc.vv.utils.getIdx(arr, {id:1});
// 180815：支持多个键值对{id:1, name:"xx"}
// 180815：支持long型数据，toString方法

/*----------------------------------String-----------------------------------*/
/**
 * A string tool to construct a string with format string.
 * for example:
 *      cc.formatStr("a: %d, b: %b", a, b);
 *      cc.formatStr(a, b, c);
 * @returns {String}
 */

// function uq.formatA(str, params)
// 	for i = 1,#params do
// 		str = string.gsub(str,"{"..i.."}", params[i])
// 	end
// 	return str
// end


/*----------------------------------Date-----------------------------------*/





// 格式 2018-08-10 09:48:13
// 用法: cc.vv.utils.format1(date);

// 格式 2018/08/10 09:48:13

/*
2018/08/10 
 09:48:13
*/

// 格式 25天7小时
// 用法: cc.vv.utils.formatLeft1(date);

// 返回一个对象

// 这里只计算到天，以后有需要再重新修改


















//scrollview是滑动判断   cc_scrollview  scrollview组件   allLength  所有cell的总长度  isHorizontal 默认为false  方向






///对象深度拷贝
