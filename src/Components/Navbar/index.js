import "./index.css";

function Navbar(props) {
    return (
        <div className="navbar-main-container">
            <img
                alt="logo"
                className="logo"
                src="https://res.cloudinary.com/dwgg5pyqk/image/upload/v1702493317/bubble-gum-shopping-bag_yrst34.gif"
            />
            <h1 className="nav-heading">Shoppy</h1>
            <button className="button1">
                <img
                    alt="cart-img"
                    className="cart-img"
                    src="https://res.cloudinary.com/dwgg5pyqk/image/upload/v1702492732/3d-fluency-shopping-cart_takucb.png"
                />
            </button>
            <button className="button2">
                <img
                    className="cart-img"
                    alt="profile-img"
                    src="https://res.cloudinary.com/dwgg5pyqk/image/upload/v1702493738/willoy-purple-user-icon_dd33u5.png"
                />
            </button>
            <button className="logout-button">Logout</button>
        </div>
    );
}

export default Navbar;
