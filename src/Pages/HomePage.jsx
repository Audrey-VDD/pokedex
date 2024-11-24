import { useEffect, useState } from "react";
import PokemonServices from "../Services/PokemonServices";
import PokemonCard from "../Components/PokemonCard";
import { Container, Pagination } from "react-bootstrap";
import { Form } from "react-bootstrap";


const HomePage = () => {
    const [pokemon, setPokemon] = useState([]);
    const [searchPokemon, setSearchPokemon] = useState(null);
    const [filteredPokemon, setFilteredPokemon] = useState([]);

    const [maxPage, setMaxPage] = useState(1000);
    const limit = 21;
    const [currentPage, setCurrentPage] = useState(1);


    const handleChange = (event) => {
        setSearchPokemon(event.currentTarget.value);
    }
    
// J'appelle le service axios pokemon pour chercher les infos nécessaires
    const fetchPokemons = async () => {
        try {
            const offset = (currentPage - 1) * limit;
            const response = await PokemonServices.getAllPokemon(limit, offset)
            const res = Object.entries(response.data.results)
            res.sort((a, b) => {
                return a[1].name.localeCompare(b[1].name);
            })
            // console.log(response.data.results);
            setPokemon(res);
            setFilteredPokemon(res);


            setMaxPage(500);
            setTimeout(() => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "instant",
                });
            }, 50)

        } catch (error) {
            console.log(error);
        }
    }
    // Appelle  mon fetch sur la page au moment du chargement
    useEffect(() => {
        fetchPokemons(),
        setSearchPokemon("")
    }, [currentPage]);

    useEffect(() =>{
        // Possible aussi : const filteredPokemons = pokemon.filter((pokemon)=>{return pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase())})
        setFilteredPokemon(pokemon.filter((tata) =>{
            // return tata[1].name.toLowerCase().startsWith(searchChampion.toLowerCase());
            return tata[1].name.toLowerCase().includes(searchPokemon.toLowerCase());
        }))
    }, [searchPokemon])

    return <Container className='d-flex flex-column align-items-center mt-3'>

        <div className="d-flex justify-content-center mt-2">
            <Form className="col-6" >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Rechercher</Form.Label>
                    {/* fonction onChange : capte chaque changement de l'input, value stocke ma valeur de recherche */}
                    <Form.Control type="text" placeholder="Charizard" value={searchPokemon} onChange={handleChange} />
                </Form.Group>
            </Form>
        </div>


        <div className='d-flex justify-content-center flex-wrap gap-4'>
            {/* On peut mettre ((pokemon, index)=>{et dans key={index}}) ça donne la position de l'objet dans tableau*/}
            {filteredPokemon.map((pokemon) => {
                return <PokemonCard pokemonCard={pokemon[1]} key={pokemon[1].id}></PokemonCard>
            })}
        </div>


        <Pagination className="mt-5" >
            {currentPage > 1 && <>
                <Pagination.First onClick={() => { setCurrentPage(1) }} />
                <Pagination.Prev onClick={() => { setCurrentPage(currentPage - 1) }} />
                {/* <Pagination.Item onClick={() => { setCurrentPage(1) }} >{1}</Pagination.Item> */}
                
            </>}

            {currentPage - 5 > 0 && <>
                <Pagination.Ellipsis onClick={() => { setCurrentPage(currentPage - 5) }} />
            </>}

            {(currentPage != 2 && currentPage > 1) && <>
                <Pagination.Item onClick={() => { setCurrentPage(currentPage - 1) }}>{currentPage - 1}</Pagination.Item>
            </>}

            <Pagination.Item active>{currentPage}</Pagination.Item>

            {currentPage + 1 < maxPage && <>
                <Pagination.Item onClick={() => { setCurrentPage(currentPage + 1) }}>{currentPage + 1}</Pagination.Item>
            </>}

            {currentPage + 5 <= maxPage && <>
                <Pagination.Ellipsis onClick={() => { setCurrentPage(currentPage + 5) }} />
            </>}

            {currentPage < maxPage && <>
                <Pagination.Item onClick={() => { setCurrentPage(maxPage) }} >{maxPage}</Pagination.Item>
                <Pagination.Next onClick={() => { setCurrentPage(currentPage + 1) }} />
                <Pagination.Last onClick={() => { setCurrentPage(maxPage) }} />

            </>}

        </Pagination>
    </Container>;
}

export default HomePage;