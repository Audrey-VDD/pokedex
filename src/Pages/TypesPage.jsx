import { useEffect, useState } from "react";
import TypesServices from "../Services/TypesServices";


const TypesPage = () => {
    const [types, setTypes] = useState([]);

    const fetchType = async () => {
        try {
            const response = await TypesServices.getAllTypes()
            console.log(response.data.results[0].name);
            setTypes(response.data)

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchType()
    }, [])



    return <>
        <div>
            <h1>TYPES</h1>
        </div>

        {types.results && types.results.map((type) => {
            return <button>{type.name}</button>
        })}

    </>;
}

export default TypesPage;