import React, { useState } from 'react';
import { connect } from 'react-redux';

import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import Modal from '@material-ui/core/Modal';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import InputLabel from '@material-ui/core/InputLabel';
// import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

import { toggleModal, addLocation } from '../../actions/action';

import './AddingModal.css';

const mapDispatchToProps = dispatch => {
    return {
        toggleModal: () => dispatch(toggleModal()),
        addLocation: (apartment) => dispatch(addLocation(apartment))
    }
}

const mapStateToProps = state => {
    return {
        openModal: state.toggleModal.openModal,
        location: state.toggleModal.location
    }
}
const demiFurniture = 'Any furniture?'

const AddingModal = (props) => {
    
    const [address, setAddress] = useState('');
    const [furniture, setFurniture] = useState('');
    const [list, setList] = useState([])
    const [rent, setRent] = useState('');
    const [notes, setNotes] = useState('');

    window.list = list;
    const handleClose = () => {
        props.toggleModal();
    }

    const resetModal = () => {
        setAddress('');
        setFurniture('');
        setList([]);
        setRent('');
        setNotes('');
    };

    const changeHandler = (event) => {
        // console.log(event.target.name);
        switch (event.target.name) {
            case 'address':
                setAddress(event.target.value);
                break;
            case 'rent':
                // console.log(event.target.value.substring(1));
                setRent(Number(event.target.value));
                break;
            case 'furniture':
                if (furniture === demiFurniture) {
                    setFurniture('');
                };
                setFurniture(event.target.value);
                break;
            case 'notes':
                setNotes(event.target.value);
                break;
            default:
                return
        }
    }

    const addFurnitureHandler = () => {
        setList(list.concat(furniture));
        setFurniture('');
        // console.log(list);
    }

    const removeFurniture = (event, index) => {
        setList(list.filter((x, i) => {
            return i !== index
        }))
    };

    const addLocation = () => {
        // setList(list.concat(furniture));
        const newLocation = {
            location: props.location,
            address: address,
            rent: rent,
            furniture: list.concat(furniture) || []
        };
        props.toggleModal();
        props.addLocation(newLocation);
        resetModal();
    };



    return (
        <Modal
            className='modal'
            open={props.openModal}
            onClose={handleClose}
            BackdropComponent={Backdrop}
        >
            <FormControl className='form' >
                <Fade in={props.openModal}>
                    <div className='paper'>
                        <Typography align='center' style={{ color: 'rgb(24, 11, 82)' }} variant='h5'>Another option?</Typography><br />
                        <TextField className='address input' name='address' onChange={changeHandler} variant="outlined" value={address} label="Apartment's address" /><br />
                        <div className='all_furniture'>
                        {list.map((item, index) => {
                            return (
                                <div key={index} className='furniture_input_button'>
                                    <TextField
                                        className='furniture input'
                                        name='furniture'
                                        onChange={(e) => changeHandler(e, index)}
                                        variant="outlined"
                                        placeholder={demiFurniture}
                                        value={item}
                                        label="Existing furniture"
                                        disabled
                                    />
                                    <Button variant='outlined' color='secondary' className='button_remove' onClick={(e) => removeFurniture(e, index)}>REMOVE</Button>
                                    
                                    <br />
                                </div>
                            )
                        })}
                        </div>
                        <TextField
                            className='furniture input'
                            name='furniture'
                            onChange={(e) => changeHandler(e)}
                            variant="outlined"
                            placeholder={demiFurniture}
                            value={furniture}
                            label="Existing furniture"
                        />
                        <Button disabled={furniture === ''} onClick={addFurnitureHandler} className='more_furniture_button'>Another furniture?</Button>
                        <br />
                        <TextField className='rent input' name='rent' onChange={changeHandler} variant="outlined" value={rent} label="Rent" type="number" /> <br />
                        <TextField className='notes input' name='notes' onChange={changeHandler} variant="outlined" value={notes} label="Any notes?" /> <br />
                        <div className='buttons'>
                            <Button className='button add' onClick={addLocation} variant='outlined' color='primary'>ADD</Button>
                            <Button className='button cancel' onClick={() => props.toggleModal()} variant='outlined' color='primary'>CANCEL</Button>
                        </div>
                    </div>
                </Fade>
            </FormControl>
        </Modal>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(AddingModal);