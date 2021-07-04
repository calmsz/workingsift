/* eslint no-console: 0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { translate } from 'react-i18next';

class App extends Component {
  static propTypes = {
    t: PropTypes.function,
    data: PropTypes.any,
  }

  render() {
    const { t, data } = this.props;
    const { counts, messages } = data;
    const passImg = <img width='18px' src='assets/checkmark.svg' />;
    const failImg = <img width='18px' src='assets/cancel.svg' />;
    return (
      <div>
        <h1>{t('app:title-home')}</h1>
        <h4>{t('app:description-home', {count: counts.messageTotal})}</h4>
        <ul>
          { messages.map((m, key) =>
            <li>
              <div key={key}>
                <ul>
                  <li>
                    [{m.from['name']}]
                    [{m.subject}]
                    [{m.date}]
                  </li>
                  <li>
                    {m.from['email']}
                  </li>
                  <li>
                    Pass DMARC validation:{m.DMARC ? passImg : failImg}
                  </li>
                  <li>
                    Pass SPF validation:{m.SPF ? passImg : failImg}
                  </li>
                  <li>
                    Pass DKIM validation:{m.DKIM ? passImg : failImg}
                  </li>
                </ul>
              </div>
            </li>
          ) }
        </ul>
      </div>
    );
  }
}

export default translate(['app'], { wait: true })(App);
