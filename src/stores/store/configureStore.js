import {createStore, applyMiddleware} from 'redux';  
import rootReducer from 'stores/reducers/rootReducer';  
import thunk from 'redux-thunk';

export default function configureStore() {  
	return createStore(
		rootReducer,
		applyMiddleware(thunk)
	);
}