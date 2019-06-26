cc.Class({
    extends: cc.Component,
    properties: {

    },
    onLoad: function () {
        this.node.height = cc.winSize.height;
        // this.node.getChildByName("btn_back").y = -cc.winSize.height*0.5;
        this.addComponent('OnBack');
        // var wxBtn = this.node.getChildByName('wxBtn');
        // cc.vv.utils.addClickEvent(wxBtn, this.node, 'Share', 'onWxBtnClicked');
        // var pyqBtn = this.node.getChildByName('pyqBtn');
        // cc.vv.utils.addClickEvent(pyqBtn, this.node, 'Share', 'onPyqBtnClicked');
    },
    onBtnClicked: function (event) {
        var name = event.target.name;
        var type = 1;
        if(name === "wxBtn"){
            type = 2;
        }else if(name === "pyqBtn"){
            type = 3;
        }
        cc.vv.wxApi.wxShare(cc.vv.constant.SHARE_DEST.FRIEND);
    },
    onPyqBtnClicked: function () {
        cc.log('pyq_1.0');
        wx.onMenuShareTimeline({
            title: 'test',
            link: 'http://www.baidu.com',
            imgUrl: '',
            success: function () {
                alert('fengxiang success');
            },
            cancel: function () {
                alert('fengxiang cancel');
            }
        });
    },


});