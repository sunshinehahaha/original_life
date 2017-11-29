export default function(state=[],action){
	console.log(action.payload);
	var newS;
	switch(action.type){
		case "POST_SESSION":
			newS = [...state];
			newS=action.payload;
			return newS;
		case "CHECK_SESSION":
			newS = [...state];
			newS=action.payload;
			return newS;
		default:
			return state;
	}
}
