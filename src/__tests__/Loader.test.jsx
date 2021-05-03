import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Loader from "../components/Loader";

configure({ adapter: new Adapter() });

describe("Loader", () => {
   it("should render", () => {
      const component = shallow(<Loader />);
      expect(component).toBeDefined();
   })
})
