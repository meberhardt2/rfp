import React from 'react';
import { connect } from 'react-redux'; 
import { withRouter } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { NotificationManager } from 'react-notifications';
import * as rfpActions from 'stores/actions/rfpActions';
import * as rfpFormActions from 'stores/actions/rfpFormActions';

import RFPForm from 'components/common/rfpForm';

/****************************************************************************************/
class SearchAdd extends React.Component {
	/****************************************/
	constructor(props) {
		super(props);

		//set state to what we get from mapstatetoprops
		//on first load it will be an empty object
		//after a search is done, the form is saved in a store, so mapstatetoprops will return the form that we stored
		this.state = this.props.form;
		
		this.handleInputChange = this.handleInputChange.bind(this);
		this.search = this.search.bind(this);
		this.handleDateChange = this.handleDateChange.bind(this);
		this.handleModifiedDateChange = this.handleModifiedDateChange.bind(this);
		this.clearForm = this.clearForm.bind(this);
		this.addRFP = this.addRFP.bind(this);
	}
	/****************************************/


	/****************************************/
	//update state when mapstatetoprops is called on an add. the add will return the same form but clear out the question and answer
	componentWillReceiveProps(nextProps){
		if (Object.keys(nextProps.form).length > 0) {
			document.getElementById('spinner-holder').style.display = 'none';
			
			NotificationManager.success('RFP Question/answer added', 'Added!', 2000);

			this.setState(
				nextProps.form
			);
		}
	}
	/****************************************/


	/****************************************/
	handleDateChange(date) {
		this.setState({
			stamp:date
		});
	}
	/****************************************/


	/****************************************/
	handleModifiedDateChange(date) {
		this.setState({
			date_modified:date
		});
	}
	/****************************************/
	

	/****************************************/
	handleInputChange(event) {
		const target = event.target;
		const name = target.name;
		let value = '';

		if(target.type === 'checkbox'){
			if(target.checked){
				value = target.value;
			}
		}
		else{
			value = target.value;
		}
		//const value = target.type === 'checkbox' ? target.checked : target.value;

		//dynamically add/update state, without having to type in every form element
		this.setState({
			[name]: value
		});
	}
	/****************************************/


	/****************************************/
	search(event) {
		event.preventDefault();

		document.getElementById('spinner-holder').style.display = 'block';

		//send the form to the store to get sent to the api
		this.props.actions.searchRFPs(this.state);

		//save the form in a store, so that on navigating back the form can be repopulated with what they searched with
		this.props.actions.rfpFormUpdated(this.state);
		
		//navigate to results page
		this.props.history.push("/results");
	}
	/****************************************/


	/****************************************/
	clearForm(event){
		event.preventDefault();

		let tempState = Object.assign({}, this.state);

		for (let key in tempState){
			tempState[key] = '';
		}

		this.setState(tempState);
	}
	/****************************************/


	/****************************************/
	addRFP(event){
		event.preventDefault();

		document.getElementById('spinner-holder').style.display = 'block';

		this.props.actions.rfpFormAdd(this.state);
	}
	/****************************************/
	

	/****************************************/
	render() {
		//without the || '', on page load the subject state is undefined, so it becomes an uncontrolled component. once the handleInputChange fires, it's not
		//undefined anymore and becomes a controlled element and you get an error 
		return (
			<div className="">
				<form>
					<div className="form-group text-center button-holder">
						<button type="button" className="btn btn-primary" onClick={this.search}>Search</button>
						<button type="button" className="btn btn-primary" onClick={this.clearForm}>Clear</button>
						<button type="button" className="btn btn-primary" onClick={this.addRFP}>Add</button>
					</div>

					<hr size="1" width="70%" />

					<RFPForm 
						{...this.state} 
						inputChange={(event) => this.handleInputChange(event)} 
						dateChange={(date) => this.handleDateChange(date)}
						dateModifiedChange={(date) => this.handleModifiedDateChange(date)}
					/>
				</form>
			</div>
		);
	}
	/****************************************/
}
/****************************************************************************************/


/****************************************************************************************/
function mapStateToProps(state, ownProps) {
	//on first load, state.rfpForm will be empty. so check for that and if so, return an empty object. the props that get sent to SearchAdd will then be used in the contructor to set state
	if (Object.keys(state.rfpForm).length > 0) {
		return {
			form: state.rfpForm
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
		actions: bindActionCreators({ ...rfpActions, ...rfpFormActions }, dispatch)
	};
}
/****************************************************************************************/

//wrape the connect with withRouter, so we can trigger a route change when the form is submitted
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchAdd));
