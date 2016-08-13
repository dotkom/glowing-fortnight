const Event = ({ title, start_time, content}) => {

  const start = start_time;
  const startTime = start.toTimeString().substr(0, 5);

  return (
    <div>
      <h3>{title}</h3>
      <p>{startTime}</p>
      <p>{content}</p><br />
    </div>
  );
};

export default Event;
