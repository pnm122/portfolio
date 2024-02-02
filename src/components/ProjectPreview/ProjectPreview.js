import React, { useEffect, useState } from 'react';
import styles from './ProjectPreview.module.css';
import { Link } from 'react-router-dom';
import toolsToRender from 'toolsToRender';

export default function ProjectPreview({
  name,
  description,
  tools,
  cover,
  path,
  id
}) {

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

  let toolsRender = toolsToRender(tools);

  return (
    <div id={styles.projectWrapper}>
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
        src={window.location.origin + cover}
        aria-hidden={!hovering} 
        aria-disabled={!hasHovered} 
        style={{left: mousePos.x, top: mousePos.y}} 
        className={styles.hoverPreview}
      />
    </div>
  )
}
