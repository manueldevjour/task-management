import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from '../App';

describe('Renders main page correctly', async () => {
  it('Should render header correctly', async () => {
    render(<App />);
    const header = await screen.queryByText('Task Management');

    expect(header).not.toBeNull();
  });

  it('Should render the Widget component', async () => {
    render(<App />);
    const widget = screen.getByTestId('widget');

    expect(widget).toBeTruthy();
  });
});
