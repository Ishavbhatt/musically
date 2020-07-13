import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="homepage">
        <Header />
        <h1>home page</h1>
      </div>
    </>
  );
}

export default Home;
