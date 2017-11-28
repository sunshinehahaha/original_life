import React,{ Component } from 'react';
import axios from 'axios';
export default class Regist extends Component{
	constructor(){
		super();
		this.regist = this.regist.bind(this);
	}
	regist(username,psw){
		console.log("regist");
		axios.post('/api/regist',{
			username:username,
			psw:psw
		})
		.then((res)=>{
			console.log(res);
			if(res.data.code!=1){
				alert("注册失败");
				return;
			}
			this.$router.push('/my');
		})
	}
	render(){
		return (
			<div className="regist">
				<h2>注册</h2>
				<input type="text" placeholder="用户名" ref="username"/><br/><br/>
				<input type="text" placeholder="密码" ref="psw"/><br/><br/>
				<button onClick={()=>{this.regist(this.refs.username.value,this.refs.psw.value)}}>注册</button>
			</div>
		)
	}
}