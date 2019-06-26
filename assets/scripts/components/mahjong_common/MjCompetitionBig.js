cc.Class({
    extends: cc.Component,
    properties: {
    },

    onLoad: function () {
        this.weedOutNode = this.node.getChildByName("weed_out_node");
        this.rewardNode = this.node.getChildByName("reward_node");
        this.scheduleNode = this.node.getChildByName("schedule_node");
        this.loadNode = this.node.getChildByName("load_node");
        this.topLeftNode = this.node.getChildByName("nodeTopLeftFit");

        this.xmlData = cc.vv.configuration.getCompetitionH(cc.cache.user.matchXmlId);
        this.costData = this.xmlData._cost_text.split(",")

        this.initEventHandlers();
    },
    onAgainEvent: function () {
        // console.log("================onAgainEvent================");
        cc.vv.controller.C2S_MatchRedbagEnroll(~~cc.cache.user.matchXmlId, ~~this.costData[0], 0, cc.vv.constant.ROOM_TYPE.GRANDPRIX);
    },
    onRedemptionEvent: function () {
        // console.log("================onRedemptionEvent================");
        cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.MJ_GAME_RESULT_GRANDPRIX_WIN_SHARE);
        if (cc.vv.config.PLATFORM.type == 2) {
            cc.vv.wxApi.wxShare(cc.vv.constant.SHARE_DEST.GROUP, null, null, function(){
                cc.vv.controller.C2S_MainWXShareDrawGold(cc.vv.constant.SHARE_IN.GRANDPRIX);
                this.onClose();
            }.bind(this));
        } else {
            cc.vv.controller.C2S_MainWXShareDrawGold(cc.vv.constant.SHARE_IN.GRANDPRIX);
            this.onClose();            
        }
    },
    updateScheduleNode: function () {
        var curRank = this.scheduleNode.getChildByName("label_num_1").getComponent(cc.Label);
        var allRank = this.scheduleNode.getChildByName("label_num_2").getComponent(cc.Label);
        var curRank1 = this.scheduleNode.getChildByName("label_num_3").getComponent(cc.Label);
        var layout = this.scheduleNode.getChildByName("layout")

        // console.log("cc.cache.user.matchXmlId============",cc.cache.user.matchXmlId);
        // var this.xmlData = cc.vv.configuration.getCompetitionH(cc.cache.user.matchXmlId);
        if (!this.xmlData){
            return;
        }
        console.log("this.xmlData============",this.xmlData);
        allRank.string = "/"+this.xmlData._nums2;
        curRank.string = cc.cache.user.matchRank;

        var values = this.xmlData._value;
        values = values.split(";");
        for (var i = 0; i < values.length; i++) {
            var value = values[i];
            value = value.split(",");
            var curSeq = ~~value[0];

            var node = layout.getChildByName("node"+(i+1));
            var sp_1 = node.getChildByName("sp_progress_1"); 
            var sp_2 = node.getChildByName("sp_progress_2"); 
            var label1 = sp_1.getChildByName("label").getComponent(cc.Label);
            var label2 = sp_2.getChildByName("label").getComponent(cc.Label);

            node.active = true;
            label1.string = curSeq;
            label2.string = curSeq;

            if (curSeq >= cc.cache.user.matchSeq){
                if (curSeq === cc.cache.user.matchSeq){
                    curRank1.string = curSeq;
                }
                sp_1.active = true;
                sp_2.active = false;
            }else{
                sp_1.active = false;
                sp_2.active = true;
            }
        }
    },
    updateWeedOutNode: function () {
        var bgTitle = this.weedOutNode.getChildByName("bg_title").getChildByName("label").getComponent(cc.Label)
        bgTitle.string = "第" + cc.cache.user.matchRank + "名";

        var btnRedemption = this.weedOutNode.getChildByName("btn_redemption")
        var btnAgain = this.weedOutNode.getChildByName("btn_again")
        var btnBack = this.weedOutNode.getChildByName("btn_back")

        
        if (this.costData[0] == cc.vv.constant.COST_TYPE.SHARE_TYPE || 
            this.costData[0] == cc.vv.constant.COST_TYPE.ADV_TYPE){
            btnRedemption.active = false;
            btnAgain.active = false;
            btnBack.active = true;
        }else{
            btnRedemption.active = true;
            btnAgain.active = true;
            btnBack.active = false;
        }
        cc.cache.user.resetRoom();
    },
    onCloseEvent: function () {
        if (cc.cache.user.matchState == cc.vv.constant.MATCH_STATE_TYPE.MATCH_STATE_OVER) {
            this.onClose();
        }else{

        }
    },
    initEventHandlers: function () {
        var self = this;

        cc.vv.global.on("endProgressEvent", function (data) {
            cc.vv.global.emit('proto_show_competition_big', {open:false});
        });

        cc.vv.global.on("enrollSucceedEvent", function (data) {
            self.updateLoadNode();
        });
    },
    onDoubleEvent: function () {
        // console.log("================onDoubleEvent================");
        cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.MJ_GAME_RESULT_GRANDPRIX_LOSE_SHARE);
        if (cc.vv.config.PLATFORM.type == 2) {
            cc.vv.wxApi.wxShare(cc.vv.constant.SHARE_DEST.GROUP, null, null, function(){
                cc.vv.controller.C2S_MainWXShareDrawGold(cc.vv.constant.SHARE_IN.GRANDPRIX);
                this.onClose();
            }.bind(this));
        } else {
            cc.vv.controller.C2S_MainWXShareDrawGold(cc.vv.constant.SHARE_IN.GRANDPRIX);
            this.onClose();            
        }
    },
    updateLoadNode:function() {
        this.weedOutNode.active = false;
        this.rewardNode.active = false;
        this.scheduleNode.active = false;
        this.topLeftNode.active = false;
        this.loadNode.active = true;

        var progressNode = this.loadNode.getChildByName("progress_node");
        var bar = progressNode.getChildByName("bar").getComponent(cc.Sprite);
        var curNumLable = progressNode.getChildByName("label_num").getComponent(cc.Label);
        var memberLabel = progressNode.getChildByName("label_members_count").getComponent(cc.Label);

        // var this.xmlData = cc.vv.configuration.getCompetitionH(cc.cache.user.matchXmlId);
        var left_time = 10;
        var start_time = 0;
        var all_num = this.xmlData._nums2;
        memberLabel.string = "满"+all_num+"人开赛";
        var start_num = Math.floor(Math.random() * Math.floor(all_num/2))+1;
        var left_num = all_num - start_num;
        var each_num = left_num/left_time;
        bar.fillRange = start_num / all_num;
        curNumLable.string = start_num;
        progressNode.runAction(cc.repeatForever(
            cc.sequence(
                cc.delayTime(1),
                cc.callFunc(function(){
                    ++start_time;
                    if (start_time >= left_time){
                        bar.fillRange = 1;
                        curNumLable.string = all_num;
                        progressNode.stopAllActions();
                        cc.director.loadScene('mj_taizhou', function () {
                            cc.vv.global.loadingHide();
                        });
                    }else {
                        start_num = Math.min(start_num + each_num,all_num);
                        bar.fillRange = Math.floor(start_num) / all_num;
                        curNumLable.string = Math.floor(start_num);
                    }
                }.bind(this))
            )
        ));
    },
    updateShowNode: function () {
        this.loadNode.active = false;
        // console.log("cc.cache.user.matchState============",cc.cache.user.matchState);
        if (cc.cache.user.matchState === cc.vv.constant.MATCH_STATE_TYPE.MATCH_STATE_OVER) {
            if (cc.cache.user.matchRewards && cc.cache.user.matchRewards.length > 0) {
                this.weedOutNode.active = false;
                this.rewardNode.active = true;
                this.scheduleNode.active = false;
                this.topLeftNode.active = true;
                this.updateRewardNode();
            } else {
                this.weedOutNode.active = true;
                this.rewardNode.active = false;
                this.scheduleNode.active = false;
                this.topLeftNode.active = true;
                this.updateWeedOutNode();
            }
        } else {
            this.weedOutNode.active = false;
            this.rewardNode.active = false;
            this.scheduleNode.active = true;
            this.topLeftNode.active = false;
            this.updateScheduleNode();
        }
    },
    onGetRewardEvent: function () {
        console.log("================onGetRewardEvent================");
    },
    onEnable: function (params) {
        this.updateShowNode();
    },
    updateRewardNode: function () {
        var bgTitle = this.rewardNode.getChildByName("bg_title").getChildByName("label").getComponent(cc.Label);
        var rewardLabel = this.rewardNode.getChildByName("reward_label").getComponent(cc.Label);

        bgTitle.string = "第" + cc.cache.user.matchRank + "名";

        var str = "";
        var noDouble = false;
        for (var i = 0; i < cc.cache.user.matchRewards.length; ++i) {
            var type = cc.cache.user.matchRewards[i].type;
            var nums = cc.cache.user.matchRewards[i].nums;
            if (type === cc.vv.constant.COST_TYPE.REDBAG || 
                type === cc.vv.constant.COST_TYPE.SHARE_REDBAG ||
                type === cc.vv.constant.COST_TYPE.TELEBILL){
                nums = nums / 100;
                noDouble = true;
            }

            str += cc.vv.lang.COST_TYPE[type] + "x" + nums;
        }
        rewardLabel.string = str;

        var btnDouble = this.rewardNode.getChildByName("btn_double")
        var btnAgain = this.rewardNode.getChildByName("btn_again")
        var btnBack = this.rewardNode.getChildByName("btn_back")
        if (this.costData[0] == cc.vv.constant.COST_TYPE.SHARE_TYPE || 
            this.costData[0] == cc.vv.constant.COST_TYPE.ADV_TYPE || noDouble){
            btnDouble.active = false;
            btnAgain.active = false;
            btnBack.active = true;
        }else{
            btnDouble.active = true;
            btnAgain.active = true;
            btnBack.active = false;
        }
        cc.cache.user.matchRewards = null;
        cc.cache.user.resetRoom();
    },
    onClose: function () {
        cc.vv.global.loadScene('hall', function () {
            cc.vv.global.loadingHide();
        });
    }
    /////
    /////updateShowNode
    /////updateWeedOut
    /////updateRewardNode
    /////
    //////
    /////BTN EVET




    /////
});