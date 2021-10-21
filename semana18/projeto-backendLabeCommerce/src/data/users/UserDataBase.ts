import { BaseDatabase } from "../BaseDataBase";
import { User } from "../../entities/User";

export class UserDatabase extends BaseDatabase {

    private static tableName = "labecommerce_users"

    createUser = (user: User) => BaseDatabase
        .connection(UserDatabase.tableName)
        .insert(user)
}