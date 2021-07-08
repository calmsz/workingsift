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
    const { counts, messages } = data
    const titleStyle = {
      'font-size': '36px',
      'font-weight': 'bolder',
      'padding': '4px',
    };
    return (
      <div>
        <span style={titleStyle}>{t('app:title-home')}</span>
        <span>          
          <i>{t('app:description-home', { count: counts.messageTotal })}</i>
        </span>
        <MessageStats counts={counts}></MessageStats>
        <MessageList messages={messages}></MessageList>
      </div>
    );
  }
}

export default translate(['app'], { wait: true })(App);
