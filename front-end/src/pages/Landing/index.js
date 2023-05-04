import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import { SecureAppContext } from "../../context/SecureAppContext";
import React from "react";
import Card from "react-bootstrap/Card";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";



const CardComponent = ({ title, subtitle, text }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }} className="feature-cards">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

const Landing = () => {
  const [isInstalled, setIsInstalled] = React.useState(false); 

  React.useEffect(() => {
    setIsInstalled(Boolean(window.ethereum && window.ethereum.isMetaMask))
  }, [])


  const [loginModal, setLoginModal] = React.useState(false);
  const [registerModal, setRegisterModal] = React.useState(false);

  const { account, fetchData } = React.useContext(SecureAppContext);
  return (
    <div>
      <LoginModal show={loginModal} setShow={setLoginModal} />
      <RegisterModal show={registerModal} setShow={setRegisterModal} />
      <div className="blue-background">
        <Container style={{ width: "900px" }}>
          <Row>
            <Col className="title">
              <img src="imgs/logo.png" className="logo" />
              <h3>SecurePass</h3>
            </Col>
            <Col className="auth-opts">
              <Row>
                <Col>
                  <Navbar expand="lg" variant="dark">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">
                        {isInstalled ? <Nav.Link style={{ color: "white" }}>
                          <p
                            onClick={fetchData}
                            className="auth-opts-btn"
                          >
                            Connect Wallet
                          </p>
                        </Nav.Link>: <Nav.Link style={{ color: "white" }}>
                          <p
                            onClick={() => setLoginModal(true)}
                            className="auth-opts-btn"
                          >
                            Install Metamask
                          </p>
                        </Nav.Link>}
                        
                      </Nav>
                    </Navbar.Collapse>
                  </Navbar>
                </Col>
                {/* <Col md="auto">
                  <Nav.Link>Sign Up</Nav.Link>
                </Col> */}
              </Row>
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
          <div style={{ marginLeft: "80px" }}>
            <Row>
              <Col md="7">
                <div>
                  <h1>Are Your Passwords Safe?</h1>
                  <br />
                  <h5>
                    Today, we are using several services. And memorizing them is
                    a hefty challege. The solution is SecurePass, the latest
                    password manager.
                    {account}
                  </h5>
                </div>
              </Col>
              <Col md="4">
                <div style={{ textAlign: "right" }}>
                  <img src="imgs/logo.png" className="logo-big" />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Container
        className="card-group features"
        style={{ width: "1000px", paddingLeft: "50px" }}
      >
        <Row>
          <Col>
            <CardComponent
              title="Blockchain Technology"
              text="Your passwords will be stored in a decentralized ledger, aka a blockchain. This way only you control your passwords and can view your passwords. There is no centralized database storing your passwords!"
            />
          </Col>
          <Col>
            <CardComponent
              title="MetaMask"
              text="You will be authenticated by a compact wallet called MetaMask. It serves as our way of identifying you."
            />
          </Col>
          <Col>
            <CardComponent
              title="Ethereum"
              text="SecurePass is built on top of Etherum, which is the blockchain service that will store your data across different nodes in the network."
            />
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <Container style={{ width: "1000px", paddingLeft: "50px" }}>
        <Row>
          <Col>
            <h4>Author: Isfar Oshir</h4>
          </Col>
          <Col>
            <h4>Blockchain Final Project</h4>
          </Col>
          <Col>
            <h4>May 2023</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Landing;
