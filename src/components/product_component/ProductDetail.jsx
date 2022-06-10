import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import axios from 'axios';
import { removedSelectedProduct, selectProduct } from "../../redux/actions/productAction";

const ProductDetails = () =>{
    const product = useSelector((state) => state.product.product)
    const {image,title,price,category,description} = product;
    const { productId } = useParams();
    const  dispatch = useDispatch();

    const fetchSingleProduct = async (id) =>{
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        .catch((error)=>{
            console.log("Error", error)
        });
        dispatch(selectProduct(response.data));
    };

    useEffect(() => {
        if (productId && productId !== "") fetchSingleProduct(productId);

        return () => {
        //   dispatch(removedSelectedProduct());
        };
      }, [dispatch,productId]);

    return(
        <>
            <div className="product-box" key={productId}>
                <div className="row-100">
                    <div className="col-50">
                        <figure>
                            <img src={image} alt={title} />
                        </figure>
                    </div>
                    <div className="col-50">
                        <div className="product-title">
                            <h2>{title}</h2>
                        </div>
                        <div className="product-category">
                            <h3>{category}</h3>
                        </div>
                        <div className="product-price">
                            <h4>{price}</h4>
                        </div>
                        <div className="product-description">
                            <p>{description}</p>
                        </div>
                        <div className="rating">
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails;