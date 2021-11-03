import dotenv from 'dotenv'
import knex from 'knex'
import {app} from './app'

dotenv.config();

export const connection = knex ({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
})

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

