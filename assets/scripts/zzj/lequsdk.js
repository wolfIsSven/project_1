var LequConfig=require("LequConfig");

var Lequ = {
    isPaper(){
        var _this=this;
        //避免客户端多次调用重复创建纸巾节点
        if(this._option){
            if(this.zhijin) return true;
            return false;
        }
        LequConfig.url="https://dev.xcx.snsfun.com/LequZjj0515/";
        this._option = wx.getLaunchOptionsSync();//启动参数
        if(!this._option) return false;//阻止异常
        this.hidebannerShowNum=this.hidebannerShowNum?this.hidebannerShowNum:0;//此次进入游戏，隐藏banner的刷新次数
        //获取设备信息
        try {
            this.SystemInfo = wx.getSystemInfoSync();
        } catch (e) {
            var pixelRatio=cc.view.getDevicePixelRatio();
            this.SystemInfo = {};
            this.SystemInfo.screenWidth=LequConfig.bgsize.width/pixelRatio;
            this.SystemInfo.screenHeight=LequConfig.bgsize.height/pixelRatio;
            this.SystemInfo.pixelRatio=pixelRatio;
            this.SystemInfo.SDKVersion="1.0.0";
        }
        if(LequConfig.deviceOrientation=='landscape'){
            var design=this.newspaceobj(LequConfig.design);
            LequConfig.design.width=design.height;
            LequConfig.design.height=design.width;
        }
        try {
            //优先获取二维码参数，其次获取跳转参数
            this.querystr = this._option.query.scene?this._option.query.scene:this._option.referrerInfo.extraData.zjjquery;
        } catch (e) {}
        if(this.querystr){
            this.query=this.getParameterByStr(this.querystr);//解析参数
            if(this.query && this.query.p){
                this.sid=this.query.p;
                //参数符合纸巾机条件
                this.zjpagebg();//显示纸巾机基础背景
                try {
                    //设置来源游戏
                    this.fromgameid = this._option.referrerInfo.extraData.fromgameid;
                } catch (e) {}
                this.fromgameid=this.fromgameid?this.fromgameid:LequConfig.gameid;
                //获取当前第几天
                try {
                    _this.day=_this.query.d;
                } catch (e) {
                    _this.day=0;
                }
                _this.day++;
                return true;
            }
        }
        /**以下是非纸巾机逻辑**/
        //非纸巾机用户根据服务端库存暗刷
        try {
            this.todayBannerNum = wx.getStorageSync('zzj_TodayBannerNum');//banner暗刷今日次数
            var lastBannerTime = wx.getStorageSync('zzj_TodayBannerTime');//banner暗刷最后时间
            var start=Date.parse(new Date(new Date(new Date().toLocaleDateString()).getTime()));
            if(start!=lastBannerTime){
                //重置暗刷数据
                this.todayBannerNum = 0; 
            }
        } catch (e) {
            //获取失败，重置数据
            this.todayBannerNum = 0;
        }
        //获取服务端配置
        wx.request({
            url: LequConfig.url+'integration',
            data: {
                gameid:LequConfig.gameid
            },
            success(res) {
                //根据返回值载入配置
                LequConfig.bannerHideNum=res.data.data.normalUserBannerNum;//从正常用户那边挖的曝光量
                LequConfig.bannerHideTime=res.data.data.bannerHideTime;//隐藏banner刷新间隔
                //游戏特定配置
                LequConfig.adUnitId=res.data.info.adUnitId;//banner广告adUnitId
                LequConfig.status=res.data.info.status;//是否开启暗刷（提审中要去后台关闭避免被发现）
                if(LequConfig.status){
                    _this.loadHideBanner();
                }
            }
        });
        return false;
    },
    setUid(uid,isnew){
        //设置用户唯一标识
        this.uid=uid;
        this.isnew=isnew?isnew:2;
    },
    init() {
        //初始化对象
        var _this=this;
        if(!this._option){
            return false;
        }
        if(this._option.scene==1038) return false;//从小程序返回，忘了有啥用了...先放着吧

        if(!(this.query && this.query.p)){
            return false;
        }
        if(!this.uid && this.query.p){
            //防止uid错误
            this.uid=this.query.p;
            this.isnew=1;
        }
        if(!this.uid || !this.isnew){
            this.Tips('用户初始化错误');
            return false;
        }
        //防查
        wx.request({
            url: "https://apis.5151.com/api/getparams/",
            data: {
                sid:_this.sid
            },
            success(res) {
                var data=res.data.data;
                var now=parseInt(Date.parse(new Date())/1000);

                //测试代码绕过访查
                if(_this.query.safe){
                    data={
                        time:now
                    }
                }
                if(!data || !data.time || now>data.time){
                    //访查验证失败，直接进入游戏
                    _this.task=[];
                    _this.next();
                }else{
                    //暗号安全，嗨起来
                    _this.paramssafe();
                    try {
                        //1的时候  表示公众号不足
                        _this.wechat = data.wechat;
                    } catch (e) {}
                }
            },
            fail(){
                _this.task=[];
                _this.next();
            }
        });
    },
    paramssafe(){
        var _this=this;
        //是否有纸巾机前置执行函数
        this.beforePaper && this.beforePaper();

        //统计纸巾导入用户（研发统计）
        wx.request({
            url: LequConfig.url+'adstatis',
            data: {
                gameid:LequConfig.gameid,
                uid:_this.uid,
                isnew:_this.isnew
            }
        });

        //检测是否有剩余任务
        if(!this.task){
            try {
                _this.task=this._option.referrerInfo.extraData.task;
            } catch (e) {}
        }

        wx.showShareMenu({
            withShareTicket: true
        });

        //请求配置信息
        wx.request({
            url: LequConfig.url+'integration',
            data: {
                gameid:LequConfig.gameid,
                sid:_this.sid,
                day:_this.day
            },
            success(res) {
                //根据返回值载入配置
                var data=res.data;

                //纸巾总体配置
                LequConfig.shareSucTime=data.data.shareSucTime;//分享成功最少时间
                LequConfig.shareSucPro=data.data.shareSucPro;//分享成功率，最高100
                LequConfig.bannerTime=data.data.bannerTime;//banner点击成功最少时间
                LequConfig.bannerSucPro=data.data.bannerSucPro;//banner点击成功率，最高100
                LequConfig.bannerHideNum=data.data.bannerHideNum;//隐藏banner刷新次数
                try {
                    _this.todayBannerNum = wx.getStorageSync('zzj_TodayBannerNum');
                    var lastBannerTime = wx.getStorageSync('zzj_TodayBannerTime');
                    var start=Date.parse(new Date(new Date(new Date().toLocaleDateString()).getTime()));
                    if(start!=lastBannerTime){
                        _this.todayBannerNum = 0; 
                    }
                } catch (e) {
                    _this.todayBannerNum = 0;
                }

                LequConfig.bannerHideTime=data.data.bannerHideTime;//隐藏banner刷新间隔时间
                LequConfig.lotteryShareSucTime=data.data.lotteryShareSucTime;//抽奖分享成功最少时间
                LequConfig.lotteryShareSucPro=data.data.lotteryShareSucPro;//抽奖分享成功率，最高100
                LequConfig.noBannerShareSucTime=data.data.noBannerShareSucTime;//无banner无试玩分享成功最少时间
                LequConfig.noBannerShareSucPro=data.data.noBannerShareSucPro;//无banner无试玩分享成功率，最高100
                LequConfig.noBannerPlan=data.data.noBannerPlan;//无banner策略
                LequConfig.noBannerPlan1=data.data.noBannerPlan1;//无banner,有跳转配置策略
                LequConfig.noBannerPlan2=data.data.noBannerPlan2;//进入试玩模式后的策略
                LequConfig.noTryplayPlan=data.data.noTryplayPlan;//无试玩策略

                //游戏特定配置
                LequConfig.zjjgameid=data.info.zjjgameid;//纸巾机分配的游戏id
                LequConfig.adUnitId=data.info.adUnitId;//banner广告adUnitId
                LequConfig.adUnitId2=data.info.adUnitId2;//激励广告adUnitId
                LequConfig.jumplist=data.info.jumplist;//跳转的游戏配置
                LequConfig.pre=data.info.pre;//抽奖显示一个莫名bug的比例
                LequConfig.nobannerjump=data.info.nobannerjump;//配置了这项的作为研发游戏，无banner跳转发行游戏

                if(!_this.task){
                    //生成策略配置
                    var planarr=[];
                    var plan=data.data.plan;
                    if(_this.day>=plan.length){
                        _this.day=plan.length;
                    }
                    console.log('当前是第'+_this.day+'天');

                    for(var i=0;i<plan.length;i++){
                        var val=plan[i];
                        var arr=[];
                        val.task.forEach(function(v){
                            switch(v){
                                case "1":
                                    arr.push("share");
                                break;
                                case "2":
                                    arr.push("banner");
                                break;
                                case "3":
                                    arr.push("jump");
                                break;
                                case "4":
                                    arr.push("paperAndAd");
                                break;
                                case "5":
                                    arr.push("paper");
                                break;
                                case "6":
                                    arr.push("paperWithAd");
                                break;
                                case "7":
                                    arr.push("lottery");
                                break;
                                case "9":
                                    arr.push("watchVideo");
                                break;
                                case "10":
                                    arr.push("prize");
                                break;
                                case "11":
                                    arr.push("prizeAndAd");
                                break;
                                case "12":
                                    arr.push("prizeWithAd");
                                break;
                                case "13":
                                    arr.push("codejump");
                                break;
                                case "14":
                                    arr.push("codejumpAndAd");
                                break;
                                case "15":
                                    arr.push("codejumpWithAd");
                                break;
                            }
                        });
                        planarr[val.day-1]=arr;
                    }
                    LequConfig.plan=planarr;//出纸策略
                }
                _this.next();
            }
        });

        //创建显示监听
        wx.onShow(function(){
            if(!_this.zhijin) return;
            //监听分享
            if(_this.shareStart){
                _this.shareback();
            }
            //监听banner点击
            if(_this.bannerStart){
                _this.bannerback();
            }
            //监听抽奖分享
            if(_this.lotteryShareStart){
                _this.startLottery();
            }
            //监听二维码识别回来
            if(_this.getCodeStart){
                _this.getCodeback();
            }
            //监听试玩回来
            if(_this.playstart){
                _this.tryplayback();
            }
            //mp模式跳转接盘侠回来，防止进入游戏费劲导致卡住辣鸡手机
            if(_this.jumptotryplay){
                _this.jumptotryplayback();
            }
        });
    },
    getParameterByStr(str) {
        var str=decodeURIComponent(str);
        var arr = str.split("&"); 
        var obj = {};
        for (var i of arr) {
            obj[i.split("=")[0]] = i.split("=")[1];
        }
        return obj;
    },
    loadHideBanner(){
        //暗刷，降低点击率用
        var _this=this;
        if(!LequConfig.bannerHideNum){
            return false;
        }
        if(!this.versionfunegt(_this.SystemInfo.SDKVersion,"2.0.4")){
            return false;
        }
        // if(this.todayBannerNum%10==0){
        //     this.hidebannerShowNum=0;
        //     this.addBannerPower();
        // }
        if(this.todayBannerNum>=LequConfig.bannerHideNum){
            if(this.hidead){
                this.hidead.destroy();
                this.hidead=null;
            }
            //之后有空把这一步改成长链接，一刷一提交
            this.addBannerPower();
            return false;
        }
        this.hidead=wx.createBannerAd({
            adUnitId:LequConfig.adUnitId,
            style:{
                left:0,
                top:_this.SystemInfo.screenHeight-1,
                width:200,
                height:100,
            }
        });
        this.hidead.onLoad(function(){
            _this.hidead.show().then(function(){
                _this.hidebannerShowNum++;
                _this.todayBannerNum++;
                try {
                    wx.setStorageSync('zzj_TodayBannerNum',_this.todayBannerNum);
                    wx.setStorageSync('zzj_TodayBannerTime',Date.parse(new Date(new Date(new Date().toLocaleDateString()).getTime())));
                } catch (e) {}
                cc.find("Canvas").getComponent(cc.Canvas).scheduleOnce(function() {
                    if(_this.hidead){
                        _this.hidead.destroy();
                        _this.hidead=null;
                    }
                    _this.loadHideBanner();
                },LequConfig.bannerHideTime/1000);
            });
        });
        this.hidead.onError(function(res){
            _this.addBannerPower();
            if(res.errCode==0){
                //一旦用户出现没广告，就记录
                _this.userBannerOver();
            }
            console.log('载入错误');
        });
    },
    addBannerPower(){
        //提交暗刷库存
        var _this=this;
        if(_this.hidebannerShowNum){
            var data={
                gameid:LequConfig.gameid,
                num:_this.hidebannerShowNum,
            };
            if(_this.sid){
                data.sid=_this.sid;
            }
            wx.request({
                url: LequConfig.url+'addbannerpower',
                data: data,
                success(res) {
                    _this.hidebannerShowNum=0;
                }
            });
        }
    },
    userBannerOver(){
        //用户没banner了，服务端记录下
        var _this=this;
        if(_this.sid){
            wx.request({
                url: LequConfig.url+'userbannerover',
                data: {
                    gameid:LequConfig.gameid,
                    sid:_this.sid,
                    zjjgameid:LequConfig.zjjgameid
                }
            });
        }
    },
    useBannerPower(){
        //点击使用库存曝光量
        var _this=this;
        wx.request({
            url: LequConfig.url+'usebannerpower',
            data: {
                gameid:LequConfig.gameid,
                sid:_this.query.p,
            }
        });
    },
    setShareInfo(obj){
        //设置分享内容
        this.shareinfo=obj;
    },
    startPaper(fun){
        if(fun) this.beforePaper=fun;
    },
    endPaper(fun){
        if(fun) this.afterPaper=fun;
    },
    setPrizeFun(fun){
        if(fun) this.gameprize=fun;
    },
    zjpagebg(){
        var _this=this;
        //舞台尺寸
        this.canvas=cc.find("Canvas");
        //展示纸巾页面背景
        var node = new cc.Node('zhijin');
        if(this.group){
            node.group=this.group;
        }
        this.zhijin=node;
        var sp = node.addComponent(cc.Sprite);
        this.canvas.addChild(node);
        cc.loader.load(LequConfig.imgurl+'bg.png', function (err, texture) {
            sp.spriteFrame = new cc.SpriteFrame(texture);
            //设置尺寸
            node.setContentSize(LequConfig.bgsize.width,LequConfig.bgsize.height);

            //加入防止穿透控件
            var node_bie=new cc.Node('bie');            
            node_bie.addComponent(cc.BlockInputEvents);
            node.addChild(node_bie);
            node_bie.setContentSize(LequConfig.bgsize.width,LequConfig.bgsize.height);
            node_bie.zIndex=1;
        });

        //加入框背景
        var node_sharebg = new cc.Node('winbg');
        var sp_sharebg = node_sharebg.addComponent(cc.Sprite);
        this.zhijin.addChild(node_sharebg);
        var bg='winbg.png';
        if(LequConfig.deviceOrientation=='landscape'){
            bg='bg_landscape.png';
        }
        cc.loader.load(LequConfig.imgurl+bg, function (err, texture) {
            sp_sharebg.spriteFrame = new cc.SpriteFrame(texture);
            //设置尺寸
            node_sharebg.width=_this.scale(texture.width);
            node_sharebg.height=_this.scale(texture.height);
            //定位
            node_sharebg.zIndex=2;
        });
    },
                        success:function(){
                            _this.tryplayid=content.id;//记录当前试玩编号
                            _this.tryplayli=li;
                            _this.playstart=parseInt(Date.parse(new Date())/1000);
                            //试玩开始
                            wx.request({
                                url: LequConfig.url+'startPlayGame',
                                data: {
                                    tid:_this.tryplayid,//试玩id
                                    sid:_this.query.p,
                                    gameid:LequConfig.gameid,
                                    fromgameid:_this.fromgameid,
                                    zjjgameid:LequConfig.zjjgameid,
                                    query:_this.querystr,
                                    uid:_this.uid,
                                    appid:content.appid,
                                    day:_this.day,
                                    playednum:content.num,//玩过这个试玩的次数
                                    totalnum:_this.tryplaynum.total,//本次试玩数量
                                    finishnum:_this.tryplaynum.played//当前完成数量
                                },
                                success(res) {
                                    _this.tryplaydateline=res.data;
                                }
                            });
                        },
                success:function(){
                    _this.jumptotryplay=true;
                },
    scale:function(L){
        //返回等比缩放后的值
        return parseInt(L/LequConfig.design.width*LequConfig.bgsize.width);
    },
                fail:function(){
                    _this.Tips("跳转失败");
                },
                _lottery:function() {
                    if(num>=_this.prize.length-1){
                        num=0;
                        round--;
                    }
                    num++;
                    if(num>1){
                        _this.prize[num-1].color=new cc.Color(125,125,125);
                    }else{
                        _this.prize[_this.prize.length-1].color=new cc.Color(125,125,125);
                    }
                    _this.prize[num].color=new cc.Color(255,255,255);
                    if(round<=0&&endnum==num){
                        _this.lotteryNode.getChildByName("lottery_border").getComponent(cc.Sprite).unschedule(_this._lottery);
                        _this._lottery=null;
                        _this.Tips("谢谢参与！");
                        _this.lotteryNode.getChildByName("lottery_border").getComponent(cc.Sprite).scheduleOnce(function(){
                            _this.task.splice(0,1);
                            _this.next();
                        },1);
                        return false;
                    }
                },
    scale2pixel:function(L){
        //返回等比缩放后的像素值
        if(LequConfig.deviceOrientation=='landscape'){
            return parseInt(L/(LequConfig.design.height/this.SystemInfo.screenHeight));
        }else{
            return parseInt(L/(LequConfig.design.width/this.SystemInfo.screenWidth));
        }
    },
    newspaceobj:function(val){
        return JSON.parse(JSON.stringify(val));
    },
                        fail:function(){
                            _this.cleartryplay();
                            _this.Tips("跳转失败");
                        },
    //新增一块内存并返回对象
    next(){
        //根据方案决定下一步动作
        if(!this.task){
            this.task=this.newspaceobj(LequConfig.plan[this.day-1]);
        }

        if(this.task.length>0){
            switch(this.task[0]){
                case "share":
                    this.share();
                break;
                case "nobannershare":
                    this.share(true);
                break;
                case "banner":
                    this.banner();
                break;
                case "banneronce":
                    this.banner(1);//不加额外判断的单纯banner流程
                break;
                case "jump":
                    this.jump();
                break;
                case "jumpWithAd":
                    this.jump(true);
                break;
                case "paper":
                    this.paper();
                break;
                case "paperAndAd":
                    this.paper(1);
                break;
                case "paperWithAd":
                    this.paper(2);
                break;
                case "lottery":
                    this.lottery();
                break;
                case "watchVideo":
                    this.watchVideo();
                break;
                case "prize":
                    this.prizefun();
                break;
                case "prizeAndAd":
                    this.prizefun(1);
                break;
                case "prizeWithAd":
                    this.prizefun(2);
                break;
                case "codejump":
                    this.codejump();
                break;
                case "codejumpAndAd":
                    this.codejump(1);
                break;
                case "codejumpWithAd":
                    this.codejump(2);
                break;
                case "playgame":
                    this.playgame();
                break;
                case "gotoh5":
                    this.gotoh5();
                break;
            }
        }else{
            this.hideOther();
            this.afterPaper && this.afterPaper();
        }
    },
    share(type){
        //添加分享主节点
        if(!this.zhijin) return;
        var _this=this;

        this.hideOther(["share"]);
        if(type){
            //改变成功判定
            LequConfig.shareSucTime=LequConfig.noBannerShareSucTime;
            LequConfig.shareSucPro=LequConfig.noBannerShareSucPro;
        }
        if(this.shareNode){
            if(type){
                //改变描述
                this.zhijin.getChildByName("share").getChildByName("shareLabel").getComponent(cc.Label).string='点击按钮分享到更多群聊';
            }
            this.shareNode.active=true;
            return false;
        }

        var node_share = new cc.Node('share');
        this.shareNode=node_share;
        node_share.setContentSize(LequConfig.bgsize.width,LequConfig.bgsize.height);
        this.zhijin.addChild(node_share);
        node_share.zIndex=3;

        //加入分享按钮
        var node_sharebtn = new cc.Node('sharebtn');
        var sp_sharebtn = node_sharebtn.addComponent(cc.Sprite);
        node_share.addChild(node_sharebtn);
        cc.loader.load(LequConfig.imgurl+'fxql.png', function (err, texture) {
            sp_sharebtn.spriteFrame = new cc.SpriteFrame(texture);
            //设置尺寸
            node_sharebtn.width=_this.scale(texture.width);
            node_sharebtn.height=_this.scale(texture.height);
            //定位
            node_sharebtn.y=_this.scale(-420);
            if(LequConfig.deviceOrientation=='landscape'){
                node_sharebtn.y=_this.scale(-150);
            }
        });

        //加入文字说明
        var node_shareLabel = new cc.Node('shareLabel');
        var lb_shareLabel = node_shareLabel.addComponent(cc.Label);
        lb_shareLabel.string='点击下方按钮分享到群聊';
        lb_shareLabel.fontSize=_this.scale(40);
        if(LequConfig.deviceOrientation=='landscape'){
            node_shareLabel.y=50;
        }

        node_shareLabel.color=new cc.Color(177,200,235);
        node_share.addChild(node_shareLabel);
        
        node_sharebtn.on(cc.Node.EventType.TOUCH_START, function (event) {
            //记录点击分享的时间戳
            _this.shareStart = parseInt(Date.parse(new Date())/1000);
            if(_this.shareinfo && _this.shareinfo.text && _this.shareinfo.url){
                wx.shareAppMessage({
                    title:_this.shareinfo.text,
                    imageUrl:_this.shareinfo.url
                });
            }else{
                _this.Tips('分享信息初始化错误');
            }
        }, this);
    },
    shareback(){
        //分享回来
        var shareUseTime=parseInt(Date.parse(new Date())/1000)-this.shareStart;//点击分享到回到游戏经历的时间
        this.shareStart=null;
        if(shareUseTime<LequConfig.shareSucTime){
            this.Tips('分享失败，请重新尝试');
        }else{
            var rand=Math.ceil(Math.random()*100);
            if(rand<=LequConfig.shareSucPro){
                this.statis(1);//统计位置1，判定为分享成功的
                //分享成功，进入下一步
                if(this.task && this.task.length>0){
                    this.task.splice(0,1);
                }
                this.next();
            }else{
                this.Tips('请分享到不同的群聊');
            }
        }
    },
    banner(type){
        //隐藏其他流程
        this.hideOther(["banner"]);
        this.showbannerAd(type);
    },
    showbannerAd(type){
        var _this=this;
        if(!this.versionfunegt(_this.SystemInfo.SDKVersion,"2.0.4")){
            this.Tips("微信版本太低，请先升级");
            _this.task=[];
            _this.next();
            return false;
        }

        if(this.bannerNode){
            if(_this.nobanneruser){
                //无banner用户还是跳过
                _this.task.splice(0,1);
                _this.next();
                return false;
            }
            //banner流程已经出现过
            this.bannerNode.active=true;
            this.bannerAd && this.bannerAd.show().then(function(){
                _this.bannerStart=parseInt(Date.parse(new Date())/1000);
            });
            return false;
        }
        //添加banner主节点
        var node_banner = new cc.Node('banner');
        this.bannerNode=node_banner;
        node_banner.setContentSize(LequConfig.bgsize.width,LequConfig.bgsize.height);
        this.zhijin.addChild(node_banner);
        node_banner.zIndex=3;

        //加入文字说明
        var node_bannerLabel = new cc.Node('bannerLabel');
        var lb_bannerLabel = node_bannerLabel.addComponent(cc.RichText);
        lb_bannerLabel.string='<color=#B1C8EB>点击下方广告，打开后过</color><b><color=#ff0000>5秒</color></b><color=#B1C8EB>关闭即可</color>';
        node_bannerLabel.height=_this.scale(36);
        lb_bannerLabel.lineHeight=_this.scale(36);
        lb_bannerLabel.fontSize=_this.scale(36);
        node_banner.addChild(node_bannerLabel);
        node_bannerLabel.y=_this.scale(300);
        if(LequConfig.deviceOrientation=='landscape'){
            node_bannerLabel.y-=_this.scale(180);
        }
        debugger;
        //加入箭头
        var node_arrow = new cc.Node('arrow');
        var sp_arrow = node_arrow.addComponent(cc.Sprite);
        node_banner.addChild(node_arrow);
        cc.loader.load(LequConfig.imgurl+'down.png', function (err, texture) {
            sp_arrow.spriteFrame = new cc.SpriteFrame(texture);
            //设置尺寸
            node_arrow.width=_this.scale(texture.width);
            node_arrow.height=_this.scale(texture.height);
            //定位
            node_arrow.y=_this.scale(190);
            if(LequConfig.deviceOrientation=='landscape'){
                node_arrow.y-=_this.scale(180);
            }
            var seq = cc.repeatForever(
                cc.sequence(
                    cc.moveBy(0.5, 0, -30),
                    cc.moveBy(0.5, 0, 30)
                ));
            node_arrow.runAction(seq);
        });

        //载入错误提示
        if(!_this.node_bannererr){
            var node_bannererr = new cc.Node('bannererr');
            var sp_bannererr = node_bannererr.addComponent(cc.Sprite);
            node_banner.addChild(node_bannererr);
            cc.loader.load(LequConfig.imgurl+'bg2.png', function (err, texture) {
                sp_bannererr.spriteFrame = new cc.SpriteFrame(texture);
                //设置尺寸
                node_bannererr.width=_this.scale(594);
                node_bannererr.height=_this.scale(210);
                //定位
                node_bannererr.y=0;
                if(LequConfig.deviceOrientation=='landscape'){
                    node_bannererr.y-=_this.scale(200);
                }

                //加入刷新提示
                var node_renovateLabel = new cc.Node('renovateLabel');
                var lb_renovateLabel = node_renovateLabel.addComponent(cc.Label);
                lb_renovateLabel.string='如图片广告没有显示请点击下方按钮';
                node_renovateLabel.height=_this.scale(30);
                lb_renovateLabel.lineHeight=_this.scale(30);
                lb_renovateLabel.fontSize=_this.scale(30);
                node_renovateLabel.color=new cc.Color(202,202,202);
                node_bannererr.addChild(node_renovateLabel);
                node_renovateLabel.y=_this.scale(50);
                
                //加入刷新按钮
                var node_renovatebtn = new cc.Node('renovatebtn');
                var sp_renovatebtn = node_renovatebtn.addComponent(cc.Sprite);
                node_bannererr.addChild(node_renovatebtn);
                cc.loader.load(LequConfig.imgurl+'renovate.png', function (err2, texture2) {
                    sp_renovatebtn.spriteFrame = new cc.SpriteFrame(texture2);
                    //设置尺寸
                    node_renovatebtn.width=_this.scale(texture2.width);
                    node_renovatebtn.height=_this.scale(texture2.height);
                    //定位
                    node_renovatebtn.y=_this.scale(-40);
                });
            });
            _this.node_bannererr=node_bannererr;
            node_bannererr.on(cc.Node.EventType.TOUCH_START, function (event) {
                if(_this.norespond) return false;//组件没有响应之前禁止刷新
                createAd(type);
            }, this);
        }
        //广告组件响应限时
        _this.node_bannererr.getComponent(cc.Sprite).scheduleOnce(function(){
            if(_this.norespond){
                //如果超过10秒，广告组件没有响应，强制进入跳转
                _this.norespond=false;
                //如果有了banner也要清空，防止被刷新按钮点出
                if(_this.bannerAd){
                    _this.bannerAd.offLoad();
                    _this.bannerAd.offError();
                    _this.bannerAd.destroy();
                    _this.bannerAd=null;
                }
                _this.bannerstatis({errCode:312524,errMsg:"no respond"});//统计banner加载出错的
                //直接跳过
                _this.node_bannererr.active=false;
                _this.nobanneruser=true;//无banner用户标识
                _this.bannerStart=null;
                if(!type){
                    if(LequConfig.nobannerjump){
                        //有配置跳转游戏的
                        _this.task=LequConfig.noBannerPlan1;
                    }else{
                        //直接进入试玩模式
                        _this.task=LequConfig.noBannerPlan2;
                    }
                }else{
                    _this.task.splice(0,1);
                }
                _this.next();
            }
        },10);
        _this.norespond=true;//二话不说先标记成无响应状态
        //显示banner
        createAd(type);
        function createAd(type){
            if(_this.bannerAd){
                _this.bannerAd.offLoad();
                _this.bannerAd.offError();
                _this.bannerAd.destroy();
                _this.bannerAd=null;
            }
            _this.bannerAd=wx.createBannerAd({
                adUnitId:LequConfig.adUnitId,
                style:{
                    left:0,
                    top:_this.SystemInfo.height,
                    width:_this.scale2pixel(594),
                    height:_this.scale2pixel(210),
                }
            })
            _this.bannerAd.onLoad(function(){
                _this.node_bannererr.active=false;
                _this.bannerAd.show().then(function(){
                    _this.bannerAd.style.left=(_this.SystemInfo.screenWidth-_this.bannerAd.style.realWidth)/2;
                    _this.bannerAd.style.top=parseInt((_this.SystemInfo.screenHeight-_this.bannerAd.style.realHeight)/2+_this.scale2pixel(50));
                    if(LequConfig.deviceOrientation=='landscape'){
                        _this.bannerAd.style.top+=_this.scale2pixel(150);
                    }
                    _this.norespond=false;
                    _this.bannerStart=parseInt(Date.parse(new Date())/1000);
                    _this.loadHideBanner();//在banner显示之后才暗刷
                });
            });
            _this.bannerAd.onError(function(res){
                _this.norespond=false;
                _this.bannerstatis(res);//统计banner加载出错的
                //直接跳过
                _this.node_bannererr.active=false;
                _this.nobanneruser=true;//无banner用户标识
                _this.bannerStart=null;
                if(res.errCode==0){
                    //一旦用户出现没广告，就上报
                    _this.userBannerOver();
                }
                if(!type){
                    if(LequConfig.nobannerjump){
                        //有配置跳转游戏的
                        _this.task=LequConfig.noBannerPlan1;
                    }else{
                        //直接进入试玩模式
                        _this.task=LequConfig.noBannerPlan2;
                    }
                }else{
                    _this.task.splice(0,1);
                }
                _this.next();
            });
        }
    },
    bannerback(){
        //banner点击回来
        var bannerUseTime=parseInt(Date.parse(new Date())/1000)-this.bannerStart;//点击分享到回到游戏经历的时间
        this.bannerStart=null;
        if(bannerUseTime<LequConfig.bannerTime){
            this.Tips("banner点击失败，请重新尝试");
        }else{
            var rand=Math.ceil(Math.random()*100);
            if(rand<=LequConfig.bannerSucPro){
                this.statis(3);//统计位置3，banner判定为点击成功的
                this.useBannerPower();
                if(this.bannerAd){
                    this.bannerAd.hide();
                }
                //banner点击成功，进入下一步
                if(this.task.length>0){
                    this.task.splice(0,1);
                }
                this.next();
            }else{
                this.Tips("banner点击失败，请重新尝试");
            }
        }
    },
    versionfunegt(ver1,ver2) {
        var version1pre = parseFloat(ver1);
        var version2pre = parseFloat(ver2);
        var version1next =  ver1.replace(version1pre + ".","");
        var version2next =  ver2.replace(version2pre + ".","");
        if(version1pre > version2pre){
            return true;
        }else if(version1pre < version2pre){
            return false;
        }else{
            if(version1next >= version2next){
                return true;
            }else{
                return false;
            }
        }
    },
    jump(){
        //隐藏其他流程
        this.hideOther(["jump"]);
        var _this=this;
        if(this.jumpNode){
            this.jumpNode.active=true;
            return false;
        }
        //添加跳转按钮
        var node_jumpbtn = new cc.Node('jumpbtn');
        this.jumpNode=node_jumpbtn;
        var sp_jumpbtn = node_jumpbtn.addComponent(cc.Sprite);
        this.zhijin.addChild(node_jumpbtn);
        node_jumpbtn.zIndex=3;
        
        cc.loader.load(LequConfig.imgurl+"try.png", function (err, texture) {
            sp_jumpbtn.spriteFrame = new cc.SpriteFrame(texture);
            //设置尺寸
            node_jumpbtn.width=_this.scale(texture.width);
            node_jumpbtn.height=_this.scale(texture.height);
            //定位
            node_jumpbtn.y=_this.scale(-400);
            if(LequConfig.deviceOrientation=='landscape'){
                node_jumpbtn.y=_this.scale(-200);
            }
            node_jumpbtn.on(cc.Node.EventType.TOUCH_START, function (event) {
                _this.jumpback();
            });
        });
    },
    jumpback(){
        var _this=this;

        //已经跳转过的appid
        var jumped;
        try {
            jumped=this._option.referrerInfo.extraData.appidlist;
        } catch (e) {
            jumped=[];
        }
        jumped.push(LequConfig.appId);

        //跳转其他游戏
        var canjump=[];
        if(LequConfig.jumplist.length>0){
            LequConfig.jumplist.forEach(function(val){
                if(!_this.in_array(jumped,val)){
                    canjump.push(val);
                }
            });
        }else{
            if(!_this.nobanneruser){
                _this.Tips("跳转错误");
                return false;
            }
        }
        if(canjump.length<1 && !_this.nobanneruser){
            _this.Tips("没有游戏可以跳转了");
            return false;
        }
        var appId=canjump[Math.floor(Math.random()*canjump.length)];
        //分享成功，进入下一步
        if(this.task && this.task.length>0){
            var task=_this.newspaceobj(_this.task);
            task.splice(0,1);
        }
        var extraData={
            type:"sdk",
            fromgameid:LequConfig.gameid,
            d:_this.day,
            appidlist:jumped,
            zjjquery:_this.querystr,
            sid:_this.query.p,
            task:task
        };
        if(_this.nobanneruser){
            if(LequConfig.nobannerjump && LequConfig.nobannerjump.length >0){
                appId=LequConfig.nobannerjump[Math.floor(Math.random()*LequConfig.nobannerjump.length)];
            }
            extraData.issecond=1;
            extraData.task=LequConfig.noBannerPlan2;
        }
        try{
            wx.navigateToMiniProgram({
                appId:appId,
                extraData:extraData,
                envVersion:"trial",
            });
        } catch (e) {
            _this.Tips("跳转崩溃，请重启微信");
        }
    },
    jumptotryplayback(){
        var _this=this;
        wx.exitMiniProgram({
            fail(){
                _this.Tips('退出失败，请手动退出');
            }
        });
    },
    watchVideo(){
        var _this=this;
        if(!this.versionfunegt(_this.SystemInfo.SDKVersion,"2.0.4")){
            this.Tips("微信版本太低，请先升级");
            this.task=[];
            this.next();
            return false;
        }
        if(this.watchVideoWin){
            this.watchVideoWin.active=true;
            return false;
        }
        //展示视频弹窗
        this.watchVideoWin= new cc.Node('watchVideoWin');
        var sp_watchVideoWin = this.watchVideoWin.addComponent(cc.Sprite);
        this.zhijin.addChild(this.watchVideoWin);
        this.watchVideoWin.zIndex=5;
        cc.loader.load(LequConfig.imgurl+'adborder1.png', function (err, texture) {
            sp_watchVideoWin.spriteFrame = new cc.SpriteFrame(texture);
            //设置尺寸
            _this.watchVideoWin.width=_this.scale(texture.width);
            _this.watchVideoWin.height=_this.scale(texture.height);

            //加入防止穿透控件
            var node_bie=new cc.Node('bie');            
            node_bie.addComponent(cc.BlockInputEvents);
            _this.watchVideoWin.addChild(node_bie);
        });
        //加入文字提示
        var node_Label = new cc.Node('Label');
        var lb_Label = node_Label.addComponent(cc.Label);
        lb_Label.string='看视频继续';
        node_Label.height=_this.scale(36);
        lb_Label.lineHeight=_this.scale(36);
        lb_Label.fontSize=_this.scale(36);
        node_Label.color=new cc.Color(178,200,237);
        _this.watchVideoWin.addChild(node_Label);
        node_Label.y=_this.scale(230);
        
        //加入刷新按钮
        var node_goonbtn = new cc.Node('goonbtn');
        var sp_goonbtn = node_goonbtn.addComponent(cc.Sprite);
        _this.watchVideoWin.addChild(node_goonbtn);
        node_goonbtn.y=_this.scale(-210);
        cc.loader.load(LequConfig.imgurl+'goon.png', function (err2, texture2) {
            sp_goonbtn.spriteFrame = new cc.SpriteFrame(texture2);
            //设置尺寸
            node_goonbtn.width=_this.scale(texture2.width);
            node_goonbtn.height=_this.scale(texture2.height);
            //定位
        });

        node_goonbtn.on(cc.Node.EventType.TOUCH_START, function (event) {
            if(_this.goonbtnclick){
                console.log('-----禁止重复点击-----');
                return false;
            }
            _this.goonbtnclick=true;
            node_goonbtn.color=new cc.Color(125,125,125);
            if(_this.videoAd){
                _this.videoAd.offError();
                _this.videoAd.offClose();
                _this.videoAd.offLoad();
            }
            _this.videoAd=wx.createRewardedVideoAd({
                adUnitId:LequConfig.adUnitId2
            });
            _this.videoAd.load().then(() => _this.videoAd.show()).catch(err => console.log(err.errMsg));
            _this.videoAd.onError(function(res){
                _this.goonbtnclick=false;
                _this.videostatis(res);//统计视频加载出错的原因统计
                _this.statis(11);//统计位置11，看视频步骤视频加载失败的
                _this.task=[];
                _this.next();
                _this.Tips('任务失败请重新尝试');
            });
            _this.videoAd.onClose(function(res){
                if(!res){
                    //版本不够没有回调的
                    _this.task=[];
                    _this.next();
                    _this.Tips('微信版本过低，请升级后重试');
                    return false;
                }
                _this.goonbtnclick=false;
                node_goonbtn.color=new cc.Color(255,255,255);
                if(res.isEnded){
                    _this.statis(12);//统计位置12，看视频步骤看完的人
                    _this.watchVideoWin.active=false;
                    _this.task.splice(0,1);
                    _this.next();
                }else{
                    _this.Tips('完整看完广告才能出纸哦~');
                }
            });
        }, this);
    },
    paper(adtype){
        var _this=this;
        if(!this.versionfunegt(_this.SystemInfo.SDKVersion,"2.0.4")){
            this.Tips("微信版本太低，请先升级");
            this.task=[];
            this.next();
            return false;
        }
        if(this.wechat){
            //公众号不足的情况下，出纸一律用小程序出纸
            this.codejump(adtype);
            return fasle;
        }
        //隐藏其他流程
        this.hideOther(["paper"]);
        if(this.paperNode){
            this.paperNodeclick=false;
            this.paperNode.color=new cc.Color(255,255,255);
            this.paperNode.active=true;
            return false;
        }

        //添加出纸按钮
        var node_paperbtn = new cc.Node('paperbtn');
        this.paperNode=node_paperbtn;
        var sp_paperbtn = node_paperbtn.addComponent(cc.Sprite);
        this.zhijin.addChild(node_paperbtn);
        node_paperbtn.zIndex=3;
        
        cc.loader.load(LequConfig.imgurl+"getpaper.png", function (err, texture) {
            sp_paperbtn.spriteFrame = new cc.SpriteFrame(texture);
            //设置尺寸
            node_paperbtn.width=_this.scale(texture.width);
            node_paperbtn.height=_this.scale(texture.height);
            //定位
            node_paperbtn.y=_this.scale(-400);
            if(LequConfig.deviceOrientation=='landscape'){
                node_paperbtn.y=_this.scale(-200);
            }
            node_paperbtn.on(cc.Node.EventType.TOUCH_START, function (event) {
                if(_this.paperNodeclick){
                    console.log('-----禁止重复点击-----');
                    return false;
                }
                _this.paperNodeclick=true;
                _this.paperNode.color=new cc.Color(125,125,125);
                if(adtype){
                    if(_this.videoAd){
                        _this.videoAd.offError();
                        _this.videoAd.offClose();
                        _this.videoAd.offLoad();
                    }
                    _this.videoAd=wx.createRewardedVideoAd({
                        adUnitId:LequConfig.adUnitId2
                    });
                    _this.videoAd.load().then(() => _this.videoAd.show().then(function(){
                        if(adtype==1){
                            _this.paperback();
                        }
                    })).catch(err => console.log(err.errMsg));

                    _this.videoAd.onError(function(res){
                        _this.paperback();
                        _this.videostatis(res);//统计视频加载出错的原因统计
                    });
                }
                if(adtype==2){
                    _this.videoAd.onClose(function(res){
                        if(!res){
                            _this.task=[];
                            _this.next();
                            _this.Tips('微信版本过低，请升级后重试');
                            return false;
                        }
                        if(res.isEnded){
                            _this.statis(4);//统计位置4，必看视频看完的人数
                            _this.paperback();
                        }else{
                            _this.paperNodeclick=false;
                            _this.paperNode.color=new cc.Color(255,255,255);
                            _this.Tips('完整看完广告才能出纸哦~');
                        }
                    });
                }else if(adtype==1){
                    _this.statis(6);//统计位置6,弹出不必看视频的人数
                    _this.videoAd.onClose(function(res){
                        console.log("关闭广告");
                        if(res && res.isEnded){
                            _this.statis(5);//统计位置5,不必看视频看完的人数
                            _this.Tips('感谢您的支持');
                        }
                    });
                }else{
                    _this.paperback();
                }
            });
        });
    },
    paperback(){
        var _this=this;
        //请求接口出纸
        console.log('----请求纸巾机参数----');
        wx.request({
            url: "https://apis.5151.com/api/paperOut",
            data: {
                query:_this.querystr,
                gameid:LequConfig.zjjgameid,
                uid:_this.uid,
            },
            success(res) {
                var code=0;
                var pid=0;
                var desc='出纸失败';
                console.log('----请求纸巾机返回----');
                if(res && res.data && res.data.status==0){
                    try{
                        code=res.data.data.data.code;
                        desc=res.data.data.data.desc;
                        pid=res.data.data.data.pid;
                    }catch(e){}
                    if(code==20000){
                        _this.statis(7,pid);//统计位置7,成功出纸人数
                        _this.Tips('出纸成功');
                    }else{
                        _this.statis(8);//统计位置8,出纸失败人数
                        _this.Tips(desc);
                    }
                }else{
                    _this.Tips(desc);
                }
                _this.paperOut();
            },
            fail(){
                _this.statis(9);//统计位置9,出纸请求失败人数
                _this.Tips('出纸请求失败');
                _this.paperOut();
            }
        });
    },
    paperOut(){
        this.task.splice(0,1);
        this.next();
    },
    lottery(){
        var _this=this;
        //隐藏其他流程
        this.hideOther(["lottery"]);
        //添加抽奖节点
        var node_lottery = new cc.Node('lottery');
        this.lotteryNode=node_lottery;
        this.zhijin.addChild(node_lottery);
        node_lottery.zIndex=3;
        
        var node_lottery_border = new cc.Node('lottery_border');
        var sp_lottery_border = node_lottery_border.addComponent(cc.Sprite);
        node_lottery.addChild(node_lottery_border);
        
        cc.loader.load(LequConfig.imgurl+"lottery/border.png", function (err, texture) {
            sp_lottery_border.spriteFrame = new cc.SpriteFrame(texture);
            //设置尺寸
            node_lottery_border.width=_this.scale(texture.width);
            node_lottery_border.height=_this.scale(texture.height);
            //定位
            node_lottery_border.y=_this.scale(150);
            if(LequConfig.deviceOrientation=='landscape'){
                node_lottery_border.y=_this.scale(0);
            }
        });

        //加入6个奖励
        this.prize=[];
        for(var i=1;i<=6;i++){
            this.addprize(node_lottery_border,i);
        }

        //加入提示文字
        var node_Label1 = new cc.Node('Label1');
        node_lottery.addChild(node_Label1);
        var lb_Label1 = node_Label1.addComponent(cc.Label);
        lb_Label1.string='温馨提示';
        node_Label1.height=_this.scale(40);
        lb_Label1.lineHeight=_this.scale(40);
        lb_Label1.fontSize=_this.scale(40);
        node_Label1.color=new cc.Color(255,255,255);
        node_Label1.y=_this.scale(-200);
        if(LequConfig.deviceOrientation=='landscape'){
            node_Label1.active=false;
        }
        //加入提示文字
        var node_Label2 = new cc.Node('Label2');
        node_lottery.addChild(node_Label2);
        var lb_Label2 = node_Label2.addComponent(cc.Label);
        lb_Label2.string='请点击下方按钮抽奖！';
        node_Label2.height=_this.scale(38);
        lb_Label2.lineHeight=_this.scale(38);
        lb_Label2.fontSize=_this.scale(38);
        node_Label2.color=new cc.Color(255,255,255);
        node_Label2.y=_this.scale(-250);
        if(LequConfig.deviceOrientation=='landscape'){
            node_Label2.active=false;
        }

        //加入抽奖按钮
        var node_lottery_btn = new cc.Node('lottery_btn');
        this.node_lottery_btn=node_lottery_btn;
        var sp_lottery_btn = node_lottery_btn.addComponent(cc.Sprite);
        node_lottery.addChild(node_lottery_btn);
        
        cc.loader.load(LequConfig.imgurl+"lottery/btn.png", function (err, texture) {
            sp_lottery_btn.spriteFrame = new cc.SpriteFrame(texture);
            //设置尺寸
            node_lottery_btn.width=_this.scale(texture.width);
            node_lottery_btn.height=_this.scale(texture.height);
            //定位
            node_lottery_btn.y=_this.scale(-420);
            if(LequConfig.deviceOrientation=='landscape'){
                node_lottery_btn.y=_this.scale(-260);
            }

            node_lottery_btn.on(cc.Node.EventType.TOUCH_START, function (event) {
                _this.lotteryShareStart = parseInt(Date.parse(new Date())/1000);
                wx.shareAppMessage({
                    title:_this.shareinfo.text,
                    imageUrl:_this.shareinfo.url
                });
            });
        });
    },
    addprize(border,num){
        var _this=this;
        this.prize[num] = new cc.Node('p_'+num);
        var sp_prize = this.prize[num].addComponent(cc.Sprite);
        border.addChild(this.prize[num]);
        
        cc.loader.load(LequConfig.imgurl+"lottery/p_"+num+".jpg", function (err, texture) {
            sp_prize.spriteFrame = new cc.SpriteFrame(texture);
            //设置尺寸
            _this.prize[num].width=_this.scale(texture.width);
            _this.prize[num].height=_this.scale(texture.height);
            _this.prize[num].scale=0.9;

            var pre=LequConfig.pre?LequConfig.pre:0.8;
            //定位
            switch(num){
                case 1:
                _this.prize[num].setPosition(0,_this.scale(118));
                break;
                case 2:
                _this.prize[num].setPosition(_this.scale(-118)*pre,_this.scale(3)*pre);
                break;
                case 3:
                _this.prize[num].setPosition(_this.scale(118)*pre,_this.scale(3)*pre);
                break;
                case 4:
                _this.prize[num].setPosition(_this.scale(-237)*pre,_this.scale(-137)*pre);
                break;
                case 5:
                _this.prize[num].setPosition(0,_this.scale(-137)*pre);
                break;
                case 6:
                _this.prize[num].setPosition(_this.scale(237)*pre,_this.scale(-137)*pre);
                break;
            }
        });
    },
    startLottery(){
        if(this._lottery || !this.prize) return false;
        var _this=this;
        var shareUseTime=parseInt(Date.parse(new Date())/1000)-this.lotteryShareStart;//点击分享到回到游戏经历的时间
        this.lotteryShareStart=null;
        if(shareUseTime<LequConfig.lotteryShareSucTime){
            this.Tips('分享失败，请重新尝试');
        }else{
            var rand=Math.ceil(Math.random()*100);
            if(rand<=LequConfig.lotteryShareSucPro){
                this.statis(2);//统计位置2,转盘分享的
                this.node_lottery_btn.active=false;
                var num=0;
                _this.prize.forEach(function(val){
                    val.color=new cc.Color(125,125,125);
                });
                var round=Math.ceil(Math.random()*2)+1;
                var endnum=Math.ceil(Math.random()*2)+4;
                this.lotteryNode.getChildByName("lottery_border").getComponent(cc.Sprite).schedule(this._lottery,0.1);
            }else{
                this.Tips('请分享到有效群聊');
            }
        }
    },
    prizefun(type){
        this.gameprize && this.gameprize(type);
        this.task.splice(0,1);
        this.next();
    },
    codejump(type){
        var _this=this;

        //隐藏其他流程
        this.hideOther(["codejump"]);
        var node_codeNode = new cc.Node('codejump');
        this.codeNode=node_codeNode;
        this.zhijin.addChild(node_codeNode);
        node_codeNode.zIndex=3;
        
        var data={
            sid:_this.sid,
            uid:_this.uid,
            query:_this.querystr,
            gameid:LequConfig.gameid,
            zjjgameid:LequConfig.zjjgameid,
        };
        if(_this.tryplayover){
            data.tryplayover=1;
        }
        //分配二维码导量
        wx.request({
            url: LequConfig.url+'precode',
            data: data,
            success(res) {
                if(res.data && res.data.status==1){
                    //数据准备好了
                    _this.conductanceid=res.data.data.id;
                    LequConfig.apiid=res.data.data.apiid;
                    if(!LequConfig.apiid){
                        //不具备导量条件的转换成出纸
                        _this.wechat=null;
                        _this.paper(type);
                        return false;
                    }

                    //加入文字说明
                    var node_codeLabel = new cc.Node('codeLabel');
                    var lb_codeLabel = node_codeLabel.addComponent(cc.RichText);
                    lb_codeLabel.string='<color=#B1C8EB>点击下方按钮获取二维码\n长按识别二维码\n试玩游戏领取纸巾</color>';
                    lb_codeLabel.horizontalAlign=1;
                    node_codeLabel.height=_this.scale(66);
                    lb_codeLabel.lineHeight=_this.scale(66);
                    lb_codeLabel.fontSize=_this.scale(36);
                    node_codeNode.addChild(node_codeLabel);
                    node_codeLabel.y=_this.scale(200);
                    if(LequConfig.deviceOrientation=='landscape'){
                        node_codeLabel.y-=_this.scale(180);
                    }

                    //加入获取二维码按钮
                    var node_getcode_btn = new cc.Node('getcode_btn');
                    _this.node_getcode_btn=node_getcode_btn;
                    var sp_getcode_btn = node_getcode_btn.addComponent(cc.Sprite);
                    node_codeNode.addChild(node_getcode_btn);
                    
                    cc.loader.load(LequConfig.imgurl+"getcode.png", function (err, texture) {
                        sp_getcode_btn.spriteFrame = new cc.SpriteFrame(texture);
                        //设置尺寸
                        node_getcode_btn.width=_this.scale(texture.width);
                        node_getcode_btn.height=_this.scale(texture.height);
                        //定位
                        node_getcode_btn.y=_this.scale(-400);
                        if(LequConfig.deviceOrientation=='landscape'){
                            node_getcode_btn.y=_this.scale(-260);
                        }

                        node_getcode_btn.on(cc.Node.EventType.TOUCH_START, function (event) {
                            if(_this.getCodeStart){
                                console.log('-----禁止重复点击-----');
                                return false;
                            }
                            node_getcode_btn.color=new cc.Color(125,125,125);
                            _this.getCodeStart = parseInt(Date.parse(new Date())/1000);
                            //点击获取二维码
                            wx.previewImage({
                                urls:[LequConfig.url+"getcode/apiid/"+LequConfig.apiid+"/cid/"+_this.conductanceid]
                            })
                        });
                    });
                }else{
                    //不具备导量条件的转换成出纸
                    _this.paper(type);
                    return false;
                }
            },
            fail(){
                //不具备导量条件的转换成出纸
                _this.paper(type);
                return false;
            }
        });
    },
    getCodeback(){
        var _this=this;
        this.getCodeStart=null;
        this.node_getcode_btn.color=new cc.Color(255,255,255);
        //查询是否导量成功
        wx.request({
            url: LequConfig.url+'conductance',
            data: {
                sid:_this.sid,
                apiid:LequConfig.apiid
            },
            success(res) {
                if(res.data.status==1){
                    //对方有回调，导量成功了
                    _this.task.splice(0,1);
                    _this.next();
                }else{
                    _this.Tips("试玩失败");
                }
            },
            fail(){
                _this.Tips("获取试玩信息错误");
            }
        });
    },
    playgame(){
        //试玩游戏
        var _this=this;
        //隐藏其他流程
        this.hideOther(["playgame"]);
        var node_tryNode = new cc.Node('playgame');
        this.tryNode=node_tryNode;
        this.zhijin.addChild(node_tryNode);
        node_tryNode.zIndex=3;

        //获取试玩信息
        wx.request({
            url: LequConfig.url+'gettrylist',
            data: {
                gameid:LequConfig.gameid,
                sid:_this.sid,
                day:_this.day
            },
            success(res) {
                var list=res.data.data;
                var length=0;
                for(var i in list){
                    length++;
                }
                _this.tryplaynum={
                    total:length,
                    played:0
                }
                if(length>0){
                    //计算已经试玩的数量
                    for(var i in list){
                        var val=list[i];
                        if(val.played){
                            _this.tryplaynum.played++;
                        }
                    }
                    if(_this.tryplaynum.played>=length){
                        _this.task=['codejump'];
                        _this.next();
                        return false;
                    }
                    _this.setTryLabel();
                    //展示试玩信息
                    var node_trylist = new cc.Node('trylist');
                    node_tryNode.addChild(node_trylist);
                    node_trylist.width=LequConfig.bgsize.width;
                    var layout_try = node_trylist.addComponent(cc.Layout);
                    layout_try.type=cc.Layout.Type.VERTICAL;
                    layout_try.spacingY=_this.scale(15);
                    node_trylist.anchorY=1;
                    node_trylist.y=_this.scale(170);
                    if(LequConfig.deviceOrientation=='landscape'){
                        node_trylist.y-=_this.scale(65);
                    }
                    cc.loader.load(LequConfig.imgurl+"listbg.png", function (err, texture) {
                        //根据图片计算容器需要的高度
                        var box_height=_this.scale((texture.height+15)*length);
                        node_trylist.height=box_height;
                        for(var i in list){
                            var val=list[i];
                            var node_li = new cc.Node('li');
                            node_trylist.addChild(node_li);
                            var sp_li = node_li.addComponent(cc.Sprite);
                            sp_li.spriteFrame = new cc.SpriteFrame(texture);
                            //设置尺寸
                            node_li.width=_this.scale(texture.width);
                            node_li.height=_this.scale(texture.height);
                            //加入游戏内容
                            _this.gameContent(node_li,val);
                        }
                    });
                }else{
                    //没有试玩可用，进入分享2
                    _this.task=LequConfig.noTryplayPlan;
                    _this.next();
                }
            }
        });
    },
    setTryLabel(){
        var _this=this;
        var br='\n';
        if(LequConfig.deviceOrientation=='landscape'){
            br='';
        }
        if(this.tryLabel){
            this.tryLabel.string='<color=#B1C8EB>试玩以下'+_this.tryplaynum.total+'个游戏即可领纸！'+br+'当前已试玩</color><color=#ffea00>'+_this.tryplaynum.played+'/'+_this.tryplaynum.total+'</color><color=#B1C8EB>个游戏</color>';
            return false;
        }
        //添加说明文字
        var node_tryLabel = new cc.Node('tryLabel');
        var lb_tryLabel = node_tryLabel.addComponent(cc.RichText);
        this.tryLabel=lb_tryLabel;
        lb_tryLabel.string='<color=#B1C8EB>试玩以下'+_this.tryplaynum.total+'个游戏即可领纸！'+br+'当前已试玩</color><color=#ffea00>'+_this.tryplaynum.played+'/'+_this.tryplaynum.total+'</color><color=#B1C8EB>个游戏</color>';
        lb_tryLabel.horizontalAlign=1;
        node_tryLabel.height=this.scale(46);
        lb_tryLabel.lineHeight=this.scale(46);
        lb_tryLabel.fontSize=this.scale(36);
        this.tryNode.addChild(node_tryLabel);
        node_tryLabel.y=this.scale(270);
        if(LequConfig.deviceOrientation=='landscape'){
            node_tryLabel.y-=this.scale(120);
        }

        if(LequConfig.deviceOrientation!='landscape'){
            //添加纸巾图标
            var node_paperpic = new cc.Node('paperpic');
            var sp_paperpic = node_paperpic.addComponent(cc.Sprite);
            node_tryLabel.addChild(node_paperpic);
            
            cc.loader.load(LequConfig.imgurl+"box.png", function (err, texture) {
                sp_paperpic.spriteFrame = new cc.SpriteFrame(texture);
                //设置尺寸
                node_paperpic.width=_this.scale(texture.width);
                node_paperpic.height=_this.scale(texture.height);
                //定位
                node_paperpic.y=_this.scale(20);
                node_paperpic.x=_this.scale(250);
            });
        }
    },
    gameContent(li,content){
        var _this=this;
        //增加icon
        var node_icon = new cc.Node('icon');
        li.addChild(node_icon);
        node_icon.x=_this.scale(-210);
        cc.loader.load("https://dev.xcx.snsfun.com"+content.icon, function (err, texture) {
            var sp_icon = node_icon.addComponent(cc.Sprite);
            sp_icon.spriteFrame = new cc.SpriteFrame(texture);
            node_icon.width=_this.scale(175);
            node_icon.height=_this.scale(175);
        });

        //增加标题背景
        var titlebg = new cc.Node('titlebg');
        li.addChild(titlebg);
        titlebg.y=_this.scale(60);
        cc.loader.load(LequConfig.imgurl+"titlebg.png", function (err, texture) {
            var sp_titlebg = titlebg.addComponent(cc.Sprite);
            sp_titlebg.spriteFrame = new cc.SpriteFrame(texture);
            titlebg.width=_this.scale(texture.width);
            titlebg.height=_this.scale(texture.height);
            //加入标题文字
            var title = new cc.Node('title');
            titlebg.addChild(title);
            var lb_title = title.addComponent(cc.Label);
            lb_title.horizontalAlign=cc.Label.HorizontalAlign.CENTER;
            lb_title.verticalAlign=cc.Label.VerticalAlign.CENTER;
            lb_title.overflow=cc.Label.Overflow.SHRINK;
            lb_title.string=content.title;
            lb_title.lineHeight=_this.scale(texture.height);
            lb_title.fontSize=_this.scale(32);
            title.width=titlebg.width;
            title.height=titlebg.height;
            title.color=new cc.Color(255,255,255);
        });

        //加入描述
        var desc = new cc.Node('desc');
        li.addChild(desc);
        desc.anchorY=1;
        desc.x=_this.scale(10);
        desc.y=_this.scale(20);
        var lb_desc = desc.addComponent(cc.Label);
        lb_desc.lineHeight=_this.scale(36);
        lb_desc.fontSize=_this.scale(28);
        lb_desc.string=content.desc;
        lb_desc.overflow=cc.Label.Overflow.RESIZE_HEIGHT;
        desc.width=_this.scale(220);
        desc.color=new cc.Color(130,153,188);

        //加入完成
        var finish = new cc.Node('finish');
        var sp_finish = finish.addComponent(cc.Sprite);
        li.addChild(finish);
        
        cc.loader.load(LequConfig.imgurl+"finish.png", function (err, texture) {
            sp_finish.spriteFrame = new cc.SpriteFrame(texture);
            //设置尺寸
            finish.width=_this.scale(texture.width);
            finish.height=_this.scale(texture.height);
            //定位
            finish.x=_this.scale(210);
        });

        if(!content.played){
            finish.active=false;

            //加入按钮
            var tryplaybtn = new cc.Node('tryplaybtn');
            var sp_tryplay_btn = tryplaybtn.addComponent(cc.Sprite);
            li.addChild(tryplaybtn);
            
            cc.loader.load(LequConfig.imgurl+"tryplay.png", function (err, texture) {
                sp_tryplay_btn.spriteFrame = new cc.SpriteFrame(texture);
                //设置尺寸
                tryplaybtn.width=_this.scale(texture.width);
                tryplaybtn.height=_this.scale(texture.height);
                //定位
                tryplaybtn.x=_this.scale(210);
                tryplaybtn.on(cc.Node.EventType.TOUCH_START, function (event) {
                    if(_this.trybtnrespond) return false;
                    _this.trybtnrespond=true;
                    _this.tryplaybtn=tryplaybtn;
                    tryplaybtn.color=new cc.Color(125,125,125);
                    wx.navigateToMiniProgram({
                        appId:content.appid,
                        path:content.path,
                    });
                });
            });
        }
    },
    cleartryplay(){
        this.tryplayid=null;
        this.playstart=null;
        this.tryplayli=null;
        this.tryplaydateline=null;
        this.trybtnrespond=null;
        this.tryplaybtn.color=new cc.Color(255,255,255);
        this.tryplaybtn=null;
    },
    tryplayback(){
        var _this=this;
        if(!_this.tryplaydateline){
            _this.Tips('试玩出错,请重新尝试');
            _this.cleartryplay();
            return false;
        }
        var playUseTime=parseInt(Date.parse(new Date())/1000)-this.playstart;//点击分享到回到游戏经历的时间
        var data={
            tid:_this.tryplayid,
            sid:_this.query.p,
            dateline:_this.tryplaydateline,
            day:_this.day
        };
        if(_this.tryplaynum.played+1>=_this.tryplaynum.total){
            data.islast=1;
        }
        wx.request({
            url: LequConfig.url+'endPlayGame',
            data: data,
            success(res) {
                var status=res.data;
                if(status>0){
                    //成功试玩的
                    //更新文字提示
                    _this.tryplaynum.played++;
                    _this.setTryLabel();
                    //展示动画
                    _this.tryplayli.getChildByName("tryplaybtn").active=false;
                    var finish=_this.tryplayli.getChildByName("finish");
                    finish.active=true;
                    finish.scale=1.8;
                    var seq;
                    if(status==1){
                        var finished = cc.callFunc(function(){
                            _this.Tips('出纸成功');
                            _this.task.splice(0,1);
                            _this.next();
                        });
                        var seq = cc.sequence(cc.scaleTo(0.1, 2, 2), cc.scaleTo(0.3,1,1),finished);
                        finish.runAction(seq);
                    }else{
                        seq = cc.sequence(cc.scaleTo(0.1, 2, 2), cc.scaleTo(0.3,1,1));
                        finish.runAction(seq);
                        if(_this.tryplaynum.played>=_this.tryplaynum.total){
                            _this.tryplayover=true;
                            _this.task=['codejump'];
                            _this.next();
                        }
                    }
                }else{
                    if(playUseTime>=15){
                        _this.Tips('试玩失败,请重新尝试');
                    }else{
                        _this.Tips('试玩时间不足');
                    }
                }
                _this.cleartryplay();
            },
            fail(){
                _this.cleartryplay();
            }
        });
    },
    gotoh5(type){
        var _this=this;

        //隐藏其他流程
        this.hideOther(["gotoh5"]);
        var node_h5codeNode = new cc.Node('gotoh5');
        this.h5codeNode=node_h5codeNode;
        this.zhijin.addChild(node_h5codeNode);
        node_h5codeNode.zIndex=3;
        
        //显示跳转h5的二维码
        wx.request({
            url: LequConfig.url+'preh5code',
            data: {
                sid:_this.sid,
                uid:_this.uid,
                query:_this.querystr,
                gameid:LequConfig.gameid,
                zjjgameid:LequConfig.zjjgameid,
                fromgameid:_this.fromgameid,
                day:_this.day
            },
            success(res) {
                if(res.data && res.data.status==1){
                    //数据准备好了
                    _this.h5id=res.data.data;
                    if(!_this.h5id){
                        _this.Tips('h5跳转出错');
                        return false;
                    }

                    //加入退出按钮
                    var node_geth5code_btn = new cc.Node('getcode_btn');
                    _this.node_geth5code_btn=node_geth5code_btn;
                    var sp_getcode_btn = node_geth5code_btn.addComponent(cc.Sprite);
                    node_h5codeNode.addChild(node_geth5code_btn);
                    
                    cc.loader.load(LequConfig.imgurl+"try.png", function (err, texture) {
                        sp_getcode_btn.spriteFrame = new cc.SpriteFrame(texture);
                        //设置尺寸
                        node_geth5code_btn.width=_this.scale(texture.width);
                        node_geth5code_btn.height=_this.scale(texture.height);
                        //定位
                        node_geth5code_btn.y=_this.scale(-400);
                        if(LequConfig.deviceOrientation=='landscape'){
                            node_geth5code_btn.y=_this.scale(-260);
                        }

                        node_geth5code_btn.on(cc.Node.EventType.TOUCH_START, function (event) {
                            if(_this.geth5CodeStart){
                                console.log('-----禁止重复点击-----');
                                return false;
                            }
                            _this.geth5CodeStart = true;
                            //退出游戏
                            wx.exitMiniProgram({
                                fail(){
                                    _this.Tips('退出失败，请手动退出');
                                }
                            });
                        });
                    });
                }else{
                    //不具备导量条件的转换成出纸
                    _this.paper(type);
                    return false;
                }
            },
            fail(){
                //不具备导量条件的转换成出纸
                _this.paper(type);
                return false;
            }
        });
    },   
    hideOther(namearr){
        if(this.shareNode && !this.in_array(namearr,'share')){
            this.shareNode.active=false;
        }
        if(this.bannerNode && !this.in_array(namearr,'banner')){
            this.bannerNode.active=false;
            if(this.bannerAd){
                this.bannerAd.hide();
            }
        }
        if(this.jumpNode  && !this.in_array(namearr,'jump')){
            this.jumpNode.active=false;
        }
        if(this.lotteryNode  && !this.in_array(namearr,'lottery')){
            this.lotteryNode.active=false;
        }
        if(this.paperNode  && !this.in_array(namearr,'paper')){
            this.paperNode.active=false;
        }
        if(this.codeNode  && !this.in_array(namearr,'codejump')){
            this.codeNode.active=false;
        }
        if(this.tryNode  && !this.in_array(namearr,'playgame')){
            this.tryNode.active=false;
        }
        if(this.h5codeNode  && !this.in_array(namearr,'gotoh5')){
            this.h5codeNode.active=false;
        }
        if(!namearr){
            if(this.zhijin){
                this.zhijin.active=false;
            }
            if(this.bannerAd){
                this.bannerAd.offLoad();
                this.bannerAd.offError();
                this.bannerAd.destroy();
                this.bannerAd=null;
            }
            if(this.videoAd){
                this.videoAd.offError();
                this.videoAd.offClose();
                this.videoAd.offLoad();
                this.videoAd=null;
            }
        }
    },
    Tips(msg){
        wx.showToast({
            title:msg,
            mask:true,
            icon:"none"
        });
    },
    in_array(arr,val){
        var ret=false;
        if(arr && arr.length >0){
            arr.forEach(function(v){
                if(val==v){
                    ret=true;
                }
            });
        }
        return ret;
    },
    //杂项打点统计
    statis(position,pid){
        if(this.nostatis) return false;
        var _this=this;
        wx.request({
            url: LequConfig.url+'statis',
            data: {
                gameid:LequConfig.gameid,
                zjjgameid:LequConfig.zjjgameid,
                uid:_this.uid,
                sid:_this.query.p,
                position:position,
                pid:pid
            }
        });
    },
    //banner载入情况统计
    bannerstatis(res){
        if(this.nostatis) return false;
        var _this=this;
        wx.request({
            url: LequConfig.url+'bannercode',
            data: {
                gameid:LequConfig.gameid,
                zjjgameid:LequConfig.zjjgameid,
                uid:_this.uid,
                sid:_this.query.p,
                errcode:res.errCode,
                errinfo:JSON.stringify(res)
            }
        });
    },
    videostatis(res){
        if(this.nostatis) return false;
        var _this=this;
        wx.request({
            url: LequConfig.url+'videocode',
            data: {
                gameid:LequConfig.gameid,
                zjjgameid:LequConfig.zjjgameid,
                uid:_this.uid,
                sid:_this.query.p,
                errcode:res.errCode,
                errinfo:JSON.stringify(res)
            }
        });
    },
    setTestQuery(str){
        //设置测试参数
        this.querystr=str;//测试参数
        this.nostatis=true;
    },
    setTestTask(arr){
        //设置测试参数
        this.task=arr;//测试参数
        this.nostatis=true;
    },
}
module.exports = Lequ