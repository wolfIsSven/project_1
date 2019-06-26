cc.Class({
    extends: cc.Component,
    properties: {

    },

    onBtnClicked:function(event){
        var name = event.target.name;
        if (name === "btnNodeKefu") {
            cc.vv.global.emit("OnShowContactKefu");
        } else if (name == "btnNodeAdv") {
            cc.vv.global.emit("OnShowAdvert");
        } else if (name == "btnNodeMypro") {
            cc.vv.global.emit("OnShowMypro");
        } else if (name == "btnNodeInvite") {
            cc.vv.global.emit("OnShowWxShare");
        }
    },
    onEnable: function () {
        if (cc.cache.user.edition === 0){
            cc.vv.wxApi.showBanner(null, null, null);
        }
    },
    onLoad: function () {
    },
    onBtnClose:function(){
        this.node.active = false;
        cc.vv.global.emit("showPanelNode",false);
    },
    onDisable: function () {
        cc.trace_log("onDisable freegold");
        cc.vv.wxApi.hideBannar()
    },




});
