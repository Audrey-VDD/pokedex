import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({pokemonCard}) => {
    const navigate = useNavigate();
    return <>
    <Card border="warning" style={{ width: '12rem' }}>
            <Card.Header></Card.Header>
            <Card.Body>
                <Card.Title>{pokemonCard.name}</Card.Title>
                <Card.Text> <img style={{ width: '10rem' }} src={"https://img.pokemondb.net/artwork/"+pokemonCard.name+".jpg"} alt="" /></Card.Text>
            </Card.Body>
        </Card>
    </>;
}

export default PokemonCard;