import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokemonServices from "../Services/PokemonServices";
import GameVersionServices from "../Services/GameVersionServices";
import GenerationServices from "../Services/GenerationServices";
import PokemonCard from "../Components/PokemonCard";


const GameVersionPage = () => {
    const [nameVersion, setNameVersion] = useState([]);
    const [pokemons, setPokemons] = useState([]);
    const { id } = useParams();

    const fetchNameVersionById = async () => {
        try {
            const response = await GameVersionServices.getGameVersionById(id)
            // console.log(response.data);
            setNameVersion(response.data);

            const resp = await GameVersionServices.getVersionGroup(response.data.version_group.name)
            // console.log(resp.data.generation.name);

            const res = await GenerationServices.getGenerationByName(resp.data.generation.name);
            console.log(res.data.pokemon_species);
            setPokemons(res.data.pokemon_species);

        } catch (error) {
            console.log(error);
        }
    }

    // Pour avoir les pokemons par leur version : version => version-group = url => generation = pokemon => pokemon
    const fetchPokemonVersion = async () => {
        try {
            const res = await PokemonServices.getAllPokemon()
            // console.log(res);
        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        fetchNameVersionById(), fetchPokemonVersion()
    }, [id]);


    return <>
        <div className={"typeTitle"}>
            <h1>VERSION {nameVersion.name}</h1>
        </div>

        {/* {pokemons.map((poke)=>{
            return <p>{poke.name}</p>
        })} */}
        <div className='d-flex justify-content-center flex-wrap gap-4 mt-4'>
            {pokemons && pokemons.map((poke) => {console.log(poke);
            // poke et pas poke.name parce que la pokemonCard cherche plusieurs infos et pas que le name
                return <PokemonCard pokemonCard={poke}></PokemonCard>
            })}
        </div>



    </>;
}

export default GameVersionPage;