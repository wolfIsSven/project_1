cc.Class({
    extends: cc.Component,

    properties: {
        _btnNode: null,
        _btnLogout: null,
        _btnExit: null,
        _btnDismiss: null,
        _btnName: null,
    },

    activeWithBtn: function (btnName,state) {
        this._btnName = btnName;
        this._showState = state;

        if(!this._btnNode){
            this._btnNode = this.node.getChildByName('btnNode');
            this._btnLogout = this._btnNode.getChildByName('btn_logout');
            this._btnExit = this._btnNode.getChildByName('btn_exit');
            this._btnDismiss = this._btnNode.getChildByName('btn_dismiss');
        }
        this._btnLogout.active = false;
        this._btnExit.active = false;
        this._btnDismiss.active = false;

        if (this._btnName == 'logout') {
            this._btnLogout.active = cc.vv.config.PLATFORM.type === 2 ? false:true;
        } else if (this._btnName == 'exit') {
            this._btnExit.active = true;
        } else if (this._btnName == 'dismiss') {
            this._btnDismiss.active = true;
        }
    },
    onBtnClicked: function (event) {
        var name = event.target.name;
        if(name === "btn_logout"){
            cc.vv.http.url = cc.vv.constants.URL;
            cc.cache.user.clear();
            cc.director.loadScene('start');
        } else if (name == 'btn_exit') {
            cc.vv.global.alert(cc.vv.lang.LANG_DESC.LevelRoomTips, cc.vv.lang.LANG_DESC.LeaveRoom, function () {
                cc.vv.controller.C2S_CommonRoomRequireExit(cc.vv.roomdata.id);
            }, true);
        } else if (name == 'btn_dismiss') {
            cc.vv.global.alert(cc.vv.lang.LANG_DESC.DissolveRoomTips, cc.vv.lang.LANG_DESC.DissolveRoom, function () {
                cc.vv.controller.C2S_CommonRoomRequireExit(cc.vv.roomdata.id);
            }, true);
        } else if(name === "YXOpen"){
            cc.vv.audioMgr.setSFXVolume(1.0);
        }else if(name === "YXClose"){
            cc.vv.audioMgr.setSFXVolume(0);
        }else if(name === "YYOpen"){
            cc.vv.audioMgr.setBGMVolume(1);
        }else if(name === "YYClose"){
            cc.vv.audioMgr.setBGMVolume(0);
        }else if(name === "FYButton"){
            this.setYuyan(0);
        }else if(name === "PTButton"){
            this.setYuyan(1);
        }else if(name === "btn_shimingrenzhen"){
            var canvas = this.node.parent;
            canvas.getChildByName("certificationNode").active = true;
        }else if(name === "btn_dingwei"){
            cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.SETTING_GEO);
            if (this._showState){
                this.node.active = false;
                cc.vv.global.emit("openLocationPanel");
            }else {
                cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips,cc.vv.lang.LANG_DESC.LocationSuccess,null,false);
            }
        }else if(name === "btn_wanfashuom"){
            cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.SETTING_RULES);
            if (this._showState){
                this.node.active = false;
                cc.vv.global.emit("openHelpPanel");
            }else {
                cc.vv.global.emit("showRulePanel",2);
            }
        }else if(name === "btn_back"){
            this.node.active = false;
            cc.vv.global.emit("showPanelNode",false);
        }
    },
    onSlided: function (slider) {
        if (slider.node.parent.name == 'yinxiao') {
            cc.vv.audioMgr.setSFXVolume(slider.progress);
        }
        else if (slider.node.parent.name == 'yinyue') {
            cc.vv.audioMgr.setBGMVolume(slider.progress);
        }
    },
    setBgm: function (isOn) {
        cc.vv.audioMgr.setBgm(isOn);

        var openBtn = this.node.getChildByName("yinyueLabel").children[0].getComponent("RadioButton");
        var closeBtn = this.node.getChildByName("yinyueLabel").children[1].getComponent("RadioButton");
        if (isOn){
            openBtn.checked = true;
            closeBtn.checked = false;
        }else {
            openBtn.checked = false;
            closeBtn.checked = true;
        }
    },
    onLoad: function () {
        if(!this._btnNode){
            this._btnNode = this.node.getChildByName('btnNode');
            this._btnLogout = this._btnNode.getChildByName('btn_logout');
            this._btnExit = this._btnNode.getChildByName('btn_exit');
            this._btnDismiss = this._btnNode.getChildByName('btn_dismiss');
        }
        this.setYuyan(cc.cache.user.yuyan);
        this.setBgm(cc.vv.audioMgr.isBgmOn());
        this.setSfx(cc.vv.audioMgr.isSfxOn());
    },
    initButtonHandler: function (btn) {
        cc.vv.utils.addClickEvent(btn, this.node, 'Setting', 'onBtnClicked');
    },
    setYuyan: function (type) {
        cc.cache.user.yuyan = type;
        cc.vv.global.setLocalStorage('yuyan', type);

        var fyBtn = this.node.getChildByName("yuyanLabel").children[0].getComponent("RadioButton");
        var pthBtn = this.node.getChildByName("yuyanLabel").children[1].getComponent("RadioButton");
        if (type === 1){
            fyBtn.checked = false;
            pthBtn.checked = true;
        }else {
            fyBtn.checked = true;
            pthBtn.checked = false;
        }
    },
    setSfx: function (isOn) {
        cc.vv.audioMgr.setSfx(isOn);

        var openBtn = this.node.getChildByName("yinxiaoLabel").children[0].getComponent("RadioButton");
        var closeBtn = this.node.getChildByName("yinxiaoLabel").children[1].getComponent("RadioButton");
        if (isOn){
            openBtn.checked = true;
            closeBtn.checked = false;
        }else {
            openBtn.checked = false;
            closeBtn.checked = true;
        }
    }




    



});
