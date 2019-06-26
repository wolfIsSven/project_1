cc.Class({
    extends: cc.Component,

    properties: {
        _nextPlayTime: 0.5,
        _curStep: 0,
        _totalStep: 0,
        _isPlaying: false,
        _tipLabel: null,
    },

    onBtnPlayPauseClicked: function () {
        if (!this._isPlaying && this._curStep >= this._totalStep) return;
        this._nextPlayTime = 0.5;
        this._isPlaying = !this._isPlaying;
        this.refreshShowBtn();
    },
    onBtnNextClicked: function () {
        if (this._isPlaying) {
            this._isPlaying = false;
            this.refreshShowBtn();
            return;
        };
        cc.cache.replay.takeAction(true);
        this.updateStep();
    },
    refreshTipLabel: function () {
        this._tipLabel.string = cc.vv.lang.LANG_DESC.Schedule + this._curStep + ' / ' + this._totalStep;
    },
    updateStep: function() {
        this._curStep = cc.cache.replay.getCurStep();
        this.refreshTipLabel();
    },
    initStep: function () {
        this._curStep = cc.cache.replay.getCurStep();
        this._totalStep = cc.cache.replay.getTotalStep();
        this.refreshTipLabel();
    },
    stopPlaying: function () {
        this._isPlaying = false;
        this.refreshShowBtn();
    },
    update: function (dt) {
        if (this._isPlaying && cc.cache.replay.isReplay() && this._nextPlayTime > 0) {
            this._nextPlayTime -= dt;
            if (this._nextPlayTime < 0) {
                this._nextPlayTime = cc.cache.replay.takeAction(true);
                if (this._nextPlayTime == -1) {
                    this.stopPlaying();
                }
                this.updateStep();
            }
        }
    },
    onBtnBackClicked: function () {
        if (this._isPlaying) {
            this._isPlaying = false;
            this.refreshShowBtn();
            return;
        };
        cc.cache.replay.setBeginStep();
        this.updateStep();
    },
    onBtnPreClicked: function () {
        if (this._isPlaying) {
            this._isPlaying = false;
            this.refreshShowBtn();
            return;
        };
        cc.cache.replay.setPreStep();
        // cc.cache.replay.takeAction();
        this.updateStep();
    },
    refreshShowBtn: function () {
        var controlNode = this.node.getChildByName('controlNode');
        controlNode.getChildByName('btn_play').active = !this._isPlaying;
        controlNode.getChildByName('btn_pause').active = this._isPlaying;
    },
    onLoad: function () {
        if (!cc.cache.replay.isReplay()) return;
     
        this.node.height = cc.winSize.height;
        this.node.active = cc.cache.replay.isReplay();
        this._tipLabel = this.node.getChildByName('New Node').getChildByName('tipLabel').getComponent(cc.Label);

        this.refreshShowBtn();
        this.initStep();

        var self = this;
        this.node.on("replay",function(data){
            self._replayNode.active = data.detail;
        });
        this.node.on("beginReplay",function(){
            self.initStep();
            self._isPlaying = false;
            self.refreshShowBtn();
        });
    },
    onBtnLeaveClicked: function () {
        cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_DESC.OverReplay, function () {
            cc.vv.global.showType = 4;
            cc.vv.global.dissolveGame();
        });
    },











});
