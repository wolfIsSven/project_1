cc.Class({
    extends: cc.Component,
    properties: {
        _object:null
    },
    onLoad: function () {

    },
    initData:function(index, object){
        this._object = object;
        var indexLabel = this.node.getChildByName("indexLabel");
        indexLabel.getComponent(cc.Label).string = index;

        cc.trace_log("record sub item:", object);
        for (var i = 0; i < 4; i++) {
            var index = i+1;
            var integalLabel = this.node.getChildByName("integalLabel"+index);
            if (i < object.length) {
                integalLabel.active = true;
                integalLabel.getComponent(cc.Label).string = object[i].win_integal;                
            } else {
                integalLabel.active = false;
            }
        }
    },

});