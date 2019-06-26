cc.Class({
    extends: cc.Component,

    properties: {
        _headNode: null,
        _nameLabel: null,
        _scoreLabel: null,

        _zhuangNode: null,
        _readyNode: null,
        _offlineNode: null,
        _trustNode: null,

        _voiceNode: null,
        _chatNode: null,
        _chatLabel: null,
        _emojiNode: null,

        _lastChatTime: -1,
        _lastVoiceTime: -1,

        // _data: {},
        _userName: null,
        _score: null,
        _isZhuang: null,
        _userId: null,
        _isOffline: null,
        _isReady: null,
        _isTrust: null,
        _seatIndex:-1,
        _headSp: null,
        _seat:null
    },

    onHeadBtnClicked: function () {
        var seat = cc.vv.global.getSeatByID(this._userId);
        if (this._userId == cc.cache.user.id) {
            cc.vv.userinfo.show(seat, cc.cache.user.locationName, cc.cache.user.headImgSpriteFrame);
        } else {
            cc.vv.userinfo.show(seat, '',null);
            // cc.vv.net.send('get_distance', this._userId);
        }
    },
    setZhuang: function (isZhuang) {
        this._isZhuang = isZhuang;
        if(!this._zhuangNode){
            return;
        }
        this._zhuangNode.active = isZhuang;
    },
    onLoad: function () {
        var infoNode = this.node.getChildByName('infoNode');

        if (!infoNode) {
            return;
        }

        this._headNode = infoNode.getChildByName('headNode');
        cc.vv.utils.addClickEvent(this._headNode, this.node, 'Seat', 'onHeadBtnClicked');
        this._nameLabel = infoNode.getChildByName('nameLabel').getComponent(cc.Label);
        this._scoreLabel = infoNode.getChildByName('scoreLabel').getComponent(cc.Label);

        var statusNode = this.node.getChildByName('statusNode');
        this._zhuangNode = statusNode.getChildByName('zhuangNode');
        this._readyNode = statusNode.getChildByName('readyNode');
        this._readyNode.active = false;
        this._offlineNode = statusNode.getChildByName('offlineNode');
        this._offlineNode.active = false;
        this._trustNode = statusNode.getChildByName('trustNode');
        this._trustNode.active = false;

        this._voiceNode = this.node.getChildByName('voiceNode');
        this._voiceNode.active = false;
        this._chatNode = this.node.getChildByName('chatNode');
        this._chatNode.active = false;
        this._chatLabel = this._chatNode.getChildByName('chatLabel').getComponent(cc.Label);
        this._emojiNode = this.node.getChildByName('emojiNode');
        this._emojiNode.active = false;
        if(this._seat){
            this.updateData(this._seat);
        }
    },
    setVoice: function (isVoice) {
        this._voiceNode.active = isVoice;
        // if (isVoice) {
        //     this._lastVoiceTime = 5;
        // }
    },
    setNumber:function(seat){

    },
    setTrust: function (isTrust) {
        this._isTrust = isTrust;
        this._trustNode.active = isTrust;
    },
    setChat: function (content) {
        this._emojiNode.active = false;
        this._chatNode.active = true;
        this._chatLabel.string = content;
        this._lastChatTime = 3;
    },
    setName: function (name) {
        this._userName = name;
        this._nameLabel.string = name;
        // this.node.active = name;
    },
    setHeadImg:function(url){
        if(!url){
            return;
        }
        var self = this;
        cc.loader.load(url,function(err,tex){
            self._headNode && (self._headNode.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(tex));
        });
    },
    setEmoji: function (emoji) {
        this._chatNode.active = false;
        this._emojiNode.active = true;
        this._emojiNode.getComponent(cc.Animation).play(emoji);
        this._lastChatTime = 3;
    },
    setReady: function (isReady) {
        this._isReady = isReady;
        this._readyNode.active = isReady;// && cc.vv.global.gamestate != 'playing';
    },
    setScore: function (score) {
        this._score = score;
        this._scoreLabel.string = score;
    },
    updateData: function (seat) {
        this._seat = seat;
        if(!this._headNode){
            return;
        }
        var isOffline = seat.status === 1;
        var isZhuang = (cc.vv.global.master_Side === seat.seatIndex);
        this.setName(seat.name);
        var score = cc.cache.user.getRoomType()  === cc.vv.constant.ROOM_TYPE.GOLD ?seat.money:seat.score;
        score = cc.vv.global.handleCoins(score);
        this.setScore(score);
        var ready = !isOffline&&seat.replay&&(cc.vv.global.judgeState() === 0);
        this.setReady(ready);
        this.setOffline(isOffline);
        this.setID(seat.userId);
        this.setZhuang(isZhuang);
        this.setTrust(!isOffline&&seat.isTrust);
        this.setUserId(seat.userId);
        this.setHeadImg(seat._headImg);
    },
    setOffline: function (isOffline) {
        this._isOffline = isOffline;
        this._offlineNode.active = isOffline;
    },
    setUserId:function(userId){
        var isActive = this.node.active;
        this.node.active = userId > 0;
        if(!isActive && this.node.active && cc.vv.global.judgeState() === 0){
            this.addHeadEffect(this.node);
        }
    },
    addHeadEffect:function(node){
        var res = "prefabs/jcNode.prefab";
        cc.loader.loadRes(res,cc.Prefab,function(err,prefab){
            var jcNode = cc.instantiate(prefab);
            jcNode.x = 45;
            jcNode.y = -65;
            jcNode.parent = node;
            var skeleton = jcNode.getComponent(sp.Skeleton);
            skeleton.animation = "animation";
            skeleton.setCompleteListener(function(){
                jcNode.removeFromParent(true);
            });
        });
    },
    setInfo: function (name, score) {
        this._userName = name;
        this._score = score;
        this._nameLabel.string = name;
        this._scoreLabel.string = score ? score : 0;
        // this.node.active = name;
    },
    setID: function (userId) {
        this._userId = userId;
    },
    update: function (dt) {
        if (this._lastChatTime > 0) {
            this._lastChatTime -= dt;
            if (this._lastChatTime < 0) {
                this._chatNode.active = false;
                this._emojiNode.active = false;
                this._emojiNode.getComponent(cc.Animation).stop();
            }
        }
        if (this._lastVoiceTime > 0) {
            this._lastVoiceTime -= dt;
            if (this._lastVoiceTime < 0) {
                this._voiceNode.active = false;
            }
        }
    },











});
