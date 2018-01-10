var express = require('express');
var router = express.Router();
var page = require('webpage').create();
var title;
router.post('/',function (req,res,next) {
    const _obj ={
        "user_key":req.body.user_key,
        "type":"text",
        "content":req.body.content
    };
    var bye_message = {"message":{"text":"hihi"}};
    if(req.body.content == "안녕") {
        page.open('http://sports.news.naver.com/wfootball/index.nhn',function (status) {
           title = page.evaluate(function () {
              return document.title;
           });
        });
        res.set('200', {'Content-Type': 'application/json;charset=utf8'});
        res.send(title);
        phantom.exit();
    }
});

module.exports = router;