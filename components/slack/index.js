/**
 * Created by myth on 2016-08-14.
 */

import React from 'react';

import { API_SLACK_URL } from '../../common/constants';

require('es6-promise').polyfill();
require('isomorphic-fetch');

const Slack = React.createClass({
  getInitialState: function () {
    return {
      triggered: false,
      error: null,
      email: ''
    }
  },

  requestInvitationEmail: function () {
    var self = this;

    if (self.state.email.length < 5 || self.state.email.indexOf('@') < 0) {
      this.setState(Object.assign({}, this.state, { error: 'Du må skrive inn en gyldig epostaddresse!' }));
      return false;
    }

    if (self.state.triggered) {
      this.setState(Object.assign({}, this.state, { error: 'Du har allerede forespurt en invitasjon!' }));
      return false;
    }

    fetch(API_SLACK_URL, {
      body: { email: self.state.email },
      headers: {
        Accept: 'application/json'
      },
      method: 'POST',
      mode: 'cors'
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      this.setState(Object.assign({}, this.state, { triggered: true }))
    })
    .catch((error) => {
      console.error(error);
      this.setState(Object.assign({}, this.state, { error: error }))
    })
  },

  handleChange: function (event) {
    this.setState(Object.assign({}, this.state, { email: event.target.value }));
  },

  handleKeyPress: function (event) {
    if (event.key === 'Enter') this.requestInvitationEmail();
  },

  render: function () {
    var self = this;

    return (
      <div id="slack" className="component">
        <h1>Chat med oss på Slack!</h1>
        <p>Linjeforeningens uformelle chatteplattform er <a href="https://slack.com" target="_blank">Slack</a>.
          Dersom du ikke har fått stud.ntnu.no-eposten din
        enda kan du be om en invitasjon til din private e-postaddresse.
          Du vil da motta en link for å koble til slack-teamet vårt.</p>
        <label id="slack-email-label">E-post</label>
        <div id="slack-inputgroup">
          <input type="text"
                 id="slack-email-inputfield"
                 value={self.state.email}
                 placeholder="Skriv inn din E-postaddresse..."
                 onChange={self.handleChange}
                 onKeyPress={self.handleKeyPress}/>
          <button id="slack-submit-button"
                  onClick={self.requestInvitationEmail}
                  disabled={self.state.triggered}>
            Send
          </button>
        </div>
        <p id="slack-error">{self.state.error}</p>
        <p>Har du allerede en stud.ntnu.no-epost kan du registrere deg direkte på
          <a href="https://onlinentnu.slack.com" target="_blank"> onlinentnu.slack.com</a>
        </p>
      </div>
    )
  }
});

export default Slack;