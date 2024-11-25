import axios from "axios";

function getAllGeneration(){
    return axios.get("https://pokeapi.co/api/v2/generation/")
};
function getGenerationByName(id){
    return axios.get("https://pokeapi.co/api/v2/generation/"+id)
};
export default {
    getAllGeneration, getGenerationByName
}