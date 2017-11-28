import React,{Component} from 'react';
import Header from '../others/header.js';
import {connect} from 'react-redux';
import './sass/classify.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
} from 'react-router-dom';

class ClassifyUI extends Component{
	constructor(){
		super();
	}
	componentDidMount() {
	    this.props.getData();
  	}
	render(){
	    var props = this.props;
	    console.log(props);
	    // console.log(JSON.Stringify(props.list.data));
	    // console.log(props.list.data['object']);
	    return (
	        <div className="classify">
	        	<Header/>
	            <div className="left">
	          		<ul>
	          			<li><NavLink to = "/Storebaby">镇店之宝</NavLink></li>
	          			<li><NavLink to = "/Storebaby">水果</NavLink></li>
	          			<li><NavLink to = "/Storebaby">蔬菜</NavLink></li>
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
					
				</div>

	        </div>
    )
  }
}

const mapStateToProps = (state)=>{
	console.log(state);
	return {
	    list:state.list
	}
}

const mapDispatchToProps = (dispatch)=>{
  return {
    getData:function(data){
    	axios.get("/showCategoryMore")
	    .then(function(res){
	      console.log(res);
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