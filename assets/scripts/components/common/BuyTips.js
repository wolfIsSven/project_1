cc.Class({
    extends: cc.Component,
    properties: {
        cc_titleLabel:cc.Node,
        cc_iconNode:cc.Node,
        cc_shopName:cc.Node,
        cc_richTextNode:cc.Node,
        _buyByDiamond:false,
        _object:null,
        _payJson:null
    },

    getStoreData:function(){
        var diamond = cc.cache.user.diamond;
        var goods = this._storeJson["Stores"]["Goods"];
        var length = goods.length;
        var ret = null;
        for(var i = 0;i<length;i++){
            var item = goods[i];
            if(item._reward_text.split(",")[0] == 1 && this._id === 1001 && diamond > (~~item._cost_text.split(",")[1])){
                ret = item;
                break;
            }else  if(item._reward_text.split(",")[0] == 4 && this._id === 1002 && diamond > (~~item._cost_text.split(",")[1])){
                ret = item;
                break;
            }
        }
        return ret;
    },
    initData:function(){
        if(!this._payJson){
            cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips,cc.vv.lang.LANG_DESC.Loading,null,false);
            return;
        }
        cc.vv.alert.hide();
        this._object= this.getData();
        if(this._object){
            var desArray = this._object._describe.split(";");
            this.cc_titleLabel.getComponent(cc.Label).string = desArray[0];
            this.cc_richTextNode.getComponent(cc.RichText).string = "<color=#fdffff>"+desArray[1]+"</c><color=#fe0101>"+this._object._nums+"元</color><color=#fdffff>"+desArray[2]+"\n</color><color=#fdffff>"+desArray[3]+"</color>";
            desArray = this._object._reward_text.split(",");
            var info = cc.vv.dataMgr.getIconByType(desArray[0]);
            this.cc_iconNode.getComponent(cc.Sprite).spriteFrame = info.spriteFrame;
            this.cc_shopName.getComponent(cc.Label).string = this._object._name;
        }
    },
    onLoad: function () {
        this._id = 0;
        if(cc.vv.global.IsScale()){
            this.node.getChildByName("bg").height = cc.winSize.height;
        }
        cc.vv.buyTips = this;
        var payUrl = 'xml/pay.json';
        var self = this;
        cc.loader.loadRes(payUrl, function (err, data) {
            self._payJson = data.json;
            self.show(self._id);
        });
        var storeUrl = 'xml/store.json';
        var self = this;
        cc.loader.loadRes(storeUrl, function (err, data) {
            self._storeJson = data.json;
            self.show(self._id);
        });
        cc.vv.utils.openAnimation(this.node.getChildByName("panelNode"));
    },
    onClicked:function(event){
        var name = event.target.name;
        if(name === "btn_ok"){
            if(this._buyByDiamond){
                cc.vv.protobuf.sendMessage(1501,{type:1501,id:~~(this._object._id)});//购买商品
                this.node.active = false;
            }else{
                if(this._object){
                    cc.vv.uqeeApi.pay(this._object);
                    this.node.active = false;
                }else{
                    cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips,cc.vv.lang.LANG_DESC.DataWrong,null,false);
                }
            }
           
        }else if(name === "btn_cancel"){
            // var id = 1;
            // if(this._id === 1001){
            //     id = 2;
            // }
            // cc.vv.global.emit("OnShowGoldRoomView",{active:true,id:1});
            this.node.active = false;
        }
    },
    initDiamonData:function(){
        if(!this._storeJson){
            cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips,cc.vv.lang.LANG_DESC.Loading,null,false);
            return;
        }
        cc.vv.alert.hide();
        this._object= this.getStoreData();
        if(this._object){
            this.cc_titleLabel.getComponent(cc.Label).string = this._id === 1001 ? cc.vv.lang.LANG_DESC.GoldNotEnough:cc.vv.lang.LANG_DESC.KeyNotEnough;
            this.cc_richTextNode.getComponent(cc.RichText).string = "<color=#fdffff>"+cc.vv.lang.LANG_DESC.BuyByDiamond.replace("?",this._object._cost_text.split(",")[1]).replace("?",this._object._name)+"</color>";
            var desArray = this._object._reward_text.split(",");
            var info = cc.vv.dataMgr.getIconByType(desArray[0]);
            this.cc_iconNode.getComponent(cc.Sprite).spriteFrame = info.spriteFrame;
            this.cc_shopName.getComponent(cc.Label).string = this._object._name;
            this._buyByDiamond = true;
            return false;
        }
        this._buyByDiamond = false;
        return true;
    },
    show:function(id){
        if(id === 0){
            return;
        }
        this._id = id;
        this.node.active = true;
        if(this.initDiamonData()){
            this.initData();
        }
    },
    getData:function(){
        var items = this._payJson["Pays"]["Pay"];
        var length = items.length;
        for(var i =0;i<length;i++){
           if(items[i]._id == this._id){
               return items[i];
           }
        }
        return null;
    },
    onDestroy:function(){
        cc.vv.buyTips = null;
    }
});
