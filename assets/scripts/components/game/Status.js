cc.Class({
    extends: cc.Component,

    properties: {
        _statusNode: null,
        _powerNode: null,
    },

    onLoad: function () {
        this._statusNode = cc.find('Canvas/topNode/statusLayout');
        // this._delayLabel = this._statusNode.getChildByName('delayLabel').getComponent(cc.Label);
        this._powerNode = this._statusNode.getChildByName('powerNode');
        if (cc.sys.isNative) {
            this._powerNode.active = true;
        } else {
            this._powerNode.active = false;
        }
        // this._red = new cc.Color(205, 0, 0);
        // this._green = new cc.Color(0, 205, 0);
        // this._yellow = new cc.Color(255, 200, 0);
    },
    update: function (dt) {

        // if (cc.vv.net.delayMS != null) {
        //     this._delayLabel.string = cc.vv.net.delayMS + 'ms';
        //     if (cc.vv.net.delayMS > 800) {
        //         this._delayLabel.node.color = this._red;
        //     } else if (cc.vv.net.delayMS > 300) {
        //         this._delayLabel.node.color = this._yellow;
        //     } else {
        //         this._delayLabel.node.color = this._green;
        //     }
        // } else {
        //     this._delayLabel.string = 'N/A';
        //     this._delayLabel.node.color = this._red;
        // }
        // this._powerNode.scaleX = cc.vv.anysdkMgr.getBatteryPercent();
    },

});
