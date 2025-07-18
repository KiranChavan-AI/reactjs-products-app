import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducer/product.reducer";
import categoryReducer from "../reducer/category.reducer";
import authReducer from "../reducer/auth.reducer";


const store= configureStore({
    reducer: {
        productReducer,
        categoryReducer,
        authReducer
    }
})

export default store;