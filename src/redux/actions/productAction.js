import { ActionTypes } from "./type"

export const setProduct = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const removedSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVED_SELECTED_PRODUCT,
    }
}