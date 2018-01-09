var express = require('express');
var router = express.Router();
var keyboard = {"type" : "buttons",
    "buttons" : ["선택 1", "선택 2", "선택 3"]};
var app = express();
router.get('/keyboard',function (req,res,next){
    app.use(function (req,res,next) {
        res.setHeader("Content-Type", "application/json;charset=utf-8");
        res.writeHead('200');
        res.write(keyboard);
        res.end();
    })
});
module.exports = router;