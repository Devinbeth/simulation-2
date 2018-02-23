import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../assets/auth_logo.png';

class Login extends Component {
    render() {
        return (
            <div>
                <img src={logo} alt='Houser logo' /><br/>
                <span>Username</span><br/>
                <input/><br/>
                <span>Password</span><br/>
                <input/><br/>
                <button><Link to='/dashboard'>Login</Link></button>
                <button><Link to='/dashboard'>Register</Link></button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    if (!state) {
        return {};
    }
    return state;
}

export default connect(mapStateToProps, {})(Login);
