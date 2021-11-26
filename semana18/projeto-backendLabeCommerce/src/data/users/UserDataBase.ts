import { BaseDatabase } from "../BaseDataBase";
import { User } from "../../entities/User";

export class UserDatabase extends BaseDatabase {

    private static tableName = "labecommerce_users"

    private toUser = (input: User) => new User(
        input.id,
        input.name,
        input.email,
        input.age
    )

    createUser = (user: User) => BaseDatabase
        .connection(UserDatabase.tableName)
        .insert(user)


        getUserByEmail = async (email: string) => {
            const [result] = await BaseDatabase
            .connection(UserDatabase.tableName)
            .where({ email })
           
            if(result) return this.toUser(result)
        }

        getAllUsers = async () => {
            const result = await BaseDatabase
        .connection(UserDatabase.tableName)
        return result.map(this.toUser)
        }
}