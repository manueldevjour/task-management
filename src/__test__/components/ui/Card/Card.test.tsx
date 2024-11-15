import { render, screen } from '@testing-library/react';
import Card from '../../../../components/ui/Card/Card';
import { describe, expect, it } from 'vitest';

describe('Card Component', () => {
  it('renders the Card component with children', () => {
    render(
      <Card>
        <div>Test Content</div>
      </Card>
    );
    const cardContent = screen.getByText('Test Content');
    expect(cardContent).toBeDefined();
  });
});
