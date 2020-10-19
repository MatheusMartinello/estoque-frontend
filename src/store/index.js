
import { createStore, combineReducers } from 'redux'
import reducerProducts from './products/index'

const reducerRoot = combineReducers({
    products: reducerProducts
});

export default createStore(reducerRoot);