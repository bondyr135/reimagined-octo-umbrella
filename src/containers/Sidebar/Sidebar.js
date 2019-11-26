import React, { useState } from 'react';
import { connect } from 'react-redux';
import ListComponent from '../../components/ListComponent/ListComponent';

import { changeOpen, deleteModal } from '../../actions/action';

import './Sidebar.css';

const mapStateToProps = state => {
    return {
        apartments: state.locations.locations,
        opened: state.opened
    }
}

const mapDispatchToProps = dispatch => {
    return {
        openSidebarComponent: (id) => dispatch(changeOpen(id)),
        toggleDeleteModal: (id) => dispatch(deleteModal(id))
    }
}

const Sidebar = (props) => {

    const [openID, setOpenID] = useState(props.opened);

    const openExpandPanel = (id) => {
        let toBeOpenId;
        if (openID === id) {
            toBeOpenId = '';
        } else {
            toBeOpenId = id;
        }
        setOpenID(toBeOpenId);
        props.openSidebarComponent(toBeOpenId);
    }

    const toggleDModal = (address, nameKey) => {
        // console.log(address, nameKey);
        props.toggleDeleteModal(address, nameKey);

    }


    return (
        <div>
            {props.apartments.map(item => {
                var nameKey = item.address + item.rent

                return <ListComponent
                    key={nameKey}
                    name={nameKey}
                    clickOpen={openExpandPanel}
                    clickDelete={(address, nameKey) => toggleDModal(address, nameKey)}
                    {...item}
                    openID={openID}
                />
            })}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);