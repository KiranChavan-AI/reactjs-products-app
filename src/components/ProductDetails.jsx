import { useNavigate } from "react-router-dom";

function ProductDetails({product,onDelete}){
    console.log('ProductDetails is rendered');
    const navigate=useNavigate();
    const redirectToProductView = (id)=>
        {
             navigate(`/product-view/${id}`);
        }

    return(
    <>
     <tr key={product.productId}> 
                <td>{product.productId}</td>
                <td>{product.productName}</td>
                <td>{product.price}</td>
                <td>{product.productCode}</td>
                <td>
                    <input type="button" className="btn btn-info" value="View" 
                    onClick={(e)=>redirectToProductView(product.productId)}/>
                </td>
                <td>
                    <input type="button" className="btn btn-danger" value="X"
                    onClick={(e)=>onDelete(product.productId)}/>
                </td>
             </tr>
    </>
    )
}

export default ProductDetails;