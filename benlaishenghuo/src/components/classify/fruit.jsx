import React,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
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
				<div className = "right_storebaby">
					<div>
						水果
					</div>
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
			axios.post('/api/json')
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