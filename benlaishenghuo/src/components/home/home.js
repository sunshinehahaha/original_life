import React,{Component} from 'react';
import './home.css';
import Header from '../others/header.js';


class Home extends Component{
	render (){
		return (
			<div id = "home">
				<header className = "home_header">
					<Header/>
					<div className = "home_header_ipt">
						首页
					</div>
					<div className = "home_header_login">

					</div>
				</header>
				<nav className = "home_nav"></nav>
				<div className = "home_slider"></div>
				<main className = "home_list"></main>
			</div>
		)
	}
}


export default Home;