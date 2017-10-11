import * as types from 'stores/actions/actionTypes';
import initialState from 'stores/reducers/initialState';


/****************************************************************************************/
export default function searchFormReducer(state = initialState.searchForm, action) {
	switch(action.type) {
		case types.SEARCH_FORM_CHANGE:
			//return whatever data you get back from the api, found in the specific Actions.js file, in this case rfpsActions
			return action.formData

		default: 
			return state;
	}
}
/****************************************************************************************/
