cc.Class({
    extends: cc.Component,
    properties: {
        cc_recordNode:cc.Node,
        cc_redBagLabel:cc.Node,
        cc_recordContent:cc.Node,
        cc_redbagItem:cc.Prefab,
        cc_helpNode:cc.Node,
        cc_mainNode:cc.Node,
        cc_ewmNode:cc.Node,
    },

    closeHelpEvent: function() {
        this.cc_helpNode.active = false;
    },
    onBtnClicked: function (event) {
        var name = event.target.name;
        if(name === "btn_help"){
            this.cc_helpNode.active = true;
        }else if(name === "btn_share_to"){
            this.cc_ewmNode.active = true;
        }else if(name === "btn_add_1" || name === "btn_add_2" || name === "btn_add_3" || name === "btn_invite"){
            cc.vv.wxApi.wxShare(cc.vv.constant.SHARE_DEST.FRIEND);
        }else if(name === "btn_invite_info"){
            this.cc_recordNode.active = true;
        }else if(name === "btn_save"){
            this.cc_ewmNode.getChildByName("btn_save").active = false;
            this.cc_ewmNode.getChildByName("btn_back").active = false;
            
            var self = this;
            var asynId1 = cc.vv.global.setTimeOutFunc(this, function(){
                var width = canvas.width;
                var height = canvas.height;

                var swidth = 1280;
                var sheight = 720;

                var frameW = width, frameH = height,designW = swidth, designH = sheight,scaleX = frameW / designW, scaleY = frameH / designH,containerW, containerH;;

                scaleX < scaleY ? (containerW = frameW, containerH = designH * scaleX) : (containerW = designW * scaleY, containerH = frameH);
                var offx = Math.round((frameW - containerW) / 2);
                var offy = Math.round((frameH - containerH) / 2);
                containerW = frameW - 2 * offx;
                containerH = frameH - 2 * offy;

                swidth  = containerW*0.85;//*cc.vv.gameNetMgr.getScale();
                sheight = containerH*0.85;//*cc.vv.gameNetMgr.getScale();

                canvas.toTempFilePath({
                    x:width*0.5 - swidth*0.5,
                    y:height*0.5 - sheight*0.5,
                    width:swidth,
                    height:sheight,
                    destWidth:swidth,
                    destHeight:sheight,
                    success: function(res) {
                        var path = res.tempFilePath
                        wx.saveImageToPhotosAlbum({filePath:path,success:function(res){
                            cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_DESC.SavePhoto,null,false);
                            var asynId2 = cc.vv.global.setTimeOutFunc(self, function(){
                                self.cc_ewmNode.getChildByName("btn_save").active = true;
                                self.cc_ewmNode.getChildByName("btn_back").active = true;
                            },500);
                        },fail:function(res){
                            var asynId3 = cc.vv.global.setTimeOutFunc(self, function(){
                                self.cc_ewmNode.getChildByName("btn_save").active = true;
                                self.cc_ewmNode.getChildByName("btn_back").active = true;
                            },500);
                        }});
                    } 
                });
            },100);
        }
    },
    addItems:function(child,data){
        if(child){
            child.getComponent("InvitingItem").initData(data);
        }else{
            var item = cc.instantiate(this.cc_redbagItem);
            item.getComponent("InvitingItem").initData(data);
            item.parent = this.cc_recordContent;
        }
    },
    setPhotoStatus:function(){
        console.log("==========cc.cache.user",cc.cache.account.headImg);
        this.cc_ewmNode.getChildByName("label_name").getComponent(cc.Label).string = cc.cache.account.nickname;
    },
    onEvent:function(){
        // cc.vv.global.on("updateShareHistory",function(){
        //     this.initHistory();
        // }.bind(this));
    },
    closeNodeEvent: function() {
        this.node.active = false;
        cc.vv.global.emit("showPanelNode", false);
    },
    closeEWMEvent: function() {
        this.cc_ewmNode.active = false;
    },
    initHistory:function(){
        var childrens = this.cc_recordContent.children;
        var list = cc.cache.user.invitersList;
        var num = 0;
        for(var id in list){
            this.addItems(childrens[num],list[id]);
            num++;
        }
        this.cc_recordContent.height = num*67;
    },
    onLoad: function () {
        this.setPhotoStatus();
        this.onEvent();
        // if (cc.cache.user.redBagList) {
            cc.vv.controller.C2S_MainWechatShareLoad();
        // }
    },
    closeRecordEvent: function() {
        this.cc_recordNode.active = false;
    },
    //分享朋友圈界面获取信息 
    //按钮点击时间
    //关闭
});