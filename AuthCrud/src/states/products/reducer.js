import { ActionType } from './action';

function productsReducer(products = [], action = {}) {
    switch (action.type) {
        case ActionType.GET_ALL_PRODUCT:
            return action.payload.products;
        case ActionType.ADD_PRODUCT:
            return [...products, action.payload.product];
        case ActionType.DELETE_PRODUCT:
            return products.filter(product => product.id !== action.payload.product_id);
        case ActionType.UPDATE_PRODUCT:
            const filterProduct = products.filter(product => product.id !== action.payload.product.id)
            return [...filterProduct, action.payload.product];
        default:
            return products;
    }
}

export default productsReducer;