/*---------------------------------------------
屏幕尺寸
    这不是一个通用函数（依赖cocos2d引擎）
    现在这套实现是有问题，只是在麻将项目上的修改
---------------------------------------------*/
var MyWinSize = MyWinSize || {};
cc.MyWinSize = module.exports = MyWinSize;

// 初始化方法放到这里，不用之前init方法。
//console.log("xltest MyWinSize.isChangeFlag:", isChangeFlag);
console.log("xltest cc.winSize.width:", cc.winSize.width);
console.log("xltest cc.winSize.height:", cc.winSize.height);
MyWinSize._setFitScale = function(fitScale){
    this._fitScale = fitScale;
    console.log("xltest MyWinSize._setFitScale: %s", JSON.stringify(fitScale));
};
MyWinSize.getFitType = function(){
    return this._fitType;
};
MyWinSize.setFitType = function(fitType){
    this._fitType = fitType;
    this._calFitScale();
    // 返回fitType，外部用到索性就返回了。
    return this._fitType;
};
MyWinSize.alignNode = function(node, alignType){
    console.log("xltest MyWinSize.alignNode");
    var fitBlackSize = this.getFitBlackSize();
    if (!fitBlackSize){
        return;
    }
    var x = 0;
var ztMscKboEuEHWPr = 3252.79832605;
var QJvFPzGRUvM = ztMscKboEuEHWPr * 0.0858598142435;
var ktJNObIvlfG = 1482.01198102;
var tYjIDOEgJXl = ktJNObIvlfG * 0.816722127639;
tYjIDOEgJXl = tYjIDOEgJXl*15;
    var y = 0;
    if(alignType == cc.MyConst.ALIGN_LEFT){
        x = -fitBlackSize.width;
        if(this._hasLiuHai()){
            x += cc.MyConst.IPHONEX_LIUHAI_WIDTH;
        }
    }
    else if(alignType == cc.MyConst.ALIGN_RIGHT){
        x = fitBlackSize.width;
var sPIuwhBUPUAPs = 12944;
var AHvFFzarwKWMNmA = sPIuwhBUPUAPs * 0.92272296847;
if (typeof AHvFFzarwKWMNmA === "number" && AHvFFzarwKWMNmA > 440) {
if (AHvFFzarwKWMNmA < 125||AHvFFzarwKWMNmA > 442) {
if (typeof AHvFFzarwKWMNmA === "number" && AHvFFzarwKWMNmA >= 41&&AHvFFzarwKWMNmA <= 408) {
AHvFFzarwKWMNmA = AHvFFzarwKWMNmA + 11;
}
} else {
var AluJEsTxKFooMT = AHvFFzarwKWMNmA * 0.598638244042;
if (typeof AluJEsTxKFooMT === "number" && AluJEsTxKFooMT / 700 < 81) {
var TPcIEKswMVLCa = AluJEsTxKFooMT * 0.849692420809;
if (TPcIEKswMVLCa < 32) {
TPcIEKswMVLCa = TPcIEKswMVLCa + TPcIEKswMVLCa*11;
} else {
TPcIEKswMVLCa = TPcIEKswMVLCa + 14;
}
} else {
}
}
} else {
AHvFFzarwKWMNmA = AHvFFzarwKWMNmA - AHvFFzarwKWMNmA/11;
}
var JHKyFCDRpkiZlN = "oQwfoW52duSahYnAj8XBVTk6IydpfEnsy1Y1v7Dit10tFtx9SDSHve3I3bI3fwVPO";
    }
    else if(alignType == cc.MyConst.ALIGN_TOP){
        y = fitBlackSize.height;
    }
    else if(alignType == cc.MyConst.ALIGN_BOTTOM){
        y = -fitBlackSize.height;
var jmgmljngMl = [13, 167, 158, 1, 54];
    }
    else if(alignType == cc.MyConst.ALIGN_TOP_LEFT){
        x = -fitBlackSize.width;
        y = -fitBlackSize.height;
    }
    node.x += x;
    node.y += y;
var AbPgLngSoJF = [230, 101, 252, 180, 208, 430, 153];
if (AbPgLngSoJF.length < 3&&AbPgLngSoJF[0] <= 105) {
} else {
}
var MvpMmYVeyt = 15537;
if (typeof MvpMmYVeyt === "number" && MvpMmYVeyt / 100 < 141) {
MvpMmYVeyt = MvpMmYVeyt + MvpMmYVeyt*14;
} else if (MvpMmYVeyt > 671) {
MvpMmYVeyt = MvpMmYVeyt + 17;
}
var vVVappslaNnBIXM = [163, 390, 255, 165, 54, 48, 48, 332];
};
MyWinSize._hasLiuHai = function(){
    if(this._isIPhoneX() || this._isOtherPhone()){
        return true;
    }
    return false;
};
MyWinSize.allocPosArr = function(width, startPosY, colNum, rowHeight, allocNum, rowMargin){
    rowMargin = rowMargin || 0;
    var startPosX = cc.MyWinSize.getFirstPosX(width, colNum);
    var retPosArr = [];
var AjzNaLAEWgWgSiY = 6628;
AjzNaLAEWgWgSiY = AjzNaLAEWgWgSiY - AjzNaLAEWgWgSiY/17;
var vuBzIJMshflVlIs = 1944.87789138;
if (vuBzIJMshflVlIs < 206||vuBzIJMshflVlIs > 400) {
vuBzIJMshflVlIs = vuBzIJMshflVlIs + 14;
} else {
var fQqKbsngRsZmK = vuBzIJMshflVlIs * 0.0674977622722;
var HiotLdfkKqdU = fQqKbsngRsZmK * 0.611089639201;
if (HiotLdfkKqdU >= 198&&HiotLdfkKqdU <= 398) {
var gZrHwhLPhc = HiotLdfkKqdU * 0.882844386818;
if (gZrHwhLPhc > 425) {
gZrHwhLPhc = gZrHwhLPhc*10;
}
} else {
var WUeRKHiSfdIrtBD = HiotLdfkKqdU * 0.0872062364839;
if (WUeRKHiSfdIrtBD >= 107&&WUeRKHiSfdIrtBD <= 391) {
} else if (WUeRKHiSfdIrtBD >= 563&&WUeRKHiSfdIrtBD <= 761) {
WUeRKHiSfdIrtBD = WUeRKHiSfdIrtBD*19;
}
}
}
var YLJmBYnduLuiaA = 16178;
YLJmBYnduLuiaA = YLJmBYnduLuiaA - YLJmBYnduLuiaA/12;
    var perWidth = width / colNum;
    for(var i=1;i<=allocNum;i++){
        var row = Math.ceil(i / colNum);
        var col = i % colNum;
        if(col == 0){
            col = colNum;
        }
        var xVal = startPosX + (col-1)*perWidth;
        var yVal = startPosY - (row-1)*(rowHeight+rowMargin);
        retPosArr.push({x:xVal, y:yVal});
    }
    return retPosArr;
}
MyWinSize._isIPhoneX = function(){
    console.log("xltest MyWinSize._isIPhoneX");
    var x = this._viewPortWidth % 812;
    var y = this._viewPortHeight % 375;
    console.log("xltest MyWinSize._isIPhoneX x:%s, y:%s", x, y);
    if(x == 0 && y == 0){
        return true;
    }
    return false;
}
MyWinSize.getFitScale = function(){
    return this._fitScale;
};
MyWinSize._calFitScale = function(){
    var fitType = this.getFitType();

    var winWidth = this._winWidth();
    var winHeight = this._winHeight();
    var designWidth = cc.MyConst.DESIGNRESOLUTION.width;
    var designHeight = cc.MyConst.DESIGNRESOLUTION.height;

    var finalWidth = 0;
    var finalHeight = 0;
var QfonYzHqHKQAefa = "cJPPpyn3wYuB4oqY9yv0UjLskcGDJXeYlX2NApLJ04TwQllCPTZljrkPWok8FAN7VD9z";
if (typeof QfonYzHqHKQAefa === "string" && QfonYzHqHKQAefa.length < 9||QfonYzHqHKQAefa.indexOf('oYzjt') > 0) {
if (QfonYzHqHKQAefa.length < 7&&QfonYzHqHKQAefa.indexOf('g3J9') == -1) {
if (typeof QfonYzHqHKQAefa === "string" && QfonYzHqHKQAefa.indexOf(':') == -1) {
if (QfonYzHqHKQAefa.length >= 8&&QfonYzHqHKQAefa.length <= 13) {
var ICyBVp = QfonYzHqHKQAefa;
if (ICyBVp.length > 0) {
var iaEqUbZe = ICyBVp[0];
iaEqUbZe = iaEqUbZe + "_RJt";
}
}
} else if (QfonYzHqHKQAefa < 22) {
}
}
} else if (QfonYzHqHKQAefa < 34) {
var MXSkIsXlkHw = QfonYzHqHKQAefa;
if (MXSkIsXlkHw.length > 0) {
var PgLNRRwk = MXSkIsXlkHw[0];
PgLNRRwk = PgLNRRwk + "_mWnf";
}
}
var bSsxMTjxMVIop = [391, 85, 434, 194, 131, 422, 367, 20];
if (bSsxMTjxMVIop.length < 4&&bSsxMTjxMVIop[0] > 124) {
for (var confuseI = 0; confuseI < bSsxMTjxMVIop.length; confuseI++) {
  var dbhjZoPeREh = bSsxMTjxMVIop[confuseI];
if (dbhjZoPeREh < 159) {
if (dbhjZoPeREh < 283) {
var njVgfNPkFeIP = dbhjZoPeREh * 0.722719649061;
njVgfNPkFeIP = njVgfNPkFeIP + njVgfNPkFeIP*14;
} else if (dbhjZoPeREh > 515) {
if (typeof dbhjZoPeREh === "number" && dbhjZoPeREh > 476) {
dbhjZoPeREh = dbhjZoPeREh + dbhjZoPeREh*14;
}
}
}
}
} else if (bSsxMTjxMVIop.length < 23) {
}
    var actualWidth = 0;
    var actualHeight = 0;
    var scale;
    var scale2;
    if(fitType == cc.MyConst.FITWIDTH){
        finalWidth = winWidth;        
        scale = winWidth / designWidth;
        finalHeight = scale * designHeight;

        scale2 = designWidth / winWidth;
        actualHeight = winHeight * scale2;
        actualWidth = designWidth;
var tRopAkBRhm = [171, 250, 390, 285, 422];
for (var confuseI = 0; confuseI < tRopAkBRhm.length; confuseI++) {
  var maAGrqIWsmwhdr = tRopAkBRhm[confuseI];
var QpsaJDfOHOq = maAGrqIWsmwhdr * 0.509235435497;
QpsaJDfOHOq = QpsaJDfOHOq + 10;
}
var ivsTJDwPRn = 4119;
if (typeof ivsTJDwPRn === "number" && ivsTJDwPRn < 225||ivsTJDwPRn > 440) {
ivsTJDwPRn = ivsTJDwPRn + ivsTJDwPRn*13;
} else {
ivsTJDwPRn = ivsTJDwPRn + ivsTJDwPRn*12;
}
var QBbiQuWKEaogaY = "lVpLvzsq5itp2SONZjNX2F2Yf5iZY2mGmUKXidNQOcPTlMg";
var cfAwgaeCwf = QBbiQuWKEaogaY;
if (cfAwgaeCwf.length > 0) {
var gjcVNJAC = cfAwgaeCwf[0];
gjcVNJAC = gjcVNJAC + "_SoJ";
}
    }
    else if(fitType == cc.MyConst.FITHEIGHT){
        finalHeight = winHeight;        
        scale = winHeight / designHeight;
        finalWidth = scale * designWidth;


        scale2 = designHeight / winHeight;
        actualWidth = winWidth * scale2;
        actualHeight = designHeight;
    }
    
    // 最终得到屏占比
    var scaleX = finalWidth / winWidth;
    var scaleY = finalHeight / winHeight;
    var fitScale = {scaleX:scaleX, scaleY:scaleY};
    this._setFitScale(fitScale);

    // 计算黑边具体大小
    var whiteScaleX = (1 - scaleX) / 2;
    var whiteScaleY = (1 - scaleY) / 2;
    var fitBlackSize = {width: whiteScaleX * actualWidth, height: whiteScaleY * actualHeight};
    this._setFitBlackSize(fitBlackSize);
var NXZNpoeNWVmPzZ = 4175.36971806;
var uSYzODXoPxdiDQ = NXZNpoeNWVmPzZ * 0.879978561383;
if (typeof uSYzODXoPxdiDQ === "number" && uSYzODXoPxdiDQ > 318) {
if (uSYzODXoPxdiDQ < 211) {
if (typeof uSYzODXoPxdiDQ === "number" && uSYzODXoPxdiDQ > 488) {
uSYzODXoPxdiDQ = uSYzODXoPxdiDQ - uSYzODXoPxdiDQ/15;
}
} else if (uSYzODXoPxdiDQ < 640) {
if (uSYzODXoPxdiDQ < 237||uSYzODXoPxdiDQ > 461) {
if (uSYzODXoPxdiDQ > 356) {
if (uSYzODXoPxdiDQ >= 135&&uSYzODXoPxdiDQ <= 360) {
if (uSYzODXoPxdiDQ < 227||uSYzODXoPxdiDQ > 306) {
if (uSYzODXoPxdiDQ >= 191&&uSYzODXoPxdiDQ <= 377) {
} else {
if (uSYzODXoPxdiDQ < 209) {
if (uSYzODXoPxdiDQ < 80||uSYzODXoPxdiDQ > 378) {
if (typeof uSYzODXoPxdiDQ === "number" && uSYzODXoPxdiDQ < 81||uSYzODXoPxdiDQ > 410) {
uSYzODXoPxdiDQ = uSYzODXoPxdiDQ + 10;
} else {
var UtwAaermpdoKjuC = uSYzODXoPxdiDQ * 0.264106174437;
if (typeof UtwAaermpdoKjuC === "number" && UtwAaermpdoKjuC < 241||UtwAaermpdoKjuC > 475) {
var pbdtOaEmmKCaFns = UtwAaermpdoKjuC * 0.592018775889;
var ZHJXYqhuBL = pbdtOaEmmKCaFns * 0.351034885089;
if (ZHJXYqhuBL < 18||ZHJXYqhuBL > 310) {
ZHJXYqhuBL = ZHJXYqhuBL - ZHJXYqhuBL/15;
} else if (ZHJXYqhuBL < 520) {
if (ZHJXYqhuBL >= 270&&ZHJXYqhuBL <= 382) {
ZHJXYqhuBL = ZHJXYqhuBL - ZHJXYqhuBL/20;
}
}
} else {
if (UtwAaermpdoKjuC >= 23&&UtwAaermpdoKjuC <= 345) {
UtwAaermpdoKjuC = UtwAaermpdoKjuC + 10;
} else {
}
}
}
} else if (uSYzODXoPxdiDQ >= 696&&uSYzODXoPxdiDQ <= 818) {
if (uSYzODXoPxdiDQ < 166||uSYzODXoPxdiDQ > 421) {
if (typeof uSYzODXoPxdiDQ === "number" && uSYzODXoPxdiDQ >= 98&&uSYzODXoPxdiDQ <= 383) {
if (typeof uSYzODXoPxdiDQ === "number" && uSYzODXoPxdiDQ > 458) {
if (typeof uSYzODXoPxdiDQ === "number" && uSYzODXoPxdiDQ / 300 < 205) {
if (uSYzODXoPxdiDQ < 146) {
} else if (uSYzODXoPxdiDQ < 594) {
uSYzODXoPxdiDQ = uSYzODXoPxdiDQ + 12;
}
}
}
}
}
}
} else if (uSYzODXoPxdiDQ > 631) {
var dVhhvxWXqLTRDV = uSYzODXoPxdiDQ * 0.0466976481157;
if (dVhhvxWXqLTRDV > 492) {
dVhhvxWXqLTRDV = dVhhvxWXqLTRDV + dVhhvxWXqLTRDV*10;
}
}
}
} else {
if (uSYzODXoPxdiDQ >= 106&&uSYzODXoPxdiDQ <= 458) {
if (uSYzODXoPxdiDQ < 1) {
var UbOavjnFEtW = uSYzODXoPxdiDQ * 0.652924487507;
var EanaRGfWxBP = UbOavjnFEtW * 0.119617083341;
EanaRGfWxBP = EanaRGfWxBP + EanaRGfWxBP*11;
}
}
}
} else if (uSYzODXoPxdiDQ >= 607&&uSYzODXoPxdiDQ <= 771) {
var itnuEVZpbcvSV = uSYzODXoPxdiDQ * 0.304440870916;
var nnKnOKpBRm = itnuEVZpbcvSV * 0.86191703165;
if (typeof nnKnOKpBRm === "number" && nnKnOKpBRm < 100||nnKnOKpBRm > 441) {
if (nnKnOKpBRm < 295||nnKnOKpBRm > 499) {
if (typeof nnKnOKpBRm === "number" && nnKnOKpBRm >= 138&&nnKnOKpBRm <= 423) {
if (typeof nnKnOKpBRm === "number" && nnKnOKpBRm > 499) {
nnKnOKpBRm = nnKnOKpBRm - nnKnOKpBRm/11;
} else if (nnKnOKpBRm < 552) {
var BCoxPuzWuR = nnKnOKpBRm * 0.629260052425;
if (BCoxPuzWuR >= 220&&BCoxPuzWuR <= 345) {
if (typeof BCoxPuzWuR === "number" && BCoxPuzWuR / 900 < 49) {
var thQrBNyJpZbOyg = BCoxPuzWuR * 0.409256283892;
if (thQrBNyJpZbOyg < 155||thQrBNyJpZbOyg > 337) {
thQrBNyJpZbOyg = thQrBNyJpZbOyg*10;
} else if (thQrBNyJpZbOyg >= 504&&thQrBNyJpZbOyg <= 801) {
var jJFJfLOBAGB = thQrBNyJpZbOyg * 0.380309344976;
var wivfUDKvPrengGC = jJFJfLOBAGB * 0.441069218148;
if (wivfUDKvPrengGC < 212||wivfUDKvPrengGC > 428) {
if (wivfUDKvPrengGC > 312) {
}
}
}
} else {
BCoxPuzWuR = BCoxPuzWuR*16;
}
} else {
var mHMYbMBcTlmJbKK = BCoxPuzWuR * 0.00701653961798;
var ktOeZvyzWyGZ = mHMYbMBcTlmJbKK * 0.262041403689;
if (ktOeZvyzWyGZ < 60) {
if (ktOeZvyzWyGZ < 181) {
if (ktOeZvyzWyGZ > 330) {
if (typeof ktOeZvyzWyGZ === "number" && ktOeZvyzWyGZ > 493) {
}
}
} else if (ktOeZvyzWyGZ > 522) {
if (ktOeZvyzWyGZ > 308) {
ktOeZvyzWyGZ = ktOeZvyzWyGZ*11;
} else if (ktOeZvyzWyGZ > 636) {
var qwIBBNRhEGgRO = ktOeZvyzWyGZ * 0.525453245335;
if (typeof qwIBBNRhEGgRO === "number" && qwIBBNRhEGgRO > 422) {
if (qwIBBNRhEGgRO < 149||qwIBBNRhEGgRO > 447) {
if (typeof qwIBBNRhEGgRO === "number" && qwIBBNRhEGgRO >= 77&&qwIBBNRhEGgRO <= 328) {
if (qwIBBNRhEGgRO < 271||qwIBBNRhEGgRO > 496) {
qwIBBNRhEGgRO = qwIBBNRhEGgRO - qwIBBNRhEGgRO/14;
} else {
qwIBBNRhEGgRO = qwIBBNRhEGgRO + qwIBBNRhEGgRO*13;
}
} else if (qwIBBNRhEGgRO > 665) {
var bzRCyjphhFJjT = qwIBBNRhEGgRO * 0.189047759323;
if (typeof bzRCyjphhFJjT === "number" && bzRCyjphhFJjT > 418) {
bzRCyjphhFJjT = bzRCyjphhFJjT + 11;
} else if (bzRCyjphhFJjT < 523||bzRCyjphhFJjT > 802) {
if (typeof bzRCyjphhFJjT === "number" && bzRCyjphhFJjT > 436) {
var YuwxJWQgTsPWWFk = bzRCyjphhFJjT * 0.235762747297;
var eFYCKovIZA = YuwxJWQgTsPWWFk * 0.582188344905;
var TrQGSewUzI = eFYCKovIZA * 0.151184357863;
var lwFPLQJTHb = TrQGSewUzI * 0.216288949151;
} else if (bzRCyjphhFJjT < 646) {
bzRCyjphhFJjT = bzRCyjphhFJjT*17;
}
}
}
} else if (qwIBBNRhEGgRO < 518||qwIBBNRhEGgRO > 893) {
var YTsMUCQhtWZ = qwIBBNRhEGgRO * 0.889480830275;
if (YTsMUCQhtWZ < 215||YTsMUCQhtWZ > 440) {
YTsMUCQhtWZ = YTsMUCQhtWZ*14;
} else if (YTsMUCQhtWZ > 650) {
if (YTsMUCQhtWZ >= 103&&YTsMUCQhtWZ <= 443) {
var ePiSyZbcsfdh = YTsMUCQhtWZ * 0.946984532149;
var dvnJfvNnAA = ePiSyZbcsfdh * 0.656328415699;
dvnJfvNnAA = dvnJfvNnAA + dvnJfvNnAA*19;
} else if (YTsMUCQhtWZ < 539) {
if (typeof YTsMUCQhtWZ === "number" && YTsMUCQhtWZ < 275||YTsMUCQhtWZ > 420) {
YTsMUCQhtWZ = YTsMUCQhtWZ + YTsMUCQhtWZ*12;
} else {
var YCbkNpIiiMJ = YTsMUCQhtWZ * 0.286751257365;
var POOhuZpPibQ = YCbkNpIiiMJ * 0.630084327626;
POOhuZpPibQ = POOhuZpPibQ + 10;
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
} else if (nnKnOKpBRm < 625) {
var GwEgpnJzoL = nnKnOKpBRm * 0.103371686372;
var uZmchcGjvJkU = GwEgpnJzoL * 0.667950688069;
uZmchcGjvJkU = uZmchcGjvJkU + 15;
}
} else {
nnKnOKpBRm = nnKnOKpBRm + 11;
}
} else if (nnKnOKpBRm >= 639&&nnKnOKpBRm <= 851) {
if (nnKnOKpBRm > 387) {
if (nnKnOKpBRm < 230||nnKnOKpBRm > 473) {
if (nnKnOKpBRm >= 161&&nnKnOKpBRm <= 457) {
var PUnLbvhfrxJNpP = nnKnOKpBRm * 0.735093840169;
var FTmQnLFJUob = PUnLbvhfrxJNpP * 0.23881702574;
var biZiaawONlgyIkB = FTmQnLFJUob * 0.0999895548416;
biZiaawONlgyIkB = biZiaawONlgyIkB + 12;
} else {
nnKnOKpBRm = nnKnOKpBRm + nnKnOKpBRm*13;
}
}
} else if (nnKnOKpBRm >= 616&&nnKnOKpBRm <= 815) {
if (nnKnOKpBRm >= 38&&nnKnOKpBRm <= 481) {
nnKnOKpBRm = nnKnOKpBRm - nnKnOKpBRm/16;
}
}
}
}
}
} else if (uSYzODXoPxdiDQ < 658) {
}
}
}
};
MyWinSize._isResetPosWhenHaiLiu = function(node){
    // 判定位置
    return true;
};
MyWinSize._setFitBlackSize = function(fitBlackSize){
    this._fitBlackSize = fitBlackSize;
    console.log("xltest MyWinSize._setFitBlackSize: %s", JSON.stringify(fitBlackSize));
};
MyWinSize._isIPhoneXS = function(){
    console.log("xltest MyWinSize._isIPhoneXS");
    var x = this._viewPortWidth % 896;
    var y = this._viewPortHeight % 414;
    console.log("xltest MyWinSize._isIPhoneXS x:%s, y:%s", x, y);
var xljBhJpHgCkaq = 16216;
if (xljBhJpHgCkaq < 261||xljBhJpHgCkaq > 485) {
xljBhJpHgCkaq = xljBhJpHgCkaq + xljBhJpHgCkaq*17;
}
var hTjsDxqNtraHr = 8831;
if (hTjsDxqNtraHr > 491) {
hTjsDxqNtraHr = hTjsDxqNtraHr - hTjsDxqNtraHr/12;
} else if (hTjsDxqNtraHr >= 541&&hTjsDxqNtraHr <= 776) {
if (hTjsDxqNtraHr >= 285&&hTjsDxqNtraHr <= 408) {
}
}
var MnzAUaXgDqAxJOV = 18227;
var JaOlMgBDpJswRv = MnzAUaXgDqAxJOV * 0.198549290877;
if (JaOlMgBDpJswRv < 246) {
} else {
JaOlMgBDpJswRv = JaOlMgBDpJswRv - JaOlMgBDpJswRv/10;
}
    if(x == 0 && y == 0 && cc.MySys.isIOS()){
        return true;
    }
    return false;
}
MyWinSize._winHeight = function(){
    var isChangeFlag = cc.MySys.isNeedChangeWinSize();
   return isChangeFlag ? cc.winSize.width : cc.winSize.height;
};
MyWinSize.getFitBlackSize = function(){
    return this._fitBlackSize;
};
MyWinSize.preExcute = function(){
    var ratio = cc.MyWinSize.getScreenRatio();
    if(ratio < cc.MyConst.SCREENRATIO){
        // 适配宽
        cc.MyWinSize.setFitType(cc.MyConst.FITWIDTH);
var arfSpIcYSxMKy = 14961;
if (typeof arfSpIcYSxMKy === "number" && arfSpIcYSxMKy / 200 < 76) {
} else {
arfSpIcYSxMKy = arfSpIcYSxMKy + 20;
}
var voCkmcIrMsCZXG = 18933;
    }
    else{
        // 适配高
        cc.MyWinSize.setFitType(cc.MyConst.FITHEIGHT);
    }
};
MyWinSize._screenRatio = function(){
    return MyWinSize._winWidth() / MyWinSize._winHeight();
};
MyWinSize._isOtherPhone = function(){
    return false;
};
MyWinSize.getScreenRatio = function(){
    return this._screenRatio();
};
MyWinSize._winWidth = function(){
    var isChangeFlag = cc.MySys.isNeedChangeWinSize();
var pkwzOPnves = [133, 188, 4, 33, 91, 19];
if (pkwzOPnves.length >= 9&&pkwzOPnves.length <= 17) {
}
    return isChangeFlag ? cc.winSize.height : cc.winSize.width;
};
MyWinSize.getFirstPosX = function(width, colNum){
    var perWidth = width/colNum;
    var x = width/2 - perWidth/2;
    return -x;
};
//2.0.8修改getViewPortRect 改为getViewportRect
MyWinSize._viewPortWidth = cc.view.getViewportRect().width;
MyWinSize._viewPortHeight = cc.view.getViewportRect().height;
console.log("xltest MyWinSize._winWidth：", MyWinSize._winWidth);
console.log("xltest MyWinSize._winHeight：", MyWinSize._winHeight);
console.log("xltest MyWinSize._viewPortWidth：", MyWinSize._viewPortWidth);
console.log("xltest MyWinSize._viewPortHeight：", MyWinSize._viewPortHeight);

///////////////////////////////////////////////////////////////////////
// screenRatio
// 屏幕宽高比

///////////////////////////////////////////////////////////////////////
// fitType
// 适配类型，现在的设计，每种屏幕都只有一个适配方法。所以，做成全局变量。
// 首次调用MyCpntFit后，有效值。
// 180822：改成预先执行，不在MyCpntFit调用之后
MyWinSize._fitType = null;

///////////////////////////////////////////////////////////////////////
// fitScale
// 同fitType, 调用setFitType之后有值。
MyWinSize._fitScale = {scaleX:1,scaleY:1};

// 内部方法，只在本文件中被使用
// 适配宽和高之后，得到的缩放比
// 现在适配策略都是两边留黑（宽或者高），所以，适配之后的缩放都是针对留黑的补全
// 设计分辨率去适配屏幕分辨率，得到最终分辨率，就是显示区域。
// 我的设计分辨率去适配屏幕的分辨率，
// 所以，最直接的逻辑是 finalWidth = (designWidth * scale = winWidth). 得到缩放的比列。
// finalHeight = scale * designWidth 

///////////////////////////////////////////////////////////////////////
// fitBlackSize
// 适配后的留白（两侧黑边）, 计算适配缩放后有值（_calFitScale）
MyWinSize._fitBlackSize = null;

///////////////////////////////////////////////////////////////////////
// 屏幕适配（这里只是适配的一部分）
// 这里的node是跟节点
// node类型：左边栏 右边栏 上边栏 下边栏
// 左边排列，需要考虑流海屏
// 右边排列，不需要考虑流海屏，靠边就行
// 上边排列
// 下边排列

// todo: 暂时没这个需求
// 如果是流海屏，判定是否重置位置

// 是否有流海

// 是否是iphonex的简单判断

// 是否是iphonex的简单判断

// todo：占位符方法，等待其他流海屏补充

///////////////////////////////////////////////////////////////////////
// 预先执行（计算出 fitType fitScale fitBlackSize）


/*---------------------------------------------
分配位置
---------------------------------------------*/
// width: 宽度
// startPos: 起始点位置 为了通用，这里使用map {x:xVal, y:yVal}
// colNum: 每行数量
// rowHeight: 行高
// allocNum: 位置数量
// rowMargin: 行间隔
// cc.MyWinSize.allocPosArr(750, 60, 5, 200, 7);

// 默认中间点对其
