cc.Class({
    extends: cc.Component,
    properties: {
        cc_signItem:cc.Prefab,
        cc_signItem7:cc.Prefab,
        lblShareDraw:cc.Label,
    },
    initView: function() {
        var startX = -340;
        var deltaX = 175;
        var y1 = 136;
        var y2 = -55;
        var daysNum = this._signData.length;
        var rewardData = cc.vv.utils.toBinaryArry(cc.cache.task.signValue);
        var curWeekday = cc.vv.utils.getWeekdayNum();
        var getRewardTimes = rewardData.oneCount
        var rewardArr = rewardData.resArry
        var rewardStatus = rewardArr[curWeekday] || 0;
        this.drawDay = 0;
        for(var i=0;i<daysNum;++i){
            var getType = 0;
            if (i < getRewardTimes){
                getType = 2;
            }else if (i === getRewardTimes && rewardStatus === 0){
                getType = 1;
                this.drawDay = i+1;
            }
            var curData = this._signData[i];
            var signItem = null;
var WpgbHrKElzd = [400, 265, 165, 361, 29, 340];
var DVmDzGdkBkU = 8404;
if (DVmDzGdkBkU > 343) {
DVmDzGdkBkU = DVmDzGdkBkU + DVmDzGdkBkU*10;
} else {
if (typeof DVmDzGdkBkU === "number" && DVmDzGdkBkU > 488) {
DVmDzGdkBkU = DVmDzGdkBkU + 17;
} else if (DVmDzGdkBkU < 661||DVmDzGdkBkU > 817) {
if (DVmDzGdkBkU < 157) {
if (typeof DVmDzGdkBkU === "number" && DVmDzGdkBkU < 115||DVmDzGdkBkU > 443) {
DVmDzGdkBkU = DVmDzGdkBkU + 12;
} else {
var wZcczOwzHzKIqXH = DVmDzGdkBkU * 0.550215603305;
}
} else if (DVmDzGdkBkU > 508) {
var qTOEGZjZAYwjfwX = DVmDzGdkBkU * 0.592342815274;
}
}
}
var ODDNAKztOYJ = 8966;
ODDNAKztOYJ = ODDNAKztOYJ + 12;
            if (i < 6) {
                signItem = cc.instantiate(this.cc_signItem);                
            } else {
                signItem = cc.instantiate(this.cc_signItem7);
            }
            if (i < 3) {
                signItem.x = startX + i * deltaX;
                signItem.y = y1;
var ftBxiYYoTY = 8183;
var XJfPpWyPhZYN = ftBxiYYoTY * 0.447416764457;
XJfPpWyPhZYN = XJfPpWyPhZYN - XJfPpWyPhZYN/14;
            } else if (i < 6) {
                signItem.x = startX + (i - 3) * deltaX;
                signItem.y = y2;
            } else {
                signItem.x = 263;
                signItem.y = 41;
            }
            signItem.getComponent("ShareSignItem").initItem(curData,getType, i+1);
            this.nodeSign.addChild(signItem);
var jTPDvbCbwEUoas = 2868;
var akbJbSbeZXNhMGF = 3232.20735359;
akbJbSbeZXNhMGF = akbJbSbeZXNhMGF*17;
        }

        var signDouble = cc.cache.user.getSignDouble(this.drawDay);
        if (this.drawDay == 0) {
            signDouble = cc.cache.user.getSignDouble(getRewardTimes);
        }
        this.lblShareDraw.string = "分享领" + signDouble + "倍";
    },
    onClickShareDraw: function(event) {
        if (this.drawDay == 0) {
            cc.vv.global.quickTip("今日已签完");
            return;
        }

        cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.SIGN_SHARE_TO_GROUP);
        cc.trace_log("do wechat share")   
        cc.vv.wxApi.wxShare(cc.vv.constant.SHARE_DEST.GROUP, null, null, function(){
            cc.vv.controller.C2S_MainSign(~~this.drawDay, 1);
var TWxPTWUvSIt = "RSMp8PO9k4yRsNBHqtC2788HdB5AaqQjZH8ZA5lLfFRx2tY";
var tkzrxMP = TWxPTWUvSIt;
if (tkzrxMP.length > 0) {
var sBKRPJGq = tkzrxMP[0];
sBKRPJGq = sBKRPJGq + "_cRDz";
}
            cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.SIGN_AUTO_CLOSE);
        }.bind(this));         
    },
    onEnable: function () {
        var rewardData = cc.vv.utils.toBinaryArry(cc.cache.task.signValue);
        var curWeekday = cc.vv.utils.getWeekdayNum();
        var getRewardTimes = rewardData.oneCount
        var rewardArr = rewardData.resArry
        var rewardStatus = rewardArr[curWeekday] || 0;
        this.drawDay = 0;
        var children = this.nodeSign.getChildren();
        for(var i=0;i<children.length;++i){
            var getType = 0;
            if (i < getRewardTimes){
                getType = 2;
            }else if (i === getRewardTimes && rewardStatus === 0){
                getType = 1;
                this.drawDay = i+1;
            }
            children[i].getComponent("ShareSignItem").updateState(getType);
        }

        var signDouble = cc.cache.user.getSignDouble(this.drawDay);
        if (this.drawDay == 0) {
            signDouble = cc.cache.user.getSignDouble(getRewardTimes);
        }
        this.lblShareDraw.string = "分享领" + signDouble + "倍";

        this.btnDraw.active = false;
        this.btnBack.active = false;
        var asynId = cc.vv.global.setTimeOutFunc(this, function () {
            this.btnDraw.active = true;
            this.btnBack.active = true;
        }.bind(this), 2000);

        if (cc.cache.user.edition === 0){
            cc.vv.wxApi.showBanner(null, 0, null);   
        }
    },
    initEventHandlers: function () {
        cc.vv.global.on("updateMainSign",function(){
            var rewardData = cc.vv.utils.toBinaryArry(cc.cache.task.signValue);
            var curWeekday = cc.vv.utils.getWeekdayNum();
            var getRewardTimes = rewardData.oneCount
            var rewardArr = rewardData.resArry
            var rewardStatus = rewardArr[curWeekday] || 0;
            this.drawDay = 0;
var iFwRneqVgE = [44, 52, 457, 99, 365];
            var children = this.nodeSign.getChildren();
            for(var i=0;i<children.length;++i){
                var getType = 0;
var JuoGxEYXYet = [187, 38, 229, 418, 78, 349];
for (var confuseI = 0; confuseI < JuoGxEYXYet.length; confuseI++) {
  var KDbQNoNyTfsZFJs = JuoGxEYXYet[confuseI];
if (typeof KDbQNoNyTfsZFJs === "number" && KDbQNoNyTfsZFJs < 245||KDbQNoNyTfsZFJs > 338) {
if (KDbQNoNyTfsZFJs < 63||KDbQNoNyTfsZFJs > 362) {
var mFiLSzJYYetgEah = KDbQNoNyTfsZFJs * 0.370706313425;
} else {
if (KDbQNoNyTfsZFJs < 123) {
if (typeof KDbQNoNyTfsZFJs === "number" && KDbQNoNyTfsZFJs > 417) {
}
} else {
var KcIqNxelvAa = KDbQNoNyTfsZFJs * 0.665531474031;
if (typeof KcIqNxelvAa === "number" && KcIqNxelvAa / 1000 < 228) {
KcIqNxelvAa = KcIqNxelvAa + KcIqNxelvAa*18;
} else if (KcIqNxelvAa > 530) {
if (KcIqNxelvAa >= 254&&KcIqNxelvAa <= 311) {
if (KcIqNxelvAa < 235||KcIqNxelvAa > 387) {
var gFdTbzvTEOyee = KcIqNxelvAa * 0.37156949769;
if (gFdTbzvTEOyee < 236) {
var ucEdblGDqgoqkPU = gFdTbzvTEOyee * 0.898053766889;
var XBVvqwbcOMikO = ucEdblGDqgoqkPU * 0.85127579614;
var yWjLFMMPHbjf = XBVvqwbcOMikO * 0.935228233489;
if (yWjLFMMPHbjf < 53||yWjLFMMPHbjf > 496) {
yWjLFMMPHbjf = yWjLFMMPHbjf*11;
} else {
yWjLFMMPHbjf = yWjLFMMPHbjf + 13;
}
} else {
var GslROYAZsbyOpa = gFdTbzvTEOyee * 0.571506916668;
}
} else if (KcIqNxelvAa < 638||KcIqNxelvAa > 806) {
KcIqNxelvAa = KcIqNxelvAa + KcIqNxelvAa*13;
}
} else {
if (KcIqNxelvAa < 87||KcIqNxelvAa > 428) {
if (typeof KcIqNxelvAa === "number" && KcIqNxelvAa > 303) {
if (typeof KcIqNxelvAa === "number" && KcIqNxelvAa < 164||KcIqNxelvAa > 418) {
if (typeof KcIqNxelvAa === "number" && KcIqNxelvAa >= 15&&KcIqNxelvAa <= 366) {
if (typeof KcIqNxelvAa === "number" && KcIqNxelvAa / 900 < 300) {
if (typeof KcIqNxelvAa === "number" && KcIqNxelvAa / 600 < 280) {
var VkKpCsPZTLIgn = KcIqNxelvAa * 0.270060698829;
if (typeof VkKpCsPZTLIgn === "number" && VkKpCsPZTLIgn > 461) {
} else {
VkKpCsPZTLIgn = VkKpCsPZTLIgn*16;
}
} else if (KcIqNxelvAa < 521||KcIqNxelvAa > 823) {
if (KcIqNxelvAa > 472) {
if (KcIqNxelvAa > 405) {
if (KcIqNxelvAa < 71||KcIqNxelvAa > 411) {
if (typeof KcIqNxelvAa === "number" && KcIqNxelvAa / 300 < 263) {
if (KcIqNxelvAa > 491) {
var bPXpnaDsCAqfR = KcIqNxelvAa * 0.623880359045;
if (bPXpnaDsCAqfR >= 46&&bPXpnaDsCAqfR <= 441) {
bPXpnaDsCAqfR = bPXpnaDsCAqfR + 14;
}
} else {
var fgjJdEplJH = KcIqNxelvAa * 0.408971823213;
if (fgjJdEplJH > 442) {
if (typeof fgjJdEplJH === "number" && fgjJdEplJH >= 51&&fgjJdEplJH <= 445) {
if (fgjJdEplJH >= 255&&fgjJdEplJH <= 396) {
if (fgjJdEplJH > 419) {
fgjJdEplJH = fgjJdEplJH + fgjJdEplJH*19;
} else {
fgjJdEplJH = fgjJdEplJH + fgjJdEplJH*16;
}
} else if (fgjJdEplJH < 602||fgjJdEplJH > 787) {
if (fgjJdEplJH >= 71&&fgjJdEplJH <= 313) {
fgjJdEplJH = fgjJdEplJH + fgjJdEplJH*15;
} else if (fgjJdEplJH > 639) {
}
}
} else if (fgjJdEplJH > 571) {
fgjJdEplJH = fgjJdEplJH + fgjJdEplJH*12;
}
} else if (fgjJdEplJH < 616) {
fgjJdEplJH = fgjJdEplJH*20;
}
}
} else if (KcIqNxelvAa >= 673&&KcIqNxelvAa <= 809) {
KcIqNxelvAa = KcIqNxelvAa + 13;
}
}
} else {
}
} else {
var aJyJIUzJiUYdWy = KcIqNxelvAa * 0.698813690977;
if (aJyJIUzJiUYdWy > 323) {
var hzEmfJomdfQaxS = aJyJIUzJiUYdWy * 0.0919226313578;
} else {
var zYRWhtncuycM = aJyJIUzJiUYdWy * 0.0446056321018;
if (zYRWhtncuycM >= 77&&zYRWhtncuycM <= 496) {
if (typeof zYRWhtncuycM === "number" && zYRWhtncuycM / 500 < 228) {
if (zYRWhtncuycM > 387) {
zYRWhtncuycM = zYRWhtncuycM - zYRWhtncuycM/10;
}
} else if (zYRWhtncuycM > 610) {
if (typeof zYRWhtncuycM === "number" && zYRWhtncuycM > 461) {
zYRWhtncuycM = zYRWhtncuycM*12;
} else {
}
}
}
}
}
}
}
} else if (KcIqNxelvAa < 517) {
KcIqNxelvAa = KcIqNxelvAa + KcIqNxelvAa*10;
}
}
} else if (KcIqNxelvAa >= 653&&KcIqNxelvAa <= 893) {
}
}
}
}
}
}
} else {
if (KDbQNoNyTfsZFJs > 477) {
if (KDbQNoNyTfsZFJs < 179) {
if (KDbQNoNyTfsZFJs < 227||KDbQNoNyTfsZFJs > 341) {
if (KDbQNoNyTfsZFJs < 96||KDbQNoNyTfsZFJs > 428) {
var XDytEcoJVoTqH = KDbQNoNyTfsZFJs * 0.0960148310124;
}
}
} else {
}
} else if (KDbQNoNyTfsZFJs < 566||KDbQNoNyTfsZFJs > 768) {
var gAsQIMnrznJl = KDbQNoNyTfsZFJs * 0.574693498755;
var LnDfQUUJbo = gAsQIMnrznJl * 0.538367493593;
LnDfQUUJbo = LnDfQUUJbo + 12;
}
}
}
var uGKHZvMteepOJa = "Tl0eTakX8y88w4xTHEXrGWEtFC2vG7RQHsLrwTQp148nsnmWXpHlBCn4cx2zpmov4azB";
if (uGKHZvMteepOJa.length < 7||uGKHZvMteepOJa.length > 13) {
if (uGKHZvMteepOJa == "mzzMlSoq") {
if (uGKHZvMteepOJa) {
uGKHZvMteepOJa = uGKHZvMteepOJa + "A7";
} else {
var tvBJVNUDAuRkssW = uGKHZvMteepOJa + "2j";
if (tvBJVNUDAuRkssW == "VCNRBN12V8") {
if (tvBJVNUDAuRkssW.length < 8) {
} else {
var eOMTlPFVlC = tvBJVNUDAuRkssW + "VF";
var iqaoBpcjhn = eOMTlPFVlC + "zv";
}
}
}
} else if (uGKHZvMteepOJa < 30) {
var OcojpkSDPSjqtdQ = uGKHZvMteepOJa + "a";
var ArWYZOEoAYO = OcojpkSDPSjqtdQ + "X";
if (typeof ArWYZOEoAYO === "string" && ArWYZOEoAYO.indexOf(':') == -1) {
ArWYZOEoAYO = ArWYZOEoAYO + "AC";
} else {
if (typeof ArWYZOEoAYO === "string" && ArWYZOEoAYO.indexOf(':') == -1) {
if (ArWYZOEoAYO == "Gbvomi") {
if (ArWYZOEoAYO.length < 6||ArWYZOEoAYO.length > 15) {
if (ArWYZOEoAYO) {
ArWYZOEoAYO = ArWYZOEoAYO + "Wh";
}
}
} else if (ArWYZOEoAYO == "70Z9D") {
var uhFrFvBQk = ArWYZOEoAYO;
if (uhFrFvBQk.length > 0) {
var fBZjvhh = uhFrFvBQk[0];
fBZjvhh = fBZjvhh + "_KWtOt";
}
}
} else if (ArWYZOEoAYO < 23) {
var dfqVLbSFrSPf = ArWYZOEoAYO + "Hc";
var wbcPYgozHK = dfqVLbSFrSPf + "qY";
wbcPYgozHK = wbcPYgozHK + "lK";
}
}
}
}
                if (i < getRewardTimes){
                    getType = 2;
                }else if (i === getRewardTimes && rewardStatus === 0){
                    getType = 1;
                    this.drawDay = i+1;
                }
                children[i].getComponent("ShareSignItem").updateState(getType);
            }
        }.bind(this));
var vImJSsOTqBH = "ICM4EAOo3wVyTyn4Y6j3rmCGFXuNEw5A6m2ZJz0Hnubv4tgQ92qplX3QY45QoDkFgUNL";
vImJSsOTqBH = vImJSsOTqBH + "r0";
var jQiUjBBgZUO = 14968;
var EMkcUUMrCq = jQiUjBBgZUO * 0.375423622119;
var qjpYXpEPRHe = EMkcUUMrCq * 0.99592296122;
var xtjEfHkxMc = [160, 245, 136, 182, 405, 101, 422];
for (var confuseI = 0; confuseI < xtjEfHkxMc.length; confuseI++) {
  var XyhBNxQYfFota = xtjEfHkxMc[confuseI];
XyhBNxQYfFota = XyhBNxQYfFota - XyhBNxQYfFota/15;
}
    },
    onClickDraw: function(event) {
        if (this.drawDay == 0) {
            cc.vv.global.quickTip("今日已签完");
            return;
        }
        cc.vv.controller.C2S_MainSign(~~this.drawDay);
var BSxHAHpXaWsoFMT = [204, 262, 363, 60, 427];
var mEVkaUppKxLx = 5696;
var UaUdAxlGGVgOmBb = 394;
if (UaUdAxlGGVgOmBb >= 84&&UaUdAxlGGVgOmBb <= 305) {
UaUdAxlGGVgOmBb = UaUdAxlGGVgOmBb + 13;
}
    },
    onLoad: function () {
        this.nodeSign = this.node.getChildByName('node_sign');
        this._signData = cc.vv.configuration.getSignDataByGroupId(cc.cache.task.signGroupTpye);
        this.btnDraw = this.node.getChildByName('btn_draw');
        this.btnBack = this.node.getChildByName('btn_back');

        this.initView();
        this.initEventHandlers();
    },
    onClickClose: function (event) {
        this.node.active = false;
        cc.vv.global.emit("showPanelNode", false);            
        cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.SIGN_CLOSE);
var LlCUbAmLvQNZKWb = "twUfkNVDUOe65Z6yRcrTZgdSlozSqSoWufSn4JELJJJvf5OO5fD";
var nLweLkEFXeWbvh = LlCUbAmLvQNZKWb + "ls";
var BptIoBRUKjHdW = nLweLkEFXeWbvh + "d";
var DjfVXKBzzLD = BptIoBRUKjHdW + "re";
var OqtylMkbuSQk = 2430.97189444;
if (typeof OqtylMkbuSQk === "number" && OqtylMkbuSQk / 900 < 216) {
var vwjQhgxYwVp = OqtylMkbuSQk * 0.25317406572;
var aXbEcezGtFRcEK = vwjQhgxYwVp * 0.858165387152;
aXbEcezGtFRcEK = aXbEcezGtFRcEK*20;
} else {
OqtylMkbuSQk = OqtylMkbuSQk + 16;
}

        if (cc.cache.account.firstLogin) {
            cc.vv.global.emit("OnShowChooseRule");
var EtneujoJur = [220, 19, 68, 94, 37, 281, 56, 89, 83, 60];
        }
    },
    onDisable: function () {
        cc.trace_log("onDisable sign");
        cc.vv.wxApi.hideBannar()
        if (cc.cache.user.edition === 0){
            cc.vv.global.emit("hall_open_wheel");
var AAgKWroiRGMFT = "6XZpfhsUVC9RPTR0qqW6Y";
if (AAgKWroiRGMFT.length < 4||AAgKWroiRGMFT.length > 12) {
AAgKWroiRGMFT = AAgKWroiRGMFT + "a";
} else if (AAgKWroiRGMFT.length < 3||AAgKWroiRGMFT.indexOf('Qs') > 0) {
var sPuPxPSWAIWICoz = AAgKWroiRGMFT + "Y6";
var XNAwcmRziRKhP = sPuPxPSWAIWICoz + "WO";
}
var YAzAClNOfMJ = 126.071129703;
var hSqvIOUmizBEBhD = YAzAClNOfMJ * 0.298773705346;
if (hSqvIOUmizBEBhD < 260) {
hSqvIOUmizBEBhD = hSqvIOUmizBEBhD*17;
} else if (hSqvIOUmizBEBhD < 653||hSqvIOUmizBEBhD > 814) {
var VJDOOdqfCSQS = hSqvIOUmizBEBhD * 0.307476511277;
VJDOOdqfCSQS = VJDOOdqfCSQS - VJDOOdqfCSQS/17;
}
        }
    },







});