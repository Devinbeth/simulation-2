import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProperties, filterProperties } from '../ducks/reducer.js';
import Header from './Header.js';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            desiredRent: ''
        };
        this.listProperties = this.listProperties.bind(this);
    }

    componentDidMount() {
        this.props.getProperties();
    }

    listProperties() {
        
    }

    render() {

        return (
            <div>
                <Header />
                <h1>Dashboard</h1>
                <h3>Welcome {this.props.username}!</h3>
                <button><Link to='/wizard1'>Add New Property</Link></button>
                <input value={this.state.desiredRent} onChange={e => this.setState({ desiredRent: e.target.value })} />
                <button onClick={() => this.props.filterProperties(this.state.desiredRent)}>Filter</button>
                {JSON.stringify(this.props.properties)}
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
        properties: state.properties,
    };
}

export default connect(mapStateToProps, { getProperties, filterProperties })(Dashboard);
