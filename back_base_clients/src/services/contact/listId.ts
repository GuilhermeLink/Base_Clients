import { Contact } from '../../entities/entities/contact';
import { AppDataSource } from '../../data-source';

async function getContactByIdService(clientId: string, contactId: string): Promise<Contact | undefined> {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.findOne({ where: { id: contactId, client: { id: clientId } } });
  return contact;
}

export { getContactByIdService };