import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
 
const cb = () => {
  console.log('expired callback')
}
 
const OPTIONS = {
  endDate: '03/01/2020 10:55 AM',
  prefix: 'until my birthday!',
  cb
}

const Completionist = () => <span>You are good to go!</span>;
const renderer = ({ days, hours, minutes, seconds, completed }) => {
	if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>{days}d:{hours}h:{minutes}m:{seconds}s</span>;
  }
};
 
const TestComponent = () => (
  <div>
    <Countdown
    date={Date.now() + 10000000}
    renderer={renderer}
  />
  </div>
)
 
ReactDOM.render(<TestComponent />, document.getElementById('root'))

export default TestComponent;