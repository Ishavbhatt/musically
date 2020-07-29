import React from "react";
import { Link } from "react-router-dom";

import "../styles/reset.scss";
import "../styles/Catagaries.scss";

class Song extends React.Component {
  render() {
    return (
      <>
        <div className="homepage">
          <h1>Music for everyone</h1>
          <h2>millions of songs</h2>

          <audio controls>
            {/* <source src="horse.ogg" type="audio/ogg" /> */}
            <source src="/musics/khariyat.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </>
    );
  }
}

export default Song;
