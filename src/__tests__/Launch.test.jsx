import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Launch from "../components/Launch";
import SpaceXCONFIG from "../configs/SpaceXAPI.testConfig";

configure({ adapter: new Adapter() });

describe("Launch", () => {
   it("should call the clickHandler", () => {
      const clickJest = jest.fn(() => {});
      // Click when closed
      let component = shallow(
         <Launch 
            launch={SpaceXCONFIG.exampleLaunch}
            rocketDetails={SpaceXCONFIG.exampleRocket}
            selected={false}
            onClickHandler={clickJest}
         />);
      component.find("Card").simulate("click");
      expect(clickJest).toHaveBeenCalled();
      // Click when open
      component = shallow(
         <Launch 
            launch={SpaceXCONFIG.exampleLaunch}
            rocketDetails={SpaceXCONFIG.exampleRocket}
            selected
            onClickHandler={clickJest}
         />);
      component.find("Card").simulate("click");
      expect(clickJest).toHaveBeenCalled();
   })

   it("should be collapsed", () => {
      const clickJest = jest.fn(() => {});
      const component = shallow(
         <Launch 
            launch={SpaceXCONFIG.exampleLaunch}
            rocketDetails={SpaceXCONFIG.exampleRocket}
            selected={false}
            onClickHandler={clickJest}
         />);
      expect(component.find("Collapse").props().isOpen).toEqual(false);
   })

   it("should show a loader", () => {
      const clickJest = jest.fn(() => {});
      const component = shallow(
         <Launch 
            launch={SpaceXCONFIG.exampleLaunch}
            rocketDetails={undefined}
            selected
            onClickHandler={clickJest}
         />);
      expect(component.find("CardText")).toHaveLength(0);
      expect(component.find("Loader")).toHaveLength(1);
   })

   it("should show the details", () => {
      const clickJest = jest.fn(() => {});
      const component = shallow(
         <Launch 
            launch={SpaceXCONFIG.exampleLaunch}
            rocketDetails={SpaceXCONFIG.exampleRocket}
            selected
            onClickHandler={clickJest}
         />);
      expect(component.find("CardText")).toHaveLength(1);
      expect(component.find("Loader")).toHaveLength(0);
   })
})
