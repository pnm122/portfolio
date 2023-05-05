import React, { useEffect, useState } from 'react';
import styles from './ProjectPreview.module.css';
import { FaCss3, FaFigma, FaGithub, FaHtml5, FaJava, FaJs, FaReact } from 'react-icons/fa';
import { SiAdobexd, SiFirebase, SiFlutter, SiSpring } from 'react-icons/si';
import { Link } from 'react-router-dom';

export default function ProjectPreview({
  name,
  description,
  tools,
  images,
  path,
  id
}) {
  let coverImage = images[0];

  const [mousePos, setMousePos] = useState({});
  const [hovering, setHovering] = useState(false);
  // disables animation property of hover image when the page is first loaded
  const [hasHovered, setHasHovered] = useState(false);

  const handleMouseMove = e => {
    // console.log(e.movementX);
    if(!hovering) return;

    let x = e.clientX;
    let y = e.clientY + window.scrollY;

    setMousePos({x: x, y: y});
  }

  useEffect(() => {

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [handleMouseMove])

  let toolsRender = [];
  for(let tool of tools) {
    switch(tool) {
      case 'html':
        toolsRender.push(<FaHtml5 />);
        break;
      case 'css':
        toolsRender.push(<FaCss3 />);
        break;
      case 'js':
        toolsRender.push(<FaJs />);
        break;
      case 'react':
        toolsRender.push(<FaReact />);
        break;
      case 'java':
        toolsRender.push(<FaJava />);
        break;
      case 'spring':
        toolsRender.push(<SiSpring />);
        break;
      case 'flutter':
        toolsRender.push(<SiFlutter />);
        break;
      case 'firebase':
        toolsRender.push(<SiFirebase />);
        break;
      case 'github':
        toolsRender.push(<FaGithub />);
        break;
      case 'figma':
        toolsRender.push(<FaFigma />);
        break;
      case 'adobexd':
        toolsRender.push(<SiAdobexd />);
        break;
      default:
        console.log("UNKNOWN TYPE: " + tool);
    }
  }

  return (
    <>
      <Link onMouseEnter={() => { setHovering(true); setHasHovered(true) }} onMouseLeave={() => setHovering(false)} to={`/projects/${path}`} className={styles.project} id={`project${id}`}>
        <div className={styles.projectInfo}>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.tools}>
          {toolsRender}
        </div>
      </Link>
      <div aria-hidden={!hovering} className={styles.lines}>
      </div>
      <img 
        src={window.location.origin + coverImage}
        aria-hidden={!hovering} 
        aria-disabled={!hasHovered} 
        style={{left: mousePos.x, top: mousePos.y}} 
        className={styles.hoverPreview}
      />
    </>
  )
}
