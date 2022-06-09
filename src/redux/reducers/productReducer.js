import { ActionTypes } from "../actions/type"

const initialState = {
    product: []
}

export const productReducer = (state=initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state,
                    product: action.payload
                };
        default:
            return state;
    }
}

export const product = (state=initialState, action) => {
    switch (action.type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, 
                       product: action.payload
                    };

        case ActionTypes.REMOVED_SELECTED_PRODUCT:
            return {};

        default:
            return state;
    }
}
