import {combineReducers} from 'redux';
import listReducer from './listReducer';
import storebabyReducer from './storebabyReducer';
import fruitListReducer from './fruitReducer';
// import loginReducer from './loginReducer';
const reducer = combineReducers({
	list:listReducer,
	storeList:storebabyReducer,
	fruitList:fruitListReducer,
	// loginSession:loginReducer
})

export default reducer;