import React from "react";
import { Link } from "react-router-dom";
import { FiMusic } from "react-icons/fi";
import { NavLink } from "react-router-dom";

import "../styles/reset.scss";
import "../styles/Header.scss";

class Header extends React.Component {
  PublicHeader = () => {
    return (
      <div>
        <div className="header-div">
          <div className="navbar-brand">
            <Link className="music-logo" to="/">
              <span className="icon-text">
                <FiMusic className="music-icon" />
                musically
              </span>
            </Link>
          </div>

          <div className="right-side-header">
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="signup-signin-button">
                  <NavLink
                    activeClassName="navbar__link--active"
                    className="navbar_link"
                    to="/signup"
                  >
                    Sign up
                  </NavLink>
                  <NavLink
                    activeClassName="navbar__link--active"
                    className="navbar_link"
                    to="/signin"
                  >
                    Sign in
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  PrivateHeader = () => {
    return (
      <div>
        <div className="header-div">
          <div className="navbar-brand">
            <Link className="quiz-logo" to="/users">
              <h1 className="quiz-head">musically</h1>
            </Link>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <button className="button-header">
                    <NavLink
                      onClick={this.handleLogout}
                      // activeClassName="navbar__link--active"
                      className="navbar__link"
                      to="/users"
                    >
                      Logout
                    </NavLink>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <>
        <div className="header-wrapper">
          <nav className="header">
            {localStorage.Token ? this.PrivateHeader() : this.PublicHeader()}
          </nav>
        </div>
      </>
    );
  }
}

export default Header;
