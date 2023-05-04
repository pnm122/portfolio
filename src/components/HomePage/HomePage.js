import React from 'react'
import { FaArrowRight, FaCss3, FaFigma, FaGithub, FaHtml5, FaJava, FaJs, FaReact } from 'react-icons/fa';
import { SiAdobexd, SiFirebase, SiFlutter, SiSpring } from 'react-icons/si';
import Header from '../Header/Header';
import styles from './HomePage.module.css';
import picture from '../../assets/portfolio-picture.png';
import { ReactComponent as ProjectsCircle } from '../../assets/projects-circle.svg'
import { ReactComponent as ContactCircle } from '../../assets/contact-circle.svg'
import projects from '../../projectList.json';
import ProjectPreview from '../ProjectPreview/ProjectPreview';

export default function Homepage() {
  let projectsRender = projects.map(project => {
    return (
      <ProjectPreview 
        key={project.id}
        name={project.name} 
        description={project.shortDescription} 
        tools={project.tools}
        path={project.path}
        id={project.id}
      />
    )
  })

  return (
    <>
      <Header />
      <div id={styles.hero} className="container">
        <div id={styles.heroLeft}>
          <h4>Hi, I'm</h4>
          <h2>Pierce Martin</h2>
          <p>I'm a software developer with a particular passion for frontend design.</p>
          <button className="primary-button">Contact Me <FaArrowRight /></button>
        </div>
        <img src={picture} />
      </div>
      <div className="container">
        <div id={styles.skills}>
          <FaHtml5 />
          <FaCss3 />
          <FaJs />
          <FaReact />
          <FaJava />
          <SiSpring />
          <SiFlutter />
          <SiFirebase />
          <FaGithub />
          <FaFigma />
          <SiAdobexd />
        </div>
      </div>
      <div className="container" id={styles.projects}>
        <div><ProjectsCircle width={200} className="rotate" /></div>
        <div>
          {projectsRender}
        </div>
      </div>
      {/* <ContactCircle width={200} className="rotate" /> */}
    </>
  )
}
