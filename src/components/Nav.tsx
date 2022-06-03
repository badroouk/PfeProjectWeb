import React from 'react';
import {Link} from "react-router-dom";

const Nav = (props: { name: string })=> {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Home {props.name ? 'Hi ' + props.name : 'hey'} </Link>
                

                <div>
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item-active">
                            <Link to="/login" className="navbar-brand">Login</Link>
                        </li>
                        <li className="nav-item-active">
                            <Link to="/register" className="navbar-brand">Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;