/* global hlghtta */

import React from 'react';
import {connect} from 'react-redux';
import { NotificationManager } from 'react-notifications';
import Moment from 'moment';
import RFPApi from 'api/RFPApi';
import RFPForm from 'components/common/rfpForm';
import Topper from 'components/rfp/topper';

/****************************************************************************************/
class RFP extends React.Component {
	
	/****************************************/
	constructor(props) {
		super(props);
		this.state = {};

		this.getRFP = this.getRFP.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleDateChange = this.handleDateChange.bind(this);
		this.handleModifiedDateChange = this.handleModifiedDateChange.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		
		this.getRFP(this.props.rfpid);
	}
	/****************************************/


	/****************************************/
	//child component topper has a link in it that changes /rfp/1 to /rfp/2. componentwillreceiveprops gets fired when that link is clicked
	componentWillReceiveProps(nextProps){
		//console.log(nextProps);
		this.getRFP(nextProps.rfpid);
	}
	/****************************************/


	/****************************************/
	getRFP(rfpid){
		document.getElementById('spinner-holder').style.display = 'block';
		
		RFPApi.getRFP(rfpid).then((data) => {
			//need to convert any date values to a moment object
			if(data.stamp !== '' && typeof data.stamp !== 'undefined'){
				data.stamp = Moment(data.stamp);
			}
			if(data.date_modified !== '' && typeof data.date_modified !== 'undefined'){
				data.date_modified = Moment(data.date_modified);
			}
			this.setState(data);

			//clear out the object that is storing form changes
			this.setState({
				rfpUpdates: {}
			});

			document.getElementById('spinner-holder').style.display = 'none';
			
			//if they entered something into the answer field to search on it, highlight it
			//the highlight is a seperate function loaded in the index
			if(typeof this.props.rfpForm.answer !== 'undefined' && this.props.rfpForm.answer !== ''){
				let div = document.getElementById('highlight-div');
				let ta = document.getElementById('answer');
				//g for global, i for case insensative
				let regexp = new RegExp(this.props.rfpForm.answer, "gi");
				let patterns = {
					"pattern1": {"pattern": regexp, "css": "mark-style"},
				}
				hlghtta(div, ta, patterns);
			}
		});
	} 
	/****************************************/


	/****************************************/
	handleUpdate(){
		document.getElementById('spinner-holder').style.display = 'block';

		RFPApi.updateRFP(this.state.id,this.state.rfpUpdates).then((data) => {
			document.getElementById('spinner-holder').style.display = 'none';
			NotificationManager.success('RFP Updated', 'Updated!', 2000);
		});
	}
	/****************************************/


	/****************************************/
	handleDateChange(date) {		
		let prevUpdates = null;

		if(typeof this.state.rfpUpdates !== 'undefined'){
			prevUpdates = this.state.rfpUpdates;
			prevUpdates.name = date;
		}
		else{
			prevUpdates.stamp = date;
		}

		this.setState({
			rfpUpdates: prevUpdates,
			stamp:date
		});
	}
	/****************************************/


	/****************************************/
	handleModifiedDateChange(date) {
		let prevUpdates = null;

		if(typeof this.state.rfpUpdates !== 'undefined'){
			prevUpdates = this.state.rfpUpdates;
			prevUpdates.name = date;
		}
		else{
			prevUpdates.date_modified = date;
		}

		this.setState({
			rfpUpdates: prevUpdates,
			date_modified:date
		});
	}
	/****************************************/
	

	/****************************************/
	handleInputChange(event) {
		const target = event.target;
		const name = target.name;

		let prevUpdates = null;
		let value = '';
		
		if(target.type === 'checkbox'){
			if(target.checked){
				value = target.value;
			}
		}
		else{
			value = target.value;
		}

		if(typeof this.state.rfpUpdates !== 'undefined'){
			prevUpdates = this.state.rfpUpdates;
			prevUpdates[name] = value;
		}
		else{
			prevUpdates = {
				[name]: value
			}
		}

		//dynamically add/update state, without having to type in every form element
		//store just the updates, so that we're only sending updated fields to the db
		//that will come in handy in other projects to only run an update statement on updated fields
		//also update the normal state, this is needed because we're sending down the state to the form component and the values are set to the state
		this.setState({
			rfpUpdates: prevUpdates,
			[name]: value
		},function(){
			console.log(this.state);
		});
	}
	/****************************************/
	

	/****************************************/
	render() {
		return (
			<div className="">
				<form>
					<div className="form-group text-center button-holder">
						<button type="button" className="btn btn-primary" onClick={this.handleUpdate}>Update</button>
					</div>

					<hr size="1" width="70%" />

					<Topper currentID={this.props.rfpid} rfps={this.props.rfps} />

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
//id gets passed in the ownProps that we set in the route. /rfp/:id
function mapStateToProps(state, ownProps) {
	return{
		rfpid: ownProps.match.params.id,
		rfps: state.rfps,
		rfpForm: state.rfpForm
	}
	/*
	let rfp = {};

	const rfpId = ownProps.match.params.id;

	if (state.rfps.length > 0) {
		let test = state.rfps.find((rfp) => parseInt(rfp.id,10) === parseInt(rfpId,10));
		rfp = Object.assign({}, test);
	}

	return {rfp: rfp};
	*/
}
/****************************************************************************************/


export default connect(mapStateToProps)(RFP);
