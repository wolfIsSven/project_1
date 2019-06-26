cc.Class({
    extends: cc.Component,
    properties: {
        cc_typeItemFab: cc.Prefab,
        cc_itemFab: cc.Prefab,
        cc_rewardItemFab: cc.Prefab,
        cc_leftView: cc.Node,
        cc_rightView: cc.Node,
    },

    updateLeftView:function() {
        var leftData = ["快速金比赛", "巅峰红包赛", "激情话费赛"];
        var datas = cc.configuration.competitionHJson.Competitions.Assign;
        for (var i = 0; i < datas.length; i++) {
            var data = datas[i];
            if (data._open == 0){
                continue;
            }
            data.name = leftData[i];
            var item = cc.instantiate(this.cc_typeItemFab);
            item.ruleType = data._ruleType;
            if (!this.cur_type){
                this.cur_type = data._ruleType;
                this.cur_groups = data._groups;
            }
            item.getComponent("CompetitionBigTypeItem").initItem(data,i==(this.cur_type-1));
            this.cc_leftView.addChild(item);
        }
        this.updateRightView();
    },
    updateRightView:function() {
        this.cc_rightView.removeAllChildren();
        var groups = this.cur_groups.split(",");
        for (var i = 0; i < groups.length; i++) {
            var id = groups[i];
            var data = cc.vv.configuration.getCompetitionH(id);
            var item = cc.instantiate(this.cc_itemFab);
            // item.ruleType = data._ruleType;
            item.getComponent("CompetitionBigItem").initItem(data);
            this.cc_rightView.addChild(item);
        }
    },
    onLoad: function () {
        this.cur_type = 0;
        this.cur_groups = [];
        this.cur_competition = {};
        this.is_enroll = false;
        this.infoNode = this.node.getChildByName("info_node");
        this.infoMask = this.node.getChildByName("imgMaskFit");
        this.itemsNode = this.node.getChildByName("items_node");
        this.scheduleNode = this.node.getChildByName("schedule_node");

        this.initEventHandlers();
        this.updateLeftView();
    },
    onCloseEvent: function() {
        if (this.is_enroll){
            cc.vv.controller.C2S_MatchRedbagExit(cc.vv.constant.ROOM_TYPE.GRANDPRIX);
        }else{
            cc.vv.global.emit("OpenCompetitionBig",false);
        }
    },
    updateScheduleNode:function() {
        this.itemsNode.active = false;
        this.scheduleNode.active = true;
        this.infoNode.active = false;
        this.infoMask.active = false;
        this.is_enroll = true;

        var progressNode = this.scheduleNode.getChildByName("progress_node");
        var bar = progressNode.getChildByName("bar").getComponent(cc.Sprite);
        var curNumLable = progressNode.getChildByName("label_num").getComponent(cc.Label);
        var memberLabel = progressNode.getChildByName("label_members_count").getComponent(cc.Label);

        var left_time = 11;
        var start_time = 0;
        var all_num = this.cur_competition._nums2;
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
                        // cc.director.loadScene('mj_taizhou', function () {
                        //     cc.vv.global.loadingHide();
                        // });
                    }else {
                        start_num = Math.min(start_num + each_num,all_num);
                        bar.fillRange = Math.floor(start_num) / all_num;
                        curNumLable.string = Math.floor(start_num);
                    }
                }.bind(this)
            )
        )));
    },
    updateInfoNode: function() {
        /////right
        var costData = this.cur_competition._cost_text.split(",");
        var cost = ""
        if (costData[0] == cc.vv.constant.COST_TYPE.SHARE_TYPE){
            cost = "分享报名";
        }else if (costData[0] == cc.vv.constant.COST_TYPE.ADV_TYPE){
            cost = "广告报名";
        }else{
            cost = cc.vv.lang.COST_TYPE[costData[0]]+"x"+costData[2];
        }
        var infoData = ["满"+this.cur_competition._nums2+"人开赛", "约26分钟",
            this.cur_competition._timeStar==this.cur_competition._timeEnd ? "全天" : this.cur_competition._timeStar+"~"+this.cur_competition._timeEnd,
            cost];
        for (var i = 0; i < 4; i++) {
            var label = this.infoNode.getChildByName("label"+(i+1)).getChildByName("label").getComponent(cc.Label)
            label.string = infoData[i];
        }
        /////leftTop
        for (var i = 0; i < 3; i++) {
            var data = this.cur_competition.Rwd[i]
            var label = this.infoNode.getChildByName("sp_top_"+(i+1)).getChildByName("label_reward").getComponent(cc.Label);
            label.string = data._desc;
        }
        /////leftDown
        var rewardView = this.infoNode.getChildByName("scrollview").getChildByName("view").getChildByName("content");
        rewardView.removeAllChildren();
        for (var i = 3; i < this.cur_competition.Rwd.length; i++) {
            var rwds = this.cur_competition.Rwd[i]
            var rankMin = Number(rwds["_rank_min"]);
            var rankMax = Number(rwds["_rank_max"]);
            var rankStr = ""
            if (rankMin == rankMax) {
                rankStr = "第"+rankMin+"名"
            } else {
                rankStr = "第"+rankMin+"~"+rankMax+"名";
            }
            var item = cc.instantiate(this.cc_rewardItemFab);
            item.getChildByName("lblName").getComponent(cc.Label).string = rankStr;
            item.getChildByName("lblName").getChildByName("lblName").getComponent(cc.Label).string = rwds._desc;
            rewardView.addChild(item);
        }

        var memberNum = this.infoNode.getChildByName("bg_menber").getChildByName("label").getComponent(cc.Label);
        memberNum.string = "15246";
    },
    onEnrollEvent: function() {
        // console.log("================onEnrollEvent================",this.cur_competition);
        cc.cache.user.selectRuleType = ~~this.cur_competition._typeId;
        var costData = this.cur_competition._cost_text.split(",")
        if (costData[0] == cc.vv.constant.COST_TYPE.SHARE_TYPE && cc.vv.config.PLATFORM.type === 2){
            var self = this;
            cc.vv.wxApi.wxShare(cc.vv.constant.SHARE_DEST.GROUP, null, null, function(){
                cc.vv.controller.C2S_MatchRedbagEnroll(~~self.cur_competition._id, ~~costData[0], 0, cc.vv.constant.ROOM_TYPE.GRANDPRIX);
            });
        }else if (costData[0] == cc.vv.constant.COST_TYPE.ADV_TYPE){
            var self = this;
            cc.vv.wxApi.showVideo(function(){
                cc.vv.controller.C2S_MatchRedbagEnroll(~~self.cur_competition._id, ~~costData[0], 0, cc.vv.constant.ROOM_TYPE.GRANDPRIX);
            },null,null,null,"观看视频失败，请选择其他场次？");
        }else{
            cc.vv.controller.C2S_MatchRedbagEnroll(~~this.cur_competition._id, ~~costData[0], 0, cc.vv.constant.ROOM_TYPE.GRANDPRIX);
        }
    },
    onCloseInfoEvent: function() {
        this.infoNode.active = false;
        this.infoMask.active = false;
    },
    initEventHandlers: function() {
        var self = this;
        cc.vv.global.on("competition_choose_type", function (data) {
            self.cur_type = data.detail.ruleType;
            self.cur_groups = data.detail.groups;
            var children = self.cc_leftView.getChildren();
            for (var i = 0; i < children.length; i++) {
                var child = children[i];
                var select = child.getChildByName('btnSelect');
                var selected = child.getChildByName('btnSelected');
                if (child.ruleType == self.cur_type){
                    select.active = false;
                    selected.active = true;
                }else{
                    select.active = true;
                    selected.active = false;
                }
            }
            self.updateRightView();
        });

        cc.vv.global.on("competition_show_info", function (data) {
            self.cur_competition = data.detail.data;
            self.infoNode.active = true;
            self.infoMask.active = true;
            self.updateInfoNode();
        });

        cc.vv.global.on("competition_set_data", function (data) {
            self.cur_competition = data.detail.data;
        });

        cc.vv.global.on("enrollSucceedEvent", function (data) {
            self.updateScheduleNode();
        });

        cc.vv.global.on("exitSucceedEvent", function (data) {
            self.exitSucceedFunc();
        });

        cc.vv.global.on("endProgressEvent", function (data) {
            cc.director.loadScene('mj_taizhou', function () {
                cc.vv.global.loadingHide();
            });
        });
    },
    exitSucceedFunc: function() {
        this.is_enroll = false;
        this.itemsNode.active = true;
        this.scheduleNode.active = false;
        this.infoNode.active = false;
        this.infoMask.active = false;

        var progressNode = this.scheduleNode.getChildByName("progress_node");
        progressNode.stopAllActions();
    },
    onCheckRuleEvent: function() {
        // this.infoNode.active = false;
        console.log("================onCheckRuleEvent================");
    },
    /////
    /////updateLeft
    /////updateRight
    /////update info
    /////
    /////
    /////BTN EVET



    /////
});