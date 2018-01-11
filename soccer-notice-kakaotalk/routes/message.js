var express = require('express');
var router = express.Router();
var phantom = require('phantom');
var _ph, _page, _outObj;
router.post('/',function (req,res,next) {

    if(req.body.content == "E 순위"||req.body.content == "E순위" ) {
        phantom.create().then(function (ph) {
            _ph = ph;
            return _ph.createPage();
        }).then(function (page) {
            _page = page;
            return _page.open('http://sports.news.naver.com/wfootball/record/index.nhn');
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

    if(req.body.content == "L 순위"||req.body.content == "L순위" ) {
        phantom.create().then(function (ph) {
            _ph = ph;
            return _ph.createPage();
        }).then(function (page) {
            _page = page;
            return _page.open('http://sports.news.naver.com/wfootball/record/index.nhn?category=primera&tab=team');
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
    if(req.body.content == "B 순위"||req.body.content == "B순위" ) {
        phantom.create().then(function (ph) {
            _ph = ph;
            return _ph.createPage();
        }).then(function (page) {
            _page = page;
            return _page.open('http://sports.news.naver.com/wfootball/record/index.nhn?category=bundesliga&tab=team');
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
});

module.exports = router;
