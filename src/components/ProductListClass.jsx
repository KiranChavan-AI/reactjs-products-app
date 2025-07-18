import React from "react";
import { productList } from "../data/Product";
import ProductDetails from "./ProductDetails";

class ProductListClass extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = 
            {
                filteredProducts: []
            };

    }
     
    //useeffect(()=>{},[selectedCategory])
    componentDidUpdate(prevProps) {
        console.log('componentDidUpdate is trigerred');
        const { selectedCat, myname, onNotify } = this.props;
        if (prevProps.selectedCat !== selectedCat) {
            const filtered = selectedCat ? productList.filter(f => f.category == selectedCat) : productList;
            console.log(JSON.stringify(filtered));
            this.setState({
                filteredProducts: filtered
                
            });

          
           console.log('test');
            onNotify(filtered.length);
        }
    }

    //useeffect(()=>{},[])
    componentDidMount(){
        console.log('componentDidMount Trigerred');
    }

//useeffect(()=>{ return()},[])
    componentWillUnmount(){
        console.log('componenetWillUnmount Trigerred');
    }

    render() {
              console.log('ProductListClass is rendered'); 
     const { filteredProducts }= this.state;
        return (
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
                        {filteredProducts.map((prod, indx) => (
                            <ProductDetails product={prod} key={prod.productId} />
                        ))}
                    </tbody>
                </table>
            </>
        )

    }

}
export default ProductListClass;