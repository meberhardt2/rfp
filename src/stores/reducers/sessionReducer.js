import * as types from 'stores/actions/actionTypes';
import initialState from 'stores/reducers/initialState';


export default function sessionReducer(state = initialState.session, action) {
	switch(action.type) {
		case types.LOAD_SESSION_SUCCESS:
			//return whatever data you get back from the api, found in the specific Actions.js file, in this case sessionActions
			return action.data

		default: 
			return state;
	}
}