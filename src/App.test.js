import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link1', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello/i);
  expect(linkElement).toBeInTheDocument();
});
