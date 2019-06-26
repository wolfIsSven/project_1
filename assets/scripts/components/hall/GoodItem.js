cc.Class({
    extends: cc.Component,
    properties: {
        cc_numNode:cc.Node,
        cc_iconNode:cc.Node,
    },
    onLoad: function () {
        
    },
    initData:function(type,val,num){
        var info = cc.vv.dataMgr.getIconByType(type,val);
        this.cc_iconNode.getComponent(cc.Sprite).spriteFrame = info.spriteFrame;
        this.cc_numNode.getComponent(cc.Label).string = info.name+"x"+num;
        if (~~type === cc.vv.constant.COST_TYPE.REDBAG || ~~type === cc.vv.constant.COST_TYPE.SHARE_REDBAG){
            this.cc_numNode.getComponent(cc.Label).string = info.name+"x"+(num/100);
        }
        return {name:info.name};
    }
});