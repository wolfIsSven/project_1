cc.Class({
    extends: cc.Component,
    properties: {
        cc_leftSpine:cc.Node,
        cc_rightSpine:cc.Node
    },
    onLoad: function () {
        var leftSkeleton = this.cc_leftSpine.getComponent(sp.Skeleton);
        // var rightSkeleton = this.cc_rightSpine.getComponent(sp.Skeleton);
        // // leftSkeleton.setCompleteListener (function(){
        // //     cc.log("22222222222222");
        // // });
        // leftSkeleton.setSkin("default");
        // leftSkeleton.replaceParts(rightSkeleton,"skin2","s_jz","sk_jz","s_jz","png/jz/kongbai_tihuan");
        leftSkeleton.replacePng(cc.vv.dataMgr.getSpriteFrameByName("inn_028"));
    }
});