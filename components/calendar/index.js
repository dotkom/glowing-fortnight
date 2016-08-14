import React from 'react';
import Day from './day';

require('es6-promise').polyfill();
require('isomorphic-fetch');

const MS_IN_DAY = 1000 * 60 * 60 * 24;
const API_URL = 'https://9u.no/online';
const TODAY = Math.floor(new Date().getTime() / MS_IN_DAY);

const Calendar = React.createClass({
  getInitialState: function () {
    return {
      active: 0,
      events: [],
      error: null
    }
  },

  fetchData: function () {
    var self = this;

    fetch(API_URL, {
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
        self.setState(Object.assign({}, self.state, { error: 'asdf' }));
      });
  },

  eventClickHandler: function (id) {
    this.setState(Object.assign({}, this.state, { active: id }));
  },

  render: function () {
    let id = 0;
    let lastEpochDays = 0;
    let daysEvents = [];
    let allDays = [];

    let preDays = [];
    let postDays = [];

    if (this.state.events.length === 0 && this.state.error === null) {
      this.fetchData();
    } else if (this.state.error !== null) {
      return (<p> { this.state.error }</p>);
    }

    const events = this.state.events;

    for (let event of events) {
      event.start_time = new Date(event.start_time);

      let epochDays = Math.floor(event.start_time.getTime() / MS_IN_DAY);

      if (epochDays > lastEpochDays && lastEpochDays != 0) {
        if (epochDays < TODAY) {
          preDays.push(<Day events={daysEvents} key={id}/>);
        }
        else {
          postDays.push(<Day events={daysEvents} key={id}/>);
        }

        daysEvents = [];
      }

      lastEpochDays = epochDays;
      daysEvents.push(event);
      id++;
    }

    if (daysEvents.length > 0) {
      postDays.push(<Day events={daysEvents} clickHandler={this.clickHandler} key={id}/>);
    }

    return (
      <div id="calendar" className="component">
        <h1>Calendar</h1>
        <div className="cal-timeline"></div>

        { preDays }
        <br/><hr/><br/><br/><br/><br/>
        { postDays }
      </div>
    );
  }
});

export default Calendar;
