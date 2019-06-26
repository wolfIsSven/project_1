cc.Class({
    properties: {

    },
    init: function () {
        this._keyNum = 0;
    },
    setkeyNum: function (num) {
        this._keyNum += num;
        cc.vv.global.emit("onUpdateActivityRedPoint");
    }
});
