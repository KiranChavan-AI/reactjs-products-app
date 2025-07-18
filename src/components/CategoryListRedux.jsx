import { useSelector } from "react-redux";
import { categoryList } from "../data/Product";
import CategoryDetails from "./CategoryDetails";

function CategoryListRedux(){

    const filteredCategory =useSelector(state=>state.categoryReducer.filteredCategory);
    
    return(
        <>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Category ID</th>
                    <th>Category Name</th>
                </tr>
            </thead>
            <tbody>
                { filteredCategory.map((cat,indx)=>(<
                    CategoryDetails category={cat} key={cat.categoryId}/>)
                ) }
                
            </tbody>
        </table>
        </>
    )
}

export default CategoryListRedux;