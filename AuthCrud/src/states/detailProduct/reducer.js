import { ActionType } from './action';

function productReducer(product = null, action = {}) {
    switch (action.type) {
        case ActionType.GET_DETAIL_PRODUCT:
            return action.payload.product;
        default:
            return product;
    }
}

export default productReducer;