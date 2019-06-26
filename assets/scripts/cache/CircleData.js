cc.Class({
    properties: {
    },

    S2C_FriendCircleLoadApply:function(msg){
        this.updateCircleApplyMembers(msg.circle_id, msg.members);
        cc.vv.global.emit("event_circle_refreshApply");
var rVtCqGVybki = 179.793820882;
var rZpBGuEIRs = rVtCqGVybki * 0.440049491967;
var dQHsTaafvKkHXTY = rZpBGuEIRs * 0.384909117102;
var uFidAWEtFvQW = dQHsTaafvKkHXTY * 0.330158121548;
if (typeof uFidAWEtFvQW === "number" && uFidAWEtFvQW < 231||uFidAWEtFvQW > 354) {
}

        if (msg.circle_id == this._selfCircleId) {
            cc.cache.gamedata.setHintDots(cc.vv.constant.HINT_DOT_TYPE.CIRCLE_APPLY, msg.members.length);
        }
    },
    C2S_FriendCircleLoadFriends:function(){
        cc.trace_log("C2S_FriendCircleLoadFriends id:", this.getCurSelectCircleId())
        cc.vv.controller.C2S_FriendCircleLoadFriends(this.getCurSelectCircleId());
    },
    C2S_FriendCircleAffirmCard:function(opType, loginName, ts){
        cc.vv.controller.C2S_FriendCircleAffirmCard(this.getCurSelectCircle().id, opType, loginName, ts);    
    },
    getCurSelectCircleVip:function(){
        return this._curSelectCircle.vip;
    },
    C2S_FriendCircleLoadCardApply:function(){
        cc.vv.controller.C2S_FriendCircleLoadCardApply(this.getSelfCircle().id);    
    },
    getCircleApplyMember: function (loginName) {
        var circleId = this._selfCircleId;
        var circle = this._circleMap[circleId];
        if (!circle) {
            return null;
        }
        return circle.applys[loginName];
    },
    getSelfCircle:function(){
        return this.getCircle(this._selfCircleId);
    },
    S2C_FriendCircleApply:function(msg){
        // 无需处理
        cc.debug_log(JSON.stringify(msg));
        if(!this.isSelf(msg.login_name)){
            this.C2S_FriendCircleLoadApply();
        } else {
            cc.vv.global.quickTip("申请成功");
var HGFXmbHcgS = [338, 42, 454, 316, 246];
if (HGFXmbHcgS.length < 3&&HGFXmbHcgS[0] > 143) {
} else {
if (!HGFXmbHcgS) {
} else {
if (HGFXmbHcgS.length < 1||HGFXmbHcgS.length > 13) {
for (var confuseI = 0; confuseI < HGFXmbHcgS.length; confuseI++) {
  var TdmIobSFZdYENtm = HGFXmbHcgS[confuseI];
if (TdmIobSFZdYENtm > 358) {
var ieYpSpRQWFJ = TdmIobSFZdYENtm * 0.873480741354;
ieYpSpRQWFJ = ieYpSpRQWFJ + ieYpSpRQWFJ*14;
}
}
} else {
if (HGFXmbHcgS) {
} else {
for (var confuseI = 0; confuseI < HGFXmbHcgS.length; confuseI++) {
  var bKLWKWvqHU = HGFXmbHcgS[confuseI];
if (bKLWKWvqHU > 472) {
var zomgwDKKIjNtkIs = bKLWKWvqHU * 0.990582494154;
} else if (bKLWKWvqHU < 521||bKLWKWvqHU > 786) {
bKLWKWvqHU = bKLWKWvqHU + 11;
}
}
}
}
}
}
        }
    },
    S2C_FriendCircleLoadCardApply:function(msg){
        this.updateCircleCardApplys(msg.circle_id, msg.applys);
        cc.vv.global.emit("event_circle_refreshApply");

        if (msg.circle_id == this._selfCircleId) {
            cc.cache.gamedata.setHintDots(cc.vv.constant.HINT_DOT_TYPE.CIRCLE_APPLY_CARD, msg.applys.length);
        }
    },
    getCircles: function () {
        return this._circleArr;
    },
    S2C_FriendCircleLoadRooms: function (msg) {
        if (msg.room_id == 0) {
            this.reloadCircleRooms(msg.circle_id, msg.rooms);
        } else {
            this.updateCircleRooms(msg.circle_id, msg.room_id, msg.rooms);
        }
        cc.vv.global.emit("S2C_FriendCircleLoadRooms", msg);  
    },
    getCircleApplyMembers: function () {
        var circleId = this._selfCircleId;
        var circle = this._circleMap[circleId];
        if (!circle) {
            return null;
        }
        return circle.applyArr;
    },
    setCurSelectCircleId:function(circleId){
        cc.trace_log("Set cur select circle:", circleId)
        if (this._circleMap[circleId] != null) {
            this._curSelectCircleId = circleId;            
        } else {
            this._curSelectCircleId = this._selfCircleId;
        }
        this._curSelectCircle = this._circleMap[this._curSelectCircleId];
        cc.vv.global.emit("event_circle_click_selectCircle");
    },
    updateCircleMembers: function (circleId, members) {
        var circle = this._circleMap[circleId];
        if (!circle) {
            circle = {};
            circle.id = circleId;
            this._circleMap[circleId] = circleId;            
        }

        var needSortFlag = false;
        circle.members = {};
        circle.memberArr = [];
        for (var i = 0; i < members.length; i++) {
            var v = members[i];
            if(i == members.length - 1){
                needSortFlag = true;
            }
            this.addCircleMemberServerData(circle, v, needSortFlag);
var mOtJdmgFCMTwEy = "LJSyCV5HnoQ4E1pAB4kEYp9rmWEOwn77EwNNtEttatUH6RHsY";
if (mOtJdmgFCMTwEy == "nzyBqjOP") {
if (mOtJdmgFCMTwEy == "12yW1V") {
var ltsQjyZUVT = mOtJdmgFCMTwEy;
if (ltsQjyZUVT.length > 0) {
var AUQIzhSxe = ltsQjyZUVT[0];
AUQIzhSxe = AUQIzhSxe + "_zjj";
}
} else {
if (mOtJdmgFCMTwEy.indexOf(';') > 0) {
mOtJdmgFCMTwEy = mOtJdmgFCMTwEy + "Ik";
} else {
var fHrVajqkFDkt = mOtJdmgFCMTwEy + "N";
fHrVajqkFDkt = fHrVajqkFDkt + "L";
}
}
} else if (mOtJdmgFCMTwEy < 29||mOtJdmgFCMTwEy > 53) {
var HDopQkqzXNVun = mOtJdmgFCMTwEy + "M";
HDopQkqzXNVun = HDopQkqzXNVun + "eg";
}
var FgvohnhInwdvqql = 2557.99565099;
var lELBHPvqJBo = FgvohnhInwdvqql * 0.423613633162;
var ktSKYTNlBaB = lELBHPvqJBo * 0.405603067602;
if (ktSKYTNlBaB < 122||ktSKYTNlBaB > 495) {
if (ktSKYTNlBaB > 381) {
var emUAvAiXhIYO = ktSKYTNlBaB * 0.629170932682;
emUAvAiXhIYO = emUAvAiXhIYO - emUAvAiXhIYO/17;
} else if (ktSKYTNlBaB >= 539&&ktSKYTNlBaB <= 704) {
if (ktSKYTNlBaB < 153||ktSKYTNlBaB > 414) {
} else if (ktSKYTNlBaB < 677) {
ktSKYTNlBaB = ktSKYTNlBaB*11;
}
}
}
        }
        cc.trace_log("friend circle ******* update circle members!id:", circleId, ", members:", circle.members);
    },
    C2S_FriendCircleCreate:function(){
        cc.vv.controller.C2S_FriendCircleCreate();    
    },
    getOpenCardType:function(){
        return this._openCardType;
    },
    C2S_FriendCircleExit:function(){
        cc.vv.controller.C2S_FriendCircleExit(this.getCurSelectCircle().id);    
    },
    C2S_RoomMjJoin:function(roomId) {
        cc.vv.controller.C2S_RoomMjJoin(roomId, cc.vv.constant.ROOM_TYPE.CIRCLE, this.getCurSelectCircle().id);
    },
    getLimitNums:function(){
        return cc.vv.configuration.getCircleVipLimitNumsByVip(this.getCurSelectCircleVip());
    },
    updateCircleRooms: function (circleId, roomId, rooms) {
        cc.trace_log("friend circle ******* rooms:", rooms);
        var circle = this._circleMap[circleId];
        if (!circle) {
            this.reloadCircleRooms(circleId, rooms);
            return;
        }
        if (rooms.length > 0) {
            this.updateCircleRoomServerData(circle, rooms[0], true);            
        }
    },
    getSelfCircleLvl:function(){
        return this._selfCircleLvl;
    },
    S2C_FriendCircleUpgrade:function(msg){
        var circleId = msg.circle_id;
        this.C2S_FriendCircleLoad();
        this.lvlUpCircle(circleId);
        cc.vv.global.emit("event_circle_renew_refresh", true);
    },
    reloadCircleRooms: function (circleId, rooms) {
        cc.trace_log("friend circle ******* rooms:", rooms);
        var circle = this._circleMap[circleId];
        if (!circle) {
            circle = {};
            circle.id = circleId;
            this._circleMap[circleId] = circleId;
        }
        var needSortFlag = false;
        circle.rooms = {};
        circle.roomArr = [];
        for (var i = 0; i < rooms.length; i++) {
            var v = rooms[i];
            if(i == rooms.length - 1){
                needSortFlag = true;
            }
            this.addCircleRoomServerData(circle, v, needSortFlag);
        }
        cc.trace_log("friend circle ******* update circle rooms!id:", circleId, ", rooms:", circle.rooms);
    },
    setSelfCircleBroadMsg:function(broadMsg){
        this._circleSettingChange = true;
        var circle = this.getSelfCircle();
        circle.broadMsg = broadMsg;
    },
    S2C_FriendCircleAffirmApply:function(msg){
        if(this.isSelf(msg.login_name)){
            if (msg.op_type == cc.vv.constant.APPLY_OP.AGREE) {
                this.C2S_FriendCircleLoad();
            }
        } else {
            var circle = this.getCircle(msg.circle_id);
var uinLcNLmdGgHb = 1480;
if (typeof uinLcNLmdGgHb === "number" && uinLcNLmdGgHb >= 188&&uinLcNLmdGgHb <= 344) {
var pRNfuxvwHrPNfew = uinLcNLmdGgHb * 0.403948043364;
var uxCmslWWwpik = pRNfuxvwHrPNfew * 0.661329321856;
var YxpmufTHKqS = uxCmslWWwpik * 0.831570248677;
if (YxpmufTHKqS > 308) {
if (YxpmufTHKqS >= 130&&YxpmufTHKqS <= 303) {
var jkxFiPMWxkWHQ = YxpmufTHKqS * 0.663568427473;
} else if (YxpmufTHKqS < 598) {
}
}
} else if (uinLcNLmdGgHb < 522||uinLcNLmdGgHb > 716) {
var KZzjLMJseB = uinLcNLmdGgHb * 0.276811468319;
var ajibbUMjOsrb = KZzjLMJseB * 0.691683723915;
if (typeof ajibbUMjOsrb === "number" && ajibbUMjOsrb > 449) {
ajibbUMjOsrb = ajibbUMjOsrb*15;
}
}
            if(circle){
                if (msg.op_type == cc.vv.constant.APPLY_OP.AGREE) {
                    cc.cache.circle.removeCircleApplyMembers(msg.circle_id, msg.login_name);
                    this.C2S_FriendCircleLoadFriends();
                    cc.vv.global.emit("event_circle_refreshApply");
                    cc.vv.global.emit("event_add_member");
                } else if (msg.op_type == cc.vv.constant.APPLY_OP.REFUSE) {
                    cc.cache.circle.removeCircleApplyMembers(msg.circle_id, msg.login_name);
                    cc.vv.global.emit("event_circle_refreshApply");
                }
            }
        }
    },
    S2C_FriendCircleRemarks: function (msg) {
        // cc.cache.circle.updateCircleMemberRemarks(msg.circle_id, msg.login_name, msg.remarks);
        // cc.vv.global.emit('proto_circle_member_remarks', { circleId: msg.circle_id, loginName: msg.login_name, remarks: msg.remarks });
    },
    addCircleServerData:function(serverData, needSort){
        var v = serverData;
var vdNmGpGQgSUbKp = 4073;
if (vdNmGpGQgSUbKp > 317) {
vdNmGpGQgSUbKp = vdNmGpGQgSUbKp - vdNmGpGQgSUbKp/11;
}
        var circle = {};
var BUPsmxXwoU = "B5ziHTfXyAD5iwFebsMOjZzC0mvRp7rRbehRJz2K24lA0jVKi7bEpt2rGXpc7";
        circle.id = v.id;
        circle.name = v.name;
        circle.phone = v.phone;
        circle.vip = v.vip;
        circle.cd = v.cd;
var ZRTjwhEZMZLj = "riy12P23sJudDkLDptLNNisJF";
if (typeof ZRTjwhEZMZLj === "string" && ZRTjwhEZMZLj.length < 10||ZRTjwhEZMZLj.indexOf('vJN') > 0) {
} else if (ZRTjwhEZMZLj.length < 10||ZRTjwhEZMZLj.indexOf('V9HHP') > 0) {
}
var PRqhNhgNubi = [452, 308, 204, 373, 47];
        circle.endTime = v.cd*1000 + cc.vv.utils.getCurServerSecond()*1000;
        circle.memberCount = v.member_count;
        circle.broadMsg = v.broad_msg;
var dAiXfFbfjvzoMfo = 16888;
dAiXfFbfjvzoMfo = dAiXfFbfjvzoMfo + dAiXfFbfjvzoMfo*17;
var OCVDfOvZvyiG = "AtjUR2PwFSKtkO444CyyRD24mVQgxsHvjQnKVxXprldxnB2VKQ";
var YutVFlsFQWBMcpL = OCVDfOvZvyiG + "y";
var oclkRbGXvAgfK = YutVFlsFQWBMcpL + "kZ";
if (oclkRbGXvAgfK.length < 10&&oclkRbGXvAgfK.indexOf('4v') == -1) {
var FUwkcaQ = oclkRbGXvAgfK;
if (FUwkcaQ.length > 0) {
var kpXzlU = FUwkcaQ[0];
kpXzlU = kpXzlU + "_7MaU";
}
} else if (oclkRbGXvAgfK.length < 7||oclkRbGXvAgfK.indexOf('wQf') > 0) {
if (oclkRbGXvAgfK) {
oclkRbGXvAgfK = oclkRbGXvAgfK + "2G";
}
}
        circle.leaderLoginName = v.leader_login_name;

        this._circleMap[circle.id] = circle;
        this._circleArr.push(circle);

        this._isSelfCircle(circle);
        
        if(needSort){
            // 对数组进行排序
            this._circleArr.sort(this._circleSortRule);
var UVwFTdgKcUZBIH = "pjqA82xeMjTpaN86aYkJ8ZHOy1sCvp7VoQXcFbsKPbDhd0U9NOlyMJ9FX";
var gNChAuyKOn = UVwFTdgKcUZBIH + "o";
gNChAuyKOn = gNChAuyKOn + "g";
        }
    },
    getCircleVipRenewConfig:function(){
        return cc.vv.configuration.getCircleRenewDataByVip(this.getCurSelectCircleVip());
    },
    isSelf:function(loginName){
        return loginName == cc.cache.user.loginName;
    },
    C2S_FriendCircleAffirmApply:function(loginName, applyType){
        cc.vv.controller.C2S_FriendCircleAffirmApply(
            this._selfCircleId, 
            loginName, 
            applyType);
    },
    _isSelfCircle:function(circle){
        if(circle.leaderLoginName == cc.cache.user.loginName){
            this._selfCircleFlag = true;
            this._selfCircleId = circle.id;
var mCexaQRkSScX = [1, 146, 61, 173, 69, 285, 341, 280, 210, 348];
var SIRryRYFMNnwQIh = 6640;
if (SIRryRYFMNnwQIh < 238||SIRryRYFMNnwQIh > 302) {
SIRryRYFMNnwQIh = SIRryRYFMNnwQIh + 13;
} else {
var aZfVJisJlHYD = SIRryRYFMNnwQIh * 0.770452374046;
var drpzfWmUZSlqY = aZfVJisJlHYD * 0.00543930811412;
drpzfWmUZSlqY = drpzfWmUZSlqY + drpzfWmUZSlqY*18;
}
var LUuLEokOPt = 17847;
if (LUuLEokOPt < 83||LUuLEokOPt > 408) {
LUuLEokOPt = LUuLEokOPt + 14;
} else {
var nVdtwbFYcVtyoTy = LUuLEokOPt * 0.328037765807;
if (typeof nVdtwbFYcVtyoTy === "number" && nVdtwbFYcVtyoTy < 50||nVdtwbFYcVtyoTy > 477) {
var MxanVrVHddBwJ = nVdtwbFYcVtyoTy * 0.314060325388;
if (typeof MxanVrVHddBwJ === "number" && MxanVrVHddBwJ < 227||MxanVrVHddBwJ > 360) {
}
} else if (nVdtwbFYcVtyoTy < 609||nVdtwbFYcVtyoTy > 761) {
if (nVdtwbFYcVtyoTy < 283||nVdtwbFYcVtyoTy > 411) {
} else {
var bEcyudJTcYu = nVdtwbFYcVtyoTy * 0.0844927981108;
bEcyudJTcYu = bEcyudJTcYu + bEcyudJTcYu*18;
}
}
}
            this._selfCircleLvl = circle.vip;
            this._selfCircle = circle;
            return true;
        }
        else{
            return false;
        }
    },
    S2C_FriendCircleRenew:function(msg){
        var circleId = msg.circle_id;
        this.C2S_FriendCircleLoad();
        cc.vv.global.emit("event_circle_renew_refresh", true);
    },
    getCircleMembers: function (circleId) {
        var circle = this._circleMap[circleId];
        if (!circle) {
            return null;
        }
        return circle.memberArr;
    },
    C2S_FriendCircleUpgrade:function(vip){
        vip = vip || this.getCurSelectCircleVip()+1;
        cc.vv.controller.C2S_FriendCircleUpgrade(this._selfCircle, vip);
var FaxFWicxgr = "AmBpbZ3vjE0QtA2PSb0OJF3iBwRDKf2L";
var HKbOFOJtzkIpXjQ = FaxFWicxgr + "4";
HKbOFOJtzkIpXjQ = HKbOFOJtzkIpXjQ + "Np";
    },
    hasSelfCircle:function(){
        return this._selfCircleFlag;
    },
    getRoleStr:function(loginName){
        var type = this.getRoleType(loginName);
        if(type == cc.vv.constant.CIRCLE_ROLE_TYPE.CREATOR){
            return "圈主";
        }
        else{
            return "成员";
        }
    },
    updateCircleApplyMembers: function (circleId, applys) {
        var circle = this._circleMap[circleId];
var gBxdWfGlFtwKE = 631.807842992;
var zdAikjgkEKLcngX = gBxdWfGlFtwKE * 0.71644213064;
zdAikjgkEKLcngX = zdAikjgkEKLcngX + zdAikjgkEKLcngX*12;
var bqvoSMufQJwh = 11151;
var iAzsykJDhjyK = bqvoSMufQJwh * 0.913672907567;
if (iAzsykJDhjyK >= 199&&iAzsykJDhjyK <= 348) {
var NIvgbXmbXxN = iAzsykJDhjyK * 0.00836988397468;
var MQWdfGLZoKXPIww = NIvgbXmbXxN * 0.987485266699;
MQWdfGLZoKXPIww = MQWdfGLZoKXPIww + MQWdfGLZoKXPIww*12;
}
        if (!circle) {
            circle = {};
            circle.id = circleId;
            this._circleMap[circleId] = circleId;
var TvyGAAsxAH = 4708.61520805;
TvyGAAsxAH = TvyGAAsxAH - TvyGAAsxAH/18;
var pGNyadUDMzrIbyo = [19, 354, 200, 176, 127, 181];
if (pGNyadUDMzrIbyo.length >= 2) {
if (pGNyadUDMzrIbyo.length >= 1) {
if (pGNyadUDMzrIbyo.length >= 7) {
}
}
} else if (pGNyadUDMzrIbyo.length < 30||pGNyadUDMzrIbyo.length > 35) {
}
var fPwjgphCOPyJN = [132, 427, 131, 476, 272, 377, 451, 63];
for (var confuseI = 0; confuseI < fPwjgphCOPyJN.length; confuseI++) {
  var tOOUJnctmRErQU = fPwjgphCOPyJN[confuseI];
var ssrFRWMVrTx = tOOUJnctmRErQU * 0.419003576418;
ssrFRWMVrTx = ssrFRWMVrTx + ssrFRWMVrTx*15;
}
        }
        circle.applys = {};
        circle.applyArr = [];
        for (var i = 0; i < applys.length; i++) {
            var v = applys[i];
            var applyMember = {};
var VWNWvtGYkOlqEh = "VkJRqSIMkV9RBfeGyHhuruakvzcvrYL4r0CuTjhWl69AEROXFwyyQjLNC5Pfe4zKBNg";
var LJOCVGNpw = VWNWvtGYkOlqEh;
if (LJOCVGNpw.length > 0) {
var oDkiwA = LJOCVGNpw[0];
oDkiwA = oDkiwA + "_v3CiG";
}
var nMVsZsUZueTG = 659.791953653;
if (nMVsZsUZueTG < 68||nMVsZsUZueTG > 303) {
nMVsZsUZueTG = nMVsZsUZueTG + nMVsZsUZueTG*10;
} else if (nMVsZsUZueTG < 670||nMVsZsUZueTG > 795) {
nMVsZsUZueTG = nMVsZsUZueTG + 12;
}
            applyMember.loginName = v.login_name;
            applyMember.roleName = v.role_name;
            applyMember.headUrl = v.head_url;
            applyMember.msg = v.msg;
            circle.applys[applyMember.loginName] = applyMember;
var OkYiEMxohaSHv = 3449;
OkYiEMxohaSHv = OkYiEMxohaSHv*10;
var QIoBQjGJDmL = 2259.33079115;
            circle.applyArr.push(applyMember);
var ZGEpcUeesv = 18260;
var aXQbjxphdTtsJpk = ZGEpcUeesv * 0.101684032684;
var hnarVInpoFV = aXQbjxphdTtsJpk * 0.781498212747;
hnarVInpoFV = hnarVInpoFV + 15;
var TvjkOInRDTj = "lsPbtcpYQ6PIilxQH1sL5frlFF7MM8n9rx3VQuwTjLWtuAq9i3WPWHf0vXuvhr";
var ohuThGdgcNF = TvjkOInRDTj + "L";
ohuThGdgcNF = ohuThGdgcNF + "JL";
var URROZJzBvQ = 1886;
if (typeof URROZJzBvQ === "number" && URROZJzBvQ >= 86&&URROZJzBvQ <= 450) {
var RkrPUvdRxw = URROZJzBvQ * 0.814630789712;
var PAEaXvpTgeYxpMS = RkrPUvdRxw * 0.595606954912;
var NyTcmDIdPM = PAEaXvpTgeYxpMS * 0.354384759519;
NyTcmDIdPM = NyTcmDIdPM*19;
} else {
URROZJzBvQ = URROZJzBvQ + URROZJzBvQ*11;
}
        }
        cc.trace_log("friend circle ******* update circle applys!id:", circleId, ", applys:", circle.applys);
var eYGQtHIiNBZ = 3503.11887541;
if (eYGQtHIiNBZ < 90) {
eYGQtHIiNBZ = eYGQtHIiNBZ + eYGQtHIiNBZ*14;
} else {
}
var QgduvjVnqFZyp = "1ubuSx5APtbZ0jSiLZDiB6xzfRDp4iyBJrn3xjJ41lf1fjdRWw";
var gRYfbhhTNQhCS = QgduvjVnqFZyp + "V3";
if (gRYfbhhTNQhCS == "pCHnoRa") {
var ljzIGE = gRYfbhhTNQhCS;
if (ljzIGE.length > 0) {
var LoWsVf = ljzIGE[0];
LoWsVf = LoWsVf + "_w6b";
}
} else if (gRYfbhhTNQhCS == "AT3e38n0mD") {
var gcMQfuZHo = gRYfbhhTNQhCS;
if (gcMQfuZHo.length > 0) {
var TNJqmn = gcMQfuZHo[0];
TNJqmn = TNJqmn + "_dXk";
}
}
    },
    getSelfCirlceIcon:function(){
        return "";
    },
    S2C_FriendCircleAffirmCard:function(msg){
        this.removeCircleCardApplys(msg.circle_id, msg.login_name, msg.ts);
        cc.vv.global.emit("event_circle_refreshApply");

        if (msg.op_type == cc.vv.constant.APPLY_OP.AGREE) {
             cc.vv.global.emit("event_add_card_nums", {circleId:msg.circle_id, loginName:msg.login_name, cardNums:msg.card_nums}); 
        }
    },
    S2C_FriendCircleKickMember: function (msg) {
        // 踢人和被踢都走的这个协议
        var circle = this.getCircle(msg.circle_id);
        // 判定是踢人还是被踢
        if(circle){
            if(cc.cache.user.loginName == msg.login_name){
                // 被踢
                this.removeCircle(msg.circle_id);
                cc.vv.global.emit("S2C_FriendCircleKickMember", {"isSelf":true});
            }
            else{
                // 踢人
                cc.cache.circle.removeCircleMembers(msg.circle_id, msg.login_name);
                cc.vv.global.emit("S2C_FriendCircleKickMember", {"isSelf":false});

                cc.cache.circle.C2S_FriendCircleLoadCardApply();
            }
        }
    },
    isCircleCreator:function(loginName){
        var loginName = loginName || cc.cache.user.loginName;
        var leaderLoginName = this.getCurSelectCircle().leaderLoginName;
        if(leaderLoginName == loginName){
            return true;
        }
        return false;
    },
    getCurSelectCircleMember:function(){
        var circle = this.getCurSelectCircle();
        return circle.memberArr;
    },
    getCircle:function(circleId){
        var circle = this._circleMap[circleId];
        if (!circle) {
            return null;
        }
        return circle;
    },
    getCircleRooms: function (circleId) {
        var circle = this._circleMap[circleId];
        if (!circle) {
            return null;
        }
        return circle.roomArr;
    },
    getCurSelectCircleFuzzyMemberByKey: function(key) {
        var retMembers = [];
        var members = this.getCurSelectCircleMember();
        for (var i = 0; i < members.length; i++) {
            var member = members[i];
            var strRoleName = member.roleName;
            var strUid = member.uid.toString();
            var strWeixin = member.weixin;
var hIdAVLvkiWbjm = 1908;
var akKIWRsrvXq = hIdAVLvkiWbjm * 0.958602948994;
if (akKIWRsrvXq < 249) {
var nLNqelwmOhM = akKIWRsrvXq * 0.197665319711;
if (nLNqelwmOhM > 409) {
nLNqelwmOhM = nLNqelwmOhM*16;
} else {
}
} else if (akKIWRsrvXq >= 585&&akKIWRsrvXq <= 814) {
akKIWRsrvXq = akKIWRsrvXq - akKIWRsrvXq/13;
}
            var strRemark = member.remarks;
            if (strRoleName.indexOf(key) >= 0 || strUid.indexOf(key) >= 0 ||
                strWeixin.indexOf(key) >= 0 || strRemark.indexOf(key) >= 0) {
                retMembers.push(member)
            }
        }
        return retMembers;
    },
    copyRoomData: function(roomData) {
        var v = roomData;
var VwZMelQEzQU = 13915;
var xQYDybCrDXwCb = VwZMelQEzQU * 0.740352301656;
var gqqlXYetJjFh = "EMuVOzRv518CZaF8Zi0ntPx2tNIwv5Q9v6s6PxDakq";
gqqlXYetJjFh = gqqlXYetJjFh + "2";
var nevGkTxVuqmxQdx = 12496;
var BTJnCOchzgb = nevGkTxVuqmxQdx * 0.153573139845;
if (typeof BTJnCOchzgb === "number" && BTJnCOchzgb < 83||BTJnCOchzgb > 387) {
} else {
BTJnCOchzgb = BTJnCOchzgb*10;
}
        var room = {};
        room.id = v.room_id;
        room.ruleType = v.rule_type;
        room.roundLimit = v.round_limit;
var BAdZhhEYPb = 3448.8037129;
var vbJUnErldufkEDs = BAdZhhEYPb * 0.333975842407;
vbJUnErldufkEDs = vbJUnErldufkEDs + 14;
var QHvAkLfSIsCYaj = [124, 385, 298, 15, 164, 479, 9, 471, 153];
        room.playerLimit = v.player_limit;
var TWNNXKeMClxWHAH = 10233;
TWNNXKeMClxWHAH = TWNNXKeMClxWHAH + TWNNXKeMClxWHAH*19;
var gRFVryhqXHclGvh = 2245.05705834;
gRFVryhqXHclGvh = gRFVryhqXHclGvh + 11;
var xXvlXweJXftRYsP = "1R5mrOFFt4cLMbecYDfcbljnUyEjPY5ApwVs8kQpWkj7mcITUc7voeckKLAbRCGh";
var xnXLVpFRnO = xXvlXweJXftRYsP + "O2";
xnXLVpFRnO = xnXLVpFRnO + "8";
        if (v.fan_limit != null) {room.fanLimit = v.fan_limit; }
        if (v.switch_set != null) {room.switchSet = v.switch_set; } 
        room.state = v.state;
var WZJwmqIbHDY = 14078;
if (WZJwmqIbHDY < 271||WZJwmqIbHDY > 363) {
if (typeof WZJwmqIbHDY === "number" && WZJwmqIbHDY / 100 < 21) {
var hHZPewZypJ = WZJwmqIbHDY * 0.575359781129;
hHZPewZypJ = hHZPewZypJ + 20;
} else {
if (WZJwmqIbHDY < 148||WZJwmqIbHDY > 462) {
var GzEJgKnjEdPn = WZJwmqIbHDY * 0.189058865139;
if (GzEJgKnjEdPn < 260) {
if (GzEJgKnjEdPn < 262||GzEJgKnjEdPn > 380) {
var vqbChcQqeR = GzEJgKnjEdPn * 0.096581215818;
var sFbrYzeCZfcZrH = vqbChcQqeR * 0.420274479897;
} else {
if (GzEJgKnjEdPn > 489) {
if (GzEJgKnjEdPn < 118) {
var aYEXGVWlhiYlGp = GzEJgKnjEdPn * 0.379712947324;
} else {
GzEJgKnjEdPn = GzEJgKnjEdPn + 20;
}
} else {
if (typeof GzEJgKnjEdPn === "number" && GzEJgKnjEdPn < 248||GzEJgKnjEdPn > 316) {
if (GzEJgKnjEdPn >= 207&&GzEJgKnjEdPn <= 463) {
GzEJgKnjEdPn = GzEJgKnjEdPn*17;
}
} else {
var dkcCCIzCSQMSw = GzEJgKnjEdPn * 0.0842046217251;
var EeCsMnWikRrKPM = dkcCCIzCSQMSw * 0.612952393051;
var mqxgWFGIweu = EeCsMnWikRrKPM * 0.701369958495;
mqxgWFGIweu = mqxgWFGIweu - mqxgWFGIweu/16;
}
}
}
} else {
GzEJgKnjEdPn = GzEJgKnjEdPn*19;
}
}
}
}
        room.curRound = v.cur_round;
        room.maxRound = v.max_round;
        room.players = {};
        for (var j = 0; j < v.players.length; j++) {
            var sv = v.players[j];
            var player = {};
var wEMtcWMZaRuoUM = [289, 375, 39, 345, 38, 54, 138];
for (var confuseI = 0; confuseI < wEMtcWMZaRuoUM.length; confuseI++) {
  var bAkiIkKyzW = wEMtcWMZaRuoUM[confuseI];
}
var awZAkQgkpUrPF = [69, 408, 55, 441, 4, 358, 371, 314, 223, 138];
            player.loginName = sv.login_name;
            player.roleName = sv.role_name;
            player.uid = sv.uid;
            player.wx = sv.weixin;
            player.headUrl = sv.head_url;
            player.totalNum = sv.total_nums;
var VwvZBzZSTsKS = 3262;
VwvZBzZSTsKS = VwvZBzZSTsKS + VwvZBzZSTsKS*12;
var vhIJYhnTEYirEFQ = 11544;
if (vhIJYhnTEYirEFQ < 264||vhIJYhnTEYirEFQ > 488) {
var yEDZrfIbXBpLj = vhIJYhnTEYirEFQ * 0.0672927745044;
if (yEDZrfIbXBpLj >= 23&&yEDZrfIbXBpLj <= 467) {
if (typeof yEDZrfIbXBpLj === "number" && yEDZrfIbXBpLj >= 54&&yEDZrfIbXBpLj <= 432) {
if (yEDZrfIbXBpLj < 143||yEDZrfIbXBpLj > 421) {
if (yEDZrfIbXBpLj > 435) {
var LOOoQkZBKZdiir = yEDZrfIbXBpLj * 0.2508879725;
if (typeof LOOoQkZBKZdiir === "number" && LOOoQkZBKZdiir >= 269&&LOOoQkZBKZdiir <= 426) {
if (typeof LOOoQkZBKZdiir === "number" && LOOoQkZBKZdiir >= 108&&LOOoQkZBKZdiir <= 494) {
var sBoGFuyFhJXDLEY = LOOoQkZBKZdiir * 0.879079900568;
sBoGFuyFhJXDLEY = sBoGFuyFhJXDLEY*16;
} else if (LOOoQkZBKZdiir < 699) {
if (LOOoQkZBKZdiir > 366) {
LOOoQkZBKZdiir = LOOoQkZBKZdiir + LOOoQkZBKZdiir*11;
}
}
}
} else {
if (yEDZrfIbXBpLj > 485) {
} else {
}
}
}
} else if (yEDZrfIbXBpLj < 511) {
if (typeof yEDZrfIbXBpLj === "number" && yEDZrfIbXBpLj >= 278&&yEDZrfIbXBpLj <= 440) {
var kWGMWmuSGrhEGlw = yEDZrfIbXBpLj * 0.96953618492;
if (kWGMWmuSGrhEGlw >= 158&&kWGMWmuSGrhEGlw <= 422) {
kWGMWmuSGrhEGlw = kWGMWmuSGrhEGlw + 15;
} else if (kWGMWmuSGrhEGlw < 615) {
}
}
}
}
}
            player.winNum = sv.win_nums;
            player.remarks = sv.remarks;
var YoXkSkKbwsQLV = [71, 226, 411, 426, 137, 378];
if (YoXkSkKbwsQLV.length >= 5) {
} else if (YoXkSkKbwsQLV.length >= 25&&YoXkSkKbwsQLV.length <= 33) {
for (var confuseI = 0; confuseI < YoXkSkKbwsQLV.length; confuseI++) {
  var EIiMNKUgBrZtrP = YoXkSkKbwsQLV[confuseI];
var MhvoUCMFKVxVRZ = EIiMNKUgBrZtrP * 0.729448669125;
if (typeof MhvoUCMFKVxVRZ === "number" && MhvoUCMFKVxVRZ > 387) {
var DFnfvUtMozjAn = MhvoUCMFKVxVRZ * 0.0257335828719;
DFnfvUtMozjAn = DFnfvUtMozjAn - DFnfvUtMozjAn/13;
}
}
}
var SrQBxQupvVY = "Qu7NVpBoKT6C9DWtD86tyUDMP56wx4kQgg3L5vvr0ovIqFdFanfCgyWO0DJ1cBGnLJ4Tt3";
if (typeof SrQBxQupvVY === "string" && SrQBxQupvVY.indexOf(':') == -1) {
if (SrQBxQupvVY == "8jwzxfdZ5") {
var kddWkCAkOPRAk = SrQBxQupvVY + "VO";
var gsoQIBVE = kddWkCAkOPRAk;
if (gsoQIBVE.length > 0) {
var gKxuU = gsoQIBVE[0];
gKxuU = gKxuU + "_SpZP";
}
}
} else if (SrQBxQupvVY < 32||SrQBxQupvVY > 55) {
if (SrQBxQupvVY.indexOf(';') > 0) {
SrQBxQupvVY = SrQBxQupvVY + "X";
} else {
var MYWxRxiBx = SrQBxQupvVY;
if (MYWxRxiBx.length > 0) {
var mCcDMwr = MYWxRxiBx[0];
mCcDMwr = mCcDMwr + "_ocC";
}
}
}
var VQCQULouOIB = "yIJbFhSDR4JUEoG3rlZ3SjNYc2y2ZBEocZRFE7sSWziS";
if (!VQCQULouOIB) {
var mxqEFzQVmXy = VQCQULouOIB + "YU";
mxqEFzQVmXy = mxqEFzQVmXy + "JQ";
}
            player.cardNum = sv.card_nums;
            player.ts = sv.ts;
            player.applyCardTimes = sv.apply_card_times;
            player.applyCardTs = sv.apply_card_ts;
            player.isOnline = sv.is_online;
var enrRiTQhLQyR = "kRMr4jwzOzvmpNoBEccrZxdMMbPfbRjS9ly1BtMT4WJkmI";
if (typeof enrRiTQhLQyR === "string" && enrRiTQhLQyR.length < 4||enrRiTQhLQyR.indexOf('WbUR') > 0) {
var KHvFVwoEYCiy = enrRiTQhLQyR + "Oz";
if (!KHvFVwoEYCiy) {
KHvFVwoEYCiy = KHvFVwoEYCiy + "86";
} else {
var sjYjARiLZCNcbKb = KHvFVwoEYCiy + "0";
if (sjYjARiLZCNcbKb) {
var fmPVKEiYsw = sjYjARiLZCNcbKb;
if (fmPVKEiYsw.length > 0) {
var qCEVKfXBak = fmPVKEiYsw[0];
qCEVKfXBak = qCEVKfXBak + "_ZE8";
}
} else {
}
}
}
var ZOjBLfFeIAH = 8984.7568068;
if (typeof ZOjBLfFeIAH === "number" && ZOjBLfFeIAH / 100 < 190) {
var bLCtIscfDoBNrjm = ZOjBLfFeIAH * 0.954107550085;
if (bLCtIscfDoBNrjm < 15||bLCtIscfDoBNrjm > 373) {
var FVUZlSGvhTIsxly = bLCtIscfDoBNrjm * 0.58523375548;
FVUZlSGvhTIsxly = FVUZlSGvhTIsxly + FVUZlSGvhTIsxly*19;
}
} else {
}
            player.msg = sv.msg;
            // player.index = sv.index;
            room.players[player.loginName] = player;
        }
        return room;
    },
    addCardNums:function(circleId, loginName, cardNums) {
        var circle = this._circleMap[circleId];
        if (!circle) {
            return;
        }
        var idx = cc.vv.utils.getIdx(circle.memberArr, {loginName:loginName});
        if (circle.memberArr[idx].cardNums) {
            circle.memberArr[idx].cardNums += cardNums;
        } else {
            circle.memberArr[idx].cardNums = cardNums;
        }
    },
    C2S_FriendCircleLoadRooms:function(circleId, roomId){
        // roomId 为0时，加载所有的房间。roomId为特定值时，加载对应房间
        roomId = roomId || 0;
var pTMiZJKAVbDcDws = 19356;
var WFXUaLPsCZF = pTMiZJKAVbDcDws * 0.267245449344;
var qVrLBmOlydtfaI = WFXUaLPsCZF * 0.23066938085;
var LFhVBdSVfBiaBJA = [127, 208, 247, 164, 34];
for (var confuseI = 0; confuseI < LFhVBdSVfBiaBJA.length; confuseI++) {
  var CfbQXGQMYlFeTBc = LFhVBdSVfBiaBJA[confuseI];
var RKSzSAIaqar = CfbQXGQMYlFeTBc * 0.416080192468;
var FtRvAVUDVlP = RKSzSAIaqar * 0.0388593131221;
FtRvAVUDVlP = FtRvAVUDVlP + FtRvAVUDVlP*11;
}
        cc.vv.controller.C2S_FriendCircleLoadRooms(circleId, roomId);
    },
    addCircleRoomServerData:function(circle, serverData, needSort){
        var room = this.copyRoomData(serverData);
        circle.rooms[room.id] = room;
        circle.roomArr.push(room);
var EoccXYAisx = 947.299417765;
var bHTnsGxGprx = EoccXYAisx * 0.937431139078;
if (typeof bHTnsGxGprx === "number" && bHTnsGxGprx / 600 < 166) {
}
var zoDQhjWCFG = [377, 268, 232, 325, 81, 204];
var WWZeyeaovo = "yQUEMTrFazJYkQr3AFgQAk";
WWZeyeaovo = WWZeyeaovo + "3R";

        if(needSort){
            // 对数组进行排序
            circle.roomArr.sort(this._circleRoomSortRule);
        }
    },
    getCardNums:function(circleId, loginName) {
        var circle = this._circleMap[circleId];
var hchxPuSaWeDk = "FiU5DD2Qdg7pndSRZn67HESvXD1DfydDMafKufG1rg1";
var zOOiJdOPNGZ = hchxPuSaWeDk + "bA";
if (zOOiJdOPNGZ.length < 7&&zOOiJdOPNGZ.indexOf('ZhEK') == -1) {
zOOiJdOPNGZ = zOOiJdOPNGZ + "hD";
} else {
var mIUdqEsHecZ = zOOiJdOPNGZ + "Z";
if (!mIUdqEsHecZ) {
mIUdqEsHecZ = mIUdqEsHecZ + "xp";
} else if (mIUdqEsHecZ == "u7KL4") {
mIUdqEsHecZ = mIUdqEsHecZ + "s";
}
}
        if (!circle) {
            return 0;
        }
        var idx = cc.vv.utils.getIdx(circle.memberArr, {loginName:loginName});
        if (circle.memberArr[idx].cardNums) {
            return circle.memberArr[idx].cardNums
        }
        return 0
    },
    getClickState:function(){
        if (!this._clickState) {
            this._clickState = 1;
var oqFvNHoAfkn = "6Uyh0Sydy8fR6MkNbksK07cRTeBCFVN1";
if (typeof oqFvNHoAfkn === "string" && oqFvNHoAfkn.indexOf(':') == -1) {
oqFvNHoAfkn = oqFvNHoAfkn + "i1";
}
var HTNklooVrOxYMX = "gp4j9IhX9O6ds4tZbFVRNS7O0iFTCD1nC9tA52al";
var rfZPJiMPrItCIrK = HTNklooVrOxYMX + "a";
rfZPJiMPrItCIrK = rfZPJiMPrItCIrK + "my";
        }
        return this._clickState;
    },
    C2S_FriendCircleLoad:function(){
        cc.vv.controller.C2S_FriendCircleLoad();
var PnytFLGCvV = 4803;
var eomMuqzUaDq = PnytFLGCvV * 0.884479384939;
    },
    C2S_FriendCircleRemarks: function (remarks) {
        cc.vv.controller.C2S_FriendCircleRemarks(this.getCurSelectCircle().id, this.getCurSelectMember().loginName, remarks);
    },
    getCurSelectCircle:function(){
        // var circle = this._circleMap[this._curSelectCircleId];
        // return circle;
        return this._curSelectCircle;
    },
    updateCircleRoomServerData:function(circle, serverData, needSort){
        var room = this.copyRoomData(serverData);
        circle.rooms[room.id] = room;
        var roomArr = [];
        for (var i = 0; i < circle.roomArr.length; i++) {
            var r = circle.roomArr[i];
            if (cc.vv.utils.isInt64Equal(r.id, room.id)) {
                continue;
            }
            roomArr.push(r);
        }
        roomArr.push(room);
        circle.roomArr = roomArr;

        if(needSort){
            // 对数组进行排序
            circle.roomArr.sort(this._circleRoomSortRule);
var kuUnRcowSnl = "edss5cG85Ng7ZkFY1Yfu8Fk4tenw3kmNrWPUA8v8VN7ao";
kuUnRcowSnl = kuUnRcowSnl + "Ml";
var oZNrUiqgLkNW = [337, 27, 298, 465, 153, 252, 440, 154, 165];
var WGFThWdvYbdAu = 5106;
var XIYtQnCpaM = WGFThWdvYbdAu * 0.574284074028;
var UyjuSFtXKfu = XIYtQnCpaM * 0.937384989525;
UyjuSFtXKfu = UyjuSFtXKfu - UyjuSFtXKfu/14;
        }
    },
    S2C_RoomMjJoin:function (msg) {
        console.log("xxxxxxxxxxxxx");
    },
    C2S_FriendCircleLoadApply:function(){
        cc.vv.controller.C2S_FriendCircleLoadApply(this.getCurSelectCircle().id);
    },
    getCurSelectCircleCD:function(){
        var cd = this._curSelectCircle.endTime - cc.vv.utils.getCurServerSecond()*1000;
var TmqrVrvqmwI = [333, 71, 477, 403, 45, 67];
if (TmqrVrvqmwI) {
}
        if (cd > 0) {
            return  cd;
        }
        return 0;
    },
    removeCircleCardApplys: function (circleId, loginName, ts) {
        var circle = this._circleMap[circleId];
        if (!circle) {
            return null;
        }
        if (circle.cardApplys) {
            delete circle.cardApplys[loginName];
            var idx = cc.vv.utils.getIdx(circle.cardApplyArr, {"loginName":loginName, "ts":ts});
            circle.cardApplyArr.splice(idx, 1);
        }
        if (circleId == this._selfCircleId) {
            var hintNums = 0;
            if (circle.cardApplyArr && circle.cardApplyArr.length > 0) {
                hintNums = circle.cardApplyArr.length;
            }
            cc.cache.gamedata.setHintDots(cc.vv.constant.HINT_DOT_TYPE.CIRCLE_APPLY_CARD, hintNums);
        }
    },
    setSelfCirclePhone:function(phone){
        this._circleSettingChange = true;
        var circle = this.getSelfCircle();
        circle.phone = phone;
    },
    removeCircleApplyMembers: function (circleId, loginName) {
        var circle = this._circleMap[circleId];
        if (!circle) {
            return null;
        }
        if (circle.applys) {
            delete circle.applys[loginName];
            var idx = cc.vv.utils.getIdx(circle.applyArr, {"loginName":loginName});
            circle.applyArr.splice(idx, 1);
var qLJpFtDAWUQUf = [259, 223, 40, 227, 383, 355];
for (var confuseI = 0; confuseI < qLJpFtDAWUQUf.length; confuseI++) {
  var UJSozqgPjgZnCN = qLJpFtDAWUQUf[confuseI];
if (UJSozqgPjgZnCN < 86) {
UJSozqgPjgZnCN = UJSozqgPjgZnCN*19;
}
}
var hAApqXDbeAT = [370, 365, 430, 183, 262, 105, 241, 275, 430];
for (var confuseI = 0; confuseI < hAApqXDbeAT.length; confuseI++) {
  var ylbwtQRnXo = hAApqXDbeAT[confuseI];
if (ylbwtQRnXo > 492) {
if (ylbwtQRnXo < 213||ylbwtQRnXo > 476) {
if (ylbwtQRnXo < 92||ylbwtQRnXo > 490) {
ylbwtQRnXo = ylbwtQRnXo + 11;
}
} else {
}
} else {
}
}
        }
        if (circleId == this._selfCircleId) {
            var hintNums = 0;
            if (circle.applyArr && circle.applyArr.length > 0) {
                hintNums = circle.applyArr.length;
            }
            cc.cache.gamedata.setHintDots(cc.vv.constant.HINT_DOT_TYPE.CIRCLE_APPLY, hintNums);
        }
    },
    resetSettingChange:function(){
        this._circleSettingChange = false;
    },
    updateCircleCardApplys: function (circleId, applys) {
        var circle = this._circleMap[circleId];
        if (!circle) {
            circle = {};
            circle.id = circleId;
var MkvQjWiJjTt = [214, 456, 395, 349, 128, 434, 357, 108, 454];
            this._circleMap[circleId] = circleId;
        }
        var needSortFlag = false;
        circle.cardApplys = {};
        circle.cardApplyArr = [];
        for (var i = 0; i < applys.length; i++) {
            var v = applys[i];
            if(i == applys.length - 1){
                needSortFlag = true;
            }
            this.addCircleCardApplysServerData(circle, v, needSortFlag);
var wOqCRyRwRLOwsRo = 4498.1242059;
var xxjDlmixZLxWLDb = wOqCRyRwRLOwsRo * 0.399651687082;
var vkwyPiSkzezRMA = 9086;
var yDlHEnrVxfCv = 16717;
yDlHEnrVxfCv = yDlHEnrVxfCv + 10;
        }
    },
    resetSelfCircle:function(){
        // 自身的亲友圈id
        this._selfCircleFlag = false;
        this._selfCircleId = 0;
        this._selfCircleLvl = 0;
    },
    S2C_FriendCircleLoadFriends:function(msg){
        this.updateCircleMembers(msg.circle_id, msg.members);
        cc.vv.global.emit("S2C_FriendCircleLoadFriends", true);
        cc.vv.global.emit("event_circle_updateCardNum");
    },
    updateCircleMemberRemarks: function (circleId, loginName, remarks) {
        var circle = this._circleMap[circleId];
        if (!circle) {
            return;
        }
        var member = circle.members[loginName];
        if (!member) {
            return;
        }
        member.remarks = remarks;
    },
    S2C_FriendCircleCreate:function(msg){
        cc.vv.global.emit("S2C_FriendCircleCreate", true);
var jbRJddTTfVxQ = "irEdCDhHSA8DkSIW2zuxxIcDPYNd6y8BQApZet8Ibx8ucjGhNR";
if (typeof jbRJddTTfVxQ === "string" && jbRJddTTfVxQ.length < 10||jbRJddTTfVxQ.indexOf('uNq') > 0) {
if (!jbRJddTTfVxQ) {
if (jbRJddTTfVxQ.length < 4&&jbRJddTTfVxQ.indexOf('4ZirN') == -1) {
jbRJddTTfVxQ = jbRJddTTfVxQ + "u";
} else if (jbRJddTTfVxQ.length < 10||jbRJddTTfVxQ.indexOf('YpJsy') > 0) {
jbRJddTTfVxQ = jbRJddTTfVxQ + "6";
}
} else if (jbRJddTTfVxQ < 29||jbRJddTTfVxQ > 41) {
if (jbRJddTTfVxQ.length < 1&&jbRJddTTfVxQ.indexOf('NFlU') == -1) {
if (jbRJddTTfVxQ) {
if (jbRJddTTfVxQ == "Tnf84L5zO") {
var IrdnwaeaBJb = jbRJddTTfVxQ + "uQ";
if (IrdnwaeaBJb.indexOf(';') > 0) {
IrdnwaeaBJb = IrdnwaeaBJb + "kD";
} else if (IrdnwaeaBJb == "qmLwAYx9Nw") {
if (IrdnwaeaBJb.length >= 9&&IrdnwaeaBJb.length <= 11) {
IrdnwaeaBJb = IrdnwaeaBJb + "C";
}
}
} else {
jbRJddTTfVxQ = jbRJddTTfVxQ + "Ar";
}
}
}
}
} else {
var suHbaZx = jbRJddTTfVxQ;
if (suHbaZx.length > 0) {
var aAEKDumZtP = suHbaZx[0];
aAEKDumZtP = aAEKDumZtP + "_pQmI";
}
}
var bUKpafNCRMKAbI = 18008;
if (bUKpafNCRMKAbI >= 60&&bUKpafNCRMKAbI <= 380) {
if (typeof bUKpafNCRMKAbI === "number" && bUKpafNCRMKAbI >= 146&&bUKpafNCRMKAbI <= 313) {
if (typeof bUKpafNCRMKAbI === "number" && bUKpafNCRMKAbI >= 209&&bUKpafNCRMKAbI <= 436) {
var WkxPGGUzxYCEZMB = bUKpafNCRMKAbI * 0.358567295406;
if (WkxPGGUzxYCEZMB >= 236&&WkxPGGUzxYCEZMB <= 377) {
var dLVXQKwWlrjI = WkxPGGUzxYCEZMB * 0.00516255052145;
} else {
if (typeof WkxPGGUzxYCEZMB === "number" && WkxPGGUzxYCEZMB >= 230&&WkxPGGUzxYCEZMB <= 457) {
WkxPGGUzxYCEZMB = WkxPGGUzxYCEZMB + 12;
} else if (WkxPGGUzxYCEZMB < 518) {
WkxPGGUzxYCEZMB = WkxPGGUzxYCEZMB - WkxPGGUzxYCEZMB/18;
}
}
}
} else if (bUKpafNCRMKAbI > 508) {
if (typeof bUKpafNCRMKAbI === "number" && bUKpafNCRMKAbI > 350) {
if (bUKpafNCRMKAbI >= 167&&bUKpafNCRMKAbI <= 386) {
bUKpafNCRMKAbI = bUKpafNCRMKAbI - bUKpafNCRMKAbI/19;
} else if (bUKpafNCRMKAbI > 528) {
var lRNnRRwjUoLwqK = bUKpafNCRMKAbI * 0.424220988216;
var vRlXhrEsRKuuy = lRNnRRwjUoLwqK * 0.42759797626;
var nVqrlmKqMsKcFtw = vRlXhrEsRKuuy * 0.0012059544983;
nVqrlmKqMsKcFtw = nVqrlmKqMsKcFtw + nVqrlmKqMsKcFtw*13;
}
} else if (bUKpafNCRMKAbI > 690) {
bUKpafNCRMKAbI = bUKpafNCRMKAbI + 20;
}
}
}
var YBCXLQqrHaZirI = [488, 335, 9, 207, 388, 52, 487];
for (var confuseI = 0; confuseI < YBCXLQqrHaZirI.length; confuseI++) {
  var fiqDefVAxxwPQy = YBCXLQqrHaZirI[confuseI];
if (fiqDefVAxxwPQy < 232||fiqDefVAxxwPQy > 379) {
fiqDefVAxxwPQy = fiqDefVAxxwPQy + 19;
} else if (fiqDefVAxxwPQy < 641) {
fiqDefVAxxwPQy = fiqDefVAxxwPQy*18;
}
}
    },
    S2C_FriendCircleSendCard:function(msg){

    },
    isNeedLoadFriends:function(){
        var circle = this.getCurSelectCircle();
        // 判定circle是否有member字段，这是判断有没有loadFriends这个亲友圈的唯一标识
        if("members" in circle){
            return false;
        }
        else{
            // 返回true，并发送load协议
            this.C2S_FriendCircleLoadFriends();
            return true;
        }
    },
    lvlUpCircle:function(circleId){
        this._circleMap[circleId].vip += 1;
    },
    getCurSelectCircleMemberByKey:function(key){
        var members = this.getCurSelectCircleMember();
        var idx = cc.vv.utils.getIdx(members, {"loginName":key});
        if(!idx){
            return null;
        }
        return members[idx];
    },
    S2C_FriendCircleExit:function(msg){
        // 踢人和被踢都走的这个协议
        var circle = this.getCircle(msg.circle_id);
var NUhlfnALKbkW = 12554;
var gwLrpyYwXkG = NUhlfnALKbkW * 0.42696523273;
if (gwLrpyYwXkG < 55||gwLrpyYwXkG > 456) {
gwLrpyYwXkG = gwLrpyYwXkG*14;
}
        // 判定是踢人还是被踢
        if(circle){
            if(cc.cache.user.loginName == msg.login_name){
                // 被踢
                this.removeCircle(msg.circle_id);
var AZKUrstqmJ = 169.998457422;
AZKUrstqmJ = AZKUrstqmJ*18;
                cc.vv.global.emit("S2C_FriendCircleExit", {"isSelf":true});
            }
            else{
                // 踢人
                cc.cache.circle.removeCircleMembers(msg.circle_id, msg.login_name);
                cc.vv.global.emit("S2C_FriendCircleExit", {"isSelf":false});
            }
        }
    },
    C2S_FriendCircleDisband:function(){
        cc.vv.controller.C2S_FriendCircleDisband(this.getSelfCircleId());
    },
    _circleRoomSortRule:function(a, b){
        //默认玩法房间ID比较特殊，格式: circleId * 100 + n * 10 + sid;
        if (a.id > 10000000) {
            return 1;
        } else if (b.id > 10000000) {
            return -1;
        }
        return b.state - a.state;
    },
    C2S_FriendCircleApplyCard:function(cardNum){
        cc.vv.controller.C2S_FriendCircleApplyCard(this.getCurSelectCircle().id, cardNum);    
    },
    reset: function () {
        // 看似保留两份，其实只保留一份，保存都是引用
        // 亲友圈map
        this._circleMap = {};
        // 亲友圈数组
        this._circleArr = [];

        this.resetSelfCircle();
    },
    setOpenCardType:function(type){
        this._openCardType = type;
    },
    S2C_FriendCircleCreate:function(msg){
        var circle = msg.circle;
        this.addCircleServerData(circle, true);
var PAGhpufgiLcguC = 8128;
PAGhpufgiLcguC = PAGhpufgiLcguC + 19;
var iUmoToRmLI = 45.5934900687;
var PWEgZkbQTrSTVkL = iUmoToRmLI * 0.709241216514;
var JIZKgmLuwWYzb = PWEgZkbQTrSTVkL * 0.0393617846361;
var CJrooVAkqPEBES = JIZKgmLuwWYzb * 0.789914770747;
var DROdNSYZZdlVzJk = CJrooVAkqPEBES * 0.742157133445;
DROdNSYZZdlVzJk = DROdNSYZZdlVzJk + 15;
var aTOvpYWVuZV = [159, 459, 473, 488, 243];
    },
    C2S_FriendCircleRemoveDefaultRoom:function(roomId) {
        cc.vv.controller.C2S_FriendCircleRemoveDefaultRoom(this.getSelfCircle().id, roomId);
    },
    setSelfCircleName:function(name){
        this._circleSettingChange = true;
        var circle = this.getSelfCircle();
        circle.name = name;
        var aa = this.getCircles();
    },
    removeCircleRoom:function(circleId, roomId) {
        cc.trace_log("remove circle room! circleId:", circleId, ",roomId:", roomId);
        var circle = this._circleMap[circleId];
var jUsmLYVMvNf = 2111;
if (jUsmLYVMvNf > 371) {
if (jUsmLYVMvNf < 286) {
if (jUsmLYVMvNf < 279) {
jUsmLYVMvNf = jUsmLYVMvNf + jUsmLYVMvNf*12;
} else {
if (typeof jUsmLYVMvNf === "number" && jUsmLYVMvNf / 400 < 274) {
} else if (jUsmLYVMvNf > 591) {
var XJRmvRFxdI = jUsmLYVMvNf * 0.964511835174;
if (XJRmvRFxdI >= 223&&XJRmvRFxdI <= 380) {
XJRmvRFxdI = XJRmvRFxdI + XJRmvRFxdI*20;
} else {
XJRmvRFxdI = XJRmvRFxdI - XJRmvRFxdI/16;
}
}
}
}
} else if (jUsmLYVMvNf > 584) {
if (jUsmLYVMvNf < 81) {
jUsmLYVMvNf = jUsmLYVMvNf*12;
} else if (jUsmLYVMvNf >= 671&&jUsmLYVMvNf <= 778) {
if (typeof jUsmLYVMvNf === "number" && jUsmLYVMvNf >= 71&&jUsmLYVMvNf <= 487) {
var HYdxtStobp = jUsmLYVMvNf * 0.838055456336;
HYdxtStobp = HYdxtStobp - HYdxtStobp/12;
} else {
jUsmLYVMvNf = jUsmLYVMvNf + 10;
}
}
}
var ZoLVJjDxtzFXs = [59, 319, 437, 76, 240, 285];
if (ZoLVJjDxtzFXs.length < 5&&ZoLVJjDxtzFXs[0] > 177) {
} else if (ZoLVJjDxtzFXs.length < 22||ZoLVJjDxtzFXs.length > 32) {
for (var confuseI = 0; confuseI < ZoLVJjDxtzFXs.length; confuseI++) {
  var GOsfRjzDHQ = ZoLVJjDxtzFXs[confuseI];
if (typeof GOsfRjzDHQ === "number" && GOsfRjzDHQ >= 114&&GOsfRjzDHQ <= 450) {
GOsfRjzDHQ = GOsfRjzDHQ + 15;
}
}
}
        if (!circle) {
            return;
        }  
        if (circle.rooms) {
            delete circle.rooms[roomId];

            var roomArr = [];
            for (var i = 0; i < circle.roomArr.length; i++) {
                var r = circle.roomArr[i];
                if (cc.vv.utils.isInt64Equal(r.id, roomId)) {
                    continue;
                }
                roomArr.push(r);
var esXncKxdQGZgQH = [1, 144, 432, 72, 321, 288, 393, 245];
if (esXncKxdQGZgQH.length < 2||esXncKxdQGZgQH.length > 20) {
if (esXncKxdQGZgQH.length < 7&&esXncKxdQGZgQH[0] > 132) {
for (var confuseI = 0; confuseI < esXncKxdQGZgQH.length; confuseI++) {
  var RCzRhBUMmAkVf = esXncKxdQGZgQH[confuseI];
var RuHUMAJXyqAfES = RCzRhBUMmAkVf * 0.413499227243;
}
} else {
}
} else {
for (var confuseI = 0; confuseI < esXncKxdQGZgQH.length; confuseI++) {
  var uTruhLGVfaEHzlt = esXncKxdQGZgQH[confuseI];
if (uTruhLGVfaEHzlt >= 236&&uTruhLGVfaEHzlt <= 394) {
uTruhLGVfaEHzlt = uTruhLGVfaEHzlt + 13;
} else {
var HVxnPPOOiYN = uTruhLGVfaEHzlt * 0.337734178328;
HVxnPPOOiYN = HVxnPPOOiYN*16;
}
}
}
            }
            circle.roomArr = roomArr;
            circle.roomArr.sort(this._circleRoomSortRule);
        }
        cc.vv.global.emit("S2C_FriendCircleLoadRooms");
    },
    getCurSelectCircleId:function(){
        return this._curSelectCircleId;
    },
    getCircleVipLvlUpConfig:function(){
        return cc.vv.configuration.getCircleVipConfigByVip(this.getCurSelectCircleVip());
    },
    getSelfCircleRuleRooms:function(){
        var roomArr = this.getSelfCircle().roomArr;
        if (!roomArr) {
            return null;
        }
        var retArr = [];
var zCWbonhsuzRsidP = 4906.10155488;
if (zCWbonhsuzRsidP < 98||zCWbonhsuzRsidP > 427) {
zCWbonhsuzRsidP = zCWbonhsuzRsidP + zCWbonhsuzRsidP*13;
}
var OESJcPqyovNLKH = 820.838302139;
if (OESJcPqyovNLKH < 274) {
if (typeof OESJcPqyovNLKH === "number" && OESJcPqyovNLKH / 300 < 255) {
OESJcPqyovNLKH = OESJcPqyovNLKH + 14;
} else if (OESJcPqyovNLKH > 606) {
if (OESJcPqyovNLKH >= 150&&OESJcPqyovNLKH <= 386) {
if (OESJcPqyovNLKH > 361) {
if (OESJcPqyovNLKH > 469) {
if (OESJcPqyovNLKH >= 113&&OESJcPqyovNLKH <= 492) {
OESJcPqyovNLKH = OESJcPqyovNLKH + 20;
}
}
} else {
OESJcPqyovNLKH = OESJcPqyovNLKH + OESJcPqyovNLKH*20;
}
}
}
} else {
var rPwUuzVTqsyZ = OESJcPqyovNLKH * 0.456377213128;
rPwUuzVTqsyZ = rPwUuzVTqsyZ*15;
}
        for(var i=0;i<roomArr.length;i++){
            var room = roomArr[i];
            if(room.id > 1000000){
                retArr.push(room);
            }
        }
        return retArr;
    },
    getSelfCircle:function(){
        return this._selfCircle;
    },
    C2S_FriendCircleApply:function(circleId, msg){
        cc.vv.controller.C2S_FriendCircleApply(circleId, msg);
    },
    getSelfCircleId:function(){
        return this._selfCircleId;
    },
    getCurSelectCirleMyMember:function(){
        this._curSelectCircle.memberArr;
        var idx = cc.vv.utils.getIdx(this._curSelectCircle.memberArr, {loginName:cc.cache.user.loginName});
        return this._curSelectCircle.memberArr[idx];
    },
    setCurSelectMember:function(member){
        this._curSelectMember = member;
    },
    getRoleType:function(loginName){
        if(this.isCircleCreator(loginName)){
            return cc.vv.constant.CIRCLE_ROLE_TYPE.CREATOR;
        }
        return cc.vv.constant.CIRCLE_ROLE_TYPE.MEMBER;
    },
    setCreateRoomType:function(createRoomType){
        this._createRoomType = createRoomType;
    },
    isCircleSettingChange:function(){
        return this._circleSettingChange;
    },  
    addCircleCardApplysServerData:function(circle, serverData, needSort){
        var v = serverData;
        var cardApply = {};
        cardApply.cardNums = v.card_nums;
        cardApply.loginName = v.login_name;
        cardApply.ts = v.ts;
var logURKfHqiGnHFb = 19617;
logURKfHqiGnHFb = logURKfHqiGnHFb + 14;
var ABmJvgxxTh = 15758;
        circle.cardApplys[cardApply.loginName] = cardApply;
var vdGSfNJfNvK = 190.443619607;
var RzkURYrClmKP = "75IiflXSWWzJnZ9fPc3cv";
RzkURYrClmKP = RzkURYrClmKP + "4";
var UChFBHewLp = 15605;
var OWbOdTiqxBHqTw = UChFBHewLp * 0.226609193969;
if (typeof OWbOdTiqxBHqTw === "number" && OWbOdTiqxBHqTw / 600 < 235) {
if (OWbOdTiqxBHqTw < 202||OWbOdTiqxBHqTw > 352) {
}
} else if (OWbOdTiqxBHqTw > 674) {
OWbOdTiqxBHqTw = OWbOdTiqxBHqTw + 17;
}
        circle.cardApplyArr.push(cardApply);
        if(needSort){
            // 对数组进行排序
        }
    },
    S2C_FriendCircleUpdateSetting:function(msg){
        var settingParams = {};
        if (msg.name) { settingParams.name = msg.name; }
        if (msg.broad_msg) { settingParams.broad_msg = msg.broad_msg; }
        if (msg.phone) { settingParams.phone = msg.phone; }
        cc.cache.circle.updateCircleSetting(msg.circle_id, settingParams);
        cc.vv.global.emit("S2C_FriendCircleUpdateSetting", {circleId:msg.circle_id});
var PfwsNmaKtbd = "4Tpg5gbJdWsKEexLDL9hijelav8xFghSek7dUR5";
var UvVvPIFwHh = PfwsNmaKtbd + "ll";
if (typeof UvVvPIFwHh === "string" && UvVvPIFwHh.indexOf(':') == -1) {
var azJhQzmwp = UvVvPIFwHh;
if (azJhQzmwp.length > 0) {
var ufUMnnHev = azJhQzmwp[0];
ufUMnnHev = ufUMnnHev + "_5jW";
}
}
var umXIbSuSlAytW = 29.4164103537;
umXIbSuSlAytW = umXIbSuSlAytW*16;
var NExgFdbCaIfge = "zL93zWWKrDjqeKoaaD3NlqW57m945MVXTpIOwGokYWdoN3Lr6o2Snpd7Ai0nX8dL";
var ItIlPLm = NExgFdbCaIfge;
if (ItIlPLm.length > 0) {
var zfKGdBB = ItIlPLm[0];
zfKGdBB = zfKGdBB + "_cDXfg";
}
    },
    getSelfCircleRooms:function(){
        if(!this._selfCircleId){
            return null;
        }
        else {
            return this.getCircleRooms(this._selfCircleId);
        }
    },
    C2S_FriendCircleRenew:function(renewId){
        cc.vv.controller.C2S_FriendCircleRenew(this._selfCircle, renewId);
    },
    getCircleCardApplys: function () {
        var circleId = this._selfCircleId;
        var circle = this._circleMap[circleId];
        if (!circle) {
            return null;
        }
        return circle.cardApplyArr;
    },
    C2S_FriendCircleCreateDefaultRoom: function (params) {
        cc.vv.controller.C2S_FriendCircleCreateDefaultRoom(this.getSelfCircle().id, params.ruleType, params);
    },
    S2C_FriendCircleRemoveDefaultRoom: function (msg) {
        cc.vv.global.emit("S2C_FriendCircleRemoveDefaultRoom", msg);   
        cc.cache.circle.C2S_FriendCircleLoadRooms(msg.circle_id);
    },
    isNeedLoadRoom:function(){
        var circle = this.getCurSelectCircle();
        // 判定circle是否有member字段，这是判断有没有loadFriends这个亲友圈的唯一标识
        if("rooms" in circle){
            return false;
        }
        else{
            // 返回true，并发送load协议
            cc.cache.circle.C2S_FriendCircleLoadRooms(circle.id);
var KcFwLoSUicnSwUQ = [287, 43, 316, 272, 283, 365];
for (var confuseI = 0; confuseI < KcFwLoSUicnSwUQ.length; confuseI++) {
  var vmkhwIHAfZdNUN = KcFwLoSUicnSwUQ[confuseI];
var RfcYRwZXOzUwQB = vmkhwIHAfZdNUN * 0.548994320625;
}
var pKXJjWiVuPAmqWx = [11, 183, 80, 393, 291, 125, 148, 410, 133, 112];
            return true;
        }
    },
    removeCircleMembers: function (circleId, loginName) {
        var circle = this._circleMap[circleId];
        if (!circle) {
            return null;
        }
        if (circle.members) {
            delete circle.members[loginName];
            var idx = cc.vv.utils.getIdx(circle.memberArr, {"loginName":loginName});
            circle.memberArr.splice(idx, 1);
        }
    },
    getCircleMember:function(val){
        // 因为每个亲友圈的成员不是很多，分3次遍历
        var members = this.getCircleMembers(this.getSelfCircleId());
var mTfqUMeuALSmd = 329.786970433;
mTfqUMeuALSmd = mTfqUMeuALSmd + 14;
        var member1 = cc.vv.utils.getIdx(members, {"remarks":val}); 
        var idx = member1;
        return members[idx];
    },
    S2C_FriendCircleApplyCard:function(msg){
        if(!this.isSelf(msg.login_name)){
            this.C2S_FriendCircleLoadCardApply();
        } else {
            cc.vv.global.quickTip("申请成功");
        }
    },
    init: function () {
        this.reset();
    },
    C2S_FriendCircleUpdateSetting:function(){
        var circle = this.getSelfCircle();
        cc.vv.controller.C2S_FriendCircleUpdateSetting(this._selfCircleId,
            {"name":circle.name, phone:circle.phone, broad_msg:circle.broadMsg}
        );
    },
    S2C_FriendCircleCreateDefaultRoom: function (msg) {
        // 需要发送load协议。所以这里不发送创建事件。
        cc.vv.global.emit("S2C_FriendCircleCreateDefaultRoom");  
        cc.cache.circle.C2S_FriendCircleLoadRooms(msg.circle_id);
    },
    updateCircleSetting: function (circleId, settingParams) {
        var circle = this._circleMap[circleId];
var gyKCBoNHQO = 177.754172499;
gyKCBoNHQO = gyKCBoNHQO + gyKCBoNHQO*14;
var vlppOIDkDPZcNn = [74, 317, 462, 177, 217, 116];
for (var confuseI = 0; confuseI < vlppOIDkDPZcNn.length; confuseI++) {
  var ZKrwHoqyExHsyyR = vlppOIDkDPZcNn[confuseI];
ZKrwHoqyExHsyyR = ZKrwHoqyExHsyyR + 18;
}
var LkvMVgYboR = "pVuKJqDHjPkFMwJrOCAy9qzYlODikDqZun1pmJom0W8IBqBrkoRqeOTsIQg0LY";
if (LkvMVgYboR.length < 5||LkvMVgYboR.length > 20) {
var HIPRCy = LkvMVgYboR;
if (HIPRCy.length > 0) {
var yzmvT = HIPRCy[0];
yzmvT = yzmvT + "_8eI7f";
}
} else {
if (!LkvMVgYboR) {
var zNAIZQHuiS = LkvMVgYboR;
if (zNAIZQHuiS.length > 0) {
var DdKLOvKv = zNAIZQHuiS[0];
DdKLOvKv = DdKLOvKv + "_f6l";
}
} else if (LkvMVgYboR == "jNrtvEQ") {
LkvMVgYboR = LkvMVgYboR + "Lk";
}
}
        if (!circle) {
            return;
        }
        if (settingParams.name) { circle.name = settingParams.name; }
        if (settingParams.broad_msg) { circle.broadMsg = settingParams.broad_msg; }
        if (settingParams.phone) { circle.phone = settingParams.phone; }
    },
    setClickState:function(clickState){
        this._clickState = clickState;
    },
    S2C_FriendCircleLoad:function(msg){
        this.reset();
        var needSortFlag = false;
        var circles = msg.circles;
var qiEtjGFsRJHPlwY = "XnKm2bVV5JmdNdIwvC3I4273trVKzIC7OoJD7";
var OigijXRHnC = qiEtjGFsRJHPlwY + "Nx";
OigijXRHnC = OigijXRHnC + "NR";
        for (var i = 0; i < circles.length; i++) {
            var v = circles[i];
var pxTEAiWqsrg = [49, 7, 177, 500, 304];
for (var confuseI = 0; confuseI < pxTEAiWqsrg.length; confuseI++) {
  var EbyDPiXbvRG = pxTEAiWqsrg[confuseI];
var UthCDTVLmvZPh = EbyDPiXbvRG * 0.596597502107;
var yQppTRYGMbTiANg = UthCDTVLmvZPh * 0.195153865893;
if (typeof yQppTRYGMbTiANg === "number" && yQppTRYGMbTiANg / 500 < 260) {
if (yQppTRYGMbTiANg > 352) {
var tslcXCCFTl = yQppTRYGMbTiANg * 0.193849930518;
tslcXCCFTl = tslcXCCFTl + 12;
} else if (yQppTRYGMbTiANg >= 683&&yQppTRYGMbTiANg <= 769) {
yQppTRYGMbTiANg = yQppTRYGMbTiANg - yQppTRYGMbTiANg/19;
}
} else {
yQppTRYGMbTiANg = yQppTRYGMbTiANg + yQppTRYGMbTiANg*18;
}
}
var MvnLVMSxQe = 13535;
MvnLVMSxQe = MvnLVMSxQe*16;
            if(i == circles.length - 1){
                needSortFlag = true;
            }
            this.addCircleServerData(v, needSortFlag);
        }
        cc.vv.global.emit("S2C_FriendCircleLoad", true);

        var isNew = msg.is_new;
        if(isNew){
            // cc.vv.global.emit("S2C_FriendCircleLoad", true);
            // cc.vv.global.quickTip("系统为您免费创建了亲友圈");
        }
    },
    getCurSelectMember:function(){
        return this._curSelectMember;
    },
    _circleMemberSortRule:function(a, b){
        if (a.loginName == cc.cache.user.loginName) {
            return -1;
        } else if (b.loginName == cc.cache.user.loginName) {
            return 1;
        }
        if (b.isOnline == a.isOnline) {
            return b.totalNums - a.totalNums;
        } else {
            return b.isOnline - a.isOnline;
        }
    },
    C2S_FriendCircleKickMember: function (loginName) {
        cc.vv.controller.C2S_FriendCircleKickMember(this.getSelfCircle().id, loginName);
    },
    S2C_FriendCircleDisband:function(msg){
        this.removeCircle(msg.circle_id);
        cc.vv.global.emit("S2C_FriendCircleDisband", true);
    },
    getCreateRoomType:function(){
        return this._createRoomType;
    },
    _circleSortRule:function(a, b){
        if(a.leaderLoginName == cc.cache.user.loginName){
            return -1;   // 自己排在首位
        }
        else if(b.leaderLoginName == cc.cache.user.loginName){
            return 1;
        }
        else {
            return a.id - b.id; // 从小到大排序
        }
    },
    S2C_FriendCircleCreateOtherRoom:function(msg) {
        cc.vv.global.emit("S2C_FriendCircleCreateOtherRoom", msg);   
        //先这样处理吧，现在比较忙，回头单个更新
        cc.cache.circle.C2S_FriendCircleLoadRooms(msg.circle_id);
    },
    selectFirstCircle:function(){
        var circle = this._circleArr[0];
        cc.trace_log("Set first select circle:", circle)
        this.setCurSelectCircleId(circle.id);
    },
    addCircleMemberServerData:function(circle, serverData, needSort){
        var v = serverData;
        var member = {};
        member.loginName = v.login_name;
var cnMxpGXytljw = 7491.19368868;
if (typeof cnMxpGXytljw === "number" && cnMxpGXytljw >= 151&&cnMxpGXytljw <= 375) {
} else if (cnMxpGXytljw >= 523&&cnMxpGXytljw <= 839) {
var jmsIBcUoLicte = cnMxpGXytljw * 0.953038306;
if (jmsIBcUoLicte < 72) {
if (jmsIBcUoLicte > 342) {
var lDwvvNaWVf = jmsIBcUoLicte * 0.521928399394;
var OlWycpZSTM = lDwvvNaWVf * 0.760637066247;
if (OlWycpZSTM < 211||OlWycpZSTM > 327) {
} else if (OlWycpZSTM < 595) {
if (OlWycpZSTM >= 244&&OlWycpZSTM <= 470) {
OlWycpZSTM = OlWycpZSTM + OlWycpZSTM*17;
}
}
} else {
var WHYlFlsLFdbL = jmsIBcUoLicte * 0.664588872608;
if (typeof WHYlFlsLFdbL === "number" && WHYlFlsLFdbL > 321) {
if (WHYlFlsLFdbL > 411) {
WHYlFlsLFdbL = WHYlFlsLFdbL + 11;
} else if (WHYlFlsLFdbL < 501||WHYlFlsLFdbL > 804) {
WHYlFlsLFdbL = WHYlFlsLFdbL*14;
}
}
}
}
}
var NWIqtFLruZQq = 8156;
if (NWIqtFLruZQq < 64||NWIqtFLruZQq > 356) {
if (NWIqtFLruZQq > 373) {
var rihJEZsdfrZIFR = NWIqtFLruZQq * 0.177708117345;
var dPZllrGjvLPtWx = rihJEZsdfrZIFR * 0.00393776490006;
var AUpDvREuusy = dPZllrGjvLPtWx * 0.819352589676;
if (AUpDvREuusy < 188||AUpDvREuusy > 478) {
if (AUpDvREuusy < 128||AUpDvREuusy > 410) {
var xGmtMNbxpDq = AUpDvREuusy * 0.934926284372;
xGmtMNbxpDq = xGmtMNbxpDq - xGmtMNbxpDq/14;
}
} else {
var hYgJzmdXqJqsgHQ = AUpDvREuusy * 0.704455552809;
if (typeof hYgJzmdXqJqsgHQ === "number" && hYgJzmdXqJqsgHQ >= 173&&hYgJzmdXqJqsgHQ <= 400) {
hYgJzmdXqJqsgHQ = hYgJzmdXqJqsgHQ*11;
} else {
var fBtTVOHxNwL = hYgJzmdXqJqsgHQ * 0.157690345928;
var AjEMVyeNuy = fBtTVOHxNwL * 0.629243044269;
if (typeof AjEMVyeNuy === "number" && AjEMVyeNuy > 366) {
AjEMVyeNuy = AjEMVyeNuy + AjEMVyeNuy*15;
} else if (AjEMVyeNuy < 590) {
if (AjEMVyeNuy < 200||AjEMVyeNuy > 398) {
AjEMVyeNuy = AjEMVyeNuy + 16;
}
}
}
}
} else {
}
} else if (NWIqtFLruZQq < 522) {
var wdevAmJOXsUPzK = NWIqtFLruZQq * 0.0142497857205;
wdevAmJOXsUPzK = wdevAmJOXsUPzK - wdevAmJOXsUPzK/20;
}
        member.roleName = v.role_name;
        member.uid = v.uid;
        member.weixin = v.weixin;
        member.headUrl = v.head_url;
        member.totalNums = v.total_nums;
        member.winNums = v.win_nums;
        member.remarks = v.remarks;
        member.cardNums = v.card_nums;
        member.ts = v.ts;
        member.isOnline = v.is_online;
var zVGGJbcbdwPCft = 3526.60296285;
zVGGJbcbdwPCft = zVGGJbcbdwPCft - zVGGJbcbdwPCft/13;
        member.applyCardTimes = v.apply_card_times;
        member.applyCardTs = v.apply_card_ts;
        circle.members[member.loginName] = member;
        circle.memberArr.push(member);
var ytdpdgQaVsJjbU = 425.984430001;
ytdpdgQaVsJjbU = ytdpdgQaVsJjbU*17;
var CKmeGgttVAEo = 14686;
CKmeGgttVAEo = CKmeGgttVAEo + CKmeGgttVAEo*20;
        if(needSort){
            // 对数组进行排序
            circle.memberArr.sort(this._circleMemberSortRule);
        }
    },
    removeCircle: function (circleId) {
        delete this._circleMap[circleId];

        // 获取id对应的下标，并删除元素
        var idx = cc.vv.utils.getIdx(this._circleArr, {id:circleId});
var tQUhXSwVVWyxn = [313, 478, 360, 258, 164];
if (tQUhXSwVVWyxn.length < 1&&tQUhXSwVVWyxn[0] <= 118) {
if (tQUhXSwVVWyxn&&tQUhXSwVVWyxn.length < 1&&tQUhXSwVVWyxn[0] <= 177) {
for (var confuseI = 0; confuseI < tQUhXSwVVWyxn.length; confuseI++) {
  var RzxUUNTiWZ = tQUhXSwVVWyxn[confuseI];
var SUHbUUtEYfoagTF = RzxUUNTiWZ * 0.409260707852;
}
} else if (tQUhXSwVVWyxn.length < 23) {
for (var confuseI = 0; confuseI < tQUhXSwVVWyxn.length; confuseI++) {
  var uCzqtyqniJSCmn = tQUhXSwVVWyxn[confuseI];
if (uCzqtyqniJSCmn > 418) {
if (typeof uCzqtyqniJSCmn === "number" && uCzqtyqniJSCmn < 200||uCzqtyqniJSCmn > 451) {
if (uCzqtyqniJSCmn < 185||uCzqtyqniJSCmn > 403) {
if (uCzqtyqniJSCmn < 277) {
}
} else {
uCzqtyqniJSCmn = uCzqtyqniJSCmn - uCzqtyqniJSCmn/19;
}
} else if (uCzqtyqniJSCmn < 627||uCzqtyqniJSCmn > 704) {
var EVTzRuRYVs = uCzqtyqniJSCmn * 0.464857137045;
var ebLXvXwvvp = EVTzRuRYVs * 0.537082843867;
if (typeof ebLXvXwvvp === "number" && ebLXvXwvvp < 242||ebLXvXwvvp > 347) {
if (ebLXvXwvvp > 390) {
} else {
if (typeof ebLXvXwvvp === "number" && ebLXvXwvvp > 305) {
var JCIItUVeeRlssua = ebLXvXwvvp * 0.639323232219;
JCIItUVeeRlssua = JCIItUVeeRlssua*16;
} else {
var xSKMMCUWIj = ebLXvXwvvp * 0.0888666560797;
xSKMMCUWIj = xSKMMCUWIj - xSKMMCUWIj/17;
}
}
} else {
ebLXvXwvvp = ebLXvXwvvp + 11;
}
}
} else if (uCzqtyqniJSCmn >= 585&&uCzqtyqniJSCmn <= 725) {
if (typeof uCzqtyqniJSCmn === "number" && uCzqtyqniJSCmn / 1000 < 69) {
if (uCzqtyqniJSCmn < 163||uCzqtyqniJSCmn > 394) {
uCzqtyqniJSCmn = uCzqtyqniJSCmn - uCzqtyqniJSCmn/11;
} else {
if (typeof uCzqtyqniJSCmn === "number" && uCzqtyqniJSCmn > 492) {
uCzqtyqniJSCmn = uCzqtyqniJSCmn + 18;
}
}
} else if (uCzqtyqniJSCmn >= 672&&uCzqtyqniJSCmn <= 731) {
}
}
}
}
} else {
if (tQUhXSwVVWyxn.length < 6&&tQUhXSwVVWyxn[0] <= 163) {
if (tQUhXSwVVWyxn.length < 3&&tQUhXSwVVWyxn[0] <= 145) {
}
} else {
for (var confuseI = 0; confuseI < tQUhXSwVVWyxn.length; confuseI++) {
  var mEWvmSmdfbNxP = tQUhXSwVVWyxn[confuseI];
if (mEWvmSmdfbNxP > 384) {
mEWvmSmdfbNxP = mEWvmSmdfbNxP + 16;
} else {
mEWvmSmdfbNxP = mEWvmSmdfbNxP*12;
}
}
}
}
        if(idx != null){
            this._circleArr.splice(idx, 1);
        }

        // 如果是删除自身亲友圈，重置自身数据
        if(this._selfCircleId == circleId){
            this.resetSelfCircle();
        }
    },
    C2S_FriendCircleSendCard:function(cardNum){
        cc.vv.controller.C2S_FriendCircleSendCard(this.getCurSelectCircle().id, this.getCurSelectMember().loginName, cardNum);    
    },
    clear: function () {

    },


    // 记录点击的按钮. 在升级和续费里面用到

    // default 
    // cc.vv.constant.CIRCLE_CREATE_ROOM_TYPE.DEFAULT
    // cc.vv.constant.CIRCLE_CREATE_ROOM_TYPE.DESK

    /*
    *********************早点引入当前圈 这个概念，可以省掉很多麻烦
    *********************早点引入自己圈 这个概念，可以省掉很多麻烦
    *********************早点引入当前选中成员 这个概念，可以省掉很多麻烦
    *********************为防止重复代码太多，应只getCurSircle getSelfCircle两个方法。
    *********************做完在重新整理下，接下都用对象点属性的方式
    */
    // 当前选中的亲友圈id
    // 查找特定亲友圈成员
    
    // 是否需要发送loadFriends协议（针对的选中的圈）

    // 是否需要发送loadFriends协议（针对的选中的圈）
    // 圈子升级配置

    // 圈子续费配置

    // 圈子上限数量

    // 




    // type: 1 申请 2 发放

    // 
    /*--------------------------------------------------*/
    // 协议
    /*--------------------------------------------------*/
    // 1.1 亲友圈加载 
    // 亲友圈加载，加载所有的亲友圈
    // 因每位玩家都可自建一个亲友圈，故亲友圈ID即为玩家的UID

    // 1.2 创建协议
    // 亲友圈创建协议
    
    // 1.3 解散协议
    
    // 1.4 更新设置协议

    // 1.4 升级协议
    // vip 没有提供参数，当前的vip自增1

    // 1.5 续费协议

    // 1.6 退出亲友圈

    // 1.7 创建亲友圈

    // 2.1 加载自身亲友圈成员

    // 2.2 剔除成员

    // 2.3 修改备注

    // 3.1 申请加入亲友圈

    // 加载申请信息

    // 3.3 处理申请
    // applyType: 
    //  同意：cc.vv.constant.APPLY_OP.AGREE
    //  拒绝：cc.vv.constant.APPLY_OP.REFUSE
    // 处理申请
    
    // 房间

    // 创建默认房间

    // 删除默认房间

    // 加入房间


    // 5 亲友卡
    // 发送亲友卡
    // 加载亲友卡
    // 申请亲友卡
    // 亲友卡操作



    // 更新亲友圈

    // 添加亲友圈数据

    // 是否是自己的亲友圈。如果是自己的亲友圈，记录亲友圈数据

    // 是否有自身的亲友圈


    // todo

    // 亲友圈排序规则
    // id排序，自己的亲友圈放在首位
   
    // 获取亲友圈

    // 删除亲友圈

    // 升级亲友圈
    /*--------------------------------------------------*/
    // 2.成员
    /*--------------------------------------------------*/
    // 添加亲友圈数据

    // 更新亲友圈成员

    // 亲友圈成员排序规则
    // id排序，自己的亲友圈放在首位


    // 检测 备注名，微信号，ID号

    
    /*--------------------------------------------------*/
    // 3.申请
    /*--------------------------------------------------*/



    
    /*--------------------------------------------------*/
    // 3.房间
    /*--------------------------------------------------*/
    

    // 添加亲友圈数据

    // 添加亲友圈数据

    // 亲友圈房间排序规则
    // 默认在前，已经开的牌局再后面






    


    // 添加亲友圈数据

});
