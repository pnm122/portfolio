import { FaCss3, FaFigma, FaGithub, FaHtml5, FaJava, FaJs, FaReact } from 'react-icons/fa';
import { SiAdobexd, SiFirebase, SiFlutter, SiMax, SiSpring } from 'react-icons/si';

export default function toolsToRender(tools) {
  let toolsRender = [];
  let key = 0;
  for(let tool of tools) {
    switch(tool) {
      case 'html':
        toolsRender.push(<FaHtml5 key={key} title="HTML5" />);
        break;
      case 'css':
        toolsRender.push(<FaCss3 key={key} title="CSS" />);
        break;
      case 'js':
        toolsRender.push(<FaJs key={key} title="JavaScript" />);
        break;
      case 'react':
        toolsRender.push(<FaReact key={key} title="React.js" />);
        break;
      case 'java':
        toolsRender.push(<FaJava key={key} title="Java" />);
        break;
      case 'spring':
        toolsRender.push(<SiSpring key={key} title="Spring" />);
        break;
      case 'flutter':
        toolsRender.push(<SiFlutter key={key} title="Flutter" />);
        break;
      case 'firebase':
        toolsRender.push(<SiFirebase key={key} title="Firebase" />);
        break;
      case 'github':
        toolsRender.push(<FaGithub key={key} title="GitHub" />);
        break;
      case 'figma':
        toolsRender.push(<FaFigma key={key} title="Figma" />);
        break;
      case 'adobexd':
        toolsRender.push(<SiAdobexd key={key} title="Adobe XD" />);
        break;
      case 'max':
        toolsRender.push(<SiMax key={key} title="Max/MSP" />);
        break;
      default:
        console.log("UNKNOWN TYPE: " + tool);
    }
    key++;
  }

  return toolsRender;
}