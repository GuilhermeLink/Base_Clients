import { Request, Response } from "express";
import { createContactService } from "../../services/contact/create";

export const createContactController = async (request: Request, response: Response) => {
  const { clientId } = request.params;
  const data = request.body;
  const contact = await createContactService({ ...data, clientId });
  return response.status(201).json(contact);
};