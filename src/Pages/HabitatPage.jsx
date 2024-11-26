import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HabitatServices from "../Services/HabitatServices";
import PokemonCard from "../Components/PokemonCard";

const HabitatPage = () => {
    const [habitatPokemon, setHabitatPokemon] = useState([]);
    const { name } = useParams();

    const fetchHabitatByName = async () => {
        try {
            const response = await HabitatServices.getHabitatByName(name);
            console.log(response.data.pokemon_species);
            setHabitatPokemon(response.data.pokemon_species)

        } catch (error) {
            console.log(error);

        }
    };
    useEffect(() => {
        fetchHabitatByName()
    }, [name]);


    return <>
        <div className={"typeTitle"}>
            <h1>{id}</h1>
        </div>
        <div className='d-flex justify-content-center flex-wrap gap-4 mt-4'>
            {habitatPokemon.map((poke) => {
                console.log(poke);
                // poke et pas poke.name parce que la pokemonCard cherche plusieurs infos et pas que le name
                return <PokemonCard pokemonCard={poke}></PokemonCard>
            })}
        </div>
    </>;
}

export default HabitatPage;