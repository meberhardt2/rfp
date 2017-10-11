import React from 'react';
import {connect} from 'react-redux';
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
			this.setState(data);

			document.getElementById('spinner-holder').style.display = 'none';
		});
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
	render() {
		return (
			<div className="">
				<Topper currentID={this.props.rfpid} rfps={this.props.rfps} />

				<form>
					<RFPForm 
						{...this.state} 
						inputChange={(event) => this.handleInputChange(event)} 
					/>

					<div className="form-group">
						<button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Update</button>
					</div>
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
		rfps: state.rfps
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
