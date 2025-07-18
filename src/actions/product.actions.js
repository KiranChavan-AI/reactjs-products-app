import {createAction} from "@reduxjs/toolkit";

// export const FILTERPRODUCT = createAction("product/FILTERPRODUCT");
// export const ADDPRODUCT = createAction("product/ADDPRODUCT");

export const ProductAction ={
    FilterProducts: createAction("product/FilterProducts"),
    SetCategory: createAction("product/SetCategory"),
    SetSearchText: createAction("product/SetSearchText"),
    Reset: createAction("product/Reset"),
    TotalRecordCount: createAction("product/TotalRecordCount"),
    AddProduct:createAction("product/AddProduct")

}