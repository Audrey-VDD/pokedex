import axios from "axios";

function getAllTypes(){
    return axios.get("https://pokeapi.co/api/v2/type?limit=50")
}
function getTypeByName(id){
    return axios.get("https://pokeapi.co/api/v2/type/"+id)
}
export default{
    getAllTypes, getTypeByName
}