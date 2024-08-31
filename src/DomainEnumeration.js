import React, { useState, useEffect, useRef } from 'react';
import { Form, Button, Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import axios from 'axios'; 
import styled from 'styled-components';
import { gsap } from 'gsap';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const DarkContainer = styled.div`
  background-color: #000; 
  color: #e0e0e0;
  padding: 40px;
  border-radius: 1px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledForm = styled(Form)`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    opacity: 1;
  }

  opacity: 0.85;
`;

const StyledButton = styled(Button)`
  margin-right: 10px;
  background-color: #0095ff;
  border: none;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #00bfff;
    transform: translateY(-3px);
  }
`;

const SubdomainsContainer = styled.pre`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 20px;
  border-radius: 8px;
  color: #00bfff;
  height: 200px;
  overflow-y: auto;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }

  opacity: 0.85;
`;

const Footer = styled.footer`
  background-color: #1b1b1b;
  color: #e0e0e0;
  padding: 20px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000;
`;

const SocialIcons = styled.div`
  margin-top: 10px;

  a {
    color: #00bfff;
    margin: 0 10px;
    font-size: 24px;
    transition: color 0.3s;

    &:hover {
      color: #0095ff;
    }
  }
`;

const DomainEnumeration = ({ token }) => {
  const [domain, setDomain] = useState('');
  const [results, setResults] = useState({
    subdomains: '',
    api: '',
    content: '',
    directories: '',
    dorking: '',
    info: '',
    logs: '',
    network: '',
    security: '',
    vulns: '',
    // Add other categories here as needed
  });

  const formRef = useRef(null);
  const resultsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" }
    );

    gsap.fromTo(
      resultsRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power2.out", delay: 0.3 }
    );
  }, []);

  const handleEnumeration = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/enum', { domain }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log('Enumeration started:', response.data.message);
    } catch (err) {
      console.error('Enumeration failed', err);
    }
  };

  const fetchResults = async (category) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/results/${domain}`, {
            headers: { Authorization: `Bearer ${token}` }
        });

        console.log('Fetched Results:', response.data); // Log the fetched data to verify

        setResults(prevResults => ({ ...prevResults, [category]: response.data.subdomains }));
    } catch (err) {
        console.error('Fetching results failed', err);
    }
};
;

  return (
    <DarkContainer>
      <Row>
        <Col md={12}>
          <h2>Domain Enumeration</h2>
          <StyledForm ref={formRef}>
            <Form.Group controlId="formDomain">
              <Form.Label>Enter Domain</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter domain"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
              />
            </Form.Group>
            <StyledButton variant="primary" onClick={handleEnumeration}>Start Enumeration</StyledButton>
            {/* The fetchResults button will now pass the selected category */}
            <StyledButton variant="secondary" onClick={() => fetchResults('subdomains')}>Fetch Subdomains</StyledButton>
          </StyledForm>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Tabs defaultActiveKey="subdomains" id="category-tabs">
          <Tab eventKey="subdomains" title="Subdomains">
  <SubdomainsContainer ref={resultsRef}>{results.subdomains}</SubdomainsContainer>
</Tab>

            <Tab eventKey="api" title="API">
              <SubdomainsContainer>{results.api}</SubdomainsContainer>
            </Tab>
            <Tab eventKey="content" title="Content">
              <SubdomainsContainer>{results.content}</SubdomainsContainer>
            </Tab>
            <Tab eventKey="directories" title="Directories">
              <SubdomainsContainer>{results.directories}</SubdomainsContainer>
            </Tab>
            <Tab eventKey="dorking" title="Dorking">
              <SubdomainsContainer>{results.dorking}</SubdomainsContainer>
            </Tab>
            <Tab eventKey="info" title="Info">
              <SubdomainsContainer>{results.info}</SubdomainsContainer>
            </Tab>
            <Tab eventKey="logs" title="Logs">
              <SubdomainsContainer>{results.logs}</SubdomainsContainer>
            </Tab>
            <Tab eventKey="network" title="Network">
              <SubdomainsContainer>{results.network}</SubdomainsContainer>
            </Tab>
            <Tab eventKey="security" title="Security">
              <SubdomainsContainer>{results.security}</SubdomainsContainer>
            </Tab>
            <Tab eventKey="vulns" title="Vulns">
              <SubdomainsContainer>{results.vulns}</SubdomainsContainer>
            </Tab>
            {/* Add more tabs here as needed */}
          </Tabs>
        </Col>
      </Row>
      <Footer>
        <Container>
          <Row>
            <Col md={12}>
              <p>© 2024 CRAP. All Rights Reserved.</p>
              <SocialIcons>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              </SocialIcons>
            </Col>
          </Row>
        </Container>
      </Footer>
    </DarkContainer>
  );
}

export default DomainEnumeration;
