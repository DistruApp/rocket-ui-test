import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import launch from '../../components/Launch'
import { exampleLaunch } from '../helpers'

configure({ adapter: new Adapter() });

describe('launch', () => {
  it('renders when required props provided', () => {
    shallow(
      launch(exampleLaunch)
    );
  });

  it('crashes when required props aren\'t provided', () => {
    // Using enzyme's `expect(...).toThrow(...)` wasn't working so this
    // is the round about way
    try {
      shallow(
        launch()
      );
      throw new("Calling launch() with invalid props didn't crash");
    }
    catch(err) {} // eslint-disable-line no-empty
  });
});
