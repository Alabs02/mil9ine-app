import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { NavBar, Footer, MiniFooter, Subscribe, HomeSection } from '../../Components';
import { LoadScripts } from '../../Hooks';

const AboutPage = () => {

  LoadScripts("js/bootstrap.min.js");
  LoadScripts("js/smoothscroll.min.js");
  LoadScripts("js/jquery.stellar.min.js");
  LoadScripts("assets/slider-pro/js/jquery.sliderPro.min.js");
  LoadScripts("js/scrollspy.min.js");
  LoadScripts("js/wow.min.js");
  LoadScripts("assets/owl-carousel/owl.carousel.min.js");
  LoadScripts("js/metisMenu.min.js");
  LoadScripts("js/theme.min.js");

  return (
    <Fragment>
      <NavBar />
      {/* ===================================
          PAGE HEADER
        ======================================== */}
      <div className="page-header" data-stellar-background-ratio="0.4">
        <div className="page-header-overlay" />
        <div className="container">
          <div className="row">
            {/* === PAGE HEADER TITLE === */}
            <div className="page-header-title">
              <h2>ABOUT US</h2>
            </div>
            {/* === PAGE HEADER BREADCRUMB === */}
            <div className="page-header-breadcrumb">
              <ol className="breadcrumb">
                <li><Link to="/">Home</Link></li>
                <li className="active">About Us</li>
              </ol>
            </div>
            {/* === PAGE HEADER BUTTON === */}
            {/*<div className="page-header-button">
              <Link to="#aboutus">
                <div className="my-btn my-btn-primary">
                  <div className="my-btn-bg-top" />
                  <div className="my-btn-bg-bottom" />
                  <div className="my-btn-text">
                    ABOUT US
                  </div>
                </div>
              </Link>
            </div>*/}
          </div>
        </div>
      </div>
      {/* ===================================
        END PAGE HEADER
      ======================================== */}

      {/* =========================
          ABOUT TEXT
        ============================== */}
      <div className="def-section about-text" id="aboutus">
        <div className="container">
          <div className="about-text-image">
          </div>
          <h2>We Offer Best Traveling Experience</h2>
          <p>
            Mile9ine is more than just a website. We intend to offer the best online ticket booking experience so that booking and planning for your road trips can be as hitch free as possible. We are on a mission to make bookings for- holidays, business, excursions, education, adventure, field trips etc- a comfortable activity. Hopefully, we can help bridge the gaps and improve on the services of bus/car terminals.
          </p>
        </div>
      </div>
      {/* =========================
        END ABOUT TEXT
      ============================== */}


      {/* =========================
          ABOUT TEAM
        ============================== */}
      {false && <div className="def-section about-team">
        <div className="container">
          <div className="row">
            {/* === TEAM ITEM === */}
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
              <div className="team-item">
                <div className="team-item-image">
                  <div className="team-item-image-overlay">
                    <div className="team-item-icons">
                      <Link to="/"><i className="fa fa-twitter" /></Link>
                      <Link to="/"><i className="fa fa-facebook" /></Link>
                      <Link to="/"><i className="fa fa-google-plus" /></Link>
                    </div>
                  </div>
                  <img src="/media/team/1.jpg" alt="" />
                </div>
                <div className="team-item-name">
                  Ted Walmart
                </div>
                <div className="team-item-position">
                  DIRECTOR
                </div>
              </div>
            </div>
            {/* === TEAM ITEM === */}
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
              <div className="team-item">
                <div className="team-item-image">
                  <div className="team-item-image-overlay">
                    <div className="team-item-icons">
                      <Link to="/"><i className="fa fa-twitter" /></Link>
                      <Link to="/"><i className="fa fa-facebook" /></Link>
                      <Link to="/"><i className="fa fa-google-plus" /></Link>
                    </div>
                  </div>
                  <img src="/media/team/2.jpg" alt="" />
                </div>
                <div className="team-item-name">
                  John Simon
                </div>
                <div className="team-item-position">
                  SHOP DIRECTOR
                </div>
              </div>
            </div>
            {/* === TEAM ITEM === */}
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
              <div className="team-item">
                <div className="team-item-image">
                  <div className="team-item-image-overlay">
                    <div className="team-item-icons">
                      <Link to="/"><i className="fa fa-twitter" /></Link>
                      <Link to="/"><i className="fa fa-facebook" /></Link>
                      <Link to="/"><i className="fa fa-google-plus" /></Link>
                    </div>
                  </div>
                  <img src="/media/team/6.jpg" alt="" />
                </div>
                <div className="team-item-name">
                  Fredy Kuna
                </div>
                <div className="team-item-position">
                  MARKETING
                </div>
              </div>
            </div>
            {/* === TEAM ITEM === */}
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
              <div className="team-item">
                <div className="team-item-image">
                  <div className="team-item-image-overlay">
                    <div className="team-item-icons">
                      <Link to="/"><i className="fa fa-twitter" /></Link>
                      <Link to="/"><i className="fa fa-facebook" /></Link>
                      <Link to="/"><i className="fa fa-google-plus" /></Link>
                    </div>
                  </div>
                  <img src="/media/team/4.jpg" alt="" />
                </div>
                <div className="team-item-name">
                  Jastin Timer
                </div>
                <div className="team-item-position">
                  SHOP DIRECTOR
                </div>
              </div>
            </div>
            {/* === TEAM ITEM === */}
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
              <div className="team-item">
                <div className="team-item-image">
                  <div className="team-item-image-overlay">
                    <div className="team-item-icons">
                      <Link to="/"><i className="fa fa-twitter" /></Link>
                      <Link to="/"><i className="fa fa-facebook" /></Link>
                      <Link to="/"><i className="fa fa-google-plus" /></Link>
                    </div>
                  </div>
                  <img src="/media/team/5.jpg" alt="" />
                </div>
                <div className="team-item-name">
                  Simon Paul 
                </div>
                <div className="team-item-position">
                  DEVELOPER
                </div>
              </div>
            </div>
            {/* === TEAM ITEM === */}
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
              <div className="team-item">
                <div className="team-item-image">
                  <div className="team-item-image-overlay">
                    <div className="team-item-icons">
                      <Link to="/"><i className="fa fa-twitter" /></Link>
                      <Link to="/"><i className="fa fa-facebook" /></Link>
                      <Link to="/"><i className="fa fa-google-plus" /></Link>
                    </div>
                  </div>
                  <img src="/media/team/6.jpg" alt="" />
                </div>
                <div className="team-item-name">
                  Linda Smith
                </div>
                <div className="team-item-position">
                  SENIOR
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>}
      {/* =========================
        END ABOUT TEAM
      ============================== */}


      {/* ===================================
            SECTION REVIEWS AND FAQ
        ======================================== */}
        <HomeSection />
      {/* ===================================
        END SECTION REVIEWS AND FAQ
      ======================================== */}

      <Subscribe />
      <Footer />
      <MiniFooter />
    </Fragment>
  );
}

export default AboutPage;
