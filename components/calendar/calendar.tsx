import React, { FC, useState } from 'react';
import Day from './day';
import { useRouter } from 'next/router';
import { Event, DisplayDay, DisplayEvent } from 'common/types';

let dayId = 0;

/**
 * Reduce a list of Events to a map of day -> events
 *
 * @param days Map of previous days to events during that day
 * @param nextEvent event to add to map
 * @returns updated map of days with a new day added or the event added to one of the existing days
 */
const uniqueDaysReducer = (
  days: Map<Date, DisplayEvent[]>,
  nextEvent: Event,
  index: number
): Map<Date, DisplayEvent[]> => {
  const nextEventStart = new Date(nextEvent.start_time);
  const latestDay = Array.from(days.keys()).pop();
  if (
    latestDay == null ||
    !(
      nextEventStart.getFullYear() === latestDay.getFullYear() &&
      nextEventStart.getMonth() === latestDay.getMonth() &&
      nextEventStart.getDate() === latestDay.getDate()
    )
  ) {
    days.set(nextEventStart, [{ ...nextEvent, index }]);
  } else {
    days.set(latestDay, [...days.get(latestDay), { ...nextEvent, index }]);
  }
  return days;
};

const buildEvents = (
  events: Event[],
  highlightIndex: number
): {
  pastDaysDisplay: DisplayDay[];
  futureDaysDisplay: DisplayDay[];
} => {
  events = events.sort((a, b) => new Date(a.start_time).valueOf() - new Date(b.start_time).valueOf());
  const now = new Date(Date.now());

  let futureEvents: Event[];
  let pastEvents: Event[];

  const nextOrActiveEventIdx = events.findIndex((e) => now < new Date(e.end_time));
  if (nextOrActiveEventIdx !== -1) {
    futureEvents = events.slice(nextOrActiveEventIdx);
    pastEvents = events.slice(0, nextOrActiveEventIdx);
  } else {
    futureEvents = [];
    pastEvents = events;
  }

  const pastDays = pastEvents.reduce(uniqueDaysReducer, new Map<Date, DisplayEvent[]>());
  const futureDays = futureEvents.reduce(uniqueDaysReducer, new Map<Date, DisplayEvent[]>());

  const pastDaysDisplay = Array.from(pastDays.values()).map((events) => {
    return {
      highlightIndex,
      events,
      id: dayId++,
    };
  });

  const futureDaysDisplay = Array.from(futureDays.values()).map((events) => {
    return {
      highlightIndex,
      events,
      id: dayId++,
    };
  });

  return {
    pastDaysDisplay,
    futureDaysDisplay,
  };
};

interface Props {
  events?: Event[];
  error?: string;
}

const Calendar: FC<Props> = ({ events, error }) => {
  const [preDaysSectionActive, setPreDaysSectionActive] = useState(false);
  const [highlightedEventIdx, setHightlightedEvent] = useState(-1);
  const router = useRouter();

  if (events == null || (events.length === 0 && error === null)) {
    return <h2 className="component">Laster inn kalender</h2>;
  }

  if (error !== null) {
    return (
      <p className="component">En uventet feil har oppstått ved henting av program. Vennligst prøv igjen senere.</p>
    );
  }

  const { futureDaysDisplay: futureDays, pastDaysDisplay: pastDays } = buildEvents(events, highlightedEventIdx);

  const newIdx = futureDays[0]?.events[0]?.index;
  if (highlightedEventIdx < 0 && newIdx != null && newIdx !== highlightedEventIdx) {
    setHightlightedEvent(newIdx);
  }

  return (
    <div>
      <div className="cal-timeline" />
      {pastDays.length > 0 && preDaysSectionActive ? (
        <div className="cal-section--preDays">
          {pastDays.map((preDay) => (
            <Day
              key={preDay.id}
              events={preDay.events}
              highlightIndex={preDay.highlightIndex}
              eventClickHandler={(id: number) => setHightlightedEvent(id)}
            />
          ))}
        </div>
      ) : (
        ''
      )}
      {pastDays.length > 0 ? (
        <button className="cal-button--preDays" onClick={() => setPreDaysSectionActive(!preDaysSectionActive)}>
          {(preDaysSectionActive ? 'Skjul' : 'Vis') + ' tidligere arrangementer'}
        </button>
      ) : (
        ''
      )}
      {futureDays.map((postDay) => (
        <Day
          key={postDay.id}
          events={postDay.events}
          highlightIndex={postDay.highlightIndex}
          eventClickHandler={(id) => setHightlightedEvent(id)}
        />
      ))}
    </div>
  );
};

export default Calendar;
