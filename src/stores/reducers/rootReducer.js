import {combineReducers} from 'redux';
import session from 'stores/reducers/sessionReducer';
import rfps from 'stores/reducers/rfpsReducer';
import rfpForm from 'stores/reducers/rfpFormReducer';

/****************************************************************************************/
const rootReducer = combineReducers({
	// short hand property names
	session,
	rfps,
	rfpForm
});
/****************************************************************************************/

export default rootReducer;
