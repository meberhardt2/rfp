/****************************************************************************************/
class RFPsApi {

	/****************************************/
	static getRFPs() {
		//const headers = this.requestHeaders();
		const request = new Request('http://rfp.local/search', {
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


	/****************************************/
	static getRFP(id) {
		const request = new Request(`http://rfp.local/rfp/${id}`, {
			method: 'GET',
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		});

		return fetch(request).then(response => {
			return response.json();
		}).catch(error => {
			return error;
		});
	}	
	/****************************************/


	/****************************************/
	static searchRFPs(searchData) {
		const request = new Request('http://rfp.local/search', {
			method: 'PUT',
			headers: new Headers({
				'Content-Type': 'application/json'
			}), 
			body: JSON.stringify({data: searchData})
		});

		return fetch(request).then(response => {
			return response.json();
		}).catch(error => {
			return error;
		});
	}
	/****************************************/

	
	/****************************************/
	static addRFP(rfpForm) {
		const request = new Request(`http://rfp.local/rfp`, {
			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/json'
			}), 
			body: JSON.stringify(rfpForm)
		});

		return fetch(request).then(response => {
			return response.json();
		}).catch(error => {
			return error;
		});
	}	
	/****************************************/


	/****************************************/
	static updateRFP(rfp) {
		const request = new Request(`http://localhost:5000/api/v1/cats/${rfp.id}`, {
			method: 'PUT',
			headers: new Headers({
				'Content-Type': 'application/json'
			}), 
			body: JSON.stringify({rfp: rfp})
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

export default RFPsApi;