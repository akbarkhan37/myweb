import React from "react";
import Menu from "./Menu";
const Index = () => {
  return (
    <>
      <Menu />
      <section className="banner">
        <div
          id="carouselExampleControlslide"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <a href="product-list.html">
                <img src="assets/images/banner1.jpg" alt="" />
              </a>
            </div>
            <div className="carousel-item">
              <a href="systems.html">
                <img src="assets/images/banner2.jpg" alt="" />
              </a>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControlslide"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControlslide"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>

      <section className="padd-row product-ot light-gray-bg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="section-title">
                <h2>Products</h2>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="acces-box">
                    <a href="product-list.html">
                      <img src="assets/images/ip-cameras.jpg" alt="" />
                    </a>
                    <h4>
                      <a href="product-list.html">Cameras</a>
                    </h4>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="acces-box">
                    <a href="product-list.html">
                      <img src="assets/images/storage.jpg" alt="" />
                    </a>
                    <h4>
                      <a href="product-list.html">Recorders</a>
                    </h4>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="acces-box">
                    <a href="product-list.html">
                      <img src="assets/images/accesories.jpg" alt="" />
                    </a>
                    <h4>
                      <a href="product-list.html">Accesories</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="section-title">
                <h2>System</h2>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="acces-box">
                    <a href="systems.html">
                      <img src="assets/images/HD-Coaxial-Cameras.jpg" alt="" />
                    </a>
                    <h4>
                      <a href="systems.html">POE/IP Security System</a>
                    </h4>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="acces-box">
                    <a href="systems.html">
                      <img src="assets/images/4-camera3.jpg" alt="" />
                    </a>
                    <h4>
                      <a href="systems.html">Coaxial Security System</a>
                    </h4>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="acces-box">
                    <a href="systems.html">
                      <img src="assets/images/4-camera4.jpg" alt="" />
                    </a>
                    <h4>
                      <a href="systems.html">WiFi Security System</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="best-seller-list padd-row paralax-bg">
        <div className="container">
          <div className="section-title">
            <h2>Featured Products</h2>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="product-card">
                <div className="pro-img">
                  <a href="product-detail.html">
                    <img src="assets/images/8-camera1.jpg" alt="" />
                  </a>
                </div>
                <div className="pro-detail">
                  <h4>Security Camera System </h4>
                  <p>
                    Ultra High Security 8 Channel 2MP Wireless Security Camera
                    System...
                  </p>
                  <ul className="rating d-flex">
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                  </ul>
                  <div className="detail-bottom">
                    <a href="product-detail.html" className="common-btn">
                      Add TO Cart
                    </a>
                    <span className="price-bottom">$799.99</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="product-card">
                <div className="pro-img">
                  <a href="product-detail.html">
                    {" "}
                    <img src="assets/images/8-camera2.jpg" alt="" />
                  </a>
                </div>
                <div className="pro-detail">
                  <h4>Security Camera System </h4>
                  <p>
                    Ultra High Security 8 Channel 2MP Wireless Security Camera
                    System...
                  </p>

                  <ul className="rating d-flex">
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                  </ul>
                  <div className="detail-bottom">
                    <a href="product-detail.html" className="common-btn">
                      Add TO Cart
                    </a>
                    <span className="price-bottom">$799.99</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="product-card">
                <div className="pro-img">
                  <a href="product-detail.html">
                    <img src="assets/images/8-camera3.jpg" alt="" />
                  </a>
                </div>
                <div className="pro-detail">
                  <h4>Security Camera System </h4>
                  <p>
                    Ultra High Security 8 Channel 2MP Wireless Security Camera
                    System...
                  </p>

                  <ul className="rating d-flex">
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                  </ul>
                  <div className="detail-bottom">
                    <a href="product-detail.html" className="common-btn">
                      Add TO Cart
                    </a>
                    <span className="price-bottom">$799.99</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="product-card">
                <div className="pro-img">
                  <a href="product-detail.html">
                    {" "}
                    <img src="assets/images/8-camera4.jpg" alt="" />
                  </a>
                </div>
                <div className="pro-detail">
                  <h4>Security Camera System </h4>
                  <p>
                    Ultra High Security 8 Channel 2MP Wireless Security Camera
                    System...
                  </p>

                  <ul className="rating d-flex">
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                  </ul>
                  <div className="detail-bottom">
                    <a href="product-detail.html" className="common-btn">
                      Add TO Cart
                    </a>
                    <span className="price-bottom">$799.99</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-5 text-center">
              <a href="product-list.html" className="common-btn">
                View OPtion
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-outer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="mission-left">
                <img src="assets/images/cctv-bottom.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-right">
                <div className="abt-iner">
                  <div className="section-title">
                    <h2>About Ultra High Security</h2>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    <br />
                    <br />
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <a href="about.html" className="common-btn">
                    Read More
                  </a>
                </div>

                <div className="abt-iner">
                  <div className="section-title">
                    <h2>SHOP OUR PRODUCTS</h2>
                  </div>

                  <p>
                    We accept PayPal, wire transfer, check, cash and credit
                    card. We accept Visa, MasterCard, American Express and
                    Discover.
                  </p>
                  <a href="product-list.html" className="common-btn">
                    View Products
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="video-bottom">
        <div className="video-bg">
          <video autoplay loop mute>
            <source src="assets/images/cctv-video.mp4" type="video/mp4" />
            <source src="assets/images/cctv-video.ogg" type="video/ogg" />
          </video>
        </div>
        <div className="video-abs">
          <div className="section-title">
            <h2>Fixed, varifocal, & motorized lens</h2>
          </div>
          <p>Choose a camera that works for your purposes.</p>
          <a href="#" className="common-btn">
            Learn More
          </a>
        </div>
      </section>
      <section className="need-help padd-row">
        <div className="container">
          <div className="need-help-inner">
            <div className="left-help">
              <div className="section-title">
                <h2>NEED HELP?</h2>
              </div>
              <p>
                To request assistance from technical support, Please call
                123-456-8970
              </p>
            </div>
            <div className="right-help">
              <a href="contact.html" className="common-btn">
                Tech Support
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        className="testimonial-sec padd-row"
        style={{ background: "#fff" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="section-title mb-3">
              <h2 className="text-center ">Testimonials</h2>
            </div>
            <div className="testimonials-outer">
              <div className="testi-outer">
                <div className="test-block">
                  <i className="fa fa-quote-left" aria-hidden="true"></i>
                  <div className="test-con">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </p>
                    <ul className="rating d-flex">
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                    </ul>
                    <h5>John Doe</h5>
                  </div>
                </div>
              </div>
              <div className="testi-outer">
                <div className="test-block">
                  <i className="fa fa-quote-left" aria-hidden="true"></i>
                  <div className="test-con">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </p>
                    <ul className="rating d-flex">
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                    </ul>
                    <h5>John Doe</h5>
                  </div>
                </div>
              </div>
              <div className="testi-outer">
                <div className="test-block">
                  <i className="fa fa-quote-left" aria-hidden="true"></i>
                  <div className="test-con">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </p>
                    <ul className="rating d-flex">
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                    </ul>
                    <h5>John Doe</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-sec">
              <a href="#" className="common-btn">
                View All
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="ft-box">
                <h4>COMPANY INFO</h4>
                <ul>
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">My Account</a>
                  </li>
                  <li>
                    <a href="#">Our Blog</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="ft-box">
                <h4>CUSTOMER SERVICE</h4>
                <ul>
                  <li>
                    <a href="#">Shipping & Handling</a>
                  </li>
                  <li>
                    <a href="#">Return & Exchange</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="ft-box">
                <h4>CONNECT WITH US</h4>
                <address>Ultra High Security. 123 Park Ave, NY 12345</address>
                <p className="call">
                  <a href="#">
                    <i className="fas fa-phone-alt"></i>
                    123-3456-7890
                  </a>
                </p>
                <p className="mail">
                  <a href="#">
                    <i className="far fa-envelope"></i>
                    info@ultrahighsecurity.com
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="ft-box">
                <h4>SIGNUP FOR NEWSLETTER</h4>
                <p>
                  Subscribe to the Hltra High Security mailing list to receive
                  updates on new arrivals, special offers, and other discount
                  information.
                </p>
                <form className="form-inline my-2 my-lg-0">
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Email"
                    aria-label="Search"
                  />
                  <button className="search-btn" type="submit">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right">
          <p>Copyright 2021 © Ultra High Security.</p>
        </div>
      </footer>
    </>
  );
};

export default Index;
