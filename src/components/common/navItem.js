import React from 'react';
import { NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
//import { Link,NavLink } from 'react-router-dom';

export default class TopNav extends React.Component {
    
    render() {
        //return <li key={this.props.to} className={window.location.pathname === this.props.to && 'active'}><Link to={this.props.to}>{this.props.display}</Link></li>;

        return (
            <ul className="nav navbar-nav">
                {this.props.nav.map(current =>
                    <LinkContainer key={current.id} to={current.to} exact={current.display === 'RFP' ? false : true} activeClassName="active">
                        <NavItem>{current.display}</NavItem>
                    </LinkContainer>
                )}
            </ul>
        );
    }

}
