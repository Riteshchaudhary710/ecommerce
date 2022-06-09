import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const  ProductBox = () => {
    const products = useSelector((state) => state.allProducts.product)
    const showList = products.map((product) => {
        const {id,image,title,price,category} = product;
        return (
            <>
              <div className="product-box col-33" key={id}>
                <Link to={`/product/${id}`} >
                    <div class="product-title">
                        <figure>
                            <img src={image} alt={title} />
                        </figure>
                        <div className="product-name">
                            <h4>{title}</h4>
                        </div>
                    </div>
                </Link>
                 
                  <div className="product-meta">
                      <h5>${price}</h5>
                      <h6>{category}</h6>
                  </div>
              </div>
            </>
        ) 
    })

    return(
        <>{showList}</>
    )
    
}

export default ProductBox;