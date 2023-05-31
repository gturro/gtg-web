import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import anime from 'animejs/lib/anime.es.js';

import './SplashAnimation.css'

interface SplashAnimationProps {
  children: React.ReactNode;
}

const SplashAnimation = ( {children}: SplashAnimationProps) => {

  const [isAnimationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const anim = anime.timeline({
      loop: false,
      direction: 'normal',
    });
    
    anim
      .add({
        targets: '#logoSvg path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutQuad',
        duration: 3000,
        complete: () => {
          const timeoutId = setTimeout(() => {
            setAnimationComplete(true);
            clearTimeout(timeoutId)
          }, 500);
        }
      })

  }, []);

  return (
    <AnimatePresence>
      {!isAnimationComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, transition: {duration: .5, delay: 3 }}}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#fff", 
          }}
        >
          <svg id="logoSvg" viewBox="0 0 1106 464"  x="5" y="100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
            <path 
              stroke="#000" 
              strokeWidth="5" 
              d="M552.16 3.20299L389.104 81.9547L550.587 138.797H550.379L554.217 140.009L558.054 138.797H558.261L715.876 83.3138L553.871 3.21076C553.334 2.9467 552.705 2.93893 552.16 3.20299Z"
                  />
            <path 
              stroke="#000" 
              strokeWidth="5"  
              d="M552.013 364.899L548.198 363.701L236.979 256.735L349.799 202.41L548.198 271.535L552.013 272.733L555.828 271.535L754.227 202.41L865.567 257.241L555.828 363.701L552.013 364.899ZM778.104 118.332L555.828 194.73H555.813L552.013 195.92L548.213 194.73H548.198L321.146 116.688L3.1202 269.453C1.53301 270.214 1.67036 272.526 3.32623 273.094L550.99 461.581C551.395 461.719 551.83 461.727 552.234 461.589L1100.65 280.728C1102.32 280.175 1102.49 277.856 1100.91 277.08L778.104 118.332Z"/>
              </g>
          </svg>
        </motion.div>
      )}

      {isAnimationComplete && 
        <motion.div
          className="wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: {duration: .8}}}
          exit={{ opacity: 1 }}
        >
          {children}
        </motion.div>
      }
    </AnimatePresence>
  );
};

export default SplashAnimation;
