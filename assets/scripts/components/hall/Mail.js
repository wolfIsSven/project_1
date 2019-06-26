cc.Class({
    extends: cc.Component,
    properties: {
        cc_mailItemFab: cc.Prefab,
        cc_noMailNode:cc.Node,
        cc_mailScrollView:cc.Node,
        cc_mailContentList:cc.Node,
        cc_contentNode:cc.Node,
        cc_valueView:cc.Node,
        cc_iconView:cc.Node,
        cc_rewardItem:cc.Prefab,
        _refreshData:1,
        _selectData:null,
        _target:null,
        _cellHeight:null,
    },
    initMails:function(){
        var sortedMailIds = cc.cache.mail.getSortedMailIds();
        var mailLen = sortedMailIds.length;
        if (mailLen <= 0) {
            this.cc_noMailNode.active = true;
            this.cc_mailScrollView.active = false;
            this.cc_contentNode.active = false;
            this.mialTitle.string = cc.vv.lang.LANG_DESC.XinXi;
        } else {
            this.cc_noMailNode.active = false;
            this.cc_mailScrollView.active = true;
            this.cc_contentNode.active = false;
            this.mialTitle.string = cc.vv.lang.LANG_DESC.XinXi;
            this.initMailsList();
        }
    },
    onEnable: function () {
        cc.vv.controller.C2S_MailLoad(0);
    },
    addReward:function(info){
        this.cc_iconView.removeAllChildren();
        var rewards = info.split(";");
        var length = rewards.length;
        for(var i = 0;i<length;++i){
            if (rewards[i] === ""){
                continue;
            }
            var rewardItem = cc.instantiate(this.cc_rewardItem);
            rewardItem.getComponent("RewardItem").initData(rewards[i]);
            this.cc_iconView.addChild(rewardItem);
        }
    },
    updateMailContent: function () {
        if (!this.cc_contentNode.active) {
            return;
        }
        if (!this._selectMailId) {
            return;
        }
        this._selectMail = cc.cache.mail.getMail(this._selectMailId);
        if (!this._selectMail) {
            return;
        }
        ////////添加邮件删除的时候打开
        if (this._selectMail.state == cc.vv.constant.MAIL_STATE.READ_AND_DRAWN || 
            (this._selectMail.state == cc.vv.constant.MAIL_STATE.READ && this._selectMail.rewards === "")) {
            this.btnDel.active = true;
            this.btnLq.active = false;
        }else{
            this.btnDel.active = false;
            this.btnLq.active = true;
        }
    },
    openMail:function(mailId){
        this.cc_noMailNode.active = false;
        this.cc_mailScrollView.active = false;
        this.cc_contentNode.active = true;
        
        this._selectMailId = mailId;
        this._selectMail = cc.cache.mail.getMail(mailId);

        this.mialTitle.string = this._selectMail.title;

        var contentItem = this.cc_valueView.getChildByName('item');
        var contentLabel = contentItem.getComponent(cc.Label);
        contentLabel.string = this._selectMail.content;
        this.cc_valueView.height = contentItem.height;

        this.addReward(this._selectMail.rewards);

        ////////添加邮件删除的时候打开
        this.btnLq = this.cc_contentNode.getChildByName("btn_lq");
        this.btnDel = this.cc_contentNode.getChildByName("btn_del");
        if (this._selectMail.state == cc.vv.constant.MAIL_STATE.READ_AND_DRAWN || 
            (this._selectMail.state == cc.vv.constant.MAIL_STATE.READ && this._selectMail.rewards === "")) {
            this.btnDel.active = true;
            this.btnLq.active = false;
        }else{
            this.btnDel.active = false;
            this.btnLq.active = true;
        }
    },
    initMailsList:function(){
        var sortedMailIds = cc.cache.mail.getSortedMailIds();
        var len = sortedMailIds.length;
        this.cc_mailContentList.removeAllChildren();
        for (var i = 0; i < len; ++i) {
            var mailItem = cc.instantiate(this.cc_mailItemFab);
            mailItem.getComponent('MailItem').initData(sortedMailIds[i]);
            mailItem.itemId = sortedMailIds[i];
            this.cc_mailContentList.addChild(mailItem);
        }
    },
    onLoad: function () {
        this.mialTitle = this.node.getChildByName("bg_title").getChildByName("New Label").getComponent(cc.Label);

        cc.vv.global.on("on_mail_load", function (data) {
            this.initMails();
        }.bind(this));
        cc.vv.global.on("on_mail_open", function (data) {
            this.openMail(data.detail.mailId);
        }.bind(this));
        cc.vv.global.on("on_mail_update", function (data) {
            this.updateMailContent();
        }.bind(this));
        cc.vv.global.on("on_mail_delete", function (data) {
            cc.cache.mail.deleteMails(this._selectMailId);
            this.initMails();
        }.bind(this));
    },
    onClick:function(event){
        var name = event.target.name;
        if(name === "btn_back"){
            if (this.cc_contentNode.active === true){
                this.cc_contentNode.active = false;
                this.mialTitle.string = cc.vv.lang.LANG_DESC.XinXi;
                this.initMails();
            }else {
                this.node.active = false;
                cc.vv.global.emit("showPanelNode",false);
            }
        }else if (name === "btn_lq"){
            if (!this._selectMail) {
                return;
            }
            if (this._selectMail.state == cc.vv.constant.MAIL_STATE.READ_AND_DRAWN || 
                (this._selectMail.state == cc.vv.constant.MAIL_STATE.READ && this._selectMail.rewards === "")) {
                this.cc_contentNode.active = false;
                this.mialTitle.string = cc.vv.lang.LANG_DESC.XinXi;
                this.initMails();
            }else {
                var mailIds = [];
                mailIds.push(this._selectMailId);
                var mailSerial = cc.vv.utils.serialIds(mailIds, ",");
                cc.vv.controller.C2S_MailDrawReward(mailSerial);
            }
        }else if (name === "btn_del"){
            if (!this._selectMail) {
                return;
            }
            // cc.vv.global.quickTip("邮件删除暂未开启！");
            if (this._selectMail.state == cc.vv.constant.MAIL_STATE.READ_AND_DRAWN || 
                (this._selectMail.state == cc.vv.constant.MAIL_STATE.READ && this._selectMail.rewards === "")) {
                var mailIds = [];
                mailIds.push(this._selectMailId);
                var mailSerial = cc.vv.utils.serialIds(mailIds, ",");
                cc.vv.controller.C2S_MailDelete(mailSerial);    
            }
        }
    },





}); 