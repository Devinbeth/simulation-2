import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Wizard4 extends Component {
    render() {
        return (
            <div>
                <button><Link to='/wizard5'>Next Step</Link></button>
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

export default connect(mapStateToProps, {})(Wizard4);
