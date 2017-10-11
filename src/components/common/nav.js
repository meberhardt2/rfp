import React from 'react';
import {connect} from 'react-redux';  
import TopNav from 'components/common/navItem.js';
//import * as sessionActions from 'stores/actions/sessionActions';


class Nav extends React.Component {  
	render() {
		return(
		<nav className="navbar navbar-default">
			<div className="container-fluid">
				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<TopNav nav={this.props.nav}/>
				</div>
			</div>
		</nav>
	);
	}
}


function mapStateToProps(state, ownProps) {
	// state = {cats: [{id:1, name: "Maru"}, etc.]}

	//can't use state.cats.length, as an object is returned, objects don't have length. it's an object of arrays
	if (Object.keys(state.session).length > 0) {
		return {
			nav: state.session.nav
		};
	}
	else{
		return {
			nav: [{id:0, display:'',to:''}]
		};
	}
} 

//pure false forces component refresh. this is needed to get the correct active state on the bootstrap li's
//otherwise it is export default connect(mapStateToProps)(Nav);
export default connect(mapStateToProps, null, null, {
	pure: false
  })(Nav);


