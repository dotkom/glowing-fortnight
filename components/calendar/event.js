const Event = ({info}) => {
  console.log(info.start_time)
  const start = new Date(info.start_time);
  console.log(start)
  const startTime = start.getUTCHours() + ':' + start.getUTCMinutes();
  return (
    <div>
      <h3>{info.title}</h3>
      <p>{startTime}</p>
      <p>{info.content}</p>
    </div>
  );
};

export default Event;
