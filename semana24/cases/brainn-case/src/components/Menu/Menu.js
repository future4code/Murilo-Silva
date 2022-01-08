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
                    <option value={"/"}> {data[0] && data[0].nome}</option>
                    <option value={"/quina"}> {data[1] && data[1].nome}</option>
                </DropdownSelect>
            </div>
        </GeneralContainer>
    )
}

export default Menu