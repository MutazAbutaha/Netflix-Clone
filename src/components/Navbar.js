
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
const  NavBar =()=>{
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Netflix</Navbar.Brand>
                <Nav className="nav">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/favList">favorite List</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;
