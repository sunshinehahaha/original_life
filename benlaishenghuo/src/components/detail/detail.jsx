import React,{Component} from 'react';
import './sass/detail.css';
import{
	NavLink
}from 'react-router-dom';

import axios from 'axios';

class Detail extends Component{
	constructor(){
		super();
		this.state ={
			detailList:[]
		}
	}
	componentDidMount(){
		this.getData();
	}
	getData(){
		var that = this;
		axios.post('/api/detail',{
			id:this.props.match.params.fid
		})
		.then((res)=>{
			console.log(res);
			that.state.detailList = res.data.data;
			console.log(that.state.detailList);
			that.setState({
				detailList:that.state.detailList
			})
		})
	}
	render(){
		console.log(this.props.match.params.fid);
		return(
				<div id = "detail">
					<header className = "detail_header">
						<NavLink to = "/classify">
							<i className ="iconfont detail_header_icon">&#xe607;</i>
						</NavLink>
						<p className = "detail_header_pos">大连</p>
						<h3>商品</h3>
					</header>
					<main className = "detail_main">
						{
							this.state.detailList.map((item,index)=>{
								return (
									<div key = {item.sysNo}>
										<img src={item.imgUrl} className = "detail_main_pic"/>
										<div className = "detail_main_list">
											<div className = "detail_main_listname"><span>商品名:</span>{item.name}</div>
											<div className = "detail_main_cost"><span>价格:</span>￥{item.price}</div>
										</div>
									</div>
								)
							})
						}
					</main>
					<footer className = "detail_footer">
						<div className = "detail_footer_add">
							<i className ="iconfont detail_footer_icon">&#xe501;</i>
						</div>
						<div className = "detail_footer_info">加入购物车</div>
					</footer>
				</div>
			)
	}
}



export default Detail; 