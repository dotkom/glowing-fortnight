import Event from './event';

const Day = ({ events }) => {

  let id = 0;
  let eventList = [];

  for (let e of events) {
    eventList.push(<Event info={e} key={id}/>);
    id++;
  }

  let dayNames = [ 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag' ];
  let monthNames = [ 'januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember' ];

  return (
    <div>
      <h2>{dayNames[ events[ 0 ].start_time.getDay() ] + ' ' + events[ 0 ].start_time.getDate() + '. ' + monthNames[ events[ 0 ].start_time.getMonth() ]}</h2>
      {eventList}
      <br />
    </div>
  );
};

export default Day;
