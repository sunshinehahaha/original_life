import React,{ Component } from 'react';
import './sass/header.css';
// import 'http://api.map.baidu.com/api?v=2.0&ak=HLzD8mRBHAdwq2jnLUxbHsUhorp9mbr1';
export default class Header extends Component{
	constructor(){
		super();
		// this.location = this.location.bind(this);
	};
	// location(){
	// 	var map = new BMap.Map("allmap");
	//     var point = new BMap.Point(116.331398,39.897445);
	//     map.centerAndZoom(point,12);

	//     function myFun(result){
	//         var cityName = result.name;
	//         map.setCenter(cityName);
	//         alert("当前定位城市:"+cityName);
	//     }
	//     var myCity = new BMap.LocalCity();
	//     myCity.get(myFun);
	// };
	render(){
		return (
			<div className="header">
				<span className="address" id="allmap">大连</span>
				<div className="search">
					<input type="text" placeholder="优级果148元10斤" />
					<span className="mirror"><i className ="iconfont">&#xe60b;</i></span>
					<span className="cancel"><i className ="iconfont">&#xe713;</i></span>
				</div>
			</div>
		)
	}
	

	
}