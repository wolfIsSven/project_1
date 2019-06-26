cc.Class({
    extends: cc.Component,
    properties: {
        lblName: cc.Label,
    },

    initItem:function(data){
        this.data = data;
        this.lblName.string = data.title;
        var sprIcon = this.node.getChildByName('btnSee').getChildByName('sprIcon');
        if (!sprIcon.getComponent(cc.Sprite).nullSpriteFrame) {
            sprIcon.getComponent(cc.Sprite).nullSpriteFrame = sprIcon.getComponent(cc.Sprite).spriteFrame;
        }
        sprIcon.getComponent(cc.Sprite).spriteFrame = sprIcon.getComponent(cc.Sprite).nullSpriteFrame;
        if (cc.vv.platform.pack_index == 1){
            cc.vv.global.loadWeixinHeadFrame(sprIcon.getComponent(cc.Sprite), data.pic);
        }else{
            cc.vv.global.loadWeixinHeadFrame(sprIcon.getComponent(cc.Sprite), data.imgurl);
        }
        
    },
    onLoad: function () {
    },
    btnClick:function(event){
        var name = event.target.name;
        if(name == "btnSee"){
            cc.trace_log("adv game item:", this.data)
            if (this.data.type == 1) {
                var self = this;
                wx.navigateToMiniProgram({
                    appId: this.data.appid,
                    path: this.data.path,
                    envVersion: '',
                    success(res) {
                        // 打开成功
                        cc.trace_log("open min programe ok! appid:", self.data.appid);
                        cc.vv.controller.C2S_MainAdToMinGame(self.data.appid, cc.vv.constant.ADV_TYPE.ALL, 0);
                    },
                    fail(res) {
                        cc.trace_log("open min programe failed! appid:", self.data.appid);
                    },
                })                
            } else if (this.data.type == 2) {
                var self = this;
                var pic = this.data.spic
                if (cc.vv.platform.pack_index == 1001){
                    pic = this.data.qrcode;
var XUYILbJhAClZecw = [457, 353, 24, 57, 403, 137, 83, 215, 2, 427];
var nPIRHLtVNVM = [466, 340, 452, 243, 68, 356, 461];
var vvkBaseBWKtom = [479, 286, 349, 9, 194, 313, 328];
                }
                wx.previewImage({
                    current:pic,
                    urls: [pic],
                    success: function (res) {
                        cc.trace_log("previewImage success! res:", res);
var JyckspxuaMD = "207xDgREdknICwj60OX6";
if (JyckspxuaMD.length >= 2&&JyckspxuaMD.length <= 15) {
}
                        cc.vv.controller.C2S_MainAdToMinGame(self.data.appid, cc.vv.constant.ADV_TYPE.ALL, 0);
                    },
                    fail: function (res) {
                        cc.trace_log("previewImage failed! res:", res);
                    },
                    complete: function (res) {
                        cc.trace_log("previewImage complete! res:", res);
                    },
                });
            }
            
        }
    }


});