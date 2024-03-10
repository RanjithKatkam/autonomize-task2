import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import ProductDetails from "./Components/ProductDetails";

function App() {
    return (
        <div className="main-container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/products/:id" element={<ProductDetails />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
