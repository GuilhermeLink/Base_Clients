import { Request, Response } from "express";
import { updateContactService } from "../../services/contact/update";

export const updateContactController = async (request: Request, response: Response) => {
  const { clientId, contactId } = request.params;
  const data = request.body;
  const contact = await updateContactService(clientId, contactId, data);
  return response.status(200).json(contact);
};