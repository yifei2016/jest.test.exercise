import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from './App';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders inputs', () => {
  let wrapper = shallow(<App />);
  expect(wrapper.find('#nameInput')).to.have.length(1);
  expect(wrapper.find('#emailInput')).to.have.length(1);
});

it("initial state name value=''", () => {
  let wrapper = shallow(<App />);
	expect( wrapper.state('namevalue') ).toBe('');
});

it("initial state email value=''", () => {
  let wrapper = shallow(<App />);
	expect( wrapper.state('emailvalue') ).toBe('');
});

it("input change test", () => {
  let wrapper = shallow(<App />);
  wrapper.find('#nameInput').simulate('change', {target: {value: 'My new value'}});
});
