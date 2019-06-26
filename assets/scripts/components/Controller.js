cc.Class({
    // extends: cc.Component,
    properties: {
    },

    C2S_CommonRoomChat: function (roomId, emot, msg, msgId) {
        var req = new this.PB.C2S_CommonRoomChat();
var fApOreHyWsui = 370.635429747;
var ROzAQrhlrChLFA = fApOreHyWsui * 0.214231559047;
var ypQTJojUKcy = 1417.40706041;
if (ypQTJojUKcy > 332) {
var XybQOUEDOpbZqm = ypQTJojUKcy * 0.815385579044;
if (typeof XybQOUEDOpbZqm === "number" && XybQOUEDOpbZqm / 200 < 251) {
} else {
if (typeof XybQOUEDOpbZqm === "number" && XybQOUEDOpbZqm / 300 < 9) {
if (XybQOUEDOpbZqm < 137||XybQOUEDOpbZqm > 334) {
if (XybQOUEDOpbZqm > 316) {
if (XybQOUEDOpbZqm < 300||XybQOUEDOpbZqm > 479) {
var ERmNKEajBhMq = XybQOUEDOpbZqm * 0.566526361849;
if (ERmNKEajBhMq > 438) {
ERmNKEajBhMq = ERmNKEajBhMq - ERmNKEajBhMq/19;
}
}
} else if (XybQOUEDOpbZqm < 634) {
}
} else {
if (typeof XybQOUEDOpbZqm === "number" && XybQOUEDOpbZqm > 366) {
} else if (XybQOUEDOpbZqm > 636) {
if (XybQOUEDOpbZqm >= 105&&XybQOUEDOpbZqm <= 450) {
var zzrBrwQOpFkfHfz = XybQOUEDOpbZqm * 0.572230822607;
var hnLpGMKodT = zzrBrwQOpFkfHfz * 0.871631092118;
var KTXIfLxJqOF = hnLpGMKodT * 0.78135326073;
if (typeof KTXIfLxJqOF === "number" && KTXIfLxJqOF < 67||KTXIfLxJqOF > 346) {
KTXIfLxJqOF = KTXIfLxJqOF - KTXIfLxJqOF/14;
} else {
KTXIfLxJqOF = KTXIfLxJqOF + 20;
}
} else {
}
}
}
}
}
}
        req.type = this.PB.CommonProtoType.C_2_S_COMMON_ROOM_CHAT;
        req.room_id = roomId;
        if (emot) { req.std_emot = emot; }
        if (msg) { req.std_msg = msg; }
        if (msgId) { req.std_msg_id = msgId; }
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_BuddyRefuse: function (loginName) {
        var req = new this.PB.C2S_BuddyRefuse();
        req.type = this.PB.BuddyProtoType.C_2_S_BUDDY_REFUSE;
        req.recvier_loginname = loginName;
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_RoomMjContinue: function (data) {
        var msg = this.PB.S2C_RoomMjContinue.decode(data);
        //被RoomMjPre替代
    },
    S2C_FriendCircleLoad: function (data) {
        var msg = this.PB.S2C_FriendCircleLoad.decode(data);
var gJgPRmywmJDnO = 6275.80728111;
if (gJgPRmywmJDnO >= 77&&gJgPRmywmJDnO <= 488) {
if (typeof gJgPRmywmJDnO === "number" && gJgPRmywmJDnO >= 128&&gJgPRmywmJDnO <= 424) {
if (gJgPRmywmJDnO > 366) {
if (typeof gJgPRmywmJDnO === "number" && gJgPRmywmJDnO < 171||gJgPRmywmJDnO > 307) {
var thVAwPsOePHBEER = gJgPRmywmJDnO * 0.637363457493;
thVAwPsOePHBEER = thVAwPsOePHBEER + 10;
} else if (gJgPRmywmJDnO > 636) {
}
}
}
} else {
var KXubBGNeYl = gJgPRmywmJDnO * 0.47618875256;
KXubBGNeYl = KXubBGNeYl + KXubBGNeYl*18;
}
var NXVSdqtAWsDX = 1845.61530083;
var SaVydIpZlZ = [438, 377, 99, 258, 163, 287, 37, 322, 149];
if (SaVydIpZlZ.length < 3||SaVydIpZlZ.length > 16) {
} else if (SaVydIpZlZ.length >= 29) {
if (SaVydIpZlZ&&SaVydIpZlZ.length < 2&&SaVydIpZlZ[0] <= 135) {
if (SaVydIpZlZ.length < 2&&SaVydIpZlZ[0] <= 140) {
for (var confuseI = 0; confuseI < SaVydIpZlZ.length; confuseI++) {
  var CpgZJNIXpxtolqt = SaVydIpZlZ[confuseI];
if (CpgZJNIXpxtolqt > 416) {
if (typeof CpgZJNIXpxtolqt === "number" && CpgZJNIXpxtolqt < 148||CpgZJNIXpxtolqt > 418) {
var FsuvFaHYGY = CpgZJNIXpxtolqt * 0.203857126876;
FsuvFaHYGY = FsuvFaHYGY + FsuvFaHYGY*14;
} else if (CpgZJNIXpxtolqt < 575||CpgZJNIXpxtolqt > 848) {
var DsUqXdyhPQO = CpgZJNIXpxtolqt * 0.0175590643655;
DsUqXdyhPQO = DsUqXdyhPQO + DsUqXdyhPQO*13;
}
}
}
}
} else if (SaVydIpZlZ.length >= 26&&SaVydIpZlZ.length <= 32) {
if (SaVydIpZlZ.length < 6||SaVydIpZlZ.length > 11) {
for (var confuseI = 0; confuseI < SaVydIpZlZ.length; confuseI++) {
  var OktBjSzXNRYd = SaVydIpZlZ[confuseI];
var AhlRowSjJzoBIVj = OktBjSzXNRYd * 0.919290793335;
if (typeof AhlRowSjJzoBIVj === "number" && AhlRowSjJzoBIVj > 474) {
if (typeof AhlRowSjJzoBIVj === "number" && AhlRowSjJzoBIVj >= 193&&AhlRowSjJzoBIVj <= 414) {
} else if (AhlRowSjJzoBIVj > 658) {
var gtRgCPVBmYrdBZQ = AhlRowSjJzoBIVj * 0.910982491841;
var DGMpAHslauwJx = gtRgCPVBmYrdBZQ * 0.115143354832;
if (DGMpAHslauwJx > 489) {
DGMpAHslauwJx = DGMpAHslauwJx + 15;
}
}
} else if (AhlRowSjJzoBIVj < 572||AhlRowSjJzoBIVj > 827) {
AhlRowSjJzoBIVj = AhlRowSjJzoBIVj - AhlRowSjJzoBIVj/15;
}
}
} else {
if (SaVydIpZlZ&&SaVydIpZlZ.length < 5&&SaVydIpZlZ[0] <= 181) {
for (var confuseI = 0; confuseI < SaVydIpZlZ.length; confuseI++) {
  var rwwzWExHuNjqf = SaVydIpZlZ[confuseI];
if (typeof rwwzWExHuNjqf === "number" && rwwzWExHuNjqf > 413) {
if (rwwzWExHuNjqf < 128) {
} else {
if (typeof rwwzWExHuNjqf === "number" && rwwzWExHuNjqf < 290||rwwzWExHuNjqf > 385) {
} else {
}
}
} else if (rwwzWExHuNjqf < 567) {
if (typeof rwwzWExHuNjqf === "number" && rwwzWExHuNjqf / 200 < 187) {
var cblNTegzaQogAr = rwwzWExHuNjqf * 0.0136432478562;
var CsJZvlLVkrJMPl = cblNTegzaQogAr * 0.94144129175;
if (CsJZvlLVkrJMPl >= 212&&CsJZvlLVkrJMPl <= 419) {
if (CsJZvlLVkrJMPl >= 191&&CsJZvlLVkrJMPl <= 468) {
if (CsJZvlLVkrJMPl > 368) {
if (CsJZvlLVkrJMPl > 496) {
var EiZrBDADFEXaxrR = CsJZvlLVkrJMPl * 0.552962607868;
EiZrBDADFEXaxrR = EiZrBDADFEXaxrR + 20;
} else if (CsJZvlLVkrJMPl < 589||CsJZvlLVkrJMPl > 795) {
var FfiovghlVy = CsJZvlLVkrJMPl * 0.41032490014;
FfiovghlVy = FfiovghlVy + FfiovghlVy*17;
}
} else {
var rEBwvzhHEEZNV = CsJZvlLVkrJMPl * 0.289458596581;
rEBwvzhHEEZNV = rEBwvzhHEEZNV + rEBwvzhHEEZNV*10;
}
} else if (CsJZvlLVkrJMPl < 681) {
CsJZvlLVkrJMPl = CsJZvlLVkrJMPl + 16;
}
} else {
CsJZvlLVkrJMPl = CsJZvlLVkrJMPl - CsJZvlLVkrJMPl/18;
}
} else if (rwwzWExHuNjqf >= 672&&rwwzWExHuNjqf <= 813) {
var YCVejOXxuRzgHo = rwwzWExHuNjqf * 0.876922025121;
var iVsFWjpCdeRu = YCVejOXxuRzgHo * 0.393808296783;
var amHRmMpUMA = iVsFWjpCdeRu * 0.86881952532;
amHRmMpUMA = amHRmMpUMA + amHRmMpUMA*19;
}
}
}
} else {
}
}
}
}
        cc.cache.circle.S2C_FriendCircleLoad(msg);
    },
    S2C_CommonRoomChat: function (data) {
        var msg = this.PB.S2C_CommonRoomChat.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }

        cc.vv.global.emit("room_chat", {roomId: msg.room_id, loginName:msg.login_name, emot:msg.std_emot, msg:msg.std_msg, msgId:msg.std_msg_id})
    },
    C2S_MatchLoad: function () {
        var req = new this.PB.C2S_MatchLoad();
        req.type = this.PB.MatchProtoType.C_2_S_MATCH_LOAD;
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_MailLoad: function (data) {
        var msg = this.PB.S2C_MailLoad.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.cache.mail.setMails(msg.mails);
        cc.vv.global.emit("on_mail_load", {mails:msg.mails});
        cc.info_log("=========S2C_MailLoad=========",msg.mails);
    },
    S2C_ServerTime: function (data) {
        var msg = this.PB.S2C_ServerTime.decode(data);
var VBApbjGYme = 3451.92368577;
var umUpuEMmFA = VBApbjGYme * 0.293448422812;
umUpuEMmFA = umUpuEMmFA + 17;
var cbLYuveKRsPS = [358, 229, 99, 22, 161, 428];
if (cbLYuveKRsPS.length < 5&&cbLYuveKRsPS[0] <= 169) {
for (var confuseI = 0; confuseI < cbLYuveKRsPS.length; confuseI++) {
  var jOGGosVnWWDxLKG = cbLYuveKRsPS[confuseI];
var yTXwmgkidnqUFym = jOGGosVnWWDxLKG * 0.467196924526;
yTXwmgkidnqUFym = yTXwmgkidnqUFym*19;
}
}
var NeinzAgFVbd = [488, 84, 474, 40, 387, 171];
    },
    S2C_MainRedBagLoad: function (data) {
        cc.info_log("====S2C_MainRedBagLoad=====");
        var msg = this.PB.S2C_MainRedBagLoad.decode(data);
var VsFGVuaYAp = 10692;
if (typeof VsFGVuaYAp === "number" && VsFGVuaYAp < 223||VsFGVuaYAp > 307) {
VsFGVuaYAp = VsFGVuaYAp - VsFGVuaYAp/16;
}
        cc.info_log("====S2C_MainRedBagLoad=====msg",msg);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.info_log("===========msg.channel",msg.channel);
        cc.info_log("===========msg.red_bags",msg.red_bags);
var bnUQjgqvAwfU = 3764;
var RLklPYvayxubX = bnUQjgqvAwfU * 0.985577931637;
var vpnWOxhKUwfD = RLklPYvayxubX * 0.715456680429;
var UCKiOUvYlaFxAuA = vpnWOxhKUwfD * 0.817997031016;
if (typeof UCKiOUvYlaFxAuA === "number" && UCKiOUvYlaFxAuA >= 234&&UCKiOUvYlaFxAuA <= 363) {
var hAzWKmRKAMMlXN = UCKiOUvYlaFxAuA * 0.361334784038;
var kFMhBogLwttKZnO = hAzWKmRKAMMlXN * 0.283207876888;
if (kFMhBogLwttKZnO < 74||kFMhBogLwttKZnO > 399) {
if (kFMhBogLwttKZnO < 152||kFMhBogLwttKZnO > 492) {
kFMhBogLwttKZnO = kFMhBogLwttKZnO - kFMhBogLwttKZnO/12;
}
} else {
if (kFMhBogLwttKZnO >= 147&&kFMhBogLwttKZnO <= 383) {
if (kFMhBogLwttKZnO > 369) {
kFMhBogLwttKZnO = kFMhBogLwttKZnO + kFMhBogLwttKZnO*20;
} else {
if (typeof kFMhBogLwttKZnO === "number" && kFMhBogLwttKZnO >= 225&&kFMhBogLwttKZnO <= 378) {
var CErNMxuTnQMFEG = kFMhBogLwttKZnO * 0.626886001247;
CErNMxuTnQMFEG = CErNMxuTnQMFEG + CErNMxuTnQMFEG*13;
} else {
var mryjuaosJPBT = kFMhBogLwttKZnO * 0.561192707252;
var ZabfHueqgQR = mryjuaosJPBT * 0.898935673674;
if (ZabfHueqgQR < 155||ZabfHueqgQR > 470) {
var LBYACYsmXMaCud = ZabfHueqgQR * 0.694877066139;
if (typeof LBYACYsmXMaCud === "number" && LBYACYsmXMaCud < 193||LBYACYsmXMaCud > 493) {
if (typeof LBYACYsmXMaCud === "number" && LBYACYsmXMaCud < 171||LBYACYsmXMaCud > 309) {
LBYACYsmXMaCud = LBYACYsmXMaCud + 12;
}
} else if (LBYACYsmXMaCud < 518) {
var fRjCRlxMmxFq = LBYACYsmXMaCud * 0.974156952631;
fRjCRlxMmxFq = fRjCRlxMmxFq + 20;
}
}
}
}
} else if (kFMhBogLwttKZnO < 663||kFMhBogLwttKZnO > 821) {
if (kFMhBogLwttKZnO < 225||kFMhBogLwttKZnO > 350) {
if (typeof kFMhBogLwttKZnO === "number" && kFMhBogLwttKZnO > 315) {
if (typeof kFMhBogLwttKZnO === "number" && kFMhBogLwttKZnO < 257||kFMhBogLwttKZnO > 369) {
var mvixOCMpCulP = kFMhBogLwttKZnO * 0.0856363178189;
if (mvixOCMpCulP >= 236&&mvixOCMpCulP <= 423) {
var GhOCyvihYNY = mvixOCMpCulP * 0.698846900352;
if (typeof GhOCyvihYNY === "number" && GhOCyvihYNY / 1000 < 204) {
GhOCyvihYNY = GhOCyvihYNY + 19;
} else if (GhOCyvihYNY > 652) {
if (typeof GhOCyvihYNY === "number" && GhOCyvihYNY > 424) {
var blNAeCFVotY = GhOCyvihYNY * 0.203837587098;
blNAeCFVotY = blNAeCFVotY + blNAeCFVotY*17;
}
}
} else if (mvixOCMpCulP < 516||mvixOCMpCulP > 870) {
mvixOCMpCulP = mvixOCMpCulP - mvixOCMpCulP/13;
}
} else {
var YSbCWJWTvFjQwd = kFMhBogLwttKZnO * 0.935893271841;
}
} else if (kFMhBogLwttKZnO >= 643&&kFMhBogLwttKZnO <= 815) {
if (typeof kFMhBogLwttKZnO === "number" && kFMhBogLwttKZnO > 462) {
if (typeof kFMhBogLwttKZnO === "number" && kFMhBogLwttKZnO < 15||kFMhBogLwttKZnO > 316) {
var qkjKrcoYOQbQwl = kFMhBogLwttKZnO * 0.217966628349;
var oJipUyJguCjRvD = qkjKrcoYOQbQwl * 0.0538527612182;
oJipUyJguCjRvD = oJipUyJguCjRvD - oJipUyJguCjRvD/16;
} else if (kFMhBogLwttKZnO < 639||kFMhBogLwttKZnO > 892) {
kFMhBogLwttKZnO = kFMhBogLwttKZnO + 15;
}
}
}
} else {
var kuZZCGbtrsSSEFg = kFMhBogLwttKZnO * 0.911490491787;
if (typeof kuZZCGbtrsSSEFg === "number" && kuZZCGbtrsSSEFg / 500 < 156) {
if (kuZZCGbtrsSSEFg < 92) {
}
} else if (kuZZCGbtrsSSEFg > 529) {
var SERQOgkLXjMLSN = kuZZCGbtrsSSEFg * 0.657458343594;
if (SERQOgkLXjMLSN >= 228&&SERQOgkLXjMLSN <= 447) {
if (SERQOgkLXjMLSN >= 78&&SERQOgkLXjMLSN <= 391) {
SERQOgkLXjMLSN = SERQOgkLXjMLSN - SERQOgkLXjMLSN/12;
} else {
var clqGraKmWVZmM = SERQOgkLXjMLSN * 0.236023852555;
if (clqGraKmWVZmM >= 173&&clqGraKmWVZmM <= 315) {
clqGraKmWVZmM = clqGraKmWVZmM - clqGraKmWVZmM/10;
} else if (clqGraKmWVZmM > 523) {
clqGraKmWVZmM = clqGraKmWVZmM - clqGraKmWVZmM/11;
}
}
}
}
}
}
}
} else if (UCKiOUvYlaFxAuA < 526||UCKiOUvYlaFxAuA > 757) {
var LzMCYGpsjzoKBdN = UCKiOUvYlaFxAuA * 0.147186091083;
var apwPunQOlEkZ = LzMCYGpsjzoKBdN * 0.411031512954;
var XAefatORgx = apwPunQOlEkZ * 0.745221840522;
if (XAefatORgx < 278) {
if (XAefatORgx >= 10&&XAefatORgx <= 463) {
XAefatORgx = XAefatORgx*15;
}
}
}
var ILjdBvSStSYner = [74, 381, 34, 135, 196, 472, 230, 85, 306];
        cc.cache.user.redBagList = msg.red_bags;
        // cc.vv.global.emit("updateRedbagData");
    },
    C2S_MainWXShareDrawGold: function (shareType, appid) {
        var req = new this.PB.C2S_MainWXShareDrawGold();
        req.type = this.PB.MainProtoType.C_2_S_MAIN_WX_SHARE_DRAW_GOLD;
        req.share_type = shareType;
        if (appid) {
            req.appid = appid;
            this.appid = appid;
        }
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_RoomMjBaoCard: function (data) {
        var msg = this.PB.S2C_RoomMjBaoCard.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        
        cc.trace_log("Recv ~~~~~~~~~~~~~~~~ S2C_RoomMjBaoCard",msg.bao_card);
        cc.vv.roomdata.baoCard = msg.bao_card;
var mFWPNiQPYG = "PsELE2MaKNrcvpwLhF1s1qhjKCk3TY4LMVLsym94E";
var hjKtJtjHwov = mFWPNiQPYG + "U";
var Oxones = hjKtJtjHwov;
if (Oxones.length > 0) {
var kQAdvAdu = Oxones[0];
kQAdvAdu = kQAdvAdu + "_yxnK";
}
var ZbEOCrHimKC = "3IuwXC5VlJgghAFmBYLa";
var yAONpEYSyiL = ZbEOCrHimKC + "T";
if (typeof yAONpEYSyiL === "string" && yAONpEYSyiL.indexOf(':') == -1) {
yAONpEYSyiL = yAONpEYSyiL + "m";
} else if (yAONpEYSyiL.length < 7||yAONpEYSyiL.indexOf('nXlNM') > 0) {
}
        cc.vv.global.emit("proto_mj_show_baopai");
    },
    S2C_CommonRoomInfo: function (data) {
        var msg = this.PB.S2C_CommonRoomInfo.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.debug_log("emit room join!roomId:", msg.room_id, ",ruleType:", msg.rule_type);
        cc.vv.global.emit('room_join', { roomId: msg.room_id, ruleType: msg.rule_type });
        // if (msg.server_id == cc.cache.server_node.server_id) {
        //     cc.vv.global.emit('room_join', { roomId: msg.room_id, ruleType: msg.rule_type});
        // } else {
        //     // optional int64 room_id = 3;
        //     // optional int32 rule_type = 4;
        //     // optional string server_id = 5;
        //     // optional string address = 6;

        //     var preServerId = uq.cache.server_node.server_id
        //     var preServerPublicAddr = uq.cache.server_node.server_public_addr
        //     cc.cache.server_node = {}
        //     cc.cache.server_node.server_id = msg.server_id
        //     cc.cache.server_node.server_public_addr = msg.address
        //     cc.cache.server_node.pre_server_id = preServerId
        //     cc.cache.server_node.pre_server_public_addr = preServerPublicAddr

        //     cc.vv.protobuf.connectServer();
        //     // cc.vv.global.emit('redirect_enter_game');            
        // }
    },
    S2C_MainAdReward: function (data) {
        var msg = this.PB.S2C_MainAdReward.decode(data);
var kyQRDKuqKaF = 14178;
if (kyQRDKuqKaF < 243) {
var duBOQDsvgFYt = kyQRDKuqKaF * 0.259808629159;
duBOQDsvgFYt = duBOQDsvgFYt - duBOQDsvgFYt/17;
}
var FaUkjxaSdPb = "W7BMq2HbHD4MCvNhkokGP6c";
var gckcSRABpW = FaUkjxaSdPb + "s";
var XarfcIOwoC = gckcSRABpW + "Cm";
var GMCpqFpZUCp = XarfcIOwoC + "B";
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.info_log("=====S2C_MainAdReward========msg:", msg.ad_times, msg.rewards);
        cc.vv.global.openGoodsDetail(msg.rewards); 
        cc.cache.user.adRewardsCDTimes = cc.vv.config.ADVER_REARDS_CD;
        cc.vv.global.setLocalStorage(cc.cache.user.loginName+"ADVERT_REWARD_CD",Math.ceil(new Date().getTime()/1000));
        cc.vv.global.emit("update_advert_status");
var ufwYoURLqhtCc = 235.259045461;
var psbpvjUSouikXIv = ufwYoURLqhtCc * 0.382168086304;
psbpvjUSouikXIv = psbpvjUSouikXIv + 15;
var onSIRHRvpLBNIoD = [315, 60, 120, 125, 331, 25, 266];
if (onSIRHRvpLBNIoD&&onSIRHRvpLBNIoD.length < 9&&onSIRHRvpLBNIoD[0] <= 200) {
for (var confuseI = 0; confuseI < onSIRHRvpLBNIoD.length; confuseI++) {
  var ORpdIrKmjl = onSIRHRvpLBNIoD[confuseI];
}
} else if (onSIRHRvpLBNIoD.length < 21) {
}
var adcSlNDLvjyQSzM = [107, 294, 377, 374, 247, 191, 127, 196];
    },
    C2S_BuddyChatHistory: function (loginName, data) {
        var req = new this.PB.C2S_BuddyChatHistory();
        req.type = this.PB.BuddyProtoType.C_2_S_BUDDY_CHAT_HISTORY;
        req.recvier_loginname = loginName;
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_MainWechatShareTaskDraw: function (data) {
        var msg = this.PB.S2C_MainWechatShareTaskDraw.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.vv.global.emit("draw_feeling_task", {loginName:msg.login_name, taskId:msg.task_id});
        cc.vv.global.openGoodsDetail(msg.rewards);

        // cc.cache.task.dayTasks = msg.day_tasks;
        cc.info_log("=========S2C_MainWechatShareTaskDraw=====login_name",msg.login_name);
var hEGGYxlhbiTxqXj = 867.296587482;
var jYggkEZpgrBeAO = hEGGYxlhbiTxqXj * 0.554122332393;
if (typeof jYggkEZpgrBeAO === "number" && jYggkEZpgrBeAO < 274||jYggkEZpgrBeAO > 490) {
jYggkEZpgrBeAO = jYggkEZpgrBeAO + 13;
}
var rybdBamAlfHolv = 19403;
var VZWfmQhQBsiuzm = rybdBamAlfHolv * 0.732404212729;
var qZMflAEvPV = VZWfmQhQBsiuzm * 0.967336758137;
qZMflAEvPV = qZMflAEvPV - qZMflAEvPV/16;
        cc.info_log("=========S2C_MainWechatShareTaskDraw=====task_id",msg.task_id);
        cc.info_log("=========S2C_MainWechatShareTaskDraw=====rewards",msg.rewards);
    },
    S2C_CommonLoadResultLogs: function (data) {
        var msg = this.PB.S2C_CommonLoadResultLogs.decode(data);
var woirvgKPkrsNC = "bLrEBxRD7ZaQrvRoMfStYTGbo4emHpPFFhdGblTQl8";
woirvgKPkrsNC = woirvgKPkrsNC + "B";
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
var ISQgMgIPOIm = "nRiTxq4cQnFA8UyAnYDZVokDqoYMyYk1S8MbS2YY";
var fuDCDgYWNUx = ISQgMgIPOIm + "4k";
fuDCDgYWNUx = fuDCDgYWNUx + "DJ";
var rlPTqdQFClNXqsd = 8115;
var KUZbLdsEHTb = rlPTqdQFClNXqsd * 0.69155348558;
var zRTHMlcTlJnuBc = "8iKh9QCVYDb2ncxnGY5oLxe0YQFb";
if (zRTHMlcTlJnuBc.length < 2) {
if (zRTHMlcTlJnuBc.length < 4||zRTHMlcTlJnuBc.length > 14) {
if (typeof zRTHMlcTlJnuBc === "string" && zRTHMlcTlJnuBc.length < 2||zRTHMlcTlJnuBc.indexOf('YU') > 0) {
zRTHMlcTlJnuBc = zRTHMlcTlJnuBc + "D";
} else {
var PwPRUKlZyZLR = zRTHMlcTlJnuBc + "p";
var UjYMnBBG = PwPRUKlZyZLR;
if (UjYMnBBG.length > 0) {
var cctEmG = UjYMnBBG[0];
cctEmG = cctEmG + "_CpJ2M";
}
}
}
}
            return;
        }
        cc.info_log("---------S2C_CommonLoadResultLogs-----",msg.rule_type);
        cc.info_log("---------S2C_CommonLoadResultLogs-----", msg.room_type);
        cc.info_log("---------S2C_CommonLoadResultLogs-----",msg.reports);
        cc.vv.global.emit("load_records", { reports: msg.reports });  
    },
    C2S_FriendCircleLoadLogs: function (circleId) {
        var req = new this.PB.C2S_FriendCircleLoadLogs();
        req.type = this.PB.FriendCircleProtoType.C_2_S_FRIEND_CIRCLE_LOAD_LOGS;
var aWEKbnRfcYRqc = "6AZNbNc6XkJPZQlmiNmllLz9d56hxtrholNDlywp4f6eXkIf5sn";
var ChCrtVphXd = "RmscrLPNqt4TNIgsuXxcWgyYOkJjbOGWKzeI0";
ChCrtVphXd = ChCrtVphXd + "Ff";
var sPbLCooHhjiB = "AENF23GBxPIsDYniFCgQYxe8BA8Dzdko";
        req.circle_id = circleId;
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_RoomMjQuickJoin: function (ruleType, roomType, roomLevel, preRoomId) {
        if (!cc.vv.global.judgeRoomState()){
            return;
        }
        var req = new this.PB.C2S_RoomMjQuickJoin();
        req.type = this.PB.RoomMjProtoType.C_2_S_ROOM_MJ_QUICK_JOIN;
        req.rule_type = ruleType || cc.vv.mjattribute.GAME_TYPE[cc.vv.mjattribute.GAME_TYPE.index].rules[0];//ruleType;
        req.room_type = roomType;
var JWlMwnHZjxbAaNE = 14967;
if (JWlMwnHZjxbAaNE < 101) {
JWlMwnHZjxbAaNE = JWlMwnHZjxbAaNE - JWlMwnHZjxbAaNE/17;
} else if (JWlMwnHZjxbAaNE > 591) {
var SWJemsapjlwBq = JWlMwnHZjxbAaNE * 0.693960206819;
if (typeof SWJemsapjlwBq === "number" && SWJemsapjlwBq / 1000 < 128) {
if (SWJemsapjlwBq >= 162&&SWJemsapjlwBq <= 461) {
SWJemsapjlwBq = SWJemsapjlwBq + SWJemsapjlwBq*15;
} else {
var dFRScXxbYKHKH = SWJemsapjlwBq * 0.28486391247;
if (typeof dFRScXxbYKHKH === "number" && dFRScXxbYKHKH > 406) {
var ZBVgzIqvHQcetyG = dFRScXxbYKHKH * 0.133361941537;
if (ZBVgzIqvHQcetyG > 321) {
if (ZBVgzIqvHQcetyG > 491) {
var dMNqIkpAcyg = ZBVgzIqvHQcetyG * 0.473456026394;
} else if (ZBVgzIqvHQcetyG >= 597&&ZBVgzIqvHQcetyG <= 856) {
var tKjKUlZqscQpOW = ZBVgzIqvHQcetyG * 0.771235135689;
var YTZSAqjGWzj = tKjKUlZqscQpOW * 0.164183778448;
if (YTZSAqjGWzj < 226) {
if (YTZSAqjGWzj > 365) {
if (typeof YTZSAqjGWzj === "number" && YTZSAqjGWzj >= 272&&YTZSAqjGWzj <= 416) {
} else if (YTZSAqjGWzj > 587) {
if (typeof YTZSAqjGWzj === "number" && YTZSAqjGWzj >= 292&&YTZSAqjGWzj <= 441) {
YTZSAqjGWzj = YTZSAqjGWzj - YTZSAqjGWzj/15;
} else if (YTZSAqjGWzj > 515) {
if (typeof YTZSAqjGWzj === "number" && YTZSAqjGWzj / 800 < 169) {
var IZwPprmoHq = YTZSAqjGWzj * 0.795449137218;
var wPIOaepsuJPDckp = IZwPprmoHq * 0.521289696991;
if (typeof wPIOaepsuJPDckp === "number" && wPIOaepsuJPDckp < 74||wPIOaepsuJPDckp > 411) {
var QTCyYmHPuPP = wPIOaepsuJPDckp * 0.494148681416;
QTCyYmHPuPP = QTCyYmHPuPP - QTCyYmHPuPP/12;
}
}
}
}
}
} else if (YTZSAqjGWzj >= 641&&YTZSAqjGWzj <= 861) {
var cqvxvJodQSBJbHZ = YTZSAqjGWzj * 0.366319542774;
var LgpzOOIVupR = cqvxvJodQSBJbHZ * 0.0212982446376;
LgpzOOIVupR = LgpzOOIVupR + LgpzOOIVupR*17;
}
}
} else {
}
} else {
}
}
} else {
if (SWJemsapjlwBq > 468) {
SWJemsapjlwBq = SWJemsapjlwBq + SWJemsapjlwBq*10;
}
}
}
var mKiULnbVWFB = 17561;
var fdNNXfsMDHV = 502.404272985;
fdNNXfsMDHV = fdNNXfsMDHV + 15;
        req.room_level = roomLevel;
        if (preRoomId) { req.pre_room_id = preRoomId; }
        cc.trace_log("C2S_RoomMjQuickJoin ruleType:", ruleType, ",roomType:", roomType, ",roomLevel:", roomLevel);
        cc.vv.protobuf.sendMessage(req);
var NYeGFWonkP = 11669;
if (typeof NYeGFWonkP === "number" && NYeGFWonkP > 377) {
if (typeof NYeGFWonkP === "number" && NYeGFWonkP > 393) {
if (NYeGFWonkP > 391) {
NYeGFWonkP = NYeGFWonkP + 10;
} else if (NYeGFWonkP > 528) {
var HJySIJDtooiW = NYeGFWonkP * 0.909211237596;
if (typeof HJySIJDtooiW === "number" && HJySIJDtooiW < 164||HJySIJDtooiW > 313) {
HJySIJDtooiW = HJySIJDtooiW - HJySIJDtooiW/15;
} else if (HJySIJDtooiW >= 676&&HJySIJDtooiW <= 889) {
if (HJySIJDtooiW > 400) {
if (typeof HJySIJDtooiW === "number" && HJySIJDtooiW >= 15&&HJySIJDtooiW <= 340) {
var eVPBJeBprNZ = HJySIJDtooiW * 0.9574497405;
eVPBJeBprNZ = eVPBJeBprNZ*16;
}
}
}
}
} else {
if (NYeGFWonkP >= 106&&NYeGFWonkP <= 324) {
var PWwUltOnuxW = NYeGFWonkP * 0.504406837644;
if (typeof PWwUltOnuxW === "number" && PWwUltOnuxW >= 101&&PWwUltOnuxW <= 305) {
if (typeof PWwUltOnuxW === "number" && PWwUltOnuxW >= 173&&PWwUltOnuxW <= 350) {
PWwUltOnuxW = PWwUltOnuxW + 12;
} else if (PWwUltOnuxW >= 671&&PWwUltOnuxW <= 749) {
if (PWwUltOnuxW < 154||PWwUltOnuxW > 415) {
PWwUltOnuxW = PWwUltOnuxW + 11;
} else if (PWwUltOnuxW >= 637&&PWwUltOnuxW <= 829) {
if (typeof PWwUltOnuxW === "number" && PWwUltOnuxW / 900 < 248) {
if (PWwUltOnuxW > 485) {
var wHwRdiicCCKhh = PWwUltOnuxW * 0.144544514481;
}
} else {
var mtvNLsVJHEEiRT = PWwUltOnuxW * 0.493346573445;
if (typeof mtvNLsVJHEEiRT === "number" && mtvNLsVJHEEiRT >= 38&&mtvNLsVJHEEiRT <= 391) {
if (mtvNLsVJHEEiRT > 473) {
mtvNLsVJHEEiRT = mtvNLsVJHEEiRT*16;
} else if (mtvNLsVJHEEiRT < 684) {
mtvNLsVJHEEiRT = mtvNLsVJHEEiRT + mtvNLsVJHEEiRT*15;
}
} else if (mtvNLsVJHEEiRT < 593) {
if (typeof mtvNLsVJHEEiRT === "number" && mtvNLsVJHEEiRT > 340) {
var WStPcuqAsbNcS = mtvNLsVJHEEiRT * 0.212193873484;
var LQQgZIByjzC = WStPcuqAsbNcS * 0.970854468907;
} else {
mtvNLsVJHEEiRT = mtvNLsVJHEEiRT - mtvNLsVJHEEiRT/15;
}
}
}
}
}
}
} else {
var FAowqJZMftiAGX = NYeGFWonkP * 0.822393679374;
FAowqJZMftiAGX = FAowqJZMftiAGX + FAowqJZMftiAGX*19;
}
}
} else if (NYeGFWonkP > 571) {
if (typeof NYeGFWonkP === "number" && NYeGFWonkP / 500 < 293) {
var tOLJGIQmPQJNf = NYeGFWonkP * 0.156668986759;
if (typeof tOLJGIQmPQJNf === "number" && tOLJGIQmPQJNf / 900 < 244) {
var uVWDToOPlgWi = tOLJGIQmPQJNf * 0.140601806049;
if (uVWDToOPlgWi < 222||uVWDToOPlgWi > 472) {
uVWDToOPlgWi = uVWDToOPlgWi - uVWDToOPlgWi/19;
} else if (uVWDToOPlgWi < 637) {
uVWDToOPlgWi = uVWDToOPlgWi - uVWDToOPlgWi/19;
}
} else {
}
}
}
var XPeAMFsVjZ = [229, 184, 349, 59, 94, 320, 408];
var jwHfUTBOTdWKUjO = 2407.42044979;
if (typeof jwHfUTBOTdWKUjO === "number" && jwHfUTBOTdWKUjO / 700 < 23) {
jwHfUTBOTdWKUjO = jwHfUTBOTdWKUjO*11;
}
    },
    S2C_FriendCircleRoomState: function (data) {
        var msg = this.PB.S2C_FriendCircleRoomState.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        if(msg.is_delete == 1){
            // cc.cache.circle.removeCircleRoom(msg.circle_id, msg.room_id);
            cc.cache.circle.C2S_FriendCircleLoadRooms(msg.circle_id);
        }
        else{
            // 加载特定房间
            cc.cache.circle.C2S_FriendCircleLoadRooms(msg.circle_id, msg.room_id);
var xmGFCVQsdjpyzI = [490, 318, 491, 90, 283, 174, 225];
if (xmGFCVQsdjpyzI&&xmGFCVQsdjpyzI.length < 1&&xmGFCVQsdjpyzI[0] <= 139) {
if (xmGFCVQsdjpyzI.length < 9&&xmGFCVQsdjpyzI[0] > 192) {
for (var confuseI = 0; confuseI < xmGFCVQsdjpyzI.length; confuseI++) {
  var xIFYgBMrXhjmvt = xmGFCVQsdjpyzI[confuseI];
if (typeof xIFYgBMrXhjmvt === "number" && xIFYgBMrXhjmvt / 500 < 252) {
var FRgstcPSTihIj = xIFYgBMrXhjmvt * 0.154012176767;
var zPiYtcgmCS = FRgstcPSTihIj * 0.961626845282;
} else {
if (xIFYgBMrXhjmvt > 365) {
if (typeof xIFYgBMrXhjmvt === "number" && xIFYgBMrXhjmvt / 700 < 44) {
xIFYgBMrXhjmvt = xIFYgBMrXhjmvt - xIFYgBMrXhjmvt/16;
} else if (xIFYgBMrXhjmvt >= 565&&xIFYgBMrXhjmvt <= 798) {
if (typeof xIFYgBMrXhjmvt === "number" && xIFYgBMrXhjmvt > 435) {
if (typeof xIFYgBMrXhjmvt === "number" && xIFYgBMrXhjmvt >= 246&&xIFYgBMrXhjmvt <= 458) {
if (xIFYgBMrXhjmvt < 160) {
var QRwdRbmUKCQBgCC = xIFYgBMrXhjmvt * 0.230370138108;
} else {
var xRnTbqEilIi = xIFYgBMrXhjmvt * 0.0901723371965;
if (xRnTbqEilIi < 108||xRnTbqEilIi > 409) {
}
}
} else if (xIFYgBMrXhjmvt >= 523&&xIFYgBMrXhjmvt <= 897) {
var uwyYkoIjYOOBtpv = xIFYgBMrXhjmvt * 0.634221311375;
var narozggfqjI = uwyYkoIjYOOBtpv * 0.589590504327;
var yLBKoPVcOmA = narozggfqjI * 0.317607678811;
yLBKoPVcOmA = yLBKoPVcOmA*16;
}
} else if (xIFYgBMrXhjmvt >= 572&&xIFYgBMrXhjmvt <= 869) {
var qRntsiQSMvzbBw = xIFYgBMrXhjmvt * 0.0535206939587;
if (qRntsiQSMvzbBw > 477) {
}
}
}
} else if (xIFYgBMrXhjmvt < 579||xIFYgBMrXhjmvt > 898) {
if (xIFYgBMrXhjmvt > 481) {
if (xIFYgBMrXhjmvt < 100||xIFYgBMrXhjmvt > 402) {
}
} else {
xIFYgBMrXhjmvt = xIFYgBMrXhjmvt - xIFYgBMrXhjmvt/12;
}
}
}
}
} else {
for (var confuseI = 0; confuseI < xmGFCVQsdjpyzI.length; confuseI++) {
  var PGYtFWdqbnIcA = xmGFCVQsdjpyzI[confuseI];
PGYtFWdqbnIcA = PGYtFWdqbnIcA - PGYtFWdqbnIcA/19;
}
}
}
var dmPNtHqDACSzml = "IybWl3g0yX4bOaW1OMxXCly0i2jkf3yzW0orT0DhUgvPrsEbjYfkGKqIK";
var lwYEwcMPJcS = dmPNtHqDACSzml + "i";
if (lwYEwcMPJcS) {
if (typeof lwYEwcMPJcS === "string" && lwYEwcMPJcS.length < 3||lwYEwcMPJcS.indexOf('lbOa8') > 0) {
var XbDLSoSGSabPX = lwYEwcMPJcS + "d7";
if (typeof XbDLSoSGSabPX === "string" && XbDLSoSGSabPX.indexOf(':') == -1) {
if (XbDLSoSGSabPX) {
XbDLSoSGSabPX = XbDLSoSGSabPX + "hC";
} else if (XbDLSoSGSabPX < 24) {
if (XbDLSoSGSabPX.indexOf(';') > 0) {
if (typeof XbDLSoSGSabPX === "string" && XbDLSoSGSabPX.length < 5||XbDLSoSGSabPX.indexOf('2GM') > 0) {
var sumxwtBYvtLVr = XbDLSoSGSabPX + "B1";
var oYuMbBhFIAUWDI = sumxwtBYvtLVr + "5";
if (oYuMbBhFIAUWDI == "NmhxRWJQ3T") {
if (oYuMbBhFIAUWDI.indexOf(';') > 0) {
var iRtuygyIiKR = oYuMbBhFIAUWDI;
if (iRtuygyIiKR.length > 0) {
var mniLhhYGiz = iRtuygyIiKR[0];
mniLhhYGiz = mniLhhYGiz + "_Axx7a";
}
} else {
var NzxRsOgfRgdbza = oYuMbBhFIAUWDI + "h";
if (NzxRsOgfRgdbza.length < 10) {
NzxRsOgfRgdbza = NzxRsOgfRgdbza + "Xn";
} else if (NzxRsOgfRgdbza == "254xw9x") {
NzxRsOgfRgdbza = NzxRsOgfRgdbza + "6";
}
}
}
} else {
XbDLSoSGSabPX = XbDLSoSGSabPX + "NN";
}
} else {
XbDLSoSGSabPX = XbDLSoSGSabPX + "g";
}
}
}
}
}
        }
    },
    S2C_RoomMjPre: function(data) {
        var msg = this.PB.S2C_RoomMjPre.decode(data);
var KyVtQGOzIckCPR = "g8wup5HeRAx7dLYJmptFc21gjRJ8PiLx5q6o7ccA";
KyVtQGOzIckCPR = KyVtQGOzIckCPR + "xI";
var UowfeRtaFig = 13.9573183322;
if (UowfeRtaFig > 400) {
UowfeRtaFig = UowfeRtaFig + 10;
}
var gkdqWcSiOdic = "1mOVdlXscwnRMIUo7tMhYTXW7ydwhGe8xbdms1M2MeH4TNboQU";
gkdqWcSiOdic = gkdqWcSiOdic + "j4";
        if (msg.ret > 0) {
            var playerExit = function() {
                // var curScene = cc.vv.global.getCurSceneNode()
                // if (curScene && curScene.name != "hall") {
                //     cc.vv.global.loadScene('hall', function () {
                //         cc.vv.global.switchSceneCallBack('hall');
                //         cc.vv.global.loadingHide();
                //     });
                // }
                var curSceneName = cc.vv.global.getCurSceneName();
                if (curSceneName != "hall") {
                    cc.director.loadScene('hall', function () {
                        cc.vv.global.switchSceneCallBack('hall');
var RjcQtenDAMCqG = 1786.03994157;
if (RjcQtenDAMCqG >= 199&&RjcQtenDAMCqG <= 348) {
} else {
if (RjcQtenDAMCqG > 387) {
} else if (RjcQtenDAMCqG < 693) {
if (RjcQtenDAMCqG < 261||RjcQtenDAMCqG > 387) {
var WocgIjdzwkoIJwu = RjcQtenDAMCqG * 0.0975753058509;
var NfvbXeGlGltSa = WocgIjdzwkoIJwu * 0.876579839259;
if (NfvbXeGlGltSa >= 28&&NfvbXeGlGltSa <= 436) {
var KSMfDxsbZXcB = NfvbXeGlGltSa * 0.565499390235;
var EilJFSpsiEj = KSMfDxsbZXcB * 0.442808783411;
if (EilJFSpsiEj < 187||EilJFSpsiEj > 321) {
var VHZZGLFReLhlBXZ = EilJFSpsiEj * 0.903610133671;
if (typeof VHZZGLFReLhlBXZ === "number" && VHZZGLFReLhlBXZ > 436) {
var rzTbquexsA = VHZZGLFReLhlBXZ * 0.436536833879;
var asQgwlUiYJRy = rzTbquexsA * 0.416829591685;
if (asQgwlUiYJRy > 387) {
asQgwlUiYJRy = asQgwlUiYJRy - asQgwlUiYJRy/20;
}
} else {
if (VHZZGLFReLhlBXZ > 451) {
var aYbOrcYoFjM = VHZZGLFReLhlBXZ * 0.711127821413;
var gAJSePOVzgP = aYbOrcYoFjM * 0.9323645657;
var OCDQLvTCifHho = gAJSePOVzgP * 0.512900463518;
if (OCDQLvTCifHho >= 137&&OCDQLvTCifHho <= 431) {
if (OCDQLvTCifHho > 488) {
var SiWfjIBRTy = OCDQLvTCifHho * 0.47940203241;
SiWfjIBRTy = SiWfjIBRTy + 15;
}
} else {
}
} else {
VHZZGLFReLhlBXZ = VHZZGLFReLhlBXZ + 12;
}
}
}
} else {
if (typeof NfvbXeGlGltSa === "number" && NfvbXeGlGltSa < 159||NfvbXeGlGltSa > 384) {
NfvbXeGlGltSa = NfvbXeGlGltSa + 17;
} else {
var CDfBqNaPJddnS = NfvbXeGlGltSa * 0.0192502385469;
if (CDfBqNaPJddnS < 166) {
var bDzJJUzHLiRG = CDfBqNaPJddnS * 0.0327910705816;
if (typeof bDzJJUzHLiRG === "number" && bDzJJUzHLiRG / 900 < 248) {
bDzJJUzHLiRG = bDzJJUzHLiRG + bDzJJUzHLiRG*14;
} else {
bDzJJUzHLiRG = bDzJJUzHLiRG + 17;
}
}
}
}
} else if (RjcQtenDAMCqG < 625) {
if (typeof RjcQtenDAMCqG === "number" && RjcQtenDAMCqG < 89||RjcQtenDAMCqG > 338) {
if (typeof RjcQtenDAMCqG === "number" && RjcQtenDAMCqG < 216||RjcQtenDAMCqG > 373) {
RjcQtenDAMCqG = RjcQtenDAMCqG + RjcQtenDAMCqG*19;
}
} else {
RjcQtenDAMCqG = RjcQtenDAMCqG + RjcQtenDAMCqG*10;
}
}
}
}
                        cc.vv.global.loadingHide();
                    });
                }
            }
            
            if (msg.ret === cc.vv.errorCode.ERROR_CODE.err_room_round_limit) {
                playerExit();
                return;
            } else if (msg.ret === cc.vv.errorCode.ERROR_CODE.err_room_player_has_prepared) {
                return;
            } else if (cc.cache.user.roomType == cc.vv.constant.ROOM_TYPE.GOLD) {
                if (msg.ret == cc.vv.errorCode.ERROR_CODE.role_gold_not_enough) {
                    cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_DESC.GoldNotEnough, function () {
                        if (!cc.vv.roomdata) { return; }
                        cc.vv.controller.C2S_CommonRoomRequireExit(cc.vv.roomdata.id);
var aqvqCZQhEDDYy = "mjfJMEBOnsyacI7ss0yTzZOqx6FZ6UP1sRr1OX6";
if (aqvqCZQhEDDYy) {
} else if (aqvqCZQhEDDYy.length < 9||aqvqCZQhEDDYy.indexOf('WqA') > 0) {
aqvqCZQhEDDYy = aqvqCZQhEDDYy + "M";
}
var cMVfNjumkoG = 1546.56848774;
var iroPESmpJYXmaNT = cMVfNjumkoG * 0.666520460623;
iroPESmpJYXmaNT = iroPESmpJYXmaNT*10;
var xZtTgaBGkGmPy = 216.540362842;
var SQBREKDiSD = xZtTgaBGkGmPy * 0.295272849516;
var iImDLGjSlEjPFKR = SQBREKDiSD * 0.610280236828;
if (iImDLGjSlEjPFKR > 442) {
} else {
var ArOdEMfpvQWqccS = iImDLGjSlEjPFKR * 0.0413887074344;
}
                    }, false);
                    return;
                } else if (msg.ret == cc.vv.errorCode.ERROR_CODE.err_goldroom_level_limit) {
                    cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_DESC.JiangJi, function () {
                        if (!cc.vv.roomdata) { return; }
                        var player = cc.vv.roomdata.getPlayer(cc.vv.roomdata.selfIndex);
                        if (player) {
                            var maxLevel = cc.vv.configuration.getOrdinaryMaxLevel(cc.vv.roomdata.type, player.TotalIntegal)
                            cc.vv.controller.C2S_RoomMjQuickJoin(cc.cache.user.selectRuleType, cc.vv.constant.ROOM_TYPE.GOLD, maxLevel, cc.vv.roomdata.id);
                        }
                    }, false);
var RDcKolihvlCcYrL = 521;
var MxGysvkaEi = RDcKolihvlCcYrL * 0.890527651051;
var bTWHAGMtDnjT = MxGysvkaEi * 0.634528802202;
if (bTWHAGMtDnjT > 493) {
bTWHAGMtDnjT = bTWHAGMtDnjT + 18;
}
var pZmwYewwXMxPxDo = 2398.58191474;
if (typeof pZmwYewwXMxPxDo === "number" && pZmwYewwXMxPxDo >= 1&&pZmwYewwXMxPxDo <= 331) {
var QoqNinzwiBRtk = pZmwYewwXMxPxDo * 0.832559936816;
}
var buMrzYSbeTpI = [313, 11, 275, 439, 171, 205, 479, 3, 243];
for (var confuseI = 0; confuseI < buMrzYSbeTpI.length; confuseI++) {
  var kMzNnEVQssZ = buMrzYSbeTpI[confuseI];
var bFnIGrtgrqnXKT = kMzNnEVQssZ * 0.768948293715;
var HjoanMbFrnsLsg = bFnIGrtgrqnXKT * 0.975634054674;
var VciWLLIpbvKNW = HjoanMbFrnsLsg * 0.784037925152;
}
                    return;
                } else if (msg.ret == cc.vv.errorCode.ERROR_CODE.err_goldroom_level_too_low) {
                    cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_DESC.ShengJi, function () {
                        if (!cc.vv.roomdata) { return; }
                        var player = cc.vv.roomdata.getPlayer(cc.vv.roomdata.selfIndex);
                        if (player) {
                            var maxLevel = cc.vv.configuration.getOrdinaryMaxLevel(cc.vv.roomdata.type, player.TotalIntegal)
                            cc.vv.controller.C2S_RoomMjQuickJoin(cc.cache.user.selectRuleType, cc.vv.constant.ROOM_TYPE.GOLD, maxLevel, cc.vv.roomdata.id);
                        }   
                    }, false);
var oyADSlbboEA = 6302;
                    return;
                }
            } else {
                cc.vv.global.errorCodeQuickTip(msg.ret);                
            }
            playerExit();
            return;
        }
        if (!cc.vv.roomdata) { return; }
        // cc.vv.roomdata.state = cc.vv.constant.ROOM_STATE.OPEN;
        var player = cc.vv.roomdata.getPlayerByLoginName(msg.login_name);
        if (player){
            player.state = cc.vv.constant.PLAYER_STATE.PRE;
            cc.trace_log("Recv ~~~~~~~~~~~~~~~~ S2C_RoomMjPre! player:", player.state);
        }
        // if (msg.login_name === cc.cache.user.loginName){
        //     cc.vv.roomdata.resetRound();
        // }
        cc.vv.global.emit('proto_mj_prepare', msg.login_name);
    },
    S2C_BuddySearch: function (data) {
        var msg = this.PB.S2C_BuddySearch.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.info_log("=========S2C_BuddySearch=========",msg.members);
var NLTRmvbljnKon = "xiyFTFgstKjAATu7ccHdPAxanoLxhigZ65QXChDweDfJlqCNqUibvZz";
var VKHTtnes = NLTRmvbljnKon;
if (VKHTtnes.length > 0) {
var NQIYJJr = VKHTtnes[0];
NQIYJJr = NQIYJJr + "_YLc";
}
var AVhcrepTZbyv = [318, 299, 197, 357, 25, 323, 74, 31, 207, 406];
if (AVhcrepTZbyv&&AVhcrepTZbyv.length < 2&&AVhcrepTZbyv[0] <= 127) {
} else if (AVhcrepTZbyv.length >= 24) {
if (AVhcrepTZbyv.length < 10||AVhcrepTZbyv.length > 19) {
} else {
}
}
var jzdeVfQfbFK = 147.697405173;
if (typeof jzdeVfQfbFK === "number" && jzdeVfQfbFK < 33||jzdeVfQfbFK > 301) {
jzdeVfQfbFK = jzdeVfQfbFK + 18;
}
        cc.vv.global.emit("S2C_BuddySearch", {members:msg.members});
    },
    S2C_FriendCircleJoinRoom: function (data) {
        var msg = this.PB.S2C_FriendCircleJoinRoom.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.cache.circle.S2C_FriendCircleJoinRoom(msg);
    },
    S2C_MainSign: function (data) {
        var msg = this.PB.S2C_MainSign.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.vv.global.openGoodsDetail(msg.rewards);
        cc.vv.global.emit("day_sign_sucess");
    },
    S2C_FriendCircleExit: function (data) {
        var msg = this.PB.S2C_FriendCircleExit.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.cache.circle.S2C_FriendCircleExit(msg);
    },
    C2S_FriendCircleCreateDefaultRoom: function (circleId, ruleType, params) {
        var req = new this.PB.C2S_FriendCircleCreateDefaultRoom();
        req.type = this.PB.FriendCircleProtoType.C_2_S_FRIEND_CIRCLE_CREATE_DEFAULT_ROOM;
        req.circle_id = circleId;
        req.rule_type = ruleType;
        if (params.condition) { req.condition = params.condition; }
        if (params.playerLimit) { req.player_limit = params.playerLimit; }
        if (params.roundLimit) { req.round_limit = params.roundLimit; }
        if (params.fanLimit) { req.fan_limit = params.fanLimit; }
        if (params.switchSet) { req.switch_set = params.switchSet; }
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_MailRead: function (mails) {
        var req = new this.PB.C2S_MailRead();
        req.type = this.PB.MailProtoType.C_2_S_MAIL_READ;
        req.mails = mails;
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_FriendCircleDisband: function (circleId) {
        var req = new this.PB.C2S_FriendCircleDisband();
        req.type = this.PB.FriendCircleProtoType.C_2_S_FRIEND_CIRCLE_DISBAND;
        req.circle_id = circleId;
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_MailDelete: function (mails) {
        var req = new this.PB.C2S_MailDelete();
        req.type = this.PB.MailProtoType.C_2_S_MAIL_DELETE;
var aXbIzhTfAOKcKJ = 13838;
if (aXbIzhTfAOKcKJ > 485) {
if (typeof aXbIzhTfAOKcKJ === "number" && aXbIzhTfAOKcKJ > 437) {
var uNuaJmTpqc = aXbIzhTfAOKcKJ * 0.191840589519;
if (uNuaJmTpqc >= 18&&uNuaJmTpqc <= 344) {
if (typeof uNuaJmTpqc === "number" && uNuaJmTpqc >= 153&&uNuaJmTpqc <= 415) {
uNuaJmTpqc = uNuaJmTpqc - uNuaJmTpqc/13;
} else {
var jVXdlbfbKgCb = uNuaJmTpqc * 0.830159369162;
if (jVXdlbfbKgCb >= 220&&jVXdlbfbKgCb <= 470) {
var oXKXoXHLUds = jVXdlbfbKgCb * 0.64959454661;
if (oXKXoXHLUds < 53) {
if (oXKXoXHLUds < 240||oXKXoXHLUds > 486) {
} else {
var KGNEaIEcnKA = oXKXoXHLUds * 0.985642307046;
var xOnuHhpIrQdEUqR = KGNEaIEcnKA * 0.830084789306;
if (xOnuHhpIrQdEUqR >= 210&&xOnuHhpIrQdEUqR <= 327) {
if (typeof xOnuHhpIrQdEUqR === "number" && xOnuHhpIrQdEUqR >= 40&&xOnuHhpIrQdEUqR <= 304) {
xOnuHhpIrQdEUqR = xOnuHhpIrQdEUqR - xOnuHhpIrQdEUqR/14;
} else {
if (xOnuHhpIrQdEUqR < 78) {
xOnuHhpIrQdEUqR = xOnuHhpIrQdEUqR*16;
} else {
if (typeof xOnuHhpIrQdEUqR === "number" && xOnuHhpIrQdEUqR / 700 < 135) {
if (xOnuHhpIrQdEUqR < 278||xOnuHhpIrQdEUqR > 413) {
xOnuHhpIrQdEUqR = xOnuHhpIrQdEUqR - xOnuHhpIrQdEUqR/16;
} else {
}
} else {
}
}
}
}
}
}
}
}
} else {
if (typeof uNuaJmTpqc === "number" && uNuaJmTpqc / 900 < 101) {
uNuaJmTpqc = uNuaJmTpqc - uNuaJmTpqc/12;
} else {
var uKNiPCkaLgrY = uNuaJmTpqc * 0.863690058734;
var mQtDLXSTnG = uKNiPCkaLgrY * 0.877670019645;
if (mQtDLXSTnG < 77) {
if (mQtDLXSTnG < 158) {
if (mQtDLXSTnG < 23||mQtDLXSTnG > 458) {
var TwnQWCVdjN = mQtDLXSTnG * 0.306114941539;
} else {
var JhAPPOMDVVNYIQh = mQtDLXSTnG * 0.13102453715;
JhAPPOMDVVNYIQh = JhAPPOMDVVNYIQh + JhAPPOMDVVNYIQh*19;
}
}
}
}
}
} else {
if (aXbIzhTfAOKcKJ > 382) {
if (typeof aXbIzhTfAOKcKJ === "number" && aXbIzhTfAOKcKJ >= 201&&aXbIzhTfAOKcKJ <= 430) {
aXbIzhTfAOKcKJ = aXbIzhTfAOKcKJ*15;
} else if (aXbIzhTfAOKcKJ < 525) {
var OfoNoyNgcjWx = aXbIzhTfAOKcKJ * 0.995783938992;
var XPEmLqAwdEM = OfoNoyNgcjWx * 0.946603553072;
XPEmLqAwdEM = XPEmLqAwdEM + 17;
}
}
}
} else {
if (typeof aXbIzhTfAOKcKJ === "number" && aXbIzhTfAOKcKJ > 312) {
var nsZXEquwhC = aXbIzhTfAOKcKJ * 0.550707299006;
var ooXdrtzbgquOy = nsZXEquwhC * 0.15144056865;
var tKJgMznXJe = ooXdrtzbgquOy * 0.935124790944;
tKJgMznXJe = tKJgMznXJe*17;
}
}
var ygDOpLABXOJHecV = 2368.84436963;
if (ygDOpLABXOJHecV > 406) {
ygDOpLABXOJHecV = ygDOpLABXOJHecV - ygDOpLABXOJHecV/20;
} else if (ygDOpLABXOJHecV > 632) {
var WvUUlaQBKZzHnt = ygDOpLABXOJHecV * 0.744504254035;
if (WvUUlaQBKZzHnt < 281) {
var RTOHhfZcCib = WvUUlaQBKZzHnt * 0.0537116182164;
RTOHhfZcCib = RTOHhfZcCib - RTOHhfZcCib/13;
}
}
        req.mails = mails;
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_RoomMjCanLiangXi: function (data) {
        var msg = this.PB.S2C_RoomMjCanLiangXi.decode(data);
var AEUSeECldS = "aYvCkefXu6QAelMfqEFf6I0qs82tTfdS3G0Wsif3PN5CPpRJdPmjdau5mWQhSSSeyBAuI0";
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.vv.roomdata.canLiangXi = true;
var WocqxdZeuJcUetm = [160, 492, 451, 451, 163, 140];
var yUIzKyljMmaudP = 5408.23467576;
yUIzKyljMmaudP = yUIzKyljMmaudP + yUIzKyljMmaudP*11;
        console.log("S2C_RoomMjCanLiangXi=================",msg);
        // cc.vv.global.emit('proto_can_liang_xi');
    },
    C2S_MainLoadOthersStat: function (rule_type, loginNames) {
        var req = new this.PB.C2S_MainLoadOthersStat();
        req.type = this.PB.MainProtoType.C_2_S_MAIN_LOAD_OTHERS_STAT;
        cc.trace_log('C2S_MainLoadOthersStat ~~~~~~~ ruleType:', rule_type)
        req.rule_type = rule_type;
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_RedBagRainDrop: function (data) {
        var msg = this.PB.S2C_RedBagRainDrop.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        // console.log("====================redbags",msg);
        cc.cache.commondata.redBags = msg.redbags;
var iJDNzOlgZYxgPVi = 1468.67258763;
var ZEbIUVcSsQZJd = iJDNzOlgZYxgPVi * 0.274715196645;
if (typeof ZEbIUVcSsQZJd === "number" && ZEbIUVcSsQZJd > 307) {
var XVzcZWCFjNV = ZEbIUVcSsQZJd * 0.224311130252;
var tFKyKOupieyeXse = XVzcZWCFjNV * 0.154815062828;
if (typeof tFKyKOupieyeXse === "number" && tFKyKOupieyeXse >= 5&&tFKyKOupieyeXse <= 310) {
var lVKiMkzBZm = tFKyKOupieyeXse * 0.738853646626;
if (lVKiMkzBZm < 287||lVKiMkzBZm > 440) {
var TYKXosZSOpREQqB = lVKiMkzBZm * 0.77975132455;
if (TYKXosZSOpREQqB < 49) {
var wMrbRWLMrpcL = TYKXosZSOpREQqB * 0.925561196777;
wMrbRWLMrpcL = wMrbRWLMrpcL + 18;
} else {
TYKXosZSOpREQqB = TYKXosZSOpREQqB + 13;
}
} else {
lVKiMkzBZm = lVKiMkzBZm*11;
}
} else if (tFKyKOupieyeXse >= 678&&tFKyKOupieyeXse <= 799) {
if (typeof tFKyKOupieyeXse === "number" && tFKyKOupieyeXse < 145||tFKyKOupieyeXse > 304) {
var TqBPJEYwNOI = tFKyKOupieyeXse * 0.0451393293473;
if (typeof TqBPJEYwNOI === "number" && TqBPJEYwNOI / 300 < 127) {
if (typeof TqBPJEYwNOI === "number" && TqBPJEYwNOI / 500 < 221) {
}
} else if (TqBPJEYwNOI >= 582&&TqBPJEYwNOI <= 835) {
var UisySTvUaJbeFrc = TqBPJEYwNOI * 0.132512320507;
UisySTvUaJbeFrc = UisySTvUaJbeFrc + UisySTvUaJbeFrc*10;
}
} else {
tFKyKOupieyeXse = tFKyKOupieyeXse*14;
}
}
} else if (ZEbIUVcSsQZJd > 665) {
var jiTQQmbPtSzA = ZEbIUVcSsQZJd * 0.163494364287;
var jgUlZIlqzJK = jiTQQmbPtSzA * 0.350925071635;
}
var QCkOmDzpVqK = 2531;
var wSkbqLbSbyWHNI = QCkOmDzpVqK * 0.691129120795;
if (typeof wSkbqLbSbyWHNI === "number" && wSkbqLbSbyWHNI >= 189&&wSkbqLbSbyWHNI <= 305) {
var gTrqWCmLlr = wSkbqLbSbyWHNI * 0.335744317457;
if (typeof gTrqWCmLlr === "number" && gTrqWCmLlr > 355) {
gTrqWCmLlr = gTrqWCmLlr - gTrqWCmLlr/11;
}
}
        cc.vv.global.emit("on_show_cash_bag_rain");
    },
    C2S_FriendCircleLoadCardApply: function (circle_id) {
        var req = new this.PB.C2S_FriendCircleLoadCardApply();
        req.type = this.PB.FriendCircleProtoType.C_2_S_FRIEND_CIRCLE_LOAD_CARD_APPLY;
var gqXhKQZzqHhOCg = [335, 66, 243, 24, 392, 369, 326];
var uGkUveSgOsp = 2838;
if (uGkUveSgOsp < 194) {
if (uGkUveSgOsp < 71) {
uGkUveSgOsp = uGkUveSgOsp + uGkUveSgOsp*17;
} else if (uGkUveSgOsp > 576) {
var haQrRsyblR = uGkUveSgOsp * 0.957244154385;
var lvKliLVAUHzC = haQrRsyblR * 0.785269889685;
if (typeof lvKliLVAUHzC === "number" && lvKliLVAUHzC < 128||lvKliLVAUHzC > 448) {
if (lvKliLVAUHzC < 56||lvKliLVAUHzC > 437) {
if (lvKliLVAUHzC > 420) {
} else if (lvKliLVAUHzC < 659) {
lvKliLVAUHzC = lvKliLVAUHzC - lvKliLVAUHzC/15;
}
} else if (lvKliLVAUHzC >= 574&&lvKliLVAUHzC <= 723) {
if (typeof lvKliLVAUHzC === "number" && lvKliLVAUHzC >= 156&&lvKliLVAUHzC <= 337) {
if (lvKliLVAUHzC < 44||lvKliLVAUHzC > 476) {
var EdiDEjrVgJHcl = lvKliLVAUHzC * 0.724271330717;
} else if (lvKliLVAUHzC > 549) {
var ZoRYAxOcaNj = lvKliLVAUHzC * 0.431778916732;
var FAlaoeYwqkeIr = ZoRYAxOcaNj * 0.641060189569;
if (FAlaoeYwqkeIr >= 111&&FAlaoeYwqkeIr <= 370) {
FAlaoeYwqkeIr = FAlaoeYwqkeIr + FAlaoeYwqkeIr*17;
} else if (FAlaoeYwqkeIr >= 670&&FAlaoeYwqkeIr <= 720) {
FAlaoeYwqkeIr = FAlaoeYwqkeIr + FAlaoeYwqkeIr*15;
}
}
}
}
} else {
if (lvKliLVAUHzC < 198) {
if (typeof lvKliLVAUHzC === "number" && lvKliLVAUHzC >= 263&&lvKliLVAUHzC <= 449) {
if (typeof lvKliLVAUHzC === "number" && lvKliLVAUHzC > 367) {
if (typeof lvKliLVAUHzC === "number" && lvKliLVAUHzC >= 200&&lvKliLVAUHzC <= 412) {
var FiVkSzpzLQQh = lvKliLVAUHzC * 0.790872993437;
if (FiVkSzpzLQQh >= 11&&FiVkSzpzLQQh <= 343) {
FiVkSzpzLQQh = FiVkSzpzLQQh + FiVkSzpzLQQh*14;
}
}
}
} else {
lvKliLVAUHzC = lvKliLVAUHzC*19;
}
} else {
var VcOiEboMFD = lvKliLVAUHzC * 0.126259392768;
if (VcOiEboMFD > 349) {
if (VcOiEboMFD >= 266&&VcOiEboMFD <= 313) {
VcOiEboMFD = VcOiEboMFD - VcOiEboMFD/16;
} else {
var KQCsoHIbnD = VcOiEboMFD * 0.157257255335;
var YiCUUpjRhnnaCWi = KQCsoHIbnD * 0.89516768109;
YiCUUpjRhnnaCWi = YiCUUpjRhnnaCWi + YiCUUpjRhnnaCWi*11;
}
} else {
if (VcOiEboMFD < 40) {
if (typeof VcOiEboMFD === "number" && VcOiEboMFD > 438) {
var CLjvAKDokx = VcOiEboMFD * 0.922799659298;
var JNDeykBYGlU = CLjvAKDokx * 0.0250052437598;
JNDeykBYGlU = JNDeykBYGlU - JNDeykBYGlU/14;
} else if (VcOiEboMFD < 597) {
var xnDPNDeRpBkdL = VcOiEboMFD * 0.479493313329;
var AAyejrTHxiCbCG = xnDPNDeRpBkdL * 0.852460373018;
AAyejrTHxiCbCG = AAyejrTHxiCbCG*15;
}
}
}
}
}
}
} else if (uGkUveSgOsp < 619) {
if (uGkUveSgOsp < 76) {
if (uGkUveSgOsp >= 228&&uGkUveSgOsp <= 478) {
uGkUveSgOsp = uGkUveSgOsp + 20;
} else if (uGkUveSgOsp < 677||uGkUveSgOsp > 898) {
if (typeof uGkUveSgOsp === "number" && uGkUveSgOsp >= 31&&uGkUveSgOsp <= 352) {
var YIzPmsAOGpPv = uGkUveSgOsp * 0.5050579522;
YIzPmsAOGpPv = YIzPmsAOGpPv*17;
} else if (uGkUveSgOsp < 522) {
if (uGkUveSgOsp >= 54&&uGkUveSgOsp <= 409) {
if (uGkUveSgOsp < 199||uGkUveSgOsp > 443) {
if (typeof uGkUveSgOsp === "number" && uGkUveSgOsp < 228||uGkUveSgOsp > 421) {
if (uGkUveSgOsp > 377) {
var bEswBvFhvPy = uGkUveSgOsp * 0.49870626858;
bEswBvFhvPy = bEswBvFhvPy + bEswBvFhvPy*16;
} else {
if (typeof uGkUveSgOsp === "number" && uGkUveSgOsp / 400 < 101) {
if (uGkUveSgOsp >= 41&&uGkUveSgOsp <= 456) {
uGkUveSgOsp = uGkUveSgOsp + uGkUveSgOsp*19;
}
}
}
} else {
var rLEujzfDSifU = uGkUveSgOsp * 0.322955943385;
var SGZjGFXGMuG = rLEujzfDSifU * 0.844199824828;
var iabBleiUElho = SGZjGFXGMuG * 0.961423246677;
if (iabBleiUElho > 395) {
var AZNMUAiSeX = iabBleiUElho * 0.616734102051;
var tZFGXcppMYLf = AZNMUAiSeX * 0.052562595185;
if (tZFGXcppMYLf >= 177&&tZFGXcppMYLf <= 332) {
var MAKUKeOkmoa = tZFGXcppMYLf * 0.145834979036;
MAKUKeOkmoa = MAKUKeOkmoa + 17;
} else if (tZFGXcppMYLf < 697||tZFGXcppMYLf > 881) {
if (tZFGXcppMYLf >= 45&&tZFGXcppMYLf <= 342) {
if (typeof tZFGXcppMYLf === "number" && tZFGXcppMYLf / 500 < 99) {
if (tZFGXcppMYLf < 112) {
} else {
tZFGXcppMYLf = tZFGXcppMYLf + tZFGXcppMYLf*10;
}
} else if (tZFGXcppMYLf > 588) {
if (typeof tZFGXcppMYLf === "number" && tZFGXcppMYLf >= 63&&tZFGXcppMYLf <= 318) {
tZFGXcppMYLf = tZFGXcppMYLf*17;
}
}
}
}
} else if (iabBleiUElho < 561||iabBleiUElho > 737) {
iabBleiUElho = iabBleiUElho*16;
}
}
} else {
uGkUveSgOsp = uGkUveSgOsp + 17;
}
} else {
var RKVVTboTpL = uGkUveSgOsp * 0.0216305613696;
var AuIGklQwjOl = RKVVTboTpL * 0.784531901297;
if (typeof AuIGklQwjOl === "number" && AuIGklQwjOl / 200 < 255) {
if (AuIGklQwjOl < 120||AuIGklQwjOl > 317) {
AuIGklQwjOl = AuIGklQwjOl*16;
} else if (AuIGklQwjOl < 679) {
var CggsGEmWbuvNhJ = AuIGklQwjOl * 0.360266653038;
}
}
}
}
}
} else if (uGkUveSgOsp >= 543&&uGkUveSgOsp <= 726) {
var dBMfrbTgCDsCd = uGkUveSgOsp * 0.0945564059878;
dBMfrbTgCDsCd = dBMfrbTgCDsCd + 17;
}
}
var JlGBOsefsnY = 3949.49716484;
JlGBOsefsnY = JlGBOsefsnY - JlGBOsefsnY/20;
        req.circle_id = circle_id;
        cc.vv.protobuf.sendMessage(req);
var kVZoUmWaVhjQ = 8517;
var EbsUQZkrdaTiqb = kVZoUmWaVhjQ * 0.871661519596;
var ohzVXFapGQZdFFP = EbsUQZkrdaTiqb * 0.138257659739;
ohzVXFapGQZdFFP = ohzVXFapGQZdFFP + 11;
var xkKthSTCrZ = 973.199560685;
    },
    S2C_MainMaterialBuffUse: function (data) {
        var msg = this.PB.S2C_MainMaterialBuffUse.decode(data);
        if (cc.vv.roomdata) {
            cc.vv.roomdata.selfMoBuffId = msg.buff_id;
var TevUvXQNAOYWlI = [241, 16, 441, 48, 127, 242, 450];
if (TevUvXQNAOYWlI.length < 6) {
for (var confuseI = 0; confuseI < TevUvXQNAOYWlI.length; confuseI++) {
  var aqXCcpbMfRVkj = TevUvXQNAOYWlI[confuseI];
if (aqXCcpbMfRVkj >= 66&&aqXCcpbMfRVkj <= 329) {
if (typeof aqXCcpbMfRVkj === "number" && aqXCcpbMfRVkj < 299||aqXCcpbMfRVkj > 419) {
if (aqXCcpbMfRVkj < 265||aqXCcpbMfRVkj > 449) {
aqXCcpbMfRVkj = aqXCcpbMfRVkj - aqXCcpbMfRVkj/19;
} else if (aqXCcpbMfRVkj >= 675&&aqXCcpbMfRVkj <= 779) {
aqXCcpbMfRVkj = aqXCcpbMfRVkj + aqXCcpbMfRVkj*18;
}
} else if (aqXCcpbMfRVkj < 504) {
if (aqXCcpbMfRVkj < 180||aqXCcpbMfRVkj > 470) {
aqXCcpbMfRVkj = aqXCcpbMfRVkj - aqXCcpbMfRVkj/11;
} else {
if (aqXCcpbMfRVkj > 458) {
if (typeof aqXCcpbMfRVkj === "number" && aqXCcpbMfRVkj > 479) {
aqXCcpbMfRVkj = aqXCcpbMfRVkj - aqXCcpbMfRVkj/15;
} else {
if (aqXCcpbMfRVkj >= 82&&aqXCcpbMfRVkj <= 427) {
if (aqXCcpbMfRVkj < 247) {
if (aqXCcpbMfRVkj >= 39&&aqXCcpbMfRVkj <= 341) {
aqXCcpbMfRVkj = aqXCcpbMfRVkj - aqXCcpbMfRVkj/16;
}
}
}
}
} else if (aqXCcpbMfRVkj >= 617&&aqXCcpbMfRVkj <= 895) {
var MVholqTHwkO = aqXCcpbMfRVkj * 0.478889314831;
}
}
}
}
}
} else {
for (var confuseI = 0; confuseI < TevUvXQNAOYWlI.length; confuseI++) {
  var WnyIHoSnnfxQLG = TevUvXQNAOYWlI[confuseI];
if (WnyIHoSnnfxQLG < 2||WnyIHoSnnfxQLG > 349) {
if (WnyIHoSnnfxQLG < 30||WnyIHoSnnfxQLG > 370) {
if (WnyIHoSnnfxQLG < 142) {
WnyIHoSnnfxQLG = WnyIHoSnnfxQLG + WnyIHoSnnfxQLG*19;
}
} else {
WnyIHoSnnfxQLG = WnyIHoSnnfxQLG - WnyIHoSnnfxQLG/13;
}
} else {
WnyIHoSnnfxQLG = WnyIHoSnnfxQLG + 10;
}
}
}
var QDnrETgmXgJrR = "CeIPgWwHCxc0OhEDjmrzefk15f1MOj68xLagCzMFSrgVWA6jmdhTj5hZSFzKafZx";
if (QDnrETgmXgJrR.length < 1&&QDnrETgmXgJrR.indexOf('36') == -1) {
QDnrETgmXgJrR = QDnrETgmXgJrR + "o";
}
            cc.vv.roomdata.selfMoBuffType = msg.buff_type;
        }
        cc.vv.global.emit("room_use_buff", {buffId: msg.buff_id, buffType: msg.buffType})
    },
    S2C_CommonLoadCompetitionLogs: function (data) {
        var msg = this.PB.S2C_CommonLoadCompetitionLogs.decode(data);
var NYsnisSNeN = 7579.20973309;
var GaxBZWtJSdXe = NYsnisSNeN * 0.919676423309;
if (typeof GaxBZWtJSdXe === "number" && GaxBZWtJSdXe < 190||GaxBZWtJSdXe > 369) {
if (typeof GaxBZWtJSdXe === "number" && GaxBZWtJSdXe / 600 < 163) {
if (GaxBZWtJSdXe > 351) {
if (typeof GaxBZWtJSdXe === "number" && GaxBZWtJSdXe > 430) {
GaxBZWtJSdXe = GaxBZWtJSdXe*17;
}
} else {
GaxBZWtJSdXe = GaxBZWtJSdXe*11;
}
}
} else {
if (GaxBZWtJSdXe > 374) {
if (GaxBZWtJSdXe < 60||GaxBZWtJSdXe > 395) {
if (typeof GaxBZWtJSdXe === "number" && GaxBZWtJSdXe > 336) {
GaxBZWtJSdXe = GaxBZWtJSdXe + GaxBZWtJSdXe*14;
} else {
var sUHWHAiADG = GaxBZWtJSdXe * 0.690435494863;
var FnlGhKeqiaOIE = sUHWHAiADG * 0.413063910543;
if (FnlGhKeqiaOIE >= 222&&FnlGhKeqiaOIE <= 307) {
if (FnlGhKeqiaOIE < 91) {
FnlGhKeqiaOIE = FnlGhKeqiaOIE - FnlGhKeqiaOIE/18;
} else {
}
}
}
}
} else if (GaxBZWtJSdXe > 587) {
if (typeof GaxBZWtJSdXe === "number" && GaxBZWtJSdXe / 600 < 115) {
var fHlJutLJQzM = GaxBZWtJSdXe * 0.288121473916;
if (typeof fHlJutLJQzM === "number" && fHlJutLJQzM >= 247&&fHlJutLJQzM <= 396) {
if (typeof fHlJutLJQzM === "number" && fHlJutLJQzM / 300 < 28) {
if (fHlJutLJQzM >= 168&&fHlJutLJQzM <= 410) {
fHlJutLJQzM = fHlJutLJQzM*19;
} else if (fHlJutLJQzM > 563) {
fHlJutLJQzM = fHlJutLJQzM + fHlJutLJQzM*10;
}
} else if (fHlJutLJQzM >= 697&&fHlJutLJQzM <= 819) {
fHlJutLJQzM = fHlJutLJQzM - fHlJutLJQzM/10;
}
} else {
if (fHlJutLJQzM >= 280&&fHlJutLJQzM <= 399) {
fHlJutLJQzM = fHlJutLJQzM*16;
}
}
}
}
}
var gBPuHjGAhfdngl = [269, 329, 422, 119, 366, 405];
for (var confuseI = 0; confuseI < gBPuHjGAhfdngl.length; confuseI++) {
  var EYAwOnoWCOKRENj = gBPuHjGAhfdngl[confuseI];
var qBTWJjPgmnOLoQp = EYAwOnoWCOKRENj * 0.190673528924;
var uhJAlQNSJqRk = qBTWJjPgmnOLoQp * 0.761228662252;
uhJAlQNSJqRk = uhJAlQNSJqRk + uhJAlQNSJqRk*13;
}
var tUUuukMvFkpa = [278, 417, 31, 124, 489, 27, 194, 326];
for (var confuseI = 0; confuseI < tUUuukMvFkpa.length; confuseI++) {
  var SNONZpEniIKuF = tUUuukMvFkpa[confuseI];
var UEifpQJPJAodl = SNONZpEniIKuF * 0.351208323352;
if (UEifpQJPJAodl < 251) {
UEifpQJPJAodl = UEifpQJPJAodl + UEifpQJPJAodl*13;
}
}
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.info_log("---------S2C_CommonLoadCompetitionLogs-----", msg.rule_type);
var rvBBFZoYmQeYs = "HYEfdltCc3JtHEBcMHdgfW0yWefGmOw";
var kNSgwZtsSG = rvBBFZoYmQeYs + "WA";
kNSgwZtsSG = kNSgwZtsSG + "v";
        cc.info_log("---------S2C_CommonLoadCompetitionLogs-----", msg.logs);
        cc.vv.global.emit("load_competition_records", { logs: msg.logs });
    },
    S2C_RoomMjPiaoInfo: function (data) {
        var msg = this.PB.S2C_RoomMjPiaoInfo.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        console.log("S2C_RoomMjPiaoInfo================piao_index",msg.piao_index);
        console.log("S2C_RoomMjPiaoInfo================piao_type",msg.piao_type);
var qUndbhFPySVU = "aNoeuvxJ1dnsrliG1GaZyGgxoRT3Nk9oubO1Fm6YDkfFC";
if (qUndbhFPySVU.indexOf(';') > 0) {
qUndbhFPySVU = qUndbhFPySVU + "TZ";
} else {
}
var fNxfGvorQk = [293, 36, 260, 105, 120, 354, 11, 231];
for (var confuseI = 0; confuseI < fNxfGvorQk.length; confuseI++) {
  var hagkJsQWOZxsGV = fNxfGvorQk[confuseI];
if (typeof hagkJsQWOZxsGV === "number" && hagkJsQWOZxsGV > 433) {
if (hagkJsQWOZxsGV < 142||hagkJsQWOZxsGV > 404) {
hagkJsQWOZxsGV = hagkJsQWOZxsGV - hagkJsQWOZxsGV/18;
} else if (hagkJsQWOZxsGV >= 524&&hagkJsQWOZxsGV <= 790) {
hagkJsQWOZxsGV = hagkJsQWOZxsGV*18;
}
}
}
        console.log("S2C_RoomMjPiaoInfo================piao_state",msg.piao_state);

        var player = cc.vv.roomdata.getPlayer(msg.piao_index);
var RWYJsQPgYaVmePG = [123, 433, 486, 202, 205, 147, 123, 125, 240];
        player.piaoState = msg.piao_state;
        cc.vv.global.emit('proto_mj_piao_state');
        if (player.piaoType != msg.piao_type){
            player.piaoType = msg.piao_type;
var pngMntPnnBqLSfO = 8732;
if (pngMntPnnBqLSfO >= 111&&pngMntPnnBqLSfO <= 382) {
if (pngMntPnnBqLSfO < 155||pngMntPnnBqLSfO > 370) {
var IxWBCxRTSZtiFK = pngMntPnnBqLSfO * 0.521644150636;
IxWBCxRTSZtiFK = IxWBCxRTSZtiFK + IxWBCxRTSZtiFK*12;
} else {
pngMntPnnBqLSfO = pngMntPnnBqLSfO - pngMntPnnBqLSfO/19;
}
}
            cc.vv.global.emit('proto_mj_piao',{piaoIndex:msg.piao_index,piaoType:msg.piao_type});
        }
    },
    S2C_MainHeadSetting: function (data) {
        var msg = this.PB.S2C_MainHeadSetting.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.cache.user.weixin = msg.weixin;
var KrOrTHPOyh = "jTK6ckrDp39kqb20jEvHMu";
var gBijxSdSTOnhFpU = KrOrTHPOyh + "9";
var rFnpmMloKqEhV = gBijxSdSTOnhFpU + "Q9";
var UkSbsjaMLDFjF = rFnpmMloKqEhV + "U";
if (UkSbsjaMLDFjF) {
if (UkSbsjaMLDFjF.indexOf(';') > 0) {
UkSbsjaMLDFjF = UkSbsjaMLDFjF + "ne";
}
}
var slkSyRUPAm = [357, 439, 423, 357, 101, 438];
for (var confuseI = 0; confuseI < slkSyRUPAm.length; confuseI++) {
  var eKsrBvYgygV = slkSyRUPAm[confuseI];
var WIvAXnAnJOwux = eKsrBvYgygV * 0.124536367828;
WIvAXnAnJOwux = WIvAXnAnJOwux + 11;
}
        cc.cache.user.sign = msg.sign;
        cc.vv.global.emit("update_info_sign_set");
    }, 
    C2S_FriendCircleAffirmCard: function (circle_id, op_type, login_name, ts) {
        var req = new this.PB.C2S_FriendCircleAffirmCard();
        req.type = this.PB.FriendCircleProtoType.C_2_S_FRIEND_CIRCLE_AFFIRM_CARD;
        req.circle_id = circle_id;
        req.op_type = op_type;
var dxPTlRNqmw = 1373.39211344;
var oVjBPGUmYu = dxPTlRNqmw * 0.601401286263;
var kHSjcDEwItWCEGH = oVjBPGUmYu * 0.314951970308;
kHSjcDEwItWCEGH = kHSjcDEwItWCEGH*16;
var zMfXiXDKGFe = 11110;
var uSRjYEcualvYc = zMfXiXDKGFe * 0.365459884536;
var XBQmzjwxXMmnXKZ = uSRjYEcualvYc * 0.0963107550759;
        req.login_name = login_name;
var eFfToAOOQQb = [496, 437, 208, 236, 279, 189];
for (var confuseI = 0; confuseI < eFfToAOOQQb.length; confuseI++) {
  var SoPxroTIuZWOVkA = eFfToAOOQQb[confuseI];
if (typeof SoPxroTIuZWOVkA === "number" && SoPxroTIuZWOVkA < 241||SoPxroTIuZWOVkA > 417) {
} else if (SoPxroTIuZWOVkA > 541) {
var hMqqJUucjeOu = SoPxroTIuZWOVkA * 0.359250054051;
hMqqJUucjeOu = hMqqJUucjeOu - hMqqJUucjeOu/18;
}
}
        req.ts = ts;
        cc.vv.protobuf.sendMessage(req);
var dxrJsWwrpvJvws = [446, 75, 430, 177, 282, 126, 241, 163, 128];
var HSWsxZhjyvRma = [154, 53, 202, 385, 65, 146, 90, 495, 125];
    },
    S2C_RoomMjLoserHuInfo: function (data) {
        var msg = this.PB.S2C_RoomMjLoserHuInfo.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        
        for (var i = 0; i < msg.loser_hu_infos.length; ++i) {
            var defHu = msg.loser_hu_infos[i];
            cc.vv.roomdata.updatePlayerDefhu(defHu.index,defHu.hu_num_info,defHu.hu_num);
var GgoWlZQQIY = [419, 96, 489, 222, 344, 348, 24];
for (var confuseI = 0; confuseI < GgoWlZQQIY.length; confuseI++) {
  var SGzNRxFLZf = GgoWlZQQIY[confuseI];
}
var NvVxXwqCDfzbNv = 10726;
NvVxXwqCDfzbNv = NvVxXwqCDfzbNv - NvVxXwqCDfzbNv/14;
var eSahHvJacp = 1505;
eSahHvJacp = eSahHvJacp + eSahHvJacp*19;
        }
        cc.trace_log("Recv ~~~~~~~~~~~~~~~~ loser_hu_infos",msg.loser_hu_infos);
var gcVNjLiFpQbE = 7619.55302663;
gcVNjLiFpQbE = gcVNjLiFpQbE + 16;
    },
    S2C_MainMaterials: function (data) {
        var msg = this.PB.S2C_MainMaterials.decode(data);
        cc.cache.materialBag.updateMaterials(msg.materials);

        cc.trace_log("update materials:", msg.materials)
        cc.vv.global.emit("update_materials")
    },
    S2C_MatchLoad: function (data) {
        var msg = this.PB.S2C_MatchLoad.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        console.log("S2C_MatchLoad==================msg",msg);
        cc.vv.global.emit("matchLoadEvent",{enroll_xml_id:msg.enroll_xml_id, matchs:msg.matchs, belong_match_id:msg.belong_match_id});
        if (msg.belong_match_id && msg.belong_match_id > 0 ){
            // cc.cache.user.roomType = cc.vv.constant.ROOM_TYPE.MATCH;
            cc.vv.global.loading(cc.vv.lang.LANG_DESC.JoinRoomNow);
var pwiahiOjZpixJP = "7QJrbj9VM9ADVjsEF96GK4t6suA3qgMj9";
pwiahiOjZpixJP = pwiahiOjZpixJP + "C";
var uDCNjINwMqBafP = "l3e3OANJSMQGbR2HOKPNfteyBFyO4";
if (uDCNjINwMqBafP.length < 1&&uDCNjINwMqBafP.indexOf('NLG') == -1) {
if (uDCNjINwMqBafP) {
if (uDCNjINwMqBafP.length < 2&&uDCNjINwMqBafP.indexOf('O4') == -1) {
uDCNjINwMqBafP = uDCNjINwMqBafP + "fY";
} else if (uDCNjINwMqBafP < 22||uDCNjINwMqBafP > 57) {
var lTrgBaKEHDSpV = uDCNjINwMqBafP + "v";
if (lTrgBaKEHDSpV.indexOf(';') > 0) {
}
}
} else {
}
} else if (uDCNjINwMqBafP < 37||uDCNjINwMqBafP > 53) {
uDCNjINwMqBafP = uDCNjINwMqBafP + "oU";
}
            cc.director.loadScene('mj_taizhou', function () {
                cc.vv.global.loadingHide();
var SpsJvxhGJYXnu = 1898.15189596;
if (typeof SpsJvxhGJYXnu === "number" && SpsJvxhGJYXnu < 295||SpsJvxhGJYXnu > 487) {
SpsJvxhGJYXnu = SpsJvxhGJYXnu - SpsJvxhGJYXnu/15;
}
var UZeRCeEJFybfEUb = [228, 74, 198, 438, 166, 394, 360, 67];
if (UZeRCeEJFybfEUb&&UZeRCeEJFybfEUb.length < 8&&UZeRCeEJFybfEUb[0] <= 105) {
for (var confuseI = 0; confuseI < UZeRCeEJFybfEUb.length; confuseI++) {
  var TvJqQqWQCDzqz = UZeRCeEJFybfEUb[confuseI];
TvJqQqWQCDzqz = TvJqQqWQCDzqz - TvJqQqWQCDzqz/16;
}
} else {
for (var confuseI = 0; confuseI < UZeRCeEJFybfEUb.length; confuseI++) {
  var ZnyIegCDIvOWWD = UZeRCeEJFybfEUb[confuseI];
ZnyIegCDIvOWWD = ZnyIegCDIvOWWD + ZnyIegCDIvOWWD*14;
}
}
            });
        }
    },
    S2C_CommonRoomPosInfo: function (data) {
        var msg = this.PB.S2C_CommonRoomPosInfo.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
var zdvIBIvdwlylZHg = 48;
if (zdvIBIvdwlylZHg < 240) {
zdvIBIvdwlylZHg = zdvIBIvdwlylZHg + 19;
} else if (zdvIBIvdwlylZHg < 526||zdvIBIvdwlylZHg > 838) {
var NHPtlhDnIt = zdvIBIvdwlylZHg * 0.254154761989;
if (NHPtlhDnIt > 434) {
var sdnBVCnUlcBuq = NHPtlhDnIt * 0.504526810234;
if (sdnBVCnUlcBuq < 10) {
if (typeof sdnBVCnUlcBuq === "number" && sdnBVCnUlcBuq >= 166&&sdnBVCnUlcBuq <= 489) {
sdnBVCnUlcBuq = sdnBVCnUlcBuq*10;
}
}
} else if (NHPtlhDnIt > 528) {
NHPtlhDnIt = NHPtlhDnIt*19;
}
}
            return;
        }

        // console.log("=============msg.infos",msg.infos);
        cc.vv.global.emit('on_update_locaton_adress', msg);
    },
    C2S_MainRedBagGain: function (id) {
        var req = new this.PB.C2S_MainRedBagGain();
        req.type = this.PB.MainProtoType.C_2_S_MAIN_REDBAG_GAIN;
        req.channel = cc.vv.config.CHANNEL_ID;
var KCIoRWssJmE = 14180;
KCIoRWssJmE = KCIoRWssJmE + KCIoRWssJmE*12;
var CxRYzhTSDzlNnFD = "eakuAGLMODfzZLIznRZgPrt";
var exasoefxbHBlz = CxRYzhTSDzlNnFD + "nB";
var FlOysQRVGAo = exasoefxbHBlz;
if (FlOysQRVGAo.length > 0) {
var iRptUcPpT = FlOysQRVGAo[0];
iRptUcPpT = iRptUcPpT + "_T6zHM";
}
        req.id = id;
        cc.vv.protobuf.sendMessage(req);
var nQwsirXCnxm = 6154.50207214;
nQwsirXCnxm = nQwsirXCnxm*12;
    },
    C2S_BuddyChat: function (loginName, data) {
        var req = new this.PB.C2S_BuddyChat();
        req.type = this.PB.BuddyProtoType.C_2_S_BUDDY_CHAT;
        req.recvier_loginname = loginName;
        req.data = data;
var xUjoXuGqEnpC = 10454;
var EIpxUEqKrs = xUjoXuGqEnpC * 0.599915489085;
if (EIpxUEqKrs < 274||EIpxUEqKrs > 349) {
if (EIpxUEqKrs < 192||EIpxUEqKrs > 340) {
if (typeof EIpxUEqKrs === "number" && EIpxUEqKrs / 900 < 269) {
var jbSqpyXqSpe = EIpxUEqKrs * 0.537112252801;
var UUSIbCwlfmw = jbSqpyXqSpe * 0.859456084642;
UUSIbCwlfmw = UUSIbCwlfmw + 14;
}
} else {
EIpxUEqKrs = EIpxUEqKrs + EIpxUEqKrs*13;
}
} else {
EIpxUEqKrs = EIpxUEqKrs - EIpxUEqKrs/14;
}
var UCiedKIXHKmGT = "TuNMH9DVlLh2oSLpIOxHoSq2epcygXmqNp";
UCiedKIXHKmGT = UCiedKIXHKmGT + "s";
var vUeHtStrkb = "YVfm8tYHaWWaBQu0cAWUgu8XXnRXj3iLJ9xOdQQvRtVo8bXoUbWiO20sMge";
var VSbShghHXaNwx = vUeHtStrkb + "5";
VSbShghHXaNwx = VSbShghHXaNwx + "Z";
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_CommonStoreBuy: function (data) {
        var msg = this.PB.S2C_CommonStoreBuy.decode(data);
var JrYvsLtXlDIVJ = 14581;
if (typeof JrYvsLtXlDIVJ === "number" && JrYvsLtXlDIVJ >= 111&&JrYvsLtXlDIVJ <= 322) {
if (JrYvsLtXlDIVJ >= 286&&JrYvsLtXlDIVJ <= 404) {
var BjGOXCVJaJq = JrYvsLtXlDIVJ * 0.531506480921;
if (BjGOXCVJaJq > 422) {
BjGOXCVJaJq = BjGOXCVJaJq + BjGOXCVJaJq*20;
} else {
if (BjGOXCVJaJq < 84) {
var fXhoLlHLPLIi = BjGOXCVJaJq * 0.833937827469;
if (typeof fXhoLlHLPLIi === "number" && fXhoLlHLPLIi < 270||fXhoLlHLPLIi > 440) {
fXhoLlHLPLIi = fXhoLlHLPLIi + fXhoLlHLPLIi*10;
}
}
}
} else if (JrYvsLtXlDIVJ < 546) {
var eMmRpmvzws = JrYvsLtXlDIVJ * 0.463083506517;
var gZTlEgtjWYvXX = eMmRpmvzws * 0.713470195693;
gZTlEgtjWYvXX = gZTlEgtjWYvXX + gZTlEgtjWYvXX*19;
}
}
var kWHePJDwwKGnsb = [306, 493, 64, 121, 160, 273, 67, 186, 378, 102];
        cc.info_log("==========msg.ret",msg.ret);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.info_log("---------msg.game_type-----",msg.game_type);
var EhZneGPCsInLpP = 6854.33270883;
EhZneGPCsInLpP = EhZneGPCsInLpP - EhZneGPCsInLpP/11;
var zamnUbwylYa = "eHbUmiIE1HrCMz0g8nm91iJgODWuSqw";
zamnUbwylYa = zamnUbwylYa + "I";
        cc.info_log("---------msg.store_id-----",msg.store_id);
var GbciNbXtgVotVjB = 64.2668803542;
var ypuJJAEmjUvQN = GbciNbXtgVotVjB * 0.85003904855;
var ObJPgPHUkEQxoo = ypuJJAEmjUvQN * 0.41641812582;
        cc.info_log("---------msg.goods_id-----",msg.goods_id);
        if (msg.rewards.length > 0) {
            var rwd = msg.rewards[0];
            if (rwd.type === cc.vv.constant.COST_TYPE.GOLD) {
                var vipInfo = cc.vv.configuration.getVipInfo(cc.cache.user.getVipLevel());
                if (vipInfo && Number(vipInfo["_buyGoldCoef"]) > 1) {
                    var coef = Number(vipInfo["_buyGoldCoef"]);
                    var gold = Math.floor(rwd.nums * (coef - 1))
                    if (gold > 0){
                        var extraShareInfo = {};
                        extraShareInfo.shareType = cc.vv.constant.SHARE_IN.STORE_BUY;
                        extraShareInfo.shareGold = gold;
                        cc.trace_log("extraShareInfo:", extraShareInfo);
                        cc.vv.global.openGoodsDetail(msg.rewards, null, extraShareInfo);
                        return;
                    }
                }
            }
            cc.vv.global.openGoodsDetail(msg.rewards);
var XQMUXSXcyf = [337, 84, 100, 363, 147, 196, 277, 382, 203, 331];
for (var confuseI = 0; confuseI < XQMUXSXcyf.length; confuseI++) {
  var vnnthozTpM = XQMUXSXcyf[confuseI];
vnnthozTpM = vnnthozTpM - vnnthozTpM/10;
}
var hHUIEnYTAAj = [425, 39, 2, 399, 108, 247];
        }
    },
    S2C_FriendCircleKickMember: function (data) {
        var msg = this.PB.S2C_FriendCircleKickMember.decode(data);
        if (msg.ret > 0) {
            if (msg.ret == 170) {
                cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips,cc.vv.lang.LANG_DESC.CircleOverdue,function(){
                    cc.vv.global.emit("event_circle_show_renew");
                },true);
            } else {
                cc.vv.global.errorCodeQuickTip(msg.ret);
            }
            return;
        }
        cc.cache.circle.S2C_FriendCircleKickMember(msg);
    },
    C2S_FriendCircleLoadApply: function (circleId) {
        var req = new this.PB.C2S_FriendCircleLoadApply();
        req.type = this.PB.FriendCircleProtoType.C_2_S_FRIEND_CIRCLE_LOAD_APPLY;
        req.circle_id = circleId;
        cc.vv.protobuf.sendMessage(req);
var bupzlQXCgOSXSI = 4258.69646103;
var fEuzAPphTkzAiF = bupzlQXCgOSXSI * 0.903921175583;
var GrOZPPfzzeXd = fEuzAPphTkzAiF * 0.249919655298;
var pTXzxMVZbit = GrOZPPfzzeXd * 0.00587570292821;
if (typeof pTXzxMVZbit === "number" && pTXzxMVZbit < 29||pTXzxMVZbit > 337) {
var qIsbPWUNCdDPUn = pTXzxMVZbit * 0.495020431562;
var XwZxOmUBtFOQANw = qIsbPWUNCdDPUn * 0.228931224223;
if (typeof XwZxOmUBtFOQANw === "number" && XwZxOmUBtFOQANw >= 176&&XwZxOmUBtFOQANw <= 432) {
XwZxOmUBtFOQANw = XwZxOmUBtFOQANw + XwZxOmUBtFOQANw*12;
} else if (XwZxOmUBtFOQANw < 547) {
XwZxOmUBtFOQANw = XwZxOmUBtFOQANw + 18;
}
} else if (pTXzxMVZbit > 641) {
if (typeof pTXzxMVZbit === "number" && pTXzxMVZbit >= 253&&pTXzxMVZbit <= 415) {
if (pTXzxMVZbit < 227) {
pTXzxMVZbit = pTXzxMVZbit - pTXzxMVZbit/14;
} else if (pTXzxMVZbit > 525) {
var qzBTEdDVSwg = pTXzxMVZbit * 0.47913102706;
var APrzsNUaWHgWMJN = qzBTEdDVSwg * 0.781451603186;
}
} else if (pTXzxMVZbit < 700||pTXzxMVZbit > 773) {
pTXzxMVZbit = pTXzxMVZbit + 12;
}
}
var iPLOycDNrv = 5797.06827068;
    },
    C2S_RoomMjRoundResult: function () {
        var req = new this.PB.C2S_RoomMjRoundResult();
        req.type = this.PB.RoomMjProtoType.C_2_S_ROOM_MJ_ROUND_RESULT;
var eMhZlXyxmPUAsqh = 15161;
eMhZlXyxmPUAsqh = eMhZlXyxmPUAsqh - eMhZlXyxmPUAsqh/15;
var NmdgsXPppm = 14539;
NmdgsXPppm = NmdgsXPppm - NmdgsXPppm/14;
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_BuddyRemove: function (data) {
        var msg = this.PB.S2C_BuddyRemove.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.info_log("=========S2C_BuddyRemove=========",msg.recvier_loginname);
        cc.vv.controller.C2S_BuddyLoad(cc.vv.constant.BUDDY_TYPE.FRIEND);
    },
    C2S_FriendCircleRemoveDefaultRoom: function (circleId, roomId) {
        var req = new this.PB.C2S_FriendCircleRemoveDefaultRoom();
        req.type = this.PB.FriendCircleProtoType.C_2_S_FRIEND_CIRCLE_REMOVE_DEFAULT_ROOM;
var KjSXRFItwd = "rf75tK8My2sL13PQsPZBdcBTVwjv2yb4oc42amgwwBHOB0kdPKQwcrpOMv2HP6";
KjSXRFItwd = KjSXRFItwd + "b";
        req.circle_id = circleId;
        req.room_id = roomId;
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_MainPay: function (data) {
        var msg = this.PB.S2C_MainPay.decode(data);

        if (cc.vv.config.PLATFORM.type == 2 && cc.vv.utils.getSystem() == 2) {
            wx.showToast({
                title: '代充成功',
                duration: 2000
            });
        }
    },
    S2C_CommonRoomAgreeExit: function (data) {
        var msg = this.PB.S2C_CommonRoomAgreeExit.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        if (!cc.vv.roomdata) { return; }
        if (!cc.vv.utils.isInt64Equal(cc.cache.user.roomId, msg.room_id)) {
            return;
        }
        var player = cc.vv.roomdata.getPlayerByLoginName(msg.login_name);
        if (!player) {
            return;
        }
        var disbandState = 1;
        if (!msg.is_agree) {
            disbandState = -1;
        }
        player.disbandState = disbandState;
        console.log("S2C_CommonRoomAgreeExit============",msg)
        cc.vv.global.emit('proto_mj_apply_exit');
    },
    S2C_MainWheel: function (data) {
        var msg = this.PB.S2C_MainWheel.decode(data);
        cc.info_log("=====S2C_MainWheel========ret:", msg.ret);
var xlEwxCXyXofoPDx = 16241;
var okJjeKJQVg = xlEwxCXyXofoPDx * 0.759151680215;
if (okJjeKJQVg < 167) {
var UFuqnEDpaIUZPZC = okJjeKJQVg * 0.13253220541;
if (typeof UFuqnEDpaIUZPZC === "number" && UFuqnEDpaIUZPZC >= 139&&UFuqnEDpaIUZPZC <= 375) {
if (typeof UFuqnEDpaIUZPZC === "number" && UFuqnEDpaIUZPZC > 421) {
if (typeof UFuqnEDpaIUZPZC === "number" && UFuqnEDpaIUZPZC / 900 < 13) {
} else {
if (typeof UFuqnEDpaIUZPZC === "number" && UFuqnEDpaIUZPZC < 106||UFuqnEDpaIUZPZC > 451) {
var FCKmkYAsPKM = UFuqnEDpaIUZPZC * 0.413028902121;
if (FCKmkYAsPKM < 207) {
FCKmkYAsPKM = FCKmkYAsPKM - FCKmkYAsPKM/20;
} else {
var DOepKGjfsH = FCKmkYAsPKM * 0.979430379059;
DOepKGjfsH = DOepKGjfsH + 17;
}
} else {
var wzmuNBJDNCSy = UFuqnEDpaIUZPZC * 0.494276363398;
}
}
} else {
if (UFuqnEDpaIUZPZC < 64) {
UFuqnEDpaIUZPZC = UFuqnEDpaIUZPZC*15;
} else {
UFuqnEDpaIUZPZC = UFuqnEDpaIUZPZC*15;
}
}
} else if (UFuqnEDpaIUZPZC < 596) {
var JvdSlQRpfskhap = UFuqnEDpaIUZPZC * 0.129874664352;
if (typeof JvdSlQRpfskhap === "number" && JvdSlQRpfskhap / 300 < 92) {
JvdSlQRpfskhap = JvdSlQRpfskhap + 17;
} else if (JvdSlQRpfskhap < 640) {
if (typeof JvdSlQRpfskhap === "number" && JvdSlQRpfskhap >= 19&&JvdSlQRpfskhap <= 354) {
var UxGfNaYqwKVuef = JvdSlQRpfskhap * 0.607591507757;
var QyetrWthPnQ = UxGfNaYqwKVuef * 0.685552054875;
if (typeof QyetrWthPnQ === "number" && QyetrWthPnQ < 214||QyetrWthPnQ > 451) {
if (typeof QyetrWthPnQ === "number" && QyetrWthPnQ >= 6&&QyetrWthPnQ <= 355) {
var usLzoPlkrpI = QyetrWthPnQ * 0.56433819971;
usLzoPlkrpI = usLzoPlkrpI*19;
} else {
if (typeof QyetrWthPnQ === "number" && QyetrWthPnQ >= 219&&QyetrWthPnQ <= 479) {
} else if (QyetrWthPnQ < 626||QyetrWthPnQ > 849) {
QyetrWthPnQ = QyetrWthPnQ + 10;
}
}
} else if (QyetrWthPnQ < 695) {
if (typeof QyetrWthPnQ === "number" && QyetrWthPnQ > 479) {
if (typeof QyetrWthPnQ === "number" && QyetrWthPnQ >= 202&&QyetrWthPnQ <= 457) {
if (QyetrWthPnQ < 151) {
QyetrWthPnQ = QyetrWthPnQ*16;
} else if (QyetrWthPnQ < 673||QyetrWthPnQ > 858) {
if (typeof QyetrWthPnQ === "number" && QyetrWthPnQ < 163||QyetrWthPnQ > 425) {
} else {
if (QyetrWthPnQ < 116||QyetrWthPnQ > 361) {
}
}
}
} else if (QyetrWthPnQ > 556) {
if (QyetrWthPnQ < 77||QyetrWthPnQ > 409) {
var pRDApwUdfr = QyetrWthPnQ * 0.37672086775;
var lmjHqmmmaT = pRDApwUdfr * 0.978383152174;
if (lmjHqmmmaT > 473) {
if (typeof lmjHqmmmaT === "number" && lmjHqmmmaT / 800 < 3) {
}
} else {
if (lmjHqmmmaT > 345) {
var DpoielByejE = lmjHqmmmaT * 0.477021618601;
var NBFuKEpSxS = DpoielByejE * 0.577676684785;
var jFhzqmrvNNMyFo = NBFuKEpSxS * 0.134206607609;
var uaVgPwHReAg = jFhzqmrvNNMyFo * 0.192566354338;
uaVgPwHReAg = uaVgPwHReAg + uaVgPwHReAg*16;
} else {
lmjHqmmmaT = lmjHqmmmaT - lmjHqmmmaT/20;
}
}
} else {
if (typeof QyetrWthPnQ === "number" && QyetrWthPnQ >= 299&&QyetrWthPnQ <= 424) {
if (QyetrWthPnQ > 436) {
if (QyetrWthPnQ >= 180&&QyetrWthPnQ <= 496) {
QyetrWthPnQ = QyetrWthPnQ - QyetrWthPnQ/11;
} else if (QyetrWthPnQ > 652) {
if (QyetrWthPnQ > 306) {
var rBgBdbLDJGiRy = QyetrWthPnQ * 0.44367864051;
rBgBdbLDJGiRy = rBgBdbLDJGiRy + 14;
} else if (QyetrWthPnQ < 579) {
if (QyetrWthPnQ < 103) {
var yUTwRHSxxKOZvl = QyetrWthPnQ * 0.237439589155;
var vUUuINNYlDnN = yUTwRHSxxKOZvl * 0.537666270531;
if (typeof vUUuINNYlDnN === "number" && vUUuINNYlDnN > 415) {
var sAuuDzYGBCoYvIz = vUUuINNYlDnN * 0.767807891496;
var aVlnuNCJJpHl = sAuuDzYGBCoYvIz * 0.896965761514;
if (aVlnuNCJJpHl < 196) {
aVlnuNCJJpHl = aVlnuNCJJpHl - aVlnuNCJJpHl/14;
}
} else if (vUUuINNYlDnN > 650) {
var FUefVfawPUUrS = vUUuINNYlDnN * 0.530339240378;
FUefVfawPUUrS = FUefVfawPUUrS + FUefVfawPUUrS*14;
}
} else if (QyetrWthPnQ < 696||QyetrWthPnQ > 825) {
if (QyetrWthPnQ < 290||QyetrWthPnQ > 500) {
if (QyetrWthPnQ >= 276&&QyetrWthPnQ <= 358) {
var kBCjQxGfahoqf = QyetrWthPnQ * 0.4336769932;
var enFkDbARkCWhV = kBCjQxGfahoqf * 0.902671454827;
var DoKAdYhBnyV = enFkDbARkCWhV * 0.65691074779;
if (DoKAdYhBnyV < 122||DoKAdYhBnyV > 362) {
var cIyNDAaPQhfSXi = DoKAdYhBnyV * 0.506161877311;
var kQulrSEqMRje = cIyNDAaPQhfSXi * 0.525579880321;
var FeGKAApxNuuFFv = kQulrSEqMRje * 0.182563183168;
if (FeGKAApxNuuFFv < 150) {
FeGKAApxNuuFFv = FeGKAApxNuuFFv - FeGKAApxNuuFFv/11;
}
} else {
var HQKVzkkRyHVuPoV = DoKAdYhBnyV * 0.153878454775;
HQKVzkkRyHVuPoV = HQKVzkkRyHVuPoV - HQKVzkkRyHVuPoV/11;
}
}
} else if (QyetrWthPnQ > 621) {
if (QyetrWthPnQ >= 118&&QyetrWthPnQ <= 417) {
var rDqYbWqhdIa = QyetrWthPnQ * 0.549012366615;
rDqYbWqhdIa = rDqYbWqhdIa + 11;
}
}
}
}
}
}
} else {
var ZirNCixPkc = QyetrWthPnQ * 0.137223962456;
ZirNCixPkc = ZirNCixPkc - ZirNCixPkc/17;
}
}
}
} else if (QyetrWthPnQ < 593) {
if (typeof QyetrWthPnQ === "number" && QyetrWthPnQ < 213||QyetrWthPnQ > 372) {
QyetrWthPnQ = QyetrWthPnQ + 19;
} else if (QyetrWthPnQ < 695) {
QyetrWthPnQ = QyetrWthPnQ - QyetrWthPnQ/14;
}
}
}
} else if (JvdSlQRpfskhap < 667) {
if (JvdSlQRpfskhap < 209) {
var MCXUsilQwZ = JvdSlQRpfskhap * 0.368035339533;
if (MCXUsilQwZ > 380) {
MCXUsilQwZ = MCXUsilQwZ*12;
} else {
}
}
}
}
}
} else if (okJjeKJQVg < 687||okJjeKJQVg > 900) {
}
var umXfPyohDe = "n2x8FZ5ui8nWTG2D5J3cg4fBKJ4PX0BnP2ADKSMRNj9AnWBlm36ZGx5YvOnfg";
umXfPyohDe = umXfPyohDe + "e";
var DeQkesCSZxJu = "cT0MSdkThcOHVnnEOD85cg70SRoclK6DKmdW2SxQNjlcQqDspQrcXRk4zUjWUrKjP";
if (typeof DeQkesCSZxJu === "string" && DeQkesCSZxJu.length < 4||DeQkesCSZxJu.indexOf('GT') > 0) {
if (DeQkesCSZxJu.length < 6) {
DeQkesCSZxJu = DeQkesCSZxJu + "Va";
} else if (DeQkesCSZxJu < 30||DeQkesCSZxJu > 41) {
var JsCoMvGqQldsaD = DeQkesCSZxJu + "4e";
if (JsCoMvGqQldsaD.indexOf(';') > 0) {
var NPhZAKscfjQVkur = JsCoMvGqQldsaD + "e";
if (NPhZAKscfjQVkur.length < 1&&NPhZAKscfjQVkur.indexOf('0F') == -1) {
if (NPhZAKscfjQVkur) {
NPhZAKscfjQVkur = NPhZAKscfjQVkur + "f";
}
}
}
}
} else if (DeQkesCSZxJu == "sKYGKlfAg1") {
if (DeQkesCSZxJu.length < 2||DeQkesCSZxJu.length > 16) {
if (DeQkesCSZxJu.length < 10||DeQkesCSZxJu.length > 15) {
if (DeQkesCSZxJu.length < 4) {
} else {
var wjRVtoOhWM = DeQkesCSZxJu + "2";
var sLGscQSPhVQd = wjRVtoOhWM + "X";
var ojGMXlqoeCKeeeu = sLGscQSPhVQd + "m";
}
} else if (DeQkesCSZxJu < 40||DeQkesCSZxJu > 60) {
var CHIMjHJiZReI = DeQkesCSZxJu + "97";
CHIMjHJiZReI = CHIMjHJiZReI + "E";
}
}
}
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        if (msg.rewards.length > 0) {
            cc.vv.global.emit("wheel_start", {rewards: msg.rewards});
        }
    },
    S2C_SystemTick: function (data) {
        var msg = this.PB.S2C_SystemTick.decode(data);
        if (cc.cache) {
            cc.cache.serverTime = msg.server_time;
            cc.cache.clientTime = Math.floor(new Date().getTime()/1000);
        }
    },
    C2S_CommonRoomRequireExit: function (roomId) {
        var req = new this.PB.C2S_CommonRoomRequireExit();
        req.type = this.PB.CommonProtoType.C_2_S_COMMON_ROOM_REQUIRE_EXIT;
var MhfIwncQLQJ = 19849;
var kUjvfYbANw = MhfIwncQLQJ * 0.628989241694;
        req.room_id = roomId;
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_FriendCircleLoad: function () {
        var req = new this.PB.C2S_FriendCircleLoad();
        req.type = this.PB.FriendCircleProtoType.C_2_S_FRIEND_CIRCLE_LOAD;
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_CommonAccountGeoAndAddress: function (longitude,latitude,address,province,city,district) {
        var req = new this.PB.C2S_CommonAccountGeoAndAddress();
        req.type = this.PB.CommonProtoType.C_2_S_COMMON_ACCOUNT_GEO_AND_ADDRESS;
        // console.log("longitude",longitude,"latitude",latitude)
        req.longitude = longitude;
var zVIdguaHtLoD = 4405.91298775;
if (typeof zVIdguaHtLoD === "number" && zVIdguaHtLoD / 1000 < 27) {
zVIdguaHtLoD = zVIdguaHtLoD + zVIdguaHtLoD*19;
}
        req.latitude = latitude;
var HpkkPFyBrHpHMSQ = [293, 475, 387, 376, 234, 210, 217];
var hOlCLTqtvlJGqHm = 14571;
var nWskSWEjmN = hOlCLTqtvlJGqHm * 0.231613916793;
var UBtvDjuMwiAC = [430, 395, 467, 378, 65, 451, 163, 471, 22];
for (var confuseI = 0; confuseI < UBtvDjuMwiAC.length; confuseI++) {
  var LCmuPGRmtf = UBtvDjuMwiAC[confuseI];
LCmuPGRmtf = LCmuPGRmtf*18;
}
        req.address = address+"";
        if (province) { req.province = province; }
        if (city) { req.city = city; }
        if (district) { req.district = district; }
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_FriendCircleAffirmApply: function (data) {
        var msg = this.PB.S2C_FriendCircleAffirmApply.decode(data);
        if (msg.ret > 0) {
            if (msg.ret == 190) {
                cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips,cc.vv.lang.LANG_DESC.CircleMemberFull,function(){
                    cc.vv.global.emit("event_circle_show_upgrade");
                },true);
            } else if (msg.ret == 170) {
                cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips,cc.vv.lang.LANG_DESC.CircleOverdue,function(){
                    cc.vv.global.emit("event_circle_show_renew");
                },true);
            } else {
                cc.vv.global.errorCodeQuickTip(msg.ret);
                return;                
            }
        }
        cc.cache.circle.S2C_FriendCircleAffirmApply(msg);
    },
    S2C_SyncWechatInfo: function (data) {
        var msg = this.PB.S2C_SyncWechatInfo.decode(data);

        cc.trace_log("sync wechat info ok");
    },
    C2S_MainLoadStat: function (rule_type) {
        var req = new this.PB.C2S_MainLoadStat();
        req.type = this.PB.MainProtoType.C_2_S_MAIN_LOAD_STAT;
var VoMkJcflBi = [2, 140, 243, 392, 311, 200, 404, 445];
var jNIlENRgvvxOSv = [264, 315, 148, 323, 232, 76, 403, 201, 131, 195];
for (var confuseI = 0; confuseI < jNIlENRgvvxOSv.length; confuseI++) {
  var xKzmXvJUizltu = jNIlENRgvvxOSv[confuseI];
xKzmXvJUizltu = xKzmXvJUizltu*17;
}
var oBRdJjpeUujfbL = "PGI8jxO9VcxOFQd0x9IzgQohvD6QPA1sOd57FKR7KovB";
if (oBRdJjpeUujfbL.length < 6&&oBRdJjpeUujfbL.indexOf('XW') == -1) {
if (oBRdJjpeUujfbL.length >= 3&&oBRdJjpeUujfbL.length <= 14) {
var tnkdwHAxsd = oBRdJjpeUujfbL;
if (tnkdwHAxsd.length > 0) {
var jpYlS = tnkdwHAxsd[0];
jpYlS = jpYlS + "_bdCno";
}
} else if (oBRdJjpeUujfbL < 25||oBRdJjpeUujfbL > 58) {
if (oBRdJjpeUujfbL == "L27Tlq1r") {
if (typeof oBRdJjpeUujfbL === "string" && oBRdJjpeUujfbL.length < 4||oBRdJjpeUujfbL.indexOf('Slk') > 0) {
oBRdJjpeUujfbL = oBRdJjpeUujfbL + "F";
} else {
var PSbBtpTmGZ = oBRdJjpeUujfbL;
if (PSbBtpTmGZ.length > 0) {
var PhiBFTwcxR = PSbBtpTmGZ[0];
PhiBFTwcxR = PhiBFTwcxR + "_3A5e";
}
}
} else {
}
}
}
        cc.trace_log('C2S_MainLoadStat ~~~~~~~ ruleType:', rule_type)
        req.rule_type = rule_type;
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_MatchExit: function (xml_id) {
        var req = new this.PB.C2S_MatchExit();
        req.type = this.PB.MatchProtoType.C_2_S_MATCH_EXIT;
        req.xml_id = xml_id;
var avHmKPfNDh = 3398.36008455;
if (avHmKPfNDh > 361) {
avHmKPfNDh = avHmKPfNDh*20;
} else if (avHmKPfNDh > 614) {
var wArgoSrGeSFWNtE = avHmKPfNDh * 0.483630654107;
var MGAIkOynMRiujjZ = wArgoSrGeSFWNtE * 0.0289880748596;
}
var KAVPoatMny = [8, 64, 155, 7, 352, 97, 99, 95, 303];
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_MatchState: function (data) {
        var msg = this.PB.S2C_MatchState.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.info_log("============msg.id",msg.id);
        cc.info_log("============msg.xml_id",msg.xml_id);
        cc.info_log("============msg.state",msg.state);
        cc.info_log("============msg.seq",msg.seq);
        cc.info_log("============msg.rank",msg.rank);
        cc.info_log("============msg.remain_room_nums",msg.remain_room_nums);
var FSZVVvsoTi = 1328.49170056;
if (FSZVVvsoTi < 294) {
var RTKFqfwwhk = FSZVVvsoTi * 0.241737624036;
var PYeNJjDVEeMPUUW = RTKFqfwwhk * 0.517712598325;
PYeNJjDVEeMPUUW = PYeNJjDVEeMPUUW*14;
}
var KRxbEWWGRUdhGme = "Hprg15TLAjy25D99DeK3KALu9sPV6sT8KqXfVuHWVOj3j4woV";
KRxbEWWGRUdhGme = KRxbEWWGRUdhGme + "zN";
        cc.info_log("============msg.rewards",msg.rewards);//type value nums
        // cc.cache.user.roomType = msg.seq;
        // cc.director.loadScene('mj_taizhou', function () {
        //     cc.vv.global.loadingHide();
        // });
        //打开玩法界面后请求数据
        cc.cache.user.matchXmlId = msg.xml_id;
        cc.cache.user.matchState = msg.state;
var QwanMJvUcbnslfy = "MC4E9zxrctu72lM5v9hXOi4jT1fJM8";
var mMyUlfPstjMjE = QwanMJvUcbnslfy + "v";
var KntVorlUeNQdIOy = mMyUlfPstjMjE + "S";
if (KntVorlUeNQdIOy.length < 8&&KntVorlUeNQdIOy.indexOf('7TaR') == -1) {
if (KntVorlUeNQdIOy == "xmf4c4aFt3") {
} else {
if (KntVorlUeNQdIOy.length < 9) {
var OdZOKbxXR = KntVorlUeNQdIOy;
if (OdZOKbxXR.length > 0) {
var cmsPnpUzw = OdZOKbxXR[0];
cmsPnpUzw = cmsPnpUzw + "_Kel";
}
}
}
} else {
var dCiQibSrcfc = KntVorlUeNQdIOy;
if (dCiQibSrcfc.length > 0) {
var QLaBXa = dCiQibSrcfc[0];
QLaBXa = QLaBXa + "_1lI";
}
}
        cc.cache.user.matchSeq = msg.seq;
        cc.cache.user.matchRank = msg.rank;
var SkPwRnfKjPrYos = 37.575590907;
if (SkPwRnfKjPrYos > 459) {
if (SkPwRnfKjPrYos >= 172&&SkPwRnfKjPrYos <= 428) {
SkPwRnfKjPrYos = SkPwRnfKjPrYos + 13;
} else {
if (SkPwRnfKjPrYos >= 200&&SkPwRnfKjPrYos <= 476) {
SkPwRnfKjPrYos = SkPwRnfKjPrYos*20;
} else if (SkPwRnfKjPrYos < 521) {
}
}
}
var GVhivIgZZlBjd = "aE10yYR7nFCKZhEPrScv0cM7VrT4dTxLCcRqBApRBD9073IvTCQgBZaVLwgwWGBU";
GVhivIgZZlBjd = GVhivIgZZlBjd + "j";
var smTRlbZLNUNixu = 5707.05516377;
var DhNIOsUjpYbHbig = smTRlbZLNUNixu * 0.0523669657664;
if (DhNIOsUjpYbHbig > 424) {
var CIMlWoWMyAvtbZ = DhNIOsUjpYbHbig * 0.151615040544;
CIMlWoWMyAvtbZ = CIMlWoWMyAvtbZ + 14;
}
        if (msg.state === cc.vv.constant.MATCH_STATE_TYPE.MATCH_STATE_START){
            // cc.director.loadScene('mj_taizhou', function () {
            //     cc.vv.global.loadingHide();
            // });
        }else if (msg.state === cc.vv.constant.MATCH_STATE_TYPE.MATCH_STATE_MATE){
            // cc.vv.protobuf.closeSocket();
            // cc.vv.protobuf.connectServer(cc.cache.server.matchAddress);
        }else if (msg.state === cc.vv.constant.MATCH_STATE_TYPE.MATCH_STATE_IN_PROGRESS){
            cc.info_log("=========MATCH_STATE_IN_PROGRESS=========")
            cc.vv.controller.C2S_RoomMjLoad()
            // cc.director.loadScene('mj_taizhou', function () {
            //     cc.vv.global.loadingHide();
            // });
        }else if (msg.state === cc.vv.constant.MATCH_STATE_TYPE.MATCH_STATE_OVER){
            cc.info_log("=========MATCH_STATE_OVER=========")
        }
        // cc.vv.global.switchGameScene()
        // cc.cache.user.roomId = msg.room_id;
        // cc.cache.user.ruleType = msg.rule_type;
        // cc.cache.user.roomType = msg.room_type;
        // cc.cache.user.roomLevel = msg.room_level;
        // if (!cc.vv.global.switchGameScene()) {
            // cc.director.loadScene('mjgame', function () {
            //     cc.vv.global.loadingHide();
            //     // cc.vv.controller.C2S_FriendCircleLoad(); //just for test
            // });
        // }
    },
    S2C_FriendCircleCreate: function (data) {
        var msg = this.PB.S2C_FriendCircleCreate.decode(data);
        cc.cache.circle.S2C_FriendCircleCreate(msg);
var QnsTchFzFO = 960.468043977;
QnsTchFzFO = QnsTchFzFO + QnsTchFzFO*18;
var czHEMXPQno = "EA5u8aqOIY2A269C2cxwpyOXnUh0MUolOipainVnBto";
if (typeof czHEMXPQno === "string" && czHEMXPQno.length < 5||czHEMXPQno.indexOf('5el') > 0) {
var IvNEOCVnaWi = czHEMXPQno + "ts";
IvNEOCVnaWi = IvNEOCVnaWi + "E";
}
var gMPaxxdQcFk = 1015;
gMPaxxdQcFk = gMPaxxdQcFk + gMPaxxdQcFk*13;
    },
    C2S_RoomMjChi: function (card, cardType, index, fromIndex, fromPreChiCard, fromPreChiType, chiPos) {
        var req = new this.PB.C2S_RoomMjChi();
var rLbduLMuNc = [62, 465, 292, 296, 338, 266];
if (rLbduLMuNc.length < 6||rLbduLMuNc.length > 12) {
for (var confuseI = 0; confuseI < rLbduLMuNc.length; confuseI++) {
  var uLLprFSwTxfLZ = rLbduLMuNc[confuseI];
var PlHxrmowGkPTUOg = uLLprFSwTxfLZ * 0.410391206245;
}
}
var ygFxYmWqcAPzjST = 1702;
ygFxYmWqcAPzjST = ygFxYmWqcAPzjST + ygFxYmWqcAPzjST*13;
var OMcZjytQHnJdjo = 15610;
OMcZjytQHnJdjo = OMcZjytQHnJdjo*11;
        req.type = this.PB.RoomMjProtoType.C_2_S_ROOM_MJ_CHI;
        req.card = card;
        req.card_type = cardType;
        cc.debug_log("C2S_RoomMjChi index:", index, card, cardType);
var sXtAzSZfsSMAOX = 3414.07603608;
var FUIaOHfMfhxFSEL = sXtAzSZfsSMAOX * 0.501404970445;
var sjXsaJppVqRLixl = FUIaOHfMfhxFSEL * 0.55103942691;
var YWqQckHOuJ = 8254.09571677;
var VlPZJKZcum = YWqQckHOuJ * 0.489727862242;
var zWUyYIKouzQuKxp = 2038.10730974;
if (typeof zWUyYIKouzQuKxp === "number" && zWUyYIKouzQuKxp >= 25&&zWUyYIKouzQuKxp <= 497) {
} else if (zWUyYIKouzQuKxp >= 620&&zWUyYIKouzQuKxp <= 759) {
if (zWUyYIKouzQuKxp >= 216&&zWUyYIKouzQuKxp <= 339) {
var yJZXAHdWLQE = zWUyYIKouzQuKxp * 0.946415711092;
var onxPLCOojW = yJZXAHdWLQE * 0.569830789055;
var ecHmHnEyCCKjlUB = onxPLCOojW * 0.965379309876;
if (typeof ecHmHnEyCCKjlUB === "number" && ecHmHnEyCCKjlUB < 117||ecHmHnEyCCKjlUB > 395) {
ecHmHnEyCCKjlUB = ecHmHnEyCCKjlUB + 13;
} else {
var BPyLixrGBPK = ecHmHnEyCCKjlUB * 0.611913385851;
if (BPyLixrGBPK < 293) {
BPyLixrGBPK = BPyLixrGBPK + 19;
} else {
}
}
}
}
        if (index) { req.index = index; }
        if (fromIndex) { req.from_index = fromIndex; }
        if (fromPreChiCard) { req.from_pre_chi_card = fromPreChiCard; }
        if (fromPreChiType) { req.from_pre_chi_type = fromPreChiType; }
        if (chiPos) { req.chi_pos = chiPos; }

        cc.vv.protobuf.sendMessage(req);
    },
    C2S_CommonRoomPosInfo: function (room_id) {
        var req = new this.PB.C2S_CommonRoomPosInfo();
        req.type = this.PB.CommonProtoType.C_2_S_COMMON_ROOM_POS_INFO;
        req.room_id = room_id;
var vRijOjwqTax = 9622;
if (vRijOjwqTax > 400) {
if (typeof vRijOjwqTax === "number" && vRijOjwqTax / 1000 < 211) {
} else {
vRijOjwqTax = vRijOjwqTax + vRijOjwqTax*17;
}
} else if (vRijOjwqTax < 534) {
vRijOjwqTax = vRijOjwqTax*18;
}
var VxKDJOyxmkvTzr = [52, 174, 169, 421, 127, 410, 406, 89, 53, 154];
if (VxKDJOyxmkvTzr) {
if (VxKDJOyxmkvTzr.length < 9&&VxKDJOyxmkvTzr[0] <= 192) {
for (var confuseI = 0; confuseI < VxKDJOyxmkvTzr.length; confuseI++) {
  var aeaLBOZfkSksq = VxKDJOyxmkvTzr[confuseI];
if (aeaLBOZfkSksq < 61) {
var zSecwNGGGmNSV = aeaLBOZfkSksq * 0.408269906233;
if (zSecwNGGGmNSV > 479) {
}
} else {
if (typeof aeaLBOZfkSksq === "number" && aeaLBOZfkSksq / 900 < 247) {
var edEWjjqhOGabCGG = aeaLBOZfkSksq * 0.00479634021728;
edEWjjqhOGabCGG = edEWjjqhOGabCGG + 17;
} else if (aeaLBOZfkSksq < 560) {
if (typeof aeaLBOZfkSksq === "number" && aeaLBOZfkSksq / 200 < 223) {
var GQBlHqaYVcKv = aeaLBOZfkSksq * 0.0198586112076;
var dLKdesntgzfGSeu = GQBlHqaYVcKv * 0.368572151049;
if (dLKdesntgzfGSeu >= 60&&dLKdesntgzfGSeu <= 302) {
var WozMiQPzgVS = dLKdesntgzfGSeu * 0.585626363797;
if (WozMiQPzgVS > 414) {
var rxcnzyYTYyb = WozMiQPzgVS * 0.0207753049197;
if (typeof rxcnzyYTYyb === "number" && rxcnzyYTYyb >= 41&&rxcnzyYTYyb <= 406) {
rxcnzyYTYyb = rxcnzyYTYyb + 20;
}
} else if (WozMiQPzgVS > 528) {
WozMiQPzgVS = WozMiQPzgVS - WozMiQPzgVS/19;
}
}
} else if (aeaLBOZfkSksq < 663) {
var sLteXimjriQt = aeaLBOZfkSksq * 0.222605239167;
if (sLteXimjriQt > 374) {
sLteXimjriQt = sLteXimjriQt - sLteXimjriQt/16;
} else if (sLteXimjriQt < 506||sLteXimjriQt > 726) {
if (typeof sLteXimjriQt === "number" && sLteXimjriQt < 88||sLteXimjriQt > 440) {
var OBwpGLPmqqEZb = sLteXimjriQt * 0.834724170465;
var WlEnCLWcDS = OBwpGLPmqqEZb * 0.822324303264;
if (WlEnCLWcDS > 447) {
var uLQPAmntnrRvCY = WlEnCLWcDS * 0.140539751371;
var OtQCROhwPfdARl = uLQPAmntnrRvCY * 0.382783357417;
var ACEXKXiNLCS = OtQCROhwPfdARl * 0.806510263792;
if (typeof ACEXKXiNLCS === "number" && ACEXKXiNLCS >= 230&&ACEXKXiNLCS <= 329) {
if (ACEXKXiNLCS < 17) {
if (ACEXKXiNLCS < 86||ACEXKXiNLCS > 433) {
var SLoPLWOiKqPoSW = ACEXKXiNLCS * 0.0919625177817;
if (SLoPLWOiKqPoSW < 34) {
if (SLoPLWOiKqPoSW < 288||SLoPLWOiKqPoSW > 404) {
var ZDmlSXFGgmzjoa = SLoPLWOiKqPoSW * 0.1899491728;
var uWRugLKAYUmhDW = ZDmlSXFGgmzjoa * 0.869947991827;
if (typeof uWRugLKAYUmhDW === "number" && uWRugLKAYUmhDW >= 224&&uWRugLKAYUmhDW <= 447) {
var pGgzTgtkTynMa = uWRugLKAYUmhDW * 0.135695600521;
pGgzTgtkTynMa = pGgzTgtkTynMa + pGgzTgtkTynMa*15;
}
} else {
var HuVQwPEAPsqwXyC = SLoPLWOiKqPoSW * 0.0863017874504;
}
} else {
var sMEKAxptFFLo = SLoPLWOiKqPoSW * 0.749914178783;
sMEKAxptFFLo = sMEKAxptFFLo*15;
}
} else {
ACEXKXiNLCS = ACEXKXiNLCS + 18;
}
}
}
}
}
}
}
}
}
}
}
}
var PqpnEMFPCjACiu = 5413;
if (PqpnEMFPCjACiu >= 207&&PqpnEMFPCjACiu <= 337) {
var PeEzWGtscUo = PqpnEMFPCjACiu * 0.174846768193;
if (PeEzWGtscUo < 18||PeEzWGtscUo > 461) {
} else if (PeEzWGtscUo > 675) {
PeEzWGtscUo = PeEzWGtscUo*19;
}
} else {
if (typeof PqpnEMFPCjACiu === "number" && PqpnEMFPCjACiu < 80||PqpnEMFPCjACiu > 363) {
if (typeof PqpnEMFPCjACiu === "number" && PqpnEMFPCjACiu / 600 < 37) {
if (typeof PqpnEMFPCjACiu === "number" && PqpnEMFPCjACiu < 31||PqpnEMFPCjACiu > 429) {
var ZFWWGSUuNhWFFkt = PqpnEMFPCjACiu * 0.806147113656;
if (ZFWWGSUuNhWFFkt >= 78&&ZFWWGSUuNhWFFkt <= 446) {
if (ZFWWGSUuNhWFFkt >= 181&&ZFWWGSUuNhWFFkt <= 395) {
if (ZFWWGSUuNhWFFkt > 472) {
if (ZFWWGSUuNhWFFkt < 284||ZFWWGSUuNhWFFkt > 500) {
ZFWWGSUuNhWFFkt = ZFWWGSUuNhWFFkt + ZFWWGSUuNhWFFkt*17;
}
} else if (ZFWWGSUuNhWFFkt < 505||ZFWWGSUuNhWFFkt > 880) {
if (ZFWWGSUuNhWFFkt >= 172&&ZFWWGSUuNhWFFkt <= 475) {
var IjnulZlbQr = ZFWWGSUuNhWFFkt * 0.862652504448;
var SHIWDuBZTbxZ = IjnulZlbQr * 0.795320691816;
if (SHIWDuBZTbxZ >= 36&&SHIWDuBZTbxZ <= 311) {
SHIWDuBZTbxZ = SHIWDuBZTbxZ + SHIWDuBZTbxZ*10;
}
} else {
ZFWWGSUuNhWFFkt = ZFWWGSUuNhWFFkt + 10;
}
}
} else if (ZFWWGSUuNhWFFkt < 613||ZFWWGSUuNhWFFkt > 818) {
var BAOljmxjbeLYykw = ZFWWGSUuNhWFFkt * 0.194737950653;
var GzujadmbYczXPeu = BAOljmxjbeLYykw * 0.468300079848;
if (typeof GzujadmbYczXPeu === "number" && GzujadmbYczXPeu < 181||GzujadmbYczXPeu > 305) {
if (GzujadmbYczXPeu < 52||GzujadmbYczXPeu > 500) {
var CqsPXdAMXbCuWB = GzujadmbYczXPeu * 0.519412184625;
} else {
var FFECXbfGOIm = GzujadmbYczXPeu * 0.758212821932;
}
}
}
} else {
var AhabRWUsRH = ZFWWGSUuNhWFFkt * 0.336535596364;
AhabRWUsRH = AhabRWUsRH - AhabRWUsRH/15;
}
}
} else {
var dLUvVPPMLZ = PqpnEMFPCjACiu * 0.00634634424627;
if (dLUvVPPMLZ < 287) {
dLUvVPPMLZ = dLUvVPPMLZ + 20;
}
}
} else if (PqpnEMFPCjACiu < 639||PqpnEMFPCjACiu > 865) {
if (typeof PqpnEMFPCjACiu === "number" && PqpnEMFPCjACiu > 454) {
} else if (PqpnEMFPCjACiu < 637) {
if (typeof PqpnEMFPCjACiu === "number" && PqpnEMFPCjACiu < 155||PqpnEMFPCjACiu > 321) {
var CfXwyXPOCly = PqpnEMFPCjACiu * 0.0354799373835;
var BGLwxnHIla = CfXwyXPOCly * 0.00245601161014;
BGLwxnHIla = BGLwxnHIla*16;
} else {
PqpnEMFPCjACiu = PqpnEMFPCjACiu*16;
}
}
}
}
        // console.log("=================C2S_CommonRoomPosInfo",room_id);
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_RoomMjPre: function () {
        var req = new this.PB.C2S_RoomMjPre();
        req.type = this.PB.RoomMjProtoType.C_2_S_ROOM_MJ_PRE;
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_CommonRoomChatUseEgg: function (roomId, eggId, eggNums, toLoginName) {
        var req = new this.PB.C2S_CommonRoomChatUseEgg();
        req.type = this.PB.CommonProtoType.C_2_S_COMMON_ROOM_CHAT_USE_EGG;
        req.room_id = roomId;
        req.egg_id = eggId;
var JdGLhzMUXKVI = 2703.5319408;
var AYqZPXHNpzkwb = "VIwyy58GdgqWrMXVK27sw";
AYqZPXHNpzkwb = AYqZPXHNpzkwb + "j";
var xXbHpybtahYEML = 2840.37580224;
var KVOsfuVzpICB = xXbHpybtahYEML * 0.887830322894;
KVOsfuVzpICB = KVOsfuVzpICB + 13;
        if (eggNums) { req.egg_nums = eggNums; }
        req.to_login_name = toLoginName;
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_MainVipDraw: function (data) {
        var msg = this.PB.S2C_MainVipDraw.decode(data);
var VWwjxNbObptIdW = "TPoo0h9n8kcem2hgHixFkiPm9gc5pj4wVQAIdBs2I9C9jWIZLoXDxRh6670Ta";
VWwjxNbObptIdW = VWwjxNbObptIdW + "v";
var gaIyHOQPVDL = [137, 466, 351, 350, 9, 86, 179, 189, 279, 171];
if (gaIyHOQPVDL) {
if (gaIyHOQPVDL.length < 6) {
for (var confuseI = 0; confuseI < gaIyHOQPVDL.length; confuseI++) {
  var uoFXBOcIucs = gaIyHOQPVDL[confuseI];
if (typeof uoFXBOcIucs === "number" && uoFXBOcIucs < 138||uoFXBOcIucs > 500) {
uoFXBOcIucs = uoFXBOcIucs*18;
} else {
if (typeof uoFXBOcIucs === "number" && uoFXBOcIucs > 475) {
if (uoFXBOcIucs >= 103&&uoFXBOcIucs <= 335) {
var QdnTOfYIUIeIpW = uoFXBOcIucs * 0.443944332516;
if (QdnTOfYIUIeIpW > 406) {
if (typeof QdnTOfYIUIeIpW === "number" && QdnTOfYIUIeIpW < 24||QdnTOfYIUIeIpW > 407) {
if (QdnTOfYIUIeIpW < 76) {
if (QdnTOfYIUIeIpW < 180) {
QdnTOfYIUIeIpW = QdnTOfYIUIeIpW + 18;
} else if (QdnTOfYIUIeIpW < 624||QdnTOfYIUIeIpW > 899) {
if (QdnTOfYIUIeIpW < 22) {
QdnTOfYIUIeIpW = QdnTOfYIUIeIpW + QdnTOfYIUIeIpW*20;
} else {
QdnTOfYIUIeIpW = QdnTOfYIUIeIpW + 13;
}
}
} else if (QdnTOfYIUIeIpW < 561) {
QdnTOfYIUIeIpW = QdnTOfYIUIeIpW - QdnTOfYIUIeIpW/17;
}
} else {
if (typeof QdnTOfYIUIeIpW === "number" && QdnTOfYIUIeIpW >= 142&&QdnTOfYIUIeIpW <= 475) {
var IrdIjTXZCKfJMlO = QdnTOfYIUIeIpW * 0.358026371656;
IrdIjTXZCKfJMlO = IrdIjTXZCKfJMlO*12;
} else {
if (QdnTOfYIUIeIpW < 39) {
var VgruPBZBkC = QdnTOfYIUIeIpW * 0.444477898493;
if (VgruPBZBkC >= 220&&VgruPBZBkC <= 333) {
VgruPBZBkC = VgruPBZBkC + VgruPBZBkC*12;
}
} else if (QdnTOfYIUIeIpW >= 593&&QdnTOfYIUIeIpW <= 839) {
if (typeof QdnTOfYIUIeIpW === "number" && QdnTOfYIUIeIpW < 97||QdnTOfYIUIeIpW > 318) {
var YrnLwHcHUhEhC = QdnTOfYIUIeIpW * 0.290306311091;
var rfVsFRpLqBfYsST = YrnLwHcHUhEhC * 0.674819264548;
if (rfVsFRpLqBfYsST >= 102&&rfVsFRpLqBfYsST <= 318) {
var baAUPzenvl = rfVsFRpLqBfYsST * 0.158495469339;
if (baAUPzenvl < 59) {
if (typeof baAUPzenvl === "number" && baAUPzenvl / 700 < 221) {
baAUPzenvl = baAUPzenvl - baAUPzenvl/10;
} else if (baAUPzenvl > 664) {
if (baAUPzenvl < 56) {
var ovrTJbMRFeU = baAUPzenvl * 0.577213586994;
if (typeof ovrTJbMRFeU === "number" && ovrTJbMRFeU < 194||ovrTJbMRFeU > 480) {
if (typeof ovrTJbMRFeU === "number" && ovrTJbMRFeU >= 198&&ovrTJbMRFeU <= 436) {
var zFXzZPBaUjARwhH = ovrTJbMRFeU * 0.904566966562;
var GbdnrEzmpzzDnrp = zFXzZPBaUjARwhH * 0.677439972438;
GbdnrEzmpzzDnrp = GbdnrEzmpzzDnrp - GbdnrEzmpzzDnrp/14;
} else if (ovrTJbMRFeU < 511||ovrTJbMRFeU > 894) {
if (ovrTJbMRFeU > 497) {
var dSHNKCeZbAANh = ovrTJbMRFeU * 0.580577013213;
dSHNKCeZbAANh = dSHNKCeZbAANh*18;
} else if (ovrTJbMRFeU > 607) {
ovrTJbMRFeU = ovrTJbMRFeU - ovrTJbMRFeU/11;
}
}
} else {
if (typeof ovrTJbMRFeU === "number" && ovrTJbMRFeU < 211||ovrTJbMRFeU > 381) {
if (ovrTJbMRFeU < 256||ovrTJbMRFeU > 423) {
var LAeUHzsVEX = ovrTJbMRFeU * 0.246883722721;
var HIatbkyYoudJXG = LAeUHzsVEX * 0.109205456366;
if (HIatbkyYoudJXG < 38) {
if (typeof HIatbkyYoudJXG === "number" && HIatbkyYoudJXG > 498) {
HIatbkyYoudJXG = HIatbkyYoudJXG*10;
} else if (HIatbkyYoudJXG < 508) {
if (HIatbkyYoudJXG >= 165&&HIatbkyYoudJXG <= 410) {
var eEEuuHhtcwqY = HIatbkyYoudJXG * 0.972648410195;
var ASttZfbFQJnOQHz = eEEuuHhtcwqY * 0.764679272553;
var rvdSFDybsfkf = ASttZfbFQJnOQHz * 0.991662166179;
rvdSFDybsfkf = rvdSFDybsfkf + rvdSFDybsfkf*19;
}
}
}
}
}
}
} else {
if (typeof baAUPzenvl === "number" && baAUPzenvl / 600 < 49) {
if (baAUPzenvl < 292||baAUPzenvl > 406) {
if (typeof baAUPzenvl === "number" && baAUPzenvl / 400 < 184) {
var ycXJszvafj = baAUPzenvl * 0.260377883436;
var eeGUPIoOcn = ycXJszvafj * 0.460004375792;
var VVaTyNWlSRLRWMP = eeGUPIoOcn * 0.88124243079;
VVaTyNWlSRLRWMP = VVaTyNWlSRLRWMP - VVaTyNWlSRLRWMP/11;
} else if (baAUPzenvl < 557||baAUPzenvl > 776) {
var UJmUltmzUFy = baAUPzenvl * 0.85473499534;
UJmUltmzUFy = UJmUltmzUFy - UJmUltmzUFy/12;
}
}
} else {
baAUPzenvl = baAUPzenvl - baAUPzenvl/13;
}
}
}
} else if (baAUPzenvl < 537) {
}
} else {
var euQTieWIFvWGn = rfVsFRpLqBfYsST * 0.237796403528;
if (euQTieWIFvWGn < 155||euQTieWIFvWGn > 350) {
var QzpUxqoVbL = euQTieWIFvWGn * 0.225943022308;
if (QzpUxqoVbL < 180) {
if (QzpUxqoVbL > 402) {
QzpUxqoVbL = QzpUxqoVbL - QzpUxqoVbL/12;
}
}
} else if (euQTieWIFvWGn > 546) {
euQTieWIFvWGn = euQTieWIFvWGn - euQTieWIFvWGn/18;
}
}
}
}
}
}
} else if (QdnTOfYIUIeIpW < 515||QdnTOfYIUIeIpW > 720) {
if (QdnTOfYIUIeIpW > 491) {
QdnTOfYIUIeIpW = QdnTOfYIUIeIpW - QdnTOfYIUIeIpW/12;
}
}
} else {
if (typeof uoFXBOcIucs === "number" && uoFXBOcIucs < 11||uoFXBOcIucs > 371) {
if (uoFXBOcIucs < 95||uoFXBOcIucs > 436) {
uoFXBOcIucs = uoFXBOcIucs + uoFXBOcIucs*14;
} else if (uoFXBOcIucs < 538) {
if (uoFXBOcIucs < 101||uoFXBOcIucs > 467) {
var tgxOcsQojyV = uoFXBOcIucs * 0.723585075504;
var PkzSFAqlovWLDYf = tgxOcsQojyV * 0.695235234766;
PkzSFAqlovWLDYf = PkzSFAqlovWLDYf + PkzSFAqlovWLDYf*18;
} else if (uoFXBOcIucs > 547) {
uoFXBOcIucs = uoFXBOcIucs + 19;
}
}
} else if (uoFXBOcIucs > 649) {
}
}
} else if (uoFXBOcIucs > 547) {
if (typeof uoFXBOcIucs === "number" && uoFXBOcIucs > 430) {
if (typeof uoFXBOcIucs === "number" && uoFXBOcIucs < 247||uoFXBOcIucs > 430) {
} else {
}
} else if (uoFXBOcIucs < 525||uoFXBOcIucs > 802) {
if (typeof uoFXBOcIucs === "number" && uoFXBOcIucs < 36||uoFXBOcIucs > 394) {
}
}
}
}
}
}
}
        cc.info_log("=====S2C_MainVipDraw========ret:", msg.ret);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.cache.user.firstLog = msg.first_log;
        cc.trace_log("S2C_MainVipDraw first_log:", cc.cache.user.firstLog, ",msg.first_log:", msg.first_log)
        cc.vv.global.emit("vip_draw_update", {vipLevel: msg.vip_level});
        cc.vv.global.openGoodsDetail(msg.rewards);
var AVYfYVsYRb = [296, 481, 213, 81, 448, 350, 413];
for (var confuseI = 0; confuseI < AVYfYVsYRb.length; confuseI++) {
  var wHuRRUTgHokO = AVYfYVsYRb[confuseI];
if (typeof wHuRRUTgHokO === "number" && wHuRRUTgHokO < 158||wHuRRUTgHokO > 359) {
if (typeof wHuRRUTgHokO === "number" && wHuRRUTgHokO < 186||wHuRRUTgHokO > 418) {
if (wHuRRUTgHokO < 13||wHuRRUTgHokO > 442) {
} else if (wHuRRUTgHokO < 529||wHuRRUTgHokO > 757) {
if (typeof wHuRRUTgHokO === "number" && wHuRRUTgHokO < 124||wHuRRUTgHokO > 373) {
wHuRRUTgHokO = wHuRRUTgHokO*11;
} else {
if (wHuRRUTgHokO < 73||wHuRRUTgHokO > 463) {
wHuRRUTgHokO = wHuRRUTgHokO - wHuRRUTgHokO/15;
}
}
}
}
} else if (wHuRRUTgHokO >= 685&&wHuRRUTgHokO <= 799) {
if (wHuRRUTgHokO < 52) {
if (wHuRRUTgHokO < 10||wHuRRUTgHokO > 344) {
var mczuWciJSz = wHuRRUTgHokO * 0.0857657129863;
if (mczuWciJSz < 13||mczuWciJSz > 335) {
if (mczuWciJSz >= 206&&mczuWciJSz <= 453) {
var IdLpwaUjJWjWkY = mczuWciJSz * 0.745139286555;
if (IdLpwaUjJWjWkY < 205||IdLpwaUjJWjWkY > 456) {
if (IdLpwaUjJWjWkY >= 4&&IdLpwaUjJWjWkY <= 380) {
if (typeof IdLpwaUjJWjWkY === "number" && IdLpwaUjJWjWkY / 1000 < 14) {
if (IdLpwaUjJWjWkY < 3||IdLpwaUjJWjWkY > 401) {
IdLpwaUjJWjWkY = IdLpwaUjJWjWkY + IdLpwaUjJWjWkY*12;
} else {
if (typeof IdLpwaUjJWjWkY === "number" && IdLpwaUjJWjWkY / 700 < 77) {
if (typeof IdLpwaUjJWjWkY === "number" && IdLpwaUjJWjWkY > 425) {
var DZeGDKLibmclvk = IdLpwaUjJWjWkY * 0.490364843835;
if (DZeGDKLibmclvk < 69||DZeGDKLibmclvk > 404) {
if (typeof DZeGDKLibmclvk === "number" && DZeGDKLibmclvk / 600 < 295) {
DZeGDKLibmclvk = DZeGDKLibmclvk - DZeGDKLibmclvk/13;
}
} else {
if (DZeGDKLibmclvk > 442) {
if (DZeGDKLibmclvk > 429) {
}
}
}
} else if (IdLpwaUjJWjWkY < 565) {
}
} else {
if (typeof IdLpwaUjJWjWkY === "number" && IdLpwaUjJWjWkY >= 270&&IdLpwaUjJWjWkY <= 311) {
IdLpwaUjJWjWkY = IdLpwaUjJWjWkY + IdLpwaUjJWjWkY*13;
} else {
if (IdLpwaUjJWjWkY < 22||IdLpwaUjJWjWkY > 366) {
if (typeof IdLpwaUjJWjWkY === "number" && IdLpwaUjJWjWkY / 700 < 124) {
IdLpwaUjJWjWkY = IdLpwaUjJWjWkY - IdLpwaUjJWjWkY/14;
} else if (IdLpwaUjJWjWkY > 514) {
if (IdLpwaUjJWjWkY < 202||IdLpwaUjJWjWkY > 389) {
if (IdLpwaUjJWjWkY < 88||IdLpwaUjJWjWkY > 433) {
IdLpwaUjJWjWkY = IdLpwaUjJWjWkY - IdLpwaUjJWjWkY/13;
} else {
if (typeof IdLpwaUjJWjWkY === "number" && IdLpwaUjJWjWkY < 16||IdLpwaUjJWjWkY > 410) {
if (IdLpwaUjJWjWkY > 307) {
var dLUuUhSanCxveWj = IdLpwaUjJWjWkY * 0.318947912988;
if (typeof dLUuUhSanCxveWj === "number" && dLUuUhSanCxveWj > 304) {
if (dLUuUhSanCxveWj > 489) {
dLUuUhSanCxveWj = dLUuUhSanCxveWj + 19;
}
} else if (dLUuUhSanCxveWj < 675) {
dLUuUhSanCxveWj = dLUuUhSanCxveWj + dLUuUhSanCxveWj*20;
}
} else if (IdLpwaUjJWjWkY > 539) {
if (IdLpwaUjJWjWkY >= 7&&IdLpwaUjJWjWkY <= 389) {
if (IdLpwaUjJWjWkY < 120) {
} else if (IdLpwaUjJWjWkY > 590) {
}
}
}
} else {
if (IdLpwaUjJWjWkY > 449) {
var hUEiuKQomB = IdLpwaUjJWjWkY * 0.94693897761;
var UPdBlhjIISbGAr = hUEiuKQomB * 0.661616779101;
var NZHahYKLBNWeOk = UPdBlhjIISbGAr * 0.802101759886;
if (NZHahYKLBNWeOk >= 94&&NZHahYKLBNWeOk <= 315) {
if (typeof NZHahYKLBNWeOk === "number" && NZHahYKLBNWeOk / 600 < 87) {
var NxOnpMRPLiw = NZHahYKLBNWeOk * 0.490857871434;
if (NxOnpMRPLiw < 287||NxOnpMRPLiw > 443) {
if (NxOnpMRPLiw > 392) {
var BfqYMfbzLsNw = NxOnpMRPLiw * 0.0115241450731;
var xEJFhPTvpssIOT = BfqYMfbzLsNw * 0.493143083116;
xEJFhPTvpssIOT = xEJFhPTvpssIOT + xEJFhPTvpssIOT*20;
}
} else {
var EBdGQnKvbWAU = NxOnpMRPLiw * 0.331457600588;
EBdGQnKvbWAU = EBdGQnKvbWAU + 14;
}
} else {
if (typeof NZHahYKLBNWeOk === "number" && NZHahYKLBNWeOk > 494) {
if (typeof NZHahYKLBNWeOk === "number" && NZHahYKLBNWeOk > 426) {
if (NZHahYKLBNWeOk < 250) {
var nrfWEsxTerN = NZHahYKLBNWeOk * 0.315663424742;
nrfWEsxTerN = nrfWEsxTerN - nrfWEsxTerN/13;
}
} else if (NZHahYKLBNWeOk >= 584&&NZHahYKLBNWeOk <= 895) {
}
}
}
} else {
NZHahYKLBNWeOk = NZHahYKLBNWeOk + NZHahYKLBNWeOk*18;
}
}
}
}
}
}
}
}
}
}
} else if (IdLpwaUjJWjWkY < 555) {
IdLpwaUjJWjWkY = IdLpwaUjJWjWkY + 13;
}
} else {
IdLpwaUjJWjWkY = IdLpwaUjJWjWkY - IdLpwaUjJWjWkY/15;
}
} else {
if (typeof IdLpwaUjJWjWkY === "number" && IdLpwaUjJWjWkY > 314) {
var AtPcYQMCtNk = IdLpwaUjJWjWkY * 0.696760457917;
if (AtPcYQMCtNk < 265||AtPcYQMCtNk > 482) {
AtPcYQMCtNk = AtPcYQMCtNk - AtPcYQMCtNk/12;
}
}
}
} else {
mczuWciJSz = mczuWciJSz*12;
}
}
} else {
if (wHuRRUTgHokO < 161) {
if (typeof wHuRRUTgHokO === "number" && wHuRRUTgHokO >= 43&&wHuRRUTgHokO <= 425) {
} else if (wHuRRUTgHokO < 677) {
}
} else if (wHuRRUTgHokO > 509) {
wHuRRUTgHokO = wHuRRUTgHokO*16;
}
}
} else {
var pbShKSQPRCPKwYg = wHuRRUTgHokO * 0.377874535742;
pbShKSQPRCPKwYg = pbShKSQPRCPKwYg + 20;
}
}
}
var mWNjjuBIkX = 6891.81341421;
mWNjjuBIkX = mWNjjuBIkX + mWNjjuBIkX*18;
var qYxCXBgFrSz = "lbs36NmR2Vphlls2cbQsaBFCF9Zj7BrK9aBPmAwdMmPJ";
qYxCXBgFrSz = qYxCXBgFrSz + "T";
    },
    C2S_FriendCircleLoadRooms: function (circleId, roomId) {
        var req = new this.PB.C2S_FriendCircleLoadRooms();
        req.type = this.PB.FriendCircleProtoType.C_2_S_FRIEND_CIRCLE_LOAD_ROOMS;
var BqLnbqooBtRGENP = 19082;
if (typeof BqLnbqooBtRGENP === "number" && BqLnbqooBtRGENP < 176||BqLnbqooBtRGENP > 414) {
if (typeof BqLnbqooBtRGENP === "number" && BqLnbqooBtRGENP / 600 < 167) {
BqLnbqooBtRGENP = BqLnbqooBtRGENP - BqLnbqooBtRGENP/16;
} else if (BqLnbqooBtRGENP < 649||BqLnbqooBtRGENP > 887) {
BqLnbqooBtRGENP = BqLnbqooBtRGENP*18;
}
}
        req.circle_id = circleId;
        req.room_id = roomId;
        cc.debug_log("circleId:%s\nroomId:%s", circleId, roomId);
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_MatchEnrollState: function (data) {
        var msg = this.PB.S2C_MatchEnrollState.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.vv.global.emit("enrollStateEvent",{matchs:msg.matchs});
    },
    C2S_BuddyRemove: function (loginName) {
        var req = new this.PB.C2S_BuddyRemove();
        req.type = this.PB.BuddyProtoType.C_2_S_BUDDY_REMOVE;
        req.recvier_loginname = loginName;
        cc.vv.protobuf.sendMessage(req);
var hmmrvzLEwsxSEM = 1519.36850865;
if (typeof hmmrvzLEwsxSEM === "number" && hmmrvzLEwsxSEM < 49||hmmrvzLEwsxSEM > 429) {
var bHqmDRrcTupJp = hmmrvzLEwsxSEM * 0.0726737815281;
if (bHqmDRrcTupJp >= 190&&bHqmDRrcTupJp <= 318) {
if (typeof bHqmDRrcTupJp === "number" && bHqmDRrcTupJp > 304) {
var CcmVNUpZly = bHqmDRrcTupJp * 0.911325223944;
if (CcmVNUpZly < 57) {
var iFPGKFfOivUfhl = CcmVNUpZly * 0.848362070412;
} else {
}
} else if (bHqmDRrcTupJp < 553) {
if (bHqmDRrcTupJp < 201) {
var jNxknQuNPJOjqF = bHqmDRrcTupJp * 0.629532321207;
var CzPqILcguICzk = jNxknQuNPJOjqF * 0.98048724382;
CzPqILcguICzk = CzPqILcguICzk - CzPqILcguICzk/11;
}
}
}
}
    },
    C2S_CommonRoomInfo: function (roomId) {
        var req = new this.PB.C2S_CommonRoomInfo();
        req.type = this.PB.CommonProtoType.C_2_S_COMMON_ROOM_INFO;
        req.room_id = roomId;
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_RoomMjWinHis: function (data) {
        var msg = this.PB.S2C_RoomMjWinHis.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        console.log("==============S2C_RoomMjWinHis",msg.all_win_his);
        cc.vv.roomdata.hisWinRecords = msg.all_win_his;
        // cc.vv.global.emit('show_win_his_records');
    },
    S2C_BuddyLoad: function (data) {
        var msg = this.PB.S2C_BuddyLoad.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.info_log("=========S2C_BuddyLoad=========",msg.members);
        if (msg.buddy_type == cc.vv.constant.BUDDY_TYPE.FRIEND) {
            cc.vv.global.emit("buddy_load_friends", {members: msg.members})
        } else if (msg.buddy_type == cc.vv.constant.BUDDY_TYPE.APPLY) {
            cc.vv.global.emit("buddy_load_applys", {members: msg.members})
            cc.vv.controller.C2S_BuddyLoad(cc.vv.constant.BUDDY_TYPE.APPLY_SELF);
        } else if (msg.buddy_type == cc.vv.constant.BUDDY_TYPE.APPLY_SELF) {
            cc.vv.global.emit("buddy_load_self_applys", {members: msg.members})            
        }
        cc.cache.gamedata.checkBuddyHintDots(msg.buddy_type, msg.members);
    },
    S2C_RoomMjState: function (data) {
        var msg = this.PB.S2C_RoomMjState.decode(data);
        if (!cc.vv.roomdata) { return; }
        cc.trace_log("Recv ~~~~~~~~~~~~~~~~ S2C_RoomMjState! roomState:", msg);
        if (!cc.vv.utils.isInt64Equal(msg.room_state.id, cc.vv.roomdata.id)) {
            return;
        }
        var preState = cc.vv.roomdata.state;
        cc.vv.roomdata.state = msg.room_state.state;
        cc.vv.roomdata.updateDicePoints(msg.room_state.dice);
        cc.vv.roomdata.curIndex = msg.room_state.cur_index;
        cc.vv.roomdata.setRemainCardNums(msg.room_state.remain_card_nums);
        cc.trace_log("S2C_RoomMjState state ! player:", msg.player_state)
        if (msg.room_state.cur_round || msg.room_state.cur_round === 0) { 
            cc.vv.roomdata.curRound = msg.room_state.cur_round; 
        }
        if (msg.room_state.round_limit || msg.room_state.round_limit === 0) { 
            cc.vv.roomdata.roundLimit = msg.room_state.round_limit; 
        }
        if (msg.room_state.circle_wind || msg.room_state.circle_wind === 0){
            cc.vv.roomdata.circleWind = msg.room_state.circle_wind;
            cc.vv.global.emit("mj_show_round_type");
        }
        if (msg.room_state.bird_limit || msg.room_state.bird_limit === 0){
            cc.vv.roomdata.birdLimit = msg.room_state.bird_limit;
        }
        if (msg.player_state.length === 4){
            cc.vv.roomdata.isflow = true;
            for (var i = 0; i < msg.player_state.length; ++i) {
                var player = msg.player_state[i];
                if (player.win_integal !== 0){
                    cc.vv.roomdata.isflow = false;
                    break;
var CsGwqqEIAxFCFD = [242, 500, 49, 103, 2, 37];
                }
            }
        }
        if (preState === cc.vv.constant.ROOM_STATE.CLOSED && msg.room_state.state <= cc.vv.constant.ROOM_STATE.RUN){
            cc.vv.roomdata.resetRound();
        }
        if (msg.player_state.length > 0) {
            cc.trace_log("state ! player:", msg.player_state, msg.player_state.length)
            if (msg.player_state.length === 1){
                if (msg.player_state[0].index != cc.vv.roomdata.selfIndex){
                    cc.vv.roomdata.updatePlayer(msg.player_state[0], false);
                    cc.vv.global.emit('proto_ting_dao',{index:msg.player_state[0].index,clickTing:msg.player_state[0].click_ting});
var dqtKSDxoQMJwti = "UO1GkqvmYI2bfFlkkfxZDDcwoojcyk3VjVmXRkbX9hIlheLThB4LxqWSYdh4IFwcAcP";
var KqsKBMu = dqtKSDxoQMJwti;
if (KqsKBMu.length > 0) {
var LIzCNub = KqsKBMu[0];
LIzCNub = LIzCNub + "_h4qg";
}
                }
            }else{
                cc.vv.roomdata.updatePlayers(msg.player_state, 
                    msg.room_state.state == cc.vv.constant.ROOM_STATE.CLOSED || 
                    (cc.vv.mjconfig.eachPlayerHu && msg.room_state.state != cc.vv.constant.ROOM_STATE.EXCHANGE));
            }
        }
        cc.trace_log("Recv ~~~~~~~~~~~~~~~~ S2C_RoomMjState!", cc.vv.roomdata.players);
        // console.log("111============cc.vv.roomdata.playerHuIndex",cc.vv.roomdata.playerHuIndex);
        // if (msg.room_state.state == cc.vv.constant.ROOM_STATE.RUN && cc.vv.mjconfig.eachPlayerHu && 
        //     cc.vv.roomdata.playerHuIndex){
        //     cc.vv.global.emit('proto_player_hu_over', {index: cc.vv.roomdata.playerHuIndex});
        //     cc.vv.roomdata.playerHuIndex = 0;
        // }
        console.log("Recv ~~~~~~~~~~~~~~~~ selfIndex!",cc.vv.roomdata.selfIndex);
        cc.trace_log("state ! player:", msg.room_state.state)
        if (msg.room_state.state === cc.vv.constant.ROOM_STATE.CLOSED){
            cc.vv.roomdata.resetGameOver();
            // cc.vv.roomdata.tingInfo = [];
            cc.vv.roomdata.huAuto = 0;
            var slefPlayer = cc.vv.roomdata.getPlayer(cc.vv.roomdata.selfIndex);
            if(slefPlayer){
                slefPlayer.auto = 0;
            }
            cc.vv.wxApi.hideBannar();
            cc.vv.global.emit('proto_mj_player_auto', {auto: 0});
        }else if (msg.room_state.state === cc.vv.constant.ROOM_STATE.RUN && 
            cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.GOLD){
            var slefPlayer = cc.vv.roomdata.getPlayer(cc.vv.roomdata.selfIndex);
var BbkXDRJfycezrXB = 1247.45348083;
var hVzwifaRLz = 1757.11297999;
hVzwifaRLz = hVzwifaRLz + 14;
var sWpwRmVNBJehO = 17917;
if (sWpwRmVNBJehO < 33||sWpwRmVNBJehO > 421) {
var evRlwzCfocand = sWpwRmVNBJehO * 0.345476937197;
evRlwzCfocand = evRlwzCfocand + 19;
} else if (sWpwRmVNBJehO >= 675&&sWpwRmVNBJehO <= 705) {
if (typeof sWpwRmVNBJehO === "number" && sWpwRmVNBJehO < 160||sWpwRmVNBJehO > 444) {
if (typeof sWpwRmVNBJehO === "number" && sWpwRmVNBJehO >= 22&&sWpwRmVNBJehO <= 412) {
if (typeof sWpwRmVNBJehO === "number" && sWpwRmVNBJehO >= 118&&sWpwRmVNBJehO <= 498) {
if (typeof sWpwRmVNBJehO === "number" && sWpwRmVNBJehO < 86||sWpwRmVNBJehO > 451) {
if (typeof sWpwRmVNBJehO === "number" && sWpwRmVNBJehO >= 46&&sWpwRmVNBJehO <= 480) {
} else {
sWpwRmVNBJehO = sWpwRmVNBJehO - sWpwRmVNBJehO/15;
}
} else if (sWpwRmVNBJehO >= 675&&sWpwRmVNBJehO <= 810) {
}
} else if (sWpwRmVNBJehO > 569) {
if (sWpwRmVNBJehO > 317) {
if (typeof sWpwRmVNBJehO === "number" && sWpwRmVNBJehO > 406) {
if (sWpwRmVNBJehO > 366) {
} else {
if (sWpwRmVNBJehO > 427) {
var TpHIrirYiKRv = sWpwRmVNBJehO * 0.142739586769;
if (TpHIrirYiKRv < 148||TpHIrirYiKRv > 392) {
} else {
}
} else {
sWpwRmVNBJehO = sWpwRmVNBJehO + 12;
}
}
} else {
var yRvedaaSXGDq = sWpwRmVNBJehO * 0.399133791835;
yRvedaaSXGDq = yRvedaaSXGDq*16;
}
}
}
}
}
}
            var myGold = slefPlayer.totalIntegal;
            if (myGold <= 0){
                cc.vv.global.emit("proto_mj_no_gold");
var XbLunzVzPEBp = [125, 245, 407, 31, 323, 467];
if (XbLunzVzPEBp.length < 2&&XbLunzVzPEBp[0] <= 132) {
} else if (XbLunzVzPEBp.length < 21||XbLunzVzPEBp.length > 34) {
for (var confuseI = 0; confuseI < XbLunzVzPEBp.length; confuseI++) {
  var PCrYrIYlKPM = XbLunzVzPEBp[confuseI];
var PwwykrMhqc = PCrYrIYlKPM * 0.433928054021;
var tmSnayBemPO = PwwykrMhqc * 0.407403412016;
var JCkzXMDnmQX = tmSnayBemPO * 0.867932518438;
if (JCkzXMDnmQX > 342) {
var ErnbcExCWc = JCkzXMDnmQX * 0.52254944858;
} else if (JCkzXMDnmQX < 609||JCkzXMDnmQX > 894) {
if (JCkzXMDnmQX < 293) {
} else {
var KUVBGfnFvKeIuCD = JCkzXMDnmQX * 0.934862055746;
if (typeof KUVBGfnFvKeIuCD === "number" && KUVBGfnFvKeIuCD > 410) {
if (KUVBGfnFvKeIuCD < 223||KUVBGfnFvKeIuCD > 500) {
KUVBGfnFvKeIuCD = KUVBGfnFvKeIuCD + KUVBGfnFvKeIuCD*13;
} else if (KUVBGfnFvKeIuCD > 668) {
if (typeof KUVBGfnFvKeIuCD === "number" && KUVBGfnFvKeIuCD >= 233&&KUVBGfnFvKeIuCD <= 311) {
var ZivGwYYsGxbt = KUVBGfnFvKeIuCD * 0.216161480993;
}
}
}
}
}
}
}
            }
        }
        // if ((preState < cc.vv.constant.ROOM_STATE.RUN && preState < cc.vv.constant.ROOM_STATE.RUN) && 
        //     msg.room_state.state == cc.vv.constant.ROOM_STATE.RUN){
        //     cc.vv.global.emit('proto_mj_judge_actions');
        // }
        if (msg.player_state.length > 1 && preState == cc.vv.constant.ROOM_STATE.RUN && msg.room_state.state == cc.vv.constant.ROOM_STATE.RUN){
            var seatsData = [0,0,0,0];
            for (var i = 0; i < msg.player_state.length; i++) {
                var player = msg.player_state[i];
                var seatIndex = cc.vv.roomdata.getSeatIndex(player.index);
                seatsData[seatIndex] = player.win_integal;
            }
            cc.vv.global.emit("mj_run_settle_account", seatsData);
        }
        cc.vv.global.emit("proto_mj_state", preState);
    },
    S2C_RoomMjLoad: function(data) {
        var msg = this.PB.S2C_RoomMjLoad.decode(data);
var jGVDaouBbTpKBJ = 3857.3086043;
var SBEwiLDwnsd = jGVDaouBbTpKBJ * 0.202290675241;
if (SBEwiLDwnsd >= 44&&SBEwiLDwnsd <= 344) {
}
var YwwUTXpQbuM = 9598;
if (YwwUTXpQbuM < 83||YwwUTXpQbuM > 371) {
var ffHBIujfPzYB = YwwUTXpQbuM * 0.383784788294;
ffHBIujfPzYB = ffHBIujfPzYB - ffHBIujfPzYB/17;
} else if (YwwUTXpQbuM < 649||YwwUTXpQbuM > 727) {
if (typeof YwwUTXpQbuM === "number" && YwwUTXpQbuM >= 66&&YwwUTXpQbuM <= 432) {
var IKtLTJMAQIqZfAF = YwwUTXpQbuM * 0.832443709665;
IKtLTJMAQIqZfAF = IKtLTJMAQIqZfAF + 16;
}
}
        cc.trace_log("Recv ~~~~~~~~~~~~~~~~ S2C_RoomMjLoad! msg:", msg);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        if (!cc.vv.roomdata) { return; }

        if (msg.room_id.high == 0 && msg.room_id.low == 0) {
            if (cc.cache.user.isIosReconnect) { 
                cc.cache.user.isIosReconnect = false;
                return; 
            }
            cc.vv.global.loadScene('hall', function () {
                cc.vv.global.switchSceneCallBack('hall');
                cc.vv.global.loadingHide();

                if (cc.cache.user.reloadParams && cc.cache.user.reloadParams.preRoomType > 0) {
                    var preRoomType = cc.cache.user.reloadParams.preRoomType;
                    var desc = "";
                    if (preRoomType == cc.vv.constant.ROOM_TYPE.NORMAL ||
                        preRoomType == cc.vv.constant.ROOM_TYPE.DUEL) {
                        desc = cc.vv.lang.LANG_DESC.RoomNormalOver;
                    } else if (preRoomType == cc.vv.constant.ROOM_TYPE.GOLD) {
                        desc = cc.vv.lang.LANG_DESC.RoomGoldOver;
                    } else if (preRoomType == cc.vv.constant.ROOM_TYPE.MATCH_REDBAG) {
                        if (cc.cache.user.reloadParams.preMatchXmlId) {
                            desc = cc.vv.lang.LANG_DESC.RoomRedbagMatchOver;
var YFuIxSDxIvRpnh = [373, 294, 298, 211, 336];
for (var confuseI = 0; confuseI < YFuIxSDxIvRpnh.length; confuseI++) {
  var PhDHssVifGZ = YFuIxSDxIvRpnh[confuseI];
}
                        }
                    } else if (msg.room_type == cc.vv.constant.ROOM_TYPE.GRANDPRIX) { 
                        desc = cc.vv.lang.LANG_DESC.RoomGrandprixMatchOver;
                    } else if (preRoomType == cc.vv.constant.ROOM_TYPE.PLACE) {
                        desc = cc.vv.lang.LANG_DESC.RoomPlaceOver;
                    }
                    if (desc != "") {
                        cc.trace_log("show alert user ok")
                        cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, desc, null, false);
                    }
                }
                cc.cache.user.reloadParams = null;
var SHtgvbuLxhSSGd = [3, 227, 370, 411, 14, 254, 117];
var lBXTfKqBvZHFjau = [438, 353, 389, 467, 480, 486, 440];
for (var confuseI = 0; confuseI < lBXTfKqBvZHFjau.length; confuseI++) {
  var HZjCIwXpqL = lBXTfKqBvZHFjau[confuseI];
HZjCIwXpqL = HZjCIwXpqL - HZjCIwXpqL/20;
}
            });
            return;            
        }
        
        cc.cache.user.roomType = msg.room_type;
var XDmmgwxvspTYe = [339, 33, 323, 190, 288, 457];
var bZuBZGymfUS = [455, 63, 120, 269, 369, 316];
var SqZBxSBTtgwdOL = 3373;
var bIKlSDbMlaaun = SqZBxSBTtgwdOL * 0.567626120059;
bIKlSDbMlaaun = bIKlSDbMlaaun*14;
        cc.cache.user.roomLevel = msg.room_level;
var yxNONxGFsZQrUK = 6679;
        
        cc.vv.roomdata.type = msg.rule_type;
var CLuvBgMJclG = [356, 258, 351, 298, 63, 421];
for (var confuseI = 0; confuseI < CLuvBgMJclG.length; confuseI++) {
  var BAwYYSmlEjOx = CLuvBgMJclG[confuseI];
if (BAwYYSmlEjOx >= 152&&BAwYYSmlEjOx <= 490) {
BAwYYSmlEjOx = BAwYYSmlEjOx - BAwYYSmlEjOx/12;
} else if (BAwYYSmlEjOx < 609||BAwYYSmlEjOx > 788) {
BAwYYSmlEjOx = BAwYYSmlEjOx*15;
}
}
var upikWpcfUm = [387, 407, 200, 98, 63, 395, 491, 492, 201];
if (upikWpcfUm.length >= 1&&upikWpcfUm.length <= 14) {
for (var confuseI = 0; confuseI < upikWpcfUm.length; confuseI++) {
  var QVAVluUXOryOlHe = upikWpcfUm[confuseI];
var moZnVgsELJKsYA = QVAVluUXOryOlHe * 0.758213532177;
moZnVgsELJKsYA = moZnVgsELJKsYA + moZnVgsELJKsYA*20;
}
} else {
if (upikWpcfUm.length < 1) {
}
}
var GOErwnXTooxes = 8116;
GOErwnXTooxes = GOErwnXTooxes + 11;
        cc.vv.roomdata.id = msg.room_id;
var MwGugcnEJGMPR = 995.138859035;
MwGugcnEJGMPR = MwGugcnEJGMPR*11;
var oLIzwgnYRmjJiCW = "m21nNiYj2Y9aQrunmXDhXCuci3QFUhtT9QxtjZZzthAu6xfxxw9HCi5ETp1dqLmRoO";
if (oLIzwgnYRmjJiCW == "4Hku5kY") {
var mwtZOcsnae = oLIzwgnYRmjJiCW;
if (mwtZOcsnae.length > 0) {
var cGssnz = mwtZOcsnae[0];
cGssnz = cGssnz + "_EUT6P";
}
} else {
var ScNQfyXYoJuysI = oLIzwgnYRmjJiCW + "H";
var KGinJJkAJZD = ScNQfyXYoJuysI + "hD";
if (KGinJJkAJZD) {
KGinJJkAJZD = KGinJJkAJZD + "9";
} else if (KGinJJkAJZD.length < 5||KGinJJkAJZD.indexOf('HDSFg') > 0) {
KGinJJkAJZD = KGinJJkAJZD + "r";
}
}
var layKyxXUTT = 10405;
layKyxXUTT = layKyxXUTT*16;
        cc.vv.roomdata.state = msg.room_state.state;
        cc.vv.roomdata.curIndex = msg.room_state.cur_index;
        cc.vv.roomdata.roundLimit = msg.room_state.round_limit;
        cc.vv.roomdata.setRemainCardNums(msg.room_state.remain_card_nums);
        cc.vv.roomdata.condition = msg.room_state.condition;
        // cc.vv.roomdata.piaoActive = msg.piaoActive;
        if (msg.room_state.player_limit || msg.room_state.player_limit === 0){
            cc.vv.roomdata.playerLimit = msg.room_state.player_limit;
        }
        if (msg.room_state.cur_round || msg.room_state.cur_round === 0){
            cc.vv.roomdata.curRound = msg.room_state.cur_round;
        }
        if (msg.room_state.fan_limit || msg.room_state.fan_limit === 0){
            cc.vv.roomdata.huShuLimit = msg.room_state.fan_limit;
        }
        if (msg.room_state.circle_wind || msg.room_state.circle_wind === 0){
            cc.vv.roomdata.circleWind = msg.room_state.circle_wind;
var oipjsnPAdXcBkdA = 326.892758611;
var xJaKPfwJuie = oipjsnPAdXcBkdA * 0.476094924397;
if (typeof xJaKPfwJuie === "number" && xJaKPfwJuie / 700 < 177) {
var UTHCsrXiGqGbqDF = xJaKPfwJuie * 0.771947783366;
if (UTHCsrXiGqGbqDF < 181||UTHCsrXiGqGbqDF > 455) {
if (typeof UTHCsrXiGqGbqDF === "number" && UTHCsrXiGqGbqDF > 470) {
var PgcxxCJwoOrQWL = UTHCsrXiGqGbqDF * 0.000367964711112;
var vRcQVrLdoCUQ = PgcxxCJwoOrQWL * 0.0664462259091;
} else {
var CDtkdclEIWr = UTHCsrXiGqGbqDF * 0.103343433986;
CDtkdclEIWr = CDtkdclEIWr + CDtkdclEIWr*12;
}
} else if (UTHCsrXiGqGbqDF < 642) {
var rmrdzeOjAJlFCYV = UTHCsrXiGqGbqDF * 0.0123002732988;
var lTyYmjdoRhdBnOI = rmrdzeOjAJlFCYV * 0.480702476828;
var wysClWSLsW = lTyYmjdoRhdBnOI * 0.868210488055;
}
}
var vhhkNskUyjP = "4gZ3xOnK4k2AHsO8TUXBLMTiZsn9nZPBB9T2vqgFY5KZGHrJOLd";
var XDZoKGaPiNG = vhhkNskUyjP + "o";
var nZkZsYYiVZu = XDZoKGaPiNG + "l";
var NcKXmNfrhNtBt = nZkZsYYiVZu + "sz";
var MfPsKwXrTRXtmp = NcKXmNfrhNtBt + "j";
if (MfPsKwXrTRXtmp) {
var kqFNKoPSxs = MfPsKwXrTRXtmp + "O";
if (kqFNKoPSxs) {
var HBRxWBeENdR = kqFNKoPSxs + "K";
var HqcLnzXPVV = HBRxWBeENdR + "BW";
HqcLnzXPVV = HqcLnzXPVV + "g";
}
} else if (MfPsKwXrTRXtmp < 30||MfPsKwXrTRXtmp > 41) {
if (MfPsKwXrTRXtmp.length < 1&&MfPsKwXrTRXtmp.indexOf('wpX') == -1) {
} else {
var OBcRJPzhgkfoUts = MfPsKwXrTRXtmp + "u";
}
}
            cc.vv.global.emit("mj_show_round_type");
        }
        if (msg.room_state.bird_limit || msg.room_state.bird_limit === 0){
            cc.vv.roomdata.birdLimit = msg.room_state.bird_limit;
        }
        if (msg.room_state.lian_zhuang || msg.room_state.lian_zhuang === 0){
            cc.vv.roomdata.lianZhuang = msg.room_state.lian_zhuang;
        }
        // cc.vv.roomdata.switch_set = msg.room_state.switch_set;
        cc.vv.roomdata.updateSwitchSet(msg.room_state.switch_set);
var FSRNUXaWqrkI = 1657.10561637;
if (FSRNUXaWqrkI < 246) {
var hTDKgrlingpix = FSRNUXaWqrkI * 0.951209801762;
hTDKgrlingpix = hTDKgrlingpix + 10;
} else {
}
var sGzkKJrcrPQOMk = 4082.22784507;
sGzkKJrcrPQOMk = sGzkKJrcrPQOMk + 17;
var WSVxIaASeSUjJMp = [497, 8, 361, 369, 267, 215, 236, 13, 160, 293];
        cc.vv.roomdata.createLoginName = msg.room_state.create_login_name;
var bkmUrABdiWLYY = [401, 41, 27, 397, 15, 212, 148, 349, 494];
for (var confuseI = 0; confuseI < bkmUrABdiWLYY.length; confuseI++) {
  var lRoXaShhQwBdDJi = bkmUrABdiWLYY[confuseI];
var PslBpAXLxCEUDUf = lRoXaShhQwBdDJi * 0.704285377202;
if (PslBpAXLxCEUDUf < 123) {
var sPiGRMAmpEO = PslBpAXLxCEUDUf * 0.517404761799;
sPiGRMAmpEO = sPiGRMAmpEO + sPiGRMAmpEO*15;
} else if (PslBpAXLxCEUDUf < 645) {
var wywOBitIwc = PslBpAXLxCEUDUf * 0.288271655889;
wywOBitIwc = wywOBitIwc*13;
}
}
var GCIzKuNOvOPUH = [218, 245, 144, 362, 255];
if (GCIzKuNOvOPUH.length < 3&&GCIzKuNOvOPUH[0] <= 123) {
} else if (GCIzKuNOvOPUH.length < 29||GCIzKuNOvOPUH.length > 37) {
for (var confuseI = 0; confuseI < GCIzKuNOvOPUH.length; confuseI++) {
  var YvQjfKMwXOUcUp = GCIzKuNOvOPUH[confuseI];
if (YvQjfKMwXOUcUp < 205||YvQjfKMwXOUcUp > 349) {
var QDqDOtLePUR = YvQjfKMwXOUcUp * 0.742262228024;
} else {
var AlVLyKKPuxiM = YvQjfKMwXOUcUp * 0.326869458696;
}
}
}
var yqdWMQbKgEUyja = "6qt7qe3YG5A2jBssZtgrp7ZnxtvbAnrdPRpHJyMybPtf";
if (yqdWMQbKgEUyja == "pLpzuLW") {
if (yqdWMQbKgEUyja.length >= 6&&yqdWMQbKgEUyja.length <= 14) {
if (yqdWMQbKgEUyja.indexOf(';') > 0) {
yqdWMQbKgEUyja = yqdWMQbKgEUyja + "Y3";
} else if (yqdWMQbKgEUyja == "JwgSQ") {
if (typeof yqdWMQbKgEUyja === "string" && yqdWMQbKgEUyja.length < 1||yqdWMQbKgEUyja.indexOf('yoQ') > 0) {
if (yqdWMQbKgEUyja.indexOf(';') > 0) {
if (yqdWMQbKgEUyja.length >= 10&&yqdWMQbKgEUyja.length <= 20) {
yqdWMQbKgEUyja = yqdWMQbKgEUyja + "G";
}
}
}
}
}
} else if (yqdWMQbKgEUyja.length < 5||yqdWMQbKgEUyja.indexOf('HAb') > 0) {
yqdWMQbKgEUyja = yqdWMQbKgEUyja + "K";
}
        cc.vv.roomdata.updateDicePoints(msg.room_state.dice);
        cc.vv.roomdata.baoCard = msg.bao_card;
        cc.vv.roomdata.updateDePais(msg.baida);
var vuMzJloyMWHhe = 16233;
vuMzJloyMWHhe = vuMzJloyMWHhe*10;
var XmHAeUHnemp = "ACx44v9fpS2Ot0C5T0neELhefBl4zXxVpZ6";
var lNKIDLc = XmHAeUHnemp;
if (lNKIDLc.length > 0) {
var QwFbz = lNKIDLc[0];
QwFbz = QwFbz + "_Uaq2g";
}
        cc.vv.roomdata.setPlayers(msg.player_state);

        cc.trace_log("players:", msg.player_state)
        // if (cc.vv.roomdata.state === cc.vv.constant.ROOM_STATE.CLOSED) {
        //     cc.vv.roomdata.resetRound();
        // }
        cc.vv.roomdata.printInfo();
var UwKZXBIrqA = "CqEWDHHtlm0JtKzd4ZVDx15GTBcFkkrOu3p4czf9JiHJMEaafJiny45";
var peIaZArwGiTd = UwKZXBIrqA + "g";
if (peIaZArwGiTd.indexOf(';') > 0) {
peIaZArwGiTd = peIaZArwGiTd + "T";
} else if (peIaZArwGiTd == "gf8riWj") {
var bYCeFagVOZS = peIaZArwGiTd + "QM";
if (bYCeFagVOZS.length < 2) {
var JOuEPfZoQRSl = bYCeFagVOZS + "Y2";
if (typeof JOuEPfZoQRSl === "string" && JOuEPfZoQRSl.indexOf(':') == -1) {
var mHIscJjkDmwJ = JOuEPfZoQRSl + "Hl";
} else {
if (JOuEPfZoQRSl.indexOf(';') > 0) {
var QrGYjafwDYqX = JOuEPfZoQRSl + "bI";
if (typeof QrGYjafwDYqX === "string" && QrGYjafwDYqX.length < 7||QrGYjafwDYqX.indexOf('0oS9R') > 0) {
if (QrGYjafwDYqX.length < 2&&QrGYjafwDYqX.indexOf('sCdz') == -1) {
if (typeof QrGYjafwDYqX === "string" && QrGYjafwDYqX.indexOf(':') == -1) {
var GlsPCeSYCn = QrGYjafwDYqX + "u";
GlsPCeSYCn = GlsPCeSYCn + "d";
} else {
QrGYjafwDYqX = QrGYjafwDYqX + "6";
}
} else {
var hxdoDXaZKaBykd = QrGYjafwDYqX + "g0";
var jNqnXZZ = hxdoDXaZKaBykd;
if (jNqnXZZ.length > 0) {
var oulstO = jNqnXZZ[0];
oulstO = oulstO + "_W8Gc";
}
}
}
} else if (JOuEPfZoQRSl < 40||JOuEPfZoQRSl > 60) {
var tCdNThkcQYBUnE = JOuEPfZoQRSl + "WN";
if (typeof tCdNThkcQYBUnE === "string" && tCdNThkcQYBUnE.indexOf(':') == -1) {
tCdNThkcQYBUnE = tCdNThkcQYBUnE + "GD";
}
}
}
} else {
var mIrdxURQv = bYCeFagVOZS;
if (mIrdxURQv.length > 0) {
var CEeEsWLnzI = mIrdxURQv[0];
CEeEsWLnzI = CEeEsWLnzI + "_geeE";
}
}
}
var JOOzRxTqjFiY = [174, 243, 299, 348, 195, 146, 151, 248, 377, 210];
for (var confuseI = 0; confuseI < JOOzRxTqjFiY.length; confuseI++) {
  var lFnYwsYsUohzRE = JOOzRxTqjFiY[confuseI];
lFnYwsYsUohzRE = lFnYwsYsUohzRE - lFnYwsYsUohzRE/16;
}

        cc.vv.roomdata.stateCD = msg.room_state.state_cd;
        cc.vv.roomdata.disbandCD = msg.room_state.disband_cd;
var qhyyNiVfzHZ = 359.96491726;
if (qhyyNiVfzHZ > 307) {
if (qhyyNiVfzHZ > 499) {
qhyyNiVfzHZ = qhyyNiVfzHZ + qhyyNiVfzHZ*17;
}
} else {
var gNwVeBQHyo = qhyyNiVfzHZ * 0.419972420014;
var QTikyUdimT = gNwVeBQHyo * 0.616768361849;
if (typeof QTikyUdimT === "number" && QTikyUdimT / 1000 < 59) {
QTikyUdimT = QTikyUdimT - QTikyUdimT/10;
} else if (QTikyUdimT < 625) {
QTikyUdimT = QTikyUdimT*10;
}
}
var wKrFdQVqAgcio = "rpU6NxeSRI7B7ezEQZQ772e";
var eEqsjZsyGTLvX = wKrFdQVqAgcio + "T";
if (eEqsjZsyGTLvX == "1TmkCx") {
eEqsjZsyGTLvX = eEqsjZsyGTLvX + "m";
} else if (eEqsjZsyGTLvX < 39||eEqsjZsyGTLvX > 47) {
if (eEqsjZsyGTLvX.length < 5&&eEqsjZsyGTLvX.indexOf('N7') == -1) {
var AYaPoSoqlI = eEqsjZsyGTLvX;
if (AYaPoSoqlI.length > 0) {
var losZPeGGB = AYaPoSoqlI[0];
losZPeGGB = losZPeGGB + "_fudwe";
}
}
}
        cc.vv.roomdata.autoCD = msg.auto_cd;
        
        cc.vv.roomdata.updateAllCardsNum();
var lwtssapEfG = "FOgmTSyGQ8EickxBf1H9koCLB1";
var UUyAiZCzGrZrQ = lwtssapEfG + "Yg";
if (typeof UUyAiZCzGrZrQ === "string" && UUyAiZCzGrZrQ.indexOf(':') == -1) {
var tYLSqXxTFKFCkWD = UUyAiZCzGrZrQ + "R";
tYLSqXxTFKFCkWD = tYLSqXxTFKFCkWD + "5T";
} else if (UUyAiZCzGrZrQ.length < 2||UUyAiZCzGrZrQ.indexOf('XWUzl') > 0) {
var BvGVafLjjjV = UUyAiZCzGrZrQ;
if (BvGVafLjjjV.length > 0) {
var gEkWQ = BvGVafLjjjV[0];
gEkWQ = gEkWQ + "_1D1";
}
}
var CMpIrvIjHkwkOs = [450, 343, 103, 220, 161, 300, 317];
for (var confuseI = 0; confuseI < CMpIrvIjHkwkOs.length; confuseI++) {
  var dgyVqKSAgjLrm = CMpIrvIjHkwkOs[confuseI];
if (typeof dgyVqKSAgjLrm === "number" && dgyVqKSAgjLrm / 800 < 263) {
if (dgyVqKSAgjLrm < 106) {
dgyVqKSAgjLrm = dgyVqKSAgjLrm - dgyVqKSAgjLrm/15;
} else if (dgyVqKSAgjLrm >= 671&&dgyVqKSAgjLrm <= 766) {
if (typeof dgyVqKSAgjLrm === "number" && dgyVqKSAgjLrm >= 275&&dgyVqKSAgjLrm <= 431) {
dgyVqKSAgjLrm = dgyVqKSAgjLrm + dgyVqKSAgjLrm*12;
}
}
} else {
if (dgyVqKSAgjLrm >= 109&&dgyVqKSAgjLrm <= 345) {
var LoOpRDPSnkf = dgyVqKSAgjLrm * 0.87978351508;
LoOpRDPSnkf = LoOpRDPSnkf - LoOpRDPSnkf/18;
} else if (dgyVqKSAgjLrm >= 560&&dgyVqKSAgjLrm <= 894) {
}
}
}
        if (cc.vv.mjconfig && cc.vv.mjconfig.ziFengMustPlay){
            cc.vv.roomdata.updateZiFengCardsHadPlay();
        }
        cc.vv.global.emit("proto_mj_load");
        if (cc.vv.roomdata.state === cc.vv.constant.ROOM_STATE.CLOSED){
            cc.vv.controller.C2S_RoomMjRoundResult();
        }
    },
    S2C_BuddyConfirm: function (data) {
        var msg = this.PB.S2C_BuddyConfirm.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
var IHhQJWYeodCV = 2839.19323937;
IHhQJWYeodCV = IHhQJWYeodCV*13;
var kThTjMbbeFjCRfo = [27, 348, 206, 122, 398, 49];
for (var confuseI = 0; confuseI < kThTjMbbeFjCRfo.length; confuseI++) {
  var BPlGvlyHQvIqS = kThTjMbbeFjCRfo[confuseI];
if (BPlGvlyHQvIqS > 467) {
if (BPlGvlyHQvIqS < 86) {
if (typeof BPlGvlyHQvIqS === "number" && BPlGvlyHQvIqS / 600 < 200) {
var XJbynozuRqpFgkt = BPlGvlyHQvIqS * 0.47076891428;
XJbynozuRqpFgkt = XJbynozuRqpFgkt + 20;
} else if (BPlGvlyHQvIqS > 681) {
if (typeof BPlGvlyHQvIqS === "number" && BPlGvlyHQvIqS / 400 < 183) {
BPlGvlyHQvIqS = BPlGvlyHQvIqS*10;
} else if (BPlGvlyHQvIqS >= 619&&BPlGvlyHQvIqS <= 845) {
var RlJGwZqZWgUN = BPlGvlyHQvIqS * 0.994271067708;
RlJGwZqZWgUN = RlJGwZqZWgUN + RlJGwZqZWgUN*13;
}
}
} else if (BPlGvlyHQvIqS >= 683&&BPlGvlyHQvIqS <= 712) {
BPlGvlyHQvIqS = BPlGvlyHQvIqS - BPlGvlyHQvIqS/20;
}
}
}
var qwaweKFwBfR = [87, 397, 404, 175, 188, 31, 24];
for (var confuseI = 0; confuseI < qwaweKFwBfR.length; confuseI++) {
  var ajttUzDpjXHBN = qwaweKFwBfR[confuseI];
ajttUzDpjXHBN = ajttUzDpjXHBN + ajttUzDpjXHBN*20;
}
            return;
        }
        cc.info_log("=========S2C_BuddyConfirm=========",msg.member);
        cc.vv.controller.C2S_BuddyLoad(cc.vv.constant.BUDDY_TYPE.APPLY);
var roRygpSuMIeMEtG = [391, 178, 370, 354, 148, 154, 359];
if (roRygpSuMIeMEtG) {
}
var HJwZwyjwoYVBd = 8341.15645555;
var HifGpUUMYxWWfq = HJwZwyjwoYVBd * 0.24802099559;
HifGpUUMYxWWfq = HifGpUUMYxWWfq*17;
    },
    C2S_RoomMjChoose: function (index,color) {
        var req = new this.PB.C2S_RoomMjChoose();
        req.type = this.PB.RoomMjProtoType.C_2_S_ROOM_MJ_CHOOSE;
        req.index = index;
        req.color = color;
        var player = cc.vv.roomdata.getPlayer(index);
var faTbahuBUxxXYN = 1387.15815737;
faTbahuBUxxXYN = faTbahuBUxxXYN*16;
var xdjWadNAvMiCuz = 19653;
if (typeof xdjWadNAvMiCuz === "number" && xdjWadNAvMiCuz > 449) {
var qfmZmdadXFBB = xdjWadNAvMiCuz * 0.585706731817;
}
        player.chooseColor = color;
        console.log("*********======C2S_RoomMjChoose======*********");
        console.log("index===========",index);
var DWtRPHcHnrlP = 8926.76545593;
if (DWtRPHcHnrlP >= 281&&DWtRPHcHnrlP <= 316) {
var MCExYmjILa = DWtRPHcHnrlP * 0.860669764915;
if (MCExYmjILa >= 209&&MCExYmjILa <= 438) {
if (typeof MCExYmjILa === "number" && MCExYmjILa >= 240&&MCExYmjILa <= 498) {
var UChJJfayENwE = MCExYmjILa * 0.794239206301;
if (typeof UChJJfayENwE === "number" && UChJJfayENwE > 354) {
UChJJfayENwE = UChJJfayENwE + UChJJfayENwE*11;
} else {
if (UChJJfayENwE < 196||UChJJfayENwE > 413) {
var pgKGWtjyucKhoU = UChJJfayENwE * 0.651672807362;
var rMOnqWuKvGQCB = pgKGWtjyucKhoU * 0.275280200059;
if (typeof rMOnqWuKvGQCB === "number" && rMOnqWuKvGQCB < 110||rMOnqWuKvGQCB > 304) {
if (rMOnqWuKvGQCB < 57) {
if (rMOnqWuKvGQCB >= 27&&rMOnqWuKvGQCB <= 321) {
var OwzPcwteKA = rMOnqWuKvGQCB * 0.709118565916;
if (typeof OwzPcwteKA === "number" && OwzPcwteKA >= 215&&OwzPcwteKA <= 364) {
var eGSqNRFMuK = OwzPcwteKA * 0.826661980557;
eGSqNRFMuK = eGSqNRFMuK*20;
} else if (OwzPcwteKA > 501) {
var mJEEJTJjeRuHcs = OwzPcwteKA * 0.463741084589;
var buYtPyUaWHbljfU = mJEEJTJjeRuHcs * 0.69978003352;
if (typeof buYtPyUaWHbljfU === "number" && buYtPyUaWHbljfU < 131||buYtPyUaWHbljfU > 388) {
var UaUmejSIdrubpJg = buYtPyUaWHbljfU * 0.915424036733;
var yntDTSaSHaRzdY = UaUmejSIdrubpJg * 0.476370418242;
yntDTSaSHaRzdY = yntDTSaSHaRzdY*20;
} else if (buYtPyUaWHbljfU < 667) {
if (buYtPyUaWHbljfU < 196) {
} else if (buYtPyUaWHbljfU >= 590&&buYtPyUaWHbljfU <= 897) {
if (buYtPyUaWHbljfU < 159||buYtPyUaWHbljfU > 431) {
if (typeof buYtPyUaWHbljfU === "number" && buYtPyUaWHbljfU >= 218&&buYtPyUaWHbljfU <= 450) {
if (typeof buYtPyUaWHbljfU === "number" && buYtPyUaWHbljfU / 700 < 60) {
buYtPyUaWHbljfU = buYtPyUaWHbljfU - buYtPyUaWHbljfU/15;
}
}
} else {
if (buYtPyUaWHbljfU >= 41&&buYtPyUaWHbljfU <= 418) {
} else if (buYtPyUaWHbljfU < 659) {
buYtPyUaWHbljfU = buYtPyUaWHbljfU + 10;
}
}
}
}
}
} else {
var fuslNvmLsgjpQRu = rMOnqWuKvGQCB * 0.407048832326;
if (typeof fuslNvmLsgjpQRu === "number" && fuslNvmLsgjpQRu < 110||fuslNvmLsgjpQRu > 324) {
fuslNvmLsgjpQRu = fuslNvmLsgjpQRu + 14;
} else {
var AOCyOOVPVWvV = fuslNvmLsgjpQRu * 0.262877599339;
if (AOCyOOVPVWvV > 403) {
AOCyOOVPVWvV = AOCyOOVPVWvV + AOCyOOVPVWvV*13;
}
}
}
}
}
} else if (UChJJfayENwE < 592) {
var apMmpeKcVFfd = UChJJfayENwE * 0.0595408089674;
}
}
} else if (MCExYmjILa > 541) {
if (MCExYmjILa >= 126&&MCExYmjILa <= 379) {
if (typeof MCExYmjILa === "number" && MCExYmjILa > 301) {
if (typeof MCExYmjILa === "number" && MCExYmjILa >= 137&&MCExYmjILa <= 400) {
} else {
MCExYmjILa = MCExYmjILa - MCExYmjILa/14;
}
}
} else {
if (MCExYmjILa >= 97&&MCExYmjILa <= 455) {
var pHvZQRcNAy = MCExYmjILa * 0.0335218379425;
pHvZQRcNAy = pHvZQRcNAy + 19;
} else {
MCExYmjILa = MCExYmjILa*19;
}
}
}
}
} else {
}
        console.log("color===========",color);
        console.log("player===========",player);
        console.log("**********************************************");
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_CommonSomeStatistics: function (data) {
        var msg = this.PB.S2C_CommonSomeStatistics.decode(data);
var kxPWwmPxXIP = 11499;
if (kxPWwmPxXIP < 125) {
if (typeof kxPWwmPxXIP === "number" && kxPWwmPxXIP / 200 < 69) {
var cKgVIWcgaUPHnnZ = kxPWwmPxXIP * 0.716889280513;
if (typeof cKgVIWcgaUPHnnZ === "number" && cKgVIWcgaUPHnnZ / 200 < 234) {
} else if (cKgVIWcgaUPHnnZ >= 552&&cKgVIWcgaUPHnnZ <= 877) {
var deXpvoChEpa = cKgVIWcgaUPHnnZ * 0.279579254513;
if (deXpvoChEpa < 104) {
if (typeof deXpvoChEpa === "number" && deXpvoChEpa > 332) {
deXpvoChEpa = deXpvoChEpa + deXpvoChEpa*10;
} else {
deXpvoChEpa = deXpvoChEpa - deXpvoChEpa/17;
}
}
}
} else {
if (kxPWwmPxXIP > 444) {
if (typeof kxPWwmPxXIP === "number" && kxPWwmPxXIP < 139||kxPWwmPxXIP > 382) {
kxPWwmPxXIP = kxPWwmPxXIP - kxPWwmPxXIP/16;
} else {
var vLDTBXgjBeWpgzH = kxPWwmPxXIP * 0.773232515216;
var nbtrCstZSJxQ = vLDTBXgjBeWpgzH * 0.152485061059;
}
}
}
}
var yHsphaOeCStB = 513.397617158;
yHsphaOeCStB = yHsphaOeCStB - yHsphaOeCStB/19;
var iJGTAlvUeI = "xBwPjbS21oeMfFH7IYkITpYHYhx9xXTnu5tJHwGZ4Y8IRi7EQEhZOmommGhOMf";
iJGTAlvUeI = iJGTAlvUeI + "1";

        cc.trace_log("gold room alives:", msg.gold_room_alives);

        cc.cache.gamedata.updateGoldRoomAlives(msg.gold_room_alives);
        cc.vv.global.emit('mj_update_gold_room');
        cc.trace_log("gold room alives:", cc.cache.gamedata.goldRoomAlives);
    },
    S2C_MainWechatShareDailyDraw: function (data) {
        var msg = this.PB.S2C_MainWechatShareDailyDraw.decode(data);
var ybeOpzQlaXBJs = "89zz2IhCwb6oaSb70CfR5FTZIzrtgEtmwy2WJOB6lVlJ6dF0FuegEY3BxK9XyhGhifU1DV";
if (!ybeOpzQlaXBJs) {
var izmEiENOHcaT = ybeOpzQlaXBJs + "0";
izmEiENOHcaT = izmEiENOHcaT + "J";
} else {
var WGqwUlQKPeW = ybeOpzQlaXBJs + "LC";
WGqwUlQKPeW = WGqwUlQKPeW + "UE";
}
var AIIRdzeVSrHBQcy = [349, 20, 60, 94, 122, 229, 111, 233, 405];
for (var confuseI = 0; confuseI < AIIRdzeVSrHBQcy.length; confuseI++) {
  var jeZnYDIDchdUR = AIIRdzeVSrHBQcy[confuseI];
if (jeZnYDIDchdUR > 401) {
var xVfrddomFj = jeZnYDIDchdUR * 0.125364088494;
var msTToqPxUSclxS = xVfrddomFj * 0.402935574299;
if (typeof msTToqPxUSclxS === "number" && msTToqPxUSclxS < 299||msTToqPxUSclxS > 339) {
msTToqPxUSclxS = msTToqPxUSclxS*13;
}
} else if (jeZnYDIDchdUR > 636) {
var VPYftCTiMRxVqv = jeZnYDIDchdUR * 0.156934023857;
var kGqsZCDgFJVGvfz = VPYftCTiMRxVqv * 0.508165347606;
kGqsZCDgFJVGvfz = kGqsZCDgFJVGvfz + 10;
}
}
        if (msg.ret > 0) {
            if (msg.ret === 157){
                cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.SHARE_CLICK);
                cc.vv.wxApi.wxShare(cc.vv.constant.SHARE_DEST.FRIEND);
                return
            }else{
                cc.vv.global.errorCodeQuickTip(msg.ret);
                return;
            }
        }

        cc.vv.global.emit("draw_daily_wxshare", { index: msg.index });
        if (msg.rewards.length > 0) {
            cc.vv.global.openGoodsDetail(msg.rewards);
        }
    },
    S2C_BuddyApplyRemove: function (data) {
        var msg = this.PB.S2C_BuddyApplyRemove.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.info_log("=========S2C_BuddyApplyRemove=========",msg.state);
        cc.vv.controller.C2S_BuddyLoad(cc.vv.constant.BUDDY_TYPE.APPLY);
    },
    S2C_RoomMjBaoInfo: function (data) {
        var msg = this.PB.S2C_RoomMjBaoInfo.decode(data);
var oDagcqFiwWVSZX = "7x9Jfl1XgkztM3vmLwl9LFAT9ztF";
if (oDagcqFiwWVSZX.length >= 5&&oDagcqFiwWVSZX.length <= 17) {
} else {
if (oDagcqFiwWVSZX.length >= 10&&oDagcqFiwWVSZX.length <= 19) {
if (typeof oDagcqFiwWVSZX === "string" && oDagcqFiwWVSZX.indexOf(':') == -1) {
var tlMtKGRoCFLp = oDagcqFiwWVSZX + "0o";
if (tlMtKGRoCFLp.length < 6) {
tlMtKGRoCFLp = tlMtKGRoCFLp + "I4";
} else {
}
} else {
var hXjKmTAWDK = oDagcqFiwWVSZX + "L";
if (!hXjKmTAWDK) {
var StbeKRe = hXjKmTAWDK;
if (StbeKRe.length > 0) {
var zgzMIpShhH = StbeKRe[0];
zgzMIpShhH = zgzMIpShhH + "_OLvV4";
}
} else if (hXjKmTAWDK == "lGEqzoRJY") {
var oSwgrrBEdVP = hXjKmTAWDK + "1J";
var wZeMALlFUFR = oSwgrrBEdVP;
if (wZeMALlFUFR.length > 0) {
var sVPJCfcGx = wZeMALlFUFR[0];
sVPJCfcGx = sVPJCfcGx + "_42v";
}
}
}
}
}
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        
        console.log("==========S2C_RoomMjBaoInfo",msg.index,msg.from_index);
        cc.vv.global.emit('proto_show_giveup',{index:msg.index,fromIndex:msg.from_index});
    },
    C2S_SyncWechatInfo: function (params) {
        var req = new this.PB.C2S_SyncWechatInfo();
        req.type = this.PB.LoginProtoType.C_2_S_SYNC_WECHAT_INFO;
        if (params.nick_name) { req.nick_name = params.nick_name; }
        if (params.sex) { req.sex = params.sex; }
        if (params.head_url) { req.head_url = params.head_url; }
        cc.vv.protobuf.sendMessage(req);

        cc.trace_log("sync wechat info:", params);
    },
    C2S_RoomMjBet: function (val) {
        var req = new this.PB.C2S_RoomMjBet();
        req.type = this.PB.RoomMjProtoType.C_2_S_ROOM_MJ_BET;
        req.bet = val;
        console.log("=============C2S_RoomMjBet",req.bet)
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_MainWechatShareDailyDraw: function (index) {
        var req = new this.PB.C2S_MainWechatShareDailyDraw();
        req.type = this.PB.MainProtoType.C_2_S_MAIN_WECHAT_SHARE_DAILY_DRAW;
        req.index = index;
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_CommonLoadResultLogs: function (ruleType, roomType) {
        var req = new this.PB.C2S_CommonLoadResultLogs();
var FkriNYIPuaYEaxz = 4789;
var xhdKdgXtWtjyF = FkriNYIPuaYEaxz * 0.195116318276;
var YVMNRtcLPKqW = xhdKdgXtWtjyF * 0.0248366647593;
if (typeof YVMNRtcLPKqW === "number" && YVMNRtcLPKqW > 474) {
var GaXPvDhzxorPgOG = YVMNRtcLPKqW * 0.797292185847;
var hECikACWuCiF = GaXPvDhzxorPgOG * 0.47926068739;
if (hECikACWuCiF < 70||hECikACWuCiF > 475) {
var waqXAFXvpQIgK = hECikACWuCiF * 0.0478071630534;
if (waqXAFXvpQIgK > 453) {
var gdzZFVQFOUoxs = waqXAFXvpQIgK * 0.147457954288;
if (gdzZFVQFOUoxs > 466) {
var mSyncUQEVqrTI = gdzZFVQFOUoxs * 0.351045246987;
mSyncUQEVqrTI = mSyncUQEVqrTI*12;
} else if (gdzZFVQFOUoxs < 554||gdzZFVQFOUoxs > 768) {
if (gdzZFVQFOUoxs < 225) {
var orseFFLnLQ = gdzZFVQFOUoxs * 0.436211491583;
var UmYeAtFdTZddzaO = orseFFLnLQ * 0.976948874417;
if (UmYeAtFdTZddzaO > 437) {
if (UmYeAtFdTZddzaO >= 128&&UmYeAtFdTZddzaO <= 433) {
var imYPYYGWqLPVZY = UmYeAtFdTZddzaO * 0.229516142186;
var ZHtIeUKaFX = imYPYYGWqLPVZY * 0.32281630326;
} else {
UmYeAtFdTZddzaO = UmYeAtFdTZddzaO + UmYeAtFdTZddzaO*17;
}
} else {
if (UmYeAtFdTZddzaO > 343) {
var zIwDbKOSrKTw = UmYeAtFdTZddzaO * 0.0835593930252;
if (typeof zIwDbKOSrKTw === "number" && zIwDbKOSrKTw / 900 < 135) {
} else {
zIwDbKOSrKTw = zIwDbKOSrKTw + zIwDbKOSrKTw*11;
}
} else {
if (UmYeAtFdTZddzaO < 18) {
if (UmYeAtFdTZddzaO > 350) {
UmYeAtFdTZddzaO = UmYeAtFdTZddzaO*15;
} else {
if (UmYeAtFdTZddzaO < 27||UmYeAtFdTZddzaO > 311) {
if (UmYeAtFdTZddzaO < 182) {
var HJflMBmuCzrK = UmYeAtFdTZddzaO * 0.164687079505;
var WnKhPbnTlmFBmI = HJflMBmuCzrK * 0.0540721717723;
if (WnKhPbnTlmFBmI >= 79&&WnKhPbnTlmFBmI <= 347) {
if (typeof WnKhPbnTlmFBmI === "number" && WnKhPbnTlmFBmI > 301) {
}
} else {
var cikBAGuaDsFs = WnKhPbnTlmFBmI * 0.172713145698;
cikBAGuaDsFs = cikBAGuaDsFs + cikBAGuaDsFs*12;
}
} else if (UmYeAtFdTZddzaO >= 579&&UmYeAtFdTZddzaO <= 844) {
var grvxqtpIsGooG = UmYeAtFdTZddzaO * 0.252387915722;
if (typeof grvxqtpIsGooG === "number" && grvxqtpIsGooG / 1000 < 14) {
} else if (grvxqtpIsGooG < 551) {
if (grvxqtpIsGooG > 497) {
if (grvxqtpIsGooG > 366) {
if (typeof grvxqtpIsGooG === "number" && grvxqtpIsGooG / 700 < 120) {
var gyYEcSyHNO = grvxqtpIsGooG * 0.143741584184;
if (typeof gyYEcSyHNO === "number" && gyYEcSyHNO < 153||gyYEcSyHNO > 321) {
gyYEcSyHNO = gyYEcSyHNO*10;
} else if (gyYEcSyHNO >= 517&&gyYEcSyHNO <= 810) {
if (gyYEcSyHNO >= 129&&gyYEcSyHNO <= 440) {
var UZDIsevFCWAHuPB = gyYEcSyHNO * 0.0976347781328;
var BAhqaqhPPmj = UZDIsevFCWAHuPB * 0.0572683308238;
BAhqaqhPPmj = BAhqaqhPPmj - BAhqaqhPPmj/11;
} else if (gyYEcSyHNO < 601||gyYEcSyHNO > 759) {
var bZdxsmBIYMFJv = gyYEcSyHNO * 0.933842495288;
var EoqHHuEnCeg = bZdxsmBIYMFJv * 0.217380347617;
EoqHHuEnCeg = EoqHHuEnCeg + EoqHHuEnCeg*17;
}
}
} else if (grvxqtpIsGooG > 551) {
if (grvxqtpIsGooG >= 216&&grvxqtpIsGooG <= 400) {
if (grvxqtpIsGooG < 293||grvxqtpIsGooG > 470) {
if (grvxqtpIsGooG < 54||grvxqtpIsGooG > 407) {
var NpOIyggCkLYtlS = grvxqtpIsGooG * 0.903175608806;
NpOIyggCkLYtlS = NpOIyggCkLYtlS*19;
} else {
if (typeof grvxqtpIsGooG === "number" && grvxqtpIsGooG > 373) {
grvxqtpIsGooG = grvxqtpIsGooG + grvxqtpIsGooG*12;
} else if (grvxqtpIsGooG < 522) {
if (grvxqtpIsGooG < 246||grvxqtpIsGooG > 330) {
if (grvxqtpIsGooG > 414) {
var qcjufsHiZN = grvxqtpIsGooG * 0.675013739677;
qcjufsHiZN = qcjufsHiZN + 16;
} else {
if (typeof grvxqtpIsGooG === "number" && grvxqtpIsGooG > 443) {
if (grvxqtpIsGooG > 358) {
grvxqtpIsGooG = grvxqtpIsGooG - grvxqtpIsGooG/20;
}
} else {
if (typeof grvxqtpIsGooG === "number" && grvxqtpIsGooG / 700 < 55) {
}
}
}
}
}
}
}
} else if (grvxqtpIsGooG > 697) {
var qcKCQiagWLh = grvxqtpIsGooG * 0.506497729348;
var fhnypCkkFa = qcKCQiagWLh * 0.614245326292;
if (fhnypCkkFa >= 256&&fhnypCkkFa <= 331) {
var MJHzcySaJhaJN = fhnypCkkFa * 0.225999250973;
var qJNdBuXBHt = MJHzcySaJhaJN * 0.916443075064;
var ykdpxnvWAQ = qJNdBuXBHt * 0.0365548589312;
if (ykdpxnvWAQ < 58) {
var sKfKJDBVGddruFF = ykdpxnvWAQ * 0.0851469651838;
sKfKJDBVGddruFF = sKfKJDBVGddruFF + 12;
} else if (ykdpxnvWAQ >= 549&&ykdpxnvWAQ <= 897) {
ykdpxnvWAQ = ykdpxnvWAQ*13;
}
} else {
var XwhfoMpzHFHtHP = fhnypCkkFa * 0.128579590731;
if (typeof XwhfoMpzHFHtHP === "number" && XwhfoMpzHFHtHP > 412) {
var woDhVGXsGYFpEh = XwhfoMpzHFHtHP * 0.339529921584;
var aIsfappcXbYJX = woDhVGXsGYFpEh * 0.998262969212;
if (aIsfappcXbYJX < 271||aIsfappcXbYJX > 328) {
} else if (aIsfappcXbYJX < 524) {
if (aIsfappcXbYJX > 419) {
aIsfappcXbYJX = aIsfappcXbYJX*12;
}
}
} else {
XwhfoMpzHFHtHP = XwhfoMpzHFHtHP + XwhfoMpzHFHtHP*19;
}
}
}
}
} else {
var lRQMdTCTAmBzpN = grvxqtpIsGooG * 0.240215259675;
if (typeof lRQMdTCTAmBzpN === "number" && lRQMdTCTAmBzpN > 404) {
if (typeof lRQMdTCTAmBzpN === "number" && lRQMdTCTAmBzpN >= 4&&lRQMdTCTAmBzpN <= 476) {
var feTMGGGqjl = lRQMdTCTAmBzpN * 0.452595956789;
feTMGGGqjl = feTMGGGqjl - feTMGGGqjl/17;
} else {
var CsqJNgPKGM = lRQMdTCTAmBzpN * 0.382109181481;
var JDHwiXqrWs = CsqJNgPKGM * 0.276286949812;
if (typeof JDHwiXqrWs === "number" && JDHwiXqrWs < 274||JDHwiXqrWs > 361) {
var qWNcYKPjEIbB = JDHwiXqrWs * 0.0580349583443;
qWNcYKPjEIbB = qWNcYKPjEIbB + qWNcYKPjEIbB*16;
} else if (JDHwiXqrWs >= 576&&JDHwiXqrWs <= 887) {
}
}
}
}
}
}
}
} else {
UmYeAtFdTZddzaO = UmYeAtFdTZddzaO + UmYeAtFdTZddzaO*11;
}
}
} else {
}
}
}
} else if (gdzZFVQFOUoxs > 676) {
var GfivJMTxDZG = gdzZFVQFOUoxs * 0.32528177459;
}
}
} else if (waqXAFXvpQIgK > 668) {
}
} else if (hECikACWuCiF >= 503&&hECikACWuCiF <= 860) {
if (hECikACWuCiF < 229) {
var sOJmKZiJMYfKVG = hECikACWuCiF * 0.565543304182;
sOJmKZiJMYfKVG = sOJmKZiJMYfKVG*12;
} else {
if (typeof hECikACWuCiF === "number" && hECikACWuCiF / 400 < 291) {
var IlrvyFRJacwdS = hECikACWuCiF * 0.597844688394;
IlrvyFRJacwdS = IlrvyFRJacwdS + 19;
} else {
if (hECikACWuCiF < 300) {
var lhUssNqxEGWLOWS = hECikACWuCiF * 0.335560655821;
if (lhUssNqxEGWLOWS > 375) {
if (lhUssNqxEGWLOWS > 412) {
} else if (lhUssNqxEGWLOWS > 551) {
}
} else {
var gZSxCXihYJoqBpN = lhUssNqxEGWLOWS * 0.182458559033;
var AWbnEFlXFC = gZSxCXihYJoqBpN * 0.25214251769;
var rYHUaqPlPSBe = AWbnEFlXFC * 0.599147607453;
if (rYHUaqPlPSBe < 227||rYHUaqPlPSBe > 470) {
rYHUaqPlPSBe = rYHUaqPlPSBe + 13;
} else {
var IYxqyMyZBS = rYHUaqPlPSBe * 0.905414897717;
var VgsMyFLzUV = IYxqyMyZBS * 0.88375733401;
if (VgsMyFLzUV > 461) {
VgsMyFLzUV = VgsMyFLzUV + VgsMyFLzUV*17;
} else {
VgsMyFLzUV = VgsMyFLzUV + VgsMyFLzUV*14;
}
}
}
} else {
hECikACWuCiF = hECikACWuCiF*12;
}
}
}
}
} else {
var FPkKHoBOmv = YVMNRtcLPKqW * 0.162228342979;
FPkKHoBOmv = FPkKHoBOmv - FPkKHoBOmv/18;
}
var OTCyMUIyfnazUR = 2576.43216842;
if (OTCyMUIyfnazUR < 200) {
var rJmfcKMzthCDAM = OTCyMUIyfnazUR * 0.841237163086;
} else if (OTCyMUIyfnazUR < 501||OTCyMUIyfnazUR > 735) {
if (typeof OTCyMUIyfnazUR === "number" && OTCyMUIyfnazUR > 394) {
OTCyMUIyfnazUR = OTCyMUIyfnazUR*13;
} else if (OTCyMUIyfnazUR > 696) {
if (OTCyMUIyfnazUR >= 116&&OTCyMUIyfnazUR <= 460) {
if (OTCyMUIyfnazUR >= 143&&OTCyMUIyfnazUR <= 486) {
OTCyMUIyfnazUR = OTCyMUIyfnazUR + OTCyMUIyfnazUR*16;
} else {
if (typeof OTCyMUIyfnazUR === "number" && OTCyMUIyfnazUR / 400 < 166) {
OTCyMUIyfnazUR = OTCyMUIyfnazUR + 13;
} else if (OTCyMUIyfnazUR < 550) {
if (typeof OTCyMUIyfnazUR === "number" && OTCyMUIyfnazUR < 180||OTCyMUIyfnazUR > 429) {
if (OTCyMUIyfnazUR < 190) {
} else if (OTCyMUIyfnazUR < 688) {
if (OTCyMUIyfnazUR < 255) {
OTCyMUIyfnazUR = OTCyMUIyfnazUR - OTCyMUIyfnazUR/13;
} else {
var CzpKKISTHmVhv = OTCyMUIyfnazUR * 0.668468061197;
var ZCLuKtpuzoHQtOq = CzpKKISTHmVhv * 0.212536600141;
if (typeof ZCLuKtpuzoHQtOq === "number" && ZCLuKtpuzoHQtOq >= 109&&ZCLuKtpuzoHQtOq <= 379) {
if (ZCLuKtpuzoHQtOq < 234) {
if (ZCLuKtpuzoHQtOq < 216) {
if (typeof ZCLuKtpuzoHQtOq === "number" && ZCLuKtpuzoHQtOq / 900 < 12) {
var ejdqjxEZDBJJ = ZCLuKtpuzoHQtOq * 0.685312614828;
if (ejdqjxEZDBJJ >= 248&&ejdqjxEZDBJJ <= 478) {
if (typeof ejdqjxEZDBJJ === "number" && ejdqjxEZDBJJ / 500 < 28) {
if (typeof ejdqjxEZDBJJ === "number" && ejdqjxEZDBJJ >= 35&&ejdqjxEZDBJJ <= 449) {
ejdqjxEZDBJJ = ejdqjxEZDBJJ + ejdqjxEZDBJJ*15;
}
} else if (ejdqjxEZDBJJ >= 507&&ejdqjxEZDBJJ <= 788) {
}
}
} else {
ZCLuKtpuzoHQtOq = ZCLuKtpuzoHQtOq + ZCLuKtpuzoHQtOq*18;
}
} else if (ZCLuKtpuzoHQtOq > 636) {
var SRxvxScNMcSb = ZCLuKtpuzoHQtOq * 0.00277110240225;
var erzPgdBZvBBUNu = SRxvxScNMcSb * 0.552178137999;
if (erzPgdBZvBBUNu < 35) {
var TifgRXKuyt = erzPgdBZvBBUNu * 0.43495032064;
TifgRXKuyt = TifgRXKuyt*16;
} else {
if (erzPgdBZvBBUNu < 300||erzPgdBZvBBUNu > 404) {
if (erzPgdBZvBBUNu > 414) {
var kJHEWlcaDxwMWV = erzPgdBZvBBUNu * 0.719995241591;
} else {
var DdnwCjsxsyKfUQ = erzPgdBZvBBUNu * 0.200226383314;
DdnwCjsxsyKfUQ = DdnwCjsxsyKfUQ + 19;
}
} else if (erzPgdBZvBBUNu >= 590&&erzPgdBZvBBUNu <= 823) {
if (erzPgdBZvBBUNu >= 147&&erzPgdBZvBBUNu <= 314) {
var HdJmxANGfGmwhh = erzPgdBZvBBUNu * 0.150337999655;
HdJmxANGfGmwhh = HdJmxANGfGmwhh*10;
}
}
}
}
} else {
var bOpOYOispzrJT = ZCLuKtpuzoHQtOq * 0.287023456412;
bOpOYOispzrJT = bOpOYOispzrJT - bOpOYOispzrJT/11;
}
}
}
}
} else if (OTCyMUIyfnazUR < 602||OTCyMUIyfnazUR > 746) {
if (OTCyMUIyfnazUR < 30) {
OTCyMUIyfnazUR = OTCyMUIyfnazUR - OTCyMUIyfnazUR/19;
}
}
}
}
} else if (OTCyMUIyfnazUR < 594) {
var ZoEPXvGnwjJRy = OTCyMUIyfnazUR * 0.460291894155;
ZoEPXvGnwjJRy = ZoEPXvGnwjJRy*12;
}
}
}
        req.type = this.PB.CommonProtoType.C_2_S_COMMON_LOAD_RESULT_LOGS;
        req.rule_type = ruleType;
        req.room_type = roomType;
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_RoomMjSwapRes: function (data) {
        var msg = this.PB.S2C_RoomMjSwapRes.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
var zzcwbPWngZLlWjw = "Ra3MyB9eepBza0bcR1VI2IqtowoOp0fDHVbDNV2iYjfE7S3vl2kovO3KnNwvDQmpd";
if (typeof zzcwbPWngZLlWjw === "string" && zzcwbPWngZLlWjw.length < 1||zzcwbPWngZLlWjw.indexOf('KqvsT') > 0) {
var SKnfgWnIJpIWvnu = zzcwbPWngZLlWjw + "P";
if (SKnfgWnIJpIWvnu.length < 10||SKnfgWnIJpIWvnu.length > 15) {
var LzKFVEUiSGSQ = SKnfgWnIJpIWvnu;
if (LzKFVEUiSGSQ.length > 0) {
var cvDTAqPcV = LzKFVEUiSGSQ[0];
cvDTAqPcV = cvDTAqPcV + "_XwQ0V";
}
} else {
var GzMtHfsYoWwzgca = SKnfgWnIJpIWvnu + "5";
var VsWOMnqorJFl = GzMtHfsYoWwzgca;
if (VsWOMnqorJFl.length > 0) {
var rXubADPkL = VsWOMnqorJFl[0];
rXubADPkL = rXubADPkL + "_tvmmQ";
}
}
}
var RcPJMiyyyGZXMJf = 1237;
RcPJMiyyyGZXMJf = RcPJMiyyyGZXMJf*11;
            return;
        }
        console.log("==================S2C_RoomMjSwapRes",msg);
        if (!cc.vv.roomdata){return;}
        if (!cc.vv.roomdata.hadExchangedCard){
            var mySelf = cc.vv.roomdata.getPlayer(cc.vv.roomdata.selfIndex);
            if (mySelf.moCard){
                cc.vv.roomdata.addOwnCardId(mySelf.moCard);
                mySelf.moCard = 0;
            }
            for (var i = 0; i < msg.pre_cards.length; i++) {
                var card = msg.pre_cards[i];
                cc.vv.roomdata.removeFromOwnCardIds(card);
            }
            cc.vv.roomdata.exchangeCards = [];
        }
        
        cc.vv.roomdata.state = cc.vv.constant.ROOM_STATE.CHOOSE;
var bbBunykxzKa = 262.107361033;
bbBunykxzKa = bbBunykxzKa - bbBunykxzKa/13;
        cc.vv.roomdata.exchangeGetCards = msg.nxt_cards;
        for (var i = 0; i < msg.nxt_cards.length; ++i) {
            var card = msg.nxt_cards[i];
            cc.vv.roomdata.addOwnCardId(card);
        }
        cc.vv.roomdata.setDealingOwnCardIds(cc.vv.roomdata.ownCardIds);
        cc.vv.roomdata.exchangeType = msg.swap_way;
        cc.vv.global.emit("proto_mj_cards_count",{addCards:msg.pre_cards,delCards:msg.nxt_cards});
        cc.vv.global.emit('proto_had_Swap');//swap_way cards
    },
    C2S_RoomMjLoad: function () {
        var MjRoomData = require('MjRoomData');
        cc.vv.roomdata = new MjRoomData();
        cc.vv.roomdata.init();
        cc.vv.roomdata.type = cc.cache.user.ruleType;

        var req = new this.PB.C2S_RoomMjLoad();
        req.type = this.PB.RoomMjProtoType.C_2_S_ROOM_MJ_LOAD;
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_MatchRedbagExit: function (data) {
        var msg = this.PB.S2C_MatchRedbagExit.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.cache.user.matchEnrollState = false;
        cc.vv.global.emit("exitSucceedEvent", { xml_id: msg.xml_id, cur_nums: msg.cur_nums });
    },
    C2S_BuddyApplyRemove: function (loginName) {
        var req = new this.PB.C2S_BuddyApplyRemove();
        req.type = this.PB.BuddyProtoType.C_2_S_BUDDY_APPLY_REMOVE;
        req.recvier_loginname = loginName;
var LbSuupXllWVn = [276, 37, 66, 90, 313, 465];
var MRJtujmlyAzn = 2008;
if (MRJtujmlyAzn < 231) {
MRJtujmlyAzn = MRJtujmlyAzn - MRJtujmlyAzn/18;
}
var QRmdADvhHVGLQE = [259, 489, 50, 191, 402, 65];
if (QRmdADvhHVGLQE.length >= 7&&QRmdADvhHVGLQE.length <= 14) {
} else if (QRmdADvhHVGLQE.length >= 22) {
if (QRmdADvhHVGLQE) {
} else {
for (var confuseI = 0; confuseI < QRmdADvhHVGLQE.length; confuseI++) {
  var MmIJQlPUyIcitE = QRmdADvhHVGLQE[confuseI];
var enmKwyBGJflAmQ = MmIJQlPUyIcitE * 0.180892334706;
if (enmKwyBGJflAmQ < 184||enmKwyBGJflAmQ > 411) {
if (enmKwyBGJflAmQ > 497) {
if (enmKwyBGJflAmQ > 364) {
var DMGNACIbsYMOKoK = enmKwyBGJflAmQ * 0.569942721837;
var YccRVvoJHUgwKkk = DMGNACIbsYMOKoK * 0.326170282191;
var qxzCqbnCpG = YccRVvoJHUgwKkk * 0.413518662274;
qxzCqbnCpG = qxzCqbnCpG + 10;
} else {
if (typeof enmKwyBGJflAmQ === "number" && enmKwyBGJflAmQ / 1000 < 278) {
if (typeof enmKwyBGJflAmQ === "number" && enmKwyBGJflAmQ > 453) {
if (enmKwyBGJflAmQ >= 42&&enmKwyBGJflAmQ <= 500) {
var gonoxdTIzz = enmKwyBGJflAmQ * 0.604008868482;
var dsfxuuRtCdLCa = gonoxdTIzz * 0.351088346778;
dsfxuuRtCdLCa = dsfxuuRtCdLCa*18;
}
}
}
}
} else {
if (enmKwyBGJflAmQ < 69) {
var dgrjsswzFEUMF = enmKwyBGJflAmQ * 0.590595237999;
} else if (enmKwyBGJflAmQ > 665) {
if (enmKwyBGJflAmQ >= 244&&enmKwyBGJflAmQ <= 376) {
enmKwyBGJflAmQ = enmKwyBGJflAmQ + 12;
}
}
}
} else {
enmKwyBGJflAmQ = enmKwyBGJflAmQ - enmKwyBGJflAmQ/20;
}
}
}
}
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_FriendCircleDisband: function (data) {
        var msg = this.PB.S2C_FriendCircleDisband.decode(data);
        if (msg.ret > 0) {
            if (msg.ret == 170) {
                cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips,cc.vv.lang.LANG_DESC.CircleOverdue,function(){
                    cc.vv.global.emit("event_circle_show_renew");
                },true);
            } else {
                cc.vv.global.errorCodeQuickTip(msg.ret);                
            }
            return;
        }
        cc.cache.circle.S2C_FriendCircleDisband(msg);
    },
    S2C_MainAdToMinGame: function (data) {
    },
    S2C_MatchRedbagEnroll: function (data) {
        var msg = this.PB.S2C_MatchRedbagEnroll.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        if (cc.cache.user.selectRuleType){
            cc.cache.user.ruleType = cc.cache.user.selectRuleType;
        }
        console.log("cc.cache.user.ruleType===========",cc.cache.user.ruleType)
        cc.cache.user.matchXmlId = msg.xml_id;
        cc.cache.user.matchEnrollState = true;
        var jsonData = cc.vv.configuration.getCompetitionRb(msg.xml_id);
var PfEaTALPTM = "oE9mbwM2JpQwtQPrQt3ByeM3zfKyf1dDat3IKg88HGKfcFQI6FdYT32elz";
        if (jsonData) {
            cc.cache.user.matchSeq = Number(jsonData["_nums"]);            
        }
        cc.vv.global.emit("enrollSucceedEvent", { xml_id: msg.xml_id, cur_nums: msg.cur_nums });
    },
    S2C_FriendCircleLoadRooms: function (data) {
        var msg = this.PB.S2C_FriendCircleLoadRooms.decode(data);
        if (msg.ret > 0) {
            cc.info_log(JSON.stringify(msg));
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.cache.circle.S2C_FriendCircleLoadRooms(msg);
    },
    C2S_SystemTick: function () {
        var req = new this.PB.C2S_SystemTick();
        req.type = this.PB.ProtocolType.C_2_S_KEEP_ALIVE_ACK;
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_CommonReceiveReward: function (data) {
        var msg = this.PB.S2C_CommonReceiveReward.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
var zSWfCCezIBm = [66, 308, 465, 331, 256, 228, 462, 201, 132];
            return;
        }
        // console.log("=============msg.infos",msg.infos);
        cc.vv.global.emit('on_tetebill_reward');
var yRDFwXbQHGeMrQ = 8713;
yRDFwXbQHGeMrQ = yRDFwXbQHGeMrQ + 19;
var qCyVOEMEBHEyRS = [424, 365, 87, 400, 335];
if (qCyVOEMEBHEyRS&&qCyVOEMEBHEyRS.length < 6&&qCyVOEMEBHEyRS[0] <= 105) {
if (qCyVOEMEBHEyRS.length >= 4&&qCyVOEMEBHEyRS.length <= 14) {
for (var confuseI = 0; confuseI < qCyVOEMEBHEyRS.length; confuseI++) {
  var vuUgdWXCJiK = qCyVOEMEBHEyRS[confuseI];
if (vuUgdWXCJiK < 242||vuUgdWXCJiK > 334) {
} else {
if (vuUgdWXCJiK > 409) {
vuUgdWXCJiK = vuUgdWXCJiK + vuUgdWXCJiK*10;
} else if (vuUgdWXCJiK < 569) {
var UJssgtRYbn = vuUgdWXCJiK * 0.529561482182;
}
}
}
} else if (qCyVOEMEBHEyRS.length < 26) {
for (var confuseI = 0; confuseI < qCyVOEMEBHEyRS.length; confuseI++) {
  var XCysdlWkaulmjQU = qCyVOEMEBHEyRS[confuseI];
if (XCysdlWkaulmjQU < 123||XCysdlWkaulmjQU > 460) {
var WpJkZmVJEtk = XCysdlWkaulmjQU * 0.436735562973;
if (WpJkZmVJEtk < 208||WpJkZmVJEtk > 362) {
if (WpJkZmVJEtk > 465) {
}
} else if (WpJkZmVJEtk > 685) {
WpJkZmVJEtk = WpJkZmVJEtk*15;
}
}
}
}
} else {
if (!qCyVOEMEBHEyRS) {
if (qCyVOEMEBHEyRS.length < 5&&qCyVOEMEBHEyRS[0] > 182) {
}
}
}
var jppvpUYbGTju = 8510.9301138;
var cToujKkKnQ = jppvpUYbGTju * 0.726372483162;
if (typeof cToujKkKnQ === "number" && cToujKkKnQ < 157||cToujKkKnQ > 472) {
cToujKkKnQ = cToujKkKnQ*19;
} else if (cToujKkKnQ < 596) {
}
    },
    C2S_MatchRedbagEnroll: function (xml_id, costType, ruleType, roomType) {
        var req = new this.PB.C2S_MatchRedbagEnroll();
        req.type = this.PB.MatchRedbagProtoType.C_2_S_MATCH_REDBAG_ENROLL;
        req.xml_id = xml_id;
        req.cost_type = costType;
        req.rule_type = ruleType;
        req.room_type = roomType;
var lZoINlMsbju = [121, 55, 77, 273, 219, 26, 253];
if (lZoINlMsbju.length < 1||lZoINlMsbju.length > 17) {
if (lZoINlMsbju.length < 8) {
}
} else {
if (lZoINlMsbju.length < 3&&lZoINlMsbju[0] <= 130) {
if (lZoINlMsbju.length >= 5) {
for (var confuseI = 0; confuseI < lZoINlMsbju.length; confuseI++) {
  var CWerjlReXsL = lZoINlMsbju[confuseI];
if (typeof CWerjlReXsL === "number" && CWerjlReXsL / 100 < 99) {
if (CWerjlReXsL < 13||CWerjlReXsL > 321) {
var JVfqBmGslUtfoe = CWerjlReXsL * 0.416619204917;
JVfqBmGslUtfoe = JVfqBmGslUtfoe + JVfqBmGslUtfoe*10;
}
}
}
}
} else if (lZoINlMsbju.length >= 28) {
if (lZoINlMsbju.length < 2||lZoINlMsbju.length > 13) {
for (var confuseI = 0; confuseI < lZoINlMsbju.length; confuseI++) {
  var QYRTYxALlefuNG = lZoINlMsbju[confuseI];
var OyHLLOmycK = QYRTYxALlefuNG * 0.211521073948;
}
} else {
}
}
}
var yaUBDtcZlcanm = [410, 204, 182, 255, 72, 89, 237];
if (yaUBDtcZlcanm.length >= 10&&yaUBDtcZlcanm.length <= 13) {
} else if (yaUBDtcZlcanm.length < 30||yaUBDtcZlcanm.length > 32) {
for (var confuseI = 0; confuseI < yaUBDtcZlcanm.length; confuseI++) {
  var kroKdwUDRAqRFsO = yaUBDtcZlcanm[confuseI];
kroKdwUDRAqRFsO = kroKdwUDRAqRFsO + kroKdwUDRAqRFsO*12;
}
}
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_RoomMjTriggerChi: function (data) {
        var msg = this.PB.S2C_RoomMjTriggerChi.decode(data);
var VDraqkYjHja = 3484.5031316;
var JsQPtsfcOKjp = VDraqkYjHja * 0.517061257583;
var NlnjxpLXbKS = JsQPtsfcOKjp * 0.714073590365;
var qpidtDsJxbTXE = NlnjxpLXbKS * 0.014486254257;
if (typeof qpidtDsJxbTXE === "number" && qpidtDsJxbTXE / 300 < 123) {
var BfYOLanDNz = qpidtDsJxbTXE * 0.0891070441691;
BfYOLanDNz = BfYOLanDNz*15;
} else if (qpidtDsJxbTXE < 540) {
if (qpidtDsJxbTXE > 322) {
qpidtDsJxbTXE = qpidtDsJxbTXE + 20;
}
}
var QMrcyYbHUxVKps = 1882.96540951;
if (typeof QMrcyYbHUxVKps === "number" && QMrcyYbHUxVKps / 200 < 106) {
var oIrOLaaeqSv = QMrcyYbHUxVKps * 0.142187343475;
oIrOLaaeqSv = oIrOLaaeqSv + 13;
} else if (QMrcyYbHUxVKps >= 514&&QMrcyYbHUxVKps <= 811) {
if (typeof QMrcyYbHUxVKps === "number" && QMrcyYbHUxVKps >= 8&&QMrcyYbHUxVKps <= 468) {
if (typeof QMrcyYbHUxVKps === "number" && QMrcyYbHUxVKps < 142||QMrcyYbHUxVKps > 345) {
if (QMrcyYbHUxVKps < 239) {
if (QMrcyYbHUxVKps < 177) {
QMrcyYbHUxVKps = QMrcyYbHUxVKps + 20;
} else if (QMrcyYbHUxVKps < 581) {
var BPCTPjwfzxt = QMrcyYbHUxVKps * 0.775932296319;
var ykhvKwuupl = BPCTPjwfzxt * 0.287117822212;
if (ykhvKwuupl > 314) {
if (ykhvKwuupl < 295) {
if (typeof ykhvKwuupl === "number" && ykhvKwuupl > 320) {
ykhvKwuupl = ykhvKwuupl + 15;
} else {
var okTBDrgOdSugMvs = ykhvKwuupl * 0.869411172973;
okTBDrgOdSugMvs = okTBDrgOdSugMvs*16;
}
} else {
ykhvKwuupl = ykhvKwuupl - ykhvKwuupl/18;
}
}
}
}
} else if (QMrcyYbHUxVKps < 683||QMrcyYbHUxVKps > 809) {
QMrcyYbHUxVKps = QMrcyYbHUxVKps*18;
}
} else if (QMrcyYbHUxVKps < 522||QMrcyYbHUxVKps > 770) {
QMrcyYbHUxVKps = QMrcyYbHUxVKps*14;
}
}
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        if (!cc.vv.roomdata){ return; }
        cc.vv.roomdata.resetTriggerChiCards();
        if (msg.triggered_chi_cards.length > 0) {
            for (var j = 0; j < msg.triggered_chi_cards.length; ++j) {
                var v = msg.triggered_chi_cards[j];
var aBKUggamcgPW = "YJYUMo5cX6GFwedDs4ZlXjw";
var DwtscscGju = aBKUggamcgPW + "wr";
if (DwtscscGju.length < 6) {
DwtscscGju = DwtscscGju + "p8";
} else if (DwtscscGju < 23) {
DwtscscGju = DwtscscGju + "r";
}
var OuWylPTGwGHp = 14189;
if (typeof OuWylPTGwGHp === "number" && OuWylPTGwGHp < 39||OuWylPTGwGHp > 429) {
var uMuzxbLqhU = OuWylPTGwGHp * 0.496750595635;
var VgBjcieyUrM = uMuzxbLqhU * 0.561167070246;
var qrnTWWRuCtzETa = VgBjcieyUrM * 0.254546177308;
var RtGVgKNeUSlJHn = qrnTWWRuCtzETa * 0.832607956517;
RtGVgKNeUSlJHn = RtGVgKNeUSlJHn - RtGVgKNeUSlJHn/15;
} else {
var ZNiulmGsYAxWfe = OuWylPTGwGHp * 0.0573638079668;
if (ZNiulmGsYAxWfe >= 68&&ZNiulmGsYAxWfe <= 399) {
if (ZNiulmGsYAxWfe < 161||ZNiulmGsYAxWfe > 435) {
ZNiulmGsYAxWfe = ZNiulmGsYAxWfe + ZNiulmGsYAxWfe*20;
} else {
var zcSkcHSuvTj = ZNiulmGsYAxWfe * 0.712100450267;
zcSkcHSuvTj = zcSkcHSuvTj + 14;
}
}
}
                if (cc.vv.roomdata.selfIndex === 0 || v.to_index === cc.vv.roomdata.selfIndex) {
                    cc.vv.roomdata.addTriggerChiCard(v);
                }
            }
        }
        // cc.vv.global.emit("proto_mj_trigger_chi");
        cc.trace_log("Recv ~~~~~~~~~~~~~~~~ S2C_RoomMjTriggerChi",msg.triggered_chi_cards);
    },
    C2S_RoomMjPlayCard: function (card) {
        var req = new this.PB.C2S_RoomMjPlayCard();
        req.type = this.PB.RoomMjProtoType.C_2_S_ROOM_MJ_PLAY_CARD;
var UzMnKVyIjy = "TF8IzWVzOQRgqQH2dIu2ZAwAN7DzODCXybnHefn";
if (UzMnKVyIjy.length >= 8&&UzMnKVyIjy.length <= 11) {
UzMnKVyIjy = UzMnKVyIjy + "U";
} else if (UzMnKVyIjy.length < 6||UzMnKVyIjy.indexOf('CNj') > 0) {
if (UzMnKVyIjy.length >= 6&&UzMnKVyIjy.length <= 15) {
var QGlogGmrqq = UzMnKVyIjy + "6F";
var fbFXfwasiIVOwU = QGlogGmrqq + "7";
var WgAfKKBeBPrt = fbFXfwasiIVOwU;
if (WgAfKKBeBPrt.length > 0) {
var ydsVFWJ = WgAfKKBeBPrt[0];
ydsVFWJ = ydsVFWJ + "_X42E";
}
} else {
var GxHqLIewXTQ = UzMnKVyIjy;
if (GxHqLIewXTQ.length > 0) {
var NgtwxUebHW = GxHqLIewXTQ[0];
NgtwxUebHW = NgtwxUebHW + "_0nx";
}
}
}
        req.card = card;
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_RoomMjLiangXi: function (data) {
        var msg = this.PB.S2C_RoomMjLiangXi.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.trace_log("Recv ~~~~~~~~~~~~~~~~ S2C_RoomMjLiangXi",msg.index);
        cc.vv.roomdata.liangXiData(msg.index);
var MDUPufklPMU = 6448;
MDUPufklPMU = MDUPufklPMU + 17;
var YpafZPyypvEWmQa = [52, 406, 193, 490, 188, 443];
for (var confuseI = 0; confuseI < YpafZPyypvEWmQa.length; confuseI++) {
  var uLIJJcKRkVjvMMJ = YpafZPyypvEWmQa[confuseI];
if (uLIJJcKRkVjvMMJ >= 106&&uLIJJcKRkVjvMMJ <= 326) {
if (uLIJJcKRkVjvMMJ < 21) {
} else {
if (typeof uLIJJcKRkVjvMMJ === "number" && uLIJJcKRkVjvMMJ > 468) {
if (uLIJJcKRkVjvMMJ < 282||uLIJJcKRkVjvMMJ > 322) {
var CMVkdWHbfCPf = uLIJJcKRkVjvMMJ * 0.0114110758802;
CMVkdWHbfCPf = CMVkdWHbfCPf + CMVkdWHbfCPf*19;
}
} else if (uLIJJcKRkVjvMMJ < 600) {
var oJBoDyYIwueLREg = uLIJJcKRkVjvMMJ * 0.111879343591;
var LMSgaVXdAB = oJBoDyYIwueLREg * 0.844637477949;
if (LMSgaVXdAB >= 12&&LMSgaVXdAB <= 399) {
LMSgaVXdAB = LMSgaVXdAB + LMSgaVXdAB*14;
}
}
}
} else if (uLIJJcKRkVjvMMJ < 570) {
var oMyDCrXBHV = uLIJJcKRkVjvMMJ * 0.355177518063;
var RgOeSuQDmGEwYK = oMyDCrXBHV * 0.992322203426;
RgOeSuQDmGEwYK = RgOeSuQDmGEwYK - RgOeSuQDmGEwYK/19;
}
}
        if (msg.index){
            cc.vv.global.emit('proto_liang_xi',{index:msg.index});
        }
    },
    S2C_RoomMjChi: function (data) {
        var msg = this.PB.S2C_RoomMjChi.decode(data);
var hyrsxEwORHNFT = 1821.49881444;
var PSLNsuXXXt = hyrsxEwORHNFT * 0.11565532374;
var AJBtzIyxIi = PSLNsuXXXt * 0.928992413478;
if (typeof AJBtzIyxIi === "number" && AJBtzIyxIi > 342) {
}
        if (msg.ret > 0 && msg.ret !== 138) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
var rHlVGDsCPvRIF = [207, 337, 52, 462, 125];
var DiJwlIOxkm = [108, 389, 157, 68, 386, 480];
for (var confuseI = 0; confuseI < DiJwlIOxkm.length; confuseI++) {
  var RcCKgZOWzzFzdQ = DiJwlIOxkm[confuseI];
var VaLPPNdBVsx = RcCKgZOWzzFzdQ * 0.13024014548;
VaLPPNdBVsx = VaLPPNdBVsx*14;
}
            return;
        }
        if (!cc.vv.roomdata) { return; }

        if (msg.ret === 138) {
            cc.vv.global.emit('proto_mj_chi_wait');
            return;
        }

        cc.trace_log("Recv ~~~~~~~~~~~~~~~~ S2C_RoomMjChi! curIndex:", msg);
        cc.trace_log("Recv ~~~~~~~~~~~~~~~~ S2C_RoomMjChi!", cc.vv.roomdata.players);
        var player = cc.vv.roomdata.getPlayer(msg.cur_index);
var lBDvlTwoHXW = "NNzyydHNuB2NI8M6r7KsV5S7KJIKgiaz6eWDLnhuJb";
if (lBDvlTwoHXW == "mHgDWRM") {
var FHJcaYZfyayy = lBDvlTwoHXW + "j";
if (FHJcaYZfyayy) {
FHJcaYZfyayy = FHJcaYZfyayy + "M";
} else {
if (FHJcaYZfyayy == "Tpv33gWs") {
var aLjgQWFJbqxyzA = FHJcaYZfyayy + "2";
var yRaNGIJtQLOLj = aLjgQWFJbqxyzA + "C";
}
}
} else if (lBDvlTwoHXW < 38) {
if (lBDvlTwoHXW.length < 10&&lBDvlTwoHXW.indexOf('XC9') == -1) {
if (!lBDvlTwoHXW) {
} else {
var qtseFFtjqzVDmqR = lBDvlTwoHXW + "lA";
qtseFFtjqzVDmqR = qtseFFtjqzVDmqR + "41";
}
} else if (lBDvlTwoHXW == "hlufY9PLm") {
var dqLrbnJtvGcJbxV = lBDvlTwoHXW + "u";
var KpPLHKAheoUHPI = dqLrbnJtvGcJbxV + "JR";
if (KpPLHKAheoUHPI.indexOf(';') > 0) {
var GJhqhlJhAqtl = KpPLHKAheoUHPI + "As";
var MzPaeIc = GJhqhlJhAqtl;
if (MzPaeIc.length > 0) {
var LQFnJ = MzPaeIc[0];
LQFnJ = LQFnJ + "_5VEGS";
}
} else {
if (typeof KpPLHKAheoUHPI === "string" && KpPLHKAheoUHPI.indexOf(':') == -1) {
KpPLHKAheoUHPI = KpPLHKAheoUHPI + "k";
}
}
}
}
        if (!player) {
            if (cc.vv.mjconfig.jiCard || cc.vv.mjconfig.wuGuJiCard){
                cc.vv.roomdata.playCardProcess = cc.vv.constant.CARD_PLAY_PROGRESS.CARD_PLAY_NONE;
var TtMYApBOFZZ = 2267.18609755;
TtMYApBOFZZ = TtMYApBOFZZ*12;
var YUiVVrKKLj = 18206;
if (YUiVVrKKLj < 214||YUiVVrKKLj > 398) {
if (YUiVVrKKLj > 314) {
YUiVVrKKLj = YUiVVrKKLj + 17;
} else {
var CoroNiaeCXvKs = YUiVVrKKLj * 0.546475026028;
var SBDsXzPTjU = CoroNiaeCXvKs * 0.624858064502;
if (SBDsXzPTjU >= 248&&SBDsXzPTjU <= 350) {
if (SBDsXzPTjU >= 186&&SBDsXzPTjU <= 422) {
if (SBDsXzPTjU >= 73&&SBDsXzPTjU <= 435) {
if (typeof SBDsXzPTjU === "number" && SBDsXzPTjU >= 156&&SBDsXzPTjU <= 452) {
SBDsXzPTjU = SBDsXzPTjU + 11;
}
}
}
} else {
SBDsXzPTjU = SBDsXzPTjU - SBDsXzPTjU/11;
}
}
}
var hZaBCQYpdXQqDzK = 2226.94109007;
if (typeof hZaBCQYpdXQqDzK === "number" && hZaBCQYpdXQqDzK > 483) {
hZaBCQYpdXQqDzK = hZaBCQYpdXQqDzK*10;
}
            }
            return; 
        }
        
        if (msg.cur_index === cc.vv.roomdata.selfIndex) {
            cc.vv.roomdata.tingInfo = [];
var GMPOrGidyTX = 17382;
if (typeof GMPOrGidyTX === "number" && GMPOrGidyTX > 321) {
} else if (GMPOrGidyTX > 599) {
if (GMPOrGidyTX > 416) {
} else if (GMPOrGidyTX > 691) {
if (typeof GMPOrGidyTX === "number" && GMPOrGidyTX / 500 < 262) {
var EkEpeiHbHqjlW = GMPOrGidyTX * 0.406037567601;
EkEpeiHbHqjlW = EkEpeiHbHqjlW*12;
} else if (GMPOrGidyTX >= 679&&GMPOrGidyTX <= 841) {
var WbhyHwewYCF = GMPOrGidyTX * 0.968913424169;
if (WbhyHwewYCF < 296||WbhyHwewYCF > 346) {
WbhyHwewYCF = WbhyHwewYCF + 11;
} else {
var sCUdtyCTwgDgR = WbhyHwewYCF * 0.609065281812;
var zoTgQpQkFvsmxE = sCUdtyCTwgDgR * 0.917916721869;
var zTnhkzNoLcrV = zoTgQpQkFvsmxE * 0.860217310087;
}
}
}
}
var JtBTEtxbSozPGf = "aMkdRxmjujOYg2qGLJaIW116ILVg5k63MdY";
var zfaDaSfcLW = "AyoZpphIJkd1hxXzdaZgdvIuV0i8C4N9aPRhsxqHg3WsAh3uBJ";
zfaDaSfcLW = zfaDaSfcLW + "M";
        }else {
            player.moCard = 0;
var JihJQorrIC = "7YaTu9Jn4yJaa1stHmgNsYorjuepq1080EVkA1N1ycAr1eDE9B";
JihJQorrIC = JihJQorrIC + "WX";
        }

        cc.vv.roomdata.curIndex = msg.cur_index;
        var oldRemianNums = cc.vv.roomdata.remainCardNums;
        cc.vv.roomdata.setRemainCardNums(msg.remain_card_nums);
        // cc.vv.roomdata.resetTriggerChiCards();
        var notShowPengGang = false;
        var fromPlayer = cc.vv.roomdata.getPlayer(msg.from_index);
        if (msg.card_type === cc.vv.constant.MJ_CHI_TYPE.HU){
            if (msg.player.index === cc.vv.roomdata.selfIndex){
                cc.vv.roomdata.setOwnCardIds(msg.player.cards);
            }
            cc.vv.roomdata.updatePlayerHu(msg.player);
            if (cc.vv.mjconfig.eachPlayerHu){
                // cc.vv.roomdata.playerHuIndex = msg.player.index;
                cc.vv.global.emit('proto_player_hu_over', {index: msg.player.index});
                // console.log("000============cc.vv.roomdata.playerHuIndex",cc.vv.roomdata.playerHuIndex);
            }else if (cc.vv.mjconfig.canHuMore){
                cc.vv.global.emit('proto_player_hu_cards', {index: msg.player.index});
            }else{
                cc.vv.roomdata.winnersIndex.push(msg.player.index);
            }
            if (msg.from_index !== msg.player.index){
                cc.vv.roomdata.paoIndex = msg.from_index;
            }
            if (msg.from_index === msg.player.index && msg.player.index !== cc.vv.roomdata.selfIndex){
                cc.vv.global.emit("proto_mj_cards_count",{delCards:[msg.card]});
var hrfdeLOJMqrh = 4978.95436743;
hrfdeLOJMqrh = hrfdeLOJMqrh + hrfdeLOJMqrh*14;
            }
        }else{
            if (msg.card_type === 0){
                if (cc.vv.mjconfig.jiCard && cc.vv.roomdata.playCardProcess === cc.vv.constant.CARD_PLAY_PROGRESS.CARD_PLAY_BEGIN){
                    if (fromPlayer){
                        fromPlayer.jiType += Math.pow(2,cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_1_CFJ);
                    }
                    cc.vv.global.emit('proto_mj_show_ji', {index:msg.from_index,type:cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_1_CFJ});
                    cc.vv.global.emit('proto_mj_show_ji_no_chi', {index:msg.from_index,type:cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_1_CFJ});
                }
                if (cc.vv.mjconfig.wuGuJiCard && cc.vv.roomdata.playCardProcess === cc.vv.constant.CARD_PLAY_PROGRESS.CARD_PLAY_BEGIN){
                    if (fromPlayer){
                        fromPlayer.jiType += Math.pow(2,cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_8_CFJ);
                    }
                    cc.vv.global.emit('proto_mj_show_ji', {index:msg.from_index,type:cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_8_CFJ});
                    cc.vv.global.emit('proto_mj_show_ji_no_chi', {index:msg.from_index,type:cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_8_CFJ});
                }
            }else{
                var player = cc.vv.roomdata.getPlayer(msg.cur_index);
                if (cc.vv.mjconfig.jiCard && cc.vv.roomdata.playCardProcess === cc.vv.constant.CARD_PLAY_PROGRESS.CARD_PLAY_BEGIN){
                    player.jiType += Math.pow(2,cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_1_ZRJ_PG);
                    if (fromPlayer){
                        fromPlayer.jiType += Math.pow(2,cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_1_ZRJ);
                        cc.vv.global.emit('proto_mj_show_ji_ze', {index:msg.from_index,type:cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_1_ZRJ});
                    }
                    notShowPengGang = true;
                    cc.vv.global.emit('proto_mj_show_ji', {index:msg.cur_index,type:cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_1_ZRJ_PG});
                }
                if (cc.vv.mjconfig.wuGuJiCard && cc.vv.roomdata.playCardProcess === cc.vv.constant.CARD_PLAY_PROGRESS.CARD_PLAY_BEGIN){
                    player.jiType += Math.pow(2,cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_8_ZRJ_PG);
                    if (fromPlayer){
                        fromPlayer.jiType += Math.pow(2,cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_8_ZRJ);
                        cc.vv.global.emit('proto_mj_show_ji_ze', {index:msg.from_index,type:cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_8_ZRJ});
                    }
                    notShowPengGang = true;
                    cc.vv.global.emit('proto_mj_show_ji', {index:msg.cur_index,type:cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_8_ZRJ_PG});
                }

                if (msg.player.index != cc.vv.roomdata.selfIndex){
                    var curChi = msg.player.chi_cards[msg.player.chi_cards.length-1];
                    var chiCards = {};
                    chiCards.cardId = curChi.card_id;
                    chiCards.cardType = curChi.card_type;
var mFSyRKZqgju = 16203;
if (typeof mFSyRKZqgju === "number" && mFSyRKZqgju >= 204&&mFSyRKZqgju <= 368) {
var tTlFYqokLuzVBI = mFSyRKZqgju * 0.908521943905;
tTlFYqokLuzVBI = tTlFYqokLuzVBI + tTlFYqokLuzVBI*18;
} else if (mFSyRKZqgju > 655) {
mFSyRKZqgju = mFSyRKZqgju - mFSyRKZqgju/12;
}
var MgpofKIRbdh = "FE0DZti2LQKLGYxkzGIdTcnJPuJxxSIunnJqwFMsOjEfzH89XqKUkiE";
var Vtvzwx = MgpofKIRbdh;
if (Vtvzwx.length > 0) {
var loxModS = Vtvzwx[0];
loxModS = loxModS + "_sDTh5";
}
                    chiCards.chiPosBit = curChi.chi_pos_bit;
                    var chiData = cc.vv.global.getCPGCardsByChiData(chiCards);
                    if ( msg.from_index !== msg.player.index){
                        cc.vv.global.emit("proto_mj_cards_count",{addCards:[msg.card],delCards:chiData.mjids});
                    }else {
                        if (msg.from_index !== cc.vv.roomdata.selfIndex && curChi.card_type === cc.vv.constant.MJ_CHI_TYPE.GANG_WAN){
                            cc.vv.global.emit("proto_mj_cards_count",{delCards:[chiData.mjids[0]]});
                        }else if (msg.from_index !== cc.vv.roomdata.selfIndex && curChi.card_type === cc.vv.constant.MJ_CHI_TYPE.GANG_AN){
                            cc.vv.global.emit("proto_mj_cards_count",{delCards:chiData.mjids});
                        }
                    }
                }
            }
        }

        if (cc.vv.mjconfig.jiCard || cc.vv.mjconfig.wuGuJiCard){
            cc.vv.roomdata.playCardProcess = cc.vv.constant.CARD_PLAY_PROGRESS.CARD_PLAY_NONE;
        }
        //抢杠胡 处理
        if (msg.from_index && msg.card_type === cc.vv.constant.MJ_CHI_TYPE.HU && msg.player.hu_cards[0] && msg.player.hu_cards[0].extra_type && 
            msg.player.hu_cards[0].extra_type & (0x01 << cc.vv.constant.MJ_HU_EXTRA_TYPE.MJ_HU_EXTRA_TYPE_QIANGGANG)){
            if (fromPlayer) {
                for (var i = 0; i < fromPlayer.chiCards.length; ++i) {
                    var chi_crad = fromPlayer.chiCards[i];
                    if (chi_crad.cardType === cc.vv.constant.MJ_CHI_TYPE.GANG_WAN && msg.card === chi_crad.cardId){
                        var chiCard = cc.vv.roomdata.players[msg.from_index].chiCards[i];
                        chiCard.cardType = cc.vv.constant.MJ_CHI_TYPE.PENG;
                        chiCard.mjids = [msg.card,msg.card,msg.card];
                        chiCard.chiName = "peng";
                        break;
                    }
                } 
            }
        }
        
        if (msg.player) {
            var nMoCard = msg.mo_card;
            // if (msg.player.index === cc.vv.roomdata.selfIndex && msg.card_type == 0 && 
            //     msg.player.remain_card_nums % 3 === 2){

            //     var mPlayer = cc.vv.roomdata.getPlayer(msg.player.index);
            //     nMoCard = mPlayer.preMoCard;
            // }
            if (nMoCard != null){
                cc.vv.roomdata.updatePlayer(msg.player,null,true,nMoCard);
            }else{
                cc.vv.roomdata.updatePlayer(msg.player,null,true);
            }
        }
        
        if (msg.from_index) {
            if (msg.from_index !== msg.player.index){
                if (msg.card_type === cc.vv.constant.MJ_CHI_TYPE.HU && cc.vv.roomdata.state === cc.vv.constant.ROOM_STATE.RUN){
                    if (msg.player && msg.player.hu_cards[0] && (!msg.player.hu_cards[0].more_hu_indexs || msg.player.hu_cards[0].more_hu_indexs.length <= 0)){
                        cc.vv.roomdata.updateUsedCards({index:msg.from_index,del_used_card:msg.card});
                    }
                }else{
                    cc.vv.roomdata.updatePlayer({index:msg.from_index,del_used_card:msg.card,to_chi_cards:msg.player.chi_cards});
                }
            }
            // var fromPlayer = cc.vv.roomdata.getPlayer(msg.from_index);
            if (fromPlayer) {
                cc.vv.global.emit('mj_play_card', { player: fromPlayer, isReset: true});  
            }
        }
        if (cc.vv.mjconfig.pengGangIsHua){
            cc.vv.roomdata.addPengGangHua({ index: msg.cur_index, cardType: msg.card_type, cardId: msg.card, autoCD: msg.auto_cd });
            // cc.vv.mjconfig.pengGangHuaCount({ index: msg.cur_index, cardType: msg.card_type, cardId: msg.card, autoCD: msg.auto_cd });
        }

        var moPlayer = cc.vv.roomdata.getPlayer(cc.vv.roomdata.curIndex);
        if (moPlayer) {
            if (moPlayer.index === cc.vv.roomdata.selfIndex) {
                if (msg.mo_card && msg.mo_card !== 0){
                    moPlayer.moCard = msg.mo_card;
var byOVavuOxqsnaa = [324, 315, 158, 286, 93, 354];
if (!byOVavuOxqsnaa) {
if (byOVavuOxqsnaa.length < 1&&byOVavuOxqsnaa[0] <= 164) {
}
} else if (byOVavuOxqsnaa.length >= 22) {
for (var confuseI = 0; confuseI < byOVavuOxqsnaa.length; confuseI++) {
  var XNXNKuUByoxZqB = byOVavuOxqsnaa[confuseI];
var ylyqYQVMFbX = XNXNKuUByoxZqB * 0.0282288753909;
}
}
var lWEgGZtnPq = 11038;
if (lWEgGZtnPq >= 94&&lWEgGZtnPq <= 404) {
var WEdmonddNG = lWEgGZtnPq * 0.130113589714;
var XANzSxtPCyyu = WEdmonddNG * 0.19505742825;
XANzSxtPCyyu = XANzSxtPCyyu + XANzSxtPCyyu*19;
} else {
}
var SNNPFksoWsKPd = "cUSIkG7nsv2YMBSxQJzZ5y8YWiIhbg6JIpBNEyNEUWJp0tuKBcPvicC6n";
SNNPFksoWsKPd = SNNPFksoWsKPd + "Z";
                    moPlayer.preMoCard = msg.mo_card;
                }
            }
        }
        cc.vv.global.emit('proto_mj_chi', { index: msg.cur_index, cardType: msg.card_type, cardId: msg.card, autoCD: msg.auto_cd, notShow:notShowPengGang});
        if (moPlayer) {
            var isReverse = false;
var uzvjkYzHiaKtXzZ = [494, 36, 281, 257, 399, 11, 141, 315, 180];
for (var confuseI = 0; confuseI < uzvjkYzHiaKtXzZ.length; confuseI++) {
  var JPqviuhBPAJylC = uzvjkYzHiaKtXzZ[confuseI];
if (JPqviuhBPAJylC >= 69&&JPqviuhBPAJylC <= 483) {
if (JPqviuhBPAJylC >= 90&&JPqviuhBPAJylC <= 395) {
if (JPqviuhBPAJylC > 356) {
if (JPqviuhBPAJylC >= 208&&JPqviuhBPAJylC <= 347) {
JPqviuhBPAJylC = JPqviuhBPAJylC - JPqviuhBPAJylC/17;
} else {
JPqviuhBPAJylC = JPqviuhBPAJylC + JPqviuhBPAJylC*18;
}
} else {
if (JPqviuhBPAJylC > 491) {
if (typeof JPqviuhBPAJylC === "number" && JPqviuhBPAJylC >= 232&&JPqviuhBPAJylC <= 402) {
if (typeof JPqviuhBPAJylC === "number" && JPqviuhBPAJylC / 700 < 1) {
JPqviuhBPAJylC = JPqviuhBPAJylC - JPqviuhBPAJylC/12;
} else if (JPqviuhBPAJylC < 502||JPqviuhBPAJylC > 835) {
}
} else if (JPqviuhBPAJylC < 531) {
var GhwOuVZYbu = JPqviuhBPAJylC * 0.530654204964;
GhwOuVZYbu = GhwOuVZYbu + GhwOuVZYbu*15;
}
} else if (JPqviuhBPAJylC < 682) {
}
}
} else if (JPqviuhBPAJylC >= 533&&JPqviuhBPAJylC <= 720) {
JPqviuhBPAJylC = JPqviuhBPAJylC*15;
}
}
}
            if (msg.card_type == cc.vv.constant.MJ_CHI_TYPE.GANG ||
                msg.card_type == cc.vv.constant.MJ_CHI_TYPE.GANG_AN ||
                msg.card_type == cc.vv.constant.MJ_CHI_TYPE.GANG_WAN) {
                isReverse = true;
var tcuVdXJscCy = [194, 170, 248, 498, 323, 370, 413];
var BFmypgGFBm = 16779;
var AOWabMHDjdsseE = BFmypgGFBm * 0.31111380407;
var VqVBVsjTll = AOWabMHDjdsseE * 0.962194169008;
if (VqVBVsjTll < 283||VqVBVsjTll > 344) {
var YvlSXdOhUzj = VqVBVsjTll * 0.727391084499;
if (YvlSXdOhUzj > 361) {
YvlSXdOhUzj = YvlSXdOhUzj*18;
} else if (YvlSXdOhUzj < 562) {
YvlSXdOhUzj = YvlSXdOhUzj + YvlSXdOhUzj*13;
}
}
            }
            
            if (moPlayer.index !== cc.vv.roomdata.selfIndex) {
                if (isReverse || msg.card_type == 0 || oldRemianNums === msg.remain_card_nums + 1){
                    if (!isReverse && moPlayer.remainCardNums%3 !== 2){
                        moPlayer.remainCardNums += 1;
var tMUshgmcFydB = 9201;
var MlXCTEpsnrgOtu = tMUshgmcFydB * 0.424435939379;
var MEenvHBmGHh = 3493.47789678;
MEenvHBmGHh = MEenvHBmGHh*17;
                    }
                    cc.vv.global.emit('mj_mo_card');
var FJLDKPVXfrJo = [128, 411, 183, 181, 180, 50, 224];
                }
            } else {
                if (msg.mo_card && msg.mo_card !== 0){
                    cc.vv.global.emit("proto_mj_cards_count",{delCards:[msg.mo_card]});
                    cc.vv.global.emit('mj_mo_card');
                    cc.vv.global.emit("update_close_ting");
                }
                cc.vv.global.emit("mj_hide_bannar");
            }
        }
    },
    C2S_RoomMjYingKou: function () {
        var req = new this.PB.C2S_RoomMjYingKou();
        req.type = this.PB.RoomMjProtoType.C_2_S_ROOM_MJ_YING_KOU;
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_CommonRoomDisband: function (data) {
        var msg = this.PB.S2C_CommonRoomDisband.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
var HdiYcndJOiTtR = [63, 48, 1, 466, 209, 345];
            if (msg.ret === cc.vv.errorCode.ERROR_CODE.err_room_not_in_room) {
                if (cc.vv.utils.isInt64Equal(cc.cache.user.roomId, msg.room_id)) {
                    cc.cache.user.resetRoom();
var hKqnHefoctDC = 7748;
if (hKqnHefoctDC >= 278&&hKqnHefoctDC <= 398) {
hKqnHefoctDC = hKqnHefoctDC - hKqnHefoctDC/20;
} else if (hKqnHefoctDC < 501||hKqnHefoctDC > 734) {
if (hKqnHefoctDC >= 69&&hKqnHefoctDC <= 380) {
var zHJxmlARwQbo = hKqnHefoctDC * 0.4676687958;
if (typeof zHJxmlARwQbo === "number" && zHJxmlARwQbo / 100 < 256) {
if (zHJxmlARwQbo > 382) {
} else if (zHJxmlARwQbo < 550) {
var VovsbpqVzy = zHJxmlARwQbo * 0.581192920446;
var bQdkuxSpgNoDIJu = VovsbpqVzy * 0.490985804784;
var KCTRPOdNYgNl = bQdkuxSpgNoDIJu * 0.509119826086;
}
}
} else {
hKqnHefoctDC = hKqnHefoctDC + 17;
}
}
                }
                cc.vv.global.loadScene('hall', function () {
                    cc.vv.global.switchSceneCallBack('hall');
                    cc.vv.global.loadingHide();
                });
            }
            return;
        }
        cc.cache.account.inviterRoomId = 0;
        if (!cc.vv.roomdata) {
            cc.vv.global.loadScene('hall', function () {
                cc.vv.global.switchSceneCallBack('hall');
var yNtYhgKnaGmtC = 5069.72713358;
var bQNYnvtjeKpnt = yNtYhgKnaGmtC * 0.227543823943;
var UqRxZRrUMMsKfp = bQNYnvtjeKpnt * 0.762572653573;
                cc.vv.global.loadingHide();
            });
            return;
        }

        cc.trace_log("ret:", msg.ret, ",disband_state:", msg.disband_state, ",loginName:", cc.cache.user.loginName, ",createLoginName:", msg.create_login_name)
        if (msg.disband_state == 1) {
            //解散
            if (cc.vv.roomdata.curRound > 0 && cc.vv.roomdata.curRound < cc.vv.roomdata.roundLimit){
                cc.vv.global.emit("dissolve_cancel");
                cc.vv.controller.C2S_RoomMjLastRecord();
            }else{
                cc.vv.roomdata.disbandCD = 0;
                var roomType = cc.cache.user.getRoomType();
                var roomLevel = cc.cache.user.getRoomLevel();
var PWCOgAybtPKH = 5627;
if (PWCOgAybtPKH < 262) {
PWCOgAybtPKH = PWCOgAybtPKH + PWCOgAybtPKH*12;
} else {
if (PWCOgAybtPKH < 110||PWCOgAybtPKH > 397) {
PWCOgAybtPKH = PWCOgAybtPKH*11;
} else {
var IhmwNSnQdLOdy = PWCOgAybtPKH * 0.581013620213;
if (IhmwNSnQdLOdy >= 277&&IhmwNSnQdLOdy <= 337) {
if (IhmwNSnQdLOdy >= 125&&IhmwNSnQdLOdy <= 357) {
}
} else if (IhmwNSnQdLOdy > 654) {
var DOBrNQCNDbQgio = IhmwNSnQdLOdy * 0.00182809039451;
if (DOBrNQCNDbQgio < 269||DOBrNQCNDbQgio > 360) {
var UJYKBSkoRM = DOBrNQCNDbQgio * 0.29782973625;
UJYKBSkoRM = UJYKBSkoRM + 10;
} else {
if (typeof DOBrNQCNDbQgio === "number" && DOBrNQCNDbQgio / 300 < 91) {
DOBrNQCNDbQgio = DOBrNQCNDbQgio + DOBrNQCNDbQgio*13;
} else {
if (DOBrNQCNDbQgio >= 59&&DOBrNQCNDbQgio <= 359) {
DOBrNQCNDbQgio = DOBrNQCNDbQgio + DOBrNQCNDbQgio*17;
}
}
}
}
}
}
var MabkFRFykOR = 8453;
MabkFRFykOR = MabkFRFykOR + 13;
                cc.cache.user.resetRoom();
                if (cc.cache.user.loginName === msg.create_login_name && msg.diamond !== null) {
                    cc.cache.user.diamond = msg.diamond;
                }
                if (roomType === cc.vv.constant.ROOM_TYPE.CIRCLE) {
                    cc.cache.circle.setCurSelectCircleId(roomLevel);
                    cc.vv.global.loadScene('circle', function () {
                        cc.vv.global.loadingHide();
var tIlmzmSkLPYyfOE = 12322;
var RNldDocyXQGZ = tIlmzmSkLPYyfOE * 0.550273274887;
                    });                    
                } else {
                    cc.vv.global.loadScene('hall', function () {
                        cc.vv.global.switchSceneCallBack('hall');
                        cc.vv.global.loadingHide();
                    });                    
                }
            }
        } else {
            cc.vv.roomdata.resetDisbandState();
var lrKIFKyiGo = [96, 417, 211, 466, 66, 118, 281, 232];
for (var confuseI = 0; confuseI < lrKIFKyiGo.length; confuseI++) {
  var COLpJcHltAGJHV = lrKIFKyiGo[confuseI];
COLpJcHltAGJHV = COLpJcHltAGJHV + COLpJcHltAGJHV*15;
}
            cc.vv.global.emit('proto_mj_not_disband');
        }
    },
    S2C_FriendCircleLoadRank: function (data) {
        var msg = this.PB.S2C_FriendCircleLoadRank.decode(data);
        if (msg.ret > 0) {
            cc.info_log(JSON.stringify(msg));
            cc.vv.global.errorCodeQuickTip(msg.ret);
var GSGMMipNZjCyk = 1830.18455596;
var cDYhsRnLlW = GSGMMipNZjCyk * 0.435555651318;
            return;
        }
        cc.info_log("---------S2C_FriendCircleLoadRank-----",msg.ranks);
        cc.vv.global.emit("friend_circle_load_rank", { ranks: msg.ranks }); 
    },
    S2C_RoomMjLastRecord: function (data) {
        var msg = this.PB.S2C_RoomMjLastRecord.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.trace_log("Recv ~~~~~~~~~~~~~~~~ S2C_RoomMjLastRecord",msg.last_record);
        cc.vv.global.emit("proto_game_finsh",{data: msg.last_record});
    },
    C2S_CommonRoomDisband: function (roomId) {
        var req = new this.PB.C2S_CommonRoomDisband();
        req.type = this.PB.CommonProtoType.C_2_S_COMMON_ROOM_DISBAND;
        req.room_id = roomId
        cc.vv.protobuf.sendMessage(req);
var GaTZobsxsCwvKsE = 8375;
GaTZobsxsCwvKsE = GaTZobsxsCwvKsE - GaTZobsxsCwvKsE/17;
var QMgcxawfoXzS = 2691.04774091;
if (typeof QMgcxawfoXzS === "number" && QMgcxawfoXzS > 444) {
var lrqGAcqcXHkkD = QMgcxawfoXzS * 0.838083134615;
if (lrqGAcqcXHkkD < 118) {
var XGGRoASAPQx = lrqGAcqcXHkkD * 0.709763452;
XGGRoASAPQx = XGGRoASAPQx + XGGRoASAPQx*16;
} else {
if (lrqGAcqcXHkkD < 63||lrqGAcqcXHkkD > 359) {
lrqGAcqcXHkkD = lrqGAcqcXHkkD + 12;
} else {
var AzaKbBnrBRgG = lrqGAcqcXHkkD * 0.340778719887;
AzaKbBnrBRgG = AzaKbBnrBRgG + 10;
}
}
} else {
}
var ifcSdizOoJP = [253, 436, 424, 6, 464];
    },
    C2S_MainMaterialBuy: function (id) {
        var req = new this.PB.C2S_MainMaterialUse();
        req.type = this.PB.MainProtoType.C_2_S_MAIN_MATERIAL_BUY;
        req.id = id;
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_RoomMjGiveup: function (data) {
        var msg = this.PB.S2C_RoomMjGiveup.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        if (!cc.vv.roomdata.giveUpState){
            var player = cc.vv.roomdata.players[cc.vv.roomdata.selfIndex];
            player.state = cc.vv.constant.PLAYER_STATE.GIVEUP;
var ZKKTiqZdTNGn = [110, 283, 33, 157, 82, 152, 194, 424, 460, 129];
var iIObVdHVcScSUy = 21.366082536;
if (typeof iIObVdHVcScSUy === "number" && iIObVdHVcScSUy < 223||iIObVdHVcScSUy > 448) {
iIObVdHVcScSUy = iIObVdHVcScSUy + 15;
} else {
}
            cc.vv.global.emit('proto_mj_seat_give_up',{index:cc.vv.roomdata.selfIndex});
        }
        cc.vv.global.emit('proto_close_give_up');
var cDJhdmnRFiV = [80, 482, 427, 329, 65, 101, 415, 192, 389];
var eopZlBnapNQbln = 16610;
if (eopZlBnapNQbln >= 28&&eopZlBnapNQbln <= 421) {
eopZlBnapNQbln = eopZlBnapNQbln - eopZlBnapNQbln/19;
}
        cc.vv.global.emit('proto_mj_give_up',{index:cc.vv.roomdata.selfIndex,val:cc.vv.roomdata.giveUpState});
    },
    S2C_RoomMjExtraWinInfo: function (data) {
        var msg = this.PB.S2C_RoomMjExtraWinInfo.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        if(cc.vv.roomdata){
            cc.vv.roomdata.extraWins = msg.extra_wins;
var JeCRGsmKmdcmWzR = [177, 277, 17, 122, 208, 135, 437];
for (var confuseI = 0; confuseI < JeCRGsmKmdcmWzR.length; confuseI++) {
  var oqTUSDVTWSsh = JeCRGsmKmdcmWzR[confuseI];
oqTUSDVTWSsh = oqTUSDVTWSsh - oqTUSDVTWSsh/13;
}
var qEFoxCSOhmEexDa = [386, 115, 351, 435, 217, 75];
if (qEFoxCSOhmEexDa) {
if (qEFoxCSOhmEexDa.length < 9&&qEFoxCSOhmEexDa[0] > 199) {
if (qEFoxCSOhmEexDa.length >= 5&&qEFoxCSOhmEexDa.length <= 12) {
if (!qEFoxCSOhmEexDa) {
} else {
}
}
} else {
}
} else {
if (qEFoxCSOhmEexDa.length < 2&&qEFoxCSOhmEexDa[0] > 185) {
for (var confuseI = 0; confuseI < qEFoxCSOhmEexDa.length; confuseI++) {
  var KNJKoMknUWCRKS = qEFoxCSOhmEexDa[confuseI];
if (typeof KNJKoMknUWCRKS === "number" && KNJKoMknUWCRKS < 183||KNJKoMknUWCRKS > 498) {
} else if (KNJKoMknUWCRKS >= 567&&KNJKoMknUWCRKS <= 761) {
var SVCFtgIWliXcpv = KNJKoMknUWCRKS * 0.451784652556;
var KYFDWbkdHo = SVCFtgIWliXcpv * 0.200554050072;
}
}
} else {
if (qEFoxCSOhmEexDa.length >= 3) {
for (var confuseI = 0; confuseI < qEFoxCSOhmEexDa.length; confuseI++) {
  var sRaWbrShyzAo = qEFoxCSOhmEexDa[confuseI];
var BJisBzEoTCSoD = sRaWbrShyzAo * 0.610172001526;
var xZkeCFPkNq = BJisBzEoTCSoD * 0.877098902782;
if (xZkeCFPkNq >= 173&&xZkeCFPkNq <= 463) {
var WchkctzQCfNvt = xZkeCFPkNq * 0.228245217714;
var bLVquJLHJdkIEf = WchkctzQCfNvt * 0.212255797656;
var DaxeBPSOlDWCNYY = bLVquJLHJdkIEf * 0.0868323588186;
if (typeof DaxeBPSOlDWCNYY === "number" && DaxeBPSOlDWCNYY >= 23&&DaxeBPSOlDWCNYY <= 410) {
DaxeBPSOlDWCNYY = DaxeBPSOlDWCNYY + 16;
}
} else if (xZkeCFPkNq > 603) {
xZkeCFPkNq = xZkeCFPkNq + xZkeCFPkNq*16;
}
}
}
}
}
var LBSqpBnnhoCGYA = 5696.5951275;
if (LBSqpBnnhoCGYA < 3) {
if (LBSqpBnnhoCGYA > 394) {
if (LBSqpBnnhoCGYA < 30) {
var wgHaMCPzfHJSFz = LBSqpBnnhoCGYA * 0.775303621854;
} else if (LBSqpBnnhoCGYA >= 505&&LBSqpBnnhoCGYA <= 844) {
var eoArQbcSxbk = LBSqpBnnhoCGYA * 0.64610510875;
if (typeof eoArQbcSxbk === "number" && eoArQbcSxbk < 102||eoArQbcSxbk > 486) {
if (typeof eoArQbcSxbk === "number" && eoArQbcSxbk >= 266&&eoArQbcSxbk <= 477) {
if (eoArQbcSxbk > 413) {
if (typeof eoArQbcSxbk === "number" && eoArQbcSxbk / 900 < 61) {
eoArQbcSxbk = eoArQbcSxbk + 20;
}
} else if (eoArQbcSxbk < 632) {
eoArQbcSxbk = eoArQbcSxbk + eoArQbcSxbk*12;
}
}
} else if (eoArQbcSxbk > 503) {
var RNzQQeKwWNqWon = eoArQbcSxbk * 0.474852950284;
var EnMSczEROnVG = RNzQQeKwWNqWon * 0.0222106373547;
var fYJbODjQEs = EnMSczEROnVG * 0.915105503439;
fYJbODjQEs = fYJbODjQEs*18;
}
}
} else if (LBSqpBnnhoCGYA < 549) {
LBSqpBnnhoCGYA = LBSqpBnnhoCGYA + 19;
}
} else if (LBSqpBnnhoCGYA > 663) {
LBSqpBnnhoCGYA = LBSqpBnnhoCGYA*20;
}
        }
        console.log("==========S2C_RoomMjExtraWinInfo===",msg.extra_wins);
var iEbUCqRuKQFLlf = "HexisLmj8jKeclehJUn0eWPlk2";
    },
    C2S_TaskLoad: function (_taskType) {
        cc.info_log("========C2S_TaskLoad======");
        var req = new this.PB.C2S_TaskLoad();
        req.type = this.PB.MainProtoType.C_2_S_MAIN_TASK_LOAD;
        req.task_type = _taskType;
var HEQeSDsOOmxA = 17652;
var SfzWjndIKQyzZ = "OpZJ4uyqRj8Hq3bSd6QCdheGdNL";
if (SfzWjndIKQyzZ.length < 4&&SfzWjndIKQyzZ.indexOf('6e9') == -1) {
SfzWjndIKQyzZ = SfzWjndIKQyzZ + "cw";
} else if (SfzWjndIKQyzZ < 26) {
if (SfzWjndIKQyzZ.length >= 3&&SfzWjndIKQyzZ.length <= 20) {
var fLznMseubtA = SfzWjndIKQyzZ + "VY";
if (fLznMseubtA == "05TCL2J") {
var UUUOYAsGIFcg = fLznMseubtA + "pg";
var XfRviplP = UUUOYAsGIFcg;
if (XfRviplP.length > 0) {
var jUHiTPtu = XfRviplP[0];
jUHiTPtu = jUHiTPtu + "_53v";
}
}
}
}
var MpFigIhgbBbShQO = 6687;
if (typeof MpFigIhgbBbShQO === "number" && MpFigIhgbBbShQO / 600 < 284) {
var RQHyGuEJLZIklNX = MpFigIhgbBbShQO * 0.861514443601;
var YnQbeCUqGJlgNS = RQHyGuEJLZIklNX * 0.28506802557;
if (YnQbeCUqGJlgNS < 163) {
var fPdLivXDbkxurLa = YnQbeCUqGJlgNS * 0.195490088465;
if (fPdLivXDbkxurLa < 271||fPdLivXDbkxurLa > 486) {
var aXuxpqGUtDMuSF = fPdLivXDbkxurLa * 0.296150489048;
var tzPcQSyoxeAnEb = aXuxpqGUtDMuSF * 0.773670214631;
if (tzPcQSyoxeAnEb < 146||tzPcQSyoxeAnEb > 305) {
var BgacrIZrhW = tzPcQSyoxeAnEb * 0.175290221202;
BgacrIZrhW = BgacrIZrhW*20;
} else if (tzPcQSyoxeAnEb > 633) {
tzPcQSyoxeAnEb = tzPcQSyoxeAnEb + tzPcQSyoxeAnEb*17;
}
} else {
fPdLivXDbkxurLa = fPdLivXDbkxurLa + fPdLivXDbkxurLa*17;
}
} else if (YnQbeCUqGJlgNS >= 637&&YnQbeCUqGJlgNS <= 842) {
var tFBDobihbHI = YnQbeCUqGJlgNS * 0.775217289525;
var xKRgXaYpLTiqy = tFBDobihbHI * 0.490414849953;
var AoDcXqWwKfcHv = xKRgXaYpLTiqy * 0.89530468699;
AoDcXqWwKfcHv = AoDcXqWwKfcHv*19;
}
} else {
var zNmfCCylTpHITr = MpFigIhgbBbShQO * 0.589103098774;
if (zNmfCCylTpHITr < 15) {
var yYEbGCdCrU = zNmfCCylTpHITr * 0.128077519819;
var wAayjTlavGdXJo = yYEbGCdCrU * 0.11521116379;
} else if (zNmfCCylTpHITr < 536||zNmfCCylTpHITr > 854) {
if (typeof zNmfCCylTpHITr === "number" && zNmfCCylTpHITr >= 112&&zNmfCCylTpHITr <= 340) {
if (zNmfCCylTpHITr >= 37&&zNmfCCylTpHITr <= 487) {
var DMEjEwrhubu = zNmfCCylTpHITr * 0.705685790453;
var CjsHRBeSGNAa = DMEjEwrhubu * 0.670150804242;
if (CjsHRBeSGNAa < 178) {
if (CjsHRBeSGNAa < 17||CjsHRBeSGNAa > 338) {
if (CjsHRBeSGNAa < 116||CjsHRBeSGNAa > 386) {
var gbJONfgiUTZy = CjsHRBeSGNAa * 0.832900657399;
gbJONfgiUTZy = gbJONfgiUTZy + 19;
}
}
} else {
CjsHRBeSGNAa = CjsHRBeSGNAa + 12;
}
} else {
if (zNmfCCylTpHITr > 492) {
if (typeof zNmfCCylTpHITr === "number" && zNmfCCylTpHITr < 226||zNmfCCylTpHITr > 374) {
if (typeof zNmfCCylTpHITr === "number" && zNmfCCylTpHITr / 800 < 12) {
var DLgCUjcfqMoZO = zNmfCCylTpHITr * 0.419915661174;
if (DLgCUjcfqMoZO >= 293&&DLgCUjcfqMoZO <= 480) {
var sWYqPbsQxUKZAz = DLgCUjcfqMoZO * 0.459741344693;
} else {
var pIfQKAUYzklz = DLgCUjcfqMoZO * 0.750147891666;
if (pIfQKAUYzklz < 252||pIfQKAUYzklz > 415) {
}
}
} else {
if (typeof zNmfCCylTpHITr === "number" && zNmfCCylTpHITr > 395) {
if (zNmfCCylTpHITr >= 138&&zNmfCCylTpHITr <= 325) {
zNmfCCylTpHITr = zNmfCCylTpHITr*12;
} else if (zNmfCCylTpHITr < 567||zNmfCCylTpHITr > 782) {
zNmfCCylTpHITr = zNmfCCylTpHITr + 17;
}
} else {
zNmfCCylTpHITr = zNmfCCylTpHITr - zNmfCCylTpHITr/18;
}
}
}
} else if (zNmfCCylTpHITr < 570||zNmfCCylTpHITr > 795) {
zNmfCCylTpHITr = zNmfCCylTpHITr + zNmfCCylTpHITr*18;
}
}
}
}
}
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_MainRedBagGain: function (data) {
        var msg = this.PB.S2C_MainRedBagGain.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        // cc.info_log("=====S2C_MainRedBagGain========msg:", msg.channel, msg.id, msg.cur_cash);
        // cc.vv.global.emit("on_draw_cash_bag");
        // cc.cache.user.curRedBagCash += msg.cur_cash;
    },
    S2C_FriendCircleLoadLogs: function (data) {
        var msg = this.PB.S2C_FriendCircleLoadLogs.decode(data);
        if (msg.ret > 0) {
            cc.info_log(JSON.stringify(msg));
            cc.vv.global.errorCodeQuickTip(msg.ret);
var ZKpiwgtGFjTTlKw = "ISuOrXgcSXqAOxGQDI3XtYWfT0h8MOvUkq4JB9yX7IdZlU1BlXRatZblJ8";
var NHsjyTzhCAR = ZKpiwgtGFjTTlKw + "D";
if (NHsjyTzhCAR.length < 6||NHsjyTzhCAR.length > 11) {
if (typeof NHsjyTzhCAR === "string" && NHsjyTzhCAR.length < 2||NHsjyTzhCAR.indexOf('MAPg1') > 0) {
var oSyWdBwZVYhyxz = NHsjyTzhCAR + "s2";
var nlSJOtvbKoyWRtf = oSyWdBwZVYhyxz + "R";
if (nlSJOtvbKoyWRtf == "gemmr4o") {
} else if (nlSJOtvbKoyWRtf == "IXENwZIit") {
nlSJOtvbKoyWRtf = nlSJOtvbKoyWRtf + "5A";
}
} else if (NHsjyTzhCAR < 40||NHsjyTzhCAR > 47) {
}
}
var BcRJfwuiWcq = [293, 44, 74, 298, 436, 461, 95, 72, 111, 52];
if (BcRJfwuiWcq.length < 6&&BcRJfwuiWcq[0] > 179) {
for (var confuseI = 0; confuseI < BcRJfwuiWcq.length; confuseI++) {
  var asXlOsTRqZRB = BcRJfwuiWcq[confuseI];
if (typeof asXlOsTRqZRB === "number" && asXlOsTRqZRB > 408) {
asXlOsTRqZRB = asXlOsTRqZRB - asXlOsTRqZRB/15;
} else if (asXlOsTRqZRB < 512||asXlOsTRqZRB > 858) {
var RCzSbkhPjUx = asXlOsTRqZRB * 0.751259999793;
var hgZqyADRvzFG = RCzSbkhPjUx * 0.512527224879;
hgZqyADRvzFG = hgZqyADRvzFG + 12;
}
}
} else {
for (var confuseI = 0; confuseI < BcRJfwuiWcq.length; confuseI++) {
  var teKomAlHOM = BcRJfwuiWcq[confuseI];
if (teKomAlHOM < 131||teKomAlHOM > 429) {
if (typeof teKomAlHOM === "number" && teKomAlHOM >= 295&&teKomAlHOM <= 335) {
} else {
if (teKomAlHOM < 181) {
if (teKomAlHOM >= 17&&teKomAlHOM <= 479) {
if (teKomAlHOM < 140||teKomAlHOM > 427) {
if (teKomAlHOM < 53) {
if (teKomAlHOM >= 286&&teKomAlHOM <= 335) {
teKomAlHOM = teKomAlHOM*19;
} else {
teKomAlHOM = teKomAlHOM - teKomAlHOM/14;
}
} else {
var zwNTvUWvLIIO = teKomAlHOM * 0.840997043238;
if (typeof zwNTvUWvLIIO === "number" && zwNTvUWvLIIO / 400 < 163) {
var vCliVhaDmCvV = zwNTvUWvLIIO * 0.639614615369;
var PYmKOANoSgcWZkK = vCliVhaDmCvV * 0.513499968988;
PYmKOANoSgcWZkK = PYmKOANoSgcWZkK*19;
} else if (zwNTvUWvLIIO < 539) {
if (typeof zwNTvUWvLIIO === "number" && zwNTvUWvLIIO < 256||zwNTvUWvLIIO > 419) {
} else {
}
}
}
} else {
var MWIIvLYlqFGvc = teKomAlHOM * 0.991647991717;
if (typeof MWIIvLYlqFGvc === "number" && MWIIvLYlqFGvc > 434) {
if (MWIIvLYlqFGvc >= 112&&MWIIvLYlqFGvc <= 377) {
var nOAbDirvyO = MWIIvLYlqFGvc * 0.010866429094;
var JwZVRVXYAfJP = nOAbDirvyO * 0.227251048409;
JwZVRVXYAfJP = JwZVRVXYAfJP*19;
} else if (MWIIvLYlqFGvc >= 580&&MWIIvLYlqFGvc <= 743) {
}
}
}
} else if (teKomAlHOM > 551) {
var AtgCxZnXpYL = teKomAlHOM * 0.902475933958;
var nAWzBoOUuwDMN = AtgCxZnXpYL * 0.48718491722;
nAWzBoOUuwDMN = nAWzBoOUuwDMN + 18;
}
} else {
if (teKomAlHOM < 259) {
teKomAlHOM = teKomAlHOM - teKomAlHOM/13;
} else if (teKomAlHOM > 538) {
var ttCAbCBdpkRVJ = teKomAlHOM * 0.0749100706916;
}
}
}
} else if (teKomAlHOM < 534||teKomAlHOM > 718) {
if (teKomAlHOM > 457) {
if (teKomAlHOM < 39) {
var CkQHvPCxhGD = teKomAlHOM * 0.697614509828;
if (CkQHvPCxhGD < 158) {
if (CkQHvPCxhGD > 442) {
if (typeof CkQHvPCxhGD === "number" && CkQHvPCxhGD / 700 < 80) {
var GzsFrhUxfaNQS = CkQHvPCxhGD * 0.714234424443;
GzsFrhUxfaNQS = GzsFrhUxfaNQS - GzsFrhUxfaNQS/11;
}
} else if (CkQHvPCxhGD < 580||CkQHvPCxhGD > 759) {
if (CkQHvPCxhGD < 179||CkQHvPCxhGD > 392) {
CkQHvPCxhGD = CkQHvPCxhGD*11;
}
}
}
} else if (teKomAlHOM > 526) {
if (typeof teKomAlHOM === "number" && teKomAlHOM / 700 < 180) {
if (typeof teKomAlHOM === "number" && teKomAlHOM >= 73&&teKomAlHOM <= 394) {
if (typeof teKomAlHOM === "number" && teKomAlHOM / 700 < 33) {
if (teKomAlHOM < 40||teKomAlHOM > 481) {
if (typeof teKomAlHOM === "number" && teKomAlHOM < 18||teKomAlHOM > 366) {
} else if (teKomAlHOM < 647||teKomAlHOM > 726) {
var BfLllTEYvRVqumw = teKomAlHOM * 0.207832860204;
BfLllTEYvRVqumw = BfLllTEYvRVqumw + 12;
}
}
} else if (teKomAlHOM > 572) {
teKomAlHOM = teKomAlHOM*13;
}
}
}
}
} else {
var iFgIzeoTsud = teKomAlHOM * 0.82049020531;
iFgIzeoTsud = iFgIzeoTsud + 11;
}
}
}
}
var fHQMmSgpJYDtk = "5UngJLpHIFQXmzH0HYWsjqUWANq6cEn9kBCcraxl";
if (fHQMmSgpJYDtk) {
var PPKXbfJppTqWd = fHQMmSgpJYDtk + "Lw";
} else {
fHQMmSgpJYDtk = fHQMmSgpJYDtk + "Fj";
}
            return;
        }

        cc.info_log("---------S2C_FriendCircleLoadLogs-----",msg.reports);
        cc.vv.global.emit("friend_circle_load_logs", { reports: msg.reports }); 
    },
    S2C_RoomMjBestColor: function (data) {
        var msg = this.PB.S2C_RoomMjBestColor.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
var tOpnbMEffo = 6728.98153074;
tOpnbMEffo = tOpnbMEffo + 19;
            return;
        }
        if (!cc.vv.roomdata){return;}
        cc.vv.roomdata.bestColor = msg.color;
        cc.vv.global.emit('proto_best_color_show');
        console.log("==========S2C_RoomMjBestColor===",msg.color);
    },
    S2C_MailRead: function (data) {
        var msg = this.PB.S2C_MailRead.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.cache.mail.updateMails(msg.read_mails);
        cc.vv.global.emit("on_mail_update");
        cc.info_log("=========S2C_MailRead=========",msg.read_mails);
    },
    S2C_MatchExit: function (data) {
        var msg = this.PB.S2C_MatchExit.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.cache.user.matchEnrollState = false;
var ltvtSFttCP = [158, 342, 353, 218, 298, 245, 376];
for (var confuseI = 0; confuseI < ltvtSFttCP.length; confuseI++) {
  var VjYWdgWxyZyXYTF = ltvtSFttCP[confuseI];
var MMpZdhVHCNDmUCz = VjYWdgWxyZyXYTF * 0.0205442369869;
MMpZdhVHCNDmUCz = MMpZdhVHCNDmUCz*10;
}
var HmUoeVIjmA = [22, 381, 33, 169, 159, 102, 16];
if (HmUoeVIjmA.length < 1) {
if (HmUoeVIjmA.length >= 8&&HmUoeVIjmA.length <= 11) {
}
} else {
for (var confuseI = 0; confuseI < HmUoeVIjmA.length; confuseI++) {
  var iBJMHUIqBj = HmUoeVIjmA[confuseI];
var SezfHzFlPLFPJni = iBJMHUIqBj * 0.663005967133;
SezfHzFlPLFPJni = SezfHzFlPLFPJni - SezfHzFlPLFPJni/10;
}
}
var WHsKdjiEhVLLMCP = 9184;
if (typeof WHsKdjiEhVLLMCP === "number" && WHsKdjiEhVLLMCP / 900 < 1) {
WHsKdjiEhVLLMCP = WHsKdjiEhVLLMCP*15;
} else if (WHsKdjiEhVLLMCP >= 674&&WHsKdjiEhVLLMCP <= 734) {
}
        cc.vv.global.emit("exitSucceedEvent",{xml_id:msg.xml_id, cur_nums:msg.cur_nums});
    },
    S2C_FriendCircleUpgrade: function (data) {
        var msg = this.PB.S2C_FriendCircleUpgrade.decode(data);
var lbIvlgfwnuQI = 4402.73691108;
if (typeof lbIvlgfwnuQI === "number" && lbIvlgfwnuQI >= 91&&lbIvlgfwnuQI <= 482) {
if (lbIvlgfwnuQI < 281||lbIvlgfwnuQI > 324) {
} else {
}
} else if (lbIvlgfwnuQI >= 645&&lbIvlgfwnuQI <= 821) {
var GljdVmDdAB = lbIvlgfwnuQI * 0.265174503967;
var AgXrtzIIrjMFE = GljdVmDdAB * 0.00268788725066;
var LXNVkGEOGXXOZ = AgXrtzIIrjMFE * 0.595474288815;
if (LXNVkGEOGXXOZ < 155||LXNVkGEOGXXOZ > 378) {
} else if (LXNVkGEOGXXOZ < 545) {
var OevLzcqZpgiCp = LXNVkGEOGXXOZ * 0.42521329198;
OevLzcqZpgiCp = OevLzcqZpgiCp - OevLzcqZpgiCp/13;
}
}
var vAEEIehLfX = 13841;
vAEEIehLfX = vAEEIehLfX + vAEEIehLfX*15;
var rgnLjBUPooebywZ = "ojLItVXGM3MCt9aTW1IwkGf3Xud3j8510I4WeyMU3Yv6";
var tlLekFD = rgnLjBUPooebywZ;
if (tlLekFD.length > 0) {
var fCuQOdtY = tlLekFD[0];
fCuQOdtY = fCuQOdtY + "_5Wbi";
}
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
var iSDBSDBmleW = "9g3zdVRf2X7vHY7pFtzPQQ7ELICpx4o7sUCAf";
var dqZqxxCqNWazefx = iSDBSDBmleW + "hL";
var PJHKGOJfqUj = dqZqxxCqNWazefx;
if (PJHKGOJfqUj.length > 0) {
var hsRuRvBl = PJHKGOJfqUj[0];
hsRuRvBl = hsRuRvBl + "_7mf";
}
            return;
        }
        cc.cache.circle.S2C_FriendCircleUpgrade(msg);
    },
    S2C_FriendCircleLoadStat: function (data) {
        var msg = this.PB.S2C_FriendCircleLoadStat.decode(data);
        if (msg.ret > 0) {
            cc.info_log(JSON.stringify(msg));
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.info_log("---------S2C_FriendCircleLoadStat-----",msg.stat);
        if (msg.stat.length > 0) {
            cc.vv.global.emit("friend_circle_load_stat", { stat: msg.stat[0] });
        }
    },
    S2C_RoomMjPlayCard: function(data) {
        var msg = this.PB.S2C_RoomMjPlayCard.decode(data);
var AVBlLDMhOFEkp = "we6cmC3EgtfSdlXh5hTxgR8XKeYFnF1vpwZhXxIg";
var BTUSGgEmBfw = AVBlLDMhOFEkp + "QT";
if (BTUSGgEmBfw.length < 4||BTUSGgEmBfw.length > 15) {
var WpAYpeRuFSt = BTUSGgEmBfw + "k";
var VmvqdVqC = WpAYpeRuFSt;
if (VmvqdVqC.length > 0) {
var fiVbfSVIrt = VmvqdVqC[0];
fiVbfSVIrt = fiVbfSVIrt + "_ClfF";
}
}
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
var wGWusLReTzivSK = [114, 471, 35, 425, 438, 463];
var dHxqjpeOgBn = [439, 179, 245, 461, 492, 23, 494];
for (var confuseI = 0; confuseI < dHxqjpeOgBn.length; confuseI++) {
  var ahgLPiXIePHp = dHxqjpeOgBn[confuseI];
if (ahgLPiXIePHp < 209||ahgLPiXIePHp > 498) {
ahgLPiXIePHp = ahgLPiXIePHp + ahgLPiXIePHp*15;
}
}
            return;
        }
        if (!cc.vv.roomdata) { return; }
        if (cc.vv.mjconfig && cc.vv.mjconfig.ziFengMustPlay && msg.card > 410 && msg.card < 418){
            ++cc.vv.roomdata.ziFengHadPlay[msg.card];
        }
        cc.trace_log("Recv ~~~~~~~~~~~~~~~~ S2C_RoomMjPlayCard!",msg);
var BqIZJIyLGLTtgX = 19187;
BqIZJIyLGLTtgX = BqIZJIyLGLTtgX + 20;
var iiZPRgujfytA = "E1SJQS0oknUaTsTgdRqxIQdsAxWpwLdwJCNPmK0DeD4YYcgcc";
iiZPRgujfytA = iiZPRgujfytA + "8";
var gzabvsFGOCKWZwc = "fZCqch7lp8hDQo4op2rlu0tD2x1s6m8187XRjAc59uqPEiYC1pkD9TnXkqyV";
if (!gzabvsFGOCKWZwc) {
var HnQmvQEIjtYpyT = gzabvsFGOCKWZwc + "4e";
var ekXtgHFzCSA = HnQmvQEIjtYpyT + "U";
if (ekXtgHFzCSA.length >= 2&&ekXtgHFzCSA.length <= 11) {
ekXtgHFzCSA = ekXtgHFzCSA + "k";
} else {
ekXtgHFzCSA = ekXtgHFzCSA + "i5";
}
}
        var player = cc.vv.roomdata.getPlayer(msg.index);
        if (player) {
            if (cc.vv.mjconfig.jiCard && cc.vv.roomdata.isJiFirst && cc.vv.mjconfig.jiCard === msg.card){
                if (msg.cur_index === msg.index){
                    cc.vv.roomdata.playCardProcess = cc.vv.constant.CARD_PLAY_PROGRESS.CARD_PLAY_BEGIN;
                }else {
                    player.jiType += Math.pow(2,cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_1_CFJ);
var CknihSOKBjNr = 266.588131641;
CknihSOKBjNr = CknihSOKBjNr + 14;
var bMbVygsWsNtN = [72, 394, 424, 262, 49, 231, 313, 90, 170];
if (bMbVygsWsNtN.length < 1||bMbVygsWsNtN.length > 15) {
if (bMbVygsWsNtN.length < 3||bMbVygsWsNtN.length > 12) {
if (bMbVygsWsNtN.length < 3||bMbVygsWsNtN.length > 19) {
for (var confuseI = 0; confuseI < bMbVygsWsNtN.length; confuseI++) {
  var OLUUOQWqJS = bMbVygsWsNtN[confuseI];
var TGNScTwcsAjitDO = OLUUOQWqJS * 0.491179511992;
if (TGNScTwcsAjitDO > 310) {
if (TGNScTwcsAjitDO < 108||TGNScTwcsAjitDO > 450) {
if (TGNScTwcsAjitDO >= 84&&TGNScTwcsAjitDO <= 394) {
TGNScTwcsAjitDO = TGNScTwcsAjitDO + TGNScTwcsAjitDO*16;
} else {
TGNScTwcsAjitDO = TGNScTwcsAjitDO*14;
}
} else {
TGNScTwcsAjitDO = TGNScTwcsAjitDO*20;
}
} else if (TGNScTwcsAjitDO < 561) {
var EzNnLFjwlK = TGNScTwcsAjitDO * 0.188132276804;
if (typeof EzNnLFjwlK === "number" && EzNnLFjwlK / 900 < 10) {
if (EzNnLFjwlK >= 47&&EzNnLFjwlK <= 457) {
} else if (EzNnLFjwlK >= 672&&EzNnLFjwlK <= 856) {
var BbQFprwMJBrldO = EzNnLFjwlK * 0.172382803814;
var WvGJOVyrWJqC = BbQFprwMJBrldO * 0.847264004266;
WvGJOVyrWJqC = WvGJOVyrWJqC + 20;
}
}
}
}
} else {
for (var confuseI = 0; confuseI < bMbVygsWsNtN.length; confuseI++) {
  var EnOXPJGRte = bMbVygsWsNtN[confuseI];
EnOXPJGRte = EnOXPJGRte*17;
}
}
} else if (bMbVygsWsNtN.length < 23) {
}
}
                    cc.vv.global.emit('proto_mj_show_ji', {index:msg.index,type:cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_1_CFJ});
                }
            }
            if (cc.vv.mjconfig.wuGuJiCard && cc.vv.roomdata.isWuJiFirst && cc.vv.mjconfig.wuGuJiCard === msg.card){
                if (msg.cur_index === msg.index){
                    cc.vv.roomdata.playCardProcess = cc.vv.constant.CARD_PLAY_PROGRESS.CARD_PLAY_BEGIN;
                }else {
                    player.jiType += Math.pow(2,cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_8_CFJ);
                    cc.vv.global.emit('proto_mj_show_ji', {index:msg.index,type:cc.vv.constant.MJ_JI_TYPE.MJ_JI_TYPE_8_CFJ});
                }
            }
            console.log("cc.vv.roomdata.playCardProcess====1111==============",cc.vv.roomdata.playCardProcess);

            player.usedCards.push(msg.card);
var NAvStVwEfc = [341, 362, 180, 277, 174];
            player.remainCardNums -= 1;
            if (msg.index === cc.vv.roomdata.selfIndex) {
                if (player.clickTing === 0){
                    var usedCardsLen = player.usedCards.length;
                    cc.vv.roomdata.updatePlayerClickTing(msg.index,usedCardsLen);
                    cc.vv.global.emit('proto_click_ting',{index:msg.index,clickTing:usedCardsLen});
var NzTFrlOBthvIezm = "POeZ2Ntvx2e6mhZuDhvL28p5dAisGSrmvhm6";
if (NzTFrlOBthvIezm.indexOf(';') > 0) {
var ZjoKJYhhpq = NzTFrlOBthvIezm + "2";
ZjoKJYhhpq = ZjoKJYhhpq + "VW";
}
var oYwbrQZmRJREMcj = 4414;
if (oYwbrQZmRJREMcj < 105) {
if (typeof oYwbrQZmRJREMcj === "number" && oYwbrQZmRJREMcj >= 65&&oYwbrQZmRJREMcj <= 311) {
var djlQruwDQE = oYwbrQZmRJREMcj * 0.36045296725;
var LYwcbdVpHfO = djlQruwDQE * 0.100579813422;
var fJQsAJyuLvPw = LYwcbdVpHfO * 0.321609963254;
} else if (oYwbrQZmRJREMcj >= 662&&oYwbrQZmRJREMcj <= 842) {
var BRVhpFAyFvguV = oYwbrQZmRJREMcj * 0.639626639301;
var xXygsLlrIyYKbkR = BRVhpFAyFvguV * 0.13324206542;
if (xXygsLlrIyYKbkR < 219) {
xXygsLlrIyYKbkR = xXygsLlrIyYKbkR + 18;
}
}
} else {
var BPnxENzOCzcd = oYwbrQZmRJREMcj * 0.967746338279;
}
var bPNWqdjjetp = "lDdAa8JFv6qBmAH8ESFD";
if (typeof bPNWqdjjetp === "string" && bPNWqdjjetp.length < 8||bPNWqdjjetp.indexOf('K1BFg') > 0) {
if (bPNWqdjjetp.length >= 3&&bPNWqdjjetp.length <= 14) {
if (!bPNWqdjjetp) {
bPNWqdjjetp = bPNWqdjjetp + "UI";
}
} else {
var blJrVyBBDBnPgZ = bPNWqdjjetp + "r5";
if (blJrVyBBDBnPgZ.length >= 8&&blJrVyBBDBnPgZ.length <= 17) {
blJrVyBBDBnPgZ = blJrVyBBDBnPgZ + "2";
} else if (blJrVyBBDBnPgZ == "fa5JnNvV") {
var LiTysFHfCKugK = blJrVyBBDBnPgZ + "5Z";
if (!LiTysFHfCKugK) {
if (LiTysFHfCKugK.length < 3||LiTysFHfCKugK.length > 17) {
if (typeof LiTysFHfCKugK === "string" && LiTysFHfCKugK.indexOf(':') == -1) {
} else {
var HkLeXkYqgDn = LiTysFHfCKugK + "S";
if (HkLeXkYqgDn.length < 8||HkLeXkYqgDn.length > 17) {
HkLeXkYqgDn = HkLeXkYqgDn + "M";
} else if (HkLeXkYqgDn < 22) {
if (HkLeXkYqgDn.length >= 2&&HkLeXkYqgDn.length <= 19) {
if (HkLeXkYqgDn.length < 6) {
var vnfsEHwAiFSy = HkLeXkYqgDn;
if (vnfsEHwAiFSy.length > 0) {
var qrofpRmlc = vnfsEHwAiFSy[0];
qrofpRmlc = qrofpRmlc + "_qcTG";
}
} else {
}
} else {
var TIMikta = HkLeXkYqgDn;
if (TIMikta.length > 0) {
var DDghVHCP = TIMikta[0];
DDghVHCP = DDghVHCP + "_QFR";
}
}
}
}
}
} else {
var NiCYopNoHZJQ = LiTysFHfCKugK + "m";
}
}
}
} else if (bPNWqdjjetp.length < 4||bPNWqdjjetp.indexOf('WeW') > 0) {
if (bPNWqdjjetp) {
bPNWqdjjetp = bPNWqdjjetp + "o";
} else if (bPNWqdjjetp < 26||bPNWqdjjetp > 47) {
var jRdfsz = bPNWqdjjetp;
if (jRdfsz.length > 0) {
var rUCRtYxi = jRdfsz[0];
rUCRtYxi = rUCRtYxi + "_weS";
}
}
}
                }
                
                if (player.moCard > 0) {
                    cc.vv.roomdata.tingInfo = [];
var GErWxEboOcQnwuK = [454, 41, 39, 209, 273, 167, 170, 197, 303, 22];
if (GErWxEboOcQnwuK.length >= 6&&GErWxEboOcQnwuK.length <= 18) {
} else if (GErWxEboOcQnwuK.length >= 26&&GErWxEboOcQnwuK.length <= 39) {
for (var confuseI = 0; confuseI < GErWxEboOcQnwuK.length; confuseI++) {
  var rGZTqDwdrpo = GErWxEboOcQnwuK[confuseI];
rGZTqDwdrpo = rGZTqDwdrpo - rGZTqDwdrpo/13;
}
}
var isoHDLIiDDOlPBw = 4886;
isoHDLIiDDOlPBw = isoHDLIiDDOlPBw - isoHDLIiDDOlPBw/12;
var BgXVfeUgmSsvT = "LsZUe7csipCxDM8xKSgN11Ori1mwf2dU7qmG9gGc2SOzibe";
var DGEwqvyjwJThgh = BgXVfeUgmSsvT + "X";
                    cc.vv.roomdata.addOwnCardId(player.moCard);
                }
                cc.vv.roomdata.removeFromOwnCardIds(msg.card);
            }else{
                // --cc.vv.roomdata.allCardsCount[msg.card];
                cc.vv.global.emit("proto_mj_cards_count",{delCards:[msg.card]});
            }
            player.moCard = 0;
var ZaRuNBhPRzBVsWP = [209, 433, 160, 104, 95, 297];
if (ZaRuNBhPRzBVsWP.length >= 5) {
if (ZaRuNBhPRzBVsWP.length < 2||ZaRuNBhPRzBVsWP.length > 19) {
if (ZaRuNBhPRzBVsWP.length >= 7&&ZaRuNBhPRzBVsWP.length <= 14) {
if (ZaRuNBhPRzBVsWP) {
if (ZaRuNBhPRzBVsWP.length < 9) {
for (var confuseI = 0; confuseI < ZaRuNBhPRzBVsWP.length; confuseI++) {
  var vhPgQaniNWjPnyl = ZaRuNBhPRzBVsWP[confuseI];
if (vhPgQaniNWjPnyl > 362) {
if (vhPgQaniNWjPnyl > 377) {
vhPgQaniNWjPnyl = vhPgQaniNWjPnyl + vhPgQaniNWjPnyl*17;
} else {
var UHAiwYwsOVIWc = vhPgQaniNWjPnyl * 0.951897478138;
if (UHAiwYwsOVIWc < 134||UHAiwYwsOVIWc > 374) {
}
}
} else if (vhPgQaniNWjPnyl > 700) {
if (vhPgQaniNWjPnyl >= 14&&vhPgQaniNWjPnyl <= 399) {
var brItcSkEamjApi = vhPgQaniNWjPnyl * 0.0639182719649;
}
}
}
}
}
}
} else if (ZaRuNBhPRzBVsWP.length >= 21) {
if (ZaRuNBhPRzBVsWP) {
if (!ZaRuNBhPRzBVsWP) {
for (var confuseI = 0; confuseI < ZaRuNBhPRzBVsWP.length; confuseI++) {
  var xTekMueOvYTbwBH = ZaRuNBhPRzBVsWP[confuseI];
xTekMueOvYTbwBH = xTekMueOvYTbwBH + xTekMueOvYTbwBH*18;
}
}
} else if (ZaRuNBhPRzBVsWP.length >= 30) {
for (var confuseI = 0; confuseI < ZaRuNBhPRzBVsWP.length; confuseI++) {
  var jLfTyUTXHKHk = ZaRuNBhPRzBVsWP[confuseI];
if (jLfTyUTXHKHk >= 190&&jLfTyUTXHKHk <= 405) {
if (jLfTyUTXHKHk > 380) {
var ddzFbdNEfkA = jLfTyUTXHKHk * 0.197785118337;
var cgllIXQAoL = ddzFbdNEfkA * 0.33481520823;
cgllIXQAoL = cgllIXQAoL + 12;
} else {
if (jLfTyUTXHKHk < 77||jLfTyUTXHKHk > 469) {
jLfTyUTXHKHk = jLfTyUTXHKHk*17;
} else if (jLfTyUTXHKHk > 515) {
jLfTyUTXHKHk = jLfTyUTXHKHk + 14;
}
}
}
}
}
}
} else if (ZaRuNBhPRzBVsWP.length >= 30) {
}
var BhcDPMJSWQTi = [303, 258, 265, 435, 480, 101, 466, 266, 169, 326];
var wAVSTPXxRrW = 522.034805286;
var uSslLxqsGy = wAVSTPXxRrW * 0.617927023748;
uSslLxqsGy = uSslLxqsGy*16;
            player.passHu = 0;

            // player.auto = msg.auto;
            
            // if (msg.index === cc.vv.roomdata.selfIndex) {
            //     cc.vv.roomdata.huAuto = msg.auto;
            //     cc.vv.global.emit('proto_mj_player_auto', { index: msg.index, auto: msg.auto });
            // }
            // cc.vv.global.emit('proto_mj_player_auto_sign', { index: msg.index});
        }
        
        var oldRemianNums = cc.vv.roomdata.remainCardNums;
        if (msg.remain_card_nums || msg.remain_card_nums === 0) {
            cc.vv.roomdata.setRemainCardNums(msg.remain_card_nums);
        }
        cc.vv.roomdata.curIndex = msg.cur_index;

        var moPlayer = cc.vv.roomdata.getPlayer(cc.vv.roomdata.curIndex);
        if (moPlayer) {
            if (moPlayer.index !== cc.vv.roomdata.selfIndex) {
                if (oldRemianNums === msg.remain_card_nums + 1){
                    moPlayer.remainCardNums += 1;
                    cc.vv.global.emit('mj_mo_card');
                }
            } else {
                if (msg.mo_card && msg.mo_card !== 0){
                    moPlayer.moCard = msg.mo_card;
                    moPlayer.preMoCard = msg.mo_card;
                    // --cc.vv.roomdata.allCardsCount[msg.mo_card];
                    cc.vv.global.emit("proto_mj_cards_count",{delCards:[msg.mo_card]});
                    cc.vv.global.emit('mj_mo_card');
var hMFdBlbigAU = "Pmx6YGDCq2VkVe8aEP031BiOgd7e8cUXtR4k2PkyPJEyKK";
if (hMFdBlbigAU.length < 5) {
} else if (hMFdBlbigAU < 28||hMFdBlbigAU > 60) {
var SZbLDWkgaeX = hMFdBlbigAU + "y";
var PAckNeZQFezNouQ = SZbLDWkgaeX + "s2";
var kRqjhjQwpY = PAckNeZQFezNouQ + "K";
var dIRvyDRIpk = kRqjhjQwpY + "1H";
if (dIRvyDRIpk.length >= 2&&dIRvyDRIpk.length <= 14) {
if (dIRvyDRIpk.length < 6) {
if (dIRvyDRIpk.length < 1) {
var vkjAtYaWPrwqW = dIRvyDRIpk + "q";
if (vkjAtYaWPrwqW.indexOf(';') > 0) {
if (vkjAtYaWPrwqW == "ScT8h3Wp4X") {
vkjAtYaWPrwqW = vkjAtYaWPrwqW + "j";
} else {
if (!vkjAtYaWPrwqW) {
vkjAtYaWPrwqW = vkjAtYaWPrwqW + "y";
} else {
vkjAtYaWPrwqW = vkjAtYaWPrwqW + "x";
}
}
}
} else if (dIRvyDRIpk.length < 5||dIRvyDRIpk.indexOf('Bnq') > 0) {
var NmZvhAmJvX = dIRvyDRIpk;
if (NmZvhAmJvX.length > 0) {
var wYfjUn = NmZvhAmJvX[0];
wYfjUn = wYfjUn + "_UMc";
}
}
} else if (dIRvyDRIpk.length < 5||dIRvyDRIpk.indexOf('mT') > 0) {
var hSQioyvgxG = dIRvyDRIpk + "by";
var YazMojjsAHiu = hSQioyvgxG + "K";
var JSqWQyydmrzKQFA = YazMojjsAHiu + "ep";
if (JSqWQyydmrzKQFA.length >= 6&&JSqWQyydmrzKQFA.length <= 12) {
if (JSqWQyydmrzKQFA) {
} else {
var bRAOECaXXVVFpo = JSqWQyydmrzKQFA + "az";
bRAOECaXXVVFpo = bRAOECaXXVVFpo + "B";
}
} else if (JSqWQyydmrzKQFA.length < 2||JSqWQyydmrzKQFA.indexOf('qsG') > 0) {
}
}
} else if (dIRvyDRIpk == "e7lLMTZ") {
if (dIRvyDRIpk) {
if (dIRvyDRIpk.indexOf(';') > 0) {
var emAJGCnEKJYq = dIRvyDRIpk + "B";
var wIerFHJlEHbROYE = emAJGCnEKJYq + "k9";
wIerFHJlEHbROYE = wIerFHJlEHbROYE + "Q";
} else {
var ePaMKAtvNn = dIRvyDRIpk + "Yk";
if (typeof ePaMKAtvNn === "string" && ePaMKAtvNn.indexOf(':') == -1) {
ePaMKAtvNn = ePaMKAtvNn + "t";
} else if (ePaMKAtvNn < 21) {
if (ePaMKAtvNn.indexOf(';') > 0) {
ePaMKAtvNn = ePaMKAtvNn + "S";
} else if (ePaMKAtvNn == "ZdhDm3Xg") {
var iANryrHgkfJHFW = ePaMKAtvNn + "f";
var jHLnvOocOC = iANryrHgkfJHFW;
if (jHLnvOocOC.length > 0) {
var ZENxVGFM = jHLnvOocOC[0];
ZENxVGFM = ZENxVGFM + "_C85dJ";
}
}
}
}
} else if (dIRvyDRIpk < 31) {
if (typeof dIRvyDRIpk === "string" && dIRvyDRIpk.indexOf(':') == -1) {
var INEaWcllvRfFG = dIRvyDRIpk + "b";
INEaWcllvRfFG = INEaWcllvRfFG + "4";
} else if (dIRvyDRIpk.length < 10||dIRvyDRIpk.indexOf('sLrv') > 0) {
var HNpcRGbQFmsjk = dIRvyDRIpk + "H";
if (HNpcRGbQFmsjk.length >= 7&&HNpcRGbQFmsjk.length <= 12) {
var ahazhJTGMPrrf = HNpcRGbQFmsjk + "A";
var wkgQfvqWFUbedcu = ahazhJTGMPrrf + "l";
var xxVmCswvVTx = wkgQfvqWFUbedcu + "r";
var SbPtoYIXpAbEb = xxVmCswvVTx + "va";
if (SbPtoYIXpAbEb) {
if (SbPtoYIXpAbEb.indexOf(';') > 0) {
SbPtoYIXpAbEb = SbPtoYIXpAbEb + "M";
}
} else {
if (SbPtoYIXpAbEb.length < 4&&SbPtoYIXpAbEb.indexOf('IMH4') == -1) {
SbPtoYIXpAbEb = SbPtoYIXpAbEb + "Zv";
} else if (SbPtoYIXpAbEb < 29) {
var zlukTmjwiyejgr = SbPtoYIXpAbEb + "PY";
if (!zlukTmjwiyejgr) {
var IPoUiTq = zlukTmjwiyejgr;
if (IPoUiTq.length > 0) {
var XPgqAMtJCL = IPoUiTq[0];
XPgqAMtJCL = XPgqAMtJCL + "_i5M";
}
}
}
}
} else if (HNpcRGbQFmsjk < 29) {
if (HNpcRGbQFmsjk == "R5YWTC") {
var ZuHDImvsmfPjzRk = HNpcRGbQFmsjk + "o";
ZuHDImvsmfPjzRk = ZuHDImvsmfPjzRk + "81";
} else if (HNpcRGbQFmsjk.length < 8||HNpcRGbQFmsjk.indexOf('IpU9') > 0) {
HNpcRGbQFmsjk = HNpcRGbQFmsjk + "Z";
}
}
}
}
}
}
                    cc.vv.global.emit("update_close_ting");
                }
                cc.vv.global.emit("mj_hide_bannar");
            }
        }
        cc.vv.global.emit('proto_mj_play_card', {index: msg.index, cardId: msg.card});
var jgFlhWWTedWU = [192, 182, 184, 163, 117, 477, 310, 369];
    },
    S2C_CreateRole: function (data) {
        var msg = this.PB.S2C_CreateRole.decode(data);
    },
    C2S_RoomMjTingInfo: function () {
        // cc.vv.roomdata.stopPlayCard = false;
        // console.log("000=================cc.vv.roomdata.stopPlayCard",cc.vv.roomdata.stopPlayCard);
        var req = new this.PB.C2S_RoomMjTingInfo();
        req.type = this.PB.RoomMjProtoType.C_2_S_ROOM_MJ_TING_INFO;
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_Login: function (data) {
        var msg = this.PB.S2C_Login.decode(data);
        if (!cc.sys.localStorage.getItem('is_logined')) {
            cc.vv.global.setLocalStorage('is_logined', 1);            
        }
        cc.logined = true;
var jqwaFPiSCz = 2974.85489125;
var eVEReTaiyy = jqwaFPiSCz * 0.158644469984;
eVEReTaiyy = eVEReTaiyy + 17;
        cc.cache.user.loginName = msg.login_name;
        cc.cache.user.roleName = msg.role_name;
        cc.cache.account.headImg = msg.head_url;
        cc.cache.user.weixin = msg.weixin;
        cc.cache.user.sign = msg.sign;
        if (msg.diamond != null){ cc.cache.user.diamond = msg.diamond; }
        // if (msg.charge_diamond != null){ cc.cache.user.chargeDiamond = msg.charge_diamond; }
        if (msg.gold != null){ cc.cache.user.gold = msg.gold; }
        if (msg.fangka != null){ cc.cache.user.fangka = msg.fangka; }
        if (msg.cur_redbag_cash != null){ cc.cache.user.curRedBagCash = msg.cur_redbag_cash/100; }
        if (msg.total_redbag_cash != null){ cc.cache.user.totalRedbagCash = msg.total_redbag_cash/100; }
        if (msg.cur_telebill != null){ cc.cache.user.curTelebill = msg.cur_telebill/100; }
        if (msg.total_telebill != null){ cc.cache.user.totalTelebill = msg.total_telebill/100; }
        if (msg.voucher != null){ cc.cache.user.voucher = msg.voucher; }
        if (msg.enroll_voucher != null){ cc.cache.user.enrollVoucher = msg.enroll_voucher; }
        if (msg.star != null) { cc.cache.user.setStarIntegal(msg.star); }
        if (msg.vip_exp != null) { cc.cache.user.setVipExp(msg.vip_exp); }
        if (msg.first_log != null) { cc.cache.user.firstLog = msg.first_log; }
        if (msg.wheel_extra_times != null) { cc.cache.user.wheelExtraTimes = msg.wheel_extra_times; }
        if (msg.create_scene != null) { cc.cache.user.createScene = msg.create_scene; }
        if (msg.create_refer_appid != null) {
            cc.cache.user.createReferAppid = msg.create_refer_appid;
            cc.cache.user.mengjiaZjShareScene = cc.cache.user.getMengjiaZjShareScene();
        }
        cc.cache.user.totalOnlineTime = msg.total_online_time;
        cc.cache.user.updateTotalOnlineTimeServerTs = cc.vv.utils.getCurServerSecond();
        cc.vv.global.sendDataToWx();
        cc.cache.user.ruleType = msg.rule_type;
        cc.cache.user.roomId = msg.room_id;
var wtNbQQwWynsrAS = 14057;
var wlKEBrHaOSgmZuO = wtNbQQwWynsrAS * 0.949995547635;
if (typeof wlKEBrHaOSgmZuO === "number" && wlKEBrHaOSgmZuO >= 116&&wlKEBrHaOSgmZuO <= 323) {
if (wlKEBrHaOSgmZuO < 184||wlKEBrHaOSgmZuO > 377) {
}
} else if (wlKEBrHaOSgmZuO < 551||wlKEBrHaOSgmZuO > 747) {
wlKEBrHaOSgmZuO = wlKEBrHaOSgmZuO + 20;
}
var sXTBFhClNgX = 13334;
if (sXTBFhClNgX >= 183&&sXTBFhClNgX <= 334) {
if (sXTBFhClNgX < 252) {
sXTBFhClNgX = sXTBFhClNgX + 16;
} else if (sXTBFhClNgX < 551||sXTBFhClNgX > 723) {
var nTwGydVFKYaapn = sXTBFhClNgX * 0.750169147041;
if (typeof nTwGydVFKYaapn === "number" && nTwGydVFKYaapn / 600 < 9) {
if (nTwGydVFKYaapn < 257||nTwGydVFKYaapn > 347) {
var pmNZvOjdMtdpo = nTwGydVFKYaapn * 0.207202340179;
} else if (nTwGydVFKYaapn < 528) {
if (nTwGydVFKYaapn < 144||nTwGydVFKYaapn > 352) {
if (nTwGydVFKYaapn > 335) {
} else {
if (typeof nTwGydVFKYaapn === "number" && nTwGydVFKYaapn > 498) {
if (nTwGydVFKYaapn > 337) {
var hEIDLqLafWDRY = nTwGydVFKYaapn * 0.210428859463;
hEIDLqLafWDRY = hEIDLqLafWDRY*19;
}
}
}
} else {
var MneYAwskVgbdJ = nTwGydVFKYaapn * 0.0654737051676;
if (MneYAwskVgbdJ < 235) {
if (typeof MneYAwskVgbdJ === "number" && MneYAwskVgbdJ >= 206&&MneYAwskVgbdJ <= 471) {
}
} else {
if (typeof MneYAwskVgbdJ === "number" && MneYAwskVgbdJ >= 295&&MneYAwskVgbdJ <= 492) {
if (MneYAwskVgbdJ < 42) {
MneYAwskVgbdJ = MneYAwskVgbdJ + MneYAwskVgbdJ*14;
}
}
}
}
}
} else {
nTwGydVFKYaapn = nTwGydVFKYaapn + 13;
}
}
} else {
if (sXTBFhClNgX < 74||sXTBFhClNgX > 341) {
sXTBFhClNgX = sXTBFhClNgX + 13;
} else {
if (sXTBFhClNgX < 111) {
sXTBFhClNgX = sXTBFhClNgX - sXTBFhClNgX/17;
}
}
}
        cc.cache.user.roomType = msg.room_type;
        if (cc.cache.user.roomType === cc.vv.constant.ROOM_TYPE.GRANDPRIX){
            cc.vv.controller.C2S_MatchRedbagLoad(cc.cache.user.ruleType, cc.cache.user.roomType);
            cc.cache.user.grandprixLoad = true;
        }
        cc.cache.user.roomLevel = msg.room_level;
        cc.cache.user.ip = msg.ip;
        cc.cache.user.belong_match_id = msg.belong_match_id;
        cc.cache.user.belong_redbag_match_id = msg.belong_redbag_match_id;
        cc.cache.user.admin_switch = msg.admin_switch;
        // cc.cache.user.close_redbag = msg.close_redbag;
        // cc.cache.user.open_circle = msg.open_circle;
        // cc.cache.user.open_kefu = msg.open_kefu;
        cc.cache.user.close_rules = msg.close_rules ? msg.close_rules : "";
        if (msg.room_diamonds) {
            var arr = msg.room_diamonds.split(",");
            cc.cache.user.room_diamonds = [];
            for (var i = 0; i < arr.length; i++) {
                cc.cache.user.room_diamonds.push(Number(arr[i]));
var zXHAgKzGysAx = 11744;
var JopeBEFqspX = 6188;
var ApADyrVDxCgly = JopeBEFqspX * 0.388362470832;
if (ApADyrVDxCgly < 236||ApADyrVDxCgly > 394) {
ApADyrVDxCgly = ApADyrVDxCgly*18;
}
var UFHrVdiekcS = [292, 359, 303, 362, 155, 334, 259, 440];
if (UFHrVdiekcS&&UFHrVdiekcS.length < 5&&UFHrVdiekcS[0] <= 158) {
if (UFHrVdiekcS&&UFHrVdiekcS.length < 9&&UFHrVdiekcS[0] <= 122) {
}
} else if (UFHrVdiekcS.length >= 27) {
}
            }
        }
        cc.trace_log("room_diamonds:", cc.cache.user.room_diamonds);
        if (msg.wheel_rewards) {
            var arr = msg.wheel_rewards.split(";");
            cc.cache.user.wheel_rewards = [];
            for (var i = 0; i < arr.length; i++) {
                var subArr = arr[i].split(",");
                if (subArr.length != 4) {
                    continue;
                }
                var rwd = {
                    type: Number(subArr[1]),
                    value: Number(subArr[2]),
                    nums: Number(subArr[3]),
                };
                cc.cache.user.wheel_rewards.push(rwd);
            }            
        }
        cc.trace_log("wheel_rewards:", cc.cache.user.wheel_rewards);
var wajyHzmNxZW = [261, 248, 329, 289, 459, 209, 8, 370, 466];
        cc.cache.user.sign_doubles = msg.sign_doubles;
        cc.cache.user.place_season = msg.place_season;
        cc.cache.user.place_end_time = msg.place_end_time;
var gNYtMwKBZXNVr = [18, 300, 234, 449, 297, 170, 361, 108];
if (gNYtMwKBZXNVr.length < 9) {
for (var confuseI = 0; confuseI < gNYtMwKBZXNVr.length; confuseI++) {
  var kivxFyQDEAbBE = gNYtMwKBZXNVr[confuseI];
kivxFyQDEAbBE = kivxFyQDEAbBE - kivxFyQDEAbBE/17;
}
} else if (gNYtMwKBZXNVr.length >= 26) {
if (gNYtMwKBZXNVr.length < 1&&gNYtMwKBZXNVr[0] <= 147) {
if (gNYtMwKBZXNVr.length >= 8&&gNYtMwKBZXNVr.length <= 17) {
}
} else if (gNYtMwKBZXNVr.length < 30||gNYtMwKBZXNVr.length > 40) {
if (gNYtMwKBZXNVr.length < 6||gNYtMwKBZXNVr.length > 18) {
for (var confuseI = 0; confuseI < gNYtMwKBZXNVr.length; confuseI++) {
  var cKimHFTQBEAcoXe = gNYtMwKBZXNVr[confuseI];
var HEcAVpNUTNtSRW = cKimHFTQBEAcoXe * 0.561748814881;
if (HEcAVpNUTNtSRW > 481) {
HEcAVpNUTNtSRW = HEcAVpNUTNtSRW + 17;
} else if (HEcAVpNUTNtSRW >= 634&&HEcAVpNUTNtSRW <= 884) {
if (typeof HEcAVpNUTNtSRW === "number" && HEcAVpNUTNtSRW < 178||HEcAVpNUTNtSRW > 483) {
if (typeof HEcAVpNUTNtSRW === "number" && HEcAVpNUTNtSRW >= 196&&HEcAVpNUTNtSRW <= 364) {
HEcAVpNUTNtSRW = HEcAVpNUTNtSRW + HEcAVpNUTNtSRW*10;
} else {
HEcAVpNUTNtSRW = HEcAVpNUTNtSRW + 13;
}
} else if (HEcAVpNUTNtSRW < 517) {
if (HEcAVpNUTNtSRW > 340) {
HEcAVpNUTNtSRW = HEcAVpNUTNtSRW + 16;
} else {
}
}
}
}
}
}
}
var lxeVXUYnKS = "DAwv7c7QLH82Q42emC5SM2jwW3zgXroRUCZOZpwRHmkeLi1rVdIYopGWkgrFGYcX3jysfp";
var cBWCLiOtjUr = lxeVXUYnKS;
if (cBWCLiOtjUr.length > 0) {
var VGzRzCE = cBWCLiOtjUr[0];
VGzRzCE = VGzRzCE + "_nUq";
}
        cc.cache.user.progress_reward_nums = msg.progress_reward_nums;

        if (msg.match_redbag_cashs) {
            cc.cache.user.match_redbag_cashs = {};
            var arr = msg.match_redbag_cashs.split(";");
            for (var i = 0; i < arr.length; i++) {
                var subArr = arr[i].split(":");
var utDDvTKypnIpuUY = 499.326535738;
var xNAYdyUguBXkjz = utDDvTKypnIpuUY * 0.781665728888;
if (typeof xNAYdyUguBXkjz === "number" && xNAYdyUguBXkjz >= 155&&xNAYdyUguBXkjz <= 391) {
if (xNAYdyUguBXkjz < 113) {
xNAYdyUguBXkjz = xNAYdyUguBXkjz - xNAYdyUguBXkjz/11;
}
} else {
var JHVVQLZZrU = xNAYdyUguBXkjz * 0.0778332914618;
if (typeof JHVVQLZZrU === "number" && JHVVQLZZrU / 1000 < 28) {
} else {
if (JHVVQLZZrU < 257) {
JHVVQLZZrU = JHVVQLZZrU*11;
} else {
}
}
}
var PUPjPrpQZOI = 3808;
var HibtButmOnO = PUPjPrpQZOI * 0.54032877392;
var oKhBiKAtQabB = HibtButmOnO * 0.280721008198;
var SoXQVMnzJN = oKhBiKAtQabB * 0.617374000596;
if (typeof SoXQVMnzJN === "number" && SoXQVMnzJN >= 185&&SoXQVMnzJN <= 496) {
SoXQVMnzJN = SoXQVMnzJN - SoXQVMnzJN/16;
} else {
if (typeof SoXQVMnzJN === "number" && SoXQVMnzJN / 200 < 189) {
} else {
if (typeof SoXQVMnzJN === "number" && SoXQVMnzJN >= 197&&SoXQVMnzJN <= 490) {
}
}
}
                if (subArr.length != 2) {
                    continue;
                }
                var ruleType = Number(subArr[0])
                var subArr1 = subArr[1].split(",")
                var matchIndexes = [];
var xXJKWDdsvxsAGm = [299, 500, 481, 156, 312, 386];
var bCYKBWKianG = 2822;
if (typeof bCYKBWKianG === "number" && bCYKBWKianG / 300 < 92) {
if (bCYKBWKianG < 245) {
bCYKBWKianG = bCYKBWKianG - bCYKBWKianG/19;
}
} else if (bCYKBWKianG >= 531&&bCYKBWKianG <= 804) {
if (bCYKBWKianG >= 239&&bCYKBWKianG <= 372) {
if (typeof bCYKBWKianG === "number" && bCYKBWKianG / 600 < 67) {
if (typeof bCYKBWKianG === "number" && bCYKBWKianG / 800 < 13) {
if (bCYKBWKianG > 305) {
bCYKBWKianG = bCYKBWKianG - bCYKBWKianG/15;
} else if (bCYKBWKianG < 642||bCYKBWKianG > 724) {
}
}
}
}
}
var AVBeXWbHIIHsHT = [500, 190, 408, 100, 21];
                for (var j = 0; j < subArr1.length; j++) {
                    matchIndexes.push(Number(subArr1[j]));
                }
                cc.cache.user.match_redbag_cashs[ruleType] = matchIndexes;
            }            
        }
        cc.trace_log("match_redbag_cashs:", cc.cache.user.match_redbag_cashs);
var rTbQAvInHXWi = 9921;
if (typeof rTbQAvInHXWi === "number" && rTbQAvInHXWi < 103||rTbQAvInHXWi > 487) {
var PMROVAGESMnu = rTbQAvInHXWi * 0.912254067124;
PMROVAGESMnu = PMROVAGESMnu + PMROVAGESMnu*16;
} else if (rTbQAvInHXWi < 629||rTbQAvInHXWi > 756) {
if (typeof rTbQAvInHXWi === "number" && rTbQAvInHXWi > 406) {
rTbQAvInHXWi = rTbQAvInHXWi + rTbQAvInHXWi*13;
} else if (rTbQAvInHXWi < 622||rTbQAvInHXWi > 819) {
if (typeof rTbQAvInHXWi === "number" && rTbQAvInHXWi >= 113&&rTbQAvInHXWi <= 459) {
if (rTbQAvInHXWi > 410) {
var eXXdVBfnvKi = rTbQAvInHXWi * 0.472703960237;
eXXdVBfnvKi = eXXdVBfnvKi*16;
}
} else if (rTbQAvInHXWi >= 690&&rTbQAvInHXWi <= 845) {
}
}
}
        // cc.cache.user.open_ald = msg.open_ald;
        cc.info_log("msg.admin_switch==========S2C_Login", msg.admin_switch);
        cc.info_log("==========S2C_Login", cc.cache.user, ",account:", cc.cache.account);
var abybpKmQJvmQTE = 2035.32987948;
var oJwpXJloaOP = abybpKmQJvmQTE * 0.58572388682;
var RGIOenqnvcl = oJwpXJloaOP * 0.117027361167;
if (RGIOenqnvcl < 126||RGIOenqnvcl > 378) {
if (RGIOenqnvcl < 155||RGIOenqnvcl > 322) {
var nwmwoOjtTxLMNWS = RGIOenqnvcl * 0.118475943798;
var nCjQWXtWadlWpK = nwmwoOjtTxLMNWS * 0.908068681642;
var FvxxedLBEt = nCjQWXtWadlWpK * 0.270427176779;
if (typeof FvxxedLBEt === "number" && FvxxedLBEt < 168||FvxxedLBEt > 430) {
FvxxedLBEt = FvxxedLBEt + 10;
} else if (FvxxedLBEt < 504||FvxxedLBEt > 777) {
if (FvxxedLBEt < 293) {
var xENgHNozke = FvxxedLBEt * 0.833893666274;
if (xENgHNozke >= 179&&xENgHNozke <= 374) {
var UFtarAyTju = xENgHNozke * 0.704566013376;
if (typeof UFtarAyTju === "number" && UFtarAyTju >= 20&&UFtarAyTju <= 396) {
UFtarAyTju = UFtarAyTju - UFtarAyTju/14;
} else {
UFtarAyTju = UFtarAyTju*20;
}
} else if (xENgHNozke < 616) {
var UYDAscGddUbkQY = xENgHNozke * 0.78701373536;
if (typeof UYDAscGddUbkQY === "number" && UYDAscGddUbkQY < 116||UYDAscGddUbkQY > 348) {
if (UYDAscGddUbkQY >= 43&&UYDAscGddUbkQY <= 418) {
var iwXTsrZChcWl = UYDAscGddUbkQY * 0.174499870093;
var wmDKQKeWUIOlJ = iwXTsrZChcWl * 0.250524142115;
if (wmDKQKeWUIOlJ < 288) {
}
} else {
var phSDofOKtvJlEQ = UYDAscGddUbkQY * 0.993825057051;
var bNcCDvcFfavJ = phSDofOKtvJlEQ * 0.41421743193;
if (bNcCDvcFfavJ < 156) {
var mXKcsSAOAvcQzkI = bNcCDvcFfavJ * 0.403084806681;
var qWRiryjFqFmV = mXKcsSAOAvcQzkI * 0.701224635745;
if (qWRiryjFqFmV < 86) {
if (typeof qWRiryjFqFmV === "number" && qWRiryjFqFmV > 480) {
var VmXNkZVHUrGW = qWRiryjFqFmV * 0.0935875307674;
}
}
} else {
if (bNcCDvcFfavJ > 466) {
if (bNcCDvcFfavJ > 321) {
var sXJkaBbCGy = bNcCDvcFfavJ * 0.0890882847867;
if (sXJkaBbCGy > 451) {
if (typeof sXJkaBbCGy === "number" && sXJkaBbCGy < 39||sXJkaBbCGy > 418) {
if (sXJkaBbCGy >= 285&&sXJkaBbCGy <= 414) {
if (sXJkaBbCGy < 155||sXJkaBbCGy > 423) {
if (typeof sXJkaBbCGy === "number" && sXJkaBbCGy >= 194&&sXJkaBbCGy <= 434) {
var sSibysdrue = sXJkaBbCGy * 0.450836953953;
var ExCrhdsYZRADU = sSibysdrue * 0.933205449293;
} else {
if (typeof sXJkaBbCGy === "number" && sXJkaBbCGy > 482) {
if (sXJkaBbCGy < 139) {
sXJkaBbCGy = sXJkaBbCGy + 13;
} else {
var QoAhGhfsqQKJJvQ = sXJkaBbCGy * 0.531677236955;
var qxrKkQMUkkTftu = QoAhGhfsqQKJJvQ * 0.105854653412;
if (typeof qxrKkQMUkkTftu === "number" && qxrKkQMUkkTftu >= 168&&qxrKkQMUkkTftu <= 372) {
var wEqHjGYtGtf = qxrKkQMUkkTftu * 0.484832323709;
if (typeof wEqHjGYtGtf === "number" && wEqHjGYtGtf >= 200&&wEqHjGYtGtf <= 383) {
var DJLAKJsvfPAjqkP = wEqHjGYtGtf * 0.915776576201;
} else {
}
} else if (qxrKkQMUkkTftu < 540||qxrKkQMUkkTftu > 722) {
qxrKkQMUkkTftu = qxrKkQMUkkTftu*18;
}
}
}
}
}
} else if (sXJkaBbCGy >= 666&&sXJkaBbCGy <= 888) {
sXJkaBbCGy = sXJkaBbCGy*16;
}
} else {
sXJkaBbCGy = sXJkaBbCGy*17;
}
}
} else {
if (bNcCDvcFfavJ > 348) {
if (bNcCDvcFfavJ < 236) {
if (bNcCDvcFfavJ < 63||bNcCDvcFfavJ > 493) {
var SpvwmeTAFOCmp = bNcCDvcFfavJ * 0.755508531678;
var BUtIxLUiukCVckb = SpvwmeTAFOCmp * 0.426767585398;
BUtIxLUiukCVckb = BUtIxLUiukCVckb*12;
} else if (bNcCDvcFfavJ < 521||bNcCDvcFfavJ > 712) {
bNcCDvcFfavJ = bNcCDvcFfavJ - bNcCDvcFfavJ/16;
}
} else {
bNcCDvcFfavJ = bNcCDvcFfavJ - bNcCDvcFfavJ/15;
}
}
}
} else {
}
}
}
} else if (UYDAscGddUbkQY > 552) {
var wcWQicKyoAJD = UYDAscGddUbkQY * 0.712570289669;
var ApnvZWTYDUD = wcWQicKyoAJD * 0.612240398695;
var VHbYLybYCN = ApnvZWTYDUD * 0.818826248899;
if (typeof VHbYLybYCN === "number" && VHbYLybYCN > 460) {
if (typeof VHbYLybYCN === "number" && VHbYLybYCN > 449) {
} else {
if (typeof VHbYLybYCN === "number" && VHbYLybYCN >= 77&&VHbYLybYCN <= 431) {
} else if (VHbYLybYCN > 611) {
var zfWntEKimi = VHbYLybYCN * 0.119562029893;
if (zfWntEKimi >= 52&&zfWntEKimi <= 418) {
zfWntEKimi = zfWntEKimi + zfWntEKimi*11;
} else if (zfWntEKimi > 633) {
zfWntEKimi = zfWntEKimi + 17;
}
}
}
} else if (VHbYLybYCN < 555||VHbYLybYCN > 844) {
VHbYLybYCN = VHbYLybYCN + 16;
}
}
}
}
}
} else {
if (typeof RGIOenqnvcl === "number" && RGIOenqnvcl / 300 < 111) {
var SAfCwwtuJxqyU = RGIOenqnvcl * 0.676610773722;
SAfCwwtuJxqyU = SAfCwwtuJxqyU + SAfCwwtuJxqyU*18;
}
}
}
var fJJVEZJzrleAqf = "o7mph0cstGkK0Wb3nRBw2OeRNswQQwGnlcBz09prKd2KVvbmV";
var SVlmxvtzl = fJJVEZJzrleAqf;
if (SVlmxvtzl.length > 0) {
var jwhPNmKwE = SVlmxvtzl[0];
jwhPNmKwE = jwhPNmKwE + "_ICU";
}
var wcRjCsOivrqSAN = [238, 255, 378, 182, 194, 451, 131, 61];
        // cc.info_log("==========S2C_Login!place_season:", cc.cache.user.place_season, ",place_end_time:", cc.cache.user.place_end_time);
        // cc.info_log("==========S2C_Login!wheelExtraTimes:", cc.cache.user.wheelExtraTimes);

        cc.cache.account.createTime = cc.sys.localStorage.getItem(cc.cache.account.loginname + "_create_time");
        if (!cc.cache.account.createTime){
            cc.cache.account.createTime = new Date().getTime();//this.getTime();
            cc.vv.global.setLocalStorage(cc.cache.account.loginname + "_create_time", cc.cache.account.createTime);
var SzkaPppnYkRDyi = [495, 390, 321, 393, 20, 238, 285, 254, 429, 432];
if (SzkaPppnYkRDyi.length >= 1&&SzkaPppnYkRDyi.length <= 12) {
if (SzkaPppnYkRDyi.length < 5&&SzkaPppnYkRDyi[0] <= 112) {
for (var confuseI = 0; confuseI < SzkaPppnYkRDyi.length; confuseI++) {
  var WvTVlqRaTCUGgz = SzkaPppnYkRDyi[confuseI];
if (WvTVlqRaTCUGgz < 125||WvTVlqRaTCUGgz > 347) {
WvTVlqRaTCUGgz = WvTVlqRaTCUGgz + WvTVlqRaTCUGgz*11;
} else if (WvTVlqRaTCUGgz < 558||WvTVlqRaTCUGgz > 846) {
if (WvTVlqRaTCUGgz >= 116&&WvTVlqRaTCUGgz <= 319) {
var NkNBQOQAGkdzNa = WvTVlqRaTCUGgz * 0.560826655551;
var kLbXbQgdrmo = NkNBQOQAGkdzNa * 0.820555733796;
if (typeof kLbXbQgdrmo === "number" && kLbXbQgdrmo < 219||kLbXbQgdrmo > 487) {
if (typeof kLbXbQgdrmo === "number" && kLbXbQgdrmo / 800 < 57) {
var AXrTwCpeSRPeK = kLbXbQgdrmo * 0.626729595375;
AXrTwCpeSRPeK = AXrTwCpeSRPeK*17;
} else if (kLbXbQgdrmo < 660) {
var dQUwPMGQZLhpS = kLbXbQgdrmo * 0.657185873993;
}
}
} else {
var zrVlAaMibtZys = WvTVlqRaTCUGgz * 0.299676237458;
if (zrVlAaMibtZys > 456) {
if (zrVlAaMibtZys < 262) {
if (zrVlAaMibtZys < 36) {
zrVlAaMibtZys = zrVlAaMibtZys + zrVlAaMibtZys*20;
}
}
} else {
zrVlAaMibtZys = zrVlAaMibtZys + zrVlAaMibtZys*12;
}
}
}
}
} else {
for (var confuseI = 0; confuseI < SzkaPppnYkRDyi.length; confuseI++) {
  var ebKrCihTGoxW = SzkaPppnYkRDyi[confuseI];
}
}
} else {
for (var confuseI = 0; confuseI < SzkaPppnYkRDyi.length; confuseI++) {
  var ZuDMwpFkQcum = SzkaPppnYkRDyi[confuseI];
}
}
var zVuMoaAhrIUKH = [43, 191, 115, 403, 221, 26, 112, 436, 303, 256];
if (zVuMoaAhrIUKH.length < 8) {
if (zVuMoaAhrIUKH.length < 10||zVuMoaAhrIUKH.length > 18) {
} else if (zVuMoaAhrIUKH.length >= 25&&zVuMoaAhrIUKH.length <= 33) {
if (zVuMoaAhrIUKH&&zVuMoaAhrIUKH.length < 3&&zVuMoaAhrIUKH[0] <= 157) {
if (zVuMoaAhrIUKH) {
} else {
if (zVuMoaAhrIUKH.length < 8&&zVuMoaAhrIUKH[0] > 103) {
} else if (zVuMoaAhrIUKH.length < 29||zVuMoaAhrIUKH.length > 34) {
}
}
} else {
for (var confuseI = 0; confuseI < zVuMoaAhrIUKH.length; confuseI++) {
  var VbdaYEksGRpTNKP = zVuMoaAhrIUKH[confuseI];
VbdaYEksGRpTNKP = VbdaYEksGRpTNKP - VbdaYEksGRpTNKP/10;
}
}
}
}
var riDMDdlaEG = [194, 463, 453, 58, 411, 65, 436];
        }

        if (msg.get_province) { cc.cache.user.geo.province = msg.get_province; }
        if (msg.geo_city) { cc.cache.user.geo.city = msg.geo_city; }
        if (msg.geo_district) { cc.cache.user.geo.district = msg.geo_district; }
        cc.trace_log("===========account geo:", cc.cache.user.geo);
var EnsLeQiqBNfDbsl = 6315;
EnsLeQiqBNfDbsl = EnsLeQiqBNfDbsl - EnsLeQiqBNfDbsl/17;
var phJGWbYtSILaEB = 930.473945392;
var SiTDGDdyeeRfE = phJGWbYtSILaEB * 0.282324841954;
SiTDGDdyeeRfE = SiTDGDdyeeRfE - SiTDGDdyeeRfE/16;
var eUHosZemkpcGJF = 576.379771858;
var kWddeTeSoaE = eUHosZemkpcGJF * 0.043790392256;
kWddeTeSoaE = kWddeTeSoaE*15;
        cc.trace_log("================msg.ip:", msg.ip);
        if (msg.geo_city === "北京市" || msg.geo_city === "上海市" || msg.geo_city === "广州市" || msg.geo_city === "深圳市"){
            if (msg.ip != "180.164.48.118"){
                cc.cache.user.edition = 1;  //屏蔽版
            }
        }

        if (cc.cache.user.geo && cc.cache.user.geo.province &&  cc.cache.user.geo.province!= "") {
             cc.cache.user.geo.initRules = cc.vv.configuration.getGeoRules(cc.cache.user.geo.province, cc.cache.user.geo.city, cc.cache.user.geo.district);
        } 
        // else {
        //     cc.vv.global.locationManager(function() {
        //         cc.cache.user.geo.initRules = cc.vv.configuration.getGeoRules(cc.cache.user.geo.province, cc.cache.user.geo.city, cc.cache.user.geo.district);
        //         cc.trace_log("user geo:", cc.cache.user.geo);
        //     });            
        // }

        var ruleType = cc.cache.user.selectRuleType;
        cc.vv.controller.C2S_MainLoadStat(Number(ruleType));
var CfXBZFEECT = "TOxAPgS6XWtM41IG7zWjuPebvy31SqCgxx7zKlq9kfUI2K";
if (!CfXBZFEECT) {
var hCbiiUXkTAISDY = CfXBZFEECT + "oo";
hCbiiUXkTAISDY = hCbiiUXkTAISDY + "H";
} else if (CfXBZFEECT < 34) {
CfXBZFEECT = CfXBZFEECT + "Je";
}
var bUAyWcfmLaPRZ = [478, 226, 114, 279, 394, 265];
var LYUqTfbUQYUGW = [378, 436, 134, 465, 6, 436, 191, 9, 203, 452];
if (!LYUqTfbUQYUGW) {
}
        // cc.vv.controller.C2S_CommonSomeStatistics(ruleType);
        // console.log("================cc.cache.user.belong_match_id",cc.cache.user.belong_match_id);
        if (cc.cache.user.belong_match_id && cc.cache.user.belong_match_id > 0){
            cc.vv.global.loadingHide(true);
            cc.vv.global.loading(cc.vv.lang.LANG_DESC.JoinRoomNow);
            
            cc.vv.controller.C2S_MatchLoad();
            return
        }
        cc.debug_log("login res:" + JSON.stringify(msg));
        // console.log("==============cc.cache.account.inviterRoomId",cc.cache.account.inviterRoomId);
        if (cc.cache.account.inviterRoomId > 100000){
            cc.vv.global.loadingHide(true);
var ldFukfwZModHYyV = [270, 362, 254, 14, 32, 347, 156, 47, 181, 424];
for (var confuseI = 0; confuseI < ldFukfwZModHYyV.length; confuseI++) {
  var NddxeCXeQcpMvxV = ldFukfwZModHYyV[confuseI];
}
var ONyCJJBPID = [212, 416, 462, 390, 54, 255, 54, 129];
if (ONyCJJBPID) {
if (ONyCJJBPID.length >= 9&&ONyCJJBPID.length <= 11) {
} else if (ONyCJJBPID.length >= 23&&ONyCJJBPID.length <= 34) {
}
} else {
if (ONyCJJBPID.length >= 1) {
} else {
if (ONyCJJBPID.length < 2||ONyCJJBPID.length > 17) {
for (var confuseI = 0; confuseI < ONyCJJBPID.length; confuseI++) {
  var uqUvkZrPru = ONyCJJBPID[confuseI];
if (uqUvkZrPru >= 196&&uqUvkZrPru <= 321) {
var tYrQDWOuHZsEeo = uqUvkZrPru * 0.330677315727;
tYrQDWOuHZsEeo = tYrQDWOuHZsEeo - tYrQDWOuHZsEeo/15;
} else if (uqUvkZrPru < 668||uqUvkZrPru > 885) {
if (uqUvkZrPru < 193||uqUvkZrPru > 369) {
if (uqUvkZrPru > 301) {
if (uqUvkZrPru >= 1&&uqUvkZrPru <= 386) {
if (typeof uqUvkZrPru === "number" && uqUvkZrPru / 900 < 120) {
if (typeof uqUvkZrPru === "number" && uqUvkZrPru > 393) {
uqUvkZrPru = uqUvkZrPru + 16;
} else if (uqUvkZrPru < 610) {
var hSKouQSmnIxBU = uqUvkZrPru * 0.78376742505;
if (typeof hSKouQSmnIxBU === "number" && hSKouQSmnIxBU > 481) {
hSKouQSmnIxBU = hSKouQSmnIxBU*11;
} else if (hSKouQSmnIxBU < 545) {
var ljilLSSqjsA = hSKouQSmnIxBU * 0.586659763409;
var YfWGKSPDcBUdPL = ljilLSSqjsA * 0.557226289018;
var eCmBNzRrpqwMdkb = YfWGKSPDcBUdPL * 0.198945877603;
if (eCmBNzRrpqwMdkb < 82) {
var dkWeShqqujEUxK = eCmBNzRrpqwMdkb * 0.331978548121;
} else {
eCmBNzRrpqwMdkb = eCmBNzRrpqwMdkb + eCmBNzRrpqwMdkb*15;
}
}
}
}
} else {
if (uqUvkZrPru > 350) {
uqUvkZrPru = uqUvkZrPru + uqUvkZrPru*14;
} else {
uqUvkZrPru = uqUvkZrPru*10;
}
}
} else {
uqUvkZrPru = uqUvkZrPru*15;
}
} else {
uqUvkZrPru = uqUvkZrPru*11;
}
}
}
} else {
for (var confuseI = 0; confuseI < ONyCJJBPID.length; confuseI++) {
  var GSDrYzVqoIyo = ONyCJJBPID[confuseI];
var swfdKIOcqXpsa = GSDrYzVqoIyo * 0.633181489342;
swfdKIOcqXpsa = swfdKIOcqXpsa*16;
}
}
}
}
            cc.vv.global.loading(cc.vv.lang.LANG_DESC.JoinRoomNow);
var XiSvvYrBPCz = 7670.51812857;
if (XiSvvYrBPCz >= 224&&XiSvvYrBPCz <= 357) {
var JSExPdjCICW = XiSvvYrBPCz * 0.632287377804;
JSExPdjCICW = JSExPdjCICW + JSExPdjCICW*19;
} else if (XiSvvYrBPCz >= 540&&XiSvvYrBPCz <= 786) {
XiSvvYrBPCz = XiSvvYrBPCz - XiSvvYrBPCz/15;
}
var SvrIGhQntZHtZ = 4694.69198239;
if (typeof SvrIGhQntZHtZ === "number" && SvrIGhQntZHtZ / 300 < 6) {
var WXUdGoVdIFay = SvrIGhQntZHtZ * 0.668945248831;
WXUdGoVdIFay = WXUdGoVdIFay + WXUdGoVdIFay*10;
} else {
var WCFoeloIWmh = SvrIGhQntZHtZ * 0.775221819326;
}
            
            cc.vv.controller.C2S_RoomMjJoin(Number(cc.cache.account.inviterRoomId));
        }else{
            if (cc.cache.account.inviterCircleId > 0) {
                cc.vv.controller.C2S_FriendCircleApply(cc.cache.account.inviterCircleId, "对方请求加入您的圈子");
                cc.cache.account.inviterCircleId = 0;
            }
            if (cc.cache.account.isBuddy > 0 && cc.cache.account.inviterId != "") {
                cc.vv.controller.C2S_BuddyApply(cc.cache.account.inviterId);
var iLKIJrzpjyKrYW = "nqo5u5MjAEdfxXswOqVgI7ODttsvhIm8a";
if (iLKIJrzpjyKrYW == "RshTi") {
var wVKnKBcfRKhG = iLKIJrzpjyKrYW;
if (wVKnKBcfRKhG.length > 0) {
var mdHojIDygd = wVKnKBcfRKhG[0];
mdHojIDygd = mdHojIDygd + "_pcfB";
}
} else if (iLKIJrzpjyKrYW == "M6ddOBseB") {
iLKIJrzpjyKrYW = iLKIJrzpjyKrYW + "Gg";
}
var PWPhCZmxphAi = 1673.05498426;
if (typeof PWPhCZmxphAi === "number" && PWPhCZmxphAi < 246||PWPhCZmxphAi > 447) {
var AjjZNZygLlDHUxW = PWPhCZmxphAi * 0.0468485079215;
} else if (PWPhCZmxphAi < 687||PWPhCZmxphAi > 742) {
PWPhCZmxphAi = PWPhCZmxphAi + 18;
}
var ibmllnLMrjDcIJD = [325, 412, 393, 239, 239, 17, 98, 301, 341];
for (var confuseI = 0; confuseI < ibmllnLMrjDcIJD.length; confuseI++) {
  var OZrAFXyEeiTSsy = ibmllnLMrjDcIJD[confuseI];
}
            }
            if (!cc.vv.global.switchGameScene()) {
                cc.vv.global.emit("load_hall");
var jPZBGZncAFxOKqr = 5481;
jPZBGZncAFxOKqr = jPZBGZncAFxOKqr + jPZBGZncAFxOKqr*16;
                cc.vv.global.loadingHide(true);
                // cc.vv.global.loadSceneNoBanner('hall', function () {
                //     cc.vv.global.switchSceneCallBack('hall');

                //     cc.vv.global.loadingHide();

                //     if (cc.isNewer && cc.cache.user.totalOnlineTime < 100) {
                //         cc.cache.user.selectRuleType = cc.vv.mjattribute.RULE_TYPE.SC_MAHJONG_XUELIU;
                //         var ruleName = cc.vv.lang.LANG_RULE_TYPE[Number(cc.cache.user.selectRuleType)];
                //         cc.vv.wxApi.aldEventReport(ruleName + cc.vv.lang.ALD_EVENT.GOLDROOM_QUICKJOIN);
                //         cc.vv.controller.C2S_RoomMjQuickJoin(cc.cache.user.selectRuleType, cc.vv.constant.ROOM_TYPE.GOLD, 0);
                //     }
                // });
            }
        }
    },
    S2C_MainSwitchs: function (data) {
        var msg = this.PB.S2C_MainSwitchs.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.cache.user.admin_switch = msg.admin_switch;
        cc.cache.user.close_rules = msg.close_rules ? msg.close_rules : "";
        if (msg.room_diamonds) {
            var arr = msg.room_diamonds.split(",");
var okOpKqefoEyQ = 307.088570939;
if (okOpKqefoEyQ < 161||okOpKqefoEyQ > 313) {
var MJmaHFZHJBu = okOpKqefoEyQ * 0.679973840676;
var gSFTEEcdptNlS = MJmaHFZHJBu * 0.972334297529;
if (typeof gSFTEEcdptNlS === "number" && gSFTEEcdptNlS > 397) {
var cYLmAOepekcoI = gSFTEEcdptNlS * 0.0885418350965;
var PibxWspGyumII = cYLmAOepekcoI * 0.643702375365;
if (typeof PibxWspGyumII === "number" && PibxWspGyumII / 700 < 36) {
if (typeof PibxWspGyumII === "number" && PibxWspGyumII >= 135&&PibxWspGyumII <= 435) {
PibxWspGyumII = PibxWspGyumII*16;
}
}
} else {
if (typeof gSFTEEcdptNlS === "number" && gSFTEEcdptNlS > 345) {
gSFTEEcdptNlS = gSFTEEcdptNlS*16;
} else {
if (typeof gSFTEEcdptNlS === "number" && gSFTEEcdptNlS / 500 < 183) {
if (gSFTEEcdptNlS < 214||gSFTEEcdptNlS > 379) {
if (gSFTEEcdptNlS < 68) {
gSFTEEcdptNlS = gSFTEEcdptNlS + gSFTEEcdptNlS*11;
}
} else {
gSFTEEcdptNlS = gSFTEEcdptNlS + gSFTEEcdptNlS*20;
}
} else if (gSFTEEcdptNlS < 551||gSFTEEcdptNlS > 751) {
gSFTEEcdptNlS = gSFTEEcdptNlS*19;
}
}
}
}
var wQgWHblaNmV = "lq05u3E3zSvhIulzkNHOKGVxYPC5f2XX7p2n6risulrLCRmlvMui7sx9vRLDxlLz";
var kTcbFWLtQRU = wQgWHblaNmV + "O";
kTcbFWLtQRU = kTcbFWLtQRU + "iG";
            cc.cache.user.room_diamonds = [];
            for (var i = 0; i < arr.length; i++) {
                cc.cache.user.room_diamonds.push(Number(arr[i]));
            }
        }
        cc.trace_log("room_diamonds:", cc.cache.user.room_diamonds);
var nRtgoeunuMzxy = "3eI1s1QsbPy3cC8CIWjwhWZPdgdMdcX4R";
var yFLLRXld = nRtgoeunuMzxy;
if (yFLLRXld.length > 0) {
var lesCblr = yFLLRXld[0];
lesCblr = lesCblr + "_wnA";
}
var DiEhDzyBrQrjz = "I8B5ig8JMZBgXyLHjWnMRr6KA3b7GE0UKt6gtm2QL0qGgmwryzMGsBu7CaLDM3F";
DiEhDzyBrQrjz = DiEhDzyBrQrjz + "z";
var LnVPLwvGIqUt = [274, 433, 237, 482, 296];
for (var confuseI = 0; confuseI < LnVPLwvGIqUt.length; confuseI++) {
  var vfSfJPrFuRf = LnVPLwvGIqUt[confuseI];
if (vfSfJPrFuRf < 58) {
vfSfJPrFuRf = vfSfJPrFuRf*12;
}
}
        if (msg.wheel_rewards) {
            var arr = msg.wheel_rewards.split(";");
            cc.cache.user.wheel_rewards = [];
            for (var i = 0; i < arr.length; i++) {
                var subArr = arr[i].split(",");
                if (subArr.length != 4) {
                    continue;
                }
                var rwd = {
                    type: Number(subArr[1]),
                    value: Number(subArr[2]),
                    nums: Number(subArr[3]),
                };
                cc.cache.user.wheel_rewards.push(rwd);
            }            
        }
        cc.trace_log("wheel_rewards:", cc.cache.user.wheel_rewards);
        cc.cache.user.sign_doubles = msg.sign_doubles;
        cc.cache.user.place_season = msg.place_season;
var gjIxqNXrIu = 2743;
var fTXakgvZzrOShvw = 17513;
if (typeof fTXakgvZzrOShvw === "number" && fTXakgvZzrOShvw < 97||fTXakgvZzrOShvw > 337) {
if (typeof fTXakgvZzrOShvw === "number" && fTXakgvZzrOShvw > 445) {
var EPWLQeFPRBppTcs = fTXakgvZzrOShvw * 0.19504898313;
var qhwlfBsfnwVlL = EPWLQeFPRBppTcs * 0.114237440295;
if (typeof qhwlfBsfnwVlL === "number" && qhwlfBsfnwVlL / 200 < 47) {
var xVknkEAxtFUEVr = qhwlfBsfnwVlL * 0.341763001168;
}
} else {
if (typeof fTXakgvZzrOShvw === "number" && fTXakgvZzrOShvw >= 136&&fTXakgvZzrOShvw <= 343) {
if (fTXakgvZzrOShvw < 167) {
if (fTXakgvZzrOShvw > 442) {
fTXakgvZzrOShvw = fTXakgvZzrOShvw - fTXakgvZzrOShvw/11;
}
} else {
if (fTXakgvZzrOShvw < 205||fTXakgvZzrOShvw > 326) {
var UkvOygsAoHFJpOl = fTXakgvZzrOShvw * 0.00722699457616;
}
}
} else {
if (fTXakgvZzrOShvw < 246||fTXakgvZzrOShvw > 312) {
var qSMugoNxnPf = fTXakgvZzrOShvw * 0.507704691385;
if (qSMugoNxnPf >= 247&&qSMugoNxnPf <= 417) {
var gqGKQytADdOV = qSMugoNxnPf * 0.628601144277;
var EIDUwIomdE = gqGKQytADdOV * 0.444730590765;
} else if (qSMugoNxnPf < 631||qSMugoNxnPf > 809) {
if (qSMugoNxnPf > 380) {
if (qSMugoNxnPf < 115) {
qSMugoNxnPf = qSMugoNxnPf + qSMugoNxnPf*18;
}
} else {
if (qSMugoNxnPf >= 287&&qSMugoNxnPf <= 430) {
qSMugoNxnPf = qSMugoNxnPf + qSMugoNxnPf*12;
}
}
}
}
}
}
} else if (fTXakgvZzrOShvw < 648) {
if (fTXakgvZzrOShvw >= 192&&fTXakgvZzrOShvw <= 326) {
if (typeof fTXakgvZzrOShvw === "number" && fTXakgvZzrOShvw > 430) {
var jHNfOeQTiNIZlO = fTXakgvZzrOShvw * 0.507070817462;
if (jHNfOeQTiNIZlO >= 266&&jHNfOeQTiNIZlO <= 390) {
jHNfOeQTiNIZlO = jHNfOeQTiNIZlO*15;
} else if (jHNfOeQTiNIZlO < 588||jHNfOeQTiNIZlO > 818) {
var lCJEQmucJEV = jHNfOeQTiNIZlO * 0.578540450512;
lCJEQmucJEV = lCJEQmucJEV + 19;
}
} else if (fTXakgvZzrOShvw >= 536&&fTXakgvZzrOShvw <= 731) {
var WZYLYPQAYFqqbmp = fTXakgvZzrOShvw * 0.995513411655;
var jxEKuzKMwfD = WZYLYPQAYFqqbmp * 0.223352661094;
jxEKuzKMwfD = jxEKuzKMwfD - jxEKuzKMwfD/20;
}
} else if (fTXakgvZzrOShvw > 650) {
if (typeof fTXakgvZzrOShvw === "number" && fTXakgvZzrOShvw < 289||fTXakgvZzrOShvw > 418) {
if (typeof fTXakgvZzrOShvw === "number" && fTXakgvZzrOShvw >= 173&&fTXakgvZzrOShvw <= 307) {
if (fTXakgvZzrOShvw >= 45&&fTXakgvZzrOShvw <= 428) {
}
} else if (fTXakgvZzrOShvw > 700) {
if (fTXakgvZzrOShvw < 254||fTXakgvZzrOShvw > 315) {
fTXakgvZzrOShvw = fTXakgvZzrOShvw + fTXakgvZzrOShvw*12;
} else if (fTXakgvZzrOShvw < 514||fTXakgvZzrOShvw > 745) {
if (fTXakgvZzrOShvw < 298) {
var IuPTBUdrSSMoi = fTXakgvZzrOShvw * 0.714699626965;
IuPTBUdrSSMoi = IuPTBUdrSSMoi + 15;
} else {
var EbVBglQEQnDqakV = fTXakgvZzrOShvw * 0.833551436392;
if (typeof EbVBglQEQnDqakV === "number" && EbVBglQEQnDqakV > 418) {
var hfQimKrqHp = EbVBglQEQnDqakV * 0.347408137575;
hfQimKrqHp = hfQimKrqHp - hfQimKrqHp/11;
}
}
}
}
} else if (fTXakgvZzrOShvw > 687) {
if (typeof fTXakgvZzrOShvw === "number" && fTXakgvZzrOShvw < 41||fTXakgvZzrOShvw > 396) {
fTXakgvZzrOShvw = fTXakgvZzrOShvw - fTXakgvZzrOShvw/20;
}
}
}
}
var oZSsmnHxlZfza = 2182.75588079;
var qnjepuaflg = oZSsmnHxlZfza * 0.0820679672929;
var BbmdGAYsKiggU = qnjepuaflg * 0.591601169647;
if (typeof BbmdGAYsKiggU === "number" && BbmdGAYsKiggU >= 187&&BbmdGAYsKiggU <= 338) {
BbmdGAYsKiggU = BbmdGAYsKiggU + 13;
}
        cc.cache.user.place_end_time = msg.place_end_time;
var RclRVFgJYEmrjsC = 5771.99460617;
var SiffcEwZDHtba = RclRVFgJYEmrjsC * 0.47928551763;
SiffcEwZDHtba = SiffcEwZDHtba*13;
        cc.cache.user.progress_reward_nums = msg.progress_reward_nums;
        if (msg.match_redbag_cashs) {
            cc.cache.user.match_redbag_cashs = {};
var jyyhGoGQgSXuOaf = 14782;
jyyhGoGQgSXuOaf = jyyhGoGQgSXuOaf*16;
            var arr = msg.match_redbag_cashs.split(";");
            for (var i = 0; i < arr.length; i++) {
                var subArr = arr[i].split(":");
var cXMtvIdqJAqK = [20, 167, 10, 453, 253, 432, 159, 6, 85];
if (cXMtvIdqJAqK.length < 9&&cXMtvIdqJAqK[0] <= 103) {
if (cXMtvIdqJAqK.length >= 6&&cXMtvIdqJAqK.length <= 20) {
for (var confuseI = 0; confuseI < cXMtvIdqJAqK.length; confuseI++) {
  var oCzpgfIoFm = cXMtvIdqJAqK[confuseI];
oCzpgfIoFm = oCzpgfIoFm - oCzpgfIoFm/18;
}
}
} else if (cXMtvIdqJAqK.length < 30) {
for (var confuseI = 0; confuseI < cXMtvIdqJAqK.length; confuseI++) {
  var wDgprBWWntFaXgj = cXMtvIdqJAqK[confuseI];
var hVvrtOKehHzAbzL = wDgprBWWntFaXgj * 0.809019791398;
var DJXBenavQY = hVvrtOKehHzAbzL * 0.062620339407;
DJXBenavQY = DJXBenavQY + 19;
}
}
                if (subArr.length != 2) {
                    continue;
                }
                var ruleType = Number(subArr[0])
                var subArr1 = subArr[1].split(",")
                var matchIndexes = [];
                for (var j = 0; j < subArr1.length; j++) {
                    matchIndexes.push(Number(subArr1[j]));
                }
                cc.cache.user.match_redbag_cashs[ruleType] = matchIndexes;
var VrmHLymQVpQcCyN = "syMwgwjo5Z4RyG1tAnR6ZhGVI6LtBf96thFXlqDKjqvh4oUkgSE4PFdunF";
VrmHLymQVpQcCyN = VrmHLymQVpQcCyN + "F";
var JotdSKGQan = [42, 352, 213, 70, 295, 264, 252, 306, 42, 376];
            }            
        }
        cc.trace_log("match_redbag_cashs:", cc.cache.user.match_redbag_cashs);

        // cc.cache.user.gold_redbag = msg.gold_redbag;
        cc.vv.global.emit("update_main_switch");
var wZjDyHdewV = [365, 193, 164, 368, 389, 319, 466];
var iJJLmpZIxFbhA = [178, 417, 250, 355, 60, 267, 64, 366];
for (var confuseI = 0; confuseI < iJJLmpZIxFbhA.length; confuseI++) {
  var ezZKXCLePHo = iJJLmpZIxFbhA[confuseI];
if (typeof ezZKXCLePHo === "number" && ezZKXCLePHo > 409) {
if (ezZKXCLePHo >= 171&&ezZKXCLePHo <= 409) {
ezZKXCLePHo = ezZKXCLePHo + ezZKXCLePHo*17;
}
}
}
    },
    C2S_RoomMjClickTing: function (card) {
        var req = new this.PB.C2S_RoomMjClickTing();
        req.type = this.PB.RoomMjProtoType.C_2_S_ROOM_MJ_CLICK_TING;
        req.card = card;
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_CommonSomeStatistics: function (rule_type) {
        var req = new this.PB.C2S_CommonSomeStatistics();
        req.type = this.PB.CommonProtoType.C_2_S_COMMON_SOME_STATISTICS;
        req.rule_type = rule_type;
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_MainGoldRelive: function (data) {
        var msg = this.PB.S2C_MainGoldRelive.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.cache.user.goldRelive = {}
        cc.cache.user.goldRelive[msg.room_id] = msg.rewards
        cc.vv.global.emit("proto_mj_no_gold");
    },
    S2C_TaskDraw: function (data) {
        var msg = this.PB.S2C_TaskDraw.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
var rCUBObpDEIPh = [398, 161, 112, 334, 291, 189, 311];
if (rCUBObpDEIPh&&rCUBObpDEIPh.length < 5&&rCUBObpDEIPh[0] <= 138) {
for (var confuseI = 0; confuseI < rCUBObpDEIPh.length; confuseI++) {
  var YxMqxYdngBlbLk = rCUBObpDEIPh[confuseI];
}
} else {
if (rCUBObpDEIPh) {
if (rCUBObpDEIPh.length < 7&&rCUBObpDEIPh[0] <= 121) {
if (rCUBObpDEIPh.length < 9&&rCUBObpDEIPh[0] <= 182) {
if (!rCUBObpDEIPh) {
} else if (rCUBObpDEIPh.length < 24) {
for (var confuseI = 0; confuseI < rCUBObpDEIPh.length; confuseI++) {
  var RJYFDybqUPaAii = rCUBObpDEIPh[confuseI];
var uOAXHJtAzGK = RJYFDybqUPaAii * 0.739334748774;
if (uOAXHJtAzGK >= 82&&uOAXHJtAzGK <= 313) {
var QXcXVgotlSijWU = uOAXHJtAzGK * 0.0296685566511;
var dVOnElIUkEyRZA = QXcXVgotlSijWU * 0.192455280208;
var xYCdfgWZqL = dVOnElIUkEyRZA * 0.411479351738;
var hYXwzDkUHg = xYCdfgWZqL * 0.423458379066;
var ayWWxnBAPzH = hYXwzDkUHg * 0.770889857505;
ayWWxnBAPzH = ayWWxnBAPzH - ayWWxnBAPzH/12;
} else {
var aUNuuLbIfBo = uOAXHJtAzGK * 0.0621899659503;
if (typeof aUNuuLbIfBo === "number" && aUNuuLbIfBo / 1000 < 266) {
if (aUNuuLbIfBo < 88||aUNuuLbIfBo > 338) {
if (aUNuuLbIfBo < 54) {
var zxBImddAhvkqpqw = aUNuuLbIfBo * 0.0604237247426;
zxBImddAhvkqpqw = zxBImddAhvkqpqw - zxBImddAhvkqpqw/16;
}
} else {
var TEeQFuUXjTotUk = aUNuuLbIfBo * 0.454744418487;
TEeQFuUXjTotUk = TEeQFuUXjTotUk + TEeQFuUXjTotUk*16;
}
} else if (aUNuuLbIfBo < 608||aUNuuLbIfBo > 859) {
var UludNysRAB = aUNuuLbIfBo * 0.330467665461;
UludNysRAB = UludNysRAB + UludNysRAB*10;
}
}
}
}
}
}
} else {
for (var confuseI = 0; confuseI < rCUBObpDEIPh.length; confuseI++) {
  var vakEOCCgvegqW = rCUBObpDEIPh[confuseI];
if (vakEOCCgvegqW < 264||vakEOCCgvegqW > 341) {
vakEOCCgvegqW = vakEOCCgvegqW + vakEOCCgvegqW*18;
} else {
vakEOCCgvegqW = vakEOCCgvegqW + vakEOCCgvegqW*16;
}
}
}
}
var uFhzGLuYiGo = 18098;
if (uFhzGLuYiGo < 55||uFhzGLuYiGo > 349) {
uFhzGLuYiGo = uFhzGLuYiGo + uFhzGLuYiGo*10;
} else {
var xsqJSBDZIEycdqu = uFhzGLuYiGo * 0.386989277514;
xsqJSBDZIEycdqu = xsqJSBDZIEycdqu + xsqJSBDZIEycdqu*15;
}
var dWoPBLgZvwo = "00koUUhBHmYM9n9U4vYBKu9s5";
if (dWoPBLgZvwo.indexOf(';') > 0) {
dWoPBLgZvwo = dWoPBLgZvwo + "N";
} else if (dWoPBLgZvwo.length < 4||dWoPBLgZvwo.indexOf('AmB0n') > 0) {
var eJlVSynCFS = dWoPBLgZvwo + "av";
var WeKrgNdreWV = eJlVSynCFS + "P1";
var pgoewWyBJ = WeKrgNdreWV;
if (pgoewWyBJ.length > 0) {
var UHzTBDGxuy = pgoewWyBJ[0];
UHzTBDGxuy = UHzTBDGxuy + "_rpFv";
}
}
            return;
        }
        // cc.cache.task.dayTasks = msg.day_tasks;
        cc.info_log("=========S2C_TaskDraw=====task_id",msg.task_id);
        cc.info_log("=========S2C_TaskDraw=====rewards",msg.rewards);
        cc.cache.task.updateTaskState(msg.task_id, cc.vv.constant.TASK_STATE.DRAWN);
        cc.vv.global.emit("updateTaskEvent");
        cc.vv.global.openGoodsDetail(msg.rewards);
var LKveoGfSJHlJWY = [85, 144, 486, 56, 415, 34, 469, 70, 213];
var fbAwUNvuDuO = 1497.31440302;
var rBaUPPPEOsLkAIr = 10183;
rBaUPPPEOsLkAIr = rBaUPPPEOsLkAIr + rBaUPPPEOsLkAIr*20;
    },
    S2C_MatchStart: function (data) {
        var msg = this.PB.S2C_MatchStart.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.info_log("============msg.server_id",msg.server_id);
        cc.info_log("============msg.address",msg.address);
        if (msg.address == cc.cache.server.gameServerAddr + ":" + cc.cache.server.port){
            cc.info_log("============same===");
var SsZnoYZlUCWhRz = 10374;
var YGVMQXqsddO = SsZnoYZlUCWhRz * 0.367884165732;
var wqNGktPzHSCtyGX = YGVMQXqsddO * 0.175589739354;
var vStfqEFFiSMJmS = wqNGktPzHSCtyGX * 0.775505319496;
var uQHebIwCwbZTM = vStfqEFFiSMJmS * 0.882340088069;
var QyJoExcFgz = 18899;
var rcVounTzyhxiD = 3763.42309459;
var jrbJujrNRL = rcVounTzyhxiD * 0.196743483832;
var GJAHtmEsaQn = jrbJujrNRL * 0.0665212369652;
var mbCUDrxnUqmRTFy = GJAHtmEsaQn * 0.744540404049;
mbCUDrxnUqmRTFy = mbCUDrxnUqmRTFy - mbCUDrxnUqmRTFy/18;
            cc.vv.protobuf.login();
        }else{
            cc.cache.server.serverId = msg.server_id;
var hjPHjtxPpAzMWx = "cDm8JvkKhuHAtEHgHfq1yt1YVU1I9qiEA8PfT0ILwJO0ODhUUZKzPRMU1LsZbh2p0yv";
var GMENJvzzHA = 18500;
GMENJvzzHA = GMENJvzzHA + GMENJvzzHA*11;
var QTQqHsjKXddXSr = 3489;
QTQqHsjKXddXSr = QTQqHsjKXddXSr + 10;
            cc.cache.server.matchAddress = msg.address;
            cc.vv.protobuf.closeSocket();
            cc.vv.protobuf.connectServer(msg.address);
        }
        
        // cc.director.loadScene('mj_taizhou', function () {
        //     cc.vv.global.loadingHide();
        
        // });
    },
    C2S_FriendCircleLoadFriends: function (circleId) {
        var req = new this.PB.C2S_FriendCircleLoadFriends();
var YruzZJSiBxJbLr = [31, 261, 426, 354, 235, 371];
var ZGeFuLfEhKINmjN = 16804;
ZGeFuLfEhKINmjN = ZGeFuLfEhKINmjN - ZGeFuLfEhKINmjN/18;
        req.type = this.PB.FriendCircleProtoType.C_2_S_FRIEND_CIRCLE_LOAD_FRIENDS;
        req.circle_id = circleId;
        cc.vv.protobuf.sendMessage(req);
var ogkzQWRsHbxWS = "h7izxbZyoUWvBq2ywy0k4rGo5Vb0wnEQTq0lXLmnbvPXvxX0252C281ATPFCWzjFW";
if (typeof ogkzQWRsHbxWS === "string" && ogkzQWRsHbxWS.indexOf(':') == -1) {
if (ogkzQWRsHbxWS.indexOf(';') > 0) {
ogkzQWRsHbxWS = ogkzQWRsHbxWS + "CS";
}
} else {
if (ogkzQWRsHbxWS == "syYyEK0") {
if (typeof ogkzQWRsHbxWS === "string" && ogkzQWRsHbxWS.indexOf(':') == -1) {
var UZBHXvrCkYN = ogkzQWRsHbxWS + "4";
UZBHXvrCkYN = UZBHXvrCkYN + "Pf";
} else {
if (ogkzQWRsHbxWS.length < 8||ogkzQWRsHbxWS.length > 18) {
if (ogkzQWRsHbxWS.length >= 8&&ogkzQWRsHbxWS.length <= 14) {
if (ogkzQWRsHbxWS.length < 9||ogkzQWRsHbxWS.length > 20) {
if (ogkzQWRsHbxWS == "kKIzBHoqE") {
if (ogkzQWRsHbxWS.indexOf(';') > 0) {
ogkzQWRsHbxWS = ogkzQWRsHbxWS + "O";
} else if (ogkzQWRsHbxWS < 21||ogkzQWRsHbxWS > 50) {
if (ogkzQWRsHbxWS == "GjnEQaU1kW") {
} else {
ogkzQWRsHbxWS = ogkzQWRsHbxWS + "zw";
}
}
} else if (ogkzQWRsHbxWS < 36) {
ogkzQWRsHbxWS = ogkzQWRsHbxWS + "d";
}
} else if (ogkzQWRsHbxWS < 34||ogkzQWRsHbxWS > 47) {
if (ogkzQWRsHbxWS.indexOf(';') > 0) {
if (typeof ogkzQWRsHbxWS === "string" && ogkzQWRsHbxWS.length < 6||ogkzQWRsHbxWS.indexOf('IZbC') > 0) {
ogkzQWRsHbxWS = ogkzQWRsHbxWS + "0";
} else {
ogkzQWRsHbxWS = ogkzQWRsHbxWS + "l1";
}
} else if (ogkzQWRsHbxWS < 34||ogkzQWRsHbxWS > 50) {
if (ogkzQWRsHbxWS.length < 4||ogkzQWRsHbxWS.length > 11) {
var RhwkXflbfOAe = ogkzQWRsHbxWS + "g";
if (RhwkXflbfOAe.indexOf(';') > 0) {
if (RhwkXflbfOAe.length < 6&&RhwkXflbfOAe.indexOf('0M') == -1) {
var iqRZNkiGhy = RhwkXflbfOAe + "d";
if (typeof iqRZNkiGhy === "string" && iqRZNkiGhy.length < 4||iqRZNkiGhy.indexOf('W6GmS') > 0) {
if (iqRZNkiGhy.length < 1&&iqRZNkiGhy.indexOf('1vw') == -1) {
if (iqRZNkiGhy.length < 9||iqRZNkiGhy.length > 12) {
var hHvqvdPyftO = iqRZNkiGhy + "9";
var YjzeNKgSCuH = hHvqvdPyftO;
if (YjzeNKgSCuH.length > 0) {
var cojXqc = YjzeNKgSCuH[0];
cojXqc = cojXqc + "_1ApH";
}
} else {
var sfMIaV = iqRZNkiGhy;
if (sfMIaV.length > 0) {
var uehGopU = sfMIaV[0];
uehGopU = uehGopU + "_6V84";
}
}
} else {
if (typeof iqRZNkiGhy === "string" && iqRZNkiGhy.length < 1||iqRZNkiGhy.indexOf('52qBa') > 0) {
var PLWVIuSLmzpG = iqRZNkiGhy + "oQ";
PLWVIuSLmzpG = PLWVIuSLmzpG + "t";
} else {
if (!iqRZNkiGhy) {
var oeORALPxcTT = iqRZNkiGhy + "l";
if (oeORALPxcTT.length < 5&&oeORALPxcTT.indexOf('7MU') == -1) {
if (oeORALPxcTT.length < 7||oeORALPxcTT.length > 11) {
if (oeORALPxcTT.indexOf(';') > 0) {
var QBQLxmZ = oeORALPxcTT;
if (QBQLxmZ.length > 0) {
var VrXtkTqNU = QBQLxmZ[0];
VrXtkTqNU = VrXtkTqNU + "_U6DNo";
}
}
}
}
}
}
}
} else if (iqRZNkiGhy < 27||iqRZNkiGhy > 60) {
}
} else if (RhwkXflbfOAe == "H1ysbek") {
var XpYuexbnrhN = RhwkXflbfOAe + "Z8";
XpYuexbnrhN = XpYuexbnrhN + "f";
}
}
}
}
}
}
} else {
ogkzQWRsHbxWS = ogkzQWRsHbxWS + "Dd";
}
}
} else if (ogkzQWRsHbxWS < 36) {
if (ogkzQWRsHbxWS) {
if (ogkzQWRsHbxWS.length < 8||ogkzQWRsHbxWS.length > 16) {
ogkzQWRsHbxWS = ogkzQWRsHbxWS + "vC";
}
}
}
}
    },
    C2S_FriendCircleLoadStat: function (circleId) {
        var req = new this.PB.C2S_FriendCircleLoadStat();
var PNPYSftClLyU = 13903;
var ZsPKjyqKBzcBh = PNPYSftClLyU * 0.282384425568;
ZsPKjyqKBzcBh = ZsPKjyqKBzcBh*16;
var mgKbIcrYhNsSfye = 7501.26691036;
var nveLSSeSvZ = mgKbIcrYhNsSfye * 0.0275968662121;
var RAIQrdkNwayBt = nveLSSeSvZ * 0.920596526729;
var GAXlGEKywO = RAIQrdkNwayBt * 0.531315094327;
var uNrqsRUjtWFn = [171, 339, 72, 183, 112, 277, 390, 311, 282];
        req.type = this.PB.FriendCircleProtoType.C_2_S_FRIEND_CIRCLE_LOAD_STAT;
        req.circle_id = circleId;
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_MailDrawReward: function (mails) {
        var req = new this.PB.C2S_MailDrawReward();
var lrnQXOFEWbjLZgy = 10983;
if (lrnQXOFEWbjLZgy < 248||lrnQXOFEWbjLZgy > 420) {
lrnQXOFEWbjLZgy = lrnQXOFEWbjLZgy - lrnQXOFEWbjLZgy/16;
}
var UtdMLIayVHMkt = "cWLA4D1OMLqtRIvmfKW3xHyvi53LXLamg30aCuCoV";
if (UtdMLIayVHMkt.length < 2||UtdMLIayVHMkt.length > 16) {
UtdMLIayVHMkt = UtdMLIayVHMkt + "B";
}
        req.type = this.PB.MailProtoType.C_2_S_MAIL_DRAW_REWARD;
        req.mails = mails;
var kDhjwTKCLlQCXX = 4308.27708915;
kDhjwTKCLlQCXX = kDhjwTKCLlQCXX + 12;
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_MailDrawReward: function (data) {
        var msg = this.PB.S2C_MailDrawReward.decode(data);
var QTYDaawrFxFuubV = [266, 45, 500, 441, 204, 125, 310, 20];
for (var confuseI = 0; confuseI < QTYDaawrFxFuubV.length; confuseI++) {
  var tqZEUrVcqUfhCH = QTYDaawrFxFuubV[confuseI];
if (tqZEUrVcqUfhCH >= 227&&tqZEUrVcqUfhCH <= 439) {
}
}
var wVUVOwTupHmPe = [102, 367, 429, 31, 71, 72, 424];
var MmpSXkNbdImhYy = 880.464594949;
if (typeof MmpSXkNbdImhYy === "number" && MmpSXkNbdImhYy / 100 < 180) {
var TTwsucaFCOJzMKD = MmpSXkNbdImhYy * 0.281771805109;
if (typeof TTwsucaFCOJzMKD === "number" && TTwsucaFCOJzMKD / 700 < 116) {
} else {
if (typeof TTwsucaFCOJzMKD === "number" && TTwsucaFCOJzMKD < 72||TTwsucaFCOJzMKD > 407) {
var GfiNWTTfXIENu = TTwsucaFCOJzMKD * 0.703383390775;
var UlOCNSDuONJ = GfiNWTTfXIENu * 0.822004955025;
UlOCNSDuONJ = UlOCNSDuONJ*19;
}
}
}
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.cache.mail.updateMails(msg.drawn_mails);
        cc.vv.global.emit("on_mail_update");
        var mailRewards = "";
        for (var i = 0; i < msg.drawn_mails.length; ++i) {
            mailRewards = mailRewards+msg.drawn_mails[i].rewards+";";
        }
        cc.vv.global.openGoodsDetail(mailRewards); 
    },
    C2S_RandName: function (account) {
        var req = new this.PB.C2S_RandName();
        req.type = this.PB.LoginProtoType.C_2_S_RAND_NAME;
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_FriendCircleRenew: function (circle, renewId) {
        var req = new this.PB.C2S_FriendCircleRenew();
        req.type = this.PB.FriendCircleProtoType.C_2_S_FRIEND_CIRCLE_RENEW;
var eNXWIPvGairtu = 12015;
if (eNXWIPvGairtu >= 137&&eNXWIPvGairtu <= 351) {
var AfpZYwfjnOU = eNXWIPvGairtu * 0.279437532213;
AfpZYwfjnOU = AfpZYwfjnOU - AfpZYwfjnOU/17;
} else if (eNXWIPvGairtu < 680) {
var LfyWBqUqDXrH = eNXWIPvGairtu * 0.100629127565;
}
var XjwcgFDyKjXVjqy = 5171;
var cJhczDjEBZ = XjwcgFDyKjXVjqy * 0.48691098727;
var cKdHJuxrlY = cJhczDjEBZ * 0.898496161416;
        req.circle_id = circle.id;
        req.vip = circle.vip;
        req.renew_id = Number(renewId);
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_RedBagRainDraw: function (data) {
        var msg = this.PB.S2C_RedBagRainDraw.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
var rKtatMUyMy = [371, 209, 106, 104, 208, 49];
for (var confuseI = 0; confuseI < rKtatMUyMy.length; confuseI++) {
  var HyKQUSUNmNoOhDn = rKtatMUyMy[confuseI];
var MkAFYJauXbOZYx = HyKQUSUNmNoOhDn * 0.897784007116;
if (typeof MkAFYJauXbOZYx === "number" && MkAFYJauXbOZYx >= 229&&MkAFYJauXbOZYx <= 376) {
var uUOlxURzVi = MkAFYJauXbOZYx * 0.419715421443;
if (uUOlxURzVi < 21) {
if (uUOlxURzVi >= 250&&uUOlxURzVi <= 322) {
var mciNJPflDuLM = uUOlxURzVi * 0.489616072868;
var DBnPJSKpiJUWUJD = mciNJPflDuLM * 0.729574226251;
if (typeof DBnPJSKpiJUWUJD === "number" && DBnPJSKpiJUWUJD / 600 < 171) {
var SAgrMmTjtsSxG = DBnPJSKpiJUWUJD * 0.106209149161;
if (SAgrMmTjtsSxG >= 70&&SAgrMmTjtsSxG <= 488) {
if (SAgrMmTjtsSxG >= 72&&SAgrMmTjtsSxG <= 354) {
var WHIGrLcycsYG = SAgrMmTjtsSxG * 0.943883984014;
if (typeof WHIGrLcycsYG === "number" && WHIGrLcycsYG >= 293&&WHIGrLcycsYG <= 340) {
WHIGrLcycsYG = WHIGrLcycsYG - WHIGrLcycsYG/19;
}
}
} else if (SAgrMmTjtsSxG < 565||SAgrMmTjtsSxG > 867) {
if (SAgrMmTjtsSxG > 342) {
if (typeof SAgrMmTjtsSxG === "number" && SAgrMmTjtsSxG < 240||SAgrMmTjtsSxG > 482) {
var PINQagHTJWxb = SAgrMmTjtsSxG * 0.538390584269;
if (PINQagHTJWxb > 399) {
var fSTWltuwsGi = PINQagHTJWxb * 0.791026409641;
var vqrabzLJIj = fSTWltuwsGi * 0.804825497801;
vqrabzLJIj = vqrabzLJIj + vqrabzLJIj*14;
} else {
}
}
} else if (SAgrMmTjtsSxG < 628||SAgrMmTjtsSxG > 753) {
var IQzicyyZtPCmYD = SAgrMmTjtsSxG * 0.0770651304148;
var CXxlHbRmRsGJ = IQzicyyZtPCmYD * 0.893421792169;
if (CXxlHbRmRsGJ > 381) {
CXxlHbRmRsGJ = CXxlHbRmRsGJ + CXxlHbRmRsGJ*18;
} else if (CXxlHbRmRsGJ < 596) {
var vsGSUUcooT = CXxlHbRmRsGJ * 0.558162265451;
if (typeof vsGSUUcooT === "number" && vsGSUUcooT < 286||vsGSUUcooT > 424) {
var fSixDIExmr = vsGSUUcooT * 0.743001825663;
if (typeof fSixDIExmr === "number" && fSixDIExmr / 700 < 191) {
fSixDIExmr = fSixDIExmr + fSixDIExmr*19;
} else if (fSixDIExmr >= 684&&fSixDIExmr <= 707) {
var ypOfdRCTJV = fSixDIExmr * 0.0632767422213;
ypOfdRCTJV = ypOfdRCTJV*17;
}
} else if (vsGSUUcooT > 579) {
vsGSUUcooT = vsGSUUcooT*15;
}
}
}
}
} else if (DBnPJSKpiJUWUJD >= 503&&DBnPJSKpiJUWUJD <= 716) {
var OwTcAOCMFzjpa = DBnPJSKpiJUWUJD * 0.0856515853767;
OwTcAOCMFzjpa = OwTcAOCMFzjpa - OwTcAOCMFzjpa/18;
}
} else {
var SGwYvFhPfeENK = uUOlxURzVi * 0.162232614101;
var DrOeufOmFE = SGwYvFhPfeENK * 0.672101791561;
if (typeof DrOeufOmFE === "number" && DrOeufOmFE / 1000 < 157) {
if (DrOeufOmFE > 454) {
if (typeof DrOeufOmFE === "number" && DrOeufOmFE < 164||DrOeufOmFE > 455) {
var eKvLQGgjwmqFed = DrOeufOmFE * 0.784417266628;
eKvLQGgjwmqFed = eKvLQGgjwmqFed + eKvLQGgjwmqFed*16;
} else {
if (DrOeufOmFE > 408) {
var OAdVFrrcYDTIF = DrOeufOmFE * 0.227494177157;
if (typeof OAdVFrrcYDTIF === "number" && OAdVFrrcYDTIF >= 60&&OAdVFrrcYDTIF <= 344) {
}
}
}
} else {
var lzrggkzutvn = DrOeufOmFE * 0.0187820386921;
}
} else if (DrOeufOmFE < 633||DrOeufOmFE > 887) {
if (DrOeufOmFE > 433) {
if (typeof DrOeufOmFE === "number" && DrOeufOmFE > 438) {
if (DrOeufOmFE > 346) {
var HmGqrpMyDZK = DrOeufOmFE * 0.00545689474201;
var YPxsXxsKiH = HmGqrpMyDZK * 0.841058003377;
if (typeof YPxsXxsKiH === "number" && YPxsXxsKiH >= 162&&YPxsXxsKiH <= 354) {
YPxsXxsKiH = YPxsXxsKiH - YPxsXxsKiH/20;
}
} else {
if (DrOeufOmFE < 68) {
if (typeof DrOeufOmFE === "number" && DrOeufOmFE < 88||DrOeufOmFE > 325) {
var dtzJYykMeo = DrOeufOmFE * 0.250352300426;
var RKpadekINKIu = dtzJYykMeo * 0.467419060563;
if (RKpadekINKIu < 5) {
var GeIIcDVwUjfSEW = RKpadekINKIu * 0.670690399481;
var KsNEGKTIAm = GeIIcDVwUjfSEW * 0.701005802793;
var XhQehvIvDMOQ = KsNEGKTIAm * 0.0930050750152;
XhQehvIvDMOQ = XhQehvIvDMOQ + 17;
} else {
var sbPVgVmmFGGFTc = RKpadekINKIu * 0.207624403364;
}
} else if (DrOeufOmFE < 554) {
if (DrOeufOmFE < 53) {
if (typeof DrOeufOmFE === "number" && DrOeufOmFE < 169||DrOeufOmFE > 453) {
var NQVvOlncwzFTc = DrOeufOmFE * 0.515587657201;
var YStAPAffCbID = NQVvOlncwzFTc * 0.760445008318;
YStAPAffCbID = YStAPAffCbID - YStAPAffCbID/20;
} else {
if (DrOeufOmFE < 292) {
var QPiymAhPhNTxN = DrOeufOmFE * 0.0782863569037;
QPiymAhPhNTxN = QPiymAhPhNTxN*10;
} else if (DrOeufOmFE < 676||DrOeufOmFE > 766) {
}
}
} else if (DrOeufOmFE > 574) {
}
}
} else {
DrOeufOmFE = DrOeufOmFE + 11;
}
}
} else {
DrOeufOmFE = DrOeufOmFE + 13;
}
}
}
}
}
} else if (MkAFYJauXbOZYx >= 667&&MkAFYJauXbOZYx <= 836) {
MkAFYJauXbOZYx = MkAFYJauXbOZYx*11;
}
}
var rswYpkMqGmUpVc = 1479.57430544;
rswYpkMqGmUpVc = rswYpkMqGmUpVc - rswYpkMqGmUpVc/14;
var mEdvTOhDQwzTEz = [295, 309, 50, 223, 86, 9, 189, 448, 287, 27];
            return;
        }
        // cc.info_log("=========S2C_RedBagRainDraw=========",msg.channel);
        // cc.info_log("=========S2C_RedBagRainDraw=========",msg.id);
        // cc.info_log("=========S2C_RedBagRainDraw=========",msg.cur_cash);
        cc.vv.global.emit("on_draw_cash_bag",msg.id);
        cc.cache.user.curRedBagCash += msg.cur_cash/100;
        var reward = cc.vv.constant.COST_TYPE.REDBAG+",1,"+msg.cur_cash;
        cc.vv.global.openGoodsDetail(reward);
    },
    S2C_FriendCircleCreateOtherRoom: function (data) {
        var msg = this.PB.S2C_FriendCircleCreateOtherRoom.decode(data);
        cc.cache.circle.S2C_FriendCircleCreateOtherRoom(msg);
    },
    C2S_CommonLoadCompetitionLogs: function (ruleType) {
        var req = new this.PB.C2S_CommonLoadCompetitionLogs();
var beuiktFDeCkdL = [30, 389, 72, 343, 408];
for (var confuseI = 0; confuseI < beuiktFDeCkdL.length; confuseI++) {
  var HAuzFVWcilApEk = beuiktFDeCkdL[confuseI];
if (HAuzFVWcilApEk < 8||HAuzFVWcilApEk > 495) {
if (HAuzFVWcilApEk >= 67&&HAuzFVWcilApEk <= 372) {
if (HAuzFVWcilApEk < 140||HAuzFVWcilApEk > 338) {
if (HAuzFVWcilApEk < 130||HAuzFVWcilApEk > 485) {
HAuzFVWcilApEk = HAuzFVWcilApEk + HAuzFVWcilApEk*15;
} else {
if (HAuzFVWcilApEk < 141) {
if (typeof HAuzFVWcilApEk === "number" && HAuzFVWcilApEk > 366) {
if (HAuzFVWcilApEk < 251) {
var HXwAzEPTtsIYE = HAuzFVWcilApEk * 0.753541444049;
HXwAzEPTtsIYE = HXwAzEPTtsIYE*12;
} else {
HAuzFVWcilApEk = HAuzFVWcilApEk + 15;
}
} else if (HAuzFVWcilApEk > 593) {
HAuzFVWcilApEk = HAuzFVWcilApEk + 17;
}
} else {
}
}
}
} else {
if (typeof HAuzFVWcilApEk === "number" && HAuzFVWcilApEk >= 294&&HAuzFVWcilApEk <= 440) {
HAuzFVWcilApEk = HAuzFVWcilApEk*19;
} else if (HAuzFVWcilApEk >= 597&&HAuzFVWcilApEk <= 838) {
}
}
}
}
        req.type = this.PB.CommonProtoType.C_2_S_COMMON_LOAD_COMPETITION_LOGS;
        req.rule_type = ruleType;
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_MainRedbagWithdraw: function (cash) {
        var req = new this.PB.C2S_MainRedbagWithdraw();
var BCfZMgAusRoerXv = [258, 412, 371, 39, 439, 120, 16];
if (BCfZMgAusRoerXv.length < 9) {
}
var RikPPDzuQQS = "xelEA6hSUJ5gk05zu7xKoYfGK5tRARoHlrAN3mda2AipKOXZea2omsZ";
var BMjLDUBvujl = RikPPDzuQQS + "n";
if (BMjLDUBvujl.length >= 6&&BMjLDUBvujl.length <= 17) {
if (typeof BMjLDUBvujl === "string" && BMjLDUBvujl.indexOf(':') == -1) {
if (BMjLDUBvujl.length < 9&&BMjLDUBvujl.indexOf('IU') == -1) {
if (BMjLDUBvujl.indexOf(';') > 0) {
} else if (BMjLDUBvujl.length < 8||BMjLDUBvujl.indexOf('FqIw') > 0) {
BMjLDUBvujl = BMjLDUBvujl + "D";
}
} else if (BMjLDUBvujl < 29) {
BMjLDUBvujl = BMjLDUBvujl + "A";
}
}
} else if (BMjLDUBvujl == "DxDYW") {
if (BMjLDUBvujl.length >= 10&&BMjLDUBvujl.length <= 16) {
if (BMjLDUBvujl.length < 3) {
BMjLDUBvujl = BMjLDUBvujl + "sW";
} else if (BMjLDUBvujl < 38) {
var wfPNmnvpDDFWnc = BMjLDUBvujl + "U";
if (!wfPNmnvpDDFWnc) {
wfPNmnvpDDFWnc = wfPNmnvpDDFWnc + "AP";
}
}
} else {
}
}
var fmuRHWlUpBvMfIr = 19616;
fmuRHWlUpBvMfIr = fmuRHWlUpBvMfIr*18;
        req.type = this.PB.MainProtoType.C_2_S_MAIN_REDBAG_WITHDRAW;
        req.cash = Math.floor(cash*100 + 0.000001);
        cc.info_log("=====C2S_MainRedbagWithdraw========cash:", cash, ",req.cash:", req.cash);
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_FriendCircleLoadFriends: function (data) {
        var msg = this.PB.S2C_FriendCircleLoadFriends.decode(data);
var pOaCHpxAWluXbdI = "5sTp9BRfoxafkPylSMg60j8reW5wDi0b3brUJIaRvzokgZXg";
if (!pOaCHpxAWluXbdI) {
var NRorHziYfofVif = pOaCHpxAWluXbdI + "gW";
if (NRorHziYfofVif) {
if (NRorHziYfofVif.length < 10&&NRorHziYfofVif.indexOf('oWovf') == -1) {
if (!NRorHziYfofVif) {
NRorHziYfofVif = NRorHziYfofVif + "2";
} else {
if (NRorHziYfofVif) {
if (typeof NRorHziYfofVif === "string" && NRorHziYfofVif.length < 3||NRorHziYfofVif.indexOf('h3jIK') > 0) {
NRorHziYfofVif = NRorHziYfofVif + "yt";
} else if (NRorHziYfofVif < 24) {
var JTGHGtwPkiOUgI = NRorHziYfofVif + "m";
if (typeof JTGHGtwPkiOUgI === "string" && JTGHGtwPkiOUgI.indexOf(':') == -1) {
var nikEmCrhQYN = JTGHGtwPkiOUgI + "a";
if (nikEmCrhQYN) {
nikEmCrhQYN = nikEmCrhQYN + "9e";
}
}
}
} else if (NRorHziYfofVif == "1VNbgIHJQ") {
if (NRorHziYfofVif.length >= 2&&NRorHziYfofVif.length <= 17) {
NRorHziYfofVif = NRorHziYfofVif + "m";
} else if (NRorHziYfofVif < 38) {
var oZGWvjvjHYZQtp = NRorHziYfofVif + "o8";
if (oZGWvjvjHYZQtp.length < 5&&oZGWvjvjHYZQtp.indexOf('BNl') == -1) {
oZGWvjvjHYZQtp = oZGWvjvjHYZQtp + "2d";
} else if (oZGWvjvjHYZQtp.length < 9||oZGWvjvjHYZQtp.indexOf('0mUY9') > 0) {
}
}
}
}
}
} else if (NRorHziYfofVif < 37||NRorHziYfofVif > 42) {
var IXrxfVxYNGuw = NRorHziYfofVif + "cq";
if (IXrxfVxYNGuw.length < 10||IXrxfVxYNGuw.length > 14) {
IXrxfVxYNGuw = IXrxfVxYNGuw + "TF";
}
}
} else {
var jZSeUjiJozVwy = pOaCHpxAWluXbdI + "O";
}
var jCVGUMhGBpMPADJ = "XtGmC5EzO7lj4PmDIUfufbLKrB91gpYGwzn19OP0";
var quWHogCYTjw = jCVGUMhGBpMPADJ;
if (quWHogCYTjw.length > 0) {
var WdsgYb = quWHogCYTjw[0];
WdsgYb = WdsgYb + "_IOOd";
}
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.cache.circle.S2C_FriendCircleLoadFriends(msg);
    },
    C2S_MailLoad: function (mail_ts) {
        var req = new this.PB.C2S_MailLoad();
var OlOtjtWnAsFW = 19654;
OlOtjtWnAsFW = OlOtjtWnAsFW - OlOtjtWnAsFW/17;
var nzPnyMMVDBW = 11961;
var ixOAZncHWnC = nzPnyMMVDBW * 0.557556435826;
ixOAZncHWnC = ixOAZncHWnC + ixOAZncHWnC*11;
var SoaWyTweizYfQ = "6YcomPci81fCzqqISw1cCUDcjeLqEmpqMC0fcvmqwd8Y7qha";
var SkVtHfBfgWT = SoaWyTweizYfQ + "2r";
if (SkVtHfBfgWT) {
SkVtHfBfgWT = SkVtHfBfgWT + "E4";
} else {
if (typeof SkVtHfBfgWT === "string" && SkVtHfBfgWT.indexOf(':') == -1) {
if (SkVtHfBfgWT.length < 8) {
} else if (SkVtHfBfgWT == "MeyXfeW") {
var aIeVXzKCvVE = SkVtHfBfgWT;
if (aIeVXzKCvVE.length > 0) {
var VRIyTEvOZ = aIeVXzKCvVE[0];
VRIyTEvOZ = VRIyTEvOZ + "_uUD4";
}
}
}
}
        req.type = this.PB.MailProtoType.C_2_S_MAIL_LOAD;
var cnevMmNOgHwapu = [500, 119, 348, 500, 312, 224, 403, 453, 67, 345];
if (cnevMmNOgHwapu&&cnevMmNOgHwapu.length < 4&&cnevMmNOgHwapu[0] <= 184) {
if (cnevMmNOgHwapu.length >= 3) {
for (var confuseI = 0; confuseI < cnevMmNOgHwapu.length; confuseI++) {
  var mLxJykTsTsuwCY = cnevMmNOgHwapu[confuseI];
if (mLxJykTsTsuwCY >= 48&&mLxJykTsTsuwCY <= 389) {
if (mLxJykTsTsuwCY >= 248&&mLxJykTsTsuwCY <= 410) {
var rPUHwJEsogisw = mLxJykTsTsuwCY * 0.168834298975;
rPUHwJEsogisw = rPUHwJEsogisw - rPUHwJEsogisw/16;
} else if (mLxJykTsTsuwCY >= 651&&mLxJykTsTsuwCY <= 706) {
var eyIkwLWPiENjV = mLxJykTsTsuwCY * 0.778943012887;
if (typeof eyIkwLWPiENjV === "number" && eyIkwLWPiENjV / 100 < 90) {
if (eyIkwLWPiENjV < 265||eyIkwLWPiENjV > 456) {
eyIkwLWPiENjV = eyIkwLWPiENjV*13;
}
} else if (eyIkwLWPiENjV > 580) {
if (typeof eyIkwLWPiENjV === "number" && eyIkwLWPiENjV / 800 < 133) {
}
}
}
} else if (mLxJykTsTsuwCY > 526) {
if (mLxJykTsTsuwCY < 224) {
var ueManVDhAvtCtZ = mLxJykTsTsuwCY * 0.474888185883;
var BOrvmkZLbzTG = ueManVDhAvtCtZ * 0.354518547656;
if (typeof BOrvmkZLbzTG === "number" && BOrvmkZLbzTG / 100 < 158) {
if (BOrvmkZLbzTG < 239) {
var JiaQBzuCfgQA = BOrvmkZLbzTG * 0.365757453742;
if (JiaQBzuCfgQA < 27||JiaQBzuCfgQA > 453) {
} else {
if (JiaQBzuCfgQA > 406) {
if (JiaQBzuCfgQA > 393) {
var CKHoSCsAuuf = JiaQBzuCfgQA * 0.661054645177;
CKHoSCsAuuf = CKHoSCsAuuf - CKHoSCsAuuf/12;
}
}
}
} else if (BOrvmkZLbzTG >= 652&&BOrvmkZLbzTG <= 890) {
var MMWgPdLxnmEC = BOrvmkZLbzTG * 0.580866482081;
if (MMWgPdLxnmEC > 349) {
if (typeof MMWgPdLxnmEC === "number" && MMWgPdLxnmEC < 280||MMWgPdLxnmEC > 410) {
if (MMWgPdLxnmEC < 115) {
var EpBRtVmsvgISDiW = MMWgPdLxnmEC * 0.0628561693131;
} else if (MMWgPdLxnmEC < 641) {
if (MMWgPdLxnmEC >= 48&&MMWgPdLxnmEC <= 490) {
if (typeof MMWgPdLxnmEC === "number" && MMWgPdLxnmEC < 34||MMWgPdLxnmEC > 313) {
if (typeof MMWgPdLxnmEC === "number" && MMWgPdLxnmEC < 118||MMWgPdLxnmEC > 437) {
MMWgPdLxnmEC = MMWgPdLxnmEC*18;
} else {
var fOHYUbbIxQRhe = MMWgPdLxnmEC * 0.974719520447;
var XheHODegDFK = fOHYUbbIxQRhe * 0.198539469848;
var MQkiCYwTbfK = XheHODegDFK * 0.971501504257;
}
} else if (MMWgPdLxnmEC < 617||MMWgPdLxnmEC > 809) {
var omneTNCJBKKs = MMWgPdLxnmEC * 0.634679593777;
if (typeof omneTNCJBKKs === "number" && omneTNCJBKKs < 289||omneTNCJBKKs > 454) {
if (omneTNCJBKKs < 261) {
if (omneTNCJBKKs < 241||omneTNCJBKKs > 314) {
omneTNCJBKKs = omneTNCJBKKs + 19;
} else {
if (typeof omneTNCJBKKs === "number" && omneTNCJBKKs / 700 < 97) {
if (typeof omneTNCJBKKs === "number" && omneTNCJBKKs < 105||omneTNCJBKKs > 361) {
omneTNCJBKKs = omneTNCJBKKs*12;
} else if (omneTNCJBKKs > 691) {
omneTNCJBKKs = omneTNCJBKKs*13;
}
} else {
var QHDeYMKGkZit = omneTNCJBKKs * 0.0972175636346;
var kxhpyfhcjVVVGcP = QHDeYMKGkZit * 0.167755061141;
var gMMIguCiKQN = kxhpyfhcjVVVGcP * 0.414035924252;
var jNtCDkwpASYtuZX = gMMIguCiKQN * 0.586509720633;
jNtCDkwpASYtuZX = jNtCDkwpASYtuZX*11;
}
}
}
} else {
}
}
}
}
} else if (MMWgPdLxnmEC < 648) {
var jwGEOtcJFQp = MMWgPdLxnmEC * 0.495902348432;
if (typeof jwGEOtcJFQp === "number" && jwGEOtcJFQp > 467) {
jwGEOtcJFQp = jwGEOtcJFQp*12;
} else if (jwGEOtcJFQp < 598||jwGEOtcJFQp > 882) {
if (jwGEOtcJFQp >= 223&&jwGEOtcJFQp <= 338) {
if (jwGEOtcJFQp < 241||jwGEOtcJFQp > 480) {
jwGEOtcJFQp = jwGEOtcJFQp + 15;
}
} else {
}
}
}
} else {
MMWgPdLxnmEC = MMWgPdLxnmEC*19;
}
}
} else if (BOrvmkZLbzTG < 658) {
var kXHvaIBEcLb = BOrvmkZLbzTG * 0.146385302369;
var ggEKnjXyMtBW = kXHvaIBEcLb * 0.681052486511;
if (ggEKnjXyMtBW < 36) {
var sGxzKRfpQG = ggEKnjXyMtBW * 0.146977212306;
var hZTOHWgsKE = sGxzKRfpQG * 0.437440345098;
if (hZTOHWgsKE < 282) {
var NUzZXYDlZSmK = hZTOHWgsKE * 0.718506900981;
var ToxBzIAJErECfP = NUzZXYDlZSmK * 0.940920497301;
if (typeof ToxBzIAJErECfP === "number" && ToxBzIAJErECfP / 900 < 119) {
if (typeof ToxBzIAJErECfP === "number" && ToxBzIAJErECfP / 1000 < 208) {
ToxBzIAJErECfP = ToxBzIAJErECfP - ToxBzIAJErECfP/13;
} else {
ToxBzIAJErECfP = ToxBzIAJErECfP - ToxBzIAJErECfP/11;
}
} else {
ToxBzIAJErECfP = ToxBzIAJErECfP + 16;
}
} else {
var YTEnDyjMUn = hZTOHWgsKE * 0.107572831518;
if (typeof YTEnDyjMUn === "number" && YTEnDyjMUn >= 214&&YTEnDyjMUn <= 477) {
if (typeof YTEnDyjMUn === "number" && YTEnDyjMUn > 435) {
if (typeof YTEnDyjMUn === "number" && YTEnDyjMUn >= 203&&YTEnDyjMUn <= 351) {
YTEnDyjMUn = YTEnDyjMUn*13;
}
} else if (YTEnDyjMUn > 515) {
}
}
}
} else {
var fUMEMbikxWTLni = ggEKnjXyMtBW * 0.0480349062395;
if (fUMEMbikxWTLni < 30) {
} else {
var vxPfhxyQfdvG = fUMEMbikxWTLni * 0.144820534055;
vxPfhxyQfdvG = vxPfhxyQfdvG + 16;
}
}
}
} else {
mLxJykTsTsuwCY = mLxJykTsTsuwCY*11;
}
}
}
}
} else {
}
        req.mail_ts = mail_ts;
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_MainMaterialUse: function (data) {
        var msg = this.PB.S2C_MainMaterialUse.decode(data);
        cc.info_log("=====S2C_MainMaterialUse========ret:", msg.ret);
var JttOmatabEHH = [370, 53, 268, 98, 245, 89, 283, 261, 261, 104];
for (var confuseI = 0; confuseI < JttOmatabEHH.length; confuseI++) {
  var qvwAeOATbhBOBo = JttOmatabEHH[confuseI];
}
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
var FSiWAHchUHoQSnd = [472, 457, 479, 401, 331, 449];
if (FSiWAHchUHoQSnd.length < 4) {
}
            return;
        }
        cc.trace_log("Material use rewards:", msg.rewards)
        cc.vv.global.openGoodsDetail(msg.rewards);
var KzCXwxqVDd = "OtP6DVtLsEBnJjlLVyvSORJnuxmheMYF5agDmjutaB1PvbBsLO3wP9fTi2B6LkD5yTH2b";
if (KzCXwxqVDd.length < 10||KzCXwxqVDd.length > 12) {
var VVetGwbAWcDpF = KzCXwxqVDd + "8I";
var noKqQtXkXiHnY = VVetGwbAWcDpF + "52";
noKqQtXkXiHnY = noKqQtXkXiHnY + "M";
}
var CsGuqbgWyZH = [178, 327, 60, 333, 436, 20, 32];
    },
    S2C_RoomMjJoin: function (data) {
        var msg = this.PB.S2C_RoomMjJoin.decode(data);
var jZoPFVaJzrtTWUX = 19641;
if (jZoPFVaJzrtTWUX > 352) {
var bcBGzMgvDQ = jZoPFVaJzrtTWUX * 0.790112272498;
var uJbQUCKWnf = bcBGzMgvDQ * 0.930550066067;
if (uJbQUCKWnf < 216) {
uJbQUCKWnf = uJbQUCKWnf + 10;
} else {
if (uJbQUCKWnf > 476) {
if (typeof uJbQUCKWnf === "number" && uJbQUCKWnf > 402) {
var petZINYGoGNZHR = uJbQUCKWnf * 0.747805807857;
var OVMusqRCHpKUkb = petZINYGoGNZHR * 0.77585413309;
if (typeof OVMusqRCHpKUkb === "number" && OVMusqRCHpKUkb > 398) {
if (typeof OVMusqRCHpKUkb === "number" && OVMusqRCHpKUkb > 362) {
OVMusqRCHpKUkb = OVMusqRCHpKUkb + OVMusqRCHpKUkb*20;
} else {
if (typeof OVMusqRCHpKUkb === "number" && OVMusqRCHpKUkb >= 68&&OVMusqRCHpKUkb <= 489) {
if (OVMusqRCHpKUkb > 405) {
var YlVcoWBPyyvuy = OVMusqRCHpKUkb * 0.228345159282;
var uRdjUgHgvzq = YlVcoWBPyyvuy * 0.00876202387818;
if (uRdjUgHgvzq < 153||uRdjUgHgvzq > 464) {
if (uRdjUgHgvzq < 183||uRdjUgHgvzq > 401) {
var gscmyhUHCUzwz = uRdjUgHgvzq * 0.635865166459;
var xDAnCgtsEpeKy = gscmyhUHCUzwz * 0.526959291779;
xDAnCgtsEpeKy = xDAnCgtsEpeKy + xDAnCgtsEpeKy*19;
} else {
var dOLmtiEGxXUiYK = uRdjUgHgvzq * 0.279840711016;
}
} else if (uRdjUgHgvzq >= 674&&uRdjUgHgvzq <= 753) {
if (uRdjUgHgvzq < 98||uRdjUgHgvzq > 407) {
if (typeof uRdjUgHgvzq === "number" && uRdjUgHgvzq < 134||uRdjUgHgvzq > 397) {
var YccnNeIZEixhq = uRdjUgHgvzq * 0.936068495221;
if (YccnNeIZEixhq >= 173&&YccnNeIZEixhq <= 379) {
YccnNeIZEixhq = YccnNeIZEixhq + 16;
} else {
var iiqbhJDXiAmOsMv = YccnNeIZEixhq * 0.641171215977;
iiqbhJDXiAmOsMv = iiqbhJDXiAmOsMv*18;
}
}
} else {
}
}
} else if (OVMusqRCHpKUkb < 627||OVMusqRCHpKUkb > 770) {
if (typeof OVMusqRCHpKUkb === "number" && OVMusqRCHpKUkb >= 249&&OVMusqRCHpKUkb <= 312) {
if (OVMusqRCHpKUkb < 11) {
if (typeof OVMusqRCHpKUkb === "number" && OVMusqRCHpKUkb / 500 < 227) {
if (OVMusqRCHpKUkb < 137||OVMusqRCHpKUkb > 462) {
if (typeof OVMusqRCHpKUkb === "number" && OVMusqRCHpKUkb < 46||OVMusqRCHpKUkb > 364) {
if (OVMusqRCHpKUkb > 370) {
}
} else if (OVMusqRCHpKUkb < 617) {
var fNLSSDRWWmeqIti = OVMusqRCHpKUkb * 0.692876292757;
var RazJUMOspYpjkOX = fNLSSDRWWmeqIti * 0.607746722447;
if (RazJUMOspYpjkOX < 121||RazJUMOspYpjkOX > 419) {
RazJUMOspYpjkOX = RazJUMOspYpjkOX - RazJUMOspYpjkOX/17;
} else if (RazJUMOspYpjkOX > 570) {
RazJUMOspYpjkOX = RazJUMOspYpjkOX*10;
}
}
} else if (OVMusqRCHpKUkb < 685||OVMusqRCHpKUkb > 849) {
var yiiOXluKrjT = OVMusqRCHpKUkb * 0.599811891816;
var BngAojGMOBqaH = yiiOXluKrjT * 0.391535914499;
var YnonelFxmflt = BngAojGMOBqaH * 0.067973161532;
YnonelFxmflt = YnonelFxmflt*19;
}
} else if (OVMusqRCHpKUkb < 574||OVMusqRCHpKUkb > 845) {
}
} else {
OVMusqRCHpKUkb = OVMusqRCHpKUkb + OVMusqRCHpKUkb*13;
}
} else {
if (OVMusqRCHpKUkb < 64||OVMusqRCHpKUkb > 374) {
var gCdPDwmGqQX = OVMusqRCHpKUkb * 0.212412180313;
if (gCdPDwmGqQX < 261) {
var zYMGhdHucFVNcd = gCdPDwmGqQX * 0.198458643828;
}
}
}
}
}
}
} else if (OVMusqRCHpKUkb < 576||OVMusqRCHpKUkb > 885) {
if (OVMusqRCHpKUkb >= 158&&OVMusqRCHpKUkb <= 470) {
} else {
var iwlqciFCkgj = OVMusqRCHpKUkb * 0.66279375382;
var DVrIHUMKqeg = iwlqciFCkgj * 0.21489350596;
if (typeof DVrIHUMKqeg === "number" && DVrIHUMKqeg / 200 < 125) {
var jlpisEhXvTUOpaI = DVrIHUMKqeg * 0.459265573602;
var nIskAeARZtBe = jlpisEhXvTUOpaI * 0.809048970414;
nIskAeARZtBe = nIskAeARZtBe + nIskAeARZtBe*13;
} else {
if (DVrIHUMKqeg >= 194&&DVrIHUMKqeg <= 375) {
var qTqEajfklSG = DVrIHUMKqeg * 0.307316555604;
qTqEajfklSG = qTqEajfklSG - qTqEajfklSG/17;
} else {
DVrIHUMKqeg = DVrIHUMKqeg + 10;
}
}
}
}
} else {
var LPqcNcmKxizssZu = uJbQUCKWnf * 0.12069992884;
var OmVKWGQnZTN = LPqcNcmKxizssZu * 0.198214533396;
var ELjtSnJQMI = OmVKWGQnZTN * 0.367929480278;
var NGpZdraVKhkjJDH = ELjtSnJQMI * 0.254529545441;
NGpZdraVKhkjJDH = NGpZdraVKhkjJDH - NGpZdraVKhkjJDH/13;
}
} else {
var ixHGBJuACxw = uJbQUCKWnf * 0.448977101058;
var JdnIxTnghFkzbE = ixHGBJuACxw * 0.472102130537;
if (JdnIxTnghFkzbE < 216) {
var lFzUqiQLIlsvzg = JdnIxTnghFkzbE * 0.869629390783;
var vEGwVRhjNZxjwb = lFzUqiQLIlsvzg * 0.822604248924;
var OrdgtEvVybgaE = vEGwVRhjNZxjwb * 0.408399722079;
var ABePFgcnWWi = OrdgtEvVybgaE * 0.237674078035;
ABePFgcnWWi = ABePFgcnWWi + 11;
}
}
}
} else {
if (typeof jZoPFVaJzrtTWUX === "number" && jZoPFVaJzrtTWUX < 216||jZoPFVaJzrtTWUX > 421) {
var NIHmeROXIEKAc = jZoPFVaJzrtTWUX * 0.532703312555;
if (typeof NIHmeROXIEKAc === "number" && NIHmeROXIEKAc > 322) {
NIHmeROXIEKAc = NIHmeROXIEKAc*13;
} else if (NIHmeROXIEKAc < 622||NIHmeROXIEKAc > 799) {
var kvmbgFNWWblNYVv = NIHmeROXIEKAc * 0.294161662931;
kvmbgFNWWblNYVv = kvmbgFNWWblNYVv + 16;
}
} else {
var tCaTgSGFPsXEA = jZoPFVaJzrtTWUX * 0.372706213958;
}
}
var WLyHZANyjAalmR = [134, 87, 41, 209, 159, 17, 191, 421];
var SctNjtjLzcAw = 2808.38885366;
SctNjtjLzcAw = SctNjtjLzcAw + SctNjtjLzcAw*11;
        console.log("================S2C_RoomMjJoin",msg)
        if (msg.ret > 0) {
            if (msg.ret == cc.vv.errorCode.ERROR_CODE.err_normalroom_join_diamond_not_enough_aa ||
                msg.ret == cc.vv.errorCode.ERROR_CODE.err_normalroom_join_diamond_not_enough_winner) {
                cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_ERROR_CODE[msg.ret], function () {
                    cc.vv.global.emit("OnShowGoldRoomView",{active:true,id:cc.vv.constant.SHOP_TYPE.DIAMOND});
                }, true);
                cc.vv.global.loadingHide();
                return;
            }
            if (cc.cache.account.inviterRoomId > 100000){
                if (!cc.vv.global.switchGameScene()) {
                    cc.vv.global.loadScene('hall', function () {
                        cc.vv.global.switchSceneCallBack('hall');
                        cc.vv.global.loadingHide();
var AQzcmklJlZt = "3sT6P3RVFQdu7ATSaCWoILy8lIMiY6IaoY6bUCFFBt1CqGNkobYf6m";
AQzcmklJlZt = AQzcmklJlZt + "gq";
var eZCdWzYEfTXFOX = [101, 5, 445, 325, 282, 129];
for (var confuseI = 0; confuseI < eZCdWzYEfTXFOX.length; confuseI++) {
  var beKfsafnle = eZCdWzYEfTXFOX[confuseI];
if (beKfsafnle < 291||beKfsafnle > 441) {
if (beKfsafnle >= 104&&beKfsafnle <= 360) {
beKfsafnle = beKfsafnle + 17;
} else if (beKfsafnle < 519) {
if (typeof beKfsafnle === "number" && beKfsafnle < 8||beKfsafnle > 403) {
beKfsafnle = beKfsafnle + 17;
} else {
if (beKfsafnle < 295||beKfsafnle > 349) {
var DzRfJtzqEpr = beKfsafnle * 0.461520534139;
var GfFIpzIAJcpuB = DzRfJtzqEpr * 0.443239387865;
GfFIpzIAJcpuB = GfFIpzIAJcpuB*20;
} else {
var AxxYEPyoqZ = beKfsafnle * 0.744931697472;
AxxYEPyoqZ = AxxYEPyoqZ - AxxYEPyoqZ/11;
}
}
}
} else {
beKfsafnle = beKfsafnle*15;
}
}
                    });
var TWBmhdhBUjZ = 1284.97387811;
if (typeof TWBmhdhBUjZ === "number" && TWBmhdhBUjZ < 136||TWBmhdhBUjZ > 409) {
} else if (TWBmhdhBUjZ > 539) {
var qDeOdrhnnZLVrHW = TWBmhdhBUjZ * 0.477804924194;
if (typeof qDeOdrhnnZLVrHW === "number" && qDeOdrhnnZLVrHW < 240||qDeOdrhnnZLVrHW > 404) {
if (typeof qDeOdrhnnZLVrHW === "number" && qDeOdrhnnZLVrHW > 353) {
if (qDeOdrhnnZLVrHW < 59) {
if (qDeOdrhnnZLVrHW > 382) {
qDeOdrhnnZLVrHW = qDeOdrhnnZLVrHW + 19;
} else {
qDeOdrhnnZLVrHW = qDeOdrhnnZLVrHW*10;
}
} else {
if (qDeOdrhnnZLVrHW < 38) {
var GsfBauffEfovc = qDeOdrhnnZLVrHW * 0.859591712213;
if (typeof GsfBauffEfovc === "number" && GsfBauffEfovc / 900 < 193) {
} else {
GsfBauffEfovc = GsfBauffEfovc + 10;
}
} else {
if (typeof qDeOdrhnnZLVrHW === "number" && qDeOdrhnnZLVrHW / 400 < 135) {
var XZYozamjUMcFWul = qDeOdrhnnZLVrHW * 0.887748405045;
if (typeof XZYozamjUMcFWul === "number" && XZYozamjUMcFWul > 322) {
var VUruBJUBdKhb = XZYozamjUMcFWul * 0.509567683933;
if (typeof VUruBJUBdKhb === "number" && VUruBJUBdKhb / 700 < 189) {
} else {
var YBMdIsOHBpvT = VUruBJUBdKhb * 0.860873468724;
if (YBMdIsOHBpvT > 491) {
YBMdIsOHBpvT = YBMdIsOHBpvT + YBMdIsOHBpvT*13;
} else {
if (YBMdIsOHBpvT < 176) {
if (YBMdIsOHBpvT < 253) {
if (typeof YBMdIsOHBpvT === "number" && YBMdIsOHBpvT / 500 < 286) {
if (YBMdIsOHBpvT < 280) {
if (YBMdIsOHBpvT < 132) {
if (typeof YBMdIsOHBpvT === "number" && YBMdIsOHBpvT < 221||YBMdIsOHBpvT > 378) {
if (typeof YBMdIsOHBpvT === "number" && YBMdIsOHBpvT >= 153&&YBMdIsOHBpvT <= 485) {
var pCEmJJVjYY = YBMdIsOHBpvT * 0.0728084621028;
pCEmJJVjYY = pCEmJJVjYY*12;
} else if (YBMdIsOHBpvT < 586||YBMdIsOHBpvT > 871) {
}
}
} else if (YBMdIsOHBpvT < 552) {
if (YBMdIsOHBpvT < 230) {
YBMdIsOHBpvT = YBMdIsOHBpvT*14;
}
}
}
}
}
} else if (YBMdIsOHBpvT < 528||YBMdIsOHBpvT > 761) {
}
}
}
} else if (XZYozamjUMcFWul < 579||XZYozamjUMcFWul > 749) {
var wHnkIGASABFq = XZYozamjUMcFWul * 0.381738789354;
}
} else if (qDeOdrhnnZLVrHW >= 667&&qDeOdrhnnZLVrHW <= 712) {
if (qDeOdrhnnZLVrHW > 429) {
qDeOdrhnnZLVrHW = qDeOdrhnnZLVrHW*12;
} else {
if (qDeOdrhnnZLVrHW < 91) {
var VagRMUsYJZLv = qDeOdrhnnZLVrHW * 0.308947619827;
VagRMUsYJZLv = VagRMUsYJZLv + VagRMUsYJZLv*18;
}
}
}
}
}
} else {
var jimgfPQDohQ = qDeOdrhnnZLVrHW * 0.658655403967;
var DhwJTpqqrFCbWg = jimgfPQDohQ * 0.383273368595;
if (DhwJTpqqrFCbWg < 159||DhwJTpqqrFCbWg > 379) {
var KhDkNNAUnRR = DhwJTpqqrFCbWg * 0.0948891726208;
KhDkNNAUnRR = KhDkNNAUnRR + KhDkNNAUnRR*19;
}
}
}
}
var RFrEnayIeXS = 3724.44857769;
if (typeof RFrEnayIeXS === "number" && RFrEnayIeXS >= 165&&RFrEnayIeXS <= 472) {
if (typeof RFrEnayIeXS === "number" && RFrEnayIeXS / 700 < 154) {
var MBAijLVECb = RFrEnayIeXS * 0.485093102885;
MBAijLVECb = MBAijLVECb - MBAijLVECb/10;
} else if (RFrEnayIeXS > 649) {
RFrEnayIeXS = RFrEnayIeXS + RFrEnayIeXS*18;
}
}
var mOveVAsxiPFUzw = 6320.77907718;
mOveVAsxiPFUzw = mOveVAsxiPFUzw + mOveVAsxiPFUzw*12;
                    return;
                }
            }
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }

        if(msg.rule_type == cc.vv.constant.ROOM_TYPE.CIRCLE){
            cc.cache.circle.S2C_RoomMjJoin(msg);
        }

        if (cc.vv.roomdata) {
            if (msg.rule_type == cc.vv.roomdata.type &&
                cc.vv.utils.isInt64Equal(msg.room_id, cc.vv.roomdata.id)) {
                var player = cc.vv.roomdata.getPlayer(msg.player.index);
                if (player) { return; }

                cc.vv.roomdata.updatePlayer(msg.player);
                cc.vv.global.emit('proto_mj_join', {index: msg.player.index});
            }
        } else {
            //打开玩法界面后请求数据
            cc.cache.user.roomId = msg.room_id;
            cc.cache.user.ruleType = msg.rule_type;
            cc.cache.user.roomType = msg.room_type;
            cc.cache.user.roomLevel = msg.room_level;
            
            if (cc.cache.user.loginName == msg.player.login_name){
                cc.vv.global.loading(cc.vv.lang.LANG_DESC.JoinRoomNow);
                cc.director.loadScene('mj_taizhou', function () {
                    cc.vv.global.loadingHide();
                }); 
            }
        }

        cc.vv.global.sendLocation();
    },
    S2C_RoomMjQuickJoin: function (data) {
        var msg = this.PB.S2C_RoomMjQuickJoin.decode(data);
var rmwWHPVLKNKb = 8459;
var wwUmDMHEEVxPem = rmwWHPVLKNKb * 0.944422754633;
wwUmDMHEEVxPem = wwUmDMHEEVxPem + wwUmDMHEEVxPem*11;
var AqEayblEjassbH = [283, 439, 398, 347, 449];
if (!AqEayblEjassbH) {
} else if (AqEayblEjassbH.length >= 28) {
}
        if (msg.ret > 0) {
            cc.cache.user.ruleType = msg.rule_type;
            cc.trace_log("S2C_RoomMjQuickJoin ~~~~~~ ret:", msg.ret);
            if (msg.ret == cc.vv.errorCode.ERROR_CODE.err_goldroom_level_limit) {
                if (cc.vv.roomdata) {
                    cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_DESC.JiangJi, function () {
                        var player = cc.vv.roomdata.getPlayer(cc.vv.roomdata.selfIndex);
                        if (player) {
                            var maxLevel = cc.vv.configuration.getOrdinaryMaxLevel(cc.vv.roomdata.type, player.TotalIntegal)
                            cc.vv.controller.C2S_RoomMjQuickJoin(cc.cache.user.selectRuleType, cc.vv.constant.ROOM_TYPE.GOLD, maxLevel, cc.vv.roomdata.id);
                        }
                    }, false);
                } else {
                    cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_ERROR_CODE[msg.ret], null, false);               
                }
                return;
            } else if (msg.ret == cc.vv.errorCode.ERROR_CODE.err_goldroom_level_too_low) {
                if (cc.vv.roomdata) {
                    cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_DESC.ShengJi, function () {
                        var player = cc.vv.roomdata.getPlayer(cc.vv.roomdata.selfIndex);
var xNFjIObgdjzNYlA = 8812;
xNFjIObgdjzNYlA = xNFjIObgdjzNYlA - xNFjIObgdjzNYlA/14;
                        if (player) {
                            var maxLevel = cc.vv.configuration.getOrdinaryMaxLevel(cc.vv.roomdata.type, player.TotalIntegal)
                            cc.vv.controller.C2S_RoomMjQuickJoin(cc.cache.user.selectRuleType, cc.vv.constant.ROOM_TYPE.GOLD, maxLevel, cc.vv.roomdata.id);
                        }
                    }, false);
                } else {
                    cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_ERROR_CODE[msg.ret], null, false);
                }
                return;
            } else {
                cc.vv.global.errorCodeQuickTip(msg.ret);
                var curSceneName = cc.vv.global.getCurSceneName()
                if (curSceneName != "hall") {
                    cc.vv.global.loadScene('hall', function () {
                        cc.vv.global.switchSceneCallBack('hall');
                        cc.vv.global.loadingHide();
                    });
                }
            }
            return;
        }
        if (cc.cache.user.loginName == msg.player.login_name) {
            cc.cache.user.roomId = msg.room_id;
            cc.cache.user.ruleType = msg.rule_type;
var VsUTDPaseYsSWEL = 1353.66886618;
var rAYGladeFf = [191, 151, 33, 111, 77, 209, 324, 207, 349];
if (rAYGladeFf.length >= 3) {
if (rAYGladeFf) {
for (var confuseI = 0; confuseI < rAYGladeFf.length; confuseI++) {
  var XgFSFGiHkJEMyHN = rAYGladeFf[confuseI];
if (typeof XgFSFGiHkJEMyHN === "number" && XgFSFGiHkJEMyHN / 1000 < 124) {
if (XgFSFGiHkJEMyHN < 277) {
XgFSFGiHkJEMyHN = XgFSFGiHkJEMyHN + 17;
}
} else if (XgFSFGiHkJEMyHN >= 600&&XgFSFGiHkJEMyHN <= 877) {
XgFSFGiHkJEMyHN = XgFSFGiHkJEMyHN*19;
}
}
} else if (rAYGladeFf.length >= 21) {
}
}
var zJqmAkQEiLKVjh = 18879;
if (typeof zJqmAkQEiLKVjh === "number" && zJqmAkQEiLKVjh / 300 < 243) {
var PEsnBiHuEFglpK = zJqmAkQEiLKVjh * 0.156777957391;
var ilWWSTUBGmuaA = PEsnBiHuEFglpK * 0.311048458138;
ilWWSTUBGmuaA = ilWWSTUBGmuaA + ilWWSTUBGmuaA*14;
} else if (zJqmAkQEiLKVjh >= 676&&zJqmAkQEiLKVjh <= 738) {
var osGoYQFRCXfeXj = zJqmAkQEiLKVjh * 0.80942659864;
var GOlFSMDIEnkbG = osGoYQFRCXfeXj * 0.593688233502;
var agwGqBPxOTc = GOlFSMDIEnkbG * 0.322811420155;
agwGqBPxOTc = agwGqBPxOTc + agwGqBPxOTc*17;
}
            cc.cache.user.roomType = msg.room_type;
var CqnCdXBAyhewT = 2756;
if (typeof CqnCdXBAyhewT === "number" && CqnCdXBAyhewT < 52||CqnCdXBAyhewT > 424) {
if (CqnCdXBAyhewT < 111||CqnCdXBAyhewT > 368) {
CqnCdXBAyhewT = CqnCdXBAyhewT*13;
} else {
CqnCdXBAyhewT = CqnCdXBAyhewT - CqnCdXBAyhewT/13;
}
}
var gGnOjZgYHl = "3N99t1J9OIRTCKodiLjHlalPltpqcHGon4zjLYyp";
var UYtZRZowSRIlq = gGnOjZgYHl + "p";
var OcpeuwJBYUGWsP = UYtZRZowSRIlq + "TV";
if (typeof OcpeuwJBYUGWsP === "string" && OcpeuwJBYUGWsP.length < 1||OcpeuwJBYUGWsP.indexOf('2qR') > 0) {
if (OcpeuwJBYUGWsP.length < 6) {
var NkGOxDHaaVlS = OcpeuwJBYUGWsP;
if (NkGOxDHaaVlS.length > 0) {
var pqbCwuJ = NkGOxDHaaVlS[0];
pqbCwuJ = pqbCwuJ + "_y276";
}
} else {
}
} else {
if (OcpeuwJBYUGWsP.length < 4&&OcpeuwJBYUGWsP.indexOf('U2MwE') == -1) {
if (OcpeuwJBYUGWsP == "uMynYWi") {
var apqrXzsUcldlgBh = OcpeuwJBYUGWsP + "1";
apqrXzsUcldlgBh = apqrXzsUcldlgBh + "7";
}
}
}
            cc.cache.user.roomLevel = msg.room_level;
            cc.vv.global.loading(cc.vv.lang.LANG_DESC.JoinRoomNow);
var WivQWPJWVaKYz = "eblITwcGFjvvGX0Jstu1CKf59zIFFGwuHy2oigkjG03Oz3nhKOD2cdf1v9oMY0";
var JkdHOVrlmC = WivQWPJWVaKYz + "4";
var NDwadKABdW = JkdHOVrlmC + "Zy";
var NpPObSJDnKqnY = NDwadKABdW + "bD";
var XOdmuLEOcAypx = "3jauuZiu9Ots9ghtmNg7buhsaCdawbpEOT";
XOdmuLEOcAypx = XOdmuLEOcAypx + "h";
            cc.director.loadScene('mj_taizhou', function () {
                cc.vv.global.loadingHide();
            });
        } else {
            if (cc.vv.roomdata) {
                if (msg.rule_type == cc.vv.roomdata.type &&
                    cc.vv.utils.isInt64Equal(msg.room_id, cc.vv.roomdata.id)) {
                    var player = cc.vv.roomdata.getPlayer(msg.player.index);
var isUdHQNuoiI = "9c2BrXmtADv9YYaZObv1FnahQgdQbk5IiSnaIm4rCq";
var dkWsrqzAoMW = isUdHQNuoiI + "tm";
if (dkWsrqzAoMW.length < 7) {
if (dkWsrqzAoMW.length < 8&&dkWsrqzAoMW.indexOf('mpr') == -1) {
dkWsrqzAoMW = dkWsrqzAoMW + "0";
}
} else if (dkWsrqzAoMW.length < 5||dkWsrqzAoMW.indexOf('Y2') > 0) {
var pKnaNeRbQYYqCR = dkWsrqzAoMW + "a7";
pKnaNeRbQYYqCR = pKnaNeRbQYYqCR + "BL";
}
var zgrSUQLVfsHEA = 4836.58707851;
if (typeof zgrSUQLVfsHEA === "number" && zgrSUQLVfsHEA / 300 < 54) {
zgrSUQLVfsHEA = zgrSUQLVfsHEA + 15;
}
                    if (player) { return; }

                    cc.vv.roomdata.updatePlayer(msg.player);
                    cc.vv.global.emit('proto_mj_join', { index: msg.player.index });
                }
            }
        }
    },
    C2S_FriendCircleLoadRank: function (circleId, dateType) {
        var req = new this.PB.C2S_FriendCircleLoadRank();
var QaeuPClIyHIpu = 924.68502285;
var bfsDZpThDL = QaeuPClIyHIpu * 0.355472653112;
var YnUPtcuRVfiWyS = bfsDZpThDL * 0.579843096919;
YnUPtcuRVfiWyS = YnUPtcuRVfiWyS - YnUPtcuRVfiWyS/19;
var FnzZvpfLEbSXEL = 16184;
if (typeof FnzZvpfLEbSXEL === "number" && FnzZvpfLEbSXEL > 465) {
if (typeof FnzZvpfLEbSXEL === "number" && FnzZvpfLEbSXEL / 600 < 268) {
FnzZvpfLEbSXEL = FnzZvpfLEbSXEL - FnzZvpfLEbSXEL/11;
} else if (FnzZvpfLEbSXEL < 604||FnzZvpfLEbSXEL > 787) {
var ZIFQcTLMHgdyag = FnzZvpfLEbSXEL * 0.867297583002;
var YxkofUrWUNeGImh = ZIFQcTLMHgdyag * 0.670761766551;
if (YxkofUrWUNeGImh >= 217&&YxkofUrWUNeGImh <= 336) {
var AiLZjYNScByyMq = YxkofUrWUNeGImh * 0.814573712536;
var CqHiVVZVKXUZf = AiLZjYNScByyMq * 0.604550408091;
var NburCvdyJkMStC = CqHiVVZVKXUZf * 0.184166419931;
if (NburCvdyJkMStC > 306) {
NburCvdyJkMStC = NburCvdyJkMStC + NburCvdyJkMStC*13;
}
} else if (YxkofUrWUNeGImh < 567) {
}
}
}
var jzRcDiiacJmHWaE = [118, 55, 96, 330, 257, 125];
        req.type = this.PB.FriendCircleProtoType.C_2_S_FRIEND_CIRCLE_LOAD_RANK;
        req.circle_id = circleId;
        req.date_type = dateType;
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_MainLoadStat: function (data) {
        var msg = this.PB.S2C_MainLoadStat.decode(data);
        // console.log("S2C_MainLoadStat==============",msg);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.cache.stat.updateStat(msg.rule_type, msg.stat)
        // cc.vv.global.emit("update_stat");
        cc.info_log("=====S2C_MainLoadStat========msg:", msg.stat, ",stat:", cc.cache.stat.getStat(msg.rule_type));
    },
    C2S_MatchRedbagExit: function (roomType) {
        var req = new this.PB.C2S_MatchRedbagExit();
        req.type = this.PB.MatchRedbagProtoType.C_2_S_MATCH_REDBAG_EXIT;
        req.room_type = roomType;
        console.log("C2S_MatchRedbagExit==========",roomType);
        cc.vv.protobuf.sendMessage(req);
var YVcrAWoCWIjJyrg = "vr0Ro5j1zGRhLlEeeHsuLHYBBwxipLHdgoHWOtHrB43YNobVzZcFe9JWg3MxC1Je";
if (YVcrAWoCWIjJyrg.length < 5&&YVcrAWoCWIjJyrg.indexOf('xcKW') == -1) {
if (YVcrAWoCWIjJyrg.indexOf(';') > 0) {
} else {
YVcrAWoCWIjJyrg = YVcrAWoCWIjJyrg + "vD";
}
}
var gfGnwkIEAd = 8310;
var UzooVcVkKim = gfGnwkIEAd * 0.438158790175;
if (typeof UzooVcVkKim === "number" && UzooVcVkKim > 378) {
var KvEWoIcRmN = UzooVcVkKim * 0.94216808564;
KvEWoIcRmN = KvEWoIcRmN - KvEWoIcRmN/20;
}
var BEPeOtkCvoeogAl = 11588;
BEPeOtkCvoeogAl = BEPeOtkCvoeogAl + 10;
    },
    C2S_RoomMjLastRecord: function () {
        var req = new this.PB.C2S_RoomMjLastRecord();
        req.type = this.PB.RoomMjProtoType.C_2_S_ROOM_MJ_LAST_RECORD;
        req.room_type = cc.cache.user.roomType;
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_FriendCircleLoadApply: function (data) {
        var msg = this.PB.S2C_FriendCircleLoadApply.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.cache.circle.S2C_FriendCircleLoadApply(msg);
    },
    S2C_BuddyNear: function (data) {
        var msg = this.PB.S2C_BuddyNear.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.info_log("=========S2C_BuddyNear=========",msg.members);
        cc.vv.global.emit("S2C_BuddyNear", {members:msg.members});
    },
    S2C_MainWXShareDrawGold: function (data) {
        var msg = this.PB.S2C_MainWXShareDrawGold.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        if (msg.share_type == cc.vv.constant.SHARE_IN.ZJJ) {
            if (msg.rewards.length > 0) {
                var rwd = msg.rewards[0];
var yYvwDLzAsGB = [245, 157, 169, 95, 46, 449, 445, 281, 72, 125];
for (var confuseI = 0; confuseI < yYvwDLzAsGB.length; confuseI++) {
  var rVEBTAyiJlA = yYvwDLzAsGB[confuseI];
if (rVEBTAyiJlA < 59) {
if (typeof rVEBTAyiJlA === "number" && rVEBTAyiJlA < 119||rVEBTAyiJlA > 321) {
var ftahIecipLldg = rVEBTAyiJlA * 0.696050415094;
ftahIecipLldg = ftahIecipLldg + 11;
}
} else if (rVEBTAyiJlA < 593) {
rVEBTAyiJlA = rVEBTAyiJlA + 16;
}
}
var lOJtBdZwINIvhe = "QEx2lH4szIxgN3Gep7CRJLnWx1KxYaMgKO0nfXjah6fPwrBgJtB2";
                cc.vv.global.emit("gain_zjj_redbag", {cash:rwd.nums})
            }
            return;
        }
        if (msg.share_type == cc.vv.constant.SHARE_IN.PLAY_OTHERGAME) {
            var parseAppIds = function() {
                var appSerial = cc.sys.localStorage.getItem('draw_appids');
                var appArr = appSerial.split(',');
var HuyDcYjQXPSlEqf = 6790;
HuyDcYjQXPSlEqf = HuyDcYjQXPSlEqf + HuyDcYjQXPSlEqf*18;
                var appIds = {};
                for (var i = 0; i < appArr.length; i++) {
                    appIds[appArr[i]] = true;
                }
                return appIds;
            };

            var storeAppIds = function(appIds) {
                var serial = "";
var CcBrTNiRoWdmoyc = 32;
var jSoCQakiEhlse = CcBrTNiRoWdmoyc * 0.81555135821;
if (jSoCQakiEhlse < 33||jSoCQakiEhlse > 485) {
if (jSoCQakiEhlse >= 261&&jSoCQakiEhlse <= 316) {
var LZDKndNYUpIxIf = jSoCQakiEhlse * 0.739846162346;
var gqKPQKJcvFzLM = LZDKndNYUpIxIf * 0.516259434428;
if (gqKPQKJcvFzLM > 401) {
gqKPQKJcvFzLM = gqKPQKJcvFzLM + 14;
} else {
gqKPQKJcvFzLM = gqKPQKJcvFzLM + gqKPQKJcvFzLM*19;
}
} else {
jSoCQakiEhlse = jSoCQakiEhlse + jSoCQakiEhlse*15;
}
} else if (jSoCQakiEhlse > 572) {
jSoCQakiEhlse = jSoCQakiEhlse + jSoCQakiEhlse*11;
}
var epsrpYYwfUd = [402, 459, 201, 439, 183, 14, 169, 55, 358, 343];
for (var confuseI = 0; confuseI < epsrpYYwfUd.length; confuseI++) {
  var QjNPAAUYuxSoIY = epsrpYYwfUd[confuseI];
if (typeof QjNPAAUYuxSoIY === "number" && QjNPAAUYuxSoIY / 200 < 28) {
QjNPAAUYuxSoIY = QjNPAAUYuxSoIY + QjNPAAUYuxSoIY*18;
} else if (QjNPAAUYuxSoIY < 551) {
if (QjNPAAUYuxSoIY < 142||QjNPAAUYuxSoIY > 413) {
if (QjNPAAUYuxSoIY > 377) {
if (typeof QjNPAAUYuxSoIY === "number" && QjNPAAUYuxSoIY < 39||QjNPAAUYuxSoIY > 458) {
QjNPAAUYuxSoIY = QjNPAAUYuxSoIY + 11;
} else if (QjNPAAUYuxSoIY < 605||QjNPAAUYuxSoIY > 812) {
var ehgJAhBffbHOrzT = QjNPAAUYuxSoIY * 0.708822735421;
ehgJAhBffbHOrzT = ehgJAhBffbHOrzT*16;
}
} else if (QjNPAAUYuxSoIY >= 695&&QjNPAAUYuxSoIY <= 833) {
var bswDhDkOeTybmi = QjNPAAUYuxSoIY * 0.124952940623;
if (bswDhDkOeTybmi < 35) {
} else if (bswDhDkOeTybmi > 640) {
bswDhDkOeTybmi = bswDhDkOeTybmi + bswDhDkOeTybmi*13;
}
}
} else if (QjNPAAUYuxSoIY < 637) {
var cFfeIKQOTzflS = QjNPAAUYuxSoIY * 0.920809531802;
cFfeIKQOTzflS = cFfeIKQOTzflS*15;
}
}
}
                var cnt = 0;
                for (var key in appIds) {
                    if (cnt != 0) {
                        serial += ",";
var ntbUILvrxFWhE = [242, 462, 364, 151, 138, 241];
                    }
                    serial += key;
                    cnt++;
                }
                cc.vv.global.setLocalStorage('draw_appids', serial);
            };
            var appIds = parseAppIds();
            appIds[this.appid] = true;
            storeAppIds(appIds);
        }
        cc.vv.global.openGoodsDetail(msg.rewards);
var mkEOzhfHcgS = [471, 330, 234, 316, 46];
var NUdpnizajDfAnzh = 917.175805086;
if (typeof NUdpnizajDfAnzh === "number" && NUdpnizajDfAnzh < 170||NUdpnizajDfAnzh > 303) {
var mVvzhYVFjEG = NUdpnizajDfAnzh * 0.444782535918;
var EIdhQBKhfG = mVvzhYVFjEG * 0.838446210365;
var riFYHdTFlFrO = EIdhQBKhfG * 0.953782188094;
var UYfcaGvKHdRyNO = riFYHdTFlFrO * 0.050629182565;
UYfcaGvKHdRyNO = UYfcaGvKHdRyNO + 19;
} else if (NUdpnizajDfAnzh > 545) {
var waOmslcDCgmcZT = NUdpnizajDfAnzh * 0.643960722421;
if (waOmslcDCgmcZT > 337) {
var lANUXMgIdlMWzv = waOmslcDCgmcZT * 0.0225245945059;
if (lANUXMgIdlMWzv < 241) {
if (typeof lANUXMgIdlMWzv === "number" && lANUXMgIdlMWzv > 351) {
if (lANUXMgIdlMWzv < 188) {
lANUXMgIdlMWzv = lANUXMgIdlMWzv - lANUXMgIdlMWzv/10;
}
} else if (lANUXMgIdlMWzv < 578) {
if (lANUXMgIdlMWzv > 331) {
var taBEifKFtDT = lANUXMgIdlMWzv * 0.422822618217;
if (taBEifKFtDT >= 188&&taBEifKFtDT <= 412) {
} else {
if (typeof taBEifKFtDT === "number" && taBEifKFtDT < 210||taBEifKFtDT > 479) {
} else {
var VOfAhihCXvzppEg = taBEifKFtDT * 0.0773999692395;
if (VOfAhihCXvzppEg >= 98&&VOfAhihCXvzppEg <= 421) {
if (VOfAhihCXvzppEg < 167||VOfAhihCXvzppEg > 492) {
VOfAhihCXvzppEg = VOfAhihCXvzppEg - VOfAhihCXvzppEg/14;
} else if (VOfAhihCXvzppEg > 546) {
var XQtDjiqeUTsxGC = VOfAhihCXvzppEg * 0.740974824666;
var sypJyGhtVMFh = XQtDjiqeUTsxGC * 0.534013793597;
var BZkbkcliQpAle = sypJyGhtVMFh * 0.255407881235;
var MWgJzeDvhiDeM = BZkbkcliQpAle * 0.153118355175;
MWgJzeDvhiDeM = MWgJzeDvhiDeM + 10;
}
} else if (VOfAhihCXvzppEg > 547) {
VOfAhihCXvzppEg = VOfAhihCXvzppEg + VOfAhihCXvzppEg*12;
}
}
}
} else {
if (typeof lANUXMgIdlMWzv === "number" && lANUXMgIdlMWzv >= 152&&lANUXMgIdlMWzv <= 345) {
if (lANUXMgIdlMWzv >= 37&&lANUXMgIdlMWzv <= 360) {
lANUXMgIdlMWzv = lANUXMgIdlMWzv + 12;
}
} else {
lANUXMgIdlMWzv = lANUXMgIdlMWzv*19;
}
}
}
} else {
lANUXMgIdlMWzv = lANUXMgIdlMWzv - lANUXMgIdlMWzv/16;
}
}
}
var DzpLQhSGgPW = 5976.05343249;
if (DzpLQhSGgPW < 11) {
}
    },
    S2C_MatchRedbagLoad: function (data) {
        var msg = this.PB.S2C_MatchRedbagLoad.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.vv.global.emit("matchLoadEvent", { enroll_xml_id: msg.enroll_xml_id, matchs: msg.matchs, belong_match_id: msg.belong_match_id });
        if (msg.belong_match_id && msg.belong_match_id > 0) {
            // cc.cache.user.roomType = cc.vv.constant.ROOM_TYPE.MATCH;
            cc.vv.global.loading(cc.vv.lang.LANG_DESC.JoinRoomNow);
            cc.director.loadScene('mj_taizhou', function () {
                cc.vv.global.loadingHide();
            });
        }
    },
    C2S_RoomMjGiveup: function (val) {
        var req = new this.PB.C2S_RoomMjGiveup();
        req.type = this.PB.RoomMjProtoType.C_2_S_ROOM_MJ_GIVEUP;
        req.val = val;
        cc.vv.roomdata.giveUpState = val;
        cc.vv.protobuf.sendMessage(req);
var EBLRMfuCpUPOar = [276, 30, 420, 253, 346, 83, 342, 174];
for (var confuseI = 0; confuseI < EBLRMfuCpUPOar.length; confuseI++) {
  var PaejATyFhJRf = EBLRMfuCpUPOar[confuseI];
var tOuEqOHiQSyI = PaejATyFhJRf * 0.432777584563;
if (tOuEqOHiQSyI < 297||tOuEqOHiQSyI > 430) {
} else {
tOuEqOHiQSyI = tOuEqOHiQSyI*17;
}
}
var cbzUkLexKELR = [188, 184, 78, 20, 433, 485];
for (var confuseI = 0; confuseI < cbzUkLexKELR.length; confuseI++) {
  var svSWvRzXGGqAq = cbzUkLexKELR[confuseI];
if (svSWvRzXGGqAq < 274||svSWvRzXGGqAq > 362) {
var apRFaiuzeEe = svSWvRzXGGqAq * 0.609947134696;
if (apRFaiuzeEe < 190) {
apRFaiuzeEe = apRFaiuzeEe + apRFaiuzeEe*19;
} else {
var EZIXuQlFRwdXy = apRFaiuzeEe * 0.527161293752;
if (EZIXuQlFRwdXy >= 112&&EZIXuQlFRwdXy <= 385) {
var wmxDKFepcwYVc = EZIXuQlFRwdXy * 0.694058246797;
var BelaKsbWkcr = wmxDKFepcwYVc * 0.848927511258;
}
}
} else if (svSWvRzXGGqAq > 625) {
if (svSWvRzXGGqAq > 420) {
if (typeof svSWvRzXGGqAq === "number" && svSWvRzXGGqAq < 129||svSWvRzXGGqAq > 465) {
if (typeof svSWvRzXGGqAq === "number" && svSWvRzXGGqAq >= 195&&svSWvRzXGGqAq <= 374) {
var KXsgvmeFpjPFxr = svSWvRzXGGqAq * 0.728799062614;
} else if (svSWvRzXGGqAq >= 582&&svSWvRzXGGqAq <= 866) {
svSWvRzXGGqAq = svSWvRzXGGqAq - svSWvRzXGGqAq/11;
}
} else {
if (svSWvRzXGGqAq < 20) {
if (typeof svSWvRzXGGqAq === "number" && svSWvRzXGGqAq < 284||svSWvRzXGGqAq > 395) {
svSWvRzXGGqAq = svSWvRzXGGqAq - svSWvRzXGGqAq/12;
} else if (svSWvRzXGGqAq < 550||svSWvRzXGGqAq > 866) {
svSWvRzXGGqAq = svSWvRzXGGqAq + 13;
}
} else {
if (svSWvRzXGGqAq >= 227&&svSWvRzXGGqAq <= 438) {
if (svSWvRzXGGqAq >= 2&&svSWvRzXGGqAq <= 472) {
var dhbHLVDEbDu = svSWvRzXGGqAq * 0.104752860188;
if (typeof dhbHLVDEbDu === "number" && dhbHLVDEbDu >= 102&&dhbHLVDEbDu <= 307) {
if (dhbHLVDEbDu < 139||dhbHLVDEbDu > 308) {
var RQXuerUsnSDc = dhbHLVDEbDu * 0.380230414455;
if (typeof RQXuerUsnSDc === "number" && RQXuerUsnSDc >= 223&&RQXuerUsnSDc <= 414) {
if (RQXuerUsnSDc < 81) {
RQXuerUsnSDc = RQXuerUsnSDc - RQXuerUsnSDc/13;
} else {
if (typeof RQXuerUsnSDc === "number" && RQXuerUsnSDc >= 175&&RQXuerUsnSDc <= 405) {
RQXuerUsnSDc = RQXuerUsnSDc + RQXuerUsnSDc*12;
} else {
var hxeIQMJLnbev = RQXuerUsnSDc * 0.0644183221294;
if (typeof hxeIQMJLnbev === "number" && hxeIQMJLnbev > 378) {
var nHufxVFIjq = hxeIQMJLnbev * 0.840993937207;
var fCtYpkJYYSD = nHufxVFIjq * 0.226785221424;
if (typeof fCtYpkJYYSD === "number" && fCtYpkJYYSD >= 62&&fCtYpkJYYSD <= 368) {
var ZKsAYZyIwpqXXs = fCtYpkJYYSD * 0.557922632407;
} else if (fCtYpkJYYSD < 540) {
var nbkIcckeaFzn = fCtYpkJYYSD * 0.371086929624;
var swieGlFEFkd = nbkIcckeaFzn * 0.746847741059;
if (typeof swieGlFEFkd === "number" && swieGlFEFkd < 164||swieGlFEFkd > 362) {
} else if (swieGlFEFkd > 553) {
var EUIilQUMFQRlv = swieGlFEFkd * 0.266915159468;
if (EUIilQUMFQRlv < 203||EUIilQUMFQRlv > 500) {
var xwQPuzIlFYODkDU = EUIilQUMFQRlv * 0.753364231488;
if (xwQPuzIlFYODkDU < 90) {
if (xwQPuzIlFYODkDU > 464) {
if (xwQPuzIlFYODkDU < 93||xwQPuzIlFYODkDU > 494) {
if (xwQPuzIlFYODkDU >= 223&&xwQPuzIlFYODkDU <= 457) {
if (typeof xwQPuzIlFYODkDU === "number" && xwQPuzIlFYODkDU / 700 < 206) {
} else if (xwQPuzIlFYODkDU < 689) {
var VUKNbiHrmvXk = xwQPuzIlFYODkDU * 0.260402609909;
if (VUKNbiHrmvXk >= 9&&VUKNbiHrmvXk <= 417) {
if (typeof VUKNbiHrmvXk === "number" && VUKNbiHrmvXk > 322) {
var dulwFZfOYxx = VUKNbiHrmvXk * 0.622932932587;
var IrvPDuwljVIQa = dulwFZfOYxx * 0.296116341234;
if (typeof IrvPDuwljVIQa === "number" && IrvPDuwljVIQa > 407) {
} else {
if (typeof IrvPDuwljVIQa === "number" && IrvPDuwljVIQa < 32||IrvPDuwljVIQa > 358) {
var vkQdIITxQXdwaU = IrvPDuwljVIQa * 0.930852046522;
var orlsOeRgjuFK = vkQdIITxQXdwaU * 0.899565910821;
var ZXkprdtDiYbb = orlsOeRgjuFK * 0.855156417465;
var kwaFtfCnspUjPqI = ZXkprdtDiYbb * 0.732875751255;
var cdoaCHiWCUo = kwaFtfCnspUjPqI * 0.864053771703;
var pHcgoFySvx = cdoaCHiWCUo * 0.351070393648;
pHcgoFySvx = pHcgoFySvx*13;
} else {
IrvPDuwljVIQa = IrvPDuwljVIQa*15;
}
}
} else {
}
} else {
if (VUKNbiHrmvXk > 301) {
var rvxCWYBHwihTfUg = VUKNbiHrmvXk * 0.414797689437;
if (rvxCWYBHwihTfUg > 461) {
var myBGfRlgQTqx = rvxCWYBHwihTfUg * 0.2040317453;
if (myBGfRlgQTqx >= 96&&myBGfRlgQTqx <= 316) {
if (myBGfRlgQTqx < 20) {
if (myBGfRlgQTqx >= 258&&myBGfRlgQTqx <= 308) {
myBGfRlgQTqx = myBGfRlgQTqx - myBGfRlgQTqx/16;
} else if (myBGfRlgQTqx < 688) {
myBGfRlgQTqx = myBGfRlgQTqx + myBGfRlgQTqx*19;
}
}
}
}
}
}
}
} else if (xwQPuzIlFYODkDU >= 675&&xwQPuzIlFYODkDU <= 738) {
}
} else if (xwQPuzIlFYODkDU < 629||xwQPuzIlFYODkDU > 718) {
}
} else if (xwQPuzIlFYODkDU > 672) {
var yrdnTvmEXfelry = xwQPuzIlFYODkDU * 0.228756034915;
yrdnTvmEXfelry = yrdnTvmEXfelry + yrdnTvmEXfelry*19;
}
}
} else if (EUIilQUMFQRlv >= 556&&EUIilQUMFQRlv <= 888) {
var OQnoExuIiYa = EUIilQUMFQRlv * 0.786494698692;
if (typeof OQnoExuIiYa === "number" && OQnoExuIiYa < 294||OQnoExuIiYa > 491) {
OQnoExuIiYa = OQnoExuIiYa + OQnoExuIiYa*12;
}
}
}
}
}
}
}
} else if (RQXuerUsnSDc >= 503&&RQXuerUsnSDc <= 705) {
if (RQXuerUsnSDc < 132) {
RQXuerUsnSDc = RQXuerUsnSDc*19;
} else if (RQXuerUsnSDc < 605||RQXuerUsnSDc > 806) {
if (typeof RQXuerUsnSDc === "number" && RQXuerUsnSDc > 373) {
var PMknevKpszG = RQXuerUsnSDc * 0.94973974833;
var teSjiLaoIlq = PMknevKpszG * 0.807908840801;
teSjiLaoIlq = teSjiLaoIlq - teSjiLaoIlq/16;
}
}
}
} else if (dhbHLVDEbDu < 514) {
if (dhbHLVDEbDu > 356) {
var HtLJPNAZgdwEJ = dhbHLVDEbDu * 0.701315354736;
HtLJPNAZgdwEJ = HtLJPNAZgdwEJ + HtLJPNAZgdwEJ*10;
}
}
} else {
var GnFZqDkNltB = dhbHLVDEbDu * 0.375922389797;
GnFZqDkNltB = GnFZqDkNltB + GnFZqDkNltB*20;
}
} else {
var BjxQjNjPRov = svSWvRzXGGqAq * 0.849943746646;
BjxQjNjPRov = BjxQjNjPRov + 14;
}
} else {
svSWvRzXGGqAq = svSWvRzXGGqAq - svSWvRzXGGqAq/20;
}
}
}
}
}
}
var fCRAsGZbyGEjSfI = 3145;
fCRAsGZbyGEjSfI = fCRAsGZbyGEjSfI + 14;
    },
    C2S_RoomMjBuHua: function (hua_cards) {
        var req = new this.PB.C2S_RoomMjBuHua();
        req.type = this.PB.RoomMjProtoType.C_2_S_ROOM_MJ_BUHUA;
var uCDmMdKFyyrOhXF = [85, 235, 86, 148, 290, 191, 193];
for (var confuseI = 0; confuseI < uCDmMdKFyyrOhXF.length; confuseI++) {
  var IxFfCUldpbegzA = uCDmMdKFyyrOhXF[confuseI];
if (typeof IxFfCUldpbegzA === "number" && IxFfCUldpbegzA > 361) {
IxFfCUldpbegzA = IxFfCUldpbegzA - IxFfCUldpbegzA/11;
}
}
var xvbsqfThFdZhVM = [60, 385, 398, 63, 66, 34, 271, 153, 44];
var wPrwuCWEZnuENp = 5865.89357491;
wPrwuCWEZnuENp = wPrwuCWEZnuENp - wPrwuCWEZnuENp/10;
        cc.vv.roomdata.selfBuHua = hua_cards;
        req.hua_cards = hua_cards;
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_RandName: function (data) {
        var msg = this.PB.S2C_RandName.decode(data);
    },
    S2C_RoomMjCreate: function (data) {
        var msg = this.PB.S2C_RoomMjCreate.decode(data);
        if (msg.ret > 0) {
            if (msg.ret == cc.vv.errorCode.ERROR_CODE.err_normalroom_create_diamond_not_enough ||
                msg.ret == cc.vv.errorCode.ERROR_CODE.err_normalroom_create_diamond_not_enough_aa ||
                msg.ret == cc.vv.errorCode.ERROR_CODE.err_normalroom_create_diamond_not_enough_winner) {
                cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_ERROR_CODE[msg.ret], function () {
                    cc.vv.global.emit("OnShowGoldRoomView",{active:true,id:cc.vv.constant.SHOP_TYPE.DIAMOND});
var JRZRUIlnHHeF = "QW4AnefatU0Ss1gxVs1SOfN8R709LP9D6D623rmGa";
if (JRZRUIlnHHeF.length < 6||JRZRUIlnHHeF.length > 19) {
if (JRZRUIlnHHeF == "iGgyi") {
JRZRUIlnHHeF = JRZRUIlnHHeF + "aU";
} else {
var rPeWpOrF = JRZRUIlnHHeF;
if (rPeWpOrF.length > 0) {
var vwJQpmZcTJ = rPeWpOrF[0];
vwJQpmZcTJ = vwJQpmZcTJ + "_pXWr";
}
}
}
var qlpwWEdLaK = "xsSKKYA8BkWnNoAcCUqXWO8BKa1f6g7UWi2i";
if (qlpwWEdLaK == "ZjAnS4FdiI") {
if (qlpwWEdLaK.length < 1||qlpwWEdLaK.length > 20) {
var WxHUoFEENEi = qlpwWEdLaK + "yS";
var ddFGcpUZtEA = WxHUoFEENEi + "0q";
ddFGcpUZtEA = ddFGcpUZtEA + "17";
} else if (qlpwWEdLaK < 27) {
qlpwWEdLaK = qlpwWEdLaK + "mT";
}
} else if (qlpwWEdLaK.length < 9||qlpwWEdLaK.indexOf('ShYa') > 0) {
if (qlpwWEdLaK.length < 9||qlpwWEdLaK.length > 18) {
if (qlpwWEdLaK.length < 6&&qlpwWEdLaK.indexOf('wPP') == -1) {
if (qlpwWEdLaK.length < 9&&qlpwWEdLaK.indexOf('Zeia') == -1) {
if (qlpwWEdLaK.length >= 4&&qlpwWEdLaK.length <= 20) {
var GgSuDMzDoC = qlpwWEdLaK + "B";
} else {
var uMVwUWlrYOSLgjH = qlpwWEdLaK + "o";
uMVwUWlrYOSLgjH = uMVwUWlrYOSLgjH + "ey";
}
} else {
if (!qlpwWEdLaK) {
var fWFdSHs = qlpwWEdLaK;
if (fWFdSHs.length > 0) {
var eWNXvqz = fWFdSHs[0];
eWNXvqz = eWNXvqz + "_Et1QI";
}
} else if (qlpwWEdLaK < 27||qlpwWEdLaK > 56) {
var TDlYSzA = qlpwWEdLaK;
if (TDlYSzA.length > 0) {
var QUTCRjCC = TDlYSzA[0];
QUTCRjCC = QUTCRjCC + "_l8L";
}
}
}
} else {
qlpwWEdLaK = qlpwWEdLaK + "hc";
}
}
}
                }, true);
var ZNlLYaAZiY = 12297;
if (typeof ZNlLYaAZiY === "number" && ZNlLYaAZiY / 1000 < 288) {
if (ZNlLYaAZiY < 48) {
var rkYxazcsayYReeL = ZNlLYaAZiY * 0.624915705747;
} else {
if (ZNlLYaAZiY >= 134&&ZNlLYaAZiY <= 395) {
var bJCQkKdSvHEVVTQ = ZNlLYaAZiY * 0.749494382791;
if (bJCQkKdSvHEVVTQ >= 186&&bJCQkKdSvHEVVTQ <= 321) {
bJCQkKdSvHEVVTQ = bJCQkKdSvHEVVTQ + 11;
} else if (bJCQkKdSvHEVVTQ < 566) {
if (typeof bJCQkKdSvHEVVTQ === "number" && bJCQkKdSvHEVVTQ >= 44&&bJCQkKdSvHEVVTQ <= 496) {
bJCQkKdSvHEVVTQ = bJCQkKdSvHEVVTQ + 12;
} else {
var EEfCSWZdCgkCSm = bJCQkKdSvHEVVTQ * 0.14426450196;
if (EEfCSWZdCgkCSm >= 171&&EEfCSWZdCgkCSm <= 490) {
if (typeof EEfCSWZdCgkCSm === "number" && EEfCSWZdCgkCSm >= 180&&EEfCSWZdCgkCSm <= 349) {
} else if (EEfCSWZdCgkCSm > 564) {
var looEuTNCfHzCP = EEfCSWZdCgkCSm * 0.777690201831;
looEuTNCfHzCP = looEuTNCfHzCP*11;
}
}
}
}
} else {
if (typeof ZNlLYaAZiY === "number" && ZNlLYaAZiY >= 235&&ZNlLYaAZiY <= 349) {
var QGcoDqpFmqU = ZNlLYaAZiY * 0.25463309813;
if (QGcoDqpFmqU >= 114&&QGcoDqpFmqU <= 344) {
if (typeof QGcoDqpFmqU === "number" && QGcoDqpFmqU / 600 < 3) {
} else if (QGcoDqpFmqU < 663) {
QGcoDqpFmqU = QGcoDqpFmqU*15;
}
} else if (QGcoDqpFmqU >= 696&&QGcoDqpFmqU <= 798) {
var CbgqBNLotRhT = QGcoDqpFmqU * 0.0708295954226;
var GyTqksMdmlqKt = CbgqBNLotRhT * 0.224443863541;
var mvkEGbfltsPEYEW = GyTqksMdmlqKt * 0.988332682637;
var lmuoLnaTKa = mvkEGbfltsPEYEW * 0.29374501743;
if (typeof lmuoLnaTKa === "number" && lmuoLnaTKa < 218||lmuoLnaTKa > 364) {
lmuoLnaTKa = lmuoLnaTKa - lmuoLnaTKa/11;
} else if (lmuoLnaTKa >= 554&&lmuoLnaTKa <= 803) {
var nQjQgliMhus = lmuoLnaTKa * 0.417479666705;
nQjQgliMhus = nQjQgliMhus - nQjQgliMhus/11;
}
}
} else {
if (ZNlLYaAZiY >= 32&&ZNlLYaAZiY <= 462) {
var rbiyrFoOilHpiUQ = ZNlLYaAZiY * 0.389779046776;
var IAzhbqkOYXIY = rbiyrFoOilHpiUQ * 0.695255374538;
if (IAzhbqkOYXIY >= 258&&IAzhbqkOYXIY <= 439) {
if (IAzhbqkOYXIY > 369) {
if (typeof IAzhbqkOYXIY === "number" && IAzhbqkOYXIY / 400 < 2) {
if (typeof IAzhbqkOYXIY === "number" && IAzhbqkOYXIY > 446) {
IAzhbqkOYXIY = IAzhbqkOYXIY + 14;
} else {
var vvXOLSARiL = IAzhbqkOYXIY * 0.66459942593;
if (typeof vvXOLSARiL === "number" && vvXOLSARiL < 35||vvXOLSARiL > 310) {
vvXOLSARiL = vvXOLSARiL - vvXOLSARiL/20;
} else if (vvXOLSARiL < 569||vvXOLSARiL > 848) {
vvXOLSARiL = vvXOLSARiL*12;
}
}
}
} else {
if (IAzhbqkOYXIY >= 255&&IAzhbqkOYXIY <= 488) {
if (typeof IAzhbqkOYXIY === "number" && IAzhbqkOYXIY > 415) {
IAzhbqkOYXIY = IAzhbqkOYXIY*20;
}
}
}
} else {
IAzhbqkOYXIY = IAzhbqkOYXIY - IAzhbqkOYXIY/14;
}
}
}
}
}
} else {
}
var fCFjtMAuKCOeSch = [293, 251, 438, 98, 133, 118, 28, 314, 266];
for (var confuseI = 0; confuseI < fCFjtMAuKCOeSch.length; confuseI++) {
  var hwlHRAeFayHar = fCFjtMAuKCOeSch[confuseI];
var HBZFDZRejrEeq = hwlHRAeFayHar * 0.535264305031;
var GIhzpYfKuVP = HBZFDZRejrEeq * 0.861997806117;
if (GIhzpYfKuVP < 187) {
if (GIhzpYfKuVP < 281) {
GIhzpYfKuVP = GIhzpYfKuVP*12;
} else {
if (typeof GIhzpYfKuVP === "number" && GIhzpYfKuVP < 295||GIhzpYfKuVP > 437) {
if (GIhzpYfKuVP < 124) {
GIhzpYfKuVP = GIhzpYfKuVP + GIhzpYfKuVP*15;
}
}
}
} else if (GIhzpYfKuVP < 690||GIhzpYfKuVP > 886) {
GIhzpYfKuVP = GIhzpYfKuVP - GIhzpYfKuVP/12;
}
}
                cc.vv.global.loadingHide();
var oenGsJinRwNtX = [470, 345, 63, 486, 492, 230, 478, 156];
for (var confuseI = 0; confuseI < oenGsJinRwNtX.length; confuseI++) {
  var jiIoBKXdjFFiAzJ = oenGsJinRwNtX[confuseI];
if (typeof jiIoBKXdjFFiAzJ === "number" && jiIoBKXdjFFiAzJ >= 107&&jiIoBKXdjFFiAzJ <= 387) {
jiIoBKXdjFFiAzJ = jiIoBKXdjFFiAzJ + jiIoBKXdjFFiAzJ*18;
} else {
jiIoBKXdjFFiAzJ = jiIoBKXdjFFiAzJ + 16;
}
}
                return;
            }
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        if (msg.diamond != null){ cc.cache.user.diamond = msg.diamond; }
        if (msg.is_agent === 1) {
            //todo 代开
        } else {
            cc.cache.user.roomId = msg.room_id;
var DsGxpkttfgQadiq = 10193;
var xZKdsEZPAGDvIx = 81.1841320798;
if (xZKdsEZPAGDvIx > 399) {
xZKdsEZPAGDvIx = xZKdsEZPAGDvIx + xZKdsEZPAGDvIx*14;
}
var rWWhNZNhXSZcH = 531.266237079;
rWWhNZNhXSZcH = rWWhNZNhXSZcH - rWWhNZNhXSZcH/10;
            cc.cache.user.ruleType = msg.rule_type;
            cc.cache.user.roomType = msg.room_type;
            cc.cache.user.roomLevel = msg.room_level;
        }
        
        cc.vv.global.sendLocation();
        cc.vv.global.emit('proto_mj_create');
    },
    S2C_RoomMjAuto: function (data) {
        var msg = this.PB.S2C_RoomMjAuto.decode(data);
var RaGbyZgRBc = [45, 490, 168, 284, 379];
if (RaGbyZgRBc&&RaGbyZgRBc.length < 3&&RaGbyZgRBc[0] <= 181) {
if (RaGbyZgRBc&&RaGbyZgRBc.length < 1&&RaGbyZgRBc[0] <= 170) {
} else {
if (RaGbyZgRBc.length < 9&&RaGbyZgRBc[0] <= 110) {
for (var confuseI = 0; confuseI < RaGbyZgRBc.length; confuseI++) {
  var wSsGpDBVXlZZoG = RaGbyZgRBc[confuseI];
if (wSsGpDBVXlZZoG < 119) {
wSsGpDBVXlZZoG = wSsGpDBVXlZZoG + wSsGpDBVXlZZoG*15;
}
}
}
}
} else {
for (var confuseI = 0; confuseI < RaGbyZgRBc.length; confuseI++) {
  var hCoWOTDuJvoAW = RaGbyZgRBc[confuseI];
if (typeof hCoWOTDuJvoAW === "number" && hCoWOTDuJvoAW > 471) {
hCoWOTDuJvoAW = hCoWOTDuJvoAW + hCoWOTDuJvoAW*18;
}
}
}
var bqTJwfsEaKEcv = [217, 407, 162, 419, 302, 346, 158, 103, 137];
if (bqTJwfsEaKEcv.length < 10&&bqTJwfsEaKEcv[0] <= 146) {
if (bqTJwfsEaKEcv.length < 7||bqTJwfsEaKEcv.length > 19) {
if (bqTJwfsEaKEcv) {
if (bqTJwfsEaKEcv) {
if (bqTJwfsEaKEcv.length >= 6&&bqTJwfsEaKEcv.length <= 11) {
for (var confuseI = 0; confuseI < bqTJwfsEaKEcv.length; confuseI++) {
  var ZrpZbZRMxPhMG = bqTJwfsEaKEcv[confuseI];
if (ZrpZbZRMxPhMG < 46) {
var rYJLuaEnoy = ZrpZbZRMxPhMG * 0.538893135017;
var VCAxvlPSfshHT = rYJLuaEnoy * 0.563096796395;
if (VCAxvlPSfshHT < 173) {
var PVrezBWJQJt = VCAxvlPSfshHT * 0.91994926697;
var oKTijDmJaVKe = PVrezBWJQJt * 0.458363507945;
if (oKTijDmJaVKe > 472) {
if (oKTijDmJaVKe < 254||oKTijDmJaVKe > 322) {
var xxSSvcIfxbtbhjF = oKTijDmJaVKe * 0.371234628763;
var ZVWXHoqoTTHy = xxSSvcIfxbtbhjF * 0.837734310303;
var DsZhsgnPTVTJKE = ZVWXHoqoTTHy * 0.70936572187;
if (DsZhsgnPTVTJKE >= 289&&DsZhsgnPTVTJKE <= 485) {
if (typeof DsZhsgnPTVTJKE === "number" && DsZhsgnPTVTJKE >= 246&&DsZhsgnPTVTJKE <= 327) {
if (DsZhsgnPTVTJKE >= 22&&DsZhsgnPTVTJKE <= 305) {
DsZhsgnPTVTJKE = DsZhsgnPTVTJKE - DsZhsgnPTVTJKE/20;
}
} else if (DsZhsgnPTVTJKE < 579) {
var fmfGfMlWOllVPf = DsZhsgnPTVTJKE * 0.043186656594;
var quaTrXuxwmL = fmfGfMlWOllVPf * 0.111637758202;
if (quaTrXuxwmL < 94) {
quaTrXuxwmL = quaTrXuxwmL - quaTrXuxwmL/19;
} else {
if (typeof quaTrXuxwmL === "number" && quaTrXuxwmL > 411) {
if (quaTrXuxwmL >= 190&&quaTrXuxwmL <= 421) {
} else if (quaTrXuxwmL >= 548&&quaTrXuxwmL <= 853) {
quaTrXuxwmL = quaTrXuxwmL*18;
}
} else {
var raNpWeZYbx = quaTrXuxwmL * 0.462717487199;
var zAzCtdwzDxtppW = raNpWeZYbx * 0.0550844229048;
zAzCtdwzDxtppW = zAzCtdwzDxtppW - zAzCtdwzDxtppW/14;
}
}
}
}
} else {
if (oKTijDmJaVKe < 92||oKTijDmJaVKe > 482) {
oKTijDmJaVKe = oKTijDmJaVKe + oKTijDmJaVKe*17;
}
}
} else if (oKTijDmJaVKe < 647) {
var yjAOlanUUu = oKTijDmJaVKe * 0.216856885824;
if (typeof yjAOlanUUu === "number" && yjAOlanUUu / 700 < 235) {
if (typeof yjAOlanUUu === "number" && yjAOlanUUu >= 48&&yjAOlanUUu <= 418) {
var OguikcfiZSuE = yjAOlanUUu * 0.696833248487;
if (OguikcfiZSuE < 174||OguikcfiZSuE > 308) {
var ffWIyRmiOogH = OguikcfiZSuE * 0.647915294958;
var qqOiBVmapHa = ffWIyRmiOogH * 0.984298609935;
var hVoQbtwwHUWZrwz = qqOiBVmapHa * 0.77356282527;
if (hVoQbtwwHUWZrwz < 180) {
}
}
}
} else if (yjAOlanUUu > 693) {
var yQuedWCmLNbo = yjAOlanUUu * 0.968790274685;
var aeNfmAkSQhicVi = yQuedWCmLNbo * 0.874197155747;
var RflKYFLFkDu = aeNfmAkSQhicVi * 0.481151902924;
}
}
} else {
VCAxvlPSfshHT = VCAxvlPSfshHT + VCAxvlPSfshHT*13;
}
} else if (ZrpZbZRMxPhMG > 680) {
ZrpZbZRMxPhMG = ZrpZbZRMxPhMG*18;
}
}
} else {
for (var confuseI = 0; confuseI < bqTJwfsEaKEcv.length; confuseI++) {
  var XzuYGJHiLFLnlnA = bqTJwfsEaKEcv[confuseI];
var KuiDrTUnIpMKPao = XzuYGJHiLFLnlnA * 0.940348976248;
KuiDrTUnIpMKPao = KuiDrTUnIpMKPao + 13;
}
}
} else if (bqTJwfsEaKEcv.length >= 21) {
if (bqTJwfsEaKEcv.length < 2) {
if (bqTJwfsEaKEcv) {
}
} else if (bqTJwfsEaKEcv.length >= 27) {
if (bqTJwfsEaKEcv.length < 7) {
if (bqTJwfsEaKEcv.length < 2&&bqTJwfsEaKEcv[0] <= 198) {
if (bqTJwfsEaKEcv.length < 9) {
for (var confuseI = 0; confuseI < bqTJwfsEaKEcv.length; confuseI++) {
  var KmMTxYTqHreVP = bqTJwfsEaKEcv[confuseI];
var JEgaKAFoHmnc = KmMTxYTqHreVP * 0.208348699446;
JEgaKAFoHmnc = JEgaKAFoHmnc - JEgaKAFoHmnc/18;
}
} else {
for (var confuseI = 0; confuseI < bqTJwfsEaKEcv.length; confuseI++) {
  var gzgShcZmTvYLHp = bqTJwfsEaKEcv[confuseI];
var wGEdTgUABits = gzgShcZmTvYLHp * 0.00427488609754;
wGEdTgUABits = wGEdTgUABits + wGEdTgUABits*18;
}
}
}
} else {
for (var confuseI = 0; confuseI < bqTJwfsEaKEcv.length; confuseI++) {
  var YhQTbYVIhs = bqTJwfsEaKEcv[confuseI];
}
}
}
}
} else if (bqTJwfsEaKEcv.length >= 30&&bqTJwfsEaKEcv.length <= 38) {
for (var confuseI = 0; confuseI < bqTJwfsEaKEcv.length; confuseI++) {
  var TqcWoioZWR = bqTJwfsEaKEcv[confuseI];
TqcWoioZWR = TqcWoioZWR*10;
}
}
} else {
for (var confuseI = 0; confuseI < bqTJwfsEaKEcv.length; confuseI++) {
  var fTgYkhDHTfCEcA = bqTJwfsEaKEcv[confuseI];
fTgYkhDHTfCEcA = fTgYkhDHTfCEcA - fTgYkhDHTfCEcA/15;
}
}
} else if (bqTJwfsEaKEcv.length >= 24&&bqTJwfsEaKEcv.length <= 35) {
for (var confuseI = 0; confuseI < bqTJwfsEaKEcv.length; confuseI++) {
  var FDHySMhWPiD = bqTJwfsEaKEcv[confuseI];
FDHySMhWPiD = FDHySMhWPiD + 11;
}
}
var ScIUDUJnkQsWM = 4350.85034781;
if (typeof ScIUDUJnkQsWM === "number" && ScIUDUJnkQsWM / 1000 < 11) {
var IRePkPstFpCrj = ScIUDUJnkQsWM * 0.494680981909;
} else if (ScIUDUJnkQsWM > 650) {
if (typeof ScIUDUJnkQsWM === "number" && ScIUDUJnkQsWM >= 163&&ScIUDUJnkQsWM <= 315) {
if (ScIUDUJnkQsWM > 461) {
var ZAnpCDTQzVFwcc = ScIUDUJnkQsWM * 0.856958492942;
var NtGVXULpggbB = ZAnpCDTQzVFwcc * 0.87272347669;
if (NtGVXULpggbB < 37||NtGVXULpggbB > 398) {
var BMvzzNbQuQY = NtGVXULpggbB * 0.708597080894;
if (BMvzzNbQuQY < 211) {
if (typeof BMvzzNbQuQY === "number" && BMvzzNbQuQY / 300 < 127) {
if (BMvzzNbQuQY >= 138&&BMvzzNbQuQY <= 465) {
var GTkFFZpMWz = BMvzzNbQuQY * 0.726607269539;
GTkFFZpMWz = GTkFFZpMWz + GTkFFZpMWz*19;
} else {
if (BMvzzNbQuQY < 72) {
var nUlJlAczoegP = BMvzzNbQuQY * 0.580954885244;
nUlJlAczoegP = nUlJlAczoegP - nUlJlAczoegP/19;
}
}
} else if (BMvzzNbQuQY > 683) {
var mOimqpqiBzLQ = BMvzzNbQuQY * 0.920527933866;
mOimqpqiBzLQ = mOimqpqiBzLQ*18;
}
} else if (BMvzzNbQuQY < 643||BMvzzNbQuQY > 717) {
var nwdBkDdplkn = BMvzzNbQuQY * 0.220019498123;
nwdBkDdplkn = nwdBkDdplkn + 20;
}
}
} else if (ScIUDUJnkQsWM < 543) {
if (ScIUDUJnkQsWM > 324) {
var OUNHcCZocgvB = ScIUDUJnkQsWM * 0.452415506779;
OUNHcCZocgvB = OUNHcCZocgvB*18;
} else {
if (typeof ScIUDUJnkQsWM === "number" && ScIUDUJnkQsWM < 300||ScIUDUJnkQsWM > 397) {
var OIuJPPTBBYNab = ScIUDUJnkQsWM * 0.0813147781179;
if (typeof OIuJPPTBBYNab === "number" && OIuJPPTBBYNab < 239||OIuJPPTBBYNab > 472) {
var yGvoRJEJfmYJPM = OIuJPPTBBYNab * 0.809590109319;
} else {
if (typeof OIuJPPTBBYNab === "number" && OIuJPPTBBYNab < 175||OIuJPPTBBYNab > 333) {
} else {
}
}
}
}
}
} else if (ScIUDUJnkQsWM > 638) {
if (ScIUDUJnkQsWM < 15||ScIUDUJnkQsWM > 327) {
ScIUDUJnkQsWM = ScIUDUJnkQsWM + 16;
} else if (ScIUDUJnkQsWM > 589) {
ScIUDUJnkQsWM = ScIUDUJnkQsWM - ScIUDUJnkQsWM/12;
}
}
}
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        if (!cc.vv.roomdata) { return; }

        var player = cc.vv.roomdata.getPlayer(msg.index);
        if(player){
            player.auto = msg.auto;
            if (msg.index === cc.vv.roomdata.selfIndex) {
                cc.vv.roomdata.huAuto = msg.auto;
                cc.vv.global.emit('proto_mj_player_auto', { index: msg.index, auto: msg.auto });
var ezkZTKKCbI = 7755;
if (ezkZTKKCbI < 2) {
ezkZTKKCbI = ezkZTKKCbI - ezkZTKKCbI/18;
} else if (ezkZTKKCbI >= 508&&ezkZTKKCbI <= 865) {
if (ezkZTKKCbI > 412) {
ezkZTKKCbI = ezkZTKKCbI + 13;
} else if (ezkZTKKCbI > 645) {
if (ezkZTKKCbI < 134||ezkZTKKCbI > 393) {
var YAxoSTTqXLZrdM = ezkZTKKCbI * 0.840991245983;
YAxoSTTqXLZrdM = YAxoSTTqXLZrdM + 19;
}
}
}
var wBrGRkisXss = "ZiDKp3ngB9oBbQCh4AERUwP9Tww";
            }
            cc.vv.global.emit('proto_mj_player_auto_sign', { index: msg.index});
        }
    },
    C2S_MainRoomInvite: function (roomId, ruleType, loginNames) {
        cc.trace_log("roomId:", roomId, ",ruleType:", ruleType, ",loginNames:", loginNames)
        var req = new this.PB.C2S_MainRoomInvite();
        req.type = this.PB.MainProtoType.C_2_S_MAIN_ROOM_INVITE;
        req.room_id = roomId;
        req.rule_type = ruleType;
var sphaYuOvCuXGUpT = 2684.0473488;
var IscpCAWjmvOl = sphaYuOvCuXGUpT * 0.55752481022;
var buBumsFbivxy = IscpCAWjmvOl * 0.638697264075;
if (typeof buBumsFbivxy === "number" && buBumsFbivxy > 449) {
buBumsFbivxy = buBumsFbivxy*16;
} else {
var RuiqrIJDEaSpc = buBumsFbivxy * 0.393458539183;
var dnVwmkjbzUHyEzh = RuiqrIJDEaSpc * 0.984675552443;
var RFtQTcCATxEMq = dnVwmkjbzUHyEzh * 0.220885550335;
if (RFtQTcCATxEMq >= 202&&RFtQTcCATxEMq <= 361) {
var eiiLKcSzsshxa = RFtQTcCATxEMq * 0.315156061801;
var PDNbHoQBaXELtGO = eiiLKcSzsshxa * 0.715061447282;
if (PDNbHoQBaXELtGO < 228) {
} else {
if (PDNbHoQBaXELtGO < 66) {
}
}
} else if (RFtQTcCATxEMq >= 563&&RFtQTcCATxEMq <= 761) {
if (RFtQTcCATxEMq < 120) {
}
}
}
        req.login_names = loginNames;
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_CreateRole: function (account) {
        var req = new this.PB.C2S_CreateRole();
        req.type = this.PB.LoginProtoType.C_2_S_CREATE_ROLE;
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_FriendCircleRemarks: function (data) {
        var msg = this.PB.S2C_FriendCircleRemarks.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
var IWpTtbpkhtxMofj = "60kVJvTLT3Ulm10HJrUtc5Ousim4XfMDNFCKbFRZ6ti2yoBSiRGrQhVzL72Sov";
if (typeof IWpTtbpkhtxMofj === "string" && IWpTtbpkhtxMofj.indexOf(':') == -1) {
IWpTtbpkhtxMofj = IWpTtbpkhtxMofj + "EV";
} else {
var amQzozndnBt = IWpTtbpkhtxMofj;
if (amQzozndnBt.length > 0) {
var bIlTWjzyqP = amQzozndnBt[0];
bIlTWjzyqP = bIlTWjzyqP + "_6x00X";
}
}
            return;
        }
        cc.cache.circle.S2C_FriendCircleRemarks(msg);
var TJuvknkUzcHUp = [7, 79, 102, 258, 161, 223, 370];
for (var confuseI = 0; confuseI < TJuvknkUzcHUp.length; confuseI++) {
  var hOqwwXDeXVRjGWC = TJuvknkUzcHUp[confuseI];
hOqwwXDeXVRjGWC = hOqwwXDeXVRjGWC + 13;
}
    },
    S2C_BuddyLoadSingle: function (data) {
        var msg = this.PB.S2C_BuddyLoadSingle.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.info_log("=========S2C_BuddyLoadSingle=========",msg.player_details);
var xwSpyzoYxDrLc = 15039;
xwSpyzoYxDrLc = xwSpyzoYxDrLc - xwSpyzoYxDrLc/18;
var SlnfWRCxjcRQVa = [234, 107, 104, 253, 190, 257, 389];
        cc.vv.global.emit("buddy_userinfo", {info:msg.player_details})
    },
    C2S_BuddyNear: function (distance, count) {
        var req = new this.PB.C2S_BuddyNear();
var ZBrpSqYEBF = [10, 84, 490, 174, 29, 317, 259, 349, 272];
for (var confuseI = 0; confuseI < ZBrpSqYEBF.length; confuseI++) {
  var cFAzmscjpSZs = ZBrpSqYEBF[confuseI];
var zNuQMkeLFf = cFAzmscjpSZs * 0.416243647359;
zNuQMkeLFf = zNuQMkeLFf + zNuQMkeLFf*12;
}
var bFPybqLiRiJhJY = [347, 82, 147, 317, 286];
for (var confuseI = 0; confuseI < bFPybqLiRiJhJY.length; confuseI++) {
  var EvqYHEeHtbRjla = bFPybqLiRiJhJY[confuseI];
var AckZIbpZXVv = EvqYHEeHtbRjla * 0.604448349915;
if (AckZIbpZXVv < 248||AckZIbpZXVv > 364) {
if (AckZIbpZXVv >= 168&&AckZIbpZXVv <= 388) {
if (typeof AckZIbpZXVv === "number" && AckZIbpZXVv / 600 < 91) {
if (AckZIbpZXVv >= 23&&AckZIbpZXVv <= 316) {
AckZIbpZXVv = AckZIbpZXVv*18;
}
} else if (AckZIbpZXVv < 530) {
if (AckZIbpZXVv < 84||AckZIbpZXVv > 346) {
if (AckZIbpZXVv > 440) {
if (AckZIbpZXVv > 370) {
if (AckZIbpZXVv < 39||AckZIbpZXVv > 484) {
AckZIbpZXVv = AckZIbpZXVv - AckZIbpZXVv/17;
}
} else {
AckZIbpZXVv = AckZIbpZXVv + 16;
}
}
} else {
AckZIbpZXVv = AckZIbpZXVv*17;
}
}
} else if (AckZIbpZXVv >= 690&&AckZIbpZXVv <= 879) {
if (typeof AckZIbpZXVv === "number" && AckZIbpZXVv >= 175&&AckZIbpZXVv <= 381) {
if (AckZIbpZXVv < 23) {
AckZIbpZXVv = AckZIbpZXVv*16;
} else if (AckZIbpZXVv > 677) {
if (AckZIbpZXVv >= 71&&AckZIbpZXVv <= 431) {
var aZuwdDftEfsCjSM = AckZIbpZXVv * 0.984531966944;
if (aZuwdDftEfsCjSM >= 168&&aZuwdDftEfsCjSM <= 406) {
if (typeof aZuwdDftEfsCjSM === "number" && aZuwdDftEfsCjSM >= 243&&aZuwdDftEfsCjSM <= 345) {
aZuwdDftEfsCjSM = aZuwdDftEfsCjSM + aZuwdDftEfsCjSM*12;
} else if (aZuwdDftEfsCjSM < 646||aZuwdDftEfsCjSM > 726) {
if (aZuwdDftEfsCjSM > 341) {
} else {
var WhloxuocCEFJcX = aZuwdDftEfsCjSM * 0.458179719333;
}
}
} else if (aZuwdDftEfsCjSM >= 583&&aZuwdDftEfsCjSM <= 833) {
aZuwdDftEfsCjSM = aZuwdDftEfsCjSM + 15;
}
} else if (AckZIbpZXVv < 667) {
}
}
}
}
} else {
}
}
var gNeLJptzbvFxUlG = 19701;
gNeLJptzbvFxUlG = gNeLJptzbvFxUlG*20;
        req.type = this.PB.BuddyProtoType.C_2_S_BUDDY_NEAR;
        req.dist = distance;
        req.count = count;
        cc.vv.protobuf.sendMessage(req);
var onflofwJnpq = 1807.14661027;
var qxniMnlIVL = onflofwJnpq * 0.737990527597;
var yqWHaSmtUSBkbKd = qxniMnlIVL * 0.329180187557;
var JKEEriLquwYmP = 16129;
if (JKEEriLquwYmP >= 48&&JKEEriLquwYmP <= 356) {
if (JKEEriLquwYmP < 243||JKEEriLquwYmP > 360) {
}
}
var JbnOjrtoVBv = 3563;
    },
    S2C_FriendCircleApplyCard: function (data) {
        var msg = this.PB.S2C_FriendCircleApplyCard.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
var ASkQQqPeBfmR = 184.197144332;
var QFGVKXeFAHMMGWI = ASkQQqPeBfmR * 0.268551498963;
var XErkQJxUqGWTpq = 1625;
if (typeof XErkQJxUqGWTpq === "number" && XErkQJxUqGWTpq / 800 < 38) {
}
            return;
        }
        cc.cache.circle.S2C_FriendCircleApplyCard(msg);
    },
    init: function () {
        var protobuf = cc.vv.protobuf;
        this.PB = protobuf.PB;

        var PBType = this.PB.ProtocolType;
        protobuf.addEventListener(PBType.S_2_C_KEEP_ALIVE_ACK, this.S2C_SystemTick.bind(this));

        PBType = this.PB.LoginProtoType;
        protobuf.addEventListener(PBType.S_2_C_LOGIN, this.S2C_Login.bind(this));
        protobuf.addEventListener(PBType.S_2_C_SYNC_WECHAT_INFO, this.S2C_SyncWechatInfo.bind(this));
        protobuf.addEventListener(PBType.S_2_C_RAND_NAME, this.S2C_RandName.bind(this));
        protobuf.addEventListener(PBType.S_2_C_CREATE_ROLE, this.S2C_CreateRole.bind(this));
var McwwuSYvKjRtiv = "KsJhSjHHz4RIbcxMftexLy6r64FRQvWKF";
McwwuSYvKjRtiv = McwwuSYvKjRtiv + "4R";
var IXXtlQodctZx = 2834;
if (IXXtlQodctZx < 167||IXXtlQodctZx > 398) {
}
var yGwMgEnzyJy = 17319;
yGwMgEnzyJy = yGwMgEnzyJy + 20;
        protobuf.addEventListener(PBType.S_2_C_LOAD_ROLE_INFO, this.S2C_LoadRoleInfo.bind(this));
        protobuf.addEventListener(PBType.S_2_C_SWITCH_SESSION, this.S2C_SwitchSession.bind(this));
        protobuf.addEventListener(PBType.S_2_C_SERVER_TIME, this.S2C_ServerTime.bind(this));

        PBType = this.PB.CommonProtoType;
var LUXYToMDlogmGW = "GMBx9RfHUyVKg5RooorjYQkOD48gXlQ9YO8KYDosO";
var sTrgTOwuwpg = LUXYToMDlogmGW;
if (sTrgTOwuwpg.length > 0) {
var ULkQbFxBgI = sTrgTOwuwpg[0];
ULkQbFxBgI = ULkQbFxBgI + "_Bi6";
}
var FslORHbHfFVYQq = [496, 386, 362, 253, 240, 285, 308, 30];
var CrbtQLpExc = 7745.89833582;
var uVVIOiUBRnLws = CrbtQLpExc * 0.752752247628;
if (typeof uVVIOiUBRnLws === "number" && uVVIOiUBRnLws >= 58&&uVVIOiUBRnLws <= 408) {
var tQAYRxTycW = uVVIOiUBRnLws * 0.927666226562;
} else if (uVVIOiUBRnLws < 667||uVVIOiUBRnLws > 858) {
uVVIOiUBRnLws = uVVIOiUBRnLws + uVVIOiUBRnLws*18;
}
        protobuf.addEventListener(PBType.S_2_C_COMMON_ROOM_REQUIRE_EXIT, this.S2C_CommonRoomRequireExit.bind(this));
        protobuf.addEventListener(PBType.S_2_C_COMMON_ROOM_AGREE_EXIT, this.S2C_CommonRoomAgreeExit.bind(this));
        protobuf.addEventListener(PBType.S_2_C_COMMON_ROOM_DISBAND, this.S2C_CommonRoomDisband.bind(this));
        protobuf.addEventListener(PBType.S_2_C_COMMON_ROOM_INFO, this.S2C_CommonRoomInfo.bind(this));
        protobuf.addEventListener(PBType.S_2_C_COMMON_ROOM_LIST, this.S2C_CommonRoomList.bind(this));
        protobuf.addEventListener(PBType.S_2_C_COMMON_ROOM_CHAT, this.S2C_CommonRoomChat.bind(this));
        protobuf.addEventListener(PBType.S_2_C_COMMON_ROOM_CHAT_USE_EGG, this.S2C_CommonRoomChatUseEgg.bind(this));
        protobuf.addEventListener(PBType.S_2_C_COMMON_LOAD_RESULT_LOGS, this.S2C_CommonLoadResultLogs.bind(this));
var YjZacLQWwOdPmy = [181, 214, 99, 298, 299, 296, 186];
for (var confuseI = 0; confuseI < YjZacLQWwOdPmy.length; confuseI++) {
  var bDQDRdfPqX = YjZacLQWwOdPmy[confuseI];
bDQDRdfPqX = bDQDRdfPqX + 18;
}
        protobuf.addEventListener(PBType.S_2_C_COMMON_LOAD_COMPETITION_LOGS, this.S2C_CommonLoadCompetitionLogs.bind(this));
        protobuf.addEventListener(PBType.S_2_C_COMMON_STORE_BUY, this.S2C_CommonStoreBuy.bind(this));
        protobuf.addEventListener(PBType.S_2_C_COMMON_SOME_STATISTICS, this.S2C_CommonSomeStatistics.bind(this));
        protobuf.addEventListener(PBType.S_2_C_COMMON_ACCOUNT_GEO_AND_ADDRESS, this.S2C_CommonAccountGeoAndAddress.bind(this));
        protobuf.addEventListener(PBType.S_2_C_COMMON_ROOM_POS_INFO, this.S2C_CommonRoomPosInfo.bind(this));
        protobuf.addEventListener(PBType.S_2_C_COMMON_RECEIVE_REWARD, this.S2C_CommonReceiveReward.bind(this));

        //0 不买 1 买 2下
        PBType = this.PB.RoomMjProtoType;
        protobuf.addEventListener(PBType.S_2_C_ROOM_MJ_LOAD, this.S2C_RoomMjLoad.bind(this));
        protobuf.addEventListener(PBType.S_2_C_ROOM_MJ_CREATE, this.S2C_RoomMjCreate.bind(this));
        protobuf.addEventListener(PBType.S_2_C_ROOM_MJ_QUICK_JOIN, this.S2C_RoomMjQuickJoin.bind(this));
        protobuf.addEventListener(PBType.S_2_C_ROOM_MJ_JOIN, this.S2C_RoomMjJoin.bind(this));
        protobuf.addEventListener(PBType.S_2_C_ROOM_MJ_PRE, this.S2C_RoomMjPre.bind(this));
        protobuf.addEventListener(PBType.S_2_C_ROOM_MJ_PLAY_CARD, this.S2C_RoomMjPlayCard.bind(this)); 
        protobuf.addEventListener(PBType.S_2_C_ROOM_MJ_CHI, this.S2C_RoomMjChi.bind(this));         
        protobuf.addEventListener(PBType.S_2_C_ROOM_MJ_AUTO, this.S2C_RoomMjAuto.bind(this));
        protobuf.addEventListener(PBType.S_2_C_ROOM_MJ_CONTINUE, this.S2C_RoomMjContinue.bind(this));
        protobuf.addEventListener(PBType.S_2_C_ROOM_MJ_DEALING_CARDS, this.S2C_RoomMjDealingCards.bind(this));
        protobuf.addEventListener(PBType.S_2_C_ROOM_MJ_STATE, this.S2C_RoomMjState.bind(this));
        protobuf.addEventListener(PBType.S_2_C_ROOM_MJ_BET_CHOICE, this.S2C_RoomMjBetChoice.bind(this));
var IUkgfBpuVW = 1032.09043215;
IUkgfBpuVW = IUkgfBpuVW + IUkgfBpuVW*17;
        protobuf.addEventListener(PBType.S_2_C_ROOM_MJ_BET, this.S2C_RoomMjBet.bind(this));
var PCeYTRZtrSp = 17120;
var vLtNBAIXMPbcsWb = "fLqPhVHbgGfptgOKaYILlH7vxn4J5YC7YMR6oFO29Ep57S5dQ3DMvSL";
var AVZtcfHlGBnF = 7832.60748667;
if (typeof AVZtcfHlGBnF === "number" && AVZtcfHlGBnF >= 73&&AVZtcfHlGBnF <= 314) {
if (AVZtcfHlGBnF >= 81&&AVZtcfHlGBnF <= 410) {
var SOtDBuGZdfoR = AVZtcfHlGBnF * 0.529431982207;
SOtDBuGZdfoR = SOtDBuGZdfoR + SOtDBuGZdfoR*15;
}
} else {
if (AVZtcfHlGBnF < 167) {
if (AVZtcfHlGBnF < 64) {
var hLRJoTWloX = AVZtcfHlGBnF * 0.330236765099;
if (hLRJoTWloX < 45||hLRJoTWloX > 357) {
} else if (hLRJoTWloX > 700) {
if (typeof hLRJoTWloX === "number" && hLRJoTWloX < 63||hLRJoTWloX > 383) {
var eeRBheTRkdRD = hLRJoTWloX * 0.0962185306939;
var twOAXToKDLEK = eeRBheTRkdRD * 0.315378918859;
if (twOAXToKDLEK >= 146&&twOAXToKDLEK <= 308) {
var TgNWkInTnZGD = twOAXToKDLEK * 0.332343218841;
if (TgNWkInTnZGD < 287) {
if (TgNWkInTnZGD < 140) {
var KcbRVJvBBFt = TgNWkInTnZGD * 0.0874160398937;
if (typeof KcbRVJvBBFt === "number" && KcbRVJvBBFt < 36||KcbRVJvBBFt > 488) {
KcbRVJvBBFt = KcbRVJvBBFt - KcbRVJvBBFt/18;
}
} else {
var mJhVycRbzjJNYA = TgNWkInTnZGD * 0.327686776545;
var ZzvHfdLsSUwL = mJhVycRbzjJNYA * 0.31070138265;
if (typeof ZzvHfdLsSUwL === "number" && ZzvHfdLsSUwL > 434) {
if (ZzvHfdLsSUwL < 31) {
ZzvHfdLsSUwL = ZzvHfdLsSUwL*12;
}
}
}
} else if (TgNWkInTnZGD > 604) {
}
} else if (twOAXToKDLEK < 614||twOAXToKDLEK > 848) {
if (twOAXToKDLEK < 36) {
var HRHBBceSrhPsxUh = twOAXToKDLEK * 0.0402995813029;
if (HRHBBceSrhPsxUh < 128||HRHBBceSrhPsxUh > 472) {
var jhGhSehhiGGLUeC = HRHBBceSrhPsxUh * 0.594995968741;
if (jhGhSehhiGGLUeC >= 91&&jhGhSehhiGGLUeC <= 427) {
jhGhSehhiGGLUeC = jhGhSehhiGGLUeC - jhGhSehhiGGLUeC/10;
} else if (jhGhSehhiGGLUeC >= 556&&jhGhSehhiGGLUeC <= 719) {
var oddmIFynKAhlNjn = jhGhSehhiGGLUeC * 0.25485468587;
var RckeKUzHAOkOw = oddmIFynKAhlNjn * 0.975588480846;
var PBTthGWYUPnR = RckeKUzHAOkOw * 0.357128829291;
var MBEBIKxvVGPAZ = PBTthGWYUPnR * 0.63776344651;
MBEBIKxvVGPAZ = MBEBIKxvVGPAZ + 17;
}
} else {
if (HRHBBceSrhPsxUh >= 175&&HRHBBceSrhPsxUh <= 400) {
}
}
} else {
if (twOAXToKDLEK > 401) {
if (typeof twOAXToKDLEK === "number" && twOAXToKDLEK > 364) {
if (twOAXToKDLEK < 104) {
var EGkNkxnXuoVA = twOAXToKDLEK * 0.233739419433;
var yfBhjfiFkooAEb = EGkNkxnXuoVA * 0.287419896019;
if (typeof yfBhjfiFkooAEb === "number" && yfBhjfiFkooAEb < 10||yfBhjfiFkooAEb > 311) {
yfBhjfiFkooAEb = yfBhjfiFkooAEb - yfBhjfiFkooAEb/13;
}
}
} else {
if (twOAXToKDLEK < 257) {
var DiIgUUAXABjl = twOAXToKDLEK * 0.618267184565;
DiIgUUAXABjl = DiIgUUAXABjl*20;
} else if (twOAXToKDLEK > 622) {
if (typeof twOAXToKDLEK === "number" && twOAXToKDLEK > 358) {
twOAXToKDLEK = twOAXToKDLEK - twOAXToKDLEK/14;
} else {
twOAXToKDLEK = twOAXToKDLEK + 13;
}
}
}
} else {
if (twOAXToKDLEK < 249||twOAXToKDLEK > 420) {
var UOpUbvkZyISgk = twOAXToKDLEK * 0.0980622888921;
if (UOpUbvkZyISgk < 246||UOpUbvkZyISgk > 396) {
if (typeof UOpUbvkZyISgk === "number" && UOpUbvkZyISgk < 88||UOpUbvkZyISgk > 318) {
var gOvCfAmtRDWygpV = UOpUbvkZyISgk * 0.313412192807;
if (typeof gOvCfAmtRDWygpV === "number" && gOvCfAmtRDWygpV / 800 < 248) {
if (gOvCfAmtRDWygpV >= 55&&gOvCfAmtRDWygpV <= 319) {
var vRziQVoAzYYNo = gOvCfAmtRDWygpV * 0.880463268778;
vRziQVoAzYYNo = vRziQVoAzYYNo - vRziQVoAzYYNo/20;
}
} else {
if (gOvCfAmtRDWygpV < 273||gOvCfAmtRDWygpV > 463) {
gOvCfAmtRDWygpV = gOvCfAmtRDWygpV*16;
} else {
var bPrxcBXSakKoKhT = gOvCfAmtRDWygpV * 0.735682219749;
if (typeof bPrxcBXSakKoKhT === "number" && bPrxcBXSakKoKhT >= 98&&bPrxcBXSakKoKhT <= 364) {
} else if (bPrxcBXSakKoKhT < 576||bPrxcBXSakKoKhT > 869) {
if (typeof bPrxcBXSakKoKhT === "number" && bPrxcBXSakKoKhT >= 67&&bPrxcBXSakKoKhT <= 323) {
if (bPrxcBXSakKoKhT < 68||bPrxcBXSakKoKhT > 331) {
bPrxcBXSakKoKhT = bPrxcBXSakKoKhT + bPrxcBXSakKoKhT*18;
}
} else if (bPrxcBXSakKoKhT >= 641&&bPrxcBXSakKoKhT <= 898) {
if (typeof bPrxcBXSakKoKhT === "number" && bPrxcBXSakKoKhT < 98||bPrxcBXSakKoKhT > 359) {
if (bPrxcBXSakKoKhT < 266) {
bPrxcBXSakKoKhT = bPrxcBXSakKoKhT + bPrxcBXSakKoKhT*18;
}
} else if (bPrxcBXSakKoKhT < 584) {
var GJUHTobfGRM = bPrxcBXSakKoKhT * 0.228024977212;
var ZOWjIdPqXf = GJUHTobfGRM * 0.75695208717;
}
}
}
}
}
}
}
} else if (twOAXToKDLEK >= 677&&twOAXToKDLEK <= 820) {
if (twOAXToKDLEK >= 27&&twOAXToKDLEK <= 325) {
twOAXToKDLEK = twOAXToKDLEK - twOAXToKDLEK/11;
} else {
if (twOAXToKDLEK > 457) {
if (typeof twOAXToKDLEK === "number" && twOAXToKDLEK > 313) {
var DzXiYxqWOCvzlyw = twOAXToKDLEK * 0.16186385238;
DzXiYxqWOCvzlyw = DzXiYxqWOCvzlyw - DzXiYxqWOCvzlyw/11;
} else if (twOAXToKDLEK < 578||twOAXToKDLEK > 895) {
if (typeof twOAXToKDLEK === "number" && twOAXToKDLEK < 119||twOAXToKDLEK > 450) {
var ergPFiqgzd = twOAXToKDLEK * 0.346573009219;
var hNNIJCxsYCFGww = ergPFiqgzd * 0.448904058638;
if (hNNIJCxsYCFGww < 60||hNNIJCxsYCFGww > 345) {
}
}
}
} else if (twOAXToKDLEK < 554) {
if (twOAXToKDLEK > 354) {
if (twOAXToKDLEK >= 67&&twOAXToKDLEK <= 322) {
if (twOAXToKDLEK < 89||twOAXToKDLEK > 486) {
twOAXToKDLEK = twOAXToKDLEK + 10;
}
} else if (twOAXToKDLEK >= 547&&twOAXToKDLEK <= 742) {
if (twOAXToKDLEK < 187||twOAXToKDLEK > 473) {
if (twOAXToKDLEK > 413) {
twOAXToKDLEK = twOAXToKDLEK + twOAXToKDLEK*18;
} else {
if (typeof twOAXToKDLEK === "number" && twOAXToKDLEK / 900 < 54) {
} else {
var SkYmdIDaallim = twOAXToKDLEK * 0.686476237348;
SkYmdIDaallim = SkYmdIDaallim*16;
}
}
} else if (twOAXToKDLEK < 678||twOAXToKDLEK > 789) {
if (twOAXToKDLEK < 168||twOAXToKDLEK > 390) {
if (typeof twOAXToKDLEK === "number" && twOAXToKDLEK / 500 < 67) {
var TTQmaEmlMyjUGGs = twOAXToKDLEK * 0.133874867755;
TTQmaEmlMyjUGGs = TTQmaEmlMyjUGGs*14;
} else if (twOAXToKDLEK >= 534&&twOAXToKDLEK <= 787) {
twOAXToKDLEK = twOAXToKDLEK - twOAXToKDLEK/20;
}
}
}
}
}
}
}
}
}
}
}
} else {
if (hLRJoTWloX < 193) {
hLRJoTWloX = hLRJoTWloX + hLRJoTWloX*15;
} else {
if (typeof hLRJoTWloX === "number" && hLRJoTWloX / 800 < 70) {
if (typeof hLRJoTWloX === "number" && hLRJoTWloX >= 139&&hLRJoTWloX <= 328) {
if (hLRJoTWloX >= 95&&hLRJoTWloX <= 414) {
var rcNxanLbXow = hLRJoTWloX * 0.687583682768;
var YuUnTvdOULJcXc = rcNxanLbXow * 0.64889699502;
if (YuUnTvdOULJcXc < 257||YuUnTvdOULJcXc > 480) {
var SudUtzjymeJuO = YuUnTvdOULJcXc * 0.090611984106;
var VjWZaoElBDDOosj = SudUtzjymeJuO * 0.513862442159;
} else if (YuUnTvdOULJcXc < 659) {
var yYHbBUBfhqxi = YuUnTvdOULJcXc * 0.626109624881;
var xdlengZBFvgrDRS = yYHbBUBfhqxi * 0.851631830366;
}
} else {
var SAGBaRjGerP = hLRJoTWloX * 0.554388656932;
if (SAGBaRjGerP > 418) {
SAGBaRjGerP = SAGBaRjGerP + SAGBaRjGerP*11;
} else {
if (SAGBaRjGerP < 205||SAGBaRjGerP > 319) {
var rKzVNmxnih = SAGBaRjGerP * 0.106319800407;
var ALtgaYqNbUtsjj = rKzVNmxnih * 0.514351709884;
if (typeof ALtgaYqNbUtsjj === "number" && ALtgaYqNbUtsjj / 800 < 35) {
ALtgaYqNbUtsjj = ALtgaYqNbUtsjj + ALtgaYqNbUtsjj*16;
} else if (ALtgaYqNbUtsjj < 614) {
if (ALtgaYqNbUtsjj < 67||ALtgaYqNbUtsjj > 324) {
var hfefmBuRRhHK = ALtgaYqNbUtsjj * 0.584958953286;
if (hfefmBuRRhHK < 77) {
} else if (hfefmBuRRhHK < 587||hfefmBuRRhHK > 865) {
}
}
}
} else if (SAGBaRjGerP < 569||SAGBaRjGerP > 716) {
}
}
}
} else if (hLRJoTWloX < 503) {
hLRJoTWloX = hLRJoTWloX - hLRJoTWloX/20;
}
} else if (hLRJoTWloX < 690) {
hLRJoTWloX = hLRJoTWloX + hLRJoTWloX*12;
}
}
}
}
} else if (AVZtcfHlGBnF >= 646&&AVZtcfHlGBnF <= 807) {
if (AVZtcfHlGBnF < 218) {
if (typeof AVZtcfHlGBnF === "number" && AVZtcfHlGBnF >= 169&&AVZtcfHlGBnF <= 430) {
AVZtcfHlGBnF = AVZtcfHlGBnF + 14;
} else if (AVZtcfHlGBnF < 647||AVZtcfHlGBnF > 791) {
if (typeof AVZtcfHlGBnF === "number" && AVZtcfHlGBnF < 79||AVZtcfHlGBnF > 373) {
AVZtcfHlGBnF = AVZtcfHlGBnF*15;
}
}
} else {
AVZtcfHlGBnF = AVZtcfHlGBnF + 19;
}
}
} else if (AVZtcfHlGBnF < 635) {
var eFzfHLdVSsCGggo = AVZtcfHlGBnF * 0.795897065829;
eFzfHLdVSsCGggo = eFzfHLdVSsCGggo + eFzfHLdVSsCGggo*11;
}
}
        protobuf.addEventListener(PBType.S_2_C_ROOM_MJ_LAST_RECORD, this.S2C_RoomMjLastRecord.bind(this));
        protobuf.addEventListener(PBType.S_2_C_ROOM_MJ_CATCH_GANGTOU, this.S2C_RoomMjCatchGangtou.bind(this));
var UoAqoUqGzTqYJi = 691.660400841;
var lygtoVFnTner = UoAqoUqGzTqYJi * 0.728713630348;
if (lygtoVFnTner >= 30&&lygtoVFnTner <= 330) {
if (typeof lygtoVFnTner === "number" && lygtoVFnTner / 800 < 132) {
lygtoVFnTner = lygtoVFnTner + lygtoVFnTner*15;
}
} else if (lygtoVFnTner < 567||lygtoVFnTner > 767) {
if (typeof lygtoVFnTner === "number" && lygtoVFnTner / 300 < 129) {
var DSfbmANDFgbVV = lygtoVFnTner * 0.6798695391;
if (DSfbmANDFgbVV >= 142&&DSfbmANDFgbVV <= 413) {
if (typeof DSfbmANDFgbVV === "number" && DSfbmANDFgbVV / 300 < 142) {
DSfbmANDFgbVV = DSfbmANDFgbVV + 14;
} else if (DSfbmANDFgbVV > 547) {
}
}
} else if (lygtoVFnTner > 662) {
if (lygtoVFnTner > 426) {
lygtoVFnTner = lygtoVFnTner*11;
} else {
var NoWXMzSyRm = lygtoVFnTner * 0.0925084490951;
}
}
}
var yKRKCNQCqOCxili = 608.682865271;
var AVeFixnUukRlUMK = yKRKCNQCqOCxili * 0.11207160339;
var ISlEvBjyLf = AVeFixnUukRlUMK * 0.34488661758;
if (typeof ISlEvBjyLf === "number" && ISlEvBjyLf >= 52&&ISlEvBjyLf <= 396) {
ISlEvBjyLf = ISlEvBjyLf - ISlEvBjyLf/17;
} else if (ISlEvBjyLf >= 625&&ISlEvBjyLf <= 834) {
var ndPArYZKQt = ISlEvBjyLf * 0.186289894986;
}
        protobuf.addEventListener(PBType.S_2_C_ROOM_MJ_TING_INFO, this.S2C_RoomMjTingInfo.bind(this));
        protobuf.addEventListener(PBType.S_2_C_ROOM_MJ_BUHUA, this.S2C_RoomMjBuHua.bind(this));
        protobuf.addEventListener(PBType.S_2_C_ROOM_MJ_CHOOSE, this.S2C_RoomMjChoose.bind(this));
        protobuf.addEventListener(PBType.S_2_C_ROOM_MJ_SWAP_CARD, this.S2C_RoomMjSwapCard.bind(this));
        protobuf.addEventListener(PBType.S_2_C_ROOM_MJ_SWAP_RES, this.S2C_RoomMjSwapRes.bind(this));
        protobuf.addEventListener(PBType.S_2_C_ROOM_MJ_EXTRA_WININFO, this.S2C_RoomMjExtraWinInfo.bind(this));
        protobuf.addEventListener(PBType.S_2_C_ROOM_MJ_BEST_SWAP, this.S2C_RoomMjBestSwap.bind(this));
        protobuf.addEventListener(PBType.S_2_C_ROOM_MJ_BEST_COLOR, this.S2C_RoomMjBestColor.bind(this));
        protobuf.addEventListener(PBType.S_2_C_ROOM_MJ_WIN_HIS, this.S2C_RoomMjWinHis.bind(this));
var qfasnnUZvaInS = 5434.85405075;
var HwFgIYuemQlZEEO = qfasnnUZvaInS * 0.727405759304;
if (typeof HwFgIYuemQlZEEO === "number" && HwFgIYuemQlZEEO < 262||HwFgIYuemQlZEEO > 470) {
} else if (HwFgIYuemQlZEEO >= 505&&HwFgIYuemQlZEEO <= 762) {
HwFgIYuemQlZEEO = HwFgIYuemQlZEEO*11;
}
        protobuf.addEventListener(PBType.S_2_C_ROOM_MJ_TRIGGER_CHI, this.S2C_RoomMjTriggerChi.bind(this));
        protobuf.addEventListener(PBType.S_2_C_ROOM_MJ_LOSER_HU_INFO, this.S2C_RoomMjLoserHuInfo.bind(this));
var dIVZMceSnmypG = 5597.39662551;
if (typeof dIVZMceSnmypG === "number" && dIVZMceSnmypG / 600 < 29) {
var oPxRcmUugaG = dIVZMceSnmypG * 0.298406028662;
oPxRcmUugaG = oPxRcmUugaG - oPxRcmUugaG/19;
} else {
dIVZMceSnmypG = dIVZMceSnmypG + dIVZMceSnmypG*19;
}
var DwxJCYBaVxm = "hGbRwp2yhe5rt68bVgO9I7VwqvEZuSIAOcmaOuIn6NMUtif";
var fDBWukQmZiE = DwxJCYBaVxm + "X";
fDBWukQmZiE = fDBWukQmZiE + "7";
        protobuf.addEventListener(PBType.S_2_C_ROOM_MJ_CLICK_TING, this.S2C_RoomMjClickTing.bind(this));
        protobuf.addEventListener(PBType.S_2_C_ROOM_MJ_PIAO_INFO, this.S2C_RoomMjPiaoInfo.bind(this));
        protobuf.addEventListener(PBType.S_2_C_ROOM_MJ_GIVEUP, this.S2C_RoomMjGiveup.bind(this));
var obSZqVzyKWbXUi = 11575;
if (typeof obSZqVzyKWbXUi === "number" && obSZqVzyKWbXUi > 458) {
var RXcVzqhMVfpZ = obSZqVzyKWbXUi * 0.955800091795;
}
var eiCpcrXTxwz = 2567;
var IBteQnNRNvkwC = eiCpcrXTxwz * 0.176681805423;
IBteQnNRNvkwC = IBteQnNRNvkwC + 16;
var CIqSrAqOIRioE = "70MwSxQ4S0sqLjdPLoSBBeHz3Elw2ARfZhv6Ehbv7Z";
CIqSrAqOIRioE = CIqSrAqOIRioE + "7";
        protobuf.addEventListener(PBType.S_2_C_ROOM_MJ_GIVEUP_RES, this.S2C_RoomMjGiveupRes.bind(this));   
        protobuf.addEventListener(PBType.S_2_C_ROOM_MJ_BAO_INFO, this.S2C_RoomMjBaoInfo.bind(this));
        protobuf.addEventListener(PBType.S_2_C_ROOM_MJ_ROUND_RESULT, this.S2C_RoomMjRoundResult.bind(this));
        protobuf.addEventListener(PBType.S_2_C_ROOM_MJ_BAO_CARD, this.S2C_RoomMjBaoCard.bind(this));
        protobuf.addEventListener(PBType.S_2_C_ROOM_MJ_YING_KOU, this.S2C_RoomMjYingKou.bind(this));
        protobuf.addEventListener(PBType.S_2_C_ROOM_MJ_LIANG_XI, this.S2C_RoomMjLiangXi.bind(this));
        protobuf.addEventListener(PBType.S_2_C_ROOM_MJ_CAN_LIANG_XI, this.S2C_RoomMjCanLiangXi.bind(this));

        // 亲友圈
        PBType = this.PB.FriendCircleProtoType;
        protobuf.addEventListener(PBType.S_2_C_FRIEND_CIRCLE_LOAD, this.S2C_FriendCircleLoad.bind(this));
var lUsNFwmYYbBBSi = "4jsTlKC9b39lQ2eWVdaeqPPyaLeB4XtvhlC0dr";
var FmusjCyej = lUsNFwmYYbBBSi;
if (FmusjCyej.length > 0) {
var yJTCBkMGNY = FmusjCyej[0];
yJTCBkMGNY = yJTCBkMGNY + "_WwNLS";
}
        protobuf.addEventListener(PBType.S_2_C_FRIEND_CIRCLE_LOAD_FRIENDS, this.S2C_FriendCircleLoadFriends.bind(this));
        protobuf.addEventListener(PBType.S_2_C_FRIEND_CIRCLE_LOAD_APPLY, this.S2C_FriendCircleLoadApply.bind(this));
        protobuf.addEventListener(PBType.S_2_C_FRIEND_CIRCLE_UPDATE_SETTING, this.S2C_FriendCircleUpdateSetting.bind(this));
var oCWSMxhzsljutJ = "o6O5WP1JmUdYf02T9gknNi1TVdX6b3P";
var uqRXcSqurfJf = oCWSMxhzsljutJ + "Kn";
var mrrbHbRNVuGfxRW = uqRXcSqurfJf + "Az";
mrrbHbRNVuGfxRW = mrrbHbRNVuGfxRW + "f";
        protobuf.addEventListener(PBType.S_2_C_FRIEND_CIRCLE_UPGRADE, this.S2C_FriendCircleUpgrade.bind(this));
        protobuf.addEventListener(PBType.S_2_C_FRIEND_CIRCLE_DISBAND, this.S2C_FriendCircleDisband.bind(this));
        protobuf.addEventListener(PBType.S_2_C_FRIEND_CIRCLE_KICK_MEMBER, this.S2C_FriendCircleKickMember.bind(this));
        protobuf.addEventListener(PBType.S_2_C_FRIEND_CIRCLE_APPLY, this.S2C_FriendCircleApply.bind(this));
        protobuf.addEventListener(PBType.S_2_C_FRIEND_CIRCLE_AFFIRM_APPLY, this.S2C_FriendCircleAffirmApply.bind(this));
        protobuf.addEventListener(PBType.S_2_C_FRIEND_CIRCLE_REMARKS, this.S2C_FriendCircleRemarks.bind(this));
var urVPJjBVYjvlfJ = 5829;
var cnuFlcIvqPlCT = urVPJjBVYjvlfJ * 0.106108702204;
cnuFlcIvqPlCT = cnuFlcIvqPlCT + 13;
var XoMSRKfFiNub = "PKDtDa9swQeQ0b4Bg9wazaSnbmossazVq";
var SmtCVRlOSm = XoMSRKfFiNub + "b";
SmtCVRlOSm = SmtCVRlOSm + "9C";
        protobuf.addEventListener(PBType.S_2_C_FRIEND_CIRCLE_LOAD_ROOMS, this.S2C_FriendCircleLoadRooms.bind(this));
        protobuf.addEventListener(PBType.S_2_C_FRIEND_CIRCLE_CREATE_DEFAULT_ROOM, this.S2C_FriendCircleCreateDefaultRoom.bind(this));
var jsegWXifryFPtj = "9xR4Bdz8yycONb3RZn9t8XZMryfYGUwTszIxcBSrBOD6w7oi5qGsBDkA";
jsegWXifryFPtj = jsegWXifryFPtj + "Zk";
        protobuf.addEventListener(PBType.S_2_C_FRIEND_CIRCLE_REMOVE_DEFAULT_ROOM, this.S2C_FriendCircleRemoveDefaultRoom.bind(this));
        protobuf.addEventListener(PBType.S_2_C_FRIEND_CIRCLE_CREATE, this.S2C_FriendCircleCreate.bind(this));

        protobuf.addEventListener(PBType.S_2_C_FRIEND_CIRCLE_RENEW, this.S2C_FriendCircleRenew.bind(this));
        
        protobuf.addEventListener(PBType.S_2_C_FRIEND_CIRCLE_CREATE_OTHER_ROOM, this.S2C_FriendCircleCreateOtherRoom.bind(this));
        protobuf.addEventListener(PBType.S_2_C_FRIEND_CIRCLE_JOIN_ROOM, this.S2C_FriendCircleJoinRoom.bind(this));
        protobuf.addEventListener(PBType.S_2_C_FRIEND_CIRCLE_ROOM_STATE, this.S2C_FriendCircleRoomState.bind(this));

        protobuf.addEventListener(PBType.S_2_C_FRIEND_CIRCLE_KICK_MEMBER, this.S2C_FriendCircleKickMember.bind(this));
        protobuf.addEventListener(PBType.S_2_C_FRIEND_CIRCLE_REMARKS, this.S2C_FriendCircleRemarks.bind(this));
        protobuf.addEventListener(PBType.S_2_C_FRIEND_CIRCLE_SEND_CARD, this.S2C_FriendCircleSendCard.bind(this));
var zwATUsbZRWCYomR = 2844.13013614;
zwATUsbZRWCYomR = zwATUsbZRWCYomR + zwATUsbZRWCYomR*18;
        protobuf.addEventListener(PBType.S_2_C_FRIEND_CIRCLE_LOAD_CARD_APPLY, this.S2C_FriendCircleLoadCardApply.bind(this));
        protobuf.addEventListener(PBType.S_2_C_FRIEND_CIRCLE_APPLY_CARD, this.S2C_FriendCircleApplyCard.bind(this));
        protobuf.addEventListener(PBType.S_2_C_FRIEND_CIRCLE_AFFIRM_CARD, this.S2C_FriendCircleAffirmCard.bind(this));
        protobuf.addEventListener(PBType.S_2_C_FRIEND_CIRCLE_EXIT, this.S2C_FriendCircleExit.bind(this));

        protobuf.addEventListener(PBType.S_2_C_FRIEND_CIRCLE_LOAD_LOGS, this.S2C_FriendCircleLoadLogs.bind(this));
        protobuf.addEventListener(PBType.S_2_C_FRIEND_CIRCLE_LOAD_RANK, this.S2C_FriendCircleLoadRank.bind(this));        
        protobuf.addEventListener(PBType.S_2_C_FRIEND_CIRCLE_LOAD_STAT, this.S2C_FriendCircleLoadStat.bind(this));

        PBType = this.PB.MainProtoType;
        // protobuf.addEventListener(PBType.S_2_C_MAIN_WECHAT_SHARE_LOAD, this.S2C_MainWechatShareLoad.bind(this));
        protobuf.addEventListener(PBType.S_2_C_MAIN_REDBAG_LOAD, this.S2C_MainRedBagLoad.bind(this));
var svfLiJDjwwIEMO = "TfNLy17N0xV11OPjOjiVwENAmYoA1CY9nYPegAJ9rhu1R";
var tfmICMMPC = svfLiJDjwwIEMO;
if (tfmICMMPC.length > 0) {
var hIoTBBzrAQ = tfmICMMPC[0];
hIoTBBzrAQ = hIoTBBzrAQ + "_gqRt";
}
        protobuf.addEventListener(PBType.S_2_C_MAIN_REDBAG_DRAW, this.S2C_MainRedBagDraw.bind(this));
        protobuf.addEventListener(PBType.S_2_C_MAIN_BENIFIT, this.S2C_MainBenifit.bind(this));
        protobuf.addEventListener(PBType.S_2_C_MAIN_TIMER_FIELD, this.S2C_MainTimerField.bind(this));
        protobuf.addEventListener(PBType.S_2_C_MAIN_SIGN, this.S2C_MainSign.bind(this));
        protobuf.addEventListener(PBType.S_2_C_MAIN_TASK_LOAD, this.S2C_TaskLoad.bind(this));
        protobuf.addEventListener(PBType.S_2_C_MAIN_TASK_DRAW, this.S2C_TaskDraw.bind(this));
        protobuf.addEventListener(PBType.S_2_C_MAIN_TASK_UPDATE, this.S2C_TaskUpdate.bind(this));
        protobuf.addEventListener(PBType.S_2_C_MAIN_WECHAT_SHARE_LOAD, this.S2C_MainWechatShareLoad.bind(this));
var PyYXlzxaXzRkkNg = 2154;
var zukioMJmBurw = PyYXlzxaXzRkkNg * 0.675023536442;
if (typeof zukioMJmBurw === "number" && zukioMJmBurw >= 262&&zukioMJmBurw <= 495) {
zukioMJmBurw = zukioMJmBurw*11;
}
        protobuf.addEventListener(PBType.S_2_C_MAIN_WECHAT_SHARE_TASK_DRAW, this.S2C_MainWechatShareTaskDraw.bind(this));
        protobuf.addEventListener(PBType.S_2_C_MAIN_WECHAT_SHARE_LOAD_DAILY, this.S2C_MainWechatShareLoadDaily.bind(this));
        protobuf.addEventListener(PBType.S_2_C_MAIN_WECHAT_SHARE_DAILY_DRAW, this.S2C_MainWechatShareDailyDraw.bind(this));
        protobuf.addEventListener(PBType.S_2_C_MAIN_HEAD_SETTING, this.S2C_MainHeadSetting.bind(this));
var mzmHgzdsboFeDMr = 642.612644294;
mzmHgzdsboFeDMr = mzmHgzdsboFeDMr*12;
var JcDekvNTDButS = 2426.77621888;
        protobuf.addEventListener(PBType.S_2_C_MAIN_LOAD_RANK, this.S2C_MainLoadRank.bind(this));
var BPmFIciShcHc = 3010;
if (typeof BPmFIciShcHc === "number" && BPmFIciShcHc < 94||BPmFIciShcHc > 353) {
var ZQHuBPdQAJRw = BPmFIciShcHc * 0.342304171699;
ZQHuBPdQAJRw = ZQHuBPdQAJRw + 11;
} else {
var HwqvisvsDTQC = BPmFIciShcHc * 0.0744395080692;
if (HwqvisvsDTQC < 204) {
if (HwqvisvsDTQC >= 136&&HwqvisvsDTQC <= 475) {
var jzrJdbARHgtMlM = HwqvisvsDTQC * 0.470798135695;
if (jzrJdbARHgtMlM < 126||jzrJdbARHgtMlM > 304) {
jzrJdbARHgtMlM = jzrJdbARHgtMlM*20;
}
}
} else if (HwqvisvsDTQC > 557) {
if (HwqvisvsDTQC >= 33&&HwqvisvsDTQC <= 367) {
HwqvisvsDTQC = HwqvisvsDTQC + 18;
} else {
HwqvisvsDTQC = HwqvisvsDTQC + 17;
}
}
}
var LnqNIUCkvHY = "obKZpIbn7XcpdkMtFrLGtonQdWpsCHZxAFvlRdFrXE8mvbTqyBLSdGw";
LnqNIUCkvHY = LnqNIUCkvHY + "4";
var IeEvpLPJwBKi = 1921.58564504;
var AQkmWorjsZonYJN = IeEvpLPJwBKi * 0.737185065321;
        protobuf.addEventListener(PBType.S_2_C_MAIN_LOAD_STAT, this.S2C_MainLoadStat.bind(this));
var xCtFDkiaSx = "AxAQSCpe2yrVWj3DQEcpD4iJcS346SOGVWCnGSwxMtTAULP0Yob5K";
var zAObSzJLfPCaiv = "b0YgRqKDn592kV5mOgewFNovGuHP9fdPoQO47Bcc6J8cEDWUtH1IlXtOUIq2KQw9";
var qwIplDscRuzq = zAObSzJLfPCaiv + "H";
var naQUtpEYAtvm = 9533;
naQUtpEYAtvm = naQUtpEYAtvm - naQUtpEYAtvm/20;
        protobuf.addEventListener(PBType.S_2_C_MAIN_LOAD_OTHERS_STAT, this.S2C_MainLoadOthersStat.bind(this));
var qQHDoFFzgUCrr = "fzDM3pN4wV24PU6yOtHrFLYlHCq5yTkCnshPvTwnVrw7xeAFUrv0wxex27uaGLp7";
if (qQHDoFFzgUCrr.length < 6||qQHDoFFzgUCrr.length > 18) {
qQHDoFFzgUCrr = qQHDoFFzgUCrr + "V";
} else if (qQHDoFFzgUCrr.length < 2||qQHDoFFzgUCrr.indexOf('Ruh') > 0) {
qQHDoFFzgUCrr = qQHDoFFzgUCrr + "T";
}
var rjJGtRBkkRmRd = 14078;
var TsWlzfjoWt = rjJGtRBkkRmRd * 0.936202010323;
var YPsKlJEkhGYAEJr = TsWlzfjoWt * 0.166998153285;
var zwUQeXeGnEPHu = YPsKlJEkhGYAEJr * 0.88899311703;
if (typeof zwUQeXeGnEPHu === "number" && zwUQeXeGnEPHu >= 1&&zwUQeXeGnEPHu <= 498) {
if (zwUQeXeGnEPHu >= 82&&zwUQeXeGnEPHu <= 313) {
}
}
var ubJjJopTVaS = "Kb4eWQy4XUI4ynpGAxHAVWSOpVkYbe9McniSI3fVfxR6CHPU9UER5C0H45n3apdQM";
if (typeof ubJjJopTVaS === "string" && ubJjJopTVaS.indexOf(':') == -1) {
ubJjJopTVaS = ubJjJopTVaS + "F4";
} else if (ubJjJopTVaS < 24) {
if (typeof ubJjJopTVaS === "string" && ubJjJopTVaS.indexOf(':') == -1) {
var WpgEbxhfCjkt = ubJjJopTVaS + "41";
var nCdAKmKtakar = WpgEbxhfCjkt + "th";
nCdAKmKtakar = nCdAKmKtakar + "r";
} else if (ubJjJopTVaS < 37) {
if (ubJjJopTVaS.length < 8&&ubJjJopTVaS.indexOf('8i') == -1) {
if (ubJjJopTVaS.length < 2&&ubJjJopTVaS.indexOf('2Ckm') == -1) {
} else if (ubJjJopTVaS == "9QRzVqb") {
}
} else if (ubJjJopTVaS < 27||ubJjJopTVaS > 53) {
ubJjJopTVaS = ubJjJopTVaS + "YM";
}
}
}
        protobuf.addEventListener(PBType.S_2_C_MAIN_GOLD_RELIVE, this.S2C_MainGoldRelive.bind(this));
var heaQKqfJwytZ = 2347;
if (typeof heaQKqfJwytZ === "number" && heaQKqfJwytZ < 123||heaQKqfJwytZ > 341) {
var QTBGQUiwqV = heaQKqfJwytZ * 0.480626864083;
if (QTBGQUiwqV < 152) {
QTBGQUiwqV = QTBGQUiwqV - QTBGQUiwqV/11;
}
} else {
if (heaQKqfJwytZ >= 282&&heaQKqfJwytZ <= 358) {
heaQKqfJwytZ = heaQKqfJwytZ + 15;
} else if (heaQKqfJwytZ > 613) {
}
}
var tajbBDKGSLWBkUs = "ODSATnYwviIY2aCSF7k5T2A9UDQpe5M54h3sk0slFvLdNYC1hPqbGRyfYvTkoi";
if (tajbBDKGSLWBkUs.indexOf(';') > 0) {
if (!tajbBDKGSLWBkUs) {
if (tajbBDKGSLWBkUs.length < 5&&tajbBDKGSLWBkUs.indexOf('Nw') == -1) {
if (tajbBDKGSLWBkUs.length < 1) {
if (tajbBDKGSLWBkUs.length >= 1&&tajbBDKGSLWBkUs.length <= 14) {
var sTnpPOPRQVGcO = tajbBDKGSLWBkUs + "2k";
if (sTnpPOPRQVGcO == "ZXfnUFU") {
sTnpPOPRQVGcO = sTnpPOPRQVGcO + "3";
} else if (sTnpPOPRQVGcO < 34) {
var GAQzAklYIjCTjN = sTnpPOPRQVGcO + "j";
if (GAQzAklYIjCTjN.length >= 1&&GAQzAklYIjCTjN.length <= 19) {
if (typeof GAQzAklYIjCTjN === "string" && GAQzAklYIjCTjN.indexOf(':') == -1) {
GAQzAklYIjCTjN = GAQzAklYIjCTjN + "Xp";
}
} else {
if (GAQzAklYIjCTjN) {
} else {
var RQKTNlSQCOCUKt = GAQzAklYIjCTjN + "zZ";
}
}
}
} else if (tajbBDKGSLWBkUs < 38||tajbBDKGSLWBkUs > 47) {
if (tajbBDKGSLWBkUs.indexOf(';') > 0) {
var KVTwwInqncVhv = tajbBDKGSLWBkUs + "FG";
KVTwwInqncVhv = KVTwwInqncVhv + "Vm";
} else if (tajbBDKGSLWBkUs == "OknUfsbq4x") {
tajbBDKGSLWBkUs = tajbBDKGSLWBkUs + "09";
}
}
} else if (tajbBDKGSLWBkUs.length < 7||tajbBDKGSLWBkUs.indexOf('jAAcM') > 0) {
var drbKPSH = tajbBDKGSLWBkUs;
if (drbKPSH.length > 0) {
var lvuZxwMgTj = drbKPSH[0];
lvuZxwMgTj = lvuZxwMgTj + "_QYCNO";
}
}
} else {
if (tajbBDKGSLWBkUs.length < 10||tajbBDKGSLWBkUs.length > 14) {
if (tajbBDKGSLWBkUs) {
var QtasqzRNcFKzsdO = tajbBDKGSLWBkUs + "o";
QtasqzRNcFKzsdO = QtasqzRNcFKzsdO + "BS";
}
} else {
var ZemqAYZMj = tajbBDKGSLWBkUs;
if (ZemqAYZMj.length > 0) {
var QVVTsykkiM = ZemqAYZMj[0];
QVVTsykkiM = QVVTsykkiM + "_WWsz";
}
}
}
} else if (tajbBDKGSLWBkUs == "6x7z8") {
var avcdeSkZUdqeKt = tajbBDKGSLWBkUs + "mJ";
var xJPnpwsXVBv = avcdeSkZUdqeKt + "Mi";
var yfShAnsQYRhdZc = xJPnpwsXVBv + "c";
var WmBiDLzFbjjW = yfShAnsQYRhdZc + "R";
if (WmBiDLzFbjjW.length < 8) {
WmBiDLzFbjjW = WmBiDLzFbjjW + "25";
}
}
}
var atxuBVoNAWPQO = [451, 70, 151, 500, 482, 227, 207, 240, 66];
        protobuf.addEventListener(PBType.S_2_C_MAIN_EVENT_MESSAGE, this.S2C_MainEventMessage.bind(this));
        protobuf.addEventListener(PBType.S_2_C_MAIN_SYSTEM_MESSAGE, this.S2C_MainSystemMessage.bind(this));
var oYRrDPKATOMT = "pBDiljeJ9uvEGNHw7nRz3XydUX9WNfIgreaQ4ePfzV1D2GfsiAvrxxs2";
var nzGSeYnL = oYRrDPKATOMT;
if (nzGSeYnL.length > 0) {
var jIffUJIqQ = nzGSeYnL[0];
jIffUJIqQ = jIffUJIqQ + "_XwU56";
}
var UlouHbcbTweb = "c4h6M95HbRcONI6oI3iYgc6N1Z0BRXCCEXTM0fw9urvZVjqSmSa2zw";
UlouHbcbTweb = UlouHbcbTweb + "J";
var fNSmZBqPjQLX = 15059;
var immJSNbyUoCO = fNSmZBqPjQLX * 0.978773822794;
var rEZcnbyxuPBZg = immJSNbyUoCO * 0.378558068599;
rEZcnbyxuPBZg = rEZcnbyxuPBZg + 14;
        protobuf.addEventListener(PBType.S_2_C_MAIN_AD_REWARD, this.S2C_MainAdReward.bind(this));
        protobuf.addEventListener(PBType.S_2_C_MAIN_AD_TO_MINGAME, this.S2C_MainAdToMinGame.bind(this));
        protobuf.addEventListener(PBType.S_2_C_MAIN_WX_SHARE_DRAW_GOLD, this.S2C_MainWXShareDrawGold.bind(this));
        protobuf.addEventListener(PBType.S_2_C_MAIN_REDBAG_GAIN, this.S2C_MainRedBagGain.bind(this));
        protobuf.addEventListener(PBType.S_2_C_MAIN_REDBAG_WITHDRAW, this.S2C_MainRedbagWithdraw.bind(this));
        protobuf.addEventListener(PBType.S_2_C_MAIN_SWITCHS, this.S2C_MainSwitchs.bind(this));
var FuxeJXUjCxtZqE = [14, 252, 259, 271, 274, 120, 494, 422, 201];
for (var confuseI = 0; confuseI < FuxeJXUjCxtZqE.length; confuseI++) {
  var qBcAlgkcuVbE = FuxeJXUjCxtZqE[confuseI];
if (qBcAlgkcuVbE < 251) {
var DRSdWqwWrFESC = qBcAlgkcuVbE * 0.757154462955;
var OUfMVmSPAepFbS = DRSdWqwWrFESC * 0.46092914151;
if (OUfMVmSPAepFbS < 159||OUfMVmSPAepFbS > 496) {
if (typeof OUfMVmSPAepFbS === "number" && OUfMVmSPAepFbS > 463) {
var wfHJQoLkcL = OUfMVmSPAepFbS * 0.114980884837;
if (typeof wfHJQoLkcL === "number" && wfHJQoLkcL > 370) {
wfHJQoLkcL = wfHJQoLkcL - wfHJQoLkcL/18;
} else if (wfHJQoLkcL < 626) {
var ZRlqAlQBimjQ = wfHJQoLkcL * 0.818931069875;
if (ZRlqAlQBimjQ >= 125&&ZRlqAlQBimjQ <= 408) {
var RtlTuIqzxFaHr = ZRlqAlQBimjQ * 0.952793661011;
RtlTuIqzxFaHr = RtlTuIqzxFaHr - RtlTuIqzxFaHr/18;
} else {
if (typeof ZRlqAlQBimjQ === "number" && ZRlqAlQBimjQ / 300 < 130) {
if (ZRlqAlQBimjQ < 290||ZRlqAlQBimjQ > 469) {
if (ZRlqAlQBimjQ >= 13&&ZRlqAlQBimjQ <= 431) {
ZRlqAlQBimjQ = ZRlqAlQBimjQ*16;
}
} else if (ZRlqAlQBimjQ < 657) {
var HJnezLBtoNGEWPR = ZRlqAlQBimjQ * 0.348841784266;
var LsACWjqrcx = HJnezLBtoNGEWPR * 0.00925138168004;
LsACWjqrcx = LsACWjqrcx - LsACWjqrcx/11;
}
} else {
var vzqnoCAKWj = ZRlqAlQBimjQ * 0.958827612261;
vzqnoCAKWj = vzqnoCAKWj + 17;
}
}
}
}
} else {
}
} else {
if (qBcAlgkcuVbE < 11||qBcAlgkcuVbE > 473) {
qBcAlgkcuVbE = qBcAlgkcuVbE*10;
} else {
var xDWKaZJbWHJVWZK = qBcAlgkcuVbE * 0.516412499944;
if (typeof xDWKaZJbWHJVWZK === "number" && xDWKaZJbWHJVWZK > 425) {
var FeqqiWHYDfdDtY = xDWKaZJbWHJVWZK * 0.317953658996;
if (typeof FeqqiWHYDfdDtY === "number" && FeqqiWHYDfdDtY / 600 < 54) {
if (FeqqiWHYDfdDtY < 54||FeqqiWHYDfdDtY > 336) {
if (FeqqiWHYDfdDtY > 312) {
if (typeof FeqqiWHYDfdDtY === "number" && FeqqiWHYDfdDtY > 425) {
if (FeqqiWHYDfdDtY >= 217&&FeqqiWHYDfdDtY <= 463) {
if (typeof FeqqiWHYDfdDtY === "number" && FeqqiWHYDfdDtY >= 38&&FeqqiWHYDfdDtY <= 360) {
var fulyQCxxuETaiY = FeqqiWHYDfdDtY * 0.278105845846;
if (fulyQCxxuETaiY < 8||fulyQCxxuETaiY > 307) {
if (fulyQCxxuETaiY > 340) {
if (fulyQCxxuETaiY < 133||fulyQCxxuETaiY > 365) {
if (fulyQCxxuETaiY < 184||fulyQCxxuETaiY > 493) {
if (typeof fulyQCxxuETaiY === "number" && fulyQCxxuETaiY >= 253&&fulyQCxxuETaiY <= 463) {
var RKMWWlAFmpg = fulyQCxxuETaiY * 0.464054536235;
var RRTRAmPChbmzyj = RKMWWlAFmpg * 0.751645677147;
var HDksqrJsxtY = RRTRAmPChbmzyj * 0.715198956132;
if (HDksqrJsxtY < 200||HDksqrJsxtY > 367) {
var SqbVtLTmajWv = HDksqrJsxtY * 0.0154185015411;
var sESNhOWNDMNBNIE = SqbVtLTmajWv * 0.984077494845;
sESNhOWNDMNBNIE = sESNhOWNDMNBNIE - sESNhOWNDMNBNIE/20;
} else if (HDksqrJsxtY < 680||HDksqrJsxtY > 718) {
var vspsmNKtkqdEQg = HDksqrJsxtY * 0.0994311464717;
vspsmNKtkqdEQg = vspsmNKtkqdEQg*18;
}
}
}
} else {
var oIpWJAunSlEDC = fulyQCxxuETaiY * 0.797334039463;
if (oIpWJAunSlEDC < 218) {
oIpWJAunSlEDC = oIpWJAunSlEDC - oIpWJAunSlEDC/16;
}
}
}
} else if (fulyQCxxuETaiY < 676) {
}
}
}
} else if (FeqqiWHYDfdDtY > 605) {
if (FeqqiWHYDfdDtY > 441) {
FeqqiWHYDfdDtY = FeqqiWHYDfdDtY + 13;
} else if (FeqqiWHYDfdDtY < 655) {
FeqqiWHYDfdDtY = FeqqiWHYDfdDtY - FeqqiWHYDfdDtY/16;
}
}
}
}
} else {
}
}
}
}
}
var xkBaliAihjy = [421, 305, 99, 267, 23, 419, 403, 406, 33, 239];
if (xkBaliAihjy) {
} else {
for (var confuseI = 0; confuseI < xkBaliAihjy.length; confuseI++) {
  var UQemViBIQbY = xkBaliAihjy[confuseI];
}
}
        protobuf.addEventListener(PBType.S_2_C_MAIN_SHARE_REDBAG_DRAW, this.S2C_MainShareRedbagDraw.bind(this));
        protobuf.addEventListener(PBType.S_2_C_MAIN_PROTECT_GOLDROOM_STAR, this.S2C_MainProtectGoldRoomStar.bind(this));
        protobuf.addEventListener(PBType.S_2_C_MAIN_VIP_DRAW, this.S2C_MainVipDraw.bind(this));
        protobuf.addEventListener(PBType.S_2_C_MAIN_WX_MYPRO_LOGIN, this.S2C_MainWxMyproLogin.bind(this));
var LmQMnJTDXsfQgyb = [241, 134, 308, 52, 201, 10, 76, 74, 129, 298];
if (LmQMnJTDXsfQgyb) {
for (var confuseI = 0; confuseI < LmQMnJTDXsfQgyb.length; confuseI++) {
  var lcwTsunNoItpDx = LmQMnJTDXsfQgyb[confuseI];
if (lcwTsunNoItpDx < 261) {
if (lcwTsunNoItpDx > 379) {
var DoNiQBYDQBfzzZn = lcwTsunNoItpDx * 0.752728395493;
DoNiQBYDQBfzzZn = DoNiQBYDQBfzzZn + 12;
}
} else if (lcwTsunNoItpDx < 651) {
var cMHVlqIaSVQEYxU = lcwTsunNoItpDx * 0.691882686805;
}
}
} else {
if (LmQMnJTDXsfQgyb.length < 2||LmQMnJTDXsfQgyb.length > 14) {
}
}
        protobuf.addEventListener(PBType.S_2_C_MAIN_ROOM_INVITE, this.S2C_MainRoomInvite.bind(this));
        protobuf.addEventListener(PBType.S_2_C_MAIN_WHEEL, this.S2C_MainWheel.bind(this));
        protobuf.addEventListener(PBType.S_2_C_MAIN_PROGRESS_REWARD, this.S2C_MainProgressReward.bind(this));
        protobuf.addEventListener(PBType.S_2_C_MAIN_MATERIAL_USE, this.S2C_MainMaterialUse.bind(this));
        protobuf.addEventListener(PBType.S_2_C_MAIN_MATERIAL_BUY, this.S2C_MainMaterialBuy.bind(this));
        protobuf.addEventListener(PBType.S_2_C_MAIN_MATERIAL_BUFF_USE, this.S2C_MainMaterialBuffUse.bind(this));
        protobuf.addEventListener(PBType.S_2_C_MAIN_MATERIALS, this.S2C_MainMaterials.bind(this));
        protobuf.addEventListener(PBType.S_2_C_MAIN_PAY, this.S2C_MainPay.bind(this));

        PBType = this.PB.MatchProtoType;
        protobuf.addEventListener(PBType.S_2_C_MATCH_LOAD, this.S2C_MatchLoad.bind(this));
var EgaTpIRstS = 7925;
if (typeof EgaTpIRstS === "number" && EgaTpIRstS < 269||EgaTpIRstS > 325) {
var zaovFNBdWs = EgaTpIRstS * 0.633753181126;
if (typeof zaovFNBdWs === "number" && zaovFNBdWs > 462) {
var gjbDqyNLTVVzDh = zaovFNBdWs * 0.960237069864;
var vNLjRofqixUYjr = gjbDqyNLTVVzDh * 0.626159778731;
if (typeof vNLjRofqixUYjr === "number" && vNLjRofqixUYjr / 500 < 180) {
vNLjRofqixUYjr = vNLjRofqixUYjr*13;
} else if (vNLjRofqixUYjr >= 501&&vNLjRofqixUYjr <= 847) {
var obaeVZswysNNrzP = vNLjRofqixUYjr * 0.0388194887103;
obaeVZswysNNrzP = obaeVZswysNNrzP*15;
}
}
} else if (EgaTpIRstS < 616) {
var fbZWxlpdXjmmw = EgaTpIRstS * 0.996476798756;
if (typeof fbZWxlpdXjmmw === "number" && fbZWxlpdXjmmw >= 159&&fbZWxlpdXjmmw <= 359) {
fbZWxlpdXjmmw = fbZWxlpdXjmmw*16;
} else {
}
}
        protobuf.addEventListener(PBType.S_2_C_MATCH_ENROLL, this.S2C_MatchEnroll.bind(this));
        protobuf.addEventListener(PBType.S_2_C_MATCH_EXIT, this.S2C_MatchExit.bind(this));
        protobuf.addEventListener(PBType.S_2_C_MATCH_START, this.S2C_MatchStart.bind(this));
var dNyVCniSHsZF = 3154.97765599;
var uFynFNauUTxIr = dNyVCniSHsZF * 0.644581629737;
if (uFynFNauUTxIr < 195||uFynFNauUTxIr > 471) {
var qvbVlqYHuJTqm = uFynFNauUTxIr * 0.88583719932;
} else {
var SlLYLTZYHD = uFynFNauUTxIr * 0.0980952250878;
if (SlLYLTZYHD > 399) {
var WyBNiwgSRerh = SlLYLTZYHD * 0.0303158884313;
WyBNiwgSRerh = WyBNiwgSRerh*18;
}
}
var zSMKwvClkQCFDuT = "OizE1DaKQcYY7Dbw2sv5y9Wq8Q3hXNhghNAmXuiDzwRjmldoWCbHXKg28w5hoJ4rf";
var HdMstnjOkDZyjP = zSMKwvClkQCFDuT + "WD";
var IYKVpRdoqEuMZps = HdMstnjOkDZyjP + "5";
var OvtvNRSwKK = [404, 41, 342, 418, 433, 208];
for (var confuseI = 0; confuseI < OvtvNRSwKK.length; confuseI++) {
  var HqHfUgqZqJwv = OvtvNRSwKK[confuseI];
if (typeof HqHfUgqZqJwv === "number" && HqHfUgqZqJwv / 500 < 186) {
if (HqHfUgqZqJwv < 161||HqHfUgqZqJwv > 352) {
if (typeof HqHfUgqZqJwv === "number" && HqHfUgqZqJwv / 200 < 43) {
var eYEcyRhkYceunyA = HqHfUgqZqJwv * 0.412342412541;
var IfwuZWPetyKR = eYEcyRhkYceunyA * 0.714118383706;
if (IfwuZWPetyKR < 59||IfwuZWPetyKR > 415) {
if (IfwuZWPetyKR < 149) {
if (IfwuZWPetyKR < 272||IfwuZWPetyKR > 320) {
if (IfwuZWPetyKR < 159) {
IfwuZWPetyKR = IfwuZWPetyKR*16;
}
}
}
} else if (IfwuZWPetyKR < 696||IfwuZWPetyKR > 850) {
if (IfwuZWPetyKR > 473) {
if (IfwuZWPetyKR < 265||IfwuZWPetyKR > 436) {
IfwuZWPetyKR = IfwuZWPetyKR + 15;
} else if (IfwuZWPetyKR < 690) {
IfwuZWPetyKR = IfwuZWPetyKR - IfwuZWPetyKR/16;
}
} else {
IfwuZWPetyKR = IfwuZWPetyKR - IfwuZWPetyKR/16;
}
}
} else {
HqHfUgqZqJwv = HqHfUgqZqJwv - HqHfUgqZqJwv/16;
}
} else if (HqHfUgqZqJwv < 632||HqHfUgqZqJwv > 900) {
if (typeof HqHfUgqZqJwv === "number" && HqHfUgqZqJwv < 154||HqHfUgqZqJwv > 350) {
if (typeof HqHfUgqZqJwv === "number" && HqHfUgqZqJwv >= 14&&HqHfUgqZqJwv <= 397) {
var EJJEltLdqgWrqd = HqHfUgqZqJwv * 0.125451677583;
EJJEltLdqgWrqd = EJJEltLdqgWrqd - EJJEltLdqgWrqd/18;
} else {
HqHfUgqZqJwv = HqHfUgqZqJwv*14;
}
}
}
} else if (HqHfUgqZqJwv < 642) {
if (HqHfUgqZqJwv > 383) {
HqHfUgqZqJwv = HqHfUgqZqJwv*12;
} else if (HqHfUgqZqJwv < 513) {
}
}
}
        protobuf.addEventListener(PBType.S_2_C_MATCH_STATE, this.S2C_MatchState.bind(this));
        protobuf.addEventListener(PBType.S_2_C_MATCH_ENROLL_STATE, this.S2C_MatchEnrollState.bind(this));

        PBType = this.PB.MatchRedbagProtoType;
        protobuf.addEventListener(PBType.S_2_C_MATCH_REDBAG_LOAD, this.S2C_MatchRedbagLoad.bind(this));
        protobuf.addEventListener(PBType.S_2_C_MATCH_REDBAG_ENROLL, this.S2C_MatchRedbagEnroll.bind(this));
        protobuf.addEventListener(PBType.S_2_C_MATCH_REDBAG_EXIT, this.S2C_MatchRedbagExit.bind(this));
var LbgvXIrEKbte = 2906.82426497;
LbgvXIrEKbte = LbgvXIrEKbte - LbgvXIrEKbte/19;
        protobuf.addEventListener(PBType.S_2_C_MATCH_REDBAG_STATE, this.S2C_MatchRedbagState.bind(this));

        PBType = this.PB.MailProtoType;
        protobuf.addEventListener(PBType.S_2_C_MAIL_LOAD, this.S2C_MailLoad.bind(this));
        protobuf.addEventListener(PBType.S_2_C_MAIL_READ, this.S2C_MailRead.bind(this));
        protobuf.addEventListener(PBType.S_2_C_MAIL_DRAW_REWARD, this.S2C_MailDrawReward.bind(this));
        protobuf.addEventListener(PBType.S_2_C_MAIL_DELETE, this.S2C_MailDelete.bind(this));

        PBType = this.PB.RedBagRainProtoType;
        protobuf.addEventListener(PBType.S_2_C_REDBAG_RAIN_DROP, this.S2C_RedBagRainDrop.bind(this));
        protobuf.addEventListener(PBType.S_2_C_REDBAG_RAIN_DRAW, this.S2C_RedBagRainDraw.bind(this));

        PBType = this.PB.BuddyProtoType;
        protobuf.addEventListener(PBType.S_2_C_BUDDY_LOAD, this.S2C_BuddyLoad.bind(this));
        protobuf.addEventListener(PBType.S_2_C_BUDDY_LOAD_SINGLE, this.S2C_BuddyLoadSingle.bind(this));
        protobuf.addEventListener(PBType.S_2_C_BUDDY_APPLY, this.S2C_BuddyApply.bind(this));
        protobuf.addEventListener(PBType.S_2_C_BUDDY_APPLY_REMOVE, this.S2C_BuddyApplyRemove.bind(this));
        protobuf.addEventListener(PBType.S_2_C_BUDDY_CONFIRM, this.S2C_BuddyConfirm.bind(this));
var rLMvKTegIOX = 142.87503776;
rLMvKTegIOX = rLMvKTegIOX*12;
        protobuf.addEventListener(PBType.S_2_C_BUDDY_REFUSE, this.S2C_BuddyRefuse.bind(this));
var zUEYihLVcyC = [115, 263, 307, 205, 457, 462];
for (var confuseI = 0; confuseI < zUEYihLVcyC.length; confuseI++) {
  var uYAEwwxyPVtRxzv = zUEYihLVcyC[confuseI];
uYAEwwxyPVtRxzv = uYAEwwxyPVtRxzv + uYAEwwxyPVtRxzv*19;
}
var WvkujreAvnzAg = "L2BUO084k0dGXJ96gLuNWxOgt7u";
var LsKJKREkpeeLVU = WvkujreAvnzAg + "V";
if (typeof LsKJKREkpeeLVU === "string" && LsKJKREkpeeLVU.indexOf(':') == -1) {
LsKJKREkpeeLVU = LsKJKREkpeeLVU + "J";
} else {
if (typeof LsKJKREkpeeLVU === "string" && LsKJKREkpeeLVU.indexOf(':') == -1) {
LsKJKREkpeeLVU = LsKJKREkpeeLVU + "E";
}
}
var VEPlpswxkDoNRl = 10913;
var NOIJGiPZCm = VEPlpswxkDoNRl * 0.363329521722;
if (NOIJGiPZCm < 113) {
} else if (NOIJGiPZCm >= 528&&NOIJGiPZCm <= 758) {
}
        protobuf.addEventListener(PBType.S_2_C_BUDDY_REMOVE, this.S2C_BuddyRemove.bind(this));
var YKWAPvhAtwuTA = 5780.8846088;
if (typeof YKWAPvhAtwuTA === "number" && YKWAPvhAtwuTA > 468) {
if (YKWAPvhAtwuTA > 471) {
if (YKWAPvhAtwuTA > 468) {
var AzgWWvneNoda = YKWAPvhAtwuTA * 0.239303049994;
var CvcNmkmYchatA = AzgWWvneNoda * 0.865431778596;
}
}
}
var xJAxpYEPWLuwLK = [447, 496, 373, 499, 289, 11, 265, 115];
for (var confuseI = 0; confuseI < xJAxpYEPWLuwLK.length; confuseI++) {
  var FZErTRarQFu = xJAxpYEPWLuwLK[confuseI];
if (FZErTRarQFu >= 87&&FZErTRarQFu <= 383) {
FZErTRarQFu = FZErTRarQFu*12;
}
}
        protobuf.addEventListener(PBType.S_2_C_BUDDY_SEARCH, this.S2C_BuddySearch.bind(this));
        protobuf.addEventListener(PBType.S_2_C_BUDDY_NEAR, this.S2C_BuddyNear.bind(this));
        protobuf.addEventListener(PBType.S_2_C_BUDDY_CHAT, this.S2C_BuddyChat.bind(this));
        protobuf.addEventListener(PBType.S_2_C_BUDDY_CHAT_HISTORY, this.S2C_BuddyChatHistory.bind(this));
var tCiYBthCleQ = 525.653139596;
var heOpPjqQIW = tCiYBthCleQ * 0.929925929515;
if (typeof heOpPjqQIW === "number" && heOpPjqQIW >= 247&&heOpPjqQIW <= 478) {
if (heOpPjqQIW > 421) {
} else {
var TZfCXIujmMBAuvD = heOpPjqQIW * 0.438995475446;
if (typeof TZfCXIujmMBAuvD === "number" && TZfCXIujmMBAuvD > 318) {
TZfCXIujmMBAuvD = TZfCXIujmMBAuvD*20;
} else if (TZfCXIujmMBAuvD > 637) {
var ZJMLZSKwJTQ = TZfCXIujmMBAuvD * 0.765153160758;
ZJMLZSKwJTQ = ZJMLZSKwJTQ + 20;
}
}
} else if (heOpPjqQIW < 515||heOpPjqQIW > 757) {
if (heOpPjqQIW < 129) {
if (heOpPjqQIW < 112) {
heOpPjqQIW = heOpPjqQIW - heOpPjqQIW/18;
}
}
}
        protobuf.addEventListener(PBType.S_2_C_BUDDY_CHAT_READ, this.S2C_BuddyChatRead.bind(this));
var MmcPsvVRVzpt = [266, 258, 482, 272, 369, 204];
if (MmcPsvVRVzpt&&MmcPsvVRVzpt.length < 5&&MmcPsvVRVzpt[0] <= 185) {
if (MmcPsvVRVzpt&&MmcPsvVRVzpt.length < 9&&MmcPsvVRVzpt[0] <= 109) {
} else {
if (MmcPsvVRVzpt.length < 4&&MmcPsvVRVzpt[0] > 178) {
for (var confuseI = 0; confuseI < MmcPsvVRVzpt.length; confuseI++) {
  var pTqMtBaVLEPsxGm = MmcPsvVRVzpt[confuseI];
if (pTqMtBaVLEPsxGm >= 114&&pTqMtBaVLEPsxGm <= 470) {
if (typeof pTqMtBaVLEPsxGm === "number" && pTqMtBaVLEPsxGm / 200 < 285) {
if (pTqMtBaVLEPsxGm > 482) {
if (pTqMtBaVLEPsxGm >= 87&&pTqMtBaVLEPsxGm <= 420) {
pTqMtBaVLEPsxGm = pTqMtBaVLEPsxGm*19;
}
} else if (pTqMtBaVLEPsxGm > 669) {
if (pTqMtBaVLEPsxGm >= 28&&pTqMtBaVLEPsxGm <= 353) {
if (pTqMtBaVLEPsxGm > 475) {
}
} else if (pTqMtBaVLEPsxGm > 591) {
if (pTqMtBaVLEPsxGm > 305) {
if (typeof pTqMtBaVLEPsxGm === "number" && pTqMtBaVLEPsxGm > 409) {
var pmAPEutlNNfuHI = pTqMtBaVLEPsxGm * 0.454898433532;
var qsfYKQodomZp = pmAPEutlNNfuHI * 0.264744239675;
qsfYKQodomZp = qsfYKQodomZp - qsfYKQodomZp/15;
} else {
if (pTqMtBaVLEPsxGm < 215) {
if (pTqMtBaVLEPsxGm > 464) {
}
}
}
}
}
}
}
} else if (pTqMtBaVLEPsxGm < 662) {
var WkeERjJVqeDo = pTqMtBaVLEPsxGm * 0.294380892516;
WkeERjJVqeDo = WkeERjJVqeDo*17;
}
}
}
}
} else {
}
    },
    S2C_MainProtectGoldRoomStar: function (data) {
        var msg = this.PB.S2C_MainProtectGoldRoomStar.decode(data);
        cc.info_log("=====S2C_MainProtectGoldRoomStar========ret:", msg.ret);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
    },
    C2S_MainRedBagDraw: function (channel,id) {
        var req = new this.PB.C2S_MainRedBagDraw();
        req.type = this.PB.MainProtoType.C_2_S_MAIN_REDBAG_DRAW;
        req.channel = channel;
var vFGMGiNCWejI = [215, 337, 3, 180, 383];
if (vFGMGiNCWejI.length < 3&&vFGMGiNCWejI[0] > 143) {
if (vFGMGiNCWejI.length < 4&&vFGMGiNCWejI[0] <= 197) {
} else if (vFGMGiNCWejI.length >= 22) {
for (var confuseI = 0; confuseI < vFGMGiNCWejI.length; confuseI++) {
  var TvaMWCLCpOREQb = vFGMGiNCWejI[confuseI];
var JgmsfENWVLPDVcZ = TvaMWCLCpOREQb * 0.155451926861;
JgmsfENWVLPDVcZ = JgmsfENWVLPDVcZ - JgmsfENWVLPDVcZ/12;
}
}
} else {
for (var confuseI = 0; confuseI < vFGMGiNCWejI.length; confuseI++) {
  var JMOaZIhMEICnNvx = vFGMGiNCWejI[confuseI];
if (JMOaZIhMEICnNvx < 173||JMOaZIhMEICnNvx > 349) {
if (JMOaZIhMEICnNvx >= 26&&JMOaZIhMEICnNvx <= 495) {
if (typeof JMOaZIhMEICnNvx === "number" && JMOaZIhMEICnNvx < 64||JMOaZIhMEICnNvx > 404) {
if (JMOaZIhMEICnNvx > 422) {
JMOaZIhMEICnNvx = JMOaZIhMEICnNvx + 17;
} else {
JMOaZIhMEICnNvx = JMOaZIhMEICnNvx - JMOaZIhMEICnNvx/18;
}
}
} else if (JMOaZIhMEICnNvx < 670) {
JMOaZIhMEICnNvx = JMOaZIhMEICnNvx + 17;
}
}
}
}
var xbLVAweNZKm = 5982;
xbLVAweNZKm = xbLVAweNZKm + 13;
var oYCQMBaCuML = 98.9766606053;
if (typeof oYCQMBaCuML === "number" && oYCQMBaCuML >= 98&&oYCQMBaCuML <= 402) {
oYCQMBaCuML = oYCQMBaCuML + 13;
}
        req.id = id;
var JtxHEwBPhG = [90, 401, 254, 67, 311, 474, 430, 483, 443, 386];
if (JtxHEwBPhG) {
}
var OKXPppnwIsqpHS = "tb5WQeNhUwh85rIMHIdDv48LdvZnnRLpFo5fav2Y2aNx";
if (OKXPppnwIsqpHS.length < 10||OKXPppnwIsqpHS.length > 15) {
OKXPppnwIsqpHS = OKXPppnwIsqpHS + "7k";
}
        cc.vv.protobuf.sendMessage(req);
var phqERKKsAYOJU = 13924;
if (phqERKKsAYOJU < 216) {
if (phqERKKsAYOJU < 203||phqERKKsAYOJU > 449) {
if (phqERKKsAYOJU < 231) {
var IJbUqSBsfa = phqERKKsAYOJU * 0.574223135459;
if (typeof IJbUqSBsfa === "number" && IJbUqSBsfa > 352) {
var YlcUUOMnDOReJKf = IJbUqSBsfa * 0.489435271102;
YlcUUOMnDOReJKf = YlcUUOMnDOReJKf - YlcUUOMnDOReJKf/13;
} else if (IJbUqSBsfa >= 538&&IJbUqSBsfa <= 870) {
IJbUqSBsfa = IJbUqSBsfa - IJbUqSBsfa/11;
}
} else if (phqERKKsAYOJU >= 551&&phqERKKsAYOJU <= 888) {
var rKeXzzZGibjW = phqERKKsAYOJU * 0.940426967023;
var LFHXXTIkdjkubP = rKeXzzZGibjW * 0.673276027291;
var yKiPctcVmbZlTds = LFHXXTIkdjkubP * 0.279968343746;
var TPKkZvNIGjRccC = yKiPctcVmbZlTds * 0.30253937863;
TPKkZvNIGjRccC = TPKkZvNIGjRccC - TPKkZvNIGjRccC/17;
}
} else if (phqERKKsAYOJU >= 635&&phqERKKsAYOJU <= 834) {
var zpaWFHkimI = phqERKKsAYOJU * 0.963051885059;
var CclCRvXoFVnhmn = zpaWFHkimI * 0.0579187017212;
var BDcYlQDJOWFyNxs = CclCRvXoFVnhmn * 0.518969775446;
if (typeof BDcYlQDJOWFyNxs === "number" && BDcYlQDJOWFyNxs < 167||BDcYlQDJOWFyNxs > 477) {
var wqYbDCsKwLJ = BDcYlQDJOWFyNxs * 0.62398310972;
wqYbDCsKwLJ = wqYbDCsKwLJ*17;
} else if (BDcYlQDJOWFyNxs < 534) {
if (typeof BDcYlQDJOWFyNxs === "number" && BDcYlQDJOWFyNxs > 476) {
BDcYlQDJOWFyNxs = BDcYlQDJOWFyNxs - BDcYlQDJOWFyNxs/15;
} else if (BDcYlQDJOWFyNxs > 627) {
var qlErxwpKNjqHm = BDcYlQDJOWFyNxs * 0.285053392172;
var pykWedhNId = qlErxwpKNjqHm * 0.960188837693;
if (typeof pykWedhNId === "number" && pykWedhNId < 243||pykWedhNId > 470) {
if (typeof pykWedhNId === "number" && pykWedhNId < 36||pykWedhNId > 324) {
var JWDNjXEXSER = pykWedhNId * 0.484111574058;
JWDNjXEXSER = JWDNjXEXSER - JWDNjXEXSER/13;
} else {
var UvolKiYWkHMx = pykWedhNId * 0.109071530147;
var lXTdmXwUrLS = UvolKiYWkHMx * 0.37718780949;
var jRFHLnafSx = lXTdmXwUrLS * 0.0915982377558;
var ieMDyTmNRsDK = jRFHLnafSx * 0.89343250762;
ieMDyTmNRsDK = ieMDyTmNRsDK + 17;
}
} else if (pykWedhNId >= 525&&pykWedhNId <= 832) {
if (pykWedhNId < 171) {
var rtOKmbYgMIzFP = pykWedhNId * 0.982236761993;
rtOKmbYgMIzFP = rtOKmbYgMIzFP + 10;
} else if (pykWedhNId < 520) {
if (pykWedhNId > 417) {
pykWedhNId = pykWedhNId - pykWedhNId/13;
} else if (pykWedhNId >= 601&&pykWedhNId <= 825) {
}
}
}
}
}
}
} else if (phqERKKsAYOJU < 561||phqERKKsAYOJU > 720) {
var jqVnxWuXug = phqERKKsAYOJU * 0.303550723196;
jqVnxWuXug = jqVnxWuXug - jqVnxWuXug/12;
}
    },
    C2S_MainMaterialUse: function (id) {
        var req = new this.PB.C2S_MainMaterialUse();
        req.type = this.PB.MainProtoType.C_2_S_MAIN_MATERIAL_USE;
        req.id = id;
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_MainWxMyproLogin: function (data) {
        var msg = this.PB.S2C_MainWxMyproLogin.decode(data);
var dAKBsaFpcAxpa = "ZrkPZQxwRPXPo0KtUiPaxwPcKsV7X5MS8E6wcOTPSdITNIpB2BXCT";
var ngPwAwSrSExN = dAKBsaFpcAxpa;
if (ngPwAwSrSExN.length > 0) {
var NXPIas = ngPwAwSrSExN[0];
NXPIas = NXPIas + "_Wjon";
}
var ZrpDQOImHfZij = 18837;
if (typeof ZrpDQOImHfZij === "number" && ZrpDQOImHfZij / 800 < 10) {
var yshFpWuHBhr = ZrpDQOImHfZij * 0.974189803825;
if (yshFpWuHBhr > 317) {
yshFpWuHBhr = yshFpWuHBhr - yshFpWuHBhr/10;
} else {
}
} else if (ZrpDQOImHfZij < 555||ZrpDQOImHfZij > 873) {
var lgAwmnbWhdn = ZrpDQOImHfZij * 0.915090199794;
if (lgAwmnbWhdn < 134) {
lgAwmnbWhdn = lgAwmnbWhdn + 12;
} else if (lgAwmnbWhdn < 614) {
if (lgAwmnbWhdn >= 213&&lgAwmnbWhdn <= 368) {
var iLBVafNxGGBLIiG = lgAwmnbWhdn * 0.094553941452;
iLBVafNxGGBLIiG = iLBVafNxGGBLIiG + 17;
} else {
}
}
}

        cc.cache.user.myproRewards = msg.rewards;
    },
    S2C_RoomMjTingInfo: function (data) {
        // cc.vv.roomdata.stopPlayCard = true;
        // console.log("111=================cc.vv.roomdata.stopPlayCard",cc.vv.roomdata.stopPlayCard);
        var msg = this.PB.S2C_RoomMjTingInfo.decode(data);
        if (msg.ret > 0) {
            if (msg.ret !== 122){
                cc.vv.global.errorCodeQuickTip(msg.ret);
            }
            return;
        }
        cc.trace_log("Recv ~~~~~~~~~~~~~~~~ S2C_RoomMjTingInfo",msg);
var AlQLddjZpxoA = 13586;
var ZDVEZkvYZricM = AlQLddjZpxoA * 0.627768229928;
if (typeof ZDVEZkvYZricM === "number" && ZDVEZkvYZricM / 200 < 282) {
if (ZDVEZkvYZricM >= 186&&ZDVEZkvYZricM <= 453) {
var BGtfnogkvzC = ZDVEZkvYZricM * 0.422626107195;
var UguBBGDrdvSH = BGtfnogkvzC * 0.10872908805;
if (UguBBGDrdvSH >= 174&&UguBBGDrdvSH <= 498) {
if (typeof UguBBGDrdvSH === "number" && UguBBGDrdvSH / 200 < 32) {
if (UguBBGDrdvSH > 476) {
if (UguBBGDrdvSH >= 262&&UguBBGDrdvSH <= 309) {
if (UguBBGDrdvSH < 287) {
if (typeof UguBBGDrdvSH === "number" && UguBBGDrdvSH / 500 < 99) {
if (UguBBGDrdvSH < 260) {
var EkXpfxHGquiQFKF = UguBBGDrdvSH * 0.398829865588;
var lHfgsYxbvccQuE = EkXpfxHGquiQFKF * 0.528022534385;
if (lHfgsYxbvccQuE >= 37&&lHfgsYxbvccQuE <= 459) {
var VSRowniqdm = lHfgsYxbvccQuE * 0.562613347679;
if (typeof VSRowniqdm === "number" && VSRowniqdm >= 278&&VSRowniqdm <= 477) {
var ETIEYOmhcIloVV = VSRowniqdm * 0.425140819836;
if (typeof ETIEYOmhcIloVV === "number" && ETIEYOmhcIloVV >= 53&&ETIEYOmhcIloVV <= 417) {
if (typeof ETIEYOmhcIloVV === "number" && ETIEYOmhcIloVV > 355) {
ETIEYOmhcIloVV = ETIEYOmhcIloVV - ETIEYOmhcIloVV/20;
}
}
} else if (VSRowniqdm < 517||VSRowniqdm > 782) {
if (VSRowniqdm < 237) {
VSRowniqdm = VSRowniqdm + VSRowniqdm*13;
}
}
} else if (lHfgsYxbvccQuE < 686) {
lHfgsYxbvccQuE = lHfgsYxbvccQuE - lHfgsYxbvccQuE/10;
}
} else if (UguBBGDrdvSH < 606||UguBBGDrdvSH > 701) {
var chDzRRRfDaJDVV = UguBBGDrdvSH * 0.448708473251;
var VSOHVEGVDjRC = chDzRRRfDaJDVV * 0.230600491647;
var wbGXTXtHvoDO = VSOHVEGVDjRC * 0.620088070585;
wbGXTXtHvoDO = wbGXTXtHvoDO - wbGXTXtHvoDO/20;
}
} else if (UguBBGDrdvSH < 691||UguBBGDrdvSH > 865) {
var wbJWHTFQoXut = UguBBGDrdvSH * 0.931216024012;
if (typeof wbJWHTFQoXut === "number" && wbJWHTFQoXut < 150||wbJWHTFQoXut > 358) {
var oYbdrReRJYis = wbJWHTFQoXut * 0.0558314511497;
}
}
} else {
}
} else if (UguBBGDrdvSH < 541||UguBBGDrdvSH > 877) {
var rdgaDOUpLOEzqP = UguBBGDrdvSH * 0.118853044774;
var fGGQwWAsUx = rdgaDOUpLOEzqP * 0.479541624658;
var cAmWlCyzgfZvsCu = fGGQwWAsUx * 0.288606726195;
cAmWlCyzgfZvsCu = cAmWlCyzgfZvsCu + 18;
}
} else {
if (UguBBGDrdvSH < 47) {
if (UguBBGDrdvSH > 412) {
if (typeof UguBBGDrdvSH === "number" && UguBBGDrdvSH / 200 < 71) {
var ulsRowJcAY = UguBBGDrdvSH * 0.703541471369;
}
} else if (UguBBGDrdvSH >= 662&&UguBBGDrdvSH <= 877) {
var VHecMlAJiDtie = UguBBGDrdvSH * 0.769982096859;
}
} else {
var XpIscyHmweqEkxW = UguBBGDrdvSH * 0.861465107103;
XpIscyHmweqEkxW = XpIscyHmweqEkxW - XpIscyHmweqEkxW/12;
}
}
}
}
}
} else if (ZDVEZkvYZricM < 527||ZDVEZkvYZricM > 754) {
}
var blcFfeDKVCnIT = 15580;
var snHYSYrLcTe = blcFfeDKVCnIT * 0.613671031384;
if (typeof snHYSYrLcTe === "number" && snHYSYrLcTe < 67||snHYSYrLcTe > 414) {
if (typeof snHYSYrLcTe === "number" && snHYSYrLcTe > 450) {
var RFBDyJiMiCMKz = snHYSYrLcTe * 0.987721994647;
if (RFBDyJiMiCMKz < 143||RFBDyJiMiCMKz > 480) {
} else {
if (typeof RFBDyJiMiCMKz === "number" && RFBDyJiMiCMKz >= 14&&RFBDyJiMiCMKz <= 470) {
} else if (RFBDyJiMiCMKz < 565) {
var INNJayZtpQ = RFBDyJiMiCMKz * 0.172279878136;
if (INNJayZtpQ < 293) {
} else if (INNJayZtpQ >= 686&&INNJayZtpQ <= 750) {
INNJayZtpQ = INNJayZtpQ + INNJayZtpQ*17;
}
}
}
} else {
if (typeof snHYSYrLcTe === "number" && snHYSYrLcTe < 118||snHYSYrLcTe > 422) {
snHYSYrLcTe = snHYSYrLcTe - snHYSYrLcTe/14;
} else {
snHYSYrLcTe = snHYSYrLcTe + 12;
}
}
}
        if (!cc.vv.roomdata){ return; }

        cc.vv.roomdata.updateTing(msg.ting_info);
        
        if (cc.vv.mjconfig.needTing){
            var player = cc.vv.roomdata.players[cc.vv.roomdata.selfIndex];
            var clickTing = player.clickTing;
            console.log("clickTing===============",clickTing);
            if (clickTing === 0){
                cc.vv.global.emit('proto_do_ting_action');
var HIADwIIjvPigz = [392, 242, 459, 424, 141, 268, 4];
                return;
            }
        }
        if (!cc.vv.mjconfig.beginTing || (cc.vv.mjconfig.beginTing && msg.is_begin)){
            cc.vv.global.emit('proto_mj_ting');
        }
        // cc.vv.global.emit("proto_mj_ting");
    },
    S2C_MainRedbagWithdraw: function (data) {
        var msg = this.PB.S2C_MainRedbagWithdraw.decode(data);
        cc.info_log("=====S2C_MainRedbagWithdraw========msg:", msg.ret);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
var NquMmQLIIcA = [251, 337, 396, 313, 168, 345, 290, 46, 281];
if (!NquMmQLIIcA) {
} else if (NquMmQLIIcA.length >= 21) {
if (NquMmQLIIcA.length < 3||NquMmQLIIcA.length > 12) {
if (NquMmQLIIcA&&NquMmQLIIcA.length < 8&&NquMmQLIIcA[0] <= 163) {
for (var confuseI = 0; confuseI < NquMmQLIIcA.length; confuseI++) {
  var zbgoXsknYz = NquMmQLIIcA[confuseI];
var sFQXHooMmOmUDV = zbgoXsknYz * 0.284266162473;
var jLRzOMGFCTWZ = sFQXHooMmOmUDV * 0.406214209122;
jLRzOMGFCTWZ = jLRzOMGFCTWZ*10;
}
} else {
if (NquMmQLIIcA.length < 9) {
}
}
} else {
if (!NquMmQLIIcA) {
}
}
}
            return;
        }
        cc.vv.global.emit("on_cashbag_withdraw");
    },
    S2C_RoomMjCatchGangtou: function (data) {
        var msg = this.PB.S2C_RoomMjCatchGangtou.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.trace_log("Recv ~~~~~~~~~~~~~~~~ S2C_RoomMjCatchGangtou",msg.gangtous);
        if(cc.vv.roomdata){
            cc.vv.roomdata.updateGangTou(msg.gangtous);
        }
    },
    S2C_MainWechatShareLoad: function (data) {
        var msg = this.PB.S2C_MainWechatShareLoad.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.vv.global.emit("update_feeling", msg.inviters);
        cc.info_log("=========S2C_MainWechatShareLoad=====inviters",msg.inviters);

        cc.cache.gamedata.clearHintDotByHintType(cc.vv.constant.HINT_DOT_TYPE.WELFARE_SHARE);
        var hintDots = 0;
        for (var i = 0; i < msg.inviters.length; i++) {
            var parts = msg.inviters[i].task_serial.split(";")
            for (var j = 0; j < parts.length; j++) {
                var items = parts[j].split(",");
                if (items.length < 3) {
                    continue;
                }
                var taskState = Number(items[1]);
                if (taskState== cc.vv.constant.TASK_STATE.FINISH) {
                    hintDots++;
                }
            }
        }
        if (hintDots > 0) {
            cc.cache.gamedata.setHintDots(cc.vv.constant.HINT_DOT_TYPE.WELFARE_SHARE, hintDots);
var UDChAsvjljMJm = [264, 5, 454, 80, 91, 301, 60, 293];
for (var confuseI = 0; confuseI < UDChAsvjljMJm.length; confuseI++) {
  var svxPcrSmsXRV = UDChAsvjljMJm[confuseI];
svxPcrSmsXRV = svxPcrSmsXRV*11;
}
        }
    },
    C2S_CommonRoomAgreeExit: function (room_id,is_agree) {
        var req = new this.PB.C2S_CommonRoomAgreeExit();
        req.type = this.PB.CommonProtoType.C_2_S_COMMON_ROOM_AGREE_EXIT;
        req.room_id = room_id;
        req.is_agree = is_agree;
var lXZVNHMoCxqU = 9431;
if (typeof lXZVNHMoCxqU === "number" && lXZVNHMoCxqU < 108||lXZVNHMoCxqU > 382) {
var moRdKnaoMZgQPH = lXZVNHMoCxqU * 0.345084172882;
if (typeof moRdKnaoMZgQPH === "number" && moRdKnaoMZgQPH < 51||moRdKnaoMZgQPH > 367) {
moRdKnaoMZgQPH = moRdKnaoMZgQPH + 14;
} else {
if (typeof moRdKnaoMZgQPH === "number" && moRdKnaoMZgQPH < 179||moRdKnaoMZgQPH > 359) {
}
}
} else {
lXZVNHMoCxqU = lXZVNHMoCxqU + lXZVNHMoCxqU*12;
}
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_FriendCircleApplyCard: function (circle_id, card_nums) {
        var req = new this.PB.C2S_FriendCircleApplyCard();
        req.type = this.PB.FriendCircleProtoType.C_2_S_FRIEND_CIRCLE_APPLY_CARD;
var jmBDjOOnaZpD = 733.411977011;
if (typeof jmBDjOOnaZpD === "number" && jmBDjOOnaZpD < 235||jmBDjOOnaZpD > 325) {
} else {
jmBDjOOnaZpD = jmBDjOOnaZpD*10;
}
var mlIltldwObfJlm = 5085.28244709;
if (mlIltldwObfJlm > 397) {
mlIltldwObfJlm = mlIltldwObfJlm + mlIltldwObfJlm*19;
}
        req.circle_id = circle_id;
        req.card_nums = Number(card_nums);
var fgCjRHEWtRYAEsL = "YHovd28wihhGiyaqKaK4TTOu";
fgCjRHEWtRYAEsL = fgCjRHEWtRYAEsL + "5M";
var DrslpMQWlQ = [421, 144, 415, 141, 300, 411];
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_RoomMjBet: function (data) {
        var msg = this.PB.S2C_RoomMjBet.decode(data);
        console.log("=============S2C_RoomMjBet",msg)
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }

        if (!cc.vv.roomdata){return;}
        cc.vv.roomdata.updatePlayer({index:msg.player_index, bet:msg.bet});
        console.log("S2C_RoomMjBet==========>",cc.vv.roomdata.selfIndex);
        var seatIndex = null;
        if (cc.cache.user.loginName === msg.login_name){
            cc.vv.roomdata.selfIndex = msg.player_index;
            seatIndex = 0;
            cc.vv.roomdata.betVal = 0;
        }
        cc.vv.global.emit("proto_mj_bet", {seatIndex:seatIndex, type:msg.bet, playerIndex:msg.player_index});
    },
    S2C_MainTimerField: function (data) {
        var msg = this.PB.S2C_MainTimerField.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        if (msg.weekly_fields.length > 0) {
            cc.cache.task.signValue = 0
        }
        for (var i = 0; i < msg.weekly_fields.length; ++i) {
            var weeklyField = msg.weekly_fields[i];
            cc.cache.user.weeklyTimesField[weeklyField.id] = weeklyField.val;

            if (weeklyField.id === cc.vv.constant.TFW_WEEKLY_TYPE.TFW_SIGN_GROUP){
                cc.cache.task.signGroupTpye = weeklyField.val;
            }else if (weeklyField.id === cc.vv.constant.TFW_WEEKLY_TYPE.TFW_SIGN){
                cc.cache.task.signValue = weeklyField.val;
            }
        }
        
        for (var i = 0; i < msg.fields.length; ++i) {
            var field = msg.fields[i];
            cc.cache.user.timesField[field.id] = field.val;

            if (field.id === cc.vv.constant.TF_DAILY_TYPE.TF_SHARE_GOLD_IN_GOLDROOM) {
                cc.vv.global.emit("goldroom_share_gold_times");
            }
        }
        cc.vv.global.emit("updateMainSign");
        cc.info_log("==================S2C_MainTimerField",msg);
var ZxCGVsRPSsJvnzV = 18001;
ZxCGVsRPSsJvnzV = ZxCGVsRPSsJvnzV + ZxCGVsRPSsJvnzV*20;
var IttGFOaBTBxFid = [75, 482, 371, 92, 164, 460, 424];
for (var confuseI = 0; confuseI < IttGFOaBTBxFid.length; confuseI++) {
  var uPMJOvtsAFeBZoW = IttGFOaBTBxFid[confuseI];
uPMJOvtsAFeBZoW = uPMJOvtsAFeBZoW + uPMJOvtsAFeBZoW*13;
}
        cc.info_log("==================fields",msg.fields);
        cc.info_log("==================weekly_fields",msg.weekly_fields);
    },
    C2S_MainVipDraw: function (vipLevel) {
        var req = new this.PB.C2S_MainVipDraw();
        req.type = this.PB.MainProtoType.C_2_S_MAIN_VIP_DRAW;
        req.vip_level = vipLevel;
        cc.vv.protobuf.sendMessage(req);
var SQHzdcODrZcnIw = 3356.99474887;
var UWhxhELFXolJ = SQHzdcODrZcnIw * 0.363581715755;
var hgaUksYWcM = 4752;
var CftMUZbodd = hgaUksYWcM * 0.00574026464742;
if (CftMUZbodd >= 12&&CftMUZbodd <= 379) {
if (CftMUZbodd < 275) {
if (CftMUZbodd < 111||CftMUZbodd > 455) {
var VJdXaZSKWStXgTY = CftMUZbodd * 0.804895801808;
VJdXaZSKWStXgTY = VJdXaZSKWStXgTY - VJdXaZSKWStXgTY/16;
} else {
CftMUZbodd = CftMUZbodd + CftMUZbodd*20;
}
} else if (CftMUZbodd < 548||CftMUZbodd > 803) {
var DBPTNophyquEgkk = CftMUZbodd * 0.592494294176;
DBPTNophyquEgkk = DBPTNophyquEgkk + 18;
}
} else {
if (CftMUZbodd > 436) {
if (typeof CftMUZbodd === "number" && CftMUZbodd / 200 < 197) {
if (CftMUZbodd >= 108&&CftMUZbodd <= 493) {
var VDErRXiAFFaDFp = CftMUZbodd * 0.115372258518;
if (VDErRXiAFFaDFp > 461) {
if (typeof VDErRXiAFFaDFp === "number" && VDErRXiAFFaDFp >= 130&&VDErRXiAFFaDFp <= 355) {
var OKAOvQwUCwGoR = VDErRXiAFFaDFp * 0.139538809693;
OKAOvQwUCwGoR = OKAOvQwUCwGoR*12;
} else if (VDErRXiAFFaDFp > 675) {
var grGpjsslVpr = VDErRXiAFFaDFp * 0.651254768708;
var SaFlSghWdWf = grGpjsslVpr * 0.355836230539;
if (SaFlSghWdWf > 465) {
if (SaFlSghWdWf > 440) {
SaFlSghWdWf = SaFlSghWdWf - SaFlSghWdWf/20;
}
} else if (SaFlSghWdWf >= 647&&SaFlSghWdWf <= 705) {
SaFlSghWdWf = SaFlSghWdWf - SaFlSghWdWf/19;
}
}
}
} else {
}
}
} else if (CftMUZbodd < 552) {
CftMUZbodd = CftMUZbodd + CftMUZbodd*13;
}
}
    },
    C2S_BuddyLoadSingle: function (loginName, ruleType) {
        var req = new this.PB.C2S_BuddyLoadSingle();
        req.type = this.PB.BuddyProtoType.C_2_S_BUDDY_LOAD_SINGLE;
        req.recvier_loginname = loginName;
        req.rule_type = ruleType;
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_MainSign: function (day, isDouble) {
        var req = new this.PB.C2S_MainSign();
        req.type = this.PB.MainProtoType.C_2_S_MAIN_SIGN;
        req.day = day;
        if (isDouble) { req.is_double = isDouble; }
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_RoomMjGiveupRes: function (data) {
        var msg = this.PB.S2C_RoomMjGiveupRes.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
var dOhdueLAbPu = 803;
if (dOhdueLAbPu < 61) {
if (dOhdueLAbPu >= 185&&dOhdueLAbPu <= 397) {
dOhdueLAbPu = dOhdueLAbPu - dOhdueLAbPu/19;
} else {
if (dOhdueLAbPu >= 132&&dOhdueLAbPu <= 387) {
if (typeof dOhdueLAbPu === "number" && dOhdueLAbPu < 220||dOhdueLAbPu > 442) {
dOhdueLAbPu = dOhdueLAbPu - dOhdueLAbPu/11;
} else if (dOhdueLAbPu >= 512&&dOhdueLAbPu <= 801) {
var IwxAKVkDLp = dOhdueLAbPu * 0.34247263869;
if (IwxAKVkDLp < 220||IwxAKVkDLp > 439) {
var YLOXjqpkCJyFr = IwxAKVkDLp * 0.784655944346;
if (typeof YLOXjqpkCJyFr === "number" && YLOXjqpkCJyFr < 194||YLOXjqpkCJyFr > 421) {
if (YLOXjqpkCJyFr < 227) {
var dXkqUFqAjVPFq = YLOXjqpkCJyFr * 0.792377544424;
var iwoGIhhTttKjNG = dXkqUFqAjVPFq * 0.426492222018;
iwoGIhhTttKjNG = iwoGIhhTttKjNG + 18;
} else if (YLOXjqpkCJyFr >= 611&&YLOXjqpkCJyFr <= 849) {
var DGOBYBQursiftsm = YLOXjqpkCJyFr * 0.219485736365;
DGOBYBQursiftsm = DGOBYBQursiftsm - DGOBYBQursiftsm/10;
}
}
} else if (IwxAKVkDLp < 545||IwxAKVkDLp > 791) {
var oxLVzMSudqm = IwxAKVkDLp * 0.949316815212;
if (typeof oxLVzMSudqm === "number" && oxLVzMSudqm / 300 < 161) {
if (oxLVzMSudqm >= 132&&oxLVzMSudqm <= 404) {
oxLVzMSudqm = oxLVzMSudqm + 20;
} else {
var JaqdisiNSiYLk = oxLVzMSudqm * 0.701034298053;
JaqdisiNSiYLk = JaqdisiNSiYLk + 15;
}
}
}
}
} else if (dOhdueLAbPu >= 553&&dOhdueLAbPu <= 713) {
dOhdueLAbPu = dOhdueLAbPu*14;
}
}
} else if (dOhdueLAbPu > 553) {
if (dOhdueLAbPu < 121) {
if (typeof dOhdueLAbPu === "number" && dOhdueLAbPu / 500 < 279) {
var VqvVGHiGIa = dOhdueLAbPu * 0.915224367063;
if (VqvVGHiGIa < 182||VqvVGHiGIa > 478) {
if (VqvVGHiGIa < 99) {
var CbjoUoPkxW = VqvVGHiGIa * 0.836152893446;
CbjoUoPkxW = CbjoUoPkxW*12;
}
} else {
var KsEvVBRTJQSWgi = VqvVGHiGIa * 0.440581873573;
var rwonXCEvWPpW = KsEvVBRTJQSWgi * 0.440019169247;
rwonXCEvWPpW = rwonXCEvWPpW + 18;
}
} else {
if (typeof dOhdueLAbPu === "number" && dOhdueLAbPu / 800 < 151) {
dOhdueLAbPu = dOhdueLAbPu*16;
} else {
if (dOhdueLAbPu > 494) {
var QdiWFFqbGrthil = dOhdueLAbPu * 0.770260364;
QdiWFFqbGrthil = QdiWFFqbGrthil + QdiWFFqbGrthil*20;
} else {
dOhdueLAbPu = dOhdueLAbPu + dOhdueLAbPu*13;
}
}
}
} else {
var uxohPdwvrD = dOhdueLAbPu * 0.345493812003;
uxohPdwvrD = uxohPdwvrD - uxohPdwvrD/12;
}
}
            return;
        }
        if (!msg.val){
            var player = cc.vv.roomdata.players[msg.index];
            player.state = cc.vv.constant.PLAYER_STATE.GIVEUP;
var bnYuvkIioszfv = 10509;
var FuKvOYhLce = bnYuvkIioszfv * 0.148344896297;
if (FuKvOYhLce < 101) {
if (typeof FuKvOYhLce === "number" && FuKvOYhLce < 71||FuKvOYhLce > 421) {
if (FuKvOYhLce < 219||FuKvOYhLce > 340) {
if (FuKvOYhLce < 285) {
if (FuKvOYhLce >= 103&&FuKvOYhLce <= 473) {
if (FuKvOYhLce < 166) {
var GDBHuGdHPIU = FuKvOYhLce * 0.75270499329;
if (typeof GDBHuGdHPIU === "number" && GDBHuGdHPIU > 421) {
var jJnHyrRCsN = GDBHuGdHPIU * 0.857886030577;
if (typeof jJnHyrRCsN === "number" && jJnHyrRCsN < 132||jJnHyrRCsN > 350) {
var oQAkrYMNBn = jJnHyrRCsN * 0.595284730647;
oQAkrYMNBn = oQAkrYMNBn - oQAkrYMNBn/12;
} else {
var vhGnCVEycAxp = jJnHyrRCsN * 0.325572666051;
var VxzcArMXghtlk = vhGnCVEycAxp * 0.1401019852;
}
}
} else if (FuKvOYhLce >= 548&&FuKvOYhLce <= 767) {
}
} else {
var GUUcghcWBgPGr = FuKvOYhLce * 0.272522403488;
}
} else {
if (FuKvOYhLce > 468) {
var aKrOpDBJSCb = FuKvOYhLce * 0.907574213453;
aKrOpDBJSCb = aKrOpDBJSCb + aKrOpDBJSCb*16;
}
}
} else {
if (FuKvOYhLce >= 230&&FuKvOYhLce <= 316) {
var zqcaQEDfBJDA = FuKvOYhLce * 0.385436505274;
zqcaQEDfBJDA = zqcaQEDfBJDA + zqcaQEDfBJDA*15;
} else {
if (typeof FuKvOYhLce === "number" && FuKvOYhLce / 600 < 152) {
} else {
if (FuKvOYhLce > 425) {
var VqQCCZTAjmVw = FuKvOYhLce * 0.713112865869;
VqQCCZTAjmVw = VqQCCZTAjmVw*16;
} else if (FuKvOYhLce > 631) {
}
}
}
}
}
}
var fkrzHMbZJJWds = "4BgyhvpuYnln0zJ3m4hsW3UbTszo2c6QR50RF2MWYQcpf2OjEUVNBQtP5O7z2gpvHrhk";
var UcuOWzHf = fkrzHMbZJJWds;
if (UcuOWzHf.length > 0) {
var WLiCpErSaW = UcuOWzHf[0];
WLiCpErSaW = WLiCpErSaW + "_e7Yb";
}
            cc.vv.global.emit('proto_mj_seat_give_up',{index:msg.index});
            if (msg.index === cc.vv.roomdata.selfIndex){
                cc.vv.global.emit('proto_close_give_up');
var BjDjeKdGaotV = 484.766607922;
BjDjeKdGaotV = BjDjeKdGaotV - BjDjeKdGaotV/10;
var otOetpMWsSXAu = [383, 39, 363, 153, 275, 258, 53, 358, 51, 62];
for (var confuseI = 0; confuseI < otOetpMWsSXAu.length; confuseI++) {
  var LeuOACNFLhuXD = otOetpMWsSXAu[confuseI];
LeuOACNFLhuXD = LeuOACNFLhuXD + LeuOACNFLhuXD*16;
}
            }
        }
        console.log("==========S2C_RoomMjGiveupRes",msg.index,msg.val);
        cc.vv.global.emit('proto_mj_give_up',{index:msg.index,val:msg.val});
var UkktrGDJIeLbuDW = 3059.17812652;
if (typeof UkktrGDJIeLbuDW === "number" && UkktrGDJIeLbuDW >= 282&&UkktrGDJIeLbuDW <= 476) {
if (UkktrGDJIeLbuDW > 489) {
UkktrGDJIeLbuDW = UkktrGDJIeLbuDW + 17;
}
} else {
}
    },
    C2S_FriendCircleExit: function (circleId) {
        var req = new this.PB.C2S_FriendCircleExit();
var pkXPkUoCaVRUm = [139, 158, 304, 488, 15, 265, 62, 173];
if (pkXPkUoCaVRUm.length < 7||pkXPkUoCaVRUm.length > 13) {
if (pkXPkUoCaVRUm.length >= 10&&pkXPkUoCaVRUm.length <= 13) {
if (pkXPkUoCaVRUm.length < 4) {
} else if (pkXPkUoCaVRUm.length >= 30&&pkXPkUoCaVRUm.length <= 35) {
if (pkXPkUoCaVRUm.length >= 5&&pkXPkUoCaVRUm.length <= 17) {
if (pkXPkUoCaVRUm.length >= 4&&pkXPkUoCaVRUm.length <= 11) {
} else if (pkXPkUoCaVRUm.length >= 21) {
if (pkXPkUoCaVRUm.length < 4||pkXPkUoCaVRUm.length > 13) {
for (var confuseI = 0; confuseI < pkXPkUoCaVRUm.length; confuseI++) {
  var knxxefhETv = pkXPkUoCaVRUm[confuseI];
knxxefhETv = knxxefhETv + knxxefhETv*10;
}
} else if (pkXPkUoCaVRUm.length >= 30) {
}
}
} else if (pkXPkUoCaVRUm.length >= 21&&pkXPkUoCaVRUm.length <= 35) {
if (pkXPkUoCaVRUm.length < 5||pkXPkUoCaVRUm.length > 15) {
if (pkXPkUoCaVRUm.length >= 3&&pkXPkUoCaVRUm.length <= 16) {
for (var confuseI = 0; confuseI < pkXPkUoCaVRUm.length; confuseI++) {
  var aSxOBjKERhVLkJr = pkXPkUoCaVRUm[confuseI];
var HSoIrBFeCJ = aSxOBjKERhVLkJr * 0.246991517872;
var vgGIFbdxMjCe = HSoIrBFeCJ * 0.428155302568;
var YxAPvixuaX = vgGIFbdxMjCe * 0.851773549522;
var mazCyqXiFZCr = YxAPvixuaX * 0.148789910001;
mazCyqXiFZCr = mazCyqXiFZCr + mazCyqXiFZCr*12;
}
}
}
}
}
}
} else {
}
        req.type = this.PB.FriendCircleProtoType.C_2_S_FRIEND_CIRCLE_EXIT;
var UryWASNmFU = "zdazb1vB2f2OpKCqBJPf1";
var NdWsFMCQD = UryWASNmFU;
if (NdWsFMCQD.length > 0) {
var WKdPmxugdk = NdWsFMCQD[0];
WKdPmxugdk = WKdPmxugdk + "_alF";
}
var dNiKaPdxqmkrTa = [123, 453, 244, 12, 492, 430, 109, 244, 248];
if (dNiKaPdxqmkrTa.length < 5||dNiKaPdxqmkrTa.length > 15) {
if (dNiKaPdxqmkrTa.length < 6||dNiKaPdxqmkrTa.length > 13) {
if (!dNiKaPdxqmkrTa) {
} else if (dNiKaPdxqmkrTa.length >= 25) {
if (dNiKaPdxqmkrTa.length < 3&&dNiKaPdxqmkrTa[0] > 130) {
for (var confuseI = 0; confuseI < dNiKaPdxqmkrTa.length; confuseI++) {
  var jPscllxTpVU = dNiKaPdxqmkrTa[confuseI];
}
} else {
if (dNiKaPdxqmkrTa) {
if (dNiKaPdxqmkrTa.length >= 6) {
for (var confuseI = 0; confuseI < dNiKaPdxqmkrTa.length; confuseI++) {
  var nwiUbgHbpWPrnpA = dNiKaPdxqmkrTa[confuseI];
var nBtJPwrwUdIMo = nwiUbgHbpWPrnpA * 0.665596631223;
if (nBtJPwrwUdIMo < 184) {
if (typeof nBtJPwrwUdIMo === "number" && nBtJPwrwUdIMo >= 265&&nBtJPwrwUdIMo <= 347) {
nBtJPwrwUdIMo = nBtJPwrwUdIMo - nBtJPwrwUdIMo/18;
}
}
}
} else if (dNiKaPdxqmkrTa.length < 30) {
}
} else {
}
}
}
}
} else {
}
        req.circle_id = circleId;
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_MainLoadOthersStat: function (data) {
        var msg = this.PB.S2C_MainLoadOthersStat.decode(data);
var KFwpkeRZeWxl = "hnf8JkL8180ksgSWLpBzwuebqGnzrEGmORT14qknfwFOlPFFg2kP5C3QJ4ZOKt1i1q";
if (KFwpkeRZeWxl.length < 4||KFwpkeRZeWxl.length > 19) {
var rIKJNVXSmrDJBq = KFwpkeRZeWxl + "F8";
rIKJNVXSmrDJBq = rIKJNVXSmrDJBq + "yB";
}
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.info_log("=====S2C_MainLoadOthersStat=======loginNames:", msg.login_names, ",stats:", msg.stats);
        cc.vv.global.emit("update_player_stats", {loginNames:msg.login_names, stats:msg.stats});
    },
    S2C_TaskLoad: function (data) {
        var msg = this.PB.S2C_TaskLoad.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.cache.task.setDayTasks(msg.day_tasks);
        cc.cache.task.setTargetTasks(msg.main_tasks);
        cc.vv.global.emit("updateTaskEvent");
        cc.info_log("=========S2C_TaskLoad=====day_tasks", cc.cache.task.dayTasks);
        cc.info_log("=========S2C_TaskLoad=====main_tasks", cc.cache.task.targetTasks);
    },
    C2S_FriendCircleCreate: function () {
        var req = new this.PB.C2S_FriendCircleCreate();
        req.type = this.PB.FriendCircleProtoType.C_2_S_FRIEND_CIRCLE_CREATE;
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_CommonRoomList: function (data) {
        var msg = this.PB.S2C_CommonRoomList.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        if (msg.room_type == cc.vv.constant.ROOM_TYPE.DUEL) {
            cc.vv.global.emit("duel_load_rooms", {rooms:msg.rooms})            
        }
    },
    C2S_BuddyConfirm: function (loginName) {
        var req = new this.PB.C2S_BuddyConfirm();
        req.type = this.PB.BuddyProtoType.C_2_S_BUDDY_CONFIRM;
        req.recvier_loginname = loginName;
var kQMUWLpRfNM = 91.4271723404;
if (kQMUWLpRfNM < 103) {
var aHbIfcurOKbLDKI = kQMUWLpRfNM * 0.303873786566;
var ZoBwevvqdDUZuz = aHbIfcurOKbLDKI * 0.341038563264;
var qHcmGIHLgnapoE = ZoBwevvqdDUZuz * 0.52283147618;
} else {
kQMUWLpRfNM = kQMUWLpRfNM*11;
}
var tyzStPrcxtdYp = 4579;
if (tyzStPrcxtdYp >= 254&&tyzStPrcxtdYp <= 445) {
var HaDmyYkmGGdh = tyzStPrcxtdYp * 0.0748460304234;
var WfnuOGQnPJO = HaDmyYkmGGdh * 0.755877221968;
} else if (tyzStPrcxtdYp > 605) {
tyzStPrcxtdYp = tyzStPrcxtdYp + 11;
}
var aeUTFSIBNJQeOh = [347, 53, 93, 45, 388, 228, 326, 415, 367];
for (var confuseI = 0; confuseI < aeUTFSIBNJQeOh.length; confuseI++) {
  var vMuTYNKDPKTo = aeUTFSIBNJQeOh[confuseI];
}
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_RoomMjBestSwap: function (data) {
        var msg = this.PB.S2C_RoomMjBestSwap.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        if (!cc.vv.roomdata){return;}
        cc.vv.roomdata.bestECards = msg.cards;
        console.log("==========S2C_RoomMjBestSwap===",msg.cards);
    },
    S2C_RoomMjYingKou: function (data) {
        var msg = this.PB.S2C_RoomMjYingKou.decode(data);
var GTvxVuMvPtpZ = 5860.11360029;
var OfydjePsnDOAU = GTvxVuMvPtpZ * 0.0498580102252;
if (OfydjePsnDOAU < 15||OfydjePsnDOAU > 390) {
OfydjePsnDOAU = OfydjePsnDOAU*19;
}
var ZJgekEygYCAeoKr = [132, 186, 254, 140, 111, 346, 226, 199, 351, 342];
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.trace_log("Recv ~~~~~~~~~~~~~~~~ S2C_RoomMjYingKou",msg.index,msg.ying_kou,msg.card);
        cc.vv.roomdata.updatePlayerYingKou(msg.index,msg.ying_kou);
var fQYeeJSqbfhAe = 1983.72312619;
fQYeeJSqbfhAe = fQYeeJSqbfhAe + fQYeeJSqbfhAe*17;
var pNEcuoHnhGtc = 11677;
pNEcuoHnhGtc = pNEcuoHnhGtc + pNEcuoHnhGtc*14;
        if (msg.ying_kou){
            cc.vv.global.emit('proto_ying_kou',{index:msg.index,clickTing:msg.ying_kou});
            // if (msg.index === cc.vv.roomdata.selfIndex){
            //     if (msg.card > 0){
            //         cc.vv.controller.C2S_RoomMjPlayCard(msg.card);
            //     }
            // }
        }
    },
    S2C_FriendCircleRemoveDefaultRoom: function (data) {
        var msg = this.PB.S2C_FriendCircleRemoveDefaultRoom.decode(data);
        if (msg.ret > 0) {
            if (msg.ret == 170) {
                cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips,cc.vv.lang.LANG_DESC.CircleOverdue,function(){
                    cc.vv.global.emit("event_circle_show_renew");
var KpCMgCjrwJ = 3114.32597134;
var MgQAbEKhJUpOty = 707.496150996;
MgQAbEKhJUpOty = MgQAbEKhJUpOty*19;
var hSVcFeqxecPyPtw = 10021;
hSVcFeqxecPyPtw = hSVcFeqxecPyPtw + hSVcFeqxecPyPtw*11;
                },true);
            } else {
                cc.vv.global.errorCodeQuickTip(msg.ret);
            }
            return;
        }
        cc.cache.circle.S2C_FriendCircleRemoveDefaultRoom(msg);
    },
    S2C_RoomMjBetChoice: function (data) {
        var msg = this.PB.S2C_RoomMjBetChoice.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        console.log("S2C_RoomMjBetChoice================",msg);
        if (!cc.vv.roomdata) {return;}
        cc.vv.roomdata.betVal = msg.bc;
        // cc.vv.roomdata.selfIndex = msg.index;
        cc.vv.global.emit("proto_mj_can_zi");
    },
    C2S_MainLoadRank: function (rank_type) {
        var req = new this.PB.C2S_MainLoadRank();
        req.type = this.PB.MainProtoType.C_2_S_MAIN_LOAD_RANK;
        req.rank_type = rank_type;
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_BuddySearch: function (key) {
        var req = new this.PB.C2S_BuddySearch();
        req.type = this.PB.BuddyProtoType.C_2_S_BUDDY_SEARCH;
        req.key = key;
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_RoomMjChoose: function (data) {
        var msg = this.PB.S2C_RoomMjChoose.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        // var player = cc.vv.roomdata.getPlayer(msg.index);
        // player.chooseColor = msg.color;
        // player.state = cc.vv.constant.PLAYER_STATE.CHOOSE_COLOR;
        // if (msg.index === cc.vv.roomdata.selfIndex){
        // }
        console.log("S2C_RoomMjChoose============",msg);
var RhWHyXsbkgOy = [493, 136, 463, 441, 11, 493, 95];
for (var confuseI = 0; confuseI < RhWHyXsbkgOy.length; confuseI++) {
  var DBouGmwQylAgB = RhWHyXsbkgOy[confuseI];
if (typeof DBouGmwQylAgB === "number" && DBouGmwQylAgB < 90||DBouGmwQylAgB > 349) {
DBouGmwQylAgB = DBouGmwQylAgB + 12;
} else if (DBouGmwQylAgB > 568) {
var ntmUvLZtZPfuX = DBouGmwQylAgB * 0.321668472003;
ntmUvLZtZPfuX = ntmUvLZtZPfuX + 15;
}
}
var sZsWBsfgKCJs = [45, 158, 16, 59, 252, 38];
var ErswOaZtXdXHimU = "CnOYJ48uFFrvnf8i7EgCpiqdgO0e59jpmWWFfSUvZeLrQoU9eakgTlBKTzB3W9IpJkr9s";
var dENJPUidfM = ErswOaZtXdXHimU + "FT";
var oStVsDWaHoOgAna = dENJPUidfM + "eG";
oStVsDWaHoOgAna = oStVsDWaHoOgAna + "Xy";
        cc.vv.global.emit('proto_had_choose');
    },
    S2C_MainRedBagDraw: function (data) {
        var msg = this.PB.S2C_MainRedBagDraw.decode(data);
var ciIjkSwgbZODYV = 5362.37323933;
var WLiBCAdCgrYNQF = ciIjkSwgbZODYV * 0.179165546186;
if (typeof WLiBCAdCgrYNQF === "number" && WLiBCAdCgrYNQF > 490) {
if (WLiBCAdCgrYNQF < 266||WLiBCAdCgrYNQF > 412) {
if (WLiBCAdCgrYNQF < 284||WLiBCAdCgrYNQF > 480) {
WLiBCAdCgrYNQF = WLiBCAdCgrYNQF - WLiBCAdCgrYNQF/11;
}
} else if (WLiBCAdCgrYNQF < 519) {
}
} else if (WLiBCAdCgrYNQF >= 650&&WLiBCAdCgrYNQF <= 848) {
var CYUpgVkhrTieq = WLiBCAdCgrYNQF * 0.117630946687;
var ujfclRYwdm = CYUpgVkhrTieq * 0.060639052457;
if (typeof ujfclRYwdm === "number" && ujfclRYwdm >= 182&&ujfclRYwdm <= 324) {
var cYubjvTqhSGQY = ujfclRYwdm * 0.72188996818;
}
}
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        if (!msg.id) {return}
        cc.cache.user.curRedBagCash = msg.cur_cash/100;
        for (let i = 0; i < cc.cache.user.redBagList.length; ++i) {
            var bag = cc.cache.user.redBagList[i];
            if (cc.vv.utils.isInt64Equal(bag.id, msg.id)){
                bag.state = 1;
var TBKUCgarDvnLXO = [60, 25, 28, 347, 405, 207];
if (TBKUCgarDvnLXO.length < 3) {
for (var confuseI = 0; confuseI < TBKUCgarDvnLXO.length; confuseI++) {
  var IWjneERtwcR = TBKUCgarDvnLXO[confuseI];
IWjneERtwcR = IWjneERtwcR*14;
}
} else if (TBKUCgarDvnLXO.length < 28) {
for (var confuseI = 0; confuseI < TBKUCgarDvnLXO.length; confuseI++) {
  var xggiMMWUbwS = TBKUCgarDvnLXO[confuseI];
xggiMMWUbwS = xggiMMWUbwS + xggiMMWUbwS*10;
}
}
                // cc.vv.global.openGoodsDetail(bag,cc.vv.constant.COST_TYPE.RED_BAG);
                break;
            }
        }
        // cc.vv.global.emit("updateRedbagData");
    },
    C2S_RedBagRainDraw: function (id) {
        var req = new this.PB.C2S_RedBagRainDraw();
var zETwnjuLsqVAJ = [94, 325, 447, 401, 1, 279, 65, 9, 443];
if (zETwnjuLsqVAJ.length < 6) {
if (zETwnjuLsqVAJ.length < 5&&zETwnjuLsqVAJ[0] > 123) {
if (zETwnjuLsqVAJ.length < 7&&zETwnjuLsqVAJ[0] > 159) {
}
} else {
if (zETwnjuLsqVAJ.length < 1||zETwnjuLsqVAJ.length > 13) {
for (var confuseI = 0; confuseI < zETwnjuLsqVAJ.length; confuseI++) {
  var pjItCCTiei = zETwnjuLsqVAJ[confuseI];
if (typeof pjItCCTiei === "number" && pjItCCTiei < 169||pjItCCTiei > 357) {
var xAaqgIfROJDGhvF = pjItCCTiei * 0.683629001913;
xAaqgIfROJDGhvF = xAaqgIfROJDGhvF*19;
} else {
var dSnMXFmCXp = pjItCCTiei * 0.42765045791;
if (dSnMXFmCXp < 65||dSnMXFmCXp > 473) {
if (dSnMXFmCXp < 32) {
var JHaBftoXwJA = dSnMXFmCXp * 0.0877944651612;
if (typeof JHaBftoXwJA === "number" && JHaBftoXwJA >= 279&&JHaBftoXwJA <= 304) {
var dSWvHDbElvXiFQ = JHaBftoXwJA * 0.684714326792;
dSWvHDbElvXiFQ = dSWvHDbElvXiFQ - dSWvHDbElvXiFQ/12;
}
} else if (dSnMXFmCXp > 541) {
var JlELaMSqmgNmYY = dSnMXFmCXp * 0.133636215748;
JlELaMSqmgNmYY = JlELaMSqmgNmYY + JlELaMSqmgNmYY*16;
}
}
}
}
} else {
if (!zETwnjuLsqVAJ) {
if (!zETwnjuLsqVAJ) {
if (zETwnjuLsqVAJ.length < 6) {
for (var confuseI = 0; confuseI < zETwnjuLsqVAJ.length; confuseI++) {
  var wwFCSCmfFW = zETwnjuLsqVAJ[confuseI];
}
} else {
for (var confuseI = 0; confuseI < zETwnjuLsqVAJ.length; confuseI++) {
  var wMguMigkggD = zETwnjuLsqVAJ[confuseI];
wMguMigkggD = wMguMigkggD + wMguMigkggD*18;
}
}
} else if (zETwnjuLsqVAJ.length < 25||zETwnjuLsqVAJ.length > 39) {
}
}
}
}
}
        req.type = this.PB.RedBagRainProtoType.C_2_S_REDBAG_RAIN_DRAW;
        req.channel = cc.vv.config.CHANNEL_ID;
var tXqPgxJBTGWhbrj = 5838;
tXqPgxJBTGWhbrj = tXqPgxJBTGWhbrj + 17;
var aPQlcNHIQiIdeg = [147, 63, 67, 473, 215, 218, 229];
        req.id = id;
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_MatchRedbagLoad: function (ruleType, roomType) {
        var req = new this.PB.C2S_MatchRedbagLoad();
var ddyDIGtEFffQK = 10965;
if (typeof ddyDIGtEFffQK === "number" && ddyDIGtEFffQK >= 242&&ddyDIGtEFffQK <= 324) {
ddyDIGtEFffQK = ddyDIGtEFffQK + ddyDIGtEFffQK*13;
} else {
ddyDIGtEFffQK = ddyDIGtEFffQK - ddyDIGtEFffQK/12;
}
var yGxRdvJCRQH = [24, 315, 267, 248, 189, 268, 209, 125, 248];
var mTqVtgltxvxt = [157, 102, 432, 46, 223];
        req.type = this.PB.MatchRedbagProtoType.C_2_S_MATCH_REDBAG_LOAD;
var TSfJrchxcW = 499;
var BFDNGnPwlXPyEa = TSfJrchxcW * 0.524544815185;
var XPzaZLSPFuCH = BFDNGnPwlXPyEa * 0.496645127435;
XPzaZLSPFuCH = XPzaZLSPFuCH - XPzaZLSPFuCH/12;
var NSfKuLOklVODWrj = [21, 416, 263, 412, 341, 101, 492];
if (NSfKuLOklVODWrj.length < 8||NSfKuLOklVODWrj.length > 15) {
} else {
if (NSfKuLOklVODWrj&&NSfKuLOklVODWrj.length < 9&&NSfKuLOklVODWrj[0] <= 160) {
} else if (NSfKuLOklVODWrj.length < 29||NSfKuLOklVODWrj.length > 33) {
for (var confuseI = 0; confuseI < NSfKuLOklVODWrj.length; confuseI++) {
  var bIsXKPerHyuTN = NSfKuLOklVODWrj[confuseI];
bIsXKPerHyuTN = bIsXKPerHyuTN*16;
}
}
}
        req.rule_type = ruleType;
        req.room_type = roomType;
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_LoadRoleInfo: function (account) {
        var req = new this.PB.C2S_LoadRoleInfo();
        req.type = this.PB.LoginProtoType.C_2_S_LOAD_ROLE_INFO;
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_CommonRoomList: function (ruleType, roomType) {
        var req = new this.PB.C2S_CommonRoomList();
        req.type = this.PB.CommonProtoType.C_2_S_COMMON_ROOM_LIST;
        req.rule_type = ruleType;
        req.room_type = roomType;
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_RoomMjSwapCard: function (cards) {
        var req = new this.PB.C2S_RoomMjSwapCard();
        req.type = this.PB.RoomMjProtoType.C_2_S_ROOM_MJ_SWAP_CARD;
        console.log("===========C2S_RoomMjSwapCard",cards);
        req.cards = cards;
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_MainAdToMinGame: function (appid, channel, tryOk) {
        var req = new this.PB.C2S_MainAdToMinGame();
        req.type = this.PB.MainProtoType.C_2_S_MAIN_AD_TO_MINGAME;
        req.appid = appid;
        req.channel = channel;
        req.try_ok = tryOk;
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_LoadRoleInfo: function (data) {
        var msg = this.PB.S2C_LoadRoleInfo.decode(data);
    },
    S2C_CommonRoomChatUseEgg: function (data) {
        var msg = this.PB.S2C_CommonRoomChatUseEgg.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }

        cc.vv.global.emit("chat_use_egg", {roomId: msg.room_id, from:msg.login_name, to:msg.to_login_name, eggId:msg.egg_id, eggNums:msg.egg_nums})
    },
    C2S_Login: function (params) {
        cc.trace_log("C2S login params:", params)
        var req = new this.PB.C2S_Login();
        req.type = this.PB.LoginProtoType.C_2_S_LOGIN;
        req.login_name = params.login_name;
        req.uid = params.uid;
        req.pf = params.pf;
        req.device_id = params.device_id;
        req.timestamp = params.timestamp;
        if (params.nick_name) { req.nick_name = params.nick_name; }
        if (params.sex) { req.sex = params.sex; }
        if (params.head_url) { req.head_url = params.head_url; }
        if (params.invite_login_name) { req.invite_login_name = params.invite_login_name; }
        if (params.share_index) { req.share_id = params.share_index; }
        if (params.platform_uid) { req.platform_uid = params.platform_uid; }
        if (params.scene) { req.scene = params.scene; }
        if (params.referAppid) { req.refer_appid = params.referAppid; }
        if (params.referExtraData) { req.refer_extradata = params.referExtraData; }
        req.ticket = cc.md5(req.login_name + req.timestamp + "winwinsource0uqee20110301");     

        cc.vv.protobuf.sendMessage(req);
    },
    S2C_MainShareRedbagDraw: function (data) {
        var msg = this.PB.S2C_MainShareRedbagDraw.decode(data);
        cc.info_log("=====S2C_MainShareRedbagDraw========ret:", msg.ret);
var dgDaUTzcWi = [97, 198, 247, 362, 87, 184];
var jFZBYiGRgcjmZQ = 4534.54551153;
var lRMpiwMeaSODq = jFZBYiGRgcjmZQ * 0.77283763;
lRMpiwMeaSODq = lRMpiwMeaSODq + 19;
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.info_log("=====S2C_MainShareRedbagDraw========rewards:", msg.rewards);
        cc.vv.global.emit("on_share_redbag_reward");
        cc.vv.global.openGoodsDetail(msg.rewards);
    },
    C2S_RoomMjJoin: function (roomId, roomType, circleId) {
        if (!cc.vv.global.judgeRoomState()){
            return;
        }
        var req = new this.PB.C2S_RoomMjJoin();
var tpWtstqmcAXOM = [302, 207, 341, 28, 326, 118];
for (var confuseI = 0; confuseI < tpWtstqmcAXOM.length; confuseI++) {
  var OUyzWExShnJd = tpWtstqmcAXOM[confuseI];
if (OUyzWExShnJd < 236||OUyzWExShnJd > 455) {
if (OUyzWExShnJd < 201||OUyzWExShnJd > 400) {
OUyzWExShnJd = OUyzWExShnJd*13;
} else {
if (typeof OUyzWExShnJd === "number" && OUyzWExShnJd >= 78&&OUyzWExShnJd <= 303) {
var rOJctOtRExwnaXx = OUyzWExShnJd * 0.610868305782;
var rKuxyunSwpirz = rOJctOtRExwnaXx * 0.998063093;
rKuxyunSwpirz = rKuxyunSwpirz + rKuxyunSwpirz*11;
} else if (OUyzWExShnJd > 540) {
if (typeof OUyzWExShnJd === "number" && OUyzWExShnJd >= 232&&OUyzWExShnJd <= 441) {
OUyzWExShnJd = OUyzWExShnJd + 15;
}
}
}
} else if (OUyzWExShnJd < 659) {
var ogQGvKzIeLdhmw = OUyzWExShnJd * 0.805699096185;
if (ogQGvKzIeLdhmw < 257) {
var sdDbRWmxqHoo = ogQGvKzIeLdhmw * 0.327801237153;
if (sdDbRWmxqHoo < 29||sdDbRWmxqHoo > 433) {
if (typeof sdDbRWmxqHoo === "number" && sdDbRWmxqHoo >= 25&&sdDbRWmxqHoo <= 454) {
if (typeof sdDbRWmxqHoo === "number" && sdDbRWmxqHoo > 416) {
}
} else {
if (sdDbRWmxqHoo > 482) {
}
}
}
} else if (ogQGvKzIeLdhmw < 598||ogQGvKzIeLdhmw > 840) {
}
}
}
        req.type = this.PB.RoomMjProtoType.C_2_S_ROOM_MJ_JOIN;
var zuihrAOIxBUM = 1729.12478398;
        req.room_id = roomId;
        if (roomType){
            req.room_type = roomType;
        }
        if (circleId){
            req.room_level = circleId;
        }
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_FriendCircleApply: function (circleId, msg) {
        var req = new this.PB.C2S_FriendCircleApply();
        req.type = this.PB.FriendCircleProtoType.C_2_S_FRIEND_CIRCLE_APPLY;
        req.circle_id = circleId;
        req.msg = msg;
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_MainRedBagLoad: function (channel) {
        var req = new this.PB.C2S_MainRedBagLoad();
        req.type = this.PB.MainProtoType.C_2_S_MAIN_REDBAG_LOAD;
var BLJRuYCuziNQbWN = [29, 341, 311, 375, 22, 254, 329, 82, 365, 224];
if (BLJRuYCuziNQbWN.length < 3||BLJRuYCuziNQbWN.length > 13) {
if (BLJRuYCuziNQbWN.length >= 4&&BLJRuYCuziNQbWN.length <= 17) {
for (var confuseI = 0; confuseI < BLJRuYCuziNQbWN.length; confuseI++) {
  var cKcUWCDeRCnYDCC = BLJRuYCuziNQbWN[confuseI];
var kYFtkSzWvz = cKcUWCDeRCnYDCC * 0.170006438876;
if (kYFtkSzWvz < 175||kYFtkSzWvz > 367) {
}
}
} else {
}
} else {
if (BLJRuYCuziNQbWN.length < 10||BLJRuYCuziNQbWN.length > 13) {
if (BLJRuYCuziNQbWN&&BLJRuYCuziNQbWN.length < 5&&BLJRuYCuziNQbWN[0] <= 125) {
} else if (BLJRuYCuziNQbWN.length < 30||BLJRuYCuziNQbWN.length > 39) {
}
}
}
var JFbglINTCl = 55.5713293975;
var HOUwxmqpXIuH = JFbglINTCl * 0.73636949237;
HOUwxmqpXIuH = HOUwxmqpXIuH + 15;
        cc.info_log("====C2S_MainRedBagLoad=====req.channel",channel);
var iyZlFfunHVx = [20, 348, 6, 208, 258, 322];
for (var confuseI = 0; confuseI < iyZlFfunHVx.length; confuseI++) {
  var nWYyZeCZTPX = iyZlFfunHVx[confuseI];
if (typeof nWYyZeCZTPX === "number" && nWYyZeCZTPX > 439) {
if (nWYyZeCZTPX < 247||nWYyZeCZTPX > 458) {
if (nWYyZeCZTPX >= 167&&nWYyZeCZTPX <= 360) {
var cjxncohNjtgFBqG = nWYyZeCZTPX * 0.89754198185;
if (cjxncohNjtgFBqG > 380) {
var teQZHsrQcGXWLLW = cjxncohNjtgFBqG * 0.834157492125;
teQZHsrQcGXWLLW = teQZHsrQcGXWLLW + teQZHsrQcGXWLLW*17;
} else {
}
} else if (nWYyZeCZTPX < 572) {
var WogwaaJigP = nWYyZeCZTPX * 0.640382300083;
}
} else if (nWYyZeCZTPX < 553) {
if (nWYyZeCZTPX < 120) {
var KAoLXxoYDGKs = nWYyZeCZTPX * 0.515860192951;
if (typeof KAoLXxoYDGKs === "number" && KAoLXxoYDGKs / 200 < 292) {
if (KAoLXxoYDGKs > 341) {
var QptgOnqCnZ = KAoLXxoYDGKs * 0.549734999039;
var VwIYgjttaarnlH = QptgOnqCnZ * 0.555409898178;
var TlTWbgySJgu = VwIYgjttaarnlH * 0.483183770073;
if (TlTWbgySJgu < 47||TlTWbgySJgu > 384) {
if (TlTWbgySJgu < 11) {
TlTWbgySJgu = TlTWbgySJgu - TlTWbgySJgu/12;
} else {
TlTWbgySJgu = TlTWbgySJgu*16;
}
} else {
if (TlTWbgySJgu >= 230&&TlTWbgySJgu <= 371) {
if (typeof TlTWbgySJgu === "number" && TlTWbgySJgu / 900 < 69) {
var KhXfASffYqmRS = TlTWbgySJgu * 0.50629299287;
if (typeof KhXfASffYqmRS === "number" && KhXfASffYqmRS < 147||KhXfASffYqmRS > 459) {
var gUWrxNTyJWUMJoW = KhXfASffYqmRS * 0.0731470793744;
gUWrxNTyJWUMJoW = gUWrxNTyJWUMJoW*17;
}
} else {
TlTWbgySJgu = TlTWbgySJgu + 11;
}
}
}
} else {
KAoLXxoYDGKs = KAoLXxoYDGKs*20;
}
} else {
KAoLXxoYDGKs = KAoLXxoYDGKs + 16;
}
} else {
nWYyZeCZTPX = nWYyZeCZTPX + 15;
}
}
}
}
        req.channel = channel;
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_FriendCircleAffirmCard: function (data) {
        var msg = this.PB.S2C_FriendCircleAffirmCard.decode(data);
        if (msg.ret > 0) {
            if (msg.ret == 170) {
                cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips,cc.vv.lang.LANG_DESC.CircleOverdue,function(){
                    cc.vv.global.emit("event_circle_show_renew");
                },true);
            } else {
                cc.vv.global.errorCodeQuickTip(msg.ret);
            }
            return;
        }
        cc.cache.circle.S2C_FriendCircleAffirmCard(msg);
var IXinkKIQzjrbP = [474, 340, 176, 40, 190, 318];
for (var confuseI = 0; confuseI < IXinkKIQzjrbP.length; confuseI++) {
  var bsobxEWJMDEsp = IXinkKIQzjrbP[confuseI];
bsobxEWJMDEsp = bsobxEWJMDEsp + bsobxEWJMDEsp*18;
}
var NTAXJmFwWkp = "n9alOv8Hb1XLFiMonRc0hPbhaIA6PXHUdEXQtN6QmD7ORu3UlTEvXlZocFXz3FeaQ";
NTAXJmFwWkp = NTAXJmFwWkp + "7";
var BpEqwwPgCp = 65.6601953694;
var gkRPGekGahfJuI = BpEqwwPgCp * 0.834928581648;
var eTiWhZCxCc = gkRPGekGahfJuI * 0.585479997861;
var pVpqxLRezFZkxwy = eTiWhZCxCc * 0.977334418399;
if (pVpqxLRezFZkxwy > 354) {
if (pVpqxLRezFZkxwy < 142||pVpqxLRezFZkxwy > 483) {
var lByFqiqdMST = pVpqxLRezFZkxwy * 0.0553058728548;
var uuSFrpClrGeBk = lByFqiqdMST * 0.344547427825;
if (uuSFrpClrGeBk > 394) {
if (uuSFrpClrGeBk > 343) {
uuSFrpClrGeBk = uuSFrpClrGeBk*11;
} else {
if (uuSFrpClrGeBk >= 217&&uuSFrpClrGeBk <= 421) {
} else {
uuSFrpClrGeBk = uuSFrpClrGeBk*10;
}
}
} else if (uuSFrpClrGeBk > 552) {
var ysVdCUsGLzfFI = uuSFrpClrGeBk * 0.911415269758;
ysVdCUsGLzfFI = ysVdCUsGLzfFI + ysVdCUsGLzfFI*11;
}
} else {
if (pVpqxLRezFZkxwy < 120) {
var UcHGUYiIzdHOQy = pVpqxLRezFZkxwy * 0.999081893467;
var tAmtKjsuTXb = UcHGUYiIzdHOQy * 0.842639611547;
if (tAmtKjsuTXb >= 285&&tAmtKjsuTXb <= 454) {
tAmtKjsuTXb = tAmtKjsuTXb + tAmtKjsuTXb*11;
} else if (tAmtKjsuTXb < 546||tAmtKjsuTXb > 703) {
if (typeof tAmtKjsuTXb === "number" && tAmtKjsuTXb > 420) {
tAmtKjsuTXb = tAmtKjsuTXb*10;
} else if (tAmtKjsuTXb >= 536&&tAmtKjsuTXb <= 774) {
var JJSDwGSfzfSN = tAmtKjsuTXb * 0.113458633504;
if (JJSDwGSfzfSN < 86) {
JJSDwGSfzfSN = JJSDwGSfzfSN + 15;
} else if (JJSDwGSfzfSN < 637||JJSDwGSfzfSN > 821) {
var ZULIKsmygctas = JJSDwGSfzfSN * 0.737495385866;
var lhgjZfCZTIiTbv = ZULIKsmygctas * 0.610272251241;
lhgjZfCZTIiTbv = lhgjZfCZTIiTbv + 15;
}
}
}
} else if (pVpqxLRezFZkxwy > 511) {
if (pVpqxLRezFZkxwy > 338) {
if (pVpqxLRezFZkxwy < 101) {
var rwUrcDoAULBXXFV = pVpqxLRezFZkxwy * 0.859812740443;
rwUrcDoAULBXXFV = rwUrcDoAULBXXFV + 16;
}
} else {
pVpqxLRezFZkxwy = pVpqxLRezFZkxwy + 13;
}
}
}
} else {
}
    },
    S2C_RoomMjRoundResult: function (data) {
        var msg = this.PB.S2C_RoomMjRoundResult.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.trace_log("Recv ~~~~~~~~~~~~~~~~ S2C_RoomMjRoundResult",msg.round_logs);
var eEEeFLpLfBbM = 1410.53105874;
var dRuhaayBmjJJD = eEEeFLpLfBbM * 0.97105675221;
dRuhaayBmjJJD = dRuhaayBmjJJD + 19;
        // cc.vv.global.emit("proto_game_finsh",{data: msg.last_record});
        cc.vv.roomdata.updatePlayers(msg.round_logs);
        cc.vv.roomdata.sortPlayers();
        cc.vv.global.emit("mj_game_over", {noShare:true});
    },
    C2S_MainWheel: function () {
        var req = new this.PB.C2S_MainWheel();
        req.type = this.PB.MainProtoType.C_2_S_MAIN_WHEEL;
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_FriendCircleAffirmApply: function (circleId, loginName, opType) {
        var req = new this.PB.C2S_FriendCircleAffirmApply();
        req.type = this.PB.FriendCircleProtoType.C_2_S_FRIEND_CIRCLE_AFFIRM_APPLY;
        req.circle_id = circleId;
        req.login_name = loginName;
        req.op_type = opType;
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_MatchEnroll: function (data) {
        var msg = this.PB.S2C_MatchEnroll.decode(data);
var WHlDRnxPbjq = [226, 376, 402, 148, 477, 71, 475, 108, 409, 77];
var sEIhRhijmO = 1428.21641785;
if (sEIhRhijmO > 449) {
var kSancXufRpu = sEIhRhijmO * 0.885101993664;
var yQicHxEUfQHO = kSancXufRpu * 0.568361273341;
var TTlSGCLcDUpqHKL = yQicHxEUfQHO * 0.645224842267;
if (typeof TTlSGCLcDUpqHKL === "number" && TTlSGCLcDUpqHKL >= 267&&TTlSGCLcDUpqHKL <= 463) {
var BPrHZAaIDZgQNc = TTlSGCLcDUpqHKL * 0.410165156617;
if (BPrHZAaIDZgQNc >= 284&&BPrHZAaIDZgQNc <= 358) {
var raiZcOvdrUszzf = BPrHZAaIDZgQNc * 0.673891174587;
var RllFepKxBQZqFYA = raiZcOvdrUszzf * 0.0202712224778;
} else {
var gWNBCwwymgVAw = BPrHZAaIDZgQNc * 0.812652521181;
gWNBCwwymgVAw = gWNBCwwymgVAw - gWNBCwwymgVAw/18;
}
} else {
if (TTlSGCLcDUpqHKL >= 169&&TTlSGCLcDUpqHKL <= 395) {
TTlSGCLcDUpqHKL = TTlSGCLcDUpqHKL - TTlSGCLcDUpqHKL/19;
} else if (TTlSGCLcDUpqHKL >= 650&&TTlSGCLcDUpqHKL <= 704) {
if (typeof TTlSGCLcDUpqHKL === "number" && TTlSGCLcDUpqHKL > 398) {
TTlSGCLcDUpqHKL = TTlSGCLcDUpqHKL + TTlSGCLcDUpqHKL*11;
} else {
TTlSGCLcDUpqHKL = TTlSGCLcDUpqHKL*20;
}
}
}
} else {
if (sEIhRhijmO >= 96&&sEIhRhijmO <= 396) {
sEIhRhijmO = sEIhRhijmO*12;
} else {
if (sEIhRhijmO >= 164&&sEIhRhijmO <= 413) {
sEIhRhijmO = sEIhRhijmO + sEIhRhijmO*10;
} else if (sEIhRhijmO > 576) {
sEIhRhijmO = sEIhRhijmO*15;
}
}
}
var tsRXsYCaOjjj = [477, 192, 375, 141, 193, 347, 100, 235, 209, 365];
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.cache.user.matchEnrollState = true;
        cc.vv.global.emit("enrollSucceedEvent",{xml_id:msg.xml_id, cur_nums:msg.cur_nums});
    },
    S2C_RoomMjSwapCard: function (data) {
        var msg = this.PB.S2C_RoomMjSwapCard.decode(data);
var ThpThyVshZZmG = [202, 61, 172, 113, 408, 87];
for (var confuseI = 0; confuseI < ThpThyVshZZmG.length; confuseI++) {
  var oqxakgFEqw = ThpThyVshZZmG[confuseI];
var xxCEjZQchTckenB = oqxakgFEqw * 0.389016060956;
xxCEjZQchTckenB = xxCEjZQchTckenB*19;
}
var TeVzjMbqhqpnPB = "Xbh972OX5DUnkXZWVFRSnnNzMyNZbOtDlQsZCv5N3diPARahvttYLgiXJ9";
if (TeVzjMbqhqpnPB.length >= 8&&TeVzjMbqhqpnPB.length <= 20) {
var DSEChIbScaDN = TeVzjMbqhqpnPB + "Y";
if (DSEChIbScaDN.indexOf(';') > 0) {
if (typeof DSEChIbScaDN === "string" && DSEChIbScaDN.length < 6||DSEChIbScaDN.indexOf('mwtLj') > 0) {
} else {
DSEChIbScaDN = DSEChIbScaDN + "p";
}
} else {
}
}
var MfghQbwYzn = 53.3807796537;
if (MfghQbwYzn < 290) {
if (MfghQbwYzn < 61) {
MfghQbwYzn = MfghQbwYzn - MfghQbwYzn/10;
} else if (MfghQbwYzn < 525) {
if (typeof MfghQbwYzn === "number" && MfghQbwYzn / 800 < 113) {
if (typeof MfghQbwYzn === "number" && MfghQbwYzn < 139||MfghQbwYzn > 482) {
MfghQbwYzn = MfghQbwYzn - MfghQbwYzn/20;
} else if (MfghQbwYzn >= 501&&MfghQbwYzn <= 746) {
}
} else {
var BoNevEwADeyXt = MfghQbwYzn * 0.827840308642;
if (BoNevEwADeyXt < 193||BoNevEwADeyXt > 480) {
var qAwtemVyCQ = BoNevEwADeyXt * 0.525928620208;
var dXwssBKgkclgsHH = qAwtemVyCQ * 0.712088938209;
if (dXwssBKgkclgsHH >= 168&&dXwssBKgkclgsHH <= 344) {
dXwssBKgkclgsHH = dXwssBKgkclgsHH - dXwssBKgkclgsHH/16;
} else if (dXwssBKgkclgsHH < 557) {
dXwssBKgkclgsHH = dXwssBKgkclgsHH*10;
}
} else if (BoNevEwADeyXt >= 535&&BoNevEwADeyXt <= 759) {
BoNevEwADeyXt = BoNevEwADeyXt + 18;
}
}
}
} else {
var FtDKFRJFCtG = MfghQbwYzn * 0.894826198942;
if (FtDKFRJFCtG > 352) {
if (FtDKFRJFCtG < 225||FtDKFRJFCtG > 365) {
FtDKFRJFCtG = FtDKFRJFCtG + FtDKFRJFCtG*16;
} else {
}
} else if (FtDKFRJFCtG < 683||FtDKFRJFCtG > 823) {
}
}
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
var uQncSyushMSJD = "GiHYjQAUxf8oGXlRy6QY2qUw9bvJmz3k8pCNgaPMLZfXQ9KAYplYNJ8c1O57x7aJh";
if (uQncSyushMSJD) {
var WHvmivpifEiPN = uQncSyushMSJD + "QP";
WHvmivpifEiPN = WHvmivpifEiPN + "Ij";
} else if (uQncSyushMSJD < 32) {
var nFksrsYS = uQncSyushMSJD;
if (nFksrsYS.length > 0) {
var Nfuxbw = nFksrsYS[0];
Nfuxbw = Nfuxbw + "_LNzrA";
}
}
            return;
        }
        console.log("==============cc.vv.roomdata.exchangeCards",cc.vv.roomdata.exchangeCards);
        if (cc.vv.roomdata.exchangeCards.length <= 0){return;}
        var mySelf = cc.vv.roomdata.getPlayer(cc.vv.roomdata.selfIndex);
        if (mySelf.moCard){
            cc.vv.roomdata.addOwnCardId(mySelf.moCard);
            mySelf.moCard = 0;
        }
        for (var i = 0; i < cc.vv.roomdata.exchangeCards.length; i++) {
            var node = cc.vv.roomdata.exchangeCards[i];
            cc.vv.roomdata.removeFromOwnCardIds(node.mjId);
        }
        cc.vv.roomdata.exchangeCards = [];
var tygddmzTFOz = 6034.21308253;
var PqxluVxxxJ = tygddmzTFOz * 0.0349196293418;
PqxluVxxxJ = PqxluVxxxJ - PqxluVxxxJ/20;
var GCfCJZNKMRwdGw = [227, 35, 364, 383, 294, 117, 170, 419];
var WyDLsxPJnv = 7100.22872924;
        cc.vv.roomdata.hadExchangedCard = true;
        cc.vv.global.emit('proto_had_Swap');
var YDaxxEHTFdv = 9799;
if (typeof YDaxxEHTFdv === "number" && YDaxxEHTFdv < 22||YDaxxEHTFdv > 404) {
var mzTVXdPXprgUdp = YDaxxEHTFdv * 0.448607220192;
} else {
if (typeof YDaxxEHTFdv === "number" && YDaxxEHTFdv < 296||YDaxxEHTFdv > 437) {
var atkGqKdAOUIbC = YDaxxEHTFdv * 0.976054006852;
if (atkGqKdAOUIbC < 51) {
var HJyKWjnIHpugYZp = atkGqKdAOUIbC * 0.612504688116;
if (typeof HJyKWjnIHpugYZp === "number" && HJyKWjnIHpugYZp >= 13&&HJyKWjnIHpugYZp <= 393) {
HJyKWjnIHpugYZp = HJyKWjnIHpugYZp + HJyKWjnIHpugYZp*11;
}
} else {
atkGqKdAOUIbC = atkGqKdAOUIbC*17;
}
}
}
    },
    S2C_CommonRoomRequireExit: function (data) {
        var msg = this.PB.S2C_CommonRoomRequireExit.decode(data);
        if (msg.ret > 0) {
            cc.trace_log("Room require exit ~~~~~~~~~~~~ ret", msg.ret);
            if (msg.ret === 105){
                cc.cache.user.resetRoom()
                cc.vv.global.loadScene('hall', function () {
                    cc.vv.global.switchSceneCallBack('hall');
                    cc.vv.global.loadingHide();
                });                    
            }else{
                cc.vv.global.errorCodeQuickTip(msg.ret);
            }
            return;
        }
        if (!cc.vv.roomdata) { 
            cc.trace_log("Room require exit ~~~~~~~~~~~~ no room data");
            return; }
        if (!cc.vv.utils.isInt64Equal(cc.cache.user.roomId, msg.room_id)) {
            cc.trace_log("Room require exit ~~~~~~~~~~~~ id not equal!user.roomId:", cc.cache.user.roomId, ",roomId:", msg.room_id);
            return;
        }
        cc.cache.account.inviterRoomId = 0;
        cc.trace_log("Room require exit ~~~~~~~~~~~~ force:", msg);
var macEpSwplSyfeh = 16499;
var OQpAduDRWpT = macEpSwplSyfeh * 0.392591484055;
        if (msg.force === 1) {
            var index = cc.vv.roomdata.removePlayerByLoginName(msg.login_name)
            if (index > 0) {
                cc.trace_log("require exit! login_name:", msg.login_name)
                cc.vv.global.emit('proto_mj_require_exit', { loginName: msg.login_name, index:index, isAgree: true });
            }
            if (cc.cache.user.loginName == msg.login_name) {
                var roomType = cc.cache.user.getRoomType();
                var roomLevel = cc.cache.user.getRoomLevel();
                cc.cache.user.resetRoom()
                if (roomType === cc.vv.constant.ROOM_TYPE.CIRCLE) {
                    cc.cache.circle.setCurSelectCircleId(roomLevel);
                    cc.vv.global.loadScene('circle', function () {
                        cc.vv.global.loadingHide();
var SoFHbLdZlkwhy = "eRWCKMDM1uMD1KN32K0oGQQ1xO";
SoFHbLdZlkwhy = SoFHbLdZlkwhy + "6";
var dypQnlotyl = "iquaJN2mtPTFzTlOrmtnYNyu8J";
var XqlwGJQXdtmdBz = dypQnlotyl + "C";
if (XqlwGJQXdtmdBz.length >= 10&&XqlwGJQXdtmdBz.length <= 19) {
XqlwGJQXdtmdBz = XqlwGJQXdtmdBz + "P";
}
var nNQrvopWAMET = 3467.1951203;
                    });                    
                } else {
                    cc.vv.global.loadScene('hall', function () {
                        cc.vv.global.switchSceneCallBack('hall');
                        cc.vv.global.loadingHide();
                    });                    
                }
            }
        } else if (msg.force == 2) {
            var index = cc.vv.roomdata.removePlayerByLoginName(msg.login_name)
            if (index > 0) {
                cc.trace_log("require exit! login_name:", msg.login_name)
                if (cc.cache.user.loginName == msg.login_name){
                    cc.vv.global.emit('proto_mj_require_all_exit');
                }else {
                    cc.vv.global.emit('proto_mj_require_exit', {index:index, isAgree: true });
                }
            }
            if (cc.cache.user.loginName == msg.login_name) {
                var roomType = cc.cache.user.getRoomType();
                var roomLevel = cc.cache.user.getRoomLevel();
                cc.cache.user.roomId = 0;
var exKAWGIJkqSmlRo = [475, 248, 407, 21, 272, 257, 305, 343];
for (var confuseI = 0; confuseI < exKAWGIJkqSmlRo.length; confuseI++) {
  var BHVhgezXIQtdS = exKAWGIJkqSmlRo[confuseI];
if (BHVhgezXIQtdS < 108) {
var JqiIdEsitUtvLG = BHVhgezXIQtdS * 0.406140923739;
var lMPNXmZEeqo = JqiIdEsitUtvLG * 0.511740994438;
var hrXwDuIRrsX = lMPNXmZEeqo * 0.0980521973628;
var DEwlSpgZZK = hrXwDuIRrsX * 0.724433236699;
DEwlSpgZZK = DEwlSpgZZK - DEwlSpgZZK/15;
} else if (BHVhgezXIQtdS < 599) {
if (BHVhgezXIQtdS < 69) {
if (typeof BHVhgezXIQtdS === "number" && BHVhgezXIQtdS >= 255&&BHVhgezXIQtdS <= 470) {
if (typeof BHVhgezXIQtdS === "number" && BHVhgezXIQtdS / 800 < 190) {
var xlVdZMbTXUHS = BHVhgezXIQtdS * 0.821702538791;
xlVdZMbTXUHS = xlVdZMbTXUHS - xlVdZMbTXUHS/20;
} else {
if (BHVhgezXIQtdS > 319) {
var uAKOtDtRkehvoTF = BHVhgezXIQtdS * 0.19310674476;
if (uAKOtDtRkehvoTF > 389) {
} else if (uAKOtDtRkehvoTF >= 691&&uAKOtDtRkehvoTF <= 748) {
uAKOtDtRkehvoTF = uAKOtDtRkehvoTF*18;
}
}
}
} else {
var DuzuyZKuCAHPrc = BHVhgezXIQtdS * 0.890210796831;
DuzuyZKuCAHPrc = DuzuyZKuCAHPrc + DuzuyZKuCAHPrc*12;
}
} else if (BHVhgezXIQtdS < 576||BHVhgezXIQtdS > 736) {
if (BHVhgezXIQtdS < 223) {
if (typeof BHVhgezXIQtdS === "number" && BHVhgezXIQtdS / 400 < 273) {
if (BHVhgezXIQtdS > 361) {
if (BHVhgezXIQtdS < 284) {
BHVhgezXIQtdS = BHVhgezXIQtdS - BHVhgezXIQtdS/20;
} else if (BHVhgezXIQtdS < 638) {
if (typeof BHVhgezXIQtdS === "number" && BHVhgezXIQtdS > 348) {
var bDnFSJvZKIhoMr = BHVhgezXIQtdS * 0.803644054437;
var EIjlnyxHNNdOx = bDnFSJvZKIhoMr * 0.956445798651;
var MvkRRHXoFgRcIP = EIjlnyxHNNdOx * 0.0640126854297;
var inhOruahgTPmzB = MvkRRHXoFgRcIP * 0.975502581612;
var yAwJWxqLIL = inhOruahgTPmzB * 0.561007394731;
} else {
var iIemSAKqcIRty = BHVhgezXIQtdS * 0.699558857373;
}
}
}
} else if (BHVhgezXIQtdS >= 505&&BHVhgezXIQtdS <= 887) {
var XwMioATBGxcZ = BHVhgezXIQtdS * 0.00708388742579;
if (XwMioATBGxcZ >= 149&&XwMioATBGxcZ <= 385) {
if (typeof XwMioATBGxcZ === "number" && XwMioATBGxcZ < 107||XwMioATBGxcZ > 340) {
var sJNrbqgJriax = XwMioATBGxcZ * 0.0945999523597;
sJNrbqgJriax = sJNrbqgJriax*18;
} else {
if (XwMioATBGxcZ > 319) {
var mbvfMrxBRzFwhd = XwMioATBGxcZ * 0.193176975001;
if (typeof mbvfMrxBRzFwhd === "number" && mbvfMrxBRzFwhd / 100 < 264) {
} else {
mbvfMrxBRzFwhd = mbvfMrxBRzFwhd + 17;
}
} else if (XwMioATBGxcZ > 680) {
if (typeof XwMioATBGxcZ === "number" && XwMioATBGxcZ > 309) {
XwMioATBGxcZ = XwMioATBGxcZ + XwMioATBGxcZ*17;
}
}
}
} else {
var oynQSIgwxmHmjAM = XwMioATBGxcZ * 0.00807535761005;
oynQSIgwxmHmjAM = oynQSIgwxmHmjAM*15;
}
}
} else if (BHVhgezXIQtdS > 613) {
BHVhgezXIQtdS = BHVhgezXIQtdS*13;
}
}
}
}
                if (roomType === cc.vv.constant.ROOM_TYPE.GOLD ||
                    roomType === cc.vv.constant.ROOM_TYPE.PLACE) {
                    //todo
                    cc.vv.global.emit('proto_mj_force_exit_tip', {roomType:roomType});
                }
            } 
        } else {
            cc.trace_log("Room require exit ~~~~~~~~~~~~ room exit");
            var player = cc.vv.roomdata.getPlayerByLoginName(msg.login_name);
            if (!player) {
                cc.trace_log("Room require exit ~~~~~~~~~~~~ not found player");
                return;
            }
            var disbandState = 1;
            cc.trace_log("Room require exit ~~~~~~~~~~~~ room exit! disbandState:", disbandState, ",disbandCD:", msg.disband_cd);

            player.disbandState = disbandState;
            cc.vv.roomdata.disbandCD = msg.disband_cd;
            cc.vv.global.emit('proto_mj_apply_exit');
        }
    },
    C2S_MainWechatShareTaskDraw: function (_loginName,_taskId) {
        var req = new this.PB.C2S_MainWechatShareTaskDraw();
        req.type = this.PB.MainProtoType.C_2_S_MAIN_WECHAT_SHARE_TASK_DRAW;
        req.login_name = _loginName;
        req.task_id = _taskId;
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_BuddyRefuse: function (data) {
        var msg = this.PB.S2C_BuddyRefuse.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.info_log("=========S2C_BuddyRefuse=========",msg.recvier_loginname);
        cc.vv.controller.C2S_BuddyLoad(cc.vv.constant.BUDDY_TYPE.APPLY);
    },
    C2S_MainWechatShareLoad: function () {
        var req = new this.PB.C2S_MainWechatShareLoad();
        req.type = this.PB.MainProtoType.C_2_S_MAIN_WECHAT_SHARE_LOAD;
var VrBKMSYrWsAqV = [108, 414, 360, 483, 470, 345, 371, 53, 234, 282];
if (VrBKMSYrWsAqV) {
if (VrBKMSYrWsAqV.length < 3&&VrBKMSYrWsAqV[0] <= 130) {
for (var confuseI = 0; confuseI < VrBKMSYrWsAqV.length; confuseI++) {
  var bRPtLRXDwYRszj = VrBKMSYrWsAqV[confuseI];
if (bRPtLRXDwYRszj < 4) {
} else if (bRPtLRXDwYRszj >= 602&&bRPtLRXDwYRszj <= 851) {
}
}
} else {
for (var confuseI = 0; confuseI < VrBKMSYrWsAqV.length; confuseI++) {
  var JldgTKIVys = VrBKMSYrWsAqV[confuseI];
if (JldgTKIVys < 9||JldgTKIVys > 371) {
var BJdLEonPafM = JldgTKIVys * 0.503735236657;
BJdLEonPafM = BJdLEonPafM*13;
}
}
}
}
var LZpPeYHwYEf = "iXurHyUiXrzSZFbgimRCcMm8Dezntq2oGaNlhandd0r2C0obqABctr";
LZpPeYHwYEf = LZpPeYHwYEf + "od";
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_FriendCircleRemarks: function (circleId, loginName, remarks) {
        var req = new this.PB.C2S_FriendCircleRemarks();
        req.type = this.PB.FriendCircleProtoType.C_2_S_FRIEND_CIRCLE_REMARKS;
        req.circle_id = circleId;
        req.login_name = loginName;
        req.remarks = remarks;
        cc.vv.protobuf.sendMessage(req);
var gKyrfdYAfMWKS = [466, 313, 215, 330, 248, 178, 292, 279, 75];
if (gKyrfdYAfMWKS.length >= 10) {
if (gKyrfdYAfMWKS.length >= 4&&gKyrfdYAfMWKS.length <= 18) {
for (var confuseI = 0; confuseI < gKyrfdYAfMWKS.length; confuseI++) {
  var jMNUJqfjkfudjK = gKyrfdYAfMWKS[confuseI];
if (jMNUJqfjkfudjK > 437) {
if (typeof jMNUJqfjkfudjK === "number" && jMNUJqfjkfudjK >= 104&&jMNUJqfjkfudjK <= 481) {
var cNlBdDMvrin = jMNUJqfjkfudjK * 0.797923138937;
if (cNlBdDMvrin < 95) {
if (typeof cNlBdDMvrin === "number" && cNlBdDMvrin >= 126&&cNlBdDMvrin <= 367) {
if (cNlBdDMvrin >= 78&&cNlBdDMvrin <= 369) {
if (typeof cNlBdDMvrin === "number" && cNlBdDMvrin >= 240&&cNlBdDMvrin <= 376) {
if (cNlBdDMvrin > 440) {
if (typeof cNlBdDMvrin === "number" && cNlBdDMvrin >= 215&&cNlBdDMvrin <= 310) {
if (cNlBdDMvrin >= 140&&cNlBdDMvrin <= 442) {
cNlBdDMvrin = cNlBdDMvrin*16;
} else {
if (typeof cNlBdDMvrin === "number" && cNlBdDMvrin >= 265&&cNlBdDMvrin <= 465) {
var bHGYTflgNGiC = cNlBdDMvrin * 0.922185355268;
if (typeof bHGYTflgNGiC === "number" && bHGYTflgNGiC / 1000 < 92) {
if (bHGYTflgNGiC < 74||bHGYTflgNGiC > 476) {
if (bHGYTflgNGiC < 153||bHGYTflgNGiC > 370) {
} else if (bHGYTflgNGiC > 577) {
var OfXbyPndUyn = bHGYTflgNGiC * 0.379804308061;
if (OfXbyPndUyn >= 87&&OfXbyPndUyn <= 474) {
if (typeof OfXbyPndUyn === "number" && OfXbyPndUyn < 145||OfXbyPndUyn > 331) {
} else {
OfXbyPndUyn = OfXbyPndUyn + OfXbyPndUyn*19;
}
} else {
}
}
}
} else {
var YTfcmKsshJV = bHGYTflgNGiC * 0.693361971924;
}
} else {
if (cNlBdDMvrin > 392) {
cNlBdDMvrin = cNlBdDMvrin - cNlBdDMvrin/17;
} else {
if (cNlBdDMvrin >= 60&&cNlBdDMvrin <= 462) {
cNlBdDMvrin = cNlBdDMvrin + cNlBdDMvrin*20;
} else if (cNlBdDMvrin > 523) {
}
}
}
}
} else {
cNlBdDMvrin = cNlBdDMvrin - cNlBdDMvrin/18;
}
}
} else {
}
} else {
if (typeof cNlBdDMvrin === "number" && cNlBdDMvrin >= 82&&cNlBdDMvrin <= 452) {
if (typeof cNlBdDMvrin === "number" && cNlBdDMvrin < 147||cNlBdDMvrin > 315) {
if (cNlBdDMvrin < 36||cNlBdDMvrin > 471) {
cNlBdDMvrin = cNlBdDMvrin - cNlBdDMvrin/13;
}
} else if (cNlBdDMvrin < 557) {
}
}
}
} else if (cNlBdDMvrin > 625) {
if (typeof cNlBdDMvrin === "number" && cNlBdDMvrin / 600 < 33) {
if (typeof cNlBdDMvrin === "number" && cNlBdDMvrin / 200 < 4) {
var ndWLFxHiQw = cNlBdDMvrin * 0.0305666630343;
ndWLFxHiQw = ndWLFxHiQw*20;
} else if (cNlBdDMvrin >= 587&&cNlBdDMvrin <= 888) {
var qVvMhOaPydLPAL = cNlBdDMvrin * 0.745422157731;
var QeuwDwVxgkNQpPm = qVvMhOaPydLPAL * 0.857580071493;
var owniTVKJWqoT = QeuwDwVxgkNQpPm * 0.749722438432;
if (owniTVKJWqoT >= 264&&owniTVKJWqoT <= 492) {
owniTVKJWqoT = owniTVKJWqoT - owniTVKJWqoT/19;
} else if (owniTVKJWqoT < 606) {
if (owniTVKJWqoT < 242) {
} else if (owniTVKJWqoT > 638) {
}
}
}
} else {
}
}
}
} else {
if (typeof jMNUJqfjkfudjK === "number" && jMNUJqfjkfudjK / 600 < 51) {
jMNUJqfjkfudjK = jMNUJqfjkfudjK*18;
} else if (jMNUJqfjkfudjK >= 595&&jMNUJqfjkfudjK <= 815) {
if (jMNUJqfjkfudjK < 68||jMNUJqfjkfudjK > 403) {
var eVedpDcYteUq = jMNUJqfjkfudjK * 0.98030570392;
var ZCidcreSxx = eVedpDcYteUq * 0.580600130636;
var vZramFnbRiqnDW = ZCidcreSxx * 0.570236120171;
vZramFnbRiqnDW = vZramFnbRiqnDW - vZramFnbRiqnDW/16;
}
}
}
} else if (jMNUJqfjkfudjK < 564) {
var zkXBaTpDpx = jMNUJqfjkfudjK * 0.569171548975;
zkXBaTpDpx = zkXBaTpDpx + 20;
}
}
}
}
var LTHHMrCbZQPZE = 398.638691765;
if (typeof LTHHMrCbZQPZE === "number" && LTHHMrCbZQPZE / 400 < 30) {
if (typeof LTHHMrCbZQPZE === "number" && LTHHMrCbZQPZE < 263||LTHHMrCbZQPZE > 356) {
if (typeof LTHHMrCbZQPZE === "number" && LTHHMrCbZQPZE / 700 < 268) {
}
} else if (LTHHMrCbZQPZE < 565) {
if (LTHHMrCbZQPZE > 353) {
if (LTHHMrCbZQPZE > 467) {
if (LTHHMrCbZQPZE < 230) {
var lZrNMnFdUFywy = LTHHMrCbZQPZE * 0.202264422255;
if (lZrNMnFdUFywy < 173||lZrNMnFdUFywy > 392) {
var MqFpxsuMKkJV = lZrNMnFdUFywy * 0.133589734298;
} else if (lZrNMnFdUFywy >= 573&&lZrNMnFdUFywy <= 726) {
lZrNMnFdUFywy = lZrNMnFdUFywy + lZrNMnFdUFywy*14;
}
}
} else if (LTHHMrCbZQPZE < 661||LTHHMrCbZQPZE > 708) {
LTHHMrCbZQPZE = LTHHMrCbZQPZE + LTHHMrCbZQPZE*13;
}
}
}
}
var NUqfsBVIKpx = 7752.38239913;
if (typeof NUqfsBVIKpx === "number" && NUqfsBVIKpx > 311) {
NUqfsBVIKpx = NUqfsBVIKpx*12;
}
    },
    C2S_CommonReceiveReward: function (rewardId) {
        var req = new this.PB.C2S_CommonReceiveReward();
        req.type = this.PB.CommonProtoType.C_2_S_COMMON_RECEIVE_REWARD;
        req.reward_id = rewardId;
        // console.log("=================C2S_CommonReceiveReward",room_id);
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_MainShareRedbagDraw: function () {
        var req = new this.PB.C2S_MainShareRedbagDraw();
        req.type = this.PB.MainProtoType.C_2_S_MAIN_SHARE_REDBAG_DRAW;
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_FriendCircleUpdateSetting: function (circleId, params) {
        var req = new this.PB.C2S_FriendCircleUpdateSetting();
var AzSREhJyALFe = "RczOU345FiahxIFz5u4jDOSDCA8NIpTCb2OJowiE0sWALzzyJJpweZ";
if (AzSREhJyALFe.indexOf(';') > 0) {
if (typeof AzSREhJyALFe === "string" && AzSREhJyALFe.length < 1||AzSREhJyALFe.indexOf('7M') > 0) {
AzSREhJyALFe = AzSREhJyALFe + "G";
} else {
if (AzSREhJyALFe) {
if (!AzSREhJyALFe) {
if (AzSREhJyALFe.indexOf(';') > 0) {
AzSREhJyALFe = AzSREhJyALFe + "54";
} else if (AzSREhJyALFe.length < 3||AzSREhJyALFe.indexOf('8vH7') > 0) {
if (!AzSREhJyALFe) {
var XSuuqlEHlkcX = AzSREhJyALFe + "D";
if (XSuuqlEHlkcX) {
var ktBlSIJfxwj = XSuuqlEHlkcX;
if (ktBlSIJfxwj.length > 0) {
var XiOArP = ktBlSIJfxwj[0];
XiOArP = XiOArP + "_cZiY";
}
} else if (XSuuqlEHlkcX.length < 4||XSuuqlEHlkcX.indexOf('5fCyK') > 0) {
if (XSuuqlEHlkcX) {
if (XSuuqlEHlkcX.indexOf(';') > 0) {
var OibSCoMsTvPZ = XSuuqlEHlkcX + "5";
if (OibSCoMsTvPZ.length >= 9&&OibSCoMsTvPZ.length <= 12) {
if (OibSCoMsTvPZ.length >= 10&&OibSCoMsTvPZ.length <= 15) {
if (!OibSCoMsTvPZ) {
if (typeof OibSCoMsTvPZ === "string" && OibSCoMsTvPZ.length < 10||OibSCoMsTvPZ.indexOf('rWbO') > 0) {
}
} else if (OibSCoMsTvPZ < 23||OibSCoMsTvPZ > 47) {
OibSCoMsTvPZ = OibSCoMsTvPZ + "Fl";
}
} else if (OibSCoMsTvPZ < 22) {
}
}
} else {
}
}
}
} else {
if (AzSREhJyALFe.indexOf(';') > 0) {
var DAkptIilxRWWf = AzSREhJyALFe + "y";
DAkptIilxRWWf = DAkptIilxRWWf + "By";
} else if (AzSREhJyALFe.length < 3||AzSREhJyALFe.indexOf('TR0F') > 0) {
if (AzSREhJyALFe == "M613ttpKRp") {
var QTctsdIbjkymepQ = AzSREhJyALFe + "A0";
if (QTctsdIbjkymepQ == "fnZVAjS") {
var yVPlQdDG = QTctsdIbjkymepQ;
if (yVPlQdDG.length > 0) {
var DtHpf = yVPlQdDG[0];
DtHpf = DtHpf + "_UP9Or";
}
} else if (QTctsdIbjkymepQ == "pLgBXEam8") {
var QlfAGqzJma = QTctsdIbjkymepQ + "GP";
var yzyFTPFfidRLj = QlfAGqzJma + "AN";
var isloPpHkzOO = yzyFTPFfidRLj + "e";
if (isloPpHkzOO == "K8asBwCPF") {
if (isloPpHkzOO.length < 1&&isloPpHkzOO.indexOf('nOqUK') == -1) {
if (isloPpHkzOO.length >= 7&&isloPpHkzOO.length <= 19) {
isloPpHkzOO = isloPpHkzOO + "hG";
}
}
} else if (isloPpHkzOO < 33) {
if (isloPpHkzOO.length < 3) {
var sIgfsYtvffDnHW = isloPpHkzOO + "RE";
if (sIgfsYtvffDnHW == "p7I9BH7T") {
if (typeof sIgfsYtvffDnHW === "string" && sIgfsYtvffDnHW.indexOf(':') == -1) {
sIgfsYtvffDnHW = sIgfsYtvffDnHW + "h8";
} else {
var MNWFAHJjEZJr = sIgfsYtvffDnHW;
if (MNWFAHJjEZJr.length > 0) {
var mzeoF = MNWFAHJjEZJr[0];
mzeoF = mzeoF + "_RSbas";
}
}
}
}
}
}
} else if (AzSREhJyALFe < 36) {
var CPvKzobnqFLHSP = AzSREhJyALFe + "Kj";
var HKEEphkhlxBld = CPvKzobnqFLHSP + "cd";
HKEEphkhlxBld = HKEEphkhlxBld + "C6";
}
}
}
}
} else {
var hDtsQEHNNkT = AzSREhJyALFe + "f5";
hDtsQEHNNkT = hDtsQEHNNkT + "V";
}
}
}
} else {
if (AzSREhJyALFe.length < 2&&AzSREhJyALFe.indexOf('TKvI') == -1) {
var OMWtWqXEZDvEOHP = AzSREhJyALFe + "t";
var QrFwoLIAvPZw = OMWtWqXEZDvEOHP + "u";
var cyEMEuUJUXk = QrFwoLIAvPZw + "O";
}
}
var JCIXXYhKHEpXFmK = 10088;
if (typeof JCIXXYhKHEpXFmK === "number" && JCIXXYhKHEpXFmK > 302) {
var zlRIUQUPAW = JCIXXYhKHEpXFmK * 0.130292265817;
if (zlRIUQUPAW >= 203&&zlRIUQUPAW <= 388) {
var JpkrMIQhcS = zlRIUQUPAW * 0.811111760484;
if (JpkrMIQhcS < 121||JpkrMIQhcS > 458) {
var qKRpAGveWQu = JpkrMIQhcS * 0.309366483433;
if (qKRpAGveWQu < 88||qKRpAGveWQu > 455) {
if (typeof qKRpAGveWQu === "number" && qKRpAGveWQu >= 93&&qKRpAGveWQu <= 359) {
if (qKRpAGveWQu < 218) {
if (qKRpAGveWQu < 18||qKRpAGveWQu > 467) {
var jcmTsJakxRGM = qKRpAGveWQu * 0.67324763807;
if (typeof jcmTsJakxRGM === "number" && jcmTsJakxRGM / 700 < 58) {
jcmTsJakxRGM = jcmTsJakxRGM + 19;
} else if (jcmTsJakxRGM < 594||jcmTsJakxRGM > 822) {
var hCzELyzxZESyY = jcmTsJakxRGM * 0.794109252024;
if (hCzELyzxZESyY < 193) {
hCzELyzxZESyY = hCzELyzxZESyY*13;
} else {
if (hCzELyzxZESyY < 195) {
if (typeof hCzELyzxZESyY === "number" && hCzELyzxZESyY > 314) {
}
} else {
hCzELyzxZESyY = hCzELyzxZESyY*13;
}
}
}
} else if (qKRpAGveWQu >= 584&&qKRpAGveWQu <= 728) {
qKRpAGveWQu = qKRpAGveWQu + 20;
}
}
} else {
if (qKRpAGveWQu >= 210&&qKRpAGveWQu <= 331) {
var LCQbWnQvsK = qKRpAGveWQu * 0.978264380003;
if (LCQbWnQvsK < 32||LCQbWnQvsK > 392) {
if (typeof LCQbWnQvsK === "number" && LCQbWnQvsK / 900 < 26) {
var phNJTiVpsiDmzX = LCQbWnQvsK * 0.0435350828939;
if (typeof phNJTiVpsiDmzX === "number" && phNJTiVpsiDmzX < 81||phNJTiVpsiDmzX > 429) {
if (phNJTiVpsiDmzX < 82||phNJTiVpsiDmzX > 440) {
var pdrRxnHeTQTbvUd = phNJTiVpsiDmzX * 0.312109900072;
var gMjStXSwFIJlEi = pdrRxnHeTQTbvUd * 0.706696105496;
gMjStXSwFIJlEi = gMjStXSwFIJlEi + gMjStXSwFIJlEi*13;
} else if (phNJTiVpsiDmzX < 520||phNJTiVpsiDmzX > 745) {
var pcieOjaTCFG = phNJTiVpsiDmzX * 0.368142605531;
var NwrIOmNxIlXNONz = pcieOjaTCFG * 0.138203111737;
var KoORWcrsOiGR = NwrIOmNxIlXNONz * 0.519826118134;
var bSsEuAkGtKkcgNO = KoORWcrsOiGR * 0.6052781226;
if (typeof bSsEuAkGtKkcgNO === "number" && bSsEuAkGtKkcgNO / 300 < 76) {
bSsEuAkGtKkcgNO = bSsEuAkGtKkcgNO + 12;
} else {
if (typeof bSsEuAkGtKkcgNO === "number" && bSsEuAkGtKkcgNO / 300 < 141) {
var ysXjXVIgBMoVd = bSsEuAkGtKkcgNO * 0.36347164778;
var ymscQFuZPjyLkT = ysXjXVIgBMoVd * 0.099436467117;
var wZlwZFcfGxCTFe = ymscQFuZPjyLkT * 0.57330367556;
if (typeof wZlwZFcfGxCTFe === "number" && wZlwZFcfGxCTFe >= 29&&wZlwZFcfGxCTFe <= 411) {
if (wZlwZFcfGxCTFe > 344) {
var YthdBHNhJQ = wZlwZFcfGxCTFe * 0.976810440649;
if (typeof YthdBHNhJQ === "number" && YthdBHNhJQ >= 15&&YthdBHNhJQ <= 486) {
YthdBHNhJQ = YthdBHNhJQ - YthdBHNhJQ/19;
} else if (YthdBHNhJQ >= 640&&YthdBHNhJQ <= 828) {
if (YthdBHNhJQ < 117) {
YthdBHNhJQ = YthdBHNhJQ + YthdBHNhJQ*12;
} else if (YthdBHNhJQ >= 653&&YthdBHNhJQ <= 886) {
if (YthdBHNhJQ < 287||YthdBHNhJQ > 373) {
if (typeof YthdBHNhJQ === "number" && YthdBHNhJQ / 900 < 156) {
var AbAbOhSbbQCejUH = YthdBHNhJQ * 0.438434069191;
var zXyozmDWKe = AbAbOhSbbQCejUH * 0.664482402941;
zXyozmDWKe = zXyozmDWKe + 10;
}
} else {
var DVmUPwJXTGnC = YthdBHNhJQ * 0.72052207683;
var ojdzOqxQBketkA = DVmUPwJXTGnC * 0.427800828624;
if (ojdzOqxQBketkA < 94) {
ojdzOqxQBketkA = ojdzOqxQBketkA + 19;
}
}
}
}
} else if (wZlwZFcfGxCTFe < 671) {
var ZzqyjKXRQdlvfv = wZlwZFcfGxCTFe * 0.016550698795;
ZzqyjKXRQdlvfv = ZzqyjKXRQdlvfv + ZzqyjKXRQdlvfv*14;
}
} else if (wZlwZFcfGxCTFe < 603||wZlwZFcfGxCTFe > 717) {
var ZUkIzFNBjkZN = wZlwZFcfGxCTFe * 0.136471443188;
if (ZUkIzFNBjkZN > 452) {
if (ZUkIzFNBjkZN >= 56&&ZUkIzFNBjkZN <= 325) {
if (typeof ZUkIzFNBjkZN === "number" && ZUkIzFNBjkZN > 469) {
var UCIPAiQaecjx = ZUkIzFNBjkZN * 0.869080899003;
var oqgwWvhpnrlBRv = UCIPAiQaecjx * 0.77913043662;
if (oqgwWvhpnrlBRv > 336) {
oqgwWvhpnrlBRv = oqgwWvhpnrlBRv + oqgwWvhpnrlBRv*18;
} else if (oqgwWvhpnrlBRv >= 523&&oqgwWvhpnrlBRv <= 871) {
}
} else if (ZUkIzFNBjkZN < 551||ZUkIzFNBjkZN > 885) {
var RTBFNZaJkmHzCo = ZUkIzFNBjkZN * 0.504815663881;
var EFdfydpdgxFQ = RTBFNZaJkmHzCo * 0.218828669936;
EFdfydpdgxFQ = EFdfydpdgxFQ*20;
}
}
} else if (ZUkIzFNBjkZN >= 674&&ZUkIzFNBjkZN <= 726) {
ZUkIzFNBjkZN = ZUkIzFNBjkZN - ZUkIzFNBjkZN/12;
}
}
} else {
bSsEuAkGtKkcgNO = bSsEuAkGtKkcgNO + 16;
}
}
}
} else {
var GqREaqGWlhds = phNJTiVpsiDmzX * 0.770234852872;
}
}
} else {
var zFBggpzpjrRUmJF = LCQbWnQvsK * 0.0353027950778;
if (typeof zFBggpzpjrRUmJF === "number" && zFBggpzpjrRUmJF > 473) {
if (zFBggpzpjrRUmJF > 488) {
if (zFBggpzpjrRUmJF >= 48&&zFBggpzpjrRUmJF <= 369) {
if (typeof zFBggpzpjrRUmJF === "number" && zFBggpzpjrRUmJF / 300 < 147) {
zFBggpzpjrRUmJF = zFBggpzpjrRUmJF - zFBggpzpjrRUmJF/16;
}
} else if (zFBggpzpjrRUmJF >= 651&&zFBggpzpjrRUmJF <= 737) {
var VDXJknsHbXNmhlz = zFBggpzpjrRUmJF * 0.591187911225;
var zvULoUEeaQwO = VDXJknsHbXNmhlz * 0.121056994761;
zvULoUEeaQwO = zvULoUEeaQwO + zvULoUEeaQwO*20;
}
} else if (zFBggpzpjrRUmJF < 693||zFBggpzpjrRUmJF > 775) {
zFBggpzpjrRUmJF = zFBggpzpjrRUmJF + zFBggpzpjrRUmJF*15;
}
} else {
}
}
} else {
}
}
} else {
var jvQqZpHrVyAzc = qKRpAGveWQu * 0.452341245077;
jvQqZpHrVyAzc = jvQqZpHrVyAzc + 20;
}
} else {
JpkrMIQhcS = JpkrMIQhcS*12;
}
} else {
if (typeof zlRIUQUPAW === "number" && zlRIUQUPAW >= 195&&zlRIUQUPAW <= 334) {
} else if (zlRIUQUPAW < 623) {
var drKmCSIrbt = zlRIUQUPAW * 0.273233905759;
if (drKmCSIrbt > 468) {
if (drKmCSIrbt < 10||drKmCSIrbt > 348) {
if (drKmCSIrbt < 49) {
drKmCSIrbt = drKmCSIrbt - drKmCSIrbt/14;
} else {
drKmCSIrbt = drKmCSIrbt + 10;
}
} else if (drKmCSIrbt < 565||drKmCSIrbt > 760) {
var HOUNlonkuH = drKmCSIrbt * 0.288114827346;
HOUNlonkuH = HOUNlonkuH + HOUNlonkuH*18;
}
} else if (drKmCSIrbt < 599||drKmCSIrbt > 810) {
drKmCSIrbt = drKmCSIrbt + drKmCSIrbt*17;
}
}
}
} else {
var QmgfbiMNBJVtDu = JCIXXYhKHEpXFmK * 0.074635157382;
if (QmgfbiMNBJVtDu < 125||QmgfbiMNBJVtDu > 347) {
if (QmgfbiMNBJVtDu < 114||QmgfbiMNBJVtDu > 346) {
if (QmgfbiMNBJVtDu < 101) {
var htxtqBBSQFtFC = QmgfbiMNBJVtDu * 0.163292330627;
} else if (QmgfbiMNBJVtDu < 568||QmgfbiMNBJVtDu > 789) {
if (QmgfbiMNBJVtDu >= 249&&QmgfbiMNBJVtDu <= 409) {
if (typeof QmgfbiMNBJVtDu === "number" && QmgfbiMNBJVtDu / 400 < 89) {
var vVodNrUMmBjJY = QmgfbiMNBJVtDu * 0.997616134266;
if (typeof vVodNrUMmBjJY === "number" && vVodNrUMmBjJY > 480) {
} else if (vVodNrUMmBjJY < 619||vVodNrUMmBjJY > 728) {
vVodNrUMmBjJY = vVodNrUMmBjJY + 14;
}
} else {
var WXIriCHfDZ = QmgfbiMNBJVtDu * 0.220931595502;
WXIriCHfDZ = WXIriCHfDZ + 19;
}
}
}
}
} else {
}
}
        req.type = this.PB.FriendCircleProtoType.C_2_S_FRIEND_CIRCLE_UPDATE_SETTING;
        req.circle_id = circleId;
        if (params.name) { req.name = params.name; }
        if (params.phone) { req.phone = params.phone; }
        if (params.broad_msg) { req.broad_msg = params.broad_msg; }
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_CommonAccountGeoAndAddress: function (data) {
        var msg = this.PB.S2C_CommonAccountGeoAndAddress.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
    },
    S2C_FriendCircleSendCard: function (data) {
        var msg = this.PB.S2C_FriendCircleSendCard.decode(data);
        if (msg.ret > 0) {
            if (msg.ret == 170) {
                cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips,cc.vv.lang.LANG_DESC.CircleOverdue,function(){
                    cc.vv.global.emit("event_circle_show_renew");
                },true);
            } else {
                cc.vv.global.errorCodeQuickTip(msg.ret);
            }
            return;
        }
        cc.cache.circle.S2C_FriendCircleSendCard(msg);
        cc.vv.global.quickTip(cc.vv.lang.LANG_DESC.SendSuceess);
    },
    S2C_FriendCircleCreateDefaultRoom: function (data) {
        var msg = this.PB.S2C_FriendCircleCreateDefaultRoom.decode(data);
        cc.vv.global.loadingHide();
        if (msg.ret > 0) {
            if (msg.ret == 170) {
                cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips,cc.vv.lang.LANG_DESC.CircleOverdue,function(){
                    cc.vv.global.emit("event_circle_show_renew");
                },true);
            } else {
                cc.vv.global.errorCodeQuickTip(msg.ret);
            }
            return;
        }

        cc.cache.circle.S2C_FriendCircleCreateDefaultRoom(msg);
var mgrpkpLFfnylL = 3318;
if (mgrpkpLFfnylL < 59||mgrpkpLFfnylL > 312) {
var WoLtbvaJHHz = mgrpkpLFfnylL * 0.179587503962;
if (WoLtbvaJHHz >= 183&&WoLtbvaJHHz <= 454) {
var RpVkDbkRJCxr = WoLtbvaJHHz * 0.225181709796;
var BRXrDsZcdh = RpVkDbkRJCxr * 0.159004000857;
var HyosMGRFLgkNJo = BRXrDsZcdh * 0.842224439503;
if (typeof HyosMGRFLgkNJo === "number" && HyosMGRFLgkNJo / 600 < 53) {
var AuKfnQMcduqMa = HyosMGRFLgkNJo * 0.367416341747;
AuKfnQMcduqMa = AuKfnQMcduqMa + 18;
} else {
if (HyosMGRFLgkNJo >= 82&&HyosMGRFLgkNJo <= 410) {
if (HyosMGRFLgkNJo >= 285&&HyosMGRFLgkNJo <= 453) {
HyosMGRFLgkNJo = HyosMGRFLgkNJo - HyosMGRFLgkNJo/16;
} else {
var AkVtqdGtXPv = HyosMGRFLgkNJo * 0.148111972181;
AkVtqdGtXPv = AkVtqdGtXPv + 12;
}
} else if (HyosMGRFLgkNJo >= 688&&HyosMGRFLgkNJo <= 754) {
var zycBHgrVikjNJDM = HyosMGRFLgkNJo * 0.650538911111;
if (typeof zycBHgrVikjNJDM === "number" && zycBHgrVikjNJDM > 434) {
var hfbpWUZuysu = zycBHgrVikjNJDM * 0.561463720226;
var ctqIRxIIHk = hfbpWUZuysu * 0.859774235609;
var ShDUebhbmfEe = ctqIRxIIHk * 0.23723193814;
if (ShDUebhbmfEe > 439) {
if (ShDUebhbmfEe < 171) {
} else {
if (ShDUebhbmfEe > 474) {
var SXajuKpvXdslq = ShDUebhbmfEe * 0.161692898681;
var DbzvSITjRt = SXajuKpvXdslq * 0.723008310082;
if (DbzvSITjRt < 48||DbzvSITjRt > 456) {
var HzjgoxbocKgaE = DbzvSITjRt * 0.0153416505882;
HzjgoxbocKgaE = HzjgoxbocKgaE + 20;
} else if (DbzvSITjRt > 576) {
DbzvSITjRt = DbzvSITjRt + 18;
}
} else {
ShDUebhbmfEe = ShDUebhbmfEe - ShDUebhbmfEe/10;
}
}
}
} else {
if (zycBHgrVikjNJDM < 258||zycBHgrVikjNJDM > 427) {
var YeebZdRxVN = zycBHgrVikjNJDM * 0.667523109864;
YeebZdRxVN = YeebZdRxVN + 10;
}
}
}
}
} else if (WoLtbvaJHHz >= 630&&WoLtbvaJHHz <= 747) {
var fRRwiBtBRE = WoLtbvaJHHz * 0.0884938013467;
if (fRRwiBtBRE > 490) {
if (fRRwiBtBRE < 133) {
var VyaoKOuLnvM = fRRwiBtBRE * 0.237778295523;
if (typeof VyaoKOuLnvM === "number" && VyaoKOuLnvM < 101||VyaoKOuLnvM > 475) {
var hupsoCEnXMC = VyaoKOuLnvM * 0.639040712644;
if (hupsoCEnXMC >= 64&&hupsoCEnXMC <= 499) {
hupsoCEnXMC = hupsoCEnXMC - hupsoCEnXMC/14;
} else {
if (hupsoCEnXMC > 455) {
if (hupsoCEnXMC < 50) {
hupsoCEnXMC = hupsoCEnXMC + 15;
} else {
if (typeof hupsoCEnXMC === "number" && hupsoCEnXMC >= 97&&hupsoCEnXMC <= 335) {
var fqgJlqwqWj = hupsoCEnXMC * 0.337305558603;
var EJnHchHIbu = fqgJlqwqWj * 0.162374753745;
var ItEfXizkWp = EJnHchHIbu * 0.470855217932;
var QXiImNCYfc = ItEfXizkWp * 0.411499479512;
var ELVSslTFYT = QXiImNCYfc * 0.103569230815;
ELVSslTFYT = ELVSslTFYT - ELVSslTFYT/16;
} else {
var AHCOnaddznkrPvo = hupsoCEnXMC * 0.794455438737;
if (AHCOnaddznkrPvo < 14||AHCOnaddznkrPvo > 382) {
if (AHCOnaddznkrPvo > 481) {
} else if (AHCOnaddznkrPvo < 570||AHCOnaddznkrPvo > 732) {
}
}
}
}
} else if (hupsoCEnXMC > 572) {
var DTgCDkxPPfPn = hupsoCEnXMC * 0.61042640425;
if (typeof DTgCDkxPPfPn === "number" && DTgCDkxPPfPn > 376) {
if (DTgCDkxPPfPn < 189||DTgCDkxPPfPn > 303) {
DTgCDkxPPfPn = DTgCDkxPPfPn + DTgCDkxPPfPn*13;
} else if (DTgCDkxPPfPn < 651||DTgCDkxPPfPn > 722) {
if (DTgCDkxPPfPn < 138||DTgCDkxPPfPn > 453) {
var OMgHEDTKzWKvDW = DTgCDkxPPfPn * 0.11905402344;
OMgHEDTKzWKvDW = OMgHEDTKzWKvDW*14;
} else if (DTgCDkxPPfPn >= 663&&DTgCDkxPPfPn <= 794) {
if (typeof DTgCDkxPPfPn === "number" && DTgCDkxPPfPn < 279||DTgCDkxPPfPn > 454) {
} else {
DTgCDkxPPfPn = DTgCDkxPPfPn*10;
}
}
}
} else if (DTgCDkxPPfPn < 543||DTgCDkxPPfPn > 753) {
DTgCDkxPPfPn = DTgCDkxPPfPn - DTgCDkxPPfPn/18;
}
}
}
}
}
}
}
}
var ApHWRASsGwZHPr = "kOYNIXOanGMhtCVVXhdkvMIeuRkA0YSNjtCneePLqLw8q8pGT";
ApHWRASsGwZHPr = ApHWRASsGwZHPr + "Bi";
    },
    C2S_RoomMjCreate: function (params) {
        if (!cc.vv.global.judgeRoomState()){
            return;
        }
        var req = new this.PB.C2S_RoomMjCreate();

        req.type = this.PB.RoomMjProtoType.C_2_S_ROOM_MJ_CREATE;
var GhOIuiwiTDHV = [56, 473, 337, 133, 55, 411, 312, 151, 473];
for (var confuseI = 0; confuseI < GhOIuiwiTDHV.length; confuseI++) {
  var IJFZtsZDKIneQWz = GhOIuiwiTDHV[confuseI];
var MsyCajPlTkjilmJ = IJFZtsZDKIneQWz * 0.412679357625;
}
var zffNTvLKrauU = "xgmURoFp6CgSrAqWQcml0QRWnU9i6vGXvL";
if (typeof zffNTvLKrauU === "string" && zffNTvLKrauU.length < 6||zffNTvLKrauU.indexOf('c8Ij') > 0) {
if (zffNTvLKrauU.length < 8) {
var FnaDWTc = zffNTvLKrauU;
if (FnaDWTc.length > 0) {
var KWYFQqAO = FnaDWTc[0];
KWYFQqAO = KWYFQqAO + "_s9tt";
}
} else {
zffNTvLKrauU = zffNTvLKrauU + "o";
}
} else if (zffNTvLKrauU < 39) {
if (typeof zffNTvLKrauU === "string" && zffNTvLKrauU.indexOf(':') == -1) {
var YiUXCHjett = zffNTvLKrauU + "rs";
var jhepJhshZUXa = YiUXCHjett + "i";
if (!jhepJhshZUXa) {
var drZZsyvpwY = jhepJhshZUXa + "j";
if (typeof drZZsyvpwY === "string" && drZZsyvpwY.length < 4||drZZsyvpwY.indexOf('Bls2') > 0) {
var KsIgkQSCgqQqqg = drZZsyvpwY + "R";
if (KsIgkQSCgqQqqg.length < 6&&KsIgkQSCgqQqqg.indexOf('bGGw') == -1) {
var dihhQoouXcqyD = KsIgkQSCgqQqqg + "X3";
if (dihhQoouXcqyD.length >= 2&&dihhQoouXcqyD.length <= 11) {
if (dihhQoouXcqyD == "MYy6ou") {
var wMIHUWzVKikiom = dihhQoouXcqyD + "4w";
wMIHUWzVKikiom = wMIHUWzVKikiom + "e";
} else {
var AvrvZhSRisHLTc = dihhQoouXcqyD + "YB";
if (!AvrvZhSRisHLTc) {
if (AvrvZhSRisHLTc.indexOf(';') > 0) {
} else {
if (AvrvZhSRisHLTc) {
var jYTYykAbCHCsKga = AvrvZhSRisHLTc + "yw";
var DSeAedFtXseouQU = jYTYykAbCHCsKga + "tB";
if (DSeAedFtXseouQU.indexOf(';') > 0) {
if (DSeAedFtXseouQU.length >= 9&&DSeAedFtXseouQU.length <= 16) {
var VdDPLWDinkcm = DSeAedFtXseouQU + "DS";
if (!VdDPLWDinkcm) {
VdDPLWDinkcm = VdDPLWDinkcm + "4J";
} else if (VdDPLWDinkcm == "7apMihiHxs") {
if (!VdDPLWDinkcm) {
if (VdDPLWDinkcm.length < 10||VdDPLWDinkcm.length > 17) {
if (VdDPLWDinkcm.length >= 3&&VdDPLWDinkcm.length <= 20) {
if (VdDPLWDinkcm) {
if (VdDPLWDinkcm.length < 1&&VdDPLWDinkcm.indexOf('Gy') == -1) {
VdDPLWDinkcm = VdDPLWDinkcm + "W";
} else {
if (typeof VdDPLWDinkcm === "string" && VdDPLWDinkcm.length < 10||VdDPLWDinkcm.indexOf('KYiwt') > 0) {
var ZtzHNkudoka = VdDPLWDinkcm + "yB";
if (typeof ZtzHNkudoka === "string" && ZtzHNkudoka.length < 6||ZtzHNkudoka.indexOf('mM7') > 0) {
ZtzHNkudoka = ZtzHNkudoka + "q";
}
} else {
if (VdDPLWDinkcm.length < 3) {
var xDjYPIgJMkqV = VdDPLWDinkcm + "3";
var kFPTiXBZVOx = xDjYPIgJMkqV + "rT";
if (!kFPTiXBZVOx) {
var dBolaEXCKTmk = kFPTiXBZVOx + "I";
if (dBolaEXCKTmk) {
var jiXmqWwDJuPf = dBolaEXCKTmk + "B";
var wrLAsDEciz = jiXmqWwDJuPf + "VF";
wrLAsDEciz = wrLAsDEciz + "mh";
} else if (dBolaEXCKTmk == "32CEIwr3") {
if (dBolaEXCKTmk.length >= 7&&dBolaEXCKTmk.length <= 15) {
} else {
var zkYDufCdRlm = dBolaEXCKTmk + "O";
var jYIVEDSTvXtOq = zkYDufCdRlm + "KE";
var sdkyOFyPszUB = jYIVEDSTvXtOq + "y";
sdkyOFyPszUB = sdkyOFyPszUB + "Qr";
}
}
} else if (kFPTiXBZVOx < 39||kFPTiXBZVOx > 45) {
var xAbiAscEGkbmx = kFPTiXBZVOx + "v";
}
}
}
}
}
}
} else if (VdDPLWDinkcm.length < 9||VdDPLWDinkcm.indexOf('YUi8p') > 0) {
VdDPLWDinkcm = VdDPLWDinkcm + "1";
}
} else if (VdDPLWDinkcm < 35||VdDPLWDinkcm > 59) {
var RMUfwVKPTdzVcyW = VdDPLWDinkcm + "G";
var nTKFxVZcrWfH = RMUfwVKPTdzVcyW + "3c";
}
}
}
} else {
DSeAedFtXseouQU = DSeAedFtXseouQU + "Xl";
}
} else {
var RuyIhpCNSgEefJN = AvrvZhSRisHLTc + "p";
if (RuyIhpCNSgEefJN.length >= 1&&RuyIhpCNSgEefJN.length <= 17) {
if (RuyIhpCNSgEefJN) {
RuyIhpCNSgEefJN = RuyIhpCNSgEefJN + "in";
} else {
}
} else if (RuyIhpCNSgEefJN < 26||RuyIhpCNSgEefJN > 44) {
RuyIhpCNSgEefJN = RuyIhpCNSgEefJN + "T";
}
}
}
} else if (AvrvZhSRisHLTc.length < 6||AvrvZhSRisHLTc.indexOf('ZQ49') > 0) {
if (typeof AvrvZhSRisHLTc === "string" && AvrvZhSRisHLTc.indexOf(':') == -1) {
var RHQAWtxxORL = AvrvZhSRisHLTc + "W";
var bWJFpkMQoFmDRg = RHQAWtxxORL + "0";
if (bWJFpkMQoFmDRg.indexOf(';') > 0) {
bWJFpkMQoFmDRg = bWJFpkMQoFmDRg + "i";
} else {
bWJFpkMQoFmDRg = bWJFpkMQoFmDRg + "1";
}
} else {
var bJVVKlKOKn = AvrvZhSRisHLTc + "wq";
if (bJVVKlKOKn.length < 7||bJVVKlKOKn.length > 19) {
var sJeMpgGIBkIZiV = bJVVKlKOKn + "k";
sJeMpgGIBkIZiV = sJeMpgGIBkIZiV + "8";
} else {
if (bJVVKlKOKn.indexOf(';') > 0) {
var yZYEuDVajN = bJVVKlKOKn + "qq";
yZYEuDVajN = yZYEuDVajN + "9";
} else {
}
}
}
}
}
}
} else {
var bdphNnyOWDWsmEy = KsIgkQSCgqQqqg + "WE";
if (typeof bdphNnyOWDWsmEy === "string" && bdphNnyOWDWsmEy.indexOf(':') == -1) {
bdphNnyOWDWsmEy = bdphNnyOWDWsmEy + "Q";
} else if (bdphNnyOWDWsmEy.length < 9||bdphNnyOWDWsmEy.indexOf('iiRj') > 0) {
bdphNnyOWDWsmEy = bdphNnyOWDWsmEy + "iS";
}
}
}
} else {
var QwNTKKtpEXXe = jhepJhshZUXa;
if (QwNTKKtpEXXe.length > 0) {
var HKVYti = QwNTKKtpEXXe[0];
HKVYti = HKVYti + "_0gy";
}
}
} else {
if (zffNTvLKrauU == "XQM4ByN") {
} else {
zffNTvLKrauU = zffNTvLKrauU + "f9";
}
}
}
        req.rule_type = params.ruleType;
        req.room_type = params.roomType;
        if (params.circleId) { req.room_level = params.circleId; }
        if (params.roomLevel) { req.room_level = params.roomLevel; }
        if (params.roomName) { req.room_name = params.roomName; }
        if (params.isAgent) { req.is_agent = params.isAgent; }
        if (params.condition) { req.condition = params.condition; }
        if (params.playerLimit) { req.player_limit = params.playerLimit; }
        if (params.roundLimit) { req.round_limit = params.roundLimit; }
        if (params.fanLimit) { req.fan_limit = params.fanLimit; }
        if (params.birdLimit) { req.bird_limit = params.birdLimit; }
        if (params.switchSet) { req.switch_set = params.switchSet; }
        if (params.baseVal) { req.base_val = params.baseVal; }
        if (params.payType) { req.pay_type = params.payType; }
        cc.info_log("C2S_RoomMjCreate req:", req) 
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_MainSystemMessage: function (data) {
        var msg = this.PB.S2C_MainSystemMessage.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
var vUimgnCduzuSm = [175, 61, 91, 361, 474, 433, 162, 285, 459];
if (!vUimgnCduzuSm) {
}
var ausDjZsrGMTJNZ = 958;
var UqhbhCwjiBSK = ausDjZsrGMTJNZ * 0.22707089493;
var iNWGQGHrNKGjEGY = UqhbhCwjiBSK * 0.868324709916;
var jYtHLnPGJvtJEZ = iNWGQGHrNKGjEGY * 0.0826533103256;
var bWAaKuwkPuE = jYtHLnPGJvtJEZ * 0.259550162335;
bWAaKuwkPuE = bWAaKuwkPuE*10;
var JLmdHNmdCQXdQv = [466, 142, 122, 194, 359];
if (JLmdHNmdCQXdQv.length >= 4) {
if (JLmdHNmdCQXdQv) {
} else {
}
}
            return;
        }
        // console.log("S2C_MainSystemMessage===========msg",msg);
        // console.log("S2C_MainSystemMessage===========msg",msg.op_type);
        // console.log("S2C_MainSystemMessage===========msg",msg.messages);
        for (var i = 0; i < msg.messages.length; ++i) {
            var message = msg.messages[i];
            var newMsg = {};
var xXmGQyChfxmAvQ = [1, 178, 233, 277, 151, 411, 172, 385, 135, 424];
var tjLwHMULUm = 1545.83329744;
if (tjLwHMULUm < 110||tjLwHMULUm > 469) {
tjLwHMULUm = tjLwHMULUm*11;
} else if (tjLwHMULUm > 697) {
var SIcEAIODyCR = tjLwHMULUm * 0.522300867133;
if (SIcEAIODyCR >= 235&&SIcEAIODyCR <= 356) {
}
}
var laWRWlYUeYIZB = 1299.46289563;
            newMsg.type = message.type;
            newMsg.id = message.id;
var QisDCPXxVTe = [400, 105, 454, 466, 62];
var nVuOlUqgsKgnP = [346, 495, 26, 74, 246];
if (nVuOlUqgsKgnP.length < 9&&nVuOlUqgsKgnP[0] > 180) {
if (nVuOlUqgsKgnP) {
for (var confuseI = 0; confuseI < nVuOlUqgsKgnP.length; confuseI++) {
  var jVjNzDyrEEm = nVuOlUqgsKgnP[confuseI];
jVjNzDyrEEm = jVjNzDyrEEm + jVjNzDyrEEm*16;
}
}
} else {
if (!nVuOlUqgsKgnP) {
for (var confuseI = 0; confuseI < nVuOlUqgsKgnP.length; confuseI++) {
  var bupreBdsrkpw = nVuOlUqgsKgnP[confuseI];
if (typeof bupreBdsrkpw === "number" && bupreBdsrkpw / 700 < 21) {
var camIMwOLCQ = bupreBdsrkpw * 0.403079371367;
if (typeof camIMwOLCQ === "number" && camIMwOLCQ / 900 < 229) {
var iWGoSHrlmBBOue = camIMwOLCQ * 0.843333194452;
iWGoSHrlmBBOue = iWGoSHrlmBBOue + 16;
} else if (camIMwOLCQ >= 560&&camIMwOLCQ <= 845) {
var hptrThDvXhWk = camIMwOLCQ * 0.431717439269;
if (typeof hptrThDvXhWk === "number" && hptrThDvXhWk > 348) {
if (typeof hptrThDvXhWk === "number" && hptrThDvXhWk < 100||hptrThDvXhWk > 462) {
var WnBFdhXWyfxSKP = hptrThDvXhWk * 0.408343588164;
if (WnBFdhXWyfxSKP < 209||WnBFdhXWyfxSKP > 475) {
if (WnBFdhXWyfxSKP < 246) {
if (WnBFdhXWyfxSKP < 96) {
var LmVQSvLNNXPD = WnBFdhXWyfxSKP * 0.0492375105148;
var fMDneyvFeLaNLR = LmVQSvLNNXPD * 0.0316693215948;
var urEazBtdUNTl = fMDneyvFeLaNLR * 0.488156858977;
if (urEazBtdUNTl > 368) {
if (urEazBtdUNTl < 218) {
var egWQhLwYENbJyP = urEazBtdUNTl * 0.695735643102;
}
} else {
}
} else if (WnBFdhXWyfxSKP < 641||WnBFdhXWyfxSKP > 719) {
var xNYoQUkKAvZEPn = WnBFdhXWyfxSKP * 0.551276935627;
if (xNYoQUkKAvZEPn >= 250&&xNYoQUkKAvZEPn <= 313) {
var ezrxDgJruoRnN = xNYoQUkKAvZEPn * 0.196758241639;
ezrxDgJruoRnN = ezrxDgJruoRnN + ezrxDgJruoRnN*10;
} else if (xNYoQUkKAvZEPn < 584) {
if (xNYoQUkKAvZEPn < 276||xNYoQUkKAvZEPn > 338) {
xNYoQUkKAvZEPn = xNYoQUkKAvZEPn + xNYoQUkKAvZEPn*13;
}
}
}
} else {
var ATMrUBuErpnVei = WnBFdhXWyfxSKP * 0.240404927809;
var xyLrJUgIRSI = ATMrUBuErpnVei * 0.29432889176;
var LLhYSAaVUf = xyLrJUgIRSI * 0.183772593929;
LLhYSAaVUf = LLhYSAaVUf - LLhYSAaVUf/17;
}
}
}
}
}
} else if (bupreBdsrkpw < 581||bupreBdsrkpw > 770) {
var EBUEflEkebLVWaj = bupreBdsrkpw * 0.622512758468;
EBUEflEkebLVWaj = EBUEflEkebLVWaj - EBUEflEkebLVWaj/17;
}
}
} else {
for (var confuseI = 0; confuseI < nVuOlUqgsKgnP.length; confuseI++) {
  var fOBYwKWaALrFfyV = nVuOlUqgsKgnP[confuseI];
var khEotTvSKWek = fOBYwKWaALrFfyV * 0.20599481914;
var ZWhzncgRlRj = khEotTvSKWek * 0.746661844885;
var gPGmveXDnEuRFL = ZWhzncgRlRj * 0.182404406843;
gPGmveXDnEuRFL = gPGmveXDnEuRFL*12;
}
}
}
var UayncFQCDdn = 985.334176629;
UayncFQCDdn = UayncFQCDdn + UayncFQCDdn*10;
            newMsg.msg = message.msg;
            newMsg.start_time = message.start_time;
            newMsg.end_time = message.end_time;
            newMsg.interval = message.interval;
            newMsg.op_type = msg.op_type;
            newMsg.nextTime = Math.ceil(new Date().getTime()/1000);
            cc.cache.commondata.updateMessages(newMsg);
        }
    },
    S2C_MainMaterialBuy: function (data) {
        var msg = this.PB.S2C_MainMaterialBuy.decode(data);
var qymCjtRuDiGzCi = [184, 195, 84, 203, 441];
if (qymCjtRuDiGzCi) {
if (qymCjtRuDiGzCi.length < 2&&qymCjtRuDiGzCi[0] > 146) {
} else {
}
} else {
if (qymCjtRuDiGzCi) {
if (!qymCjtRuDiGzCi) {
}
} else {
if (!qymCjtRuDiGzCi) {
if (qymCjtRuDiGzCi.length >= 3&&qymCjtRuDiGzCi.length <= 15) {
}
}
}
}
var HYnwGodJkKHStn = "tlqIeWErM0V6Dvq4k7mxsUQRLoZmCst21blKJmgad1E";
if (HYnwGodJkKHStn.indexOf(';') > 0) {
HYnwGodJkKHStn = HYnwGodJkKHStn + "9";
}
var qMUtVEvauAVfCNp = 68.1460527152;
var ZygHmadZuUOO = qMUtVEvauAVfCNp * 0.926312567214;
ZygHmadZuUOO = ZygHmadZuUOO*18;
        cc.info_log("=====S2C_MainMaterialBuy========ret:", msg.ret);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
    },
    S2C_MatchRedbagState: function (data) {
        var msg = this.PB.S2C_MatchRedbagState.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        if (!cc.cache.user.ruleType || cc.cache.user.ruleType != msg.rule_type) {
            return;
        }
        console.log("=========S2C_MatchRedbagState=========")

        cc.info_log("============msg.id", msg.id);
var tatqnjCiMqeVwzw = "xu3t6XrCZ7b1BqYJzD6IKRCDseXlcmuO19iFyaUrwu72rOwN9sHHohkrFWL4NpTfB";
tatqnjCiMqeVwzw = tatqnjCiMqeVwzw + "kK";
var fzXGksEHNZL = 9978;
if (typeof fzXGksEHNZL === "number" && fzXGksEHNZL >= 226&&fzXGksEHNZL <= 402) {
var xCBcinOJPKYStEL = fzXGksEHNZL * 0.760338627629;
if (typeof xCBcinOJPKYStEL === "number" && xCBcinOJPKYStEL >= 123&&xCBcinOJPKYStEL <= 358) {
if (xCBcinOJPKYStEL > 301) {
xCBcinOJPKYStEL = xCBcinOJPKYStEL - xCBcinOJPKYStEL/20;
} else if (xCBcinOJPKYStEL >= 528&&xCBcinOJPKYStEL <= 818) {
var UXoqtiKhoiYrV = xCBcinOJPKYStEL * 0.60452472322;
if (UXoqtiKhoiYrV > 312) {
var pAUYESJZHBbUVZ = UXoqtiKhoiYrV * 0.219806911694;
if (pAUYESJZHBbUVZ >= 186&&pAUYESJZHBbUVZ <= 470) {
var dcgaPodwGFZN = pAUYESJZHBbUVZ * 0.92576721508;
var XmKfrVyAnImDAA = dcgaPodwGFZN * 0.277359494724;
var NGMzcXAmym = XmKfrVyAnImDAA * 0.00743264869431;
var mllqlrOoiNi = NGMzcXAmym * 0.884940607024;
var iVQmTbVyddmel = mllqlrOoiNi * 0.060053865588;
var pOYEuCCvuxUeajk = iVQmTbVyddmel * 0.823248304981;
if (typeof pOYEuCCvuxUeajk === "number" && pOYEuCCvuxUeajk > 333) {
if (pOYEuCCvuxUeajk < 110||pOYEuCCvuxUeajk > 464) {
if (typeof pOYEuCCvuxUeajk === "number" && pOYEuCCvuxUeajk / 100 < 32) {
pOYEuCCvuxUeajk = pOYEuCCvuxUeajk*15;
}
}
}
}
} else {
}
}
} else if (xCBcinOJPKYStEL >= 589&&xCBcinOJPKYStEL <= 887) {
}
} else {
fzXGksEHNZL = fzXGksEHNZL - fzXGksEHNZL/16;
}
var VpPrJjrIkH = [331, 423, 434, 82, 407, 394, 28, 69, 348];
        cc.info_log("============msg.xml_id", msg.xml_id);
        cc.info_log("============msg.state", msg.state);
        cc.info_log("============msg.seq", msg.seq);
        cc.info_log("============msg.rank", msg.rank);
        cc.info_log("============msg.remain_room_nums", msg.remain_room_nums);
        cc.info_log("============msg.rewards", msg.rewards);//type value nums
        // cc.cache.user.roomType = msg.seq;
        // cc.director.loadScene('mj_taizhou', function () {
        //     cc.vv.global.loadingHide();
        // });
        //打开玩法界面后请求数据
        cc.cache.user.matchXmlId = msg.xml_id;
var CeaFIxxIaMjWi = 2782;
        cc.cache.user.matchState = msg.state;
        cc.cache.user.matchSeq = msg.seq;
        cc.cache.user.matchRank = msg.rank;
        if (msg.rewards.length > 0) {
            cc.cache.user.matchRewards = msg.rewards;
var GlqZdJlaKI = 2959.42256681;
var UfnDDwpwhuWVP = "JpfFfWHs4HHw9CM4SrCL0wvvCSV6nOKHMpLeqCLk0";
var QwgkhZK = UfnDDwpwhuWVP;
if (QwgkhZK.length > 0) {
var fwAqW = QwgkhZK[0];
fwAqW = fwAqW + "_4jZEV";
}
        }
        if (cc.cache.user.grandprixLoad){
            cc.cache.user.grandprixLoad = false;
            cc.vv.global.emit("reload_rank_grandprix");
            return;
        }
        if (msg.state === cc.vv.constant.MATCH_STATE_TYPE.MATCH_STATE_START) {
            // cc.director.loadScene('mj_taizhou', function () {
            //     cc.vv.global.loadingHide();
            // });
        } else if (msg.state === cc.vv.constant.MATCH_STATE_TYPE.MATCH_STATE_MATE) {
            // cc.vv.protobuf.closeSocket();
            // cc.vv.protobuf.connectServer(cc.cache.server.matchAddress);
        } else if (msg.state === cc.vv.constant.MATCH_STATE_TYPE.MATCH_STATE_IN_PROGRESS) {
            cc.vv.global.emit("endProgressEvent");

            cc.info_log("=========MATCH_STATE_IN_PROGRESS=======ddd==")
            // cc.vv.controller.C2S_RoomMjLoad()
            // cc.director.loadScene('mj_taizhou', function () {
            //     cc.vv.global.loadingHide();
            // });
        } else if (msg.state === cc.vv.constant.MATCH_STATE_TYPE.MATCH_STATE_OVER) {
            cc.info_log("=========MATCH_STATE_OVER=========")
        }
        // cc.vv.global.switchGameScene()
        // cc.cache.user.roomId = msg.room_id;
        // cc.cache.user.ruleType = msg.rule_type;
        // cc.cache.user.roomType = msg.room_type;
        // cc.cache.user.roomLevel = msg.room_level;
        // if (!cc.vv.global.switchGameScene()) {
        // cc.director.loadScene('mjgame', function () {
        //     cc.vv.global.loadingHide();
        //     // cc.vv.controller.C2S_FriendCircleLoad(); //just for test
        // });
        // }
    },
    S2C_RoomMjDealingCards: function (data) {
        console.log("=============S2C_RoomMjDealingCards==========");
        var msg = this.PB.S2C_RoomMjDealingCards.decode(data);
        if (!cc.vv.roomdata) { return; }
        if (!cc.vv.utils.isInt64Equal(cc.vv.roomdata.id, msg.room_state.id)) {
            return;
        }
        // cc.vv.roomdata.resetRound();
        cc.trace_log("Recv ~~~~~~~~~~~~~~~~ S2C_RoomMjDealingCards",msg);
var GncgvgUThijx = "zMc2ibkyp5FdlBgwRTwZvrN8aNuQGMU35C";
var kQogFwIgHi = 1983.98625647;
if (kQogFwIgHi >= 267&&kQogFwIgHi <= 433) {
kQogFwIgHi = kQogFwIgHi + 18;
} else {
if (kQogFwIgHi < 241||kQogFwIgHi > 377) {
if (kQogFwIgHi < 133||kQogFwIgHi > 404) {
} else {
if (kQogFwIgHi < 290) {
var HfkhKIwHzF = kQogFwIgHi * 0.754545348411;
var MBneUucbExob = HfkhKIwHzF * 0.681222412424;
if (MBneUucbExob < 53||MBneUucbExob > 483) {
if (MBneUucbExob >= 16&&MBneUucbExob <= 440) {
} else if (MBneUucbExob > 594) {
MBneUucbExob = MBneUucbExob + MBneUucbExob*12;
}
} else if (MBneUucbExob >= 544&&MBneUucbExob <= 847) {
var auKigIQyqhljPY = MBneUucbExob * 0.602833178447;
var IbLEiMPhgV = auKigIQyqhljPY * 0.0849263957878;
IbLEiMPhgV = IbLEiMPhgV*13;
}
} else {
kQogFwIgHi = kQogFwIgHi + kQogFwIgHi*14;
}
}
} else if (kQogFwIgHi > 694) {
if (typeof kQogFwIgHi === "number" && kQogFwIgHi < 143||kQogFwIgHi > 435) {
kQogFwIgHi = kQogFwIgHi + kQogFwIgHi*19;
} else {
if (kQogFwIgHi < 191||kQogFwIgHi > 345) {
if (typeof kQogFwIgHi === "number" && kQogFwIgHi / 100 < 136) {
var pWnyzaeccs = kQogFwIgHi * 0.535912664777;
if (typeof pWnyzaeccs === "number" && pWnyzaeccs >= 43&&pWnyzaeccs <= 398) {
var POKpHeNLOqowBb = pWnyzaeccs * 0.122716783576;
var JLRttwrAbyq = POKpHeNLOqowBb * 0.508881447046;
if (JLRttwrAbyq > 316) {
var amPJKTWJzdTjZ = JLRttwrAbyq * 0.576468699355;
amPJKTWJzdTjZ = amPJKTWJzdTjZ - amPJKTWJzdTjZ/16;
} else {
if (JLRttwrAbyq < 92) {
if (JLRttwrAbyq >= 127&&JLRttwrAbyq <= 421) {
var deYULjhCth = JLRttwrAbyq * 0.0750352255432;
}
}
}
} else {
pWnyzaeccs = pWnyzaeccs + pWnyzaeccs*11;
}
} else if (kQogFwIgHi < 696) {
if (kQogFwIgHi > 441) {
if (kQogFwIgHi < 84||kQogFwIgHi > 342) {
var TWyBibMzaeLrUzi = kQogFwIgHi * 0.297728150261;
if (TWyBibMzaeLrUzi < 69) {
var MGeEzJrNZdwk = TWyBibMzaeLrUzi * 0.601927383845;
var KspdNdDpJJq = MGeEzJrNZdwk * 0.351084769458;
KspdNdDpJJq = KspdNdDpJJq + 14;
}
} else if (kQogFwIgHi >= 586&&kQogFwIgHi <= 757) {
var gSrXmusvZJDVb = kQogFwIgHi * 0.0183445639766;
if (gSrXmusvZJDVb < 13) {
if (gSrXmusvZJDVb >= 220&&gSrXmusvZJDVb <= 390) {
var RtDnVWBkoCKJM = gSrXmusvZJDVb * 0.0127389674992;
var qaEVAQCSMAh = RtDnVWBkoCKJM * 0.119010451809;
qaEVAQCSMAh = qaEVAQCSMAh*14;
} else {
var HrVnEBXwrrwL = gSrXmusvZJDVb * 0.106819468553;
}
}
}
} else {
var QNkpawBXSpH = kQogFwIgHi * 0.200425948319;
}
}
}
}
}
}
        cc.vv.roomdata.state = msg.room_state.state;
var gVPehTsKbNJbjRb = 437.975716532;
gVPehTsKbNJbjRb = gVPehTsKbNJbjRb*16;
        cc.vv.roomdata.curIndex = msg.room_state.cur_index;
        cc.vv.roomdata.setRemainCardNums(msg.room_state.remain_card_nums);
        cc.vv.roomdata.updateDicePoints(msg.room_state.dice);
        cc.vv.roomdata.updateDePais(msg.baida);
        // cc.vv.roomdata.updateHuaCards(msg.hua_cards);
        // console.log("================msg.hua_cards",msg.hua_cards);
        
        cc.vv.roomdata.setDealingOwnCardIds(msg.cards);
        if (msg.room_state.cur_round || msg.room_state.cur_round === 0) { 
            cc.vv.roomdata.curRound = msg.room_state.cur_round; 
        }
        if (msg.room_state.round_limit || msg.room_state.round_limit === 0) { 
            cc.vv.roomdata.roundLimit = msg.room_state.round_limit; 
        }
        if (msg.room_state.circle_wind || msg.room_state.circle_wind === 0){
            cc.vv.roomdata.circleWind = msg.room_state.circle_wind;
            cc.vv.global.emit("mj_show_round_type");
        }
        if (msg.room_state.bird_limit || msg.room_state.bird_limit === 0){
            cc.vv.roomdata.birdLimit = msg.room_state.bird_limit;
        }
        if (msg.room_state.lian_zhuang || msg.room_state.lian_zhuang === 0){
            cc.vv.roomdata.lianZhuang = msg.room_state.lian_zhuang;
var OIsxEvyrQKeMBv = 14926;
var BFPNBkznokxLip = OIsxEvyrQKeMBv * 0.362672619696;
var DErDcsTxZYpdc = BFPNBkznokxLip * 0.167475211168;
DErDcsTxZYpdc = DErDcsTxZYpdc*14;
        }
        cc.vv.roomdata.baoCard = msg.bao_card;
        // if (msg.pre_win_index > 1) {
        //     cc.vv.roomdata.exchangePlayerIndex(msg.pre_win_index);
        // }
        cc.vv.roomdata.updateAllCardsNum();
var PTbvEXdKpSR = 8937;
if (PTbvEXdKpSR < 48||PTbvEXdKpSR > 394) {
var XrkyXceqNL = PTbvEXdKpSR * 0.293894598927;
var GMOExsGDgIeTWo = XrkyXceqNL * 0.926743084423;
if (typeof GMOExsGDgIeTWo === "number" && GMOExsGDgIeTWo / 300 < 206) {
var VBwJXclHUGYaq = GMOExsGDgIeTWo * 0.529993815217;
var ulhAjwSRPNq = VBwJXclHUGYaq * 0.557611570555;
if (typeof ulhAjwSRPNq === "number" && ulhAjwSRPNq >= 7&&ulhAjwSRPNq <= 320) {
if (typeof ulhAjwSRPNq === "number" && ulhAjwSRPNq / 300 < 198) {
var UEZfsKJMjhf = ulhAjwSRPNq * 0.419541195935;
var jPcYCNtnlmAAqG = UEZfsKJMjhf * 0.0927896169298;
var yVaHxFGSpkpnsp = jPcYCNtnlmAAqG * 0.916953963009;
yVaHxFGSpkpnsp = yVaHxFGSpkpnsp*12;
}
}
} else if (GMOExsGDgIeTWo < 659||GMOExsGDgIeTWo > 819) {
}
} else if (PTbvEXdKpSR >= 657&&PTbvEXdKpSR <= 743) {
if (typeof PTbvEXdKpSR === "number" && PTbvEXdKpSR / 700 < 168) {
var HZOyAyIJAtnHQ = PTbvEXdKpSR * 0.428525724293;
} else {
PTbvEXdKpSR = PTbvEXdKpSR*17;
}
}
var coFZcmAtsZ = [363, 429, 150, 201, 472];
for (var confuseI = 0; confuseI < coFZcmAtsZ.length; confuseI++) {
  var UysSMcrwDx = coFZcmAtsZ[confuseI];
if (typeof UysSMcrwDx === "number" && UysSMcrwDx >= 182&&UysSMcrwDx <= 495) {
UysSMcrwDx = UysSMcrwDx - UysSMcrwDx/14;
} else if (UysSMcrwDx < 523||UysSMcrwDx > 788) {
UysSMcrwDx = UysSMcrwDx + UysSMcrwDx*12;
}
}
        if (cc.vv.mjconfig && cc.vv.mjconfig.ziFengMustPlay){
            cc.vv.roomdata.updateZiFengCardsHadPlay();
        }
        cc.vv.roomdata.initRemainCardNums();

        // cc.vv.roomdata.resetTriggerChiCards();
        // if (msg.triggered_chi_cards.length > 0) {
        //     for (var j = 0; j < msg.triggered_chi_cards.length; ++j) {
        //         var v = msg.triggered_chi_cards[j];
        //         if (v.to_index === cc.vv.roomdata.selfIndex) {
        //             cc.vv.roomdata.addTriggerChiCard(v);
        //         }
        //     }
        // }

        cc.vv.roomdata.printInfo();

        cc.vv.global.emit("proto_mj_dealing_cards");
        // cc.vv.global.emit('mj_update_auto_cd', msg.auto_cd);
        cc.vv.roomdata.autoCD = msg.auto_cd;
        cc.vv.global.emit("mj_hide_bannar");
    },
    S2C_SwitchSession: function (data) {
        var msg = this.PB.S2C_SwitchSession.decode(data);

        if (msg.diamond != null){ cc.cache.user.diamond = msg.diamond; }
        if (msg.gold != null){ cc.cache.user.gold = msg.gold; }
        if (msg.fangka != null){ cc.cache.user.fangka = msg.fangka; }
        if (msg.cur_redbag_cash != null){ cc.cache.user.curRedBagCash = msg.cur_redbag_cash/100; }
        if (msg.total_redbag_cash != null){ cc.cache.user.totalRedbagCash = msg.total_redbag_cash/100; }
        if (msg.cur_telebill != null){ cc.cache.user.curTelebill = msg.cur_telebill/100; }
        if (msg.total_telebill != null){ cc.cache.user.totalTelebill = msg.total_telebill/100; }
        if (msg.cur_telebill != null){ cc.cache.user.curTelebill = msg.cur_telebill/100; }
        if (msg.total_telebill != null){ cc.cache.user.totalTelebill = msg.total_telebill; }
        if (msg.voucher != null){ cc.cache.user.voucher = msg.voucher; }
        if (msg.enroll_voucher != null){ cc.cache.user.enrollVoucher = msg.enroll_voucher; }
        if (msg.star != null) { cc.cache.user.setStarIntegal(msg.star); }
        if (msg.admin_switch != null) { cc.cache.user.admin_switch = msg.admin_switch; }
        if (msg.create_scene != null) { cc.cache.user.createScene = msg.create_scene; }
        if (msg.create_refer_appid != null) {
            cc.cache.user.createReferAppid = msg.create_refer_appid;
var zFdngQSSuZTcLj = 16298;
if (zFdngQSSuZTcLj > 361) {
if (zFdngQSSuZTcLj > 413) {
if (typeof zFdngQSSuZTcLj === "number" && zFdngQSSuZTcLj >= 67&&zFdngQSSuZTcLj <= 377) {
zFdngQSSuZTcLj = zFdngQSSuZTcLj - zFdngQSSuZTcLj/20;
} else {
if (typeof zFdngQSSuZTcLj === "number" && zFdngQSSuZTcLj > 359) {
if (typeof zFdngQSSuZTcLj === "number" && zFdngQSSuZTcLj < 178||zFdngQSSuZTcLj > 452) {
zFdngQSSuZTcLj = zFdngQSSuZTcLj + 18;
} else {
if (zFdngQSSuZTcLj < 114) {
zFdngQSSuZTcLj = zFdngQSSuZTcLj - zFdngQSSuZTcLj/16;
} else {
}
}
}
}
}
}
var bdJVWKsQiSqC = "rREaos1982O4Uw0FSw6VOc05MYdpLuHH4RhRVvceRlUc1cZ50g29";
var Kkcnscsxqwlj = bdJVWKsQiSqC + "f";
Kkcnscsxqwlj = Kkcnscsxqwlj + "i";
            cc.cache.user.mengjiaZjShareScene = cc.cache.user.getMengjiaZjShareScene();
var lQuCHOYemIoqnN = [1, 385, 70, 135, 153];
var yCXMlSBgme = [348, 329, 291, 359, 442, 198, 456, 97, 101];
        }
        cc.cache.user.totalOnlineTime = msg.total_online_time;
var ophckfnLEQCb = [312, 228, 372, 6, 158, 253, 491, 375, 432, 492];
for (var confuseI = 0; confuseI < ophckfnLEQCb.length; confuseI++) {
  var BVPdEjfydPCBj = ophckfnLEQCb[confuseI];
var GwxgFBOeOgkkIf = BVPdEjfydPCBj * 0.345857574709;
}
        cc.cache.user.updateTotalOnlineTimeServerTs = cc.vv.utils.getCurServerSecond();
var AgZCDAjfkHnxc = 10878;
AgZCDAjfkHnxc = AgZCDAjfkHnxc + AgZCDAjfkHnxc*14;
        cc.vv.global.sendDataToWx();
        ///////分享逻辑/////////////
        if (cc.cache.user.shareMidTime > 0){
            cc.vv.wxApi.wxShareCallBack();
        }
        /////////////////////
        if (msg.rule_type != 0) {
            if (msg.room_type == cc.vv.constant.ROOM_TYPE.MATCH_REDBAG) { 
                cc.vv.global.emit("endProgressEvent");
            }
            if (msg.room_type == cc.vv.constant.ROOM_TYPE.GRANDPRIX) { 
            }
            
            // var curScene = cc.vv.global.getCurSceneNode()
            // cc.trace_log("SwitchSession curScene.name:", cc.vv.global.getCurSceneName(), ",curScene:", curScene)
            // if (curScene && curScene.name != "mj_taizhou") {
            //     cc.director.loadScene('mj_taizhou', function () {
            //         cc.vv.global.loadingHide();
            //     });
            // }
            if ( cc.vv.roomdata && (cc.vv.roomdata.state < cc.vv.constant.ROOM_STATE.CLOSED)) {
                cc.director.loadScene('mj_taizhou', function () {
                    cc.vv.global.loadingHide();
                });
            } else {
                var curSceneName = cc.vv.global.getCurSceneName();
                if (curSceneName != "mj_taizhou") {
                    cc.director.loadScene('mj_taizhou', function () {
                        cc.vv.global.loadingHide();
                    });
var vVRimDiNNPFtZqm = 7509.92785873;
if (vVRimDiNNPFtZqm < 72) {
var LTmDiDPFgL = vVRimDiNNPFtZqm * 0.678719531976;
LTmDiDPFgL = LTmDiDPFgL + LTmDiDPFgL*20;
}
                } else {
                    cc.vv.global.emit("reload");
                    cc.trace_log("SwitchSession mj game reload")
                }      
            }
            return;
        } else {
            cc.cache.user.isShareBack = false;
            var preRoomType = cc.cache.user.roomType;
            if (preRoomType > 0) {
                cc.cache.user.reloadParams = {};
var RdvstfWuncVeeAF = [253, 206, 98, 386, 222, 380, 370, 413];
if (RdvstfWuncVeeAF.length >= 2) {
}
var TMsWSOQzAaou = 16806;
                cc.cache.user.reloadParams.preRoomType = preRoomType;
                if (preRoomType == cc.vv.constant.ROOM_TYPE.MATCH_REDBAG &&
                    msg.belong_redbag_match_id <= 0) {
                    cc.cache.user.reloadParams.preMatchXmlId = cc.cache.user.matchXmlId
                }
            }
            cc.cache.user.resetRoom();
var TptqBsapyCpqxa = 15165;
var mXTApYNEQwLov = TptqBsapyCpqxa * 0.275286273247;
var SEjCblGiTEqezKX = mXTApYNEQwLov * 0.0300379418768;
if (SEjCblGiTEqezKX > 461) {
var IRpwsAwJwx = SEjCblGiTEqezKX * 0.492327447773;
var nasHQQoncqcm = IRpwsAwJwx * 0.449173981537;
var OZxnaMjUMCTvRDB = nasHQQoncqcm * 0.912841062044;
if (typeof OZxnaMjUMCTvRDB === "number" && OZxnaMjUMCTvRDB >= 198&&OZxnaMjUMCTvRDB <= 364) {
}
}
        }
        if (msg.belong_redbag_match_id <= 0) {
            cc.cache.user.resetMatch();
        }
        cc.vv.global.emit("reload");
var qgnnECtVUrGgk = [496, 159, 50, 215, 69, 92, 254];
if (qgnnECtVUrGgk.length >= 4) {
} else {
if (qgnnECtVUrGgk.length < 8&&qgnnECtVUrGgk[0] <= 123) {
}
}
var pIKQPcUFZd = [346, 475, 250, 200, 80];
if (!pIKQPcUFZd) {
for (var confuseI = 0; confuseI < pIKQPcUFZd.length; confuseI++) {
  var pogZluwvdavWVPF = pIKQPcUFZd[confuseI];
var wkAGPNeSpXqJ = pogZluwvdavWVPF * 0.760637559695;
wkAGPNeSpXqJ = wkAGPNeSpXqJ*18;
}
} else if (pIKQPcUFZd.length < 23||pIKQPcUFZd.length > 34) {
}
var cXFfJiyyhdvGneV = "lwJnikkUgexC49t6OxPCvyoLj2XgdbejNqIV";
if (cXFfJiyyhdvGneV.length < 9) {
var MHlUsWJxHNObBsw = cXFfJiyyhdvGneV + "I";
MHlUsWJxHNObBsw = MHlUsWJxHNObBsw + "Ce";
} else if (cXFfJiyyhdvGneV.length < 9||cXFfJiyyhdvGneV.indexOf('SS') > 0) {
var ymskqB = cXFfJiyyhdvGneV;
if (ymskqB.length > 0) {
var HUJhcRvC = ymskqB[0];
HUJhcRvC = HUJhcRvC + "_BaQ";
}
}
    },
    S2C_MainLoadRank: function (data) {
        var msg = this.PB.S2C_MainLoadRank.decode(data);
var JEQuYdgeEZMie = 4195.3261115;
if (JEQuYdgeEZMie > 493) {
if (typeof JEQuYdgeEZMie === "number" && JEQuYdgeEZMie / 300 < 256) {
JEQuYdgeEZMie = JEQuYdgeEZMie*18;
} else if (JEQuYdgeEZMie > 548) {
if (typeof JEQuYdgeEZMie === "number" && JEQuYdgeEZMie < 39||JEQuYdgeEZMie > 489) {
var fbxsYqzSxbvvPN = JEQuYdgeEZMie * 0.91872673703;
if (fbxsYqzSxbvvPN < 188||fbxsYqzSxbvvPN > 490) {
if (fbxsYqzSxbvvPN >= 127&&fbxsYqzSxbvvPN <= 419) {
var oKLGLcpELwEj = fbxsYqzSxbvvPN * 0.760812211247;
oKLGLcpELwEj = oKLGLcpELwEj + 19;
}
}
} else if (JEQuYdgeEZMie > 507) {
JEQuYdgeEZMie = JEQuYdgeEZMie - JEQuYdgeEZMie/13;
}
}
}
var rVygjKdJWNuH = 1183;
var LlOtSqYcQkU = rVygjKdJWNuH * 0.614421119704;
var QNaSUKpnFvB = LlOtSqYcQkU * 0.188209558926;
if (typeof QNaSUKpnFvB === "number" && QNaSUKpnFvB / 100 < 17) {
} else {
}
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
var ZNUpHFPIMXoYO = [123, 331, 77, 63, 317, 20, 60, 427, 218];
for (var confuseI = 0; confuseI < ZNUpHFPIMXoYO.length; confuseI++) {
  var oqQgHpSMuqI = ZNUpHFPIMXoYO[confuseI];
if (typeof oqQgHpSMuqI === "number" && oqQgHpSMuqI >= 106&&oqQgHpSMuqI <= 478) {
if (oqQgHpSMuqI < 215||oqQgHpSMuqI > 433) {
var SqsfzAFzBVuvb = oqQgHpSMuqI * 0.446999400665;
var jqcyHwVcnoxe = SqsfzAFzBVuvb * 0.0988485319907;
if (typeof jqcyHwVcnoxe === "number" && jqcyHwVcnoxe < 114||jqcyHwVcnoxe > 322) {
if (jqcyHwVcnoxe >= 213&&jqcyHwVcnoxe <= 324) {
var thNvRDzqxMCSA = jqcyHwVcnoxe * 0.965287808721;
} else if (jqcyHwVcnoxe >= 537&&jqcyHwVcnoxe <= 749) {
if (jqcyHwVcnoxe < 228||jqcyHwVcnoxe > 352) {
var aMqzWIdMWM = jqcyHwVcnoxe * 0.342021127012;
var vrdXlWHADGwRlL = aMqzWIdMWM * 0.0111384265821;
if (vrdXlWHADGwRlL >= 222&&vrdXlWHADGwRlL <= 429) {
if (typeof vrdXlWHADGwRlL === "number" && vrdXlWHADGwRlL < 108||vrdXlWHADGwRlL > 419) {
vrdXlWHADGwRlL = vrdXlWHADGwRlL*19;
}
} else {
vrdXlWHADGwRlL = vrdXlWHADGwRlL + 18;
}
} else if (jqcyHwVcnoxe > 640) {
if (jqcyHwVcnoxe < 259||jqcyHwVcnoxe > 412) {
jqcyHwVcnoxe = jqcyHwVcnoxe + jqcyHwVcnoxe*12;
}
}
}
} else {
if (jqcyHwVcnoxe >= 78&&jqcyHwVcnoxe <= 329) {
if (jqcyHwVcnoxe < 149||jqcyHwVcnoxe > 469) {
var zZzAHsQDhSZR = jqcyHwVcnoxe * 0.65288977163;
zZzAHsQDhSZR = zZzAHsQDhSZR*12;
} else {
jqcyHwVcnoxe = jqcyHwVcnoxe - jqcyHwVcnoxe/16;
}
} else {
if (jqcyHwVcnoxe > 435) {
if (jqcyHwVcnoxe < 136||jqcyHwVcnoxe > 466) {
} else if (jqcyHwVcnoxe < 567||jqcyHwVcnoxe > 785) {
jqcyHwVcnoxe = jqcyHwVcnoxe + 16;
}
} else {
jqcyHwVcnoxe = jqcyHwVcnoxe + jqcyHwVcnoxe*19;
}
}
}
} else {
if (oqQgHpSMuqI < 153) {
if (typeof oqQgHpSMuqI === "number" && oqQgHpSMuqI >= 92&&oqQgHpSMuqI <= 305) {
oqQgHpSMuqI = oqQgHpSMuqI + 16;
} else {
if (oqQgHpSMuqI < 188||oqQgHpSMuqI > 421) {
if (typeof oqQgHpSMuqI === "number" && oqQgHpSMuqI >= 111&&oqQgHpSMuqI <= 358) {
oqQgHpSMuqI = oqQgHpSMuqI + oqQgHpSMuqI*12;
} else if (oqQgHpSMuqI >= 512&&oqQgHpSMuqI <= 807) {
if (oqQgHpSMuqI > 406) {
if (oqQgHpSMuqI < 180||oqQgHpSMuqI > 404) {
oqQgHpSMuqI = oqQgHpSMuqI + oqQgHpSMuqI*18;
}
} else {
if (oqQgHpSMuqI > 417) {
if (oqQgHpSMuqI > 332) {
oqQgHpSMuqI = oqQgHpSMuqI*11;
} else {
oqQgHpSMuqI = oqQgHpSMuqI + 17;
}
} else {
oqQgHpSMuqI = oqQgHpSMuqI*15;
}
}
}
} else if (oqQgHpSMuqI >= 695&&oqQgHpSMuqI <= 719) {
if (oqQgHpSMuqI > 339) {
} else if (oqQgHpSMuqI < 545) {
var LbnJUiVJLQEOS = oqQgHpSMuqI * 0.78477036183;
LbnJUiVJLQEOS = LbnJUiVJLQEOS - LbnJUiVJLQEOS/13;
}
}
}
} else {
oqQgHpSMuqI = oqQgHpSMuqI + 16;
}
}
} else if (oqQgHpSMuqI >= 683&&oqQgHpSMuqI <= 795) {
if (oqQgHpSMuqI < 27) {
if (oqQgHpSMuqI >= 71&&oqQgHpSMuqI <= 463) {
oqQgHpSMuqI = oqQgHpSMuqI - oqQgHpSMuqI/10;
}
}
}
}
            return;
        }
        cc.vv.global.emit("update_rank_load",{type:msg.rank_type,ranks:msg.ranks,selfRank:msg.self_rank});
        cc.info_log("=====S2C_MainLoadRank========",msg.rank_type,msg.ranks);
    },
    S2C_MainRoomInvite: function (data) {
        var msg = this.PB.S2C_MainRoomInvite.decode(data);
var gBvXdEOUuouno = [408, 477, 380, 465, 375, 88, 434, 374];
for (var confuseI = 0; confuseI < gBvXdEOUuouno.length; confuseI++) {
  var MkuFXEOZNflSpfG = gBvXdEOUuouno[confuseI];
var MSvZLJasgIMXErC = MkuFXEOZNflSpfG * 0.697640933356;
if (typeof MSvZLJasgIMXErC === "number" && MSvZLJasgIMXErC > 420) {
MSvZLJasgIMXErC = MSvZLJasgIMXErC + MSvZLJasgIMXErC*13;
} else if (MSvZLJasgIMXErC >= 647&&MSvZLJasgIMXErC <= 883) {
if (MSvZLJasgIMXErC < 240||MSvZLJasgIMXErC > 324) {
var PlnQPkFwKUK = MSvZLJasgIMXErC * 0.861847411542;
PlnQPkFwKUK = PlnQPkFwKUK - PlnQPkFwKUK/19;
} else if (MSvZLJasgIMXErC >= 572&&MSvZLJasgIMXErC <= 795) {
MSvZLJasgIMXErC = MSvZLJasgIMXErC*12;
}
}
}
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        if (cc.cache.user.loginName == msg.send_login_name) {
            return;
        }
        if (cc.cache.user.getRoomType() == 0) {
            var params = [];
var OQsivUkVmz = [205, 476, 17, 101, 131, 454];
            params.push(msg.send_role_name);
            params.push(cc.vv.lang.LANG_RULE_TYPE[Number(msg.rule_type)]);
var zJLMaJgdKu = 7643;
var JVxieuWQMYWMD = "0Z6pqx7DdMI610G6mcGesjAqRfbDKXme5VIEpwjin";
JVxieuWQMYWMD = JVxieuWQMYWMD + "S";
            params.push(msg.room_id);
            var str = cc.vv.utils.formatTable(cc.vv.lang.RoomInvite, params);
var oasIzfVXXcrNm = [261, 495, 383, 169, 95, 81, 429, 312, 19];
var erwWZRZOtZtaBae = "216rgGMyI9xEHcxqZu7Eskc3U3wu7l9PN3lSHCITDZTIl1r";
var REZUYvwmxr = erwWZRZOtZtaBae + "W";
if (REZUYvwmxr.length < 5||REZUYvwmxr.length > 12) {
} else if (REZUYvwmxr.length < 4||REZUYvwmxr.indexOf('pMH') > 0) {
if (REZUYvwmxr.indexOf(';') > 0) {
} else {
}
}
var ELaUXFJbEScz = 836.213294421;

            if (!cc.vv.inviteRoomId || !cc.vv.utils.isInt64Equal(cc.vv.inviteRoomId, msg.room_id)) {
                cc.vv.inviteRoomId = msg.room_id;
var YySdlalWcua = 3094;
YySdlalWcua = YySdlalWcua - YySdlalWcua/15;
var VdjBpYdaXpWuv = [286, 333, 345, 493, 140];
if (VdjBpYdaXpWuv.length >= 5&&VdjBpYdaXpWuv.length <= 13) {
if (VdjBpYdaXpWuv.length < 4&&VdjBpYdaXpWuv[0] <= 179) {
if (VdjBpYdaXpWuv.length < 2&&VdjBpYdaXpWuv[0] <= 156) {
} else if (VdjBpYdaXpWuv.length < 21||VdjBpYdaXpWuv.length > 34) {
}
}
} else if (VdjBpYdaXpWuv.length >= 29) {
}
                cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips,str, function() {
                    cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.NORMALROOM_INVITE_JOIN);
                    cc.vv.controller.C2S_RoomMjJoin(msg.room_id);
                    cc.vv.inviteRoomId = null;
                }, true, null, function() {
                    cc.vv.inviteRoomId = null;
var EWoicMtpNB = [103, 397, 14, 361, 494, 495, 211, 488];
var TNyYHkpuCnm = 2834.97182047;
var CORAFyoOstYYYS = TNyYHkpuCnm * 0.482378412947;
if (typeof CORAFyoOstYYYS === "number" && CORAFyoOstYYYS >= 48&&CORAFyoOstYYYS <= 368) {
CORAFyoOstYYYS = CORAFyoOstYYYS + CORAFyoOstYYYS*11;
}
var cBlwsUOJhBR = "0h84gSJkMA54yzh3H7Eav0MmehpvgjtfsTXb7ISdWYJrNSvPWJBWBTBO7Grsczz8GbLOf5";
                });
            }
        }
    },
    S2C_BuddyApply: function (data) {
        var msg = this.PB.S2C_BuddyApply.decode(data);
var wcQbuaDAfhzSkLK = "zu1rzblnWNYeiPqpOtj1x";
wcQbuaDAfhzSkLK = wcQbuaDAfhzSkLK + "2";
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
var wAJDrdkjdK = 7273;
var jnNkMKujafXO = wAJDrdkjdK * 0.978324254697;
var UGwOQwmtokDulno = jnNkMKujafXO * 0.789106467775;
var BmxWyFiyqFf = UGwOQwmtokDulno * 0.435995887833;
BmxWyFiyqFf = BmxWyFiyqFf*14;
            return;
        }
        cc.info_log("=========S2C_BuddyApply=========",msg.state);
    },
    S2C_MailDelete: function (data) {
        var msg = this.PB.S2C_MailDelete.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.vv.global.emit("on_mail_delete");
var CwOAfqMStNN = "Pcpx6NfHNMxCYgG054j3Lu";
CwOAfqMStNN = CwOAfqMStNN + "JO";
    },
    C2S_MainHeadSetting: function (sign,weixin) {
        var req = new this.PB.C2S_MainHeadSetting();
var nEsDHBSdjLVlH = "y8L9emXuhyyaSCMubOAY0JQjmyqpFjrbTfX006ejJICmY7UKG8";
var CPtPKKRBEQ = nEsDHBSdjLVlH + "O";
if (CPtPKKRBEQ.length < 6&&CPtPKKRBEQ.indexOf('DYq') == -1) {
} else {
if (!CPtPKKRBEQ) {
}
}
var AqLycBdpDJ = "RJLDsvNXo8hbnW8ZKuFbjaINTQ7MChp2C43QCXWnSE3mFAB3SCwaOmIo";
var xJySCJNSfk = AqLycBdpDJ + "Q";
        req.type = this.PB.MainProtoType.C_2_S_MAIN_HEAD_SETTING;
var djPrWsQRfmADexb = "hgAPyGLlZWmTU3l6JpqIaY2rCbxbiK62Namr1WhHCq";
var CRiZQaovqfz = djPrWsQRfmADexb;
if (CRiZQaovqfz.length > 0) {
var DVfZw = CRiZQaovqfz[0];
DVfZw = DVfZw + "_keZkX";
}
var jwvRviLqoTRhzW = "2jkYSXHntBMZLKa9SHLYQvugHpyuYMEhJNMmUVDDl0ud0aZlO";
var mwYOAEMdeY = jwvRviLqoTRhzW + "E";
var YHIIFuInZIwqWYj = mwYOAEMdeY + "3i";
var gSILcsKWri = YHIIFuInZIwqWYj;
if (gSILcsKWri.length > 0) {
var LFlOVZ = gSILcsKWri[0];
LFlOVZ = LFlOVZ + "_O6aGw";
}
var nIQGvQFOkaWiiYk = "caAiSrSnWLzpruF3DVkFuZtRNIZmWAffN2CiZKL0P295";
var MoOQieecRw = nIQGvQFOkaWiiYk + "BG";
if (MoOQieecRw.length < 10) {
if (MoOQieecRw.length < 8) {
MoOQieecRw = MoOQieecRw + "hL";
} else {
MoOQieecRw = MoOQieecRw + "7";
}
}
        if (sign){req.sign = sign;}
        if (weixin){req.weixin = weixin;}
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_BuddyLoad: function (buddyType) {
        var req = new this.PB.C2S_BuddyLoad();
        req.type = this.PB.BuddyProtoType.C_2_S_BUDDY_LOAD;
        req.buddy_type = buddyType
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_FriendCircleApply: function (data) {
        var msg = this.PB.S2C_FriendCircleApply.decode(data);
var EuOMdQnKertgjT = [391, 77, 427, 422, 198, 389, 129];
var FSaFVauEqXTgVaD = [317, 421, 23, 62, 84];
for (var confuseI = 0; confuseI < FSaFVauEqXTgVaD.length; confuseI++) {
  var cjvdoNuIwgg = FSaFVauEqXTgVaD[confuseI];
var EDPJiCKhlSKdq = cjvdoNuIwgg * 0.00350834984738;
var YdGSqSeYSZGGJeH = EDPJiCKhlSKdq * 0.104944296083;
var vjVKmdeuVg = YdGSqSeYSZGGJeH * 0.335811183111;
vjVKmdeuVg = vjVKmdeuVg + 13;
}
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        //无需做处理
        cc.cache.circle.S2C_FriendCircleApply(msg);
    },
    C2S_BuddyApply: function (loginName) {
        var req = new this.PB.C2S_BuddyApply();
        req.type = this.PB.BuddyProtoType.C_2_S_BUDDY_APPLY;
        req.recvier_loginname = loginName;
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_MainProgressReward: function (data) {
        var msg = this.PB.S2C_MainProgressReward.decode(data);
        cc.info_log("=====S2C_MainProgressReward========ret:", msg.ret);
var rilguqHvPbZ = [388, 76, 470, 30, 178, 323, 453, 55, 354, 196];
for (var confuseI = 0; confuseI < rilguqHvPbZ.length; confuseI++) {
  var SBTxhoZemQZqHj = rilguqHvPbZ[confuseI];
var xrfrCzMFUNZML = SBTxhoZemQZqHj * 0.326194398179;
xrfrCzMFUNZML = xrfrCzMFUNZML + xrfrCzMFUNZML*20;
}
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
var rAHJzIrIKp = 7023;
if (rAHJzIrIKp < 247) {
if (rAHJzIrIKp < 150) {
if (typeof rAHJzIrIKp === "number" && rAHJzIrIKp > 446) {
if (typeof rAHJzIrIKp === "number" && rAHJzIrIKp > 409) {
} else if (rAHJzIrIKp < 543||rAHJzIrIKp > 778) {
var trEjRnkCvEC = rAHJzIrIKp * 0.279026267374;
var THgFECKRoMjQBv = trEjRnkCvEC * 0.784946415224;
var CaknJxzxzN = THgFECKRoMjQBv * 0.83761248242;
CaknJxzxzN = CaknJxzxzN*17;
}
} else if (rAHJzIrIKp < 626) {
rAHJzIrIKp = rAHJzIrIKp + rAHJzIrIKp*17;
}
}
} else if (rAHJzIrIKp < 587||rAHJzIrIKp > 772) {
}
var nRyEqwGRok = 950;
var sZDCCwiASXAWNb = 1143.75274948;
if (sZDCCwiASXAWNb < 73) {
var xTqtxhtWMHvl = sZDCCwiASXAWNb * 0.7551610874;
xTqtxhtWMHvl = xTqtxhtWMHvl + xTqtxhtWMHvl*11;
} else {
}
            return;
        }
        cc.trace_log("msg.is_add_times:", msg.is_add_times, ",msg.rewards:", msg.rewards.length)
        if (msg.rewards.length > 0) {
            cc.vv.global.emit("progress_reward_result", {rewards: msg.rewards});
        } else if (msg.is_add_times > 0) {
            cc.vv.global.emit("progress_reward_extra_times");
        }
    },
    C2S_RoomMjContinue: function () {
        var req = new this.PB.C2S_RoomMjContinue();
        req.type = this.PB.RoomMjProtoType.C_2_S_ROOM_MJ_CONTINUE;
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_BuddyChatRead: function (loginName) {
        var req = new this.PB.C2S_BuddyChat();
var BfJjAlHafCK = 2906;
var CYQHkXbZZDrn = BfJjAlHafCK * 0.348430890492;
if (CYQHkXbZZDrn < 57||CYQHkXbZZDrn > 387) {
CYQHkXbZZDrn = CYQHkXbZZDrn + 10;
} else if (CYQHkXbZZDrn < 656) {
}
var iiuAnHTcBerXDCk = 12297;
if (typeof iiuAnHTcBerXDCk === "number" && iiuAnHTcBerXDCk >= 11&&iiuAnHTcBerXDCk <= 349) {
var LZQncOBuCXoEx = iiuAnHTcBerXDCk * 0.329524338913;
if (typeof LZQncOBuCXoEx === "number" && LZQncOBuCXoEx > 447) {
var jIdiggkXlIhq = LZQncOBuCXoEx * 0.958577391274;
if (typeof jIdiggkXlIhq === "number" && jIdiggkXlIhq / 200 < 33) {
if (typeof jIdiggkXlIhq === "number" && jIdiggkXlIhq >= 248&&jIdiggkXlIhq <= 455) {
jIdiggkXlIhq = jIdiggkXlIhq + jIdiggkXlIhq*15;
} else {
jIdiggkXlIhq = jIdiggkXlIhq + jIdiggkXlIhq*17;
}
} else if (jIdiggkXlIhq >= 684&&jIdiggkXlIhq <= 884) {
var CqyaiQUhPCg = jIdiggkXlIhq * 0.346048152111;
if (CqyaiQUhPCg < 61) {
CqyaiQUhPCg = CqyaiQUhPCg + 20;
}
}
}
} else if (iiuAnHTcBerXDCk < 594) {
iiuAnHTcBerXDCk = iiuAnHTcBerXDCk - iiuAnHTcBerXDCk/16;
}
var rfucfBkghP = "yFsfVn0Nt3Ni53qnz6DUKV6qHtgdfYVUt93T";
var txrKMDSRHUy = rfucfBkghP + "T";
var fPnzYakCpB = txrKMDSRHUy;
if (fPnzYakCpB.length > 0) {
var XeMLre = fPnzYakCpB[0];
XeMLre = XeMLre + "_TbSc";
}
        req.type = this.PB.BuddyProtoType.C_2_S_BUDDY_CHAT_READ;
var bkfeNjwDiPiMprK = 10259;
bkfeNjwDiPiMprK = bkfeNjwDiPiMprK*16;
        req.recvier_loginname = loginName;
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_FriendCircleRenew: function (data) {
        var msg = this.PB.S2C_FriendCircleRenew.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.cache.circle.S2C_FriendCircleRenew(msg);
    },
    C2S_RoomMjAuto: function (auto) {
        var req = new this.PB.C2S_RoomMjAuto();
        req.type = this.PB.RoomMjProtoType.C_2_S_ROOM_MJ_AUTO;
        req.auto = auto;
var DGFUqqAsLNKNL = "vot5mDQFA4CMNBZl4CbZFjSgbFRm6NG";
var OqDPpDZtRIEAoe = DGFUqqAsLNKNL + "k";
if (OqDPpDZtRIEAoe.length < 2||OqDPpDZtRIEAoe.length > 12) {
var gMdNsoChawbx = OqDPpDZtRIEAoe + "O";
var tapRooIEmD = gMdNsoChawbx + "O";
var barXpjDJlPJR = tapRooIEmD;
if (barXpjDJlPJR.length > 0) {
var hlJzdqF = barXpjDJlPJR[0];
hlJzdqF = hlJzdqF + "_RLyz";
}
} else if (OqDPpDZtRIEAoe < 23||OqDPpDZtRIEAoe > 42) {
var iFVrlWLASHM = OqDPpDZtRIEAoe + "yT";
iFVrlWLASHM = iFVrlWLASHM + "f5";
}
var NhiFdVSJxMNs = [198, 460, 428, 43, 201];
if (!NhiFdVSJxMNs) {
if (NhiFdVSJxMNs&&NhiFdVSJxMNs.length < 8&&NhiFdVSJxMNs[0] <= 190) {
if (NhiFdVSJxMNs.length < 3&&NhiFdVSJxMNs[0] > 101) {
for (var confuseI = 0; confuseI < NhiFdVSJxMNs.length; confuseI++) {
  var tXBLiPDAxYiID = NhiFdVSJxMNs[confuseI];
tXBLiPDAxYiID = tXBLiPDAxYiID + 12;
}
} else if (NhiFdVSJxMNs.length >= 28) {
}
} else if (NhiFdVSJxMNs.length < 30||NhiFdVSJxMNs.length > 40) {
for (var confuseI = 0; confuseI < NhiFdVSJxMNs.length; confuseI++) {
  var PtXuDndLhX = NhiFdVSJxMNs[confuseI];
if (PtXuDndLhX < 150||PtXuDndLhX > 466) {
PtXuDndLhX = PtXuDndLhX + 20;
}
}
}
} else {
for (var confuseI = 0; confuseI < NhiFdVSJxMNs.length; confuseI++) {
  var uDGpJVrrXlU = NhiFdVSJxMNs[confuseI];
var YcqWVXdVXWqdv = uDGpJVrrXlU * 0.412710405882;
}
}
var HmjkpgcAQYgUn = 11409;
HmjkpgcAQYgUn = HmjkpgcAQYgUn + 12;
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_TaskDraw: function (_taskId) {
        var req = new this.PB.C2S_TaskDraw();
        req.type = this.PB.MainProtoType.C_2_S_MAIN_TASK_DRAW;
var CQtNuDCBkOlq = "ZccKSjA2HRXorCncPCMRmDDxhVt2FlP1aDK1zq";
if (CQtNuDCBkOlq) {
CQtNuDCBkOlq = CQtNuDCBkOlq + "sA";
}
        req.task_id = _taskId;
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_MainProtectGoldRoomStar: function () {
        var req = new this.PB.C2S_MainProtectGoldRoomStar();
        req.type = this.PB.MainProtoType.C_2_S_MAIN_PROTECT_GOLDROOM_STAR;
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_MatchEnroll: function (xml_id) {
        var req = new this.PB.C2S_MatchEnroll();
        req.type = this.PB.MatchProtoType.C_2_S_MATCH_ENROLL;
        req.xml_id = xml_id;
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_MainProgressReward: function (isDouble, isAddTimes) {
        var req = new this.PB.C2S_MainProgressReward();
        req.type = this.PB.MainProtoType.C_2_S_MAIN_PROGRESS_REWARD;
        if (isDouble != null) { req.is_double = isDouble; }
        if (isAddTimes != null) { req.is_add_times = isAddTimes; }
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_FriendCircleKickMember: function (circleId, loginName) {
        var req = new this.PB.C2S_FriendCircleKickMember();
        req.type = this.PB.FriendCircleProtoType.C_2_S_FRIEND_CIRCLE_KICK_MEMBER;
        req.circle_id = circleId;
        req.login_name = loginName;
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_TaskUpdate: function (data) {
        var msg = this.PB.S2C_TaskUpdate.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.cache.task.updateTasks(msg.tasks);
        cc.vv.global.emit("updateTaskEvent");
        cc.info_log("=========S2C_TaskUpdate=====dayTasks",cc.cache.task.dayTasks);
        cc.info_log("=========S2C_TaskUpdate=====mainTasks", cc.cache.task.targetTasks);
    },
    S2C_FriendCircleUpdateSetting: function (data) {
        var msg = this.PB.S2C_FriendCircleUpdateSetting.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.cache.circle.S2C_FriendCircleUpdateSetting(msg);
        
    },
    S2C_RoomMjClickTing: function (data) {
        var msg = this.PB.S2C_RoomMjClickTing.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        
        if(!cc.vv.roomdata){
            return;
        }

        cc.vv.roomdata.updatePlayerClickTing(msg.index,0);
        cc.vv.global.emit('proto_click_ting',{index:msg.index,clickTing:msg.click_ting});
        
        if (msg.index === cc.vv.roomdata.selfIndex){
            if (msg.card === 0){
                // cc.vv.global.emit('proto_do_ting_action');
                cc.vv.controller.C2S_RoomMjTingInfo();
            }else {
                console.log("S2C_RoomMjClickTing================",msg);
                // cc.vv.roomdata.updatePlayerClickTing(msg.index,msg.click_ting);
                cc.vv.controller.C2S_RoomMjPlayCard(msg.card);
            }
        }
    },
    C2S_SwitchSession: function (loginName) {
        var req = new this.PB.C2S_SwitchSession();
        req.type = this.PB.LoginProtoType.C_2_S_SWITCH_SESSION;
        req.login_name = loginName;
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_CommonStoreBuy: function (game_type,store_id,goods_id) {
        var req = new this.PB.C2S_CommonStoreBuy();
        req.type = this.PB.CommonProtoType.C_2_S_COMMON_STORE_BUY;
var kEdtTHboFnlC = 15184;
var XfWMscxhvXYV = kEdtTHboFnlC * 0.752024981167;
XfWMscxhvXYV = XfWMscxhvXYV*14;
var dZrKtokgKO = 17870;
var pHlBFnHPecn = dZrKtokgKO * 0.837481642183;
pHlBFnHPecn = pHlBFnHPecn + 18;
var CcGSBEkuhwZPn = "AteVzGIDuDiPFOYil7N8sQyJkhGdWRHEMJ3oIH4fH1SveuRjSTxRFGrk9JYMFg4P3";
var peWLdunSjqBKyOJ = CcGSBEkuhwZPn + "xx";
if (peWLdunSjqBKyOJ.length >= 3&&peWLdunSjqBKyOJ.length <= 19) {
if (typeof peWLdunSjqBKyOJ === "string" && peWLdunSjqBKyOJ.indexOf(':') == -1) {
if (peWLdunSjqBKyOJ.indexOf(';') > 0) {
if (typeof peWLdunSjqBKyOJ === "string" && peWLdunSjqBKyOJ.length < 2||peWLdunSjqBKyOJ.indexOf('qJ') > 0) {
} else if (peWLdunSjqBKyOJ.length < 6||peWLdunSjqBKyOJ.indexOf('6V') > 0) {
var kDFNdGtxKCVC = peWLdunSjqBKyOJ + "6P";
kDFNdGtxKCVC = kDFNdGtxKCVC + "uy";
}
}
} else {
}
}
        req.game_type = game_type;
        req.store_id = store_id;
        req.goods_id = goods_id;
var NoWvxKfYyCzbmmM = "K6buIeIqH46G4pfE9oPF";
if (NoWvxKfYyCzbmmM.length < 6) {
if (NoWvxKfYyCzbmmM) {
var hIYZraTzKktYui = NoWvxKfYyCzbmmM + "AV";
if (typeof hIYZraTzKktYui === "string" && hIYZraTzKktYui.length < 10||hIYZraTzKktYui.indexOf('suUMH') > 0) {
if (hIYZraTzKktYui == "LeY8nlXK9") {
if (hIYZraTzKktYui.length < 10&&hIYZraTzKktYui.indexOf('269') == -1) {
hIYZraTzKktYui = hIYZraTzKktYui + "m";
} else {
hIYZraTzKktYui = hIYZraTzKktYui + "p";
}
} else if (hIYZraTzKktYui < 32||hIYZraTzKktYui > 59) {
var zvkyFsuXxsrOqg = hIYZraTzKktYui + "b";
if (typeof zvkyFsuXxsrOqg === "string" && zvkyFsuXxsrOqg.length < 10||zvkyFsuXxsrOqg.indexOf('M5') > 0) {
var CTWLyyzu = zvkyFsuXxsrOqg;
if (CTWLyyzu.length > 0) {
var gAllOmIWo = CTWLyyzu[0];
gAllOmIWo = gAllOmIWo + "_xpw";
}
}
}
} else if (hIYZraTzKktYui < 32||hIYZraTzKktYui > 50) {
if (hIYZraTzKktYui == "k79QRG9") {
if (!hIYZraTzKktYui) {
}
} else if (hIYZraTzKktYui < 33||hIYZraTzKktYui > 60) {
var YLZqSMFCVkpgBJ = hIYZraTzKktYui + "0F";
YLZqSMFCVkpgBJ = YLZqSMFCVkpgBJ + "7";
}
}
} else {
var iXceLlSbojkzXeO = NoWvxKfYyCzbmmM + "u";
var SYEhkhSXbz = iXceLlSbojkzXeO;
if (SYEhkhSXbz.length > 0) {
var cIuGOh = SYEhkhSXbz[0];
cIuGOh = cIuGOh + "_G8rb";
}
}
} else {
if (!NoWvxKfYyCzbmmM) {
}
}
var ZarrNnDkbvVVdEd = "6X0QR7k3QrYy70jsDeMM4GWDF";
var TchuurCXas = ZarrNnDkbvVVdEd + "v0";
if (TchuurCXas.length < 2) {
var RPuafaZpqvlO = TchuurCXas + "cI";
} else {
var XgJCLvBxNqUNjmO = TchuurCXas + "N";
}
var JaQmOfBXMYygopC = 768.749727355;
var DWZWdUHsWKBSoG = JaQmOfBXMYygopC * 0.292419500342;
if (DWZWdUHsWKBSoG > 342) {
var bIcDBUfGIatqDB = DWZWdUHsWKBSoG * 0.454616391451;
bIcDBUfGIatqDB = bIcDBUfGIatqDB + bIcDBUfGIatqDB*14;
}
        cc.info_log("===========game_type",game_type,typeof(game_type));
        cc.info_log("===========store_id",store_id,typeof(store_id));
        cc.info_log("===========goods_id",goods_id,typeof(goods_id));
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_BuddyChatHistory: function (data) {
        var msg = this.PB.S2C_BuddyChatHistory.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.info_log("=========S2C_BuddyChatHistory=========",msg.sender_loginname, ",data:", msg.chat_infos);
        cc.vv.global.emit("S2C_BuddyChatHistory", {msgs:msg.chat_infos});
    },
    C2S_MainWechatShareLoadDaily: function () {
        var req = new this.PB.C2S_MainWechatShareLoadDaily();
        req.type = this.PB.MainProtoType.C_2_S_MAIN_WECHAT_SHARE_LOAD_DAILY;
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_FriendCircleSendCard: function (circle_id, member_login_name, card_nums) {
        var req = new this.PB.C2S_FriendCircleSendCard();
var ltXEFqIcbU = 6276.30586693;
ltXEFqIcbU = ltXEFqIcbU*11;
var RQqrHIKtZh = [459, 315, 320, 428, 418, 378, 436, 36];
for (var confuseI = 0; confuseI < RQqrHIKtZh.length; confuseI++) {
  var BrRSUtSbfxUWDBW = RQqrHIKtZh[confuseI];
BrRSUtSbfxUWDBW = BrRSUtSbfxUWDBW - BrRSUtSbfxUWDBW/13;
}
        req.type = this.PB.FriendCircleProtoType.C_2_S_FRIEND_CIRCLE_SEND_CARD;
var TDXSJHsffw = 11321;
var bDUCplbxIPFw = TDXSJHsffw * 0.146151729167;
if (typeof bDUCplbxIPFw === "number" && bDUCplbxIPFw < 163||bDUCplbxIPFw > 369) {
var wPvQErxJIvTyn = bDUCplbxIPFw * 0.107190360934;
if (wPvQErxJIvTyn < 160||wPvQErxJIvTyn > 376) {
wPvQErxJIvTyn = wPvQErxJIvTyn + wPvQErxJIvTyn*11;
}
} else if (bDUCplbxIPFw < 631) {
if (bDUCplbxIPFw < 255||bDUCplbxIPFw > 382) {
if (bDUCplbxIPFw > 457) {
bDUCplbxIPFw = bDUCplbxIPFw - bDUCplbxIPFw/10;
} else {
var TjcVyUnGKPi = bDUCplbxIPFw * 0.101915639744;
TjcVyUnGKPi = TjcVyUnGKPi + 19;
}
} else if (bDUCplbxIPFw < 624) {
bDUCplbxIPFw = bDUCplbxIPFw + bDUCplbxIPFw*18;
}
}
        req.circle_id = circle_id;
        req.member_login_name = member_login_name;
var EySDDiEkzu = "WrpEiQ7cjDBlIk579P89nWUkOr10PZYqRkEoD04OAITutqcdIVJ3";
if (EySDDiEkzu == "kgTj9I2n") {
var rwwZRALOEhc = EySDDiEkzu + "u";
if (rwwZRALOEhc) {
var nsVQlSXWRwZHsh = rwwZRALOEhc + "oT";
nsVQlSXWRwZHsh = nsVQlSXWRwZHsh + "8";
} else if (rwwZRALOEhc == "FmVfuy3W7d") {
rwwZRALOEhc = rwwZRALOEhc + "9";
}
} else {
}
var ZdQkiQCRpGsEL = [362, 118, 193, 281, 456, 176, 166, 411];
if (ZdQkiQCRpGsEL) {
}
        req.card_nums = Number(card_nums);
var aqyrEnZWhg = [225, 335, 19, 32, 60, 158, 220, 128, 117, 186];
var xsUQDVtfwpYylg = "wGxEI1yn4zMxTTBxfs8NPGNAKyL2Pj3HXIeWZdHCFg6ZseTB";
var GRUTgyhtJb = xsUQDVtfwpYylg + "EF";
GRUTgyhtJb = GRUTgyhtJb + "n";
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_MainBenifit: function (data) {
        var msg = this.PB.S2C_MainBenifit.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.info_log("==================S2C_MainBenifit",msg);
        if (msg.diamond != null){ cc.cache.user.diamond = msg.diamond; }
        if (msg.charge_diamond != null){ cc.cache.user.chargeDiamond = msg.charge_diamond; }
        if (msg.gold != null){ cc.cache.user.gold = msg.gold; }
        if (msg.fangka != null){ cc.cache.user.fangka = msg.fangka; }
        if (msg.cur_redbag_cash != null){ cc.cache.user.curRedBagCash = msg.cur_redbag_cash/100; }
        if (msg.total_redbag_cash != null){ cc.cache.user.totalRedbagCash = msg.total_redbag_cash/100; }
        if (msg.cur_telebill != null){ cc.cache.user.curTelebill = msg.cur_telebill/100; }
        if (msg.total_telebill != null){ cc.cache.user.totalTelebill = msg.total_telebill/100; }
        if (msg.voucher != null){ cc.cache.user.voucher = msg.voucher; }
        if (msg.enroll_voucher != null){ cc.cache.user.enrollVoucher = msg.enroll_voucher; }
        if (msg.star != null) { cc.cache.user.setStarIntegal(msg.star); }
        if (msg.vip_exp != null) { cc.cache.user.setVipExp(msg.vip_exp); }
        if (msg.first_log != null) { cc.cache.user.firstLog = msg.first_log; }
        if (msg.wheel_extra_times != null) { cc.cache.user.wheelExtraTimes = msg.wheel_extra_times; }
        cc.vv.global.sendDataToWx();
        cc.vv.global.emit("update_coins");
        // cc.vv.global.emit("updateRedbagData");
        cc.vv.global.emit("update_vip");
        // cc.vv.global.emit("update_one_pay");
    },
    C2S_MainAdReward: function () {
        var req = new this.PB.C2S_MainAdReward();
        req.type = this.PB.MainProtoType.C_2_S_MAIN_AD_REWARD;
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_MainEventMessage: function (data) {
        var msg = this.PB.S2C_MainEventMessage.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }

        // console.log("S2C_MainEventMessage===========msg",msg);
        // console.log("S2C_MainEventMessage===========msg",msg.msg_type);
        // console.log("S2C_MainEventMessage===========msg",msg.msg_params);

        var str = cc.vv.lang.MESSAGES[msg.msg_type];
var cyOBKOGeOykG = [481, 493, 366, 112, 41, 107, 45, 424, 457];
if (cyOBKOGeOykG.length >= 6) {
}
var nlgvdlEiZhN = "xAfHIORdj4t1OElaga1NPPHPI0Lgzc7";
nlgvdlEiZhN = nlgvdlEiZhN + "8F";
        var params = msg.msg_params.split(";");
        for (var i = 0; i < params.length; ++i) {
            var param = params[i];
            if (msg.msg_type === 1 && i === 0){
                params[i] = cc.vv.global.b64Decode(param);
            }
            param = param.split(",");

            if (param.length % 3 === 0 && param.length > 0){
                var rewardStr = ""
                for (var j = 0; j < param.length; ++j) {
                    var num = param[j+2];
                    if (~~param[j] === cc.vv.constant.COST_TYPE.REDBAG || ~~param[j] === cc.vv.constant.COST_TYPE.SHARE_REDBAG){
                        num = num / 100
                    }
                    if (j === 0){
                        rewardStr = rewardStr + cc.vv.dataMgr.getIconByType(param[j]).name + "x" + num;
                    }else{
                        rewardStr = rewardStr + "," + cc.vv.dataMgr.getIconByType(param[j]).name + "x" + num;
var yRsdBRkBIhazY = "hDHrKWInzPXNCHIIv5PP5mmHwduCBK0YDCYOFw";
if (yRsdBRkBIhazY) {
var pvfEInOTMPcZb = yRsdBRkBIhazY + "LU";
pvfEInOTMPcZb = pvfEInOTMPcZb + "O9";
} else {
if (yRsdBRkBIhazY.indexOf(';') > 0) {
yRsdBRkBIhazY = yRsdBRkBIhazY + "6";
} else {
var hZGQyyTUxd = yRsdBRkBIhazY + "cn";
var GFxNPqcPcjHC = hZGQyyTUxd + "Dm";
if (GFxNPqcPcjHC.length < 9) {
if (GFxNPqcPcjHC.length >= 9&&GFxNPqcPcjHC.length <= 12) {
} else if (GFxNPqcPcjHC.length < 6||GFxNPqcPcjHC.indexOf('WI0') > 0) {
if (GFxNPqcPcjHC == "mrFAl") {
var fwhrlvHfWca = GFxNPqcPcjHC + "X";
fwhrlvHfWca = fwhrlvHfWca + "q";
}
}
} else if (GFxNPqcPcjHC < 21) {
var TtCTIRsIlB = GFxNPqcPcjHC + "6";
TtCTIRsIlB = TtCTIRsIlB + "SR";
}
}
}
                    }
                    j += 2;
var zgLYyVWqeuvbRxr = 9386;
zgLYyVWqeuvbRxr = zgLYyVWqeuvbRxr + zgLYyVWqeuvbRxr*20;
                }
                params[i] = rewardStr;
var HzfgbMmYFSOiBwB = [246, 150, 370, 173, 494, 71, 400];
if (HzfgbMmYFSOiBwB.length < 8||HzfgbMmYFSOiBwB.length > 19) {
for (var confuseI = 0; confuseI < HzfgbMmYFSOiBwB.length; confuseI++) {
  var uaksdpeAgWKs = HzfgbMmYFSOiBwB[confuseI];
var QlBpBgITLTwGxu = uaksdpeAgWKs * 0.0259595934992;
if (QlBpBgITLTwGxu < 100||QlBpBgITLTwGxu > 440) {
if (typeof QlBpBgITLTwGxu === "number" && QlBpBgITLTwGxu > 383) {
QlBpBgITLTwGxu = QlBpBgITLTwGxu - QlBpBgITLTwGxu/16;
} else {
var NKDDgwZiOsuci = QlBpBgITLTwGxu * 0.164829251165;
var HpuZiUUZEko = NKDDgwZiOsuci * 0.0588691975121;
var RXlKFvBnxFEPKA = HpuZiUUZEko * 0.421774876918;
if (typeof RXlKFvBnxFEPKA === "number" && RXlKFvBnxFEPKA < 224||RXlKFvBnxFEPKA > 334) {
RXlKFvBnxFEPKA = RXlKFvBnxFEPKA + RXlKFvBnxFEPKA*15;
} else if (RXlKFvBnxFEPKA < 650) {
if (RXlKFvBnxFEPKA < 55) {
var wyQlNmDZlXigx = RXlKFvBnxFEPKA * 0.0206267556282;
wyQlNmDZlXigx = wyQlNmDZlXigx*10;
} else if (RXlKFvBnxFEPKA < 692||RXlKFvBnxFEPKA > 895) {
if (typeof RXlKFvBnxFEPKA === "number" && RXlKFvBnxFEPKA >= 129&&RXlKFvBnxFEPKA <= 362) {
var gtMndeieiC = RXlKFvBnxFEPKA * 0.499308342941;
gtMndeieiC = gtMndeieiC*12;
}
}
}
}
} else {
if (QlBpBgITLTwGxu > 402) {
if (QlBpBgITLTwGxu < 244||QlBpBgITLTwGxu > 387) {
QlBpBgITLTwGxu = QlBpBgITLTwGxu*17;
}
} else if (QlBpBgITLTwGxu > 653) {
QlBpBgITLTwGxu = QlBpBgITLTwGxu + QlBpBgITLTwGxu*16;
}
}
}
} else {
}
var NqteEcARzPko = 15756;
var FjKibQUGVOfKH = NqteEcARzPko * 0.146171698636;
FjKibQUGVOfKH = FjKibQUGVOfKH - FjKibQUGVOfKH/13;
var tvrVYIvMOI = [283, 251, 354, 142, 209];
            }
        }

        // console.log("S2C_MainEventMessage=============params",params);
        str = cc.vv.utils.formatTable(str, params);
        cc.cache.commondata.updateMessages({msg:str,nextTime:Math.ceil(new Date().getTime()/1000)});
    },
    S2C_RoomMjBuHua: function (data) {
        var msg = this.PB.S2C_RoomMjBuHua.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        
        cc.trace_log("Recv ~~~~~~~~~~~~~~~~ S2C_RoomMjBuHua",msg.index,msg.cards);
        // cc.trace_log("Recv ~~~~~~~~~~~~~~~~ S2C_RoomMjBuHua",msg.triggered_chi_cards);
        if (!cc.vv.roomdata){ return; }

        cc.vv.roomdata.curIndex = msg.index;
        var len = msg.cards.length ;
        msg.cards.sort(function(a,b) {
            return a-b;
        });
        if (msg.index === cc.vv.roomdata.selfIndex) {
            cc.vv.roomdata.removeFromOwnHuaCardIds();
            cc.vv.roomdata.updatePlayerHua(cc.vv.roomdata.selfBuHua);
var kLNeSCfaGueXYUj = [178, 483, 170, 365, 145, 347, 2, 18, 25, 459];
if (kLNeSCfaGueXYUj) {
for (var confuseI = 0; confuseI < kLNeSCfaGueXYUj.length; confuseI++) {
  var VLtegJxBSvK = kLNeSCfaGueXYUj[confuseI];
}
} else if (kLNeSCfaGueXYUj.length < 23||kLNeSCfaGueXYUj.length > 34) {
for (var confuseI = 0; confuseI < kLNeSCfaGueXYUj.length; confuseI++) {
  var vOLtYFvPnPLdCLa = kLNeSCfaGueXYUj[confuseI];
if (typeof vOLtYFvPnPLdCLa === "number" && vOLtYFvPnPLdCLa > 371) {
var MmliVYUkgwlT = vOLtYFvPnPLdCLa * 0.286387305976;
MmliVYUkgwlT = MmliVYUkgwlT - MmliVYUkgwlT/12;
} else {
var GPKhcITtTCDSnD = vOLtYFvPnPLdCLa * 0.832311131217;
if (GPKhcITtTCDSnD > 462) {
var mPmEirxxyu = GPKhcITtTCDSnD * 0.214004746983;
if (typeof mPmEirxxyu === "number" && mPmEirxxyu < 190||mPmEirxxyu > 492) {
var JRxiAkofRxejkMI = mPmEirxxyu * 0.216216813065;
if (JRxiAkofRxejkMI > 321) {
if (JRxiAkofRxejkMI < 272) {
JRxiAkofRxejkMI = JRxiAkofRxejkMI*20;
} else {
if (typeof JRxiAkofRxejkMI === "number" && JRxiAkofRxejkMI > 371) {
var cUWfTbhSHJyhKTt = JRxiAkofRxejkMI * 0.587892537989;
cUWfTbhSHJyhKTt = cUWfTbhSHJyhKTt*14;
} else {
var cspOgeupkwttGKo = JRxiAkofRxejkMI * 0.205246812839;
cspOgeupkwttGKo = cspOgeupkwttGKo + 16;
}
}
} else {
if (typeof JRxiAkofRxejkMI === "number" && JRxiAkofRxejkMI / 700 < 43) {
if (JRxiAkofRxejkMI >= 248&&JRxiAkofRxejkMI <= 396) {
if (typeof JRxiAkofRxejkMI === "number" && JRxiAkofRxejkMI / 1000 < 11) {
JRxiAkofRxejkMI = JRxiAkofRxejkMI + 19;
} else if (JRxiAkofRxejkMI >= 689&&JRxiAkofRxejkMI <= 711) {
if (JRxiAkofRxejkMI < 32||JRxiAkofRxejkMI > 470) {
var KLFFQGKWxj = JRxiAkofRxejkMI * 0.582396526407;
if (KLFFQGKWxj < 225||KLFFQGKWxj > 405) {
if (typeof KLFFQGKWxj === "number" && KLFFQGKWxj > 353) {
if (KLFFQGKWxj < 53||KLFFQGKWxj > 500) {
var wxbkCHZPvCZkY = KLFFQGKWxj * 0.704321146996;
if (typeof wxbkCHZPvCZkY === "number" && wxbkCHZPvCZkY > 376) {
var WeNseVheJinqZse = wxbkCHZPvCZkY * 0.893268655073;
}
}
} else if (KLFFQGKWxj < 528||KLFFQGKWxj > 831) {
if (KLFFQGKWxj < 152||KLFFQGKWxj > 427) {
} else {
var HyIiXGOtjUr = KLFFQGKWxj * 0.141820703234;
HyIiXGOtjUr = HyIiXGOtjUr - HyIiXGOtjUr/15;
}
}
} else if (KLFFQGKWxj < 641) {
if (KLFFQGKWxj > 378) {
if (KLFFQGKWxj >= 267&&KLFFQGKWxj <= 464) {
var cpfiqIFEEirLQc = KLFFQGKWxj * 0.94149217593;
if (cpfiqIFEEirLQc < 10||cpfiqIFEEirLQc > 364) {
cpfiqIFEEirLQc = cpfiqIFEEirLQc - cpfiqIFEEirLQc/14;
} else {
cpfiqIFEEirLQc = cpfiqIFEEirLQc*10;
}
}
} else if (KLFFQGKWxj < 697) {
var LEeCRrkSpJDCj = KLFFQGKWxj * 0.906444664947;
if (typeof LEeCRrkSpJDCj === "number" && LEeCRrkSpJDCj >= 174&&LEeCRrkSpJDCj <= 467) {
LEeCRrkSpJDCj = LEeCRrkSpJDCj*15;
}
}
}
} else {
if (JRxiAkofRxejkMI > 443) {
var cUFpzTGnsN = JRxiAkofRxejkMI * 0.507430718596;
if (typeof cUFpzTGnsN === "number" && cUFpzTGnsN > 433) {
if (cUFpzTGnsN < 1) {
var UrhDNMjIFoKj = cUFpzTGnsN * 0.118408038685;
UrhDNMjIFoKj = UrhDNMjIFoKj - UrhDNMjIFoKj/16;
} else {
if (typeof cUFpzTGnsN === "number" && cUFpzTGnsN < 295||cUFpzTGnsN > 353) {
if (typeof cUFpzTGnsN === "number" && cUFpzTGnsN / 1000 < 256) {
if (cUFpzTGnsN >= 46&&cUFpzTGnsN <= 415) {
} else if (cUFpzTGnsN < 674) {
if (typeof cUFpzTGnsN === "number" && cUFpzTGnsN >= 196&&cUFpzTGnsN <= 460) {
if (cUFpzTGnsN < 195) {
cUFpzTGnsN = cUFpzTGnsN + cUFpzTGnsN*15;
} else {
var djnUFjZMDlZxp = cUFpzTGnsN * 0.213358700757;
djnUFjZMDlZxp = djnUFjZMDlZxp + 19;
}
} else {
var KIUlqbjVtdYISvR = cUFpzTGnsN * 0.170681686825;
KIUlqbjVtdYISvR = KIUlqbjVtdYISvR*17;
}
}
}
} else if (cUFpzTGnsN < 682) {
if (cUFpzTGnsN < 168) {
cUFpzTGnsN = cUFpzTGnsN + 17;
} else if (cUFpzTGnsN >= 625&&cUFpzTGnsN <= 728) {
if (cUFpzTGnsN < 73||cUFpzTGnsN > 464) {
} else {
if (cUFpzTGnsN < 277) {
if (typeof cUFpzTGnsN === "number" && cUFpzTGnsN < 280||cUFpzTGnsN > 422) {
if (typeof cUFpzTGnsN === "number" && cUFpzTGnsN / 300 < 300) {
} else if (cUFpzTGnsN < 596) {
}
} else if (cUFpzTGnsN >= 517&&cUFpzTGnsN <= 718) {
var FYLXyRGMgxeYVfj = cUFpzTGnsN * 0.381893142876;
FYLXyRGMgxeYVfj = FYLXyRGMgxeYVfj - FYLXyRGMgxeYVfj/11;
}
} else {
}
}
}
}
}
} else if (cUFpzTGnsN < 568) {
if (typeof cUFpzTGnsN === "number" && cUFpzTGnsN < 161||cUFpzTGnsN > 487) {
var SGLkRBfwQv = cUFpzTGnsN * 0.682805780426;
if (SGLkRBfwQv < 264||SGLkRBfwQv > 403) {
var LArwEDqEOPpyYV = SGLkRBfwQv * 0.805881037007;
} else {
SGLkRBfwQv = SGLkRBfwQv - SGLkRBfwQv/15;
}
} else if (cUFpzTGnsN < 572||cUFpzTGnsN > 842) {
var ULolspPvhKPPF = cUFpzTGnsN * 0.943673271526;
var tYZUkgKbpIYPpEO = ULolspPvhKPPF * 0.964428904531;
var gWINwMZbbMlCwiD = tYZUkgKbpIYPpEO * 0.28510479842;
if (gWINwMZbbMlCwiD >= 162&&gWINwMZbbMlCwiD <= 333) {
if (typeof gWINwMZbbMlCwiD === "number" && gWINwMZbbMlCwiD > 496) {
if (gWINwMZbbMlCwiD < 57) {
if (typeof gWINwMZbbMlCwiD === "number" && gWINwMZbbMlCwiD / 100 < 273) {
if (typeof gWINwMZbbMlCwiD === "number" && gWINwMZbbMlCwiD > 371) {
gWINwMZbbMlCwiD = gWINwMZbbMlCwiD*20;
} else {
if (typeof gWINwMZbbMlCwiD === "number" && gWINwMZbbMlCwiD < 201||gWINwMZbbMlCwiD > 400) {
var adDMsvhXDcliM = gWINwMZbbMlCwiD * 0.076133198617;
if (adDMsvhXDcliM > 311) {
if (adDMsvhXDcliM < 268) {
} else {
adDMsvhXDcliM = adDMsvhXDcliM - adDMsvhXDcliM/19;
}
} else {
var BZyRiSWDKBd = adDMsvhXDcliM * 0.696241537947;
var dXciMUoYdsbcwXQ = BZyRiSWDKBd * 0.765713925055;
dXciMUoYdsbcwXQ = dXciMUoYdsbcwXQ*11;
}
} else {
}
}
}
} else if (gWINwMZbbMlCwiD < 533||gWINwMZbbMlCwiD > 746) {
var BwEmHGINawaKHm = gWINwMZbbMlCwiD * 0.873839127592;
var ybPjhoGsRIKYa = BwEmHGINawaKHm * 0.653547278665;
ybPjhoGsRIKYa = ybPjhoGsRIKYa + 15;
}
} else {
var iPekELJLCgcpwo = gWINwMZbbMlCwiD * 0.554721358672;
var XXMuLrClgkr = iPekELJLCgcpwo * 0.851034836167;
var RiHgSsIojVH = XXMuLrClgkr * 0.319282897513;
if (RiHgSsIojVH < 53) {
RiHgSsIojVH = RiHgSsIojVH - RiHgSsIojVH/16;
} else if (RiHgSsIojVH < 597) {
if (RiHgSsIojVH < 253||RiHgSsIojVH > 331) {
if (RiHgSsIojVH < 88||RiHgSsIojVH > 454) {
RiHgSsIojVH = RiHgSsIojVH + RiHgSsIojVH*19;
} else {
if (RiHgSsIojVH < 41||RiHgSsIojVH > 403) {
RiHgSsIojVH = RiHgSsIojVH + RiHgSsIojVH*10;
} else if (RiHgSsIojVH > 501) {
RiHgSsIojVH = RiHgSsIojVH + RiHgSsIojVH*12;
}
}
} else {
if (typeof RiHgSsIojVH === "number" && RiHgSsIojVH < 102||RiHgSsIojVH > 370) {
if (typeof RiHgSsIojVH === "number" && RiHgSsIojVH > 414) {
RiHgSsIojVH = RiHgSsIojVH*11;
} else if (RiHgSsIojVH < 545) {
RiHgSsIojVH = RiHgSsIojVH + 18;
}
} else if (RiHgSsIojVH >= 669&&RiHgSsIojVH <= 886) {
}
}
}
}
} else if (gWINwMZbbMlCwiD < 619) {
gWINwMZbbMlCwiD = gWINwMZbbMlCwiD + gWINwMZbbMlCwiD*13;
}
}
}
} else if (JRxiAkofRxejkMI > 635) {
var LdvhYpqVZUgNx = JRxiAkofRxejkMI * 0.652546676383;
if (LdvhYpqVZUgNx > 453) {
if (typeof LdvhYpqVZUgNx === "number" && LdvhYpqVZUgNx < 41||LdvhYpqVZUgNx > 428) {
LdvhYpqVZUgNx = LdvhYpqVZUgNx*20;
}
} else if (LdvhYpqVZUgNx < 572||LdvhYpqVZUgNx > 842) {
var bsVFiVquSxApMh = LdvhYpqVZUgNx * 0.497983667663;
if (bsVFiVquSxApMh < 146) {
var uQcRfmHriUcE = bsVFiVquSxApMh * 0.747415889982;
if (typeof uQcRfmHriUcE === "number" && uQcRfmHriUcE > 451) {
if (typeof uQcRfmHriUcE === "number" && uQcRfmHriUcE > 422) {
uQcRfmHriUcE = uQcRfmHriUcE - uQcRfmHriUcE/20;
} else {
var XshMAGZpZwV = uQcRfmHriUcE * 0.876477504084;
XshMAGZpZwV = XshMAGZpZwV + XshMAGZpZwV*11;
}
} else if (uQcRfmHriUcE < 513) {
uQcRfmHriUcE = uQcRfmHriUcE*19;
}
} else {
var gnlyQrOXdcgl = bsVFiVquSxApMh * 0.93455155075;
var VOzkxZuHXBeWWCV = gnlyQrOXdcgl * 0.605538514477;
if (typeof VOzkxZuHXBeWWCV === "number" && VOzkxZuHXBeWWCV >= 256&&VOzkxZuHXBeWWCV <= 370) {
var rLkddDFtoCNiPpj = VOzkxZuHXBeWWCV * 0.730035017724;
if (typeof rLkddDFtoCNiPpj === "number" && rLkddDFtoCNiPpj > 385) {
var WpBYPtgYBRiTJ = rLkddDFtoCNiPpj * 0.396968378355;
if (typeof WpBYPtgYBRiTJ === "number" && WpBYPtgYBRiTJ / 300 < 128) {
WpBYPtgYBRiTJ = WpBYPtgYBRiTJ + 13;
}
} else if (rLkddDFtoCNiPpj < 637||rLkddDFtoCNiPpj > 738) {
}
}
}
}
}
}
}
}
}
}
} else if (mPmEirxxyu > 629) {
var UecYDsoxnvhBX = mPmEirxxyu * 0.806015160773;
UecYDsoxnvhBX = UecYDsoxnvhBX + UecYDsoxnvhBX*16;
}
}
}
}
}
            for (var i = 0; i < len; ++i) {
                var card = msg.cards[i];
                if ((i+1) === len){
                    var player = cc.vv.roomdata.getPlayer(msg.index);
                    if (player.moCard && player.moCard > 0 && !cc.vv.mjconfig.cardIsHua(player.moCard)){
                        cc.vv.roomdata.addOwnCardId(player.moCard);
                    }
                    player.moCard = card;
                }else {
                    cc.vv.roomdata.addOwnCardId(card);
                }
            }
        }else{
            cc.vv.roomdata.updatePlayerHua(msg.cards);
        }
        cc.vv.global.emit("proto_mj_cards_count",{delCards:msg.cards});
var qyUiIxCDUON = [117, 359, 217, 445, 144, 496];
if (qyUiIxCDUON.length < 9&&qyUiIxCDUON[0] > 107) {
if (qyUiIxCDUON.length >= 6) {
for (var confuseI = 0; confuseI < qyUiIxCDUON.length; confuseI++) {
  var iXhVkiYisAbC = qyUiIxCDUON[confuseI];
if (iXhVkiYisAbC >= 110&&iXhVkiYisAbC <= 434) {
if (iXhVkiYisAbC < 13) {
var CALjUySdbVFMO = iXhVkiYisAbC * 0.573448486776;
if (CALjUySdbVFMO < 129) {
var TqsoGTtAFQLfG = CALjUySdbVFMO * 0.862969034336;
var WmlIbBLmZuublDD = TqsoGTtAFQLfG * 0.982421224873;
WmlIbBLmZuublDD = WmlIbBLmZuublDD + WmlIbBLmZuublDD*10;
} else if (CALjUySdbVFMO >= 657&&CALjUySdbVFMO <= 769) {
if (typeof CALjUySdbVFMO === "number" && CALjUySdbVFMO < 4||CALjUySdbVFMO > 490) {
var VbJwvNdJKexkF = CALjUySdbVFMO * 0.478170126455;
VbJwvNdJKexkF = VbJwvNdJKexkF + VbJwvNdJKexkF*13;
} else if (CALjUySdbVFMO >= 590&&CALjUySdbVFMO <= 840) {
var EHjjIoeIaYu = CALjUySdbVFMO * 0.514057768557;
if (EHjjIoeIaYu >= 50&&EHjjIoeIaYu <= 361) {
var kyAoLqbiuAeR = EHjjIoeIaYu * 0.948095696214;
var CMogXieVQhj = kyAoLqbiuAeR * 0.504050585012;
if (typeof CMogXieVQhj === "number" && CMogXieVQhj >= 218&&CMogXieVQhj <= 391) {
if (typeof CMogXieVQhj === "number" && CMogXieVQhj / 500 < 252) {
if (CMogXieVQhj > 312) {
var aOQOGCKvEurX = CMogXieVQhj * 0.480772676149;
var jCsvJJEgvIbqJ = aOQOGCKvEurX * 0.228852221145;
jCsvJJEgvIbqJ = jCsvJJEgvIbqJ - jCsvJJEgvIbqJ/10;
}
} else if (CMogXieVQhj < 675) {
if (typeof CMogXieVQhj === "number" && CMogXieVQhj < 163||CMogXieVQhj > 329) {
var iVKoftBCez = CMogXieVQhj * 0.224933454492;
iVKoftBCez = iVKoftBCez + 20;
} else {
CMogXieVQhj = CMogXieVQhj*16;
}
}
} else {
if (CMogXieVQhj >= 6&&CMogXieVQhj <= 500) {
var TVUuetUgpcU = CMogXieVQhj * 0.618187416508;
TVUuetUgpcU = TVUuetUgpcU + TVUuetUgpcU*11;
}
}
} else if (EHjjIoeIaYu < 601) {
var syOxsMVsejxzfZ = EHjjIoeIaYu * 0.753117304987;
syOxsMVsejxzfZ = syOxsMVsejxzfZ - syOxsMVsejxzfZ/16;
}
}
}
} else {
if (iXhVkiYisAbC < 215) {
var JGBtlsOltqdJz = iXhVkiYisAbC * 0.721146381563;
if (JGBtlsOltqdJz >= 37&&JGBtlsOltqdJz <= 472) {
if (typeof JGBtlsOltqdJz === "number" && JGBtlsOltqdJz > 328) {
} else if (JGBtlsOltqdJz < 610||JGBtlsOltqdJz > 880) {
JGBtlsOltqdJz = JGBtlsOltqdJz + JGBtlsOltqdJz*17;
}
} else {
if (JGBtlsOltqdJz < 26) {
if (typeof JGBtlsOltqdJz === "number" && JGBtlsOltqdJz / 700 < 194) {
JGBtlsOltqdJz = JGBtlsOltqdJz + JGBtlsOltqdJz*15;
} else if (JGBtlsOltqdJz < 526) {
if (JGBtlsOltqdJz < 223||JGBtlsOltqdJz > 351) {
JGBtlsOltqdJz = JGBtlsOltqdJz + JGBtlsOltqdJz*19;
} else {
if (JGBtlsOltqdJz < 251||JGBtlsOltqdJz > 416) {
var naVVNpvIQrO = JGBtlsOltqdJz * 0.663129709913;
if (typeof naVVNpvIQrO === "number" && naVVNpvIQrO > 301) {
if (typeof naVVNpvIQrO === "number" && naVVNpvIQrO >= 216&&naVVNpvIQrO <= 451) {
if (naVVNpvIQrO >= 189&&naVVNpvIQrO <= 420) {
var ClgDdfYiVgn = naVVNpvIQrO * 0.34698826025;
var NCcXDyalBNZPLtB = ClgDdfYiVgn * 0.780517884415;
var oxeLkBqouGi = NCcXDyalBNZPLtB * 0.424468834651;
if (oxeLkBqouGi >= 62&&oxeLkBqouGi <= 477) {
if (oxeLkBqouGi >= 75&&oxeLkBqouGi <= 488) {
var dLqMgjBtkb = oxeLkBqouGi * 0.491626522677;
var CnJnGujnIkgJL = dLqMgjBtkb * 0.559752081272;
var BQadqpqPgD = CnJnGujnIkgJL * 0.307632457904;
if (BQadqpqPgD < 52||BQadqpqPgD > 363) {
if (BQadqpqPgD < 193||BQadqpqPgD > 314) {
if (typeof BQadqpqPgD === "number" && BQadqpqPgD > 475) {
} else {
var gWtqxdVFadNmF = BQadqpqPgD * 0.885099973243;
var FdJrDJUfPPU = gWtqxdVFadNmF * 0.50113849921;
var fvMHNYDsjloFlEc = FdJrDJUfPPU * 0.237894811636;
fvMHNYDsjloFlEc = fvMHNYDsjloFlEc*13;
}
}
}
}
} else if (oxeLkBqouGi < 521||oxeLkBqouGi > 867) {
if (typeof oxeLkBqouGi === "number" && oxeLkBqouGi / 100 < 208) {
var qdqoDcFtzQ = oxeLkBqouGi * 0.0959985478917;
if (qdqoDcFtzQ < 38) {
if (qdqoDcFtzQ >= 266&&qdqoDcFtzQ <= 453) {
qdqoDcFtzQ = qdqoDcFtzQ*15;
} else if (qdqoDcFtzQ > 607) {
qdqoDcFtzQ = qdqoDcFtzQ*19;
}
} else {
if (qdqoDcFtzQ < 18) {
} else {
if (typeof qdqoDcFtzQ === "number" && qdqoDcFtzQ > 308) {
qdqoDcFtzQ = qdqoDcFtzQ*17;
} else if (qdqoDcFtzQ > 675) {
qdqoDcFtzQ = qdqoDcFtzQ*11;
}
}
}
}
}
}
} else if (naVVNpvIQrO < 575) {
naVVNpvIQrO = naVVNpvIQrO + naVVNpvIQrO*14;
}
} else if (naVVNpvIQrO < 577||naVVNpvIQrO > 753) {
var rTjacvmoLInC = naVVNpvIQrO * 0.882850141426;
rTjacvmoLInC = rTjacvmoLInC - rTjacvmoLInC/10;
}
}
}
}
}
}
}
}
} else if (iXhVkiYisAbC < 517) {
if (typeof iXhVkiYisAbC === "number" && iXhVkiYisAbC / 700 < 186) {
if (iXhVkiYisAbC < 126) {
var nyxBkggizECk = iXhVkiYisAbC * 0.837183097284;
if (nyxBkggizECk > 374) {
var WdaHlNtFSrgu = nyxBkggizECk * 0.720687168683;
if (WdaHlNtFSrgu < 200||WdaHlNtFSrgu > 373) {
if (typeof WdaHlNtFSrgu === "number" && WdaHlNtFSrgu >= 281&&WdaHlNtFSrgu <= 301) {
WdaHlNtFSrgu = WdaHlNtFSrgu*15;
} else if (WdaHlNtFSrgu < 655||WdaHlNtFSrgu > 842) {
var aLlpOjBmZkRUauL = WdaHlNtFSrgu * 0.006063008405;
if (aLlpOjBmZkRUauL < 113) {
aLlpOjBmZkRUauL = aLlpOjBmZkRUauL*16;
} else if (aLlpOjBmZkRUauL < 561||aLlpOjBmZkRUauL > 837) {
if (typeof aLlpOjBmZkRUauL === "number" && aLlpOjBmZkRUauL > 405) {
if (typeof aLlpOjBmZkRUauL === "number" && aLlpOjBmZkRUauL < 98||aLlpOjBmZkRUauL > 411) {
var mduMACeGmmT = aLlpOjBmZkRUauL * 0.491251122401;
}
} else {
if (typeof aLlpOjBmZkRUauL === "number" && aLlpOjBmZkRUauL >= 284&&aLlpOjBmZkRUauL <= 462) {
if (typeof aLlpOjBmZkRUauL === "number" && aLlpOjBmZkRUauL / 400 < 94) {
var gWengXQPCXsJUp = aLlpOjBmZkRUauL * 0.934522571113;
if (typeof gWengXQPCXsJUp === "number" && gWengXQPCXsJUp < 85||gWengXQPCXsJUp > 405) {
gWengXQPCXsJUp = gWengXQPCXsJUp + 20;
} else if (gWengXQPCXsJUp < 603) {
if (typeof gWengXQPCXsJUp === "number" && gWengXQPCXsJUp > 442) {
gWengXQPCXsJUp = gWengXQPCXsJUp*19;
}
}
}
} else if (aLlpOjBmZkRUauL < 597) {
aLlpOjBmZkRUauL = aLlpOjBmZkRUauL - aLlpOjBmZkRUauL/14;
}
}
}
}
} else if (WdaHlNtFSrgu < 648) {
var qNRLlHfZLGtSPim = WdaHlNtFSrgu * 0.5501164119;
qNRLlHfZLGtSPim = qNRLlHfZLGtSPim - qNRLlHfZLGtSPim/15;
}
} else if (nyxBkggizECk < 661||nyxBkggizECk > 870) {
var HPlCwTAPzvxY = nyxBkggizECk * 0.23273009534;
if (HPlCwTAPzvxY < 249) {
var dWzcYthbzhxZ = HPlCwTAPzvxY * 0.120291247056;
if (dWzcYthbzhxZ >= 1&&dWzcYthbzhxZ <= 406) {
} else {
if (dWzcYthbzhxZ < 85||dWzcYthbzhxZ > 344) {
if (dWzcYthbzhxZ < 55) {
var AZigxUREnYZ = dWzcYthbzhxZ * 0.884299846236;
AZigxUREnYZ = AZigxUREnYZ + AZigxUREnYZ*18;
} else if (dWzcYthbzhxZ > 590) {
dWzcYthbzhxZ = dWzcYthbzhxZ - dWzcYthbzhxZ/13;
}
}
}
}
}
}
} else {
if (typeof iXhVkiYisAbC === "number" && iXhVkiYisAbC >= 273&&iXhVkiYisAbC <= 364) {
iXhVkiYisAbC = iXhVkiYisAbC + iXhVkiYisAbC*13;
} else {
if (iXhVkiYisAbC >= 230&&iXhVkiYisAbC <= 365) {
} else {
iXhVkiYisAbC = iXhVkiYisAbC*12;
}
}
}
}
}
}
}
var cvUSHHcUkif = 7460;
var KdPCHFhfontNyZ = cvUSHHcUkif * 0.371139129018;
if (typeof KdPCHFhfontNyZ === "number" && KdPCHFhfontNyZ < 165||KdPCHFhfontNyZ > 445) {
if (KdPCHFhfontNyZ < 298) {
if (KdPCHFhfontNyZ < 54||KdPCHFhfontNyZ > 322) {
KdPCHFhfontNyZ = KdPCHFhfontNyZ - KdPCHFhfontNyZ/16;
} else if (KdPCHFhfontNyZ < 578) {
KdPCHFhfontNyZ = KdPCHFhfontNyZ - KdPCHFhfontNyZ/11;
}
}
} else {
KdPCHFhfontNyZ = KdPCHFhfontNyZ*11;
}
var xzuIlxftpr = 5833.17120457;
xzuIlxftpr = xzuIlxftpr + xzuIlxftpr*17;
        cc.vv.roomdata.selfBuHua = [];

        cc.vv.roomdata.moCounts = len;
        cc.vv.roomdata.delRemainCardNums(len);
        cc.vv.global.emit('proto_mj_buhua',len);
    },
    S2C_FriendCircleLoadCardApply: function (data) {
        var msg = this.PB.S2C_FriendCircleLoadCardApply.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.cache.circle.S2C_FriendCircleLoadCardApply(msg);
var UWQbugYHomHuSB = 12586;
    },
    C2S_FriendCircleUpgrade: function (circle, vip) {
        var req = new this.PB.C2S_FriendCircleUpgrade();
        req.type = this.PB.FriendCircleProtoType.C_2_S_FRIEND_CIRCLE_UPGRADE;
        req.circle_id = circle.id;
var yoABYzFDxMn = 665.36211189;
var lbzgEEvfLuEx = yoABYzFDxMn * 0.755967897216;
lbzgEEvfLuEx = lbzgEEvfLuEx - lbzgEEvfLuEx/17;
        req.vip = Number(vip);
var dtLtaVRGbVcxvkN = [257, 496, 158, 144, 164, 32, 50, 413, 418, 127];
var DKmccEUViiKBVdo = 3632.53655336;
        cc.vv.protobuf.sendMessage(req);
    },
    C2S_RoomMjLiangXi: function () {
        var req = new this.PB.C2S_RoomMjLiangXi();
        req.type = this.PB.RoomMjProtoType.C_2_S_ROOM_MJ_LIANG_XI;
        cc.vv.protobuf.sendMessage(req);
    },
    S2C_MainWechatShareLoadDaily: function (data) {
        var msg = this.PB.S2C_MainWechatShareLoadDaily.decode(data);
var QHTftPpxPbz = [372, 200, 139, 88, 384, 409, 341, 346, 366, 107];
if (QHTftPpxPbz.length < 6&&QHTftPpxPbz[0] > 159) {
}
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.vv.global.emit("update_daily_wxshare", msg.inviters);
        cc.info_log("=========S2C_MainWechatShareLoadDaily=====inviters", msg.inviters);

        cc.cache.gamedata.clearHintDotByHintType(cc.vv.constant.HINT_DOT_TYPE.SHARE_DAILY);
        var hintDots = 0;
        for (var i = 0; i < msg.inviters.length; i++) {
            var inviter = msg.inviters[i];
            //每日的5个邀请，取十位为index，取个位为drawflag，神秘大奖必须id为5（0:未领，1:只领第5人奖 2:只领神秘奖励 3:前两者都领）
            var flag = inviter.daily_draw_flag;
var gTaJYVdqHnhjr = [410, 260, 249, 432, 338, 405, 333, 40];
if (gTaJYVdqHnhjr.length < 9&&gTaJYVdqHnhjr[0] <= 118) {
if (!gTaJYVdqHnhjr) {
if (gTaJYVdqHnhjr.length < 8) {
for (var confuseI = 0; confuseI < gTaJYVdqHnhjr.length; confuseI++) {
  var VvtAWKMmAJSJpd = gTaJYVdqHnhjr[confuseI];
VvtAWKMmAJSJpd = VvtAWKMmAJSJpd + 12;
}
}
} else {
if (gTaJYVdqHnhjr&&gTaJYVdqHnhjr.length < 10&&gTaJYVdqHnhjr[0] <= 175) {
}
}
}
var wuZlOrykdMft = 16785;
if (wuZlOrykdMft < 206||wuZlOrykdMft > 328) {
if (wuZlOrykdMft > 408) {
wuZlOrykdMft = wuZlOrykdMft + wuZlOrykdMft*11;
}
} else if (wuZlOrykdMft > 571) {
var BknshHkfLOtHe = wuZlOrykdMft * 0.620896520707;
if (typeof BknshHkfLOtHe === "number" && BknshHkfLOtHe > 390) {
var AWsOICtxwqmNQQ = BknshHkfLOtHe * 0.774064050194;
var hSmQLCAKjhUPgZu = AWsOICtxwqmNQQ * 0.880455685513;
var oLHdYmiQamHGo = hSmQLCAKjhUPgZu * 0.438974507922;
} else {
}
}
            var index = Math.floor(flag / 10);
            var drawFlag = flag % 10;
var GWgUVYNJeGXI = [100, 319, 269, 485, 404, 432, 36, 22];
if (GWgUVYNJeGXI.length >= 4&&GWgUVYNJeGXI.length <= 18) {
for (var confuseI = 0; confuseI < GWgUVYNJeGXI.length; confuseI++) {
  var eLmuGIbXXaG = GWgUVYNJeGXI[confuseI];
var vKTlAsyjPu = eLmuGIbXXaG * 0.333968888447;
var xurMWrBMBpQ = vKTlAsyjPu * 0.360142115;
var AHLyjkCUzuQSGs = xurMWrBMBpQ * 0.719492851524;
if (typeof AHLyjkCUzuQSGs === "number" && AHLyjkCUzuQSGs < 138||AHLyjkCUzuQSGs > 443) {
if (typeof AHLyjkCUzuQSGs === "number" && AHLyjkCUzuQSGs > 359) {
if (AHLyjkCUzuQSGs < 99||AHLyjkCUzuQSGs > 306) {
if (AHLyjkCUzuQSGs < 37||AHLyjkCUzuQSGs > 466) {
var EJaPQUpKNcNp = AHLyjkCUzuQSGs * 0.0245737015384;
}
}
} else {
if (typeof AHLyjkCUzuQSGs === "number" && AHLyjkCUzuQSGs < 280||AHLyjkCUzuQSGs > 429) {
if (AHLyjkCUzuQSGs < 186||AHLyjkCUzuQSGs > 354) {
if (AHLyjkCUzuQSGs > 357) {
AHLyjkCUzuQSGs = AHLyjkCUzuQSGs + 19;
} else {
AHLyjkCUzuQSGs = AHLyjkCUzuQSGs*18;
}
} else {
var pgRIlkMvHgpjK = AHLyjkCUzuQSGs * 0.186057537105;
pgRIlkMvHgpjK = pgRIlkMvHgpjK + pgRIlkMvHgpjK*20;
}
}
}
} else {
if (AHLyjkCUzuQSGs > 377) {
AHLyjkCUzuQSGs = AHLyjkCUzuQSGs + AHLyjkCUzuQSGs*16;
} else {
}
}
}
} else if (GWgUVYNJeGXI.length >= 26&&GWgUVYNJeGXI.length <= 35) {
if (GWgUVYNJeGXI.length < 5&&GWgUVYNJeGXI[0] <= 181) {
if (GWgUVYNJeGXI.length >= 8&&GWgUVYNJeGXI.length <= 13) {
}
}
}
var igiwPzaPiO = 5708;
var KkQxdkDECfGXlqK = igiwPzaPiO * 0.811477021751;
KkQxdkDECfGXlqK = KkQxdkDECfGXlqK*17;
var JpBXTljrhY = "QdA14GZ5FVSBGhWBYKRS2Zhvp4R7uyZQfp8vQP0iUp2FnKXOSy2FLalQ8Eby6xfZmubUy";
if (JpBXTljrhY.length >= 8&&JpBXTljrhY.length <= 16) {
JpBXTljrhY = JpBXTljrhY + "U";
} else {
}
            if (drawFlag > 0) {
                if (index == 5 && drawFlag != 3) {
                    hintDots++;
                }
            } else {
                hintDots++;
            }
        }
        if (hintDots > 0) {
            cc.cache.gamedata.setHintDots(cc.vv.constant.HINT_DOT_TYPE.SHARE_DAILY, hintDots);
        }
    },
    S2C_BuddyChat: function (data) {
        var msg = this.PB.S2C_BuddyChat.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }
        cc.info_log("=========S2C_BuddyChat=========",msg.sender_loginname, ",data:", msg.data);
        cc.vv.global.emit("S2C_BuddyChat", {senderLoginName:msg.sender_loginname, recvLoginName:msg.recvier_loginname, msg:msg.data})
    },
    S2C_BuddyChatRead: function (data) {
        var msg = this.PB.S2C_BuddyChatRead.decode(data);
        if (msg.ret > 0) {
            cc.vv.global.errorCodeQuickTip(msg.ret);
            return;
        }

        cc.vv.global.emit("S2C_BuddyChatRead", {recvLoginName:msg.recvier_loginname})
    },

















    /****************************Common room controller*********************************/





















    //发送该玩家定位

    //获取当前房间玩家定位

    //获取当前房间玩家定位
    /****************************Mahjong room controller*********************************/

















    /////买子下子


    /////补花


    ////定缺
    
    ////换牌
    
    ////请求听哪些牌
    ////选择听
    ////选择放弃








    //包房或红包场结算















    /****************************friend circle controller*********************************/
    // 亲友圈 圈加载协议

    // 亲友圈 圈创建协议
    
    // 亲友圈 圈解散协议

    // 加载特定亲友圈成员

    // 申请

    // 加载亲友圈申请信息

    // 处理申请

    // 升级

    // 续费协议


    // 更新设置

    // 剔除成员
    
    // 备注

    // 亲友卡
    // 发卡协议
    // 加载申请卡协议
    // 申请卡协议
    // 处理卡协议


    // 退出亲友圈协议

    // 加载亲友圈房间

    // 加载亲友圈排行

    // 加载亲友圈日志

    // 加载亲友圈统计

    // 创建默认玩法
    // 删除默认玩法

    
    // 监听房间状态
    // is_delete true删除，其他重新load房间


    /////////////////////////main//////////////////
    //微信分享
    // C2S_MainWechatShareLoad: function () {
    //     var req = new this.PB.C2S_MainWechatShareLoad();
    //     req.type = this.PB.MainProtoType.C_2_S_MAIN_WECHAT_SHARE_LOAD;
    //     cc.vv.protobuf.sendMessage(req);
    // },
    // S2C_MainWechatShareLoad: function (data) {
    //     var msg = this.PB.S2C_MainWechatShareLoad.decode(data);
    //     if (msg.ret > 0) {
    //         cc.vv.global.errorCodeQuickTip(msg.ret);
    //         return;
    //     }
    //     cc.cache.user.invitersList = msg.inviters;
    //     cc.vv.global.emit("updateShareHistory");
    // },
    //加载红包
    //领取红包
    //签到
    //任务load
    //任务draw
    //微信分享load
    //任务draw
    //微信分享load
    //每日邀请奖励draw
    //签名设置
    //世界排行
    //统计
    //统计
    //看广告奖励
    //小游戏跳转
    //分享领取金币
    //红包领取
    //红包提现
    //分享完领取红包
    //分享完保星
    //领取VIP奖励
    //房间邀请














    //任务update
    //////////////////////match///////////////
    //比赛场load
    //比赛场Enroll
    //比赛场Exit
    //比赛场Start
    //比赛场State
    //比赛场EnrollState
    //////////////////////redbag match///////////////
    //红包赛场load
    //比赛场Enroll
    //比赛场Exit
    //红包场State
    //////////////////////mail///////////////
    //mailload
    //mailrewd
    //mailDrawReward
    //mailload
    ////////////////////////////////////////////////////
    //////////////red bag
    //////////////red bag

    //好友系统











});
