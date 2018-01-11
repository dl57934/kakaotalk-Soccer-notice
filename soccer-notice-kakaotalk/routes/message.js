var express = require('express');
var router = express.Router();
var phantom = require('phantom');
var _ph, _page, _outObj;
router.post('/',function (req,res,next) {

    if(req.body.content == "E 순위"||req.body.content == "E순위" || req.body.content == "L 순위"||req.body.content == "L순위" ||req.body.content == "B 순위"||req.body.content == "B순위" ) {
        phantom.create().then(function (ph) {
            _ph = ph;
            return _ph.createPage();
        }).then(function (page) {
            var selectPage;
            if(req.body.content == "E 순위"||req.body.content == "E순위")
                selectPage = 'http://sports.news.naver.com/wfootball/record/index.nhn';
            else if( req.body.content == "L 순위"||req.body.content == "L순위")
                selectPage = 'http://sports.news.naver.com/wfootball/record/index.nhn?category=primera&tab=team';
            else if(req.body.content == "B 순위"||req.body.content == "B순위")
                selectPage = 'http://sports.news.naver.com/wfootball/record/index.nhn?category=bundesliga&tab=team';
            _page = page;
            return _page.open(selectPage);
        }).then(function (status) {
            console.log(status);
	    return _page.evaluate(function(){
		var tdLength = document.getElementsByTagName('td');
		var returnText="";
		var ranking =1;
	        for(var i = 0; i < tdLength.length;i++){
			if(i % 10 == 1){
			  returnText +=ranking+'위' + tdLength[i].textContent+'\n';
			  ranking++;	
			}
		} 
		return returnText;
			})
        }).then(function (content) {   
	    content = content.replace(/^\s+|\s+$/gm,'');
	    var bye_message = {"message":{"text":content.toString()}};
            console.log(content);
            _page.close();
            _ph.exit();
            res.set('200', {'Content-Type': 'application/json;charset=utf8'});
            res.send(bye_message);

        }).catch(function (e) {
            console.log(e);
        })
    }

    else if(req.body.content == "E 일정"||req.body.content == "E일정" || req.body.content == "L 일정"||req.body.content == "L일정" ||req.body.content == "B 일정"||req.body.content == "B일정"){
        phantom.create().then(function (ph) {
            _ph = ph;
            return _ph.createPage();
        }).then(function (page) {
            var selectPage;
            if(req.body.content == "E 일정"||req.body.content == "E일정")
                selectPage = 'http://sports.news.naver.com/wfootball/schedule/index.nhn';
            else if( req.body.content == "L 일정"||req.body.content == "L일정")
                selectPage = 'http://sports.news.naver.com/wfootball/schedule/index.nhn?category=primera';
            else if(req.body.content == "B 일정"||req.body.content == "B일정")
                selectPage = 'http://sports.news.naver.com/wfootball/schedule/index.nhn?category=bundesliga';
            _page = page;
            return _page.open(selectPage);
        }).then(function (status) {
            return _page.evaluate(function () {
                var tdLength = document.getElementsByTagName('tbody')[0].textContent;
                var returnText="";
                /*for(var i = 0; i <tdLength.length; i++){
                    if(i%4 == 0 || i%4 == 1)
                    returnText += tdLength[i].textContent;
                }*/
                return tdLength;
            })
        }).then(function (content) {
            content = content.replace(/^\s+|\s+$/gm,'');
            var bye_message = {"message":{"text":content.toString()}};
            console.log(content);
            _page.close();
            _ph.exit();
            res.set('200', {'Content-Type': 'application/json;charset=utf8'});
            res.send(bye_message);
        })
    }
});

module.exports = router;
