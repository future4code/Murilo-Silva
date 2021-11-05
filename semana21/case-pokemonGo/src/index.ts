import { connection } from './Data/connection'
import {app} from './controller/app'
import { getAllPokemon } from "./controller/getAllPokemon"

app.get("/pokemon", getAllPokemon)

