import { AppDataSource } from '../../data-source';
import { Contact } from '../../entities/entities/contact';

async function deleteContactService(clientId: string, contactId: string): Promise<void> {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contact = await contactRepository.findOne({ where: { id: contactId, client: { id: clientId } } });

  if (!contact) {
    throw new Error('Contact not found');
  }

  await contactRepository.remove(contact);
}

export { deleteContactService };