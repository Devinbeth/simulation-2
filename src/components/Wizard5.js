import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Wizard5 extends Component {
    render() {
        return (
            <div>
                <button><Link to='/dashboard'>Complete</Link></button>
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

export default connect(mapStateToProps, {})(Wizard5);
