import api from '../../utils/api';

const ActionType = {
    GET_DETAIL_PRODUCT: 'GET_DETAIL_PRODUCT',
};

function getDetailProductActionCreator(product) {
    return {
        type: ActionType.GET_DETAIL_PRODUCT,
        payload: {
            product,
        },
    };
}

function asyncGetDetailProduct(product_id) {
    return async (dispatch) => {
        try {
            const product = await api.getProduct(product_id);
            dispatch(getDetailProductActionCreator(product));
        } catch (error) {
            alert(error.message);
        }
    };
}

export {
    asyncGetDetailProduct,
    ActionType,
};