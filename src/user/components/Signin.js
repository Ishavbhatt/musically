import React from "react";
import { Link } from "react-router-dom";

import { FiMusic } from "react-icons/fi";
import { FaUserPlus } from "react-icons/fa";

import { withRouter } from "react-router-dom";
import "../styles/reset.scss";
import "../styles/Signup.scss";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="signup-div">
          <center>
            <div>
              <span className="signup-icon-text">
                <FiMusic className="music-icon" />
                musically
              </span>
            </div>
            <div>
              <h3 className="signup-page-heading-secound">
                Sign In with your email address
              </h3>
            </div>
            <div class="wrapper fadeInDown">
              <div id="formContent">
                <h2 className="active"> Sign In </h2>
                <Link className="quiz-log" to="/signup">
                  <h2 className="inactive underlineHover">Sign Up </h2>
                </Link>
                <div className="fadeIn first">
                  <FaUserPlus id="icon" alt="User Icon" />
                </div>

                <form>
                  <input
                    type="email"
                    id="email"
                    className="fadeIn third"
                    name="email"
                    placeholder="Email"
                  />
                  <input
                    type="password"
                    id="password"
                    className="fadeIn second"
                    name="password"
                    placeholder="Password"
                  />
                  <input
                    type="submit"
                    className="fadeIn fourth"
                    value="Sign In"
                  />
                </form>
              </div>
            </div>
          </center>
        </div>
      </>
    );
  }
}

export default withRouter(Signup);
