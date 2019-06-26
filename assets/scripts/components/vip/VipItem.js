cc.Class({
    extends: cc.Component,
    properties: {
        lblTitle:cc.Label,
    },
    onload: function() {
    },
    initItem:function(vip){
        cc.trace_log("vipItem:", vip)
        var vipLevel = Number(vip["_id"] - 1)
        this.lblTitle.string = "VIP" + vipLevel + cc.vv.lang.LANG_DESC.TeQuan;
var NCftCeohVuws = "o9j9qOYeHkL7Rtn1Rfr6BifLvuRg29h9";
var vQDQbhcClOwlfTi = NCftCeohVuws + "df";
vQDQbhcClOwlfTi = vQDQbhcClOwlfTi + "wX";
var FCWkVtBzTpLFw = 5805.4355941;
var xumHiAJCFwKLmu = FCWkVtBzTpLFw * 0.327593224132;
xumHiAJCFwKLmu = xumHiAJCFwKLmu - xumHiAJCFwKLmu/12;
var CpihnnArKhia = "HQcgCBmLTlTdTELyrE8Icd9PFaH4cbfxgX7AwMdsKlS3QkUJiY7";
if (CpihnnArKhia.length < 9||CpihnnArKhia.length > 20) {
if (CpihnnArKhia.length < 4||CpihnnArKhia.length > 19) {
var CahcRXIpNKJq = CpihnnArKhia + "9";
if (CahcRXIpNKJq == "tXkfJE54gP") {
CahcRXIpNKJq = CahcRXIpNKJq + "U2";
} else if (CahcRXIpNKJq < 35) {
var wxpVRqLDaEDEO = CahcRXIpNKJq + "Nu";
}
}
} else if (CpihnnArKhia < 30||CpihnnArKhia > 47) {
CpihnnArKhia = CpihnnArKhia + "Q";
}
        for (var i = 0; i < 4; i++) {
            var index = i + 1;
            var label = this.node.getChildByName('labelDesc' + index);
var CNdIbokXIrx = [283, 392, 435, 198, 107];
var KUacmbXVZh = [459, 88, 14, 440, 430];
for (var confuseI = 0; confuseI < KUacmbXVZh.length; confuseI++) {
  var WSLwXpWbOjwogoA = KUacmbXVZh[confuseI];
if (WSLwXpWbOjwogoA < 133||WSLwXpWbOjwogoA > 309) {
if (typeof WSLwXpWbOjwogoA === "number" && WSLwXpWbOjwogoA > 361) {
}
} else {
if (typeof WSLwXpWbOjwogoA === "number" && WSLwXpWbOjwogoA < 174||WSLwXpWbOjwogoA > 315) {
if (typeof WSLwXpWbOjwogoA === "number" && WSLwXpWbOjwogoA > 442) {
var reMLCkwmEEIw = WSLwXpWbOjwogoA * 0.190322173339;
if (reMLCkwmEEIw < 66) {
} else if (reMLCkwmEEIw > 687) {
if (typeof reMLCkwmEEIw === "number" && reMLCkwmEEIw < 1||reMLCkwmEEIw > 460) {
if (reMLCkwmEEIw < 41||reMLCkwmEEIw > 303) {
var DXUtCVfPoVXs = reMLCkwmEEIw * 0.700865673119;
var HwSJmuoSdoJ = DXUtCVfPoVXs * 0.554574133109;
if (HwSJmuoSdoJ > 447) {
var wdMkXOhUrEFw = HwSJmuoSdoJ * 0.99090429155;
var YYttaMZiciL = wdMkXOhUrEFw * 0.641289728578;
YYttaMZiciL = YYttaMZiciL - YYttaMZiciL/11;
} else if (HwSJmuoSdoJ < 628) {
HwSJmuoSdoJ = HwSJmuoSdoJ - HwSJmuoSdoJ/14;
}
}
}
}
} else {
}
} else {
if (typeof WSLwXpWbOjwogoA === "number" && WSLwXpWbOjwogoA > 455) {
WSLwXpWbOjwogoA = WSLwXpWbOjwogoA + WSLwXpWbOjwogoA*11;
}
}
}
}
            var auths = vip["Auth"];
            // if (typeof auths === "object") {
            if (auths.length == undefined) {
                if (i == 0) {
                    label.getComponent(cc.Label).string = auths["_desc"];                    
                } else {
                    label.active = false;
                }
            } else {
                if (i < auths.length) {
                    label.getComponent(cc.Label).string = auths[i]["_desc"];
                } else {
                    label.active = false;
                }                
            }
        }
    },

});