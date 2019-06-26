var wy = {};
// 判断是否是QQ环境
wy.getpaytype = function(){
	var paytype = 1;
	if(wy.isiOS()&&wy.isLcbyapp()&&navigator.userAgent.indexOf("sf") > -1){
		paytype =  2;
	}
	return paytype;
};
wy.isWyAPP = function () {
    return (navigator.userAgent.toLowerCase().match(/5151app/i) == "5151app") || (navigator.userAgent.toLowerCase().match(/5151yxhz/i) == "5151yxhz") || (navigator.userAgent.toLowerCase().match(/5151qyapp/i) == "5151qyapp");
};
/*wy.roleinfo = function(data){
	var defaults = {
		action : 'roleinfo',
		serverid : null,
		rolename : null,
		rolelevel : null,
		sign : null,
	};
	data = wy.extend(defaults, data);
	if (!data.serverid) { alert("缺少参数：serverid"); return; }
	if (!data.rolename) { alert("缺少参数：rolename"); return; }
	if (!data.rolelevel) { alert("缺少参数：rolelevel"); return; }
	if (!data.sign) { alert("缺少参数：sign"); return; }
	window.top.postMessage(data,'*');
};*/
wy.roleinfo = function(data){
	if(!data.action){
		data.type = 'enterserver';
	}else{
		data.type = data.action;
	}
	data.action = 'roleinfo';
	var defaults = {
		action : 'enterserver',
		type : null,
		serverid : null,
		servername : null,
		roleid : null,
		rolename : null,
		rolelevel : null,
		round : 0,
		balance : 0,
		vip : 0,
		partyname : '无帮派',
		time : null,
		sign : null,
	};
	data = wy.extend(defaults, data);
	window.top.postMessage(data,'*');
};
wy.isWeixin = function () {
    return (navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == "micromessenger");
};
wy.isAndroid = function () {
    return navigator.userAgent.indexOf("Android") > -1 || navigator.userAgent.indexOf("Linux") > -1;
};
wy.isYijieAPP = function () {
	return navigator.userAgent.indexOf("lcbyyjtest") > -1;
};
wy.isMobile = function () {
    var userAgent = navigator.userAgent.toLowerCase();
    var agents = ["android", "iphone", "symbianos", "windows phone", "ipad", "ipod"];
    for (var v = 0; v < agents.length; v++) {
        if (userAgent.indexOf(agents[v]) > 0) {
            return true;
        }
    }
    return false;
};
wy.isiOS = function () {
    return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
};
wy.pay = function(data) {
	var defaults = {
		action : 'pay',
		uid: 0,
		gameid : 0,
		productid : null,
		amount : null,
		goodid : null,
		ext : null,
	};
	data = wy.extend(defaults, data);
	if (!data.uid) { alert("缺少参数：uid"); return; }
	if (!data.gameid) { alert("缺少参数：gameid"); return; }
	if (!data.productid) { alert("缺少参数：productid"); return; }
	if (!data.amount) { alert("金额错误"); return; }
	window.top.postMessage(data,'*');
};
wy.isYijieAPP2 = function () {
	return navigator.userAgent.indexOf("lcbyyjtest2") > -1;
};
wy.isPCWeixin = function () {
    return (navigator.userAgent.toLowerCase().match(/WindowsWechat/i) == "windowswechat");
};
wy.share = function(sconfig){
	window.addEventListener("message", function(e) {
		if (!e.data) return;
		switch (e.data.action) {
			// 分享回调
			case "share:ok":
				if(sconfig && sconfig.callbackFun){
					sconfig.callbackFun();
				}
				break;
		}
	});
	var defaults = {
		action : 'share',
		title: null,
		desc : null,
		link : null,
		imgurl : null,
	};
	window.top.postMessage(defaults,'*');
};
wy.extend = function(target, options) {
	if (target == undefined || target == null) {
		return options;
	} else {
		if (options) {
			for (var name in options) {
				target[name] = options[name];
			}
		}
		return target;
	}
};
wy.isQQ = function () {
    return (navigator.userAgent.toLowerCase().match(/\bqq\b/i) == "qq");
};
wy.isLequAPP = function () {
    return (navigator.userAgent.toLowerCase().match(/5151app/i) == "5151app") || (navigator.userAgent.toLowerCase().match(/5151yxhz/i) == "5151yxhz") || (navigator.userAgent.toLowerCase().match(/5151qyapp/i) == "5151qyapp");
};
wy.isLcbyapp = function () {
	return navigator.userAgent.indexOf("5151lcby") > -1;
};
wy.logTest = function() {
	console.log('WY_TEST');
};
// 判断是否是微信环境

// 判断是否是安卓设备

// 判断是否是IOS设备

// 判断是否是PC微信环境

// 是否是移动设备

//app

//app
//龙城霸业app
//易接app
//易接app2
//pay
// 浅复制对象
