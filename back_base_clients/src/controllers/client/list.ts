import { Request, Response } from "express";
import { listClientsService } from "../../services/clients/list";

export const listClientsController = async (req: Request, res: Response) => {
  const clients = await listClientsService();
  res.json(clients);
};