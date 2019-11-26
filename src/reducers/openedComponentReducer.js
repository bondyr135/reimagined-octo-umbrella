import * as actions from '../actions/action-types';

let initialState = {
    opened: ""
}
const openedComponentReducer = (state = initialState, action) => {
    if (action.type === actions.CHANGE_OPEN) {
        return {
            opened: action.payload
        }
    } else return state;
}

export default openedComponentReducer;