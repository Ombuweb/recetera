import type { IUser } from '~/core/models/domain';

export interface IUserDatabaseService {
  createUser(user: IUser): Promise<number>;
  getUser(id: string): Promise<IUser>;
  updateUser(user: IUser): Promise<IUser>;
  deleteUser(id: string): Promise<void>;

  getUsers(): Promise<IUser[]>;
}
