import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Gallery from '..';

const portrait = { name: 'portraits', description: 'Portraits of people in my life' };

afterEach(cleanup);

describe('Gallery is rendering', () => {
  it('render', () => {
    render(<Gallery currentCategory={portrait} />);
  });

  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<Gallery currentCategory={portrait} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Portraits is visible', () => {
  it('insert portrait into h1', () => {
    const { getByTestId } = render(<Gallery currentCategory={portrait} />);
    expect(getByTestId('h1tag')).toHaveTextContent('Portraits');
  });
});