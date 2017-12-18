import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import {Header} from './components/header';
import {App} from './components/app';
import {ContactMain} from './components/contactmain';
import {Slideshow} from './components/slideshow';


ReactDOM.render(
	<div>
		<Header />
		<BrowserRouter>
    		<App />
  		</BrowserRouter>
  	</div>,
	document.getElementById('root')
);


// import React from 'react';
// import ReactDOM from 'react-dom';

// class Background extends React.Component {
//   constructor() {
//     super();

//     this.state = {

//     };
//   }

//   componentDidMount() {
//     fetch('http://localhost:8080/rocks')
//     .then(results => {
//     	return results.json();
//     }).then(data => {
//     	let pictures = data.rocks.map((data) => {
//     		return(
//     			<div >
//     				<p>{data.type}</p>
//     				<p>{data.origin}</p>
//     				<p>{data.size}</p>
//     				<p>{data.color}</p>
//     			</div>
//     			)
//     	})
//     	this.setState({rocks: pictures});
//     	console.log("state", this.state.pictures)
//     })
//   }

//   render() {
//   	return (
// 	<div>
// 		{this.state.rocks}
// 	</div>
//   		)
//   }
// }

// ReactDOM.render(
// 	<Background />,
// 	document.getElementById('root')
// 	);




