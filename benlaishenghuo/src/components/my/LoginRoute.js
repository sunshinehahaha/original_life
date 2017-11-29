import React from 'react';
import Login from './login.js';
import Regist from './regist.js';
import {
  Route
} from 'react-router-dom';

const LoginRoute = (props) => {
	// console.log(props);
	return (
		<div>
			<Route exact path={`${props.match.url}/login`} component={Login}/>
	        <Route exact path={`${props.match.url}/regist`} component = {Regist}/>
		</div>
	)
}

export default LoginRoute;