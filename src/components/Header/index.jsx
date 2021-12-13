import { Container, Nav, Navbar } from "react-bootstrap";
import nithlogo from "./NIT_Hamirpur_logo.png";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="https://nith.ac.in">
          <img src={nithlogo} width="30" height="30" alt="NITH Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#placement-record">Placements</Nav.Link>
            <Nav.Link href="#postings">Postings</Nav.Link>
            <Nav.Link href="#footer">Contact Us</Nav.Link>

            <Nav.Link href="/add">Add Posting</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <div id="header" style={{ width: "100%" }}>

    //   <div id="logo-holder">
    //     <div
    //       id="logo"
    //       style={{ height: "50px", display: "flex", alignItems: "center" }}
    //     >
    //       <img src={nithlogo} style={{ height: "90%", width: "auto" }} />
    //     </div>
    //   </div>
    //   <div id="nav" className="nav">
    //     <a href="#about">About Us</a>
    //     <a href="#placement-record">Placement Record</a>
    //     <a href="#postings">Postings</a>
    //     <a href="#footer">Contact Us</a>
    //     <a href="/add">Add Post</a>
    //     <a href="/login">Login</a>
    //   </div>
    // </div>
  );
};

export default Header;
