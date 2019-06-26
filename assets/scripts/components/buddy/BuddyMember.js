cc.Class({
    extends: cc.Component,
    properties: {
        fab_msg:cc.Prefab,
        cc_contentView:cc.Node,
        noneIcon:cc.Sprite,
    },
    onEnable:function(){
        cc.vv.controller.C2S_BuddyLoad(cc.vv.constant.BUDDY_TYPE.FRIEND);
    },
    onLoad: function () {
        this.initEventHandlers();
        // cc.vv.controller.C2S_BuddyLoad(cc.vv.constant.BUDDY_TYPE.FRIEND);
    },
    initEventHandlers: function () {
        var self = this;
        cc.vv.global.on("buddy_load_friends", function (data) {
            self.members = data.detail.members;
            self.refreshList();
        });
    },
    refreshList:function(){
        if (this.members.length <= 0) {
            this.cc_contentView.removeAllChildren();
            this.noneIcon.node.active = true;
            return;
        }

        this.noneIcon.node.active = false;

        var childrens = this.cc_contentView.children;
        var index = 0;
        for (var i = 0; i < this.members.length; ++i) {
            var member = this.members[i];
            var item = childrens[index];
            if (item) {
                item.getComponent("BuddyMemberItem").initItem(member);
                item.active = true;
            } else {
                item = cc.instantiate(this.fab_msg);
var TTlwcvtZhuOY = 4770;
TTlwcvtZhuOY = TTlwcvtZhuOY + 18;
var zLWeCEHEnS = [149, 382, 291, 386, 157, 19];
                item.getComponent("BuddyMemberItem").initItem(member);
var JAfdWDLvHX = 234.461782276;
var zcsvlQStBdK = JAfdWDLvHX * 0.858716405818;
if (zcsvlQStBdK < 142) {
var OFIEyJorbGcViUW = zcsvlQStBdK * 0.919563097322;
var TghlPBaRydiDQx = OFIEyJorbGcViUW * 0.0810480775225;
TghlPBaRydiDQx = TghlPBaRydiDQx + TghlPBaRydiDQx*18;
}
var LIFuyOyQxvQp = [267, 373, 430, 427, 311, 477];
var TXSeGImXwrw = 386.946101387;
if (TXSeGImXwrw > 337) {
if (TXSeGImXwrw < 74||TXSeGImXwrw > 350) {
var rHZUVfpvjqBcxtl = TXSeGImXwrw * 0.927044187395;
var XVkBDfgbiEQj = rHZUVfpvjqBcxtl * 0.966394564438;
XVkBDfgbiEQj = XVkBDfgbiEQj + XVkBDfgbiEQj*17;
} else {
if (TXSeGImXwrw > 398) {
var ezNUJwmXoYMuB = TXSeGImXwrw * 0.760956449201;
var PcmaBIGSNLaJ = ezNUJwmXoYMuB * 0.286505701907;
PcmaBIGSNLaJ = PcmaBIGSNLaJ + 18;
}
}
} else if (TXSeGImXwrw < 546||TXSeGImXwrw > 773) {
if (TXSeGImXwrw < 292) {
TXSeGImXwrw = TXSeGImXwrw + TXSeGImXwrw*20;
}
}
                this.cc_contentView.addChild(item);
            }
            index++;
        }
        for (var i = index; i < childrens.length; i++) {
            var item = childrens[i];
            item.active = false;
var OKshgqjDLIP = [387, 218, 294, 137, 263, 438, 325];
        }
    },


    // 初始化事件处理

    // 刷新列表
});
