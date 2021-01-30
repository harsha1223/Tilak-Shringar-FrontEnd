import { cartConstants } from '../actions/constants';

const initState = {
    cartItems: {
        // 123: {
        //     _id: 123,
        //     name: 'Shri Krishna Choli',
        //     img: 'some.jpg',
        //     price: 200,
        //     description: 'abcd'
        //     qty: 1
        // }
    }
};

export default ( state = initState, action) => {
    switch(action.type){
        case cartConstants.ADD_TO_CART:
            state = {
                ...state,
                cartItems: action.payload.cartItems
            }
            break;
    }
    return state;
}