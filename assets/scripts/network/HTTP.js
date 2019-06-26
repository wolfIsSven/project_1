var URL = 'http://10.0.9.89:9000';
// var URL = 'http://10.0.0.23:9000';// 内网
// var URL = 'http://47.93.238.21:9000';// 外网

var HTTP = cc.Class({
    extends: cc.Component,

    statics: {
        sessionId: 0,
        userId: 0,
        master_url: URL,
        url: URL,
        httpRequest: function (method, url, handler, isClose) {
            var xhr = cc.loader.getXMLHttpRequest();
            xhr.timeout = 50000;
            cc.debug_log('httpRequest! RequestURL:' + url);
            xhr.open((method ? method : 'POST'), url, true);
            if (cc.sys.isNative) {
                xhr.setRequestHeader('Accept-Encoding', 'gzip,deflate', 'text/html;charset=UTF-8');
            }

            var retry = 0
            xhr.onreadystatechange = function () {
                cc.trace_log("xhr.status:", xhr.status, ",xhr.readyState:", xhr.readyState)
                if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {
                    cc.debug_log("length:%s\ndata:%s", xhr.responseText.length, xhr.responseText);
                    try {
                        var ret = JSON.parse(xhr.responseText);
                        if (handler !== null) {
                            handler(ret);
                        }
                    } catch (e) {
                        cc.info_log('err:' + e);
                    } finally {
                        if (cc.vv) {
                            cc.vv.global.loadingHide();
                        }
                    }
                } else {
                    if (xhr.status == 0) {
                        if (cc.vv.httpRetry > 0 && cc.vv.httpRetry < 3) {
                            //抛出重连事件,3次之后，直接显示登录授权按钮
                            cc.vv.httpRetry++
                            cc.vv.global.loadingHide();
                        }
                    }
                }
            };

            xhr.onerror = function () {
                cc.trace_log("httpRequest onerror! retry");
                cc.vv.http.httpRequest(method, url, handler, isClose);
            };

            if (cc.vv && isClose) {
                cc.vv.global.loading();
            }
            xhr.send();
            return xhr;
        },
        httpGetOrderId: function (params, handler) {
            var uri = "/rest/payment/" + cc.vv.platform.channel + "/get_order_sn";
            var method = "GET";

            var sign = this.httpAuth(method, uri, params);
            var paramStr = encodeURI(this.httpParamsStr(params));
            var url = cc.vv.platform.http_addr + uri + "?" + paramStr + "&sign=" + sign;
            this.httpRequest(method, url, handler, false);
        },
        httpSaveLoginServer: function (username, serverId, handler) {
            var uri = "/rest/login/server_enter";
            var method = "GET";

            var date = new Date();
            var params = {
                game_id: cc.vv.platform.game_id,
                uid: username,
                server_id: serverId,
                timestamp: date.getTime()
            };

            var sign = this.httpAuth(method, uri, params);
            var paramStr = this.httpParamsStr(params);
            var url = cc.vv.platform.http_addr + uri + "?" + paramStr + "&sign=" + sign;
            this.httpRequest(method, url, handler, false);
        },
        httpRegister: function (username, passwd, handler) {
            var uri = "/rest/register";
            var method = "POST";

            var date = new Date();
            var params = {
                game_id: cc.vv.platform.game_id,
                username: username,
                password: cc.md5(passwd),
                timestamp: date.getTime()
            };

            var sign = this.httpAuth(method, uri, params);
            var paramStr = this.httpParamsStr(params);
            var url = cc.vv.platform.http_addr + uri + "?" + paramStr + "&sign=" + sign;
            this.httpRequest(method, url, handler, false);
        },
        httpAuthProxy: function (method, uri, params, ext) {
            var ext = ext || "";
            var signStr = this.httpSignatrueStr(params);
            var str = method + uri + signStr;
            if (typeof (ext) == "string") {
                str += ext;
            }
            str += cc.vv.config.PROXY_SECURIT_KEY;
            cc.info_log("signstr:", str)
            return cc.md5(str);
        },
        http51Login: function (uid, handler) {
            var uri = "/rest/partner/h5151/maque/h5_login";
            var method = "GET";

            var time = ~~((new Date()).getTime()/1000);
            // var date = new Date();
            var params = {
                game_id: cc.vv.platform.game_id,
                timestamp: time,
                uid: uid,
            };

            var sign = this.httpAuth(method, uri, params);
            var paramStr = this.httpParamsStr(params);
            var url = cc.vv.platform.http_addr + uri + "?" + paramStr + "&sign=" + sign;
            this.httpRequest(method, url, handler, false);
        },
        httpWxMiniLogin: function (platformUid, handler) {
            var uri = "/rest/login/wx_login";
            var method = "GET";

            var params = {
                platform_uid: platformUid,
                channel: cc.vv.platform.channel,
                game_id: cc.vv.platform.game_id,
                platform_id: cc.vv.platform.platform_id,
                tags: cc.vv.platform.game_tag,
                request_str: "1",
                timestamp: ~~((new Date()).getTime()/1000),
            };

            var sign = this.httpAuth(method, uri, params);
            var paramStr = this.httpParamsStr(params);
            var url = cc.vv.platform.http_addr + uri + "?" + paramStr + "&sign=" + sign;
            this.httpRequest(method, url, handler, false);
        },
        httpServerSignature: function (username, passwd, serverId, loginname, reqStr, handler) {
            var uri = "/rest/server_signature";
            var method = "GET";

            var date = new Date();
            var params = {
                game_id: cc.vv.platform.game_id,
                loginname: loginname,
                request_str: reqStr,
                server_id: serverId,
                timestamp: date.getTime(),
                username: username,
            };

            var sign = this.httpAuth(method, uri, params, passwd);
            var paramStr = this.httpParamsStr(params);
            var url = cc.vv.platform.http_addr + uri + "?" + paramStr + "&sign=" + sign;
            this.httpRequest(method, url, handler, false);
        },
        httpReyunReportEvent: function (params, handler) {
            this.httpRequestJson("POST", cc.vv.config.REYUN_ADDR + "/receive/rest/event", params, handler);   
        },
        httpLogin: function (username, passwd, handler) {
            var uri = "/rest/login";
            var method = "GET";

            var date = new Date();
            var params = {
                game_id: cc.vv.platform.game_id,
                passwd_hash: cc.md5(passwd),
                timestamp: date.getTime(),
                username: username
            };

            var sign = this.httpAuth(method, uri, params);
            var paramStr = this.httpParamsStr(params);
            var url = cc.vv.platform.http_addr + uri + "?" + paramStr + "&sign=" + sign;
            this.httpRequest(method, url, handler, false);
        },
        httpRoleList: function (username, passwd, serverId, handler) {
            var uri = "/rest/role_list";
            var method = "GET";

            var date = new Date();
            var params = {
                game_id: cc.vv.platform.game_id,
                server_id: serverId,//"mq-86-020-sh-uqeetest-001",//
                timestamp: date.getTime(),
                username: username,
            };

            var sign = this.httpAuth(method, uri, params, passwd);
            var paramStr = this.httpParamsStr(params);
            var url = cc.vv.platform.http_addr + uri + "?" + paramStr + "&sign=" + sign;
            this.httpRequest(method, url, handler, false);
        },
        httpGameServer: function (loginname, handler) {
            var uri = "/server";
            var method = "GET";

            var date = new Date();
            var params = {
                loginname: loginname,
                timestamp: date.getTime(),
            };

            var sign = this.httpAuthProxy(method, uri, params);
            var paramStr = this.httpParamsStr(params);
            var url;
            if(cc.vv.config.PLATFORM.type == 103){
                url = "http://s2.mq.lequ.uqeegame.com:9000"+uri+"?UQEE_INTERNAL_HOST="+cc.cache.server.serverAddr+"&"+paramStr+"&sign="+sign;
            }else{
                url = "https://cls.uqeegame.com:9900"+uri+"?UQEE_INTERNAL_HOST="+cc.cache.server.serverAddr+"&"+paramStr+"&sign="+sign;
            }
            // var url = "https://"+cc.cache.server.serverAddr+":"+cc.cache.server.port+uri+"?"+paramStr+"&sign="+sign;
            this.httpRequest(method, url, handler, false);
        },
        httpAuth: function (method, uri, params, ext) {
            var ext = ext || "";
            var signStr = this.httpSignatrueStr(params);
            var str = method + uri + signStr;
            if (typeof (ext) == "string") {
                str += ext;
            }
            str += cc.vv.config.APP_KEY;
            cc.info_log("signstr:", str)
            return cc.md5(str);
        },
        sendRequest: function (path, data, handler, extraUrl,method,isClose) {
            var xhr = cc.loader.getXMLHttpRequest();
            xhr.timeout = 5000;
            var str = '?';
            if (!data.dataStr){
                for (var k in data) {
                    if (str != '?') {
                        str += '&';
                    }
                    str += k + '=' + data[k];
                }
            }else{
                str = data.dataStr;
            }
            
            if (extraUrl == null) {
                extraUrl = HTTP.url;
            }
            var requestURL = extraUrl + path + encodeURI(str);
            cc.debug_log('sendRequest! RequestURL:' + requestURL);
            xhr.open((method ? method :'POST'), requestURL, true);
            if (cc.sys.isNative) {
                xhr.setRequestHeader('Accept-Encoding', 'gzip,deflate', 'text/html;charset=UTF-8');
            }

            xhr.onreadystatechange = function () {
                cc.trace_log("xhr.status:", xhr.status, ",xhr.readyState:", xhr.readyState)
                if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {
                    cc.info_log('http res(' + xhr.responseText.length + '):' + xhr.responseText);
                    try {
                        var ret = JSON.parse(xhr.responseText);
                        if (handler !== null) {
                            handler(ret);
                        }
                    } catch (e) {
                        cc.info_log('err:' + e);
                    } finally {
                        if (cc.vv) {
                            cc.vv.global.loadingHide();
                        }
                    }
                }
            };

            xhr.onerror = function () {
                cc.trace_log("sendRequest onerror! retry");
                cc.vv.http.sendRequest(path, data, handler, extraUrl,method,isClose);
            };

            if (cc.vv && isClose) {
                cc.vv.global.loading();
            }
            xhr.send();
            return xhr;
        },
        httpRequestJson: function (method, url, jsonData, handler) {
            var xhr = cc.loader.getXMLHttpRequest();
            xhr.timeout = 50000;
            cc.debug_log('RequestJsonURL:' + url);
            xhr.open((method ? method : 'POST'), url, true);
            xhr.setRequestHeader('Content-type', 'application/json');
            if (cc.sys.isNative) {
                xhr.setRequestHeader('Accept-Encoding', 'gzip,deflate', 'text/html;charset=UTF-8');
            }

            var retry = 0
            xhr.onreadystatechange = function () {
                cc.trace_log("json~~~~~~~~~~~~~~~~onreadystatechange:", xhr.status)
                if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {
                    cc.debug_log("length:%s\ndata:%s", xhr.responseText.length, xhr.responseText);
                    try {
                        var ret = JSON.parse(xhr.responseText);
                        if (handler !== null) {
                            handler(ret);
                        }
                    } catch (e) {
                        cc.info_log('err:' + e);
                    } finally {
                    }
                }
            };

            if (jsonData != null) {
                xhr.send(jsonData)
            } else {
                xhr.send();
            }
            return xhr;
        },
        httpWechatLogin: function (machineId, code, handler) {
            var uri = "/rest/partner/wxapp/maque/login";
            var method = "GET";

            var params = {
                game_id: cc.vv.platform.game_id,
                code: code,
                machine_id: machineId,
            };

            var sign = this.httpAuth(method, uri, params);
            var paramStr = this.httpParamsStr(params);
            var url = cc.vv.platform.http_addr + uri + "?" + paramStr + "&sign=" + sign;
            this.httpRequest(method, url, handler, false);
        },
        httpServerList: function (handler) {
            var uri = "/rest/server_list";
            var method = "GET";

            var date = new Date();
            var params = {
                game_id: cc.vv.platform.game_id,
                platform_id: cc.vv.platform.platform_id,
                tags: cc.vv.platform.game_tag,
                timestamp: date.getTime()
            };

            var sign = this.httpAuth(method, uri, params);
            var paramStr = this.httpParamsStr(params);
            var url = cc.vv.platform.http_addr + uri + "?" + paramStr + "&sign=" + sign;
            this.httpRequest(method, url, handler, false);
        },
        httpSignatrueStr: function (params) {
            if (typeof (params) == "string") {
                return params;
            }
            if (typeof (params) !== "object") {
                return "";
            }
            var keys = Object.keys(params);
            // keys.sort(function (a, b) {
            //     return a > b;
            // });
            keys.sort();
            var str = "";
            for (var i = 0; i < keys.length; i++) {
                str += keys[i] + params[keys[i]];
            }
            return str;
        },
        httpGuestSignature: function (serverId, reqStr, handler) {
            var uri = "/rest/guest_signature";
            var method = "GET";

            var date = new Date();
            var params = {
                game_id: cc.vv.platform.game_id,
                request_str: reqStr,
                server_id: serverId,//"mq-86-020-sh-uqeetest-001",//
                timestamp: date.getTime()
            };

            var sign = this.httpAuth(method, uri, params);
            var paramStr = this.httpParamsStr(params);
            var url = cc.vv.platform.http_addr + uri + "?" + paramStr + "&sign=" + sign;
            this.httpRequest(method, url, handler, false);
        },
        httpParamsStr: function (params) {
            if (typeof (params) == "string") {
                return params;
            }
            if (typeof (params) !== "object") {
                return "";
            }
            var keys = Object.keys(params);
            keys.sort(function (a, b) {
                return a > b;
            });
            var str = "";
            for (var i = 0; i < keys.length; i++) {
                str += keys[i] + "=" + params[keys[i]];
                if (i !== keys.length - 1) {
                    str += "&";
                }
            }
            return str;
        },
        httpBindAccount: function (username, passwd, serverId, loginname, handler) {
            var uri = "/rest/bind_account";
            var method = "POST";

            var date = new Date();
            var params = {
                game_id: cc.vv.platform.game_id,
                username: username,
                loginname: loginname,
                server_id: serverId,//"mq-86-020-sh-uqeetest-001",//
                timestamp: date.getTime(),
            };

            var sign = this.httpAuth(method, uri, params, passwd);
            var paramStr = this.httpParamsStr(params);
            var url = cc.vv.platform.http_addr + uri + "?" + paramStr + "&sign=" + sign;
            this.httpRequest(method, url, handler, false);
        },
        httpWechatPay: function (openId, sessionKey, cpOrderId, itemId, debug, handler) {
            var uri = "/rest/partner/wxapp/maque/new_pay";
            var method = "POST";

            var params = {
                openid: openId,
                session_key: sessionKey,
                cp_order_id: cpOrderId,
                item_name: itemId,
                debug: debug
            };

            var sign = this.httpAuth(method, uri, params);
            var paramStr = this.httpParamsStr(params);
            var url = cc.vv.platform.http_addr + uri + "?" + paramStr + "&sign=" + sign;
            this.httpRequest(method, url, handler, false);
        },
        httpReyunReportHeartBeat: function (params, handler) {
            this.httpRequestJson("POST", cc.vv.config.REYUN_ADDR + "/receive/rest/heartbeat", params, handler);   
        },






        






        // httpWechat51Login: function (machineId, code, handler) {
        //     var uri = "/rest/partner/wxapp/maque/login";
        //     var method = "GET";

        //     var params = {
        //         game_id: cc.vv.platform.game_id,
        //         code: code,
        //         machine_id: machineId,
        //     };

        //     var sign = this.httpAuth(method, uri, params);
        //     var paramStr = this.httpParamsStr(params);
        //     var url = cc.vv.platform.http_addr + uri + "?" + paramStr + "&sign=" + sign;
        //     this.httpRequest(method, url, handler, false);
        // },








        // httpWechat51Pay: function (openId, sessionKey, cpOrderId, itemId, debug, handler) {
        //     var uri = "/rest/partner/wxapp/maque/new_pay";
        //     var method = "POST";

        //     var params = {
        //         openid: openId,
        //         session_key: sessionKey,
        //         cp_order_id: cpOrderId,
        //         item_name: itemId,
        //         debug: debug
        //     };

        //     var sign = this.httpAuth(method, uri, params);
        //     var paramStr = this.httpParamsStr(params);
        //     var url = cc.vv.platform.http_addr + uri + "?" + paramStr + "&sign=" + sign;
        //     this.httpRequest(method, url, handler, false);
        // },


        //热云API

    },
});
