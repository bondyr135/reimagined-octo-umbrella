import React from 'react';

import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import './DeletingModal.css';

const buttonStyle = { 
    display: 'inlineFlex', 
    justifyContent: 'center',
    border: '1px solid rgb(37, 37, 134)',
    width: '33%'
}

const yesButton = {
    alignSelf: 'left'
}


const DeletingModal = (props) => {

    return (
        <Modal
            className='modal'
            BackdropComponent={Backdrop}
            open={props.open}
        >
            <Fade in={props.open}>
                <div className='delete_modal'>
                    <Typography style={{display: 'block'}} variant='h5' className='title'>Do you want to delet the apartment in {props.address}</Typography>
                    <div className='buttons_unit'>
                        <Button onClick={(id) => props.actualDelete(id)} style={{...buttonStyle, ...yesButton}} className='button yes'>Yes, delete it</Button>
                        <Button onClick={props.justClose} style={buttonStyle} className='button no'>Nevermind</Button>
                    </div>
                </div>
            </Fade>
        </Modal>
    )
}

export default DeletingModal;