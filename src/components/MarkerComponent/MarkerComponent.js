import React, { useState } from 'react';
import { connect } from 'react-redux';

import { changeOpen } from '../../actions/action';

import { Marker, Popup } from 'react-leaflet';

const mapDispatchToProps = dispatch => {
    return {
        changeOpen: (id) => dispatch(changeOpen(id))
    }
}

const mapStateToProps = state => {
    return {
        openedPanelId: state.open.opened
    }
}


/////////////////////////////////////////////////////////////////////////////
const MarkerComponent = props => {
    let location = props.location.location;
    const [ isClicked, setIsClicked ] = useState(false);
    // const [ focusedMarker , setFocusedMarker ] = useState('');


    const onFocusHandler = event => {
        setTimeout(() => {
            props.changeOpen(props.location.address + props.location.rent)
        }, 100);
        if (event.type === 'click') {
            // isClicked ? setIsClicked(false) : setIsClicked(true);
            props.changeOpen(props.location.address + props.location.rent)
        }
    }

    const closeAll = event => {
        if (!isClicked) {
            props.changeOpen('')
        };
    }

    return (
        <Marker
            className='location_marker'
            position={[location.lat, location.lng]}
            key={location.lat}
            onMouseOver={onFocusHandler}
            onMouseOut={closeAll}
            onClick={onFocusHandler}
            icon={props.icon} >
            <Popup>
                <span>
                    {props.location.address}<br />
                    &nbsp;{props.location.rent}$
                        </span>
            </Popup>
        </Marker>
    )
}

export default connect(null, mapDispatchToProps)(MarkerComponent);