import React, {useState} from "react"
import { InputsContainer } from "./styled"
import TextField from '@material-ui/core/TextField'
import useForm from '../../hooks/useForm'
import Button from '@material-ui/core/Button'
import { login } from "../../services/user"
import { useHistory } from "react-router"
import { CircularProgress } from "@material-ui/core"

const LoginForm = ({setRightButtonText}) => {

    const history = useHistory()
    const [ form, handleInputChange, clear ] = useForm({ email: "", password: "" })
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history, setRightButtonText, setIsLoading )
    }

    return (
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={"email"}
                    value={form.email}
                    onChange={handleInputChange}
                    label={"E-mail"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"email"}
                />
                <TextField
                    name={"password"}
                    value={form.password}
                    onChange={handleInputChange}
                    senha={"Senha"}
                    label={"Password"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"password"}
                />

                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                    margin={"normal"}
                >
                    {isLoading ? <CircularProgress
                    color={"inherit"} size={24}
                    /> : <> Login </> }
                </Button>
            </form>
        </InputsContainer>
    )
}

export default LoginForm