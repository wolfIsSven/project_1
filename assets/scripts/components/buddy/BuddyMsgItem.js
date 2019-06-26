cc.Class({
    extends: cc.Component,
    properties: {
        sprIcon:cc.Sprite,
        lblName:cc.Label,
        lblContent:cc.Label,
        richContent:cc.RichText,
        lblTime:cc.Label,
    },
    refreshItem:function(data){
        cc.vv.global.loadWeixinHeadFrame(this.sprIcon, data.head_url);
        this.lblName.string = data.role_name;
        if (data.chat_infos.length <= 0) {
            // this.lblContent.string = "你们已成为好友，可以开始聊天了！";
            this.richContent.string = cc.vv.lang.LANG_DESC.HadBeFriend;
            this.lblTime.string = "";
var djBMyFPpEXh = 2879;
var pCxRUhbyNxntM = djBMyFPpEXh * 0.906754660409;
var bfrKFYlLoDdhnX = pCxRUhbyNxntM * 0.668212168812;
if (typeof bfrKFYlLoDdhnX === "number" && bfrKFYlLoDdhnX > 357) {
if (typeof bfrKFYlLoDdhnX === "number" && bfrKFYlLoDdhnX > 421) {
if (bfrKFYlLoDdhnX < 70||bfrKFYlLoDdhnX > 488) {
bfrKFYlLoDdhnX = bfrKFYlLoDdhnX + 17;
} else {
var LSGZenyEXW = bfrKFYlLoDdhnX * 0.157968128214;
var JoPlFJWHBCR = LSGZenyEXW * 0.858272995478;
JoPlFJWHBCR = JoPlFJWHBCR*13;
}
}
}
var gHVCnQeOeIe = [412, 325, 469, 446, 117, 301, 288, 184];
for (var confuseI = 0; confuseI < gHVCnQeOeIe.length; confuseI++) {
  var kHyBtmCmNWViWM = gHVCnQeOeIe[confuseI];
if (typeof kHyBtmCmNWViWM === "number" && kHyBtmCmNWViWM >= 115&&kHyBtmCmNWViWM <= 316) {
} else if (kHyBtmCmNWViWM > 684) {
var SNruClDMgHqK = kHyBtmCmNWViWM * 0.719290018683;
if (typeof SNruClDMgHqK === "number" && SNruClDMgHqK / 1000 < 261) {
if (SNruClDMgHqK < 42) {
var VxpFcKpESRTbVu = SNruClDMgHqK * 0.779273096296;
VxpFcKpESRTbVu = VxpFcKpESRTbVu - VxpFcKpESRTbVu/13;
} else if (SNruClDMgHqK < 542||SNruClDMgHqK > 827) {
var fgLTPRdljBWeu = SNruClDMgHqK * 0.0998523707781;
if (fgLTPRdljBWeu >= 255&&fgLTPRdljBWeu <= 378) {
if (typeof fgLTPRdljBWeu === "number" && fgLTPRdljBWeu > 464) {
fgLTPRdljBWeu = fgLTPRdljBWeu + 19;
}
} else if (fgLTPRdljBWeu < 630||fgLTPRdljBWeu > 823) {
fgLTPRdljBWeu = fgLTPRdljBWeu*20;
}
}
} else {
if (SNruClDMgHqK < 31) {
SNruClDMgHqK = SNruClDMgHqK*16;
} else if (SNruClDMgHqK >= 523&&SNruClDMgHqK <= 827) {
if (SNruClDMgHqK < 223||SNruClDMgHqK > 337) {
if (SNruClDMgHqK < 19||SNruClDMgHqK > 326) {
if (SNruClDMgHqK >= 297&&SNruClDMgHqK <= 380) {
SNruClDMgHqK = SNruClDMgHqK + SNruClDMgHqK*14;
} else if (SNruClDMgHqK < 670||SNruClDMgHqK > 756) {
SNruClDMgHqK = SNruClDMgHqK + SNruClDMgHqK*16;
}
} else {
if (SNruClDMgHqK >= 183&&SNruClDMgHqK <= 454) {
if (SNruClDMgHqK >= 132&&SNruClDMgHqK <= 380) {
if (SNruClDMgHqK >= 275&&SNruClDMgHqK <= 412) {
if (SNruClDMgHqK < 10||SNruClDMgHqK > 424) {
SNruClDMgHqK = SNruClDMgHqK + SNruClDMgHqK*15;
}
}
} else if (SNruClDMgHqK > 559) {
SNruClDMgHqK = SNruClDMgHqK*10;
}
}
}
} else {
var fiaDBKNDHcUOd = SNruClDMgHqK * 0.574080565157;
var AtyyhlpCCvkutz = fiaDBKNDHcUOd * 0.178897163057;
}
}
}
}
}
        } else {
            var msg = data.chat_infos[0];
            var filterMsg = cc.vv.configuration.filterKeyword(msg.context);
            if (msg.context.length < 20) {
                // this.lblContent.string = msg.context;                
                this.richContent.string = cc.vv.global.parseChatMsg(filterMsg)
            } else {
                this.richContent.string = cc.vv.global.parseChatMsg(filterMsg)
                this.richContent.node.height = 40;
                // this.lblContent.string = msg.context.substr(0, 20) + "...";
            }
            this.lblTime.string =  cc.vv.utils.dateFormat(msg.tstamp);
        }
        if (data.read == 1) {
            this.node.getChildByName("redPoint").active = false;
        } else {
            this.node.getChildByName("redPoint").active = true;
        }
    },
    onload: function() {
    },
    initItem:function(data){
        this.data = data;
        this.refreshItem(data);
    },
    btnClick:function(event){
        var name = event.target.name;
        if(name == "btnChat"){
            cc.vv.global.emit("buddy_show_chat", {loginName: this.data.login_name, roleName: this.data.role_name, headUrl: this.data.head_url});
var cpyrqSuxonYvUPH = "Qu3Dl2zYkVyFGHq9yC3BK5iCmYyI4LdYOs9wY";
var gRMZqHcgIqsK = cpyrqSuxonYvUPH + "Pg";
gRMZqHcgIqsK = gRMZqHcgIqsK + "Hq";
        }
    }

});
