import { useEffect, useState } from "react";
import TypesServices from "../Services/TypesServices";
import ItemCard from "../Components/ItemCard";


const TypesPage = () => {
    const [types, setTypes] = useState([]);

    const fetchType = async () =>{
        try{
            const response = await TypesServices.getAllTypes()
            console.log(response.data.results);
            setTypes(response.data)
            
        }catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchType()
    }, [])



    return <>
    <h1>TYPES</h1>
    {types.results && types.results.map((type)=>{
        return <ItemCard itemCard={type[0]}></ItemCard>
    })}

    </>;
}
 
export default TypesPage;