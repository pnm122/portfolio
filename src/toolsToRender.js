import { FaCss3, FaFigma, FaGithub, FaHtml5, FaJava, FaJs, FaReact } from 'react-icons/fa';
import { SiAdobexd, SiFirebase, SiFlutter, SiSpring } from 'react-icons/si';

export default function toolsToRender(tools) {
  let toolsRender = [];
  for(let tool of tools) {
    switch(tool) {
      case 'html':
        toolsRender.push(<FaHtml5 title="HTML5" />);
        break;
      case 'css':
        toolsRender.push(<FaCss3 title="CSS" />);
        break;
      case 'js':
        toolsRender.push(<FaJs title="JavaScript" />);
        break;
      case 'react':
        toolsRender.push(<FaReact title="React.js" />);
        break;
      case 'java':
        toolsRender.push(<FaJava title="Java" />);
        break;
      case 'spring':
        toolsRender.push(<SiSpring title="Spring" />);
        break;
      case 'flutter':
        toolsRender.push(<SiFlutter title="Flutter" />);
        break;
      case 'firebase':
        toolsRender.push(<SiFirebase title="Firebase" />);
        break;
      case 'github':
        toolsRender.push(<FaGithub title="GitHub" />);
        break;
      case 'figma':
        toolsRender.push(<FaFigma title="Figma" />);
        break;
      case 'adobexd':
        toolsRender.push(<SiAdobexd title="Adobe XD" />);
        break;
      default:
        console.log("UNKNOWN TYPE: " + tool);
    }
  }

  return toolsRender;
}