import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';



class Timer extends Component {
  render() {
    return (
     <div className="time-container">
       <CircularProgressbar className="time-circle" strokeWidth={5} percentage={50} />
     </div>
   );
  }
}

export default Timer;
