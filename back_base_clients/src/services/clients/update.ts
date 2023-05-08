import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/entities/client";

interface IUpdateClientRequest {
  name: string;
  email: string;
  phone: string;
  registrationDate?: Date;
}

async function updateClientService(id: string, data: IUpdateClientRequest): Promise<Client> {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOne({ where: { id } });

  if (!client) {
    throw new Error('Client not found');
  }

  const updatedClient = clientRepository.merge(client, data);
  await clientRepository.save(updatedClient);

  return updatedClient;
}

export { updateClientService };