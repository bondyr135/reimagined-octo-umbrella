import React from 'react';
import { removeAllLocations } from '../actions/action';
import { connect } from 'react-redux';

// import Button from '@material-ui/core/Button';

function mapDispatchToProps(dispatch) {
    return {
        removeAll: () => dispatch(removeAllLocations())
    }
}

const ResetLocations = (props) => {


    return (
        <button onClick={props.removeAll} style={{color: 'red'}}>
            RESET
        </button>
    )
}

export default connect(null, mapDispatchToProps)(ResetLocations);