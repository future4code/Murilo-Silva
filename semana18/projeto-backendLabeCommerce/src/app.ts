import express from "express";
import cors from 'cors'

export const app = express()

app.use(express.json())
app.use(cors())

const port = process.env.PORT || 3306

app.listen(port, () => console.log(`Server is runing on port ${port}`))