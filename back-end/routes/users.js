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
    maxAge: 1000 * 60 * 5,
    httpOnly: false
    // signed: true
  })
  res.send({
    code: 200,
    message: 'success',
    data: 'success'
  })
})
router.get('/router', (req, res, next) => {
  res.send({
    code: 200,
    message: '',
    data: {
      menuData: [
        {content: '主路由', path: '/main',name:'main', parentId:null, id: -1},
        {content: '主页', fullPath: '/main/index',path: 'index',name:'index',parentId: -1, id:0 },
        {content: '菜单1', fullPath: '/main/index/caidan1',path: 'caidan1',name:'indexcaidan1',parentId: 0, id: 1},
        {content: '菜单2', fullPath: '/main/index/caidan2',path: 'caidan2',name:'indexcaidan2',parentId: 0, id: 2},
        {content: '菜单3', fullPath: '/main/index/caidan3',path: 'caidan3',name:'indexcaidan3',parentId: 0, id: 3},
        {content: '用户管理', fullPath: '/main/user',path: 'user',name:'user',parentId: -1, id: 4},
        {content: '菜单1', fullPath: '/main/user/see',path: 'see', name:'usersee',parentId:4, id: 5},
        {content: '菜单2', fullPath: '/main/user/create',path: 'create',name:'usercreate',parentId:4, id: 6},
        {content: '菜单3', fullPath: '/main/user/edit',path: 'edit',name:'useredit',parentId: 4, id: 7},
        {content: '菜单4', fullPath: '/main/user/delete',path: 'delete',name:'userdelete',parentId: 4, id: 8},
        {content: '其他', fullPath: '/main/other',path: 'other',name:'userother',parentId: -1, id: 9},
      ],
      resourceData: [
        {id: 0, method: 'GET', url: '/student/list'},
        {id: 1, method: 'POST', url: '/student/create'},
        {id: 2, method: 'POST', url: '/student/delete'},
        {id: 3, method: 'GET', url: '/user/list'},
        {id: 4, method: 'GET', url: '/favorite/list'},
        {id: 5, method: 'GET', url: '/favorite/add'},
        {id: 6, method: 'GET', url: '/favorite/del'},
        {id: 7, method: 'GET', url: '/create'},
      ]
    }
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
