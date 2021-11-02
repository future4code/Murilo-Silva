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
        password: process.env.DB_PASSSWORD,
        database: process.env.DB_NAME
    }
})

app.get('/ping', (req, res) => {
    try {
        res.send('pong')
    } catch (error: any) {
        console.log(error.message)
    }
})