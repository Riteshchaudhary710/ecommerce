import { combineReducers } from 'redux';
import { product, productReducer } from './productReducer';

const reducers = combineReducers({
    allProducts: productReducer,
    product: product
})

export default reducers;