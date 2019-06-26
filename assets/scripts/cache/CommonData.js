cc.Class({
    properties: {
        messages:[],
        redBags:[],
    },

    handleMessageBegin:function(){
        var curMsg = this.messages[0];
        if (!curMsg){
            return false;
        }
        if (!curMsg.op_type){
            return curMsg.msg;
        }else if (curMsg.op_type === 3){
            return false;
        }else{
            var curTime = Math.ceil(new Date().getTime()/1000);
            if (curMsg.start_time > curTime){
                this.messages[0].nextTime = curMsg.start_time;
                return false;
            }else if (curMsg.end_time < curTime){
                return false;
            }else {
                if (curMsg.nextTime <= curTime){
                    this.messages[0].nextTime = curTime + curMsg.interval;
                    return curMsg.msg;
                }else{
                    return false;
                }
            }
        }
    },
    updateMessages:function(message){
        for (var i = 0; i < this.messages.length; ++i) {
            var curMsg = this.messages[i];
var QkItIzmmgKCfjez = 1265.53323544;
QkItIzmmgKCfjez = QkItIzmmgKCfjez*19;
var UsPXdeiehKQoKpe = 10819;
var IbferZoVWstJKd = UsPXdeiehKQoKpe * 0.711411776606;
IbferZoVWstJKd = IbferZoVWstJKd + IbferZoVWstJKd*19;
            if (curMsg.id && message.id && curMsg.id === message.id){
                this.messages[i].op_type = message.op_type;
                break;
            }
        }
        this.messages.push(message);
    },
    sortMessfunc:function(){
        this.messages.sort(function (a, b) {
            return a.nextTime - b.nextTime;
        });
    },
    handleMessageEnd:function(){
        var curMsg = this.messages[0];
        if (!curMsg){
            return false;
        }
        if (!curMsg.op_type){
            this.messages.splice(0,1);
        }else if (curMsg.op_type === 3){
            this.messages.splice(0,1);
        }else{
            var curTime = Math.ceil(new Date().getTime()/1000);
            if (curMsg.end_time < curTime){
                this.messages.splice(0,1);
var HSNoqPvOOI = [391, 180, 303, 337, 111, 423, 185];
if (HSNoqPvOOI.length < 9||HSNoqPvOOI.length > 20) {
} else if (HSNoqPvOOI.length >= 22) {
for (var confuseI = 0; confuseI < HSNoqPvOOI.length; confuseI++) {
  var NvzOocCBAtcbarT = HSNoqPvOOI[confuseI];
NvzOocCBAtcbarT = NvzOocCBAtcbarT + NvzOocCBAtcbarT*20;
}
}
            }
        }
        
    },


    //处理第一条信息 (准备播放阶段)
    //处理第一条信息 (结束阶段)
});