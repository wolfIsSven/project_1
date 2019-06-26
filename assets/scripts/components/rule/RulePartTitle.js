cc.Class({
    extends: cc.Component,
    properties: {
        lblTitle:cc.Label,
    },
    onload: function() {
    },
    show:function(val){
    	this.lblTitle.string = val;
    },

});