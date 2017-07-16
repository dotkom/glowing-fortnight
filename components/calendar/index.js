import React, { Component } from 'react';
import Calendar from './calendar';
import moment from 'moment';

import { API_EVENTS_URL } from '../../common/constants';

require('es6-promise').polyfill();
require('isomorphic-fetch');

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
    return <Calendar events={events} error={error} />;
  }
}

export default CalendarContainer;
