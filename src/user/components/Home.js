import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

import "../styles/reset.scss";
import "../styles/Home.scss";

function Home() {
  return (
    <>
      <div className="homepage">
        <Header />
        <div className="flex">
          <div>
            <h1>Music for everyone</h1>
            <h2>millions of songs</h2>
            <Link to="/catagaries">
              <button className="btn free-music-button">Get Free Music</button>
            </Link>
          </div>
          {/* <div>
            <img src="images/music.svg" className="music-drawicon" alt="draw" />
          </div> */}
        </div>

        <div className="footer-section">
          <div className="footer-wrapper">
            <div>
              <div className="footer-copy">
                Made with ❤️ by <span className="ishavbhatt">Ishav Bhatt</span>
              </div>
            </div>

            <div className="rfooter-wrapper-items">
              <a
                className="footer-items"
                href="https://www.instagram.com/ishavbhatt143/"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a
                className="footer-items"
                href="https://twitter.com/ishavbhatt143"
                target="_blank"
              >
                <FaTwitter />
              </a>
              <a
                className="footer-items"
                href="https://www.linkedin.com/in/ishav-bhatt-a3484b192/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
