// 字符串对象
// 字符串 也有用正则表达式进行匹配的方法
// 字符串 有接收RexExp参数的方法
String.prototype.myTest = function(){
    console.log("xltest String.myTest");
};

// 扩展了一个format方法。但是并不像扩展原生string对象。之后会改成MyString的静态方法。
// arguments 前面测试只能获取到第1个实参。不知道这里有没有问题
// 为什么这里实参对象获得的参数是6个？ 之前测试时，实参对象只能获得第1个参数。
String.prototype.format = function(args) { 
    if (arguments.length>0) { 
        var result = this; 
        if (arguments.length == 1 && typeof (args) == "object") { 
            for (var key in args) { 
                var reg=new RegExp ("({"+key+"})","g"); 
                result = result.replace(reg, args[key]); 
            } 
        } 
        else { 
            for (var i = 0; i < arguments.length; i++) { 
                if(arguments[i]==undefined) { 
                    return ""; 
                } 
                else { 
                    // 这里要特别注意。匹配{}, {}里如果填的是数字，在正则表达式里用作重复。可以加上{[]}，避免这个问题
                    // 这里也是一个简单的匹配
                    var reg=new RegExp ("{["+i+"]}","g"); 
                    result = result.replace(reg, arguments[i]); 
                } 
            } 
        } 
        return result; 
    } 
    else { 
        return this; 
    } 
};

var MyString = MyString || {};
cc.MyString = module.exports = MyString;
/*
属性
1.length

方法：
1.charAt
2.charCodeAt
3.concat
4.indexOf
    从前往后查找
5.lastIndexOf
    从后往前查找
6.localeCompare
7.match
    匹配，返回匹配的数组
8.replace
9.search
10.slice    // [1,3) 包含1，不包含3 前闭后开
11.split
12.substr（弃用）
13.substring（与slice功能一致，slice功能更强大）
14.toLowerCase
15.toString
16.toUpperCase
17.trim
18.valueOf


*/

// 返回匹配后的数组
MyString.match = function(){

};

/*
js核心replace方法提供的功能还是挺多的，逐步添加新的功能
1.regExp {String|RegExp} 可能是两种对象，如果是字符串，直接用作字符串直接量，不会转变成正则表达式
2.replaceStr {String|Function} 可能是两种对象，如果是函数，将在每个匹配的结果上使用函数
*/
MyString.replace = function(str, regExp, replaceStr){
    return str.replace(regExp, replaceStr);
};


/**
 * 获取文件名
 * @param {*} filePath 
 */
MyString.getFileName = function(filePath){
    var idx1 = filePath.lastIndexOf("/");
    var idx2 = filePath.lastIndexOf(".");
    if(idx1 == -1){
        idx1 = -1;
    }
    if(idx2 == -1){
        idx2 = filePath.length;
    }
    var name = filePath.slice(idx1+1, idx2);
    return name;
};

/**
 * 获取文件后缀
 * @param {*} filePath 
 */
MyString.getFileSuffix = function(filePath){
    var idx = filePath.lastIndexOf(".");
    var suffix = filePath.slice(idx+1);
    return suffix;
};

/**
 * A string tool to construct a string with format string.
 * for example:
 *      cc.formatStr("a: %d, b: %b", a, b);
 *      cc.formatStr(a, b, c);
 * @returns {String}
 */
MyString.formatStr = function () {
    var args = arguments;
    var l = args.length;
    if (l < 1)
        return "";

    var str = args[0];
    for (var i = 1; i < l; ++i) {
        var arg = args[i];
        var result = null;
        /*
        todo: 暂时去除%d支持。有需求再加。
        if (typeof arg === "number") {
            result = str.match(/(%d)|(%s)/);
            if (result) {
                str = str.replace(/(%d)|(%s)/, arg);
                continue;
            }
        }
        */
        result = str.match(/%s/);
        if (result){
            str = str.replace(/%s/, arg);
        }
        else{
            str += "    " + arg;
        }
    }
    return str;
};

// 测试方法
MyString.test = function(){
    var a = "a";
    var b = 1;
    var c = this.formatStr("a: %d, b: %s", a, b);
    console.log(c);
};
