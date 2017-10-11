import * as types from 'stores/actions/actionTypes';
import initialState from 'stores/reducers/initialState';


/****************************************************************************************/
export default function rfpsReducer(state = initialState.rfps, action) {
	switch(action.type) {
		case types.SEARCH_RFPS_SUCCESS:
			//return whatever data you get back from the api, found in the specific Actions.js file, in this case rfpsActions
			return action.data.rfps

		default: 
			return state;
	}
}
/****************************************************************************************/
