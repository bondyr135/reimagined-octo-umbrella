import * as actions from '../actions/action-types';
import axiosInstance from '../axiosInstance';

/***************************** 
THE STRUCTOR OF STATE:

STATE = {
    CENTER: [],
    LOCARIONS: [{}, {},...,{}]
}
******************************/

let initialState = {
    locations: []
};

axiosInstance.get(
    'https://jp3-apartments-redux.firebaseio.com/locations.json'
)
.then(res => {
    // console.log(res);
    initialState.locations = res.data ? res.data : [];
})
.catch(rej => console.log(rej));

const manageLocationReducer = (state = initialState, action) => {
    // console.log(action.payload);
    // console.log(state.locations);
    switch (action.type) {
        case actions.ADD_LOCATION:
            const newLocations =  state.locations.concat([action.payload]);
            const newState = Object.assign(
                {},
                state,
                { locations: newLocations }
            )
            axiosInstance.put(
                'https://jp3-apartments-redux.firebaseio.com/locations.json',
                JSON.stringify(newLocations)
            )
            return newState;
        case actions.REMOVE_LOCATION:
            console.log('!!!')
            return Object.assign(
                {},
                state,
                { locations: state.locations.filter(loc => {
                    console.log(loc)
                    return loc.address !== action.payload}) }
            )
        case actions.REMOVE_ALL_LOCATIONS:
            console.log('Deleting all locations');
            const newState3 =  Object.assign(
                {},
                state,
                { locations: [] }
            )
            axiosInstance.put(
                'https://jp3-apartments-redux.firebaseio.com/locations.json',
                JSON.stringify(newState3.locations)
            )

            return newState3;
        default:
            return state
    }
}

export default manageLocationReducer;




// const initialState = {
//     locations: [
//         {lat: 31.240668, lng: 34.791700},
//         {lat: 31.238287, lng: 34.786392},
//         {lat: 31.238318, lng: 34.788835}
//     ]
// };
