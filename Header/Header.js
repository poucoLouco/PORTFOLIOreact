import React from 'react'
import './Header.css'
import logo from '../images/logo.png'

const Header = () => {


    
  return (
    <>
    <header className='header'>
        <div className='container d_flex'>
            <div className='logo'>
                <img src={logo} alt=''/>
            </div>
            <div className='navlink'>
                <ul className='link f_flex uppercase'>
                    <li><a href="#home">home</a></li>
                    <li><a href="#about">about</a></li>
                    <li><a href="#portfolio">portfolio</a></li>
                    <li><a href="#resume">resume</a></li>
                    <li><a href="#contact">contact</a></li>
                    <li><button className='home btn_shadow'>WORK TOGETHER</button></li>
                </ul>
              
            </div>
        </div>
    </header>
    </>
  )
}

export default Header