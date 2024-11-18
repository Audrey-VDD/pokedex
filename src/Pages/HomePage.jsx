import { useEffect, useState } from "react";
import PokemonServices from "../Services/PokemonServices";
import PokemonCard from "../Components/PokemonCard";
import { Container } from "react-bootstrap";


const HomePage = () => {
    const [pokemon, setPokemon] = useState([]);

    const fetchPokemons = async () => {
        try {
            const response = await PokemonServices.getAllPokemon()
            console.log(response.data.results);
            setPokemon(response.data.results);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchPokemons()
    }, []);

    return <Container className='d-flex flex-column align-items-center mt-3'>
        <div className='d-flex justify-content-center flex-wrap gap-4'>
            {pokemon.map((pokemon) => {
                return <PokemonCard pokemonCard={pokemon} key={pokemon.id}></PokemonCard>
            })}
        </div>
    </Container>;
}

export default HomePage;