import * as actions from '../actions/action-types';

let initialState = {
    deleteOpen: false
}

const deletingModalReducer = (state = initialState, action) => {
    // console.log(action.payload);
    if (action.type === actions.DELETE_MODAL) {
        return state.deleteOpen
            ? { deleteOpen: false }
            : { deleteOpen: true, ...action.payload}
        
    } else return state
}

export default deletingModalReducer;