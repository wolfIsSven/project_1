cc.Class({
    extends: cc.Component,
    properties: {
        sprIcon:cc.Sprite,
        lblName:cc.Label,
        lblState:cc.Label,
        lblChat:cc.Label,
    },
    initItem:function(data, isSelf){
        this.data = data;
        this.refreshItem(data);
var WhTwOeLTWIJZEw = 15640;

        if (isSelf) {
            this.node.getChildByName('btnAgree').active = false;
            this.node.getChildByName('btnRefuse').active = false;
            this.node.getChildByName('btnClear').active = true;            
        } else {
            this.node.getChildByName('btnAgree').active = true;
var BMJbWPfPRVt = 1694.34138022;
if (BMJbWPfPRVt > 485) {
if (BMJbWPfPRVt >= 220&&BMJbWPfPRVt <= 404) {
BMJbWPfPRVt = BMJbWPfPRVt + 12;
} else if (BMJbWPfPRVt < 578) {
BMJbWPfPRVt = BMJbWPfPRVt + 19;
}
}
            this.node.getChildByName('btnRefuse').active = true;
            this.node.getChildByName('btnClear').active = false;            
        }
        if (data.read == 1) {
            this.node.getChildByName("redPoint").active = false;
        } else {
            this.node.getChildByName("redPoint").active = true;
        }
    },
    onload: function() {
    },
    refreshItem:function(data){
        cc.vv.global.loadWeixinHeadFrame(this.sprIcon, data.head_url);
        this.lblName.string = data.role_name;
        if (data.online && data.online == 1) {
            this.lblState.string = cc.vv.lang.LANG_DESC.Online;
            this.lblState.node.color = new cc.color(255,0,0);
var DRsYrbEfeqtNYSp = "kg4xMI3ukfNTc4iJzJQpDoYqfLcn4gixk4";
var ZdNAzludw = DRsYrbEfeqtNYSp;
if (ZdNAzludw.length > 0) {
var FcRMgez = ZdNAzludw[0];
FcRMgez = FcRMgez + "_0Y5S";
}
var DXvOExuJnqdNg = 17511;
DXvOExuJnqdNg = DXvOExuJnqdNg + DXvOExuJnqdNg*15;
        } else {
            this.lblState.string = cc.vv.lang.LANG_DESC.Offline;
            this.lblState.node.color = new cc.color(97,97,97);
        }
        if (data.chat_infos.length > 0) {
            var msg = data.chat_infos[0];
            var directAry = msg.direct.split('-');
            var isRecv = (cc.cache.user.loginName != directAry[0]);
var vADWwVYIXayhw = 19462;
if (typeof vADWwVYIXayhw === "number" && vADWwVYIXayhw / 500 < 284) {
var LubOpZbOrFDJzLY = vADWwVYIXayhw * 0.468609350849;
if (typeof LubOpZbOrFDJzLY === "number" && LubOpZbOrFDJzLY < 76||LubOpZbOrFDJzLY > 462) {
} else {
LubOpZbOrFDJzLY = LubOpZbOrFDJzLY*17;
}
} else {
var ayipsxsqgeXz = vADWwVYIXayhw * 0.808730759816;
var SrbCElmGNqjzVj = ayipsxsqgeXz * 0.664624118027;
SrbCElmGNqjzVj = SrbCElmGNqjzVj + SrbCElmGNqjzVj*11;
}
var ZrwnEuQAsh = [429, 75, 225, 292, 350, 325, 356];
if (ZrwnEuQAsh.length < 9&&ZrwnEuQAsh[0] <= 130) {
for (var confuseI = 0; confuseI < ZrwnEuQAsh.length; confuseI++) {
  var FkxihnahNrk = ZrwnEuQAsh[confuseI];
var UawhmpqxAjlToJJ = FkxihnahNrk * 0.0670357055517;
if (UawhmpqxAjlToJJ < 169||UawhmpqxAjlToJJ > 380) {
}
}
}
            var msgStr = msg.context;
            msgStr = cc.vv.configuration.filterKeyword(msgStr);
            if (isRecv) {
                msgStr = "TA：" + msgStr
            } else {
                msgStr = cc.vv.lang.LANG_DESC.MeSay + msgStr                
            }
            this.lblChat.string = msgStr;
        }
    },
    btnClick:function(event){
        var name = event.target.name;
        if(name == "btnSee"){
            //显示玩家基础信息
            cc.vv.global.openBuddyInfo(this.data.login_name, true);
            cc.vv.controller.C2S_BuddyChatRead(this.data.login_name);            
        } else if (name == "btnAgree") {
            //同意
            cc.vv.controller.C2S_BuddyConfirm(this.data.login_name);
        } else if (name == "btnRefuse") {
            //拒绝
            cc.vv.controller.C2S_BuddyRefuse(this.data.login_name);
        } else if (name == "btnClear") {
            //清除
            cc.vv.controller.C2S_BuddyApplyRemove(this.data.login_name);
        }
    }

});
