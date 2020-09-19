import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"

class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer className="page-footer font-small bg-blue pt-4">
          <div className="container-fluid text-center text-md-left">
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Foodie</h5>
                <p>
                  Order what you want to eat whilst sitting at home.
               
                </p>
                <p>
                We are here for you at this moment with you.
                </p>
              </div>

              <hr className="clearfix w-100 d-md-none pb-3" />
              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Home</h5>

                <ul className="list-unstyled">
                  <li>
                    <a href="#!">About Us</a>
                  </li>
                  <li>
                    <a href="#!">News</a>
                  </li>
                  <li>
                    <a href="#!">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="nav__header-right">
              <h5 className="text-uppercase">Social Medias</h5>

              <Link
                to="http://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="images/facebook.png" alt="facebook"></img>
              </Link>
              <Link
                to="http://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="images/instagram.png" alt="insta"></img>
              </Link>
              <Link
                to="http://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="images/twitter.png" alt="twitter"></img>
              </Link>
            </div>
            </div>
          </div>
          <div className="footer-copyright text-center py-3">
            © 2020 Copyright: Foodie
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
