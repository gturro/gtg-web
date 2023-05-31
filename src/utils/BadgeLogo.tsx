
// Import logo images
import jsBadge from '../assets/img/badges/js.svg';
import javaBadge from '../assets/img/badges/java.svg';
import phpBadge from '../assets/img/badges/php.svg';
import tsBadge from '../assets/img/badges/ts.svg';
import pyBadge from '../assets/img/badges/py.svg';
import vueBadge from '../assets/img/badges/vue.svg';
import laravelBadge from '../assets/img/badges/laravel.svg';
import reactBadge from '../assets/img/badges/react.svg';
import gitBadge from '../assets/img/badges/git.svg';
import dockerBadge from '../assets/img/badges/docker.svg';
import figmaBadge from '../assets/img/badges/figma.svg';
import apacheBadge from '../assets/img/badges/apache.svg';
import bootstrapBadge from '../assets/img/badges/bootstrap.svg';
import jiraBadge from '../assets/img/badges/jira.svg';

interface BadgeLogoProps {
  name: string,
  sizeClass?: string;
}

const BadgeLogo = ( {name, sizeClass} :BadgeLogoProps ) => {
  // Map the logo name to the corresponding image path
  const getLogoPath = (name: string) : string => {
    switch (name) {
      // Progr languages
      case 'js':
        return jsBadge;
      case 'java':
        return javaBadge;
      case 'php':
        return phpBadge;
      case 'ts':
        return tsBadge;
      case 'py':
        return pyBadge;
      // Frameworks
      case 'vue':
        return vueBadge;
      case 'laravel':
        return laravelBadge;
      case 'react':
        return reactBadge;
      // Tools
      case 'git':
        return gitBadge;
      case 'docker':
        return dockerBadge;
      case 'figma':
        return figmaBadge;
      case 'apache':
        return apacheBadge;
      case 'bootstrap':
        return bootstrapBadge;
      case 'jira':
        return jiraBadge;
      default:
        return '';
    }
  };

  const logoPath = getLogoPath(name);

  if (!logoPath) {
    return null; // Return null if the logo name is invalid or not found
  }

  return (
    <div>
      <img src={logoPath} alt={name} className={sizeClass +"-badge"}/>
    </div>
  );
};

export default BadgeLogo;
