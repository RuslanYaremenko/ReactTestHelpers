import App from './App';
import { shallowSmart } from './tests/testsHelper'

test('snapshot', () => {
  const component= shallowSmart(<App />);
  expect(component).toMatchSnapshot();
});
