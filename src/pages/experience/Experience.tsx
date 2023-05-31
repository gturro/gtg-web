import "./Experience.css";

import { motion } from "framer-motion";

import logo from "../../assets/img/logo.svg";
import CustomTimeline from "./CustomTimeline";


function Experience() {

    const soundEvents= [
        {
            title: "Sound technician",
            period: "2018 - Current",
            description: "Working on a wide range of live events and post-production projects in various aspects of the industry."
        },
        {
            title: "Internship in Trayson",
            period: "2018-2019",
            description: "Worked with various hardware and software solutions for simultaneous translation"
        },
        {
            title: "Sound operator & postproduction of short films",
            period: "2017-2018",
            description: "Worked with students and directors from ESCAC, film school located in Catalonia, Spain"
        },
        {
          title: "Internship in RTVE",
          period: "2017",
          description: "Worked on various TV programs and live events"
      },
        {
            title: "Started my sound technician studies",
            period: "2017-2019",
            description: ""
        },
    ]
    const codeEvents = [
      {
        title: "Designed and developed my own website",
        period: "May 2023 - Current",
        description: "This website is developed with React and Typescript"
      },
      {
        title: "First web App",
        period: "January 2023 - March 2023",
        description: "Health emergency call managment simualtor for students.\nDeveloped with <a href='https://github.com/jnirella' target='_blank'>@Jose</a> & <a href='https://github.com/FrancescBagueMarti' target='_blank'>@Francesc</a>"
      },
      {
        title: "First website & second game",
        period: "January 2023 - March 2023",
        description: "Website of a fictional company to host our games.\nDeveloped with <a href='https://github.com/VictorGuill' target='_blank'>@Victor</a> & <a href='https://github.com/merygarriga' target='_blank'>@Maria</a>"
      },
      {
        title: "First game",
        period: "March 2022 - May 2022",
        description: "2D pixel art game developed with Java and Swing"
      },
      {
        title: "Started my web developer studies",
        period: "2021-Current",
        description: ""
      },
      {
        title: "Started first code project",
        period: "2020",
        description: "CodeUdemy courses building basic mini apps with javascript"
      },
    ]
  return (
    <motion.div className="flex-col" key="exp" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <span className="page-title">EXPERIENCE</span>

        <div id="experiences">
          <div className="exp">
            <span className="subtitle">Sound Technician</span>
            <CustomTimeline  events={soundEvents} />
          </div>
          <div className="exp">
            <span className="subtitle">Web developer</span>
            <CustomTimeline events={codeEvents}/>
          </div>
        </div>

      <div className="logo-bottom">
        <img src={logo} alt="small-logo" />
      </div>
    </motion.div>
  );
}

export default Experience;
