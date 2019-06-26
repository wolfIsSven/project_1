var matchData = [
    [32, 10, 32, 2],
    [64, 90, 64, 6]
]
cc.Class({
    extends: cc.Component,
    properties: {
        cc_matchItemFab: cc.Prefab,
        _content: null
    },
    initItems: function () {
        for (var i = 0; i < matchData.length; i++) {
            var matchItem = cc.instantiate(this.cc_matchItemFab);
            var titleLabel = matchItem.getChildByName('titleLabel').getComponent(cc.Label);
            titleLabel.string = matchData[i][0] + cc.vv.lang.LANG_DESC.RenKuaiSuSai;
            var rewardLabel = matchItem.getChildByName('rewardLabel').getComponent(cc.Label);
            rewardLabel.string = cc.vv.lang.LANG_DESC.One + matchData[i][1] + cc.vv.lang.COST_TYPE[3];
            var maxLabel = matchItem.getChildByName('maxLabel').getComponent(cc.Label);
            maxLabel.string = cc.vv.lang.LANG_DESC.Full + matchData[i][2] + cc.vv.lang.LANG_DESC.RenKaiSai;
            var curLabel = matchItem.getChildByName('curLabel').getComponent(cc.Label);
            curLabel.string = cc.vv.lang.LANG_DESC.BaoMingRenShu0;
            var costLabel = matchItem.getChildByName('costLabel').getComponent(cc.Label);
            costLabel.string = cc.vv.lang.LANG_DESC.BaoMingFeiYong + matchData[i][3];
            var detailBtn = matchItem.getChildByName('detailBtn');
            detailBtn.itemIndex = i;
            cc.vv.utils.addClickEvent(detailBtn, this.node, 'Match', 'onDetailBtnClicked');
            var joinBtn = matchItem.getChildByName('joinBtn');
            joinBtn.itemIndex = i;
            cc.vv.utils.addClickEvent(joinBtn, this.node, 'Match', 'onJoinBtnClicked');
            this._content.addChild(matchItem);
        }
    },
    onLoad: function () {
        this.addComponent('OnBack');
        this._content = cc.find('Canvas/matchNode/scrollview/view/content');
        this.initItems();
    },
    onDetailBtnClicked: function (event) {
        var target = event.target;
        cc.log(target.itemIndex);
    },
    onJoinBtnClicked: function (event) {
        var target = event.target;
        var data = {
            userId: cc.cache.user.id,
            type: target.itemIndex
        };
        var onGet = function () {
            cc.log('join match onGet');
        };
        cc.vv.http.sendRequest('/join_match', data, onGet.bind(this));
    }



});