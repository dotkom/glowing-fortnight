import React, { useState } from 'react';
import Day from './day';
import { useRouter } from 'next/router';

let dayId = 0;

function buildEvents(events, highlightIndex) {
  const now = Date.now('nb-no');
  const nextOrActiveEventIndex = events.findIndex((e) => new Date(e.end_time) > now);
  if (nextOrActiveEventIndex === -1) {
    return { pastDaysDisplay: [], futureDaysDisplay: []}
  }
  const pastEvents = events;
  const futureEvents = pastEvents.splice(0, nextOrActiveEventIndex);
  const uniqueDaysReducer = (days, nextEvent) => {
    const nextEventStart = new Date(nextEvent.start_time);
    const daysSoFar = Object.keys(days);
    daysSoFar.sort((a, b) => a - b);
    const latestDay = new Date(daysSoFar[daysSoFar.length]);
    if (
      days.length === 0 ||
      !(
        nextEventStart.getFullYear() === latestDay.getFullYear() &&
        nextEventStart.getMonth() === latestDay.getMonth() &&
        nextEventStart.getDate() === latestDay.getDate()
      )
    ) {
      return { ...days, nextEventStart: [nextEvent] };
    } else {
      return { ...days, latestDay: [...days[latestDay], nextEvent] };
    }
  };
  const pastDays = pastEvents.reduce(uniqueDaysReducer, {});
  const futureDays = futureEvents.reduce(uniqueDaysReducer, {});

  const pastDaysDisplay = Object.values(pastDays).map((events) => {
    return {
      active: highlightIndex,
      events: events,
      id: dayId++,
    };
  });
  const futureDaysDisplay = Object.values(futureDays).map((events) => {
    return {
      active: highlightIndex,
      events: events,
      id: dayId++,
    };
  });

  return {
    pastDaysDisplay,
    futureDaysDisplay,
  };
}
function getHighlightedEvent(futureDays, futureEvents, hightlightIndex) {
  if (hightlightIndex < 0 && futureDays.length > 0) {
    return futureDays[0].events[0].index;
  } else if (hightlightIndex < 0 && futureEvents[0]) {
    return futureEvents[0].index;
  }

  return hightlightIndex;
}

const Calendar = ({ events, error }) => {
  const [preDaysSectionActive, setPreDaysSectionActive] = useState(false);
  const [highlightedEventIdx, setHightlightedEvent] = useState(-1);
  const router = useRouter();

  if (events.length === 0 && error === null) {
    return <h2 className="component">Laster inn kalender</h2>;
  }

  if (error !== null) {
    return (
      <p className="component">En uventet feil har oppstått ved henting av program. Vennligst prøv igjen senere.</p>
    );
  }

  const { futureDaysDisplay: futureDays, pastDaysDisplay: pastDays } = buildEvents(events, highlightedEventIdx);

  const newIdx = getHighlightedEvent(futureDays, futureDays.reduce((events, day) => events.concat(day.events), []), highlightedEventIdx);
  if (newIdx !== highlightedEventIdx) {
    setHightlightedEvent(newIdx)
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
              active={preDay.active}
              eventClickHandler={(id) => {
                setHightlightedEvent(id);
                router.push(`#event-${id}`);
              }}
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
          active={postDay.active}
          eventClickHandler={(id) => {
            setHightlightedEvent(id);
            router.push(`#event-${id}`);
          }}
        />
      ))}
    </div>
  );
};

export default Calendar;
