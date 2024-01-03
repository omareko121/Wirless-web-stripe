import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ data, id }) => {
    const navigate = useNavigate();
    return (
        <div
            className="product-card"
            onClick={() => navigate("/product/" + id)}
        >
            <div className="thumbnail">
                <img src={data.img.data[0].attributes.url}/>

                <div className="prod-details">
            <span className="name"> {data.title}</span>
                <div  className="soo">
                <span className="price">SAR {data.price}</span>
                </div>
            </div>
            </div>
          
        </div>
    );
};

export default Product;
