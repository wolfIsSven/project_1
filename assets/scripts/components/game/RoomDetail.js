cc.Class({
    extends: cc.Component,
    properties: {
        cc_ruleNode:cc.Node,
        cc_rewardNode:cc.Node,
        cc_contentView:cc.Node,
        cc_labelTitle:cc.Node,
        cc_codeBtnTitle:cc.Node,

        cc_ruleContentView:cc.Node,
        cc_fabTitle: cc.Prefab,
        cc_fabContent: cc.Prefab,
    },
    onLoad: function () {
        this.roomSettingNode = this.node.getChildByName("room_info_node");

        if (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.MATCH_REDBAG || 
            cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.GRANDPRIX){
            this.cc_codeBtnTitle.getComponent(cc.Label).string = cc.vv.lang.LANG_DESC.JiangLiInfo;
        }else{
            this.cc_codeBtnTitle.getComponent(cc.Label).string = cc.vv.lang.LANG_DESC.GuiZeInfo;
        }

        this.titlePool = new cc.NodePool();
        this.contentPool = new cc.NodePool();
    },
    refreshContent:function(){
        var childrens = this.cc_ruleContentView.children;
        var childLen = childrens.length;
        if (childLen > 0) {
            for (var i = 0; i < childLen; i++) {
                var item = childrens[0];
                if (item.name == "item_rule_part_title") {
                    this.titlePool.put(item);
                } else if (item.name == "item_rule_part_content") {
                    this.contentPool.put(item);
                }
            }
        }

        var parts = cc.vv.configuration.getRuleInfo(this.ruleType);
        cc.trace_log("RuleType:", this.ruleType, ", Rule parts:", parts);
        if (parts == null || parts.length <= 0) {
            return;
        }

        var self = this;
        for (var i = 0; i < parts.length; i++) {
            var part = parts[i];
            var title = part["_title"];
            var titleItem = this.titlePool.get();
            if (!titleItem) {
                titleItem = cc.instantiate(this.cc_fabTitle);
                titleItem.getComponent('RulePartTitle').show(title);
            } else {
                titleItem.getComponent('RulePartTitle').show(title);
            }
            this.cc_ruleContentView.addChild(titleItem);

            var contents = part["Content"];
            for (var j = 0; j < contents.length; j++) {
                var desc = contents[j]["_desc"];
                var contentItem = this.contentPool.get();
                if (!contentItem) {
                    contentItem = cc.instantiate(this.cc_fabContent);
                    contentItem.getComponent('RulePartContent').show(desc);
                } else {
                    contentItem.getComponent('RulePartContent').show(desc);
                }
                this.cc_ruleContentView.addChild(contentItem);
            }
        }
    },
    onEnable: function() {
        if (this.ruleType && this.ruleType == cc.cache.user.ruleType) {
            return;
        }
        this.ruleType = cc.cache.user.ruleType;
        this.refreshContent();
    },
    onClicked:function(event){
        var name = event.target.name;
        if(name === "codeButton"){
            this.roomSettingNode.active = false;
            if (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.MATCH_REDBAG || 
                cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.GRANDPRIX){
                this.cc_ruleNode.active = false;
                this.cc_rewardNode.active = true;
            }else{
                this.cc_ruleNode.active = true;
                this.cc_rewardNode.active = false;
            }

            if (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.MATCH_REDBAG || 
                cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.GRANDPRIX){
                this.cc_labelTitle.getComponent(cc.Label).string = cc.vv.lang.LANG_DESC.JiangLiInfo;
            }else{
                this.cc_labelTitle.getComponent(cc.Label).string = cc.vv.lang.LANG_DESC.GuiZeInfo;
            }
        }else if(name === "linkButton"){
            this.roomSettingNode.active = true;
            if (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.MATCH_REDBAG || 
                cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.GRANDPRIX){
                this.cc_ruleNode.active = false;
                this.cc_rewardNode.active = false;
            }else{
                this.cc_ruleNode.active = false; 
                this.cc_rewardNode.active = false;   
            }
            this.cc_labelTitle.getComponent(cc.Label).string = cc.vv.lang.LANG_DESC.BaoFangInfo;
        }else if(name === "btn_back"){
            this.node.active = false;
            cc.vv.global.emit("showPanelNode",false);
        }
    },
    

    // 刷新列表

});