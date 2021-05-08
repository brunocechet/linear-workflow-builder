import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as HeaderImage } from "./images/undraw_online_connection_6778.svg";

const Home = () => {
  return (
    <>
      <HeaderImage height={300} />
      <h1>Welcome to Workflow Builder!</h1>
      <Link to="/builder">Click here to build your Workflow!</Link>
    </>
  );
};

export default Home;
