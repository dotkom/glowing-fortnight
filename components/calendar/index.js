import Day from './day';

const MS_IN_DAY = 1000*60*60*24;

const Calendar = ({ events }) => {

  let id = 0;
  let lastEpochDays = 0;
  let daysEvents = [];
  let allDays = [];

  for (let event of events) {

    event.start_time = new Date(event.start_time);
    let epochDays = Math.floor(event.start_time.getTime() / MS_IN_DAY);
    
    if (epochDays > lastEpochDays) {
      allDays.push(<Day events={daysEvents} key={id}/>);
      daysEvents = [];
    }

    lastEpochDays = epochDays;
    daysEvents.push(event);
    id++;
  }
  allDays.push(<Day events={daysEvents} key={id}/>);

  return (
    <div>
      <h1>Calendar</h1>
      {allDays}
    </div>
  );
};

export default Calendar;
