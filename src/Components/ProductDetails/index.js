import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import "./index.css";
import { useLocation } from "react-router-dom";

function ProductDetails() {
    const [productDetails, setProductDetails] = useState({});

    const location = useLocation();

    useEffect(() => {
        const renderProductDetails = async () => {
            const url = `https://dummyjson.com/products/${location.pathname.split("/")[2]}`;
            const response = await fetch(url);
            const responseData = await response.json();
            setProductDetails(responseData);
        };

        renderProductDetails();
    }, [location]);

    return (
        <div className="product-details-main-container">
            <div className="product-img-container">
                <img src={productDetails.thumbnail} alt="i" />
            </div>
            <div className="product-details-container">
                <p className="category p1">{productDetails.category}</p>
                <p className="brand">{productDetails.brand}</p>
                <p className="title p2">{productDetails.title}</p>
                <p className="des">{productDetails.description}</p>
                <p>
                    <FaStar /> {productDetails.rating}
                </p>
                <p className="ava">Available Stock: {productDetails.stock}</p>
                <p className="price">$ {productDetails.price}</p>
            </div>
        </div>
    );
}

export default ProductDetails;
