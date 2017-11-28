import {combineReducers} from 'redux';
import listReducer from './listReducer';
import storebabyReducer from './storebabyReducer';
import fruitListReducer from './fruitReducer';
const reducer = combineReducers({
	list:listReducer,
	storeList:storebabyReducer,
	fruitList:fruitListReducer
})


export default reducer;