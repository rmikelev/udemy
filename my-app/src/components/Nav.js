import  Navbar  from "react-bootstrap/Navbar";
import RBNav    from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";


export const Nav = () => {
    return(
        <Navbar bg="warning">
            <Container>
                <Navbar.Brand>Movie Data Base Tool</Navbar.Brand>
                <Navbar.Collapse>
                    <RBNav.Link href="/" className="text-danger">Movie Search</RBNav.Link>
                    <RBNav.Link href="/user-movie-list" className="text-success">my Movie List</RBNav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Nav