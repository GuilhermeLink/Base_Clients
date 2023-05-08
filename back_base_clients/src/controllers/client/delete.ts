import { Request, Response } from "express";
import { deleteClientService } from "../../services/clients/delete";

export const deleteClientController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteClientService(id);
  res.status(204).end();
};