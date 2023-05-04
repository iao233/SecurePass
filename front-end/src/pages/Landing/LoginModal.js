import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useEffect, useState } from "react";

const LoginModal = ({ show, setShow }) => {
  const [loginInput, setLoginInput] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const loginInputChangeHandler = (event) => {
    setLoginInput((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            type="email"
            name="email"
            placeholder="name@example.com"
            onChange={loginInputChangeHandler}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            name="password"
            onChange={loginInputChangeHandler}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <Button variant="outline-secondary" onClick={toggleShowPassword}>
            {showPassword ? "Hide Password" : "Show Password"}
          </Button>
        </FloatingLabel>{" "}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={() => setShow(false)}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;
