import { Request, Response } from "express";
import { SignUpInputDTO } from "../entities/User";

export class UserController {
    async signUp(req: Request, res: Response) {
        try {
            let message = "Success!"
            const { name, email, password } = req.body

            const input: SignUpInputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }
      
            if (!input.name || !input.email || !input.password) {
               res.statusCode = 406
               message = '"name", "email" and "password" must be provided'
               throw new Error(message)
            }
      
            const id: string = generateId()
      
            const cypherPassword = await hash(password);
      
            await connection('labook_users')
               .insert({
                  id,
                  name,
                  email,
                  password: cypherPassword
               })
      
            const token: string = generateToken({ id })
      
            res.status(201).send({ message, token })
      
         } catch (error: any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
      
            res.send({ message })
         }
    }

}