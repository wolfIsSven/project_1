cc.Class({
    extends: cc.Component,
    properties: {

    },
    initClickEvents: function () {
        var panelNode = this.node.getChildByName("panelNode");
        var btnGain = panelNode.getChildByName('btn_gain');
        cc.vv.utils.addClickEvent(btnGain, this.node, 'ShareRedBagReward', 'onClickRedbagGain');

        var btnSubBack = panelNode.getChildByName('btn_back');
        cc.vv.utils.addClickEvent(btnSubBack, this.node, 'ShareRedBagReward', 'onClickClose');
    },
    onLoad: function () {
        this.initClickEvents();
        cc.vv.global.on("on_share_redbag_reward",function(){
            this.getSucess();
        }.bind(this));
    },
    onEnable: function () {
    },
    onClickRedbagGain: function(event) {
        cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips,cc.vv.lang.LANG_DESC.ZhuRenFenXiang,
        function() { //ok
            cc.vv.wxApi.wxShare(cc.vv.constant.SHARE_DEST.GROUP, null, null, function(){
                cc.vv.controller.C2S_MainShareRedbagDraw();
            });         
        }, true, 0,
        function() { //cancel
            cc.trace_log("do cancel") 
        });
    },
    onClickClose: function (event) {
        var self = this;
        cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips,cc.vv.lang.LANG_DESC.ZhuRenBieDiuXiaWo,
        function() { //ok
            self.node.active = false;
            cc.vv.global.emit("showPanelNode", false); 
        }, true, 0,
        function() { //cancel
            cc.trace_log("do nothing") 
        });
    },
    updateContent: function(goods) {
        var shareBag = {type:cc.vv.constant.COST_TYPE.SHARE_REDBAG,value:1,nums:0};
        if (typeof goods === "string"){
            var rewards = goods.split(";");
            var length = rewards.length;
            for(var i = 0;i<length;++i){
                var reward = rewards[i].split(",");
                if (reward.length < 3 ){
                    continue;
                }
                if (~~reward[0] === cc.vv.constant.COST_TYPE.SHARE_REDBAG){
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
                if (~~reward[0] === cc.vv.constant.COST_TYPE.SHARE_REDBAG){
                    shareBag.nums = reward[2] / 100;
                    break
                }
            }
        }else{
            var length = goods.length;
            for(var i = 0;i<length;++i){
                var reward = goods[i]
                if (~~reward.type === cc.vv.constant.COST_TYPE.SHARE_REDBAG){
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
        labelCash.getComponent("cc.Label").string = cc.cache.user.curRedBagCash;
        labelCash1.getComponent("cc.Label").string = shareBag.nums;
    },
    show:function(goods){
        this.node.active = true;
        cc.vv.global.emit("showPanelNode",true);

        this.node.parent = cc.vv.global.getCurSceneNode();
        this.node.zIndex = cc.vv.constant.LAYER_Z_INDEX.LAYER_Z_INDEX_NORMAL;
        cc.vv.utils.openAnimation(this.node.getChildByName("panelNode"));

        this.updateContent(goods);
    },
    getSucess: function(){
        this.node.active = false;
        cc.vv.global.emit("showPanelNode", false);  
    }







});