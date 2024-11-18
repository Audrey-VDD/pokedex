import { useEffect, useState } from "react";
import PokemonServices from "../Services/PokemonServices";
import { useLocation, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

const PokemonDetailsPage = () => {
    const [detailsPokemon, setDetailsPokemon] = useState({});
    const [detailsPoke, setDetailsPoke] = useState({});
    const {id} = useParams();
    
    

    const fetchPokemon = async () => {
        try {
            const response = await PokemonServices.getPokemonByID(id)
            console.log(response.data);
            setDetailsPokemon(response.data);
            
        } catch (error) {
            console.log(error);
        }
    }
    const fetchPoke = async () => {
        try {
            const response = await PokemonServices.getSpeciesByID(id)
            console.log(response.data);
            setDetailsPoke(response.data);
            
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchPokemon(), fetchPoke() 
    }, []);

    return <Container className='d-flex flex-column align-items-center mt-3'>
        <h1>{detailsPoke.name} N°{detailsPoke.id}</h1>

        <div>
        <img className="mt-3" style={{ width: '10rem' }} src={"https://img.pokemondb.net/artwork/"+detailsPokemon.name+".jpg"} alt="" />
        {/* Afficher le texte, on le trouve ici dans species flavor_text_entries */}
        </div>

    </Container>;
}

export default PokemonDetailsPage;