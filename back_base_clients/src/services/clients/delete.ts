import { Client } from '../../entities/entities/client';
import {AppDataSource} from "../../data-source";

async function deleteClientService(id: string): Promise<void> {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOne({ where: { id } });

  if (!client) {
    throw new Error('Client not found');
  }

  await clientRepository.remove(client);
}

export { deleteClientService };