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
    message: ''
  })
})
router.post('/update', (req, res, next) => {
  res.setAttribute('cookie')
  res.send('update' + Date.now())
})

module.exports = router;
