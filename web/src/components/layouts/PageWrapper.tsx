import { ReactNode } from 'react';
import './PageWrapper.css';

export const PageWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="page-wrapper">{children}</div>;
};
