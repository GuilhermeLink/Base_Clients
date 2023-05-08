import { Request, Response } from "express";
import { getClientByIdService } from "../../services/clients/listId";

export const getClientByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const client = await getClientByIdService(id);
  res.json(client);
};