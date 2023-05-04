import { Request, Response } from "express";
import { updateUserService } from "../../services/user/update";
import { IUserUpdate } from "../../interfaces/user";
import { IUserToken } from "../../interfaces/user";
import { validate as isValidUuid } from "uuid";

export const updateUserController = async (req: Request, res: Response) => {
  const uuid = req.params.id;
  if (isValidUuid(uuid) === false)
    return res.status(400).json({ message: "UUID is not valid" });
  const body: IUserUpdate = req.body;
  const token = req.token as IUserToken;

  const data = await updateUserService(uuid, body, token);
  return res.status(200).json(data);
};
