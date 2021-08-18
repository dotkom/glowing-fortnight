import React, { FC } from 'react';
import Event from './event';
import { DisplayEvent } from 'common/types';

interface Props {
  events: DisplayEvent[];
  eventClickHandler: (id: number) => void;
  highlightIndex: number;
}

const Day: FC<Props> = ({ events, eventClickHandler, highlightIndex }) => {
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
            highlightIndex={highlightIndex}
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
