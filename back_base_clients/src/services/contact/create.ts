import { instanceToPlain } from "class-transformer";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/entities/contact";


interface ICreateContactRequest {
  name: string;
  email: string;
  phone: string;
  clientId: string;
}

export async function createContactService(data: ICreateContactRequest): Promise<ICreateContactRequest> {
  const contactRepository = AppDataSource.getRepository(Contact);
  const { email } = data;

  const existingContact = await contactRepository.findOne({ where: { email } });
  if (existingContact) throw new Error("Email already exists!");

  const contact = contactRepository.create(data);
  await contactRepository.save(contact);

  const plainContact = instanceToPlain(contact) as ICreateContactRequest;
  return plainContact;
}