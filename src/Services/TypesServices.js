import axios from "axios";

function getAllTypes(){
    return axios.get(" https://pokeapi.co/api/v2/type/")
}
export default{
    getAllTypes
}