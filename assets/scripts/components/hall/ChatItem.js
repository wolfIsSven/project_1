cc.Class({
    extends: cc.Component,
    properties: {
        cc_bgNode:cc.Node,
        cc_headNode:cc.Node,
        cc_emojiNode:cc.Node,
        cc_voiceNode:cc.Node,
        _maxWidth:700,
        _showType:0,
        _object:null
    },
    showMessage:function(){
        var label = this.cc_bgNode.getChildByName("message");
        var massage = JSON.parse(this._object.message);
        label.getComponent(cc.Label).overflow = cc.Label.Overflow.NONE;
        label.getComponent(cc.Label).string = massage.message;
         if(label.width >= this._maxWidth){
             label.getComponent(cc.Label).overflow = cc.Label.Overflow.RESIZE_HEIGHT;
             label.width = this._maxWidth;
         }
         this.node.height = label.height;
         cc.vv.global.emit("onUpdateLength",(label.height+55));
         var url = cc.vv.uqeeApi._defaultImg;
         if(this.node.name === "chatNode"){
             url = cc.vv.friendMgr.getHeadImg(this._object.sendRoleId);
         }
         var self = this;
         cc.loader.load(url,function(err,tex){
            self.cc_headNode.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(tex);
        });
        if(massage.type === 2){
            this.setEmoji(massage.emoji);
            this.node.height = this.cc_emojiNode.height > label.height?this.cc_emojiNode.height:label.height;
        }else if(massage.type === 3){
            this.cc_bgNode.active = false;
            this.cc_voiceNode.active = true;
        }
    },
    onLoad: function () {
        if(this._object){
            this.showMessage();
        }
        this._showType = 1;
    },
    onClicked:function(event){
        var name = event.target.name;
        if(name === "voiceNode"){
            var massage = JSON.parse(this._object.message);
            cc.log("name="+name+" serverId="+massage.voice);
            cc.vv.voiceMgr.downloadWixinRecord(massage.voice, this._object.receivedRoleId);
        }
    },
    initData: function (object) {
      this._object = object;
      if(this._showType === 1){
            this.showMessage();
      }
    },
    setEmoji:function (emoji) {
        this.cc_emojiNode.active = true;
        this.cc_emojiNode.getChildByName("emojiNode").getComponent(cc.Animation).play(emoji);
    }
});