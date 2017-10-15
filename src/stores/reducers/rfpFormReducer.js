import Moment from 'moment';
import * as types from 'stores/actions/actionTypes';
import initialState from 'stores/reducers/initialState';


/****************************************************************************************/
export default function searchFormReducer(state = initialState.rfpForm, action) {
	switch(action.type) {
		case types.RFP_FORM_CHANGE:
			//return whatever data you get back from the api, found in the specific Actions.js file, in this case rfpsActions
			return action.formData;
		
		case types.RFP_FORM_ADD_SUCCESS:
			var tempState = Object.assign({}, action.formData);
			tempState.question = '';
			tempState.answer = '';

			//need to convert any date values to a moment object
			if(tempState.stamp !== '' && typeof tempState.stamp !== 'undefined'){
				tempState.stamp = Moment(tempState.stamp);
			}
			if(tempState.date_modified !== '' && typeof tempState.date_modified !== 'undefined'){
				tempState.date_modified = Moment(tempState.date_modified);
			}

			return tempState;

		default: 
			return state;
	}
}
/****************************************************************************************/
