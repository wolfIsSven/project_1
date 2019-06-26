cc.Class({
    extends: cc.Component,
    properties: {
        cc_bg: cc.Node,
        cc_label: cc.Label,
    },
    onLoad: function () {
        this.initPosY = this.node.y;
        this.runShowAction();
    },
    show: function (content) {
        if (!content) {
            content = '...';
        }
        this.cc_label.string = content;
        this.node.parent = cc.vv.global.getCurSceneNode();
        this.node.zIndex = cc.vv.constant.LAYER_Z_INDEX.LAYER_Z_INDEX_QUICKTIP;
    },
    reshow: function (content) {
        if (!content) {
            content = '...';
        }
        this.cc_label.string = content;
        this.node.parent = cc.vv.global.getCurSceneNode();
        this.node.zIndex = cc.vv.constant.LAYER_Z_INDEX.LAYER_Z_INDEX_QUICKTIP;

        this.runShowAction(); 
    },


    runShowAction(){
        var onDestroy = cc.callFunc(function () {
            cc.vv.global.quickTipPool.put(this.node);
        }, this);
        this.node.opacity = 255;
        this.node.y = 0;
        var actionSeq = cc.sequence( cc.fadeIn(0.5), cc.delayTime(3), cc.fadeOut(0.5), onDestroy);
        this.node.runAction(actionSeq);
    },

})