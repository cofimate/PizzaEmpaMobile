import * as ActionTypes from './ActionTypes';

export const menu = (state = { isLoading: true,
                                     errMess: null,
                                     menu: []}, action) => {
    switch (action.type) {
        case ActionTypes.MENU_ADD:
            return {...state, isLoading: false, errMess: null, menu: action.payload};

        case ActionTypes.MENU_LOADING:
            return {...state, isLoading: true, errMess: null, menu: []}

        case ActionTypes.CAMPSITES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
      }
};