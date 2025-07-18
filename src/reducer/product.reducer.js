import { createReducer } from "@reduxjs/toolkit"
import { ProductAction } from "../actions/product.actions"
import { productList } from "../data/Product"

const intialState={
    products:[...productList],
    filteredProduct:[...productList],
    message:"",
    selectedCategory:"",
    searchText:"",
    totalRecords:""
}

// function productReducer(state=intialState,action){
//     switch(action.type){
//         case "product/FILTERPRODUCT" :

//         case "product/ADDPRODUCT":
//     }

// }

const productReducer= createReducer(intialState,(builder)=>{
    builder.addCase(ProductAction.FilterProducts,(state,action)=>{
        const {selectedCategory, searchText,product}=state;
        const filtered= state.products.filter(prod=>{
            const checkProductName= searchText!==""? prod.productName.toLowerCase().
            includes(searchText.toLocaleLowerCase()):true;
            const checkSelectedCategory=selectedCategory!==""? selectedCategory===prod.category:true;
            console.log(checkProductName,checkSelectedCategory,selectedCategory,prod.category);
        return checkProductName && checkSelectedCategory;
        
    })
      
    state.filteredProduct=filtered;
    console.log(filtered);

    })
    .addCase(ProductAction.SetCategory,(state,action)=>{
        state.selectedCategory=Number(action.payload);

    })
    .addCase(ProductAction.SetSearchText,(state,action)=>{
      state.searchText=action.payload;
    })
    .addCase(ProductAction.Reset,(state,action)=>{
     state.selectedCategory="",
     state.searchText="",
     state.filteredProduct=state.products
    })
    .addCase(ProductAction.TotalRecordCount,(state,action)=>
    {
        state.totalRecords='Total Records: '+action.payload;
    })
    .addCase(ProductAction.AddProduct,(state,action)=>{
        state.products =[...state.products,action.payload];
        state.filteredProduct = state.products;
    })
})

export default productReducer;