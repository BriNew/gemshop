import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import {Header} from './components/header';
import {App} from './components/app';
import './index.css';

ReactDOM.render(
	<div>
		<Header />
		<BrowserRouter>
    		<App />
  		</BrowserRouter>
  	</div>,
	document.getElementById('root')
);






