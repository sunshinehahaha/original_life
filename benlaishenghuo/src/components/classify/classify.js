import React,{Component} from 'react';
import Header from '../others/header.js';
import {connect} from 'react-redux';
import './sass/classify.css';

class ClassifyUI extends Component{
  render(){
    var props = this.props;
    return (
        <div className="classify">
        	<Header/>
            <div className="left">
          		<ul>
          			<li><a href="#">镇店之宝</a></li>
          			<li><a href="#">水果</a></li>
          			<li><a href="#">蔬菜</a></li>
          			<li><a href="#">肉禽蛋品</a></li>
          			<li><a href="#">水产海鲜</a></li>
          			<li><a href="#">熟食面点</a></li>
          			<li><a href="#">粮油副食</a></li>
          			<li><a href="#">烘焙乳品</a></li>
          			<li><a href="#">休闲食品</a></li>
          			<li><a href="#">酒水茶饮</a></li>
          			<li><a href="#">厨房用品</a></li>
          			<li><a href="#">礼品礼盒</a></li>
          			<li><a href="#">休闲食品</a></li>
          			<li><a href="#">酒水茶饮</a></li>
          			<li><a href="#">厨房用品</a></li>
          			<li><a href="#">礼品礼盒</a></li>
          		</ul>
            </div>
			<div className="right">
				
			</div>

        </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    list:state.list
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    addtodo:function(data){
      dispatch({
        type:"ADD_TODO",
        payload:data,
        // payload:document.getElementById('ipt').value
      })
    }
  }
}


const Classify = connect(mapStateToProps,mapDispatchToProps)(ClassifyUI);
export default Classify;