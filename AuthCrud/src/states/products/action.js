import api from '../../utils/api';

const ActionType = {
    GET_ALL_PRODUCT: 'GET_ALL_PRODUCT',
    GET_PRODUCT: 'GET_PRODUCT',
    ADD_PRODUCT: 'ADD_PRODUCT',
    DELETE_PRODUCT: 'DELETE_PRODUCT',
    UPDATE_PRODUCT: 'UPDATE_PRODUCT',
};

function getAllProductActionCreator(products) {
    return {
        type: ActionType.GET_ALL_PRODUCT,
        payload: {
            products,
        },
    };
}

function getProductActionCreator(products) {
    return {
        type: ActionType.GET_ALL_PRODUCT,
        payload: {
            products,
        },
    };
}

function addProductActionCreator(product) {
    return {
        type: ActionType.ADD_PRODUCT,
        payload: {
            product,
        },
    };
}

function updateProductActionCreator(product) {
    return {
        type: ActionType.UPDATE_PRODUCT,
        payload: {
            product,
        },
    };
}

function deleteProductActionCreator(product_id) {
    return {
        type: ActionType.DELETE_PRODUCT,
        payload: {
            product_id,
        },
    };
}

function asyncGetAllProduct() {
    return async (dispatch) => {
        try {
            const products = await api.getAllProducts();
            dispatch(getAllProductActionCreator(products));
        } catch (error) {
            alert(error.message);
        }
    };
}

function asyncGetProduct() {
    return async (dispatch) => {
        try {
            const product = await api.getProduct();
            dispatch(getProductActionCreator(product));
        } catch (error) {
            alert(error.message);
        }
    };
}

function asyncAddProduct({ name, price }) {
    return async (dispatch) => {
        try {
            const product = await api.addProduct({ name, price });
            dispatch(addProductActionCreator(product));
        } catch (error) {
            alert(error.message);
        }
    };
}

function asyncUpdateProduct({ product_id, name, price }) {
    return async (dispatch) => {
        try {
            const product = await api.updateProduct({ product_id, name, price });
            dispatch(updateProductActionCreator(product));
        } catch (error) {
            alert(error.message);
        }
    };
}

function asyncDeleteProduct(product_id) {
    return async (dispatch) => {
        dispatch(deleteProductActionCreator(product_id));
        try {
            await api.deleteProduct(product_id);
        } catch (error) {
            alert(error.message);
            dispatch(deleteProductActionCreator(product_id));
        }
    };
}

export {
    asyncGetAllProduct,
    asyncGetProduct,
    asyncAddProduct,
    asyncUpdateProduct,
    asyncDeleteProduct,
    ActionType,
};