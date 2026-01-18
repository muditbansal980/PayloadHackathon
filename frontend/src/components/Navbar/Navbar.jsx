import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
function NavbarComp() {
    return (
        <Navbar expand="lg" className="bg-blue-500 ">
            <Container className='flex justify-between'>
                    <Navbar.Brand >Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/rewards">Rewards</Nav.Link>
                            <Nav.Link as={NavLink} to="/transactions">Transaction History</Nav.Link>
                            <Nav.Link as={NavLink} to="/expenses">Expense Tracker</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComp;