cc.Class({
    extends: cc.Component,
    properties: {
    },
    onClicked: function (event) {
        var name = event.target.name;
        if (name == 'btn_ok') {
            cc.vv.controller.C2S_RoomMjGiveup(1)
        }else if (name === "btn_cancel") {
            cc.vv.controller.C2S_RoomMjGiveup(0)
        }
    },
    onLoad: function () {
        var self = this;
        cc.vv.global.on("proto_close_give_up",function(data){
            self.onClose()
        }.bind(this))
    },
    onClose:function(){
        cc.vv.global.emit("mj_close_module",cc.vv.constant.ROOM_PREFAB.MJ_GIVE_UP)
    }


});