import React from "react";
import "./Home.css";
import pro from "../images/pro.png";
import { Typewriter} from "react-simple-typewriter";

const Home = () => {
  return (
    <>
      <section className="pro" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>HELLO</h3>
               <h5> MY NAME IS </h5>
               <h1><span>ROKSOLANA ODYNAK</span>
            </h1>
            <h5>I'M</h5><h2>FULL STACK DEVELOPER</h2>
            <h2>
              <span>
                <Typewriter
                  words={[
                    "Analytical Mindset",
                    "Curiosity and Inquisitiveness",
                    "Empathy",
                    "Flexibility",
                    "Love of Learning",
                    "Pragmatism",
                    "Team Player",
                    "Technical Mindset",
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            <p>
              Student of UC Berkeley Extension Coding Boot Camp.Web developer
              with a desire to launch a professional career in Web development.
              Excellent communication, time management and Problem-solving
              skills.I*m propensity for achieving goals through creativity, hard
              work and leadership with respect and colaboration.
            </p>
            <div className="pro_btn d_flex">
              <div className="col_1">
                <div className="button">
                  <button className="btn_shadow">
                    <i className="fa-brands fa-square-github"></i>
                  </button>
                  <button className="btn_shadow">
                    <i classname="fa-brands fa-linkedin"></i>
                  </button>
                </div>
              </div>
              {/* <div className="col_1">
                <h4>BEST SKILL ON</h4>
              </div> */}
            </div>
            <div className="right">
                <div className="right_img">
                    <img src={pro} alt='' />
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
