// cc.Class({
//     extends: cc.Component,
//     properties: {
//     },
//     onLoad: function () {
//         this.btnTing = this.node.getChildByName("btnTing");
//         this.btnLiang = this.node.getChildByName("btnLiang");
//         this.wayNode = this.node.getChildByName("btnGuo");
        
//         var self = this;
//         cc.vv.global.on("proto_click_ting",function(){
//             self.onClose();
//         }.bind(this))
//     },

//     onEnable:function(){
//         this.updateData()
//     },

//     updateData:function(){
//         if (cc.vv.mjconfig.tingDaoPai){
//             this.btnLiang.active = true;
//             this.btnTing.active = false;
//             this.wayNode.active = true;
//         }else {
//             this.btnLiang.active = false;
//             this.btnTing.active = true;
//             this.wayNode.active = true;
//         }
//     },

//     btnClick:function(event){
//         var name = event.target.name;
//         if(name == "btnGuo"){
//             this.onClose();
//             cc.vv.global.emit('proto_finish_ting_action');
//         }else if(name == "btn"){
//             this.btnTing.active = false;
//             this.btnLiang.active = false;
//             cc.vv.global.emit('proto_do_ting_action');
//         }
//     },

//     onClose:function(){
//         cc.vv.global.emit("mj_close_module",cc.vv.constant.ROOM_PREFAB.MJ_TING_ACTION);
//     }
// });