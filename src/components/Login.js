import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../ducks/reducer.js';
import { register } from '../ducks/reducer.js';
import logo from '../assets/auth_logo.png';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }

    login() {
        let user = {username: this.state.username, password: this.state.password};
        this.props.login(user, this.props.history);
        this.setState({username: '', password: ''});
    }

    register() {
        let user = {username: this.state.username, password: this.state.password};
        this.props.register(user, this.props.history);
        this.setState({username: '', password: ''});
    }

    render() {
        return (
            <div>
                <img src={logo} alt='Houser logo' /><br/>
                <span>Username</span><br/>
                <input onChange={(e) => this.setState({username: e.target.value})}/><br/>
                <span>Password</span><br/>
                <input onChange={(e) => this.setState({password: e.target.value})}/><br/>
                <button onClick={() => this.login()}>Login</button>
                <button onClick={() => this.register()}>Register</button>
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

export default connect(mapStateToProps, { login, register })(Login);
