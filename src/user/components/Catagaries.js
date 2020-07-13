import React from "react";
import { Link } from "react-router-dom";

import "../styles/reset.scss";
import "../styles/Catagaries.scss";

function Home() {
  return (
    <>
      <div className="homepage">
        <h1>Music for everyone</h1>
        <h2>millions of songs</h2>
        <section>
          <div className="flex-container">
            <Link to="/songs" className="firstdiv-songscatagaries">
              <div className="div first-div thumbnail">
                <div>Punjabi songs</div>
                <img
                  src="/images/11.jpg"
                  className="catagaries-images"
                  alt="qwerty"
                />
              </div>
              <h2 className="catagories-songs-heading">Latest Punjabi Songs</h2>
              <p className="playnow-span">Play now</p>
            </Link>
            <Link to="/songs" className="firstdiv-songscatagaries">
              <div className="div secound-div thumbnail">
                <div>Hindi songs</div>
                <img
                  src="/images/12.jpg"
                  className="catagaries-images"
                  alt="qwerty"
                />
              </div>
              <h2 className="catagories-songs-heading">Latest Hindi Songs</h2>
              <p className="playnow-span">Play now</p>
            </Link>

            <Link to="/songs" className="firstdiv-songscatagaries">
              <div className="div third-div thumbnail">
                <div>English songs</div>
                <img
                  src="/images/13.jpg"
                  className="catagaries-images"
                  alt="qwerty"
                />
              </div>
              <h2 className="catagories-songs-heading">Latest English Songs</h2>
            </Link>

            <Link to="/songs" className="firstdiv-songscatagaries">
              <div className="div fourth-div thumbnail">
                <div>Himachali songs</div>
                <img
                  src="/images/14.jpg"
                  className="catagaries-images"
                  alt="qwerty"
                />
              </div>
              <h2 className="catagories-songs-heading">
                Latest Himachali Songs
              </h2>
              <p className="playnow-span">Play now</p>
            </Link>

            <Link to="/songs" className="firstdiv-songscatagaries">
              <div className="div fifth-div thumbnail">
                <div>Telgu songs</div>
                <img
                  src="/images/15.jpg"
                  className="catagaries-images"
                  alt="qwerty"
                />
              </div>
              <h2 className="catagories-songs-heading">Latest Telgu Songs </h2>
              <p className="playnow-span">Play now</p>
            </Link>

            <Link to="/songs" className="firstdiv-songscatagaries">
              <div className="div sixth-div thumbnail">
                <div>Haryanvi songs</div>
                <img
                  src="/images/16.jpg"
                  className="catagaries-images"
                  alt="qwerty"
                />
              </div>
              <h2 className="catagories-songs-heading">
                Latest Haryanvi Songs
              </h2>
              <p className="playnow-span">Play now</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
