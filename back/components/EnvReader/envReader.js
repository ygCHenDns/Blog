//把env文件读进全局变量
console.log('Begin loading env configs...');
var fs = require('fs');
var data = fs.readFileSync('.env').toString().split('\r\n'); //按行取env数据
var config = {};
for(var line in data){
    let linedata = data[line].split('#')[0];
    let key = linedata.substring(0, linedata.indexOf('=')).trim();
    let value = linedata.substring(linedata.indexOf('=')+1, linedata.length).trim();
    config[key] = value;
}
console.log('Loading env configs end.');
module.exports = config;