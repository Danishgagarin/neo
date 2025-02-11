import { Link } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
  const userId = localStorage.getItem("token"); // Assuming the token is the user ID

  return (
    <nav className="nav-bar">
      <div className="logo">
        <Link to="/">
          <h2>OnlineShop</h2>
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Register</Link>
        <Link to="/products">Products</Link>
        <Link to="/order">Order</Link>
        <Link to="/payment">Payment</Link>
        <Link to="/user-details">User Details</Link>
        <Link to={`/cart/${userId}`}>
          <div className="nav-bag">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-handbag-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
            </svg>
            <span className="bag-quantity">
              <span>0</span>
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;