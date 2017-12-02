import React,{Component} from 'react';
import './sass/cart.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
} from 'react-router-dom';

export default class Cart extends Component{
	constructor(){
		super();
		this.state = {
			cartList:[],
		}
		this.singleOne = this.singleOne.bind(this);
		this.selectAll = this.selectAll.bind(this);
		this.delInfo = this.delInfo.bind(this);
		this.reduce = this.reduce.bind(this);
		this.calcuTotalPrice = this.calcuTotalPrice.bind(this);
		this.add = this.add.bind(this);
	}
	componentDidMount(){
		this.showCart();
	}
	showCart(){
		console.log("showCart");
		console.log(this);
		var that = this;
		axios.get('/api/showCart')
		.then((res)=>{
			console.log(res);
			console.log(res.data);
			if(res.data.code!=1){
				that.props.history.push('/my');
				return;
			}
			that.state.cartList = res.data.data;
			that.setState({
				cartList:that.state.cartList
			})
			console.log(that.state.cartList );

		})
	}
	calcuTotalPrice(){
		var a = document.querySelectorAll('.cart_main_ipt');
		document.querySelector('#total').innerHTML = 0;
			for(var i=0;i<a.length;i++){
				if(a[i].checked === true){
					var totalPrice = parseFloat(document.querySelector('#total').innerHTML);
					var curPrice = parseFloat(a[i].parentNode.nextSibling.nextSibling.lastChild.firstChild.lastChild.innerHTML);
					var curNum = parseFloat(a[i].parentNode.nextSibling.nextSibling.lastChild.firstChild.nextSibling.firstChild.nextSibling.innerHTML);
					var curTotalPrice = curPrice*curNum;
					// 
					totalPrice +=curTotalPrice;
					console.log(curTotalPrice);
					document.querySelector('#total').innerHTML=totalPrice;
					console.log(totalPrice);		
				}	
		}				
	}
		
			
	singleOne(e){
		
		this.calcuTotalPrice();
		var checkedCount = 0;
		var arrSingle = document.querySelectorAll('.cart_main_ipt');
		var allCount = arrSingle.length;
		for(var i=0;i<arrSingle.length;i++){
			if(arrSingle[i].checked === true){
				checkedCount++;
			}else{
				checkedCount--;
				if(checkedCount<0){
					checkedCount = 0;
				}
			}
			document.getElementById('allSelect').checked = allCount===checkedCount?true:false;
		}

	}
	selectAll(){
		var totalPrice = 0;
		var temp = document.getElementById('allSelect').checked;
		console.log(temp);
		var arrSingle = document.querySelectorAll('.cart_main_ipt');
		var allCount = arrSingle.length;
		for(var i=0;i<arrSingle.length;i++){
			arrSingle[i].checked = temp;		
		}
		this.calcuTotalPrice();
	
	}
	delInfo(id){
		axios.post('/api/delInfo',{
			id:id
		}).then((res)=>{
			console.log(res);
			if(res.data.code!=1){
				alert(res.data.message);
				return;
			}
			alert("删除成功");
			window.location.reload(false);
		})
	}
	reduce(e){
		var num = parseFloat(e.currentTarget.nextSibling.innerHTML);
		num--;
		if(num<=1){
			num=1;
		}
		e.currentTarget.nextSibling.innerHTML = num;
		this.calcuTotalPrice();
	}
	add(e){
		var num = parseFloat(e.currentTarget.previousSibling.innerHTML);
		num++;
		e.currentTarget.previousSibling.innerHTML = num;
		this.calcuTotalPrice();
	}
	render (){
		return (
			<div id = "cart">
				<header className = "cart_header">
					<NavLink to = "/home">
						<i className ="iconfont cart_header_icon">&#xe607;</i>
					</NavLink>			
					<h2>购物车</h2>
					<span>编辑</span>
				</header>
				<main className = "cart_main">
					{
						this.state.cartList.map((item,index)=>{
							return (
								<ul key={index}>
									<li className = "cart_choose">
										<input type = "checkbox" className = "cart_main_ipt" onClick={this.singleOne}/>
									</li>
									<li><img src={item.imgUrl} className = "cart_pic"/></li>
									<li className = "cart_name">
										<p className = "cart_name_name"><span className="cart_font">商品名：</span>{item.name}</p>
										<div className = "cart_name_mon">
											<p className = "cart_name_onecost">
												<span className="cart_font">单价：￥</span>
												<span id="price">{item.price}</span>
											</p>
											<div className = "cart_cal">
												<div onClick={this.reduce}>-</div>
												<div>1</div>
												<div onClick={this.add}>+</div>
											</div>
											<p className="del" onClick={()=>{this.delInfo(item._id)}}>删除</p>
										</div>
									</li>
								</ul>
							)
						})
						
					}
					
				</main>
				<footer className = "cart_footer">
					
					<p className = "cart_chooseall" >
						<input type = "checkbox" onClick={this.selectAll} id="allSelect" />全选
					</p>
					<p className = "cart_allcost">合计：<span id="total">0</span></p>
					<p className = "cart_pay">去结算(免运费)</p>
				</footer>
			</div>
		)
	}

	
}