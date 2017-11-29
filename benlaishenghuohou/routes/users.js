var express = require('express');
var router = express.Router();
var fs = require('fs');
var UserModel = require('../model/UserModel');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/api/regist', function(req, res, next) {
	var result = {
		code:1
	}
	UserModel.find({username:req.body.username},(err,docs)=>{
		if(err){
			result.code = -20;
			result.message = '服务器故障';
			res.send(JSON.stringify(result));
			return;
		}
		if(docs.length !=0){
			result.code = -21;
			result.message = '用户名已存在';
			res.send(JSON.stringify(result));
			return;
		}

		var user = new UserModel();
		user.username = req.body.username;
		user.psw = req.body.psw;
		user.save((err)=>{
			if(err){
				result.code = -22;
				result.message = '保存失败，服务器出错';
			}
			// result.username = req.body.username;
			res.send(JSON.stringify(result));
		})	
	})
});

router.post('/api/json',(req,res,next)=>{
	var temp={};
	fs.readFile('C:\\Users\\Administrator\\Desktop\\original_life\\benlaishenghuohou\\public\\json\\fruit.json', (err, data) => {
		if(err){
			console.log(err);
		}
		// console.log(data.toString());
		// console.log(JSON.stringify(data.toString()));
		console.log(JSON.parse(JSON.stringify(data.toString())));
		
		temp = JSON.parse(JSON.stringify(data.toString()));
		res.send(temp);

	})
	

});

router.post('/api/login', function(req, res, next) {

	var result = {
		code:1
	}
	if(req.session.username){
		result.code = -22;
		result.message = "不要重新登录";
		res.send(JSON.stringify(result));
	}
	UserModel.find({username:req.body.username,psw:req.body.psw},(err,docs)=>{
		if(err){
			result.code = -20;
			result.message = '服务器故障';
			res.send(JSON.stringify(result));
			return;
		}
		if(docs.length ===0){
			result.code = -21;
			result.message = '密码或用户名不正确呢';
			res.send(JSON.stringify(result));
			return;
		}

		req.session.username = req.body.username;
		result.session = req.body.username;
		res.send(JSON.stringify(result));
	})
});


router.get('/api/checkSession',function(req,res,next){
	var result = {
		code:1
	}
	if(!req.session||!req.session.username){
		result.code = -110;
		result.message = "请先登录";
		res.send(JSON.stringify(result));
	}
	result.session = req.session.username;
	res.send(JSON.stringify(result));
})


router.get('/api/del',function(req,res,next){
	var result = {
		code:1
	}
	delete req.session.username;
	res.send(JSON.stringify(result));
})
module.exports = router;
