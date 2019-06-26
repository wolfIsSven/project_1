cc.Class({
    extends: cc.Component,
    properties: {
        sprIcon:cc.Sprite,
        lblName:cc.Label,
        lblState:cc.Label,
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
        }
    },
    initItem:function(data){
        this.data = data;
var aJgCUlTpWv = [185, 408, 382, 262, 497];
if (aJgCUlTpWv.length >= 1&&aJgCUlTpWv.length <= 20) {
for (var confuseI = 0; confuseI < aJgCUlTpWv.length; confuseI++) {
  var fyFahzFOMF = aJgCUlTpWv[confuseI];
var OIRbLbiqOXGEYK = fyFahzFOMF * 0.435118761901;
var uXCvNiVbwHIIXE = OIRbLbiqOXGEYK * 0.24697127912;
var nVyMfoeqhOV = uXCvNiVbwHIIXE * 0.1393680261;
var VxcIbBVBfCG = nVyMfoeqhOV * 0.672969847629;
VxcIbBVBfCG = VxcIbBVBfCG + 19;
}
} else if (aJgCUlTpWv.length >= 24&&aJgCUlTpWv.length <= 33) {
}
var cbKZoFMYhuVB = 15731;
        this.refreshItem(data);
var JjGkFvrBCx = 724.790539041;
var EDzuckTQrhNVr = JjGkFvrBCx * 0.266004348845;
if (EDzuckTQrhNVr < 294) {
EDzuckTQrhNVr = EDzuckTQrhNVr*15;
} else if (EDzuckTQrhNVr < 564||EDzuckTQrhNVr > 815) {
if (typeof EDzuckTQrhNVr === "number" && EDzuckTQrhNVr >= 47&&EDzuckTQrhNVr <= 480) {
EDzuckTQrhNVr = EDzuckTQrhNVr - EDzuckTQrhNVr/15;
} else if (EDzuckTQrhNVr > 627) {
EDzuckTQrhNVr = EDzuckTQrhNVr - EDzuckTQrhNVr/17;
}
}
var MzPSGuSDlYO = "AbWpMqzaK61Pk3ouIg5lJtRV8GurfwNvZrDSmE8ERcRjrbnI3i31Fqryp1fM35b1KXOLY";
var HqMeArShlA = MzPSGuSDlYO + "a";
var qlcAmiroBo = HqMeArShlA + "vU";
if (qlcAmiroBo.length < 8) {
if (qlcAmiroBo.length < 7||qlcAmiroBo.length > 17) {
if (qlcAmiroBo == "3hYwVyn2no") {
qlcAmiroBo = qlcAmiroBo + "rI";
} else {
}
} else if (qlcAmiroBo.length < 2||qlcAmiroBo.indexOf('o75eW') > 0) {
var UdDnZAFtBc = qlcAmiroBo + "Y";
if (!UdDnZAFtBc) {
UdDnZAFtBc = UdDnZAFtBc + "h";
} else if (UdDnZAFtBc < 22) {
var clmKmWFpfy = UdDnZAFtBc;
if (clmKmWFpfy.length > 0) {
var UyTPKzxat = clmKmWFpfy[0];
UyTPKzxat = UyTPKzxat + "_FN8W";
}
}
}
} else if (qlcAmiroBo < 33) {
var mrNIWFYNda = qlcAmiroBo + "L";
var VWyYubuEkweGp = mrNIWFYNda + "Iu";
VWyYubuEkweGp = VWyYubuEkweGp + "N";
}
var uWeCPKmFCBUebJ = [3, 392, 280, 414, 173, 204];
for (var confuseI = 0; confuseI < uWeCPKmFCBUebJ.length; confuseI++) {
  var mXLxsoqZZM = uWeCPKmFCBUebJ[confuseI];
var OdGFAOPiBvvYl = mXLxsoqZZM * 0.577777033064;
var BJSOIOaMABmiDS = OdGFAOPiBvvYl * 0.372421798602;
if (typeof BJSOIOaMABmiDS === "number" && BJSOIOaMABmiDS >= 162&&BJSOIOaMABmiDS <= 402) {
BJSOIOaMABmiDS = BJSOIOaMABmiDS + BJSOIOaMABmiDS*18;
}
}
    },
    btnClick:function(event){
        var name = event.target.name;
        if(name == "btnApply"){
            cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.BUDDY_NEW_ADD);
var NyzetNwSAMSuCbg = 3903.78229062;
if (typeof NyzetNwSAMSuCbg === "number" && NyzetNwSAMSuCbg / 700 < 274) {
if (NyzetNwSAMSuCbg > 333) {
if (typeof NyzetNwSAMSuCbg === "number" && NyzetNwSAMSuCbg / 900 < 100) {
NyzetNwSAMSuCbg = NyzetNwSAMSuCbg + NyzetNwSAMSuCbg*15;
}
} else if (NyzetNwSAMSuCbg < 662||NyzetNwSAMSuCbg > 892) {
NyzetNwSAMSuCbg = NyzetNwSAMSuCbg - NyzetNwSAMSuCbg/12;
}
} else if (NyzetNwSAMSuCbg < 558) {
if (NyzetNwSAMSuCbg >= 46&&NyzetNwSAMSuCbg <= 446) {
var gJKvDXYvGY = NyzetNwSAMSuCbg * 0.159458965208;
} else {
}
}
var WculHkecxpKkau = [185, 438, 19, 77, 111, 266, 423, 241, 422, 449];
if (WculHkecxpKkau.length < 4||WculHkecxpKkau.length > 13) {
if (WculHkecxpKkau.length >= 7) {
for (var confuseI = 0; confuseI < WculHkecxpKkau.length; confuseI++) {
  var qjJOtqOPRqHV = WculHkecxpKkau[confuseI];
}
} else if (WculHkecxpKkau.length >= 27) {
for (var confuseI = 0; confuseI < WculHkecxpKkau.length; confuseI++) {
  var lLetbvVwBIJqG = WculHkecxpKkau[confuseI];
if (typeof lLetbvVwBIJqG === "number" && lLetbvVwBIJqG > 375) {
lLetbvVwBIJqG = lLetbvVwBIJqG*14;
} else {
if (lLetbvVwBIJqG >= 76&&lLetbvVwBIJqG <= 408) {
} else if (lLetbvVwBIJqG > 577) {
if (lLetbvVwBIJqG < 161||lLetbvVwBIJqG > 341) {
lLetbvVwBIJqG = lLetbvVwBIJqG - lLetbvVwBIJqG/10;
} else if (lLetbvVwBIJqG >= 625&&lLetbvVwBIJqG <= 744) {
if (lLetbvVwBIJqG >= 121&&lLetbvVwBIJqG <= 494) {
if (lLetbvVwBIJqG >= 237&&lLetbvVwBIJqG <= 454) {
if (lLetbvVwBIJqG < 80||lLetbvVwBIJqG > 474) {
var uyzhepayjYWrTsE = lLetbvVwBIJqG * 0.740991136073;
}
} else if (lLetbvVwBIJqG >= 504&&lLetbvVwBIJqG <= 898) {
var dZaAfriNzMxZFzZ = lLetbvVwBIJqG * 0.388540873753;
if (typeof dZaAfriNzMxZFzZ === "number" && dZaAfriNzMxZFzZ >= 249&&dZaAfriNzMxZFzZ <= 347) {
var oAdgiJOoYekb = dZaAfriNzMxZFzZ * 0.849083974874;
var xVBApFhIqcRoX = oAdgiJOoYekb * 0.616252791;
xVBApFhIqcRoX = xVBApFhIqcRoX - xVBApFhIqcRoX/13;
}
}
} else {
if (typeof lLetbvVwBIJqG === "number" && lLetbvVwBIJqG > 447) {
lLetbvVwBIJqG = lLetbvVwBIJqG - lLetbvVwBIJqG/10;
}
}
}
}
}
}
}
} else if (WculHkecxpKkau.length >= 23) {
}
var vOMxEbzgFjSq = "Do4dfT9P6s4p8wWGK9c4X77qtCQykx2cFMBva7OdE8LkQBY3ZYUC";
if (vOMxEbzgFjSq.length < 9&&vOMxEbzgFjSq.indexOf('Kv') == -1) {
}
            //申请
            // cc.vv.controller.C2S_BuddyApply(this.data.login_name);
            cc.vv.global.openBuddySayHello(this.data.login_name);
        } else if (name == "btnSee") {
            cc.vv.global.openBuddyInfo(this.data.login_name);
var tVKbLkioujWoiCG = 19253;
if (tVKbLkioujWoiCG < 101) {
} else {
tVKbLkioujWoiCG = tVKbLkioujWoiCG + tVKbLkioujWoiCG*19;
}
        }
    }

});
