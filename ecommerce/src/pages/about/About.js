import React from "react";

import Navbar from "../../components/navbar/Navbar";
import "../../style/main.css";

const About = () => {
  return (
    <div className="About">
      <>
        <React.Fragment>
          <Navbar />
        </React.Fragment>
      </>

      <header className="App-header">
        <h1>Who am I ?</h1>
        <br />
        <p>
          I am Hifelz a front end developer with a passion for building websites
          and applications. I have a passion for learning new technologies, and
          I love learning new things.
        </p>
      </header>
    </div>
  );
};
export default About;
