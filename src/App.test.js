import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app logo', () => {
  render(<App />);
  const headerElement = screen.getByAltText(/app-logo/i);
  expect(headerElement).toBeInTheDocument();
});
