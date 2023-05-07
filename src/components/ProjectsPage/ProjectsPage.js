import React, { useEffect } from 'react';
import Header from 'components/Header/Header';
import getProjectsRender from 'getProjectsRender';
import Footer from 'components/Footer/Footer';
import styles from 'components/ProjectsPage/ProjectsPage.module.css';

export default function ProjectsPage() {
  let dist = 0;

  useEffect(() => {
    // For some reason the animation on the projects wrapper causes the project hover images to be positioned relative to the wrapper
    // I have no idea why this is the case, but one janky solution is to remove the fadeIn class after the fade-in occurs, like this
    let removeFadeInTimeout = setTimeout(() => {
      document.getElementById("removeFadeIn").classList.remove("fadeIn");
    }, 1500)
    
    let titleDOM = document.getElementById(styles.projectsTitle);
    // Make 10 copies of the text, separated by [separator]
    if(titleDOM.children.length == 0) {
      let separator = '—';
      let title = titleDOM.innerHTML;
      titleDOM.removeChild(titleDOM.firstChild);
      for(let i = 0; i < 10; i++) {
        let span = document.createElement("span");
        span.innerHTML = title + ` ${separator} `
        titleDOM.appendChild(span);
      }
    }
    let interval = setInterval(moveTitle, 5);

    return () => { clearInterval(interval); }
  }, [])

  // Move the title left, then move the first span to the end if it's no longer on the screen
  const moveTitle = () => {
    let titleDOM = document.getElementById(styles.projectsTitle);
    titleDOM.style.transform = `translateX(-${dist += 0.2}px)`;

    if(dist > titleDOM.firstChild.offsetWidth) {
      let copy = titleDOM.firstChild.cloneNode(true);
      titleDOM.removeChild(titleDOM.firstChild);
      titleDOM.appendChild(copy);
      dist = 0;
    }
  }

  let projectsRender = getProjectsRender({limit: -1});
  return (
    <>
      <Header selected={1} />
      <div className="container fadeIn" id="title">
        <div id={styles.titleInner}>
          <h1 id={styles.projectsTitle}>Projects</h1>
        </div>
        <p id={styles.subtitle}>These are my best works.</p>
      </div>
      <div className="container fadeIn" id="removeFadeIn">
        {projectsRender}
      </div>
      <Footer />
    </>
  )
}
