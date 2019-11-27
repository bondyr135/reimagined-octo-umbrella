import React from 'react';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
import L from 'leaflet';
import { connect } from 'react-redux';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { Map, TileLayer } from 'react-leaflet';

import { addLocation, toggleModal, deleteModal, removeLocation } from '../actions/action';
import AddingModal from '../components/Modal/AddingModal';
import DeletingModal from '../components/Modal/DeletingModal';
import MarkerComponent from '../components/MarkerComponent/MarkerComponent';

import './map.css';

// let INITIAL_MAP = null;


const mapStateToProps = state => {
    return {
        apartments: state.locations.locations,
        isModalOpen: state.toggleModal.openModal,
        isDeleteModalOpen: state.deletingModal.deleteOpen,
        id: state.deletingModal.IDtoDelete
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addLocation: location => dispatch(addLocation(location)),
        toggleModal: (location) => dispatch(toggleModal(location)),
        toggleDeleteModal: () => dispatch(deleteModal()),
        removeLocation: (toDelete) => dispatch(removeLocation(toDelete))
    };
}


const MapComponent = (props) => {

    let addMarker = 0;
    var latLng = {};
    const clickHandler = (event) => {
        addMarker = setTimeout(() => {
            latLng = Object.assign({}, event.latlng);

            setTimeout(() => {
                props.toggleModal(latLng);
            }, 200)
        }, 600);
    };

    const leftMouseHandler = (event) => {
        clearTimeout(addMarker);
    };


    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });


    const closeDeletingModal = () => {
        props.toggleDeleteModal();
    }

    const deleteLocation = (event) => {
        props.removeLocation(props.id);
        props.toggleDeleteModal();
    }


    return (
        <Map
            id="map"
            center={[31.238914, 34.789220]}
            zoom={16}
            maxZoom={19}
            minZoom={13}
            onMouseDown={clickHandler}
            onMouseUp={leftMouseHandler}
            onMouseLeave={leftMouseHandler}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            {props.apartments.map((loc, i) => {
                return (<MarkerComponent className='location_marker' location={loc} key={i} icon={DefaultIcon} />)
            })}
            <AddingModal />
            <DeletingModal
                open={props.isDeleteModalOpen}
                justClose={closeDeletingModal}
                actualDelete={(id) => deleteLocation(id)}
            />
        </Map>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MapComponent);

// {props.apartments.map((loc, i) =>
//     <Marker position={loc} key={i} zIndexOffset={10} />
// )}