import { combineReducers } from 'redux';

import manageLocationReducer from './manageLocationReducer';
import fixCenterReducer from './fixCenterReducer';
import mapReducer from './mapReducer';
import toggleModalReducer from './toggleModalReducer';
import openedComponentReducer from './openedComponentReducer';
import deletingModalReducer from './deletingModalReducer';


const rootReducer = combineReducers({
    locations: manageLocationReducer,
    fixCenter: fixCenterReducer,
    map: mapReducer,
    toggleModal: toggleModalReducer,
    open: openedComponentReducer,
    deletingModal: deletingModalReducer
})

export default rootReducer;