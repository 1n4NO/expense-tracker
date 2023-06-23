import { render, screen } from '@testing-library/react';
import App from './App';
import mockFetch from './mocks/mockFetch';

test('renders app logo', () => {
  render(<App />);
  const headerElement = screen.getByAltText(/app-logo/i);
  expect(headerElement).toBeInTheDocument();
});

it("fetches the mock data from mockFetch", async () => {
  const data = await mockFetch("https://expenseTracker.track/expenses");
  const parsedData = await data.json();
  expect(parsedData.message.nodes.length === 5);
});
