import User from "../model/User";
import BaseDatabase from "./BaseDatabase";
type FindByEmailResponse = {
    id: string
    name: string
    email: string
    password: string
}[]
type UserLogin ={
    id: string
    email:string
    password: string
}
export default class UserData extends BaseDatabase {
    protected TABLE_NAME = "labook_user"
    create = async (user: User) => {
        try {
            await BaseDatabase
                .connection(this.TABLE_NAME)
                .insert(user)
        } catch (error) {
            throw new Error("Erro ao criar usuário no banco de dados")
        }
    }
    findByEmail = async (email: string) => {
        try {
            const queryResult: FindByEmailResponse = await BaseDatabase
                .connection(this.TABLE_NAME)
                .select()
                .where({ email })
            return queryResult[0]
        } catch (error) {
            throw new Error("Erro ao buscar usuário no banco de dados")
        }
    }
    loginUser = async (id: string) =>{
        try{
            await BaseDatabase
            .connection(this.TABLE_NAME)
            .where({ id })
        }catch (error) {
            throw new Error("Erro ao logar!")
        }
    }
}