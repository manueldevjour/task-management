import { render, screen } from '@testing-library/react';
import Header from '../../../../components/ui/Header/Header';
import { describe, expect, it } from 'vitest';

describe('Header Component', () => {
  it('renders the Header component with the correct title', () => {
    render(<Header title="Task Management" />);
    const headerElement = screen.getByRole('heading', { name: /Task Management/i });

    expect(headerElement).toBeInTheDocument();
  });
});
