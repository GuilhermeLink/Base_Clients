import * as express from "express";
import { IUserRequest } from "../../interfaces/user";

declare global {
  namespace Express {
    interface Request {
      token?: {
        id: string;
        admin: boolean;
        user: IUserRequest;
      };
    }
  }
}
