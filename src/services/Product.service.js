import axios from "axios"
import { Config } from "../helpers/Constants";
import axiosClient from "../helpers/axiosClient";

function getAllProducts(){
    return axiosClient.get(`${Config.BASEURL}/Product/getAllProducts`)
    .then(resp=> resp.data)
    .catch(err=>
    {
        console.log('Error in fetching products');
        throw err;
    }
    )
}

function addProduct(productToAdd)
{
    return axiosClient.post(`${Config.BASEURL}/Product/addProducts`,JSON.stringify(productToAdd),{
        headers:{
            "Content-Type":"application/json"
        }
        })
        .then(resp=>resp.data)
        .catch(err=>
        {
            console.log('Error while adding new product');
            throw err;
        })
}

function deleteProduct(id)
{
    return axiosClient.delete(`${Config.BASEURL}/Product/delete/${id}`)
    .then(resp=> resp.data)
    .catch(err=> 
    {
        console.log('Error while deleting product');
        throw err;
    }
    )
}

const ProductService= {
    getAllProducts,
    addProduct,
    deleteProduct
}

export default ProductService;
