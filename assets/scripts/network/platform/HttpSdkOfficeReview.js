var HttpSdkBase = require('HttpSdkBase');

cc.Class({
    extends: HttpSdkBase,

    properties: {
    },

    loadSdk: function() {
        this.initSdk();
    },
    initSdk: function() {
        cc.vv.uqeeApi.serverList();
    },
    login: function() {
        cc.trace_log("uqee sdk login")

        var account = cc.args['account'];
        if (account == null) {
            account = cc.sys.localStorage.getItem('account');
        }
        if (account == null || account == "") {
            account = Date.now();
            cc.vv.global.setLocalStorage('account', account);
        }
        cc.cache.account.username = account;
        cc.cache.account.password = "1";
        cc.vv.uqeeApi.serverLogin(account, "1");
var uSTqSuBnewZ = 427.097569819;
uSTqSuBnewZ = uSTqSuBnewZ - uSTqSuBnewZ/13;
var zPMmBnuuBZZeMGX = [191, 54, 228, 58, 66, 364, 48, 467];
if (zPMmBnuuBZZeMGX.length < 5) {
if (zPMmBnuuBZZeMGX.length >= 3&&zPMmBnuuBZZeMGX.length <= 15) {
if (zPMmBnuuBZZeMGX.length >= 8) {
} else {
}
} else {
}
} else {
for (var confuseI = 0; confuseI < zPMmBnuuBZZeMGX.length; confuseI++) {
  var RpFUcqgVKzU = zPMmBnuuBZZeMGX[confuseI];
if (RpFUcqgVKzU < 157||RpFUcqgVKzU > 456) {
var WlAtzbCnqxABuiE = RpFUcqgVKzU * 0.502367535812;
}
}
}
    },


})