import { useRef } from "react";

function UnControlledForm(){

    const productIdref= useRef();
    const productNameref=useRef();
    const productCoderef=useRef();
    const priceref=useRef();

    const handleSaveProduct= (e)=>{
        //USED TO prevent from going to server ,donot refresh the screen 
       e.preventDefault();
       let newProduct=
       {
        id: productIdref.current.value,
        productName: productNameref.current.value,
        productCode: productCoderef.current.value,
        price: priceref.current.value
       }
        alert('Product Saved Successfully'+ JSON.stringify(newProduct));
       
    
    }

    return(
        <>
        <h4>Add Product (Uncontrolled Form)</h4>
        <div className="row">
            <div className="col-lg-6">
                <form onSubmit={(e)=>handleSaveProduct(e)}>
                    <div className="form-group">
                        <label>Product Id</label>
                        <input type="text" name="id" className="form-control" ref={productIdref}/>
                    </div>
                    <div className="form-group">
                        <label>Product Name</label>
                        <input type="text" name="productName" className="form-control" 
                        ref={productNameref}/>                       
                    </div>
                    <div>
                        <label>Product Code</label>
                        <input type="text" name="productCode" className="form-control" 
                        ref={productCoderef}/>
                    </div>
                    <div>
                        <label>Price</label>
                        <input type="text" name="price" className="form-control" ref={priceref}/>
                    </div>
                    <br/>
                    {/* type is submit incase of form button else onsubmit will not work */}
                    <input type="submit"  value="Save Product" className="btn btn-primary"/>
                </form>
            </div>
        </div>
        </>
    )
}

export default UnControlledForm;