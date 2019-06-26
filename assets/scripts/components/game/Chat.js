cc.Class({
    extends: cc.Component,

    properties: {
        cc_quickChatNode: cc.Node,
        cc_emojiNode: cc.Node,
        cc_chatEb: cc.EditBox,
        cc_panelNode: cc.Node,
        _quickChatInfo: null,
        _btnChat: null,
        _cd:0,
        _lastTime:0
    },
    onLoad: function () {
        this._btnQucik = this.node.getChildByName("tabQuick");
        this._btnEnoji = this.node.getChildByName("tabEmoji");
        this._btnQucik.getComponent(cc.Button).interactable = false;
        this._sendMsgNode = this.node.getChildByName("sendMsgNode");
        this._btnOpenSend = this.node.getChildByName("btn_open_send");
        this._sendMsgNode.active = false;
        this._btnOpenSend.active = false;
    },
    onQuickChatItemClicked: function (event) {
        var lastTime = (new Date()).getTime();
        if(lastTime - this._lastTime < 5000){
            this.showCD();
            return;
        }
        this._lastTime = (new Date()).getTime();
        this.node.active = false;
        // this.cc_panelNode.active = false;
        var arr = event.target.name.split("m");
        var msgId = Number(arr[arr.length-1]);
        var content = event.target.getChildByName('label').getComponent(cc.Label).string;       
        cc.vv.controller.C2S_CommonRoomChat(cc.vv.roomdata.id, "", content, msgId+1);
    },
    onTabClicked: function (event) {
        var name = event.target.name;
        if (name == 'tabQuick') {
            this.cc_quickChatNode.active = true;
            this.cc_emojiNode.active = false;
            this._btnQucik.getComponent(cc.Button).interactable = false;
            this._btnEnoji.getComponent(cc.Button).interactable = true;
        } else if (name == 'tabEmoji') {
            this.cc_quickChatNode.active = false;
            this.cc_emojiNode.active = true;
            this._btnQucik.getComponent(cc.Button).interactable = true;
            this._btnEnoji.getComponent(cc.Button).interactable = false;
        }else if(name === "btn_back"){
            this.node.active = false;
            cc.vv.global.emit("showPanelNode",false);
        } else if (name === "btn_close") {
            this._sendMsgNode.active = false;
        } else if (name === "btn_open_send") {
            this._sendMsgNode.active = true;
        } else if (name === "btn_send") {
            var msg = this.cc_chatEb.string;
            if (msg == "") {
                msg = cc.vv.configuration.filterKeyword(msg);
            }
            cc.vv.controller.C2S_CommonRoomChat(cc.vv.roomdata.id, "", msg, 100);
            this.cc_chatEb.string = "";
            this._sendMsgNode.active = false;
            this.node.active = false;
        }
    },
    onEmojiItemClicked: function (event) {
        var lastTime = (new Date()).getTime();
        if(lastTime - this._lastTime < 5000){
            this.showCD();
            return;
        }
        this._lastTime = (new Date()).getTime();
        this.node.active = false;
        // this.cc_panelNode.active = false;
        cc.vv.controller.C2S_CommonRoomChat(cc.vv.roomdata.id, event.target.name, "", 0);
    },
    onBtnSendChatClicked: function () {
        if (this.cc_chatEb.string == '') {
            return;
        }
        this.node.active = false;
        // var info = {type:0,data:this.cc_chatEb.string};
        // cc.vv.protobuf.sendMessage(1201,{type:1201,data:JSON.stringify(info)});
        this.cc_chatEb.string = '';
    },
    onEnable: function() {
        if (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.NORMAL ||
            cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.CIRCLE) {
            this._btnOpenSend.active = true;
        } else {
            this._btnOpenSend.active = false;
        }
    },
    showCD:function(){
        var node = new cc.Node();
        node.color = new cc.color(134,56,12);
        node.addComponent(cc.Label);
        node.parent = this.node;
        var label = node.getComponent(cc.Label);
        label.string = cc.vv.lang.LANG_DESC.LessChatTimes;
        label.fontSize = 24;
        label.lineHeight = 28;
        // var raw = cc.Asset.rawUrl("Classiccuyuanjane.ttf");
        // label.font = "Classiccuyuanjane";
        node.runAction(cc.sequence(cc.moveBy(0.5,0,100),cc.callFunc(function(){
            node.removeFromParent(true);
        })));
    }



    // update:function(dt){
    //     this._cd -= dt;
    // },

});
