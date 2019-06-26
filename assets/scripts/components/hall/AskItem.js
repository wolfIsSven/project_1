cc.Class({
    extends: cc.Component,
    properties: {
        cc_nameLabel:cc.Node,
        cc_headIcon:cc.Node,
        _object:null
    },
    onLoad: function () {
        
    },
    initData:function(data){
        this._object =data;
       this.cc_nameLabel.getComponent(cc.Label).string = data.name;
    },
    onClickedAsk:function(){

    }
});