import React from 'react';
import { Link } from "react-router-dom";

const Nav = (props: { name: string ,setName: (name: string) =>void}) => {
    const logout= async ()=>{
         await fetch('http://localhost:8000/api/logout', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });
        props.setName('');
    };
    let menu;
    if (props.name === '') {
        menu = (
        <><Link to="/login" className="navbar-brand">Home  </Link><div>
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item-active">
                        <Link to="/login" className="navbar-brand">Login</Link>
                    </li>
                    <li className="nav-item-active">
                        <Link to="/register" className="navbar-brand">Register</Link>
                    </li>
                </ul>
            </div></>
        )
    }else {
        menu = (
            <><Link to="/" className="navbar-brand">Home  {props.name ? 'Hi ' + props.name : ''} </Link><div>
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item-active">
                    <Link to="/login" className="navbar-brand" onClick={logout}>Logout</Link>
                </li>
            </ul>
            </div></>
        ) 
    }
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                
                    {menu}
            </div>
        </nav>
    );
};

export default Nav;