import { Navbar, Container, Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom";

import './header.scss';

const Header = ({userMoney}) => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>PARIMATCH</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                        <Nav.Link as={NavLink} to='/add'>Add</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Your balance: {userMoney}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}


export default Header;