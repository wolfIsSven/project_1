// var Constant = require('Constant');

exports.URL = 'http://10.0.9.89:9000';
// exports.URL = 'http://10.0.0.23:9000';// 内网
// exports.URL = 'http://47.93.238.21:9000';// 外网

exports.APP_KEY = "13(*&@()9skkfs";
exports.LOGIN_KEY = "uqee20110301";
exports.PROXY_SECURIT_KEY = "His7m$#4uO2(~rP9Yu^9N";
exports.FCM = 1;

exports.APP_TYPE = 0; //查看common/Constant.js APP_TYPE (0: webapp 1: wywebapp 2: androidapp)

//热云相关配置
exports.REYUN_ADDR = "http://log.reyun.com"
exports.REYUN_IOS_APPID = "e16778fc2b793978c01229ac86e17854"
exports.REYUN_ANDROID_APPID = "b0968608bd0a0589eed76f07b301b72e"

exports.PLATFORM = {
    type: 2,
    0: {
        http_addr: "http://g.api.uqeegame.com",
        game_tag: "h5151",
        game_id: 79,
        platform: "uqee",
        platform_id: 61,
        channel: "h5151",
        login_js:"LoginH5Inner",
    },
    1: {
        http_addr: "https://g.api.uqee.com", //5151正式包
        game_tag: "test_c",
        game_id: 62,
        platform: "5151",
        platform_id: 1033,
        channel: "h5151",
        login_js:"LoginH5",
        sdk_js: "HttpSdk5151",
    },
    2: {
        pack_index: 1001,
        [1001]: { //运徕麻将
            http_addr: "https://g.api.uqee.com",
            game_tag: "yunlai_test",
            game_tag_debug: "yunlai",
            game_id: 62,
            platform: "wechat",
            platform_id: 1059,
            channel: "h5151",
            login_js:"LoginH5Wechat",
            app_id: "wxcc0b57fcc9e41273",
            video_id: "adunit-fa297f0bb49b1324",
            banner_id: "adunit-38cbd02bb5658433",
            wx_offer_id: "1450020207",
            pf_gameid: 64,
            pf_xcxid: 545,
            pf_aid: 220,
            pf_classid: 25,
        },
    },
    3: {
        http_addr: "https://g.api.uqee.com", //乐趣正式包
        game_tag: "test_c",
        game_id: 62,
        platform: "5151",
        platform_id: 1033,
        channel: "h5151",
        login_js:"LoginH5",
        sdk_js: "HttpSdk5151",
    },
};

exports.ADVER_REARDS_CD = 50; ///广告领取奖励的cd
exports.CHANNEL_ID = 1; ///广告领取奖励的cd

exports.NORMAL_COLOR = new cc.color(255, 255, 255);  //正常
exports.RED_COLOR = new cc.color(179, 175, 175);  //上海麻将听的牌
exports.CAN_TOUCH_COLOR = new cc.color(150, 150, 150);  //麻将可操作 置灰
exports.CANNOT_TOUCH_COLOR = new cc.color(160, 160, 160);  //麻将禁止操作 置灰
exports.GREEN_COLOR = new cc.color(0, 200, 0);  //财神牌颜色