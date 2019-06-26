cc.Class({
    extends: cc.Component,
    properties: {
        cc_operateNode: cc.Node,
        cc_successNode: cc.Node,
        cc_certNameEb: cc.EditBox,
        cc_certIdEb: cc.EditBox,
        cc_certPhoneEb: cc.EditBox,
        cc_sendBtn: cc.Node,
        cc_hall: cc.Node,
    },
    clearEditBoxes: function () {
        this.cc_certNameEb.string = '';
        this.cc_certIdEb.string = '';
        this.cc_certPhoneEb.string = '';
    },
    onEnable: function () {
        this.clearEditBoxes();
        this.showOperationNode(cc.cache.user.cert);
    },
    showQuickTip: function (string) {
        this.node.parent.getComponent('Hall').showQuickTip(string);
    },
    onLoad: function () {
        if(cc.vv.global.IsScale()){
            this.node.getChildByName("bg").height = cc.winSize.height;
        }
        // this.addComponent('OnBack');
    },
    showOperationNode: function (cert) {
        if (cert) {
            this.cc_successNode.active = true;
            this.cc_operateNode.active = false;
        } else {
            this.cc_successNode.active = false;
            this.cc_operateNode.active = true;
        }
    },
    onBtnClicked: function () {
        var reg = /^[0-9]+$/;
        var nameString = this.cc_certNameEb.string;
        if (nameString == '') {
            this.showQuickTip(cc.vv.lang.LANG_DESC.InputName);
            return;
        }
        var idString = this.cc_certIdEb.string;
        if (idString == '') {
            this.showQuickTip(cc.vv.lang.LANG_DESC.InputID);
            return;
        }
        if (!reg.test(idString)) {
            this.showQuickTip(cc.vv.lang.LANG_DESC.InputCorrectID);
            return;
        }
        var phoneString = this.cc_certPhoneEb.string;

        var onGet = function (ret) {
            if (ret.errcode !== 0) {
                cc.log(ret.errmsg);
            } else {
                cc.cache.user.cert = true;
                this.showOperationNode(cc.cache.user.cert);
            }
        };
        var data = {
            account: cc.cache.account.username,
            sign: cc.cache.user.sign,
            userId: cc.cache.user.id,
            name: nameString,
            id: idString,
            phone: phoneString
        }
        // cc.vv.http.sendRequest('/certification_confirm', data, onGet.bind(this));
    },
    onBtnCloseClicked:function(){
        this.node.active = false;
    }
});