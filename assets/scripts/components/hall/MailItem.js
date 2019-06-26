cc.Class({
    extends: cc.Component,
    properties: {
        cc_rewardItem: cc.Prefab,
        cc_iconView: cc.Node,
        // cc_mailNode:cc.Node,
        // cc_friendNode:cc.Node,
        // cc_bgNode:cc.Node,
        // _mailNode: null,
        // _object:null,
        // _index:0
    },
    initData: function (mailId) {
        this._mailId = mailId;
        var mail = cc.cache.mail.getMail(mailId);
        cc.trace_log("mail item, node:", this.node);
        this._titleLabel = this.node.getChildByName('titleLabel').getComponent(cc.Label);
        this._titleLabel.string = mail.title;
        this._dateLabel = this.node.getChildByName('timeLabel').getComponent(cc.Label);
        this._dateLabel.string = cc.vv.utils.dateFormatSecond2(mail.ts);

        this._contentLabel = this.node.getChildByName('contentLabel').getComponent(cc.Label);
        if (mail.rewards.length > 0) {
            this.node.getChildByName('iconview').active = true;
            if (mail.state == cc.vv.constant.MAIL_STATE.READ_AND_DRAWN) {
                this.node.getChildByName('btnDraw').active = false;
                this.node.getChildByName('iconDrawn').active = true;
            } else {
                this.node.getChildByName('btnDraw').active = true;
                this.node.getChildByName('iconDrawn').active = false;
            }
            this.addReward(mail.rewards);

            if (mail.content.length >= 20) {
                var partContent = mail.content.substring(0, 15);
                this._contentLabel.string = partContent + "...";
            } else {
                this._contentLabel.string = mail.content;
            }
        } else {
            this.node.getChildByName('iconview').active = false;
            this._contentLabel.string = mail.content;
        }

        cc.vv.global.on("on_mail_update", function (data) {
            var mail = cc.cache.mail.getMail(this._mailId);
            if (!mail){
                return;
            }
            if (mail.state == cc.vv.constant.MAIL_STATE.READ_AND_DRAWN) {
                this.node.getChildByName('btnDraw').active = false;
                this.node.getChildByName('iconDrawn').active = true;
            } else {
                this.node.getChildByName('btnDraw').active = true;
                this.node.getChildByName('iconDrawn').active = false;
            } 
        }.bind(this));
    },
    onLoad: function () {
       
    },
    addReward: function (info) {
        this.cc_iconView.removeAllChildren();
        var rewards = info.split(";");
        var length = rewards.length;
        for (var i = 0; i < length; ++i) {
            if (rewards[i] === "") {
                continue;
            }
            var rewardItem = cc.instantiate(this.cc_rewardItem);
            rewardItem.getComponent("RewardItem").initData(rewards[i]);
            this.cc_iconView.addChild(rewardItem);
        }
    },
    onClicked: function (event) {
        var name = event.target.name;
        cc.trace_log("mail item clicked! name:", name);
        if(name === "item_mail"){
            var mail = cc.cache.mail.getMail(this._mailId);
            if (!mail) {
                return;
            }
            if (mail.rewards == "") {
                return
            } else {
                cc.vv.global.emit("on_mail_open", { mailId: this._mailId });
            }
        } else if (name == "btnDraw") {
            var mailIds = [];
            mailIds.push(this._mailId);
            var mailSerial = cc.vv.utils.serialIds(mailIds, ",");
            cc.vv.controller.C2S_MailDrawReward(mailSerial);
        }else if(name === "btn_del"){
            cc.vv.controller.C2S_MailDelete(this._mail.id);
        }
    }


});