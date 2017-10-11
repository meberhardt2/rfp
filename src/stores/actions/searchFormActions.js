import * as types from 'stores/actions/actionTypes';

/****************************************************************************************/
export function searchFormUpdatedSuccess(formData) {
	return {type: types.SEARCH_FORM_CHANGE, formData};
}
/****************************************************************************************/


/****************************************************************************************/
export function searchFormUpdated(formData) {
	// make async call to api, handle promise, dispatch action when promise is resolved
	return function(dispatch) {
		dispatch(searchFormUpdatedSuccess(formData));
	};
}
/****************************************************************************************/

