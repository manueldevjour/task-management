import { render, screen } from '@testing-library/react';
import ProgressContainer from '../../../../components/ui/ProgressContainer/ProgressContainer';
import { describe, it, expect } from 'vitest';

describe('ProgressContainer Component', () => {
  it.each([
    { progress: 50, expected: '50' },
    { progress: 0, expected: '0' },
    { progress: 100, expected: '100' }
  ])('renders $expected when progress is $progress', ({ progress, expected }) => {
    render(<ProgressContainer progress={progress} />);
    const progressBar = screen.getByRole('progressbar');

    expect(progressBar).toHaveAttribute('aria-valuenow', expected === '0%' ? '0' : expected);
    expect(progressBar).toHaveTextContent(expected);
  });
});
