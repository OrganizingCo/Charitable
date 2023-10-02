import React from 'react';
import Dashboard from '../src/DashboardComponents/DashBoard';
import { screen, render } from '@testing-library/react';
import { expect, it } from 'vitest';

it('renders navbar on the page correctly', () => {
  render(<Dashboard />);

  const navbar = screen.getByTestId('navbar');

  expect(navbar).toBeVisible();
});

it('renders biobox on the page correctly', () => {
  render(<Dashboard />);

  const biobox = screen.getByTestId('biobox');

  expect(biobox).toBeVisible();
});

it('renders charityboard on the page correctly', () => {
  render(<Dashboard />);

  const charityboard = screen.getByTestId('charityboard');

  expect(charityboard).toBeVisible();
});