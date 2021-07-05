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
        <h1 class='text-primary'>{t('app:title-home')} con class</h1>
        <h4>{t('app:description-home', {count: counts.messageTotal})}</h4>
        { Object.keys(counts.acumWordCount.daily).map(k => 
          <h3>{k}: {counts.acumWordCount.daily[k]} words</h3>
        )}
        { Object.keys(counts.acumWordCount.weekly).map(k => 
          <h3>{k}: {counts.acumWordCount.weekly[k]} words</h3>
        )}
        <ul>
          { messages.map((m, key) =>
            <li>
              <div key={key}>
                <ul>
                  <li>
                    [{m.from['name']}]
                    [{m.subject}]
                    [{m.formattedDate}]
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
