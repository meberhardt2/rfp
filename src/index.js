import React from 'react';
//import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';

import 'react-notifications/lib/notifications.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'css/style.css';

import configureStore from 'stores/store/configureStore';
import {loadSession} from 'stores/actions/sessionActions';
import App from 'app.js';

const store = configureStore();

store.dispatch(loadSession());


ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)
