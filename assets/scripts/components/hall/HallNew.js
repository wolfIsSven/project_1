// var Net = require('Net');

cc.info_log_LEVEL = 6; //1:FATAL 2:ERROR 3:WARNING 4:INFO 5:DEBUG 6:TRACE
cc.fatal_log = function (message, ...optionalParams) {
    if (cc.info_log_LEVEL >= 1) {
        var ts = new Date().getTime() / 1000;
        var prefix = "FATAL : [" + ts.toString() + "] "
        console.log(prefix + message, ...optionalParams);
    }
}
cc.error_log = function (message, ...optionalParams) {
    if (cc.info_log_LEVEL >= 2) {
        var ts = new Date().getTime() / 1000;
        var prefix = "ERROR : [" + ts.toString() + "] "
        console.log(prefix + message, ...optionalParams);
    }
}
cc.warn_log = function (message, ...optionalParams) {
    if (cc.info_log_LEVEL >= 3) {
        var ts = new Date().getTime() / 1000;
        var prefix = "WARN : [" + ts.toString() + "] "
        console.log(prefix + message, ...optionalParams);
    }
}
cc.info_log = function (message, ...optionalParams) {
    if (cc.info_log_LEVEL >= 4) {
        var ts = new Date().getTime() / 1000;
        var prefix = "INFO : [" + ts.toString() + "] "
        console.log(prefix + message, ...optionalParams);
    }
}
cc.debug_log = function (message, ...optionalParams) {
    if (cc.info_log_LEVEL >= 5) {
        var ts = new Date().getTime() / 1000;
        var prefix = "DEBUG : [" + ts.toString() + "] "
        console.log(prefix + message, ...optionalParams);
    }
}
cc.trace_log = function (message, ...optionalParams) {
    if (cc.info_log_LEVEL >= 6) {
        var ts = new Date().getTime() / 1000;
        var prefix = "TRACE : [" + ts.toString() + "] "
        console.log(prefix + message, ...optionalParams);
    }
}

cc.Class({
    extends: cc.Component,

    properties: {
    },

    // use this for initialization
    onLoad: function () {
        cc.MyWinSize.preExcute();
        
        this.mask = this.node.getChildByName("imgMaskFit");
        this.mask.active = true
        this.mask.zIndex = 1;
        if (cc.logined){
            this.initComponents();
            return;
        }

        cc.vv = {};
        cc.vv.config = require('Config');
        if(cc.vv.config.PLATFORM.type === 2){
            wx.showLoading({
                title: '加载资源中...',
            })

            this.initComponents();
          
        }else{
            this.initComponents();
        }
    },

    onEnable: function () {
        
    },

    initComponents: function () {
        var self = this;
        
        cc.loader.loadRes("prefabs/hall_node_mid",cc.Prefab,function(err,prefab){
            var jcNode = cc.instantiate(prefab);
            jcNode.name = "midNode";
            jcNode.parent = self.node;
            self.cc_midNode = jcNode.getChildByName("midNode").getChildByName("view").getChildByName("content");

            cc.loader.loadRes("prefabs/hall_node_bottom",cc.Prefab,function(err,prefab){
                var jcNode = cc.instantiate(prefab);
                jcNode.name = "nodeBottomFit";
                jcNode.parent = self.node;
                self.cc_botNode = jcNode.getChildByName("nodeBottomFit");

                cc.loader.loadRes("prefabs/hall_node_top",cc.Prefab,function(err,prefab){
                    var jcNode = cc.instantiate(prefab);
                    jcNode.name = "nodeTopFit";
                    jcNode.parent = self.node;
                    self.cc_topNode = jcNode.getChildByName("nodeTopFit");
    
                    cc.loader.loadRes("prefabs/hall_node_top_left",cc.Prefab,function(err,prefab){
                        var jcNode = cc.instantiate(prefab);
                        jcNode.name = "nodeTopLeftFit";
                        jcNode.parent = self.node;
                        self.cc_topLeftNode = jcNode.getChildByName("nodeTopLeftFit");
        
                        cc.loader.loadRes("prefabs/hall_node_left",cc.Prefab,function(err,prefab){
                            var jcNode = cc.instantiate(prefab);
                            jcNode.name = "nodeLeftFit";
                            jcNode.parent = self.node;
                            self.leftNode = jcNode.getChildByName("nodeLeftFit");
                            
                            if (cc.logined){
                                self.onLoadCallBack(false);
                                self.btnEvent();
                                return;
                            }else{
                                self.hallInit();
                            }
                        });
                    });
                });
            });
        });
    },

    hallInit: function() {
        cc.info_log("onLoad! step2 =============== initUI")
        var isLogined = cc.sys.localStorage.getItem('is_logined');
        if (!isLogined) {
            cc.isNewer = true;            
        }

        cc.info_log("onLoad! step3 =============== init config")
        var config = require('Config');
        var platform = config.PLATFORM[config.PLATFORM.type];
        if (config.PLATFORM.type == 2) {
            platform = platform[platform.pack_index];
        }

        cc.info_log("onLoad! step4 =============== platform:", platform)
        if (platform.login_js && platform.login_js != "") {
            var LoginJs = require(platform.login_js);
            if (LoginJs) {
                this.loginJs = new LoginJs();
                cc.info_log("onLoad! step5 =============== initLoginNode")
                this.loginJs.initLoginNode(this.node);
                cc.info_log("onLoad! step6 =============== enterGame")
                this.loginJs.enterGame(function() {
                    cc.info_log("onLoad! step7 =============== enterGame")
                    this.initLoading();
                }.bind(this));
            }
        }

        this.node.on('load_hall', function () {
            this.onLoadCallBack(true);
        }.bind(this));

        this.btnEvent();
    },

    onLoadCallBack: function (isLogin) {
        cc.trace_log("hall onload");

        this.hideSth();

        this.initAldHallEvent();
        this.initUIPrefabDefines();
        this.initUIPrefabs();
        this.initPanels();

        this.initEventHandlers();
        this.initInfo();
        this.initAdvertCD();
        this.showGoldRelive();
        this.showWxMyProGold();

        cc.vv.utils.addEscEvent(this.node);

        cc.vv.audioMgr.stopBGM();

        this.cur_zIndex = 0; //第一个界面的index
        if (cc.isZjj) {
            this.openPanel(cc.vv.constant.HALL_PREFAB.ZJJ);
        } 

        // this.hideForNotWechat();

        if (cc.vv.config.PLATFORM.type === 2 && !cc.vv.wxApi.wxAuthed) {
            if (!cc.isZjj) {
                if (cc.isNewer && cc.cache.user.totalOnlineTime < 100) {

                } else {
                    cc.vv.global.openWechatAuth();
                }
            }
        }

        this.checkAgentPay();

        this.mengjiaZjPush();

        cc.isZjj = false;

        if (isLogin && cc.isNewer && cc.cache.user.totalOnlineTime < 100) {
            cc.cache.user.selectRuleType = cc.vv.mjattribute.RULE_TYPE.SC_MAHJONG_XUELIU;
            var ruleName = cc.vv.lang.LANG_RULE_TYPE[Number(cc.cache.user.selectRuleType)];
            cc.vv.wxApi.aldEventReport(ruleName + cc.vv.lang.ALD_EVENT.GOLDROOM_QUICKJOIN);
            cc.vv.controller.C2S_RoomMjQuickJoin(cc.cache.user.selectRuleType, cc.vv.constant.ROOM_TYPE.GOLD, 0);
        }

        this.mask.active = false
        this.mask.zIndex = 0;
        if(cc.vv.config.PLATFORM.type === 2){
            wx.hideLoading();
        }
    },

    btnEvent:function(){
        //mid
        var btnJoinCoin= this.cc_midNode.getChildByName("btnJoinCoin");
        var btnAdvLinShi= this.cc_midNode.getChildByName("btnAdvLinShi");
        cc.vv.utils.addClickEvent(btnJoinCoin, this.node, 'HallNew', 'onClickBtnJoinCoin');
        cc.vv.utils.addClickEvent(btnAdvLinShi, this.node, 'HallNew', 'onClickBtnChooseRule');
        //top
        var moreGame= this.cc_topNode.getChildByName("btnMoreGame");
        cc.vv.utils.addClickEvent(moreGame, this.node, 'HallNew', 'onClickBtnMoreGame');
        //left
        var btnFreeGold= this.leftNode.getChildByName("btnFreeGold");
        var btnWheel= this.leftNode.getChildByName("btnWheel");
        var btnBag= this.leftNode.getChildByName("btnBag");
        cc.vv.utils.addClickEvent(btnFreeGold, this.node, 'HallNew', 'onClickBtnFreeGold');
        cc.vv.utils.addClickEvent(btnWheel, this.node, 'HallNew', 'onClickBtnWheel');
        cc.vv.utils.addClickEvent(btnBag, this.node, 'HallNew', 'onClickBtnBag');
        //lefttop
        var btnHead= this.cc_topLeftNode.getChildByName("btnHead");
        var btnVip= this.cc_topLeftNode.getChildByName("btnVip");
        cc.vv.utils.addClickEvent(btnHead, this.node, 'HallNew', 'onClickBtnHead');
        cc.vv.utils.addClickEvent(btnVip, this.node, 'HallNew', 'onClickBtnVip');
        //bottom
        var btnsNode = this.cc_botNode.getChildByName("btnsNode")
        var btnShop= btnsNode.getChildByName("btnShop");
        var btnTask= btnsNode.getChildByName("btnTask");
        var btnFeedback= btnsNode.getChildByName("btnFeedback");
        var btnInfo= btnsNode.getChildByName("btnInfo");
        var btnSetting= btnsNode.getChildByName("btnSetting");
        cc.vv.utils.addClickEvent(btnShop, this.node, 'HallNew', 'onClickBtnShop');
        cc.vv.utils.addClickEvent(btnTask, this.node, 'HallNew', 'onClickBtnTask');
        cc.vv.utils.addClickEvent(btnFeedback, this.node, 'HallNew', 'onClickBtnFeedBack');
        cc.vv.utils.addClickEvent(btnInfo, this.node, 'HallNew', 'onClickBtnInfo');
        cc.vv.utils.addClickEvent(btnSetting, this.node, 'HallNew', 'onClickBtnSetting');
    },

    mengjiaZjPush: function() {
        if (cc.vv.config.PLATFORM.type != 2 || cc.vv.platform.pack_index != 1001) {
            return;
        }
        if (!cc.cache.user.isMengjiaZjScene()) {
            return;
        }
        var isZjTimePushed = cc.sys.localStorage.getItem('mengjia_zj_time_pushed');
        var isZjLevelPushed = cc.sys.localStorage.getItem('mengjia_zj_level_pushed');
        if (!isZjTimePushed) {
            var delteTs = 15 - cc.cache.user.getTotalOnlineTime();
            if (delteTs <= 0) {
                if (cc.vv.mengjiaZjApi) {
                    cc.vv.mengjiaZjApi.rewardPush("time");
                    cc.vv.global.setLocalStorage('mengjia_zj_time_pushed', 1);
                }
            } else {
                cc.vv.global.setTimeOutFunc(this, function () {
                    var isZjTimePushed = cc.sys.localStorage.getItem('mengjia_zj_time_pushed');
                    if (!isZjTimePushed && cc.vv.mengjiaZjApi) {
                        cc.vv.mengjiaZjApi.rewardPush("time");
                        cc.vv.global.setLocalStorage('mengjia_zj_time_pushed', 1);
                    }
                }, delteTs * 1000);  
            }
        }
        if (!isZjLevelPushed) {
            var delteTs = 120 - cc.cache.user.getTotalOnlineTime();
            if (delteTs <= 0) {
                if (cc.vv.mengjiaZjApi) {
                    cc.vv.mengjiaZjApi.rewardPush("level_first");
                    cc.vv.global.setLocalStorage('mengjia_zj_level_pushed', 1);
                }
            } else {
                cc.vv.global.setTimeOutFunc(this, function () {
                    isZjLevelPushed = cc.sys.localStorage.getItem('mengjia_zj_level_pushed');
                    if (!isZjLevelPushed && cc.vv.mengjiaZjApi) {
                        cc.vv.mengjiaZjApi.rewardPush("level_first");
                        cc.vv.global.setLocalStorage('mengjia_zj_level_pushed', 1);
                    }
                }, delteTs * 1000);  
            }
        }
    },

    checkAgentPay: function() {
        if (cc.vv.config.PLATFORM.type !== 2){
            cc.trace_log("checkAgentPay platform type invalid! type:", cc.vv.config.PLATFORM.type)
            return;
        }
        if (cc.vv.utils.getSystem() != 1) { //android代充
            cc.trace_log("checkAgentPay not android! sys:", cc.vv.utils.getSystem())
            return;
        }
        if (cc.isCheckedAgentPay) {
            cc.trace_log("checkAgentPay has checked!")
            return;
        }
        if (!cc.agentPay) {
            cc.trace_log("agentPay is null!")
            return;
        }
        if (cc.agentPay.ts && Number(cc.agentPay.ts) - cc.vv.utils.getCurServerSecond() <= 0) {
            cc.trace_log("agentPay ts overdue! ts:", Number(cc.agentPay.ts), ",curSec:", cc.vv.utils.getCurServerSecond())
            cc.agentPay = null;
            return;
        }
        if (!cc.agentPay.payId) {
            cc.trace_log("agentPay payid invalid!")

            return;
        }
        var payItem = cc.vv.configuration.getPayById(cc.agentPay.payId);
        cc.vv.uqeeApi.getOrderId(payItem,function(tradeNo){
            cc.vv.uqeeApi.pay(payItem, tradeNo, cc.agentPay);
        }, cc.agentPay);

        cc.isCheckedAgentPay = true;
    },

    hideSth: function(){
        if (cc.cache.task.signGroupTpye == 1001){
            var rewardData = cc.vv.utils.toBinaryArry(cc.cache.task.signValue);
            var curWeekday = cc.vv.utils.getWeekdayNum();
            var getRewardTimes = rewardData.oneCount
            var rewardArr = rewardData.resArry
            var rewardStatus = rewardArr[curWeekday] || 0;

            this.isShow = false;
            for(var i=0;i<7;++i){
                if (i === getRewardTimes && rewardStatus === 0){
                    this.isShow = true;
                }
            }
        }
    },

    initLoading: function () {
        cc.loader.loadRes("prefabs/fab_loading",cc.Prefab,function(err,prefab){
            this.fabLoading = cc.instantiate(prefab);
            this.fabLoading.active = false;
            cc.vv.wc = this.fabLoading.getComponent('Loading');
        }.bind(this))
    },

    initAlert: function () {
        var fabAlert = cc.instantiate(this.cc_fabAlert);
        fabAlert.active = false;
    },

    initUIPrefabDefines: function() {
        this.uiPrefabNames = {};
        this.uiPrefabNames[cc.vv.constant.HALL_PREFAB.COINSROOM] = "hall_coinsroom";
        this.uiPrefabNames[cc.vv.constant.HALL_PREFAB.MAIL] = "hall_mail";
        this.uiPrefabNames[cc.vv.constant.HALL_PREFAB.RECORD] = "hall_record";
        this.uiPrefabNames[cc.vv.constant.HALL_PREFAB.RULE] = "hall_rule";
        this.uiPrefabNames[cc.vv.constant.HALL_PREFAB.SETTING] = "hall_setting";
        this.uiPrefabNames[cc.vv.constant.HALL_PREFAB.TASK] = "hall_welfare";
        this.uiPrefabNames[cc.vv.constant.HALL_PREFAB.USERINFO] = "hall_userinfo";
        this.uiPrefabNames[cc.vv.constant.HALL_PREFAB.WXSHARE] = "hall_invite";
        this.uiPrefabNames[cc.vv.constant.HALL_PREFAB.SIGN] = "hall_sign";
        this.uiPrefabNames[cc.vv.constant.HALL_PREFAB.PUBLIC] = "hall_public";
        this.uiPrefabNames[cc.vv.constant.HALL_PREFAB.SHOP] = "hall_shop";
        this.uiPrefabNames[cc.vv.constant.HALL_PREFAB.KEFU] = "hall_kefu";
        this.uiPrefabNames[cc.vv.constant.HALL_PREFAB.DUEL] = "hall_duel";
        this.uiPrefabNames[cc.vv.constant.HALL_PREFAB.VIP] = "hall_vip";
        this.uiPrefabNames[cc.vv.constant.HALL_PREFAB.ADV] = "hall_adv";
        this.uiPrefabNames[cc.vv.constant.HALL_PREFAB.MYPRO] = "hall_mypro";
        this.uiPrefabNames[cc.vv.constant.HALL_PREFAB.CHOOSE_RULE] = "hall_choose_rule";
        this.uiPrefabNames[cc.vv.constant.HALL_PREFAB.CHOOSE_PLACE_RULE] = "hall_choose_place_rule";
        this.uiPrefabNames[cc.vv.constant.HALL_PREFAB.CHOOSE_PLACE_DESC] = "hall_choose_place_desc";
        this.uiPrefabNames[cc.vv.constant.HALL_PREFAB.ADV_ALL] = "hall_adv_all";
        this.uiPrefabNames[cc.vv.constant.HALL_PREFAB.CONTACT_KEFU] = "hall_contact_kefu";
        this.uiPrefabNames[cc.vv.constant.HALL_PREFAB.WHEEL] = "hall_wheel";
        this.uiPrefabNames[cc.vv.constant.HALL_PREFAB.MATERIAL] = "hall_material_bag";
        this.uiPrefabNames[cc.vv.constant.HALL_PREFAB.FREE_GOLD] = "hall_free_gold";
        this.uiPrefabNames[cc.vv.constant.HALL_PREFAB.COMPETITION_BIG] = "hall_competition_big";
    },

    initUIPrefabs: function() {
        this.uiPrefabNodes = {};
                    
        if (cc.cache.account.inviterRoomId > 100000){
            cc.cache.account.inviterRoomId = 0;
            cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips,"房间已满或已解散！",null,false);
        }
        if (this.isShow && cc.cache.user.isFirstShow === 1){
            if (!cc.isZjj) {
            }
            cc.cache.user.isFirstShow = 0;
        }
        cc.vv.global.showHorseMessages();

        if (cc.cache.user.isFirstShow === 1){
            if (cc.cache.account.firstLogin) {
                if (cc.cache.user.getAdminSwitchVal(cc.vv.constant.ADMIN_SWITCH.CLOSE_REDBAG) <= 0) {
                    if (cc.vv.config.PLATFORM.type === 998 || cc.vv.config.PLATFORM.type === 999) {
                        //do nothing
                    } else {
                        cc.vv.global.alert("", cc.vv.lang.LANG_DESC.Welcome, function () {
                            this.openPanel(cc.vv.constant.HALL_PREFAB.CHOOSE_RULE);
                        }.bind(this));                        
                    }
                }
            } else {
                if (cc.isZjj) {
                    this.showSign = true;
                }
            }
            cc.cache.user.isFirstShow = 0;
        }
    },

    initAldHallEvent: function() {
        this.hallEvents = {};
        this.hallEvents[cc.vv.constant.HALL_PREFAB.COINSROOM] = cc.vv.lang.ALD_EVENT.HALL_GOLDROOM;
        this.hallEvents[cc.vv.constant.HALL_PREFAB.MAIL] = cc.vv.lang.ALD_EVENT.HALL_MAIL;
        this.hallEvents[cc.vv.constant.HALL_PREFAB.RECORD] = cc.vv.lang.ALD_EVENT.HALL_RECORD;
        this.hallEvents[cc.vv.constant.HALL_PREFAB.RULE] = cc.vv.lang.ALD_EVENT.HALL_RULE;
        this.hallEvents[cc.vv.constant.HALL_PREFAB.SETTING] = cc.vv.lang.ALD_EVENT.HALL_SETTING;
        this.hallEvents[cc.vv.constant.HALL_PREFAB.TASK] = cc.vv.lang.ALD_EVENT.HALL_WELFARE;
        this.hallEvents[cc.vv.constant.HALL_PREFAB.USERINFO] = cc.vv.lang.ALD_EVENT.HALL_HEAD;
        this.hallEvents[cc.vv.constant.HALL_PREFAB.WXSHARE] = cc.vv.lang.ALD_EVENT.HALL_SHARE;
        this.hallEvents[cc.vv.constant.HALL_PREFAB.SIGN] = cc.vv.lang.ALD_EVENT.HALL_SIGN;
        this.hallEvents[cc.vv.constant.HALL_PREFAB.PUBLIC] = cc.vv.lang.ALD_EVENT.HALL_FOLLOW;
        this.hallEvents[cc.vv.constant.HALL_PREFAB.SHOP] = cc.vv.lang.ALD_EVENT.HALL_STORE;
        this.hallEvents[cc.vv.constant.HALL_PREFAB.KEFU] = cc.vv.lang.ALD_EVENT.HALL_FOLLOW;
        this.hallEvents[cc.vv.constant.HALL_PREFAB.DUEL] = cc.vv.lang.ALD_EVENT.HALL_DUEL;
        this.hallEvents[cc.vv.constant.HALL_PREFAB.VIP] = cc.vv.lang.ALD_EVENT.HALL_VIP;
        this.hallEvents[cc.vv.constant.HALL_PREFAB.ADV] = cc.vv.lang.ALD_EVENT.HALL_ADV;
        this.hallEvents[cc.vv.constant.HALL_PREFAB.MYPRO] = cc.vv.lang.ALD_EVENT.HALL_MYPRO;
        this.hallEvents[cc.vv.constant.HALL_PREFAB.CHOOSE_RULE] = cc.vv.lang.ALD_EVENT.HALL_CHOOSE_RULE;
        this.hallEvents[cc.vv.constant.HALL_PREFAB.CHOOSE_PLACE_RULE] = cc.vv.lang.ALD_EVENT.HALL_CHOOSE_PLACE_RULE;
        this.hallEvents[cc.vv.constant.HALL_PREFAB.CHOOSE_PLACE_DESC] = cc.vv.lang.ALD_EVENT.HALL_CHOOSE_PLACE_DESC;
        this.hallEvents[cc.vv.constant.HALL_PREFAB.ADV_ALL] = cc.vv.lang.ALD_EVENT.HALL_ADV_ALL;
        this.hallEvents[cc.vv.constant.HALL_PREFAB.CONTACT_KEFU] = cc.vv.lang.ALD_EVENT.HALL_CONTACT_KEFU;
        this.hallEvents[cc.vv.constant.HALL_PREFAB.WHEEL] = cc.vv.lang.ALD_EVENT.HALL_WHEEL;
        this.hallEvents[cc.vv.constant.HALL_PREFAB.MATERIAL] = cc.vv.lang.ALD_EVENT.HALL_MATERIAL;
        this.hallEvents[cc.vv.constant.HALL_PREFAB.FREE_GOLD] = cc.vv.lang.ALD_EVENT.HALL_FREE_GOLD;
        this.hallEvents[cc.vv.constant.HALL_PREFAB.COMPETITION_BIG] = cc.vv.lang.ALD_EVENT.HALL_COMPETITION_BIG;
    },

    initPanels: function () {
        if (cc.vv.global.showType === 1) {
            this.openPanel(cc.vv.constant.HALL_PREFAB.SHOP,null,null,true);
        }
        if (cc.vv.global.showType === 2) {
            this.openPanel(cc.vv.constant.HALL_PREFAB.COMPETITION);
        }
        if (cc.vv.global.showType === 3) {
            this.openPanel(cc.vv.constant.HALL_PREFAB.COMPETITION);
        } else if (cc.vv.global.showType === 4) {
            this.openPanel(cc.vv.constant.HALL_PREFAB.RECORD);
        }
        if (cc.vv.global.showType === 5) {
            cc.vv.global.emit("OpenGoldPanel", true);
        }

        cc.vv.global.showType = 0;
    },

    initGoodsDetail: function (object) {

    },

    initInfo: function () {
        var nameNode = this.cc_topLeftNode.getChildByName('nameNode');
        var txtName = nameNode.getChildByName('nameLabel').getComponent(cc.Label);
        var txtId = nameNode.getChildByName('idLabel').getComponent(cc.Label);
        txtName.string = cc.cache.user.roleName ? cc.cache.user.roleName : 0;
        txtId.string = '[ID:' + cc.cache.account.uid + ']';

        this.updateVip();
        this.refreshInfo();
    },

    updateVip:function(){
        var label = this.cc_topLeftNode.getChildByName("btnVip").getChildByName("Label");
        label.getComponent(cc.Label).string = "V" + cc.cache.user.vipLevel;
    },

    refreshInfo: function () {
        var gold = cc.cache.user.gold;

        var coinNode = this.cc_topNode.getChildByName('coinNode');
        var txtDiamond = coinNode.getChildByName('diamond').getChildByName('coinLabel').getComponent(cc.Label);
        var txtGold = coinNode.getChildByName('gold').getChildByName('coinLabel').getComponent(cc.Label);
        var coins = cc.vv.global.handleCoins(gold);
        txtGold.string = coins;
        txtDiamond.string = cc.cache.user.diamond;

        var curPartStar = cc.vv.lang.CurPartStar(cc.cache.user.getStar());
        var partZoneStar = cc.vv.lang.PartZoneStar(cc.cache.user.getStar());
        this.updateStarLayer(partZoneStar, curPartStar);

        if (cc.cache.account.headImg != "") {
            cc.trace_log("weixin head init! headImg:", cc.cache.account.headImg);
            cc.vv.global.loadWeixinHeadFrame(this.cc_topLeftNode.getChildByName("btnHead").getComponent(cc.Sprite), cc.cache.account.headImg)
        }
    },

    updateStarLayer: function(zoneStar, curStar) {
        if (zoneStar < 3 || zoneStar > 5) {
            return;
        }
    },

    initAdvertCD: function() {
        var lastGetTime = cc.sys.localStorage.getItem(cc.cache.user.loginName+"ADVERT_REWARD_CD")
        var curTime = Math.ceil(new Date().getTime()/1000);
        cc.cache.user.adRewardsCDTimes = Math.max(0,cc.vv.config.ADVER_REARDS_CD-(curTime-lastGetTime));
    },

    showGoldRelive: function() {
        if (!cc.cache.user.goldRelive) {
            return
        }
        var asynId =  cc.vv.global.setTimeOutFunc(this, function () {
            var rwds = cc.cache.user.goldRelive[0];
            if (rwds && rwds.length > 0) {
                var rwd = rwds[0];
                var vipInfo = cc.vv.configuration.getVipInfo(cc.cache.user.getVipLevel());
                if (vipInfo && Number(vipInfo["_recoverGoldCoef"]) > 1) {
                    var coef = Number(vipInfo["_recoverGoldCoef"]);
                    var gold = Math.floor(rwd.nums * (coef - 1))
                    if (gold > 0){
                        var extraShareInfo = {};
                        extraShareInfo.shareType = cc.vv.constant.SHARE_IN.RELIVE;
                        extraShareInfo.shareGold = gold;
                        cc.vv.global.openGoodsDetail(rwds, cc.vv.lang.LANG_DESC.WelcomeBack, extraShareInfo);
                        return;
                    }
                }
                cc.vv.global.openGoodsDetail(rwds, cc.vv.lang.LANG_DESC.WelcomeBack);
            }
        }, 1000);
    },

    showWxMyProGold: function() {
        if (!cc.cache.user.myproRewards) {
            return
        }
        var asynId = cc.vv.global.setTimeOutFunc(this, function () {
            var rwds = cc.cache.user.myproRewards;
            cc.vv.global.openGoodsDetail(rwds, cc.vv.lang.LANG_DESC.WelcomeMyPro);
            cc.cache.user.myproRewards = null;
        }, 1500);
    },

    initEventHandlers: function () {
        var self = this;

        this.node.on("updateMainSign",function(data){
            if (!cc.isZjj && !this.showWheel) {
                if (cc.cache.user.getAdminSwitchVal(cc.vv.constant.ADMIN_SWITCH.CLOSE_REDBAG) != 0){
                    return;
                }
                this.showSign = true;
                console.log("cc.cache.user.firstLog========",cc.cache.user.firstLog);
                if (!cc.cache.task.isDailyTaskDrawn()){
                    if (cc.isNewer && cc.cache.user.totalOnlineTime < 100) {
                    } else {
                        this.onClickSignRedbag();                
                    }
                }else{
                    var times = 5 - cc.cache.user.getTimesField(cc.vv.constant.TF_DAILY_TYPE.TF_WHEEL);
                    if (times > 0) {
                        this.showWheel = true;
                        this.openPanel(cc.vv.constant.HALL_PREFAB.WHEEL);
                    }
                }
            }
        }.bind(this));

        this.node.on('update_coins', function () {
            self.refreshInfo();
        });

        this.node.on('update_vip', function () {
            self.refreshInfo();
            self.updateVip();
        });

        this.node.on("OnGoodsDetail", function (data) {
            self.initGoodsDetail(data.detail);
        });

        this.node.on("OnShowGoldRoomView", function (data) {
            data = data.detail;
            var id = data.id;
            if (cc.vv.utils.getSystem() == 2 && id === cc.vv.constant.SHOP_TYPE.DIAMOND){
                self.openPanel(cc.vv.constant.HALL_PREFAB.SHOP, false, function() {
                    self.uiPrefabNodes[cc.vv.constant.HALL_PREFAB.SHOP].getComponent("Shop").showItem(id); 
                },true);
            } else if (cc.cache.user.getAdminSwitchVal(cc.vv.constant.ADMIN_SWITCH.CLOSE_PAY) > 0 &&
                id === cc.vv.constant.SHOP_TYPE.DIAMOND) {
                cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips,cc.vv.lang.LANG_DESC.NotSupportPay,null,false);
                this.mask.active = false;
            } else {
                self.openPanel(cc.vv.constant.HALL_PREFAB.SHOP, false, function() {
                    self.uiPrefabNodes[cc.vv.constant.HALL_PREFAB.SHOP].getComponent("Shop").showItem(id); 
                },true);
            }
        });

        this.node.on("OnShowTaskView", function (data) {
            if (data.detail) {
                self.openPanel(cc.vv.constant.HALL_PREFAB.TASK);
            } else {
                if (self.uiPrefabNodes[cc.vv.constant.HALL_PREFAB.TASK]) {
                    self.uiPrefabNodes[cc.vv.constant.HALL_PREFAB.TASK].active = false;
                }
            }
        });

        this.node.on("OnShowChooseRule", function (data) {
            cc.trace_log("OnShowChooseRule from:", self.chooseRuleFrom)
            if (data && data.detail) {
                self.chooseRuleFrom = data.detail.from;                
            }
            self.openPanel(cc.vv.constant.HALL_PREFAB.CHOOSE_RULE);
        });

        this.node.on("OnShowCreateRoom", function (data) {
            self.onClickBtnCreateRoom();
        });

        this.node.on("OnShowRecord", function (data) {
            self.onClickBtnRecord();
        });

        this.node.on("OnShowContactKefu", function (data) {
            self.onClickBtnContactKefu();
        });

        this.node.on("OnShowAdvert", function (data) {
            self.onClickAdvertEvent();
        });

        this.node.on("OnShowMypro", function (data) {
            self.onClickBtnMypro();
        });

        this.node.on("OnShowWxShare", function (data) {
            self.onClickBtnShare();
        });

        this.node.on("hint_dot_update", function (data) {
            var hintType = data.detail.hintType;
            var hintNums = cc.cache.gamedata.getHintDots(hintType);
            if (hintNums == null) {
                return;
            }
            if (hintType == cc.vv.constant.HINT_DOT_TYPE.MAIL) {
                var btnInfo = self.cc_botNode.getChildByName("btnsNode").getChildByName("btnInfo");
                if (hintNums > 0) {
                    btnInfo.getChildByName('redPoint').active = true;
                } else {
                    btnInfo.getChildByName('redPoint').active = false;
                }
            } else if (hintType == cc.vv.constant.HINT_DOT_TYPE.SHARE_DAILY) {
                // var btnShare = self.cc_botNode.getChildByName("btnsNode").getChildByName("btnShare");
                // if (hintNums > 0) {
                //     btnShare.getChildByName('redPoint').active = true;
                // } else {
                //     btnShare.getChildByName('redPoint').active = false;
                // }
            } else if (hintType >= cc.vv.constant.HINT_DOT_TYPE.WELFARE_SHARE && hintType <= cc.vv.constant.HINT_DOT_TYPE.WELFARE_TASK_DAY) {
                var hintNums1 = cc.cache.gamedata.getHintDots(cc.vv.constant.HINT_DOT_TYPE.WELFARE_SHARE);
                var hintNums2 = cc.cache.gamedata.getHintDots(cc.vv.constant.HINT_DOT_TYPE.WELFARE_TASK_DAY);
                var hintNums3 = cc.cache.gamedata.getHintDots(cc.vv.constant.HINT_DOT_TYPE.WELFARE_TASK_MAIN);
                var btnTask = self.cc_botNode.getChildByName("btnsNode").getChildByName("btnTask");
                if ((hintNums1 && hintNums1 > 0) || (hintNums2 && hintNums2 > 0) || (hintNums3 && hintNums3 > 0)) {
                    btnTask.getChildByName('redPoint').active = true;
                } else {
                    btnTask.getChildByName('redPoint').active = false;
                }
            } else if (hintType >= cc.vv.constant.HINT_DOT_TYPE.BUDDY_MSG && hintType <= cc.vv.constant.HINT_DOT_TYPE.BUDDY_APPLY) {
                var hintNums1 = cc.cache.gamedata.getHintDots(cc.vv.constant.HINT_DOT_TYPE.BUDDY_MSG);
                var hintNums2 = cc.cache.gamedata.getHintDots(cc.vv.constant.HINT_DOT_TYPE.BUDDY_APPLY);
                var btnBuddy = self.cc_botNode.getChildByName("btnsNode").getChildByName("btnFriends");
                if ((hintNums1 && hintNums1 > 0) || (hintNums2 && hintNums2 > 0)) {
                    btnBuddy.getChildByName('redPoint').active = true;
                } else {
                    btnBuddy.getChildByName('redPoint').active = false;
                }                
            } else if (hintType >= cc.vv.constant.HINT_DOT_TYPE.CIRCLE_APPLY && hintType <= cc.vv.constant.HINT_DOT_TYPE.CIRCLE_APPLY_CARD) {
                var hintNums1 = cc.cache.gamedata.getHintDots(cc.vv.constant.HINT_DOT_TYPE.CIRCLE_APPLY);
                var hintNums2 = cc.cache.gamedata.getHintDots(cc.vv.constant.HINT_DOT_TYPE.CIRCLE_APPLY_CARD);
                var btnCircle = self.cc_midNode.getChildByName("btnCircle");
                if ((hintNums1 && hintNums1 > 0) || (hintNums2 && hintNums2 > 0)) {
                    btnCircle.getChildByName('redPoint').active = true;
                } else {
                    btnCircle.getChildByName('redPoint').active = false;
                }                
            }
        });

        this.node.on("onUpdateActivityRedPoint", function (data) {
        });

        this.node.on("onOpenPanel", function (data) {
            var id = data.detail;
            if (self.uiPrefabNodes[cc.vv.constant.HALL_PREFAB.TASK] && id != 8014) {
                self.uiPrefabNodes[cc.vv.constant.HALL_PREFAB.TASK].active = false;
            }

            cc.vv.global.showType = 6;
            if (id === 8001 || id === 1) {
                self.node.emit("OpenGoldPanel", true);
            } else if (id === 8002) {
                // self.openPanel(cc.vv.constant.HALL_PREFAB.CREATEROOM);
                self.openPanel(cc.vv.constant.HALL_PREFAB.COINSROOM);
            } else if (id === 8003) {
                // self.openPanel(cc.vv.constant.HALL_PREFAB.CREATEROOM);
                self.openPanel(cc.vv.constant.HALL_PREFAB.COINSROOM);
            } else if (id === 8004 || id === 3) {
                if (cc.vv.utils.getSystem() == 2){// && id === cc.vv.constant.SHOP_TYPE.DIAMOND){
                    // cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips,cc.vv.lang.LANG_DESC.IosNotSupport,null,false);
                    // self.mask.active = false;
                    self.openPanel(cc.vv.constant.HALL_PREFAB.SHOP, false, function() {
                        self.uiPrefabNodes[cc.vv.constant.HALL_PREFAB.SHOP].getComponent("Shop").showItem(cc.vv.constant.SHOP_TYPE.DIAMOND);
                    },true);
                }else if (cc.cache.user.getAdminSwitchVal(cc.vv.constant.ADMIN_SWITCH.CLOSE_PAY) > 0) {
                    cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips,cc.vv.lang.LANG_DESC.NotSupportPay,null,false);
                    self.mask.active = false;
                }else{
                    self.openPanel(cc.vv.constant.HALL_PREFAB.SHOP, false, function() {
                        self.uiPrefabNodes[cc.vv.constant.HALL_PREFAB.SHOP].getComponent("Shop").showItem(cc.vv.constant.SHOP_TYPE.DIAMOND);
                    },true);
                }
            } else if ((id >= 8005 && id <= 8013) || id === 2) {
                self.openPanel(cc.vv.constant.HALL_PREFAB.WXSHARE);
            } else if (id == 8014) {
                cc.vv.wxApi.wxShare(cc.vv.constant.SHARE_DEST.GROUP); 
            }
        });

        this.node.on("OpenGoldPanel", function (data) {
            var active = data.detail;
            if (data.detail) {
                self.openPanel(cc.vv.constant.HALL_PREFAB.COINSROOM);
            } else {
                if (self.uiPrefabNodes[cc.vv.constant.HALL_PREFAB.COINSROOM]) {
                    self.uiPrefabNodes[cc.vv.constant.HALL_PREFAB.COINSROOM].active = false;
                }
                self.openCompetition(!active);
            }
        });

        this.node.on("OpenCompetitionBig", function (data) {
            if (data.detail) {
                self.openPanel(cc.vv.constant.HALL_PREFAB.COMPETITION_BIG);
            } else {
                if (self.uiPrefabNodes[cc.vv.constant.HALL_PREFAB.COMPETITION_BIG]) {
                    self.uiPrefabNodes[cc.vv.constant.HALL_PREFAB.COMPETITION_BIG].active = false;
                }
            }
        });

        this.node.on("OpenShopPanel", function (data) {
            if (cc.vv.utils.getSystem() == 2 || cc.cache.user.getAdminSwitchVal(cc.vv.constant.ADMIN_SWITCH.CLOSE_PAY) > 0){
                this.openPanel(cc.vv.constant.HALL_PREFAB.SHOP, false, function() {
                    this.uiPrefabNodes[cc.vv.constant.HALL_PREFAB.SHOP].getComponent("Shop").showItem(cc.vv.constant.SHOP_TYPE.GOLD);
                }.bind(this),true);
            }else{
                this.openPanel(cc.vv.constant.HALL_PREFAB.SHOP, false, function() {
                    this.uiPrefabNodes[cc.vv.constant.HALL_PREFAB.SHOP].getComponent("Shop").showItem(cc.vv.constant.SHOP_TYPE.DIAMOND);
                }.bind(this),true);
            }
        }.bind(this));

        this.node.on("OpenCompetitionPanel", function (data) {
            self.openPanel(cc.vv.constant.HALL_PREFAB.COMPETITION);
            // self.openCompetition(false);
        });

        this.node.on("showPanelNode", function (data) {
            self.mask.active = data.detail;
        });

        this.node.on("showRulePanel", function (data) {
            self.openPanel(cc.vv.constant.HALL_PREFAB.RULE,null,function(){
                // self.uiPrefabNodes[cc.vv.constant.HALL_PREFAB.RULE].getComponent("Rule").show(data.detail);
            },true);
        });

        this.node.on('gold_match_close', function (data) {
            self.openCompetition(data.detail);
        });

        this.node.on('update_advert_status', function (data) {
            // self.refreshAdvert();
        });

        this.node.on('update_main_switch', function (data) {
            self.hideSth();

            if (cc.vv.config.PLATFORM.type === 0 || cc.vv.config.PLATFORM.type === 2) {
                if (cc.cache.user.getTimesField(cc.vv.constant.TF_DAILY_TYPE.TF_CONTACT_KEFU) > 0) {
                    cc.trace_log("************btnPublic show")
                } else {
                    cc.trace_log("************btnPublic hide")
                }
            }
        });

        this.node.on('hide_contact_kefu', function (data) {
            // var btnContactKefu = self.leftNode.getChildByName("btnContactKefu");
            // var btnPublic = self.leftNode.getChildByName("btnPublic");
            // btnContactKefu.active = false;
            // btnPublic.active = true;
        });

        this.node.on('sync_wechat_info', function (data) {
            if (cc.cache.account.headImg != "") {
                cc.trace_log("weixin head init! headImg:", cc.cache.account.headImg);
                cc.vv.global.loadWeixinHeadFrame(this.cc_topLeftNode.getChildByName("btnHead").getComponent(cc.Sprite), cc.cache.account.headImg)

                var nameNode = this.cc_topLeftNode.getChildByName('nameNode');
                var txtName = nameNode.getChildByName('nameLabel').getComponent(cc.Label);
                txtName.string = cc.cache.user.roleName;
            }
        }.bind(this));

        this.node.on('hall_open_wheel', function () {
            this.openPanel(cc.vv.constant.HALL_PREFAB.WHEEL);
        }.bind(this));
    },
    addChatMessage: function (obejct) {
        // this.cc_chatMessageLabel.string = ojbect.name + ":" + object.message;
    },

    initHintDots: function () {
        var hintNums = cc.cache.gamedata.getHintDots(cc.vv.constant.HINT_DOT_TYPE.MAIL);
        var btnInfo = this.cc_botNode.getChildByName("btnsNode").getChildByName("btnInfo");
        if (hintNums > 0) {
            btnInfo.getChildByName('redPoint').active = true;
        } else {
            btnInfo.getChildByName('redPoint').active = false;
        }

        hintNums = cc.cache.gamedata.getHintDots(cc.vv.constant.HINT_DOT_TYPE.SHARE_DAILY);

        var hintNums1 = cc.cache.gamedata.getHintDots(cc.vv.constant.HINT_DOT_TYPE.WELFARE_SHARE);
        var hintNums2 = cc.cache.gamedata.getHintDots(cc.vv.constant.HINT_DOT_TYPE.WELFARE_TASK_DAY);
        var hintNums3 = cc.cache.gamedata.getHintDots(cc.vv.constant.HINT_DOT_TYPE.WELFARE_TASK_MAIN);
        var btnTask = this.cc_botNode.getChildByName("btnsNode").getChildByName("btnTask");
        if ((hintNums1 && hintNums1 > 0) || (hintNums2 && hintNums2 > 0) || (hintNums3 && hintNums3 > 0)) {
            btnTask.getChildByName('redPoint').active = true;
        } else {
            btnTask.getChildByName('redPoint').active = false;
        }

        hintNums1 = cc.cache.gamedata.getHintDots(cc.vv.constant.HINT_DOT_TYPE.BUDDY_MSG);
        hintNums2 = cc.cache.gamedata.getHintDots(cc.vv.constant.HINT_DOT_TYPE.BUDDY_APPLY);
        var btnBuddy = this.cc_botNode.getChildByName("btnsNode").getChildByName("btnFriends");
        if ((hintNums1 && hintNums1 > 0) || (hintNums2 && hintNums2 > 0)) {
            btnBuddy.getChildByName('redPoint').active = true;
        } else {
            btnBuddy.getChildByName('redPoint').active = false;
        }                

        hintNums1 = cc.cache.gamedata.getHintDots(cc.vv.constant.HINT_DOT_TYPE.CIRCLE_APPLY);
        hintNums2 = cc.cache.gamedata.getHintDots(cc.vv.constant.HINT_DOT_TYPE.CIRCLE_APPLY_CARD);
        var btnCircle = this.cc_midNode.getChildByName("btnCircle");
        if ((hintNums1 && hintNums1 > 0) || (hintNums2 && hintNums2 > 0)) {
            btnCircle.getChildByName('redPoint').active = true;
        } else {
            btnCircle.getChildByName('redPoint').active = false;
        }
    },

    /***************************mid node buttons event***************************/
    onClickBtnCreateRoom: function() {
        if (cc.cache.user.getAdminSwitchVal(cc.vv.constant.ADMIN_SWITCH.CLOSE_REDBAG) > 0) {   //关闭
            cc.vv.global.quickTip(cc.vv.lang.LANG_DESC.NotOpenPleaseWait);
            return
        }

        if (!cc.vv.global.judgeRoomState()){
            return;
        }
        if (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.NORMAL ||
            cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.DUEL) {
            if (cc.cache.user.isRoomMahjong()) {
                cc.vv.global.switchGameScene();
            }
            return;
        }
        if (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.GOLD) {
            cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_DESC.CoinNow, function () {
                // cc.vv.protobuf.sendMessage(1101, { type: 1101, room_Type: 0, room_Id: cc.cache.user.roomId });//进入房间
            }, true);
            return;
        }
        if (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.PLACE) {
            cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_DESC.PlaceNow, function () {
                // cc.vv.protobuf.sendMessage(1101, { type: 1101, room_Type: 0, room_Id: cc.cache.user.roomId });//进入房间
            }, true);
            return;
        }
        if (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.MATCH ||
            cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.MATCH_REDBAG) {
            cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_DESC.ExitCompetition, null, false);
            return;
        }
        if (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.GRANDPRIX) {
            cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_DESC.ExitGrandprix, null, false);
            return;
        }

        // this.openPanel(cc.vv.constant.HALL_PREFAB.CREATEROOM);
    },

    onClickBtnJoinCoin: function() {
        if (!cc.vv.global.judgeRoomState()){
            return;
        }
        cc.vv.global.emit("OpenGoldPanel", true);
    },

    openCompetition: function(status,coinNodeStatus) {
        this.cc_botNode.active = status;
        this.cc_midNode.active = status;
        // this.cc_rightNode.active = status;
        this.leftNode.active = status;

        this.cc_topNode.zIndex = status ? 0 : this.cur_zIndex+1;

        this.cc_topLeftNode.active = status;

        var btnMoreGame = this.cc_topNode.getChildByName('btnMoreGame');
        btnMoreGame.active = status;

        this.mask.active = false;
    },

    onClickBtnVip: function () {
        this.openPanel(cc.vv.constant.HALL_PREFAB.VIP);
    },
    /***************************bottom node buttons event***************************/
    onClickBtnShop: function (event, customEventData) {
        var name = event.target.name;
        if (name == "btnShop"){
            if (cc.vv.utils.getSystem() == 2 || cc.cache.user.getAdminSwitchVal(cc.vv.constant.ADMIN_SWITCH.CLOSE_PAY) > 0){
                this.openPanel(cc.vv.constant.HALL_PREFAB.SHOP, false, function() {
                    this.uiPrefabNodes[cc.vv.constant.HALL_PREFAB.SHOP].getComponent("Shop").showItem(cc.vv.constant.SHOP_TYPE.GOLD);
                }.bind(this),true);
            }else{
                this.openPanel(cc.vv.constant.HALL_PREFAB.SHOP, false, function() {
                    this.uiPrefabNodes[cc.vv.constant.HALL_PREFAB.SHOP].getComponent("Shop").showItem(cc.vv.constant.SHOP_TYPE.DIAMOND);
                }.bind(this),true);
            }
        }else{
            if (cc.vv.utils.getSystem() == 2 && ~~customEventData === cc.vv.constant.SHOP_TYPE.DIAMOND){
                // cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips,cc.vv.lang.LANG_DESC.IosNotSupport,null,false);
                // this.mask.active = false;
                this.openPanel(cc.vv.constant.HALL_PREFAB.SHOP, false, function() {
                    this.uiPrefabNodes[cc.vv.constant.HALL_PREFAB.SHOP].getComponent("Shop").showItem(~~customEventData);
                }.bind(this),true);
            } else if (cc.cache.user.getAdminSwitchVal(cc.vv.constant.ADMIN_SWITCH.CLOSE_PAY) > 0 &&
                ~~customEventData === cc.vv.constant.SHOP_TYPE.DIAMOND) {
                cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips,cc.vv.lang.LANG_DESC.NotSupportPay,null,false);
                this.mask.active = false;
            }else{
                this.openPanel(cc.vv.constant.HALL_PREFAB.SHOP, false, function() {
                    this.uiPrefabNodes[cc.vv.constant.HALL_PREFAB.SHOP].getComponent("Shop").showItem(~~customEventData);
                }.bind(this),true);
            }
        }
    }, 

    onClickBtnInfo: function () {
        this.openPanel(cc.vv.constant.HALL_PREFAB.MAIL);
    },

    onClickBtnWheel: function () {
        this.openPanel(cc.vv.constant.HALL_PREFAB.WHEEL);
    }, 

    onClickBtnTask: function () {
        this.openPanel(cc.vv.constant.HALL_PREFAB.TASK);
    }, 

    onClickBtnShare: function () {
        this.openPanel(cc.vv.constant.HALL_PREFAB.WXSHARE);
    }, 

    onClickBtnContactKefu: function () {
        this.openPanel(cc.vv.constant.HALL_PREFAB.CONTACT_KEFU);
    },

    onClickBtnFeedBack: function () {
        if (cc.vv.config.PLATFORM.type === 2) {
            if (cc.cache.user.getAdminSwitchVal(cc.vv.constant.ADMIN_SWITCH.OPEN_KEFU) > 0) {
                cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.HALL_KEFU);

                var self = this;    
                var obj={
                    sessionFrom:"btn",
                    showMessageCard:true,
                    sendMessageTitle:cc.vv.lang.LANG_DESC.GuanZhuGongZongHao,
                    sendMessagePath:"pages/index/index?adsid=173",
                    sendMessageImg:"https://apis.5151.com/Public/h5/images/tzmj/xcxkfgz.jpg",
                    success(res) {
                        cc.trace_log("onClickBtnFeedBack:", res);
                        if (res.path && res.path != "") {
                            self.openPanel(cc.vv.constant.HALL_PREFAB.KEFU);                            
                        }
                    },
                }
                wx.openCustomerServiceConversation(obj);
                return;
            }
        }

        this.openPanel(cc.vv.constant.HALL_PREFAB.KEFU);            
    }, 

    onClickBtnMypro: function () {
        this.openPanel(cc.vv.constant.HALL_PREFAB.MYPRO);
    }, 

    onClickBtnRecord: function () {
        this.openPanel(cc.vv.constant.HALL_PREFAB.RECORD);
    }, 

    onClickBtnSetting: function () {
        this.openPanel(cc.vv.constant.HALL_PREFAB.SETTING);
    }, 
    /***************************top node buttons event***************************/
    onClickBtnHead: function () {
        if (cc.vv.config.PLATFORM.type === 2 && !cc.vv.wxApi.wxAuthed) {
            cc.vv.global.openWechatAuth();
            return;
        }

        this.openPanel(cc.vv.constant.HALL_PREFAB.USERINFO,null,null,true);

        cc.vv.wxApi.showBanner(null, 1);
    },

    onClickBtnBag: function () {
        this.openPanel(cc.vv.constant.HALL_PREFAB.MATERIAL);
    },

    onClickBtnMoreGame: function () {
        this.openPanel(cc.vv.constant.HALL_PREFAB.ADV_ALL);
    },

    onClickBtnChooseRule: function () {
        this.openPanel(cc.vv.constant.HALL_PREFAB.CHOOSE_RULE);
    },

    onClickBtnCoinAdd: function (event, customEventData) {
        if (~~customEventData === 3){
            cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips,cc.vv.lang.LANG_DESC.KanGuangGao,null,false);
            return;
        }
        if (cc.vv.utils.getSystem() == 2 && ~~customEventData === cc.vv.constant.SHOP_TYPE.DIAMOND){
            this.openPanel(cc.vv.constant.HALL_PREFAB.SHOP, false, function() {
                this.uiPrefabNodes[cc.vv.constant.HALL_PREFAB.SHOP].getComponent("Shop").showItem(~~customEventData);
            }.bind(this),true);
        } else if (cc.cache.user.getAdminSwitchVal(cc.vv.constant.ADMIN_SWITCH.CLOSE_PAY) > 0 &&
            ~~customEventData === cc.vv.constant.SHOP_TYPE.DIAMOND) {
            cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips,cc.vv.lang.LANG_DESC.NotSupportPay,null,false);
            this.mask.active = false;
        }else{
            if (~~customEventData === cc.vv.constant.SHOP_TYPE.DIAMOND) {
                cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.HALL_ADD_DIAMOND);
            } else {
                cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.HALL_ADD_GOLD);
            }

            this.openPanel(cc.vv.constant.HALL_PREFAB.SHOP, false, function() {
                this.uiPrefabNodes[cc.vv.constant.HALL_PREFAB.SHOP].getComponent("Shop").showItem(~~customEventData);
            }.bind(this),true);
        }
    },

    onClickAdvertEvent: function (event) {
        if(cc.vv.config.PLATFORM.type === 2){
            if(cc.cache.user.getTimesField(cc.vv.constant.TF_DAILY_TYPE.TF_AD_TIMES)  >= 5){
                cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, "今日领奖次数已达上线!",null,false);
            }else{
                cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.HALL_ADV_VEDIO);
                cc.vv.wxApi.showVideo(function(){
                    cc.vv.controller.C2S_MainAdReward();
                });
            }
        }else{
            ////正式用
            // cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, "只有小游戏才可以看广告领奖励哦!",null,false);
            ////测试用
            cc.vv.controller.C2S_MainAdReward();
        }
    },


    onClickSignRedbag: function (event) {
        if (cc.cache.user.getAdminSwitchVal(cc.vv.constant.ADMIN_SWITCH.CLOSE_REDBAG) == 0){
            this.openPanel(cc.vv.constant.HALL_PREFAB.SIGN);
        }
    },

    onClickBtnFreeGold: function (event) {
        this.openPanel(cc.vv.constant.HALL_PREFAB.FREE_GOLD);
    },

    /***************************node buttons event finish***************************/

    closeAllPanels: function () {
        this.cur_zIndex = 0;
        Object.keys(this.uiPrefabNodes).forEach(function (key) {
            if (key != cc.vv.constant.HALL_PREFAB.COMPETITION || key != cc.vv.constant.HALL_PREFAB.COINSROOM){
                this.uiPrefabNodes[key].active = false;
            }
        }.bind(this));
        this.mask.active = false;
        this.mask.zIndex = this.cur_zIndex-1;
    },

    openPanel: function (prefabId, noAnimation, callback, notCloseAll) {
        if (!notCloseAll){
            this.closeAllPanels();
        }

        if (this.uiPrefabNodes[prefabId]) {
            this.uiPrefabNodes[prefabId].active = true;
            if (!noAnimation ) {
                cc.vv.utils.openAnimation(this.uiPrefabNodes[prefabId]);
            }

            ++this.cur_zIndex;
            this.uiPrefabNodes[prefabId].zIndex = this.cur_zIndex;
            this.configOpenPanel(prefabId, this.uiPrefabNodes[prefabId]);

            callback && callback();
            
            this.mask.active = true;
            this.mask.zIndex = this.cur_zIndex-1;                    
        } else {
            var prefabName = this.uiPrefabNames[prefabId];
            
            cc.trace_log("open panel:", prefabName)
            cc.vv.global.loading(cc.vv.lang.LANG_DESC.OpenPanel);
            cc.loader.loadRes("prefabs/" + prefabName, function (err, prefab) {
                var node = cc.instantiate(prefab);
                cc.trace_log("hide wc")
                cc.vv.global.loadingHide();

                this.uiPrefabNodes[prefabId] = node;
                this.uiPrefabNodes[prefabId].active = true;
                if (!noAnimation) {
                    cc.vv.utils.openAnimation(this.uiPrefabNodes[prefabId]);
                }
                ++this.cur_zIndex;
                this.uiPrefabNodes[prefabId].zIndex = this.cur_zIndex;
                this.node.addChild(this.uiPrefabNodes[prefabId]);
                this.configOpenPanel(prefabId, this.uiPrefabNodes[prefabId]);

                callback && callback();
        
                this.mask.active = true;
                this.mask.zIndex = this.cur_zIndex;                    
            }.bind(this));
        }
    },

    configOpenPanel: function (prefabId, node) {
        if (prefabId === cc.vv.constant.HALL_PREFAB.SETTING) {
            var setting = node.getComponent('Setting');
            setting.activeWithBtn('logout');
        } else if (prefabId == cc.vv.constant.HALL_PREFAB.RULE) {
        } else if (prefabId == cc.vv.constant.HALL_PREFAB.CIRCLE) {
            node.getComponent("Circle").loadRooms();            
        } else if (prefabId == cc.vv.constant.HALL_PREFAB.COMPETITION ||
            prefabId == cc.vv.constant.HALL_PREFAB.COINSROOM) {
            this.openCompetition(false);     
        } else if (prefabId == cc.vv.constant.HALL_PREFAB.RANK) {
            this.openCompetition(false, true);
        } else if (prefabId == cc.vv.constant.HALL_PREFAB.CHOOSE_RULE) {
            if (this.chooseRuleFrom) {
                node.getComponent("ChooseRule").setFrom(this.chooseRuleFrom);   
            }
            this.chooseRuleFrom = null;
        }

        this.openPanelEvent(prefabId);
    },

    openPanelEvent: function(prefabId) {
        var eventName = this.hallEvents[prefabId];
        cc.trace_log("prefabId:", prefabId, ", eventName:", eventName)
        if (eventName) {
            cc.vv.wxApi.aldEventReport(eventName);
        }
    },

    onDisable: function () {
        cc.trace_log("onDisable hall");
        cc.vv.global.removeSceneLoading();
    },

    onDestroy: function () {
        cc.trace_log("onDestory hall")
        cc.vv.global.clearCompetitionResult();
    }
});
