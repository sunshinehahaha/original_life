import React,{Component} from 'react';
import './sass/my.css';
import LoginRoute from './LoginRoute';
import {connect} from 'react-redux';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
} from 'react-router-dom';

class MyUI extends Component{
	componentDidMount() {
		console.log(this.props);
		console.log({...this.props});//{...this.props解构赋值}
		this.props.getSession(this);
		// this.props.changeStatus(this);
	}
	render (){
		return (
			
			<div className="my">
				<header className = "my_header">
					<Link to="/">
						<i className="iconfont">&#xe607;</i>
					</Link>
					<span id="storeSession" ref="storeMy">我的</span>
					<span  className = "my_main_user" ref="storeMySession">{localStorage.getItem("username")}</span>
				</header>

				<main className = "my_main">
					<div className = "my_main_pic">
						<div className = "my_main_cir">
							<i className ="iconfont my_main_icon">&#xe502;</i>
						</div>
					</div>

					<div className = "my_main_relo">
						<NavLink activeClassName="active"  className="loginRe" to={`${this.props.match.url}/login`}>
						 	登录
					    </NavLink>
					    <NavLink activeClassName="active" className="loginRe" ref="haha" to={`${this.props.match.url}/regist`}>
					 		<span ref="zhuce">注册</span>
					    </NavLink>
					</div>
					
					<div className = "my_main_detail">
						
					</div>

					<div className = "my_main_out">
						<span ref="zhuxiao" onClick={() => {this.props.delSession(this)}}>注销</span>
					</div>

				</main>

				
				<div className="loginRegist">
					<LoginRoute {...this.props}></LoginRoute>
				</div>
			</div>
			
		)
	}
}

const mapStateToProps = (state)=>{
	return {
		// loginSession:state.loginSession[0]
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		
		getSession:function(myThis){
			console.log('getSession::run')
			var that = this;
				console.log(this);
			axios.get('/api/checkSession')
			.then((res)=>{
				console.log(res);
				if(res.data.code!=1){
					console.log(res.data.message);
					that.history.push('/my/login');//跳转to do 
					myThis.refs.storeMySession.style.display = "none";
					myThis.refs.storeMy.style.display = "inline-block";
					myThis.refs.zhuxiao.style.display = "none";
					return;
				}

				myThis.refs.storeMy.style.display = "none";
				myThis.refs.storeMySession.style.display = "inline-block";
				myThis.refs.zhuxiao.style.display = "inline-block";
				console.log("hahaah");
				


			})
		},
		changeStatus:function(props){
			console.log('change::run');
			
		},
		delSession:function(myThis){
			var that = this;
			console.log("zhuxiao");
			axios.get('/api/del')
			.then((res)=>{
				console.log(res);
				if(res.data.code!=1){
					alert(res.data.message);
					that.history.push('/my');

					return;
				}
				localStorage.removeItem("username");
				alert("注销成功");
				window.location.reload(false);
			
			})
		}
	}
}

const My=connect(mapStateToProps,mapDispatchToProps)(MyUI);
export default My;