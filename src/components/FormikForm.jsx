import {ErrorMessage, Field, Form, Formik} from "formik";
import { categoryList } from "../data/Product";
import * as Yup from "yup";
import ProductService from "../services/Product.service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormikForm(){

    const intialProductForm={
        productId: 0,
        productName:"",
        productCode:"",
        price:"",
        category:""   
    };


    const categories= categoryList;
    const navigate = useNavigate();
    const handleSaveProduct = (frm)=>
    {
       // alert('Form save successfully'+ JSON.stringify(frm));
       ProductService.addProduct(frm)
       .then(response=> {
        if(response)
        {
         alert('Form save successfully'+ JSON.stringify(frm));
          navigate('/products-list');
        }
       
       })
    }

    const productValidationSchema=Yup.object({
        productId: Yup.string().required('Product ID is mandatory'),
        price: Yup.string().required('Price is mandatory')
        .matches(/^\d+(\.\d{1,2})?$/,'Price is number'),
        category:Yup.string().required('Category is mandatory')
        .notOneOf(["0"], 'Select one of valid Category')

    })
    // const validateFn=(frm)=>
    // {
    //     let errors={};
    //     let priceRegex=/^\d+(\.\d{1,2})?$/;
    //     if(!frm.productId)
    //     {
    //         errors.productId='Product ID is mandatory'; 
    //     }
        
    //      if(!frm.price)
    //      {
    //         errors.price='Price is mandatory';
    //      }
    //      else if(!priceRegex.test(frm.price))
    //      {
    //         errors.price='Price should be number';
    //      }
    //      return errors;
    // }

    return(
        <>
        <h4>Add Product (Formik)</h4>
        <div className="row">
            <div className="col-lg-6">
             <Formik initialValues={intialProductForm} enableReinitialize={true}
             onSubmit={(frm)=>handleSaveProduct(frm)} validationSchema={productValidationSchema}>
                <Form>
                    <div className="form-group">
                        <label>Product ID</label>
                        <Field name="productId" className="form-control"></Field> 
                        <ErrorMessage className="text-danger" name="productId" component="label"/>
                    </div>
                    <div className="from-group">
                        <label>Product Name</label>
                        <Field name="productName" className="form-control"></Field>
                    </div>
                    <div className="from-group">
                        <label>Product Code</label>
                        <Field name="productCode" className="form-control"></Field>
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <Field name="price" className="form-control"></Field>
                        <ErrorMessage className="text-danger" name="price" component="label"/>
                    </div>
                    <div>
                        <label>Category</label>
                        <Field name="category" as="select" className="form-control">
                        <option value="0">--Select--</option>
                        {categories.map((cat, indx)=>(
                        <option value={cat.categoryId} key={cat.categoryId}>
                            {cat.categoryName}</option>
                                                ))} 
                                                </Field>
              <ErrorMessage className="text-danger" name="category" component="label"/>

                    </div>
                    <div className="form-group">
                        <input type="submit" value="Save Product" className="btn btn-dark"/>
                    </div>
                </Form>

             </Formik>
            </div>
        </div>
        </>
    )
}

export default FormikForm;