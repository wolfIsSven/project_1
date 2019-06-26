cc.Class({
    properties: {
        serverId: "",
        id: 0,
        sid: 0,
        serverName: "",
        serverAddr: "",
        gameServerAddr: "",
        port: 0,
        serverList: [],
        loginHistory: [],

        serverAddrFromUrl: "",

        matchAddress: "",
    },

    init: function () {
    },
    getServerInfo: function(id) {
        var length = this.serverList.length;
        for (var i = 0; i < length; i++) {
            if (this.serverList[i].id === id) {
                return this.serverList[i];
            }
        }
        return null;
    },

});