import React from 'react';  // duh
import ReactDOM from 'react-dom';  // this puts it on DOM
import { BrowserRouter as Router, withRouter } from 'react-router-dom'; // this is the router we used with add
import './sass/index.scss'; // they're using sass. Watch for this. 
import App from './App'; // default

const AppWithRouter = withRouter(App);  // a router object calling withRouter passing APP and replacing App in the render with the AppWithRouter

ReactDOM.render(
	<Router>
		<AppWithRouter />
	</Router>,
	document.getElementById('root')
);

// withrouter higher order component aloows you to get access to the history object's properties and the closest Route match. WR passes updated match location and history props to wrapped component whnever it renders. Ok a scope and access thing or something. 


//Basically this file just hosts the app, nothing magic going on here. But index.js is a magic name meaning it is kind of a default 