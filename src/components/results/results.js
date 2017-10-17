import React from 'react';
import { connect } from 'react-redux';  
import { Link } from 'react-router-dom';
import { Pagination } from 'react-bootstrap';

/****************************************************************************************/
class SearchResults extends React.Component {
	/****************************************/
	constructor(props) {
		super(props);

		this.state = {
			activePage: 1,
			totalPages: 0
		};
		
		setTimeout(function(){document.getElementById('spinner-holder').style.display = 'none';},700);

		this.handlePaging = this.handlePaging.bind(this);
	}
	/****************************************/
	

	/****************************************/
	//componentwillrecieveprops will run after the mapstatetoprops connect is done and we will have rfps data
	componentWillReceiveProps(nextProps){
		let totalPages = 0;
		
		totalPages = Math.ceil(nextProps.rfps.length / 5);
		
		this.setState({
			totalPages: totalPages
		});
	}
	/****************************************/


// 1: 5, 0
// 2: 10, 5
// 3: 15, 10
	/****************************************/
	build_results(){
		let rfpLink = '';
		let pagingEnd = this.state.activePage * 5;
		let pagingStart = pagingEnd - 5;

		//arrow function allows us to use 'this'
		if(this.props.rfps.length > 0){
			rfpLink = this.props.rfps.map((rfp,index) => {
				if(index >= pagingStart && index < pagingEnd ){
					return(<div key={rfp.id}><Link to={`/rfp/${rfp.id}`}>{rfp.subject}</Link></div>);
				}
				else{
					return('');
				}
			});
		}

		return rfpLink;
	}
	/****************************************/


	/****************************************/
	handlePaging(eventKey){
		this.setState({
			activePage: eventKey
		});
	}
	/****************************************/


	/****************************************/
	render() {
		return (
			<div className="">
				{this.props.rfps.length === 0 ? 'Nothing Found' : 'Found '+this.props.rfps.length+' matches'}
				
				<div className="results-holder">
					{this.build_results()}
				</div>
				
				<Pagination prev next ellipsis boundaryLinks items={this.state.totalPages} maxButtons={10} activePage={this.state.activePage} onSelect={this.handlePaging} />
			</div>
		);
	}
	/****************************************/
}
/****************************************************************************************/


/****************************************************************************************/
function mapStateToProps(state) {	
	return {
		rfps: state.rfps
	};
}
/****************************************************************************************/

export default connect(mapStateToProps)(SearchResults)
