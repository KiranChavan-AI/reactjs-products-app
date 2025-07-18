
import { useSelector } from "react-redux";
import { ProductAction } from "../actions/product.actions";
//import { categoryList } from "../data/Product";
import store from "../store/store";
import ProductListRedux from "./ProductListRedux";
import { useEffect } from "react";
import { CategoryAction } from "../actions/category.actions";
import SearchCategoryRedux from "./SearchCategoryRedux";

function SearchRedux() {
//  const categories = categoryList;
    const categories = useSelector(state=>state.categoryReducer.categories);

    useEffect(()=>{

        store.dispatch(CategoryAction.FetchCategories());
        console.log(categories);
    })
 const totalRecords= useSelector(state=>state.productReducer.totalRecords)
    const handleCategoryChange = (e) => {
      store.dispatch(ProductAction.SetCategory(e.target.value));
      
     }

    const onUpdateCount=(message)=>{
        store.dispatch(ProductAction.TotalRecordCount(message))
     
    }

    const handleTextChange=(e)=>{
        console.log(e.target.value);
      store.dispatch(ProductAction.SetSearchText(e.target.value));
    }
    const handleSearchClick=(e)=>{
      store.dispatch(ProductAction.FilterProducts());
    }
    const handleResetClick=(e)=>{
store.dispatch(ProductAction.Reset());
    }
    const handleAddProductClick=(e)=>{
        let product={productId:Math.random().toFixed(0)*2, productName:"drive", price:100000, productCode:"P001",category:1};
        store.dispatch(ProductAction.AddProduct(product));
    }

    return (
        <>
            <div className="row">
                <div className="col-lg-6">
                    <h5>Search Product</h5>
                    <div className="form-group">
                    <label>Filter:</label>
                    <select onChange={(e) => handleCategoryChange(e)} className="form-select">
                        <option value="">--Select--</option>
                        {categories.map((cat) => (
                            <option key={cat.categoryId} value={cat.categoryId}>{cat.categoryName}</option>
                        ))}
                    </select> 
                    </div>
                    <div className="form-group">
                        <label>Search Text:</label>
                        <input type="text" onChange={(e)=>handleTextChange(e)} className="form-control"/>
                    </div>
                    <input type="button"  className="btn btn-primary" value="Search" onClick={(e)=>handleSearchClick(e)}/>
                    <input type="button" className="btn btn-dark" value="Reset" onClick={(e)=>handleResetClick(e)}/>
                    <input type="button" className="btn btn-primary" value="Add Product" onClick={(e)=>handleAddProductClick(e)}/>

                </div>
            {/* </div>

            <div className="row"> */}
                {/* <div className="col-lg-6 col-sm-12"> */}
                    <ProductListRedux   myname="Krishna" 
                    onNotify={(event)=>onUpdateCount(event)}/>

    {totalRecords && (<div className="text-success">{totalRecords}</div>)}
                {/* </div> */}
            </div>
            <div className="col">
                <div className="row-lg-6">
                    <SearchCategoryRedux/>
                </div>
            </div>

        </>
    )

}
export default SearchRedux;