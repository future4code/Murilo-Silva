import { useHistory } from "react-router";
import {GeneralContainer, DropdownSelect} from "./Menu.styles"

const Menu = ({ data }) => {
    const history = useHistory()

    const onChange = (event) => {
        history.push(event.target.value)
    }

    return (
        <GeneralContainer>
            <div>
                <DropdownSelect onChange={onChange}>
                    <option value={"/"}> {data[0] && data[0].nome.toUpperCase()}</option>
                    <option value={"/quina"}> {data[1] && data[1].nome.toUpperCase()}</option>
                    <option value={"/lotofacil"}> {data[2] && data[2].nome.toUpperCase()}</option>
                    <option value={"/lotomania"}> {data[3] && data[3].nome.toUpperCase()}</option>
                    <option value={"/timemania"}> {data[4] && data[4].nome.toUpperCase()}</option>
                    <option value={"/diadesorte"}> {data[5] && data[5].nome.toUpperCase()}</option>
                </DropdownSelect>
            </div>
        </GeneralContainer>
    )
}

export default Menu