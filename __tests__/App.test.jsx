import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

// Test to check if the App component renders correctly
test('renders Hello, React! heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/My React App/i);
  expect(headingElement).toBeInTheDocument();
});
