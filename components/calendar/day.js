import Event from './event';

const Day = ({events}) => {
  return (
    <div>
      <h2>{/*events[0].start_time*/}Tirsdag 16. august</h2>
      <Event info={events[0]} />
      <Event info={events[1]} />
    </div>
  );
};

export default Day;
