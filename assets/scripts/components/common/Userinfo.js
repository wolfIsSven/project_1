cc.Class({
    extends: cc.Component,

    properties: {
    },

    onClick: function(event){
        var name = event.target.name;
        if(name === "btn_sign"){
            cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.HEAD_SIGN);
            cc.vv.global.openEditBox(cc.vv.constant.SIGN_INFO_TYPE.SIGN_INFO_SIGN);
        }else if(name === "btn_wx"){
            cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.HEAD_WX);
            cc.vv.global.openEditBox(cc.vv.constant.SIGN_INFO_TYPE.SIGN_INFO_WINXIN);
        }
    },
    onLoad: function () {
        this.updateUserInfo();
        this.updateGameInfo();
        this.updateSignInfo()
        cc.vv.global.on("update_info_sign_set",function(){
            this.updateSignInfo();
        }.bind(this));
    },
    updateUserInfo: function () {
        var _headSp = this.node.getChildByName('headSp').getComponent(cc.Sprite);
        var _nameLabel = this.node.getChildByName('nameLabel').getComponent(cc.Label);//.getComponent(cc.Label);
        var _ipLabel = this.node.getChildByName('ipLabel').getComponent(cc.Label);
        var _idLabel = this.node.getChildByName('idLabel').getComponent(cc.Label);
        var _starLabel = this.node.getChildByName('starLabel').getComponent(cc.Label);
        var _starIcon = this.node.getChildByName('starIcon');
        var _bg3 = this.node.getChildByName('bg_3');
        var _signBtn = _bg3.getChildByName('btn_sign');
        var _wxBtn = _bg3.getChildByName('btn_wx');
        
        cc.vv.global.loadWeixinHeadFrame(_headSp, cc.cache.account.headImg);

        _nameLabel.string = cc.cache.user.roleName;
        _idLabel.string = 'ID: ' + cc.cache.user.id;
        _ipLabel.string = 'IP: ' + cc.cache.user.ip;

        if (cc.cache.user.getStar() < 0) {
            _starIcon.active = false;
        } else {
            _starIcon.active = true;
            _starIcon.getComponent(cc.Sprite).spriteFrame = cc.plistAtlas.dwAtlas.getSpriteFrame("inn_dw000" + cc.vv.lang.getStarId(cc.cache.user.getStar()));
            _starLabel.string = cc.vv.lang.StarNameDetail(cc.cache.user.getStar());
        }
        if (cc.cache.user.getAdminSwitchVal(cc.vv.constant.ADMIN_SWITCH.CLOSE_REDBAG) == 0){  ///开启
            _signBtn.active = true;
            _wxBtn.active = true;
        }else{
            _signBtn.active = false;
            _wxBtn.active = false;
        }
        // _headSp.getComponent(cc.Sprite).spriteFrame = headsp;

        if (cc.vv.config.PLATFORM.type === 998 || cc.vv.config.PLATFORM.type === 999) {
            _bg3.active = false;
        }
    },
    hide: function () {
        if (this.node){
            this.node.active = false
            cc.vv.global.emit("showPanelNode", false);
            cc.vv.wxApi.hideBannar();
        }
    },
    updateGameInfo: function () {
        var _ruleLabel = this.node.getChildByName('ruleLabel').getChildByName('valueLabel').getComponent(cc.Label);
        var _totalRoundLabel = this.node.getChildByName('totalRoundLabel').getChildByName('valueLabel').getComponent(cc.Label);
        var _winRateLabel = this.node.getChildByName('winRateLabel').getChildByName('valueLabel').getComponent(cc.Label);
        var _maxContinueWinLabel = this.node.getChildByName('maxContinueWinLabel').getChildByName('valueLabel').getComponent(cc.Label);
        var _curContinueWinLabel = this.node.getChildByName('curContinueWinLabel').getChildByName('valueLabel').getComponent(cc.Label);

        var ruleType = cc.cache.user.selectRuleType;
        var playStr = cc.vv.lang.LANG_RULE_TYPE[Number(ruleType)];
        _ruleLabel.string = playStr ? playStr : cc.vv.lang.LANG_DESC.NoPlayType;
        var stat = cc.cache.stat.getStat(Number(ruleType));
        if (stat) {
            _totalRoundLabel.string = stat.totalRound;
            if (stat.totalRound === 0){
                _winRateLabel.string = "0%";
            }else {
                _winRateLabel.string = Math.floor(stat.totalWin/stat.totalRound*100) + "%";
            }
            _maxContinueWinLabel.string = stat.maxContinueWin;
            _curContinueWinLabel.string = stat.curContinueWin;
        } else {

            _totalRoundLabel.string = "0";
            _winRateLabel.string = "0%";
            _maxContinueWinLabel.string = "0";
            _curContinueWinLabel.string = "0";
        }
    },
    updateSignInfo: function () {
        var _signBg = this.node.getChildByName('bg_3');
        var _signLabel = _signBg.getChildByName('label_sign_text').getComponent(cc.Label);
        var _wxLabel = _signBg.getChildByName('label_wx_text').getComponent(cc.Label);
        _signLabel.string = cc.vv.configuration.filterKeyword(cc.cache.user.sign);
        if (cc.cache.user.sign === ""){
            _signLabel.string = cc.vv.lang.LANG_DESC.NoLeave;
        }
        _wxLabel.string = cc.vv.configuration.filterKeyword(cc.cache.user.weixin);
        if (cc.cache.user.weixin === ""){
            _wxLabel.string = cc.vv.lang.LANG_DESC.NoLeave;
        }
    },
    setLocationLabel: function (location) {
    }




});
