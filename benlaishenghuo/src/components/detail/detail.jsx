import React,{Component} from 'react';
import './sass/detail.css';
import{
	NavLink
}from 'react-router-dom';



class Detail extends Component{
	render(){
		return(
				<div id = "detail">
					<header className = "detail_header">
						<NavLink to = "/classify">
							<i className ="iconfont detail_header_icon">&#xe607;</i>
						</NavLink>
						<p className = "detail_header_pos">大连</p>
						<h3>商品</h3>
					</header>
					<main className = "deatil_main">
						<div className = "detail_main_pic">这是一个大商品详情的图片</div>
						<div className = "detail_main_list">
							<div className = "detail_main_listname">这是商品的名字</div>
							<div className = "detail_main_cost">这是单价</div>
						</div>
					</main>
					<footer className = "detail_footer">
						<div className = "detail_footer_add">
							<i className ="iconfont detail_footer_icon">&#xe501;</i>
						</div>
						<div className = "detail_footer_info">无法送达</div>
					</footer>
				</div>
			)
	}
}



export default Detail; 