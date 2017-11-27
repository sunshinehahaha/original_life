import React,{Component} from 'react';
import './home.css';


class Home extends Component{
	render (){
		return (
			<div id = "home">
				<header className = "home_header">
					<div className = "home_header_pos">
						beijing 
					</div>
					<div className = "home_header_ipt">

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