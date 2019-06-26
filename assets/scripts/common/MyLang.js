// 多语言方法

// 遇到在加新功能
var MyLang = MyLang || {};
cc.MyLang = module.exports = MyLang;

/**
 * 最普通的替换
 * 作为MyLang的方法，有更加好的方法替换。所以该方法舍弃
 * 【舍弃】
 * 使用formatStr代替
 * @param {*} str 
 * @param {*} regExp 
 * @param {*} val 
 */
MyLang.replace = function (str, regExp, val) {
    return cc.MyString.replace(str, regExp, val);
}
MyLang.formatStr = function(str, val1, ...valX){
    // 这样调用，并不能正确使用实参对象
    // return cc.MyString.formatStr(arguments);
    return cc.MyString.formatStr.apply({}, arguments);
};
/**
 * 格式化字符串
 * 参数可变
 * @param {*} str 
 * @param {*} val1 
 * @param {*} valX 
 */
