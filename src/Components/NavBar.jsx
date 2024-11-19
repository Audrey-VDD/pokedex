import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container className="me-auto my-2 my-lg-0 gap-3">
                <Nav>
                    <Link to={'/'}>HOME_</Link>
                    <Link to={'/types/'}>_TYPES_</Link>
                    <Link>_ _</Link>
                </Nav>
            </Container>
        </Navbar>


    </>;
}

export default NavBar;