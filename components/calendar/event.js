const Event = ({ title, start_time, content, clickHandler }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{start_time.toTimeString().substr(0, 5)}</p>
      <p>{content}</p><br />
    </div>
  );
};

export default Event;
