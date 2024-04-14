import { act, render as testRender } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { ReactNode } from 'react';

// Wrapped the render function to add some custom logic later
export const render = (Node: ReactNode) => {
  return testRender(Node);
};

export const click = async (element: HTMLElement) => {
  return await act(async () => await userEvent.click(element));
};

export * from '@testing-library/react';
