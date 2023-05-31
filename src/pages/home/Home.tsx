import "./Home.css";
import { motion } from "framer-motion";
import logo from "../../assets/img/logo.svg";

/* Progr lenguages */
import jsBadge from '../../assets/img/badges/js.svg';
import javaBadge from '../../assets/img/badges/java.svg';
import phpBadge from '../../assets/img/badges/php.svg';
import tsBadge from '../../assets/img/badges/ts.svg';
import pyBadge from '../../assets/img/badges/py.svg';
/* Frameworks */
import vueBadge from '../../assets/img/badges/vue.svg';
import laravelBadge from '../../assets/img/badges/laravel.svg';
import reactBadge from '../../assets/img/badges/react.svg';
/* Tools */
import gitBadge from '../../assets/img/badges/git.svg';
import dockerBadge from '../../assets/img/badges/docker.svg';
import figmaBadge from '../../assets/img/badges/figma.svg';
import apacheBadge from '../../assets/img/badges/apache.svg';
import bootstrapBadge from '../../assets/img/badges/bootstrap.svg';
import jiraBadge  from '../../assets/img/badges/jira.svg';

function Home() {
    const programmingLanguages = [
        { name: "Java", badge: javaBadge },
        { name: "JavaScript", badge: jsBadge },
        { name: "TypeScript", badge: tsBadge },
        { name: "PHP", badge: phpBadge },
        { name: "Python", badge: pyBadge },
    ];
    
    const frameworks = [
        { name: "Vue", badge: vueBadge },
        { name: "Laravel", badge: laravelBadge },
        { name: "React", badge: reactBadge },
    ];
    
    const tools = [
        { name: "Git", badge: gitBadge },
        { name: "Jira", badge: jiraBadge },
        { name: "Docker", badge: dockerBadge },
        { name: "Bootstrap", badge: bootstrapBadge },
        { name: "Figma", badge: figmaBadge },
        { name: "Apache", badge: apacheBadge },
       
    ];
  /* const [svgWidth, setSvgWidth] = useState(0)
    const [svgHeight, setSvgHeight] = useState(0)

    const animationRef = useRef<any>(null);
    const progressRef = useRef(0);

    const handleClick = () => {
        if (animationRef.current) {
          animationRef.current.pause();
          animationRef.current = null;
        } else {
          animationRef.current = anime({
            targets: '.about-container polygon, .about-containerfeTurbulence, .about-container feDisplacementMap',
            points: '0 128 0 128 0 0 0 0 128 0 128 128',
            baseFrequency: 0,
            scale: 1,
            duration: 3000,
            loop: true,
            direction: 'alternate',
            easing: 'easeInOutQuart',
            update: (anim) => {
                // Get the progress percentage
                const progress = Math.round(anim.progress);
      
                // Update the progress value
                progressRef.current = progress;
                console.log(progress)
            },
          });
        }
      }; */

  return (
    <motion.div
      className="about-container flex-col"
      style={{ height: "100%", width: "100%" }}
      key="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="aboutMe">
        <span className="page-title">ABOUT ME</span>
        <div className="presentation text-mono">
          <p>
            Passionate about coding and game development, I'm a dedicated web developer with a strong interest in new
            technologies, scientific discoveries, and rocket science.
          </p>
          <p>
            With a diverse background in sound technology, recording, live events, concerts, filmmaking, and
            post-production, I bring a wealth of creative experience to my web development projects.
          </p>
          <p>
            Throughout my journey, I have worked on a range of projects, both independently and as part of a
            collaborative team. <br/>My contributions have focused on front-end development, creating intuitive and
            user-friendly interfaces. Additionally, I have dived into back-end development, crafting robust and
            efficient systems for data management.
          </p>
        </div>

        <div className="technologies">
            <span className="subtitle">Technologies and Skills</span>
            <div className="techs-container">
                <div className="flex-col">
                    <span className="tech-title">Programming languages</span>
                    {programmingLanguages.map((language) => (
                    <div key={language.name}>
                        <img src={language.badge} alt={`${language.name}-badge`} />
                    </div>
                    ))}
                    </div>
                <div className="flex-col">
                    <span className="tech-title">Frameworks</span>
                    {frameworks.map((framework) => (
                    <div key={framework.name}>
                        <img src={framework.badge} alt={`${framework.name}-badge`} />
                    </div>
                    ))}
                </div>
                <div className="flex-col">
                    <span className="tech-title">Tools</span>
                    {tools.map((tool) => (
                    <div key={tool.name}>
                        <img src={tool.badge} alt={`${tool.name}-badge`} />
                    </div>
                    ))}
                </div>
            </div>
          
        </div>
      </div>

      {/*  <svg viewBox="0 0 128 128" onClick={handleClick}>
                <filter id="displacementFilter">
                <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="10" result="turbulence" style={{ transform: 'scale(.3)' }}></feTurbulence>
                <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="10" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
                </filter>
                <polygon points="0 128 0 128 0 0 0 0 128 0 128 128" style={{ filter: 'url(#displacementFilter)', transform: 'scale(.3)', transformOrigin: "center" }} fill="currentColor"></polygon>
            </svg> */}
        <div className="logo-bottom">
          <img src={logo} alt="" />
        </div>
    </motion.div>
  );
}

export default Home;
