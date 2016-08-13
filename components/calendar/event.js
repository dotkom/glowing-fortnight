const Event = ({ title, start_time, content, clickHandler }) => {
  return (
    <div onClick={ () => { clickHandler(); } } className="cal-event">
      <div className="cal-event-indicator"></div>
      
      <div className="cal-event-header">
	<p className="cal-event-dateString">{start_time.toTimeString().substr(0, 5)}</p>
	<h3 className="cal-title">{title}</h3>
      </div>
      
      <p className="cal-event-content">{content}</p><br />
    </div>
  );
};

export default Event;
