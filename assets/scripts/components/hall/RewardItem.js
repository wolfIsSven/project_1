cc.Class({
    extends: cc.Component,
    properties: {
        cc_numNode:cc.Node,
        cc_iconNode:cc.Node,
    },
    onLoad: function () {
        cc.trace_log("rewardItem onLoad")
    },
    initData:function(data, isOrgSize){
        var rewardArray= data.split(",");
        var info = cc.vv.dataMgr.getIconByType(rewardArray[0], rewardArray[1]);
        cc.trace_log("reward item:", rewardArray[0], ",info:", info);
        if (isOrgSize) {
            this.cc_iconNode.x = 0;

            this.cc_iconNode.width = info.spriteFrame._rect.width;
            this.cc_iconNode.height = info.spriteFrame._rect.height;

            var costType = Number(rewardArray[0]);
            if (costType == cc.vv.constant.COST_TYPE.ENROLL_VOUCHER ||
                costType == cc.vv.constant.COST_TYPE.REDBAG) {
                this.cc_iconNode.scale = 0.75;
            } else if (costType == cc.vv.constant.COST_TYPE.GOLD) {
                this.cc_iconNode.y = -5;
            }
        }
        this.cc_iconNode.getComponent(cc.Sprite).spriteFrame = info.spriteFrame;
        this.cc_numNode.getComponent(cc.Label).string = "x"+rewardArray[2];
        if (~~rewardArray[0] === cc.vv.constant.COST_TYPE.REDBAG || ~~rewardArray[0] === cc.vv.constant.COST_TYPE.SHARE_REDBAG){
            this.cc_numNode.getComponent(cc.Label).string = "x"+rewardArray[2]/100;
        }
        this.node.width = this.cc_iconNode.width+this.cc_numNode.width+10;
        this.node.height = this.cc_iconNode.height;
    },
});