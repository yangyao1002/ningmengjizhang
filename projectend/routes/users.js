var express = require('express');
var router = express.Router();
var mongodb = require('mongodb-curd');
var dbBase = 'ningmeng';
var dbCol = 'username';

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//用户信息
router.post('/username', (req, res, next) => {
    var params = req.body;
    var uname = params.uname; 
    mongodb.find(dbBase, dbCol, params, (result) => {
      if (result.length > 0) {
        res.send({code: 3, msg: '该用户已存在'})
      } else {
        adduser();
      }
    })

    function adduser() {
        mongodb.insert(dbBase, dbCol, params, (result) => {
          if (result) {
            res.send({code: 0, msg: '用户登陆成功'})
          } else {
            res.send({code: 1, msg: '该用户已存在'})
          }
        })
    }
});

module.exports = router;
