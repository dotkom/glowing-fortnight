import React from 'react';
import Calendar from './calendar';

const CalendarContainer = ({ events, error = null }) => {
  return (
    <section id="calendar" className="component">
      <h1>
        Program. <a href="https://online.ntnu.no/splash/events.ics">iCalendar</a>
      </h1>
      <Calendar events={events} error={error} />
    </section>
  );
};

export default CalendarContainer;
