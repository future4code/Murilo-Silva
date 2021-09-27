import express, {Express, Request, Response} from "express"
import cors from "cors"
import { accounts } from "./accounts"


const app: Express = express()

app.use(express.json())
app.use(cors())

app.post("/users/create", (req: Request, res: Response) => {
    try{
        const { name, CPF, dateOfBirthAsString} = req.body

        const [day, month, year] = dateOfBirthAsString.split("/")  // pega a string de dateOfBirth e transforma em um array dizendo que o que cada posição é, sendo dia, mês e ano. [01, 01, 2021]

        const dateOfBirth: Date = new Date(`${year}-${month}-${day}`)


        const ageInMilisseconds: number = Date.now() - dateOfBirth.getTime()

        const ageInYars: number = ageInMilisseconds / 1000 / 60 / 60 / 24 / 365

        if(ageInYars < 18){
            res.statusCode = 406
            throw new Error("Idade deve ser maior que 18 anos")
        }

        accounts.push({
            name,
            CPF,
            dateOfBirth,
            balance: 0,
            statement: []
        })

        res.status(201).send("conta criada com sucesso")

    } catch (error) {
        console.log(error)
        res.send(error)
        

    }

})

app.get("/users/all", (req: Request, res: Response) => {
    try{
        if(!accounts.length){
            res.statusCode = 404
            throw new Error("Nenhuma conta encontrada")
        }

        res.status(200).send(accounts)
    } catch (error){
        res.status(400).send(error) // por que está apontando erro quando deixo error.message? ;-;
    }
})

app.listen(3003, () => {
    console.log("servidor funcionando na porta 3003")
})
