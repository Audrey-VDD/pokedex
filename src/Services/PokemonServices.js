import axios from "axios";

function getAllPokemon (limit, offset){
    return axios.get("https://pokeapi.co/api/v2/pokemon?limit=" + limit + "&offset=" + offset)
    // Si on ne veut pas de pagination, on utilise le lien https://pokeapi.co/api/v2/pokemon?limit=50000 ça affichera tous les pokemons sur la page
}
function getPokemonByID(id){
    return axios.get("https://pokeapi.co/api/v2/pokemon/"+id)
}
function getSpeciesByID(id){
    return axios.get("https://pokeapi.co/api/v2/pokemon-species/"+id)
}
function getDamage(id){
    return axios.get("https://pokeapi.co/api/v2/type/"+id)
}
export default{
    getAllPokemon, getPokemonByID, getSpeciesByID, getDamage
}