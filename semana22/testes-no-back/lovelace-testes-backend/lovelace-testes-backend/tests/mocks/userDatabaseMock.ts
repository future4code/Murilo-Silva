import { User } from "../../src/model/User";
import { userAdminMock, userNormalMock } from "./userMock";

export class UserDatabaseMock {
  public async createUser(user: User): Promise<void> {
  }

  public async getUserByEmail(email: string): Promise<User | undefined> {
    switch (email) {
      case "user1@gmail.com":
        return userNormalMock;
      case "user2@gmail.com":
        return userAdminMock;
      default:
        return undefined;
    }
  }


  public async getUserById(id: string): Promise<User | undefined> {
    switch (id) {
      case "id_user_1":
        return userNormalMock
      case "id_user_2":
        return userAdminMock
      default:
        return undefined
    }
  }
  
  public async getAllUsers(): Promise<User[]> {
    return [userNormalMock, userAdminMock];
  }

}