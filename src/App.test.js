/* global it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders App component without crashing', () => {
  const component = shallow(<App />);
  expect(component.exists()).toEqual(true);
});
