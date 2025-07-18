import { createReducer } from "@reduxjs/toolkit";
import { categoryList, productList } from "../data/Product";
import { CategoryAction } from "../actions/category.actions";


const intialState ={
    products:[...productList],
    categories:[...categoryList],
    newRecordsAdded: false,
    filteredCategory: [],
    selectedProductName:"",
    setSearchCategoryText:""
}

 const categoryReducer=createReducer(intialState,(builder)=>{
    builder.addCase(CategoryAction.FetchCategories,(state,action)=>
    {
      const {selectedProductName,setSearchCategoryText,categories,products}=state;
      
      const selectedCategoryIdByProductName= 
     selectedProductName!==""? products.find(prod=>prod.productId===Number(selectedProductName)):""; 
      console.log(JSON.stringify(selectedCategoryIdByProductName));

      const filtered= state.categories.filter(cat=>{  

        const checkSelectedProduct= selectedCategoryIdByProductName!==""? 
        selectedCategoryIdByProductName.category===cat.categoryId:true;

        const checkSearchCategoryText=setSearchCategoryText!==""?cat.categoryName.toLowerCase().includes(
          setSearchCategoryText.toLowerCase()):true;

          console.log(checkSelectedProduct,selectedCategoryIdByProductName.checkSearchCategoryText)
        return checkSelectedProduct && checkSearchCategoryText
      })
      
         state.filteredCategory=filtered;
          console.log(filtered);
      
    })
    .addCase(CategoryAction.SetCategorySearchText,(state,action)=>{
              state.setSearchCategoryText=action.payload;

    })
    .addCase(CategoryAction.SetProduct,(state,action)=>{
      state.selectedProductName=action.payload;
    })
    .addCase(CategoryAction.ResetCategory,(state,action)=>
    {
      state.selectedProductName="",
      state.setSearchCategoryText="",
      state.filteredCategory= state.categories;

    })
    .addCase(CategoryAction.AddCategory,(state,action)=>
    {
      state.categories=[...state.categories,action.payload];
     state.filteredCategory=state.categories; 
    // console.log(state.categories);
    })

})

export default categoryReducer;
