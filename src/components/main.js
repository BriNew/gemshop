import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Provider} from "react-redux";
import {Home} from './home';
import {Story} from './story';
import {Photos} from './photos';
import {ContactMain} from './contactmain';
import {Museum} from './museum';
import {store} from "./store";
import {Rocks} from "./rocks";
import {Authentication} from "./authentication";

export class Main extends React.Component {
	render() {
		return(
			<div>
				  <main>
				    <Switch>
				      <Route exact path='/' component={Home}/>
				      <Route path='/about' component={Story}/>
				      <Route path='/photos' component={Photos}/>
				      <Route path='/museum' component={Museum}/>
				      <Route path='/contactmain' component={ContactMain}/>
				      <Route path='/rocks' component={Rocks}/>
				      <Route path='/authentication' component={Authentication}/>
				    </Switch>
				  </main>
				</div>
		);
	}
};
