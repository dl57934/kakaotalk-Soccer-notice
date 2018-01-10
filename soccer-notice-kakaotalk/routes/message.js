var express = require('express');
var router = express.Router();
var phantom = require('phantom');
var _ph, _page, _outObj;
router.post('/',function (req,res,next) {
    const _obj ={
        "user_key":req.body.user_key,
        "type":"text",
        "content":req.body.content
    };

    if(req.body.content == "안녕") {
        phantom.create().then(function (ph) {
            _ph = ph;
            return _ph.createPage();
        }).then(function (page) {
            _page = page;
            return _page.open('http://sports.news.naver.com/wfootball/index.nhn');
        }).then(function (status) {
            console.log(status);
            return _page.property('content');
        }).then(function (content) {
            var bye_message = {"message":{"text":content}};
            console.log(content);
            res.set('200', {'Content-Type': 'application/json;charset=utf8'});
            res.send(bye_message);
            _page.close();
            _ph.exit();
        }).catch(function (e) {
            console.log(e);
        })
    }
});

module.exports = router;