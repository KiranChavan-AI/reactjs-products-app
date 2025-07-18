import { useState } from "react";
import { categoryList } from "../data/Product";
import ProductList from "./ProductList";
import ProductListClass from "./ProductListClass";
import store from "../store/store";

function Search() {
    const categories = categoryList;
    const [selectedCategory, setselectedCategory] = useState("");
    const [totalRecords, setTotalRecords]=useState("");
    const handleCategoryChange = (e) => {
        setselectedCategory(prev => e.target.value);
       // store.dispatch(FILTERPRODUCT(e.target.value));
       // console.log('Latest steate',store.getState());
     }

    const onUpdateCount=(message)=>{
        setTotalRecords('Total Count: ' + message);
    }

    return (
        <>
            <div className="row">
                <div className="col-lg-6">
                    <h5>Search Product</h5>
                    <label>Filter:</label>
                    <select onChange={(e) => handleCategoryChange(e)} className="form-select">
                        <option value="">--Select--</option>
                        {categories.map((cat) => (
                            <option key={cat.categoryId} value={cat.categoryId}>{cat.categoryName}</option>
                        ))}
                    </select> <i>{selectedCategory}</i>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 col-sm-6">
                    <ProductList  selectedCat={selectedCategory} myname="Krishna" 
                    onNotify={(event)=>onUpdateCount(event)}/>

                    {/* <ProductListClass selectedCat={selectedCategory} myname="Krishna"
                     onNotify={(event)=>onUpdateCount(event)}/> */}
                {totalRecords && (<div className="text-success">{totalRecords}</div>)}
                </div>
            </div>

        </>
    )

}
export default Search;