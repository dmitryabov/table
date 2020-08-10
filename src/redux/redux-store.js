import userReduser from './reduser';


const { createStore, combineReducers } = require("redux");


const redusers = combineReducers({
    userReduser,
})

const store = createStore(redusers);

window.store = store;
export default store;