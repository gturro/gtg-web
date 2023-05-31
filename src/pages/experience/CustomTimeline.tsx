import { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
import { timelineItemClasses } from '@mui/lab/TimelineItem';
import { styled } from '@mui/system';

import TimelineEvent from "./TimelineEvent";

interface TimelineEvent {
  title: string,
  period: string,
  description: string
}

interface CustomTimelineProps {
  events: TimelineEvent[]
}

const DiamondTimelineDot = styled(TimelineDot)`
  width: 6px;
  height: 6px;
  border-radius: 1px;
  background-color: #000;
`;



function CustomTimeline({ events }: CustomTimelineProps) {

  const timelineRef = useRef<HTMLUListElement>(null);
   
  useEffect(() => {
    if (timelineRef.current) {
      enterAnimation()
    }
  }, []);
  
  function animationOnHover () {
    if (timelineRef.current) {
      const timelineLiElements = Array.from(timelineRef.current.querySelectorAll('li'))

      timelineLiElements.forEach(item => {
        const dotChildren = item.querySelector('.MuiTimelineDot-root')
        const connectorChildren = item.querySelector('.MuiTimelineConnector-root')
        item.addEventListener('mouseover', () => {
          if (dotChildren) {
            anime({
              targets: dotChildren,
              rotate: 90,
              scale: 1,
              easing: 'easeOutExpo',
            })
          }
          if (connectorChildren) {
            anime({
              targets: connectorChildren,
              opacity: 1
            })
          }
        })
        item.addEventListener('mouseout', () => {
          if (dotChildren) {
            anime({
              targets: dotChildren,
              rotate: 225,
              scale: 0.8,
              easing: 'easeOutQuart',
            })
          }
          if (connectorChildren) {
            anime({
              targets: connectorChildren,
              opacity: 0.4
            })
          }
        })
        
       
      })
    }
  }
  function enterAnimation () {
    if (timelineRef.current) {
      const timelineItems = Array.from(timelineRef.current.querySelectorAll('.MuiTimelineDot-root, .MuiTimelineConnector-root'));

      timelineItems.forEach((item, index) => {
        anime({
          targets: item,
          translateY: [-100 , 0],
          opacity: item.classList.contains('MuiTimelineConnector-root') ? [0, 0.2] : [0, 1],
          duration: 800,
          delay: index * 140,
          easing: 'easeOutExpo',
          complete: () => {
            if (item.classList.contains('MuiTimelineDot-root')) {
              anime({
                targets: item,
                rotate: 135,
                scale: 0.8,
                easing: 'easeOutExpo',
                complete: () => {
                  animationOnHover()
                }
              })
            }
          }
        })
      })
    }
  }

  return (
    <div style={{height: "70vh", overflowY: "scroll"}}>
      <Timeline ref={timelineRef} sx={{
        [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
        },
            "& .MuiTimelineConnector-root": {
            bgcolor: "#000",
        },
        
    }}>
      {events.map((event, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <DiamondTimelineDot/>
              {index < events.length - 1 && <TimelineConnector style={{opacity: "0.2"}}/>}
            </TimelineSeparator>
            <TimelineContent>
              <TimelineEvent
                title={event.title}
                period={event.period}
                description={event.description}
              />
            </TimelineContent>
          </TimelineItem>
        )
    )}
    </Timeline>
  </div>
  )}

export default CustomTimeline