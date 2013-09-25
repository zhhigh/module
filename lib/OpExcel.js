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
    this.json     ={};
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
    this.json= this.XLSX.utils.sheet_to_row_object_array(oSheet);


}
module.exports = new OpExcel();