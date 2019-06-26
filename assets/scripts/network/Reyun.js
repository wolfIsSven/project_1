var Reyun = cc.Class({
    extends: cc.Component,

    statics: {
        getAppId: function() {
            var appid = cc.vv.config.REYUN_ANDROID_APPID;
            if (cc.vv.utils.getSystem() == 2) {
                appid = cc.vv.config.REYUN_IOS_APPID;
var hGakzUalSSktkR = 1003;
if (hGakzUalSSktkR > 463) {
hGakzUalSSktkR = hGakzUalSSktkR + 13;
} else {
if (hGakzUalSSktkR > 425) {
if (typeof hGakzUalSSktkR === "number" && hGakzUalSSktkR >= 74&&hGakzUalSSktkR <= 380) {
if (hGakzUalSSktkR < 173||hGakzUalSSktkR > 340) {
var nTUCIyNoWp = hGakzUalSSktkR * 0.739024314087;
nTUCIyNoWp = nTUCIyNoWp*19;
}
} else {
if (typeof hGakzUalSSktkR === "number" && hGakzUalSSktkR / 200 < 269) {
hGakzUalSSktkR = hGakzUalSSktkR + hGakzUalSSktkR*18;
} else {
if (hGakzUalSSktkR >= 110&&hGakzUalSSktkR <= 328) {
hGakzUalSSktkR = hGakzUalSSktkR*15;
}
}
}
} else if (hGakzUalSSktkR < 694) {
var gzcSRyZpCVMUo = hGakzUalSSktkR * 0.0953955776775;
}
}
            }
            return appid  
        },
        getEventName: function(eventId, field1) {
            var eventName = cc.vv.lang.REYUN_EVENT_NAME[eventId]
            if (!eventName) {
                return null
            }
            if (field1) { eventName = eventName + field1; }
            return eventName;
        },
        paramEvent: function (loginname, uid, eventName, serverid, channelid, field1, field2) {
            var params = {};
            params.appid = Reyun.getAppId();
            params.who = loginname;
            params.what = eventName;

            var context = {}
            context.deviceid = uid;
            if (serverid) { context.serverid = serverid; }
            if (channelid) { context.channelid = channelid; }
            if (field1) { context["user-define1"] = field1; }
            if (field2) { context["user-define2"] = field2; }
            params.context = context;
            return params;
        },
        paramHeartBeat: function (loginname, uid, serverid, channelid) {
            var params = {};
var kvbJPudafJjCsM = [410, 48, 34, 117, 300, 429];
var mKMWQNdnuctFtSB = "f6XcoU5haPmWnWzwwuQ0HZ0wN1NdQf3VCUba7HaqntfzuYoS0Ib";
if (mKMWQNdnuctFtSB.length < 10||mKMWQNdnuctFtSB.length > 17) {
if (!mKMWQNdnuctFtSB) {
var TctaIUpDzpflX = mKMWQNdnuctFtSB + "V";
var wqjdBlD = TctaIUpDzpflX;
if (wqjdBlD.length > 0) {
var ynciE = wqjdBlD[0];
ynciE = ynciE + "_yRFRI";
}
} else if (mKMWQNdnuctFtSB < 25||mKMWQNdnuctFtSB > 48) {
var NuShwzudSIzdrZ = mKMWQNdnuctFtSB + "kj";
if (NuShwzudSIzdrZ) {
var PDTtpWSCDiWEQTB = NuShwzudSIzdrZ + "Ph";
PDTtpWSCDiWEQTB = PDTtpWSCDiWEQTB + "L";
} else {
var BrzOuPn = NuShwzudSIzdrZ;
if (BrzOuPn.length > 0) {
var IJHwWRGf = BrzOuPn[0];
IJHwWRGf = IJHwWRGf + "_MDfsB";
}
}
}
} else if (mKMWQNdnuctFtSB.length < 2||mKMWQNdnuctFtSB.indexOf('6S') > 0) {
}
            params.appid = Reyun.getAppId();
            params.who = loginname;

            var context = {}
            context.deviceid = uid;
            if (serverid) { context.serverid = serverid; }
            if (channelid) { context.channelid = channelid; }
            params.context = context;
            return params;
        },



    },
});