import { Request, Response } from "express-serve-static-core"
import { ProductDatabase } from "../../data/products/ProductDatabase"
import { Product } from "../../entities/Product"
import { Ticket } from "../../entities/Ticket"
import { idGenerator } from "../../services/idGenerator"

export const createProduct = async (req: Request, res: Response) => {
    try{
        const {name, description, price, origin, destination} = req.body
    const id = new idGenerator().execute()
    const dataBase = new ProductDatabase()

    const newProduct = origin && destination ? new Ticket (id, name, description, price, origin, destination): new Product(id, name, description, price)

    await dataBase.createProduct(newProduct)

    res.status(201).send({Product: newProduct})

    } catch (err: any) {
        res.status(500).send({message: err.message})
    }
}