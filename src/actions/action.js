import  * as actions from './action-types';

export const determineBorder = (payload) => {
    return {
        type: actions.DETERMINE_BORDER,
        payload: payload
    }
}

export const fixCenter = (payload) => {
    return {
        type: actions.FIX_CENTER,
        payload
    }
}

export const addLocation = (payload) => {
    return {
        type: actions.ADD_LOCATION,
        payload
    }
}

export const removeLocation = (payload) => {
    return {
        type: actions.REMOVE_LOCATION,
        payload
    }
}

export const removeAllLocations = () => {
    return { 
        type: actions.REMOVE_ALL_LOCATIONS
    }
}

export const toggleModal = (payload) => {
    return {
        type: actions.TOGGLE_MODAL,
        payload
    }
}

export const changeOpen = (payload) => {
    return {
        type: actions.CHANGE_OPEN,
        payload
    }
}

export const deleteModal = (payload) => {
    console.log(payload);
    return {
        type: actions.DELETE_MODAL,
        payload
    }
}