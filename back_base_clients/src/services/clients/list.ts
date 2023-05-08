import { Client } from '../../entities/entities/client';
import {AppDataSource} from "../../data-source";

async function listClientsService(): Promise<Client[]> {
  const clientRepository = AppDataSource.getRepository(Client);

  const clients = await clientRepository.find();

  return clients;
}

export { listClientsService };