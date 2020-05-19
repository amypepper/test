import React from "react";

class Bomb extends React.Component {
  state = { count: 0 };
  componentDidMount() {
    console.log("componentDidMount");
    const milliseconds = 1000;
    this.interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, milliseconds);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  renderDisplay() {
    const currentCount = this.state.count;
    if (currentCount >= 8) {
      clearInterval(this.interval);
      return "BOOM!";
    } else if (currentCount % 2 === 0) {
      return "tick";
    } else {
      return "tock";
    }
  }

  render() {
    return (
      <div>
        <p>{this.renderDisplay()}</p>
      </div>
    );
  }
}

export default Bomb;
