import { createAction } from "@reduxjs/toolkit";

export const CategoryAction={
    FetchCategories: createAction("category/FetchCategories"),
    SetProduct: createAction("category/SetProduct"),
    SetCategorySearchText: createAction("category/SetCategorySearchText"),
    ResetCategory:createAction("category/ResetCategory"),
    AddCategory:createAction("category/AddCategory")

}