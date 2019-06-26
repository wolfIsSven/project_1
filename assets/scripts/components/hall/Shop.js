var EACH_LINE_COUNT = 4;

cc.Class({
    extends: cc.Component,
    properties: {
        cc_shopItem:cc.Prefab,
        cc_contentView:cc.Node,
        cc_scrollView:cc.Node,
        _currentType:0,
        _showType:0,

        _curIndex:0,  //当前选择的数据类型
        _curData:[],  //当前选择的数据

        _isLoad: false,
    },

    getIndex: function(shopType) {
        for (var index = 0; index < this.shopTypes.length; ++index) {
            if (shopType == this.shopTypes[index]) {
                return index;
            }
        }
        return 0;
    },
    onLoad: function () {
        if (this._isLoad){
            return
        }else{
            this._isLoad = true;
        }
        // {"_id":1,"_name":"1W金币","_icon":"icon0013","_describe":"额外赠送0W金币","_limit":999,"_sell":0,"_cost_text":"1,1,10","_reward_text":"2,2,10000","_position":"1,2,5","_label":1},
        // if (cc.vv.utils.getSystem() == 2 || cc.cache.user.getAdminSwitchVal(cc.vv.constant.ADMIN_SWITCH.CLOSE_PAY) > 0){
        if (cc.cache.user.getAdminSwitchVal(cc.vv.constant.ADMIN_SWITCH.CLOSE_PAY) > 0){
            this.shopTypes = [cc.vv.constant.SHOP_TYPE.GOLD, cc.vv.constant.SHOP_TYPE.REDBAG];//, cc.vv.constant.SHOP_TYPE.FREE_DIAMOND
        }else {
            this.shopTypes = [cc.vv.constant.SHOP_TYPE.DIAMOND, cc.vv.constant.SHOP_TYPE.GOLD, cc.vv.constant.SHOP_TYPE.REDBAG];//, cc.vv.constant.SHOP_TYPE.FREE_DIAMOND
        }
        this.initLeftScrollView();

        if (cc.vv.config.PLATFORM.type === 2 && !cc.vv.wxApi.wxAuthed) {
            cc.vv.global.openWechatAuth();
        }
    },
    updateRightUI: function() {
        this.cc_scrollView.getComponent("cc.ScrollView").stopAutoScroll();
        var childrens = this.cc_contentView.children;
        var oldLength = childrens.length;
        var length = this._curData.length;
        var cnt = 0;
        var i = 0;
        cc.trace_log("curData:", this._curData)
        for(;i<length;++i){
            if (this._curData[i]["_special"] && Number(this._curData[i]["_special"]) == 1) {
                continue;
            }
            this.addItem(childrens[cnt],this._curData[i], this.shopTypes[this._curIndex]);
            cnt++;
        }
        this.cc_contentView.height = Math.ceil(cnt/EACH_LINE_COUNT)*360;
        while(cnt<oldLength){
            childrens[cnt].active = false;
            ++cnt;
        }
    },
    addItem:function(item,data,type){
        if(item){
            item.active = true;
            item.getComponent("ShopItem").initData(data,type,this._curDataId);
        }else{
            item = cc.instantiate(this.cc_shopItem);
            item.getComponent("ShopItem").initData(data,type,this._curDataId);
            this.cc_contentView.addChild(item);
        }
    },
    initLeftScrollView :function () {
        var leftScrollView = this.node.getChildByName("sv_left");
        var leftSVView = leftScrollView.getChildByName("view");
        var leftSVContent = leftSVView.getChildByName("content");
        var leftCommonBtn = this.node.getChildByName("btn_common")
        if (leftSVContent.getChildren().length > 0){
            return
        }
        cc.trace_log("shopTypes:", this.shopTypes)
        for (var index = 0; index < this.shopTypes.length; ++index) {
            var shopType = this.shopTypes[index];
            var curBtn = cc.instantiate(leftCommonBtn);
            curBtn.active = true;
            var btnRadioButton = curBtn.getComponent("RadioButton");
            btnRadioButton.id = index;
            var btn = curBtn.getChildByName("btn");
            var label = btn.getChildByName("label").getComponent(cc.Label);
            label.string = cc.vv.lang.SHOP_TYPE[shopType];
            cc.vv.utils.addClickEvent(btn, this.node, 'Shop', 'onBtnClicked');
            curBtn.parent = leftSVContent;
        }
        var allLength = this.shopTypes.length*90;
        cc.vv.utils.scrollviewMoveEnabled(leftScrollView,allLength);

        //初始化第一个按钮状态
        this._curIndex = 0;
        var firstRadioBtn = leftSVContent.children[this._curIndex].getComponent("RadioButton")
        firstRadioBtn.onClicked();
        this.updateRightData();
    },
    onBtnClicked: function (event) {
        var target = event.target;
        var name = target.name;
        if (name === "btn_back"){
            this.node.active = false;
            cc.vv.global.emit("showPanelNode",false); 
        }else if (name === "btn"){
            var btnRadioButton = target.parent.getComponent("RadioButton");
            this._curIndex = btnRadioButton.id;
            this.updateRightData()
        }
    },
    updateRightData: function() {
        var gameType = cc.vv.mjattribute.GAME_TYPE[cc.vv.mjattribute.GAME_TYPE.index].bigType;
        var curType = this.shopTypes[this._curIndex];
        if (curType === cc.vv.constant.SHOP_TYPE.GOLD || curType === cc.vv.constant.SHOP_TYPE.REDBAG){
            var curData = cc.vv.configuration.getGoodsByAllType(gameType,0);
            if (curType === cc.vv.constant.SHOP_TYPE.REDBAG){
                curData = cc.vv.configuration.getGoodsByAllType(gameType,1);
            }

            this._curData = curData.Goods;
            this._curDataId = curData._id;
        }else if(curType === cc.vv.constant.SHOP_TYPE.DIAMOND){

            this._curData = cc.configuration.payJson["Pays"]["Pay"];
            this._curData.sort(function (a, b) {
                return Number(a["_coin"]) - Number(b["_coin"]);
            });
        }
        // else if(curType === cc.vv.constant.SHOP_TYPE.FREE_DIAMOND){

        //     this._curData = cc.configuration.payJson["Pays"]["Pay"];
        //     this._curData.sort(function (a, b) {
        //         return Number(a["_coin"]) - Number(b["_coin"]);
        //     });
        // }
        this.updateRightUI();
    },
    showItem:function(type){
        if (cc.vv.utils.getSystem() == 2 || cc.cache.user.getAdminSwitchVal(cc.vv.constant.ADMIN_SWITCH.CLOSE_PAY) > 0){
            this._curIndex = this.getIndex(cc.vv.constant.SHOP_TYPE.GOLD);
        }else{
            this._curIndex = this.getIndex(type);
        }
        console.log("===========this._curIndex",this._curIndex);
        var leftScrollView = this.node.getChildByName("sv_left");
        var leftSVView = leftScrollView.getChildByName("view");
        var leftSVContent = leftSVView.getChildByName("content");
        var firstRadioBtn = leftSVContent.children[this._curIndex].getComponent("RadioButton")
        firstRadioBtn.onClicked();
        this.updateRightData();
    },

    //左边当前商品类型按钮
    //刷新右边对应数据
    //刷新对应物品
    //每个物品的刷新添加
    //所有按钮触发事件


    //选择标签

    // initPayData:function(){
    //     if(!this._payJson){
    //         cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips,cc.vv.lang.LANG_DESC.Loading,null,false);
    //         return;
    //     }
    //     this._currentType = 101;
    //     var items = this._payJson["Pays"]["Pay"];
    //     var u = navigator.userAgent;
    //     var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    //     var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

    //     var childrens = this.cc_contentView.children;
    //     var oLength = childrens.length;
    //     var length = items.length;
    //     var count = 0;
    //     for(var i =0;i<length;++i){
    //         var friend = cc.instantiate(this.cc_shopItem);
    //         if(isiOS){
    //             if(items[i]._from === "2"){
    //                 this.addItem(childrens[count],items[i],101);
    //                 ++count;
    //             }
    //         }else{
    //             if(items[i]._from === "1"){
    //                 this.addItem(childrens[count],items[i],101);
    //                 ++count;
    //             }
    //         }
    //     }
    //     this.cc_contentView.height = Math.ceil(count/4)*360;
    //     while(count<oLength){
    //         childrens[count].active = false;
    //         ++count;
    //     }
    // },

    // initData:function(type){
    //     if(!this._storeJson){
    //         cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips,cc.vv.lang.LANG_DESC.Loading,null,false);
    //         return;
    //     }
    //     if(this._currentType === type){
    //         return;
    //     }
    //     // if(type === 4){
    //     //     this.cc_dropNode.active = true;
    //     // }else{
    //     //     this.cc_dropNode.active = false;
    //     // }
    //     //1=金豆   2=金币  3=房卡  4=道具 100=索要
    //     var items = this.getGoods(type);
    //     var childrens = this.cc_contentView.children;
    //     var oLength = childrens.length;
    //     var length = items.length;
    //     this._currentType = type;
    //     var i = 0;
    //     for(;i<length;++i){
    //         this.addItem(childrens[i],items[i],type);
    //     }
    //     this.cc_contentView.height = Math.ceil(i/4)*360;
    //     while(i<oLength){
    //         childrens[i].active = false;
    //         ++i;
    //     }
    // },

    // getBuyData: function (i) {
    //     var data = {
    //         action: 'pay',
    //         // uid: cc.cache.user.id,
    //         // uid: '406119',
    //         uid: cc.vv.wy_uid,
    //         gameid: '64',
    //         amount: itemPrice[i],
    //         productid: itemId[i],
    //         goodid: '714',
    //         ext: cc.cache.user.id
    //     };
    //     return data;
    // }
});