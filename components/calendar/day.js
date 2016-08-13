import Event from './event';

const Day = ({ events }) => {

  let id = 0;
  let eventList = [];

  for (let e of events) {
    eventList.push(<Event title={e.title} start_time={e.start_time} content={e.content} key={id}/>);
    id++;
  }

  const DAY_NAMES = [ 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag' ];
  const MONTH_NAMES = [ 'januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember' ];

  const DAY = events[ 0 ].start_time;
  const DAY_NAME = DAY_NAMES[ DAY.getDay() ];
  const DATE = DAY.getDate();
  const MONTH_NAME = MONTH_NAMES[ DAY.getMonth() ];

  return (
    <div>
      <h2>{`${DAY_NAME} ${DATE}. ${MONTH_NAME}`}</h2>
      {eventList}
      <br />
    </div>
  );
};

export default Day;
