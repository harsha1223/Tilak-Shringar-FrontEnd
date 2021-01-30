import cartReducer from './cart.reducer';
import categoryReducer from './category.reducer';
import productReducer from './product.reducer'

import {combineReducers} from 'redux';
import { cartConstants } from '../actions/constants';

const rootReducer = combineReducers({
    
    category : categoryReducer,
    product : productReducer,
    cart: cartReducer
    
});

export default rootReducer;