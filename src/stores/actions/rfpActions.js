import * as types from 'stores/actions/actionTypes';
import RFPApi from 'api/RFPApi';

/****************************************************************************************/
export function searchRFPsSuccess(data) {
	return {type: types.SEARCH_RFPS_SUCCESS, data};
}
/****************************************************************************************/


/****************************************************************************************/
export function searchRFPs(searchData) {
	// make async call to api, handle promise, dispatch action when promise is resolved
	return function(dispatch) {
		return RFPApi.searchRFPs(searchData).then(data => {
			dispatch(searchRFPsSuccess(data));
		}).catch(error => {
			throw(error);
		});
	};
}
/****************************************************************************************/

