interface TimelineEventProps {
  title: string;
  period: string;
  description: string;
}

function TimelineEvent(props: TimelineEventProps) {
  const { title, period, description } = props;
  return (
    <div className="timeline-event">
      <p style={{margin: 0}}>{title}</p>
      <div 
        style={{padding: 0}}
        >
          <p style={{margin: 0, fontSize: "14px"}}>{period}</p>
          <p className="text-mono" style={{paddingLeft: "14px"}} dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
     
    </div>
  )
}

export default TimelineEvent