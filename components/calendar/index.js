import React, { Component } from 'react';
import Calendar from './calendar';

import { API_EVENTS_URL } from '../../common/constants';

class CalendarContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      error: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(API_EVENTS_URL, {
      method: 'GET',
      mode: 'cors'
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState(Object.assign({}, this.state, { events: data.results }));
      })
      .catch((error) => {
        this.setState(Object.assign({}, this.state, { error: error }));
      });
  }

  render() {
    const { events, error } = this.state;
    return (
      <section id="calendar" className="component">
        <h1>Program. <a href="https://online.ntnu.no/splash/events.ics">iCalendar</a></h1>
        <Calendar events={events} error={error} />
      </section>
    );
  }
}

export default CalendarContainer;
