import { useEffect, useState } from "react";
import { categoryList, productList } from "../data/Product";
import ProductDetails from "./ProductDetails";
import Offer from "./Offer";

function ProductList({ selectedCat, myname, onNotify }) {
    console.log('ProductList is rendered');
    const products = productList;
    const selectedCategory = selectedCat;
    const [filteredProducts, setfilteredProducts] = useState([]);
    useEffect(() => {
        console.log('useefect' + myname);
        console.log(selectedCategory);
        const filtered = selectedCategory ?
            products.filter(f => f.category == selectedCategory) : products;
        // console.log(JSON.stringify(filtered));
        setfilteredProducts(filtered);
        onNotify(filtered.length);

    }, [selectedCategory]);

    return (
        <>
            <div className="row">
                <div className="col-lg-8">
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
                            {filteredProducts.map((prod, indx) => (
                                <ProductDetails product={prod} key={prod.productId} />
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="col-lg-4">
                    <Offer />
                </div>
            </div>

        </>
    )

}
export default ProductList; 