import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

/****************************************************************************************/
class RFPForm extends React.Component {  

	/****************************************/
	render() {
		return (
			<div>
				<div className="form-group row">
					<label htmlFor="category" className="col-sm-2 col-form-label">Category:</label>
					<div className="col-sm-6">
						<input type="text" className="form-control" id="category" tabIndex="1" name="category" value={this.props.category || ''} onChange={this.props.inputChange} />
					</div>
					<div className="col-sm-4 checkboxes-holder">
						<div className="checkboxes">
							<div className="form-check">
								<label className="form-check-label">
									<input type="checkbox" className="form-check-input" id="cat_ep" name="cat_ep" checked={this.props.cat_ep === 'y' ? true : false} onChange={this.props.inputChange} value='y' /> EP
								</label>
							</div>
							<div className="form-check">
								<label className="form-check-label">
									<input type="checkbox" className="form-check-input" id="cat_dms" name="cat_dms" checked={this.props.cat_dms === 'y' ? true : false} onChange={this.props.inputChange} value='y' /> DMS
								</label>
							</div>
							<div className="form-check">
								<label className="form-check-label">
									<input type="checkbox" className="form-check-input" id="cat_mp" name="cat_mp" checked={this.props.cat_mp === 'y' ? true : false} onChange={this.props.inputChange} value='y' /> MP
								</label>
							</div>
							<div className="form-check">
								<label className="form-check-label">
									<input type="checkbox" className="form-check-input" id="cat_wholesaler" name="cat_wholesaler" checked={this.props.cat_wholesaler === 'y' ? true : false} onChange={this.props.inputChange} value='y' /> Wholesaler
								</label>
							</div>
							<div className="form-check">
								<label className="form-check-label">
									<input type="checkbox" className="form-check-input" id="cat_char_limit" name="cat_char_limit" checked={this.props.cat_char_limit === 'y' ? true : false} onChange={this.props.inputChange} value='y' /> Character Limit
								</label>
							</div>
							<div className="form-check">
								<label className="form-check-label">
									<input type="checkbox" className="form-check-input" id="cat_global" name="cat_global" checked={this.props.cat_global === 'y' ? true : false} onChange={this.props.inputChange} value='y' /> Global
								</label>
							</div>
						</div>
					</div>
				</div>

				<div className="form-group row">
					<label htmlFor="subject" className="col-sm-2 col-form-label">Subject: </label>
					<div className="col-sm-6">
						<input type="text" className="form-control" id="subject" name="subject" tabIndex="2" value={this.props.subject || ''} onChange={this.props.inputChange} />
					</div>
				</div>

				<div className="form-group row">
					<label htmlFor="source" className="col-sm-2 col-form-label">Source: </label>
					<div className="col-sm-6">
						<input type="text" className="form-control" id="source" name="source" tabIndex="3" value={this.props.source || ''} onChange={this.props.inputChange} />
					</div>
				</div>

				<div className="form-group row">
					<label htmlFor="stamp" className="col-sm-2 col-form-label">Date: </label>
					<div className="col-sm-2">
						<DatePicker className="form-control" dateFormat="YYYY-MM-DD" id="stamp" tabIndex="4" name="stamp" value={this.props.stamp}  selected={this.props.stamp || ''} onChange={this.props.dateChange}  />
					</div>
					<label htmlFor="date_modified" className="col-sm-1 col-form-label">Modified: </label>
					<div className="col-sm-3">
						<DatePicker className="form-control" dateFormat="YYYY-MM-DD" id="date_modified" name="date_modified" tabIndex="5" value={this.props.date_modified} selected={this.props.date_modified || ''} onChange={this.props.dateModifiedChange}  />
					</div>
				</div>

				<div className="form-group row">
					<label htmlFor="author" className="col-sm-2 col-form-label">Author: </label>
					<div className="col-sm-6">
						<input type="text" className="form-control" id="author" name="author" tabIndex="6" value={this.props.author || ''} onChange={this.props.inputChange} />
					</div>
				</div>

				<div className="form-group row">
					<label htmlFor="brokerage" className="col-sm-2 col-form-label">Brokerage: </label>
					<div className="col-sm-6">
						<input type="text" className="form-control" id="brokerage" name="brokerage" tabIndex="7" value={this.props.brokerage || ''} onChange={this.props.inputChange} />
					</div>
				</div>

				<div className="form-group row">
					<label htmlFor="city" className="col-sm-2 col-form-label">City: </label>
					<div className="col-sm-2">
					<input type="text" className="form-control" id="city" name="city" tabIndex="8" value={this.props.city || ''} onChange={this.props.inputChange} />
					</div>
					<label htmlFor="state" className="col-sm-1 col-form-label">State: </label>
					<div className="col-sm-3">
					<input type="text" className="form-control" id="state" name="state" tabIndex="8" value={this.props.state || ''} onChange={this.props.inputChange} />
					</div>
				</div>

				<div className="form-group row">
					<label htmlFor="vendor" className="col-sm-2 col-form-label">Vendor: </label>
					<div className="col-sm-6">
						<input type="text" className="form-control" id="vendor" name="vendor" tabIndex="9" value={this.props.vendor || ''} onChange={this.props.inputChange} />
					</div>
				</div>

				<div className="form-group row">
					<div className="col-sm-12">
						<input type="text" className="form-control" id="question" name="question" tabIndex="10" placeholder="question" value={this.props.question || ''} onChange={this.props.inputChange} />
					</div>
				</div>

				<div className="form-group row">
					<div className="col-sm-12" id="highlight-div">
						<textarea  type="text" className="form-control" id="answer" name="answer" tabIndex="11" placeholder="answer" value={this.props.answer || ''} onChange={this.props.inputChange} />
					</div>
				</div>
			</div>
		)
	}
	/****************************************/
}
/****************************************************************************************/

export default RFPForm;
