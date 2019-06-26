cc.Class({
    extends: cc.Component,

    properties: {
        _dismissNode: null,
        _dismissLayer: null,
        _noticeLabel: null,

        _endTime: -1,
        _extraInfo: null,
    },

    onEvent: function () {
        var self = this;
        cc.vv.global.on('dissolve_notice', function () {
            self.showDissolveNotice();
        });

        cc.vv.global.on('dissolve_cancel', function () {
            self.closeAll();
        });
    },
    onBtnClicked: function (event) {
        var btnName = event.target.name;
        if (btnName == 'btn_agree') {
            cc.vv.controller.C2S_CommonRoomAgreeExit(cc.vv.roomdata.id,true);
        }  else if (btnName == 'btn_reject') {
            cc.vv.controller.C2S_CommonRoomAgreeExit(cc.vv.roomdata.id,false);
        }
    },
    showDissolveRequest: function () {
        // this.closeAll();
        this.node.active = true;
    },
    showDissolveNotice: function () {
        var players = cc.vv.roomdata.players;
        this._extraInfo = '';
        var is_close_node = 0;
        for (var index in players) {
            var player = players[index];
            if (player) {
                console.log("===============player",player);
                var state = player.disbandState;
                var name = player.roleName;

                if (state === 1) {
                    this._extraInfo += "\n["+cc.vv.lang.LANG_DESC.Agree+"] " + name;
                    if (player.loginName === cc.cache.user.loginName){
                        this._agreeBtn.active = false;
                        this._notAgreeBtn.active = false;
                        this._waitLabel.active = true;
                    }
                }else if(state === -1){
                    this._extraInfo += "\n["+cc.vv.lang.LANG_DESC.Refused+"] "  + name;
                    ++is_close_node;
                } else {
                    this._extraInfo += "\n["+cc.vv.lang.LANG_DESC.Confirm+"] " + name;
                }
            }
        }

        cc.trace_log("disband info:", this._extraInfo);
        if (is_close_node > 0){
            this.closeAll();
        }
    },
    start: function () {
        if (cc.vv.global.dissoveData) {
            this.showDissolveNotice(cc.vv.global.dissoveData);
        }
    },
    onLoad: function () {
        this._dismissLayer = this.node.getChildByName('dismissLayer');
        this._noticeLabel = this._dismissLayer.getChildByName('noticeLabel').getComponent(cc.Label);
        this._agreeBtn = this._dismissLayer.getChildByName('btn_agree');
        this._notAgreeBtn = this._dismissLayer.getChildByName('btn_reject');
        this._waitLabel = this._dismissLayer.getChildByName('label_wait');

        this.onEvent();
    },
    closeAll: function () {
        this.node.active = false;
        this._agreeBtn.active = true;
        this._notAgreeBtn.active = true;
        this._waitLabel.active = false;
    },
    update: function (dt) {
        if (!cc.vv.roomdata || !cc.vv.roomdata.disbandCD){
            console.log("=========not disbandcd=========");
            return;
        }
        var lastTime = cc.vv.roomdata.disbandCD;
        if (lastTime > 0) {
            lastTime -= dt;
            cc.vv.roomdata.disbandCD = lastTime;
            if (lastTime < 0) {
                return;
            }
            
            var m = Math.floor(lastTime / 60);
            var s = Math.ceil(lastTime - m * 60);

            var str = '';
            if (m > 0) {
                str += m + cc.vv.lang.LANG_DESC.Minute;
            }

            this._noticeLabel.string = str + s + cc.vv.lang.LANG_DESC.DismmisTips + this._extraInfo;
        }
    },






    
});
