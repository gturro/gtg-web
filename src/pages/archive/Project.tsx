import './Project.css'
import ImageGallery from "../../utils/ImageGallery"
import githubSvg from '../../assets/img/github.svg'
import BadgeLogo from "../../utils/BadgeLogo";

interface ProjectProps {
  title: string;
  github: string;
  badges: string[];
  description: string;
  folderName: string;
}

function Project({ title, github, badges, description, folderName }: ProjectProps): JSX.Element {
  return (
    <div className="project">
      <span className='title'>
        {title}
        <div className="svg-links">
          <a href={github} target='_blank'><img src={githubSvg} alt="github-logo" /></a>
        </div>
      </span>
      <div className='tech-badges'>
      {badges.map((badge, index) => (
          <BadgeLogo key={index} name={badge} sizeClass="sm" />
        ))}
      </div>
      <p className='description'>{description}</p>
      <div className="photos">
        <ImageGallery folderName={folderName}></ImageGallery>
      </div>
    </div>
  );
}

export default Project;
