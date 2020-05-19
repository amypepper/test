import React from "react";
import "./HelloWorld.css";

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props);

    this.state = { who: "not world!" };
  }
  handleWorldClick = () => {
    this.setState({ who: "world!" });
  };
  handleReactClick = () => {
    this.setState({ who: "React!" });
  };
  handleFriendClick = () => {
    this.setState({ who: "friend!" });
  };
  render() {
    return (
      <div>
        <p>Hello, {this.state.who}</p>
        <button onClick={this.handleWorldClick} className="button">
          World
        </button>
        <button onClick={this.handleFriendClick} className="button">
          Friend
        </button>
        <button onClick={this.handleReactClick} className="button">
          React
        </button>
      </div>
    );
  }
}

export default HelloWorld;
