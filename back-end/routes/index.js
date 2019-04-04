var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/aimedical/view', (req, res, next) => {
  res.send({
    code: 200,
    message: 'fuck'
  })
})
router.get('/aimedical/api/medicalrecord/list', (req, res, next) => {
  res.send({
    code: 200,
    message: 'fuck'
  })
})
router.get('/upload', (req, res, next) => {
  res.send({
    code: 200
  })
})
router.post('/upload', (req, res, next) => {
  res.send({
    code: 200
  })
})
module.exports = router;
