import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Fragment>
      <footer className="def-section footer">
        <div className="container">
          <div className="row">
            {/* === FOOTER COLUMN === */}
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 footer-1">
              <div className="logo with-border-bottom">
                <div className="logo-image">
                  <img src="/img/logo.png" alt="" />
                </div>
                <div className="logo-text">
                  MILE <span className="color-primary">9INE</span>
                </div>
              </div>
              <div className="footer-1-text">
                <p>Mile9ine is more than just a website. 
                We intend to offer the best online ticket booking experience so that booking and planning for your road trips can be as hitch free as possible...</p>
              </div>
              <div className="footer-1-button">
                <Link to="/about"><div className="my-btn my-btn-primary">
                    <div className="my-btn-bg-top" />
                    <div className="my-btn-bg-bottom" />
                    <div className="my-btn-text">
                      MORE
                    </div>
                  </div></Link>
              </div>
            </div>
            {/* === FOOTER COLUMN === */}
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 footer-2">
              <h4 className="with-square with-border-bottom">LINKS</h4>
              <div className="footer-2-links">
                <div className="footer-2-links-1">
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                  </ul>
                </div>
                <div className="footer-2-links-2">
                  <ul>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><a href="#bookaride">Book A Ride</a></li>
                  </ul>
                </div>
              </div>
            </div>
            {/* === FOOTER COLUMN === */}
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 footer-3">
              <h4 className="with-square with-border-bottom">CONTACTS</h4>
              <div className="footer-3-fax footer-3-item">
                <span className="footer-3-icon"><i className="fa fa-fax" /></span>
                Whatsapp:  +234 903 362 9922
              </div>
              <div className="footer-3-mail footer-3-item">
                <span className="footer-3-icon"><i className="fa fa-envelope" /></span>
                E-mail:  info@mile9ine.com
              </div>
              <div className="footer-3-adress footer-3-item">
                <span className="footer-3-icon"><i className="fa fa-map-marker" /></span>
                Website: www.mile9ine.com 
              </div>
            </div>
            {/* === FOOTER COLUMN === */}
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 footer-4">
              <h4 className="with-square with-border-bottom">WORKING HOURS</h4>
              <div className="footer-4-widget">
                <ul>
                  <li><strong>Monday-Friday 08:00hrs-17:00hrs</strong></li>
                  <li><strong>Saturday 09:00hrs-16:00hrs</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

export default Footer;
