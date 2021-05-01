import reducer, { initialState, ACTION_CREATORS } from "../stores/SpaceXDuck";
import SpaceXCONFIG from "../configs/SpaceXAPI.testConfig";

describe("SpaceX reducer", () => {
   it("should return initial state", () => {
      expect(reducer(undefined, {})).toEqual(initialState);
   })

   it("invalid should not affect state", () => {
      expect(reducer(initialState, { type: "NOT_VALID" })).toEqual(initialState);
   })

   it("should handle setFetchingLaunches", () => {
      const expectedState = { ...initialState, fetchingLaunches: true };
      // set fetching true
      let action = ACTION_CREATORS.setFetchingLaunches(true);
      expect(reducer(initialState, action)).toEqual(expectedState);
      // sets false with no input
      action = ACTION_CREATORS.setFetchingLaunches();
      expect(reducer(expectedState, action)).toEqual(initialState);
      // sets false with explicit false input
      action = ACTION_CREATORS.setFetchingLaunches(false);
      expect(reducer(expectedState, action)).toEqual(initialState);
   })

   it("should handle setLaunches", () => {
      const expectedState = { ...initialState, launches:{[SpaceXCONFIG.exampleLaunch.id]: SpaceXCONFIG.exampleLaunch}};
      // load launches
      let action = ACTION_CREATORS.setLaunches([SpaceXCONFIG.exampleLaunch]);
      expect(reducer(initialState, action)).toEqual(expectedState);
      // also clears the fetching flag
      expect(reducer({...initialState, fetchingLaunches: true}, action)).toEqual(expectedState);
      // it is possible to clear the list
      action = ACTION_CREATORS.setLaunches();
      expect(reducer(expectedState, action)).toEqual(initialState);
   })

   it("should handle setRockets", () => {
      const expectedState = { ...initialState, rockets: { [SpaceXCONFIG.exampleRocket.id]: SpaceXCONFIG.exampleRocket }};
      // load rockets
      let action = ACTION_CREATORS.setRockets([SpaceXCONFIG.exampleRocket]);
      expect(reducer(initialState, action)).toEqual(expectedState);
      // it is possible to clear the list
      action = ACTION_CREATORS.setRockets();
      expect(reducer(expectedState, action)).toEqual(initialState);
   })

   it("should handle setRocket", () => {
      const expectedState = { ...initialState, rockets: { [SpaceXCONFIG.exampleRocket.id]: SpaceXCONFIG.exampleRocket }};
      const exampleRocket2 = {...SpaceXCONFIG.exampleRocket, id: "abc"};
      const expectedState2 = {...expectedState, rockets: {...expectedState.rockets, "abc": exampleRocket2}};
      // load rocket
      let action = ACTION_CREATORS.setRocket(SpaceXCONFIG.exampleRocket);
      expect(reducer(initialState, action)).toEqual(expectedState);
      // ensure that loading a second rocket works
      action = ACTION_CREATORS.setRocket(exampleRocket2);
      expect(reducer(expectedState, action)).toEqual(expectedState2);
   })
})