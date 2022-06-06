import { Component } from "react";

import { Navbar, Container } from "react-bootstrap"

import './header.scss';

class Header extends Component{
    render (){
        const {userMoney} = this.props;
        return (
            <>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">PARIMATCH</Navbar.Brand>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                {userMoney}
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}
export default Header;