import React, { Component } from 'react';
import logo from '../assets/header_logo.png';

class Header extends Component {

    render(){
        return(
            <div className="Header">
                <img src={logo} alt='Houser logo'/>
                <h1>Houser Dashboard</h1>
                <button>Logout</button>
            </div>
        )
    }
}

export default Header;
