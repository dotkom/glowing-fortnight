import Day from './day';

const Calendar = ({events}) => {
  let daysevents = [events[1], events[2]];
  console.log(daysevents[0])
  return (
    <div>
      <h1>Calendar</h1>
      <Day events={daysevents}/>
    </div>
  );
};

export default Calendar;
