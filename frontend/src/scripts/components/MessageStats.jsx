import React from 'react';

class MessageStats extends React.Component {
  constructor(props) {
    super(props);
    this.counts = props.counts;
  }

  componentDidMount() {
    const genColorRGB = () => {
      const r = Math.round(Math.random() * 255);
      const g = Math.round(Math.random() * 255);
      const b = Math.round(Math.random() * 255);

      const color = `rgb(${r},${g},${b})`

      return color;
    }



    const genAuthHeadersChart = () => {
      const dataAuthHeaders = {
        labels: ['DMARC', 'SPF', 'DKIM'],
        datasets: [{
          label: 'Pass',
          data: [this.counts.acumWordCount.dmarc, this.counts.acumWordCount.spf, this.counts.acumWordCount.dkim],
          backgroundColor: 'rgb(10, 160, 32)',
          borderColor: 'rgb(10, 160, 32)',
          borderWidth: 1
        }]
      };

      const config = {
        type: 'bar',
        data: dataAuthHeaders,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        },
      };

      return new Chart(
        document.getElementById('authheadersChart'),
        config
      );
    };


    const genWordcountDailyChart = () => {
      let labels = [];
      let data = [];
      let color = genColorRGB();
      Object.keys(this.counts.acumWordCount.daily).map(key => {
        labels.push(key);
        data.push(this.counts.acumWordCount.daily[key]);
      });
      const dataWordcountDaily = {
        labels,
        datasets: [{
          label: 'Daily word count',
          data,
          backgroundColor: color,
          borderColor: color,
          borderWidth: 1
        }]
      };

      const config = {
        type: 'bar',
        data: dataWordcountDaily,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        },
      };

      return new Chart(
        document.getElementById('wordcountDailyChart'),
        config
      );
    };

    const genWordcountWeeklyChart = () => {
      let labels = [];
      let data = [];
      let color = genColorRGB();
      Object.keys(this.counts.acumWordCount.weekly).map(key => {
        labels.push(key);
        data.push(this.counts.acumWordCount.weekly[key]);
      });
      const dataWordcountWeekly = {
        labels,
        datasets: [{
          label: 'Weekly word count',
          data,
          backgroundColor: color,
          borderColor: color,
          borderWidth: 1
        }]
      };

      const config = {
        type: 'bar',
        data: dataWordcountWeekly,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        },
      };

      return new Chart(
        document.getElementById('wordcountWeeklyChart'),
        config
      );
    };

    genAuthHeadersChart();
    genWordcountDailyChart();
    genWordcountWeeklyChart();
  };
  render() {
    const divRowStyle = {
      'display': 'table',
      'width': '100%',
      'table-layout': 'fixed',
      'border-spacing': 10
    };
    const divColStyle = {
      'display': 'table-cell',
    };

    return (
      <div style={divRowStyle}>
        <div style={divColStyle}>
          <canvas id='authheadersChart'></canvas>
        </div>
        <div style={divColStyle}>
          <canvas id='wordcountDailyChart'></canvas>
        </div>
        <div style={divColStyle}>
          <canvas id='wordcountWeeklyChart'></canvas>
        </div>
      </div>
    );

  }
}

export default MessageStats;
