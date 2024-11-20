import { useState } from "react";
import PokemonServices from "../Services/PokemonServices";
import { useParams } from "react-router-dom";



const TypePage = () => {
    const [pokeByType, setPokeByType] = useState([]);
    const {id} = useParams();

   



    return <>
        <div style={{color: "red"}}>
            <h1>TYPES</h1>
        </div>
    </>;
}

export default TypePage;