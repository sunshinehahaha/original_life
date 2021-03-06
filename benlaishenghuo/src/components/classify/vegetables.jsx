import React,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import './sass/vegetables.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
} from 'react-router-dom';

export default class Vegetables extends Component{
	constructor(){
		super();
		this.getVegetablesData = this.getVegetablesData.bind(this);
		this.state = {
			vegetablesList:[]
		}
	}
	componentDidMount(){
		this.getVegetablesData();
	}
	getVegetablesData(){
		var that = this;
		console.log(this);
		axios.post('/api/search')
			.then((res)=>{
				console.log(this);
				this.state.vegetablesList = res.data.data;
				this.setState({
			      vegetablesList:that.state.vegetablesList
			    })
			})
	}
	render(){
		return(
				<div className = "right_vegetables">
					<div className = "vegetables_button">全部蔬菜</div>
					<h3>热门推荐</h3>
					<div className = "vegetables_hot">
						<ul className = "vegetables_hot_ul">
							{
							this.state.vegetablesList.map((item,index)=>{
								return (
									<li key={item.sysNo}>
										<Link to={"/detail"}>
											<img src={item.imgUrl}/>
											<span>{item.name}</span>
										</Link>
									</li>
								)
							})
						}
						</ul>
					</div>
					<h3>新鲜蔬菜</h3>
					<div className = "vegetables_com">
						<ul className = "vegetables_com_ul">
							<li>新鲜蔬菜</li>
							<li>新鲜蔬菜</li>
							<li>新鲜蔬菜</li>
							<li>新鲜蔬菜</li>
							<li>新鲜蔬菜</li>
							<li>新鲜蔬菜</li>
						</ul>
					</div>
					<h3>礼盒/组合</h3>
					<div className = "vegetables_cho">
						<ul className = "vegetables_cho_ul">
							<li>组合蔬菜</li>
						</ul>
					</div>
					<div className = "vegetables_null"></div>
				</div>
			)
	}
}

// const mapStateToProps = (state)=>{
// 	return {
// 		storeList:state.storeList
// 	}
// }

// const mapDispatchToProps = (dispacth)=>{
// 	return {
		
// 	}
// }

// export default Vegetables;