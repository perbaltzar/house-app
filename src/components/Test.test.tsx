import { describe, it } from 'vitest';
import { render, screen } from '../tests/utils';
import { Test } from './Test';

describe('<Test />', () => {
  it('should render', () => {
    render(<Test />);

    screen.getByText('hej');
  });
});
