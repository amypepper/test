import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Accordion from "./Accordion";

const sections = [
  {
    title: "Section 1",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Section 2",
    content:
      "Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!",
  },
  {
    title: "Section 3",
    content:
      "Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?",
  },
];

describe("the Accordion component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Accordion />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders empty when nothing has been clicked on", () => {
    const wrapper = shallow(<Accordion />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("closes every section except the clicked one", () => {
    const wrapper = shallow(<Accordion sections={sections} />);
    wrapper.find("button").at(1).simulate("click");
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("closes every section except the clicked one", () => {
    const wrapper = shallow(<Accordion sections={sections} />);
    wrapper.find("button").at(2).simulate("click");
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("still renders the section correctly when same button pressed twice", () => {
    const wrapper = shallow(<Accordion sections={sections} />);
    wrapper.find("button").at(2).simulate("click");
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
