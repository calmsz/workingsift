/* eslint no-console: 0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageList from './MessageList';
import MessageStats from './MessageStats';

import { translate } from 'react-i18next';
class App extends Component {
  static propTypes = {
    t: PropTypes.function,
    data: PropTypes.any,
  }

  render() {
    const { t, data } = this.props;
    const { counts, messages } = data;
    const mainStyle = {
      'overflow': 'hidden',
      'white-space': 'nowrap',
      'text-overflow': 'ellipsis',
    };
    return (
      <div style={mainStyle}>
        <h1>{t('app:title-home')}</h1>
        <h4>{t('app:description-home', { count: counts.messageTotal })}</h4>
        <MessageStats counts={counts}></MessageStats>
        <MessageList messages={messages}></MessageList>
      </div>
    );
  }
}

export default translate(['app'], { wait: true })(App);
