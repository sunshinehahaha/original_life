import {combineReducers} from 'redux';
import listReducer from './listReducer';
const reducer = combineReducers({
	list:listReducer
})


export default reducer;