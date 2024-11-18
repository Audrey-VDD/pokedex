import axios from "axios";

function getAllPokemon (){
    return axios.get("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
}
export default{
    getAllPokemon
}