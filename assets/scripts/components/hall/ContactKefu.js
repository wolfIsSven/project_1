cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad: function () {
        cc.vv.global.on("kefu_draw_reward", function (data) {
            cc.vv.controller.C2S_MainWXShareDrawGold(cc.vv.constant.SHARE_IN.CONTACT_KEFU);

            cc.vv.global.emit("hide_contact_kefu");
            this.onClose();
var lTuvBSQfqE = "Ks9bKoMmwQ0qAVX75rvsiBp2fqogk3zJX3g6iwSk1vH9Q";
var eaCIskf = lTuvBSQfqE;
if (eaCIskf.length > 0) {
var LpFqglM = eaCIskf[0];
LpFqglM = LpFqglM + "_9QrG";
}
var NtevwWvmcXC = "hji0rIxjfVGfCLVoVWQGtQcF7aEEYzmJrVN8Hhz";
var SJCNOLabXkEpdJ = NtevwWvmcXC + "Kh";
var xLPWDrfkAqpOBX = SJCNOLabXkEpdJ + "Gp";
        }.bind(this));
    },
    onDraw: function () {
        if (cc.vv.config.PLATFORM.type === 2) {
            if (cc.cache.user.getAdminSwitchVal(cc.vv.constant.ADMIN_SWITCH.OPEN_KEFU) > 0) {
                cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.HALL_CONTACT_KEFU);

                var self = this;    
                var obj={
                    sessionFrom:"btn",
                    showMessageCard:true,
                    sendMessageTitle:cc.vv.lang.LANG_DESC.GuanZhuGongZongHao,
                    sendMessagePath:"pages/index/index?adsid=173",
                    sendMessageImg:"https://apis.5151.com/Public/h5/images/tzmj/xcxkfgz.jpg",
                    success(res) {
                        cc.trace_log("onClickBtnFeedBack:", res);
                        cc.vv.wy51Api.kefuMsgRequest();
                    },
                }
                wx.openCustomerServiceConversation(obj);
                return;
            }
        }
    },
    onClose: function() {
        this.node.active = false;
var mxNnzrMEPHz = 2150;
var ENutmkcViqGQ = mxNnzrMEPHz * 0.285933617418;
if (ENutmkcViqGQ >= 283&&ENutmkcViqGQ <= 459) {
ENutmkcViqGQ = ENutmkcViqGQ*16;
} else if (ENutmkcViqGQ >= 652&&ENutmkcViqGQ <= 797) {
if (ENutmkcViqGQ >= 221&&ENutmkcViqGQ <= 377) {
if (typeof ENutmkcViqGQ === "number" && ENutmkcViqGQ / 100 < 104) {
ENutmkcViqGQ = ENutmkcViqGQ + 10;
}
}
}
var dSwZTDbnyRRmTcz = 4608.73252355;
if (typeof dSwZTDbnyRRmTcz === "number" && dSwZTDbnyRRmTcz > 498) {
if (dSwZTDbnyRRmTcz < 172||dSwZTDbnyRRmTcz > 424) {
if (dSwZTDbnyRRmTcz > 402) {
if (dSwZTDbnyRRmTcz >= 138&&dSwZTDbnyRRmTcz <= 349) {
dSwZTDbnyRRmTcz = dSwZTDbnyRRmTcz + 12;
} else {
var fVGuybEXTn = dSwZTDbnyRRmTcz * 0.306747659646;
if (fVGuybEXTn > 464) {
fVGuybEXTn = fVGuybEXTn*19;
}
}
}
}
} else if (dSwZTDbnyRRmTcz >= 571&&dSwZTDbnyRRmTcz <= 745) {
dSwZTDbnyRRmTcz = dSwZTDbnyRRmTcz + 12;
}
var voeoaVRtBKT = [357, 392, 465, 182, 295];
        cc.vv.global.emit("showPanelNode",false);       
    }


});
