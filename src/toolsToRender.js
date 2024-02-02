import { FaCss3, FaFigma, FaGithub, FaHtml5, FaJava, FaJs, FaReact } from 'react-icons/fa';
import { SiAdobexd, SiFirebase, SiFlutter, SiMax, SiSpring, SiTypescript } from 'react-icons/si';

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
      case 'ts':
        toolsRender.push(<SiTypescript key={key} title="TypeScript" />);
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
      case 'gsap':
        toolsRender.push(
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 82 30" width="1em" height="1em">
						<title>GSAP</title>
            <path d="M23.81 14.012v.013l-1.075 4.666c-.058.264-.322.457-.626.457H20.81a.218.218 0 0 0-.208.156c-1.198 4.064-2.82 6.857-4.962 8.534-1.822 1.428-4.068 2.094-7.069 2.094-2.696 0-4.514-.867-6.056-2.579-2.038-2.262-2.88-5.966-2.37-10.428C1.065 8.548 5.41.095 13.776.095c2.545-.022 4.543.763 5.933 2.33 1.47 1.658 2.216 4.154 2.22 7.422a.55.55 0 0 1-.549.536h-6.13a.42.42 0 0 1-.407-.41c-.05-2.26-.72-3.36-2.052-3.36-2.35 0-3.736 3.19-4.471 4.958-1.027 2.47-1.55 5.153-1.447 7.825.049 1.244.249 2.993 1.43 3.718 1.047.642 2.541.216 3.446-.495.904-.712 1.632-1.943 1.938-3.066.043-.156.046-.277.005-.331-.043-.056-.162-.069-.253-.069h-1.574a.572.572 0 0 1-.438-.202.42.42 0 0 1-.087-.362l1.076-4.674c.053-.239.27-.42.537-.452v-.012h10.33c.024 0 .049 0 .072.005.268.035.457.284.452.556h.002Z"></path>
						<path d="M41.595 8.65a.548.548 0 0 1-.548.53h-5.646c-.37 0-.679-.3-.679-.665 0-1.647-.57-2.449-1.736-2.449s-1.918.716-1.94 1.967c-.025 1.395.764 2.663 3.01 4.841 2.957 2.774 4.142 5.231 4.085 8.479C38.048 26.605 34.477 30 29.043 30c-2.775 0-4.895-.742-6.305-2.206-1.431-1.487-2.087-3.669-1.95-6.485a.548.548 0 0 1 .549-.53h5.84a.55.55 0 0 1 .422.208.48.48 0 0 1 .106.384c-.065 1.016.112 1.775.512 2.195.256.272.613.41 1.058.41 1.079 0 1.711-.762 1.735-2.09.02-1.148-.343-2.154-2.321-4.189-2.555-2.496-4.846-5.075-4.775-9.13.042-2.352.976-4.503 2.631-6.057C28.295.868 30.688 0 33.466 0c2.783.02 4.892.814 6.269 2.36 1.304 1.465 1.931 3.581 1.862 6.29h-.002Z"></path>
						<path d="m59.095 29.012.037-27.933a.525.525 0 0 0-.529-.533h-8.738c-.294 0-.423.253-.507.42L36.706 28.841v.005l-.005.007c-.14.343.126.71.497.71h6.108c.33 0 .549-.1.656-.308l1.213-2.915c.149-.389.177-.425.601-.425h5.836c.406 0 .414.008.408.405l-.131 2.71a.525.525 0 0 0 .528.533h6.171a.523.523 0 0 0 .403-.182.458.458 0 0 0 .104-.369Zm-10.81-9.326a1.67 1.67 0 0 1-.138-.005.147.147 0 0 1-.13-.184c.012-.04.029-.095.054-.162l4.376-10.828a2.99 2.99 0 0 1 .136-.313c.071-.146.157-.156.184-.048.023.09-.502 11.118-.502 11.118-.041.413-.06.43-.467.464l-3.509-.04h-.008l.003-.002Z"></path>
						<path d="M71.543.546h-4.639c-.245 0-.52.13-.584.422l-6.456 28.03a.423.423 0 0 0 .088.363.573.573 0 0 0 .437.202h5.798c.312 0 .525-.153.583-.418l.704-3.177c.05-.248-.036-.44-.258-.556a52.313 52.313 0 0 1-.312-.162l-1.005-.523-1-.522-.387-.201a.186.186 0 0 1-.103-.17.199.199 0 0 1 .2-.194l3.177.014c.95.005 1.901-.062 2.836-.234 6.58-1.215 10.95-6.485 11.076-13.656.108-6.12-3.308-9.221-10.15-9.221l-.005.003Zm-1.579 16.68h-.124c-.279 0-.328-.03-.336-.04-.005-.007 1.832-8.073 1.833-8.084.047-.233.045-.367-.099-.446-.184-.102-2.866-1.516-2.866-1.516a.189.189 0 0 1-.101-.172.197.197 0 0 1 .197-.192h4.241c1.32.04 2.056 1.221 2.021 3.238-.061 3.491-1.721 7.09-4.766 7.213Z"></path>
          </svg>
        );
        break;
      default:
        console.log("UNKNOWN TYPE: " + tool);
    }
    key++;
  }

  return toolsRender;
}