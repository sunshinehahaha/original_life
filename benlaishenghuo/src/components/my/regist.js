import React,{ Component } from 'react';
import axios from 'axios';
import './sass/regist.css';
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
			alert("注册成功");
			this.props.history.push('/my/login');
		})
	}
	render(){
		return (
			<div className="regist">
				<input type="text" placeholder="用户名" ref="username" className="username"/><br/><br/>
				<input type="text" placeholder="密码" ref="psw" className="username"/><br/><br/>
				<input type="text" placeholder="确认密码" ref="psw" className="username"/><br/><br/>
				<button onClick={()=>{this.regist(this.refs.username.value,this.refs.psw.value)}} className="loginU">注册</button>
			</div>
		)
	}
}