const Event = ({ info }) => {

  const start = info.start_time;
  const startTime = start.toTimeString().substr(0, 5);

  return (
    <div>
      <h3>{info.title}</h3>
      <p>{startTime}</p>
      <p>{info.content}</p><br />
    </div>
  );
};

export default Event;
