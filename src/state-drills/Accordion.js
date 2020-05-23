import React from "react";

class Accordion extends React.Component {
  // set defaultProps so `sections` isn't undefined
  static defaultProps = { sections: [] };

  // set state to null so that no content is rendered before the user clicks a button
  state = { activeSectionIndex: null };

  // update state when a button has been clicked to store the index of that button's section
  handleSetActiveSection = (sectionIndex) => {
    this.setState({ activeSectionIndex: sectionIndex });
  };

  // section = a given object from the `sections` array prop
  // liIndex = key assigned to the `li` rendered below; based on the index of the `section` object
  // activeSectionIndex = the key in the `state` object that stores the index of the last button clicked
  renderItem(section, liIndex, activeSectionIndex) {
    return (
      // add key prop here so that React can tell the li's apart
      // render button with an event listener that will update state with the index of the li
      // that was clicked inside (because button is inside the li!)

      // take the li's index and assign that value as the active section's value in state

      // if that value in state is the same as the .map in `render()`'s iteration, then render section.content
      <li className="section-content" key={liIndex}>
        <button
          type="button"
          onClick={() => this.handleSetActiveSection(liIndex)}
        >
          {section.title}
        </button>
        {activeSectionIndex === liIndex && <p>{section.content}</p>}
      </li>
    );
  }

  render() {
    // grab the `activeSectionIndex` key from the state object and store the current state in a variable
    // grab the `section` key from the props object and store the the current value in a variable (saves you
    // from writing `this.props.sections` all the time)
    const { activeSectionIndex } = this.state;
    const { sections } = this.props;

    return (
      // evaluate the value of the .map array that has iterated over the `sections` prop and has rendered
      // an li containing a button and a conditionally-rendered `p` element
      // pass the renderItem method 3 args: the given item in the `sections` array; the index of that item; the
      // current value of state
      <div className="Accordion">
        <ul className="sections">
          {sections.map((section, liIndex) =>
            this.renderItem(section, liIndex, activeSectionIndex)
          )}
        </ul>
      </div>
    );
  }
}

export default Accordion;
