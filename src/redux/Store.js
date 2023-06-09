
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categories/CategoriesSlice";
import productsReducer from "./products/ProductsSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage';
import persistStore from "redux-persist/es/persistStore";
import recommendedProductsReducer from "./recommended/recommendedProductsSlice";
const reducers = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    recommended: recommendedProductsReducer
});

const persistConfig = {
    key: 'root',
    storage: storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer:persistedReducer
})

export const persistor = persistStore(store)







