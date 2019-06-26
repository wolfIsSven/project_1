cc.Class({
    extends: cc.Component,
    properties: {
        cc_recordItemFab: cc.Prefab,
        cc_recordSubItemFab: cc.Prefab,
        cc_contentView:cc.Node,
        cc_contentSubView: cc.Node,
        cc_noRecordGirl:cc.Node,
        cc_roomView:cc.Node,
    },
    choosePanel: function (name) {
        this.node.active = true;
        this.selectBtn = name;

        this.updatePanel(this.reports);
    },
    onClickPanel: function (event) {
        this.choosePanel(event.target.name);
    },
    initView: function () {
        var rightNodes = this.node.getChildByName('rightNodes');
        this.nodeRecord = rightNodes.getChildByName('nodeRecord');
        this.nodeSub = this.node.getChildByName('node_sub');
        // this.nodeYestoday = this.nodeEnroll.getChildByName('nodeYestoday');
        // this.nodeBeforeThreeDay = rightNodes.getChildByName('nodeBeforeThreeDay');
    },
    onEnable: function () {
        if (cc.cache.circle.showStat) {
            cc.vv.controller.C2S_FriendCircleLoadLogs(cc.cache.circle.getCurSelectCircleId())
        } else {
            var ruleType = 0; //cc.cache.user.selectRuleType;

            cc.vv.controller.C2S_CommonLoadResultLogs(Number(ruleType), cc.vv.constant.ROOM_TYPE.NORMAL);
        }
    },
    initClickEvents: function () {
        var btnContent = this.node.getChildByName('leftScrollView').getChildByName('view').getChildByName('content')
        var btns = btnContent.getChildren();
        for (var i = 0; i < btns.length; i++) {
            var btn = btns[i];
            cc.vv.utils.addClickEvent(btn, this.node, 'Record', 'onClickPanel');
        }

        var btnClose = this.node.getChildByName('btn_close');
        cc.vv.utils.addClickEvent(btnClose, this.node, 'Record', 'onClickClose');

        var subBtnClose = this.nodeSub.getChildByName('btn_close');
        cc.vv.utils.addClickEvent(subBtnClose, this.node, 'Record', 'onClickClose');
    },
    onLoad: function () {
        this.initView();
        this.initClickEvents();
        this.initEventHandlers();

        this.selectBtn = "btnToday";

        if (cc.cache.circle.showStat) {
            cc.vv.controller.C2S_FriendCircleLoadLogs(cc.cache.circle.getCurSelectCircleId())
            cc.vv.global.on("friend_circle_load_logs",function(data){
                this.reports = data.detail.reports;
                this.updatePanel();
            }.bind(this));
        } else {
            var ruleType = 0; //cc.cache.user.selectRuleType;

            cc.vv.controller.C2S_CommonLoadResultLogs(Number(ruleType), cc.vv.constant.ROOM_TYPE.NORMAL);
            cc.vv.global.on("load_records",function(data){
                this.reports = data.detail.reports;
                cc.trace_log("Record:", this.reports)
                this.reports.sort(function (a, b) {
                    return b.ts-a.ts;
                })
                this.updatePanel();
            }.bind(this));
        }
    },
    updatePanel: function () {
        if (!this.reports || this.reports.length <= 0) {
            this.cc_noRecordGirl.active = true;
            return;
        }

        var startTs = 0;
        var endTs = 0;
        if (this.selectBtn == "btnToday") {
            cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.RECORD_TODAY);
            startTs = cc.vv.utils.getTimeSecond(new Date().getTime(), 0, 0, 0, 0);
        } else if (this.selectBtn == "btnYestoday") {
            cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.RECORD_YESTODAY);
            startTs = cc.vv.utils.getTimeSecond(new Date().getTime(), 0, 0, 0, -1);
            endTs = cc.vv.utils.getTimeSecond(new Date().getTime(), 0, 0, 0, 0);
        } else if (this.selectBtn == "btnBeforeThreeDay") {
            cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.RECORD_THREE_DAYS_BEFORE);
            endTs = cc.vv.utils.getTimeSecond(new Date().getTime(), 0, 0, 0, -1);
        }

        this.cc_noRecordGirl.active = false;

        var childrens = this.cc_contentView.children;

        var hasReports = false;
        var index = 0;
        for (var i = 0; i < this.reports.length; ++i) {
            var report = this.reports[i];
            var ts = report.ts;
            if (ts <= startTs || (endTs > 0 && ts >= endTs)) {
                continue
            }
            cc.trace_log("Record ~~~~~~~~~ startTs:",startTs, ",endTs:", endTs, ",report:", report)
            var item = childrens[index];
            if (item) {
                item.getComponent("RecordItem").initData(report);
                item.active = true;
            } else {
                var record = cc.instantiate(this.cc_recordItemFab);
                record.getComponent("RecordItem").initData(report);
                this.cc_contentView.addChild(record);
            }
            index++;
            hasReports = true;
        }
        for (var i = index; i < childrens.length; i++) {
            cc.trace_log("Record ~~~~~~~~~ hide:", i)
            var item = childrens[i];
            item.active = false;
        }
        if (hasReports == false) {
            this.cc_noRecordGirl.active = true;
        }
    },
    initEventHandlers: function () {
        cc.vv.global.on("record_item_show_round", function (data) {
            var report = data.detail.report;
            if (!report) {
                return;
            }
            this.nodeSub.active = true;

            cc.trace_log("node sub report:", report);
            var rounds = {};
            for (var i = 0; i < 4; i++) {
                var index = i+1;
                var nameLabel = this.nodeSub.getChildByName('nameLabel' + index);

                if (i < report.mj_logs.length) {
                    var log = report.mj_logs[i];
                    nameLabel.active = true;
                    nameLabel.getComponent(cc.Label).string = log.role_name;
                    var roundLogs = log.round_logs;
                    for (var j = 0; j < roundLogs.length; j++) {
                        var roundLog = roundLogs[j];
                        var roundAry = rounds[j+1];
                        if (!roundAry) {
                            roundAry = [];
                            roundAry.push(roundLog);
                            rounds[j+1] = roundAry;
                        } else {
                            roundAry.push(roundLog);
                        }
                    }                    
                } else {
                    nameLabel.active = false;
                }
            }
            cc.trace_log("rounds:", rounds);
            
            var childrens = this.cc_contentSubView.children;

            var index = 0;
            for (var k in rounds) {
                var round = rounds[k];
                var item = childrens[index];
                if (item) {
                    item.getComponent("RecordSubItem").initData(k, round);
                    item.active = true;
                } else {
                    var record = cc.instantiate(this.cc_recordSubItemFab);
                    record.getComponent("RecordSubItem").initData(k, round);
                    this.cc_contentSubView.addChild(record);
                }
                index++;
            }
            for (var i = index; i < childrens.length; i++) {
                cc.trace_log("Record ~~~~~~~~~ hide:", i)
                var item = childrens[i];
                item.active = false;
            }
        }.bind(this));
    },
    onClickClose: function (event) {
        var parent = event.target.parent;
        if (parent.name == "node_sub") {
            this.nodeSub.active = false;
        } else {
            this.node.active = false;
            cc.vv.global.emit("showPanelNode", false);
            cc.vv.global.emit("OnShowCreateRoom");
        }
    },





 


});