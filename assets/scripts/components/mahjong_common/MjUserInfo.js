cc.Class({
    extends: cc.Component,
    properties: {
    },
    updateUserInfo: function (node) {
        if (!this.player) { return; }
        var _headSp = node.getChildByName('headSp');
        var _nameLabel = node.getChildByName('nameLabel').getComponent(cc.Label);//.getComponent(cc.Label);
        var _ipLabel = node.getChildByName('ipLabel').getComponent(cc.Label);
        var _idLabel = node.getChildByName('idLabel').getComponent(cc.Label);

        if (this.player.headUrl != "") {
            if (!_headSp.getComponent(cc.Sprite).nullSpriteFrame) {
                _headSp.getComponent(cc.Sprite).nullSpriteFrame = _headSp.getComponent(cc.Sprite).spriteFrame;
            }
            cc.vv.global.loadWeixinHeadFrame(_headSp.getComponent(cc.Sprite), this.player.headUrl);
        } else {
            if (_headSp.getComponent(cc.Sprite).nullSpriteFrame) {
                _headSp.getComponent(cc.Sprite).spriteFrame = _headSp.getComponent(cc.Sprite).nullSpriteFrame;
            }
        }

        _nameLabel.string = this.player.roleName;
        node.getChildByName('ipLabel').active = false;
        node.getChildByName('idLabel').active = false;
        // _idLabel.string = 'ID: ' + cc.cache.user.id;
        // _ipLabel.string = 'IP: ' + cc.cache.user.ip;
    },
    initView: function () {
        var rightNodes = this.node.getChildByName('rightNodes');
        this.nodeInfo = rightNodes.getChildByName('nodeInfo');
        this.nodeFriend = rightNodes.getChildByName('nodeFriend');
    },
    onClickPanel: function (event) {
        this.choosePanel(event.target.name);
    },
    updateGameInfo: function () {
        cc.trace_log("player:", this.player);
        var _totalRoundLabel = this.nodeInfo.getChildByName('totalRoundLabel').getChildByName('valueLabel').getComponent(cc.Label);
        var _winRateLabel = this.nodeInfo.getChildByName('winRateLabel').getChildByName('valueLabel').getComponent(cc.Label);
        var _maxContinueWinLabel = this.nodeInfo.getChildByName('maxContinueWinLabel').getChildByName('valueLabel').getComponent(cc.Label);
        var _curContinueWinLabel = this.nodeInfo.getChildByName('curContinueWinLabel').getChildByName('valueLabel').getComponent(cc.Label);

        _totalRoundLabel.string = this.player.totalRound;
        if (this.player.totalRound === 0) {
            _winRateLabel.string = "0%";
        } else {
            _winRateLabel.string = Math.floor(this.player.totalWin / this.player.totalRound * 100) + "%";
        }
        _maxContinueWinLabel.string = this.player.maxContinueWin;
        _curContinueWinLabel.string = this.player.curContinueWin;
    },
    onLoad: function () {
        this.initView();
        this.initClickEvents();

        this.nodeInfo.active = false;
        this.nodeFriend.active = false;

        this.eggIds = {
            "flower": 4,
            "god": 5,
            "coffee": 6,
            "bomb": 3,
            "egg": 1,
            "tomato": 2,
            "brick": 7,
        }
    },
    updateSignInfo: function () {
        var _signBg = this.nodeFriend.getChildByName('bg_3');
        var _signLabel = _signBg.getChildByName('label_sign_text').getComponent(cc.Label);
        var _wxLabel = _signBg.getChildByName('label_wx_text').getComponent(cc.Label);
        _signLabel.string = cc.vv.lang.LANG_DESC.NoLeave;
        _wxLabel.string = cc.vv.lang.LANG_DESC.NoLeave;
    },
    close: function() {
        this.node.parent = null;
        this.node.active = false;
    },
    initClickEvents: function () {
        var btnContent = this.node.getChildByName('leftScrollView').getChildByName('view').getChildByName('content')
        var btns = btnContent.getChildren();
        for (var i = 0; i < btns.length; i++) {
            var btn = btns[i];
            cc.vv.utils.addClickEvent(btn, this.node, 'MjUserInfo', 'onClickPanel');
        }

        var btnClose = this.node.getChildByName('btn_close');
        cc.vv.utils.addClickEvent(btnClose, this.node, 'MjUserInfo', 'onClickClose');
    },
    choosePanel: function (name) {
        this.node.active = true;
        this.selectBtn = name;
        this.updatePanel();
    },
    onClickEgg: function (event) {
        if (!cc.vv.roomdata) {
            return;
        }
        var name = event.target.name;
        var eggId = this.eggIds[name];
        if (!eggId) {
            return;
        }
        if (this.player.loginName == cc.cache.user.loginName) {
            return;
        }
        var eggNums = 1;
        var checkBox = this.nodeInfo.getChildByName('propNode').getChildByName('toggle').getComponent(cc.Toggle);
        if (checkBox.isChecked) {
            eggNums = 10;
        }
        var selfPlayer = cc.vv.roomdata.getPlayer(cc.vv.roomdata.selfIndex);
        if (eggNums*100 >= selfPlayer.totalIntegal){
            cc.vv.global.emit("proto_mj_no_gold");
        }else{
            cc.vv.controller.C2S_CommonRoomChatUseEgg(cc.vv.roomdata.id, eggId, eggNums, this.player.loginName);
        }
    },
    updatePanel: function () {
        if (this.selectBtn == "btnInfo") {
            this.nodeInfo.active = true;
            this.nodeFriend.active = false;
            this.updateUserInfo(this.nodeInfo);
            this.updateGameInfo();
        } else if (this.selectBtn == "btnFriend") {
            this.nodeInfo.active = false;
            this.nodeFriend.active = true;
            this.updateUserInfo(this.nodeFriend);
            this.updateSignInfo();
        }
    },
    show: function(player) {
        this.node.parent = cc.vv.global.getCurSceneNode();
        this.node.zIndex = cc.vv.constant.LAYER_Z_INDEX.LAYER_Z_INDEX_NORMAL;

        this.player = player;
        this.choosePanel("btnInfo");
    },
    onClickClose: function (event) {
        this.close();
    },












});