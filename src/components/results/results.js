import React from 'react';
import {connect} from 'react-redux';  
import { Link } from 'react-router-dom';

/****************************************************************************************/
class SearchResults extends React.Component {
	/****************************************/
	constructor(props) {
		super(props);
		this.state = {};

		setTimeout(function(){document.getElementById('spinner-holder').style.display = 'none';},700);
	}
	/****************************************/
	
	
	/****************************************/
	render() {
		return (
			<div className="">
				search results
				{this.props.rfps.map(rfp =>
					<div key={rfp.id}>
						<Link to={`/rfp/${rfp.id}`}>{rfp.subject}</Link>
					</div>
				)}
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
