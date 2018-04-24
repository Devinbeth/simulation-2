import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Wizard1 extends Component {
    render() {
        return (
            <div>
                <Link to='/wizard2'><button>Next Step</button></Link>
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

export default connect(mapStateToProps, {})(Wizard1);
