import React,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import './sass/fruit.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
} from 'react-router-dom';

export default class Fruit extends Component{
	constructor(){
		super();
		this.getFruitData = this.getFruitData.bind(this);
		this.state = {
			fruitList:[]
		}
	}
	componentDidMount(){
		this.getFruitData();
	}
	getFruitData(){
		var that = this;
		axios.post('/api/search')
			.then((res)=>{
				console.log(res);
				that.state.fruitList = res.data.data;

				that.setState({
			      fruitList:that.state.fruitList
			    })
			})

	}
	render(){
		return(
				<div className = "right_fruit">
					<div className = "fruit_button">全部水果</div>
					<h3>热门推荐</h3>
					<div className = "fruit_hot">
						<ul className = "fruit_hot_ul">
						{
							this.state.fruitList.map((item,index)=>{
								return (
									<li key={item.sysNo}>
										<Link to={"/detail/" + item.sysNo}>
											<img src={item.imgUrl}/>
											<span>{item.name}</span>
										</Link>
									</li>
								)
							})
						}
						</ul>
					</div>
					<h3>新鲜水果</h3>
					<div className = "fruit_com">
						<ul className = "fruit_com_ul">
							<li>新鲜水果</li>
							<li>新鲜水果</li>
							<li>新鲜水果</li>
							<li>新鲜水果</li>
							<li>新鲜水果</li>
							<li>新鲜水果</li>
						</ul>
					</div>
					<h3>礼盒/组合</h3>
					<div className = "fruit_cho">
						<ul className = "fruit_cho_ul">
							<li>组合水果</li>
						</ul>
					</div>
					<div className = "fruit_null"></div>
				</div>
			)
	}
}