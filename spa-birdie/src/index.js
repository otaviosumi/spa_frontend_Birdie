import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, IndexRoute } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import Layout from "./components/Layout";
import LayoutSet from "./pages/layout-set";



const app = document.getElementById('root');

ReactDOM.render(
	<BrowserRouter>
		<Route path="/" component={Layout}>
			<Route path="layout-set" component={LayoutSet}></Route>
		</Route>
	</BrowserRouter>,
	 app);
registerServiceWorker();
