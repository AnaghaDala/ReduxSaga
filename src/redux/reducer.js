import {  FETCH_IMAGES_SUCCESS } from "./constant";

const initialState = {
    cart: [],
    images: [] 
};

export const cartData = (state = initialState, action) => {
    switch (action.type) {
        // case ADD_TO_CART:
        //     return {
        //         ...state,
        //         cart: [...state.cart, action.data]
        //     };
        case FETCH_IMAGES_SUCCESS:
            return {
                ...state,
                images: Array.isArray(action.payload) ? action.payload : [] 
            };
        default:
            return state;
    }
};
