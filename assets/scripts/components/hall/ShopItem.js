cc.Class({
    extends: cc.Component,
    properties: {
        cc_nameLabel:cc.Node,
        cc_iconSprite:cc.Node,
        cc_valueLabel:cc.Node,
        cc_iconCost:cc.Node,
        _type:0,
        _object:null
    },
    initData:function(data,type,storeId){
        this._type = type;
        if (cc.vv.utils.getSystem() == 2 || cc.cache.user.getAdminSwitchVal(cc.vv.constant.ADMIN_SWITCH.CLOSE_PAY) > 0){
            // ++this._type;
        }
        this._object = data;
        this._curDataId = storeId;
        this.cc_nameLabel.getComponent(cc.Label).string = this._object._name;
        
        if(this._type === cc.vv.constant.SHOP_TYPE.DIAMOND) {
            this.cc_iconCost.active = false;
            this.cc_valueLabel.anchorX = 0.5;
            this.cc_valueLabel.getComponent(cc.Label).string = "￥" + this._object._coin;
            this.cc_valueLabel.getComponent(cc.Label).HorizontalAlign = cc.Label.HorizontalAlign.CENTER;
            this.cc_valueLabel.x = 0;
        }else{
            this.cc_iconCost.active = true;
            this.cc_valueLabel.anchorX = 0;
            var costData = this._object._cost_text.split(',')
            var costVal = Number(costData[2]);
            if (this._type == cc.vv.constant.SHOP_TYPE.REDBAG) {
                costVal /= 100;
            }
            this.cc_valueLabel.getComponent(cc.Label).string = costVal;
            // this.cc_valueLabel.getComponent(cc.Label).HorizontalAlign = cc.Label.HorizontalAlign.LEFT;
            this.cc_iconCost.getComponent(cc.Sprite).spriteFrame = cc.vv.dataMgr.getIconByType(costData[0], costData[1]).spriteFrame;
            this.cc_valueLabel.x = -5;
        }
        // var spriteframe = cc.vv.dataMgr.getSpriteFrameByName(this._object._icon);
        if (this._object._reward_text) {
            var rwdData = this._object._reward_text.split(',');
            var rwdType = Number(rwdData[0]);
            if (rwdType == cc.vv.constant.COST_TYPE.MATERIAL) {
                this.cc_iconSprite.getComponent(cc.Sprite).spriteFrame = cc.vv.dataMgr.getIconByType(rwdData[0], rwdData[1]).spriteFrame;
            } else {
                this.cc_iconSprite.getComponent(cc.Sprite).spriteFrame = cc.plistAtlas.shopAtlas.getSpriteFrame(this._object._icon);            
            }            
        } else {
            this.cc_iconSprite.getComponent(cc.Sprite).spriteFrame = cc.plistAtlas.shopAtlas.getSpriteFrame(this._object._icon);            
        }

        var moneyLabel = this.node.getChildByName("money");
        var strArr = this._object._name.split("X");
        moneyLabel.getComponent(cc.Label).string = strArr[0];

    },
    onLoad: function () {
        
    },
    onClickedBuy:function(){
        if(this._type === 100){
            cc.vv.global.emit("askfor",[this._object]);
        }else if(this._type === 4){
            cc.vv.global.emit("dropInfo",[this._object]);
        }else if(this._type === cc.vv.constant.SHOP_TYPE.DIAMOND){//充值
            if (cc.vv.config.PLATFORM.type === 2 && !cc.vv.wxApi.wxAuthed) {
                cc.vv.global.openWechatAuth();
                return;
            }
            var u = navigator.userAgent;
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            if(isiOS){
                var self = this;
                wx.showModal({
                    title: '提示',
                    content: 'IOS暂不支持充值\r\n1. 可登录安卓设备进行充值\r\n2. 发送给安卓用户代为充值',
                    confirmText: '发送',
                    success(res) {
                        if (res.confirm) {
                            cc.vv.wxApi.wxShare(cc.vv.constant.SHARE_DEST.FRIEND, cc.vv.constant.SHARE_TYPE.SHARE_TYPE_PAY,
                                {payId:Number(self._object._id), openId: cc.cache.account.openId,
                                    loginname: cc.cache.account.loginname, username: cc.cache.account.username,
                                    rolename: cc.cache.account.nickname, ts: cc.vv.utils.getCurServerSecond() + 3600});
                        }
                    }
                });

                // cc.vv.alert.show(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_DESC.ShopIosTips,null,false);
            }else{
                var self = this;
                if (cc.vv.platformSdk) {
                    cc.vv.platformSdk.pay(self._object);
                } else if (cc.vv.wy51Api) {
                    console.log("=====================self.object",self._object);
                    cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.STORE + this._object._name);

                    cc.vv.uqeeApi.getOrderId(this._object,function(tradeNo){
                        cc.vv.uqeeApi.pay(self._object,tradeNo);
                    });
                }
            }
        }else{
            var costData = this._object._cost_text.split(',');
            var moneyData = cc.vv.dataMgr.getIconByType(costData[0], costData[1]);
            if (this._type == cc.vv.constant.SHOP_TYPE.REDBAG) {
                var cash = Math.floor(cc.cache.user.curRedBagCash * 100 + 0.000001)
                if (~~costData[2] > cash){
                    cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, moneyData.name+cc.vv.lang.LANG_DESC.NotEnough, null, false);
                    return
                }         
            } else {
                if (~~costData[2] > moneyData.num){
                    cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, moneyData.name+cc.vv.lang.LANG_DESC.NotEnough, null, false);
                    return
                }                
            }
            cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.STORE + this._object._name);
            cc.vv.controller.C2S_CommonStoreBuy(cc.vv.mjattribute.GAME_TYPE[cc.vv.mjattribute.GAME_TYPE.index].bigType,~~this._curDataId,~~this._object._id); //购买商品
        }
    }
});