var COIN_ROOM_BOTTOM_SCORE = 350;  //底分

cc.Class({
    extends: cc.Component,
    properties: {
        cc_ruleItem:cc.Prefab,
    },

    onBtnClose:function(){
        cc.vv.global.emit("OpenGoldPanel",false);
        cc.vv.global.openPanel();

        cc.vv.wxApi.hideBannar();
    },
    onEnable: function () {
        var rules = cc.cache.user.getSupportRules();
        if (!cc.vv.utils.isRulesEqual(this.rules, rules)) {
            this.rules = rules;
            if (!cc.vv.utils.isFindRules(this.rules, cc.cache.user.selectRuleType)) {
                cc.cache.user.selectRuleType = this.rules[0];
                this.initRoomLevels(cc.cache.user.selectRuleType);
            }
        }

        this.initLeftView();

        if (cc.cache.user.getAdminSwitchVal(cc.vv.constant.ADMIN_SWITCH.CLOSE_REDBAG) > 0) {
            this.node.getChildByName('btn_choose_rule').active = false;
        } else {
            this.node.getChildByName('btn_choose_rule').active = true;
        }

        if (cc.vv.config.PLATFORM.type === 998 || cc.vv.config.PLATFORM.type === 999) {
            this.node.getChildByName('btn_choose_rule').active = false;
        }
        cc.vv.wxApi.showBanner(null, 2, null, 0.8);

        if (cc.zjjDays == 0) {
            if (cc.cache.user.roomType == cc.vv.constant.ROOM_TYPE.GOLD) {
                cc.vv.global.loading(cc.vv.lang.LANG_DESC.JoinRoomNow);
                cc.director.loadScene('mj_taizhou', function () {
                    cc.vv.global.loadingHide();
                });
                return;
            }

            var ruleName = cc.vv.lang.LANG_RULE_TYPE[Number(cc.cache.user.selectRuleType)];
            cc.vv.wxApi.aldEventReport(ruleName + cc.vv.lang.ALD_EVENT.GOLDROOM_QUICKJOIN);
            cc.vv.controller.C2S_RoomMjQuickJoin(cc.cache.user.selectRuleType, cc.vv.constant.ROOM_TYPE.GOLD, 0);

            cc.zjjDays = -1;
        }
    },
    updateRightUi:function(){
        var content = this.node.getChildByName('ScrollView').getChildByName('view').getChildByName('content');
        var childs = content.getChildren()

        for (var i = 0; i < childs.length; ++i) {
            var child = childs[i];
            var level = this.roomLevels[child.name];
            if (level && level > 0) {
                var alives = cc.cache.gamedata.goldRoomAlives[level];
                var persons = child.getChildByName('persons');
                if (persons) {
                    persons.getComponent(cc.Label).string = alives;
                }
                console.log("=========cc.cache.user.selectRuleType",cc.cache.user.selectRuleType,level);
                var data = cc.vv.configuration.getOrdinary(cc.cache.user.selectRuleType, level)
                var score = child.getChildByName('label_score');
                if (score && data && data._value) {
                    score.getComponent(cc.Label).string = data._value;
                }else if (score) {
                    score.getComponent(cc.Label).string = "9999";
                }

                var conditionLabel = child.getChildByName('condition');
                if (conditionLabel && data && data._desc) {
                    conditionLabel.getComponent(cc.Label).string = data._desc;
                }else if (conditionLabel) {
                    conditionLabel.getComponent(cc.Label).string = "";
                }
            }
        }
    },
    initRoomLevels: function (ruleType) {
        this.roomLevels = {}

        var levels = cc.vv.configuration.getOrdinaryLevels(ruleType)

        for (var i = 0; i < this.fields.length; ++i) {
            if (i < levels.length) {
                this.roomLevels[this.fields[i]] = levels[i];
            } else {
                this.roomLevels[this.fields[i]] = 0;
            }
        }
        cc.trace_log("gold room levels:", levels, ",roomLevels:", this.roomLevels);
    },
    onClicked:function(event){
        var name = event.target.name;
        console.log("============cc.cache.user.roomType",cc.cache.user.roomType);
        if (cc.cache.user.roomType == cc.vv.constant.ROOM_TYPE.GOLD) {
            cc.vv.global.loading(cc.vv.lang.LANG_DESC.JoinRoomNow);
            cc.director.loadScene('mj_taizhou', function () {
                cc.vv.global.loadingHide();
            });
            return;
        }

        var ruleName = cc.vv.lang.LANG_RULE_TYPE[Number(cc.cache.user.selectRuleType)];
        if (name == "speedstartButton") {
            cc.vv.wxApi.aldEventReport(ruleName + cc.vv.lang.ALD_EVENT.GOLDROOM_QUICKJOIN);
            cc.vv.controller.C2S_RoomMjQuickJoin(cc.cache.user.selectRuleType, cc.vv.constant.ROOM_TYPE.GOLD, 0);
            return;
        }

        var roomLevel = this.roomLevels[name]
        var data = cc.vv.configuration.getOrdinary(cc.cache.user.selectRuleType, roomLevel)
        var condition = data["_condition"];
        var maxCondition = data["_maxCondition"];
        var tipCondition = data["_tipCondition"];
        cc.trace_log("data:", data, ",cc.cache.user.gold:", cc.cache.user.gold)
        if (maxCondition == -1) {
            if (cc.cache.user.gold < condition) {
                cc.trace_log("cc.cache.user.gold:", cc.cache.user.gold, ",condition:", condition);
                cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_ERROR_CODE[cc.vv.errorCode.ERROR_CODE.err_goldroom_level_limit], null, false);
                return;
            }
            var maxLevel = cc.vv.configuration.getOrdinaryMaxLevel(cc.cache.user.selectRuleType, cc.cache.user.gold);
            if (roomLevel < maxLevel) {
                cc.vv.global.openGoldRoomNext(cc.cache.user.selectRuleType, roomLevel);
                return;
            }
        } else {
            if (cc.cache.user.gold < condition) {
                cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_ERROR_CODE[cc.vv.errorCode.ERROR_CODE.err_goldroom_level_limit], null, false);
                return;
            } else if (cc.cache.user.gold > maxCondition) {
                cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_ERROR_CODE[cc.vv.errorCode.ERROR_CODE.err_goldroom_level_too_low], null, false);
                return;
            }
        }

        cc.vv.wxApi.aldEventReport("金币场" + roomLevel + cc.vv.lang.ALD_EVENT.GOLDROOM_LV + "-" + ruleName);
        cc.vv.controller.C2S_RoomMjQuickJoin(cc.cache.user.selectRuleType, cc.vv.constant.ROOM_TYPE.GOLD, roomLevel);
    },
    initLeftView:function(){
        var content = this.node.getChildByName('left_sv').getChildByName('view').getChildByName('content');
        content.removeAllChildren();
        if (!cc.cache.user.selectRuleType){
            cc.cache.user.selectRuleType = this.rules[0];
        }
        var weith = this.rules.length * 80;
        for (var i = 0; i < this.rules.length; ++i) {
            var ruleType = this.rules[i];
            var curBtn = cc.instantiate(this.cc_ruleItem);
            var btn = curBtn.getChildByName("button");
            btn.ruleType = ruleType;
            var btnRadioButton = curBtn.getComponent("RadioButton");
            btnRadioButton.id = i;
            var label = btn.getChildByName("label").getComponent(cc.Label);
            label.string = cc.vv.mjattribute.RULE_TYPE_RES[ruleType][0];
            cc.vv.utils.addClickEvent(btn, this.node, 'GoldRoom', 'onBtnRuleClicked');
            curBtn.parent = content;
            if (ruleType === cc.cache.user.selectRuleType){
                if (this.rules.length > 6){
                    content.y = Math.min((weith-240),(240+80*i));
                }
                btnRadioButton.onClicked();
                this.initRoomLevels(cc.cache.user.selectRuleType);
                cc.vv.controller.C2S_CommonSomeStatistics(cc.cache.user.selectRuleType);
            }
        }
    },
    onBtnRuleClicked: function (event) {
        var btn = event.target;
        if (btn.ruleType == cc.cache.user.selectRuleType) {
            return;
        }
        cc.cache.user.selectRuleType = btn.ruleType;
        this.initRoomLevels(cc.cache.user.selectRuleType);
        cc.vv.controller.C2S_CommonSomeStatistics(cc.cache.user.selectRuleType);
    },
    onLoad: function () {
        this.fields = [
            "RookieButton",
            "PingMingButton",
            "CivilianButton",
            "MillionaireButton",
            // "TuHaoButton",
            // "MasterButton",
            "speedstartButton",
        ];

        // this.roomEvents = {};
        // this.roomEvents["RookieButton"] = cc.vv.lang.ALD_EVENT.GOLDROOM_LV1;
        // this.roomEvents["PingMingButton"] = cc.vv.lang.ALD_EVENT.GOLDROOM_LV2;
        // this.roomEvents["CivilianButton"] = cc.vv.lang.ALD_EVENT.GOLDROOM_LV3;
        // this.roomEvents["MillionaireButton"] = cc.vv.lang.ALD_EVENT.GOLDROOM_LV4;

        this.rules = cc.cache.user.getSupportRules();
        if (!cc.cache.user.selectRuleType){
            cc.cache.user.selectRuleType = this.rules[0];
        }
        cc.trace_log("GoldRoom onload ruleType:", cc.cache.user.selectRuleType);
        this.initRoomLevels(cc.cache.user.selectRuleType);
        cc.vv.global.on('mj_update_gold_room', this.updateRightUi.bind(this));
    },
    onClickChooseRule: function() {
        this.onBtnClose();

        cc.vv.global.emit("OnShowChooseRule", {from:"GoldRoom"});
    },




    //点击左侧类型按钮事件

});
