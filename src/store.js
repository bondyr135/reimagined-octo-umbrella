
import { createStore } from 'redux';
import rootReducer from './reducers/root';

// const initialState = {
//     locations: [
//         [31.240668, 34.791700],
//         [31.238287, 34.786392],
//         [31.238318, 34.788835]
//     ],
//     center: [31.238486, 34.788530]
// }

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;