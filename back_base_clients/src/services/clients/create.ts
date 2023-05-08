import {AppDataSource} from "../../data-source";
import { Client } from '../../entities/entities/client';

interface IClientRequest {
  name: string;
  email: string;
  phone: string;
  registrationDate?: Date;
}

async function createClientService(data: IClientRequest): Promise<IClientRequest> {
  const clientRepository = AppDataSource.getRepository(Client);
  const { email } = data;

  const existingClient = await clientRepository.findOne({ where: { email } });
  if (existingClient) {
    throw new Error('Email already exists!');
  }

  const client = clientRepository.create(data);
  await clientRepository.save(client);

  return client;
}

export { createClientService };