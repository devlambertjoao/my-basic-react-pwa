import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Link to="/about">
        <button>To about</button>
      </Link>
    </div>
  );
};

export default About;
