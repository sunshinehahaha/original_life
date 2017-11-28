import React,{Component} from 'react';




class Vegetables extends Component{
	constructor(){
		super();
	}
	render(){
		return(
				<div className = "right_storebaby">
					<div>
						蔬菜
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
		
	}
}

export default Vegetables;