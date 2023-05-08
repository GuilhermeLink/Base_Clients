import { Request, Response } from "express";
import { deleteContactService } from "../../services/contact/delete";

export const deleteContactController = async (request: Request, response: Response) => {
  const { clientId, contactId } = request.params;
  await deleteContactService(clientId, contactId);
  return response.status(204).send();
};