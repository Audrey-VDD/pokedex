import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GenerationServices from "../Services/GenerationServices";
import PokemonCard from "../Components/PokemonCard";

const GenerationPage = () => {
    const [generation, setGeneration] = useState([]);
    const { id } = useParams();
    // console.log(id);

    const fetchPokemonByGeneration = async () => {
        try {
            const response = await GenerationServices.getGenerationByName(id);
            // console.log(response.data.pokemon_species);
            setGeneration(response.data.pokemon_species)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchPokemonByGeneration()
    }, [id]);




    return <>

        <div className={"typeTitle"}>
            <h1>{id}</h1>
        </div>


        {/* {generation.map((id)=>{
        return <p>{id.name}</p>
    })} */}


        <div className='d-flex justify-content-center flex-wrap gap-4 mt-4'>
            {generation.map((name) => {
                // console.log(name);
                
                return <PokemonCard pokemonCard={name}></PokemonCard>
            })}
        </div>
    </>;
}

export default GenerationPage;