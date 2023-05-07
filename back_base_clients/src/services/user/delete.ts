import {AppDataSource} from "../../data-source";
import { User } from "../../entities/entities/user";
import { IUserToken } from "../../interfaces/user"; 

export const deleteUserService = async (uuid: string, token: IUserToken) => {
  const userRep = AppDataSource.getRepository(User);
  const exist = await userRep.findOneBy({ id: uuid });
  if (!exist) throw new Error("User not found");

  if (token.id !== exist.id && !token.user.isAdm)
    throw new Error("Unauthorized");

  await userRep.remove(exist);
  return { message: "User deleted" };
};
