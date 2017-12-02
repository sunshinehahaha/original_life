var express = require('express');
var router = express.Router();
var fs = require('fs');
var UserModel = require('../model/UserModel');
var GoodsModel = require('../model/GoodsModel');
var CartModel = require('../model/CartModel');
var indexModel = require('../model/indexModel');
/* GET users listing. */

router.get('/', function(req, res, next) {
  res.render('index',{});
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

router.post('/api/search',(req,res,next)=>{
	var result ={
		code : 1
	}
	GoodsModel.find({},(error,docs)=>{
		if(error || docs.length === 0){
			result.code = -100;
			result.message = "服务器错误";
			res.send(JSON.stringify(result));
		}
		console.log(docs);
		result.data = docs;
		res.send(JSON.stringify(result));
	})
});

router.post('/api/detail',(req,res,next)=>{
	var result = {
		code:1
	}
	GoodsModel.find({sysNo:req.body.id},(error,docs)=>{
		if(error || docs.length === 0){
			result.code = -100;
			result.message = "服务器错误";
			res.send(JSON.stringify(result));
		}
		console.log(docs);
		result.data = docs;
		res.send(JSON.stringify(result));
	})
})

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

router.post('/api/delInfo',function(req,res,next){
	var result ={
		code:1
	}
	CartModel.update({_id:req.body.id},{flag:0},(err)=>{
		if(err){
			result.code = -110;
			result.message = "删除失败";	
		}
		res.send(JSON.stringify(result));
	})
})

router.get('/api/showCart',function(req,res,next){
	var result = {
		code:1
	}
	if(!req.session.username){
		result.code = -99;
		result.message = "用户，还没登录哦~~";
		res.send(JSON.stringify(result));
		return;
	}
	CartModel.find({username:req.session.username,flag:1},(err,docs)=>{
		if( err || docs.length == 0){
			result.code = -110;
			result.message = "服务器错误";
			res.send(JSON.stringify(result));
		}

		result.data = docs;
		res.send(JSON.stringify(result));

	})
})

router.post('/api/saveCart', function(req, res, next) {
	var result = {
		code:1
	}
	if(!req.session.username){
		result.code = -911;
		result.message = "请先登录";
		res.send(JSON.stringify(result));
		return;
	}
	CartModel.find({name:req.body.name},(err,docs)=>{
		if(err){
			result.code = -20;
			result.message = '服务器故障';
			res.send(JSON.stringify(result));
			return;
		}
		// if(docs.length !=0){
		// 	result.code = -21;
		// 	result.message = '商品已添加';
		// 	res.send(JSON.stringify(result));
		// 	return;
		// }

		var cart = new CartModel();
		cart.imgUrl = req.body.imgUrl;
		cart.name = req.body.name;
		cart.price = req.body.price;
		cart.username = req.session.username;

		cart.save((err)=>{
			if(err){
				result.code = -22;
				result.message = '保存失败，服务器出错';
			}
			res.send(JSON.stringify(result));
		})	
	})
});

router.post('/save/goods', function(req, res, next) {
	var result = {
		code:1
	}
	GoodsModel.find({name:req.body.name},(err,docs)=>{
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

		var goods = new GoodsModel();
		goods.imgUrl = req.body.imgUrl;
		goods.name = req.body.name;
		goods.price = req.body.price;
		goods.sysNo = req.body.sysNo;

		goods.save((err)=>{
			if(err){
				result.code = -22;
				result.message = '保存失败，服务器出错';
			}
			// result.username = req.body.username;
			res.send(JSON.stringify(result));
		})	
	})
});



router.post('/save/imgUrl', function(req, res, next) {
		var result = {
			code:1
		}
		var img = new indexModel();
		img.imgUrl = req.body.imgUrl;

		img.save((err)=>{
			if(err){
				result.code = -22;
				result.message = '保存失败，服务器出错';
			}
			// result.username = req.body.username;
			res.send(JSON.stringify(result));
		})	
});

router.post('/api/showImg',(req,res,next)=>{
	var result ={
		code : 1,
		lunbo:[],
		datu:[],
		xiaotu:[],
		ban:[],
		last:[]
	}
	indexModel.find({},(error,docs)=>{
		if(error || docs.length === 0){
			result.code = -100;
			result.message = "服务器错误";
			res.send(JSON.stringify(result));
		}
		console.log(docs);
		for(var i=0;i<docs.length;i++){
			if(i<=3){
				result.lunbo.push(docs[i]);
			}else if(i===4){
				result.datu.push(docs[i]);
			}else if(i>4&&i<=12){
				result.xiaotu.push(docs[i]);
			}else if(i>=13&&i<=16){
				result.ban.push(docs[i]);
			}else{
				result.last.push(docs[i]);
			}
		}
		// result.data = docs;
		res.send(JSON.stringify(result));
	})
});


module.exports = router;
