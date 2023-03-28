import React from 'react'
import Header from './components/Header/Header'
import './App.css'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import Resume from './components/Resume/Resume'
import Contact from './components/Contact/Contact'


const App = () => {
  return (
    <>
 <Header/>
 <Home/>
 <Projects/>
 <Resume/>
 <Contact/>
 </>
  )
}

export default App