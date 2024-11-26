import axios from "axios";

function getAllGameVersions (){
    return axios.get('https://pokeapi.co/api/v2/version/')
};
function getGameVersionById(id){
    return axios.get('https://pokeapi.co/api/v2/version/'+id)
}
function getVersionGroup(id){
    return axios.get('https://pokeapi.co/api/v2/version-group/'+id)
}
export default {
    getAllGameVersions, getGameVersionById, getVersionGroup
}