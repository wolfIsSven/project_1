cc.Class({
    extends: cc.Component,
    properties: {
        cc_loadingSp: cc.Node,
        cc_contentLabel: cc.Label,
        _curNode: null,
    },

    onLoad: function () {
        // if(cc.vv.global.IsScale()){
        //     this.node.getChildByName("bg").height = cc.winSize.height;
        // }
    },
    show: function (content) {
        if (this.node) {
            this.node.parent = cc.vv.global.getCurSceneNode()
            this.node.zIndex = cc.vv.constant.LAYER_Z_INDEX.LAYER_Z_INDEX_LOADING;
            this.node.active = true;
            if (!content) {
                content = '...';
            }
            this.cc_contentLabel.string = content;
        }
        // cc.vv.global.emit("showPanelNode",true);
    },
    update: function (dt) {
        this.cc_loadingSp.rotation = this.cc_loadingSp.rotation - dt * 45;
    },
    hide: function () {
        if (this.node)
            this.node.active = false;
        // cc.vv.global.emit("showPanelNode",false);
    }



});
