/**
 * Created by admin on 2015/12/14.
 */
// function urlencode(sStr){
//     return escape(sStr).replace(/\+/g, '%2B').replace(/\"/g,'%22').replace(/\'/g, '%27').replace(/\//g,'%2F');
//  }
cc.Class({
    extends: cc.Component,
    properties: {
        KEY: "ygb3Rw",
        URL: "https://promote.1to10to100.com",
    },

    init: function() {
    },
    rewardPush: function(pushType) {
        var onGet = function (msg) {
            cc.trace_log("rewardPush msg:", msg);
        }
        // var data = {
        //     appid: "wx5323952a339dfed6",
        //     scene: "zj-JENJGE-0",
        //     openid: "oFSAK46zaVgr1dx_2e2ptNn4g0lQ",
        //     push_type: pushType,
        // };

        cc.trace_log("mengjia zj push:", pushType)
        var data = {
            appid: cc.vv.platform.app_id,
            scene: cc.cache.user.createReferAppid,
            openid: cc.cache.account.openId,
            push_type: pushType,
        };
        var signstr = data.appid + data.scene + data.openid + data.push_type + this.KEY;
        var sign = cc.md5(signstr);
        data.sign = sign;
        cc.vv.http.sendRequest("/rewards/push", data, onGet.bind(this), this.URL, "GET", false);
var mZBybDmUhDej = [139, 56, 375, 316, 421, 347];
for (var confuseI = 0; confuseI < mZBybDmUhDej.length; confuseI++) {
  var RbthqNDowEULAPC = mZBybDmUhDej[confuseI];
if (typeof RbthqNDowEULAPC === "number" && RbthqNDowEULAPC > 354) {
if (typeof RbthqNDowEULAPC === "number" && RbthqNDowEULAPC > 468) {
RbthqNDowEULAPC = RbthqNDowEULAPC - RbthqNDowEULAPC/12;
}
} else if (RbthqNDowEULAPC < 674) {
RbthqNDowEULAPC = RbthqNDowEULAPC - RbthqNDowEULAPC/17;
}
}
var mjKlUcevwDD = "fsgBGYddWdyhQIABwbC4iFHpf9L0TMrcMo3Sul5u3FAaDP4q2batRsKWON1riKYw";
    },


    // https://promote.1to10to100.com/rewards/  push?appid=wx5323952a339dfed6&scene=zj-JENJGE-0&openid=oFSAK46zaVgr1dx_2e2ptNn4g0lQ&push_type=time&sign=5140640dc18c9188c5aef52446954928
    //pushType: time(时长) video(视频广告) level_first(阶段)
});