import React from "react";
import CourseListRow from "./CourseListRow";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Course List Row component test", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test" />);

    expect(wrapper.exists()).toBe(true);
  });

  it("should render one cell with colspan = 2 when textSecondCell null", () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell={null} />);

    expect(wrapper.find("tr").children()).toHaveLength(1);
    expect(wrapper.find("tr").childAt(0).html()).toEqual('<th colSpan="2">test</th>');
  });

  it("should render two cells when textSecondCell not null", () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test" />);

    expect(wrapper.find("tr").children()).toHaveLength(2);
    expect(wrapper.find("tr").childAt(0).html()).toEqual("<td>test</td>");
    expect(wrapper.find("tr").childAt(1).html()).toEqual("<td>test</td>");
  });
});
