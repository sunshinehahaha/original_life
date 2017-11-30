import React,{Component} from 'react';
import Header from '../others/header.js';
import {connect} from 'react-redux';
import './sass/classify.css';
import axios from 'axios';
import Storebaby from './storebaby.js';
import Fruit from './fruit.jsx';
import Vegetables from './vegetables.jsx';
import Detail from './../detail/detail.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
  // Switch
} from 'react-router-dom';

class ClassifyUI extends Component{
	constructor(){
		super();
	}
	componentDidMount() {
	    this.props.getData();
  	}
	render(){
	    return (
	   
		        <div className="classify">
		        	<Header/>
		            <div className="left">
		          		<ul>
		          			<li>
		          				<NavLink to = "/classify/storebaby" activeClassName="activeClassify">
		          					镇店之宝
		          				</NavLink>
		          			</li>
			          		<li>
		          				<NavLink to = "/classify/fruit" activeClassName="activeClassify">
		          					水果
		          				</NavLink>
		          			</li>
		          			<li>
		          				<NavLink to = "/classify/vegetables" activeClassName="activeClassify">
		          					蔬菜
		          				</NavLink>
		          			</li>
		          			<li><NavLink to = "/Storebaby">肉禽蛋品</NavLink></li>
		          			<li><NavLink to = "/Storebaby">水产海鲜</NavLink></li>
		          			<li><NavLink to = "/Storebaby">熟食面点</NavLink></li>
		          			<li><NavLink to = "/Storebaby">粮油副食</NavLink></li>
		          			<li><NavLink to = "/Storebaby">烘焙乳品</NavLink></li>
		          			<li><NavLink to = "/Storebaby">休闲食品</NavLink></li>
		          			<li><NavLink to = "/Storebaby">酒水茶饮</NavLink></li>
		          			<li><NavLink to = "/Storebaby">厨房用品</NavLink></li>
		          			<li><NavLink to = "/Storebaby">礼品礼盒</NavLink></li>
		          			<li><NavLink to = "/Storebaby">休闲食品</NavLink></li>
		          			<li><NavLink to = "/Storebaby">酒水茶饮</NavLink></li>
		          			<li><NavLink to = "/Storebaby">厨房用品</NavLink></li>
		          			<li><NavLink to = "/Storebaby">礼品礼盒</NavLink></li>
		          			
		          		</ul>
		            </div>
					<div className="right">
					
							
							<Route  path="/classify/storebaby" component={Storebaby}/>
							<Route  path="/classify/fruit" component={Fruit}/>
							<Route  path="/classify/vegetables" component={Vegetables}/>
							
					</div>

		        </div>
	  
    )
  }
}

const mapStateToProps = (state)=>{
	// console.log(state);
	return {
	    list:state.list
	}
}

const mapDispatchToProps = (dispatch)=>{
  return {
    getData:function(data){
    	axios.get("/showCategoryMore")
	    .then(function(res){
	      // console.log(res);
	      dispatch({
	        type:"ADD_TODO",
	        payload:res,
	      })
	    })
      
    }
  }
}


const Classify = connect(mapStateToProps,mapDispatchToProps)(ClassifyUI);
export default Classify;