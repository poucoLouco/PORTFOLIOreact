import React from 'react'
import Card from './Card'
import data from './ProjectsData'
import './Projects.css'

const Projects = () => {
  return (
    <>
        <section className='projects top' id='projects'>
   <div className='container'>
    <div className='heading'>
        <h4>Projects</h4>
        <h1>What i did</h1>
    </div>
    <div className='content grid'>
      {data.map((val, index)=>{
        return <Card key={index} image={val.image} title={val.title} desc={val.desc}/>
      })}
        
        
    </div>
   </div>
   </section>
   </>
  )
}

export default Projects