import React from "react";
import Card from "../Projects/Card";
import ResumeData from "./ResumeData";
import "./Resume.css";
import resume from "../images/resume.pdf";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Resume = () => {
  return (
    <>
      <section className="Resume" id="resume">
        <div className="container top">
          <div className="heading text-center">
            <h4>Student of UC Berkeley Extension</h4>
            <h1>MY RESUME</h1>
            <a href={resume} download="RESUME RO">
              <Button onClick={resume} type="button">
                DOWNLOAD
              </Button>
            </a>
          </div>
          <div className="content-section mtop d_flex">
            <div className="left">
              <div className="heading">
                <h4>2008-2023</h4>
                <h1>EDUCATION</h1>
              </div>
              <div className="content">
                {ResumeData.map((val, id) => {
                  if (val.category === "education") {
                    return <Card key={id} title={val.title} year={val.year} />;
                  }
                })}
              </div>
            </div>
            <div className="left">
              <div className="heading">
                <h4>2008-2023</h4>
                <h1>JOB EXPERIENCE</h1>
              </div>
              <div className="content">
                {ResumeData.map((val, id) => {
                  if (val.category === "experience") {
                    return <Card key={id} title={val.title} year={val.year} />;
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
