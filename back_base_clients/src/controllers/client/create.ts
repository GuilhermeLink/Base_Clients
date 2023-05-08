import { Request, Response } from "express";
import { createClientService } from "../../services/clients/create"

export const createClientController = async (req: Request, res: Response) => {
    const { name, email, phone, registrationDate } = req.body;
    const newClient = await createClientService({ name, email, phone, registrationDate });
    res.status(201).json(newClient);
  };