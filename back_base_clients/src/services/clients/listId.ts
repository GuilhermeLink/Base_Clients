import {AppDataSource} from "../../data-source";
import { Client } from '../../entities/entities/client';

async function getClientByIdService(id: string): Promise<Client | undefined> {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOne({ where: { id } });

  return client;
}

export { getClientByIdService };