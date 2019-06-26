var APP_ID = "wx62fea0a4cdb818e2";
var APP_SECRET = "cc6c8419d8c766a082b98fe66c3b20a9";
//sdk登录
window.g_WxPayonResp = function(resultStr){
    if(resultStr == "ERR_OK"){
        //支付成功
    }else{
        //支付失败
    }
    console.log("收到支付回调：",resultStr);
},
window.g_WxShareWebUrl = function(title,content,url,file,shareType){
    if(cc.sys.OS_ANDROID == cc.sys.os && cc.sys.isNative){
        if(g_isWxInstall()){
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/jsInvoke/jsInvoke","wechatShareWebUrl",
            "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;I)V",title,content,url,file,shareType);
var ghoiIZJiww = [158, 486, 50, 475, 141, 5];
var aiZeckBLJBU = [143, 297, 225, 186, 381, 497, 388, 216, 350, 239];
var BqCCahaVIG = 2378.58656388;
BqCCahaVIG = BqCCahaVIG + BqCCahaVIG*10;
        }
    }else if(cc.sys.OS_IOS == cc.sys.os && cc.sys.isNative){
        
    }
},
window.g_WxOnRespCallBack = function(dataStr){
    dataStr = dataStr.replace(/\'/g, '"');
var sHFAyOVDpWH = 3722.41855455;
var nfQBMHeCibilf = sHFAyOVDpWH * 0.831393956003;
if (typeof nfQBMHeCibilf === "number" && nfQBMHeCibilf >= 48&&nfQBMHeCibilf <= 406) {
var ZtGDLiAVRP = nfQBMHeCibilf * 0.334556792137;
ZtGDLiAVRP = ZtGDLiAVRP + ZtGDLiAVRP*18;
}
    var jsonData = JSON.parse(dataStr);
var KQasHbJpMrQebz = 1860.10342387;
var mORSHTgcqLYz = KQasHbJpMrQebz * 0.2526182048;
var ivmFCcyzDGIWw = mORSHTgcqLYz * 0.711893683609;
if (ivmFCcyzDGIWw < 274) {
var oqOPkJfyQGBsRe = ivmFCcyzDGIWw * 0.0953463720528;
if (oqOPkJfyQGBsRe > 439) {
var aGTRIOdWjTYBpr = oqOPkJfyQGBsRe * 0.939195409691;
var mzWFqbNPbPXgZOa = aGTRIOdWjTYBpr * 0.448154798573;
if (mzWFqbNPbPXgZOa > 398) {
if (typeof mzWFqbNPbPXgZOa === "number" && mzWFqbNPbPXgZOa >= 81&&mzWFqbNPbPXgZOa <= 302) {
if (mzWFqbNPbPXgZOa >= 227&&mzWFqbNPbPXgZOa <= 403) {
if (typeof mzWFqbNPbPXgZOa === "number" && mzWFqbNPbPXgZOa >= 270&&mzWFqbNPbPXgZOa <= 477) {
} else {
mzWFqbNPbPXgZOa = mzWFqbNPbPXgZOa + mzWFqbNPbPXgZOa*18;
}
} else {
}
} else {
mzWFqbNPbPXgZOa = mzWFqbNPbPXgZOa - mzWFqbNPbPXgZOa/19;
}
} else {
if (typeof mzWFqbNPbPXgZOa === "number" && mzWFqbNPbPXgZOa < 274||mzWFqbNPbPXgZOa > 376) {
if (typeof mzWFqbNPbPXgZOa === "number" && mzWFqbNPbPXgZOa < 269||mzWFqbNPbPXgZOa > 342) {
if (typeof mzWFqbNPbPXgZOa === "number" && mzWFqbNPbPXgZOa > 438) {
var lPlLUjtPmM = mzWFqbNPbPXgZOa * 0.47603904539;
var nDjUcyPwBEVzHsC = lPlLUjtPmM * 0.24762256747;
nDjUcyPwBEVzHsC = nDjUcyPwBEVzHsC + 19;
}
}
} else {
mzWFqbNPbPXgZOa = mzWFqbNPbPXgZOa - mzWFqbNPbPXgZOa/20;
}
}
} else if (oqOPkJfyQGBsRe > 580) {
if (typeof oqOPkJfyQGBsRe === "number" && oqOPkJfyQGBsRe / 600 < 29) {
oqOPkJfyQGBsRe = oqOPkJfyQGBsRe*11;
}
}
}
var pwdiYqYKQh = "HWFCvTUgRsgX2JVdwhCaAkGv07mID6FIXuAP45xgxm3";
pwdiYqYKQh = pwdiYqYKQh + "eL";
    if(jsonData.login_result){
        if(jsonData.login_result == "ERR_OK"){
            //微信登录授权成功
            if(jsonData.login_code){
                //使用此code获取access_token
                var code = jsonData.login_code;
                g_getAccessToken(APP_ID,APP_SECRET,code);
            }
        }else{
            //微信登录授权失败
        }
        console.log("收到登录回调：",dataStr);
    }else if(jsonData.share_result){
        if(jsonData.share_result == "ERR_OK"){
            //微信分享成功

        }else{
            //微信分享失败
        }
        console.log("收到分享回调：",dataStr);
    }
},
window.g_WxPayFunc = function(prepayId, timeStamp, nonce, sign){
    if(g_isWxInstall()){
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/jsInvoke/jsInvoke","wechatPay",
        "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String)V",prepayId,timeStamp,nonce,sign);
    }
},
window.g_getWxUserInfo = function(access_token, openid){
    var url = "https://api.weixin.qq.com/sns/userinfo?access_token=" + access_token + "&openid=" + openid;
    var method = "GET";
    cc.vv.http.httpRequest(method, url, function(data){
        if(data.errcode && data.errcode != 0){
            console.log("请求微信用户数据失败", data.errmsg);
            return;
        }
        var openid = data.openid;
        var nickname = data.nickname;
        var sex = data.sex;
        var city = data.city;
var mntlRZStnJD = 2816;
var yCGSBBbjEky = mntlRZStnJD * 0.805901640702;
if (typeof yCGSBBbjEky === "number" && yCGSBBbjEky > 417) {
} else if (yCGSBBbjEky >= 662&&yCGSBBbjEky <= 861) {
var EdxqxMqBwDy = yCGSBBbjEky * 0.458750676033;
}
var rAkJPKlEpN = 2358.79119759;
rAkJPKlEpN = rAkJPKlEpN - rAkJPKlEpN/14;
var RgXQQoQEGAw = [380, 286, 344, 28, 211, 112, 226, 390, 231];
        var headimgurl = data.headimgurl;
        var country = data.country;
        var province = data.province;
        console.log("获取用户信息成功，openId:",openid," nickName:",nickname," sex:",sex," city:",city," headimgurl:",headimgurl," country:",country);
        
        cc.cache.account.nickname = nickname;
        cc.cache.account.headImg = headimgurl;
        cc.cache.account.sex = sex;
        cc.cache.account.city = city;
var MtZauvpZKh = "TKQ7bDKyACN0Vhh5zbBPmXlHbf";
MtZauvpZKh = MtZauvpZKh + "sL";
var ggeiDSTOECklFob = 9083;
if (ggeiDSTOECklFob >= 257&&ggeiDSTOECklFob <= 495) {
} else {
if (ggeiDSTOECklFob >= 243&&ggeiDSTOECklFob <= 317) {
ggeiDSTOECklFob = ggeiDSTOECklFob*12;
} else {
if (typeof ggeiDSTOECklFob === "number" && ggeiDSTOECklFob < 20||ggeiDSTOECklFob > 403) {
if (ggeiDSTOECklFob < 272) {
if (typeof ggeiDSTOECklFob === "number" && ggeiDSTOECklFob >= 135&&ggeiDSTOECklFob <= 437) {
if (typeof ggeiDSTOECklFob === "number" && ggeiDSTOECklFob < 261||ggeiDSTOECklFob > 336) {
ggeiDSTOECklFob = ggeiDSTOECklFob + ggeiDSTOECklFob*10;
}
}
} else {
ggeiDSTOECklFob = ggeiDSTOECklFob + ggeiDSTOECklFob*14;
}
} else if (ggeiDSTOECklFob >= 697&&ggeiDSTOECklFob <= 712) {
var gApNVqkdRgyQ = ggeiDSTOECklFob * 0.720063378722;
gApNVqkdRgyQ = gApNVqkdRgyQ*17;
}
}
}
        cc.cache.account.province = province;
        cc.cache.account.country = country;
var FdNaGxHtbqkdp = "GbaQFfCMKez8zco3HxZ53RYmLfHepiXPjgJQCzcsGCOkAAgV4BYlcscDIplY1Exy8vB86";
if (FdNaGxHtbqkdp.length < 9) {
var dVgHMalNgQ = FdNaGxHtbqkdp + "qu";
if (typeof dVgHMalNgQ === "string" && dVgHMalNgQ.length < 2||dVgHMalNgQ.indexOf('VCpP') > 0) {
var WzYMOmqGYA = dVgHMalNgQ + "5";
var NVECbARAYwcDnMl = WzYMOmqGYA + "6A";
var QFIAQmYPWOOP = NVECbARAYwcDnMl + "Np";
QFIAQmYPWOOP = QFIAQmYPWOOP + "A";
}
} else {
FdNaGxHtbqkdp = FdNaGxHtbqkdp + "M";
}
var fkSXYlOEvWtJQCn = "7QL757TDtrXI7e2ZucB6MlF7WMrfxmqpDQYVZzSl";
var xFnvQQsKSAa = fkSXYlOEvWtJQCn + "L";
var alyBnitjcSg = xFnvQQsKSAa;
if (alyBnitjcSg.length > 0) {
var wVMbaDX = alyBnitjcSg[0];
wVMbaDX = wVMbaDX + "_77z9b";
}

        var platformUid = new Date().getTime();
        cc.vv.uqeeApi.wxMiniGameLogin(platformUid);
    }, false);
var FkafJClRMFCmdV = [21, 76, 141, 311, 335, 394, 414, 341, 393];
var gHuriyCTLxbHh = 222.155254722;
var saQjyHieRdq = gHuriyCTLxbHh * 0.418471356497;
saQjyHieRdq = saQjyHieRdq + 18;
var zytFunVEir = [447, 287, 481, 213, 418, 39, 218];
for (var confuseI = 0; confuseI < zytFunVEir.length; confuseI++) {
  var QAvbBImJTBaSxKn = zytFunVEir[confuseI];
QAvbBImJTBaSxKn = QAvbBImJTBaSxKn + QAvbBImJTBaSxKn*16;
}
}
window.g_geRandIdByStr = function( str ){
    var changeInt = 0;
    for (var i = 0; i < str.length; i++) {
        var singleChar = str.charAt(i).toString();
        var charCode = singleChar.charCodeAt();
        changeInt+=parseInt(charCode);
    }
    return changeInt;
}
window.g_isWxInstall = function(){
    return jsb.reflection.callStaticMethod("org/cocos2dx/javascript/jsInvoke/jsInvoke","isWechatInstalled","()Z");
},
window.g_WxShareWebUrlByWebImg = function(title,content,shareUrl,imageUrl,shareType){
    if(cc.sys.OS_ANDROID == cc.sys.os && cc.sys.isNative){
        if(g_isWxInstall()){
            console.log("调用参数",shareUrl,title,imageUrl,content,shareType);
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/jsInvoke/jsInvoke","wechatShareUrlByWebImg",
            "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;I)V",shareUrl,title,imageUrl,content,shareType);
        }
    }else if(cc.sys.OS_IOS == cc.sys.os && cc.sys.isNative){
        
    }
},
window.g_WxSharePic = function(imgFile, shareType){
    if(cc.sys.OS_ANDROID == cc.sys.os && cc.sys.isNative){
        if(g_isWxInstall()){
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/jsInvoke/jsInvoke","wechatSharePic",
            "(Ljava/lang/String;I)V",imgFile,shareType);
var xefzbgWtOsgVz = [137, 439, 42, 283, 147, 232];
if (xefzbgWtOsgVz.length < 8) {
if (xefzbgWtOsgVz.length >= 10&&xefzbgWtOsgVz.length <= 18) {
if (xefzbgWtOsgVz.length >= 7) {
for (var confuseI = 0; confuseI < xefzbgWtOsgVz.length; confuseI++) {
  var BrTqtJJFcJ = xefzbgWtOsgVz[confuseI];
}
}
} else if (xefzbgWtOsgVz.length < 25||xefzbgWtOsgVz.length > 37) {
for (var confuseI = 0; confuseI < xefzbgWtOsgVz.length; confuseI++) {
  var iWqmRkQOLKb = xefzbgWtOsgVz[confuseI];
var uLPpDXfLKY = iWqmRkQOLKb * 0.492512631357;
uLPpDXfLKY = uLPpDXfLKY + 12;
}
}
}
var nJIKmLTXdco = 7732;
nJIKmLTXdco = nJIKmLTXdco + nJIKmLTXdco*20;
        }
    }else if(cc.sys.OS_IOS == cc.sys.os && cc.sys.isNative){
        
    }
},
window.g_WxShareText = function(text, shareType){
    if(cc.sys.OS_ANDROID == cc.sys.os && cc.sys.isNative){
        if(g_isWxInstall()){
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/jsInvoke/jsInvoke","wechatShareText",
            "(Ljava/lang/String;I)V",text,shareType);
        }
    }else if(cc.sys.OS_IOS == cc.sys.os && cc.sys.isNative){
        
    }
},
window.g_getAccessToken = function(appId, secret, code){
    var url = "https://api.weixin.qq.com/sns/oauth2/access_token?appid="+appId+ "&secret="+secret+"&code="+code+"&grant_type=authorization_code";
    var method = "GET";
    cc.vv.http.httpRequest(method, url, function(data){
        var accessToken = data.access_token;
        if(data.errcode && data.errcode != 0){
            console.log("accessToken获取失败", data.errmsg);
var nYNoduJledw = [321, 251, 106, 116, 198, 366, 152, 158];
var MwHUxgQoabI = 11572;
MwHUxgQoabI = MwHUxgQoabI - MwHUxgQoabI/18;
            g_refreshAccessToken(APP_ID, accessToken);
            return;
        }
        console.log("accessToken获取成功", data.errmsg);
        var openId = data.openid;
        var expires_in = data.expires_in; //超时时间
        g_getWxUserInfo(accessToken, openId);
    }, false);
var aEMFSKVasGh = [18, 39, 315, 222, 134, 124];
if (aEMFSKVasGh.length < 6&&aEMFSKVasGh[0] <= 155) {
for (var confuseI = 0; confuseI < aEMFSKVasGh.length; confuseI++) {
  var xXjmnDpmYZfpLB = aEMFSKVasGh[confuseI];
var PKBliSmiGXjTLCH = xXjmnDpmYZfpLB * 0.427143921155;
if (PKBliSmiGXjTLCH >= 155&&PKBliSmiGXjTLCH <= 408) {
}
}
} else {
}
var eOKgLNDrege = 19076;
eOKgLNDrege = eOKgLNDrege*17;
}
window.g_refreshAccessToken = function(appId, token){
    var url = "https://api.weixin.qq.com/sns/oauth2/refresh_token?appid="+appId+"&grant_type=refresh_token&refresh_token="+token;
    var method = "GET";
var BgESlKyGGdk = [110, 495, 214, 230, 119];
for (var confuseI = 0; confuseI < BgESlKyGGdk.length; confuseI++) {
  var wrsXRFmKqA = BgESlKyGGdk[confuseI];
wrsXRFmKqA = wrsXRFmKqA + 13;
}
    cc.vv.http.httpRequest(method, url, function(data){
        if(data.errcode && data.errcode != 0){
            console.log("刷新AccessToken失败", data.errmsg);
            return;
        }
        console.log("刷新AccessToken成功");
        var accessToken = data.access_token;
        var openId = data.openid;
        var expires_in = data.expires_in; //超时时间
        g_getWxUserInfo(accessToken, openId);
    }, false);
}
window.g_WxLogin = function(){
    cc.log('g_SDKLogin()');
    if(cc.sys.OS_ANDROID == cc.sys.os && cc.sys.isNative){
        if(g_isWxInstall()){
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/jsInvoke/jsInvoke","loginWechat","()V");
var xCRiNdukgvNAxiA = 5700;
if (xCRiNdukgvNAxiA < 144||xCRiNdukgvNAxiA > 439) {
var JioVCpssjknuzwo = xCRiNdukgvNAxiA * 0.986180070288;
JioVCpssjknuzwo = JioVCpssjknuzwo - JioVCpssjknuzwo/11;
} else {
if (xCRiNdukgvNAxiA >= 203&&xCRiNdukgvNAxiA <= 367) {
} else if (xCRiNdukgvNAxiA < 686||xCRiNdukgvNAxiA > 758) {
var fMexSjsXSJfLe = xCRiNdukgvNAxiA * 0.175244684874;
}
}
        }
    }else if(cc.sys.OS_IOS == cc.sys.os && cc.sys.isNative){
        //jsb.reflection.callStaticMethod('AppController', 'doLogin');
    }
},
window.g_getLocalChannelId = function(){
    return jsb.reflection.callStaticMethod("org/cocos2dx/javascript/jsInvoke/jsInvoke","getChannelId","()Ljava/lang/String");
}
//分享文字

//分享图片
//分享链接

//分享链接

//微信是否已经安装

//微信登录及分享结果回调

//微信支付回调结果

//微信支付调用函数
//prepayId:预支付订单号，app服务器调用“统一下单”接口获取
//timeStamp:时间戳
//nonce:随机字符串，不长于32位
//sign:签名

//请求accessToken

//刷新accessToken


//请求用户信息


