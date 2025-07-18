import { useSelector } from "react-redux";
import { categoryList, productList } from "../data/Product"
import categoryReducer from "../reducer/category.reducer";
import CategoryListRedux from "./CategoryListRedux";
import { CategoryAction } from "../actions/category.actions";
import store from "../store/store";

function SearchCategoryRedux() {

    const products = productList;
   // const products = useSelector(state => state.categoryReducer.productList);

   const handleProductChange=(e)=>{
    store.dispatch(CategoryAction.SetProduct(e.target.value));
   }
    const handleSearchTextChange = (e) => {
        store.dispatch(CategoryAction.SetCategorySearchText(e.target.value));
    }

    const handleCategorySearchClick = (e) => {
        store.dispatch(CategoryAction.FetchCategories());
    }

    const handleResetCategory = (e) => {
        store.dispatch(CategoryAction.ResetCategory());
    }

    const handleAddCategory = (e) => {
        let newCategory= {categoryId:Math.floor(Math.random()*220), categoryName:"Accessories"};
        console.log(newCategory);
     store.dispatch(CategoryAction.AddCategory(newCategory));
    }


    return (
        <>
            <div className="row">
                <div className="col-lg-6">
                    <h5>Select Category</h5>
                    <div className="form-group">
                        <label>Filter</label>
                        <select onChange={(e) => handleProductChange(e)} className="form-select">
                            <option value="">--Select--</option>
                            {
                                products.map((prod) => (
                                    //understand where to use{} and ()
                                    <option key={prod.productId} value={prod.productId}>{prod.productName}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Search Text</label>
                        <input type="text" onChange={(e) => handleSearchTextChange(e)} className="form-control" />
                    </div>
                    <input type="button" className="btn btn-primary" value="Category Search" onClick={(e) => handleCategorySearchClick(e)} />
                    <input type="button" className="btn btn-dark" value="Reset Category" onClick={(e) => handleResetCategory(e)} />
                    <input type="button" className="btn btn-primary" value="Add Category" onClick={(e) => handleAddCategory(e)} />
                    <div>
                        <CategoryListRedux />
                    </div>
                </div>

            </div>
        </>
    )
}
export default SearchCategoryRedux;