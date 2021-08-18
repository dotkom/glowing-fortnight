import React from 'react';
import Calendar from '../calendar';
import calendarData from './calendarData.json';
import { shallow, mount } from 'enzyme';

const beforeDate = new Date('2017-08-01T00:00:00Z').valueOf();
const duringDate = new Date('2017-08-20T16:00:00Z').valueOf();
const afterDate = new Date('2017-09-01T00:00:00Z').valueOf();

it('renders correctly before fadderuker', () => {
  Date.now = jest.fn(() => beforeDate);
  const wrapper = shallow(<Calendar events={calendarData} error={null} />);
  expect(wrapper.getElements()).toMatchSnapshot();
});

it('renders correctly during fadderuker', () => {
  Date.now = jest.fn(() => duringDate);
  const wrapper = shallow(<Calendar events={calendarData} error={null} />);
  expect(wrapper.getElements()).toMatchSnapshot();
});

it('renders correctly after fadderuker', () => {
  Date.now = jest.fn(() => afterDate);
  const wrapper = shallow(<Calendar events={calendarData} error={null} />);
  expect(wrapper.getElements()).toMatchSnapshot();
});

it('renders past events after click', () => {
  Date.now = jest.fn(() => duringDate);
  const wrapper = shallow(<Calendar events={calendarData} error={null} />);
  wrapper.find('.cal-button--preDays').simulate('click');
  expect(wrapper.getElements()).toMatchSnapshot();
});

it('renders error', () => {
  const wrapper = shallow(<Calendar events={[]} error="Error message" />);
  expect(wrapper.getElements()).toMatchSnapshot();
});

it('renders loading message', () => {
  const wrapper = shallow(<Calendar events={[]} error={null} />);
  expect(wrapper.getElements()).toMatchSnapshot();
});
