import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import axios from 'axios';


import LoginModal from './LoginModal';
import DomainEnumeration from './DomainEnumeration';
import PenetrationTesting from './pages/PenetrationTesting';
import VulnerabilityAssessments from './pages/VulnerabilityAssessments';
import SecurityAudits from './pages/SecurityAudits';
import IncidentResponse from './pages/IncidentResponse';
import ComplianceConsulting from './pages/ComplianceConsulting';
import SecurityTraining from './pages/SecurityTraining';



gsap.registerPlugin(ScrollTrigger);

const Header = styled.header`
  background-color: rgba(20, 20, 20, 0.9);
  padding: 15px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #00bfff;
  text-transform: uppercase;
`;

const Section = styled.section`
  padding: 200px 0;
  text-align: left;
  background-color: ${(props) => (props.light ? '#1b1b1b' : '#121212')};
  color: #e0e0e0;
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  color: #00bfff;
`;

const Subtitle = styled.h3`
  font-size: 24px;
  margin-bottom: 15px;
  color: #0095ff;
`;

const Divider = styled.hr`
  width: 50px;
  height: 3px;
  background-color: #00bfff;
  border: none;
  margin: 20px auto 40px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const TransparentContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  margin-bottom: 40px;
  transition: transform 0.3s ease, opacity 0.3s ease;
  text-align: center;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    opacity: 1;
  }

  opacity: 0.8;
`;

const ServiceImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const Footer = styled.footer`
  background-color: #1b1b1b;
  color: #e0e0e0;
  padding: 30px 0;
  text-align: center;
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

const services = [
  {
    title: 'Penetration Testing',
    description: 'Identify and fix vulnerabilities in your systems before attackers can exploit them.',
    image: '/1.png',
    link: '/penetration-testing',
  },
  {
    title: 'Vulnerability Assessments',
    description: 'Thorough assessments to discover and address potential security weaknesses.',
    image: 'https://example.com/vulnerability-assessments.jpg',
    link: '/vulnerability-assessments',
  },
  {
    title: 'Security Audits',
    description: 'Comprehensive audits to ensure your organization meets security standards and regulations.',
    image: 'https://example.com/security-audits.jpg',
    link: '/security-audits',
  },
  {
    title: 'Incident Response',
    description: 'Fast and effective response to security breaches to minimize damage and recover swiftly.',
    image: 'https://example.com/incident-response.jpg',
    link: '/incident-response',
  },
  {
    title: 'Compliance Consulting',
    description: 'Expert guidance to help you comply with industry-specific regulations and standards.',
    image: 'https://example.com/compliance-consulting.jpg',
    link: '/compliance-consulting',
  },
  {
    title: 'Security Training',
    description: 'Equip your staff with the knowledge and skills to recognize and prevent cyber threats.',
    image: 'https://example.com/security-training.jpg',
    link: '/security-training',
  },
];

function App() {
  const [token, setToken] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      '.header',
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out' }
    );
    gsap.fromTo(
      '.section',
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.section',
          start: 'top 75%',
        },
      }
    );
    gsap.fromTo(
      '.service-container',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.service-container',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  const handleLogin = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', { username, password });
      setToken(response.data.token);
      setShowLoginModal(false);
      navigate('/enumeration');
    } catch (err) {
      console.error('Login failed', err);
      alert('Login failed: ' + err.response.data.error);
    }
  };

  return (
    <>
      <Header className="header">
        <Container>
          <Navbar expand="lg" variant="dark" bg="transparent">
            <Navbar.Brand href="#">
              <Logo>CRAP</Logo>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#about">About Us</Nav.Link>
                <Nav.Link href="#services">Services</Nav.Link>
                <Nav.Link href="#team">Team</Nav.Link>
                <Nav.Link href="#contact">Contact Us</Nav.Link>
                <Nav.Link href="#login" onClick={() => setShowLoginModal(true)}>
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Header>

      <Routes>
        <Route
          path="/"
          element={
            <>
            <Section id="about" className="section">
            <Container>
            <Title primary>CRAP SECURITY</Title>
            </Container>
            </Section>
              <Section id="about" className="section">
                <Container>
                  <Title primary>About Us</Title>
                  <Divider primary />
                  <Paragraph>
                    We are a dedicated cybersecurity firm providing top-notch security services to protect businesses and individuals from the ever-evolving landscape of digital threats.
                  </Paragraph>
                  <Subtitle primary>Our Mission</Subtitle>
                  <Paragraph>
                    Our mission is to secure the digital landscape by offering comprehensive security solutions tailored to meet the unique needs of each client.
                  </Paragraph>
                  <Subtitle primary>Why Choose Us?</Subtitle>
                  <Paragraph>
                    <ul style={{ textAlign: 'left', display: 'inline-block', color: '#cccccc' }}>
                      <li>
                        <strong>Experienced Team:</strong> Our team consists of seasoned professionals with years of experience in cybersecurity.
                      </li>
                      <li>
                        <strong>Innovative Solutions:</strong> We stay ahead of the curve by adopting the latest technologies and methodologies in the industry.
                      </li>
                      <li>
                        <strong>Client-Centric Approach:</strong> We prioritize our clients’ needs and provide customized solutions to ensure their digital assets are protected.
                      </li>
                    </ul>
                  </Paragraph>
                </Container>
              </Section>

              <Section id="services" light className="section">
                <Container>
                  <Title>Our Services</Title>
                  <Divider />
                  <Row>
                    {services.map((service, index) => (
                      <Col md={4} key={index}>
                        <a href={service.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                          <TransparentContainer className="service-container">
                            <ServiceImage src={service.image} alt={service.title} />
                            <Subtitle>{service.title}</Subtitle>
                            <Paragraph>{service.description}</Paragraph>
                          </TransparentContainer>
                        </a>
                      </Col>
                    ))}
                  </Row>
                </Container>
              </Section>

              <Section id="team" className="section">
                <Container>
                  <Title primary>Meet Our Team</Title>
                  <Divider primary />
                  <Paragraph>
                    Our team consists of highly skilled cybersecurity experts, ethical hackers, and IT professionals who are passionate about what they do.
                  </Paragraph>
                  <Paragraph>
                    With certifications such as CISSP, CEH, and CISM, our experts bring a wealth of knowledge and experience to every project, providing customized solutions that meet the unique needs of each client.
                  </Paragraph>
                  <Row>
                    <Col md={4}>
                      <Subtitle>Nidhin S</Subtitle>
                      <Paragraph>
                        Lead Security Analyst with 10+ years of experience in penetration testing and risk assessments.
                      </Paragraph>
                    </Col>
                    <Col md={4}>
                      <Subtitle>ill Switch</Subtitle>
                      <Paragraph>
                        Chief Technology Officer, specializing in security architecture and regulatory compliance.
                      </Paragraph>
                    </Col>
                    <Col md={4}>
                      <Subtitle>Dr Brain</Subtitle>
                      <Paragraph>
                        Ethical Hacker and Security Researcher with expertise in network security and exploit development.
                      </Paragraph>
                    </Col>
                  </Row>
                </Container>
              </Section>

              <Section id="contact" light className="section">
                <Container>
                  <Title>Contact Us</Title>
                  <Divider />
                  <Paragraph>
                    We are here to help you secure your digital future. Whether you need a comprehensive security audit, penetration testing, or ongoing support, our team is ready to assist.
                  </Paragraph>
                  <Button variant="primary" href="mailto:info@cybersecurity.com">
                    Get in Touch
                  </Button>
                </Container>
              </Section>
            </>
          }
        />
        <Route path="/enumeration" element={token ? <DomainEnumeration token={token} /> : <Navigate to="/" />} />
        <Route path="/penetration-testing" element={<PenetrationTesting />} />
        <Route path="/vulnerability-assessments" element={<VulnerabilityAssessments />} />
        <Route path="/security-audits" element={<SecurityAudits />} />
        <Route path="/incident-response" element={<IncidentResponse />} />
        <Route path="/compliance-consulting" element={<ComplianceConsulting />} />
        <Route path="/security-training" element={<SecurityTraining />} />
      </Routes>

      <LoginModal show={showLoginModal} handleClose={() => setShowLoginModal(false)} handleLogin={handleLogin} />

      <Footer>
        <Container>
          <Row>
            <Col md={12}>
              <p>© 2024 CRAP. All Rights Reserved.</p>
              <SocialIcons>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              </SocialIcons>
            </Col>
          </Row>
        </Container>
      </Footer>
    </>
  );
}

export default App;
