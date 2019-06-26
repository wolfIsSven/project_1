cc.Class({
    extends: cc.Component,
    properties: {
        cc_agentItem:cc.Prefab,
        cc_chatItem:cc.Prefab,
        cc_contentView:cc.Node,
       cc_selectedNode:cc.Node,
       cc_vedioNode:cc.Node,
       cc_editBox:cc.EditBox,
       cc_sendButton:cc.Node,
       cc_manyButton:cc.Node,
       cc_scrollView:cc.ScrollView,
       cc_emojiNode:cc.Node
    },
    addMessage:function(info){
        var prefab = this.cc_agentItem;
        if(info.sendRoleId === cc.cache.user.id){
            prefab = this.cc_chatItem;
        }
        var friend = cc.instantiate(prefab);
        friend.getComponent("ChatItem").initData(info);
        this.cc_contentView.addChild(friend);
    },
    onEmojiItemClicked: function (event) {
        var name = event.target.name;
        this.cc_emojiNode.active = false;
        var message = this.cc_editBox.string;
        message = JSON.stringify({type:2,message:message,emoji:name});
        cc.vv.protobuf.sendMessage(1613,{type:1613,receivedRoleId:cc.vv.friendMgr._curFriendRoleId,message:message});
    },
    initFriendMessage:function(){
        this.cc_contentView.removeAllChildren();
        this.cc_scrollView.scrollToTop(0);
        this.cc_contentView.height = 20;
        var friendInfo = cc.vv.friendMgr.getCurFriendInfo();
        var message = friendInfo.message;
        var length = message.length;
        for(var i =0;i<length;i++){
            var info = message[i];
            this.addMessage(info);
        }
    },
    onLoad: function () {
        if(cc.vv.global.IsScale()){
            this.node.getChildByName("bg").height = cc.winSize.height;
        }
        // this.addComponent('OnBack');
        var self = this;
        cc.vv.global.on("onFriendChatMessge",function(data){
            var data = data.detail;
            if(cc.vv.friendMgr._curFriendRoleId === data.sendRoleId || cc.vv.friendMgr._curFriendRoleId === data.receivedRoleId){
                if(data.sendRoleId === cc.cache.user.id){
                    self.cc_editBox.string = "";
                }
                data.read = 1;
                self.addMessage(data);
            }
        });
        cc.vv.global.on("onFriendDel",function(data){
            cc.vv.friendMgr.delFriend(cc.vv.friendMgr._curFriendRoleId);
            self.node.active = false;
        });
        self.cc_contentView.height = 20;
        cc.vv.global.on("onUpdateLength",function(data){
            self.cc_contentView.height += data.detail;
            self.cc_scrollView.scrollToBottom(0.1);
        });
    },
    onButtonClick:function(event){
        var name = event.target.name;
        if(name === "SendButton"){
            var message = this.cc_editBox.string;
            if(message === ""){
                return;
            }
            message = JSON.stringify({type:1,message:message});
            cc.vv.protobuf.sendMessage(1613,{type:1613,receivedRoleId:cc.vv.friendMgr._curFriendRoleId,message:message});
        }else if(name === "emjoiButton"){
            this.cc_emojiNode.active = !this.cc_emojiNode.active;
        }else if(name === "shipinButton"){
            // this.cc_vedioNode.active = true;
            // cc.vv.protobuf.sendMessage(1013,{type:1013,role_Id:19});
            // cc.vv.anyChatMgr.call(19);
        }else if(name === "tupianButton"){
            
        }else if(name === "julebuButton"){
            
        }else if(name === "shanchuButton"){
            cc.vv.protobuf.sendMessage(1615,{type:1615,roleId:cc.vv.friendMgr._curFriendRoleId});
        }else if(name === "offButton"){
            
        }else if(name === "AgreeButton"){
            
        }else if(name === "ManyButton"){
            this.cc_selectedNode.active =true;
        }else if(name === "btn_back"){
            this.node.active = false;
            cc.vv.friendMgr._curFriendRoleId = 0;
        }else if(name === "chatNode"){
            this.cc_emojiNode.active = false;
        }
    },
    onEditBoxChanged:function(str){
        if(str === ""){
            this.cc_manyButton.active = true;
            this.cc_sendButton.active = false;
        }else{
            this.cc_manyButton.active = false;
            this.cc_sendButton.active = true;
        }
    }
    
});