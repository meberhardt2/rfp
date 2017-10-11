/****************************************************************************************/
class SessionApi {

	/****************************************/
	static getSessionData() {
		//const headers = this.requestHeaders();
		const request = new Request('http://rfp.local', {
			method: 'GET',
			//headers: headers
		});

		return fetch(request).then(response => {
			return response.json();
		}).catch(error => {
			return error;
		});
	}
	/****************************************/

}
/****************************************************************************************/

export default SessionApi;