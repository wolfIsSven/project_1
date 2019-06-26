cc.Class({
    extends: cc.Component,
    properties: {
        fab_msg:cc.Prefab,
        lblWho:cc.Label,
        cc_contentView:cc.Node,
        emojiNode:cc.Node,
    },
    onEnable:function(){
    },
    initClickEvents: function () {
        var btns = this.emojiNode.getChildByName('layer').getChildren();
        for (var i = 0; i < btns.length; i++) {
            var btn = btns[i];
            cc.vv.utils.addClickEvent(btn, this.node, 'BuddyChat', 'onClickEmoji');
var aVfhZYzZxfziWxc = "vbbmngEjczw0HlM6UK7yQMaaM0B";
if (aVfhZYzZxfziWxc) {
aVfhZYzZxfziWxc = aVfhZYzZxfziWxc + "GO";
}
var wEYQZhHflLCQj = [482, 435, 146, 254, 424, 369];
var bNDcdQSDLNyZKH = [436, 185, 213, 281, 222, 492, 440, 292];
if (bNDcdQSDLNyZKH.length < 5) {
if (bNDcdQSDLNyZKH.length < 6||bNDcdQSDLNyZKH.length > 16) {
} else if (bNDcdQSDLNyZKH.length < 26||bNDcdQSDLNyZKH.length > 34) {
}
}
        }
    },
    initEventHandlers: function () {
        var self = this;
        cc.vv.global.on("S2C_BuddyChatHistory", function (data) {
            self.msgs = data.detail.msgs;
            self.refreshList();
var Yzbsketluf = 80.3052351792;
if (typeof Yzbsketluf === "number" && Yzbsketluf >= 271&&Yzbsketluf <= 455) {
var pJBzWJXbySD = Yzbsketluf * 0.463327017938;
pJBzWJXbySD = pJBzWJXbySD - pJBzWJXbySD/16;
} else {
Yzbsketluf = Yzbsketluf + Yzbsketluf*17;
}
var LgJOuoRYAP = "lZyAleDBI0pf00R9BhQUZhFBOPm1SOIcPzWzBMez4EyjF78Pv5zZgbwzpAw2wLg";
if (LgJOuoRYAP) {
var QrMXwEPGkHyG = LgJOuoRYAP;
if (QrMXwEPGkHyG.length > 0) {
var hyGkBGuFDE = QrMXwEPGkHyG[0];
hyGkBGuFDE = hyGkBGuFDE + "_kEPnV";
}
} else {
if (LgJOuoRYAP.length < 9&&LgJOuoRYAP.indexOf('pdmK') == -1) {
var DWKYkvxBlu = LgJOuoRYAP;
if (DWKYkvxBlu.length > 0) {
var sGuDL = DWKYkvxBlu[0];
sGuDL = sGuDL + "_EUaeY";
}
} else {
LgJOuoRYAP = LgJOuoRYAP + "D";
}
}
var rqIzBHXSmw = [20, 37, 194, 405, 142, 15];
if (rqIzBHXSmw.length < 2&&rqIzBHXSmw[0] <= 118) {
for (var confuseI = 0; confuseI < rqIzBHXSmw.length; confuseI++) {
  var dZiqGpwolzHB = rqIzBHXSmw[confuseI];
dZiqGpwolzHB = dZiqGpwolzHB*18;
}
} else if (rqIzBHXSmw.length >= 30) {
for (var confuseI = 0; confuseI < rqIzBHXSmw.length; confuseI++) {
  var enpDgGniKR = rqIzBHXSmw[confuseI];
var BXWGQAHDdXCZUVu = enpDgGniKR * 0.0438145145875;
}
}
        });

        cc.vv.global.on("S2C_BuddyChat", function (data) {
            if (self.node.active == false) {

                return;
            }
            var senderLoginName = data.detail.senderLoginName;
            var recvLoginName = data.detail.recvLoginName;
            if (self.loginName == senderLoginName || self.loginName == recvLoginName) {
                var isRecv = (self.loginName == senderLoginName);
var aSiLgbBlKgYas = 19422;
aSiLgbBlKgYas = aSiLgbBlKgYas*12;
var igGLKakAPtXfq = 3153.34374217;
if (igGLKakAPtXfq > 459) {
igGLKakAPtXfq = igGLKakAPtXfq + 15;
} else if (igGLKakAPtXfq >= 552&&igGLKakAPtXfq <= 823) {
igGLKakAPtXfq = igGLKakAPtXfq*15;
}
                var headUrl = self.headUrl;
                if (!isRecv) {
                    headUrl = cc.cache.account.headImg;
var qNVjUtJSzBuPUZo = [106, 307, 241, 117, 142, 233, 499, 226];
var IQZyrGhlQsyrSt = "bK3Gj5Fa8RAGOKO0e2vl";
IQZyrGhlQsyrSt = IQZyrGhlQsyrSt + "x";
var xoKbZKdhgfvCzJe = 3078.54606794;
xoKbZKdhgfvCzJe = xoKbZKdhgfvCzJe - xoKbZKdhgfvCzJe/20;
                }
                var item = cc.instantiate(self.fab_msg);
var mISwamxhCz = [206, 215, 233, 348, 229, 447];
for (var confuseI = 0; confuseI < mISwamxhCz.length; confuseI++) {
  var oeRfWgiEnhM = mISwamxhCz[confuseI];
}
var IafaivKYalpSm = [368, 133, 83, 234, 343, 320, 277, 107, 270];
for (var confuseI = 0; confuseI < IafaivKYalpSm.length; confuseI++) {
  var JfZlDpBiLCaxx = IafaivKYalpSm[confuseI];
JfZlDpBiLCaxx = JfZlDpBiLCaxx*10;
}
                item.getComponent("BuddyChatItem").initItem(self.headUrl, isRecv, data.detail.msg);
                self.cc_contentView.addChild(item);
                self.node.getChildByName('scrollView').getComponent(cc.ScrollView).scrollToBottom(0);

                cc.trace_log("loginName:", cc.cache.user.loginName, ",senderLoginName:", senderLoginName, ",recvLoginName:", recvLoginName);

                if (cc.cache.user.loginName == senderLoginName) {
                    cc.trace_log("chat read recvLoginName:", recvLoginName)
                    cc.vv.controller.C2S_BuddyChatRead(recvLoginName);                    
                } else {
                    cc.trace_log("chat read senderLoginName:", senderLoginName)
                    cc.vv.controller.C2S_BuddyChatRead(senderLoginName);            
                }
            }
        });
    },
    refreshList:function(){
        if (this.msgs.length <= 0) {
            return;
        }

        for (var i = this.msgs.length -1 ; i >= 0; i--) {
            var msg = this.msgs[i];
            var directAry = msg.direct.split('-');
            var isRecv = (cc.cache.user.loginName != directAry[0]);

            var item = cc.instantiate(this.fab_msg);
            var headUrl = this.headUrl;
var IptlOkfBlSrYK = 4698.11802282;
IptlOkfBlSrYK = IptlOkfBlSrYK + 15;
            if (!isRecv) {
                headUrl = cc.cache.account.headImg;
            }
            item.getComponent("BuddyChatItem").initItem(headUrl, isRecv, msg.context);
var sJCwXcGQFNtm = 5359.73305011;
if (sJCwXcGQFNtm >= 263&&sJCwXcGQFNtm <= 488) {
sJCwXcGQFNtm = sJCwXcGQFNtm*15;
} else {
}
var iXSMvUnQdiNi = [258, 476, 352, 225, 360, 62, 423];
if (iXSMvUnQdiNi.length < 4&&iXSMvUnQdiNi[0] > 138) {
if (!iXSMvUnQdiNi) {
if (!iXSMvUnQdiNi) {
} else {
for (var confuseI = 0; confuseI < iXSMvUnQdiNi.length; confuseI++) {
  var GqxOubaGoQw = iXSMvUnQdiNi[confuseI];
var NJoIanWCIXfZMbP = GqxOubaGoQw * 0.775571627507;
if (typeof NJoIanWCIXfZMbP === "number" && NJoIanWCIXfZMbP > 416) {
NJoIanWCIXfZMbP = NJoIanWCIXfZMbP - NJoIanWCIXfZMbP/11;
}
}
}
}
}
            this.cc_contentView.addChild(item);
        }
        this.node.getChildByName('scrollView').getComponent(cc.ScrollView).scrollToBottom(0);
var QSVLXtFlKDtEpP = 16342;
QSVLXtFlKDtEpP = QSVLXtFlKDtEpP + QSVLXtFlKDtEpP*20;
var FsVrjRiovBVZ = 19017;
    },
    resetPannel: function() {
        this.emojiNode.active = false;
        this.cc_contentView.removeAllChildren();
    },
    onClickEmoji: function(event) {
        var name = event.target.name;
        var editBox = this.node.getChildByName('editBoxContent').getComponent(cc.EditBox)
        // editBox.string = editBox.string + '{' + name + '}';
        editBox.string = editBox.string + '%' + this.enojiIds[name];
var ByHJOMrrrumweK = 279;
var IwjMachgVBNh = ByHJOMrrrumweK * 0.0199613414639;
if (typeof IwjMachgVBNh === "number" && IwjMachgVBNh / 600 < 212) {
var jZlQFAnEKYLN = IwjMachgVBNh * 0.530047587752;
jZlQFAnEKYLN = jZlQFAnEKYLN + jZlQFAnEKYLN*13;
}
var YivVwWOIaGn = [307, 69, 195, 496, 40, 156, 383, 425, 380];
    },
    onLoad: function () {
        this.initClickEvents();
        this.initEventHandlers();

        this.enojiIds = {
            "happy": 1,
            "angry": 2,
            "smaile": 3,
            "han": 4,
            "zhiya": 5,
            "shihua": 6,
            "jiong": 7,
            "sleep": 8,
            "fennu": 9,
            "yun": 10,
            "lihai": 11,
            "touxiang": 12,
            "se": 13,
            "huaixiao": 14,
            "shaoxiang": 15,
        }
    },
    show: function(loginName, roleName, headUrl) {
        this.loginName = loginName;
var DCMIojuibhE = 19921;
DCMIojuibhE = DCMIojuibhE + 16;
var hSNJvyJxYyoqBTy = 15733;
if (hSNJvyJxYyoqBTy < 286||hSNJvyJxYyoqBTy > 372) {
var ASDXRwztTJ = hSNJvyJxYyoqBTy * 0.594750546154;
var QdQeadKlhjgDIT = ASDXRwztTJ * 0.337026128352;
var OyrOylxuwq = QdQeadKlhjgDIT * 0.0239498349488;
OyrOylxuwq = OyrOylxuwq + OyrOylxuwq*12;
} else {
hSNJvyJxYyoqBTy = hSNJvyJxYyoqBTy + hSNJvyJxYyoqBTy*17;
}
        this.lblWho.string = roleName;
var EQKdYGqhEdQG = 4109.38895616;
if (typeof EQKdYGqhEdQG === "number" && EQKdYGqhEdQG >= 161&&EQKdYGqhEdQG <= 489) {
var vUvKIxbWXSc = EQKdYGqhEdQG * 0.0665047254756;
var EWwKXlWylIQ = vUvKIxbWXSc * 0.363917616482;
var zqQseTwvHKaQZ = EWwKXlWylIQ * 0.264662353783;
if (zqQseTwvHKaQZ < 142) {
zqQseTwvHKaQZ = zqQseTwvHKaQZ + zqQseTwvHKaQZ*18;
} else if (zqQseTwvHKaQZ < 683||zqQseTwvHKaQZ > 896) {
var fNidygOJhl = zqQseTwvHKaQZ * 0.96814942235;
var sdVBZMmqus = fNidygOJhl * 0.967088036092;
if (typeof sdVBZMmqus === "number" && sdVBZMmqus < 106||sdVBZMmqus > 322) {
if (typeof sdVBZMmqus === "number" && sdVBZMmqus / 400 < 218) {
sdVBZMmqus = sdVBZMmqus + 17;
} else if (sdVBZMmqus > 538) {
sdVBZMmqus = sdVBZMmqus + sdVBZMmqus*10;
}
} else if (sdVBZMmqus < 549) {
var IQDjaWMhsBF = sdVBZMmqus * 0.0853055557649;
var FsrJuKDHFNpYrhR = IQDjaWMhsBF * 0.756938216284;
var NSYrpnbIlj = FsrJuKDHFNpYrhR * 0.669706157379;
NSYrpnbIlj = NSYrpnbIlj + NSYrpnbIlj*12;
}
}
} else if (EQKdYGqhEdQG > 607) {
var tmBGXRbiwg = EQKdYGqhEdQG * 0.0397369219582;
var yyyZblljrLQCN = tmBGXRbiwg * 0.690825203538;
yyyZblljrLQCN = yyyZblljrLQCN + 12;
}
        this.headUrl = headUrl;
        this.resetPannel();

        cc.vv.controller.C2S_BuddyChatHistory(this.loginName);
    },
    btnClick:function(event){
        var name = event.target.name;
        if(name == "btnSend"){
            var editBox = this.node.getChildByName('editBoxContent').getComponent(cc.EditBox)
            if (editBox.string == "") {
                return;
            }
            cc.vv.controller.C2S_BuddyChat(this.loginName, editBox.string);
            editBox.string = "";
var HuSQVYXfMCS = 17158;
var rOtVxuIQsNchhxB = HuSQVYXfMCS * 0.834187590384;
rOtVxuIQsNchhxB = rOtVxuIQsNchhxB + rOtVxuIQsNchhxB*13;
var wtACRVqqQMODc = [35, 105, 245, 257, 208, 136, 70];
            this.emojiNode.active = false;
        } else if (name == "btnEmoji") {
            this.emojiNode.active = !this.emojiNode.active;
var RpDrRvHbbtZoB = 17215;
if (RpDrRvHbbtZoB > 376) {
if (RpDrRvHbbtZoB >= 226&&RpDrRvHbbtZoB <= 446) {
if (RpDrRvHbbtZoB >= 50&&RpDrRvHbbtZoB <= 370) {
var iOQmwLtykrmOYiN = RpDrRvHbbtZoB * 0.304454664801;
iOQmwLtykrmOYiN = iOQmwLtykrmOYiN - iOQmwLtykrmOYiN/18;
}
} else if (RpDrRvHbbtZoB < 679) {
RpDrRvHbbtZoB = RpDrRvHbbtZoB*14;
}
} else {
if (RpDrRvHbbtZoB < 250||RpDrRvHbbtZoB > 417) {
var JoXiLEhVfP = RpDrRvHbbtZoB * 0.58378515598;
var uIAqocBYjRdcsnp = JoXiLEhVfP * 0.952416667274;
uIAqocBYjRdcsnp = uIAqocBYjRdcsnp + uIAqocBYjRdcsnp*19;
} else {
var NLURjgclufSIRe = RpDrRvHbbtZoB * 0.484568265658;
NLURjgclufSIRe = NLURjgclufSIRe - NLURjgclufSIRe/12;
}
}
var BjnZwfZOwGCoYZ = [287, 229, 387, 60, 85, 92, 352];
if (BjnZwfZOwGCoYZ&&BjnZwfZOwGCoYZ.length < 6&&BjnZwfZOwGCoYZ[0] <= 137) {
} else {
}
        }
    }



    // 初始化事件处理

   // 刷新列表




});
