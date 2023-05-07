import { instanceToPlain } from "class-transformer";
import {AppDataSource} from "../../data-source";
import { User } from "../../entities/entities/user";
import { IUserToken } from "../../interfaces/user"; 
import { IUserUpdate } from "../../interfaces/user";
import { hashSync } from "bcryptjs";

export const updateUserService = async (
  uuid: string,
  body: IUserUpdate,
  token: IUserToken
) => {
  const userRep = AppDataSource.getRepository(User);
  const exist = await userRep.findOne({
    where: { id: uuid }
  });
  if (!exist) throw new Error("User not found");

  if (token.id !== exist.id && !token.user.isAdm)
    throw new Error("Unauthorized");

  const password = hashSync(body.password, 10);

  if (body.password) {
    body.password = password;
  }

  const { ...updateData } = body;
  const user = userRep.merge(exist, updateData);

  await userRep.save(user);
  return instanceToPlain(user);
};
