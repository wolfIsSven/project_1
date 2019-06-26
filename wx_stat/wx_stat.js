/**
 * 注册统计
 */

var appid = "wxcc0b57fcc9e41273";

class WxStat {
    constructor(param) {
    }

    create() {
        if (!cc.sys.localStorage.getItem('is_newer')) {
            wx.setStorage({
                key: "is_newer",
                data: 1,
            })
            var self = this;
            wx.login({
                success: function (res) {
                    console.log("WxStat wx.login！res:", res);
                    var wxLoginCode = res.code;
                    var LaunchOption = wx.getLaunchOptionsSync();
                    var scene = 555;
                    var source = "";
                    if (LaunchOption) {
                        console.log("WxStat create ！LaunchOption",LaunchOption);
                        scene = LaunchOption.scene;
                        if (LaunchOption.referrerInfo && LaunchOption.referrerInfo.appId) {
                            source = LaunchOption.referrerInfo.appId;
                        }
                        if (LaunchOption.query && LaunchOption.query.source) {
                            source = LaunchOption.query.source;
                        }
                        if (LaunchOption.query && LaunchOption.query.scene) {
                            source = LaunchOption.query.scene;
                        }                        
                    }
                    wx.request({
                        url: 'https://g.api.uqee.com/rest/maque/stat',
                        data: {
                            appid:appid,
                            scene:scene,
                            source:source,
                            login_code:wxLoginCode,
                        },
                        method: 'GET',
                        success(res) {
                            console.log("send wx create log ok!res:", res)
                        }
                    });
                },
                fail: function (res) {
                }
            });
        }
    }
}

module.exports.WxStat = WxStat;
