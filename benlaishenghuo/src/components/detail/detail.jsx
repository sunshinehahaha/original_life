import React,{Component} from 'react';
import './detail.css';
import{
	NavLink
}from 'react-router-dom';



class Detail extends Component{
	render(){
		return(
				<div id = "deatil">
					<header className = "detail_header">
						<NavLink to = "/home">
							<i className ="iconfont detail_header_icon">&#xe607;</i>
						</NavLink>
						<p className = "detail_header_pos">大连</p>
						<h3>商品</h3>
					</header>
					<main className = "deatil_main">
						<div className = "detail_main_pic">这是一个大商品详情的图片</div>
						<div className = "detail_main_list">
							<div className = "detail_main_listname">这是商品的名字</div>
							<div className = "detail_main_list">这是商品描述</div>
							<div className = "detail_main_cost">这是单价</div>
						</div>
					</main>
				</div>
			)
	}
}



export default Detail; 