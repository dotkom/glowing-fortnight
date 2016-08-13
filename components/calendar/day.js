import Event from './event';

const Day = ({ events }) => {

  const DAY_NAMES = [ 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag' ];
  const MONTH_NAMES = [ 'januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember' ];

  const DAY = events[ 0 ].start_time;
  const DAY_NAME = DAY_NAMES[ DAY.getDay() ];
  const DATE = DAY.getDate();
  const MONTH_NAME = MONTH_NAMES[ DAY.getMonth() ];

  return (
    <div>
      <h2>{`${DAY_NAME} ${DATE}. ${MONTH_NAME}`}</h2>
      { events.map((e, id) => {
        return <Event title={e.title} start_time={e.start_time} content={e.content} key={id}/>
      })}
      <br />
    </div>
  );
};

export default Day;
