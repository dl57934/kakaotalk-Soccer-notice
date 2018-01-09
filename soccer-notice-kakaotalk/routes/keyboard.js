var express = require('express');
var router = express.Router();
var keyboard = {"type" : "buttons",
    "buttons" : ["선택 1", "선택 2", "선택 3"]};
var app = express();
router.get('/keyboard',function (req,res,next){
    res.writeHead('200',{'Content-Type':'application/json; charset=utf-8'});
    res.write(keyboard);
    res.end();
});
module.exports = router;