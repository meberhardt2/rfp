import React from 'react';
import { Link } from 'react-router-dom';

/****************************************************************************************/
export default class Topper extends React.Component {

	/****************************************/
	constructor(props) {
		super(props);

		this.state = {
			currentID: this.props.currentID,
			total_results: this.props.rfps.length,
			currentPosition: 0,
			previousIndex: 0,
			nextIndex: 0
		}

		this.computeArrayInfo = this.computeArrayInfo.bind(this);
		this.renderBackFoward = this.renderBackFoward.bind(this);
	}
	/****************************************/


	/****************************************/
	componentDidMount(){
		this.computeArrayInfo();
	}
	/****************************************/


	/****************************************/
	//when the route changes, this component will get updated, constructor is not called again
	//because of prop changes this gets called a few times. make sure to only run it when it's fired the correct time
	componentWillReceiveProps(newProps){
		if(newProps.currentID !== this.props.currentID){
			//setstate is asynchronous. so call computeArrayInfo after it actually runs, otherwise computearrayinfo will be run too soon
			this.setState({
					currentID: newProps.currentID
				},() => {this.computeArrayInfo();}
			);
		}
	}
	/****************************************/
	

	/****************************************/
	computeArrayInfo(){
		let currentID = this.state.currentID;
		let total = this.props.rfps.length;
		let currentPosition = 0;
		let previousIndex = 0;
		let nextIndex = 0;

		this.props.rfps.forEach(function(rfp,index) {
			if(rfp.id === currentID){
				currentPosition = index + 1;

				if(index > 0){
					previousIndex = index - 1;
				}
				if(index < (total - 1)){
					nextIndex = index + 1;
				}
			}
		});

		this.setState({
			currentPosition: currentPosition,
			previousIndex: previousIndex,
			nextIndex: nextIndex
		});
	}
	/****************************************/


	/****************************************/
	renderBackFoward(){
		//console.log('using');
		//console.log(this.state)
		return (
			<div className="back-forward-holder">
				{this.props.rfps.length > 0 && this.state.currentPosition !== 1 ? <Link to={`/rfp/${this.props.rfps[this.state.previousIndex].id}`}><span className="glyphicon glyphicon-chevron-left"></span></Link> : <span className="glyphicon glyphicon-chevron-left"></span>}
				&nbsp;
				{this.props.rfps.length > 0 && this.state.currentPosition !== this.props.rfps.length ? <Link to={`/rfp/${this.props.rfps[this.state.nextIndex].id}`}><span className="glyphicon glyphicon-chevron-right"></span></Link> : <span className="glyphicon glyphicon-chevron-right"></span>}
			</div>
		);
	}
	/****************************************/


	/****************************************/
	render() {
		return (
			<div className="rfp-topper">
				{this.renderBackFoward()}
				{this.state.currentPosition}/{this.state.total_results}
			</div>
		);
	}
	/****************************************/
	
}
/****************************************************************************************/
