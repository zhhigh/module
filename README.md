module
======
tools for nodejs,include
1 excel read to json
2 further increase

OpExcel.js
------
### usage
    1 npm install xlsx
    2 code
    var excel = require('./OpExcel')
    var config = require('./config');
    var json   ={};
    excel.initial(config);
    excel.readToJson();
    json = excel.json;
    3 description
    json variable:read excel to json format
    config file:fileName - the excel file name
           sheetName - the sheet name
