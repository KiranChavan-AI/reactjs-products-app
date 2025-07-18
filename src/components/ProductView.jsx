import { useLocation, useNavigate, useParams } from "react-router-dom";
import { productList } from "../data/Product";
import { useEffect, useState } from "react";

function ProductView() {

    const { id } = useParams();
    //syntax to read query parameters
    const loc = useLocation();
    const queryParams = new URLSearchParams(loc.search);
    const city = queryParams.get('city');
    const country = queryParams.get('country');

    const [product, setProduct] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const productObj = productList.filter(f => f.productId == id);
        setProduct(...productObj);
    }, [id]);

    return (
        <>
            <h5>Product Details:</h5>
            <p>Product ID: {product.productId}</p>
            <p> Product Name: {product.productName}</p>
            <p>Product Price: {product.price}</p>
            <p>Product Code: {product.productCode}</p>
            <p>
                <input type="button" className="btn btn-dark" onClick={() => navigate('/search')} value="Back" />
            </p>
            <hr/>
            <p>Route parameter: {id}</p>
            <p>Query parameter: 
                {city && (<strong>{city}</strong>)}
                -{country && (<strong>{country}</strong>)}</p>
        </>
    )
}

export default ProductView;