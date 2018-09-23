import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { IndexRoute } from 'react-router';

import registerServiceWorker from './registerServiceWorker';
import Layout from "./components/Layout";
import LayoutSet from "./pages/layout-set";
import BySku from "./pages/by-sku";
import ByTitle from "./pages/by-title";



const app = document.getElementById('root');

ReactDOM.render(
	<Router>
		<div>
			<Route exact path="/" component={Layout} />
            <Route path="/by-title" component={ByTitle}/>
            <Route path="/by-sku" component={BySku} />
	    </div>
	</Router>,
	 app);
registerServiceWorker()
