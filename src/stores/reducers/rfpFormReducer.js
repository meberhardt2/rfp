import * as types from 'stores/actions/actionTypes';
import initialState from 'stores/reducers/initialState';


/****************************************************************************************/
export default function searchFormReducer(state = initialState.rfpForm, action) {
	switch(action.type) {
		case types.RFP_FORM_CHANGE:
			//return whatever data you get back from the api, found in the specific Actions.js file, in this case rfpsActions
			return action.formData
		
		case types.RFP_FORM_ADD_SUCCESS:
			var tempState = Object.assign({}, action.formData);
			tempState.question = '';
			tempState.answer = '';

			return tempState

		default: 
			return state;
	}
}
/****************************************************************************************/
