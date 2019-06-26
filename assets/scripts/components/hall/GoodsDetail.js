cc.Class({
    extends: cc.Component,
    properties: {
        cc_goodsItem:cc.Prefab,
        cc_contentNode:cc.Node,
        cc_labelNode:cc.Node,
        cc_redBagTip:cc.Node,
        _type:0
    },
    onEnable:function(){
    },
    onLoad: function () {
    },
    show:function(goods, desc, extraShareInfo){
        this.rewards = goods;
        this.shareRedBag = false;
        this.node.active = true;
        cc.vv.global.emit("showPanelNode",true);

        this.cc_contentNode.removeAllChildren();
        this.node.parent = cc.vv.global.getCurSceneNode();
        this.node.zIndex = cc.vv.constant.LAYER_Z_INDEX.LAYER_Z_INDEX_NORMAL + 1;
        cc.vv.utils.openAnimation(this.node.getChildByName("panelNode"));

        this.updateContent(goods, desc);

        if (extraShareInfo) {
            this.extraShareInfo = extraShareInfo;
        }
    },
    onClickBtn:function(){
        cc.vv.global.emit("showPanelNode",false);
        if (this.shareRedBag){
            cc.vv.global.openShareRedBag(this.rewards);
        }
        this.node.active = false;
        
        if (this.extraShareInfo && cc.cache.user.getAdminSwitchVal(cc.vv.constant.ADMIN_SWITCH.CLOSE_SHARE) === 0) {
            cc.vv.global.openShareExtraGold(this.extraShareInfo.shareType, this.extraShareInfo.shareGold);
            this.extraShareInfo = null;
        }
    },
    updateContent:function(goods, desc){
        var haveRedBag = false;
        if (typeof goods === "string"){
            var rewards = goods.split(";");
            var length = rewards.length;
            for(var i = 0;i<length;++i){
                var reward = rewards[i].split(",");
                if (reward.length < 3 ){
                    continue;
                }
                if (~~reward[0] === cc.vv.constant.COST_TYPE.SHARE_REDBAG){
                    if (i === 0){
                        this.cc_labelNode.getComponent(cc.Label).string = "";
                    }
                    this.shareRedBag = true;
                    continue;
                }
                var item = cc.instantiate(this.cc_goodsItem);
                var data = item.getComponent("GoodItem").initData(reward[0],reward[1],reward[2]);
                if (i === 0){
                    this.cc_labelNode.getComponent(cc.Label).string = data.name;
                }else {
                    this.cc_labelNode.getComponent(cc.Label).string = this.cc_labelNode.getComponent(cc.Label).string+","+data.name;
                }
                this.cc_contentNode.addChild(item);
                if (~~reward[0] === cc.vv.constant.COST_TYPE.REDBAG){
                    haveRedBag = true;
                }
            }
        }else if(typeof goods === "object" && typeof goods[0] === "string") {
            var length = goods.length;
            for(var i = 0;i<length;++i){
                var reward = goods[i].split(",");
                if (reward.length < 3 ){
                    continue;
                }
                if (~~reward[0] === cc.vv.constant.COST_TYPE.SHARE_REDBAG){
                    if (i === 0){
                        this.cc_labelNode.getComponent(cc.Label).string = "";
                    }
                    this.shareRedBag = true;
                    continue;
                }
                var item = cc.instantiate(this.cc_goodsItem);
                var data = item.getComponent("GoodItem").initData(reward[0],reward[1],reward[2]);
                if (i === 0){
                    this.cc_labelNode.getComponent(cc.Label).string = data.name;
                }else {
                    this.cc_labelNode.getComponent(cc.Label).string = this.cc_labelNode.getComponent(cc.Label).string+","+data.name;
                }
                this.cc_contentNode.addChild(item);
                if (~~reward[0] === cc.vv.constant.COST_TYPE.REDBAG){
                    haveRedBag = true;
                }
            }
        }else{
            var length = goods.length;
            for(var i = 0;i<length;++i){
                var reward = goods[i]
                if (~~reward.type === cc.vv.constant.COST_TYPE.SHARE_REDBAG){
                    if (i === 0){
                        this.cc_labelNode.getComponent(cc.Label).string = "";
                    }
                    this.shareRedBag = true;
                    continue;
                }
                var item = cc.instantiate(this.cc_goodsItem);
                var data = item.getComponent("GoodItem").initData(reward.type,reward.value,reward.nums);
                if (i === 0){
                    this.cc_labelNode.getComponent(cc.Label).string = data.name;
                }else {
                    this.cc_labelNode.getComponent(cc.Label).string = this.cc_labelNode.getComponent(cc.Label).string+","+data.name;
                }
                this.cc_contentNode.addChild(item);
                if (~~reward.type === cc.vv.constant.COST_TYPE.REDBAG){
                    haveRedBag = true;
                }
            }
        }
        if (haveRedBag){
            this.cc_redBagTip.active = true;
            this.cc_redBagTip.getComponent(cc.Label).string = cc.vv.lang.LANG_DESC.JiangLiYiCunRu;
        }else{
            this.cc_redBagTip.active = false;
        }
        if (desc) {
            this.cc_redBagTip.active = true;
            this.cc_redBagTip.getComponent(cc.Label).string = desc;
        } else {
            this.cc_redBagTip.active = false;
        }
    },



});