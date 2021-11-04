import { connection } from './Data/connection'
import {app} from './app'

app.get("/pokemon", async(req, res) => {
    const id = Number(req.query.id)

    let result

    if(id) {
        result = await connection("pokemons").where({id})
    } else {
        result = await connection("pokemons")
    }

    res.send(result)
})

