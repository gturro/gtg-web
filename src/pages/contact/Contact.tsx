import './Contact.css'
import ImageGallery from "../../utils/ImageGallery"
import { motion } from 'framer-motion'
import logo from "../../assets/img/logo.svg";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Contact() {
 
  return (
    <motion.div
      className='contact'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0}}
    >
        <span className='page-title'>LINK</span>
        <div className="inner">
          <div className="moodboard">
            <span className="subtitle">Moodboard</span>
            <div className="gallery">
              <div className="row1">
                <ImageGallery folderName='row1'/>
              </div>
              <div className="row2">
                <ImageGallery folderName='row2' />
              </div>
              <div className="row3">
                <div style={{display: "flex", alignItems: "center"}}>
                  <KeyboardArrowDownIcon />
                  <span className='text-mono'>by <a className='text-mono' href="https://twitter.com/archillect" target="_blank">@Archillect</a></span>
                </div>
                <ImageGallery folderName='row3' />
                
              </div>
            </div>
          </div>
          <div>
            <span className="subtitle">Contact</span>
              <p className='text-mono'>Feel free to reach out to me.</p>
            <div className='links text-mono'>
              <div className="contact-item">
              <MailOutlineIcon />
                <a href="mailto:yourname@example.com">gturrogil@gmail.com</a>
              </div>
              <div className="contact-item">
                <SmartphoneIcon />
                <span>+34 697215851</span>
              </div>
              <div className="contact-item">
                <LocationOnIcon />
                <span>Barcelona, Spain</span>
              </div>
            <div className="links-media">
              <div className="contact-item">
                <LinkedInIcon />
                <a href="https://www.linkedin.com/in/guillem-turr%C3%B3-gil-710927216" target="_blank">Linkedin</a>
              </div>
              <div className="contact-item">
                <TwitterIcon />
                <a href="https://twitter.com/Gil_1197" target="_blank">Twitter</a>
              </div>
              <div className="contact-item">
                <GitHubIcon />
                <a href="https://github.com/gturro" target="_blank">Github</a>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="logo-bottom">
          <img src={logo} alt="" />
        </div>
      </motion.div>

  )
}

export default Contact