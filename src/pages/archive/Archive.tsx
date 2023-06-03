import Project from "./Project"
import { motion } from 'framer-motion'
import logo from "../../assets/img/logo.svg";
import './Archive.css';

const projects = [
  {
    title: 'Java 2D pixel art game',
    github: 'https://github.com/gturro/The_Little_Isle.git',
    badges: ['java'],
    description: 'A 2D pixel art top view game developed with Java Swing. Players navigate through a map, collecting keys, coins, and other objects. Engaging in battles with different monsters.',
    folderName: 'project1'
  },
  {
    title: 'Javascript 2D pixel art game',
    github: 'https://github.com/VictorGuill/death_by_pollution.git',
    badges: ['js', 'html'],
    description: 'An aircraft obstacle run game developed using vanilla JavaScript where players control an aircraft and navigate it through various obstacles',
    folderName: 'project2'
  },
  {
    title: 'Emergency call management simulator',
    github: 'https://github.com/fbaguem2021/Broggitecnics.git',
    badges: ['vue', 'laravel'],
    description: 'Training app for health emergency students that includes user and dispatch file management, call reception with forms for the interlocutor, location, and incident details, incident geolocation, and agency dispatch functionality.',
    folderName: 'project3'
  },
  {
    title: 'SpaceX rocket data display',
    github: 'https://github.com/gturro/spaceX-rocekts-info.git',
    badges: ['vue'],
    description: 'Use of a public API that provides information on all the different rockets operated by SpaceX.',
    folderName: 'project4'
  }
];
function Archive() {
  return (
    <motion.div
      style={{overflowY: "scroll"}}
      className="flex-col"
      key="arch"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0}}
    >
     <span className='page-title'>ARCHIVE</span>
      <div className="inner projects">
      {projects.map((project, index) => (
        <Project key={index} title={project.title} github={project.github} badges={project.badges} description={project.description} folderName={project.folderName} />
      ))}
      </div>
      <div className="logo-bottom">
          <img src={logo} alt="small-logo" />
      </div>
    </motion.div>
  )
}

export default Archive