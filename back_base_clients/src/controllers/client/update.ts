import { Request, Response } from "express";
import { updateClientService } from "../../services/clients/update";

export const updateClientController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email, phone, registrationDate } = req.body;
    const updatedClient = await updateClientService(id, { name, email, phone, registrationDate });
    res.json(updatedClient);
  };