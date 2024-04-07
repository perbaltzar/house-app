import { ReactNode } from 'react';
import { render as testRender } from '@testing-library/react';

// I wrapped the render function to add some custom logic later
export const render = (Node: ReactNode) => {
  return testRender(Node);
};
export * from '@testing-library/react';
