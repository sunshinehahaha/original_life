export default function(state=[],action){
	switch(action.type){
		case "FRUIT_DATA":
			var newS = [...state];
			newS = action.payload;
			return newS;
		default:
			return state;
	}
}