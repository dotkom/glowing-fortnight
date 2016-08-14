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
      error: null
    }
  },

  render: function () {
    return (
      <div id="slack"></div>
    )
  }
});

export default Slack;