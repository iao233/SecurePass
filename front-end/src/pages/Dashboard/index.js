import { useContext } from "react";
import { SecureAppContext } from "../../context/SecureAppContext";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SideNav = () => {
  return (
    <Navbar
      bg="light"
      variant="light"
      expand="lg"
      style={{
        width: "285px",
        height: "100%",
        background: "linear-gradient(-90deg,#02203c,#001528)",
      }}
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="side-nav-content">
        <Nav className="flex-column ">
          <Nav.Link href="/" className="auth-opts-btn">
            Passwords
          </Nav.Link>
          <Nav.Link href="/about" className="auth-opts-btn">
            Notes
          </Nav.Link>
          <Nav.Link href="/contact" className="auth-opts-btn">
            Folders
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const Dashboard = () => {
  const { account } = useContext(SecureAppContext);

  return (
    <div style={{ height: "100%" }}>
      <Row style={{ height: "100%" }}>
        <Col md="auto">
          <SideNav />
        </Col>
        <Col>
        <br />
          <h5>Account: {account}</h5>
          <br />
          <h3>Passwords</h3>
          <Container>
            <Row>
              <Col xs={12} sm={6} md={4}>
                <Card>
                  <Card.Body>
                    <Card.Title>Card 1</Card.Title>
                    <Card.Text>This is the first card.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Card>
                  <Card.Body>
                    <Card.Title>Card 2</Card.Title>
                    <Card.Text>This is the second card.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Card>
                  <Card.Body>
                    <Card.Title>Card 3</Card.Title>
                    <Card.Text>This is the third card.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
