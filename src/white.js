import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import axios from 'axios';
import * as THREE from 'three';

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
  background-color: rgba(1, 1, 20, 0.9);
  padding: 15px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #00bfff;
  text-transform: uppercase;
  display: flex;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
`;

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: transparent;
  color: #e0e0e0;
  position: relative;
  z-index: 1;
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: 48px;
  margin-bottom: 20px;
  color: #00bfff;
  text-shadow: 0 0 10px rgba(0, 191, 255, 0.5);
`;

const Subtitle = styled.h3`
  font-size: 24px;
  margin-bottom: 15px;
  color: #0095ff;
  text-shadow: 0 0 5px rgba(0, 149, 255, 0.5);
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ServiceCard = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  margin-bottom: 40px;
  transition: transform 0.3s ease, opacity 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 255, 0.2);
  }
`;

const ServiceImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const Footer = styled.footer`
  background-color: rgba(27, 27, 27, 0.9);
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
    image: '/images/penetration-testing.jpg',
    link: '/penetration-testing',
  },
  {
    title: 'Vulnerability Assessments',
    description: 'Thorough assessments to discover and address potential security weaknesses.',
    image: '/images/vulnerability-assessments.jpg',
    link: '/vulnerability-assessments',
  },
  {
    title: 'Security Audits',
    description: 'Comprehensive audits to ensure your organization meets security standards and regulations.',
    image: '/images/security-audits.jpg',
    link: '/security-audits',
  },
  {
    title: 'Incident Response',
    description: 'Fast and effective response to security breaches to minimize damage and recover swiftly.',
    image: '/images/incident-response.jpg',
    link: '/incident-response',
  },
  {
    title: 'Compliance Consulting',
    description: 'Expert guidance to help you comply with industry-specific regulations and standards.',
    image: '/images/compliance-consulting.jpg',
    link: '/compliance-consulting',
  },
  {
    title: 'Security Training',
    description: 'Equip your staff with the knowledge and skills to recognize and prevent cyber threats.',
    image: '/images/security-training.jpg',
    link: '/security-training',
  },
];

function App() {
  const [token, setToken] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();
  const sceneRef = useRef(null);

  useEffect(() => {
    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: 0x00bfff,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 3;

    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };

    animate();

    // GSAP animations
    gsap.from('.header', { y: -100, opacity: 0, duration: 1, ease: 'power2.out' });

    gsap.utils.toArray('.section').forEach((section, index) => {
      gsap.from(section, {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
          onEnter: () => {
            gsap.to(particlesMesh.rotation, { y: index * Math.PI / 3, duration: 1 });
          },
        },
      });
    });

    gsap.utils.toArray('.service-card').forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          end: 'top 60%',
          scrub: 1,
        },
      });
    });

    return () => {
      renderer.dispose();
      sceneRef.current.removeChild(renderer.domElement);
    };
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
      <div ref={sceneRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />
      <Header className="header">
        <Container>
          <Navbar expand="lg" variant="dark" bg="transparent">
            <Navbar.Brand href="#">
              <Logo>
                <img src="/images/logo.png" alt="CRAP Logo" />
                CRAP
              </Logo>
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
                  <Title>CRAP SECURITY</Title>
                  <Subtitle>Securing Your Digital Future</Subtitle>
                  <Paragraph>
                    We are a dedicated cybersecurity firm providing top-notch security services to protect businesses and individuals from the ever-evolving landscape of digital threats.
                  </Paragraph>
                </Container>
              </Section>

              <Section id="services" className="section">
                <Container>
                  <Title>Our Services</Title>
                  <Row>
                    {services.map((service, index) => (
                      <Col md={4} key={index} className="mb-4">
                        <ServiceCard className="service-card">
                          <div>
                            <ServiceImage src={service.image} alt={service.title} />
                            <Subtitle>{service.title}</Subtitle>
                            <Paragraph>{service.description}</Paragraph>
                          </div>
                          <Button variant="outline-primary" href={service.link}>
                            Learn More
                          </Button>
                        </ServiceCard>
                      </Col>
                    ))}
                  </Row>
                </Container>
              </Section>

              <Section id="team" className="section">
                <Container>
                  <Title>Meet Our Team</Title>
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

              <Section id="contact" className="section">
                <Container>
                  <Title>Contact Us</Title>
                  <Paragraph>
                    We are here to help you secure your digital future. Whether you need a comprehensive security audit, penetration testing, or ongoing support, our team is ready to assist.
                  </Paragraph>
                  <Button variant="primary" href="mailto:info@cybersecurity.com" size="lg">
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
        </Container>
      </Footer>
    </>
  );
}

export default App;