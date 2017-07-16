import React from 'react';
import Calendar from '../calendar';
import calendarData from './calendarData.json';
import renderer from 'react-test-renderer';
import moment from 'moment';

const beforeDate = new Date('2017-08-01T00:00:00Z').valueOf();
const duringDate = new Date('2017-08-20T00:00:00Z').valueOf();
const afterDate = new Date('2017-09-01T00:00:00Z').valueOf();

it('renders correctly before fadderuker', () => {
  Date.now = jest.fn(() => beforeDate);
  const tree = renderer.create(
    <Calendar events={calendarData} error={null} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly during fadderuker', () => {
  Date.now = jest.fn(() => duringDate);
  const tree = renderer.create(
    <Calendar events={calendarData} error={null} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly after fadderuker', () => {
  Date.now = jest.fn(() => afterDate);
  const tree = renderer.create(
    <Calendar events={calendarData} error={null} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
