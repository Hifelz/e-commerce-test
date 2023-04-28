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
      <div className="rodape" align="left">
        <div className="teste2" align="left">
          <h1>Thank you for coming by</h1>
          <div className="teste" align="right">
            <h2>Contact me @Hifelz on github</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
