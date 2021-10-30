import cors from "cors"
import dotenv from "dotenv"
import express from "express"

dotenv.config()
export const app = express()
app.use(express.json())
app.use(cors())
app.listen(3003, () => {
    console.log("Server rodando na porta 3003")
})