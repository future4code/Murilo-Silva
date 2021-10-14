import express, {Request, Response} from "express"
import cors from "cors"
import {countries} from "./data"
import { country } from "./types"

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log("Nice! Server is online at http://localhost:3003.")
})

app.get("/countries", (req: Request, res: Response) => {
  const result = countries.map((country: country) => {
    return { id: country.id, name: country.name };
  });

  res.status(200).send(result);
});

