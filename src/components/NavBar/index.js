import {Navbar, Container, Nav} from "react-bootstrap"
import logoUnivel from "../img/Univel.png"
export function NavBar() {
    return ( 
        <>
          <Navbar bg="light" variant="light">
            <Container>
            <Navbar.Brand href="/"><img src={logoUnivel} alt="logoUnivel" style={{height: "80px"}}/></Navbar.Brand>
            <section>
              <Nav className="me-auto">
  
                <Nav.Link href="/sobre-nos">Sobre nós</Nav.Link>
                <Nav.Link href="https://wa.me/5545984026182">Whats-app</Nav.Link>
              </Nav>
            </section>
            </Container>
          </Navbar>
      </>
     );
}
