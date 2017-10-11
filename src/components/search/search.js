import React from 'react';
import {connect} from 'react-redux'; 
import {withRouter} from "react-router-dom";
import {bindActionCreators} from 'redux';
import * as rfpActions from 'stores/actions/rfpActions';
import * as searchFormActions from 'stores/actions/searchFormActions';

import RFPForm from 'components/common/rfpForm.js';

/****************************************************************************************/
class SearchForm extends React.Component {
	/****************************************/
	constructor(props) {
		super(props);

		//set state to what we get from mapstatetoprops
		//on first load it will be an empty object
		//after a search is done, the form is saved in a store, so mapstatetoprops will return the form that we stored
		this.state = this.props.form;
		
		this.handleInputChange = this.handleInputChange.bind(this);

		this.handleSubmit = this.handleSubmit.bind(this);
	}
	/****************************************/

	
	/****************************************/
	handleInputChange(event) {
		
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		
		//dynamically add/update state, without having to type in every form element
		this.setState({
			[name]: value
		});
	}
	/****************************************/


	/****************************************/
	handleSubmit(event) {
		event.preventDefault();

		document.getElementById('spinner-holder').style.display = 'block';

		//send the form to the store to get sent to the api
		this.props.actions.searchRFPs(this.state);

		//save the form in a store, so that on navigating back the form can be repopulated with what they searched with
		this.props.actions.searchFormUpdated(this.state);
		
		//navigate to results page
		this.props.history.push("/results");
	}
	/****************************************/


	/****************************************/
	render() {
		//without the || '', on page load the subject state is undefined, so it becomes an uncontrolled component. once the handleInputChange fires, it's not
		//undefined anymore and becomes a controlled element and you get an error 
		return (
			<div className="">
				<form>
					<RFPForm 
						{...this.state} 
						inputChange={(event) => this.handleInputChange(event)} 
					/>

					<div className="form-group">
						<button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Search</button>
					</div>
				</form>
			</div>
		);
	}
	/****************************************/
}
/****************************************************************************************/



/****************************************************************************************/
function mapStateToProps(state, ownProps) {
	//on first load, state.rfpForm will be empty. so check for that and if so, return an empty object. the props that get sent to SearchForm will then be used in the contructor to set state
	if (Object.keys(state.searchForm).length > 0) {
		return {
			form: state.searchForm
		};
	}
	else{
		return { 
			form: {}
		};
	}
} 
/****************************************************************************************/


/****************************************************************************************/
function mapDispatchToProps(dispatch) {
	//spread operator combines both actions
	//otherwise it would be bindActionCreators(rfpActions,dispatch)
	return {
		actions: bindActionCreators({ ...rfpActions, ...searchFormActions }, dispatch)
	};
}
/****************************************************************************************/

//wrape the connect with withRouter, so we can trigger a route change when the form is submitted
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchForm));
