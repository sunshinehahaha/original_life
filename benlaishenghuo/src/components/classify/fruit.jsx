import React,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import './sass/fruit.css';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   NavLink,
//   Redirect,
//   Switch
// } from 'react-router-dom';

class FruitUI extends Component{
	constructor(){
		super();
	}
	componentDidMount(){
		this.props.getFruitData();
	}
	render(){
		return(
				<div className = "right_fruit">
					<div className = "fruit_button">全部水果</div>
					<h3>热门推荐</h3>
					<div className = "fruit_hot">
						<ul className = "fruit_hot_ul">
							<li>推荐水果</li>
							<li>推荐水果</li>
							<li>推荐水果</li>
							<li>推荐水果</li>
							<li>推荐水果</li>
							<li>推荐水果</li>
							<li>推荐水果</li>
						</ul>
					</div>
					<h3>礼盒/组合</h3>
					<div className = "fruit_com">
						<ul className = "fruit_com_ul">
							<li>组合水果</li>
							<li>组合水果</li>
							<li>组合水果</li>
						</ul>
					</div>
					<h3>精选水果</h3>
					<div className = "fruit_cho">
						<ul className = "fruit_cho_ul">
							<li>精选水果</li>
							<li>精选水果</li>
							<li>精选水果</li>
							<li>精选水果</li>
							<li>精选水果</li>
							<li>精选水果</li>
							<li>精选水果</li>
							<li>精选水果</li>
							<li>精选水果</li>
							<li>精选水果</li>
							<li>精选水果</li>
							<li>精选水果</li>
							<li>精选水果</li>
							<li>精选水果</li>
							<li>精选水果</li>
							<li>精选水果</li>
							<li>精选水果</li>
							<li>精选水果</li>
							<li>精选水果</li>
							<li>精选水果</li>
							<li>精选水果</li>
						</ul>
					</div>
					<div className = "fruit_null"></div>
				</div>
			)
	}
}

const mapStateToProps = (state)=>{
	return {
		fruitList:state.fruitList
	}
}

const mapDispatchToProps = (dispacth)=>{
	return {
		getFruitData:function(){	
			console.log("Fruit");
			axios.post('/api/search')
			.then((res)=>{
				console.log(res);
				// dispacth({
				// 	type:"FRUIT_DATA",
				// 	payload:res
				// })
			})
		}
		
	}
}

const Fruit = connect(mapStateToProps,mapDispatchToProps)(FruitUI);

export default Fruit;