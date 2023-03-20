import React from 'react';
import Typical from "react-typical"
import "./Home.css"
import Button from 'react-bootstrap/Button';


export default function Home() {
    return (
        <div className='container'>
            <div className='parent'>
                <div className='details'>
                  
                    <div className='name'>
                        <span className='text'>
                            {""}
                            <h1></h1>Hello, I*m<span className='highlighted-text'> Roksolana Odynak</span>
                        </span>
                    </div>
                    <div className='role'>
                        <span className='text'>
                            {""}
                            <h1>
                                Full Stack Developer
                            </h1>
                            <span className='tagline'>
                                <h3>
                                    {" "}
                                    <Typical
                                        loop={Infinity}
                                        steps={["Positive attitude", 1000,
                                            "Fast learner", 1000,
                                            "Reliability", 1000,
                                            "Excellent communication skills", 1000,
                                            "Good at teamwork", 1000
                                        ]}
                                    />
                                </h3>
                            </span>
                        </span>
                    </div>
                    <div className='options'>
                        <button className='primary-btn'>
                            {""}
                            Let*s work together{" "}
                        </button>
                        <div className='colz'>
                    <div className='colz-icon'>
                        <a href='https://github.com/poucoLouco'>
                            <i className="fa fa-github-square"></i>
                        </a>
                        <a href='https://www.linkedin.com/in/roksolana-odynak-25728025a/'>
                            <i class="fa fa-linkedin-square"></i>
                        </a>
                        </div>    
                    </div>
                    </div>
                </div>
                <div className='picture'>
                    <div className='background'>

                    </div>
                </div>
            </div>
        </div>
    )
}