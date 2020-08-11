import userReduser from './reduser';
import { reducer as formReducer } from 'redux-form'


const { createStore, combineReducers } = require("redux");


const redusers = combineReducers({
    userReduser,
    form: formReducer,
})

const store = createStore(redusers);

window.store = store;
export default store;