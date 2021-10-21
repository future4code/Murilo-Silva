import { BaseDatabase } from "../BaseDataBase";
import { Product } from "../../entities/Product";
import { Ticket } from "../../entities/Ticket";

export class ProductDatabase extends BaseDatabase {

    private static tableName = "labecommerce_products"
    private toProduct = (input: any): Product => {
        return input.origin && input.destination
        ? new Ticket(input.id, input.name, input.description, input.price, input.origin, input.destination) : new Product(input.id, input.name, input.desccription, input.price)
    }

    createProduct = async (product: Product) => {
        await BaseDatabase
        .connection(ProductDatabase.tableName)
        .insert(product)
    }

    getAllProducts = async () => {
        const result = await BaseDatabase
        .connection(ProductDatabase.tableName)
        return result.map(this.toProduct)
    }
}