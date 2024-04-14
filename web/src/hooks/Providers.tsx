import { ReactNode } from 'react';
import { ClientProvider } from './useClient';

export const Providers = ({ children }: { children: ReactNode }) => {
  return <ClientProvider>{children}</ClientProvider>;
};
