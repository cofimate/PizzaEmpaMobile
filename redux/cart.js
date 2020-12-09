import * as ActionTypes from './ActionTypes';

export const cart = (state = { errMess: null, cart: []}, action) => {
    switch (action.type) {
        case ActionTypes.CART_LOADING:
            return {...state, errMess: null, cart: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};
        
        case ActionTypes.ADD_COMMENT:
            return {...state, errMess: null, cart: action.payload};
        default:
            return state;
    }
};