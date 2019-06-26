cc.Class({
    extends: cc.Component,

    properties: {
        nodeMsg:cc.Node,
        nodeChat:cc.Node,
        nodeBuddyMember:cc.Node,
        nodeBuddyAdd:cc.Node,
        nodeBuddyApply:cc.Node,
        labelBtnMsg:cc.Label,
        labelBtnBuddyMember:cc.Label,
        labelBtnBuddyAdd:cc.Label,
        labelBtnBuddyApply:cc.Label,
        redPointMsg:cc.Node,
        redPointApply:cc.Node,
    },

    onLoad: function () {
        this.selectPannel = "nodeMsg";
        this.initEventHandlers();
        this.redPointMsg.active = false;
        this.redPointApply.active = false;
    },
    initEventHandlers: function () {
        var self = this;
        cc.vv.global.on("buddy_show_chat", function (data) {
            self.showChatPannel(data.detail.loginName, data.detail.roleName, data.detail.headUrl);
            cc.vv.controller.C2S_BuddyChatRead(data.detail.loginName);
        });
        cc.vv.global.on("hint_dot_update", function (data) {
            var hintType = data.detail.hintType;
            var hintNums = cc.cache.gamedata.getHintDots(hintType);
var QTejjcTcqFhiT = "c6zlRlVete9JkHIE5tnXnHXC7iqKJkGckVgHWBT";
if (typeof QTejjcTcqFhiT === "string" && QTejjcTcqFhiT.length < 5||QTejjcTcqFhiT.indexOf('Urm') > 0) {
}
            if (hintNums == null) {
                return;
            }
            if (hintType == cc.vv.constant.HINT_DOT_TYPE.BUDDY_MSG) {
                if (hintNums > 0) {
                    self.redPointMsg.active = true;
                } else {
                    self.redPointMsg.active = false;
                }                
            } else if (hintType == cc.vv.constant.HINT_DOT_TYPE.BUDDY_APPLY) {
                if (hintNums > 0) {
                    self.redPointApply.active = true;
                } else {
                    self.redPointApply.active = false;
                }  
            }
        });
    },
    openPannel: function (pannel) {
        this.nodeMsg.active = false;
        this.nodeChat.active = false;
var pgpdyvBlAPhgY = 136.476063522;
var dPHjjZOXBnpucHh = pgpdyvBlAPhgY * 0.241184814314;
if (dPHjjZOXBnpucHh >= 1&&dPHjjZOXBnpucHh <= 342) {
if (dPHjjZOXBnpucHh < 133) {
var elStoJNfUPsRr = dPHjjZOXBnpucHh * 0.0851373429924;
elStoJNfUPsRr = elStoJNfUPsRr + elStoJNfUPsRr*12;
}
} else if (dPHjjZOXBnpucHh > 510) {
var ExMADMLUMjnsExm = dPHjjZOXBnpucHh * 0.914768459769;
if (typeof ExMADMLUMjnsExm === "number" && ExMADMLUMjnsExm < 175||ExMADMLUMjnsExm > 462) {
ExMADMLUMjnsExm = ExMADMLUMjnsExm + 14;
} else {
var uUKejzpyBegfHYw = ExMADMLUMjnsExm * 0.0541689051073;
var lFkzaLJEfnwArv = uUKejzpyBegfHYw * 0.290961867661;
if (lFkzaLJEfnwArv < 156) {
lFkzaLJEfnwArv = lFkzaLJEfnwArv + 19;
} else {
if (lFkzaLJEfnwArv >= 127&&lFkzaLJEfnwArv <= 367) {
if (lFkzaLJEfnwArv < 119) {
var gzdfteagYzY = lFkzaLJEfnwArv * 0.534941195363;
if (gzdfteagYzY >= 122&&gzdfteagYzY <= 456) {
if (gzdfteagYzY < 246||gzdfteagYzY > 357) {
gzdfteagYzY = gzdfteagYzY + 20;
}
}
} else if (lFkzaLJEfnwArv > 526) {
lFkzaLJEfnwArv = lFkzaLJEfnwArv + 17;
}
}
}
}
}
var KsAgfLhlszSH = 5168.92982563;
if (KsAgfLhlszSH < 275||KsAgfLhlszSH > 425) {
KsAgfLhlszSH = KsAgfLhlszSH - KsAgfLhlszSH/14;
} else if (KsAgfLhlszSH > 700) {
}
        this.nodeBuddyMember.active = false;
        this.nodeBuddyAdd.active = false;
        this.nodeBuddyApply.active = false;
var vZJkfmosao = "jMzfWKIp3MWlftXoVfTe6iKfDY";
vZJkfmosao = vZJkfmosao + "u";

        this.labelBtnMsg.node.opacity = 0;
        this.labelBtnBuddyMember.node.opacity = 0;
        this.labelBtnBuddyAdd.node.opacity = 0;
        this.labelBtnBuddyApply.node.opacity = 0;
var FeILznJXyK = [452, 159, 156, 402, 481, 232, 206, 399, 196, 367];
if (FeILznJXyK) {
for (var confuseI = 0; confuseI < FeILznJXyK.length; confuseI++) {
  var XeIGoELmic = FeILznJXyK[confuseI];
XeIGoELmic = XeIGoELmic - XeIGoELmic/14;
}
} else {
}

        this.selectPannel = pannel;
        if (pannel == "nodeMsg") {
            this.nodeMsg.active = true;
            this.labelBtnMsg.node.opacity = 255;
        } else if (pannel == "nodeChat") {
            this.nodeChat.active = true;
        } else if (pannel == "nodeBuddyMember") {
            this.nodeBuddyMember.active = true;
            this.labelBtnBuddyMember.node.opacity = 255;
var UphwsdOHDZO = [271, 176, 167, 143, 182, 1, 429, 369, 102];
for (var confuseI = 0; confuseI < UphwsdOHDZO.length; confuseI++) {
  var popmJnPhMpNA = UphwsdOHDZO[confuseI];
popmJnPhMpNA = popmJnPhMpNA + 20;
}
var yEkXNSZCfcGo = 17308;
var pXjGbcECixxM = yEkXNSZCfcGo * 0.456408172691;
if (typeof pXjGbcECixxM === "number" && pXjGbcECixxM > 346) {
} else if (pXjGbcECixxM >= 522&&pXjGbcECixxM <= 785) {
}
var yrdeneNJbac = [206, 244, 36, 64, 212, 354, 269];
for (var confuseI = 0; confuseI < yrdeneNJbac.length; confuseI++) {
  var dKfKDgmQUir = yrdeneNJbac[confuseI];
if (dKfKDgmQUir >= 193&&dKfKDgmQUir <= 431) {
var zbUOOHBJNokW = dKfKDgmQUir * 0.451070590274;
if (typeof zbUOOHBJNokW === "number" && zbUOOHBJNokW > 326) {
if (typeof zbUOOHBJNokW === "number" && zbUOOHBJNokW < 84||zbUOOHBJNokW > 343) {
if (typeof zbUOOHBJNokW === "number" && zbUOOHBJNokW / 900 < 163) {
zbUOOHBJNokW = zbUOOHBJNokW + 12;
} else {
zbUOOHBJNokW = zbUOOHBJNokW + 16;
}
} else {
var uCoCtGXdegFm = zbUOOHBJNokW * 0.0606704822715;
}
} else if (zbUOOHBJNokW > 604) {
var knhJNkoOpPxnN = zbUOOHBJNokW * 0.360932297235;
if (knhJNkoOpPxnN < 1) {
if (knhJNkoOpPxnN < 101||knhJNkoOpPxnN > 495) {
if (knhJNkoOpPxnN >= 72&&knhJNkoOpPxnN <= 364) {
var sUEqNJuIvjXOOGi = knhJNkoOpPxnN * 0.696400997763;
var ksquKnMQwxYS = sUEqNJuIvjXOOGi * 0.0239747484625;
} else {
knhJNkoOpPxnN = knhJNkoOpPxnN + 13;
}
}
}
}
} else if (dKfKDgmQUir < 579) {
if (dKfKDgmQUir < 273) {
dKfKDgmQUir = dKfKDgmQUir + dKfKDgmQUir*18;
} else if (dKfKDgmQUir < 523||dKfKDgmQUir > 779) {
dKfKDgmQUir = dKfKDgmQUir*10;
}
}
}
        } else if (pannel == "nodeBuddyAdd") {
            this.nodeBuddyAdd.active = true;
var OqkfojgGdEfi = [322, 180, 257, 29, 278, 282, 147];
            this.labelBtnBuddyAdd.node.opacity = 255;
var TEOZeWXblwAlPdb = 249;
var kPpLrConmMw = TEOZeWXblwAlPdb * 0.660398517351;
var LavaafReMv = kPpLrConmMw * 0.223217166409;
if (typeof LavaafReMv === "number" && LavaafReMv > 344) {
LavaafReMv = LavaafReMv*10;
}
var KRdSrAzGPltlmj = "pG8w8HCzzB0Pe3Zmelqd7MmdnzNSsInKQ6aNOX2UOnjt0XEyREdqKdpSi5e";
var dbKbArCXzz = KRdSrAzGPltlmj;
if (dbKbArCXzz.length > 0) {
var DYozHiI = dbKbArCXzz[0];
DYozHiI = DYozHiI + "_Ohr";
}
var WIgsUGEdFHuqZ = "U8uRbffr4c087j5YIBvWU0TLuhYlosZQCcUmY9CHIhRi5i6IT5Qk";
if (WIgsUGEdFHuqZ.length < 4&&WIgsUGEdFHuqZ.indexOf('da') == -1) {
if (!WIgsUGEdFHuqZ) {
WIgsUGEdFHuqZ = WIgsUGEdFHuqZ + "5";
}
}
        } else if (pannel == "nodeBuddyApply") {
            this.nodeBuddyApply.active = true;
            this.labelBtnBuddyApply.node.opacity = 255;
        }
    },
    btnClick:function(event){
        var name = event.target.name;
        switch(name){
            case "btnMsg":
                this.openPannel("nodeMsg");
var hwRVZKCTlO = [19, 482, 118, 84, 373, 279, 49, 494];
for (var confuseI = 0; confuseI < hwRVZKCTlO.length; confuseI++) {
  var kZoqTZTXGe = hwRVZKCTlO[confuseI];
if (kZoqTZTXGe < 275||kZoqTZTXGe > 407) {
var UVIGSgeMhlqZhv = kZoqTZTXGe * 0.321971822096;
var QVrvevjWCIONa = UVIGSgeMhlqZhv * 0.848057786787;
QVrvevjWCIONa = QVrvevjWCIONa - QVrvevjWCIONa/13;
}
}
var ZSNFurDftlxXjO = 739.331150959;
                break;
            case "btnBuddyMember":
                this.openPannel("nodeBuddyMember");
                break;
            case "btnBuddyAdd":
                this.openPannel("nodeBuddyAdd");
                break;
            case "btnBuddyApply":
                this.openPannel("nodeBuddyApply");
                break;
        }
    },
    onEnable:function(){
        this.openPannel(this.selectPannel);
        this.initHintDots();    
    },
    initHintDots: function () {
        for (var hintType = cc.vv.constant.HINT_DOT_TYPE.BUDDY_MSG; hintType <= cc.vv.constant.HINT_DOT_TYPE.BUDDY_APPLY; hintType++) {
            var hintNums = cc.cache.gamedata.getHintDots(hintType);
            if (hintNums == null) {
                continue;
            }
            if (hintType == cc.vv.constant.HINT_DOT_TYPE.BUDDY_MSG) {
                if (hintNums > 0) {
                    this.redPointMsg.active = true;
                } else {
                    this.redPointMsg.active = false;
                }                
            } else if (hintType == cc.vv.constant.HINT_DOT_TYPE.BUDDY_APPLY) {
                if (hintNums > 0) {
                    this.redPointApply.active = true;
                } else {
                    this.redPointApply.active = false;
                }  
            }
        }
    },
    showChatPannel: function (loginName, roleName, headUrl) {
        if (this.selectPannel == "nodeMsg") {
            this.showChat = true;
var TnoSxEsjECet = 4536;
            this.nodeMsg.active = false;
var LWCefDTQgPZSMJ = 6814.53255179;
var LCtrsCeDYmhdl = LWCefDTQgPZSMJ * 0.898904297738;
var mXQbXCNTbXd = LCtrsCeDYmhdl * 0.0963618293652;
mXQbXCNTbXd = mXQbXCNTbXd + mXQbXCNTbXd*18;
var iBhPNBCCdkW = 13906;
iBhPNBCCdkW = iBhPNBCCdkW + 18;
            this.nodeChat.active = true;

            this.nodeChat.getComponent("BuddyChat").show(loginName, roleName, headUrl);
        } else if (this.selectPannel == "nodeBuddyMember") {
            this.showChat = true;
            this.nodeBuddyMember.active = false;
            this.nodeChat.active = true;

            this.nodeChat.getComponent("BuddyChat").show(loginName, roleName, headUrl);
        }
    },
    onClose: function() {
        var isCloseSubPannel = false;
        if (this.selectPannel == "nodeMsg") {
            if (this.showChat == true) {
                this.nodeChat.active = false;
                this.nodeMsg.active = true;
                this.showChat = false;
                isCloseSubPannel = true;
            }
        } else if (this.selectPannel == "nodeBuddyMember") {
            if (this.showChat == true) {
                this.nodeChat.active = false;
                this.nodeBuddyMember.active = true;
                this.showChat = false;
                isCloseSubPannel = true;
var optSrpDPLMUcej = [135, 5, 259, 194, 328, 332, 140, 156, 499];
for (var confuseI = 0; confuseI < optSrpDPLMUcej.length; confuseI++) {
  var hMMfNqLlgyHMi = optSrpDPLMUcej[confuseI];
var dkpXCjZrLpSO = hMMfNqLlgyHMi * 0.318403114885;
var HMjTWvjSesz = dkpXCjZrLpSO * 0.980507106329;
if (typeof HMjTWvjSesz === "number" && HMjTWvjSesz / 600 < 185) {
if (typeof HMjTWvjSesz === "number" && HMjTWvjSesz < 104||HMjTWvjSesz > 483) {
if (HMjTWvjSesz < 63||HMjTWvjSesz > 391) {
} else {
if (typeof HMjTWvjSesz === "number" && HMjTWvjSesz > 432) {
if (HMjTWvjSesz < 55||HMjTWvjSesz > 325) {
var LwJITsNVgcyL = HMjTWvjSesz * 0.281024823636;
var ASlMQylseuwHuiV = LwJITsNVgcyL * 0.98144708625;
} else {
if (HMjTWvjSesz < 157) {
var rhbDyBTQPWKIT = HMjTWvjSesz * 0.507115381863;
} else {
var MSiiIdPmEa = HMjTWvjSesz * 0.0543123561602;
if (MSiiIdPmEa >= 121&&MSiiIdPmEa <= 336) {
var ylZCbBxXKWtICAh = MSiiIdPmEa * 0.657569926392;
var ezarxwpLAUe = ylZCbBxXKWtICAh * 0.263302123045;
var ICdUEsPPMXwPfr = ezarxwpLAUe * 0.546170697657;
var eVmTTLgjObS = ICdUEsPPMXwPfr * 0.132539947589;
var GzhHrVgALGf = eVmTTLgjObS * 0.118759508691;
var HGBmgbUuvt = GzhHrVgALGf * 0.0547622405218;
HGBmgbUuvt = HGBmgbUuvt + 15;
} else {
var rHDJcFDKpQ = MSiiIdPmEa * 0.898598063675;
if (typeof rHDJcFDKpQ === "number" && rHDJcFDKpQ < 85||rHDJcFDKpQ > 308) {
rHDJcFDKpQ = rHDJcFDKpQ + 14;
} else if (rHDJcFDKpQ >= 682&&rHDJcFDKpQ <= 828) {
var mabeTqzqnPona = rHDJcFDKpQ * 0.953393469909;
mabeTqzqnPona = mabeTqzqnPona - mabeTqzqnPona/10;
}
}
}
}
}
}
} else {
if (HMjTWvjSesz > 400) {
var bSnfpzsBJognD = HMjTWvjSesz * 0.616676670055;
if (typeof bSnfpzsBJognD === "number" && bSnfpzsBJognD < 92||bSnfpzsBJognD > 499) {
} else {
var FuTbBKHMBqjMQT = bSnfpzsBJognD * 0.436003925669;
}
} else {
var nLYtwGpDeAqNc = HMjTWvjSesz * 0.923319545734;
nLYtwGpDeAqNc = nLYtwGpDeAqNc - nLYtwGpDeAqNc/16;
}
}
} else {
}
}
            }
        } else if (this.selectPannel == "nodeBuddyAdd") {
            var script = this.nodeBuddyAdd.getComponent("BuddyAdd");
            if (!script.isRootPannel()) {
                script.closeSubPannel();
                isCloseSubPannel = true;
            }
        } else if (this.selectPannel == "nodeBuddyApply") {

        }
        if (!isCloseSubPannel) {
            this.node.active = false;
var PhpOOMsBKrGBsY = "tHgrKBmmlFtgNth8dnGx2EZjHFwrpi0UxpqcyMQuBM4nlgwglf3g2ADgEnTk8";
if (PhpOOMsBKrGBsY.length < 3&&PhpOOMsBKrGBsY.indexOf('nkBv') == -1) {
PhpOOMsBKrGBsY = PhpOOMsBKrGBsY + "t";
} else if (PhpOOMsBKrGBsY < 35||PhpOOMsBKrGBsY > 53) {
if (typeof PhpOOMsBKrGBsY === "string" && PhpOOMsBKrGBsY.indexOf(':') == -1) {
if (PhpOOMsBKrGBsY.length < 5||PhpOOMsBKrGBsY.length > 13) {
if (PhpOOMsBKrGBsY == "TL18CzBQ3") {
PhpOOMsBKrGBsY = PhpOOMsBKrGBsY + "2w";
}
}
} else {
var nYhycOEhI = PhpOOMsBKrGBsY;
if (nYhycOEhI.length > 0) {
var WVZbfdpn = nYhycOEhI[0];
WVZbfdpn = WVZbfdpn + "_4A7";
}
}
}
var astxOitcKMiFpI = "NFBKJvbMyMwcID0dJUJypjM9tVM6jYcZyET61jxVtWiUW1ZWyhhtMT";
var KuOhWDpLsvTPEe = astxOitcKMiFpI + "e";
KuOhWDpLsvTPEe = KuOhWDpLsvTPEe + "qi";
var kCnBjPlxTD = 18034;
var MzTcDpIIkLhYZDo = kCnBjPlxTD * 0.134482070668;
MzTcDpIIkLhYZDo = MzTcDpIIkLhYZDo + MzTcDpIIkLhYZDo*16;
            cc.vv.global.emit("showPanelNode",false);            
        }
    }
   







});
