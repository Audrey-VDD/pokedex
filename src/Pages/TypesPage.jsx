import { useEffect, useState } from "react";
import PokemonServices from "../Services/PokemonServices";
import { useParams } from "react-router-dom";
import PokemonCard from "../Components/PokemonCard";

const TypePage = () => {
    const [nametype, setNameType] = useState([]);
    const { id } = useParams();
    console.log(id);


    const fetchPokeByType = async () => {
        try {
            // const response = await TypesServices.getAllTypes()
            const res = await PokemonServices.getDamage(id)
            console.log(res.data.pokemon);
            setNameType(res.data.pokemon);


        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchPokeByType()
    }, [])


    return <>
        <div style={{ color: "red" }}>
            <h1>TYPES</h1>
            {nametype.map((poke) => {
                return <PokemonCard pokemonCard={poke.pokemon}></PokemonCard>
            })}
        </div>

        {/* <div className='d-flex justify-content-center flex-wrap gap-4'>
            {nametype.map((poke) => {
                return <PokemonCard pokemonCard={poke.pokemon.name} key={poke.pokemon.name}></PokemonCard>
            })}
        </div> */}

        {/* <div className='d-flex justify-content-center flex-wrap gap-4'>
            {filteredPokemon.map((pokemon) => {
                return <PokemonCard pokemonCard={pokemon[1]} key={pokemon[1].id}></PokemonCard>
            })}
        </div> */}
    </>;
}

export default TypePage;