import { Product } from "./Product";

export class Ticket extends Product {
    constructor(
        readonly id: string, 
        readonly name: string,
        readonly description: string,
        readonly price: number
    ){
        super(id, name, description, price)

        if(typeof origin !== "string") throw new Error("Type of 'origin' must be a 'string' ")
        if(typeof description !== "string") throw new Error("Type of 'description' must be a 'string' ")
    }
}