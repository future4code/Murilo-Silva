import { ProductDatabase } from "../../data/products/ProductDatabase"
import { Request, Response } from "express"


export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const database = new ProductDatabase()

        const result = await database.getAllProducts()

        res.status(200).send({result})
    } catch (err: any) {
        res.status(500).send({message: err.message})
    }
}