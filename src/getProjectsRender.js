import projects from './projectList.json';
import ProjectPreview from 'components/ProjectPreview/ProjectPreview';

export default function getProjectsRender({limit}) {
  // render only [limit] projects (all of them if limit == -1)
  projects = projects.filter((e, index) => {
    return limit == -1 || index < limit;
  })

  return projects.map(project => {
    return (
      <ProjectPreview 
        key={project.id}
        name={project.name} 
        description={project.shortDescription} 
        tools={project.tools}
        path={project.path}
        cover={project.cover}
        id={project.id}
      />
    )
  })
}