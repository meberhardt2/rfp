import React from 'react';
import { Link } from 'react-router-dom';

export default class ResultItem extends React.Component {
    
    render() {
		//console.log(this.props);
		
        return (
			<div key={this.props.id}>
				<Link to={`/rfp/${this.props.id}`}>{this.props.subject} ({this.props.category})</Link>
			</div>
		);
	}
}
	