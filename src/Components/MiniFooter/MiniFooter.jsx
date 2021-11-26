import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { locationRef } from '../../Utils';

const MiniFooter = () => {

  const history = useHistory();
  
  return (
    <Fragment>
      {/* ===================================
          BOTTOM SECTION
        ======================================== */}
      <div className="bottom">
        <div className="container">
          <div className="row">
            {/* === BOTTOM LEFT === */}
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 bottom-1">
              COPYRIGHT {new Date().getFullYear()} | MILE <span className="color-primary">9INE</span>
            </div>
            {/* === BOTTOM CENTER === */}
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 bottom-2">
              <a href={null}><div className="my-btn my-btn-grey">
                  <div className="my-btn-bg-top" />
                  <div className="my-btn-bg-bottom" />
                  <div className="my-btn-text">
                    <i className="fa fa-twitter" />
                  </div>
                </div></a>
              <a href={null}><div className="my-btn my-btn-grey">
                  <div className="my-btn-bg-top" />
                  <div className="my-btn-bg-bottom" />
                  <div className="my-btn-text">
                    <i className="fa fa-facebook" />
                  </div>
                </div></a>
              <a href={null}><div className="my-btn my-btn-grey">
                  <div className="my-btn-bg-top" />
                  <div className="my-btn-bg-bottom" />
                  <div className="my-btn-text">
                    <i className="fa fa-google-plus" />
                  </div>
                </div></a>
              <a href={null}><div className="my-btn my-btn-grey">
                  <div className="my-btn-bg-top" />
                  <div className="my-btn-bg-bottom" />
                  <div className="my-btn-text">
                    <i className="fa fa-pinterest-p" />
                  </div>
                </div></a>
              <a href={null}><div className="my-btn my-btn-grey">
                  <div className="my-btn-bg-top" />
                  <div className="my-btn-bg-bottom" />
                  <div className="my-btn-text">
                    <i className="fa fa-instagram" />
                  </div>
                </div></a>
            </div>
            {/* === BOTTOM RIGHT === */}
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 bottom-3">
              <a href={null}>TERM OF USE</a> | 
              MADE BY <a href="/">MILE <span className="color-primary">9INE</span></a>
            </div>
          </div>
        </div>
      </div>
      {/* ===================================
        END BOTTOM SECTION
      ======================================== */}


      {/* =========================
          SLIDE MENU
        ============================== */}
      <aside id="slide-menu" className="slide-menu">
        {/* === CLOSE MENU BUTON === */}	
        <div className="close-menu" id="close-menu">
          <i className="fa fa-close" />
        </div>
        {/* === SLIDE MENU === */}	
        <ul id="left-menu" className="left-menu">
          {/* === SLIDE MENU ITEM === */}	
          <li onClick={() => window.location.reload(history.push('/'))}> 
            <a  href={null}>Home</a>
            {/* === slide menu child === */}	
          </li>
          {/* === SLIDE MENU ITEM === 
          <li> 
            <a href="#">Service <i className="fa fa-plus arrow" /></a>
         
            <ul className="slide-menu-child">
              <li><a href="03_services.html">Service 1</a></li>
              <li><a href="04_services.html">Service 2</a></li>
              <li><a href="05_service_detail.html">Service Details</a></li>
            </ul>
          </li>
          */}	
          {/* === SLIDE MENU ITEM === */}	
          <li> 
            <NavLink to="/about">About us</NavLink>
          </li>
          {/* === SLIDE MENU ITEM === 
          <li> 
            <a href="#">Elements <i className="fa fa-plus arrow" /></a>
            
            <ul className="slide-menu-child">
              <li><a href="07_typography.html">Typography</a></li>
              <li><a href="08_buttons.html">Buttons</a></li>
              <li><a href="09_progress.html">Progress Bars</a></li>
              <li><a href="10_alerts.html">Alerts</a></li>
            </ul>
          </li>
          */}	

          <li>
            <NavLink className="latest" to="/contact">Contacts</NavLink>
          </li>

          {/* === SLIDE MENU ITEM === */}	
          <li>
            <a href={null}>Get Park Started <i className="fa fa-plus arrow" /></a>
            {/* === slide menu child === */}	
            <ul className="slide-menu-child">
              <li><a onClick={() => locationRef('/register/park')}>Register Park</a></li>
              <li><a onClick={() => locationRef('/park/admin/signin')}>Park Admin Login</a></li>
              <li><a onClick={() => locationRef('/park/staff/signin')}>Park Staff Login</a></li>
            </ul>
          </li>
          {/* === SLIDE MENU ITEM === */}	

          {/* === SLIDE MENU ITEM === */}	
          <li>
            <a href={null}>Get User Started <i className="fa fa-plus arrow" /></a>
            {/* === slide menu child === */}	
            <ul className="slide-menu-child">
              <li><a onClick={() => locationRef('/park/user/signup')}>User SignUp</a></li>
              <li><a onClick={() => locationRef('/park/user/signin')}>User Login</a></li>
            </ul>
          </li>
          {/* === SLIDE MENU ITEM === */}	
        </ul>
      </aside>
      {/* =========================
        END SLIDE MENU
      ============================== */}

      {/* =========================
          BLACK OVERLAY
        ============================== */}
      <div className="black-overlay" id="black-overlay" />
      {/* =========================
          END BLACK OVERLAY
        ============================== */}
    </Fragment>
  );
}

export default MiniFooter;
