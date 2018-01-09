var express = require('express');
var router = express.Router();

router.post('/',function (req,res,next) {
    const _obj ={
        "user_key":req.body.user_key,
        "type":"text",
        "content":req.body.content
    };
    if(req.body.content == "안녕") {
        res.set('200', {'Content-Type': 'application/json;charset=utf8'});
        res.send(_obj);
    }
});

module.exports = router;