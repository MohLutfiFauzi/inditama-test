import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from '../states/authUser/reducer'
import productsReducer from '../states/products/reducer'
import productDetailReducer from '../states/detailProduct/reducer'

const store = configureStore({
    reducer: {
        authUser: authUserReducer,
        products: productsReducer,
        detailProduct: productDetailReducer
    },
});

export default store;