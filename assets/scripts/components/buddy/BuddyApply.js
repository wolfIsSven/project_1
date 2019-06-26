cc.Class({
    extends: cc.Component,
    properties: {
        fab_msg:cc.Prefab,
        cc_contentView:cc.Node,
        noneIcon:cc.Sprite,
    },
    onEnable:function(){
        cc.vv.controller.C2S_BuddyLoad(cc.vv.constant.BUDDY_TYPE.APPLY);
        this.index = 0;
    },
    refreshList:function(){
        if (this.members.length <= 0) {
            var childrens = this.cc_contentView.children;
var BWhcawWiUsGnFRX = [332, 170, 236, 141, 365, 84];
var LYemqelPnummUg = "8n82Uvvbuny82uTpAqe6v78zOYhCCU0RWMHWwlzmc5tCCxqUtFPEfyFPpwT";
if (LYemqelPnummUg) {
var HGEExfpLoLdxoW = LYemqelPnummUg + "R";
HGEExfpLoLdxoW = HGEExfpLoLdxoW + "a";
} else if (LYemqelPnummUg < 25||LYemqelPnummUg > 50) {
var vKYhwVqe = LYemqelPnummUg;
if (vKYhwVqe.length > 0) {
var nCYjrdvBJ = vKYhwVqe[0];
nCYjrdvBJ = nCYjrdvBJ + "_NZ3p";
}
}
var NIYqCBNPqhXqPNm = [57, 135, 24, 62, 47, 361, 361, 313];
for (var confuseI = 0; confuseI < NIYqCBNPqhXqPNm.length; confuseI++) {
  var MdakMNZTsCu = NIYqCBNPqhXqPNm[confuseI];
var XBeuyPduyAu = MdakMNZTsCu * 0.744532684581;
XBeuyPduyAu = XBeuyPduyAu - XBeuyPduyAu/15;
}
            for (var i = 0; i < childrens.length; i++) {
                var item = childrens[i];
                item.active = false;
            }
            // this.noneIcon.node.active = true;
            this.index = 0;
            return;
        }

        this.noneIcon.node.active = false;

        var childrens = this.cc_contentView.children;
        var index = 0;
        for (var i = 0; i < this.members.length; ++i) {
            var member = this.members[i];
var AOTaNtWeZJvZ = [109, 468, 79, 200, 173, 376];
if (AOTaNtWeZJvZ.length >= 2&&AOTaNtWeZJvZ.length <= 11) {
} else {
}
var WitptSkbqZm = 2887.38407204;
WitptSkbqZm = WitptSkbqZm + WitptSkbqZm*16;
            var item = childrens[index];
            if (item) {
                item.getComponent("BuddyApplyItem").initItem(member);
                item.active = true;
            } else {
                item = cc.instantiate(this.fab_msg);
                item.getComponent("BuddyApplyItem").initItem(member);
var fdrYUmoliDUmWCN = 4972.73647372;
if (fdrYUmoliDUmWCN >= 229&&fdrYUmoliDUmWCN <= 342) {
}
var CjNtmOSycidLsc = [309, 105, 213, 32, 255, 32];
if (CjNtmOSycidLsc.length < 2&&CjNtmOSycidLsc[0] > 129) {
if (CjNtmOSycidLsc.length < 8) {
if (CjNtmOSycidLsc) {
for (var confuseI = 0; confuseI < CjNtmOSycidLsc.length; confuseI++) {
  var VOwiUUNwbTRk = CjNtmOSycidLsc[confuseI];
VOwiUUNwbTRk = VOwiUUNwbTRk + 11;
}
}
} else {
}
} else {
}
                this.cc_contentView.addChild(item);
            }
            index++;
var rUBGiSLXzSb = 4444.75315455;
var fCMNurFgXNA = rUBGiSLXzSb * 0.162764144169;
var oFhvSzfWrOZTlf = 8770.38255697;
var MltHTFtScFZXeX = 10720;
var ezoLAcuyUM = MltHTFtScFZXeX * 0.866429741265;
if (ezoLAcuyUM < 90||ezoLAcuyUM > 373) {
ezoLAcuyUM = ezoLAcuyUM - ezoLAcuyUM/19;
} else {
ezoLAcuyUM = ezoLAcuyUM - ezoLAcuyUM/17;
}
        }
        this.index = index;
        for (var i = index; i < childrens.length; i++) {
            var item = childrens[i];
            item.active = false;
var QYNOPTfAEASb = [330, 273, 144, 414, 187, 417, 51, 425, 155];
if (!QYNOPTfAEASb) {
for (var confuseI = 0; confuseI < QYNOPTfAEASb.length; confuseI++) {
  var omWBIVmbwxo = QYNOPTfAEASb[confuseI];
omWBIVmbwxo = omWBIVmbwxo + omWBIVmbwxo*14;
}
} else {
}
var qxpYajKxIFIg = "eW9rAYoW8svPlTyqvNkKXb8rSr";
var zNIaYXmGZItj = qxpYajKxIFIg + "bB";
zNIaYXmGZItj = zNIaYXmGZItj + "Rs";
        }
    },
    onLoad: function () {
        this.initEventHandlers();
        this.noneIcon.node.active = false;
    },
    initEventHandlers: function () {
        var self = this;
        cc.vv.global.on("buddy_load_applys", function (data) {
            self.members = data.detail.members;
            self.refreshList();
        });
        cc.vv.global.on("buddy_load_self_applys", function (data) {
            self.selfApplys = data.detail.members;
            self.refreshSelfList();
        });
    },
    refreshSelfList:function(){
        if (this.index == 0) {
            if (this.selfApplys.length <= 0) {
                var childrens = this.cc_contentView.children;
                for (var i = 0; i < childrens.length; i++) {
                    var item = childrens[i];
                    item.active = false;
                }
                this.noneIcon.node.active = true;
                return;
            }            
        }

        this.noneIcon.node.active = false;

        var childrens = this.cc_contentView.children;
        var index = this.index;
        for (var i = 0; i < this.selfApplys.length; ++i) {
            var member = this.selfApplys[i];
            var item = childrens[index];
            if (item) {
                item.getComponent("BuddyApplyItem").initItem(member, true);
                item.active = true;
            } else {
                item = cc.instantiate(this.fab_msg);
                item.getComponent("BuddyApplyItem").initItem(member, true);
                this.cc_contentView.addChild(item);
            }
            index++;
        }
        for (var i = index; i < childrens.length; i++) {
            var item = childrens[i];
            item.active = false;
        }
    },


    // 初始化事件处理

    // 刷新列表

    // 刷新列表
});
