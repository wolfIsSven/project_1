// var PHONE_REG = /^1[3|4|5|8][0-9]\d{4,8}$/;
// var TEXT_REG = /^\d{6}$/;
cc.Class({
    extends: cc.Component,
    properties: {
        cc_infoNode:cc.Node,
        cc_detailNode:cc.Node,
        cc_item:cc.Prefab,
        cc_contentView:cc.Node,
        cc_spriteFrame1:cc.SpriteFrame,
        cc_spriteFrame2:cc.SpriteFrame,
        cc_webview:cc.Node,
        cc_headNode:cc.Node,
        cc_rebateNode:cc.Node,
        cc_webViewCode:cc.Node
    },
    adjuestPosition:function(){
        // if(cc.vv.global.IsScale()){
        //     this.node.height = cc.winSize.height;
        //     this.node.getChildByName("btn_back").y = cc.winSize.height*0.5;
        //     this.node.getChildByName("bg").height = cc.winSize.height;
        // }
    },
   onClickWebView:function(){

   },
    addView:function(data){
        var list = data["lists"];
        this._commissionLabel.string = data["tgymoney"];
        if(!(list instanceof Array)){
            return;
        }
        this.cc_contentView.removeAllChildren();
        var length = list.length;
        for(var i = 0;i<length;i++){
            var item = cc.instantiate(this.cc_item);
            item.getComponent("PromotionItem").initData(list[i],(i%2===0?this.cc_spriteFrame2:this.cc_spriteFrame1),(i%2===0?new cc.color(105,47,18):new cc.color(255,255,255)));
            this.cc_contentView.addChild(item);
        }
        this.cc_contentView.height = length*46;
    },
   onClicked:function(event){
        var name = event.target.name;
        if(name === "informationButton"){
            this.cc_infoNode.active = true;
            this.cc_detailNode.active = false;
            this.cc_rebateNode.active = false;
            this.getPromotersInfo();
        }else if(name === "DetailedButton"){
            this.cc_infoNode.active = false;
            this.cc_detailNode.active = true;
            this.cc_rebateNode.active = false;
            this.getPromotersDetail();
        }else if(name === "RebateButton"){
            this.cc_infoNode.active = false;
            this.cc_detailNode.active = false;
            this.cc_rebateNode.active = true;
            // this.getPromotersDetail();
        }else if(name === "codeButton"){
            this.cc_infoNode.active = false;
            this.cc_detailNode.active = true;
            this.getRechargeDetails();
        }else if(name === "linkButton"){
            this.cc_infoNode.active = false;
            this.cc_detailNode.active = true;
            this.getPromotersDetail();
        }else if(name === "rechargeButton"){
            cc.vv.global.emit("OnShowGoldRoomView",{active:true,id:cc.vv.constant.SHOP_TYPE.DIAMOND});
        }else if(name === "moneyButton"){
            var sign =  cc.md5('tzmjapiabacdsss'+cc.vv.cache.account.uid);
            var self = this;
            if (cc.vv.wy51Api) {
                cc.vv.wy51Api.getCode(function (msg) {
                    if (msg["status"] === 1) {
                        self.cc_webview.active = true;
                        self.cc_webview.getChildByName("view").getComponent(cc.WebView).url = msg["info"];
                    }
                }, 1, sign);
            }
        }else if(name === "closeBtn"){
            this.cc_webview.active = false;
        }else if(name === "makemoneyButton"){
            cc.vv.wxApi.wxShare(cc.vv.constant.SHARE_DEST.FRIEND);
        }else if(name === "EwmButton"){
            
        }
   },
    getPromotersDetail:function(){
        var self = this;
        if (cc.vv.wy51Api) {
            cc.vv.wy51Api.getPromotersDetails(function (info) {
                self.addView(info["data"]);
            });
        }
    },
    onLoad: function () {
        this.adjuestPosition();
        this.addComponent('OnBack');
        this.getPromotersInfo();

        this.cc_headNode.getComponent(cc.Sprite).spriteFrame = cc.cache.user.headImgSpriteFrame;
        this.cc_infoNode.getChildByName("nameLabel").getComponent(cc.Label).string = cc.cache.user.roleName;
        this._commissionLabel = this.cc_detailNode.getChildByName("CommissionLabel").getComponent(cc.Label);
        this._commissionLabel.string = 0;
    },
   getPromotersInfo:function(){
        var self = this;
        if (cc.vv.wy51Api) {
            cc.vv.wy51Api.getPromotersInfo(function (info) {
                self.cc_infoNode.getChildByName("peoplenumberLabel").getComponent(cc.Label).string = info.data.tgnum;
                self.cc_infoNode.getChildByName("moneyLabel").getComponent(cc.Label).string = info.data.tgsumy;
                self.cc_infoNode.getChildByName("totalLabel").getComponent(cc.Label).string = info.data.tgmysumy;
                self.cc_webViewCode.getComponent(cc.WebView).url = info.data.ewm;
            });
        }
    },
    getRechargeDetails:function(){
        var self = this;
        if (cc.vv.wy51Api) {
            cc.vv.wy51Api.getRechargeDetails(function(info){
                self.addView(info["data"]);
            });
        }
    }
});