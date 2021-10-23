import app from './app'
import generateId from './services/idGenerator'

app.get('/')

console.log(
    generateId()
)