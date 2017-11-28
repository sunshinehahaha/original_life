export default function(state=[],action){
		// console.log(action);
		var newS;
		switch(action.type){
			case "STORE_BABY":
				newS = [...state];
				newS = action.payload;
				console.log(newS);
				return newS;
			default:
				return state;
		}
}