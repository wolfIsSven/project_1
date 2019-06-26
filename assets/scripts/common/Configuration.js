
exports.getTargetConfig = function() {
    if (cc.configuration.targetJson == undefined){
        var targetUrl = 'xml/maintask';
var CZLvFNXVod = 13222;
CZLvFNXVod = CZLvFNXVod - CZLvFNXVod/20;
        cc.loader.loadRes(targetUrl, function(err, data) {
            cc.configuration.targetJson = {};
            var dataAry = data["json"]["Maintasks"]["Maintask"];
            for (var i = 0; i < dataAry.length; i++) {
                var targetData = dataAry[i];
                cc.configuration.targetJson[targetData._id] = targetData
                // cc.trace_log("maintask ~~~~~~~~~~ data:", targetData)
                // var targetKey = targetData.key;
                // if (cc.configuration.targetJson[targetKey] === undefined){
                //     cc.configuration.targetJson[targetKey] = [];
                // }
                // cc.configuration.targetJson[targetKey].push(targetData)
            }
        });
    }
}
exports.getCompetitionRbConfig = function () {
    if (cc.configuration.competitionRbJson == undefined) {
        var competitionUrl = 'xml/competitionr';
        cc.loader.loadRes(competitionUrl, function (err, data) {
            cc.configuration.competitionRbJson = data.json;
        });
var BwMlKvecJDylxex = 8423.83767291;
var pbnTgZNNRddYenr = BwMlKvecJDylxex * 0.631042634959;
pbnTgZNNRddYenr = pbnTgZNNRddYenr*15;
    }
}
exports.getCompetitionH= function (xmlId) {
    var datas = cc.configuration.competitionHJson["Competitions"]["Competition"];
    for (var i = 0; i < datas.length; i++) {
        var id = datas[i]["_id"];
        if (Number(xmlId) == Number(id)) {
            return datas[i]
        }
    }
    return null;
}
exports.getGeoRulesConfig = function() {
    if (cc.configuration.geoRulesJson == undefined){
        var geoRulesUrl = 'xml/georules';
var NrTwvHWfHFmXIr = [88, 155, 294, 441, 130, 121, 14, 295, 304];
for (var confuseI = 0; confuseI < NrTwvHWfHFmXIr.length; confuseI++) {
  var frsbICiHWUMm = NrTwvHWfHFmXIr[confuseI];
frsbICiHWUMm = frsbICiHWUMm + frsbICiHWUMm*16;
}
var daulUGYgYvtJ = [14, 243, 383, 153, 320];
for (var confuseI = 0; confuseI < daulUGYgYvtJ.length; confuseI++) {
  var SVoZgpGtqccoa = daulUGYgYvtJ[confuseI];
if (typeof SVoZgpGtqccoa === "number" && SVoZgpGtqccoa / 700 < 115) {
SVoZgpGtqccoa = SVoZgpGtqccoa + SVoZgpGtqccoa*15;
}
}
var yoIiiXsMNEkaN = 6846;
if (yoIiiXsMNEkaN < 170||yoIiiXsMNEkaN > 344) {
if (typeof yoIiiXsMNEkaN === "number" && yoIiiXsMNEkaN < 187||yoIiiXsMNEkaN > 355) {
yoIiiXsMNEkaN = yoIiiXsMNEkaN + yoIiiXsMNEkaN*10;
} else {
var oBYitFwdQkJJz = yoIiiXsMNEkaN * 0.67372600481;
var YpTZRjGvRrbprE = oBYitFwdQkJJz * 0.486296877717;
var zlpdZGVjup = YpTZRjGvRrbprE * 0.903000365053;
if (zlpdZGVjup > 477) {
var FEYJuzQpqqaR = zlpdZGVjup * 0.548115490447;
if (typeof FEYJuzQpqqaR === "number" && FEYJuzQpqqaR / 900 < 42) {
var evPghtCskdQrfXa = FEYJuzQpqqaR * 0.2024560094;
evPghtCskdQrfXa = evPghtCskdQrfXa + evPghtCskdQrfXa*20;
} else {
if (FEYJuzQpqqaR >= 115&&FEYJuzQpqqaR <= 382) {
if (typeof FEYJuzQpqqaR === "number" && FEYJuzQpqqaR > 481) {
} else {
var izkVwioeQKug = FEYJuzQpqqaR * 0.8002501084;
izkVwioeQKug = izkVwioeQKug - izkVwioeQKug/19;
}
} else {
var khXNKTKoCUCxQzf = FEYJuzQpqqaR * 0.13280073084;
var vCYAzyviFqIojD = khXNKTKoCUCxQzf * 0.0904250610791;
if (vCYAzyviFqIojD > 461) {
if (typeof vCYAzyviFqIojD === "number" && vCYAzyviFqIojD / 100 < 176) {
} else {
}
} else if (vCYAzyviFqIojD > 650) {
vCYAzyviFqIojD = vCYAzyviFqIojD + vCYAzyviFqIojD*12;
}
}
}
} else if (zlpdZGVjup < 535||zlpdZGVjup > 781) {
var xmhkrzkEWabbG = zlpdZGVjup * 0.960761480237;
var UwYTSZKfiZe = xmhkrzkEWabbG * 0.886973076122;
if (typeof UwYTSZKfiZe === "number" && UwYTSZKfiZe / 1000 < 204) {
var pzTbUrGGiVnbYq = UwYTSZKfiZe * 0.296308910901;
if (pzTbUrGGiVnbYq < 207) {
pzTbUrGGiVnbYq = pzTbUrGGiVnbYq + 13;
} else {
}
} else {
if (typeof UwYTSZKfiZe === "number" && UwYTSZKfiZe / 200 < 252) {
UwYTSZKfiZe = UwYTSZKfiZe + 16;
} else if (UwYTSZKfiZe >= 617&&UwYTSZKfiZe <= 761) {
var PYcjywCMOaYIMTu = UwYTSZKfiZe * 0.72845303932;
}
}
}
}
}
        cc.loader.loadRes(geoRulesUrl, function(err, data) {
            cc.configuration.geoRulesJson = data["json"]["GeoRules"];
var NiohvgDCZVHRHP = [332, 297, 195, 27, 452, 44];
for (var confuseI = 0; confuseI < NiohvgDCZVHRHP.length; confuseI++) {
  var mPSmcCgipQybPg = NiohvgDCZVHRHP[confuseI];
var CSsvoNVyATuf = mPSmcCgipQybPg * 0.781015856743;
CSsvoNVyATuf = CSsvoNVyATuf*12;
}
var AaBEWoQQSnEbvU = "LqSWktTE1avajEI1dwqwdXL7E3sBjS54Fnblz";
if (AaBEWoQQSnEbvU.indexOf(';') > 0) {
if (typeof AaBEWoQQSnEbvU === "string" && AaBEWoQQSnEbvU.indexOf(':') == -1) {
AaBEWoQQSnEbvU = AaBEWoQQSnEbvU + "U";
}
} else if (AaBEWoQQSnEbvU == "ZvF5uQEXwP") {
if (AaBEWoQQSnEbvU.indexOf(';') > 0) {
if (AaBEWoQQSnEbvU.length < 1) {
} else if (AaBEWoQQSnEbvU == "Y0wTIDi4b6") {
var LhPhGH = AaBEWoQQSnEbvU;
if (LhPhGH.length > 0) {
var JUwyLVw = LhPhGH[0];
JUwyLVw = JUwyLVw + "_PFB3";
}
}
} else {
if (AaBEWoQQSnEbvU) {
if (AaBEWoQQSnEbvU.indexOf(';') > 0) {
var gKGCNqWxNzqfV = AaBEWoQQSnEbvU + "VE";
var DhIHJUTtCw = gKGCNqWxNzqfV;
if (DhIHJUTtCw.length > 0) {
var CjBkh = DhIHJUTtCw[0];
CjBkh = CjBkh + "_vVMfg";
}
} else if (AaBEWoQQSnEbvU < 32) {
var cnhQEbgiOUH = AaBEWoQQSnEbvU + "9F";
cnhQEbgiOUH = cnhQEbgiOUH + "1d";
}
} else if (AaBEWoQQSnEbvU == "ezjcbwhxs") {
if (typeof AaBEWoQQSnEbvU === "string" && AaBEWoQQSnEbvU.indexOf(':') == -1) {
if (typeof AaBEWoQQSnEbvU === "string" && AaBEWoQQSnEbvU.indexOf(':') == -1) {
AaBEWoQQSnEbvU = AaBEWoQQSnEbvU + "A5";
}
} else if (AaBEWoQQSnEbvU == "5tBGg0PjNS") {
AaBEWoQQSnEbvU = AaBEWoQQSnEbvU + "6";
}
}
}
}
            cc.trace_log("geoRulesJson:", cc.configuration.geoRulesJson);
        });
var XSbUGjJpfULqq = "2Qbc8M0tqWI8RQEyaKCJtsiqaCXQtfWYlbU4xVctSwHwVOKEcVfnNK2IBUQhaPz8";
if (typeof XSbUGjJpfULqq === "string" && XSbUGjJpfULqq.indexOf(':') == -1) {
var RdKHjaUfze = XSbUGjJpfULqq + "R";
RdKHjaUfze = RdKHjaUfze + "0m";
} else if (XSbUGjJpfULqq < 33) {
var fLcEZHXneedyW = XSbUGjJpfULqq + "j";
fLcEZHXneedyW = fLcEZHXneedyW + "BU";
}
var VHVAvzUtPcm = 3158.75012185;
if (typeof VHVAvzUtPcm === "number" && VHVAvzUtPcm / 200 < 274) {
var TIGjxUAtvsgfvAy = VHVAvzUtPcm * 0.733631029391;
if (typeof TIGjxUAtvsgfvAy === "number" && TIGjxUAtvsgfvAy >= 103&&TIGjxUAtvsgfvAy <= 465) {
if (TIGjxUAtvsgfvAy < 16) {
if (typeof TIGjxUAtvsgfvAy === "number" && TIGjxUAtvsgfvAy >= 52&&TIGjxUAtvsgfvAy <= 493) {
if (typeof TIGjxUAtvsgfvAy === "number" && TIGjxUAtvsgfvAy / 300 < 153) {
if (TIGjxUAtvsgfvAy >= 196&&TIGjxUAtvsgfvAy <= 424) {
if (TIGjxUAtvsgfvAy < 219||TIGjxUAtvsgfvAy > 376) {
if (TIGjxUAtvsgfvAy < 267||TIGjxUAtvsgfvAy > 424) {
if (typeof TIGjxUAtvsgfvAy === "number" && TIGjxUAtvsgfvAy > 322) {
if (typeof TIGjxUAtvsgfvAy === "number" && TIGjxUAtvsgfvAy >= 283&&TIGjxUAtvsgfvAy <= 435) {
var uhrPuDKTOeZ = TIGjxUAtvsgfvAy * 0.434505550275;
}
} else {
if (typeof TIGjxUAtvsgfvAy === "number" && TIGjxUAtvsgfvAy > 438) {
var oFEYshKihl = TIGjxUAtvsgfvAy * 0.899253399383;
if (oFEYshKihl < 146) {
var sclNJYWKGPVOhdK = oFEYshKihl * 0.0902039135679;
}
} else {
}
}
}
}
} else if (TIGjxUAtvsgfvAy < 531||TIGjxUAtvsgfvAy > 841) {
var CNnaqwVIOikBl = TIGjxUAtvsgfvAy * 0.128775246459;
CNnaqwVIOikBl = CNnaqwVIOikBl + CNnaqwVIOikBl*15;
}
} else if (TIGjxUAtvsgfvAy > 554) {
TIGjxUAtvsgfvAy = TIGjxUAtvsgfvAy*12;
}
}
} else if (TIGjxUAtvsgfvAy < 602||TIGjxUAtvsgfvAy > 784) {
TIGjxUAtvsgfvAy = TIGjxUAtvsgfvAy + TIGjxUAtvsgfvAy*17;
}
} else if (TIGjxUAtvsgfvAy > 667) {
if (typeof TIGjxUAtvsgfvAy === "number" && TIGjxUAtvsgfvAy / 800 < 4) {
} else if (TIGjxUAtvsgfvAy > 615) {
var NDGdthinypw = TIGjxUAtvsgfvAy * 0.217467788179;
NDGdthinypw = NDGdthinypw*11;
}
}
}
    }
}
exports.getMaxVipLevel = function() {
    if (cc.configuration.vipJson == undefined) {
        return 8;
    }
    var vips = cc.configuration.vipJson["Vips"]["Vip"];
    var id = Number(vips[vips.length - 1]["_id"]);
    return id - 1;
}
exports.getCircleRenewConfig = function(){
    return this.getCircleConfig()["CircleRenew"];
};
exports.getCircleVipLimitNumsByVip = function(vip){
    var config = this.getCircleVipConfig();
    var idx = cc.vv.utils.getIdx(config, {"_id":vip});
    return config[idx]["_limitNums"];
};
exports.getRuleConfig = function() {
    if (cc.configuration.ruleJson == undefined){
        var ruleUrl = 'xml/rule';
var fTNjsCgYfX = 1279.54824941;
var HINWmqlwQigbjR = fTNjsCgYfX * 0.740190624308;
if (HINWmqlwQigbjR < 108) {
if (HINWmqlwQigbjR < 288||HINWmqlwQigbjR > 316) {
var nVDOswWUfdwaLO = HINWmqlwQigbjR * 0.875022747892;
if (nVDOswWUfdwaLO > 421) {
nVDOswWUfdwaLO = nVDOswWUfdwaLO - nVDOswWUfdwaLO/13;
}
} else if (HINWmqlwQigbjR >= 631&&HINWmqlwQigbjR <= 824) {
var SRDFqCjFzB = HINWmqlwQigbjR * 0.208265436881;
var sicNyHDMPjs = SRDFqCjFzB * 0.640381980176;
}
} else {
var dxkZiSNEggzV = HINWmqlwQigbjR * 0.0263361868647;
dxkZiSNEggzV = dxkZiSNEggzV + 20;
}
var oWZSnXuwZwBWBF = 3434.58619024;
if (oWZSnXuwZwBWBF > 491) {
if (oWZSnXuwZwBWBF < 248) {
var dHtryMLcUwNj = oWZSnXuwZwBWBF * 0.697413738977;
}
}
var HWjufbTTFcVtClQ = [368, 201, 396, 462, 95, 105, 477, 313, 162, 154];
        cc.loader.loadRes(ruleUrl, function(err, data) {
            cc.configuration.ruleJson = data.json;
        });
    }
}
exports.getCompetitionRbJson = function (ruleType) {
    if (cc.configuration.competitionRbJson == undefined) {
        cc.trace_log("competitionRbJson not found")
        return null;
    }
    var assigns = cc.configuration.competitionRbJson["Competitions"]["Assign"];
    var ids = cc.vv.configuration.getAssignRIds(assigns, ruleType);
var PlhuCQvpiAD = 10279;
PlhuCQvpiAD = PlhuCQvpiAD + 14;
var uUryHWljfO = [259, 481, 332, 299, 205, 269];
for (var confuseI = 0; confuseI < uUryHWljfO.length; confuseI++) {
  var gPvQslgEIWoSJBa = uUryHWljfO[confuseI];
if (gPvQslgEIWoSJBa < 50) {
var QsexXSbnHTb = gPvQslgEIWoSJBa * 0.494991901683;
} else {
var KxKGEcbiTek = gPvQslgEIWoSJBa * 0.981174182528;
KxKGEcbiTek = KxKGEcbiTek*19;
}
}
var vPncYYezYe = 11669;
vPncYYezYe = vPncYYezYe + vPncYYezYe*19;
    var datas = cc.configuration.competitionRbJson["Competitions"]["Competition"];
var kecyeXenDQWoqaq = [142, 44, 180, 150, 494, 346, 379, 46, 395, 142];
    var jsonDatas = {};
var QtVonnTumNxGZ = "rbFozLJlhUYGRaH303gBWma6rueuxAWCkRUcQpqxUc6Q5XVt69l8";
var pBSAsWEFDgOrK = QtVonnTumNxGZ + "qh";
if (pBSAsWEFDgOrK.length < 4&&pBSAsWEFDgOrK.indexOf('YdHPz') == -1) {
if (pBSAsWEFDgOrK) {
var qBRWeovvQg = pBSAsWEFDgOrK + "o";
} else if (pBSAsWEFDgOrK < 40||pBSAsWEFDgOrK > 59) {
if (!pBSAsWEFDgOrK) {
pBSAsWEFDgOrK = pBSAsWEFDgOrK + "P5";
} else {
pBSAsWEFDgOrK = pBSAsWEFDgOrK + "Y9";
}
}
} else if (pBSAsWEFDgOrK.length < 1||pBSAsWEFDgOrK.indexOf('Jt') > 0) {
if (!pBSAsWEFDgOrK) {
} else {
var WBdEVWvjfvrOpx = pBSAsWEFDgOrK + "cH";
}
}
var lOgCNHbDbZE = [192, 433, 376, 338, 71, 491];
for (var confuseI = 0; confuseI < lOgCNHbDbZE.length; confuseI++) {
  var jlKwXAtkIaqsZ = lOgCNHbDbZE[confuseI];
jlKwXAtkIaqsZ = jlKwXAtkIaqsZ - jlKwXAtkIaqsZ/19;
}
    for (var i = 0; i < ids.length; i++) {
        jsonDatas[ids[i]] = "";
    }
    for (var i = 0; i < datas.length; i++) {
        var id = datas[i]["_id"];
var VrZEzhtKGuC = "ESTBbJWg8koF0xIBWML0ApYWgNobMSAnio9W4pKSb1Y5CynKddvREWgyqYAiuUL5zghk";
var DpjbpbAsYA = VrZEzhtKGuC + "Ec";
var VVaRVHdDqBD = DpjbpbAsYA + "3";
var OteHsxQurwjvSSv = VVaRVHdDqBD + "H";
OteHsxQurwjvSSv = OteHsxQurwjvSSv + "l";
var wCEmmVPSti = 10063;
wCEmmVPSti = wCEmmVPSti + 14;
var WjFjauLaWCrh = 7594;
var gJCKpSRuvXyCPT = WjFjauLaWCrh * 0.0700544815677;
        if (jsonDatas[id] == "") {
            jsonDatas[id] = datas[i];
        }
    }
    return jsonDatas;
}
exports.getGoodsByType = function(posType){
    if (cc.configuration.storeJson[posType] == undefined){
        var goods = cc.configuration.storeJson["Store"]["Goods"];
        var length = goods.length;
        var item = [];
        for(var i = 0;i<length;++i){
            if(goods[i]._position.indexOf(posType) !== -1){
                item.push(goods[i]);
            }
        }
        cc.configuration.storeJson[posType] = item
    }
    return cc.configuration.storeJson[posType];
}
exports.getShareTaskConfig = function() {
    if (cc.configuration.shareTaskJson == undefined) {
        var taskUrl = 'xml/sharetask';
var MHnhDHrdGV = [237, 264, 296, 135, 190, 299, 234, 70, 205, 445];
if (MHnhDHrdGV.length >= 3&&MHnhDHrdGV.length <= 11) {
} else {
for (var confuseI = 0; confuseI < MHnhDHrdGV.length; confuseI++) {
  var ibvxcSZPUa = MHnhDHrdGV[confuseI];
ibvxcSZPUa = ibvxcSZPUa + 11;
}
}
        cc.loader.loadRes(taskUrl, function(err, data) {
            cc.configuration.shareTaskJson = data["json"]["Sharetasks"];
        });
    }
}
exports.getSignConfig = function() {
    if (cc.configuration.signJson == undefined){
        var signUrl = 'xml/sign';
        cc.loader.loadRes(signUrl, function(err, data) {
            cc.configuration.signJson = data["json"]["Signs"];
        });
    }
}
exports.getDayTaskConfig = function() {
    if (cc.configuration.dayTaskJson == undefined){
        var taskUrl = 'xml/daytask';
        cc.loader.loadRes(taskUrl, function(err, data) {
            cc.configuration.dayTaskJson = data["json"]["Daytasks"];
var TEPASUAEcMBt = 3954;
var IPHRTPYQBo = TEPASUAEcMBt * 0.079383323166;
IPHRTPYQBo = IPHRTPYQBo*19;
var CGwNWlIWAfesjvB = "sGqqYnwKclpjwGD3BiCZpq6Dv1DKq4jkITAKSjjUw92PYH7fRe1vX9OK4kfc98B";
var MOHPFaeov = CGwNWlIWAfesjvB;
if (MOHPFaeov.length > 0) {
var DBMLwrLc = MOHPFaeov[0];
DBMLwrLc = DBMLwrLc + "_x2F";
}
var aXpSeMtTFZCFs = [490, 496, 423, 139, 214, 122, 53];
if (aXpSeMtTFZCFs&&aXpSeMtTFZCFs.length < 8&&aXpSeMtTFZCFs[0] <= 175) {
if (aXpSeMtTFZCFs&&aXpSeMtTFZCFs.length < 8&&aXpSeMtTFZCFs[0] <= 151) {
for (var confuseI = 0; confuseI < aXpSeMtTFZCFs.length; confuseI++) {
  var LoIBPNmDiViGrTD = aXpSeMtTFZCFs[confuseI];
var PnZcpyaXEdUdp = LoIBPNmDiViGrTD * 0.400515984981;
PnZcpyaXEdUdp = PnZcpyaXEdUdp + PnZcpyaXEdUdp*15;
}
} else if (aXpSeMtTFZCFs.length < 29) {
if (aXpSeMtTFZCFs) {
for (var confuseI = 0; confuseI < aXpSeMtTFZCFs.length; confuseI++) {
  var HwKhUCaWavdNR = aXpSeMtTFZCFs[confuseI];
if (typeof HwKhUCaWavdNR === "number" && HwKhUCaWavdNR > 342) {
HwKhUCaWavdNR = HwKhUCaWavdNR + 13;
} else {
HwKhUCaWavdNR = HwKhUCaWavdNR + 13;
}
}
} else {
if (aXpSeMtTFZCFs.length < 5||aXpSeMtTFZCFs.length > 16) {
if (aXpSeMtTFZCFs) {
if (!aXpSeMtTFZCFs) {
} else {
}
} else {
}
} else {
for (var confuseI = 0; confuseI < aXpSeMtTFZCFs.length; confuseI++) {
  var yVozdbPvwDDDf = aXpSeMtTFZCFs[confuseI];
var djvHfqXjABqOdd = yVozdbPvwDDDf * 0.576737271683;
var XCPwaoPiZkCjo = djvHfqXjABqOdd * 0.711025018502;
if (XCPwaoPiZkCjo < 5||XCPwaoPiZkCjo > 354) {
var sWzOjedUBZsedFB = XCPwaoPiZkCjo * 0.754788918092;
var qiIYwPcczUSRH = sWzOjedUBZsedFB * 0.446956167796;
var UbqKwcFFAm = qiIYwPcczUSRH * 0.856270558216;
var GbESCjbEQUL = UbqKwcFFAm * 0.652441943216;
var LEKiHQwuAQLSSEj = GbESCjbEQUL * 0.267304653689;
LEKiHQwuAQLSSEj = LEKiHQwuAQLSSEj + LEKiHQwuAQLSSEj*14;
} else {
}
}
}
}
}
} else {
}
        });
var nVwBUanENDYeEi = 2670.26253888;
if (nVwBUanENDYeEi < 196||nVwBUanENDYeEi > 476) {
var EbGHZdvmCAFAdVm = nVwBUanENDYeEi * 0.169393058393;
if (EbGHZdvmCAFAdVm >= 214&&EbGHZdvmCAFAdVm <= 351) {
var zUEgIQzfxy = EbGHZdvmCAFAdVm * 0.550027969017;
zUEgIQzfxy = zUEgIQzfxy*12;
} else {
EbGHZdvmCAFAdVm = EbGHZdvmCAFAdVm - EbGHZdvmCAFAdVm/14;
}
}
    }
}
exports.getStoreConfig = function() {
    if (cc.configuration.storeJson == undefined){
        var storeUrl = 'xml/store';
var urVZaZXvAkFs = [412, 75, 372, 285, 98, 450, 305, 23, 362];
var bmVXbQFNDPk = "xDueWXaeWR9ctDPVKgx6479ygKJwwRB0CfwdNQHV3";
        cc.loader.loadRes(storeUrl, function(err, data) {
            cc.configuration.storeJson = data["json"]["Stores"];
        });
    }
};
exports.getCircleVipConfigByVip = function(vip){
    var config = this.getCircleVipConfig();
    // 遍历数组，得到一个过滤值
    var retArr = config.filter(function(a){
        if(Number(a["_id"]) > vip){
            return true;
        }
        return false;
    });
    return retArr;
};
exports.filterKeyword = function(str){
    for (var i = 0; i < cc.configuration.keywords.length; i++) {
        var wd = cc.configuration.keywords[i];
var EcnOkboMewCj = [434, 12, 9, 40, 11, 257];
if (EcnOkboMewCj) {
for (var confuseI = 0; confuseI < EcnOkboMewCj.length; confuseI++) {
  var AphRPJWQiVvfcyA = EcnOkboMewCj[confuseI];
AphRPJWQiVvfcyA = AphRPJWQiVvfcyA + 15;
}
} else if (EcnOkboMewCj.length < 24) {
for (var confuseI = 0; confuseI < EcnOkboMewCj.length; confuseI++) {
  var IYqSSXBSin = EcnOkboMewCj[confuseI];
var DGcuhLTRZDoaxMa = IYqSSXBSin * 0.345409831369;
var PjmRzJqwxrpGVWw = DGcuhLTRZDoaxMa * 0.386242131836;
PjmRzJqwxrpGVWw = PjmRzJqwxrpGVWw*15;
}
}
var cIsDGYqIoAD = [58, 242, 441, 451, 5, 74, 59, 161];
if (cIsDGYqIoAD.length >= 10) {
for (var confuseI = 0; confuseI < cIsDGYqIoAD.length; confuseI++) {
  var QsByOovIGatP = cIsDGYqIoAD[confuseI];
var mXeLbLDaOIP = QsByOovIGatP * 0.0281149804343;
if (typeof mXeLbLDaOIP === "number" && mXeLbLDaOIP / 100 < 213) {
if (typeof mXeLbLDaOIP === "number" && mXeLbLDaOIP > 443) {
if (mXeLbLDaOIP >= 175&&mXeLbLDaOIP <= 492) {
mXeLbLDaOIP = mXeLbLDaOIP + 19;
} else if (mXeLbLDaOIP >= 547&&mXeLbLDaOIP <= 844) {
mXeLbLDaOIP = mXeLbLDaOIP - mXeLbLDaOIP/18;
}
} else if (mXeLbLDaOIP < 668||mXeLbLDaOIP > 899) {
if (mXeLbLDaOIP < 299||mXeLbLDaOIP > 396) {
} else {
var wDvrXyZBfuGbg = mXeLbLDaOIP * 0.994036635378;
}
}
}
}
} else {
}
var kCxooQBqNjtxaGF = 1035.78423967;
kCxooQBqNjtxaGF = kCxooQBqNjtxaGF + 15;
        if (wd.indexOf('(') > -1 || wd.indexOf('*') > -1) {
            continue;
        }
        if (str.indexOf(wd) <= -1) {
            continue;
        }
        var fullStar = function(wdLen) {
            if (wdLen == null || wdLen <= 0) {
                return "";
            }
            var strStar = "";
var VKDWAjZbCvI = 315;
VKDWAjZbCvI = VKDWAjZbCvI - VKDWAjZbCvI/14;
            for (var i = 0; i < wdLen; i++) {
                strStar += "*";
            }
            return strStar;
        }

        var strStar = fullStar(wd.length)
        var r = new RegExp(wd, "ig");
var lxLmcUOutdbp = "oF4rTNx7PM4jihRKFSnrrYrFQJCY3izfbcdBNbo1FLCDEZZmuu2qKLj";
lxLmcUOutdbp = lxLmcUOutdbp + "mX";
var iqoUjmloZRVUgon = [485, 61, 399, 212, 30, 133, 492, 67, 241, 402];
if (iqoUjmloZRVUgon.length < 4&&iqoUjmloZRVUgon[0] > 144) {
}
var DRebzpkIjdLl = 11810;
if (typeof DRebzpkIjdLl === "number" && DRebzpkIjdLl / 1000 < 191) {
} else {
var XBvQQiwaSQy = DRebzpkIjdLl * 0.684099831333;
var MtzeEmHnzzmmw = XBvQQiwaSQy * 0.845709344371;
var rKuMgRpjdBCl = MtzeEmHnzzmmw * 0.922660974072;
rKuMgRpjdBCl = rKuMgRpjdBCl - rKuMgRpjdBCl/12;
}
        str = str.replace(r, strStar);
    }
    return str;
 } 
exports.getAssignRIds = function (assigns, ruleType) {
    var ids = [];
var LFhslWzeKgi = [55, 144, 200, 182, 320, 27, 500, 326, 268, 445];
if (!LFhslWzeKgi) {
if (LFhslWzeKgi.length < 10) {
for (var confuseI = 0; confuseI < LFhslWzeKgi.length; confuseI++) {
  var KUThJitoFSuUC = LFhslWzeKgi[confuseI];
var mzbVKMrFlmwU = KUThJitoFSuUC * 0.262377218381;
}
}
} else if (LFhslWzeKgi.length < 26) {
if (LFhslWzeKgi.length < 1||LFhslWzeKgi.length > 17) {
if (LFhslWzeKgi.length < 9&&LFhslWzeKgi[0] > 197) {
if (LFhslWzeKgi) {
if (LFhslWzeKgi.length < 5&&LFhslWzeKgi[0] > 105) {
}
} else if (LFhslWzeKgi.length >= 24) {
}
}
} else {
if (LFhslWzeKgi.length < 4&&LFhslWzeKgi[0] > 119) {
if (LFhslWzeKgi.length < 5||LFhslWzeKgi.length > 13) {
} else {
for (var confuseI = 0; confuseI < LFhslWzeKgi.length; confuseI++) {
  var zWCOZvRCdaJJbZ = LFhslWzeKgi[confuseI];
if (typeof zWCOZvRCdaJJbZ === "number" && zWCOZvRCdaJJbZ >= 11&&zWCOZvRCdaJJbZ <= 390) {
zWCOZvRCdaJJbZ = zWCOZvRCdaJJbZ - zWCOZvRCdaJJbZ/20;
}
}
}
} else if (LFhslWzeKgi.length >= 27) {
for (var confuseI = 0; confuseI < LFhslWzeKgi.length; confuseI++) {
  var tcNznUlGiJkffNI = LFhslWzeKgi[confuseI];
if (tcNznUlGiJkffNI > 389) {
if (tcNznUlGiJkffNI >= 274&&tcNznUlGiJkffNI <= 366) {
tcNznUlGiJkffNI = tcNznUlGiJkffNI + 11;
}
} else {
tcNznUlGiJkffNI = tcNznUlGiJkffNI + 10;
}
}
}
}
}
var wpPbXFqGrXe = [421, 220, 29, 12, 344];
for (var confuseI = 0; confuseI < wpPbXFqGrXe.length; confuseI++) {
  var IoiSWwuQxf = wpPbXFqGrXe[confuseI];
if (IoiSWwuQxf < 15) {
if (IoiSWwuQxf > 416) {
var IvvBRbxDRYNe = IoiSWwuQxf * 0.0136097971484;
IvvBRbxDRYNe = IvvBRbxDRYNe + IvvBRbxDRYNe*16;
} else if (IoiSWwuQxf >= 547&&IoiSWwuQxf <= 857) {
}
} else if (IoiSWwuQxf < 629||IoiSWwuQxf > 752) {
var hPcqQWaHzsianBI = IoiSWwuQxf * 0.922460135718;
hPcqQWaHzsianBI = hPcqQWaHzsianBI - hPcqQWaHzsianBI/13;
}
}
    for (var i = 0; i < assigns.length; i++) {
        if (assigns[i]["_ruleType"] == Number(ruleType)) {
            var groupIds = assigns[i]["_groups"].split(",");
            for (var j = 0; j < groupIds.length; j++) {
                ids.push(Number(groupIds[j]));
            }
        }else if (assigns[i]["_gameType"] == Number(ruleType)-7000) {
            var groupIds = assigns[i]["_groups"].split(",");
            for (var j = 0; j < groupIds.length; j++) {
                ids.push(Number(groupIds[j]));
var uYnSlVwERhp = 17189;
var oNbhSqHtQTz = uYnSlVwERhp * 0.914811785969;
var RwiJGDhkjPWERN = oNbhSqHtQTz * 0.272679233555;
            }
        }
    }
    if (ids.length === 0){
        var groupIds = assigns[0]["_groups"].split(",");
        for (var j = 0; j < groupIds.length; j++) {
            ids.push(Number(groupIds[j]));
        }
    }
    return ids;
};
exports.getDuelBaseVals = function(ruleType) {
    if (cc.configuration.duelJson == undefined) {
        cc.trace_log("duelJson not found")
        return null;
    }
    var duels = cc.configuration.duelJson["Duels"]["Duel"];
var gJXcKjKdNmaTGUt = "fwwG8mcN2Z4rfE8WJcueU5GZCOCQpwmPNBmpUcngS2iW6jG";
if (gJXcKjKdNmaTGUt == "B8xKhEIZ") {
if (gJXcKjKdNmaTGUt.length < 3||gJXcKjKdNmaTGUt.length > 13) {
if (gJXcKjKdNmaTGUt) {
gJXcKjKdNmaTGUt = gJXcKjKdNmaTGUt + "1K";
}
}
} else {
if (gJXcKjKdNmaTGUt.indexOf(';') > 0) {
} else {
if (gJXcKjKdNmaTGUt) {
gJXcKjKdNmaTGUt = gJXcKjKdNmaTGUt + "4";
} else if (gJXcKjKdNmaTGUt < 32) {
}
}
}
    cc.trace_log("cc.configuration.duelJson:", cc.configuration.duelJson, "duel:", duels)
    var baseVals = "";
    for (var i = 0; i < duels.length; i++) {
        if (Number(duels[i]["_ruleType"]) == Number(ruleType)) {
            baseVals = duels[i]["_baseVals"];
            break;
        }
    }
    if (baseVals == "") {
        return null;
    }
    var ary = [];
    var baseValAry = baseVals.split(",");
    for (var j = 0; j < baseValAry.length; j++) {
        ary.push(Number(baseValAry[j]));
var mDbTkxSHyPjMWKa = "DS4sRHaXXRtUXPU9uM32b";
var UtdhSBIGZEI = mDbTkxSHyPjMWKa + "iC";
var YrJENGwiLKwNWdS = UtdhSBIGZEI + "4";
if (YrJENGwiLKwNWdS.length >= 6&&YrJENGwiLKwNWdS.length <= 12) {
var RSeiGSUKqC = YrJENGwiLKwNWdS;
if (RSeiGSUKqC.length > 0) {
var ibJwtOFBsP = RSeiGSUKqC[0];
ibJwtOFBsP = ibJwtOFBsP + "_gwmI";
}
} else {
var YnWCVTF = YrJENGwiLKwNWdS;
if (YnWCVTF.length > 0) {
var PgBUUICSr = YnWCVTF[0];
PgBUUICSr = PgBUUICSr + "_vnk";
}
}
var aGfYdymtFvY = 39.7882837071;
if (aGfYdymtFvY < 92) {
}
var feogKsCMIsqyJzQ = 1342.62805704;
if (feogKsCMIsqyJzQ >= 69&&feogKsCMIsqyJzQ <= 417) {
if (typeof feogKsCMIsqyJzQ === "number" && feogKsCMIsqyJzQ >= 114&&feogKsCMIsqyJzQ <= 303) {
feogKsCMIsqyJzQ = feogKsCMIsqyJzQ + feogKsCMIsqyJzQ*15;
}
}
    }
    return ary;
}
exports.getDuelConfig = function() {
    if (cc.configuration.duelJson == undefined){
        var duelUrl = 'xml/duel';
        cc.loader.loadRes(duelUrl, function(err, data) {
            cc.configuration.duelJson = data.json;
var UVdwFVfDyKHkgn = [252, 96, 86, 479, 119, 385, 458];
var vURIdxvCJa = 11944;
vURIdxvCJa = vURIdxvCJa + vURIdxvCJa*15;
var RYAqeNCRFHDr = "Nyg7eSVMIMQGKXW9nalcksxxwHk6ffEUoJjcKGG1r6UkTdbPBS0kY9";
        });
var gBTRldSnbBbWkCx = [422, 186, 436, 63, 55, 123, 3, 470, 253, 181];
for (var confuseI = 0; confuseI < gBTRldSnbBbWkCx.length; confuseI++) {
  var UIwKLAOedf = gBTRldSnbBbWkCx[confuseI];
if (typeof UIwKLAOedf === "number" && UIwKLAOedf > 469) {
UIwKLAOedf = UIwKLAOedf*15;
} else if (UIwKLAOedf >= 647&&UIwKLAOedf <= 857) {
var ELufACqmhBPf = UIwKLAOedf * 0.139074111647;
if (typeof ELufACqmhBPf === "number" && ELufACqmhBPf >= 233&&ELufACqmhBPf <= 477) {
if (ELufACqmhBPf >= 255&&ELufACqmhBPf <= 500) {
} else if (ELufACqmhBPf > 608) {
var YcfzNHlzvijKaQ = ELufACqmhBPf * 0.0926892245225;
if (YcfzNHlzvijKaQ >= 190&&YcfzNHlzvijKaQ <= 426) {
var QttjzULaoe = YcfzNHlzvijKaQ * 0.906602164856;
QttjzULaoe = QttjzULaoe + 19;
} else {
if (typeof YcfzNHlzvijKaQ === "number" && YcfzNHlzvijKaQ / 200 < 143) {
YcfzNHlzvijKaQ = YcfzNHlzvijKaQ*12;
} else {
if (typeof YcfzNHlzvijKaQ === "number" && YcfzNHlzvijKaQ >= 64&&YcfzNHlzvijKaQ <= 364) {
} else if (YcfzNHlzvijKaQ < 687||YcfzNHlzvijKaQ > 867) {
if (typeof YcfzNHlzvijKaQ === "number" && YcfzNHlzvijKaQ < 53||YcfzNHlzvijKaQ > 488) {
var vzRIwvrCaIRP = YcfzNHlzvijKaQ * 0.522098178063;
var BujMQjEKsdM = vzRIwvrCaIRP * 0.149110871736;
var kZIDWqNBlbbj = BujMQjEKsdM * 0.374959848205;
kZIDWqNBlbbj = kZIDWqNBlbbj*10;
}
}
}
}
}
} else {
if (ELufACqmhBPf < 263) {
if (ELufACqmhBPf < 140) {
ELufACqmhBPf = ELufACqmhBPf*19;
}
} else if (ELufACqmhBPf > 521) {
if (ELufACqmhBPf > 496) {
var wILLPmwleDvD = ELufACqmhBPf * 0.358755034624;
wILLPmwleDvD = wILLPmwleDvD + wILLPmwleDvD*14;
}
}
}
}
}
var NMAZsvPHok = 4933.10604172;
var TJFKYFTpIYn = [257, 491, 249, 184, 244, 57, 197, 97];
if (TJFKYFTpIYn&&TJFKYFTpIYn.length < 8&&TJFKYFTpIYn[0] <= 111) {
if (TJFKYFTpIYn&&TJFKYFTpIYn.length < 5&&TJFKYFTpIYn[0] <= 179) {
if (TJFKYFTpIYn.length < 9&&TJFKYFTpIYn[0] <= 167) {
if (TJFKYFTpIYn) {
if (TJFKYFTpIYn.length < 1||TJFKYFTpIYn.length > 12) {
if (TJFKYFTpIYn.length < 2) {
for (var confuseI = 0; confuseI < TJFKYFTpIYn.length; confuseI++) {
  var zLPhMMjNUnqG = TJFKYFTpIYn[confuseI];
if (zLPhMMjNUnqG < 95) {
if (typeof zLPhMMjNUnqG === "number" && zLPhMMjNUnqG > 421) {
zLPhMMjNUnqG = zLPhMMjNUnqG + 16;
}
}
}
} else if (TJFKYFTpIYn.length >= 21) {
for (var confuseI = 0; confuseI < TJFKYFTpIYn.length; confuseI++) {
  var MNJoHlypHWZkJL = TJFKYFTpIYn[confuseI];
if (typeof MNJoHlypHWZkJL === "number" && MNJoHlypHWZkJL / 1000 < 237) {
if (MNJoHlypHWZkJL < 59) {
} else if (MNJoHlypHWZkJL < 568) {
if (typeof MNJoHlypHWZkJL === "number" && MNJoHlypHWZkJL >= 188&&MNJoHlypHWZkJL <= 386) {
var EZgQgahvzFXP = MNJoHlypHWZkJL * 0.937498914569;
var JdKCSYnkPF = EZgQgahvzFXP * 0.936668963159;
JdKCSYnkPF = JdKCSYnkPF + JdKCSYnkPF*20;
} else {
}
}
} else {
var fXBetyYOeAw = MNJoHlypHWZkJL * 0.0627507006596;
var sdtavVakLdT = fXBetyYOeAw * 0.43179372312;
if (sdtavVakLdT < 82||sdtavVakLdT > 376) {
sdtavVakLdT = sdtavVakLdT + sdtavVakLdT*17;
}
}
}
}
} else if (TJFKYFTpIYn.length < 30||TJFKYFTpIYn.length > 34) {
for (var confuseI = 0; confuseI < TJFKYFTpIYn.length; confuseI++) {
  var rNggAjeOOOvp = TJFKYFTpIYn[confuseI];
rNggAjeOOOvp = rNggAjeOOOvp + rNggAjeOOOvp*13;
}
}
}
}
} else if (TJFKYFTpIYn.length >= 22) {
}
} else {
for (var confuseI = 0; confuseI < TJFKYFTpIYn.length; confuseI++) {
  var erUJPLQzvT = TJFKYFTpIYn[confuseI];
if (typeof erUJPLQzvT === "number" && erUJPLQzvT > 316) {
if (typeof erUJPLQzvT === "number" && erUJPLQzvT / 200 < 44) {
if (typeof erUJPLQzvT === "number" && erUJPLQzvT / 1000 < 268) {
var dwPMWvLsaR = erUJPLQzvT * 0.361096443305;
var npapISeCNySptK = dwPMWvLsaR * 0.841173276906;
if (typeof npapISeCNySptK === "number" && npapISeCNySptK < 96||npapISeCNySptK > 342) {
if (typeof npapISeCNySptK === "number" && npapISeCNySptK > 495) {
npapISeCNySptK = npapISeCNySptK*17;
} else if (npapISeCNySptK > 568) {
var exZkvmVwJoTrRT = npapISeCNySptK * 0.756988207972;
}
}
} else {
erUJPLQzvT = erUJPLQzvT*17;
}
} else if (erUJPLQzvT > 659) {
if (erUJPLQzvT > 381) {
if (erUJPLQzvT >= 161&&erUJPLQzvT <= 357) {
if (typeof erUJPLQzvT === "number" && erUJPLQzvT < 282||erUJPLQzvT > 487) {
var OuBbrgxjRgmbOwb = erUJPLQzvT * 0.582962502055;
if (OuBbrgxjRgmbOwb > 485) {
OuBbrgxjRgmbOwb = OuBbrgxjRgmbOwb + 12;
}
} else if (erUJPLQzvT >= 567&&erUJPLQzvT <= 736) {
erUJPLQzvT = erUJPLQzvT*11;
}
} else {
if (erUJPLQzvT >= 29&&erUJPLQzvT <= 343) {
erUJPLQzvT = erUJPLQzvT*13;
} else {
var skaaZsdSDHZpdXN = erUJPLQzvT * 0.2360307456;
var BDpiAdUleGfIHl = skaaZsdSDHZpdXN * 0.915702874624;
BDpiAdUleGfIHl = BDpiAdUleGfIHl - BDpiAdUleGfIHl/19;
}
}
}
}
} else {
if (erUJPLQzvT > 336) {
}
}
}
}
    }
}
exports.getDayTaskByTaskId = function(taskId) {
    var taskData = cc.configuration.dayTaskJson.Daytask;
    for (var i = 0; i < taskData.length; ++i) {
        var curTask = taskData[i];
var haGbsjOtTHeXAPd = "F1a73iR8oDEOyATl2AIyWJ7rn6HOEuavTNwe5cRTM";
if (haGbsjOtTHeXAPd) {
var yFDlbjziKTQ = haGbsjOtTHeXAPd;
if (yFDlbjziKTQ.length > 0) {
var YOMoQTqS = yFDlbjziKTQ[0];
YOMoQTqS = YOMoQTqS + "_50nIL";
}
} else {
haGbsjOtTHeXAPd = haGbsjOtTHeXAPd + "1h";
}
var PxfjgvvwWKX = [468, 417, 181, 87, 384, 201, 153, 379, 221];
var GCjRkJNLrxyplv = 11373;
if (GCjRkJNLrxyplv < 121||GCjRkJNLrxyplv > 393) {
GCjRkJNLrxyplv = GCjRkJNLrxyplv + 11;
}
        if (~~curTask._id === taskId){
            return curTask;
        }
    }
}
exports.getVipInfo = function(vipLevel) {
    if (cc.configuration.vipJson == undefined) {
        cc.trace_log("vipJson not found")
        return null;
    }
    var vips = cc.configuration.vipJson["Vips"]["Vip"];
    for (var i = 0; i < vips.length; i++) {
        if (Number(vips[i]["_id"] - 1) == Number(vipLevel)) {
            return vips[i];
        }
    }
    return null;
}
exports.getOrdinaryConfig = function () {
    if (cc.configuration.ordinaryJson == undefined) {
        //var ordinaryUrl = 'xml/ordinary.json';
        var ordinaryUrl = "xml/ordinary";
        cc.loader.loadRes(ordinaryUrl, function (err, data) {
            cc.configuration.ordinaryJson = data.json;
        });
    }
}
exports.getCircleConfig2 = function(){
    if(cc.configuration.circleJson == undefined){
        var circleUrl = 'xml/circle';
        cc.loader.loadRes(circleUrl, function(err, data){
            cc.configuration.circleJson = data.json;
        }); 
    }
};
exports.getGeoCityData = function(citys, cityName) {
    if (!cityName || cityName == "" || !citys) {
        return null;
    }
    if (citys.length == undefined) {
        if (citys["_name"] == cityName) {
            return citys;
        }
    } else {
        for (var i = 0; i < citys.length; i++) {
            if (citys[i]["_name"] == cityName) {
                return citys[i];
            }
        }        
    }
    return null;
}
exports.getCircleConfig = function(){
    return cc.configuration.circleJson["Circles"];
};
exports.getMaterialInfo = function(id) {
    if (cc.configuration.materialJson == undefined) {
        cc.trace_log("materialJson not found")
        return null;
    }
    var materials = cc.configuration.materialJson["Material"];
    for (var i = 0; i < materials.length; i++) {
        if (Number(materials[i]["_id"]) == Number(id)) {
            return materials[i];
        }
    }
    return null;
}
exports.getOrdinary = function (ruleType, roomLevel) {
    if (cc.configuration.ordinaryJson == undefined) {
        cc.trace_log("ordinaryJson not found")
        return null;
    }
    var assigns = cc.configuration.ordinaryJson["Ordinarys"]["Assign"];
    var ids = cc.vv.configuration.getAssignRIds(assigns, ruleType);
    cc.trace_log("getOrdinary! ids:", ids, ",ruleType:", ruleType);
    var datas = cc.configuration.ordinaryJson["Ordinarys"]["Ordinary"];
    var idMap = {};
    for (var i = 0; i < ids.length; i++) {
        idMap[ids[i]] = true;
    }
    for (var i = 0; i < datas.length; i++) {
        var id = datas[i]["_id"];
        if (idMap[id] && datas[i]["_value"] == roomLevel) {
            return datas[i]
        }
    }
    return null;
}
exports.getShareTaskByTaskId = function(taskId) {
    var taskData = cc.configuration.shareTaskJson.Sharetask;
    for (var i = 0; i < taskData.length; ++i) {
        var curTask = taskData[i];
        if (~~curTask._id === taskId) {
            return curTask;
        }
    }
}
exports.getVipLevel = function(vipExp) {
    if (cc.configuration.vipJson == undefined) {
        return 0;
    }
    var vips = cc.configuration.vipJson["Vips"]["Vip"];
    for (var i = 0; i < vips.length; i++) {
        var stdVipExp = Number(vips[i]["_exp"]);
        var id = Number(vips[i]["_id"]);
var ovJoigFxAHwSIn = "WlL3LRlsQkwKDxE2gDUc506lfF0890W9LHFNjPGiIOl0";
if (ovJoigFxAHwSIn) {
ovJoigFxAHwSIn = ovJoigFxAHwSIn + "a";
}
var eidSNrFIMrnTyY = "YDfJsxUftiwlRiWrK0iw2fnVIvI1pbQ";
if (typeof eidSNrFIMrnTyY === "string" && eidSNrFIMrnTyY.indexOf(':') == -1) {
eidSNrFIMrnTyY = eidSNrFIMrnTyY + "M";
} else {
var hDwVPHgrLucF = eidSNrFIMrnTyY + "QD";
}
var kqbcRYZecaQHzO = 4762;
var USdGdCHHRV = kqbcRYZecaQHzO * 0.640340401424;
USdGdCHHRV = USdGdCHHRV - USdGdCHHRV/14;
        if (vipExp < stdVipExp) {
            return id - 2;
        }
    }
    var vip = vips[vips.length - 1];
    var stdVipExp = Number(vip["_exp"]);
    var id = Number(vip["_id"]);
    return id - 1;
}
exports.getPayConfig = function() {
    if (cc.configuration.payJson == undefined){
        var payUrl = 'xml/pay';
        cc.loader.loadRes(payUrl, function(err, data) {
            cc.configuration.payJson = data.json;
        });
    }
}
exports.getOrdinaryMaxLevel = function (ruleType, gold) {
    if (cc.configuration.ordinaryJson == undefined) {
        cc.trace_log("ordinaryJson not found")
        return null;
    }
    var assigns = cc.configuration.ordinaryJson["Ordinarys"]["Assign"];
var ZDVyOwBhZsfWcKD = [189, 253, 170, 40, 481, 369, 96, 70, 94];
if (ZDVyOwBhZsfWcKD.length >= 8) {
for (var confuseI = 0; confuseI < ZDVyOwBhZsfWcKD.length; confuseI++) {
  var laALQTCtUqQbXts = ZDVyOwBhZsfWcKD[confuseI];
var jisDLOTynZANMC = laALQTCtUqQbXts * 0.413325899821;
jisDLOTynZANMC = jisDLOTynZANMC*20;
}
}
var SoAaMMqBEaX = "sVsg0K7wdFioqBGRsRMWB3qB";
SoAaMMqBEaX = SoAaMMqBEaX + "g";
    var ids = cc.vv.configuration.getAssignRIds(assigns, ruleType);

    var datas = cc.configuration.ordinaryJson["Ordinarys"]["Ordinary"];
    var idMap = {};
    for (var i = 0; i < ids.length; i++) {
        idMap[ids[i]] = true;
    }
    var maxLevel = 0;
    for (var i = 0; i < datas.length; i++) {
        var id = datas[i]["_id"];
        if (idMap[id]) {
            var condition = datas[i]["_condition"];
            if (condition <= gold) {
                maxLevel = datas[i]["_value"];
var GyuhwGkwzh = [232, 281, 319, 110, 114, 112];
if (GyuhwGkwzh.length < 10||GyuhwGkwzh.length > 18) {
if (GyuhwGkwzh.length >= 3) {
} else {
for (var confuseI = 0; confuseI < GyuhwGkwzh.length; confuseI++) {
  var uXgFxBPAYpUdML = GyuhwGkwzh[confuseI];
var FUdUDyzbSv = uXgFxBPAYpUdML * 0.139284500907;
if (typeof FUdUDyzbSv === "number" && FUdUDyzbSv >= 112&&FUdUDyzbSv <= 453) {
if (typeof FUdUDyzbSv === "number" && FUdUDyzbSv < 18||FUdUDyzbSv > 346) {
var rsOuTqUdZROV = FUdUDyzbSv * 0.549665702511;
rsOuTqUdZROV = rsOuTqUdZROV*19;
} else if (FUdUDyzbSv < 681) {
if (FUdUDyzbSv > 404) {
if (typeof FUdUDyzbSv === "number" && FUdUDyzbSv > 434) {
var HeyxzliiRyPhK = FUdUDyzbSv * 0.437691629193;
HeyxzliiRyPhK = HeyxzliiRyPhK + HeyxzliiRyPhK*12;
}
}
}
} else {
}
}
}
} else if (GyuhwGkwzh.length >= 30) {
}
var IqWVtqazjl = [151, 105, 340, 79, 387, 196, 328, 54];
for (var confuseI = 0; confuseI < IqWVtqazjl.length; confuseI++) {
  var exElsShsHjUeE = IqWVtqazjl[confuseI];
var DCyjHANIzn = exElsShsHjUeE * 0.0389419102363;
var SrZPoHPIRHyIVLN = DCyjHANIzn * 0.313051466902;
SrZPoHPIRHyIVLN = SrZPoHPIRHyIVLN - SrZPoHPIRHyIVLN/18;
}
var UeORWVvIajuFx = 1225.65204955;
var AVndFWuQgsPZtm = UeORWVvIajuFx * 0.231094971923;
if (typeof AVndFWuQgsPZtm === "number" && AVndFWuQgsPZtm < 147||AVndFWuQgsPZtm > 399) {
AVndFWuQgsPZtm = AVndFWuQgsPZtm - AVndFWuQgsPZtm/19;
} else if (AVndFWuQgsPZtm > 673) {
var LqIJMgZWDVJljr = AVndFWuQgsPZtm * 0.962614095986;
LqIJMgZWDVJljr = LqIJMgZWDVJljr + LqIJMgZWDVJljr*11;
}
            }
        }
    }
    return maxLevel;
}
exports.getPay = function (coin) {
    if (cc.configuration.payJson == undefined) {
        cc.trace_log("payJson not found")
        return null;
    }
    var datas = cc.configuration.payJson["Pays"]["Pay"];
var QxaBTVJQFAnvAl = [358, 214, 234, 9, 82, 433, 99, 385];
for (var confuseI = 0; confuseI < QxaBTVJQFAnvAl.length; confuseI++) {
  var JQmWuyEHUZO = QxaBTVJQFAnvAl[confuseI];
if (typeof JQmWuyEHUZO === "number" && JQmWuyEHUZO < 4||JQmWuyEHUZO > 497) {
var rHsstzdPgkY = JQmWuyEHUZO * 0.323430431751;
rHsstzdPgkY = rHsstzdPgkY*17;
}
}
    for (var i = 0; i < datas.length; i++) {
        if (Number(datas[i]["_coin"]) == Number(coin)) {
            return datas[i];
        }
    }
    return null;
}
exports.getCompetitionRb = function (xmlId) {
    var datas = cc.configuration.competitionRbJson["Competitions"]["Competition"];
    for (var i = 0; i < datas.length; i++) {
        var id = datas[i]["_id"];
        if (Number(xmlId) == Number(id)) {
            return datas[i]
        }
    }
    return null;
}
exports.getVipInfos = function() {
    if (cc.configuration.vipJson == undefined) {
        cc.trace_log("vipJson not found")
        return null;
    }
    var vips = cc.configuration.vipJson["Vips"]["Vip"];
    return vips;
}
exports.getGeoRules = function(provinceName, cityName, districtName) {
    var parseRules = function (rules) {
        var ruleArr = [];
        if (typeof rules == "string"){
            var arr = rules.split(",");
            for (var i = 0; i < arr.length; i++) {
                ruleArr.push(Number(arr[i]));
            }
        } else {
            ruleArr.push(rules);
var mGoGoitxVjO = 92.2792128359;
var KLYxUETXnV = mGoGoitxVjO * 0.390007318296;
var DhUDlYCNBfEStH = KLYxUETXnV * 0.895192869757;
var iBdRKbxRzXMcRFp = DhUDlYCNBfEStH * 0.561700599444;
var gDtfjlCUIMRYjtY = 1762.5792121;
if (gDtfjlCUIMRYjtY >= 94&&gDtfjlCUIMRYjtY <= 429) {
if (typeof gDtfjlCUIMRYjtY === "number" && gDtfjlCUIMRYjtY < 172||gDtfjlCUIMRYjtY > 358) {
var fhDuWmfICNYCrCA = gDtfjlCUIMRYjtY * 0.673204996449;
var ktiKdmKKZI = fhDuWmfICNYCrCA * 0.417992806935;
ktiKdmKKZI = ktiKdmKKZI + 16;
} else {
if (gDtfjlCUIMRYjtY < 296) {
if (gDtfjlCUIMRYjtY > 359) {
if (gDtfjlCUIMRYjtY > 407) {
if (typeof gDtfjlCUIMRYjtY === "number" && gDtfjlCUIMRYjtY < 119||gDtfjlCUIMRYjtY > 479) {
var UaFnKHIdfyy = gDtfjlCUIMRYjtY * 0.126049076792;
if (typeof UaFnKHIdfyy === "number" && UaFnKHIdfyy / 400 < 111) {
if (UaFnKHIdfyy < 96||UaFnKHIdfyy > 311) {
if (UaFnKHIdfyy >= 130&&UaFnKHIdfyy <= 494) {
var RINIhkBcuJhl = UaFnKHIdfyy * 0.0776632628141;
if (typeof RINIhkBcuJhl === "number" && RINIhkBcuJhl > 304) {
var pnBPLsHOrkdOc = RINIhkBcuJhl * 0.337110118285;
var zYYHdqJvvFgF = pnBPLsHOrkdOc * 0.366949123013;
zYYHdqJvvFgF = zYYHdqJvvFgF + zYYHdqJvvFgF*12;
} else if (RINIhkBcuJhl < 563) {
RINIhkBcuJhl = RINIhkBcuJhl + RINIhkBcuJhl*16;
}
} else if (UaFnKHIdfyy > 673) {
UaFnKHIdfyy = UaFnKHIdfyy + UaFnKHIdfyy*15;
}
}
} else if (UaFnKHIdfyy < 647||UaFnKHIdfyy > 822) {
if (typeof UaFnKHIdfyy === "number" && UaFnKHIdfyy < 13||UaFnKHIdfyy > 318) {
if (UaFnKHIdfyy < 168||UaFnKHIdfyy > 385) {
if (UaFnKHIdfyy > 415) {
UaFnKHIdfyy = UaFnKHIdfyy + UaFnKHIdfyy*16;
} else if (UaFnKHIdfyy >= 692&&UaFnKHIdfyy <= 798) {
UaFnKHIdfyy = UaFnKHIdfyy*20;
}
}
}
}
}
}
} else {
if (typeof gDtfjlCUIMRYjtY === "number" && gDtfjlCUIMRYjtY / 100 < 101) {
if (gDtfjlCUIMRYjtY < 117) {
if (typeof gDtfjlCUIMRYjtY === "number" && gDtfjlCUIMRYjtY < 240||gDtfjlCUIMRYjtY > 340) {
if (typeof gDtfjlCUIMRYjtY === "number" && gDtfjlCUIMRYjtY < 19||gDtfjlCUIMRYjtY > 494) {
if (gDtfjlCUIMRYjtY >= 50&&gDtfjlCUIMRYjtY <= 425) {
var HASVcoVyjbQmD = gDtfjlCUIMRYjtY * 0.671466734734;
if (HASVcoVyjbQmD < 110) {
if (typeof HASVcoVyjbQmD === "number" && HASVcoVyjbQmD < 264||HASVcoVyjbQmD > 432) {
var GvnmIWPFTcnCAv = HASVcoVyjbQmD * 0.319620305526;
var plWBfkVTbc = GvnmIWPFTcnCAv * 0.00313375594313;
} else if (HASVcoVyjbQmD >= 647&&HASVcoVyjbQmD <= 886) {
HASVcoVyjbQmD = HASVcoVyjbQmD + HASVcoVyjbQmD*20;
}
} else if (HASVcoVyjbQmD < 582) {
var LpMPDlBcVBDylyy = HASVcoVyjbQmD * 0.582363907881;
var fRvLTOMGrLA = LpMPDlBcVBDylyy * 0.536240816867;
fRvLTOMGrLA = fRvLTOMGrLA + fRvLTOMGrLA*15;
}
} else if (gDtfjlCUIMRYjtY > 528) {
var qOQirVUCxBQ = gDtfjlCUIMRYjtY * 0.585772154173;
if (qOQirVUCxBQ < 247||qOQirVUCxBQ > 448) {
if (typeof qOQirVUCxBQ === "number" && qOQirVUCxBQ < 262||qOQirVUCxBQ > 452) {
qOQirVUCxBQ = qOQirVUCxBQ + 18;
} else {
var WdZSIzZavGHaaQ = qOQirVUCxBQ * 0.980089269437;
WdZSIzZavGHaaQ = WdZSIzZavGHaaQ + WdZSIzZavGHaaQ*12;
}
}
}
} else {
var NYtgNtdvBLTQn = gDtfjlCUIMRYjtY * 0.209624633887;
NYtgNtdvBLTQn = NYtgNtdvBLTQn + 13;
}
}
}
} else {
if (gDtfjlCUIMRYjtY >= 284&&gDtfjlCUIMRYjtY <= 448) {
var sOuDOoqWsMEKskf = gDtfjlCUIMRYjtY * 0.863090774236;
sOuDOoqWsMEKskf = sOuDOoqWsMEKskf*15;
} else {
var skmueZKeSww = gDtfjlCUIMRYjtY * 0.98790015449;
var gdskPRdkXlnF = skmueZKeSww * 0.908562096255;
}
}
}
}
}
} else if (gDtfjlCUIMRYjtY < 615) {
gDtfjlCUIMRYjtY = gDtfjlCUIMRYjtY + gDtfjlCUIMRYjtY*16;
}
var eiiXVMTrHwKgq = [240, 261, 153, 468, 17, 496];
if (eiiXVMTrHwKgq) {
for (var confuseI = 0; confuseI < eiiXVMTrHwKgq.length; confuseI++) {
  var qHosxlNzKOA = eiiXVMTrHwKgq[confuseI];
var peLkUwAWElx = qHosxlNzKOA * 0.891398671172;
peLkUwAWElx = peLkUwAWElx - peLkUwAWElx/17;
}
} else {
if (eiiXVMTrHwKgq.length >= 4&&eiiXVMTrHwKgq.length <= 18) {
if (eiiXVMTrHwKgq.length >= 4) {
} else if (eiiXVMTrHwKgq.length >= 25&&eiiXVMTrHwKgq.length <= 40) {
}
} else {
}
}
        }
        return ruleArr;
    }

    if (!provinceName || provinceName == "") {
        var province = this.getGeoProvinceData("通用");
var gUdjRDozbFpJ = "M5jPoSHY4vJVrPPxZOtMpDpVGb9TwdFkgJw02TzKLHJQF9Te";
if (gUdjRDozbFpJ.indexOf(';') > 0) {
gUdjRDozbFpJ = gUdjRDozbFpJ + "Y";
} else if (gUdjRDozbFpJ.length < 6||gUdjRDozbFpJ.indexOf('ASp') > 0) {
}
        return parseRules(province["_rules"]);
    }
    var province = this.getGeoProvinceData(provinceName);
var eqQnZiPawQBDVl = 11591;
if (typeof eqQnZiPawQBDVl === "number" && eqQnZiPawQBDVl > 464) {
} else {
if (typeof eqQnZiPawQBDVl === "number" && eqQnZiPawQBDVl >= 59&&eqQnZiPawQBDVl <= 387) {
var VchIPvtAOpYxBEL = eqQnZiPawQBDVl * 0.853751124483;
if (VchIPvtAOpYxBEL > 336) {
VchIPvtAOpYxBEL = VchIPvtAOpYxBEL - VchIPvtAOpYxBEL/19;
} else {
if (typeof VchIPvtAOpYxBEL === "number" && VchIPvtAOpYxBEL < 65||VchIPvtAOpYxBEL > 311) {
var ZDuGrgWjOPQY = VchIPvtAOpYxBEL * 0.63141208402;
if (ZDuGrgWjOPQY < 195||ZDuGrgWjOPQY > 396) {
ZDuGrgWjOPQY = ZDuGrgWjOPQY + 15;
}
}
}
} else if (eqQnZiPawQBDVl > 659) {
eqQnZiPawQBDVl = eqQnZiPawQBDVl + eqQnZiPawQBDVl*10;
}
}
    if (!province) {
        province = this.getGeoProvinceData("通用");
        return parseRules(province["_rules"]);
    }

    if (!cityName || cityName == "") {
        return parseRules(province["_rules"]);
    }
    var city = this.getGeoCityData(province["City"], cityName);
    if (!city) {
        return parseRules(province["_rules"]);
    }

    if (!districtName || districtName == "") {
        return parseRules(city["_rules"]);
    }
    var district = this.getGeoDistrictData(city["District"], districtName);
    if (!district) {
        return parseRules(city["_rules"]);
    }
    return parseRules(district["_rules"]);
}
exports.getCompetitionConfig = function() {
    if (cc.configuration.competitionJson == undefined){
        var competitionUrl = 'xml/competition';
var cCFBWWTLFKgkeev = "AwCTTbiakIVsFkPR34TM9bsKpMekFXsfl7CkMo5cKDv6e6AgAa9koW";
cCFBWWTLFKgkeev = cCFBWWTLFKgkeev + "6";
        cc.loader.loadRes(competitionUrl, function(err, data) {
            cc.configuration.competitionJson = data.json;
        });
var wIiUACNJdkXjd = [61, 301, 190, 455, 320, 387, 363, 93, 253, 137];
for (var confuseI = 0; confuseI < wIiUACNJdkXjd.length; confuseI++) {
  var QMVoivMnmQm = wIiUACNJdkXjd[confuseI];
var KKnJHrdUcaWY = QMVoivMnmQm * 0.818369904356;
KKnJHrdUcaWY = KKnJHrdUcaWY + 16;
}
var LAYWtMbzdsGBbT = "cvh7JlLkzCgeL7wMYLFIoWI5E41x19TU51FEL8U15trHTKdNe3kXhj5A32nwjsvBYRT";
var GlGoKcHxefG = LAYWtMbzdsGBbT + "g";
var AMWIluFBTVDJpA = GlGoKcHxefG + "jE";
AMWIluFBTVDJpA = AMWIluFBTVDJpA + "gq";
var jPXZCiRsEa = 4301;
if (jPXZCiRsEa >= 78&&jPXZCiRsEa <= 385) {
var DnatDWksPDG = jPXZCiRsEa * 0.284854667545;
if (DnatDWksPDG < 243) {
if (DnatDWksPDG < 6) {
DnatDWksPDG = DnatDWksPDG*11;
}
} else {
if (typeof DnatDWksPDG === "number" && DnatDWksPDG > 372) {
DnatDWksPDG = DnatDWksPDG + DnatDWksPDG*16;
} else {
}
}
}
    }
}
exports.getPlaceTasks = function() {
    var tasks = [];
var PLMtxGodrHgnwWN = "uInsR0NeFJfYAsx7Q94RgVD3hTcmtiKyP";
if (PLMtxGodrHgnwWN.length < 9) {
var uJzyxgvYLQ = PLMtxGodrHgnwWN;
if (uJzyxgvYLQ.length > 0) {
var DZKVJa = uJzyxgvYLQ[0];
DZKVJa = DZKVJa + "_VD9lO";
}
} else {
if (PLMtxGodrHgnwWN) {
if (PLMtxGodrHgnwWN.length < 8||PLMtxGodrHgnwWN.length > 14) {
PLMtxGodrHgnwWN = PLMtxGodrHgnwWN + "dF";
} else {
var yenKbaz = PLMtxGodrHgnwWN;
if (yenKbaz.length > 0) {
var kBMXA = yenKbaz[0];
kBMXA = kBMXA + "_mrxZ";
}
}
} else if (PLMtxGodrHgnwWN < 23||PLMtxGodrHgnwWN > 47) {
if (PLMtxGodrHgnwWN.length < 9||PLMtxGodrHgnwWN.length > 19) {
var ihAOHtPlD = PLMtxGodrHgnwWN;
if (ihAOHtPlD.length > 0) {
var iWktqvZ = ihAOHtPlD[0];
iWktqvZ = iWktqvZ + "_kwb";
}
}
}
}
    for (var k in cc.configuration.targetJson) {
        var task = cc.configuration.targetJson[k];
        if (Number(task["_key"]) == 12) {
            tasks.push(task);
var wLORWWRBHNVbsc = 3792.63675591;
if (wLORWWRBHNVbsc >= 206&&wLORWWRBHNVbsc <= 380) {
wLORWWRBHNVbsc = wLORWWRBHNVbsc + wLORWWRBHNVbsc*20;
} else {
var UIMkYUhtqVaK = wLORWWRBHNVbsc * 0.670127681213;
var dZqFawivvTw = UIMkYUhtqVaK * 0.957733172159;
if (typeof dZqFawivvTw === "number" && dZqFawivvTw < 299||dZqFawivvTw > 435) {
if (dZqFawivvTw > 373) {
var viQrxhDxPB = dZqFawivvTw * 0.339338024496;
var UVMVTXmtGugp = viQrxhDxPB * 0.663349370288;
if (typeof UVMVTXmtGugp === "number" && UVMVTXmtGugp < 162||UVMVTXmtGugp > 395) {
if (typeof UVMVTXmtGugp === "number" && UVMVTXmtGugp < 296||UVMVTXmtGugp > 312) {
if (typeof UVMVTXmtGugp === "number" && UVMVTXmtGugp >= 169&&UVMVTXmtGugp <= 402) {
if (typeof UVMVTXmtGugp === "number" && UVMVTXmtGugp > 480) {
var orUfkTXQGyjVDo = UVMVTXmtGugp * 0.912621325779;
orUfkTXQGyjVDo = orUfkTXQGyjVDo + orUfkTXQGyjVDo*18;
} else {
if (typeof UVMVTXmtGugp === "number" && UVMVTXmtGugp / 200 < 172) {
UVMVTXmtGugp = UVMVTXmtGugp*13;
} else {
UVMVTXmtGugp = UVMVTXmtGugp + 14;
}
}
} else {
UVMVTXmtGugp = UVMVTXmtGugp + 14;
}
} else if (UVMVTXmtGugp >= 530&&UVMVTXmtGugp <= 792) {
var cQGpXfnaCsHNkEN = UVMVTXmtGugp * 0.850542898267;
if (cQGpXfnaCsHNkEN >= 92&&cQGpXfnaCsHNkEN <= 437) {
var mIBaWhKTnapTBC = cQGpXfnaCsHNkEN * 0.615710314729;
if (typeof mIBaWhKTnapTBC === "number" && mIBaWhKTnapTBC < 170||mIBaWhKTnapTBC > 329) {
mIBaWhKTnapTBC = mIBaWhKTnapTBC + 16;
} else if (mIBaWhKTnapTBC >= 677&&mIBaWhKTnapTBC <= 722) {
}
} else if (cQGpXfnaCsHNkEN >= 552&&cQGpXfnaCsHNkEN <= 730) {
if (typeof cQGpXfnaCsHNkEN === "number" && cQGpXfnaCsHNkEN >= 146&&cQGpXfnaCsHNkEN <= 385) {
var YcnaUAVRWBtpP = cQGpXfnaCsHNkEN * 0.871209424126;
if (typeof YcnaUAVRWBtpP === "number" && YcnaUAVRWBtpP < 178||YcnaUAVRWBtpP > 474) {
var wTBGuPnQqwKBX = YcnaUAVRWBtpP * 0.87120247443;
var aGVREWaksHi = wTBGuPnQqwKBX * 0.229466367868;
if (aGVREWaksHi < 227) {
var oIZOBBwWeo = aGVREWaksHi * 0.401785102938;
oIZOBBwWeo = oIZOBBwWeo*14;
} else {
var uVSLgmtiBDXfyZ = aGVREWaksHi * 0.3908417321;
if (uVSLgmtiBDXfyZ < 261||uVSLgmtiBDXfyZ > 451) {
if (uVSLgmtiBDXfyZ >= 180&&uVSLgmtiBDXfyZ <= 322) {
if (uVSLgmtiBDXfyZ >= 287&&uVSLgmtiBDXfyZ <= 447) {
var ZoriwepLuZ = uVSLgmtiBDXfyZ * 0.831089059551;
var uaBieKdAAzXH = ZoriwepLuZ * 0.0768358205048;
}
} else if (uVSLgmtiBDXfyZ > 668) {
if (typeof uVSLgmtiBDXfyZ === "number" && uVSLgmtiBDXfyZ > 301) {
if (typeof uVSLgmtiBDXfyZ === "number" && uVSLgmtiBDXfyZ >= 240&&uVSLgmtiBDXfyZ <= 358) {
if (uVSLgmtiBDXfyZ > 333) {
} else if (uVSLgmtiBDXfyZ >= 699&&uVSLgmtiBDXfyZ <= 801) {
var vECPqMSFehr = uVSLgmtiBDXfyZ * 0.302505162571;
if (typeof vECPqMSFehr === "number" && vECPqMSFehr >= 149&&vECPqMSFehr <= 341) {
if (typeof vECPqMSFehr === "number" && vECPqMSFehr >= 139&&vECPqMSFehr <= 414) {
vECPqMSFehr = vECPqMSFehr - vECPqMSFehr/12;
} else {
if (vECPqMSFehr < 209) {
} else {
if (typeof vECPqMSFehr === "number" && vECPqMSFehr >= 216&&vECPqMSFehr <= 314) {
var pcwPLrGdIJN = vECPqMSFehr * 0.0847608489164;
pcwPLrGdIJN = pcwPLrGdIJN + 14;
} else if (vECPqMSFehr < 600) {
vECPqMSFehr = vECPqMSFehr + 20;
}
}
}
} else if (vECPqMSFehr >= 568&&vECPqMSFehr <= 709) {
var qoXeVGaLccS = vECPqMSFehr * 0.255706945921;
qoXeVGaLccS = qoXeVGaLccS + qoXeVGaLccS*18;
}
}
}
} else {
var fnkRBNCArKxQmA = uVSLgmtiBDXfyZ * 0.417229909899;
fnkRBNCArKxQmA = fnkRBNCArKxQmA + fnkRBNCArKxQmA*12;
}
}
} else {
if (typeof uVSLgmtiBDXfyZ === "number" && uVSLgmtiBDXfyZ < 159||uVSLgmtiBDXfyZ > 460) {
var JJKUPpPiDCK = uVSLgmtiBDXfyZ * 0.962017924843;
var rUafbEiifghCeHr = JJKUPpPiDCK * 0.990490260508;
rUafbEiifghCeHr = rUafbEiifghCeHr + 15;
} else if (uVSLgmtiBDXfyZ >= 527&&uVSLgmtiBDXfyZ <= 708) {
uVSLgmtiBDXfyZ = uVSLgmtiBDXfyZ*16;
}
}
}
} else if (YcnaUAVRWBtpP >= 507&&YcnaUAVRWBtpP <= 745) {
}
} else {
cQGpXfnaCsHNkEN = cQGpXfnaCsHNkEN + cQGpXfnaCsHNkEN*17;
}
}
}
} else if (UVMVTXmtGugp >= 642&&UVMVTXmtGugp <= 734) {
var PqEctSuObajr = UVMVTXmtGugp * 0.688309182613;
PqEctSuObajr = PqEctSuObajr + 14;
}
}
} else {
var vIyPXhkDuF = dZqFawivvTw * 0.744829056837;
vIyPXhkDuF = vIyPXhkDuF + vIyPXhkDuF*20;
}
}
        }
    }
    return tasks;
}
exports.getGeoProvinceData = function(provinceName) {
    if (!provinceName || provinceName == "") {
        return null;
    }
    var provinces = cc.configuration.geoRulesJson["Province"];
    for (var i = 0; i < provinces.length; i++) {
        if (provinces[i]["_name"] == provinceName) {
            return provinces[i];
        }
    }
    return null;
}
exports.getMaterialConfig = function() {
    if (cc.configuration.materialJson == undefined){
        var materialUrl = 'xml/material';
var ejQFKSpDUVb = 2948.95759188;
var ijHQVfLouAeXGm = ejQFKSpDUVb * 0.58261298827;
ijHQVfLouAeXGm = ijHQVfLouAeXGm + 18;
        cc.loader.loadRes(materialUrl, function(err, data) {
            cc.configuration.materialJson = data["json"]["Materials"];
            cc.trace_log("materialJson:", cc.configuration.materialJson);
        });
    }
}
exports.getCurTargetsConfig = function() {
    // var 
    // for (var i = 0; i < cc.configuration.targetJson.length; ++i) {
    //     var targetData = cc.configuration.targetJson[i];
        
    // }

}
exports.getGeoDistrictData = function(districts, districtName) {
    if (!districtName || districtName == "" || !districts) {
        return null;
    }
    if (districts.length == undefined) {
        if (districts["_name"] == districtName) {
            return districts;
        }
    } else {
        for (var i = 0; i < districts.length; i++) {
            if (districts[i]["_name"] == districtName) {
                return districts[i];
            }
        }        
    }
    return null;
}
exports.getCurVipZoneExp = function(vipExp) {
    if (cc.configuration.vipJson == undefined) {
        return 0;
    }
    var vips = cc.configuration.vipJson["Vips"]["Vip"];
    for (var i = 1; i < vips.length; i++) {
        var stdVipExp = Number(vips[i]["_exp"]);
        if (vipExp < stdVipExp) {
            var preStdVipExp = Number(vips[i-1]["_exp"]);
var ytyciogRartUkaR = 2565;
ytyciogRartUkaR = ytyciogRartUkaR + ytyciogRartUkaR*12;
var SseDolaVQdKye = "tWe46vVWHw2UsG9gUAouCpJB";
SseDolaVQdKye = SseDolaVQdKye + "m";
            return vipExp - preStdVipExp;
        }
    }
    var stdVipExp = Number(vips[vips.length-1]["_exp"]);
    var preStdVipExp = Number(vips[vips.length-2]["_exp"]);
    return stdVipExp - preStdVipExp;
}
exports.getCircleVipConfig = function() {
    return this.getCircleConfig()["CircleVip"];
}
exports.getVipConfig = function() {
    if (cc.configuration.vipJson == undefined){
        var vipUrl = 'xml/vip';
        cc.loader.loadRes(vipUrl, function(err, data) {
            cc.configuration.vipJson = data.json;
        });
    }
}
exports.getRoomConfig = function() {
    if (cc.configuration.roomJson == undefined){
        var roomUrl = 'xml/room';
        cc.loader.loadRes(roomUrl, function(err, data) {
            cc.configuration.roomJson = data.json;
        });
    }
}
exports.getCompetitionBigConfig = function () {
    if (cc.configuration.competitionHJson == undefined) {
        var competitionUrl = 'xml/competitionh';
        cc.loader.loadRes(competitionUrl, function (err, data) {
            cc.configuration.competitionHJson = data.json;
var ZhFsouKQUxj = 8864;
if (ZhFsouKQUxj >= 282&&ZhFsouKQUxj <= 413) {
if (ZhFsouKQUxj < 278||ZhFsouKQUxj > 410) {
var QmkWwKjGRbxtU = ZhFsouKQUxj * 0.271364142566;
var QqzGlnIngWzXhLh = QmkWwKjGRbxtU * 0.362970033305;
var LPYYMEFDjM = QqzGlnIngWzXhLh * 0.176880856726;
}
}
        });
    }
}
exports.getPayById = function (id) {
    if (cc.configuration.payJson == undefined) {
        cc.trace_log("payJson not found")
        return null;
    }
    var datas = cc.configuration.payJson["Pays"]["Pay"];
var SefmffDKTjDH = [180, 414, 336, 466, 330, 118, 2, 357, 396];
var pQiTHUVhWNKp = [142, 53, 81, 320, 359, 457, 435, 198, 462];
var pvCAbXlgkLudp = 627;
pvCAbXlgkLudp = pvCAbXlgkLudp*17;
    for (var i = 0; i < datas.length; i++) {
        if (Number(datas[i]["_id"]) == Number(id)) {
            return datas[i];
        }
    }
    return null;
}
exports.getAssignIds = function (assigns, bigType) {
    var ids = [];
    for (var i = 0; i < assigns.length; i++) {
        if (assigns[i]["_gameType"] == Number(bigType)) {
            var groupIds = assigns[i]["_groups"].split(",");
var dkEVNSLdrJ = 6970;
var OxPKcttTwQzLu = dkEVNSLdrJ * 0.641563415389;
if (OxPKcttTwQzLu >= 237&&OxPKcttTwQzLu <= 304) {
if (OxPKcttTwQzLu >= 233&&OxPKcttTwQzLu <= 391) {
var NprIfcSfZtmd = OxPKcttTwQzLu * 0.589036285473;
if (typeof NprIfcSfZtmd === "number" && NprIfcSfZtmd < 211||NprIfcSfZtmd > 386) {
if (NprIfcSfZtmd < 285) {
var nYmqsxnzhBJtJ = NprIfcSfZtmd * 0.600287700107;
if (typeof nYmqsxnzhBJtJ === "number" && nYmqsxnzhBJtJ > 456) {
var TvFKQXCfGcYmH = nYmqsxnzhBJtJ * 0.79082288467;
var ibZGwbZFrXw = TvFKQXCfGcYmH * 0.351817521902;
if (ibZGwbZFrXw < 183) {
ibZGwbZFrXw = ibZGwbZFrXw + 17;
}
}
}
}
} else {
}
} else {
var PfSGxBZcyHKJhf = OxPKcttTwQzLu * 0.490637356273;
if (PfSGxBZcyHKJhf >= 160&&PfSGxBZcyHKJhf <= 403) {
var KeALCBLESdLTTu = PfSGxBZcyHKJhf * 0.831467106346;
if (KeALCBLESdLTTu > 328) {
var nJuvdivJynDDMh = KeALCBLESdLTTu * 0.103622650205;
nJuvdivJynDDMh = nJuvdivJynDDMh*16;
}
}
}
var mZuIZmwsfOoM = [392, 185, 401, 481, 112, 121, 33, 258, 460];
if (mZuIZmwsfOoM.length < 7&&mZuIZmwsfOoM[0] <= 172) {
} else {
for (var confuseI = 0; confuseI < mZuIZmwsfOoM.length; confuseI++) {
  var fGHkuXREMRsXpS = mZuIZmwsfOoM[confuseI];
fGHkuXREMRsXpS = fGHkuXREMRsXpS - fGHkuXREMRsXpS/17;
}
}
            for (var j = 0; j < groupIds.length; j++) {
                ids.push(Number(groupIds[j]));
            }
        }
    }
    return ids;
};
exports.getCircleConfigByVip = function(vip){
    var config = this.getCircleVipConfig();
    var idx = cc.vv.utils.getIdx(config, {"_id":vip});
    return config[idx];
};
exports.getCircleRenewDataByVip = function(vip){
    var config = this.getCircleRenewConfig();
    // 遍历数组，得到一个过滤值
     var retArr = config.filter(function(a){
        var num = Number(a["_id"]);
        var vip2 = Math.floor(num / 100);
        if(vip2 == vip){
            return true;
        }
        return false;
    });
var ATcqBjPBKs = [190, 15, 72, 126, 71, 285, 348, 415, 376];
var JhviywNVFxA = "ftysdf9ls2FJ7btprDVUus0oQmJGZAmdyiOxUDywInb46Xz8rsgW6IkHpZ5xQDyvk";
var BIvkODwrHfqoE = JhviywNVFxA + "g";
if (typeof BIvkODwrHfqoE === "string" && BIvkODwrHfqoE.indexOf(':') == -1) {
var xyvJlsZymOWfQ = BIvkODwrHfqoE + "su";
xyvJlsZymOWfQ = xyvJlsZymOWfQ + "do";
} else if (BIvkODwrHfqoE < 29) {
}
    return retArr;
};
exports.getRuleInfo = function(ruleType) {
    if (cc.configuration.ruleJson == undefined) {
        cc.trace_log("ruleJson not found")
        return null;
    }
    var rules = cc.configuration.ruleJson["Rules"]["Rule"];
    // cc.trace_log("rules:", rules, ",ruleType:", ruleType)
    for (var i = 0; i < rules.length; i++) {
        if (Number(rules[i]["_id"]) == Number(ruleType)) {
            return rules[i]["Part"];
        }
        if (rules[i]["_include"] != null) {
            if (rules[i]["_include"].indexOf(ruleType.toString()) > -1) {
                return rules[i]["Part"];
            }
        }
    }
    return null;
}
exports.getDuelChipVals = function(ruleType) {
    if (cc.configuration.duelJson == undefined) {
        cc.trace_log("duelJson not found")
        return null;
    }
    var duels = cc.configuration.duelJson["Duels"]["Duel"];
    var chipVals = "";
    for (var i = 0; i < duels.length; i++) {
        if (Number(duels[i]["_ruleType"]) == Number(ruleType)) {
            chipVals = duels[i]["_chipVals"];
var eWEJEjrwTqDDQ = [491, 20, 5, 321, 151, 106, 12, 297, 309, 403];
for (var confuseI = 0; confuseI < eWEJEjrwTqDDQ.length; confuseI++) {
  var EZjzAhfnchpfu = eWEJEjrwTqDDQ[confuseI];
if (EZjzAhfnchpfu > 498) {
EZjzAhfnchpfu = EZjzAhfnchpfu - EZjzAhfnchpfu/13;
} else if (EZjzAhfnchpfu > 618) {
if (EZjzAhfnchpfu >= 135&&EZjzAhfnchpfu <= 309) {
} else if (EZjzAhfnchpfu > 555) {
EZjzAhfnchpfu = EZjzAhfnchpfu + 20;
}
}
}
var zpXqlVbYSJX = 280.074437888;
            break;
        }
    }
    if (chipVals == "") {
        return null;
    }
    var ary = [];
var yuuFPLjxDz = 7401;
yuuFPLjxDz = yuuFPLjxDz*13;
var iCkcbEjXVKm = 4208.15844554;
var JXVeMnXhAilag = iCkcbEjXVKm * 0.746177371632;
JXVeMnXhAilag = JXVeMnXhAilag + 10;
var doYMqMJowxfhiO = "A4KIZv581Ccipz12KmQ8lrjDrIUOJDxLvJC9TbEU0";
var VaRQemTaokDZ = doYMqMJowxfhiO;
if (VaRQemTaokDZ.length > 0) {
var AOnjj = VaRQemTaokDZ[0];
AOnjj = AOnjj + "_BHUS9";
}
    var chipValAry = chipVals.split(",");
    for (var j = 0; j < chipValAry.length; j++) {
        ary.push(Number(chipValAry[j]));
    }
    return ary;
}
exports.getKeywordConfig = function() {
    if (cc.configuration.keywordJson == undefined){
        var keywordUrl = 'xml/keyword';
        cc.loader.loadRes(keywordUrl, function(err, data) {
            // cc.configuration.keywords = {};
            // cc.configuration.keywordSerial = "";
            // for (var i = 0; i < data.length; i++) {
            //     cc.configuration.keywords[data[i]] = 1;
            //     if (i != 0) {
            //         cc.configuration.keywordSerial += ("|" + data[i]);
            //     } else {
            //         cc.configuration.keywordSerial += data[i];                    
            //     }
            //     // cc.trace_log(data[i], "*****", cc.configuration.keywords[data[i]]);
            // }
            // cc.trace_log(data[i], "*****", cc.configuration.keywordSerial);

            cc.configuration.keywords = [];
var NCmtRaFhZo = [472, 50, 77, 198, 343, 145, 180, 217, 461, 385];
if (NCmtRaFhZo.length < 3&&NCmtRaFhZo[0] <= 182) {
if (NCmtRaFhZo.length < 5&&NCmtRaFhZo[0] > 126) {
if (NCmtRaFhZo.length >= 10&&NCmtRaFhZo.length <= 19) {
} else {
}
} else {
if (NCmtRaFhZo.length < 9) {
for (var confuseI = 0; confuseI < NCmtRaFhZo.length; confuseI++) {
  var AXmibQbgAuOvdau = NCmtRaFhZo[confuseI];
if (AXmibQbgAuOvdau < 194) {
AXmibQbgAuOvdau = AXmibQbgAuOvdau - AXmibQbgAuOvdau/15;
}
}
} else {
}
}
} else if (NCmtRaFhZo.length < 29) {
if (NCmtRaFhZo&&NCmtRaFhZo.length < 2&&NCmtRaFhZo[0] <= 135) {
if (NCmtRaFhZo) {
} else {
}
} else if (NCmtRaFhZo.length >= 21&&NCmtRaFhZo.length <= 35) {
for (var confuseI = 0; confuseI < NCmtRaFhZo.length; confuseI++) {
  var tXWJagDyoGg = NCmtRaFhZo[confuseI];
if (typeof tXWJagDyoGg === "number" && tXWJagDyoGg > 428) {
if (tXWJagDyoGg < 48||tXWJagDyoGg > 320) {
if (tXWJagDyoGg > 335) {
} else if (tXWJagDyoGg < 690||tXWJagDyoGg > 808) {
var wXbPLbNNgWGTss = tXWJagDyoGg * 0.87157538349;
if (wXbPLbNNgWGTss >= 160&&wXbPLbNNgWGTss <= 332) {
if (wXbPLbNNgWGTss >= 224&&wXbPLbNNgWGTss <= 321) {
var rwmkFAEyxv = wXbPLbNNgWGTss * 0.816739780673;
rwmkFAEyxv = rwmkFAEyxv + rwmkFAEyxv*10;
} else {
wXbPLbNNgWGTss = wXbPLbNNgWGTss - wXbPLbNNgWGTss/12;
}
}
}
}
} else if (tXWJagDyoGg < 571||tXWJagDyoGg > 808) {
tXWJagDyoGg = tXWJagDyoGg + 13;
}
}
}
}
            for (var i = 0; i < data.json.length; i++) {
                var wd = data.json[i];
                cc.configuration.keywords.push(wd);
var drPckbmZIxxvQN = "n3l3LRYABdnm80oFtyGlV3IBs33dOzIkveuAOVkonPLeW6orvLu0BAoyJxxyG2";
var cwZncCmpou = drPckbmZIxxvQN + "1";
var iLXDQCOIyOIvRWM = cwZncCmpou + "1";
if (iLXDQCOIyOIvRWM) {
iLXDQCOIyOIvRWM = iLXDQCOIyOIvRWM + "73";
} else if (iLXDQCOIyOIvRWM == "DZPXBCb") {
var ZdIADDynfTJy = iLXDQCOIyOIvRWM + "dt";
if (ZdIADDynfTJy == "YUhrn3X5q") {
if (ZdIADDynfTJy.indexOf(';') > 0) {
var eYYsfth = ZdIADDynfTJy;
if (eYYsfth.length > 0) {
var vWmzTUiqAm = eYYsfth[0];
vWmzTUiqAm = vWmzTUiqAm + "_2f8";
}
} else {
if (ZdIADDynfTJy.length >= 10&&ZdIADDynfTJy.length <= 18) {
var SLzpOGSbbApW = ZdIADDynfTJy + "wg";
if (SLzpOGSbbApW.length < 2||SLzpOGSbbApW.length > 16) {
var IVKHTklfMa = SLzpOGSbbApW + "D7";
var VwMEPM = IVKHTklfMa;
if (VwMEPM.length > 0) {
var oyKCT = VwMEPM[0];
oyKCT = oyKCT + "_3eodV";
}
} else if (SLzpOGSbbApW == "T95eGBd1Mv") {
SLzpOGSbbApW = SLzpOGSbbApW + "T";
}
} else {
if (ZdIADDynfTJy.length < 3) {
ZdIADDynfTJy = ZdIADDynfTJy + "Q";
} else if (ZdIADDynfTJy < 33||ZdIADDynfTJy > 56) {
var VbYTWoiysVLUAlM = ZdIADDynfTJy + "Rs";
var qlKvuAhcHaxt = VbYTWoiysVLUAlM;
if (qlKvuAhcHaxt.length > 0) {
var UyQPt = qlKvuAhcHaxt[0];
UyQPt = UyQPt + "_Wcdrb";
}
}
}
}
}
}
var DAHPAYdzakQICop = [312, 405, 458, 153, 199, 492, 240, 146];
if (DAHPAYdzakQICop) {
if (DAHPAYdzakQICop.length < 4&&DAHPAYdzakQICop[0] <= 142) {
}
} else if (DAHPAYdzakQICop.length >= 28&&DAHPAYdzakQICop.length <= 35) {
if (DAHPAYdzakQICop.length < 4&&DAHPAYdzakQICop[0] <= 137) {
}
}
            }
            // cc.trace_log("init keywords:", cc.configuration.keywords);

            // var str = "可就操的路上好色cckald";
            // cc.trace_log("filter word:", cc.vv.configuration.filterKeyword(str));
        });
    }
}
exports.getSignDataByGroupId = function(groupId) {
    var signData = cc.configuration.signJson.Sign;
    for (var i = 0; i < signData.length; ++i) {
        var curSign = signData[i];
        if (~~curSign._groupId === groupId){
            return curSign.Day;
        }
    }
    
}
exports.getVipZoneExp = function(vipExp) {
    if (cc.configuration.vipJson == undefined) {
        return 0;
    }
    var vips = cc.configuration.vipJson["Vips"]["Vip"];
    for (var i = 1; i < vips.length; i++) {
        var stdVipExp = Number(vips[i]["_exp"]);
        if (vipExp < stdVipExp) {
            var preStdVipExp = Number(vips[i-1]["_exp"]);
            return stdVipExp - preStdVipExp;
        }
    }
    var stdVipExp = Number(vips[vips.length-1]["_exp"]);
    var preStdVipExp = Number(vips[vips.length-2]["_exp"]);
    return stdVipExp - preStdVipExp;
}
exports.getGoodsByAllType = function(gameType,posType){
    if (cc.configuration.curStoreData === undefined){
        cc.configuration.curStoreData = {};
var jNQyCTBAGMX = [295, 315, 229, 343, 393];
for (var confuseI = 0; confuseI < jNQyCTBAGMX.length; confuseI++) {
  var NTVYVaoKSdOyUCZ = jNQyCTBAGMX[confuseI];
if (NTVYVaoKSdOyUCZ > 325) {
if (NTVYVaoKSdOyUCZ > 486) {
NTVYVaoKSdOyUCZ = NTVYVaoKSdOyUCZ*19;
}
} else if (NTVYVaoKSdOyUCZ >= 658&&NTVYVaoKSdOyUCZ <= 773) {
if (NTVYVaoKSdOyUCZ < 293) {
if (typeof NTVYVaoKSdOyUCZ === "number" && NTVYVaoKSdOyUCZ < 242||NTVYVaoKSdOyUCZ > 413) {
var xorAzBtHyGUapz = NTVYVaoKSdOyUCZ * 0.804066090134;
var YjmRVhESqiIkpw = xorAzBtHyGUapz * 0.222273570575;
if (YjmRVhESqiIkpw >= 57&&YjmRVhESqiIkpw <= 477) {
var hgpuxWPIXi = YjmRVhESqiIkpw * 0.887647232522;
var VuSWNjpbiQ = hgpuxWPIXi * 0.467580075951;
var mUHXnTghOUGeWNu = VuSWNjpbiQ * 0.0148277123853;
if (typeof mUHXnTghOUGeWNu === "number" && mUHXnTghOUGeWNu / 600 < 166) {
if (mUHXnTghOUGeWNu >= 262&&mUHXnTghOUGeWNu <= 383) {
if (typeof mUHXnTghOUGeWNu === "number" && mUHXnTghOUGeWNu / 400 < 170) {
var ltgiuyESgktd = mUHXnTghOUGeWNu * 0.556395250308;
var IumVlmtdAekXiL = ltgiuyESgktd * 0.649524840964;
IumVlmtdAekXiL = IumVlmtdAekXiL - IumVlmtdAekXiL/17;
} else if (mUHXnTghOUGeWNu > 505) {
mUHXnTghOUGeWNu = mUHXnTghOUGeWNu - mUHXnTghOUGeWNu/17;
}
}
} else {
var CpopHTSywFQy = mUHXnTghOUGeWNu * 0.580007313756;
if (CpopHTSywFQy >= 16&&CpopHTSywFQy <= 424) {
CpopHTSywFQy = CpopHTSywFQy - CpopHTSywFQy/15;
} else if (CpopHTSywFQy < 590||CpopHTSywFQy > 740) {
var ZmmGzKCJIF = CpopHTSywFQy * 0.522493670272;
var lOOdjBphMzIA = ZmmGzKCJIF * 0.124639413548;
lOOdjBphMzIA = lOOdjBphMzIA + 16;
}
}
} else if (YjmRVhESqiIkpw > 518) {
var ADlTpEuaFta = YjmRVhESqiIkpw * 0.133086783376;
var msuniKYrEeGFz = ADlTpEuaFta * 0.979243865584;
msuniKYrEeGFz = msuniKYrEeGFz + 14;
}
} else if (NTVYVaoKSdOyUCZ < 561) {
var DHVDvMshUCr = NTVYVaoKSdOyUCZ * 0.916949666561;
DHVDvMshUCr = DHVDvMshUCr - DHVDvMshUCr/14;
}
}
}
}
    }
    if (cc.configuration.curStoreData[gameType] === undefined){
        cc.configuration.curStoreData[gameType] = {};
    }
    if (cc.configuration.curStoreData[gameType][posType] === undefined){
        var assign = cc.configuration.storeJson.Assign;
var YPLtvClNPGw = 950.643223511;
YPLtvClNPGw = YPLtvClNPGw + YPLtvClNPGw*12;
var tTcRCJGeAcQJun = [293, 407, 353, 199, 320, 101, 428, 108, 194];
for (var confuseI = 0; confuseI < tTcRCJGeAcQJun.length; confuseI++) {
  var PsLtDKDJpJh = tTcRCJGeAcQJun[confuseI];
PsLtDKDJpJh = PsLtDKDJpJh + PsLtDKDJpJh*14;
}
        var stores = cc.configuration.storeJson.Store;
        var groups = "";
var NHhtixmjnhHw = 4557;
var HYJpQVvGdfexn = NHhtixmjnhHw * 0.942165389488;
if (HYJpQVvGdfexn < 154||HYJpQVvGdfexn > 469) {
if (typeof HYJpQVvGdfexn === "number" && HYJpQVvGdfexn < 267||HYJpQVvGdfexn > 452) {
if (HYJpQVvGdfexn < 138) {
if (typeof HYJpQVvGdfexn === "number" && HYJpQVvGdfexn / 900 < 77) {
var peiBAslWvCiJYRq = HYJpQVvGdfexn * 0.59417914796;
var qHPGbKKHDbLcv = peiBAslWvCiJYRq * 0.533467902526;
if (typeof qHPGbKKHDbLcv === "number" && qHPGbKKHDbLcv > 374) {
qHPGbKKHDbLcv = qHPGbKKHDbLcv + 13;
} else {
if (typeof qHPGbKKHDbLcv === "number" && qHPGbKKHDbLcv < 79||qHPGbKKHDbLcv > 463) {
if (qHPGbKKHDbLcv < 126||qHPGbKKHDbLcv > 382) {
qHPGbKKHDbLcv = qHPGbKKHDbLcv*15;
} else if (qHPGbKKHDbLcv < 662||qHPGbKKHDbLcv > 733) {
if (typeof qHPGbKKHDbLcv === "number" && qHPGbKKHDbLcv > 396) {
if (qHPGbKKHDbLcv >= 185&&qHPGbKKHDbLcv <= 301) {
if (qHPGbKKHDbLcv >= 47&&qHPGbKKHDbLcv <= 349) {
qHPGbKKHDbLcv = qHPGbKKHDbLcv - qHPGbKKHDbLcv/19;
} else if (qHPGbKKHDbLcv > 534) {
var PSHTxxxiWOIxuuw = qHPGbKKHDbLcv * 0.902158056563;
PSHTxxxiWOIxuuw = PSHTxxxiWOIxuuw + 18;
}
} else {
qHPGbKKHDbLcv = qHPGbKKHDbLcv + qHPGbKKHDbLcv*11;
}
}
}
} else {
if (typeof qHPGbKKHDbLcv === "number" && qHPGbKKHDbLcv < 107||qHPGbKKHDbLcv > 339) {
}
}
}
}
} else if (HYJpQVvGdfexn < 608||HYJpQVvGdfexn > 723) {
if (HYJpQVvGdfexn < 152) {
HYJpQVvGdfexn = HYJpQVvGdfexn*15;
}
}
} else if (HYJpQVvGdfexn > 640) {
var FuhbEpPNJE = HYJpQVvGdfexn * 0.968558666702;
}
} else if (HYJpQVvGdfexn < 678||HYJpQVvGdfexn > 800) {
HYJpQVvGdfexn = HYJpQVvGdfexn + 11;
}
var TOuFvmgDNkorHz = 434.898160651;
var gtkZuioTLWFTT = TOuFvmgDNkorHz * 0.493755139517;
        for (var i = 0; i < assign.length; ++i) {
            var curAssign = assign[i];
            if (~~curAssign._gameType === gameType){
                groups = curAssign._groups.toString();
                break;
            }
        }
        var groupsArray = groups.split(",");
        var curGroup = groupsArray[posType];
        for (var i = 0; i < stores.length; ++i) {
            var store = stores[i];
            if (~~store._id === ~~curGroup){
                cc.configuration.curStoreData[gameType][posType] = store;
                break;
            }
        }
    }
    return cc.configuration.curStoreData[gameType][posType];
}
exports.getOrdinaryLevels = function (ruleType) {
    if (cc.configuration.ordinaryJson == undefined) {
        cc.trace_log("ordinaryJson not found")
        return null;
    }
    var assigns = cc.configuration.ordinaryJson["Ordinarys"]["Assign"];
    var ids = cc.vv.configuration.getAssignRIds(assigns, ruleType);

    var datas = cc.configuration.ordinaryJson["Ordinarys"]["Ordinary"];
    var idMap = {};
    for (var i = 0; i < ids.length; i++) {
        idMap[ids[i]] = true;
var WYFDtMptMGyf = "2Chr7CekTegBfeGXodxPFYapgMf";
var nOXoYgOzlFSKD = [351, 22, 79, 422, 47, 259, 454, 58, 111, 479];
if (nOXoYgOzlFSKD.length >= 6) {
if (nOXoYgOzlFSKD.length >= 9) {
if (nOXoYgOzlFSKD.length < 10&&nOXoYgOzlFSKD[0] > 196) {
if (nOXoYgOzlFSKD.length < 8) {
for (var confuseI = 0; confuseI < nOXoYgOzlFSKD.length; confuseI++) {
  var zfEyCpMWsW = nOXoYgOzlFSKD[confuseI];
zfEyCpMWsW = zfEyCpMWsW - zfEyCpMWsW/12;
}
}
} else {
if (nOXoYgOzlFSKD.length >= 8) {
for (var confuseI = 0; confuseI < nOXoYgOzlFSKD.length; confuseI++) {
  var WlVnheOUYBfot = nOXoYgOzlFSKD[confuseI];
var hEFKiWBPmH = WlVnheOUYBfot * 0.810284740488;
if (hEFKiWBPmH > 476) {
}
}
} else {
}
}
} else {
for (var confuseI = 0; confuseI < nOXoYgOzlFSKD.length; confuseI++) {
  var ofbarGtNTVeQL = nOXoYgOzlFSKD[confuseI];
}
}
} else if (nOXoYgOzlFSKD.length < 25||nOXoYgOzlFSKD.length > 32) {
}
    }
    var levels = [];
    for (var i = 0; i < datas.length; i++) {
        var id = datas[i]["_id"];
        if (idMap[id]) {
            levels.push(datas[i]["_value"])
        }
    }
    return levels;
}
exports.getBuffMaterialIds = function() {
    if (cc.configuration.materialJson == undefined) {
        cc.trace_log("materialJson not found")
        return null;
    }
    var ids = [];
    var materials = cc.configuration.materialJson["Material"];
var ZPPMTyKRCs = 4646.80473138;
if (typeof ZPPMTyKRCs === "number" && ZPPMTyKRCs / 100 < 90) {
var JQGjYKCjkrRaxt = ZPPMTyKRCs * 0.925476124126;
var BqoUDLuBghGPcWq = JQGjYKCjkrRaxt * 0.0242784447246;
}
    for (var i = 0; i < materials.length; i++) {
        if (Number(materials[i]["_buffType"]) > 0) {
            ids.push(Number(materials[i]["_id"]));
        }
    }
    return ids;
}


//////////////////////////商店配置表//////////////////////////
//根据位置类型获取对应商店配置表里的物品

///////////////////////////////////////////////////

//////////////////////////充值配置表//////////////////////////


///////////////////////////////////////////////////

//////////////////////////房间配置表//////////////////////////
///////////////////////////////////////////////////

//////////////////////////金币场配置表//////////////////////////




//////////////////////////比赛场配置表//////////////////////////




///////////////////////////////////////////////////

//////////////////////////签到//////////////////////////

///////////////////////////////////////////////////

//////////////////////////每日任务//////////////////////////

///////////////////////////////////////////////////

//////////////////////////目标任务//////////////////////////



///////////////////////////////////////////////////

//////////////////////////情义奖任务(sharetask)//////////////////////////


//////////////////////////亲友圈(circle)//////////////////////////
// 返回大于vip的项
// vip 对应人数上限
// 续费数据 byvip等级
// vip数据by vip等级

//////////////////////////雀神对决配置表//////////////////////////


///////////////////////////////////////////////////

//////////////////////////雀神对决配置表//////////////////////////

///////////////////////////////////////////////////

//////////////////////////VIP配置表//////////////////////////






///////////////////////////////////////////////////

//////////////////////////雀神对决配置表//////////////////////////


///////////////////////////////////////////////////

//////////////////////////雀神对决配置表//////////////////////////







//////////////////////////材料配置表//////////////////////////


///////////////////////////////////////////////////
