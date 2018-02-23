import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <button><Link to='/wizard1'>Add New Property</Link></button>
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

export default connect(mapStateToProps, {})(Dashboard);
