import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header.js';

class Dashboard extends Component {

    homeListings() {
        
    }

    render() {
        return (
            <div>
                <Header />
                <h1>Dashboard</h1>
                <h3>Welcome {this.props.username}</h3>
                <button><Link to='/wizard1'>Add New Property</Link></button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    if (!state) {
        return {};
    }
    return {
        username: state.username,
        homeListings: state.homeListings,
    };
}

export default connect(mapStateToProps, {})(Dashboard);
