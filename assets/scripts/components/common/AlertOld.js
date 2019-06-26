cc.Class({
    extends: cc.Component,

    properties: {
        _alertNode: null,
        _btnOK: null,
        _btnCancel: null,
        _titleLabel: null,
        _contentLabel: null,
        _onok: null,
        _type:0
    },

    onLoad: function () {
        this._alertNode = cc.find('Canvas/alertNode');
        this._panelNode = this._alertNode.getChildByName("panelNode");
        // if(cc.vv.global.IsScale()){
        //     this._alertNode.getChildByName("bg").height = cc.winSize.height;
        // }
        
        this._title = cc.find('Canvas/alertNode/panelNode/titleLabel').getComponent(cc.Label);
        this._content = cc.find('Canvas/alertNode/panelNode/contentLabel').getComponent(cc.Label);
        this._btnOK = cc.find('Canvas/alertNode/panelNode/btn_ok');
        this._btnCancel = cc.find('Canvas/alertNode/panelNode/btn_cancel');
        cc.vv.utils.addClickEvent(this._btnOK, this.node, 'Alert', 'onBtnClicked');
        cc.vv.utils.addClickEvent(this._btnCancel, this.node, 'Alert', 'onBtnClicked');
        this._alertNode.active = false;
        cc.vv.alert = this;

        var tipsArgs = cc.vv.global.tipsArgs;
        if(tipsArgs.length > 0){
            cc.vv.global.alert(tipsArgs[0], tipsArgs[1],tipsArgs[2],tipsArgs[3],tipsArgs[4]);
            tipsArgs.length = 0;
        }
    },
    hide:function(){
        this._alertNode.active = false;
        cc.vv.global.emit("showPanelNode",false);
    },
    onBtnClicked: function (event) {
        var name = event.target.name ;
        if (name == 'btn_ok') {
            if (this._onok) {
                this._onok();
            }
        }else if(name === "btn_cancel"){
            if(this._cancel){
                this._cancel();
            }
            if(this._type === 1 || this._type === 2){
                cc.vv.global.dissolveGame();
            }
        }
        this._alertNode.active = false;
        cc.vv.global.emit("showPanelNode",false);
        this._onok = null;
    },
    show: function (title, content, onok, needcancel,type,cancel) {
        this._alertNode.active = true;
        this._onok = onok;
        this._cancel = cancel;
        this._title.string = title;
        this._content.string = content;
        this._type = type;
        // var urlArray = ["textures/btn/btn_qd_2.png"];
        // if(type === 1){//充值
        //     urlArray = ["textures/btn/btn_033.png"];
        // }
        if(needcancel === false){
            this._btnCancel.active = false;
            this._btnOK.x = 0;
        }
        
        var self = this;
        // cc.loader.loadRes(urlArray[0], cc.SpriteFrame,function (err, SpriteFrames) {
        //     self._btnCancel.getComponent(cc.Sprite).spriteFrame = SpriteFrames;
        // });
        // cc.loader.loadRes(urlArray[0], cc.SpriteFrame,function (err, SpriteFrames) {
        //     self._btnOK.getComponent(cc.Sprite).spriteFrame = SpriteFrames;
        // });
        // this._panelNode.scale = 0;
        // var action = cc.scaleTo(0.5,1);
        // action.easing(cc.easeBackOut());
        // this._panelNode.runAction(action);
        cc.vv.utils.openAnimation(this._panelNode);
        cc.vv.global.emit("showPanelNode",true);
    },
    onDestory: function () {
        if (cc.vv) {
            cc.vv.alert = null;
        }
    }


});
