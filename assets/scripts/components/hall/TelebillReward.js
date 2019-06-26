cc.Class({
    extends: cc.Component,
    properties: {

    },
    show:function(goods){
        this.node.active = true;
        // cc.vv.global.emit("showPanelNode",true);

        this.node.parent = cc.vv.global.getCurSceneNode();
        this.node.zIndex = cc.vv.constant.LAYER_Z_INDEX.LAYER_Z_INDEX_NORMAL;
        cc.vv.utils.openAnimation(this.node.getChildByName("panelNode"));

        this.updateContent(goods);
    },
    onEnable: function () {
    },
    getSucess: function(){
        cc.vv.global.quickTip("恭喜您领取成功！");
        this.node.active = false;
        cc.vv.global.emit("updateMainSign", true);
    },
    updateContent: function(goods) {
        var shareBag = {type:cc.vv.constant.COST_TYPE.TELEBILL,value:1,nums:0};
        if (typeof goods === "string"){
            var rewards = goods.split(";");
            var length = rewards.length;
            for(var i = 0;i<length;++i){
                var reward = rewards[i].split(",");
                if (reward.length < 3 ){
                    continue;
                }
                if (~~reward[0] === cc.vv.constant.COST_TYPE.TELEBILL){
                    shareBag.nums = reward[2] / 100;
                    break
                }
            }
        }else if(typeof goods === "object" && typeof goods[0] === "string") {
            var length = goods.length;
            for(var i = 0;i<length;++i){
                var reward = goods[i].split(",");
                if (reward.length < 3 ){
                    continue;
                }
                if (~~reward[0] === cc.vv.constant.COST_TYPE.TELEBILL){
                    shareBag.nums = reward[2] / 100;
                    break
                }
            }
        }else{
            var length = goods.length;
            for(var i = 0;i<length;++i){
                var reward = goods[i]
                if (~~reward.type === cc.vv.constant.COST_TYPE.TELEBILL){
                    shareBag.nums = reward.nums / 100;
                    break
                }
            }
        }

        var panelNode = this.node.getChildByName("panelNode");
        var nodeCash = panelNode.getChildByName("node_cash");
        var nodeRedbag = panelNode.getChildByName("node_redbag");
        var labelCash = nodeCash.getChildByName('labelCash');
        var labelCash1 = nodeRedbag.getChildByName('labelCash');
        labelCash.getComponent("cc.Label").string = cc.cache.user.curTelebill;
        labelCash1.getComponent("cc.Label").string = shareBag.nums+"元";
    },
    onLoad: function () {
        cc.vv.global.on("on_tetebill_reward",function(){
            this.getSucess();
        }.bind(this));
    },
    onClickRedbagGain: function(event) {
        if (cc.vv.config.PLATFORM.type === 0){
            cc.vv.controller.C2S_CommonReceiveReward(1003);
        }else{
            cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips,cc.vv.lang.LANG_DESC.ZhuRenFenXiang,
                function() { //ok
                    cc.vv.wxApi.wxShare(cc.vv.constant.SHARE_DEST.GROUP, null, null, function(){
                        cc.vv.controller.C2S_CommonReceiveReward(1003);
                    });         
                }, true, 0,
                function() { //cancel
                    cc.trace_log("do cancel") 
                }
            );
        }
    },
    onClickClose: function (event) {
        var self = this;
        cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips,cc.vv.lang.LANG_DESC.ZhuRenBieDiuXiaWo,
        function() { //ok
            self.node.active = false;
            // cc.vv.global.emit("showPanelNode", false); 
            cc.vv.global.emit("updateMainSign", true);
        }, true, 0,
        function() { //cancel
            cc.trace_log("do nothing") 
        });
    },





    ////btn event

});