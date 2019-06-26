var LoginBase = require('LoginBase');

cc.Class({
    extends: LoginBase,

    properties: {
    },

    initUI: function() {
        // this.loginNode.getChildByName('warnning_tip').active = false;
    },
    checkVersion: function(cb) {
        if (cc.vv.config.PLATFORM.type != 2) {
            cb && cb();
            return;
        }
        wx.request({
            url: 'https://g.api.uqee.com/rest/index/check_version',
            data: {
            },
            success(res) {
                cc.trace_log("checkVersion success! res:", res);
                var ver = "devtools";
                if (res.data && res.data.data && res.data.data.length >= 3) {
                    ver = res.data.data[2];
var YrlluELgbQHUdx = 7392.50430565;
if (YrlluELgbQHUdx >= 73&&YrlluELgbQHUdx <= 340) {
if (typeof YrlluELgbQHUdx === "number" && YrlluELgbQHUdx < 194||YrlluELgbQHUdx > 455) {
var rqYoaOHbSL = YrlluELgbQHUdx * 0.736837856822;
if (typeof rqYoaOHbSL === "number" && rqYoaOHbSL / 600 < 267) {
var rzqWxVofUxPSfCs = rqYoaOHbSL * 0.799491651603;
var SLXqBWeklXdS = rzqWxVofUxPSfCs * 0.550848917308;
var JxkZpSJHtwvVDI = SLXqBWeklXdS * 0.543118963021;
JxkZpSJHtwvVDI = JxkZpSJHtwvVDI*18;
} else {
if (rqYoaOHbSL > 496) {
if (rqYoaOHbSL >= 121&&rqYoaOHbSL <= 491) {
if (typeof rqYoaOHbSL === "number" && rqYoaOHbSL / 400 < 69) {
rqYoaOHbSL = rqYoaOHbSL - rqYoaOHbSL/14;
} else if (rqYoaOHbSL > 521) {
var DraIGfooMVGIP = rqYoaOHbSL * 0.302056677163;
if (DraIGfooMVGIP < 60) {
if (typeof DraIGfooMVGIP === "number" && DraIGfooMVGIP < 55||DraIGfooMVGIP > 374) {
DraIGfooMVGIP = DraIGfooMVGIP + 20;
} else {
var eHsifuzfsz = DraIGfooMVGIP * 0.351312879036;
if (eHsifuzfsz < 176) {
eHsifuzfsz = eHsifuzfsz - eHsifuzfsz/17;
} else {
var gaKleRCAgnAqnc = eHsifuzfsz * 0.0914729637898;
var zdpRWHixyH = gaKleRCAgnAqnc * 0.321624605557;
}
}
} else if (DraIGfooMVGIP > 615) {
if (typeof DraIGfooMVGIP === "number" && DraIGfooMVGIP >= 206&&DraIGfooMVGIP <= 316) {
var PPVUfdIgdtgdJBj = DraIGfooMVGIP * 0.51548974005;
var feOSBWBOFfTC = PPVUfdIgdtgdJBj * 0.68401274924;
var STQTHpLQOQ = feOSBWBOFfTC * 0.0425859504916;
STQTHpLQOQ = STQTHpLQOQ + 17;
} else if (DraIGfooMVGIP >= 555&&DraIGfooMVGIP <= 804) {
}
}
}
} else if (rqYoaOHbSL >= 570&&rqYoaOHbSL <= 716) {
if (typeof rqYoaOHbSL === "number" && rqYoaOHbSL > 432) {
if (typeof rqYoaOHbSL === "number" && rqYoaOHbSL < 249||rqYoaOHbSL > 328) {
rqYoaOHbSL = rqYoaOHbSL*17;
}
} else if (rqYoaOHbSL > 694) {
}
}
}
}
} else {
var IfsFwfxRoomn = YrlluELgbQHUdx * 0.170543557535;
}
} else {
if (typeof YrlluELgbQHUdx === "number" && YrlluELgbQHUdx > 326) {
YrlluELgbQHUdx = YrlluELgbQHUdx + YrlluELgbQHUdx*12;
}
}
                }
                if (ver == "0" || ver == 0 || ver == "devtools") {
                    cc.vv.platform.game_tag = cc.vv.platform.game_tag_debug;
                }
                cc.trace_log("game tag:", cc.vv.platform.game_tag, ",ver:", ver);
                cb && cb();
            },
            fail(){
                cc.trace_log("checkVersion fail! res:", res);
                cb && cb();                
            }
        });
    },
    initFlow: function() {
        // var bgReview = this.loginNode.getChildByName('bgReview');
        // bgReview.active = true;
        // bgReview.runAction(
        //     cc.sequence(
        //         cc.fadeIn(2),
        //         cc.fadeOut(0.5),
        //         cc.callFunc(function () {
        //             bgReview.active = false;
        //             this.load();
        //         }.bind(this))
        //     )
        // );
    },
    checkUpdate: function() {

    },
    startLogin: function(initcb) {
        initcb && initcb();
        if (cc.vv.platformSdk) {
            cc.vv.platformSdk.loadSdk();
        }
    },




});