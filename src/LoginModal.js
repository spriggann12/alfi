import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import styled from 'styled-components';

// Styled components for the dark theme
const DarkModalHeader = styled(Modal.Header)`
  background-color: #1b1b1b;
  border-bottom: 1px solid #333;
  color: #e0e0e0;
`;

const DarkModalBody = styled(Modal.Body)`
  background-color: #121212;
  color: #e0e0e0;
`;

const DarkFormLabel = styled(Form.Label)`
  color: #00bfff;
`;

const DarkFormControl = styled(Form.Control)`
  background-color: #2b2b2b;
  color: #e0e0e0;
  border: 1px solid #333;
  &:focus {
    background-color: #333;
    color: #00bfff;
    border-color: #00bfff;
    box-shadow: none;
  }
`;

const DarkButton = styled(Button)`
  background-color: #00bfff;
  border-color: #00bfff;
  transition: background-color 0.3s, transform 0.3s;
  &:hover {
    background-color: #0095ff;
    transform: translateY(-2px);
  }
`;

function LoginModal({ show, handleClose, handleLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(username, password);
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <DarkModalHeader closeButton>
        <Modal.Title>Login</Modal.Title>
      </DarkModalHeader>
      <DarkModalBody>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername">
            <DarkFormLabel>Username</DarkFormLabel>
            <DarkFormControl
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <DarkFormLabel>Password</DarkFormLabel>
            <DarkFormControl
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <DarkButton variant="primary" type="submit">
            Login
          </DarkButton>
        </Form>
      </DarkModalBody>
    </Modal>
  );
}

export default LoginModal;
