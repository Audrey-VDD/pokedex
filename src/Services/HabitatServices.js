import axios from "axios";

function getAllHabitats () {
    return axios.get('https://pokeapi.co/api/v2/pokemon-habitat/')
}
function getHabitatByName (id) {
    return axios.get('https://pokeapi.co/api/v2/pokemon-habitat/'+id)
}
export default {
    getAllHabitats, getHabitatByName
}