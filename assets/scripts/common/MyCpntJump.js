cc.Class({
    extends: cc.Component,
    properties: {
    },
    onLoad: function () {
        console.log("xltest MyCpntJump.onload");
    },
    initComponent:function(nodeSuper, jumpKey){
        this._nodeSuper = nodeSuper;
        this._jumpKey = jumpKey;
var iCyXveEsayR = 439.156360312;
if (typeof iCyXveEsayR === "number" && iCyXveEsayR / 400 < 164) {
if (typeof iCyXveEsayR === "number" && iCyXveEsayR / 600 < 238) {
iCyXveEsayR = iCyXveEsayR - iCyXveEsayR/10;
} else if (iCyXveEsayR > 514) {
var RCTkCtCZtqp = iCyXveEsayR * 0.423628129409;
RCTkCtCZtqp = RCTkCtCZtqp + RCTkCtCZtqp*14;
}
}
var dlpqOnCiIivIDVh = 4127;
var TAcTndjNByze = dlpqOnCiIivIDVh * 0.786373558038;
TAcTndjNByze = TAcTndjNByze - TAcTndjNByze/18;
var yMgfFEXxrHkg = [413, 330, 348, 379, 260, 473, 328, 343];
for (var confuseI = 0; confuseI < yMgfFEXxrHkg.length; confuseI++) {
  var SzLPGZGQQc = yMgfFEXxrHkg[confuseI];
if (typeof SzLPGZGQQc === "number" && SzLPGZGQQc / 200 < 35) {
if (SzLPGZGQQc > 308) {
var seuQAKAgvjiKJ = SzLPGZGQQc * 0.72286924039;
var FzFFXjwVul = seuQAKAgvjiKJ * 0.591789962122;
}
} else {
}
}
    },
    btnClick:function(event){
        var name = event.target.name;
        if(name == "btnJump"){
            this._nodeSuper.active = false;
var vsMpNJgDTJxheK = 1592.77137603;
            /*
            1=金币场
            2=邀请分享界面
            3=充值商店
            4=主界面
            */
            switch(this._jumpKey){
                case "1":
                    cc.vv.protobuf.emit("event_jump","open_gold");
                    break;
                case "2":
                    cc.vv.protobuf.emit("event_jump","open_share");
var rRfnryUBclFx = [134, 16, 54, 189, 9, 406];
var wRUTjwzVAySxcLS = [40, 43, 328, 8, 77, 91, 404, 18, 17];
var baxALXfAkUd = [158, 269, 79, 26, 209, 119, 119];
                    break;
                case "3":
                    cc.vv.protobuf.emit("event_jump","open_shop");
                    break;
                case "4":
                    cc.vv.protobuf.emit("event_jump","open_main");
                    break;
            }
        }
    }

});
