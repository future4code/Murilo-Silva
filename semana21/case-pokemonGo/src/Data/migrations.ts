import { connection } from "./connection";
import { pokemons } from "./Pokemons";

connection("pokemons").insert(pokemons.map((pokemon: any) => {
    delete pokemon.Img_name
    const result = {
        ...pokemon,
        id: pokemon.Row,
        type1: pokemon.Type1,
        type2: pokemon.Type2 || "",
        Weather2: pokemon.Weather2 || "",
        FamilyID: pokemon.FamilyID || ""
    };
    delete result.Row
    delete result.Type1
    delete result.Type2
    return result

}))
    .then(
        () => { console.log("deu certo") }

    )
    .catch((error: any) => {
        console.log(error)
    })
    .finally(() => {
        connection.destroy()
    })