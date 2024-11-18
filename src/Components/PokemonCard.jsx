import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({pokemonCard}) => {
    const navigate = useNavigate();
    const navigateTo = (name) => {
        navigate("/pokemon/" + name);
    }
    const url = "https://pokeapi.co/api/v2/pokemon/1/";

    return <>
    <Card border="warning" style={{ width: '12rem' }} onClick={() => {navigateTo(pokemonCard.name)}}>
            <Card.Header>{pokemonCard.name}</Card.Header>
            <Card.Body>
                <Card.Title>
                    {pokemonCard.url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "")}
                </Card.Title>
                <Card.Text> <img style={{ width: '10rem' }} src={"https://img.pokemondb.net/artwork/"+pokemonCard.name+".jpg"} alt="" /></Card.Text>
            </Card.Body>
        </Card>
    </>;
}

export default PokemonCard;