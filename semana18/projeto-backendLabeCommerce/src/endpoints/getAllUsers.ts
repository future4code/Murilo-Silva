import { UserDatabase } from "../data/users/UserDataBase"
import { Request, Response} from "express-serve-static-core"


export const getAllUsers = async (req: Request, res: Response) => {
    try{
        const dataBase = new UserDatabase()

        const users = await dataBase.getAllUsers()

        res.status(200).send(users)
    } catch (err: any){
        res.status(500).send({message: err.message})

    }
}