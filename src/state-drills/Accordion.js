import React from "react";

class Accordion extends React.Component {
  static defaultProps = { sections: [] };

  constructor(props) {
    super(props);
    this.state = {
      activeSectionIndex: null,
    };
  }

  handleButtonClick(index) {
    this.setState({ activeSectionIndex: index });
  }
  renderLis(section, index, activeSectionIndex) {
    return (
      <li key={index}>
        <button onClick={() => this.handleButtonClick(index)}>
          {section.title}
        </button>
        {activeSectionIndex === index && <p>{section.content}</p>}
      </li>
    );
  }
  render() {
    console.log(this.state.activeSectionIndex);
    return (
      <ul>
        {this.props.sections.map((section, index) =>
          this.renderLis(section, index, this.state.activeSectionIndex)
        )}
      </ul>
    );
  }
}
export default Accordion;
