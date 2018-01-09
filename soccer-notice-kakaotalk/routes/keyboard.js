var express = require('express');
var router = express.Router();
var keyboard = {"type" : "text"};
var app = express();
router.get('/',function (req,res,next){
  res.set('200',{'Content-Type':'application/json;charset=utf8'});
  res.send(keyboard);
});
module.exports = router;
