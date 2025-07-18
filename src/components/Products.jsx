import { useEffect, useState } from "react"
import ProductService from "../services/Product.service";
import ProductDetails from "./ProductDetails";

function Products(){

    const [products, setProducts]  = useState([]);
    const [message, setMessage]=useState("");
    useEffect(()=>
    {
    ProductService.getAllProducts()
    .then(resp=>{
        setProducts(resp);
    })
    },[]);

    const deleteProduct=(id)=>{
        let confirmDelete = confirm('Do you wish to delete this product');
        console.log(confirmDelete);
        if(confirmDelete){
       ProductService.deleteProduct(id)
       .then(resp=>{
        if(resp)
        {
       // alert('Prod is deleted');
        setProducts(products.filter(d=> d.productId!==id));
        setMessage('Product is deleted');
        setTimeout(()=>{
                setMessage('')
            },1000);
        }
        
       })
    }
    } 

    return(
        <>
        <h4>Product List</h4>
        {message && <div className="alert alert-info">{message}</div>}
        <table className="table table-striped">
        <thead>
            <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Code</th>
            <th>View</th>
            <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {products.map((prod,indx)=>(
            <ProductDetails  product={prod} key={prod.productId} onDelete={deleteProduct}/>
            ))}            
            </tbody>   
    </table>
        </>
    )
}

export default Products;