import Event from './event';

const Day = ({events}) => {
  console.log(events[0])
  return (
    <div>
      <h2>{events[0].start_time}</h2>
      <Event info={events[0]} />
    </div>
  );
};

export default Day;
