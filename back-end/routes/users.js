var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/query', function(req, res, next) {
  if (req.cookies && req.cookies.SessionId) {
    res.send('success response');
  } else {
    res.send({
      code: 403,
      message: '请先登陆'
    })
  }
});
router.post('/create', (req, res, next) => {
  res.cookie('SessionId', Date.now(), {
    maxAge: 1000 * 60 * 2,
    httpOnly: true
    // signed: true
  })
  res.send({
    code: 200,
    message: '',
    data: [
      {content: '主页', router: '/index',parentRoute:null},
      {content: '查看', router: '/create',parentRoute: '/index'},
      {content: '编辑', router: '/edit',parentRoute: '/index'},
      {content: '删除', router: '/del',parentRoute: '/index'},
      {content: '用户管理', router: '/index',parentRoute:null},
      {content: '无用路由', router: '/index',parentRoute:null},
    ]
  })
})
router.post('/update', (req, res, next) => {
  res.cookie('SessionId', Date.now(), {
    maxAge: 1000 * 60 * 2,
    httpOnly: true
    // signed: true
  })
  res.send('update' + Date.now())
})

module.exports = router;
