import React,{Component} from 'react';




class Fruit extends Component{
	constructor(){
		super();
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
		// axios.get('/home/getDefaultKey')
		// .then((res)=>{
		// 	console.log(res);
		// })
	}
}

export default Fruit;