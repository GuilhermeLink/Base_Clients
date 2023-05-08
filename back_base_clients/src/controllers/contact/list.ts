import { Request, Response } from "express";
import { listContactsByClientIdService } from "../../services/contact/list";

export const listContactsByClientIdController = async (request: Request, response: Response) => {
  const { clientId } = request.params;
  const contacts = await listContactsByClientIdService(clientId);
  return response.status(200).json(contacts);
};