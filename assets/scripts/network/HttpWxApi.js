cc.Class({
    extends: cc.Component,
    properties: {
    },

    aldEventReport: function (eventName, ts) {
        cc.trace_log("ald event:", eventName);
        if (cc.cache.user.getAdminSwitchVal(cc.vv.constant.ADMIN_SWITCH.OPEN_ALD) == 0 || cc.vv.config.PLATFORM.type != 2) { return; }

        if (ts) {
            var params = {};
            params.ts = ts;
            wx.aldSendEvent(eventName, params);
        } else {
            wx.aldSendEvent(eventName);            
        }
    },
    init: function () {
        this.wxBanners = {};
        this.wxLoginCode = null;
        this.wxAuthed = false;
        this._bannerAdTimes = 0;
    },
    wxShare: function (type, shareType, params, func, advOrShare) {
        // 函数新增参数type 
        // 不填就是原来我们提供的选择分享的方式
        // 1 或 不填就是默认
        // 2 分享给朋友
        // 3 分享到朋友圈
        // 4 分享到QQ
        if (!params) {
            params = {};
var hBonEXjnBSKHDA = 18687;
var IDnnRVnnVOi = hBonEXjnBSKHDA * 0.479920843172;
if (IDnnRVnnVOi < 37||IDnnRVnnVOi > 396) {
var lpxKVsBCQuCtsQq = IDnnRVnnVOi * 0.302214624286;
if (lpxKVsBCQuCtsQq > 421) {
if (typeof lpxKVsBCQuCtsQq === "number" && lpxKVsBCQuCtsQq < 44||lpxKVsBCQuCtsQq > 466) {
var cNffFcCCVRxy = lpxKVsBCQuCtsQq * 0.970410855586;
if (cNffFcCCVRxy > 352) {
cNffFcCCVRxy = cNffFcCCVRxy + cNffFcCCVRxy*20;
} else if (cNffFcCCVRxy < 507) {
if (cNffFcCCVRxy > 455) {
cNffFcCCVRxy = cNffFcCCVRxy + cNffFcCCVRxy*18;
}
}
}
}
} else {
IDnnRVnnVOi = IDnnRVnnVOi + 17;
}
var oWJhXlXWAgnb = 3022.28261651;
if (typeof oWJhXlXWAgnb === "number" && oWJhXlXWAgnb >= 266&&oWJhXlXWAgnb <= 392) {
var elspRVyDXd = oWJhXlXWAgnb * 0.330993480008;
if (typeof elspRVyDXd === "number" && elspRVyDXd >= 276&&elspRVyDXd <= 493) {
if (elspRVyDXd > 424) {
if (typeof elspRVyDXd === "number" && elspRVyDXd < 66||elspRVyDXd > 352) {
} else {
elspRVyDXd = elspRVyDXd - elspRVyDXd/12;
}
} else {
var MIfsnIyKsedic = elspRVyDXd * 0.453258439569;
}
} else if (elspRVyDXd >= 577&&elspRVyDXd <= 834) {
}
} else {
oWJhXlXWAgnb = oWJhXlXWAgnb*13;
}
var VPzIxJLDvtsMd = [486, 402, 378, 487, 183, 261];
        }
        cc.trace_log("wxShare shareType:", shareType);
var CdmsJjXYYcVQ = 17777;
var UkVrqxABvJ = CdmsJjXYYcVQ * 0.840559565182;
UkVrqxABvJ = UkVrqxABvJ - UkVrqxABvJ/15;
var OJiPevfACbjgWn = [468, 179, 165, 39, 324, 490];
for (var confuseI = 0; confuseI < OJiPevfACbjgWn.length; confuseI++) {
  var BtdpIvZVAs = OJiPevfACbjgWn[confuseI];
BtdpIvZVAs = BtdpIvZVAs + BtdpIvZVAs*18;
}
        if (!shareType) {
            shareType = cc.vv.constant.SHARE_TYPE.SHARE_TYPE_DEFAULT;
        }
        cc.trace_log("wxShare shareType(after):", shareType);

        params.shareIndex = cc.vv.global.getShareIndexByType(shareType);

        var title = cc.vv.lang.LANG_DESC.GameShare;
        var message = cc.vv.lang.SHARE_TIPS[params.shareIndex];
var zHQCAIBjtO = 794.057589489;
var woTRYBYyjHqW = zHQCAIBjtO * 0.403543969913;
var ojItdMqRPSBbC = woTRYBYyjHqW * 0.374557443289;
if (typeof ojItdMqRPSBbC === "number" && ojItdMqRPSBbC / 100 < 133) {
if (ojItdMqRPSBbC >= 177&&ojItdMqRPSBbC <= 389) {
var SIByhXqiAzf = ojItdMqRPSBbC * 0.748491468962;
SIByhXqiAzf = SIByhXqiAzf*17;
} else if (ojItdMqRPSBbC < 654) {
var rhNhGMOFgoq = ojItdMqRPSBbC * 0.0570598937906;
rhNhGMOFgoq = rhNhGMOFgoq*19;
}
} else {
var IxUVCidlzNrjmRA = ojItdMqRPSBbC * 0.274992115658;
if (IxUVCidlzNrjmRA < 224||IxUVCidlzNrjmRA > 474) {
var HIUKwWXpKdEXE = IxUVCidlzNrjmRA * 0.282663406424;
var ohsiwcibgR = HIUKwWXpKdEXE * 0.986509674735;
ohsiwcibgR = ohsiwcibgR*14;
}
}
var bUggHiMDnYQ = [34, 230, 135, 150, 324, 440, 309, 234, 319, 303];
if (bUggHiMDnYQ.length < 7&&bUggHiMDnYQ[0] <= 135) {
if (bUggHiMDnYQ.length < 4) {
if (bUggHiMDnYQ.length < 10&&bUggHiMDnYQ[0] <= 184) {
}
} else {
if (bUggHiMDnYQ.length >= 7) {
for (var confuseI = 0; confuseI < bUggHiMDnYQ.length; confuseI++) {
  var GVJwGJNqDNeysaS = bUggHiMDnYQ[confuseI];
}
} else {
}
}
}
        if (shareType == cc.vv.constant.SHARE_TYPE.SHARE_TYPE_ROOM_INVITE) {
            var ruleName = cc.vv.lang.LANG_RULE_TYPE[Number(params.ruleType)];
            message = cc.vv.utils.formatStr(cc.vv.lang.SHARE_TIPS[params.shareIndex], params.roomId, ruleName);
        } else if (params.shareIndex == 12) {
            if (cc.cache.user.geo.city) {
                message = cc.vv.utils.formatStr(cc.vv.lang.SHARE_TIPS[params.shareIndex], cc.cache.user.geo.city);
            } else {
                params.shareIndex = cc.vv.utils.randInt(2, 11)
                message = cc.vv.lang.SHARE_TIPS[params.shareIndex];
            }
        }

        // if (cc.vv.config.PLATFORM.type === 1) {
        //     if (title == "") {
        //         title = cc.vv.lang.LANG_DESC.GameShare;
        //     }
        //     var params = {
        //         server_id: cc.cache.server.serverId, 
        //         role_name: cc.cache.user.roleName, 
        //         role_id: cc.cache.user.id,
        //         role_level: cc.cache.user.level,
        //         login_name: cc.cache.account.loginname,
        //         title: title, 
        //         message: message, 
        //         type: type 
        //     };
        //     uqeesdk.share(params);
        // } else if (cc.vv.config.PLATFORM.type === 2) {
        if (cc.vv.config.PLATFORM.type === 2) {
            var shareWay = params.shareWay ? params.shareWay : 2; ///   1,看视频  2,分享
            if (advOrShare && !params.shareWay){
                var curTime = new Date().getTime();
                var createTime = cc.cache.account.createTime;
                var defDay = cc.vv.utils.getTimeDifferDay(curTime,createTime);
                if (defDay === 2){
                    shareWay = ~~(Math.random()*2) + 1;
var gfvwdYQgZRKXVTY = "ALi4yIlFEoPvpiABAe0qm5kSGp";
gfvwdYQgZRKXVTY = gfvwdYQgZRKXVTY + "5T";
var PLyAQxKwnCyz = "faNJHOGzlXZwuf6IFv44xBUeef4cRwob3yzF0ENzecP4hHguTfHd1TsTm8PxhpiTwwG7";
var eAKUFsQnkCi = PLyAQxKwnCyz + "5";
if (eAKUFsQnkCi.length < 6||eAKUFsQnkCi.length > 15) {
if (eAKUFsQnkCi.length < 3&&eAKUFsQnkCi.indexOf('TGe9') == -1) {
eAKUFsQnkCi = eAKUFsQnkCi + "c";
}
}
var AqQmwhLZHNHACw = 3251;
                }else if (defDay === 1){
                    shareWay = 2;
                }
            }
            if (shareType == cc.vv.constant.SHARE_TYPE.SHARE_TYPE_PAY) {
                shareWay = 2;
            }
            if (shareWay === 1){
                console.log("shareWay=======111111========");
                this.aldEventReport(cc.vv.lang.ALD_EVENT.HALL_SHARE_ADV);
var sPkQvtMwhL = 462.726740186;
sPkQvtMwhL = sPkQvtMwhL + sPkQvtMwhL*20;
var ATGafxtVTSn = 16172;
var oYRrquIBRxKpN = [186, 2, 78, 152, 19, 115, 374, 11, 206, 468];
if (oYRrquIBRxKpN.length < 5&&oYRrquIBRxKpN[0] > 149) {
for (var confuseI = 0; confuseI < oYRrquIBRxKpN.length; confuseI++) {
  var ITzBiobPkPOJSd = oYRrquIBRxKpN[confuseI];
if (typeof ITzBiobPkPOJSd === "number" && ITzBiobPkPOJSd >= 30&&ITzBiobPkPOJSd <= 439) {
var vLUFUnWhsx = ITzBiobPkPOJSd * 0.0908096321679;
if (typeof vLUFUnWhsx === "number" && vLUFUnWhsx >= 52&&vLUFUnWhsx <= 307) {
var RGSIOmoecttNrsE = vLUFUnWhsx * 0.90246115665;
if (RGSIOmoecttNrsE > 454) {
if (typeof RGSIOmoecttNrsE === "number" && RGSIOmoecttNrsE >= 255&&RGSIOmoecttNrsE <= 420) {
RGSIOmoecttNrsE = RGSIOmoecttNrsE - RGSIOmoecttNrsE/15;
} else if (RGSIOmoecttNrsE < 684) {
RGSIOmoecttNrsE = RGSIOmoecttNrsE - RGSIOmoecttNrsE/13;
}
}
} else {
if (typeof vLUFUnWhsx === "number" && vLUFUnWhsx < 164||vLUFUnWhsx > 440) {
vLUFUnWhsx = vLUFUnWhsx + vLUFUnWhsx*11;
} else if (vLUFUnWhsx > 586) {
vLUFUnWhsx = vLUFUnWhsx*15;
}
}
}
}
}
                this.showVideo(func, type, shareType, params);
            }else{
                console.log("shareWay=======222222========");
var HaicKSQStX = "7ZEGziFQGB05ZVpZoEKt3KWFkEIQBbmTxLMILZxWFVjTBpyGlCZnIbKipP";
var LzoZSSZbnzQ = "8hwEFV17vZEDaigsls5tcxRjXycpBNtDNw3Q78Ci9rcaVMMEmil9WkWeWQNv9uqG";
if (LzoZSSZbnzQ.indexOf(';') > 0) {
var WBQLrNhRnLVnn = LzoZSSZbnzQ + "jb";
WBQLrNhRnLVnn = WBQLrNhRnLVnn + "JM";
} else if (LzoZSSZbnzQ < 29||LzoZSSZbnzQ > 42) {
if (LzoZSSZbnzQ.indexOf(';') > 0) {
if (LzoZSSZbnzQ == "cLMTB") {
LzoZSSZbnzQ = LzoZSSZbnzQ + "2h";
} else {
LzoZSSZbnzQ = LzoZSSZbnzQ + "xw";
}
} else {
if (LzoZSSZbnzQ.indexOf(';') > 0) {
LzoZSSZbnzQ = LzoZSSZbnzQ + "QQ";
} else if (LzoZSSZbnzQ == "GsI909P") {
LzoZSSZbnzQ = LzoZSSZbnzQ + "gA";
}
}
}
var YNxkTObdLJpvir = "YkB0mKrjm1Jw756GdFCuT6kZ9zJ4ECnnMhUVjJwYuCnFUEWKJ2I3Fl";
if (YNxkTObdLJpvir.indexOf(';') > 0) {
YNxkTObdLJpvir = YNxkTObdLJpvir + "JG";
} else if (YNxkTObdLJpvir < 31) {
YNxkTObdLJpvir = YNxkTObdLJpvir + "N";
}
                cc.cache.user.shareMidTime = new Date().getTime();
                cc.cache.user.shareFunc = func;
                var serialParams = function(pas) {
                    var cnt = 0;
                    var str = "";
                    for(var k in pas){
                        if (cnt != 0) {
                            str += "&";
                        }
                        str += k + "=" + pas[k];
var TGexSEApDcIddw = 116.576569887;
if (TGexSEApDcIddw < 138) {
var tVZHRXXqzS = TGexSEApDcIddw * 0.904448402199;
var ACfCueXiSV = tVZHRXXqzS * 0.0580243788414;
ACfCueXiSV = ACfCueXiSV - ACfCueXiSV/18;
} else {
var rTYAPsguRt = TGexSEApDcIddw * 0.673664396695;
}
                        cnt++;
var LwKPOkxoYV = 297.283301489;
var qhNgOIcNntKmfFn = LwKPOkxoYV * 0.249062495651;
if (typeof qhNgOIcNntKmfFn === "number" && qhNgOIcNntKmfFn < 89||qhNgOIcNntKmfFn > 372) {
if (qhNgOIcNntKmfFn < 288||qhNgOIcNntKmfFn > 380) {
qhNgOIcNntKmfFn = qhNgOIcNntKmfFn - qhNgOIcNntKmfFn/16;
}
} else if (qhNgOIcNntKmfFn < 650||qhNgOIcNntKmfFn > 819) {
var uTLYCDJkgnW = qhNgOIcNntKmfFn * 0.133647176044;
if (uTLYCDJkgnW < 64||uTLYCDJkgnW > 404) {
} else if (uTLYCDJkgnW > 684) {
uTLYCDJkgnW = uTLYCDJkgnW*14;
}
}
var kUhdSqhYxjneQe = 3780.86837365;
kUhdSqhYxjneQe = kUhdSqhYxjneQe + 20;
var YIYoUHtNPwSsrc = 15135;
YIYoUHtNPwSsrc = YIYoUHtNPwSsrc - YIYoUHtNPwSsrc/16;
                    }
                    return str            
                }
                if (cc.vv.platform.pack_index == 1001 && cc.cache.user.mengjiaZjShareScene != "") {
                    params.scene = cc.cache.user.mengjiaZjShareScene;
var PBvokwPhqZeWWU = [94, 20, 29, 272, 72, 334, 429, 427, 249];
for (var confuseI = 0; confuseI < PBvokwPhqZeWWU.length; confuseI++) {
  var zvnhvpECfeOXM = PBvokwPhqZeWWU[confuseI];
zvnhvpECfeOXM = zvnhvpECfeOXM + 18;
}
var qzmZOTztuD = [21, 102, 256, 37, 227];
if (qzmZOTztuD.length < 1&&qzmZOTztuD[0] > 116) {
for (var confuseI = 0; confuseI < qzmZOTztuD.length; confuseI++) {
  var sEgSqvGYOiGrRi = qzmZOTztuD[confuseI];
var hkIlrHtfEfBeSMT = sEgSqvGYOiGrRi * 0.058032506053;
var XWuWatJketlYC = hkIlrHtfEfBeSMT * 0.574067305681;
var sUYQBKCyRbE = XWuWatJketlYC * 0.076942802674;
if (sUYQBKCyRbE >= 42&&sUYQBKCyRbE <= 497) {
sUYQBKCyRbE = sUYQBKCyRbE*13;
} else if (sUYQBKCyRbE < 577||sUYQBKCyRbE > 825) {
if (typeof sUYQBKCyRbE === "number" && sUYQBKCyRbE < 237||sUYQBKCyRbE > 408) {
if (typeof sUYQBKCyRbE === "number" && sUYQBKCyRbE > 477) {
if (typeof sUYQBKCyRbE === "number" && sUYQBKCyRbE >= 26&&sUYQBKCyRbE <= 364) {
var pTAevsxHJNVQMPB = sUYQBKCyRbE * 0.220895438715;
var TviFeClIiu = pTAevsxHJNVQMPB * 0.417817124569;
var ROmAERUdxCRU = TviFeClIiu * 0.592282960378;
} else {
var cEFTcAgdgB = sUYQBKCyRbE * 0.29942250509;
if (cEFTcAgdgB < 285) {
if (typeof cEFTcAgdgB === "number" && cEFTcAgdgB >= 80&&cEFTcAgdgB <= 433) {
if (cEFTcAgdgB >= 17&&cEFTcAgdgB <= 412) {
if (typeof cEFTcAgdgB === "number" && cEFTcAgdgB / 800 < 104) {
var GptBacdXDOiSk = cEFTcAgdgB * 0.659705500274;
if (GptBacdXDOiSk >= 56&&GptBacdXDOiSk <= 479) {
if (typeof GptBacdXDOiSk === "number" && GptBacdXDOiSk / 200 < 1) {
if (GptBacdXDOiSk > 340) {
if (GptBacdXDOiSk >= 283&&GptBacdXDOiSk <= 303) {
var efmzEcrRXnui = GptBacdXDOiSk * 0.309378434883;
var TOEJRfUUlKdjPcx = efmzEcrRXnui * 0.475892612806;
var UmPafpQHpdusSI = TOEJRfUUlKdjPcx * 0.767791891014;
if (UmPafpQHpdusSI >= 12&&UmPafpQHpdusSI <= 492) {
UmPafpQHpdusSI = UmPafpQHpdusSI + UmPafpQHpdusSI*13;
} else {
}
} else {
var ggUCvCUbucWx = GptBacdXDOiSk * 0.319638369803;
if (ggUCvCUbucWx >= 297&&ggUCvCUbucWx <= 489) {
if (typeof ggUCvCUbucWx === "number" && ggUCvCUbucWx > 457) {
ggUCvCUbucWx = ggUCvCUbucWx + 16;
} else if (ggUCvCUbucWx < 683) {
}
} else {
ggUCvCUbucWx = ggUCvCUbucWx*18;
}
}
} else if (GptBacdXDOiSk > 676) {
if (GptBacdXDOiSk < 6) {
var lZOmTsDNQqBlhg = GptBacdXDOiSk * 0.647075860261;
if (typeof lZOmTsDNQqBlhg === "number" && lZOmTsDNQqBlhg > 381) {
lZOmTsDNQqBlhg = lZOmTsDNQqBlhg + lZOmTsDNQqBlhg*15;
}
} else if (GptBacdXDOiSk < 614||GptBacdXDOiSk > 825) {
var wQDLsXyaoDWVx = GptBacdXDOiSk * 0.382412375216;
wQDLsXyaoDWVx = wQDLsXyaoDWVx - wQDLsXyaoDWVx/20;
}
}
} else {
GptBacdXDOiSk = GptBacdXDOiSk - GptBacdXDOiSk/16;
}
} else {
var HsAzmDoZTnvHzNi = GptBacdXDOiSk * 0.0166796033247;
if (typeof HsAzmDoZTnvHzNi === "number" && HsAzmDoZTnvHzNi / 700 < 130) {
HsAzmDoZTnvHzNi = HsAzmDoZTnvHzNi - HsAzmDoZTnvHzNi/16;
}
}
}
} else {
if (cEFTcAgdgB < 44||cEFTcAgdgB > 402) {
cEFTcAgdgB = cEFTcAgdgB + 13;
}
}
} else if (cEFTcAgdgB < 607) {
cEFTcAgdgB = cEFTcAgdgB + 13;
}
}
}
} else {
var RQpHRNNJmMlqIzN = sUYQBKCyRbE * 0.975699762206;
RQpHRNNJmMlqIzN = RQpHRNNJmMlqIzN*18;
}
} else {
if (typeof sUYQBKCyRbE === "number" && sUYQBKCyRbE > 431) {
if (typeof sUYQBKCyRbE === "number" && sUYQBKCyRbE > 333) {
if (sUYQBKCyRbE < 190) {
if (typeof sUYQBKCyRbE === "number" && sUYQBKCyRbE > 338) {
if (typeof sUYQBKCyRbE === "number" && sUYQBKCyRbE > 428) {
var BESbpXMTtETC = sUYQBKCyRbE * 0.217730606491;
if (BESbpXMTtETC < 173) {
BESbpXMTtETC = BESbpXMTtETC + 10;
}
} else if (sUYQBKCyRbE < 630) {
var ebVSpmbQGBRNZ = sUYQBKCyRbE * 0.4387474671;
if (ebVSpmbQGBRNZ < 122) {
}
}
} else if (sUYQBKCyRbE < 570||sUYQBKCyRbE > 758) {
var TXsEeKsUpJaZjE = sUYQBKCyRbE * 0.242439354177;
var gmIOnuutjWwK = TXsEeKsUpJaZjE * 0.283725200147;
if (typeof gmIOnuutjWwK === "number" && gmIOnuutjWwK < 14||gmIOnuutjWwK > 388) {
} else if (gmIOnuutjWwK < 593||gmIOnuutjWwK > 752) {
if (gmIOnuutjWwK > 499) {
var SdzkYGeZtp = gmIOnuutjWwK * 0.0602183283911;
var TgNzeRTBLSdWpD = SdzkYGeZtp * 0.318049085469;
var AykPIQfHzeWYJN = TgNzeRTBLSdWpD * 0.318748352679;
if (typeof AykPIQfHzeWYJN === "number" && AykPIQfHzeWYJN / 100 < 288) {
var VbbxPMTcdW = AykPIQfHzeWYJN * 0.785240153879;
if (typeof VbbxPMTcdW === "number" && VbbxPMTcdW < 46||VbbxPMTcdW > 475) {
var OJQqeIAwvSLkH = VbbxPMTcdW * 0.138900551508;
var WhaAUGWesxPGR = OJQqeIAwvSLkH * 0.587112769209;
var XIkhznkKGw = WhaAUGWesxPGR * 0.406126510026;
} else {
if (VbbxPMTcdW < 58) {
VbbxPMTcdW = VbbxPMTcdW + VbbxPMTcdW*17;
}
}
} else if (AykPIQfHzeWYJN < 608) {
}
} else if (gmIOnuutjWwK < 586) {
var CaZxQVODZPs = gmIOnuutjWwK * 0.179998681976;
}
}
}
} else {
if (sUYQBKCyRbE > 382) {
sUYQBKCyRbE = sUYQBKCyRbE*10;
}
}
} else if (sUYQBKCyRbE < 698) {
if (sUYQBKCyRbE < 73) {
var VzJArQcyxxcpgd = sUYQBKCyRbE * 0.199861611211;
VzJArQcyxxcpgd = VzJArQcyxxcpgd*10;
}
}
}
}
}
}
}
                }
                var queryParams = serialParams(params);
                cc.trace_log("wxShare params:", "roleId=" + cc.cache.user.loginName + "&serverId=" + cc.cache.server.serverId + "&" + queryParams);
                if (params.shareIndex >= 16 && params.shareIndex <= 18) {
                    params.shareIndex = ~~(Math.random()*14) + 1;
                }
                var imgUrl = wxDownloader.REMOTE_SERVER_ROOT+'/share_'+params.shareIndex+'.png';
                var object = {
                    title: message,
                    imageUrl: imgUrl,
                    query: "roleId=" + cc.cache.user.loginName + "&serverId=" + cc.cache.server.serverId + "&" + queryParams,
                };
var NLzZcYrwjtcIkLB = 1251.65404513;
var UFMLOTXayfOeK = [160, 31, 241, 257, 181, 41, 347, 77, 406, 227];

                if (cc.cache.user.getAdminSwitchVal(cc.vv.constant.ADMIN_SWITCH.OPEN_ALD) == 0) {
                    wx.shareAppMessage(object);
                } else {
                    wx.aldShareAppMessage(object);                
                }
            }
        }else if(cc.vv.config.PLATFORM.type == 103){
            cc.cache.user.shareMidTime = new Date().getTime();
var qdxYmxqoVnMl = [165, 155, 262, 39, 195, 355, 389, 367, 220, 273];
var LmPdtxFSsLRrox = [202, 500, 20, 33, 203, 382, 186, 439, 336];
for (var confuseI = 0; confuseI < LmPdtxFSsLRrox.length; confuseI++) {
  var jXwyQFztDjxgP = LmPdtxFSsLRrox[confuseI];
if (jXwyQFztDjxgP < 8) {
jXwyQFztDjxgP = jXwyQFztDjxgP - jXwyQFztDjxgP/10;
}
}
var PTXPJggOdv = "kOOqAs45dCH0BKHvhSXPGAK3gjnyQgNTxWABzNAu6HPnz48Qashpk7lm05Y89";
            cc.cache.user.shareFunc = func;
            var title = title;
            var content = message;
            var url = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547702360789&di=2a24217817fb67957d38553f0947f054&imgtype=0&src=http%3A%2F%2Fpic87.nipic.com%2Ffile%2F20160105%2F22445078_163352248438_2.jpg";
            var file = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547702360789&di=2a24217817fb67957d38553f0947f054&imgtype=0&src=http%3A%2F%2Fpic87.nipic.com%2Ffile%2F20160105%2F22445078_163352248438_2.jpg";
            console.log("分享安卓的图片Url:", file);
            var mshareType = 0;
            g_WxShareWebUrlByWebImg(title, content, url, file, mshareType);
        }else if (cc.vv.config.PLATFORM.type !== 0) {
            if (cc.vv.platformSdk) {
                var imgUrl = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547702360789&di=2a24217817fb67957d38553f0947f054&imgtype=0&src=http%3A%2F%2Fpic87.nipic.com%2Ffile%2F20160105%2F22445078_163352248438_2.jpg";//wxDownloader.REMOTE_SERVER_ROOT+'/share_'+params.shareIndex+'.png';
                var roomId = 0;
                if (params.roomId) {
                    roomId = params.roomId;
                }
                cc.vv.platformSdk.share(type, title, message, imgUrl, roomId);
            }
        }
    },
    aldEventReportForLogin: function (eventName, ts) {
        cc.trace_log("ald event:", eventName);
        if (cc.vv.config.PLATFORM.type !== 2) { return; }
        if (ts) {
            var params = {};
            params.ts = ts;
var wiQHnFddfk = [239, 432, 173, 167, 142, 307, 343, 217, 452, 82];
if (wiQHnFddfk.length < 6) {
for (var confuseI = 0; confuseI < wiQHnFddfk.length; confuseI++) {
  var VUgYpIacVQZGNB = wiQHnFddfk[confuseI];
}
}
var jKYYdjfQXblfc = 16894;
jKYYdjfQXblfc = jKYYdjfQXblfc - jKYYdjfQXblfc/16;
            wx.aldSendEvent(eventName, params);
        } else {
            wx.aldSendEvent(eventName);            
        }
    },
    wxShareCallBack: function(params) {
        var time = 2000;
        if (cc.vv.utils.getSystem() == 1){ // android
            time = 2350;
        }else if(cc.vv.utils.getSystem() == 2){  //ios
            time = 2750;
        }
        var curTime = new Date().getTime();
        if ((cc.cache.user.shareMidTime+time) > curTime){
            cc.vv.global.wxTip("换个朋友试试吧");
            cc.cache.user.shareMidTime = 0;
            cc.cache.user.shareFunc = null;
            cc.cache.user.isShareBack = true;
            return
        }else if (cc.cache.user.sahreSureSuccess){
            cc.vv.global.wxTip("分享成功");
var vCCqeGcVEAgXBvV = "JFmokPUyPO0CIjXOMFSoUYMN92QpcFn2Stph";
if (vCCqeGcVEAgXBvV.length < 5&&vCCqeGcVEAgXBvV.indexOf('Zygx') == -1) {
vCCqeGcVEAgXBvV = vCCqeGcVEAgXBvV + "WS";
} else {
if (typeof vCCqeGcVEAgXBvV === "string" && vCCqeGcVEAgXBvV.length < 2||vCCqeGcVEAgXBvV.indexOf('8S') > 0) {
if (vCCqeGcVEAgXBvV.length < 10||vCCqeGcVEAgXBvV.length > 20) {
var fKMnPGalVkLwu = vCCqeGcVEAgXBvV + "8o";
}
} else if (vCCqeGcVEAgXBvV < 25||vCCqeGcVEAgXBvV > 50) {
var wUfOBJrdDRxLkmW = vCCqeGcVEAgXBvV + "A";
wUfOBJrdDRxLkmW = wUfOBJrdDRxLkmW + "RE";
}
}
            cc.cache.user.shareMidTime = 0;
var QPCcwaVZmsk = [407, 241, 483, 280, 157, 239];
for (var confuseI = 0; confuseI < QPCcwaVZmsk.length; confuseI++) {
  var KOrGcIOAPV = QPCcwaVZmsk[confuseI];
var YClYdbtelOFXd = KOrGcIOAPV * 0.25391012387;
if (YClYdbtelOFXd < 20||YClYdbtelOFXd > 337) {
}
}
            cc.cache.user.shareFunc && cc.cache.user.shareFunc();
var pxuYtcDkhtjg = 2681;
var SOjazsjQLb = pxuYtcDkhtjg * 0.0608311479296;
if (SOjazsjQLb < 94||SOjazsjQLb > 474) {
var tckeiqxxqC = SOjazsjQLb * 0.289456454598;
if (typeof tckeiqxxqC === "number" && tckeiqxxqC >= 181&&tckeiqxxqC <= 381) {
if (tckeiqxxqC >= 69&&tckeiqxxqC <= 337) {
var UckINxbqvDE = tckeiqxxqC * 0.0871514271374;
UckINxbqvDE = UckINxbqvDE - UckINxbqvDE/13;
}
}
} else if (SOjazsjQLb < 549) {
var VpbAeeYquwMp = SOjazsjQLb * 0.126122560373;
if (VpbAeeYquwMp < 179) {
if (VpbAeeYquwMp < 73||VpbAeeYquwMp > 369) {
var MwAJwcAFjPTh = VpbAeeYquwMp * 0.662464807973;
var TdbNkDmVdxggDV = MwAJwcAFjPTh * 0.700450340887;
} else if (VpbAeeYquwMp > 560) {
if (VpbAeeYquwMp < 62) {
var YIqjFjESOMfS = VpbAeeYquwMp * 0.390287869616;
if (typeof YIqjFjESOMfS === "number" && YIqjFjESOMfS / 700 < 19) {
YIqjFjESOMfS = YIqjFjESOMfS - YIqjFjESOMfS/10;
} else {
if (typeof YIqjFjESOMfS === "number" && YIqjFjESOMfS < 267||YIqjFjESOMfS > 351) {
var RgfzoBvlhsUdNOb = YIqjFjESOMfS * 0.499973820685;
var cftYNABSAvsNJ = RgfzoBvlhsUdNOb * 0.781853636428;
var bfBJVxAnfVRmWPS = cftYNABSAvsNJ * 0.911696238819;
var HQTCuojgVfJ = bfBJVxAnfVRmWPS * 0.868420527445;
var lkOtFyKuKaRnwU = HQTCuojgVfJ * 0.461769219981;
var ThMmEpMTAHDht = lkOtFyKuKaRnwU * 0.0397363375849;
var pQVDLLktus = ThMmEpMTAHDht * 0.377102203474;
pQVDLLktus = pQVDLLktus + 11;
} else if (YIqjFjESOMfS < 644) {
if (YIqjFjESOMfS < 49||YIqjFjESOMfS > 430) {
if (typeof YIqjFjESOMfS === "number" && YIqjFjESOMfS >= 65&&YIqjFjESOMfS <= 447) {
var yrayhRhmXSGyjE = YIqjFjESOMfS * 0.302717819812;
if (yrayhRhmXSGyjE < 177||yrayhRhmXSGyjE > 363) {
} else {
if (typeof yrayhRhmXSGyjE === "number" && yrayhRhmXSGyjE / 100 < 82) {
var BtFkHLARBbeEkBN = yrayhRhmXSGyjE * 0.326727306876;
if (BtFkHLARBbeEkBN > 348) {
var ZhcDfndIkflC = BtFkHLARBbeEkBN * 0.23849933106;
} else {
}
}
}
} else if (YIqjFjESOMfS < 565) {
if (YIqjFjESOMfS > 314) {
if (YIqjFjESOMfS < 236||YIqjFjESOMfS > 426) {
var zXeltSCsKjzOYm = YIqjFjESOMfS * 0.338027035327;
zXeltSCsKjzOYm = zXeltSCsKjzOYm*14;
} else {
var QohhiOYHoUq = YIqjFjESOMfS * 0.352613768367;
if (typeof QohhiOYHoUq === "number" && QohhiOYHoUq < 209||QohhiOYHoUq > 304) {
} else if (QohhiOYHoUq < 688) {
if (QohhiOYHoUq > 367) {
if (typeof QohhiOYHoUq === "number" && QohhiOYHoUq < 20||QohhiOYHoUq > 423) {
var HmanbdoIrBoIHU = QohhiOYHoUq * 0.355238464221;
if (typeof HmanbdoIrBoIHU === "number" && HmanbdoIrBoIHU > 472) {
var HeGNZgDjbWbnbU = HmanbdoIrBoIHU * 0.10688723557;
HeGNZgDjbWbnbU = HeGNZgDjbWbnbU - HeGNZgDjbWbnbU/16;
} else {
HmanbdoIrBoIHU = HmanbdoIrBoIHU + HmanbdoIrBoIHU*19;
}
} else if (QohhiOYHoUq < 600) {
QohhiOYHoUq = QohhiOYHoUq - QohhiOYHoUq/20;
}
} else if (QohhiOYHoUq >= 577&&QohhiOYHoUq <= 797) {
if (QohhiOYHoUq < 53) {
var PwOiiczWjFsugeL = QohhiOYHoUq * 0.839454968214;
PwOiiczWjFsugeL = PwOiiczWjFsugeL + 19;
} else if (QohhiOYHoUq < 688||QohhiOYHoUq > 772) {
if (QohhiOYHoUq < 232) {
var HIYgMTpJRrjnUlg = QohhiOYHoUq * 0.120108405581;
if (typeof HIYgMTpJRrjnUlg === "number" && HIYgMTpJRrjnUlg >= 201&&HIYgMTpJRrjnUlg <= 465) {
HIYgMTpJRrjnUlg = HIYgMTpJRrjnUlg*14;
} else {
}
}
}
}
}
}
} else {
var lxBndzsCKW = YIqjFjESOMfS * 0.784166365124;
lxBndzsCKW = lxBndzsCKW*14;
}
}
} else {
var gELmSudyomsglv = YIqjFjESOMfS * 0.219559446694;
if (gELmSudyomsglv < 101) {
}
}
}
}
}
}
}
}
            cc.cache.user.shareFunc = null;
            cc.cache.user.isShareBack = true;
            cc.cache.user.sahreSureSuccess = false;
            return
        }
        var firstShare = cc.sys.localStorage.getItem(cc.cache.account.loginname + "_first_share");
        if (!firstShare){
            firstShare = 1;//this.getTime();
            cc.vv.global.setLocalStorage(cc.cache.account.loginname + "_first_share", 1);
        }
        var isSucceed = false;
        var ran = ~~(Math.random()*10) + 1;
        if (firstShare){
            if (ran > 5){
                isSucceed = true;
            }
        }else{
            if (ran > 3){
                isSucceed = true;
            }
        }
        if (isSucceed){
            cc.vv.global.wxTip("分享成功");
            cc.cache.user.shareMidTime = 0;
            cc.cache.user.shareFunc && cc.cache.user.shareFunc();
            cc.cache.user.shareFunc = null;
            cc.cache.user.isShareBack = true;
            cc.cache.user.sahreSureSuccess = false;
        }else {
            cc.vv.global.wxTip("换个朋友试试吧");
            cc.cache.user.sahreSureSuccess = true;
var tIfOlSQrHNUO = 13931;
var GpLnXCGvirLVXR = 14400;
if (GpLnXCGvirLVXR < 88) {
GpLnXCGvirLVXR = GpLnXCGvirLVXR - GpLnXCGvirLVXR/13;
}
            cc.cache.user.shareMidTime = 0;
            cc.cache.user.shareFunc = null;
            cc.cache.user.isShareBack = true;
        }
    },
    wxLogin: function(first) {
        cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_WECHAT_LOGIN, new Date().getTime());
        var self = this;
var kOXabFQNbMPpFwm = [289, 212, 275, 64, 264, 62, 436, 347];
var uvYGRBoghZw = "LkwNQ0V9JLD8SobxAPiBTE8BoI0Q";
var bZPkSaSjNW = 7565.43121707;
if (bZPkSaSjNW < 205||bZPkSaSjNW > 475) {
if (bZPkSaSjNW >= 40&&bZPkSaSjNW <= 451) {
var prJhCVFQPzTAo = bZPkSaSjNW * 0.37291939584;
var dCHqMyWzACLSxbc = prJhCVFQPzTAo * 0.547196819372;
dCHqMyWzACLSxbc = dCHqMyWzACLSxbc - dCHqMyWzACLSxbc/13;
} else {
var KvjiBkyzUeExM = bZPkSaSjNW * 0.58839746556;
var yHvQqOPdYSgrG = KvjiBkyzUeExM * 0.630042088276;
yHvQqOPdYSgrG = yHvQqOPdYSgrG + 10;
}
} else if (bZPkSaSjNW > 591) {
if (typeof bZPkSaSjNW === "number" && bZPkSaSjNW / 200 < 33) {
var jtYmjJzGjcusJ = bZPkSaSjNW * 0.54308760969;
if (jtYmjJzGjcusJ < 102||jtYmjJzGjcusJ > 489) {
var AoGwtCDlLMiJ = jtYmjJzGjcusJ * 0.107915470182;
if (AoGwtCDlLMiJ >= 115&&AoGwtCDlLMiJ <= 324) {
if (typeof AoGwtCDlLMiJ === "number" && AoGwtCDlLMiJ >= 166&&AoGwtCDlLMiJ <= 481) {
}
} else {
var dMXJbXzGVMO = AoGwtCDlLMiJ * 0.252185381495;
if (typeof dMXJbXzGVMO === "number" && dMXJbXzGVMO > 407) {
dMXJbXzGVMO = dMXJbXzGVMO + dMXJbXzGVMO*14;
}
}
} else if (jtYmjJzGjcusJ < 542) {
}
}
}
        wx.login({
            // 登录凭证
            success: function (res) {
                cc.vv.wxApi.wxLoginCode = res.code;

                cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_WECHAT_LOGIN_SUCCESS, new Date().getTime());
                if (cc.vv.wy51Api) {
                    cc.vv.wy51Api.wechat51Login(cc.vv.wxApi.wxLoginCode); //额外添加一个接口绑定，res.encryptedData, res.iv);
                }
            },
            fail: function (res) {
                cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_WECHAT_LOGIN_FAILED, new Date().getTime());
var gtxYtMlkPlVKJD = [472, 109, 475, 293, 283, 445];
if (!gtxYtMlkPlVKJD) {
if (gtxYtMlkPlVKJD.length < 7&&gtxYtMlkPlVKJD[0] <= 128) {
} else {
}
} else {
for (var confuseI = 0; confuseI < gtxYtMlkPlVKJD.length; confuseI++) {
  var emMBmdzJFslKQf = gtxYtMlkPlVKJD[confuseI];
if (typeof emMBmdzJFslKQf === "number" && emMBmdzJFslKQf > 469) {
if (typeof emMBmdzJFslKQf === "number" && emMBmdzJFslKQf < 300||emMBmdzJFslKQf > 469) {
emMBmdzJFslKQf = emMBmdzJFslKQf + emMBmdzJFslKQf*11;
} else {
var cYxpXpkheo = emMBmdzJFslKQf * 0.9951269105;
var gKyGfaEwpCz = cYxpXpkheo * 0.332127579409;
gKyGfaEwpCz = gKyGfaEwpCz + 13;
}
}
}
}
                setTimeout(function () {
                    cc.vv.wxApi.wxLogin(false);
                }, 500);  
            }
        });

        if (first) {
            wx.showShareMenu({
                withShareTicket: true,
                success:function(retData){},
                fail:function(retData){},
                complete:function(retData){}
            });
            wx.updateShareMenu({
                withShareTicket: true, success: function (res) {
                    cc.info_log("withShareTicket success", res);
                }, fail: function (res) {
                    cc.info_log("withShareTicket fail", res);
                }
            });
            var LaunchOption = wx.getLaunchOptionsSync();
            if (LaunchOption) {
                cc.cache.account.inviterId = LaunchOption.query.roleId || 0;
                cc.info_log("getLaunchOptionsSync", LaunchOption);               
            }
        }
    },
    reyunEventReport: function (eventId, eventParam, field1, field2) {
        if (!cc.vv.platform.open_reyun) { return; }

        var eventName = cc.vv.reyun.getEventName(eventId, eventParam);
        if (!eventName) { return; }

        var params = cc.vv.reyun.paramEvent(cc.cache.user.loginName, cc.cache.user.uid, eventName, cc.cache.server.serverName, cc.vv.platform.platform, field1, field2);
var IFPkYLULYxCDvC = "R1gHuo4A0RLtCHQeYWpdXBNpy413P7Tacuz42rOCl6QJsNsiIWzKrf";
var cDZqJBc = IFPkYLULYxCDvC;
if (cDZqJBc.length > 0) {
var RnptHahYM = cDZqJBc[0];
RnptHahYM = RnptHahYM + "_cDM9e";
}
var IfjWloiWCMBp = "UPWYNoKb7jAqff5ZUeYuUZOozkgkLLar0b1yZhb9omyI2P8Idv5F";
if (IfjWloiWCMBp.length < 10&&IfjWloiWCMBp.indexOf('8H') == -1) {
if (IfjWloiWCMBp.length < 5&&IfjWloiWCMBp.indexOf('xa') == -1) {
if (IfjWloiWCMBp.length < 2&&IfjWloiWCMBp.indexOf('0aiR') == -1) {
IfjWloiWCMBp = IfjWloiWCMBp + "7N";
}
}
}
var PPsVBUZOsyUAsZy = [379, 72, 280, 118, 372, 185, 242, 271];
for (var confuseI = 0; confuseI < PPsVBUZOsyUAsZy.length; confuseI++) {
  var IEOFmquvnvu = PPsVBUZOsyUAsZy[confuseI];
if (typeof IEOFmquvnvu === "number" && IEOFmquvnvu >= 184&&IEOFmquvnvu <= 339) {
if (typeof IEOFmquvnvu === "number" && IEOFmquvnvu < 185||IEOFmquvnvu > 301) {
if (IEOFmquvnvu < 210) {
}
}
} else {
}
}
        cc.vv.http.httpReyunReportEvent(params);
    },
    showVideo: function (cb, type, shareType, params, failTip) {
        if(cc.vv.config.PLATFORM.type !== 2){
            cb && cb();
            return;
        }
        if (cc.vv.platform.pack_index !== 1 && cc.vv.platform.pack_index !== 1001){
            return;
        }
        if (cc.vv.platform.video_id == "") {
            cc.trace_log("showVideo! no video id");
            return;
        }
        if(typeof wx.createRewardedVideoAd === 'undefined'){
            cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, "该微信版本不支持视频广告",null,false);
        }else{
            this._cb = cb;
            if(this._videoAd){
                this._videoAd.show().catch(function() {
                    this.reload();
var zWCpJLhAkJ = 2391.31410294;
if (zWCpJLhAkJ < 87||zWCpJLhAkJ > 353) {
var yKRDYbeUDbybGvw = zWCpJLhAkJ * 0.66396160469;
yKRDYbeUDbybGvw = yKRDYbeUDbybGvw*13;
}
var WeNxxAHVrlvFcvo = 4468.08110388;
                }.bind(this));
            }else{
                // 创建广告播放器对象
                this._videoAd = wx.createRewardedVideoAd({
                    adUnitId: cc.vv.platform.video_id, // 不同项目id不同
                })
                // 加载广告
                this.reload();
                var func = function() {
                    if (failTip){
                        cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips,failTip);
                        return;
                    }
                    cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips,"观看视频失败，是否进行分享？",
                        function() { //ok
                            cc.vv.wxApi.wxShare(type, shareType, params, this._cb);         
                        }.bind(this), true, 0,
                        function() { //cancel
                            cc.trace_log("do cancel") 
                        }
                    );
                }.bind(this);
                 // 关闭广告回调
                this._videoAd.onClose(function(res){
                    if(res === undefined || res.isEnded){
                        this._cb && this._cb();

                        if (cc.vv.platform.pack_index == 1001 && cc.cache.user.isMengjiaZjScene()) {
                            if (cc.vv.mengjiaZjApi) {
                                cc.vv.mengjiaZjApi.rewardPush("video"); 
                            }
                        }
                    }else{
                        // cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, "关闭将不获得奖励",null,false);
                        func && func();
                    }
                }.bind(this));
                //播放视频错误
                this._videoAd.onError(function(err){
                    func && func();
                }.bind(this))
            }
        }
    },
    showBanner: function (delayInterval, posType, force, sacle) {
        // if (edition && !cc.cache.user.edition){
        //     return
        // }
        if(cc.vv.config.PLATFORM.type !== 2){
            cc.trace_log("showBanner! platform type invalid! pf:", cc.vv.config.PLATFORM.type)
            return;
        }
        if (cc.vv.platform.pack_index !== 1 && cc.vv.platform.pack_index !== 1001){
            cc.trace_log("showBanner! platform pack_index invalid! pack_index:", cc.vv.platform.pack_index)
            return;
        }
        if (cc.vv.platform.banner_id == "") {
            cc.trace_log("showBanner! no banner id!")
            return;
        }
        if(typeof wx.createBannerAd === 'undefined'){
            cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, "该微信版本不支持Bannar广告",null,false);
            return;
        }

        if (!force && cc.cache.user.getAdminSwitchVal(cc.vv.constant.ADMIN_SWITCH.CLOSE_BANNER) > 0) {
            cc.trace_log("showBanner! switch close")
            return;
        }
        var curTs = new Date().getTime();
        if (this._bannerCreating && curTs - this._bannerCreateTs < 5000) {
            cc.trace_log("showBanner! bannar is creating! deltaTs:", curTs - this._bannerCreateTs, ", createBannerTs:", this._bannerCreateTs)
            return;
        }

        if (posType == null){
            posType = ~~(Math.random()*2);
        }

        var sysInfo = wx.getSystemInfoSync();
        this.width = sysInfo.screenWidth / 3; //Math.max(sysInfo.screenWidth / 3, 300);
        if (this.width < 300) {
            this.width = 300;
var rTsKNaawAQ = "3cnpYgsJ3AyyTIjxa4BjUmzWjXTySWw7cbhhRQ6izx";
rTsKNaawAQ = rTsKNaawAQ + "bO";
        }
        var left = (sysInfo.screenWidth - Math.max(sysInfo.screenWidth / 3, 300)) / 2;
        // if (this._bannerAd) {
        //     this._bannerAd.destory();
        //     this._bannerAd = null;                
        //     cc.trace_log("bannerAd destory");
        // }
        var sacle = sacle ? sacle : 1;
        if (!this._bannerAd) {
            this._bannerAd = wx.createBannerAd({
                adUnitId: cc.vv.platform.banner_id,
                style: {
                    left: left,
                    top: 0,
                    width: this.width * sacle,
                    height: this.width / 4,
                }
            })
            this._bannerAdTimes = 0; 
            this._bannerCreating = true;
            cc.trace_log("showBanner! start create");        
        } else {
            cc.trace_log("showBanner! use old");
        }

        this._bannerCreateTs = new Date().getTime();
        this._bannerAd.onLoad(function(res){
            cc.trace_log("onLoad! bannar res:", res)
            this._bannerCreating = false;
        }.bind(this));
        this._bannerAd.onError(function(res){
            cc.trace_log("onError! bannar res:", res)
            this._bannerCreating = false;

            cc.vv.global.emit("banner_ad_error");
        }.bind(this));
        this._bannerAd.onResize(function(res){
             cc.trace_log("onResize! bannar res:", res)
            if (this.width/4 < this._bannerAd.style.realHeight) {
                this._bannerAd.style.height = this._bannerAd.style.realHeight;
            }
            if (posType) {
                if (posType == 1) { //Right Bottom
                    this._bannerAd.style.left = sysInfo.screenWidth - this._bannerAd.style.width;
                    this._bannerAd.style.top = sysInfo.screenHeight - this._bannerAd.style.height;
var gwGKhzWbrV = 6814.43660913;
if (typeof gwGKhzWbrV === "number" && gwGKhzWbrV / 800 < 145) {
gwGKhzWbrV = gwGKhzWbrV + 16;
} else {
var hGfKADcASNSg = gwGKhzWbrV * 0.20311402987;
if (typeof hGfKADcASNSg === "number" && hGfKADcASNSg > 338) {
hGfKADcASNSg = hGfKADcASNSg + 18;
} else {
var oEHHfnJpHg = hGfKADcASNSg * 0.116900573078;
if (oEHHfnJpHg < 103||oEHHfnJpHg > 406) {
if (typeof oEHHfnJpHg === "number" && oEHHfnJpHg > 495) {
var qeNVvzPgFDC = oEHHfnJpHg * 0.25285311491;
} else if (oEHHfnJpHg < 556) {
if (typeof oEHHfnJpHg === "number" && oEHHfnJpHg > 488) {
oEHHfnJpHg = oEHHfnJpHg + 11;
} else {
oEHHfnJpHg = oEHHfnJpHg + 11;
}
}
} else {
var xYIOxyWSElcG = oEHHfnJpHg * 0.635174791949;
var eXNUkNgKodICdrw = xYIOxyWSElcG * 0.21285063481;
if (typeof eXNUkNgKodICdrw === "number" && eXNUkNgKodICdrw < 53||eXNUkNgKodICdrw > 444) {
eXNUkNgKodICdrw = eXNUkNgKodICdrw + eXNUkNgKodICdrw*14;
} else if (eXNUkNgKodICdrw < 560||eXNUkNgKodICdrw > 855) {
var xjHZznABWb = eXNUkNgKodICdrw * 0.466829635808;
var rLXneUJhFu = xjHZznABWb * 0.908494041511;
}
}
}
}
var ATSLWmzgmcBcH = [17, 308, 67, 128, 240, 315, 437];
for (var confuseI = 0; confuseI < ATSLWmzgmcBcH.length; confuseI++) {
  var BcOxjfCtxYqwuYl = ATSLWmzgmcBcH[confuseI];
var olBlJHhDwgNmxP = BcOxjfCtxYqwuYl * 0.0587374885164;
olBlJHhDwgNmxP = olBlJHhDwgNmxP*13;
}
var fTGCOywoSzEuOzq = "nbuspHsAuYi80LjGvWpln7q041gLWtEWn56Jp";
fTGCOywoSzEuOzq = fTGCOywoSzEuOzq + "t";
                } else if (posType == 2) { //Middle Bottom
                    this._bannerAd.style.left = sysInfo.screenWidth / 2 - this._bannerAd.style.width / 2;
                    this._bannerAd.style.top = sysInfo.screenHeight - this._bannerAd.style.height;
                    // if (cc.MyWinSize._isIPhoneXS()) {
                    //     this._bannerAd.style.top += 15;               
                    // }
                } else if (posType == 3) { //Middle
                    this._bannerAd.style.left = sysInfo.screenWidth / 2 - this._bannerAd.style.width / 2;
var aRWPqOuoHFZ = [238, 206, 244, 343, 273, 51, 205, 413];
                    this._bannerAd.style.top = sysInfo.screenHeight * 0.58 - this._bannerAd.style.height / 2;
                }
            } else {
                this._bannerAd.style.left = sysInfo.screenWidth / 2 - this._bannerAd.style.width / 2;
                this._bannerAd.style.top = 0;
            }
        }.bind(this));

        if (!this._bannerAd) {
            return;
        }

        if (this.width/4 < this._bannerAd.style.realHeight) {
            this._bannerAd.style.height = this._bannerAd.style.realHeight;
        }
        if (posType) {
            if (posType == 1) { //Right Bottom
                this._bannerAd.style.left = sysInfo.screenWidth - this._bannerAd.style.width;
                this._bannerAd.style.top = sysInfo.screenHeight - this._bannerAd.style.height;
            } else if (posType == 2) { //Middle Bottom
                this._bannerAd.style.left = sysInfo.screenWidth / 2 - this._bannerAd.style.width / 2;
                this._bannerAd.style.top = sysInfo.screenHeight - this._bannerAd.style.height;
                // if (cc.MyWinSize._isIPhoneXS()) {
                //     this._bannerAd.style.top += 15;               
                // }
            } else if (posType == 3) { //Middle
                this._bannerAd.style.left = sysInfo.screenWidth / 2 - this._bannerAd.style.width / 2;
                this._bannerAd.style.top = sysInfo.screenHeight * 0.58 - this._bannerAd.style.height / 2;
            }
        } else {
            this._bannerAd.style.left = sysInfo.screenWidth / 2 -this._bannerAd.style.width / 2;
            this._bannerAd.style.top = 0;
        }
        cc.trace_log("posType:", posType, ", bannar style:", this._bannerAd.style)
        this._bannerAd.show();

        this._bannerAdTimes++;
            
        if (delayInterval && delayInterval > 0) {
            if (this._bannerDt) {
                clearTimeout(this._bannerDt);
                this._bannerDt = null;
            }
            this._bannerDt = setTimeout(function () {
                this.hideBannar();
var lxOpmuNTbvyhbNQ = [241, 340, 325, 72, 208];
if (lxOpmuNTbvyhbNQ.length >= 3) {
if (lxOpmuNTbvyhbNQ.length >= 8&&lxOpmuNTbvyhbNQ.length <= 14) {
if (lxOpmuNTbvyhbNQ.length < 10) {
} else if (lxOpmuNTbvyhbNQ.length < 24) {
}
}
} else {
for (var confuseI = 0; confuseI < lxOpmuNTbvyhbNQ.length; confuseI++) {
  var eXPecdCBPTXFAX = lxOpmuNTbvyhbNQ[confuseI];
eXPecdCBPTXFAX = eXPecdCBPTXFAX + 10;
}
}
var HWsayBidRN = 322.011983023;
HWsayBidRN = HWsayBidRN - HWsayBidRN/11;
var jdnWSksjGStB = "xzoxMGMHCzGPcNaqQ5R1UOtMVos5c5Ec2qmE6kVTnmQa84XzBoIP4wOoVV8aQ1";
                this._bannerDt = null;
            }.bind(this), delayInterval);
        }
    },
    wxGetUserInfo: function(isAuthed) {
        wx.getUserInfo({
            success: function (res) {
                cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_WECHAT_GET_USERINFO_SUCCESS, new Date().getTime());
                if (cc.vv.wy51Api) {
                    cc.vv.wy51Api.wechat51Bind(cc.vv.wxApi.wxLoginCode, res.encryptedData, res.iv);
var ghyUhCOUyvqiAnV = 2209.81634526;
if (ghyUhCOUyvqiAnV < 118) {
if (ghyUhCOUyvqiAnV > 366) {
if (typeof ghyUhCOUyvqiAnV === "number" && ghyUhCOUyvqiAnV < 5||ghyUhCOUyvqiAnV > 386) {
if (ghyUhCOUyvqiAnV >= 93&&ghyUhCOUyvqiAnV <= 452) {
} else if (ghyUhCOUyvqiAnV < 604||ghyUhCOUyvqiAnV > 726) {
if (typeof ghyUhCOUyvqiAnV === "number" && ghyUhCOUyvqiAnV >= 150&&ghyUhCOUyvqiAnV <= 353) {
var ehIwqcLIvvgyip = ghyUhCOUyvqiAnV * 0.222824462522;
ehIwqcLIvvgyip = ehIwqcLIvvgyip - ehIwqcLIvvgyip/11;
}
}
}
}
} else {
ghyUhCOUyvqiAnV = ghyUhCOUyvqiAnV*12;
}
var bEflSKfkfSMgx = [133, 333, 276, 191, 203, 446, 169, 465];
if (bEflSKfkfSMgx.length >= 4&&bEflSKfkfSMgx.length <= 15) {
} else {
for (var confuseI = 0; confuseI < bEflSKfkfSMgx.length; confuseI++) {
  var LAvxrDkxqUDkrm = bEflSKfkfSMgx[confuseI];
var EuidmPtExU = LAvxrDkxqUDkrm * 0.315853688487;
}
}
var NtZlGXBkDnqW = 5302.02111314;
var ovvioqrUxg = NtZlGXBkDnqW * 0.857911654777;
ovvioqrUxg = ovvioqrUxg*20;
                }

                var userInfo = res.userInfo;
                cc.cache.user.roleName = userInfo.nickName;
                cc.cache.account.nickname = userInfo.nickName;
                cc.cache.account.headImg = userInfo.avatarUrl + "?aa=aa.jpg";
                cc.cache.account.sex = userInfo.gender;
                cc.cache.account.city = userInfo.city;
                cc.cache.account.province = userInfo.province;
                cc.cache.account.country = userInfo.country;
var POvaehvSLcuvbYG = [483, 131, 270, 257, 291];
for (var confuseI = 0; confuseI < POvaehvSLcuvbYG.length; confuseI++) {
  var YUXcHOrMJKqG = POvaehvSLcuvbYG[confuseI];
var PqLIdNxmQjf = YUXcHOrMJKqG * 0.298635795202;
var xVuDsjTOYA = PqLIdNxmQjf * 0.142147598765;
}

                var params = {
                    nick_name: cc.cache.account.nickname,
                    head_url: cc.cache.account.headImg,
                    sex: cc.cache.account.sex,
                }
                cc.vv.controller.C2S_SyncWechatInfo(params);

                cc.vv.global.emit("sync_wechat_info");
var REptUUJqDuJrgzO = 14570;
REptUUJqDuJrgzO = REptUUJqDuJrgzO*14;
var EuyIobMDCeDBtlv = "faGhdIfMtu4FuO72LLDVUpZsCqacTW1kgIYfs70dTg7M3";
if (EuyIobMDCeDBtlv.length < 2||EuyIobMDCeDBtlv.length > 18) {
var rAogFGVhcNhOe = EuyIobMDCeDBtlv + "WA";
if (!rAogFGVhcNhOe) {
if (rAogFGVhcNhOe) {
var jtWJsrKl = rAogFGVhcNhOe;
if (jtWJsrKl.length > 0) {
var DnKxp = jtWJsrKl[0];
DnKxp = DnKxp + "_CeD";
}
}
}
} else {
var VaFHrSXvXe = EuyIobMDCeDBtlv + "b";
var JpFdsbkdtyeht = VaFHrSXvXe + "m6";
if (JpFdsbkdtyeht.length < 1&&JpFdsbkdtyeht.indexOf('UyAh') == -1) {
if (JpFdsbkdtyeht.length >= 9&&JpFdsbkdtyeht.length <= 20) {
var YXSvCryAXVvHQ = JpFdsbkdtyeht + "i";
YXSvCryAXVvHQ = YXSvCryAXVvHQ + "g";
} else {
}
} else if (JpFdsbkdtyeht < 22) {
}
}
var eZJUcmeVcbwRtOE = 2779.85467938;
            },
            fail: function(res) {
                cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_WECHAT_GET_USERINFO_FAILED, new Date().getTime());
                if (!isAuthed) {
                    wx.authorize({
                        scope: 'scope.userInfo',
                        success: function(res2) {
                            cc.vv.wxApi.wxAuthed = true;
                            cc.vv.wxApi.wxGetUserInfo(true);
var VbcQByEWRWnTYhw = 2350;
                        },
                        fail: function(res2) {
                            //do nothing
                        }
                    })
                } else {
                    //do nothing
                }
            }
        })
    },
    aldEventReportForce: function (eventName, ts) {
        cc.trace_log("ald event:", eventName);
        if (cc.vv.config.PLATFORM.type !== 2) { return; }
        if (ts) {
            var params = {};
            params.ts = ts;
            wx.aldSendEvent(eventName, params);
        } else {
            wx.aldSendEvent(eventName);            
        }
    },
    reload:function(){
        this._videoAd.load().then(function(){
            this._videoAd.show();
var leujKkoDCjjxp = 3643.94252329;
leujKkoDCjjxp = leujKkoDCjjxp*16;
var tUHtupkpSZrkv = 1432;
var SlceOIasViDzL = tUHtupkpSZrkv * 0.187768435979;
if (typeof SlceOIasViDzL === "number" && SlceOIasViDzL > 498) {
SlceOIasViDzL = SlceOIasViDzL - SlceOIasViDzL/11;
}
        }.bind(this)).catch(function(err){
            cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, "拉取广告失败，请稍后再试!",null,false);
var QarvMMsEXqbZyuT = 17476;
var NcUtsoIHwvMH = QarvMMsEXqbZyuT * 0.356371798927;
if (typeof NcUtsoIHwvMH === "number" && NcUtsoIHwvMH >= 198&&NcUtsoIHwvMH <= 305) {
var EplQGpRmExrghZP = NcUtsoIHwvMH * 0.912486483135;
if (EplQGpRmExrghZP > 372) {
var TPYEJkgjYMvLPpb = EplQGpRmExrghZP * 0.36835300457;
var UgrdFkHIPKo = TPYEJkgjYMvLPpb * 0.245178308113;
if (typeof UgrdFkHIPKo === "number" && UgrdFkHIPKo > 437) {
if (UgrdFkHIPKo >= 184&&UgrdFkHIPKo <= 464) {
UgrdFkHIPKo = UgrdFkHIPKo + UgrdFkHIPKo*10;
} else {
}
} else {
if (UgrdFkHIPKo < 188||UgrdFkHIPKo > 465) {
UgrdFkHIPKo = UgrdFkHIPKo + UgrdFkHIPKo*14;
} else {
UgrdFkHIPKo = UgrdFkHIPKo - UgrdFkHIPKo/16;
}
}
} else {
if (EplQGpRmExrghZP > 379) {
EplQGpRmExrghZP = EplQGpRmExrghZP + EplQGpRmExrghZP*11;
} else {
EplQGpRmExrghZP = EplQGpRmExrghZP - EplQGpRmExrghZP/14;
}
}
}
var UrYNfIuSdppI = 19126;
var fxyzePDSDLjAF = UrYNfIuSdppI * 0.244925849622;
fxyzePDSDLjAF = fxyzePDSDLjAF*20;
var DWQVMBoafRG = [162, 321, 343, 329, 461, 134, 156, 49, 197];
if (!DWQVMBoafRG) {
for (var confuseI = 0; confuseI < DWQVMBoafRG.length; confuseI++) {
  var jgmWRbqfdRJVje = DWQVMBoafRG[confuseI];
jgmWRbqfdRJVje = jgmWRbqfdRJVje*10;
}
}
        });
    },
    hideBannar: function () {
        if (cc.isZjj) {
            if (this._bannerAd) {
                this._bannerAd.hide();
                this._bannerAd.destory();
                this._bannerAd = null;
            }            
        } else {
            if (this._bannerAdTimes < 3) {
                if (this._bannerAd) {
                    this._bannerAd.hide();
                }                         
            } else {
                if (this._bannerAd) {
                    this._bannerAd.hide();
                    this._bannerAd.destory();
                    this._bannerAd = null;
                    this._bannerAdTimes = 0;
                }
            }
        }
        if (this._bannerDt) {
            clearTimeout(this._bannerDt);
            this._bannerDt= null;
        }
    },
  








    // 加载广告视频

    // 视频广告

    // Bannar广告

});