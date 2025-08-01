import { render, screen } from '@testing-library/react';
import App from './App';

test('renders category names', () => {
  render(<App />);
  const categoryElement = screen.getByText(/hats/i);
  expect(categoryElement).toBeInTheDocument();
});
