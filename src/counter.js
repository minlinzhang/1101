import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      time: {},
      seconds: 10
    };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  startTimer() {
    if (this.timer === 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds
    });

    // Check if we're at zero.
    if (seconds === 0) {
      clearInterval(this.timer);
    }
  }
  // change code below this line

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  }

  reset() {
    this.setState({
      count: 0
    });
  }

  // change code above this line
  render() {
    return (
      <div>
        <h1> counter</h1>
        <button className="inc" onClick={(e) => this.increment(e)}>
          Increment!
        </button>
        <button className="dec" onClick={(e) => this.decrement(e)}>
          Decrement!
        </button>
        <button className="reset" onClick={(e) => this.reset(e)}>
          Reset
        </button>
        <div>Current Count: {this.state.count}</div>
        <hr />
        <h1>countdown timer</h1>
        <button onClick={this.startTimer}>Start</button>
        m: {this.state.time.m} s: {this.state.time.s}
      </div>
    );
  }
}

export default Counter;
