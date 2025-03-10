import { IUserDatabaseService } from '~/core/contracts/services';
import { IUser } from '~/core/models/domain';

import { like, tables, eq, sql } from '../sql/drizzle';
import { drizzle } from 'drizzle-orm/mysql2';
import { getConnection } from '../sql/mysql2Connection';

export class UserLocalSQLDatabaseService implements IUserDatabaseService {
  private drizzleORM!: ReturnType<typeof drizzle>;

  static async createInstance(): Promise<IUserDatabaseService> {
    const instance = new UserLocalSQLDatabaseService();
    await instance.initialize();
    return instance;
  }
  private async initialize() {
    const connection = await getConnection();
    this.drizzleORM = drizzle(connection);
  }

  async createUser(user: IUser): Promise<number> {
    let userId: number = 0;
    try {
      const preparedStatement = this.drizzleORM
        .insert(tables.users)
        .values({ ...user })
        .prepare();
      // const sql =
      //   'INSERT INTO `users` (`username`, `password`, `email`) VALUES (?, ?, ?)';
      // const stmt = this.db.prepare(sql);
      // const result = (await stmt.all(
      //   ...Object.values(user)
      // )) as unknown as ResultSetHeader;
      const [result, fields] = await preparedStatement.execute();
      console.log('Created user with id: ', result.insertId);
      userId = result.insertId;
    } catch (error) {
      console.error('Error creating user', error);
    }
    return userId;
  }

  async getUser(id: string): Promise<IUser> {
    throw new Error('Method not implemented.');
  }

  async updateUser(user: IUser): Promise<IUser> {
    throw new Error('Method not implemented.');
  }

  async deleteUser(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async getUsers(): Promise<IUser[]> {
    throw new Error('Method not implemented.');
  }
}
