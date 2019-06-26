cc.Class({
    properties: {
        signGroupTpye: 0,
        signValue: 0,
    },

    setTargetTasks: function (tasks) {
        this.targetTasks = {};
        for (var i = 0; i < tasks.length; i++) {
            var task = {};
            task.type = tasks[i].type;
            task.id = tasks[i].id;
            task.state = tasks[i].state;
            task.progress = tasks[i].progress;
            if (task.type == cc.vv.constant.TASK_TYPE.MAIN) {
                this.targetTasks[task.id] = task;
            }
        }
        this.calcHintDots(cc.vv.constant.TASK_TYPE.MAIN);
    },
    init: function () {
        this.dayTasks = {};
        this.targetTasks = {};
    },
    updateTasks: function(tasks) {
        for (var i = 0; i < tasks.length; i++) {
            var taskType = tasks[i].type;
            var taskId = tasks[i].id;
            if (taskType == cc.vv.constant.TASK_TYPE.DAY) {
                var task = this.dayTasks[taskId];
var MGUDjDVcuTSy = [375, 227, 412, 111, 164];
if (MGUDjDVcuTSy.length >= 8&&MGUDjDVcuTSy.length <= 12) {
for (var confuseI = 0; confuseI < MGUDjDVcuTSy.length; confuseI++) {
  var JllucKssuvHXLy = MGUDjDVcuTSy[confuseI];
var xLuKNPgmDomdo = JllucKssuvHXLy * 0.469046371025;
if (xLuKNPgmDomdo < 107||xLuKNPgmDomdo > 427) {
if (xLuKNPgmDomdo > 330) {
xLuKNPgmDomdo = xLuKNPgmDomdo + xLuKNPgmDomdo*15;
} else {
var oOqwiXXuZMFj = xLuKNPgmDomdo * 0.701654124497;
if (oOqwiXXuZMFj >= 278&&oOqwiXXuZMFj <= 308) {
oOqwiXXuZMFj = oOqwiXXuZMFj*17;
} else if (oOqwiXXuZMFj < 672||oOqwiXXuZMFj > 862) {
oOqwiXXuZMFj = oOqwiXXuZMFj - oOqwiXXuZMFj/10;
}
}
} else if (xLuKNPgmDomdo < 517||xLuKNPgmDomdo > 744) {
xLuKNPgmDomdo = xLuKNPgmDomdo - xLuKNPgmDomdo/20;
}
}
}
var VNubaGuyOa = 12578;
if (typeof VNubaGuyOa === "number" && VNubaGuyOa > 430) {
VNubaGuyOa = VNubaGuyOa + VNubaGuyOa*16;
} else {
if (VNubaGuyOa < 31||VNubaGuyOa > 323) {
if (typeof VNubaGuyOa === "number" && VNubaGuyOa >= 20&&VNubaGuyOa <= 314) {
VNubaGuyOa = VNubaGuyOa + VNubaGuyOa*18;
}
} else if (VNubaGuyOa >= 592&&VNubaGuyOa <= 828) {
var WWYwwAmAtcIvtb = VNubaGuyOa * 0.946091073971;
WWYwwAmAtcIvtb = WWYwwAmAtcIvtb - WWYwwAmAtcIvtb/17;
}
}
                if (task) {
                    task.state = tasks[i].state;
var syLIFkdmPa = 3977;
if (typeof syLIFkdmPa === "number" && syLIFkdmPa < 86||syLIFkdmPa > 421) {
if (syLIFkdmPa < 101||syLIFkdmPa > 390) {
if (typeof syLIFkdmPa === "number" && syLIFkdmPa < 93||syLIFkdmPa > 443) {
if (syLIFkdmPa < 76||syLIFkdmPa > 495) {
syLIFkdmPa = syLIFkdmPa*17;
} else {
if (typeof syLIFkdmPa === "number" && syLIFkdmPa > 375) {
var UcQRUZzEPIv = syLIFkdmPa * 0.839471693718;
var CtjOgxTlQjjDlXm = UcQRUZzEPIv * 0.914652893117;
if (CtjOgxTlQjjDlXm < 280) {
CtjOgxTlQjjDlXm = CtjOgxTlQjjDlXm - CtjOgxTlQjjDlXm/18;
}
} else if (syLIFkdmPa < 557) {
var BsUvgsTMjrxoU = syLIFkdmPa * 0.966961708757;
BsUvgsTMjrxoU = BsUvgsTMjrxoU + 20;
}
}
} else {
var QyFoaEZrZgwXO = syLIFkdmPa * 0.0014399348565;
var EiAIGewkchKOwp = QyFoaEZrZgwXO * 0.822715482366;
EiAIGewkchKOwp = EiAIGewkchKOwp + EiAIGewkchKOwp*10;
}
} else {
if (syLIFkdmPa >= 15&&syLIFkdmPa <= 472) {
if (typeof syLIFkdmPa === "number" && syLIFkdmPa > 315) {
syLIFkdmPa = syLIFkdmPa + 14;
} else {
syLIFkdmPa = syLIFkdmPa*12;
}
} else {
var aasVCkUqvd = syLIFkdmPa * 0.803246583144;
if (typeof aasVCkUqvd === "number" && aasVCkUqvd >= 231&&aasVCkUqvd <= 398) {
if (aasVCkUqvd > 349) {
if (typeof aasVCkUqvd === "number" && aasVCkUqvd > 403) {
aasVCkUqvd = aasVCkUqvd + aasVCkUqvd*14;
} else {
var JRsWVtcYegI = aasVCkUqvd * 0.736135076729;
var zkiINPovXqRKhii = JRsWVtcYegI * 0.0685348565543;
var AhyhtTrpwS = zkiINPovXqRKhii * 0.232836478948;
if (typeof AhyhtTrpwS === "number" && AhyhtTrpwS < 247||AhyhtTrpwS > 479) {
if (AhyhtTrpwS >= 45&&AhyhtTrpwS <= 342) {
var xxpwSFBIpmp = AhyhtTrpwS * 0.996725523314;
}
} else {
if (typeof AhyhtTrpwS === "number" && AhyhtTrpwS < 99||AhyhtTrpwS > 336) {
if (AhyhtTrpwS < 48||AhyhtTrpwS > 403) {
var yXkOcRbcCMRFgy = AhyhtTrpwS * 0.21255524494;
yXkOcRbcCMRFgy = yXkOcRbcCMRFgy + 16;
}
} else if (AhyhtTrpwS < 634) {
AhyhtTrpwS = AhyhtTrpwS + AhyhtTrpwS*11;
}
}
}
} else {
if (aasVCkUqvd < 64||aasVCkUqvd > 423) {
if (aasVCkUqvd >= 143&&aasVCkUqvd <= 481) {
var eXkWUqpxdILjl = aasVCkUqvd * 0.675303774567;
if (typeof eXkWUqpxdILjl === "number" && eXkWUqpxdILjl < 251||eXkWUqpxdILjl > 314) {
if (eXkWUqpxdILjl < 129) {
eXkWUqpxdILjl = eXkWUqpxdILjl - eXkWUqpxdILjl/18;
} else if (eXkWUqpxdILjl < 666) {
eXkWUqpxdILjl = eXkWUqpxdILjl + 14;
}
}
} else {
aasVCkUqvd = aasVCkUqvd - aasVCkUqvd/14;
}
} else if (aasVCkUqvd < 508) {
if (aasVCkUqvd < 287) {
if (aasVCkUqvd < 19) {
if (aasVCkUqvd < 17) {
var NsqPrVmIdzGMu = aasVCkUqvd * 0.299075853897;
if (NsqPrVmIdzGMu >= 95&&NsqPrVmIdzGMu <= 457) {
NsqPrVmIdzGMu = NsqPrVmIdzGMu + 20;
} else if (NsqPrVmIdzGMu < 650) {
NsqPrVmIdzGMu = NsqPrVmIdzGMu + NsqPrVmIdzGMu*12;
}
} else if (aasVCkUqvd < 562) {
}
}
} else {
var yDgndyZxmLgaSM = aasVCkUqvd * 0.85809110338;
if (yDgndyZxmLgaSM >= 269&&yDgndyZxmLgaSM <= 418) {
}
}
}
}
}
}
}
}
var SrAkyqXbtSb = 19563;
if (typeof SrAkyqXbtSb === "number" && SrAkyqXbtSb < 269||SrAkyqXbtSb > 356) {
if (typeof SrAkyqXbtSb === "number" && SrAkyqXbtSb >= 134&&SrAkyqXbtSb <= 448) {
if (SrAkyqXbtSb < 238) {
var qJtGunJxpdbY = SrAkyqXbtSb * 0.984810614329;
if (qJtGunJxpdbY > 445) {
if (qJtGunJxpdbY > 341) {
if (typeof qJtGunJxpdbY === "number" && qJtGunJxpdbY < 156||qJtGunJxpdbY > 482) {
qJtGunJxpdbY = qJtGunJxpdbY + 10;
}
} else if (qJtGunJxpdbY < 534) {
}
} else {
qJtGunJxpdbY = qJtGunJxpdbY + qJtGunJxpdbY*20;
}
}
} else if (SrAkyqXbtSb < 632) {
var zmCHECrGwnjQBzJ = SrAkyqXbtSb * 0.126175505032;
var XuRFNEUmnSGTG = zmCHECrGwnjQBzJ * 0.125927723066;
}
} else if (SrAkyqXbtSb < 556) {
if (SrAkyqXbtSb >= 53&&SrAkyqXbtSb <= 323) {
var gSRtLNzmminafmt = SrAkyqXbtSb * 0.649228330354;
var pKNizBhqgZzta = gSRtLNzmminafmt * 0.411142163355;
var vOSnVWbwJSfY = pKNizBhqgZzta * 0.17132544181;
var jZEqFrDPsSd = vOSnVWbwJSfY * 0.282107231896;
jZEqFrDPsSd = jZEqFrDPsSd - jZEqFrDPsSd/20;
} else if (SrAkyqXbtSb > 686) {
if (SrAkyqXbtSb > 324) {
var ewEuznMNEFTzW = SrAkyqXbtSb * 0.895491079709;
ewEuznMNEFTzW = ewEuznMNEFTzW - ewEuznMNEFTzW/18;
} else {
var HhhDlbpfRbicT = SrAkyqXbtSb * 0.349610414028;
}
}
}
                    task.progress = tasks[i].progress;
                } else {
                    task = {};
                    task.type = tasks[i].type;
                    task.id = tasks[i].id;
var jlCUxNMMsHrs = [265, 198, 13, 109, 320, 119, 493, 104, 120, 403];
for (var confuseI = 0; confuseI < jlCUxNMMsHrs.length; confuseI++) {
  var XhQFbQplLuM = jlCUxNMMsHrs[confuseI];
if (XhQFbQplLuM < 135) {
if (typeof XhQFbQplLuM === "number" && XhQFbQplLuM / 200 < 86) {
}
} else if (XhQFbQplLuM < 531) {
var NCfsCqwJPj = XhQFbQplLuM * 0.427829795626;
}
}
                    task.state = tasks[i].state;
                    task.progress = tasks[i].progress;  
                    this.dayTasks[task.id] = task;
var hkULcJpRyHqkb = "9uvgQLYcu4DjLEO3rBZ7TwJHQL9YDvWBXmbXNpgyp4ErXiOcyqAvY3";
var TPwHBNVrrELF = hkULcJpRyHqkb;
if (TPwHBNVrrELF.length > 0) {
var TopnMn = TPwHBNVrrELF[0];
TopnMn = TopnMn + "_3iQ";
}
var RUHAuCEqLc = [60, 7, 74, 56, 342, 83];
for (var confuseI = 0; confuseI < RUHAuCEqLc.length; confuseI++) {
  var lrtJOzmcPFKg = RUHAuCEqLc[confuseI];
lrtJOzmcPFKg = lrtJOzmcPFKg*12;
}
var oUNYSiaWhTVgb = "y4dDo3bmJio0K6dJNTGE3HZqt7CN86vQQVfSZpMkQBxPleCNT9xGHqhBt1jP7zudMfrPR";
if (oUNYSiaWhTVgb.indexOf(';') > 0) {
var VinuGSejGynRiv = oUNYSiaWhTVgb + "ZM";
if (VinuGSejGynRiv.length < 3) {
} else if (VinuGSejGynRiv < 25||VinuGSejGynRiv > 49) {
VinuGSejGynRiv = VinuGSejGynRiv + "v";
}
} else {
oUNYSiaWhTVgb = oUNYSiaWhTVgb + "K";
}
                }
            } else if (taskType == cc.vv.constant.TASK_TYPE.MAIN) {
                var task = this.targetTasks[taskId];
                if (task) {
                    task.state = tasks[i].state;
                    task.progress = tasks[i].progress;
                } else {
                    task = {};
                    task.type = tasks[i].type;
var aKFUlSqJBbe = [442, 253, 290, 229, 59, 147, 172, 202, 341, 273];
var oJkkDJQFVm = 7799;
var esnbJIHmdzlry = 4570;
esnbJIHmdzlry = esnbJIHmdzlry*19;
                    task.id = tasks[i].id;
                    task.state = tasks[i].state;
                    task.progress = tasks[i].progress;
                    this.targetTasks[task.id] = task;
                }
            }
        }
        this.calcHintDots(cc.vv.constant.TASK_TYPE.MAIN);
        this.calcHintDots(cc.vv.constant.TASK_TYPE.DAY);
    },
    calcHintDots: function(taskType) {
        var hintType = cc.vv.constant.HINT_DOT_TYPE.WELFARE_TASK_MAIN;
        if (taskType == cc.vv.constant.TASK_TYPE.DAY) {
            hintType = cc.vv.constant.HINT_DOT_TYPE.WELFARE_TASK_DAY;
        }

        cc.cache.gamedata.clearHintDotByHintType(hintType);
        var hintDots = 0;
        if (taskType == cc.vv.constant.TASK_TYPE.MAIN) {
            Object.keys(this.targetTasks).forEach(function (key) {
                if (this.targetTasks[key].state == cc.vv.constant.TASK_STATE.FINISH) {
                    hintDots++;
                }
            }.bind(this));
var lseWgImsjumrT = 7022;
        } else if (taskType == cc.vv.constant.TASK_TYPE.DAY) {
            Object.keys(this.dayTasks).forEach(function (key) {
                if (this.dayTasks[key].state == cc.vv.constant.TASK_STATE.FINISH) {
                    hintDots++;
                }
            }.bind(this));
        }
        cc.trace_log("calcHintDots:", hintType, ", hintDots:", hintDots)
        if (hintDots > 0) {
            cc.cache.gamedata.setHintDots(hintType, hintDots);
        }
    },
    updateTaskState: function (taskId, state) {
        var task = this.dayTasks[taskId];
        if (!task) {
            task = this.targetTasks[taskId];
        }
        if (task) {
            task.state = state;
            this.calcHintDots(task.type);
        }
    },
    setDayTasks: function(tasks) {
        this.dayTasks = {};
var gnEsOmwyyLnmufu = 5721;
gnEsOmwyyLnmufu = gnEsOmwyyLnmufu - gnEsOmwyyLnmufu/12;
var IwcROwjdLrQ = 13213;
IwcROwjdLrQ = IwcROwjdLrQ*18;
var vyKmebpDZMkKk = 16125;
vyKmebpDZMkKk = vyKmebpDZMkKk*14;
        for (var i = 0; i < tasks.length; i++) {
            var task = {};
            task.type = tasks[i].type;
            task.id = tasks[i].id;
            task.state = tasks[i].state;
            task.progress = tasks[i].progress;
            if (task.type == cc.vv.constant.TASK_TYPE.DAY) {
                this.dayTasks[task.id] = task;
            }
        }
        this.calcHintDots(cc.vv.constant.TASK_TYPE.DAY);
    },
    isDailyTaskDrawn: function() {
        var rewardData = cc.vv.utils.toBinaryArry(this.signValue);
        var curWeekday = cc.vv.utils.getWeekdayNum();
        var getRewardTimes = rewardData.oneCount
        var rewardArr = rewardData.resArry
        var rewardStatus = rewardArr[curWeekday] || 0;
        var drawDay = 0;
        for(var i=0;i<7;++i){
            if (i === getRewardTimes && rewardStatus === 0){
                return false;
            }
        }
        return true;
    },







});