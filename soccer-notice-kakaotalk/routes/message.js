var express = require('express');
var router = express.Router();
var phantom = require('phantom');
var _ph, _page, _outObj;
router.get('/',function (req,res,next) {


        phantom.create().then(function (ph) {
            _ph = ph;
            return _ph.createPage();
        }).then(function (page) {
            var selectPage;
            /*if(req.body.content == "E 순위"||req.body.content == "E순위")
                selectPage = 'http://sports.news.naver.com/wfootball/record/index.nhn';
            else if( req.body.content == "L 순위"||req.body.content == "L순위")
                selectPage = 'http://sports.news.naver.com/wfootball/record/index.nhn?category=primera&tab=team';
            else if(req.body.content == "B 순위"||req.body.content == "B순위")
                selectPage = 'http://sports.news.naver.com/wfootball/record/index.nhn?category=bundesliga&tab=team';*/
            _page = page;
            return _page.open('http://sports.news.naver.com/wfootball/record/index.nhn?category=bundesliga&tab=team');
        }).then(function (status) {
            console.log(status);
	    return document.textContent;
        }).then(function (content) {   
	    content = content.replace(/^\s+|\s+$/gm,'');
	    var bye_message = {"message":{"text":content.toString()}};
            console.log(content);
            _page.close();
            _ph.exit();
        }).catch(function (e) {
            console.log(e);
        })


});

module.exports = router;
