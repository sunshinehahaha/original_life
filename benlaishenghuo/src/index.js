import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import reducer from './reducers/index.js';
import {Provider} from 'react-redux';
const store=createStore(reducer,{});
 
function renderPage(){
	ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
}

renderPage();
store.subscribe(renderPage);

registerServiceWorker();
