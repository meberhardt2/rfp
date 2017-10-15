import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';

import Nav from 'components/common/nav.js';
import Home from 'components/home/home.js';
import Results from 'components/results/results.js';
import RFP from 'components/rfp/rfp.js';

//eshint isn't yet supporting import. it still compiles
//import asyncComponent from "components/common/AsyncComponent";
//const AsyncResults = asyncComponent(() => import("components/results/results.js"));
//const AsyncRFP = asyncComponent(() => import("components/rfp/rfp.js"));

export default class App extends React.Component {
	render() {		
		return (
			<Router>
				<div className="jumbotron">
					<div className="main container">
						<Nav />
						<Switch>
							<Route exact path="/" component={Home}/>
							<Route exact path="/results" component={Results}/>
							<Route path="/rfp/:id" component={RFP}/>
						</Switch>
					</div>
					<NotificationContainer/>
				</div>   
			</Router>
	  	);
	}
}
