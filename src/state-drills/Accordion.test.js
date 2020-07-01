import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Accordion from "./Accordion";
import sections from "./sections";

describe("Accordion component", () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Accordion />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders empty given no prop", () => {
    const wrapper = shallow(<Accordion />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("renders no sections as active by default", () => {
    const wrapper = shallow(<Accordion sections={sections} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("opens a clicked section", () => {
    const wrapper = shallow(<Accordion sections={sections} />);
    wrapper.find("button").at(1).simulate("click");
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("only opens the most recently clicked section", () => {
    const wrapper = shallow(<Accordion sections={sections} />);
    wrapper.find("button").at(2).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
