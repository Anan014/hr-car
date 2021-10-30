import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui four item menu">
            <NavLink to="/" exact={true} className="item">Home</NavLink>
            <NavLink to="/cars" exact={true} activeClassName="active" className="item">Cars</NavLink>
            <NavLink to="/employee" exact={true} activeClassName="active" className="item">Employee</NavLink>
            <NavLink to="/match" exact={true} activeClassName="active" className="item">Match</NavLink>
        </div>
    );
}

export default Header;