cc.Class({
    extends: cc.Component,
    properties: {
        cc_nameLabel:cc.Label,
        cc_timeLabel:cc.Label,
        cc_cashLabel:cc.Label
    },
    initData:function(object){
        this.cc_nameLabel.string = cc.vv.lang.ChannelDesc[object.channel];//object.type === 0 ? "邀请红包" : object.type === 1 ? "好友条件达成奖励":object.type === 2 ? "好友条件达成奖励":object.type === 4 ? "红包雨":object.type === 5 ? "任务奖励":object.type === 6 ? "新玩家福利":"比赛场奖励";
        this.cc_timeLabel.string = cc.vv.utils.dateFormatSecond(object.create_time.toNumber());
        this.cc_cashLabel.string = (object.cash/100).toFixed(2);
    }
});