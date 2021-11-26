import { Request, Response } from 'express'
import { BaseDatabase } from '../data/BaseDataBase'
import { UserDatabase } from '../data/users/UserDataBase'
import { User } from '../entities/User'
import { idGenerator } from '../services/idGenerator'

export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, email, age } = req.body
        const id = new idGenerator().execute()
        const database = new UserDatabase()

        const newUser = new User(
            id,
            name,
            email,
            age
        )

        const finfEmail = await database.getUserByEmail(email)
        if(finfEmail){
            throw new Error ("O email já existe")
        }
        await database.createUser(newUser)

        res.status(201).send({ newUser })

    } catch (err: any) {
        res.status(500).send({ message: err.message })

    }
}