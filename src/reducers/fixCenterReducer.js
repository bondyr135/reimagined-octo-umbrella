import * as actions from '../actions/action-types';
import axiosInstance from '../axiosInstance';


// const initialState = {
//     center: [31.238486, 34.788530]
// }

let initialCenter = [];
axiosInstance.get(
    'https://jp3-apartments-redux.firebaseio.com/center.json'
)
.then(res => {
    // console.log(res);
    initialCenter = res.data.center;
})
.catch(rej => console.log(rej));


const fixCenterReducer = (state = initialCenter, action) => {
    if (action.type === actions.FIX_CENTER) {
        return { center: action.payload }
    } else return state;
}

export default fixCenterReducer;