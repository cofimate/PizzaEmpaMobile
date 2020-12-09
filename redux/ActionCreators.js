import * as ActionTypes from './ActionTypes.js';
import { baseUrl } from './baseUrl';


export const fetchMenu = () => dispatch => {

    dispatch(menuLoading());

    return fetch(baseUrl + 'menu')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(menu => dispatch(menuAdd(menu)))
        .catch(error => dispatch(menuFailed(error.message)));
};


export const MenuLoading = () => ({
    type: ActionTypes.MENU_LOADING
});

export const menuFailed = errMess => ({
    type: ActionTypes.MENU_FAILED,
    payload: errMess
});

export const menuAdd = menu => ({
    type: ActionTypes.MENU_ADD,
    payload: menu
});

export const fetchRecipes = () => dispatch => {

    dispatch(recipesLoading());

    return fetch(baseUrl + 'recipes')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(campsites => dispatch(recipesAdd(recipes)))
        .catch(error => dispatch(recipesFailed(error.message)));
};

export const recipesLoading = () => ({
    type: ActionTypes.RECIPES_LOADING
});


export const recipesFailed = errMess => ({
    type: ActionTypes.RECIPES_FAILED,
    payload: errMess
});

export const recipesAdd = recipes => ({
    type: ActionTypes.RECIPES_ADD,
    payload: recipes
});

export const postCart = (id, customerId, items) => dispatch => {
    
    const newCart = new Array();

    //for

    //newCart.date = new Date().toISOString();

    return fetch(baseUrl + 'cart', {
            method: "POST",
            body: JSON.stringify(newCart),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => { throw error; }
        )
        .then(response => response.json())
        .then(response => dispatch(cartAdd(response)))
        .catch(error => {
            console.log('post cart', error.message);
            alert('Your cart could not be posted\nError: ' + error.message);
        });
};


export const cartAdd = comment => ({
    type: ActionTypes.CART_ADD,
    payload: comment
})