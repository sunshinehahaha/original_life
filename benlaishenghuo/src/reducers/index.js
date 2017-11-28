import {combineReducers} from 'redux';
import listReducer from './listReducer';
import storebabyReducer from './storebabyReducer';
const reducer = combineReducers({
	list:listReducer,
	storeList:storebabyReducer
	// storeList:storeListReducer
})


export default reducer;