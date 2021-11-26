import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { locationRef } from '../../Utils';
import { useHistory } from 'react-router-dom';

const NavBar = () => {

  const history = useHistory();

  return (
    <Fragment>
      {/* =========================
          TOP MAIN NAVBAR
        ============================== */}
      <div className="main-navbar main-navbar-1" id="main-navbar">
        <div className="container">
          <div className="row">
            {/* === TOP LOGO === */}
            <div className="logo" id="main-logo">
              <div className="logo-image">
                <img src="/img/logo.png" alt="logo" />
              </div>
              <div className="logo-text">
                Mile <span className="color-primary">9ine</span>
              </div>
            </div>
            {/* === TOP SEARCH === */}
            <div className="main-search-input" id="main-search-input">
              <form>
                <input type="text" id="main-search" name="main-search" placeholder="Try and type enter..." />
              </form>
            </div>
            <div className="search-control">
              {/* === top search button show === */}
              {/*<a id="show-search" className="show-search latest" href="#">
                <div className="my-btn my-btn-primary">
                  <div className="my-btn-bg-top" />
                  <div className="my-btn-bg-bottom" />
                  <div className="my-btn-text">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </a>*/}
              {/* === top search button close === */}
              <a id="close-search" className="close-search latest" href={null}>
                <div className="my-btn my-btn-primary">
                  <div className="my-btn-bg-top" />
                  <div className="my-btn-bg-bottom" />
                  <div className="my-btn-text">
                    <i className="fa fa-close" />
                  </div>
                </div>
              </a>
            </div>
            <div className="show-menu-control">
              {/* === top search button show === */}
              <a id="show-menu" className="show-menu" href={null}>
                <div className="my-btn my-btn-primary">
                  <div className="my-btn-bg-top" />
                  <div className="my-btn-bg-bottom" />
                  <div className="my-btn-text">
                    <i className="fa fa-bars" />
                  </div>
                </div>
              </a>
            </div>
            {/* === TOP MENU === */}
            <div className="collapse navbar-collapse main-menu main-menu-1" id="main-menu">
              <ul className="nav navbar-nav">
                {/* === top menu item === */}
                <li onClick={() => window.location.reload(history.push('/'))}>
                  <a>Home</a>
                </li> 
                <li className="main-menu-separator" />
                {/* === top menu item === */}
                <li className="main-menu-separator" />
                {/* === top menu item === */}
                <li>
                  <NavLink to="/about">About us</NavLink>
                </li> 
                <li className="main-menu-separator" />
                {/* === top menu item === */}
                <li className="main-menu-separator" />
                {/* === top menu item === */}
                <li className="main-menu-separator" />
                {/* === top menu item === */}
                <li>
                  <NavLink className="latest" to="/contact">Contacts</NavLink>
                </li>
                <li className="main-menu-separator" />
                <li className="dropdown">
                  <a data-toggle="dropdown" href={null}>Get Park Started</a>
                  <ul className="dropdown-menu" role="menu">
                    <li>
                      <a onClick={() => locationRef('/register/park')}>Register Park</a>
                    </li>
                    <li><a onClick={() => locationRef('/park/admin/signin')}>Park Admin Login</a>
                    </li>
                    <li><a onClick={() => locationRef('/park/staff/signin')}>Park Staff Login</a>
                    </li>
                  </ul>
                </li>
                <li className="main-menu-separator" />
                <li className="dropdown">
                  <a data-toggle="dropdown" href={null}>Get User Started</a>
                  <ul className="dropdown-menu" role="menu">
                    <li>
                      <a onClick={() => locationRef('/park/user/signup')}>User SignUp</a>
                    </li>
                    <li><a onClick={() => locationRef('/park/user/signin')}>User Login</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* =========================
        END TOP MAIN NAVBAR
      ============================== */}
    </Fragment>
  );
}

export default NavBar;
