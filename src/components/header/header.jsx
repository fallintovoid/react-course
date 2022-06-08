import { Component } from "react";

import { Navbar, Container, Nav } from "react-bootstrap"

import './header.scss';

class Header extends Component{
    render (){
        const {userMoney, onChangeAdd, onFalseAdd} = this.props;
        return (
            <>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">PARIMATCH</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link 
                                href="#"
                                onClick = {onFalseAdd}>Home</Nav.Link>
                            <Nav.Link 
                                href="#"
                                onClick = {onChangeAdd}>Add</Nav.Link>
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
}
export default Header;