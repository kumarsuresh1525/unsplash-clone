import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/app';
import Header from './components/header';

const Layout = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={App} />
		</Switch>
	</Router>
);

ReactDOM.render(
	<div>
		<Header />
		<Layout />
	</div>,
	document.getElementById('app')
);
