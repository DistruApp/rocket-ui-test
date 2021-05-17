import React from 'react';
import { connect } from 'react-redux'
import {fetchRocketIfNeeded} from "../actions/Rockets";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    dispatch
});

function RocketContainer(props) {
    return (
        <Rocket rocket={ props.rocket } />
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(RocketContainer);