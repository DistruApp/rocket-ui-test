import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import reducer, { initialState, ACTION_CREATORS, ACTIONS } from "../stores/SpaceXDuck";
import SpaceXService from "../services/SpaceXService";
import SpaceXCONFIG from "../configs/SpaceXAPI.testConfig";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock("../services/SpaceXService");

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

describe("SpaceX extra actions", () => {
   it("should handle getLaunches", () => {
      const expectedActions = [
         { type: ACTIONS.fetchingLaunches, payload: { fetchingLaunches: true }},
         { type: ACTIONS.setLaunches, payload: { launches: [SpaceXCONFIG.exampleLaunch] }},
         { type: ACTIONS.fetchingLaunches, payload: { fetchingLaunches: false }},
      ];
      const response = {
         status: 200,
         data: [SpaceXCONFIG.exampleLaunch]
      }
      SpaceXService.getLaunches.mockResolvedValue(response);
      const store = mockStore({spacex: {...initialState}});
      store.dispatch(ACTION_CREATORS.getLanuches()).then(() => {
         expect(store.getActions()).toEqual(expectedActions);
      });
   })
   it("getLaunches should handle '500' status", () => {
      const expectedActions = [
         { type: ACTIONS.fetchingLaunches, payload: { fetchingLaunches: true }},
         { type: ACTIONS.fetchingLaunches, payload: { fetchingLaunches: false }},
      ];
      const response = { 
         status: 500,
      }
      SpaceXService.getLaunches.mockResolvedValue(response);
      const store = mockStore({spacex: {...initialState}});
      store.dispatch(ACTION_CREATORS.getLanuches()).then(() => {
         expect(store.getActions()).toEqual(expectedActions);
      });
   })
   it("getLaunchers should not refetch launches", () => {
      const response = {
         status: 200,
         data: [SpaceXCONFIG.exampleLaunch]
      }
      SpaceXService.getLaunches.mockResolvedValue(response);
      const store = mockStore({spacex: {...initialState, launches: {key: "fake"} }});
      store.dispatch(ACTION_CREATORS.getLanuches()).then(() => {
         expect(store.getActions()).toEqual([]);
      });
   })
   it("should handle getRocket", () => {
      const expectedActions = [
         { type: ACTIONS.setRocket, payload: { rocket: SpaceXCONFIG.exampleRocket }},
      ];
      const response = {
         status: 200,
         data: SpaceXCONFIG.exampleRocket
      }
      SpaceXService.getRocket.mockResolvedValue(response);
      const store = mockStore({spacex: {...initialState}});
      store.dispatch(ACTION_CREATORS.getRocket("id")).then(() => {
         expect(store.getActions()).toEqual(expectedActions);
      });
   })
   it("getRocket should not refetch existing rocket", () => {
      const response = {
         status: 200,
         data: SpaceXCONFIG.exampleRocket
      }
      SpaceXService.getRocket.mockResolvedValue(response);
      const store = mockStore({spacex: {...initialState, rockets: {id: {key: "fake"}} }});
      store.dispatch(ACTION_CREATORS.getRocket("id")).then(() => {
         expect(store.getActions()).toEqual([]);
      });
   })
})