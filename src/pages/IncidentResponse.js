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

const IncidentResponse = () => (
  <PageWrapper>
    <ContentWrapper>
      <Section>
        <Container>
          <Title>Incident Response</Title>
          <Paragraph>
            Our Incident Response service helps you quickly and effectively respond to security breaches, minimizing damage and downtime. We provide expert guidance to contain, eradicate, and recover from incidents.
          </Paragraph>
          <Paragraph>
            <strong>Requirements:</strong>
            <ul>
              <li>Pre-established incident response plan (if available).</li>
              <li>Access to affected systems for analysis.</li>
              <li>Log files and forensic data for investigation.</li>
              <li>Coordination with internal teams for incident containment and recovery.</li>
            </ul>
          </Paragraph>
          <Paragraph>
            Our experts are available 24/7 to assist with incident response, ensuring that your organization can quickly return to normal operations.
          </Paragraph>
        </Container>
      </Section>
    </ContentWrapper>
    <Footer>
      <p>© 2024 CRAP. All Rights Reserved.</p>
    </Footer>
  </PageWrapper>
);

export default IncidentResponse;
