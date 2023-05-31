import "./Side.css";
import { useEffect, useRef } from 'react';
import Navbar from "./Navbar";
import Typed from 'typed.js';
import portrait from '../assets/img/portrait_croped.png'

function Side() {
    const presentation = `&lt;!-- This is <span style="font-weight: bold">Guillem Turro Gil</span> portal --&gt; <br><br>I'm web developer specializing in building and designing webs / apps.<br><br>Currently, I'm focused on learning new technologies and skills.<br>`;
   
    const el = useRef(null);
    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: [presentation],
        typeSpeed: 20,
        loop: false,
        contentType: 'html',
        cursorChar: '',
        onComplete: () => { console.log("typing ended") },
      });
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
      // eslint-disable-next-line
    }, [presentation]);
      
  return (
    <div id="side">
      <div className="inner">
        <div className="portrait-container">
          <img src={portrait} alt="gtg-portrait" />
        </div>
        <div>
          <span className="text-mono" ref={el}></span>
        </div>
        <Navbar />
      </div>
    </div>
  );
}

export default Side;
