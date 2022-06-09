import React,{ useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import axios from 'axios';
import { setProduct } from "../../redux/actions/productAction";
import ProductBox from "./ProductBox";


const ProductListing = () => {
    const products = useSelector((state) => state)
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err)=>{
        console.log("Error",err)
       });
       dispatch(setProduct(response.data));
    };

    useEffect(()=>{
        fetchProducts();
        
    },[]);
    console.log(products)
    return(
        <>
            <div className="it-container">
                <div className="product-wrap row-100">
                    <ProductBox/> 
                </div>
            </div>
        </>
    )
}

export default ProductListing;