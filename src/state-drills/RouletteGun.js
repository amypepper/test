import React from "react";

class RouletteGun extends React.Component {
  static defaultProps = {
    bulletInChamber: 8,
  };

  constructor(props) {
    super(props);
    this.state = {
      chamber: null,
      spinningTheChamber: false,
    };
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  handleClick = () => {
    this.setState({ spinningTheChamber: true });
    this.timeout = setTimeout(() => {
      this.myCallbackFunc();
    }, 2000);
  };

  myCallbackFunc() {
    const myRandomInt = Math.floor(Math.random() * Math.floor(8));
    this.setState({
      chamber: myRandomInt,
      spinningTheChamber: false,
    });
    console.log(myRandomInt);
  }

  makeDisplay() {
    if (this.state.spinningTheChamber) {
      return "spinning the chamber and pulling the trigger! ....";
    } else if (this.state.chamber === this.props.bulletInChamber) {
      return "BANG!!!";
    } else {
      return "You're safe!";
    }
  }
  render() {
    return (
      <div>
        <p>{this.makeDisplay()}</p>
        <button onClick={this.handleClick}>Pull the trigger!</button>
      </div>
    );
  }
}

export default RouletteGun;
