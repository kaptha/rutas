import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from 'react-router-dom';

function BarNav(){
    return(
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Rutas React</Navbar.Brand>
                <Nav className="me-auto">
                 <Nav.Link as={Link} to="/inicio">Inicio</Nav.Link>
                <Nav.Link as={Link} to="/caracteristicas">Caracteristicas</Nav.Link>
                <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <section>
            <Outlet></Outlet>
        </section>
        </>
    )
}
export default BarNav;