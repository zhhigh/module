/**
 * Created with JetBrains WebStorm.
 * User: Boco
 * Date: 13-9-23
 * Time: 下午10:04
 * To change this template use File | Settings | File Templates.
 */
'use strict';
/*global require, module, Buffer, process, jsGen*/

var path = require('path'),
    processPath = path.dirname(process.argv[1]);//运行node的目录，这里可以方便替换下面baseDir的__dirname,方便用户自己搭建目录，利用node_modules加载rrestjs
module.exports = {
//通用配置
    /*
     * 注意，所有的路径配置的前面请加‘/’而后面不要加'/'！
     */
    fileName:'/opt/module/0817.xlsx',
    sheetName: 'test',
    mongodb:'localhost:27017/rrest'
};
