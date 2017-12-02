import React,{ Component } from 'react';
import axios from 'axios';
import './sass/login.css';
import My from './my.js';
import {connect} from 'react-redux';
class LoginUI extends Component{
	constructor(){
		super();
	}
	render(){
		return (
			<div className="login">
				<input type="text" placeholder="用户名" ref="username" className="username"/><br/><br/>
				<input type="text" placeholder="密码" ref="psw" className="username"/><br/><br/>
				<button onClick={()=>{this.props.postSession(this.refs.username.value,this.refs.psw.value)}} className="loginU">登录</button>
			</div>
		)
	}
}

const mapStateToProps = (state)=>{
	// console.log(state);
	return {
		// session:state.loginSession[0]
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		postSession:function(username,psw){
			console.log(this);
			// console.log(props);
			axios.post('/api/login',{
				username:username,
				psw:psw
			})
			.then((res)=>{
				console.log(res);
				if(res.data.code!=1){
					alert(res.data.message);
					return;
				}
				localStorage.setItem("username",res.data.session);
				alert("登录成功");
				this.history.push('/my');
				window.location.reload(false);
			})
		}
	}
}

const Login = connect(mapStateToProps,mapDispatchToProps)(LoginUI);
export default Login;