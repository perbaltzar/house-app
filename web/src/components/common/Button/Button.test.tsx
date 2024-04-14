import { click, render, screen } from '../../../tests/utils';
import { describe, expect, it, vi } from 'vitest';
import { Button } from './Button';

describe('<Button />', () => {
  it('should render correct text and trigger function on click', async () => {
    // This is a mock function, that you can check if it was called
    const clickFunction = vi.fn();

    // Testable props are passed to the Button component
    render(<Button text="Click me" onClick={clickFunction} />);

    // Check if the button is rendered with the correct text
    const text = screen.getByText('Click me');

    // Save the button element to a variable
    const button = screen.getByRole('button', { name: /click me/i });

    // Simulate a click on the button
    await click(button);

    // Check if the text is rendered
    expect(text).toBeInTheDocument();
    // Check if the function was called
    expect(clickFunction).toHaveBeenCalled();
  });
});
