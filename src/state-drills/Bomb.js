import React from "react";

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((previousState) => ({ count: previousState.count + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  conditionalDisplay() {
    const { count } = this.state;

    if (count >= 8) {
      clearInterval(this.interval);
      return "BOOM!!";
    } else if (count % 2) {
      return "tick";
    } else {
      return "tock";
    }
  }

  render() {
    return (
      <div>
        <p>{this.conditionalDisplay()}</p>
      </div>
    );
  }
}

export default Bomb;
