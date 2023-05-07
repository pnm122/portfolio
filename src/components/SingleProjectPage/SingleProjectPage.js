import React, { useEffect } from 'react';
import styles from './SingleProjectPage.module.css';
import projects from 'projectList.json';
import { Link, useParams } from 'react-router-dom';
import ErrorPage from 'components/ErrorPage/ErrorPage';
import Header from 'components/Header/Header';
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import toolsToRender from 'toolsToRender';
import Footer from 'components/Footer/Footer';

export default function SingleProjectPage(props) {
  const {path} = useParams();

  // Use path as dependency because switching between project pages uses the same component, but the path will change
  useEffect(() => { window.scrollTo(0, 0); }, [path])

  let p = projects.find(project => {
    return project.path == path;
  })

  if(p == null) return <ErrorPage />;

  let toolsRender = toolsToRender(p.tools);

  let imagesRender = p.images.map(image => {
    return (
      <img src={image}></img>
    )
  })

  let x = [];

  // Next project is the next project in the projects array, wrapping around to the start if necessary
  let nextProject = projects[(projects.findIndex(project => { return project.path == path }) + 1) % projects.length];

  return (
    <>
      <Header />
      <div className="container fadeIn" id="title">
        <h1>{p.name}</h1>
        <table id={styles.infoTable}>
          <thead>
            <tr>
              <th>Time Frame</th>
              <th>Tech Stack</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{p.time}</td>
              <td>{toolsRender}</td>
              <td><a href={p.source.link} target="_blank" className="underline-anchor">{p.source.type} <FaExternalLinkAlt /></a></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="container fadeIn">
        <p id={styles.description}>{p.longDescription}</p>
      </div>
      <div className="container fadeIn" id={styles.images}>
        {imagesRender}
      </div>
      <div className="container fadeIn" id={styles.links}>
        <div><Link to="/projects" className="large-anchor underline-anchor">See all my projects <FaArrowRight /></Link></div>
        <div id={styles.nextProject}>
          <Link to={`/projects/${nextProject.path}#`} className="large-anchor underline-anchor">Next Project <FaArrowRight /></Link>
          <span>{nextProject.name}</span>
        </div>
      </div>
      <Footer />
    </>
  )
}
