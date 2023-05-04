export interface IUserRequest {
  name: string
  email: string
  password: string
  isAdm: boolean
  phone: string
}

export interface IUser {
  id: string
  name: string
  email: string
  isAdm: boolean
  createdAt: Date
  updatedAt: Date
  isActive: boolean
}

export interface IUserToken {
  id: string;
  admin: boolean;
  user: IUserRequest;
}

export interface IUserLogin {
  email: string
  password: string
}

export interface IUserUpdate {
  name?: string
  email?: string
  password?: string
}

