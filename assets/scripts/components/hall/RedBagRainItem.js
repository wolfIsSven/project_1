cc.Class({
    extends: cc.Component,
    properties: {
    },
    onLoad: function () {
        var x = (Math.random() - 0.5)*1200
        var y = 435;
        this.node.x = x;
        this.node.y = y;
        this.node.runAction(cc.sequence(cc.moveTo(5,x,-435),cc.callFunc(function(){
            this.node.removeFromParent(true);
        }.bind(this))));
    },
    initData:function(data){
        this._object = data;
        this.onEvent();
    },
    onClicked:function(){
        cc.vv.controller.C2S_RedBagRainDraw(this._object.id);
    },
    onEvent:function (){
        var self = this;
        cc.vv.global.on("on_draw_cash_bag", function (data) {
            // console.log("===============self._object",self._object);
            if (self._object.id !== data.detail){
                return
            }
            var skeleton = self.node.getChildByName("effectNode").getComponent(sp.Skeleton);
            skeleton.loop = false;
            skeleton.animation = "_open";
            skeleton.setCompleteListener(function(){
                self.node.runAction(cc.sequence(cc.fadeOut(0.5),cc.callFunc(function(){
                    self.node.removeFromParent(true);
                })));
            });
        });
    }



});