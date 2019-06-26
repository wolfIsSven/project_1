cc.Class({
    extends: cc.Component,
    properties: {
        
    },
    onLoad: function () {
        
    },
    onClickBackBtn:function(event){
        this.node.active = false;
        cc.vv.global.emit("showPanelNode",false);
    },
});