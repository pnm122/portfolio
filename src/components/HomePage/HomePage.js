import React, { useEffect } from 'react'
import { FaArrowRight, FaCss3, FaFigma, FaGithub, FaHtml5, FaJava, FaJs, FaReact } from 'react-icons/fa';
import { SiAdobexd, SiFirebase, SiFlutter, SiSpring } from 'react-icons/si';
import Header from '../Header/Header';
import styles from './HomePage.module.css';
import picture from '../../assets/portfolio-picture.png';
import { ReactComponent as ProjectsCircle } from '../../assets/projects-circle.svg'
import { ReactComponent as ContactCircle } from '../../assets/contact-circle.svg'
import projects from '../../projectList.json';
import ProjectPreview from '../ProjectPreview/ProjectPreview';
import { Link } from 'react-router-dom';

export default function Homepage() {

  useEffect(() => {
    // For some reason the animation on the projects wrapper causes the project hover images to be positioned relative to the wrapper
    // I have no idea why this is the case, but one janky solution is to remove the fadeIn class after the fade-in occurs, like this
    setTimeout(() => {
      document.getElementById("removeFadeIn").classList.remove("fadeIn");
    }, 1500)

    const animatedElems = document.getElementsByClassName('animateIn');
    for(let elem of animatedElems) {
      if(elem.children.length > 1) return;

      let str = elem.innerHTML
      // console.log(str);

      elem.innerHTML = "";

      // Since I render the cursor after each span, I need a span to put a cursor to animate the blinking before the text comes in
      let cursorSpan = document.createElement("span");
      cursorSpan.innerHTML = "&nbsp;";
      cursorSpan.classList.add("cursorOnly");
      elem.appendChild(cursorSpan);

      for(let i = 0; i < str.length; i++) {
        const newSpan = document.createElement("span");

        if(str.charAt(i) == " ") newSpan.innerHTML = "&nbsp;";
        else newSpan.innerHTML = str.charAt(i);

        elem.appendChild(newSpan);
      }

      elem.appendChild(cursorSpan.cloneNode(true));

      animateIn(elem);
    }
  }, [])

  const animateIn = elem => {
    const WAIT_BEFORE_TIME = 2000;
    const DEL_TIME = 80;
    const WAIT_AFTER_TIME = 1000;
    const CTA_DELAY = 500;

    // Display the first span, because it's used for the cursor
    elem.children.item(0).classList.add("animated");

    // Show each span one by one after WAIT_BEFORE_TIME, separated by DEL_TIME
    let index = 1;
    setTimeout(() => {
      let interval = setInterval(() => {
        // stop showing + combining spans when we're at the end of the span list
        // check if == length - 1 instead of == length because the last element is the cursorOnly span
        if(index == elem.children.length - 1) {
          clearInterval(interval);

          // hide the cursor once all the text is animated
          setTimeout(() => {
            elem.classList.add("doneAnimating");
          }, WAIT_AFTER_TIME)

          // Animate in the CTA after all the text is displayed
          setTimeout(() => {
            document.getElementById("cta").classList.add("ctaAnimateIn");
          }, WAIT_AFTER_TIME + CTA_DELAY)

        } else {
          let numSpansCombined = combineSpans(elem.children, index);
          index -= numSpansCombined;

          let span = elem.children.item(index);

          // mark this span as being animated and remove the cursor from the previous span
          // if the classList already contains these classes, nothing happens
          span.classList.add("animated");
          if(index != 0) {
            elem.children.item(index - 1).classList.add("noCursor");
          }
          index++;
        }
      }, DEL_TIME)
    }, WAIT_BEFORE_TIME)
  }

  const combineSpans = (elems, index) => {
    let numSpansCombined = 0;
    let text = "";
    for(let i = index; i >= 0; i--) {
      let t = elems.item(i).innerHTML;
      if(t == '&nbsp;') 
        break;

      // remove any spans that will be combined into the span originally at [index]
      if(i != index) {
        numSpansCombined++;
        elems.item(i).remove();
      }
      text = t + text;
    }
    // nothing changes if no spans were removed
    if(numSpansCombined == 0) return 0;

    // since numSpansCombined spans were removed from the span list, index - numSpansCombined now contains the span originally at [index]
    // replace the text there with the combined text
    elems.item(index - numSpansCombined).innerHTML = text;
    
    return numSpansCombined;
  }

  let projectsRender = projects.map(project => {
    return (
      <ProjectPreview 
        key={project.id}
        name={project.name} 
        description={project.shortDescription} 
        tools={project.tools}
        path={project.path}
        images={project.images}
        id={project.id}
      />
    )
  })

  return (
    <>
      <Header />
      <div id={styles.hero} className="container fadeIn">
        <div id={styles.heroLeft}>
          <h4>Hi, I'm</h4>
          <h2>Pierce Martin</h2>
          <p className="animateIn code">// I'm a software developer with a particular passion for frontend design.</p>
          <div id="ctaWrapper">
            <button id="cta" className="primary-button">
              Contact Me 
              <FaArrowRight />
            </button>
            <div id="cta-hover-1"></div>
            <div id="cta-hover-2"></div>
          </div>
        </div>
        <img src={picture} />
      </div>
      <div className="container fadeIn">
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
      <div className={`container ${styles.twoColumns} fadeIn`} id="removeFadeIn">
        <div className={styles.circleTitleWrapper}><ProjectsCircle width={200} className="rotate" /></div>
        <div>
          {projectsRender}
          <div className="flex">
            <Link className="large-anchor" to="/projects">See all my projects <FaArrowRight /></Link>
          </div>
        </div>
      </div>
      <div className={`container ${styles.twoColumns} fadeIn`}>
        <div className={styles.circleTitleWrapper}><ContactCircle width={200} className="rotate" /></div>
        <div className={`flex ${styles.contactWrapper}`}>
          <div>
            <a href="mailto:pnmartin02@gmail.com" className="with-gradient">
              <p>
                <span>pnmartin02</span>
                <span>@gmail.com</span>
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
