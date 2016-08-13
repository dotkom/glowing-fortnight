import Day from './day';

const Calendar = ({events}) => {
  const daysevents = [events[1], events[2]];
  return (
    <div>
      <h1>Calendar</h1>
      <Day events={daysevents}/>
    </div>
  );
};

export default Calendar;
