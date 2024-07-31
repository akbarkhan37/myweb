import React from "react";
import Menu from "./Menu";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <Menu />
      <section className="inner-banner contact-banner">
        <div className="container">
          <div className="inner-banner-text">
            <h2>Contact Us</h2>
          </div>
        </div>
      </section>

      <section className="form_block padd-row">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-lg-7 col-sm-12 col-xs-12">
              <h2 className="m-b-20">Leave a message</h2>
              <div className="contact_left">
                <form
                  onSubmit={onSubmit}
                  id="contacts"
                  className="contact-form row"
                  name="contact"
                  action=""
                  method="post"
                >
                  <div className="form-group col-md-6 col-lg-6 col-sm-12 col-xs-12">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="First Name*"
                      name="firstname"
                      value=""
                      required
                    />
                  </div>
                  <div className="form-group col-md-6 col-lg-6 col-sm-12 col-xs-12">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Last Name*"
                      name="lastname"
                      value=""
                      required
                    />
                  </div>
                  <div className="form-group col-md-6 col-lg-6 col-sm-12 col-xs-12">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Email*"
                      name="email"
                      value=""
                    />
                  </div>
                  <div className="form-group col-md-6 col-lg-6 col-sm-12 col-xs-12">
                    <input
                      className="form-control"
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="Phone*"
                      value=""
                      required
                    />
                  </div>
                  <div className="form-group col-md-12 col-lg-12 col-sm-12 col-xs-12">
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Message*"
                      name="message"
                    ></textarea>
                  </div>
                  <div className="form-group col-md-6 col-lg-6 col-sm-12 col-xs-12">
                    <div
                      className="g-recaptcha"
                      data-sitekey="6LcWSrQaAAAAAKRg9eL22EnGbfsaw-I4whiQ8CaW"
                      style={{
                        transform: "scale(0.77)",
                        transformOrigin: "0 0",
                      }}
                    ></div>
                  </div>
                  <div className="form-group col-md-6 col-lg-6 col-sm-12 col-xs-12 text-right">
                    <input
                      className="common-btn"
                      value="Submit"
                      name="contact_submit"
                      type="submit"
                    />
                  </div>
                </form>
                <span>{result}</span>
              </div>
            </div>
            <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12">
              <div className="right_block">
                <h2 className="m-b-20">Contact Us</h2>
                <div className="site_info">
                  <ul>
                    <li>
                      <div className="info_details_box">
                        <i className="fa fa-phone"></i> <span>Phone NO.</span>
                        <p></p>
                        <p>
                          <a href="tel:123-3456-7890">123-3456-7890</a>
                        </p>
                        <p></p>
                      </div>
                    </li>
                    <li>
                      <div className="info_details_box">
                        <i
                          className="fa fa-location-arrow"
                          aria-hidden="true"
                        ></i>
                        <span>Location</span>
                        <p></p>
                        <p>Ultra High Security. 123 Park Ave, NY 12345</p>
                      </div>
                    </li>
                    <li>
                      <div className="info_details_box">
                        <i className="far fa-envelope"></i>{" "}
                        <span>
                          Email
                          <br />
                        </span>
                        <p></p>
                        <p>
                          <a href="mailto:info@ultrahighsecurity.com">
                            info@ultrahighsecurity.com
                          </a>
                        </p>
                        <p></p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30594450963!2d-74.2598661379975!3d40.697149417741365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1620282016855!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
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
                    <i className="fas fa-phone-alt"></i> 123-3456-7890
                  </a>
                </p>
                <p className="mail">
                  <a href="#">
                    <i className="far fa-envelope"></i>{" "}
                    info@ultrahighsecurity.com
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="ft-box">
                <h4>SIGNUP FOR NEWSLETTER</h4>
                <p>
                  Subscribe to the Ultra High Security mailing list to receive
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

export default Contact;
