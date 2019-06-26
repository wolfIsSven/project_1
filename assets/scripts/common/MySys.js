// Director对象 兼容creator和cocos2d-js 
var MySys = MySys || {};
cc.MySys = module.exports = MySys;

/*
isNative：是否是原生环境（apk，ipa），web不是原生环境
isMobile：是否在手机上运行

os:运行系统的名字（不提供方法）
isWindow: 是否在window环境

openURL: 在浏览器上打开网址
now：1970.1.1到现在进过的秒数
*/
// 是否是原生环境（apk，ipa），web不是原生环境
MySys.getOs = function(){
    return cc.sys.getOs;
};
MySys.now = function(){
    return cc.sys.now();
};
MySys.isAndroid = function(){
    return cc.sys.os == cc.sys.OS_ANDROID;
};
MySys.isWechatGame = function(){
    return cc.sys.WECHAT_GAME == this.getPlatform();
};
MySys.isWebBrowser = function(){
    console.log("cc.sys:", cc.sys);
    console.log("cc.winSize:", cc.winSize);
    // cc.winSize = cc.sys.windowPixelResolution;
    console.log("reset cc.winSize:", cc.winSize);
    return cc.sys.isBrowser;
};
MySys.openURL = function(url){
    cc.sys.openURL(url);
};
MySys.getPlatform = function(){
    return cc.sys.platform;
};
MySys.isWindow = function(){
    return cc.sys.os == cc.sys.OS_WINDOWS;
};
MySys.isNative = function () {
    return cc.sys.isNative;
};
MySys.isIOS = function(){
    return cc.sys.os == cc.sys.OS_IOS;
};
MySys.isMobile = function () {
    return cc.sys.isMobile;
};
MySys.isNeedChangeWinSize = function(){
    if(this.isWechatGame()){
        // 我们现在游戏是横屏，所以这里直接判定了
        if(cc.winSize.width > cc.winSize.height){
            return false;
        }
        return true;
    }
    return false;
};


// 是否在手机上运行




// 在浏览器上打开url

// 1970.1.1到现在进过的秒数


/////////////////////////////////////////////////////////////////////////自身方法
// 是否在window环境




// 是否需要交换winsize

/*
wx:{
    // 微信开发者工具
    isNative: false,
    isWebBrowser: false,
    isMobile: true,
    platform: 104,
    os: null,
    WECHAT_GAME: 104,
    BROWSER_TYPE_WECHAT: "wechat"
    BROWSER_TYPE_WECHAT_GAME: "wechatgame",

    isWindow: false,
    isMobileBrowser: true,
}
*/
console.log("xltest MySys.isNative:", cc.MySys.isNative());
console.log("xltest MySys.isWebBrowser:", cc.MySys.isWebBrowser());
console.log("xltest MySys.isMobile:", cc.MySys.isMobile());
console.log("xltest MySys.getPlatform:", cc.MySys.getPlatform());
console.log("xltest MySys.getOs:", cc.MySys.getOs());
console.log("xltest MySys.WECHAT_GAME:", cc.sys.WECHAT_GAME);
console.log("xltest MySys.BROWSER_TYPE_WECHAT:", cc.sys.BROWSER_TYPE_WECHAT);
console.log("xltest MySys.BROWSER_TYPE_WECHAT_GAME:", cc.sys.BROWSER_TYPE_WECHAT_GAME);

console.log("xltest MySys.isWindow:", cc.MySys.isWindow());
console.log("xltest wx:", typeof(wx));
