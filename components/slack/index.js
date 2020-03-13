import React from 'react';
import { API_SLACK_URL } from '../../common/constants';

class Slack extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      triggered: false,
      error: null,
      success: null,
      email: ''
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
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }),
      method: 'POST',
      mode: 'cors'
    })
      .then((response) => {
        if (!response.ok) {
          return response.json();
        }

        this.setState(Object.assign({}, this.state, {
          triggered: true,
          success: `En invitasjon ble sendt til ${this.state.email}!`,
          error: null
        }));
      })
      .then((response) => {
        if (response === undefined) return;
        var errorMsg = 'Det oppstod en uventet feil.';

        if (response.detail !== undefined) errorMsg = response.detail;
        else if (response.email !== undefined) errorMsg = response.email;

        throw new Error(errorMsg);
      })
      .catch((error) => {
        console.error(error);
        this.setState(Object.assign({}, this.state, { error: error.message, success: null }));
      })
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
          Linjeforeningens uformelle chatteplattform er <a href="https://slack.com" target="_blank">Slack</a>.
          Dersom du ikke har fått stud.ntnu.no-eposten din
          enda kan du be om en invitasjon til din private e-postadresse.
          Du vil da motta en link for å koble til slack-teamet vårt.
        </p>

        <label id="slack-email-label">E-post</label>
        <div id="slack-inputgroup">
          <input type="text"
                 id="slack-email-inputfield"
                 value={this.state.email}
                 placeholder="Skriv inn din e-postadresse..."
                 onChange={(e) => this.handleChange(e)}
                 onKeyPress={(e) => this.handleKeyPress(e)} />
          <button id="slack-submit-button"
                  onClick={() => this.requestInvitationEmail()}
                  disabled={this.state.triggered}>
            Send
          </button>
        </div>

        <p id="slack-success">{this.state.success}</p>
        <p id="slack-error">{this.state.error}</p>

        <p>
          Har du allerede en stud.ntnu.no-epost kan du registrere deg direkte på
          <a href="https://onlinentnu.slack.com" target="_blank"> onlinentnu.slack.com</a>
        </p>
      </div>
    )
  }
}

export default Slack;
