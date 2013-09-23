/**
 * Created with JetBrains WebStorm.
 * User: Boco
 * Date: 13-9-23
 * Time: 下午10:04
 * To change this template use File | Settings | File Templates.
 */
/**

 　　* @fileoverview read excel ,require lib xlsx,only support excel 2007 and later

 　　* JavaScript.

 　　*

 　　* @author zhhigh@163.com

 　　* @version 0.2

 * demo:
 * var opexcel = require('./OpExcel')
 * opexcel.inital(config);
 * opexcel.readToJson();
 *
 　　*/
/*20130919:v0.2去掉直接读取config文件的逻辑
 20130910:v0.1初步完成读取一个excel，转换成json并放入一个数组
 */
function OpExcel()
{
    this.XLSX =  require('xlsx');
    this.xlsx =  null;
    this.arrExcel = new Array();
    this.config   ={};
}

/*获取excel的文件名
 */
OpExcel.prototype.initial=function(config){
    this.config=config;
    this.xlsx =  this.XLSX.readFile(this.config.fileName);
}

/*将数据转换成Json,并放入一个全局数组
 */
OpExcel.prototype.readToJson = function()
{
    var oSheet=this.xlsx.Sheets[this.config.sheetName];
    var arrField=new Array();
    var arrValues=new Array();

    for (z in oSheet){
        if(z[0] === '!') continue;
        if (z[1] == '1'){
            arrField.push(oSheet[z].v);
        }else{
            arrValues.push(oSheet[z].v);
        }
    }

    var fieldLength = arrField.length;//总列数

    var arrJson     = new Array();
    var jsonValues  = {};
    var m           = null;

    for (i in arrValues){
        var k = (i) % fieldLength; //取余数
        m   = fieldLength - 1;//如果fieldLength=3,则求余的最大数是2，所以 k 最大是2，k=m的时候，json的字段和值才算完整
        arrJson.push(arrField[k]+":"+arrValues[i]);
        if (m == k){
            //jsonValues = JSON.stringify(arrJson);
            console.log(arrJson);
            arrJson.length=0;//清空数组
            this.arrExcel.push(arrJson);
            //this.arrExcel.push(jsonValues);
        }
    }
}


OpExcel.prototype.readToJsonEx = function()
{
    var oSheet=this.xlsx.Sheets[this.config.sheetName];
    var arrField=new Array();
    var arrValues=new Array();
    var json     ={};


    for (z in oSheet){
        if(z[0] === '!') continue;
        if (z[1] == '1'){
            arrField.push(oSheet[z].v);
        }else{
            arrValues.push(oSheet[z].v);
        }
    }

    //console.log(arrField);
    //console.log(arrValues);


    /*
     var fieldLength = arrField.length;//总列数

     var arrJson     = new Array();
     var jsonValues  = {};
     var m           = null;

     for (i in arrValues){
     var k = (i) % fieldLength;
     m   = fieldLength - 1;
     arrJson.push(arrField[k]+":"+arrValues[i]);
     if (m == k){
     console.log(arrJson);
     arrJson.length=0;
     this.arrExcel.push(arrJson);
     }
     }*/
}
module.exports = new OpExcel();
