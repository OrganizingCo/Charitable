import React from 'react';
import Dashboard from '../src/DashboardComponents/DashBoard';
import { screen, render } from '@testing-library/react';
import { expect, it } from 'vitest';

it('renders navbar on the page correctly', () => {
  render(<Dashboard />);

  const navbar = screen.getByText('This is navbar');

  expect(navbar).toBeVisible();
});

it('renders biobox on the page correctly', () => {
  render(<Dashboard />);

  const biobox = screen.getByText('This is BioBox');

  expect(biobox).toBeVisible();
});

it('renders charityboard on the page correctly', () => {
  render(<Dashboard />);

  const charityboard = screen.getByText('This is Charityboard');

  expect(charityboard).toBeVisible();
});