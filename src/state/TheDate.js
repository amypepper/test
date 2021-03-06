import React from "react";

class TheDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datetime: new Date(),
    };
    console.log("constructor");
  }
  componentDidMount() {
    console.log("componentDidMount");
    const milliseconds = 1000;
    this.interval = setInterval(() => {
      this.setState({ datetime: new Date() });
    }, milliseconds);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    console.log("render");
    return <div>{this.state.datetime.toLocaleString()}</div>;
  }
}

export default TheDate;
