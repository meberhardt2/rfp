import {combineReducers} from 'redux';
import session from 'stores/reducers/sessionReducer';
import rfps from 'stores/reducers/rfpsReducer';
import searchForm from 'stores/reducers/searchFormReducer';

/****************************************************************************************/
const rootReducer = combineReducers({
	// short hand property names
	session,
	rfps,
	searchForm
});
/****************************************************************************************/

export default rootReducer;
