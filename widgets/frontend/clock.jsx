import React from "react";


class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }

    this.bndTick = this.tick.bind(this);
  }

  render() {
    return(
     <div className='container'>
       <div className='time'>
        <h1>Time: </h1> 
        <h1>{this.state.date.toLocaleTimeString()} </h1>
       </div>
      <div className='date'>
        <h1>Date:</h1>
        <h1>{this.state.date.toString().split(" ").slice(0, 4).join(' ')} </h1>
      </div>
    </div>
      );
  }

  tick() {
    this.setState(
      { date: new Date() }
    );
  }

  componentDidMount() {
    this.intervalId = setInterval(this.bndTick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
}
export default Clock;