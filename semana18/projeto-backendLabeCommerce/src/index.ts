import { app } from './app'
import { createUser } from './endpoints/createUser'
import { createProduct } from './endpoints/products/createProducts'  
import { getAllProducts } from './endpoints/products/getAllProducts'

app.get('/users')
app.post('/users', createUser)

app.get('/products', getAllProducts)
app.post('/products', createProduct)