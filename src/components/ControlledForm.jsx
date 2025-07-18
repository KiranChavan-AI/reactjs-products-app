import { useState } from "react";
import { categoryList } from "../data/Product";
import { validateProductForm } from "../utilities/product-validation";

function ControlledForm() {

    const defaultProduct = {
        productId: 0,
        productName: "",
        productCode: "",
        price: "",
        category: ""
    }
    const [productFormData, setProductFormData] = useState(defaultProduct);

    const [errors, setErrors] = useState({});
    const onhandleChange = (e) => {
        setProductFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
        console.log(e.target.name, e.target.value);
        setErrors(validateProductForm(e.target.name, e.target.value));
    }

    const handleSaveProduct = (e) => {
        //avoid from refreshing page or going to server
        e.preventDefault();
       
        console.log(errors);
        // check if no errors are captured
        //if (Object.keys(errors.title).length <= 0) 
        if (!errors.title) {
            alert('Product Saved Successfully' + JSON.stringify(productFormData));
            console.log(productFormData);
        }

    }

    return (<>
        <h4>Add Product (Controlled Form)</h4>
        <div className="row">
            <div className="col-lg-6">
                <form onSubmit={(e) => handleSaveProduct(e)}>
                    <div className="form-group">
                        <label>Product Id</label>
                        <input type="text" name="productId" className="form-control" onChange={(e) => onhandleChange(e)} />
                    </div>
                    <div className="form-group">
                        <label>Product Name</label>
                        <input type="text" name="productName" className="form-control" onChange={(e) => onhandleChange(e)} />
                        {errors && errors.hasOwnProperty('title') && errors.fieldName == "productName"
                            && (<span className="text-danger">{errors.title}</span>)}
                    </div>
                    <div>
                        <label>Product Code</label>
                        <input type="text" name="productCode" className="form-control" onChange={(e) => onhandleChange(e)} />
                    </div>
                    <div>
                        <label>Price</label>
                        <input type="text" name="price" className="form-control" onChange={(e) => onhandleChange(e)} />
                        {errors && errors.hasOwnProperty('title') && errors.fieldName == "price"
                            && (<span className="text-danger">{errors.title}</span>)}
                    </div>
                    <div>
                        <label>Category</label>
                        <select className="form-select" name="category" onChange={(e) => onhandleChange(e)}>
                            <option value="">--Select--</option>
                            {categoryList.map((cat, indx) => (
                                <option value={cat.categoryId} key={cat.categoryId}>
                                    {cat.categoryName}</option>
                            ))}
                        </select>
                    </div>
                    <br />
                    {/* type is submit incase of form button else onsubmit will not work */}
                    <input type="submit" value="Save Product" className="btn btn-primary" />
                </form>
            </div>
        </div>
    </>)
}

export default ControlledForm;