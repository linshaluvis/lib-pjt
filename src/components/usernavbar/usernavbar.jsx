import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './usernavbar.css';


function OffcanvasExample() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="custom-navbar bg-body-tertiary mb-3">
          <Container className='Navbar' fluid>
            <Navbar.Brand  className='Navbar-head' href="#"><strong>BOOKSHARE</strong> </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  WELCOME USER
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="  justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Books</Nav.Link>
                  <Nav.Link href="#action1">Book CART</Nav.Link>
                  <Nav.Link href="#action2">Notifications</Nav.Link>
                  <Nav.Link href="#action2">Profile</Nav.Link>
                  <NavDropdown
                    title="Book Details"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Book Details</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                    Order Details
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">Rent Details</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                    Overdue
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action2">Log Out</Nav.Link>

                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;