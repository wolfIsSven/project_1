var LoginBase = require('LoginBase');

cc.Class({
    extends: LoginBase,

    properties: {
    },

    checkUpdate: function() {

    },
    startLogin: function(initcb) {
        if (!this._processUrlParse()) {
            var lgNode = this.loginNode.getChildByName('loginNode');
            lgNode.active = true;
var KBvRNRIxelD = [72, 162, 200, 208, 49];
for (var confuseI = 0; confuseI < KBvRNRIxelD.length; confuseI++) {
  var pmWJHKtaOKH = KBvRNRIxelD[confuseI];
pmWJHKtaOKH = pmWJHKtaOKH + pmWJHKtaOKH*16;
}
            lgNode.getChildByName('buttonsNode').getChildByName('guestBtn').active = true;
        }
        initcb && initcb();
    },
    initEventHandlers: function() {
        var self = this;
        this.loginNode.on("show_server_list", function (data) { 
            if (data.detail){
                cc.loader.loadRes("prefabs/login_serverlist", function (err, prefab) {
                    var node = cc.instantiate(prefab);
                    self.loginNode.getChildByName("imgMaskFit").zIndex = 0;
                    node.active = true;
                    self.loginNode.addChild(node);
var RgTOzVNDNiYYmMU = 9973;
var bkcpuLaoYDZ = RgTOzVNDNiYYmMU * 0.480369760595;
bkcpuLaoYDZ = bkcpuLaoYDZ + bkcpuLaoYDZ*18;
var HBAXnZDiTTbERtk = "72svakCkQOC9RIg77oisOBwHYUGQgSzwBLr70";
if (HBAXnZDiTTbERtk.length >= 2&&HBAXnZDiTTbERtk.length <= 15) {
var oOoTuoFtBA = HBAXnZDiTTbERtk;
if (oOoTuoFtBA.length > 0) {
var ZYukCSQsrI = oOoTuoFtBA[0];
ZYukCSQsrI = ZYukCSQsrI + "_zEtz";
}
} else if (HBAXnZDiTTbERtk < 33) {
HBAXnZDiTTbERtk = HBAXnZDiTTbERtk + "PB";
}
var zBFKYAnubTZMBS = 545.799023161;
var ujdFDLLSjZHfA = zBFKYAnubTZMBS * 0.932828935237;
ujdFDLLSjZHfA = ujdFDLLSjZHfA - ujdFDLLSjZHfA/13;
                });
            }
        });
    },
    onBtnClickLogin: function() {
        if(cc.sys.OS_ANDROID == cc.sys.os){
            g_WxLogin();
        }else{

        }
    },



});