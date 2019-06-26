var server_list = [
    {gameServerAddr:"10.0.254.99",name:"东服务器(99稳定)",port:"8115"},
    {gameServerAddr:"10.16.0.208",name:"东服务器(207调试)",port:"8115"},
    {gameServerAddr:"10.0.253.117",name:"旭服务器(调试)",port:"8115"},
    {gameServerAddr:"10.0.253.133",name:"玮服务器(调试)",port:"8115"},
    {gameServerAddr:"10.0.253.116",name:"升服务器(调试)",port:"8335"},
    {gameServerAddr:"10.0.254.99",name:"旭服务器(测试)",port:"8115"},
    {gameServerAddr:"47.102.128.36",name:"法亮云服务(测试)",port:"443"},
    {gameServerAddr:"s1.mq.jh5151.uqeegame.com",name:"H5外网服务器(调试)",port:"443"},
    {gameServerAddr:"s0.mq.uqee.uqeegame.com",name:"外网服务器(调试)",port:"443",outer:"true"},
    {gameServerAddr:"s2.mq.lequ.uqeegame.com",name:"外网服务器(直连)",port:"8080",outer:"true",notWss:"true"},
 ]

cc.Class({
    extends: cc.Component,
    properties: {
        cc_contentView:cc.Node,
    },

    onLoad: function () {
        this.initSeverList();
    },
    initSeverList :function () {
        var commonBtn = this.node.getChildByName("btn")
        for (var index = 0; index < server_list.length; ++index) {
            var server = server_list[index];
            var curBtn = cc.instantiate(commonBtn);
            curBtn.active = true;
            curBtn.id = index;
            curBtn.server = server;
            var label = curBtn.getChildByName("label").getComponent(cc.Label);
            label.string = server.name;
            cc.vv.utils.addClickEvent(curBtn, this.node, 'ServerList', 'onBtnClicked');
            curBtn.parent = this.cc_contentView;
        }
    },
    onBtnClicked: function (event) {
        var target = event.target;
        cc.cache.server = target.server;
        cc.vv.protobuf.connectServer();
    },
    //
    //所有按钮触发事件
});