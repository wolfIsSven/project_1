//载入sdk
var Lequ=require("lequsdk");
var LequConfig=require("LequConfig");

cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        /************** ↓极端重要的提醒↓ **************/
        // 微信后台登录,进入开发-开发设置-服务器域名,request和download增加以下域名
        // https://apis.5151.com
        // https://dev.xcx.snsfun.com
        // https://account.api.snsfun.com
        // https://res.xcx.snsfun.com
        /************** ↑极端重要的提醒↑ **************/

        //测试使用，在dev.xcx.snsfun.com后台获取相关测试数据,最高优先调用此函数,正式上线确保移除此调用
        // Lequ.setTestQuery("a%3D1%26p%3D1%26d%3D0%26f%3D4%26sid%3D1%26chid%3D1");
        //测试使用，传入任务数组，最高优先调用此函数,正式上线确保移除此调用
        /****
         * 数组可用值说明
         * share：分享
         * banner：点击banner
         * jump：跳转其他游戏
         * lottery：转盘
         * watchVideoBanner：看广告，并显示banner
         * watchVideo：看广告
         * prize：游戏奖励
         * prizeAndAd：游戏奖励，看广告前发放奖励
         * prizeWithAd：游戏奖励，广告看完给奖励
         * paperAndAd:看视频出纸，可以不看完
         * paper：直接出纸
         * paperWithAd：看视频出纸，必须看完
         * 举例:["share","banner","paperWithAd","prizeWithAd"]
         */
        // Lequ.setTestTask(["paper"]);

        //进入游戏保证场景不再切换之后，先调用此函数，可以判断是否纸巾机，不管是否需要都要调用一次(添加测试数据的函数在此之前)
        var ispaper=Lequ.isPaper();
        if(ispaper){
            console.log('游戏逻辑针对纸巾机做一些处理');
        }else{
			cc.director.loadScene("hall");
		}
        //根据情况选用，会在纸巾逻辑执行之前执行此函数,请保证在Lequ.init之前指定此回调函数
        Lequ.startPaper(function(){
            console.log('start');
        });
        //根据情况选用，会在纸巾逻辑执行完成后执行此函数,请保证在Lequ.init之前指定此回调函数
        Lequ.endPaper(function(){
            console.log('end');
			cc.director.loadScene("hall");
        });
        //设置游戏发放奖励函数,请保证在Lequ.init之前指定此回调函数
        Lequ.setPrizeFun(function(type){
            //发放奖励界面由游戏自行设计，根据type值决定需不需要看视频
            console.log(type);
            console.log("type=1是视频可以不看，type=2是视频必须看，type不存在直接领取");
        });

        //读取g.snsfun.com后台分享内容配置
        // wx.request({
        //     url: 'https://account.api.snsfun.com/XyxApi/share',
        //     data: {
        //         gameid:LequConfig.gameid_g,//g.snsfun.com后台的gameid
        //     },
        //     success(res) {
        //         //根据各个游戏的分享策略，传入一组数据分享用
        //         Lequ.setShareInfo(res.data[0]);
        //     }
        // });
        //指定分享内容
        Lequ.setShareInfo({
            text:"各种麻将都有！只要有麻将技术，都能在这里赢奖励",
            url:"http://resource.uqee.com/koudai/wechat_share/share_0.png",
        });

        //单机游戏换取用户唯一标识
        var _this=this;
        wx.login({
            success: function (res) {
                wx.request({
                    url: 'https://account.api.snsfun.com/XyxApi/aloneuid',
                    data: {
                        gameid:LequConfig.gameid_g,//g.snsfun.com后台的gameid
                        jscode:res.code,
                    },
                    success(res1) {
                        var uid=res1.data.data.uid;
                        var isnew=res1.data.data.isnew;
                        _this.init(uid,isnew);
                    },
                    fail(){
                        _this.init();
                    }
                });
            },
            fail:function(){
                _this.init();
            }
        })

        //有服务端的游戏
        //根据游戏情况传入唯一用户标识,请保证在Lequ.init之前指定此函数，新玩家isnew=1，老玩家isnew=2
        // var uid=1;
        // var isnew=1;
        // this.init(uid,isnew);
    },
    init(uid,isnew){
        if(uid && isnew){
            Lequ.setUid(uid,isnew);
        }
        //初始化sdk
        Lequ.init(this);
    }
    // update (dt) {},
});
