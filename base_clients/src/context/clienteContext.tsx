import { createContext, ReactNode, useContext, useState } from 'react';
import api from '../services/api';

interface Client {
  id: string;
  name: string;
  address: string;
  contacts: Contact[];
}

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface ClientsContextData {
    clients: Client[];
    createClient(client: Client): Promise<void>;
    deleteClient(clientId: string): Promise<void>;
    loading: boolean;
}

interface ClientsProviderProps {
  children: ReactNode;
}

export const ClientsContext = createContext<ClientsContextData>(
  {} as ClientsContextData
);

function ClientsProvider({ children }: ClientsProviderProps) {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(false);

  async function createClient(client: Client) {
    setLoading(true);
    try {
      const response = await api.post('/clients', client);
      setClients([...clients, response.data]);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }

  async function deleteClient(clientId: string) {
    setLoading(true);
    try {
      await api.delete(`/clients/${clientId}`);
      setClients(clients.filter((client) => client.id !== clientId));
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }

  return (
    <ClientsContext.Provider value={{ clients, createClient, loading, deleteClient }}>
      {children}
    </ClientsContext.Provider>
  );
}

function useClients() {
  const context = useContext(ClientsContext);

  if (!context) {
    throw new Error('useClients must be used within a ClientsProvider');
  }

  return context;
}

export { ClientsProvider, useClients };