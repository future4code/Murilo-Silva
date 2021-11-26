export class Purchase {
    constructor(
        readonly userId: string,
        readonly productId: string,
        readonly quantity: number,
        readonly total: number
    ){
        if(typeof userId !== "string") throw new Error("Type of 'userId' must be a 'string' ")
        if(typeof productId !== "string") throw new Error("Type of 'productId' must be a 'string' ")
        if(typeof quantity !== "string") throw new Error("Type of 'quantity' must be a 'string' ")
        if(typeof total !== "string") throw new Error("Type of 'total' must be a 'string' ")
    }
}