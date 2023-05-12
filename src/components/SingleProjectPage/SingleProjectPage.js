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

  let imagesRender = p.images.map((image, index) => {
    return (
      <img key={index} src={image}></img>
    )
  })

  let x = [];

  // Next project is the next project in the projects array, wrapping around to the start if necessary
  let nextProject = projects[(projects.findIndex(project => { return project.path == path }) + 1) % projects.length];

  let s = "[#]asdf";

  // fun long function to detect [link]text formatted links and turn them into anchors
  const descriptionToRender = d => {
    let render = [];
    let nextStringStartIndex = 0;

    for(let i = 0; i < d.length; i++) {
      if(i == d.length - 1) render.push(d.substring(nextStringStartIndex, d.length));
      if(d.charAt(i) != '[') continue;

      let closingBracketIndex = i + 1;
      while(d.charAt(closingBracketIndex) != ']') {
        if(closingBracketIndex == d.length) {
          return "ERROR: No closing bracket in the description";
        }
        closingBracketIndex++;
      }

      let str = "";

      let prevString = d.substring(nextStringStartIndex, i);
      let link = d.substring(i + 1, closingBracketIndex);
      let linkText = "";
      let linkTextIndex = closingBracketIndex + 1;
      while(linkTextIndex != d.length && d.charAt(linkTextIndex) != ' ') {
        linkText += d.charAt(linkTextIndex);
        linkTextIndex++;
      }

      render.push(prevString);
      render.push(<a href={link} target="_blank" rel="noreferrer" className={`underline-anchor ${styles.descriptionAnchor}`}>{linkText}</a>)
      
      nextStringStartIndex = linkTextIndex;
    }

    console.log(render);

    return (
      <p id={styles.description}>
        {render}
      </p>
    )
  }

  let descriptionRender = descriptionToRender(p.longDescription);

  return (
    <>
      <Header />
      <div className="container fadeIn" id="title">
        <h1>{p.name}</h1>
        <div id={styles.info}>
          <div>
            <h6>Time Frame</h6>
            <span>{p.time}</span>
          </div>
          <div>
            <h6>Tech Stack</h6>
            <span>{toolsRender}</span>
          </div>
          <div>
            <h6>Source</h6>
            <div id={styles.src}><a href={p.source.link} target="_blank" className="underline-anchor">{p.source.type} <FaExternalLinkAlt /></a></div>
          </div>
        </div>
      </div>
      <div className="container fadeIn">
        {descriptionRender}
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
