var mongodb = require('mongodb-curd');
var dbBase = 'ningmeng';
var dbCol = 'iconname';
//获取所有icon
var iconname = function (req, res, next) {
    mongodb.find(dbBase, dbCol, {}, function (result) {
      if (result.length > 0) {
        res.send({code: 0, data: result})
      } else {
        res.send({code: 1, msg: '查找图标失败'})
      }
    })
} 



//添加自定义用户信息
var classifyuser = function(req, res, next) {
  var params= req.boy,
      iname = params.iname,
      cname = params.cname,
      type = params.type,
      uid = params.uid;
if (!iname || !cname || !type || !uid) {
  res.send({code: 3, msg: '请完善用户信息'})
} else {
  getusermsg();
}
function getusermsg () {
  
}

}

module.exports = {
  iconname: iconname,
  classifyuser: classifyuser
}