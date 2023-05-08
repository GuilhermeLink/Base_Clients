import { Request, Response } from "express";
import { getContactByIdService } from "../../services/contact/listId";

export const getContactByIdController = async (request: Request, response: Response) => {
  const { clientId, contactId } = request.params;
  const contact = await getContactByIdService(clientId, contactId);
  return response.status(200).json(contact);
};