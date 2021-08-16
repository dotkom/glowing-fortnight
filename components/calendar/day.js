import React from 'react';
import Event from './event';

const Day = ({ events, eventClickHandler, active }) => {
  const DAY = new Intl.DateTimeFormat('nb-no', { weekday: 'long', month: 'long', day: '2-digit' }).format(
    new Date(events[0].start_time)
  );

  return (
    <div className="cal-day">
      <h2 className="cal-day--string">{DAY}</h2>
      {events.map((e, id) => {
        return (
          <Event
            eventClickHandler={eventClickHandler}
            active={active}
            title={e.title}
            start_time={e.start_time}
            end_time={e.end_time}
            content={e.content}
            key={id}
            index={e.index}
          />
        );
      })}
      <br />
    </div>
  );
};

export default Day;
