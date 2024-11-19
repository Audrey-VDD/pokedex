import { useEffect, useState } from "react";
import PokemonServices from "../Services/PokemonServices";
import { useLocation, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

const PokemonDetailsPage = () => {
    const [detailsPokemon, setDetailsPokemon] = useState({});
    const [detailsPoke, setDetailsPoke] = useState({});
    const { id } = useParams();



    const fetchPokemon = async () => {
        try {
            const response = await PokemonServices.getPokemonByID(id)
            console.log(response.data.abilities);
            setDetailsPokemon(response.data);

        } catch (error) {
            console.log(error);
        }
    }
    const fetchPoke = async () => {
        try {
            const response = await PokemonServices.getSpeciesByID(id)
            // console.log(response.data);
            setDetailsPoke(response.data);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchPokemon(), fetchPoke()
    }, [id]);

    return <Container className='d-flex flex-column align-items-center mt-3'>
        <h1>N°{detailsPoke.id} {detailsPoke.name}</h1>
        <div className='d-flex align-items-center mt-3 gap-5'>
            <img className="mt-3" style={{ width: '20rem' }} src={"https://img.pokemondb.net/artwork/" + detailsPokemon.name + ".jpg"} alt="" />
            <div>
                <div className='col-5 mt-3'>
                    <p >{detailsPoke.flavor_text_entries && detailsPoke.flavor_text_entries[16].flavor_text}</p>
                </div>
                <div className='d-flex align-items-center mt-3 gap-5'>
                    <p>Taille : {detailsPokemon.height}</p>
                    <p>Poids : {detailsPokemon.weight}</p>
                    <ul>
                        <p>Compétences :</p>
                        {detailsPokemon.abilities && detailsPokemon.abilities.map((ability) => {
                            return <li key={ability}>{ability.ability.name}</li>
                        })}
                    </ul>
                </div>
            </div>

        </div>
        {/* <div className='d-flex align-items-center mt-3 gap-5'>

            <ul>
                <h2>Stats</h2>
                {detailsPokemon.stats && detailsPokemon.stats.map((stat, index) => {
                    return <li key={index}>{stat.stat.name} : {stat.base_stat}</li>
                })}
            </ul>
        </div> */}

        {/* TEST GRAPHIC : */}
        

    </Container>;
}

export default PokemonDetailsPage;