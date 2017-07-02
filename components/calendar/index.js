import React from 'react';
import Day from './day';
import moment from 'moment';

import { API_EVENTS_URL } from '../../common/constants';

require('es6-promise').polyfill();
require('isomorphic-fetch');

const NOW = moment();

function getActiveEvent (postDays, futureEvents, active) {
  if (active < 0 && postDays.length > 0) {
    return postDays[0].props.events[0].index;
  } else if (active < 0 && futureEvents[0]) {
    return futureEvents[0].index;
  }

  return active;
}

const Calendar = React.createClass({
  getInitialState: function () {
    return {
      active: -1,
      events: [],
      error: null,
      preDaysSectionActive: false
    };
  },

  fetchData: function () {
    var self = this;

    fetch(API_EVENTS_URL, {
      method: 'GET',
      mode: 'cors'
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        self.setState(Object.assign({}, self.state, { events: data.results }));
      })
      .catch(function (error) {
        self.setState(Object.assign({}, self.state, { error: error }));
      });
  },

  eventClickHandler: function (id) {
    this.setState(Object.assign({}, this.state, { active: id }));
    setTimeout(function () {
      window.location = `#event-${id}`;
    }, 0);
  },

  preDaysClickHandler: function () {
    this.setState(Object.assign({}, this.state, { preDaysSectionActive: !this.state.preDaysSectionActive }));
  },

  partitionEvents: function (pastEvents, futureEvents, active) {
    let preDay, postDay;

    if (pastEvents.length) {
      preDay = <Day events={pastEvents} active={active} eventClickHandler={this.eventClickHandler}/>;
    }
    if (futureEvents.length) {
      postDay = <Day events={futureEvents} active={active} eventClickHandler={this.eventClickHandler}/>;
    }

    return { preDay, postDay };
  },

  buildEvents: function (events) {
    let id = 0;
    let previousEventDate;

    let pastEvents = [];
    let futureEvents = [];

    let preDays = [];
    let postDays = [];
    let preDaysSection = '';

    events.forEach(function (event, index) {
      event.index = index;
      const currentEventDate = moment(event.end_time);

      if (currentEventDate.isAfter(previousEventDate, 'day')) {
        const active = getActiveEvent(postDays, futureEvents, this.state.active);
        const { preDay, postDay } = this.partitionEvents(pastEvents, futureEvents, active);

        if (preDay) {
          preDays.push(preDay);
        }
        if (postDay) {
          postDays.push(postDay);
        }

        pastEvents = [];
        futureEvents = [];
      }
      if (currentEventDate.isAfter(NOW)) {
        futureEvents.push(event);
      }
      else {
        pastEvents.push(event);
      }

      previousEventDate = currentEventDate;
      id++;
    }, this);

    const active = getActiveEvent(postDays, futureEvents, this.state.active);
    const { preDay, postDay } = this.partitionEvents(pastEvents, futureEvents, active);
    if (preDay) {
      preDays.push(preDay);
    }
    if (postDay) {
      postDays.push(postDay);
    }

    let toggleCalendarSection = (
      <button className="cal-button--preDays" onClick={this.preDaysClickHandler}>
        {( this.state.preDaysSectionActive ? 'Skjul' : 'Vis' ) + ' tidligere arrangementer' }
      </button>
    );

    if (preDays.length > 0 && this.state.preDaysSectionActive) {
      preDaysSection = (
        <div className="cal-section--preDays">
          { preDays }
        </div>
      );
    }
    else if (preDays.length <= 0) {
      toggleCalendarSection = '';
    }
    else {
      preDaysSection = '';
    }

    return {
      postDaysSection: postDays,
      toggleCalendarSection,
      preDaysSection
    };
  },

  render: function () {
    let calendarContent = '';

    if (this.state.events.length === 0 && this.state.error === null) {
      this.fetchData();
      calendarContent = (<h2 className="component">Laster inn kalender</h2>);
    }
    else if (this.state.error !== null) {
      calendarContent = (
        <p className="component">En uventet feil har oppstått ved henting av program. Vennligst prøv igjen senere.</p>
      );
    }
    else {
      let { postDaysSection, toggleCalendarSection, preDaysSection } = this.buildEvents(this.state.events);

      calendarContent = (
        <div>
          <div className="cal-timeline"/>

          { preDaysSection }
          { toggleCalendarSection }
          { postDaysSection }
        </div>
      );
    }

    return (
      <section id="calendar" className="component">
        <h1>Program. <a href="https://online.ntnu.no/splash/events.ics">iCalendar</a></h1>

        { calendarContent }
      </section>
    );
  }
});

export default Calendar;
