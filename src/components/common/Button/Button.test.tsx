import { click, render, screen } from '../../../tests/utils';
import { describe, expect, it, vi } from 'vitest';
import { Button } from './Button';

describe('<Button />', () => {
  it('should render correct text and trigger function on click', async () => {
    const clickFunction = vi.fn();

    render(<Button text="Click me" onClick={clickFunction} />);

    const text = screen.getByText('Click me');
    const button = screen.getByRole('button', { name: /click me/i });

    await click(button);

    expect(text).toBeInTheDocument();
    expect(clickFunction).toHaveBeenCalled();
  });
});
