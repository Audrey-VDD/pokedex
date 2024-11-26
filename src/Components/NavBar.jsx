import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import TypesServices from '../Services/TypesServices';
import { useEffect, useState } from "react";
import GenerationServices from '../Services/GenerationServices';
import { DropdownItem } from 'react-bootstrap';
import GameVersionServices from '../Services/GameVersionServices';
import HabitatServices from '../Services/HabitatServices';

const NavBar = () => {
    const navigate = useNavigate();
    const [types, setTypes] = useState([]);
    const [generation, setGeneration] = useState([]);
    const [gameVersions, setGameVersions] = useState([]);
    const [habitats, setHabitats] = useState([]);

    // Je peux utiliser toujours response du moment qu'elles ne sont pas dans le mêe fetch 
    // Récupérer les générations
    const fetchGeneration = async () =>{
        try {
            const res = await GenerationServices.getAllGeneration()
            // console.log(res.data.results);
            setGeneration(res.data.results);
        } catch (error) {
            console.log(error);
        }
    }

    // Récupérer les types
    const fetchType = async () => {
        try {
            const response = await TypesServices.getAllTypes()
            // console.log(response.data);
            setTypes(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    // Récupérer les game versions
    const fetchAllGameVersions = async () => {
        try {
            const resp = await GameVersionServices.getAllGameVersions()
            // console.log(resp.data.results);  
            setGameVersions(resp.data.results);
        } catch (error) {
            console.log(error); 
        }
    }

    // Récupérer les habitats
    const fetchAllHabitats = async () => {
        try {
            const respo = await HabitatServices.getAllHabitats()
            console.log(respo.data.results);
            setHabitats(respo.data.results)         
        } catch(error) {
            console.log(error);
            
        }
    }


    useEffect(() => {
        fetchType(), fetchGeneration(), fetchAllGameVersions(), fetchAllHabitats()
    }, [])


    // Utiliser navigate ou to mais pas de href sinon, on ne pourra pas passer de prop caché
    return <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container className="me-auto my-2 my-lg-0 gap-3">
                <Nav>
                    <Link to={'/'}>HOME</Link>
                    {/* <Link to={'/types/'}>_TYPES_</Link> */}
                    <Dropdown>
                        <Dropdown.Toggle variant="crystal" id="dropdown-basic">
                            Types
                        </Dropdown.Toggle>
                        <Dropdown.Menu className={"dropdown"}>
                        {/* /* Pour scroller dans le menu des types */ }
                            {/* .dropdown-menu{
                             height: 40vh;
                            overflow-y: auto;
                            } */}
                            {types.results && types.results.map((type) => {
                                return <Dropdown.Item key={type.name + "nav"} className={"btnType"} onClick={()=>{navigate('/type/'+type.name)}} >{type.name}</Dropdown.Item>
                            })}
                            {/* Au lieu du onClick, on peut mettre href={'/type/' + type.name} mais c'est une moins bonne pratique */}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="crystal" id="dropdown-basic">
                            Générations
                        </Dropdown.Toggle>
                        <Dropdown.Menu className={"dropdown"}>
                            {generation.map((name)=>{
                                return <Dropdown.Item key={name.name + "nav"} className={"btnType"} onClick={()=>{navigate('/generation/'+ name.name)}}>{name.name}</Dropdown.Item>
                            })}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="crystal" id="dropdown-basic">
                            Game Versions
                        </Dropdown.Toggle>
                        <Dropdown.Menu className={"dropdown"}>
                            {gameVersions.map((version)=>{
                                return <Dropdown.Item key={version.name + "nav"} className={"btnType"} onClick={()=>{navigate('/gameVersion/'+ version.name)}}>{version.name}</Dropdown.Item>
                            })}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="crystal" id="dropdown-basic">
                            Habitats
                        </Dropdown.Toggle>
                        <Dropdown.Menu className={"dropdown"}>
                            {habitats.map((habitat)=>{
                                return <Dropdown.Item key={habitat.name} onClick={()=> {navigate('/habitat/'+ habitat.name)}}>{habitat.name}</Dropdown.Item>
                            })}
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>


    </>;
}

export default NavBar;