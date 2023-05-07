import React from 'react';
import styles from './SingleProjectPage.module.css';
import projects from 'projectList.json';
import { useParams } from 'react-router-dom';
import ErrorPage from 'components/ErrorPage/ErrorPage';
import Header from 'components/Header/Header';
import { FaExternalLinkAlt } from 'react-icons/fa';
import toolsToRender from 'toolsToRender';

export default function SingleProjectPage(props) {
  const {path} = useParams();

  let p = projects.find(project => {
    return project.path == path;
  })

  if(p == null) return <ErrorPage />;

  let toolsRender = toolsToRender(p.tools);

  return (
    <>
      <Header />
      <div className="container" id="title">
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
      <div className="container">
        <p id={styles.description}>{p.longDescription}</p>
      </div>
    </>
  )
}
