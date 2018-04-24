import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/header_logo.png';

class Header extends Component {

    render(){
        return(
            <div className='header'>
                <img src={logo} alt='Houser logo'/>
                <h1>Houser Dashboard</h1>
                <Link to='/'><button>Logout</button></Link>
            </div>
        )
    }
}

export default Header;
