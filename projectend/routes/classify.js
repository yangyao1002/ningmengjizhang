var express = require('express');
var router = express.Router();
var classifyApi = require('./classfiyApi/index.js');



//获取所有图标的接口
router.get('/icon', classifyApi.iconname);


//获取所有自定义添加
router.post('/classifyuser', classifyApi.classifyuser)

module.exports = router;
