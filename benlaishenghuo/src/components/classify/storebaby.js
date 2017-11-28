import React,{Component} from 'react';
import './sass/storebaby.css';
import {connect} from 'react-redux';
import axios from 'axios';

class StorebabyUI extends Component{
	constructor(){
		super();
	}
	componentDidMount(){
		this.props.getData();
	}
	render(){
		var props = this.props;
	    var temp = props.storeList.data?props.storeList.data:[]
	    // console.log(temp.object);
	    var temp2=temp.object ? temp.object:[];
	    console.log(temp2.category);
	    var temp3=temp2.category ? temp2.category:[];
	    // console.log(temp3[0].children);
	    var temp1 = temp3 ? temp3:[];
	    console.log(temp1);
	    // var temp5 = temp1[0]?temp1[0]:[];
	    // var temp4 = temp5.children ? temp5.children : [];
	    // console.log(temp4);
		return(
				<div className = "right_storebaby">
						<h2>全部镇店之宝</h2>
						<div>
							{
								temp1.map((item,index)=>{
									return (
										<div key={item.sysNo}>
											<p className="recommend">{item.name}</p>
											<ul className="storeUl">
											{
												item.children.map((item1,index1)=>{
													return (
														<li key={item1.sysNo} className="storeLi">
															<img src={item1.imgUrl}/>
															<span className="font">{item1.name}</span>
														</li>
													)
												})
											}
											</ul>
										</div>

									)
								})
								
							}
							
						</div>
				</div>
			)
	}
}

const mapStateToProps = (state)=>{
	return {
		storeList:state.storeList
	}
}

const mapDispatchToProps = (dispacth)=>{
	return {
		getData:function(data){
			axios.get("/showCategoryMore")
			.then((res)=>{
				dispacth({
					type:"STORE_BABY",
					payload:res
				})
			})
		}
	}
}

const Storebaby = connect(mapStateToProps,mapDispatchToProps)(StorebabyUI);
export default Storebaby;