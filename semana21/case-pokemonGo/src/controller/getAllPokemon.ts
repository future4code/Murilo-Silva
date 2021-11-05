
import { connection } from "../Data/connection"
import { Request, Response } from "express"

export const getAllPokemon = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const id = Number(req.query.id)

        let result

        if (id) {
            result = await connection("pokemons").where({ id })
        } else {
            result = await connection("pokemons")
        }
        res.send(result)

    } catch (error) {
        console.log(error)
        res.status(500).send("algo deu errado")
    }

}
