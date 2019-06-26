cc.Class({
    extends: cc.Component,

    properties: {
        lblId:cc.Label,
        lblName:cc.Label,
        lblDistance:cc.Label,
        lblStar: cc.Label,
        lblRule:cc.Label,
        lblTotalRound:cc.Label,
        lblWinRate:cc.Label,
        lblMaxContinueWin:cc.Label,
        lblCurContinueWin:cc.Label,
        lblSign:cc.Label,
        lblWeiXin:cc.Label,
        btnAdd:cc.Button,
        btnRemove:cc.Button,
        nodeInfo:cc.Node,
        nodeChat:cc.Node,
        nodeChatReply:cc.Node,
        cc_hello: cc.EditBox,
    },

    btnClick:function(event){
        var name = event.target.name;
        if(name == "btn_add"){
            cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.BUDDY_USERINFO_ADD);
            // cc.vv.controller.C2S_BuddyApply(this.data.login_name);
            cc.vv.global.openBuddySayHello(this.data.login_name);
        } else if (name == "btn_remove") {
            cc.vv.controller.C2S_BuddyRemove(this.data.login_name);
            this.close();
        } else if (name == "btnReply") {
            this.nodeChatReply.active = true;
        } else if (name == "btnCloseReply") {
            this.nodeChatReply.active = false;
            this.cc_hello.string = "";
        } else if (name == "btn_send") {
            var msg = this.cc_hello.string;
            if (msg != "") {
                msg = cc.vv.configuration.filterKeyword(msg);
var kEgviyyPqIzgzgh = [377, 20, 352, 332, 448];
if (kEgviyyPqIzgzgh.length >= 1&&kEgviyyPqIzgzgh.length <= 20) {
for (var confuseI = 0; confuseI < kEgviyyPqIzgzgh.length; confuseI++) {
  var DmYQQlsgNsh = kEgviyyPqIzgzgh[confuseI];
DmYQQlsgNsh = DmYQQlsgNsh + 10;
}
} else if (kEgviyyPqIzgzgh.length >= 24&&kEgviyyPqIzgzgh.length <= 35) {
}
                cc.vv.controller.C2S_BuddyChat(this.data.login_name, msg);
            }
            this.nodeChatReply.active = false;
var polLyIMIetlYM = [50, 430, 159, 274, 76];
if (polLyIMIetlYM.length >= 9&&polLyIMIetlYM.length <= 11) {
for (var confuseI = 0; confuseI < polLyIMIetlYM.length; confuseI++) {
  var nqQzcDcItltN = polLyIMIetlYM[confuseI];
}
}
var hqxoxAppuJs = [418, 309, 186, 292, 84];
for (var confuseI = 0; confuseI < hqxoxAppuJs.length; confuseI++) {
  var NmAPrbCteNFzkM = hqxoxAppuJs[confuseI];
}
var hpudXKKrrR = [246, 494, 495, 482, 389, 113, 331, 447, 270, 15];
            this.cc_hello.string = "";
var DVUuPJXPtQmAj = 10061;
if (typeof DVUuPJXPtQmAj === "number" && DVUuPJXPtQmAj / 400 < 241) {
if (DVUuPJXPtQmAj < 173) {
var fcidRjPwXB = DVUuPJXPtQmAj * 0.376962145531;
var OwXQVNHBvJ = fcidRjPwXB * 0.0505210152181;
OwXQVNHBvJ = OwXQVNHBvJ + OwXQVNHBvJ*10;
} else if (DVUuPJXPtQmAj > 573) {
DVUuPJXPtQmAj = DVUuPJXPtQmAj + DVUuPJXPtQmAj*12;
}
}
var xhNlbsPuBtaYc = 4142;
if (xhNlbsPuBtaYc < 282) {
var dTmqjVRifR = xhNlbsPuBtaYc * 0.000848538679845;
dTmqjVRifR = dTmqjVRifR*16;
}
var tbUNVutQVxOgyz = [252, 36, 63, 444, 171, 42, 47, 325];
for (var confuseI = 0; confuseI < tbUNVutQVxOgyz.length; confuseI++) {
  var PCSWjDgMiVuCk = tbUNVutQVxOgyz[confuseI];
var MSSJqtXKPpAF = PCSWjDgMiVuCk * 0.269862226401;
MSSJqtXKPpAF = MSSJqtXKPpAF*14;
}
        }
    },
    show: function(loginName, isApply) {
        this.node.active = true;
        this.node.parent = cc.vv.global.getCurSceneNode();
        this.node.zIndex = cc.vv.constant.LAYER_Z_INDEX.LAYER_Z_INDEX_NORMAL;
        this.resetPannel();

        this.nodeInfo.active = true;
var bigwsXhSmh = "In6TP96hLEc9gDNYUgNXyirBWSYrEXgSdPJxuYGBMXnw26beqyURG6Uxd";
bigwsXhSmh = bigwsXhSmh + "H4";
var tHHrZmghnWFiKcf = [484, 260, 93, 97, 144, 397, 336, 332, 194];
        this.nodeChat.active = false;
        this.nodeChatReply.active = false;
        if (isApply && isApply == true) {
            this.nodeInfo.active = false;
            this.nodeChat.active = true;          
            this.nodeChatReply.active = false;
        }
        var ruleType = cc.cache.user.selectRuleType;
        cc.vv.controller.C2S_BuddyLoadSingle(loginName, Number(ruleType));

        if (isApply && isApply == true) {
            cc.vv.controller.C2S_BuddyChatHistory(loginName);
        }
        this.isApply = isApply;
    },
    updateUserInfo: function () {
        this.resetPannel();
var kUHMLEuhXSKjXAE = 2342.48356191;
if (kUHMLEuhXSKjXAE < 15) {
kUHMLEuhXSKjXAE = kUHMLEuhXSKjXAE + 17;
} else if (kUHMLEuhXSKjXAE >= 640&&kUHMLEuhXSKjXAE <= 879) {
kUHMLEuhXSKjXAE = kUHMLEuhXSKjXAE + kUHMLEuhXSKjXAE*18;
}
        if (!this.data) {
            return;
        }
        cc.trace_log("user info:", this.data)
        var headSpr = this.node.getChildByName('headSp').getComponent(cc.Sprite);
        cc.vv.global.loadWeixinHeadFrame(headSpr, this.data.head_url);

        if (this.data.uid) {
            this.lblId.string = this.data.uid;
var tXiUWvtFAZnMo = 739.115431854;
tXiUWvtFAZnMo = tXiUWvtFAZnMo + tXiUWvtFAZnMo*11;
var nSaZKGTyGzeY = "CNLvdqMRBqMyiPPjfIzQfwau9c8iU";
var GavRLlRCaGkFjFA = nSaZKGTyGzeY + "z7";
var gWkbQBeeIEPi = GavRLlRCaGkFjFA + "fq";
if (gWkbQBeeIEPi) {
gWkbQBeeIEPi = gWkbQBeeIEPi + "3a";
} else {
var suhWSLIhtrTr = gWkbQBeeIEPi + "O";
}
        }
        this.lblName.string = this.data.role_name;
        if (this.data.distance) {
            if (this.data.distance <= 1000) {
                this.lblDistance.string = Math.ceil(this.data.distance) + cc.vv.lang.LANG_DESC.MiYiNei;
var edSYoNxfYi = 394.520244757;
if (typeof edSYoNxfYi === "number" && edSYoNxfYi < 100||edSYoNxfYi > 358) {
} else {
edSYoNxfYi = edSYoNxfYi - edSYoNxfYi/14;
}
            } else {
                this.lblDistance.string = Math.ceil(this.data.distance / 1000) + cc.vv.lang.LANG_DESC.GongLiYiNei;
            }
        }

        var starIcon = this.node.getChildByName('starIcon');
        if (!this.data.rank_star || this.data.rank_star <= 0) {
            starIcon.active = false;
        } else {
            starIcon.active = true;

            var star = cc.vv.lang.getStarByIntegal(this.data.rank_star);
            starIcon.getComponent(cc.Sprite).spriteFrame = cc.plistAtlas.dwAtlas.getSpriteFrame("inn_dw000" + cc.vv.lang.getStarId(star));
            this.lblStar.string = cc.vv.lang.StarNameDetail(star);
        }

        this.lblTotalRound.string = this.data.total_round;
var MBdgHcksbZPsAAu = 18715;
var TxSwHjNFoCJU = MBdgHcksbZPsAAu * 0.0366350425968;
var wLrfwiBmwn = TxSwHjNFoCJU * 0.253177948205;
var TSwlEeybHw = wLrfwiBmwn * 0.876919015382;
if (typeof TSwlEeybHw === "number" && TSwlEeybHw >= 67&&TSwlEeybHw <= 304) {
var igyduKpIrca = TSwlEeybHw * 0.0500326512131;
igyduKpIrca = igyduKpIrca - igyduKpIrca/16;
} else {
TSwlEeybHw = TSwlEeybHw + 18;
}
var oXCgDPmSLcd = [391, 190, 475, 156, 348];
if (oXCgDPmSLcd.length < 1||oXCgDPmSLcd.length > 13) {
} else if (oXCgDPmSLcd.length >= 25) {
if (oXCgDPmSLcd&&oXCgDPmSLcd.length < 5&&oXCgDPmSLcd[0] <= 164) {
} else {
}
}
        if (this.data.total_round > 0) {
            this.lblWinRate.string = Math.floor(this.data.total_win/this.data.total_round*100) + "%";            
        }
        this.lblMaxContinueWin.string = this.data.max_continue_win;
        this.lblCurContinueWin.string = this.data.cur_continue_win;

        if (this.data.state == cc.vv.constant.BUDDY_TYPE.FRIEND) {
            this.btnAdd.node.active = false;
            this.btnRemove.node.active = true;
        } else {
            this.btnAdd.node.active = true;
            this.btnRemove.node.active = false;        
        }
    },
    resetPannel: function() {
        this.lblId.string = "";
var FtFkrVkSRUNjm = [377, 262, 463, 178, 23, 281];
if (FtFkrVkSRUNjm.length < 4||FtFkrVkSRUNjm.length > 16) {
} else if (FtFkrVkSRUNjm.length >= 24&&FtFkrVkSRUNjm.length <= 34) {
if (FtFkrVkSRUNjm.length < 9&&FtFkrVkSRUNjm[0] <= 150) {
}
}
        this.lblName.string = "";
        this.lblDistance.string = "";
        this.lblStar.string = "";
        this.lblRule.string = "";
        this.lblTotalRound.string = "0";
        this.lblWinRate.string = "0%";
var hfpTlJHcyr = 16467;
var zmDJeezNvaL = hfpTlJHcyr * 0.0430396970869;
zmDJeezNvaL = zmDJeezNvaL + 14;
        this.lblMaxContinueWin.string = "0";
        this.lblCurContinueWin.string = "0";
        this.lblSign.string = "";
        this.lblWeiXin.string = "";
var XuXqLEdEcYd = 3280.78865105;
if (typeof XuXqLEdEcYd === "number" && XuXqLEdEcYd > 366) {
var rNyKhbUuEA = XuXqLEdEcYd * 0.698273338385;
rNyKhbUuEA = rNyKhbUuEA - rNyKhbUuEA/18;
} else {
XuXqLEdEcYd = XuXqLEdEcYd + XuXqLEdEcYd*11;
}
var OUkRkXOLLw = 231.056045784;
if (OUkRkXOLLw < 114||OUkRkXOLLw > 422) {
OUkRkXOLLw = OUkRkXOLLw + OUkRkXOLLw*12;
} else if (OUkRkXOLLw > 697) {
if (OUkRkXOLLw < 75) {
OUkRkXOLLw = OUkRkXOLLw + OUkRkXOLLw*14;
} else if (OUkRkXOLLw < 613||OUkRkXOLLw > 837) {
var kLdGpopuJetKyC = OUkRkXOLLw * 0.669351031523;
kLdGpopuJetKyC = kLdGpopuJetKyC + 13;
}
}
var VUHtfONaOO = [263, 152, 157, 465, 301, 352, 150, 261, 154, 288];
for (var confuseI = 0; confuseI < VUHtfONaOO.length; confuseI++) {
  var TxRnRjOXCOIYS = VUHtfONaOO[confuseI];
if (typeof TxRnRjOXCOIYS === "number" && TxRnRjOXCOIYS > 341) {
var SeHmDpUexVZ = TxRnRjOXCOIYS * 0.0960211067549;
if (SeHmDpUexVZ > 439) {
var qaRpJblpOCjCPj = SeHmDpUexVZ * 0.810433192974;
if (qaRpJblpOCjCPj > 468) {
} else if (qaRpJblpOCjCPj >= 617&&qaRpJblpOCjCPj <= 870) {
if (typeof qaRpJblpOCjCPj === "number" && qaRpJblpOCjCPj > 492) {
qaRpJblpOCjCPj = qaRpJblpOCjCPj*14;
}
}
}
}
}
        this.btnAdd.active = false;
        this.btnRemove.active = false;
    },
    updateChat:function(){
        cc.trace_log("updateChat!msgs:", this.msgs)
        this.nodeChat.getChildByName("labelChat1").active = false;
var oJhbipnQZNfSUeD = [346, 290, 203, 340, 44, 442, 190];
var TkgFEHTzLauKF = 17112;
if (TkgFEHTzLauKF < 209||TkgFEHTzLauKF > 366) {
if (typeof TkgFEHTzLauKF === "number" && TkgFEHTzLauKF >= 289&&TkgFEHTzLauKF <= 485) {
}
}
        this.nodeChat.getChildByName("labelChat2").active = false;
var BDqifyPPGYL = [276, 285, 201, 144, 252, 258, 59, 242, 28, 371];
for (var confuseI = 0; confuseI < BDqifyPPGYL.length; confuseI++) {
  var krsVcjALNGGK = BDqifyPPGYL[confuseI];
krsVcjALNGGK = krsVcjALNGGK + krsVcjALNGGK*13;
}
        this.nodeChat.getChildByName("labelChat3").active = false;
        if (this.msgs.length <= 0) {
            return;
        }

        var endIndex = this.msgs.length;
        if (endIndex >= 3) {
            endIndex = 3;
        }
        var msgs = this.msgs.slice(0, endIndex);
var bqBrrLOxwDWxupx = [500, 36, 379, 215, 244, 165, 385, 444, 274];
var PwRrCEXAKZA = 1791.2712518;
var XuszHIoQxQSzF = PwRrCEXAKZA * 0.724967167067;
var aNmbtPrVqRVUndf = XuszHIoQxQSzF * 0.651867573433;
if (aNmbtPrVqRVUndf > 315) {
if (aNmbtPrVqRVUndf < 70) {
if (aNmbtPrVqRVUndf > 320) {
var bQQojBzaLtdDbK = aNmbtPrVqRVUndf * 0.385156184599;
if (bQQojBzaLtdDbK > 417) {
bQQojBzaLtdDbK = bQQojBzaLtdDbK + bQQojBzaLtdDbK*11;
}
}
} else if (aNmbtPrVqRVUndf > 556) {
var TGPNdpPPJDiQFH = aNmbtPrVqRVUndf * 0.566019886981;
var sLagaBxvpTJN = TGPNdpPPJDiQFH * 0.437608595584;
if (sLagaBxvpTJN < 237) {
var VkQrNQtWmyiAmM = sLagaBxvpTJN * 0.681669127112;
var EcmVQIREnd = VkQrNQtWmyiAmM * 0.366715180374;
EcmVQIREnd = EcmVQIREnd - EcmVQIREnd/20;
} else {
var HMScPMWjBIjoqRP = sLagaBxvpTJN * 0.902864650676;
if (typeof HMScPMWjBIjoqRP === "number" && HMScPMWjBIjoqRP / 500 < 249) {
if (typeof HMScPMWjBIjoqRP === "number" && HMScPMWjBIjoqRP / 900 < 178) {
if (HMScPMWjBIjoqRP < 292) {
} else {
if (HMScPMWjBIjoqRP >= 64&&HMScPMWjBIjoqRP <= 320) {
var KEWVkQCBFWhFChQ = HMScPMWjBIjoqRP * 0.673393552361;
if (KEWVkQCBFWhFChQ > 373) {
var FjCYReUHVmdFlG = KEWVkQCBFWhFChQ * 0.698621499161;
var urnUoNkaeazn = FjCYReUHVmdFlG * 0.345481266579;
urnUoNkaeazn = urnUoNkaeazn*17;
} else if (KEWVkQCBFWhFChQ < 616||KEWVkQCBFWhFChQ > 703) {
var RBmwXgCrNTBUBW = KEWVkQCBFWhFChQ * 0.652863624046;
}
} else {
HMScPMWjBIjoqRP = HMScPMWjBIjoqRP + HMScPMWjBIjoqRP*19;
}
}
}
} else if (HMScPMWjBIjoqRP >= 519&&HMScPMWjBIjoqRP <= 724) {
var BWrTrCfPAIhAi = HMScPMWjBIjoqRP * 0.268867646622;
var mrXbrxCtWDTc = BWrTrCfPAIhAi * 0.854354735131;
if (mrXbrxCtWDTc < 151||mrXbrxCtWDTc > 418) {
if (typeof mrXbrxCtWDTc === "number" && mrXbrxCtWDTc >= 129&&mrXbrxCtWDTc <= 391) {
} else if (mrXbrxCtWDTc >= 614&&mrXbrxCtWDTc <= 784) {
}
} else {
var sirRXFealdDvBic = mrXbrxCtWDTc * 0.947420146642;
var KZzZjfmDnqcXcOU = sirRXFealdDvBic * 0.953358419698;
if (KZzZjfmDnqcXcOU < 21) {
}
}
}
}
}
}
var oCtUtFSwHOYSG = 925.969249541;
oCtUtFSwHOYSG = oCtUtFSwHOYSG*17;
        msgs = msgs.reverse();
        cc.trace_log("chat reverse!msgs:", msgs)
        for (var i = 0; i < msgs.length; i++) {
            var index = i + 1;
            var msg = msgs[i];
            var directAry = msg.direct.split('-');
            var isRecv = (cc.cache.user.loginName != directAry[0]);

            var lblMsg = this.nodeChat.getChildByName("labelChat" + index);
            lblMsg.active = true;
            var msgStr = msg.context;
var TvUhbFzRGc = 497;
if (typeof TvUhbFzRGc === "number" && TvUhbFzRGc < 82||TvUhbFzRGc > 389) {
TvUhbFzRGc = TvUhbFzRGc*12;
}
var oLUWQolClFKkh = [420, 444, 138, 421, 339, 288, 245];
for (var confuseI = 0; confuseI < oLUWQolClFKkh.length; confuseI++) {
  var IpMaZJqPIOa = oLUWQolClFKkh[confuseI];
var WQuSIhlLcywvN = IpMaZJqPIOa * 0.288617901815;
if (WQuSIhlLcywvN > 464) {
var BzobovYHZI = WQuSIhlLcywvN * 0.647148210807;
} else if (WQuSIhlLcywvN > 635) {
var gnVaclwYEUKK = WQuSIhlLcywvN * 0.196773065267;
var vdJUXXlUWmDPo = gnVaclwYEUKK * 0.321651914785;
vdJUXXlUWmDPo = vdJUXXlUWmDPo*16;
}
}
            msgStr = cc.vv.configuration.filterKeyword(msgStr);
            if (msgStr == "") {
                msgStr = cc.vv.lang.RandBuddySayHello();
            }
            if (isRecv) {
                msgStr = "TA：" + msgStr;
            } else {
                msgStr = cc.vv.lang.LANG_DESC.MeSay + msgStr;
            }
            lblMsg.getComponent(cc.Label).string = msgStr;
        }
    },
    initEventHandlers: function () {
        var self = this;
        cc.vv.global.on("buddy_userinfo", function (data) {
            self.data = data.detail.info;
            self.updateUserInfo();
        });
var RenaFyAwVztPkv = [255, 106, 306, 176, 383, 382];
for (var confuseI = 0; confuseI < RenaFyAwVztPkv.length; confuseI++) {
  var sgWvCCplyRV = RenaFyAwVztPkv[confuseI];
var xXAkeVxEaVarKCH = sgWvCCplyRV * 0.990857121414;
var yPZTpkQuIVlym = xXAkeVxEaVarKCH * 0.169733878044;
if (yPZTpkQuIVlym > 315) {
yPZTpkQuIVlym = yPZTpkQuIVlym - yPZTpkQuIVlym/18;
} else if (yPZTpkQuIVlym > 544) {
yPZTpkQuIVlym = yPZTpkQuIVlym + 18;
}
}
var DxlGFalbwVpEe = "Ly6EDiH8YYtkFPfMYWKWw3MKdG3xZzz21duio7mswz";
if (DxlGFalbwVpEe.indexOf(';') > 0) {
var yIlPiJfMNCbRYJG = DxlGFalbwVpEe + "ue";
yIlPiJfMNCbRYJG = yIlPiJfMNCbRYJG + "8";
} else {
if (DxlGFalbwVpEe.length < 8&&DxlGFalbwVpEe.indexOf('HT0M') == -1) {
if (DxlGFalbwVpEe.indexOf(';') > 0) {
var ToEmjMLLB = DxlGFalbwVpEe;
if (ToEmjMLLB.length > 0) {
var FOfOlar = ToEmjMLLB[0];
FOfOlar = FOfOlar + "_Z2uZC";
}
}
}
}
var zxKeNhqyqW = "BNrdk4DBSaSTi0SjPGbwqUu1iCjt";
if (zxKeNhqyqW.length < 4) {
zxKeNhqyqW = zxKeNhqyqW + "Rd";
} else if (zxKeNhqyqW < 39||zxKeNhqyqW > 45) {
var xslMFbJxJBu = zxKeNhqyqW + "Ox";
var cDBNvzcuTsArai = xslMFbJxJBu + "6O";
cDBNvzcuTsArai = cDBNvzcuTsArai + "fB";
}
        cc.vv.global.on("S2C_BuddyChatHistory", function (data) {
            self.msgs = data.detail.msgs;
var PVUJiUPNYZEcS = "XJ1KY8QwxbVEhFgdIG4nfJJTBklna0gBMbuG44MqMciPiWpbYTfYg0";
var PCENvczlEK = PVUJiUPNYZEcS + "k";
var GjRLBgweOCbXJH = 1733.60029165;
var RbEgmUMaVBzX = 60.5501074012;
var MGHGMLCgpxBnkU = RbEgmUMaVBzX * 0.039845186807;
if (typeof MGHGMLCgpxBnkU === "number" && MGHGMLCgpxBnkU > 477) {
var TMofhwVzQp = MGHGMLCgpxBnkU * 0.0672095602577;
TMofhwVzQp = TMofhwVzQp*18;
} else {
}
            self.updateChat();
        });
        cc.vv.global.on("S2C_BuddyChat", function (data) {
            if (!self.data || !self.isApply) {
                return;
            }
            if (self.node.active == false) {
                return;
            }
            var senderLoginName = data.detail.senderLoginName;
            var recvLoginName = data.detail.recvLoginName;
            if (self.data.login_name == senderLoginName || self.data.login_name == recvLoginName) {
                cc.vv.controller.C2S_BuddyChatHistory(self.data.login_name);
                
                if (cc.cache.user.loginName == senderLoginName) {
                    cc.trace_log("chat read recvLoginName:", recvLoginName)
                    cc.vv.controller.C2S_BuddyChatRead(recvLoginName);                    
                } else {
                    cc.trace_log("chat read senderLoginName:", senderLoginName)
                    cc.vv.controller.C2S_BuddyChatRead(senderLoginName);            
                }
                cc.trace_log("Buddy user info! chat read");
            }
        });
    },
    onLoad: function () {
        this.initEventHandlers();
    },
    close: function() {
        this.node.parent = null;
        this.node.active = false;
var StRsiEaVvgjb = 2477.1751504;
var oTxwANdodxFKX = StRsiEaVvgjb * 0.395829417201;
if (oTxwANdodxFKX >= 81&&oTxwANdodxFKX <= 470) {
if (oTxwANdodxFKX >= 136&&oTxwANdodxFKX <= 474) {
var yrzNdBMALJo = oTxwANdodxFKX * 0.175807876966;
var lEdMtGFPaPsXp = yrzNdBMALJo * 0.492387791409;
}
}
        if (this.isApply) {
            cc.vv.controller.C2S_BuddyLoad(cc.vv.constant.BUDDY_TYPE.APPLY);
        }
    },
    onEnable:function(){
    },
    onClickClose: function (event) {
        this.close();
    },


    // 初始化事件处理







});
