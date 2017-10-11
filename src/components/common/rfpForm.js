import React from 'react';

/****************************************************************************************/
class RFPForm extends React.Component {  
	/****************************************/
	/*
	constructor(props) {
		super(props);

		this.state = this.props;
	}
	*/
	/****************************************/

	/****************************************/
	render() {
		return (
			<div>
				<div className="form-group row">
					<label htmlFor="category" className="col-sm-2 col-form-label">Category:</label>
					<div className="col-sm-6">
						<input type="text" className="form-control" id="category" name="category" value={this.props.category || ''} onChange={this.props.inputChange} />
					</div>
				</div>

				<div className="form-group row">
					<label htmlFor="subject" className="col-sm-2 col-form-label">Subject: </label>
					<div className="col-sm-6">
						<input type="text" className="form-control" id="subject" name="subject" value={this.props.subject || ''} onChange={this.props.inputChange} />
					</div>
				</div>

				<div className="form-group row">
					<label htmlFor="source" className="col-sm-2 col-form-label">Source: </label>
					<div className="col-sm-6">
						<input type="text" className="form-control" id="source" name="source" value={this.props.source || ''} onChange={this.props.inputChange} />
					</div>
				</div>

				<div className="form-group row">
					<label htmlFor="stamp" className="col-sm-2 col-form-label">Date: </label>
					<div className="col-sm-6">
						<input type="text" className="form-control" id="stamp" name="stamp" value={this.props.stamp || ''} onChange={this.props.inputChange} />
					</div>
				</div>

				<div className="form-group row">
					<label htmlFor="date_modified" className="col-sm-2 col-form-label">Date Modified: </label>
					<div className="col-sm-6">
						<input type="text" className="form-control" id="date_modified" name="date_modified" value={this.props.date_modified || ''} onChange={this.props.inputChange} />
					</div>
				</div>

				<div className="form-group row">
					<label htmlFor="author" className="col-sm-2 col-form-label">Author: </label>
					<div className="col-sm-6">
						<input type="text" className="form-control" id="author" name="author" value={this.props.author || ''} onChange={this.props.inputChange} />
					</div>
				</div>
			</div>
		)
	}
	/****************************************/
}
/****************************************************************************************/

export default RFPForm;
