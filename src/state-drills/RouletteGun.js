import React from "react";

class RouletteGun extends React.Component {
  static defaultProps = {
    bulletInChamber: 1,
  };

  state = {
    spinningTheChamber: false,
    chamber: null,
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  handleClick = () => {
    this.setState({
      spinningTheChamber: true,
    });
    this.timeout = setTimeout(() => {
      let randomChamberValue = Math.ceil(Math.random() * 8);
      this.setState({
        chamber: randomChamberValue,
        spinningTheChamber: false,
      });
    }, 2000);
  };

  renderDisplay() {
    if (this.state.spinningTheChamber) {
      return "spinning the chamber and pulling the trigger!";
    }
    if (this.state.chamber === this.props.bulletInChamber) {
      return "BANG!!!";
    } else {
      return "you're safe!!";
    }
  }

  render() {
    return (
      <div>
        <p>{this.renderDisplay()}</p>
        <button onClick={this.handleClick}>Pull the trigger</button>
      </div>
    );
  }
}

export default RouletteGun;
