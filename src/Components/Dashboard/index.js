import { Component } from "react";
import "./index.css";
import ProductCard from "../ProductCard";
import Navbar from "../Navbar";

class Dashboard extends Component {
    state = {
        productsList: [],
        cartList: [],
    };

    async componentDidMount() {
        const url = "https://dummyjson.com/products?skip=0&limit=52";
        const response = await fetch(url);
        const responseData = await response.json();
        this.setState({ productsList: responseData.products });
    }

    render() {
        return (
            <div className="homepage-main-container">
                <Navbar />
                <ul className="homepage-sub-container">
                    {this.state.productsList.map((eachItem) => {
                        return <ProductCard key={eachItem.id} details={eachItem} />;
                    })}
                </ul>
            </div>
        );
    }
}

export default Dashboard;
