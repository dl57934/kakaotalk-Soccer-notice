var express = require('express');
var router = express.Router();
var keyboard = {"type" : "buttons",
    "buttons" : ["선택 1", "선택 2", "선택 3"]};
var app = express();
router.get('/keyboard',function (req,res,next){
  res.set('200',{'Content-Type':'application/json;charset=utf8'});
  res.send(keyboard);
});
module.exports = router;