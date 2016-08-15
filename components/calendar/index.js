import React from 'react';
import Day from './day';

import { API_EVENTS_URL } from '../../common/constants';

require('es6-promise').polyfill();
require('isomorphic-fetch');

const MS_IN_DAY = 1000 * 60 * 60 * 24;
const TODAY = Math.floor(new Date().getTime() / MS_IN_DAY);

function getActiveEvent(postDays, daysEvents, active) {
  if (active < 0 && postDays.length > 0) {
    return postDays[0].index;
  } else if (active < 0 && daysEvents[0]) {
    return daysEvents[0].index;
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
    }
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
    this.setState(Object.assign({}, this.state, { preDaysSectionActive: true }));
  },

  buildEvents: function (events) {
    let id = 0;
    let lastEpochDays = 0;
    let daysEvents = [];

    let preDays = [];
    let postDays = [];
    let preDaysSection = '';

    events.forEach(function (event, index) {
      event.start_time = new Date(event.start_time);
      event.end_time = new Date(event.end_time);
      event.index = index;

      let epochDays = Math.floor(event.start_time.getTime() / MS_IN_DAY);

      if (epochDays > lastEpochDays && lastEpochDays != 0) {
        if (epochDays < TODAY) {
          preDays.push(<Day events={daysEvents} active={this.state.active} eventClickHandler={this.eventClickHandler} key={id}/>);
        }
        else {
	  let active = getActiveEvent(postDays, daysEvents, this.state.active);
          postDays.push(<Day events={daysEvents} active={active} eventClickHandler={this.eventClickHandler} key={id}/>);
        }

        daysEvents = [];
      }

      lastEpochDays = epochDays;
      daysEvents.push(event);
      id++;
    }, this);

    if (daysEvents.length > 0) {
      let active = getActiveEvent(postDays, daysEvents, this.state.active);
      postDays.push(<Day events={daysEvents} active={active} eventClickHandler={this.eventClickHandler} key={id}/>);
    }

    if (preDays.length > 0 && this.state.preDaysSectionActive) {
      preDaysSection = (
	<div className="cal-section--preDays">
	  { preDays }
	</div>
      );
    }
    else if (preDays.length > 0 && !this.state.preDaysSectionActive) {
      preDaysSection = (
	<button className="cal-button--preDays" onClick={this.preDaysClickHandler}>Vis tidligere arrangementer</button>
      );
    }
    else {
      preDaysSection = '';
    }

    return {
      postDays: postDays,
      preDaysSection: preDaysSection
    };
  },

  render: function () {
    let calendarContent = '';

    if (this.state.events.length === 0 && this.state.error === null) {
      this.fetchData();
      calendarContent = (<h2 className="component">Laster inn kalender</h2>);
    }
    else if (this.state.error !== null) {
      calendarContent = (<p className="component">En uventet feil har oppstått ved henting av program. Vennligst prøv igjen senere.</p>);
    }
    else {
      let { postDays, preDaysSection } = this.buildEvents(this.state.events);

      calendarContent = (
        <div>
          <div className="cal-timeline"></div>

          { preDaysSection }
          { postDays }
        </div>
      );
    }
    
    return (
      <section id="calendar" className="component">
        <h1>Program <a href="https://online.ntnu.no/splash/events.ics">iCalendar</a></h1>

        { calendarContent }
      </section>
    );
  }
});

export default Calendar;
