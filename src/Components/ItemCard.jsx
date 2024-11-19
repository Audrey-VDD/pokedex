import { useNavigate } from "react-router-dom";
import PokemonCard from "./PokemonCard";

const ItemCard = (itemCard) => {
    const navigate = useNavigate();
    const navigateTo = (name) => {
        navigate("/pokemon/" + name);
    }

    return <>
        <button onClick={() => {navigateTo(PokemonCard.name)}}>{itemCard.name}</button>
    </>;
}

export default ItemCard;