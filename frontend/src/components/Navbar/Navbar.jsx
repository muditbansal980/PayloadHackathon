import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
function NavbarComp() {
    return (
        <Navbar expand="lg" className="bg-blue-500 ">
            <Container className='flex justify-between'>
                    <Navbar.Brand ><img src={Logo} alt="Logo" className="h-16 " /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/home" className="hover:scale-105 hover:font-blue-300">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/rewards" className="hover:scale-105 hover:font-blue-300">Rewards</Nav.Link>
                            <Nav.Link as={NavLink} to="/transactions" className="hover:scale-105 hover:font-blue-300">Transaction History</Nav.Link>
                            <Nav.Link as={NavLink} to="/expenses" className="hover:scale-105 hover:font-blue-300">Expense Tracker</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComp;