import Event from './event';

const DAY_NAMES = [ 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag' ];
const MONTH_NAMES = [ 'januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember' ];

const Day = ({ events, clickHandler }) => {
  const DAY = events[ 0 ].start_time;

  const DAY_NAME = DAY_NAMES[ DAY.getDay() ];
  const DATE = DAY.getDate();
  const MONTH_NAME = MONTH_NAMES[ DAY.getMonth() ];

  return (
    <div className="cal-day">
      <h2 className="cal-dayString">{`${DAY_NAME} ${DATE}. ${MONTH_NAME}`}</h2>
      { events.map((e, id) => {
        return <Event clickHandler={clickHandler} title={e.title} start_time={e.start_time} content={e.content} key={id}/>
      })}
      <br />
    </div>
  );
};

export default Day;
