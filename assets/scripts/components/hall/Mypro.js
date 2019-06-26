cc.Class({
    extends: cc.Component,

    properties: {
        lblGold: cc.Label,
    },

    onLoad: function () {
        this.lblGold.string = "1000";
    },
    onClose: function() {
        this.node.active = false;
        cc.vv.global.emit("showPanelNode",false);       
    }

});
