import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login form', () => {
  render(<App />);
  const header = screen.getByText(/Giriş Yap/i);
  expect(header).toBeDefined();
});
