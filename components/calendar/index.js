import Day from './day';

const Calendar = ({ events }) => {

  let id = 0;
  let lastEpochDays = 0;
  let daysEvents = [];
  let allDays = [];

  for (let event of events) {

    event.start_time = new Date(event.start_time);
    let epochDays = Math.floor(event.start_time.getTime() / 8.64e7);

    if (lastEpochDays == 0) {
      daysEvents.push(event);
      lastEpochDays = epochDays;
    }
    else if (epochDays > lastEpochDays) {
      allDays.push(<Day events={daysEvents} key={id}/>);
      daysEvents = [ event ];
      lastEpochDays = epochDays;
    }
    else if (epochDays == lastEpochDays) {
      daysEvents.push(event);
    }
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
