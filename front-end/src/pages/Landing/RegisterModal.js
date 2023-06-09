import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useContext, useEffect, useState } from "react";
import { SecureAppContext } from "../../context/SecureAppContext";

const RegisterModal = ({ show, setShow }) => {
  const [registerInput, setRegisterInput] = useState({});
  const { createAccount } = useContext(SecureAppContext);

  const registerInputChangeHandler = (event) => {
    setRegisterInput((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const register = () => {
    createAccount(
      registerInput.email,
      register.firstName + " " + register.lastName,
      register.password
    ).then((response) => {
      window.location.reload()
    })
  };

  const [showPassword, setShowPassword] = useState(false);
  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            name="email"
            type="email"
            placeholder="name@example.com"
            onChange={registerInputChangeHandler}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingFirstName"
          label="First name"
          className="mb-3"
        >
          <Form.Control
            name="firstName"
            type="name"
            placeholder="John"
            onChange={registerInputChangeHandler}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingLastName"
          label="Last Name"
          className="mb-3"
        >
          <Form.Control
            name="lastName"
            type="name"
            placeholder="Doe"
            onChange={registerInputChangeHandler}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            onChange={registerInputChangeHandler}
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
        <Button variant="primary" onClick={register}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RegisterModal;
