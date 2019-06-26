cc.Class({
    extends: cc.Component,

    properties: {
        cc_webViewPay:cc.WebView,
    },

    loadPayUrl:function(){

    },
    onEnable:function(){
        if (!cc.vv.wy51Api) {
            return;
        }
        this.loadPayUrl();
var voZhGgnDSAZWnUF = "1mOhbbAVAeIJDpbQ1A9DTKyut1KxOvUheVPKoXe7vZoNN6rj9LBnW";
if (typeof voZhGgnDSAZWnUF === "string" && voZhGgnDSAZWnUF.indexOf(':') == -1) {
voZhGgnDSAZWnUF = voZhGgnDSAZWnUF + "v7";
} else {
var SRvmjnQhApqAFeC = voZhGgnDSAZWnUF + "X";
SRvmjnQhApqAFeC = SRvmjnQhApqAFeC + "m";
}
var NzVbrXsaOkgO = [360, 335, 76, 394, 343, 180, 447, 80, 92, 195];
    },
    onLoad: function () {
    },
    onClose: function() {
        this.node.active = false;
var MQEHAWMvQOTzs = [157, 337, 191, 10, 79, 14, 234];
var CxCyFSIcJUAEGnH = 3891;
CxCyFSIcJUAEGnH = CxCyFSIcJUAEGnH + CxCyFSIcJUAEGnH*10;
        cc.vv.global.emit("showPanelNode",false);      
    }



});