import * as types from 'stores/actions/actionTypes';
import RFPApi from 'api/RFPApi';

/****************************************************************************************/
export function rfpFormUpdatedSuccess(formData) {
	return {type: types.RFP_FORM_CHANGE, formData};
}
export function rfpFormUpdated(formData) {
	// make async call to api, handle promise, dispatch action when promise is resolved
	return function(dispatch) {
		dispatch(rfpFormUpdatedSuccess(formData));
	};
}
/****************************************************************************************/


/****************************************************************************************/
export function rfpFormAddSuccess(formData) {
	return {type: types.RFP_FORM_ADD_SUCCESS, formData};
}
export function rfpFormAdd(formData) {
	return function(dispatch) {
		return RFPApi.addRFP(formData).then(formData => {
			dispatch(rfpFormAddSuccess(formData));
		}).catch(error => {
			throw(error);
		});
	};
}
/****************************************************************************************/

