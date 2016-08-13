const Event = ({info}) => {

  // Getting a hh:mm timestamp out of the data
  const start = new Date(info.start_time);
  const startTime = start.toTimeString().substr(0,5);

  return (
    <div>
      <br />
      <h3>{info.title}</h3>
      <p>{startTime}</p>
      <p>{info.content}</p>
    </div>
  );
};

export default Event;
