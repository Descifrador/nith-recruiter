import { Container, Navbar } from "react-bootstrap";
import nithlogo from "./NIT_Hamirpur_logo.png";

const Header = () => {
  return (
    <div id="header" style={{ width: "100%" }}>
      <div id="logo-holder">
        <div
          id="logo"
          style={{ height: "50px", display: "flex", alignItems: "center" }}
        >
          <img src={nithlogo} style={{ height: "90%", width: "auto" }} />
        </div>
      </div>
      <div id="nav" className="nav">
        <a href="#about">About Us</a>
        <a href="#placement-record">Placement Record</a>
        <a href="#postings">Postings</a>
        <a href="#footer">Contact Us</a>
        <a href="/add">Add Post</a>
        <a href="/login">Login</a>
      </div>
    </div>
  );
};

// const Header = () => {
//   return (
//     <Navbar
//       expand="lg"
//       className="bg-primary-color py-0 pl-0 text white"
//       sticky="top"
//     >
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//             <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//           <Nav>
//             <Nav.Link href="#deets">More deets</Nav.Link>
//             <Nav.Link eventKey={2} href="#memes">
//               Dank memes
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

export default Header;
