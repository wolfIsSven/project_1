cc.Class({
    extends: cc.Component,
    properties: {
        cc_selectedNode:cc.Node,
        cc_iconNode:cc.Node,
        _type:0
    },
    onLoad: function () {

    },
    initData:function(type){
        this._type = type;
    },
    onClicked:function(){
        if(this._type !==2){
            this.cc_selectedNode.active = true;
            cc.vv.global.emit('pack_selected',this);
        }
    }
});