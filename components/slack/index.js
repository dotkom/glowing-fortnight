import React from 'react';
import { API_SLACK_URL } from '../../common/constants';

class Slack extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      triggered: false,
      error: null,
      success: null,
      email: '',
    };
  }

  requestInvitationEmail() {
    if (this.state.email.length < 5 || this.state.email.indexOf('@') < 0) {
      this.setState(Object.assign({}, this.state, { error: 'Du må skrive inn en gyldig epostaddresse!' }));
      return false;
    }

    if (this.state.triggered) {
      this.setState(Object.assign({}, this.state, { error: 'Du har allerede forespurt en invitasjon!' }));
      return false;
    }

    fetch(API_SLACK_URL, {
      body: JSON.stringify({ email: this.state.email }),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      method: 'POST',
      mode: 'cors',
    })
      .then((response) => {
        if (!response.ok) {
          return response.json();
        }

        this.setState(
          Object.assign({}, this.state, {
            triggered: true,
            success: `En invitasjon ble sendt til ${this.state.email}!`,
            error: null,
          })
        );
      })
      .then((response) => {
        if (response === undefined) return;
        let errorMsg = 'Det oppstod en uventet feil.';

        if (response.detail !== undefined) errorMsg = response.detail;
        else if (response.email !== undefined) errorMsg = response.email;

        throw new Error(errorMsg);
      })
      .catch((error) => {
        console.error(error);
        this.setState(Object.assign({}, this.state, { error: error.message, success: null }));
      });
  }

  handleChange(event) {
    this.setState(Object.assign({}, this.state, { email: event.target.value }));
  }

  handleKeyPress(event) {
    if (event.key === 'Enter' && !this.state.triggered) this.requestInvitationEmail();
  }

  render() {
    return (
      <div id="slack" className="component">
        <h1>Chat med oss på Slack!</h1>

        <p>
          Linjeforeningens uformelle chatteplattform er{' '}
          <a href="https://slack.com" target="_blank" rel="noopener noreferrer">
            Slack
          </a>
        </p>
        <p>
          Bruk din stud.ntnu.no-epost og registrer deg på
          <a href="https://onlinentnu.slack.com" target="_blank" rel="noopener noreferrer">
            {' '}
            onlinentnu.slack.com
          </a>
        </p>
      </div>
    );
  }
}

export default Slack;
