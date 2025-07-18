import { useEffect, useState } from "react";
import { categoryList, productList } from "../data/Product";
import ProductDetails from "./ProductDetails";
import {useSelector} from "react-redux";


function ProductListRedux({selectedCat, myname, onNotify}){

   
    const filteredProducts = useSelector(state=>state.productReducer.filteredProduct);
    
    useEffect(()=>{
        onNotify(filteredProducts.length);

 },[filteredProducts]);
    return(
    <>
    <table className="table table-striped">
        <thead>
            <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Code</th>
            <th>View</th>
            </tr>
        </thead>
        <tbody>
            {console.log(JSON.stringify(filteredProducts))}
            {filteredProducts.map((prod,indx)=>(
            <ProductDetails  product={prod} key={prod.productId}/>
            ))}            
            </tbody>   
    </table>
    </>
    )

}
export default ProductListRedux; 