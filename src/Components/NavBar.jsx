import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import TypesServices from '../Services/TypesServices';
import { useEffect, useState } from "react";

const NavBar = () => {
    const [types, setTypes] = useState([]);
    const fetchType = async () => {
        try {
            const response = await TypesServices.getAllTypes()
            // console.log(response.data.results[0].name);
            setTypes(response.data)

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchType()
    }, [])


    return <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container className="me-auto my-2 my-lg-0 gap-3">
                <Nav>
                    <Link to={'/'}>HOME_</Link>
                    {/* <Link to={'/types/'}>_TYPES_</Link> */}
                    <Dropdown>
                        <Dropdown.Toggle variant="crystal" id="dropdown-basic">
                            Types
                        </Dropdown.Toggle>

                        <Dropdown.Menu className={"dropdown"}>
                            {types.results && types.results.map((type) => {
                                return <Dropdown.Item  className={"btnType"} href={'/type/'+type.name}>{type.name}</Dropdown.Item> 
                            })}
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>


    </>;
}

export default NavBar;