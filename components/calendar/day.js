import Event from './event';

const DAY_NAMES = [  'Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag' ];
const MONTH_NAMES = [ 'januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember' ];

const Day = ({ events, eventClickHandler, active }) => {
  const DAY = events[ 0 ].start_time;

  const DAY_NAME = DAY_NAMES[ DAY.getDay() ];
  const DATE = DAY.getDate();
  const MONTH_NAME = MONTH_NAMES[ DAY.getMonth() ];

  return (
    <div className="cal-day">
      <h2 className="cal-dayString"><span>{DAY_NAME}</span> {`${DATE}. ${MONTH_NAME}`}</h2>
      { events.map((e, id) => {
        return <Event eventClickHandler={eventClickHandler} active={active} title={e.title} start_time={e.start_time} end_time={e.end_time} content={e.content} key={id} index={e.index} />
      })}
      <br />
    </div>
  );
};

export default Day;
