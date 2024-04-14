import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { config } from 'config';
import { ReactNode, createContext, useContext } from 'react';

type ClientContextType = SupabaseClient<any, 'public', any> | null;

const ClientContext = createContext<ClientContextType>(null);
export const ClientProvider = ({ children }: { children: ReactNode }) => {
  console.log(config);
  const supabase = createClient(config.apiUrl, config.supabaseKey);

  return (
    <ClientContext.Provider value={supabase}>{children}</ClientContext.Provider>
  );
};

export const useClient = () => {
  const context = useContext(ClientContext);
  if (context === undefined) {
    throw new Error('useClient must be used within a ClientProvider');
  }
  return context;
};
