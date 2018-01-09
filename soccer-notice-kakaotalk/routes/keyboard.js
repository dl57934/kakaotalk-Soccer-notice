var express = require('express');
var router = express.Router();
var keyboard = {"type" : "buttons",
    "buttons" : ["선택 1", "선택 2", "선택 3"]};
var app = express();
router.get('/keyboard',function (req,res,next){
    res.send(keyboard);
});

module.exports = router;