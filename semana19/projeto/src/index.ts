import app from './app'
import { connection } from './connection'
import generateId from './services/idGenerator'

app.get('/')

// console.log(
//     generateId()
// )

connection.raw("SHOW TABLES").then(console.log)