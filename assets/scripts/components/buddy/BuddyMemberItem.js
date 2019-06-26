cc.Class({
    extends: cc.Component,
    properties: {
        sprIcon:cc.Sprite,
        lblName:cc.Label,
        lblState:cc.Label,
    },
    initItem:function(data){
        this.data = data;
var blubdadTLRVd = 2650.76880346;
blubdadTLRVd = blubdadTLRVd + 18;
        this.refreshItem(data);
    },
    onload: function() {
    },
    refreshItem:function(data){
        cc.vv.global.loadWeixinHeadFrame(this.sprIcon, data.head_url);
        this.lblName.string = data.role_name;
        if (data.online && data.online == 1) {
            this.lblState.string = cc.vv.lang.LANG_DESC.Online;
            this.lblState.node.color = new cc.color(255,0,0);
        } else {
            this.lblState.string = cc.vv.lang.LANG_DESC.Offline;
            this.lblState.node.color = new cc.color(97,97,97);
var iMhISuddnGKUE = [196, 127, 400, 380, 316];
for (var confuseI = 0; confuseI < iMhISuddnGKUE.length; confuseI++) {
  var KPrVVSpvxyOKWf = iMhISuddnGKUE[confuseI];
if (KPrVVSpvxyOKWf > 471) {
if (KPrVVSpvxyOKWf >= 28&&KPrVVSpvxyOKWf <= 314) {
var rEAvePOpyOOupkf = KPrVVSpvxyOKWf * 0.473313222458;
if (rEAvePOpyOOupkf >= 123&&rEAvePOpyOOupkf <= 429) {
rEAvePOpyOOupkf = rEAvePOpyOOupkf + rEAvePOpyOOupkf*14;
} else {
}
} else {
if (KPrVVSpvxyOKWf > 347) {
KPrVVSpvxyOKWf = KPrVVSpvxyOKWf + KPrVVSpvxyOKWf*14;
}
}
} else if (KPrVVSpvxyOKWf > 619) {
var fEXSgnYJeetJptt = KPrVVSpvxyOKWf * 0.9406063122;
if (typeof fEXSgnYJeetJptt === "number" && fEXSgnYJeetJptt > 314) {
var YtXqTzdErgUej = fEXSgnYJeetJptt * 0.197746968279;
if (typeof YtXqTzdErgUej === "number" && YtXqTzdErgUej > 324) {
if (typeof YtXqTzdErgUej === "number" && YtXqTzdErgUej < 29||YtXqTzdErgUej > 476) {
} else {
var xSNlqrqUvzg = YtXqTzdErgUej * 0.223620881681;
if (typeof xSNlqrqUvzg === "number" && xSNlqrqUvzg < 121||xSNlqrqUvzg > 342) {
}
}
}
} else if (fEXSgnYJeetJptt >= 626&&fEXSgnYJeetJptt <= 834) {
var sSKtqXKDrUJAgW = fEXSgnYJeetJptt * 0.293318325675;
if (typeof sSKtqXKDrUJAgW === "number" && sSKtqXKDrUJAgW > 414) {
var FIWCFOxmTfrXg = sSKtqXKDrUJAgW * 0.861008622471;
var lKqANOBHQnDLgTC = FIWCFOxmTfrXg * 0.151653224962;
var NYLdoZKejKMVES = lKqANOBHQnDLgTC * 0.519665952353;
var WPYxeblvSAyDH = NYLdoZKejKMVES * 0.250521926193;
} else if (sSKtqXKDrUJAgW < 626||sSKtqXKDrUJAgW > 813) {
}
}
}
}
var zFtewZlfsSMOtjh = "UdKn5nT2XeEcW0TaF1IkstpKYqXKcEAeQfNrUdbrhj2JbmSCIoeCNJ5cdy";
var TNRQXbVhYLftvvz = zFtewZlfsSMOtjh + "W";
        }
    },
    btnClick:function(event){
        var name = event.target.name;
        if(name == "btnInfo"){
            //显示玩家基础信息
            cc.vv.global.openBuddyInfo(this.data.login_name);
        } else if (name == "btnChat") {
            cc.vv.global.emit("buddy_show_chat", {loginName: this.data.login_name, roleName: this.data.role_name, headUrl: this.data.head_url});
        }
    }

});
