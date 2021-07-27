//import { render, screen } from '@testing-library/react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'
import App from './App';

Enzyme.configure({adapter : new EnzymeAdapter()});

test('renders learn react link', () => {
  const wrapper = shallow(<App/>)
  console.log(wrapper.debug());
  expect(wrapper).toBeTruthy();
});
