export default function(state=[],action){
		console.log(action);
		var newS;
		switch(action.type){
			case "ADD_TODO":
				newS = [...state];
				newS=action.payload;
				console.log(newS);
				return newS;
			// case "REMOVE_TODO":
			// 	newS = [...state];
			// 	newS.splice(action.payload,1);
			// 	return newS;
			default:
				return state;
		}
}