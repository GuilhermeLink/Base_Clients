import { AppDataSource } from "../../data-source";
import { Contact } from '../../entities/entities/contact';

interface IUpdateContactRequest {
  name?: string;
  email?: string;
  phone?: string;
}

async function updateContactService(clientId: string, contactId: string, data: IUpdateContactRequest): Promise<Contact> {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.findOne({ where: { id: contactId, client: { id: clientId } } });

  if (!contact) {
    throw new Error('Contact not found');
  }

  const updatedContact = contactRepository.merge(contact, data);
  await contactRepository.save(updatedContact);

  return updatedContact;
}

export { updateContactService };