cc.Class({
    extends: cc.Component,

    properties: {
        _reconnect: null,
        _lblTip: null,
        _loading_image: null,
        _lastPing: 0,
    },

    // use this for initialization
    onLoad: function () {
        this._reconnect = cc.find("Canvas/reconnect");
        this._loading_image = this._reconnect.getChildByName("loading_image");
        var self = this;

        // var fnTestServerOn = function () {
        //     cc.vv.net.test(function (ret) {
        //         if (ret) {
        //             // cc.vv.global.reset();
        //             //cc.director.loadScene('hall');
        //             var roomId = cc.cache.user.oldRoomId;
        //             if (roomId != null) {
        //                 cc.cache.user.oldRoomId = null;
        //                 cc.cache.user.enterRoom(roomId, function (ret) {
        //                     if (ret.errcode != 0) {
        //                         cc.vv.user.roomId = 0;
        //                         cc.director.loadScene('hall');
        //                     }
        //                 });
        //             }
        //         }
        //         else {
        //             setTimeout(fnTestServerOn, 3000);
        //         }
        //     });
        // }

        var fn = function (data) {
            self.node.off('disconnect', fn);
            self._reconnect.active = true;
            // fnTestServerOn();
        };

        this.node.on('login_result', function () {
            self._reconnect.active = false;
            self.node.on('disconnect', fn);
        });
        this.node.on('disconnect', fn);
    },
    update: function (dt) {
        if (this._reconnect.active) {
            this._loading_image.rotation = this._loading_image.rotation - dt * 45;
        }
    },
    // called every frame, uncomment this function to activate update callback
});
