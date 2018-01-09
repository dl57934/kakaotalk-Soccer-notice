var express = require('express');
var router = express.Router();
var keyboard = {"type" : "buttons",
    "buttons" : ["선택 1", "선택 2", "선택 3"]};
var app = express();
app.use(function (req,res,next) {
   res.writeHead('200', {'Content-Type':'application/json;charset=utf8'});
   res.write(keyboard);
   res.end();
});

module.exports = router;