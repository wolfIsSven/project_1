cc.Class({
    extends: cc.Component,
    properties: {
        
    },

    onLoad: function () {
        // cc.MyLog.log_info("xltest MyCpntClose.onload");
        cc.MyEventHandler.addClickEvent(this.node, this.node, "MyCpntClose", "btnClick");
    },
    btnClick:function(event){
        var name = event.target.name;
        if(name == "btnClose"){
            this.node.getParent().active = false;
        }
    }

});
