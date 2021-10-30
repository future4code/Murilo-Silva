import { LoginInputDTO, SignupInputDTO } from "../controller/User.controller";
import UserData from "../data/User.data";
import User from "../model/User";
import Authenticator from "../services/Authenticator";
import HashManager from "../services/HashManager";
import IdGenerator from "../services/IdGenerator";
export default class UserBusiness {
    constructor(
        private userData: UserData,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator,
        private hashManager: HashManager
    ) {}
    signup = async (input: SignupInputDTO) => {
        const { name, email, password } = input
        if (!email || !name || !password) {
            throw new Error("Campos inválidos ao cadastrar usuário")
        }
        const registeredUser = await this.userData.findByEmail(email)
        if (registeredUser) {
            throw new Error("E-mail já cadastrado")
        }
        const id = this.idGenerator.execute()
        const hashedPassword = await this.hashManager.hash(password)
        const user = new User(
            id,
            name,
            email,
            hashedPassword
        )
        await this.userData.create(user)
        const token = this.authenticator.generateToken({ id })
        return token
    }
    login = async (input: LoginInputDTO) =>{
        const {email, password} = input
        if (!email || !password ){
            throw new Error("Campos inválidos verifique se email e senha estão corretos!!!")
        }
        const id = this.idGenerator.execute()
        const authenticator = new Authenticator()
        const hashedPassword = await this.hashManager.hash(password)
        await this.userData.loginUser(id)
        const token = this.authenticator.generateToken({id})
        return token
    }
}