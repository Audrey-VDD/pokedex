import axios from "axios";

function getAllPokemon (offset = 0, limit = 22){
    return axios.get("https://pokeapi.co/api/v2/pokemon?offset=" + offset + "&limit=" + limit)
}
function getPokemonByID(id){
    return axios.get("https://pokeapi.co/api/v2/pokemon/"+id)
}
export default{
    getAllPokemon, getPokemonByID
}