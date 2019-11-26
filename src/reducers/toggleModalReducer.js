import * as actions from '../actions/action-types';

let initialState = {
    openModal: false
}

const toggleModalReducer = (state = initialState, action) => {
    if (action.type === actions.TOGGLE_MODAL) {
        if (state.openModal) {
            return {
                openModal: !state.openModal
            }
        } else {
            return {
                openModal: !state.openModal,
                location: action.payload

            }
        }
    } else return state;
}

export default toggleModalReducer; 