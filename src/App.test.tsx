import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import DisplayCuisine from './DisplayCuisine';

test('checks for favorites img', () => {
  render(<App />);
  const favorites = screen.getByRole("img", {name: "favorites"});
  expect(favorites).toBeInTheDocument();
});

test('check for home img', () => {
  render(<App />);
  const home = screen.getByRole("img", {name: "home"});
  expect(home).toBeInTheDocument();
});

test('check for search input', () => {
  render(<App />);
  const search = screen.getByRole("textbox");
  expect(search).toBeInTheDocument();
});

test('check for ul', () => {
  render(<App />);
  const ul = screen.getByRole("list");
  expect(ul).toBeInTheDocument();
});

test('check for title img', () => {
  render(<App />);
  const title = screen.getByRole("img", {name: "title"});
  expect(title).toBeInTheDocument();
});

test('check for logo img', () => {
  render(<App />);
  const logo = screen.getByRole("img", {name: "logo"});
  expect(logo).toBeInTheDocument();
});


