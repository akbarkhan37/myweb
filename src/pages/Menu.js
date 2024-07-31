import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <>
      <header className="header-new">
        <div className="top-bar static-bar">
          <div className="container">
            <div className="tb-inner">
              <div className="left-tp">
                <h6>Free domestic shipping within USA on orders over $200</h6>
              </div>
              <div className="right-top">
                <div className="login-reg">
                  <a href="/" onClick={(e) => e.preventDefault()}>
                    Login/Register
                  </a>
                </div>

                <div className="cart-icon-new">
                  <p>
                    <strong>CART:(0)</strong> Items
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="call-upper-head">
            <div className="call">
              <a href="#">
                <i className="fas fa-phone-alt"></i>
                123-3456-7890
              </a>
            </div>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search Products"
                aria-label="Search"
              />
              <button className="search-btn" type="submit">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>

          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="index.html">
              <img src="assets/images/logo.png" alt="" width="120" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <img src="assets/images/menu-icon.png" width="20" alt="" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/blog" className="nav-link">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Menu;
