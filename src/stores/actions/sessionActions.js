import * as types from 'stores/actions/actionTypes';
import SessionApi from 'api/SessionApi';

export function loadSessionSuccess(data) {
	return {type: types.LOAD_SESSION_SUCCESS, data};
}

export function loadSession() {
	// make async call to api, handle promise, dispatch action when promise is resolved
	return function(dispatch) {
		return SessionApi.getSessionData().then(data => {
			dispatch(loadSessionSuccess(data));
		}).catch(error => {
			throw(error);
		});
	};
}




