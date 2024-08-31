import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #000; /* Set background color to black */
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const Section = styled.section`
  padding: 60px 0;
  text-align: center;
  background-color: #000; /* Set section background color to black */
  color: #e0e0e0;
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  color: #00bfff;
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: left;
`;

const Footer = styled.footer`
  background-color: #000; /* Set footer background color to black */
  color: #e0e0e0;
  padding: 20px 0;
  text-align: center;
  position: relative;
  width: 100%;
`;

const PenetrationTesting = () => (
  <PageWrapper>
    <ContentWrapper>
      <Section>
        <Container>
          <Title>Penetration Testing</Title>
          <Paragraph>
            Our Penetration Testing service identifies vulnerabilities within your systems before attackers can exploit them. This service involves a thorough examination of your network, web applications, and other critical components.
          </Paragraph>
          <Paragraph>
            <strong>Requirements:</strong>
            <ul>
              <li>Access to all systems and applications to be tested.</li>
              <li>Administrator privileges for comprehensive testing.</li>
              <li>Clear objectives and scope of testing.</li>
              <li>Pre-testing briefing to discuss specific concerns and focus areas.</li>
            </ul>
          </Paragraph>
          <Paragraph>
            Our team of experts simulates real-world attacks, providing a detailed report with actionable insights and recommendations to enhance your security posture.
          </Paragraph>
        </Container>
      </Section>
    </ContentWrapper>
    <Footer>
      <p>© 2024 CRAP. All Rights Reserved.</p>
    </Footer>
  </PageWrapper>
);

export default PenetrationTesting;
