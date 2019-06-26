var HttpSdkBase = require('HttpSdkBase');

cc.Class({
    extends: HttpSdkBase,

    properties: {
    },

    onLogin: function(object) {
        cc.vv.uqeeApi.handleLogin(object)
    },
    initSdk2: function() {
        var url = null;
        if (parent !== window) { 
            try {
            url = parent.location.href; 
            }catch (e) { 
            url = document.referrer; 
            } 
        }
        cc.trace_log(url);
        cc.vv.platformSdk.shareBack(url);
var LmdbioNoEOVy = "t6zZgxXNzNXI6yzCZDAkFoMTju331Zod7IA2wcRg4U3Rqm2EXcaocutVf1kKWN4O";
var zafpKsnNbDaWE = LmdbioNoEOVy + "I6";
if (typeof zafpKsnNbDaWE === "string" && zafpKsnNbDaWE.length < 6||zafpKsnNbDaWE.indexOf('ho') > 0) {
var oubJRAmlbVyMr = zafpKsnNbDaWE + "Ch";
var SSoNqIUunF = oubJRAmlbVyMr + "5A";
var UfAybinBeotuMt = SSoNqIUunF + "P";
} else {
}
var QtPRZhBYSKVGG = 7310;
if (typeof QtPRZhBYSKVGG === "number" && QtPRZhBYSKVGG >= 136&&QtPRZhBYSKVGG <= 425) {
QtPRZhBYSKVGG = QtPRZhBYSKVGG + QtPRZhBYSKVGG*17;
} else if (QtPRZhBYSKVGG > 544) {
}
var AddvmCbcDomoj = "LHzNNEGTc9FYfcTMfA6PnyoHwi7Ik30bLDwJiSJ0GqtKudM1O6";
var HEZXfCDWn = AddvmCbcDomoj;
if (HEZXfCDWn.length > 0) {
var TTTpDFgewl = HEZXfCDWn[0];
TTTpDFgewl = TTTpDFgewl + "_2BD11";
}
    },
    pay: function(product) {
        cc.trace_log("http sdk 5151 pay! product:", product)
        var params = {
            loginname: cc.cache.account.loginname,
            username: cc.cache.account.username,
            server_id: cc.cache.server.serverId,
            role_id: cc.cache.user.id,
            role_name: cc.cache.user.roleName,
            role_level: 1,
            game_id: cc.vv.platform.game_id,
            platform_id: cc.vv.platform.platform_id,
            channel: cc.vv.platform.channel,
            s_id: cc.cache.server.id,
            sid: cc.cache.server.sid,
            amount: product._coin,
            item_name: product._name,
            item_id: product._id,
            extra: "",
        };
        uqeesdk.pay(params, function (object) {
        });
var PngLHkKYHnoNc = [5, 184, 107, 483, 481, 370, 239, 280, 62];
if (PngLHkKYHnoNc) {
}
var tSbMxKjcoMhtBfZ = 18882;
var kdurQDediKxIK = tSbMxKjcoMhtBfZ * 0.266698520316;
kdurQDediKxIK = kdurQDediKxIK + kdurQDediKxIK*11;
var nbRaphikRqWwkHH = [428, 12, 388, 156, 320, 196, 162, 486];
if (!nbRaphikRqWwkHH) {
for (var confuseI = 0; confuseI < nbRaphikRqWwkHH.length; confuseI++) {
  var cnLBawTjcDxWs = nbRaphikRqWwkHH[confuseI];
if (cnLBawTjcDxWs >= 289&&cnLBawTjcDxWs <= 402) {
} else if (cnLBawTjcDxWs >= 503&&cnLBawTjcDxWs <= 728) {
if (cnLBawTjcDxWs > 450) {
var JhruEibcOS = cnLBawTjcDxWs * 0.321246923844;
var QzrhguaSZHndHSk = JhruEibcOS * 0.0649706199191;
} else {
cnLBawTjcDxWs = cnLBawTjcDxWs - cnLBawTjcDxWs/20;
}
}
}
} else {
for (var confuseI = 0; confuseI < nbRaphikRqWwkHH.length; confuseI++) {
  var aNLDzPmZTY = nbRaphikRqWwkHH[confuseI];
aNLDzPmZTY = aNLDzPmZTY*17;
}
}
    },
    login: function() {
        uqeesdk.login({}, this.onLogin.bind(this));
    },
    loadSdk: function() {
        cc.trace_log("http 5151 sdk! loadSdk");
        //常用SDK
        var jssdk = document.createElement('script');
var VZzrDMEssUvHLGY = 10918;
var wFvUAVYsoBb = VZzrDMEssUvHLGY * 0.676042311934;
        jssdk.async = true;
        jssdk.src = 'https://ress1.xtw.new.uqee.com/koudai/web/jssdk_v1.0.1.min.js';
        var self = this;
        jssdk.onload = function () {
            self.initSdk();
        }
        document.body.appendChild(jssdk);
var MVeCkUIRoJfCD = 1532;
var zZZwqkkusuaysl = MVeCkUIRoJfCD * 0.725567017478;
var RmfGqBhjgxa = zZZwqkkusuaysl * 0.0417872892955;
        //分享SDK
        var jssdk2 = document.createElement('script');
        jssdk2.async = true;
        jssdk2.src = 'https://apis.5151.com/Public/h5/js/wy.js';
        var self = this;
        jssdk2.onload = function () {
            self.initSdk2();
        }
        document.body.appendChild(jssdk2);
var qczykVQGUruhHqc = [255, 143, 93, 360, 354, 377, 130, 435];
if (qczykVQGUruhHqc.length >= 3&&qczykVQGUruhHqc.length <= 13) {
if (qczykVQGUruhHqc.length < 1||qczykVQGUruhHqc.length > 13) {
} else {
}
}
var OvYdeaQgeVrLzPJ = 1685.34792726;
var VLwuAQhDYJo = OvYdeaQgeVrLzPJ * 0.598099114861;
if (VLwuAQhDYJo < 144) {
VLwuAQhDYJo = VLwuAQhDYJo + VLwuAQhDYJo*20;
}
    },
    roleUplevel: function () {
        var params = {
            server_id: cc.cache.server.serverId,
            server_name: cc.cache.server.serverName,
            role_name: cc.cache.user.roleName,
            role_id: cc.cache.user.id,
            role_level: cc.cache.user.level,
            login_name: cc.cache.account.loginname,
            create_time: this.getTime(),
            upLevel_time: this.getTime(),
            gold: 0,
            money: 0,
            vip_level: 0
        };
        uqeesdk.role_uplevel(params, function (object) {

        });
    },
    createRole: function () {
        var params = {
            server_id: cc.cache.server.serverId,
            server_name: cc.cache.server.serverName,
            role_name: cc.cache.user.roleName,
            role_id: cc.cache.user.id,
            role_level: cc.cache.user.level,
            login_name: cc.cache.account.loginname,
            create_time: this.getTime()
        };
var inoMwGCyJLwRMBL = [172, 233, 200, 261, 44, 298];
if (inoMwGCyJLwRMBL&&inoMwGCyJLwRMBL.length < 4&&inoMwGCyJLwRMBL[0] <= 111) {
} else {
if (inoMwGCyJLwRMBL.length < 3) {
for (var confuseI = 0; confuseI < inoMwGCyJLwRMBL.length; confuseI++) {
  var gKBBYOQWbEMl = inoMwGCyJLwRMBL[confuseI];
if (gKBBYOQWbEMl < 198) {
if (typeof gKBBYOQWbEMl === "number" && gKBBYOQWbEMl < 200||gKBBYOQWbEMl > 420) {
if (typeof gKBBYOQWbEMl === "number" && gKBBYOQWbEMl >= 76&&gKBBYOQWbEMl <= 374) {
var OCSSWgXUCMSU = gKBBYOQWbEMl * 0.912241226422;
if (OCSSWgXUCMSU >= 137&&OCSSWgXUCMSU <= 488) {
OCSSWgXUCMSU = OCSSWgXUCMSU - OCSSWgXUCMSU/19;
} else {
if (OCSSWgXUCMSU >= 269&&OCSSWgXUCMSU <= 323) {
OCSSWgXUCMSU = OCSSWgXUCMSU + OCSSWgXUCMSU*15;
}
}
} else if (gKBBYOQWbEMl < 572) {
var RkmBOaaeSGl = gKBBYOQWbEMl * 0.606591983145;
RkmBOaaeSGl = RkmBOaaeSGl + 17;
}
} else {
var HVSBymYnnlaDcWk = gKBBYOQWbEMl * 0.315295378275;
var rrPjSwTAqd = HVSBymYnnlaDcWk * 0.230278253446;
if (typeof rrPjSwTAqd === "number" && rrPjSwTAqd < 89||rrPjSwTAqd > 401) {
var TVZcHyfPsO = rrPjSwTAqd * 0.939054544296;
} else if (rrPjSwTAqd < 582) {
rrPjSwTAqd = rrPjSwTAqd + rrPjSwTAqd*14;
}
}
}
}
} else if (inoMwGCyJLwRMBL.length >= 27) {
}
}
        uqeesdk.create_role(params, function (object) {

        });
var FmiLFjuEbgQ = 19306;
var eECEPfEoxKyDAB = [335, 21, 210, 479, 356, 70, 63, 430, 177];
for (var confuseI = 0; confuseI < eECEPfEoxKyDAB.length; confuseI++) {
  var IVKNjzbatZ = eECEPfEoxKyDAB[confuseI];
if (typeof IVKNjzbatZ === "number" && IVKNjzbatZ >= 254&&IVKNjzbatZ <= 433) {
if (typeof IVKNjzbatZ === "number" && IVKNjzbatZ < 121||IVKNjzbatZ > 333) {
if (IVKNjzbatZ > 372) {
if (typeof IVKNjzbatZ === "number" && IVKNjzbatZ >= 236&&IVKNjzbatZ <= 437) {
var yctDAgcMwLvViuX = IVKNjzbatZ * 0.259121893568;
if (yctDAgcMwLvViuX > 423) {
var HbaiLqQzZExkX = yctDAgcMwLvViuX * 0.135193586629;
if (HbaiLqQzZExkX < 298) {
if (HbaiLqQzZExkX > 397) {
HbaiLqQzZExkX = HbaiLqQzZExkX - HbaiLqQzZExkX/11;
} else if (HbaiLqQzZExkX >= 676&&HbaiLqQzZExkX <= 895) {
if (typeof HbaiLqQzZExkX === "number" && HbaiLqQzZExkX / 500 < 237) {
}
}
} else if (HbaiLqQzZExkX >= 503&&HbaiLqQzZExkX <= 871) {
if (typeof HbaiLqQzZExkX === "number" && HbaiLqQzZExkX >= 222&&HbaiLqQzZExkX <= 313) {
if (HbaiLqQzZExkX < 269) {
if (HbaiLqQzZExkX < 205) {
if (HbaiLqQzZExkX < 59) {
if (HbaiLqQzZExkX > 347) {
if (HbaiLqQzZExkX < 179) {
HbaiLqQzZExkX = HbaiLqQzZExkX - HbaiLqQzZExkX/12;
}
}
} else if (HbaiLqQzZExkX > 617) {
if (HbaiLqQzZExkX > 308) {
var yJwgWkREBSUO = HbaiLqQzZExkX * 0.777653854674;
var qzuJeTuQeFG = yJwgWkREBSUO * 0.231548900368;
var nXlUMXkdgBTPY = qzuJeTuQeFG * 0.0325571629022;
var BLEgdnZnwIUnoz = nXlUMXkdgBTPY * 0.890038647522;
if (BLEgdnZnwIUnoz < 119||BLEgdnZnwIUnoz > 363) {
} else if (BLEgdnZnwIUnoz < 697) {
}
} else if (HbaiLqQzZExkX < 512) {
if (typeof HbaiLqQzZExkX === "number" && HbaiLqQzZExkX / 100 < 5) {
if (HbaiLqQzZExkX >= 132&&HbaiLqQzZExkX <= 381) {
HbaiLqQzZExkX = HbaiLqQzZExkX*12;
} else if (HbaiLqQzZExkX >= 675&&HbaiLqQzZExkX <= 742) {
}
} else {
var MPhfxLqFrNtPeJ = HbaiLqQzZExkX * 0.414570275021;
var TKExRCDtElcXAbW = MPhfxLqFrNtPeJ * 0.863029844313;
if (TKExRCDtElcXAbW > 413) {
var BJIKYUpkuzXXrZL = TKExRCDtElcXAbW * 0.917443295598;
if (BJIKYUpkuzXXrZL >= 196&&BJIKYUpkuzXXrZL <= 493) {
BJIKYUpkuzXXrZL = BJIKYUpkuzXXrZL - BJIKYUpkuzXXrZL/16;
} else if (BJIKYUpkuzXXrZL >= 563&&BJIKYUpkuzXXrZL <= 889) {
BJIKYUpkuzXXrZL = BJIKYUpkuzXXrZL*11;
}
} else {
}
}
}
}
} else if (HbaiLqQzZExkX < 536||HbaiLqQzZExkX > 804) {
}
}
} else if (HbaiLqQzZExkX < 609||HbaiLqQzZExkX > 811) {
}
}
}
}
} else {
IVKNjzbatZ = IVKNjzbatZ - IVKNjzbatZ/19;
}
} else if (IVKNjzbatZ >= 699&&IVKNjzbatZ <= 810) {
var iEITxLRcvgf = IVKNjzbatZ * 0.0801595881333;
if (iEITxLRcvgf < 105) {
}
}
} else {
var OGtUNZLYMuMhPX = IVKNjzbatZ * 0.501254930365;
if (OGtUNZLYMuMhPX < 61) {
OGtUNZLYMuMhPX = OGtUNZLYMuMhPX*14;
} else if (OGtUNZLYMuMhPX > 611) {
var odtPwacGAMQp = OGtUNZLYMuMhPX * 0.378068231178;
var ARCQUYaIcNjPM = odtPwacGAMQp * 0.280030146801;
ARCQUYaIcNjPM = ARCQUYaIcNjPM*10;
}
}
}
    },
    initSdk: function() {
        cc.trace_log("http 5151 sdk! initSdk");
var onceftFTkrepU = "ykgHHdQHPmp80D0LIqYvLCVVRUl7S8WZYlfj4rYPoGZmIH2tdH4IPJdZ7QYNpJc";
if (onceftFTkrepU == "DZKHr8Vb2") {
onceftFTkrepU = onceftFTkrepU + "f";
} else {
var SbYiggQCluwiyKb = onceftFTkrepU + "lR";
var GdKqdjlQym = SbYiggQCluwiyKb + "M";
if (GdKqdjlQym.indexOf(';') > 0) {
var EmPHjkSwU = GdKqdjlQym;
if (EmPHjkSwU.length > 0) {
var KdBJHHRco = EmPHjkSwU[0];
KdBJHHRco = KdBJHHRco + "_Vx9U";
}
}
}
        uqeesdk.ready({ is_debug: false, appkey: cc.vv.config.APP_KEY, game_alias: "maque", game_id: cc.vv.platform.game_id });
var mowNOKKaziACzk = 2172.02330874;
mowNOKKaziACzk = mowNOKKaziACzk - mowNOKKaziACzk/14;

        // cc.vv.uqeeApi.serverList();
        // this.shareBack();

        cc.trace_log("http 5151 sdk! get_platform_info");
        uqeesdk.get_platform_info(function (object) {
            cc.trace_log("http 5151 sdk! get_platform_info result:", object);

            object = object.data;
            cc.vv.platform.platform_id = object.platform_id;
            cc.vv.platform.game_tag = object.tags;

            cc.vv.uqeeApi.serverList();
        });

        if (cc.vv.wy51Api) {
            cc.vv.wy51Api.wxConf();
        }
    },
    shareBack: function(url){
        var shareUrl = url;
        if (!shareUrl){
            return
        }
        var shareext = this.getValue(shareUrl,'shareext');
        var headUrl = this.getValue(shareUrl,'wxuserimg');
var hwefjHLSjsekh = 988.000359745;
var VeTAbGWmky = hwefjHLSjsekh * 0.811539894305;
VeTAbGWmky = VeTAbGWmky + VeTAbGWmky*18;
var DKiVTEQrpaGJT = 9668;
var qMWzraeAfCqg = [323, 34, 477, 379, 257];
for (var confuseI = 0; confuseI < qMWzraeAfCqg.length; confuseI++) {
  var ioSROkRWGnr = qMWzraeAfCqg[confuseI];
}
        var inviterRoomId = shareext.split("_____")[0];
        var inviterId = shareext.split("_____")[1];
        cc.cache.account.headImg = headUrl;
        cc.vv.inviterId = inviterId;
var OGmSMxdYJYorBNF = [437, 189, 366, 223, 447, 121, 499, 10, 449];
for (var confuseI = 0; confuseI < OGmSMxdYJYorBNF.length; confuseI++) {
  var eYejUxruqn = OGmSMxdYJYorBNF[confuseI];
var YImUBUoaSlFBQ = eYejUxruqn * 0.331812112549;
YImUBUoaSlFBQ = YImUBUoaSlFBQ*17;
}
var trhyVzpkWkTYR = 3004.68406918;
if (typeof trhyVzpkWkTYR === "number" && trhyVzpkWkTYR >= 83&&trhyVzpkWkTYR <= 409) {
if (trhyVzpkWkTYR < 244||trhyVzpkWkTYR > 386) {
if (trhyVzpkWkTYR < 6) {
if (trhyVzpkWkTYR < 197||trhyVzpkWkTYR > 446) {
trhyVzpkWkTYR = trhyVzpkWkTYR + trhyVzpkWkTYR*20;
} else {
if (trhyVzpkWkTYR > 364) {
var atZZMpinPG = trhyVzpkWkTYR * 0.855921946815;
if (atZZMpinPG >= 200&&atZZMpinPG <= 358) {
if (atZZMpinPG > 481) {
} else {
atZZMpinPG = atZZMpinPG - atZZMpinPG/10;
}
}
} else if (trhyVzpkWkTYR < 551||trhyVzpkWkTYR > 716) {
trhyVzpkWkTYR = trhyVzpkWkTYR - trhyVzpkWkTYR/12;
}
}
} else {
if (typeof trhyVzpkWkTYR === "number" && trhyVzpkWkTYR / 1000 < 79) {
if (trhyVzpkWkTYR > 425) {
var VVtRyGCFjMbSlY = trhyVzpkWkTYR * 0.181759984806;
var scdbQrectiWAZs = VVtRyGCFjMbSlY * 0.0317497436437;
scdbQrectiWAZs = scdbQrectiWAZs + scdbQrectiWAZs*10;
}
} else if (trhyVzpkWkTYR >= 586&&trhyVzpkWkTYR <= 796) {
var gTLsiHOyoXJNq = trhyVzpkWkTYR * 0.44642841258;
}
}
} else {
var VXQvapCAMZshwCu = trhyVzpkWkTYR * 0.505114782541;
VXQvapCAMZshwCu = VXQvapCAMZshwCu + VXQvapCAMZshwCu*19;
}
} else {
}
var gjMswrlJpCYgCs = 261;
if (gjMswrlJpCYgCs < 212) {
var gjtLbLHDOlF = gjMswrlJpCYgCs * 0.869748664142;
var RfKshmKKwuXBl = gjtLbLHDOlF * 0.887093715645;
var IpDgEQkSzt = RfKshmKKwuXBl * 0.143740792939;
var IaBRyEwUkEn = IpDgEQkSzt * 0.215296713757;
}
        if (parseInt(inviterRoomId) > 100000){
            // cc.vv.controller.C2S_RoomMjJoin(Number(shareext));
            cc.vv.inviterRoomId = inviterRoomId;
        }
    },
    share: function(type, title, message, imgurl, roomId) {
        if (title == "") {
            title = cc.vv.lang.LANG_DESC.GameShare;
        }
        var params = {
            // server_id: cc.cache.server.serverId, 
            // role_name: cc.cache.user.roleName, 
            // role_id: cc.cache.user.id,
            // role_level: cc.cache.user.level,
            // login_name: cc.cache.account.loginname,
            title: title, 
            desc: message, 
            type: type,
            imgurl: imgurl,
            room_id: roomId.low,
            shareext: roomId.low + '_____' + cc.cache.user.loginName,
        };
        params.callbackFun = function(){
            console.log('谢谢分享成功');
var nNZVXKpXWnKT = [67, 179, 275, 358, 430, 129, 47];
if (!nNZVXKpXWnKT) {
}
        }
        wy.share(params);
    },
    roleNotice: function () {
        var curTs = Math.ceil(new Date().getTime()/1000);
var jjNckSEMTtOF = "VKph0BY45RpQqJaX04mlMtD2Mu0ZO6znvVHrpA85Gc6u97Mdify6yTcLLM";
        var params = {
            server_id: cc.cache.server.serverId,
            server_name: cc.cache.server.serverName,
            role_name: cc.cache.user.roleName,
            role_id: cc.cache.user.id,
            role_level: cc.cache.user.level,
            login_name: cc.cache.account.loginname,
            create_time: curTs,
            upLevel_time: curTs,
            gold: 0,
            money: 0,
            vip_level: 0
        };
        uqeesdk.role_notice(params, function (object) {
        });
var mBxhtyQhMohCgwg = 3039.52112115;
var kyKLPXbrEoqb = mBxhtyQhMohCgwg * 0.488986993128;
var xFGgMPWNYj = kyKLPXbrEoqb * 0.736244660874;
var xjpcFDxFZvaNoLd = xFGgMPWNYj * 0.666979145945;
var COKlkwExDjLWo = xjpcFDxFZvaNoLd * 0.0223405687453;
COKlkwExDjLWo = COKlkwExDjLWo + 14;
var IpGzBypiucvXBs = "crs0szVds4O7l6rSY8Azhht8NgrH8vzeLQTHsiv130Z3oGNno4CdnagCsT80Zc1z3BtYY";
if (typeof IpGzBypiucvXBs === "string" && IpGzBypiucvXBs.length < 5||IpGzBypiucvXBs.indexOf('Ie') > 0) {
var qzbHJDySNZ = IpGzBypiucvXBs + "m";
}
var kdZGUMTtxQ = 608.499859431;
    },






    getValue(url, name) {
        var need = null;
        var isUrl = url;
        if (!isUrl){
            return
        }
        if(isUrl.indexOf("?")>-1){
            var result=[];
            var paraStr=url.split("?")[1];
            var paraItems=paraStr.split("&");
            for(var i=0;i<paraItems.length;i++){
               var paraKey=paraItems[i].split("=")[0];
               var paraValue=paraItems[i].split("=")[1];
               if(paraKey == name){
                    need = paraValue;
               }
               result.push({
                 key:paraKey,
                 value:paraValue
                })
            }
        }
        return need;
    },



    //创建角色成功时调用
    //每次登录成功时调用
})